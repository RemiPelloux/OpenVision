import { Vke, j$e } from "./pi_common_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var ryd, syd, oyd, ayd, lyd;
export { ayd, lyd, oyd, ryd, syd };
var __wakaru_TIy_initialized = false;
export function TIy() {
if (__wakaru_TIy_initialized) return;
__wakaru_TIy_initialized = true;
"use strict";
E(), hr(), j$e(), ryd = x.makeMessageType("agent.v1.PiFindToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: syd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: oyd
        }
    ]), syd = x.makeMessageType("agent.v1.PiFindToolArgs", ()=>[
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
    ]), oyd = x.makeMessageType("agent.v1.PiFindToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ayd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: lyd,
            oneof: "result"
        }
    ]), ayd = x.makeMessageType("agent.v1.PiFindToolSuccess", ()=>[
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
    ]), lyd = x.makeMessageType("agent.v1.PiFindToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
