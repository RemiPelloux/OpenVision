import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { Het, Wke } from "./sandbox_pb.js";
import { E } from "./tslib.es6.js";
var V_t, s5e, Gti, umn, K_t, NOo, LOo, Vyr, Kyr, Yyr, Xyr;
export { Gti, K_t, Kyr, LOo, NOo, V_t, Vyr, Xyr, Yyr, s5e, umn };
var __wakaru_O4t_initialized = false;
export function O4t() {
if (__wakaru_O4t_initialized) return;
__wakaru_O4t_initialized = true;
"use strict";
E(), hr(), Het(), V_t = x.makeMessageType("agent.v1.GrepArgs", ()=>[
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
            T: Wke,
            opt: !0
        },
        {
            no: 16,
            name: "offset",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), s5e = x.makeMessageType("agent.v1.GrepResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: umn,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Gti,
            oneof: "result"
        }
    ]), Gti = x.makeMessageType("agent.v1.GrepError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), umn = x.makeMessageType("agent.v1.GrepSuccess", ()=>[
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
                T: K_t
            }
        },
        {
            no: 5,
            name: "active_editor_result",
            kind: "message",
            T: K_t,
            opt: !0
        }
    ]), K_t = x.makeMessageType("agent.v1.GrepUnionResult", ()=>[
        {
            no: 1,
            name: "count",
            kind: "message",
            T: NOo,
            oneof: "result"
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: Vyr,
            oneof: "result"
        },
        {
            no: 3,
            name: "content",
            kind: "message",
            T: Kyr,
            oneof: "result"
        }
    ]), NOo = x.makeMessageType("agent.v1.GrepCountResult", ()=>[
        {
            no: 1,
            name: "counts",
            kind: "message",
            T: LOo,
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
    ]), LOo = x.makeMessageType("agent.v1.GrepFileCount", ()=>[
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
    ]), Vyr = x.makeMessageType("agent.v1.GrepFilesResult", ()=>[
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
    ]), Kyr = x.makeMessageType("agent.v1.GrepContentResult", ()=>[
        {
            no: 1,
            name: "matches",
            kind: "message",
            T: Yyr,
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
    ]), Yyr = x.makeMessageType("agent.v1.GrepFileMatch", ()=>[
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
            T: Xyr,
            repeated: !0
        }
    ]), Xyr = x.makeMessageType("agent.v1.GrepContentMatch", ()=>[
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
