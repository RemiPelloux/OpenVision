// Pinned OV-402 language/extension matrix and helpers shared by
// verify-language-matrix.mjs and its unit tests. Versions are the bundled
// extension manifests of the 3.21.13 runtime input; the verifier fails if the
// assembled build drifts from them.
import { relative, sep } from 'node:path';

const lsp = ['diagnostics', 'definition', 'references', 'rename', 'format', 'large_file'];
export const languageMatrix = Object.freeze([
  { language: 'typescript', extension: 'typescript-language-features', version: '10.0.0', server: 'bundled tsserver',
    verified: lsp, notProvided: [] },
  { language: 'javascript', extension: 'typescript-language-features', version: '10.0.0', server: 'bundled tsserver',
    verified: ['diagnostics', 'definition', 'references', 'rename', 'format'], notProvided: [] },
  { language: 'json', extension: 'json-language-features', version: '1.0.0', server: 'bundled JSON language server',
    verified: ['diagnostics', 'format', 'large_file'], notProvided: ['definition', 'references', 'rename'] },
  { language: 'css', extension: 'css-language-features', version: '1.0.0', server: 'bundled CSS language server',
    verified: lsp, notProvided: [] },
  { language: 'html', extension: 'html-language-features', version: '1.0.0', server: 'bundled HTML language server (embedded script)',
    verified: lsp, notProvided: [] },
  { language: 'markdown', extension: 'markdown-language-features', version: '1.0.0', server: 'bundled Markdown language server',
    verified: ['diagnostics', 'definition', 'references', 'rename', 'large_file'], notProvided: ['format'] },
  // C/C++: the bundled grammar ships no server. Language services come from the
  // pinned clangd setup (`setup:cpp`), verified separately by `verify:cpp`.
  { language: 'c/c++', extension: 'cpp', version: '10.0.0', server: null, verified: [], notProvided: lsp,
    pinnedSetup: { script: 'setup:cpp', verifier: 'verify:cpp', server: 'clangd 23.1.0',
      extension: 'llvm-vs-code-extensions.vscode-clangd 0.6.0', platforms: ['win32-x64', 'linux-x64'],
      verified: ['diagnostics', 'completion', 'definition', 'references', 'rename', 'format'] } },
  // Syntax highlighting only (owner default pending decision): grammar bundles,
  // no language server is bundled or set up, so no language-server behavior is claimed.
  ...[['python', 'python'], ['go', 'go'], ['rust', 'rust']].map(([language, extension]) =>
    ({ language, extension, version: '10.0.0', server: null, syntaxOnly: true, verified: [], notProvided: lsp })),
]);

export const scanBudget = Object.freeze({ full_scan_fraction: 0.5,
  contract: 'After a small in-memory edit or a single-file save, no owned process may touch half or more of the project entries by path within the measurement window.' });
export const responsivenessBudget = Object.freeze({ renderer_round_trip_p95_ms: 250, large_file_ms: 10000,
  contract: 'Local fixture budgets for this machine; renderer round trip is a CDP evaluate on the workbench main thread.' });

