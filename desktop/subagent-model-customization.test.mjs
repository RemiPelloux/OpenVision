import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { subagentModelParameters, subagentStatusReasoning } from './subagent-model-customization.mjs';
import { scopedAgentProviders } from './agent-provider-customization.mjs';
import { readableApp } from './recovered-source.mjs';

test('local Task configuration retains an unavailable explicit override instead of inheriting the parent', async () => {
  const source = await readFile(new URL('extensions/cursor-agent-exec/dist/main.js', readableApp), 'utf8');
  const patched = scopedAgentProviders(source);
  assert.equal(scopedAgentProviders(patched), patched);
  const start = patched.indexOf('function IEe(e) {');
  const node = parseExpressionAt(patched, start, { ecmaVersion: 'latest' });
  const configure = runInNewContext(`(${patched.slice(start, node.end)})`, {
    wbe: options => options.localProvider,
    ube: (id, models) => models.some(model => model.id === id) ? id : undefined,
    Y0: type => type, One: 'native-policy', Ane: models => models,
  });
  const options = { modelId: 'parent', availableModels: [{ modelId: 'parent' }], localProvider: { kind: 'http' } };
  for (const modelId of ['disabled', 'deleted', 'openvision-model:provider:manual']) {
    const config = configure({ ...options, subagentModelOverrides: [{ subagentType: 'explore',
      selection: { case: 'model', value: { modelId } } }] });
    assert.equal(config.subagentModelOverrides.explore.type, 'model');
    assert.equal(config.subagentModelOverrides.explore.modelId, modelId);
  }
  for (const mode of ['disabled', 'inherit']) {
    const config = configure({ ...options, subagentModelOverrides: [{ subagentType: 'explore', selection: { case: mode, value: true } }] });
    assert.equal(config.subagentModelOverrides.explore.type, mode);
  }
});

