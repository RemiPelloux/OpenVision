var ContextInjectionLedger;
export { ContextInjectionLedger };
var __wakaru_init_context_injection_initialized = false;
export function init_context_injection() {
if (__wakaru_init_context_injection_initialized) return;
__wakaru_init_context_injection_initialized = true;
"use strict";
ContextInjectionLedger = class {
    constructor(runId, options2){
        this.runId = runId;
        this.entries = new Map();
        this.order = [];
        this.runEnded = false;
        this.generateDeliveryBatchId = options2?.generateDeliveryBatchId ?? (()=>crypto.randomUUID());
        this.now = options2?.now ?? (()=>Date.now());
        this.onStateChange = options2?.onStateChange;
    }
    admit(request3) {
        if (request3.injectionId === "") {
            return {
                kind: "rejected",
                reason: "empty_injection_id"
            };
        }
        const existing = this.entries.get(request3.injectionId);
        if (existing !== void 0) {
            return {
                kind: "duplicate",
                state: existing.state
            };
        }
        if (request3.expectedRunId !== this.runId) {
            return {
                kind: "rejected",
                reason: "run_mismatch"
            };
        }
        if (this.runEnded) {
            if (request3.source === "user") {
                this.record(request3, {
                    kind: "queued_for_next_turn"
                });
                return {
                    kind: "queued_for_next_turn"
                };
            }
            this.record(request3, {
                kind: "rejected",
                reason: "run_ended"
            });
            return {
                kind: "rejected",
                reason: "run_ended"
            };
        }
        this.record(request3, {
            kind: "queued"
        });
        return {
            kind: "queued"
        };
    }
    cancel(injectionId) {
        const entry = this.entries.get(injectionId);
        if (entry === void 0 || entry.state.kind !== "queued" || entry.claimedBatchId !== void 0) {
            return false;
        }
        this.transition(entry, {
            kind: "cancelled"
        });
        return true;
    }
    claimBatch(source) {
        for (const entry of this.entries.values()){
            if (entry.source === source && entry.claimedBatchId !== void 0) {
                return void 0;
            }
        }
        const claimable = this.order.map((id)=>this.entries.get(id)).filter((entry)=>entry !== void 0 && entry.source === source && entry.state.kind === "queued" && entry.claimedBatchId === void 0);
        if (claimable.length === 0) {
            return void 0;
        }
        const deliveryBatchId = this.generateDeliveryBatchId();
        for (const entry of claimable){
            entry.claimedBatchId = deliveryBatchId;
        }
        return {
            deliveryBatchId,
            source,
            injections: claimable.map((entry)=>({
                    injectionId: entry.injectionId,
                    payload: entry.payload
                }))
        };
    }
    ackDelivered(deliveryBatchId, step) {
        const deliveredAtMs = this.now();
        for (const entry of this.entries.values()){
            if (entry.claimedBatchId === deliveryBatchId) {
                entry.claimedBatchId = void 0;
                this.transition(entry, {
                    kind: "delivered",
                    step,
                    deliveryBatchId,
                    deliveredAtMs
                });
            }
        }
    }
    ackDeliveredInjection(injectionId, step) {
        const entry = this.entries.get(injectionId);
        if (entry === void 0 || entry.claimedBatchId === void 0) {
            return;
        }
        const deliveryBatchId = entry.claimedBatchId;
        entry.claimedBatchId = void 0;
        this.transition(entry, {
            kind: "delivered",
            step,
            deliveryBatchId,
            deliveredAtMs: this.now()
        });
    }
    failDeliveredInjection(injectionId) {
        const entry = this.entries.get(injectionId);
        if (entry === void 0 || entry.state.kind !== "delivered") {
            return false;
        }
        if (entry.source === "user") {
            this.transition(entry, {
                kind: "queued_for_next_turn"
            });
        } else {
            this.transition(entry, {
                kind: "rejected",
                reason: "run_ended"
            });
        }
        return true;
    }
    retagQueuedUserInjectionsToNextTurn() {
        const converted = [];
        for (const id of this.order){
            const entry = this.entries.get(id);
            if (entry === void 0 || entry.source !== "user" || entry.state.kind !== "queued" || entry.claimedBatchId !== void 0) {
                continue;
            }
            this.transition(entry, {
                kind: "queued_for_next_turn"
            });
            converted.push(entry.injectionId);
        }
        return converted;
    }
    endRun(options2) {
        const retagClaimed = options2?.retagClaimed ?? true;
        this.runEnded = true;
        for (const entry of this.entries.values()){
            if (entry.state.kind !== "queued") {
                continue;
            }
            if (!retagClaimed && entry.claimedBatchId !== void 0) {
                continue;
            }
            entry.claimedBatchId = void 0;
            if (entry.source === "user") {
                this.transition(entry, {
                    kind: "queued_for_next_turn"
                });
            } else {
                this.transition(entry, {
                    kind: "rejected",
                    reason: "run_ended"
                });
            }
        }
    }
    getState(injectionId) {
        return this.entries.get(injectionId)?.state;
    }
    oldestPendingAdmittedAtMs(source) {
        for (const id of this.order){
            const entry = this.entries.get(id);
            if (entry !== void 0 && entry.source === source && entry.state.kind === "queued" && entry.claimedBatchId === void 0 && entry.admittedAtMs !== void 0) {
                return entry.admittedAtMs;
            }
        }
        return void 0;
    }
    pendingCount(source) {
        let count2 = 0;
        for (const entry of this.entries.values()){
            if (entry.state.kind === "queued" && entry.claimedBatchId === void 0 && (source === void 0 || entry.source === source)) {
                count2++;
            }
        }
        return count2;
    }
    record(request3, state) {
        const entry = {
            injectionId: request3.injectionId,
            source: request3.source,
            payload: request3.payload,
            state,
            ...state.kind === "queued" ? {
                admittedAtMs: this.now()
            } : {}
        };
        this.entries.set(request3.injectionId, entry);
        this.order.push(request3.injectionId);
        this.onStateChange?.(request3.injectionId, state);
    }
    transition(entry, state) {
        entry.state = state;
        this.onStateChange?.(entry.injectionId, state);
    }
};

}
