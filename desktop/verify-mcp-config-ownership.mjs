import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, symlink, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { spawn, execFileSync } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { _electron } from '../tooling/browser.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { platformLayout } from './platform.mjs';
import { enterWorkspace, openChat } from './verification-workspace.mjs';
import { createRuntimeOverlay } from './verification-runtime-overlay.mjs';
import { injectMcpCloseFailure } from './verify-mcp-cleanup-injection.mjs';
import { createMcpStdioFixture } from './verify-mcp-stdio.mjs';
import { createMcpConfigOwnershipProvider } from './verify-mcp-config-ownership-fixture.mjs';

// Native OV-303 configuration ownership: same-name project/profile servers,
// rapid configuration edits from two windows, window close, named profile,
// profile switch and app exit; `--failed-close` runs cross-window failed-close
// recovery in a disposable runtime overlay. Process-tree checks read /proc.
assert.equal(process.platform, 'linux', 'This configuration-ownership verifier inspects the Linux process tree');
const failedClose = process.argv.includes('--failed-close');
const root = resolve(import.meta.dirname, '..');
const directory = await mkdtemp(join(root, `logs/mcp-config-ownership-${failedClose ? 'failed-close-' : ''}`));
const layout = platformLayout(root);
const utilityRelative = 'resources/app/out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js';
const utility = join(layout.host, utilityRelative), originalHash = await fileHash(utility);
const reportPath = join(directory, 'injected-close.jsonl');
let executable = layout.executable, overlay;
if (failedClose) {
  const instrumented = injectMcpCloseFailure(await readFile(utility, 'utf8'), { reportPath, identifier: 'ov-cross' });
  overlay = await createRuntimeOverlay(layout.host, join(directory, 'host'), new Map([[utilityRelative, instrumented]]));
  executable = overlay.executable;
  // Local main-process modules resolve beside the host, as in verify-mcp-cleanup.
  await symlink(join(root, 'desktop'), join(directory, 'host/desktop'), 'dir');
}
const profile = join(directory, 'profile');
const projects = Object.fromEntries(['project-a', 'project-b', 'project-c'].map(name => [name, join(directory, name)]));
await mkdir(join(profile, 'User'), { recursive: true });
for (const project of Object.values(projects)) { await mkdir(join(project, '.openvision'), { recursive: true });
  await writeFile(join(project, 'hello.js'), 'export const answer = 42;\n'); }
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'window.restoreWindows': 'none', 'git.openRepositoryInParentFolders': 'never' }));
const provider = await createMcpConfigOwnershipProvider();
const transports = { global: await createMcpStdioFixture(), project: await createMcpStdioFixture(), decoy: await createMcpStdioFixture() };
const globalConfig = join(profile, 'User/mcp.json'), projectConfig = join(projects['project-a'], '.openvision/mcp.json');
const serverName = failedClose ? 'ov-cross' : 'ov-same';
const userId = `user-${serverName}`, projectId = `project-0-project-a-${serverName}`;
const result = { directory, checkedAt: new Date().toISOString(), mode: failedClose ? 'failed-close' : 'ownership',
  identity: { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
    platform: process.platform, arch: process.arch, node: process.version,
    hashes: Object.fromEntries(await Promise.all([['host', layout.executable], ['utility', utility],
      ['workbench', join(layout.host, 'resources/app/out/vs/workbench/workbench.desktop.main.js')],
      ['verifier', join(root, 'desktop/verify-mcp-config-ownership.mjs')]].map(async ([name, path]) => [name, await fileHash(path)]))) },
  scope: `Linux ${process.arch} native Agent approval and real STDIO children; controlled inference; disposable profile and projects only.`,
  overlay: overlay?.records, checks: {}, observations: {}, pageErrors: [], hostExits: [], events: [] };
const apps = new Set(), pages = [];
const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
const common = ['--user-data-dir', profile, '--extensions-dir', join(profile, 'extensions'), '--new-window',
  '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter'];
const open = transport => transport.connections.filter(connection => !connection.closedAt);
const calls = (transport, instance) => transport.requests.filter(item => item.method === 'tools/call' &&
  (!instance || item.instance === instance)).length;
