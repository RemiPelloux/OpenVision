import { ycl } from "./Ycg.js";
import { sU } from "./prLifecycle.js";
import { E } from "./tslib.es6.js";
var hul, Hfg, xat, Wfg, Gfg;
export { Gfg, Hfg, Wfg, hul, xat };
var __wakaru_gkk_initialized = false;
export function gkk() {
if (__wakaru_gkk_initialized) return;
__wakaru_gkk_initialized = true;
"use strict";
E(), sU(), hul = "glassPrLifecycleCache", Hfg = 1, xat = "lifecycle", Wfg = 720 * 60 * 60 * 1e3, Gfg = class {
    _getDb() {
        return this._dbPromise || (this._dbPromise = new Promise((t, e)=>{
            const n = indexedDB.open(hul, Hfg);
            n.onupgradeneeded = ()=>{
                const i = n.result;
                i.objectStoreNames.contains(xat) || i.createObjectStore(xat);
            }, n.onsuccess = ()=>t(n.result), n.onerror = ()=>e(n.error);
        })), this._dbPromise;
    }
    async loadAll() {
        const t = await this._getDb(), e = await new Promise((s, o)=>{
            const l = t.transaction(xat, "readonly").objectStore(xat).getAll();
            l.onsuccess = ()=>s(l.result ?? []), l.onerror = ()=>o(l.error);
        }), n = Date.now() - Wfg, i = [], r = [];
        for (const s of e)ycl(s.status) && s.fetchedAt >= n ? i.push(s) : r.push(s.prUrl);
        return r.length > 0 && this._deleteMany(r).catch(()=>{}), i;
    }
    async save(t) {
        const e = await this._getDb();
        await new Promise((n, i)=>{
            const r = e.transaction(xat, "readwrite");
            r.objectStore(xat).put(t, t.prUrl), r.oncomplete = ()=>n(), r.onerror = ()=>i(r.error), r.onabort = ()=>i(r.error);
        });
    }
    async _deleteMany(t) {
        const e = await this._getDb();
        await new Promise((n, i)=>{
            const r = e.transaction(xat, "readwrite"), s = r.objectStore(xat);
            for (const o of t)s.delete(o);
            r.oncomplete = ()=>n(), r.onerror = ()=>i(r.error), r.onabort = ()=>i(r.error);
        });
    }
    async clearAll() {
        this._dbPromise !== void 0 && ((await this._dbPromise).close(), this._dbPromise = void 0), await new Promise((t, e)=>{
            const n = indexedDB.deleteDatabase(hul);
            n.onsuccess = ()=>t(), n.onerror = ()=>e(n.error), n.onblocked = ()=>e(new Error("PR lifecycle cache delete blocked: another window has it open"));
        });
    }
};

}
