import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { sharp } from '../tooling/dependencies.mjs';
import { workbenchAssets } from './source-assets.mjs';
import { detectInstallation } from './installation-location.mjs';
import { platformLayout } from './platform.mjs';
import { brandAgentWindowTitle, productBranding } from './source-branding.mjs';
import { linuxLauncher, portableArguments, privateResources } from './portable-layout.mjs';

test('agent title belongs to window defaults and refresh is idempotent', () => {
  const source = '(defaults = {HEIGHT_GLASS: 520,}), (title = "Cursor Agents"), (compatibility = "cursor")';
  const branded = brandAgentWindowTitle(source);
  assert.equal(branded, source.replace('Cursor Agents', 'OpenVision'));
  assert.equal(brandAgentWindowTitle(branded), branded);
  assert.throws(() => brandAgentWindowTitle(source + source), /one agent window title owner/);
  assert.throws(() => brandAgentWindowTitle(source.replace('Cursor Agents', 'Unexpected')), /Unexpected agent window title/);
});

test('original update endpoints are unreachable: no update URLs, no updater, updates disabled at launch', async t => {
  const app = await mkdtemp(join(tmpdir(), 'openvision-updates-'));
  t.after(() => rm(app, { recursive: true, force: true }));
  await writeFile(join(app, 'package.json'), JSON.stringify({ name: 'Cursor', desktopName: 'cursor.desktop' }));
  await writeFile(join(app, 'product.json'), JSON.stringify({ nameShort: 'Cursor', updateUrl: 'https://api2.cursor.sh/updates',
    backupUpdateUrl: 'https://downloads.cursor.com/updates', checksums: { 'out/main.js': 'x' }, quality: 'stable' }));
  await productBranding(app);
  const product = JSON.parse(await readFile(join(app, 'product.json'), 'utf8'));
  for (const key of ['updateUrl', 'backupUpdateUrl', 'checksums']) assert.equal(key in product, false, key);
  assert.doesNotMatch(JSON.stringify(product), /cursor\.sh|downloads\.cursor\.com|\/updates/);
  // The AppImage updater is never packaged, and every launch disables the update service.
  assert.ok(privateResources.has('appimageupdatetool.AppImage'));
  assert.ok(portableArguments('/host').includes('--disable-updates'));
  assert.match(linuxLauncher, /--disable-updates/);
  for (const argument of portableArguments('$host')) assert.ok(linuxLauncher.includes(argument.replace('$host', '"$host').replace(/(data\/local(?:-extensions)?)$/, '$1"')), argument);
});

test('brand refresh migrates a prepared workbench to SVG without duplicating bootstrap assets', async t => {
  const app = await mkdtemp(join(tmpdir(), 'openvision-brand-'));
  t.after(() => rm(app, { recursive: true, force: true }));
  const directory = join(app, 'out/vs/code/electron-sandbox/workbench');
  await mkdir(directory, { recursive: true });
  const path = join(directory, 'workbench.html');
  await writeFile(path, '<!doctype html><html><head><link rel="icon" href="./openvision-logo.png"></head><body></body></html>');
  const svg = await readFile(new URL('../assets/openvision.svg', import.meta.url));
  const png = await sharp(svg).resize(256, 256).png().toBuffer();
  await workbenchAssets(app, svg, png);
  const first = await readFile(path, 'utf8');
  await workbenchAssets(app, svg, png);
  assert.equal(await readFile(path, 'utf8'), first);
  assert.equal(first.match(/openvision-local-profile\.js/g)?.length, 1);
  assert.equal(first.match(/openvision-local-profile\.css/g)?.length, 1);
  assert.equal(first.match(/openvision-logo\.svg/g)?.length, 1);
  assert.equal((await sharp(join(directory, 'openvision-logo.svg')).metadata()).width, 256);
});

test('automatic input detection requires both the native executable and application package', async t => {
  const root = await mkdtemp(join(tmpdir(), 'openvision-detect-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const layout = platformLayout(root);
  const candidates = [join(root, 'missing'), join(root, 'installed')];
  const executable = join(candidates[1], layout.installationExecutable);
  await mkdir(join(executable, '..'), { recursive: true });
  await writeFile(executable, 'fixture');
  await assert.rejects(detectInstallation(process, candidates), /not found/);
  const packagePath = join(candidates[1], layout.appPrefix, 'package.json');
  await mkdir(join(packagePath, '..'), { recursive: true });
  await writeFile(packagePath, '{}');
  assert.equal(await detectInstallation(process, candidates), candidates[1]);
});

const emptyScreen = `var Evb = ft('<div><img class=h-[30px] alt="Cursor logo">'),
  Ivb = ft(
    '<div class="text-xs text-text-link-foreground">Sign in',
  );
function Landing(e) {
  const Pe = Me(() => Ae() ? "../../../workbench/browser/parts/editor/media/lockup-horizontal-dark.png"
    : "../../../workbench/browser/parts/editor/media/lockup-horizontal-light.png");
  return ue(yt, { get when() { return i(); },
    get fallback() {
      return (() => { var je = Ivb(); return (je.addEventListener("click", () => { qGd(e.i, wo, (Xe) => { Xe.login(); }); }), je); })();
    },
    get children() { return Evb(); } });
}`;

test('empty editor window shows the OpenVision mark and no hosted sign-in, idempotently', async () => {
  const { brandEmptyEditorScreen, emptyScreenLogo } = await import('./source-branding.mjs');
  const branded = brandEmptyEditorScreen(emptyScreen);
  assert.doesNotMatch(branded, /lockup-horizontal|alt="Cursor logo"|Ivb\(\)/);
  assert.match(branded, /alt="OpenVision"/);
  assert.equal(branded.split(emptyScreenLogo).length - 1, 2);
  assert.match(branded, /get fallback\(\) \{ \/\* OpenVision: local profiles have no hosted sign-in \*\/ return null; \}/);
  assert.match(branded, /get children\(\) \{ return Evb\(\); \}/);
  assert.equal(brandEmptyEditorScreen(branded), branded);
  assert.throws(() => brandEmptyEditorScreen(emptyScreen.replace('Xe.login()', 'Xe.other()')), /sign-in fallback changed/);
  assert.throws(() => brandEmptyEditorScreen(emptyScreen + emptyScreen), /dark and light|one empty-screen/);
});
