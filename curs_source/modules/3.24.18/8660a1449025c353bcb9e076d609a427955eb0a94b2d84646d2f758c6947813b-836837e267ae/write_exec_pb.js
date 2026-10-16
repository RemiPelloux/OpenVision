import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Q4o, Ikd, xkd, Akd, Rkd, Pkd, Mkd;
export { Akd, Ikd, Mkd, Pkd, Q4o, Rkd, xkd };
var __wakaru_J4o_initialized = false;
export function J4o() {
if (__wakaru_J4o_initialized) return;
__wakaru_J4o_initialized = true;
"use strict";
E(), hr(), Q4o = x.makeMessageType("agent.v1.WriteArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "return_file_content_after_write",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "file_bytes",
            kind: "scalar",
            T: 12
        },
        {
            no: 6,
            name: "encoding_hint",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Ikd = x.makeMessageType("agent.v1.WriteResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: xkd,
            oneof: "result"
        },
        {
            no: 3,
            name: "permission_denied",
            kind: "message",
            T: Akd,
            oneof: "result"
        },
        {
            no: 4,
            name: "no_space",
            kind: "message",
            T: Rkd,
            oneof: "result"
        },
        {
            no: 5,
            name: "error",
            kind: "message",
            T: Pkd,
            oneof: "result"
        },
        {
            no: 6,
            name: "rejected",
            kind: "message",
            T: Mkd,
            oneof: "result"
        }
    ]), xkd = x.makeMessageType("agent.v1.WriteSuccess", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "lines_created",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "file_size",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "file_content_after_write",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Akd = x.makeMessageType("agent.v1.WritePermissionDenied", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "directory",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "operation",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "is_readonly",
            kind: "scalar",
            T: 8
        }
    ]), Rkd = x.makeMessageType("agent.v1.WriteNoSpace", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), Pkd = x.makeMessageType("agent.v1.WriteError", ()=>[
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
    ]), Mkd = x.makeMessageType("agent.v1.WriteRejected", ()=>[
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
    ]);

}
