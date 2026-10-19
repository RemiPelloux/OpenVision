import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { setTimeout as delay } from 'node:timers/promises';
import { mcpOAuthCallbackMethod, reportMcpOAuthDenial, runtimeOAuthPromptMethod, acceptRuntimeOAuthPrompts, customizeMcpOAuth } from './mcp-oauth-customization.mjs';
import { readableApp } from './recovered-source.mjs';

const original = await readFile(new URL('out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js', readableApp), 'utf8');
const patched = reportMcpOAuthDenial(original);

// Execute the recovered callback method with its module helpers stubbed.
function fixture(text) {
  const method = mcpOAuthCallbackMethod(text);
  const record = { statuses: [], reloads: [], warnings: [], cleared: [], exchanges: [] };
  const server = { identifier: 'user-ov-oauth', definition: { transport: { type: 'streamableHttp' }, profileId: 'p', isDefaultProfile: true } };
  const context = {
    URLSearchParams, setTimeout, Error, String,
    xv: state => (state ? { id: 'user-ov-oauth' } : undefined),
    OT: async () => ({ kind: 'resolved', identifier: 'user-ov-oauth', serverUrl: 'http://127.0.0.1/mcp', transportServerUrl: 'http://127.0.0.1/mcp',
      attemptState: { attemptId: 'attempt-1', owner: { workspaceId: 'w' }, clientInformation: {}, authorizationServerUrl: 'http://127.0.0.1' } }),
    CT: query => new URLSearchParams(query).get('code') ?? undefined,
    sy: () => fetch, Mu: async () => undefined, pe: value => value, me() {}, jd: () => ({}), qd: () => ({}),
    Fv: () => ({ clearOAuthAttemptState: async id => { record.cleared.push(id); }, tokens: async () => ({}) }),
    MT: async options => { record.exchanges.push(options.authorizationCode); },
  };
  const manager = Object.assign(runInNewContext(`({${text.slice(method.start, method.end)}})`, context), {
    getOAuthStorage: () => ({}), mcpOAuthStore: {}, mcpHostEnvironment: undefined,
    warnServer: (identifier, message) => record.warnings.push(message),
    registry: { getServer: () => undefined, getServerByOAuthScopeKey: () => server,
      updateStatus: (identifier, status) => record.statuses.push({ identifier, status }),
      reload: (identifier, definition) => record.reloads.push({ identifier, definition }) },
  });
  return { manager, record, server };
}
const callback = query => ({ query, currentOwner: { workspaceId: 'w' } });

test('the recovered callback ignores the OAuth error response', async () => {
  const { manager, record } = fixture(original);
  const result = await manager.handleOAuthCallback(callback('state=s&error=access_denied'));
  assert.equal(result.reason, 'missing_code');
  assert.deepEqual(record.statuses, [], 'Before the fix nothing reports the denial');
});

test('a denied consent is reported, discards the attempt and reloads for a fresh Authenticate', async () => {
  assert.equal(reportMcpOAuthDenial(patched), patched, 'idempotent');
  const { manager, record, server } = fixture(patched);
  const result = await manager.handleOAuthCallback(callback('state=s&error=access_denied&error_description=User%20said%20no%0A%1B'));
  assert.deepEqual({ ...result }, { kind: 'handled', identifier: 'user-ov-oauth', attemptId: 'attempt-1', denied: 'access_denied' });
  assert.equal(record.statuses.length, 1);
  assert.equal(record.statuses[0].status.type, 'error');
  assert.equal(record.statuses[0].status.error,
    'Authorization was denied (access_denied: User said no). No credentials were saved; choose Authenticate to try again.');
  assert.deepEqual(record.cleared, ['attempt-1']);
  assert.deepEqual(record.exchanges, [], 'No token exchange is attempted');
  await delay(5);
  assert.equal(record.reloads.length, 1);
  assert.equal(record.reloads[0].identifier, server.identifier);
  assert.equal(record.reloads[0].definition, server.definition);
});

test('error codes are reduced to safe characters and other callbacks are unchanged', async () => {
  const hostile = fixture(patched);
  await hostile.manager.handleOAuthCallback(callback('state=s&error=%3Cscript%3Ebad'));
  assert.match(hostile.record.statuses[0].status.error, /^Authorization was denied \(scriptbad\)/);
  const missing = fixture(patched);
  assert.equal((await missing.manager.handleOAuthCallback(callback('state=s'))).reason, 'missing_code');
  assert.deepEqual(missing.record.statuses, []);
  const success = fixture(patched);
  assert.equal((await success.manager.handleOAuthCallback(callback('state=s&code=abc'))).kind, 'handled');
  assert.deepEqual(success.record.exchanges, ['abc']);
  assert.deepEqual(success.record.cleared, ['attempt-1']);
});

// Runtime auth-event eligibility of one connection lifecycle.
function lifecycle(text, type, lazy = false) {
  const method = runtimeOAuthPromptMethod(text);
  const owner = text.slice(text.lastIndexOf('isLazyAuthServer() {', method.start), method.start);
  const lazyMethod = owner.slice(0, owner.indexOf('}') + 1);
  return Object.assign(runInNewContext(`({${lazyMethod}, ${text.slice(method.start, method.end)}})`, { Gg: () => lazy }),
    { serverInfo: { type, serverUrl: 'http://127.0.0.1/mcp' } });
}

test('a rejected refresh can prompt again on ordinary OAuth HTTP servers', () => {
  const runtime = customizeMcpOAuth(original);
  assert.equal(customizeMcpOAuth(runtime), runtime, 'idempotent');
  assert.equal(acceptRuntimeOAuthPrompts(runtime), runtime);
  const sink = {};
  const before = lifecycle(original, 'streamableHttp');
  before.activateRuntimeAuthEventSinkIfEligible(sink);
  assert.equal(before.activeRuntimeAuthEventSink, undefined, 'Recovered runtime ignores the prompt for ordinary hosts');
  for (const type of ['streamableHttp', 'sse']) {
    const after = lifecycle(runtime, type);
    after.activateRuntimeAuthEventSinkIfEligible(sink);
    assert.equal(after.activeRuntimeAuthEventSink, sink);
  }
  const stdio = lifecycle(runtime, 'stdio');
  stdio.activateRuntimeAuthEventSinkIfEligible(sink);
  assert.equal(stdio.activeRuntimeAuthEventSink, undefined, 'STDIO servers have no OAuth runtime events');
  const lazy = lifecycle(runtime, 'streamableHttp', true);
  lazy.activateRuntimeAuthEventSinkIfEligible(sink);
  assert.equal(lazy.activeRuntimeAuthEventSink, sink, 'Lazy-auth hosts keep their behavior');
});
