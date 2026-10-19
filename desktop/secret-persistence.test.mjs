import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { terminalStateWithoutEnvironment, legacyVerifierInSecrets } from './secret-persistence-customization.mjs';
import { keepSubagentReminders } from './subagent-reminder-customization.mjs';
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

test('a custom subagent body reaches the Task launcher', async () => {
  const exec = await read('extensions/cursor-agent-exec/dist/main.js');
  const wrapper = text => {
    const index = text.indexOf('systemReminder: () => K0');
    const fn = parseExpressionAt(text, text.lastIndexOf('function ', index), { ecmaVersion: 'latest' });
    return runInNewContext(`(${text.slice(fn.start, fn.end)})`, { K0: 'NOTICE' });
  };
  // The launcher sends only a reminder whose function takes no parameter.
  const launched = reminder => reminder !== undefined && reminder.length === 0 ? reminder() : undefined;
  const custom = { systemReminder: () => 'BODY-MARKER' };
  assert.equal(launched(wrapper(exec)(custom).systemReminder), undefined, 'Recovered wrapper drops the custom body');
  const patched = keepSubagentReminders(exec);
  assert.equal(keepSubagentReminders(patched), patched);
  assert.equal(launched(wrapper(patched)(custom).systemReminder), 'NOTICE\n\nBODY-MARKER');
  assert.equal(launched(wrapper(patched)({}).systemReminder), 'NOTICE');
  assert.equal(wrapper(patched)({ systemReminder: value => `arg:${value}` }).systemReminder('x'), 'NOTICE\n\narg:x');
});
