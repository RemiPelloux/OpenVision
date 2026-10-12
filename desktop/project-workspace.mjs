import { mkdir, readFile, writeFile, copyFile, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { parseConfiguration, setSetting } from './import-json.mjs';

const exists = path => stat(path).then(() => true, () => false);

async function create(path, content) {
  await mkdir(dirname(path), { recursive: true });
  if (!await exists(path)) await writeFile(path, content, { flag: 'wx' });
}

export async function projectWorkspace(root) {
  const project = resolve(root, '../../OpenVision Projects/Playground');
  await create(join(project, 'src/main.js'), `export function describeProject(name) {
  return { name, language: 'JavaScript', ready: true };
}

console.log(describeProject('OpenVision'));
`);
  await create(join(project, 'test/main.test.js'), `import { test } from 'node:test';
import assert from 'node:assert/strict';
import { describeProject } from '../src/main.js';

test('project is ready', () => {
  assert.deepEqual(describeProject('OpenVision'), {
    name: 'OpenVision', language: 'JavaScript', ready: true,
  });
});
`);
  await create(join(project, 'package.json'), JSON.stringify({ name: 'openvision-playground', private: true,
    type: 'module', scripts: { start: 'node src/main.js', test: 'node --test' } }, null, 2) + '\n');
  await create(join(project, '.gitignore'), 'node_modules/\ncoverage/\n.env\n');
  await create(join(project, 'README.md'), '# OpenVision Playground\n\nRun `npm start` or `npm test` in the integrated terminal.\n');
  await create(join(root, 'OpenVision.code-workspace'), JSON.stringify({
    folders: [
      { name: 'Playground', path: project },
      { name: 'OpenVision Source', path: join(root, 'source/app') },
      { name: 'OpenVision Tools', path: join(root, 'desktop') },
    ],
    settings: { 'files.watcherExclude': { '**/node_modules/**': true },
      'search.exclude': { '**/node_modules': true, '**/*.map': true },
      'git.openRepositoryInParentFolders': 'never' },
  }, null, 2) + '\n');
  const workspacePath = join(root, 'OpenVision.code-workspace');
  const workspace = JSON.parse(await readFile(workspacePath, 'utf8'));
  const originalWorkspace = JSON.stringify(workspace);
  workspace.settings ??= {};
  workspace.settings['files.exclude'] ??= { '**/node_modules': true, '**/node_modules.asar': true, '**/*.map': true };
  const runtime = resolve(root, '../.tools/node-v24.18.0-win-x64/node.exe');
  workspace.tasks ??= { version: '2.0.0', tasks: [] };
  for (const [label, args, group] of [
    ['Playground: Run', ['src/main.js'], 'build'], ['Playground: Test', ['--test'], 'test'],
  ]) {
    if (workspace.tasks.tasks.some(task => task.label === label)) continue;
    workspace.tasks.tasks.push({ label, type: 'process', command: runtime, args,
      options: { cwd: '${workspaceFolder:Playground}' }, problemMatcher: [], group });
  }
  workspace.launch ??= { version: '0.2.0', configurations: [] };
  if (!workspace.launch.configurations.some(configuration => configuration.name === 'Playground'))
    workspace.launch.configurations.push({ name: 'Playground', type: 'node', request: 'launch',
      runtimeExecutable: runtime, program: '${workspaceFolder:Playground}/src/main.js',
      cwd: '${workspaceFolder:Playground}', skipFiles: ['<node_internals>/**'] });
  if (JSON.stringify(workspace) !== originalWorkspace) {
    const backup = join(root, 'backups/local-profile/OpenVision.code-workspace');
    await copyFile(workspacePath, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(workspacePath, JSON.stringify(workspace, null, 2) + '\n');
  }
  const settingsPath = join(root, 'data/local/User/settings.json');
  let settingsText = await readFile(settingsPath, 'utf8');
  const settings = parseConfiguration(settingsText);
  const enhancements = { 'explorer.compactFolders': false, 'explorer.sortOrder': 'foldersNestsFiles',
    'explorer.autoReveal': true, 'explorer.openEditors.visible': 6,
    'workbench.tree.indent': 16, 'workbench.tree.renderIndentGuides': 'always',
    'workbench.tree.enableStickyScroll': true, 'workbench.iconTheme': 'vs-seti',
    'workbench.activityBar.location': 'default', 'workbench.sideBar.location': 'left',
    'breadcrumbs.enabled': true, 'window.restoreWindows': 'one',
    'cursor.windowSwitcher.sidebarHoverCollapsed': false };
  let changed = false;
  for (const [key, value] of Object.entries(enhancements)) {
    if (key in settings) continue;
    settings[key] = value;
    settingsText = setSetting(settingsText, key, value);
    changed = true;
  }
  if (changed) {
    const backup = join(root, 'backups/local-profile/explorer-settings.json');
    await copyFile(settingsPath, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(settingsPath, settingsText);
  }
  return { project, workspace: join(root, 'OpenVision.code-workspace') };
}
