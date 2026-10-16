import { Vke, j$e } from "./pi_common_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var swd, owd, awd, lwd;
export { awd, lwd, owd, swd };
var __wakaru_NIy_initialized = false;
export function NIy() {
if (__wakaru_NIy_initialized) return;
__wakaru_NIy_initialized = true;
"use strict";
E(), hr(), j$e(), swd = x.makeMessageType("agent.v1.PiBashExecArgs", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timeout",
            kind: "scalar",
            T: 1,
            opt: !0
        }
    ]), owd = x.makeMessageType("agent.v1.PiBashExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: awd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: lwd,
            oneof: "result"
        }
    ]), awd = x.makeMessageType("agent.v1.PiBashExecSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "truncation",
            kind: "message",
            T: Vke,
            opt: !0
        },
        {
            no: 3,
            name: "full_output_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), lwd = x.makeMessageType("agent.v1.PiBashExecError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "truncation",
            kind: "message",
            T: Vke,
            opt: !0
        },
        {
            no: 3,
            name: "full_output_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]);

}
