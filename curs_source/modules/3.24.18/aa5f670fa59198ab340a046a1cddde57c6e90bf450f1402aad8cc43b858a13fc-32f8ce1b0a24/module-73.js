require.r(exports);
require.d(exports, {
    HookAdditionalContext: ()=>HookAdditionalContext
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const HookAdditionalContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.HookAdditionalContext", ()=>[
        {
            no: 1,
            name: "hook_event_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
