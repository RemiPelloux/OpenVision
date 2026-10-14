import { _electron } from '../tooling/browser.mjs';
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { platformLayout, linuxSandboxArguments } from './platform.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const layout = platformLayout(root);
await mkdir(join(root, 'logs'), {recursive:true});
const directory = await mkdtemp(join(root, 'logs/rules-windows-verification-'));
const profile = join(directory, 'profile');
const isolatedProfile = join(directory, 'isolated-profile');
const projects = [join(directory, 'project-a'), join(directory, 'project-b')];
const env = {...process.env};
delete env.ELECTRON_RUN_AS_NODE;
const sandbox = process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : [];
const apps = new Set();
const requests = [];
const result = {checked_at:new Date().toISOString(), platform:process.platform, node:process.version,
  hashes: {
    main: await fileHash(join(root, 'source/app/out/main.js')),
    durableRules: await fileHash(join(root, 'source/app/out/openvision-rules-durable.js')),
    rendererRules: await fileHash(join(root, 'source/app/out/vs/code/electron-sandbox/workbench/openvision-local-rules.js')),
  },
  directory, profile, isolatedProfile, projects, checks:{}, host_exits:[], limitations:[
    'No AI inference or generated workspace rules were exercised. The native Customize UI filters generated rules out.',
    'Renderer request observations do not cover every native process.',
    'Malformed-record testing seeds synthetic corrupt data; separate SQLite abort triggers exercise real statement failures, not physical full-disk or filesystem I/O failures.',
    'Same-rule conflicting edits are not a merge test; this verifies preservation of unrelated rules.'
  ]};

for (const folder of [profile, isolatedProfile]) {
  await mkdir(join(folder, 'User'), {recursive:true});
  await writeFile(join(folder, 'User/settings.json'), JSON.stringify({...verificationSettings,
    'window.restoreWindows':'none', 'git.openRepositoryInParentFolders':'never'}));
}
for (const project of projects) {
  await mkdir(project);
  await writeFile(join(project, 'readme.txt'), 'OpenVision native two-window rule verification\n');
}

function args(folder, project) {
  return [...sandbox, '--user-data-dir', folder, '--extensions-dir', join(folder, 'extensions'),
    '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes', project,
    join(project, 'readme.txt')];
}

async function ready(page) {
  page.setDefaultTimeout(20000);
  page.on('request', request => {
    if (/\/KnowledgeBase(?:Add|List|Update|Remove)(?:\?|$)/i.test(request.url()))
      requests.push(new URL(request.url()).pathname);
  });
  await page.locator('.monaco-workbench').waitFor({timeout:45000});
  // Customize commands register after workbench restoration.
  await page.waitForTimeout(8000);
  await openRules(page);
  return page;
}

async function launch(folder, project) {
  const app = await _electron.launch({executablePath:layout.executable, env, timeout:45000,
    args:args(folder, project)});
  apps.add(app);
  return {app, page:await ready(await app.firstWindow())};
}

async function secondWindow(app, project) {
  const pending = app.waitForEvent('window', {timeout:45000});
  const forwarding = spawn(layout.executable, args(profile, project), {env, windowsHide:true, stdio:'ignore'});
  const exited = new Promise((resolveExit, reject) => {
    forwarding.once('error', reject);
    forwarding.once('exit', (code, signal) => resolveExit({code, signal}));
  });
  const page = await pending;
  const exit = await exited;
  assert.equal(exit.code, 0, 'Second launch forwards its new-window request and exits');
  result.forwarding_exit = exit;
  return ready(page);
}

async function openRules(page) {
  const rules = page.getByRole('button', {name:'Rules', exact:true});
  if (!await rules.isVisible()) {
    await page.keyboard.press(`${process.platform === 'darwin' ? 'Meta' : 'Control'}+Shift+P`);
    await page.locator('.quick-input-widget input[type="text"]').fill('>Open Customize');
    await page.locator('.quick-input-widget').getByText('Open Customize', {exact:true}).first().waitFor();
    await page.keyboard.press('Enter');
  }
  await rules.click();
}

