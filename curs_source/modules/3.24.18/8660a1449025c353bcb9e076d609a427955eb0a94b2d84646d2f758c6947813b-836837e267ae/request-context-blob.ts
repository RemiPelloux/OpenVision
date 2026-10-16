import { kl } from "./browser.ts";
import { uie } from "./index_11.ts";
import { iCe } from "./index_4.ts";
import { OT } from "./index_5.ts";
import { $v, U4, _D1, hpe } from "./ipa.js";
import { IB1 } from "./request-context-encoder.ts";
import { Gte } from "./request_context_exec_pb.js";
import { E } from "./tslib.es6.js";
var uGt, wki, lkm, pYr, ckm, ukm, dkm;
export { ckm, dkm, lkm, pYr, uGt, ukm, wki };
var __wakaru_hkm_initialized = false;
export function hkm() {
if (__wakaru_hkm_initialized) return;
__wakaru_hkm_initialized = true;
"use strict";
E(), uie(), OT(), iCe(), Gte(), kl(), IB1(), uGt = 15 * 1024 * 1024, wki = 1 * 1024 * 1024, lkm = 4 * uGt, pYr = hpe("agent_client.request_context_blob.prepared", {
    description: "Prepared RequestContext blob references"
}), ckm = U4("agent_client.request_context_blob.bytes", {
    description: "Serialized RequestContext bytes staged by the client"
}), ukm = U4("agent_client.request_context_blob.preparation_ms", {
    description: "Time to hydrate, serialize, and hash RequestContext"
}), dkm = class {
    constructor(t, e = lkm){
        this.parent = t, this.maxTransientBytes = e, this.transientBlobs = new Map, this.persistedBlobIds = new Set, this.transientBytes = 0;
    }
    seed(t, e) {
        return this.seedAll([
            {
                blobId: t,
                blobData: e
            }
        ]);
    }
    seedAll(t) {
        const e = new Map;
        for (const { blobId: i, blobData: r } of t)e.set($v(i), r.byteLength);
        let n = this.transientBytes;
        for (const [i, r] of e)n -= this.transientBlobs.get(i)?.byteLength ?? 0, n += r;
        if (n > this.maxTransientBytes) return !1;
        for (const { blobId: i, blobData: r } of t)this.transientBlobs.set($v(i), r);
        return this.transientBytes = n, !0;
    }
    has(t) {
        return this.transientBlobs.has($v(t));
    }
    hasAll(t) {
        return t.every((e)=>this.has(e));
    }
    async getBlob(t, e) {
        const n = $v(e), i = this.transientBlobs.get(n);
        return i === void 0 ? await this.parent.getBlob(t, e) : i;
    }
    async persistForRemoteRead(t, e) {
        const n = $v(e), i = this.transientBlobs.get(n);
        i === void 0 || this.persistedBlobIds.has(n) || (await _D1(()=>this.parent.setBlob(t, e, i), 2), this.persistedBlobIds.add(n));
    }
    async setBlob(t, e, n) {
        await this.parent.setBlob(t, e, n);
    }
    async setBlobLocallyOnly(t, e, n) {
        await this.parent.setBlobLocallyOnly(t, e, n);
    }
    async flush(t) {
        await this.parent.flush(t);
    }
};

}
