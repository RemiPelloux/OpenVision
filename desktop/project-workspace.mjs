import { mkdir, readFile, writeFile, copyFile, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { parseConfiguration, setSetting } from './import-json.mjs';

const exists = path => stat(path).then(() => true, () => false);

async function create(path, content) {
  await mkdir(dirname(path), { recursive: true });
  if (!await exists(path)) await writeFile(path, content, { flag: 'wx' });
}

export async function projectPaths(root) {
  const workspace = join(root, 'OpenVision.code-workspace');
  const configuration = await exists(workspace) ? parseConfiguration(await readFile(workspace, 'utf8')) : undefined;
  const folder = configuration?.folders?.find(folder => folder.name === 'Playground');
  if (folder && typeof folder.path !== 'string') throw new Error('Playground must have a filesystem path.');
  const project = folder ? resolve(dirname(workspace), folder.path) : resolve(root, '../OpenVision Projects/Playground');
  return { project, workspace, configuration };
}

export async function projectWorkspace(root) {
  const paths = await projectPaths(root);
  const project = paths.project;
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
  const initialWorkspace = {
    folders: [
      { name: 'Playground', path: project },
      { name: 'OpenVision Source', path: join(root, 'source/app') },
      { name: 'OpenVision Tools', path: join(root, 'desktop') },
    ],
    settings: { 'files.watcherExclude': { '**/node_modules/**': true },
      'search.exclude': { '**/node_modules': true, '**/*.map': true },
      'git.openRepositoryInParentFolders': 'never' },
  };
  await create(paths.workspace, JSON.stringify(initialWorkspace, null, 2) + '\n');
  const workspacePath = paths.workspace;
  const workspace = paths.configuration ?? initialWorkspace;
  const originalWorkspace = JSON.stringify(workspace);
  workspace.settings ??= {};
  workspace.settings['files.exclude'] ??= { '**/node_modules': true, '**/node_modules.asar': true, '**/*.map': true };
  const runtime = process.execPath;
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
    await mkdir(dirname(backup), { recursive: true });
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
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(settingsPath, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(settingsPath, settingsText);
  }
  return { project, workspace: join(root, 'OpenVision.code-workspace') };
}
