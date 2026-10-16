import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var Mxu, Pxu, Lxu, Nxu, Oxu, Fxu, Bxu;
export { Bxu, Fxu, Lxu, Mxu, Nxu, Oxu, Pxu };
var __wakaru_gdv_initialized = false;
export function gdv() {
if (__wakaru_gdv_initialized) return;
__wakaru_gdv_initialized = true;
"use strict";
x(), bi(), Mxu = k.makeMessageType("agent.v1.SendMessageText", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), Pxu = k.makeMessageType("agent.v1.SendMessageAttachment", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "alt",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Lxu = k.makeMessageType("agent.v1.SendMessageArgs", ()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: Mxu,
            oneof: "message"
        },
        {
            no: 2,
            name: "attachment",
            kind: "message",
            T: Pxu,
            oneof: "message"
        }
    ]), Nxu = k.makeMessageType("agent.v1.SendMessageSuccess", ()=>[
        {
            no: 1,
            name: "timestamp",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "message_id",
            kind: "scalar",
            T: 9
        }
    ]), Oxu = k.makeMessageType("agent.v1.SendMessageError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Fxu = k.makeMessageType("agent.v1.SendMessageResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Nxu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Oxu,
            oneof: "result"
        }
    ]), Bxu = k.makeMessageType("agent.v1.SendMessageToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Lxu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Fxu
        }
    ]);

}
