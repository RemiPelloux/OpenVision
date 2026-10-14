import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdtemp, mkdir, writeFile, readFile, readdir, unlink } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { platformLayout, linuxSandboxArguments } from './platform.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { verifyMemoryFilesystem } from './verify-memory-filesystem.mjs';

const root = resolve(import.meta.dirname, '..'), layout = platformLayout(root);
const directory = await mkdtemp(join(root, 'logs/memory-verification-'));
const profile = join(directory, 'profile'), project = join(directory, 'project'), other = join(directory, 'other');
const filesystem = process.argv.includes('--filesystem');
const secondary = join(directory, 'secondary'), workspace = join(directory, 'fixture.code-workspace');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project); await mkdir(other);
if (filesystem) {
  await mkdir(secondary);
  await writeFile(workspace, JSON.stringify({ folders: [{ path: project }, { path: secondary }] }));
}
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings, 'git.openRepositoryInParentFolders': 'never' }));
const proposal = { title: 'Project verification convention', description: 'When asked about the project verification convention',
  content: 'The verification convention is MEMORY_BODY_ONLY_AFTER_READ. 日本語' };
const memoryDirectory = join(project, '.openvision/rules');
const requests = [], errors = [];
let phase = 'suggest', sequence = 0;
const result = { platform: process.platform, checkedAt: new Date().toISOString(), directory, checks: {},
  scope: 'Real native desktop with controlled HTTP responses; no live AI inference in this verifier.',
  hashes: Object.fromEntries(await Promise.all(['workspace-memory.js', 'workspace-memory-card.js'].map(async file =>
    [file, await fileHash(join(root, 'source/app/out/vs/code/electron-sandbox/workbench', `openvision-${file}`))]))),
  hostExits: [] };
const server = createServer(async (request, response) => {
  if (request.url === '/v1/models') { response.setHeader('content-type', 'application/json'); response.end(JSON.stringify({ data: [{ id: 'memory-fixture' }] })); return; }
  if (request.url !== '/v1/chat/completions') { response.writeHead(404); response.end(); return; }
  let body = ''; for await (const chunk of request) body += chunk;
  const payload = JSON.parse(body); requests.push({ phase, messages: payload.messages });
  response.writeHead(200, { 'Content-Type': 'text/event-stream' });
  const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({ id: `memory-${++sequence}`,
    object: 'chat.completion.chunk', model: payload.model, choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  if (phase === 'suggest' || phase === 'dismiss') {
    event({ role: 'assistant', content: 'A suggestion for your review:\n\n```openvision-memory\n' + JSON.stringify(proposal) + '\n```' });
  } else event({ role: 'assistant', content: `Memory context inspected: ${phase}.` });
  event({}, 'stop'); response.end('data: [DONE]\n\n');
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
let app, page;
const memoryFiles = async () => (await readdir(memoryDirectory).catch(error => { if (error.code === 'ENOENT') return []; throw error; })).filter(name => name.startsWith('memory-'));

async function launch(folder = filesystem ? workspace : project) {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), folder] });
  page = await app.firstWindow(); page.setDefaultTimeout(20000);
  page.on('pageerror', error => errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ timeout: 60000 });
  await page.waitForTimeout(8000);
}

async function close() {
  if (!app) return;
  const child = app.process(); await app.close();
  result.hostExits.push({ pid: child.pid, code: child.exitCode }); app = undefined;
  assert.equal(child.exitCode, 0, 'Owned native host exits cleanly');
}

async function newChat(prompt) {
  await page.keyboard.press('ControlOrMeta+Shift+l');
  const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  await input.fill(prompt); await input.press('Enter');
}

async function replyFinished() {
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 });
}

async function configure() {
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await page.locator('.openvision-model-settings').getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Memory fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.keyboard.press('ControlOrMeta+w');
  await page.keyboard.press('ControlOrMeta+Shift+l');
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByText('memory-fixture', { exact: true }).last().click(); await page.keyboard.press('Escape');
}

