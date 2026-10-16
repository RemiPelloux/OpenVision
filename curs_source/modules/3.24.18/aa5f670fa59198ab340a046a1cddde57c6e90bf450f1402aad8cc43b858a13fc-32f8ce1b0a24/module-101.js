require.r(exports);
require.d(exports, {
    GenerateImageArgs: ()=>GenerateImageArgs,
    GenerateImageError: ()=>GenerateImageError,
    GenerateImageRequestQuery: ()=>GenerateImageRequestQuery,
    GenerateImageRequestResponse: ()=>GenerateImageRequestResponse,
    GenerateImageRequestResponse_Approved: ()=>GenerateImageRequestResponse_Approved,
    GenerateImageRequestResponse_Rejected: ()=>GenerateImageRequestResponse_Rejected,
    GenerateImageResult: ()=>GenerateImageResult,
    GenerateImageSuccess: ()=>GenerateImageSuccess,
    GenerateImageToolCall: ()=>GenerateImageToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const GenerateImageArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GenerateImageArgs", ()=>[
        {
            no: 1,
            name: "description",
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
            no: 5,
            name: "reference_image_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "aspect_ratio",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const GenerateImageResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GenerateImageResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: GenerateImageSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: GenerateImageError,
            oneof: "result"
        }
    ]);
const GenerateImageSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GenerateImageSuccess", ()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "image_data",
            kind: "scalar",
            T: 9
        }
    ]);
const GenerateImageError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GenerateImageError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const GenerateImageToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GenerateImageToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: GenerateImageArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: GenerateImageResult
        }
    ]);
const GenerateImageRequestQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GenerateImageRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: GenerateImageArgs
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const GenerateImageRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GenerateImageRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: GenerateImageRequestResponse_Approved,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: GenerateImageRequestResponse_Rejected,
            oneof: "result"
        }
    ]);
const GenerateImageRequestResponse_Approved = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GenerateImageRequestResponse.Approved", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "GenerateImageRequestResponse_Approved"
});
const GenerateImageRequestResponse_Rejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GenerateImageRequestResponse.Rejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "GenerateImageRequestResponse_Rejected"
});
