import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var qZ, KZ, zZ, YZ, JZ, XZ, QZ, ZZ, eee;
export { JZ, KZ, QZ, XZ, YZ, ZZ, eee, qZ, zZ };
var __wakaru_tee_initialized = false;
export function tee() {
if (__wakaru_tee_initialized) return;
__wakaru_tee_initialized = true;
"use strict";
h(), F(), qZ = c.makeMessageType("agent.v1.DeleteArgs", ()=>[
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
    ]), KZ = c.makeMessageType("agent.v1.DeleteResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: zZ,
            oneof: "result"
        },
        {
            no: 2,
            name: "file_not_found",
            kind: "message",
            T: YZ,
            oneof: "result"
        },
        {
            no: 3,
            name: "not_file",
            kind: "message",
            T: JZ,
            oneof: "result"
        },
        {
            no: 4,
            name: "permission_denied",
            kind: "message",
            T: XZ,
            oneof: "result"
        },
        {
            no: 5,
            name: "file_busy",
            kind: "message",
            T: QZ,
            oneof: "result"
        },
        {
            no: 6,
            name: "rejected",
            kind: "message",
            T: ZZ,
            oneof: "result"
        },
        {
            no: 7,
            name: "error",
            kind: "message",
            T: eee,
            oneof: "result"
        }
    ]), zZ = c.makeMessageType("agent.v1.DeleteSuccess", ()=>[
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
    ]), YZ = c.makeMessageType("agent.v1.DeleteFileNotFound", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), JZ = c.makeMessageType("agent.v1.DeleteNotFile", ()=>[
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
    ]), XZ = c.makeMessageType("agent.v1.DeletePermissionDenied", ()=>[
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
    ]), QZ = c.makeMessageType("agent.v1.DeleteFileBusy", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), ZZ = c.makeMessageType("agent.v1.DeleteRejected", ()=>[
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
    ]), eee = c.makeMessageType("agent.v1.DeleteError", ()=>[
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
