import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { customizeWorkbenchDiagnostics, mcpConfigChecks, reportSubagentAndPluginProblems } from './customization-diagnostics-customization.mjs';
import { subagentReaderOwner } from './subagent-paths.mjs';
import { readableApp } from './recovered-source.mjs';

const workbench = await readFile(new URL('out/vs/workbench/workbench.desktop.main.js', readableApp), 'utf8');
const patched = customizeWorkbenchDiagnostics(workbench);

function method(text, name) {
  const index = text.indexOf(`async ${name}(`);
  for (let start = text.lastIndexOf('class', index); ; start = text.lastIndexOf('class', start - 1)) {
    let node; try { node = parseExpressionAt(text, start, { ecmaVersion: 'latest' }); } catch { continue; }
    if (node.type === 'ClassExpression' && node.end > index) return node.body.body.filter(entry =>
      entry.key?.name === name || entry.key?.name === 'openvisionReportMcpConfig').map(entry => text.slice(entry.start, entry.end));
  }
}
function notifications() {
  const shown = [];
  return { shown, notify(notice) { const entry = { ...notice, open: true }; shown.push(entry); return { close() { entry.open = false; } }; } };
}
const open = service => service.shown.filter(entry => entry.open).map(entry => entry.message);
const plain = value => JSON.parse(JSON.stringify(value));

test('MCP configuration checks name each invalid server and remove only it', () => {
  const check = runInNewContext(`${mcpConfigChecks}; openvisionMcpConfigProblems`);
  const config = { mcpServers: { good: { url: 'http://127.0.0.1/mcp' }, stdio: { command: 'node', args: ['x'] },
    typed: { type: 'streamableHttp', url: 'http://x' }, numbered: { command: 5 }, empty: {}, pigeon: { type: 'carrier-pigeon', url: 'http://x' },
    args: { command: 'node', args: '--flag' }, env: { command: 'node', env: ['A=1'] }, headers: { url: 'http://x', headers: 'Bearer' },
    nothing: null, list: [] } };
  const problems = plain(check(config));
  assert.deepEqual(Object.keys(config.mcpServers), ['good', 'stdio', 'typed']);
  assert.deepEqual(problems, ['server "numbered" "command" must be a non-empty string', 'server "empty" needs a "command" (stdio) or a "url" (HTTP)',
    'server "pigeon" has an unknown transport "carrier-pigeon"; use stdio, http, streamableHttp or sse',
    'server "args" "args" must be an array', 'server "env" "env" must be an object', 'server "headers" "headers" must be an object',
    'server "nothing" must be an object', 'server "list" must be an object']);
  assert.deepEqual(plain(check({ mcpServers: [] })), ['"mcpServers" must be an object']);
  assert.deepEqual(plain(check({})), ['"mcpServers" must be an object']);
});

// Run the recovered parser with an in-memory file; returns the loaded server names.
function mcpService(text) {
  const [parse, report] = method(text, 'parseMcpServersFromFile');
  const files = new Map(), notices = notifications(), errors = {};
  const service = Object.assign(runInNewContext(`${mcpConfigChecks}; ${text.includes('openvisionCustomizationNotice') ?
    text.slice(text.indexOf('function openvisionCustomizationNotice('), text.indexOf('\n}\n', text.indexOf('function openvisionCustomizationNotice(')) + 2) : ''};
    ({${parse}${report ? `, ${report}` : ''}})`, { YXe: value => JSON.parse(value), dl() {}, lw() {}, SyntaxError, Error, String, Object, Array }), {
    fileService: { exists: async uri => files.has(uri.path),
      readFile: async uri => { if (!files.has(uri.path)) throw Object.assign(new Error('missing'), { code: 'FileNotFound' }); return { value: files.get(uri.path) }; } },
    computeIdentifierPrefix: () => 'user-', computeIdentifier: ({ name }) => `user-${name}`, ensureUrlHasProtocol: url => url,
    setParsingErrors: update => Object.assign(errors, update(errors)), approvedProjectMcpServers: { get: () => [], set() {} },
    notificationService: notices,
  });
  const uri = { path: '/data/User/mcp.json', fsPath: '/data/User/mcp.json', toString: () => 'file:///data/User/mcp.json' };
  return { notices, files, load: async () => plain((await service.parseMcpServersFromFile(uri, {})).map(server => server.name)) };
}

