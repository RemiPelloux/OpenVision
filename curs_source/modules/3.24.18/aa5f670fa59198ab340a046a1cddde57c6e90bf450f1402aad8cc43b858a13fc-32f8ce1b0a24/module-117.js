require.r(exports);
require.d(exports, {
    BlameByFilePathArgs: ()=>BlameByFilePathArgs,
    BlameByFilePathError: ()=>BlameByFilePathError,
    BlameByFilePathResult: ()=>BlameByFilePathResult,
    BlameByFilePathSuccess: ()=>BlameByFilePathSuccess,
    BlameByFilePathToolCall: ()=>BlameByFilePathToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const BlameByFilePathArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.BlameByFilePathArgs", ()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
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
        }
    ]);
const BlameByFilePathSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.BlameByFilePathSuccess", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
const BlameByFilePathError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.BlameByFilePathError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);
const BlameByFilePathResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.BlameByFilePathResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: BlameByFilePathSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: BlameByFilePathError,
            oneof: "result"
        }
    ]);
const BlameByFilePathToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.BlameByFilePathToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: BlameByFilePathArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: BlameByFilePathResult
        }
    ]);
