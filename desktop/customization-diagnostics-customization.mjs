import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';
import { subagentReaderOwner } from './subagent-paths.mjs';

// OV-304 invalid-customization diagnostics. The recovered workbench records MCP
// configuration problems in a signal nothing reads, and keeps a skill's YAML or
// missing-description error only on the rule object; the user sees nothing.
// Report both as one warning per file, naming the file and every reason, close
// it when the file is fixed, and keep loading the valid entries.

const mcpMarker = '/* OpenVision MCP configuration diagnostics v1 */';
const skillMarker = '/* OpenVision skill diagnostics v1 */';
const execMarker = '/* OpenVision subagent and plugin manifest diagnostics v1 */';
const refreshMarker = '/* OpenVision MCP list refresh after config change v1 */';

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
function ownedMethod(text, name) {
  const anchor = `async ${name}(`;
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + 1) !== -1) throw new Error(`${name} owner missing or ambiguous`);
  const method = enclosingClass(text, index).body.body.find(entry => entry.key?.name === name && entry.start <= index && entry.end > index);
  if (!method) throw new Error(`${name} owner changed`);
  return method;
}

// Pure checks shared by the injected code and the unit tests.
export const mcpConfigChecks = `function openvisionMcpConfigProblems(config) {
  if (!config || typeof config !== "object" || Array.isArray(config) || !config.mcpServers ||
      typeof config.mcpServers !== "object" || Array.isArray(config.mcpServers))
    return ['"mcpServers" must be an object'];
  const problems = [], transports = new Set(["stdio", "sse", "http", "streamablehttp", "streamable-http", "streamable_http"]);
  for (const [name, server] of Object.entries(config.mcpServers)) {
    let problem;
    const transport = server && typeof server === "object" ? server.type ?? server.transport : undefined;
    if (!server || typeof server !== "object" || Array.isArray(server)) problem = "must be an object";
    else if (transport !== undefined && (typeof transport !== "string" || !transports.has(transport.toLowerCase())))
      problem = \`has an unknown transport \${JSON.stringify(transport)}; use stdio, http, streamableHttp or sse\`;
    else if (server.command === undefined && server.url === undefined) problem = 'needs a "command" (stdio) or a "url" (HTTP)';
    else if (server.command !== undefined && (typeof server.command !== "string" || !server.command.trim()))
      problem = '"command" must be a non-empty string';
    else if (server.command === undefined && (typeof server.url !== "string" || !server.url.trim()))
      problem = '"url" must be a non-empty string';
    else if (server.args !== undefined && !Array.isArray(server.args)) problem = '"args" must be an array';
    else for (const field of ["env", "headers"]) {
      const value = server[field];
      if (value !== undefined && (!value || typeof value !== "object" || Array.isArray(value))) { problem = \`"\${field}" must be an object\`; break; }
    }
    if (problem) { problems.push(\`server "\${name}" \${problem}\`); delete config.mcpServers[name]; }
  }
  return problems;
}`;

// One sticky warning per file; replaced when the reasons change, closed when fixed.
const noticeHelper = `function openvisionCustomizationNotice(owner, notifications, key, file, reasons, tail) {
  const shown = owner.openvisionCustomizationNotices ??= new Map(), text = reasons.join("; "), current = shown.get(key);
  if (current?.text === text) return;
  current?.handle.close(); shown.delete(key);
  if (!reasons.length || !notifications) return;
  const handle = notifications.notify({ severity: 2, sticky: true, message: \`\${file}: \${text}. \${tail}\` });
  shown.set(key, { text, handle });
}`;

