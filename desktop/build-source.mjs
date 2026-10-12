import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { customizeLocalWorkbench } from './local-workbench.mjs';
import { projectWorkspace } from './project-workspace.mjs';
import { installModelSettings } from './custom-models.mjs';
import { installCursorImport } from './install-import.mjs';
import { localSettings } from './import-json.mjs';
import { assembleSource, exists, loadRuntime } from './source-assembly.mjs';
import { platformLayout } from './platform.mjs';
import { signMacBundle } from './native-assets.mjs';
import { fileHash } from './import-files.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const marker = join(root, 'build/source-build.json');
const localRecovery = join(root, 'build/recovery');
const recovery = process.env.OPENVISION_RECOVERY_DIR
  ? resolve(process.env.OPENVISION_RECOVERY_DIR)
  : await exists(join(localRecovery, 'reports/installation-manifest.json')) ? localRecovery : resolve(root, '../cursor');
let manifest;
if (await exists(marker)) {
  await loadRuntime(root);
  console.log('Using existing editable OpenVision source build');
} else manifest = await assembleSource(root, recovery);

await mkdir(join(root, 'build'), { recursive: true });
await customizeLocalWorkbench(root);
await installModelSettings(root);
await installCursorImport(root);
const settings = join(root, 'data/local/User/settings.json');
if (!await exists(settings)) {
  await mkdir(dirname(settings), { recursive: true });
  await writeFile(settings, JSON.stringify(localSettings, null, 2) + '\n', { flag: 'wx' });
}
await mkdir(join(root, 'data/local-extensions'), { recursive: true });
await projectWorkspace(root);
const layout = platformLayout(root);
if (process.platform === 'darwin') await signMacBundle(layout.bundle);
if (manifest) {
  manifest.executable_sha256 = await fileHash(layout.executable);
  await mkdir(dirname(marker), { recursive: true });
  await writeFile(marker, JSON.stringify(manifest, null, 2) + '\n', { flag: 'wx' });
  console.log(`OpenVision source build complete for ${process.platform}/${process.arch}`);
}
