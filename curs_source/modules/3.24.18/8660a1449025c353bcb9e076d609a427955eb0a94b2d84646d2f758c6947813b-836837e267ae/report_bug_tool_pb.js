import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var L_d, O_d, F_d, B_d, U_d;
export { B_d, F_d, L_d, O_d, U_d };
var __wakaru_pIy_initialized = false;
export function pIy() {
if (__wakaru_pIy_initialized) return;
__wakaru_pIy_initialized = true;
"use strict";
E(), hr(), L_d = x.makeMessageType("agent.v1.ReportBugArgs", ()=>[
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
    ]), O_d = x.makeMessageType("agent.v1.ReportBugSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        }
    ]), F_d = x.makeMessageType("agent.v1.ReportBugError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), B_d = x.makeMessageType("agent.v1.ReportBugResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: O_d,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: F_d,
            oneof: "result"
        }
    ]), U_d = x.makeMessageType("agent.v1.ReportBugToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: L_d
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: B_d
        }
    ]);

}
