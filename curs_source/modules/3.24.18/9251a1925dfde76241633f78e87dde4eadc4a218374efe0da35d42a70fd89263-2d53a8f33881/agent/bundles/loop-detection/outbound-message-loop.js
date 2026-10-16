import { init_agent_loop_detector } from "./agent-loop-detector.js";
import { init_json_string_content_stream } from "./json-string-content-stream.js";
import { init_agent_loop_runtime } from "../utils/agent-loop-runtime.js";
var __wakaru_init_outbound_message_loop_initialized = false;
export function init_outbound_message_loop() {
if (__wakaru_init_outbound_message_loop_initialized) return;
__wakaru_init_outbound_message_loop_initialized = true;
"use strict";
init_agent_loop_runtime();
init_agent_loop_detector();
init_json_string_content_stream();

}
