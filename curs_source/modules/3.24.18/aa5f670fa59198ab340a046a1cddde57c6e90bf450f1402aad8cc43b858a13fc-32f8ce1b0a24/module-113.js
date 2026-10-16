require.r(exports);
require.d(exports, {
    AiAttributionArgs: ()=>AiAttributionArgs,
    AiAttributionError: ()=>AiAttributionError,
    AiAttributionResult: ()=>AiAttributionResult,
    AiAttributionSuccess: ()=>AiAttributionSuccess,
    AiAttributionToolCall: ()=>AiAttributionToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-72.js");
const AiAttributionArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AiAttributionArgs", ()=>[
        {
            no: 5,
            name: "file_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 6,
            name: "commit_hashes",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 7,
            name: "output_mode",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "max_commits",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 10,
            name: "include_line_ranges",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const AiAttributionResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AiAttributionResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: AiAttributionSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: AiAttributionError,
            oneof: "result"
        }
    ]);
const AiAttributionSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AiAttributionSuccess", ()=>[
        {
            no: 1,
            name: "attribution_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "output_location",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.OutputLocation,
            opt: true
        }
    ]);
const AiAttributionError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AiAttributionError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const AiAttributionToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AiAttributionToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: AiAttributionArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: AiAttributionResult
        }
    ]);
