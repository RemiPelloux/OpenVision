'use strict';

const { createHash } = require('node:crypto');
const { createWriteStream } = require('node:fs');
const { mkdir, mkdtemp, rm } = require('node:fs/promises');
const { join } = require('node:path');
const { Readable, Transform } = require('node:stream');
const { pipeline } = require('node:stream/promises');
const { platformTarget, registryFile } = require('./account-integration-catalog.cjs');

const MAX_PACKAGE_BYTES = 512 * 1024 * 1024;
const MAX_METADATA_BYTES = 1024 * 1024;
const DOWNLOAD_TIMEOUT_MS = 5 * 60 * 1000;

async function fetchResponse(url, signal) {
  for (let redirects = 0; redirects <= 3; redirects++) {
    const parsed = new URL(url);
    if (!['https://open-vsx.org', 'https://openvsx.eclipsecontent.org'].includes(parsed.origin) || parsed.username || parsed.password)
      throw new Error('Extension download redirected outside the official registry.');
    const response = await fetch(parsed, { signal, redirect: 'manual' });
    if (response.ok) return response;
    await response.body?.cancel();
    if ([301, 302, 303, 307, 308].includes(response.status) && response.headers.get('location')) {
      url = new URL(response.headers.get('location'), parsed).href;
      continue;
    }
    throw new Error(`Extension download failed (HTTP ${response.status}). Retry when the registry is available.`);
  }
  throw new Error('Extension download redirected too many times.');
}

async function readSmall(response) {
  let size = 0;
  const chunks = [];
  for await (const chunk of response.body) {
    size += chunk.byteLength;
    if (size > MAX_METADATA_BYTES) throw new Error('Extension metadata exceeds the supported size.');
    chunks.push(Buffer.from(chunk));
  }
  return Buffer.concat(chunks).toString('utf8');
}

async function resolvePackage(provider, signal) {
  const target = platformTarget();
  const url = `https://open-vsx.org/api/${provider.namespace}/${provider.extensionName}/${target}/latest`;
  const metadata = JSON.parse(await readSmall(await fetchResponse(url, signal)));
  if (metadata.namespace?.toLowerCase() !== provider.namespace.toLowerCase() || metadata.name !== provider.extensionName ||
      metadata.targetPlatform !== target || metadata.verified !== true || typeof metadata.version !== 'string')
    throw new Error('The registry did not provide a verified, compatible official extension.');
  const checksum = (await readSmall(await fetchResponse(registryFile(metadata.files?.sha256, '.sha256'), signal))).trim().split(/\s/)[0];
  if (!/^[a-f0-9]{64}$/i.test(checksum)) throw new Error('The registry did not provide a valid extension checksum.');
  return { url: registryFile(metadata.files?.download, '.vsix'), checksum: checksum.toLowerCase(), version: metadata.version };
}

async function downloadPackage(spec, directory, signal, progress) {
  signal?.throwIfAborted();
  const destination = join(directory, 'official-extension.vsix');
  const response = await fetchResponse(spec.url, signal);
  const hash = createHash('sha256');
  let size = 0, lastReport = 0;
  const measure = new Transform({ transform(chunk, encoding, callback) {
    size += chunk.length;
    if (size > MAX_PACKAGE_BYTES) return callback(new Error('Extension package exceeds the supported size.'));
    hash.update(chunk);
    if (size - lastReport >= 8 * 1024 * 1024) { lastReport = size; progress.report({ message: `${Math.round(size / 1024 / 1024)} MB downloaded` }); }
    callback(null, chunk);
  } });
  await pipeline(Readable.fromWeb(response.body), measure, createWriteStream(destination, { flags: 'wx' }), { signal });
  if (hash.digest('hex') !== spec.checksum) throw new Error('Extension checksum verification failed. Nothing was installed.');
  return destination;
}

async function installOfficialExtension(vscode, context, provider) {
  return vscode.window.withProgress({ location: vscode.ProgressLocation.Notification,
    title: `Install ${provider.name}`, cancellable: true }, async (progress, token) => {
    const controller = new AbortController();
    const cancel = token.onCancellationRequested(() => controller.abort());
    const deadline = setTimeout(() => controller.abort(new Error('Extension download timed out. Try again.')), DOWNLOAD_TIMEOUT_MS);
    deadline.unref?.();
    const signal = controller.signal;
    let directory;
    try {
      await mkdir(context.globalStorageUri.fsPath, { recursive: true });
      directory = await mkdtemp(join(context.globalStorageUri.fsPath, 'official-extension-'));
      const spec = await resolvePackage(provider, signal);
      const path = await downloadPackage(spec, directory, signal, progress);
      if (signal.aborted) throw signal.reason;
      progress.report({ message: `Installing verified ${spec.version} package…` });
      await vscode.commands.executeCommand('workbench.extensions.installExtension', vscode.Uri.file(path));
    } finally {
      clearTimeout(deadline);
      cancel.dispose();
      if (directory) await rm(directory, { recursive: true, force: true });
    }
  });
}

module.exports = { installOfficialExtension, resolvePackage, downloadPackage, readSmall, fetchResponse };
