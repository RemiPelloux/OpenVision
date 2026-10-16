require.r(exports);
require.d(exports, {
    LsToolCall: ()=>LsToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _ls_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-84.js");
const LsToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.LsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: _ls_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.LsArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: _ls_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.LsResult
        }
    ]);
