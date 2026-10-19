import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

// Agent integration for the OpenVision codebase index (OV-502). The recovered
// SemanticSearch tool of cursor-agent-exec keeps its executor, model-facing
// rendering and chat card; local mode disabled it and stubbed its backend.
// This customization enables it for custom providers, answers it from the
// OpenVision index (identity paths, no hosted repository) and names it
// CodebaseSearch with an accurate description. Every edit is located by
// syntax and refuses missing or ambiguous contracts.
export const retrievalToolMarker = '/* OpenVision local codebase search v1 */';
export const retrievalToolEntry = 'extensions/cursor-agent-exec/dist/main.js';
export const retrievalModules = ['retrieval-index.mjs', 'retrieval-store.mjs', 'retrieval-chunk.mjs', 'retrieval-ignore.mjs',
  'retrieval-embeddings.mjs', 'retrieval-service.mjs', 'retrieval-worker.mjs', 'retrieval-budgets.json'];
export const retrievalCommands = [
  { command: 'openvision.retrieval.rebuild', title: 'Rebuild Codebase Index', category: 'OpenVision' },
  { command: 'openvision.retrieval.delete', title: 'Delete Codebase Index', category: 'OpenVision' },
  { command: 'openvision.retrieval.pause', title: 'Pause Codebase Indexing', category: 'OpenVision' },
  { command: 'openvision.retrieval.resume', title: 'Resume Codebase Indexing', category: 'OpenVision' },
  { command: 'openvision.retrieval.cancel', title: 'Cancel Codebase Indexing', category: 'OpenVision' },
];
const options = { ecmaVersion: 'latest', sourceType: 'script' };

function single(text, pattern, label) {
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1) throw new Error(`Codebase search contract changed: ${label} (${matches.length})`);
  return matches[0];
}

// The arrow function that registers SEMANTIC_SEARCH: `const x = (e, t, r, n, s, o) => {`.
export function semanticSearchOwner(text) {
  const registration = single(text, /return uL\("SEMANTIC_SEARCH", \{/g, 'SEMANTIC_SEARCH registration').index;
  const head = /const ([\w$]+) = \(e, t, r, n, s, o\) => \{/g;
  let owner;
  for (const match of text.slice(0, registration).matchAll(head)) owner = match;
  if (!owner) throw new Error('Codebase search contract changed: SEMANTIC_SEARCH owner');
  const start = owner.index + owner[0].indexOf('(e, t');
  const node = parseExpressionAt(text, start, options);
  if (node.type !== 'ArrowFunctionExpression' || node.end < registration) throw new Error('Codebase search contract changed: owner span');
  return { name: owner[1], start: node.start, end: node.end };
}

function replaceIn(text, owner, pattern, replacement, label) {
  const body = text.slice(owner.start, owner.end);
  single(body, pattern, label);
  const after = body.replace(pattern, replacement);
  return { text: text.slice(0, owner.start) + after + text.slice(owner.end), owner: { ...owner, end: owner.start + after.length } };
}

export function installCodebaseSearch(text) {
  if (text.includes(retrievalToolMarker)) {
    if (text.split(retrievalToolMarker).length !== 2) throw new Error('Codebase search customization applied more than once');
    return text;
  }
  let owner = semanticSearchOwner(text);
  const steps = [
    [/"dsv3-1018" === \(r = r \?\? "latest"\) \? "codebase_search" : "SemanticSearch"/g,
      '"dsv3-1018" === (r = r ?? "latest") ? "codebase_search" : "CodebaseSearch"', 'tool name'],
    [/descriptionGenerator: \(e\) => \(\(a = e\.allTools\), (\w+)\(r, e\.allTools\)\)/g,
      'descriptionGenerator: (e) => ((a = e.allTools), openvisionCodebaseSearch.describe($1(r, e.allTools), t))', 'description'],
    [/if \(!o\.repositoryInfos \|\| 0 === o\.repositoryInfos\.length\)/g,
      'const openvisionLocal = !0 === t?.openvisionLocal;\nif (!openvisionLocal && (!o.repositoryInfos || 0 === o.repositoryInfos.length))', 'index presence'],
    [/const d = o\.repositoryInfos\[0\];\s+if \(!d\?\.pathEncryptionKey\)/g,
      'const d = openvisionLocal ? { pathEncryptionKey: "openvision-local" } : o.repositoryInfos[0];\nif (!d?.pathEncryptionKey)', 'repository key'],
    [/\}\)\("aes-256-ctr", d\.pathEncryptionKey\)/g, '})(openvisionLocal ? "none" : "aes-256-ctr", d.pathEncryptionKey)', 'path encryption'],
    [/targetDirectories: m,\n/g, 'targetDirectories: m,\nworkspacePaths: o.workspacePaths,\n', 'search options'],
  ];
  for (const [pattern, replacement, label] of steps) ({ text, owner } = replaceIn(text, owner, pattern, replacement, label));

  // Custom-provider tool list: the generator destructures repositoryInfos as i
  // and searchImplementation as a, then requires a repository for the tool.
  const destructure = single(text, /repositoryInfos: i,\s+searchImplementation: a,\s+mode: l,/g, 'tool generator inputs').index;
  const gate = single(text, /e\.enableSemanticSearch && i\.length > 0\)/g, 'tool generator gate');
  if (gate.index < destructure || gate.index - destructure > 20000) throw new Error('Codebase search contract changed: gate owner');
  text = text.slice(0, gate.index) + 'e.enableSemanticSearch && (i.length > 0 || !0 === a?.openvisionLocal))' +
    text.slice(gate.index + gate[0].length);

  // Local runtime configuration: enable the tool and replace the empty stub.
  const config = single(text, /enableSemanticSearch: !1,(\s+)enableGrepTool: !0,/g, 'local tool configuration');
  text = text.slice(0, config.index) + `enableSemanticSearch: !0,${config[1]}enableGrepTool: !0,` + text.slice(config.index + config[0].length);
  const provider = single(text, /const c = (\w+)\(r\),\s+u = void 0 !== c \? \w+\(c\) : void 0,/g, 'local provider resolution');
  const stub = single(text, /searchImplementation: (\w+),(\s+)taskToolProps: /g, 'search implementation');
  if (stub.index < provider.index || stub.index - provider.index > 4000) throw new Error('Codebase search contract changed: implementation owner');
  text = text.slice(0, stub.index) +
    `searchImplementation: openvisionCodebaseSearch.searchFor((c ?? r.localProvider)?.openvisionProviders),${stub[2]}taskToolProps: ` +
    text.slice(stub.index + stub[0].length);

  // Activation registers the watcher, commands and lazy index services. The
  // exported activate function is resolved by name; other customizations may
  // insert their own statements at its start.
  const exported = single(text, /\bactivate: \(\) => ([\w$]+),/g, 'activation export')[1];
  const escaped = exported.replace(/\$/g, '\\$');
  const activation = single(text, new RegExp(`async function ${escaped}\\(e\\) \\{`, 'g'), 'extension activation');
  const node = parseExpressionAt(text, activation.index, options);
  if (node.type !== 'FunctionExpression' || !text.slice(node.start, node.end).includes('G.cursor.cursorAgentHostEnabled'))
    throw new Error('Codebase search contract changed: activation owner');
  const insert = node.body.start + 1;
  text = text.slice(0, insert) + '\n      openvisionCodebaseSearch.activate(e);' + text.slice(insert);
  return `${retrievalToolMarker}\nconst openvisionCodebaseSearch = require("./openvision-codebase-search.cjs");\n${text}`;
}

