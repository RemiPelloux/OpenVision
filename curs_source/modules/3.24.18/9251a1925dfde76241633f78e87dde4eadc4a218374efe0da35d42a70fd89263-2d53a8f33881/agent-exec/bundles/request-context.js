import { SimpleControlledExecHandler, init_controlled2 } from "./controlled.js";
import { ExecutorResource, init_remote } from "./remote.js";
import { RESOURCE_NAMES, init_resource_names } from "./resource-names.js";
import { init_resource_provider } from "./resource-provider.js";
import { init_serialization } from "./serialization.js";
import { createClientDeserializer, createClientSerializer, createResource, createServerDeserializer, createServerSerializer } from "../../dist_exports.js";
var requestContextExecutorResource;
export { requestContextExecutorResource };
var __wakaru_init_request_context_initialized = false;
export function init_request_context() {
if (__wakaru_init_request_context_initialized) return;
__wakaru_init_request_context_initialized = true;
"use strict";
init_controlled2();
init_remote();
init_resource_names();
init_resource_provider();
init_serialization();
requestContextExecutorResource = createResource(RESOURCE_NAMES.requestContextExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("requestContextArgs"), createClientDeserializer("requestContextResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("requestContextArgs"), createClientSerializer("requestContextResult")));
});

}
