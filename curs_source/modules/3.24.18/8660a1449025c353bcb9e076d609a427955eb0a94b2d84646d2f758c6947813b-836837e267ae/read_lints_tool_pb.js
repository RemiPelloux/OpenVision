import { $4t, Z_t } from "./diagnostics_exec_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
import { dY, i5e } from "./utils_pb_2.js";
var jOo, $Oo, HOo, evd, tvd, nvd, ivd, rvd;
export { $Oo, HOo, evd, ivd, jOo, nvd, rvd, tvd };
var __wakaru_svd_initialized = false;
export function svd() {
if (__wakaru_svd_initialized) return;
__wakaru_svd_initialized = true;
"use strict";
E(), hr(), $4t(), i5e(), jOo = x.makeMessageType("agent.v1.ReadLintsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: $Oo
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: HOo
        }
    ]), $Oo = x.makeMessageType("agent.v1.ReadLintsToolArgs", ()=>[
        {
            no: 1,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), HOo = x.makeMessageType("agent.v1.ReadLintsToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: evd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: rvd,
            oneof: "result"
        }
    ]), evd = x.makeMessageType("agent.v1.ReadLintsToolSuccess", ()=>[
        {
            no: 1,
            name: "file_diagnostics",
            kind: "message",
            T: tvd,
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
    ]), tvd = x.makeMessageType("agent.v1.FileDiagnostics", ()=>[
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
            T: nvd,
            repeated: !0
        },
        {
            no: 3,
            name: "diagnostics_count",
            kind: "scalar",
            T: 5
        }
    ]), nvd = x.makeMessageType("agent.v1.DiagnosticItem", ()=>[
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
            T: ivd
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
    ]), ivd = x.makeMessageType("agent.v1.DiagnosticRange", ()=>[
        {
            no: 1,
            name: "start",
            kind: "message",
            T: dY
        },
        {
            no: 2,
            name: "end",
            kind: "message",
            T: dY
        }
    ]), rvd = x.makeMessageType("agent.v1.ReadLintsToolError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);

}
