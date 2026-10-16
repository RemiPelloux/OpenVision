import { SimpleControlledExecHandler, init_controlled2 } from "./controlled.js";
import { ExecutorResource, init_remote } from "./remote.js";
import { RESOURCE_NAMES, init_resource_names } from "./resource-names.js";
import { init_resource_provider } from "./resource-provider.js";
import { init_serialization } from "./serialization.js";
import { createClientDeserializer, createClientSerializer, createResource, createServerDeserializer, createServerSerializer } from "../../dist_exports.js";
var lsExecutorResource;
export { lsExecutorResource };
var __wakaru_init_ls_initialized = false;
export function init_ls() {
if (__wakaru_init_ls_initialized) return;
__wakaru_init_ls_initialized = true;
"use strict";
init_controlled2();
init_remote();
init_resource_names();
init_resource_provider();
init_serialization();
lsExecutorResource = createResource(RESOURCE_NAMES.lsExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("lsArgs"), createClientDeserializer("lsResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("lsArgs"), createClientSerializer("lsResult")));
});

}
