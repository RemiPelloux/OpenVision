import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, readdir } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DatabaseSync } from 'node:sqlite';
import { _electron } from '../tooling/browser.mjs';
import { platformLayout, linuxSandboxArguments } from './platform.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { verifyLegacyMemoryStale } from './verify-legacy-memory-stale.mjs';
import { verifyLegacyMemoryWindows } from './verify-legacy-memory-windows.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

const root = resolve(import.meta.dirname, '..'), layout = platformLayout(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/legacy-memory-verification-'));
const profile = join(directory, 'profile'), project = join(directory, 'project'), other = join(directory, 'other');
await mkdir(join(profile, 'User'), { recursive: true });
await mkdir(project); await mkdir(other);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'window.restoreWindows': 'none', 'git.openRepositoryInParentFolders': 'never' }));
const fixtures = [
  { id: 'native-legacy-primary', title: 'Legacy verification convention',
    knowledge: 'LEGACY_BODY_REQUIRES_REVIEW. Preserve 日本語 and original records.',
    isGenerated: true, createdAt: '2025-01-02T03:04:05.000Z' },
  { id: 'native-legacy-secondary', title: 'Another legacy project fact',
    knowledge: 'This separate fact is deliberately not imported.',
    isGenerated: true, createdAt: '2025-01-01T03:04:05.000Z' },
  ...Array.from({ length: 21 }, (_, index) => ({ id: `native-legacy-paging-${String(index).padStart(2, '0')}`,
    title: `Historical project fact ${String(index).padStart(2, '0')}`,
    knowledge: `Synthetic paging fixture ${index}; leave this original untouched.`,
    isGenerated: true, createdAt: '2024-01-01T03:04:05.000Z' })),
];
const approved = { title: 'Reviewed verification convention', description: 'When checking project verification rules',
  content: `${fixtures[0].knowledge}\nExplicitly reviewed and edited in the native UI.` };
const memoryDirectory = join(project, '.openvision/rules');
const errors = [], requests = [];
const result = { platform: process.platform, checkedAt: new Date().toISOString(), directory, checks: {}, hostExits: [],
  scope: 'Real native Customize → Rules UI; synthetic legacy SQLite records seeded with the owned app closed. No AI inference.',
  limitations: ['Renderer request observation does not cover every native process.',
    'Workspace-switch stale approval is covered separately by unit tests; this run verifies isolation across process restarts.'],
  hashes: { workbench: await fileHash(join(root, 'source/app/out/vs/workbench/workbench.desktop.main.js')) } };
let app, page, databasePath, originalRows;

async function launch(folder = project) {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), folder] });
  page = await app.firstWindow(); page.setDefaultTimeout(20000);
  page.on('pageerror', error => errors.push(error.message));
  page.on('request', request => {
    if (/\/KnowledgeBase(?:Add|List|Update|Remove)(?:\?|$)/i.test(request.url())) requests.push(new URL(request.url()).pathname);
  });
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 }); await enterWorkspace(page);
  await page.waitForTimeout(8000);
}

async function close() {
  if (!app) return;
  const owned = app, child = owned.process();
  await owned.close(); app = undefined;
  result.hostExits.push({ pid: child.pid, code: child.exitCode });
  assert.equal(child.exitCode, 0, 'Owned native host exits cleanly');
}

async function openRules(target = page) {
  const rules = target.getByRole('button', { name: 'Rules', exact: true });
  if (!await rules.isVisible()) {
    await target.keyboard.press('ControlOrMeta+Shift+P');
    await target.locator('.quick-input-widget input[type="text"]').fill('>Open Customize');
    await target.locator('.quick-input-widget').getByText('Open Customize', { exact: true }).first().waitFor();
    await target.keyboard.press('Enter');
  }
  await rules.click();
  await target.locator('.openvision-legacy-memories').waitFor();
}

const section = () => page.locator('.openvision-legacy-memories');
const card = () => section().locator('.openvision-memory-card');

