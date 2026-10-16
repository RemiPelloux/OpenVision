require.r(exports);
require.d(exports, {
    WebFetchAllowlistPrecheckArgs: ()=>WebFetchAllowlistPrecheckArgs,
    WebFetchAllowlistPrecheckResult: ()=>WebFetchAllowlistPrecheckResult
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const WebFetchAllowlistPrecheckArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebFetchAllowlistPrecheckArgs", ()=>[
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
            T: 9,
            opt: true
        }
    ]);
const WebFetchAllowlistPrecheckResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.WebFetchAllowlistPrecheckResult", ()=>[
        {
            no: 1,
            name: "allowlisted",
            kind: "scalar",
            T: 8
        }
    ]);
