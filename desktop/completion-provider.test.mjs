import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { completionContext, localCompletion, completionModel } from './completion-provider.js';
import { fetchCompletion } from './completion-http.mjs';
import { customCompletion } from './completion-customization.mjs';

function fixture(text = 'const x = ;\r\n', position = { lineNumber: 1, column: 11 }) {
  const selection = { modelId: 'coder' };
  const state = { version: 1, activeId: 'p', providers: [{ id: 'p', name: 'Test', url: 'http://127.0.0.1:8000/v1',
    models: [{ id: 'coder', name: 'Coder', enabled: true }] }] };
  const request = { modelValue: text, modelVersion: 1, position, generationUUID: 'generation',
    abortController: new AbortController(), model: { isDisposed: () => false, getVersionId: () => 1, getLanguageId: () => 'javascript' },
    editor: { getPosition: () => position, getModel: () => request.model } };
  const service = { _storageService: { get: key => key.includes('model-providers') ? JSON.stringify(state) : selection.modelId },
    _instantiationService: { invokeFunction: fn => fn({ get: () => ({ get: async () => 'fixture-key' }) }) },
    debouncer: { shouldDebounce: async () => false } };
  return { service, request, state, selection };
}

test('context preserves UTF-16 columns, CRLF and nearby code with bounded request size', () => {
  const context = completionContext('😀\r\nconst x = ;\r\n', { lineNumber: 2, column: 11 }, 'js');
  assert.equal(context.prefix, '😀\r\nconst x = ');
  assert.equal(context.suffix, ';\r\n');
  assert.equal(context.lineSuffix, ';');
  const large = completionContext('x'.repeat(15000), { lineNumber: 1, column: 10001 }, 'text');
  assert.equal(large.prefix.length, 8000); assert.equal(large.suffix.length, 2000);
  const unicode = completionContext('😀' + 'x'.repeat(7999), { lineNumber: 1, column: 8002 }, 'text');
  assert.equal(unicode.prefix, 'x'.repeat(7999));
  assert.throws(() => completionContext('x', { lineNumber: 2, column: 1 }, 'text'), /outside/);
});

test('native completion event adapter preserves existing text and selected credentials', async () => {
  const { service, request } = fixture();
  const ipc = { invoke: async (channel, data) => {
    assert.equal(channel, 'vscode:openvision-completion');
    assert.equal(data.apiKey, 'fixture-key'); assert.equal(data.model, 'coder');
    assert.equal(data.prefix, 'const x = '); return { ok: true, text: '1\n+2' };
  } };
  const events = await Array.fromAsync(await localCompletion(service, request, 'secrets', ipc));
  assert.equal(events[0].case, 'modelInfo');
  assert.deepEqual(events[1].range, { startLineNumber: 1, endLineNumberInclusive: 1 });
  assert.equal(events[2].text, 'const x = 1\r\n+2;');
});

test('disabled, superseded, moved and canceled completions cannot dispatch or publish stale text', async () => {
  const { service, request, state } = fixture();
  const forbid = { invoke: () => assert.fail('Unexpected request') };
  state.providers[0].models[0].enabled = false;
  assert.equal(completionModel(service._storageService), undefined);
  assert.equal(await localCompletion(service, request, '', forbid), null);
  state.providers[0].models[0].enabled = true;
  request.abortController.abort();
  assert.equal(await localCompletion(service, request, '', forbid), null);
  for (const invalidate of [r => r.abortController.abort(), r => { r.model.getVersionId = () => 2; },
    r => { r.editor.getPosition = () => ({ lineNumber: 2, column: 1 }); }]) {
    const f = fixture(), pending = Promise.withResolvers(), entered = Promise.withResolvers(), calls = [];
    const result = localCompletion(f.service, f.request, '', { invoke: (channel, value) => {
      calls.push(channel); if (channel.endsWith('-cancel')) return Promise.resolve();
      entered.resolve(); return pending.promise;
    } });
    await entered.promise; invalidate(f.request); pending.resolve({ ok: true, text: 'stale' });
    assert.equal(await result, null);
    if (f.request.abortController.signal.aborted) assert.ok(calls.includes('vscode:openvision-completion-cancel'));
  }
});

test('cancellation between native events stops delivery; unavailable provider yields no edit', async () => {
  const f = fixture();
  const events = await localCompletion(f.service, f.request, '', { invoke: async () => ({ ok: true, text: '1' }) });
  assert.equal((await events.next()).value.case, 'modelInfo');
  f.request.abortController.abort(); assert.equal((await events.next()).done, true);
  const other = fixture();
  const statuses = [];
  other.service.statusbarElement = { value: { update: value => statuses.push(value) } };
  other.service.statusBarElementProps = () => ({ text: 'OpenVision Tab' });
  assert.equal(await localCompletion(other.service, other.request, '', { invoke: async () => ({ ok: false }) }), null);
  assert.match(statuses[0].tooltip, /Check the selected model/);
});

