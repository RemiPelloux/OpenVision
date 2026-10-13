import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileHash, digest } from './import-files.mjs';
import { cachedFile } from './build-cache.mjs';
import { backedWrite, installTelemetrySettings } from './telemetry-settings.mjs';
import { disableCoreTelemetry } from './telemetry-core.mjs';
import { customizeWorkbenchTelemetry } from './telemetry-workbench.mjs';

export const telemetryCoreTargets = [
  'out/main.js',
  'out/vs/code/node/cliProcessMain.js',
  'out/vs/workbench/workbench.desktop.main.js',
  'out/vs/workbench/workbench.glass.main.js',
  'out/vs/code/electron-utility/sharedProcess/sharedProcessMain.js',
  'out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js',
  'out/vs/workbench/api/node/extensionHostProcess.js',
  'out/vs/workbench/api/worker/extensionHostWorkerMain.js',
];

export async function installCoreTelemetryPolicy(root) {
  const dependencies = ['telemetry-customization.mjs', 'telemetry-core.mjs', 'telemetry-patches.mjs',
    'telemetry-settings.mjs', 'telemetry-workbench.mjs', 'import-json.mjs'];
  const hashes = await Promise.all(dependencies.map(file => fileHash(join(root, 'desktop', file))));
  const recipe = digest(JSON.stringify([process.versions.node, hashes]));
  for (const relative of telemetryCoreTargets) {
    const path = join(root, 'source/app', relative);
    await cachedFile({path, recipe, marker: join(root, `build/cache/telemetry-${digest(relative)}.json`)}, async () => {
      const before = await readFile(path, 'utf8');
      const result = disableCoreTelemetry(before, { main: relative === 'out/main.js',
        requireSentry: !relative.endsWith('cliProcessMain.js') });
      if (/workbench\.(desktop|glass)\.main\.js$/.test(relative)) {
        const workbench = customizeWorkbenchTelemetry(result.text);
        result.text = workbench.text;
        result.patches.push(...workbench.patches);
      }
      await backedWrite(root, `source/app/${relative}`, result.text);
      await writeFile(join(root, `build/telemetry-${digest(relative)}.json`), JSON.stringify({ path: relative,
        before_sha256: digest(before), after_sha256: digest(result.text),
        owners: result.patches.map(patch => patch.reason) }, null, 2) + '\n');
    });
  }
  await installTelemetrySettings(root);
  console.log(`Core telemetry disabled: ${telemetryCoreTargets.length} process bundles`);
}
