import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { digest } from './import-files.mjs';

export const grammarMissMarker = '/* OpenVision worker grammar miss is no tokenizer v1 */';
export const grammarMissMessage = 'No TM Grammar registered for this language.';

// The background tokenization worker asks its grammar factory for a model's
// grammar whenever the model is created or changes language. createGrammar
// rejects with "No TM Grammar registered for this language." for a language
// that has no TextMate grammar (plaintext, a language an extension registers
// without one), and the worker's getOrCreateGrammar neither catches it nor
// forgets the rejected promise, so the rejection surfaces as an uncaught error
// in the window (seen as a page error on Debian when the project window opens).
// The main thread already treats that same message as "no tokenizer"
// (TextMateTokenizationFeature.createTokenizationSupport); the worker now does
// too: it resolves null, which _resetTokenization reads as "do not tokenize",
// and drops the cache entry so a later grammar registration is used. Any other
// grammar error still rejects.
export const textMateWorkerBundles = Object.freeze([
  'source/app/out/vs/workbench/services/textMate/browser/backgroundTokenization/worker/textMateTokenizationWorker.workerMain.js',
]);

const owner = /async getOrCreateGrammar\((\w+), (\w+)\) \{\s*const (\w+) = await (\w+)\._grammarFactory;\s*return \3\s*\? \(\4\._grammarCache\[\2\] \|\| \(\4\._grammarCache\[\2\] = \3\.createGrammar\(\1, \2\)\),\s*\4\._grammarCache\[\2\]\)\s*: Promise\.resolve\(null\);\s*\}/g;

export function treatWorkerGrammarMissAsNone(text) {
  if (text.includes(grammarMissMarker)) {
    if (text.split(grammarMissMarker).length !== 2) throw Error('TextMate worker grammar customization applied more than once');
    return text;
  }
  const matches = [...text.matchAll(owner)];
  if (matches.length !== 1) throw Error(`TextMate worker getOrCreateGrammar owner missing or ambiguous (${matches.length})`);
  if (!text.includes(`"${grammarMissMessage}"`)) throw Error('TextMate worker grammar miss message changed');
  return text.replace(owner, (_, language, encoded, factory, worker) =>
    `async getOrCreateGrammar(${language}, ${encoded}) { ${grammarMissMarker}
              const ${factory} = await ${worker}._grammarFactory;
              if (!${factory}) return null;
              if (!${worker}._grammarCache[${encoded}]) {
                const openvisionGrammar = (${worker}._grammarCache[${encoded}] = ${factory}.createGrammar(${language}, ${encoded}).catch(error => {
                  if (${worker}._grammarCache[${encoded}] === openvisionGrammar) delete ${worker}._grammarCache[${encoded}];
                  if (error?.message === ${JSON.stringify(grammarMissMessage)}) return null;
                  throw error;
                }));
              }
              return ${worker}._grammarCache[${encoded}];
            }`);
}

export async function installTextMateWorkerGrammarMiss(root) {
  let changed = 0;
  for (const relative of textMateWorkerBundles) {
    const path = join(root, relative), before = await readFile(path, 'utf8');
    const after = treatWorkerGrammarMissAsNone(before);
    if (before === after) continue;
    // Keep the first original of each distinct input; never overwrite a backup.
    const backup = join(root, 'backups/textmate-worker', `${digest(before)}.js`);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
    changed++;
  }
  if (changed) console.log('Background tokenization treats a language without a TextMate grammar as untokenized');
}