export function reportMcpConfigProblems(text) {
  const method = ownedMethod(text, 'parseMcpServersFromFile');
  if (text.slice(method.start, method.end).includes(mcpMarker)) return text;
  const [uri] = method.value.params.map(param => param.name);
  const attempt = method.value.body.body.find(statement => statement.type === 'TryStatement');
  const parse = attempt?.block.body[0];
  const parsed = parse?.type === 'VariableDeclaration' && parse.declarations.find(item =>
    item.init?.type === 'CallExpression' && text.slice(item.init.start, item.init.end).endsWith('.value.toString())'));
  const failure = attempt?.handler?.param?.name;
  if (!uri || !parsed || !failure || !text.includes('this.notificationService = ') && !text.includes('this.notificationService='))
    throw new Error('MCP configuration parse contract changed');
  const config = parsed.id.name, body = method.value.body;
  const report = `this.openvisionReportMcpConfig(${uri}, openvisionProblems, openvisionFailure)`;
  return text.slice(0, method.start) + `openvisionReportMcpConfig(file, problems, failure) {
    const reasons = [...problems];
    if (failure && failure.code !== "FileNotFound")
      reasons.unshift(failure instanceof SyntaxError ? \`JSON syntax error: \${failure.message}\` : failure instanceof Error ? failure.message : String(failure));
    openvisionCustomizationNotice(this, this.notificationService, \`mcp:\${file.toString()}\`,
      \`MCP configuration \${file.fsPath ?? file.path}\`, reasons,
      failure ? "No servers from this file were loaded." : "The other servers in this file still load.");
  }
  ` + text.slice(method.start, body.start + 1) + `
    ${mcpMarker}
    let openvisionProblems = [], openvisionFailure;
    try {` + text.slice(body.start + 1, parse.end) + `
      openvisionProblems = openvisionMcpConfigProblems(${config});` +
    text.slice(parse.end, attempt.handler.body.start + 1) + ` openvisionFailure = ${failure};` +
    text.slice(attempt.handler.body.start + 1, body.end - 1) + `
    } finally { ${report}; }
  ` + text.slice(body.end - 1);
}

export function reportSkillProblems(text) {
  const method = ownedMethod(text, 'buildCacheFromPushedRules');
  if (text.slice(method.start, method.end).includes(skillMarker)) return text;
  const attempt = method.value.body.body.find(statement => statement.type === 'TryStatement');
  const services = [...text.matchAll(/([\w$]+)\s*=\s*[\w$]+\("notificationService"\)/g)];
  if (!attempt?.finalizer || services.length !== 1 || !text.slice(method.start, method.end).includes('this._providerRulesCache'))
    throw new Error('Pushed rule cache diagnostics contract changed');
  const service = services[0][1], end = attempt.finalizer.end - 1;
  const report = `
        ${skillMarker}
        try {
          const openvisionNotifications = this.instantiationService.invokeFunction(accessor => accessor.get(${service}));
          const openvisionBroken = new Map([...this._providerRulesCache.values()]
            .filter(rule => rule.parseError && /[\\\\/]SKILL\\.md$/.test(rule.fullPath ?? "")).map(rule => [rule.fullPath, rule.parseError]));
          for (const key of [...(this.openvisionCustomizationNotices?.keys() ?? [])])
            if (key.startsWith("skill:") && !openvisionBroken.has(key.slice(6))) openvisionCustomizationNotice(this, openvisionNotifications, key, "", [], "");
          for (const [path, reason] of openvisionBroken)
            openvisionCustomizationNotice(this, openvisionNotifications, \`skill:\${path}\`, \`Skill \${path}\`, [String(reason)],
              "The Agent does not use this skill until the file is fixed.");
        } catch {}
      `;
  return text.slice(0, end) + report + text.slice(end);
}