try {
  await launch(); await configure();
  await newChat('Suggest a project memory for review. Do not save anything.');
  const card = page.locator('.openvision-memory-card').filter({ visible: true }).last();
  await card.getByRole('button', { name: 'Save project memory', exact: true }).waitFor(); await replyFinished();
  assert.deepEqual(await memoryFiles(), [], 'Rendering a suggestion must not create a file');
  assert.ok(JSON.stringify(requests[0].messages).includes('Project memories require the user'));
  result.checks.policy_sent_and_suggestion_requires_approval = true;
  await card.getByRole('button', { name: 'Dismiss', exact: true }).click();
  await card.getByText('Suggestion dismissed. Nothing was saved.', { exact: true }).waitFor();
  assert.deepEqual(await memoryFiles(), []); result.checks.dismiss_writes_nothing = true;
  await newChat('Suggest the project memory again for review.');
  await card.getByRole('button', { name: 'Save project memory', exact: true }).waitFor(); await replyFinished();
  await card.getByLabel('Memory content', { exact: true }).fill(proposal.content + '\nUser reviewed and edited.');
  const blockingFile = join(project, '.openvision');
  await writeFile(blockingFile, 'Preserve this existing project file');
  await card.getByRole('button', { name: 'Save project memory', exact: true }).click();
  await card.getByText(/Could not save memory: Memory folders must be ordinary project directories/).waitFor();
  assert.equal(await readFile(blockingFile, 'utf8'), 'Preserve this existing project file');
  assert.equal(await card.getByRole('button', { name: 'Save project memory', exact: true }).isEnabled(), true);
  await unlink(blockingFile);
  await card.getByRole('button', { name: 'Save project memory', exact: true }).click();
  await card.getByText('Saved to this project. Agent can read it when relevant.', { exact: true }).waitFor();
  const saved = await memoryFiles(); assert.equal(saved.length, 1);
  const savedText = await readFile(join(memoryDirectory, saved[0]), 'utf8');
  assert.ok(savedText.includes('User reviewed and edited.')); assert.ok(savedText.includes('alwaysApply: false'));
  result.checks.approval_saves_edited_project_rule = true;
  result.checks.native_save_failure_preserves_file_and_allows_retry = true;
  await page.screenshot({ path: join(directory, 'approved-memory.png') });
  if (filesystem) await verifyMemoryFilesystem({ page, directory, project, secondary, result, newChat, replyFinished });
  await close(); await launch();
  phase = 'own-project'; await newChat('Inspect the project verification convention.');
  await page.getByText(`Memory context inspected: ${phase}.`, { exact: true }).filter({ visible: true }).first().waitFor(); await replyFinished();
  const ownContext = JSON.stringify(requests.find(item => item.phase === phase).messages);
  assert.ok(ownContext.includes(proposal.description), 'Memory description is discoverable after restart');
  assert.ok(!ownContext.includes('MEMORY_BODY_ONLY_AFTER_READ'), 'Memory body is not eagerly added to new chat context');
  result.checks.restart_loads_description_without_body = true;
  await close(); await launch(other);
  phase = 'other-project'; await newChat('Inspect this project.');
  await page.getByText(`Memory context inspected: ${phase}.`, { exact: true }).filter({ visible: true }).first().waitFor(); await replyFinished();
  const otherContext = JSON.stringify(requests.find(item => item.phase === phase).messages);
  assert.ok(!otherContext.includes(proposal.description) && !otherContext.includes('MEMORY_BODY_ONLY_AFTER_READ'));
  result.checks.other_project_receives_no_memory = true;
  assert.deepEqual(errors, [], 'Native pages report no uncaught errors');
  result.status = 'passed';
} catch (error) {
  result.status = 'failed'; result.error = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  if (page) await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText()).catch(() => {});
} finally {
  await close().catch(error => { result.status = 'failed'; result.cleanupError = String(error); process.exitCode = 1; });
  server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  result.pageErrors = errors;
  await writeFile(join(directory, 'requests.json'), JSON.stringify(requests, null, 2));
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
}
