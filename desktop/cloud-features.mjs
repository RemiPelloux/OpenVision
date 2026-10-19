import { parseExpressionAt, tokenizer } from '../tooling/dependencies.mjs';

const options = { ecmaVersion: 'latest', sourceType: 'module' };
const disabledTabs = ['background-composer', 'grok-bot', 'plan-usage', 'profile', 'self-driving', 'git-prs'];

function owner(text, anchor) {
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + anchor.length) >= 0)
    throw new Error(`Cloud feature owner missing or ambiguous: ${anchor}`);
  const start = [...text.slice(0, index).matchAll(/^function [\w$]+\(/gm)].at(-1)?.index;
  if (start === undefined) throw new Error(`Missing cloud function: ${anchor}`);
  let node = parseExpressionAt(text, start, options);
  while (node.type === 'CallExpression') node = node.callee;
  if (node.type !== 'FunctionExpression' || node.end < index)
    throw new Error(`Invalid cloud function: ${anchor}`);
  return node;
}

function guard(text, node, code, reason) {
  if (text.slice(node.body.start, node.body.end).includes(code)) return [];
  return [{ start: node.body.start + 1, end: node.body.start + 1, after: `\n${code}\n`, reason }];
}

function settingsVisibility(text) {
  const match = /return ([\w$]+) === "plugins" \|\|/.exec(text);
  if (!match) throw new Error('Settings visibility contract missing');
  const node = owner(text, match[0]);
  return guard(text, node, `if (${JSON.stringify(disabledTabs)}.includes(${node.params[0].name})) return false;`, 'cloud settings navigation');
}

function commandRegistration(text) {
  const anchor = /^    \{ f1: [\w$]+, menu: [\w$]+, keybinding: [\w$]+, \.\.\.[\w$]+ \} = [\w$]+\.desc;/m.exec(text)?.[0];
  if (!anchor) throw new Error('Action registration owner missing');
  const node = owner(text, anchor);
  const declaration = node.body.body.find(statement => statement.type === 'VariableDeclaration');
  const descriptor = declaration?.declarations.find(item => item.id.type === 'ObjectPattern');
  const rest = descriptor?.id.properties.find(property => property.type === 'RestElement')?.argument.name;
  if (!rest) throw new Error('Action registration descriptor not identified');
  const code = `const openvisionActionTitle = typeof ${rest}.title === "string" ? ${rest}.title : (${rest}.title?.original ?? ${rest}.title?.value ?? "");
if (/backgroundComposer|cloudAgent|cloudMetaAgent|startCloud|moveToCloud/i.test(${rest}.id) || /cloud[ -]*(agent|runtime)|background agent/i.test(openvisionActionTitle)) return {dispose() {}};`;
  if (text.slice(node.start, node.end).includes('const openvisionActionTitle')) return [];
  return [{ start: declaration.end, end: declaration.end, after: `\n${code}\n`, reason: 'cloud command and menu registration' }];
}

function callAt(text, start) {
  const tokens = tokenizer(text.slice(start), options);
  let depth = 0;
  for (;;) {
    const token = tokens.getToken();
    if (token.type.label === 'eof') throw new Error('Unterminated setting call');
    if (token.type.label === '(') depth++;
    if (token.type.label !== ')' || --depth !== 0) continue;
    const node = parseExpressionAt(text.slice(start, start + token.end), 0, options);
    return { node, end: start + token.end };
  }
}

