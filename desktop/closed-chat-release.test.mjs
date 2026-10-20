import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parseJavaScript, parseExpressionAt } from '../tooling/dependencies.mjs';
import { readableApp } from './recovered-source.mjs';
import { releaseClosedChats, releaseNestedUpdateRoot, marker, rowsMarker, extensionMarker, serviceRootMarker, nestedRootMarker, releaseDelayMs } from './closed-chat-release.mjs';

const variants = Object.fromEntries(await Promise.all(['desktop', 'glass'].map(async variant =>
  [variant, await readFile(new URL(`out/vs/workbench/workbench.${variant}.main.js`, readableApp), 'utf8')])));

// The injected method's source (it ends at the first closing brace at its own indentation).
function method(text, name) {
  const start = text.indexOf(`${name}(id, delay`), line = text.lastIndexOf('\n', start) + 1;
  const indent = text.slice(line, start);
  const source = text.slice(start, text.indexOf(`\n${indent}}`, start) + indent.length + 2);
  parseJavaScript(`(class { ${source} })`, { ecmaVersion: 'latest' });
  return source;
}

// Execute the injected release method with controlled services, timers and preview cache.
function harness(text, { selected = [], running = () => false, loaded = true, children = [], unloadFails = false } = {}) {
  const source = method(text, 'openvisionReleaseClosedComposerLater');
  const timers = [], calls = [], cache = new Map([['preview', 'text']]);
  const cacheName = text.match(/\(([\w$]+) = 256\), \(([\w$]+) = new Map\(\)\)/)[2];
  const scope = { setTimeout: (callback, delay) => { timers.push({ callback, delay }); return timers.length; },
    clearTimeout: id => { if (id) timers[id - 1].cleared = true; }, Promise, console: { error: (...args) => calls.push(['logged', args[0]]) },
    [cacheName]: cache };
  const Class = new Function('scope', `with (scope) { return (class { ${source} }); }`)(scope);
  const service = new Class();
  service.composerDataService = {
    selectedComposerIds: selected,
    getHandleIfLoaded: id => loaded ? { id } : undefined,
    isComposerRunning: handle => running(handle),
    getComposerDataIfLoaded: () => ({ subComposerIds: children }),
    unloadComposer: async id => { calls.push(['unload', id]); if (unloadFails) throw new Error('unload failed'); },
  };
  const fire = async () => { const timer = timers.find(entry => !entry.cleared && !entry.fired); timer.fired = true; timer.callback();
    await new Promise(resolve => setImmediate(resolve)); };
  return { service, timers, calls, cache, fire };
}

// Run the transcript row model's disposal callback (the arrow passed to the
// cleanup registration next to mountedBubbleSubscriptions) against a fake model.
function rowDisposal(text) {
  const anchor = text.indexOf('for (const n of this.mountedBubbleSubscriptions.values()) n.dispose();');
  const start = text.lastIndexOf('() => {', anchor);
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  const model = { mountedBubbleSubscriptions: new Map([['b', { dispose() { model.disposed = true; } }]]), trackedRows: new Map([['r', {}]]),
    contentCacheByRowId: new Map([['r', { row: 'reply markdown' }]]), lastMarkdownRowById: new Map([['r', 'reply markdown']]) };
  // Arrow functions take `this` from where they are defined; run the body as a method of the model.
  const body = text.slice(text.indexOf('{', start) + 1, node.end - 1);
  new Function(body).call(model);
  return model;
}

// The bundled tiptap extension base class (constructor sets type "extendable").
function extensionBase(text) {
  const start = text.lastIndexOf('class {', text.indexOf('(this.type = "extendable"),'));
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  const scope = new Proxy({}, { has: (_, name) => typeof name === 'string' && !['Object', 'undefined'].includes(name),
    get: (_, name) => name === Symbol.unscopables ? undefined : (...args) => Object.assign({}, ...args.filter(arg => typeof arg === 'object')) });
  return new Function('scope', `with (scope) { return (${text.slice(node.start, node.end)}); }`)(scope);
}

