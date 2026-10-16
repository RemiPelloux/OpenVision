import { RESOURCE_NAMES, init_resource_names } from "./resource-names.js";
import { init_resource_provider } from "./resource-provider.js";
import { createResource } from "../../dist_exports.js";
var RemoteAgentStoreConflictNoticeStub, agentStoreConflictNoticeExecutorResource;
export { RemoteAgentStoreConflictNoticeStub, agentStoreConflictNoticeExecutorResource };
var __wakaru_init_agent_store_conflict_notice_initialized = false;
export function init_agent_store_conflict_notice() {
if (__wakaru_init_agent_store_conflict_notice_initialized) return;
__wakaru_init_agent_store_conflict_notice_initialized = true;
"use strict";
init_resource_names();
init_resource_provider();
RemoteAgentStoreConflictNoticeStub = class {
    async execute(_ctx, args) {
        if (args.op === "ack") {
            return {
                kind: "acked",
                count: 0
            };
        }
        if (args.op === "release") {
            return {
                kind: "released",
                count: 0
            };
        }
        if (args.op === "noteDeferredEagerWrittenPaths") {
            return {
                kind: "noted",
                count: 0
            };
        }
        return {
            kind: "not-applicable"
        };
    }
};
agentStoreConflictNoticeExecutorResource = createResource(RESOURCE_NAMES.agentStoreConflictNoticeExecutor, (_remote)=>new RemoteAgentStoreConflictNoticeStub(), (_implementation, _controlled)=>{});

}
