import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var hIu, pIu, mIu, gIu, fIu, vIu;
export { fIu, gIu, hIu, mIu, pIu, vIu };
var __wakaru_ydv_initialized = false;
export function ydv() {
if (__wakaru_ydv_initialized) return;
__wakaru_ydv_initialized = true;
"use strict";
x(), bi(), hIu = k.makeMessageType("agent.v1.PiWriteToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: pIu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: mIu
        }
    ]), pIu = k.makeMessageType("agent.v1.PiWriteToolArgs", ()=>[
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
    ]), mIu = k.makeMessageType("agent.v1.PiWriteToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: gIu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: fIu,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: vIu,
            oneof: "result"
        }
    ]), gIu = k.makeMessageType("agent.v1.PiWriteToolSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        }
    ]), fIu = k.makeMessageType("agent.v1.PiWriteToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), vIu = k.makeMessageType("agent.v1.PiWriteToolRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);

}
