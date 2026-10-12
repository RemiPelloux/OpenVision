import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileHash, digest } from './import-files.mjs';
import { cachedFile } from './build-cache.mjs';
import { localWorkbench } from './local-workbench.mjs';
import { disableCloudFeatures } from './cloud-features.mjs';
import { customModels } from './custom-models.mjs';
import { customizeStream } from './stream-customization.mjs';
import { requestProviderRouting } from './provider-routing.mjs';

async function customize(root, variant) {
  const relative = `out/vs/workbench/workbench.${variant}.main.js`;
  const path = join(root, 'source/app', relative);
  const before = await readFile(path, 'utf8');
  const local = localWorkbench(before, variant);
  const cloud = disableCloudFeatures(local.text);
  const stream = customizeStream(customModels(cloud.text, variant));
  const after = requestProviderRouting(stream.text, variant);
  if (before === after) return;
  const backup = join(root, 'backups/bundle-customizations', relative);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
  await writeFile(join(root, `build/bundle-${variant}.json`), JSON.stringify({ path: relative,
    before_sha256: digest(before), after_sha256: digest(after),
    patches: [...local.patches, ...cloud.patches, ...stream.patches].map(({ reason, start, end }) => ({ reason, start, end })),
    changed_at: new Date().toISOString() }, null, 2) + '\n');
}

export async function customizeBundles(root) {
  const dependencies = ['desktop/bundle-customization.mjs', 'desktop/build-cache.mjs', 'desktop/import-files.mjs',
    'desktop/local-workbench.mjs', 'desktop/cloud-features.mjs', 'desktop/custom-models.mjs', 'desktop/model-picker.mjs',
    'desktop/stream-customization.mjs',
    'desktop/provider-routing.mjs',
    'tooling/dependencies.mjs', 'tooling/package-lock.json'];
  const hashes = [];
  for (const file of dependencies) {
    const hash = await fileHash(join(root, file));
    if (!hash) throw new Error(`Customization dependency missing: ${file}`);
    hashes.push(hash);
  }
  const recipe = digest(JSON.stringify([process.versions.node, hashes]));
  for (const variant of ['desktop', 'glass']) {
    const rebuilt = await cachedFile({
      path: join(root, `source/app/out/vs/workbench/workbench.${variant}.main.js`),
      marker: join(root, `build/cache/${variant}.json`), recipe,
    }, () => customize(root, variant));
    console.log(`${variant} customizations: ${rebuilt ? 'verified' : 'unchanged (cached)'}`);
  }
}