test('invalid MCP entries report one warning naming the file while valid siblings load, and clear when fixed', async () => {
  const before = mcpService(workbench);
  before.files.set('/data/User/mcp.json', JSON.stringify({ mcpServers: { good: { url: 'http://x' }, bad: { command: 5 }, broken: null } }));
  assert.deepEqual(await before.load(), [], 'Recovered parser: one null entry drops every server in the file');
  assert.deepEqual(open(before.notices), [], 'Recovered parser shows nothing');

  const after = mcpService(patched);
  after.files.set('/data/User/mcp.json', JSON.stringify({ mcpServers: { good: { url: 'http://x' }, bad: { command: 5 }, broken: null } }));
  assert.deepEqual(await after.load(), ['good']);
  assert.deepEqual(open(after.notices), ['MCP configuration /data/User/mcp.json: server "bad" "command" must be a non-empty string; server "broken" must be an object. The other servers in this file still load.']);
  assert.deepEqual(await after.load(), ['good']);
  assert.equal(after.notices.shown.length, 1, 'An unchanged file does not repeat the warning');
  after.files.set('/data/User/mcp.json', '{ "mcpServers": { "good": ');
  assert.deepEqual(await after.load(), []);
  assert.match(open(after.notices)[0], /^MCP configuration \/data\/User\/mcp\.json: JSON syntax error: .+No servers from this file were loaded\.$/);
  after.files.set('/data/User/mcp.json', JSON.stringify({ mcpServers: { good: { url: 'http://x' }, fixed: { command: 'node' } } }));
  assert.deepEqual(await after.load(), ['good', 'fixed']);
  assert.deepEqual(open(after.notices), [], 'Fixing the file closes the warning without a restart');
  after.files.set('/data/User/mcp.json', JSON.stringify({ mcpServers: { bad: {} } }));
  await after.load();
  after.files.delete('/data/User/mcp.json');
  assert.deepEqual(await after.load(), []);
  assert.deepEqual(open(after.notices), [], 'Deleting the file closes its warning');
  assert.equal(customizeWorkbenchDiagnostics(patched), patched, 'idempotent');
});

