import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
import { isCancellation } from "../../../tree_chunk_napi_exports.js";
var logger123, LocalSubagentStoreMountTracker;
export { LocalSubagentStoreMountTracker, logger123 };
var __wakaru_init_subagent_store_mounts_initialized = false;
export function init_subagent_store_mounts() {
if (__wakaru_init_subagent_store_mounts_initialized) return;
__wakaru_init_subagent_store_mounts_initialized = true;
"use strict";
init_dist();
logger123 = createLogger("agent-host:subagent-store-mounts");
LocalSubagentStoreMountTracker = class {
    constructor(options2){
        this.options = options2;
        this.activeRunsByChildId = new Map();
        this.applyByChildId = new Map();
        this.mountedChildIds = new Set();
    }
    async applyForRun(ctx, agentId, args) {
        const activeRuns = this.activeRunsByChildId.get(agentId) ?? 0;
        this.activeRunsByChildId.set(agentId, activeRuns + 1);
        if (activeRuns > 0) {
            return await this.applyByChildId.get(agentId) ?? "unavailable";
        }
        const mounter = this.options.resolveMounter();
        if (mounter === void 0) {
            return "unavailable";
        }
        const apply = (async ()=>{
            try {
                await mounter.applySubagentStoreMounts({
                    signal: ctx.signal,
                    parentStoreId: this.options.resolveParentStoreId(args),
                    childStoreId: agentId
                });
                this.mountedChildIds.add(agentId);
                return "ok";
            } catch (error3) {
                logger123.warn(ctx, "Subagent store-mount apply failed", {
                    error: String(error3)
                });
                return isCancellation(error3, ctx.signal) ? "aborted" : "error";
            }
        })();
        this.applyByChildId.set(agentId, apply);
        try {
            return await apply;
        } finally{
            this.applyByChildId.delete(agentId);
        }
    }
    async clearAfterRun(ctx, agentId) {
        const activeRuns = this.activeRunsByChildId.get(agentId) ?? 0;
        if (activeRuns > 1) {
            this.activeRunsByChildId.set(agentId, activeRuns - 1);
            return;
        }
        this.activeRunsByChildId.delete(agentId);
        if (!this.mountedChildIds.delete(agentId)) {
            return;
        }
        const mounter = this.options.resolveMounter();
        if (mounter === void 0) {
            return;
        }
        try {
            await mounter.clearSubagentStoreMounts({
                childStoreId: agentId
            });
        } catch (error3) {
            logger123.warn(ctx, "Subagent store-mount clear failed", {
                error: String(error3)
            });
        }
    }
};

}
