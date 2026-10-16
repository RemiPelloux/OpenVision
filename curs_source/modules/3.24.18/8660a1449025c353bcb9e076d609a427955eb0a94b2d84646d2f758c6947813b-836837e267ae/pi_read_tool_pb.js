import { Vke, j$e } from "./pi_common_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Rbd, Pbd, Mbd, Dbd, Nbd;
export { Dbd, Mbd, Nbd, Pbd, Rbd };
var __wakaru_SIy_initialized = false;
export function SIy() {
if (__wakaru_SIy_initialized) return;
__wakaru_SIy_initialized = true;
"use strict";
E(), hr(), j$e(), Rbd = x.makeMessageType("agent.v1.PiReadToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Pbd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Mbd
        }
    ]), Pbd = x.makeMessageType("agent.v1.PiReadToolArgs", ()=>[
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
    ]), Mbd = x.makeMessageType("agent.v1.PiReadToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Dbd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Nbd,
            oneof: "result"
        }
    ]), Dbd = x.makeMessageType("agent.v1.PiReadToolSuccess", ()=>[
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
    ]), Nbd = x.makeMessageType("agent.v1.PiReadToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
