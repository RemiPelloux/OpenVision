'use strict';

// Verification overlay only. The interruption verifier inserts one call to this
// module into a disposable copy of the Agent write helper. Production builds
// never load it. A pause is armed per file by the verifier and fires once.
const fs = require('node:fs');
const path = require('node:path');

const directory = process.env.OPENVISION_INTERRUPTION_PROBE_DIR;

function record(entry) {
  fs.appendFileSync(path.join(directory, 'probe.ndjson'),
    `${JSON.stringify({ ...entry, pid: process.pid, at: Date.now() })}\n`);
}

// `stage` names the point in the write helper: the original helper calls this
// after truncating the destination; a replacing helper calls it after writing
// part of its uncommitted data. `write` writes a prefix of the pending bytes.
exports.duringWrite = async function duringWrite(stage, target, data, write) {
  if (!directory || !path.basename(target).startsWith('interrupt-')) return;
  const name = path.basename(target), armed = path.join(directory, `pause-${name}`);
  let pause = false;
  try { fs.unlinkSync(armed); pause = true; } catch (error) { if (error.code !== 'ENOENT') throw error; }
  const bytes = Buffer.isBuffer(data) ? data : Buffer.from(data);
  record({ event: 'write', stage, target, bytes: bytes.length, pause });
  if (!pause) return;
  const partial = Math.floor(bytes.length / 2);
  await write(bytes, partial);
  record({ event: 'paused', stage, target, partialBytes: partial });
  const release = path.join(directory, `release-${name}`);
  while (!fs.existsSync(release)) await new Promise(resolve => setTimeout(resolve, 25));
  record({ event: 'released', stage, target });
};
