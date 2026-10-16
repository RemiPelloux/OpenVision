import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { mcpProfileRoutingOwner, mcpWindowRegistryOwner, releaseClosedMcpWindows,
  releaseSwitchedMcpProfiles } from './mcp-window-release-customization.mjs';
import { closeOwnedMcpTransports } from './mcp-attempt-customization.mjs';
import { readableApp } from './recovered-source.mjs';

const source = readFile(new URL('out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js', readableApp), 'utf8');
const marker = '/* OpenVision MCP window subscription release v1 */';

class Emitter {
  listeners = [];
  event = listener => { this.listeners.push(listener); return { dispose: () => {} }; };
  fire(value) { for (const listener of [...this.listeners]) listener(value); }
  dispose() { this.listeners.length = 0; }
}
class Disposable { _register(value) { return value; } dispose() {} }

// Recovered registry semantics with a short grace period and fake timers.
function registry(text) {
  const owner = mcpWindowRegistryOwner(text), body = text.slice(owner.start, owner.end);
  const base = /^class extends ([\w$]+)/.exec(body)[1], emitter = [...body.matchAll(/new ([\w$]+)\(\)/g)].map(match => match[1]).find(item => !["Map", "Set"].includes(item));
  const key = /function ([\w$]+)\(e\) \{\s*return `\$\{e\.windowId\}::/.exec(text)[1];
  const scope = /function ([\w$]+)\(e\) \{\s*return e\.oauthScopeKey \?\? e\.identifier;/.exec(text)[1];
  const grace = /constructor\(e = ([\w$]+)\)/.exec(body)[1];
  const timers = [];
  const context = { [base]: Disposable, [emitter]: Emitter, [grace]: 30000,
    [key]: e => `${e.windowId}::${e.workspaceId}::${e.identifier}`, [scope]: e => e.oauthScopeKey ?? e.identifier,
    setTimeout: (fn, ms) => { const timer = { fn, ms, cleared: false }; timers.push(timer); return timer; },
    clearTimeout: timer => { if (timer) timer.cleared = true; } };
  const Registry = runInNewContext(`(${body})`, context);
  const instance = new Registry();
  const stopped = [];
  instance.stopAndRemove = identifier => { stopped.push(identifier); instance.servers.delete(identifier); };
  const flush = () => { for (const timer of timers.splice(0)) if (!timer.cleared) timer.fn(); };
  return { instance, stopped, flush, timers };
}

function handler(patched, name, host) {
  const start = patched.indexOf(marker), end = patched.indexOf('}));', start) + 4;
  const snippet = patched.slice(start + marker.length, end);
  assert.match(snippet, new RegExp(`\\b${name}\\.unsubscribeAllForWindow\\(`));
  return runInNewContext(`(function (${name}) { ${snippet} })`, {}).bind(host);
}

test('closed window connections release only that window\'s MCP subscriptions after grace', async () => {
  const text = await source;
  const patched = releaseClosedMcpWindows(text);
  assert.notEqual(patched, text);
  assert.equal(releaseClosedMcpWindows(patched), patched, 'Window release customization is idempotent');
  assert.equal(releaseClosedMcpWindows(closeOwnedMcpTransports(patched)), closeOwnedMcpTransports(patched));
  assert.equal(closeOwnedMcpTransports(releaseClosedMcpWindows(closeOwnedMcpTransports(text))).split(marker).length, 2);
  const name = /([\w$]+)\.unsubscribeAllForWindow\(context\.slice\(7\)\)/.exec(patched)[1];
  const { instance, stopped, flush } = registry(patched);
  const removed = new Emitter(), connections = [];
  const host = { server: { onDidRemoveConnection: removed.event, get connections() { return connections; } }, _register: value => value };
  handler(patched, name, host)(instance);
  const definition = identifier => ({ identifier });
  instance.subscribe({ windowId: '1', workspaceId: 'a', identifier: 'shared' }, definition('shared'));
  instance.subscribe({ windowId: '2', workspaceId: 'b', identifier: 'shared' }, definition('shared'));
  instance.subscribe({ windowId: '1', workspaceId: 'a', identifier: 'project-only' }, definition('project-only'));
  instance.subscribe({ windowId: '3', workspaceId: 'c', identifier: 'named-profile' }, definition('named-profile'));
  removed.fire({ ctx: 'shared-process' });
  removed.fire({ ctx: 'window:1' });
  assert.deepEqual(stopped, [], 'Release waits for the recovered grace period');
  flush();
  assert.deepEqual(stopped, ['project-only']);
  assert.equal(instance.servers.get('shared').subscriptions.size, 1, 'Sibling window keeps the shared server');
  // A reloaded window that reconnected first keeps its renewed subscriptions.
  connections.push({ ctx: 'window:3' });
  removed.fire({ ctx: 'window:3' });
  flush();
  assert.deepEqual(stopped, ['project-only']);
  connections.length = 0;
  removed.fire({ ctx: 'window:3' });
  instance.subscribe({ windowId: '3', workspaceId: 'c', identifier: 'named-profile' }, definition('named-profile'));
  flush();
  assert.deepEqual(stopped, ['project-only'], 'Resubscription during grace cancels the stop');
  removed.fire({ ctx: 'window:3' }); removed.fire({ ctx: 'window:2' });
  flush();
  assert.deepEqual(stopped.sort(), ['named-profile', 'project-only', 'shared']);
});

test('window release drift guards fail closed', async () => {
  const text = await source;
  assert.throws(() => releaseClosedMcpWindows(text.replace('initChannels(e) {', 'initChannelz(e) {')), /channel owner missing/);
  assert.throws(() => releaseClosedMcpWindows(text.replaceAll('unsubscribeAllForWindow(e) {', 'unsubscribeAllWindows(e) {')),
    /registry contract missing/);
  assert.throws(() => releaseClosedMcpWindows(text.replace('this.onDidRemoveConnection = this._onDidRemoveConnection.event', 'this.onDidRemove = 0')),
    /connection lifecycle contract changed/);
});

const workbench = variant => readFile(new URL(`out/vs/workbench/workbench.${variant}.main.js`, readableApp), 'utf8');
for (const variant of ['desktop', 'glass']) {
  test(`${variant}: in-place profile switch unsubscribes the window's previous profile keys first`, async () => {
    const text = await workbench(variant);
    const patched = releaseSwitchedMcpProfiles(text);
    assert.notEqual(patched, text);
    assert.equal(releaseSwitchedMcpProfiles(patched), patched);
    const { node } = mcpProfileRoutingOwner(patched), body = patched.slice(node.start, node.end);
    const base = /^class extends ([\w$]+)/.exec(body)[1];
    const Routing = runInNewContext(`(${body})`, { [base]: class {} });
    const order = [];
    const owner = Object.assign(Object.create(Routing.prototype), {
      enabled: true, generation: 0, allowedWorkspaceIds: new Set(['a']),
      mcpProcessService: { windowId: 7 },
      workspaceRegistrations: new Map([['a', { workspaceId: 'a', hasFactory: true }], ['b', { workspaceId: 'b', hasFactory: true }]]),
      serverService: { unsubscribeAllForWorkspace: async (window, workspace) => { order.push(['unsubscribe', window, workspace]); } },
      syncFactoryForRegistration: registration => order.push(['factory', registration.workspaceId]),
      hydrateService: workspace => order.push(['hydrate', workspace]),
    });
    owner.handleProfileChange();
    assert.deepEqual(order, [['unsubscribe', 7, 'a'], ['unsubscribe', 7, 'b'], ['factory', 'a'], ['hydrate', 'a'], ['factory', 'b']]);
    order.length = 0; owner.enabled = false;
    owner.serverService.unsubscribeAllForWorkspace = () => { throw new Error('Disabled routing must not call the utility'); };
    owner.handleProfileChange();
    assert.deepEqual(order, [['factory', 'a'], ['hydrate', 'a'], ['factory', 'b']]);
    assert.throws(() => releaseSwitchedMcpProfiles(text.replace(/handleProfileChange\(\) \{[^}]*?this\.workspaceRegistrations\.values\(\)/,
      match => match.replace('this.workspaceRegistrations.values()', 'this.registrations.values()'))), /subscription contract changed/);
  });
}
