'use strict';

const { createServer } = require('node:http');
const { randomBytes } = require('node:crypto');
const { readChatBody } = require('./account-chat-request.cjs');
const { createChatSession } = require('./account-chat-session.cjs');
const { startCodex, startClaude } = require('./account-chat-clients.cjs');
const MAX_SESSIONS = 4;

async function createAccountBridge(resolve, dependencies = {}) {
  const token = randomBytes(32).toString('hex');
  const sessions = new Set(), calls = new Map(), work = new Set();
  let disposed = false;
  async function handle(request, response) {
    if (disposed || request.headers.authorization !== `Bearer ${token}` || request.headers.origin) {
      response.writeHead(401); response.end(); return;
    }
    const match = /^\/v1\/(codex|claude)\/([a-f0-9-]{36})\/(models|chat\/completions)$/.exec(request.url ?? '');
    if (!match) { response.writeHead(404); response.end(); return; }
    const [, provider, accountId, operation] = match;
    // Resolve every request against the currently selected profile. Account
    // switching retires this host; stale URLs never reach a different account.
    const runtime = await resolve(provider, accountId);
    if (request.method === 'GET' && operation === 'models') {
      response.setHeader('content-type', 'application/json');
      response.end(JSON.stringify({ data: runtime.models.map(model => ({ id: model.id, object: 'model', owned_by: provider,
        api_types: ['chat_completions'], capabilities: { supports_vision: false, reasoning_effort: model.reasoningLevels } })) })); return;
    }
    if (request.method !== 'POST' || operation !== 'chat/completions') { response.writeHead(405); response.end(); return; }
    const body = await readChatBody(request);
    const model = runtime.models.find(model => model.id === body.model);
    if (!model) throw new Error('This model is no longer available for the selected account. Refresh account status.');
    if (body.effort && !model.reasoningLevels.includes(body.effort)) throw new Error('This reasoning level is unavailable for the selected account model.');
    const owners = new Set(body.results.map(result => calls.get(result.id)).filter(Boolean));
    if (owners.size > 1) throw new Error('Tool results belong to different account conversations.');
    const existing = [...owners][0];
    if (existing) {
      if (existing.model !== body.model || existing.provider !== provider || existing.accountId !== accountId) throw new Error('Account or model changed during tool execution. Start a new turn.');
      existing.attach(response, body.results, body.stream); return;
    }
    if (sessions.size >= MAX_SESSIONS) throw new Error('Four account requests are already active. Stop one before starting another.');
    let session;
    session = createChatSession({ request: body, provider, accountId,
      remember: id => calls.set(id, session), forget: id => calls.delete(id), release: () => sessions.delete(session) });
    sessions.add(session); session.attach(response);
    const start = dependencies.start ?? ((options, events) => (provider === 'codex' ? startCodex : startClaude)(options, events));
    const task = session.start((events, signal) => start({ ...runtime, ...body, signal }, events)).finally(() => work.delete(task));
    work.add(task);
  }
  const server = createServer((request, response) => {
    const task = handle(request, response).catch(error => {
      if (response.headersSent) response.destroy();
      else { response.writeHead(400, { 'content-type': 'application/json' }); response.end(JSON.stringify({ error: { message: error.message } })); }
    }).finally(() => work.delete(task));
    work.add(task);
  });
  server.requestTimeout = 30000; server.headersTimeout = 15000;
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  return { url: `http://127.0.0.1:${server.address().port}/v1`, token,
    async close() {
      if (disposed) return; disposed = true;
      await Promise.allSettled([...sessions].map(session => session.close()));
      server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
      await Promise.allSettled([...work]); calls.clear();
    } };
}

module.exports = { createAccountBridge };
