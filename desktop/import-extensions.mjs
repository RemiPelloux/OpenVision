import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { URI } = require('../tooling/node_modules/vscode-uri');

export function assertExtensionPlatform(entry, context = process) {
  const target = entry.metadata?.targetPlatform;
  if (target === undefined || ['universal', 'undefined'].includes(target)) return;
  if (target !== `${context.platform}-${context.arch}`)
    throw new Error(`Extension ${entry.identifier.id} targets ${target}, but this machine is ${context.platform}-${context.arch}. Install a compatible extension in Cursor first.`);
}

export function extensionRecord(entry, path) {
  const location = URI.file(path);
  // The profile scanner persists both URI caches after accessing them.
  void location.fsPath;
  void location.toString();
  const metadata = entry.metadata ? { ...entry.metadata } : undefined;
  if (metadata?.preRelease && typeof metadata.hasPreReleaseVersion !== 'boolean') metadata.hasPreReleaseVersion = true;
  const uuid = metadata?.id ?? entry.identifier.uuid;
  return { identifier: uuid ? { id: entry.identifier.id, uuid } : { id: entry.identifier.id },
    version: entry.version, location: location.toJSON(), relativeLocation: entry.relativeLocation, metadata };
}
