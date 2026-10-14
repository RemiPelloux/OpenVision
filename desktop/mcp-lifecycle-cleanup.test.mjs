import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { closeOwnedMcpTransports, mcpAttemptOwner } from './mcp-attempt-customization.mjs';
import { mcpLifecycleOwner } from './mcp-lifecycle-cleanup-customization.mjs';

const variants = [
  ['process', 'out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js', 'Y', 's_'],
  ['extension', 'extensions/cursor-mcp/dist/main.js', 'j_', 'D_'],
];
const reachedClientCreation = new Error('Reached the SDK creation boundary');
function generatorPromise(context, _args, _promise, fn) {
  const generator = fn.call(context);
  function next(method, value) {
    const item = generator[method](value);
    return item.done ? Promise.resolve(item.value) : Promise.resolve(item.value)
      .then(value => next('next', value), error => next('throw', error));
  }
  return next('next');
}
function fixture(text, logger, attemptName) {
  const attempt = mcpAttemptOwner(text), lifecycle = mcpLifecycleOwner(text), errors = [];
  const context = { [logger]: () => ({ error: (...args) => errors.push(args), debug() {} }), M_: generatorPromise };
  const Attempt = runInNewContext(`(${text.slice(attempt.start, attempt.end)})`, context);
  context[attemptName] = Attempt;
  const Lifecycle = runInNewContext(`(${text.slice(lifecycle.start, lifecycle.end)})`, context);
  let created = 0;
  function owner(identifier = 'fixture') {
    return Object.assign(Object.create(Lifecycle.prototype), {
      identifier, disposed: false, activities: { dispose() {} }, subscribedResources: new Set(),
      pendingElicitationRequests: new Map(), queue: [], clientGeneration: 0,
      callbacks: { onAdapterRemoved() {} }, nullifyCallbacks() {}, captureReconnectSessionInfo() {},
      withReconnectLock: fn => fn(),
      enqueue() {}, createConnectionAttemptAuthEventSink() { return {}; },
      createSdkClient() { created++; throw reachedClientCreation; },
    });
  }
  return { Attempt, owner, errors, created: () => created };
}

