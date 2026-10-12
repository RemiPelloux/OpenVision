import { test } from 'node:test';
import assert from 'node:assert/strict';
import { join } from 'node:path';
import { cursorLocations, platformLayout, samePath } from './platform.mjs';
import { assertWorkbenchSender } from './workbench-sender.mjs';
import { assertExtensionPlatform } from './import-extensions.mjs';

test('Cursor profiles follow Windows, macOS and Linux conventions including XDG overrides', () => {
  assert.deepEqual(cursorLocations({ platform: 'win32', home: 'C:\\Users\\Tester', env: { APPDATA: 'D:\\Profile' } }),
    { user: 'D:\\Profile\\Cursor\\User', extensions: 'C:\\Users\\Tester\\.cursor\\extensions' });
  assert.equal(cursorLocations({ platform: 'win32', home: 'C:\\Users\\Tester', env: {} }).user, 'C:\\Users\\Tester\\AppData\\Roaming\\Cursor\\User');
  assert.equal(cursorLocations({ platform: 'darwin', home: '/Users/Tester', env: { APPDATA: '/ignored' } }).user,
    '/Users/Tester/Library/Application Support/Cursor/User');
  assert.equal(cursorLocations({ platform: 'linux', home: '/home/tester', env: {} }).user, '/home/tester/.config/Cursor/User');
  assert.equal(cursorLocations({ platform: 'linux', home: '/home/tester', env: { XDG_CONFIG_HOME: '/mnt/config' } }).user, '/mnt/config/Cursor/User');
  assert.throws(() => cursorLocations({ platform: 'linux', env: { XDG_CONFIG_HOME: 'relative' } }), /absolute/);
  assert.throws(() => cursorLocations({ platform: 'freebsd' }), /Unsupported/);
});

test('native layouts keep macOS bundle and native launch targets separate', () => {
  const windows = platformLayout('/workspace', 'win32');
  const mac = platformLayout('/workspace', 'darwin');
  const linux = platformLayout('/workspace', 'linux');
  assert.equal(windows.executable, join('/workspace', 'electron-host/OpenVision.exe'));
  assert.equal(mac.executable, join('/workspace', 'electron-host/OpenVision.app/Contents/MacOS/OpenVision'));
  assert.equal(mac.appLink, join('/workspace', 'electron-host/OpenVision.app/Contents/Resources/app'));
  assert.equal(linux.executable, join('/workspace', 'electron-host/openvision'));
  assert.throws(() => platformLayout('/workspace', 'freebsd'), /Unsupported/);
});

test('native IPC checks frame identity, encoded spaces and platform path case', () => {
  const expected = new URL('file:///Users/Tester/OpenVision%20Source/workbench.html');
  const frame = { url: 'vscode-file://vscode-app/Users/Tester/OpenVision%20Source/workbench.html' };
  const event = { senderFrame: frame, sender: { mainFrame: frame } };
  assert.doesNotThrow(() => assertWorkbenchSender(event, expected, 'darwin'));
  frame.url = frame.url.replace('Tester', 'tester');
  assert.throws(() => assertWorkbenchSender(event, expected, 'darwin'), /only/);
  assert.throws(() => assertWorkbenchSender(event, expected, 'linux'), /only/);
  assert.doesNotThrow(() => assertWorkbenchSender(event, expected, 'win32'));
  event.sender.mainFrame = {};
  assert.throws(() => assertWorkbenchSender(event, expected, 'win32'), /only/);
  assert.equal(samePath('/Case', '/case', 'linux'), false);
});

test('native extensions from another platform are rejected without guessing from folder names', () => {
  const entry = { identifier: { id: 'sample.native' }, metadata: { targetPlatform: 'win32-x64' } };
  assert.throws(() => assertExtensionPlatform(entry, { platform: 'darwin', arch: 'arm64' }), /targets win32-x64/);
  assert.doesNotThrow(() => assertExtensionPlatform(entry, { platform: 'win32', arch: 'x64' }));
  entry.metadata.targetPlatform = 'universal';
  assert.doesNotThrow(() => assertExtensionPlatform(entry, { platform: 'linux', arch: 'arm64' }));
});
