import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { subagentModelParameters } from './subagent-model-customization.mjs';

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
