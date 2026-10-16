import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var nw, yie, wie, $N, Eie, bie, Rie, Cie, Iie, Aie;
export { $N, Aie, Cie, Eie, Iie, Rie, bie, nw, wie, yie };
var __wakaru_gKe_initialized = false;
export function gKe() {
if (__wakaru_gKe_initialized) return;
__wakaru_gKe_initialized = true;
"use strict";
h(), F(), nw = c.makeEnum("agent.v1.GoalStatus", [
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
]), yie = c.makeMessageType("agent.v1.CreateGoalArgs", ()=>[
        {
            no: 1,
            name: "objective",
            kind: "scalar",
            T: 9
        }
    ]), wie = c.makeMessageType("agent.v1.CreateGoalSuccess", []), $N = c.makeMessageType("agent.v1.GoalError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Eie = c.makeMessageType("agent.v1.CreateGoalResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: wie,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: $N,
            oneof: "result"
        }
    ]), bie = c.makeMessageType("agent.v1.CreateGoalToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: yie
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Eie
        }
    ]), Rie = c.makeMessageType("agent.v1.UpdateGoalArgs", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: c.getEnumType(nw)
        }
    ]), Cie = c.makeMessageType("agent.v1.UpdateGoalSuccess", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: c.getEnumType(nw)
        }
    ]), Iie = c.makeMessageType("agent.v1.UpdateGoalResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Cie,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: $N,
            oneof: "result"
        }
    ]), Aie = c.makeMessageType("agent.v1.UpdateGoalToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Rie
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Iie
        }
    ]);

}
