import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Tbd, Ebd, Ibd, xbd, Abd;
export { Abd, Ebd, Ibd, Tbd, xbd };
var __wakaru_yIy_initialized = false;
export function yIy() {
if (__wakaru_yIy_initialized) return;
__wakaru_yIy_initialized = true;
"use strict";
E(), hr(), Tbd = x.makeMessageType("agent.v1.SendToUserArgs", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), Ebd = x.makeMessageType("agent.v1.SendToUserSuccess", []), Ibd = x.makeMessageType("agent.v1.SendToUserError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), xbd = x.makeMessageType("agent.v1.SendToUserResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Ebd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Ibd,
            oneof: "result"
        }
    ]), Abd = x.makeMessageType("agent.v1.SendToUserToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Tbd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: xbd
        }
    ]);

}