const listed = transport => transport.requests.some(item => item.method === 'tools/list');
async function until(description, condition, timeout = 45000) {
  const end = Date.now() + timeout;
  while (Date.now() < end) { if (await condition()) return; await delay(100); }
  throw new Error(`Timed out waiting for ${description}`);
}
async function events() {
  const text = await readFile(reportPath, 'utf8').catch(error => { if (error.code === 'ENOENT') return ''; throw error; });
  return text.trim().split('\n').filter(Boolean).map(line => JSON.parse(line));
}
async function ready(page) {
  pages.push(page); page.setDefaultTimeout(20000);
  page.on('pageerror', error => result.pageErrors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page); return page;
}
async function launch(project) {
  const app = await _electron.launch({ executablePath: executable, env, timeout: 60000, args: [...common, project] });
  apps.add(app); return { app, page: await ready(await app.firstWindow()) };
}
async function secondWindow(app, project, extra = []) {
  const pending = app.waitForEvent('window', { timeout: 60000 });
  const forwarding = spawn(executable, [...common, ...extra, project], { env, stdio: 'ignore' });
  const exit = new Promise((resolveExit, reject) => { forwarding.once('error', reject); forwarding.once('exit', resolveExit); });
  const page = await pending; assert.equal(await exit, 0); return ready(page);
}
async function closeWindow(app, page) {
  const title = await page.title();
  const closed = page.waitForEvent('close', { timeout: 30000 });
  // The same BrowserWindow close path as the native title-bar button.
  assert.equal(await app.evaluate(({ BrowserWindow }, value) => {
    const window = BrowserWindow.getAllWindows().find(item => item.getTitle() === value);
    window?.close(); return Boolean(window);
  }, title), true);
  await closed;
}
async function configureProvider(page) {
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await page.locator('.openvision-model-settings').getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Config ownership fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(provider.baseURL);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
}
async function selectModel(page) {
  await openChat(page);
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByText('fixture-config-ownership', { exact: true }).last().click(); await page.keyboard.press('Escape');
}
async function submit(page, phase, server, kind) {
  provider.setPhase(phase, server, kind);
  const input = await openChat(page);
  await input.fill(`OpenVision config ownership ${phase}: ${kind === 'discover' ? 'list tools' : 'call memory_probe with my approval'} on ${server}.`);
  await input.press('Enter');
}
async function finish(page, phase) {
  await page.getByText(`OpenVision config ownership ${phase} complete.`, { exact: true }).first().waitFor({ timeout: 45000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  const output = provider.continuations.find(item => item.phase === phase);
  assert.ok(output, `Missing tool result for ${phase}`); return JSON.stringify(output.content);
}
async function discover(page, phase, server) {
  await submit(page, phase, server, 'discover');
  assert.match(await finish(page, phase), /memory_probe/);
}
// Approval precedes execution; only the named owner's STDIO child is called.
async function probe(page, phase, server, target, others) {
  const before = calls(target), otherCounts = others.map(item => calls(item));
  await submit(page, phase, server, 'call');
  await page.getByText('Pending approval', { exact: true }).filter({ visible: true }).waitFor({ timeout: 30000 });
  assert.equal(calls(target), before, 'Tool must not execute before approval');
  await page.locator('[data-tool-approval-gate]').filter({ visible: true }).getByRole('button', { name: /^Run(?:\s|$)/ }).click();
  assert.ok((await finish(page, phase)).includes(target.marker), `${phase} must reach ${server}`);
  assert.equal(calls(target), before + 1);
  assert.deepEqual(others.map(item => calls(item)), otherCounts, `${phase} must not reach another owner`);
}
async function mcpRows(page) {
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Customize$/ }).locator('..').click();
  await page.getByText('MCPs', { exact: true }).filter({ visible: true }).first().click();
  const rows = page.locator(`[data-mcp-manage-server="${serverName}"]`).filter({ visible: true });
  await until('MCP rows', async () => await rows.count() >= 1, 20000);
  await delay(1000);
  return rows.allInnerTexts();
}
async function approveProject(page) {
  const rows = page.locator(`[data-mcp-manage-server="${serverName}"]`).filter({ visible: true }).filter({ hasText: 'project-a' });
  await rows.getByRole('button', { name: `Configure ${serverName}` }).click();
  const toggle = page.getByRole('switch', { name: `Enable ${serverName} for project-a source` });
  assert.equal(await toggle.getAttribute('aria-checked'), 'false');
  await toggle.click();
  await until('project approval', () => listed(transports.project), 30000);
  const done = page.getByRole('button', { name: 'Done', exact: true }).filter({ visible: true });
  if (await done.count()) await done.first().click(); else await page.keyboard.press('Escape');
}
// Linux process tree: owned children are descendants of the launched host.
async function stat(pid) {
  const text = await readFile(`/proc/${pid}/stat`, 'utf8').catch(() => undefined);
  if (!text) return undefined;
  const fields = text.slice(text.lastIndexOf(')') + 2).split(' ');
  return { state: fields[0], ppid: Number(fields[1]), pgrp: Number(fields[2]) };
}
async function ancestry(pid) {
  const chain = [];
  for (let current = pid; current > 1 && chain.length < 32;) {
    const info = await stat(current); if (!info) break; chain.push(current); current = info.ppid;
  }
  return chain;
}
async function owned(app, transport, label) {
  const host = app.process().pid, records = [];
  for (const connection of open(transport)) {
    const chain = await ancestry(connection.pid);
    records.push({ label, pid: connection.pid, instance: connection.instance, hostDescendant: chain.includes(host),
      pgrp: (await stat(connection.pid))?.pgrp, hostPgrp: (await stat(host))?.pgrp, chainLength: chain.length });
  }
  (result.observations.processTree ??= []).push(...records);
  assert.ok(records.every(record => record.hostDescendant), `${label} STDIO children must be owned by the launched host`);
  return records;
}
async function closeApp(app) {
  const child = app.process(); await app.close(); apps.delete(app);
  result.hostExits.push({ pid: child.pid, code: child.exitCode }); assert.equal(child.exitCode, 0);
}
async function writeJson(path, value) { await writeFile(path, JSON.stringify(value)); }
const grace = 50000; // Utility registry stops unsubscribed servers after 30 s.

