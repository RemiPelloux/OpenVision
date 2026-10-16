import { j3, jno } from "./cloud_agent_scope_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var Dkt, xVi, GNn, EWt, det, MBd, PBd, Mkt, xWt, bUe, vlo, _lo, LBd, NBd, blo, OBd, FBd, BBd, UBd, $Bd, HBd, WBd, GBd, VBd, jBd, qBd, zBd, KBd, IVi, ylo, YBd, XBd, ZBd, Slo, QBd, JBd, klo, wlo, AVi, e5d, t5d, Clo, Tlo, n5d, RVi, i5d, r5d, s5d, o5d, Elo, a5d, c5d, l5d, u5d, d5d, h5d, p5d, m5d, xlo, g5d, f5d, v5d, _5d, b5d, y5d, S5d, k5d, w5d, C5d, T5d, E5d, x5d, I5d, A5d, R5d, D5d, M5d, P5d, L5d, N5d, O5d, F5d, B5d, U5d;
export { $Bd, A5d, AVi, B5d, BBd, C5d, Clo, D5d, Dkt, E5d, EWt, Elo, F5d, FBd, GBd, GNn, HBd, I5d, IVi, JBd, KBd, L5d, LBd, M5d, MBd, Mkt, N5d, NBd, O5d, OBd, P5d, PBd, QBd, R5d, RVi, S5d, Slo, T5d, Tlo, U5d, UBd, VBd, WBd, XBd, YBd, ZBd, _5d, _lo, a5d, b5d, bUe, blo, c5d, d5d, det, e5d, f5d, g5d, h5d, i5d, jBd, k5d, klo, l5d, m5d, n5d, o5d, p5d, qBd, r5d, s5d, t5d, u5d, v5d, vlo, w5d, wlo, x5d, xVi, xWt, xlo, y5d, ylo, zBd };
var __wakaru_Ilo_initialized = false;
export function Ilo() {
if (__wakaru_Ilo_initialized) return;
__wakaru_Ilo_initialized = true;
"use strict";
x(), bi(), jno(), Dkt = k.makeEnum("aiserver.v1.SCMPullRequestState", [
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
]), xVi = k.makeEnum("aiserver.v1.SCMMergeability", [
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
]), GNn = k.makeEnum("aiserver.v1.SCMCiStatus", [
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
]), EWt = k.makeEnum("aiserver.v1.SCMPullRequestDiffFileStatus", [
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
]), det = k.makeEnum("aiserver.v1.SCMMergeMethod", [
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
]), MBd = k.makeEnum("aiserver.v1.PrAgentForge", [
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
]), PBd = k.makeEnum("aiserver.v1.PrAgentLaunchUnavailableReason", [
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
]), Mkt = k.makeEnum("aiserver.v1.SCMPullRequestStackSource", [
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
]), xWt = k.makeEnum("aiserver.v1.PullRequestFileContentsStatus", [
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
]), bUe = k.makeEnum("aiserver.v1.CheckLogExcerptStatus", [
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
]), vlo = k.makeMessageType("aiserver.v1.GetPullRequestRequest", ()=>[
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
    ]), _lo = k.makeMessageType("aiserver.v1.GetPullRequestResponse", ()=>[
        {
            no: 1,
            name: "pull_request",
            kind: "message",
            T: IVi
        }
    ]), LBd = k.makeMessageType("aiserver.v1.GetPrAgentContextRequest", ()=>[
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
            T: j3,
            opt: !0
        }
    ]), NBd = k.makeMessageType("aiserver.v1.PrAgentRepository", ()=>[
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
    ]), blo = k.makeMessageType("aiserver.v1.PrAgentRef", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: NBd
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
    ]), OBd = k.makeMessageType("aiserver.v1.PrAgentAuthor", ()=>[
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
    ]), FBd = k.makeMessageType("aiserver.v1.PrAgentContext", ()=>[
        {
            no: 1,
            name: "forge",
            kind: "enum",
            T: k.getEnumType(MBd)
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
            T: OBd
        },
        {
            no: 8,
            name: "state",
            kind: "enum",
            T: k.getEnumType(Dkt)
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
            T: blo
        },
        {
            no: 11,
            name: "head",
            kind: "message",
            T: blo
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
            T: k.getEnumType(PBd)
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
    ]), BBd = k.makeMessageType("aiserver.v1.GetPrAgentContextResponse", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: FBd
        }
    ]), UBd = k.makeMessageType("aiserver.v1.GetPullRequestStackRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), $Bd = k.makeMessageType("aiserver.v1.GetPullRequestStackResponse", ()=>[
        {
            no: 1,
            name: "stack",
            kind: "message",
            T: HBd,
            opt: !0
        }
    ]), HBd = k.makeMessageType("aiserver.v1.SCMPullRequestStack", ()=>[
        {
            no: 1,
            name: "source",
            kind: "enum",
            T: k.getEnumType(Mkt)
        },
        {
            no: 2,
            name: "members",
            kind: "message",
            T: WBd,
            repeated: !0
        },
        {
            no: 3,
            name: "edges",
            kind: "message",
            T: GBd,
            repeated: !0
        },
        {
            no: 4,
            name: "base_ref_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), WBd = k.makeMessageType("aiserver.v1.SCMPullRequestStackMember", ()=>[
        {
            no: 1,
            name: "pull_request",
            kind: "message",
            T: IVi
        },
        {
            no: 2,
            name: "position",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), GBd = k.makeMessageType("aiserver.v1.SCMPullRequestStackEdge", ()=>[
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
    ]), VBd = k.makeMessageType("aiserver.v1.BatchGetPullRequestsRequest", ()=>[
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
    ]), jBd = k.makeMessageType("aiserver.v1.BatchGetPullRequestsResponse", ()=>[
        {
            no: 1,
            name: "pull_requests",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: IVi
            }
        },
        {
            no: 2,
            name: "failed_pr_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), qBd = k.makeMessageType("aiserver.v1.BatchGetPullRequestStatusRequest", ()=>[
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
    ]), zBd = k.makeMessageType("aiserver.v1.BatchGetPullRequestStatusResponse", ()=>[
        {
            no: 1,
            name: "statuses",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: KBd
            }
        },
        {
            no: 2,
            name: "failed_pr_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), KBd = k.makeMessageType("aiserver.v1.SCMPullRequestStatus", ()=>[
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
            T: k.getEnumType(Dkt)
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
    ]), IVi = k.makeMessageType("aiserver.v1.SCMPullRequest", ()=>[
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
            T: k.getEnumType(Dkt)
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
            T: k.getEnumType(xVi)
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
            T: k.getEnumType(GNn)
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
            T: XBd,
            repeated: !0
        },
        {
            no: 26,
            name: "requested_reviewers",
            kind: "message",
            T: ZBd,
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
            T: k.getEnumType(Mkt)
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
            T: ylo,
            opt: !0
        }
    ]), ylo = k.makeMessageType("aiserver.v1.SCMPullRequestMergeabilityVerdict", ()=>[
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
            T: YBd,
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
            T: k.getEnumType(det),
            opt: !0
        },
        {
            no: 5,
            name: "evaluated_head_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), YBd = k.makeMessageType("aiserver.v1.SCMPullRequestMergeabilityBlocker", ()=>[
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
    ]), XBd = k.makeMessageType("aiserver.v1.SCMPullRequestReviewer", ()=>[
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
    ]), ZBd = k.makeMessageType("aiserver.v1.SCMPullRequestRequestedReviewer", ()=>[
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
    ]), Slo = k.makeMessageType("aiserver.v1.GetPullRequestDiffRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), QBd = k.makeMessageType("aiserver.v1.GetPullRequestFileContentsRequest", ()=>[
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
    ]), JBd = k.makeMessageType("aiserver.v1.GetPullRequestFileContentsResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(xWt)
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
    ]), klo = k.makeMessageType("aiserver.v1.GetPullRequestChecksRequest", ()=>[
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
    ]), wlo = k.makeMessageType("aiserver.v1.GetPullRequestChecksResponse", ()=>[
        {
            no: 1,
            name: "check_status",
            kind: "message",
            T: AVi,
            opt: !0
        }
    ]), AVi = k.makeMessageType("aiserver.v1.PRCheckStatus", ()=>[
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
            T: t5d,
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
    ]), e5d = k.makeMessageType("aiserver.v1.PRCheckAnnotation", ()=>[
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
    ]), t5d = k.makeMessageType("aiserver.v1.PRCheck", ()=>[
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
            T: e5d,
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
    ]), Clo = k.makeMessageType("aiserver.v1.GetSCMPullRequestCommitsRequest", ()=>[
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
    ]), Tlo = k.makeMessageType("aiserver.v1.GetSCMPullRequestCommitsResponse", ()=>[
        {
            no: 1,
            name: "commits",
            kind: "message",
            T: n5d,
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
    ]), n5d = k.makeMessageType("aiserver.v1.SCMPullRequestCommit", ()=>[
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
            T: RVi,
            opt: !0
        },
        {
            no: 8,
            name: "committer",
            kind: "message",
            T: RVi,
            opt: !0
        },
        {
            no: 9,
            name: "authors",
            kind: "message",
            T: RVi,
            repeated: !0
        }
    ]), RVi = k.makeMessageType("aiserver.v1.SCMPullRequestCommitUser", ()=>[
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
    ]), i5d = k.makeMessageType("aiserver.v1.GetSCMPullRequestTimelineEventsRequest", ()=>[
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
    ]), r5d = k.makeMessageType("aiserver.v1.GetSCMPullRequestTimelineEventsResponse", ()=>[
        {
            no: 1,
            name: "events",
            kind: "message",
            T: s5d,
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
    ]), s5d = k.makeMessageType("aiserver.v1.SCMPullRequestTimelineEvent", ()=>[
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
            T: o5d,
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
    ]), o5d = k.makeMessageType("aiserver.v1.SCMPullRequestTimelineActor", ()=>[
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
    ]), Elo = k.makeMessageType("aiserver.v1.GetPullRequestDiffResponse", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: xlo,
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
    ]), a5d = k.makeMessageType("aiserver.v1.GetBranchComparisonRequest", ()=>[
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
    ]), c5d = k.makeMessageType("aiserver.v1.GetBranchComparisonResponse", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: xlo,
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
    ]), l5d = k.makeMessageType("aiserver.v1.SCMGetPullRequestForBranchRequest", ()=>[
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
    ]), u5d = k.makeMessageType("aiserver.v1.SCMGetPullRequestForBranchResponse", ()=>[
        {
            no: 1,
            name: "pr_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), d5d = k.makeMessageType("aiserver.v1.SCMBranchRef", ()=>[
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
    ]), h5d = k.makeMessageType("aiserver.v1.SCMBatchGetPullRequestForBranchRequest", ()=>[
        {
            no: 1,
            name: "branches",
            kind: "message",
            T: d5d,
            repeated: !0
        },
        {
            no: 2,
            name: "skip_cache",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), p5d = k.makeMessageType("aiserver.v1.SCMBranchPullRequests", ()=>[
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
    ]), m5d = k.makeMessageType("aiserver.v1.SCMBatchGetPullRequestForBranchResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: p5d,
            repeated: !0
        }
    ]), xlo = k.makeMessageType("aiserver.v1.SCMPullRequestDiffFile", ()=>[
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
            T: k.getEnumType(EWt)
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
    ]), g5d = k.makeMessageType("aiserver.v1.SCMMergePullRequestRequest", ()=>[
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
            T: k.getEnumType(det)
        },
        {
            no: 3,
            name: "use_merge_queue",
            kind: "scalar",
            T: 8
        }
    ]), f5d = k.makeMessageType("aiserver.v1.SCMMergePullRequestResponse", ()=>[
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
    ]), v5d = k.makeMessageType("aiserver.v1.SCMUpdatePullRequestTitleRequest", ()=>[
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
    ]), _5d = k.makeMessageType("aiserver.v1.SCMUpdatePullRequestTitleResponse", ()=>[
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
    ]), b5d = k.makeMessageType("aiserver.v1.SCMMakePullRequestReadyRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), y5d = k.makeMessageType("aiserver.v1.SCMMakePullRequestReadyResponse", ()=>[
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
    ]), S5d = k.makeMessageType("aiserver.v1.SCMClosePullRequestRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), k5d = k.makeMessageType("aiserver.v1.SCMClosePullRequestResponse", ()=>[
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
    ]), w5d = k.makeMessageType("aiserver.v1.SCMReopenPullRequestRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), C5d = k.makeMessageType("aiserver.v1.SCMReopenPullRequestResponse", ()=>[
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
    ]), T5d = k.makeMessageType("aiserver.v1.SCMEnablePullRequestAutoMergeRequest", ()=>[
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
            T: k.getEnumType(det)
        }
    ]), E5d = k.makeMessageType("aiserver.v1.SCMEnablePullRequestAutoMergeResponse", ()=>[
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
    ]), x5d = k.makeMessageType("aiserver.v1.SCMDisablePullRequestAutoMergeRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), I5d = k.makeMessageType("aiserver.v1.SCMDisablePullRequestAutoMergeResponse", ()=>[
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
    ]), A5d = k.makeMessageType("aiserver.v1.SCMRemovePullRequestFromMergeQueueRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), R5d = k.makeMessageType("aiserver.v1.SCMRemovePullRequestFromMergeQueueResponse", ()=>[
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
    ]), D5d = k.makeMessageType("aiserver.v1.GetPullRequestCheckLogExcerptRequest", ()=>[
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
    ]), M5d = k.makeMessageType("aiserver.v1.GetPullRequestCodeownersRequest", ()=>[
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
    ]), P5d = k.makeMessageType("aiserver.v1.PullRequestPathCodeowners", ()=>[
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
    ]), L5d = k.makeMessageType("aiserver.v1.GetPullRequestCodeownersResponse", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: P5d,
            repeated: !0
        }
    ]), N5d = k.makeMessageType("aiserver.v1.StreamPullRequestUpdatesRequest", ()=>[
        {
            no: 1,
            name: "pr_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), O5d = k.makeMessageType("aiserver.v1.PullRequestUpdatedNotification", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]), F5d = k.makeMessageType("aiserver.v1.PullRequestUpdatesHeartbeat", []), B5d = k.makeMessageType("aiserver.v1.PullRequestUpdatedEvent", ()=>[
        {
            no: 1,
            name: "updated",
            kind: "message",
            T: O5d,
            oneof: "event"
        },
        {
            no: 2,
            name: "heartbeat",
            kind: "message",
            T: F5d,
            oneof: "event"
        }
    ]), U5d = k.makeMessageType("aiserver.v1.GetPullRequestCheckLogExcerptResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(bUe)
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
