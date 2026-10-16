import { Jc, zi } from "./pi_common_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Xse, Qse, Zse, eie, tie;
export { Qse, Xse, Zse, eie, tie };
var __wakaru_mKe_initialized = false;
export function mKe() {
if (__wakaru_mKe_initialized) return;
__wakaru_mKe_initialized = true;
"use strict";
h(), F(), zi(), Xse = c.makeMessageType("agent.v1.PiLsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Qse
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Zse
        }
    ]), Qse = c.makeMessageType("agent.v1.PiLsToolArgs", ()=>[
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
    ]), Zse = c.makeMessageType("agent.v1.PiLsToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: eie,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: tie,
            oneof: "result"
        }
    ]), eie = c.makeMessageType("agent.v1.PiLsToolSuccess", ()=>[
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
            name: "entry_limit_reached",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), tie = c.makeMessageType("agent.v1.PiLsToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
