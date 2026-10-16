import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
import { i5e, n5e } from "./utils_pb_2.js";
var Z_t, Vti, ett, tSr, nSr, UOo, Qfd, iSr, Jfd;
export { Jfd, Qfd, UOo, Vti, Z_t, ett, iSr, nSr, tSr };
var __wakaru_$4t_initialized = false;
export function $4t() {
if (__wakaru_$4t_initialized) return;
__wakaru_$4t_initialized = true;
"use strict";
E(), hr(), i5e(), Z_t = x.makeEnum("agent.v1.DiagnosticSeverity", [
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
]), Vti = x.makeMessageType("agent.v1.DiagnosticsArgs", ()=>[
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
    ]), ett = x.makeMessageType("agent.v1.DiagnosticsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: tSr,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: UOo,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: Qfd,
            oneof: "result"
        },
        {
            no: 4,
            name: "file_not_found",
            kind: "message",
            T: iSr,
            oneof: "result"
        },
        {
            no: 5,
            name: "permission_denied",
            kind: "message",
            T: Jfd,
            oneof: "result"
        }
    ]), tSr = x.makeMessageType("agent.v1.DiagnosticsSuccess", ()=>[
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
        },
        {
            no: 3,
            name: "total_diagnostics",
            kind: "scalar",
            T: 5
        }
    ]), nSr = x.makeMessageType("agent.v1.Diagnostic", ()=>[
        {
            no: 1,
            name: "severity",
            kind: "enum",
            T: x.getEnumType(Z_t)
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: n5e
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
    ]), UOo = x.makeMessageType("agent.v1.DiagnosticsError", ()=>[
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
    ]), Qfd = x.makeMessageType("agent.v1.DiagnosticsRejected", ()=>[
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
    ]), iSr = x.makeMessageType("agent.v1.DiagnosticsFileNotFound", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), Jfd = x.makeMessageType("agent.v1.DiagnosticsPermissionDenied", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);

}
