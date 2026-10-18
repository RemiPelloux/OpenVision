import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, rm, unlink, writeFile } from 'node:fs/promises';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';
import { saveFile, pressTab } from './verify-completion-editing.mjs';
import { enterWorkspace } from './verification-workspace.mjs';
import { readSavedProviders, savedStatePath, decryptSavedCredential, writeFixtureSavedProviders, startFixtureProvider } from './saved-providers.mjs';
import { checkSyntax } from './completion-syntax.mjs';

// Native live-provider editor acceptance (OV-602), run as
// `npm run verify:completion -- --live --model SAVED_ID`. The saved provider's
// credential is decrypted by the owned host (as verify:providers:live does) and
// entered through Models settings in a disposable profile, which is deleted after
// the run. `--fixture-saved-provider` replaces the saved provider with a labelled
// loopback fixture so the same path can be proven without quota.
export const liveEditorCases = Object.freeze([
  { id: 'javascript-cart', language: 'javascript', file: 'src/cart.js', trigger: ' ', fixtureReply: 'total;',
    document: "import { formatPrice } from './format.js';\n\nexport function cartTotal(items) {\n  let total = 0;\n  for (const item of items) {\n    total += item.price * item.quantity;\n  }\n  return<|cursor|>\n}\n" },
  { id: 'python-average', language: 'python', file: 'app/stats.py', trigger: ' ', fixtureReply: 'mean(scores)',
    document: 'from statistics import mean\n\n\ndef average_score(scores: list[float]) -> float:\n    if not scores:\n        return 0.0\n    return<|cursor|>\n' },
  { id: 'go-join', language: 'go', file: 'names/join.go', trigger: ' ', fixtureReply: 'strings.Join(names, ", ")',
    document: 'package names\n\nimport "strings"\n\n// Join returns the names separated by commas.\nfunc Join(names []string) string {\n\treturn<|cursor|>\n}\n' },
]);
const suggestionTimeoutMs = 25000, recordedCharacters = 500;

function caseText(entry) {
  const [before, after] = entry.document.split('<|cursor|>');
  assert.ok(after !== undefined && !after.includes('<|cursor|>') && /^(\r?\n|$)/.test(after), `${entry.id} cursor must end a line`);
  return { before, after, line: before.split('\n').length };
}

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const fixture = process.argv.includes('--fixture-saved-provider');
const modelIndex = process.argv.indexOf('--model');
const model = modelIndex < 0 ? fixture ? 'fixture-coder' : undefined : process.argv[modelIndex + 1];
assert.ok(model && !model.startsWith('--'), '--live requires --model SAVED_ID (uses real API quota), or --fixture-saved-provider');
const { portable, runtimeRoot, appRoot, layout } = await verificationRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/completion-live-verification-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true });
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'editor.quickSuggestions': false, 'git.openRepositoryInParentFolders': 'never',
  'editor.autoIndent': 'none', 'editor.autoClosingBrackets': 'never', 'editor.formatOnType': false,
  'files.trimTrailingWhitespace': false, 'files.insertFinalNewline': false }));
const files = [];
for (const entry of liveEditorCases) {
  const path = join(project, entry.file), { before, after } = caseText(entry);
  await mkdir(dirname(path), { recursive: true }); await writeFile(path, before + after);
  files.push(path);
}
let saved = fixture ? undefined : readSavedProviders(savedStatePath(root)).filter(provider => provider.models.includes(model));
if (saved) {
  assert.equal(saved.length, 1, 'The model must be enabled in exactly one saved provider');
  assert.deepEqual(saved[0].customHeaderNames, [], 'Saved providers with custom headers are not supported: Models settings entry does not copy them');
}
// Windows safeStorage binds encrypted values to the profile's DPAPI-wrapped key; copy only that key.
let copiedEncryptionKey = false;
if (process.platform === 'win32' && !fixture) {
  const state = JSON.parse(await readFile(join(root, 'data/local/Local State'), 'utf8'));
  assert.equal(typeof state.os_crypt?.encrypted_key, 'string', 'Saved profile encryption key missing');
  await writeFile(join(profile, 'Local State'), JSON.stringify({ os_crypt: { encrypted_key: state.os_crypt.encrypted_key } }));
  copiedEncryptionKey = true;
}
const result = { directory, success: false, checkedAt: new Date().toISOString(), platform: process.platform, arch: process.arch,
  commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(), model,
  ...(portable ? { portable } : {}),
  mode: fixture ? 'fixture-dry-run' : 'live',
  ...(fixture ? { fixtureLabel: 'FIXTURE DRY RUN: loopback provider mimicking the saved-provider route with authored replies; no live model, quota or quality claim.' } : {}),
  scope: 'Native editor: saved provider configured through Models settings in a disposable profile; typed trigger, visible suggestion, Tab accept, save and exact undo. Request count/elapsed time from verification-only instrumentation of the main-process fetch.',
  cases: [], errors: [] };
