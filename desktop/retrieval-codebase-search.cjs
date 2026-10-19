'use strict';

// OpenVision codebase search for the Agent SemanticSearch tool (OV-502).
// Installed as cursor-agent-exec/dist/openvision-codebase-search.cjs by
// desktop/retrieval-tool-customization.mjs. Answers locally from the
// OpenVision index; nothing is sent to a hosted repository service.
const { isAbsolute, join, relative, resolve, sep } = require('node:path');
const { pathToFileURL } = require('node:url');

const moduleUrl = name => pathToFileURL(join(__dirname, 'openvision-retrieval', name)).href;
let state;

function vscode() { return require('vscode'); }

function log(message) {
  state?.output?.appendLine(`[${new Date().toISOString()}] ${message}`);
}

function settings() {
  const configuration = vscode().workspace.getConfiguration('openvision.retrieval');
  return {
    idleMs: Math.max(5, Number(configuration.get('idleSeconds') ?? 60)) * 1000,
    embeddings: { provider: configuration.get('embeddings.provider'), model: configuration.get('embeddings.model') },
    filesExclude: vscode().workspace.getConfiguration('files').get('exclude') ?? {},
  };
}

const folders = () => (vscode().workspace.workspaceFolders ?? []).filter(folder => folder.uri.scheme === 'file').map(folder => folder.uri.fsPath);

async function service(root, providers) {
  const existing = state.services.get(root);
  if (existing) return existing;
  const [{ RetrievalService }, { embeddingSettings }] = await Promise.all([
    import(moduleUrl('retrieval-service.mjs')), import(moduleUrl('retrieval-embeddings.mjs'))]);
  const current = settings();
  if (providers) state.providers = providers;
  const saved = (providers ?? state.providers ?? []).map(provider => ({ id: provider.id, name: provider.name ?? provider.id, url: provider.baseUrl ?? provider.url, apiKey: provider.apiKey }));
  const embeddings = embeddingSettings(current.embeddings, saved);
  const modules = join(vscode().env.appRoot, 'node_modules/@vscode');
  const created = new RetrievalService({ userDataDirectory: state.userDataDirectory, root,
    rgPath: join(modules, 'ripgrep/bin', process.platform === 'win32' ? 'rg.exe' : 'rg'),
    grammarDirectory: join(modules, 'tree-sitter-wasm/wasm'), filesExclude: current.filesExclude,
    embeddings, idleMs: current.idleMs, log: message => log(`${root}: ${message}`) });
  created.embeddings = embeddings;
  state.services.set(root, created);
  log(`${root}: index service created (embeddings ${embeddings.enabled ? `${embeddings.provider}/${embeddings.model}` : embeddings.reason})`);
  return created;
}

async function releaseAll(reason) {
  const services = [...state.services.values()];
  state.services.clear();
  await Promise.allSettled(services.map(entry => entry.dispose()));
  if (services.length) log(`index services released (${reason})`);
}

function notify(uri) {
  if (uri.scheme !== 'file') return;
  for (const [root, entry] of state.services) {
    const path = uri.fsPath;
    if (path === root || path.startsWith(root + sep)) entry.notify([path]);
  }
}

