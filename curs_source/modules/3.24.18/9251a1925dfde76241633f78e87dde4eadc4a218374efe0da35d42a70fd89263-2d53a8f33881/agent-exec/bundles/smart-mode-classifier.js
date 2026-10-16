import { SimpleControlledExecHandler, init_controlled2 } from "./controlled.js";
import { ExecutorResource, init_remote } from "./remote.js";
import { RESOURCE_NAMES, init_resource_names } from "./resource-names.js";
import { init_resource_provider } from "./resource-provider.js";
import { init_serialization } from "./serialization.js";
import { createClientDeserializer, createClientSerializer, createResource, createServerDeserializer, createServerSerializer } from "../../dist_exports.js";
import { init_smart_mode_classifier_exec_pb } from "../../proto/dist/generated/agent/v1/smart_mode_classifier_exec_pb.js";
var smartModeClassifierExecutorResource;
export { smartModeClassifierExecutorResource };
var __wakaru_init_smart_mode_classifier2_initialized = false;
export function init_smart_mode_classifier2() {
if (__wakaru_init_smart_mode_classifier2_initialized) return;
__wakaru_init_smart_mode_classifier2_initialized = true;
"use strict";
init_controlled2();
init_remote();
init_resource_names();
init_resource_provider();
init_serialization();
init_smart_mode_classifier_exec_pb();
smartModeClassifierExecutorResource = createResource(RESOURCE_NAMES.smartModeClassifierExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("smartModeClassifierArgs"), createClientDeserializer("smartModeClassifierResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("smartModeClassifierArgs"), createClientSerializer("smartModeClassifierResult")));
});

}
