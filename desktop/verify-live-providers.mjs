import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, writeFile, unlink, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { probeProvider } from './live-provider-probe.mjs';
import { payloadComparisons, probeNativePayload } from './live-payload-probe.mjs';
import { readSavedProviders, savedStatePath, decryptSavedCredential, writeFixtureSavedProviders, startFixtureProvider } from './saved-providers.mjs';
import { qualityFixtureReply, qualityFixtureSets } from './completion-quality-fixture.mjs';

if (!process.argv.includes('--live')) {
  console.log('Usage: node desktop/verify-live-providers.mjs --live [--model SAVED_ID] [--mode tools|chat|completion|completion-quality] [--reasoning omit|none|low|medium|high|xhigh|max] [--thinking enabled|disabled]\nCompletion modes use the unchanged production autocomplete request and do not accept reasoning/thinking overrides; completion-quality sends the pinned multi-language corpus (36 requests per model). --fixture-saved-provider [--fixture-responses good|bad|truncated|markdown] dry-runs completion-quality against a labelled loopback fixture without quota. Optional: --native-payload PATH with --model compares five variants of a captured disposable Agent request; --comparison structure|output-limit selects the variants. Every response has a byte/time bound. Do not combine with mode/reasoning/thinking. Uses real API quota.');
  process.exit(0);
}
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const fixture = process.argv.includes('--fixture-saved-provider');
const fixtureSetIndex = process.argv.indexOf('--fixture-responses');
const fixtureSet = fixtureSetIndex < 0 ? 'good' : process.argv[fixtureSetIndex + 1];
assert.ok(fixture || fixtureSetIndex < 0, '--fixture-responses requires --fixture-saved-provider');
assert.ok(qualityFixtureSets.includes(fixtureSet), 'Unknown fixture response set');
let providers = fixture ? undefined : readSavedProviders(savedStatePath(root));
const modelIndex = process.argv.indexOf('--model');
const selectedModel = modelIndex < 0 ? fixture ? 'fixture-coder' : undefined : process.argv[modelIndex + 1];
if (modelIndex >= 0) assert.ok(selectedModel && !selectedModel.startsWith('--'), '--model requires a saved model ID');
const effortIndex = process.argv.indexOf('--reasoning');
const effort = effortIndex < 0 ? undefined : process.argv[effortIndex + 1];
if (effortIndex >= 0) assert.ok(['omit', 'none', 'low', 'medium', 'high', 'xhigh', 'max'].includes(effort), 'Unsupported probe reasoning option');
const thinkingIndex = process.argv.indexOf('--thinking');
const thinking = thinkingIndex < 0 ? undefined : process.argv[thinkingIndex + 1];
if (thinkingIndex >= 0) assert.ok(['enabled', 'disabled'].includes(thinking), 'Thinking must be enabled or disabled');
const modeIndex = process.argv.indexOf('--mode');
const mode = modeIndex < 0 ? undefined : process.argv[modeIndex + 1];
if (modeIndex >= 0) {
  assert.ok(['chat', 'tools', 'completion', 'completion-quality'].includes(mode), 'Mode must be chat, tools, completion or completion-quality');
  assert.ok(!mode.startsWith('completion') || (effortIndex < 0 && thinkingIndex < 0), 'Completion modes preserve production options');
}
assert.ok(!fixture || mode === 'completion-quality', 'Fixture dry runs cover --mode completion-quality only');
function selectProviders(saved) {
  let selected = saved;
  if (selectedModel) {
    selected = selected.filter(provider => provider.models.includes(selectedModel)).map(provider => ({ ...provider, probeModel: selectedModel }));
    assert.ok(selected.length, 'Requested model is not enabled in saved providers');
  }
  return selected.map(provider => ({ ...provider, ...(effort ? { probeReasoning: effort } : {}),
    ...(thinking ? { probeThinking: thinking } : {}), ...(mode ? { probeMode: mode } : {}) }));
}
if (providers) providers = selectProviders(providers);
const { layout } = await loadRuntime(root);
const payloadIndex = process.argv.indexOf('--native-payload');
const comparisonIndex = process.argv.indexOf('--comparison');
assert.ok(comparisonIndex < 0 || payloadIndex >= 0, '--comparison requires --native-payload');
let nativePayload;
if (payloadIndex >= 0) {
  assert.ok(!fixture && selectedModel && providers.length === 1, 'Payload comparison requires exactly one saved provider via --model');
  assert.ok(effortIndex < 0 && thinkingIndex < 0 && modeIndex < 0, 'Payload comparison preserves captured options');
  const path = process.argv[payloadIndex + 1];
  assert.ok(path && !path.startsWith('--'), '--native-payload requires a file');
  assert.ok((await stat(resolve(path))).size <= 4 * 1024 * 1024, 'Captured request exceeds probe limit');
  const body = await readFile(resolve(path));
  assert.ok(body.length <= 4 * 1024 * 1024, 'Captured request exceeds probe limit');
  nativePayload = JSON.parse(body);
  const comparison = comparisonIndex < 0 ? 'structure' : process.argv[comparisonIndex + 1];
  assert.ok(['structure', 'output-limit'].includes(comparison), 'Unknown payload comparison');
  payloadComparisons(nativePayload, selectedModel, comparison);
  providers = providers.map(provider => ({ ...provider, probeComparison: comparison }));
}
const directory = await mkdtemp(join(root, 'logs/live-provider-verification-'));
const profile = join(directory, 'profile');
await mkdir(join(profile, 'User'), { recursive: true });
await writeFile(join(profile, 'User/settings.json'), JSON.stringify(verificationSettings));
// Windows safeStorage binds encrypted values to the profile's DPAPI-wrapped key.
// Copy only that encrypted key into our disposable profile, then remove it after exit.
let copiedEncryptionKey = false;
if (process.platform === 'win32' && !fixture) {
  const state = JSON.parse(await readFile(join(root, 'data/local/Local State'), 'utf8'));
  assert.equal(typeof state.os_crypt?.encrypted_key, 'string', 'Saved profile encryption key missing');
  await writeFile(join(profile, 'Local State'), JSON.stringify({ os_crypt: { encrypted_key: state.os_crypt.encrypted_key } }));
  copiedEncryptionKey = true;
}
const result = { checkedAt: new Date().toISOString(),
  commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  platform: process.platform, arch: process.arch, node: process.version,
  executableSha256: await fileHash(layout.executable),
  scope: 'Direct live API probes using Node fetch and saved credentials decrypted in an owned Electron profile. Not native Agent workflow parity.',
  verifierSha256: await fileHash(fileURLToPath(import.meta.url)),
  probeSha256: await fileHash(join(root, 'desktop/live-chat-probe.mjs')),
  discoveryProbeSha256: await fileHash(join(root, 'desktop/live-provider-probe.mjs')),
  ...(mode === 'completion' ? {
    completionProbeSha256: await fileHash(join(root, 'desktop/live-completion-probe.mjs')),
    completionAdapterSha256: await fileHash(join(root, 'desktop/completion-http.mjs')) } : {}),
  ...(mode === 'completion-quality' ? {
    completionQualityProbeSha256: await fileHash(join(root, 'desktop/live-completion-quality-probe.mjs')),
    completionQualityCorpusSha256: await fileHash(join(root, 'desktop/completion-quality-corpus.mjs')),
    completionSyntaxSha256: await fileHash(join(root, 'desktop/completion-syntax.mjs')),
    completionAdapterSha256: await fileHash(join(root, 'desktop/completion-http.mjs')) } : {}),
  ...(fixture ? { fixture: { responses: fixtureSet,
    label: 'FIXTURE DRY RUN: loopback provider with authored replies; no live model, quota or quality claim.' } } : {}),
  ...(nativePayload ? { payloadProbeSha256: await fileHash(join(root, 'desktop/live-payload-probe.mjs')),
    capturedPayloadSha256: await fileHash(resolve(process.argv[payloadIndex + 1])) } : {}),
  providers: [], success: false };
