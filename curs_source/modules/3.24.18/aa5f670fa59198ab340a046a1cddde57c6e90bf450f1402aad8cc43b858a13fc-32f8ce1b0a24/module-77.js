require.r(exports);
require.d(exports, {
    GrepToolCall: ()=>GrepToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _grep_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-78.js");
const GrepToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GrepToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: _grep_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.GrepArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: _grep_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.GrepResult
        }
    ]);
