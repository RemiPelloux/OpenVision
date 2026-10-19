import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

// Issue #9: plaintext secrets persisted outside secret storage.
const terminalMarker = '/* OpenVision terminal state without environments v1 */';
const verifierMarker = '/* OpenVision MCP PKCE verifier in secret storage v1 */';

function single(text, pattern, label) {
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1) throw new Error(`${label} contract missing or ambiguous`);
  return matches[0];
}

// The pty host serialized every persistent terminal with its full launch
// environment (processLaunchConfig.env/executableEnv, plus any explicit
// shellLaunchConfig.env) into workspace storage. The Agent's hidden terminals
// are persistent too, so every exported secret reached state.vscdb in plain
// text, where SQLite free pages kept it even after the row was removed.
// Persist no environment; a revived terminal starts from the pty host's current
// environment instead.
export function terminalStateWithoutEnvironment(text) {
  if (text.includes(terminalMarker)) return text;
  const serialize = single(text, /\n(\s*)shellLaunchConfig: ([\w$]+)\.shellLaunchConfig,(\s*)processDetails: await this\._buildProcessDetails\(([\w$]+), \2\),\s*processLaunchConfig: \2\.processLaunchOptions,/g,
    'Terminal state serialization');
  const [whole, indent, pty, gap, id] = serialize;
  const replacement = `\n${indent}${terminalMarker}\n${indent}shellLaunchConfig: (({ env, ...rest }) => rest)(${pty}.shellLaunchConfig ?? {}),${gap}` +
    `processDetails: await this._buildProcessDetails(${id}, ${pty}),${gap}` +
    `processLaunchConfig: (({ env, executableEnv, ...rest }) => rest)(${pty}.processLaunchOptions ?? {}),`;
  let output = text.slice(0, serialize.index) + replacement + text.slice(serialize.index + whole.length);
  const revive = single(output, /([\w$]+)\.processLaunchConfig\.env,(\s*)\1\.processLaunchConfig\.executableEnv,/g, 'Terminal revival');
  const [reviveText, state, space] = revive;
  output = output.slice(0, revive.index) +
    `${state}.processLaunchConfig.env ?? { ...process.env },${space}${state}.processLaunchConfig.executableEnv ?? { ...process.env },` +
    output.slice(revive.index + reviveText.length);
  return output;
}

// The legacy cursor-mcp OAuth owner kept the session PKCE verifier as a plain
// extension globalState value (mirrored into the shared application store) and
// wrote each attempt's verifier into the attempt JSON file. Keep both only in
// secret storage: the attempt reader already merges
// `[oauth-attempt:<id>] mcp_code_verifier` back from secrets.
export function legacyVerifierInSecrets(text) {
  if (text.includes(verifierMarker)) return text;
  const save = single(text, /async saveCodeVerifier\(([\w$]+)\) \{([\s\S]{0,300}?)await this\.updateOAuthAttemptState\(\{ codeVerifier: \1 \}\),\s*this\.oauthContext\.globalState\.get\(this\.codeVerifierKey\) !== \1 &&\s*\(await this\.oauthContext\.globalState\.update\(this\.codeVerifierKey, \1\)\)\);/g,
    'Legacy verifier save');
  const [saveText, value, prefix] = save;
  let output = text.slice(0, save.index) + `async saveCodeVerifier(${value}) {${prefix}await this.updateOAuthAttemptState({ codeVerifier: ${value} }),
          ${verifierMarker}
          (await this.oauthContext.secrets.get(this.codeVerifierKey)) !== ${value} &&
            (await this.oauthContext.secrets.store(this.codeVerifierKey, ${value})),
          this.oauthContext.globalState.get(this.codeVerifierKey) !== void 0 &&
            (await this.oauthContext.globalState.update(this.codeVerifierKey, void 0)));` + text.slice(save.index + saveText.length);
  const attempt = single(output, /const ([\w$]+) = this\.getOrCreateOAuthAttemptId\(\),\s*([\w$]+) = await [\w$]+\(this\.oauthContext, \1\),/g, 'Legacy attempt state');
  const [, attemptId] = attempt;
  const field = single(output, /codeVerifier: ([\w$]+)\.codeVerifier \?\? ([\w$]+)\?\.codeVerifier,/g, 'Legacy attempt verifier field');
  if (field.index < attempt.index || field.index - attempt.index > 3000) throw new Error('Legacy attempt verifier field moved');
  const [fieldText, update] = field;
  output = output.slice(0, field.index) + 'codeVerifier: void 0,' + output.slice(field.index + fieldText.length);
  const insertAt = attempt.index + attempt[0].length;
  return output.slice(0, insertAt) + `
          openvisionVerifierStored = ${update}.codeVerifier &&
            (await this.oauthContext.secrets.store(\`[oauth-attempt:\${${attemptId}}] mcp_code_verifier\`, ${update}.codeVerifier)),` +
    output.slice(insertAt);
}

export async function installSecretPersistence(root) {
  const recipe = digest(JSON.stringify(await Promise.all(['desktop/secret-persistence-customization.mjs',
    'desktop/build-cache.mjs', 'desktop/import-files.mjs'].map(file => fileHash(join(root, file))))));
  for (const [relative, transform] of [['out/vs/platform/terminal/node/ptyHostMain.js', terminalStateWithoutEnvironment],
    ['extensions/cursor-mcp/dist/main.js', legacyVerifierInSecrets]]) {
    const path = join(root, 'source/app', relative);
    await cachedFile({ path, recipe, marker: join(root, `build/cache/secret-persistence-${digest(relative)}.json`) }, async () => {
      const before = await readFile(path, 'utf8'), after = transform(before);
      if (before === after) return;
      const backup = join(root, 'backups/secret-persistence', relative);
      await mkdir(dirname(backup), { recursive: true });
      await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
      await writeFile(path, after);
    });
  }
  console.log('Terminal state persists no environment; legacy MCP PKCE verifiers stay in secret storage');
}
