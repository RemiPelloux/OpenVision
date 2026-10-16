import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var zvd, Vvd, Kvd, Yvd, Xvd;
export { Kvd, Vvd, Xvd, Yvd, zvd };
var __wakaru_cIy_initialized = false;
export function cIy() {
if (__wakaru_cIy_initialized) return;
__wakaru_cIy_initialized = true;
"use strict";
E(), hr(), zvd = x.makeMessageType("agent.v1.StartGrindExecutionArgs", ()=>[
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
    ]), Vvd = x.makeMessageType("agent.v1.StartGrindExecutionResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Kvd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Yvd,
            oneof: "result"
        }
    ]), Kvd = x.makeMessageType("agent.v1.StartGrindExecutionSuccess", []), Yvd = x.makeMessageType("agent.v1.StartGrindExecutionError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Xvd = x.makeMessageType("agent.v1.StartGrindExecutionToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: zvd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Vvd
        }
    ]);

}
