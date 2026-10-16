import { init_dist34 } from "../../../../../canvas-shared/dist/index.js";
import { init_canvas_diagnostics_exec_pb } from "../../../../../proto/dist/generated/agent/v1/canvas_diagnostics_exec_pb.js";
import { init_diagnostics_exec_pb } from "../../../../../proto/dist/generated/agent/v1/diagnostics_exec_pb.js";
var import_node_path85, TIMEOUT, SINGLE_LINE_SANITIZER;
export { SINGLE_LINE_SANITIZER, TIMEOUT, import_node_path85 };
var __wakaru_init_canvas_post_edit_diagnostics_initialized = false;
export function init_canvas_post_edit_diagnostics() {
if (__wakaru_init_canvas_post_edit_diagnostics_initialized) return;
__wakaru_init_canvas_post_edit_diagnostics_initialized = true;
"use strict";
import_node_path85 = require("node:path");
init_dist34();
init_canvas_diagnostics_exec_pb();
init_diagnostics_exec_pb();
TIMEOUT = Symbol("canvasPostEditDiagnosticsTimeout");
SINGLE_LINE_SANITIZER = /[\s\u0000-\u001F\u007F]+/g;

}
