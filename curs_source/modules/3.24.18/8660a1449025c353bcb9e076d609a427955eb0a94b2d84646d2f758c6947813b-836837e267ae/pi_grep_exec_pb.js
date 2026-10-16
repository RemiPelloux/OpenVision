import { Vke, j$e } from "./pi_common_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var bwd, ywd, Swd, kwd;
export { Swd, bwd, kwd, ywd };
var __wakaru_FIy_initialized = false;
export function FIy() {
if (__wakaru_FIy_initialized) return;
__wakaru_FIy_initialized = true;
"use strict";
E(), hr(), j$e(), bwd = x.makeMessageType("agent.v1.PiGrepExecArgs", ()=>[
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
    ]), ywd = x.makeMessageType("agent.v1.PiGrepExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Swd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: kwd,
            oneof: "result"
        }
    ]), Swd = x.makeMessageType("agent.v1.PiGrepExecSuccess", ()=>[
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
            T: Vke,
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
    ]), kwd = x.makeMessageType("agent.v1.PiGrepExecError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
