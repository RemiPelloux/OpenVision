import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Zvd, Qvd, Jvd, e_d, t_d;
export { Jvd, Qvd, Zvd, e_d, t_d };
var __wakaru_uIy_initialized = false;
export function uIy() {
if (__wakaru_uIy_initialized) return;
__wakaru_uIy_initialized = true;
"use strict";
E(), hr(), Zvd = x.makeMessageType("agent.v1.StartGrindPlanningArgs", ()=>[
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
    ]), Qvd = x.makeMessageType("agent.v1.StartGrindPlanningResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Jvd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: e_d,
            oneof: "result"
        }
    ]), Jvd = x.makeMessageType("agent.v1.StartGrindPlanningSuccess", []), e_d = x.makeMessageType("agent.v1.StartGrindPlanningError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), t_d = x.makeMessageType("agent.v1.StartGrindPlanningToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Zvd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Qvd
        }
    ]);

}
