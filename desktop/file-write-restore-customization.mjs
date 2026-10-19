import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

// The main-process disk file provider serves every renderer save (editor saves,
// and the Agent review restore after Undo/Reject). It opens the file truncated
// and issues one fs.write, ignoring a short count. On a full volume a save that
// needs more blocks writes a prefix, reports success and leaves a torn file;
// the previous bytes are already gone. The writer now writes until every byte is
// written, so ENOSPC/EFBIG surface as a save error, and on any failure after
// truncation it writes the previous bytes back (or removes a file it created).
// The previous bytes are read only for regular files up to 64 MiB; larger files
// keep the recovered behavior. Atomic temp-and-rename is not used because it
// would drop mode, ownership and hard links.
export const fileWriteRestoreMarker = '/* OpenVision restorable in-place file write v1 */';
export const fileWriteRestoreEntry = 'out/main.js';
export const restoreLimitBytes = 64 * 1024 * 1024;

// The project namespace build renames the MCP configuration directory.
const original = mcp => `          async doWriteFile(t, n, r, s) {
            let i;
            try {
              const a = this.toFilePath(t);
              if (!r.create || !r.overwrite) {
                if (await te.exists(a)) {
                  if (!r.overwrite) throw hs(w(2059, null), Xt.FileExists);
                } else if (!r.create) throw hs(w(2060, null), Xt.FileNotFound);
              }
              if (
                ((i = await this.open(t, { create: !0, unlock: r.unlock }, s)),
                await this.write(i, 0, n, 0, n.byteLength),
                a.endsWith("${mcp}") && !X)
              )`;

const restorable = mcp => `          async doWriteFile(t, n, r, s) {
            ${fileWriteRestoreMarker}
            let i, ovPrevious, ovCreated = !1;
            const ovWriteAll = async (ovBytes) => {
              for (let ovOffset = 0; ovOffset < ovBytes.byteLength; ) {
                const ovWritten = await this.write(i, ovOffset, ovBytes, ovOffset, ovBytes.byteLength - ovOffset);
                if (!ovWritten)
                  throw Object.assign(new Error(\`Short write: \${ovOffset} of \${ovBytes.byteLength} bytes\`), { code: "EIO" });
                ovOffset += ovWritten;
              }
            };
            try {
              const a = this.toFilePath(t);
              if (!r.create || !r.overwrite) {
                if (await te.exists(a)) {
                  if (!r.overwrite) throw hs(w(2059, null), Xt.FileExists);
                } else if (!r.create) throw hs(w(2060, null), Xt.FileNotFound);
              }
              try {
                const ovStat = await Ga.lstat(a);
                ovStat.isFile() && ovStat.size <= ${restoreLimitBytes} && (ovPrevious = await Ga.readFile(a));
              } catch (ovError) {
                ovCreated = ovError?.code === "ENOENT";
              }
              i = await this.open(t, { create: !0, unlock: r.unlock }, s);
              try {
                await ovWriteAll(n);
              } catch (ovError) {
                // Put back what the truncating open removed; a file this write created is removed.
                try {
                  if (ovPrevious) {
                    await te.ftruncate(i, 0);
                    await ovWriteAll(ovPrevious);
                  } else if (ovCreated) {
                    const ovHandle = i;
                    i = void 0;
                    await this.close(ovHandle);
                    await Ga.unlink(a);
                  }
                } catch (ovRestoreError) {
                  ovError.openvisionRestoreError = ovRestoreError;
                }
                throw ovError;
              }
              if (a.endsWith("${mcp}") && !X)`;

export function restoreFailedFileWrites(text) {
  if (text.includes(fileWriteRestoreMarker)) {
    if (text.split(fileWriteRestoreMarker).length !== 2) throw new Error('Restorable file write marker is ambiguous');
    return text;
  }
  const mcp = ['.cursor/mcp.json', '.openvision/mcp.json'].find(path => text.split(original(path)).length === 2);
  if (!mcp || !text.includes('(te = new (class {') || !text.includes('await Ga.unlink(r);') ||
      !text.includes('async write(t, n, r, s, i) {\n            return zDe(() => this.doWrite(t, n, r, s, i), 100, 3);') ||
      !text.includes('((a = await te.open(s, "r+")), await te.ftruncate(a, 0));'))
    throw new Error('Disk file provider write contract changed');
  return text.replace(original(mcp), restorable(mcp));
}

export async function installFileWriteRestore(root) {
  const path = join(root, 'source/app', fileWriteRestoreEntry);
  const before = await readFile(path, 'utf8'), after = restoreFailedFileWrites(before);
  if (before === after) return;
  const backup = join(root, 'backups/file-write-restore', fileWriteRestoreEntry);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
