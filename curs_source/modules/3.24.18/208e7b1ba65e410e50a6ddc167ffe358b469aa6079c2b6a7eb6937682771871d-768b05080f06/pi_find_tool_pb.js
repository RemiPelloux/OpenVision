import { Jc, zi } from "./pi_common_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var qse, Kse, zse, Yse, Jse;
export { Jse, Kse, Yse, qse, zse };
var __wakaru_uKe_initialized = false;
export function uKe() {
if (__wakaru_uKe_initialized) return;
__wakaru_uKe_initialized = true;
"use strict";
h(), F(), zi(), qse = c.makeMessageType("agent.v1.PiFindToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Kse
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: zse
        }
    ]), Kse = c.makeMessageType("agent.v1.PiFindToolArgs", ()=>[
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
    ]), zse = c.makeMessageType("agent.v1.PiFindToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Yse,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Jse,
            oneof: "result"
        }
    ]), Yse = c.makeMessageType("agent.v1.PiFindToolSuccess", ()=>[
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
        },
        {
            no: 3,
            name: "result_limit_reached",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), Jse = c.makeMessageType("agent.v1.PiFindToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
