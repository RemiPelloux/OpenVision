import { Vke, j$e } from "./pi_common_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var wwd, Cwd, Twd, Ewd;
export { Cwd, Ewd, Twd, wwd };
var __wakaru_BIy_initialized = false;
export function BIy() {
if (__wakaru_BIy_initialized) return;
__wakaru_BIy_initialized = true;
"use strict";
E(), hr(), j$e(), wwd = x.makeMessageType("agent.v1.PiFindExecArgs", ()=>[
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
    ]), Cwd = x.makeMessageType("agent.v1.PiFindExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Twd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Ewd,
            oneof: "result"
        }
    ]), Twd = x.makeMessageType("agent.v1.PiFindExecSuccess", ()=>[
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
            name: "result_limit_reached",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), Ewd = x.makeMessageType("agent.v1.PiFindExecError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
