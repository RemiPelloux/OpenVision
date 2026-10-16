import { Z9o, f7 } from "./cloud_agent_scope_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var BGt, nZr, Swi, mEn, bCt, QEm, JEm, UGt, gEn, kot, BHa, UHa, eIm, tIm, jHa, nIm, iIm, rIm, sIm, oIm, aIm, lIm, cIm, uIm, dIm, hIm, pIm, mIm, iZr, $Ha, gIm, fIm, vIm, HHa, _Im, bIm, WHa, GHa, kwi, yIm, SIm, qHa, zHa, kIm, rZr, wIm, CIm, TIm, EIm, VHa, IIm, xIm, AIm, RIm, PIm, MIm, DIm, NIm, KHa, LIm, OIm, FIm, BIm, UIm, jIm, $Im, HIm, WIm, GIm, qIm, zIm, VIm, KIm, YIm, XIm, ZIm, QIm, JIm, exm, txm, nxm, ixm, rxm, sxm;
export { $Ha, $Im, AIm, BGt, BHa, BIm, CIm, DIm, EIm, FIm, GHa, GIm, HHa, HIm, IIm, JEm, JIm, KHa, KIm, LIm, MIm, NIm, OIm, PIm, QEm, QIm, RIm, SIm, Swi, TIm, UGt, UHa, UIm, VHa, VIm, WHa, WIm, XIm, YIm, ZIm, _Im, aIm, bCt, bIm, cIm, dIm, eIm, exm, fIm, gEn, gIm, hIm, iIm, iZr, ixm, jHa, jIm, kIm, kot, kwi, lIm, mEn, mIm, nIm, nZr, nxm, oIm, pIm, qHa, qIm, rIm, rZr, rxm, sIm, sxm, tIm, txm, uIm, vIm, wIm, xIm, yIm, zHa, zIm };
var __wakaru_sZr_initialized = false;
export function sZr() {
if (__wakaru_sZr_initialized) return;
__wakaru_sZr_initialized = true;
"use strict";
E(), hr(), Z9o(), BGt = x.makeEnum("aiserver.v1.SCMPullRequestState", [
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
]), nZr = x.makeEnum("aiserver.v1.SCMMergeability", [
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
]), Swi = x.makeEnum("aiserver.v1.SCMCiStatus", [
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
]), mEn = x.makeEnum("aiserver.v1.SCMPullRequestDiffFileStatus", [
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
]), bCt = x.makeEnum("aiserver.v1.SCMMergeMethod", [
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
]), QEm = x.makeEnum("aiserver.v1.PrAgentForge", [
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
]), JEm = x.makeEnum("aiserver.v1.PrAgentLaunchUnavailableReason", [
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
]), UGt = x.makeEnum("aiserver.v1.SCMPullRequestStackSource", [
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
]), gEn = x.makeEnum("aiserver.v1.PullRequestFileContentsStatus", [
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
]), kot = x.makeEnum("aiserver.v1.CheckLogExcerptStatus", [
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
]), BHa = x.makeMessageType("aiserver.v1.GetPullRequestRequest", ()=>[
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
    ]), UHa = x.makeMessageType("aiserver.v1.GetPullRequestResponse", ()=>[
        {
            no: 1,
            name: "pull_request",
            kind: "message",
            T: iZr
        }
    ]), eIm = x.makeMessageType("aiserver.v1.GetPrAgentContextRequest", ()=>[
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
            T: f7,
            opt: !0
        }
    ]), tIm = x.makeMessageType("aiserver.v1.PrAgentRepository", ()=>[
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
    ]), jHa = x.makeMessageType("aiserver.v1.PrAgentRef", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: tIm
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
    ]), nIm = x.makeMessageType("aiserver.v1.PrAgentAuthor", ()=>[
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
    ]), iIm = x.makeMessageType("aiserver.v1.PrAgentContext", ()=>[
        {
            no: 1,
            name: "forge",
            kind: "enum",
            T: x.getEnumType(QEm)
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
            T: nIm
        },
        {
            no: 8,
            name: "state",
            kind: "enum",
            T: x.getEnumType(BGt)
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
            T: jHa
        },
        {
            no: 11,
            name: "head",
            kind: "message",
            T: jHa
        },
        {
            no: 12,
            name: "viewer_can_write_head",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 13,
            name: "launch_unavailable_reason",
            kind: "enum",
            T: x.getEnumType(JEm)
        },
        {
            no: 14,
            name: "git_enterprise_uuid",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "head_branch_missing",
            kind: "scalar",
            T: 8
        }
    ]), rIm = x.makeMessageType("aiserver.v1.GetPrAgentContextResponse", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: iIm
        }
    ]), sIm = x.makeMessageType("aiserver.v1.GetPullRequestStackRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), oIm = x.makeMessageType("aiserver.v1.GetPullRequestStackResponse", ()=>[
        {
            no: 1,
            name: "stack",
            kind: "message",
            T: aIm,
            opt: !0
        }
    ]), aIm = x.makeMessageType("aiserver.v1.SCMPullRequestStack", ()=>[
        {
            no: 1,
            name: "source",
            kind: "enum",
            T: x.getEnumType(UGt)
        },
        {
            no: 2,
            name: "members",
            kind: "message",
            T: lIm,
            repeated: !0
        },
        {
            no: 3,
            name: "edges",
            kind: "message",
            T: cIm,
            repeated: !0
        },
        {
            no: 4,
            name: "base_ref_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), lIm = x.makeMessageType("aiserver.v1.SCMPullRequestStackMember", ()=>[
        {
            no: 1,
            name: "pull_request",
            kind: "message",
            T: iZr
        },
        {
            no: 2,
            name: "position",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), cIm = x.makeMessageType("aiserver.v1.SCMPullRequestStackEdge", ()=>[
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
    ]), uIm = x.makeMessageType("aiserver.v1.BatchGetPullRequestsRequest", ()=>[
        {
            no: 1,
            name: "pr_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "skip_cache",
            kind: "scalar",
            T: 8
        }
    ]), dIm = x.makeMessageType("aiserver.v1.BatchGetPullRequestsResponse", ()=>[
        {
            no: 1,
            name: "pull_requests",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: iZr
            }
        },
        {
            no: 2,
            name: "failed_pr_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), hIm = x.makeMessageType("aiserver.v1.BatchGetPullRequestStatusRequest", ()=>[
        {
            no: 1,
            name: "pr_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "skip_cache",
            kind: "scalar",
            T: 8
        }
    ]), pIm = x.makeMessageType("aiserver.v1.BatchGetPullRequestStatusResponse", ()=>[
        {
            no: 1,
            name: "statuses",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: mIm
            }
        },
        {
            no: 2,
            name: "failed_pr_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), mIm = x.makeMessageType("aiserver.v1.SCMPullRequestStatus", ()=>[
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
            T: x.getEnumType(BGt)
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
            opt: !0
        },
        {
            no: 6,
            name: "updated_at",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), iZr = x.makeMessageType("aiserver.v1.SCMPullRequest", ()=>[
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
            T: x.getEnumType(BGt)
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
            opt: !0
        },
        {
            no: 10,
            name: "base_ref_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "mergeable",
            kind: "enum",
            T: x.getEnumType(nZr)
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
            opt: !0
        },
        {
            no: 14,
            name: "ci_status",
            kind: "enum",
            T: x.getEnumType(Swi)
        },
        {
            no: 15,
            name: "author_login",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 16,
            name: "created_at",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 17,
            name: "updated_at",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 18,
            name: "merged_at",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 19,
            name: "closed_at",
            kind: "scalar",
            T: 9,
            opt: !0
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
            opt: !0
        },
        {
            no: 22,
            name: "body",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 23,
            name: "commit_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 24,
            name: "review_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 25,
            name: "reviewers",
            kind: "message",
            T: fIm,
            repeated: !0
        },
        {
            no: 26,
            name: "requested_reviewers",
            kind: "message",
            T: vIm,
            repeated: !0
        },
        {
            no: 27,
            name: "merge_status_degraded_by_rate_limit",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 28,
            name: "requires_merge_queue",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 29,
            name: "is_in_merge_queue",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 30,
            name: "author_avatar_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 31,
            name: "stack_parent_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 32,
            name: "stack_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 33,
            name: "stack_source",
            kind: "enum",
            T: x.getEnumType(UGt)
        },
        {
            no: 34,
            name: "stack_position",
            kind: "scalar",
            T: 13,
            opt: !0
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
            T: $Ha,
            opt: !0
        }
    ]), $Ha = x.makeMessageType("aiserver.v1.SCMPullRequestMergeabilityVerdict", ()=>[
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
            T: gIm,
            repeated: !0
        },
        {
            no: 3,
            name: "landed_pull_request_numbers",
            kind: "scalar",
            T: 5,
            repeated: !0
        },
        {
            no: 4,
            name: "default_merge_method",
            kind: "enum",
            T: x.getEnumType(bCt),
            opt: !0
        },
        {
            no: 5,
            name: "evaluated_head_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), gIm = x.makeMessageType("aiserver.v1.SCMPullRequestMergeabilityBlocker", ()=>[
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
            opt: !0
        },
        {
            no: 5,
            name: "required_approval_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "approved_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "conflict_inherited_from_downstack",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "invalid_stack_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), fIm = x.makeMessageType("aiserver.v1.SCMPullRequestReviewer", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "avatar_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "state",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), vIm = x.makeMessageType("aiserver.v1.SCMPullRequestRequestedReviewer", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "avatar_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "kind",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), HHa = x.makeMessageType("aiserver.v1.GetPullRequestDiffRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), _Im = x.makeMessageType("aiserver.v1.GetPullRequestFileContentsRequest", ()=>[
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
            opt: !0
        }
    ]), bIm = x.makeMessageType("aiserver.v1.GetPullRequestFileContentsResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(gEn)
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
    ]), WHa = x.makeMessageType("aiserver.v1.GetPullRequestChecksRequest", ()=>[
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
    ]), GHa = x.makeMessageType("aiserver.v1.GetPullRequestChecksResponse", ()=>[
        {
            no: 1,
            name: "check_status",
            kind: "message",
            T: kwi,
            opt: !0
        }
    ]), kwi = x.makeMessageType("aiserver.v1.PRCheckStatus", ()=>[
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
            T: SIm,
            repeated: !0
        },
        {
            no: 9,
            name: "required_failure_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 10,
            name: "required_pending_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 11,
            name: "action_required_count",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), yIm = x.makeMessageType("aiserver.v1.PRCheckAnnotation", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "annotation_level",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), SIm = x.makeMessageType("aiserver.v1.PRCheck", ()=>[
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
            opt: !0
        },
        {
            no: 4,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "started_at",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "completed_at",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "provider",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "provider_check_id",
            kind: "scalar",
            T: 9,
            opt: !0
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
            opt: !0
        },
        {
            no: 11,
            name: "annotations",
            kind: "message",
            T: yIm,
            repeated: !0
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
    ]), qHa = x.makeMessageType("aiserver.v1.GetSCMPullRequestCommitsRequest", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "skip_cache",
            kind: "scalar",
            T: 8
        }
    ]), zHa = x.makeMessageType("aiserver.v1.GetSCMPullRequestCommitsResponse", ()=>[
        {
            no: 1,
            name: "commits",
            kind: "message",
            T: kIm,
            repeated: !0
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
            opt: !0
        }
    ]), kIm = x.makeMessageType("aiserver.v1.SCMPullRequestCommit", ()=>[
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
            opt: !0
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
            opt: !0
        },
        {
            no: 7,
            name: "author",
            kind: "message",
            T: rZr,
            opt: !0
        },
        {
            no: 8,
            name: "committer",
            kind: "message",
            T: rZr,
            opt: !0
        },
        {
            no: 9,
            name: "authors",
            kind: "message",
            T: rZr,
            repeated: !0
        }
    ]), rZr = x.makeMessageType("aiserver.v1.SCMPullRequestCommitUser", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "email",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "avatar_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), wIm = x.makeMessageType("aiserver.v1.GetSCMPullRequestTimelineEventsRequest", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "skip_cache",
            kind: "scalar",
            T: 8
        }
    ]), CIm = x.makeMessageType("aiserver.v1.GetSCMPullRequestTimelineEventsResponse", ()=>[
        {
            no: 1,
            name: "events",
            kind: "message",
            T: TIm,
            repeated: !0
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
            opt: !0
        }
    ]), TIm = x.makeMessageType("aiserver.v1.SCMPullRequestTimelineEvent", ()=>[
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
            T: EIm,
            opt: !0
        },
        {
            no: 5,
            name: "label",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "body",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "system_actor",
            kind: "scalar",
            T: 8
        }
    ]), EIm = x.makeMessageType("aiserver.v1.SCMPullRequestTimelineActor", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), VHa = x.makeMessageType("aiserver.v1.GetPullRequestDiffResponse", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: KHa,
            repeated: !0
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
            opt: !0
        },
        {
            no: 5,
            name: "head_ref_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), IIm = x.makeMessageType("aiserver.v1.GetBranchComparisonRequest", ()=>[
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
            opt: !0
        }
    ]), xIm = x.makeMessageType("aiserver.v1.GetBranchComparisonResponse", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: KHa,
            repeated: !0
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
    ]), AIm = x.makeMessageType("aiserver.v1.SCMGetPullRequestForBranchRequest", ()=>[
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
            opt: !0
        }
    ]), RIm = x.makeMessageType("aiserver.v1.SCMGetPullRequestForBranchResponse", ()=>[
        {
            no: 1,
            name: "pr_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), PIm = x.makeMessageType("aiserver.v1.SCMBranchRef", ()=>[
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
    ]), MIm = x.makeMessageType("aiserver.v1.SCMBatchGetPullRequestForBranchRequest", ()=>[
        {
            no: 1,
            name: "branches",
            kind: "message",
            T: PIm,
            repeated: !0
        },
        {
            no: 2,
            name: "skip_cache",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), DIm = x.makeMessageType("aiserver.v1.SCMBranchPullRequests", ()=>[
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
            repeated: !0
        }
    ]), NIm = x.makeMessageType("aiserver.v1.SCMBatchGetPullRequestForBranchResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: DIm,
            repeated: !0
        }
    ]), KHa = x.makeMessageType("aiserver.v1.SCMPullRequestDiffFile", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "status",
            kind: "enum",
            T: x.getEnumType(mEn)
        },
        {
            no: 4,
            name: "original_contents",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "modified_contents",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "patch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "is_generated",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), LIm = x.makeMessageType("aiserver.v1.SCMMergePullRequestRequest", ()=>[
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
            T: x.getEnumType(bCt)
        },
        {
            no: 3,
            name: "use_merge_queue",
            kind: "scalar",
            T: 8
        }
    ]), OIm = x.makeMessageType("aiserver.v1.SCMMergePullRequestResponse", ()=>[
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
            opt: !0
        },
        {
            no: 4,
            name: "was_enqueued",
            kind: "scalar",
            T: 8
        }
    ]), FIm = x.makeMessageType("aiserver.v1.SCMUpdatePullRequestTitleRequest", ()=>[
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
    ]), BIm = x.makeMessageType("aiserver.v1.SCMUpdatePullRequestTitleResponse", ()=>[
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
    ]), UIm = x.makeMessageType("aiserver.v1.SCMMakePullRequestReadyRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), jIm = x.makeMessageType("aiserver.v1.SCMMakePullRequestReadyResponse", ()=>[
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
    ]), $Im = x.makeMessageType("aiserver.v1.SCMClosePullRequestRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), HIm = x.makeMessageType("aiserver.v1.SCMClosePullRequestResponse", ()=>[
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
    ]), WIm = x.makeMessageType("aiserver.v1.SCMReopenPullRequestRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), GIm = x.makeMessageType("aiserver.v1.SCMReopenPullRequestResponse", ()=>[
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
    ]), qIm = x.makeMessageType("aiserver.v1.SCMEnablePullRequestAutoMergeRequest", ()=>[
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
            T: x.getEnumType(bCt)
        }
    ]), zIm = x.makeMessageType("aiserver.v1.SCMEnablePullRequestAutoMergeResponse", ()=>[
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
            opt: !0
        }
    ]), VIm = x.makeMessageType("aiserver.v1.SCMDisablePullRequestAutoMergeRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), KIm = x.makeMessageType("aiserver.v1.SCMDisablePullRequestAutoMergeResponse", ()=>[
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
            opt: !0
        }
    ]), YIm = x.makeMessageType("aiserver.v1.SCMRemovePullRequestFromMergeQueueRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), XIm = x.makeMessageType("aiserver.v1.SCMRemovePullRequestFromMergeQueueResponse", ()=>[
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
    ]), ZIm = x.makeMessageType("aiserver.v1.GetPullRequestCheckLogExcerptRequest", ()=>[
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
            opt: !0
        }
    ]), QIm = x.makeMessageType("aiserver.v1.GetPullRequestCodeownersRequest", ()=>[
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
            repeated: !0
        },
        {
            no: 3,
            name: "skip_cache",
            kind: "scalar",
            T: 8
        }
    ]), JIm = x.makeMessageType("aiserver.v1.PullRequestPathCodeowners", ()=>[
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
            repeated: !0
        }
    ]), exm = x.makeMessageType("aiserver.v1.GetPullRequestCodeownersResponse", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: JIm,
            repeated: !0
        }
    ]), txm = x.makeMessageType("aiserver.v1.StreamPullRequestUpdatesRequest", ()=>[
        {
            no: 1,
            name: "pr_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), nxm = x.makeMessageType("aiserver.v1.PullRequestUpdatedNotification", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), ixm = x.makeMessageType("aiserver.v1.PullRequestUpdatesHeartbeat", []), rxm = x.makeMessageType("aiserver.v1.PullRequestUpdatedEvent", ()=>[
        {
            no: 1,
            name: "updated",
            kind: "message",
            T: nxm,
            oneof: "event"
        },
        {
            no: 2,
            name: "heartbeat",
            kind: "message",
            T: ixm,
            oneof: "event"
        }
    ]), sxm = x.makeMessageType("aiserver.v1.GetPullRequestCheckLogExcerptResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(kot)
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

}