async function ownership() {
  const { global: g, project: p, decoy } = transports;
  await writeJson(globalConfig, { mcpServers: { [serverName]: g.configuration } });
  await writeJson(projectConfig, { mcpServers: { [serverName]: p.configuration } });
  const first = await launch(projects['project-a']);
  await until('global discovery', () => listed(g));
  await g.verifyOneActiveChild(); await delay(3000);
  assert.equal(p.connections.length, 0, 'An unapproved project server with the same name must not start');
  const before = await mcpRows(first.page);
  result.observations.rowsBeforeApproval = before;
  assert.equal(before.length, 2); assert.ok(before.some(row => /User/.test(row)) && before.some(row => /project-a[\s\S]*Disabled/.test(row)));
  result.checks.sameNameProjectServerNotStartedBeforeApproval = true;
  const globalInstance = open(g)[0].instance;
  await approveProject(first.page);
  await until('project discovery after approval', () => listed(p)); await p.verifyOneActiveChild();
  assert.equal(open(g).length, 1); assert.equal(open(g)[0].instance, globalInstance);
  result.observations.rowsAfterApproval = await mcpRows(first.page);
  result.checks.approvalStartsOnlyProjectOwner = true;
  await configureProvider(first.page); await selectModel(first.page);
  await discover(first.page, 'a-discover-project', projectId);
  await probe(first.page, 'a-project', projectId, p, [g]);
  await probe(first.page, 'a-user', userId, g, [p]);
  result.checks.sameNameToolsAttributedByOwnerIdentifier = true;
  await owned(first.app, g, 'global'); await owned(first.app, p, 'project');

  const second = await secondWindow(first.app, projects['project-b']); await selectModel(second);
  await delay(3000);
  assert.equal(open(g).length, 1, 'Second window shares the profile global child');
  assert.equal(open(p).length, 1, 'Project-a server is not started by a project-b window');
  // Rapid edits observed by both windows; the final configuration must own one child.
  const globalBefore = g.connections.length, projectInstance = open(p)[0].instance;
  for (let revision = 1; revision <= 12; revision++) {
    await writeJson(globalConfig, { mcpServers: { [serverName]: { ...g.configuration,
      args: [...g.configuration.args, `--revision=${revision}`] } } });
    await delay(revision % 3 === 0 ? 0 : 40);
  }
  await until('final configuration child', async () => open(g).length === 1 &&
    g.connections.length > globalBefore && g.requests.some(item => item.method === 'tools/list' && item.instance === open(g)[0].instance), 60000);
  await delay(5000); await g.verifyOneActiveChild();
  const finalInstance = open(g)[0].instance;
  for (const connection of g.connections.filter(item => item.instance !== finalInstance)) {
    const info = await stat(connection.pid);
    assert.ok(!info || info.state === 'Z', `Superseded child ${connection.pid} must exit`);
  }
  assert.equal(open(p).length, 1); assert.equal(open(p)[0].instance, projectInstance);
  result.observations.rapidEdits = { revisions: 12, childrenStarted: g.connections.length - globalBefore, finalInstance };
  await probe(second, 'b-after-rapid', userId, g, [p]);
  assert.equal(calls(g, finalInstance), 1, 'Post-edit call uses the final child only');
  result.checks.rapidEditsAcrossTwoWindowsLeaveOneOwnedChild = true;

  await closeWindow(first.app, first.page);
  await until('project child released after its only window closes', () => open(p).length === 0, grace);
  await p.verifyExited();
  assert.equal(open(g).length, 1); assert.equal(open(g)[0].instance, finalInstance);
  await probe(second, 'b-after-close', userId, g, [p]);
  result.checks.windowCloseReleasesOnlyItsOwnedChildren = true;

  const named = await secondWindow(first.app, projects['project-c'], ['--profile', 'ov-named']);
  await until('named profile child', () => open(g).length === 2, 45000);
  const namedInstance = open(g).find(item => item.instance !== finalInstance).instance;
  result.observations.namedProfile = { title: await named.title(), sharedConfigurationFile: globalConfig, namedInstance,
    profiles: JSON.parse(await readFile(join(profile, 'User/globalStorage/storage.json'), 'utf8')).userDataProfiles };
  await owned(first.app, g, 'named-profile');
  await closeWindow(first.app, named);
  await until('named profile child released', () => !open(g).some(item => item.instance === namedInstance), grace);
  assert.deepEqual(open(g).map(item => item.instance), [finalInstance]);
  await probe(second, 'b-after-named-close', userId, g, [p]);
  result.checks.namedProfileWindowOwnsAndReleasesSeparateChild = true;

  // In-place profile switch through the native command palette.
  await second.keyboard.press('F1');
  await second.keyboard.type('Profiles: Switch Profile'); await second.keyboard.press('Enter');
  await second.locator('.quick-input-widget .monaco-list-row').filter({ hasText: 'ov-named' }).first().click();
  await until('switched window title', async () => / - ov-named - /.test(await second.title()), 20000);
  await until('switched profile child', () => open(g).some(item => item.instance !== finalInstance &&
    g.requests.some(request => request.method === 'tools/list' && request.instance === item.instance)), 45000);
  await until('previous profile child released after switch', () => !open(g).some(item => item.instance === finalInstance), grace);
  assert.equal(open(g).length, 1);
  result.observations.profileSwitch = { title: await second.title(), released: finalInstance, current: open(g)[0].instance };
  result.checks.profileSwitchReleasesPreviousProfileChild = true;

  // Decoy: same command line, started by this verifier, never by the host.
  // Its stdin stays open: the fixture child exits on stdin EOF, as an MCP server should.
  const decoyChild = spawn(decoy.configuration.command, decoy.configuration.args, { stdio: ['pipe', 'ignore', 'ignore'] });
  await until('decoy connection', () => decoy.connections.length === 1, 10000);
  await owned(first.app, g, 'before-exit');
  await closeApp(first.app); await g.verifyExited();
  assert.equal(open(decoy).length, 1, 'App exit must not terminate an unowned process with the same command');
  assert.equal(decoyChild.exitCode, null);
  result.checks.appExitReleasesOwnedChildrenOnly = true;
}

