require.r(exports);
require.d(exports, {
    GenerateVideoArgs: ()=>GenerateVideoArgs,
    GenerateVideoError: ()=>GenerateVideoError,
    GenerateVideoResult: ()=>GenerateVideoResult,
    GenerateVideoSuccess: ()=>GenerateVideoSuccess,
    GenerateVideoToolCall: ()=>GenerateVideoToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const GenerateVideoArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GenerateVideoArgs", ()=>[
        {
            no: 1,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "image_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "reference_image_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "duration_seconds",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 6,
            name: "aspect_ratio",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "resolution",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const GenerateVideoResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GenerateVideoResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: GenerateVideoSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: GenerateVideoError,
            oneof: "result"
        }
    ]);
const GenerateVideoSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GenerateVideoSuccess", ()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "duration_seconds",
            kind: "scalar",
            T: 13
        }
    ]);
const GenerateVideoError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GenerateVideoError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const GenerateVideoToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GenerateVideoToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: GenerateVideoArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: GenerateVideoResult
        }
    ]);
