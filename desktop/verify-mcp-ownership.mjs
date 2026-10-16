import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { spawn, execFileSync } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { _electron } from '../tooling/browser.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { enterWorkspace, openChat } from './verification-workspace.mjs';
import { createMcpOwnershipFixture } from './verify-mcp-ownership-fixture.mjs';
import { platformLayout } from './platform.mjs';

assert.ok(['win32', 'linux'].includes(process.platform), 'Native ownership verification covers Windows and Linux');
const root = resolve(import.meta.dirname, '..');
const directory = await mkdtemp(join(root, 'logs/mcp-ownership-verification-'));
const executable = platformLayout(root).executable;
const utility = join(root, 'electron-host/resources/app/out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js');
const originalHash = await fileHash(utility);
const projects = [join(directory, 'project-a'), join(directory, 'project-b')];
for (const project of projects) { await mkdir(project); await writeFile(join(project, 'hello.js'), 'export const answer = 42;\n'); }
const profiles = [join(directory, 'profile-a'), join(directory, 'profile-b')];
const fixtures = [await createMcpOwnershipFixture(), await createMcpOwnershipFixture()];
for (const profile of profiles) {
  await mkdir(join(profile, 'User'), { recursive: true });
  await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
    'window.restoreWindows': 'none', 'git.openRepositoryInParentFolders': 'never' }));
}
const result = { directory, checkedAt: new Date().toISOString(), originalHash,
  identity: { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
    platform: process.platform, arch: process.arch, node: process.version,
    hashes: Object.fromEntries(await Promise.all([
      ['host', executable], ['utility', utility],
      ['workbench', join(root, 'electron-host/resources/app/out/vs/workbench/workbench.desktop.main.js')],
      ['extension', join(root, 'electron-host/resources/app/extensions/cursor-mcp/dist/main.js')],
      ['verifier', join(root, 'desktop/verify-mcp-ownership.mjs')],
      ['fixture', join(root, 'desktop/verify-mcp-ownership-fixture.mjs')],
    ].map(async ([name, path]) => [name, await fileHash(path)]))) },
  scope: `${process.platform} native Agent approval and real STDIO processes across two project windows and two isolated user-data profiles. Controlled inference; no live AI compatibility or performance claim.`,
  checks: {}, pageErrors: [], hostExits: [], hostStderr: [], fixtures: fixtures.map(fixture => ({
    requests: fixture.requests, continuations: fixture.continuations, errors: fixture.errors,
    connections: fixture.transport.connections, transportRequests: fixture.transport.requests,
  })) };
const apps = new Set(), pages = [];
const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
const args = (profile, project) => ['--user-data-dir', profile, '--extensions-dir', join(profile, 'extensions'),
  '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes',
  '--disable-telemetry', '--disable-crash-reporter', project, join(project, 'hello.js')];
