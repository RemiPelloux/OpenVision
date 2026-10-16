import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { U6e, zue } from "./sandbox_pb.js";
import { x } from "./tslib.es6.js";
var Iyt, Ayt, d4i, VWs, ZRn, eTu, tTu, jWs, qWs, zWs, KWs;
export { Ayt, Iyt, KWs, VWs, ZRn, d4i, eTu, jWs, qWs, tTu, zWs };
var __wakaru_B7t_initialized = false;
export function B7t() {
if (__wakaru_B7t_initialized) return;
__wakaru_B7t_initialized = true;
"use strict";
x(), bi(), U6e(), Iyt = k.makeMessageType("agent.v1.GrepArgs", ()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "glob",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "output_mode",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "context_before",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "context_after",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "context",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 8,
            name: "case_insensitive",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "head_limit",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 11,
            name: "multiline",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "sort",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "sort_ascending",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 14,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 15,
            name: "sandbox_policy",
            kind: "message",
            T: zue,
            opt: !0
        },
        {
            no: 16,
            name: "offset",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), Ayt = k.makeMessageType("agent.v1.GrepResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: VWs,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: d4i,
            oneof: "result"
        }
    ]), d4i = k.makeMessageType("agent.v1.GrepError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), VWs = k.makeMessageType("agent.v1.GrepSuccess", ()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "output_mode",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "workspace_results",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: ZRn
            }
        },
        {
            no: 5,
            name: "active_editor_result",
            kind: "message",
            T: ZRn,
            opt: !0
        }
    ]), ZRn = k.makeMessageType("agent.v1.GrepUnionResult", ()=>[
        {
            no: 1,
            name: "count",
            kind: "message",
            T: eTu,
            oneof: "result"
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: jWs,
            oneof: "result"
        },
        {
            no: 3,
            name: "content",
            kind: "message",
            T: qWs,
            oneof: "result"
        }
    ]), eTu = k.makeMessageType("agent.v1.GrepCountResult", ()=>[
        {
            no: 1,
            name: "counts",
            kind: "message",
            T: tTu,
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
            name: "total_matches",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "client_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "ripgrep_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "head_limit_applied",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "offset_applied",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), tTu = k.makeMessageType("agent.v1.GrepFileCount", ()=>[
        {
            no: 1,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "count",
            kind: "scalar",
            T: 5
        }
    ]), jWs = k.makeMessageType("agent.v1.GrepFilesResult", ()=>[
        {
            no: 1,
            name: "files",
            kind: "scalar",
            T: 9,
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
            name: "client_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "ripgrep_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "head_limit_applied",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "offset_applied",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), qWs = k.makeMessageType("agent.v1.GrepContentResult", ()=>[
        {
            no: 1,
            name: "matches",
            kind: "message",
            T: zWs,
            repeated: !0
        },
        {
            no: 2,
            name: "total_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "total_matched_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "client_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "ripgrep_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "head_limit_applied",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "offset_applied",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), zWs = k.makeMessageType("agent.v1.GrepFileMatch", ()=>[
        {
            no: 1,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "matches",
            kind: "message",
            T: KWs,
            repeated: !0
        }
    ]), KWs = k.makeMessageType("agent.v1.GrepContentMatch", ()=>[
        {
            no: 1,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "content_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "is_context_line",
            kind: "scalar",
            T: 8
        }
    ]);

}
