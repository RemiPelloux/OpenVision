import { test } from 'node:test';
import assert from 'node:assert/strict';
import { customizeWelcome, customizeEarlyWelcome } from './welcome-customization.mjs';

test('welcome replacement preserves following runtime initializers and is idempotent', () => {
  const source = `function yHC() { return { "logged-out-glass-screen": true }; }
(initializeControls(), initializeServices());
function eGC() { return Xd.FIRST_LAUNCH_SPLASH_SHOWN; }
(initializeSplash());`;
  const result = customizeWelcome(source, 'glass');
  assert.ok(result.includes('(initializeControls(), initializeServices());'));
  assert.ok(result.includes('(initializeSplash());'));
  assert.equal(customizeWelcome(result, 'glass'), result);
  assert.equal(customizeWelcome(source, 'desktop'), source);
  assert.throws(() => customizeWelcome(source.replace('logged-out-glass-screen', 'different-owner'), 'glass'), /ownership changed/);
  assert.throws(() => customizeWelcome(source + '\nfunction yHC() {}', 'glass'), /ambiguous/);
});

test('early startup owner is retired without consuming the bootstrap invocation', () => {
  const source = `function showWelcomeSplashEarly(document) { ensureWelcomeSplashEarlyStylesheet(document); }
(bootstrap());`;
  const result = customizeEarlyWelcome(source);
  assert.ok(result.endsWith('(bootstrap());'));
  assert.equal(customizeEarlyWelcome(result), result);
  assert.throws(() => customizeEarlyWelcome(source.replace('ensureWelcomeSplashEarlyStylesheet', 'unknownOwner')), /ownership changed/);
});
