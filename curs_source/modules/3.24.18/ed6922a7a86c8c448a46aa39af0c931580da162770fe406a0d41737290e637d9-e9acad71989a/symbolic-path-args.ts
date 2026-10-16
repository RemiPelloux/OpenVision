import { C2, xee } from "./De_3.js";
import { Yu } from "./browser.ts";
import { Ml } from "./index.ts";
import { mde } from "./index_4.ts";
import { P0e } from "./mcp_exec_pb.js";
import { bi } from "./protobuf.js";
import { JMd } from "./read.ts";
import { LMn } from "./read_exec_pb.js";
import { x } from "./tslib.es6.js";
var Rwv, Dwv, Mwv, Pwv, Lwv;
export { Dwv, Lwv, Mwv, Pwv, Rwv };
var __wakaru_Nwv_initialized = false;
export function Nwv() {
if (__wakaru_Nwv_initialized) return;
__wakaru_Nwv_initialized = true;
"use strict";
x(), Ml(), mde(), P0e(), LMn(), Yu(), bi(), JMd(), Rwv = 16 * 1024 * 1024, Dwv = xee("mcp.symbolic_args.expansion", {
    description: "Outcome of late-binding $file:/abs/path MCP argument expansion at the executor boundary",
    labelNames: [
        "route",
        "outcome"
    ]
}), Mwv = C2("mcp.symbolic_args.bytes", {
    description: "Total bytes substituted into one MCP tool call by $file:/abs/path arguments",
    labelNames: [
        "route"
    ]
}), Pwv = xee("mcp.symbolic_args.describe", {
    description: "Per-file $file:/abs/path describe reads: `vm_digest` when the read executor hashed the file where it lives, `outdated_executor` when it returned the text instead (it predates $file: expansion, so the call is refused)",
    labelNames: [
        "source"
    ]
}), Lwv = C2("mcp.symbolic_args.paths", {
    description: "Number of distinct $file:/abs/path arguments expanded in one MCP tool call",
    labelNames: [
        "route"
    ]
});

}
