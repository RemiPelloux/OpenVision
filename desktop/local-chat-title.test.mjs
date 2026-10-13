import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import vm from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { localChatTitles, installLocalChatTitles } from './local-chat-title.mjs';

const originals = new Map();
for (const extension of ['cursor-agent-exec', 'cursor-local-agent-runtime']) {
  test(`${extension}: recovered title owner preserves local formatting and Promise contract without a provider`, async t => {
    let source;
    try { source = await readFile(new URL(`../../cursor/readable/app/extensions/${extension}/dist/main.js`, import.meta.url), 'utf8'); }
    catch (error) { if (error.code === 'ENOENT') return t.skip('Recovered extension required'); throw error; }
    originals.set(extension, source);
    const after = localChatTitles(source);
    assert.equal(localChatTitles(after), after);
    assert.ok(!after.includes('"localAgent.nameAgent"'));
    assert.ok(!after.includes('Generate a short, descriptive name for a chat'));
    new vm.Script(after);
    const owner = parseExpressionAt(after, after.indexOf('function ', after.indexOf('/* OpenVision local chat titles v1 */')), { ecmaVersion: 'latest' });
    const wrapper = owner.body.body[0].argument;
    const [message, empty, fallback] = wrapper.arguments[3].body.body;
    const defaultName = empty.consequent.argument.name;
    const formatterName = fallback.declarations[0].init.callee.body.body.at(-1).argument.callee.name;
    const formatter = parseExpressionAt(after, after.indexOf(`function ${formatterName}(`), { ecmaVersion: 'latest' });
    assert.match(source, new RegExp(`${defaultName} = "New Agent"`));
    assert.match(after.slice(message.start, message.end), /slice\(0, 2e3\)/);
    const context = vm.createContext({
      [defaultName]: 'New Agent',
      [wrapper.callee.name]: (_self, _args, _promise, body) => Promise.resolve().then(() => {
        const result = body().next();
        assert.equal(result.done, true, 'Local title must not suspend for inference');
        return result.value;
      }),
    });
    const title = vm.runInContext(`${after.slice(formatter.start, formatter.end)}\n(${after.slice(owner.start, owner.end)})`, context);
    for (const [input, expected] of [
      ['fix this bug where the array fails', 'Fix This Bug Where'],
      ['  réparer le modèle déjà utilisé ', 'Réparer Le Modèle Déjà'],
      ['foo-bar don’t drop apostrophes please', 'Foo-bar Don’t Drop Apostrophes'],
      ['\n\t', 'New Agent'], ['!@#$😀', 'New Agent'],
      ['x'.repeat(60), 'X' + 'x'.repeat(47)],
      [' '.repeat(2000) + 'outside context', 'New Agent'],
    ]) {
      const argument = new Proxy({ userMessage: input }, { get(target, key) {
        assert.equal(key, 'userMessage', 'Title must not inspect provider/session configuration');
        return target[key];
      } });
      const result = title(argument);
      assert.equal(typeof result.then, 'function');
      assert.equal(await result, expected);
    }
    assert.throws(() => localChatTitles(source + '\n"localAgent.nameAgent";'), /ambiguous/);
    assert.throws(() => localChatTitles(source.replace('.userMessage.slice(0, 2e3)', '.userMessage.slice(0, 999)')), /contract changed/);
    assert.throws(() => localChatTitles(after + '\n"localAgent.nameAgent";'), /incomplete/);
  });
}

test('title installer preserves original backups and skips unchanged inputs', async t => {
  if (originals.size !== 2) return t.skip('Recovered extensions required');
  const root = await mkdtemp(join(tmpdir(), 'openvision-local-titles-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const relative of ['desktop/local-chat-title.mjs', 'desktop/build-cache.mjs',
    'desktop/import-files.mjs', 'tooling/dependencies.mjs', 'tooling/package-lock.json']) {
    await mkdir(dirname(join(root, relative)), { recursive: true });
    await writeFile(join(root, relative), await readFile(new URL(`../${relative}`, import.meta.url)));
  }
  for (const [extension, source] of originals) {
    const path = join(root, `source/app/extensions/${extension}/dist/main.js`);
    await mkdir(dirname(path), { recursive: true }); await writeFile(path, source);
  }
  await installLocalChatTitles(root);
  const records = new Map();
  for (const extension of originals.keys())
    records.set(extension, await readFile(join(root, `build/cache/local-chat-title-${extension}.json`), 'utf8'));
  await installLocalChatTitles(root);
  for (const [extension, original] of originals) {
    assert.equal(await readFile(join(root, `backups/local-chat-title/extensions/${extension}/dist/main.js`), 'utf8'), original);
    const output = await readFile(join(root, `source/app/extensions/${extension}/dist/main.js`), 'utf8');
    assert.equal(output, localChatTitles(original));
    assert.equal(await readFile(join(root, `build/cache/local-chat-title-${extension}.json`), 'utf8'), records.get(extension));
  }
});
