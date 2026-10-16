import { SimpleControlledExecHandler, init_controlled2 } from "./controlled.js";
import { ExecutorResource, init_remote } from "./remote.js";
import { RESOURCE_NAMES, init_resource_names } from "./resource-names.js";
import { init_resource_provider } from "./resource-provider.js";
import { init_serialization } from "./serialization.js";
import { createClientDeserializer, createClientSerializer, createResource, createServerDeserializer, createServerSerializer } from "../../dist_exports.js";
import { init_web_fetch_allowlist_precheck_exec_pb } from "../../proto/dist/generated/agent/v1/web_fetch_allowlist_precheck_exec_pb.js";
var webFetchAllowlistPrecheckExecutorResource;
export { webFetchAllowlistPrecheckExecutorResource };
var __wakaru_init_web_fetch_allowlist_precheck_initialized = false;
export function init_web_fetch_allowlist_precheck() {
if (__wakaru_init_web_fetch_allowlist_precheck_initialized) return;
__wakaru_init_web_fetch_allowlist_precheck_initialized = true;
"use strict";
init_controlled2();
init_remote();
init_resource_names();
init_resource_provider();
init_serialization();
init_web_fetch_allowlist_precheck_exec_pb();
webFetchAllowlistPrecheckExecutorResource = createResource(RESOURCE_NAMES.webFetchAllowlistPrecheckExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("webFetchAllowlistPrecheckArgs"), createClientDeserializer("webFetchAllowlistPrecheckResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("webFetchAllowlistPrecheckArgs"), createClientSerializer("webFetchAllowlistPrecheckResult")));
});

}
