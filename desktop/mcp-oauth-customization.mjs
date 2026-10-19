import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

const marker = '/* OpenVision MCP OAuth denial v1 */';
const promptMarker = '/* OpenVision MCP OAuth runtime re-authentication v1 */';

// The recovered MCP utility handles a callback without `code` as an internal
// `missing_code` error: the denial is never shown, the server stays in
// needsAuth and the workbench connect flow waits for its two-minute timeout.
// OAuth 2.1 / RFC 6749 §4.1.2.1 return `error` (for example access_denied)
// instead. Report it on the server status, which the connect flow turns into
// its existing "Could not connect to MCP server" notification, discard the
// attempt (its verifier and client secret), and reload so Authenticate offers
// a fresh attempt. Nothing is stored and nothing is retried automatically.
// The class expression that encloses `index` (minified bundles write `class{`).
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

export function mcpOAuthCallbackMethod(text) {
  const anchor = 'async handleOAuthCallback(';
  const candidates = [];
  for (let index = text.indexOf(anchor); index >= 0; index = text.indexOf(anchor, index + anchor.length)) {
    const owner = enclosingClass(text, index);
    const method = owner.body.body.find(entry => entry.key?.name === 'handleOAuthCallback' &&
      entry.start <= index && entry.end > index);
    if (method && text.slice(method.start, method.end).includes('"missing_code"')) candidates.push(method);
  }
  if (candidates.length !== 1) throw new Error('MCP OAuth callback owner missing or ambiguous');
  const method = candidates[0];
  if (method.value.params.length !== 1 || method.value.params[0].type !== 'Identifier')
    throw new Error('MCP OAuth callback signature changed');
  return method;
}

const property = (node, name) => node?.properties?.find(item => item.key?.name === name)?.value;

