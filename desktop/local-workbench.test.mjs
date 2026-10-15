import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { localWorkbench } from './local-workbench.mjs';
import { enableLocalMode } from './source-branding.mjs';
import { disableCloudFeatures } from './cloud-features.mjs';
import { readableApp } from './recovered-source.mjs';

for (const variant of ['desktop', 'glass']) {
  const input = new URL(`out/vs/workbench/workbench.${variant}.main.js`, readableApp);
  test(`${variant}: recovered source gains local UI without forging authentication`, async () => {
    const recovered = await readFile(input, 'utf8');
    const originalAuth = /\n  isAuthenticated\(\) \{[\s\S]*?\n  \}/.exec(recovered)?.[0];
    assert.ok(originalAuth, 'Real authentication method must be identified');
    const flagged = enableLocalMode(recovered, input.pathname).text;
    const { text, patches } = localWorkbench(flagged, variant);
    assert.ok(patches.some(patch => patch.reason === 'maybeOnboard'));
    assert.ok(patches.some(patch => patch.reason === 'account settings'));
    assert.equal(patches.filter(patch => patch.reason === 'local agent composer').length, 2);
    assert.ok(text.includes(originalAuth), 'Cloud authentication implementation must remain intact');
    assert.ok(text.includes('openvision-profile-settings'));
    assert.ok(text.includes('children: "Import from Cursor"'));
    const cloud = disableCloudFeatures(text);
    assert.ok(cloud.patches.some(patch => patch.reason === 'cloud settings navigation'));
    assert.ok(cloud.patches.some(patch => patch.reason === 'cloud command and menu registration'));
    assert.ok(cloud.patches.some(patch => patch.reason === 'cloud notification setting'));
    assert.ok(!cloud.text.includes('label: "Cloud Agent Approval Banners While Focused"'));
    assert.ok(!cloud.text.includes('{ id: "cloud", label: "Cloud" }'));
    assert.equal(disableCloudFeatures(localWorkbench(cloud.text, variant).text).text, cloud.text,
      'Customization must be idempotent');
    assert.throws(() => localWorkbench(recovered.replace('    maybeOnboard() {', '    renamedOnboard() {'), variant),
      /Missing or ambiguous local customization anchor/, 'Unrecognized recovery must fail before writing');
  });
}
