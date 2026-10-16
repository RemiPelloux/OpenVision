import { SimpleControlledExecHandler, init_controlled2 } from "./controlled.js";
import { ExecutorResource, init_remote } from "./remote.js";
import { RESOURCE_NAMES, init_resource_names } from "./resource-names.js";
import { init_resource_provider } from "./resource-provider.js";
import { init_serialization } from "./serialization.js";
import { createClientDeserializer, createClientSerializer, createResource, createServerDeserializer, createServerSerializer } from "../../dist_exports.js";
var canvasDiagnosticsExecutorResource;
export { canvasDiagnosticsExecutorResource };
var __wakaru_init_canvas_diagnostics_initialized = false;
export function init_canvas_diagnostics() {
if (__wakaru_init_canvas_diagnostics_initialized) return;
__wakaru_init_canvas_diagnostics_initialized = true;
"use strict";
init_controlled2();
init_remote();
init_resource_names();
init_resource_provider();
init_serialization();
canvasDiagnosticsExecutorResource = createResource(RESOURCE_NAMES.canvasDiagnosticsExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("canvasDiagnosticsArgs"), createClientDeserializer("canvasDiagnosticsResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("canvasDiagnosticsArgs"), createClientSerializer("canvasDiagnosticsResult")));
});

}
