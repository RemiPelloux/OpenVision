import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var kre, Sre, yre, wre, Ere;
export { Ere, Sre, kre, wre, yre };
var __wakaru_Qqe_initialized = false;
export function Qqe() {
if (__wakaru_Qqe_initialized) return;
__wakaru_Qqe_initialized = true;
"use strict";
h(), F(), kre = c.makeMessageType("agent.v1.ReportBugArgs", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "severity",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "category",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "rationale",
            kind: "scalar",
            T: 9
        }
    ]), Sre = c.makeMessageType("agent.v1.ReportBugSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        }
    ]), yre = c.makeMessageType("agent.v1.ReportBugError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), wre = c.makeMessageType("agent.v1.ReportBugResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Sre,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: yre,
            oneof: "result"
        }
    ]), Ere = c.makeMessageType("agent.v1.ReportBugToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: kre
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: wre
        }
    ]);

}
