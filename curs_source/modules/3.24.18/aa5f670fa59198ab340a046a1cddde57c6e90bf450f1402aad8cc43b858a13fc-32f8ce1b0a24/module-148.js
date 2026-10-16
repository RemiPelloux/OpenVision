require.r(exports);
require.d(exports, {
    SystemPromptSpec: ()=>SystemPromptSpec
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const SystemPromptSpec = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SystemPromptSpec", ()=>[
        {
            no: 1,
            name: "replace",
            kind: "scalar",
            T: 9,
            oneof: "spec"
        },
        {
            no: 2,
            name: "append",
            kind: "scalar",
            T: 9,
            oneof: "spec"
        }
    ]);
