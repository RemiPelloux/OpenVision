import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { customizeMemory } from './memory-customization.mjs';

function extract(text, name) {
  const start = text.indexOf(`function ${name}(`);
  assert.notEqual(start, -1);
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  return { node, body: text.slice(start, node.end) };
}

const variants = {
  desktop: { mapper: 'FHf', renderer: 'Xhg', service: 'Lr', jsx: 'fb', dependencies: ['zn', 'yi', 'HD', 'an'], uri: 'we', buffer: 'hi' },
  glass: { mapper: '_ES', renderer: 'dF_', service: 'Qe', jsx: '$y', dependencies: ['dr', 'Kr', 'bR', 'er'], uri: 'Ze', buffer: '_r' },
};

for (const [variant, names] of Object.entries(variants)) {
  for (const [label, directory] of [['original', '../../cursor/readable'], ['prepared', '../source']]) {
    test(`${variant} ${label}: approved project memories retain native rules and own their React lifecycle`, async t => {
      let source;
      try { source = await readFile(new URL(`${directory}/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8'); }
      catch (error) { if (error.code === 'ENOENT') return t.skip('Recovered workbench unavailable'); throw error; }
      const patched = customizeMemory(source, variant);
      assert.equal(customizeMemory(patched, variant), patched, 'Rebuild is idempotent');
      const renderer = extract(patched, names.renderer).body;
      assert.match(renderer, /language-openvision-memory/);
      assert.match(renderer, /OpenvisionMemoryCard, \{ text: n, isStreaming: o \}/);
      assert.doesNotMatch(renderer, /openvisionMemoryUse(?:Ref|Effect)/, 'Conditional branch cannot add hooks');
      const withoutMemoryBranch = value => value.replace(/if \(i === "language-openvision-memory"[\s\S]*?isStreaming: o \}\);\n  /, '');
      assert.equal(withoutMemoryBranch(renderer), withoutMemoryBranch(extract(source, names.renderer).body),
        'All existing markdown behavior is retained');

      const mapper = extract(patched, names.mapper).body;
      const bindings = { openvisionWorkspaceMemoryPolicy: 'Ask before saving a project memory.' };
      for (const [, constructor] of mapper.matchAll(/new ([\w$]+)\(/g))
        bindings[constructor] = class { constructor(value) { Object.assign(this, value); } };
      bindings[mapper.match(/source: ([\w$]+)\.USER/)[1]] = { USER: 'user', TEAM: 'team' };
      const map = runInNewContext(`(${mapper})`, bindings);
      const rules = map({ userRules: [{ id: 'user-rule', knowledge: 'User text' },
        { id: 'legacy-generated', knowledge: 'Do not include globally', isGenerated: true }],
      teamRules: [{ filename: 'team-rule', body: 'Team text', globs: ['*.js'], isRequired: true }] });
      assert.equal(rules.length, 3);
      assert.equal(rules[0].fullPath, 'openvision://project-memory-policy');
      assert.equal(rules[0].content, bindings.openvisionWorkspaceMemoryPolicy);
      assert.equal(rules[0].source, 'user');
      assert.equal(rules[0].type.type.case, 'global');
      assert.equal(rules[1].fullPath, 'team-rule');
      assert.equal(rules[1].type.type.case, 'fileGlobbed');
      assert.equal(rules[1].isRequired, true);
      assert.equal(rules[2].fullPath, 'user-rule');
      assert.equal(rules[2].content, 'User text');

      const inlineTail = patched.slice(patched.indexOf('async applyUserRulesMigrationToExplicitContext('))
        .replace('async ', 'async function ');
      const inlineNode = parseExpressionAt(inlineTail, 0, { ecmaVersion: 'latest' });
      const inline = runInNewContext(`(${inlineTail.slice(0, inlineNode.end)})`);
      const explicit = { context: 'Existing context', clone() { return { ...this }; } };
      const knowledgeBaseService = { items: [{ knowledge: 'Approved user rule' }, { knowledge: 'Legacy hidden memory', isGenerated: true }] };
      assert.equal((await inline.call({ knowledgeBaseService }, explicit)).context, 'Approved user rule');
      knowledgeBaseService.items.shift();
      assert.equal(await inline.call({ knowledgeBaseService }, explicit), explicit, 'Legacy-only data leaves explicit context intact');

      let effect, effectDependencies, passed, disposed = 0, removed = 0, mounted;
      const host = { current: { replaceChildren: element => { mounted = element; } } };
      const element = { remove: () => { removed++; } }, requested = [];
      const services = Object.fromEntries(names.dependencies.map(name => [name, { service: name }]));
      const wrapper = runInNewContext(`(${extract(patched, 'OpenvisionMemoryCard').body})`, {
        ...services, [names.uri]: 'native URI', [names.buffer]: 'native buffer',
        [names.service]: service => { requested.push(service); return service; },
        [names.jsx]: (type, props) => ({ type, props }), openvisionMemoryUseRef: () => host,
        openvisionMemoryUseEffect: (callback, dependencies) => { effect = callback; effectDependencies = dependencies; },
        openvisionCreateMemoryCard: options => { passed = options; return { element, dispose: () => { disposed++; } }; },
      });
      const rendered = wrapper({ text: '{"title":"Suggestion"}', isStreaming: true });
      assert.equal(rendered.type, 'div');
      assert.equal(rendered.props.ref, host);
      assert.deepEqual(requested, names.dependencies.map(name => services[name]));
      assert.equal(passed, undefined, 'Rendering does not create or persist a memory');
      const cleanup = effect();
      assert.equal(mounted, element);
      assert.equal(passed.isStreaming, true);
      assert.equal(passed.text, '{"title":"Suggestion"}');
      assert.equal(passed.workspace, services[names.dependencies[0]]);
      assert.equal(passed.files, services[names.dependencies[1]]);
      assert.equal(passed.rules, services[names.dependencies[2]]);
      assert.equal(passed.editor, services[names.dependencies[3]]);
      assert.equal(passed.URI, 'native URI');
      assert.equal(passed.Buffer, 'native buffer');
      assert.equal(effectDependencies.length, 6);
      cleanup();
      assert.equal(disposed, 1);
      assert.equal(removed, 1);

      if (!source.includes('/* OpenVision approved project memories')) {
        assert.throws(() => customizeMemory(source.replace('if (i === "language-mermaid"', 'if (i === "other-language"'), variant), /markdown branch changed/);
        assert.throws(() => customizeMemory(source + `\nfunction ${names.mapper}() {}`, variant), /ambiguous/);
      }
    });
  }
}

test('Project memory customization rejects an unknown variant', () => {
  assert.throws(() => customizeMemory('', 'other'), /Unsupported project memory variant/);
});
