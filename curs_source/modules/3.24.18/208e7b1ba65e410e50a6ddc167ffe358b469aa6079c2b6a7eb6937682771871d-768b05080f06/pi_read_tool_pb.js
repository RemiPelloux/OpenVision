import { Jc, zi } from "./pi_common_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var _se, vse, Tse, kse, Sse;
export { Sse, Tse, _se, kse, vse };
var __wakaru_oKe_initialized = false;
export function oKe() {
if (__wakaru_oKe_initialized) return;
__wakaru_oKe_initialized = true;
"use strict";
h(), F(), zi(), _se = c.makeMessageType("agent.v1.PiReadToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: vse
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Tse
        }
    ]), vse = c.makeMessageType("agent.v1.PiReadToolArgs", ()=>[
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
    ]), Tse = c.makeMessageType("agent.v1.PiReadToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: kse,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Sse,
            oneof: "result"
        }
    ]), kse = c.makeMessageType("agent.v1.PiReadToolSuccess", ()=>[
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
            T: Jc,
            opt: !0
        }
    ]), Sse = c.makeMessageType("agent.v1.PiReadToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
