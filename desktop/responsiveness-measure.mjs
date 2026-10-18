// OV-1002 responsiveness accounting. Pure functions over samples collected by
// verify-responsiveness.mjs: frame gaps (requestAnimationFrame deltas), long
// tasks / long animation frames, input-to-paint latency, mounted rows, DOM
// nodes, renderer heap and process-family filesystem counters. Nothing here
// launches or signals a process.

const round = value => Math.round(value * 10) / 10;

export function percentile(values, p) {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  return round(sorted[Math.min(sorted.length - 1, Math.ceil((p / 100) * sorted.length) - 1)]);
}

/** Summary of requestAnimationFrame gaps and long tasks for one phase. */
export function summarizeFrames({ gaps = [], longTasks = [], longFrames = [], elapsedMs = 0 } = {}) {
  const frameGaps = gaps.filter(gap => gap > 0);
  return {
    frames: frameGaps.length, elapsedMs: Math.round(elapsedMs),
    frameP50Ms: percentile(frameGaps, 50), frameP95Ms: percentile(frameGaps, 95), frameP99Ms: percentile(frameGaps, 99),
    frameMaxMs: frameGaps.length ? round(Math.max(...frameGaps)) : null,
    framesOver50Ms: frameGaps.filter(gap => gap > 50).length,
    framesOver100Ms: frameGaps.filter(gap => gap > 100).length,
    longTasks: longTasks.length, longTaskTotalMs: Math.round(longTasks.reduce((sum, task) => sum + task, 0)),
    longTaskMaxMs: longTasks.length ? Math.round(Math.max(...longTasks)) : 0,
    longAnimationFrames: longFrames.length,
    longAnimationFrameBlockingMs: Math.round(longFrames.reduce((sum, frame) => sum + (frame.blockingDuration ?? 0), 0)),
    longAnimationFrameLayoutMs: Math.round(longFrames.reduce((sum, frame) => sum + (frame.styleAndLayoutMs ?? 0), 0)),
    forcedLayoutMs: Math.round(longFrames.reduce((sum, frame) => sum + (frame.forcedStyleAndLayoutMs ?? 0), 0)),
  };
}

/** Input-to-paint latency samples (ms) from keydown to the task after the next frame. */
export function summarizeLatency(samples = [], eventTimings = []) {
  return { keys: samples.length, latencyP50Ms: percentile(samples, 50), latencyP95Ms: percentile(samples, 95),
    latencyMaxMs: samples.length ? round(Math.max(...samples)) : null,
    // Event Timing entries (Chromium rounds to 8 ms; only entries >= 16 ms are reported).
    eventTimingOver16: eventTimings.length, eventTimingMaxMs: eventTimings.length ? Math.max(...eventTimings) : 0 };
}

/** Sum /proc/<pid>/io deltas between two samples keyed by pid+start identity. */
export function ioDelta(before = new Map(), after = new Map()) {
  const total = { rchar: 0, wchar: 0, syscr: 0, syscw: 0, read_bytes: 0, write_bytes: 0 };
  const byRole = {};
  for (const [identity, end] of after) {
    const start = before.get(identity) ?? { rchar: 0, wchar: 0, syscr: 0, syscw: 0, read_bytes: 0, write_bytes: 0 };
    const role = byRole[end.role] ??= { syscr: 0, syscw: 0, wchar: 0, write_bytes: 0 };
    for (const key of Object.keys(total)) {
      const delta = Math.max(0, (end[key] ?? 0) - (start[key] ?? 0));
      total[key] += delta;
      if (key in role) role[key] += delta;
    }
  }
  return { ...total, byRole };
}

export function parseProcIo(text) {
  return Object.fromEntries(text.split('\n').filter(Boolean).map(line => {
    const [key, value] = line.split(':'); return [key.trim(), Number(value)];
  }));
}

/**
 * Compare a result against budgets. `budgets.phases[phase][metric]` is an
 * upper bound unless the key starts with `min:`. A missing measurement fails.
 */
export function checkBudgets(result, budgets) {
  const failures = [];
  for (const [phase, limits] of Object.entries(budgets.phases ?? {})) {
    const measured = result.phases?.[phase];
    if (!measured) { failures.push(`${phase}: not measured`); continue; }
    for (const [key, limit] of Object.entries(limits)) {
      const minimum = key.startsWith('min:'), metric = minimum ? key.slice(4) : key;
      const value = measured[metric];
      if (value === undefined || value === null || Number.isNaN(value)) failures.push(`${phase}.${metric}: not measured`);
      else if (minimum ? value < limit : value > limit) failures.push(`${phase}.${metric}: ${value} ${minimum ? '<' : '>'} ${limit}`);
    }
  }
  return failures;
}

/**
 * Budgets that apply to one run: only the selected phases, and outside `--full`
 * without the metrics listed in `budgets.fullOnly` (dataset-sized minimums and
 * timings that are only meaningful on the full datasets).
 */
