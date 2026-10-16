import { Ec, Gt, Qe, da, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { hc, ju, t2 } from "./agent_pb.js";
import { G6e, c_ } from "./async.cursor.js";
import { I_, qn } from "./async.js";
import { IG1, p8m } from "./cloudAgentBlobGetBatcher.js";
import { _4e, _8m } from "./cloudAgentCacheDb.js";
import { NG1, b8m } from "./cloudAgentCacheWriteQueue.js";
import { bqt } from "./conversationStreamOffsets.js";
import { Rn } from "./extensions.js";
import { AG1, BG1, DG1, FG1, Fpe, LG1, OG1, PG1, S8m, UG1, g8m, k8m, xG1, y8m, zJr } from "./gYa.js";
import { iv } from "./index_16.js";
import { OT } from "./index_5.ts";
import { It } from "./instantiation.js";
import { $v, B6e, fJ } from "./ipa.js";
import { m8m } from "./selectedAgenticGitAction.js";
import { wWt } from "./slimConversationStateForBubbleSnapshot.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var Lot, NYa, LYa, Oot, eIn, VJr, D0i, w8m, N0i, C8m, T8m, OYa, E8m, I8m, FYa, BYa, x8m, A8m, UYa, R8m, jCt, P8m;
export { A8m, BYa, C8m, D0i, E8m, FYa, I8m, LYa, Lot, N0i, NYa, OYa, Oot, P8m, R8m, T8m, UYa, VJr, eIn, jCt, w8m, x8m };
var __wakaru_yqt_initialized = false;
export function yqt() {
if (__wakaru_yqt_initialized) return;
__wakaru_yqt_initialized = true;
"use strict";
E(), OT(), qn(), Qe(), c_(), Gt(), It(), Rn(), ju(), IG1(), m8m(), wWt(), _8m(), NG1(), bqt(), iv(), Lot = _4e.blobs, NYa = _4e.states, LYa = "state-saved-at:", Oot = _4e.prStates, eIn = _4e.pendingKickoffPrompts, VJr = _4e.pendingCreationQueueStates, D0i = _4e.sideChatSyncStates, w8m = 10080 * 60 * 1e3, N0i = 100, C8m = 5e3, T8m = ze.object({
    text: ze.string(),
    richText: ze.string().optional(),
    messageId: ze.string(),
    context: ze.custom((t)=>typeof t == "object" && t !== null).optional(),
    isSimulatedMsg: ze.boolean().optional(),
    simulatedMsgReason: ze.nativeEnum(hc).optional(),
    subagentSpawnTaskToolCallId: ze.string().optional(),
    simulatedMessageMetadata: ze.object({
        title: ze.string().optional(),
        taskId: ze.string().optional(),
        fsdFindingAction: ze.string().optional(),
        suppressUIDisplay: ze.boolean().optional()
    }).optional()
}), OYa = ze.object({
    id: ze.string(),
    query: ze.string(),
    richText: ze.string().optional(),
    contextOverride: ze.custom((t)=>typeof t == "object" && t !== null).optional(),
    modelConfigOverride: ze.custom((t)=>typeof t == "object" && t !== null).optional(),
    modelOverride: ze.string().optional(),
    maxModeOverride: ze.boolean().optional(),
    unifiedModeOverride: ze.string().optional(),
    checkoutToBranch: ze.string().optional(),
    skipFocusAfterSubmission: ze.boolean().optional(),
    isPlanExecution: ze.boolean().optional(),
    simulatedMsgReason: ze.number().optional(),
    sentByVoiceCall: ze.boolean().optional(),
    diffTabGitAction: ze.custom((t)=>typeof t == "object" && t !== null).optional(),
    simulatedMessageMetadata: ze.custom((t)=>typeof t == "object" && t !== null).optional(),
    customModeSubmitState: ze.union([
        ze.object({
            kind: ze.literal("custom"),
            activeCustomMode: ze.custom((t)=>typeof t == "object" && t !== null)
        }),
        ze.object({
            kind: ze.literal("none"),
            exitedMode: ze.custom((t)=>typeof t == "object" && t !== null),
            nextMode: ze.nativeEnum(t2)
        })
    ]).optional()
}), E8m = ze.object({
    isCreating: ze.boolean(),
    queueSnapshot: ze.array(OYa),
    submitNowItems: ze.array(OYa)
}), I8m = ze.object({
    desiredArchived: ze.boolean(),
    updatedAt: ze.number().finite().nonnegative()
}), FYa = 20, BYa = "v", x8m = "activeVersion", A8m = "meta", UYa = "diff", R8m = 8, jCt = jn("cloudAgentCacheService"), P8m = class extends st {
    constructor(){
        super(), this._onWillClearAll = this._register(new tt), this.onWillClearAll = this._onWillClearAll.event, this._onDidCommitTranscriptWrites = this._register(new tt), this.onDidCommitTranscriptWrites = this._onDidCommitTranscriptWrites.event, this._prStateVersionCounter = 0, this._prStateWriteGuard = new G6e, this._lastStateSaveEnqueuedAt = new Map, this._latestAcceptedOffsetKeys = new Map, this._stateWriteGenerations = new Map, this._disposed = !1, this._pendingThrottledStateSaves = new Map, this._pendingThrottledStateSaveTimers = this._register(new da), this._stateSaveThrottleMs = C8m, this._writeQueue = new b8m((t)=>this._writeBatch(t), ()=>this._idbClearAllStores(), (t)=>this._onDidCommitTranscriptWrites.fire(t)), this._blobGetBatcher = new p8m((t, e)=>this._loadBlobBatch(t, e));
    }
    _getDb() {
        if (!this._dbPromise) {
            const t = xG1().then((e)=>{
                const n = ()=>{
                    this._dbPromise === t && (this._dbPromise = void 0);
                };
                return e.addEventListener("close", n), e.addEventListener("versionchange", ()=>{
                    n(), e.close();
                }), e;
            });
            t.catch(()=>{
                this._dbPromise === t && (this._dbPromise = void 0);
            }), this._dbPromise = t;
        }
        return this._dbPromise;
    }
    async _idbGet(t, e) {
        const n = await this._getDb();
        return new Promise((i, r)=>{
            const a = n.transaction(t, "readonly").objectStore(t).get(e);
            a.onsuccess = ()=>i(a.result), a.onerror = ()=>r(a.error);
        });
    }
    async _idbGetByPrefix(t, e) {
        const n = await this._getDb();
        return new Promise((i, r)=>{
            const s = n.transaction(t, "readonly"), o = s.objectStore(t), a = IDBKeyRange.bound(e, `${e}\uFFFF`, !1, !1), l = o.openCursor(a), c = [];
            l.onsuccess = ()=>{
                const u = l.result;
                if (!u) {
                    i(c);
                    return;
                }
                c.push({
                    key: u.key,
                    value: u.value
                }), u.continue();
            }, l.onerror = ()=>r(l.error), s.onabort = ()=>r(s.error);
        });
    }
    async _idbDeleteMany(t, e) {
        if (e.length === 0) return;
        const n = await this._getDb();
        await new Promise((i, r)=>{
            const s = n.transaction(t, "readwrite"), o = s.objectStore(t);
            for (const a of e)o.delete(a);
            s.oncomplete = ()=>i(), s.onerror = ()=>r(s.error), s.onabort = ()=>r(s.error);
        });
    }
    _nextPrStateVersionId() {
        return this._prStateVersionCounter += 1, `${Date.now()}-${this._prStateVersionCounter}`;
    }
    _enqueueWrite(t, e, n, i = this._writeQueue.epoch) {
        this._writeQueue.enqueueWrite({
            storeName: t,
            key: e,
            value: n,
            epoch: i
        });
    }
    _enqueueDelete(t, e, n = this._writeQueue.epoch) {
        this._writeQueue.enqueueDelete({
            storeName: t,
            key: e,
            epoch: n
        });
    }
    async _writeBatch(t) {
        const e = await this._getDb(), n = new Set(t.map((i)=>i.storeName));
        await new Promise((i, r)=>{
            const s = e.transaction(Array.from(n), "readwrite");
            for (const o of t)o.isDelete ? s.objectStore(o.storeName).delete(o.key) : s.objectStore(o.storeName).put(o.value, o.key);
            s.oncomplete = ()=>i(), s.onerror = ()=>r(s.error), s.onabort = ()=>r(s.error);
        });
    }
    async _flushPendingWrites() {
        await this._writeQueue.flushPendingWrites();
    }
    async _idbClearAllStores() {
        const t = await this._getDb();
        await AG1(t);
    }
    clearAll() {
        const t = this._writeQueue.beginClear();
        this._prStateWriteGuard.clear(), this._discardThrottledStateSaves(), this._stateWriteGenerations.clear();
        const e = [];
        let n = !0;
        return this._onWillClearAll.fire({
            cacheCleared: t.cacheCleared,
            waitUntil: (i)=>{
                if (!n) throw new Error("Cloud cache clear participants must join synchronously");
                e.push(i);
            }
        }), n = !1, t.complete(async ()=>{
            await I_.settled(e);
        });
    }
    async getBlob(t, e) {
        const n = this._writeQueue.pendingValue({
            storeName: Lot,
            key: g8m(t, e)
        });
        return n !== void 0 ? n.value instanceof ArrayBuffer ? new Uint8Array(n.value.slice(0)) : void 0 : this._blobGetBatcher.requestBlob(t, $v(e));
    }
    async _loadBlobBatch(t, e) {
        const n = new Map;
        if (e.length === 0) return n;
        const i = await this._getDb(), r = `${t}:`, s = e.map((l)=>`${r}${l}`).sort(), o = s[0], a = s[s.length - 1];
        return new Promise((l, c)=>{
            const h = i.transaction(Lot, "readonly").objectStore(Lot).openCursor(IDBKeyRange.bound(o, a, !1, !1));
            let p = 0;
            h.onsuccess = ()=>{
                const g = h.result;
                if (!g) {
                    l(n);
                    return;
                }
                const f = g.key;
                for(; p < s.length && s[p] < f;)p++;
                if (p >= s.length) {
                    l(n);
                    return;
                }
                const _ = s[p];
                if (f === _) {
                    const b = _.slice(r.length), y = g.value;
                    if (n.set(b, new Uint8Array(y)), p++, p >= s.length) {
                        l(n);
                        return;
                    }
                    g.continue(s[p]);
                    return;
                }
                g.continue(_);
            }, h.onerror = ()=>c(h.error);
        });
    }
    setBlob(t, e, n, i) {
        if (!this._isWriteFenceCurrent(t, i)) return;
        const r = g8m(t, e);
        this._writeQueue.enqueueTranscriptWrite({
            agentId: t,
            storeName: Lot,
            key: r,
            value: n.buffer.slice(n.byteOffset, n.byteOffset + n.byteLength)
        });
    }
    async listBlobs(t) {
        const e = await this._getDb(), n = `${t}:`;
        return new Promise((i, r)=>{
            const o = e.transaction(Lot, "readonly").objectStore(Lot), a = IDBKeyRange.bound(n, n + "\uFFFF", !1, !1), l = o.getAllKeys(a);
            l.onsuccess = ()=>{
                const c = l.result, u = [];
                for (const d of c){
                    const h = d.slice(n.length);
                    if (h) try {
                        u.push(fJ(h));
                    } catch  {}
                }
                i(u);
            }, l.onerror = ()=>r(l.error);
        });
    }
    async loadAllBlobs(t) {
        const e = await this._getDb(), n = `${t}:`, i = new Map;
        return new Promise((r, s)=>{
            const a = e.transaction(Lot, "readonly").objectStore(Lot), l = IDBKeyRange.bound(n, n + "\uFFFF", !1, !1), c = a.openCursor(l);
            c.onsuccess = ()=>{
                const u = c.result;
                if (!u) {
                    r(i);
                    return;
                }
                const h = u.key.slice(n.length);
                if (h) {
                    const p = u.value;
                    i.set(h, new Uint8Array(p));
                }
                u.continue();
            }, c.onerror = ()=>s(c.error);
        });
    }
    beginWriteFence(t) {
        return {
            generation: this._stateWriteGenerations.get(t) ?? 0,
            epoch: this._writeQueue.epoch
        };
    }
    armStateOffsetWatermark({ agentId: t, offsetKey: e, fence: n }) {
        if (!this._isWriteFenceCurrent(t, n)) return;
        const i = this._latestAcceptedOffsetKeys.get(t);
        (i === void 0 || Fpe(e, i) > 0) && this._latestAcceptedOffsetKeys.set(t, e);
    }
    _isWriteFenceCurrent(t, e) {
        return e === void 0 ? !0 : e.epoch === this._writeQueue.epoch && e.generation === (this._stateWriteGenerations.get(t) ?? 0);
    }
    saveState(t, e, n, i) {
        if (this._disposed || !this._isWriteFenceCurrent(t, i)) return;
        const r = this._latestAcceptedOffsetKeys.get(t);
        if (r !== void 0 && Fpe(n, r) < 0) return;
        this._latestAcceptedOffsetKeys.set(t, n), i === void 0 && this._stateWriteGenerations.set(t, (this._stateWriteGenerations.get(t) ?? 0) + 1);
        const s = Date.now(), o = this._lastStateSaveEnqueuedAt.get(t), a = this._pendingThrottledStateSaves.get(t);
        if (a === void 0 && (o === void 0 || s - o >= this._stateSaveThrottleMs)) {
            this._enqueueStateSave({
                agentId: t,
                state: e,
                offsetKey: n,
                savedAt: s,
                epoch: this._writeQueue.epoch
            });
            return;
        }
        if (a !== void 0) {
            a.state = e, a.offsetKey = n, a.savedAt = s, a.epoch = this._writeQueue.epoch;
            return;
        }
        const l = Math.max(0, this._stateSaveThrottleMs - (s - (o ?? s)));
        this._pendingThrottledStateSaveTimers.set(t, Ec(()=>{
            const c = this._pendingThrottledStateSaves.get(t);
            c !== void 0 && (this._pendingThrottledStateSaves.delete(t), this._pendingThrottledStateSaveTimers.deleteAndDispose(t), this._enqueueStateSave({
                agentId: t,
                state: c.state,
                offsetKey: c.offsetKey,
                savedAt: c.savedAt,
                epoch: c.epoch
            }));
        }, l)), this._pendingThrottledStateSaves.set(t, {
            state: e,
            offsetKey: n,
            savedAt: s,
            epoch: this._writeQueue.epoch
        });
    }
    _enqueueStateSave(t) {
        this._lastStateSaveEnqueuedAt.set(t.agentId, Date.now()), this._writeQueue.enqueueTranscriptWrite({
            agentId: t.agentId,
            storeName: NYa,
            key: t.agentId,
            epoch: t.epoch,
            createValue: ()=>({
                    offsetKey: t.offsetKey,
                    savedAt: t.savedAt,
                    stateBinary: PG1(B6e(t.state))
                })
        }), this._enqueueWrite(_4e.revisions, `${LYa}${t.agentId}`, {
            savedAt: t.savedAt,
            offsetKey: t.offsetKey
        }, t.epoch);
    }
    _flushThrottledStateSaves() {
        for (const [t, e] of this._pendingThrottledStateSaves)this._pendingThrottledStateSaveTimers.deleteAndDispose(t), this._enqueueStateSave({
            agentId: t,
            state: e.state,
            offsetKey: e.offsetKey,
            savedAt: e.savedAt,
            epoch: e.epoch
        });
        this._pendingThrottledStateSaves.clear();
    }
    _discardThrottledStateSaves() {
        this._pendingThrottledStateSaveTimers.clearAndDisposeAll(), this._pendingThrottledStateSaves.clear(), this._latestAcceptedOffsetKeys.clear(), this._lastStateSaveEnqueuedAt.clear();
    }
    async loadState(t) {
        const e = this._pendingThrottledStateSaves.get(t);
        if (e !== void 0) return {
            state: e.state,
            offsetKey: e.offsetKey,
            savedAt: e.savedAt
        };
        const n = await this._idbGet(NYa, t), i = this._pendingThrottledStateSaves.get(t);
        return i !== void 0 ? {
            state: i.state,
            offsetKey: i.offsetKey,
            savedAt: i.savedAt
        } : DG1(n);
    }
    async _readStateFreshness(t) {
        const e = await this._idbGet(_4e.revisions, `${LYa}${t}`);
        if (typeof e == "number" && Number.isFinite(e)) return {
            savedAt: e,
            offsetKey: void 0
        };
        if (typeof e == "object" && e !== null) {
            const { savedAt: n, offsetKey: i } = e;
            return {
                savedAt: typeof n == "number" && Number.isFinite(n) ? n : void 0,
                offsetKey: typeof i == "string" ? i : void 0
            };
        }
        return {
            savedAt: void 0,
            offsetKey: void 0
        };
    }
    async getStateSavedAt(t) {
        return (await this._readStateFreshness(t)).savedAt;
    }
    async getPersistedOffsetKey(t) {
        return await this._writeQueue.whenClearSettled(), (await this._readStateFreshness(t)).offsetKey;
    }
    async flushPendingWrites() {
        for(let t = 0; t < 2 && (this._flushThrottledStateSaves(), await Promise.resolve(), await this._flushPendingWrites(), this._pendingThrottledStateSaves.size !== 0); t++);
    }
    savePendingKickoffPrompt(t, e) {
        this._enqueueWrite(eIn, t, JSON.stringify(e));
    }
    async loadPendingKickoffPrompt(t) {
        const e = await this._idbGet(eIn, t);
        if (e) try {
            const n = T8m.safeParse(JSON.parse(e));
            return n.success ? n.data : void 0;
        } catch  {
            return;
        }
    }
    deletePendingKickoffPrompt(t) {
        this._enqueueDelete(eIn, t);
    }
    async migratePendingKickoffPrompt(t, e) {
        if (t === e) return;
        const n = this._writeQueue.epoch, i = await this.loadPendingKickoffPrompt(t);
        !i || n !== this._writeQueue.epoch || (this._enqueueWrite(eIn, e, JSON.stringify(i), n), this._enqueueDelete(eIn, t, n));
    }
    savePendingCreationQueueState(t, e) {
        this._enqueueWrite(VJr, t, JSON.stringify(e));
    }
    async loadPendingCreationQueueState(t) {
        const e = await this._idbGet(VJr, t);
        if (e) try {
            const n = E8m.safeParse(JSON.parse(e));
            return n.success ? {
                isCreating: n.data.isCreating,
                queueSnapshot: n.data.queueSnapshot.map(y8m),
                submitNowItems: n.data.submitNowItems.map(y8m)
            } : void 0;
        } catch  {
            return;
        }
    }
    deletePendingCreationQueueState(t) {
        this._enqueueDelete(VJr, t);
    }
    saveSideChatSyncState(t, e) {
        this._enqueueWrite(D0i, t, JSON.stringify(e));
    }
    async loadSideChatSyncStates() {
        const t = await this._idbGetByPrefix(D0i, ""), e = Date.now(), n = [], i = [];
        for (const r of t)try {
            const s = I8m.safeParse(JSON.parse(r.value));
            if (!s.success || e - s.data.updatedAt > w8m) {
                i.push(r.key);
                continue;
            }
            n.push({
                key: r.key,
                value: s.data
            });
        } catch  {
            i.push(r.key);
        }
        n.sort((r, s)=>s.value.updatedAt - r.value.updatedAt);
        for (const r of n.slice(N0i))i.push(r.key);
        for (const r of i)this._enqueueDelete(D0i, r);
        return new Map(n.slice(0, N0i).map(({ key: r, value: s })=>[
                r,
                s
            ]));
    }
    deleteSideChatSyncState(t) {
        this._enqueueDelete(D0i, t);
    }
    savePrState(t, e) {
        this._savePrStateIncremental(t, e);
    }
    _isPrStateWriteCurrent(t, e) {
        return e === this._writeQueue.epoch && t.isCurrent();
    }
    async _savePrStateIncremental(t, e) {
        const n = this._writeQueue.epoch, i = this._prStateWriteGuard.bump(t);
        try {
            const r = S8m(t), s = this._nextPrStateVersionId(), { diffs: o, ...a } = e, l = {
                ...a,
                diffCount: o.length
            };
            if (!this._isPrStateWriteCurrent(i, n)) return;
            this._enqueueWrite(Oot, k8m(t, s), l, n), await this._flushPendingWrites();
            for(let h = 0; h < o.length; h += FYa){
                if (!this._isPrStateWriteCurrent(i, n)) return;
                const p = o.slice(h, h + FYa);
                for(let g = 0; g < p.length; g++)this._enqueueWrite(Oot, OG1(t, s, h + g), p[g], n);
                await this._flushPendingWrites(), await new Promise((g)=>setTimeout(g, 0));
            }
            if (!this._isPrStateWriteCurrent(i, n) || (this._enqueueWrite(Oot, r, s, n), await this._flushPendingWrites(), !this._isPrStateWriteCurrent(i, n))) return;
            const c = await this._idbGetByPrefix(Oot, LG1(t));
            if (!this._isPrStateWriteCurrent(i, n)) return;
            const u = zJr(t, s), d = c.map((h)=>h.key).filter((h)=>!h.startsWith(u));
            await this._idbDeleteMany(Oot, d);
        } catch  {}
    }
    async _loadChunkedPrState(t) {
        const e = await this._idbGet(Oot, S8m(t));
        if (!e) return;
        const n = await this._idbGet(Oot, k8m(t, e)), i = BG1(n);
        if (!i) return;
        const r = await this._idbGetByPrefix(Oot, FG1(t, e));
        if (r.length < i.diffCount) return;
        const s = [];
        for(let l = 0; l < i.diffCount; l++){
            const c = UG1(r[l].value);
            if (!c) return;
            s.push(c);
        }
        const { diffCount: o, ...a } = i;
        return {
            ...a,
            diffs: s
        };
    }
    async loadPrState(t) {
        try {
            return await this._loadChunkedPrState(t);
        } catch  {
            return;
        }
    }
    dispose() {
        this._disposed = !0, super.dispose(), this._blobGetBatcher.dispose(), this._writeQueue.dispose(), this._prStateWriteGuard.clear(), this._discardThrottledStateSaves(), this._stateWriteGenerations.clear(), this._dbPromise?.then((t)=>t.close()).catch(()=>{}), this._dbPromise = void 0;
    }
}, bn(jCt, P8m, 1);

}
