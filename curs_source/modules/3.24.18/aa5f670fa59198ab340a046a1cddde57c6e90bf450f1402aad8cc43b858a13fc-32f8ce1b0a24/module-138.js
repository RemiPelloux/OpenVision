require.r(exports);
require.d(exports, {
    ConversationSearchArgs: ()=>ConversationSearchArgs,
    ConversationSearchError: ()=>ConversationSearchError,
    ConversationSearchHit: ()=>ConversationSearchHit,
    ConversationSearchResult: ()=>ConversationSearchResult,
    ConversationSearchSource: ()=>ConversationSearchSource,
    ConversationSearchSuccess: ()=>ConversationSearchSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const ConversationSearchSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.ConversationSearchSource", [
    {
        no: 0,
        name: "CONVERSATION_SEARCH_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CONVERSATION_SEARCH_SOURCE_LOCAL",
        localName: "LOCAL"
    },
    {
        no: 2,
        name: "CONVERSATION_SEARCH_SOURCE_CLOUD_CACHE",
        localName: "CLOUD_CACHE"
    }
]);
const ConversationSearchArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationSearchArgs", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const ConversationSearchResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationSearchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ConversationSearchSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ConversationSearchError,
            oneof: "result"
        }
    ]);
const ConversationSearchSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationSearchSuccess", ()=>[
        {
            no: 1,
            name: "hits",
            kind: "message",
            T: ConversationSearchHit,
            repeated: true
        },
        {
            no: 2,
            name: "truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "partial",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "rebuilding",
            kind: "scalar",
            T: 8
        }
    ]);
const ConversationSearchHit = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationSearchHit", ()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "source",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ConversationSearchSource)
        },
        {
            no: 4,
            name: "updated_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "snippet",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ConversationSearchError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationSearchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
