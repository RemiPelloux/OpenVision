import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { failedBrowserToolRow } from './tool-row-status-customization.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// Shape of the recovered tool-row display state (3.21.13 desktop variant).
const fixture = `
const T1g = e => e.case, f1l = e => ({ action: "Navigated to", details: e.args.url });
const hpt = e => e.result?.resultCase === "error", L1l = (s, { loading, hasError }) => loading ? "Running" : hasError ? "Run" : "Ran";
const DFt = e => ({ providerIdentifier: e.providerIdentifier ?? "", toolName: e.toolName ?? "", name: e.rawName ?? "" });
const MFt = e => e.toolName.startsWith("browser_");
function Pme({ vm: e, loading: t, hasError: n, nowMs: i = Date.now(), startedAtMs: r }) {
  const s = T1g(e),
    { details: o } = f1l(e),
    a = n ?? (!t && hpt(e)),
    c = L1l(s, { loading: t, hasError: a }),
    l = a ? "attempted" : o;
  switch (e.case) {
    case "mcpToolCall": {
      const h = DFt(e),
        m = !!(e.providerIdentifier ?? e.toolName ?? e.rawName);
      if (m && MFt(h)) {
        const f = f1l(e);
        return { action: f.action, details: f.details };
      }
      return { action: c, details: l };
    }
    default:
      return { action: c, details: l };
  }
}
return Pme;`;
const call = (resultCase, toolName = 'browser_navigate') => ({ case: 'mcpToolCall', toolName, providerIdentifier: 'cursor-ide-browser',
  args: { url: 'http://127.0.0.1/' }, result: resultCase ? { resultCase } : undefined });

test('a failed browser tool row shows the failure; success and running rows are unchanged', () => {
  const patched = failedBrowserToolRow(fixture);
  assert.equal(failedBrowserToolRow(patched), patched, 'idempotent');
  const before = new Function(fixture)(), after = new Function(patched)();
  assert.deepEqual(before({ vm: call('error'), loading: false }), { action: 'Navigated to', details: 'http://127.0.0.1/' }, 'the defect');
  assert.deepEqual(after({ vm: call('error'), loading: false }), { action: 'Failed', details: 'browser_navigate' });
  assert.deepEqual(after({ vm: call('success'), loading: false, hasError: true }), { action: 'Failed', details: 'browser_navigate' });
  for (const [vm, loading] of [[call('success'), false], [call(undefined), true]])
    assert.deepEqual(after({ vm, loading }), before({ vm, loading }));
  const other = { ...call('error', 'memory_probe'), providerIdentifier: 'user-x' };
  assert.deepEqual(after({ vm: other, loading: false }), before({ vm: other, loading: false }), 'other MCP rows unchanged');
});

test('failed browser row refuses a changed owner', () => {
  assert.throws(() => failedBrowserToolRow(fixture.replace('hasError: n, nowMs', 'failed: n, nowMs')), /display state owner/);
  assert.throws(() => failedBrowserToolRow(fixture.replace('if (m && MFt(h)) {', 'if (MFt(h)) {')), /branch changed/);
});

for (const variant of ['desktop', 'glass']) {
  const path = join(root, `source/app/out/vs/workbench/workbench.${variant}.main.js`);
  test(`built ${variant} workbench shows failed browser rows once`, { skip: !existsSync(path) }, async () => {
    const text = failedBrowserToolRow(await readFile(path, 'utf8'));
    assert.equal(text.split('OpenVision failed browser tool row v1').length, 2);
  });
}
