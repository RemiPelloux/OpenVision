import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { Kve, b4e } from "./todo_tool_pb.js";
import { x } from "./tslib.es6.js";
var j7t, vGs, q7t, UQe, uDn, _Gs, WTu, E4i;
export { E4i, UQe, WTu, _Gs, j7t, q7t, uDn, vGs };
var __wakaru_Lyt_initialized = false;
export function Lyt() {
if (__wakaru_Lyt_initialized) return;
__wakaru_Lyt_initialized = true;
"use strict";
x(), bi(), b4e(), j7t = k.makeMessageType("agent.v1.CreatePlanToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: q7t
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: UQe
        }
    ]), vGs = k.makeMessageType("agent.v1.Phase", ()=>[
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
            T: Kve,
            repeated: !0
        }
    ]), q7t = k.makeMessageType("agent.v1.CreatePlanArgs", ()=>[
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
            T: Kve,
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
            T: vGs,
            repeated: !0
        }
    ]), UQe = k.makeMessageType("agent.v1.CreatePlanResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: uDn,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: _Gs,
            oneof: "result"
        },
        {
            no: 3,
            name: "plan_uri",
            kind: "scalar",
            T: 9
        }
    ]), uDn = k.makeMessageType("agent.v1.CreatePlanSuccess", []), _Gs = k.makeMessageType("agent.v1.CreatePlanError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), WTu = k.makeMessageType("agent.v1.CreatePlanRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: q7t
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), E4i = k.makeMessageType("agent.v1.CreatePlanRequestResponse", ()=>[
        {
            no: 1,
            name: "result",
            kind: "message",
            T: UQe
        }
    ]);

}
