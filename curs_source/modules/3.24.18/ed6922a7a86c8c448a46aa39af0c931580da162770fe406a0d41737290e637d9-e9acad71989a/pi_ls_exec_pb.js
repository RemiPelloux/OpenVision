import { RMe, rde } from "./pi_common_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var hOu, pOu, mOu, gOu;
export { gOu, hOu, mOu, pOu };
var __wakaru_Qfv_initialized = false;
export function Qfv() {
if (__wakaru_Qfv_initialized) return;
__wakaru_Qfv_initialized = true;
"use strict";
x(), bi(), RMe(), hOu = k.makeMessageType("agent.v1.PiLsExecArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), pOu = k.makeMessageType("agent.v1.PiLsExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: mOu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: gOu,
            oneof: "result"
        }
    ]), mOu = k.makeMessageType("agent.v1.PiLsExecSuccess", ()=>[
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
            name: "entry_limit_reached",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), gOu = k.makeMessageType("agent.v1.PiLsExecError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
