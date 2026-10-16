require.r(exports);
require.d(exports, {
    ReadRange: ()=>ReadRange,
    ReadToolArgs: ()=>ReadToolArgs,
    ReadToolCall: ()=>ReadToolCall,
    ReadToolError: ()=>ReadToolError,
    ReadToolResult: ()=>ReadToolResult,
    ReadToolSuccess: ()=>ReadToolSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _cursor_rules_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-80.js");
const ReadToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ReadToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ReadToolResult
        }
    ]);
const ReadToolArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadToolArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "offset",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 5,
            name: "include_line_numbers",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const ReadToolResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReadToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ReadToolError,
            oneof: "result"
        }
    ]);
const ReadRange = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadRange", ()=>[
        {
            no: 1,
            name: "start_line",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "end_line",
            kind: "scalar",
            T: 13
        }
    ]);
const ReadToolSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadToolSuccess", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9,
            oneof: "output"
        },
        {
            no: 6,
            name: "data",
            kind: "scalar",
            T: 12,
            oneof: "output"
        },
        {
            no: 9,
            name: "data_blob_id",
            kind: "scalar",
            T: 12,
            oneof: "output"
        },
        {
            no: 10,
            name: "content_blob_id",
            kind: "scalar",
            T: 12,
            oneof: "output"
        },
        {
            no: 2,
            name: "is_empty",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "exceeded_limit",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "total_lines",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "file_size",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "read_range",
            kind: "message",
            T: ReadRange,
            opt: true
        },
        {
            no: 11,
            name: "include_line_numbers",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 12,
            name: "related_cursor_rule_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 13,
            name: "related_cursor_rules",
            kind: "message",
            T: _cursor_rules_pb_js__WEBPACK_IMPORTED_MODULE_1__.CursorRule,
            repeated: true
        }
    ]);
const ReadToolError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReadToolError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);
