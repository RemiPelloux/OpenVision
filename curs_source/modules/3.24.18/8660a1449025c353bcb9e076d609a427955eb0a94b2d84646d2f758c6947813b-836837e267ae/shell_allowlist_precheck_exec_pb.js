import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { $te, Hei, v4t } from "./shell_exec_pb.js";
import { E } from "./tslib.es6.js";
var Ykd, Xkd;
export { Xkd, Ykd };
var __wakaru_Zkd_initialized = false;
export function Zkd() {
if (__wakaru_Zkd_initialized) return;
__wakaru_Zkd_initialized = true;
"use strict";
E(), hr(), $te(), Ykd = x.makeMessageType("agent.v1.ShellAllowlistPrecheckArgs", ()=>[
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
            T: v4t
        },
        {
            no: 4,
            name: "classifier_result",
            kind: "message",
            T: Hei,
            opt: !0
        },
        {
            no: 5,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Xkd = x.makeMessageType("agent.v1.ShellAllowlistPrecheckResult", ()=>[
        {
            no: 1,
            name: "allowlisted",
            kind: "scalar",
            T: 8
        }
    ]);

}
