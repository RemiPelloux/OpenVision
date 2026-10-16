import { init_managed_local_agent_client } from "../../agentAdapter/local/managed-local-agent-client.js";
import { init_privacy_mode2 } from "../../agentAdapter/local/privacy-mode.js";
import { init_run_inference_agent_module } from "../../agentAdapter/local/run-inference-agent-module.js";
import { HARNESS_CAPABILITIES, init_api_constants } from "../api-constants.js";
import { init_backend_transport } from "./backend-transport.js";
import { init_serve_run } from "./serve-run.js";
import { init_dist35 } from "../../../../agent/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { init_dist4 } from "../../../../metrics/dist/index.js";
import { init_esm3 } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_protocol } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol/index.js";
import { init_agent_service_connect } from "../../../../proto/dist/generated/agent/v1/agent_service_connect.js";
import { init_aiserver_connect } from "../../../../proto/dist/generated/aiserver/v1/aiserver_connect.js";
import { init_inference_connect } from "../../../../proto/dist/generated/aiserver/v1/inference_connect.js";
import { init_privacy_mode_pb } from "../../../../proto/dist/generated/aiserver/v1/privacy_mode_pb.js";
import { init_repository_connect } from "../../../../proto/dist/generated/aiserver/v1/repository_connect.js";
var MAX_SEAM_FRAME_BYTES2, CAPABILITIES;
export { CAPABILITIES, MAX_SEAM_FRAME_BYTES2 };
var __wakaru_init_entry_initialized = false;
export function init_entry() {
if (__wakaru_init_entry_initialized) return;
__wakaru_init_entry_initialized = true;
"use strict";
init_dist();
init_dist4();
init_agent_service_connect();
init_aiserver_connect();
init_inference_connect();
init_privacy_mode_pb();
init_repository_connect();
init_esm3();
init_protocol();
init_managed_local_agent_client();
init_privacy_mode2();
init_run_inference_agent_module();
init_api_constants();
init_backend_transport();
init_serve_run();
init_dist35();
MAX_SEAM_FRAME_BYTES2 = 4294967295;
CAPABILITIES = [
    HARNESS_CAPABILITIES.managedLocalRun,
    HARNESS_CAPABILITIES.seamRunOptions
];

}
