require.r(exports);
require.d(exports, {
    WebFetchArgs: ()=>WebFetchArgs,
    WebFetchError: ()=>WebFetchError,
    WebFetchRejected: ()=>WebFetchRejected,
    WebFetchRequestQuery: ()=>WebFetchRequestQuery,
    WebFetchRequestResponse: ()=>WebFetchRequestResponse,
    WebFetchRequestResponse_Approved: ()=>WebFetchRequestResponse_Approved,
    WebFetchRequestResponse_Rejected: ()=>WebFetchRequestResponse_Rejected,
    WebFetchResult: ()=>WebFetchResult,
    WebFetchSuccess: ()=>WebFetchSuccess,
    WebFetchToolCall: ()=>WebFetchToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-72.js");
const WebFetchArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebFetchArgs", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const WebFetchResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebFetchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: WebFetchSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: WebFetchError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: WebFetchRejected,
            oneof: "result"
        }
    ]);
const WebFetchSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebFetchSuccess", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "markdown",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "output_location",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.OutputLocation,
            opt: true
        }
    ]);
const WebFetchError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebFetchError", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const WebFetchRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebFetchRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
const WebFetchToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebFetchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: WebFetchArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: WebFetchResult
        }
    ]);
const WebFetchRequestQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebFetchRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: WebFetchArgs
        },
        {
            no: 2,
            name: "skip_approval",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "smart_mode_approval",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.SmartModeApproval
        }
    ]);
const WebFetchRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebFetchRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: WebFetchRequestResponse_Approved,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: WebFetchRequestResponse_Rejected,
            oneof: "result"
        }
    ]);
const WebFetchRequestResponse_Approved = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebFetchRequestResponse.Approved", [], {
    localName: "WebFetchRequestResponse_Approved"
});
const WebFetchRequestResponse_Rejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebFetchRequestResponse.Rejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "WebFetchRequestResponse_Rejected"
});
