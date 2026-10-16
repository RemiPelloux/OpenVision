import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Vbd, Kbd, Ybd, Xbd, Zbd, Qbd;
export { Kbd, Qbd, Vbd, Xbd, Ybd, Zbd };
var __wakaru_wIy_initialized = false;
export function wIy() {
if (__wakaru_wIy_initialized) return;
__wakaru_wIy_initialized = true;
"use strict";
E(), hr(), Vbd = x.makeMessageType("agent.v1.PiWriteToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Kbd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Ybd
        }
    ]), Kbd = x.makeMessageType("agent.v1.PiWriteToolArgs", ()=>[
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
    ]), Ybd = x.makeMessageType("agent.v1.PiWriteToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Xbd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Zbd,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: Qbd,
            oneof: "result"
        }
    ]), Xbd = x.makeMessageType("agent.v1.PiWriteToolSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        }
    ]), Zbd = x.makeMessageType("agent.v1.PiWriteToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Qbd = x.makeMessageType("agent.v1.PiWriteToolRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);

}
