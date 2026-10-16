import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var exu, txu, nxu, ixu, rxu;
export { exu, ixu, nxu, rxu, txu };
var __wakaru_udv_initialized = false;
export function udv() {
if (__wakaru_udv_initialized) return;
__wakaru_udv_initialized = true;
"use strict";
x(), bi(), exu = k.makeMessageType("agent.v1.ReportBugArgs", ()=>[
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
    ]), txu = k.makeMessageType("agent.v1.ReportBugSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        }
    ]), nxu = k.makeMessageType("agent.v1.ReportBugError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), ixu = k.makeMessageType("agent.v1.ReportBugResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: txu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: nxu,
            oneof: "result"
        }
    ]), rxu = k.makeMessageType("agent.v1.ReportBugToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: exu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ixu
        }
    ]);

}
