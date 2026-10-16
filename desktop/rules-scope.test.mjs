import test from 'node:test';
import assert from 'node:assert/strict';
import { copyFile, mkdir, mkdtemp, readFile, rm, stat, writeFile } from 'node:fs/promises';
import * as path from 'node:path';
import { tmpdir } from 'node:os';
import { classAt } from './telemetry-patches.mjs';
import { namespaceEdits, applyNamespaceEdits } from './project-namespace.mjs';
import { readableAppDirectory } from './recovered-source.mjs';
import { confineRuleDiscovery, disableHomeRuleFiles, discoveryTargets, homeRuleMessage, installRuleScope,
  marker, ruleDiscoveryOwner } from './rules-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const originals = new Map();
async function original(relative) {
  if (!originals.has(relative)) originals.set(relative, readFile(path.join(readableAppDirectory(), relative), 'utf8'));
  return originals.get(relative);
}
const namespaced = source => applyNamespaceEdits(source, namespaceEdits(source));

// Unknown identifiers (span helpers, telemetry) resolve to an inert stub; the
// path, stat and Git-root helpers are bound to real or fixture implementations.
const universal = new Proxy(function () {}, {
  get: (target, key) => key === 'then' || key === Symbol.unscopables ? undefined : key === Symbol.toPrimitive ? () => 'stub' : universal,
  apply: () => universal, construct: () => universal,
});
function evaluate(source, bindings) {
  const scope = new Proxy(bindings, {
    has: (target, key) => typeof key === 'string' && (key in target || !(key in globalThis)),
    get: (target, key) => key === Symbol.unscopables ? undefined : key in target ? target[key] : universal,
  });
  return new Function('scope', `with (scope) { return (${source}); }`)(scope);
}

