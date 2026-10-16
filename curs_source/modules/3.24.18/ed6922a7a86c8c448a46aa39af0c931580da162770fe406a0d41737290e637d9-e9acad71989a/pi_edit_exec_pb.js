import { XGs, dIu } from "./pi_edit_tool_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var K2u, Y2u, X2u, Z2u, Q2u;
export { K2u, Q2u, X2u, Y2u, Z2u };
var __wakaru_Kfv_initialized = false;
export function Kfv() {
if (__wakaru_Kfv_initialized) return;
__wakaru_Kfv_initialized = true;
"use strict";
x(), bi(), dIu(), K2u = k.makeMessageType("agent.v1.PiEditExecArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "edits",
            kind: "message",
            T: XGs,
            repeated: !0
        }
    ]), Y2u = k.makeMessageType("agent.v1.PiEditExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: X2u,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Z2u,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: Q2u,
            oneof: "result"
        }
    ]), X2u = k.makeMessageType("agent.v1.PiEditExecSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "patch",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "first_changed_line",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), Z2u = k.makeMessageType("agent.v1.PiEditExecError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Q2u = k.makeMessageType("agent.v1.PiEditExecRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);

}
