import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

// Owned-process journal for debuggees started by the shipped JavaScript debugger
// (js-debug internal-console launcher) on Linux. It extends the Agent command
// exit model (agent-command-exit-customization.mjs): a PID is trusted only
// together with its /proc start time, process group and session, and only
// processes recorded by their owner are ever signalled.
//
// Why: js-debug spawns the debuggee from the extension host without an owner that
// survives an abrupt exit. After the main process is killed, the debuggee and its
// children keep running and the next start does not end them.
//
// The main process releases records written by its own children when it exits
// (graceful quit; normally js-debug has already ended the session) and, at the
// next start, records whose writer is gone (abrupt exit), after re-checking every
// identity. A debuggee tree gets SIGTERM, then SIGKILL after a grace period.
export const ownedProcessMarker = '/* OpenVision owned process journal v1 */';

export function openvisionOwnedProcessJournal(options) {
  const fs = process.getBuiltinModule('node:fs'), path = process.getBuiltinModule('node:path');
  const os = process.getBuiltinModule('node:os'), crypto = process.getBuiltinModule('node:crypto');
  const identity = pid => {
    if (!Number.isInteger(pid) || pid <= 0) return;
    try {
      const stat = fs.readFileSync(`/proc/${pid}/stat`, 'utf8');
      const fields = stat.slice(stat.lastIndexOf(')') + 2).split(' ');
      return { pid, state: fields[0], ppid: Number(fields[1]), pgid: Number(fields[2]), sid: Number(fields[3]),
        tpgid: Number(fields[5]), start: fields[19] };
    } catch {}
  };
  const self = process.platform === 'linux' && typeof process.getuid === 'function' ? identity(process.pid) : void 0;
  const journal = (() => {
    if (!self) return;
    try {
      let key = options.key;
      try { key = fs.realpathSync(key); } catch {}
      const hash = crypto.createHash('sha256').update(key).digest('hex').slice(0, 16);
      const directory = path.join(options.directory ?? os.tmpdir(), `openvision-owned-processes-${process.getuid()}-${hash}`);
      try { fs.mkdirSync(directory, { mode: 0o700 }); } catch (error) { if (error?.code !== 'EEXIST') throw error; }
      const stat = fs.lstatSync(directory);
      if (!stat.isDirectory() || stat.uid !== process.getuid() || (stat.mode & 0o077) !== 0) return;
      return directory;
    } catch {}
  })();
  const same = (expected, current) => !!current && current.state !== 'Z' && current.start === expected.start &&
    current.pgid === expected.pgid && current.sid === expected.sid;
  const send = (target, signal) => { try { process.kill(target, signal); } catch {} };
  const forget = file => { try { fs.unlinkSync(file); } catch {} };
  // Descendants are found through live parent links in one /proc scan, before
  // anything is signalled, so a reparented process is never mistaken for one.
  const descendants = root => {
    const children = new Map();
    let names = [];
    try { names = fs.readdirSync('/proc'); } catch {}
    for (const name of names) {
      if (!/^\d+$/.test(name)) continue;
      const item = identity(Number(name));
      if (!item || item.state === 'Z') continue;
      if (!children.has(item.ppid)) children.set(item.ppid, []);
      children.get(item.ppid).push(item);
    }
    const result = [], queue = [root.pid];
    while (queue.length) for (const item of children.get(queue.shift()) ?? []) { result.push(item); queue.push(item.pid); }
    return result;
  };
  // First step of a release. Returns the processes to re-check for SIGKILL.
  const end = entry => {
    const current = identity(entry.child?.pid);
    if (!same(entry.child, current)) return [];
    if (entry.kind === 'tree') {
      const members = [current, ...descendants(current)];
      for (const member of members) send(member.pid, 'SIGTERM');
      return members;
    }
    return [];
  };
  const force = targets => { for (const target of targets) if (same(target, identity(target.pid))) send(target.pid, 'SIGKILL'); };
  const records = () => {
    if (!journal) return [];
    let names = [];
    try { names = fs.readdirSync(journal).filter(name => name.endsWith('.json')); } catch {}
    return names.map(name => {
      const file = path.join(journal, name);
      try { return { file, ...JSON.parse(fs.readFileSync(file, 'utf8')) }; } catch { forget(file); }
    }).filter(Boolean);
  };
  return {
    directory: journal,
    // Called by the owner right after it starts the process.
    track(pid, kind, onExit) {
      if (!journal || kind !== 'tree') return;
      const child = identity(pid);
      if (!child) return;
      const file = path.join(journal, `${kind}-${self.pid}-${self.start}-${pid}.json`);
      try { fs.writeFileSync(file, JSON.stringify({ kind, owner: self, child }), { flag: 'wx', mode: 0o600 }); }
      catch { return; }
      try { onExit?.(() => forget(file)); } catch {}
    },
    // Graceful exit of the main process: release what its children recorded.
    // A synchronous exit allows no grace period.
    releaseChildren() {
      if (!self) return;
      for (const entry of records()) {
        if (entry.owner?.ppid !== process.pid || !(Number(entry.owner.start) >= Number(self.start))) continue;
        force(end(entry));
        forget(entry.file);
      }
    },
    // Next start after an abrupt exit: release records whose writer is gone.
    reap(grace = 1000) {
      for (const entry of records()) {
        if (!entry.owner || same(entry.owner, identity(entry.owner.pid))) continue;
        const targets = end(entry);
        if (!targets.length) { forget(entry.file); continue; }
        const timer = setTimeout(() => { force(targets); forget(entry.file); }, grace);
        timer.unref?.();
      }
    },
  };
}

