import assert from 'node:assert/strict';
import { randomBytes, randomUUID } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { copyFile, mkdir, mkdtemp, readFile, readdir, rm, stat, truncate, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { verificationRuntime } from './verification-runtime.mjs';
import { fileHash } from './import-files.mjs';
import { openChat } from './verification-workspace.mjs';
import { canaryKey } from './secret-scan.mjs';
import { addProvider, closeOwned, launchOwned, modelFixture, notifications, readDatabase, runIdentity, snapshot,
  survivors, updateDatabase, waitFor, writeProfile } from './release-safety-harness.mjs';

// OV-1004 corrupt-state startup matrix (Linux x64). A baseline profile is built
// through the real UI (provider with a canary key, Agent edit with a pending
// review) plus seeded rules, settings, argv.json and MCP configuration. Each
// cell copies that profile, corrupts or truncates exactly one store, starts the
// app and requires: the workbench starts; the original bytes stay in place or in
// a backup the app made; recovery guidance is shown; every unrelated store is
// unchanged. `--observe` records without asserting.
assert.equal(process.platform, 'linux', 'The corrupt-state matrix runs on Linux');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout, appRoot } = await verificationRuntime(root);
const observe = process.argv.includes('--observe');
const only = process.argv.find(argument => argument.startsWith('--cases='))?.slice('--cases='.length).split(',');
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/corrupt-state-'));
const project = join(directory, 'project'), baseline = join(directory, 'profile-baseline');
const runId = randomUUID(), key = canaryKey(), errors = [], exits = [];
await mkdir(join(project, '.openvision'), { recursive: true });
const notes = join(project, 'notes.md');
const projectFiles = {
  'notes.md': 'answer = 41\n',
  'README.md': '# Corrupt-state fixture\n',
  '.openvision/mcp.json': JSON.stringify({ mcpServers: { 'project-fixture': { command: 'node', args: ['--version'] } } }, null, 2) + '\n',
};
const resetProject = async () => { for (const [name, text] of Object.entries(projectFiles)) await writeFile(join(project, name), text); };
await resetProject();

const fixture = await modelFixture({ model: 'fixture-corrupt', key, respond: ({ toolResults, finish, tool }) => {
  if (toolResults.some(message => message.tool_call_id === 'ov_corrupt_edit')) return finish('OpenVision corrupt-state edit finished.');
  tool('ov_corrupt_edit', 'StrReplace', { path: notes, old_string: 'answer = 41', new_string: 'answer = 42' });
} });

const identity = await runIdentity(root, { host: layout.executable, main: join(appRoot, 'out/main.js'),
  workbench: join(appRoot, 'out/vs/workbench/workbench.desktop.main.js'),
  recoveryNotice: join(appRoot, 'out/vs/code/electron-sandbox/workbench/openvision-profile-recovery.js'),
  verifier: fileURLToPath(import.meta.url) });
const result = { checkedAt: new Date().toISOString(), runId, directory: relative(root, directory), identity, observe, cells: [], exits, errors,
  requests: fixture.requests, success: false,
  scope: 'Linux x64 native startup with one corrupted or truncated store per cell in a disposable profile; controlled loopback model fixture with a canary key. Not power loss, kernel crash or device EIO; not Windows/macOS.' };

const ruleKeys = ['openvision.user-rule.v1.release-rule-a', 'openvision.user-rule.v1.release-rule-b'];
const rule = id => JSON.stringify({ id, title: `Release rule ${id}`, knowledge: `Keep ${id} intact.`, isGenerated: false, createdAt: '2026-10-18T00:00:00.000Z' });
const providerKey = 'openvision.model-providers.v1';
const paths = profile => ({
  global: join(profile, 'User/globalStorage/state.vscdb'),
  settings: join(profile, 'User/settings.json'),
  argv: join(profile, 'User/.openvision-local/argv.json'),
  mcpUser: join(profile, 'User/mcp.json'),
});
async function workspaceDatabase(profile) {
  const base = join(profile, 'User/workspaceStorage');
  for (const entry of await readdir(base).catch(() => [])) {
    const workspace = await readFile(join(base, entry, 'workspace.json'), 'utf8').catch(() => '');
    if (workspace.includes(project)) return join(base, entry, 'state.vscdb');
  }
}

