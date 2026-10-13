import test from 'node:test';
import assert from 'node:assert/strict';
import { featureStatus } from './feature-status.mjs';

test('verification metric gives no partial credit and rejects a silently reduced denominator', () => {
  const manifest = { version: 1, targetPercent: 95, requiredStoryIds: ['OV-101', 'OV-102'] };
  const ledger = '| OV-101 / Verified |\n| OV-102 / Partial |';
  assert.equal(featureStatus(ledger, manifest).verifiedPercent, 50);
  assert.equal(featureStatus(ledger, manifest).targetReached, false);
  assert.equal(featureStatus(ledger, manifest).requiredForTarget, 2);
  assert.throws(() => featureStatus('| OV-101 / Verified |', manifest), /scope changed/);
  assert.throws(() => featureStatus(ledger + '\n| OV-102 / Verified |', manifest), /Duplicate/);
  assert.equal(featureStatus(ledger.replace('Partial', 'Verified'), manifest).targetReached, true);
});
