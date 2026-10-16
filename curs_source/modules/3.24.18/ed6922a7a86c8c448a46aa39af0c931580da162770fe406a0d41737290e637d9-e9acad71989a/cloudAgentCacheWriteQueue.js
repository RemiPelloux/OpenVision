import { Am, bn } from "./async.js";
import { uJd, y1e } from "./cloudAgentCacheDb.js";
import { x } from "./tslib.es6.js";
import { Js, zn } from "./uuid.js";
var dJd;
export { dJd };
var __wakaru_pMv_initialized = false;
export function pMv() {
if (__wakaru_pMv_initialized) return;
__wakaru_pMv_initialized = true;
"use strict";
x(), bn(), Js(), uJd(), dJd = class {
    constructor(e, t, n = ()=>{}){
        this.commitWrites = e, this.clearStores = t, this.didCommitTranscriptWrites = n, this.pendingWrites = new Map, this.pendingTranscriptAgentIds = new Set, this.writeEpoch = 0, this.writeBarrier = Promise.resolve(), this.isWriteFlushScheduled = !1, this.isDisposed = !1, this.cacheRevisionSessionId = zn(), this.cacheRevisionCounter = 0;
    }
    get epoch() {
        return this.writeEpoch;
    }
    enqueueTranscriptWrite({ agentId: e, storeName: t, key: n, value: i, createValue: r, epoch: s = this.writeEpoch }) {
        this.isDisposed || s !== this.writeEpoch || (this.setPendingWrite({
            storeName: t,
            key: n,
            value: i,
            createValue: r,
            isDelete: !1
        }), this.pendingTranscriptAgentIds.add(e), this.scheduleWriteFlush());
    }
    enqueueWrite({ storeName: e, key: t, value: n, epoch: i = this.writeEpoch }) {
        this.isDisposed || i !== this.writeEpoch || (this.setPendingWrite({
            storeName: e,
            key: t,
            value: n,
            isDelete: !1
        }), this.scheduleWriteFlush());
    }
    enqueueDelete({ storeName: e, key: t, epoch: n = this.writeEpoch }) {
        this.isDisposed || n !== this.writeEpoch || (this.setPendingWrite({
            storeName: e,
            key: t,
            isDelete: !0
        }), this.scheduleWriteFlush());
    }
    beginClear() {
        const e = this.writeBarrier;
        this.writeEpoch += 1, this.pendingWrites.clear(), this.pendingTranscriptAgentIds.clear();
        const t = this.activeWriteFlush, n = (async ()=>{
            await e, await t, await this.clearStores();
        })(), i = new Am;
        return this.writeBarrier = n.then(()=>i.p).catch(()=>{}), {
            cacheCleared: n,
            complete: async (r)=>{
                try {
                    await n, await r();
                } finally{
                    i.complete();
                }
            }
        };
    }
    async whenClearSettled() {
        for(;;){
            const e = this.writeBarrier;
            if (await e, e === this.writeBarrier) return;
        }
    }
    pendingValue({ storeName: e, key: t }) {
        const n = JSON.stringify([
            e,
            t
        ]), i = this.committingWrites?.epoch === this.writeEpoch ? this.committingWrites.writes.get(n) : void 0, r = this.pendingWrites.get(n) ?? i;
        if (!(r === void 0 || r.createValue !== void 0)) return {
            value: r.isDelete ? void 0 : r.value
        };
    }
    async flushPendingWrites() {
        for(;;){
            const e = this.writeBarrier;
            if (await e, e !== this.writeBarrier) continue;
            const t = this.activeWriteFlush;
            if (t !== void 0) {
                await t;
                continue;
            }
            const n = this.pendingWrites, i = [
                ...n.values()
            ], r = [
                ...this.pendingTranscriptAgentIds
            ];
            if (this.pendingWrites = new Map, this.pendingTranscriptAgentIds.clear(), i.length === 0) return;
            const s = this.writeEpoch, o = (async ()=>{
                try {
                    const a = [];
                    let c = !1;
                    for (const l of i){
                        if (l.createValue !== void 0) {
                            if (c && (await new Promise((u)=>setTimeout(u, 0)), this.isDisposed || s !== this.writeEpoch)) return;
                            c = !0;
                        }
                        a.push({
                            storeName: l.storeName,
                            key: l.key,
                            value: l.createValue !== void 0 ? l.createValue() : l.value,
                            isDelete: l.isDelete
                        });
                    }
                    if (this.isDisposed || s !== this.writeEpoch) return;
                    for (const l of r)a.push({
                        storeName: y1e.revisions,
                        key: l,
                        value: `${this.cacheRevisionSessionId}:${++this.cacheRevisionCounter}`,
                        isDelete: !1
                    });
                    if (await this.commitWrites(a), this.isDisposed || s !== this.writeEpoch || r.length === 0) return;
                    this.didCommitTranscriptWrites(r);
                } catch  {}
            })();
            this.activeWriteFlush = o, this.committingWrites = {
                epoch: s,
                writes: n
            };
            try {
                await o;
            } finally{
                this.activeWriteFlush = void 0, this.committingWrites = void 0;
            }
        }
    }
    dispose() {
        this.isDisposed = !0, this.pendingWrites.clear(), this.committingWrites = void 0, this.pendingTranscriptAgentIds.clear();
    }
    setPendingWrite(e) {
        this.pendingWrites.set(JSON.stringify([
            e.storeName,
            e.key
        ]), e);
    }
    scheduleWriteFlush() {
        this.isWriteFlushScheduled || (this.isWriteFlushScheduled = !0, queueMicrotask(()=>{
            this.isWriteFlushScheduled = !1, this.flushPendingWrites();
        }));
    }
};

}
