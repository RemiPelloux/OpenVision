import { Ei, Ya } from "./Iwo.js";
import { Qav } from "./agent-migration-kind-classifier.js";
import { Kf, ca } from "./reactive.js";
import { E } from "./tslib.es6.js";
var elv;
export { elv };
var __wakaru_aIs_initialized = false;
export function aIs() {
if (__wakaru_aIs_initialized) return;
__wakaru_aIs_initialized = true;
"use strict";
E(), Ei(), Kf(), Qav(), elv = class {
    constructor(t){
        this._strategies = t;
    }
    run(t, e, n) {
        const i = new ca({
            phase: "preflight"
        });
        return this._execute(t, i, e, n), i;
    }
    async _execute(t, e, n, i) {
        try {
            const r = this._selectStrategy(t), s = {
                reportPhase (l, c) {
                    e.set({
                        phase: l,
                        message: c
                    });
                }
            };
            this._safeCall(()=>n?.onMigrationStarted?.());
            const o = await r.execute(t, s, i), a = o.agentReference.header.id;
            this._safeCall(()=>n?.onTargetAgentCreatedBeforeSourceFinalize?.({
                    sourceAgentId: t.sourceAgentId,
                    createdAgentId: a
                })), o.finalizeBeforeVisibleHandoff && await o.finalizeBeforeVisibleHandoff(), o.publishTarget?.(), this._safeCall(()=>n?.onHandoffRequested?.({
                    sourceAgentId: t.sourceAgentId,
                    createdAgentId: a
                }));
            try {
                this._safeCall(()=>n?.onTargetAgentCreated?.(a));
            } finally{
                o.agentReference.dispose();
            }
            if (e.set({
                phase: "complete",
                agentId: a
            }), this._safeCall(()=>n?.onMigrationCompleted?.(a)), o.afterComplete) try {
                await o.afterComplete();
            } catch (l) {
                const c = l instanceof Error ? l : new Error(String(l));
                this._safeCall(()=>n?.onPostCompletionCleanupFailed?.(c));
            }
        } catch (r) {
            if (Ya(r)) {
                e.set({
                    phase: "idle"
                }), this._safeCall(()=>n?.onMigrationCancelled?.());
                return;
            }
            const s = r instanceof Error ? r : new Error(String(r));
            e.set({
                phase: "error",
                message: s.message
            }), this._safeCall(()=>n?.onMigrationFailed?.(s));
        }
    }
    _selectStrategy(t) {
        let e;
        const n = [];
        for (const i of this._strategies){
            let r;
            try {
                r = i.canHandle(t);
            } catch (s) {
                n.push({
                    id: i.id,
                    error: s
                });
                continue;
            }
            if (r) {
                if (e) throw new Error(`Ambiguous migration: strategies "${e.id}" and "${i.id}" both handle ${t.sourceKind} \u2192 ${t.targetKind}`);
                e = i;
            }
        }
        if (!e) {
            const i = n.length > 0 ? ` (${n.length} strategy canHandle threw: ${n.map((r)=>`${r.id}: ${r.error}`).join(", ")})` : "";
            throw new Error(`No migration strategy for ${t.sourceKind} \u2192 ${t.targetKind}${i}`);
        }
        return e;
    }
    _safeCall(t) {
        try {
            t();
        } catch  {}
    }
};

}
