require.r(exports);
require.d(exports, {
    BatchGetPullRequestStatusRequest: ()=>BatchGetPullRequestStatusRequest,
    BatchGetPullRequestStatusResponse: ()=>BatchGetPullRequestStatusResponse,
    BatchGetPullRequestsRequest: ()=>BatchGetPullRequestsRequest,
    BatchGetPullRequestsResponse: ()=>BatchGetPullRequestsResponse,
    CheckLogExcerptStatus: ()=>CheckLogExcerptStatus,
    GetBranchComparisonRequest: ()=>GetBranchComparisonRequest,
    GetBranchComparisonResponse: ()=>GetBranchComparisonResponse,
    GetPrAgentContextRequest: ()=>GetPrAgentContextRequest,
    GetPrAgentContextResponse: ()=>GetPrAgentContextResponse,
    GetPullRequestCheckLogExcerptRequest: ()=>GetPullRequestCheckLogExcerptRequest,
    GetPullRequestCheckLogExcerptResponse: ()=>GetPullRequestCheckLogExcerptResponse,
    GetPullRequestChecksRequest: ()=>GetPullRequestChecksRequest,
    GetPullRequestChecksResponse: ()=>GetPullRequestChecksResponse,
    GetPullRequestCodeownersRequest: ()=>GetPullRequestCodeownersRequest,
    GetPullRequestCodeownersResponse: ()=>GetPullRequestCodeownersResponse,
    GetPullRequestDiffRequest: ()=>GetPullRequestDiffRequest,
    GetPullRequestDiffResponse: ()=>GetPullRequestDiffResponse,
    GetPullRequestFileContentsRequest: ()=>GetPullRequestFileContentsRequest,
    GetPullRequestFileContentsResponse: ()=>GetPullRequestFileContentsResponse,
    GetPullRequestRequest: ()=>GetPullRequestRequest,
    GetPullRequestResponse: ()=>GetPullRequestResponse,
    GetPullRequestStackRequest: ()=>GetPullRequestStackRequest,
    GetPullRequestStackResponse: ()=>GetPullRequestStackResponse,
    GetSCMPullRequestCommitsRequest: ()=>GetSCMPullRequestCommitsRequest,
    GetSCMPullRequestCommitsResponse: ()=>GetSCMPullRequestCommitsResponse,
    GetSCMPullRequestTimelineEventsRequest: ()=>GetSCMPullRequestTimelineEventsRequest,
    GetSCMPullRequestTimelineEventsResponse: ()=>GetSCMPullRequestTimelineEventsResponse,
    PRCheck: ()=>PRCheck,
    PRCheckAnnotation: ()=>PRCheckAnnotation,
    PRCheckStatus: ()=>PRCheckStatus,
    PrAgentAuthor: ()=>PrAgentAuthor,
    PrAgentContext: ()=>PrAgentContext,
    PrAgentForge: ()=>PrAgentForge,
    PrAgentLaunchUnavailableReason: ()=>PrAgentLaunchUnavailableReason,
    PrAgentRef: ()=>PrAgentRef,
    PrAgentRepository: ()=>PrAgentRepository,
    PullRequestFileContentsStatus: ()=>PullRequestFileContentsStatus,
    PullRequestPathCodeowners: ()=>PullRequestPathCodeowners,
    PullRequestUpdatedEvent: ()=>PullRequestUpdatedEvent,
    PullRequestUpdatedNotification: ()=>PullRequestUpdatedNotification,
    PullRequestUpdatesHeartbeat: ()=>PullRequestUpdatesHeartbeat,
    SCMBatchGetPullRequestForBranchRequest: ()=>SCMBatchGetPullRequestForBranchRequest,
    SCMBatchGetPullRequestForBranchResponse: ()=>SCMBatchGetPullRequestForBranchResponse,
    SCMBranchPullRequests: ()=>SCMBranchPullRequests,
    SCMBranchRef: ()=>SCMBranchRef,
    SCMCiStatus: ()=>SCMCiStatus,
    SCMClosePullRequestRequest: ()=>SCMClosePullRequestRequest,
    SCMClosePullRequestResponse: ()=>SCMClosePullRequestResponse,
    SCMDisablePullRequestAutoMergeRequest: ()=>SCMDisablePullRequestAutoMergeRequest,
    SCMDisablePullRequestAutoMergeResponse: ()=>SCMDisablePullRequestAutoMergeResponse,
    SCMEnablePullRequestAutoMergeRequest: ()=>SCMEnablePullRequestAutoMergeRequest,
    SCMEnablePullRequestAutoMergeResponse: ()=>SCMEnablePullRequestAutoMergeResponse,
    SCMGetPullRequestForBranchRequest: ()=>SCMGetPullRequestForBranchRequest,
    SCMGetPullRequestForBranchResponse: ()=>SCMGetPullRequestForBranchResponse,
    SCMMakePullRequestReadyRequest: ()=>SCMMakePullRequestReadyRequest,
    SCMMakePullRequestReadyResponse: ()=>SCMMakePullRequestReadyResponse,
    SCMMergeMethod: ()=>SCMMergeMethod,
    SCMMergePullRequestRequest: ()=>SCMMergePullRequestRequest,
    SCMMergePullRequestResponse: ()=>SCMMergePullRequestResponse,
    SCMMergeability: ()=>SCMMergeability,
    SCMPullRequest: ()=>SCMPullRequest,
    SCMPullRequestCommit: ()=>SCMPullRequestCommit,
    SCMPullRequestCommitUser: ()=>SCMPullRequestCommitUser,
    SCMPullRequestDiffFile: ()=>SCMPullRequestDiffFile,
    SCMPullRequestDiffFileStatus: ()=>SCMPullRequestDiffFileStatus,
    SCMPullRequestMergeabilityBlocker: ()=>SCMPullRequestMergeabilityBlocker,
    SCMPullRequestMergeabilityVerdict: ()=>SCMPullRequestMergeabilityVerdict,
    SCMPullRequestRequestedReviewer: ()=>SCMPullRequestRequestedReviewer,
    SCMPullRequestReviewer: ()=>SCMPullRequestReviewer,
    SCMPullRequestStack: ()=>SCMPullRequestStack,
    SCMPullRequestStackEdge: ()=>SCMPullRequestStackEdge,
    SCMPullRequestStackMember: ()=>SCMPullRequestStackMember,
    SCMPullRequestStackSource: ()=>SCMPullRequestStackSource,
    SCMPullRequestState: ()=>SCMPullRequestState,
    SCMPullRequestStatus: ()=>SCMPullRequestStatus,
    SCMPullRequestTimelineActor: ()=>SCMPullRequestTimelineActor,
    SCMPullRequestTimelineEvent: ()=>SCMPullRequestTimelineEvent,
    SCMRemovePullRequestFromMergeQueueRequest: ()=>SCMRemovePullRequestFromMergeQueueRequest,
    SCMRemovePullRequestFromMergeQueueResponse: ()=>SCMRemovePullRequestFromMergeQueueResponse,
    SCMReopenPullRequestRequest: ()=>SCMReopenPullRequestRequest,
    SCMReopenPullRequestResponse: ()=>SCMReopenPullRequestResponse,
    SCMUpdatePullRequestTitleRequest: ()=>SCMUpdatePullRequestTitleRequest,
    SCMUpdatePullRequestTitleResponse: ()=>SCMUpdatePullRequestTitleResponse,
    StreamPullRequestUpdatesRequest: ()=>StreamPullRequestUpdatesRequest
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _cloud_agent_scope_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-64.js");
const SCMPullRequestState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.SCMPullRequestState", [
    {
        no: 0,
        name: "SCM_PULL_REQUEST_STATE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SCM_PULL_REQUEST_STATE_OPEN"
    },
    {
        no: 2,
        name: "SCM_PULL_REQUEST_STATE_CLOSED"
    },
    {
        no: 3,
        name: "SCM_PULL_REQUEST_STATE_MERGED"
    }
]);
const SCMMergeability = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.SCMMergeability", [
    {
        no: 0,
        name: "SCM_MERGEABILITY_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SCM_MERGEABILITY_UNKNOWN"
    },
    {
        no: 2,
        name: "SCM_MERGEABILITY_MERGEABLE"
    },
    {
        no: 3,
        name: "SCM_MERGEABILITY_CONFLICTING"
    }
]);
const SCMCiStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.SCMCiStatus", [
    {
        no: 0,
        name: "SCM_CI_STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SCM_CI_STATUS_UNKNOWN"
    },
    {
        no: 2,
        name: "SCM_CI_STATUS_SUCCESS"
    },
    {
        no: 3,
        name: "SCM_CI_STATUS_FAILURE"
    },
    {
        no: 4,
        name: "SCM_CI_STATUS_PENDING"
    }
]);
const SCMPullRequestDiffFileStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.SCMPullRequestDiffFileStatus", [
    {
        no: 0,
        name: "SCM_PULL_REQUEST_DIFF_FILE_STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SCM_PULL_REQUEST_DIFF_FILE_STATUS_ADDED"
    },
    {
        no: 2,
        name: "SCM_PULL_REQUEST_DIFF_FILE_STATUS_DELETED"
    },
    {
        no: 3,
        name: "SCM_PULL_REQUEST_DIFF_FILE_STATUS_MODIFIED"
    },
    {
        no: 4,
        name: "SCM_PULL_REQUEST_DIFF_FILE_STATUS_RENAMED"
    }
]);
const SCMMergeMethod = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.SCMMergeMethod", [
    {
        no: 0,
        name: "SCM_MERGE_METHOD_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SCM_MERGE_METHOD_MERGE"
    },
    {
        no: 2,
        name: "SCM_MERGE_METHOD_SQUASH"
    },
    {
        no: 3,
        name: "SCM_MERGE_METHOD_REBASE"
    }
]);
const PrAgentForge = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.PrAgentForge", [
    {
        no: 0,
        name: "PR_AGENT_FORGE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PR_AGENT_FORGE_GITHUB",
        localName: "GITHUB"
    },
    {
        no: 2,
        name: "PR_AGENT_FORGE_ORIGIN",
        localName: "ORIGIN"
    }
]);
const PrAgentLaunchUnavailableReason = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.PrAgentLaunchUnavailableReason", [
    {
        no: 0,
        name: "PR_AGENT_LAUNCH_UNAVAILABLE_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PR_AGENT_LAUNCH_UNAVAILABLE_REASON_CLOSED",
        localName: "CLOSED"
    },
    {
        no: 2,
        name: "PR_AGENT_LAUNCH_UNAVAILABLE_REASON_MERGED",
        localName: "MERGED"
    },
    {
        no: 3,
        name: "PR_AGENT_LAUNCH_UNAVAILABLE_REASON_MISSING_HEAD",
        localName: "MISSING_HEAD"
    },
    {
        no: 4,
        name: "PR_AGENT_LAUNCH_UNAVAILABLE_REASON_WRITE_ACCESS_REQUIRED",
        localName: "WRITE_ACCESS_REQUIRED"
    },
    {
        no: 5,
        name: "PR_AGENT_LAUNCH_UNAVAILABLE_REASON_PERMISSION_UNAVAILABLE",
        localName: "PERMISSION_UNAVAILABLE"
    },
    {
        no: 6,
        name: "PR_AGENT_LAUNCH_UNAVAILABLE_REASON_FORK_TARGET_UNSUPPORTED",
        localName: "FORK_TARGET_UNSUPPORTED"
    },
    {
        no: 7,
        name: "PR_AGENT_LAUNCH_UNAVAILABLE_REASON_MIRROR_TARGET_UNSUPPORTED",
        localName: "MIRROR_TARGET_UNSUPPORTED"
    },
    {
        no: 8,
        name: "PR_AGENT_LAUNCH_UNAVAILABLE_REASON_STATE_UNAVAILABLE",
        localName: "STATE_UNAVAILABLE"
    }
]);
const SCMPullRequestStackSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.SCMPullRequestStackSource", [
    {
        no: 0,
        name: "SCM_PULL_REQUEST_STACK_SOURCE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SCM_PULL_REQUEST_STACK_SOURCE_ORIGIN"
    },
    {
        no: 2,
        name: "SCM_PULL_REQUEST_STACK_SOURCE_GRAPHITE"
    },
    {
        no: 3,
        name: "SCM_PULL_REQUEST_STACK_SOURCE_GITHUB_NATIVE"
    }
]);
const PullRequestFileContentsStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.PullRequestFileContentsStatus", [
    {
        no: 0,
        name: "PULL_REQUEST_FILE_CONTENTS_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PULL_REQUEST_FILE_CONTENTS_STATUS_OK",
        localName: "OK"
    },
    {
        no: 2,
        name: "PULL_REQUEST_FILE_CONTENTS_STATUS_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 3,
        name: "PULL_REQUEST_FILE_CONTENTS_STATUS_TOO_LARGE",
        localName: "TOO_LARGE"
    },
    {
        no: 4,
        name: "PULL_REQUEST_FILE_CONTENTS_STATUS_NOT_SUPPORTED",
        localName: "NOT_SUPPORTED"
    },
    {
        no: 5,
        name: "PULL_REQUEST_FILE_CONTENTS_STATUS_ERROR",
        localName: "ERROR"
    }
]);
const CheckLogExcerptStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.CheckLogExcerptStatus", [
    {
        no: 0,
        name: "CHECK_LOG_EXCERPT_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CHECK_LOG_EXCERPT_STATUS_OK",
        localName: "OK"
    },
    {
        no: 2,
        name: "CHECK_LOG_EXCERPT_STATUS_NOT_SUPPORTED",
        localName: "NOT_SUPPORTED"
    },
    {
        no: 3,
        name: "CHECK_LOG_EXCERPT_STATUS_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 4,
        name: "CHECK_LOG_EXCERPT_STATUS_INSUFFICIENT_PERMISSIONS",
        localName: "INSUFFICIENT_PERMISSIONS"
    },
    {
        no: 5,
        name: "CHECK_LOG_EXCERPT_STATUS_AUTH_REQUIRED",
        localName: "AUTH_REQUIRED"
    },
    {
        no: 6,
        name: "CHECK_LOG_EXCERPT_STATUS_ERROR",
        localName: "ERROR"
    }
]);
const GetPullRequestRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetPullRequestRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "skip_cache",
            kind: "scalar",
            T: 8
        }
    ]);
const GetPullRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetPullRequestResponse", ()=>[
        {
            no: 1,
            name: "pull_request",
            kind: "message",
            T: SCMPullRequest
        }
    ]);
const GetPrAgentContextRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetPrAgentContextRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "expected_scope",
            kind: "message",
            T: _cloud_agent_scope_pb_js__WEBPACK_IMPORTED_MODULE_1__.CloudAgentRequestScope,
            opt: true
        }
    ]);
const PrAgentRepository = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PrAgentRepository", ()=>[
        {
            no: 1,
            name: "host",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "clone_url",
            kind: "scalar",
            T: 9
        }
    ]);
const PrAgentRef = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PrAgentRef", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: PrAgentRepository
        },
        {
            no: 2,
            name: "ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "sha",
            kind: "scalar",
            T: 9
        }
    ]);
const PrAgentAuthor = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PrAgentAuthor", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "login",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "display_name",
            kind: "scalar",
            T: 9
        }
    ]);
const PrAgentContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PrAgentContext", ()=>[
        {
            no: 1,
            name: "forge",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(PrAgentForge)
        },
        {
            no: 2,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "author",
            kind: "message",
            T: PrAgentAuthor
        },
        {
            no: 8,
            name: "state",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SCMPullRequestState)
        },
        {
            no: 9,
            name: "is_draft",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "base",
            kind: "message",
            T: PrAgentRef
        },
        {
            no: 11,
            name: "head",
            kind: "message",
            T: PrAgentRef
        },
        {
            no: 12,
            name: "viewer_can_write_head",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 13,
            name: "launch_unavailable_reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(PrAgentLaunchUnavailableReason)
        },
        {
            no: 14,
            name: "git_enterprise_uuid",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 15,
            name: "head_branch_missing",
            kind: "scalar",
            T: 8
        }
    ]);
const GetPrAgentContextResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetPrAgentContextResponse", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: PrAgentContext
        }
    ]);
const GetPullRequestStackRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetPullRequestStackRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]);
const GetPullRequestStackResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetPullRequestStackResponse", ()=>[
        {
            no: 1,
            name: "stack",
            kind: "message",
            T: SCMPullRequestStack,
            opt: true
        }
    ]);
const SCMPullRequestStack = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMPullRequestStack", ()=>[
        {
            no: 1,
            name: "source",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SCMPullRequestStackSource)
        },
        {
            no: 2,
            name: "members",
            kind: "message",
            T: SCMPullRequestStackMember,
            repeated: true
        },
        {
            no: 3,
            name: "edges",
            kind: "message",
            T: SCMPullRequestStackEdge,
            repeated: true
        },
        {
            no: 4,
            name: "base_ref_name",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SCMPullRequestStackMember = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMPullRequestStackMember", ()=>[
        {
            no: 1,
            name: "pull_request",
            kind: "message",
            T: SCMPullRequest
        },
        {
            no: 2,
            name: "position",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const SCMPullRequestStackEdge = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMPullRequestStackEdge", ()=>[
        {
            no: 1,
            name: "parent_pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "child_pr_url",
            kind: "scalar",
            T: 9
        }
    ]);
const BatchGetPullRequestsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BatchGetPullRequestsRequest", ()=>[
        {
            no: 1,
            name: "pr_urls",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "skip_cache",
            kind: "scalar",
            T: 8
        }
    ]);
const BatchGetPullRequestsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BatchGetPullRequestsResponse", ()=>[
        {
            no: 1,
            name: "pull_requests",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: SCMPullRequest
            }
        },
        {
            no: 2,
            name: "failed_pr_urls",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const BatchGetPullRequestStatusRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BatchGetPullRequestStatusRequest", ()=>[
        {
            no: 1,
            name: "pr_urls",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "skip_cache",
            kind: "scalar",
            T: 8
        }
    ]);
const BatchGetPullRequestStatusResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BatchGetPullRequestStatusResponse", ()=>[
        {
            no: 1,
            name: "statuses",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: SCMPullRequestStatus
            }
        },
        {
            no: 2,
            name: "failed_pr_urls",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const SCMPullRequestStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMPullRequestStatus", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "state",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SCMPullRequestState)
        },
        {
            no: 3,
            name: "is_merged",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "is_draft",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "degraded_by_rate_limit",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "updated_at",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SCMPullRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMPullRequest", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "state",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SCMPullRequestState)
        },
        {
            no: 6,
            name: "is_merged",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "is_draft",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "repository",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "head_ref_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "base_ref_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "mergeable",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SCMMergeability)
        },
        {
            no: 12,
            name: "merge_state_status",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "review_decision",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 14,
            name: "ci_status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SCMCiStatus)
        },
        {
            no: 15,
            name: "author_login",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 16,
            name: "created_at",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 17,
            name: "updated_at",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 18,
            name: "merged_at",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 19,
            name: "closed_at",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 20,
            name: "is_auto_merge_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 21,
            name: "viewer_can_enable_auto_merge",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 22,
            name: "body",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 23,
            name: "commit_count",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 24,
            name: "review_count",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 25,
            name: "reviewers",
            kind: "message",
            T: SCMPullRequestReviewer,
            repeated: true
        },
        {
            no: 26,
            name: "requested_reviewers",
            kind: "message",
            T: SCMPullRequestRequestedReviewer,
            repeated: true
        },
        {
            no: 27,
            name: "merge_status_degraded_by_rate_limit",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 28,
            name: "requires_merge_queue",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 29,
            name: "is_in_merge_queue",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 30,
            name: "author_avatar_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 31,
            name: "stack_parent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 32,
            name: "stack_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 33,
            name: "stack_source",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SCMPullRequestStackSource)
        },
        {
            no: 34,
            name: "stack_position",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 35,
            name: "ci_failures_await_action",
            kind: "scalar",
            T: 8
        },
        {
            no: 37,
            name: "mergeability_verdict",
            kind: "message",
            T: SCMPullRequestMergeabilityVerdict,
            opt: true
        }
    ]);
