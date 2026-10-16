import { init_errors2 } from "./errors.js";
import { init_agent_pb } from "../../proto/dist/generated/agent/v1/agent_pb.js";
var __wakaru_init_llm_gateway_credential_initialized = false;
export function init_llm_gateway_credential() {
if (__wakaru_init_llm_gateway_credential_initialized) return;
__wakaru_init_llm_gateway_credential_initialized = true;
"use strict";
init_agent_pb();
init_errors2();

}
