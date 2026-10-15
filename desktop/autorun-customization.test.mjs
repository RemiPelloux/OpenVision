import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { keepApprovalDefault } from './autorun-customization.mjs';
import { readableApp } from './recovered-source.mjs';

for (const variant of ['desktop', 'glass']) {
  test(`${variant}: Agent commands keep approval-first defaults without the command sandbox`, async t => {
    let original;
    try { original = await readFile(new URL(`out/vs/workbench/workbench.${variant}.main.js`, readableApp), 'utf8'); }
    catch (error) { if (error.code === 'ENOENT') return t.skip('Recovered workbench unavailable'); throw error; }
    const patched = keepApprovalDefault(original);
    assert.equal(keepApprovalDefault(patched), patched);
    assert.match(patched, /approval-first Agent commands v2 \*\/\n  return undefined;/);
    assert.match(patched, /_setEffectiveSandboxSupport\(\w+\) \{\n    this\._sandboxSupportedObs\.set\(!1, void 0\);\n    return;/);
    assert.match(patched, /\(this\.storageService, "sandboxSupported", !1\)/);
  });
}