// Baseline: real UI writes, then seeded rule rows and configuration files.
async function buildBaseline() {
  await writeProfile(baseline, { 'openvision.verification.marker': 'unrelated-setting-kept' });
  await writeFile(paths(baseline).mcpUser, JSON.stringify({ mcpServers: { 'user-fixture': { command: 'node', args: ['--version'] } } }, null, 2) + '\n');
  let session = await launchOwned({ layout, profile: baseline, args: [project, notes], runId, errors });
  await session.page.waitForTimeout(6000);
  await addProvider(session.page, { name: 'Corrupt-state fixture', url: fixture.url, key, model: 'fixture-corrupt' });
  const input = await openChat(session.page);
  await input.fill('Change answer = 41 to answer = 42 in notes.md.'); await input.press('Enter');
  await session.page.getByText('OpenVision corrupt-state edit finished.', { exact: true }).first().waitFor({ timeout: 45000 });
  await session.page.getByText('Keep', { exact: true }).filter({ visible: true }).first().waitFor({ timeout: 15000 }).catch(() => {});
  await session.page.waitForTimeout(3000);
  await snapshot(session.page, directory, 'baseline');
  await closeOwned(session.app, exits, 'baseline');
  updateDatabase(paths(baseline).global, ruleKeys.map(id => ['INSERT OR REPLACE INTO ItemTable (key, value) VALUES (?, ?)', id, rule(id.split('.').pop())]));
  const argvText = await readFile(paths(baseline).argv, 'utf8');
  return { argvCreated: argvText.length > 0, notes: await readFile(notes, 'utf8') };
}

// Every store's identity, so a cell can show which ones changed.
async function inventory(profile) {
  const p = paths(profile), workspace = await workspaceDatabase(profile);
  const global = readDatabase(p.global, { keys: [providerKey, ...ruleKeys], likes: ['secret://%openvision.provider.%'] });
  const files = {};
  for (const [name, path] of Object.entries({ settings: p.settings, argv: p.argv, mcpUser: p.mcpUser,
    mcpProject: join(project, '.openvision/mcp.json'), notes, readme: join(project, 'README.md') }))
    files[name] = await fileHash(path).catch(error => error.code);
  const reviewKeys = (global.diskKeys ?? []).filter(name => name.startsWith('inlineDiff:'));
  return { files, global: { integrity: global.integrity, error: global.error, rows: global.rows, reviewKeys, diskKeyCount: global.diskKeys?.length },
    workspace: workspace ? { path: relative(profile, workspace), ...readDatabase(workspace) } : undefined };
}

async function allFiles(base) {
  const out = [];
  const walk = async path => {
    for (const entry of await readdir(path, { withFileTypes: true }).catch(() => [])) {
      const full = join(path, entry.name);
      if (entry.isDirectory()) { if (!['CachedData', 'Cache', 'GPUCache', 'Code Cache', 'extensions'].includes(entry.name)) await walk(full); }
      else if (entry.isFile()) out.push(full);
    }
  };
  await walk(base); return out;
}
// Where are the corrupted bytes now? In place, or any other file of the profile/project.
async function locateBytes(profile, sha256, original) {
  const hits = [];
  for (const path of [...await allFiles(profile), ...await allFiles(project)])
    if ((await stat(path)).size > 0 && await fileHash(path) === sha256) hits.push(relative(directory, path));
  return { inPlace: hits.includes(relative(directory, original)), copies: hits.filter(path => path !== relative(directory, original)) };
}

