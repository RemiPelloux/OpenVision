import { SimpleControlledExecHandler, init_controlled2 } from "./controlled.js";
import { ExecutorResource, init_remote } from "./remote.js";
import { RESOURCE_NAMES, init_resource_names } from "./resource-names.js";
import { init_resource_provider } from "./resource-provider.js";
import { init_serialization } from "./serialization.js";
import { createClientDeserializer, createClientSerializer, createResource, createServerDeserializer, createServerSerializer } from "../../dist_exports.js";
var miniSweAgentBashExecutorResource;
export { miniSweAgentBashExecutorResource };
var __wakaru_init_mini_swe_agent_bash_initialized = false;
export function init_mini_swe_agent_bash() {
if (__wakaru_init_mini_swe_agent_bash_initialized) return;
__wakaru_init_mini_swe_agent_bash_initialized = true;
"use strict";
init_controlled2();
init_remote();
init_resource_names();
init_resource_provider();
init_serialization();
miniSweAgentBashExecutorResource = createResource(RESOURCE_NAMES.miniSweAgentBashExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("miniSweAgentBashArgs"), createClientDeserializer("miniSweAgentBashResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("miniSweAgentBashArgs"), createClientSerializer("miniSweAgentBashResult")));
});

}
