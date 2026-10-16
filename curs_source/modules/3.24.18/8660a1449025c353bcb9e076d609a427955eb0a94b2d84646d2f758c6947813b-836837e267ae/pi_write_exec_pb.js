import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var mwd, gwd, fwd, vwd, _wd;
export { _wd, fwd, gwd, mwd, vwd };
var __wakaru_OIy_initialized = false;
export function OIy() {
if (__wakaru_OIy_initialized) return;
__wakaru_OIy_initialized = true;
"use strict";
E(), hr(), mwd = x.makeMessageType("agent.v1.PiWriteExecArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), gwd = x.makeMessageType("agent.v1.PiWriteExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: fwd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: vwd,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: _wd,
            oneof: "result"
        }
    ]), fwd = x.makeMessageType("agent.v1.PiWriteExecSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        }
    ]), vwd = x.makeMessageType("agent.v1.PiWriteExecError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), _wd = x.makeMessageType("agent.v1.PiWriteExecRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);

}