export function contributeCommands(manifest) {
  const value = JSON.parse(manifest);
  value.contributes ??= {};
  const commands = (value.contributes.commands ?? []).filter(entry => !retrievalCommands.some(command => command.command === entry.command));
  value.contributes.commands = [...commands, ...retrievalCommands];
  return JSON.stringify(value, null, 2) + '\n';
}

export async function installRetrievalTool(root) {
  const app = join(root, 'source/app');
  const path = join(app, retrievalToolEntry), dist = dirname(path);
  await copyFile(join(root, 'desktop/retrieval-codebase-search.cjs'), join(dist, 'openvision-codebase-search.cjs'));
  await mkdir(join(dist, 'openvision-retrieval'), { recursive: true });
  for (const file of retrievalModules) await copyFile(join(root, 'desktop', file), join(dist, 'openvision-retrieval', file));
  const manifestPath = join(app, 'extensions/cursor-agent-exec/package.json');
  const manifest = await readFile(manifestPath, 'utf8'), contributed = contributeCommands(manifest);
  if (manifest !== contributed) await writeFile(manifestPath, contributed);
  const recipe = digest(JSON.stringify(await Promise.all([fileHash(join(root, 'desktop/retrieval-tool-customization.mjs')),
    fileHash(join(root, 'tooling/package-lock.json'))])));
  const changed = await cachedFile({ path, marker: join(root, 'build/cache/retrieval-tool.json'), recipe }, async () => {
    const before = await readFile(path, 'utf8'), after = installCodebaseSearch(before);
    if (before === after) return;
    const backup = join(root, 'backups/retrieval-tool', retrievalToolEntry);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  });
  console.log(`Agent CodebaseSearch answers from the local OpenVision index: ${changed ? 'verified' : 'unchanged (cached)'}`);
}
