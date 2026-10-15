import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { digest } from './import-files.mjs';

const marker = '/* OpenVision Linux keyring selection v2 */';

// Chromium only auto-selects a keyring on desktops it recognizes (GNOME-family
// and KDE). Elsewhere (Hyprland, Sway, i3, ...) it silently stores secrets with
// its hardcoded basic_text key even when a Secret Service is running. Select
// libsecret when a Secret Service is reachable, unless the user or argv.json
// chose a store, or KDE provides KWallet. Forcing libsecret without a service
// would make encryption unavailable, so that case keeps Chromium's choice.
export function linuxPasswordStore(env, chosen, secretService) {
  if (chosen) return undefined;
  const desktops = `${env.XDG_CURRENT_DESKTOP ?? ''}:${env.DESKTOP_SESSION ?? ''}`.toLowerCase().split(':');
  if (desktops.some(name => name === 'kde' || name.startsWith('plasma'))) return undefined;
  return secretService() ? 'gnome-libsecret' : undefined;
}

// Owned or D-Bus-activatable org.freedesktop.secrets on the session bus.
export function secretServiceAvailable(spawnSync) {
  const call = (method, ...args) => {
    const result = spawnSync('dbus-send', ['--session', '--print-reply=literal', '--dest=org.freedesktop.DBus',
      '/org/freedesktop/DBus', `org.freedesktop.DBus.${method}`, ...args], { encoding: 'utf8', timeout: 1000 });
    return result.status === 0 ? result.stdout : '';
  };
  return /\btrue\b/.test(call('NameHasOwner', 'string:org.freedesktop.secrets')) ||
    /(^|\s)org\.freedesktop\.secrets(\s|$)/.test(call('ListActivatableNames'));
}

export function selectLinuxKeyring(text) {
  if (text.includes(marker)) return text;
  // Replace the unpublished v1 block, which selected libsecret without probing.
  text = text.replace(/\/\* OpenVision Linux keyring selection v1 \*\/[\s\S]*?\n  }\n  (?=\w+\.commandLine\.appendSwitch\("enable-features")/, '');
  const matches = [...text.matchAll(/(\w+)\.commandLine\.appendSwitch\("enable-features", \w+\);/g)];
  if (matches.length !== 1) throw new Error('Command-line switch owner missing or ambiguous');
  const [match] = matches, app = match[1];
  const owner = text.lastIndexOf('function ', match.index);
  if (!text.slice(owner, match.index).includes('t.push("password-store")'))
    throw new Error('Linux password-store contract changed');
  const select = linuxPasswordStore.toString(), probe = secretServiceAvailable.toString();
  const insertion = `${marker}
  if (process.platform === "linux") {
    const openvisionPasswordStore = (${select})(process.env, ${app}.commandLine.hasSwitch("password-store"),
      () => (${probe})(process.getBuiltinModule("node:child_process").spawnSync));
    openvisionPasswordStore && ${app}.commandLine.appendSwitch("password-store", openvisionPasswordStore);
  }
  `;
  return text.slice(0, match.index) + insertion + text.slice(match.index);
}

export async function installLinuxKeyringSelection(root) {
  const relative = 'source/app/out/main.js';
  const before = await readFile(join(root, relative), 'utf8');
  const after = selectLinuxKeyring(before);
  if (before === after) return;
  const backup = join(root, 'backups/linux-keyring', `${digest(before)}.js`);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(join(root, relative), backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(join(root, relative), after);
  console.log('Linux secrets use the desktop Secret Service unless a password store is chosen');
}