async function add(page, text) {
  await submitNew(page, text);
  await page.getByText(text, {exact:true}).waitFor();
}

async function submitNew(page, text) {
  await page.getByRole('button', {name:'New', exact:true}).click();
  await page.locator('.quick-input-widget input[type="text"]').fill(text);
  await page.keyboard.press('Enter');
}

async function edit(page, oldText, newText) {
  await submitEdit(page, oldText, newText);
  await page.getByText(newText, {exact:true}).waitFor();
}

async function submitEdit(page, oldText, newText) {
  await page.getByText(oldText, {exact:true}).click();
  await page.locator('textarea').fill(newText);
  await page.getByRole('button', {name:'Save', exact:true}).click();
}

async function remove(page, text) {
  await submitRemove(page, text);
  await page.getByText(text, {exact:true}).waitFor({state:'hidden'});
}

async function submitRemove(page, text) {
  await page.getByText(text, {exact:true}).hover();
  await page.getByRole('button', {name:`${text} options`, exact:true}).click();
  await page.getByRole('menuitem', {name:'Delete', exact:true}).click();
  await page.getByText('Delete Rule', {exact:true}).waitFor();
  await page.locator('span.truncate').filter({hasText:/^Delete$/}).click();
}

async function visible(pages, texts) {
  for (const page of pages) for (const text of texts) await page.getByText(text, {exact:true}).waitFor();
}

async function absent(pages, texts) {
  for (const page of pages) for (const text of texts)
    await page.getByText(text, {exact:true}).waitFor({state:'hidden'});
}

async function close(app) {
  const child = app.process();
  await app.close();
  result.host_exits.push({pid:child.pid, code:child.exitCode, signal:child.signalCode});
  apps.delete(app);
}

function savedRuleIndex() {
  const db = new DatabaseSync(join(profile, 'User/globalStorage/state.vscdb'), {readOnly:true});
  try {
    const rows = db.prepare("SELECT key FROM ItemTable WHERE key LIKE 'openvision.user-rule.v1.%'").all();
    const marker = db.prepare('SELECT value FROM ItemTable WHERE key = ?').get('__$__targetStorageMarker');
    const targets = marker ? JSON.parse(Buffer.from(marker.value).toString()) : {};
    return {persisted_rule_keys:rows.map(row => row.key),
      machine_indexed_rule_keys:rows.filter(row => targets[row.key] === 1).map(row => row.key)};
  } finally { db.close(); }
}

function persistedRules() {
  const db = new DatabaseSync(join(profile, 'User/globalStorage/state.vscdb'), {readOnly:true});
  try {
    return db.prepare("SELECT key,value FROM ItemTable WHERE key LIKE 'openvision.user-rule.v1.%' ORDER BY key")
      .all().map(row => ({key:row.key, raw:Buffer.from(row.value).toString()}));
  } finally { db.close(); }
}

function corruptFixture(insert) {
  const db = new DatabaseSync(join(profile, 'User/globalStorage/state.vscdb'));
  try {
    if (insert) db.prepare('INSERT INTO ItemTable (key,value) VALUES (?,?)').run(corruptKey, '{broken');
    else db.prepare('DELETE FROM ItemTable WHERE key = ? AND value = ?').run(corruptKey, '{broken');
  } finally { db.close(); }
}

