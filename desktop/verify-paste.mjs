import assert from 'node:assert/strict';
import { mkdir, mkdtemp, writeFile, readFile, readdir, rename } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

const root = resolve(import.meta.dirname, '..');
const { layout } = await loadRuntime(root);
const directory = await mkdtemp(join(root, 'logs/paste-verification-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true });
await mkdir(project);
await mkdir(join(project, '.openvision/rules'), { recursive: true });
await writeFile(join(project, '.openvision/rules/namespace-check.mdc'),
  '---\ndescription: OpenVision namespace verification\nalwaysApply: true\n---\nUse descriptive names.\n');
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.openRepositoryInParentFolders': 'never' }));
const file = join(project, 'example.txt');
await writeFile(file, 'OpenVision paste verification\n');
const original = '  début café 日本語 😀\r\n' + 'large-paste-unique-payload\t'.repeat(12000) + '\r\n  FIN\n\n';
const result = { success: false, checkedAt: new Date().toISOString(), platform: process.platform,
  scope: 'Native clipboard, composer and filesystem checks; no AI provider request is made.' };
let app, page;
async function paste(text) {
  await app.evaluate(({ clipboard }, value) => clipboard.writeText(value), text);
  await page.keyboard.press('ControlOrMeta+v');
}
async function clearInput(input) {
  await input.click(); await input.press('ControlOrMeta+a'); await input.press('Backspace');
}
async function pastedFiles(count) {
  const folder = join(project, '.openvision/paste');
  for (let attempt = 0; attempt < 100; attempt++) {
    const files = await readdir(folder).catch(error => { if (error.code !== 'ENOENT') throw error; return []; });
    const texts = files.filter(name => name.endsWith('.txt'));
    if (texts.length === count) return texts;
    await page.waitForTimeout(100);
  }
  throw new Error(`Expected ${count} saved paste file(s)`);
}
async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project, file] });
  page = await app.firstWindow(); page.setDefaultTimeout(20000);
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 }); await enterWorkspace(page);
  await page.waitForTimeout(8000);
}
try {
  await launch();
  await page.keyboard.press('ControlOrMeta+Shift+l');
  let input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  await input.waitFor(); await input.fill('Before ');
  await input.press('ControlOrMeta+End');
  const started = performance.now();
  await paste(original);
  const names = await pastedFiles(1);
  assert.equal(await readFile(join(project, '.openvision/paste', names[0]), 'utf8'), original);
  const reference = await input.innerText();
  assert.ok(reference.startsWith('Before '));
  assert.ok(reference.includes(names[0]));
  assert.ok(reference.length < 600);
  assert.ok(!reference.includes('large-paste-unique-payload'));
  result.largePaste = { characters: original.length, referenceCharacters: reference.length,
    elapsedMs: Math.round(performance.now() - started), exactUtf8: true };
  await input.press('ControlOrMeta+z');
  assert.equal((await input.innerText()).trim(), 'Before');
  await input.press('ControlOrMeta+Shift+z');
  assert.ok((await input.innerText()).includes(names[0]));
  assert.equal((await pastedFiles(1)).length, 1);
  result.undoRedo = true;
  await clearInput(input);
  await paste('small text remains inline');
  assert.equal(await input.innerText(), 'small text remains inline');
  assert.equal((await pastedFiles(1)).length, 1);
  result.smallPasteInline = true;
  await clearInput(input); await paste(original); await paste(original);
  const repeated = await pastedFiles(3);
  assert.equal(new Set(repeated).size, 3);
  for (const name of repeated) assert.equal(await readFile(join(project, '.openvision/paste', name), 'utf8'), original);
  assert.equal(await readFile(join(project, '.openvision/paste/.gitignore'), 'utf8'), '*\n');
  result.repeatedPastes = true;
  result.localIgnoreFile = true;
  await page.screenshot({ path: join(directory, 'paste.png') });
  // Windows directory watchers can hold the paste directory open. Create the
  // failure fixture between owned launches instead of racing those watchers.
  await app.close(); app = undefined;
  await rename(join(project, '.openvision/paste'), join(project, '.openvision/paste-kept'));
  await writeFile(join(project, '.openvision/paste'), 'Block directory creation for the failure check.');
  await launch();
  await page.keyboard.press('ControlOrMeta+Shift+l');
  input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  await clearInput(input); await input.pressSequentially('Keep this ');
  await paste(original);
  await page.getByText('Could not save the large paste.', { exact: false }).first().waitFor();
  assert.equal(await input.textContent(), 'Keep this ' + original, 'Failed writes must preserve the text around the paste');
  result.failedWriteRestoresOriginal = true;
  await page.keyboard.press('ControlOrMeta+Shift+p');
  await page.locator('.quick-input-widget input[type="text"]').fill('>Open Customize');
  await page.locator('.quick-input-widget').getByText('Open Customize', { exact: true }).first().waitFor();
  await page.keyboard.press('Enter');
  await page.getByRole('button', { name: 'Rules', exact: true }).click();
  await page.getByText('namespace-check', { exact: false }).first().waitFor();
  result.projectRuleDiscovered = true;
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
