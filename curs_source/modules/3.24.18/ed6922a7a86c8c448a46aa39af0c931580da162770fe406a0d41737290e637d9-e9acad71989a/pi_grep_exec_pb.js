import { RMe, rde } from "./pi_common_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var rOu, sOu, oOu, aOu;
export { aOu, oOu, rOu, sOu };
var __wakaru_Xfv_initialized = false;
export function Xfv() {
if (__wakaru_Xfv_initialized) return;
__wakaru_Xfv_initialized = true;
"use strict";
x(), bi(), RMe(), rOu = k.makeMessageType("agent.v1.PiGrepExecArgs", ()=>[
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
            name: "glob",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "ignore_case",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "literal",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "context",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), sOu = k.makeMessageType("agent.v1.PiGrepExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: oOu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: aOu,
            oneof: "result"
        }
    ]), oOu = k.makeMessageType("agent.v1.PiGrepExecSuccess", ()=>[
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
            name: "match_limit_reached",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 4,
            name: "lines_truncated",
            kind: "scalar",
            T: 8
        }
    ]), aOu = k.makeMessageType("agent.v1.PiGrepExecError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
