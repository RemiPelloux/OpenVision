import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var jEu, qEu, zEu, KEu, YEu;
export { KEu, YEu, jEu, qEu, zEu };
var __wakaru_ldv_initialized = false;
export function ldv() {
if (__wakaru_ldv_initialized) return;
__wakaru_ldv_initialized = true;
"use strict";
x(), bi(), jEu = k.makeMessageType("agent.v1.BlameByFilePathArgs", ()=>[
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
    ]), qEu = k.makeMessageType("agent.v1.BlameByFilePathSuccess", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), zEu = k.makeMessageType("agent.v1.BlameByFilePathError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), KEu = k.makeMessageType("agent.v1.BlameByFilePathResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: qEu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: zEu,
            oneof: "result"
        }
    ]), YEu = k.makeMessageType("agent.v1.BlameByFilePathToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: jEu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: KEu
        }
    ]);

}
