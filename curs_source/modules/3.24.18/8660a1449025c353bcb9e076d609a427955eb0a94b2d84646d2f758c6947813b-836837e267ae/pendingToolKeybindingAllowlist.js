import { Ct, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
var r7f;
export { r7f };
var __wakaru_s7f_initialized = false;
export function s7f() {
if (__wakaru_s7f_initialized) return;
__wakaru_s7f_initialized = true;
"use strict";
E(), Pu(), r7f = new Set([
    Ct.RUN_TERMINAL_COMMAND_V2,
    Ct.MCP,
    Ct.CALL_MCP_TOOL,
    Ct.WEB_FETCH,
    Ct.WEB_SEARCH,
    Ct.EDIT_FILE_V2,
    Ct.DELETE_FILE
]);

}
