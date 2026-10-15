import { join, win32, posix } from 'node:path';
import { homedir } from 'node:os';
import { lstat } from 'node:fs/promises';

export const supportedPlatforms = ['win32', 'darwin', 'linux'];
export const supportedArchitectures = ['x64', 'arm64'];

export function platformLayout(root, platform = process.platform) {
  if (!supportedPlatforms.includes(platform)) throw new Error(`Unsupported desktop platform: ${platform}`);
  const host = join(root, 'electron-host');
  if (platform === 'darwin') return { platform, host, bundle: join(host, 'OpenVision.app'),
    installationExecutable: 'Contents/MacOS/Cursor', appPrefix: 'Contents/Resources/app/',
    executable: join(host, 'OpenVision.app/Contents/MacOS/OpenVision'), appLink: join(host, 'OpenVision.app/Contents/Resources/app') };
  const name = platform === 'win32' ? 'OpenVision.exe' : 'openvision';
  return { platform, host, installationExecutable: platform === 'win32' ? 'Cursor.exe' : 'cursor',
    appPrefix: 'resources/app/', executable: join(host, name), appLink: join(host, 'resources/app') };
}

export function cursorLocations(context = {}) {
  const platform = context.platform ?? process.platform;
  const home = context.home ?? homedir();
  const env = context.env ?? process.env;
  if (!supportedPlatforms.includes(platform)) throw new Error(`Unsupported Cursor profile platform: ${platform}`);
  const path = platform === 'win32' ? win32 : posix;
  let configuration;
  if (platform === 'win32') configuration = env.APPDATA || path.join(home, 'AppData/Roaming');
  else if (platform === 'darwin') configuration = path.join(home, 'Library/Application Support');
  else {
    configuration = env.XDG_CONFIG_HOME || path.join(home, '.config');
    if (!path.isAbsolute(configuration)) throw new Error('XDG_CONFIG_HOME must be an absolute directory.');
  }
  return { user: path.join(configuration, 'Cursor/User'), extensions: path.join(home, '.cursor/extensions') };
}

export function samePath(left, right, platform = process.platform) {
  return platform === 'win32' ? left.toLowerCase() === right.toLowerCase() : left === right;
}

export async function linuxSandboxArguments(host) {
  let helper;
  try { helper = await lstat(join(host, 'chrome-sandbox')); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
  // A user-owned copy cannot act as Chromium's root-owned setuid helper. Use the namespace sandbox.
  // The explicit value keeps VS Code's argument parser from consuming a following path as the flag value.
  return helper?.uid === 0 && (helper.mode & 0o4777) === 0o4755 ? [] : ['--disable-setuid-sandbox=true'];
}
