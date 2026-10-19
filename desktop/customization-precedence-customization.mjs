import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

// OV-304 customization precedence. Same-named skills, subagents and commands
// from every scope stay listed in Customize with their scope labels; the item
// the Agent uses is the project one, then the profile one, then a plugin's.
// These run before the project-namespace pass, on the original `.cursor`
// spellings that pass rewrites.

const keyMarker = 'OpenVision skill config-directory key v1';
const skillMarker = '/* OpenVision skill precedence v1 */';
const commandMarker = '/* OpenVision project command precedence v1 */';
const cacheMarker = '/* OpenVision skills listed from every scope v1 */';

// Skill de-duplication keys `<root>::<path after the config directory>` with a
// hard-coded `slice(index + 9)`, the length of "/.cursor/". After the namespace
// pass renames the directory to "/.openvision/" the key keeps "sion/…", so a
// project `.openvision/skills/x` and `.claude/skills/x` no longer collapse.
// Measure the literal instead, so the rename carries the right length.
export function measureSkillConfigKey(text) {
  if (text.includes(keyMarker)) return text;
  const declarations = [...text.matchAll(/([\w$]+)\s*=\s*[\w$]+\.indexOf\("\/\.cursor\/"\)/g)];
  if (declarations.length !== 1) throw new Error('Skill config-directory key owner missing or ambiguous');
  const [declaration, name] = declarations[0];
  const window = text.slice(declarations[0].index, declarations[0].index + 1200);
  const slices = [...window.matchAll(new RegExp(`\\.slice\\(\\s*${name.replace(/\$/g, '\\$')}\\s*\\+\\s*9\\s*\\)`, 'g'))];
  if (slices.length !== 1 || !window.includes('indexOf("/.claude/")')) throw new Error('Skill config-directory key contract changed');
  const start = declarations[0].index + slices[0].index, end = start + slices[0][0].length;
  void declaration;
  return text.slice(0, start) + `.slice(${name} + "/.cursor/".length /* ${keyMarker} */)` + text.slice(end);
}

// The Agent's skill list keeps same-named skills from every root. Prefer the
// project skill, then the profile skill, then a plugin skill, by name (the
// SKILL.md directory). Built-in and agent-store skills and skills with parse
// errors keep their existing handling.
const precedenceHelper = `${skillMarker}
function openvisionPreferProjectSkills(skills, context) {
  const slash = value => String(value ?? "").replace(/\\\\/g, "/").replace(/\\/+$/, "");
  const workspaces = (context?.workspacePaths ?? []).map(slash).filter(Boolean);
  const home = slash(context?.userHomeDirectory);
  const rank = skill => {
    const path = slash(skill.fullPath);
    if (String(skill.plugin ?? "").trim() || String(skill.pluginId ?? "").trim() || String(skill.marketplaceId ?? "").trim() ||
        (home && path.startsWith(home + "/.cursor/plugins/"))) return 2;
    if (workspaces.some(root => path.startsWith(root + "/"))) return 0;
    if (home && path.startsWith(home + "/") && !path.startsWith(home + "/.cursor/skills-cursor/")) return 1;
    return -1;
  };
  const name = skill => slash(skill.fullPath).split("/").at(-2)?.toLowerCase() ?? "";
  const best = new Map();
  for (const skill of skills) {
    if (skill.parseError || !skill.fullPath) continue;
    const order = rank(skill), key = name(skill);
    if (order >= 0 && key && !(best.get(key) <= order)) best.set(key, order);
  }
  return skills.filter(skill => {
    if (skill.parseError || !skill.fullPath) return true;
    const order = rank(skill), key = name(skill);
    return order < 0 || !key || best.get(key) === order;
  });
}
`;

export function preferProjectSkills(text) {
  if (text.includes(skillMarker)) return text;
  const anchor = '"MergedAgentSkillsService.getAllAgentSkills"';
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + 1) !== -1) throw new Error('Merged agent skills owner missing or ambiguous');
  const window = text.slice(index, index + 3000);
  const sorted = [...window.matchAll(/void 0\s*!==\s*([\w$]+)\s*\?\s*([\w$]+)\(([\w$]+),\s*\1\)\s*:\s*\3/g)];
  if (sorted.length !== 1) throw new Error('Merged agent skills sort contract changed');
  const [match, context, sort, list] = sorted[0];
  const start = index + sorted[0].index;
  return precedenceHelper + text.slice(0, start) +
    `void 0 !== ${context} ? openvisionPreferProjectSkills(${sort}(${list}, ${context}), ${context}) : ${list}` +
    text.slice(start + match.length);
}

// Commands load team, global, plugin, project and then profile commands, and
// every directory load overwrites the same relative name, so a profile command
// silently replaced a project command. Load the profile directories before the
// plugin and project ones so the project command wins; plugin commands still
// fill only names that are not taken.
function enclosingClass(text, index) {
  // Count only real candidates: minified bundles also contain many `className` tokens.
  for (let start = text.lastIndexOf('class', index), tries = 0; start >= 0 && tries < 400; start = text.lastIndexOf('class', start - 1)) {
    if (/[\w$]/.test(text[start - 1] ?? '') || /[\w$]/.test(text[start + 5] ?? '')) continue;
    tries++;
    let node;
    try { node = parseExpressionAt(text, start, { ecmaVersion: 'latest' }); } catch { continue; }
    if (node.type === 'ClassExpression' && node.start <= index && node.end > index) return node;
  }
  throw new Error('Enclosing class not found');
}