function discoveryService(text, { gitRoot, thirdParty = true }) {
  const owner = ruleDiscoveryOwner(text);
  const source = namespaced(text.slice(owner.start, owner.end));
  const pathName = source.match(/\(0, ([\w$]+)\.join\)\(/)[1];
  const statName = source.match(/\(0, ([\w$]+)\.stat\)\(/)[1];
  const gitName = source.match(/await ([\w$]+)\([\w$.]+, this\.gitExecutor, [\w$]+\)/)[1];
  const Service = evaluate(source, { [pathName]: path, [statName]: { stat }, [gitName]: async () => gitRoot });
  return root => Object.assign(Object.create(Service.prototype), {
    rootDirectory: root, gitExecutor: {}, loadNestedRules: false, getThirdPartyExtensibilityEnabled: () => thirdParty,
    async isCursorIgnored() { return false; },
    async loadRulesFromDirectory(ctx, base) { return [{ path: path.join(base, '.openvision/rules') }]; },
    toCursorRule: rule => rule.path,
  });
}

async function fixture() {
  const base = await mkdtemp(path.join(tmpdir(), 'openvision-rule-scope-'));
  const home = path.join(base, 'home'), outer = path.join(home, 'outer'), project = path.join(outer, 'project');
  const second = path.join(outer, 'second');
  for (const directory of [home, outer, project, second]) await mkdir(path.join(directory, '.openvision/rules'), { recursive: true });
  for (const directory of [home, outer, project, second])
    for (const name of ['AGENTS.md', 'CLAUDE.md', '.openvisionrules', '.openvision/rules/rule.mdc'])
      await writeFile(path.join(directory, name), `${name} in ${directory}\n`);
  return { base, home, outer, project, second };
}

const expectedInside = directory => ['.openvision/rules', 'AGENTS.md', 'CLAUDE.md', '.openvisionrules']
  .map(name => path.join(directory, name)).sort();

for (const relative of discoveryTargets) {
  test(`workspace rule discovery stays inside each opened folder: ${relative}`, async t => {
    const text = await original(relative), places = await fixture();
    t.after(() => rm(places.base, { recursive: true, force: true }));
    const before = discoveryService(text, { gitRoot: places.outer });
    const leaked = (await before(places.project).load(universal)).sort();
    // The recovered producer reads every ancestor up to the filesystem root and the Git root's legacy file.
    for (const directory of [places.outer, places.home])
      assert.ok(leaked.includes(path.join(directory, '.openvision/rules')), `original reads ${directory}`);
    assert.ok(leaked.includes(path.join(places.outer, '.openvisionrules')));

    const after = discoveryService(confineRuleDiscovery(text), { gitRoot: places.outer });
    assert.deepEqual((await after(places.project).load(universal)).sort(), expectedInside(places.project));
    assert.deepEqual((await after(places.second).load(universal)).sort(), expectedInside(places.second),
      'Each workspace folder of a multi-root window has its own scope');
    assert.deepEqual(await after(places.project).readRulesAtPath(universal, path.join(places.project, '.openvisionrules')),
      [path.join(places.project, '.openvisionrules')].map(file => ({ filename: '.openvisionrules', path: file,
        frontmatter: { alwaysApply: true }, body: universal })), 'Legacy file watcher reloads the folder file');
    const withoutThirdParty = discoveryService(confineRuleDiscovery(text), { gitRoot: places.outer, thirdParty: false });
    assert.deepEqual((await withoutThirdParty(places.project).load(universal)).sort(),
      expectedInside(places.project).filter(file => !file.endsWith('CLAUDE.md')));
    // Opening the home folder itself remains an explicit project choice.
    assert.deepEqual((await after(places.home).load(universal)).sort(), expectedInside(places.home));
  });
}

test('rule discovery customization is idempotent and rejects changed contracts', async () => {
  for (const relative of discoveryTargets) {
    const text = await original(relative), once = confineRuleDiscovery(text);
    assert.notEqual(once, text);
    assert.equal(confineRuleDiscovery(once), once);
    assert.equal(once.split(marker).length, 2);
  }
  const text = await original(discoveryTargets[0]);
  const owner = ruleDiscoveryOwner(text), source = text.slice(owner.start, owner.end);
  const wrap = body => `var Owner = ${body};`;
  assert.doesNotThrow(() => confineRuleDiscovery(wrap(source)));
  assert.throws(() => confineRuleDiscovery(wrap(source.replace(/if \(([\w$]+) === ([\w$]+)\) break;/, 'if ($1 === $2) return [];'))),
    /ancestor loop contract changed/);
  assert.throws(() => confineRuleDiscovery(wrap(source).replace(/this\.loadCursorRulesRule\(([\w$.]+), ([\w$]+)\)/, 'this.loadCursorRulesRule($1, $2 + "")')),
    /Legacy project rule root contract changed/);
  assert.throws(() => confineRuleDiscovery(wrap(source) + wrap(source)), /missing or ambiguous/);
  assert.throws(() => confineRuleDiscovery('var x = 1;'), /missing or ambiguous/);
});

function ruleTarget(text, workspace) {
  const owner = classAt(text, text.search(/getRuleTargetDirectory\([\w$]+\)\s*\{/));
  const method = owner.body.body.find(item => item.key?.name === 'getRuleTargetDirectory');
  const source = namespaced(text.slice(method.start, method.end));
  const uri = source.match(/return ([\w$]+)\.joinPath\(/)[1];
  const service = evaluate(`{ ${source} }`, { [uri]: { joinPath: (base, ...parts) => path.posix.join(base, ...parts) } });
  return Object.assign(service, {
    pathService: { userHome() { throw new Error('home directory consulted'); } },
    contextService: { getWorkspace: () => ({ folders: workspace ? [{ uri: workspace }] : [] }) },
  });
}

for (const variant of ['desktop', 'glass']) {
  test(`deep-link home rules never target the real home directory: ${variant}`, async () => {
    const relative = `out/vs/workbench/workbench.${variant}.main.js`, text = await original(relative);
    assert.throws(() => ruleTarget(text, '/work').getRuleTargetDirectory(true), /home directory consulted/);
    const changed = disableHomeRuleFiles(text);
    assert.equal(disableHomeRuleFiles(changed), changed);
    assert.throws(() => ruleTarget(changed, '/work').getRuleTargetDirectory(true), error => error.message === homeRuleMessage);
    assert.equal(ruleTarget(changed, '/work').getRuleTargetDirectory(false), '/work/.openvision/rules');
    assert.throws(() => ruleTarget(changed).getRuleTargetDirectory(false), /No workspace folder available/);
    assert.throws(() => disableHomeRuleFiles(text.replace('"No workspace folder available for project rules"', '"x"')),
      /Home rule target contract changed/);
  });
}

test('installation keeps first backups, is cached and reapplies after drift', async t => {
  const base = await mkdtemp(path.join(tmpdir(), 'openvision-rule-install-'));
  t.after(() => rm(base, { recursive: true, force: true }));
  for (const file of ['desktop/rules-scope.mjs', 'desktop/telemetry-patches.mjs', 'desktop/build-cache.mjs',
    'desktop/import-files.mjs', 'tooling/dependencies.mjs', 'tooling/package-lock.json']) {
    await mkdir(path.dirname(path.join(base, file)), { recursive: true });
    await copyFile(path.join(root, file), path.join(base, file));
  }
  const inputs = new Map();
  for (const relative of discoveryTargets) {
    const text = await original(relative), owner = ruleDiscoveryOwner(text);
    inputs.set(relative, `var Owner = ${text.slice(owner.start, owner.end)};\n`);
  }
  for (const variant of ['desktop', 'glass']) {
    const relative = `out/vs/workbench/workbench.${variant}.main.js`, text = await original(relative);
    const owner = classAt(text, text.search(/getRuleTargetDirectory\([\w$]+\)\s*\{/));
    inputs.set(relative, `var Owner = ${text.slice(owner.start, owner.end)};\n`);
  }
  for (const [relative, text] of inputs) {
    await mkdir(path.dirname(path.join(base, 'source/app', relative)), { recursive: true });
    await writeFile(path.join(base, 'source/app', relative), text);
  }
  const read = relative => readFile(path.join(base, 'source/app', relative), 'utf8');
  await installRuleScope(base);
  const first = new Map(await Promise.all([...inputs.keys()].map(async relative => [relative, await read(relative)])));
  for (const [relative, text] of inputs) {
    assert.notEqual(first.get(relative), text);
    assert.equal(await readFile(path.join(base, 'backups/rules-scope', relative), 'utf8'), text);
  }
  await installRuleScope(base);
  for (const relative of inputs.keys()) assert.equal(await read(relative), first.get(relative));
  // A rebuilt input is patched again; the first backup is retained.
  const relative = discoveryTargets[0];
  await writeFile(path.join(base, 'source/app', relative), inputs.get(relative) + '// rebuilt\n');
  await installRuleScope(base);
  assert.ok((await read(relative)).includes(marker));
  assert.equal(await readFile(path.join(base, 'backups/rules-scope', relative), 'utf8'), inputs.get(relative));
});
