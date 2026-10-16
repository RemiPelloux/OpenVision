import { init_dist7 } from "../../agent-core/dist/index.js";
import { SimpleControlledExecHandler, init_controlled2 } from "./controlled.js";
import { ExecutorResource, init_remote } from "./remote.js";
import { RESOURCE_NAMES, init_resource_names } from "./resource-names.js";
import { init_resource_provider } from "./resource-provider.js";
import { init_serialization } from "./serialization.js";
import { init_dist } from "../../context/dist/index.js";
import { createClientDeserializer, createClientSerializer, createResource, createServerDeserializer, createServerSerializer } from "../../dist_exports.js";
import { createKey } from "../../entry_exports.js";
import { init_subagent_exec_pb } from "../../proto/dist/generated/agent/v1/subagent_exec_pb.js";
import { init_subagents_pb } from "../../proto/dist/generated/agent/v1/subagents_pb.js";
var RUNNING_SUBAGENT_FOLLOWUP_ERROR, pendingSubagentReplayKey, RUNNING_SUBAGENT_INTERRUPT_RETRY_HINT, SubagentHostError, MAX_COMPLETED_TOOL_CALL_RESULTS, subagentExecutorResource;
export { MAX_COMPLETED_TOOL_CALL_RESULTS, RUNNING_SUBAGENT_FOLLOWUP_ERROR, RUNNING_SUBAGENT_INTERRUPT_RETRY_HINT, SubagentHostError, pendingSubagentReplayKey, subagentExecutorResource };
var __wakaru_init_subagent_initialized = false;
export function init_subagent() {
if (__wakaru_init_subagent_initialized) return;
__wakaru_init_subagent_initialized = true;
"use strict";
init_dist7();
init_dist();
init_subagent_exec_pb();
init_controlled2();
init_remote();
init_resource_names();
init_resource_provider();
init_serialization();
init_subagent_exec_pb();
init_subagents_pb();
RUNNING_SUBAGENT_FOLLOWUP_ERROR = "Sub-agent is currently running. You may send the follow-up message when it has completed.";
pendingSubagentReplayKey = createKey(Symbol("pendingSubagentReplay"), void 0);
RUNNING_SUBAGENT_INTERRUPT_RETRY_HINT = "If you intended to interrupt this agent, you may retry with `interrupt` set to true";
SubagentHostError = class extends Error {
    constructor(message, options2){
        super(message);
        this.name = "SubagentHostError";
        this.agentId = options2?.agentId;
        this.cause = options2?.cause;
    }
};
MAX_COMPLETED_TOOL_CALL_RESULTS = 1e3;
subagentExecutorResource = createResource(RESOURCE_NAMES.subagentExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("subagentArgs"), createClientDeserializer("subagentResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("subagentArgs"), createClientSerializer("subagentResult")));
});

}