// Run the bundle's Solid createRoot (the function whose detached owner falls
// back to the current owner) under a current owner that carries a context.
function createRootWith(text) {
  const match = text.match(/function ([\w$]+)\(([\w$]+), ([\w$]+)\) \{\n  const [\w$]+ = ([\w$]+),\n    ([\w$]+) = ([\w$]+),\n    [\w$]+ = \2\.length === 0,\n    [\w$]+ = \3 === void 0 \? \5 : \3,/);
  const node = parseExpressionAt(text, match.index, { ecmaVersion: 'latest' });
  const component = { context: { agentRef: 'closed chat view' } };
  const state = { [match[4]]: null, [match[6]]: component };
  const scope = new Proxy(state, { has: (_, name) => typeof name === 'string' && !['Object', 'undefined'].includes(name),
    get: (target, name) => name === Symbol.unscopables ? undefined : name in target ? target[name] : (fn, ...rest) => typeof fn === 'function' ? fn(...rest) : fn,
    set: (target, name, value) => { target[name] = value; return true; } });
  const createRoot = new Function('scope', `with (scope) { return (${text.slice(node.start, node.end).replace(/^function [\w$]+/, 'function')}); }`)(scope);
  return (...detached) => { let root; createRoot(dispose => { root = state[match[6]]; return dispose; }, ...detached); return root; };
}

// Evaluate React DOM's post-commit nested-update bookkeeping.
function nestedUpdate(text) {
  const anchor = text.indexOf('(t & 261930) !== 0 && (e & 42) !== 0');
  const node = parseExpressionAt(text, anchor, { ecmaVersion: 'latest' });
  // The parsed sequence ends with the scheduler call `ae(0, !1)`, stubbed here.
  const run = new Function('state', `with (state) { ${text.slice(node.start, node.end)}; return state; }`);
  return (state) => { const { t, e, l, Nc, le } = run({ ...state, ae: () => {} }); return { t, e, l, Nc, le }; };
}

test('React DOM: rootWithNestedUpdates is cleared with its counter; the infinite-update guard is unchanged', async () => {
  const original = await readFile(new URL('out/vs/workbench/react-runtime/react-dom/esm-client-production.js', readableApp), 'utf8');
  const patched = releaseNestedUpdateRoot(original);
  assert.equal(patched.split(nestedRootMarker).length, 2); assert.equal(releaseNestedUpdateRoot(patched), patched);
  const closedRoot = { container: 'closed transcript' }, other = {};
  const before = nestedUpdate(original), after = nestedUpdate(patched);
  // A commit without remaining sync work: the recovered code keeps the last nested root.
  assert.equal(before({ t: 0, e: 0, l: other, Nc: closedRoot, le: 3 }).Nc, closedRoot);
  assert.deepEqual(after({ t: 0, e: 0, l: other, Nc: closedRoot, le: 3 }), { t: 0, e: 0, l: other, Nc: null, le: 0 });
  // Nested sync updates of one root are still counted.
  for (const run of [before, after]) {
    assert.equal(run({ t: 2, e: 2, l: closedRoot, Nc: closedRoot, le: 3 }).le, 4);
    assert.deepEqual(run({ t: 2, e: 2, l: other, Nc: closedRoot, le: 3 }), { t: 2, e: 2, l: other, Nc: other, le: 0 });
  }
  assert.throws(() => releaseNestedUpdateRoot(original.replace('(Nc = l))', '(Nc = l), (le = 1))')), /nested-update owner changed/);
});

for (const [variant, original] of Object.entries(variants)) {
  const patched = releaseClosedChats(original);
  test(`${variant}: MCPService roots no longer inherit the creating chat view's context`, () => {
    const roots = patched.split(serviceRootMarker).length - 1;
    assert.equal(roots, 3);
    const run = createRootWith(original);
    assert.deepEqual(run().context, { agentRef: 'closed chat view' }, 'Recovered createRoot copies the current context');
    assert.equal(run(null).context, null); assert.equal(run(null).owner, null);
    // Each patched root call passes the detached owner explicitly.
    let index = -1;
    while ((index = patched.indexOf(serviceRootMarker, index + 1)) >= 0) {
      const start = patched.lastIndexOf('const { dispose: ', index);
      const call = parseExpressionAt(patched, patched.indexOf(' = ', start) + 3, { ecmaVersion: 'latest' });
      assert.equal(call.arguments.length, 2); assert.equal(call.arguments[1].value, null);
    }
    assert.throws(() => releaseClosedChats(original.replace('[MCPService] Browser features setting changed', '[MCPService] Browser features changed')
      .replace(/\[MCPService\]/g, '[McpService]')), /Service root owner changed/);
  });
  test(`${variant}: configuring a shared editor extension no longer stores the copy on it`, () => {
    for (const [text, keepsChild] of [[original, true], [patched, false]]) {
      const Base = extensionBase(text), shared = new Base({ name: 'placeholder' });
      const copy = shared.configure({ placeholder: () => 'last chat input' }), extended = shared.extend({ name: 'other' });
      assert.equal(copy.name, 'placeholder'); assert.equal(extended.name, 'other'); assert.equal(extended.parent, shared);
      assert.equal(shared.child === null, !keepsChild, keepsChild ? 'Recovered extend keeps the last copy' : 'No back reference');
    }
  });
  test(`${variant}: disposing a transcript row model also clears its rendered-row content caches`, () => {
    const before = rowDisposal(original), after = rowDisposal(patched);
    assert.equal(before.disposed, true); assert.equal(before.trackedRows.size, 0);
    assert.equal(before.contentCacheByRowId.size, 1, 'Recovered disposal keeps row content');
    assert.equal(before.lastMarkdownRowById.size, 1);
    assert.equal(after.disposed, true); assert.equal(after.trackedRows.size, 0); assert.equal(after.mountedBubbleSubscriptions.size, 0);
    assert.equal(after.contentCacheByRowId.size, 0); assert.equal(after.lastMarkdownRowById.size, 0);
  });
  test(`${variant}: closing a chat schedules its release first, after the recovered selection guard`, () => {
    const close = patched.indexOf('async closeComposer(');
    const guard = patched.indexOf('Cannot close composer that is not selected', close);
    const call = patched.indexOf('this.openvisionReleaseClosedComposerLater(', close);
    assert.ok(guard > close && call > guard && call < patched.indexOf('fireSessionEndHook', close));
  });
  test(`${variant}: a closed idle chat is unloaded after the idle window and previews are cleared`, async () => {
    const run = harness(patched);
    run.service.openvisionReleaseClosedComposerLater('chat-1');
    assert.equal(run.timers[0].delay, releaseDelayMs);
    assert.deepEqual(run.calls, []);
    await run.fire();
    assert.deepEqual(run.calls, [['unload', 'chat-1']]);
    assert.equal(run.cache.size, 0);
  });
  test(`${variant}: reopened, unloaded, sub-chat-open and running chats are not unloaded`, async () => {
    for (const options of [{ selected: ['chat-1'] }, { loaded: false }, { selected: ['child'], children: ['child'] }]) {
      const run = harness(patched, options);
      run.service.openvisionReleaseClosedComposerLater('chat-1'); await run.fire();
      assert.deepEqual(run.calls, [], JSON.stringify(options)); assert.equal(run.cache.size, 1);
    }
    let busy = true;
    const run = harness(patched, { running: () => busy });
    run.service.openvisionReleaseClosedComposerLater('chat-1'); await run.fire();
    assert.deepEqual(run.calls, []); assert.equal(run.timers.length, 2, 'A running chat is checked again later');
    busy = false; await run.fire();
    assert.deepEqual(run.calls, [['unload', 'chat-1']]);
  });
  test(`${variant}: closing again restarts the window and a failed unload is logged`, async () => {
    const again = harness(patched);
    again.service.openvisionReleaseClosedComposerLater('chat-1'); again.service.openvisionReleaseClosedComposerLater('chat-1');
    assert.equal(again.timers[0].cleared, true); await again.fire();
    assert.deepEqual(again.calls, [['unload', 'chat-1']]);
    const failing = harness(patched, { unloadFails: true });
    failing.service.openvisionReleaseClosedComposerLater('chat-1'); await failing.fire();
    assert.deepEqual(failing.calls, [['unload', 'chat-1'], ['logged', '[composer] Releasing a closed chat failed']]);
    assert.equal(failing.cache.size, 1);
  });
  test(`${variant}: patch is idempotent and refuses changed owners`, () => {
    for (const value of [marker, rowsMarker, extensionMarker]) assert.equal(patched.split(value).length, 2);
    assert.equal(releaseClosedChats(patched), patched);
    // A workbench customized by an earlier build receives only the missing steps.
    const extensionStep = patched.indexOf(extensionMarker), line = patched.lastIndexOf('\n', extensionStep);
    const earlier = patched.slice(0, line) + patched.slice(line).replace(/^(\s+)\/\* OpenVision: no child back reference on shared extensions \*\//,
      (all, indent) => `${indent}(this.child = ${patched.slice(patched.lastIndexOf('const ', extensionStep) + 6).match(/^[\w$]+/)[0]}),`);
    assert.ok(!earlier.includes(extensionMarker));
    assert.equal(releaseClosedChats(earlier), patched);
    assert.throws(() => releaseClosedChats(original.replace('"stripMarkdownToPlainText.js"()', '"stripMarkdown.js"()')), /preview cache owner changed/);
    assert.throws(() => releaseClosedChats(original.replace('Cannot close composer that is not selected', 'Cannot close')), /close owner changed/);
    assert.throws(() => releaseClosedChats(original.replace('return this.composerDataHandleManager.unloadComposer(', 'return this.handles.unloadComposer(')), /unload owner changed/);
    assert.throws(() => releaseClosedChats(original.replace('(this.lastMarkdownRowById = new Map()),', '(this.lastRows = new Map()),')), /row model owner changed/);
    assert.throws(() => releaseClosedChats(original.replace('(this.type = "extendable"),', '(this.type = "extendable"), (this.childCount = 0),')), /child contract changed/);
  });
}
