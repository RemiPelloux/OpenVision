import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { inlineEditContext, inlineEdit, inlineEditModel } from './inline-edit-provider.js';
import { fetchInlineEdit } from './inline-edit-http.mjs';
import { customInlineEdit } from './inline-edit-customization.mjs';
import { modelSelectionId } from './model-identity.js';
import { InlineEditError, inlineEditFailure } from './inline-edit-context.js';

const selectionId = modelSelectionId('fixture', 'fixture-model');
const request = { cmdKOptions: { modelDetails: { openvisionSelection: { modelId: selectionId } } },
  legacyContext: { explicitContext: { context: 'APPROVED_RULE' } }, rules: [{ body: 'PROJECT_RULE' }] };
const session = { intents: [{ items: [
  { item: { item: { case: 'cmdKSelection', value: { lines: ['const café = 1;'], startLineNumber: 1 } } } },
  { item: { item: { case: 'cmdKQuery', value: { query: 'Change 1 to 2' } } } },
  { item: { item: { case: 'cmdKImmediateContext', value: { lines: [], relativeWorkspacePath: 'test.js' } } } },
] }] };

function service() {
  const state = JSON.stringify({ version: 1, activeId: 'fixture', providers: [{ id: 'fixture', name: 'Fixture',
    url: 'https://fixture.invalid/v1', models: [{ id: 'fixture-model', name: 'Model', enabled: true }] }] });
  return { _storageService: { get: () => state }, _instantiationService: { invokeFunction: fn => fn({ get: () => ({ get: async () => 'fixture-key' }) }) },
    _modelConfigService: { getModelConfig: () => ({ selectedModels: [{ modelId: selectionId }] }) } };
}

test('inline edits use selected provider identity and bounded explicit context', () => {
  assert.equal(inlineEditModel(service()).modelName, selectionId);
  const context = JSON.parse(inlineEditContext(request, session));
  assert.equal(context.userRules, 'APPROVED_RULE');
  assert.equal(context.rules[0].body, 'PROJECT_RULE');
  assert.equal(context.instruction, 'Change 1 to 2');
  assert.deepEqual(context.selection.lines, ['const café = 1;']);
  assert.throws(() => inlineEditContext({ ...request, images: [{}] }, session), /text and code/);
  assert.throws(() => inlineEditContext(request, undefined), /not ready/);
  assert.throws(() => inlineEditContext({ ...request, rules: [{ body: 'x'.repeat(128 * 1024) }] }, session), /too large/);
});

test('late inline edit result is discarded after cancellation and listener is cleaned up', async () => {
  const controller = new AbortController(), pending = Promise.withResolvers(), calls = [];
  const ipc = { invoke: async (name, input) => {
    calls.push({ name, input });
    return name.endsWith('-cancel') ? undefined : pending.promise;
  } };
  const stream = inlineEdit({ ai: service(), request, session, id: 'cancel-fixture' }, controller.signal, {}, ipc);
  const result = stream.next();
  await new Promise(resolve => setImmediate(resolve));
  controller.abort(); pending.resolve({ ok: true, text: 'late edit' });
  await assert.rejects(result, /abort/i);
  assert.deepEqual(calls.map(call => call.name), ['vscode:openvision-inline-edit', 'vscode:openvision-inline-edit-cancel']);
});

test('inline editing rejects stale reasoning before sending a request', async () => {
  const invalid = structuredClone(request);
  invalid.cmdKOptions.modelDetails.openvisionSelection.parameters = [{ id: 'reasoning', value: 'unavailable' }];
  const stream = inlineEdit({ ai: service(), request: invalid, session, id: 'invalid' }, new AbortController().signal,
    {}, { invoke() { assert.fail('No IPC request expected'); } });
  await assert.rejects(stream.next(), /reasoning level/);
});

test('multiline output reaches native diff as individual lines and stale routes are discarded', async () => {
  const ai = service(), context = { ai, request, session, id: 'lines' };
  const ipc = { invoke: async () => ({ ok: true, text: 'one\r\ntwo\nthree' }) };
  const chunks = [];
  for await (const item of inlineEdit(context, new AbortController().signal, {}, ipc))
    chunks.push(item.response.value.response.value.text);
  assert.deepEqual(chunks, ['one\n', 'two\n', 'three']);
  const stale = inlineEdit(context, new AbortController().signal, {}, { invoke: async () => {
    ai._storageService.get = () => JSON.stringify({ version: 1, providers: [], activeId: null });
    return { ok: true, text: 'must not apply' };
  } });
  await assert.rejects(stale.next(), /settings changed/);
});

