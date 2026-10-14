import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { customizeMemory } from './memory-customization.mjs';
import { customizeLegacyMemories } from './legacy-memory-customization.mjs';

function extract(source, name) {
  const start = source.indexOf(`function ${name}(`);
  assert.notEqual(start, -1);
  const node = parseExpressionAt(source, start, { ecmaVersion: 'latest' });
  return source.slice(start, node.end);
}

for (const variant of ['desktop', 'glass']) {
  for (const [label, path] of [['original', '../../cursor/readable'], ['prepared', '../source']]) {
    test(`${variant} ${label}: legacy review is mounted only in Rules with owned subscriptions`, async t => {
      let original;
      try { original = await readFile(new URL(`${path}/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8'); }
      catch (error) { if (error.code === 'ENOENT') return t.skip('Recovered workbench unavailable'); throw error; }
      const source = customizeLegacyMemories(customizeMemory(original, variant), variant);
      assert.equal(customizeLegacyMemories(source, variant), source);
      const desktop = variant === 'desktop';
      const manage = extract(source, desktop ? 'jLf' : 'CdS');
      assert.match(manage, /![a-z]+ && [a-z]+ === "rules" \? [et]\.openvisionRulesBanner : null/);
      assert.match(source, /openvisionRulesBanner: i\.manage\.openvisionRulesBanner/);
      assert.match(source, /openvisionRulesBanner: [et]\.openvisionRulesBanner/);
      assert.match(extract(source, desktop ? 'yPy' : 'RkC'), /OpenvisionLegacyMemories, \{ services: [et] \}/);
      const names = ['knowledgeBaseService', 'workspaceContextService', 'fileService', 'editorService'];
      const services = Object.fromEntries(names.map(name => [name, { name }]));
      services.instantiationService = { invokeFunction: callback => callback({ get: service => service }) };
      let effect, passed, removed = 0, mounted;
      const host = { current: { replaceChildren: element => { mounted = element; } } };
      const element = {};
      const component = runInNewContext(`(${extract(source, 'OpenvisionLegacyMemories')})`, {
        [desktop ? 'HD' : 'bR']: 'rules', [desktop ? 'we' : 'Ze']: 'URI', [desktop ? 'hi' : '_r']: 'Buffer',
        [desktop ? 'fb' : '$y']: (type, props) => ({ type, props }),
        openvisionMemoryUseRef: () => host, openvisionMemoryUseEffect: callback => { effect = callback; },
        openvisionCreateLegacyMemoryReview: options => { passed = options; return { element, dispose: () => { removed++; } }; },
      });
      assert.equal(component({ services }).props.ref, host);
      assert.equal(passed, undefined, 'Render cannot read or import records');
      const dispose = effect();
      assert.equal(passed.knowledge, services[names[0]]);
      assert.equal(passed.workspace, services[names[1]]);
      assert.equal(passed.rules, 'rules');
      assert.equal(mounted, element); dispose(); assert.equal(removed, 1);
      if (!original.includes('/* OpenVision reviewed legacy memories'))
        assert.throws(() => customizeLegacyMemories(original.replace('manageSkillsBanner: i.manage.skillsBanner,', ''), variant), /boundary changed/);
    });
  }
}
