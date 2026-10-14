// Synthetic process executed inside real terminals/tasks; records only fixture data.
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');
const [mode, directory, name] = process.argv.slice(2);
const destination = path.join(directory, `${name}.json`);
const record = { pid: process.pid, parent: process.ppid, mode, cwd: process.cwd(),
  fixtureEnv: process.env.OPENVISION_DEVELOPMENT_FIXTURE, tty: !!process.stdout.isTTY,
  columns: process.stdout.columns, rows: process.stdout.rows, unicode: 'OpenVision café 日本語' };
function save() {
  fs.writeFileSync(`${destination}.pending`, JSON.stringify(record));
  fs.renameSync(`${destination}.pending`, destination);
}
save();
if (mode === 'problem') {
  console.log(`${path.join(process.cwd(), 'problem.c')}:3:5: error: OpenVision fixture diagnostic`);
  process.exitCode = 2;
} else if (mode === 'terminal') {
  console.log(record.unicode);
  // Windows delivers console resize events while the interactive client reads
  // input. Keep the fixture interactive and query the public TTY window size.
  process.stdin.setRawMode(true); process.stdin.resume();
  process.stdin.on('data', data => { if (data.includes(3)) process.exit(130); });
  setInterval(() => {
    const [columns, rows] = process.stdout.getWindowSize();
    if (record.columns !== columns || record.rows !== rows) { Object.assign(record, { columns, rows }); save(); }
  }, 200);
} else if (mode === 'tree') {
  const child = spawn(process.execPath, [__filename, 'child', directory, `${name}-child`], { stdio: 'inherit' });
  record.child = child.pid; save();
  setInterval(() => {}, 1000);
} else if (mode === 'child') setInterval(() => {}, 1000);
else throw new Error('Unknown fixture process mode');
