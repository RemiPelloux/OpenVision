import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var l5e, fyd, vyd, q5o, _yd, byd, yyd, Syd, kyd, wyd;
export { Syd, _yd, byd, fyd, kyd, l5e, q5o, vyd, wyd, yyd };
var __wakaru_Cyd_initialized = false;
export function Cyd() {
if (__wakaru_Cyd_initialized) return;
__wakaru_Cyd_initialized = true;
"use strict";
E(), hr(), l5e = x.makeEnum("agent.v1.GoalStatus", [
    {
        no: 0,
        name: "GOAL_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "GOAL_STATUS_ACTIVE",
        localName: "ACTIVE"
    },
    {
        no: 2,
        name: "GOAL_STATUS_PAUSED",
        localName: "PAUSED"
    },
    {
        no: 3,
        name: "GOAL_STATUS_COMPLETE",
        localName: "COMPLETE"
    },
    {
        no: 4,
        name: "GOAL_STATUS_CLEARED",
        localName: "CLEARED"
    }
]), fyd = x.makeMessageType("agent.v1.CreateGoalArgs", ()=>[
        {
            no: 1,
            name: "objective",
            kind: "scalar",
            T: 9
        }
    ]), vyd = x.makeMessageType("agent.v1.CreateGoalSuccess", []), q5o = x.makeMessageType("agent.v1.GoalError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), _yd = x.makeMessageType("agent.v1.CreateGoalResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: vyd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: q5o,
            oneof: "result"
        }
    ]), byd = x.makeMessageType("agent.v1.CreateGoalToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: fyd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: _yd
        }
    ]), yyd = x.makeMessageType("agent.v1.UpdateGoalArgs", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(l5e)
        }
    ]), Syd = x.makeMessageType("agent.v1.UpdateGoalSuccess", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(l5e)
        }
    ]), kyd = x.makeMessageType("agent.v1.UpdateGoalResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Syd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: q5o,
            oneof: "result"
        }
    ]), wyd = x.makeMessageType("agent.v1.UpdateGoalToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: yyd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: kyd
        }
    ]);

}
