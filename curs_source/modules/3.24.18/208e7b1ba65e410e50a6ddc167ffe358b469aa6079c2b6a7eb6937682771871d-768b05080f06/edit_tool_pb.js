import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var $ee, jee, Hee, qee, Kee, zee, Yee, Jee, Xee, Qee;
export { $ee, Hee, Jee, Kee, Qee, Xee, Yee, jee, qee, zee };
var __wakaru_Mqe_initialized = false;
export function Mqe() {
if (__wakaru_Mqe_initialized) return;
__wakaru_Mqe_initialized = true;
"use strict";
h(), F(), $ee = c.makeMessageType("agent.v1.EditArgs", ()=>[
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
    ]), jee = c.makeMessageType("agent.v1.EditResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Hee,
            oneof: "result"
        },
        {
            no: 2,
            name: "file_not_found",
            kind: "message",
            T: qee,
            oneof: "result"
        },
        {
            no: 3,
            name: "read_permission_denied",
            kind: "message",
            T: Kee,
            oneof: "result"
        },
        {
            no: 4,
            name: "write_permission_denied",
            kind: "message",
            T: zee,
            oneof: "result"
        },
        {
            no: 6,
            name: "rejected",
            kind: "message",
            T: Yee,
            oneof: "result"
        },
        {
            no: 7,
            name: "error",
            kind: "message",
            T: Jee,
            oneof: "result"
        }
    ]), Hee = c.makeMessageType("agent.v1.EditSuccess", ()=>[
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
    ]), qee = c.makeMessageType("agent.v1.EditFileNotFound", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), Kee = c.makeMessageType("agent.v1.EditReadPermissionDenied", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), zee = c.makeMessageType("agent.v1.EditWritePermissionDenied", ()=>[
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
    ]), Yee = c.makeMessageType("agent.v1.EditRejected", ()=>[
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
    ]), Jee = c.makeMessageType("agent.v1.EditError", ()=>[
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
    ]), Xee = c.makeMessageType("agent.v1.EditToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: $ee
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: jee
        }
    ]), Qee = c.makeMessageType("agent.v1.EditToolCallDelta", ()=>[
        {
            no: 1,
            name: "stream_content_delta",
            kind: "scalar",
            T: 9
        }
    ]);

}