async function verifyMalformedRecovery() {
  const before = persistedRules();
  corruptFixture(true);
  const seeded = persistedRules();
  assert.equal(seeded.length, before.length + 1);
  let {app, page} = await launch(profile, projects[0]);
  await submitNew(page, rejectedRule);
  await page.getByText('Could not create rule.', {exact:true}).waitFor();
  await page.screenshot({path:join(directory, 'malformed-rule-rejected.png')});
  await close(app);
  assert.deepEqual(persistedRules(), seeded, 'Malformed data and all saved rule bytes must survive a rejected mutation');
  result.checks.malformed_record_rejects_addition_without_changing_saved_rows = true;
  corruptFixture(false);
  assert.deepEqual(persistedRules(), before, 'Fixture repair removes only the seeded malformed row');
  ({app, page} = await launch(profile, projects[0]));
  await visible([page], [updated, third]);
  await absent([page], [rejectedRule]);
  await add(page, recoveryRule);
  await close(app);
  assert.equal(persistedRules().length, before.length + 1);
  result.checks.malformed_fixture_removal_restores_existing_rules_and_creation = true;
}

function failingWriteFixture(insert) {
  assert.equal(apps.size, 0, 'Install/remove SQLite triggers only with owned hosts closed');
  const db = new DatabaseSync(join(profile, 'User/globalStorage/state.vscdb'));
  try {
    for (const operation of ['INSERT', 'UPDATE', 'DELETE']) {
      const name = `openvision_verify_reject_rule_${operation.toLowerCase()}`;
      if (insert) {
        const row = operation === 'DELETE' ? 'OLD' : 'NEW';
        db.exec(`CREATE TRIGGER ${name} BEFORE ${operation} ON ItemTable
          WHEN ${row}.key LIKE 'openvision.user-rule.v1.%'
          BEGIN SELECT RAISE(ABORT, 'OpenVision verification: rejected rule write'); END`);
      } else {
        db.exec(`DROP TRIGGER ${name}`);
      }
    }
  } finally { db.close(); }
}

async function verifyFailedWriteRecovery() {
  const before = persistedRules();
  failingWriteFixture(true);
  let {app, page} = await launch(profile, projects[0]);
  const observer = await secondWindow(app, projects[1]);
  await submitNew(page, durableNew);
  await page.getByText('Could not create rule.', {exact:true}).waitFor();
  await absent([page, observer], [durableNew]);
  assert.deepEqual(persistedRules(), before, 'Rejected creation preserves committed rows');
  result.checks.sqlite_failed_create_visible_and_disk_unchanged = true;
  await submitEdit(page, updated, durableUpdated);
  await page.getByText('Could not update rule.', {exact:true}).waitFor();
  await visible([observer], [updated, third, recoveryRule]);
  await absent([observer], [durableUpdated]);
  assert.deepEqual(persistedRules(), before, 'Rejected edit preserves the old committed value');
  result.checks.sqlite_failed_edit_visible_and_disk_unchanged = true;
  await submitRemove(observer, third);
  await observer.getByText('Could not delete rule.', {exact:true}).waitFor();
  await visible([observer], [updated, third, recoveryRule]);
  assert.deepEqual(persistedRules(), before, 'Rejected deletion preserves the committed rule');
  result.checks.sqlite_failed_delete_visible_and_disk_unchanged = true;
  await page.screenshot({path:join(directory, 'sqlite-write-failed-editor.png')});
  await observer.screenshot({path:join(directory, 'sqlite-write-failed-observer.png')});
  await close(app);
  assert.deepEqual(persistedRules(), before, 'Shutdown must not later persist rejected mutations');
  result.checks.rejected_writes_not_deferred_until_shutdown = true;
  failingWriteFixture(false);
  assert.deepEqual(persistedRules(), before, 'Fixture removal changes no rule bytes');
  ({app, page} = await launch(profile, projects[0]));
  await visible([page], [updated, third, recoveryRule]);
  await absent([page], [durableNew, durableUpdated]);
  await add(page, durableNew);
  await edit(page, updated, durableUpdated);
  await remove(page, third);
  await close(app);
  ({app, page} = await launch(profile, projects[1]));
  await visible([page], [durableNew, durableUpdated, recoveryRule]);
  await absent([page], [updated, third]);
  await page.screenshot({path:join(directory, 'sqlite-write-recovered-after-restart.png')});
  await close(app);
  const saved = persistedRules().map(row => JSON.parse(row.raw).knowledge);
  assert(saved.includes(durableNew) && saved.includes(durableUpdated) && saved.includes(recoveryRule));
  assert(!saved.includes(updated) && !saved.includes(third));
  result.checks.sqlite_failure_removal_restores_crud_and_restart_persistence = true;
}