// A changed MCP configuration file re-reads its servers and initializes them,
// but the Customize MCP list refreshes only on onSettingsChanged or the first
// onDidInitialize, so a removed server stayed listed as connected. Fire the
// settings event once a configuration file change has been applied.
export function refreshMcpListOnConfigChange(text) {
  const candidates = [];
  for (let index = text.indexOf('async onDidFilesChange('); index >= 0; index = text.indexOf('async onDidFilesChange(', index + 1)) {
    const method = enclosingClass(text, index).body.body.find(entry => entry.key?.name === 'onDidFilesChange' && entry.start <= index && entry.end > index);
    if (method && text.slice(method.start, method.end).includes('"user_mcp_config_changed"')) candidates.push(method);
  }
  if (candidates.length !== 1) throw new Error('MCP configuration watcher owner missing or ambiguous');
  const [method] = candidates, source = text.slice(method.start, method.end);
  if (source.includes(refreshMarker)) return text;
  const flag = method.value.body.body[0]?.declarations?.find(item => item.init?.type === 'UnaryExpression' &&
    item.init.operator === '!' && item.init.argument.value === 1)?.id.name;
  if (!flag || !source.includes('this.initializeServers(') || !text.includes('this._onSettingsChanged.fire()'))
    throw new Error('MCP configuration watcher contract changed');
  const end = method.value.body.end - 1;
  return text.slice(0, end) + `\n            ${refreshMarker} ${flag} && this._onSettingsChanged.fire();\n          ` + text.slice(end);
}

// The helpers are module-level function declarations at the top of the bundle.
export function customizeWorkbenchDiagnostics(text) {
  const result = refreshMcpListOnConfigChange(reportSkillProblems(reportMcpConfigProblems(text)));
  if (result.includes('function openvisionMcpConfigProblems(')) return result;
  const hashbang = /^#![^\n]*\n/.exec(result)?.[0] ?? '';
  return hashbang + `${mcpConfigChecks}\n${noticeHelper}\n` + result.slice(hashbang.length);
}

// Agent-exec: a subagent file without frontmatter or body, and an unreadable or
// invalid plugin manifest, were skipped with debug logging only. Report them
// through one extension-host warning per file and reason; a later successful
// load forgets the file, so the next problem is reported again.
const execHook = `${execMarker}
globalThis.openvisionCustomizationProblem ??= (() => {
  const shown = new Map();
  return (path, reason) => {
    if (!reason) { shown.delete(path); return; }
    if (shown.get(path) === reason) return;
    shown.set(path, reason);
    try { require("vscode").window.showWarningMessage(\`\${path}: \${reason}\`); } catch {}
  };
})();
`;
const report = (path, reason) => `globalThis.openvisionCustomizationProblem?.(${path}, ${reason})`;

