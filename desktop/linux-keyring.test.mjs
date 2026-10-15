import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { linuxPasswordStore, secretServiceAvailable, selectLinuxKeyring } from './linux-keyring-customization.mjs';
import { readableApp } from './recovered-source.mjs';

const present = () => true, absent = () => false;

test('unrecognized desktops use a reachable Secret Service', () => {
  for (const desktop of ['Hyprland', 'sway', 'i3', '', 'GNOME', 'ubuntu:GNOME'])
    assert.equal(linuxPasswordStore({ XDG_CURRENT_DESKTOP: desktop }, false, present), 'gnome-libsecret');
});

test('explicit choices, KDE and missing services keep Chromium selection', () => {
  assert.equal(linuxPasswordStore({ XDG_CURRENT_DESKTOP: 'Hyprland' }, true, present), undefined);
  assert.equal(linuxPasswordStore({ XDG_CURRENT_DESKTOP: 'KDE' }, false, present), undefined);
  assert.equal(linuxPasswordStore({ DESKTOP_SESSION: 'plasmawayland' }, false, present), undefined);
  assert.equal(linuxPasswordStore({ XDG_CURRENT_DESKTOP: 'Hyprland' }, false, absent), undefined);
});

test('Secret Service probe accepts owned or activatable names and tolerates missing dbus-send', () => {
  const reply = map => (command, args) => ({ status: 0, stdout: map[args[4].split('.').at(-1)] ?? '' });
  assert.equal(secretServiceAvailable(reply({ NameHasOwner: '   boolean true\n' })), true);
  assert.equal(secretServiceAvailable(reply({ NameHasOwner: '   boolean false\n',
    ListActivatableNames: 'array [ org.freedesktop.DBus org.freedesktop.secrets ]' })), true);
  assert.equal(secretServiceAvailable(reply({ NameHasOwner: '   boolean false\n',
    ListActivatableNames: 'array [ org.freedesktop.secretsx ]' })), false);
  assert.equal(secretServiceAvailable(() => ({ status: null, error: new Error('ENOENT') })), false);
});

test('main-process selection patch is idempotent and upgrades v1', async t => {
  let original;
  try { original = await readFile(new URL('out/main.js', readableApp), 'utf8'); }
  catch (error) { if (error.code === 'ENOENT') return t.skip('Recovered main bundle unavailable'); throw error; }
  const patched = selectLinuxKeyring(original);
  assert.equal(selectLinuxKeyring(patched), patched);
  assert.match(patched, /OpenVision Linux keyring selection v2[\s\S]*appendSwitch\("password-store", openvisionPasswordStore\)/);
  const v1 = patched.replace(/\/\* OpenVision Linux keyring selection v2 \*\/[\s\S]*?\n  }\n  (?=\w+\.commandLine\.appendSwitch\("enable-features")/,
    '/* OpenVision Linux keyring selection v1 */\n  if (process.platform === "linux") {\n    old();\n  }\n  ');
  assert.notEqual(v1, patched);
  assert.equal(selectLinuxKeyring(v1), patched);
});
