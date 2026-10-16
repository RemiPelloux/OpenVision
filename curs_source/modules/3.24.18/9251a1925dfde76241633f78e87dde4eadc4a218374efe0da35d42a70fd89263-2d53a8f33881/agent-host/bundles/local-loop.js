import { init_managed_local_agent_client } from "./agentAdapter/local/managed-local-agent-client.js";
import { init_private_inference_agent_client } from "./agentAdapter/local/private-inference-agent-client.js";
import { init_private_inference_catalog } from "./agentAdapter/local/private-inference-catalog.js";
import { init_private_inference_config } from "./agentAdapter/local/private-inference-config.js";
import { init_private_inference_usage_admission } from "./agentAdapter/local/private-inference-usage-admission.js";
import { init_run_inference_agent_module } from "./agentAdapter/local/run-inference-agent-module.js";
import { init_agent_host_factory } from "./factory/agent-host-factory.js";
import { init_entry } from "./harness/generation/entry.js";
import { init_validate_only } from "./harness/host/validate-only.js";
import { composeAgentHarness, createManagedLocalFromBackend } from "../../local_loop_exports.js";
import { createAgentHostWithManagedLocalFactory } from "../../private_inference_loop_exports.js";
import { init_loader4 } from "../../tree_chunk_napi_exports.js";
var createAgentHost4;
export { createAgentHost4 };
var __wakaru_init_local_loop_initialized = false;
export function init_local_loop() {
if (__wakaru_init_local_loop_initialized) return;
__wakaru_init_local_loop_initialized = true;
"use strict";
init_managed_local_agent_client();
init_private_inference_agent_client();
init_private_inference_usage_admission();
init_run_inference_agent_module();
init_agent_host_factory();
init_entry();
init_loader4();
init_validate_only();
init_private_inference_catalog();
init_private_inference_config();
createAgentHost4 = (options2)=>{
    const agentHarness = composeAgentHarness(options2.agentHarness);
    return createAgentHostWithManagedLocalFactory(options2, createManagedLocalFromBackend(options2.attachLocalLoopAttemptContext), void 0, {
        kind: "local-loop",
        ...agentHarness === void 0 ? {} : {
            agentHarness
        }
    });
};

}
