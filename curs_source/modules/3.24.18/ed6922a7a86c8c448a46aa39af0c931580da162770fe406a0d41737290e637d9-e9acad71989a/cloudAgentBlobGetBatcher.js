import { x } from "./tslib.es6.js";
var sJd;
export { sJd };
var __wakaru_oMv_initialized = false;
export function oMv() {
if (__wakaru_oMv_initialized) return;
__wakaru_oMv_initialized = true;
"use strict";
x(), sJd = class {
    constructor(e){
        this._loadBlobBatch = e, this._pendingBlobGetRequests = new Map, this._isBlobGetFlushScheduled = !1;
    }
    requestBlob(e, t) {
        return new Promise((n, i)=>{
            let r = this._pendingBlobGetRequests.get(e);
            r || (r = new Map, this._pendingBlobGetRequests.set(e, r));
            const s = r.get(t);
            s ? s.push({
                resolve: n,
                reject: i
            }) : r.set(t, [
                {
                    resolve: n,
                    reject: i
                }
            ]), this._scheduleBlobGetFlush();
        });
    }
    dispose() {
        for (const e of this._pendingBlobGetRequests.values())for (const t of e.values())for (const n of t)n.reject(new Error("CloudAgentBlobGetBatcher disposed"));
        this._pendingBlobGetRequests.clear(), this._isBlobGetFlushScheduled = !1;
    }
    _scheduleBlobGetFlush() {
        this._isBlobGetFlushScheduled || (this._isBlobGetFlushScheduled = !0, queueMicrotask(()=>{
            this._isBlobGetFlushScheduled = !1, this._flushPendingBlobGets();
        }));
    }
    async _flushPendingBlobGets() {
        if (this._pendingBlobGetRequests.size === 0) return;
        const e = this._pendingBlobGetRequests;
        this._pendingBlobGetRequests = new Map, await Promise.all(Array.from(e.entries(), ([t, n])=>this._resolveBlobGetBatch(t, n))), this._pendingBlobGetRequests.size > 0 && this._scheduleBlobGetFlush();
    }
    async _resolveBlobGetBatch(e, t) {
        const n = Array.from(t.keys());
        try {
            const i = await this._loadBlobBatch(e, n);
            for (const [r, s] of t){
                const o = i.get(r);
                for (const a of s)a.resolve(o);
            }
        } catch (i) {
            for (const r of t.values())for (const s of r)s.reject(i);
        }
    }
};

}
