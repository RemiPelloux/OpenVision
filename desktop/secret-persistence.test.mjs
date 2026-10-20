import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { terminalStateWithoutEnvironment, legacyVerifierInSecrets } from './secret-persistence-customization.mjs';
import { keepCustomSubagentInstructions, subagentNotice } from './subagent-reminder-customization.mjs';
import { readableApp } from './recovered-source.mjs';

const read = relative => readFile(new URL(relative, readableApp), 'utf8');
const canary = 'ov-canary-secret-0123456789';
// The class method with the given name, as an object-literal member.
function method(text, name) {
  const index = text.indexOf(`${name}(`, text.indexOf(`async ${name}(`) >= 0 ? text.indexOf(`async ${name}(`) : 0);
  for (let start = text.lastIndexOf('class', index); ; start = text.lastIndexOf('class', start - 1)) {
    let node; try { node = parseExpressionAt(text, start, { ecmaVersion: 'latest' }); } catch { continue; }
    if (node.type === 'ClassExpression' && node.end > index) {
      const entry = node.body.body.find(item => item.key?.name === name);
      return text.slice(entry.start, entry.end);
    }
  }
}

test('serialized terminal state carries no environment and revival falls back to the current one', async () => {
  const pty = await read('out/vs/platform/terminal/node/ptyHostMain.js');
  const serialize = async text => {
    const host = Object.assign(runInNewContext(`({${method(text, 'serializeTerminalState')}})`,
      { ms: { withAsyncBody: body => new Promise(body) }, Promise, Date }), {
      _ptys: new Map([[1, { hasWrittenData: true, shellLaunchConfig: { executable: '/bin/bash', env: { TOKEN: canary } },
        processLaunchOptions: { env: { TOKEN: canary }, executableEnv: { TOKEN: canary }, options: { shellIntegration: { nonce: 'n' } } },
        unicodeVersion: '11', serializeNormalBuffer: async () => ({ events: [] }) }]]),
      _buildProcessDetails: async () => ({ cwd: '/w' }),
    });
    return host.serializeTerminalState([1]);
  };
  assert.ok((await serialize(pty)).includes(canary), 'Recovered serializer persists the environment');
  const patched = terminalStateWithoutEnvironment(pty);
  assert.equal(terminalStateWithoutEnvironment(patched), patched);
  const state = JSON.parse(await serialize(patched)).state[0];
  assert.ok(!JSON.stringify(state).includes(canary));
  assert.deepEqual(state.shellLaunchConfig, { executable: '/bin/bash' });
  assert.deepEqual(state.processLaunchConfig, { options: { shellIntegration: { nonce: 'n' } } });
  assert.match(patched, /processLaunchConfig\.env \?\? \{ \.\.\.process\.env \},\s*[\w$]+\.processLaunchConfig\.executableEnv \?\? \{ \.\.\.process\.env \},/);
});

test('the legacy MCP PKCE verifier is kept only in secret storage', async () => {
  const mcp = await read('extensions/cursor-mcp/dist/main.js');
  const save = async text => {
    const global = new Map([['verifier-key', 'stale-plain']]), secrets = new Map(), attempts = [];
    const owner = Object.assign(runInNewContext(`({${method(text, 'saveCodeVerifier')}})`, { X_: () => ({ info() {} }) }), {
      codeVerifierKey: 'verifier-key', updateOAuthAttemptState: async value => attempts.push(value),
      oauthContext: { globalState: { get: key => global.get(key), update: async (key, value) => value === undefined ? global.delete(key) : global.set(key, value) },
        secrets: { get: async key => secrets.get(key), store: async (key, value) => secrets.set(key, value) } } });
    await owner.saveCodeVerifier(canary);
    return { global: Object.fromEntries(global), secrets: Object.fromEntries(secrets) };
  };
  assert.deepEqual(await save(mcp), { global: { 'verifier-key': canary }, secrets: {} }, 'Recovered owner writes plain global state');
  const patched = legacyVerifierInSecrets(mcp);
  assert.equal(legacyVerifierInSecrets(patched), patched);
  assert.deepEqual(await save(patched), { global: {}, secrets: { 'verifier-key': canary } });
  const update = method(patched, 'updateOAuthAttemptState');
  assert.match(update, /secrets\.store\(`\[oauth-attempt:\$\{[\w$]+\}\] mcp_code_verifier`, [\w$]+\.codeVerifier\)/);
  assert.match(update, /codeVerifier: void 0,/, 'The attempt file no longer carries the verifier');
});

test('a client-side custom subagent child receives its definition', async () => {
  const workbench = await read('out/vs/workbench/workbench.desktop.main.js');
  const exec = await read('extensions/cursor-agent-exec/dist/main.js');
  // The text matches what the Agent runtime builds for a custom definition.
  assert.ok(exec.includes(JSON.stringify(subagentNotice)));
  assert.ok(exec.includes('custom subagent. DO NOT create unnecessary markdown files unless explicitly requested by the user.'));
  assert.ok(!workbench.includes('getRawSubagents().catch'), 'Recovered child submit never reads the definition');
  const patched = keepCustomSubagentInstructions(workbench);
  assert.equal(keepCustomSubagentInstructions(patched), patched);
  const start = patched.indexOf('(async (name) => {');
  const parsed = parseExpressionAt(patched, start, { ecmaVersion: 'latest' });
  const call = parsed.type === 'SequenceExpression' ? parsed.expressions[0] : parsed;
  const definitions = [{ name: 'fixture-reviewer', description: 'Reviews.', tools: ['Read'], prompt: 'BODY-MARKER' },
    { name: 'fixture-reviewer', prompt: 'SHADOWED' }, { name: 'no-body', prompt: '' }];
  const run = name => runInNewContext(`(function () { return ${patched.slice(call.start, call.end)}; })`, {
    G: { subagentInfo: { subagentTypeName: name } } }).call({ _subagentsService: { getRawSubagents: async () => definitions } });
  assert.equal(await run('fixture-reviewer'), `${subagentNotice}\n\nYou are operating as the "fixture-reviewer" custom subagent. ` +
    'DO NOT create unnecessary markdown files unless explicitly requested by the user.\nReviews.\nAvailable tools: Read\n\nBODY-MARKER');
  assert.equal(await run('no-body'), undefined);
  assert.equal(await run('generalPurpose'), undefined);
  assert.equal(await run(undefined), undefined);
  assert.match(patched.slice(call.end, call.end + 400), /rt = ayd\(\$T_\(\{[\s\S]*\}\), openvisionCustomSubagentReminder\)/);
});
