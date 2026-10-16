import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var lEu, uEu, dEu, hEu, pEu;
export { dEu, hEu, lEu, pEu, uEu };
var __wakaru_odv_initialized = false;
export function odv() {
if (__wakaru_odv_initialized) return;
__wakaru_odv_initialized = true;
"use strict";
x(), bi(), lEu = k.makeMessageType("agent.v1.StartGrindExecutionArgs", ()=>[
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
    ]), uEu = k.makeMessageType("agent.v1.StartGrindExecutionResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: dEu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: hEu,
            oneof: "result"
        }
    ]), dEu = k.makeMessageType("agent.v1.StartGrindExecutionSuccess", []), hEu = k.makeMessageType("agent.v1.StartGrindExecutionError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), pEu = k.makeMessageType("agent.v1.StartGrindExecutionToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: lEu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: uEu
        }
    ]);

}
