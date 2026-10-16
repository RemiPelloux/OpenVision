import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
import { k0e, w0e } from "./utils_pb_2.js";
var OQe, nDn, y4e, v4i, _4i, QWs, mTu, b4i, gTu;
export { OQe, QWs, _4i, b4i, gTu, mTu, nDn, v4i, y4e };
var __wakaru_Myt_initialized = false;
export function Myt() {
if (__wakaru_Myt_initialized) return;
__wakaru_Myt_initialized = true;
"use strict";
x(), bi(), w0e(), OQe = k.makeEnum("agent.v1.DiagnosticSeverity", [
    {
        no: 0,
        name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "DIAGNOSTIC_SEVERITY_ERROR",
        localName: "ERROR"
    },
    {
        no: 2,
        name: "DIAGNOSTIC_SEVERITY_WARNING",
        localName: "WARNING"
    },
    {
        no: 3,
        name: "DIAGNOSTIC_SEVERITY_INFORMATION",
        localName: "INFORMATION"
    },
    {
        no: 4,
        name: "DIAGNOSTIC_SEVERITY_HINT",
        localName: "HINT"
    }
]), nDn = k.makeMessageType("agent.v1.DiagnosticsArgs", ()=>[
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
    ]), y4e = k.makeMessageType("agent.v1.DiagnosticsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: v4i,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: QWs,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: mTu,
            oneof: "result"
        },
        {
            no: 4,
            name: "file_not_found",
            kind: "message",
            T: b4i,
            oneof: "result"
        },
        {
            no: 5,
            name: "permission_denied",
            kind: "message",
            T: gTu,
            oneof: "result"
        }
    ]), v4i = k.makeMessageType("agent.v1.DiagnosticsSuccess", ()=>[
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
        },
        {
            no: 3,
            name: "total_diagnostics",
            kind: "scalar",
            T: 5
        }
    ]), _4i = k.makeMessageType("agent.v1.Diagnostic", ()=>[
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
            T: k0e
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
    ]), QWs = k.makeMessageType("agent.v1.DiagnosticsError", ()=>[
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
    ]), mTu = k.makeMessageType("agent.v1.DiagnosticsRejected", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), b4i = k.makeMessageType("agent.v1.DiagnosticsFileNotFound", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), gTu = k.makeMessageType("agent.v1.DiagnosticsPermissionDenied", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);

}
