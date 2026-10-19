import test from 'node:test';
import assert from 'node:assert/strict';
import { join } from 'node:path';
import { cppPackages, cppServers, cppExtension, cppPaths, cppArguments } from './setup-cpp.mjs';

test('each supported platform pins an official clangd release archive by SHA-256', () => {
  assert.deepEqual(Object.keys(cppServers).sort(), ['linux-x64', 'win32-x64']);
  for (const [platform, server] of Object.entries(cppServers)) {
    assert.equal(server.version, '23.1.0', platform);
    assert.match(server.sha256, /^[0-9a-f]{64}$/, platform);
    assert.match(server.url, /^https:\/\/github\.com\/clangd\/clangd\/releases\/download\/23\.1\.0\/clangd-(windows|linux)-23\.1\.0\.zip$/);
  }
  assert.notEqual(cppServers['linux-x64'].sha256, cppServers['win32-x64'].sha256);
  assert.match(cppExtension.url, /^https:\/\/open-vsx\.org\/api\/llvm-vs-code-extensions\/vscode-clangd\/0\.6\.0\//);
  assert.deepEqual(cppPackages('linux', 'x64'), { server: cppServers['linux-x64'], extension: cppExtension });
  assert.throws(() => cppPackages('darwin', 'arm64'), /Windows x64 and Linux x64 only/);
  assert.throws(() => cppPackages('linux', 'arm64'), /Windows x64 and Linux x64 only/);
});

test('paths and arguments follow the platform', () => {
  assert.equal(cppPaths('/r', 'linux', 'x64').executable, join('/r', 'data/tools/cpp/server/clangd_23.1.0/bin/clangd'));
  assert.equal(cppPaths('/r', 'win32', 'x64').executable, join('/r', 'data/tools/cpp/server/clangd_23.1.0/bin/clangd.exe'));
  assert.deepEqual(cppArguments('linux'), ['--background-index', '--pch-storage=disk', '-j=2']);
  const windows = cppArguments('win32');
  assert.equal(windows.length, 4);
  assert.match(windows[3], /^--path-mappings=\/a:=\/A:,.*\/z:=\/Z:$/, 'Windows keeps the drive-letter identity fix');
});
