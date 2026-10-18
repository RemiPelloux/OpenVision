import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, readdir, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { marker as nativeMarker } from './native-addon-diagnostics.mjs';
import { protectedIds, guardProtectedInstall, guardProtectedScan, installProtectedExtensions, marker } from './protected-extensions.mjs';

const host = `var table = {"anysphere.cursor-agent-worker":{"main.js":"${'a'.repeat(64)}"},"anysphere.cursor-mcp":{}};
  function verify(o) { return o in table && _verifyExtensionFiles(); }
  class H { async _doLoadModule(e) {} }`;
const install = `    async install(e, t = {}) {
      const { location: i, cleanup: r } = await this.downloadVsix(e);
      try {
        const s = await Gl(Zi(i.fsPath)),
          n = Ft(s.publisher, s.name);
        if (!mo.includes(n)) {}
        return n;
      } finally { await r(); }
    }`;
const scan = `function dedup(t, s, r) {
    t.forEach((o) => {
      const a = s.get(o.identifier);
      if (a)
        if (a.isBuiltin) {
          if (BCo(a.version, o.version)) {
            r.warn(
              \`Skipping extension \${o.extensionLocation.path} in favour of the builtin extension \${a.extensionLocation.path}.\`,
            );
            return;
          }
          o.isBuiltin = !0;
        } else r.warn("dup");
      s.set(o.identifier, o);
    });
    return s;
  }`;

test('protected identifiers come from the extension host integrity table', () => {
  assert.deepEqual(protectedIds(host), ['anysphere.cursor-agent-worker', 'anysphere.cursor-mcp']);
  assert.throws(() => protectedIds('var x = {};'), /owner/);
});

test('VSIX install refuses a protected identifier and keeps other installs unchanged', async () => {
  const ids = protectedIds(host);
  const guarded = guardProtectedInstall(install, ids);
  assert.equal(guardProtectedInstall(guarded, ids), guarded, 'idempotent');
  assert.throws(() => guardProtectedInstall(guarded, ['other.id']), /list changed/);
  assert.throws(() => guardProtectedInstall('async install() {}', ids), /contract missing/);
  const method = new Function('Gl', 'Zi', 'Ft', 'mo', `return { downloadVsix: async () => ({ location: { fsPath: '/x' }, cleanup: async () => {} }), ${guarded.trim()} };`);
  const manager = manifest => method(async () => manifest, path => path, (p, n) => `${p}.${n}`.toLowerCase(), []);
  await assert.rejects(manager({ publisher: 'Anysphere', name: 'cursor-mcp', version: '99.0.0' }).install('/x.vsix'),
    /Unable to install extension 'anysphere\.cursor-mcp': it would replace an extension bundled with OpenVision/);
  assert.equal(await manager({ publisher: 'someone', name: 'cursor-mcp', version: '1.0.0' }).install('/x.vsix'), 'someone.cursor-mcp');
  await assert.rejects(manager({ version: '1.0.0' }).install('/x.vsix'), /package\.json must declare "publisher", "name"\./);
  await assert.rejects(manager({ publisher: 'p', name: ' ', version: 1 }).install('/x.vsix'), /must declare "name", "version"\./);
});

test('scan keeps the protected builtin and still lets ordinary builtins be overridden', () => {
  const ids = protectedIds(host);
  const guarded = guardProtectedScan(scan, ids);
  assert.ok(guarded.includes(marker));
  assert.equal(guardProtectedScan(guarded, ids), guarded);
  const dedup = new Function('BCo', `${guarded}; return dedup;`)((a, b) => a > b);
  const warnings = [];
  const builtin = id => ({ identifier: { value: id }, isBuiltin: true, version: '1.0.0', extensionLocation: { path: `/app/${id}` } });
  const user = id => ({ identifier: { value: id }, version: '9.0.0', extensionLocation: { path: `/user/${id}` } });
  const map = new Map(), keyed = { get: key => map.get(key.value), set: (key, value) => map.set(key.value, value) };
  for (const id of ['anysphere.cursor-mcp', 'vscode.git']) keyed.set({ value: id }, builtin(id));
  dedup([user('Anysphere.cursor-mcp'.toLowerCase()), user('vscode.git')], keyed, { warn: text => warnings.push(text) });
  assert.equal(map.get('anysphere.cursor-mcp').extensionLocation.path, '/app/anysphere.cursor-mcp');
  assert.equal(map.get('vscode.git').extensionLocation.path, '/user/vscode.git');
  assert.match(warnings[0], /would replace the protected bundled extension \/app\/anysphere\.cursor-mcp/);
});

test('installation patches all owners once, keeps first backups and refuses drift', async t => {
  const root = await mkdtemp(join(tmpdir(), 'openvision-protected-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const files = { 'out/vs/workbench/api/node/extensionHostProcess.js': host,
    'out/vs/code/electron-utility/sharedProcess/sharedProcessMain.js': install, 'out/vs/code/node/cliProcessMain.js': install,
    'out/vs/workbench/workbench.desktop.main.js': scan, 'out/vs/workbench/workbench.glass.main.js': scan };
  for (const [path, text] of Object.entries(files)) {
    await mkdir(dirname(join(root, 'source/app', path)), { recursive: true });
    await writeFile(join(root, 'source/app', path), text);
  }
  assert.equal((await installProtectedExtensions(root)).changed.length, 4);
  assert.deepEqual((await installProtectedExtensions(root)).changed, []);
  assert.equal((await readdir(join(root, 'backups/protected-extensions'))).length, 2, 'one backup per distinct original');
  const shared = await readFile(join(root, 'source/app/out/vs/code/node/cliProcessMain.js'), 'utf8');
  assert.equal(shared.split(marker).length, 2);
  await writeFile(join(root, 'source/app/out/vs/workbench/workbench.glass.main.js'), 'function changed() {}');
  await assert.rejects(installProtectedExtensions(root), /contract missing/);
});

test('assembled build carries each OV-702 guard exactly once', async t => {
  const app = join(dirname(fileURLToPath(import.meta.url)), '..', 'source/app/out');
  const built = await readFile(join(app, 'vs/workbench/api/node/extensionHostProcess.js'), 'utf8').catch(() => null);
  if (built === null) return t.skip('desktop not assembled');
  assert.equal(built.split(nativeMarker).length, 2);
  const ids = protectedIds(built);
  for (const file of ['vs/code/electron-utility/sharedProcess/sharedProcessMain.js', 'vs/code/node/cliProcessMain.js',
    'vs/workbench/workbench.desktop.main.js', 'vs/workbench/workbench.glass.main.js']) {
    const text = await readFile(join(app, file), 'utf8');
    assert.equal(text.split(marker).length, 2, file);
    assert.ok(text.includes(JSON.stringify(ids)), file);
  }
});