function cloudNotifications(text) {
  const anchor = 'label: "Cloud Agent Approval Banners While Focused"';
  const patches = [];
  for (const match of text.matchAll(/label: "Cloud Agent Approval Banners While Focused"/g)) {
    const preceding = text.slice(Math.max(0, match.index - 1500), match.index);
    const entry = [...preceding.matchAll(/[\w$]+\([\w$]+\.Entry, \{/g)].at(-1);
    const catalog = [...preceding.matchAll(/[\w$]+\("general", "[\w-]+", \{/g)].at(-1);
    const selected = !entry || (catalog && catalog.index > entry.index) ? catalog : entry;
    if (!selected) throw new Error(`Cloud notification producer missing: ${anchor}`);
    const start = Math.max(0, match.index - 1500) + selected.index;
    const { node, end: callEnd } = callAt(text, start);
    if (node.type !== 'CallExpression' || callEnd <= match.index) throw new Error('Invalid notification producer');
    if (selected === catalog) {
      const end = callEnd + /^\s*,/.exec(text.slice(callEnd))?.[0].length;
      if (!Number.isInteger(end)) throw new Error('Catalog delimiter missing');
      patches.push({ start, end, after: '', reason: 'cloud notification search entry' });
    } else patches.push({ start, end: callEnd, after: 'null', reason: 'cloud notification setting' });
  }
  return patches;
}

function skillsControls(text) {
  const descriptor = /([\w$]+) = \{\s+label: "Sync Skills for Cloud Agents"/.exec(text);
  const offer = /([\w$]+) = \{\s+offerTitle: "Use your skills with Cloud Agents"/.exec(text);
  if (!descriptor || !offer) throw new Error('Cloud skills descriptors missing');
  return [
    ...guard(text, owner(text, `description: ${descriptor[1]}.description`), 'return null;', 'cloud skills sync control'),
    ...guard(text, owner(text, `ariaLabel: ${offer[1]}.ariaLabel`), 'return null;', 'cloud skills sync offer'),
  ];
}

function skillsBackend(text) {
  const anchor = '"userAgentStoreSkillsSyncSettingsService"';
  const index = text.indexOf(anchor);
  if (index < 0) throw new Error('Cloud skills service missing');
  const start = text.indexOf('class extends', index);
  const node = parseExpressionAt(text, start, options);
  return ['ensureLoaded', 'refresh', '_fetchState', 'setEnabled'].flatMap(name => {
    const method = node.body.body.find(method => method.key?.name === name)?.value;
    if (!method) throw new Error(`Missing cloud skills method ${name}`);
    return guard(text, method, 'return { status: "unavailable" };', `disabled cloud skills ${name}`);
  });
}

// Hosted cloud-agent repository readiness: a watch on the first folder's
// .openvision/environment.json (its parent folder while the file is missing),
// a git-status hook and a five-minute poll in every main window. A watch
// requested during window teardown outlived the closed window in the main
// process (OV-304 --watchers). The readiness cache only serves cloud agents.
function repoReadinessWatchers(text) {
  const matches = [...text.matchAll(/\n(\s*)setupRepoReadinessWatchers\(\) \{/g)];
  if (matches.length !== 1) throw new Error('Cloud repository readiness owner missing or ambiguous');
  const code = 'return; /* OpenVision: hosted cloud repository readiness disabled */';
  const start = matches[0].index + matches[0][0].length;
  if (text.slice(start, start + 200).includes(code)) return [];
  return [{ start, end: start, after: `\n${matches[0][1]}  ${code}`, reason: 'cloud repository readiness watchers' }];
}

export function disableCloudFeatures(text) {
  const patches = [...settingsVisibility(text), ...commandRegistration(text), ...cloudNotifications(text),
    ...skillsControls(text), ...skillsBackend(text), ...repoReadinessWatchers(text)];
  const environment = '  { id: "cloud", label: "Cloud" },';
  const index = text.indexOf(environment);
  if (index >= 0) {
    if (text.indexOf(environment, index + 1) >= 0) throw new Error('Ambiguous cloud environment selector');
    patches.push({ start: index, end: index + environment.length, after: '', reason: 'cloud environment choice' });
  }
  for (const patch of patches.sort((a, b) => b.start - a.start))
    text = text.slice(0, patch.start) + patch.after + text.slice(patch.end);
  return { text, patches };
}
