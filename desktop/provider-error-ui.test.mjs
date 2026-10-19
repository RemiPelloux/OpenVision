import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { providerManualRetry } from './provider-error-ui.mjs';

class NativeError extends Error {
  constructor(message, options) { super(message, options); Object.assign(this, options); }
}
class NonAutomaticError extends NativeError {}

for (const [variant, name, base, terminal] of [
  ['desktop', 'xjf', 'Xge', 'VQ'], ['glass', 'ixS', 'Bke', 'nde'],
]) {
  test(`${variant} native error adapter enables manual recovery while retaining terminal classification`, async () => {
    const text = providerManualRetry(await readFile(new URL(`../source/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8'));
    assert.equal(providerManualRetry(text), text);
    const start = text.indexOf(`function ${name}(`);
    const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
    const adapt = runInNewContext(`(${text.slice(start, node.end)})`, { Error, [base]: NativeError, [terminal]: NonAutomaticError });
    for (const kind of ['LocalProviderError', 'NonRetriableError']) {
      const error = new Error('sample provider failure'); error.name = kind;
      const adapted = adapt(error, { modelId: 'selected-model', baseUrl: 'https://example.invalid/v1' });
      assert.ok(adapted instanceof NonAutomaticError);
      assert.equal(adapted.cause, error);
      assert.equal(adapted.displayInfo.isRetryable, kind === 'LocalProviderError');
      assert.match(adapted.displayInfo.detail, /selected-model/);
    }
  });

  test(`${variant} terminal provider failure has chat-owned persistence and explicit dismissal`, async () => {
    const text = providerManualRetry(await readFile(new URL(`../source/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8'));
    const desktop = variant === 'desktop';
    const [errorName, handleName, detailsName, bubbleName, dismissName, lookupName, serviceName] = desktop
      ? ['Os', 'cn', 'Dv', 'tp', 'LH', 'Vt', 't'] : ['qr', 'Et', 'Pu', 'ec', 'Jb', 'rt', 'e'];
    const start = text.indexOf('/* OpenVision retain terminal provider failure until retry or dismissal v2 */');
    const end = text.indexOf(`const ${bubbleName} =`, start);
    const handle = { data: {} }, details = { title: 'Local Provider Error', isRetryable: true };
    const service = {
      updateComposerDataSetStore: (target, update) => update((key, value) => { target.data[key] = value; }),
      updateComposerBubble: () => {},
    };
    const producer = text.slice(start, end);
    runInNewContext(producer, { [errorName]: { cause: { name: 'LocalProviderError' } },
      [handleName]: handle, [detailsName]: details, _composerDataService: service });
    assert.equal(handle.data.submitErrorDetails.openvisionProviderFailure, true);
    assert.equal(handle.data.submitErrorDetails.isRetryable, true);
    const dismissStart = text.indexOf(`${dismissName} = () => {`) + `${dismissName} = `.length;
    const parsed = parseExpressionAt(text, dismissStart, { ecmaVersion: 'latest' });
    const dismiss = runInNewContext(`(${text.slice(parsed.start, parsed.type === 'SequenceExpression' ? parsed.expressions[0].end : parsed.end)})`, {
      [lookupName]: () => undefined, v: () => handle, [serviceName]: { composerDataService: service },
    });
    dismiss();
    assert.equal(handle.data.submitErrorDetails, undefined, 'Dismiss even when the transient error bubble is absent');
    handle.data.submitErrorDetails = { title: 'Unrelated failure' };
    dismiss(); assert.equal(handle.data.submitErrorDetails.title, 'Unrelated failure');
  });
}

test('recovered desktop retry classifier never automatically repeats a manual-retry provider error', async () => {
  const text = await readFile(new URL('../source/app/out/vs/workbench/workbench.desktop.main.js', import.meta.url), 'utf8');
  const functionSource = name => {
    const start = text.indexOf(`function ${name}(`), node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
    return text.slice(start, node.end);
  };
  const classify = runInNewContext(`(${functionSource('w6f')})`, {
    Xge: NativeError, VQ: NonAutomaticError, DF: class extends NativeError {},
    Vw: class extends NativeError {}, Zge: class extends NativeError {}, lMd: 3, uMd: 3,
    e6f: runInNewContext(`(${functionSource('e6f')})`, { RDd: [] }),
  });
  const error = new NonAutomaticError('provider unavailable', { displayInfo: { isRetryable: true } });
  for (const enabled of [false, true]) for (const endless of [false, true]) {
    const decision = classify(error, false, 0, 0, 'request', enabled, endless, true, false, false);
    assert.equal(decision.action, 'throw'); assert.equal(decision.error, error);
  }
});

// Two Agent producers exist: cursor-agent-exec (legacy topology) and
// cursor-agent-host (gated). Only the exec bundle carries the provider error
// boundary, so the host topology must stay unreachable in local mode. Restart
// persistence (provider-failure-persistence.mjs) also depends on it: only a
// LocalProviderError from that boundary is flagged and saved with the chat.
test('local mode keeps the Agent host topology off unless its bundle carries the provider error boundary', async () => {
  const host = await readFile(new URL('../source/app/extensions/cursor-agent-host/dist/main.js', import.meta.url), 'utf8');
  const exec = await readFile(new URL('../source/app/extensions/cursor-agent-exec/dist/main.js', import.meta.url), 'utf8');
  assert.match(exec, /require\("\.\/openvision-provider-errors\.cjs"\)/);
  const hostProtected = host.includes('require("./openvision-provider-errors.cjs")');
  for (const variant of ['desktop', 'glass']) {
    const text = await readFile(new URL(`../source/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8');
    const gate = text.indexOf('checkFeatureGate("cursor_agent_host"');
    assert.ok(gate > 0 && text.indexOf('checkFeatureGate("cursor_agent_host"', gate + 1) === -1, `${variant}: gate owner drifted`);
    const guarded = /let n = !1;\s*if \(![\w$]+\.localMode\)\s*try \{\s*n = [\w$]+\.checkFeatureGate\("cursor_agent_host"/.test(text.slice(gate - 200, gate + 40));
    assert.ok(guarded || hostProtected, `${variant}: Agent host topology reachable without the provider error boundary`);
  }
});

for (const variant of ['desktop', 'glass']) {
  test(`${variant} retry removes the empty provider-failure placeholder named by the chat failure record`, async () => {
    const built = await readFile(new URL(`../source/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8');
    const text = providerManualRetry(built);
    assert.equal(providerManualRetry(text), text);
    assert.ok(!text.includes('openvisionProviderFailurePlaceholder'), 'earlier in-place patches are removed');
    const [handle, bubble] = variant === 'desktop' ? ['cn', 'tp'] : ['Et', 'ec'];
    const expression = anchor => {
      const start = text.indexOf(anchor);
      assert.ok(start > 0 && text.indexOf(anchor, start + 1) < 0, `unique ${anchor}`);
      return text.slice(start, parseExpressionAt(text, start, { ecmaVersion: 'latest', preserveParens: true }).end);
    };
    const record = expression(`${handle}.data.submitErrorDetails?.openvisionProviderFailure === true &&\n                    this.`);
    const clear = expression(`(${handle}.data.submitErrorDetails?.openvisionProviderFailure === true &&\n                        typeof`);
    const run = (source, data, extra = {}) => {
      const calls = [], store = { data };
      const owner = {
        _composerDataService: {
          deleteComposerBubbles: (target, ids) => { assert.equal(target, store); calls.push(['delete', ...ids]); },
          updateComposerDataSetStore: (target, update) => update((key, value) => { store.data = { ...store.data, [key]: value }; calls.push(['set', key]); }),
        },
        _composerUtilsService: { clearErrorDetailsAndServiceStatusUpdatesFromLatestAIMessages: () => calls.push(['clear']) },
      };
      runInNewContext(`(function (${handle}, ${bubble}) { ${source}; })`, {}).call(owner, store, extra.bubble);
      return { calls, data: store.data };
    };
    const failure = { openvisionProviderFailure: true, title: 'Provider failure' };
    const created = run(record, { submitErrorDetails: failure }, { bubble: { bubbleId: 'placeholder-1' } });
    assert.equal(created.data.submitErrorDetails.openvisionPlaceholderBubbleId, 'placeholder-1');
    assert.deepEqual(run(record, { submitErrorDetails: { title: 'Other failure' } }, { bubble: { bubbleId: 'x' } }).calls, [], 'other failures are not marked');
    assert.deepEqual(run(clear, created.data).calls, [['delete', 'placeholder-1'], ['clear'], ['set', 'submitErrorDetails']]);
    for (const data of [{ submitErrorDetails: failure }, { submitErrorDetails: { title: 'Other', openvisionPlaceholderBubbleId: 'x' } }, {}])
      assert.deepEqual(run(clear, data).calls, [['clear'], ['set', 'submitErrorDetails']], 'without a named provider placeholder only the recovered clearing runs');
  });
}
