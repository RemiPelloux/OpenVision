import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { createResource } from "../../../../../dist_exports.js";
import { external_exports } from "../../../../../external_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var SMART_MODE_SHELL_APPROVAL_TTL_SECONDS, SMART_MODE_SHELL_APPROVAL_TTL_MS, smartModeShellApprovalRequestRecordSchema, InMemorySmartModeShellApprovalStore, smartModeShellApprovalStoreResource;
export { InMemorySmartModeShellApprovalStore, SMART_MODE_SHELL_APPROVAL_TTL_MS, SMART_MODE_SHELL_APPROVAL_TTL_SECONDS, smartModeShellApprovalRequestRecordSchema, smartModeShellApprovalStoreResource };
var __wakaru_init_smart_mode_approval_store2_initialized = false;
export function init_smart_mode_approval_store2() {
if (__wakaru_init_smart_mode_approval_store2_initialized) return;
__wakaru_init_smart_mode_approval_store2_initialized = true;
"use strict";
init_dist8();
init_zod();
SMART_MODE_SHELL_APPROVAL_TTL_SECONDS = 24 * 60 * 60;
SMART_MODE_SHELL_APPROVAL_TTL_MS = SMART_MODE_SHELL_APPROVAL_TTL_SECONDS * 1e3;
smartModeShellApprovalRequestRecordSchema = external_exports.object({
    id: external_exports.string(),
    conversationId: external_exports.string(),
    createdAtMs: external_exports.number(),
    fingerprint: external_exports.string(),
    blockReason: external_exports.string()
});
InMemorySmartModeShellApprovalStore = class {
    constructor(ttlMs = SMART_MODE_SHELL_APPROVAL_TTL_MS){
        this.ttlMs = ttlMs;
        this.pendingRequests = new Map();
    }
    async createPendingRequest(_ctx, request3) {
        this.cleanupExpiredApprovals();
        this.pendingRequests.set(request3.id, request3);
    }
    async getPendingRequest(_ctx, requestId) {
        this.cleanupExpiredApprovals();
        return this.pendingRequests.get(requestId);
    }
    async consumePendingRequest(_ctx, requestId) {
        this.cleanupExpiredApprovals();
        const request3 = this.pendingRequests.get(requestId);
        this.pendingRequests.delete(requestId);
        return request3;
    }
    async deletePendingRequest(_ctx, requestId) {
        this.pendingRequests.delete(requestId);
    }
    cleanupExpiredApprovals(nowMs2 = Date.now()) {
        for (const [requestId, request3] of this.pendingRequests){
            if (nowMs2 - request3.createdAtMs > this.ttlMs) {
                this.pendingRequests.delete(requestId);
            }
        }
    }
};
smartModeShellApprovalStoreResource = createResource("agent/smart-mode-shell-approval-store", ()=>{
    throw new Error("Auto-review shell approval store is not configured");
}, ()=>{});

}
