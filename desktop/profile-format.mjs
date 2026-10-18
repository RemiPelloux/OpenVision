// Portable profile format (OV-904). A package declares the newest format it
// writes (openvision-package.json profileFormat; absent means 0, every release
// up to 0.2.0-preview.7). A profile records its format and the oldest package
// format that can still open it, so a rollback never hands an incompatible
// store to an older executable. Migrations run only on a copy the installer
// owns, never on the data of the version that is still installed.
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

export const profileFormat = 1;
export const markerName = 'openvision-profile.json';

// format -> { minimumReader, migrate(dataDirectory) } producing that format from
// the previous one. Format 1 only records the marker: the stores themselves are
// unchanged from format 0, so format-0 packages (0.2.0-preview.7) still read it.
export const migrations = Object.freeze({
  1: { minimumReader: 0, async migrate() {} },
});

export async function readProfileFormat(data) {
  let text;
  try { text = await readFile(join(data, markerName), 'utf8'); }
  catch (error) { if (error.code === 'ENOENT') return { format: 0, minimumReader: 0, marker: false }; throw error; }
  const marker = JSON.parse(text);
  if (!Number.isSafeInteger(marker.format) || marker.format < 0 || !Number.isSafeInteger(marker.minimumReader) ||
    marker.minimumReader < 0 || marker.minimumReader > marker.format) throw Error(`Invalid profile format marker in ${data}`);
  return { ...marker, marker: true };
}

export function canOpen(packageFormat, profile) {
  return Number.isSafeInteger(packageFormat) && packageFormat >= profile.minimumReader;
}

export async function migrateProfile(data, { target = profileFormat, writtenBy, registry = migrations } = {}) {
  const current = await readProfileFormat(data);
  if (current.format > target) {
    if (!canOpen(target, current)) throw Error(`Profile format ${current.format} needs a package of format ${current.minimumReader} or newer.`);
    return { from: current.format, to: current.format, applied: [], downgradeTolerated: true };
  }
  const applied = [];
  let minimumReader = current.minimumReader;
  for (let format = current.format + 1; format <= target; format++) {
    const step = registry[format];
    if (!step) throw Error(`No profile migration to format ${format}`);
    await step.migrate(data);
    minimumReader = Math.max(minimumReader, step.minimumReader);
    applied.push(format);
  }
  if (applied.length || !current.marker) {
    await mkdir(data, { recursive: true });
    const marker = { format: Math.max(target, current.format), minimumReader, writtenBy, migratedAt: new Date().toISOString(),
      history: [...(current.history ?? []), ...applied.map(format => ({ format, by: writtenBy }))] };
    const temporary = join(data, `.${markerName}.tmp`);
    await writeFile(temporary, JSON.stringify(marker, null, 2) + '\n');
    await rename(temporary, join(data, markerName));
  }
  return { from: current.format, to: Math.max(target, current.format), applied, downgradeTolerated: false };
}
