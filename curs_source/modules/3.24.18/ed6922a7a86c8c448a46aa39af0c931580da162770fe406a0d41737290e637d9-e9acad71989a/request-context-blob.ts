import { C2, Ypv, xee, zv } from "./De_3.js";
import { Yu } from "./browser.ts";
import { CX } from "./index_11.ts";
import { mde } from "./index_4.ts";
import { A1 } from "./index_5.ts";
import { A0v } from "./request-context-encoder.ts";
import { Bj } from "./request_context_exec_pb.js";
import { x } from "./tslib.es6.js";
var akt, jLn, ULd, UWi, $Ld, HLd, WLd;
export { $Ld, HLd, ULd, UWi, WLd, akt, jLn };
var __wakaru_GLd_initialized = false;
export function GLd() {
if (__wakaru_GLd_initialized) return;
__wakaru_GLd_initialized = true;
"use strict";
x(), CX(), A1(), mde(), Bj(), Yu(), A0v(), akt = 15 * 1024 * 1024, jLn = 1 * 1024 * 1024, ULd = 4 * akt, UWi = xee("agent_client.request_context_blob.prepared", {
    description: "Prepared RequestContext blob references"
}), $Ld = C2("agent_client.request_context_blob.bytes", {
    description: "Serialized RequestContext bytes staged by the client"
}), HLd = C2("agent_client.request_context_blob.preparation_ms", {
    description: "Time to hydrate, serialize, and hash RequestContext"
}), WLd = class {
    constructor(e, t = ULd){
        this.parent = e, this.maxTransientBytes = t, this.transientBlobs = new Map, this.persistedBlobIds = new Set, this.transientBytes = 0;
    }
    seed(e, t) {
        return this.seedAll([
            {
                blobId: e,
                blobData: t
            }
        ]);
    }
    seedAll(e) {
        const t = new Map;
        for (const { blobId: i, blobData: r } of e)t.set(zv(i), r.byteLength);
        let n = this.transientBytes;
        for (const [i, r] of t)n -= this.transientBlobs.get(i)?.byteLength ?? 0, n += r;
        if (n > this.maxTransientBytes) return !1;
        for (const { blobId: i, blobData: r } of e)this.transientBlobs.set(zv(i), r);
        return this.transientBytes = n, !0;
    }
    has(e) {
        return this.transientBlobs.has(zv(e));
    }
    hasAll(e) {
        return e.every((t)=>this.has(t));
    }
    async getBlob(e, t) {
        const n = zv(t), i = this.transientBlobs.get(n);
        return i === void 0 ? await this.parent.getBlob(e, t) : i;
    }
    async persistForRemoteRead(e, t) {
        const n = zv(t), i = this.transientBlobs.get(n);
        i === void 0 || this.persistedBlobIds.has(n) || (await Ypv(()=>this.parent.setBlob(e, t, i), 2), this.persistedBlobIds.add(n));
    }
    async setBlob(e, t, n) {
        await this.parent.setBlob(e, t, n);
    }
    async setBlobLocallyOnly(e, t, n) {
        await this.parent.setBlobLocallyOnly(e, t, n);
    }
    async flush(e) {
        await this.parent.flush(e);
    }
};

}
