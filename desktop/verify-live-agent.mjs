import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { randomUUID } from 'node:crypto';
import { mkdir, mkdtemp, readFile, writeFile, unlink } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { createLiveAgentRelay } from './live-agent-relay.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { verifyLiveHistory, verifyPersistedLiveHistory } from './verify-live-history.mjs';
import { prepareLivePaste, inspectPasteRequest, verifySavedLivePaste } from './verify-live-paste.mjs';
import { createLiveUserRule, inspectRulesRequest } from './verify-live-rules.mjs';
import { approveLiveMemory, inspectLiveMemoryContext } from './verify-live-memory.mjs';
import { verifyLiveStop } from './verify-live-stop.mjs';

if (!process.argv.includes('--live')) {
  console.log('Usage: node desktop/verify-live-agent.mjs --live --model SAVED_ID [--reasoning default|high] [--subagent] [--history] [--stop] [--paste|--rules|--memory] [--capture-payload]\nRuns a native Agent Read (optionally via a Task child) through your saved provider, using real quota and a synthetic disposable project. History checks recall after restart and Fork Chat. Stop checks real streaming cancellation and same-chat resubmission. Paste checks native large clipboard text saved to a file and read on demand. Rules checks persisted user and project rules in the first request after restart. Memory checks real suggestions, approval, restart and on-demand recall. Capture saves the first request locally with the transport key redacted.');
  process.exit(0);
}
const modelIndex = process.argv.indexOf('--model'), model = process.argv[modelIndex + 1];
assert.ok(modelIndex >= 0 && model && !model.startsWith('--'), 'Select an enabled saved model with --model');
const reasoningIndex = process.argv.indexOf('--reasoning');
const reasoning = reasoningIndex < 0 ? 'default' : process.argv[reasoningIndex + 1];
const subagent = process.argv.includes('--subagent');
const history = process.argv.includes('--history');
const paste = process.argv.includes('--paste');
const rules = process.argv.includes('--rules');
const memory = process.argv.includes('--memory');
const stop = process.argv.includes('--stop');
assert.ok(!stop || (!memory && !rules && !paste && !history && !subagent), '--stop is a separate live stream cancellation/resubmission probe');
assert.ok(!memory || (!rules && !paste && !history && !subagent), '--memory is a separate suggested-memory approval probe');
assert.ok(!paste || (!history && !subagent), '--paste is a separate clipboard-to-Read probe');
assert.ok(!rules || (!paste && !history && !subagent), '--rules is a separate persisted-rules probe');
assert.ok(['default', 'high'].includes(reasoning), 'Reasoning must be default or high');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const db = new DatabaseSync(join(root, 'data/local/User/globalStorage/state.vscdb'), { readOnly: true });
let provider, encrypted;
try {
  const state = JSON.parse(String(db.prepare('SELECT value FROM ItemTable WHERE key = ?').get('openvision.model-providers.v1').value));
  const matches = state.providers.filter(provider => provider.models.some(entry => entry.id === model && entry.enabled));
  assert.equal(matches.length, 1, 'Choose a model with exactly one enabled saved provider');
  provider = matches[0]; encrypted = db.prepare('SELECT value FROM ItemTable WHERE key = ?').get(`secret://openvision.provider.${provider.id}`)?.value;
  assert.ok(encrypted, 'Selected provider has no saved credential');
} finally { db.close(); }
const directory = await mkdtemp(join(root, 'logs/live-agent-verification-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings, 'git.openRepositoryInParentFolders': 'never' }));
const marker = `OPENVISION_READ_${randomUUID().replaceAll('-', '')}`;
const ruleFilename = `rule-probe-${randomUUID()}.txt`;
const userRule = `The verification file for this project is ${ruleFilename}. When asked to read the verification file, use Read on this file and answer with its exact first line. Do not use other tools.`;
const projectRule = `OPENVISION_PROJECT_RULE_${randomUUID()}`;
const file = join(project, rules || memory ? ruleFilename : 'probe.txt');
if (!paste) await writeFile(file, marker + '\n');
if (rules) {
  await mkdir(join(project, '.openvision/rules'), { recursive: true });
  await writeFile(join(project, '.openvision/rules/live-check.mdc'),
    `---\ndescription: Native live rule verification\nalwaysApply: true\n---\nProject label: ${projectRule}. Do not include this label in replies unless explicitly asked.\n`);
}
if (process.platform === 'win32') {
  const state = JSON.parse(await readFile(join(root, 'data/local/Local State'), 'utf8'));
  assert.equal(typeof state.os_crypt?.encrypted_key, 'string');
  await writeFile(join(profile, 'Local State'), JSON.stringify({ os_crypt: { encrypted_key: state.os_crypt.encrypted_key } }));
}
const { layout } = await loadRuntime(root);
const result = { checkedAt: new Date().toISOString(), model, reasoning, subagent, historyRequested: history, stopRequested: stop, provider: { name: provider.name, url: provider.url },
  commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(), platform: process.platform, arch: process.arch,
  scope: `Windows native Agent selection, live stream and real ${subagent ? 'Task child Read and parent' : 'Read'} continuation in a disposable project. Loopback catalog mirrors saved capability hints; inference bodies are forwarded unchanged to the real provider.`,
  hashes: Object.fromEntries(await Promise.all([
    ['host', layout.executable], ['agent', join(root, 'source/app/extensions/cursor-agent-exec/dist/main.js')],
    ['workbench', join(root, 'source/app/out/vs/workbench/workbench.desktop.main.js')],
    ['verifier', fileURLToPath(import.meta.url)], ['relay', join(root, 'desktop/live-agent-relay.mjs')],
    ...(stop ? [['stopVerifier', join(root, 'desktop/verify-live-stop.mjs')]] : []),
    ...(history ? [['historyVerifier', join(root, 'desktop/verify-live-history.mjs')]] : []),
    ...(rules ? [['rulesHelper', join(root, 'source/app/out/vs/code/electron-sandbox/workbench/openvision-local-rules.js')],
      ['rulesVerifier', join(root, 'desktop/verify-live-rules.mjs')]] : []),
    ...(memory ? [['memoryHelper', join(root, 'source/app/out/vs/code/electron-sandbox/workbench/openvision-workspace-memory.js')], ['memoryCard', join(root, 'source/app/out/vs/code/electron-sandbox/workbench/openvision-workspace-memory-card.js')],
      ['memoryVerifier', join(root, 'desktop/verify-live-memory.mjs')]] : []),
  ].map(async ([name, path]) => [name, await fileHash(path)]))), success: false };
if (paste) result.paste = {};
if (rules) result.rules = {};
if (memory) result.memory = {};
let inspectMemoryRetrieval = false;
const captureRequest = async body => {
  if (paste) {
    inspectPasteRequest(body, result.paste);
    assert.ok(!body.includes(marker), 'The provider must learn the unique marker only from the file Read');
  }
  if (rules) inspectRulesRequest(body, { userRule, projectRule, marker }, result.rules);
  if (process.argv.includes('--capture-payload')) await writeFile(join(directory, 'native-request.json'), body);
};
const relay = await createLiveAgentRelay({ provider, model, marker, captureRequest, allowDownstreamCancellation: stop, inspectRequest: body => {
  if (inspectMemoryRetrieval) {
    inspectLiveMemoryContext(body, { filename: ruleFilename, marker }, result.memory);
    inspectMemoryRetrieval = false;
  }
} });
let app, page;
async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window', '--disable-updates',
      '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project] });
  (result.nativeMainProcesses ??= []).push(await app.evaluate(() => ({ pid: process.pid, ppid: process.ppid, executable: process.execPath })));
  page = await app.firstWindow(); page.setDefaultTimeout(15000);
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ timeout: 60000 });
  await page.waitForTimeout(8000);
  return page;
}
async function closeOwnedApp() {
  if (!app) return;
  const child = app.process(), exited = new Promise(resolve => child.once('exit', resolve));
  const closing = app.close();
  await page?.getByText('Quit Anyway', { exact: true }).click({ timeout: 3000 }).catch(() => {});
  await closing; if (child.exitCode === null && child.signalCode === null) await exited;
  result.launcherExit = { exitCode: child.exitCode, signalCode: child.signalCode };
  (result.launcherExits ??= []).push(result.launcherExit);
  app = undefined;
}
async function dismissMenu() {
  if (!page || page.isClosed()) return;
  await page.mouse.move(0, 0);
  const backdrop = page.locator('[data-component="menu-backdrop"]').filter({ visible: true });
  for (let attempt = 0; attempt < 4 && await backdrop.count(); attempt++) await page.keyboard.press('Escape');
  await backdrop.waitFor({ state: 'hidden' });
}
try {
  await launch();
  const key = await app.evaluate(({ safeStorage }, saved) => safeStorage.decryptString(Buffer.from(JSON.parse(String(saved)).data)), encrypted);
  relay.setKey(key);
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await page.locator('.openvision-model-settings').getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Native live probe');
  await page.getByLabel('API Base URL', { exact: true }).fill(relay.url);
  await page.getByLabel('API Key', { exact: true }).fill('native-probe-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.keyboard.press('ControlOrMeta+w');
  await page.keyboard.press('ControlOrMeta+Shift+l');
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  const menu = page.getByTestId('model-picker-menu').filter({ visible: true });
  const row = menu.locator('[data-model-picker-item-name]').filter({ hasText: model });
  assert.equal(await row.count(), 1, 'Select the unique saved probe model');
  await row.click(); await page.keyboard.press('Escape');
  if (reasoning !== 'default') {
    await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
    const item = menu.getByRole('menuitem').filter({ has: page.locator('[data-model-picker-item-name]').filter({ hasText: model }) });
    await item.focus(); await item.press('ArrowRight');
    await page.getByTestId('parameter-submenu').filter({ visible: true }).first().waitFor();
    await page.getByText('Reasoning', { exact: true }).filter({ visible: true }).last().hover();
    await page.getByText('High', { exact: true }).filter({ visible: true }).last().click();
    await page.keyboard.press('Escape');
  }
  await dismissMenu();
  if (rules) {
    await createLiveUserRule(page, userRule);
    await closeOwnedApp();
    await launch();
    result.rules.restartedBeforeFirstRequest = true;
    await page.keyboard.press('ControlOrMeta+Shift+l');
  }
  if (memory) {
    await approveLiveMemory({ page, project, filename: ruleFilename, result: result.memory });
    assert.ok(relay.requests.every(request => !request.responseToolCalls?.length), 'Suggestion must not invoke write or other tools');
    await closeOwnedApp(); await launch();
    await page.keyboard.press('ControlOrMeta+Shift+l');
    inspectMemoryRetrieval = true; result.memory.restartedBeforeRecall = true;
  }
  const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  let pasted;
  if (paste) pasted = await prepareLivePaste({ app, input, project, marker });
  else {
    await input.fill(memory
    ? 'Use the saved project memory to find the verification file, read it, and reply with exactly its first line. Do not edit files.'
    : rules
    ? 'Read the verification file specified in my saved rule. Reply with exactly its first line.'
    : subagent
    ? 'Use exactly one Task subagent with the inherited model. Ask it to use Read on probe.txt and return exactly the single line in that file. After the Task finishes, reply with exactly the returned line. Do not read the file yourself, edit files, run commands or use other tools.'
    : 'Use the Read tool to read probe.txt. Reply with exactly its single line. Do not edit files, run commands or use any other tools.');
    await input.press('Enter');
  }
  await Promise.race([
    page.getByText(marker, { exact: true }).filter({ visible: true }).first().waitFor({ timeout: subagent ? 180000 : 90000 }),
    relay.failure.then(message => { throw new Error(message); }),
  ]);
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 });
  assert.ok(relay.requests.some(request => request.actualFileInToolResult), 'Actual file must appear in the tool continuation');
  assert.ok(relay.requests.some(request => request.assistantReturnedMarker), 'Provider must return the actual file marker as assistant text');
  if (subagent) {
    const calls = relay.requests.flatMap(request => request.responseToolCalls ?? []);
    const task = calls.find(call => call.name === 'Task'), read = calls.find(call => call.name === 'Read');
    assert.ok(task?.id && read?.id, 'The real provider must request Task and Read');
    assert.ok(relay.requests.some(request => request.toolResults?.some(result => result.callId === read.id && result.containsFileMarker)), 'Read must return the actual file marker');
    assert.ok(relay.requests.some(request => request.assistantReturnedMarker &&
      request.toolResults?.some(result => result.callId === task.id && result.containsFileMarker)), 'The parent must receive the Task result and return its marker');
    result.subagentContinuationVerified = true;
  }
  if (history) await verifyLiveHistory({ page, relay, marker, result, restart: async () => {
    await closeOwnedApp(); return launch();
  } });
  assert.ok(relay.requests.every(request => reasoning === 'default' ? request.reasoning === undefined :
    (request.reasoning?.effort ?? request.reasoning) === reasoning), 'Wire effort must match the explicit native selection');
  if (paste) await verifySavedLivePaste(pasted, result.paste);
  else assert.equal(await readFile(file, 'utf8'), marker + '\n');
  if (stop) await verifyLiveStop({ page, relay, marker, result });
  result.success = true; result.readContinuationVerified = true;
  await page.screenshot({ path: join(directory, 'native-agent.png') });
} catch (error) {
  result.error = error.message;
  if (page) {
    await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
    await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText()).catch(() => {});
  }
} finally {
  const cleanupErrors = [];
  try { await relay.close(); } catch { cleanupErrors.push('Relay cleanup failed'); }
  try {
    if (app) {
      try {
        await dismissMenu();
        if (page && !page.isClosed()) {
          const stop = page.locator('.stop-button').filter({ visible: true });
          if (await stop.count()) await stop.first().click();
          await stop.waitFor({ state: 'hidden', timeout: 15000 });
        }
      } catch { cleanupErrors.push('Native Stop or menu cleanup failed'); }
      await closeOwnedApp();
    }
  } catch { cleanupErrors.push('Owned host cleanup failed'); }
  if (!cleanupErrors.length && result.history?.restartAndForkRecallVerified) {
    try { verifyPersistedLiveHistory(profile, result); }
    catch (error) { result.success = false; result.historyError = error.message; }
  }
  if (!cleanupErrors.length && process.platform === 'win32') await unlink(join(profile, 'Local State')).catch(error => {
    if (error.code !== 'ENOENT') cleanupErrors.push('Encrypted profile state cleanup failed');
  });
  if (cleanupErrors.length) { result.success = false; result.cleanupErrors = cleanupErrors; }
  result.requests = relay.requests;
  result.catalogEfforts = relay.catalogEfforts;
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify({ ...result, directory }, null, 2));
}
if (!result.success) process.exitCode = 1;