test('a skill with invalid frontmatter reports a warning naming the file until it is fixed', async () => {
  const [build] = method(patched, 'buildCacheFromPushedRules');
  const source = build;
  const helpers = Object.fromEntries([...source.matchAll(/(?<![.\w$])([\w$]+)\(/g)].map(match => match[1])
    .filter(name => !['if', 'for', 'catch', 'Array', 'Set', 'Map', 'Number', 'String', 'buildCacheFromPushedRules', 'openvisionCustomizationNotice'].includes(name))
    .map(name => [name, () => undefined]));
  const notice = patched.slice(patched.indexOf('function openvisionCustomizationNotice('),
    patched.indexOf('\n}\n', patched.indexOf('function openvisionCustomizationNotice(')) + 2);
  const notices = notifications(), identifier = /([\w$]+)\s*=\s*[\w$]+\("notificationService"\)/.exec(patched)[1];
  const service = Object.assign(runInNewContext(`${notice}; ({${source}})`, { ...helpers, Set, Map, Array, Number, String, [identifier]: 'notificationService' }), {
    thirdPartyExtensibilityObservable: { get: () => true }, experimentService: { checkFeatureGate: () => true },
    contextService: { getWorkspace: () => ({ folders: [] }) }, findWorkspaceFolderForPath: () => undefined,
    computePathsFromFullPath: path => ({ subdirPath: '', internalPath: path.split('/').slice(-2).join('/'), workspaceFolder: undefined }),
    createUriFromFullPath: path => path, resolveGlobPath: value => value, _providerRulesCache: new Map(), ruleUris: new Map(),
    instantiationService: { invokeFunction: callback => callback({ get: id => id === 'notificationService' ? notices : undefined }) },
  });
  const skill = (fullPath, parseError) => ({ fullPath, parseError, type: { agentFetched: { description: 'x' } }, content: '' });
  await service.buildCacheFromPushedRules([skill('/w/.openvision/skills/good/SKILL.md'),
    skill('/w/.openvision/skills/broken/SKILL.md', 'Failed to read skill file: bad indentation of a mapping entry')]);
  assert.deepEqual(open(notices), ['Skill /w/.openvision/skills/broken/SKILL.md: Failed to read skill file: bad indentation of a mapping entry. The Agent does not use this skill until the file is fixed.']);
  await service.buildCacheFromPushedRules([skill('/w/.openvision/skills/good/SKILL.md'), skill('/w/.openvision/skills/broken/SKILL.md')]);
  assert.deepEqual(open(notices), []);
  assert.equal(service._providerRulesCache.size, 2);
});

test('malformed subagents and invalid plugin manifests report the file, and a fixed file is forgotten', async () => {
  const exec = await readFile(new URL('extensions/cursor-agent-exec/dist/main.js', readableApp), 'utf8');
  const output = reportSubagentAndPluginProblems(exec);
  assert.equal(reportSubagentAndPluginProblems(output), output, 'idempotent');
  const problems = [];
  const hook = (path, reason) => problems.push([path, reason ?? null]);
  // Subagent reader load(), with the directory walk and file reads stubbed.
  const owner = subagentReaderOwner(output), load = owner.body.body.find(entry => entry.key?.name === 'load');
  const files = { '/w/.openvision/agents/good.md': '---\nname: good\n---\nDo it.\n', '/w/.openvision/agents/bad.md': 'no front matter\n',
    '/w/.openvision/agents/empty.md': '---\nname: empty\n---\n' };
  const parserNode = parseExpressionAt(output, output.lastIndexOf('function Ir(e) {', load.start), { ecmaVersion: 'latest' });
  const parser = output.slice(parserNode.start, parserNode.end);
  const reader = Object.assign(runInNewContext(`${parser}; ({${output.slice(load.start, load.end)}})`, {
    globalThis: { openvisionCustomizationProblem: hook }, Pr: async () => Object.keys(files), xr() {}, Cr: name => name,
    s: { basename: path => path.split('/').at(-1) }, n: { stat: async () => ({ isFile: () => true }) },
    be: { yR: async path => files[path] }, kr: { zz: class { constructor(value) { Object.assign(this, value); } }, b$: {} }, Er: () => false,
  }), { computeAgentsDirs: () => [{ dirPath: '/w/.openvision/agents', source: 'project' }], allowExternalAgentSymlinks: true });
  assert.deepEqual(plain((await reader.load()).map(agent => agent.name)), ['good']);
  assert.deepEqual(problems, [['/w/.openvision/agents/good.md', null],
    ['/w/.openvision/agents/bad.md', 'this subagent was not loaded: it needs front matter between --- lines followed by a non-empty body'],
    ['/w/.openvision/agents/empty.md', 'this subagent was not loaded: it needs front matter between --- lines followed by a non-empty body']]);
  // Plugin manifest loop: a broken first candidate is reported, the next valid one loads.
  problems.length = 0;
  const start = output.indexOf('function qu(e, t, r) {');
  const qu = parseExpressionAt(output, start, { ecmaVersion: 'latest' });
  const manifests = { '/p/.cursor-plugin/plugin.json': '{ "name": ', '/p/.claude-plugin/plugin.json': '{ "name": "p", "skills": "./skills" }',
    '/p/plugin.json': new Error('EACCES: permission denied') };
  const run = runInNewContext(`(${output.slice(qu.start, qu.end)})`, {
    globalThis: { openvisionCustomizationProblem: hook }, B: ['.cursor-plugin/plugin.json', '.claude-plugin/plugin.json', 'plugin.json'],
    I: { join: (...parts) => parts.join('/') }, Cu: async () => false, Au: async () => {},
    be: { stat: async path => { if (!(path in manifests)) throw Object.assign(new Error('missing'), { code: 'ENOENT' }); return { isFile: () => true }; } },
    Pu: async path => { if (manifests[path] instanceof Error) throw manifests[path]; return manifests[path]; },
    // The recovered validator's contract: JSON text in, { success, data } or { success: false, error: string } out.
    he: value => { try { return { success: true, data: JSON.parse(value) }; } catch (error) { return { success: false, error: `Invalid JSON: ${error.message}` }; } }, Ju: () => ({}), Ou: async () => undefined, Bu: () => false, Du: value => value,
    Iu: (self, args, promise, generator) => new Promise((resolve, reject) => {
      const iterator = generator.call(self);
      const step = (method, value) => { let next; try { next = iterator[method](value); } catch (error) { reject(error); return; }
        if (next.done) resolve(next.value); else Promise.resolve(next.value).then(result => step('next', result), error => step('throw', error)); };
      step('next');
    }),
  });
  const loaded = await run('/p', 'p', { log() {} });
  assert.equal(loaded.manifestFilePath, '/p/.claude-plugin/plugin.json');
  assert.equal(problems.length, 2);
  assert.match(problems[0][1], /^this plugin manifest was not used: Invalid JSON: /);
  assert.deepEqual(problems.map(([path]) => path), ['/p/.cursor-plugin/plugin.json', '/p/.claude-plugin/plugin.json']);
  assert.equal(problems[1][1], null);
  problems.length = 0;
  delete manifests['/p/.cursor-plugin/plugin.json']; delete manifests['/p/.claude-plugin/plugin.json'];
  await run('/p', 'p', { log() {} });
  assert.deepEqual(problems, [['/p/plugin.json', 'this plugin manifest could not be read: EACCES: permission denied']],
    'A read failure other than a missing file is reported');
});

test('a changed MCP configuration file refreshes the Customize MCP list', async () => {
  const run = async text => {
    const index = text.indexOf('"user_mcp_config_changed"');
    let source;
    for (let start = text.lastIndexOf('async onDidFilesChange(', index); !source; ) {
      const node = parseExpressionAt(text, text.lastIndexOf('class', start), { ecmaVersion: 'latest' });
      source = node.body.body.find(entry => entry.key?.name === 'onDidFilesChange' && entry.start <= index && entry.end > index);
      source = source && text.slice(source.start, source.end);
    }
    let fired = 0;
    const service = Object.assign(runInNewContext(`({${source}})`, { dl() {} }), {
      contextService: { getWorkspace: () => ({ folders: [] }) }, uriIdentityService: { extUri: {} },
      getUserConfigFilePath: async () => 'user', eventTouchesConfigFile: (event, file) => event.includes(file),
      initializeUserConfiguredServers: async () => {}, initializeServers: async () => {}, refilterTeamServersAgainstLocalServers() {},
      _onSettingsChanged: { fire: () => fired++ },
    });
    await service.onDidFilesChange(['user']); await service.onDidFilesChange(['other']);
    return fired;
  };
  assert.equal(await run(workbench), 0, 'Recovered watcher never tells the Customize list');
  assert.equal(await run(patched), 1, 'Exactly one refresh, only for a configuration change');
});
