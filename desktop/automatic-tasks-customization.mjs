import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { digest } from './import-files.mjs';

// OV-1004 authority: Workspace Trust is off by default in this runtime and
// "task.allowAutomaticTasks" defaulted to "on", so opening any folder ran its
// .vscode/tasks.json tasks marked runOn: folderOpen with no prompt (observed in
// verify:authority). The default is now "off"; a user who wants automatic
// tasks can still set it to "on". Existing explicit settings are not changed.
const marker = '/* OpenVision automatic tasks off by default v1 */';
const owner = /("task\.allowAutomaticTasks": \{\s*type: "string",\s*enum: \["on", "off"\],\s*enumDescriptions: \[[\w$]+\(\d+, null\), [\w$]+\(\d+, null\)\],\s*description: [\w$]+\(\d+, null\),\s*)default: "on",/g;

export function automaticTasksOff(text) {
  if (text.includes(marker)) return text;
  const matches = [...text.matchAll(owner)];
  if (matches.length !== 1) throw new Error('Automatic task setting owner missing or ambiguous');
  const [match, head] = matches[0];
  return text.slice(0, matches[0].index) + `${head}${marker} default: "off",` + text.slice(matches[0].index + match.length);
}

export async function installAutomaticTasksOff(root) {
  for (const variant of ['desktop', 'glass']) {
    const path = join(root, `source/app/out/vs/workbench/workbench.${variant}.main.js`);
    const before = await readFile(path, 'utf8'), after = automaticTasksOff(before);
    if (before === after) continue;
    const backup = join(root, 'backups/automatic-tasks', `${digest(before)}.js`);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
  console.log('Workspace tasks do not run automatically on folder open unless the user enables it');
}
