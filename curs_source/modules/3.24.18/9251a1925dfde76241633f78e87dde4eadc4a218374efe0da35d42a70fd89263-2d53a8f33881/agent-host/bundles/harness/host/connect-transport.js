import { NonRetriableError } from "../../../../agent-client/dist/errors.js";
import { init_dist9 } from "../../../../agent-client/dist/index.js";
import { init_local_loop_turn_telemetry } from "../../agentAdapter/local/local-loop-turn-telemetry.js";
import { init_managed_local_retry_identity } from "../../agentAdapter/local/managed-local-retry-identity.js";
import { init_api_constants } from "../api-constants.js";
import { init_connect_code_prefix } from "../connect-code-prefix.js";
import { init_pass_through_iterator } from "./pass-through-iterator.js";
import { init_steer_carry } from "./steer-carry.js";
import { init_seam_run_options } from "../seam-run-options.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist12 } from "../../../../context-rpc/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { createKey } from "../../../../entry_exports.js";
import { init_dist4 } from "../../../../metrics/dist/index.js";
import { Code } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { init_esm3 } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_protocol_connect } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol-connect/index.js";
import { init_agent_service_connect } from "../../../../proto/dist/generated/agent/v1/agent_service_connect.js";
import { init_inference_connect } from "../../../../proto/dist/generated/aiserver/v1/inference_connect.js";
import { init_utils_pb2 } from "../../../../proto/dist/generated/aiserver/v1/utils_pb.js";
import { init_loader4, shortGeneration } from "../../../../tree_chunk_napi_exports.js";
var logger112, MAX_SEAM_FRAME_BYTES, HarnessModuleFaultError, MODULE_FAULT_CODES, moduleTurnKey, MODULE_QUIET_STOP_MS;
export { HarnessModuleFaultError, MAX_SEAM_FRAME_BYTES, MODULE_FAULT_CODES, MODULE_QUIET_STOP_MS, logger112, moduleTurnKey };
var __wakaru_init_connect_transport2_initialized = false;
export function init_connect_transport2() {
if (__wakaru_init_connect_transport2_initialized) return;
__wakaru_init_connect_transport2_initialized = true;
"use strict";
init_dist9();
init_dist();
init_dist12();
init_dist4();
init_agent_service_connect();
init_inference_connect();
init_utils_pb2();
init_esm3();
init_protocol_connect();
init_local_loop_turn_telemetry();
init_managed_local_retry_identity();
init_api_constants();
init_connect_code_prefix();
init_seam_run_options();
init_loader4();
init_pass_through_iterator();
init_steer_carry();
logger112 = createLogger("HarnessAgentClient");
MAX_SEAM_FRAME_BYTES = 4294967295;
HarnessModuleFaultError = class extends NonRetriableError {
    constructor(module2, fault){
        const title = `Module ${module2.label} (${shortGeneration(module2.generation)}) failed`;
        super(`${title}: ${fault.reason}`, {
            cause: fault.cause instanceof Error ? fault.cause : void 0,
            displayInfo: {
                title,
                detail: fault.reason,
                isRetryable: false
            }
        });
        this.reason = fault.reason;
        this.errorClass = fault.errorClass;
        this.early = fault.early;
        this.module = module2;
    }
};
MODULE_FAULT_CODES = new Set([
    Code.Unknown,
    Code.Internal,
    Code.InvalidArgument,
    Code.Unimplemented,
    Code.DataLoss
]);
moduleTurnKey = createKey(Symbol("moduleTurn"), void 0);
MODULE_QUIET_STOP_MS = 12e4;

}