export function reportSubagentAndPluginProblems(text) {
  if (text.includes(execMarker)) return text;
  const owner = subagentReaderOwner(text);
  const load = owner.body.body.find(entry => entry.key?.name === 'load');
  const edits = [];
  const walk = (node, visit) => { if (!node || typeof node.type !== 'string') return; visit(node);
    for (const value of Object.values(node)) for (const child of Array.isArray(value) ? value : [value])
      if (child && typeof child.type === 'string') walk(child, visit); };
  let fileLoop;
  walk(load, node => { if (node.type === 'ForOfStatement' && node.left.declarations?.[0]?.id.name &&
    text.slice(node.start, node.end).includes('.isFile()')) fileLoop = node; });
  const file = fileLoop?.left.declarations[0].id.name;
  const parse = fileLoop?.body.body.find(statement => statement.type === 'TryStatement' && statement.block.body[1]?.type === 'IfStatement' &&
    statement.block.body[1].consequent.type === 'ContinueStatement');
  const skip = parse?.block.body[1], push = parse?.block.body[2];
  if (!file || !skip || skip.test.type !== 'UnaryExpression' || !push || !parse.handler)
    throw new Error('Subagent load contract changed');
  edits.push({ at: skip.start, end: skip.end, text: `if (${text.slice(skip.test.start, skip.test.end)}) { ${report(file,
    '"this subagent was not loaded: it needs front matter between --- lines followed by a non-empty body"')}; continue; }` });
  edits.push({ at: push.end, end: push.end, text: ` ${report(file, 'undefined')};` });
  const handler = parse.handler.body;
  edits.push({ at: handler.start + 1, end: handler.start + 1,
    text: ` ${report(file, `\`this subagent could not be read: \${${parse.handler.param.name}?.message ?? ${parse.handler.param.name}}\``)};` });

  // The manifest loop logs `${name}: ${relativeManifest} declares an unrecognized $schema`.
  const anchors = [...text.matchAll(/\$\{[\w$]+\}: \$\{[\w$]+\} declares an unrecognized \$schema/g)];
  if (anchors.length !== 1) throw new Error('Plugin manifest reader missing or ambiguous');
  const anchor = anchors[0].index;
  let reader;
  for (let start = text.lastIndexOf('function', anchor); start >= 0 && !reader; start = text.lastIndexOf('function', start - 1)) {
    let node; try { node = parseExpressionAt(text, start, { ecmaVersion: 'latest' }); } catch { continue; }
    if (node.type === 'FunctionExpression' && node.end > anchor && text.slice(node.start, node.end).includes('.cursor-plugin') === false &&
      node.body.body.some(statement => statement.type === 'ForOfStatement')) reader = node;
  }
  const manifests = reader?.body.body.find(statement => statement.type === 'ForOfStatement');
  const steps = manifests?.body.body ?? [];
  const path = steps[0]?.type === 'VariableDeclaration' ? steps[0].declarations[0].id.name : undefined;
  const read = steps.find(statement => statement.type === 'TryStatement' && statement.handler?.body.body[0]?.type === 'ContinueStatement');
  const checkIndex = steps.findIndex(statement => statement.type === 'IfStatement' && statement.consequent.type === 'ContinueStatement' &&
    /^![\w$]+\.success$/.test(text.slice(statement.test.start, statement.test.end)));
  const check = steps[checkIndex];
  if (!path || !read || !check) throw new Error('Plugin manifest reader contract changed');
  const error = read.handler.param?.name ?? 'openvisionError';
  const result = text.slice(check.test.argument.start, check.test.argument.end).replace(/\.success$/, '');
  edits.push({ at: read.handler.body.start + 1, end: read.handler.body.start + 1,
    text: ` if (!["ENOENT", "ENOTDIR"].includes(${error}?.code)) ${report(path, `\`this plugin manifest could not be read: \${${error}?.message ?? ${error}}\``)};` });
  edits.push({ at: check.start, end: check.end, text: `if (!${result}.success) { ${report(path,
    `\`this plugin manifest was not used: \${String(typeof ${result}.error === "string" ? ${result}.error : ${result}.error?.message ?? "it does not match the manifest schema").slice(0, 300)}\``)}; continue; }
              ${report(path, 'undefined')};` });
  if (!read.handler.param) edits.push({ at: read.handler.start, end: read.handler.body.start, text: `catch (${error}) ` });
  let output = text;
  for (const edit of edits.sort((left, right) => right.at - left.at)) output = output.slice(0, edit.at) + edit.text + output.slice(edit.end);
  return execHook + output;
}

export async function installCustomizationDiagnostics(root) {
  const recipe = digest(JSON.stringify(await Promise.all(['desktop/customization-diagnostics-customization.mjs',
    'desktop/subagent-paths.mjs', 'desktop/telemetry-patches.mjs', 'desktop/build-cache.mjs', 'desktop/import-files.mjs', 'tooling/dependencies.mjs',
    'tooling/package-lock.json'].map(file => fileHash(join(root, file))))));
  const targets = [...['desktop', 'glass'].map(variant => [`out/vs/workbench/workbench.${variant}.main.js`, customizeWorkbenchDiagnostics]),
    ['extensions/cursor-agent-exec/dist/main.js', reportSubagentAndPluginProblems]];
  for (const [relative, transform] of targets) {
    const path = join(root, 'source/app', relative);
    await cachedFile({ path, recipe, marker: join(root, `build/cache/customization-diagnostics-${digest(relative)}.json`) }, async () => {
      const before = await readFile(path, 'utf8'), after = transform(before);
      if (before === after) return;
      const backup = join(root, 'backups/customization-diagnostics', relative);
      await mkdir(dirname(backup), { recursive: true });
      await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
      await writeFile(path, after);
    });
  }
  console.log('Invalid MCP configuration, skills, subagents and plugin manifests report a visible warning naming the file');
}
