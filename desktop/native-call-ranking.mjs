import { basename } from 'node:path';

// OV-803 Linux proprietary set. Paths are relative to the application root
// (resources/app); the tunnel and AppImage updater live beside the host.
export const proprietaryHelpers = Object.freeze({
  'file-service': 'extensions/cursor-retrieval/node_modules/@anysphere/file-service/file_service.linux-x64-gnu.node',
  'tree-chunk-napi': 'extensions/cursor-agent-exec/dist/node_modules/@anysphere/tree-chunk-napi/tree-chunk-napi.linux-x64-gnu.node',
  'tree-chunk-napi (agent-host daemon)': 'extensions/cursor-agent-host/dist/agent-host-daemon/dist/bin/tree-chunk-napi.linux-x64-gnu.node',
  'cursor-proclist': 'node_modules/cursor-proclist/build/Release/cursor_proclist.node',
  crepectl: 'resources/helpers/crepectl',
  cursorsandbox: 'resources/helpers/cursorsandbox',
});
export const addonComponents = Object.freeze(['file-service', 'tree-chunk-napi', 'cursor-proclist']);
export const executableComponents = Object.freeze({
  crepectl: /^crepectl$/, cursorsandbox: /^cursorsandbox$/, 'cursor-tunnel': /^(cursor|code)-tunnel$/, appimageupdatetool: /^appimageupdatetool/,
});

export function phaseAt(phases, seconds) {
  let current = 'before-launch';
  for (const phase of phases) if (phase.start <= seconds) current = phase.name; else break;
  return current;
}

const add = (map, key, value = 1) => { map[key] = (map[key] ?? 0) + value; };

export function summarizeNativeCalls(records, phases) {
  const addons = Object.fromEntries(addonComponents.map(name => [name, { loaded: false, loads: [], calls: 0, controlCalls: 0, members: {}, phases: {},
    syncMs: 0, asyncSettledMs: 0, maxMs: 0, argBytes: 0, errors: 0 }]));
  const hookProcesses = [];
  for (const record of records) {
    if (record.event === 'hook') { hookProcesses.push({ pid: record.pid, processType: record.processType, entry: record.entry }); continue; }
    const addon = addons[record.addon]; if (!addon) continue;
    if (record.event === 'load-site') { (addon.loadSites ??= []).push(record.site); continue; }
    if (record.event === 'load') {
      addon.loaded = true;
      addon.loads.push({ pid: record.pid, processType: record.processType, phase: phaseAt(phases, record.t / 1000), file: basename(record.file),
        exports: record.exports.map(item => item.members ? `${item.name}{${item.members.join(',')}}` : item.name) });
      continue;
    }
    if (record.event !== 'call') continue;
    // The verifier's positive control is counted apart from the ranked workload.
    const phase = phaseAt(phases, record.t / 1000);
    if (phase === 'control') { addon.controlCalls++; continue; }
    // An async call is recorded once, when it settles.
    const key = `${record.export}.${record.member}`;
    addon.calls++; add(addon.phases, phase);
    const member = addon.members[key] ??= { calls: 0, syncMs: 0, settledMs: 0, maxMs: 0, argBytes: 0, maxArgBytes: 0, errors: 0, processTypes: [] };
    const bytes = (record.argBytes ?? []).reduce((total, value) => total + value, 0);
    const elapsed = record.settledMs ?? record.durationMs ?? 0;
    member.calls++; member.syncMs += record.durationMs ?? 0; member.settledMs += record.settledMs ?? 0;
    member.maxMs = Math.max(member.maxMs, elapsed); member.argBytes += bytes; member.maxArgBytes = Math.max(member.maxArgBytes, bytes);
    if (record.error || record.outcome === 'rejected') { member.errors++; addon.errors++; }
    if (!member.processTypes.includes(record.processType)) member.processTypes.push(record.processType);
    addon.syncMs += record.durationMs ?? 0; addon.asyncSettledMs += record.settledMs ?? 0;
    addon.maxMs = Math.max(addon.maxMs, elapsed); addon.argBytes += bytes;
  }
  for (const addon of Object.values(addons)) for (const key of ['syncMs', 'asyncSettledMs', 'maxMs']) addon[key] = Math.round(addon[key] * 1000) / 1000;
  return { addons, hookProcesses, dropped: records.filter(record => record.event === 'dropped').reduce((total, record) => total + record.dropped, 0) };
}

