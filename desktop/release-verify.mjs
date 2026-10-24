// npm run release:verify -- --archive FILE --allowed-signers FILE [--manifest FILE] [--signature FILE] [--identity NAME] [--deep]
// Fail-closed check of a Linux release before anything is installed: signature
// over the manifest, manifest structure, archive size and SHA-256. --deep also
// extracts into a private temporary directory and compares every file.
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { extractArchive, verifyRelease, verifyTree } from './linux-release.mjs';

const args = process.argv.slice(2);
const option = name => { const index = args.indexOf(name); return index < 0 ? undefined : args[index + 1]; };
const path = value => value && resolve(value);
try {
  const archive = path(option('--archive'));
  if (!archive) throw Error('--archive is required.');
  const manifest = await verifyRelease({ archive, manifest: path(option('--manifest')), signature: path(option('--signature')),
    allowedSigners: path(option('--allowed-signers') ?? process.env.OPENVISION_RELEASE_ALLOWED_SIGNERS), identity: option('--identity') });
  if (args.includes('--deep')) {
    const directory = await mkdtemp(join(tmpdir(), 'openvision-release-verify-'));
    try {
      await extractArchive({ archive, directory }).catch(error => { throw Error(`Extraction failed: ${error.message}`); });
      await verifyTree(join(directory, manifest.prefix), manifest);
    } finally { await rm(directory, { recursive: true, force: true }); }
  }
  console.log(JSON.stringify({ verified: true, deep: args.includes('--deep'), version: manifest.version, commit: manifest.commit,
    files: manifest.files.length, sha256: manifest.archive.sha256 }, null, 2));
} catch (error) {
  console.error(`Release rejected: ${error.message}`);
  process.exitCode = 1;
}
