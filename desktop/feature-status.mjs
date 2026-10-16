import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export function featureStatus(ledger, manifest) {
  const accepted = new Set(manifest.requiredStoryIds);
  if (!accepted.size || accepted.size !== manifest.requiredStoryIds.length ||
      !Number.isFinite(manifest.targetPercent) || manifest.targetPercent <= 0 || manifest.targetPercent > 100)
    throw new Error('Invalid feature acceptance baseline.');
  const states = new Map();
  for (const match of ledger.matchAll(/^\| (OV-\d+) \/ ([^|]+) \|/gm)) {
    if (states.has(match[1])) throw new Error(`Duplicate acceptance story: ${match[1]}`);
    states.set(match[1], match[2].trim());
  }
  if (states.size !== accepted.size || [...accepted].some(id => !states.has(id)))
    throw new Error('Acceptance scope changed. Review and version the baseline before calculating progress.');
  const counts = {};
  for (const state of states.values()) {
    if (!['Planned', 'In progress', 'Partial', 'Verified', 'Blocked', 'Unknown'].includes(state))
      throw new Error(`Unknown acceptance status: ${state}`);
    counts[state] = (counts[state] ?? 0) + 1;
  }
  const verified = counts.Verified ?? 0;
  return { baselineVersion: manifest.version, required: accepted.size, verified, counts,
    verifiedPercent: Math.round(10000 * verified / accepted.size) / 100,
    targetPercent: manifest.targetPercent,
    requiredForTarget: Math.ceil(accepted.size * manifest.targetPercent / 100),
    targetReached: verified / accepted.size >= manifest.targetPercent / 100,
    remaining: [...states].filter(([, state]) => state !== 'Verified').map(([id, status]) => ({ id, status })),
    meaning: manifest.measure };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [ledger, manifest] = await Promise.all([
    readFile(new URL('../docs/planning/completion-sprints.md', import.meta.url), 'utf8'),
    readFile(new URL('../docs/planning/feature-acceptance.json', import.meta.url), 'utf8'),
  ]);
  console.log(JSON.stringify(featureStatus(ledger, JSON.parse(manifest)), null, 2));
}
