import { SimpleControlledExecHandler, init_controlled2 } from "./controlled.js";
import { ExecutorResource, init_remote } from "./remote.js";
import { RESOURCE_NAMES, init_resource_names } from "./resource-names.js";
import { init_resource_provider } from "./resource-provider.js";
import { init_serialization } from "./serialization.js";
import { createClientDeserializer, createClientSerializer, createResource, createServerDeserializer, createServerSerializer } from "../../dist_exports.js";
var piFindExecutorResource;
export { piFindExecutorResource };
var __wakaru_init_pi_find_initialized = false;
export function init_pi_find() {
if (__wakaru_init_pi_find_initialized) return;
__wakaru_init_pi_find_initialized = true;
"use strict";
init_controlled2();
init_remote();
init_resource_names();
init_resource_provider();
init_serialization();
piFindExecutorResource = createResource(RESOURCE_NAMES.piFindExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("piFindArgs"), createClientDeserializer("piFindResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("piFindArgs"), createClientSerializer("piFindResult")));
});

}
