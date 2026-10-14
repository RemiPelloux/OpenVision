import { join, resolve } from 'node:path';
import { loadRuntime } from './source-assembly.mjs';

export async function verificationRuntime(root, args = process.argv) {
  const index = args.indexOf('--portable');
  if (index < 0) return { ...await loadRuntime(root), runtimeRoot: root,
    appRoot: join(root, 'source/app') };
  if (!args[index + 1] || args[index + 1].startsWith('--')) throw Error('--portable needs a package directory');
  if (process.platform !== 'win32' || process.arch !== 'x64') throw Error('Portable verification requires Windows x64.');
  const portable = resolve(args[index + 1]), runtimeRoot = join(portable, 'electron-host');
  return { portable, runtimeRoot, appRoot: join(runtimeRoot, 'resources/app'),
    layout: { host: runtimeRoot, executable: join(runtimeRoot, 'OpenVision.exe') } };
}
