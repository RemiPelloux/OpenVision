import { SimpleControlledExecHandler, init_controlled2 } from "./controlled.js";
import { ExecutorResource, init_remote } from "./remote.js";
import { RESOURCE_NAMES, init_resource_names } from "./resource-names.js";
import { init_resource_provider } from "./resource-provider.js";
import { init_serialization } from "./serialization.js";
import { createClientDeserializer, createClientSerializer, createResource, createServerDeserializer, createServerSerializer } from "../../dist_exports.js";
var forceBackgroundSubagentExecutorResource;
export { forceBackgroundSubagentExecutorResource };
var __wakaru_init_subagent_control_initialized = false;
export function init_subagent_control() {
if (__wakaru_init_subagent_control_initialized) return;
__wakaru_init_subagent_control_initialized = true;
"use strict";
init_controlled2();
init_remote();
init_resource_names();
init_resource_provider();
init_serialization();
forceBackgroundSubagentExecutorResource = createResource(RESOURCE_NAMES.forceBackgroundSubagentExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("forceBackgroundSubagentArgs"), createClientDeserializer("forceBackgroundSubagentResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("forceBackgroundSubagentArgs"), createClientSerializer("forceBackgroundSubagentResult")));
});

}
