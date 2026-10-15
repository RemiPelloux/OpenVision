import { readFile } from 'node:fs/promises';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { readableApp } from './recovered-source.mjs';

// Execute the recovered preparation method; dependencies supply editor/provider boundaries.
export async function preparationSource(variant) {
  return readFile(new URL(`out/vs/workbench/workbench.${variant}.main.js`, readableApp), 'utf8');
}

export function preparationMethod(source, variant) {
  const owner = parseExpressionAt(source, source.lastIndexOf('class ', source.indexOf('async getStream({')),
    { ecmaVersion: 'latest' });
  const method = owner.body.body.find(item => item.key?.name === 'immediatelyFireCppFromTrigger');
  const text = source.slice(method.start, method.end);
  const denied = text.match(/instanceof ([\w$]+)/)[1];
  const trigger = text.match(/([\w$]+)\.CursorPrediction/)[1];
  class HookDenied extends Error {}
  const make = new Function(variant === 'desktop' ? 'zc' : 'Rl', denied, trigger,
    `return ({${text}}).immediatelyFireCppFromTrigger;`);
  return { method: make({ localMode: true }, HookDenied, {}), HookDenied,
    nonlocal: make({ localMode: false }, HookDenied, {}) };
}

export function preparationDebouncer(source, clock) {
  const start = source.lastIndexOf('class ', source.indexOf('async shouldDebounce('));
  const owner = parseExpressionAt(source, start, { ecmaVersion: 'latest' });
  const text = source.slice(owner.start, owner.end);
  const request = owner.body.body.find(item => item.key?.name === 'runRequest').value;
  const uuid = request.body.body.flatMap(item => item.declarations ?? [])
    .find(item => item.init?.type === 'CallExpression' && item.init.callee.type === 'Identifier').init.callee.name;
  let next = 0;
  return new (new Function('performance', 'setTimeout', uuid, `return (${text});`)(
    { now: () => clock.now, timeOrigin: 0 }, callback => clock.pending.push(callback), () => String(++next)))(400, 400, 5000);
}

export function preparationFixture(method, { text = 'const value = ', debounce = async () => false } = {}) {
  const counts = { reads: 0, hooks: 0, runCppCalls: 0, debounces: 0 };
  const model = { version: 1, disposed: false, getValue() { counts.reads++; return text; },
    getVersionId() { return this.version; }, isDisposed() { return this.disposed; } };
  const editor = { model, getModel() { return this.model; }, getPosition: () => ({ lineNumber: 1, column: 1 }) };
  const context = {
    _reactiveStorageService: { applicationUserPersistentStorage: { oneTimeSettings: {} } },
    disableAndHideCopilotSuggestion() {}, reallowCopilotIfWePreviousHidCopilotSuggestions() {},
    shouldSkipCppBecauseFileIsTooLarge: () => false,
    debouncer: { shouldDebounce: id => { counts.debounces++; return debounce(id); } },
    async executeBeforeTabFileReadHook() { counts.hooks++; },
    usingFusedCursorPredictionModel: () => false, allowCppTriggerInComments: () => true,
    overlapsInlineDiff: () => false,
    async runCpp(request) { counts.runCppCalls++; return { success: !await this.debouncer.shouldDebounce(request.generationUUID) }; },
    streams: [],
  };
  return { counts, context, model, editor,
    run: (id = 'generation', controller = new AbortController()) =>
      method.call(context, { fsPath: '/fixture.js' }, editor, controller, id, 0, 'typing') };
}
