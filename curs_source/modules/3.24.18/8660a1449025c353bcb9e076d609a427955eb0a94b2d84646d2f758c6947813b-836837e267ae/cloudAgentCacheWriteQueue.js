import { df, qn } from "./async.js";
import { _4e, _8m } from "./cloudAgentCacheDb.js";
import { E } from "./tslib.es6.js";
import { Ai, Xo } from "./uuid_2.js";
var b8m;
export { b8m };
var __wakaru_NG1_initialized = false;
export function NG1() {
if (__wakaru_NG1_initialized) return;
__wakaru_NG1_initialized = true;
"use strict";
E(), qn(), Xo(), _8m(), b8m = class {
    constructor(t, e, n = ()=>{}){
        this.commitWrites = t, this.clearStores = e, this.didCommitTranscriptWrites = n, this.pendingWrites = new Map, this.pendingTranscriptAgentIds = new Set, this.writeEpoch = 0, this.writeBarrier = Promise.resolve(), this.isWriteFlushScheduled = !1, this.isDisposed = !1, this.cacheRevisionSessionId = Ai(), this.cacheRevisionCounter = 0;
    }
    get epoch() {
        return this.writeEpoch;
    }
    enqueueTranscriptWrite({ agentId: t, storeName: e, key: n, value: i, createValue: r, epoch: s = this.writeEpoch }) {
        this.isDisposed || s !== this.writeEpoch || (this.setPendingWrite({
            storeName: e,
            key: n,
            value: i,
            createValue: r,
            isDelete: !1
        }), this.pendingTranscriptAgentIds.add(t), this.scheduleWriteFlush());
    }
    enqueueWrite({ storeName: t, key: e, value: n, epoch: i = this.writeEpoch }) {
        this.isDisposed || i !== this.writeEpoch || (this.setPendingWrite({
            storeName: t,
            key: e,
            value: n,
            isDelete: !1
        }), this.scheduleWriteFlush());
    }
    enqueueDelete({ storeName: t, key: e, epoch: n = this.writeEpoch }) {
        this.isDisposed || n !== this.writeEpoch || (this.setPendingWrite({
            storeName: t,
            key: e,
            isDelete: !0
        }), this.scheduleWriteFlush());
    }
    beginClear() {
        const t = this.writeBarrier;
        this.writeEpoch += 1, this.pendingWrites.clear(), this.pendingTranscriptAgentIds.clear();
        const e = this.activeWriteFlush, n = (async ()=>{
            await t, await e, await this.clearStores();
        })(), i = new df;
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
            const t = this.writeBarrier;
            if (await t, t === this.writeBarrier) return;
        }
    }
    pendingValue({ storeName: t, key: e }) {
        const n = JSON.stringify([
            t,
            e
        ]), i = this.committingWrites?.epoch === this.writeEpoch ? this.committingWrites.writes.get(n) : void 0, r = this.pendingWrites.get(n) ?? i;
        if (!(r === void 0 || r.createValue !== void 0)) return {
            value: r.isDelete ? void 0 : r.value
        };
    }
    async flushPendingWrites() {
        for(;;){
            const t = this.writeBarrier;
            if (await t, t !== this.writeBarrier) continue;
            const e = this.activeWriteFlush;
            if (e !== void 0) {
                await e;
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
                    let l = !1;
                    for (const c of i){
                        if (c.createValue !== void 0) {
                            if (l && (await new Promise((u)=>setTimeout(u, 0)), this.isDisposed || s !== this.writeEpoch)) return;
                            l = !0;
                        }
                        a.push({
                            storeName: c.storeName,
                            key: c.key,
                            value: c.createValue !== void 0 ? c.createValue() : c.value,
                            isDelete: c.isDelete
                        });
                    }
                    if (this.isDisposed || s !== this.writeEpoch) return;
                    for (const c of r)a.push({
                        storeName: _4e.revisions,
                        key: c,
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
    setPendingWrite(t) {
        this.pendingWrites.set(JSON.stringify([
            t.storeName,
            t.key
        ]), t);
    }
    scheduleWriteFlush() {
        this.isWriteFlushScheduled || (this.isWriteFlushScheduled = !0, queueMicrotask(()=>{
            this.isWriteFlushScheduled = !1, this.flushPendingWrites();
        }));
    }
};

}
