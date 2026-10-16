import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { planPiImport, piReasoningLevels, summarizePiAuth, piAuthKey } from './pi-import.js';
import { createPiImportHandler, piAgentDirectory, readStagedRequest } from './pi-import-host.mjs';
import { ModelProviders, normalizeBaseUrl, normalizeUserCapabilities, allCatalog, assertImageInput, requestAgentProvider } from './model-providers.js';
import { reasoningSource } from './model-reasoning.js';
import { modelSelectionId } from './model-identity.js';

const root = resolve(import.meta.dirname, '..');
const run = promisify(execFile);
const helpers = { normalizeUrl: normalizeBaseUrl, normalizeCapabilities: normalizeUserCapabilities };
const keys = { chat: 'ov-test-fake-key-chat-0001', resp: 'ov-test-fake-key-resp-0002', anth: 'ov-test-fake-key-anth-0003' };
const models = { providers: {
  chat: { api: 'openai-completions', baseUrl: 'https://chat.fixture.test/v1/', apiKey: 'LITERAL-IN-MODELS', models: [
    { id: 'thinker', name: 'Thinker', reasoning: true, input: ['text', 'image'], contextWindow: 200000, maxTokens: 16000,
      thinkingLevelMap: { off: 'none', minimal: 'low', low: 'low', medium: 'medium', high: 'high', xhigh: 'high', max: 'max' } },
    { id: 'plain', reasoning: false, input: ['text'], compat: { maxTokensField: 'max_tokens' } },
    { id: 'plain' }, { name: 'no id' }] },
  resp: { api: 'openai-responses', baseUrl: 'https://resp.fixture.test/v1', models: [{ id: 'responder', reasoning: true, input: ['text'] }] },
  anth: { api: 'anthropic-messages', baseUrl: 'https://anth.fixture.test', models: [{ id: 'claude', reasoning: true }] },
  oauth: { api: 'openai-completions', baseUrl: 'https://oauth.fixture.test/v1', models: [] },
  odd: { api: 'google-generative-ai', baseUrl: 'https://odd.fixture.test', models: [] },
  bad: { api: 'openai-completions', baseUrl: 'ftp://bad', models: [] },
} };
const auth = { chat: { type: 'api_key', key: keys.chat }, resp: { type: 'api_key', key: ` ${keys.resp} ` }, anth: { type: 'api_key', key: keys.anth },
  oauth: { type: 'oauth', access: 'oauth-token-not-a-key' }, odd: { type: 'api_key', key: '!pass show odd' } };

function bridge() {
  const storage = new Map(), secrets = new Map(), settings = {};
  return {
    storage: { get: key => storage.get(key), store: (key, value) => storage.set(key, value), flush: async () => {} },
    secrets: { get: async key => secrets.get(key), set: async (key, value) => secrets.set(key, value), delete: async key => secrets.delete(key) },
    auth: { storeOpenAIKeyAndWait: async key => { settings.key = key; } },
    reactive: { setApplicationUserPersistentStorage: (key, value) => { settings[key] = value; }, manualSave() {} },
    ai: { modelConfigService: { setModelConfig() {} }, handleAvailableModelsChange() {} },
    request: async () => { throw new Error('discovery is not used'); }, secretsMap: secrets, storageMap: storage,
  };
}

