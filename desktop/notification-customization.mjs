import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { digest } from './import-files.mjs';

const marker = '/* OpenVision isolated Windows shell v3 */';
const nativeImport = 'import { app as XYe, Notification as iN } from "electron";';
function unique(text, anchor) {
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + anchor.length) >= 0) throw Error(`Notification contract changed: ${anchor}`);
  return index;
}

export function isolateNotifications(text) {
  if (text.includes(marker)) return text;
  if (text.includes('/* OpenVision isolated Windows shell v2 */')) {
    const invalidImport = 'import { SafeShellApp as qc, Menu as sJe } from "./notification-bridge.mjs";';
    unique(text, invalidImport);
    text = text.replace(invalidImport, 'import { app as qc, Menu as sJe } from "electron";');
    // Only this native dock operation belongs to the shell boundary. The dock
    // service still needs Electron app events, dock and Menu on macOS.
    const call = 'if ((qc.clearRecentDocuments(), !e())) return;';
    unique(text, call);
    text = text.replace(call, 'if ((Mw.clearRecentDocuments(), !e())) return;');
    return text.replace('/* OpenVision isolated Windows shell v2 */', marker);
  }
  if (text.includes('/* OpenVision isolated Windows notifications v1 */'))
    return isolateShellHistory(text.replace('/* OpenVision isolated Windows notifications v1 */', marker));
  unique(text, nativeImport);
  const offset = unique(text, 'Zy = class extends z') + 5;
  const owner = parseExpressionAt(text, offset, { ecmaVersion: 'latest' });
  const edits = [];
  for (const name of ['isSupported', 'hasPermission', 'requestPermission', 'showNotification']) {
    const node = owner.body.body.find(item => item.key?.name === name);
    if (!node) throw Error(`Notification method missing: ${name}`);
    let value = text.slice(node.start, node.end);
    if (name === 'isSupported' && !value.includes('return iN.isSupported();')) throw Error('Notification support contract changed');
    if (name === 'hasPermission' && !value.includes('return !!this.isSupported();')) throw Error('Notification permission contract changed');
    value = value.replaceAll('this.isSupported()', '(await this.isSupported())')
      .replaceAll('this.hasPermission()', '(await this.hasPermission())');
    if (!node.value.async) value = `async ${value}`;
    edits.push({ start: node.start, end: node.end, value });
  }
  for (const edit of edits.sort((a, b) => b.start - a.start))
    text = text.slice(0, edit.start) + edit.value + text.slice(edit.end);
  const condition = 'this.systemNotificationService.isSupported() &&';
  const permission = '!this.systemNotificationService.hasPermission() &&';
  unique(text, condition); unique(text, permission);
  text = text.replace(condition, '(await this.systemNotificationService.isSupported()) &&')
    .replace(permission, '!(await this.systemNotificationService.hasPermission()) &&');
  // Windows permission is implicit in support; no permission dialog is requested
  // by this startup method. Keep native initialization lazy until actually used.
  const lazy = text.indexOf('{', unique(text, 'async requestNotificationPermissions()')) + 1;
  text = text.slice(0, lazy) + '\nif (process.platform === "win32") return;\n' + text.slice(lazy);
  return isolateShellHistory(`${marker}\n${text.replace(nativeImport, 'import { app as XYe } from "electron";\nimport { SafeNotification as iN } from "./notification-bridge.mjs";')}`);
}

export function joinShellShutdown(text) {
  const joined = '/* OpenVision joined shell shutdown v1 */';
  if (text.includes(joined)) return text;
  const pattern = /N\.once\((\w+)\.onWillShutdown\)\(\((\w+)\) => \{\s*\(process\.once\("exit",/g;
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1) throw Error('Shell shutdown owner missing or ambiguous');
  const [match] = matches;
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', match.index), { ecmaVersion: 'latest' });
  const startup = owner.body.body.find(item => item.key?.name === 'startup');
  if (!startup || startup.start > match.index || startup.end < match.index ||
      !text.slice(match.index, startup.end).includes('"instanceLockfile"'))
    throw Error('Shell shutdown lifecycle contract changed');
  const position = text.indexOf('{', match.index) + 1;
  return `${joined}\nimport { shutdownShellHost } from "./notification-bridge.mjs";\n` +
    text.slice(0, position) + `\n${match[2]}.join("openvisionShellHost", shutdownShellHost());\n` + text.slice(position);
}

function isolateShellHistory(text) {
  const changes = [
    ['import { app as Mw } from "electron";', 'import { SafeShellApp as Mw } from "./notification-bridge.mjs";'],
    ['for (const s of Mw.getJumpListSettings().removedItems) {',
      'const openvisionJumpSettings = await Mw.getJumpListSettings();\nif (!openvisionJumpSettings) return;\nfor (const s of openvisionJumpSettings.removedItems) {'],
    ['const t = Mw.setJumpList(e);', 'const t = await Mw.setJumpList(e);'],
    ['import { app as Xhe } from "electron";', 'import { SafeShellApp as Xhe } from "./notification-bridge.mjs";'],
    ['if ((qc.clearRecentDocuments(), !e())) return;', 'if ((Mw.clearRecentDocuments(), !e())) return;'],
  ];
  for (const [before, after] of changes) { unique(text, before); text = text.replace(before, after); }
  return text;
}

async function save(root, path, before, after) {
  if (before === after) return;
  const backup = join(root, 'backups/notifications', `${digest(before)}.txt`);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}

export async function installIsolatedNotifications(root) {
  const directory = join(root, 'source/app'), main = join(directory, 'out/main.js');
  const before = await readFile(main, 'utf8'), after = joinShellShutdown(isolateNotifications(before));
  const packagePath = join(directory, 'package.json'), packageText = await readFile(packagePath, 'utf8');
  const manifest = JSON.parse(packageText);
  if (!['./out/main.js', './out/notification-entry.mjs'].includes(manifest.main)) throw Error('Notification entry contract changed');
  for (const name of ['notification-entry', 'notification-host', 'notification-bridge', 'notification-host-owner'])
    await copyFile(join(root, `desktop/${name}.mjs`), join(directory, `out/${name}.mjs`));
  await save(root, main, before, after);
  if (manifest.main === './out/main.js') {
    manifest.main = './out/notification-entry.mjs';
    await save(root, packagePath, packageText, JSON.stringify(manifest, null, 2) + '\n');
  }
}
