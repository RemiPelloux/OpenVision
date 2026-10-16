require.r(exports);
require.d(exports, {
    RecordScreenToolCall: ()=>RecordScreenToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _record_screen_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-103.js");
const RecordScreenToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RecordScreenToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: _record_screen_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.RecordScreenArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: _record_screen_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.RecordScreenResult
        }
    ]);
