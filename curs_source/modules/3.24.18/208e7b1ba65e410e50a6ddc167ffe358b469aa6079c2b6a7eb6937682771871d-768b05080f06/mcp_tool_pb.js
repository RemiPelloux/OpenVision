import { Cg, TP, fP, gP, kq, vP } from "./mcp_exec_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var lte, dte, ute;
export { dte, lte, ute };
var __wakaru_Dqe_initialized = false;
export function Dqe() {
if (__wakaru_Dqe_initialized) return;
__wakaru_Dqe_initialized = true;
"use strict";
h(), F(), Cg(), lte = c.makeMessageType("agent.v1.McpToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "read_tool_def_reminder",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "system_reminders",
            kind: "message",
            T: gP,
            repeated: !0
        }
    ]), dte = c.makeMessageType("agent.v1.McpToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: fP,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: lte,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: vP,
            oneof: "result"
        },
        {
            no: 4,
            name: "permission_denied",
            kind: "message",
            T: TP,
            oneof: "result"
        }
    ]), ute = c.makeMessageType("agent.v1.McpToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: kq
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: dte
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]);

}
