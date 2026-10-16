import { $4t, nSr } from "./diagnostics_exec_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var s9o, o9o, zkd, Vkd;
export { Vkd, o9o, s9o, zkd };
var __wakaru_Kkd_initialized = false;
export function Kkd() {
if (__wakaru_Kkd_initialized) return;
__wakaru_Kkd_initialized = true;
"use strict";
E(), hr(), $4t(), s9o = x.makeMessageType("agent.v1.CanvasDiagnosticsArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), o9o = x.makeMessageType("agent.v1.CanvasDiagnosticsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: zkd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Vkd,
            oneof: "result"
        },
        {
            no: 3,
            name: "canvas_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "save_state",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "save_detail",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), zkd = x.makeMessageType("agent.v1.CanvasDiagnosticsSuccess", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diagnostics",
            kind: "message",
            T: nSr,
            repeated: !0
        }
    ]), Vkd = x.makeMessageType("agent.v1.CanvasDiagnosticsError", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
