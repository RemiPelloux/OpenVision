import { E } from "./tslib.es6.js";
var p8m;
export { p8m };
var __wakaru_IG1_initialized = false;
export function IG1() {
if (__wakaru_IG1_initialized) return;
__wakaru_IG1_initialized = true;
"use strict";
E(), p8m = class {
    constructor(t){
        this._loadBlobBatch = t, this._pendingBlobGetRequests = new Map, this._isBlobGetFlushScheduled = !1;
    }
    requestBlob(t, e) {
        return new Promise((n, i)=>{
            let r = this._pendingBlobGetRequests.get(t);
            r || (r = new Map, this._pendingBlobGetRequests.set(t, r));
            const s = r.get(e);
            s ? s.push({
                resolve: n,
                reject: i
            }) : r.set(e, [
                {
                    resolve: n,
                    reject: i
                }
            ]), this._scheduleBlobGetFlush();
        });
    }
    dispose() {
        for (const t of this._pendingBlobGetRequests.values())for (const e of t.values())for (const n of e)n.reject(new Error("CloudAgentBlobGetBatcher disposed"));
        this._pendingBlobGetRequests.clear(), this._isBlobGetFlushScheduled = !1;
    }
    _scheduleBlobGetFlush() {
        this._isBlobGetFlushScheduled || (this._isBlobGetFlushScheduled = !0, queueMicrotask(()=>{
            this._isBlobGetFlushScheduled = !1, this._flushPendingBlobGets();
        }));
    }
    async _flushPendingBlobGets() {
        if (this._pendingBlobGetRequests.size === 0) return;
        const t = this._pendingBlobGetRequests;
        this._pendingBlobGetRequests = new Map, await Promise.all(Array.from(t.entries(), ([e, n])=>this._resolveBlobGetBatch(e, n))), this._pendingBlobGetRequests.size > 0 && this._scheduleBlobGetFlush();
    }
    async _resolveBlobGetBatch(t, e) {
        const n = Array.from(e.keys());
        try {
            const i = await this._loadBlobBatch(t, n);
            for (const [r, s] of e){
                const o = i.get(r);
                for (const a of s)a.resolve(o);
            }
        } catch (i) {
            for (const r of e.values())for (const s of r)s.reject(i);
        }
    }
};

}
