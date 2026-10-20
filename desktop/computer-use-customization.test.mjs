import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { explainComputerUseUnavailable, computerUseExplanation, computerUseChannel, computerUseTarget } from './computer-use-customization.mjs';

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
      if (await g.cursor.checkFeatureGate(r)) e.manifest = await readManifest(r);
    }
    function Lu(e, t) {
      const r = \`[cursor-computer-use] \${t}\`;
      "error" !== e ? console.info(r) : console.error(r);
    }
    return Du;`;
// The v1 block as earlier builds wrote it; editable source builds keep it.
const v1 = fixture.replace('if (void 0 === t) return;',
  `if (void 0 === t) { /* OpenVision computer use unavailable explanation v1 */ Lu("info", ${JSON.stringify(computerUseExplanation)} + " (" + process.platform + ")"); return; }`);

async function activate(text, platform, { failChannel = false } = {}) {
  const logged = [], manifests = [], channels = [], context = { subscriptions: [] };
  const vscode = { cursor: { checkFeatureGate: async () => true }, window: { createOutputChannel(name, options) {
    if (failChannel) throw new Error('no channel');
    const channel = { name, options, lines: [], info: line => channel.lines.push(line), dispose() {} };
    channels.push(channel); return channel;
  } } };
  const original = Object.getOwnPropertyDescriptor(process, 'platform');
  const { info, error } = console;
  Object.defineProperty(process, 'platform', { value: platform });
  console.info = console.error = line => logged.push(line);
  try {
    const Du = new Function('Is', 'As', 'xu', 'bu', 'g', 'readManifest', text)(
      { platform: 'darwin' }, { platform: 'win32' }, 'mac_computer_use', 'local_computer_use', vscode,
      async gate => { manifests.push(gate); return 'manifest'; });
    await Du(context);
  } finally { Object.defineProperty(process, 'platform', original); Object.assign(console, { info, error }); }
  return { logged, manifests, channels, context };
}

test('computer use explains an unsupported platform before any gate or manifest read', async () => {
  const patched = explainComputerUseUnavailable(fixture);
  assert.equal(explainComputerUseUnavailable(patched), patched, 'idempotent');
  const linux = await activate(patched, 'linux');
  const message = `${computerUseExplanation} (linux)`;
  assert.deepEqual(linux.manifests, [], 'no gate or sidecar manifest is read on Linux');
  assert.deepEqual(linux.logged, [`[cursor-computer-use] ${message}`]);
  assert.equal(linux.channels.length, 1);
  assert.deepEqual([linux.channels[0].name, linux.channels[0].options, linux.channels[0].lines], [computerUseChannel, { log: true }, [message]]);
  assert.deepEqual(linux.context.subscriptions, linux.channels, 'the channel is disposed with the extension');
  const failed = await activate(patched, 'linux', { failChannel: true });
  assert.match(failed.logged.at(-1), /explanation channel failed: Error: no channel/);
  const before = await activate(fixture, 'linux');
  assert.deepEqual([before.logged, before.channels], [[], []], 'the original returned silently');
  for (const platform of ['darwin', 'win32']) {
    const supported = await activate(patched, platform);
    assert.deepEqual([supported.logged, supported.channels], [[], []], `${platform} is unchanged`);
    assert.equal(supported.manifests.length, 1);
  }
});

test('computer use explanation upgrades the console-only v1 block', async () => {
  const upgraded = explainComputerUseUnavailable(v1);
  assert.equal(upgraded, explainComputerUseUnavailable(fixture));
  assert.doesNotMatch(upgraded, /explanation v1/);
  assert.equal((await activate(upgraded, 'linux')).channels.length, 1);
});

test('computer use explanation refuses a changed backend owner', () => {
  assert.throws(() => explainComputerUseUnavailable(fixture.replace('case "win32"', 'case "linux"')), /backend selection owner/);
  assert.throws(() => explainComputerUseUnavailable(fixture + fixture), /ambiguous/);
  assert.throws(() => explainComputerUseUnavailable(fixture.replace('[cursor-computer-use]', '[other]')), /owner missing/);
  assert.throws(() => explainComputerUseUnavailable(fixture.replace('g.cursor.checkFeatureGate', 'g.gates.check')), /API owner missing/);
  assert.throws(() => explainComputerUseUnavailable(v1.replace(' return; }', ' }')), /v1 changed/);
});

test('built computer-use extension carries exactly one explanation', { skip: !existsSync(join(root, computerUseTarget)) }, async () => {
  const text = explainComputerUseUnavailable(await readFile(join(root, computerUseTarget), 'utf8'));
  assert.equal(text.split(computerUseExplanation).length, 2);
  assert.doesNotMatch(text, /explanation v1/);
});
