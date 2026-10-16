import { De, q0e, qW, zv } from "./De_3.js";
import { Cl, Se, bt, po, ve, we } from "./HVr.js";
import { UE, xd, zd } from "./agent_pb.js";
import { XMe, ub } from "./async.cursor.js";
import { Rm, bn } from "./async.js";
import { oMv, sJd } from "./cloudAgentBlobGetBatcher.js";
import { uJd, y1e } from "./cloudAgentCacheDb.js";
import { dJd, pMv } from "./cloudAgentCacheWriteQueue.js";
import { rwt } from "./conversationStreamOffsets.js";
import { Pn } from "./extensions.js";
import { HM } from "./index_191.js";
import { A1 } from "./index_5.ts";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { oJd } from "./selectedAgenticGitAction.js";
import { cSt } from "./slimConversationStateForBubbleSnapshot.js";
import { x } from "./tslib.es6.js";
import { Gqi, _Mv, aJd, aMv, cMv, fMv, gMv, hJd, hMv, mJd, mMv, pJd, uMv, vMv, zee } from "./xmo.js";
var LUe, Xmo, Zmo, NUe, eGt, Vqi, W2n, gJd, G2n, fJd, vJd, Qmo, _Jd, bJd, Jmo, ego, yJd, SJd, tgo, kJd, swt, wJd;
export { G2n, Jmo, LUe, NUe, Qmo, SJd, Vqi, W2n, Xmo, Zmo, _Jd, bJd, eGt, ego, fJd, gJd, kJd, swt, tgo, vJd, wJd, yJd };
var __wakaru_tGt_initialized = false;
export function tGt() {
if (__wakaru_tGt_initialized) return;
__wakaru_tGt_initialized = true;
"use strict";
x(), A1(), bn(), Se(), ub(), bt(), Ze(), Pn(), zd(), oMv(), oJd(), cSt(), uJd(), pMv(), rwt(), HM(), LUe = y1e.blobs, Xmo = y1e.states, Zmo = "state-saved-at:", NUe = y1e.prStates, eGt = y1e.pendingKickoffPrompts, Vqi = y1e.pendingCreationQueueStates, W2n = y1e.sideChatSyncStates, gJd = 10080 * 60 * 1e3, G2n = 100, fJd = 5e3, vJd = De.object({
    text: De.string(),
    richText: De.string().optional(),
    messageId: De.string(),
    context: De.custom((e)=>typeof e == "object" && e !== null).optional(),
    isSimulatedMsg: De.boolean().optional(),
    simulatedMsgReason: De.nativeEnum(xd).optional(),
    subagentSpawnTaskToolCallId: De.string().optional(),
    simulatedMessageMetadata: De.object({
        title: De.string().optional(),
        taskId: De.string().optional(),
        fsdFindingAction: De.string().optional(),
        suppressUIDisplay: De.boolean().optional()
    }).optional()
}), Qmo = De.object({
    id: De.string(),
    query: De.string(),
    richText: De.string().optional(),
    contextOverride: De.custom((e)=>typeof e == "object" && e !== null).optional(),
    modelConfigOverride: De.custom((e)=>typeof e == "object" && e !== null).optional(),
    modelOverride: De.string().optional(),
    maxModeOverride: De.boolean().optional(),
    unifiedModeOverride: De.string().optional(),
    checkoutToBranch: De.string().optional(),
    skipFocusAfterSubmission: De.boolean().optional(),
    isPlanExecution: De.boolean().optional(),
    simulatedMsgReason: De.number().optional(),
    sentByVoiceCall: De.boolean().optional(),
    diffTabGitAction: De.custom((e)=>typeof e == "object" && e !== null).optional(),
    simulatedMessageMetadata: De.custom((e)=>typeof e == "object" && e !== null).optional(),
    customModeSubmitState: De.union([
        De.object({
            kind: De.literal("custom"),
            activeCustomMode: De.custom((e)=>typeof e == "object" && e !== null)
        }),
        De.object({
            kind: De.literal("none"),
            exitedMode: De.custom((e)=>typeof e == "object" && e !== null),
            nextMode: De.nativeEnum(UE)
        })
    ]).optional()
}), _Jd = De.object({
    isCreating: De.boolean(),
    queueSnapshot: De.array(Qmo),
    submitNowItems: De.array(Qmo)
}), bJd = De.object({
    desiredArchived: De.boolean(),
    updatedAt: De.number().finite().nonnegative()
}), Jmo = 20, ego = "v", yJd = "activeVersion", SJd = "meta", tgo = "diff", kJd = 8, swt = vn("cloudAgentCacheService"), wJd = class extends we {
    constructor(){
        super(), this._onWillClearAll = this._register(new ve), this.onWillClearAll = this._onWillClearAll.event, this._onDidCommitTranscriptWrites = this._register(new ve), this.onDidCommitTranscriptWrites = this._onDidCommitTranscriptWrites.event, this._prStateVersionCounter = 0, this._prStateWriteGuard = new XMe, this._lastStateSaveEnqueuedAt = new Map, this._latestAcceptedOffsetKeys = new Map, this._stateWriteGenerations = new Map, this._disposed = !1, this._pendingThrottledStateSaves = new Map, this._pendingThrottledStateSaveTimers = this._register(new po), this._stateSaveThrottleMs = fJd, this._writeQueue = new dJd((e)=>this._writeBatch(e), ()=>this._idbClearAllStores(), (e)=>this._onDidCommitTranscriptWrites.fire(e)), this._blobGetBatcher = new sJd((e, t)=>this._loadBlobBatch(e, t));
    }
    _getDb() {
        if (!this._dbPromise) {
            const e = aMv().then((t)=>{
                const n = ()=>{
                    this._dbPromise === e && (this._dbPromise = void 0);
                };
                return t.addEventListener("close", n), t.addEventListener("versionchange", ()=>{
                    n(), t.close();
                }), t;
            });
            e.catch(()=>{
                this._dbPromise === e && (this._dbPromise = void 0);
            }), this._dbPromise = e;
        }
        return this._dbPromise;
    }
    async _idbGet(e, t) {
        const n = await this._getDb();
        return new Promise((i, r)=>{
            const a = n.transaction(e, "readonly").objectStore(e).get(t);
            a.onsuccess = ()=>i(a.result), a.onerror = ()=>r(a.error);
        });
    }
    async _idbGetByPrefix(e, t) {
        const n = await this._getDb();
        return new Promise((i, r)=>{
            const s = n.transaction(e, "readonly"), o = s.objectStore(e), a = IDBKeyRange.bound(t, `${t}\uFFFF`, !1, !1), c = o.openCursor(a), l = [];
            c.onsuccess = ()=>{
                const u = c.result;
                if (!u) {
                    i(l);
                    return;
                }
                l.push({
                    key: u.key,
                    value: u.value
                }), u.continue();
            }, c.onerror = ()=>r(c.error), s.onabort = ()=>r(s.error);
        });
    }
    async _idbDeleteMany(e, t) {
        if (t.length === 0) return;
        const n = await this._getDb();
        await new Promise((i, r)=>{
            const s = n.transaction(e, "readwrite"), o = s.objectStore(e);
            for (const a of t)o.delete(a);
            s.oncomplete = ()=>i(), s.onerror = ()=>r(s.error), s.onabort = ()=>r(s.error);
        });
    }
    _nextPrStateVersionId() {
        return this._prStateVersionCounter += 1, `${Date.now()}-${this._prStateVersionCounter}`;
    }
    _enqueueWrite(e, t, n, i = this._writeQueue.epoch) {
        this._writeQueue.enqueueWrite({
            storeName: e,
            key: t,
            value: n,
            epoch: i
        });
    }
    _enqueueDelete(e, t, n = this._writeQueue.epoch) {
        this._writeQueue.enqueueDelete({
            storeName: e,
            key: t,
            epoch: n
        });
    }
    async _writeBatch(e) {
        const t = await this._getDb(), n = new Set(e.map((i)=>i.storeName));
        await new Promise((i, r)=>{
            const s = t.transaction(Array.from(n), "readwrite");
            for (const o of e)o.isDelete ? s.objectStore(o.storeName).delete(o.key) : s.objectStore(o.storeName).put(o.value, o.key);
            s.oncomplete = ()=>i(), s.onerror = ()=>r(s.error), s.onabort = ()=>r(s.error);
        });
    }
    async _flushPendingWrites() {
        await this._writeQueue.flushPendingWrites();
    }
    async _idbClearAllStores() {
        const e = await this._getDb();
        await cMv(e);
    }
    clearAll() {
        const e = this._writeQueue.beginClear();
        this._prStateWriteGuard.clear(), this._discardThrottledStateSaves(), this._stateWriteGenerations.clear();
        const t = [];
        let n = !0;
        return this._onWillClearAll.fire({
            cacheCleared: e.cacheCleared,
            waitUntil: (i)=>{
                if (!n) throw new Error("Cloud cache clear participants must join synchronously");
                t.push(i);
            }
        }), n = !1, e.complete(async ()=>{
            await Rm.settled(t);
        });
    }
    async getBlob(e, t) {
        const n = this._writeQueue.pendingValue({
            storeName: LUe,
            key: aJd(e, t)
        });
        return n !== void 0 ? n.value instanceof ArrayBuffer ? new Uint8Array(n.value.slice(0)) : void 0 : this._blobGetBatcher.requestBlob(e, zv(t));
    }
    async _loadBlobBatch(e, t) {
        const n = new Map;
        if (t.length === 0) return n;
        const i = await this._getDb(), r = `${e}:`, s = t.map((c)=>`${r}${c}`).sort(), o = s[0], a = s[s.length - 1];
        return new Promise((c, l)=>{
            const p = i.transaction(LUe, "readonly").objectStore(LUe).openCursor(IDBKeyRange.bound(o, a, !1, !1));
            let g = 0;
            p.onsuccess = ()=>{
                const f = p.result;
                if (!f) {
                    c(n);
                    return;
                }
                const v = f.key;
                for(; g < s.length && s[g] < v;)g++;
                if (g >= s.length) {
                    c(n);
                    return;
                }
                const b = s[g];
                if (v === b) {
                    const y = b.slice(r.length), T = f.value;
                    if (n.set(y, new Uint8Array(T)), g++, g >= s.length) {
                        c(n);
                        return;
                    }
                    f.continue(s[g]);
                    return;
                }
                f.continue(b);
            }, p.onerror = ()=>l(p.error);
        });
    }
    setBlob(e, t, n, i) {
        if (!this._isWriteFenceCurrent(e, i)) return;
        const r = aJd(e, t);
        this._writeQueue.enqueueTranscriptWrite({
            agentId: e,
            storeName: LUe,
            key: r,
            value: n.buffer.slice(n.byteOffset, n.byteOffset + n.byteLength)
        });
    }
    async listBlobs(e) {
        const t = await this._getDb(), n = `${e}:`;
        return new Promise((i, r)=>{
            const o = t.transaction(LUe, "readonly").objectStore(LUe), a = IDBKeyRange.bound(n, n + "\uFFFF", !1, !1), c = o.getAllKeys(a);
            c.onsuccess = ()=>{
                const l = c.result, u = [];
                for (const h of l){
                    const p = h.slice(n.length);
                    if (p) try {
                        u.push(qW(p));
                    } catch  {}
                }
                i(u);
            }, c.onerror = ()=>r(c.error);
        });
    }
    async loadAllBlobs(e) {
        const t = await this._getDb(), n = `${e}:`, i = new Map;
        return new Promise((r, s)=>{
            const a = t.transaction(LUe, "readonly").objectStore(LUe), c = IDBKeyRange.bound(n, n + "\uFFFF", !1, !1), l = a.openCursor(c);
            l.onsuccess = ()=>{
                const u = l.result;
                if (!u) {
                    r(i);
                    return;
                }
                const p = u.key.slice(n.length);
                if (p) {
                    const g = u.value;
                    i.set(p, new Uint8Array(g));
                }
                u.continue();
            }, l.onerror = ()=>s(l.error);
        });
    }
    beginWriteFence(e) {
        return {
            generation: this._stateWriteGenerations.get(e) ?? 0,
            epoch: this._writeQueue.epoch
        };
    }
    armStateOffsetWatermark({ agentId: e, offsetKey: t, fence: n }) {
        if (!this._isWriteFenceCurrent(e, n)) return;
        const i = this._latestAcceptedOffsetKeys.get(e);
        (i === void 0 || zee(t, i) > 0) && this._latestAcceptedOffsetKeys.set(e, t);
    }
    _isWriteFenceCurrent(e, t) {
        return t === void 0 ? !0 : t.epoch === this._writeQueue.epoch && t.generation === (this._stateWriteGenerations.get(e) ?? 0);
    }
    saveState(e, t, n, i) {
        if (this._disposed || !this._isWriteFenceCurrent(e, i)) return;
        const r = this._latestAcceptedOffsetKeys.get(e);
        if (r !== void 0 && zee(n, r) < 0) return;
        this._latestAcceptedOffsetKeys.set(e, n), i === void 0 && this._stateWriteGenerations.set(e, (this._stateWriteGenerations.get(e) ?? 0) + 1);
        const s = Date.now(), o = this._lastStateSaveEnqueuedAt.get(e), a = this._pendingThrottledStateSaves.get(e);
        if (a === void 0 && (o === void 0 || s - o >= this._stateSaveThrottleMs)) {
            this._enqueueStateSave({
                agentId: e,
                state: t,
                offsetKey: n,
                savedAt: s,
                epoch: this._writeQueue.epoch
            });
            return;
        }
        if (a !== void 0) {
            a.state = t, a.offsetKey = n, a.savedAt = s, a.epoch = this._writeQueue.epoch;
            return;
        }
        const c = Math.max(0, this._stateSaveThrottleMs - (s - (o ?? s)));
        this._pendingThrottledStateSaveTimers.set(e, Cl(()=>{
            const l = this._pendingThrottledStateSaves.get(e);
            l !== void 0 && (this._pendingThrottledStateSaves.delete(e), this._pendingThrottledStateSaveTimers.deleteAndDispose(e), this._enqueueStateSave({
                agentId: e,
                state: l.state,
                offsetKey: l.offsetKey,
                savedAt: l.savedAt,
                epoch: l.epoch
            }));
        }, c)), this._pendingThrottledStateSaves.set(e, {
            state: t,
            offsetKey: n,
            savedAt: s,
            epoch: this._writeQueue.epoch
        });
    }
    _enqueueStateSave(e) {
        this._lastStateSaveEnqueuedAt.set(e.agentId, Date.now()), this._writeQueue.enqueueTranscriptWrite({
            agentId: e.agentId,
            storeName: Xmo,
            key: e.agentId,
            epoch: e.epoch,
            createValue: ()=>({
                    offsetKey: e.offsetKey,
                    savedAt: e.savedAt,
                    stateBinary: uMv(q0e(e.state))
                })
        }), this._enqueueWrite(y1e.revisions, `${Zmo}${e.agentId}`, {
            savedAt: e.savedAt,
            offsetKey: e.offsetKey
        }, e.epoch);
    }
    _flushThrottledStateSaves() {
        for (const [e, t] of this._pendingThrottledStateSaves)this._pendingThrottledStateSaveTimers.deleteAndDispose(e), this._enqueueStateSave({
            agentId: e,
            state: t.state,
            offsetKey: t.offsetKey,
            savedAt: t.savedAt,
            epoch: t.epoch
        });
        this._pendingThrottledStateSaves.clear();
    }
    _discardThrottledStateSaves() {
        this._pendingThrottledStateSaveTimers.clearAndDisposeAll(), this._pendingThrottledStateSaves.clear(), this._latestAcceptedOffsetKeys.clear(), this._lastStateSaveEnqueuedAt.clear();
    }
    async loadState(e) {
        const t = this._pendingThrottledStateSaves.get(e);
        if (t !== void 0) return {
            state: t.state,
            offsetKey: t.offsetKey,
            savedAt: t.savedAt
        };
        const n = await this._idbGet(Xmo, e), i = this._pendingThrottledStateSaves.get(e);
        return i !== void 0 ? {
            state: i.state,
            offsetKey: i.offsetKey,
            savedAt: i.savedAt
        } : hMv(n);
    }
    async _readStateFreshness(e) {
        const t = await this._idbGet(y1e.revisions, `${Zmo}${e}`);
        if (typeof t == "number" && Number.isFinite(t)) return {
            savedAt: t,
            offsetKey: void 0
        };
        if (typeof t == "object" && t !== null) {
            const { savedAt: n, offsetKey: i } = t;
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
    async getStateSavedAt(e) {
        return (await this._readStateFreshness(e)).savedAt;
    }
    async getPersistedOffsetKey(e) {
        return await this._writeQueue.whenClearSettled(), (await this._readStateFreshness(e)).offsetKey;
    }
    async flushPendingWrites() {
        for(let e = 0; e < 2 && (this._flushThrottledStateSaves(), await Promise.resolve(), await this._flushPendingWrites(), this._pendingThrottledStateSaves.size !== 0); e++);
    }
    savePendingKickoffPrompt(e, t) {
        this._enqueueWrite(eGt, e, JSON.stringify(t));
    }
    async loadPendingKickoffPrompt(e) {
        const t = await this._idbGet(eGt, e);
        if (t) try {
            const n = vJd.safeParse(JSON.parse(t));
            return n.success ? n.data : void 0;
        } catch  {
            return;
        }
    }
    deletePendingKickoffPrompt(e) {
        this._enqueueDelete(eGt, e);
    }
    async migratePendingKickoffPrompt(e, t) {
        if (e === t) return;
        const n = this._writeQueue.epoch, i = await this.loadPendingKickoffPrompt(e);
        !i || n !== this._writeQueue.epoch || (this._enqueueWrite(eGt, t, JSON.stringify(i), n), this._enqueueDelete(eGt, e, n));
    }
    savePendingCreationQueueState(e, t) {
        this._enqueueWrite(Vqi, e, JSON.stringify(t));
    }
    async loadPendingCreationQueueState(e) {
        const t = await this._idbGet(Vqi, e);
        if (t) try {
            const n = _Jd.safeParse(JSON.parse(t));
            return n.success ? {
                isCreating: n.data.isCreating,
                queueSnapshot: n.data.queueSnapshot.map(hJd),
                submitNowItems: n.data.submitNowItems.map(hJd)
            } : void 0;
        } catch  {
            return;
        }
    }
    deletePendingCreationQueueState(e) {
        this._enqueueDelete(Vqi, e);
    }
    saveSideChatSyncState(e, t) {
        this._enqueueWrite(W2n, e, JSON.stringify(t));
    }
    async loadSideChatSyncStates() {
        const e = await this._idbGetByPrefix(W2n, ""), t = Date.now(), n = [], i = [];
        for (const r of e)try {
            const s = bJd.safeParse(JSON.parse(r.value));
            if (!s.success || t - s.data.updatedAt > gJd) {
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
        for (const r of n.slice(G2n))i.push(r.key);
        for (const r of i)this._enqueueDelete(W2n, r);
        return new Map(n.slice(0, G2n).map(({ key: r, value: s })=>[
                r,
                s
            ]));
    }
    deleteSideChatSyncState(e) {
        this._enqueueDelete(W2n, e);
    }
    savePrState(e, t) {
        this._savePrStateIncremental(e, t);
    }
    _isPrStateWriteCurrent(e, t) {
        return t === this._writeQueue.epoch && e.isCurrent();
    }
    async _savePrStateIncremental(e, t) {
        const n = this._writeQueue.epoch, i = this._prStateWriteGuard.bump(e);
        try {
            const r = pJd(e), s = this._nextPrStateVersionId(), { diffs: o, ...a } = t, c = {
                ...a,
                diffCount: o.length
            };
            if (!this._isPrStateWriteCurrent(i, n)) return;
            this._enqueueWrite(NUe, mJd(e, s), c, n), await this._flushPendingWrites();
            for(let p = 0; p < o.length; p += Jmo){
                if (!this._isPrStateWriteCurrent(i, n)) return;
                const g = o.slice(p, p + Jmo);
                for(let f = 0; f < g.length; f++)this._enqueueWrite(NUe, gMv(e, s, p + f), g[f], n);
                await this._flushPendingWrites(), await new Promise((f)=>setTimeout(f, 0));
            }
            if (!this._isPrStateWriteCurrent(i, n) || (this._enqueueWrite(NUe, r, s, n), await this._flushPendingWrites(), !this._isPrStateWriteCurrent(i, n))) return;
            const l = await this._idbGetByPrefix(NUe, mMv(e));
            if (!this._isPrStateWriteCurrent(i, n)) return;
            const u = Gqi(e, s), h = l.map((p)=>p.key).filter((p)=>!p.startsWith(u));
            await this._idbDeleteMany(NUe, h);
        } catch  {}
    }
    async _loadChunkedPrState(e) {
        const t = await this._idbGet(NUe, pJd(e));
        if (!t) return;
        const n = await this._idbGet(NUe, mJd(e, t)), i = vMv(n);
        if (!i) return;
        const r = await this._idbGetByPrefix(NUe, fMv(e, t));
        if (r.length < i.diffCount) return;
        const s = [];
        for(let c = 0; c < i.diffCount; c++){
            const l = _Mv(r[c].value);
            if (!l) return;
            s.push(l);
        }
        const { diffCount: o, ...a } = i;
        return {
            ...a,
            diffs: s
        };
    }
    async loadPrState(e) {
        try {
            return await this._loadChunkedPrState(e);
        } catch  {
            return;
        }
    }
    dispose() {
        this._disposed = !0, super.dispose(), this._blobGetBatcher.dispose(), this._writeQueue.dispose(), this._prStateWriteGuard.clear(), this._discardThrottledStateSaves(), this._stateWriteGenerations.clear(), this._dbPromise?.then((e)=>e.close()).catch(()=>{}), this._dbPromise = void 0;
    }
}, mn(swt, wJd, 1);

}
