require.r(exports);
require.d(exports, {
    SearchConversationsToolCall: ()=>SearchConversationsToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _conversation_search_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-138.js");
const SearchConversationsToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SearchConversationsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: _conversation_search_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ConversationSearchArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: _conversation_search_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ConversationSearchResult
        }
    ]);
