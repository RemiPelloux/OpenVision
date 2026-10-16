import { sd } from "./chat_pb.js";
import { Ct, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
var jis;
export { jis };
var __wakaru_xze_initialized = false;
export function xze() {
if (__wakaru_xze_initialized) return;
__wakaru_xze_initialized = true;
"use strict";
E(), sd(), Pu(), jis = new Set([
    Ct.MCP,
    Ct.CALL_MCP_TOOL,
    Ct.LIST_MCP_RESOURCES,
    Ct.READ_MCP_RESOURCE
]);

}
