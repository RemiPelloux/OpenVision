import { N5o, zbd } from "./pi_edit_tool_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var cwd, uwd, dwd, hwd, pwd;
export { cwd, dwd, hwd, pwd, uwd };
var __wakaru_LIy_initialized = false;
export function LIy() {
if (__wakaru_LIy_initialized) return;
__wakaru_LIy_initialized = true;
"use strict";
E(), hr(), zbd(), cwd = x.makeMessageType("agent.v1.PiEditExecArgs", ()=>[
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
            T: N5o,
            repeated: !0
        }
    ]), uwd = x.makeMessageType("agent.v1.PiEditExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: dwd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: hwd,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: pwd,
            oneof: "result"
        }
    ]), dwd = x.makeMessageType("agent.v1.PiEditExecSuccess", ()=>[
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
    ]), hwd = x.makeMessageType("agent.v1.PiEditExecError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), pwd = x.makeMessageType("agent.v1.PiEditExecRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);

}
