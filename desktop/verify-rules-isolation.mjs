import assert from 'node:assert/strict';
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

// Native Customize -> Rules discovery with controlled rule files in every
// location the recovered producers can read. HOME/XDG point at a disposable
// directory, so the real user's configuration is never read or written.
const root = resolve(import.meta.dirname, '..');
const { layout } = await loadRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/rules-isolation-'));
const home = join(directory, 'home'), outer = join(directory, 'outer');
const project = join(outer, 'project'), profile = join(directory, 'profile');
const rule = name => `---\ndescription: ${name} fixture\nalwaysApply: true\n---\nFixture rule ${name}.\n`;
const files = {
  // Expected: the opened project's OpenVision rules, including nested folders.
  [join(project, '.openvision/rules/ov-project-rule.mdc')]: rule('ov-project-rule'),
  [join(project, 'packages/app/.openvision/rules/ov-nested-rule.mdc')]: rule('ov-nested-rule'),
  [join(project, 'AGENTS.md')]: 'Project agent instructions.\n',
  // Must not appear: unmigrated legacy project files, parents and user home.
  [join(project, '.cursor/rules/legacy-project-leak.mdc')]: rule('legacy-project-leak'),
  [join(outer, '.cursor/rules/parent-cursor-leak.mdc')]: rule('parent-cursor-leak'),
  [join(outer, '.openvision/rules/parent-openvision-leak.mdc')]: rule('parent-openvision-leak'),
  [join(outer, 'AGENTS.md')]: 'Parent agent instructions leak.\n',
  // The enclosing Git root's legacy single-file rule (namespaced from .cursorrules).
  [join(outer, '.openvisionrules')]: 'Parent legacy single-file rule.\n',
  [join(home, '.cursor/rules/home-cursor-leak.mdc')]: rule('home-cursor-leak'),
  [join(home, '.openvision/rules/home-openvision-leak.mdc')]: rule('home-openvision-leak'),
};
for (const [path, text] of Object.entries(files)) {
  await mkdir(resolve(path, '..'), { recursive: true });
  await writeFile(path, text);
}
// The parent is its own repository, so the Git root lies outside the opened folder.
execFileSync('git', ['init', '-q', outer]);
await mkdir(join(profile, 'User'), { recursive: true });
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.openRepositoryInParentFolders': 'never' }));
await writeFile(join(project, 'readme.txt'), 'OpenVision rules isolation verification\n');

const expected = ['ov-project-rule', 'ov-nested-rule', 'AGENTS'];
const leaks = ['.openvisionrules', 'legacy-project-leak', 'parent-cursor-leak', 'parent-openvision-leak',
  'home-cursor-leak', 'home-openvision-leak'];
const result = { success: false, checkedAt: new Date().toISOString(), platform: process.platform,
  scope: 'Native Customize Rules discovery with disposable HOME, profile and parent fixtures; no AI provider request.' };
let app, page;
try {
  const env = { ...process.env, HOME: home, XDG_CONFIG_HOME: join(home, '.config'),
    XDG_DATA_HOME: join(home, '.local/share'), XDG_CACHE_HOME: join(home, '.cache') };
  delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []),
      project, join(project, 'readme.txt')] });
  page = await app.firstWindow(); page.setDefaultTimeout(20000);
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page);
  await page.waitForTimeout(8000);
  await page.keyboard.press('ControlOrMeta+Shift+p');
  await page.locator('.quick-input-widget input[type="text"]').fill('>Open Customize');
  await page.locator('.quick-input-widget').getByText('Open Customize', { exact: true }).first().waitFor();
  await page.keyboard.press('Enter');
  await page.getByRole('button', { name: 'Rules', exact: true }).click();
  await page.getByText('ov-project-rule', { exact: false }).first().waitFor();
  // Rules arrive through a debounced provider push; allow late producers to report.
  await page.waitForTimeout(6000);
  const text = await page.locator('body').innerText();
  await page.screenshot({ path: join(directory, 'rules.png') });
  await writeFile(join(directory, 'rules.txt'), text);
  result.listed = expected.filter(name => text.includes(name));
  result.leaked = leaks.filter(name => text.includes(name));
  assert.deepEqual(result.leaked, [], 'Rules outside the project or profile were listed');
  assert.deepEqual(result.listed, expected, 'Expected project rules were not listed');
  // Parent and project AGENTS.md share one display name; the listed entry must be the workspace file.
  const workspace = text.slice(text.indexOf('Workspaces'));
  assert.ok(/^Workspaces\n3\n/.test(workspace), 'Exactly three workspace rules expected');
  for (const name of expected) assert.ok(workspace.includes(name), `${name} must be listed as a workspace rule`);
  // The disposable profile has no user rules, so the User group must be empty.
  assert.ok(/\nUser\n0\n/.test(text.slice(0, text.indexOf('Workspaces'))), 'No user-scope rules expected');
  result.workspaceGroup = true;
  result.success = true;
} catch (error) {
  result.error = error.stack;
  if (page) {
    await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
    await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText()).catch(() => {});
  }
} finally {
  if (app) {
    const child = app.process(), exited = new Promise(resolve => child.once('exit', resolve));
    await app.close(); if (child.exitCode === null && child.signalCode === null) await exited;
    result.ownedHostExit = { exitCode: child.exitCode, signalCode: child.signalCode };
  }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ ...result, directory }, null, 2));
}
if (!result.success) process.exitCode = 1;
