import { De } from "./De_3.js";
import { Se, we } from "./HVr.js";
import { Pn } from "./extensions.js";
import { HM } from "./index_191.js";
import { Ze } from "./instantiation.js";
import { mn, pd } from "./qIc.js";
import { x } from "./tslib.es6.js";
var WDh, GDh, eTe, VDh, jDh, YEo, XEo, qDh;
export { GDh, VDh, WDh, XEo, YEo, eTe, jDh, qDh };
var __wakaru_zDh_initialized = false;
export function zDh() {
if (__wakaru_zDh_initialized) return;
__wakaru_zDh_initialized = true;
"use strict";
x(), Se(), Pn(), Ze(), HM(), WDh = "explorerOrchestratorCache", GDh = 1, eTe = "workspaceRemoteExplorerItems", VDh = De.object({
    name: De.string(),
    fetchUrl: De.string().optional(),
    pushUrl: De.string().optional()
}), jDh = De.object({
    path: De.string(),
    displayPath: De.string().optional(),
    remotes: De.array(VDh)
}).transform((e)=>({
        path: e.path,
        displayPath: e.displayPath ?? e.path,
        remotes: e.remotes
    })), YEo = De.object({
    remoteAuthority: De.string(),
    sourceWorkspaceId: De.string().optional(),
    repositories: De.array(jDh),
    savedAtMs: De.number().optional()
}).transform((e)=>({
        remoteAuthority: e.remoteAuthority,
        sourceWorkspaceId: e.sourceWorkspaceId,
        repositories: e.repositories,
        savedAtMs: e.savedAtMs ?? 0
    })), XEo = pd("explorerOrchestratorCacheService"), qDh = class extends we {
    constructor(){
        super(...arguments), this._pendingCacheWrites = [], this._isCacheWriteFlushScheduled = !1;
    }
    async loadWorkspaceRemoteExplorerItems(e) {
        const t = await this._idbGet(e);
        if (!t) return;
        const n = this._parseCachedWorkspacePayload(t);
        if (!n) {
            this.deleteWorkspaceRemoteExplorerItems(e);
            return;
        }
        return n;
    }
    saveWorkspaceRemoteExplorerItems(e, t) {
        const n = this._serializeCachedWorkspacePayload(t);
        n && this._enqueueCacheWrite({
            cacheKey: e,
            payload: n
        });
    }
    deleteWorkspaceRemoteExplorerItems(e) {
        this._enqueueCacheDelete(e);
    }
    async getCachedWorkspaceRemoteExplorerItemsForDebug() {
        return (await this._idbGetAll()).map((t)=>({
                workspaceCacheKey: t.key,
                rawPayload: t.value,
                parsedPayload: this._parseCachedWorkspacePayload(t.value)
            }));
    }
    getCacheDebugState() {
        return {
            pendingWriteCount: this._pendingCacheWrites.length,
            isCacheWriteFlushScheduled: this._isCacheWriteFlushScheduled
        };
    }
    async clearAllWorkspaceRemoteExplorerItemsForDebug() {
        const e = await this._getDb();
        await new Promise((t, n)=>{
            const i = e.transaction(eTe, "readwrite");
            i.objectStore(eTe).clear(), i.oncomplete = ()=>t(), i.onerror = ()=>n(i.error), i.onabort = ()=>n(i.error);
        });
    }
    _parseCachedWorkspacePayload(e) {
        try {
            const t = YEo.safeParse(JSON.parse(e));
            return t.success ? t.data : void 0;
        } catch  {
            return;
        }
    }
    _serializeCachedWorkspacePayload(e) {
        const t = YEo.safeParse(e);
        if (t.success) return JSON.stringify(t.data);
    }
    _getDb() {
        return this._dbPromise || (this._dbPromise = new Promise((e, t)=>{
            const n = indexedDB.open(WDh, GDh);
            n.onupgradeneeded = ()=>{
                const i = n.result;
                i.objectStoreNames.contains(eTe) || i.createObjectStore(eTe);
            }, n.onsuccess = ()=>e(n.result), n.onerror = ()=>t(n.error);
        })), this._dbPromise;
    }
    async _idbGet(e) {
        const t = await this._getDb();
        return new Promise((n, i)=>{
            const o = t.transaction(eTe, "readonly").objectStore(eTe).get(e);
            o.onsuccess = ()=>n(o.result), o.onerror = ()=>i(o.error);
        });
    }
    async _idbGetAll() {
        const e = await this._getDb();
        return new Promise((t, n)=>{
            const i = e.transaction(eTe, "readonly"), s = i.objectStore(eTe).openCursor(), o = [];
            s.onsuccess = ()=>{
                const a = s.result;
                if (!a) {
                    t(o);
                    return;
                }
                o.push({
                    key: String(a.key),
                    value: a.value
                }), a.continue();
            }, s.onerror = ()=>n(s.error), i.onabort = ()=>n(i.error);
        });
    }
    _enqueueCacheWrite({ cacheKey: e, payload: t }) {
        this._pendingCacheWrites.push({
            key: e,
            value: t,
            isDelete: !1
        }), this._scheduleCacheWriteFlush();
    }
    _enqueueCacheDelete(e) {
        this._pendingCacheWrites.push({
            key: e,
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
        const e = this._pendingCacheWrites;
        this._pendingCacheWrites = [];
        try {
            const t = await this._getDb();
            await new Promise((n, i)=>{
                const r = t.transaction(eTe, "readwrite"), s = r.objectStore(eTe);
                for (const o of e)o.isDelete ? s.delete(o.key) : s.put(o.value, o.key);
                r.oncomplete = ()=>n(), r.onerror = ()=>i(r.error), r.onabort = ()=>i(r.error);
            });
        } catch (t) {
            console.error("[ExplorerOrchestratorCacheService] failed to flush pending cache writes", {
                count: e.length,
                error: t
            });
        }
    }
    dispose() {
        super.dispose(), this._pendingCacheWrites = [], this._dbPromise?.then((e)=>e.close()).catch((e)=>{
            console.error("[ExplorerOrchestratorCacheService] failed to close IndexedDB connection", {
                error: e
            });
        }), this._dbPromise = void 0;
    }
}, mn(XEo, qDh, 1, 1);

}
