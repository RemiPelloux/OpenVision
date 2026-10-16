import { RMe, rde } from "./pi_common_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var cOu, lOu, uOu, dOu;
export { cOu, dOu, lOu, uOu };
var __wakaru_Zfv_initialized = false;
export function Zfv() {
if (__wakaru_Zfv_initialized) return;
__wakaru_Zfv_initialized = true;
"use strict";
x(), bi(), RMe(), cOu = k.makeMessageType("agent.v1.PiFindExecArgs", ()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), lOu = k.makeMessageType("agent.v1.PiFindExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: uOu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: dOu,
            oneof: "result"
        }
    ]), uOu = k.makeMessageType("agent.v1.PiFindExecSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "truncation",
            kind: "message",
            T: rde,
            opt: !0
        },
        {
            no: 3,
            name: "result_limit_reached",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), dOu = k.makeMessageType("agent.v1.PiFindExecError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
