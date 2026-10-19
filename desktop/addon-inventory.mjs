// Native addon inventory for the owned process family (OV-501, Linux).
// Pure functions: /proc/<pid>/maps parsing, thread-to-process attribution
// from an strace log, and the per-addon inventory with its two gates.
import { relative, sep } from 'node:path';

const nodeAddon = /\.node$/;
const sharedObject = /\.so(?:\.\d+)*$/;

// File-backed mappings that are native addons (.node) or shared objects
// (.so[.N]). The kernel appends " (deleted)" to replaced files.
export function mappedLibraries(maps) {
  const paths = new Set();
  for (const line of String(maps).split('\n')) {
    const path = line.trim().split(/\s+/).slice(5).join(' ').replace(/ \(deleted\)$/, '');
    if (path.startsWith('/') && (nodeAddon.test(path) || sharedObject.test(path))) paths.add(path);
  }
  return [...paths].sort();
}

const inside = (path, directory) => Boolean(directory) && (path === directory || path.startsWith(directory.endsWith(sep) ? directory : directory + sep));

// "bundled": shipped in the application tree; "run": written during the run
// (installed extensions, profile, fixtures); "system": anything else.
export function libraryScope(path, { appRoot, runDirectory } = {}) {
  if (inside(path, appRoot)) return 'bundled';
  if (inside(path, runDirectory)) return 'run';
  return 'system';
}

// Process role from its command line: Chromium process type, utility
// sub-type and the executable name.
export function processRole(argv = [], comm = '') {
  const type = argv.find(arg => arg.startsWith('--type='))?.slice(7);
  const subType = argv.find(arg => arg.startsWith('--utility-sub-type='))?.slice(19);
  const executable = argv[0]?.split('/').pop() ?? comm;
  if (!type) return `${executable}${comm && comm !== executable ? ` (${comm})` : ''}`;
  return [type, subType, comm].filter(Boolean).join(':');
}

// strace -f reports thread ids. A clone/clone3 carrying CLONE_THREAD creates a
// thread of the caller's thread group; any other clone, fork or vfork creates a
// process. Returns tid -> tgid for every traced thread.
export function threadGroups(trace) {
  const parent = new Map(), pending = new Map();
  for (const line of String(trace).split('\n')) {
    const pid = Number(/^(\d+)\s/.exec(line)?.[1]);
    if (!pid) continue;
    const start = /^\d+\s+(clone3?|fork|vfork)\((.*)$/.exec(line);
    const resumed = /^\d+\s+<\.\.\. (clone3?|fork|vfork) resumed>(.*)$/.exec(line);
    let thread, rest;
    if (start) { thread = /CLONE_THREAD/.test(start[2]); rest = start[2]; }
    else if (resumed) { thread = pending.get(pid); pending.delete(pid); rest = resumed[2]; }
    else continue;
    const child = Number(/\) = (\d+)/.exec(rest)?.[1]);
    if (start && !child && /<unfinished \.\.\.>\s*$/.test(rest)) { pending.set(pid, thread); continue; }
    if (child && thread) parent.set(child, pid);
  }
  const groups = new Map();
  const leader = tid => {
    const seen = new Set();
    let current = tid;
    while (parent.has(current) && !seen.has(current)) { seen.add(current); current = parent.get(current); }
    return current;
  };
  for (const tid of parent.keys()) groups.set(tid, leader(tid));
  return groups;
}

export const tgidOf = (groups, tid) => groups.get(tid) ?? tid;

// One row per mapped addon. `processes` maps pid -> { role, libraries: [paths] };
// `hashes` maps path -> sha256 (null when unreadable); `directPids` are thread
// group ids that made a direct (non-proxy) non-loopback connect; `known` lists
// expected addons as { path (relative to appRoot), sha256 }.
export function inventoryAddons({ processes, hashes, directPids = [], known = [], appRoot, runDirectory }) {
  const rows = new Map();
  const direct = new Set(directPids);
  let systemLibraries = 0;
  for (const [pid, { role, libraries }] of processes) {
    for (const path of libraries) {
      const scope = libraryScope(path, { appRoot, runDirectory });
      if (scope === 'system' && !nodeAddon.test(path)) { systemLibraries++; continue; }
      const row = rows.get(path) ?? { path, relative: scope === 'bundled' ? relative(appRoot, path) : undefined, scope,
        kind: nodeAddon.test(path) ? 'node-addon' : 'shared-object', sha256: hashes.get(path) ?? null,
        roles: new Set(), pids: new Set(), directConnectPids: new Set() };
      row.roles.add(role); row.pids.add(pid);
      if (direct.has(pid)) row.directConnectPids.add(pid);
      rows.set(path, row);
    }
  }
  const expected = new Map(known.map(entry => [entry.path, entry.sha256]));
  const addons = [...rows.values()].map(row => ({ ...row, roles: [...row.roles].sort(), pids: [...row.pids].sort((a, b) => a - b),
    directConnectPids: [...row.directConnectPids].sort((a, b) => a - b),
    known: row.relative !== undefined && expected.has(row.relative) && expected.get(row.relative) === row.sha256 }))
    .sort((a, b) => a.path.localeCompare(b.path));
  const unknownWithDirectSockets = addons.filter(row => !row.known && row.directConnectPids.length);
  return {
    addons, systemLibraryMappings: systemLibraries,
    unknown: addons.filter(row => !row.known).map(row => row.path),
    unknownWithDirectSockets: unknownWithDirectSockets.map(({ path, roles, directConnectPids }) => ({ path, roles, directConnectPids })),
    knownWithDirectSockets: addons.filter(row => row.known && row.directConnectPids.length)
      .map(({ path, roles, directConnectPids }) => ({ path, roles, directConnectPids })),
    checks: {
      addonsInventoried: addons.length > 0 && addons.every(row => row.sha256 && row.roles.length),
      noAddonDirectSockets: unknownWithDirectSockets.length === 0,
    },
  };
}
