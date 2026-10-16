require.r(exports);
require.d(exports, {
    CloudAgentPersonalScope: ()=>CloudAgentPersonalScope,
    CloudAgentRequestScope: ()=>CloudAgentRequestScope
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const CloudAgentRequestScope = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CloudAgentRequestScope", ()=>[
        {
            no: 1,
            name: "personal",
            kind: "message",
            T: CloudAgentPersonalScope,
            oneof: "scope"
        },
        {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 5,
            oneof: "scope"
        }
    ]);
const CloudAgentPersonalScope = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CloudAgentPersonalScope", []);
