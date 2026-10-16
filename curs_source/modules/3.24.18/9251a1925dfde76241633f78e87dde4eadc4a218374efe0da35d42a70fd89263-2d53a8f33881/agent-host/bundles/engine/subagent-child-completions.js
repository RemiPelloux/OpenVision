import { completionFinalMessage } from "../../../tree_chunk_napi_exports.js";
var SubagentChildCompletionLedger;
export { SubagentChildCompletionLedger };
var __wakaru_init_subagent_child_completions_initialized = false;
export function init_subagent_child_completions() {
if (__wakaru_init_subagent_child_completions_initialized) return;
__wakaru_init_subagent_child_completions_initialized = true;
"use strict";
SubagentChildCompletionLedger = class {
    constructor(options2){
        this.options = options2;
        this.childParentIds = new Map();
        this.parentChildIds = new Map();
        this.queuedChildCompletions = new Map();
        this.childCompletionWaiters = new Map();
        this.pendingCleanups = new Set();
    }
    registerParentChildLink(agentId, parentConversationId) {
        const parentId = parentConversationId?.trim();
        if (!parentId || parentId === agentId) {
            return;
        }
        if (!this.options.isTrackedSpawner(parentId)) {
            return;
        }
        const previousParentId = this.childParentIds.get(agentId);
        if (previousParentId === parentId) {
            return;
        }
        if (previousParentId) {
            this.parentChildIds.get(previousParentId)?.delete(agentId);
            if ((this.parentChildIds.get(previousParentId)?.size ?? 0) === 0) {
                this.parentChildIds.delete(previousParentId);
            }
        }
        this.childParentIds.set(agentId, parentId);
        const childIds = this.parentChildIds.get(parentId) ?? new Set();
        childIds.add(agentId);
        this.parentChildIds.set(parentId, childIds);
    }
    removeParentChildLink(agentId) {
        const parentId = this.childParentIds.get(agentId);
        if (!parentId) {
            return;
        }
        this.childParentIds.delete(agentId);
        const childIds = this.parentChildIds.get(parentId);
        childIds?.delete(agentId);
        if ((childIds?.size ?? 0) === 0) {
            this.parentChildIds.delete(parentId);
        }
    }
    enqueueChildCompletion(agentId, outcome) {
        const parentId = this.childParentIds.get(agentId);
        if (!parentId) {
            return false;
        }
        const queue = this.queuedChildCompletions.get(parentId) ?? [];
        queue.push({
            agentId,
            success: outcome.status === "completed",
            finalMessage: completionFinalMessage(outcome)
        });
        this.queuedChildCompletions.set(parentId, queue);
        this.removeParentChildLink(agentId);
        const waiters = this.childCompletionWaiters.get(parentId);
        if (waiters !== void 0) {
            this.childCompletionWaiters.delete(parentId);
            for (const notifyWaiter of waiters){
                notifyWaiter();
            }
        }
        return true;
    }
    async collectAvailableChildCompletions(parentId, signal) {
        const queued = this.drainChildCompletions(parentId);
        if (queued.length > 0) {
            return queued;
        }
        if (!this.hasPendingChildSubagents(parentId)) {
            return [];
        }
        await this.waitForChildCompletion(parentId, signal);
        return this.drainChildCompletions(parentId);
    }
    deferCleanup(agentId) {
        this.pendingCleanups.add(agentId);
    }
    hasDeferredCleanup(agentId) {
        return this.pendingCleanups.has(agentId);
    }
    cleanupChildCompletionState(agentId) {
        this.pendingCleanups.delete(agentId);
        const childIds = this.parentChildIds.get(agentId);
        if (childIds !== void 0) {
            for (const childId of childIds){
                this.childParentIds.delete(childId);
            }
        }
        this.removeParentChildLink(agentId);
        this.parentChildIds.delete(agentId);
        this.queuedChildCompletions.delete(agentId);
        this.childCompletionWaiters.delete(agentId);
    }
    hasPendingChildSubagents(parentId) {
        return (this.parentChildIds.get(parentId)?.size ?? 0) > 0;
    }
    drainChildCompletions(parentId) {
        const queued = this.queuedChildCompletions.get(parentId) ?? [];
        this.queuedChildCompletions.delete(parentId);
        return queued;
    }
    async waitForChildCompletion(parentId, signal) {
        if (signal.aborted) {
            throw new Error("aborted");
        }
        await new Promise((resolve36, reject2)=>{
            const waiters = this.childCompletionWaiters.get(parentId) ?? new Set();
            const notifyWaiter = ()=>{
                cleanup();
                resolve36();
            };
            const onAbort = ()=>{
                cleanup();
                reject2(new Error("aborted"));
            };
            const cleanup = ()=>{
                waiters.delete(notifyWaiter);
                if (waiters.size === 0) {
                    this.childCompletionWaiters.delete(parentId);
                }
                signal.removeEventListener("abort", onAbort);
            };
            waiters.add(notifyWaiter);
            this.childCompletionWaiters.set(parentId, waiters);
            signal.addEventListener("abort", onAbort, {
                once: true
            });
        });
    }
};

}
