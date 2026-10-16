import { NFu, qW, zv } from "./De_3.js";
import { Fo, wi } from "./HVr.js";
import { Gp } from "./index_3.ts";
import { A1 } from "./index_5.ts";
import { x } from "./tslib.es6.js";
var $$t, WMn, GMn, qYs, OFu, FFu, BFu, SN;
export { $$t, BFu, FFu, GMn, OFu, SN, WMn, qYs };
var __wakaru_BU_initialized = false;
export function BU() {
if (__wakaru_BU_initialized) return;
__wakaru_BU_initialized = true;
"use strict";
x(), A1(), Gp(), Fo(), $$t = "agentKv:blob:", WMn = "agentKv:checkpoint:", GMn = "agentKv:bubbleCheckpoint:", qYs = "agentKv:artifact:", OFu = 16, FFu = 250, BFu = 500, SN = class {
    constructor(e, t){
        this.storageService = e, this.conversationId = t, this._pendingBlobWrites = new Map, this._blobFlushInProgress = !1, this._blobFlushRequested = !1;
    }
    keyFor(e) {
        return `${$$t}${zv(e)}`;
    }
    async getBlob(e, t) {
        return NFu(e, "ComposerBlobStore.getBlob", FFu, async ()=>{
            const n = this.keyFor(t);
            this._pendingBlobWrites.has(n) && await this.flush(e);
            const i = await this.storageService.cursorDiskKVGetBinary(n);
            if (i !== void 0) return i.length === 1 && i[0] === 0 ? new Uint8Array(0) : i;
            const r = await this.storageService.cursorDiskKVGet(n);
            if (r) try {
                const s = qW(r);
                return s.length === 1 && s[0] === 0 ? new Uint8Array(0) : s;
            } catch  {
                return;
            }
        });
    }
    async setBlob(e, t, n) {
        await NFu(e, "ComposerBlobStore.setBlob", BFu, async ()=>{
            const i = this.keyFor(t);
            await this.enqueueBlobWrite(i, n);
        });
    }
    async setBlobLocallyOnly(e, t, n) {
        return Promise.resolve();
    }
    requireConversationId() {
        if (!this.conversationId) throw new Error("Conversation ID is required");
        return this.conversationId;
    }
    async getLatestCheckpointPointer() {
        const e = await this.storageService.cursorDiskKVGet(`${WMn}${this.requireConversationId()}`);
        return e ? qW(e) : void 0;
    }
    async getBubbleCheckpoint(e) {
        const t = await this.storageService.cursorDiskKVGet(`${GMn}${this.requireConversationId()}:${e}`);
        return t ? qW(t) : void 0;
    }
    async flush(e) {
        this._blobFlushTimer !== void 0 && (clearTimeout(this._blobFlushTimer), this._blobFlushTimer = void 0), await this.flushPendingBlobWrites();
    }
    async clearLegacyCheckpoints() {
        this.conversationId && await Promise.all([
            this.storageService.cursorDiskKVClearPrefix(`${WMn}${this.conversationId}`),
            this.storageService.cursorDiskKVClearPrefix(`${GMn}${this.conversationId}:`)
        ]);
    }
    enqueueBlobWrite(e, t) {
        return new Promise((n, i)=>{
            const r = this._pendingBlobWrites.get(e), s = wi.wrap(new Uint8Array(t));
            r ? this._pendingBlobWrites.set(e, {
                value: s,
                resolvers: [
                    ...r.resolvers,
                    n
                ],
                rejecters: [
                    ...r.rejecters,
                    i
                ]
            }) : this._pendingBlobWrites.set(e, {
                value: s,
                resolvers: [
                    n
                ],
                rejecters: [
                    i
                ]
            }), this.scheduleBlobFlush();
        });
    }
    scheduleBlobFlush() {
        this._blobFlushTimer === void 0 && (this._blobFlushTimer = setTimeout(()=>{
            this._blobFlushTimer = void 0, this.flushPendingBlobWrites();
        }, OFu));
    }
    async flushPendingBlobWrites() {
        if (this._blobFlushInProgress) {
            this._blobFlushRequested = !0, await this._blobFlushPromise;
            return;
        }
        this._blobFlushInProgress = !0;
        let e;
        this._blobFlushPromise = new Promise((t)=>{
            e = t;
        });
        try {
            do {
                if (this._blobFlushRequested = !1, this._pendingBlobWrites.size === 0) continue;
                const t = [
                    ...this._pendingBlobWrites.entries()
                ];
                this._pendingBlobWrites.clear();
                try {
                    await this.storageService.cursorDiskKVSetBinaryBatch(t.map(([n, i])=>[
                            n,
                            i.value.buffer
                        ]));
                    for (const [, n] of t)for (const i of n.resolvers)i();
                } catch (n) {
                    for (const [, i] of t)for (const r of i.rejecters)r(n);
                }
            }while (this._blobFlushRequested || this._pendingBlobWrites.size > 0)
        } finally{
            this._blobFlushInProgress = !1, this._blobFlushPromise = void 0, e();
        }
    }
};

}
