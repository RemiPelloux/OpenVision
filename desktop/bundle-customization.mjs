import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileHash, digest } from './import-files.mjs';
import { cachedFile } from './build-cache.mjs';
import { localWorkbench } from './local-workbench.mjs';
import { disableCloudFeatures } from './cloud-features.mjs';
import { customModels } from './custom-models.mjs';
import { customizeStream } from './stream-customization.mjs';
import { requestProviderRouting } from './provider-routing.mjs';
import { providerSelectionErrors } from './model-selection-customization.mjs';
import { localUserRules } from './rules-customization.mjs';
import { subagentModelParameters } from './subagent-model-customization.mjs';
import { completionCancellation } from './completion-cancellation.mjs';
import { providerManualRetry } from './provider-error-ui.mjs';
import { persistProviderFailures } from './provider-failure-persistence.mjs';
import { customizeWelcome } from './welcome-customization.mjs';
import { customizePaste } from './paste-customization.mjs';
import { customizeMemory } from './memory-customization.mjs';
import { customizeLegacyMemories } from './legacy-memory-customization.mjs';
import { fixWorkspaceSaveAll } from './save-all-customization.mjs';
import { fixSaveAllCommands } from './save-all-commands.mjs';
import { customInlineEdit } from './inline-edit-customization.mjs';
import { customizeProjectHome } from './project-home-customization.mjs';
import { customizeThemes } from './theme-customization.mjs';
import { cancelClosedRunningChat } from './chat-close-cancellation.mjs';
import { customizeApplicationStorage } from './application-storage-customization.mjs';

async function customize(root, variant) {
  const relative = `out/vs/workbench/workbench.${variant}.main.js`;
  const path = join(root, 'source/app', relative);
  const before = await readFile(path, 'utf8');
  const local = localWorkbench(before, variant);
  const cloud = disableCloudFeatures(local.text);
  const stream = customizeStream(customModels(cloud.text, variant));
  const providers = providerSelectionErrors(requestProviderRouting(stream.text, variant));
  const welcome = customizeWelcome(persistProviderFailures(providerManualRetry(completionCancellation(localUserRules(subagentModelParameters(providers, variant), variant)))), variant);
  const home = customizeProjectHome(customInlineEdit(fixSaveAllCommands(fixWorkspaceSaveAll(customizeLegacyMemories(customizeMemory(customizePaste(welcome, variant), variant), variant))), variant), variant);
  const after = customizeApplicationStorage(cancelClosedRunningChat(customizeThemes(home, variant)), variant);
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
    'desktop/local-workbench.mjs', 'desktop/cloud-features.mjs', 'desktop/custom-models.mjs', 'desktop/model-picker.mjs', 'desktop/model-picker-layout.mjs',
    'desktop/model-selection-customization.mjs',
    'desktop/storage-write-ownership.mjs',
    'desktop/provider-error-ui.mjs',
    'desktop/provider-failure-persistence.mjs',
    'desktop/welcome-customization.mjs',
    'desktop/paste-customization.mjs',
    'desktop/memory-customization.mjs',
    'desktop/legacy-memory-customization.mjs',
    'desktop/save-all-customization.mjs', 'desktop/save-all-commands.mjs', 'desktop/save-all-runtime.mjs',
    'desktop/inline-edit-customization.mjs',
    'desktop/project-home-customization.mjs',
    'desktop/theme-customization.mjs',
    'desktop/chat-close-cancellation.mjs',
    'desktop/application-storage-customization.mjs',
    'desktop/reasoning-selection-customization.mjs',
    'desktop/model-picker-pagination.mjs',
    'desktop/model-picker-labels.mjs',
    'desktop/stream-customization.mjs',
    'desktop/provider-routing.mjs',
    'desktop/rules-customization.mjs', 'desktop/workspace-rule-events.mjs', 'desktop/subagent-model-customization.mjs',
    'desktop/subagent-settings-customization.mjs',
    'desktop/completion-cancellation.mjs',
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
