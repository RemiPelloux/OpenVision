'use strict';
// Executes one extracted Agent write helper against a real filesystem fault.
// Usage: node agent-write-faults.cjs <helper.cjs> <scenario> <directory>
// The caller owns the fault: a size-limited tmpfs (ENOSPC), a read-only mount
// (EROFS) or RLIMIT_FSIZE (EFBIG). Only files below <directory> are touched.
const fs = require('node:fs');
const { createHash } = require('node:crypto');
const { join } = require('node:path');

const [helperFile, scenario, directory] = process.argv.slice(2);
// A CommonJS module exporting the extracted helper with its bundle bindings.
const write = require(helperFile);
const name = write.name;

const original = Buffer.from('saved user line\n'.repeat(1250));     // 20,000 bytes
const replacement = Buffer.from('agent line 0123456789\n'.repeat(4600)); // 101,200 bytes
const sha = value => createHash('sha256').update(value).digest('hex');
const target = join(directory, 'user.txt');
const temporaries = () => fs.readdirSync(directory).filter(entry => entry.includes('.openvision-'));
function describe(path) {
  if (!fs.existsSync(path)) return { exists: false };
  const bytes = fs.readFileSync(path);
  return { exists: true, size: bytes.length, sha256: sha(bytes), original: bytes.equals(original),
    replacement: bytes.equals(replacement), partialReplacement: bytes.length > 0 &&
      bytes.length < replacement.length && replacement.subarray(0, bytes.length).equals(bytes) };
}
async function attempt(path = target) {
  try { await write(path, replacement, { flush: true }); return { ok: true }; }
  catch (error) { return { ok: false, code: error.code, restoreError: error.openvisionRestoreError?.code }; }
}

(async () => {
  const result = { scenario, helper: name, originalSha256: sha(original), replacementSha256: sha(replacement) };
  switch (scenario) {
    case 'enospc': {
      fs.writeFileSync(target, original);
      const filler = join(directory, 'filler.bin');
      // Consume the remaining blocks of the size-limited filesystem.
      try { fs.writeFileSync(filler, Buffer.alloc(8 << 20)); } catch (error) { result.fillerCode = error.code; }
      result.freeBytes = Number(fs.statfsSync(directory).bavail * fs.statfsSync(directory).bsize);
      result.attempt = await attempt();
      result.afterFault = describe(target);
      result.temporariesAfterFault = temporaries();
      fs.unlinkSync(filler);
      result.afterFreeing = describe(target);
      result.retry = await attempt();
      result.afterRetry = describe(target);
      result.temporariesAfterRetry = temporaries();
      break;
    }
    case 'efbig': case 'efbig-hardlink': case 'efbig-new': {
      const link = join(directory, 'user-link.txt');
      if (scenario !== 'efbig-new') fs.writeFileSync(target, original);
      if (scenario === 'efbig-hardlink') fs.linkSync(target, link);
      result.attempt = await attempt();
      result.afterFault = describe(target);
      if (scenario === 'efbig-hardlink') result.linkAfterFault = describe(link);
      result.temporariesAfterFault = temporaries();
      break;
    }
    case 'erofs':
      result.attempt = await attempt();
      result.afterFault = describe(target);
      result.temporariesAfterFault = temporaries();
      break;
    case 'prepare-erofs':
      fs.writeFileSync(target, original);
      result.prepared = describe(target);
      break;
    case 'read':
      result.state = describe(target);
      break;
    default:
      throw new Error(`Unknown scenario: ${scenario}`);
  }
  process.stdout.write(JSON.stringify(result) + '\n');
})().catch(error => { console.error(error); process.exitCode = 1; });
