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
  // Grammar-only bundles: no language server ships, so no LSP behavior is claimed.
  ...[['python', 'python'], ['c/c++', 'cpp'], ['go', 'go'], ['rust', 'rust']].map(([language, extension]) =>
    ({ language, extension, version: '10.0.0', server: null, verified: [], notProvided: lsp })),
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
      distinct_entries: touched.size, pkg_entries: [...touched].filter(entry => entry.startsWith('pkg/')).length,
      asset_entries: [...touched].filter(entry => entry.startsWith('assets/')).length,
      full_scan: touched.size >= scanBudget.full_scan_fraction * known.size,
      by_kind: Object.fromEntries(Object.entries(byKind).map(([kind, item]) => [kind, { syscalls: item.syscalls,
        distinct_entries: item.entries.size, directory_opens: item.directories, inotify_add_watch: item.watches,
        sample: [...item.entries].slice(0, 8) }])) };
  }
  return { traced: true, windows, inotify_add_watch_total_by_kind: watches,
    startup: { distinct_entries: [...startup.entries].filter(entry => known.has(entry)).length,
      by_kind: Object.fromEntries(Object.entries(startup.by_kind).map(([kind, set]) => [kind, [...set].filter(entry => known.has(entry)).length])) } };
}
