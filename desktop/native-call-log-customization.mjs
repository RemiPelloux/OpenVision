import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { join, dirname, relative, posix, sep } from 'node:path';
import { digest } from './import-files.mjs';

export const nativeCallLogMarker = '/* OpenVision native call log hook v1 */';
export const nativeCallLogRuntime = 'source/app/out/openvision-native-call-log.cjs';

// OV-803 measurement: every process that can load a proprietary addon loads the
// call-log hook first. The hook does nothing unless OPENVISION_NATIVE_CALL_LOG
// names an absolute directory at run time (desktop/native-call-log.cjs), so
// ordinary launches only pay one small module load.
export const nativeCallLogEntries = Object.freeze([
  { path: 'source/app/out/main.js', format: 'module' }, // cursor_proclist.node
  { path: 'source/app/out/vs/workbench/api/node/extensionHostProcess.js', format: 'module' }, // file_service, tree-chunk-napi
  { path: 'source/app/extensions/cursor-agent-host/dist/agent-host-daemon/dist/bin/daemon.cjs', format: 'commonjs' }, // daemon tree-chunk-napi
]);

function specifier(entry) {
  const value = relative(dirname(entry), nativeCallLogRuntime).split(sep).join(posix.sep);
  return value.startsWith('.') ? value : `./${value}`;
}

export function loadNativeCallLog(text, entry, format) {
  if (text.includes(nativeCallLogMarker)) {
    if (text.split(nativeCallLogMarker).length !== 2) throw Error(`Native call log hook applied more than once: ${entry}`);
    return text;
  }
  const target = JSON.stringify(specifier(entry));
  if (format === 'module') {
    if (!/^import[\s{*]/m.test(text)) throw Error(`Native call log owner is not an ES module: ${entry}`);
    return `import ${target}; ${nativeCallLogMarker}\n${text}`;
  }
  // Keep a shebang first; the hook loads before any bundled module.
  const shebang = text.startsWith('#!') ? text.slice(0, text.indexOf('\n') + 1) : '';
  if (!/\brequire\(/.test(text)) throw Error(`Native call log owner is not CommonJS: ${entry}`);
  return `${shebang}require(${target}); ${nativeCallLogMarker}\n${text.slice(shebang.length)}`;
}

export async function installNativeCallLog(root) {
  await copyFile(join(root, 'desktop/native-call-log.cjs'), join(root, nativeCallLogRuntime));
  let changed = 0;
  for (const { path: entry, format } of nativeCallLogEntries) {
    const path = join(root, entry), before = await readFile(path, 'utf8');
    const after = loadNativeCallLog(before, entry, format);
    if (before === after) continue;
    const backup = join(root, 'backups/native-call-log', `${digest(before)}${format === 'module' ? '.js' : '.cjs'}`);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
    changed++;
  }
  if (changed) console.log('Proprietary native addon calls can be logged with OPENVISION_NATIVE_CALL_LOG');
}
