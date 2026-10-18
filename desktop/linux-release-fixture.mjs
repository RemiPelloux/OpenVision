// Controlled fixtures for Linux release and installer tests: a throwaway
// ed25519 signer (generated per run, never committed) and small fake packages
// with the files an OpenVision Linux package must contain.
import { execFileSync } from 'node:child_process';
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { buildManifest, createArchive, fileSha256, packageTree, releaseFiles, signManifest } from './linux-release.mjs';

export const fixtureCommit = 'f'.repeat(40);

export async function createSigner(directory, identity = 'openvision-release') {
  await mkdir(directory, { recursive: true });
  const key = join(directory, 'release-key');
  execFileSync('ssh-keygen', ['-q', '-t', 'ed25519', '-N', '', '-C', 'openvision-throwaway-test-key', '-f', key]);
  const allowedSigners = join(directory, 'allowed_signers');
  await writeFile(allowedSigners, `${identity} namespaces="openvision-release" ${(await readFile(`${key}.pub`, 'utf8')).trim()}\n`);
  return { key, allowedSigners, identity };
}

export async function createPackage(directory, version, { profileFormat = 1, files = {} } = {}) {
  const entries = {
    OpenVision: ['#!/bin/sh\necho launcher\n', 0o755],
    'openvision.png': ['not really a png', 0o644],
    'openvision-package.json': [JSON.stringify({ name: 'OpenVision', version, platform: 'linux', arch: process.arch,
      profileIncluded: false, credentialsIncluded: false, ...(profileFormat === null ? {} : { profileFormat }) }), 0o644],
    'electron-host/openvision': [`#!/bin/sh\necho host ${version}\n`, 0o755],
    'electron-host/resources/app/product.json': ['{"nameShort":"OpenVision"}', 0o644],
    ...files,
  };
  for (const [path, [content, mode]] of Object.entries(entries)) {
    await mkdir(dirname(join(directory, path)), { recursive: true });
    await writeFile(join(directory, path), content, { mode });
  }
  return directory;
}

export async function createRelease({ directory, version, signer, profileFormat, files, mutateManifest, arch = process.arch }) {
  const packageDirectory = await createPackage(join(directory, `package-${version}`, 'OpenVision-linux'), version, { profileFormat, files });
  const names = releaseFiles(version, arch);
  const out = join(directory, `release-${version}`);
  await mkdir(out, { recursive: true });
  const archive = join(out, names.archive), manifestPath = join(out, names.manifest);
  await createArchive({ packageDirectory, prefix: names.prefix, archive, mtime: 1 });
  let manifest = buildManifest({ version, arch, commit: fixtureCommit, prefix: names.prefix, tree: await packageTree(packageDirectory),
    archive: { file: names.archive, bytes: (await stat(archive)).size, sha256: await fileSha256(archive) } });
  if (mutateManifest) manifest = mutateManifest(manifest) ?? manifest;
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
  signManifest({ manifest: manifestPath, key: signer.key });
  return { archive, manifest: manifestPath, signature: `${manifestPath}.sig`, packageDirectory, version };
}