test('pi plans map API types, capabilities and key availability without key material', () => {
  const plan = planPiImport({ models, auth: summarizePiAuth(JSON.stringify(auth)) }, helpers);
  const by = Object.fromEntries(plan.providers.map(entry => [entry.sourceId, entry]));
  assert.deepEqual(plan.summary, { new: ['chat', 'resp', 'oauth'], imported: [], conflicts: [], unsupported: ['anth', 'odd'], invalid: ['bad'], models: 3 });
  assert.equal(by.chat.url, 'https://chat.fixture.test/v1');
  assert.deepEqual(by.chat.models.map(model => model.id), ['thinker', 'plain']);
  assert.deepEqual(by.chat.models[0].userCapabilities, { supportsVision: true, contextLength: 200000, maxOutputTokens: 16000,
    reasoningEffortValues: [{ id: 'none', value: 'none' }, { id: 'low', value: 'low' }, { id: 'medium', value: 'medium' },
      { id: 'high', value: 'high' }, { id: 'max', value: 'max' }] });
  assert.deepEqual(by.chat.models[1].userCapabilities, { reasoningEffortValues: [], supportsVision: false });
  assert.match(by.chat.models[1].notes[0], /compatibility settings not imported: maxTokensField/);
  assert.ok(by.chat.notes.some(note => /apiKey field is not imported/.test(note)));
  assert.ok(by.chat.notes.some(note => /Duplicate model "plain"/.test(note)) && by.chat.notes.some(note => /without a valid id/.test(note)));
  assert.equal(by.chat.key, 'available');
  assert.equal(by.oauth.key, 'OAuth sign-in is not imported');
  assert.match(by.anth.reason, /Anthropic Messages API providers are not supported/);
  assert.equal(by.anth.models.length, 0, 'Unsupported providers are reported, never half-imported');
  assert.match(by.odd.reason, /"google-generative-ai" is not supported/);
  assert.match(by.resp.notes[0], /Responses API/);
  assert.deepEqual(by.resp.models[0].userCapabilities.reasoningEffortValues.map(item => item.id), ['low', 'medium', 'high']);
  const text = JSON.stringify(plan);
  for (const key of [...Object.values(keys), 'oauth-token-not-a-key', 'LITERAL-IN-MODELS', 'pass show']) assert.ok(!text.includes(key));
  assert.equal(piAuthKey(JSON.stringify(auth), 'resp'), keys.resp);
  assert.equal(piAuthKey(JSON.stringify(auth), 'oauth'), undefined);
  assert.equal(piAuthKey(JSON.stringify(auth), 'odd'), undefined, 'Command-based keys are never executed');
  assert.deepEqual(piReasoningLevels({ reasoning: true, thinkingLevelMap: { off: null, minimal: null, xhigh: 'xhigh', max: 'max' } }).map(item => item.id), ['xhigh', 'max']);
});

