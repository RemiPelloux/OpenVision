// OV-801 measured loaded roles: pure helpers for verify:native-loaded. Maps
// runtime paths (electron-host/ and source/app/) back to inventory paths
// (usr/share/cursor/...), parses per-thread strace output (strace -ff) for
// execve/openat/clone events, and aggregates /proc/<pid>/maps samples and trace
// events into one record per inventory path.
import { basename } from 'node:path';

export const nativePattern = /\.(node|wasm)$|\.so(\.\d+)*$/;

// Runtime absolute path -> inventory path, or null when outside the runtime roots.
export function inventoryPathFor(path, { host, app, executable = 'openvision' }) {
  if (!path?.startsWith('/')) return null;
  for (const prefix of [`${host}/resources/app/`, `${app}/`])
    if (path.startsWith(prefix)) return `usr/share/cursor/resources/app/${path.slice(prefix.length)}`;
  if (path === `${host}/${executable}`) return 'usr/share/cursor/cursor';
  if (path.startsWith(`${host}/`)) return `usr/share/cursor/${path.slice(host.length + 1)}`;
  return null;
}

// File-backed mappings from /proc/<pid>/maps text (unique paths; deleted files kept with a marker).
export function mappedPaths(maps) {
  const paths = new Set();
  for (const line of maps.split('\n')) {
    const match = /^\S+\s+\S+\s+\S+\s+\S+\s+(\d+)\s+(\/.*)$/.exec(line);
    if (match && match[1] !== '0') paths.add(match[2]);
  }
  return [...paths];
}

// strace prints C escapes: \\xHH, octal \\NNN and the usual single-character forms.
const escapes = { n: '\n', t: '\t', r: '\r', v: '\v', f: '\f', a: '\x07', b: '\b' };
const unquote = text => Buffer.from(text.replace(/\\(x[0-9a-fA-F]{2}|[0-7]{1,3}|.)/g, (_, code) =>
  code[0] === 'x' ? String.fromCharCode(parseInt(code.slice(1), 16)) : /^[0-7]/.test(code) ? String.fromCharCode(parseInt(code, 8))
    : escapes[code] ?? code), 'latin1').toString('utf8');
// One strace -ff -ttt line from thread `tid`'s file.
export function parseTraceLine(line, tid) {
  const match = /^(\d+\.\d+)\s+(execve|execveat|openat|clone3?|vfork|fork)\((.*)\)\s+=\s+(-?\d+)/.exec(line);
  if (!match) return null;
  const [, time, call, args, result] = match;
  const event = { tid, at: Number(time), call, result: Number(result) };
  if (event.result < 0) return null;
  if (call === 'execve' || call === 'execveat') {
    const path = /^(?:\w+, )?"((?:[^"\\]|\\.)*)"/.exec(args);
    const argv = /\[((?:"(?:[^"\\]|\\.)*"(?:, )?)*)/.exec(args.slice(path ? path.index + path[0].length : 0));
    event.path = path ? unquote(path[1]) : null;
    event.argv = argv ? [...argv[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map(item => unquote(item[1])).slice(0, 8) : [];
  } else if (call === 'openat') {
    const path = /^[^,]+, "((?:[^"\\]|\\.)*)"/.exec(args);
    event.path = path ? unquote(path[1]) : null;
  } else {
    event.child = event.result;
    event.thread = /CLONE_THREAD/.test(args);
  }
  return event;
}

// Thread -> process (tgid) and process -> parent process, from clone events.
export function processTree(events, roots = []) {
  const tgid = new Map(roots.map(pid => [pid, pid])), parent = new Map();
  for (const event of [...events].sort((a, b) => a.at - b.at)) {
    if (!['clone', 'clone3', 'fork', 'vfork'].includes(event.call)) continue;
    const caller = tgid.get(event.tid) ?? event.tid;
    if (event.thread) tgid.set(event.child, caller);
    else { tgid.set(event.child, event.child); parent.set(event.child, caller); }
  }
  return { tgid: tid => tgid.get(tid) ?? tid, parent: pid => parent.get(pid) ?? null };
}

