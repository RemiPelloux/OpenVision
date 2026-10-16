import { Qe, st } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { iv } from "./index_16.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var Rbg, Pbg, s9e, Mbg, Dbg, fdl, Bas, Nbg;
export { Bas, Dbg, Mbg, Nbg, Pbg, Rbg, fdl, s9e };
var __wakaru_vdl_initialized = false;
export function vdl() {
if (__wakaru_vdl_initialized) return;
__wakaru_vdl_initialized = true;
"use strict";
E(), Qe(), Rn(), It(), iv(), Rbg = "explorerOrchestratorCache", Pbg = 1, s9e = "workspaceRemoteExplorerItems", Mbg = ze.object({
    name: ze.string(),
    fetchUrl: ze.string().optional(),
    pushUrl: ze.string().optional()
}), Dbg = ze.object({
    path: ze.string(),
    displayPath: ze.string().optional(),
    remotes: ze.array(Mbg)
}).transform((t)=>({
        path: t.path,
        displayPath: t.displayPath ?? t.path,
        remotes: t.remotes
    })), fdl = ze.object({
    remoteAuthority: ze.string(),
    sourceWorkspaceId: ze.string().optional(),
    repositories: ze.array(Dbg),
    savedAtMs: ze.number().optional()
}).transform((t)=>({
        remoteAuthority: t.remoteAuthority,
        sourceWorkspaceId: t.sourceWorkspaceId,
        repositories: t.repositories,
        savedAtMs: t.savedAtMs ?? 0
    })), Bas = Il("explorerOrchestratorCacheService"), Nbg = class extends st {
    constructor(){
        super(...arguments), this._pendingCacheWrites = [], this._isCacheWriteFlushScheduled = !1;
    }
    async loadWorkspaceRemoteExplorerItems(t) {
        const e = await this._idbGet(t);
        if (!e) return;
        const n = this._parseCachedWorkspacePayload(e);
        if (!n) {
            this.deleteWorkspaceRemoteExplorerItems(t);
            return;
        }
        return n;
    }
    saveWorkspaceRemoteExplorerItems(t, e) {
        const n = this._serializeCachedWorkspacePayload(e);
        n && this._enqueueCacheWrite({
            cacheKey: t,
            payload: n
        });
    }
    deleteWorkspaceRemoteExplorerItems(t) {
        this._enqueueCacheDelete(t);
    }
    async getCachedWorkspaceRemoteExplorerItemsForDebug() {
        return (await this._idbGetAll()).map((e)=>({
                workspaceCacheKey: e.key,
                rawPayload: e.value,
                parsedPayload: this._parseCachedWorkspacePayload(e.value)
            }));
    }
    getCacheDebugState() {
        return {
            pendingWriteCount: this._pendingCacheWrites.length,
            isCacheWriteFlushScheduled: this._isCacheWriteFlushScheduled
        };
    }
    async clearAllWorkspaceRemoteExplorerItemsForDebug() {
        const t = await this._getDb();
        await new Promise((e, n)=>{
            const i = t.transaction(s9e, "readwrite");
            i.objectStore(s9e).clear(), i.oncomplete = ()=>e(), i.onerror = ()=>n(i.error), i.onabort = ()=>n(i.error);
        });
    }
    _parseCachedWorkspacePayload(t) {
        try {
            const e = fdl.safeParse(JSON.parse(t));
            return e.success ? e.data : void 0;
        } catch  {
            return;
        }
    }
    _serializeCachedWorkspacePayload(t) {
        const e = fdl.safeParse(t);
        if (e.success) return JSON.stringify(e.data);
    }
    _getDb() {
        return this._dbPromise || (this._dbPromise = new Promise((t, e)=>{
            const n = indexedDB.open(Rbg, Pbg);
            n.onupgradeneeded = ()=>{
                const i = n.result;
                i.objectStoreNames.contains(s9e) || i.createObjectStore(s9e);
            }, n.onsuccess = ()=>t(n.result), n.onerror = ()=>e(n.error);
        })), this._dbPromise;
    }
    async _idbGet(t) {
        const e = await this._getDb();
        return new Promise((n, i)=>{
            const o = e.transaction(s9e, "readonly").objectStore(s9e).get(t);
            o.onsuccess = ()=>n(o.result), o.onerror = ()=>i(o.error);
        });
    }
    async _idbGetAll() {
        const t = await this._getDb();
        return new Promise((e, n)=>{
            const i = t.transaction(s9e, "readonly"), s = i.objectStore(s9e).openCursor(), o = [];
            s.onsuccess = ()=>{
                const a = s.result;
                if (!a) {
                    e(o);
                    return;
                }
                o.push({
                    key: String(a.key),
                    value: a.value
                }), a.continue();
            }, s.onerror = ()=>n(s.error), i.onabort = ()=>n(i.error);
        });
    }
    _enqueueCacheWrite({ cacheKey: t, payload: e }) {
        this._pendingCacheWrites.push({
            key: t,
            value: e,
            isDelete: !1
        }), this._scheduleCacheWriteFlush();
    }
    _enqueueCacheDelete(t) {
        this._pendingCacheWrites.push({
            key: t,
            isDelete: !0
        }), this._scheduleCacheWriteFlush();
    }
    _scheduleCacheWriteFlush() {
        this._isCacheWriteFlushScheduled || (this._isCacheWriteFlushScheduled = !0, queueMicrotask(()=>{
            this._isCacheWriteFlushScheduled = !1, this._flushPendingCacheWrites();
        }));
    }
    async _flushPendingCacheWrites() {
        if (this._pendingCacheWrites.length === 0) return;
        const t = this._pendingCacheWrites;
        this._pendingCacheWrites = [];
        try {
            const e = await this._getDb();
            await new Promise((n, i)=>{
                const r = e.transaction(s9e, "readwrite"), s = r.objectStore(s9e);
                for (const o of t)o.isDelete ? s.delete(o.key) : s.put(o.value, o.key);
                r.oncomplete = ()=>n(), r.onerror = ()=>i(r.error), r.onabort = ()=>i(r.error);
            });
        } catch (e) {
            console.error("[ExplorerOrchestratorCacheService] failed to flush pending cache writes", {
                count: t.length,
                error: e
            });
        }
    }
    dispose() {
        super.dispose(), this._pendingCacheWrites = [], this._dbPromise?.then((t)=>t.close()).catch((t)=>{
            console.error("[ExplorerOrchestratorCacheService] failed to close IndexedDB connection", {
                error: t
            });
        }), this._dbPromise = void 0;
    }
}, bn(Bas, Nbg, 1, 1);

}
