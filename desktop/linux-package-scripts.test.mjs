import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, access, readdir } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { linuxLauncher, linuxDesktopEntry, linuxDesktopEntryRemoval } from './linux-package-scripts.mjs';

const root = resolve(import.meta.dirname, '..');
const linux = { skip: process.platform !== 'linux' };
const validator = spawnSync('desktop-file-validate', ['--help']).error ? null : 'desktop-file-validate';

// A fake package whose host executable records its arguments instead of starting the editor.
async function fixture(name = 'Open Vision ünïcødé $`"%\\ path') {
  await mkdir(join(root, 'logs'), { recursive: true });
  const directory = await mkdtemp(join(root, 'logs/linux-package-scripts-'));
  const portable = join(directory, name);
  await mkdir(join(portable, 'electron-host'), { recursive: true });
  await writeFile(join(portable, 'OpenVision'), linuxLauncher, { mode: 0o755 });
  await writeFile(join(portable, 'install-desktop-entry.sh'), linuxDesktopEntry, { mode: 0o755 });
  await writeFile(join(portable, 'uninstall-desktop-entry.sh'), linuxDesktopEntryRemoval, { mode: 0o755 });
  await writeFile(join(portable, 'openvision.png'), 'icon fixture');
  await writeFile(join(portable, 'electron-host/openvision'),
    `#!/bin/sh\nlocale charmap > "$(dirname "$0")/charmap.txt" 2>/dev/null\nfor argument in "$@"; do printf '%s\\n' "$argument"; done > "$(dirname "$0")/arguments.txt"\n`, { mode: 0o755 });
  return { directory, portable, data: join(directory, 'xdg data') };
}
const run = (script, data, args = [], env = {}) => spawnSync(script, args, { encoding: 'utf8', timeout: 10000,
  env: { PATH: process.env.PATH, HOME: '/nonexistent', XDG_DATA_HOME: data, ...env } });
async function launched(context, args, env) {
  assert.equal(run(join(context.portable, 'OpenVision'), context.data, args, env).status, 0);
  const file = join(context.portable, 'electron-host/arguments.txt');
  for (let attempt = 0; attempt < 100; attempt++) {
    try { return (await readFile(file, 'utf8')).trimEnd().split('\n'); }
    catch (error) { if (error.code !== 'ENOENT') throw error; await new Promise(next => setTimeout(next, 50)); }
  }
  throw Error('Launcher did not start the host executable');
}

test('launcher keeps the profile inside the package and opens the welcome screen without arguments', linux, async () => {
  const context = await fixture();
  const host = join(context.portable, 'electron-host');
  assert.deepEqual(await launched(context, []), ['--disable-setuid-sandbox=true', '--user-data-dir', join(host, 'data/local'),
    '--extensions-dir', join(host, 'data/local-extensions'), '--disable-updates', '--disable-telemetry',
    '--disable-crash-reporter', '--glass']);
});

test('launcher passes a folder with spaces through as one argument', linux, async () => {
  const context = await fixture();
  const args = await launched(context, ['/tmp/a project folder']);
  assert.equal(args.at(-1), '/tmp/a project folder');
  assert.ok(!args.includes('--glass'));
});

test('launcher selects a UTF-8 character type under the C locale so non-ASCII package paths load', linux, async () => {
  for (const env of [{ LC_ALL: 'C' }, { LANG: 'C' }, {}]) {
    const context = await fixture();
    await launched(context, [], env);
    assert.equal((await readFile(join(context.portable, 'electron-host/charmap.txt'), 'utf8')).trim(), 'UTF-8', JSON.stringify(env));
  }
});

test('desktop entry quotes a path with spaces, Unicode and reserved characters', linux, async () => {
  const context = await fixture();
  const result = run(join(context.portable, 'install-desktop-entry.sh'), context.data);
  assert.equal(result.status, 0, result.stderr);
  const entry = await readFile(join(context.data, 'applications/openvision.desktop'), 'utf8');
  const escaped = join(context.portable, 'OpenVision').replace(/[\\"`$]/g, '\\$&').replaceAll('\\', '\\\\')
    .replaceAll('%', '%%');
  assert.ok(entry.includes(`Exec="${escaped}" %F\n`), entry);
  assert.match(entry, /^StartupWMClass=openvision$/m);
  assert.equal(await readFile(join(context.data, 'icons/hicolor/256x256/apps/openvision.png'), 'utf8'), 'icon fixture');
  if (validator) {
    const validation = spawnSync(validator, [join(context.data, 'applications/openvision.desktop')], { encoding: 'utf8' });
    assert.equal(validation.status, 0, validation.stdout + validation.stderr);
    assert.doesNotMatch(validation.stdout + validation.stderr, /error/i);
  }
});

test('desktop entry removal deletes only the entry and icon', linux, async () => {
  const context = await fixture();
  await mkdir(join(context.data, 'applications'), { recursive: true });
  await writeFile(join(context.data, 'applications/other.desktop'), '[Desktop Entry]\nName=Other\nType=Application\nExec=other\n');
  await mkdir(join(context.data, 'icons/hicolor/256x256/apps'), { recursive: true });
  await writeFile(join(context.data, 'icons/hicolor/256x256/apps/other.png'), 'other');
  assert.equal(run(join(context.portable, 'install-desktop-entry.sh'), context.data).status, 0);
  const result = run(join(context.portable, 'uninstall-desktop-entry.sh'), context.data);
  assert.equal(result.status, 0, result.stderr);
  await assert.rejects(access(join(context.data, 'applications/openvision.desktop')));
  await assert.rejects(access(join(context.data, 'icons/hicolor/256x256/apps/openvision.png')));
  assert.ok((await readdir(join(context.data, 'applications'))).includes('other.desktop'));
  assert.deepEqual(await readdir(join(context.data, 'icons/hicolor/256x256/apps')), ['other.png']);
  assert.equal(run(join(context.portable, 'uninstall-desktop-entry.sh'), context.data).status, 0, 'Removal is idempotent');
});

test('desktop entry removal keeps an entry it did not install', linux, async () => {
  const context = await fixture();
  await mkdir(join(context.data, 'applications'), { recursive: true });
  const foreign = '[Desktop Entry]\nName=OpenVision\nType=Application\nExec=/opt/openvision/openvision\n';
  await writeFile(join(context.data, 'applications/openvision.desktop'), foreign);
  const result = run(join(context.portable, 'uninstall-desktop-entry.sh'), context.data);
  assert.notEqual(result.status, 0);
  assert.equal(await readFile(join(context.data, 'applications/openvision.desktop'), 'utf8'), foreign);
});
