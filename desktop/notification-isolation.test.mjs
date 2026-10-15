import assert from 'node:assert/strict';
import test from 'node:test';
import { EventEmitter } from 'node:events';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { readableApp } from './recovered-source.mjs';
import { isolateNotifications } from './notification-customization.mjs';
import { NotificationHostOwner, notificationProxy } from './notification-host-owner.mjs';

const tick = () => new Promise(resolve => setImmediate(resolve));
function setup(limits = {}) {
  const children = [], warnings = [];
  const owner = new NotificationHostOwner(() => {
    const child = new EventEmitter(); children.push(child);
    child.connected = true; child.messages = []; child.kills = 0;
    child.send = (message, callback) => {
      child.messages.push(message); callback?.();
      if (message.method === 'notificationSupport') queueMicrotask(() =>
        child.emit('message', { kind: 'result', id: message.id, ok: true, value: true }));
    };
    child.disconnect = () => { child.connected = false; };
    child.kill = () => { child.kills++; return false; };
    return child;
  }, message => warnings.push(message), { startupMs: 100, shutdownMs: 20, idleMs: 100, capacity: 2, ...limits });
  const Notification = notificationProxy(owner);
  return { owner, Notification, children, warnings, cleanup() {
    owner.dispose(); for (const child of children) child.emit('close', 0);
  } };
}

test('support is single-flight; native host failure after true stays isolated and closes owned notifications', async () => {
  const fixture = setup();
  try {
    const { owner, Notification, children } = fixture;
    const pending = [Notification.isSupported(), Notification.isSupported()];
    assert.equal(children.length, 1);
    children[0].emit('message', { kind: 'ready', supported: true });
    assert.deepEqual(await Promise.all(pending), [true, true]);
    const notification = new Notification({ title: 'test' }); let closes = 0;
    notification.on('close', () => closes++); notification.show(); await tick();
    children[0].emit('close', 3221225501); notification.close();
    assert.equal(closes, 1); assert.equal(owner.notifications.size, 0);
    assert.equal(await Notification.isSupported(), false); assert.equal(children.length, 1);
  } finally { fixture.cleanup(); }
});

test('startup timeout settles callers and retains process ownership until confirmed close', async () => {
  const fixture = setup({ startupMs: 5, shutdownMs: 5 });
  try {
    assert.equal(await fixture.Notification.isSupported(), false);
    await new Promise(resolve => setTimeout(resolve, 15));
    assert.equal(fixture.children[0].kills, 1); assert.ok(fixture.owner.host);
    assert.equal(await fixture.Notification.isSupported(), false);
    assert.equal(fixture.children.length, 1);
    fixture.children[0].emit('close'); assert.equal(fixture.owner.host, undefined);
  } finally { fixture.cleanup(); }
});

test('notification events preserve action arguments, close pending creation, and bound live handles', async () => {
  const fixture = setup();
  try {
    const { Notification, children, owner } = fixture;
    const pending = new Notification({ title: 'closed before ready' }); pending.show(); pending.close();
    children[0].emit('message', { kind: 'ready', supported: true }); await tick();
    assert.equal(children[0].messages.filter(message => message.kind === 'show').length, 0);
    const first = new Notification({ title: 'first' }), second = new Notification({ title: 'second' });
    first.show(); second.show(); await tick();
    const excess = new Notification({ title: 'excess' }); excess.show(); await tick();
    assert.equal(excess.closed, true); assert.equal(owner.notifications.size, 2);
    let action;
    first.on('action', (_event, index) => { action = index; });
    children[0].emit('message', { kind: 'event', id: first.id, event: 'action', index: 2 });
    assert.equal(action, 2); first.close(); second.close();
    assert.equal(owner.notifications.size, 0);
    assert.equal(children[0].messages.filter(message => message.kind === 'close').length, 2);
  } finally { fixture.cleanup(); }
});

