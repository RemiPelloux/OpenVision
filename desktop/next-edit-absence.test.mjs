import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { predictionRequests, predictionSelectors } from './verify-completion-next-edit.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const workbench = join(root, 'source/app/out/vs/workbench/workbench.desktop.main.js');

test('prediction traffic classifier matches both recovered producers only', () => {
  assert.deepEqual(predictionRequests([
    'vscode-file://vscode-app/out/vs/workbench/workbench.desktop.main.js',
    'http://127.0.0.1:4000/v1/chat/completions',
    'https://api2.cursor.sh/aiserver.v1.AiService/StreamNextCursorPrediction',
    'https://us.cursor.sh/aiserver.v1.CppService/StreamCpp',
  ]), ['https://api2.cursor.sh/aiserver.v1.AiService/StreamNextCursorPrediction', 'https://us.cursor.sh/aiserver.v1.CppService/StreamCpp']);
  assert.ok(predictionSelectors.includes('.cursor-prediction-hint-line-widget'));
});

test('local Tab provider never produces a fused cursor prediction', async () => {
  const provider = await readFile(join(root, 'desktop/completion-provider.js'), 'utf8');
  const cases = [...provider.matchAll(/yield \{ case: '([\w]+)'/g)].map(match => match[1]).sort();
  assert.deepEqual(cases, ['modelInfo', 'rangeToReplaceOneIndexed', 'text']);
  assert.match(provider, /isFusedCursorPredictionModel: false/);
  assert.doesNotMatch(provider, /cursorPredictionTarget|fusedCursorPrediction/);
});

test('built workbench has no StreamNextCursorPrediction caller and local config disables fused prediction',
  { skip: !existsSync(workbench) }, async () => {
    const text = await readFile(workbench, 'utf8');
    assert.equal(text.split('.streamNextCursorPrediction(').length, 1, 'no direct RPC caller');
    assert.equal(text.split('streamNextCursorPrediction: {').length, 2, 'only the service descriptor declares it');
    assert.match(text, /if \(zc\.localMode\) \{[\s\S]{0,400}isFusedCursorPredictionModel: false/);
  });
