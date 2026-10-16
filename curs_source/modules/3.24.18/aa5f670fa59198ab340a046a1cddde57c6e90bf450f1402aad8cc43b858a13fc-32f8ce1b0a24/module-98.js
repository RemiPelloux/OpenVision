require.r(exports);
require.d(exports, {
    FetchToolCall: ()=>FetchToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _fetch_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-99.js");
const FetchToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.FetchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: _fetch_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.FetchArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: _fetch_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.FetchResult
        }
    ]);