export function projectCommandsWin(text) {
  const anchor = 'async loadAllCommands(';
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + 1) !== -1) throw new Error('Command loader owner missing or ambiguous');
  const method = enclosingClass(text, index).body.body.find(entry => entry.key?.name === 'loadAllCommands');
  const source = text.slice(method.start, method.end);
  if (source.includes(commandMarker)) return text;
  const statements = method.value.body.body;
  const personal = statements.at(-1), plugin = statements.findIndex(statement =>
    text.slice(statement.start, statement.end).includes('this.loadPluginCommands('));
  const personalText = text.slice(personal.start, personal.end);
  if (plugin < 0 || !personalText.includes('this.personalCommandsDir') || !personalText.includes('this.personalClaudeCommandsDir') ||
      !statements.slice(plugin).some(statement => text.slice(statement.start, statement.end).includes('this.workspaceCommandsDirs')))
    throw new Error('Command loader order contract changed');
  const target = statements[plugin];
  const moved = `${commandMarker} ${personalText.replace(/;?\s*$/, ';')} `;
  return text.slice(0, target.start) + moved + text.slice(target.start, personal.start) + text.slice(personal.end);
}

// The workbench rule cache keys skills by their path below the skills folder
// (`<name>/SKILL.md`), so a project and a profile skill with the same name
// share one key and whichever is pushed last replaces the other, in Customize
// and for `/name`. Process workspace items first so the project keeps the
// canonical key, and give a colliding item outside the workspace a `user/` key
// so it is still listed.
export function listSkillsFromEveryScope(text) {
  const anchor = 'async buildCacheFromPushedRules(';
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + 1) !== -1) throw new Error('Pushed rule cache owner missing or ambiguous');
  const method = enclosingClass(text, index).body.body.find(entry => entry.key?.name === 'buildCacheFromPushedRules');
  if (text.slice(method.start, method.end).includes(cacheMarker)) return text;
  const parameter = method.value.params[0]?.name;
  const declarations = method.value.body.body.find(statement => statement.type === 'VariableDeclaration');
  const set = declarations?.declarations.find(item => item.init?.type === 'NewExpression' && item.init.callee.name === 'Set')?.id.name;
  const attempt = method.value.body.body.find(statement => statement.type === 'TryStatement');
  const loop = attempt?.block.body.find(statement => statement.type === 'ForOfStatement' && statement.right.name === parameter);
  const statements = loop?.body.body ?? [];
  const record = statements.find(statement => statement.type === 'VariableDeclaration' &&
    property(statement.declarations[0]?.init, 'filename')?.type === 'Identifier');
  const key = property(record?.declarations[0].init, 'filename')?.name;
  const keyDeclaration = statements.find(statement => statement.type === 'VariableDeclaration' && statement.kind === 'let' &&
    statement.declarations.some(item => item.id.name === key));
  const paths = statements.find(statement => statement.type === 'VariableDeclaration' &&
    statement.declarations[0]?.id.type === 'ObjectPattern' && text.slice(statement.start, statement.end).includes('computePathsFromFullPath'));
  const workspace = paths?.declarations[0].id.properties.find(item => item.key.name === 'workspaceFolder')?.value.name;
  if (!parameter || !set || !loop || !record || !keyDeclaration || !workspace || !/findWorkspaceFolderForPath\([\w$]+\)\s*\{/.test(text))
    throw new Error('Pushed rule cache contract changed');
  const order = `${cacheMarker} ${parameter} = [...${parameter}].sort((left, right) =>
      Number(!!this.findWorkspaceFolderForPath(right.fullPath)) - Number(!!this.findWorkspaceFolderForPath(left.fullPath)));
    `;
  const unique = `if (${set}.has(${key}) && !${workspace}) {
          const openvisionBase = ${key}; let openvisionIndex = 2;
          for (${key} = \`user/\${openvisionBase}\`; ${set}.has(${key});) ${key} = \`user/\${openvisionBase}#\${openvisionIndex++}\`;
        }
        `;
  return text.slice(0, attempt.start) + order + text.slice(attempt.start, record.start) + unique + text.slice(record.start);
}

const property = (node, name) => node?.properties?.find(item => item.key?.name === name)?.value;

export async function installCustomizationPrecedence(root) {
  const recipe = digest(JSON.stringify(await Promise.all(['desktop/customization-precedence-customization.mjs',
    'desktop/build-cache.mjs', 'desktop/import-files.mjs', 'tooling/dependencies.mjs',
    'tooling/package-lock.json'].map(file => fileHash(join(root, file))))));
  const targets = [
    ['extensions/cursor-agent-exec/dist/main.js', text => preferProjectSkills(measureSkillConfigKey(text))],
    ['extensions/cursor-agent-host/dist/main.js', measureSkillConfigKey],
    ['extensions/cursor-local-agent-runtime/dist/main.js', measureSkillConfigKey],
    ...['desktop', 'glass'].map(variant => [`out/vs/workbench/workbench.${variant}.main.js`,
      text => listSkillsFromEveryScope(projectCommandsWin(text))]),
  ];
  for (const [relative, transform] of targets) {
    const path = join(root, 'source/app', relative);
    await cachedFile({ path, recipe, marker: join(root, `build/cache/customization-precedence-${digest(relative)}.json`) }, async () => {
      const before = await readFile(path, 'utf8'), after = transform(before);
      if (before === after) return;
      const backup = join(root, 'backups/customization-precedence', relative);
      await mkdir(dirname(backup), { recursive: true });
      await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
      await writeFile(path, after);
    });
  }
  console.log('Same-named skills, subagents and commands: project, then profile, then plugin');
}
