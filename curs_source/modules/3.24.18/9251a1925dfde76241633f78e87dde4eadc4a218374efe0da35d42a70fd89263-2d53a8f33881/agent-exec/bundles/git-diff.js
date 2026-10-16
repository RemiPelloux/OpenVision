import { SimpleControlledExecHandler, init_controlled2 } from "./controlled.js";
import { ExecutorResource, init_remote } from "./remote.js";
import { RESOURCE_NAMES, init_resource_names } from "./resource-names.js";
import { init_resource_provider } from "./resource-provider.js";
import { init_serialization } from "./serialization.js";
import { createClientDeserializer, createClientSerializer, createResource, createServerDeserializer, createServerSerializer } from "../../dist_exports.js";
var gitDiffExecutorResource;
export { gitDiffExecutorResource };
var __wakaru_init_git_diff2_initialized = false;
export function init_git_diff2() {
if (__wakaru_init_git_diff2_initialized) return;
__wakaru_init_git_diff2_initialized = true;
"use strict";
init_controlled2();
init_remote();
init_resource_names();
init_resource_provider();
init_serialization();
gitDiffExecutorResource = createResource(RESOURCE_NAMES.gitDiffExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("gitDiffRequest"), createClientDeserializer("gitDiffResponse")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("gitDiffRequest"), createClientSerializer("gitDiffResponse")));
});

}
