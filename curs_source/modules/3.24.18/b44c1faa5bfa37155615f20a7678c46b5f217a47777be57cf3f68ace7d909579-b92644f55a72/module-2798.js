"use strict";
require.d(exports, {
    y: ()=>n
});
class n {
    constructor(e, t){
        this.runId = e, this.entries = new Map, this.order = [], this.runEnded = !1, this.generateDeliveryBatchId = t?.generateDeliveryBatchId ?? (()=>crypto.randomUUID()), this.now = t?.now ?? (()=>Date.now()), this.onStateChange = t?.onStateChange;
    }
    admit(e) {
        if ("" === e.injectionId) return {
            kind: "rejected",
            reason: "empty_injection_id"
        };
        const t = this.entries.get(e.injectionId);
        return void 0 !== t ? {
            kind: "duplicate",
            state: t.state
        } : e.expectedRunId !== this.runId ? {
            kind: "rejected",
            reason: "run_mismatch"
        } : this.runEnded ? "user" === e.source ? (this.record(e, {
            kind: "queued_for_next_turn"
        }), {
            kind: "queued_for_next_turn"
        }) : (this.record(e, {
            kind: "rejected",
            reason: "run_ended"
        }), {
            kind: "rejected",
            reason: "run_ended"
        }) : (this.record(e, {
            kind: "queued"
        }), {
            kind: "queued"
        });
    }
    cancel(e) {
        const t = this.entries.get(e);
        return void 0 !== t && "queued" === t.state.kind && void 0 === t.claimedBatchId && (this.transition(t, {
            kind: "cancelled"
        }), !0);
    }
    claimBatch(e) {
        for (const t of this.entries.values())if (t.source === e && void 0 !== t.claimedBatchId) return;
        const t = this.order.map((e)=>this.entries.get(e)).filter((t)=>void 0 !== t && t.source === e && "queued" === t.state.kind && void 0 === t.claimedBatchId);
        if (0 === t.length) return;
        const r = this.generateDeliveryBatchId();
        for (const e of t)e.claimedBatchId = r;
        return {
            deliveryBatchId: r,
            source: e,
            injections: t.map((e)=>({
                    injectionId: e.injectionId,
                    payload: e.payload
                }))
        };
    }
    ackDelivered(e, t) {
        const r = this.now();
        for (const n of this.entries.values())n.claimedBatchId === e && (n.claimedBatchId = void 0, this.transition(n, {
            kind: "delivered",
            step: t,
            deliveryBatchId: e,
            deliveredAtMs: r
        }));
    }
    ackDeliveredInjection(e, t) {
        const r = this.entries.get(e);
        if (void 0 === r || void 0 === r.claimedBatchId) return;
        const n = r.claimedBatchId;
        r.claimedBatchId = void 0, this.transition(r, {
            kind: "delivered",
            step: t,
            deliveryBatchId: n,
            deliveredAtMs: this.now()
        });
    }
    failDeliveredInjection(e) {
        const t = this.entries.get(e);
        return void 0 !== t && "delivered" === t.state.kind && ("user" === t.source ? this.transition(t, {
            kind: "queued_for_next_turn"
        }) : this.transition(t, {
            kind: "rejected",
            reason: "run_ended"
        }), !0);
    }
    retagQueuedUserInjectionsToNextTurn() {
        const e = [];
        for (const t of this.order){
            const r = this.entries.get(t);
            void 0 !== r && "user" === r.source && "queued" === r.state.kind && void 0 === r.claimedBatchId && (this.transition(r, {
                kind: "queued_for_next_turn"
            }), e.push(r.injectionId));
        }
        return e;
    }
    endRun(e) {
        const t = e?.retagClaimed ?? !0;
        this.runEnded = !0;
        for (const e of this.entries.values())"queued" === e.state.kind && (t || void 0 === e.claimedBatchId) && (e.claimedBatchId = void 0, "user" === e.source ? this.transition(e, {
            kind: "queued_for_next_turn"
        }) : this.transition(e, {
            kind: "rejected",
            reason: "run_ended"
        }));
    }
    getState(e) {
        return this.entries.get(e)?.state;
    }
    oldestPendingAdmittedAtMs(e) {
        for (const t of this.order){
            const r = this.entries.get(t);
            if (void 0 !== r && r.source === e && "queued" === r.state.kind && void 0 === r.claimedBatchId && void 0 !== r.admittedAtMs) return r.admittedAtMs;
        }
    }
    pendingCount(e) {
        let t = 0;
        for (const r of this.entries.values())"queued" !== r.state.kind || void 0 !== r.claimedBatchId || void 0 !== e && r.source !== e || t++;
        return t;
    }
    record(e, t) {
        const r = {
            injectionId: e.injectionId,
            source: e.source,
            payload: e.payload,
            state: t,
            ..."queued" === t.kind ? {
                admittedAtMs: this.now()
            } : {}
        };
        this.entries.set(e.injectionId, r), this.order.push(e.injectionId), this.onStateChange?.(e.injectionId, t);
    }
    transition(e, t) {
        e.state = t, this.onStateChange?.(e.injectionId, t);
    }
}
