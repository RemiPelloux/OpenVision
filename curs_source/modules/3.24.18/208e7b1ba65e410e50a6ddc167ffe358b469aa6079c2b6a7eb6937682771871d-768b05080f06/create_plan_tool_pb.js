import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { Vee, hu } from "./todo_tool_pb.js";
import { h } from "./tslib.es6.js";
var _te, vte, IN, AN, Tte, kte, Ste, yte;
export { AN, IN, Ste, Tte, _te, kte, vte, yte };
var __wakaru_Lqe_initialized = false;
export function Lqe() {
if (__wakaru_Lqe_initialized) return;
__wakaru_Lqe_initialized = true;
"use strict";
h(), F(), Vee(), _te = c.makeMessageType("agent.v1.CreatePlanToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: IN
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: AN
        }
    ]), vte = c.makeMessageType("agent.v1.Phase", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "todos",
            kind: "message",
            T: hu,
            repeated: !0
        }
    ]), IN = c.makeMessageType("agent.v1.CreatePlanArgs", ()=>[
        {
            no: 1,
            name: "plan",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "todos",
            kind: "message",
            T: hu,
            repeated: !0
        },
        {
            no: 3,
            name: "overview",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "is_project",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "phases",
            kind: "message",
            T: vte,
            repeated: !0
        }
    ]), AN = c.makeMessageType("agent.v1.CreatePlanResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Tte,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: kte,
            oneof: "result"
        },
        {
            no: 3,
            name: "plan_uri",
            kind: "scalar",
            T: 9
        }
    ]), Tte = c.makeMessageType("agent.v1.CreatePlanSuccess", []), kte = c.makeMessageType("agent.v1.CreatePlanError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Ste = c.makeMessageType("agent.v1.CreatePlanRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: IN
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), yte = c.makeMessageType("agent.v1.CreatePlanRequestResponse", ()=>[
        {
            no: 1,
            name: "result",
            kind: "message",
            T: AN
        }
    ]);

}
