import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, symlink, rm, lstat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { symlinkCycleBundles, symlinkCycleMarker, treatSymlinkCycleAsDangling } from './symlink-cycle-customization.mjs';
import { readableApp } from './recovered-source.mjs';

// Shape of the recovered SymlinkSupport.stat (formatted bundle).
const sample = `async function t(s) {
            let i;
            try {
              if (((i = await ft.promises.lstat(s)), !i.isSymbolicLink())) return { stat: i };
            } catch {}
            try {
              return {
                stat: await ft.promises.stat(s),
                symbolicLink: i?.isSymbolicLink() ? { dangling: !1 } : void 0,
              };
            } catch (a) {
              if (a.code === "ENOENT" && i) return { stat: i, symbolicLink: { dangling: !0 } };
              if (X && a.code === "EACCES")
                try {
                  return { stat: await ft.promises.stat(await ft.promises.readlink(s)), symbolicLink: { dangling: !1 } };
                } catch (o) {
                  if (o.code === "ENOENT" && i) return { stat: i, symbolicLink: { dangling: !0 } };
                  throw o;
                }
              throw a;
            }
          }`;

test('a symbolic link cycle is reported as a dangling link; other errors still throw', async () => {
  const patched = treatSymlinkCycleAsDangling(sample);
  assert.equal(treatSymlinkCycleAsDangling(patched), patched, 'idempotent');
  assert.equal(patched.split(symlinkCycleMarker).length, 2);
  assert.match(patched, /\(a\.code === "ENOENT" \|\| a\.code === "ELOOP" \/\* OpenVision symlink cycle as dangling v1 \*\/\) && i\) return \{ stat: i, symbolicLink: \{ dangling: !0 \} \}/);
  // The Windows EACCES fallback is unchanged.
  assert.match(patched, /if \(o\.code === "ENOENT" && i\) return/);

  const ft = { promises: (await import('node:fs')).promises };
  const stat = new Function('ft', 'X', `return (${patched});`)(ft, false);
  const directory = await mkdtemp(join(tmpdir(), 'openvision-symlink-cycle-'));
  try {
    await symlink('cycle-b', join(directory, 'cycle-a')); await symlink('cycle-a', join(directory, 'cycle-b'));
    await symlink('missing', join(directory, 'broken'));
    const cycle = await stat(join(directory, 'cycle-a'));
    assert.equal(cycle.stat.isSymbolicLink(), true); assert.deepEqual(cycle.symbolicLink, { dangling: true });
    assert.deepEqual((await stat(join(directory, 'broken'))).symbolicLink, { dangling: true });
    const original = new Function('ft', 'X', `return (${sample});`)(ft, false);
    await assert.rejects(original(join(directory, 'cycle-a')), { code: 'ELOOP' }, 'upstream drops the entry');
    await assert.rejects(stat(join(directory, 'absent')), { code: 'ENOENT' }, 'a missing non-link still fails');
    assert.equal((await lstat(join(directory, 'cycle-a'))).isSymbolicLink(), true);
  } finally { await rm(directory, { recursive: true, force: true }); }
});

test('unknown or ambiguous owners are refused', () => {
  assert.throws(() => treatSymlinkCycleAsDangling('function t() {}'), /missing or ambiguous \(0\)/);
  assert.throws(() => treatSymlinkCycleAsDangling(`${sample}\n${sample}`), /missing or ambiguous \(2\)/);
  const twice = treatSymlinkCycleAsDangling(sample);
  assert.throws(() => treatSymlinkCycleAsDangling(`${twice}${symlinkCycleMarker}`), /more than once/);
});

// Drift guard: each recovered owner bundle still has exactly one patchable SymlinkSupport.stat.
for (const relative of symlinkCycleBundles) {
  test(`recovered ${relative.replace('source/app/', '')} has one patchable owner`, async t => {
    let text;
    try { text = await readFile(new URL(relative.replace('source/app/', ''), readableApp), 'utf8'); }
    catch (error) { if (error.code === 'ENOENT') return t.skip('Recovered bundle unavailable'); throw error; }
    const patched = treatSymlinkCycleAsDangling(text);
    assert.notEqual(patched, text);
    assert.equal(treatSymlinkCycleAsDangling(patched), patched);
  });
}
