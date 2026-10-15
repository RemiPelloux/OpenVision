import test from 'node:test';
import assert from 'node:assert/strict';
import { EventEmitter } from 'node:events';
import { modelDiscoveryFixture } from '../test/fixtures/model-discovery.mjs';
import { createModelDiscoveryHandler } from './model-discovery.mjs';

function sender() {
  const value = new EventEmitter();
  value.isDestroyed = () => false;
  return value;
}
const events = ['destroyed', 'render-process-gone', 'did-start-navigation'];
function released(value) { assert.deepEqual(events.map(event => value.listenerCount(event)), [0, 0, 0]); }

async function setup(t, options = {}) {
  const fixture = await modelDiscoveryFixture(); t.after(() => fixture.close());
  const responses = [];
  const discover = createModelDiscoveryHandler({ fetch: async (...args) => {
    const response = await fetch(...args); responses.push(response); return response;
  }, ...options });
  const source = sender();
  return { fixture, responses, source, discover,
    request: (mode, owner = source) => discover({ sender: owner }, fixture.configuration(mode)) };
}

test('real catalogs preserve parsing, credentials and release readers/listeners after repeated calls', async t => {
  const { fixture, responses, source, request } = await setup(t);
  for (let index = 0; index < 12; index++) {
    const result = await request('healthy'); assert.equal(result.ok, true);
    assert.deepEqual(result.data.map(model => model.id), ['alpha', 'beta']); released(source);
  }
  assert.ok(fixture.requests.every(entry => entry.authorized));
  assert.ok(responses.every(response => !response.body.locked));
});

test('non-OK unfinished body closes promptly without exposing its content', async t => {
  const { fixture, responses, source, request } = await setup(t);
  const result = await request('error'); assert.equal(result.ok, false);
  assert.match(result.error, /HTTP 503/); assert.ok(!result.error.includes('discovery-fixture'));
  await fixture.waitFor(() => fixture.requests[0].closed);
  assert.equal(responses[0].body.locked, false); released(source);
  assert.equal((await request('healthy')).ok, true);
});

for (const [mode, pattern] of [['invalid', /invalid JSON/], ['utf8', /UTF-8/],
  ['catalog', /valid ID/], ['large', /4 MiB/]]) {
  test(`rejects ${mode} catalog before returning models and releases the reader`, async t => {
    const { responses, source, request } = await setup(t);
    const result = await request(mode); assert.equal(result.ok, false); assert.match(result.error, pattern);
    assert.equal(responses[0].body.locked, false); released(source);
    assert.equal((await request('healthy')).ok, true);
  });
}

for (const mode of ['headers', 'body']) {
  test(`deadline aborts a real ${mode} stall and allows the next request`, async t => {
    const { fixture, responses, source, request } = await setup(t, { timeoutMs: 250 });
    const result = await request(mode); assert.equal(result.ok, false); assert.match(result.error, /timed out/);
    await fixture.waitFor(() => fixture.requests[0].closed);
    assert.ok(responses.every(response => !response.body.locked)); released(source);
    assert.equal((await request('healthy')).ok, true);
  });
}

for (const event of ['destroyed', 'render-process-gone', 'did-start-navigation']) {
  test(`${event} cancels only that workbench's requests and removes shared listeners`, async t => {
    const { fixture, source, request } = await setup(t);
    const other = sender();
    const first = request('body'), second = request('headers'), independent = request('body/other', other);
    await fixture.waitFor(() => fixture.requests.length === 3);
    assert.deepEqual(events.map(event => source.listenerCount(event)), [1, 1, 1]);
    source.emit(event, {}, 'vscode-file://vscode-app/new', false, true);
    for (const result of await Promise.all([first, second])) {
      assert.equal(result.ok, false); assert.match(result.error, /closed or reloaded/);
    }
    await fixture.waitFor(() => fixture.requests.filter(entry => entry.closed).length === 2);
    assert.equal(fixture.requests.find(entry => entry.path === '/body/other/models').closed, false); released(source);
    other.emit('destroyed'); assert.equal((await independent).ok, false);
    await fixture.waitFor(() => fixture.requests.every(entry => entry.closed)); released(other);
    assert.equal((await request('healthy')).ok, true);
  });
}

test('subframe navigation does not cancel a main-workbench discovery', async t => {
  const { fixture, source, request } = await setup(t);
  const pending = request('body'); await fixture.waitFor(() => fixture.requests.length === 1);
  source.emit('did-start-navigation', {}, 'https://example.invalid/', false, false);
  assert.equal(fixture.requests[0].closed, false);
  assert.equal((await request('healthy')).ok, true);
  source.emit('destroyed'); assert.match((await pending).error, /closed or reloaded/);
  await fixture.waitFor(() => fixture.requests[0].closed); released(source);
});

test('invalid settings and unreachable providers return local diagnostics and retain no owner', async t => {
  const { source, discover } = await setup(t);
  for (const configuration of [null, {}, { url: 'file:///no-network', key: 'discovery-fixture' }]) {
    const result = await discover({ sender: source }, configuration);
    assert.equal(result.ok, false); assert.ok(!result.error.includes('discovery-fixture')); released(source);
  }
  const failing = createModelDiscoveryHandler({ fetch: () => { throw new Error('secret echo'); } });
  const result = await failing({ sender: source }, { url: 'http://127.0.0.1', key: 'discovery-fixture' });
  assert.equal(result.ok, false); assert.ok(!result.error.includes('secret echo')); released(source);
});

test('an already destroyed workbench never starts upstream I/O', async () => {
  const source = sender(); source.isDestroyed = () => true;
  let dispatched = false;
  const discover = createModelDiscoveryHandler({ fetch: (_url, { signal }) => {
    signal.throwIfAborted(); dispatched = true;
  } });
  const result = await discover({ sender: source }, { url: 'http://127.0.0.1', key: '' });
  assert.equal(result.ok, false); assert.equal(dispatched, false); released(source);
});
