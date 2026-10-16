import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { classAt, applyTelemetryPatches } from './telemetry-patches.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

// Rule discovery owner contract: workspace roots only. The recovered local
// rules service walked from each workspace folder to the filesystem root and
// read every ancestor's rules directory, AGENTS.md and CLAUDE.md, and resolved
// the legacy single-file rule at the enclosing Git root. That imported rules
// from parent folders and, for projects under HOME, from the user's home.
export const marker = '/* OpenVision workspace rule scope v1 */';
const homeMarker = '/* OpenVision home rule files disabled v1 */';
export const homeRuleMessage = 'OpenVision does not use home-directory rule files. Add user rules from Customize > Rules > New; they are stored in your OpenVision profile.';
export const discoveryTargets = ['extensions/cursor-agent-exec/dist/main.js',
  'extensions/cursor-agent-host/dist/main.js',
  'extensions/cursor-agent-host/dist/agent-host-daemon/dist/bin/daemon.cjs'];

function* nodes(node) {
  if (!node || typeof node.type !== 'string') return;
  yield node;
  for (const [key, value] of Object.entries(node)) {
    if (key === 'start' || key === 'end') continue;
    if (Array.isArray(value)) for (const item of value) yield* nodes(item);
    else if (value && typeof value === 'object') yield* nodes(value);
  }
}

function method(owner, name) {
  const found = owner.body.body.filter(item => item.type === 'MethodDefinition' && item.key?.name === name);
  if (found.length !== 1) throw new Error(`Rule discovery method missing or ambiguous: ${name}`);
  return found[0];
}

export function ruleDiscoveryOwner(text) {
  const anchors = [...text.matchAll(/async loadRulesFromDirAndAncestors\([\w$]+, [\w$]+\)\s*\{/g)];
  if (anchors.length !== 1) throw new Error('Rule discovery owner missing or ambiguous');
  const owner = classAt(text, anchors[0].index);
  for (const name of ['load', 'loadRulesFromDirAndAncestors', 'loadCursorRulesRule', 'readRulesAtPath',
    'loadRulesFromDirectory', 'loadRulesFromMarkdownFile']) method(owner, name);
  if (!/this\.rootDirectory = /.test(text.slice(owner.start, owner.end)))
    throw new Error('Rule discovery root contract changed');
  return owner;
}

export function confineRuleDiscovery(text) {
  if (text.includes(marker)) return text;
  const owner = ruleDiscoveryOwner(text), patches = [];
  // The walk-up loop ends with `if (parent === current) break;`. Ending after
  // the first iteration keeps the opened folder and drops every ancestor.
  const walk = method(owner, 'loadRulesFromDirAndAncestors');
  const loops = [...nodes(walk.value.body)].filter(node => node.type === 'WhileStatement' || node.type === 'ForStatement');
  const exits = loops.length === 1 ? [...nodes(loops[0].body)].filter(node => node.type === 'IfStatement' &&
    node.test.type === 'BinaryExpression' && node.test.operator === '===' && node.consequent.type === 'BreakStatement' &&
    !node.alternate) : [];
  if (exits.length !== 1) throw new Error('Rule discovery ancestor loop contract changed');
  const dirname = text.slice(walk.start, walk.end);
  if (!/\.dirname\)\(/.test(dirname) || !/"rules"\)/.test(dirname)) throw new Error('Rule discovery ancestor path contract changed');
  patches.push({ start: exits[0].start, end: exits[0].end, after: `{ ${marker} break; }`, reason: 'workspace root only' });
  // Legacy single-file rules are read from the opened folder, not the Git root.
  const calls = [...nodes(owner)].filter(node => node.type === 'CallExpression' &&
    node.callee.type === 'MemberExpression' && node.callee.object.type === 'ThisExpression' &&
    node.callee.property.name === 'loadCursorRulesRule');
  if (calls.length !== 2 || calls.some(call => call.arguments.length !== 2 || call.arguments[1].type !== 'Identifier'))
    throw new Error('Legacy project rule root contract changed');
  for (const call of calls)
    patches.push({ start: call.arguments[1].start, end: call.arguments[1].end, after: 'this.rootDirectory', reason: 'workspace legacy rule' });
  return applyTelemetryPatches(text, patches);
}

// Deep-link "Add to Home" wrote rule files into the real home directory, which
// rule discovery no longer reads. Refuse that target with a clear message;
// project rule creation is unchanged.
export function disableHomeRuleFiles(text) {
  if (text.includes(homeMarker)) return text;
  const anchors = [...text.matchAll(/getRuleTargetDirectory\(([\w$]+)\)\s*\{/g)];
  if (anchors.length !== 1) throw new Error('Rule target owner missing or ambiguous');
  const owner = classAt(text, anchors[0].index);
  const target = method(owner, 'getRuleTargetDirectory');
  const source = text.slice(target.value.body.start, target.value.body.end);
  const home = source.match(/if \(([\w$]+)\) \{\s*const [\w$]+ = this\.pathService\.userHome\(\{ preferLocal: !0 \}\);\s*return [\w$]+\.joinPath\([\w$]+, "\.cursor", "rules"\);\s*\} else \{/);
  if (!home || home[1] !== anchors[0][1] || !source.includes('"No workspace folder available for project rules"'))
    throw new Error('Home rule target contract changed');
  const start = target.value.body.start + home.index;
  return applyTelemetryPatches(text, [{ start, end: start + home[0].length,
    after: `if (${home[1]}) { ${homeMarker} throw new Error(${JSON.stringify(homeRuleMessage)}); } else {` }]);
}

export async function installRuleScope(root) {
  const dependencies = ['desktop/rules-scope.mjs', 'desktop/telemetry-patches.mjs', 'desktop/build-cache.mjs',
    'desktop/import-files.mjs', 'tooling/dependencies.mjs', 'tooling/package-lock.json'];
  const hashes = await Promise.all(dependencies.map(path => fileHash(join(root, path))));
  if (hashes.some(hash => !hash)) throw new Error('Rule scope customization dependency missing');
  const recipe = digest(JSON.stringify([process.versions.node, hashes]));
  const targets = discoveryTargets.map(relative => [relative, confineRuleDiscovery]);
  for (const variant of ['desktop', 'glass'])
    targets.push([`out/vs/workbench/workbench.${variant}.main.js`, disableHomeRuleFiles]);
  for (const [relative, transform] of targets) {
    const path = join(root, 'source/app', relative);
    await cachedFile({ path, recipe, marker: join(root, `build/cache/rules-scope-${digest(relative)}.json`) }, async () => {
      const before = await readFile(path, 'utf8'), after = transform(before);
      if (before === after) return;
      const backup = join(root, 'backups/rules-scope', relative);
      await mkdir(dirname(backup), { recursive: true });
      await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
      await writeFile(path, after);
    });
  }
  console.log('Rule discovery confined to workspace roots; home rule files disabled');
}