async function crossWindowFailedClose() {
  const { global: g } = transports;
  await writeJson(globalConfig, { mcpServers: { [serverName]: g.configuration } });
  const first = await launch(projects['project-a']);
  await until('global discovery', () => listed(g)); await g.verifyOneActiveChild();
  await configureProvider(first.page); await selectModel(first.page);
  await discover(first.page, 'f-discover', userId);
  await probe(first.page, 'f-first-window', userId, g, []);
  const second = await secondWindow(first.app, projects['project-b']); await selectModel(second);
  const prior = open(g)[0]; assert.equal(open(g).length, 1);
  await writeJson(globalConfig, { mcpServers: {} });
  await until('injected close rejection', async () => (await events()).some(event => event.event === 'close-rejected'));
  await delay(1500);
  assert.equal(prior.closedAt, undefined, 'Failed close leaves the actual child owned for retry');
  result.checks.failedCloseRetainsChild = true;
  await closeWindow(first.app, first.page);
  await delay(3000);
  const connectionCount = g.connections.length;
  assert.equal(calls(g), 1);
  await writeJson(globalConfig, { mcpServers: { [serverName]: g.configuration } });
  await until('cleanup retry release', async () => (await events()).some(event => event.event === 'close-released'));
  await until('replacement discovery', () => prior.closedAt && open(g).length === 1 &&
    g.requests.some(item => item.method === 'tools/list' && item.instance === open(g)[0].instance), 60000);
  const released = (await events()).find(event => event.event === 'close-released');
  const replacement = open(g)[0];
  assert.ok(Date.parse(replacement.connectedAt) >= Date.parse(released.at), 'Replacement starts after release');
  assert.ok(g.connections.length > connectionCount);
  assert.equal(calls(g), 1, 'Recovery must not replay the completed first-window call');
  result.checks.siblingRecoveryAfterOwnerWindowClosed = true;
  await probe(second, 'f-second-window', userId, g, []);
  assert.equal(calls(g, prior.instance), 1); assert.equal(calls(g, replacement.instance), 1);
  result.checks.noReplayOfCompletedSideEffects = true;
  await closeApp(first.app); await g.verifyExited();
  result.checks.appExitReleasesOwnedChildren = true;
}