export const LARGE_LINES = 50000;
export function matrixFixtures() {
  const lines = (count, line) => Array.from({ length: count }, (_, index) => line(index)).join('');
  const fixtures = {
    'tsconfig.json': JSON.stringify({ compilerOptions: { strict: true, allowJs: true, checkJs: true, noEmit: true,
      target: 'ES2022', module: 'CommonJS' }, include: ['*.ts', '*.js', 'pkg/**/*.ts'], exclude: ['large.ts'] }),
    'lib.ts': 'export function greet(name: string): string { return `Hello ${name}`; }\n',
    'use.ts': 'import { greet } from "./lib";\nconst wrong: number = "diagnostic fixture";\nconsole.log(greet("OpenVision"));\n',
    'other.ts': 'import { greet } from "./lib";\nexport const other = greet("second file");\n',
    'fmt.ts': 'export const value={alpha:1,beta:2};\n',
    'checked.js': '// @ts-check\n/** @type {number} */\nconst wrong = "JavaScript diagnostic";\nexport {};\n',
    'fmt.js': 'export const value={alpha:1,beta:2};\n',
    'js-library.js': '/** @param {string} name */\nexport function jsGreet(name) { return `Hello ${name}`; }\n',
    'js-other.js': 'import { jsGreet } from "./js-library";\nexport const jsOther = jsGreet("second file");\n',
    'js-consumer.js': 'import { jsGreet } from "./js-library";\nconsole.log(jsGreet("OpenVision"));\n',
    'schema.json': JSON.stringify({ type: 'object', properties: { $schema: { type: 'string' }, port: { type: 'number' } } }),
    'config.json': '{\n  "$schema": "./schema.json",\n  "port": "eighty"\n}\n',
    'fmt.json': '{"a":1,"b":[1,2]}\n',
    'styles.css': ':root { --brand: red; }\n.a { color: var(--brand); }\n.b { background: var(--brand); colr: blue; }\n',
    'fmt.css': '.x{color:red;margin:0}\n',
    'page.html': '<!DOCTYPE html>\n<html>\n<body>\n<script>\nfunction hello(name) { return name; }\nhello("a");\nhello("b");\nlet = ;\n</script>\n</body>\n</html>\n',
    'fmt.html': '<div><p>one</p><p>two</p></div>\n',
    'doc.md': '# Intro\n\nSee [intro](#intro) and [missing](#nowhere).\n',
    'other.md': '[back](./doc.md#intro)\n',
    'source.ovconflict': 'alpha source\n',
    'target.ovconflict': 'keep alpha target\n',
    'large.ts': 'import { greet } from "./lib";\n' + lines(LARGE_LINES, index => `const fixtureValue${index} = ${index};\n`) +
      'const largeWrong: number = "large diagnostic";\nconsole.log(greet("large"));\n',
    'large.json': '{\n' + lines(LARGE_LINES, index => `  "k${index}": ${index},\n`) + '  "k0": "duplicate"\n}\n',
    'large.css': lines(LARGE_LINES, index => `.c${index} { color: red; }\n`) + '.tail { colr: blue; }\n',
    'large.html': '<!DOCTYPE html>\n<html>\n<body>\n' + lines(LARGE_LINES, index => `<p>row ${index}</p>\n`) +
      '<script>\nlet = ;\n</script>\n</body>\n</html>\n',
    'large.md': lines(LARGE_LINES, index => index % 50 === 0 ? `## Section ${index / 50}\n` : `text line ${index}\n`) +
      '[tail](#missing-tail)\n',
  };
  // A realistic project body: included TypeScript modules and unrelated assets.
  for (let dir = 0; dir < 30; dir++) for (let item = 0; item < 20; item++) {
    const id = dir * 20 + item, name = `d${String(dir).padStart(2, '0')}/f${String(item).padStart(2, '0')}`;
    fixtures[`pkg/${name}.ts`] = `export const value${id} = ${id};\n`;
    fixtures[`assets/${name}.txt`] = `asset ${id}\n`;
  }
  return fixtures;
}

// --large-project fixture: 5,000 chained TypeScript modules in the tsconfig
// program, a package.json, dependency trees under node_modules and unrelated
// assets. `src/use.ts` imports `depNew`, which only exists after the dependency
// change, so that window has an observable language result.
export const LARGE_MODULES = 5000;
export function largeProjectFixtures() {
  const fixtures = {
    'tsconfig.json': largeTsconfig(false),
    'package.json': largePackageJson(false),
    'node_modules/dep-a/package.json': JSON.stringify({ name: 'dep-a', version: '1.0.0', types: 'index.d.ts' }),
    'node_modules/dep-a/index.d.ts': 'export declare function depValue(): number;\n',
    'src/use.ts': 'import { depValue, depNew } from "dep-a";\nimport { v99 } from "./m00/f099";\n' +
      'const total: number = depValue() + v99 + depNew;\nconst wrong: number = "large project diagnostic";\nconsole.log(total, wrong, "OpenVision");\n',
  };
  for (let index = 0; index < LARGE_MODULES; index++) {
    const dir = Math.floor(index / 100), item = index % 100, name = id => `f${String(id).padStart(3, '0')}`;
    fixtures[`src/m${String(dir).padStart(2, '0')}/${name(item)}.ts`] = item === 0
      ? `export const v${item} = ${index};\n`
      : `import { v${item - 1} } from "./${name(item - 1)}";\nexport const v${item} = v${item - 1} + 1;\n`;
  }
  // Installed dependency bodies that are not part of the program.
  for (let index = 0; index < 500; index++) fixtures[`node_modules/dep-a/lib/part${index}.d.ts`] = `export declare const part${index}: number;\n`;
  for (let index = 0; index < 500; index++) fixtures[`node_modules/dep-b/lib/file${index}.js`] = `module.exports = ${index};\n`;
  fixtures['node_modules/dep-b/package.json'] = JSON.stringify({ name: 'dep-b', version: '2.0.0', main: 'lib/file0.js' });
  for (let index = 0; index < 1000; index++) fixtures[`assets/a${String(index).padStart(4, '0')}.txt`] = `asset ${index}\n`;
  return fixtures;
}
export function largeTsconfig(changed) {
  return JSON.stringify({ compilerOptions: { strict: true, noEmit: true, target: 'ES2022', module: 'CommonJS',
    moduleResolution: 'node', types: [], ...(changed ? { noFallthroughCasesInSwitch: true } : {}) }, include: ['src/**/*.ts'] }, null, 2);
}
export function largePackageJson(changed) {
  return JSON.stringify({ name: 'openvision-large-fixture', version: '1.0.0', private: true,
    dependencies: { 'dep-a': '1.0.0', 'dep-b': '2.0.0', ...(changed ? { 'dep-c': '3.0.0' } : {}) } }, null, 2);
}
// Groups entries for per-window reporting.
export function entryGroup(entry) {
  return entry.startsWith('node_modules/') ? 'node_modules' : entry.startsWith('pkg/') || entry.startsWith('src/') ? 'program'
    : entry.startsWith('assets/') ? 'assets' : 'other';
}