const SCMPullRequestMergeabilityVerdict = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMPullRequestMergeabilityVerdict", ()=>[
        {
            no: 1,
            name: "verdict",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "blockers",
            kind: "message",
            T: SCMPullRequestMergeabilityBlocker,
            repeated: true
        },
        {
            no: 3,
            name: "landed_pull_request_numbers",
            kind: "scalar",
            T: 5,
            repeated: true
        },
        {
            no: 4,
            name: "default_merge_method",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SCMMergeMethod),
            opt: true
        },
        {
            no: 5,
            name: "evaluated_head_sha",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SCMPullRequestMergeabilityBlocker = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMPullRequestMergeabilityBlocker", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "pull_request_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "required_checks_state",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "required_approval_count",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 6,
            name: "approved_count",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "conflict_inherited_from_downstack",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "invalid_stack_reason",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SCMPullRequestReviewer = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMPullRequestReviewer", ()=>[
        {
            no: 1,
            name: "login",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "avatar_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "state",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SCMPullRequestRequestedReviewer = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMPullRequestRequestedReviewer", ()=>[
        {
            no: 1,
            name: "login",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "avatar_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "kind",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const GetPullRequestDiffRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetPullRequestDiffRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]);
const GetPullRequestFileContentsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetPullRequestFileContentsRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "max_bytes",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
const GetPullRequestFileContentsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetPullRequestFileContentsResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(PullRequestFileContentsStatus)
        },
        {
            no: 2,
            name: "content_base64",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "size_bytes",
            kind: "scalar",
            T: 4
        }
    ]);
const GetPullRequestChecksRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetPullRequestChecksRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "skip_cache",
            kind: "scalar",
            T: 8
        }
    ]);
const GetPullRequestChecksResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetPullRequestChecksResponse", ()=>[
        {
            no: 1,
            name: "check_status",
            kind: "message",
            T: PRCheckStatus,
            opt: true
        }
    ]);
const PRCheckStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PRCheckStatus", ()=>[
        {
            no: 1,
            name: "overall_state",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "success_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "failure_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "pending_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "neutral_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "skipped_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "total_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "checks",
            kind: "message",
            T: PRCheck,
            repeated: true
        },
        {
            no: 9,
            name: "required_failure_count",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 10,
            name: "required_pending_count",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 11,
            name: "action_required_count",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const PRCheckAnnotation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PRCheckAnnotation", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "annotation_level",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
const PRCheck = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PRCheck", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "details_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "started_at",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "completed_at",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "provider",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "provider_check_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "can_rerun",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "rerun_disabled_reason",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "annotations",
            kind: "message",
            T: PRCheckAnnotation,
            repeated: true
        },
        {
            no: 12,
            name: "annotations_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "is_required",
            kind: "scalar",
            T: 8
        }
    ]);
const GetSCMPullRequestCommitsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetSCMPullRequestCommitsRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "after_cursor",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "skip_cache",
            kind: "scalar",
            T: 8
        }
    ]);
const GetSCMPullRequestCommitsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetSCMPullRequestCommitsResponse", ()=>[
        {
            no: 1,
            name: "commits",
            kind: "message",
            T: SCMPullRequestCommit,
            repeated: true
        },
        {
            no: 2,
            name: "has_next_page",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "end_cursor",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SCMPullRequestCommit = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMPullRequestCommit", ()=>[
        {
            no: 1,
            name: "sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "committed_date",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "additions",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "deletions",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "changed_files",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "author",
            kind: "message",
            T: SCMPullRequestCommitUser,
            opt: true
        },
        {
            no: 8,
            name: "committer",
            kind: "message",
            T: SCMPullRequestCommitUser,
            opt: true
        },
        {
            no: 9,
            name: "authors",
            kind: "message",
            T: SCMPullRequestCommitUser,
            repeated: true
        }
    ]);
const SCMPullRequestCommitUser = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMPullRequestCommitUser", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "email",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "avatar_url",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const GetSCMPullRequestTimelineEventsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetSCMPullRequestTimelineEventsRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "page",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "skip_cache",
            kind: "scalar",
            T: 8
        }
    ]);
const GetSCMPullRequestTimelineEventsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetSCMPullRequestTimelineEventsResponse", ()=>[
        {
            no: 1,
            name: "events",
            kind: "message",
            T: SCMPullRequestTimelineEvent,
            repeated: true
        },
        {
            no: 2,
            name: "has_next_page",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "next_page",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const SCMPullRequestTimelineEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMPullRequestTimelineEvent", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "event_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "created_at",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "actor",
            kind: "message",
            T: SCMPullRequestTimelineActor,
            opt: true
        },
        {
            no: 5,
            name: "label",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "body",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "system_actor",
            kind: "scalar",
            T: 8
        }
    ]);
const SCMPullRequestTimelineActor = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMPullRequestTimelineActor", ()=>[
        {
            no: 1,
            name: "login",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "avatar_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const GetPullRequestDiffResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetPullRequestDiffResponse", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: SCMPullRequestDiffFile,
            repeated: true
        },
        {
            no: 2,
            name: "base_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "head_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "base_ref_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "head_ref_name",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const GetBranchComparisonRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetBranchComparisonRequest", ()=>[
        {
            no: 1,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const GetBranchComparisonResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetBranchComparisonResponse", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: SCMPullRequestDiffFile,
            repeated: true
        },
        {
            no: 2,
            name: "base_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "head_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "base_branch",
            kind: "scalar",
            T: 9
        }
    ]);
const SCMGetPullRequestForBranchRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMGetPullRequestForBranchRequest", ()=>[
        {
            no: 1,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "skip_cache",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const SCMGetPullRequestForBranchResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMGetPullRequestForBranchResponse", ()=>[
        {
            no: 1,
            name: "pr_urls",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const SCMBranchRef = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMBranchRef", ()=>[
        {
            no: 1,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9
        }
    ]);
const SCMBatchGetPullRequestForBranchRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMBatchGetPullRequestForBranchRequest", ()=>[
        {
            no: 1,
            name: "branches",
            kind: "message",
            T: SCMBranchRef,
            repeated: true
        },
        {
            no: 2,
            name: "skip_cache",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const SCMBranchPullRequests = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMBranchPullRequests", ()=>[
        {
            no: 1,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "pr_urls",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const SCMBatchGetPullRequestForBranchResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMBatchGetPullRequestForBranchResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: SCMBranchPullRequests,
            repeated: true
        }
    ]);
const SCMPullRequestDiffFile = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMPullRequestDiffFile", ()=>[
        {
            no: 1,
            name: "filename",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "previous_filename",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SCMPullRequestDiffFileStatus)
        },
        {
            no: 4,
            name: "original_contents",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "modified_contents",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "patch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "is_generated",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const SCMMergePullRequestRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMMergePullRequestRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "merge_method",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SCMMergeMethod)
        },
        {
            no: 3,
            name: "use_merge_queue",
            kind: "scalar",
            T: 8
        }
    ]);
const SCMMergePullRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMMergePullRequestResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "pr_node_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "was_enqueued",
            kind: "scalar",
            T: 8
        }
    ]);
const SCMUpdatePullRequestTitleRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMUpdatePullRequestTitleRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        }
    ]);
const SCMUpdatePullRequestTitleResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMUpdatePullRequestTitleResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const SCMMakePullRequestReadyRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMMakePullRequestReadyRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]);
const SCMMakePullRequestReadyResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMMakePullRequestReadyResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const SCMClosePullRequestRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMClosePullRequestRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]);
const SCMClosePullRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMClosePullRequestResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const SCMReopenPullRequestRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMReopenPullRequestRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]);
const SCMReopenPullRequestResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMReopenPullRequestResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const SCMEnablePullRequestAutoMergeRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMEnablePullRequestAutoMergeRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "merge_method",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SCMMergeMethod)
        }
    ]);
const SCMEnablePullRequestAutoMergeResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMEnablePullRequestAutoMergeResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "pr_node_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SCMDisablePullRequestAutoMergeRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMDisablePullRequestAutoMergeRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]);
const SCMDisablePullRequestAutoMergeResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMDisablePullRequestAutoMergeResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "pr_node_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SCMRemovePullRequestFromMergeQueueRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMRemovePullRequestFromMergeQueueRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]);
const SCMRemovePullRequestFromMergeQueueResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SCMRemovePullRequestFromMergeQueueResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const GetPullRequestCheckLogExcerptRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetPullRequestCheckLogExcerptRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "provider",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "provider_check_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "max_bytes",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
const GetPullRequestCodeownersRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetPullRequestCodeownersRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "skip_cache",
            kind: "scalar",
            T: 8
        }
    ]);
const PullRequestPathCodeowners = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PullRequestPathCodeowners", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "owners",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const GetPullRequestCodeownersResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetPullRequestCodeownersResponse", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: PullRequestPathCodeowners,
            repeated: true
        }
    ]);
const StreamPullRequestUpdatesRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamPullRequestUpdatesRequest", ()=>[
        {
            no: 1,
            name: "pr_urls",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const PullRequestUpdatedNotification = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PullRequestUpdatedNotification", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]);
const PullRequestUpdatesHeartbeat = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PullRequestUpdatesHeartbeat", []);
const PullRequestUpdatedEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PullRequestUpdatedEvent", ()=>[
        {
            no: 1,
            name: "updated",
            kind: "message",
            T: PullRequestUpdatedNotification,
            oneof: "event"
        },
        {
            no: 2,
            name: "heartbeat",
            kind: "message",
            T: PullRequestUpdatesHeartbeat,
            oneof: "event"
        }
    ]);
const GetPullRequestCheckLogExcerptResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetPullRequestCheckLogExcerptResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CheckLogExcerptStatus)
        },
        {
            no: 2,
            name: "excerpt",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "total_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
