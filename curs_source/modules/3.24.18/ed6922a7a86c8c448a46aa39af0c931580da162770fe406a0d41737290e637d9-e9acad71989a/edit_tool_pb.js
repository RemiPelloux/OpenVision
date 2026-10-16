import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var Ryt, ide, G7t, uTu, dTu, hTu, pTu, NQe, xse, ZWs;
export { G7t, NQe, Ryt, ZWs, dTu, hTu, ide, pTu, uTu, xse };
var __wakaru_tDn_initialized = false;
export function tDn() {
if (__wakaru_tDn_initialized) return;
__wakaru_tDn_initialized = true;
"use strict";
x(), bi(), Ryt = k.makeMessageType("agent.v1.EditArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "stream_content",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), ide = k.makeMessageType("agent.v1.EditResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: G7t,
            oneof: "result"
        },
        {
            no: 2,
            name: "file_not_found",
            kind: "message",
            T: uTu,
            oneof: "result"
        },
        {
            no: 3,
            name: "read_permission_denied",
            kind: "message",
            T: dTu,
            oneof: "result"
        },
        {
            no: 4,
            name: "write_permission_denied",
            kind: "message",
            T: hTu,
            oneof: "result"
        },
        {
            no: 6,
            name: "rejected",
            kind: "message",
            T: pTu,
            oneof: "result"
        },
        {
            no: 7,
            name: "error",
            kind: "message",
            T: NQe,
            oneof: "result"
        }
    ]), G7t = k.makeMessageType("agent.v1.EditSuccess", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "lines_added",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "lines_removed",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "diff_string",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "before_full_file_content",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "after_full_file_content",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), uTu = k.makeMessageType("agent.v1.EditFileNotFound", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), dTu = k.makeMessageType("agent.v1.EditReadPermissionDenied", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), hTu = k.makeMessageType("agent.v1.EditWritePermissionDenied", ()=>[
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
        },
        {
            no: 3,
            name: "is_readonly",
            kind: "scalar",
            T: 8
        }
    ]), pTu = k.makeMessageType("agent.v1.EditRejected", ()=>[
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
    ]), NQe = k.makeMessageType("agent.v1.EditError", ()=>[
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
        },
        {
            no: 5,
            name: "model_visible_error",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), xse = k.makeMessageType("agent.v1.EditToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Ryt
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ide
        }
    ]), ZWs = k.makeMessageType("agent.v1.EditToolCallDelta", ()=>[
        {
            no: 1,
            name: "stream_content_delta",
            kind: "scalar",
            T: 9
        }
    ]);

}
