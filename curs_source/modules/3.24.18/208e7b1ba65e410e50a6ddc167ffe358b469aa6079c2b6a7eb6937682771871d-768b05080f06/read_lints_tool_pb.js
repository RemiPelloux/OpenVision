import { ete, ew } from "./diagnostics_exec_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
import { So, bg } from "./utils_pb.js";
var tte, nte, rte, ste, ite, ate, ote, cte;
export { ate, cte, ite, nte, ote, rte, ste, tte };
var __wakaru_Nqe_initialized = false;
export function Nqe() {
if (__wakaru_Nqe_initialized) return;
__wakaru_Nqe_initialized = true;
"use strict";
h(), F(), ew(), So(), tte = c.makeMessageType("agent.v1.ReadLintsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: nte
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: rte
        }
    ]), nte = c.makeMessageType("agent.v1.ReadLintsToolArgs", ()=>[
        {
            no: 1,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), rte = c.makeMessageType("agent.v1.ReadLintsToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ste,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: cte,
            oneof: "result"
        }
    ]), ste = c.makeMessageType("agent.v1.ReadLintsToolSuccess", ()=>[
        {
            no: 1,
            name: "file_diagnostics",
            kind: "message",
            T: ite,
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
    ]), ite = c.makeMessageType("agent.v1.FileDiagnostics", ()=>[
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
            T: ate,
            repeated: !0
        },
        {
            no: 3,
            name: "diagnostics_count",
            kind: "scalar",
            T: 5
        }
    ]), ate = c.makeMessageType("agent.v1.DiagnosticItem", ()=>[
        {
            no: 1,
            name: "severity",
            kind: "enum",
            T: c.getEnumType(ete)
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: ote
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
    ]), ote = c.makeMessageType("agent.v1.DiagnosticRange", ()=>[
        {
            no: 1,
            name: "start",
            kind: "message",
            T: bg
        },
        {
            no: 2,
            name: "end",
            kind: "message",
            T: bg
        }
    ]), cte = c.makeMessageType("agent.v1.ReadLintsToolError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);

}
