import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var uYs, h2u, p2u, m2u, g2u, f2u, v2u;
export { f2u, g2u, h2u, m2u, p2u, uYs, v2u };
var __wakaru_dYs_initialized = false;
export function dYs() {
if (__wakaru_dYs_initialized) return;
__wakaru_dYs_initialized = true;
"use strict";
x(), bi(), uYs = k.makeMessageType("agent.v1.WriteArgs", ()=>[
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
    ]), h2u = k.makeMessageType("agent.v1.WriteResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: p2u,
            oneof: "result"
        },
        {
            no: 3,
            name: "permission_denied",
            kind: "message",
            T: m2u,
            oneof: "result"
        },
        {
            no: 4,
            name: "no_space",
            kind: "message",
            T: g2u,
            oneof: "result"
        },
        {
            no: 5,
            name: "error",
            kind: "message",
            T: f2u,
            oneof: "result"
        },
        {
            no: 6,
            name: "rejected",
            kind: "message",
            T: v2u,
            oneof: "result"
        }
    ]), p2u = k.makeMessageType("agent.v1.WriteSuccess", ()=>[
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
    ]), m2u = k.makeMessageType("agent.v1.WritePermissionDenied", ()=>[
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
    ]), g2u = k.makeMessageType("agent.v1.WriteNoSpace", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), f2u = k.makeMessageType("agent.v1.WriteError", ()=>[
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
    ]), v2u = k.makeMessageType("agent.v1.WriteRejected", ()=>[
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