for (const [name, relative, logger, attemptName] of variants) {
  const source = readFile(new URL(`../../cursor/readable/app/${relative}`, import.meta.url), 'utf8');
  test(`${name}: disposed committed transports retain ownership and explicit replacement demand retries`, async () => {
    const current = fixture(closeOwnedMcpTransports(await source), logger, attemptName);
    const old = current.owner(); let calls = 0;
    const failure = new Error('Injected close failure');
    const transport = { async close() { if (++calls === 1) throw failure; } };
    old.serverInstance = { transport, client: { transport } };
    const disposal = old.dispose();
    const result = await old.openvisionLastCleanup;
    assert.equal((await disposal).ok, false);
    assert.equal(old.dispose(), disposal, 'Repeated dispose must preserve its acknowledgement');
    assert.equal(result.ok, false); assert.equal(result.failures[0].resource, transport);
    assert.equal(old.serverInstance, undefined); assert.equal(current.errors.length, 1);
    assert.ok(current.Attempt.openvisionCleanupOwners.has(old.openvisionCleanupOwner));
    const replacement = current.owner(), events = [];
    await replacement.runConnectionAttempt(() => false, changes => events.push(...changes), new current.Attempt('fixture'));
    assert.equal(calls, 1, 'An automatic service attempt must not silently retry failed cleanup');
    assert.equal(current.created(), 0); assert.equal(events[0].isRetryable, false);
    assert.match(events[0].error, /cleanup failed/);
    replacement.connect();
    await assert.rejects(replacement.runConnectionAttempt(() => false, () => {}, new current.Attempt('fixture')),
      error => error === reachedClientCreation);
    assert.equal(calls, 2); assert.equal(current.created(), 1);
    assert.equal(current.Attempt.openvisionCleanupOwners.size, 0);
  });

  test(`${name}: reconnect waits for the committed transport and does not create a replacement after failed close`, async () => {
    const current = fixture(closeOwnedMcpTransports(await source), logger, attemptName);
    const lifecycle = current.owner(), pending = Promise.withResolvers(), events = [];
    lifecycle.serverInstance = { transport: { close: () => pending.promise } };
    lifecycle.connect();
    const connecting = lifecycle.runConnectionAttempt(() => false, changes => events.push(...changes), new current.Attempt('fixture'));
    await Promise.resolve(); await Promise.resolve();
    assert.equal(current.created(), 0);
    pending.reject(new Error('Native transport unavailable'));
    await connecting;
    assert.equal(events.length, 1); assert.match(events[0].error, /cleanup failed/);
    assert.equal(current.created(), 0); assert.equal(current.Attempt.openvisionCleanupOwners.size, 1);
  });

  test(`${name}: pending abandoned cleanup survives disposal and coalesces replacement demands without affecting other servers`, async () => {
    const current = fixture(closeOwnedMcpTransports(await source), logger, attemptName);
    const attempt = new current.Attempt('fixture'), pending = Promise.withResolvers(); let calls = 0;
    attempt.setClient({ transport: { close: () => { calls++; return pending.promise; } } });
    const first = attempt.requestClose('dispose'); attempt.client = undefined;
    const retry = current.Attempt.retryCleanup('fixture'), duplicate = current.Attempt.retryCleanup('fixture');
    const unrelated = await current.Attempt.retryCleanup('other');
    assert.equal(unrelated.ok, true); assert.equal(calls, 1);
    pending.resolve(); await Promise.all([first, retry, duplicate]);
    assert.equal(calls, 1); assert.equal(current.Attempt.openvisionCleanupOwners.size, 0);
  });

  test(`${name}: repeated synchronous failure remains owned and prevents replacement; cancellation does not create a client`, async () => {
    const current = fixture(closeOwnedMcpTransports(await source), logger, attemptName);
    const old = current.owner(); let calls = 0, foreignCloses = 0;
    const transport = { close() { calls++; throw new Error('Persistent close failure'); } };
    old.serverInstance = { transport, client: { transport: { close() { foreignCloses++; } } } };
    assert.equal((await old.dispose()).ok, false);
    const replacement = current.owner(), events = [];
    replacement.connect();
    await replacement.runConnectionAttempt(() => false, changes => events.push(...changes), new current.Attempt('fixture'));
    assert.equal(calls, 2); assert.equal(foreignCloses, 0); assert.equal(current.created(), 0);
    assert.equal(events.length, 1); assert.equal(events[0].isRetryable, false);
    assert.equal(current.Attempt.openvisionCleanupOwners.size, 1);
    await replacement.runConnectionAttempt(() => true, () => assert.fail('Cancelled demand must not emit an error'), new current.Attempt('fixture'));
    assert.equal(current.created(), 0);
  });

  test(`${name}: original and previously prepared owners transform idempotently`, async () => {
    const original = await source, transformed = closeOwnedMcpTransports(original);
    assert.equal(closeOwnedMcpTransports(transformed), transformed);
    const prepared = await readFile(new URL(`../source/app/${relative}`, import.meta.url), 'utf8');
    const upgraded = closeOwnedMcpTransports(prepared);
    assert.equal(closeOwnedMcpTransports(upgraded), upgraded);
    const lifecycle = mcpLifecycleOwner(upgraded);
    assert.ok(!upgraded.slice(lifecycle.start, lifecycle.end).includes('this.serverInstance.client.close()'),
      'All committed lifecycle retirements share the cleanup owner');
  });

  test(`${name}: failed session reinitialization retains the exact transport and never starts a replacement`, async () => {
    const current = fixture(closeOwnedMcpTransports(await source), logger, attemptName);
    const lifecycle = current.owner(); let calls = 0;
    const transport = { async close() { calls++; throw new Error('Session cleanup rejected'); } };
    lifecycle.serverInstance = { transport, client: { transport } };
    lifecycle.enqueue = () => assert.fail('Failed cleanup cannot enqueue a replacement');
    await assert.rejects(lifecycle.handleSessionReinit(), /cleanup failed/);
    assert.equal(calls, 1); assert.equal(current.created(), 0);
    assert.ok(lifecycle.openvisionCleanupOwner.openvisionFailedClosures.has(transport));
  });
}
