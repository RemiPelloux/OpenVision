import { Y1e, nJi } from "./prLifecycle.js";
import { x } from "./tslib.es6.js";
function MJv(e) {
    return typeof e == "string" && Object.prototype.hasOwnProperty.call(nJi, e);
}
var YTo, nAh, _8e, iAh, rAh;
export { MJv, YTo, _8e, iAh, nAh, rAh };
var __wakaru_Wt__initialized = false;
export function Wt_() {
if (__wakaru_Wt__initialized) return;
__wakaru_Wt__initialized = true;
"use strict";
x(), Y1e(), YTo = "glassPrLifecycleCache", nAh = 1, _8e = "lifecycle", iAh = 720 * 60 * 60 * 1e3, rAh = class {
    _getDb() {
        return this._dbPromise || (this._dbPromise = new Promise((e, t)=>{
            const n = indexedDB.open(YTo, nAh);
            n.onupgradeneeded = ()=>{
                const i = n.result;
                i.objectStoreNames.contains(_8e) || i.createObjectStore(_8e);
            }, n.onsuccess = ()=>e(n.result), n.onerror = ()=>t(n.error);
        })), this._dbPromise;
    }
    async loadAll() {
        const e = await this._getDb(), t = await new Promise((s, o)=>{
            const c = e.transaction(_8e, "readonly").objectStore(_8e).getAll();
            c.onsuccess = ()=>s(c.result ?? []), c.onerror = ()=>o(c.error);
        }), n = Date.now() - iAh, i = [], r = [];
        for (const s of t)MJv(s.status) && s.fetchedAt >= n ? i.push(s) : r.push(s.prUrl);
        return r.length > 0 && this._deleteMany(r).catch(()=>{}), i;
    }
    async save(e) {
        const t = await this._getDb();
        await new Promise((n, i)=>{
            const r = t.transaction(_8e, "readwrite");
            r.objectStore(_8e).put(e, e.prUrl), r.oncomplete = ()=>n(), r.onerror = ()=>i(r.error), r.onabort = ()=>i(r.error);
        });
    }
    async _deleteMany(e) {
        const t = await this._getDb();
        await new Promise((n, i)=>{
            const r = t.transaction(_8e, "readwrite"), s = r.objectStore(_8e);
            for (const o of e)s.delete(o);
            r.oncomplete = ()=>n(), r.onerror = ()=>i(r.error), r.onabort = ()=>i(r.error);
        });
    }
    async clearAll() {
        this._dbPromise !== void 0 && ((await this._dbPromise).close(), this._dbPromise = void 0), await new Promise((e, t)=>{
            const n = indexedDB.deleteDatabase(YTo);
            n.onsuccess = ()=>e(), n.onerror = ()=>t(n.error), n.onblocked = ()=>t(new Error("PR lifecycle cache delete blocked: another window has it open"));
        });
    }
};

}
