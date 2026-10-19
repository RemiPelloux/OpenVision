import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { explainComputerUseUnavailable, computerUseExplanation, computerUseTarget } from './computer-use-customization.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const fixture = `
    async function Du(e) {
      const t = (function (e = process.platform) {
        switch (e) {
          case "darwin":
            return Is;
          case "win32":
            return As;
          default:
            return;
        }
      })();
      if (void 0 === t) return;
      const r = "darwin" === t.platform ? xu : bu;
      e.manifest = await readManifest(r);
    }
    function Lu(e, t) {
      const r = \`[cursor-computer-use] \${t}\`;
      "error" !== e ? console.info(r) : console.error(r);
    }
    return Du;`;

async function activate(text, platform) {
  const logged = [], manifests = [];
  const original = Object.getOwnPropertyDescriptor(process, 'platform');
  const info = console.info;
  Object.defineProperty(process, 'platform', { value: platform });
  console.info = line => logged.push(line);
  try {
    const Du = new Function('Is', 'As', 'xu', 'bu', 'readManifest', text)(
      { platform: 'darwin' }, { platform: 'win32' }, 'mac_computer_use', 'local_computer_use',
      async gate => { manifests.push(gate); return 'manifest'; });
    await Du({});
  } finally { Object.defineProperty(process, 'platform', original); console.info = info; }
  return { logged, manifests };
}

test('computer use explains an unsupported platform before any gate or manifest read', async () => {
  const patched = explainComputerUseUnavailable(fixture);
  assert.equal(explainComputerUseUnavailable(patched), patched, 'idempotent');
  const linux = await activate(patched, 'linux');
  assert.deepEqual(linux.manifests, [], 'no gate or sidecar manifest is read on Linux');
  assert.deepEqual(linux.logged, [`[cursor-computer-use] ${computerUseExplanation} (linux)`]);
  const before = await activate(fixture, 'linux');
  assert.deepEqual(before.logged, [], 'the original returned silently');
  for (const platform of ['darwin', 'win32']) {
    const supported = await activate(patched, platform);
    assert.deepEqual(supported.logged, [], `${platform} is unchanged`);
    assert.equal(supported.manifests.length, 1);
  }
});

test('computer use explanation refuses a changed backend owner', () => {
  assert.throws(() => explainComputerUseUnavailable(fixture.replace('case "win32"', 'case "linux"')), /backend selection owner/);
  assert.throws(() => explainComputerUseUnavailable(fixture + fixture), /ambiguous/);
  assert.throws(() => explainComputerUseUnavailable(fixture.replace('[cursor-computer-use]', '[other]')), /owner missing/);
});

test('built computer-use extension carries exactly one explanation', { skip: !existsSync(join(root, computerUseTarget)) }, async () => {
  const text = await readFile(join(root, computerUseTarget), 'utf8');
  assert.equal(explainComputerUseUnavailable(text).split(computerUseExplanation).length, 2);
});
