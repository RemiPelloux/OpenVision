import { Vke, j$e } from "./pi_common_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var cyd, uyd, dyd, hyd, pyd;
export { cyd, dyd, hyd, pyd, uyd };
var __wakaru_EIy_initialized = false;
export function EIy() {
if (__wakaru_EIy_initialized) return;
__wakaru_EIy_initialized = true;
"use strict";
E(), hr(), j$e(), cyd = x.makeMessageType("agent.v1.PiLsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: uyd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: dyd
        }
    ]), uyd = x.makeMessageType("agent.v1.PiLsToolArgs", ()=>[
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
    ]), dyd = x.makeMessageType("agent.v1.PiLsToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: hyd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: pyd,
            oneof: "result"
        }
    ]), hyd = x.makeMessageType("agent.v1.PiLsToolSuccess", ()=>[
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
    ]), pyd = x.makeMessageType("agent.v1.PiLsToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
