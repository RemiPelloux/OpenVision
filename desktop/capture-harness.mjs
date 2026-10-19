// Shared harness pieces for the Linux network-capture verifiers (OV-501,
// OV-1005): a clean app environment, a heartbeat that outlives an
// interrupted verifier, host-exit attribution and a /proc maps sampler.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { mappedLibraries, processRole } from './addon-inventory.mjs';

// Inherited proxy variables would send Node clients (extension hosts, npm,
// MCP children) to a host proxy on loopback, where the capture sees only a
// loopback connection. The capture owns the network boundary, so they are
// removed from the app environment.
const proxyVariable = /^(https?_proxy|all_proxy|no_proxy|ftp_proxy|socks_proxy|npm_config_(https?_)?proxy|npm_config_noproxy|global_agent_\w+|yarn_https?_proxy|docker_https?_proxy|electron_get_use_proxy)$/i;
export function captureEnvironment(base, extra = {}) {
  const env = {};
  for (const [name, value] of Object.entries(base)) if (!proxyVariable.test(name) && name !== 'ELECTRON_RUN_AS_NODE') env[name] = value;
  return { ...env, ...extra };
}
export const removedProxyVariables = base => Object.keys(base).filter(name => proxyVariable.test(name)).sort();

export function parseMeminfo(text) {
  const value = name => Number(new RegExp(`^${name}:\\s+(\\d+) kB`, 'm').exec(text)?.[1] ?? NaN);
  return { memAvailableKiB: value('MemAvailable'), memTotalKiB: value('MemTotal'), swapFreeKiB: value('SwapFree') };
}
// /proc/pressure/memory: "some avg10=0.00 avg60=0.00 avg300=0.00 total=0".
export function parsePressure(text) {
  const result = {};
  for (const line of String(text).split('\n')) {
    const [kind, ...fields] = line.trim().split(/\s+/);
    if (!kind) continue;
    result[kind] = Object.fromEntries(fields.map(field => field.split('=')).map(([key, value]) => [key, Number(value)]));
  }
  return result;
}
export async function memorySnapshot() {
  const meminfo = parseMeminfo(await readFile('/proc/meminfo', 'utf8').catch(() => ''));
  const pressure = parsePressure(await readFile('/proc/pressure/memory', 'utf8').catch(() => ''));
  return { ...meminfo, pressureSomeAvg10: pressure.some?.avg10, pressureFullAvg10: pressure.full?.avg10 };
}

// Written every interval. A run directory whose heartbeat stops without a
// result.json shows the verifier itself was stopped (harness reaping), and when.
export function startHeartbeat(file, state, intervalMs = 5000) {
  const samples = [];
  let stopped = false;
  const beat = async () => {
    const sample = { at: new Date().toISOString(), verifierPid: process.pid, ...state(), ...await memorySnapshot() };
    samples.push(sample);
    await writeFile(file, JSON.stringify({ last: sample, minMemAvailableKiB: Math.min(...samples.map(item => item.memAvailableKiB)),
      maxPressureSomeAvg10: Math.max(0, ...samples.map(item => item.pressureSomeAvg10 ?? 0)), beats: samples.length }) + '\n').catch(() => {});
  };
  const timer = setInterval(() => { if (!stopped) beat(); }, intervalMs);
  beat();
  return { samples, async stop() { stopped = true; clearInterval(timer); await beat(); } };
}

// Owned descendants of rootPid (read-only /proc walk; nothing is signalled).
export async function ownedFamily(rootPid, procRoot = '/proc') {
  const parents = new Map();
  for (const entry of await readdir(procRoot).catch(() => [])) {
    if (!/^\d+$/.test(entry)) continue;
    const stat = await readFile(`${procRoot}/${entry}/stat`, 'utf8').catch(() => '');
    if (stat) parents.set(Number(entry), Number(stat.slice(stat.lastIndexOf(')') + 2).split(' ')[1]));
  }
  const owned = new Set(parents.has(rootPid) ? [rootPid] : []);
  for (let changed = true; changed;) {
    changed = false;
    for (const [pid, ppid] of parents) if (owned.has(ppid) && !owned.has(pid)) { owned.add(pid); changed = true; }
  }
  return [...owned];
}

// Accumulates every library each owned process maps over the run, so
// short-lived processes and late-loaded addons are included.
export function startMapsSampler(rootPid, intervalMs = 3000, procRoot = '/proc') {
  const processes = new Map();
  let stopped = false, samples = 0;
  const sample = async () => {
    const pid = typeof rootPid === 'function' ? rootPid() : rootPid;
    if (!pid) return;
    for (const member of await ownedFamily(pid, procRoot)) {
      const maps = await readFile(`${procRoot}/${member}/maps`, 'utf8').catch(() => undefined);
      if (maps === undefined) continue;
      const entry = processes.get(member) ?? { libraries: new Set() };
      if (!entry.role) {
        const argv = (await readFile(`${procRoot}/${member}/cmdline`, 'utf8').catch(() => '')).split('\0').filter(Boolean);
        const comm = (await readFile(`${procRoot}/${member}/comm`, 'utf8').catch(() => '')).trim();
        entry.role = processRole(argv, comm);
        entry.command = argv.join(' ').replace(/--[\w-]*(token|key|secret)[\w-]*=\S+/gi, '$1=<redacted>').slice(0, 240);
      }
      for (const path of mappedLibraries(maps)) entry.libraries.add(path);
      processes.set(member, entry);
    }
    samples++;
  };
  const loop = (async () => { while (!stopped) { await sample(); await new Promise(done => setTimeout(done, intervalMs)); } })();
  return {
    processes, sample,
    get samples() { return samples; },
    async stop() { stopped = true; await loop; },
    snapshot: () => new Map([...processes].map(([pid, entry]) => [pid, { ...entry, libraries: [...entry.libraries] }])),
  };
}

// Signals recorded by `strace -e signal=...` (--- SIGTERM {si_signo=..., si_pid=N, ...} ---)
// and kill/tgkill calls, so an unrequested host exit can name its sender.
export function parseSignalTrace(text) {
  const deliveries = [], sends = [], exits = [];
  for (const line of String(text).split('\n')) {
    const pid = Number(/^(\d+)\s/.exec(line)?.[1]);
    const at = /^\d+\s+(\d+\.\d+)\s/.exec(line)?.[1];
    const delivered = /--- (SIG\w+) \{si_signo=\w+, si_code=(\w+)(?:, si_pid=(\d+))?/.exec(line);
    if (delivered) { deliveries.push({ pid, at, signal: delivered[1], code: delivered[2], sender: delivered[3] ? Number(delivered[3]) : undefined }); continue; }
    const sent = /\b(kill|tgkill|tkill)\(([^)]*)\)\s*=\s*(-?\d+)/.exec(line);
    if (sent) { sends.push({ pid, at, call: sent[1], args: sent[2], result: Number(sent[3]) }); continue; }
    const exited = /\+\+\+ (exited with (\d+)|killed by (SIG\w+))/.exec(line);
    if (exited) exits.push({ pid, at, code: exited[2] === undefined ? undefined : Number(exited[2]), signal: exited[3] });
  }
  return { deliveries, sends, exits };
}