// Windows that are expected to reload dependencies or the project are not held
// to the small-edit full-scan contract; they have their own numeric budgets.
export const isEditWindow = name => !/dependency|tsconfig|package/.test(name);

// Large-project budgets (Linux x64, this verifier's 5,000-module fixture). Derived
// before any optimization: per-metric maximum over the three valid baseline runs
// language-matrix-large-aKyRC0, -Eoas4W and -V7lQNz (19 October 2026), times 1.5,
// rounded up (milliseconds and MiB to 10). A zero baseline counts as 1 entry or
// 100 ms of CPU so that one legitimate stat or scheduler tick cannot fail a run.
// Window CPU covers the action plus a 4 s settle (8 s for tsconfig-change).
export const largeProjectBudget = Object.freeze({
  derivation: 'ceil(max(baseline over aKyRC0, Eoas4W, V7lQNz) x 1.5); zero baselines floored to 1 entry / 100 ms CPU',
  windows: {
    'idle': { distinct_entries: 2, program_entries: 2, cpu_ms: { tsserver: 360, 'extension-host': 320 } },
    'ts-edit-1': { distinct_entries: 2, program_entries: 2, cpu_ms: { tsserver: 720, 'extension-host': 380 } },
    'ts-edit-2': { distinct_entries: 2, program_entries: 2, cpu_ms: { tsserver: 360, 'extension-host': 290 } },
    'ts-save': { distinct_entries: 2, program_entries: 2, cpu_ms: { tsserver: 530, 'extension-host': 1230 } },
    'dependency-change': { distinct_entries: 3, program_entries: 2, cpu_ms: { tsserver: 1230, 'extension-host': 600 }, diagnostic_update_ms: 4900 },
    'dependency-install': { distinct_entries: 2, program_entries: 2, cpu_ms: { tsserver: 150, 'extension-host': 420 } },
    'tsconfig-change': { distinct_entries: 2, program_entries: 2, cpu_ms: { tsserver: 3450, 'extension-host': 1220 }, diagnostics_after_reload_ms: 760 },
    'ts-edit-after-reload': { distinct_entries: 2, program_entries: 2, cpu_ms: { tsserver: 1190, 'extension-host': 350 } },
  },
  peak_rss_mib: { tsserver: 830, 'extension-host': 710 },
  peak_inotify_watches: 7688, peak_watch_fraction: 0.0591, first_diagnostics_ms: 28020,
});

