import { copyFile, cp, mkdir, readFile, writeFile, lstat } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

const marker = '/* OpenVision owned Windows shell processes v1 */';
const anchor = 'function ot(e, t = [], r = {}, n, s) {';
const packagedFiles = ['package.json', 'LICENSE', 'dist/generatedPackageMetadata.js',
  'dist/windows/WindowsNativeLoader.js', 'dist/windows/WindowsOwnedProcess.js',
  'native/windows/build/manifest.json', 'native/windows/build/rea-windows-x64.node'];

export function customizeShellProcess(text) {
  if (text.includes(marker)) return text;
  const start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + anchor.length) >= 0)
    throw new Error('Agent shell process owner missing or ambiguous');
  let owner = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  while (owner.type === 'CallExpression' || owner.type === 'SequenceExpression') owner = owner.callee ?? owner.expressions[0];
  const spawn = owner.body?.body[0]?.declarations?.[0]?.init;
  if (owner.type !== 'FunctionExpression' || spawn?.type !== 'CallExpression' || spawn.callee.name !== 'Xe' ||
      spawn.arguments.length !== 4 || spawn.arguments[2]?.type !== 'ObjectExpression' ||
      text.slice(spawn.arguments[2].start, spawn.arguments[2].end).match(/r\.env \?\? process\.env/g)?.length !== 1)
    throw new Error('Unexpected Agent shell spawn contract');
  const options = text.slice(spawn.arguments[2].start, spawn.arguments[2].end);
  const offset = owner.body.start + 1;
  return `${marker}\nconst openvisionOwnedShell = process.platform === "win32" && process.arch === "x64" ? require("./openvision-owned-shell.cjs") : undefined;\n` +
    text.slice(0, offset) + `\n          if (process.platform === "win32" && process.arch === "x64" && n.type === "insecure_none" && r.stdio?.length === 3) return openvisionOwnedShell.spawnWindowsShell(e, t, ${options}, s);\n` + text.slice(offset);
}

async function installNativePackage(root) {
  const require = createRequire(join(root, 'tooling/package.json'));
  const source = dirname(require.resolve('rea-agents/package.json'));
  const target = join(root, 'source/app/node_modules/rea-agents');
  const ownership = join(target, '.openvision-owned.json');
  const present = await lstat(target).catch(error => { if (error.code !== 'ENOENT') throw error; });
  if (present) {
    const owner = JSON.parse(await readFile(ownership, 'utf8'));
    if (owner.owner !== 'openvision-agent-process' || present.isSymbolicLink())
      throw new Error('Refusing to replace an unowned Agent process dependency.');
  } else {
    await mkdir(target, { recursive: true });
    await writeFile(ownership, JSON.stringify({ owner: 'openvision-agent-process' }), { flag: 'wx' });
  }
  for (const file of packagedFiles) {
    await mkdir(dirname(join(target, file)), { recursive: true });
    await copyFile(join(source, file), join(target, file));
  }
  const zod = dirname(createRequire(join(source, 'package.json')).resolve('zod/package.json'));
  await cp(zod, join(target, 'node_modules/zod'), { recursive: true });
}

export async function installOwnedShellProcesses(root) {
  if (process.platform === 'win32') await installNativePackage(root);
  const runtime = join(root, 'desktop/owned-shell-process.cjs');
  const recipe = digest(JSON.stringify(await Promise.all([
    fileHash(join(root, 'desktop/agent-process-customization.mjs')), fileHash(runtime),
    fileHash(join(root, 'tooling/package-lock.json')),
  ])));
  for (const kind of ['exec', 'host']) {
    const relative = `extensions/cursor-agent-${kind}/dist/main.js`;
    const path = join(root, 'source/app', relative);
    await copyFile(runtime, join(dirname(path), 'openvision-owned-shell.cjs'));
    await cachedFile({ path, marker: join(root, `build/cache/agent-${kind}-process.json`), recipe }, async () => {
      const before = await readFile(path, 'utf8'), after = customizeShellProcess(before);
      if (before === after) return;
      const backup = join(root, 'backups/agent-process', relative);
      await mkdir(dirname(backup), { recursive: true });
      await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
      await writeFile(path, after);
    });
  }
}
