require.r(exports);
require.d(exports, {
    GrepArgs: ()=>GrepArgs,
    GrepContentMatch: ()=>GrepContentMatch,
    GrepContentResult: ()=>GrepContentResult,
    GrepCountResult: ()=>GrepCountResult,
    GrepError: ()=>GrepError,
    GrepFileCount: ()=>GrepFileCount,
    GrepFileMatch: ()=>GrepFileMatch,
    GrepFilesResult: ()=>GrepFilesResult,
    GrepResult: ()=>GrepResult,
    GrepStream: ()=>GrepStream,
    GrepSuccess: ()=>GrepSuccess,
    GrepUnionResult: ()=>GrepUnionResult
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _sandbox_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-71.js");
const GrepArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GrepArgs", ()=>[
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
            opt: true
        },
        {
            no: 3,
            name: "glob",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "output_mode",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "context_before",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 6,
            name: "context_after",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "context",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 8,
            name: "case_insensitive",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 9,
            name: "type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "head_limit",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 11,
            name: "multiline",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 12,
            name: "sort",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 13,
            name: "sort_ascending",
            kind: "scalar",
            T: 8,
            opt: true
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
            T: _sandbox_pb_js__WEBPACK_IMPORTED_MODULE_1__.SandboxPolicy,
            opt: true
        },
        {
            no: 16,
            name: "offset",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const GrepResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GrepResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: GrepSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: GrepError,
            oneof: "result"
        }
    ]);
const GrepError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GrepError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const GrepSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GrepSuccess", ()=>[
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
                T: GrepUnionResult
            }
        },
        {
            no: 5,
            name: "active_editor_result",
            kind: "message",
            T: GrepUnionResult,
            opt: true
        }
    ]);
const GrepUnionResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GrepUnionResult", ()=>[
        {
            no: 1,
            name: "count",
            kind: "message",
            T: GrepCountResult,
            oneof: "result"
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: GrepFilesResult,
            oneof: "result"
        },
        {
            no: 3,
            name: "content",
            kind: "message",
            T: GrepContentResult,
            oneof: "result"
        }
    ]);
const GrepCountResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GrepCountResult", ()=>[
        {
            no: 1,
            name: "counts",
            kind: "message",
            T: GrepFileCount,
            repeated: true
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
            opt: true
        },
        {
            no: 7,
            name: "offset_applied",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const GrepFileCount = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GrepFileCount", ()=>[
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
    ]);
const GrepFilesResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GrepFilesResult", ()=>[
        {
            no: 1,
            name: "files",
            kind: "scalar",
            T: 9,
            repeated: true
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
            opt: true
        },
        {
            no: 6,
            name: "offset_applied",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const GrepContentResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GrepContentResult", ()=>[
        {
            no: 1,
            name: "matches",
            kind: "message",
            T: GrepFileMatch,
            repeated: true
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
            opt: true
        },
        {
            no: 7,
            name: "offset_applied",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const GrepFileMatch = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GrepFileMatch", ()=>[
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
            T: GrepContentMatch,
            repeated: true
        }
    ]);
const GrepContentMatch = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GrepContentMatch", ()=>[
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
const GrepStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GrepStream", ()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        }
    ]);