test('editor identity, selected model and provider route remain current across asynchronous boundaries', async () => {
  const invalidations = {
    editor: f => { f.request.editor.getModel = () => ({}); },
    off: f => { f.selection.modelId = ''; },
    selected: f => { f.selection.modelId = 'other-model'; },
    disabled: f => { f.state.providers[0].models[0].enabled = false; },
    url: f => { f.state.providers[0].url = 'http://127.0.0.1:8001/v1'; },
    provider: f => { f.state.providers[0].id = 'replacement'; f.state.activeId = 'replacement'; },
  };
  for (const [name, invalidate] of Object.entries(invalidations)) {
    for (const boundary of ['debounce', 'secret', 'response', 'events']) {
      const f = fixture(), entered = Promise.withResolvers(), pending = Promise.withResolvers();
      let requests = 0;
      if (boundary === 'debounce') f.service.debouncer.shouldDebounce = () => { entered.resolve(); return pending.promise; };
      if (boundary === 'secret') f.service._instantiationService.invokeFunction = fn => fn({
        get: () => ({ get: () => { entered.resolve(); return pending.promise; } }),
      });
      const result = localCompletion(f.service, f.request, '', { invoke: async () => {
        requests++;
        if (boundary === 'response') { entered.resolve(); return pending.promise; }
        return { ok: true, text: 'stale' };
      } });
      if (boundary === 'events') {
        const events = await result;
        assert.equal((await events.next()).value.case, 'modelInfo');
        invalidate(f);
        assert.equal((await events.next()).done, true, `${name}: event delivery`);
      } else {
        await entered.promise;
        invalidate(f);
        pending.resolve(boundary === 'debounce' ? false : boundary === 'secret' ? 'fixture-key' : { ok: true, text: 'stale' });
        assert.equal(await result, null, `${name}: ${boundary}`);
        assert.equal(requests, boundary === 'response' ? 1 : 0, `${name}: ${boundary} dispatch`);
      }
    }
  }
});

test('real HTTP completion uses selected connection, has bounded responses and aborts upstream', async t => {
  const requests = [], canceled = Promise.withResolvers(), slowEntered = Promise.withResolvers();
  const server = createServer(async (req, res) => {
    const chunks = []; for await (const chunk of req) chunks.push(chunk);
    const body = JSON.parse(Buffer.concat(chunks)); requests.push({ body, authorized: req.headers.authorization === 'Bearer fixture-key' });
    if (body.model === 'slow') { res.on('close', () => canceled.resolve()); slowEntered.resolve(); return; }
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ choices: [{ finish_reason: 'stop', message: { role: 'assistant', content: body.model === 'large' ? 'x'.repeat(70000) : '42' } }] }));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => { server.closeAllConnections(); server.close(); });
  const input = { baseUrl: `http://127.0.0.1:${server.address().port}/v1`, apiKey: 'fixture-key',
    model: 'coder', prefix: 'const x = ', suffix: ';', language: 'javascript' };
  assert.equal(await fetchCompletion(input, { fetch }), '42');
  assert.equal(requests[0].authorized, true); assert.equal(requests[0].body.stream, false);
  assert.equal(requests[0].body.messages.length, 2);
  await assert.rejects(fetchCompletion({ ...input, model: 'large' }, { fetch }), /too large/);
  const abort = new AbortController();
  const slow = fetchCompletion({ ...input, model: 'slow' }, { fetch, signal: abort.signal });
  await slowEntered.promise;
  abort.abort();
  await assert.rejects(slow, /abort/i); await canceled.promise;
});

test('provider Markdown wrappers with leading whitespace are rejected without changing valid code whitespace', async () => {
  const input = { baseUrl: 'http://127.0.0.1:8000/v1', apiKey: '', model: 'coder', prefix: '', suffix: '', language: 'js' };
  const response = text => ({ fetch: async () => Response.json({ choices: [{ finish_reason: 'stop', message: { role: 'assistant', content: text } }] }) });
  for (const text of ['```js\n42\n```', '\n  ```js\n42\n```'])
    await assert.rejects(fetchCompletion(input, response(text)), /Markdown/);
  assert.equal(await fetchCompletion(input, response('\n  return 42;')), '\n  return 42;');
});

for (const variant of ['desktop', 'glass']) test(`${variant}: original native completion owners support local mode and repeat safely`, async t => {
  let source;
  try { source = await readFile(new URL(`../../cursor/readable/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8'); }
  catch (e) { if (e.code === 'ENOENT') return t.skip('Original recovered workbench required'); throw e; }
  const result = customCompletion(source, variant);
  assert.equal(customCompletion(result, variant), result);
  assert.match(result, /return openvisionLocalCompletion\(this,/);
  assert.throws(() => customCompletion('class Unknown {}', variant), /owner missing/);
});
