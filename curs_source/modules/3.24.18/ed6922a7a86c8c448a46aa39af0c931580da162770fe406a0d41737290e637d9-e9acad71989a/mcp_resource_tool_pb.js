import { P0e, aDn, cDn, lDn, oDn } from "./mcp_exec_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var yGs, SGs;
export { SGs, yGs };
var __wakaru_qTu_initialized = false;
export function qTu() {
if (__wakaru_qTu_initialized) return;
__wakaru_qTu_initialized = true;
"use strict";
x(), bi(), P0e(), yGs = k.makeMessageType("agent.v1.ListMcpResourcesToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: oDn
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: aDn
        }
    ]), SGs = k.makeMessageType("agent.v1.ReadMcpResourceToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: cDn
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: lDn
        }
    ]);

}
