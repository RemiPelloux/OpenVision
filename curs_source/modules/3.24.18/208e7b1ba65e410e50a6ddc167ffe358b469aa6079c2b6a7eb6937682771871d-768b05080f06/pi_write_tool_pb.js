import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Lse, Use, xse, Fse, Wse, Bse;
export { Bse, Fse, Lse, Use, Wse, xse };
var __wakaru_lKe_initialized = false;
export function lKe() {
if (__wakaru_lKe_initialized) return;
__wakaru_lKe_initialized = true;
"use strict";
h(), F(), Lse = c.makeMessageType("agent.v1.PiWriteToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Use
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: xse
        }
    ]), Use = c.makeMessageType("agent.v1.PiWriteToolArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), xse = c.makeMessageType("agent.v1.PiWriteToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Fse,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Wse,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: Bse,
            oneof: "result"
        }
    ]), Fse = c.makeMessageType("agent.v1.PiWriteToolSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        }
    ]), Wse = c.makeMessageType("agent.v1.PiWriteToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Bse = c.makeMessageType("agent.v1.PiWriteToolRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);

}
