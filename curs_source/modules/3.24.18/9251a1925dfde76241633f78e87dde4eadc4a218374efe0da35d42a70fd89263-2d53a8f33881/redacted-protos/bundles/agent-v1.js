import { init_redacted_index } from "./generated/agent/v1/redacted_index.js";
import { init_type_guards } from "./type-guards.js";
var __wakaru_init_agent_v1_initialized = false;
export function init_agent_v1() {
if (__wakaru_init_agent_v1_initialized) return;
__wakaru_init_agent_v1_initialized = true;
"use strict";
init_redacted_index();
init_type_guards();

}
