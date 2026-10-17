import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { readableApp } from './recovered-source.mjs';
import { cancelClosedRunningChat, marker } from './chat-close-cancellation.mjs';

const variants = Object.fromEntries(await Promise.all(['desktop', 'glass'].map(async variant =>
  [variant, await readFile(new URL(`out/vs/workbench/workbench.${variant}.main.js`, readableApp), 'utf8')])));

// Execute the actual recovered (or patched) Close Tab `run` method. Free
// bundle identifiers resolve to neutral stubs; the three injected services are
// returned in the order the method requests them (composer, data, dialog).
function closeTabRun(text) {
  const title = text.indexOf('title: { value: "Close Tab", original: "Close Tab" }');
  const start = text.lastIndexOf('class extends', title);
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  const method = node.body.body.find(member => member.key?.name === 'run');
  const source = text.slice(method.start, method.end);
  const known = new Set(['console', 'Promise', 'Error', 'undefined', 'Object', 'Array']);
  const scope = new Proxy({}, { has: (_, name) => typeof name === 'string' && !known.has(name),
    get: (_, name) => name === Symbol.unscopables ? undefined : Object.assign(() => false, { warning: 'warning', token: name }) });
  const Class = new Function('scope', `with (scope) { return (class { ${source} }); }`)(scope);
  return async ({ running = true, choice = 'close', background = false, cancelFails = false } = {}) => {
    const calls = [], services = [
      { cancelCurrentStep: async id => { calls.push(['cancel', id]); if (cancelFails) throw Error('cancel failed'); },
        closeComposer: async id => { calls.push(['close', id]); } },
      { selectedComposerId: 'chat-1', getHandleIfLoaded: id => ({ id }), isComposerRunning: () => running,
        getComposerData: () => background ? { createdFromBackgroundAgent: { bcId: 'bc' } } : {} },
      { openDialog: async options => { calls.push(['dialog', options.primaryButton.label]); return choice; } },
    ];
    let index = 0;
    const errors = console.error; console.error = () => calls.push(['logged']);
    try { await new Class().run({ get: () => services[index++] }); } finally { console.error = errors; }
    return calls;
  };
}

for (const [variant, original] of Object.entries(variants)) {
  const before = closeTabRun(original), patched = cancelClosedRunningChat(original), after = closeTabRun(patched);
  test(`${variant}: confirming Close Tab on a running chat cancels it before closing`, async () => {
    assert.deepEqual(await before(), [['dialog', 'Close Tab'], ['close', 'chat-1']], 'Recovered behaviour only hides the chat');
    assert.deepEqual(await after(), [['dialog', 'Close Tab'], ['cancel', 'chat-1'], ['close', 'chat-1']]);
  });
  test(`${variant}: Cancel, idle chats and dialog exemptions keep recovered behaviour`, async () => {
    assert.deepEqual(await after({ choice: 'cancel' }), await before({ choice: 'cancel' }));
    assert.deepEqual(await after({ running: false }), [['close', 'chat-1']]);
    assert.deepEqual(await after({ background: true }), await before({ background: true }));
  });
  test(`${variant}: a failed cancellation is logged and the tab still closes`, async () => {
    assert.deepEqual(await after({ cancelFails: true }), [['dialog', 'Close Tab'], ['cancel', 'chat-1'], ['logged'], ['close', 'chat-1']]);
  });
  test(`${variant}: patch is idempotent and refuses a changed owner`, () => {
    assert.equal(patched.split(marker).length, 2);
    assert.equal(cancelClosedRunningChat(patched), patched);
    assert.throws(() => cancelClosedRunningChat(original.replace('"Close Running Tab?"', '"Close Busy Tab?"')), /owner changed/);
  });
}
