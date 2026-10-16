import { SimpleControlledStreamExecHandler, init_controlled2 } from "./controlled.js";
import { StreamExecutorResource, init_remote } from "./remote.js";
import { RESOURCE_NAMES, init_resource_names } from "./resource-names.js";
import { init_resource_provider } from "./resource-provider.js";
import { init_serialization } from "./serialization.js";
import { createClientDeserializer, createClientSerializer, createResource, createServerDeserializer, createServerSerializer } from "../../dist_exports.js";
var shellStreamExecutorResource;
export { shellStreamExecutorResource };
var __wakaru_init_shell_stream_initialized = false;
export function init_shell_stream() {
if (__wakaru_init_shell_stream_initialized) return;
__wakaru_init_shell_stream_initialized = true;
"use strict";
init_controlled2();
init_remote();
init_resource_names();
init_resource_provider();
init_serialization();
shellStreamExecutorResource = createResource(RESOURCE_NAMES.shellStreamExecutor, (execManager)=>new StreamExecutorResource(execManager, createServerSerializer("shellStreamArgs"), createClientDeserializer("shellStream")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledStreamExecHandler(implementation, createServerDeserializer("shellStreamArgs"), createClientSerializer("shellStream")));
});

}
