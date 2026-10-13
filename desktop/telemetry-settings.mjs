import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseConfiguration, setSetting, telemetrySettings } from './import-json.mjs';

export function telemetryProduct(product) {
  const result = { ...product, enableTelemetry: false, removeTelemetryMachineId: true,
    enabledTelemetryLevels: { error: false, usage: false } };
  for (const key of ['aiConfig', 'appCenter', 'crashReporter', 'statsigClientKey', 'statsigLogEventProxyUrl']) delete result[key];
  return result;
}

export async function backedWrite(root, relative, text) {
  const path = join(root, relative);
  const before = await readFile(path, 'utf8').catch(error => { if (error.code !== 'ENOENT') throw error; });
  if (before === text) return false;
  if (before !== undefined) {
    const backup = join(root, 'backups/telemetry', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  }
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, text);
  return true;
}

export async function installTelemetrySettings(root) {
  const product = JSON.parse(await readFile(join(root, 'source/app/product.json'), 'utf8'));
  await backedWrite(root, 'source/app/product.json', JSON.stringify(telemetryProduct(product), null, 2) + '\n');
  for (const [relative, settings] of [
    ['data/local/User/settings.json', telemetrySettings], ['data/local/argv.json', {'enable-crash-reporter': false}],
  ]) {
    let text = await readFile(join(root, relative), 'utf8').catch(error => {
      if (error.code === 'ENOENT') return '{}\n'; throw error;
    });
    parseConfiguration(text);
    for (const [key, value] of Object.entries(settings)) text = setSetting(text, key, value);
    await backedWrite(root, relative, text);
  }
}
