import { RMe, rde } from "./pi_common_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var _Iu, bIu, yIu, SIu, kIu;
export { SIu, _Iu, bIu, kIu, yIu };
var __wakaru_Sdv_initialized = false;
export function Sdv() {
if (__wakaru_Sdv_initialized) return;
__wakaru_Sdv_initialized = true;
"use strict";
x(), bi(), RMe(), _Iu = k.makeMessageType("agent.v1.PiGrepToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: bIu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: yIu
        }
    ]), bIu = k.makeMessageType("agent.v1.PiGrepToolArgs", ()=>[
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
    ]), yIu = k.makeMessageType("agent.v1.PiGrepToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SIu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: kIu,
            oneof: "result"
        }
    ]), SIu = k.makeMessageType("agent.v1.PiGrepToolSuccess", ()=>[
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
    ]), kIu = k.makeMessageType("agent.v1.PiGrepToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