try {
  if (failedClose) await crossWindowFailedClose(); else await ownership();
  assert.deepEqual(provider.errors, []);
  assert.ok(provider.requests.every(item => item.authorized));
  for (const transport of Object.values(transports)) assert.deepEqual(transport.errors, []);
  result.status = 'passed';
} catch (error) {
  result.status = 'failed'; result.error = error.stack; process.exitCode = 1;
  for (const [index, page] of pages.entries()) if (!page.isClosed()) {
    await page.screenshot({ path: join(directory, `failure-${index}.png`), timeout: 5000 }).catch(() => {});
    await writeFile(join(directory, `failure-${index}.txt`), await page.locator('body').innerText({ timeout: 5000 })).catch(() => {});
  }
} finally {
  result.cleanupErrors = [];
  for (const app of apps) await closeApp(app).catch(error => result.cleanupErrors.push(String(error)));
  for (const transport of Object.values(transports)) await transport.dispose().catch(error => result.cleanupErrors.push(String(error)));
  await provider.dispose().catch(error => result.cleanupErrors.push(String(error)));
  result.events = await events();
  result.connections = Object.fromEntries(Object.entries(transports).map(([name, item]) => [name, item.connections]));
  result.checks.normalRuntimeUnchanged = await fileHash(utility) === originalHash;
  if (result.cleanupErrors.length || !result.checks.normalRuntimeUnchanged) { result.status = 'failed'; process.exitCode = 1; }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory, status: result.status, checks: result.checks, error: result.error,
    cleanupErrors: result.cleanupErrors }, null, 2));
}
