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
    // Gaps by whole display refresh intervals (1 = on time, 2 = one missed vsync, ...;
    // the last bucket is 5 or more). On a 60 Hz display a p95 of 49.9 ms is a 3-refresh frame.
    frameRefreshHistogram: refreshHistogram(frameGaps),
    longTasks: longTasks.length, longTaskTotalMs: Math.round(longTasks.reduce((sum, task) => sum + task, 0)),
    longTaskMaxMs: longTasks.length ? Math.round(Math.max(...longTasks)) : 0,
    longAnimationFrames: longFrames.length,
    longAnimationFrameBlockingMs: Math.round(longFrames.reduce((sum, frame) => sum + (frame.blockingDuration ?? 0), 0)),
    longAnimationFrameLayoutMs: Math.round(longFrames.reduce((sum, frame) => sum + (frame.styleAndLayoutMs ?? 0), 0)),
    forcedLayoutMs: Math.round(longFrames.reduce((sum, frame) => sum + (frame.forcedStyleAndLayoutMs ?? 0), 0)),
  };
}

const REFRESH_MS = 1000 / 60;
export function refreshHistogram(gaps, refreshMs = REFRESH_MS) {
  const buckets = [0, 0, 0, 0, 0];
  for (const gap of gaps) buckets[Math.min(4, Math.max(0, Math.round(gap / refreshMs) - 1))]++;
  return buckets;
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
    const role = byRole[end.role] ??= { syscr: 0, syscw: 0, rchar: 0, wchar: 0, write_bytes: 0, cpuMs: 0 };
    for (const key of Object.keys(total)) {
      const delta = Math.max(0, (end[key] ?? 0) - (start[key] ?? 0));
      total[key] += delta;
      if (key in role) role[key] += delta;
    }
    // utime + stime in clock ticks (USER_HZ 100 on Linux x64): 10 ms per tick.
    role.cpuMs += Math.max(0, (end.cpuTicks ?? 0) - (start.cpuTicks ?? 0)) * 10;
  }
  return { ...total, byRole };
}

/**
 * Per-key editor synchronisation cost from one editor phase's process-family deltas.
 * Edits travel renderer -> extension host -> TypeScript server, so the renderer's
 * writes (wchar; IPC pipes and sockets) bound what the extension host receives, and the
 * TypeScript servers' reads (rchar) bound what they receive. Replies are recorded
 * separately (`tsserverWritePerKey`, `extensionHostWritePerKey`). CPU is per role,
 * all threads, so a full re-tokenization in a worker or a language server shows here
 * even when no main-thread long task does.
 */
export function editTraffic(byRole = {}, keys = 0) {
  const sum = (roles, key) => roles.reduce((total, role) => total + (byRole[role]?.[key] ?? 0), 0);
  const tsserver = Object.keys(byRole).filter(role => role === 'child:tsserver');
  const perKey = value => keys ? Math.round(value / keys) : null;
  return {
    editKeys: keys,
    rendererWritePerKey: perKey(sum(['renderer'], 'wchar')),
    extensionHostReadPerKey: perKey(sum(['extension-host'], 'rchar')),
    extensionHostWritePerKey: perKey(sum(['extension-host'], 'wchar')),
    tsserverReadPerKey: tsserver.length ? perKey(sum(tsserver, 'rchar')) : null,
    tsserverWritePerKey: tsserver.length ? perKey(sum(tsserver, 'wchar')) : null,
    rendererCpuMsPerKey: keys ? Math.round(sum(['renderer'], 'cpuMs') / keys * 10) / 10 : null,
    extensionHostCpuMsPerKey: keys ? Math.round(sum(['extension-host'], 'cpuMs') / keys * 10) / 10 : null,
    tsserverCpuMsPerKey: keys && tsserver.length ? Math.round(sum(tsserver, 'cpuMs') / keys * 10) / 10 : null,
  };
}

/** Large-file cost relative to the small control file for the same typed keys (1 = independent of file size). */
export function sizeRatios(large = {}, small = {}, keys = []) {
  return Object.fromEntries(keys.map(key => {
    const a = large[key], b = small[key];
    return [`${key}Ratio`, a == null || b == null ? null : Math.round(a / Math.max(b, 1) * 100) / 100];
  }));
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

// In-page: resolves with the wall-clock time (performance.timeOrigin + now) of the frame
// after the one in which `text` is first found in the streaming reply, i.e. after that
// frame was painted. Checked once per frame, only inside the row that holds `begins`
// (re-found if the virtualizer replaces it), so the check stays small while the user types.
export function waitForStreamPaint({ text, begins, rowSelector, containerSelector, timeoutMs }) {
  return new Promise((resolvePaint, rejectPaint) => {
    const deadline = performance.now() + timeoutMs;
    // Drain progress: [ms since the check started, reply text length] every 6th frame.
    let row = null, frames = 0; const started = performance.now(), progress = [];
    const findRow = () => {
      const containers = [...document.querySelectorAll(containerSelector)];
      for (const container of containers)
        for (const candidate of container.querySelectorAll(rowSelector)) if (candidate.textContent.includes(begins)) return candidate;
      // No row holds the start of the reply (virtualized away or a different layout): whole transcript.
      return containers.find(container => container.textContent.includes(begins)) ?? null;
    };
    const check = () => {
      frames++;
      if (!row?.isConnected) row = findRow();
      const content = row?.textContent ?? '';
      if (frames % 6 === 1 && progress.length < 400) progress.push([Math.round(performance.now() - started), content.length]);
      if (content.includes(text)) {
        const found = performance.timeOrigin + performance.now();
        progress.push([Math.round(performance.now() - started), content.length]);
        requestAnimationFrame(() => resolvePaint({ paintedEpoch: performance.timeOrigin + performance.now(), foundEpoch: found, frames, progress }));
      } else if (performance.now() > deadline) rejectPaint(new Error(`stream text not painted: ${text}`));
      else requestAnimationFrame(check);
    };
    requestAnimationFrame(check);
  });
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