let app, fixtureProvider, fixtureState;
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : [])] });
  await app.firstWindow();
  if (fixture) {
    const key = 'fixture-saved-key';
    fixtureProvider = await startFixtureProvider({ models: [selectedModel], key,
      respond: (payload, context) => qualityFixtureReply(fixtureSet, context) });
    fixtureState = await writeFixtureSavedProviders(app, join(directory, 'fixture-saved-state.vscdb'),
      { id: 'fixture-saved', name: 'Fixture saved provider', url: fixtureProvider.url, models: [selectedModel], key });
    providers = selectProviders(readSavedProviders(fixtureState));
  }
  for (const provider of providers) {
    const credential = await decryptSavedCredential(app, provider.encrypted);
    const observed = { id: provider.id, name: provider.name, baseUrl: provider.url,
      credentialAvailable: !!credential.key,
      ...(credential.error ? { error: credential.error } : nativePayload
        ? { diagnostic: await probeNativePayload({ ...provider, key: credential.key }, nativePayload,
          { fetch, progress: stage => console.log(JSON.stringify(stage)) }) }
        : await probeProvider({ ...provider, key: credential.key }, { fetch })) };
    credential.key = undefined;
    result.providers.push(observed);
    await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
    console.log(JSON.stringify(observed));
  }
  result.success = result.providers.length > 0 && result.providers.every(provider => nativePayload
    ? provider.diagnostic?.ok : provider.discovery?.ok &&
      (mode === 'completion' ? provider.completion?.ok : mode === 'completion-quality' ? provider.completionQuality?.ok : provider.chat?.ok));
  if (fixtureProvider) {
    result.fixture.serverRequests = fixtureProvider.requests.length;
    result.fixture.allAuthorized = fixtureProvider.requests.every(request => request.authorized);
    // The probe's own request count must match what the loopback route received.
    if (!result.fixture.allAuthorized || result.fixture.serverRequests !==
        result.providers.reduce((total, provider) => total + (provider.completionQuality?.requests ?? 0), 0)) result.success = false;
  }
} catch {
  result.success = false; result.error = 'Probe execution failed before completing all checks.';
} finally {
  try {
    if (app) {
      const child = app.process(), exited = new Promise(resolve => child.once('exit', resolve));
      await app.close();
      if (child.exitCode === null && child.signalCode === null) await exited;
      result.ownedHostExit = { exitCode: child.exitCode, signalCode: child.signalCode };
    }
  } catch { result.success = false; result.cleanupError = 'Owned probe app cleanup failed.'; }
  if (copiedEncryptionKey && !result.cleanupError) {
    await unlink(join(profile, 'Local State')).catch(error => {
      if (error.code !== 'ENOENT') { result.success = false; result.encryptionCleanupError = 'Disposable encrypted key cleanup failed.'; }
    });
  }
  await fixtureProvider?.close();
  if (fixtureState) await unlink(fixtureState).catch(() => {});
  if (copiedEncryptionKey && result.cleanupError) result.retainedEncryptionState = 'Owned disposable profile retained because host cleanup is unconfirmed.';
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2) + '\n');
  console.log(`Evidence: ${directory}`);
}
if (!result.success) process.exitCode = 1;
