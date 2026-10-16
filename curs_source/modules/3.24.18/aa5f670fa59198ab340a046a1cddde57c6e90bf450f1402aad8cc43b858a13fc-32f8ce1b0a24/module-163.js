require.r(exports);
require.d(exports, {
    McpAllowlistPrecheckArgs: ()=>McpAllowlistPrecheckArgs,
    McpAllowlistPrecheckResult: ()=>McpAllowlistPrecheckResult
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const McpAllowlistPrecheckArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpAllowlistPrecheckArgs", ()=>[
        {
            no: 1,
            name: "provider_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "annotations_json",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const McpAllowlistPrecheckResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.McpAllowlistPrecheckResult", ()=>[
        {
            no: 1,
            name: "allowlisted",
            kind: "scalar",
            T: 8
        }
    ]);
