import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Qet, yQ, Jet, Kfd, Yfd, Xfd, Zfd, F$e, Wte, BOo;
export { BOo, F$e, Jet, Kfd, Qet, Wte, Xfd, Yfd, Zfd, yQ };
var __wakaru_U4t_initialized = false;
export function U4t() {
if (__wakaru_U4t_initialized) return;
__wakaru_U4t_initialized = true;
"use strict";
E(), hr(), Qet = x.makeMessageType("agent.v1.EditArgs", ()=>[
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
    ]), yQ = x.makeMessageType("agent.v1.EditResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Jet,
            oneof: "result"
        },
        {
            no: 2,
            name: "file_not_found",
            kind: "message",
            T: Kfd,
            oneof: "result"
        },
        {
            no: 3,
            name: "read_permission_denied",
            kind: "message",
            T: Yfd,
            oneof: "result"
        },
        {
            no: 4,
            name: "write_permission_denied",
            kind: "message",
            T: Xfd,
            oneof: "result"
        },
        {
            no: 6,
            name: "rejected",
            kind: "message",
            T: Zfd,
            oneof: "result"
        },
        {
            no: 7,
            name: "error",
            kind: "message",
            T: F$e,
            oneof: "result"
        }
    ]), Jet = x.makeMessageType("agent.v1.EditSuccess", ()=>[
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
    ]), Kfd = x.makeMessageType("agent.v1.EditFileNotFound", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), Yfd = x.makeMessageType("agent.v1.EditReadPermissionDenied", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), Xfd = x.makeMessageType("agent.v1.EditWritePermissionDenied", ()=>[
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
    ]), Zfd = x.makeMessageType("agent.v1.EditRejected", ()=>[
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
    ]), F$e = x.makeMessageType("agent.v1.EditError", ()=>[
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
    ]), Wte = x.makeMessageType("agent.v1.EditToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Qet
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: yQ
        }
    ]), BOo = x.makeMessageType("agent.v1.EditToolCallDelta", ()=>[
        {
            no: 1,
            name: "stream_content_delta",
            kind: "scalar",
            T: 9
        }
    ]);

}