const corruptJson = text => text.slice(0, Math.max(1, Math.floor(text.length / 2)));
const garbage = size => { const bytes = randomBytes(size); bytes.write('not a database', 0); return bytes; };
const sqliteRow = (file, rowKey) => async profile => {
  const path = file === 'global' ? paths(profile).global : await workspaceDatabase(profile);
  updateDatabase(path, [['UPDATE ItemTable SET value = ? WHERE key = ?', '{"version":1,"providers":[{"id":', rowKey]]);
  return { path, row: rowKey };
};
const cells = {
  'global-state-garbage': { store: 'global state.vscdb', expect: /profile storage/i, affects: ['global'],
    corrupt: async profile => { const path = paths(profile).global; await writeFile(path, garbage((await stat(path)).size));
      await rm(`${path}-wal`, { force: true }); await rm(`${path}-shm`, { force: true }); return { path }; } },
  'global-state-truncated': { store: 'global state.vscdb', expect: /profile storage/i, affects: ['global'],
    corrupt: async profile => { const path = paths(profile).global; await truncate(path, Math.floor((await stat(path)).size / 3));
      await rm(`${path}-wal`, { force: true }); return { path }; } },
  'workspace-state-truncated': { store: 'workspace state.vscdb', expect: /profile storage|workspace storage/i, affects: ['workspace'],
    corrupt: async profile => { const path = await workspaceDatabase(profile); await truncate(path, 100); await rm(`${path}-wal`, { force: true }); return { path }; } },
  'settings-truncated': { store: 'User/settings.json', expect: /settings\.json/i, affects: ['settings'],
    corrupt: async profile => { const path = paths(profile).settings; await writeFile(path, corruptJson(await readFile(path, 'utf8'))); return { path }; } },
  'argv-garbage': { store: 'argv.json', expect: /argv\.json/i, affects: ['argv'],
    corrupt: async profile => { const path = paths(profile).argv; await writeFile(path, '{ "enable-crash-reporter": fals\u0000ÿ'); return { path }; } },
  'provider-store-corrupt': { store: 'provider store (ItemTable openvision.model-providers.v1)', expect: /provider/i, affects: ['providerRow'],
    view: 'Models', inPlace: /[^\n]*(provider configuration could not be loaded|Invalid (saved )?provider)[^\n]*/i,
    corrupt: sqliteRow('global', providerKey) },
  'rule-row-corrupt': { store: 'profile rule (ItemTable openvision.user-rule.v1.*)', expect: /rule/i, affects: ['ruleA'],
    view: 'Customize/Rules', inPlace: /[^\n]*(rule[^\n]*(invalid|preserved|could not)|could not[^\n]*rule)[^\n]*/i,
    corrupt: async profile => { updateDatabase(paths(profile).global, [['UPDATE ItemTable SET value = ? WHERE key = ?', '{broken', ruleKeys[0]]]);
      return { path: paths(profile).global, row: ruleKeys[0] }; } },
  'mcp-user-corrupt': { store: 'User/mcp.json', expect: /mcp/i, affects: ['mcpUser'],
    view: 'Customize/MCPs', inPlace: /[^\n]*(JSON syntax error|Invalid config|parse|mcp\.json)[^\n]*/i,
    corrupt: async profile => { const path = paths(profile).mcpUser; await writeFile(path, '{ "mcpServers": { "user-fixture": '); return { path }; } },
  'mcp-project-corrupt': { store: '.openvision/mcp.json', expect: /mcp/i, affects: ['mcpProject'],
    view: 'Customize/MCPs', inPlace: /[^\n]*(JSON syntax error|Invalid config|parse|mcp\.json)[^\n]*/i,
    corrupt: async () => { const path = join(project, '.openvision/mcp.json'); await writeFile(path, '{ "mcpServers": [ '); return { path }; } },
  'review-snapshot-corrupt': { store: 'Agent review snapshot (cursorDiskKV inlineDiff:*)', expect: /review/i, affects: ['review'],
    corrupt: async profile => {
      const path = paths(profile).global, rows = readDatabase(path).diskKeys.filter(name => name.startsWith('inlineDiff:'));
      assert.ok(rows.length, 'Baseline must hold a review snapshot');
      updateDatabase(path, [['UPDATE cursorDiskKV SET value = ? WHERE key = ?', '{"diffId":', rows[0]]]);
      return { path, row: rows[0] }; } },
};
for (const name of only ?? []) assert.ok(cells[name], `Unknown cell ${name}`);

// `view` is a settings sidebar label, optionally with a tab ("Customize/Rules").
async function settingsPage(page, view) {
  const [label, tab] = view.split('/');
  try {
    await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
    await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: new RegExp(`^${label}$`) }).locator('..').click();
    await page.waitForTimeout(1500);
    if (tab) await page.getByText(tab, { exact: true }).filter({ visible: true }).first().click();
    await page.waitForTimeout(2500);
    const text = await page.locator('body').innerText();
    await page.keyboard.press('ControlOrMeta+w');
    return text.slice(-6000);
  } catch (error) { return `settings page ${label} unavailable: ${error.message.split('\n')[0]}`; }
}

const rowValue = (snapshotted, name) => snapshotted.global.rows?.[name];
// Compares every store except the ones the cell corrupted.
function unrelatedChanges(before, after, affects) {
  const changes = [];
  const fileStores = { settings: 'settings', argv: 'argv', mcpUser: 'mcpUser', mcpProject: 'mcpProject' };
  for (const name of ['settings', 'argv', 'mcpUser', 'mcpProject', 'readme'])
    if (!affects.includes(fileStores[name] ?? name) && before.files[name] !== after.files[name]) changes.push(`file ${name}`);
  if (!affects.includes('global')) {
    if (!affects.includes('providerRow') && rowValue(before, providerKey) !== rowValue(after, providerKey)) changes.push('provider configuration row');
    const secrets = rows => Object.keys(rows ?? {}).filter(name => name.startsWith('secret://')).sort().join();
    if (secrets(before.global.rows) !== secrets(after.global.rows)) changes.push('provider secret rows');
    for (const [index, name] of ruleKeys.entries())
      if (!(affects.includes('ruleA') && index === 0) && rowValue(before, name) !== rowValue(after, name)) changes.push(`rule ${name}`);
    if (!affects.includes('review') && before.global.reviewKeys.join() !== after.global.reviewKeys.join()) changes.push('review snapshot keys');
  }
  return changes;
}

