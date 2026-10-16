import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var gre, fre, _re, vre, Tre;
export { Tre, _re, fre, gre, vre };
var __wakaru_Xqe_initialized = false;
export function Xqe() {
if (__wakaru_Xqe_initialized) return;
__wakaru_Xqe_initialized = true;
"use strict";
h(), F(), gre = c.makeMessageType("agent.v1.GetMcpToolsArgs", ()=>[
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
    ]), fre = c.makeMessageType("agent.v1.GetMcpToolsAgentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: _re,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: vre,
            oneof: "result"
        }
    ]), _re = c.makeMessageType("agent.v1.GetMcpToolsSuccess", ()=>[
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
    ]), vre = c.makeMessageType("agent.v1.GetMcpToolsError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Tre = c.makeMessageType("agent.v1.GetMcpToolsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: gre
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: fre
        }
    ]);

}