const first = 'OpenVision window A: keep descriptive names.';
const second = 'OpenVision window B: retain unrelated additions.';
const updated = 'OpenVision window A: edited while B adds another rule.';
const third = 'OpenVision window B: preserve this concurrent addition.';
const privateRule = 'OpenVision isolated profile: only visible here.';
const corruptKey = 'openvision.user-rule.v1.native-corrupt-fixture';
const rejectedRule = 'OpenVision malformed fixture: this addition must be rejected.';
const recoveryRule = 'OpenVision recovered fixture: rule creation works again.';
const durableNew = 'OpenVision durability fixture: creation requires a committed write.';
const durableUpdated = 'OpenVision durability fixture: edited only after storage recovery.';

try {
  let {app, page:a} = await launch(profile, projects[0]);
  const b = await secondWindow(app, projects[1]);
  assert.notEqual(a, b);
  result.window_titles = [await a.title(), await b.title()];
  result.checks.two_real_windows = true;
  // Both writers start from the same empty profile state; each creates its own key.
  await Promise.all([add(a, first), add(b, second)]);
  await visible([a, b], [first, second]);
  assert.deepEqual(persistedRules().map(row => JSON.parse(row.raw).knowledge).sort(), [first, second].sort());
  result.checks.successful_additions_committed_before_shutdown = true;
  result.checks.cross_project_user_rules = true;
  result.checks.unrelated_simultaneous_additions = true;
  console.log('Two real windows: additions propagated across projects');
  await Promise.all([edit(a, first, updated), add(b, third)]);
  await visible([a, b], [updated, second, third]);
  await absent([a, b], [first]);
  result.checks.cross_window_edit_preserves_unrelated_addition = true;
  await remove(b, second);
  await absent([a, b], [second]);
  await visible([a, b], [updated, third]);
  result.checks.cross_window_delete_preserves_other_rules = true;
  await a.screenshot({path:join(directory, 'window-a.png')});
  await b.screenshot({path:join(directory, 'window-b.png')});
  console.log('Two real windows: edit and delete propagated without losing other rules');
  const isolated = await launch(isolatedProfile, projects[0]);
  await add(isolated.page, privateRule);
  await absent([isolated.page], [first, second, updated, third]);
  await absent([a, b], [privateRule]);
  result.checks.other_profile_isolated = true;
  await close(isolated.app);
  await close(app);
  ({app, page:a} = await launch(profile, projects[1]));
  await visible([a], [updated, third]);
  await absent([a], [first, second, privateRule]);
  result.checks.persisted_after_process_restart_in_other_project = true;
  await a.screenshot({path:join(directory, 'after-restart.png')});
  await close(app);
  await verifyMalformedRecovery();
  await verifyFailedWriteRecovery();
  assert.equal(requests.length, 0);
  result.checks.no_renderer_knowledge_base_requests = true;
  result.status = 'passed';
} catch (error) {
  result.status = 'failed';
  result.error = error.stack ?? String(error);
  for (const [index, app] of [...apps].entries()) for (const [window, page] of app.windows().entries())
    await page.screenshot({path:join(directory, `failure-${index}-${window}.png`)}).catch(() => {});
  process.exitCode = 1;
} finally {
  for (const app of [...apps]) await close(app).catch(error => {
    result.cleanup_error = String(error); process.exitCode = 1;
  });
  try { result.saved_rule_index = savedRuleIndex(); }
  catch (error) { result.storage_diagnostic_error = String(error); }
  result.renderer_observed_knowledge_base_requests = requests;
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2)+'\n');
  console.log(JSON.stringify(result, null, 2));
}
