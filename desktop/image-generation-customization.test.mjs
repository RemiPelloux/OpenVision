import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { hideGenerateImageTool, imageGenerationTargets } from './image-generation-customization.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// Shape of both registration sites in the recovered Agent runtimes (3.21.13).
const fixture = `
function tools(e, v) {
  const C = [], k = [];
  if (
    (C.push("Read"),
    e.enableGenerateImage)
  ) {
    const r = e.imageGenerationConcurrencyLimiter ?? limit(2);
    C.push("GenerateImage");
  }
  if (
    (k.push("Read"),
    e.enableGenerateImage && !v)
  ) {
    const t = e.imageGenerationConcurrencyLimiter ?? limit(2);
    k.push("GenerateImage");
  }
  return [C, k];
}
const limit = n => n;
return tools;`;

test('GenerateImage is never registered; other tools are unchanged', () => {
  const patched = hideGenerateImageTool(fixture);
  assert.equal(hideGenerateImageTool(patched), patched, 'idempotent');
  const before = new Function(fixture)(), after = new Function(patched)();
  assert.deepEqual(before({ enableGenerateImage: true }, false), [['Read', 'GenerateImage'], ['Read', 'GenerateImage']]);
  for (const enableGenerateImage of [true, false, undefined]) for (const subagent of [true, false])
    assert.deepEqual(after({ enableGenerateImage }, subagent), [['Read'], ['Read']]);
});

test('GenerateImage gate refuses a changed owner', () => {
  assert.throws(() => hideGenerateImageTool(fixture.replaceAll('imageGenerationConcurrencyLimiter', 'limiter')), /registration owner/);
  assert.throws(() => hideGenerateImageTool(fixture + fixture), /ambiguous/);
  const patched = hideGenerateImageTool(fixture);
  assert.throws(() => hideGenerateImageTool(patched.replace('/* OpenVision image generation hidden v1 */', '')), /gate changed/);
});

for (const relative of imageGenerationTargets) {
  const path = join(root, 'source/app', relative);
  test(`built ${relative} registers no GenerateImage tool`, { skip: !existsSync(path) }, async () => {
    const text = hideGenerateImageTool(await readFile(path, 'utf8'));
    assert.equal(text.split('OpenVision image generation hidden v1').length, 3);
  });
}
