import { Vke, j$e } from "./pi_common_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Iwd, xwd, Awd, Rwd;
export { Awd, Iwd, Rwd, xwd };
var __wakaru_UIy_initialized = false;
export function UIy() {
if (__wakaru_UIy_initialized) return;
__wakaru_UIy_initialized = true;
"use strict";
E(), hr(), j$e(), Iwd = x.makeMessageType("agent.v1.PiLsExecArgs", ()=>[
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
    ]), xwd = x.makeMessageType("agent.v1.PiLsExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Awd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Rwd,
            oneof: "result"
        }
    ]), Awd = x.makeMessageType("agent.v1.PiLsExecSuccess", ()=>[
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
            name: "entry_limit_reached",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), Rwd = x.makeMessageType("agent.v1.PiLsExecError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
