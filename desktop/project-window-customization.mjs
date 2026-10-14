import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { digest } from './import-files.mjs';

const marker = '/* OpenVision reuse project window v1 */';

function replaceOwnedMethod(text, name, before, after) {
  const matches = [...text.matchAll(new RegExp(`(?:^|\\n)\\s+(?:async )?${name}\\(`, 'g'))];
  if (matches.length !== 1)
    throw Error(`Project window owner missing or ambiguous: ${name}`);
  const at = matches[0].index + matches[0][0].indexOf(name);
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', at), { ecmaVersion: 'latest' });
  const method = owner.body.body.find(node => node.key?.name === name);
  if (!method || method.start > at || method.end <= at) throw Error(`Project window method changed: ${name}`);
  const body = text.slice(method.start, method.end);
  if (!body.includes(before) || body.indexOf(before) !== body.lastIndexOf(before))
    throw Error(`Project window routing contract changed: ${name}`);
  return text.slice(0, method.start) + body.replace(before, after) + text.slice(method.end);
}

export function customizeProjectWindows(text) {
  if (text.includes(marker)) return text;
  // Reuse requests from the start screen must load the editor in that window.
  // The native lifecycle still owns unload vetoes and unsaved-file handling.
  text = replaceOwnedMethod(text, 'shouldHonorGlassOpenRequest',
    'if (e.cursorForceNewWindow && (e.urisToOpen?.length ?? 0) > 0) return !0;',
    'if ((e.cursorForceNewWindow || e.forceReuseWindow) && (e.urisToOpen?.length ?? 0) > 0) return !0;');
  // Native pickers previously dropped the explicit reuse option at the IPC owner.
  text = replaceOwnedMethod(text, 'doOpenPicked',
    'forceNewWindow: t.forceNewWindow,',
    'forceNewWindow: t.forceNewWindow,\n              forceReuseWindow: t.forceReuseWindow,');
  return `${marker}\n${text}`;
}

export async function installProjectWindows(root) {
  const path = join(root, 'source/app/out/main.js');
  const before = await readFile(path, 'utf8'), after = customizeProjectWindows(before);
  if (before === after) return;
  const backup = join(root, 'backups/project-window', `${digest(before)}.js`);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
