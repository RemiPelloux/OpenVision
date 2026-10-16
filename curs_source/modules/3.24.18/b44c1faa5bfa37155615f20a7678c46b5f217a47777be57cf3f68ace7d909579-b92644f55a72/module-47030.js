"use strict";
require.d(exports, {
    Bk: ()=>a,
    Fo: ()=>i,
    We: ()=>d,
    d_: ()=>o,
    ve: ()=>u
});
var n = require("./module-46144.js"), s = require("./module-20600.js");
function o(e, t) {
    return e.isBlobDurable?.(t) ?? !0;
}
function i(e) {
    const t = e.buffer;
    return "undefined" != typeof SharedArrayBuffer && t instanceof SharedArrayBuffer ? new Uint8Array(e) : new Uint8Array(t, e.byteOffset, e.byteLength);
}
async function a(e) {
    const t = await crypto.subtle.digest("SHA-256", i(e));
    return new Uint8Array(t);
}
const c = (0, n.v5)("agent_kv.in_memory.get_blob.duration_ms", {
    description: "Duration of InMemoryBlobStore getBlob operations in milliseconds"
}), l = (0, n.v5)("agent_kv.in_memory.set_blob.duration_ms", {
    description: "Duration of InMemoryBlobStore setBlob operations in milliseconds"
});
class u {
    constructor(){
        this.blobs = new Map;
    }
    getBlob(e, t) {
        const r = performance.now();
        try {
            const e = this.blobs.get((0, s.nj)(t));
            return Promise.resolve(e);
        } finally{
            const t = performance.now() - r;
            c.histogram(e, t);
        }
    }
    setBlob(e, t, r) {
        const n = performance.now();
        try {
            return this.blobs.set((0, s.nj)(t), r), Promise.resolve();
        } finally{
            const t = performance.now() - n;
            l.histogram(e, t);
        }
    }
    setBlobLocallyOnly(e, t, r) {
        return this.setBlob(e, t, r);
    }
    flush(e) {
        return Promise.resolve();
    }
}
class d {
    constructor(){
        this.store = new Map;
    }
    set(e, t) {
        this.store.set(e, t);
    }
    subscribe(e, t) {
        return ()=>{};
    }
    get(e) {
        const t = this.store.get(e);
        if (void 0 === t) throw new Error(`Key ${String(e)} not found in store`);
        return t;
    }
}
