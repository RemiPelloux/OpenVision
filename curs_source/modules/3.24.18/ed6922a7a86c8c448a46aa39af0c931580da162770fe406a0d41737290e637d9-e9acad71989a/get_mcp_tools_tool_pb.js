import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var zGs, XEu, ZEu, QEu, KGs;
export { KGs, QEu, XEu, ZEu, zGs };
var __wakaru_JEu_initialized = false;
export function JEu() {
if (__wakaru_JEu_initialized) return;
__wakaru_JEu_initialized = true;
"use strict";
x(), bi(), zGs = k.makeMessageType("agent.v1.GetMcpToolsArgs", ()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "tool_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "pattern",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), XEu = k.makeMessageType("agent.v1.GetMcpToolsAgentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ZEu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: QEu,
            oneof: "result"
        }
    ]), ZEu = k.makeMessageType("agent.v1.GetMcpToolsSuccess", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "output_file_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), QEu = k.makeMessageType("agent.v1.GetMcpToolsError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), KGs = k.makeMessageType("agent.v1.GetMcpToolsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: zGs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: XEu
        }
    ]);

}
