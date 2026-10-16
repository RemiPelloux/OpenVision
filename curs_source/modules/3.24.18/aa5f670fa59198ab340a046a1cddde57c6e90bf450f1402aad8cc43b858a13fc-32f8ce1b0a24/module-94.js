require.r(exports);
require.d(exports, {
    WebSearchArgs: ()=>WebSearchArgs,
    WebSearchError: ()=>WebSearchError,
    WebSearchReference: ()=>WebSearchReference,
    WebSearchRejected: ()=>WebSearchRejected,
    WebSearchRequestQuery: ()=>WebSearchRequestQuery,
    WebSearchRequestResponse: ()=>WebSearchRequestResponse,
    WebSearchRequestResponse_Approved: ()=>WebSearchRequestResponse_Approved,
    WebSearchRequestResponse_Rejected: ()=>WebSearchRequestResponse_Rejected,
    WebSearchResult: ()=>WebSearchResult,
    WebSearchSuccess: ()=>WebSearchSuccess,
    WebSearchToolCall: ()=>WebSearchToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const WebSearchArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebSearchArgs", ()=>[
        {
            no: 1,
            name: "search_term",
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
const WebSearchResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebSearchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: WebSearchSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: WebSearchError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: WebSearchRejected,
            oneof: "result"
        }
    ]);
const WebSearchSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebSearchSuccess", ()=>[
        {
            no: 1,
            name: "references",
            kind: "message",
            T: WebSearchReference,
            repeated: true
        }
    ]);
const WebSearchError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebSearchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const WebSearchRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebSearchRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
const WebSearchReference = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebSearchReference", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "chunk",
            kind: "scalar",
            T: 9
        }
    ]);
const WebSearchToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebSearchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: WebSearchArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: WebSearchResult
        }
    ]);
const WebSearchRequestQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebSearchRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: WebSearchArgs
        }
    ]);
const WebSearchRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebSearchRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: WebSearchRequestResponse_Approved,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: WebSearchRequestResponse_Rejected,
            oneof: "result"
        }
    ]);
const WebSearchRequestResponse_Approved = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebSearchRequestResponse.Approved", [], {
    localName: "WebSearchRequestResponse_Approved"
});
const WebSearchRequestResponse_Rejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebSearchRequestResponse.Rejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "WebSearchRequestResponse_Rejected"
});
