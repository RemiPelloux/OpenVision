// Regenerate desktop/fixtures/statsig-gates-3.21.13.json from the stock 3.21.13
// workbench (bundled gate defaults) and one captured anonymous
// aiserver.v1.AnalyticsService/BootstrapStatsig response (Connect JSON). Only
// gate names, djb2 hashes and boolean values are kept: no user, IP or rule ids.
// Usage: node desktop/statsig-gate-fixture.mjs <bootstrap-response.json> <captured-at ISO> [stock workbench]
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fileHash } from './import-files.mjs';
import { classifyGate, clientGateTable, gateDrift, proposedLocalGateDefaults } from './statsig-gates.mjs';
import { localGateDefaults } from './network-defaults.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const [responsePath, capturedAt, workbenchPath = join(root,
  'build/inputs/cursor-3.21.13-linux-x64/squashfs-root/usr/share/cursor/resources/app/out/vs/workbench/workbench.desktop.main.js')] = process.argv.slice(2);
if (!responsePath || !capturedAt) throw new Error('Usage: statsig-gate-fixture.mjs <bootstrap-response.json> <captured-at> [workbench]');
const response = JSON.parse(await readFile(responsePath, 'utf8'));
const config = JSON.parse(response.config);
const gates = gateDrift(clientGateTable(await readFile(workbenchPath, 'utf8')), config);
const drifted = gates.filter(gate => gate.drifted);
const fixture = {
  scope: 'OpenVision OV-1005 gate-drift assessment, Linux x64, Cursor 3.21.13 stock workbench. Classification is by gate name; consumers were traced only for the proposed local defaults.',
  source: {
    workbench: 'out/vs/workbench/workbench.desktop.main.js (stock 3.21.13 input)', workbenchSha256: await fileHash(workbenchPath),
    bootstrap: { rpc: 'aiserver.v1.AnalyticsService/BootstrapStatsig', anonymous: true, capturedAt,
      request: { operatingSystem: 'CLIENT_OS_LINUX', headers: ['x-cursor-client-version: 3.21.13', 'x-cursor-client-type: ide', 'x-cursor-client-os: linux', 'x-cursor-client-arch: x64'] },
      generatedAtMs: Number(response.generatedAtMs), hashUsed: config.hash_used, featureGates: Object.keys(config.feature_gates ?? {}).length,
      evaluatedAppVersion: config.user?.appVersion },
  },
  counts: { declared: gates.length, inBootstrap: gates.filter(gate => gate.bootstrap !== undefined).length, drifted: drifted.length,
    driftedOn: drifted.filter(gate => gate.bootstrap).length, driftedOff: drifted.filter(gate => !gate.bootstrap).length,
    byClass: drifted.reduce((counts, gate) => ({ ...counts, [classifyGate(gate.name)]: (counts[classifyGate(gate.name)] ?? 0) + 1 }), {}) },
  appliedLocalGateDefaults: localGateDefaults,
  proposedLocalGateDefaults,
  gates: gates.map(({ name, hash, default: value, bootstrap, drifted: changed, requiresAuthenticatedBootstrap }) => ({ name, hash, default: value,
    ...(bootstrap === undefined ? {} : { bootstrap }), ...(changed ? { drifted: true, class: classifyGate(name) } : {}),
    ...(requiresAuthenticatedBootstrap ? { requiresAuthenticatedBootstrap } : {}) })),
};
await writeFile(join(root, 'desktop/fixtures/statsig-gates-3.21.13.json'), JSON.stringify(fixture, null, 1) + '\n');
console.log(JSON.stringify(fixture.counts));
