import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var amn, Yet, ROo, POo, Ffd, Bfd, Ufd, MOo, $ti;
export { $ti, Bfd, Ffd, MOo, POo, ROo, Ufd, Yet, amn };
var __wakaru_lmn_initialized = false;
export function lmn() {
if (__wakaru_lmn_initialized) return;
__wakaru_lmn_initialized = true;
"use strict";
E(), hr(), amn = x.makeMessageType("agent.v1.DeleteArgs", ()=>[
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
    ]), Yet = x.makeMessageType("agent.v1.DeleteResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ROo,
            oneof: "result"
        },
        {
            no: 2,
            name: "file_not_found",
            kind: "message",
            T: POo,
            oneof: "result"
        },
        {
            no: 3,
            name: "not_file",
            kind: "message",
            T: Ffd,
            oneof: "result"
        },
        {
            no: 4,
            name: "permission_denied",
            kind: "message",
            T: Bfd,
            oneof: "result"
        },
        {
            no: 5,
            name: "file_busy",
            kind: "message",
            T: Ufd,
            oneof: "result"
        },
        {
            no: 6,
            name: "rejected",
            kind: "message",
            T: MOo,
            oneof: "result"
        },
        {
            no: 7,
            name: "error",
            kind: "message",
            T: $ti,
            oneof: "result"
        }
    ]), ROo = x.makeMessageType("agent.v1.DeleteSuccess", ()=>[
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
    ]), POo = x.makeMessageType("agent.v1.DeleteFileNotFound", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), Ffd = x.makeMessageType("agent.v1.DeleteNotFile", ()=>[
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
    ]), Bfd = x.makeMessageType("agent.v1.DeletePermissionDenied", ()=>[
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
    ]), Ufd = x.makeMessageType("agent.v1.DeleteFileBusy", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), MOo = x.makeMessageType("agent.v1.DeleteRejected", ()=>[
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
    ]), $ti = x.makeMessageType("agent.v1.DeleteError", ()=>[
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
