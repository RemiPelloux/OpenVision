import { InMemoryBackgroundWorkRegistry } from "../../../agent-exec/dist/background-work-registry.js";
import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
var logger117, HeadlessBackgroundWorkRegistry;
export { HeadlessBackgroundWorkRegistry, logger117 };
var __wakaru_init_background_work_registry2_initialized = false;
export function init_background_work_registry2() {
if (__wakaru_init_background_work_registry2_initialized) return;
__wakaru_init_background_work_registry2_initialized = true;
"use strict";
init_dist8();
init_dist();
logger117 = createLogger("agent-host:background-work-registry");
HeadlessBackgroundWorkRegistry = class extends InMemoryBackgroundWorkRegistry {
    constructor(ctx){
        super();
        this.ctx = ctx;
        this.wakeupTurnByTaskId = new Map();
    }
    setOnCompletionEnqueued(callback) {
        this.completionCallback = callback;
    }
    setOnWorkChanged(callback) {
        this.workChangedCallback = callback;
    }
    rememberWakeupTurn(args) {
        this.wakeupTurnByTaskId.set(args.taskId, args.turnId);
    }
    findWakeupTurn(taskId) {
        return this.wakeupTurnByTaskId.get(taskId);
    }
    findExactWakeupTurn(taskIds) {
        if (taskIds.length === 0) {
            return void 0;
        }
        const uniqueTaskIds = [
            ...new Set(taskIds)
        ];
        const mappedTurnIds = uniqueTaskIds.map((taskId)=>this.wakeupTurnByTaskId.get(taskId));
        const turnId = mappedTurnIds[0];
        if (turnId === void 0 || mappedTurnIds.some((mappedTurnId)=>mappedTurnId !== turnId)) {
            return void 0;
        }
        let rememberedForTurn = 0;
        for (const mappedTurnId of this.wakeupTurnByTaskId.values()){
            if (mappedTurnId === turnId) {
                rememberedForTurn += 1;
            }
        }
        return rememberedForTurn === uniqueTaskIds.length ? turnId : void 0;
    }
    forgetWakeupTurnsForTurn(turnId) {
        for (const [taskId, mappedTurnId] of this.wakeupTurnByTaskId){
            if (mappedTurnId === turnId) {
                this.wakeupTurnByTaskId.delete(taskId);
            }
        }
    }
    upsertWork(...args) {
        this.wakeupTurnByTaskId.delete(args[0].id);
        super.upsertWork(...args);
        this.workChangedCallback?.();
    }
    clearWork(...args) {
        const cleared = super.clearWork(...args);
        if (cleared) {
            this.workChangedCallback?.();
        }
        return cleared;
    }
    abortWork(...args) {
        const aborted2 = super.abortWork(...args);
        if (aborted2) {
            this.workChangedCallback?.();
        }
        return aborted2;
    }
    abortAllWork(...args) {
        const abortedCount = super.abortAllWork(...args);
        if (abortedCount > 0) {
            this.workChangedCallback?.();
        }
        return abortedCount;
    }
    enqueue(...args) {
        const revisionBeforeEnqueue = this.getWakeupRevision();
        super.enqueue(...args);
        const enqueued = this.getWakeupRevision() > revisionBeforeEnqueue;
        if (enqueued) {
            this.completionCallback?.();
        }
        this.logEnqueueOutcome(args[0], enqueued);
    }
    logEnqueueOutcome(wakeup, enqueued) {
        if (this.ctx === void 0) {
            return;
        }
        logger117.info(this.ctx, "agent.background_wakeup_enqueue", {
            event: "agent.background_wakeup_enqueue",
            outcome: enqueued ? "enqueued" : "dropped",
            wakeup_id: wakeup.id,
            conversation_id: wakeup.conversationId,
            source: wakeup.source,
            task_id: wakeup.payload.taskId,
            work_kind: wakeup.payload.kind,
            completion_status: wakeup.payload.status
        });
    }
};

}
