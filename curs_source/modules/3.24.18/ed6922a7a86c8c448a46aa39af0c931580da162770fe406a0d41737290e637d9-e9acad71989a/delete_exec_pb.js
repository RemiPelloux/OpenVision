import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var O7t, f4e, UWs, $Ws, X1u, Z1u, Q1u, HWs, YRn;
export { $Ws, HWs, O7t, Q1u, UWs, X1u, YRn, Z1u, f4e };
var __wakaru_F7t_initialized = false;
export function F7t() {
if (__wakaru_F7t_initialized) return;
__wakaru_F7t_initialized = true;
"use strict";
x(), bi(), O7t = k.makeMessageType("agent.v1.DeleteArgs", ()=>[
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
    ]), f4e = k.makeMessageType("agent.v1.DeleteResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: UWs,
            oneof: "result"
        },
        {
            no: 2,
            name: "file_not_found",
            kind: "message",
            T: $Ws,
            oneof: "result"
        },
        {
            no: 3,
            name: "not_file",
            kind: "message",
            T: X1u,
            oneof: "result"
        },
        {
            no: 4,
            name: "permission_denied",
            kind: "message",
            T: Z1u,
            oneof: "result"
        },
        {
            no: 5,
            name: "file_busy",
            kind: "message",
            T: Q1u,
            oneof: "result"
        },
        {
            no: 6,
            name: "rejected",
            kind: "message",
            T: HWs,
            oneof: "result"
        },
        {
            no: 7,
            name: "error",
            kind: "message",
            T: YRn,
            oneof: "result"
        }
    ]), UWs = k.makeMessageType("agent.v1.DeleteSuccess", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "deleted_file",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "file_size",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "prev_content",
            kind: "scalar",
            T: 9
        }
    ]), $Ws = k.makeMessageType("agent.v1.DeleteFileNotFound", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), X1u = k.makeMessageType("agent.v1.DeleteNotFile", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "actual_type",
            kind: "scalar",
            T: 9
        }
    ]), Z1u = k.makeMessageType("agent.v1.DeletePermissionDenied", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "client_visible_error",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "is_readonly",
            kind: "scalar",
            T: 8
        }
    ]), Q1u = k.makeMessageType("agent.v1.DeleteFileBusy", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), HWs = k.makeMessageType("agent.v1.DeleteRejected", ()=>[
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
    ]), YRn = k.makeMessageType("agent.v1.DeleteError", ()=>[
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
