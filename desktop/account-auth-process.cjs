'use strict';

const { spawn } = require('node:child_process');
const { isAbsolute } = require('node:path');
const MAX_OUTPUT = 4 * 1024 * 1024;

function accountEnvironment(options) {
  if (!isAbsolute(options.executable) || !isAbsolute(options.accountDirectory)) throw new Error('Account runtime paths must be absolute.');
  if (!['codex', 'claude'].includes(options.provider)) throw new Error('Unknown account provider.');
  const env = { ...process.env, DO_NOT_TRACK: '1', DISABLE_TELEMETRY: '1', CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: '1' };
  for (const key of ['ELECTRON_RUN_AS_NODE', 'OPENAI_API_KEY', 'ANTHROPIC_API_KEY', 'ANTHROPIC_AUTH_TOKEN',
    'CLAUDE_CODE_OAUTH_TOKEN', 'CODEX_ACCESS_TOKEN']) delete env[key];
  env[options.provider === 'codex' ? 'CODEX_HOME' : 'CLAUDE_CONFIG_DIR'] = options.accountDirectory;
  return env;
}

function ownedProcess(options, args, timeoutMs) {
  options.signal?.throwIfAborted();
  const child = spawn(options.executable, args, { env: accountEnvironment(options),
    cwd: options.accountDirectory, windowsHide: true, stdio: ['pipe', 'pipe', 'pipe'] });
  let failure, ended = false;
  const stop = error => { failure ??= error; if (!ended) child.kill(); };
  const abort = () => stop(new Error('Account operation cancelled.'));
  options.signal?.addEventListener('abort', abort, { once: true });
  const timeout = setTimeout(() => stop(new Error('Account operation timed out. Try again.')), timeoutMs);
  timeout.unref?.();
  // Official clients can emit sensitive diagnostics. Drain them without retaining them.
  child.stderr.resume();
  const exit = new Promise(resolve => {
    child.once('error', () => { failure ??= new Error('Could not start the official account client. Check its installation.'); });
    child.once('close', code => {
      ended = true; clearTimeout(timeout); options.signal?.removeEventListener('abort', abort); resolve({ code, failure });
    });
  });
  return { child, exit, stop, close: async () => { if (!ended) child.kill(); await exit; } };
}

async function runJson(options, args, onText) {
  const process = ownedProcess(options, args, onText ? 10 * 60 * 1000 : 30000);
  let output = '', callbackError, sequence = Promise.resolve();
  process.child.stdout.setEncoding('utf8');
  process.child.stdout.on('data', chunk => {
    output += chunk;
    if (output.length > MAX_OUTPUT) process.stop(new Error('Official account client output exceeded its limit.'));
    if (onText) sequence = sequence.then(() => onText(output, process.child.stdin, process.exit)).catch(error => { callbackError = error; process.stop(error); });
  });
  const result = await process.exit;
  await sequence;
  if (callbackError || result.failure) throw callbackError ?? result.failure;
  if (onText) { if (result.code !== 0) throw new Error('Sign-in did not complete. Retry or cancel the pending login.'); return; }
  let parsed;
  try { parsed = JSON.parse(output); } catch { throw new Error('Official account client returned an unreadable status.'); }
  // Claude exits 1 for its documented signed-out status JSON.
  if (result.code !== 0 && parsed.loggedIn !== false) throw new Error('Official account status check failed.');
  return parsed;
}

async function codexServer(options) {
  const process = ownedProcess(options, ['-c', 'analytics.enabled=false', '-c', 'feedback.enabled=false', 'app-server', '--stdio'], 10 * 60 * 1000);
  const requests = new Map(), listeners = new Set();
  let serial = 0, buffer = '', closed = false;
  process.child.stdout.setEncoding('utf8');
  function dispatch(line) {
    let value;
    try { value = JSON.parse(line); } catch { process.stop(new Error('Official Codex client returned malformed protocol data.')); return; }
    const pending = requests.get(value.id);
    if (pending) {
      requests.delete(value.id); clearTimeout(pending.timeout);
      if (value.error) pending.reject(new Error(`Official Codex request failed (${value.error.code ?? 'unknown'}).`));
      else pending.resolve(value.result);
    } else for (const listener of listeners) listener(value);
  }
  process.child.stdout.on('data', chunk => {
    buffer += chunk;
    if (buffer.length > MAX_OUTPUT) { process.stop(new Error('Official Codex protocol output exceeded its limit.')); return; }
    let end;
    while ((end = buffer.indexOf('\n')) !== -1) { const line = buffer.slice(0, end); buffer = buffer.slice(end + 1); if (line.trim()) dispatch(line); }
  });
  const request = (method, params) => new Promise((resolve, reject) => {
    if (closed) { reject(new Error('Official Codex process stopped.')); return; }
    const id = ++serial;
    const timeout = setTimeout(() => { requests.delete(id); reject(new Error(`Codex ${method} request timed out.`)); }, 30000);
    requests.set(id, { resolve, reject, timeout });
    process.child.stdin.write(JSON.stringify({ id, method, params }) + '\n', error => { if (error) process.stop(new Error('Official Codex transport closed.')); });
  });
  process.exit.then(({ failure }) => {
    closed = true;
    for (const pending of requests.values()) { clearTimeout(pending.timeout); pending.reject(failure ?? new Error('Official Codex process stopped.')); }
    requests.clear();
    for (const listener of listeners) listener({ method: 'openvision/processClosed', error: failure });
  });
  try {
    await request('initialize', { clientInfo: { name: 'openvision', version: '0.2.0' } });
    process.child.stdin.write(JSON.stringify({ method: 'initialized', params: {} }) + '\n');
    return { request, listeners, close: process.close };
  } catch (error) { await process.close(); throw error; }
}

module.exports = { accountEnvironment, ownedProcess, runJson, codexServer };
