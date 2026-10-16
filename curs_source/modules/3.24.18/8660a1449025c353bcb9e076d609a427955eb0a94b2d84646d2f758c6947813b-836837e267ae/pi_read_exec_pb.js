import { Vke, j$e } from "./pi_common_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var twd, nwd, iwd, rwd;
export { iwd, nwd, rwd, twd };
var __wakaru_DIy_initialized = false;
export function DIy() {
if (__wakaru_DIy_initialized) return;
__wakaru_DIy_initialized = true;
"use strict";
E(), hr(), j$e(), twd = x.makeMessageType("agent.v1.PiReadExecArgs", ()=>[
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
    ]), nwd = x.makeMessageType("agent.v1.PiReadExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: iwd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: rwd,
            oneof: "result"
        }
    ]), iwd = x.makeMessageType("agent.v1.PiReadExecSuccess", ()=>[
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
        }
    ]), rwd = x.makeMessageType("agent.v1.PiReadExecError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
