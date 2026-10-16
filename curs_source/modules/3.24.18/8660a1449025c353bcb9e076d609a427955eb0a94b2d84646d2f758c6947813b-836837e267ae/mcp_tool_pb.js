import { U$e, WOo, Zti, qOo, zOo, zke } from "./mcp_exec_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var cSr, gmn, ttt;
export { cSr, gmn, ttt };
var __wakaru_fmn_initialized = false;
export function fmn() {
if (__wakaru_fmn_initialized) return;
__wakaru_fmn_initialized = true;
"use strict";
E(), hr(), zke(), cSr = x.makeMessageType("agent.v1.McpToolError", ()=>[
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
            T: WOo,
            repeated: !0
        }
    ]), gmn = x.makeMessageType("agent.v1.McpToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Zti,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: cSr,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: qOo,
            oneof: "result"
        },
        {
            no: 4,
            name: "permission_denied",
            kind: "message",
            T: zOo,
            oneof: "result"
        }
    ]), ttt = x.makeMessageType("agent.v1.McpToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: U$e
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: gmn
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
