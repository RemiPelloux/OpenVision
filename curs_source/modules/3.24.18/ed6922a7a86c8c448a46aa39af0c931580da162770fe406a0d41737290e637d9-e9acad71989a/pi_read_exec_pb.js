import { RMe, rde } from "./pi_common_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var $2u, H2u, W2u, G2u;
export { $2u, G2u, H2u, W2u };
var __wakaru_qfv_initialized = false;
export function qfv() {
if (__wakaru_qfv_initialized) return;
__wakaru_qfv_initialized = true;
"use strict";
x(), bi(), RMe(), $2u = k.makeMessageType("agent.v1.PiReadExecArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "offset",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), H2u = k.makeMessageType("agent.v1.PiReadExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: W2u,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: G2u,
            oneof: "result"
        }
    ]), W2u = k.makeMessageType("agent.v1.PiReadExecSuccess", ()=>[
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
        }
    ]), G2u = k.makeMessageType("agent.v1.PiReadExecError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
