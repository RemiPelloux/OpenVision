import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { Sbt, hee, qxn } from "./shell_exec_pb.js";
import { x } from "./tslib.es6.js";
var L2u, N2u;
export { L2u, N2u };
var __wakaru_O2u_initialized = false;
export function O2u() {
if (__wakaru_O2u_initialized) return;
__wakaru_O2u_initialized = true;
"use strict";
x(), bi(), hee(), L2u = k.makeMessageType("agent.v1.ShellAllowlistPrecheckArgs", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "working_directory",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "parsing_result",
            kind: "message",
            T: Sbt
        },
        {
            no: 4,
            name: "classifier_result",
            kind: "message",
            T: qxn,
            opt: !0
        },
        {
            no: 5,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), N2u = k.makeMessageType("agent.v1.ShellAllowlistPrecheckResult", ()=>[
        {
            no: 1,
            name: "allowlisted",
            kind: "scalar",
            T: 8
        }
    ]);

}
