require.r(exports);
require.d(exports, {
    AppliedAgentChange: ()=>AppliedAgentChange,
    AppliedAgentChange_ChangeType: ()=>AppliedAgentChange_ChangeType,
    ApplyAgentDiffArgs: ()=>ApplyAgentDiffArgs,
    ApplyAgentDiffError: ()=>ApplyAgentDiffError,
    ApplyAgentDiffResult: ()=>ApplyAgentDiffResult,
    ApplyAgentDiffSuccess: ()=>ApplyAgentDiffSuccess,
    ApplyAgentDiffToolCall: ()=>ApplyAgentDiffToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const ApplyAgentDiffToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ApplyAgentDiffToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ApplyAgentDiffArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ApplyAgentDiffResult
        }
    ]);
const ApplyAgentDiffArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ApplyAgentDiffArgs", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        }
    ]);
const ApplyAgentDiffResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ApplyAgentDiffResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ApplyAgentDiffSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ApplyAgentDiffError,
            oneof: "result"
        }
    ]);
const ApplyAgentDiffSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ApplyAgentDiffSuccess", ()=>[
        {
            no: 1,
            name: "applied_changes",
            kind: "message",
            T: AppliedAgentChange,
            repeated: true
        }
    ]);
const AppliedAgentChange = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AppliedAgentChange", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "change_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AppliedAgentChange_ChangeType)
        },
        {
            no: 3,
            name: "before_content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "after_content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "error",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "message_for_model",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const AppliedAgentChange_ChangeType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.AppliedAgentChange.ChangeType", [
    {
        no: 0,
        name: "CHANGE_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CHANGE_TYPE_CREATED",
        localName: "CREATED"
    },
    {
        no: 2,
        name: "CHANGE_TYPE_MODIFIED",
        localName: "MODIFIED"
    },
    {
        no: 3,
        name: "CHANGE_TYPE_DELETED",
        localName: "DELETED"
    }
]);
const ApplyAgentDiffError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ApplyAgentDiffError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "applied_changes",
            kind: "message",
            T: AppliedAgentChange,
            repeated: true
        }
    ]);
