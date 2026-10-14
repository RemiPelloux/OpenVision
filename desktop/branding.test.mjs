import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { sharp } from '../tooling/dependencies.mjs';
import { workbenchAssets } from './source-assets.mjs';
import { detectInstallation } from './installation-location.mjs';
import { platformLayout } from './platform.mjs';
import { brandAgentWindowTitle } from './source-branding.mjs';

test('agent title belongs to window defaults and refresh is idempotent', () => {
  const source = '(defaults = {HEIGHT_GLASS: 520,}), (title = "Cursor Agents"), (compatibility = "cursor")';
  const branded = brandAgentWindowTitle(source);
  assert.equal(branded, source.replace('Cursor Agents', 'OpenVision'));
  assert.equal(brandAgentWindowTitle(branded), branded);
  assert.throws(() => brandAgentWindowTitle(source + source), /one agent window title owner/);
  assert.throws(() => brandAgentWindowTitle(source.replace('Cursor Agents', 'Unexpected')), /Unexpected agent window title/);
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