test('bounded context stops oversized traversal and only local diagnostics are shown', () => {
  const rules = [{ body: 'x'.repeat(128 * 1024) }, { get body() { assert.fail('Oversized input should stop traversal'); } }];
  assert.throws(() => inlineEditContext({ ...request, rules }, session), /too large/);
  assert.equal(inlineEditFailure(new InlineEditError('Safe diagnostic')), 'Safe diagnostic');
  assert.ok(!inlineEditFailure(Error('secret fixture-key')).includes('fixture-key'));
});

test('inline HTTP response requires a complete reply, bounds allocation and redacts provider diagnostics', async t => {
  const requests = [];
  const server = createServer(async (req, res) => {
    const chunks = []; for await (const chunk of req) chunks.push(chunk);
    const body = JSON.parse(Buffer.concat(chunks)); requests.push(body);
    if (body.model === 'http-error') { res.statusCode = 500; return res.end('fixture-key'); }
    if (body.model === 'oversize') return res.end('x'.repeat(1024 * 1024 + 1));
    res.end(JSON.stringify({ choices: [{ finish_reason: body.model === 'truncated' ? 'length' : 'stop',
      message: { role: 'assistant', content: body.model === 'markdown' ? '```js\n2\n```' : 'const café = 2;' } }] }));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => { server.closeAllConnections(); server.close(); });
  const input = { modelId: 'fixture', apiKey: 'fixture-key', baseUrl: `http://127.0.0.1:${server.address().port}/v1`,
    context: inlineEditContext(request, session), chatMode: false, effort: 'high' };
  assert.equal(await fetchInlineEdit(input, { fetch }), 'const café = 2;');
  for (const modelId of ['http-error', 'truncated', 'markdown', 'oversize'])
    await assert.rejects(fetchInlineEdit({ ...input, modelId }, { fetch }), error => !error.message.includes('fixture-key'));
  assert.equal(requests.length, 5);
  assert.equal(requests[0].store, false);
  assert.equal(requests[0].reasoning_effort, 'high');
});

for (const variant of ['desktop', 'glass']) test(`inline ${variant} transform preserves review calls and is idempotent`, () => {
  const source = `class InlineOwner {
  assertCmdKAvailable() {}
  submitContextSessionEdit(e, t) {
    const x = e.contextSessionUuid, I = uuid();
    let controller = new AbortController();
    return { promise: (async () => {
      try {
      const U = defaultModel();
      this.telemetryService.publicLogCapture("submitted.cmd-k", {model: U.modelName});
      const Y = await this.aiService.cmdKClient();
      await this.executeBeforeSubmitPromptHook();
      await this.aiContextSessionService.streamRequestWithContextWrapped(x, {
        endpoint: async (request, options) => Y.streamCmdK(new Request(request), options),
        generationUUID: I, abortSignal: signal,
      });
      const stream = this.aiService.streamResponse({ streamer: result.v });
      if (errors.shouldShowImmediateErrorMessage(error)) state.updatePromptBar(t, "errorDetails", {
        generationUUID: I, error: nativeError,
      });
      return this.inlineDiffService.streamDiff({});
      } catch (error) {
        (console.error(error), (done = !0), this.triggerStopHook(t, "error", I));
      }
    })() };
  }
}
const Action = class extends Base {
  async run(t, n) {
    if (${variant === 'desktop' ? 'zc' : 'Rl'}.localMode) return;
    if (!available(auth, "cmdk")) return;
    console.log("StartEditPrompt is already running, skipping");
  }
};`;
  const result = customInlineEdit(source, variant);
  assert.equal(customInlineEdit(result, variant), result);
  assert.ok(result.includes('openvisionInlineEdit({ ai: this.aiService'));
  assert.ok(result.includes('this.executeBeforeSubmitPromptHook'));
  assert.ok(result.includes('this.inlineDiffService.streamDiff'));
  const local = `${variant === 'desktop' ? 'zc' : 'Rl'}.localMode`;
  assert.ok(result.includes(`${local} ? result.v : this.aiService.streamResponse`));
  assert.ok(result.includes(`if (${local} && !controller.signal.aborted) state.updatePromptBar`));
  assert.ok(result.includes('detail: openvisionInlineEditFailure(error)'));
  assert.throws(() => customInlineEdit(source.replace('  submitContextSessionEdit(', '  renamedEdit('), variant), /owner/);
  assert.throws(() => customInlineEdit(source.replace('"cmdk"', '"unknown"'), variant), /boundary/);
});