function target(directory, roots) {
  if (!directory || directory === '.' || directory === './') return { roots, prefix: undefined };
  const absolute = isAbsolute(directory) ? resolve(directory) : undefined;
  if (absolute) {
    const root = roots.find(candidate => absolute === candidate || absolute.startsWith(candidate + sep));
    if (root) return { roots: [root], prefix: relative(root, absolute).split(sep).join('/') || undefined };
  }
  const clean = directory.replace(/^\.\//, '').replace(/\/+$/, '');
  return { roots: [roots[0]], prefix: clean || undefined };
}

// searchImplementation(ctx, query, repositoryInfos, options) for the recovered
// SemanticSearch executor. Returns { codeResults } with 1-based line ranges.
function searchFor(providers) {
  const search = async (_context, query, _repositoryInfos, options = {}) => {
    if (!state) throw new Error('OpenVision codebase index is not active in this window.');
    const roots = folders();
    if (!roots.length) throw new Error('OpenVision codebase search needs an open folder. Use Grep, Glob and Read instead.');
    const scope = target(options.targetDirectories?.[0], roots);
    const k = Math.min(Math.max(1, Number(options.topK) || 10), 50);
    const answers = await Promise.all(scope.roots.map(async root => (await service(root, providers)).search(query, { k, pathPrefix: scope.prefix })));
    const multi = roots.length > 1;
    const results = answers.flatMap((answer, index) => answer.results.map(result => ({ ...result, root: scope.roots[index] })))
      .sort((left, right) => right.score - left.score).slice(0, k);
    for (const answer of answers) {
      const ranking = answer.ranking ?? {};
      if (ranking.mode === 'lexical' && ranking.reason && ranking.reason !== 'disabled') {
        vscode().window.setStatusBarMessage(`OpenVision index: lexical ranking (${ranking.reason})`, 15000);
        log(`${answer.root}: embeddings unavailable, lexical ranking (${ranking.reason})`);
      }
      if (answer.indexing !== 'complete') log(`${answer.root}: search answered while indexing (${answer.indexing})`);
    }
    state.lastSearch = { query, at: new Date().toISOString(), results: results.length, indexing: answers.map(answer => answer.indexing),
      ranking: answers.map(answer => answer.ranking), counts: answers.map(answer => answer.counts) };
    log(`search "${query.slice(0, 120)}" -> ${results.length} results`);
    return { codeResults: results.map(result => ({ score: result.score, codeBlock: {
      relativeWorkspacePath: multi ? join(result.root, result.path) : result.path,
      range: { startPosition: { line: result.startLine, column: 1 }, endPosition: { line: result.endLine, column: 1 } },
      contents: result.text } })) };
  };
  search.openvisionLocal = true;
  return search;
}

// Keeps the recovered tool guidance but states what this index does.
function describe(text, implementation) {
  if (!implementation?.openvisionLocal) return text;
  return text.replaceAll('semantic search that finds code by meaning, not exact text',
    'local codebase search over the OpenVision index: ranked matches on identifiers, paths and text, without uploading code')
    .replace('The semantic search results are empty.', 'The codebase search results are empty.');
}

function activate(context) {
  if (state) return;
  const api = vscode();
  state = { services: new Map(), userDataDirectory: resolve(context.globalStorageUri.fsPath, '../../..'),
    output: api.window.createOutputChannel('OpenVision Codebase Index') };
  const subscriptions = [state.output];
  const watcher = api.workspace.createFileSystemWatcher('**/*');
  subscriptions.push(watcher, watcher.onDidCreate(notify), watcher.onDidChange(notify), watcher.onDidDelete(notify));
  // Branch switches: .git is excluded from the general watcher.
  const head = api.workspace.createFileSystemWatcher('**/.git/HEAD');
  subscriptions.push(head, head.onDidCreate(notify), head.onDidChange(notify));
  subscriptions.push(api.workspace.onDidChangeConfiguration(event => {
    if (event.affectsConfiguration('files.exclude') || event.affectsConfiguration('openvision.retrieval'))
      releaseAll('settings changed').catch(error => log(`release failed: ${error.message}`));
  }));
  subscriptions.push(api.workspace.onDidChangeWorkspaceFolders(event => {
    for (const folder of event.removed) {
      const entry = state.services.get(folder.uri.fsPath);
      state.services.delete(folder.uri.fsPath);
      entry?.dispose();
    }
  }));
  const each = async (action, label) => {
    const roots = folders();
    for (const root of roots) {
      const entry = await service(root);
      await action(entry);
      log(`${root}: ${label}`);
    }
    return roots.length;
  };
  subscriptions.push(
    api.commands.registerCommand('openvision.retrieval.rebuild', async () => {
      const count = await each(entry => entry.rebuild(), 'index rebuilt');
      api.window.setStatusBarMessage(`OpenVision index rebuilt for ${count} folder(s)`, 10000);
    }),
    api.commands.registerCommand('openvision.retrieval.delete', async () => {
      const count = await each(entry => entry.deleteIndex(), 'index deleted');
      api.window.setStatusBarMessage(`OpenVision index deleted for ${count} folder(s)`, 10000);
    }),
    api.commands.registerCommand('openvision.retrieval.pause', () => each(entry => entry.pause(), 'indexing paused')),
    api.commands.registerCommand('openvision.retrieval.resume', () => each(entry => entry.resume(), 'indexing resumed')),
    api.commands.registerCommand('openvision.retrieval.cancel', () => each(async entry => {
      const result = await entry.cancel();
      log(`cancel latency ${result.latencyMs ?? 'n/a'} ms`);
    }, 'indexing canceled')),
    api.commands.registerCommand('openvision.retrieval.status', async () => {
      const statuses = [];
      for (const [root, entry] of state.services) statuses.push({ root, directory: await entry.directory(), activations: entry.activations,
        releases: entry.releases, worker: Boolean(entry.worker), pending: entry.pending.size, status: await entry.status().catch(error => ({ error: error.message })) });
      return { userDataDirectory: state.userDataDirectory, lastSearch: state.lastSearch, services: statuses };
    }),
    api.commands.registerCommand('openvision.retrieval.release', () => Promise.all([...state.services.values()].map(entry => entry.release('command')))),
    { dispose: () => { const pending = releaseAll('window closed'); state = undefined; return pending; } });
  context.subscriptions.push(...subscriptions);
}

module.exports = { activate, searchFor, describe, target };