export const ownedProcessRuntime = key => `${ownedProcessMarker}
const openvisionOwnedProcesses = (${openvisionOwnedProcessJournal.toString()})({ key: ${key} });
`;

const unique = (text, pattern, label) => {
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1) throw new Error(`${label} missing or ambiguous`);
  return matches[0];
};

// Main process: reap at start, release children's records at exit.
export function retainOwnedProcessesMain(text) {
  if (text.includes(ownedProcessMarker)) return text;
  return `${ownedProcessRuntime('process.getBuiltinModule("node:path").join(import.meta.dirname, "..")')}` +
    'process.once("exit", () => openvisionOwnedProcesses.releaseChildren());\n' +
    'setImmediate(() => openvisionOwnedProcesses.reap());\n' + text;
}

// js-debug internal-console launcher: record the debuggee and its descendants.
const debugSpawn = /let ([\w$]+) = \(0, ([\w$]+)\.spawn\)\(i, o, \{\n\s*shell: s,\n\s*cwd: a,\n\s*env: ([\w$]+)\.merge\(\3\.processEnv\(\), t\.env\)\.defined\(\),\n\s*\}\);/g;
export function retainOwnedProcessesDebugger(text) {
  if (text.includes(ownedProcessMarker)) return text;
  const match = unique(text, debugSpawn, 'Debugger launch owner');
  const before = text.slice(Math.max(0, match.index - 500), match.index);
  if (!before.includes('return e.console === "internalConsole";') || !before.includes('async launchProgram(e, t, n) {'))
    throw new Error('Debugger launch contract changed');
  const strict = '"use strict";\n', at = text.indexOf(strict);
  if (at < 0 || at > 200) throw new Error('Debugger bundle prologue changed');
  const child = match[1];
  const tracked = `${match[0]}\n    openvisionOwnedProcesses.track(${child}.pid, "tree", (l) => ${child}.once("exit", l));`;
  const body = text.slice(0, match.index) + tracked + text.slice(match.index + match[0].length);
  const split = at + strict.length;
  return body.slice(0, split) +
    ownedProcessRuntime('require("node:path").join(__dirname, "../../..")') + body.slice(split);
}

export const ownedProcessTargets = [
  ['out/main.js', retainOwnedProcessesMain],
  ['extensions/ms-vscode.js-debug/src/extension.js', retainOwnedProcessesDebugger],
];

export async function installOwnedProcesses(root) {
  for (const [relative, transform] of ownedProcessTargets) {
    const path = join(root, 'source/app', relative);
    const before = await readFile(path, 'utf8'), after = transform(before);
    if (before === after) continue;
    const backup = join(root, 'backups/owned-processes', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
}
