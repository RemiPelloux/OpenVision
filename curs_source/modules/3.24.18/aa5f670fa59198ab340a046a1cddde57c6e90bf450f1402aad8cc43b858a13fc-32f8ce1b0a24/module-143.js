require.r(exports);
require.d(exports, {
    XSearchArgs: ()=>XSearchArgs,
    XSearchCitation: ()=>XSearchCitation,
    XSearchError: ()=>XSearchError,
    XSearchRejected: ()=>XSearchRejected,
    XSearchResult: ()=>XSearchResult,
    XSearchSuccess: ()=>XSearchSuccess,
    XSearchToolCall: ()=>XSearchToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const XSearchArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.XSearchArgs", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "from_date",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "to_date",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "allowed_x_handles",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "excluded_x_handles",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const XSearchResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.XSearchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: XSearchSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: XSearchError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: XSearchRejected,
            oneof: "result"
        }
    ]);
const XSearchSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.XSearchSuccess", ()=>[
        {
            no: 1,
            name: "answer",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "citations",
            kind: "message",
            T: XSearchCitation,
            repeated: true
        }
    ]);
const XSearchCitation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.XSearchCitation", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        }
    ]);
const XSearchError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.XSearchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const XSearchRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.XSearchRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
const XSearchToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.XSearchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: XSearchArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: XSearchResult
        }
    ]);
