import { Cg, Fq, Nq, Pq, xq } from "./mcp_exec_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Dte, Ote;
export { Dte, Ote };
var __wakaru_xqe_initialized = false;
export function xqe() {
if (__wakaru_xqe_initialized) return;
__wakaru_xqe_initialized = true;
"use strict";
h(), F(), Cg(), Dte = c.makeMessageType("agent.v1.ListMcpResourcesToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Pq
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Nq
        }
    ]), Ote = c.makeMessageType("agent.v1.ReadMcpResourceToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: xq
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Fq
        }
    ]);

}
