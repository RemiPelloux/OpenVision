require.r(exports);
require.d(exports, {
    DeleteToolCall: ()=>DeleteToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _delete_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-75.js");
const DeleteToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DeleteToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: _delete_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.DeleteArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: _delete_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.DeleteResult
        }
    ]);
