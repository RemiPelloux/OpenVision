import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { fallbackReasoningValues, requestReasoningValues, providerDefaultReasoning } from './model-reasoning.js';
import { customizeAgentReasoning } from './agent-reasoning-customization.mjs';
import { requestProviderRouting } from './provider-routing.mjs';
import { requestProvider } from './model-providers.js';

test('reasoning defaults are model-specific, endpoint-specific and subordinate to declarations', () => {
  const baseUrl = 'https://codex-easy.ai/v1';
  assert.deepEqual(fallbackReasoningValues(baseUrl, 'gpt-6.1-sol'), ['low', 'medium', 'high', 'xhigh', 'max']);
  assert.deepEqual(fallbackReasoningValues(baseUrl, 'deepseek-v4-pro'), ['none', 'low', 'high', 'max']);
  assert.deepEqual(fallbackReasoningValues(baseUrl, 'grok-4.7'), ['low', 'medium', 'high', 'xhigh']);
  assert.equal(fallbackReasoningValues('https://codex-easy.ai.example.test/v1', 'gpt-6.1-sol'), undefined);
  assert.equal(fallbackReasoningValues(baseUrl, 'deepseek-unknown'), undefined);
  assert.deepEqual(requestReasoningValues({ baseUrl, modelId: 'gpt-6.1-sol', advertised: ['ultra'] }), ['ultra']);
  assert.deepEqual(requestReasoningValues({ baseUrl, modelId: 'gpt-6.1-sol', advertised: [] }), []);
});

test('provider credentials are resolved per request even before settings mount', async () => {
  const input = 'class Service { async getLocalAgentProviderConfig(e, t) { return "old"; } async getLocalInferenceProviderConfig() { return "old"; } async runLocalAgentInExtensionHost(u) { return {baseUrl: u.baseUrl, apiKey: u.apiKey,}; } } const service = new Service();';
  const output = requestProviderRouting(input, 'desktop');
  assert.equal(requestProviderRouting(output, 'desktop'), output);
  const calls = [];
  const service = runInNewContext(output.replace(/^import .*;$/m, '') + '\nservice;', {
    K6e: 'secret-storage', openvisionAgentProvider: async (_storage, _secret, id) => {
      calls.push(id);
      return { baseUrl: `https://${id}.example.test/v1`, apiKey: `${id}-key` };
    },
  });
  service.instantiationService = { invokeFunction: callback => callback({ get: id => id }) };
  const [first, second] = await Promise.all([
    service.getLocalAgentProviderConfig({ modelId: 'gpt' }, { requestedModel: { modelId: 'deepseek' } }),
    service.getLocalAgentProviderConfig({ modelId: 'grok' }, {}),
  ]);
  assert.equal(first.apiKey, 'deepseek-key');
  assert.equal(second.apiKey, 'grok-key');
  assert.deepEqual(calls, ['deepseek', 'grok']);
});

test('simultaneous models retain their own saved provider keys without global activation', async () => {
  const providers = ['gpt', 'deepseek', 'grok'].map(id => ({ id, name: id,
    url: `https://${id}.example.test/v1`, models: [{ id, name: id, enabled: true }] }));
  const storage = { get: () => JSON.stringify({ version: 1, activeId: 'gpt', providers }) };
  const secrets = { get: async key => key === 'openvision.provider.grok' ? '' : `${key}-test-key` };
  const configs = await Promise.all(providers.map(provider => requestProvider(storage, secrets, provider.id)));
  assert.equal(configs[1].apiKey, 'openvision.provider.deepseek-test-key');
  assert.equal(configs[1].baseUrl, 'https://deepseek.example.test/v1');
  assert.equal(configs[2].apiKey, '', 'An empty provider key must never fall back to another provider');
  assert.equal(await requestProvider(storage, secrets, 'unknown'), undefined);
  providers[1].models[0].enabled = false;
  await assert.rejects(requestProvider(storage, secrets, 'deepseek'), /unavailable/);
});

async function recoveredBundle(kind) {
  try { return await readFile(new URL(`../source/app/extensions/cursor-agent-${kind}/dist/main.js`, import.meta.url), 'utf8'); }
  catch (error) { if (error.code === 'ENOENT') return undefined; throw error; }
}

function recoveredFunction(text, name) {
  const start = text.indexOf(`function ${name}(`);
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest', sourceType: 'script' });
  return text.slice(start, node.end);
}

