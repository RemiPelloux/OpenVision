// Verification overlay only: a disposable copy of desktop/ whose import transaction
// calls a probe after each commit rename, so a verifier can SIGKILL an import or
// restore deterministically between file replacements. Production never loads it.
import { cp, mkdir, readFile, symlink, unlink, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const probe = (stage, index) =>
  `process.env.OPENVISION_IMPORT_PROBE && await (await import(process.env.OPENVISION_IMPORT_PROBE)).afterReplace(${JSON.stringify(stage)}, ${index}, change.path);`;
const anchors = [
  ['import', '      await replaceFile(temporaries[index], change.path, { expectedHash: change.before });\n'],
  ['restore', '      else await rm(change.path);\n'],
];

export function instrumentImportTransaction(text) {
  for (const [stage, anchor] of anchors) {
    const count = text.split(anchor).length - 1;
    if (count !== 1) throw new Error(`Expected one ${stage} commit probe anchor, found ${count}`);
    text = text.replace(anchor, `${anchor}      ${probe(stage, 'index')}\n`);
  }
  return text;
}

// Real copies, not links: ESM resolves links to their targets, which would load
// the uninstrumented siblings. tooling/ is shared read-only.
export async function createImportOverlay(root, directory) {
  await mkdir(directory, { recursive: true });
  await cp(join(root, 'desktop'), join(directory, 'desktop'), { recursive: true });
  await symlink(join(root, 'tooling'), join(directory, 'tooling'), 'dir');
  const path = join(directory, 'desktop/import-transaction.mjs'), text = await readFile(path, 'utf8');
  await unlink(path); await writeFile(path, instrumentImportTransaction(text), { flag: 'wx' });
  return { root: directory, desktop: join(directory, 'desktop'), probe: join(directory, 'desktop/verify-import-faults-probe.mjs') };
}
