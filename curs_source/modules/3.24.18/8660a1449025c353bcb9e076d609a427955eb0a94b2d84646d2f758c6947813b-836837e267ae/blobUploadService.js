import { Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { FNk } from "./Ycg.js";
import { V6e, j7a } from "./agent_service_pb.js";
import { Yu, qn } from "./async.js";
import { KD, zW } from "./composerBlobStore.js";
import { iI, w1 } from "./composerLogService.js";
import { Rn } from "./extensions.js";
import { Ng } from "./index_3.ts";
import { It } from "./instantiation.js";
import { Xp } from "./ipa.js";
import { Uh, ip } from "./metricsService.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ai, Xo } from "./uuid_2.js";
var LVg, N1l, OVg, FVg, BVg, Xps;
export { BVg, FVg, LVg, N1l, OVg, Xps };
var __wakaru_UVg_initialized = false;
export function UVg() {
if (__wakaru_UVg_initialized) return;
__wakaru_UVg_initialized = true;
"use strict";
E(), Ng(), qn(), Qe(), Xo(), Rn(), It(), Zi(), ip(), V6e(), zW(), iI(), LVg = jn("agentClientService"), N1l = jn("blobUploadService"), OVg = 100, FVg = 3, BVg = 2e3, Xps = class extends st {
    constructor(t, e, n, i){
        super(), this._agentClientService = t, this._storageService = e, this._metricsService = n, this._composerLogService = i, this._queue = [], this._draining = !1, this._drainScheduler = this._register(new Yu(()=>this._drain(), BVg));
    }
    enqueue(t) {
        const e = FNk(t.blobIds, OVg), n = e.length, i = `fork-${Ai()}`;
        for(let r = 0; r < e.length; r++)this._queue.push({
            conversationId: t.conversationId,
            forkRequestId: i,
            blobIds: e[r],
            chunkIndex: r,
            totalChunks: n,
            attempts: 0
        });
        this._draining || this._drainScheduler.schedule();
    }
    notifyClone(t) {
        this._agentClientService.notifyConversationClone(Xp(), {
            conversationId: t.conversationId,
            sourceConversationId: t.sourceConversationId,
            sourceRequestId: t.sourceRequestId
        }).catch((e)=>{
            this._composerLogService.error("[BlobUploadService] notifyConversationClone failed:", e);
        });
    }
    async _drain() {
        if (!this._draining) {
            this._draining = !0;
            try {
                for(; this._queue.length > 0;){
                    const t = this._queue.shift();
                    await this._processJob(t);
                }
            } finally{
                this._draining = !1;
            }
        }
    }
    async _processJob(t) {
        const e = performance.now();
        try {
            const n = new KD(this._storageService, t.conversationId), i = Xp(), r = [];
            for (const s of t.blobIds){
                const o = await n.getBlob(i, s);
                o && r.push(new j7a({
                    id: s,
                    value: o
                }));
            }
            r.length > 0 && (await this._agentClientService.uploadConversationBlobs(Xp(), {
                conversationId: t.conversationId,
                blobs: r,
                forkRequestId: t.forkRequestId,
                chunkIndex: t.chunkIndex,
                totalChunks: t.totalChunks
            }), this._metricsService.increment({
                stat: "composer.blobUpload.uploaded",
                tags: {
                    success: "true"
                }
            }), this._metricsService.distribution({
                stat: "composer.blobUpload.uploadDuration",
                value: performance.now() - e
            }), this._metricsService.distribution({
                stat: "composer.blobUpload.blobCount",
                value: r.length
            }));
        } catch (n) {
            t.attempts++, t.attempts < FVg ? this._queue.push(t) : (this._composerLogService.error("[BlobUploadService] chunk upload failed:", n), this._metricsService.increment({
                stat: "composer.blobUpload.uploaded",
                tags: {
                    success: "false"
                }
            }));
        }
    }
}, Xps = Re([
    F(0, LVg),
    F(1, ki),
    F(2, Uh),
    F(3, w1)
], Xps), bn(N1l, Xps, 2);

}
