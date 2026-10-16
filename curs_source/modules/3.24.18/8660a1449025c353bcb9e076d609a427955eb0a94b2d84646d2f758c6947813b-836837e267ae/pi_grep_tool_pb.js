import { Vke, j$e } from "./pi_common_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Jbd, eyd, tyd, nyd, iyd;
export { Jbd, eyd, iyd, nyd, tyd };
var __wakaru_CIy_initialized = false;
export function CIy() {
if (__wakaru_CIy_initialized) return;
__wakaru_CIy_initialized = true;
"use strict";
E(), hr(), j$e(), Jbd = x.makeMessageType("agent.v1.PiGrepToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: eyd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: tyd
        }
    ]), eyd = x.makeMessageType("agent.v1.PiGrepToolArgs", ()=>[
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
    ]), tyd = x.makeMessageType("agent.v1.PiGrepToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: nyd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: iyd,
            oneof: "result"
        }
    ]), nyd = x.makeMessageType("agent.v1.PiGrepToolSuccess", ()=>[
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
    ]), iyd = x.makeMessageType("agent.v1.PiGrepToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
