import { Hu } from "./chat_pb.js";
import { nt, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
var qfh;
export { qfh };
var __wakaru_att_initialized = false;
export function att() {
if (__wakaru_att_initialized) return;
__wakaru_att_initialized = true;
"use strict";
x(), Hu(), ql(), qfh = new Set([
    nt.MCP,
    nt.CALL_MCP_TOOL,
    nt.LIST_MCP_RESOURCES,
    nt.READ_MCP_RESOURCE
]);

}
