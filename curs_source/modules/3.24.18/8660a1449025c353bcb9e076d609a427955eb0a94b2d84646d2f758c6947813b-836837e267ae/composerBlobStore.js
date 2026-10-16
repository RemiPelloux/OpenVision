import { Ga, Tr } from "./Iwo.js";
import { Ng } from "./index_3.ts";
import { OT } from "./index_5.ts";
import { $v, T9p, fJ } from "./ipa.js";
import { E } from "./tslib.es6.js";
var WCn, WSi, GSi, N0t, E9p, I9p, x9p, KD;
export { E9p, GSi, I9p, KD, N0t, WCn, WSi, x9p };
var __wakaru_zW_initialized = false;
export function zW() {
if (__wakaru_zW_initialized) return;
__wakaru_zW_initialized = true;
"use strict";
E(), OT(), Ng(), Ga(), WCn = "agentKv:blob:", WSi = "agentKv:checkpoint:", GSi = "agentKv:bubbleCheckpoint:", N0t = "agentKv:artifact:", E9p = 16, I9p = 250, x9p = 500, KD = class {
    constructor(t, e){
        this.storageService = t, this.conversationId = e, this._pendingBlobWrites = new Map, this._blobFlushInProgress = !1, this._blobFlushRequested = !1;
    }
    keyFor(t) {
        return `${WCn}${$v(t)}`;
    }
    async getBlob(t, e) {
        return T9p(t, "ComposerBlobStore.getBlob", I9p, async ()=>{
            const n = this.keyFor(e);
            this._pendingBlobWrites.has(n) && await this.flush(t);
            const i = await this.storageService.cursorDiskKVGetBinary(n);
            if (i !== void 0) return i.length === 1 && i[0] === 0 ? new Uint8Array(0) : i;
            const r = await this.storageService.cursorDiskKVGet(n);
            if (r) try {
                const s = fJ(r);
                return s.length === 1 && s[0] === 0 ? new Uint8Array(0) : s;
            } catch  {
                return;
            }
        });
    }
    async setBlob(t, e, n) {
        await T9p(t, "ComposerBlobStore.setBlob", x9p, async ()=>{
            const i = this.keyFor(e);
            await this.enqueueBlobWrite(i, n);
        });
    }
    async setBlobLocallyOnly(t, e, n) {
        return Promise.resolve();
    }
    requireConversationId() {
        if (!this.conversationId) throw new Error("Conversation ID is required");
        return this.conversationId;
    }
    async getLatestCheckpointPointer() {
        const t = await this.storageService.cursorDiskKVGet(`${WSi}${this.requireConversationId()}`);
        return t ? fJ(t) : void 0;
    }
    async getBubbleCheckpoint(t) {
        const e = await this.storageService.cursorDiskKVGet(`${GSi}${this.requireConversationId()}:${t}`);
        return e ? fJ(e) : void 0;
    }
    async flush(t) {
        this._blobFlushTimer !== void 0 && (clearTimeout(this._blobFlushTimer), this._blobFlushTimer = void 0), await this.flushPendingBlobWrites();
    }
    async clearLegacyCheckpoints() {
        this.conversationId && await Promise.all([
            this.storageService.cursorDiskKVClearPrefix(`${WSi}${this.conversationId}`),
            this.storageService.cursorDiskKVClearPrefix(`${GSi}${this.conversationId}:`)
        ]);
    }
    enqueueBlobWrite(t, e) {
        return new Promise((n, i)=>{
            const r = this._pendingBlobWrites.get(t), s = Tr.wrap(new Uint8Array(e));
            r ? this._pendingBlobWrites.set(t, {
                value: s,
                resolvers: [
                    ...r.resolvers,
                    n
                ],
                rejecters: [
                    ...r.rejecters,
                    i
                ]
            }) : this._pendingBlobWrites.set(t, {
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
        }, E9p));
    }
    async flushPendingBlobWrites() {
        if (this._blobFlushInProgress) {
            this._blobFlushRequested = !0, await this._blobFlushPromise;
            return;
        }
        this._blobFlushInProgress = !0;
        let t;
        this._blobFlushPromise = new Promise((e)=>{
            t = e;
        });
        try {
            do {
                if (this._blobFlushRequested = !1, this._pendingBlobWrites.size === 0) continue;
                const e = [
                    ...this._pendingBlobWrites.entries()
                ];
                this._pendingBlobWrites.clear();
                try {
                    await this.storageService.cursorDiskKVSetBinaryBatch(e.map(([n, i])=>[
                            n,
                            i.value.buffer
                        ]));
                    for (const [, n] of e)for (const i of n.resolvers)i();
                } catch (n) {
                    for (const [, i] of e)for (const r of i.rejecters)r(n);
                }
            }while (this._blobFlushRequested || this._pendingBlobWrites.size > 0)
        } finally{
            this._blobFlushInProgress = !1, this._blobFlushPromise = void 0, t();
        }
    }
};

}
