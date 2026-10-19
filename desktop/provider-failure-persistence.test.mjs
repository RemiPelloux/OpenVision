import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createContext, runInContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { providerManualRetry } from './provider-error-ui.mjs';
import { marker, persistProviderFailures } from './provider-failure-persistence.mjs';

const secret = 'secret-persistence-fixture-key';
// Recovered names of the composer serializer, its field converter, the loader and
// the protobuf error type used by bubble error revival, per workbench variant.
const owners = { desktop: ['X1u', 'Y1u', 'P4s', 'FS'], glass: ['fZh', 'gZh', 'Uba', 'BS'] };
const bundles = new Map();
async function bundle(variant) {
  if (!bundles.has(variant)) bundles.set(variant, persistProviderFailures(providerManualRetry(
    await readFile(new URL(`../source/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8'))));
  return bundles.get(variant);
}
function slice(text, name) {
  const start = text.indexOf(`function ${name}(`);
  assert.ok(start >= 0 && text.indexOf(`function ${name}(`, start + 1) < 0, `${name} is unique`);
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  return text.slice(start, node.end);
}
// Unknown recovered helpers become identity functions, so the patched owner code
// runs as written while its unrelated dependencies stay inert.
function sandbox(values) {
  const target = { JSON, Object, Array, Uint8Array, crypto, console: { error() {}, warn() {} }, ...values };
  return createContext(new Proxy(target, {
    has: () => true,
    get: (object, key) => key in object ? object[key] : key in globalThis ? globalThis[key]
      : typeof key === 'string' ? function inert(value) { return value; } : undefined,
  }));
}
class ErrorDetails {
  constructor(value) { Object.assign(this, value); }
  toJsonString() { return JSON.stringify({ error: this.error, details: this.details }); }
  static fromJsonString(value) { return new ErrorDetails(JSON.parse(value)); }
}
function failure(overrides = {}) {
  return { openvisionProviderFailure: true, requestId: 'request-1', title: 'Local Provider Error',
    message: 'The provider returned HTTP 503. Try again later.', isRetryable: true, connectCode: 14,
    stackTrace: `LocalProviderError: upstream said ${secret}\n    at provider (/home/user/file.js:1:1)`,
    error: new ErrorDetails({ error: 3, details: { title: 'Unavailable', isRetryable: true } }),
    extraButtons: [{ id: 'resume', label: 'Try again', callback: () => {}, variant: 'secondary' },
      { id: 'other', label: 'Leak', callback: () => {} }],
    apiKey: secret, ...overrides };
}

for (const [variant, [serializerName, convertName, loaderName, errorType]] of Object.entries(owners)) {
  test(`${variant} composer serializer persists only a sanitized provider failure`, async () => {
    const text = await bundle(variant);
    assert.equal(persistProviderFailures(text), text, 'idempotent');
    assert.equal(text.split(marker).length, 2, 'helpers installed once');
    assert.ok(!slice(text, convertName).includes('submitErrorDetails'), 'recovered allowlist itself is unchanged');
    const context = sandbox({ [convertName]: data => ({ composerId: data.composerId, status: data.status }) });
    runInContext(`${text.slice(text.indexOf(marker), text.indexOf(`function ${serializerName}(`))}\n${slice(text, serializerName)}\nthis.serialize = ${serializerName};`, context);
    const reported = [];
    const json = context.serialize({ composerId: 'c1', status: 'aborted', submitErrorDetails: failure() }, undefined,
      (record, serialized) => reported.push(serialized.length));
    assert.equal(reported[0], json.length, 'size hook observes the persisted bytes');
    const saved = JSON.parse(json).submitErrorDetails;
    assert.deepEqual(saved, { openvisionProviderFailure: true, requestId: 'request-1', title: 'Local Provider Error',
      message: 'The provider returned HTTP 503. Try again later.', connectCode: 14, isRetryable: true,
      extraButtons: [{ id: 'resume', label: 'Try again', variant: 'secondary' }],
      error: JSON.stringify({ error: 3, details: { title: 'Unavailable', isRetryable: true } }) });
    assert.ok(!json.includes(secret) && !json.includes('stackTrace') && !json.includes('/home/user'), 'no secret or trace stored');
    const resume = JSON.parse(context.serialize({ composerId: 'c1', submitErrorDetails: failure({ resumeOnRetry: true,
      extraButtons: [{ id: 'resume', label: 'Resume', callback() {}, variant: 'primary' }] }) })).submitErrorDetails;
    assert.deepEqual([resume.resumeOnRetry, resume.extraButtons], [true, [{ id: 'resume', label: 'Resume', variant: 'primary' }]]);
    const scrubbed = JSON.parse(context.serialize({ composerId: 'c1', submitErrorDetails: failure({
      title: `Failure Bearer ${secret}`,
      message: `Base URL: https://user:${secret}@relay.invalid/v1?api_key=${secret}#${secret} key sk-abcdefgh12345678 Basic ${secret}` }) })).submitErrorDetails;
    assert.equal(scrubbed.title, 'Failure Bearer [redacted]');
    assert.equal(scrubbed.message, 'Base URL: https://[redacted]@relay.invalid/v1 key [redacted] Basic [redacted]');
    // Unrelated (non-provider) failures, dismissed failures and old records add nothing.
    for (const details of [undefined, { title: 'Unrelated failure', message: secret }, failure({ openvisionProviderFailure: 'true' })])
      assert.equal('submitErrorDetails' in JSON.parse(context.serialize({ composerId: 'c1', submitErrorDetails: details })), false);
  });

  test(`${variant} composer loader restores a provider failure and keeps old chats unchanged`, async () => {
    const text = await bundle(variant);
    const context = sandbox({ [errorType]: ErrorDetails });
    runInContext(`${text.slice(text.indexOf(marker), text.indexOf(`function ${serializerName}(`))}\n${slice(text, loaderName)}\nthis.load = ${loaderName};`, context);
    const stored = { codeBlockData: {}, composerId: 'c1', status: 'aborted', modelConfig: { modelName: 'fixture', maxMode: false },
      submitErrorDetails: { openvisionProviderFailure: true, title: 'Local Provider Error', message: 'HTTP 503', isRetryable: true,
        stackTrace: secret, injected: secret, extraButtons: [{ id: 'resume', label: 'Try again', variant: 'secondary', callback: 'x' }],
        error: JSON.stringify({ error: 3, details: { title: 'Unavailable' } }) } };
    const restored = context.load(JSON.parse(JSON.stringify(stored))).submitErrorDetails;
    assert.ok(restored.error instanceof ErrorDetails && restored.error.details.title === 'Unavailable');
    // Compare by value: the sandbox realm has its own Object/Array prototypes.
    assert.deepEqual(JSON.parse(JSON.stringify({ ...restored, error: undefined })), { openvisionProviderFailure: true,
      title: 'Local Provider Error', message: 'HTTP 503', isRetryable: true,
      extraButtons: [{ id: 'resume', label: 'Try again', variant: 'secondary' }] });
    assert.deepEqual(Object.keys(restored).sort(), ['connectCode', 'error', 'extraButtons', 'isRetryable', 'message',
      'openvisionPlaceholderBubbleId', 'openvisionProviderFailure', 'requestId', 'resumeOnRetry', 'title'], 'only allowlisted fields are revived');
    for (const [value, expected] of [['bubble-1234', 'bubble-1234'], [`../${secret}`, undefined], [42, undefined]])
      assert.equal(context.load({ codeBlockData: {}, composerId: 'p', modelConfig: { modelName: 'fixture', maxMode: false },
        submitErrorDetails: { openvisionProviderFailure: true, openvisionPlaceholderBubbleId: value } }).submitErrorDetails.openvisionPlaceholderBubbleId, expected);
    assert.ok(!JSON.stringify(restored).includes(secret), 'unknown stored fields are not revived');
    const old = context.load({ codeBlockData: {}, composerId: 'old', status: 'completed', modelConfig: { modelName: 'fixture', maxMode: false } });
    assert.equal(old.submitErrorDetails, undefined, 'records without the field load as before');
    assert.equal(old.composerId, 'old');
    const corrupt = context.load({ codeBlockData: {}, composerId: 'c2', submitErrorDetails: { openvisionProviderFailure: true, error: '{' } });
    assert.equal(corrupt.submitErrorDetails.error, undefined, 'an unreadable stored error does not block loading');
    assert.equal(context.load({ codeBlockData: {}, composerId: 'c3', submitErrorDetails: { title: 'foreign' } }).submitErrorDetails, undefined);
  });

  test(`${variant} restored failure keeps the recovered callback-free resume route and clears on retry or dismissal`, async () => {
    const text = await bundle(variant);
    // The error-button renderer accepts a resume button without a callback and
    // routes it to composerChatService.resumeChat(handle); retry and dismissal
    // both clear the in-memory field the serializer reads.
    assert.ok(/\(([\w$]+)\) => typeof \1\.callback == "function" \|\| \(\1\.id === "resume" && [\w$]+ !== void 0\)/.test(text), 'recovered owner contract: ' + /\(([\w$]+)\) => typeof \1\.callback == "function" \|\| \(\1\.id === "resume" && [\w$]+ !== void 0\)/.source.slice(0, 60));
    assert.ok(/\.id === "resume" && ([\w$]+) && [\w$]+\.composerChatService\.resumeChat\(\1\)/.test(text), 'recovered owner contract: ' + /\.id === "resume" && ([\w$]+) && [\w$]+\.composerChatService\.resumeChat\(\1\)/.source.slice(0, 60));
    assert.ok(/resumeChat\([\w$]+, [\w$]+\) \{[\s\S]{0,400}isResume: !0,\s*bubbleId: void 0,/.test(text), 'recovered owner contract: ' + /resumeChat\([\w$]+, [\w$]+\) \{[\s\S]{0,400}isResume: !0,\s*bubbleId: void 0,/.source.slice(0, 60));
    assert.ok(/clearErrorDetailsAndServiceStatusUpdatesFromLatestAIMessages\(\s*[\w$]+,?\s*\),\s*this\._composerDataService\.updateComposerDataSetStore\([\w$]+, \(([\w$]+)\) =>\s*\1\("submitErrorDetails", void 0\),?\s*\)/.test(text), 'recovered owner contract: ' + /clearErrorDetailsAndServiceStatusUpdatesFromLatestAIMessages\([\w$]+\),\s*this\._composerDataService\.updateComposerDataSetStore\([\w$]+, \(([\w$]+)\) =>\s*\1\("submitErrorDetails", void 0\),?\s*\)/.source.slice(0, 60));
    assert.ok(/submitErrorDetails\?\.openvisionProviderFailure === true\) \{\s*[\w$]+\.composerDataService\.updateComposerDataSetStore\([\w$]+, setter => setter\("submitErrorDetails", undefined\)\);/.test(text), 'recovered owner contract: ' + /submitErrorDetails\?\.openvisionProviderFailure === true\) \{\s*[\w$]+\.composerDataService\.updateComposerDataSetStore\([\w$]+, setter => setter\("submitErrorDetails", undefined\)\);/.source.slice(0, 60));
  });
}

test('an in-place build with the previous helper block is upgraded once', async () => {
  const current = await bundle('desktop');
  const previous = current.replace(marker, '/* OpenVision persist unresolved provider failure v1 */');
  const upgraded = persistProviderFailures(previous);
  assert.ok(upgraded === current, 'upgrade regenerates the current helpers without duplicating calls');
  assert.equal(upgraded.split('openvisionPersistProviderFailure(').length, 3, 'one helper definition and one serializer call');
});

test('persistence refuses changed owners instead of silently skipping', () => {
  assert.throws(() => persistProviderFailures('no owners here'), /requires the retained provider failure owner/);
  assert.throws(() => persistProviderFailures('/* OpenVision retain terminal provider failure until retry or dismissal v2 */'),
    /resume fallback changed/);
});
