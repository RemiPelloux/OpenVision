import { fromProtoCursor, toProtoCursor } from "../../bidi_connect_exports.js";
import { AgentStoreConflictError, AgentStoreConflictEvent, AgentStoreConflictResult, AgentStoreConflictSuccess, init_agent_store_conflict_exec_pb } from "../../proto/dist/generated/agent/v1/agent_store_conflict_exec_pb.js";
var LocalAgentStoreConflictExecutor;
export { LocalAgentStoreConflictExecutor };
var __wakaru_init_agent_store_conflict2_initialized = false;
export function init_agent_store_conflict2() {
if (__wakaru_init_agent_store_conflict2_initialized) return;
__wakaru_init_agent_store_conflict2_initialized = true;
"use strict";
init_agent_store_conflict_exec_pb();
LocalAgentStoreConflictExecutor = class {
    constructor(drainer){
        this.drainer = drainer;
    }
    async execute(_ctx, args) {
        try {
            if (args.includeQuotaNotices !== void 0) {
                this.drainer.setIncludeQuotaNoticesOverride(args.includeQuotaNotices);
            }
            const result = await this.drainer.drain({
                cursor: fromProtoCursor(args.cursor),
                advance: args.advance !== false
            });
            return new AgentStoreConflictResult({
                result: {
                    case: "success",
                    value: new AgentStoreConflictSuccess({
                        events: result.events.map((e)=>new AgentStoreConflictEvent({
                                v: e.v,
                                eventId: e.event_id,
                                journalEpoch: e.journal_epoch,
                                seq: BigInt(e.seq),
                                tsMs: BigInt(e.ts_ms),
                                kind: e.kind,
                                storeId: e.store_id,
                                originalRelPath: e.original_rel_path,
                                conflictRelPath: e.conflict_rel_path,
                                originalAbsPath: e.original_abs_path,
                                conflictAbsPath: e.conflict_abs_path,
                                preservedBytes: e.preserved_bytes === void 0 ? void 0 : BigInt(e.preserved_bytes),
                                scopeKind: e.scope_kind,
                                limitBytes: e.limit_bytes === void 0 ? void 0 : BigInt(e.limit_bytes),
                                usageBytes: e.usage_bytes === void 0 ? void 0 : BigInt(e.usage_bytes)
                            })),
                        nextCursor: toProtoCursor(result.nextCursor),
                        gap: result.gap
                    })
                }
            });
        } catch (error3) {
            return new AgentStoreConflictResult({
                result: {
                    case: "error",
                    value: new AgentStoreConflictError({
                        error: error3 instanceof Error ? error3.message : String(error3)
                    })
                }
            });
        }
    }
};

}
