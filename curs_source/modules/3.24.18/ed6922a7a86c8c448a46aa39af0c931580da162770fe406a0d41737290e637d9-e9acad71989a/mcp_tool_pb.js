import { BQe, P0e, aGs, oGs, rGs, w4i } from "./mcp_exec_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var pGs, C4i, Pyt;
export { C4i, Pyt, pGs };
var __wakaru_T4i_initialized = false;
export function T4i() {
if (__wakaru_T4i_initialized) return;
__wakaru_T4i_initialized = true;
"use strict";
x(), bi(), P0e(), pGs = k.makeMessageType("agent.v1.McpToolError", ()=>[
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
            T: rGs,
            repeated: !0
        }
    ]), C4i = k.makeMessageType("agent.v1.McpToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: w4i,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: pGs,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: oGs,
            oneof: "result"
        },
        {
            no: 4,
            name: "permission_denied",
            kind: "message",
            T: aGs,
            oneof: "result"
        }
    ]), Pyt = k.makeMessageType("agent.v1.McpToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: BQe
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: C4i
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
