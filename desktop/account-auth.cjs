'use strict';

const { officialLoginUrl } = require('./account-login-url.cjs');
const { codexServer, runJson } = require('./account-auth-process.cjs');
const { claudeClient } = require('./account-claude-client.cjs');
const cleanText = value => typeof value === 'string' ? value.slice(0, 512) : null;

function accountStatus(provider, account, models = []) {
  if (provider === 'claude') return { provider, signedIn: account.loggedIn === true,
    method: cleanText(account.authMethod), email: cleanText(account.email), plan: cleanText(account.subscriptionType),
    models: [], modelsSource: 'available-in-official-panel' };
  const currentModels = models.filter(model => /^gpt-6(?:[.-]|$)/.test(model.id));
  return { provider, signedIn: account !== null && account !== undefined, method: cleanText(account?.type),
    email: cleanText(account?.email), plan: cleanText(account?.planType),
    models: currentModels.map(model => ({ id: cleanText(model.id), name: cleanText(model.displayName ?? model.model),
      reasoningLevels: (model.supportedReasoningEfforts ?? []).map(level => cleanText(level.reasoningEffort)).filter(Boolean) })).filter(model => model.id),
    modelsSource: 'official-codex-app-server',
    modelNotice: currentModels.length ? null : 'This account does not currently offer GPT-6 models. Use your GPT-6 API provider in Agent chat.' };
}

async function readCodex(server) {
  const result = await server.request('account/read', { refreshToken: false });
  if (!result.account) return accountStatus('codex', null);
  const models = [], seen = new Set();
  let cursor;
  do {
    const page = await server.request('model/list', { limit: 100, ...(cursor ? { cursor } : {}) });
    if (!Array.isArray(page.data)) throw new Error('Official Codex model catalog is unreadable.');
    models.push(...page.data);
    cursor = page.nextCursor;
    if (cursor && (seen.has(cursor) || models.length > 1000)) throw new Error('Official Codex model catalog exceeded its paging limit.');
    seen.add(cursor);
  } while (cursor);
  return accountStatus('codex', result.account, models);
}

async function readAccount(options) {
  if (options.provider === 'claude') {
    const status = accountStatus('claude', await runJson(options, ['auth', 'status', '--json']));
    if (!status.signedIn) return status;
    const client = claudeClient({ ...options, timeoutMs: 30000 });
    try {
      const initialized = await client.request({ subtype: 'initialize', hooks: {}, sdkMcpServers: [] });
      const seen = new Set();
      const models = (Array.isArray(initialized.models) ? initialized.models : []).flatMap(model => {
        const id = cleanText(model.resolvedModel ?? model.value);
        if (!id || seen.has(id)) return []; seen.add(id);
        return [{ id, name: id, reasoningLevels: (Array.isArray(model.supportedEffortLevels) ? model.supportedEffortLevels : []).map(cleanText).filter(Boolean) }];
      });
      return { ...status, models, modelsSource: 'official-claude-code-control' };
    } catch { return status; }
    finally { await client.close(); }
  }
  const server = await codexServer(options);
  try { return await readCodex(server); } finally { await server.close(); }
}


async function loginCodex(options) {
  const server = await codexServer(options);
  let loginId;
  try {
    const wait = new Promise((resolve, reject) => server.listeners.add(message => {
      if (message.method === 'account/login/completed' && (!loginId || message.params?.loginId === loginId))
        message.params.success ? resolve() : reject(new Error('ChatGPT sign-in was not completed. Retry the connection.'));
      if (message.method === 'openvision/processClosed') reject(message.error ?? new Error('ChatGPT sign-in closed before completion.'));
    }));
    // Attach before a browser-opening failure can close the server.
    wait.catch(() => {});
    const login = await server.request('account/login/start', { type: 'chatgpt' });
    if (login.type !== 'chatgpt' || typeof login.loginId !== 'string') throw new Error('Codex did not start a ChatGPT sign-in flow.');
    loginId = login.loginId;
    await options.openExternal(officialLoginUrl(login.authUrl, 'codex'));
    options.onProgress?.({ stage: 'waiting-for-browser', browserOpened: true });
    await wait;
    return await readCodex(server);
  } finally {
    if (loginId) await server.request('account/login/cancel', { loginId }).catch(() => {});
    await server.close();
  }
}

async function loginAccount(options) {
  if (typeof options.openExternal !== 'function') throw new Error('A browser opener is required to sign in.');
  if (options.provider === 'codex') return loginCodex(options);
  let opened = false, codeRequested = false;
  await runJson(options, ['auth', 'login', '--claudeai'], async (text, stdin, exit) => {
    if (!opened) {
      const match = text.match(/https:\/\/(?:claude\.ai|claude\.com|console\.anthropic\.com|platform\.claude\.com)\/[^\s\u001b]+/);
      if (match) {
        opened = true;
        await options.openExternal(officialLoginUrl(match[0], 'claude'));
        options.onProgress?.({ stage: 'waiting-for-browser', browserOpened: true });
      }
    }
    if (!codeRequested && /Paste code here/i.test(text)) {
      codeRequested = true;
      options.onProgress?.({ stage: 'waiting-for-code', browserOpened: opened });
      if (options.requestCode) {
        const code = await Promise.race([options.requestCode(), exit.then(() => { throw new Error('Account sign-in closed.'); })]);
        if (typeof code !== 'string' || !code.trim() || code.length > 4096 || /[\r\n]/.test(code)) throw new Error('Enter the one-time code shown by the official sign-in page.');
        stdin.write(code.trim() + '\n');
      }
    }
  });
  return readAccount(options);
}

module.exports = { readAccount, loginAccount, officialLoginUrl, accountStatus };
