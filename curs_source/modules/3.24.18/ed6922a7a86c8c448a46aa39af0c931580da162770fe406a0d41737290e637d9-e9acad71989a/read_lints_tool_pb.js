import { Myt, OQe } from "./diagnostics_exec_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
import { S$, w0e } from "./utils_pb_2.js";
var JWs, eGs, tGs, fTu, vTu, _Tu, bTu, yTu;
export { JWs, _Tu, bTu, eGs, fTu, tGs, vTu, yTu };
var __wakaru_STu_initialized = false;
export function STu() {
if (__wakaru_STu_initialized) return;
__wakaru_STu_initialized = true;
"use strict";
x(), bi(), Myt(), w0e(), JWs = k.makeMessageType("agent.v1.ReadLintsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: eGs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: tGs
        }
    ]), eGs = k.makeMessageType("agent.v1.ReadLintsToolArgs", ()=>[
        {
            no: 1,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), tGs = k.makeMessageType("agent.v1.ReadLintsToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: fTu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: yTu,
            oneof: "result"
        }
    ]), fTu = k.makeMessageType("agent.v1.ReadLintsToolSuccess", ()=>[
        {
            no: 1,
            name: "file_diagnostics",
            kind: "message",
            T: vTu,
            repeated: !0
        },
        {
            no: 2,
            name: "total_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "total_diagnostics",
            kind: "scalar",
            T: 5
        }
    ]), vTu = k.makeMessageType("agent.v1.FileDiagnostics", ()=>[
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
            T: _Tu,
            repeated: !0
        },
        {
            no: 3,
            name: "diagnostics_count",
            kind: "scalar",
            T: 5
        }
    ]), _Tu = k.makeMessageType("agent.v1.DiagnosticItem", ()=>[
        {
            no: 1,
            name: "severity",
            kind: "enum",
            T: k.getEnumType(OQe)
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: bTu
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "source",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "code",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "is_stale",
            kind: "scalar",
            T: 8
        }
    ]), bTu = k.makeMessageType("agent.v1.DiagnosticRange", ()=>[
        {
            no: 1,
            name: "start",
            kind: "message",
            T: S$
        },
        {
            no: 2,
            name: "end",
            kind: "message",
            T: S$
        }
    ]), yTu = k.makeMessageType("agent.v1.ReadLintsToolError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);

}
