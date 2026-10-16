import { EPd, QCv, ZCv } from "./A3u.js";
import { xPd } from "./subagent-lifecycle-state-machine.ts";
import { x } from "./tslib.es6.js";
var IPd;
export { IPd };
var __wakaru_n0v_initialized = false;
export function n0v() {
if (__wakaru_n0v_initialized) return;
__wakaru_n0v_initialized = true;
"use strict";
x(), xPd(), IPd = class {
    constructor(e = {}){
        this.options = e, this.states = new Map, this.runCounterBySession = new Map, this.dispatchQueueBySession = new Map, this.dispatchInProgress = new Set, this.releaseRequestedBySession = new Set;
    }
    getState(e) {
        return this.states.get(e) ?? EPd();
    }
    isBusy(e) {
        return ZCv(this.getState(e));
    }
    startRun(e, t) {
        const n = this.nextRunId(e);
        return this.enqueueEvent(e, {
            type: "startRun",
            runId: n,
            abort: t?.abort
        }), n;
    }
    queueResume(e, t) {
        this.enqueueEvent(e, {
            type: "queueResume",
            queuedResume: t.queuedResume,
            targetRunId: t.targetRunId,
            mergeQueuedResume: t.mergeQueuedResume
        });
    }
    finishRun(e, t) {
        this.enqueueEvent(e, {
            type: "runFinished",
            runId: t
        });
    }
    clearQueuedResume(e) {
        this.enqueueEvent(e, {
            type: "clearQueuedResume"
        });
    }
    abort(e) {
        this.enqueueEvent(e, {
            type: "abort"
        });
    }
    release(e) {
        this.enqueueEvent(e, {
            type: "release"
        });
    }
    nextRunId(e) {
        const n = (this.runCounterBySession.get(e) ?? 0) + 1;
        return this.runCounterBySession.set(e, n), n;
    }
    enqueueEvent(e, t) {
        const n = this.dispatchQueueBySession.get(e) ?? [];
        n.push(t), this.dispatchQueueBySession.set(e, n), this.drainEventQueue(e);
    }
    drainEventQueue(e) {
        if (this.dispatchInProgress.has(e)) return;
        this.dispatchInProgress.add(e);
        let t;
        try {
            const n = this.dispatchQueueBySession.get(e);
            if (!n) return;
            for(; n.length > 0;){
                const i = n.shift();
                if (i) try {
                    this.processEvent(e, i);
                } catch (r) {
                    t ??= r;
                }
            }
        } finally{
            this.dispatchQueueBySession.delete(e), this.dispatchInProgress.delete(e);
        }
        if (t) throw t;
    }
    processEvent(e, t) {
        const n = this.getState(e), { nextState: i, effects: r } = QCv(n, t);
        this.states.set(e, i), this.options.onStateChange?.({
            sessionId: e,
            previousState: n,
            nextState: i
        });
        for (const o of r)switch(o.type){
            case "abortActiveRun":
                {
                    o.abort?.();
                    break;
                }
            case "startQueuedRun":
                {
                    this.options.onQueuedRunReady?.({
                        sessionId: e,
                        sourceRunId: o.sourceRunId,
                        queuedResume: o.queuedResume
                    });
                    break;
                }
            default:
                {
                    const a = o;
                    throw new Error(`Unhandled lifecycle manager effect: ${String(a)}`);
                }
        }
        const s = this.getState(e);
        t.type === "release" && s.status !== "idle" && this.releaseRequestedBySession.add(e), s.status === "idle" && (t.type === "release" || this.releaseRequestedBySession.has(e)) && (this.states.delete(e), this.runCounterBySession.delete(e), this.releaseRequestedBySession.delete(e));
    }
};

}
