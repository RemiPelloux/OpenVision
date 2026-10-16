import { init_prompt_reference_contract } from "./prompt-reference-contract.js";
import { init_request_id } from "../utils/request-id.js";
var __wakaru_init_tool_call_id_tagging_initialized = false;
export function init_tool_call_id_tagging() {
if (__wakaru_init_tool_call_id_tagging_initialized) return;
__wakaru_init_tool_call_id_tagging_initialized = true;
"use strict";
init_request_id();
init_prompt_reference_contract();

}
