require.r(exports);
require.d(exports, {
    CreatePrAction: ()=>CreatePrAction,
    GetCiStatusAction: ()=>GetCiStatusAction,
    MergePrAction: ()=>MergePrAction,
    MergePrMethod: ()=>MergePrMethod,
    MergePrMode: ()=>MergePrMode,
    PostCommentAction: ()=>PostCommentAction,
    PrManagementArgs: ()=>PrManagementArgs,
    PrManagementError: ()=>PrManagementError,
    PrManagementNeedsConfirmation: ()=>PrManagementNeedsConfirmation,
    PrManagementRegistered: ()=>PrManagementRegistered,
    PrManagementRejected: ()=>PrManagementRejected,
    PrManagementRequestQuery: ()=>PrManagementRequestQuery,
    PrManagementResult: ()=>PrManagementResult,
    PrManagementSuccess: ()=>PrManagementSuccess,
    PrManagementToolCall: ()=>PrManagementToolCall,
    PullRequestStatus: ()=>PullRequestStatus,
    ResolveCommentAction: ()=>ResolveCommentAction,
    SetPrStatusAction: ()=>SetPrStatusAction,
    UpdatePrAction: ()=>UpdatePrAction
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const MergePrMode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.MergePrMode", [
    {
        no: 0,
        name: "MERGE_PR_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MERGE_PR_MODE_MERGE",
        localName: "MERGE"
    },
    {
        no: 2,
        name: "MERGE_PR_MODE_AUTO",
        localName: "AUTO"
    },
    {
        no: 3,
        name: "MERGE_PR_MODE_DISABLE_AUTO",
        localName: "DISABLE_AUTO"
    }
]);
const MergePrMethod = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.MergePrMethod", [
    {
        no: 0,
        name: "MERGE_PR_METHOD_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MERGE_PR_METHOD_MERGE",
        localName: "MERGE"
    },
    {
        no: 2,
        name: "MERGE_PR_METHOD_SQUASH",
        localName: "SQUASH"
    }
]);
const PullRequestStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.PullRequestStatus", [
    {
        no: 0,
        name: "PULL_REQUEST_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PULL_REQUEST_STATUS_OPEN",
        localName: "OPEN"
    },
    {
        no: 2,
        name: "PULL_REQUEST_STATUS_CLOSED",
        localName: "CLOSED"
    }
]);
const PrManagementArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PrManagementArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "create_pr",
            kind: "message",
            T: CreatePrAction,
            oneof: "action"
        },
        {
            no: 3,
            name: "update_pr",
            kind: "message",
            T: UpdatePrAction,
            oneof: "action"
        },
        {
            no: 4,
            name: "post_comment",
            kind: "message",
            T: PostCommentAction,
            oneof: "action"
        },
        {
            no: 5,
            name: "resolve_comment",
            kind: "message",
            T: ResolveCommentAction,
            oneof: "action"
        },
        {
            no: 6,
            name: "get_ci_status",
            kind: "message",
            T: GetCiStatusAction,
            oneof: "action"
        },
        {
            no: 7,
            name: "set_pr_status",
            kind: "message",
            T: SetPrStatusAction,
            oneof: "action"
        },
        {
            no: 8,
            name: "merge_pr",
            kind: "message",
            T: MergePrAction,
            oneof: "action"
        }
    ]);
const CreatePrAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CreatePrAction", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "draft",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "add_labels",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 7,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "skip_branch_prefix_check",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 9,
            name: "stack_on_pr_number",
            kind: "scalar",
            T: 3,
            opt: true
        }
    ]);
const UpdatePrAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.UpdatePrAction", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "body",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "add_labels",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 7,
            name: "remove_labels",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 8,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "stack_on_pr_number",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 10,
            name: "clear_stack",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 11,
            name: "draft",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const PostCommentAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PostCommentAction", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "in_reply_to",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 6,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "line",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 8,
            name: "start_line",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 9,
            name: "side",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "reply_to_reference",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ResolveCommentAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ResolveCommentAction", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "comment_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "comment_reference",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const GetCiStatusAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GetCiStatusAction", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SetPrStatusAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SetPrStatusAction", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(PullRequestStatus)
        }
    ]);
const MergePrAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.MergePrAction", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(MergePrMode)
        },
        {
            no: 5,
            name: "method",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(MergePrMethod)
        },
        {
            no: 6,
            name: "expected_head_sha",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "expected_member_head_shas",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 8,
            name: "downstack",
            kind: "scalar",
            T: 8
        }
    ]);
const PrManagementResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PrManagementResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PrManagementSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PrManagementError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: PrManagementRejected,
            oneof: "result"
        },
        {
            no: 4,
            name: "registered",
            kind: "message",
            T: PrManagementRegistered,
            oneof: "result"
        },
        {
            no: 5,
            name: "needs_confirmation",
            kind: "message",
            T: PrManagementNeedsConfirmation,
            oneof: "result"
        }
    ]);
const PrManagementSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PrManagementSuccess", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pr_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
const PrManagementError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PrManagementError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const PrManagementRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PrManagementRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
const PrManagementRegistered = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PrManagementRegistered", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "draft",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "branch_name",
            kind: "scalar",
            T: 9
        }
    ]);
const PrManagementNeedsConfirmation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PrManagementNeedsConfirmation", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "discovered_pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "discovered_pr_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "discovered_pr_title",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "branch_name",
            kind: "scalar",
            T: 9
        }
    ]);
const PrManagementToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PrManagementToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: PrManagementArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: PrManagementResult
        }
    ]);
const PrManagementRequestQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PrManagementRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: PrManagementArgs
        }
    ]);
