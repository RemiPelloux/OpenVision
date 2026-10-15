import { join, resolve } from 'node:path';
import { loadRuntime } from './source-assembly.mjs';

export const portablePlatforms = { 'win32-x64': 'OpenVision.exe', 'linux-x64': 'openvision', 'linux-arm64': 'openvision' };

export async function verificationRuntime(root, args = process.argv, context = process) {
  const index = args.indexOf('--portable');
  if (index < 0) return { ...await loadRuntime(root), runtimeRoot: root,
    appRoot: join(root, 'source/app') };
  if (!args[index + 1] || args[index + 1].startsWith('--')) throw Error('--portable needs a package directory');
  const executable = portablePlatforms[`${context.platform}-${context.arch}`];
  if (!executable) throw Error('Portable verification requires Windows x64 or Linux x64/arm64.');
  const portable = resolve(args[index + 1]), runtimeRoot = join(portable, 'electron-host');
  return { portable, runtimeRoot, appRoot: join(runtimeRoot, 'resources/app'),
    layout: { platform: context.platform, host: runtimeRoot, executable: join(runtimeRoot, executable) } };
}