test('confirmed import stores keys encrypted, is idempotent and never replaces without asking', async () => {
  const services = bridge();
  const providers = new ModelProviders(services); await providers.ready;
  const authSummary = summarizePiAuth(JSON.stringify(auth));
  const plan = () => planPiImport({ models, auth: authSummary, existing: providers.state.providers }, helpers);
  const keyMap = new Map(Object.entries({ chat: keys.chat, resp: keys.resp }));
  const first = plan().providers.filter(entry => entry.selected);
  const results = await providers.importProviders(first, keyMap);
  assert.deepEqual(results.map(item => [item.name, item.models, item.keyStored]), [['chat', 2, true], ['resp', 1, true], ['oauth', 0, false]]);
  const saved = services.storageMap.get('openvision.model-providers.v1');
  for (const key of Object.values(keys)) assert.ok(!saved.includes(key), 'Keys never enter provider storage');
  const chat = providers.state.providers.find(provider => provider.name === 'chat');
  assert.equal(services.secretsMap.get(`openvision.provider.${chat.id}`), keys.chat);
  assert.deepEqual(chat.importSource, { kind: 'pi', providerId: 'chat' });
  assert.equal(providers.state.activeId, chat.id);

  const second = plan();
  assert.deepEqual(second.summary.new, []);
  assert.deepEqual(second.summary.imported, ['chat', 'resp', 'oauth']);
  assert.ok(second.providers.every(entry => !entry.selected));
  const existingId = name => second.providers.find(entry => entry.sourceId === name).existingId;
  assert.deepEqual(await providers.importProviders(second.providers.filter(entry => entry.status === 'imported')), [
    { id: chat.id, name: 'chat', skipped: true }, { id: existingId('resp'), name: 'resp', skipped: true },
    { id: existingId('oauth'), name: 'oauth', skipped: true }]);
  assert.equal(providers.state.providers.length, 3, 'Re-running adds no duplicates');

  // A user edit survives an explicit update; only missing values and models are filled.
  chat.models[1] = { ...chat.models[1], name: 'Renamed', userCapabilities: { supportsVision: true } };
  chat.models.splice(0, 1);
  const update = plan().providers.find(entry => entry.sourceId === 'chat');
  assert.deepEqual(update.newModelIds, ['thinker']);
  await providers.importProviders([{ ...update, replace: true }], new Map([['chat', 'ov-test-fake-key-chat-rotated']]));
  const updated = providers.get(chat.id);
  assert.deepEqual(updated.models.map(model => model.id), ['plain', 'thinker']);
  assert.equal(updated.models[0].name, 'Renamed');
  assert.deepEqual(updated.models[0].userCapabilities, { reasoningEffortValues: [], supportsVision: true });
  assert.equal(services.secretsMap.get(`openvision.provider.${chat.id}`), 'ov-test-fake-key-chat-rotated');

  // A same-named provider created by hand is a conflict, not a silent merge.
  const manual = await providers.save({ name: 'oauth2', url: 'https://manual.test/v1', key: 'manual' });
  const conflict = planPiImport({ models: { providers: { oauth2: models.providers.oauth } }, existing: providers.state.providers }, helpers).providers[0];
  assert.equal(conflict.status, 'conflict'); assert.equal(conflict.existingId, manual.id); assert.equal(conflict.selected, false);
  const restored = new ModelProviders(services); await restored.ready;
  assert.equal(restored.state.providers.length, 4);
});

test('user-specified capabilities override discovery per field and feed reasoning and image consumers', async () => {
  const state = (model, extra = {}) => ({ get: () => JSON.stringify({ version: 1, activeId: null,
    providers: [{ id: 'p', name: 'P', url: 'https://p.test/v1', models: [{ id: 'm', name: 'M', enabled: true, ...model }], ...extra }] }) });
  const discovered = { capabilities: { reasoningEffortValues: [{ id: 'low', value: 'low' }], supportsVision: true, contextLength: 1000 } };
  let [entry] = allCatalog(state(discovered));
  assert.equal(entry.supportsImages, true);
  assert.deepEqual(entry.parameterDefinitions[0].parameterType.enumParameter.values.map(item => item.displayName), ['Provider default', 'Low']);
  const user = { ...discovered, userCapabilities: { reasoningEffortValues: [{ id: 'high', value: 'high' }, { id: 'max', value: 'max' }], supportsVision: false } };
  [entry] = allCatalog(state(user));
  assert.equal(entry.supportsImages, false);
  assert.deepEqual(entry.parameterDefinitions[0].parameterType.enumParameter.values.map(item => item.displayName), ['Provider default', 'High', 'Max']);
  assert.match(entry.variants[0].tooltipData.markdownContent, /^User-specified/);
  assert.match(entry.variants[0].tooltipData.markdownContent, /Images: not accepted \(user-specified\)\.\n\nContext: 1,000 tokens \(discovered\)\./);
  assert.equal(reasoningSource({ userCapabilities: { reasoningEffortValues: [] } }, { url: 'https://p.test/v1' }), 'No reasoning · User-specified');
  const id = modelSelectionId('p', 'm');
  assert.throws(() => assertImageInput(state(user), id, 1), /set to text-only input/);
  assert.doesNotThrow(() => assertImageInput(state(user), id, 0));
  assert.doesNotThrow(() => assertImageInput(state(discovered), id, 2));
  assert.doesNotThrow(() => assertImageInput(state({}), id, 2), 'Unknown image support leaves the decision to the provider');
  const storage = state(user);
  const secrets = { get: async () => 'k' };
  await assert.rejects(requestAgentProvider(storage, secrets, { modelId: id, parameters: [{ id: 'reasoning', value: 'low' }] }), /no longer available/);
  assert.deepEqual((await requestAgentProvider(storage, secrets, { modelId: id, parameters: [{ id: 'reasoning', value: 'max' }] }))
    .openvisionProviders[0].reasoningValues.m, ['high', 'max']);
  assert.throws(() => normalizeUserCapabilities({ contextLength: 0 }), /whole number/);
  assert.throws(() => normalizeUserCapabilities({ reasoningEffortValues: ['low', 'low'] }), /unique/);
  assert.throws(() => normalizeUserCapabilities({ supportsVision: 'yes' }), /true or false/);
  assert.equal(normalizeUserCapabilities({ contextLength: undefined }), undefined);
  assert.throws(() => allCatalog(state({ userCapabilities: { contextLength: -1 } })), /Invalid saved model capabilities/);
  assert.throws(() => allCatalog(state({}, { importSource: { kind: 'other' } })), /Invalid saved provider/);
});