export function applicableBudgets(budgets, { full = true, selectedPhases } = {}) {
  const fullOnly = new Set(full ? [] : budgets.fullOnly ?? []);
  const phases = {};
  for (const [phase, limits] of Object.entries(budgets.phases ?? {})) {
    if (selectedPhases && !selectedPhases.includes(phase)) continue;
    phases[phase] = Object.fromEntries(Object.entries(limits).filter(([key]) => !fullOnly.has(`${phase}.${key}`)));
  }
  return { ...budgets, phases };
}

// In-page probe, serialized into the renderer with page.evaluate. Records rAF
// gaps, long tasks, long animation frames (with forced layout time), Event
// Timing entries and keydown-to-next-frame latency; optionally counts mutation
// records under a transcript container, attributed to the row they touch.
export function installProbe({ rowSelector, containerSelector } = {}) {
  const state = { gaps: [], longTasks: [], longFrames: [], eventTimings: [], latency: [], latencyKeys: [], mutations: 0,
    mutatedRows: new Map(), started: performance.now(), running: true, observers: [] };
  let last = performance.now();
  const frame = now => { if (!state.running) return; state.gaps.push(now - last); last = now; requestAnimationFrame(frame); };
  requestAnimationFrame(now => { last = now; requestAnimationFrame(frame); });
  const observe = (type, callback, options = {}) => {
    try { const observer = new PerformanceObserver(list => list.getEntries().forEach(callback));
      observer.observe({ type, ...options }); state.observers.push(observer); } catch { /* unsupported entry type */ }
  };
  observe('longtask', entry => state.longTasks.push(entry.duration));
  observe('long-animation-frame', entry => state.longFrames.push({ duration: entry.duration,
    blockingDuration: entry.blockingDuration, styleAndLayoutMs: entry.styleAndLayoutStart ? entry.startTime + entry.duration - entry.styleAndLayoutStart : 0,
    forcedStyleAndLayoutMs: (entry.scripts ?? []).reduce((sum, script) => sum + (script.forcedStyleAndLayoutDuration ?? 0), 0) }));
  observe('event', entry => { if (entry.name === 'keydown' || entry.name === 'keypress' || entry.name === 'input') state.eventTimings.push(entry.duration); }, { durationThreshold: 16 });
  const channel = new MessageChannel();
  const pending = [];
  channel.port1.onmessage = () => { const entry = pending.shift(); if (entry === undefined) return;
    const latency = performance.now() - entry.at; state.latency.push(latency);
    state.latencyKeys.push([entry.key, Math.round(latency * 10) / 10]); };
  const onKey = event => { if (!event.isTrusted) return; const at = event.timeStamp, key = event.key;
    requestAnimationFrame(() => { pending.push({ at, key }); channel.port2.postMessage(0); }); };
  document.addEventListener('keydown', onKey, true);
  state.removeKey = () => document.removeEventListener('keydown', onKey, true);
  if (containerSelector) {
    const container = document.querySelector(containerSelector);
    if (container) {
      const mutation = new MutationObserver(records => {
        for (const record of records) {
          state.mutations++;
          const target = record.target.nodeType === 1 ? record.target : record.target.parentElement;
          const row = target?.closest?.(rowSelector);
          const key = row ? (row.getAttribute('data-message-index') ?? row.getAttribute('data-index') ?? 'row') : 'outside-row';
          state.mutatedRows.set(key, (state.mutatedRows.get(key) ?? 0) + 1);
        }
      });
      mutation.observe(container, { subtree: true, childList: true, characterData: true, attributes: true });
      state.observers.push(mutation);
    }
  }
  window.__openvisionResponsivenessProbe = state;
}

/** Top self-time functions of a CDP CPU profile (diagnostic attribution only). */
export function profileHotspots(profile, limit = 25) {
  const byId = new Map(profile.nodes.map(node => [node.id, node]));
  const self = new Map();
  const deltas = profile.timeDeltas ?? [];
  (profile.samples ?? []).forEach((id, index) => {
    const frame = byId.get(id)?.callFrame; if (!frame) return;
    const key = `${frame.functionName || '(anonymous)'} ${frame.url.split('/').slice(-2).join('/')}:${frame.lineNumber + 1}:${frame.columnNumber + 1}`;
    self.set(key, (self.get(key) ?? 0) + (deltas[index] ?? 0) / 1000);
  });
  const total = [...self.values()].reduce((sum, value) => sum + value, 0);
  return { totalMs: Math.round(total), top: [...self.entries()].sort((a, b) => b[1] - a[1]).slice(0, limit)
    .map(([frame, ms]) => ({ frame, ms: Math.round(ms) })) };
}

export function collectProbe() {
  const state = window.__openvisionResponsivenessProbe;
  if (!state) return null;
  state.running = false; state.removeKey?.();
  for (const observer of state.observers) observer.disconnect();
  window.__openvisionResponsivenessProbe = undefined;
  return { gaps: state.gaps, longTasks: state.longTasks, longFrames: state.longFrames, eventTimings: state.eventTimings,
    latency: state.latency, latencyKeys: state.latencyKeys, mutations: state.mutations, mutatedRows: Object.fromEntries(state.mutatedRows),
    elapsedMs: performance.now() - state.started };
}
