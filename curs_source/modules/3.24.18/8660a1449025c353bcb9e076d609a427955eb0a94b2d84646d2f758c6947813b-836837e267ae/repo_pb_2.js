import { Dps, Oc, kG } from "./origin_common_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { Js } from "./timestamp_pb.js";
import { E } from "./tslib.es6.js";
var QSl, Y9e, RVe, JSl, w$g, C$g, CV, IKt, Nps, T$g, e1l, t1l, E$g, URi, Lps, I$g, x$g, A$g, R$g, P$g, M$g, D$g, N$g, L$g, O$g, n1l, F$g, B$g, U$g, j$g, $$g, H$g, W$g, G$g, q$g, z$g, V$g, K$g, Y$g, X$g, Z$g, Q$g, J$g, ePn, eHg, tHg, nHg, iHg, STe, rHg, sHg, oHg, aHg, lHg, cHg, uHg, i1l, dHg, hHg, pHg, pIt, mHg, gHg, fHg, vHg, _Hg, bHg, yHg, Ops, Fps, r1l, SHg, kHg, wHg, MMe, CHg, THg, EHg, IHg, xHg, AHg, RHg, PHg, MHg, DHg, NHg, LHg, s1l, OHg, FHg;
export { $$g, A$g, AHg, B$g, C$g, CHg, CV, D$g, DHg, E$g, EHg, F$g, FHg, Fps, G$g, H$g, I$g, IHg, IKt, J$g, JSl, K$g, L$g, LHg, Lps, M$g, MHg, MMe, N$g, NHg, Nps, O$g, OHg, Ops, P$g, PHg, Q$g, QSl, R$g, RHg, RVe, SHg, STe, T$g, THg, U$g, URi, V$g, W$g, X$g, Y$g, Y9e, Z$g, _Hg, aHg, bHg, cHg, dHg, e1l, eHg, ePn, fHg, gHg, hHg, i1l, iHg, j$g, kHg, lHg, mHg, n1l, nHg, oHg, pHg, pIt, q$g, r1l, rHg, s1l, sHg, t1l, tHg, uHg, vHg, w$g, wHg, x$g, xHg, yHg, z$g };
var __wakaru__me_initialized = false;
export function _me() {
if (__wakaru__me_initialized) return;
__wakaru__me_initialized = true;
"use strict";
E(), hr(), kG(), QSl = x.makeEnum("origin.v1.ListHostedReposOrderBy", [
    {
        no: 0,
        name: "LIST_HOSTED_REPOS_ORDER_BY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "LIST_HOSTED_REPOS_ORDER_BY_NAME_ASC",
        localName: "NAME_ASC"
    },
    {
        no: 2,
        name: "LIST_HOSTED_REPOS_ORDER_BY_NAME_DESC",
        localName: "NAME_DESC"
    },
    {
        no: 3,
        name: "LIST_HOSTED_REPOS_ORDER_BY_LAST_PUSHED_DESC",
        localName: "LAST_PUSHED_DESC"
    },
    {
        no: 4,
        name: "LIST_HOSTED_REPOS_ORDER_BY_LAST_PUSHED_ASC",
        localName: "LAST_PUSHED_ASC"
    },
    {
        no: 5,
        name: "LIST_HOSTED_REPOS_ORDER_BY_ID_ASC",
        localName: "ID_ASC"
    },
    {
        no: 6,
        name: "LIST_HOSTED_REPOS_ORDER_BY_ID_DESC",
        localName: "ID_DESC"
    }
]), Y9e = x.makeEnum("origin.v1.RepoKind", [
    {
        no: 0,
        name: "REPO_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REPO_KIND_STANDARD",
        localName: "STANDARD"
    },
    {
        no: 2,
        name: "REPO_KIND_CURSOR_MARKETPLACE",
        localName: "CURSOR_MARKETPLACE"
    },
    {
        no: 3,
        name: "REPO_KIND_ORIGIN_NATIVE_CURSOR_MARKETPLACE",
        localName: "ORIGIN_NATIVE_CURSOR_MARKETPLACE"
    },
    {
        no: 4,
        name: "REPO_KIND_AGENT_TEMP",
        localName: "AGENT_TEMP"
    }
]), RVe = x.makeEnum("origin.v1.RepoVisibility", [
    {
        no: 0,
        name: "REPO_VISIBILITY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REPO_VISIBILITY_INTERNAL",
        localName: "INTERNAL"
    },
    {
        no: 2,
        name: "REPO_VISIBILITY_PRIVATE",
        localName: "PRIVATE"
    },
    {
        no: 3,
        name: "REPO_VISIBILITY_PUBLIC",
        localName: "PUBLIC"
    }
]), JSl = x.makeEnum("origin.v1.RepoMirrorTransition", [
    {
        no: 0,
        name: "REPO_MIRROR_TRANSITION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REPO_MIRROR_TRANSITION_INBOUND_TO_OUTBOUND",
        localName: "INBOUND_TO_OUTBOUND"
    },
    {
        no: 2,
        name: "REPO_MIRROR_TRANSITION_OUTBOUND_TO_INBOUND",
        localName: "OUTBOUND_TO_INBOUND"
    },
    {
        no: 3,
        name: "REPO_MIRROR_TRANSITION_INITIAL_TO_INBOUND",
        localName: "INITIAL_TO_INBOUND"
    }
]), w$g = x.makeEnum("origin.v1.RepoMirrorTransitionJobStatus", [
    {
        no: 0,
        name: "REPO_MIRROR_TRANSITION_JOB_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REPO_MIRROR_TRANSITION_JOB_STATUS_QUEUED",
        localName: "QUEUED"
    },
    {
        no: 2,
        name: "REPO_MIRROR_TRANSITION_JOB_STATUS_RUNNING",
        localName: "RUNNING"
    },
    {
        no: 3,
        name: "REPO_MIRROR_TRANSITION_JOB_STATUS_SUCCEEDED",
        localName: "SUCCEEDED"
    },
    {
        no: 4,
        name: "REPO_MIRROR_TRANSITION_JOB_STATUS_FAILED_ROLLED_BACK",
        localName: "FAILED_ROLLED_BACK"
    },
    {
        no: 5,
        name: "REPO_MIRROR_TRANSITION_JOB_STATUS_REQUIRES_ATTENTION",
        localName: "REQUIRES_ATTENTION"
    },
    {
        no: 6,
        name: "REPO_MIRROR_TRANSITION_JOB_STATUS_SUPERSEDED",
        localName: "SUPERSEDED"
    }
]), C$g = x.makeEnum("origin.v1.RepoMirrorTransitionJobPhase", [
    {
        no: 0,
        name: "REPO_MIRROR_TRANSITION_JOB_PHASE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REPO_MIRROR_TRANSITION_JOB_PHASE_QUEUED",
        localName: "QUEUED"
    },
    {
        no: 2,
        name: "REPO_MIRROR_TRANSITION_JOB_PHASE_STARTING",
        localName: "STARTING"
    },
    {
        no: 3,
        name: "REPO_MIRROR_TRANSITION_JOB_PHASE_DRAINING_WRITES",
        localName: "DRAINING_WRITES"
    },
    {
        no: 4,
        name: "REPO_MIRROR_TRANSITION_JOB_PHASE_FINALIZING_MIRROR_FETCH",
        localName: "FINALIZING_MIRROR_FETCH"
    },
    {
        no: 5,
        name: "REPO_MIRROR_TRANSITION_JOB_PHASE_FINALIZING_MIRROR_PUSH",
        localName: "FINALIZING_MIRROR_PUSH"
    },
    {
        no: 6,
        name: "REPO_MIRROR_TRANSITION_JOB_PHASE_COMMITTING_TARGET_STATUS",
        localName: "COMMITTING_TARGET_STATUS"
    },
    {
        no: 7,
        name: "REPO_MIRROR_TRANSITION_JOB_PHASE_ROLLING_BACK",
        localName: "ROLLING_BACK"
    },
    {
        no: 8,
        name: "REPO_MIRROR_TRANSITION_JOB_PHASE_COMPLETED",
        localName: "COMPLETED"
    },
    {
        no: 9,
        name: "REPO_MIRROR_TRANSITION_JOB_PHASE_INITIALIZING_MIRROR_FETCH",
        localName: "INITIALIZING_MIRROR_FETCH"
    },
    {
        no: 10,
        name: "REPO_MIRROR_TRANSITION_JOB_PHASE_ENABLING_GITHUB_FENCE",
        localName: "ENABLING_GITHUB_FENCE"
    },
    {
        no: 11,
        name: "REPO_MIRROR_TRANSITION_JOB_PHASE_VERIFYING_INTEGRITY",
        localName: "VERIFYING_INTEGRITY"
    },
    {
        no: 12,
        name: "REPO_MIRROR_TRANSITION_JOB_PHASE_REOPENING_INBOUND_MIRROR",
        localName: "REOPENING_INBOUND_MIRROR"
    },
    {
        no: 13,
        name: "REPO_MIRROR_TRANSITION_JOB_PHASE_SNAPSHOTTING_REFS",
        localName: "SNAPSHOTTING_REFS"
    }
]), CV = x.makeEnum("origin.v1.MirrorStatus", [
    {
        no: 0,
        name: "MIRROR_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MIRROR_STATUS_TRANSITIONING_TO_INBOUND",
        localName: "TRANSITIONING_TO_INBOUND"
    },
    {
        no: 2,
        name: "MIRROR_STATUS_INBOUND",
        localName: "INBOUND"
    },
    {
        no: 3,
        name: "MIRROR_STATUS_OUTBOUND",
        localName: "OUTBOUND"
    },
    {
        no: 4,
        name: "MIRROR_STATUS_TRANSITIONING_INBOUND_TO_OUTBOUND",
        localName: "TRANSITIONING_INBOUND_TO_OUTBOUND"
    },
    {
        no: 5,
        name: "MIRROR_STATUS_TRANSITIONING_OUTBOUND_TO_INBOUND",
        localName: "TRANSITIONING_OUTBOUND_TO_INBOUND"
    },
    {
        no: 6,
        name: "MIRROR_STATUS_INITIAL_SYNC_PENDING",
        localName: "INITIAL_SYNC_PENDING"
    }
]), IKt = x.makeEnum("origin.v1.OriginNamespaceOwnerType", [
    {
        no: 0,
        name: "ORIGIN_NAMESPACE_OWNER_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ORIGIN_NAMESPACE_OWNER_TYPE_TEAM",
        localName: "TEAM"
    },
    {
        no: 2,
        name: "ORIGIN_NAMESPACE_OWNER_TYPE_USER",
        localName: "USER"
    }
]), Nps = x.makeEnum("origin.v1.AuthorizedNamespaceAccessReason", [
    {
        no: 0,
        name: "AUTHORIZED_NAMESPACE_ACCESS_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AUTHORIZED_NAMESPACE_ACCESS_REASON_TEAM_OWNERSHIP",
        localName: "TEAM_OWNERSHIP"
    },
    {
        no: 2,
        name: "AUTHORIZED_NAMESPACE_ACCESS_REASON_USER_OWNERSHIP",
        localName: "USER_OWNERSHIP"
    },
    {
        no: 3,
        name: "AUTHORIZED_NAMESPACE_ACCESS_REASON_EXPLICIT_GRANT",
        localName: "EXPLICIT_GRANT"
    },
    {
        no: 4,
        name: "AUTHORIZED_NAMESPACE_ACCESS_REASON_NAMESPACE_GRANT",
        localName: "NAMESPACE_GRANT"
    },
    {
        no: 5,
        name: "AUTHORIZED_NAMESPACE_ACCESS_REASON_REPOSITORY_GRANT",
        localName: "REPOSITORY_GRANT"
    }
]), T$g = x.makeMessageType("origin.v1.RepoSummary", ()=>[
        {
            no: 1,
            name: "org",
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
            name: "clone_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "default_branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "github_node_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "github_enterprise_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "repo_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "mirror_status",
            kind: "enum",
            T: x.getEnumType(CV)
        },
        {
            no: 10,
            name: "last_pushed_at",
            kind: "message",
            T: Js,
            opt: !0
        },
        {
            no: 11,
            name: "forge_environment",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "origin_namespace_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "allow_merge_commit",
            kind: "scalar",
            T: 8
        },
        {
            no: 14,
            name: "allow_squash_merge",
            kind: "scalar",
            T: 8
        },
        {
            no: 15,
            name: "visibility",
            kind: "enum",
            T: x.getEnumType(RVe)
        },
        {
            no: 16,
            name: "github_mirror_info",
            kind: "message",
            T: Ops,
            opt: !0
        },
        {
            no: 17,
            name: "deleted_at",
            kind: "message",
            T: Js,
            opt: !0
        },
        {
            no: 18,
            name: "repo_kind",
            kind: "enum",
            T: x.getEnumType(Y9e)
        },
        {
            no: 19,
            name: "owner_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 20,
            name: "delete_branch_on_merge",
            kind: "scalar",
            T: 8
        },
        {
            no: 21,
            name: "created_at",
            kind: "message",
            T: Js,
            opt: !0
        },
        {
            no: 22,
            name: "updated_at",
            kind: "message",
            T: Js,
            opt: !0
        },
        {
            no: 23,
            name: "github_installation_id",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), e1l = x.makeMessageType("origin.v1.ListHostedReposRequest", ()=>[
        {
            no: 1,
            name: "page_size",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "page_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "search",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "order_by",
            kind: "enum",
            T: x.getEnumType(QSl)
        },
        {
            no: 5,
            name: "namespace",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "include_github_mirror_info",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "apply_repository_picker_policy",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "include_external_collaborator_repos",
            kind: "scalar",
            T: 8
        }
    ]), t1l = x.makeMessageType("origin.v1.ListHostedReposResponse", ()=>[
        {
            no: 1,
            name: "repositories",
            kind: "message",
            T: T$g,
            repeated: !0
        },
        {
            no: 2,
            name: "next_page_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "total_count",
            kind: "scalar",
            T: 13
        }
    ]), E$g = x.makeMessageType("origin.v1.ListReposForAppInstallRequest", ()=>[
        {
            no: 1,
            name: "namespace",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "page_size",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "page_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "search",
            kind: "scalar",
            T: 9
        }
    ]), URi = x.makeMessageType("origin.v1.CreateRepoRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "default_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "forge_environment",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "repo_kind",
            kind: "enum",
            T: x.getEnumType(Y9e),
            opt: !0
        },
        {
            no: 8,
            name: "visibility",
            kind: "enum",
            T: x.getEnumType(RVe),
            opt: !0
        }
    ]), Lps = x.makeMessageType("origin.v1.CreateRepoResponse", ()=>[
        {
            no: 3,
            name: "repository",
            kind: "message",
            T: STe
        }
    ]), I$g = x.makeMessageType("origin.v1.PublishAgentTempRepoRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "new_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "visibility",
            kind: "enum",
            T: x.getEnumType(RVe),
            opt: !0
        }
    ]), x$g = x.makeMessageType("origin.v1.PublishAgentTempRepoResponse", ()=>[
        {
            no: 1,
            name: "published",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "repository",
            kind: "message",
            T: STe
        }
    ]), A$g = x.makeMessageType("origin.v1.CreateMirroredRepoRequest", ()=>[
        {
            no: 1,
            name: "github_source",
            kind: "message",
            T: Dps
        },
        {
            no: 2,
            name: "target_namespace",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "forge_environment",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "repo_kind",
            kind: "enum",
            T: x.getEnumType(Y9e),
            opt: !0
        },
        {
            no: 6,
            name: "github_installation_id",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), R$g = x.makeMessageType("origin.v1.FilterMirrorableGithubReposRequest", ()=>[
        {
            no: 1,
            name: "repos",
            kind: "message",
            T: Dps,
            repeated: !0
        },
        {
            no: 2,
            name: "org_admin_only",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), P$g = x.makeMessageType("origin.v1.FilterMirrorableGithubReposResponse", ()=>[
        {
            no: 1,
            name: "mirrorable_repos",
            kind: "message",
            T: Dps,
            repeated: !0
        }
    ]), M$g = x.makeMessageType("origin.v1.DetachRepoMirrorRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        }
    ]), D$g = x.makeMessageType("origin.v1.DetachRepoMirrorResponse", []), N$g = x.makeMessageType("origin.v1.ReattachRepoMirrorRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "dry_run",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "allow_overwrite",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "wait_for_catch_up",
            kind: "scalar",
            T: 8
        }
    ]), L$g = x.makeMessageType("origin.v1.MirrorRefComparison", ()=>[
        {
            no: 1,
            name: "in_sync",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "total_mismatches",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "local_ref_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "remote_ref_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "diverged_refs",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "diverged_ref_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "sample_complete",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "sampled_mismatch_count",
            kind: "scalar",
            T: 5
        }
    ]), O$g = x.makeMessageType("origin.v1.ReattachRepoMirrorResponse", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: STe
        },
        {
            no: 2,
            name: "github_state",
            kind: "message",
            T: L$g
        },
        {
            no: 3,
            name: "deploy_key_present",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "catch_up_dispatched",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "catch_up_completed",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "catch_up_error",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "github_state_skipped",
            kind: "scalar",
            T: 8
        }
    ]), n1l = x.makeMessageType("origin.v1.RepoMirrorDeployKeyInfo", ()=>[
        {
            no: 1,
            name: "public_key_openssh",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "fingerprint_sha256",
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
            no: 4,
            name: "updated_at",
            kind: "message",
            T: Js
        }
    ]), F$g = x.makeMessageType("origin.v1.CreateRepoMirrorDeployKeyRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "rotate",
            kind: "scalar",
            T: 8
        }
    ]), B$g = x.makeMessageType("origin.v1.CreateRepoMirrorDeployKeyResponse", ()=>[
        {
            no: 1,
            name: "deploy_key",
            kind: "message",
            T: n1l
        }
    ]), U$g = x.makeMessageType("origin.v1.GetRepoMirrorDeployKeyRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        }
    ]), j$g = x.makeMessageType("origin.v1.GetRepoMirrorDeployKeyResponse", ()=>[
        {
            no: 1,
            name: "deploy_key",
            kind: "message",
            T: n1l,
            opt: !0
        }
    ]), $$g = x.makeMessageType("origin.v1.DeleteRepoMirrorDeployKeyRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        }
    ]), H$g = x.makeMessageType("origin.v1.DeleteRepoMirrorDeployKeyResponse", ()=>[
        {
            no: 1,
            name: "deleted",
            kind: "scalar",
            T: 8
        }
    ]), W$g = x.makeMessageType("origin.v1.TransitionRepoMirrorStatusRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "transition",
            kind: "enum",
            T: x.getEnumType(JSl)
        }
    ]), G$g = x.makeMessageType("origin.v1.TransitionRepoMirrorStatusResponse", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: STe
        },
        {
            no: 2,
            name: "active_job_info",
            kind: "message",
            T: ePn
        }
    ]), q$g = x.makeMessageType("origin.v1.ForceRepoMirrorCutoverRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        }
    ]), z$g = x.makeMessageType("origin.v1.ForceRepoMirrorCutoverResponse", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: STe
        },
        {
            no: 2,
            name: "active_job_info",
            kind: "message",
            T: ePn
        }
    ]), V$g = x.makeMessageType("origin.v1.SyncMirrorRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "wait",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "sha",
            kind: "scalar",
            T: 9
        }
    ]), K$g = x.makeMessageType("origin.v1.SyncMirrorResponse", ()=>[
        {
            no: 1,
            name: "synced",
            kind: "scalar",
            T: 8
        }
    ]), Y$g = x.makeMessageType("origin.v1.GetActiveMirrorTransitionJobRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        }
    ]), X$g = x.makeMessageType("origin.v1.GetActiveMirrorTransitionJobResponse", ()=>[
        {
            no: 1,
            name: "active_job_info",
            kind: "message",
            T: ePn
        },
        {
            no: 2,
            name: "last_job_info",
            kind: "message",
            T: ePn
        }
    ]), Z$g = x.makeMessageType("origin.v1.GetMirrorTransitionJobRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "job_id",
            kind: "scalar",
            T: 9
        }
    ]), Q$g = x.makeMessageType("origin.v1.GetMirrorTransitionJobResponse", ()=>[
        {
            no: 1,
            name: "job",
            kind: "message",
            T: ePn
        },
        {
            no: 2,
            name: "repository",
            kind: "message",
            T: STe
        }
    ]), J$g = x.makeMessageType("origin.v1.MirrorFetchProgress", ()=>[
        {
            no: 1,
            name: "subphase",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bytes_received",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 3,
            name: "heartbeat_at",
            kind: "message",
            T: Js,
            opt: !0
        }
    ]), ePn = x.makeMessageType("origin.v1.RepoMirrorTransitionJob", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 3,
            name: "transition",
            kind: "enum",
            T: x.getEnumType(JSl)
        },
        {
            no: 4,
            name: "mirror_status",
            kind: "enum",
            T: x.getEnumType(CV)
        },
        {
            no: 5,
            name: "status",
            kind: "enum",
            T: x.getEnumType(w$g)
        },
        {
            no: 6,
            name: "phase",
            kind: "enum",
            T: x.getEnumType(C$g)
        },
        {
            no: 7,
            name: "attempt_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 11,
            name: "drain_until",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "last_error_code",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "last_error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "started_at",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 16,
            name: "completed_at",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 17,
            name: "created_at",
            kind: "scalar",
            T: 9
        },
        {
            no: 18,
            name: "updated_at",
            kind: "scalar",
            T: 9
        },
        {
            no: 19,
            name: "fetch_progress",
            kind: "message",
            T: J$g,
            opt: !0
        }
    ]), eHg = x.makeMessageType("origin.v1.DeleteRepoClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        }
    ]), tHg = x.makeMessageType("origin.v1.DeleteRepoClientResponse", ()=>[
        {
            no: 1,
            name: "repo_uuid",
            kind: "scalar",
            T: 9
        }
    ]), nHg = x.makeMessageType("origin.v1.DeleteMirroredRepoRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        }
    ]), iHg = x.makeMessageType("origin.v1.DeleteMirroredRepoResponse", ()=>[
        {
            no: 1,
            name: "repo_uuid",
            kind: "scalar",
            T: 9
        }
    ]), STe = x.makeMessageType("origin.v1.Repo", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "default_branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "github_node_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "github_enterprise_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "mirror_status",
            kind: "enum",
            T: x.getEnumType(CV)
        },
        {
            no: 7,
            name: "active_mirror_transition_job_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "repo_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "github_installation_id",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 10,
            name: "created_at",
            kind: "message",
            T: Js,
            opt: !0
        },
        {
            no: 11,
            name: "updated_at",
            kind: "message",
            T: Js,
            opt: !0
        },
        {
            no: 12,
            name: "last_pushed_at",
            kind: "message",
            T: Js,
            opt: !0
        },
        {
            no: 13,
            name: "owner_entity_id",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 14,
            name: "owner_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "forge_environment",
            kind: "scalar",
            T: 9
        },
        {
            no: 16,
            name: "origin_namespace_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 17,
            name: "allow_merge_commit",
            kind: "scalar",
            T: 8
        },
        {
            no: 18,
            name: "allow_squash_merge",
            kind: "scalar",
            T: 8
        },
        {
            no: 19,
            name: "visibility",
            kind: "enum",
            T: x.getEnumType(RVe)
        },
        {
            no: 20,
            name: "delete_branch_on_merge",
            kind: "scalar",
            T: 8
        },
        {
            no: 21,
            name: "deleted_at",
            kind: "message",
            T: Js,
            opt: !0
        }
    ]), rHg = x.makeMessageType("origin.v1.UpdateRepoMergeSettingsRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "allow_merge_commit",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "allow_squash_merge",
            kind: "scalar",
            T: 8
        }
    ]), sHg = x.makeMessageType("origin.v1.UpdateRepoMergeSettingsResponse", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: STe
        }
    ]), oHg = x.makeMessageType("origin.v1.UpdateRepoBranchDeletionSettingRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "delete_branch_on_merge",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), aHg = x.makeMessageType("origin.v1.UpdateRepoBranchDeletionSettingResponse", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: STe
        }
    ]), lHg = x.makeMessageType("origin.v1.ListRepoCloneKitsRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "page_size",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "page_token",
            kind: "scalar",
            T: 9
        }
    ]), cHg = x.makeMessageType("origin.v1.ListRepoCloneKitsResponse", ()=>[
        {
            no: 1,
            name: "kits",
            kind: "message",
            T: uHg,
            repeated: !0
        },
        {
            no: 2,
            name: "next_page_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "clone_kit_enabled",
            kind: "scalar",
            T: 8
        }
    ]), uHg = x.makeMessageType("origin.v1.RepoCloneKitGeneration", ()=>[
        {
            no: 1,
            name: "pack_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tip_commit",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "pack_size_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "idx_size_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "rev_size_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "last_published_at",
            kind: "message",
            T: Js
        },
        {
            no: 7,
            name: "kit_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "is_current",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "pack_sha256",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "idx_sha256",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "rev_sha256",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "chunks_sha256",
            kind: "scalar",
            T: 9
        }
    ]), i1l = x.makeMessageType("origin.v1.UpdateRepoVisibilityRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "visibility",
            kind: "enum",
            T: x.getEnumType(RVe),
            opt: !0
        }
    ]), dHg = x.makeMessageType("origin.v1.UpdateRepoVisibilityResponse", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: STe
        }
    ]), hHg = x.makeMessageType("origin.v1.UpdateRepoDefaultBranchRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "default_branch",
            kind: "scalar",
            T: 9
        }
    ]), pHg = x.makeMessageType("origin.v1.UpdateRepoDefaultBranchResponse", ()=>[
        {
            no: 1,
            name: "default_branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "changed",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "repository",
            kind: "message",
            T: STe
        }
    ]), pIt = x.makeMessageType("origin.v1.GetRepoRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "include_authenticated_viewer",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "include_merge_queues",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), mHg = x.makeMessageType("origin.v1.AuthenticatedOriginViewer", ()=>[
        {
            no: 1,
            name: "identity",
            kind: "message",
            T: fHg
        },
        {
            no: 2,
            name: "profile",
            kind: "message",
            T: vHg
        },
        {
            no: 3,
            name: "gate",
            kind: "message",
            T: _Hg
        },
        {
            no: 4,
            name: "policy",
            kind: "message",
            T: bHg
        }
    ]), gHg = x.makeEnum("origin.v1.AuthenticatedOriginViewer.OriginDisabledState", [
    {
        no: 0,
        name: "ORIGIN_DISABLED_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ORIGIN_DISABLED_STATE_NOT_DISABLED",
        localName: "NOT_DISABLED"
    },
    {
        no: 2,
        name: "ORIGIN_DISABLED_STATE_DISABLED",
        localName: "DISABLED"
    },
    {
        no: 3,
        name: "ORIGIN_DISABLED_STATE_UNAVAILABLE",
        localName: "UNAVAILABLE"
    }
]), fHg = x.makeMessageType("origin.v1.AuthenticatedOriginViewer.Identity", ()=>[
        {
            no: 1,
            name: "auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "public_user_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "origin_author_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "AuthenticatedOriginViewer_Identity"
}), vHg = x.makeMessageType("origin.v1.AuthenticatedOriginViewer.Profile", ()=>[
        {
            no: 1,
            name: "email",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "first_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "last_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "avatar_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "AuthenticatedOriginViewer_Profile"
}), _Hg = x.makeMessageType("origin.v1.AuthenticatedOriginViewer.GateAttributes", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 2,
            name: "created_at_iso",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "is_enterprise_user",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "email_domain_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "country",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "organization_id",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 7,
            name: "organization_public_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "is_team_admin",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "AuthenticatedOriginViewer_GateAttributes"
}), bHg = x.makeMessageType("origin.v1.AuthenticatedOriginViewer.ReviewPolicy", ()=>[
        {
            no: 1,
            name: "origin_disabled",
            kind: "enum",
            T: x.getEnumType(gHg)
        }
    ], {
    localName: "AuthenticatedOriginViewer_ReviewPolicy"
}), yHg = x.makeMessageType("origin.v1.GetRepoResponse", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: STe
        },
        {
            no: 2,
            name: "github_mirror_info",
            kind: "message",
            T: Ops,
            opt: !0
        },
        {
            no: 3,
            name: "merge_queue_target_refs",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "merge_queue_available",
            kind: "scalar",
            T: 8
        }
    ]), Ops = x.makeMessageType("origin.v1.RepoGithubMirrorInfo", ()=>[
        {
            no: 1,
            name: "github_owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "github_repo",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "github_repo_url",
            kind: "scalar",
            T: 9
        }
    ]), Fps = x.makeMessageType("origin.v1.GetRepoWithMirrorInfoResponse", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: STe
        },
        {
            no: 2,
            name: "github_mirror_info",
            kind: "message",
            T: Ops
        },
        {
            no: 3,
            name: "viewer_can_write_changes",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "authenticated_viewer",
            kind: "message",
            T: mHg,
            opt: !0
        }
    ]), r1l = x.makeMessageType("origin.v1.GetRepoByGithubMirrorRequest", ()=>[
        {
            no: 1,
            name: "github_node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "github_enterprise_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), SHg = x.makeMessageType("origin.v1.CloneKitTimingsMs", ()=>[
        {
            no: 1,
            name: "manifest_ms",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "download_ms",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "verify_ms",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "fetch_ms",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "checkout_ms",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "total_ms",
            kind: "scalar",
            T: 5
        }
    ]), kHg = x.makeMessageType("origin.v1.RecordCloneKitUsageRequest", ()=>[
        {
            no: 1,
            name: "invocation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 3,
            name: "artifact_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "timings",
            kind: "message",
            T: SHg,
            opt: !0
        }
    ]), wHg = x.makeMessageType("origin.v1.RecordCloneKitUsageResponse", []), MMe = x.makeMessageType("origin.v1.OriginNamespace", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "owner_type",
            kind: "enum",
            T: x.getEnumType(IKt)
        },
        {
            no: 3,
            name: "owner_entity_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "namespace",
            kind: "scalar",
            T: 9
        }
    ]), CHg = x.makeMessageType("origin.v1.CreateOriginNamespaceRequest", ()=>[
        {
            no: 1,
            name: "owner_type",
            kind: "enum",
            T: x.getEnumType(IKt)
        },
        {
            no: 2,
            name: "owner_entity_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "namespace",
            kind: "scalar",
            T: 9
        }
    ]), THg = x.makeMessageType("origin.v1.CreateOriginNamespaceResponse", ()=>[
        {
            no: 1,
            name: "origin_namespace",
            kind: "message",
            T: MMe
        }
    ]), EHg = x.makeMessageType("origin.v1.SetupTeamNamespaceRequest", ()=>[
        {
            no: 1,
            name: "owner_type",
            kind: "enum",
            T: x.getEnumType(IKt)
        },
        {
            no: 2,
            name: "owner_entity_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "namespace",
            kind: "scalar",
            T: 9
        }
    ]), IHg = x.makeMessageType("origin.v1.SetupTeamNamespaceResponse", ()=>[
        {
            no: 1,
            name: "origin_namespace",
            kind: "message",
            T: MMe
        },
        {
            no: 2,
            name: "namespace_created",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "grants_changed",
            kind: "scalar",
            T: 8
        }
    ]), xHg = x.makeMessageType("origin.v1.SetupUserNamespaceRequest", ()=>[
        {
            no: 1,
            name: "namespace",
            kind: "scalar",
            T: 9
        }
    ]), AHg = x.makeMessageType("origin.v1.SuggestOriginNamespaceRequest", ()=>[
        {
            no: 1,
            name: "preferred_slug",
            kind: "scalar",
            T: 9
        }
    ]), RHg = x.makeMessageType("origin.v1.SuggestOriginNamespaceResponse", ()=>[
        {
            no: 1,
            name: "available",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "normalized_slug",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "suggested_slug",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), PHg = x.makeMessageType("origin.v1.SetupUserNamespaceResponse", ()=>[
        {
            no: 1,
            name: "origin_namespace",
            kind: "message",
            T: MMe
        },
        {
            no: 2,
            name: "namespace_created",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "grants_changed",
            kind: "scalar",
            T: 8
        }
    ]), MHg = x.makeMessageType("origin.v1.GetRepoNamespaceRequest", ()=>[
        {
            no: 1,
            name: "owner_type",
            kind: "enum",
            T: x.getEnumType(IKt)
        },
        {
            no: 2,
            name: "owner_entity_id",
            kind: "scalar",
            T: 3
        }
    ]), DHg = x.makeMessageType("origin.v1.GetRepoNamespaceResponse", ()=>[
        {
            no: 1,
            name: "origin_namespace",
            kind: "message",
            T: MMe
        }
    ]), NHg = x.makeMessageType("origin.v1.DoesNamespaceExistForTeamRequest", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 3
        }
    ]), LHg = x.makeMessageType("origin.v1.DoesNamespaceExistForTeamResponse", ()=>[
        {
            no: 1,
            name: "exists",
            kind: "scalar",
            T: 8
        }
    ]), s1l = x.makeMessageType("origin.v1.GetAuthorizedNamespacesRequest", ()=>[
        {
            no: 1,
            name: "include_explicit_grant_namespaces",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "include_all_teams",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "include_granted_namespaces",
            kind: "scalar",
            T: 8
        }
    ]), OHg = x.makeMessageType("origin.v1.GetAuthorizedNamespacesResponse", ()=>[
        {
            no: 1,
            name: "namespaces",
            kind: "message",
            T: FHg,
            repeated: !0
        },
        {
            no: 2,
            name: "origin_disabled_for_team",
            kind: "scalar",
            T: 8
        }
    ]), FHg = x.makeMessageType("origin.v1.AuthorizedNamespace", ()=>[
        {
            no: 1,
            name: "namespace",
            kind: "message",
            T: MMe
        },
        {
            no: 2,
            name: "access_reason",
            kind: "enum",
            T: x.getEnumType(Nps)
        },
        {
            no: 3,
            name: "origin_allow_public_repos",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "app_workload_identity_enabled",
            kind: "scalar",
            T: 8
        }
    ]);

}
