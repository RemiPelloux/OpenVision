import { init_canvas_diagnostics_exec_pb } from "../../../../../proto/dist/generated/agent/v1/canvas_diagnostics_exec_pb.js";
import { init_diagnostics_exec_redacted } from "./diagnostics_exec_redacted.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_canvas_diagnostics_exec_redacted_initialized = false;
export function init_canvas_diagnostics_exec_redacted() {
if (__wakaru_init_canvas_diagnostics_exec_redacted_initialized) return;
__wakaru_init_canvas_diagnostics_exec_redacted_initialized = true;
"use strict";
init_dist27();
init_canvas_diagnostics_exec_pb();
init_diagnostics_exec_redacted();

}
