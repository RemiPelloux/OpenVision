import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var Vxu, jxu, qxu, zxu, Kxu;
export { Kxu, Vxu, jxu, qxu, zxu };
var __wakaru_vdv_initialized = false;
export function vdv() {
if (__wakaru_vdv_initialized) return;
__wakaru_vdv_initialized = true;
"use strict";
x(), bi(), Vxu = k.makeMessageType("agent.v1.SendToUserArgs", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), jxu = k.makeMessageType("agent.v1.SendToUserSuccess", []), qxu = k.makeMessageType("agent.v1.SendToUserError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), zxu = k.makeMessageType("agent.v1.SendToUserResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: jxu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: qxu,
            oneof: "result"
        }
    ]), Kxu = k.makeMessageType("agent.v1.SendToUserToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Vxu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: zxu
        }
    ]);

}
