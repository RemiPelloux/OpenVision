import { SimpleControlledExecHandler, init_controlled2 } from "./controlled.js";
import { ExecutorResource, init_remote } from "./remote.js";
import { RESOURCE_NAMES, init_resource_names } from "./resource-names.js";
import { init_resource_provider } from "./resource-provider.js";
import { init_serialization } from "./serialization.js";
import { createClientDeserializer, createClientSerializer, createResource, createServerDeserializer, createServerSerializer } from "../../dist_exports.js";
var grepExecutorResource;
export { grepExecutorResource };
var __wakaru_init_grep_initialized = false;
export function init_grep() {
if (__wakaru_init_grep_initialized) return;
__wakaru_init_grep_initialized = true;
"use strict";
init_controlled2();
init_remote();
init_resource_names();
init_resource_provider();
init_serialization();
grepExecutorResource = createResource(RESOURCE_NAMES.grepExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("grepArgs"), createClientDeserializer("grepResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("grepArgs"), createClientSerializer("grepResult")));
});

}