async function ready(page) {
  pages.push(page); page.setDefaultTimeout(20000);
  page.on('pageerror', error => result.pageErrors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page); await delay(8000); return page;
}
async function launch(profile, project) {
  const app = await _electron.launch({ executablePath: executable, env, timeout: 60000, args: args(profile, project) });
  const output = { profile, tail: '' }; result.hostStderr.push(output);
  app.process().stderr?.on('data', chunk => { output.tail = (output.tail + chunk).slice(-16384); });
  apps.add(app); return { app, page: await ready(await app.firstWindow()) };
}
async function secondWindow(app) {
  const pending = app.waitForEvent('window', { timeout: 60000 });
  const forwarding = spawn(executable, args(profiles[0], projects[1]), { env, windowsHide: true, stdio: 'ignore' });
  const exit = new Promise((resolveExit, reject) => {
    forwarding.once('error', reject); forwarding.once('exit', code => resolveExit(code));
  });
  const page = await pending; assert.equal(await exit, 0); return ready(page);
}
async function configure(page, fixture) {
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await page.locator('.openvision-model-settings').getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Ownership fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(fixture.baseURL);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.locator('.tabs-container .tab').filter({ hasText: 'hello.js' }).first().click();
}
async function selectModel(page) {
  await openChat(page);
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByText('fixture-ownership', { exact: true }).last().click(); await page.keyboard.press('Escape');
}
async function submit(page, fixture, phase) {
  fixture.setPhase(phase);
  const input = await openChat(page);
  await input.fill(`OpenVision ownership ${phase}: ${phase.includes('discover') ? 'list tools' : 'call memory_probe with my approval'} on user-openvision-verify.`);
  await input.press('Enter');
}
async function finish(page, fixture, phase) {
  await page.getByText(`OpenVision ownership ${phase} complete.`, { exact: true }).first().waitFor({ timeout: 45000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  const output = fixture.continuations.find(item => item.phase === phase);
  assert.ok(output); return JSON.stringify(output.content);
}
const calls = fixture => fixture.transport.requests.filter(item => item.method === 'tools/call').length;
async function probe(page, fixture, phase) {
  const before = calls(fixture); await submit(page, fixture, phase);
  await page.getByText('Pending approval', { exact: true }).filter({ visible: true }).waitFor({ timeout: 30000 });
  assert.equal(calls(fixture), before);
  await page.locator('[data-tool-approval-gate]').filter({ visible: true })
    .getByRole('button', { name: /^Run(?:\s|$)/ }).click();
  assert.ok((await finish(page, fixture, phase)).includes(fixture.transport.marker));
  assert.equal(calls(fixture), before + 1);
}
async function close(app) {
  const child = app.process(); await app.close(); apps.delete(app);
  result.hostExits.push({ pid: child.pid, code: child.exitCode }); assert.equal(child.exitCode, 0);
}
async function configureMcp(profile, fixture) {
  await writeFile(join(profile, 'User/mcp.json'), JSON.stringify({ mcpServers: { 'openvision-verify': fixture.transport.configuration } }));
  const deadline = Date.now() + 45000;
  while (!fixture.transport.requests.some(item => item.method === 'tools/list') && Date.now() < deadline) await delay(100);
  assert.ok(fixture.transport.requests.some(item => item.method === 'tools/list'), 'Native config watcher must discover tools before Agent use');
  await fixture.transport.verifyOneActiveChild();
}
try {
  const first = await launch(profiles[0], projects[0]);
  await configure(first.page, fixtures[0]); await selectModel(first.page);
  await configureMcp(profiles[0], fixtures[0]);
  await submit(first.page, fixtures[0], 'a-discover');
  assert.match(await finish(first.page, fixtures[0], 'a-discover'), /memory_probe/);
  await probe(first.page, fixtures[0], 'a-first'); await fixtures[0].transport.verifyOneActiveChild();
  const sibling = await secondWindow(first.app); await selectModel(sibling);
  await probe(sibling, fixtures[0], 'a-sibling'); await fixtures[0].transport.verifyOneActiveChild();
  result.checks.twoWindowsShareOneGlobalTransport = true;
  const isolated = await launch(profiles[1], projects[0]);
  await configure(isolated.page, fixtures[1]); await selectModel(isolated.page);
  await configureMcp(profiles[1], fixtures[1]);
  await submit(isolated.page, fixtures[1], 'b-discover');
  assert.match(await finish(isolated.page, fixtures[1], 'b-discover'), /memory_probe/);
  const firstCalls = calls(fixtures[0]); await probe(isolated.page, fixtures[1], 'b-isolated');
  assert.equal(calls(fixtures[0]), firstCalls);
  await fixtures[1].transport.verifyOneActiveChild();
  result.checks.sameNamedServerIsolatedByProfile = true;
  await first.page.close(); await probe(sibling, fixtures[0], 'a-surviving');
  await fixtures[0].transport.verifyOneActiveChild();
  result.checks.closingOneWindowPreservesSiblingTransport = true;
  await close(first.app); await fixtures[0].transport.verifyExited();
  await probe(isolated.page, fixtures[1], 'b-surviving'); await fixtures[1].transport.verifyOneActiveChild();
  result.checks.closingProfilePreservesOtherProfile = true;
  await close(isolated.app); await fixtures[1].transport.verifyExited();
  result.checks.allOwnedStdioChildrenExit = true;
  assert.deepEqual(result.pageErrors, []);
  for (const fixture of fixtures) {
    assert.deepEqual(fixture.errors, []); assert.deepEqual(fixture.transport.errors, []);
    assert.ok(fixture.requests.every(item => item.authorized));
    assert.ok(fixture.transport.requests.every(item => item.fixtureControlAuthenticated));
  }
  result.status = 'passed';
} catch (error) {
  result.status = 'failed'; result.error = error.stack; process.exitCode = 1;
  for (const [index, page] of pages.entries()) if (!page.isClosed()) {
    await page.screenshot({ path: join(directory, `failure-${index}.png`) }).catch(() => {});
    await writeFile(join(directory, `failure-${index}.txt`), await page.locator('body').innerText()).catch(() => {});
  }
} finally {
  result.cleanupErrors = [];
  for (const app of apps) await close(app).catch(error => result.cleanupErrors.push(String(error)));
  for (const fixture of fixtures) await fixture.dispose().catch(error => result.cleanupErrors.push(String(error)));
  result.checks.normalRuntimeUnchanged = await fileHash(utility) === originalHash;
  if (result.cleanupErrors.length || !result.checks.normalRuntimeUnchanged) { result.status = 'failed'; process.exitCode = 1; }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory, status: result.status, checks: result.checks, error: result.error, cleanupErrors: result.cleanupErrors }, null, 2));
}
