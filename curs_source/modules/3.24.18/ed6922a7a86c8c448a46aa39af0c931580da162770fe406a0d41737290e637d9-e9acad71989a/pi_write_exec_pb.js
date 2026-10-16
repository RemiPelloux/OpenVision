import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var J2u, eOu, tOu, nOu, iOu;
export { J2u, eOu, iOu, nOu, tOu };
var __wakaru_Yfv_initialized = false;
export function Yfv() {
if (__wakaru_Yfv_initialized) return;
__wakaru_Yfv_initialized = true;
"use strict";
x(), bi(), J2u = k.makeMessageType("agent.v1.PiWriteExecArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), eOu = k.makeMessageType("agent.v1.PiWriteExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: tOu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: nOu,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: iOu,
            oneof: "result"
        }
    ]), tOu = k.makeMessageType("agent.v1.PiWriteExecSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        }
    ]), nOu = k.makeMessageType("agent.v1.PiWriteExecError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), iOu = k.makeMessageType("agent.v1.PiWriteExecRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);

}
