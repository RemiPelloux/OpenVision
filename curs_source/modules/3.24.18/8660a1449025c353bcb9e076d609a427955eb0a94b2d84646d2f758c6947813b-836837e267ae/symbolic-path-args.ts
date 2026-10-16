import { kl } from "./browser.ts";
import { nl } from "./index.ts";
import { iCe } from "./index_4.ts";
import { U4, hpe } from "./ipa.js";
import { zke } from "./mcp_exec_pb.js";
import { hr } from "./protobuf.js";
import { MSm } from "./read.ts";
import { zni } from "./read_exec_pb.js";
import { E } from "./tslib.es6.js";
var A41, R41, P41, M41, D41;
export { A41, D41, M41, P41, R41 };
var __wakaru_N41_initialized = false;
export function N41() {
if (__wakaru_N41_initialized) return;
__wakaru_N41_initialized = true;
"use strict";
E(), nl(), iCe(), zke(), zni(), kl(), hr(), MSm(), A41 = 16 * 1024 * 1024, R41 = hpe("mcp.symbolic_args.expansion", {
    description: "Outcome of late-binding $file:/abs/path MCP argument expansion at the executor boundary",
    labelNames: [
        "route",
        "outcome"
    ]
}), P41 = U4("mcp.symbolic_args.bytes", {
    description: "Total bytes substituted into one MCP tool call by $file:/abs/path arguments",
    labelNames: [
        "route"
    ]
}), M41 = hpe("mcp.symbolic_args.describe", {
    description: "Per-file $file:/abs/path describe reads: `vm_digest` when the read executor hashed the file where it lives, `outdated_executor` when it returned the text instead (it predates $file: expansion, so the call is refused)",
    labelNames: [
        "source"
    ]
}), D41 = U4("mcp.symbolic_args.paths", {
    description: "Number of distinct $file:/abs/path arguments expanded in one MCP tool call",
    labelNames: [
        "route"
    ]
});

}
