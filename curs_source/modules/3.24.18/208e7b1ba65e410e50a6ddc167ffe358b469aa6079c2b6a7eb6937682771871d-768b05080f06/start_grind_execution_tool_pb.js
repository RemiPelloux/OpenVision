import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var hne, gne, fne, _ne, vne;
export { _ne, fne, gne, hne, vne };
var __wakaru_jqe_initialized = false;
export function jqe() {
if (__wakaru_jqe_initialized) return;
__wakaru_jqe_initialized = true;
"use strict";
h(), F(), hne = c.makeMessageType("agent.v1.StartGrindExecutionArgs", ()=>[
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
    ]), gne = c.makeMessageType("agent.v1.StartGrindExecutionResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: fne,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: _ne,
            oneof: "result"
        }
    ]), fne = c.makeMessageType("agent.v1.StartGrindExecutionSuccess", []), _ne = c.makeMessageType("agent.v1.StartGrindExecutionError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), vne = c.makeMessageType("agent.v1.StartGrindExecutionToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: hne
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: gne
        }
    ]);

}