let app, fixtureProvider, fixtureState, key;
try {
  if (fixture) {
    key = 'fixture-saved-key';
    fixtureProvider = await startFixtureProvider({ models: [model], key, respond: (payload, context) =>
      ({ content: liveEditorCases.find(entry => entry.language === context.language)?.fixtureReply ?? '' }) });
  }
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'),
      '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes',
      '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project, ...files] });
  const page = await app.firstWindow();
  page.setDefaultTimeout(15000);
  page.on('pageerror', error => result.errors.push(error.message));
  if (fixture) {
    fixtureState = await writeFixtureSavedProviders(app, join(directory, 'fixture-saved-state.vscdb'),
      { id: 'fixture-saved', name: 'Fixture saved provider', url: fixtureProvider.url, models: [model], key });
    saved = readSavedProviders(fixtureState).filter(provider => provider.models.includes(model));
    assert.equal(saved.length, 1);
  }
  const [provider] = saved;
  const credential = await decryptSavedCredential(app, provider.encrypted);
  assert.ok(credential.key, credential.error ?? 'Saved provider has no credential');
  // Count completion requests where the product sends them, without changing them.
  result.instrumented = await app.evaluate(({ net }) => {
    const requests = globalThis.__openvisionLiveCompletionRequests = [], original = net.fetch;
    net.fetch = function (input, init) {
      const url = String(input?.url ?? input);
      if (!url.endsWith('/chat/completions')) return original.call(this, input, init);
      const entry = { startedAt: performance.now() };
      requests.push(entry);
      return original.call(this, input, init).then(response => {
        entry.status = response.status; entry.headersMs = Math.round(performance.now() - entry.startedAt); return response;
      }, error => { entry.failed = error?.name ?? 'Error'; throw error; });
    };
    return net.fetch !== original;
  });
  assert.equal(result.instrumented, true);
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 }); await enterWorkspace(page);
  await page.waitForTimeout(8000);
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  const settings = page.locator('.openvision-model-settings');
  await settings.waitFor();
  await settings.getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill(provider.name);
  await page.getByLabel('API Base URL', { exact: true }).fill(provider.url);
  await page.getByLabel('API Key', { exact: true }).fill(credential.key);
  key = credential.key; credential.key = undefined;
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await settings.getByRole('searchbox', { name: 'Search autocomplete models' }).fill(model);
  await settings.getByRole('combobox', { name: 'Tab autocomplete model' })
    .selectOption({ label: `${provider.name} · ${model}` }, { timeout: 30000 });
  const ghost = page.locator('.cursor-ghost-text').filter({ visible: true, hasText: /\S/ }).first();
  for (const [index, entry] of liveEditorCases.entries()) {
    const file = files[index], { before, after, line } = caseText(entry), typed = before + entry.trigger + after;
    const observed = { id: entry.id, language: entry.language, file: entry.file };
    result.cases.push(observed);
    await page.keyboard.press('Escape');
    await page.locator('.tabs-container .tab').filter({ hasText: basename(file) }).first().click();
    await page.locator('.monaco-editor .inputarea').first().focus();
    await page.keyboard.press('ControlOrMeta+Home');
    for (let row = 1; row < line; row++) await page.keyboard.press('ArrowDown');
    await page.keyboard.press('End');
    await app.evaluate(() => { globalThis.__openvisionLiveCompletionRequests.length = 0; });
    const started = performance.now();
    await page.keyboard.insertText(entry.trigger);
    await ghost.waitFor({ timeout: suggestionTimeoutMs });
    observed.triggerToSuggestionMs = Math.round(performance.now() - started);
    observed.suggestionVisible = true;
    await page.screenshot({ path: join(directory, `suggestion-${entry.id}.png`) });
    await pressTab(page); await saveFile(page, file);
    const accepted = (await readFile(file, 'utf8')).replaceAll('\r\n', '\n');
    const requests = await app.evaluate(() => globalThis.__openvisionLiveCompletionRequests.splice(0)
      .map(({ status, headersMs, failed }) => ({ status, headersMs, ...(failed ? { failed } : {}) })));
    Object.assign(observed, { requests: requests.length, requestHeadersMs: requests.map(request => request.headersMs),
      statuses: requests.map(request => request.status) });
    const prefix = before + entry.trigger;
    observed.accepted = accepted.length > typed.length && accepted.startsWith(prefix) && accepted.endsWith(after);
    const inserted = observed.accepted ? accepted.slice(prefix.length, accepted.length - after.length) : '';
    observed.insertedCharacters = inserted.length;
    observed.inserted = (key ? inserted.replaceAll(key, '[redacted]') : inserted).slice(0, recordedCharacters);
    const syntax = await checkSyntax(accepted, entry.language);
    Object.assign(observed, { acceptedSyntaxValid: syntax.valid, parser: syntax.parser });
    assert.ok(observed.accepted && inserted.trim(), `${entry.id}: Tab must insert the suggestion at the cursor only`);
    if (fixture) assert.equal(inserted, entry.fixtureReply, `${entry.id}: fixture reply inserted exactly`);
    await page.keyboard.press('ControlOrMeta+z');
    await saveFile(page, file);
    observed.exactUndo = (await readFile(file, 'utf8')).replaceAll('\r\n', '\n') === typed;
    assert.ok(observed.exactUndo, `${entry.id}: undo restores the typed text exactly`);
    assert.ok(observed.requests >= 1 && observed.statuses.every(status => status === 200), `${entry.id}: completion request observed`);
  }
  assert.deepEqual(result.errors, []);
  if (fixtureProvider) {
    result.fixtureServer = { requests: fixtureProvider.requests.length,
      allAuthorized: fixtureProvider.requests.every(request => request.authorized),
      models: [...new Set(fixtureProvider.requests.map(request => request.model))] };
    assert.equal(result.fixtureServer.requests, result.cases.reduce((total, item) => total + item.requests, 0),
      'Instrumented request count matches the loopback route');
    assert.equal(result.fixtureServer.allAuthorized, true);
  }
  result.hashes = { verifier: await fileHash(fileURLToPath(import.meta.url)),
    completionHttp: await fileHash(join(runtimeRoot, 'desktop/completion-http.mjs')),
    completionIpc: await fileHash(join(appRoot, 'out/openvision-completion-ipc.js')),
    workbench: await fileHash(join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')),
    provider: await fileHash(join(appRoot, 'out/vs/code/electron-sandbox/workbench/openvision-completion-provider.js')) };
  result.success = true;
} catch (error) {
  const page = app?.windows()[0];
  if (page) await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  result.success = false;
  result.failure = key ? String(error.stack).replaceAll(key, '[redacted]') : error.stack;
} finally {
  key = undefined;
  if (app) {
    const child = app.process(), exited = new Promise(done => child.once('exit', done));
    try {
      await app.close();
      if (child.exitCode === null && child.signalCode === null) await exited;
      result.hostExit = { exitCode: child.exitCode, signalCode: child.signalCode };
      if (child.exitCode !== 0) result.success = false;
    } catch { result.success = false; result.cleanupError = 'Owned app cleanup failed.'; }
  }
  await fixtureProvider?.close();
  if (fixtureState) await unlink(fixtureState).catch(() => {});
  // The disposable profile holds a re-encrypted credential; remove it once the host has exited.
  if (!result.cleanupError) {
    if (copiedEncryptionKey) await unlink(join(profile, 'Local State')).catch(() => {});
    await rm(profile, { recursive: true, force: true });
    result.profileRemoved = true;
  } else result.retainedProfile = 'Disposable profile retained because host cleanup is unconfirmed; delete it manually.';
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify(result, null, 2));
}
if (!result.success) process.exitCode = 1;
