import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var N0e, NIu, OIu, aVs, FIu, BIu, UIu, $Iu, HIu, WIu;
export { $Iu, BIu, FIu, HIu, N0e, NIu, OIu, UIu, WIu, aVs };
var __wakaru_GIu_initialized = false;
export function GIu() {
if (__wakaru_GIu_initialized) return;
__wakaru_GIu_initialized = true;
"use strict";
x(), bi(), N0e = k.makeEnum("agent.v1.GoalStatus", [
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
]), NIu = k.makeMessageType("agent.v1.CreateGoalArgs", ()=>[
        {
            no: 1,
            name: "objective",
            kind: "scalar",
            T: 9
        }
    ]), OIu = k.makeMessageType("agent.v1.CreateGoalSuccess", []), aVs = k.makeMessageType("agent.v1.GoalError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), FIu = k.makeMessageType("agent.v1.CreateGoalResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: OIu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: aVs,
            oneof: "result"
        }
    ]), BIu = k.makeMessageType("agent.v1.CreateGoalToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: NIu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: FIu
        }
    ]), UIu = k.makeMessageType("agent.v1.UpdateGoalArgs", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(N0e)
        }
    ]), $Iu = k.makeMessageType("agent.v1.UpdateGoalSuccess", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(N0e)
        }
    ]), HIu = k.makeMessageType("agent.v1.UpdateGoalResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: $Iu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: aVs,
            oneof: "result"
        }
    ]), WIu = k.makeMessageType("agent.v1.UpdateGoalToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: UIu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: HIu
        }
    ]);

}