export function reportMcpOAuthDenial(text) {
  const method = mcpOAuthCallbackMethod(text), source = text.slice(method.start, method.end);
  if (source.includes(marker)) return text;
  const statements = method.value.body.body, parameter = method.value.params[0].name;
  const missing = statements.find(statement => statement.type === 'IfStatement' && statement.test.type === 'UnaryExpression' &&
    statement.test.operator === '!' && statement.test.argument.type === 'Identifier' &&
    property(statement.consequent.argument ?? statement.consequent.body?.[0]?.argument, 'reason')?.value === 'missing_code');
  const exchange = statements.find(statement => statement.type === 'TryStatement' &&
    text.slice(statement.block.start, statement.block.end).includes('authorizationCode:'));
  if (!missing || !exchange || missing.end > exchange.start) throw new Error('MCP OAuth callback exchange contract changed');
  const handler = text.slice(exchange.handler.start, exchange.handler.end), block = text.slice(exchange.block.start, exchange.block.end);
  const status = /this\.registry\.updateStatus\(([\w$]+)\.identifier,\s*\{\s*type:\s*"error"/.exec(handler);
  const cleanup = /([\w$]+)\.clearOAuthAttemptState\(([\w$]+)\.attemptState\.attemptId\)/.exec(handler);
  const reload = /this\.registry\.reload\(([\w$]+)\.identifier,\s*([\w$]+)\)/.exec(block);
  if (!status || !cleanup || !reload || reload[1] !== status[1] || !source.includes('this.warnServer('))
    throw new Error('MCP OAuth callback status/cleanup contract changed');
  const code = missing.test.argument.name, server = status[1], provider = cleanup[1], attempt = cleanup[2], definition = reload[2];
  const denial = 'openvisionOAuthDenial';
  const declaration = `${marker}
      const ${denial} = ${code} ? void 0 : (() => {
        const query = new URLSearchParams(${parameter}.query), error = query.get("error");
        if (!error) return;
        // Server-supplied text: printable ASCII only, bounded.
        const clean = value => String(value).replace(/[^\\x20-\\x7e]/g, "").slice(0, 200).trim();
        return { error: clean(error).replace(/[^\\w.-]/g, "") || "access_denied",
          description: query.get("error_description") ? clean(query.get("error_description")) : "" };
      })();
`;
  const report = `
      if (${denial}) {
        const reason = ${denial}.description ? \`\${${denial}.error}: \${${denial}.description}\` : ${denial}.error;
        this.warnServer(${server}.identifier, \`OAuth authorization was not granted: \${reason}\`);
        await ${provider}.clearOAuthAttemptState(${attempt}.attemptState.attemptId).catch(cleanupError => {
          this.warnServer(${server}.identifier, \`OAuth denial cleanup failed: \${cleanupError instanceof Error ? cleanupError.message : String(cleanupError)}\`);
        });
        this.registry.updateStatus(${server}.identifier, { type: "error",
          error: \`Authorization was denied (\${reason}). No credentials were saved; choose Authenticate to try again.\` });
        // A fresh connection returns to needsAuth with a new attempt; it never retries consent by itself.
        setTimeout(() => this.registry.reload(${server}.identifier, ${definition}), 0);
        return { kind: "handled", identifier: ${server}.identifier, attemptId: ${attempt}.attemptState.attemptId, denied: ${denial}.error };
      }
`;
  return text.slice(0, missing.start) + declaration + text.slice(missing.start, missing.test.end) + ` && !${denial}` +
    text.slice(missing.test.end, exchange.start) + report + text.slice(exchange.start);
}

// After a connection succeeds, the recovered utility routes runtime auth
// events (a refresh rejected with invalid_grant ends in auth_required) to the
// connection FSM only for a fixed list of "lazy auth" hosts. For every other
// OAuth server the event is ignored, the failed operation marks the
// credentials expired, and the server shows "Error - Show Output" without an
// Authenticate action. Accept the event for HTTP transports so the server
// returns to needsAuth with a fresh authorization URL. Superseded connection
// attempts are still ignored by the existing sink identity check, and nothing
// opens a browser or retries the failed operation by itself.
export function runtimeOAuthPromptMethod(text) {
  const anchor = 'activateRuntimeAuthEventSinkIfEligible(';
  const definitions = [];
  for (let index = text.indexOf(anchor); index >= 0; index = text.indexOf(anchor, index + anchor.length)) {
    const owner = enclosingClass(text, index);
    const method = owner.body.body.find(entry => entry.key?.name === 'activateRuntimeAuthEventSinkIfEligible' &&
      entry.start <= index && entry.end > index);
    if (method) definitions.push({ owner, method });
  }
  if (definitions.length !== 1) throw new Error('MCP runtime auth sink owner missing or ambiguous');
  const { owner, method } = definitions[0];
  if (!owner.body.body.some(entry => entry.key?.name === 'handleRuntimeAuthEvent') ||
      method.value.params.length !== 1 || method.value.params[0].type !== 'Identifier')
    throw new Error('MCP runtime auth sink contract changed');
  return method;
}

export function acceptRuntimeOAuthPrompts(text) {
  const method = runtimeOAuthPromptMethod(text), source = text.slice(method.start, method.end);
  if (source.includes(promptMarker)) return text;
  const statements = method.value.body.body, sink = method.value.params[0].name;
  const gate = statements[0]?.expression;
  const guard = gate?.type === 'LogicalExpression' && gate.operator === '&&' ? text.slice(gate.left.start, gate.left.end) : '';
  const assignment = gate?.right?.type === 'AssignmentExpression' ? text.slice(gate.right.start, gate.right.end) : '';
  if (statements.length !== 1 || guard !== 'this.isLazyAuthServer()' ||
      assignment.replace(/\s+/g, '') !== `this.activeRuntimeAuthEventSink=${sink}`)
    throw new Error('MCP runtime auth sink eligibility changed');
  return text.slice(0, gate.left.start) + `${promptMarker} (this.isLazyAuthServer() || this.serverInfo.type !== "stdio")` +
    text.slice(gate.left.end);
}

export function customizeMcpOAuth(text) {
  return acceptRuntimeOAuthPrompts(reportMcpOAuthDenial(text));
}

export async function installMcpOAuth(root) {
  const relative = 'out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js';
  const path = join(root, 'source/app', relative);
  const recipe = digest(JSON.stringify(await Promise.all(['desktop/mcp-oauth-customization.mjs',
    'desktop/build-cache.mjs', 'desktop/import-files.mjs', 'tooling/dependencies.mjs',
    'tooling/package-lock.json'].map(file => fileHash(join(root, file))))));
  await cachedFile({ path, recipe, marker: join(root, 'build/cache/mcp-oauth.json') }, async () => {
    const before = await readFile(path, 'utf8'), after = customizeMcpOAuth(before);
    if (before === after) return;
    const backup = join(root, 'backups/mcp-oauth', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  });
  console.log('MCP OAuth denial is reported and a rejected refresh returns to Authenticate');
}