test('idle shutdown releases the helper; a later request starts a new owned host', async () => {
  const fixture = setup({ idleMs: 5 });
  try {
    const pending = fixture.Notification.isSupported();
    fixture.children[0].emit('message', { kind: 'ready', supported: true }); await pending;
    await new Promise(resolve => setTimeout(resolve, 15));
    assert.equal(fixture.children[0].connected, false);
    assert.equal(await fixture.Notification.isSupported(), false);
    fixture.children[0].emit('close');
    const next = fixture.Notification.isSupported(); assert.equal(fixture.children.length, 2);
    fixture.children[1].emit('message', { kind: 'ready', supported: false }); assert.equal(await next, false);
  } finally { fixture.cleanup(); }
});

test('shell calls keep result identity, bound pending work and settle on a native crash', async () => {
  const fixture = setup();
  try {
    const first = fixture.owner.call('getJumpListSettings', []);
    const second = fixture.owner.call('setJumpList', [[]]);
    assert.equal(await fixture.owner.call('setJumpList', [[]]), undefined);
    fixture.children[0].emit('message', { kind: 'ready', supported: true }); await tick();
    const request = fixture.children[0].messages.find(message => message.method === 'getJumpListSettings');
    const value = { minItems: 5, removedItems: [{ args: 'removed workspace' }] };
    fixture.children[0].emit('message', { kind: 'result', id: request.id, ok: true, value });
    assert.equal(await first, value);
    fixture.children[0].emit('close', 3221225501);
    assert.equal(await second, undefined); assert.equal(fixture.owner.requests.size, 0);
    assert.equal(fixture.owner.host, undefined);
  } finally { fixture.cleanup(); }
});

test('close immediately after readiness settles all awaiters without stale host access', async () => {
  const fixture = setup();
  try {
    const pending = [fixture.Notification.isSupported(), fixture.owner.call('clearRecentDocuments', [])];
    fixture.children[0].emit('message', { kind: 'ready', supported: true });
    fixture.children[0].emit('close', 1);
    assert.deepEqual(await Promise.all(pending), [false, undefined]);
  } finally { fixture.cleanup(); }
});

test('recovered service awaits support and preserves unavailable, dedupe and action behavior', async () => {
  const original = await readFile(new URL('out/main.js', readableApp), 'utf8');
  const patched = isolateNotifications(original);
  assert.equal(isolateNotifications(patched), patched);
  assert.throws(() => isolateNotifications(original.replace('return !!this.isSupported();', 'return true;')), /contract changed/);
  const offset = patched.indexOf('Zy = class extends z') + 5;
  const node = parseExpressionAt(patched, offset, { ecmaVersion: 'latest' });
  const fixture = setup();
  try {
    const actions = [], seen = new Set();
    const Service = runInNewContext(`(${patched.slice(node.start, node.end)})`, {
      z: class {}, iN: fixture.Notification, K: false, X: false, Khe: 10000,
      YYe: (_map, key) => seen.has(key), JYe: (_map, key) => seen.add(key),
      $g: (...args) => actions.push(args.slice(2)),
    });
    const service = new Service({ warn() {}, error() {}, trace() {} }, {}, {});
    const options = { title: 'test', body: 'body', dedupeKey: 'first' };
    const pending = service.showNotification(options);
    fixture.children[0].emit('message', { kind: 'ready', supported: true }); await pending; await tick();
    await service.showNotification(options); assert.equal(fixture.owner.notifications.size, 1);
    const [id] = fixture.owner.notifications.keys();
    fixture.children[0].emit('message', { kind: 'event', id, event: 'action', index: 1 });
    assert.equal(actions[0][0], options); assert.equal(actions[0][2], 1);
    await service.closeNotification('first'); assert.equal(service.activeNotifications.size, 0);
    fixture.children[0].emit('close', 1);
    assert.equal(await service.hasPermission(), false);
    await service.showNotification({ title: 'not supported' }); assert.equal(service.activeNotifications.size, 0);
  } finally { fixture.cleanup(); }
});