async function runCell(name, spec, base) {
  const record = { name, store: spec.store, violations: [] };
  result.cells.push(record);
  const profile = join(directory, `profile-${name}`);
  execFileSync('cp', ['-a', '--', baseline, profile]);
  await resetProject();
  const before = await inventory(profile);
  const target = await spec.corrupt(profile);
  record.target = { path: relative(directory, target.path), row: target.row };
  const corruptedSha = await fileHash(target.path);
  const corruptedRow = target.row ? readDatabase(target.path, { keys: [target.row] }).rows?.[target.row] ?? '(cursorDiskKV)' : undefined;
  record.corruptedSha256 = corruptedSha;
  let session;
  try {
    session = await launchOwned({ layout, profile, args: [project, notes], runId, errors: record.pageErrors = [] });
    record.started = true;
    await session.page.waitForTimeout(8000);
    record.notifications = await notifications(session.page);
    // OpenVision's startup recovery panel, recorded separately from native notifications.
    record.recoveryPanel = await session.page.locator('.openvision-profile-recovery').allInnerTexts().catch(() => []);
    // Where the app explains a damaged store in place: the relevant settings page.
    if (spec.view) record.viewText = await settingsPage(session.page, spec.view);
    const openedChat = await openChat(session.page).then(() => true, () => false);
    record.chatOpened = openedChat;
    record.body = (await snapshot(session.page, directory, `${name}-after-start`)).slice(-2000);
    // Notification centre (toasts can time out).
    await session.page.keyboard.press('Escape');
    await closeOwned(session.app, exits, name);
    record.exit = exits.at(-1);
  } catch (error) {
    record.started = record.started ?? false; record.failure = error.message;
    if (session?.page) await snapshot(session.page, directory, `${name}-failure`);
    if (session?.app) await closeOwned(session.app, exits, `${name} failure`).catch(() => {});
  }
  record.survivors = (await survivors(runId, [])).map(process => process.cmdline);
  const after = await inventory(profile);
  record.bytes = await locateBytes(profile, corruptedSha, target.path);
  if (target.row) {
    const now = target.row.startsWith('inlineDiff:') ? undefined : readDatabase(target.path, { keys: [target.row] }).rows?.[target.row];
    record.rowKept = target.row.startsWith('inlineDiff:') ? after.global.reviewKeys.includes(target.row) : now === corruptedRow;
  }
  record.unrelatedChanges = unrelatedChanges(before, after, spec.affects);
  record.nativeGuidance = (record.notifications ?? []).filter(text => spec.expect.test(text));
  record.inPlaceGuidance = spec.view ? (record.viewText ?? '').match(spec.inPlace ?? /$^/)?.[0] : undefined;
  record.guidance = [...record.nativeGuidance, ...(record.recoveryPanel ?? []).filter(text => spec.expect.test(text)),
    ...record.inPlaceGuidance ? [record.inPlaceGuidance] : []];
  record.inventory = { before, after };
  // Judgement.
  const fail = message => record.violations.push(message);
  if (!record.started) fail('workbench did not start');
  if (record.exit && record.exit.exitCode !== 0) fail(`host exit ${record.exit.exitCode}/${record.exit.signalCode}`);
  if (target.row ? !record.rowKept && !record.bytes.copies.length : !record.bytes.inPlace && !record.bytes.copies.length)
    fail('original corrupted bytes were neither kept in place nor backed up');
  if (!record.guidance.length) fail('no recovery guidance was shown');
  if (record.unrelatedChanges.length) fail(`unrelated data changed: ${record.unrelatedChanges.join(', ')}`);
  if (record.survivors.length) fail(`${record.survivors.length} owned processes survived`);
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
}

try {
  result.baseline = await buildBaseline();
  for (const [name, spec] of Object.entries(cells)) if (!only || only.includes(name)) await runCell(name, spec, result.baseline);
  assert.ok(fixture.requests.every(request => request.authorized && request.model === 'fixture-corrupt'), 'Every inference used the canary-key fixture');
  result.violations = result.cells.flatMap(cell => cell.violations.map(message => `${cell.name}: ${message}`));
  if (!observe) assert.deepEqual(result.violations, [], 'Corrupt-state acceptance');
  result.success = !observe;
} catch (error) {
  result.failure = error.stack;
  process.exitCode = 1;
} finally {
  await fixture.close();
  result.finalSurvivors = await survivors(runId, [], 2000);
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory: result.directory, success: result.success, observe, failure: result.failure?.split('\n')[0],
    cells: result.cells.map(cell => ({ name: cell.name, started: cell.started, exit: cell.exit?.exitCode, bytes: cell.bytes, rowKept: cell.rowKept,
      guidance: cell.guidance.map(text => text.slice(0, 160)), nativeGuidance: cell.nativeGuidance, notifications: cell.notifications, unrelatedChanges: cell.unrelatedChanges, violations: cell.violations })) }, null, 2));
}