const reported = ['tsserver', 'extension-host', 'main', 'file-watcher'];
function byKind(sample) {
  const kinds = {};
  for (const item of sample?.processes ?? []) {
    const kind = kinds[item.kind] ??= { rss_kib: 0, inotify_watches: 0 };
    kind.rss_kib += item.rss_kib; kind.inotify_watches += item.inotify_watches;
  }
  return kinds;
}
// Attributes launcher /proc samples to the driver's wall-clock windows. CPU is
// the per-process tick delta between the last sample before and the first sample
// after a window (processes that exit inside a window are not counted).
export function attributeWindows({ windows, timeline, clockTicks = 100, maxUserWatches, trace = {} }) {
  const watchTotal = sample => (sample?.processes ?? []).reduce((sum, item) => sum + item.inotify_watches, 0);
  const result = { clock_ticks: clockTicks, samples: timeline.length, max_user_watches: maxUserWatches, windows: {} };
  for (const [name, window] of Object.entries(windows)) {
    const before = timeline.findLast(sample => sample.at <= window.started_at) ?? timeline[0];
    const after = timeline.find(sample => sample.at >= window.ended_at) ?? timeline.at(-1);
    const inside = timeline.filter(sample => sample.at >= (before?.at ?? 0) && sample.at <= (after?.at ?? 0));
    const cpu = {}, rss = {};
    for (const item of after?.processes ?? []) {
      const start = before?.processes.find(other => other.pid === item.pid)?.cpu_ticks ?? 0;
      cpu[item.kind] = (cpu[item.kind] ?? 0) + Math.max(0, item.cpu_ticks - start);
    }
    for (const sample of inside) for (const [kind, value] of Object.entries(byKind(sample)))
      rss[kind] = Math.max(rss[kind] ?? 0, value.rss_kib);
    const filesystem = trace[name];
    result.windows[name] = { elapsed_ms: window.elapsed_ms, sample_span_ms: (after?.at ?? 0) - (before?.at ?? 0),
      ...Object.fromEntries(Object.entries(window).filter(([key]) => /_ms$/.test(key) && key !== 'elapsed_ms')),
      distinct_entries: filesystem?.distinct_entries ?? null, program_entries: filesystem?.pkg_entries ?? null,
      node_modules_entries: filesystem?.node_modules_entries ?? null, project_syscalls: filesystem?.project_syscalls ?? null,
      inotify_add_watch: filesystem ? Object.values(filesystem.by_kind).reduce((sum, item) => sum + item.inotify_add_watch, 0) : null,
      cpu_ms: Object.fromEntries(reported.map(kind => [kind, Math.round((cpu[kind] ?? 0) * 1000 / clockTicks)])),
      peak_rss_mib: Object.fromEntries(reported.map(kind => [kind, Math.round((rss[kind] ?? 0) / 1024)])),
      inotify_watches_end: watchTotal(after) };
  }
  const peak = timeline.reduce((best, sample) => watchTotal(sample) > watchTotal(best) ? sample : best, timeline[0]);
  result.peak_inotify_watches = watchTotal(peak);
  result.peak_inotify_watches_by_kind = Object.fromEntries(Object.entries(byKind(peak)).map(([kind, value]) => [kind, value.inotify_watches]));
  result.peak_watch_fraction = maxUserWatches ? Number((result.peak_inotify_watches / maxUserWatches).toFixed(4)) : null;
  result.peak_rss_mib = Object.fromEntries(reported.map(kind => [kind,
    Math.round(Math.max(0, ...timeline.map(sample => byKind(sample)[kind]?.rss_kib ?? 0)) / 1024)]));
  return result;
}

// Compares a large-project measurement with declared budgets. Every declared
// metric must be present; a missing measurement is a violation, not a pass.
export function evaluateLargeProject(measurement, budget) {
  if (!budget) return [];
  const violations = [];
  const check = (label, value, limit) => {
    if (typeof value !== 'number') violations.push(`${label}: not measured`);
    else if (value > limit) violations.push(`${label} ${value} > ${limit}`);
  };
  for (const [name, limits] of Object.entries(budget.windows)) {
    const window = measurement.windows[name];
    if (!window) { violations.push(`${name}: window missing`); continue; }
    for (const [metric, limit] of Object.entries(limits)) {
      if (typeof limit === 'number') check(`${name}.${metric}`, window[metric], limit);
      else for (const [kind, value] of Object.entries(limit)) check(`${name}.${metric}.${kind}`, window[metric]?.[kind], value);
    }
  }
  for (const [kind, limit] of Object.entries(budget.peak_rss_mib)) check(`peak_rss_mib.${kind}`, measurement.peak_rss_mib[kind], limit);
  check('peak_inotify_watches', measurement.peak_inotify_watches, budget.peak_inotify_watches);
  check('peak_watch_fraction', measurement.peak_watch_fraction, budget.peak_watch_fraction);
  check('first_diagnostics_ms', measurement.first_diagnostics_ms, budget.first_diagnostics_ms);
  return violations;
}

