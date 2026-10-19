import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, readdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { categories, cursorProfiles, declaredDestinations, defaults, excludedData, planImport, summarize } from './cursor-import.mjs';
import { applyImport } from './import-transaction.mjs';
import { selectedImportDestinations } from './import-destinations.mjs';
import { parseConfiguration, localSettings } from './import-json.mjs';
import { createCursorLinuxProfile, fixtureExtensions, fixtureMarker, fixtureSettings, namedProfile, reinstallForLinux, treeDigest } from './cursor-profile-fixture.mjs';

const root = resolve(import.meta.dirname, '..');
// Destination shapes a plan may produce; everything else is excluded data.
const declared = [/^user\/(settings|keybindings|tasks)\.json$/, /^user\/snippets\/[^/]+\.(json|code-snippets)$/,
  /^extensions\/extensions\.json$/, /^extensions\/openvision-fixture\.[a-z-]+-[\d.]+(-linux-x64)?\//];
const excludedNames = /globalStorage|workspaceStorage|state\.vscdb|storage\.json|profiles\/|History\/|Cookies|Local Storage|\.obsolete|argv\.json|mcp\.json/;

async function realistic(t) {
  const base = await mkdtemp(join(tmpdir(), 'openvision-import-exclusions-'));
  t.after(() => rm(base, { recursive: true, force: true }));
  const profile = await createCursorLinuxProfile(base);
  const destinations = selectedImportDestinations(join(base, 'openvision/profile'), join(base, 'openvision/extensions'));
  await mkdir(destinations.user, { recursive: true }); await mkdir(destinations.extensions, { recursive: true });
  const options = { ...defaults(root, { platform: 'linux', home: profile.home, env: { XDG_CONFIG_HOME: profile.config } }), destinations };
  return { base, profile, destinations, options };
}
const destinationFiles = async directory => (await readdir(directory, { recursive: true, withFileTypes: true }))
  .filter(entry => entry.isFile()).map(entry => join(entry.parentPath, entry.name));

test('default Linux discovery finds the realistic Cursor layout; a wrong-platform extension fails the plan closed', async t => {
  const { profile, options } = await realistic(t);
  assert.equal(options.user, join(profile.config, 'Cursor/User'));
  assert.equal(options.extensions, join(profile.home, '.cursor/extensions'));
  await assert.rejects(planImport(options), new RegExp(`${fixtureExtensions.wrongPlatform.id} targets win32-x64`));
  const profiles = await cursorProfiles(options.user);
  assert.deepEqual(profiles.map(entry => entry.name), ['Default', `${namedProfile.name} (${namedProfile.location})`]);
});

test('plans target only declared category files and never excluded data, for default and named source profiles', async t => {
  const { profile, destinations, options } = await realistic(t);
  await reinstallForLinux(profile);
  const before = await treeDigest(profile.roots);
  for (const user of (await cursorProfiles(options.user)).map(entry => entry.path)) {
    const plan = await planImport({ ...options, user, categories });
    const summary = summarize(plan);
    assert.ok(summary.paths.length > 0);
    for (const path of summary.paths) {
      assert.ok(declared.some(pattern => pattern.test(path)), `declared destination: ${path}`);
      assert.doesNotMatch(path, excludedNames);
    }
    for (const change of plan.changes) {
      if (change.source) assert.doesNotMatch(change.source.slice((change.category === 'extensions' ? options.extensions : user).length), excludedNames);
      if (change.data) assert.ok(!change.data.includes(fixtureMarker), `no private marker in ${change.path}`);
    }
    assert.deepEqual(summary.excluded, [...excludedData]);
  }
  const imported = await applyImport(await planImport({ ...options, user: profile.named, categories }));
  const settings = parseConfiguration(await readFile(join(destinations.user, 'settings.json'), 'utf8'));
  assert.equal(settings['editor.fontSize'], fixtureSettings.named['editor.fontSize']);
  for (const key of Object.keys(fixtureSettings.protected)) assert.deepEqual(settings[key], localSettings[key], `protected ${key}`);
  assert.equal(settings['telemetry.telemetryLevel'], 'off');
  const written = [...await destinationFiles(destinations.user), ...await destinationFiles(destinations.extensions)];
  for (const path of written) {
    assert.doesNotMatch(path.slice(destinations.userRoot.length), /globalStorage|workspaceStorage|state\.vscdb|storage\.json|profiles/);
    if (!path.startsWith(imported.backup)) assert.ok(!(await readFile(path)).includes(fixtureMarker), `no private marker in ${path}`);
  }
  assert.deepEqual(await treeDigest(profile.roots), before, 'source tree unchanged');
});

test('the destination allow-list rejects every excluded store', () => {
  for (const path of ['globalStorage/storage.json', 'globalStorage/state.vscdb', 'globalStorage/state.vscdb.backup',
    'profiles/-3f8a2c1e/settings.json', 'profiles/-3f8a2c1e/extensions.json', 'workspaceStorage/0f1e/state.vscdb',
    'History/-7a6b/entries.json', 'sync/settings.json', 'settings.json.bak', 'snippets/../globalStorage/storage.json'])
    assert.equal(declaredDestinations.user(path), false, path);
  for (const path of ['settings.json', 'keybindings.json', 'tasks.json', 'snippets/javascript.json', 'snippets/global.code-snippets'])
    assert.equal(declaredDestinations.user(path), true, path);
  assert.equal(declaredDestinations.extensions('.obsolete'), false);
  assert.equal(declaredDestinations.extensions('other-1.0.0/package.json', 'fixture-1.0.0'), false);
  assert.equal(declaredDestinations.extensions('fixture-1.0.0/package.json', 'fixture-1.0.0'), true);
  assert.equal(declaredDestinations.extensions('extensions.json'), true);
});
