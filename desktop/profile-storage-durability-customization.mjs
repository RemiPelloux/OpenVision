import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

// The 3.21.13 main-process storage owner acknowledges renderer `updateItems`
// calls before SQLite runs, drops a batch whose transaction fails (for example
// SQLITE_FULL on a full profile volume) and, unlike upstream VS Code, does not
// rebuild the database from its cache on close. A setting or secret that failed
// to commit therefore survived only in memory and was lost at restart while the
// UI reported it saved. This keeps failed writes queued, retries them, and makes
// the IPC acknowledgement wait for SQLite so callers can report the failure.
export const storageMarker = '/* OpenVision durable storage acknowledgement v1 */';

const flushBefore = `          async flushPending() {
            if (!this.hasPending) return;
            const t = { insert: this.pendingInserts, delete: this.pendingDeletes };
            return (
              (this.pendingDeletes = new Set()),
              (this.pendingInserts = new Map()),
              this.database.updateItems(t).finally(() => {
                if (!this.hasPending)
                  for (; this.whenFlushedCallbacks.length;) this.whenFlushedCallbacks.pop()?.();
              })
            );
          }`;

const flushAfter = `          ${storageMarker}
          openvisionRequeue(t, error) {
            // The cache holds the newest intended value. Requeue only writes that
            // are still current and not already superseded by a newer pending write.
            const failed = (this.openvisionFailedKeys ??= new Map());
            t.insert.forEach((value, key) => {
              if (this.cache.get(key) !== value || this.pendingInserts.has(key) || this.pendingDeletes.has(key)) return;
              this.pendingInserts.set(key, value); failed.set(key, error);
            });
            t.delete.forEach(key => {
              if (this.cache.has(key) || this.pendingInserts.has(key) || this.pendingDeletes.has(key)) return;
              this.pendingDeletes.add(key); failed.set(key, error);
            });
            this.openvisionScheduleRetry();
          }
          openvisionScheduleRetry() {
            if (this.openvisionRetryTimer || this.state === 2 || !this.hasPending) return;
            this.openvisionRetryDelay = Math.min((this.openvisionRetryDelay || 500) * 2, 30000);
            this.openvisionRetryTimer = setTimeout(() => {
              this.openvisionRetryTimer = void 0;
              if (this.state !== 2) this.flushPending().catch(() => {});
            }, this.openvisionRetryDelay);
            this.openvisionRetryTimer.unref?.();
          }
          async openvisionDurable(keys) {
            // Resolve only after every requested key reached SQLite; reject while
            // any of them is queued again after a failed transaction.
            if (this.state === 2 || this.options.hint === 1) return;
            await this.flush(0)?.catch(() => {});
            await Promise.allSettled([...(this.openvisionWrites ?? [])]);
            const key = keys.find(key => this.openvisionFailedKeys?.has(key));
            if (key === void 0) return;
            const cause = this.openvisionFailedKeys.get(key);
            throw new Error(\`OpenVision could not save to its profile storage (\${cause?.message ?? cause}). The change is kept and retried; free disk space and try again.\`);
          }
          async flushPending() {
            if (!this.hasPending) return;
            const t = { insert: this.pendingInserts, delete: this.pendingDeletes };
            (this.pendingDeletes = new Set()), (this.pendingInserts = new Map());
            const writes = (this.openvisionWrites ??= new Set());
            let failed = !1;
            const write = this.database.updateItems(t).then(() => {
              this.openvisionRetryDelay = 0;
              t.insert.forEach((_value, key) => { if (!this.pendingInserts.has(key)) this.openvisionFailedKeys?.delete(key); });
              t.delete.forEach(key => { if (!this.pendingDeletes.has(key)) this.openvisionFailedKeys?.delete(key); });
            }, error => { failed = !0; this.openvisionRequeue(t, error); throw error; }).finally(() => {
              writes.delete(write);
              // A failed batch stays queued, but waiters keep the original release-on-failure behavior.
              if (failed || !this.hasPending)
                for (; this.whenFlushedCallbacks.length;) this.whenFlushedCallbacks.pop()?.();
            });
            writes.add(write);
            return write;
          }`;

const ipcBefore = `              case "updateItems": {
                const l = s;
                if (l.insert) for (const [d, u] of l.insert) o.set(d, u);
                l.delete?.forEach((d) => o.delete(d));
                break;
              }`;

const ipcAfter = `              case "updateItems": {
                const l = s;
                ${storageMarker}
                // Failures are reported once, through the durable acknowledgement below.
                if (l.insert) for (const [d, u] of l.insert) o.set(d, u)?.catch?.(() => {});
                l.delete?.forEach((d) => o.delete(d)?.catch?.(() => {}));
                return o.storage?.openvisionDurable?.([...Array.from(l.insert ?? [], ([d]) => d), ...(l.delete ?? [])]);
              }`;

function replaceOnce(text, before, after, owner) {
  const at = text.indexOf(before);
  if (at < 0 || text.indexOf(before, at + 1) >= 0) throw new Error(`${owner} changed; durable storage patch not applied`);
  return text.slice(0, at) + after + text.slice(at + before.length);
}

export function durableProfileStorage(text) {
  if (text.includes(storageMarker)) {
    if (text.split(storageMarker).length !== 3) throw new Error('Durable storage patch is partially applied');
    return text;
  }
  // The single storage class whose cache is served by the IPC channel below.
  if (!/\(JR\.DEFAULT_FLUSH_DELAY = 100\),\s*\(Um = JR\)/.test(text)) throw new Error('Main storage owner changed');
  if (!text.includes('this.flushDelayer.trigger(() => this.flushPending(), t)')) throw new Error('Main storage flush owner changed');
  text = replaceOnce(text, flushBefore, flushAfter, 'Main storage flush owner');
  return replaceOnce(text, ipcBefore, ipcAfter, 'Main storage IPC owner');
}

export async function installProfileStorageDurability(root) {
  const path = join(root, 'source/app/out/main.js'), before = await readFile(path, 'utf8');
  const after = durableProfileStorage(before);
  if (after === before) return false;
  const backup = join(root, 'backups/profile-storage/main.js');
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
  return true;
}