// Electron and tsserver rewrite their process titles, so /proc cmdline can be a
// single space-joined title (for example `tsserver[6.0.3]: semantic`).
export function classifyProcess({ pid, cmdline, maps = '', extensionHostPid, mainPid }) {
  const text = cmdline.join(' ');
  if (pid === extensionHostPid) return 'extension-host';
  if (pid === mainPid) return 'main';
  if (/tsserver(\.js|\[)/.test(text)) return 'tsserver';
  if (/typingsInstaller/.test(text)) return 'typings-installer';
  for (const [pattern, kind] of [[/jsonServerMain/, 'json-server'], [/cssServerMain/, 'css-server'],
    [/htmlServerMain/, 'html-server'], [/markdown-language-features\/.*server/i, 'markdown-server'],
    [/gitWorker\.js/, 'git-worker']]) if (pattern.test(text)) return kind;
  if (/@parcel[\\/]watcher|watcher\.node/.test(maps)) return 'file-watcher';
  if (/(^|\/)strace\b/.test(cmdline[0] ?? '')) return 'tracer';
  if (/--type=zygote/.test(text)) return 'zygote';
  if (/--renderer-client-id/.test(text)) return 'renderer';
  if (/--gpu-preferences/.test(text)) return 'gpu';
  if (/--type=utility|--standard-schemes|--utility-sub-type/.test(text)) return 'utility';
  return /\.(c?js|mjs)$/.test(cmdline[1] ?? '') ? 'node-child' : 'other';
}

const syscallLine = /^(\d+)\s+(\d+\.\d+)\s+(?:<\.\.\.\s+)?(\w+)(.*)$/;
// Parses `strace -f -ttt` output into bounded marker windows. Paths are the
// first quoted argument; resumed lines carry no path and are ignored.
export async function summarizeTrace(lines, { project, tids, entries }) {
  const markers = {}, events = [], startup = { by_kind: {}, entries: new Set() }, watches = {};
  const prefix = project.endsWith(sep) ? project : project + sep;
  for await (const line of lines) {
    const match = syscallLine.exec(line);
    if (!match || line.includes(' resumed>')) continue;
    const [, tid, time, syscall, rest] = match;
    const path = /"((?:[^"\\]|\\.)*)"/.exec(rest)?.[1];
    if (!path) continue;
    const marker = /MARK-(.+)-(start|end)$/.exec(path);
    if (marker) { (markers[marker[1]] ??= {})[marker[2]] = Number(time); continue; }
    const kind = tids.get(Number(tid)) ?? 'unattributed';
    if (syscall === 'inotify_add_watch') watches[kind] = (watches[kind] ?? 0) + 1;
    if (!path.startsWith(prefix)) continue;
    const entry = relative(project, path).split(sep).join('/');
    events.push({ time: Number(time), kind, syscall, entry, directory: /O_DIRECTORY/.test(rest) });
  }
  const firstMarker = Math.min(...Object.values(markers).map(item => item.start ?? Infinity));
  const known = new Set(entries);
  const windows = {};
  for (const event of events) if (event.time < firstMarker) {
    startup.entries.add(event.entry);
    startup.by_kind[event.kind] = (startup.by_kind[event.kind] ?? new Set()).add(event.entry);
  }
  for (const [name, { start, end }] of Object.entries(markers)) {
    if (!start || !end) continue;
    const inside = events.filter(event => event.time >= start && event.time <= end);
    const touched = new Set(inside.map(event => event.entry).filter(entry => known.has(entry)));
    const byKind = {};
    for (const event of inside) {
      const item = byKind[event.kind] ??= { syscalls: 0, entries: new Set(), directories: 0, watches: 0 };
      item.syscalls++; item.entries.add(event.entry);
      if (event.directory) item.directories++;
      if (event.syscall === 'inotify_add_watch') item.watches++;
    }
    windows[name] = { duration_ms: Math.round((end - start) * 1000), project_syscalls: inside.length,
      distinct_entries: touched.size, pkg_entries: [...touched].filter(entry => entryGroup(entry) === 'program').length,
      asset_entries: [...touched].filter(entry => entry.startsWith('assets/')).length,
      node_modules_entries: [...touched].filter(entry => entry.startsWith('node_modules/')).length,
      full_scan: touched.size >= scanBudget.full_scan_fraction * known.size,
      by_kind: Object.fromEntries(Object.entries(byKind).map(([kind, item]) => [kind, { syscalls: item.syscalls,
        distinct_entries: item.entries.size, directory_opens: item.directories, inotify_add_watch: item.watches,
        sample: [...item.entries].slice(0, 8) }])) };
  }
  return { traced: true, windows, inotify_add_watch_total_by_kind: watches,
    startup: { distinct_entries: [...startup.entries].filter(entry => known.has(entry)).length,
      by_kind: Object.fromEntries(Object.entries(startup.by_kind).map(([kind, set]) => [kind, [...set].filter(entry => known.has(entry)).length])) } };
}