// strace C-style string: \\n \\t \\" \\\\, \\xHH and \\NNN (octal) escapes over UTF-8 bytes.
export function decodeStraceString(value) {
  const bytes = [], simple = { n: 10, t: 9, r: 13, v: 11, f: 12, '"': 34, '\\': 92 };
  for (let index = 0; index < value.length; index++) {
    const char = value[index];
    if (char !== '\\') { bytes.push(...Buffer.from(char)); continue; }
    const next = value[++index];
    if (next in simple) bytes.push(simple[next]);
    else if (next === 'x') { bytes.push(parseInt(value.slice(index + 1, index + 3), 16)); index += 2; }
    else if (/[0-7]/.test(next)) {
      const octal = value.slice(index).match(/^[0-7]{1,3}/)[0];
      bytes.push(parseInt(octal, 8)); index += octal.length - 1;
    } else bytes.push(...Buffer.from(next ?? ''));
  }
  return Buffer.from(bytes).toString('utf8');
}

// strace -f -ttt output: "<pid> <seconds> execve("path", ["argv0", ...], 0x... /* n vars */) = 0".
// Calls interrupted by another thread appear as "<unfinished ...>" and finish in a
// "<... execve resumed>" line for the same pid. Failed PATH probes return -1 and are skipped.
export function parseExecTrace(text) {
  const pending = new Map(), helpers = [];
  const decode = decodeStraceString;
  const finish = (entry, line) => { if (/\)\s+= 0\s*$/.test(line)) helpers.push(entry); };
  for (const line of text.split('\n')) {
    const resumed = line.match(/^(\d+)\s+[\d.]+\s+<\.\.\. execve(?:at)? resumed>/);
    if (resumed) { const entry = pending.get(resumed[1]); pending.delete(resumed[1]); if (entry) finish(entry, line); continue; }
    const call = line.match(/^(\d+)\s+([\d.]+)\s+execve(?:at)?\((?:\d+, )?"((?:[^"\\]|\\.)*)", \[(.*?)\](?:, | <unfinished)/);
    if (!call) continue;
    const argv = [...call[4].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map(match => decode(match[1]));
    const entry = { pid: Number(call[1]), t: Number(call[2]), path: decode(call[3]), name: basename(decode(call[3])), argv };
    if (line.includes('<unfinished ...>')) pending.set(call[1], entry); else finish(entry, line);
  }
  return {
    helpers,
    summary(phases) {
      const byName = {}, components = {};
      for (const exec of helpers) add(byName, exec.name);
      for (const [component, pattern] of Object.entries(executableComponents)) {
        const runs = helpers.filter(exec => pattern.test(exec.name));
        const phasesSeen = {}, argvShapes = {};
        for (const run of runs) {
          add(phasesSeen, phaseAt(phases, run.t));
          // Shape: flags and option names only; paths and values are replaced.
          add(argvShapes, run.argv.slice(1).map(value => value.startsWith('-') ? value.split('=')[0] : '<value>').join(' '));
        }
        components[component] = { execs: runs.length, phases: phasesSeen, argvShapes };
      }
      return { components, topExecutables: Object.entries(byName).sort((a, b) => b[1] - a[1]).slice(0, 20), totalExecs: helpers.length };
    },
  };
}

// Measured dependency: work a component did in the workload. Executed or called
// beats loaded-only, which beats absent. Ties keep the larger activity first.
export function rankHelpers(nativeCalls, helpers) {
  const rows = [];
  for (const name of addonComponents) {
    const addon = nativeCalls.addons[name];
    rows.push({ component: name, kind: 'napi addon', loaded: addon.loaded, activity: addon.calls,
      detail: `${addon.calls} calls across ${Object.keys(addon.members).length} members`, phases: addon.phases });
  }
  for (const [name, component] of Object.entries(helpers.components)) {
    rows.push({ component: name, kind: 'executable', loaded: component.execs > 0, activity: component.execs,
      detail: `${component.execs} executions`, phases: component.phases });
  }
  const tier = row => row.activity > 0 ? 2 : row.loaded ? 1 : 0;
  rows.sort((a, b) => tier(b) - tier(a) || b.activity - a.activity || a.component.localeCompare(b.component));
  return rows.map((row, index) => ({ rank: index + 1, dependency: ['not used', 'loaded, no calls', 'used'][tier(row)], ...row }));
}
