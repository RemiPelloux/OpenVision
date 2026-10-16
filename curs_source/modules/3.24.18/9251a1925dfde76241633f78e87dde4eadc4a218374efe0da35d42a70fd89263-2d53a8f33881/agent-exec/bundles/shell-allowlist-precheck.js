import { SimpleControlledExecHandler, init_controlled2 } from "./controlled.js";
import { ExecutorResource, init_remote } from "./remote.js";
import { RESOURCE_NAMES, init_resource_names } from "./resource-names.js";
import { init_resource_provider } from "./resource-provider.js";
import { init_serialization } from "./serialization.js";
import { createClientDeserializer, createClientSerializer, createResource, createServerDeserializer, createServerSerializer } from "../../dist_exports.js";
import { init_shell_allowlist_precheck_exec_pb } from "../../proto/dist/generated/agent/v1/shell_allowlist_precheck_exec_pb.js";
var shellAllowlistPrecheckExecutorResource;
export { shellAllowlistPrecheckExecutorResource };
var __wakaru_init_shell_allowlist_precheck_initialized = false;
export function init_shell_allowlist_precheck() {
if (__wakaru_init_shell_allowlist_precheck_initialized) return;
__wakaru_init_shell_allowlist_precheck_initialized = true;
"use strict";
init_controlled2();
init_remote();
init_resource_names();
init_resource_provider();
init_serialization();
init_shell_allowlist_precheck_exec_pb();
shellAllowlistPrecheckExecutorResource = createResource(RESOURCE_NAMES.shellAllowlistPrecheckExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("shellAllowlistPrecheckArgs"), createClientDeserializer("shellAllowlistPrecheckResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("shellAllowlistPrecheckArgs"), createClientSerializer("shellAllowlistPrecheckResult")));
});

}
