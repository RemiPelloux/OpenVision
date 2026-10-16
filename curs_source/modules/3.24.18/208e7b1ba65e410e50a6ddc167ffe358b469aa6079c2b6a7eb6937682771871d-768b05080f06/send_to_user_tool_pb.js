import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var mse, pse, hse, gse, fse;
export { fse, gse, hse, mse, pse };
var __wakaru_aKe_initialized = false;
export function aKe() {
if (__wakaru_aKe_initialized) return;
__wakaru_aKe_initialized = true;
"use strict";
h(), F(), mse = c.makeMessageType("agent.v1.SendToUserArgs", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), pse = c.makeMessageType("agent.v1.SendToUserSuccess", []), hse = c.makeMessageType("agent.v1.SendToUserError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), gse = c.makeMessageType("agent.v1.SendToUserResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: pse,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: hse,
            oneof: "result"
        }
    ]), fse = c.makeMessageType("agent.v1.SendToUserToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: mse
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: gse
        }
    ]);

}
