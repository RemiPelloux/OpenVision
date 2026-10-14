import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
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

if (!process.argv.includes('--live')) {
  console.log('Usage: node desktop/verify-live-providers.mjs --live [--model SAVED_ID] [--mode tools|chat] [--reasoning omit|none|low|medium|high|xhigh|max] [--thinking enabled|disabled]\nOptional: --native-payload PATH with --model compares five variants of a captured disposable Agent request; --comparison structure|output-limit selects the variants. Every response has a byte/time bound. Do not combine with mode/reasoning/thinking. Uses real API quota.');
  process.exit(0);
}
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const database = new DatabaseSync(join(root, 'data/local/User/globalStorage/state.vscdb'), { readOnly: true });
let providers;
try {
  const row = database.prepare('SELECT value FROM ItemTable WHERE key = ?').get('openvision.model-providers.v1');
  assert.ok(row, 'No saved OpenVision providers');
  const state = JSON.parse(String(row.value));
  providers = state.providers.map(provider => ({ id: provider.id, name: provider.name, url: provider.url,
    models: provider.models.filter(model => model.enabled).map(model => model.id),
    encrypted: database.prepare('SELECT value FROM ItemTable WHERE key = ?')
      .get(`secret://openvision.provider.${provider.id}`)?.value }));
} finally { database.close(); }
const modelIndex = process.argv.indexOf('--model');
const selectedModel = modelIndex < 0 ? undefined : process.argv[modelIndex + 1];
if (modelIndex >= 0) {
  assert.ok(selectedModel && !selectedModel.startsWith('--'), '--model requires a saved model ID');
  providers = providers.filter(provider => provider.models.includes(selectedModel)).map(provider => ({ ...provider, probeModel: selectedModel }));
  assert.ok(providers.length, 'Requested model is not enabled in saved providers');
}
const effortIndex = process.argv.indexOf('--reasoning');
if (effortIndex >= 0) {
  const effort = process.argv[effortIndex + 1];
  assert.ok(['omit', 'none', 'low', 'medium', 'high', 'xhigh', 'max'].includes(effort), 'Unsupported probe reasoning option');
  providers = providers.map(provider => ({ ...provider, probeReasoning: effort }));
}
const thinkingIndex = process.argv.indexOf('--thinking');
if (thinkingIndex >= 0) {
  const thinking = process.argv[thinkingIndex + 1];
  assert.ok(['enabled', 'disabled'].includes(thinking), 'Thinking must be enabled or disabled');
  providers = providers.map(provider => ({ ...provider, probeThinking: thinking }));
}
const modeIndex = process.argv.indexOf('--mode');
if (modeIndex >= 0) {
  const mode = process.argv[modeIndex + 1];
  assert.ok(['chat', 'tools'].includes(mode), 'Mode must be chat or tools');
  providers = providers.map(provider => ({ ...provider, probeMode: mode }));
}
const { layout } = await loadRuntime(root);
const payloadIndex = process.argv.indexOf('--native-payload');
const comparisonIndex = process.argv.indexOf('--comparison');
assert.ok(comparisonIndex < 0 || payloadIndex >= 0, '--comparison requires --native-payload');
let nativePayload;
if (payloadIndex >= 0) {
  assert.ok(selectedModel && providers.length === 1, 'Payload comparison requires exactly one saved provider via --model');
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
if (process.platform === 'win32') {
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
  ...(nativePayload ? { payloadProbeSha256: await fileHash(join(root, 'desktop/live-payload-probe.mjs')),
    capturedPayloadSha256: await fileHash(resolve(process.argv[payloadIndex + 1])) } : {}),
  providers: [], success: false };
let app;
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : [])] });
  await app.firstWindow();
  for (const provider of providers) {
    const credential = await app.evaluate(({ safeStorage }, saved) => {
      try {
        return { key: saved ? safeStorage.decryptString(Buffer.from(JSON.parse(String(saved)).data)) : '' };
      } catch { return { error: 'Saved credential could not be decrypted.' }; }
    }, provider.encrypted);
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
    ? provider.diagnostic?.ok : provider.discovery?.ok && provider.chat?.ok);
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
  if (copiedEncryptionKey && result.cleanupError) result.retainedEncryptionState = 'Owned disposable profile retained because host cleanup is unconfirmed.';
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2) + '\n');
  console.log(`Evidence: ${directory}`);
}
if (!result.success) process.exitCode = 1;