export const phaseAt = (phases, at) => phases.find(phase => at >= phase.start && at <= (phase.end ?? Infinity))?.name ?? 'between-phases';

// One record per inventory path. `samples`: [{ phase, at, processes: [{ pid, role, maps: [path] }] }].
// `events`: parsed trace events. `roles`: pid -> role (from samples and Electron metrics).
// `isNative(runtimePath)` decides whether an executed file outside the inventory is
// native code (an inventory gap) or a script (recorded separately).
export function aggregate({ inventory, samples, events, phases, roles, roots, tree, isNative = path => nativePattern.test(path) }) {
  const records = new Map(inventory.map(item => [item.path, { path: item.path, kind: item.kind, sha256: item.sha256,
    mapped: { samples: 0, pids: new Set(), roles: new Set(), phases: new Set() },
    executed: { count: 0, pids: new Set(), roles: new Set(), parents: new Set(), phases: new Set() },
    opened: { count: 0, roles: new Set(), phases: new Set() } }]));
  const unknown = new Map(), scripts = new Map();
  const note = (path, how) => { if (nativePattern.test(path)) unknown.set(path, how); };
  const roleOf = pid => roles.get(pid) ?? null;
  for (const sample of samples) for (const process of sample.processes) for (const path of process.maps) {
    const key = inventoryPathFor(path.replace(/ \(deleted\)$/, ''), roots);
    if (!key) continue;
    const record = records.get(key);
    if (!record) { note(key, 'mapped'); continue; }
    record.mapped.samples++; record.mapped.pids.add(process.pid); record.mapped.roles.add(process.role); record.mapped.phases.add(sample.phase);
  }
  for (const event of events) {
    if (!event.path) continue;
    const key = inventoryPathFor(event.path, roots);
    if (!key) continue;
    const record = records.get(key);
    const pid = tree.tgid(event.tid), phase = phaseAt(phases, event.at);
    if (event.call.startsWith('exec')) {
      if (!record) {
        if (isNative(event.path)) unknown.set(key, 'executed'); else scripts.set(key, (scripts.get(key) ?? 0) + 1);
        continue;
      }
      const parent = tree.parent(pid);
      record.executed.count++; record.executed.pids.add(pid); record.executed.phases.add(phase);
      record.executed.roles.add(roleOf(pid) ?? `child:${basename(event.path)}`);
      if (parent) record.executed.parents.add(roleOf(parent) ?? `pid-not-sampled`);
    } else if (event.call === 'openat') {
      if (!record) { if (nativePattern.test(key)) note(key, 'opened'); continue; }
      record.opened.count++; record.opened.phases.add(phase);
      record.opened.roles.add(roleOf(pid) ?? 'process-not-sampled');
    }
  }
  const sorted = set => [...set].sort();
  const list = [...records.values()].map(record => {
    const loaded = record.mapped.samples > 0 || record.executed.count > 0;
    const state = loaded ? (record.mapped.samples ? 'mapped' : 'executed') : record.opened.count ? (record.kind === 'wasm' ? 'read' : 'opened-not-mapped') : 'never-loaded';
    const phasesSeen = sorted(new Set([...record.mapped.phases, ...record.executed.phases, ...record.opened.phases]));
    return { path: record.path, kind: record.kind, sha256: record.sha256, state,
      roles: sorted(new Set([...record.mapped.roles, ...record.executed.roles, ...record.opened.roles])),
      parents: sorted(record.executed.parents), trigger: firstPhase(phases, phasesSeen), phases: phasesSeen,
      frequency: { mappedSamples: record.mapped.samples, mappedProcesses: record.mapped.pids.size,
        executions: record.executed.count, opens: record.opened.count } };
  });
  return { records: list, unknown: [...unknown].map(([path, how]) => ({ path, how })),
    scriptExecutions: [...scripts].map(([path, count]) => ({ path, count })) };
}
const firstPhase = (phases, seen) => phases.map(phase => phase.name).find(name => seen.includes(name)) ?? (seen[0] ?? null);
