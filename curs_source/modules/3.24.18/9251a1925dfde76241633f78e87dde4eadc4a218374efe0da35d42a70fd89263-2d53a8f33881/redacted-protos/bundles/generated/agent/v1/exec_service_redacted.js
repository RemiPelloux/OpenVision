import { init_exec_redacted } from "./exec_redacted.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_exec_service_redacted_initialized = false;
export function init_exec_service_redacted() {
if (__wakaru_init_exec_service_redacted_initialized) return;
__wakaru_init_exec_service_redacted_initialized = true;
"use strict";
init_dist27();
init_exec_redacted();

}
