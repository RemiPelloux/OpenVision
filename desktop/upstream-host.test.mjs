import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { alignLoadSegments, compareHosts, readFuseWire, upstreamHostInputs } from './upstream-host.mjs';
import { assertPortable, assertToolchain, compilerEnvironment, jsTokens, versionAtMost, wrapperDiff } from './native-rebuild.mjs';

async function fixture(t) {
  const root = await mkdtemp(join(tmpdir(), 'openvision-upstream-host-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  return root;
}

function elf(alignments) {
  const header = 64, size = 56, buffer = Buffer.alloc(header + size * alignments.length);
  buffer.set([0x7f, 0x45, 0x4c, 0x46, 2, 1], 0);
  buffer.writeBigUInt64LE(BigInt(header), 32);
  buffer.writeUInt16LE(size, 54); buffer.writeUInt16LE(alignments.length, 56);
  alignments.forEach(([type, alignment], index) => {
    buffer.writeUInt32LE(type, header + index * size);
    buffer.writeBigUInt64LE(BigInt(alignment), header + index * size + 48);
  });
  return buffer;
}

test('fuse wire is read from the single sentinel and named per Electron FuseV1Options', () => {
  const wire = Buffer.concat([Buffer.from('padding'), Buffer.from('dL7pKGdnNz796PbbjQWNKmHXBZaB9tsX'), Buffer.from([1, 9]), Buffer.from('101100011'), Buffer.from('tail')]);
  const fuses = readFuseWire(wire);
  assert.equal(fuses.wire, '101100011');
  assert.equal(fuses.fuses.RunAsNode, 'enabled');
  assert.equal(fuses.fuses.EnableCookieEncryption, 'disabled');
  assert.equal(fuses.fuses.OnlyLoadAppFromAsar, 'disabled');
  assert.equal(fuses.fuses.WasmTrapHandlers, 'enabled');
  assert.throws(() => readFuseWire(Buffer.from('no sentinel')), /exactly one/);
  assert.throws(() => readFuseWire(Buffer.concat([wire, wire])), /exactly one/);
});

test('PT_LOAD alignment above 4 KiB is lowered; other segments and alignments are untouched', () => {
  const input = elf([[1, 0x1000], [1, 0x2000], [1, 0x200000], [6, 0x200000], [1, 0x1000]]);
  const { buffer, changed } = alignLoadSegments(input);
  assert.deepEqual(changed.map(entry => entry.segment), [1, 2]);
  assert.equal(buffer.readBigUInt64LE(64 + 56 * 2 + 48), 0x1000n);
  assert.equal(buffer.readBigUInt64LE(64 + 56 * 3 + 48), 0x200000n, 'non-LOAD headers keep their alignment');
  assert.equal(input.readBigUInt64LE(64 + 56 * 2 + 48), 0x200000n, 'input buffer is not modified');
  assert.equal(alignLoadSegments(buffer).changed.length, 0, 'transform is idempotent');
  assert.throws(() => alignLoadSegments(Buffer.from('MZ not elf')), /64-bit little-endian ELF/);
});

test('host comparison maps the electron executable, omits sample-app files and ignores private host entries', async t => {
  const root = await fixture(t);
  const release = join(root, 'release'), recovered = join(root, 'recovered');
  await mkdir(join(release, 'resources'), { recursive: true }); await mkdir(join(recovered, 'bin'), { recursive: true });
  await mkdir(join(recovered, 'resources/completions'), { recursive: true });
  await writeFile(join(release, 'electron'), 'host'); await writeFile(join(recovered, 'openvision'), 'host');
  await writeFile(join(release, 'libffmpeg.so'), 'a'); await writeFile(join(recovered, 'libffmpeg.so'), 'b');
  await writeFile(join(release, 'LICENSE'), 'MIT');
  await writeFile(join(release, 'version'), '42.10.0'); await writeFile(join(release, 'resources/default_app.asar'), 'sample');
  await writeFile(join(recovered, 'bin/cursor'), 'wrapper'); await writeFile(join(recovered, 'resources/completions/x'), 'c');
  await symlink(root, join(recovered, 'resources/app'));
  await writeFile(join(recovered, 'extra.so'), 'x');
  const comparison = await compareHosts(release, recovered);
  assert.deepEqual(Object.fromEntries(comparison.entries.map(entry => [entry.path, entry.status])),
    { LICENSE: 'release-only', 'libffmpeg.so': 'different', openvision: 'identical' });
  assert.deepEqual(comparison.recovered_only, ['extra.so']);
  assert.deepEqual(comparison.omitted_release_files, ['resources/default_app.asar', 'version']);
});

test('pinned upstream inputs are exact official release URLs with SHA-256 digests', () => {
  const inputs = upstreamHostInputs['linux-x64'];
  assert.match(inputs.electron.url, /^https:\/\/github\.com\/electron\/electron\/releases\/download\/v42\.10\.0\//);
  assert.match(inputs.node.url, /^https:\/\/nodejs\.org\/dist\/v24\.18\.1\//);
  for (const input of Object.values(inputs)) assert.match(input.sha256, /^[0-9a-f]{64}$/);
});

test('wrapper diff compares token streams, so reformatting is not a difference', async t => {
  const root = await fixture(t);
  await mkdir(join(root, 'upstream/lib'), { recursive: true }); await mkdir(join(root, 'recovered/lib'), { recursive: true });
  await writeFile(join(root, 'upstream/lib/a.js'), "exports.a = function (x) { return x + 1; };\n//# sourceMappingURL=a.js.map\n");
  await writeFile(join(root, 'recovered/lib/a.js'), "exports.a = function (x) {\n  return x + 1;\n};\n");
  await writeFile(join(root, 'upstream/lib/b.js'), "module.exports = 'upstream';\n");
  await writeFile(join(root, 'recovered/lib/b.js'), "module.exports = 'cursor';\n");
  await writeFile(join(root, 'upstream/lib/a.test.js'), 'ignored');
  const diff = await wrapperDiff(join(root, 'upstream'), join(root, 'recovered'));
  assert.equal(diff.compared, 2); assert.equal(diff.identical, 1);
  assert.deepEqual(diff.differing, [{ path: 'lib/b.js', upstream_tokens: 6, recovered_tokens: 6, tokens_only_upstream: 1, tokens_only_recovered: 1 }]);
  assert.deepEqual(jsTokens("'a'"), ['string:a']);
});

test('toolchain check refuses a clang, Python, make or Node that differs from the pin', () => {
  const pinned = { inputs: { clang: { compilerVersion: '23.0.0git', llvmCommit: 'a'.repeat(40) } }, make: { version: '4.3' }, python: { version: '3.13.16' }, node: { version: '24.18.0' } };
  const actual = { clang: '23.0.0git', llvm_commit: 'a'.repeat(40), make: '4.3', python: '3.13.16', node: '24.18.0' };
  assert.doesNotThrow(() => assertToolchain(pinned, actual));
  assert.throws(() => assertToolchain(pinned, { ...actual, clang: '18.1.3' }), /clang 18\.1\.3 differs/);
  assert.throws(() => assertToolchain(pinned, { ...actual, llvm_commit: 'b'.repeat(40) }), /clang commit/);
  assert.throws(() => assertToolchain(pinned, { ...actual, node: '24.18.1' }), /node 24\.18\.1 differs/);
});

test('portability floor compares GLIBC versions numerically and rejects a shared C++ runtime', () => {
  assert.equal(versionAtMost('2.2.5', '2.28'), true);
  assert.equal(versionAtMost('2.28', '2.28'), true);
  assert.equal(versionAtMost('2.29', '2.28'), false);
  assert.equal(versionAtMost('2.38', '2.28'), false);
  const abi = { glibc: '2.17', glibcxx: null, needed: ['libm.so.6', 'libc.so.6'] };
  assert.doesNotThrow(() => assertPortable(abi, '2.28', 'fixture'));
  assert.throws(() => assertPortable({ ...abi, glibc: '2.38' }, '2.28', 'fixture'), /GLIBC_2\.38, above the 2\.28 floor/);
  assert.throws(() => assertPortable({ ...abi, glibcxx: '3.4.31' }, '2.28', 'fixture'), /libstdc\+\+/);
  assert.throws(() => assertPortable({ ...abi, needed: ['libstdc++.so.6'] }, '2.28', 'fixture'), /shared C\+\+ runtime/);
});

test('compiler environment follows the sysroot/libc++ recipe and maps checkout paths', () => {
  const tools = { sysroot: { directory: '/t/sysroot' }, clang: { directory: '/t/clang' }, libcxxHeaders: { directory: '/t/h' },
    libcxxabiHeaders: { directory: '/t/abi' }, libcxxObjects: { directory: '/t/o' } };
  const environment = compilerEnvironment(tools, { prefixMaps: [['/repo/pkg', '.']] });
  assert.equal(environment.CXX, '/t/clang/bin/clang++ --gcc-toolchain=/t/sysroot/x86_64-linux-gnu');
  for (const flag of ['-nostdinc++', '-D_LIBCPP_ABI_NAMESPACE=Cr', '--sysroot=/t/sysroot/x86_64-linux-gnu/x86_64-linux-gnu/sysroot', '-ffile-prefix-map=/repo/pkg=.'])
    assert.ok(environment.CXXFLAGS.includes(flag), flag);
  assert.match(environment.CFLAGS, /--sysroot=\/t\/sysroot\/x86_64-linux-gnu\/x86_64-linux-gnu\/sysroot/);
  assert.match(environment.LDFLAGS, /-stdlib=libc\+\+ .*-fuse-ld=lld .*-L\/t\/o -lc\+\+abi/);
  assert.equal(environment.PKG_CONFIG_SYSROOT_DIR, '/t/sysroot/x86_64-linux-gnu/x86_64-linux-gnu/sysroot');
  assert.ok(environment.PKG_CONFIG_LIBDIR.startsWith('/t/sysroot/'), 'pkg-config must search only the sysroot');
});

test('provenance check needs a complete record per substituted file and exact digests for rebuilt output', async () => {
  const { checkProvenance, provenanceRows } = await import('./verify-native-provenance.mjs');
  const archive = 'a'.repeat(64), digest = 'b'.repeat(64);
  const rows = provenanceRows(`intro\n\n| Path | SHA-256 | Source | Toolchain | Command | License |\n| --- | --- | --- | --- | --- | --- |\n` +
    `| \`electron-host/locales/*.pak\` | \`archive:${archive}\` | release | official | unzip | BSD |\n` +
    `| \`electron-host/resources/app/x.node\` | \`${digest}\` | npm | gcc | node-gyp | MIT |\n\nafter`);
  assert.equal(rows.length, 2);
  const archives = new Map([[archive, 'https://example.invalid/electron.zip']]);
  const good = [{ path: 'electron-host/locales/en-US.pak', origin: 'https://example.invalid/electron.zip#locales/en-US.pak', sha256: 'c'.repeat(64), status: 'identical' },
    { path: 'electron-host/resources/app/x.node', sha256: digest, status: 'rebuilt' }];
  assert.deepEqual(checkProvenance(rows, good, archives), []);
  assert.match(checkProvenance(rows, [{ ...good[1], sha256: 'd'.repeat(64) }], archives)[0], /recorded b+ but packaged d+/);
  assert.match(checkProvenance(rows, [{ path: 'electron-host/libnew.so', sha256: digest }], archives)[0], /no provenance record/);
  assert.match(checkProvenance(rows, [{ ...good[0], origin: 'https://elsewhere.invalid/#x' }], archives)[0], /not from the recorded archive/);
});
