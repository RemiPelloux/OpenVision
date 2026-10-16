import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { Zet, xAe } from "./todo_tool_pb.js";
import { E } from "./tslib.es6.js";
var H4t, t5o, W4t, J_t, nni, n5o, Evd, uSr;
export { Evd, H4t, J_t, W4t, n5o, nni, t5o, uSr };
var __wakaru_ebt_initialized = false;
export function ebt() {
if (__wakaru_ebt_initialized) return;
__wakaru_ebt_initialized = true;
"use strict";
E(), hr(), Zet(), H4t = x.makeMessageType("agent.v1.CreatePlanToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: W4t
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: J_t
        }
    ]), t5o = x.makeMessageType("agent.v1.Phase", ()=>[
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
            T: xAe,
            repeated: !0
        }
    ]), W4t = x.makeMessageType("agent.v1.CreatePlanArgs", ()=>[
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
            T: xAe,
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
            T: t5o,
            repeated: !0
        }
    ]), J_t = x.makeMessageType("agent.v1.CreatePlanResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: nni,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: n5o,
            oneof: "result"
        },
        {
            no: 3,
            name: "plan_uri",
            kind: "scalar",
            T: 9
        }
    ]), nni = x.makeMessageType("agent.v1.CreatePlanSuccess", []), n5o = x.makeMessageType("agent.v1.CreatePlanError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Evd = x.makeMessageType("agent.v1.CreatePlanRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: W4t
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), uSr = x.makeMessageType("agent.v1.CreatePlanRequestResponse", ()=>[
        {
            no: 1,
            name: "result",
            kind: "message",
            T: J_t
        }
    ]);

}
