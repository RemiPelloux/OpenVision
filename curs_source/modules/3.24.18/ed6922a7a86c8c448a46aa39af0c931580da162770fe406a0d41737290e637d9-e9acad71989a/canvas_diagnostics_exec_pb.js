import { Myt, _4i } from "./diagnostics_exec_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var vYs, _Ys, D2u, M2u;
export { D2u, M2u, _Ys, vYs };
var __wakaru_P2u_initialized = false;
export function P2u() {
if (__wakaru_P2u_initialized) return;
__wakaru_P2u_initialized = true;
"use strict";
x(), bi(), Myt(), vYs = k.makeMessageType("agent.v1.CanvasDiagnosticsArgs", ()=>[
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
    ]), _Ys = k.makeMessageType("agent.v1.CanvasDiagnosticsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: D2u,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: M2u,
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
    ]), D2u = k.makeMessageType("agent.v1.CanvasDiagnosticsSuccess", ()=>[
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
            T: _4i,
            repeated: !0
        }
    ]), M2u = k.makeMessageType("agent.v1.CanvasDiagnosticsError", ()=>[
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
