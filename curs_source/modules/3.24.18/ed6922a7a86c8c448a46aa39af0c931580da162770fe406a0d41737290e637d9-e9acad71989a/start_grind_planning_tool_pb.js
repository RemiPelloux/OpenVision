import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var mEu, gEu, fEu, vEu, _Eu;
export { _Eu, fEu, gEu, mEu, vEu };
var __wakaru_adv_initialized = false;
export function adv() {
if (__wakaru_adv_initialized) return;
__wakaru_adv_initialized = true;
"use strict";
x(), bi(), mEu = k.makeMessageType("agent.v1.StartGrindPlanningArgs", ()=>[
        {
            no: 1,
            name: "explanation",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), gEu = k.makeMessageType("agent.v1.StartGrindPlanningResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: fEu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: vEu,
            oneof: "result"
        }
    ]), fEu = k.makeMessageType("agent.v1.StartGrindPlanningSuccess", []), vEu = k.makeMessageType("agent.v1.StartGrindPlanningError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), _Eu = k.makeMessageType("agent.v1.StartGrindPlanningToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: mEu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: gEu
        }
    ]);

}
