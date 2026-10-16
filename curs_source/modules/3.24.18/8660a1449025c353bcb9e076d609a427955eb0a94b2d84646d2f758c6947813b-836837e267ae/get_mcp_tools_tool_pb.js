import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var P5o, P_d, M_d, D_d, M5o;
export { D_d, M5o, M_d, P5o, P_d };
var __wakaru_N_d_initialized = false;
export function N_d() {
if (__wakaru_N_d_initialized) return;
__wakaru_N_d_initialized = true;
"use strict";
E(), hr(), P5o = x.makeMessageType("agent.v1.GetMcpToolsArgs", ()=>[
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
    ]), P_d = x.makeMessageType("agent.v1.GetMcpToolsAgentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: M_d,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: D_d,
            oneof: "result"
        }
    ]), M_d = x.makeMessageType("agent.v1.GetMcpToolsSuccess", ()=>[
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
    ]), D_d = x.makeMessageType("agent.v1.GetMcpToolsError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), M5o = x.makeMessageType("agent.v1.GetMcpToolsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: P5o
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: P_d
        }
    ]);

}
