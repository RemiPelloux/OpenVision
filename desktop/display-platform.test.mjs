import test from 'node:test';
import assert from 'node:assert/strict';
import { ozoneArguments } from '../tooling/browser.mjs';

test('native verifiers keep Electron display selection unless a Linux cell pins it', () => {
  assert.deepEqual(ozoneArguments({}, 'linux'), []);
  assert.deepEqual(ozoneArguments({ OPENVISION_OZONE_PLATFORM: 'x11' }, 'linux'), ['--ozone-platform=x11']);
  assert.deepEqual(ozoneArguments({ OPENVISION_OZONE_PLATFORM: 'wayland' }, 'linux'), ['--ozone-platform=wayland']);
  assert.deepEqual(ozoneArguments({ OPENVISION_OZONE_PLATFORM: 'x11' }, 'win32'), []);
  assert.throws(() => ozoneArguments({ OPENVISION_OZONE_PLATFORM: 'X11 --no-sandbox' }, 'linux'), /must be one of/);
});
