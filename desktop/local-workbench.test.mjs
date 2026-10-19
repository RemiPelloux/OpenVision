import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { localWorkbench } from './local-workbench.mjs';
import { enableLocalMode } from './source-branding.mjs';
import { disableCloudFeatures } from './cloud-features.mjs';
import { readableApp } from './recovered-source.mjs';
import vm from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';

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
    assert.ok(cloud.patches.some(patch => patch.reason === 'cloud repository readiness watchers'));
    const readiness = cloud.text.indexOf('setupRepoReadinessWatchers() {');
    assert.match(cloud.text.slice(readiness, readiness + 200), /\{\s*return; \/\* OpenVision: hosted cloud repository readiness disabled \*\//,
      'No environment.json watch, git hook or poll is registered');
    assert.ok(!cloud.text.includes('label: "Cloud Agent Approval Banners While Focused"'));
    assert.ok(!cloud.text.includes('{ id: "cloud", label: "Cloud" }'));
    assert.equal(disableCloudFeatures(localWorkbench(cloud.text, variant).text).text, cloud.text,
      'Customization must be idempotent');
    assert.throws(() => localWorkbench(recovered.replace('    maybeOnboard() {', '    renamedOnboard() {'), variant),
      /Missing or ambiguous local customization anchor/, 'Unrecognized recovery must fail before writing');
  });

  test(`${variant}: local startup never registers hosted conversation watchers or their dependencies`, async () => {
    const recovered = await readFile(input, 'utf8');
    const { text, patches } = localWorkbench(recovered, variant);
    const patch = patches.find(item => item.reason === 'local conversation metadata ownership');
    assert.ok(patch);
    const index = text.indexOf('"composer.localMetadataSyncContribution"');
    const prefix = /![\w$]+\.localMode && [\w$]+\($/.exec(text.slice(0, index))?.[0];
    assert.ok(prefix);
    const start = index - prefix.length;
    const expression = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
    const guard = expression.type === 'SequenceExpression' ? expression.expressions[0] : expression;
    assert.equal(guard.type, 'LogicalExpression');
    const call = guard.right, flag = guard.left.argument.object.name;
    let registrations = 0, dependencies = 0;
    const constructor = class { constructor() { dependencies++; } };
    const context = { [flag]: { localMode: true }, [call.arguments[1].name]: constructor,
      [call.arguments[2].object.name]: { AfterRestored: 'restored' },
      [call.callee.name]: (id, owner, lifecycle) => {
        assert.equal(id, 'composer.localMetadataSyncContribution');
        assert.equal(lifecycle, 'restored'); registrations++; return new owner();
      } };
    const script = new vm.Script(text.slice(guard.start, guard.end));
    script.runInNewContext(context);
    assert.equal(registrations, 0); assert.equal(dependencies, 0);
    context[flag].localMode = false; script.runInNewContext(context);
    assert.equal(registrations, 1); assert.equal(dependencies, 1);
    assert.throws(() => localWorkbench(recovered.replace('"composer.localMetadataSyncContribution"',
      '"composer.renamedMetadataContribution"'), variant), /Missing or ambiguous/);
    assert.throws(() => localWorkbench(recovered + '\n"composer.localMetadataSyncContribution";', variant), /ambiguous/);
  });

  test(`${variant}: local Explorer startup waits for restored parts and rejects lifecycle drift`, async () => {
    const recovered = await readFile(input, 'utf8');
    const { text, patches } = localWorkbench(recovered, variant);
    const patch = patches.find(item => item.reason === 'local startup restoration order');
    assert.ok(patch);
    const original = recovered.slice(patch.start, patch.end);
    const flag = variant === 'desktop' ? 'zc' : 'Rl';
    const phase = original.split('.')[0];
    const script = new vm.Script(patch.after);
    for (const local of [true, false]) assert.equal(script.runInNewContext({
      [flag]: { localMode: local }, [phase]: { AfterRestored: 'restored', BlockRestore: 'blocking' },
    }), local ? 'restored' : 'blocking');
    assert.equal(localWorkbench(text, variant).text, text);
    const changed = recovered.slice(0, patch.start) + `${phase}.Eventually` + recovered.slice(patch.end);
    assert.throws(() => localWorkbench(changed, variant), /restoration contract changed/);
    assert.throws(() => localWorkbench(recovered.replace('"workbench.contrib.onboarding.onStart.cursor"',
      '"workbench.contrib.onboarding.renamed"'), variant), /Missing or ambiguous/);
  });
}
