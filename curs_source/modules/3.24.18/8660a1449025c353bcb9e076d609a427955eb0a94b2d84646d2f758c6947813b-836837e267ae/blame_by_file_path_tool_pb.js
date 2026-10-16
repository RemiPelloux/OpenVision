import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var E_d, I_d, x_d, A_d, R_d;
export { A_d, E_d, I_d, R_d, x_d };
var __wakaru_hIy_initialized = false;
export function hIy() {
if (__wakaru_hIy_initialized) return;
__wakaru_hIy_initialized = true;
"use strict";
E(), hr(), E_d = x.makeMessageType("agent.v1.BlameByFilePathArgs", ()=>[
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
    ]), I_d = x.makeMessageType("agent.v1.BlameByFilePathSuccess", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), x_d = x.makeMessageType("agent.v1.BlameByFilePathError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), A_d = x.makeMessageType("agent.v1.BlameByFilePathResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: I_d,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: x_d,
            oneof: "result"
        }
    ]), R_d = x.makeMessageType("agent.v1.BlameByFilePathToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: E_d
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: A_d
        }
    ]);

}