test('recovered Agent request encoder preserves declared tiers in Responses and Chat payloads', async t => {
  const input = await recoveredBundle('exec');
  if (!input) return t.skip('Editable recovered Agent runtime is not prepared');
  const output = customizeAgentReasoning(input, 'exec');
  assert.equal(customizeAgentReasoning(output, 'exec'), output);
  const requests = [];
  const factory = runInNewContext(`(${recoveredFunction(output, 'Xxe')})`, {
    Fke: fetch => fetch, d_e: (_agent, fetch) => fetch, Ybe: () => undefined,
    fetch: async (_url, init) => { requests.push(JSON.parse(init.body)); return new Response('{}'); },
    Gxe: (_context, _args, _promise, generator) => {
      const iterator = generator();
      const step = value => { const next = iterator.next(value); return next.done ? next.value : Promise.resolve(next.value).then(step); };
      return Promise.resolve(step());
    },
    tEe: value => value !== null && typeof value === 'object' && !Array.isArray(value),
    process: { env: {} }, Response,
  });
  for (const [modelId, effort, endpoint] of [
    ['gpt-6.1-sol', 'max', 'responses'], ['deepseek-v4-pro', 'none', 'chat_completions'],
    ['grok-4.7', 'xhigh', 'chat_completions'], ['custom', 'ultra', 'responses'],
  ]) {
    const allowed = fallbackReasoningValues('https://codex-easy.ai/v1', modelId) ?? ['ultra'];
    const fetch = factory({ modelId, modelParameters: [{ id: 'reasoning', value: effort }],
      apiType: 'openai_compatible', openAICompatibleEndpoint: endpoint, configuredEffortValues: allowed });
    await fetch('https://fixture.invalid/v1', { body: JSON.stringify({ model: modelId }) });
    const payload = requests.at(-1);
    assert.equal(endpoint === 'responses' ? payload.reasoning?.effort : payload.reasoning_effort, effort);
  }
  const fetch = factory({ modelId: 'deepseek-v4-pro', modelParameters: [{ id: 'reasoning', value: 'xhigh' }],
    apiType: 'openai_compatible', openAICompatibleEndpoint: 'responses', configuredEffortValues: ['none', 'low', 'high', 'max'] });
  await fetch('https://fixture.invalid/v1', { body: JSON.stringify({ reasoning: { effort: 'xhigh' } }) });
  assert.equal(requests.at(-1).reasoning, undefined);
  for (const endpoint of ['responses', 'chat_completions']) {
    const defaultFetch = factory({ modelId: 'deepseek-v4-flash', modelParameters: [{ id: 'reasoning', value: providerDefaultReasoning }],
      apiType: 'openai_compatible', openAICompatibleEndpoint: endpoint, configuredEffortValues: [] });
    for (const reasoning of [{ effort: 'high', summary: 'auto' }, { effort: 'high' }]) {
      await defaultFetch('https://fixture.invalid/v1', { body: JSON.stringify({ model: 'deepseek-v4-flash', reasoning, reasoning_effort: 'high', stream: true }) });
      const payload = requests.at(-1);
      assert.equal(payload.reasoning_effort, undefined);
      assert.deepEqual(payload.reasoning, reasoning.summary ? { summary: 'auto' } : undefined);
      assert.equal(payload.stream, true);
      assert.ok(!JSON.stringify(payload).includes(providerDefaultReasoning));
    }
  }
});

test('recovered host reasoning patch is compatible with the prepared artifact', async t => {
  const input = await recoveredBundle('host');
  if (!input) return t.skip('Editable recovered Agent host is not prepared');
  const output = customizeAgentReasoning(input, 'host');
  assert.equal(customizeAgentReasoning(output, 'host'), output);
  const encode = runInNewContext(`(${recoveredFunction(output, 'RMe')})`, {
    PMe: value => value !== null && typeof value === 'object' && !Array.isArray(value),
  });
  const result = encode({ body: '{}' }, [{ id: 'reasoning', value: 'none' }], ['none', 'high']);
  assert.equal(JSON.parse(result.body).reasoning.effort, 'none');
  for (const reasoning of [{ effort: 'high', summary: 'auto' }, { effort: 'high' }]) {
    const result = encode({ body: JSON.stringify({ reasoning, reasoning_effort: 'high', stream: true }) },
      [{ id: 'reasoning', value: providerDefaultReasoning }], []);
    const payload = JSON.parse(result.body);
    assert.deepEqual(payload.reasoning, reasoning.summary ? { summary: 'auto' } : undefined);
    assert.equal(payload.reasoning_effort, undefined);
    assert.equal(payload.stream, true);
    assert.ok(!result.body.includes(providerDefaultReasoning));
  }
  assert.equal(JSON.parse(encode({ body: '{}' }, [{ id: 'reasoning', value: 'high' }], ['high']).body).reasoning.effort, 'high');
  assert.equal(encode({ body: 'malformed' }, [{ id: 'reasoning', value: providerDefaultReasoning }], []).body, 'malformed');
});
