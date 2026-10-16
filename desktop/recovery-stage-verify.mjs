// Validate retained producer reports against their actual files before resuming.
import { readFile } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, resolve, sep } from 'node:path';

const digest = async path => {
  const hash = createHash('sha256');
  for await (const chunk of createReadStream(path)) hash.update(chunk);
  return hash.digest('hex');
};
const load = async path => JSON.parse(await readFile(path, 'utf8'));
function local(root, path) {
  const result = resolve(root, path);
  if (!result.startsWith(resolve(root) + sep)) throw new Error('Report path escapes snapshot: ' + path);
  return result;
}
async function verify(root, path, expected) {
  if (typeof expected !== 'string' || await digest(local(root, path)) !== expected)
    throw new Error('Retained recovery digest mismatch: ' + path);
}
export async function verifyStage(root, name, report) {
  const data = await load(join(root, report));
  if (name === 'snapshot') {
    for (const file of data.files) await verify(root, 'artifacts/installation/' + file.path, file.sha256);
  } else if (name === 'readable') {
    for (const file of data.files) await verify(root, file.output, file.output_sha256);
    if (data.files.length !== data.total) throw new Error('Incomplete readability report');
  } else if (name === 'recover-bundles' || name === 'raw-recovery') {
    for (const row of data.files) {
      await verify(root, 'artifacts/installation/resources/app/' + row.input, row.input_sha256);
      for (const file of row.files ?? []) await verify(root, row.output + '/' + file.path, file.sha256);
    }
  } else if (name === 'rea-analysis') {
    for (const task of data.tasks) {
      if (task.error) continue; // Explicit failed attempts remain failures, never successful reuse.
      const summary = await load(local(root, task.summary_path));
      const bundle = await load(local(root, task.bundle_path));
      if (summary.isError || summary.envelope.evidence_id !== task.evidence_id || !bundle)
        throw new Error('Invalid retained REA record: ' + task.task);
    }
  }
  return data;
}
