import { $Ri, XB } from "./actor_with_display_pb.js";
import { Oc, kG } from "./origin_common_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { Bps, nPn, xKt } from "./rpc_pb.js";
import { Js } from "./timestamp_pb.js";
import { E } from "./tslib.es6.js";
var iPn, RGg, PGg, HRi, _1l, b1l, MGg, DGg, NGg, LGg, y1l, mIt, OGg, FGg, gye, Dlt, BGg, UGg, jGg, Wv, $Gg, HGg, WGg, GGg, qGg, zGg, VGg, KGg, YGg, XGg, ZGg, QGg, JGg, eqg, tqg, nqg, iqg, rqg, sqg, oqg, aqg, lqg, cqg, uqg, dqg, PVe, hqg, S1l, pqg, rPn, mqg, gqg, fqg, vqg, _qg, bqg, yqg, Sqg, kqg, wqg, Cqg, Tqg, Eqg, Iqg, xqg, Aqg, gIt, Rqg, Pqg, Mqg, Dqg, Nqg, Wps, Lqg, Oqg, Fqg, Bqg, Uqg, jqg, $qg, Hqg, Wqg, Gqg, Gps, qps, qqg, k1l, w1l, zqg, C1l, Vqg, Kqg, Yqg, Xqg, Zqg, Qqg, Jqg, ezg, tzg, zps, Vps, nzg, izg, rzg, szg, ozg, azg, lzg, czg, uzg, dzg, hzg, pzg, mzg, gzg, fzg, vzg, _zg, T1l, bzg, yzg, Szg, kzg, wzg, Czg, E1l, Tzg, Ezg, Izg, I1l, xzg, Azg, Rzg, Pzg, Mzg, Dzg, Nzg, Lzg, Ozg, x1l, Fzg, MKt, Bzg, Uzg, jzg, $zg, Hzg, Wzg, Gzg, qzg, zzg, Vzg, Kzg, Yzg, Xzg, A1l, Zzg, Qzg, Jzg, eVg, tVg, nVg, iVg, rVg, sVg, oVg, aVg, lVg, cVg, uVg, dVg, hVg, pVg, mVg, gVg, fVg, vVg, _Vg, bVg, yVg, SVg, kVg, R1l, P1l, wVg, CVg, M1l, D1l, TVg, EVg, IVg;
export { $Gg, $qg, $zg, A1l, Aqg, Azg, BGg, Bqg, Bzg, C1l, CVg, Cqg, Czg, D1l, DGg, Dlt, Dqg, Dzg, E1l, EVg, Eqg, Ezg, FGg, Fqg, Fzg, GGg, Gps, Gqg, Gzg, HGg, HRi, Hqg, Hzg, I1l, IVg, Iqg, Izg, JGg, Jqg, Jzg, KGg, Kqg, Kzg, LGg, Lqg, Lzg, M1l, MGg, MKt, Mqg, Mzg, NGg, Nqg, Nzg, OGg, Oqg, Ozg, P1l, PGg, PVe, Pqg, Pzg, QGg, Qqg, Qzg, R1l, RGg, Rqg, Rzg, S1l, SVg, Sqg, Szg, T1l, TVg, Tqg, Tzg, UGg, Uqg, Uzg, VGg, Vps, Vqg, Vzg, WGg, Wps, Wqg, Wv, Wzg, XGg, Xqg, Xzg, YGg, Yqg, Yzg, ZGg, Zqg, Zzg, _1l, _Vg, _qg, _zg, aVg, aqg, azg, b1l, bVg, bqg, bzg, cVg, cqg, czg, dVg, dqg, dzg, eVg, eqg, ezg, fVg, fqg, fzg, gIt, gVg, gqg, gye, gzg, hVg, hqg, hzg, iPn, iVg, iqg, izg, jGg, jqg, jzg, k1l, kVg, kqg, kzg, lVg, lqg, lzg, mIt, mVg, mqg, mzg, nVg, nqg, nzg, oVg, oqg, ozg, pVg, pqg, pzg, qGg, qps, qqg, qzg, rPn, rVg, rqg, rzg, sVg, sqg, szg, tVg, tqg, tzg, uVg, uqg, uzg, vVg, vqg, vzg, w1l, wVg, wqg, wzg, x1l, xqg, xzg, y1l, yVg, yqg, yzg, zGg, zps, zqg, zzg };
var __wakaru_fye_initialized = false;
export function fye() {
if (__wakaru_fye_initialized) return;
__wakaru_fye_initialized = true;
"use strict";
E(), hr(), $Ri(), kG(), nPn(), iPn = x.makeEnum("origin.v1.ChangeStatus", [
    {
        no: 0,
        name: "CHANGE_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CHANGE_STATUS_DRAFT",
        localName: "DRAFT"
    },
    {
        no: 2,
        name: "CHANGE_STATUS_OPEN",
        localName: "OPEN"
    },
    {
        no: 3,
        name: "CHANGE_STATUS_MERGED",
        localName: "MERGED"
    },
    {
        no: 4,
        name: "CHANGE_STATUS_CLOSED",
        localName: "CLOSED"
    }
]), RGg = x.makeEnum("origin.v1.VersionPotentialMergeCommitState", [
    {
        no: 0,
        name: "VERSION_POTENTIAL_MERGE_COMMIT_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "VERSION_POTENTIAL_MERGE_COMMIT_STATE_UNKNOWN",
        localName: "UNKNOWN"
    },
    {
        no: 2,
        name: "VERSION_POTENTIAL_MERGE_COMMIT_STATE_PREPARED",
        localName: "PREPARED"
    },
    {
        no: 3,
        name: "VERSION_POTENTIAL_MERGE_COMMIT_STATE_MERGE_CONFLICT",
        localName: "MERGE_CONFLICT"
    }
]), PGg = x.makeEnum("origin.v1.UpdateChangeBranchMethod", [
    {
        no: 0,
        name: "UPDATE_CHANGE_BRANCH_METHOD_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "UPDATE_CHANGE_BRANCH_METHOD_MERGE_COMMIT",
        localName: "MERGE_COMMIT"
    }
]), HRi = x.makeEnum("origin.v1.ReviewVerdict", [
    {
        no: 0,
        name: "REVIEW_VERDICT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REVIEW_VERDICT_APPROVE",
        localName: "APPROVE"
    },
    {
        no: 2,
        name: "REVIEW_VERDICT_REQUEST_CHANGES",
        localName: "REQUEST_CHANGES"
    },
    {
        no: 3,
        name: "REVIEW_VERDICT_COMMENT",
        localName: "COMMENT"
    }
]), _1l = x.makeEnum("origin.v1.ChangeAssignmentKind", [
    {
        no: 0,
        name: "CHANGE_ASSIGNMENT_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CHANGE_ASSIGNMENT_KIND_REVIEW_REQUEST",
        localName: "REVIEW_REQUEST"
    },
    {
        no: 2,
        name: "CHANGE_ASSIGNMENT_KIND_ASSIGNEE",
        localName: "ASSIGNEE"
    }
]), b1l = x.makeEnum("origin.v1.ChangeAssignmentCreatedVia", [
    {
        no: 0,
        name: "CHANGE_ASSIGNMENT_CREATED_VIA_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CHANGE_ASSIGNMENT_CREATED_VIA_HUMAN",
        localName: "HUMAN"
    },
    {
        no: 2,
        name: "CHANGE_ASSIGNMENT_CREATED_VIA_CODEOWNERS",
        localName: "CODEOWNERS"
    },
    {
        no: 3,
        name: "CHANGE_ASSIGNMENT_CREATED_VIA_SYSTEM",
        localName: "SYSTEM"
    }
]), MGg = x.makeEnum("origin.v1.ReviewRequestEventAction", [
    {
        no: 0,
        name: "REVIEW_REQUEST_EVENT_ACTION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REVIEW_REQUEST_EVENT_ACTION_REQUESTED",
        localName: "REQUESTED"
    },
    {
        no: 2,
        name: "REVIEW_REQUEST_EVENT_ACTION_REMOVED",
        localName: "REMOVED"
    }
]), DGg = x.makeEnum("origin.v1.ChangeCodeownersMatchPathReason", [
    {
        no: 0,
        name: "CHANGE_CODEOWNERS_MATCH_PATH_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CHANGE_CODEOWNERS_MATCH_PATH_REASON_CURRENT_PATH",
        localName: "CURRENT_PATH"
    },
    {
        no: 2,
        name: "CHANGE_CODEOWNERS_MATCH_PATH_REASON_DELETED_PATH",
        localName: "DELETED_PATH"
    },
    {
        no: 3,
        name: "CHANGE_CODEOWNERS_MATCH_PATH_REASON_RENAME_NEW_PATH",
        localName: "RENAME_NEW_PATH"
    },
    {
        no: 4,
        name: "CHANGE_CODEOWNERS_MATCH_PATH_REASON_RENAME_OLD_PATH",
        localName: "RENAME_OLD_PATH"
    },
    {
        no: 5,
        name: "CHANGE_CODEOWNERS_MATCH_PATH_REASON_COPY_SOURCE_PATH",
        localName: "COPY_SOURCE_PATH"
    }
]), NGg = x.makeEnum("origin.v1.StackMemberParentRelation", [
    {
        no: 0,
        name: "STACK_MEMBER_PARENT_RELATION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STACK_MEMBER_PARENT_RELATION_NONE",
        localName: "NONE"
    },
    {
        no: 2,
        name: "STACK_MEMBER_PARENT_RELATION_STRICT",
        localName: "STRICT"
    },
    {
        no: 3,
        name: "STACK_MEMBER_PARENT_RELATION_STALE",
        localName: "STALE"
    },
    {
        no: 4,
        name: "STACK_MEMBER_PARENT_RELATION_PARENT_MERGED",
        localName: "PARENT_MERGED"
    },
    {
        no: 5,
        name: "STACK_MEMBER_PARENT_RELATION_PARENT_CLOSED",
        localName: "PARENT_CLOSED"
    }
]), LGg = x.makeEnum("origin.v1.StackMemberRecommendedAction", [
    {
        no: 0,
        name: "STACK_MEMBER_RECOMMENDED_ACTION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STACK_MEMBER_RECOMMENDED_ACTION_NONE",
        localName: "NONE"
    },
    {
        no: 2,
        name: "STACK_MEMBER_RECOMMENDED_ACTION_RESTACK_ONTO_PARENT",
        localName: "RESTACK_ONTO_PARENT"
    },
    {
        no: 3,
        name: "STACK_MEMBER_RECOMMENDED_ACTION_REBASE_ONTO_TRUNK_IF_CONFLICTS",
        localName: "REBASE_ONTO_TRUNK_IF_CONFLICTS"
    },
    {
        no: 4,
        name: "STACK_MEMBER_RECOMMENDED_ACTION_RETARGET_BASE_TO_TRUNK",
        localName: "RETARGET_BASE_TO_TRUNK"
    }
]), y1l = x.makeEnum("origin.v1.SectionOfChangesSortField", [
    {
        no: 0,
        name: "SECTION_OF_CHANGES_SORT_FIELD_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SECTION_OF_CHANGES_SORT_FIELD_UPDATED_AT",
        localName: "UPDATED_AT"
    },
    {
        no: 2,
        name: "SECTION_OF_CHANGES_SORT_FIELD_CREATED_AT",
        localName: "CREATED_AT"
    },
    {
        no: 3,
        name: "SECTION_OF_CHANGES_SORT_FIELD_TITLE",
        localName: "TITLE"
    },
    {
        no: 4,
        name: "SECTION_OF_CHANGES_SORT_FIELD_LINES_CHANGED",
        localName: "LINES_CHANGED"
    }
]), mIt = x.makeEnum("origin.v1.SectionOfChangesStatus", [
    {
        no: 0,
        name: "SECTION_OF_CHANGES_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SECTION_OF_CHANGES_STATUS_DRAFT",
        localName: "DRAFT"
    },
    {
        no: 2,
        name: "SECTION_OF_CHANGES_STATUS_OPEN",
        localName: "OPEN"
    },
    {
        no: 3,
        name: "SECTION_OF_CHANGES_STATUS_MERGED",
        localName: "MERGED"
    },
    {
        no: 4,
        name: "SECTION_OF_CHANGES_STATUS_CLOSED",
        localName: "CLOSED"
    }
]), OGg = x.makeEnum("origin.v1.SectionOfChangesVerdict", [
    {
        no: 0,
        name: "SECTION_OF_CHANGES_VERDICT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SECTION_OF_CHANGES_VERDICT_APPROVE",
        localName: "APPROVE"
    },
    {
        no: 2,
        name: "SECTION_OF_CHANGES_VERDICT_COMMENT",
        localName: "COMMENT"
    },
    {
        no: 3,
        name: "SECTION_OF_CHANGES_VERDICT_REQUEST_CHANGES",
        localName: "REQUEST_CHANGES"
    }
]), FGg = x.makeEnum("origin.v1.SectionOfChangesReviewStatusState", [
    {
        no: 0,
        name: "SECTION_OF_CHANGES_REVIEW_STATUS_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SECTION_OF_CHANGES_REVIEW_STATUS_STATE_ONE_OR_MORE_APPROVALS",
        localName: "ONE_OR_MORE_APPROVALS"
    },
    {
        no: 2,
        name: "SECTION_OF_CHANGES_REVIEW_STATUS_STATE_IS_FULLY_APPROVED",
        localName: "IS_FULLY_APPROVED"
    },
    {
        no: 3,
        name: "SECTION_OF_CHANGES_REVIEW_STATUS_STATE_HAS_ACTIVE_REVIEW",
        localName: "HAS_ACTIVE_REVIEW"
    },
    {
        no: 4,
        name: "SECTION_OF_CHANGES_REVIEW_STATUS_STATE_HAS_REQUESTED_REVIEWERS",
        localName: "HAS_REQUESTED_REVIEWERS"
    },
    {
        no: 5,
        name: "SECTION_OF_CHANGES_REVIEW_STATUS_STATE_HAS_REREQUESTED_REVIEW",
        localName: "HAS_REREQUESTED_REVIEW"
    },
    {
        no: 6,
        name: "SECTION_OF_CHANGES_REVIEW_STATUS_STATE_HAS_UNADDRESSED_CHANGES_REQUESTED",
        localName: "HAS_UNADDRESSED_CHANGES_REQUESTED"
    },
    {
        no: 7,
        name: "SECTION_OF_CHANGES_REVIEW_STATUS_STATE_HAS_CHANGES_REQUESTED",
        localName: "HAS_CHANGES_REQUESTED"
    }
]), gye = x.makeMessageType("origin.v1.Change", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "number",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "head_ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "base_ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "status",
            kind: "enum",
            T: x.getEnumType(iPn)
        },
        {
            no: 10,
            name: "created_at",
            kind: "message",
            T: Js
        },
        {
            no: 11,
            name: "updated_at",
            kind: "message",
            T: Js
        },
        {
            no: 12,
            name: "merged_at",
            kind: "message",
            T: Js,
            opt: !0
        },
        {
            no: 13,
            name: "closed_at",
            kind: "message",
            T: Js,
            opt: !0
        },
        {
            no: 14,
            name: "parent_change_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "stack_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 16,
            name: "merge_commit_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 22,
            name: "author",
            kind: "message",
            T: XB
        },
        {
            no: 23,
            name: "merged_by",
            kind: "message",
            T: XB
        },
        {
            no: 24,
            name: "merged_version_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Dlt = x.makeMessageType("origin.v1.Version", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "change_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "number",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "head_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "base_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "created_at",
            kind: "message",
            T: Js
        },
        {
            no: 7,
            name: "additions",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "deletions",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "changed_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 10,
            name: "merge_base_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "ahead_by",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 12,
            name: "behind_by",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 13,
            name: "head_tree_oid",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "merge_base_tree_oid",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "potential_merge_commit",
            kind: "message",
            T: BGg
        },
        {
            no: 16,
            name: "included_in_merge",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), BGg = x.makeMessageType("origin.v1.VersionPotentialMergeCommit", ()=>[
        {
            no: 1,
            name: "state",
            kind: "enum",
            T: x.getEnumType(RGg)
        },
        {
            no: 2,
            name: "sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "base_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), UGg = x.makeMessageType("origin.v1.CreateChangeRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "head_ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "base_ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "status",
            kind: "enum",
            T: x.getEnumType(iPn)
        },
        {
            no: 7,
            name: "parent_change",
            kind: "message",
            T: Wv
        }
    ]), jGg = x.makeMessageType("origin.v1.CreateChangeResponse", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: gye
        },
        {
            no: 2,
            name: "initial_version",
            kind: "message",
            T: Dlt
        }
    ]), Wv = x.makeMessageType("origin.v1.ChangeIdentifier", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "change_number",
            kind: "scalar",
            T: 4
        }
    ]), $Gg = x.makeMessageType("origin.v1.RevertPullRequestRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "draft",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "allow_stack_landing_revert",
            kind: "scalar",
            T: 8
        }
    ]), HGg = x.makeMessageType("origin.v1.RevertPullRequestResponse", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: gye
        },
        {
            no: 2,
            name: "reverse_mirror_push_failed",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "reverted_change_numbers",
            kind: "scalar",
            T: 4,
            repeated: !0
        }
    ]), WGg = x.makeMessageType("origin.v1.UpdateChangeRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "head_ref",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "base_ref",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "parent_change",
            kind: "message",
            T: Wv,
            oneof: "parent_update"
        },
        {
            no: 5,
            name: "clear_parent",
            kind: "scalar",
            T: 8,
            oneof: "parent_update"
        }
    ]), GGg = x.makeMessageType("origin.v1.UpdateChangeResponse", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: gye
        },
        {
            no: 2,
            name: "latest_version",
            kind: "message",
            T: Dlt
        },
        {
            no: 3,
            name: "unchanged",
            kind: "scalar",
            T: 8
        }
    ]), qGg = x.makeMessageType("origin.v1.UpdateChangeBranchRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "method",
            kind: "enum",
            T: x.getEnumType(PGg)
        }
    ]), zGg = x.makeMessageType("origin.v1.UpdateChangeBranchResponse", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: gye
        },
        {
            no: 2,
            name: "latest_version",
            kind: "message",
            T: Dlt
        },
        {
            no: 3,
            name: "unchanged",
            kind: "scalar",
            T: 8
        }
    ]), VGg = x.makeMessageType("origin.v1.DeleteChangeHeadBranchRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        }
    ]), KGg = x.makeMessageType("origin.v1.DeleteChangeHeadBranchResponse", ()=>[
        {
            no: 1,
            name: "already_deleted",
            kind: "scalar",
            T: 8
        }
    ]), YGg = x.makeMessageType("origin.v1.RestorePullRequestBranchRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        }
    ]), XGg = x.makeMessageType("origin.v1.RestorePullRequestBranchResponse", ()=>[
        {
            no: 1,
            name: "already_restored",
            kind: "scalar",
            T: 8
        }
    ]), ZGg = x.makeMessageType("origin.v1.RetargetChangeRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "base_ref",
            kind: "scalar",
            T: 9
        }
    ]), QGg = x.makeMessageType("origin.v1.RetargetChangeResponse", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: gye
        },
        {
            no: 2,
            name: "latest_version",
            kind: "message",
            T: Dlt
        },
        {
            no: 3,
            name: "unchanged",
            kind: "scalar",
            T: 8
        }
    ]), JGg = x.makeMessageType("origin.v1.FoldChangeRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        }
    ]), eqg = x.makeMessageType("origin.v1.FoldChangeResponse", []), tqg = x.makeMessageType("origin.v1.LandChangeTreePathRequest", ()=>[
        {
            no: 1,
            name: "tree",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "leaf",
            kind: "message",
            T: Wv
        }
    ]), nqg = x.makeMessageType("origin.v1.LandChangeTreePathResponse", ()=>[
        {
            no: 1,
            name: "old_trunk_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "new_trunk_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "merged_change_numbers",
            kind: "scalar",
            T: 4,
            repeated: !0
        },
        {
            no: 4,
            name: "closed_change_numbers",
            kind: "scalar",
            T: 4,
            repeated: !0
        }
    ]), iqg = x.makeMessageType("origin.v1.SplitChangeIntoStackRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "expected_head_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "expected_base_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "groups",
            kind: "message",
            T: rqg,
            repeated: !0
        }
    ]), rqg = x.makeMessageType("origin.v1.SplitChangeStackGroup", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), sqg = x.makeMessageType("origin.v1.SplitChangeIntoStackResponse", ()=>[
        {
            no: 1,
            name: "changes",
            kind: "message",
            T: gye,
            repeated: !0
        }
    ]), oqg = x.makeMessageType("origin.v1.UpdateChangeMetadataRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), aqg = x.makeMessageType("origin.v1.UpdateChangeMetadataResponse", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: gye
        }
    ]), lqg = x.makeMessageType("origin.v1.UpdateChangeStatusRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "status",
            kind: "enum",
            T: x.getEnumType(iPn)
        },
        {
            no: 3,
            name: "reset_base",
            kind: "message",
            T: cqg,
            opt: !0
        }
    ]), cqg = x.makeMessageType("origin.v1.ReopenBaseReset", ()=>[
        {
            no: 1,
            name: "expected_base_tip_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reset_to_sha",
            kind: "scalar",
            T: 9
        }
    ]), uqg = x.makeMessageType("origin.v1.UpdateChangeStatusResponse", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: gye
        }
    ]), dqg = x.makeMessageType("origin.v1.ReviewDismissal", ()=>[
        {
            no: 1,
            name: "dismissed_at",
            kind: "message",
            T: Js
        },
        {
            no: 4,
            name: "dismissal_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "dismissed_by",
            kind: "message",
            T: XB
        }
    ]), PVe = x.makeMessageType("origin.v1.Review", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "change_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "version_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "version_number",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "verdict",
            kind: "enum",
            T: x.getEnumType(HRi)
        },
        {
            no: 7,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "created_at",
            kind: "message",
            T: Js
        },
        {
            no: 12,
            name: "submitted_at",
            kind: "message",
            T: Js,
            opt: !0
        },
        {
            no: 13,
            name: "dismissal",
            kind: "message",
            T: dqg,
            opt: !0
        },
        {
            no: 14,
            name: "author",
            kind: "message",
            T: XB
        }
    ]), hqg = x.makeMessageType("origin.v1.ChangeTimelineEvent", ()=>[
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
            kind: "message",
            T: Js
        },
        {
            no: 6,
            name: "actor_display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "actor_avatar_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "subject_user_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "subject_user_display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "subject_user_avatar_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "subject_group_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "label_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "label_color",
            kind: "scalar",
            T: 9
        },
        {
            no: 14,
            name: "previous_base_ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 15,
            name: "new_base_ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 16,
            name: "previous_title",
            kind: "scalar",
            T: 9
        },
        {
            no: 17,
            name: "new_title",
            kind: "scalar",
            T: 9
        },
        {
            no: 18,
            name: "previous_head_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 19,
            name: "new_head_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 20,
            name: "head_ref_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 21,
            name: "review_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 22,
            name: "dismissal_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 23,
            name: "related_change_number",
            kind: "scalar",
            T: 4
        },
        {
            no: 24,
            name: "actor",
            kind: "message",
            T: XB
        },
        {
            no: 25,
            name: "merge_queue_eviction_reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 26,
            name: "merge_queue_validation_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 27,
            name: "satisfier_gates",
            kind: "message",
            T: S1l,
            repeated: !0
        },
        {
            no: 28,
            name: "stood_in_owner_rules",
            kind: "message",
            T: pqg,
            repeated: !0
        },
        {
            no: 29,
            name: "code_review_gate_reported",
            kind: "scalar",
            T: 8
        },
        {
            no: 30,
            name: "base_ref_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 31,
            name: "previous_base_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 32,
            name: "new_base_sha",
            kind: "scalar",
            T: 9
        }
    ]), S1l = x.makeMessageType("origin.v1.ChangesetApprovedGate", ()=>[
        {
            no: 1,
            name: "gate",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "report_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), pqg = x.makeMessageType("origin.v1.ChangeTimelineOwnerRule", ()=>[
        {
            no: 1,
            name: "scope",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reviewers",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), rPn = x.makeMessageType("origin.v1.Comment", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "change_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "version_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "version_number",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "created_at",
            kind: "message",
            T: Js
        },
        {
            no: 8,
            name: "updated_at",
            kind: "message",
            T: Js
        },
        {
            no: 9,
            name: "thread_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "reaction_groups",
            kind: "message",
            T: mqg,
            repeated: !0
        },
        {
            no: 14,
            name: "author",
            kind: "message",
            T: XB
        },
        {
            no: 15,
            name: "review_id",
            kind: "scalar",
            T: 9
        }
    ]), mqg = x.makeMessageType("origin.v1.CommentReactionGroup", ()=>[
        {
            no: 1,
            name: "emoji",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "count",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "viewer_has_reacted",
            kind: "scalar",
            T: 8
        }
    ]), gqg = x.makeMessageType("origin.v1.CommentReaction", ()=>[
        {
            no: 1,
            name: "emoji",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "viewer_is_reactor",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "reactor",
            kind: "message",
            T: XB
        }
    ]), fqg = x.makeMessageType("origin.v1.CreateReviewRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "verdict",
            kind: "enum",
            T: x.getEnumType(HRi)
        },
        {
            no: 3,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "version_number",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "require_latest_version",
            kind: "scalar",
            T: 8
        }
    ]), vqg = x.makeMessageType("origin.v1.CreateReviewResponse", ()=>[
        {
            no: 1,
            name: "review",
            kind: "message",
            T: PVe
        }
    ]), _qg = x.makeMessageType("origin.v1.UpdateReviewRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "review_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "body",
            kind: "scalar",
            T: 9
        }
    ]), bqg = x.makeMessageType("origin.v1.UpdateReviewResponse", ()=>[
        {
            no: 1,
            name: "review",
            kind: "message",
            T: PVe
        }
    ]), yqg = x.makeMessageType("origin.v1.DismissReviewRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "review_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), Sqg = x.makeMessageType("origin.v1.DismissReviewResponse", ()=>[
        {
            no: 1,
            name: "review",
            kind: "message",
            T: PVe
        }
    ]), kqg = x.makeMessageType("origin.v1.ListReviewsRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        }
    ]), wqg = x.makeMessageType("origin.v1.ListReviewsResponse", ()=>[
        {
            no: 1,
            name: "reviews",
            kind: "message",
            T: PVe,
            repeated: !0
        }
    ]), Cqg = x.makeMessageType("origin.v1.ListChangeTimelineEventsRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        }
    ]), Tqg = x.makeMessageType("origin.v1.ListChangeTimelineEventsResponse", ()=>[
        {
            no: 1,
            name: "events",
            kind: "message",
            T: hqg,
            repeated: !0
        }
    ]), Eqg = x.makeMessageType("origin.v1.CreateCommentRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "version_number",
            kind: "scalar",
            T: 4
        }
    ]), Iqg = x.makeMessageType("origin.v1.CreateCommentResponse", ()=>[
        {
            no: 1,
            name: "comment",
            kind: "message",
            T: rPn
        }
    ]), xqg = x.makeMessageType("origin.v1.ListCommentsRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        }
    ]), Aqg = x.makeMessageType("origin.v1.ListCommentsResponse", ()=>[
        {
            no: 1,
            name: "comments",
            kind: "message",
            T: rPn,
            repeated: !0
        }
    ]), gIt = x.makeMessageType("origin.v1.ChangeAssignment", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "change_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "kind",
            kind: "enum",
            T: x.getEnumType(_1l)
        },
        {
            no: 5,
            name: "assigned_group_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "created_via",
            kind: "enum",
            T: x.getEnumType(b1l)
        },
        {
            no: 8,
            name: "created_at",
            kind: "message",
            T: Js
        },
        {
            no: 9,
            name: "updated_at",
            kind: "message",
            T: Js
        },
        {
            no: 10,
            name: "cursor_user_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 11,
            name: "cursor_group_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 12,
            name: "assigned_user",
            kind: "message",
            T: Gps
        },
        {
            no: 13,
            name: "assigned_group",
            kind: "message",
            T: qps
        },
        {
            no: 14,
            name: "created_by",
            kind: "message",
            T: XB
        },
        {
            no: 15,
            name: "assigned_service_account",
            kind: "message",
            T: k1l
        },
        {
            no: 16,
            name: "assigned_service_account_id",
            kind: "scalar",
            T: 9
        }
    ]), Rqg = x.makeMessageType("origin.v1.ReviewRequestEvent", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "change_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "kind",
            kind: "enum",
            T: x.getEnumType(_1l)
        },
        {
            no: 4,
            name: "action",
            kind: "enum",
            T: x.getEnumType(MGg)
        },
        {
            no: 13,
            name: "assigned_user_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "assigned_group_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "created_via",
            kind: "enum",
            T: x.getEnumType(b1l)
        },
        {
            no: 9,
            name: "created_at",
            kind: "message",
            T: Js
        },
        {
            no: 10,
            name: "actor",
            kind: "message",
            T: XB
        },
        {
            no: 11,
            name: "assigned_user",
            kind: "message",
            T: Gps
        },
        {
            no: 12,
            name: "assigned_group",
            kind: "message",
            T: qps
        }
    ]), Pqg = x.makeMessageType("origin.v1.ListReviewRequestEventsRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        }
    ]), Mqg = x.makeMessageType("origin.v1.ListReviewRequestEventsResponse", ()=>[
        {
            no: 1,
            name: "events",
            kind: "message",
            T: Rqg,
            repeated: !0
        }
    ]), Dqg = x.makeMessageType("origin.v1.RequestReviewRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 3,
            name: "group_id",
            kind: "scalar",
            T: 9,
            oneof: "target"
        },
        {
            no: 4,
            name: "cursor_user_id",
            kind: "scalar",
            T: 3,
            oneof: "target"
        },
        {
            no: 5,
            name: "cursor_group_id",
            kind: "scalar",
            T: 3,
            oneof: "target"
        },
        {
            no: 6,
            name: "user_id",
            kind: "scalar",
            T: 9,
            oneof: "target"
        },
        {
            no: 7,
            name: "service_account_id",
            kind: "scalar",
            T: 9,
            oneof: "target"
        }
    ]), Nqg = x.makeMessageType("origin.v1.RequestReviewResponse", ()=>[
        {
            no: 1,
            name: "assignment",
            kind: "message",
            T: gIt
        }
    ]), Wps = x.makeMessageType("origin.v1.ReviewRequestTarget", ()=>[
        {
            no: 2,
            name: "group_id",
            kind: "scalar",
            T: 9,
            oneof: "target"
        },
        {
            no: 3,
            name: "cursor_user_id",
            kind: "scalar",
            T: 3,
            oneof: "target"
        },
        {
            no: 4,
            name: "cursor_group_id",
            kind: "scalar",
            T: 3,
            oneof: "target"
        },
        {
            no: 5,
            name: "user_id",
            kind: "scalar",
            T: 9,
            oneof: "target"
        },
        {
            no: 6,
            name: "service_account_id",
            kind: "scalar",
            T: 9,
            oneof: "target"
        }
    ]), Lqg = x.makeMessageType("origin.v1.ApplyReviewRequestChangesRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "additions",
            kind: "message",
            T: Wps,
            repeated: !0
        },
        {
            no: 3,
            name: "removals",
            kind: "message",
            T: Wps,
            repeated: !0
        }
    ]), Oqg = x.makeMessageType("origin.v1.ApplyReviewRequestChangesResponse", []), Fqg = x.makeMessageType("origin.v1.RequestReviewsRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "targets",
            kind: "message",
            T: Wps,
            repeated: !0
        }
    ]), Bqg = x.makeMessageType("origin.v1.RequestReviewsResponse", ()=>[
        {
            no: 1,
            name: "assignments",
            kind: "message",
            T: gIt,
            repeated: !0
        }
    ]), Uqg = x.makeMessageType("origin.v1.CloseReviewRequestRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 3,
            name: "group_id",
            kind: "scalar",
            T: 9,
            oneof: "target"
        },
        {
            no: 4,
            name: "cursor_user_id",
            kind: "scalar",
            T: 3,
            oneof: "target"
        },
        {
            no: 5,
            name: "cursor_group_id",
            kind: "scalar",
            T: 3,
            oneof: "target"
        },
        {
            no: 6,
            name: "user_id",
            kind: "scalar",
            T: 9,
            oneof: "target"
        },
        {
            no: 7,
            name: "service_account_id",
            kind: "scalar",
            T: 9,
            oneof: "target"
        }
    ]), jqg = x.makeMessageType("origin.v1.CloseReviewRequestResponse", []), $qg = x.makeMessageType("origin.v1.AddAssigneeRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 3,
            name: "group_id",
            kind: "scalar",
            T: 9,
            oneof: "target"
        },
        {
            no: 4,
            name: "cursor_user_id",
            kind: "scalar",
            T: 3,
            oneof: "target"
        },
        {
            no: 5,
            name: "cursor_group_id",
            kind: "scalar",
            T: 3,
            oneof: "target"
        },
        {
            no: 6,
            name: "user_id",
            kind: "scalar",
            T: 9,
            oneof: "target"
        }
    ]), Hqg = x.makeMessageType("origin.v1.AddAssigneeResponse", ()=>[
        {
            no: 1,
            name: "assignment",
            kind: "message",
            T: gIt
        }
    ]), Wqg = x.makeMessageType("origin.v1.RemoveAssigneeRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 3,
            name: "group_id",
            kind: "scalar",
            T: 9,
            oneof: "target"
        },
        {
            no: 4,
            name: "cursor_user_id",
            kind: "scalar",
            T: 3,
            oneof: "target"
        },
        {
            no: 5,
            name: "cursor_group_id",
            kind: "scalar",
            T: 3,
            oneof: "target"
        },
        {
            no: 6,
            name: "user_id",
            kind: "scalar",
            T: 9,
            oneof: "target"
        }
    ]), Gqg = x.makeMessageType("origin.v1.RemoveAssigneeResponse", []), Gps = x.makeMessageType("origin.v1.OriginReviewerCandidateUser", ()=>[
        {
            no: 3,
            name: "first_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "last_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "email",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "avatar_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "cursor_user_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 8,
            name: "user_id",
            kind: "scalar",
            T: 9
        }
    ]), qps = x.makeMessageType("origin.v1.OriginReviewerCandidateGroup", ()=>[
        {
            no: 1,
            name: "group_public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "organization_slug",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "group_slug",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "cursor_group_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 7,
            name: "member_user_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), qqg = x.makeMessageType("origin.v1.ListOriginRepoReviewerCandidatesRequest", ()=>[
        {
            no: 1,
            name: "repo",
            kind: "message",
            T: Oc
        }
    ]), k1l = x.makeMessageType("origin.v1.OriginReviewerCandidateServiceAccount", ()=>[
        {
            no: 1,
            name: "service_account_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "avatar_url",
            kind: "scalar",
            T: 9
        }
    ]), w1l = x.makeMessageType("origin.v1.ListOriginRepoReviewerCandidatesResponse", ()=>[
        {
            no: 1,
            name: "users",
            kind: "message",
            T: Gps,
            repeated: !0
        },
        {
            no: 2,
            name: "groups",
            kind: "message",
            T: qps,
            repeated: !0
        },
        {
            no: 3,
            name: "service_accounts",
            kind: "message",
            T: k1l,
            repeated: !0
        }
    ]), zqg = x.makeMessageType("origin.v1.GetChangeRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "include_head_ref_exists",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "include_merge_when_ready",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "include_commits_behind_base",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "include_viewer_capabilities",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "include_merge_queue",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), C1l = x.makeMessageType("origin.v1.ChangeLabel", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "color",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Vqg = x.makeMessageType("origin.v1.ChangeMergeWhenReadySummary", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "change_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "repo_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "change_number",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "source",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "trunk_branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "lock_expires_at",
            kind: "message",
            T: Js,
            opt: !0
        },
        {
            no: 10,
            name: "consecutive_failed_attempts",
            kind: "scalar",
            T: 5
        },
        {
            no: 11,
            name: "dev",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "repo_org",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "repo_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "enabled_by",
            kind: "message",
            T: XB
        }
    ]), Kqg = x.makeMessageType("origin.v1.ChangeViewerCapabilities", ()=>[
        {
            no: 1,
            name: "can_write_pull_requests",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 2,
            name: "can_write_contents",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "can_write_reviews",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "can_merge",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "can_enable_merge_when_ready",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "can_disable_merge_when_ready",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Yqg = x.makeMessageType("origin.v1.ChangeMergeQueueSummary", ()=>[
        {
            no: 1,
            name: "head_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "target_ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "ahead",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 5,
            name: "validation_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "eviction_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Xqg = x.makeMessageType("origin.v1.GetChangeResponse", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: gye
        },
        {
            no: 2,
            name: "versions",
            kind: "message",
            T: Dlt,
            repeated: !0
        },
        {
            no: 3,
            name: "assignments",
            kind: "message",
            T: gIt,
            repeated: !0
        },
        {
            no: 4,
            name: "labels",
            kind: "message",
            T: C1l,
            repeated: !0
        },
        {
            no: 5,
            name: "viewer_last_viewed_at",
            kind: "message",
            T: Js,
            opt: !0
        },
        {
            no: 6,
            name: "viewer_timeline_viewed_at",
            kind: "message",
            T: Js,
            opt: !0
        },
        {
            no: 7,
            name: "head_ref_exists",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "merge_when_ready",
            kind: "message",
            T: Vqg,
            opt: !0
        },
        {
            no: 9,
            name: "commits_behind_base",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 12,
            name: "commits_behind_base_as_of_version",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 10,
            name: "viewer_capabilities",
            kind: "message",
            T: Kqg,
            opt: !0
        },
        {
            no: 11,
            name: "viewer_is_author",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 13,
            name: "merge_queue",
            kind: "message",
            T: Yqg,
            opt: !0
        },
        {
            no: 14,
            name: "merge_queue_owns_landing",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 15,
            name: "head_ref_locked",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Zqg = x.makeMessageType("origin.v1.GetChangeCodeownersApplicationRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "version_number",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), Qqg = x.makeMessageType("origin.v1.ChangeCodeownersSnapshotMissing", ()=>[
        {
            no: 1,
            name: "checked_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Jqg = x.makeMessageType("origin.v1.ChangeCodeownersSnapshotTooLarge", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "size_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "max_size_bytes",
            kind: "scalar",
            T: 4
        }
    ]), ezg = x.makeMessageType("origin.v1.ChangeCodeownersSnapshotFound", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "size_bytes",
            kind: "scalar",
            T: 4
        }
    ]), tzg = x.makeMessageType("origin.v1.ChangeCodeownersSnapshot", ()=>[
        {
            no: 1,
            name: "base_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "missing",
            kind: "message",
            T: Qqg,
            oneof: "status"
        },
        {
            no: 3,
            name: "too_large",
            kind: "message",
            T: Jqg,
            oneof: "status"
        },
        {
            no: 4,
            name: "found",
            kind: "message",
            T: ezg,
            oneof: "status"
        }
    ]), zps = x.makeMessageType("origin.v1.ChangeCodeownersMatchPath", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "enum",
            T: x.getEnumType(DGg)
        }
    ]), Vps = x.makeMessageType("origin.v1.ChangeCodeowner", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "user",
            kind: "message",
            T: nzg,
            oneof: "identity"
        },
        {
            no: 3,
            name: "group",
            kind: "message",
            T: izg,
            oneof: "identity"
        }
    ]), nzg = x.makeMessageType("origin.v1.ChangeCodeowner.User", ()=>[
        {
            no: 1,
            name: "login",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ChangeCodeowner_User"
}), izg = x.makeMessageType("origin.v1.ChangeCodeowner.Group", ()=>[
        {
            no: 1,
            name: "organization_slug",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "group_slug",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "group_public_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ChangeCodeowner_Group"
}), rzg = x.makeMessageType("origin.v1.ChangeCodeownersResolvedOwnerRule", ()=>[
        {
            no: 1,
            name: "match_path",
            kind: "message",
            T: zps
        },
        {
            no: 2,
            name: "owners",
            kind: "message",
            T: Vps,
            repeated: !0
        },
        {
            no: 3,
            name: "requirement_group_id",
            kind: "scalar",
            T: 9
        }
    ]), szg = x.makeMessageType("origin.v1.ChangeCodeownersChangedPath", ()=>[
        {
            no: 1,
            name: "change_kind",
            kind: "enum",
            T: x.getEnumType(Bps)
        },
        {
            no: 2,
            name: "canonical_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "old_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "match_paths",
            kind: "message",
            T: zps,
            repeated: !0
        },
        {
            no: 5,
            name: "resolved_owner_rules",
            kind: "message",
            T: rzg,
            repeated: !0
        },
        {
            no: 6,
            name: "agentic_owners",
            kind: "message",
            T: Vps,
            repeated: !0
        }
    ]), ozg = x.makeMessageType("origin.v1.ChangeCodeownersRequirementPath", ()=>[
        {
            no: 1,
            name: "canonical_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "match_path",
            kind: "message",
            T: zps
        }
    ]), azg = x.makeMessageType("origin.v1.ChangeCodeownersRequirementGroup", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "owners",
            kind: "message",
            T: Vps,
            repeated: !0
        },
        {
            no: 3,
            name: "paths",
            kind: "message",
            T: ozg,
            repeated: !0
        }
    ]), lzg = x.makeMessageType("origin.v1.GetChangeCodeownersApplicationResponse", ()=>[
        {
            no: 1,
            name: "snapshot",
            kind: "message",
            T: tzg
        },
        {
            no: 2,
            name: "changed_paths",
            kind: "message",
            T: szg,
            repeated: !0
        },
        {
            no: 3,
            name: "requirement_groups",
            kind: "message",
            T: azg,
            repeated: !0
        },
        {
            no: 4,
            name: "undeterminable",
            kind: "message",
            T: czg
        }
    ]), czg = x.makeMessageType("origin.v1.ChangeCodeownersUndeterminable", ()=>[
        {
            no: 1,
            name: "detail",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "remediation",
            kind: "scalar",
            T: 9
        }
    ]), uzg = x.makeMessageType("origin.v1.GetChangeStackRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        }
    ]), dzg = x.makeMessageType("origin.v1.StackMemberState", ()=>[
        {
            no: 1,
            name: "change_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "head_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "recorded_base_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "root_base_ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "parent_head_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "parent_relation",
            kind: "enum",
            T: x.getEnumType(NGg)
        },
        {
            no: 7,
            name: "recommended_action",
            kind: "enum",
            T: x.getEnumType(LGg)
        }
    ]), hzg = x.makeMessageType("origin.v1.GetChangeStackResponse", ()=>[
        {
            no: 1,
            name: "changes",
            kind: "message",
            T: gye,
            repeated: !0
        },
        {
            no: 6,
            name: "stack_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "convergence_state",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "convergence_conflicted_change_number",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 4,
            name: "convergence_conflicted_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "convergence_blocked_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "member_states",
            kind: "message",
            T: dzg,
            repeated: !0
        }
    ]), pzg = x.makeMessageType("origin.v1.GetProjectedLatestVersionsRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "change_numbers",
            kind: "scalar",
            T: 4,
            repeated: !0
        }
    ]), mzg = x.makeMessageType("origin.v1.ProjectedLatestVersionEntry", ()=>[
        {
            no: 1,
            name: "change_number",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "projected_latest_version",
            kind: "message",
            T: Dlt
        }
    ]), gzg = x.makeMessageType("origin.v1.GetProjectedLatestVersionsResponse", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: mzg,
            repeated: !0
        }
    ]), fzg = x.makeMessageType("origin.v1.ListChangeCommitsRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "version_number",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "max_commits",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), vzg = x.makeMessageType("origin.v1.ListChangeCommitsResponse", ()=>[
        {
            no: 1,
            name: "commits",
            kind: "message",
            T: xKt,
            repeated: !0
        },
        {
            no: 2,
            name: "merge_base_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "actor_displays_by_sha",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: _zg
            }
        }
    ]), _zg = x.makeMessageType("origin.v1.CommitActorDisplays", ()=>[
        {
            no: 1,
            name: "author",
            kind: "message",
            T: T1l
        },
        {
            no: 2,
            name: "committer",
            kind: "message",
            T: T1l
        }
    ]), T1l = x.makeMessageType("origin.v1.CommitActorDisplay", ()=>[
        {
            no: 1,
            name: "display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "avatar_url",
            kind: "scalar",
            T: 9
        }
    ]), bzg = x.makeMessageType("origin.v1.ListChangesRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "status",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "cursor",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 4,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "author_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "base_ref",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "head_ref",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "file",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), yzg = x.makeMessageType("origin.v1.ListChangesByHeadRefRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "head_ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "include_inactive",
            kind: "scalar",
            T: 8
        }
    ]), Szg = x.makeMessageType("origin.v1.ListChangesByHeadRefResponse", ()=>[
        {
            no: 1,
            name: "changes",
            kind: "message",
            T: gye,
            repeated: !0
        }
    ]), kzg = x.makeMessageType("origin.v1.GetCommitReferencesRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "sha",
            kind: "scalar",
            T: 9
        }
    ]), wzg = x.makeMessageType("origin.v1.CommitReference", ()=>[
        {
            no: 1,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pull_request_number",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "status",
            kind: "enum",
            T: x.getEnumType(iPn)
        }
    ]), Czg = x.makeMessageType("origin.v1.GetCommitReferencesResponse", ()=>[
        {
            no: 1,
            name: "references",
            kind: "message",
            T: wzg,
            repeated: !0
        }
    ]), E1l = x.makeMessageType("origin.v1.ChangeWithLatestVersion", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: gye
        },
        {
            no: 2,
            name: "latest_version",
            kind: "message",
            T: Dlt,
            opt: !0
        }
    ]), Tzg = x.makeMessageType("origin.v1.BatchGetChangesRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "change_numbers",
            kind: "scalar",
            T: 4,
            repeated: !0
        },
        {
            no: 3,
            name: "head_refs",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Ezg = x.makeMessageType("origin.v1.BatchGetChangesResponse", ()=>[
        {
            no: 1,
            name: "changes",
            kind: "message",
            T: E1l,
            repeated: !0
        }
    ]), Izg = x.makeMessageType("origin.v1.ListChangesResponse", ()=>[
        {
            no: 1,
            name: "changes",
            kind: "message",
            T: E1l,
            repeated: !0
        },
        {
            no: 2,
            name: "next_cursor",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), I1l = x.makeMessageType("origin.v1.GetSectionOfChangesRequest", ()=>[
        {
            no: 1,
            name: "repos",
            kind: "message",
            T: Oc,
            repeated: !0
        },
        {
            no: 2,
            name: "filter",
            kind: "message",
            T: MKt
        },
        {
            no: 3,
            name: "cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "limit",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "sort_field",
            kind: "enum",
            T: x.getEnumType(y1l)
        },
        {
            no: 6,
            name: "sort_is_asc",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "skip_total_count",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "change_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 10,
            name: "drop_unauthorized_repos",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "viewer_scoped",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "include_stack_members",
            kind: "scalar",
            T: 8
        }
    ]), xzg = x.makeMessageType("origin.v1.GetSectionOfChangesResponse", ()=>[
        {
            no: 1,
            name: "changes",
            kind: "message",
            T: x1l,
            repeated: !0
        },
        {
            no: 2,
            name: "has_more",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "total_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "dropped_repo_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "stack_members",
            kind: "message",
            T: Azg,
            repeated: !0
        }
    ]), Azg = x.makeMessageType("origin.v1.SectionOfChangesStackMember", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "stack_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "parent_change_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "base_ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "status",
            kind: "enum",
            T: x.getEnumType(iPn)
        }
    ]), Rzg = x.makeMessageType("origin.v1.SearchChangesRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc,
            opt: !0
        },
        {
            no: 2,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "limit",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "include_labels",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "include_assignees",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "include_review_requests",
            kind: "scalar",
            T: 8
        }
    ]), Pzg = x.makeMessageType("origin.v1.SearchChangesResponse", ()=>[
        {
            no: 1,
            name: "changes",
            kind: "message",
            T: x1l,
            repeated: !0
        },
        {
            no: 2,
            name: "has_more",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "next_cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "total_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "total_count_is_lower_bound",
            kind: "scalar",
            T: 8
        }
    ]), Mzg = x.makeMessageType("origin.v1.CountSectionsOfChangesRequest", ()=>[
        {
            no: 1,
            name: "repos",
            kind: "message",
            T: Oc,
            repeated: !0
        },
        {
            no: 2,
            name: "filters",
            kind: "message",
            T: MKt,
            repeated: !0
        },
        {
            no: 3,
            name: "drop_unauthorized_repos",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "viewer_scoped",
            kind: "scalar",
            T: 8
        }
    ]), Dzg = x.makeMessageType("origin.v1.CountSectionsOfChangesResponse", ()=>[
        {
            no: 1,
            name: "counts",
            kind: "scalar",
            T: 5,
            repeated: !0
        },
        {
            no: 2,
            name: "dropped_repo_count",
            kind: "scalar",
            T: 5
        }
    ]), Nzg = x.makeMessageType("origin.v1.ResolveSectionPersonalBotAuthorsRequest", ()=>[
        {
            no: 1,
            name: "cursor_user_ids",
            kind: "scalar",
            T: 3,
            repeated: !0
        }
    ]), Lzg = x.makeMessageType("origin.v1.ResolveSectionPersonalBotAuthorsResponse", ()=>[
        {
            no: 1,
            name: "counts_as_owner",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "authors",
            kind: "message",
            T: Ozg,
            repeated: !0
        }
    ]), Ozg = x.makeMessageType("origin.v1.SectionPersonalBotAuthor", ()=>[
        {
            no: 1,
            name: "cursor_user_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "service_account_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), x1l = x.makeMessageType("origin.v1.SectionOfChanges", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "repo_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "head_ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "base_ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "status",
            kind: "enum",
            T: x.getEnumType(mIt)
        },
        {
            no: 10,
            name: "created_at",
            kind: "message",
            T: Js
        },
        {
            no: 11,
            name: "updated_at",
            kind: "message",
            T: Js
        },
        {
            no: 12,
            name: "merged_at",
            kind: "message",
            T: Js,
            opt: !0
        },
        {
            no: 13,
            name: "closed_at",
            kind: "message",
            T: Js,
            opt: !0
        },
        {
            no: 14,
            name: "head_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 15,
            name: "base_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 16,
            name: "additions",
            kind: "scalar",
            T: 5
        },
        {
            no: 17,
            name: "deletions",
            kind: "scalar",
            T: 5
        },
        {
            no: 18,
            name: "changed_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 19,
            name: "version_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 20,
            name: "review_decision",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 21,
            name: "reviewers",
            kind: "message",
            T: Fzg,
            repeated: !0
        },
        {
            no: 22,
            name: "total_thread_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 23,
            name: "unresolved_thread_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 24,
            name: "parent_change_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 25,
            name: "stack_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 26,
            name: "repo_namespace",
            kind: "scalar",
            T: 9
        },
        {
            no: 27,
            name: "repo_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 31,
            name: "author",
            kind: "message",
            T: XB
        },
        {
            no: 32,
            name: "viewer_last_viewed_at",
            kind: "message",
            T: Js,
            opt: !0
        },
        {
            no: 33,
            name: "discussion_comment_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 34,
            name: "agent_wrote",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 35,
            name: "labels",
            kind: "message",
            T: C1l,
            repeated: !0
        },
        {
            no: 36,
            name: "assignees",
            kind: "message",
            T: gIt,
            repeated: !0
        },
        {
            no: 37,
            name: "review_requests",
            kind: "message",
            T: gIt,
            repeated: !0
        }
    ]), Fzg = x.makeMessageType("origin.v1.SectionOfChangesReviewer", ()=>[
        {
            no: 2,
            name: "verdict",
            kind: "enum",
            T: x.getEnumType(OGg)
        },
        {
            no: 3,
            name: "reviewed_at",
            kind: "message",
            T: Js
        },
        {
            no: 7,
            name: "author",
            kind: "message",
            T: XB
        }
    ]), MKt = x.makeMessageType("origin.v1.SectionOfChangesFilter", ()=>[
        {
            no: 1,
            name: "and",
            kind: "message",
            T: Bzg,
            oneof: "kind"
        },
        {
            no: 2,
            name: "or",
            kind: "message",
            T: Uzg,
            oneof: "kind"
        },
        {
            no: 3,
            name: "not",
            kind: "message",
            T: jzg,
            oneof: "kind"
        },
        {
            no: 4,
            name: "consolidated_status",
            kind: "message",
            T: $zg,
            oneof: "kind"
        },
        {
            no: 5,
            name: "title_contains",
            kind: "message",
            T: Hzg,
            oneof: "kind"
        },
        {
            no: 6,
            name: "description_contains",
            kind: "message",
            T: Wzg,
            oneof: "kind"
        },
        {
            no: 7,
            name: "merge_base",
            kind: "message",
            T: Gzg,
            oneof: "kind"
        },
        {
            no: 8,
            name: "trunk",
            kind: "message",
            T: qzg,
            oneof: "kind"
        },
        {
            no: 9,
            name: "last_updated",
            kind: "message",
            T: zzg,
            oneof: "kind"
        },
        {
            no: 10,
            name: "open_review_request_for",
            kind: "message",
            T: Vzg,
            oneof: "kind"
        },
        {
            no: 11,
            name: "reopened_review_request_for",
            kind: "message",
            T: Kzg,
            oneof: "kind"
        },
        {
            no: 12,
            name: "closed_review_request_from",
            kind: "message",
            T: Yzg,
            oneof: "kind"
        },
        {
            no: 13,
            name: "includes_direct_reviewer",
            kind: "message",
            T: Xzg,
            oneof: "kind"
        },
        {
            no: 14,
            name: "author_is",
            kind: "message",
            T: A1l,
            oneof: "kind"
        },
        {
            no: 15,
            name: "review_status",
            kind: "message",
            T: Zzg,
            oneof: "kind"
        },
        {
            no: 16,
            name: "approved_by",
            kind: "message",
            T: Qzg,
            oneof: "kind"
        },
        {
            no: 17,
            name: "includes_past_reviewer",
            kind: "message",
            T: Jzg,
            oneof: "kind"
        },
        {
            no: 18,
            name: "has_label",
            kind: "message",
            T: eVg,
            oneof: "kind"
        },
        {
            no: 19,
            name: "num_files_changed",
            kind: "message",
            T: tVg,
            oneof: "kind"
        },
        {
            no: 20,
            name: "num_lines_changed",
            kind: "message",
            T: nVg,
            oneof: "kind"
        },
        {
            no: 21,
            name: "includes_reviewer",
            kind: "message",
            T: iVg,
            oneof: "kind"
        },
        {
            no: 22,
            name: "includes_assignee",
            kind: "message",
            T: sVg,
            oneof: "kind"
        },
        {
            no: 23,
            name: "includes_direct_team_reviewer",
            kind: "message",
            T: oVg,
            oneof: "kind"
        },
        {
            no: 24,
            name: "mentions",
            kind: "message",
            T: aVg,
            oneof: "kind"
        },
        {
            no: 25,
            name: "merged_within",
            kind: "message",
            T: lVg,
            oneof: "kind"
        },
        {
            no: 100,
            name: "unsupported",
            kind: "message",
            T: cVg,
            oneof: "kind"
        }
    ]), Bzg = x.makeMessageType("origin.v1.SectionOfChangesFilterAnd", ()=>[
        {
            no: 1,
            name: "exprs",
            kind: "message",
            T: MKt,
            repeated: !0
        }
    ]), Uzg = x.makeMessageType("origin.v1.SectionOfChangesFilterOr", ()=>[
        {
            no: 1,
            name: "exprs",
            kind: "message",
            T: MKt,
            repeated: !0
        }
    ]), jzg = x.makeMessageType("origin.v1.SectionOfChangesFilterNot", ()=>[
        {
            no: 1,
            name: "expr",
            kind: "message",
            T: MKt
        }
    ]), $zg = x.makeMessageType("origin.v1.SectionOfChangesFilterConsolidatedStatus", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(mIt)
        }
    ]), Hzg = x.makeMessageType("origin.v1.SectionOfChangesFilterTitleContains", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), Wzg = x.makeMessageType("origin.v1.SectionOfChangesFilterDescriptionContains", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]), Gzg = x.makeMessageType("origin.v1.SectionOfChangesFilterMergeBase", ()=>[
        {
            no: 1,
            name: "merge_base",
            kind: "scalar",
            T: 9
        }
    ]), qzg = x.makeMessageType("origin.v1.SectionOfChangesFilterTrunk", ()=>[
        {
            no: 1,
            name: "trunk",
            kind: "scalar",
            T: 9
        }
    ]), zzg = x.makeMessageType("origin.v1.SectionOfChangesFilterLastUpdated", ()=>[
        {
            no: 1,
            name: "hours",
            kind: "scalar",
            T: 5
        }
    ]), Vzg = x.makeMessageType("origin.v1.SectionOfChangesFilterOpenReviewRequestFor", ()=>[
        {
            no: 2,
            name: "cursor_user_id",
            kind: "scalar",
            T: 3
        }
    ]), Kzg = x.makeMessageType("origin.v1.SectionOfChangesFilterReopenedReviewRequestFor", ()=>[
        {
            no: 2,
            name: "cursor_user_id",
            kind: "scalar",
            T: 3
        }
    ]), Yzg = x.makeMessageType("origin.v1.SectionOfChangesFilterClosedReviewRequestFrom", ()=>[
        {
            no: 2,
            name: "cursor_user_id",
            kind: "scalar",
            T: 3
        }
    ]), Xzg = x.makeMessageType("origin.v1.SectionOfChangesFilterIncludesDirectReviewer", ()=>[
        {
            no: 2,
            name: "cursor_user_id",
            kind: "scalar",
            T: 3
        }
    ]), A1l = x.makeMessageType("origin.v1.SectionOfChangesFilterAuthorIs", ()=>[
        {
            no: 2,
            name: "cursor_user_id",
            kind: "scalar",
            T: 3
        }
    ]), Zzg = x.makeMessageType("origin.v1.SectionOfChangesFilterReviewStatus", ()=>[
        {
            no: 1,
            name: "state",
            kind: "enum",
            T: x.getEnumType(FGg)
        }
    ]), Qzg = x.makeMessageType("origin.v1.SectionOfChangesFilterApprovedBy", ()=>[
        {
            no: 2,
            name: "cursor_user_id",
            kind: "scalar",
            T: 3
        }
    ]), Jzg = x.makeMessageType("origin.v1.SectionOfChangesFilterIncludesPastReviewer", ()=>[
        {
            no: 2,
            name: "cursor_user_id",
            kind: "scalar",
            T: 3
        }
    ]), eVg = x.makeMessageType("origin.v1.SectionOfChangesFilterHasLabel", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), tVg = x.makeMessageType("origin.v1.SectionOfChangesFilterNumFilesChanged", ()=>[
        {
            no: 1,
            name: "num_files",
            kind: "scalar",
            T: 5
        }
    ]), nVg = x.makeMessageType("origin.v1.SectionOfChangesFilterNumLinesChanged", ()=>[
        {
            no: 1,
            name: "num_lines",
            kind: "scalar",
            T: 5
        }
    ]), iVg = x.makeMessageType("origin.v1.SectionOfChangesFilterIncludesReviewer", ()=>[
        {
            no: 2,
            name: "group_public_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "cursor_user_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "group_members",
            kind: "message",
            T: rVg,
            repeated: !0
        }
    ]), rVg = x.makeMessageType("origin.v1.SectionOfChangesFilterReviewerGroupMembers", ()=>[
        {
            no: 1,
            name: "group_public_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "cursor_user_ids",
            kind: "scalar",
            T: 3,
            repeated: !0
        }
    ]), sVg = x.makeMessageType("origin.v1.SectionOfChangesFilterIncludesAssignee", ()=>[
        {
            no: 2,
            name: "cursor_user_id",
            kind: "scalar",
            T: 3
        }
    ]), oVg = x.makeMessageType("origin.v1.SectionOfChangesFilterIncludesDirectTeamReviewer", ()=>[
        {
            no: 1,
            name: "slug",
            kind: "scalar",
            T: 9
        }
    ]), aVg = x.makeMessageType("origin.v1.SectionOfChangesFilterMentions", ()=>[
        {
            no: 1,
            name: "username",
            kind: "scalar",
            T: 9
        }
    ]), lVg = x.makeMessageType("origin.v1.SectionOfChangesFilterMergedWithin", ()=>[
        {
            no: 1,
            name: "hours",
            kind: "scalar",
            T: 5
        }
    ]), cVg = x.makeMessageType("origin.v1.SectionOfChangesFilterUnsupported", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "scalar",
            T: 9
        }
    ]), uVg = x.makeMessageType("origin.v1.StartReviewRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "verdict",
            kind: "enum",
            T: x.getEnumType(HRi)
        },
        {
            no: 3,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "version_number",
            kind: "scalar",
            T: 4
        }
    ]), dVg = x.makeMessageType("origin.v1.StartReviewResponse", ()=>[
        {
            no: 1,
            name: "review",
            kind: "message",
            T: PVe
        }
    ]), hVg = x.makeMessageType("origin.v1.SubmitReviewRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "review_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "verdict",
            kind: "enum",
            T: x.getEnumType(HRi),
            opt: !0
        },
        {
            no: 4,
            name: "body",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), pVg = x.makeMessageType("origin.v1.SubmitReviewResponse", ()=>[
        {
            no: 1,
            name: "review",
            kind: "message",
            T: PVe
        }
    ]), mVg = x.makeMessageType("origin.v1.DiscardPendingReviewRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "review_id",
            kind: "scalar",
            T: 9
        }
    ]), gVg = x.makeMessageType("origin.v1.DiscardPendingReviewResponse", []), fVg = x.makeMessageType("origin.v1.GetPendingReviewRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        }
    ]), vVg = x.makeMessageType("origin.v1.GetPendingReviewResponse", ()=>[
        {
            no: 1,
            name: "review",
            kind: "message",
            T: PVe,
            opt: !0
        },
        {
            no: 2,
            name: "thread_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "has_pending_comments",
            kind: "scalar",
            T: 8
        }
    ]), _Vg = x.makeMessageType("origin.v1.CheckChangeCreationAccessRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        }
    ]), bVg = x.makeMessageType("origin.v1.CheckChangeCreationAccessResponse", []), yVg = x.makeMessageType("origin.v1.SubmitPullRequestGateReportRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "gate",
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
            name: "verdict",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "findings",
            kind: "message",
            T: P1l,
            repeated: !0
        },
        {
            no: 7,
            name: "gate_fields",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 8,
            name: "links",
            kind: "message",
            T: wVg,
            repeated: !0
        },
        {
            no: 9,
            name: "rubric_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "lane",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "model",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "agent",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "transcript_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 14,
            name: "transcript_id",
            kind: "scalar",
            T: 9
        }
    ]), SVg = x.makeMessageType("origin.v1.UploadPullRequestGateTranscriptRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "head_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "media_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "body_gzip",
            kind: "scalar",
            T: 12
        }
    ]), kVg = x.makeMessageType("origin.v1.UploadPullRequestGateTranscriptResponse", ()=>[
        {
            no: 1,
            name: "uploaded",
            kind: "message",
            T: R1l,
            oneof: "outcome"
        },
        {
            no: 2,
            name: "refused",
            kind: "message",
            T: M1l,
            oneof: "outcome"
        }
    ]), R1l = x.makeMessageType("origin.v1.PullRequestGateTranscript", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "sha256",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "byte_size",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "media_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "purged",
            kind: "scalar",
            T: 8
        }
    ]), P1l = x.makeMessageType("origin.v1.PullRequestGateReportFinding", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "severity",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "line",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), wVg = x.makeMessageType("origin.v1.PullRequestGateReportLink", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]), CVg = x.makeMessageType("origin.v1.SubmitPullRequestGateReportResponse", ()=>[
        {
            no: 1,
            name: "submitted",
            kind: "message",
            T: D1l,
            oneof: "outcome"
        },
        {
            no: 2,
            name: "refused",
            kind: "message",
            T: M1l,
            oneof: "outcome"
        }
    ]), M1l = x.makeMessageType("origin.v1.PullRequestGateReportRefusal", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), D1l = x.makeMessageType("origin.v1.PullRequestGateReport", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "gate",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "verdict",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "head_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "base_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "client",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "lane",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "agent",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "run_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "transcript_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "findings",
            kind: "message",
            T: P1l,
            repeated: !0
        },
        {
            no: 14,
            name: "created_at",
            kind: "message",
            T: Js
        },
        {
            no: 15,
            name: "transcript",
            kind: "message",
            T: R1l,
            opt: !0
        },
        {
            no: 16,
            name: "proof",
            kind: "scalar",
            T: 9
        },
        {
            no: 17,
            name: "audit",
            kind: "message",
            T: TVg,
            opt: !0
        }
    ]), TVg = x.makeMessageType("origin.v1.PullRequestGateReportAudit", ()=>[
        {
            no: 1,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "completed_at",
            kind: "message",
            T: Js,
            opt: !0
        }
    ]), EVg = x.makeMessageType("origin.v1.ListPullRequestGateReportsRequest", ()=>[
        {
            no: 1,
            name: "change",
            kind: "message",
            T: Wv
        },
        {
            no: 2,
            name: "head_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), IVg = x.makeMessageType("origin.v1.ListPullRequestGateReportsResponse", ()=>[
        {
            no: 1,
            name: "head_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "required_gates",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "gates_file_unavailable_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "reports",
            kind: "message",
            T: D1l,
            repeated: !0
        }
    ]);

}