for (const variant of ['desktop', 'glass']) {
  test(`${variant} recovered subagent selection preserves explicit and saved reasoning through native validation`, async t => {
    let source;
    try { source = await readFile(new URL(`../source/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8'); }
    catch (error) { if (error.code === 'ENOENT') return t.skip('Prepared workbench required'); throw error; }
    const patched = subagentModelParameters(source, variant);
    assert.equal(subagentModelParameters(patched, variant), patched);
    const index = patched.indexOf('/* OpenVision preserve subagent model parameters */');
    const start = patched.lastIndexOf('=> {', index);
    const parametersStart = patched.lastIndexOf('(', start);
    const node = parseExpressionAt(patched, parametersStart, {ecmaVersion:'latest'});
    assert.equal(node.type, 'ArrowFunctionExpression');
    const body = patched.slice(node.start, node.end);
    const serviceName = body.match(/([\w$]+)\.resolveModelNameToCatalog/)[1];
    const disabled = body.match(/=== ([\w$]+) \|\|/)[1];
    const inherit = body.match(/\|\| [\w$]+ === ([\w$]+)/)[1];
    const mapper = body.match(/\.map\(([\w$]+)\)/)[1];
    const mode = body.match(/\?\? ([\w$]+)\)/)[1];
    const calls = [], saved = [{id:'reasoning',value:'high'}];
    const build = runInNewContext(`(${body})`, {
      [disabled]:'disabled', [inherit]:'inherit', [mapper]:value=>value, [mode]:false,
      [serviceName]:{
        resolveModelNameToCatalog:name=>name,
        getModelParameterPreferences:()=>({parameters:saved}),
        resolveModelParametersForSubmission:(id,parameters)=>{
          calls.push(id); return parameters.filter(p=>['none','high','max'].includes(p.value));
        },
      },
    });
    assert.equal(build('gpt').parameters[0].value, 'high');
    assert.equal(build('gpt',[{id:'reasoning',value:'max'}]).parameters[0].value, 'max');
    assert.equal(build('deepseek',[{id:'reasoning',value:'none'}]).parameters[0].value, 'none');
    assert.equal(build('unknown',[{id:'reasoning',value:'invented'}]).parameters.length, 0);
    assert.equal(build('inherit').parameters.length, 0);
    assert.equal(build('disabled').parameters.length, 0);
    assert.deepEqual(calls, ['gpt','gpt','deepseek','unknown']);
  });
}

for (const variant of ['desktop', 'glass']) {
  test(`${variant} Task status label names the reasoning the child request sends`, async t => {
    let source;
    try { source = await readFile(new URL(`../source/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8'); }
    catch (error) { if (error.code === 'ENOENT') return t.skip('Prepared workbench required'); throw error; }
    const patched = subagentStatusReasoning(source, variant);
    assert.equal(subagentStatusReasoning(patched, variant), patched);
    const helperStart = patched.indexOf('function openvisionEffectiveTaskModel(');
    const helper = parseExpressionAt(patched, helperStart, { ecmaVersion: 'latest' });
    const owner = parseExpressionAt(patched, helper.end + 1, { ecmaVersion: 'latest' });
    const label = patched.slice(owner.start, owner.end);
    const name = label.match(/^function ([\w$]+)\(/)[1];
    // Both row renderers pass their services; the reference resolver is never reached without them.
    assert.equal(patched.split(new RegExp(`[^\\w$.]${name.replace('$', '\\$')}\\([^;]*\\.modelConfigService\\)`)).length, 3);
    const [, lookup, format, slug, hidden] = label.match(/const [\w$]+ = ([\w$]+)\([\s\S]*?return ([\w$]+)\([\s\S]*?const [\w$]+ = ([\w$]+)\([\s\S]*?=== ([\w$]+)\)/);
    const flag = { localMode: true };
    const preferences = { 'openvision-model:p:parent': [{ id: 'reasoning', value: 'high' }] };
    const service = { resolveModelParametersForSubmission: (id, saved) => saved.length ? saved : preferences[id] ?? [] };
    const run = runInNewContext(`${patched.slice(helper.start, helper.end)}\n(${label})`, {
      [variant === 'desktop' ? 'zc' : 'Rl']: flag, [hidden]: 'hidden', [slug]: value => value,
      [lookup]: (models, value) => models.includes(value) ? { modelId: value, parameters: [] } : undefined,
      [format]: (model) => `${model.modelId} · ${model.parameters[0]?.value ?? 'Provider default'}`,
    });
    const models = ['openvision-model:p:parent', 'openvision-model:p:child'];
    const config = (modelId, parameters = []) => ({ modelName: modelId, selectedModels: [{ modelId, parameters }] });
    // Inherited: the child chat stores no parameters; the request uses the saved High preference.
    assert.equal(run('openvision-model:p:parent', models, config('openvision-model:p:parent'), service), 'openvision-model:p:parent · high');
    // Explicit: parameters saved on the child selection win, as they do for the request.
    assert.equal(run('openvision-model:p:child', models, config('openvision-model:p:child', [{ id: 'reasoning', value: 'ultra' }]), service),
      'openvision-model:p:child · ultra');
    // Default: nothing saved anywhere, so the provider default really is sent.
    assert.equal(run('openvision-model:p:child', models, config('openvision-model:p:child'), service), 'openvision-model:p:child · Provider default');
    // A selection-only label (no Task model name) resolves the same way.
    assert.equal(run(undefined, models, config('openvision-model:p:parent'), service), 'openvision-model:p:parent · high');
    // Outside local mode, or without services, the recovered behavior is unchanged.
    assert.equal(run('openvision-model:p:parent', models, config('openvision-model:p:parent')), 'openvision-model:p:parent · Provider default');
    flag.localMode = false;
    assert.equal(run('openvision-model:p:parent', models, config('openvision-model:p:parent'), service), 'openvision-model:p:parent · Provider default');
  });
}
