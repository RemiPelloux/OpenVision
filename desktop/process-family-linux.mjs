import { readdir, readFile, readlink } from 'node:fs/promises';

// Read-only Linux process-family sampler for OV-1003 measurements.
// Membership: descendants of the owned host (by /proc ancestry, each child born
// no earlier than its parent) plus members of the owned host's process group.
// Memory is private memory from /proc/<pid>/smaps_rollup: USS (Private_Clean +
// Private_Dirty), PSS and swapped pages. Summed RSS double-counts shared pages
// and is not used. Nothing here ever signals a process.

const read = (path, encoding = 'utf8') => readFile(path, encoding).catch(() => '');
const field = (text, name) => Number(new RegExp(`^${name}:\\s+(\\d+)`, 'm').exec(text)?.[1] ?? 0);
export const mib = kib => Math.round(kib / 102.4) / 10;
const round = value => Math.round(value * 10) / 10;

// Electron's own names for its processes (app.getAppMetrics()), read through the
// owned automation connection. Utility processes on this host do not expose
// their VS Code entry point in /proc/<pid>/environ.
export async function electronNames(app) {
  const metrics = await app.evaluate(({ app }) => app.getAppMetrics()
    .map(({ pid, type, name, serviceName }) => ({ pid, type, name, serviceName })));
  return new Map(metrics.map(metric => [metric.pid, metric]));
}

export function processRole(metric, cmdline, comm) {
  if (metric) {
    const name = metric.name ?? '';
    for (const [pattern, role] of [[/^extension-?host/i, 'extension-host'], [/pty/i, 'pty-host'],
      [/shared/i, 'shared-process'], [/watcher/i, 'file-watcher'], [/mcp/i, 'mcp-utility']])
      if (pattern.test(name)) return role;
    if (metric.type === 'Browser') return 'main';
    if (metric.type === 'GPU') return 'gpu';
    if (metric.type === 'Tab') return 'renderer';
    if (metric.type === 'Utility') return `utility:${name || metric.serviceName || 'unknown'}`;
    return `${metric.type}${name ? `:${name}` : ''}`.toLowerCase();
  }
  const type = /--type=([\w-]+)/.exec(cmdline)?.[1];
  if (type === 'zygote') return 'zygote';
  if (type === 'utility') return `utility:${/--utility-sub-type=([\w.]+)/.exec(cmdline)?.[1] ?? 'unknown'}`;
  if (type) return type;
  // Children started by app processes (shells, language servers, helpers).
  if (/tsserver|typescript/.test(cmdline)) return 'child:tsserver';
  if (/(^|\/)rg(\s|$)/.test(cmdline)) return 'child:ripgrep';
  if (/(^|\/)(bash|zsh|sh|fish)(\s|$)/.test(cmdline)) return 'child:shell';
  return `child:${comm}`;
}

async function table() {
  const entries = new Map();
  for (const entry of await readdir('/proc')) {
    if (!/^\d+$/.test(entry)) continue;
    const stat = await read(`/proc/${entry}/stat`); if (!stat) continue;
    const fields = stat.slice(stat.lastIndexOf(')') + 2).split(' ');
    entries.set(Number(entry), { pid: Number(entry), comm: stat.slice(stat.indexOf('(') + 1, stat.lastIndexOf(')')),
      state: fields[0], ppid: Number(fields[1]), pgid: Number(fields[2]), start: Number(fields[19]),
      // utime + stime in clock ticks (USER_HZ, 100 on Linux x64).
      cpuTicks: Number(fields[11]) + Number(fields[12]) });
  }
  return entries;
}

// File-system watches held by a process: inotify watch descriptors from fdinfo.
// Terminal masters are /dev/ptmx descriptors. Extensions with native addons are
// identified from the mapped files of extension hosts.
async function watchers(pid, role) {
  let inotifyWatches = 0, fds = 0, ptmx = 0;
  for (const fd of await readdir(`/proc/${pid}/fd`).catch(() => [])) {
    fds++;
    const target = await readlink(`/proc/${pid}/fd/${fd}`).catch(() => '');
    if (target === '/dev/ptmx') ptmx++;
    if (target !== 'anon_inode:inotify') continue;
    inotifyWatches += (await read(`/proc/${pid}/fdinfo/${fd}`)).split('\n').filter(line => line.startsWith('inotify wd:')).length;
  }
  const addons = role === 'extension-host' ? [...new Set([...(await read(`/proc/${pid}/maps`))
    .matchAll(/\/extensions\/([^/\s]+)\/\S+\.node$/gm)].map(match => match[1]))].sort() : undefined;
  return { fds, inotifyWatches, ptmx, addons };
}