async function memoryFiles() {
  return (await readdir(memoryDirectory).catch(error => { if (error.code === 'ENOENT') return []; throw error; }))
    .filter(name => name.startsWith('memory-')).sort();
}

async function workspaceDatabase() {
  const storage = join(profile, 'User/workspaceStorage'), matches = [];
  const normalize = path => process.platform === 'win32' ? resolve(path).toLowerCase() : resolve(path);
  for (const entry of await readdir(storage, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const metadata = JSON.parse(await readFile(join(storage, entry.name, 'workspace.json'), 'utf8'));
    if (metadata.folder && normalize(fileURLToPath(metadata.folder)) === normalize(project))
      matches.push(join(storage, entry.name, 'state.vscdb'));
  }
  assert.equal(matches.length, 1, 'One workspace database belongs to the disposable project');
  return matches[0];
}

function seedLegacy() {
  assert.equal(app, undefined, 'Seed fixture only while the owned app is closed');
  const db = new DatabaseSync(databasePath);
  try {
    const insert = db.prepare('INSERT INTO ItemTable (key,value) VALUES (?,?)');
    db.exec('BEGIN IMMEDIATE');
    for (const item of fixtures) insert.run(`openvision.user-rule.v1.${item.id}`, JSON.stringify(item));
    db.exec('COMMIT');
  } finally { db.close(); }
}

function savedLegacyRows() {
  const db = new DatabaseSync(databasePath, { readOnly: true });
  try {
    return db.prepare("SELECT key, hex(value) AS bytes FROM ItemTable WHERE key LIKE 'openvision.user-rule.v1.%' ORDER BY key").all();
  } finally { db.close(); }
}

function originalsUnchanged() {
  assert.deepEqual(savedLegacyRows(), originalRows, 'Original workspace records remain byte-for-byte unchanged');
}

async function selectMemory(index) {
  await section().getByRole('button', { name: fixtures[index].title, exact: true }).click();
  await card().getByLabel('Memory title', { exact: true }).waitFor();
  assert.equal(await card().count(), 1, 'Review renders only one memory card at a time');
}

async function saveEdited() {
  await card().getByLabel('Memory title', { exact: true }).fill(approved.title);
  await card().getByLabel('When to use', { exact: true }).fill(approved.description);
  await card().getByLabel('Memory content', { exact: true }).fill(approved.content);
  await card().getByRole('button', { name: 'Import project memory', exact: true }).click();
  await card().getByText('Imported to project rules. The original record is preserved.', { exact: true }).waitFor();
}

async function inspectAndApprove() {
  await openRules();
  await section().getByRole('button', { name: `Review legacy memories (${fixtures.length})`, exact: true }).click();
  const rows = section().locator('.openvision-legacy-memory-list').getByRole('button');
  assert.equal(await rows.count(), 20, 'Only one page of legacy records is rendered');
  await section().getByRole('button', { name: 'Next memories', exact: true }).click();
  assert.equal(await rows.count(), fixtures.length - 20);
  await section().getByRole('button', { name: 'Previous memories', exact: true }).click();
  assert.equal(await rows.count(), 20);
  result.checks.paging_bounds_rendered_legacy_rows = true;
  const search = section().getByRole('searchbox', { name: 'Search legacy memories', exact: true });
  await search.fill(fixtures[0].title);
  await section().getByRole('button', { name: fixtures[0].title, exact: true }).waitFor();
  assert.equal(await section().getByRole('button', { name: fixtures[1].title, exact: true }).count(), 0);
  await search.fill('');
  await selectMemory(0);
  assert.equal(await card().getByLabel('Memory content', { exact: true }).inputValue(), fixtures[0].knowledge);
  assert.deepEqual(await memoryFiles(), []); originalsUnchanged();
  result.checks.search_and_review_do_not_write = true;
  await card().getByRole('button', { name: 'Dismiss', exact: true }).click();
  await card().getByText('Suggestion dismissed. Nothing was saved.', { exact: true }).waitFor();
  assert.deepEqual(await memoryFiles(), []); originalsUnchanged();
  result.checks.dismiss_preserves_original_and_creates_no_rule = true;
  await selectMemory(1); await selectMemory(0); await saveEdited();
  const names = await memoryFiles(); assert.equal(names.length, 1);
  const text = await readFile(join(memoryDirectory, names[0]), 'utf8');
  assert.ok(text.includes(approved.title) && text.includes(approved.description) && text.includes(approved.content));
  assert.ok(text.includes('alwaysApply: false')); originalsUnchanged();
  result.checks.edited_approval_saves_on_demand_project_rule = true;
  await page.screenshot({ path: join(directory, 'legacy-memory-approved.png') });
  await selectMemory(1); await selectMemory(0); await saveEdited();
  assert.deepEqual(await memoryFiles(), names);
  assert.equal(await readFile(join(memoryDirectory, names[0]), 'utf8'), text); originalsUnchanged();
  result.checks.identical_repeated_approval_is_idempotent = true;
  return { names, text };
}

try {
  await launch(); await close();
  databasePath = await workspaceDatabase(); seedLegacy(); originalRows = savedLegacyRows();
  assert.equal(originalRows.length, fixtures.length);
  result.workspaceDatabase = databasePath;
  await launch();
  assert.deepEqual(await memoryFiles(), []);
  const saved = await inspectAndApprove();
  if (process.argv.includes('--stale')) {
    result.limitations.push('Stale-source mutation uses the real mounted knowledge service in the review window; no second-window broadcast is claimed.');
    await verifyLegacyMemoryStale({ page, fixtures, result, memoryFiles, memoryDirectory });
    originalsUnchanged();
  }
  if (process.argv.includes('--windows')) {
    await verifyLegacyMemoryWindows({ app, page, fixtures, result, memoryFiles, memoryDirectory,
      layout, profile, directory, other, openRules, errors, requests });
    originalsUnchanged();
  }
  await close(); originalsUnchanged();
  await launch(); await openRules();
  await section().getByRole('button', { name: `Review legacy memories (${fixtures.length})`, exact: true }).click();
  await selectMemory(0);
  assert.equal(await card().getByLabel('Memory content', { exact: true }).inputValue(), fixtures[0].knowledge);
  assert.deepEqual(await memoryFiles(), saved.names);
  assert.equal(await readFile(join(memoryDirectory, saved.names[0]), 'utf8'), saved.text);
  originalsUnchanged(); result.checks.restart_preserves_originals_and_approved_rule = true;
  await close(); await launch(other); await openRules();
  await section().getByRole('button', { name: 'Review legacy memories (0)', exact: true }).click();
  await section().getByText('No legacy memories in this workspace.', { exact: true }).waitFor();
  assert.equal(await card().count(), 0);
  for (const fixture of fixtures) assert.equal(await section().getByText(fixture.title, { exact: true }).count(), 0);
  const otherRules = await readdir(join(other, '.openvision/rules')).catch(error => {
    if (error.code === 'ENOENT') return []; throw error;
  });
  assert.deepEqual(otherRules.filter(name => name.startsWith('memory-')), []);
  originalsUnchanged(); result.checks.other_workspace_has_no_legacy_records_or_imported_rules = true;
  await page.screenshot({ path: join(directory, 'other-workspace-empty.png') });
  assert.deepEqual(errors, []); assert.deepEqual(requests, []);
  result.checks.no_uncaught_page_errors_or_renderer_knowledge_base_requests = true;
  result.status = 'passed';
} catch (error) {
  result.status = 'failed'; result.error = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  if (page) await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText()).catch(() => {});
} finally {
  await close().catch(error => { result.status = 'failed'; result.cleanupError = String(error); process.exitCode = 1; });
  if (originalRows) {
    try { originalsUnchanged(); result.checks.original_database_bytes_preserved_after_final_shutdown = true; }
    catch (error) { result.status = 'failed'; result.originalPreservationError = String(error); process.exitCode = 1; }
  }
  result.pageErrors = errors; result.rendererKnowledgeBaseRequests = requests;
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
}
