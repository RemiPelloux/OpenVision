import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Tne, kne, Sne, yne, wne;
export { Sne, Tne, kne, wne, yne };
var __wakaru_Hqe_initialized = false;
export function Hqe() {
if (__wakaru_Hqe_initialized) return;
__wakaru_Hqe_initialized = true;
"use strict";
h(), F(), Tne = c.makeMessageType("agent.v1.StartGrindPlanningArgs", ()=>[
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
    ]), kne = c.makeMessageType("agent.v1.StartGrindPlanningResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Sne,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: yne,
            oneof: "result"
        }
    ]), Sne = c.makeMessageType("agent.v1.StartGrindPlanningSuccess", []), yne = c.makeMessageType("agent.v1.StartGrindPlanningError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), wne = c.makeMessageType("agent.v1.StartGrindPlanningToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Tne
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: kne
        }
    ]);

}