export async function processFamily({ rootPid, groups = [rootPid], names = new Map(), detail = false } = {}) {
  const all = await table();
  const root = all.get(rootPid);
  const members = new Map();
  if (root) members.set(rootPid, root);
  for (let grew = true; grew;) {
    grew = false;
    for (const item of all.values()) {
      if (members.has(item.pid)) continue;
      const parent = members.get(item.ppid);
      if ((parent && item.start >= parent.start) || groups.includes(item.pgid)) { members.set(item.pid, item); grew = true; }
    }
  }
  const result = [];
  for (const item of members.values()) {
    if (item.state === 'Z') continue;
    const rollup = await read(`/proc/${item.pid}/smaps_rollup`);
    const cmdline = (await read(`/proc/${item.pid}/cmdline`)).replaceAll('\0', ' ').trim();
    const status = await read(`/proc/${item.pid}/status`);
    const metric = names.get(item.pid);
    result.push({ ...item, role: processRole(metric, cmdline, item.comm), name: metric?.name,
      ussKiB: field(rollup, 'Private_Clean') + field(rollup, 'Private_Dirty'), pssKiB: field(rollup, 'Pss'),
      swapKiB: field(rollup, 'Swap'), threads: field(status, 'Threads'), cmdline: cmdline.slice(0, 200),
      ...detail ? await watchers(item.pid, processRole(metric, cmdline, item.comm)) : {} });
  }
  return result;
}

// Which of the recorded identities (PID + start time) are still alive (not zombies).
export async function stillAlive(identities) {
  const alive = [];
  for (const item of identities) {
    const stat = await read(`/proc/${item.pid}/stat`); if (!stat) continue;
    const fields = stat.slice(stat.lastIndexOf(')') + 2).split(' ');
    if (Number(fields[19]) === item.start && fields[0] !== 'Z') alive.push(item);
  }
  return alive;
}

export function summarize(list) {
  const total = key => mib(list.reduce((sum, item) => sum + item[key], 0));
  const roles = {};
  for (const item of list) {
    const role = roles[item.role] ??= { count: 0, ussMiB: 0, pssMiB: 0, swapMiB: 0 };
    role.count++; role.ussMiB += mib(item.ussKiB); role.pssMiB += mib(item.pssKiB); role.swapMiB += mib(item.swapKiB);
  }
  for (const role of Object.values(roles)) for (const key of ['ussMiB', 'pssMiB', 'swapMiB']) role[key] = round(role[key]);
  return { count: list.length, ussMiB: total('ussKiB'), pssMiB: total('pssKiB'), swapMiB: total('swapKiB'),
    privateWithSwapMiB: round(total('ussKiB') + total('swapKiB')), roles };
}

// Host context for every sample: other agents share this machine.
export async function hostLoad() {
  const meminfo = await read('/proc/meminfo');
  return { loadavg: (await read('/proc/loadavg')).split(' ').slice(0, 3).map(Number),
    memAvailableMiB: mib(field(meminfo, 'MemAvailable')),
    swapUsedMiB: mib(field(meminfo, 'SwapTotal') - field(meminfo, 'SwapFree')) };
}

// Monotonic-growth check over equal workload iterations: counts strictly
// increasing steps and the least-squares slope in MiB per iteration.
export function growth(values) {
  const n = values.length;
  if (n < 2) return { n, increasingSteps: 0, slopeMiBPerIteration: 0, monotonic: false };
  let increasingSteps = 0;
  for (let index = 1; index < n; index++) if (values[index] > values[index - 1]) increasingSteps++;
  const meanX = (n - 1) / 2, meanY = values.reduce((a, b) => a + b, 0) / n;
  let numerator = 0, denominator = 0;
  values.forEach((value, index) => { numerator += (index - meanX) * (value - meanY); denominator += (index - meanX) ** 2; });
  return { n, increasingSteps, slopeMiBPerIteration: round(numerator / denominator),
    monotonic: increasingSteps === n - 1, first: values[0], last: values.at(-1) };
}
