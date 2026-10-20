// Runs inside Electron with ELECTRON_RUN_AS_NODE=1. Loads each addon through its own
// JavaScript wrapper and exercises one real operation. argv[2] is a JSON map package -> directory.
'use strict';
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const packages = JSON.parse(process.argv[2]);
const scratch = fs.mkdtempSync(path.join(os.tmpdir(), 'openvision-native-abi-'));
const within = (milliseconds, promise) => Promise.race([promise,
  new Promise((_, reject) => setTimeout(() => reject(new Error(`timed out after ${milliseconds} ms`)), milliseconds).unref())]);

const checks = {
  'node-pty': async directory => {
    const pty = require(directory);
    const child = pty.spawn('/bin/sh', ['-c', 'printf "ov-pty-%s" "$((6*7))"'], { name: 'xterm', cols: 80, rows: 24, cwd: scratch, env: { PATH: process.env.PATH } });
    let output = '';
    child.onData(data => { output += data; });
    const exit = await within(10000, new Promise(resolve => child.onExit(resolve)));
    if (!output.includes('ov-pty-42') || exit.exitCode !== 0) throw new Error(`pty output ${JSON.stringify(output)} exit ${JSON.stringify(exit)}`);
    return { output: 'ov-pty-42', exitCode: exit.exitCode };
  },
  '@vscode/sqlite3': async directory => {
    const sqlite3 = require(directory);
    const database = new sqlite3.Database(path.join(scratch, 'vscode.db'));
    const call = (method, ...args) => new Promise((resolve, reject) => database[method](...args, (error, value) => error ? reject(error) : resolve(value)));
    await call('run', 'CREATE TABLE items (key TEXT PRIMARY KEY, value BLOB)');
    await call('run', 'INSERT INTO items VALUES (?, ?)', 'café', Buffer.from('日本語'));
    const row = await call('get', 'SELECT key, value FROM items');
    await new Promise((resolve, reject) => database.close(error => error ? reject(error) : resolve()));
    if (row.key !== 'café' || row.value.toString() !== '日本語') throw new Error(`unexpected row ${JSON.stringify(row)}`);
    return { row: { key: row.key, value: row.value.toString() } };
  },
  'better-sqlite3': async directory => {
    const Database = require(directory);
    // cursor-agent-exec always passes an explicit nativeBinding path; load it the same way.
    const database = new Database(path.join(scratch, 'better.db'), { nativeBinding: path.join(directory, 'build/Release/better_sqlite3.node') });
    const mode = database.pragma('journal_mode = WAL', { simple: true });
    database.exec('CREATE TABLE items (id INTEGER PRIMARY KEY, value TEXT)');
    const insert = database.prepare('INSERT INTO items (value) VALUES (?)');
    database.transaction(values => values.forEach(value => insert.run(value)))(['a', 'b', 'c']);
    const count = database.prepare('SELECT count(*) AS count FROM items').get().count;
    database.close();
    if (mode !== 'wal' || count !== 3) throw new Error(`journal ${mode} count ${count}`);
    return { journal_mode: mode, rows: count };
  },
  '@parcel/watcher': async directory => {
    const watcher = require(directory);
    const watched = path.join(scratch, 'watched');
    fs.mkdirSync(watched);
    let resolveEvent;
    const event = new Promise(resolve => { resolveEvent = resolve; });
    const subscription = await watcher.subscribe(watched, (error, events) => {
      if (error) resolveEvent({ error: String(error) });
      const created = events.find(entry => entry.type === 'create' && entry.path.endsWith('created.txt'));
      if (created) resolveEvent(created);
    });
    fs.writeFileSync(path.join(watched, 'created.txt'), 'x');
    const received = await within(10000, event);
    await subscription.unsubscribe();
    if (received.error) throw new Error(received.error);
    return { event: received.type, file: path.basename(received.path) };
  },
  '@vscode/spdlog': async directory => {
    const spdlog = require(directory);
    const file = path.join(scratch, 'spdlog.log');
    const logger = await spdlog.createRotatingLogger('openvision-abi', file, 1024 * 1024, 2);
    logger.setPattern('%l %v');
    logger.info('ov-spdlog café');
    logger.flush(); logger.drop();
    const text = fs.readFileSync(file, 'utf8');
    if (!text.includes('info ov-spdlog café')) throw new Error(`log ${JSON.stringify(text)}`);
    return { line: text.trim() };
  },
  // Results under Xvfb depend on the X server; verify-native-abi requires parity with the recovered addon.
  'native-keymap': async directory => {
    const keymap = require(directory);
    const layout = keymap.getCurrentKeyboardLayout();
    const keys = Object.keys(keymap.getKeyMap() ?? {});
    return { layout: layout ?? null, keys: keys.length, iso: keymap.isISOKeyboard() ?? null };
  },
  'native-watchdog': async directory => {
    // A child watches a short-lived parent pid; the native monitor exits it with 87 once that pid is gone.
    const { spawn } = require('node:child_process');
    const sleeper = spawn('/bin/sleep', ['1']);
    const script = `require(${JSON.stringify(directory)}).start(${sleeper.pid}); setInterval(() => {}, 1000);`;
    const child = spawn(process.execPath, ['-e', script], { env: { ...process.env, ELECTRON_RUN_AS_NODE: '1' }, stdio: 'ignore' });
    const code = await within(20000, new Promise(resolve => child.once('exit', resolve)));
    if (code !== 87) throw new Error(`watchdog child exited ${code}`);
    return { exitCode: code };
  },
  kerberos: async directory => {
    const kerberos = require(directory);
    const client = await kerberos.initializeClient('HTTP@localhost.invalid', {});
    // No credentials or KDC exist here: the GSS-API call must run and fail with a GSS status.
    const failure = await client.step('').then(() => null, error => String(error.message || error));
    if (!failure) throw new Error('GSS step unexpectedly succeeded without credentials');
    return { gss_failure: failure.slice(0, 160) };
  },
  // The Linux build of the watcher is a stub that rejects the platform; parity is checked by the verifier.
  '@vscode/policy-watcher': async directory => {
    const { createWatcher } = require(directory);
    try { createWatcher('OpenVision', { UpdateMode: { type: 'string' } }, () => {}).dispose(); return { watcher: 'created' }; }
    catch (error) { if (!/Unsupported platform/.test(error.message)) throw error; return { watcher: 'Unsupported platform' }; }
  },
  // `directory` is the .node file itself; the recovered loader package only picks the platform binary.
  'whichlang-node': async file => {
    const module = { exports: {} };
    process.dlopen(module, file);
    const samples = ['The quick brown fox jumps over the lazy dog.', 'Le renard brun rapide saute par-dessus le chien paresseux.',
      'Der schnelle braune Fuchs springt über den faulen Hund.', '敏捷的棕色狐狸跳过了懒狗。', 'Быстрая коричневая лиса прыгает через ленивую собаку.'];
    return { detected: samples.map(text => module.exports.detectLanguage(text)), iso: samples.map(text => module.exports.detectLangISO6391(text)) };
  },
  'tree-sitter': async () => ({ checked: 'with tree-sitter-bash' }),
  'tree-sitter-bash': async directory => {
    const Parser = require(packages['tree-sitter']);
    const parser = new Parser();
    parser.setLanguage(require(directory));
    const tree = parser.parse('echo "ov $((6*7))" | wc -c && cd /tmp');
    if (tree.rootNode.type !== 'program' || tree.rootNode.hasError) throw new Error(tree.rootNode.toString());
    return { root: tree.rootNode.type, children: tree.rootNode.childCount, sexp: tree.rootNode.toString().slice(0, 120) };
  },
};

(async () => {
  const results = { versions: { electron: process.versions.electron, node: process.versions.node, modules: process.versions.modules }, addons: {} };
  for (const [name, directory] of Object.entries(packages)) {
    const started = Date.now();
    try { results.addons[name] = { ok: true, ...await checks[name](directory), milliseconds: Date.now() - started }; }
    catch (error) { results.addons[name] = { ok: false, error: String(error.stack || error), milliseconds: Date.now() - started }; }
  }
  fs.rmSync(scratch, { recursive: true, force: true });
  process.stdout.write(JSON.stringify(results));
  process.exit(Object.values(results.addons).every(entry => entry.ok) ? 0 : 1);
})();
