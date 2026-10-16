import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var ese, tse, nse, rse, sse, ise, ase;
export { ase, ese, ise, nse, rse, sse, tse };
var __wakaru_sKe_initialized = false;
export function sKe() {
if (__wakaru_sKe_initialized) return;
__wakaru_sKe_initialized = true;
"use strict";
h(), F(), ese = c.makeMessageType("agent.v1.SendMessageText", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), tse = c.makeMessageType("agent.v1.SendMessageAttachment", ()=>[
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
    ]), nse = c.makeMessageType("agent.v1.SendMessageArgs", ()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: ese,
            oneof: "message"
        },
        {
            no: 2,
            name: "attachment",
            kind: "message",
            T: tse,
            oneof: "message"
        }
    ]), rse = c.makeMessageType("agent.v1.SendMessageSuccess", ()=>[
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
    ]), sse = c.makeMessageType("agent.v1.SendMessageError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), ise = c.makeMessageType("agent.v1.SendMessageResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: rse,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: sse,
            oneof: "result"
        }
    ]), ase = c.makeMessageType("agent.v1.SendMessageToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: nse
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ise
        }
    ]);

}