test('pi host reads only, withholds keys until the previewed digest is confirmed, and the CLI queues without keys', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-pi-import-'));
  try {
    const pi = join(directory, 'home/.pi/agent'), userData = join(directory, 'profile');
    await mkdir(pi, { recursive: true }); await mkdir(userData);
    const modelsText = JSON.stringify(models), authText = JSON.stringify(auth);
    await writeFile(join(pi, 'models.json'), modelsText); await writeFile(join(pi, 'auth.json'), authText);
    assert.equal(piAgentDirectory({}, join(directory, 'home')), pi);
    assert.equal(piAgentDirectory({ PI_CODING_AGENT_DIR: pi }, '/elsewhere'), pi);
    const handler = createPiImportHandler({ userData: () => userData, env: {}, home: join(directory, 'home') });
    const read = await handler({ action: 'read' });
    assert.equal(read.ok, true);
    for (const key of [...Object.values(keys), 'LITERAL-IN-MODELS']) assert.ok(!JSON.stringify(read).includes(key));
    assert.equal((await handler({ action: 'keys', digest: 'stale', providers: ['chat'] })).ok, false);
    assert.deepEqual((await handler({ action: 'keys', digest: read.digest, providers: ['chat', 'oauth', 'odd'] })).keys, { chat: keys.chat });
    assert.equal((await handler({ action: 'unknown' })).ok, false);

    const cli = args => run(process.execPath, ['desktop/import-cli.mjs', '--pi', '--pi-dir', pi, '--target-user-data', userData, ...args], { cwd: root });
    const preview = await cli([]);
    for (const key of Object.values(keys)) assert.ok(!preview.stdout.includes(key) && !preview.stderr.includes(key));
    const parsed = JSON.parse(preview.stdout);
    assert.deepEqual(parsed.summary.new, ['chat', 'resp', 'oauth']);
    assert.equal(parsed.applied, false);
    assert.equal(await readStagedRequest(userData), undefined, 'Preview writes nothing');
    await assert.rejects(cli(['--apply', '--replace', 'chat']), /--replace applies only to existing providers/);
    const queued = JSON.parse((await cli(['--apply', '--providers', 'chat,resp'])).stdout).queued;
    assert.deepEqual(queued.providers, ['chat', 'resp']);
    const staged = await readFile(queued.path, 'utf8');
    for (const key of Object.values(keys)) assert.ok(!staged.includes(key), 'The queued request contains no keys');
    assert.equal((await handler({ action: 'read' })).staged.current, true);
    assert.equal(await readFile(join(pi, 'models.json'), 'utf8'), modelsText, 'pi files are never modified');
    assert.equal(await readFile(join(pi, 'auth.json'), 'utf8'), authText);
    assert.deepEqual(await handler({ action: 'clear-staged' }), { ok: true });
    assert.equal(await readStagedRequest(userData), undefined);
  } finally { await rm(directory, { recursive: true, force: true }); }
});
