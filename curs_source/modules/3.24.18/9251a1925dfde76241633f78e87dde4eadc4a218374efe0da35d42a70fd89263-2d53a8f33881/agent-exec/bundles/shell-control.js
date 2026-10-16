import { SimpleControlledExecHandler, init_controlled2 } from "./controlled.js";
import { ExecutorResource, init_remote } from "./remote.js";
import { RESOURCE_NAMES, init_resource_names } from "./resource-names.js";
import { init_resource_provider } from "./resource-provider.js";
import { init_serialization } from "./serialization.js";
import { createClientDeserializer, createClientSerializer, createResource, createServerDeserializer, createServerSerializer } from "../../dist_exports.js";
var forceBackgroundShellExecutorResource;
export { forceBackgroundShellExecutorResource };
var __wakaru_init_shell_control_initialized = false;
export function init_shell_control() {
if (__wakaru_init_shell_control_initialized) return;
__wakaru_init_shell_control_initialized = true;
"use strict";
init_controlled2();
init_remote();
init_resource_names();
init_resource_provider();
init_serialization();
forceBackgroundShellExecutorResource = createResource(RESOURCE_NAMES.forceBackgroundShellExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("forceBackgroundShellArgs"), createClientDeserializer("forceBackgroundShellResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("forceBackgroundShellArgs"), createClientSerializer("forceBackgroundShellResult")));
});

}
