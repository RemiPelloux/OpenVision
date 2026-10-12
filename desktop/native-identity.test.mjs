import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseNativeHeader, assertNativeHost } from './native-identity.mjs';

import { executableHeader } from './test-native-fixture.mjs';

test('PE, ELF and Mach-O identify each native platform and architecture', () => {
  for (const platform of ['win32', 'linux', 'darwin']) for (const arch of ['x64', 'arm64']) {
    const identity = parseNativeHeader(executableHeader(platform, arch));
    assert.deepEqual(identity, { platform, architectures: [arch] });
    assert.doesNotThrow(() => assertNativeHost(identity, { platform, arch }));
    assert.throws(() => assertNativeHost(identity, { platform, arch: 'ia32' }), /this machine/);
  }
  assert.throws(() => assertNativeHost(parseNativeHeader(executableHeader('win32')), { platform: 'linux', arch: 'x64' }), /win32/);
});

test('macOS universal headers accept x64 and arm64 and reject truncated architecture tables', () => {
  const data = Buffer.alloc(48);
  data.writeUInt32BE(0xcafebabe); data.writeUInt32BE(2, 4);
  data.writeUInt32BE(0x01000007, 8); data.writeUInt32BE(0x0100000c, 28);
  assert.deepEqual(parseNativeHeader(data), { platform: 'darwin', architectures: ['x64', 'arm64'] });
  assert.throws(() => parseNativeHeader(data.subarray(0, 32)), /truncated/);
  assert.throws(() => parseNativeHeader(Buffer.alloc(512)), /Unrecognized/);
  assert.throws(() => parseNativeHeader(Buffer.alloc(8)), /truncated/);
});
