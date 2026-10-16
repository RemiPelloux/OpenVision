import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var pbd, mbd, gbd, fbd, vbd, _bd, bbd;
export { _bd, bbd, fbd, gbd, mbd, pbd, vbd };
var __wakaru__Iy_initialized = false;
export function _Iy() {
if (__wakaru__Iy_initialized) return;
__wakaru__Iy_initialized = true;
"use strict";
E(), hr(), pbd = x.makeMessageType("agent.v1.SendMessageText", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), mbd = x.makeMessageType("agent.v1.SendMessageAttachment", ()=>[
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
    ]), gbd = x.makeMessageType("agent.v1.SendMessageArgs", ()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: pbd,
            oneof: "message"
        },
        {
            no: 2,
            name: "attachment",
            kind: "message",
            T: mbd,
            oneof: "message"
        }
    ]), fbd = x.makeMessageType("agent.v1.SendMessageSuccess", ()=>[
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
    ]), vbd = x.makeMessageType("agent.v1.SendMessageError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), _bd = x.makeMessageType("agent.v1.SendMessageResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: fbd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: vbd,
            oneof: "result"
        }
    ]), bbd = x.makeMessageType("agent.v1.SendMessageToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: gbd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: _bd
        }
    ]);

}
