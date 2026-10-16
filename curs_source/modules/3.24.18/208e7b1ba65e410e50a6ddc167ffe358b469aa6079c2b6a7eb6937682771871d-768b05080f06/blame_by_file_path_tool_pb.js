import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var dre, ure, mre, pre, hre;
export { dre, hre, mre, pre, ure };
var __wakaru_Jqe_initialized = false;
export function Jqe() {
if (__wakaru_Jqe_initialized) return;
__wakaru_Jqe_initialized = true;
"use strict";
h(), F(), dre = c.makeMessageType("agent.v1.BlameByFilePathArgs", ()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), ure = c.makeMessageType("agent.v1.BlameByFilePathSuccess", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), mre = c.makeMessageType("agent.v1.BlameByFilePathError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), pre = c.makeMessageType("agent.v1.BlameByFilePathResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ure,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: mre,
            oneof: "result"
        }
    ]), hre = c.makeMessageType("agent.v1.BlameByFilePathToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: dre
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: pre
        }
    ]);

}
