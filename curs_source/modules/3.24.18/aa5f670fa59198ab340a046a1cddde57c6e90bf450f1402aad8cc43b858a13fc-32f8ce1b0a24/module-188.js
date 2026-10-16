require.r(exports);
require.d(exports, {
    GetKnownServersRequest: ()=>GetKnownServersRequest,
    GetKnownServersResponse: ()=>GetKnownServersResponse,
    MCPKnownServerInfo: ()=>MCPKnownServerInfo,
    MCPServerRegistration: ()=>MCPServerRegistration,
    McpOAuthStoredClientInfo: ()=>McpOAuthStoredClientInfo,
    McpOAuthStoredData: ()=>McpOAuthStoredData
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const McpOAuthStoredData = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.McpOAuthStoredData", ()=>[
        {
            no: 1,
            name: "refresh_token",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "client_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "client_secret",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "redirect_uris",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "access_token",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const McpOAuthStoredClientInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.McpOAuthStoredClientInfo", ()=>[
        {
            no: 1,
            name: "client_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "client_secret",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "redirect_uris",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const MCPKnownServerInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.MCPKnownServerInfo", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "icon",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "endpoint",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "is_featured",
            kind: "scalar",
            T: 8
        }
    ]);
const MCPServerRegistration = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.MCPServerRegistration", ()=>[
        {
            no: 1,
            name: "domains",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "info",
            kind: "message",
            T: MCPKnownServerInfo
        }
    ]);
const GetKnownServersRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetKnownServersRequest", []);
const GetKnownServersResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetKnownServersResponse", ()=>[
        {
            no: 1,
            name: "servers",
            kind: "message",
            T: MCPServerRegistration,
            repeated: true
        }
    ]);
