import { init_subagent_lifecycle_state_machine } from "./subagent-lifecycle-state-machine.js";
import { createIdleSubagentLifecycleState, isSubagentLifecycleBusy, transitionSubagentLifecycle } from "../../dist_exports.js";
var SubagentLifecycleManager;
export { SubagentLifecycleManager };
var __wakaru_init_subagent_lifecycle_store_initialized = false;
export function init_subagent_lifecycle_store() {
if (__wakaru_init_subagent_lifecycle_store_initialized) return;
__wakaru_init_subagent_lifecycle_store_initialized = true;
"use strict";
init_subagent_lifecycle_state_machine();
SubagentLifecycleManager = class {
    constructor(options2 = {}){
        this.options = options2;
        this.states = new Map();
        this.runCounterBySession = new Map();
        this.dispatchQueueBySession = new Map();
        this.dispatchInProgress = new Set();
        this.releaseRequestedBySession = new Set();
    }
    getState(sessionId) {
        return this.states.get(sessionId) ?? createIdleSubagentLifecycleState();
    }
    isBusy(sessionId) {
        return isSubagentLifecycleBusy(this.getState(sessionId));
    }
    startRun(sessionId, args) {
        const runId = this.nextRunId(sessionId);
        this.enqueueEvent(sessionId, {
            type: "startRun",
            runId,
            abort: args?.abort
        });
        return runId;
    }
    queueResume(sessionId, args) {
        this.enqueueEvent(sessionId, {
            type: "queueResume",
            queuedResume: args.queuedResume,
            targetRunId: args.targetRunId,
            mergeQueuedResume: args.mergeQueuedResume
        });
    }
    finishRun(sessionId, runId) {
        this.enqueueEvent(sessionId, {
            type: "runFinished",
            runId
        });
    }
    clearQueuedResume(sessionId) {
        this.enqueueEvent(sessionId, {
            type: "clearQueuedResume"
        });
    }
    abort(sessionId) {
        this.enqueueEvent(sessionId, {
            type: "abort"
        });
    }
    release(sessionId) {
        this.enqueueEvent(sessionId, {
            type: "release"
        });
    }
    nextRunId(sessionId) {
        const current = this.runCounterBySession.get(sessionId) ?? 0;
        const next = current + 1;
        this.runCounterBySession.set(sessionId, next);
        return next;
    }
    enqueueEvent(sessionId, event) {
        const queue = this.dispatchQueueBySession.get(sessionId) ?? [];
        queue.push(event);
        this.dispatchQueueBySession.set(sessionId, queue);
        this.drainEventQueue(sessionId);
    }
    drainEventQueue(sessionId) {
        if (this.dispatchInProgress.has(sessionId)) {
            return;
        }
        this.dispatchInProgress.add(sessionId);
        let firstError;
        try {
            const queue = this.dispatchQueueBySession.get(sessionId);
            if (!queue) {
                return;
            }
            while(queue.length > 0){
                const event = queue.shift();
                if (!event) {
                    continue;
                }
                try {
                    this.processEvent(sessionId, event);
                } catch (error3) {
                    firstError ??= error3;
                }
            }
        } finally{
            this.dispatchQueueBySession.delete(sessionId);
            this.dispatchInProgress.delete(sessionId);
        }
        if (firstError) {
            throw firstError;
        }
    }
    processEvent(sessionId, event) {
        const previousState = this.getState(sessionId);
        const { nextState, effects } = transitionSubagentLifecycle(previousState, event);
        this.states.set(sessionId, nextState);
        this.options.onStateChange?.({
            sessionId,
            previousState,
            nextState
        });
        for (const effect of effects){
            switch(effect.type){
                case "abortActiveRun":
                    {
                        effect.abort?.();
                        break;
                    }
                case "startQueuedRun":
                    {
                        this.options.onQueuedRunReady?.({
                            sessionId,
                            sourceRunId: effect.sourceRunId,
                            queuedResume: effect.queuedResume
                        });
                        break;
                    }
                default:
                    {
                        const exhaustiveCheck = effect;
                        throw new Error(`Unhandled lifecycle manager effect: ${String(exhaustiveCheck)}`);
                    }
            }
        }
        const finalState = this.getState(sessionId);
        if (event.type === "release" && finalState.status !== "idle") {
            this.releaseRequestedBySession.add(sessionId);
        }
        if (finalState.status === "idle" && (event.type === "release" || this.releaseRequestedBySession.has(sessionId))) {
            this.states.delete(sessionId);
            this.runCounterBySession.delete(sessionId);
            this.releaseRequestedBySession.delete(sessionId);
        }
    }
};

}
