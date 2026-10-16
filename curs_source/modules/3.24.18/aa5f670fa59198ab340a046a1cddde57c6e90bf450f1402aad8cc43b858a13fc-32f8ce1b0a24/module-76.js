require.r(exports);
require.d(exports, {
    GlobToolArgs: ()=>GlobToolArgs,
    GlobToolCall: ()=>GlobToolCall,
    GlobToolError: ()=>GlobToolError,
    GlobToolResult: ()=>GlobToolResult,
    GlobToolSuccess: ()=>GlobToolSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const GlobToolArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GlobToolArgs", ()=>[
        {
            no: 1,
            name: "target_directory",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "glob_pattern",
            kind: "scalar",
            T: 9
        }
    ]);
const GlobToolResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GlobToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: GlobToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: GlobToolError,
            oneof: "result"
        }
    ]);
const GlobToolError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GlobToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const GlobToolSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GlobToolSuccess", ()=>[
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
            name: "files",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "total_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "client_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "ripgrep_truncated",
            kind: "scalar",
            T: 8
        }
    ]);
const GlobToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GlobToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: GlobToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: GlobToolResult
        }
    ]);
