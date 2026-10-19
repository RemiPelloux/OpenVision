import { readFile, writeFile, copyFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { backedWrite } from './telemetry-settings.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';
import { cancelPendingCompletionOnEscape } from './completion-keyboard.mjs';
import { isolatePartialCompletionUndo, isolateFullCompletionUndo } from './completion-undo.mjs';
import { guardCompletionAcceptVersion } from './completion-accept.mjs';
import { debounceCompletionPreparation } from './completion-preparation.mjs';

const marker = '/* OpenVision custom autocomplete v1 */';
const fullInsertionMarker = '/* OpenVision complete local insertion v1 */';

function completeLocalInsertion(text, variant) {
  if (text.includes(fullInsertionMarker)) return text;
  const consumerAnchor = text.indexOf('nextValue.value is not a string in vanillaHandleStream');
  const consumerStart = text.lastIndexOf('async function ', consumerAnchor);
  const consumer = parseExpressionAt(text, consumerStart, { ecmaVersion: 'latest' });
  if (!consumer.id?.name || consumer.end <= consumerAnchor) throw new Error('Completion text consumer missing.');
  const requestAnchor = text.indexOf('async getStream({');
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', requestAnchor), { ecmaVersion: 'latest' });
  const method = owner.body.body.find(item => item.key?.name === 'handleStreamOutput');
  const source = text.slice(method?.start, method?.end);
  const assignments = [...source.matchAll(/\[([\w$]+), ([\w$]+)\] = await ([\w$]+)\(([\w$]+), ([\w$]+), \(([\w$]+)\.lineNumber \?\? 1\) - ([\w$]+)\.startLineNumber\)/g)];
  if (assignments.length !== 1) throw new Error('Completion chunk consumer missing or ambiguous.');
  const match = assignments[0], offset = method.start + match.index;
  const local = variant === 'desktop' ? 'zc.localMode' : 'Rl.localMode';
  const replacement = `${fullInsertionMarker} [${match[1]}, ${match[2]}] = ${local}
    ? [await ${consumer.id.name}(${match[4]}), undefined]
    : await ${match[3]}(${match[4]}, ${match[5]}, (${match[6]}.lineNumber ?? 1) - ${match[7]}.startLineNumber)`;
  return text.slice(0, offset) + replacement + text.slice(offset + match[0].length);
}

export function customCompletion(text, variant) {
  text = debounceCompletionPreparation(text, variant);
  text = cancelPendingCompletionOnEscape(text, variant);
  text = isolatePartialCompletionUndo(text, variant);
  text = isolateFullCompletionUndo(text, variant);
  text = guardCompletionAcceptVersion(text, variant);
  const anchor = text.indexOf('async getStream({');
  if (anchor < 0 || text.indexOf('async getStream({', anchor + 1) >= 0)
    throw new Error('Completion request owner missing or ambiguous.');
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', anchor), { ecmaVersion: 'latest' });
  const configTypes = [...text.matchAll(/([\w$]+)\s*=\s*[\w$]+\.makeMessageType\(\s*"aiserver\.v1\.CppConfigResponse"/g)];
  if (configTypes.length !== 1) throw new Error('Completion configuration message owner missing or ambiguous.');
  const configType = configTypes[0][1];
  if (text.includes(marker)) {
    const config = owner.body.body.find(method => method.key?.name === 'loadCppConfigIncludingHandlingProAccess');
    const guard = config.value.body.body[0];
    const call = guard?.consequent?.body?.find(item => item.expression?.callee?.property?.name === 'setApplicationUserPersistentStorage');
    const value = call?.expression?.arguments[1];
    if (value?.type === 'NewExpression' && value.callee.name === configType) return completeLocalInsertion(text, variant);
    if (value?.type !== 'ObjectExpression') throw new Error('Local completion configuration changed.');
    return completeLocalInsertion(text.slice(0, value.start) + `new ${configType}(${text.slice(value.start, value.end)})` + text.slice(value.end), variant);
  }
  const local = variant === 'desktop' ? 'zc.localMode' : 'Rl.localMode';
  const secret = variant === 'desktop' ? 'K6e' : 'oHe';
  const request = owner.body.body.find(method => method.key?.name === 'getStream').value;
  const keys = request.params[0]?.properties;
  if (!keys?.every(property => property.value.type === 'Identifier')) throw new Error('Completion parameters changed.');
  const object = keys.map(property => `${property.key.name}: ${property.value.name}`).join(', ');
  const guards = {
    getStream: `if (${local}) return openvisionLocalCompletion(this, {${object}}, ${secret});`,
    isAllowedCpp: `if (${local}) return !!openvisionCompletionModel(this._storageService);`,
    loadCppConfigIncludingHandlingProAccess: `if (${local}) {
      this.lastReloadConfigTimestamp = Date.now();
      this._reactiveStorageService.setApplicationUserPersistentStorage("cppConfig", new ${configType}({
        shouldLetUserEnableCppEvenIfNotPro: true, isGhostText: true,
        isFusedCursorPredictionModel: false, clientDebounceDurationMillis: 400,
        globalDebounceDurationMillis: 400, maxNumberOfClearedSuggestionsSinceLastAccept: 10,
      })); return;
    }`,
    keepCppModelStateUpdated: `if (${local}) return;`,
  };
  const edits = Object.entries(guards).map(([name, guard]) => {
    const method = owner.body.body.find(item => item.key?.name === name);
    if (!method?.value?.body) throw new Error(`Completion method missing: ${name}`);
    return { offset: method.value.body.start + 1, text: `\n${guard}\n` };
  });
  for (const edit of edits.sort((a, b) => b.offset - a.offset))
    text = text.slice(0, edit.offset) + edit.text + text.slice(edit.offset);
  return completeLocalInsertion(`${marker}\nimport {localCompletion as openvisionLocalCompletion, completionModel as openvisionCompletionModel} from "../code/electron-sandbox/workbench/openvision-completion-provider.js";\n${text}`, variant);
}

export async function installCompletion(root) {
  const out = join(root, 'source/app/out');
  const helper = await readFile(join(root, 'desktop/completion-provider.js'), 'utf8');
  await writeFile(join(out, 'vs/code/electron-sandbox/workbench/openvision-completion-provider.js'),
    helper.replace("from './model-providers.js'", "from './openvision-model-providers.js'"));
  await copyFile(join(root, 'desktop/completion-ipc.mjs'), join(out, 'openvision-completion-ipc.js'));
  const dependencies = ['desktop/completion-customization.mjs', 'desktop/completion-keyboard.mjs', 'desktop/completion-undo.mjs', 'desktop/completion-accept.mjs', 'desktop/completion-preparation.mjs', 'desktop/telemetry-settings.mjs',
    'desktop/build-cache.mjs', 'desktop/import-files.mjs', 'tooling/dependencies.mjs', 'tooling/package-lock.json'];
  const hashes = await Promise.all(dependencies.map(path => fileHash(join(root, path))));
  if (hashes.some(hash => !hash)) throw new Error('Completion customization dependency missing.');
  const recipe = digest(JSON.stringify([process.versions.node, hashes]));
  for (const variant of ['desktop', 'glass']) {
    const relative = `source/app/out/vs/workbench/workbench.${variant}.main.js`;
    await cachedFile({ path: join(root, relative), recipe,
      marker: join(root, `build/cache/completion-${variant}.json`) }, async () => {
      const before = await readFile(join(root, relative), 'utf8');
      await backedWrite(root, relative, customCompletion(before, variant));
    });
  }
  const main = await readFile(join(out, 'main.js'), 'utf8');
  const statement = 'import "./openvision-completion-ipc.js";';
  if (!main.includes(statement)) await backedWrite(root, 'source/app/out/main.js', statement + '\n' + main);
}
