require.r(exports);
require.d(exports, {
    ConnectScmArgs: ()=>ConnectScmArgs,
    ConnectScmError: ()=>ConnectScmError,
    ConnectScmGithub: ()=>ConnectScmGithub,
    ConnectScmGithubRepository: ()=>ConnectScmGithubRepository,
    ConnectScmRejected: ()=>ConnectScmRejected,
    ConnectScmRequestQuery: ()=>ConnectScmRequestQuery,
    ConnectScmRequestResponse: ()=>ConnectScmRequestResponse,
    ConnectScmRequestResponse_Approved: ()=>ConnectScmRequestResponse_Approved,
    ConnectScmRequestResponse_Failed: ()=>ConnectScmRequestResponse_Failed,
    ConnectScmRequestResponse_Rejected: ()=>ConnectScmRequestResponse_Rejected,
    ConnectScmResult: ()=>ConnectScmResult,
    ConnectScmSuccess: ()=>ConnectScmSuccess,
    ConnectScmToolCall: ()=>ConnectScmToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const ConnectScmArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConnectScmArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "github",
            kind: "message",
            T: ConnectScmGithub,
            oneof: "target"
        }
    ]);
const ConnectScmGithub = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConnectScmGithub", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: ConnectScmGithubRepository
        },
        {
            no: 2,
            name: "ghe_application",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ConnectScmGithubRepository = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConnectScmGithubRepository", ()=>[
        {
            no: 1,
            name: "owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo",
            kind: "scalar",
            T: 9
        }
    ]);
const ConnectScmResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConnectScmResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ConnectScmSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ConnectScmError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: ConnectScmRejected,
            oneof: "result"
        }
    ]);
const ConnectScmSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConnectScmSuccess", []);
const ConnectScmError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConnectScmError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const ConnectScmRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConnectScmRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
const ConnectScmToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConnectScmToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ConnectScmArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ConnectScmResult
        }
    ]);
const ConnectScmRequestQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConnectScmRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ConnectScmArgs
        }
    ]);
const ConnectScmRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConnectScmRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: ConnectScmRequestResponse_Approved,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: ConnectScmRequestResponse_Rejected,
            oneof: "result"
        },
        {
            no: 3,
            name: "failed",
            kind: "message",
            T: ConnectScmRequestResponse_Failed,
            oneof: "result"
        }
    ]);
const ConnectScmRequestResponse_Approved = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConnectScmRequestResponse.Approved", [], {
    localName: "ConnectScmRequestResponse_Approved"
});
const ConnectScmRequestResponse_Rejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConnectScmRequestResponse.Rejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ConnectScmRequestResponse_Rejected"
});
const ConnectScmRequestResponse_Failed = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConnectScmRequestResponse.Failed", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ConnectScmRequestResponse_Failed"
});
