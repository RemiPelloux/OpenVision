import { SimpleControlledExecHandler, init_controlled2 } from "./controlled.js";
import { ExecutorResource, init_remote } from "./remote.js";
import { RESOURCE_NAMES, init_resource_names } from "./resource-names.js";
import { init_resource_provider } from "./resource-provider.js";
import { init_serialization } from "./serialization.js";
import { createClientDeserializer, createClientSerializer, createResource, createServerDeserializer, createServerSerializer } from "../../dist_exports.js";
var backgroundShellExecutorResource, writeBackgroundShellInputExecutorResource;
export { backgroundShellExecutorResource, writeBackgroundShellInputExecutorResource };
var __wakaru_init_background_shell_initialized = false;
export function init_background_shell() {
if (__wakaru_init_background_shell_initialized) return;
__wakaru_init_background_shell_initialized = true;
"use strict";
init_controlled2();
init_remote();
init_resource_names();
init_resource_provider();
init_serialization();
backgroundShellExecutorResource = createResource(RESOURCE_NAMES.backgroundShellExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("backgroundShellSpawnArgs"), createClientDeserializer("backgroundShellSpawnResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("backgroundShellSpawnArgs"), createClientSerializer("backgroundShellSpawnResult")));
});
writeBackgroundShellInputExecutorResource = createResource(RESOURCE_NAMES.writeBackgroundShellInputExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("writeShellStdinArgs"), createClientDeserializer("writeShellStdinResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("writeShellStdinArgs"), createClientSerializer("writeShellStdinResult")));
});

}
