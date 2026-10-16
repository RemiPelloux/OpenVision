import { Ec, Pn, Qe, Vn, st } from "./Iwo.js";
import { ZE, qn, xI } from "./async.js";
import { pr } from "./code_3.js";
import { Us } from "./connect-error.js";
import { dp } from "./connect.js";
import { Hn } from "./dom_2.js";
import { pUi } from "./grok-bot-transcript-entry.js";
import { Cps, rSl, xps } from "./grok_bot_pb.js";
import { C9s, KI_, SI_, YI_, gdT, kI_, mdT, yI_ } from "./mE_.js";
import { E } from "./tslib.es6.js";
import { Hu } from "./utils_pb.js";
import { $t, Bs } from "./window.js";
import { li } from "./ze.js";
var Fwc, XI_, ZI_, QI_, JI_, ex_, tx_, nx_, ix_, L9s, rx_, sx_, ox_, ax_, Bwc;
export { Bwc, Fwc, JI_, L9s, QI_, XI_, ZI_, ax_, ex_, ix_, nx_, ox_, rx_, sx_, tx_ };
var __wakaru_Uwc_initialized = false;
export function Uwc() {
if (__wakaru_Uwc_initialized) return;
__wakaru_Uwc_initialized = true;
"use strict";
E(), dp(), xps(), Hu(), Hn(), Bs(), qn(), Qe(), pUi(), Fwc = 500, XI_ = 3e3, ZI_ = 1e3, QI_ = 6e4, JI_ = 5e3, ex_ = 5e3, tx_ = 6e4, nx_ = 1e3, ix_ = 500, L9s = 5, rx_ = 2e3, sx_ = 3e4, ox_ = 8, ax_ = "", Bwc = class extends st {
    constructor(t){
        super(), this.phase = "connecting", this.generation = 0, this.afterUpdatedSeq = 0, this.liveRows = new Map, this.started = !1, this.failures = 0, this.readGeneration = 0, this.bodyFetchScope = new AbortController, this.currentStream = this._register(new Vn), this.pendingWait = this._register(new Vn), this.stallTimer = this._register(new ZE), this.emptyReplayTimer = this._register(new ZE), this.bodyRetryTimer = this._register(new ZE), this.bodyFetches = new xI(ox_), this.pendingBodies = new Map, this.agentId = t.agentId, this.transport = t.transport, this.dispatch = t.dispatch, this.log = t.log, this.now = t.now ?? (()=>Date.now()), this.random = t.random ?? Math.random, this.onInitialReplay = t.onInitialReplay;
    }
    settleInitialReplay() {
        const t = this.onInitialReplay;
        this.onInitialReplay = void 0, t?.();
    }
    start() {
        this.started || this._store.isDisposed || (this.started = !0, this._register(li($t, "online", ()=>this.onNetworkReturn())), this.runLoop());
    }
    dispose() {
        this.fenceReads(), this.pendingBodies.clear(), this.setPhase("disposed"), this.settleInitialReplay(), super.dispose();
    }
    fenceReads() {
        this.readGeneration += 1, this.bodyFetchScope.abort(), this.bodyFetchScope = new AbortController;
    }
    setPhase(t, e) {
        this.phase !== t && (this.phase = t, this.dispatch(e === void 0 ? {
            type: "phase",
            phase: t
        } : {
            type: "phase",
            phase: t,
            refusalMessage: e
        }), (t === "live" || t === "refused") && this.settleInitialReplay());
    }
    async runLoop() {
        for(; !this._store.isDisposed;){
            const t = await this.runStream();
            if (this._store.isDisposed || t === "refused") return;
            if (t === "clean") this.failures = 0, await this.wait(Fwc + this.random() * (XI_ - Fwc));
            else {
                this.failures += 1, this.setPhase("backoff");
                const e = mdT(this.failures, t === "unreachable" ? JI_ : QI_);
                this.log(`stream dropped (attempt ${this.failures}); retrying in ${e}ms`), await this.wait(e) === "interrupted" && (this.failures = 0);
            }
        }
    }
    wait(t) {
        return new Promise((e)=>{
            let n = "interrupted";
            const i = Ec(()=>{
                n = "elapsed", this.pendingWait.clear();
            }, t);
            this.pendingWait.value = Pn(()=>{
                i.dispose(), e(n);
            });
        });
    }
    onNetworkReturn() {
        this.failures = 0, this.pendingWait.clear(), this.currentStream.clear();
    }
    reconnectNow() {
        this.phase === "backoff" && this.pendingWait.clear();
    }
    watchRequest() {
        let t = this.afterUpdatedSeq;
        for (const e of this.pendingBodies.values())t = Math.min(t, e.updatedSeq - 1);
        return new rSl({
            cursors: [
                {
                    agentId: this.agentId,
                    generation: this.generation,
                    afterUpdatedSeq: BigInt(Math.max(0, t))
                }
            ],
            includeUnlistedAgents: !1
        });
    }
    async runStream() {
        const t = new AbortController;
        this.currentStream.value = Pn(()=>t.abort());
        const e = t.signal;
        this.phase !== "backoff" && this.setPhase("connecting");
        let n, i = !1;
        const r = ()=>{
            this._store.isDisposed || this.stallTimer.cancelAndSet(()=>{
                i = !0, t.abort();
            }, tx_);
        };
        r();
        try {
            for await (const s of this.transport.watch(this.watchRequest(), e)){
                if (this.stallTimer.cancel(), e.aborted || this._store.isDisposed) break;
                const o = this.now();
                s.frame.case === "connected" && (n = o);
                const a = s.frame.case !== "connected" && n !== void 0 && o - n >= ex_;
                if (await this.handleFrame(s, e), this._store.isDisposed) break;
                a && (this.failures = 0), r();
            }
        } catch (s) {
            if (this._store.isDisposed) return "clean";
            if (n === void 0 && s instanceof Us && s.code === pr.Unauthenticated) return this.setPhase("refused", s.rawMessage), this.log(`watch refused: ${s.rawMessage}`), "refused";
            if (e.aborted && !i) return "clean";
            if (!i) return this.log(`stream failed: ${KI_(s)}`), n === void 0 && YI_(s) ? "unreachable" : "failed";
        } finally{
            this.stallTimer.cancel(), this.emptyReplayTimer.cancel();
        }
        return i ? (this.log("stream went silent; no frame or heartbeat before the stall watchdog fired"), "failed") : "clean";
    }
    async handleFrame(t, e) {
        switch(t.frame.case){
            case "connected":
                this.log(`connected; the server closes in ${t.frame.value.absoluteLifetimeMs}ms`), this.setPhase("connecting"), this.emptyReplayTimer.cancelAndSet(()=>{
                    this.phase === "connecting" && this.setPhase("live");
                }, nx_);
                return;
            case "rows":
                this.applyRows(t.frame.value);
                return;
            case "cleared":
                {
                    const { agentId: n, sessionId: i, newGeneration: r } = t.frame.value;
                    this.isMainCursor({
                        agentId: n,
                        sessionId: i
                    }) && this.applyCleared(r);
                    return;
                }
            case "cursorTooOld":
                {
                    const { agentId: n, sessionId: i, generation: r } = t.frame.value;
                    this.isMainCursor({
                        agentId: n,
                        sessionId: i
                    }) && (this.emptyReplayTimer.cancel(), await this.rehydrate(r, e));
                    return;
                }
            case "heartbeat":
                (this.phase === "connecting" || this.phase === "replaying") && this.setPhase("live");
                return;
            case "agentState":
                {
                    const n = SI_(this.liveRows, t.frame.value, this.agentId);
                    n !== void 0 && (this.liveRows = n, this.dispatch({
                        type: "live-state",
                        live: kI_(n, this.now())
                    }));
                    return;
                }
            case "turnFailed":
                this.isMainCursor(t.frame.value) && this.dispatch({
                    type: "turn-failed",
                    failure: yI_(t.frame.value)
                });
                return;
            case "computerActions":
            case "agentStateChanged":
            case "rosterChanged":
            case "boxState":
                return;
            default:
                return;
        }
    }
    isMainCursor({ agentId: t, sessionId: e }) {
        return t === this.agentId && e === ax_;
    }
    adoptGeneration(t, e) {
        return t === 0 || t === this.generation ? !0 : this.generation === 0 ? (this.generation = t, !0) : t < this.generation && !e ? !1 : (this.resetRows(t), !0);
    }
    resetRows(t) {
        this.fenceReads(), this.generation = t, this.afterUpdatedSeq = 0, this.pendingBodies.clear(), this.bodyRetryTimer.cancel(), this.dispatch({
            type: "reset",
            generation: t
        });
    }
    applyRows(t) {
        if (!this.isMainCursor(t) || (this.emptyReplayTimer.cancel(), !this.adoptGeneration(t.generation, !1))) return;
        this.setPhase(t.replay ? "replaying" : "live");
        let e = this.afterUpdatedSeq;
        const n = [];
        for (const r of t.entries){
            const s = C9s(r);
            n.push(s), this.noteBody(s), e = Math.max(e, s.updatedSeq);
        }
        const i = [];
        for (const r of t.deletes){
            const s = {
                seq: Number(r.seq),
                updatedSeq: Number(r.updatedSeq)
            };
            i.push(s);
            const o = this.pendingBodies.get(s.seq);
            o !== void 0 && o.updatedSeq <= s.updatedSeq && this.pendingBodies.delete(s.seq), e = Math.max(e, s.updatedSeq);
        }
        this.afterUpdatedSeq = e, (n.length > 0 || i.length > 0 || t.generation !== 0) && this.dispatch({
            type: "rows",
            generation: this.generation,
            entries: n,
            deletes: i
        }), this.settleInitialReplay();
    }
    noteBody(t) {
        if (t.entry.kind === "omitted") {
            this.queueBodyFetch({
                seq: t.seq,
                updatedSeq: t.updatedSeq
            });
            return;
        }
        const e = this.pendingBodies.get(t.seq);
        e !== void 0 && e.updatedSeq <= t.updatedSeq && this.pendingBodies.delete(t.seq);
    }
    applyCleared(t) {
        this.adoptGeneration(t, !0);
    }
    async rehydrate(t, e) {
        this.adoptGeneration(t, !0), this.fenceReads();
        const n = this.readGeneration;
        this.setPhase("rehydrating");
        const i = await this.transport.list(new Cps({
            agentId: this.agentId,
            generation: this.generation,
            limit: ix_
        }), e);
        if (this._store.isDisposed || n !== this.readGeneration) return;
        this.pendingBodies.clear(), this.bodyRetryTimer.cancel(), i.generation !== 0 && (this.generation = i.generation);
        let r = 0;
        const s = [];
        for (const o of i.entries){
            const a = C9s(o);
            s.push(a), this.noteBody(a), r = Math.max(r, a.updatedSeq);
        }
        this.afterUpdatedSeq = r, this.dispatch({
            type: "rehydrated",
            generation: this.generation,
            rows: s
        }), this.setPhase("live");
    }
    queueBodyFetch({ seq: t, updatedSeq: e }) {
        const n = this.pendingBodies.get(t);
        if (n !== void 0 && n.updatedSeq >= e) return;
        const i = {
            seq: t,
            updatedSeq: e,
            attempts: 0,
            inFlight: !1
        };
        this.pendingBodies.set(t, i), this.launchBodyFetch(i);
    }
    launchBodyFetch(t) {
        t.inFlight = !0, t.attempts += 1;
        const e = this.readGeneration, n = this.generation, i = this.bodyFetchScope.signal;
        this.bodyFetches.queue(async ()=>{
            let r;
            try {
                const o = (await this.transport.list(new Cps({
                    agentId: this.agentId,
                    generation: n,
                    beforeSeq: BigInt(t.seq + 1),
                    limit: 1
                }), i)).entries.find((a)=>Number(a.seq) === t.seq);
                r = o === void 0 ? {
                    kind: "missing"
                } : {
                    kind: "found",
                    row: o
                };
            } catch (s) {
                r = {
                    kind: "failed",
                    error: s
                };
            }
            this.settleBodyFetch(t, e, r);
        });
    }
    settleBodyFetch(t, e, n) {
        if (this._store.isDisposed || this.pendingBodies.get(t.seq) !== t) return;
        t.inFlight = !1;
        const i = e === this.readGeneration;
        if (i && n.kind === "found") {
            this.pendingBodies.delete(t.seq);
            const r = C9s(n.row);
            this.dispatch({
                type: "body",
                row: r.entry.kind === "omitted" ? {
                    ...r,
                    entry: {
                        kind: "unknown",
                        entryKind: n.row.entryKind
                    }
                } : r
            });
            return;
        }
        if (i && n.kind === "failed" && this.log(`body re-list for seq ${t.seq} failed: ${KI_(n.error)}`), t.attempts >= L9s) {
            this.pendingBodies.delete(t.seq), this.log(`body for seq ${t.seq} unresolved after ${L9s} attempts`);
            return;
        }
        this.bodyRetryTimer.setIfNotSet(()=>this.retryPendingBodies(), gdT(t.attempts));
    }
    retryPendingBodies() {
        for (const t of this.pendingBodies.values())!t.inFlight && t.attempts < L9s && this.launchBodyFetch(t);
    }
};

}
