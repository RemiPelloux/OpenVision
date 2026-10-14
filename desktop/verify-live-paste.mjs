import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

export async function prepareLivePaste({ app, input, project, marker }) {
  const text = marker + '\r\n' + 'PASTE_BODY_MUST_STAY_ON_DISK '.repeat(420) + '\r\n';
  await input.fill('Use Read on the pasted text file below. Reply with exactly its first line. Do not read any other file, edit files, run commands or use other tools. ');
  await input.press('ControlOrMeta+End');
  await app.evaluate(({ clipboard }, value) => clipboard.writeText(value), text);
  await input.press('ControlOrMeta+v');
  // Submit immediately: the production submit owner must join the pending write.
  await input.press('Enter');
  return { text, project, marker };
}

export function inspectPasteRequest(body, result) {
  assert.ok(body.includes('.openvision') && body.includes('.txt'), 'Initial request must contain the paste file reference');
  assert.ok(!body.includes('PASTE_BODY_MUST_STAY_ON_DISK'), 'Raw pasted text must stay out of the initial request');
  result.initialRequestContainsOnlyReference = true;
}

export async function verifySavedLivePaste({ text, project }, result) {
  const directory = join(project, '.openvision/paste');
  const files = (await readdir(directory)).filter(name => name.endsWith('.txt'));
  assert.equal(files.length, 1);
  assert.equal(await readFile(join(directory, files[0]), 'utf8'), text);
  result.exactFileContents = true;
  result.characters = text.length;
}
