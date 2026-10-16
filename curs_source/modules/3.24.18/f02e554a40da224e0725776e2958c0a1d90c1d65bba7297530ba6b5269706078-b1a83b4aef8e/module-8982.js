"use strict";
require.r(exports), require.d(exports, {
    OriginService: ()=>Zg
});
var n = require("./module-6038.js"), s = require("./module-8592.js");
class i extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class o extends i {
    constructor(t){
        super(), this.org = "", this.name = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new o).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new o).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new o).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(o, t, e);
    }
    static $() {
        return [
            "ClientRepoIdentifier|1 org 9|2 name 9"
        ];
    }
}
class a extends i {
    constructor(t){
        super(), this.owner = "", this.repo = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new a).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new a).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new a).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(a, t, e);
    }
    static $() {
        return [
            "GithubRepoIdentifier|1 owner 9|2 repo 9|3 enterprise_id 9?"
        ];
    }
}
const u = "origin.v1.";
class c extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return u;
    }
}
var l = (0, s.QT)(n.proto3, u, "ListHostedReposOrderBy", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NAME_ASC"
    ],
    [
        2,
        "NAME_DESC"
    ],
    [
        3,
        "LAST_PUSHED_DESC"
    ],
    [
        4,
        "LAST_PUSHED_ASC"
    ],
    [
        5,
        "ID_ASC"
    ],
    [
        6,
        "ID_DESC"
    ]
], 1), m = (0, s.QT)(n.proto3, u, "RepoKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "STANDARD"
    ],
    [
        2,
        "CURSOR_MARKETPLACE"
    ],
    [
        3,
        "ORIGIN_NATIVE_CURSOR_MARKETPLACE"
    ],
    [
        4,
        "AGENT_TEMP"
    ]
], 1), d = (0, s.QT)(n.proto3, u, "RepoVisibility", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "INTERNAL"
    ],
    [
        2,
        "PRIVATE"
    ],
    [
        3,
        "PUBLIC"
    ]
], 1), f = (0, s.QT)(n.proto3, u, "RepoMirrorTransition", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "INBOUND_TO_OUTBOUND"
    ],
    [
        2,
        "OUTBOUND_TO_INBOUND"
    ],
    [
        3,
        "INITIAL_TO_INBOUND"
    ]
], 1), p = (0, s.QT)(n.proto3, u, "RepoMirrorTransitionJobStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "QUEUED"
    ],
    [
        2,
        "RUNNING"
    ],
    [
        3,
        "SUCCEEDED"
    ],
    [
        4,
        "FAILED_ROLLED_BACK"
    ],
    [
        5,
        "REQUIRES_ATTENTION"
    ],
    [
        6,
        "SUPERSEDED"
    ]
], 1), h = (0, s.QT)(n.proto3, u, "RepoMirrorTransitionJobPhase", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "QUEUED"
    ],
    [
        2,
        "STARTING"
    ],
    [
        3,
        "DRAINING_WRITES"
    ],
    [
        4,
        "FINALIZING_MIRROR_FETCH"
    ],
    [
        5,
        "FINALIZING_MIRROR_PUSH"
    ],
    [
        6,
        "COMMITTING_TARGET_STATUS"
    ],
    [
        7,
        "ROLLING_BACK"
    ],
    [
        8,
        "COMPLETED"
    ],
    [
        9,
        "INITIALIZING_MIRROR_FETCH"
    ],
    [
        10,
        "ENABLING_GITHUB_FENCE"
    ],
    [
        11,
        "VERIFYING_INTEGRITY"
    ],
    [
        12,
        "REOPENING_INBOUND_MIRROR"
    ],
    [
        13,
        "SNAPSHOTTING_REFS"
    ]
], 1), g = (0, s.QT)(n.proto3, u, "MirrorStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "TRANSITIONING_TO_INBOUND"
    ],
    [
        2,
        "INBOUND"
    ],
    [
        3,
        "OUTBOUND"
    ],
    [
        4,
        "TRANSITIONING_INBOUND_TO_OUTBOUND"
    ],
    [
        5,
        "TRANSITIONING_OUTBOUND_TO_INBOUND"
    ],
    [
        6,
        "INITIAL_SYNC_PENDING"
    ]
], 1), A = (0, s.QT)(n.proto3, u, "OriginNamespaceOwnerType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "TEAM"
    ],
    [
        2,
        "USER"
    ]
], 1), _ = (0, s.QT)(n.proto3, u, "AuthorizedNamespaceAccessReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "TEAM_OWNERSHIP"
    ],
    [
        2,
        "USER_OWNERSHIP"
    ],
    [
        3,
        "EXPLICIT_GRANT"
    ],
    [
        4,
        "NAMESPACE_GRANT"
    ],
    [
        5,
        "REPOSITORY_GRANT"
    ]
], 1);
class y extends c {
    constructor(t){
        super(), this.org = "", this.name = "", this.cloneUrl = "", this.defaultBranch = "", this.repoUuid = "", this.mirrorStatus = g.UNSPECIFIED, this.forgeEnvironment = "", this.originNamespaceId = "", this.allowMergeCommit = !1, this.allowSquashMerge = !1, this.visibility = d.UNSPECIFIED, this.repoKind = m.UNSPECIFIED, this.deleteBranchOnMerge = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new y).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new y).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new y).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(y, t, e);
    }
    static $() {
        return [
            "RepoSummary|1 org 9|2 name 9|3 clone_url 9|4 default_branch 9|6 github_node_id 9?|7 github_enterprise_id 9?|8 repo_uuid 9|9 mirror_status #0|10 last_pushed_at #1?|11 forge_environment 9|12 origin_namespace_id 9|13 allow_merge_commit 8|14 allow_squash_merge 8|15 visibility #2|16 github_mirror_info #3?|17 deleted_at #1?|18 repo_kind #4|19 owner_type 9?|20 delete_branch_on_merge 8|21 created_at #1?|22 updated_at #1?|23 github_installation_id 4?",
            g,
            n.Timestamp,
            d,
            Et,
            m
        ];
    }
}
class w extends c {
    constructor(t){
        super(), this.pageSize = 0, this.pageToken = "", this.search = "", this.orderBy = l.UNSPECIFIED, this.namespace = "", this.includeGithubMirrorInfo = !1, this.applyRepositoryPickerPolicy = !1, this.includeExternalCollaboratorRepos = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new w).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new w).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new w).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(w, t, e);
    }
    static $() {
        return [
            "ListHostedReposRequest|1 page_size 13|2 page_token 9|3 search 9|4 order_by #0|5 namespace 9|6 include_github_mirror_info 8|7 apply_repository_picker_policy 8|8 include_external_collaborator_repos 8",
            l
        ];
    }
}
class S extends c {
    constructor(t){
        super(), this.repositories = [], this.nextPageToken = "", this.totalCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new S).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new S).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new S).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(S, t, e);
    }
    static $() {
        return [
            "ListHostedReposResponse|1 repositories #0*|2 next_page_token 9|3 total_count 13",
            y
        ];
    }
}
class J extends c {
    constructor(t){
        super(), this.namespace = "", this.pageSize = 0, this.pageToken = "", this.search = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new J).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new J).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new J).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(J, t, e);
    }
    static $() {
        return [
            "ListReposForAppInstallRequest|1 namespace 9|2 page_size 13|3 page_token 9|4 search 9"
        ];
    }
}
class B extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new B).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new B).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new B).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(B, t, e);
    }
    static $() {
        return [
            "CreateRepoRequest|1 identifier #0|2 default_branch 9?|6 forge_environment 9?|7 repo_kind #1?|8 visibility #2?",
            o,
            m,
            d
        ];
    }
}
class E extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new E).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new E).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new E).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(E, t, e);
    }
    static $() {
        return [
            "CreateRepoResponse|3 repository #0",
            st
        ];
    }
}
class I extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new I).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new I).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new I).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(I, t, e);
    }
    static $() {
        return [
            "PublishAgentTempRepoRequest|1 identifier #0|2 new_name 9?|3 visibility #1?",
            o,
            d
        ];
    }
}
class C extends c {
    constructor(t){
        super(), this.published = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new C).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new C).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new C).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(C, t, e);
    }
    static $() {
        return [
            "PublishAgentTempRepoResponse|1 published 8|2 repository #0",
            st
        ];
    }
}
class b extends c {
    constructor(t){
        super(), this.targetNamespace = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new b).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new b).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new b).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(b, t, e);
    }
    static $() {
        return [
            "CreateMirroredRepoRequest|1 github_source #0|2 target_namespace 9|3 forge_environment 9?|4 repo_kind #1?|6 github_installation_id 3?",
            a,
            m
        ];
    }
}
class k extends c {
    constructor(t){
        super(), this.repos = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new k).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new k).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new k).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(k, t, e);
    }
    static $() {
        return [
            "FilterMirrorableGithubReposRequest|1 repos #0*|2 org_admin_only 8?",
            a
        ];
    }
}
class v extends c {
    constructor(t){
        super(), this.mirrorableRepos = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new v).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new v).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new v).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(v, t, e);
    }
    static $() {
        return [
            "FilterMirrorableGithubReposResponse|1 mirrorable_repos #0*",
            a
        ];
    }
}
class q extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new q).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new q).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new q).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(q, t, e);
    }
    static $() {
        return [
            "DetachRepoMirrorRequest|1 identifier #0",
            o
        ];
    }
}
class R extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new R).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new R).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new R).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(R, t, e);
    }
    static $() {
        return [
            "DetachRepoMirrorResponse"
        ];
    }
}
class P extends c {
    constructor(t){
        super(), this.dryRun = !1, this.allowOverwrite = !1, this.waitForCatchUp = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new P).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new P).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new P).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(P, t, e);
    }
    static $() {
        return [
            "ReattachRepoMirrorRequest|1 identifier #0|2 dry_run 8|3 allow_overwrite 8|4 wait_for_catch_up 8",
            o
        ];
    }
}
class T extends c {
    constructor(t){
        super(), this.inSync = !1, this.totalMismatches = 0, this.localRefCount = 0, this.remoteRefCount = 0, this.divergedRefs = [], this.divergedRefCount = 0, this.sampleComplete = !1, this.sampledMismatchCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new T).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new T).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new T).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(T, t, e);
    }
    static $() {
        return [
            "MirrorRefComparison|1 in_sync 8|2 total_mismatches 5|3 local_ref_count 5|4 remote_ref_count 5|5 diverged_refs 9*|6 diverged_ref_count 5|7 sample_complete 8|8 sampled_mismatch_count 5"
        ];
    }
}
class x extends c {
    constructor(t){
        super(), this.deployKeyPresent = !1, this.catchUpDispatched = !1, this.catchUpCompleted = !1, this.githubStateSkipped = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new x).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new x).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new x).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(x, t, e);
    }
    static $() {
        return [
            "ReattachRepoMirrorResponse|1 repository #0|2 github_state #1|3 deploy_key_present 8|4 catch_up_dispatched 8|5 catch_up_completed 8|6 catch_up_error 9?|7 github_state_skipped 8",
            st,
            T
        ];
    }
}
class N extends c {
    constructor(t){
        super(), this.publicKeyOpenssh = "", this.fingerprintSha256 = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new N).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new N).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new N).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(N, t, e);
    }
    static $() {
        return [
            "RepoMirrorDeployKeyInfo|1 public_key_openssh 9|2 fingerprint_sha256 9|3 created_at #0|4 updated_at #0",
            n.Timestamp
        ];
    }
}
class D extends c {
    constructor(t){
        super(), this.rotate = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new D).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new D).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new D).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(D, t, e);
    }
    static $() {
        return [
            "CreateRepoMirrorDeployKeyRequest|1 identifier #0|2 rotate 8",
            o
        ];
    }
}
class U extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new U).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new U).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new U).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(U, t, e);
    }
    static $() {
        return [
            "CreateRepoMirrorDeployKeyResponse|1 deploy_key #0",
            N
        ];
    }
}
class Q extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Q).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Q).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Q).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Q, t, e);
    }
    static $() {
        return [
            "GetRepoMirrorDeployKeyRequest|1 identifier #0",
            o
        ];
    }
}
class M extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new M).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new M).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new M).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(M, t, e);
    }
    static $() {
        return [
            "GetRepoMirrorDeployKeyResponse|1 deploy_key #0?",
            N
        ];
    }
}
class O extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new O).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new O).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new O).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(O, t, e);
    }
    static $() {
        return [
            "DeleteRepoMirrorDeployKeyRequest|1 identifier #0",
            o
        ];
    }
}
class F extends c {
    constructor(t){
        super(), this.deleted = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new F).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new F).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new F).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(F, t, e);
    }
    static $() {
        return [
            "DeleteRepoMirrorDeployKeyResponse|1 deleted 8"
        ];
    }
}
class L extends c {
    constructor(t){
        super(), this.transition = f.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new L).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new L).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new L).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(L, t, e);
    }
    static $() {
        return [
            "TransitionRepoMirrorStatusRequest|1 identifier #0|2 transition #1",
            o,
            f
        ];
    }
}
class $ extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($, t, e);
    }
    static $() {
        return [
            "TransitionRepoMirrorStatusResponse|1 repository #0|2 active_job_info #1",
            st,
            Z
        ];
    }
}
class G extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new G).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new G).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new G).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(G, t, e);
    }
    static $() {
        return [
            "ForceRepoMirrorCutoverRequest|1 identifier #0",
            o
        ];
    }
}
class H extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new H).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new H).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new H).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(H, t, e);
    }
    static $() {
        return [
            "ForceRepoMirrorCutoverResponse|1 repository #0|2 active_job_info #1",
            st,
            Z
        ];
    }
}
class K extends c {
    constructor(t){
        super(), this.ref = "", this.wait = !1, this.sha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new K).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new K).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new K).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(K, t, e);
    }
    static $() {
        return [
            "SyncMirrorRequest|1 identifier #0|2 ref 9|3 wait 8|4 sha 9",
            o
        ];
    }
}
class V extends c {
    constructor(t){
        super(), this.synced = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new V).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new V).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new V).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(V, t, e);
    }
    static $() {
        return [
            "SyncMirrorResponse|1 synced 8"
        ];
    }
}
class z extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new z).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new z).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new z).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(z, t, e);
    }
    static $() {
        return [
            "GetActiveMirrorTransitionJobRequest|1 identifier #0",
            o
        ];
    }
}
class W extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new W).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new W).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new W).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(W, t, e);
    }
    static $() {
        return [
            "GetActiveMirrorTransitionJobResponse|1 active_job_info #0|2 last_job_info #0",
            Z
        ];
    }
}
class Y extends c {
    constructor(t){
        super(), this.jobId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Y).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Y).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Y).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Y, t, e);
    }
    static $() {
        return [
            "GetMirrorTransitionJobRequest|1 identifier #0|2 job_id 9",
            o
        ];
    }
}
class j extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new j).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new j).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new j).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(j, t, e);
    }
    static $() {
        return [
            "GetMirrorTransitionJobResponse|1 job #0|2 repository #1",
            Z,
            st
        ];
    }
}
class X extends c {
    constructor(t){
        super(), this.subphase = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new X).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new X).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new X).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(X, t, e);
    }
    static $() {
        return [
            "MirrorFetchProgress|1 subphase 9|2 bytes_received 4?|3 heartbeat_at #0?",
            n.Timestamp
        ];
    }
}
class Z extends c {
    constructor(t){
        super(), this.id = "", this.transition = f.UNSPECIFIED, this.mirrorStatus = g.UNSPECIFIED, this.status = p.UNSPECIFIED, this.phase = h.UNSPECIFIED, this.attemptCount = 0, this.createdAt = "", this.updatedAt = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Z).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Z).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Z).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Z, t, e);
    }
    static $() {
        return [
            "RepoMirrorTransitionJob|1 id 9|2 identifier #0|3 transition #1|4 mirror_status #2|5 status #3|6 phase #4|7 attempt_count 13|11 drain_until 9?|12 last_error_code 9?|13 last_error_message 9?|15 started_at 9?|16 completed_at 9?|17 created_at 9|18 updated_at 9|19 fetch_progress #5?",
            o,
            f,
            g,
            p,
            h,
            X
        ];
    }
}
class tt extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tt, t, e);
    }
    static $() {
        return [
            "DeleteRepoClientRequest|1 identifier #0",
            o
        ];
    }
}
class et extends c {
    constructor(t){
        super(), this.repoUuid = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new et).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new et).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new et).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(et, t, e);
    }
    static $() {
        return [
            "DeleteRepoClientResponse|1 repo_uuid 9"
        ];
    }
}
class rt extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rt, t, e);
    }
    static $() {
        return [
            "DeleteMirroredRepoRequest|1 identifier #0",
            o
        ];
    }
}
class nt extends c {
    constructor(t){
        super(), this.repoUuid = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nt, t, e);
    }
    static $() {
        return [
            "DeleteMirroredRepoResponse|1 repo_uuid 9"
        ];
    }
}
class st extends c {
    constructor(t){
        super(), this.defaultBranch = "", this.mirrorStatus = g.UNSPECIFIED, this.repoUuid = "", this.forgeEnvironment = "", this.originNamespaceId = "", this.allowMergeCommit = !1, this.allowSquashMerge = !1, this.visibility = d.UNSPECIFIED, this.deleteBranchOnMerge = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new st).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new st).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new st).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(st, t, e);
    }
    static $() {
        return [
            "Repo|1 identifier #0|2 default_branch 9|4 github_node_id 9?|5 github_enterprise_id 9?|6 mirror_status #1|7 active_mirror_transition_job_id 9?|8 repo_uuid 9|9 github_installation_id 4?|10 created_at #2?|11 updated_at #2?|12 last_pushed_at #2?|13 owner_entity_id 3?|14 owner_type 9?|15 forge_environment 9|16 origin_namespace_id 9|17 allow_merge_commit 8|18 allow_squash_merge 8|19 visibility #3|20 delete_branch_on_merge 8|21 deleted_at #2?",
            o,
            g,
            n.Timestamp,
            d
        ];
    }
}
class it extends c {
    constructor(t){
        super(), this.allowMergeCommit = !1, this.allowSquashMerge = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new it).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new it).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new it).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(it, t, e);
    }
    static $() {
        return [
            "UpdateRepoMergeSettingsRequest|1 identifier #0|2 allow_merge_commit 8|3 allow_squash_merge 8",
            o
        ];
    }
}
class ot extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ot).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ot).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ot).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ot, t, e);
    }
    static $() {
        return [
            "UpdateRepoMergeSettingsResponse|1 repository #0",
            st
        ];
    }
}
class at extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new at).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new at).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new at).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(at, t, e);
    }
    static $() {
        return [
            "UpdateRepoBranchDeletionSettingRequest|1 identifier #0|2 delete_branch_on_merge 8?",
            o
        ];
    }
}
class ut extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ut).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ut).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ut).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ut, t, e);
    }
    static $() {
        return [
            "UpdateRepoBranchDeletionSettingResponse|1 repository #0",
            st
        ];
    }
}
class ct extends c {
    constructor(t){
        super(), this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ct).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ct).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ct).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ct, t, e);
    }
    static $() {
        return [
            "ListRepoCloneKitsRequest|1 identifier #0|2 page_size 13|3 page_token 9",
            o
        ];
    }
}
class lt extends c {
    constructor(t){
        super(), this.kits = [], this.nextPageToken = "", this.cloneKitEnabled = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lt, t, e);
    }
    static $() {
        return [
            "ListRepoCloneKitsResponse|1 kits #0*|2 next_page_token 9|3 clone_kit_enabled 8",
            mt
        ];
    }
}
class mt extends c {
    constructor(t){
        super(), this.packHash = "", this.tipCommit = "", this.packSizeBytes = n.protoInt64.zero, this.idxSizeBytes = n.protoInt64.zero, this.revSizeBytes = n.protoInt64.zero, this.kitVersion = "", this.isCurrent = !1, this.packSha256 = "", this.idxSha256 = "", this.revSha256 = "", this.chunksSha256 = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mt, t, e);
    }
    static $() {
        return [
            "RepoCloneKitGeneration|1 pack_hash 9|2 tip_commit 9|3 pack_size_bytes 3|4 idx_size_bytes 3|5 rev_size_bytes 3|6 last_published_at #0|7 kit_version 9|8 is_current 8|9 pack_sha256 9|10 idx_sha256 9|11 rev_sha256 9|12 chunks_sha256 9",
            n.Timestamp
        ];
    }
}
class dt extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dt, t, e);
    }
    static $() {
        return [
            "UpdateRepoVisibilityRequest|1 identifier #0|2 visibility #1?",
            o,
            d
        ];
    }
}
class ft extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ft).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ft).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ft).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ft, t, e);
    }
    static $() {
        return [
            "UpdateRepoVisibilityResponse|1 repository #0",
            st
        ];
    }
}
class pt extends c {
    constructor(t){
        super(), this.defaultBranch = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pt, t, e);
    }
    static $() {
        return [
            "UpdateRepoDefaultBranchRequest|1 identifier #0|2 default_branch 9",
            o
        ];
    }
}
class ht extends c {
    constructor(t){
        super(), this.defaultBranch = "", this.changed = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ht).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ht).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ht).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ht, t, e);
    }
    static $() {
        return [
            "UpdateRepoDefaultBranchResponse|1 default_branch 9|2 changed 8|3 repository #0",
            st
        ];
    }
}
class gt extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gt, t, e);
    }
    static $() {
        return [
            "GetRepoRequest|1 identifier #0|2 include_authenticated_viewer 8?|3 include_merge_queues 8?",
            o
        ];
    }
}
class At extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new At).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new At).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new At).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(At, t, e);
    }
    static $() {
        return [
            "AuthenticatedOriginViewer|1 identity #0|2 profile #1|3 gate #2|4 policy #3",
            yt,
            wt,
            St,
            Jt
        ];
    }
}
var _t = (0, s.QT)(n.proto3, u, "AuthenticatedOriginViewer.OriginDisabledState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NOT_DISABLED"
    ],
    [
        2,
        "DISABLED"
    ],
    [
        3,
        "UNAVAILABLE"
    ]
], 1);
class yt extends c {
    constructor(t){
        super(), this.authId = "", this.publicUserId = "", this.originAuthorIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yt, t, e);
    }
    static $() {
        return [
            "AuthenticatedOriginViewer.Identity|1 auth_id 9|2 public_user_id 9|3 origin_author_ids 9*"
        ];
    }
}
class wt extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wt, t, e);
    }
    static $() {
        return [
            "AuthenticatedOriginViewer.Profile|1 email 9?|2 first_name 9?|3 last_name 9?|4 avatar_url 9?"
        ];
    }
}
class St extends c {
    constructor(t){
        super(), this.isEnterpriseUser = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new St).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new St).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new St).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(St, t, e);
    }
    static $() {
        return [
            "AuthenticatedOriginViewer.GateAttributes|1 team_id 5?|2 created_at_iso 9?|3 is_enterprise_user 8|4 email_domain_type 9?|5 country 9?|6 organization_id 3?|7 organization_public_id 9?|8 is_team_admin 8?"
        ];
    }
}
class Jt extends c {
    constructor(t){
        super(), this.originDisabled = _t.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jt, t, e);
    }
    static $() {
        return [
            "AuthenticatedOriginViewer.ReviewPolicy|1 origin_disabled #0",
            _t
        ];
    }
}
class Bt extends c {
    constructor(t){
        super(), this.mergeQueueTargetRefs = [], this.mergeQueueAvailable = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bt, t, e);
    }
    static $() {
        return [
            "GetRepoResponse|1 repository #0|2 github_mirror_info #1?|3 merge_queue_target_refs 9*|4 merge_queue_available 8",
            st,
            Et
        ];
    }
}
class Et extends c {
    constructor(t){
        super(), this.githubOwner = "", this.githubRepo = "", this.githubRepoUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Et).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Et).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Et).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Et, t, e);
    }
    static $() {
        return [
            "RepoGithubMirrorInfo|1 github_owner 9|2 github_repo 9|3 github_repo_url 9"
        ];
    }
}
class It extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new It).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new It).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new It).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(It, t, e);
    }
    static $() {
        return [
            "GetRepoWithMirrorInfoResponse|1 repository #0|2 github_mirror_info #1|3 viewer_can_write_changes 8?|4 authenticated_viewer #2?",
            st,
            Et,
            At
        ];
    }
}
class Ct extends c {
    constructor(t){
        super(), this.githubNodeId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ct).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ct).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ct).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ct, t, e);
    }
    static $() {
        return [
            "GetRepoByGithubMirrorRequest|1 github_node_id 9|2 github_enterprise_id 9?"
        ];
    }
}
class bt extends c {
    constructor(t){
        super(), this.manifestMs = 0, this.downloadMs = 0, this.verifyMs = 0, this.fetchMs = 0, this.checkoutMs = 0, this.totalMs = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bt, t, e);
    }
    static $() {
        return [
            "CloneKitTimingsMs|1 manifest_ms 5|2 download_ms 5|3 verify_ms 5|4 fetch_ms 5|5 checkout_ms 5|6 total_ms 5"
        ];
    }
}
class kt extends c {
    constructor(t){
        super(), this.invocationId = "", this.artifactBytes = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new kt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new kt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new kt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(kt, t, e);
    }
    static $() {
        return [
            "RecordCloneKitUsageRequest|1 invocation_id 9|2 identifier #0|3 artifact_bytes 3|4 timings #1?",
            o,
            bt
        ];
    }
}
class vt extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vt, t, e);
    }
    static $() {
        return [
            "RecordCloneKitUsageResponse"
        ];
    }
}
class qt extends c {
    constructor(t){
        super(), this.id = "", this.ownerType = A.UNSPECIFIED, this.ownerEntityId = n.protoInt64.zero, this.namespace = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qt, t, e);
    }
    static $() {
        return [
            "OriginNamespace|1 id 9|2 owner_type #0|3 owner_entity_id 3|4 namespace 9",
            A
        ];
    }
}
class Rt extends c {
    constructor(t){
        super(), this.ownerType = A.UNSPECIFIED, this.ownerEntityId = n.protoInt64.zero, this.namespace = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rt, t, e);
    }
    static $() {
        return [
            "CreateOriginNamespaceRequest|1 owner_type #0|2 owner_entity_id 3|3 namespace 9",
            A
        ];
    }
}
class Pt extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pt, t, e);
    }
    static $() {
        return [
            "CreateOriginNamespaceResponse|1 origin_namespace #0",
            qt
        ];
    }
}
class Tt extends c {
    constructor(t){
        super(), this.ownerType = A.UNSPECIFIED, this.ownerEntityId = n.protoInt64.zero, this.namespace = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tt, t, e);
    }
    static $() {
        return [
            "SetupTeamNamespaceRequest|1 owner_type #0|2 owner_entity_id 3|3 namespace 9",
            A
        ];
    }
}
class xt extends c {
    constructor(t){
        super(), this.namespaceCreated = !1, this.grantsChanged = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xt, t, e);
    }
    static $() {
        return [
            "SetupTeamNamespaceResponse|1 origin_namespace #0|2 namespace_created 8|3 grants_changed 8",
            qt
        ];
    }
}
class Nt extends c {
    constructor(t){
        super(), this.namespace = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nt, t, e);
    }
    static $() {
        return [
            "SetupUserNamespaceRequest|1 namespace 9"
        ];
    }
}
class Dt extends c {
    constructor(t){
        super(), this.preferredSlug = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dt, t, e);
    }
    static $() {
        return [
            "SuggestOriginNamespaceRequest|1 preferred_slug 9"
        ];
    }
}
class Ut extends c {
    constructor(t){
        super(), this.available = !1, this.normalizedSlug = "", this.suggestedSlug = "", this.message = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ut).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ut).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ut).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ut, t, e);
    }
    static $() {
        return [
            "SuggestOriginNamespaceResponse|1 available 8|2 normalized_slug 9|3 suggested_slug 9|4 message 9"
        ];
    }
}
class Qt extends c {
    constructor(t){
        super(), this.namespaceCreated = !1, this.grantsChanged = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qt, t, e);
    }
    static $() {
        return [
            "SetupUserNamespaceResponse|1 origin_namespace #0|2 namespace_created 8|3 grants_changed 8",
            qt
        ];
    }
}
class Mt extends c {
    constructor(t){
        super(), this.ownerType = A.UNSPECIFIED, this.ownerEntityId = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mt, t, e);
    }
    static $() {
        return [
            "GetRepoNamespaceRequest|1 owner_type #0|2 owner_entity_id 3",
            A
        ];
    }
}
class Ot extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ot).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ot).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ot).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ot, t, e);
    }
    static $() {
        return [
            "GetRepoNamespaceResponse|1 origin_namespace #0",
            qt
        ];
    }
}
class Ft extends c {
    constructor(t){
        super(), this.teamId = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ft).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ft).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ft).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ft, t, e);
    }
    static $() {
        return [
            "DoesNamespaceExistForTeamRequest|1 team_id 3"
        ];
    }
}
class Lt extends c {
    constructor(t){
        super(), this.exists = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Lt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Lt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Lt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Lt, t, e);
    }
    static $() {
        return [
            "DoesNamespaceExistForTeamResponse|1 exists 8"
        ];
    }
}
class $t extends c {
    constructor(t){
        super(), this.includeExplicitGrantNamespaces = !1, this.includeAllTeams = !1, this.includeGrantedNamespaces = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $t).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $t).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $t).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($t, t, e);
    }
    static $() {
        return [
            "GetAuthorizedNamespacesRequest|1 include_explicit_grant_namespaces 8|2 include_all_teams 8|3 include_granted_namespaces 8"
        ];
    }
}
class Gt extends c {
    constructor(t){
        super(), this.namespaces = [], this.originDisabledForTeam = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gt, t, e);
    }
    static $() {
        return [
            "GetAuthorizedNamespacesResponse|1 namespaces #0*|2 origin_disabled_for_team 8",
            Ht
        ];
    }
}
class Ht extends c {
    constructor(t){
        super(), this.accessReason = _.UNSPECIFIED, this.originAllowPublicRepos = !1, this.appWorkloadIdentityEnabled = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ht).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ht).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ht).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ht, t, e);
    }
    static $() {
        return [
            "AuthorizedNamespace|1 namespace #0|2 access_reason #1|3 origin_allow_public_repos 8|4 app_workload_identity_enabled 8",
            qt,
            _
        ];
    }
}
const Kt = "origin.v1.";
class Vt extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return Kt;
    }
}
var zt = (0, s.QT)(n.proto3, Kt, "AuthPolicyAppliesTo", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "REPOSITORY"
    ],
    [
        2,
        "NAMESPACE"
    ],
    [
        4,
        "APP"
    ]
], 1), Wt = (0, s.QT)(n.proto3, Kt, "GroupScope", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ORG"
    ],
    [
        2,
        "TEAM"
    ]
], 1), Yt = (0, s.QT)(n.proto3, Kt, "TeamGroupKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ADMINS"
    ],
    [
        2,
        "MEMBERS"
    ]
], 1);
class jt extends Vt {
    constructor(t){
        super(), this.resourceKind = "", this.action = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new jt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new jt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new jt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(jt, t, e);
    }
    static $() {
        return [
            "AuthPolicyStatement|1 resource_kind 9|2 action 9"
        ];
    }
}
class Xt extends Vt {
    constructor(t){
        super(), this.scope = "", this.resource = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xt, t, e);
    }
    static $() {
        return [
            "HasOriginPermissionRequest|1 scope 9|2 namespace_slug 9 resource|3 repository #0 resource|4 app_id 9 resource",
            o
        ];
    }
}
class Zt extends Vt {
    constructor(t){
        super(), this.allowed = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zt, t, e);
    }
    static $() {
        return [
            "HasOriginPermissionResponse|1 allowed 8"
        ];
    }
}
class te extends Vt {
    constructor(t){
        super(), this.name = "", this.displayName = "", this.description = "", this.appliesTo = zt.UNSPECIFIED, this.isOriginManaged = !1, this.isCustom = !1, this.statements = [], this.userFacingScopeCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new te).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new te).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new te).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(te, t, e);
    }
    static $() {
        return [
            "AuthPolicySummary|1 name 9|2 display_name 9|3 description 9|4 applies_to #0|5 is_origin_managed 8|6 is_custom 8|7 statements #1*|8 user_facing_scope_count 5",
            zt,
            jt
        ];
    }
}
class ee extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ee).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ee).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ee).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ee, t, e);
    }
    static $() {
        return [
            "ListRepoAssignablePoliciesRequest|1 identifier #0",
            o
        ];
    }
}
class re extends Vt {
    constructor(t){
        super(), this.policies = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new re).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new re).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new re).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(re, t, e);
    }
    static $() {
        return [
            "ListRepoAssignablePoliciesResponse|1 policies #0*",
            te
        ];
    }
}
class ne extends Vt {
    constructor(t){
        super(), this.name = "", this.displayName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ne).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ne).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ne).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ne, t, e);
    }
    static $() {
        return [
            "GrantPolicyRef|1 name 9|2 display_name 9"
        ];
    }
}
class se extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new se).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new se).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new se).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(se, t, e);
    }
    static $() {
        return [
            "TeamGroupAccess|1 namespace_policy #0|2 repo_policy #0|3 effective_policy #0",
            ne
        ];
    }
}
class ie extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ie).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ie).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ie).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ie, t, e);
    }
    static $() {
        return [
            "GetRepoTeamAccessRequest|1 identifier #0",
            o
        ];
    }
}
class oe extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new oe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new oe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new oe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(oe, t, e);
    }
    static $() {
        return [
            "GetRepoTeamAccessResponse|1 namespace #0|2 team_admins #1|3 team_members #1",
            qt,
            se
        ];
    }
}
class ae extends Vt {
    constructor(t){
        super(), this.kind = "", this.externalId = "", this.displayName = "", this.email = "", this.groupAdminCount = 0, this.groupMemberCount = 0, this.groupScope = Wt.UNSPECIFIED, this.isIdpSynced = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ae).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ae).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ae).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ae, t, e);
    }
    static $() {
        return [
            "GrantPrincipal|1 kind 9|2 external_id 9|3 display_name 9|4 email 9|5 group_admin_count 5|6 group_member_count 5|7 group_scope #0|8 is_idp_synced 8",
            Wt
        ];
    }
}
class ue extends Vt {
    constructor(t){
        super(), this.isNamespaceOwned = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ue).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ue).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ue).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ue, t, e);
    }
    static $() {
        return [
            "RepoGrantRow|1 principal #0|2 namespace_policy #1|3 repo_policy #1|4 effective_policy #1|5 is_namespace_owned 8",
            ae,
            ne
        ];
    }
}
class ce extends Vt {
    constructor(t){
        super(), this.page = 0, this.pageSize = 0, this.search = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ce).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ce).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ce).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ce, t, e);
    }
    static $() {
        return [
            "ListRepoGrantsRequest|1 identifier #0|2 page 5|3 page_size 5|4 search 9",
            o
        ];
    }
}
class le extends Vt {
    constructor(t){
        super(), this.rows = [], this.totalCount = 0, this.listTruncated = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new le).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new le).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new le).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(le, t, e);
    }
    static $() {
        return [
            "ListRepoGrantsResponse|1 rows #0*|2 total_count 5|3 list_truncated 8",
            ue
        ];
    }
}
class me extends Vt {
    constructor(t){
        super(), this.group = Yt.UNSPECIFIED, this.policyUpdate = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new me).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new me).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new me).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(me, t, e);
    }
    static $() {
        return [
            "SetRepoTeamAccessRequest|1 identifier #0|2 group #1|3 policy_name 9 policy_update|4 clear_override 8 policy_update",
            o,
            Yt
        ];
    }
}
class de extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new de).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new de).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new de).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(de, t, e);
    }
    static $() {
        return [
            "SetRepoTeamAccessResponse|1 namespace #0|2 team_admins #1|3 team_members #1",
            qt,
            se
        ];
    }
}
class fe extends Vt {
    constructor(t){
        super(), this.userId = "", this.policyUpdate = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fe, t, e);
    }
    static $() {
        return [
            "SetRepoUserAccessRequest|1 identifier #0|2 user_id 9|3 policy_name 9 policy_update|4 clear_access 8 policy_update",
            o
        ];
    }
}
class pe extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pe, t, e);
    }
    static $() {
        return [
            "SetRepoUserAccessResponse"
        ];
    }
}
class he extends Vt {
    constructor(t){
        super(), this.groupId = "", this.policyUpdate = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new he).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new he).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new he).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(he, t, e);
    }
    static $() {
        return [
            "SetRepoGroupAccessRequest|1 identifier #0|2 group_id 9|3 policy_name 9 policy_update|4 clear_access 8 policy_update",
            o
        ];
    }
}
class ge extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ge).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ge).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ge).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ge, t, e);
    }
    static $() {
        return [
            "SetRepoGroupAccessResponse"
        ];
    }
}
class Ae extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ae).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ae).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ae).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ae, t, e);
    }
    static $() {
        return [
            "NamespaceTeamGroupAccess|1 policy #0",
            ne
        ];
    }
}
class _e extends Vt {
    constructor(t){
        super(), this.namespaceSlug = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _e).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _e).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _e).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_e, t, e);
    }
    static $() {
        return [
            "GetNamespaceTeamAccessRequest|1 namespace_slug 9"
        ];
    }
}
class ye extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ye).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ye).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ye).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ye, t, e);
    }
    static $() {
        return [
            "GetNamespaceTeamAccessResponse|1 namespace #0|2 team_admins #1|3 team_members #1",
            qt,
            Ae
        ];
    }
}
class we extends Vt {
    constructor(t){
        super(), this.namespaceSlug = "", this.group = Yt.UNSPECIFIED, this.policyUpdate = {
            case: void 0
        }, this.retainSelfAdmin = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new we).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new we).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new we).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(we, t, e);
    }
    static $() {
        return [
            "SetNamespaceTeamAccessRequest|1 namespace_slug 9|2 group #0|3 policy_name 9 policy_update|4 clear_access 8 policy_update|5 retain_self_admin 8",
            Yt
        ];
    }
}
class Se extends Vt {
    constructor(t){
        super(), this.selfAdminGranted = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Se).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Se).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Se).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Se, t, e);
    }
    static $() {
        return [
            "SetNamespaceTeamAccessResponse|1 namespace #0|2 team_admins #1|3 team_members #1|4 self_admin_granted 8",
            qt,
            Ae
        ];
    }
}
class Je extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Je).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Je).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Je).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Je, t, e);
    }
    static $() {
        return [
            "NamespaceGrantRow|1 principal #0|2 policy #1",
            ae,
            ne
        ];
    }
}
class Be extends Vt {
    constructor(t){
        super(), this.namespaceSlug = "", this.page = 0, this.pageSize = 0, this.search = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Be).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Be).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Be).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Be, t, e);
    }
    static $() {
        return [
            "ListNamespaceGrantsRequest|1 namespace_slug 9|2 page 5|3 page_size 5|4 search 9"
        ];
    }
}
class Ee extends Vt {
    constructor(t){
        super(), this.rows = [], this.totalCount = 0, this.listTruncated = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ee).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ee).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ee).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ee, t, e);
    }
    static $() {
        return [
            "ListNamespaceGrantsResponse|1 rows #0*|2 total_count 5|3 list_truncated 8",
            Je
        ];
    }
}
class Ie extends Vt {
    constructor(t){
        super(), this.namespaceSlug = "", this.userIds = [], this.policyUpdate = {
            case: void 0
        }, this.retainSelfAdmin = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ie).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ie).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ie).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ie, t, e);
    }
    static $() {
        return [
            "SetNamespaceUserAccessRequest|1 namespace_slug 9|2 user_ids 9*|3 policy_name 9 policy_update|4 clear_access 8 policy_update|5 retain_self_admin 8"
        ];
    }
}
class Ce extends Vt {
    constructor(t){
        super(), this.selfAdminGranted = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ce).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ce).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ce).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ce, t, e);
    }
    static $() {
        return [
            "SetNamespaceUserAccessResponse|1 namespace #0|2 self_admin_granted 8",
            qt
        ];
    }
}
class be extends Vt {
    constructor(t){
        super(), this.namespaceSlug = "", this.groupIds = [], this.policyUpdate = {
            case: void 0
        }, this.retainSelfAdmin = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new be).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new be).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new be).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(be, t, e);
    }
    static $() {
        return [
            "SetNamespaceGroupAccessRequest|1 namespace_slug 9|2 group_ids 9*|3 policy_name 9 policy_update|4 clear_access 8 policy_update|5 retain_self_admin 8"
        ];
    }
}
class ke extends Vt {
    constructor(t){
        super(), this.selfAdminGranted = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ke).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ke).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ke).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ke, t, e);
    }
    static $() {
        return [
            "SetNamespaceGroupAccessResponse|1 namespace #0|2 self_admin_granted 8",
            qt
        ];
    }
}
class ve extends Vt {
    constructor(t){
        super(), this.namespaceSlug = "", this.groupId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ve).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ve).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ve).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ve, t, e);
    }
    static $() {
        return [
            "ListGroupGrantsInNamespaceRequest|1 namespace_slug 9|2 group_id 9"
        ];
    }
}
class qe extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qe, t, e);
    }
    static $() {
        return [
            "GroupRepoGrant|1 repository #0|2 namespace_policy #1|3 repo_policy #1|4 effective_policy #1",
            o,
            ne
        ];
    }
}
class Re extends Vt {
    constructor(t){
        super(), this.repoGrants = [], this.listTruncated = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Re).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Re).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Re).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Re, t, e);
    }
    static $() {
        return [
            "ListGroupGrantsInNamespaceResponse|1 principal #0|2 namespace_policy #1|3 repo_grants #2*|4 list_truncated 8",
            ae,
            ne,
            qe
        ];
    }
}
class Pe extends Vt {
    constructor(t){
        super(), this.namespaceSlug = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pe, t, e);
    }
    static $() {
        return [
            "ListNamespaceAssignablePoliciesRequest|1 namespace_slug 9"
        ];
    }
}
class Te extends Vt {
    constructor(t){
        super(), this.policies = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Te).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Te).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Te).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Te, t, e);
    }
    static $() {
        return [
            "ListNamespaceAssignablePoliciesResponse|1 policies #0*",
            te
        ];
    }
}
class xe extends Vt {
    constructor(t){
        super(), this.id = "", this.inviteeEmail = "", this.policyName = "", this.invitedByPrincipalKind = "", this.invitedByPrincipalId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xe, t, e);
    }
    static $() {
        return [
            "RepoShareInvite|1 id 9|2 invitee_email 9|3 policy_name 9|4 expires_at #0|5 accepted_at #0|6 declined_at #0|7 revoked_at #0|8 created_at #0|9 invited_by_principal_kind 9|10 invited_by_principal_id 9",
            n.Timestamp
        ];
    }
}
class Ne extends Vt {
    constructor(t){
        super(), this.inviteeEmail = "", this.policyName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ne).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ne).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ne).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ne, t, e);
    }
    static $() {
        return [
            "CreateRepoShareInviteRequest|1 identifier #0|2 invitee_email 9|3 policy_name 9",
            o
        ];
    }
}
class De extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new De).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new De).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new De).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(De, t, e);
    }
    static $() {
        return [
            "CreateRepoShareInviteResponse|1 invite #0",
            xe
        ];
    }
}
class Ue extends Vt {
    constructor(t){
        super(), this.inviteeEmails = [], this.policyName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ue).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ue).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ue).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ue, t, e);
    }
    static $() {
        return [
            "CreateRepoShareBatchInvitesRequest|1 identifier #0|2 invitee_emails 9*|3 policy_name 9",
            o
        ];
    }
}
class Qe extends Vt {
    constructor(t){
        super(), this.message = "", this.code = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qe, t, e);
    }
    static $() {
        return [
            "RepoShareInviteAttemptError|1 message 9|2 code 5"
        ];
    }
}
class Me extends Vt {
    constructor(t){
        super(), this.inviteeEmail = "", this.outcome = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Me).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Me).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Me).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Me, t, e);
    }
    static $() {
        return [
            "RepoShareInviteAttempt|1 invitee_email 9|2 invite #0 outcome|3 error #1 outcome",
            xe,
            Qe
        ];
    }
}
class Oe extends Vt {
    constructor(t){
        super(), this.attempts = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Oe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Oe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Oe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Oe, t, e);
    }
    static $() {
        return [
            "CreateRepoShareBatchInvitesResponse|1 attempts #0*",
            Me
        ];
    }
}
class Fe extends Vt {
    constructor(t){
        super(), this.inviteId = "", this.rotateToken = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fe, t, e);
    }
    static $() {
        return [
            "UpdateRepoShareInviteRequest|1 identifier #0|2 invite_id 9|3 policy_name 9?|4 rotate_token 8",
            o
        ];
    }
}
class Le extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Le).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Le).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Le).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Le, t, e);
    }
    static $() {
        return [
            "UpdateRepoShareInviteResponse|1 invite #0",
            xe
        ];
    }
}
class $e extends Vt {
    constructor(t){
        super(), this.inviteId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $e).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $e).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $e).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($e, t, e);
    }
    static $() {
        return [
            "RevokeRepoShareInviteRequest|1 identifier #0|2 invite_id 9",
            o
        ];
    }
}
class Ge extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ge).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ge).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ge).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ge, t, e);
    }
    static $() {
        return [
            "RevokeRepoShareInviteResponse|1 invite #0",
            xe
        ];
    }
}
class He extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new He).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new He).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new He).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(He, t, e);
    }
    static $() {
        return [
            "ListRepoShareInvitesRequest|1 identifier #0",
            o
        ];
    }
}
class Ke extends Vt {
    constructor(t){
        super(), this.invites = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ke).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ke).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ke).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ke, t, e);
    }
    static $() {
        return [
            "ListRepoShareInvitesResponse|1 invites #0*",
            xe
        ];
    }
}
class Ve extends Vt {
    constructor(t){
        super(), this.inviteeEmail = "", this.inviterDisplayName = "", this.policyName = "", this.inviteId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ve).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ve).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ve).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ve, t, e);
    }
    static $() {
        return [
            "RepoShareInviteDetails|1 invitee_email 9|2 repository #0|3 inviter_display_name 9|4 policy_name 9|5 expires_at #1|6 invite_id 9",
            o,
            n.Timestamp
        ];
    }
}
class ze extends Vt {
    constructor(t){
        super(), this.token = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ze).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ze).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ze).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ze, t, e);
    }
    static $() {
        return [
            "GetShareInviteByTokenRequest|1 token 9"
        ];
    }
}
class We extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new We).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new We).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new We).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(We, t, e);
    }
    static $() {
        return [
            "GetShareInviteByTokenResponse|1 invite #0",
            Ve
        ];
    }
}
class Ye extends Vt {
    constructor(t){
        super(), this.locator = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ye).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ye).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ye).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ye, t, e);
    }
    static $() {
        return [
            "DeclineShareInviteRequest|1 token 9 locator|2 invite_id 9 locator"
        ];
    }
}
class je extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new je).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new je).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new je).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(je, t, e);
    }
    static $() {
        return [
            "DeclineShareInviteResponse"
        ];
    }
}
class Xe extends Vt {
    constructor(t){
        super(), this.locator = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xe, t, e);
    }
    static $() {
        return [
            "AcceptShareInviteRequest|1 token 9 locator|2 invite_id 9 locator"
        ];
    }
}
class Ze extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ze).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ze).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ze).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ze, t, e);
    }
    static $() {
        return [
            "AcceptShareInviteResponse|1 repository #0",
            o
        ];
    }
}
class tr extends Vt {
    constructor(t){
        super(), this.inviteId = "", this.inviterDisplayName = "", this.policyName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tr, t, e);
    }
    static $() {
        return [
            "MyShareInvite|1 invite_id 9|2 repository #0|3 inviter_display_name 9|4 policy_name 9|5 expires_at #1|6 created_at #1",
            o,
            n.Timestamp
        ];
    }
}
class er extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new er).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new er).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new er).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(er, t, e);
    }
    static $() {
        return [
            "ListMyShareInvitesRequest"
        ];
    }
}
class rr extends Vt {
    constructor(t){
        super(), this.invites = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rr, t, e);
    }
    static $() {
        return [
            "ListMyShareInvitesResponse|1 invites #0*",
            tr
        ];
    }
}
class nr extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nr, t, e);
    }
    static $() {
        return [
            "MyExternalRepository|1 repository #0|2 policy #1|3 added_at #2",
            o,
            ne,
            n.Timestamp
        ];
    }
}
class sr extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sr, t, e);
    }
    static $() {
        return [
            "ListMyExternalRepositoriesRequest"
        ];
    }
}
class ir extends Vt {
    constructor(t){
        super(), this.repositories = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ir).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ir).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ir).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ir, t, e);
    }
    static $() {
        return [
            "ListMyExternalRepositoriesResponse|1 repositories #0*",
            nr
        ];
    }
}
class or extends Vt {
    constructor(t){
        super(), this.userId = "", this.displayName = "", this.email = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new or).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new or).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new or).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(or, t, e);
    }
    static $() {
        return [
            "RepoExternalCollaboratorRow|1 user_id 9|2 display_name 9|3 email 9|4 policy #0|5 added_at #1",
            ne,
            n.Timestamp
        ];
    }
}
class ar extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ar).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ar).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ar).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ar, t, e);
    }
    static $() {
        return [
            "ListRepoExternalCollaboratorsRequest|1 identifier #0",
            o
        ];
    }
}
class ur extends Vt {
    constructor(t){
        super(), this.rows = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ur).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ur).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ur).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ur, t, e);
    }
    static $() {
        return [
            "ListRepoExternalCollaboratorsResponse|1 rows #0*",
            or
        ];
    }
}
class cr extends Vt {
    constructor(t){
        super(), this.userId = "", this.policyUpdate = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cr, t, e);
    }
    static $() {
        return [
            "SetRepoExternalCollaboratorAccessRequest|1 identifier #0|2 user_id 9|3 policy #1 policy_update|4 remove 8 policy_update",
            o,
            ne
        ];
    }
}
class lr extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lr, t, e);
    }
    static $() {
        return [
            "SetRepoExternalCollaboratorAccessResponse"
        ];
    }
}
class mr extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mr, t, e);
    }
    static $() {
        return [
            "LeaveMyExternalRepositoryRequest|1 identifier #0",
            o
        ];
    }
}
class dr extends Vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dr, t, e);
    }
    static $() {
        return [
            "LeaveMyExternalRepositoryResponse"
        ];
    }
}
class fr extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class pr extends fr {
    constructor(t){
        super(), this.id = "", this.name = "", this.algo = "", this.fingerprint = "", this.publicKey = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pr, t, e);
    }
    static $() {
        return [
            "NamespaceSshCertificateAuthority|1 id 9|2 name 9|3 algo 9|4 fingerprint 9|5 public_key 9|6 created_at #0",
            n.Timestamp
        ];
    }
}
class hr extends fr {
    constructor(t){
        super(), this.namespaceSlug = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hr, t, e);
    }
    static $() {
        return [
            "GetNamespaceSshCertificateAuthoritiesRequest|1 namespace_slug 9"
        ];
    }
}
class gr extends fr {
    constructor(t){
        super(), this.certificateAuthorities = [], this.requireCertificates = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gr, t, e);
    }
    static $() {
        return [
            "GetNamespaceSshCertificateAuthoritiesResponse|1 certificate_authorities #0*|2 require_certificates 8",
            pr
        ];
    }
}
class Ar extends fr {
    constructor(t){
        super(), this.namespaceSlug = "", this.publicKey = "", this.name = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ar).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ar).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ar).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ar, t, e);
    }
    static $() {
        return [
            "AddNamespaceSshCertificateAuthorityRequest|1 namespace_slug 9|2 public_key 9|3 name 9"
        ];
    }
}
class _r extends fr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _r).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _r).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _r).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_r, t, e);
    }
    static $() {
        return [
            "AddNamespaceSshCertificateAuthorityResponse|1 certificate_authority #0",
            pr
        ];
    }
}
class yr extends fr {
    constructor(t){
        super(), this.namespaceSlug = "", this.id = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yr, t, e);
    }
    static $() {
        return [
            "RemoveNamespaceSshCertificateAuthorityRequest|1 namespace_slug 9|2 id 9"
        ];
    }
}
class wr extends fr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wr, t, e);
    }
    static $() {
        return [
            "RemoveNamespaceSshCertificateAuthorityResponse"
        ];
    }
}
class Sr extends fr {
    constructor(t){
        super(), this.namespaceSlug = "", this.requireCertificates = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sr, t, e);
    }
    static $() {
        return [
            "SetNamespaceSshRequireCertificatesRequest|1 namespace_slug 9|2 require_certificates 8"
        ];
    }
}
class Jr extends fr {
    constructor(t){
        super(), this.requireCertificates = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jr, t, e);
    }
    static $() {
        return [
            "SetNamespaceSshRequireCertificatesResponse|1 require_certificates 8"
        ];
    }
}
class Br extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class Er extends Br {
    constructor(t){
        super(), this.cidr = "", this.description = "", this.id = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Er).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Er).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Er).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Er, t, e);
    }
    static $() {
        return [
            "NamespaceInboundIpAllowlistEntry|1 cidr 9|2 description 9|3 enabled 8?|4 created_at #0|5 id 9",
            n.Timestamp
        ];
    }
}
class Ir extends Br {
    constructor(t){
        super(), this.namespaceSlug = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ir).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ir).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ir).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ir, t, e);
    }
    static $() {
        return [
            "GetNamespaceInboundIpAllowlistRequest|1 namespace_slug 9"
        ];
    }
}
class Cr extends Br {
    constructor(t){
        super(), this.enabled = !1, this.entries = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cr, t, e);
    }
    static $() {
        return [
            "GetNamespaceInboundIpAllowlistResponse|1 enabled 8|2 entries #0*",
            Er
        ];
    }
}
class br extends Br {
    constructor(t){
        super(), this.namespaceSlug = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new br).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new br).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new br).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(br, t, e);
    }
    static $() {
        return [
            "AddNamespaceInboundIpAllowlistEntryRequest|1 namespace_slug 9|2 entry #0",
            Er
        ];
    }
}
class kr extends Br {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new kr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new kr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new kr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(kr, t, e);
    }
    static $() {
        return [
            "AddNamespaceInboundIpAllowlistEntryResponse|1 entry #0",
            Er
        ];
    }
}
class vr extends Br {
    constructor(t){
        super(), this.namespaceSlug = "", this.cidr = "", this.entryId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vr, t, e);
    }
    static $() {
        return [
            "UpdateNamespaceInboundIpAllowlistEntryRequest|1 namespace_slug 9|2 cidr 9|3 next_cidr 9?|4 description 9?|5 enabled 8?|6 entry_id 9"
        ];
    }
}
class qr extends Br {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qr, t, e);
    }
    static $() {
        return [
            "UpdateNamespaceInboundIpAllowlistEntryResponse|1 entry #0",
            Er
        ];
    }
}
class Rr extends Br {
    constructor(t){
        super(), this.namespaceSlug = "", this.cidr = "", this.entryId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rr, t, e);
    }
    static $() {
        return [
            "DeleteNamespaceInboundIpAllowlistEntryRequest|1 namespace_slug 9|2 cidr 9|3 entry_id 9"
        ];
    }
}
class Pr extends Br {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pr, t, e);
    }
    static $() {
        return [
            "DeleteNamespaceInboundIpAllowlistEntryResponse"
        ];
    }
}
class Tr extends Br {
    constructor(t){
        super(), this.namespaceSlug = "", this.enabled = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tr, t, e);
    }
    static $() {
        return [
            "SetNamespaceInboundIpAllowlistEnabledRequest|1 namespace_slug 9|2 enabled 8"
        ];
    }
}
class xr extends Br {
    constructor(t){
        super(), this.enabled = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xr, t, e);
    }
    static $() {
        return [
            "SetNamespaceInboundIpAllowlistEnabledResponse|1 enabled 8"
        ];
    }
}
class Nr extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class Dr extends Nr {
    constructor(t){
        super(), this.id = "", this.name = "", this.algo = "", this.fingerprint = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dr, t, e);
    }
    static $() {
        return [
            "SshPublicKey|1 id 9|2 name 9|3 algo 9|4 fingerprint 9|5 created_at #0|6 last_used_at #0",
            n.Timestamp
        ];
    }
}
class Ur extends Nr {
    constructor(t){
        super(), this.publicKey = "", this.name = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ur).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ur).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ur).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ur, t, e);
    }
    static $() {
        return [
            "AddSshPublicKeyRequest|1 public_key 9|2 name 9"
        ];
    }
}
class Qr extends Nr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qr, t, e);
    }
    static $() {
        return [
            "AddSshPublicKeyResponse|1 ssh_public_key #0",
            Dr
        ];
    }
}
class Mr extends Nr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mr, t, e);
    }
    static $() {
        return [
            "ListSshPublicKeysRequest"
        ];
    }
}
class Or extends Nr {
    constructor(t){
        super(), this.sshPublicKeys = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Or).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Or).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Or).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Or, t, e);
    }
    static $() {
        return [
            "ListSshPublicKeysResponse|1 ssh_public_keys #0*",
            Dr
        ];
    }
}
class Fr extends Nr {
    constructor(t){
        super(), this.id = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fr, t, e);
    }
    static $() {
        return [
            "DeleteSshPublicKeyRequest|1 id 9"
        ];
    }
}
class Lr extends Nr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Lr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Lr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Lr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Lr, t, e);
    }
    static $() {
        return [
            "DeleteSshPublicKeyResponse"
        ];
    }
}
const $r = "origin.v1.";
class Gr extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return $r;
    }
}
var Hr = (0, s.QT)(n.proto3, $r, "EventType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "REVIEW_REQUESTED"
    ],
    [
        2,
        "PULL_OPENED"
    ],
    [
        3,
        "PULL_READY"
    ],
    [
        4,
        "PULL_MERGED"
    ],
    [
        5,
        "REVIEW_SUBMITTED"
    ],
    [
        6,
        "COMMENT_CREATED"
    ],
    [
        7,
        "MENTION"
    ]
], 1);
class Kr extends Gr {
    constructor(t){
        super(), this.id = "", this.originNamespaceId = "", this.slackTeamId = "", this.ignoreDrafts = !1, this.events = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Kr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Kr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Kr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Kr, t, e);
    }
    static $() {
        return [
            "OriginSlackNotification|1 id 9|2 origin_namespace_id 9|3 slack_team_id 9|4 ignore_drafts 8|5 events #0*|8 notify_app_bots 8?|6 created_at #1|7 updated_at #1",
            Hr,
            n.Timestamp
        ];
    }
}
class Vr extends Gr {
    constructor(t){
        super(), this.originNamespaceId = "", this.ignoreDrafts = !1, this.events = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vr, t, e);
    }
    static $() {
        return [
            "UpsertOriginUserSlackNotificationRequest|1 origin_namespace_id 9|2 slack_team_id 9?|3 ignore_drafts 8|4 events #0*|5 notify_app_bots 8?",
            Hr
        ];
    }
}
class zr extends Gr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zr, t, e);
    }
    static $() {
        return [
            "UpsertOriginUserSlackNotificationResponse|1 notification #0",
            Kr
        ];
    }
}
class Wr extends Gr {
    constructor(t){
        super(), this.id = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wr, t, e);
    }
    static $() {
        return [
            "DeleteOriginUserSlackNotificationRequest|1 id 9"
        ];
    }
}
class Yr extends Gr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yr, t, e);
    }
    static $() {
        return [
            "DeleteOriginUserSlackNotificationResponse"
        ];
    }
}
class jr extends Gr {
    constructor(t){
        super(), this.originNamespaceId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new jr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new jr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new jr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(jr, t, e);
    }
    static $() {
        return [
            "GetOriginUserSlackNotificationRequest|1 slack_team_id 9?|2 origin_namespace_id 9"
        ];
    }
}
class Xr extends Gr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xr, t, e);
    }
    static $() {
        return [
            "GetOriginUserSlackNotificationResponse|1 notification #0?",
            Kr
        ];
    }
}
const Zr = "origin.v1.";
class tn extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return Zr;
    }
}
var en = (0, s.QT)(n.proto3, Zr, "CommitEmailGithubState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "UNKNOWN"
    ],
    [
        2,
        "NOT_ADDED"
    ],
    [
        3,
        "UNVERIFIED"
    ],
    [
        4,
        "VERIFIED"
    ],
    [
        5,
        "NOT_CONNECTED"
    ]
], 1), rn = (0, s.QT)(n.proto3, Zr, "CommitEmailVerificationState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NOT_STARTED"
    ],
    [
        2,
        "WAITING_FOR_EMAIL"
    ],
    [
        3,
        "READY_TO_VERIFY"
    ],
    [
        4,
        "VERIFIED"
    ],
    [
        5,
        "IDENTITY_MISMATCH"
    ],
    [
        6,
        "EMAIL_NOT_RECEIVED"
    ],
    [
        7,
        "EXPIRED"
    ]
], 1);
class nn extends tn {
    constructor(t){
        super(), this.noreplyEmail = "", this.eligible = !1, this.connectedGithubLogin = "", this.githubState = en.UNSPECIFIED, this.state = rn.UNSPECIFIED, this.verificationUrl = "", this.mismatchedGithubLogin = "", this.githubSettingsEmailsUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nn, t, e);
    }
    static $() {
        return [
            "OriginCommitEmailVerification|1 noreply_email 9|2 eligible 8|3 connected_github_login 9|4 github_state #0|5 state #1|6 verification_url 9|7 mismatched_github_login 9|8 github_settings_emails_url 9|9 updated_at #2",
            en,
            rn,
            n.Timestamp
        ];
    }
}
class sn extends tn {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sn, t, e);
    }
    static $() {
        return [
            "GetOriginCommitEmailVerificationRequest"
        ];
    }
}
class on extends tn {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new on).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new on).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new on).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(on, t, e);
    }
    static $() {
        return [
            "GetOriginCommitEmailVerificationResponse|1 verification #0",
            nn
        ];
    }
}
class an extends tn {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new an).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new an).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new an).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(an, t, e);
    }
    static $() {
        return [
            "StartOriginCommitEmailVerificationRequest"
        ];
    }
}
class un extends tn {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new un).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new un).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new un).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(un, t, e);
    }
    static $() {
        return [
            "StartOriginCommitEmailVerificationResponse|1 verification #0",
            nn
        ];
    }
}
const cn = "origin.v1.";
class ln extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return cn;
    }
}
var mn = (0, s.QT)(n.proto3, cn, "SlackReviewReminderDayOfWeek", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MONDAY"
    ],
    [
        2,
        "TUESDAY"
    ],
    [
        3,
        "WEDNESDAY"
    ],
    [
        4,
        "THURSDAY"
    ],
    [
        5,
        "FRIDAY"
    ],
    [
        6,
        "SATURDAY"
    ],
    [
        7,
        "SUNDAY"
    ]
], 1);
class dn extends ln {
    constructor(t){
        super(), this.includeTeamReviewRequests = !1, this.ignoreDrafts = !1, this.requiredLabels = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dn, t, e);
    }
    static $() {
        return [
            "OriginSlackReviewReminderFilters|1 include_team_review_requests 8|2 ignore_drafts 8|3 require_review_request 8?|4 remind_authors_after_reviews 8?|5 ignore_approved_count 8?|6 required_labels 9*"
        ];
    }
}
class fn extends ln {
    constructor(t){
        super(), this.id = "", this.originNamespaceId = "", this.slackTeamId = "", this.repoIds = [], this.daysOfWeek = [], this.timesOfDay = [], this.timeZone = "", this.enabled = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fn, t, e);
    }
    static $() {
        return [
            "OriginSlackReviewReminder|1 id 9|2 origin_namespace_id 9|3 slack_team_id 9|4 repo_ids 9*|5 days_of_week #0*|6 times_of_day 9*|7 time_zone 9|8 filters #1|9 enabled 8|10 last_sent_at #2?|11 last_outcome 9?|12 created_at #2|13 updated_at #2",
            mn,
            dn,
            n.Timestamp
        ];
    }
}
class pn extends ln {
    constructor(t){
        super(), this.originNamespaceId = "", this.repoIds = [], this.daysOfWeek = [], this.timesOfDay = [], this.timeZone = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pn, t, e);
    }
    static $() {
        return [
            "CreateOriginUserSlackReviewReminderRequest|1 origin_namespace_id 9|2 slack_team_id 9?|3 repo_ids 9*|4 days_of_week #0*|5 times_of_day 9*|6 time_zone 9|7 filters #1|8 enabled 8?",
            mn,
            dn
        ];
    }
}
class hn extends ln {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hn, t, e);
    }
    static $() {
        return [
            "CreateOriginUserSlackReviewReminderResponse|1 reminder #0",
            fn
        ];
    }
}
class gn extends ln {
    constructor(t){
        super(), this.id = "", this.originNamespaceId = "", this.repoIds = [], this.daysOfWeek = [], this.timesOfDay = [], this.timeZone = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gn, t, e);
    }
    static $() {
        return [
            "UpdateOriginUserSlackReviewReminderRequest|1 id 9|2 origin_namespace_id 9|3 slack_team_id 9?|4 repo_ids 9*|5 days_of_week #0*|6 times_of_day 9*|7 time_zone 9|8 filters #1|9 enabled 8?",
            mn,
            dn
        ];
    }
}
class An extends ln {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new An).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new An).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new An).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(An, t, e);
    }
    static $() {
        return [
            "UpdateOriginUserSlackReviewReminderResponse|1 reminder #0",
            fn
        ];
    }
}
class _n extends ln {
    constructor(t){
        super(), this.originNamespaceId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _n).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _n).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _n).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_n, t, e);
    }
    static $() {
        return [
            "ListOriginUserSlackReviewRemindersRequest|1 origin_namespace_id 9|2 slack_team_id 9?"
        ];
    }
}
class yn extends ln {
    constructor(t){
        super(), this.reminders = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yn, t, e);
    }
    static $() {
        return [
            "ListOriginUserSlackReviewRemindersResponse|1 reminders #0*",
            fn
        ];
    }
}
class wn extends ln {
    constructor(t){
        super(), this.id = "", this.originNamespaceId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wn, t, e);
    }
    static $() {
        return [
            "GetOriginUserSlackReviewReminderRequest|1 id 9|2 origin_namespace_id 9"
        ];
    }
}
class Sn extends ln {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sn, t, e);
    }
    static $() {
        return [
            "GetOriginUserSlackReviewReminderResponse|1 reminder #0",
            fn
        ];
    }
}
class Jn extends ln {
    constructor(t){
        super(), this.id = "", this.originNamespaceId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jn, t, e);
    }
    static $() {
        return [
            "DisableOriginUserSlackReviewReminderRequest|1 id 9|2 origin_namespace_id 9"
        ];
    }
}
class Bn extends ln {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bn, t, e);
    }
    static $() {
        return [
            "DisableOriginUserSlackReviewReminderResponse|1 reminder #0",
            fn
        ];
    }
}
const En = "origin.v1.";
class In extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return En;
    }
}
var Cn = (0, s.QT)(n.proto3, En, "OriginSlackChannelSubscriptionFeature", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PULLS"
    ],
    [
        2,
        "REVIEWS"
    ],
    [
        3,
        "COMMENTS"
    ],
    [
        4,
        "COMMITS"
    ],
    [
        5,
        "BRANCHES"
    ]
], 1), bn = (0, s.QT)(n.proto3, En, "OriginSlackChannelExposureReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SLACK_CONNECT"
    ],
    [
        2,
        "ORG_SHARED"
    ],
    [
        3,
        "GUESTS"
    ]
], 1), kn = (0, s.QT)(n.proto3, En, "OriginSlackChannelExposureStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NONE"
    ],
    [
        2,
        "EXPOSED"
    ],
    [
        3,
        "UNKNOWN"
    ]
], 1);
class vn extends In {
    constructor(t){
        super(), this.id = "", this.slackTeamId = "", this.slackChannelId = "", this.repoOwner = "", this.repoName = "", this.features = [], this.requiredLabels = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vn, t, e);
    }
    static $() {
        return [
            "OriginSlackChannelSubscription|1 id 9|2 slack_team_id 9|3 slack_channel_id 9|4 repo_owner 9|5 repo_name 9|6 features #0*|7 commit_ref_pattern 9?|8 required_labels 9*|9 created_at #1|10 updated_at #1",
            Cn,
            n.Timestamp
        ];
    }
}
class qn extends In {
    constructor(t){
        super(), this.slackChannelId = "", this.repoOwner = "", this.repoName = "", this.features = [], this.requiredLabels = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qn, t, e);
    }
    static $() {
        return [
            "SubscribeOriginSlackChannelRequest|1 slack_channel_id 9|2 slack_team_id 9?|3 repo_owner 9|4 repo_name 9|5 features #0*|6 commit_ref_pattern 9?|7 required_labels 9*",
            Cn
        ];
    }
}
class Rn extends In {
    constructor(t){
        super(), this.status = kn.UNSPECIFIED, this.reasons = [], this.repoVisibility = d.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rn, t, e);
    }
    static $() {
        return [
            "OriginSlackChannelExposure|1 status #0|2 reasons #1*|3 repo_visibility #2",
            kn,
            bn,
            d
        ];
    }
}
class Pn extends In {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pn, t, e);
    }
    static $() {
        return [
            "SubscribeOriginSlackChannelResponse|1 subscription #0|2 exposure #1",
            vn,
            Rn
        ];
    }
}
class Tn extends In {
    constructor(t){
        super(), this.slackChannelId = "", this.repoOwner = "", this.repoName = "", this.features = [], this.requiredLabels = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tn, t, e);
    }
    static $() {
        return [
            "UnsubscribeOriginSlackChannelRequest|1 slack_channel_id 9|2 slack_team_id 9?|3 repo_owner 9|4 repo_name 9|5 features #0*|6 required_labels 9*",
            Cn
        ];
    }
}
class xn extends In {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xn, t, e);
    }
    static $() {
        return [
            "UnsubscribeOriginSlackChannelResponse|1 subscription #0?",
            vn
        ];
    }
}
class Nn extends In {
    constructor(t){
        super(), this.slackChannelId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nn, t, e);
    }
    static $() {
        return [
            "ListOriginSlackChannelSubscriptionsRequest|1 slack_channel_id 9|2 slack_team_id 9?"
        ];
    }
}
class Dn extends In {
    constructor(t){
        super(), this.subscriptions = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dn, t, e);
    }
    static $() {
        return [
            "ListOriginSlackChannelSubscriptionsResponse|1 subscriptions #0*",
            vn
        ];
    }
}
const Un = "git_forge.v1.";
class Qn extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return Un;
    }
}
var Mn = (0, s.QT)(n.proto3, Un, "CommitActivityLineStats", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "INCLUDED"
    ],
    [
        2,
        "OMITTED_TOO_MANY_COMMITS"
    ]
], 1), On = (0, s.QT)(n.proto3, Un, "CompareCommitsStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "IDENTICAL"
    ],
    [
        2,
        "AHEAD"
    ],
    [
        3,
        "BEHIND"
    ],
    [
        4,
        "DIVERGED"
    ],
    [
        5,
        "NO_MERGE_BASE"
    ]
], 1), Fn = (0, s.QT)(n.proto3, Un, "MergeMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MERGE_COMMIT"
    ],
    [
        2,
        "SQUASH"
    ]
], 1), Ln = (n.proto3, (0, s.QT)(n.proto3, Un, "MergeRenameMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CAPPED"
    ],
    [
        2,
        "CAPPED_WITH_LINEAGE_SHADOW"
    ],
    [
        3,
        "LINEAGE"
    ]
], 1)), $n = (0, s.QT)(n.proto3, Un, "CanMergeCacheOnlyOutcome", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "HIT"
    ],
    [
        2,
        "MISS"
    ]
], 1), Gn = (n.proto3, n.proto3, (0, s.QT)(n.proto3, Un, "CommitFileMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "REGULAR"
    ],
    [
        2,
        "EXECUTABLE"
    ],
    [
        3,
        "SYMLINK"
    ]
], 1)), Hn = (0, s.QT)(n.proto3, Un, "GrepPriority", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "INTERACTIVE"
    ],
    [
        2,
        "BACKGROUND"
    ]
], 1), Kn = (n.proto3, n.proto3, (0, s.QT)(n.proto3, Un, "GrepLineKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MATCH"
    ],
    [
        2,
        "CONTEXT"
    ]
], 1)), Vn = (0, s.QT)(n.proto3, Un, "GeneratedAttributesRevision", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        3,
        "OFF"
    ],
    [
        1,
        "MERGE_BASE"
    ],
    [
        2,
        "HEAD"
    ]
], 1), zn = (0, s.QT)(n.proto3, Un, "FileMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "REGULAR"
    ],
    [
        2,
        "EXECUTABLE"
    ],
    [
        3,
        "SYMLINK"
    ],
    [
        4,
        "GITLINK"
    ]
], 1), Wn = (0, s.QT)(n.proto3, Un, "ChangeKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ADDED"
    ],
    [
        2,
        "DELETED"
    ],
    [
        3,
        "MODIFIED"
    ],
    [
        4,
        "RENAMED"
    ],
    [
        5,
        "COPIED"
    ]
], 1), Yn = (n.proto3, n.proto3, (0, s.QT)(n.proto3, Un, "ListRefsFilter", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ALL"
    ],
    [
        2,
        "BRANCHES"
    ],
    [
        3,
        "TAGS"
    ]
], 1));
n.proto3, n.proto3;
class jn extends Qn {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new jn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new jn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new jn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(jn, t, e);
    }
    static $() {
        return [
            "GetCommitResponse|1 commit #0",
            hs
        ];
    }
}
class Xn extends Qn {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xn, t, e);
    }
    static $() {
        return [
            "GetBlobResponse|1 blob #0",
            _s
        ];
    }
}
class Zn extends Qn {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zn, t, e);
    }
    static $() {
        return [
            "GetTagResponse|1 tag #0",
            ns
        ];
    }
}
class ts extends Qn {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ts).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ts).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ts).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ts, t, e);
    }
    static $() {
        return [
            "GetTreeResponse|1 tree #0",
            es
        ];
    }
}
class es extends Qn {
    constructor(t){
        super(), this.sha = "", this.tree = [], this.truncated = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new es).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new es).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new es).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(es, t, e);
    }
    static $() {
        return [
            "Tree|1 sha 9|2 tree #0*|3 truncated 8",
            rs
        ];
    }
}
class rs extends Qn {
    constructor(t){
        super(), this.path = "", this.mode = "", this.type = "", this.sha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rs, t, e);
    }
    static $() {
        return [
            "TreeEntry|1 path 9|2 mode 9|3 type 9|4 sha 9|5 size 4?"
        ];
    }
}
class ns extends Qn {
    constructor(t){
        super(), this.sha = "", this.name = "", this.message = "", this.objectSha = "", this.objectType = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ns).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ns).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ns).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ns, t, e);
    }
    static $() {
        return [
            "Tag|1 sha 9|2 name 9|3 message 9|4 tagger #0|5 object_sha 9|6 object_type 9",
            gs
        ];
    }
}
class ss extends Qn {
    constructor(t){
        super(), this.commits = [], this.truncated = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ss).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ss).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ss).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ss, t, e);
    }
    static $() {
        return [
            "LookupCommitsResponse|1 commits #0*|2 truncated 8",
            hs
        ];
    }
}
class is extends Qn {
    constructor(t){
        super(), this.dayStart = n.protoInt64.zero, this.commits = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new is).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new is).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new is).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(is, t, e);
    }
    static $() {
        return [
            "CommitActivityDay|1 day_start 3|2 commits 13"
        ];
    }
}
class os extends Qn {
    constructor(t){
        super(), this.weekStart = n.protoInt64.zero, this.commits = 0, this.additions = n.protoInt64.zero, this.deletions = n.protoInt64.zero, this.lineStatsPartialCommits = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new os).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new os).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new os).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(os, t, e);
    }
    static $() {
        return [
            "CommitActivityWeek|1 week_start 3|2 commits 13|3 additions 4|4 deletions 4|5 line_stats_partial_commits 13"
        ];
    }
}
class as extends Qn {
    constructor(t){
        super(), this.name = "", this.email = "", this.commits = 0, this.weeks = [], this.additions = n.protoInt64.zero, this.deletions = n.protoInt64.zero, this.key = "", this.days = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new as).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new as).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new as).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(as, t, e);
    }
    static $() {
        return [
            "CommitActivityContributor|1 name 9|2 email 9|3 commits 13|4 weeks #0*|5 additions 4|6 deletions 4|7 key 9|8 days #1*",
            os,
            is
        ];
    }
}
class us extends Qn {
    constructor(t){
        super(), this.commitSha = "", this.weeks = [], this.contributors = [], this.totalCommits = 0, this.totalContributors = 0, this.truncated = !1, this.lineStats = Mn.UNSPECIFIED, this.lineStatsPartialCommits = 0, this.baseIsAncestor = !1, this.daysIncluded = !1, this.rootCommitSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new us).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new us).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new us).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(us, t, e);
    }
    static $() {
        return [
            "GetCommitActivityResponse|1 commit_sha 9|2 weeks #0*|3 contributors #1*|4 total_commits 13|5 total_contributors 13|6 truncated 8|7 line_stats #2|8 line_stats_partial_commits 13|9 base_is_ancestor 8|10 days_included 8|11 root_commit_sha 9",
            os,
            as,
            Mn
        ];
    }
}
class cs extends Qn {
    constructor(t){
        super(), this.commits = [], this.baseCommitSha = "", this.headCommitSha = "", this.mergeBaseCommitSha = "", this.truncated = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cs, t, e);
    }
    static $() {
        return [
            "ListCommitsInRangeResponse|1 commits #0*|2 base_commit_sha 9|3 head_commit_sha 9|4 merge_base_commit_sha 9|5 truncated 8",
            hs
        ];
    }
}
class ls extends Qn {
    constructor(t){
        super(), this.status = On.UNSPECIFIED, this.aheadBy = 0, this.behindBy = 0, this.baseCommitSha = "", this.headCommitSha = "", this.mergeBaseCommitSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ls).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ls).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ls).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ls, t, e);
    }
    static $() {
        return [
            "CompareCommitsResponse|1 status #0|2 ahead_by 5|3 behind_by 5|4 base_commit_sha 9|5 head_commit_sha 9|6 merge_base_commit_sha 9",
            On
        ];
    }
}
class ms extends Qn {
    constructor(t){
        super(), this.canMergeWithoutConflicts = !1, this.conflictedPaths = [], this.renameMode = Ln.UNSPECIFIED, this.cacheOnlyOutcome = $n.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ms).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ms).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ms).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ms, t, e);
    }
    static $() {
        return [
            "CanMergeResponse|1 can_merge_without_conflicts 8|2 merged_tree_sha 12?|3 conflicted_paths 9*|4 rename_mode #0|5 cache_only_outcome #1",
            Ln,
            $n
        ];
    }
}
class ds extends Qn {
    constructor(t){
        super(), this.content = new Uint8Array(0), this.mode = Gn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ds).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ds).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ds).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ds, t, e);
    }
    static $() {
        return [
            "CommitFileUpsert|1 content 12|2 mode #0",
            Gn
        ];
    }
}
class fs extends Qn {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fs, t, e);
    }
    static $() {
        return [
            "CommitFileDelete"
        ];
    }
}
class ps extends Qn {
    constructor(t){
        super(), this.path = "", this.operation = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ps).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ps).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ps).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ps, t, e);
    }
    static $() {
        return [
            "CommitFileOperation|1 path 9|2 upsert #0 operation|3 delete #1 operation",
            ds,
            fs
        ];
    }
}
class hs extends Qn {
    constructor(t){
        super(), this.sha = "", this.message = "", this.parentShas = [], this.treeSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hs, t, e);
    }
    static $() {
        return [
            "Commit|1 sha 9|2 message 9|3 author #0|4 committer #0|5 parent_shas 9*|7 tree_sha 9|8 change_id 9?",
            gs
        ];
    }
}
class gs extends Qn {
    constructor(t){
        super(), this.name = "", this.email = "", this.timestamp = n.protoInt64.zero, this.timezoneOffset = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gs, t, e);
    }
    static $() {
        return [
            "Signature|1 name 9|2 email 9|3 timestamp 3|4 timezone_offset 5"
        ];
    }
}
class As extends Qn {
    constructor(t){
        super(), this.revision = "", this.path = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new As).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new As).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new As).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(As, t, e);
    }
    static $() {
        return [
            "PathIdentifier|1 revision 9|2 path 9"
        ];
    }
}
class _s extends Qn {
    constructor(t){
        super(), this.size = "", this.encoding = "", this.content = "", this.sha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _s).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _s).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _s).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_s, t, e);
    }
    static $() {
        return [
            "FileContent|1 size 9|2 encoding 9|3 content 9|4 sha 9"
        ];
    }
}
class ys extends Qn {
    constructor(t){
        super(), this.entries = [], this.sha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ys).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ys).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ys).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ys, t, e);
    }
    static $() {
        return [
            "DirectoryContent|1 entries #0*|2 sha 9",
            Os
        ];
    }
}
class ws extends Qn {
    constructor(t){
        super(), this.resolvedCommitSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ws).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ws).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ws).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ws, t, e);
    }
    static $() {
        return [
            "ResolveRefPathResponse|1 path_identifier #0|2 resolved_commit_sha 9",
            As
        ];
    }
}
class Ss extends Qn {
    constructor(t){
        super(), this.content = {
            case: void 0
        }, this.resolvedCommitSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ss).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ss).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ss).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ss, t, e);
    }
    static $() {
        return [
            "GetRepoContentResponse|1 file_content #0 content|2 directory_content #1 content|3 path_identifier #2|4 resolved_commit_sha 9",
            _s,
            ys,
            As
        ];
    }
}
class Js extends Qn {
    constructor(t){
        super(), this.path = "", this.found = !1, this.content = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Js).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Js).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Js).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Js, t, e);
    }
    static $() {
        return [
            "BatchRepoContentResult|1 path 9|2 found 8|3 file_content #0 content|4 directory_content #1 content",
            _s,
            ys
        ];
    }
}
class Bs extends Qn {
    constructor(t){
        super(), this.results = [], this.resolvedCommitSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bs, t, e);
    }
    static $() {
        return [
            "BatchGetRepoContentResponse|1 results #0*|2 resolved_commit_sha 9",
            Js
        ];
    }
}
class Es extends Qn {
    constructor(t){
        super(), this.type = "", this.isBinary = !1, this.tooLargeToIntrospect = !1, this.sha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Es).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Es).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Es).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Es, t, e);
    }
    static $() {
        return [
            "RepoContentDetails|1 type 9|2 size 4?|3 is_binary 8|4 too_large_to_introspect 8|5 sha 9"
        ];
    }
}
class Is extends Qn {
    constructor(t){
        super(), this.resolvedCommitSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Is).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Is).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Is).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Is, t, e);
    }
    static $() {
        return [
            "GetRepoContentDetailsResponse|1 details #0?|2 path_identifier #1|3 resolved_commit_sha 9",
            Es,
            As
        ];
    }
}
class Cs extends Qn {
    constructor(t){
        super(), this.commits = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cs, t, e);
    }
    static $() {
        return [
            "GetFileHistoryResponse|1 commits #0*",
            Ms
        ];
    }
}
class bs extends Qn {
    constructor(t){
        super(), this.renameNotChecked = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bs, t, e);
    }
    static $() {
        return [
            "FileHistoryCommitEntry|1 commit #0|2 diff_base_commit_sha 9?|8 path_stats #1?|9 path 9?|10 renamed_from_path 9?|11 rename_not_checked 8",
            Ms,
            Ys
        ];
    }
}
class ks extends Qn {
    constructor(t){
        super(), this.entries = [], this.hasMore = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ks).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ks).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ks).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ks, t, e);
    }
    static $() {
        return [
            "GetFileHistoryPageWithDiffStatsResponse|1 entries #0*|2 has_more 8|3 next_cursor 9?",
            bs
        ];
    }
}
class vs extends Qn {
    constructor(t){
        super(), this.commitSha = new Uint8Array(0), this.startInBlamedFile = 0, this.len = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vs, t, e);
    }
    static $() {
        return [
            "BlameLineRange|1 commit_sha 12|2 start_in_blamed_file 13|3 len 13"
        ];
    }
}
class qs extends Qn {
    constructor(t){
        super(), this.commits = [], this.lineRanges = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qs, t, e);
    }
    static $() {
        return [
            "BlameChunk|1 commits #0*|2 line_ranges #1*",
            Ms,
            vs
        ];
    }
}
class Rs extends Qn {
    constructor(t){
        super(), this.name = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rs, t, e);
    }
    static $() {
        return [
            "TreeEntryBlame|1 name 9|2 last_commit #0",
            Ms
        ];
    }
}
class Ps extends Qn {
    constructor(t){
        super(), this.entries = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ps).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ps).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ps).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ps, t, e);
    }
    static $() {
        return [
            "GetTreeBlameResponse|1 entries #0*",
            Rs
        ];
    }
}
class Ts extends Qn {
    constructor(t){
        super(), this.paths = [], this.hasMore = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ts).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ts).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ts).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ts, t, e);
    }
    static $() {
        return [
            "GetFuzzyPathsResponse|1 paths 9*|2 has_more 8"
        ];
    }
}
class xs extends Qn {
    constructor(t){
        super(), this.paths = [], this.hasMore = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xs, t, e);
    }
    static $() {
        return [
            "ListTreePathsResponse|1 paths 9*|2 has_more 8"
        ];
    }
}
class Ns extends Qn {
    constructor(t){
        super(), this.literal = !1, this.caseInsensitive = !1, this.wholeWord = !1, this.contextBefore = 0, this.contextAfter = 0, this.includes = [], this.excludes = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ns).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ns).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ns).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ns, t, e);
    }
    static $() {
        return [
            "GrepSearchOptions|1 literal 8|2 case_insensitive 8|3 whole_word 8|4 context_before 13|5 context_after 13|6 max_lines 4?|7 filter_path 9?|8 includes 9*|9 excludes 9*"
        ];
    }
}
class Ds extends Qn {
    constructor(t){
        super(), this.start = 0, this.end = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ds).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ds).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ds).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ds, t, e);
    }
    static $() {
        return [
            "GrepSubmatch|1 start 13|2 end 13"
        ];
    }
}
class Us extends Qn {
    constructor(t){
        super(), this.path = "", this.lines = "", this.lineNumber = 0, this.absoluteOffset = n.protoInt64.zero, this.submatches = [], this.kind = Kn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Us).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Us).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Us).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Us, t, e);
    }
    static $() {
        return [
            "GrepMatch|1 path 9|2 lines 9|3 line_number 13|4 absolute_offset 4|5 submatches #0*|6 kind #1",
            Ds,
            Kn
        ];
    }
}
class Qs extends Qn {
    constructor(t){
        super(), this.matches = [], this.limitHit = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qs, t, e);
    }
    static $() {
        return [
            "GrepRepoChunk|1 matches #0*|2 limit_hit 8",
            Us
        ];
    }
}
class Ms extends Qn {
    constructor(t){
        super(), this.sha = new Uint8Array(0), this.summary = "", this.authorName = "", this.authorEmail = "", this.timestamp = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ms).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ms).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ms).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ms, t, e);
    }
    static $() {
        return [
            "ShortCommit|1 sha 12|2 summary 9|3 author_name 9|4 author_email 9|5 timestamp 3"
        ];
    }
}
class Os extends Qn {
    constructor(t){
        super(), this.type = "", this.name = "", this.path = "", this.sha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Os).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Os).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Os).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Os, t, e);
    }
    static $() {
        return [
            "RepoContentEntry|1 type 9|2 name 9|3 path 9|4 sha 9|5 size 4?"
        ];
    }
}
class Fs extends Qn {
    constructor(t){
        super(), this.entries = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fs, t, e);
    }
    static $() {
        return [
            "PullRequestDiffChunk|1 header #0?|3 entries #1*",
            Ws,
            js
        ];
    }
}
class Ls extends Qn {
    constructor(t){
        super(), this.hasMore = !1, this.entries = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ls).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ls).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ls).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ls, t, e);
    }
    static $() {
        return [
            "CommitDiffHeader|1 commit #0|2 base_commit_sha 9?|3 stats #1|5 has_more 8|6 next_page_cursor 9?|7 entries #2*",
            hs,
            Xs,
            js
        ];
    }
}
class $s extends Qn {
    constructor(t){
        super(), this.entries = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $s).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $s).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $s).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($s, t, e);
    }
    static $() {
        return [
            "CommitDiffChunk|1 header #0?|3 entries #1*",
            Ls,
            js
        ];
    }
}
class Gs extends Qn {
    constructor(t){
        super(), this.entries = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gs, t, e);
    }
    static $() {
        return [
            "CommitDiff2Header|1 commit #0|2 base_commit_sha 9?|3 entries #1*",
            hs,
            js
        ];
    }
}
class Hs extends Qn {
    constructor(t){
        super(), this.headerIndex = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hs, t, e);
    }
    static $() {
        return [
            "CommitDiff2Entry|1 header_index 13|2 stats #0|3 patch 9?",
            Ys
        ];
    }
}
class Ks extends Qn {
    constructor(t){
        super(), this.entries = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ks).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ks).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ks).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ks, t, e);
    }
    static $() {
        return [
            "CommitDiff2Chunk|1 header #0?|2 entries #1*|3 trailer #2?",
            Gs,
            Hs,
            Xs
        ];
    }
}
class Vs extends Qn {
    constructor(t){
        super(), this.entries = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vs, t, e);
    }
    static $() {
        return [
            "GetCommitChangedPathsResponse|1 base_commit_sha 9?|2 entries #0*",
            js
        ];
    }
}
class zs extends Qn {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zs, t, e);
    }
    static $() {
        return [
            "GetCommitDiffStatsResponse|1 base_commit_sha 9?|2 stats #0",
            Xs
        ];
    }
}
class Ws extends Qn {
    constructor(t){
        super(), this.mergeBaseCommitSha = "", this.hasMore = !1, this.entries = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ws).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ws).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ws).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ws, t, e);
    }
    static $() {
        return [
            "DiffHeader|1 merge_base_commit_sha 9|4 has_more 8|5 next_page_cursor 9?|6 entries #0*",
            js
        ];
    }
}
class Ys extends Qn {
    constructor(t){
        super(), this.additions = 0, this.deletions = 0, this.isBinary = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ys).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ys).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ys).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ys, t, e);
    }
    static $() {
        return [
            "FileStats|1 additions 5|2 deletions 5|3 is_binary 8"
        ];
    }
}
class js extends Qn {
    constructor(t){
        super(), this.path = "", this.changeKind = Wn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new js).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new js).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new js).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(js, t, e);
    }
    static $() {
        return [
            "DiffEntry|1 path 9|2 old_path 9?|3 change_kind #0|4 old_mode #1?|5 new_mode #1?|6 old_sha 9?|7 new_sha 9?|8 stats #2?|9 patch 9?|10 is_generated 8?",
            Wn,
            zn,
            Ys
        ];
    }
}
class Xs extends Qn {
    constructor(t){
        super(), this.filesChanged = 0, this.additions = 0, this.deletions = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xs, t, e);
    }
    static $() {
        return [
            "CommitDiffStats|1 files_changed 13|2 additions 5|3 deletions 5"
        ];
    }
}
class Zs extends Qn {
    constructor(t){
        super(), this.name = "", this.targetSha = "", this.objectSha = "", this.objectType = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zs, t, e);
    }
    static $() {
        return [
            "RefInfo|1 name 9|2 target_sha 9|3 object_sha 9|4 object_type 9"
        ];
    }
}
class ti extends Qn {
    constructor(t){
        super(), this.refs = [], this.refInfos = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ti).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ti).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ti).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ti, t, e);
    }
    static $() {
        return [
            "ListRefsResponse|1 refs 9*|2 ref_infos #0*|5 next_page_token 9?",
            Zs
        ];
    }
}
class ei extends Qn {
    constructor(t){
        super(), this.refInfos = [], this.exactMatch = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ei).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ei).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ei).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ei, t, e);
    }
    static $() {
        return [
            "SearchRefsResponse|1 ref_infos #0*|2 exact_match 8",
            Zs
        ];
    }
}
const ri = "origin.v1.";
class ni extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return ri;
    }
}
var si = (0, s.QT)(n.proto3, ri, "GithubCodeownersFileStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FOUND"
    ],
    [
        2,
        "MISSING"
    ],
    [
        3,
        "TOO_LARGE"
    ],
    [
        4,
        "NOT_SERVED"
    ],
    [
        5,
        "TOO_COMPLEX"
    ]
], 1), ii = (0, s.QT)(n.proto3, ri, "GithubCodeownerViewerMatch", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MATCH"
    ],
    [
        2,
        "NO_MATCH"
    ],
    [
        3,
        "UNKNOWN"
    ]
], 1), oi = (0, s.QT)(n.proto3, ri, "GithubCodeownersViewerMembershipUnknownReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "LOOKUP_DISABLED"
    ],
    [
        2,
        "NOT_A_USER"
    ],
    [
        3,
        "NO_LINKED_GITHUB_LOGIN"
    ],
    [
        4,
        "ORGANIZATION_NOT_SYNCED"
    ],
    [
        5,
        "GITHUB_ENTERPRISE_UNSUPPORTED"
    ],
    [
        6,
        "CACHE_UNAVAILABLE"
    ],
    [
        7,
        "TOO_MANY_OWNERS"
    ],
    [
        8,
        "CACHE_CONTRACT_ERROR"
    ],
    [
        9,
        "REPOSITORY_OWNER_UNRESOLVED"
    ]
], 1);
class ai extends ni {
    constructor(t){
        super(), this.refPath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ai).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ai).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ai).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ai, t, e);
    }
    static $() {
        return [
            "ResolveRepoPathClientRequest|1 identifier #0|2 ref_path 9",
            o
        ];
    }
}
class ui extends ni {
    constructor(t){
        super(), this.refPath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ui).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ui).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ui).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ui, t, e);
    }
    static $() {
        return [
            "GetRepoContentClientRequest|1 identifier #0|2 ref_path 9|3 max_file_size 4?",
            o
        ];
    }
}
class ci extends ni {
    constructor(t){
        super(), this.refPath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ci).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ci).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ci).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ci, t, e);
    }
    static $() {
        return [
            "MintRawRepoFileLinkClientRequest|1 identifier #0|2 ref_path 9",
            o
        ];
    }
}
class li extends ni {
    constructor(t){
        super(), this.token = "", this.rawOrigin = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new li).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new li).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new li).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(li, t, e);
    }
    static $() {
        return [
            "MintRawRepoFileLinkClientResponse|1 token 9|2 path_identifier #0|3 raw_origin 9",
            As
        ];
    }
}
class mi extends ni {
    constructor(t){
        super(), this.ref = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mi, t, e);
    }
    static $() {
        return [
            "GetRepoTarballClientRequest|1 identifier #0|2 ref 9",
            o
        ];
    }
}
class di extends ni {
    constructor(t){
        super(), this.downloadUrl = "", this.sha = "", this.filename = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new di).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new di).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new di).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(di, t, e);
    }
    static $() {
        return [
            "GetRepoTarballClientResponse|1 download_url 9|2 sha 9|3 filename 9"
        ];
    }
}
class fi extends ni {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fi, t, e);
    }
    static $() {
        return [
            "GetRepoContentAtShaClientRequest|1 identifier #0|2 path_identifier #1|3 max_file_size 4?",
            o,
            As
        ];
    }
}
class pi extends ni {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pi, t, e);
    }
    static $() {
        return [
            "GetRepoContentDetailsAtShaClientRequest|1 identifier #0|2 path_identifier #1",
            o,
            As
        ];
    }
}
class hi extends ni {
    constructor(t){
        super(), this.revision = "", this.paths = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hi, t, e);
    }
    static $() {
        return [
            "BatchGetRepoContentAtShaClientRequest|1 identifier #0|2 revision 9|3 paths 9*|4 max_file_size 4?",
            o
        ];
    }
}
class gi extends ni {
    constructor(t){
        super(), this.baseRef = "", this.paths = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gi, t, e);
    }
    static $() {
        return [
            "GetRepoCodeownersClientRequest|1 identifier #0|2 base_ref 9|3 paths 9*",
            o
        ];
    }
}
class Ai extends ni {
    constructor(t){
        super(), this.owners = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ai).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ai).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ai).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ai, t, e);
    }
    static $() {
        return [
            "CodeownersOwners|1 owners 9*"
        ];
    }
}
class _i extends ni {
    constructor(t){
        super(), this.codeownersByPath = {}, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _i).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _i).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _i).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_i, t, e);
    }
    static $() {
        return [
            "GetRepoCodeownersResponse|1 codeowners_by_path 9,#0",
            Ai
        ];
    }
}
class yi extends ni {
    constructor(t){
        super(), this.baseSha = "", this.paths = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yi, t, e);
    }
    static $() {
        return [
            "GetGithubRepoCodeownersClientRequest|1 identifier #0|2 base_sha 9|3 paths 9*",
            o
        ];
    }
}
class wi extends ni {
    constructor(t){
        super(), this.codeownersByPath = {}, this.fileStatus = si.UNSPECIFIED, this.filePath = "", this.viewerMatchByOwner = {}, this.viewerMembershipKnown = !1, this.viewerMembershipUnknownReason = oi.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wi, t, e);
    }
    static $() {
        return [
            "GetGithubRepoCodeownersResponse|1 codeowners_by_path 9,#0|2 file_status #1|3 file_path 9|4 viewer_match_by_owner 9,#2|5 viewer_membership_known 8|6 viewer_membership_unknown_reason #3",
            Ai,
            si,
            ii,
            oi
        ];
    }
}
class Si extends ni {
    constructor(t){
        super(), this.commitSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Si).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Si).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Si).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Si, t, e);
    }
    static $() {
        return [
            "GetCommitClientRequest|1 identifier #0|2 commit_sha 9",
            o
        ];
    }
}
class Ji extends ni {
    constructor(t){
        super(), this.blobSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ji).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ji).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ji).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ji, t, e);
    }
    static $() {
        return [
            "GetBlobClientRequest|1 identifier #0|2 blob_sha 9",
            o
        ];
    }
}
class Bi extends ni {
    constructor(t){
        super(), this.tagSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bi, t, e);
    }
    static $() {
        return [
            "GetTagClientRequest|1 identifier #0|2 tag_sha 9",
            o
        ];
    }
}
class Ei extends ni {
    constructor(t){
        super(), this.treeSha = "", this.recursive = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ei).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ei).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ei).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ei, t, e);
    }
    static $() {
        return [
            "GetTreeClientRequest|1 identifier #0|2 tree_sha 9|3 recursive 8",
            o
        ];
    }
}
class Ii extends ni {
    constructor(t){
        super(), this.startCommitSha = "", this.maxCommits = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ii).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ii).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ii).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ii, t, e);
    }
    static $() {
        return [
            "GetFileHistoryClientRequest|1 identifier #0|2 start_commit_sha 9|3 path 9?|4 max_commits 13",
            o
        ];
    }
}
class Ci extends ni {
    constructor(t){
        super(), this.startCommitSha = "", this.pageSize = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ci).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ci).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ci).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ci, t, e);
    }
    static $() {
        return [
            "GetFileHistoryPageClientRequest|1 identifier #0|2 start_commit_sha 9|3 path 9?|4 page_size 13|5 next_cursor 9?",
            o
        ];
    }
}
class bi extends ni {
    constructor(t){
        super(), this.commits = [], this.hasMore = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bi, t, e);
    }
    static $() {
        return [
            "GetFileHistoryPageResponse|1 commits #0*|2 has_more 8|3 next_cursor 9?",
            Ms
        ];
    }
}
class ki extends ni {
    constructor(t){
        super(), this.startCommitSha = "", this.pageSize = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ki).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ki).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ki).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ki, t, e);
    }
    static $() {
        return [
            "GetFileHistoryPageWithDiffStatsClientRequest|1 identifier #0|2 start_commit_sha 9|3 path 9?|4 page_size 13|5 next_cursor 9?",
            o
        ];
    }
}
class vi extends ni {
    constructor(t){
        super(), this.startCommitSha = "", this.path = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vi, t, e);
    }
    static $() {
        return [
            "GetBlameClientRequest|1 identifier #0|2 start_commit_sha 9|3 path 9",
            o
        ];
    }
}
class qi extends ni {
    constructor(t){
        super(), this.startCommitSha = "", this.path = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qi, t, e);
    }
    static $() {
        return [
            "GetTreeBlameClientRequest|1 identifier #0|2 start_commit_sha 9|3 path 9",
            o
        ];
    }
}
class Ri extends ni {
    constructor(t){
        super(), this.commitSha = "", this.query = "", this.limit = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ri).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ri).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ri).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ri, t, e);
    }
    static $() {
        return [
            "GetFuzzyPathsClientRequest|1 identifier #0|2 commit_sha 9|3 query 9|4 limit 13",
            o
        ];
    }
}
class Pi extends ni {
    constructor(t){
        super(), this.revision = "", this.includes = [], this.excludes = [], this.limit = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pi, t, e);
    }
    static $() {
        return [
            "ListRepoPathsClientRequest|1 identifier #0|2 revision 9|3 includes 9*|4 excludes 9*|5 limit 13",
            o
        ];
    }
}
class Ti extends ni {
    constructor(t){
        super(), this.revision = "", this.query = "", this.maxResults = 0, this.maxTotalLines = 0, this.priority = Hn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ti).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ti).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ti).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ti, t, e);
    }
    static $() {
        return [
            "GrepRepoClientRequest|1 identifier #0|2 revision 9|3 query 9|4 options #1|5 max_results 13|6 max_total_lines 13|7 priority #2",
            o,
            Ns,
            Hn
        ];
    }
}
class xi extends ni {
    constructor(t){
        super(), this.headCommitSha = "", this.baseCommitSha = "", this.contextLines = 0, this.generatedAttributesRevision = Vn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xi, t, e);
    }
    static $() {
        return [
            "GetPullRequestDiffClientRequest|1 identifier #0|2 head_commit_sha 9|3 base_commit_sha 9|4 include_patches 8?|5 include_file_stats 8?|6 page_size 13?|7 page_cursor 9?|8 context_lines 13|9 generated_attributes_revision #1",
            o,
            Vn
        ];
    }
}
class Ni extends ni {
    constructor(t){
        super(), this.commitSha = "", this.includePatches = !1, this.paths = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ni).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ni).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ni).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ni, t, e);
    }
    static $() {
        return [
            "GetCommitDiffClientRequest|1 identifier #0|2 commit_sha 9|3 base_commit_sha 9?|4 include_patches 8|5 paths 9*|6 page_size 13?|7 page_cursor 9?",
            o
        ];
    }
}
class Di extends ni {
    constructor(t){
        super(), this.commitSha = "", this.includePatches = !1, this.paths = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Di).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Di).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Di).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Di, t, e);
    }
    static $() {
        return [
            "GetCommitDiff2ClientRequest|1 identifier #0|2 commit_sha 9|3 base_commit_sha 9?|4 include_patches 8|5 paths 9*",
            o
        ];
    }
}
class Ui extends ni {
    constructor(t){
        super(), this.commitSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ui).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ui).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ui).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ui, t, e);
    }
    static $() {
        return [
            "GetCommitChangedPathsClientRequest|1 identifier #0|2 commit_sha 9|3 base_commit_sha 9?",
            o
        ];
    }
}
class Qi extends ni {
    constructor(t){
        super(), this.commitSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qi, t, e);
    }
    static $() {
        return [
            "GetCommitDiffStatsClientRequest|1 identifier #0|2 commit_sha 9|3 base_commit_sha 9?",
            o
        ];
    }
}
class Mi extends ni {
    constructor(t){
        super(), this.filter = Yn.UNSPECIFIED, this.namesOnly = !1, this.prefix = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mi, t, e);
    }
    static $() {
        return [
            "ListRefsClientRequest|1 identifier #0|2 filter #1|3 names_only 8|4 prefix 9|5 limit 13?|7 page_token 9?",
            o,
            Yn
        ];
    }
}
class Oi extends ni {
    constructor(t){
        super(), this.filter = Yn.UNSPECIFIED, this.query = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Oi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Oi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Oi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Oi, t, e);
    }
    static $() {
        return [
            "SearchRefsClientRequest|1 identifier #0|2 filter #1|3 query 9|4 limit 13?",
            o,
            Yn
        ];
    }
}
class Fi extends ni {
    constructor(t){
        super(), this.shaPrefix = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fi, t, e);
    }
    static $() {
        return [
            "LookupCommitsClientRequest|1 identifier #0|2 sha_prefix 9|3 limit 13?",
            o
        ];
    }
}
class Li extends ni {
    constructor(t){
        super(), this.revision = "", this.includeLineStats = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Li).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Li).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Li).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Li, t, e);
    }
    static $() {
        return [
            "GetCommitActivityClientRequest|1 identifier #0|2 revision 9|3 since_timestamp 3?|4 max_contributors 13?|5 until_timestamp 3?|6 include_line_stats 8",
            o
        ];
    }
}
class $i extends ni {
    constructor(t){
        super(), this.usersByContributorKey = {}, this.pending = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $i).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $i).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $i).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($i, t, e);
    }
    static $() {
        return [
            "GetCommitActivityClientResponse|1 activity #0|2 users_by_contributor_key 9,#1|3 pending 8",
            us,
            Gi
        ];
    }
}
class Gi extends ni {
    constructor(t){
        super(), this.userId = "", this.displayName = "", this.avatarUrl = "", this.profileHandle = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gi, t, e);
    }
    static $() {
        return [
            "CommitActivityContributorUser|1 user_id 9|2 display_name 9|3 avatar_url 9|4 profile_handle 9"
        ];
    }
}
class Hi extends ni {
    constructor(t){
        super(), this.ours = "", this.theirs = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hi, t, e);
    }
    static $() {
        return [
            "CanMergeClientRequest|1 identifier #0|2 ours 9|3 theirs 9",
            o
        ];
    }
}
class Ki extends ni {
    constructor(t){
        super(), this.baseRevision = "", this.headRevision = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ki).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ki).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ki).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ki, t, e);
    }
    static $() {
        return [
            "CompareCommitsClientRequest|1 identifier #0|2 base_revision 9|3 head_revision 9",
            o
        ];
    }
}
class Vi extends ni {
    constructor(t){
        super(), this.baseRevision = "", this.headRevision = "", this.oldestFirst = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vi, t, e);
    }
    static $() {
        return [
            "ListCommitsInRangeClientRequest|1 identifier #0|2 base_revision 9|3 head_revision 9|4 max_commits 5?|5 oldest_first 8",
            o
        ];
    }
}
class zi extends ni {
    constructor(t){
        super(), this.branch = "", this.message = "", this.files = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zi, t, e);
    }
    static $() {
        return [
            "CreateCommitFromFilesClientRequest|1 identifier #0|2 branch 9|3 expected_head_sha 9?|4 message 9|5 author #1|6 committer #1?|7 files #2*",
            o,
            gs,
            ps
        ];
    }
}
class Wi extends ni {
    constructor(t){
        super(), this.commitSha = "", this.treeSha = "", this.oldHeadSha = "", this.reverseMirrorPushFailed = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wi, t, e);
    }
    static $() {
        return [
            "CreateCommitFromFilesClientResponse|1 commit_sha 9|2 tree_sha 9|3 old_head_sha 9|4 reverse_mirror_push_failed 8"
        ];
    }
}
class Yi extends ni {
    constructor(t){
        super(), this.path = "", this.changeKind = Wn.UNSPECIFIED, this.isBinary = !1, this.patch = "", this.additions = 0, this.deletions = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yi, t, e);
    }
    static $() {
        return [
            "CollectedFileDiff|1 path 9|2 old_path 9?|3 change_kind #0|4 is_binary 8|5 patch 9|6 additions 5|7 deletions 5|8 is_generated 8?|9 old_mode #1?|10 new_mode #1?",
            Wn,
            zn
        ];
    }
}
class ji extends ni {
    constructor(t){
        super(), this.headCommitSha = "", this.baseCommitSha = "", this.contextLines = 0, this.generatedAttributesRevision = Vn.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ji).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ji).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ji).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ji, t, e);
    }
    static $() {
        return [
            "GetCollectedPullRequestDiffRequest|1 identifier #0|2 head_commit_sha 9|3 base_commit_sha 9|4 include_patches 8?|5 include_file_stats 8?|6 page_size 13?|7 page_cursor 9?|8 change_number 4?|9 version_number 4?|10 context_lines 13|11 generated_attributes_revision #1|12 project_latest_version_base 8?",
            o,
            Vn
        ];
    }
}
class Xi extends ni {
    constructor(t){
        super(), this.mergeBaseSha = "", this.files = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xi, t, e);
    }
    static $() {
        return [
            "GetCollectedPullRequestDiffResponse|1 merge_base_sha 9|2 files #0*|4 next_page_cursor 9?|5 resolved_head_sha 9?|6 resolved_base_sha 9?|7 resolved_version_number 4?",
            Yi
        ];
    }
}
class Zi extends ni {
    constructor(t){
        super(), this.branch = "", this.expectedHeadSha = "", this.newHeadSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zi, t, e);
    }
    static $() {
        return [
            "FastForwardBranchClientRequest|1 identifier #0|2 branch 9|3 expected_head_sha 9|4 new_head_sha 9",
            o
        ];
    }
}
class to extends ni {
    constructor(t){
        super(), this.oldHeadSha = "", this.newHeadSha = "", this.unchanged = !1, this.reverseMirrorPushFailed = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new to).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new to).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new to).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(to, t, e);
    }
    static $() {
        return [
            "FastForwardBranchClientResponse|1 old_head_sha 9|2 new_head_sha 9|3 unchanged 8|4 reverse_mirror_push_failed 8"
        ];
    }
}
const eo = "origin.v1.";
class ro extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return eo;
    }
}
var no = (0, s.QT)(n.proto3, eo, "CodeIntelligenceProvenance", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "EXACT_SCIP"
    ],
    [
        2,
        "HYBRID"
    ],
    [
        3,
        "SEARCH"
    ]
], 1);
class so extends ro {
    constructor(t){
        super(), this.indexedCommitSha = "", this.provenance = no.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new so).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new so).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new so).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(so, t, e);
    }
    static $() {
        return [
            "CodeIntelligenceIndex|1 indexed_commit_sha 9|2 provenance #0",
            no
        ];
    }
}
class io extends ro {
    constructor(t){
        super(), this.line = 0, this.utf16Column = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new io).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new io).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new io).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(io, t, e);
    }
    static $() {
        return [
            "CodeIntelligencePosition|1 line 13|2 utf16_column 13"
        ];
    }
}
class oo extends ro {
    constructor(t){
        super(), this.startLine = 0, this.startUtf16Column = 0, this.endLine = 0, this.endUtf16Column = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new oo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new oo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new oo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(oo, t, e);
    }
    static $() {
        return [
            "CodeIntelligenceRange|1 start_line 13|2 start_utf16_column 13|3 end_line 13|4 end_utf16_column 13"
        ];
    }
}
class ao extends ro {
    constructor(t){
        super(), this.path = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ao).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ao).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ao).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ao, t, e);
    }
    static $() {
        return [
            "CodeIntelligenceLocation|1 path 9|2 range #0",
            oo
        ];
    }
}
class uo extends ro {
    constructor(t){
        super(), this.opaqueId = "", this.definitions = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new uo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new uo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new uo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(uo, t, e);
    }
    static $() {
        return [
            "ResolvedCodeIntelligenceSymbol|1 opaque_id 9|2 occurrence_range #0|3 definition #1?|4 signature 9?|5 documentation 9?|6 definitions #1*|7 kind 9?",
            oo,
            ao
        ];
    }
}
class co extends ro {
    constructor(t){
        super(), this.commitSha = "", this.path = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new co).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new co).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new co).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(co, t, e);
    }
    static $() {
        return [
            "ResolveCodeIntelligenceSymbolAtPositionRequest|1 repo #0|2 commit_sha 9|3 path 9|4 position #1",
            o,
            io
        ];
    }
}
class lo extends ro {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lo, t, e);
    }
    static $() {
        return [
            "ResolveCodeIntelligenceSymbolAtPositionResponse|1 index #0|2 symbol #1?",
            so,
            uo
        ];
    }
}
class mo extends ro {
    constructor(t){
        super(), this.commitSha = "", this.path = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mo, t, e);
    }
    static $() {
        return [
            "FindCodeIntelligenceReferencesAtPositionRequest|1 repo #0|2 commit_sha 9|3 path 9|4 position #1",
            o,
            io
        ];
    }
}
class fo extends ro {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fo, t, e);
    }
    static $() {
        return [
            "FindCodeIntelligenceReferencesAtPositionHeader|1 index #0|2 symbol #1?",
            so,
            uo
        ];
    }
}
class po extends ro {
    constructor(t){
        super(), this.isDefinition = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new po).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new po).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new po).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(po, t, e);
    }
    static $() {
        return [
            "FindCodeIntelligenceReferencesAtPositionResult|1 location #0|2 is_definition 8",
            ao
        ];
    }
}
class ho extends ro {
    constructor(t){
        super(), this.totalCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ho).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ho).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ho).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ho, t, e);
    }
    static $() {
        return [
            "FindCodeIntelligenceReferencesAtPositionTrailer|1 total_count 13"
        ];
    }
}
class go extends ro {
    constructor(t){
        super(), this.chunk = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new go).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new go).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new go).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(go, t, e);
    }
    static $() {
        return [
            "FindCodeIntelligenceReferencesAtPositionResponse|1 header #0 chunk|2 result #1 chunk|3 trailer #2 chunk",
            fo,
            po,
            ho
        ];
    }
}
const Ao = "origin.v1.";
class _o extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return Ao;
    }
}
var yo = (0, s.QT)(n.proto3, Ao, "DiffRelayOwnerPrivacyClass", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NO_DURABLE"
    ],
    [
        2,
        "NO_TRAINING"
    ],
    [
        3,
        "TRAINING_ALLOWED"
    ]
], 1), wo = (0, s.QT)(n.proto3, Ao, "DiffRelayContentEncoding", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "IDENTITY"
    ]
], 1), So = (0, s.QT)(n.proto3, Ao, "DiffRelayNotServedReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "RELAY_DISABLED"
    ],
    [
        2,
        "VIEWER_GATE_OFF"
    ],
    [
        3,
        "REPO_KILL_SWITCH"
    ],
    [
        4,
        "GITHUB_FACT_MISSING"
    ],
    [
        5,
        "GITHUB_FACT_STALE"
    ],
    [
        6,
        "MIRROR_INCOMPLETE"
    ],
    [
        7,
        "MIRROR_STATE_CHANGED"
    ],
    [
        8,
        "MIRROR_UNVERIFIED"
    ]
], 1);
class Jo extends _o {
    constructor(t){
        super(), this.headCommitSha = "", this.baseCommitSha = "", this.baseIsMergeBase = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jo, t, e);
    }
    static $() {
        return [
            "DiffRelayTarget|1 identifier #0|2 change_number 4?|3 version_number 4?|4 head_commit_sha 9|5 base_commit_sha 9|6 base_is_merge_base 8|7 from #1?",
            o,
            Bo
        ];
    }
}
class Bo extends _o {
    constructor(t){
        super(), this.headCommitSha = "", this.baseCommitSha = "", this.baseIsMergeBase = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bo, t, e);
    }
    static $() {
        return [
            "DiffRelayCommitPair|1 head_commit_sha 9|2 base_commit_sha 9|3 base_is_merge_base 8"
        ];
    }
}
class Eo extends _o {
    constructor(t){
        super(), this.serviceRequest = new Uint8Array(0), this.shadow = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Eo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Eo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Eo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Eo, t, e);
    }
    static $() {
        return [
            "GetDiffListingClientRequest|1 target #0|2 service_request 12|3 shadow 8",
            Jo
        ];
    }
}
class Io extends _o {
    constructor(t){
        super(), this.serviceRequest = new Uint8Array(0), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Io).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Io).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Io).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Io, t, e);
    }
    static $() {
        return [
            "StreamDiffFilesClientRequest|1 target #0|2 service_request 12|3 thread_anchors #1?",
            Jo,
            Co
        ];
    }
}
class Co extends _o {
    constructor(t){
        super(), this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Co).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Co).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Co).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Co, t, e);
    }
    static $() {
        return [
            "DiffRelayStreamThreadAnchorSource|1 change_number 4"
        ];
    }
}
class bo extends _o {
    constructor(t){
        super(), this.serviceRequest = new Uint8Array(0), this.shadow = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bo, t, e);
    }
    static $() {
        return [
            "GetDiffFileClientRequest|1 target #0|2 service_request 12|3 shadow 8|4 thread_anchors #1?",
            Jo,
            ko
        ];
    }
}
class ko extends _o {
    constructor(t){
        super(), this.changeNumber = n.protoInt64.zero, this.fromPath = "", this.toPath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ko).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ko).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ko).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ko, t, e);
    }
    static $() {
        return [
            "DiffRelayThreadAnchorSource|1 change_number 4|2 from_path 9|3 to_path 9"
        ];
    }
}
class vo extends _o {
    constructor(t){
        super(), this.serviceRequest = new Uint8Array(0), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vo, t, e);
    }
    static $() {
        return [
            "GetDiffEngineInfoClientRequest|1 service_request 12"
        ];
    }
}
class qo extends _o {
    constructor(t){
        super(), this.serviceRequest = new Uint8Array(0), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qo, t, e);
    }
    static $() {
        return [
            "PortAnchorsClientRequest|1 target #0|2 source #0|3 service_request 12",
            Jo
        ];
    }
}
class Ro extends _o {
    constructor(t){
        super(), this.body = {
            case: void 0
        }, this.contentEncoding = wo.UNSPECIFIED, this.chunkIndex = 0, this.done = !1, this.ownerPrivacyClass = yo.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ro).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ro).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ro).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ro, t, e);
    }
    static $() {
        return [
            "OriginDiffEnvelope|1 payload 12 body|2 oversized #0 body|3 not_served #1 body|4 content_encoding #2|5 chunk_index 13|6 done 8|7 owner_privacy_class #3",
            Po,
            To,
            wo,
            yo
        ];
    }
}
class Po extends _o {
    constructor(t){
        super(), this.sizeBytes = n.protoInt64.zero, this.maxBytes = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Po).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Po).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Po).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Po, t, e);
    }
    static $() {
        return [
            "DiffRelayOversized|1 size_bytes 4|2 max_bytes 4"
        ];
    }
}
class To extends _o {
    constructor(t){
        super(), this.reason = So.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new To).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new To).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new To).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(To, t, e);
    }
    static $() {
        return [
            "DiffRelayNotServed|1 reason #0",
            So
        ];
    }
}
class xo extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class No extends xo {
    constructor(t){
        super(), this.id = "", this.kind = "", this.displayName = "", this.avatarUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new No).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new No).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new No).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(No, t, e);
    }
    static $() {
        return [
            "ActorWithDisplay|1 id 9|2 kind 9|3 display_name 9|4 avatar_url 9|5 performed_via #0",
            No
        ];
    }
}
const Do = "origin.v1.";
class Uo extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return Do;
    }
}
var Qo = (0, s.QT)(n.proto3, Do, "ChangeStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DRAFT"
    ],
    [
        2,
        "OPEN"
    ],
    [
        3,
        "MERGED"
    ],
    [
        4,
        "CLOSED"
    ]
], 1), Mo = (0, s.QT)(n.proto3, Do, "VersionPotentialMergeCommitState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "UNKNOWN"
    ],
    [
        2,
        "PREPARED"
    ],
    [
        3,
        "MERGE_CONFLICT"
    ]
], 1), Oo = (0, s.QT)(n.proto3, Do, "UpdateChangeBranchMethod", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MERGE_COMMIT"
    ]
], 1), Fo = (0, s.QT)(n.proto3, Do, "ReviewVerdict", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "APPROVE"
    ],
    [
        2,
        "REQUEST_CHANGES"
    ],
    [
        3,
        "COMMENT"
    ]
], 1), Lo = (0, s.QT)(n.proto3, Do, "ChangeAssignmentKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "REVIEW_REQUEST"
    ],
    [
        2,
        "ASSIGNEE"
    ]
], 1), $o = (0, s.QT)(n.proto3, Do, "ChangeAssignmentCreatedVia", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "HUMAN"
    ],
    [
        2,
        "CODEOWNERS"
    ],
    [
        3,
        "SYSTEM"
    ]
], 1), Go = (0, s.QT)(n.proto3, Do, "ReviewRequestEventAction", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "REQUESTED"
    ],
    [
        2,
        "REMOVED"
    ]
], 1), Ho = (0, s.QT)(n.proto3, Do, "ChangeCodeownersMatchPathReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CURRENT_PATH"
    ],
    [
        2,
        "DELETED_PATH"
    ],
    [
        3,
        "RENAME_NEW_PATH"
    ],
    [
        4,
        "RENAME_OLD_PATH"
    ],
    [
        5,
        "COPY_SOURCE_PATH"
    ]
], 1), Ko = (0, s.QT)(n.proto3, Do, "StackMemberParentRelation", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NONE"
    ],
    [
        2,
        "STRICT"
    ],
    [
        3,
        "STALE"
    ],
    [
        4,
        "PARENT_MERGED"
    ],
    [
        5,
        "PARENT_CLOSED"
    ]
], 1), Vo = (0, s.QT)(n.proto3, Do, "StackMemberRecommendedAction", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NONE"
    ],
    [
        2,
        "RESTACK_ONTO_PARENT"
    ],
    [
        3,
        "REBASE_ONTO_TRUNK_IF_CONFLICTS"
    ],
    [
        4,
        "RETARGET_BASE_TO_TRUNK"
    ]
], 1), zo = (0, s.QT)(n.proto3, Do, "SectionOfChangesSortField", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "UPDATED_AT"
    ],
    [
        2,
        "CREATED_AT"
    ],
    [
        3,
        "TITLE"
    ],
    [
        4,
        "LINES_CHANGED"
    ]
], 1), Wo = (0, s.QT)(n.proto3, Do, "SectionOfChangesStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DRAFT"
    ],
    [
        2,
        "OPEN"
    ],
    [
        3,
        "MERGED"
    ],
    [
        4,
        "CLOSED"
    ]
], 1), Yo = (0, s.QT)(n.proto3, Do, "SectionOfChangesVerdict", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "APPROVE"
    ],
    [
        2,
        "COMMENT"
    ],
    [
        3,
        "REQUEST_CHANGES"
    ]
], 1), jo = (0, s.QT)(n.proto3, Do, "SectionOfChangesReviewStatusState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ONE_OR_MORE_APPROVALS"
    ],
    [
        2,
        "IS_FULLY_APPROVED"
    ],
    [
        3,
        "HAS_ACTIVE_REVIEW"
    ],
    [
        4,
        "HAS_REQUESTED_REVIEWERS"
    ],
    [
        5,
        "HAS_REREQUESTED_REVIEW"
    ],
    [
        6,
        "HAS_UNADDRESSED_CHANGES_REQUESTED"
    ],
    [
        7,
        "HAS_CHANGES_REQUESTED"
    ]
], 1);
class Xo extends Uo {
    constructor(t){
        super(), this.id = "", this.repoUuid = "", this.number = n.protoInt64.zero, this.title = "", this.description = "", this.headRef = "", this.baseRef = "", this.status = Qo.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xo, t, e);
    }
    static $() {
        return [
            "Change|1 id 9|2 repo_uuid 9|3 number 4|4 title 9|5 description 9|6 head_ref 9|7 base_ref 9|9 status #0|10 created_at #1|11 updated_at #1|12 merged_at #1?|13 closed_at #1?|14 parent_change_id 9?|15 stack_id 9?|16 merge_commit_sha 9?|22 author #2|23 merged_by #2|24 merged_version_id 9?",
            Qo,
            n.Timestamp,
            No
        ];
    }
}
class Zo extends Uo {
    constructor(t){
        super(), this.id = "", this.changeId = "", this.number = n.protoInt64.zero, this.headSha = "", this.baseSha = "", this.additions = 0, this.deletions = 0, this.changedFiles = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zo, t, e);
    }
    static $() {
        return [
            "Version|1 id 9|2 change_id 9|3 number 4|4 head_sha 9|5 base_sha 9|6 created_at #0|7 additions 5|8 deletions 5|9 changed_files 5|10 merge_base_sha 9?|11 ahead_by 5?|12 behind_by 5?|13 head_tree_oid 9?|14 merge_base_tree_oid 9?|15 potential_merge_commit #1|16 included_in_merge 8?",
            n.Timestamp,
            ta
        ];
    }
}
class ta extends Uo {
    constructor(t){
        super(), this.state = Mo.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ta).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ta).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ta).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ta, t, e);
    }
    static $() {
        return [
            "VersionPotentialMergeCommit|1 state #0|2 sha 9?|3 base_sha 9?",
            Mo
        ];
    }
}
class ea extends Uo {
    constructor(t){
        super(), this.title = "", this.description = "", this.headRef = "", this.baseRef = "", this.status = Qo.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ea).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ea).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ea).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ea, t, e);
    }
    static $() {
        return [
            "CreateChangeRequest|1 identifier #0|2 title 9|3 description 9|4 head_ref 9|5 base_ref 9|6 status #1|7 parent_change #2",
            o,
            Qo,
            na
        ];
    }
}
class ra extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ra).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ra).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ra).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ra, t, e);
    }
    static $() {
        return [
            "CreateChangeResponse|1 change #0|2 initial_version #1",
            Xo,
            Zo
        ];
    }
}
class na extends Uo {
    constructor(t){
        super(), this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new na).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new na).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new na).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(na, t, e);
    }
    static $() {
        return [
            "ChangeIdentifier|1 identifier #0|2 change_number 4",
            o
        ];
    }
}
class sa extends Uo {
    constructor(t){
        super(), this.draft = !1, this.allowStackLandingRevert = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sa, t, e);
    }
    static $() {
        return [
            "RevertPullRequestRequest|1 change #0|2 title 9?|3 description 9?|4 draft 8|5 allow_stack_landing_revert 8",
            na
        ];
    }
}
class ia extends Uo {
    constructor(t){
        super(), this.reverseMirrorPushFailed = !1, this.revertedChangeNumbers = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ia).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ia).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ia).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ia, t, e);
    }
    static $() {
        return [
            "RevertPullRequestResponse|1 change #0|2 reverse_mirror_push_failed 8|5 reverted_change_numbers 4*",
            Xo
        ];
    }
}
class oa extends Uo {
    constructor(t){
        super(), this.parentUpdate = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new oa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new oa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new oa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(oa, t, e);
    }
    static $() {
        return [
            "UpdateChangeRequest|1 change #0|2 head_ref 9?|3 base_ref 9?|4 parent_change #0 parent_update|5 clear_parent 8 parent_update",
            na
        ];
    }
}
class aa extends Uo {
    constructor(t){
        super(), this.unchanged = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new aa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new aa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new aa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(aa, t, e);
    }
    static $() {
        return [
            "UpdateChangeResponse|1 change #0|2 latest_version #1|3 unchanged 8",
            Xo,
            Zo
        ];
    }
}
class ua extends Uo {
    constructor(t){
        super(), this.method = Oo.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ua).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ua).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ua).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ua, t, e);
    }
    static $() {
        return [
            "UpdateChangeBranchRequest|1 change #0|2 method #1",
            na,
            Oo
        ];
    }
}
class ca extends Uo {
    constructor(t){
        super(), this.unchanged = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ca).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ca).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ca).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ca, t, e);
    }
    static $() {
        return [
            "UpdateChangeBranchResponse|1 change #0|2 latest_version #1|3 unchanged 8",
            Xo,
            Zo
        ];
    }
}
class la extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new la).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new la).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new la).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(la, t, e);
    }
    static $() {
        return [
            "DeleteChangeHeadBranchRequest|1 change #0",
            na
        ];
    }
}
class ma extends Uo {
    constructor(t){
        super(), this.alreadyDeleted = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ma).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ma).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ma).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ma, t, e);
    }
    static $() {
        return [
            "DeleteChangeHeadBranchResponse|1 already_deleted 8"
        ];
    }
}
class da extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new da).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new da).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new da).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(da, t, e);
    }
    static $() {
        return [
            "RestorePullRequestBranchRequest|1 change #0",
            na
        ];
    }
}
class fa extends Uo {
    constructor(t){
        super(), this.alreadyRestored = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fa, t, e);
    }
    static $() {
        return [
            "RestorePullRequestBranchResponse|1 already_restored 8"
        ];
    }
}
class pa extends Uo {
    constructor(t){
        super(), this.baseRef = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pa, t, e);
    }
    static $() {
        return [
            "RetargetChangeRequest|1 change #0|2 base_ref 9",
            na
        ];
    }
}
class ha extends Uo {
    constructor(t){
        super(), this.unchanged = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ha).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ha).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ha).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ha, t, e);
    }
    static $() {
        return [
            "RetargetChangeResponse|1 change #0|2 latest_version #1|3 unchanged 8",
            Xo,
            Zo
        ];
    }
}
class ga extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ga).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ga).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ga).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ga, t, e);
    }
    static $() {
        return [
            "FoldChangeRequest|1 change #0",
            na
        ];
    }
}
class Aa extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Aa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Aa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Aa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Aa, t, e);
    }
    static $() {
        return [
            "FoldChangeResponse"
        ];
    }
}
class _a extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _a).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _a).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _a).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_a, t, e);
    }
    static $() {
        return [
            "LandChangeTreePathRequest|1 tree #0|2 leaf #0",
            na
        ];
    }
}
class ya extends Uo {
    constructor(t){
        super(), this.oldTrunkSha = "", this.newTrunkSha = "", this.mergedChangeNumbers = [], this.closedChangeNumbers = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ya).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ya).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ya).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ya, t, e);
    }
    static $() {
        return [
            "LandChangeTreePathResponse|1 old_trunk_sha 9|2 new_trunk_sha 9|3 merged_change_numbers 4*|4 closed_change_numbers 4*"
        ];
    }
}
class wa extends Uo {
    constructor(t){
        super(), this.expectedHeadSha = "", this.expectedBaseSha = "", this.groups = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wa, t, e);
    }
    static $() {
        return [
            "SplitChangeIntoStackRequest|1 change #0|2 expected_head_sha 9|3 expected_base_sha 9|4 groups #1*",
            na,
            Sa
        ];
    }
}
class Sa extends Uo {
    constructor(t){
        super(), this.title = "", this.paths = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sa, t, e);
    }
    static $() {
        return [
            "SplitChangeStackGroup|1 title 9|2 paths 9*"
        ];
    }
}
class Ja extends Uo {
    constructor(t){
        super(), this.changes = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ja).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ja).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ja).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ja, t, e);
    }
    static $() {
        return [
            "SplitChangeIntoStackResponse|1 changes #0*",
            Xo
        ];
    }
}
class Ba extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ba).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ba).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ba).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ba, t, e);
    }
    static $() {
        return [
            "UpdateChangeMetadataRequest|1 change #0|2 title 9?|3 description 9?",
            na
        ];
    }
}
class Ea extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ea).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ea).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ea).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ea, t, e);
    }
    static $() {
        return [
            "UpdateChangeMetadataResponse|1 change #0",
            Xo
        ];
    }
}
class Ia extends Uo {
    constructor(t){
        super(), this.status = Qo.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ia).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ia).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ia).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ia, t, e);
    }
    static $() {
        return [
            "UpdateChangeStatusRequest|1 change #0|2 status #1|3 reset_base #2?",
            na,
            Qo,
            Ca
        ];
    }
}
class Ca extends Uo {
    constructor(t){
        super(), this.expectedBaseTipSha = "", this.resetToSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ca).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ca).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ca).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ca, t, e);
    }
    static $() {
        return [
            "ReopenBaseReset|1 expected_base_tip_sha 9|2 reset_to_sha 9"
        ];
    }
}
class ba extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ba).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ba).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ba).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ba, t, e);
    }
    static $() {
        return [
            "UpdateChangeStatusResponse|1 change #0",
            Xo
        ];
    }
}
class ka extends Uo {
    constructor(t){
        super(), this.dismissalMessage = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ka).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ka).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ka).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ka, t, e);
    }
    static $() {
        return [
            "ReviewDismissal|1 dismissed_at #0|4 dismissal_message 9|5 dismissed_by #1",
            n.Timestamp,
            No
        ];
    }
}
class va extends Uo {
    constructor(t){
        super(), this.id = "", this.changeId = "", this.versionId = "", this.versionNumber = n.protoInt64.zero, this.verdict = Fo.UNSPECIFIED, this.body = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new va).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new va).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new va).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(va, t, e);
    }
    static $() {
        return [
            "Review|1 id 9|2 change_id 9|3 version_id 9|4 version_number 4|6 verdict #0|7 body 9|8 created_at #1|12 submitted_at #1?|13 dismissal #2?|14 author #3",
            Fo,
            n.Timestamp,
            ka,
            No
        ];
    }
}
class qa extends Uo {
    constructor(t){
        super(), this.id = "", this.eventType = "", this.actorDisplayName = "", this.actorAvatarUrl = "", this.subjectUserId = "", this.subjectUserDisplayName = "", this.subjectUserAvatarUrl = "", this.subjectGroupId = "", this.labelName = "", this.labelColor = "", this.previousBaseRef = "", this.newBaseRef = "", this.previousTitle = "", this.newTitle = "", this.previousHeadSha = "", this.newHeadSha = "", this.headRefName = "", this.reviewId = "", this.dismissalMessage = "", this.relatedChangeNumber = n.protoInt64.zero, this.mergeQueueEvictionReason = "", this.mergeQueueValidationSha = "", this.satisfierGates = [], this.stoodInOwnerRules = [], this.codeReviewGateReported = !1, this.baseRefName = "", this.previousBaseSha = "", this.newBaseSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qa, t, e);
    }
    static $() {
        return [
            "ChangeTimelineEvent|1 id 9|2 event_type 9|3 created_at #0|6 actor_display_name 9|7 actor_avatar_url 9|8 subject_user_id 9|9 subject_user_display_name 9|10 subject_user_avatar_url 9|11 subject_group_id 9|12 label_name 9|13 label_color 9|14 previous_base_ref 9|15 new_base_ref 9|16 previous_title 9|17 new_title 9|18 previous_head_sha 9|19 new_head_sha 9|20 head_ref_name 9|21 review_id 9|22 dismissal_message 9|23 related_change_number 4|24 actor #1|25 merge_queue_eviction_reason 9|26 merge_queue_validation_sha 9|27 satisfier_gates #2*|28 stood_in_owner_rules #3*|29 code_review_gate_reported 8|30 base_ref_name 9|31 previous_base_sha 9|32 new_base_sha 9",
            n.Timestamp,
            No,
            Ra,
            Pa
        ];
    }
}
class Ra extends Uo {
    constructor(t){
        super(), this.gate = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ra).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ra).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ra).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ra, t, e);
    }
    static $() {
        return [
            "ChangesetApprovedGate|1 gate 9|2 report_url 9?"
        ];
    }
}
class Pa extends Uo {
    constructor(t){
        super(), this.scope = "", this.reviewers = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pa, t, e);
    }
    static $() {
        return [
            "ChangeTimelineOwnerRule|1 scope 9|2 reviewers 9*"
        ];
    }
}
class Ta extends Uo {
    constructor(t){
        super(), this.id = "", this.changeId = "", this.versionId = "", this.versionNumber = n.protoInt64.zero, this.body = "", this.threadId = "", this.reactionGroups = [], this.reviewId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ta).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ta).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ta).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ta, t, e);
    }
    static $() {
        return [
            "Comment|1 id 9|2 change_id 9|3 version_id 9|4 version_number 4|6 body 9|7 created_at #0|8 updated_at #0|9 thread_id 9|13 reaction_groups #1*|14 author #2|15 review_id 9",
            n.Timestamp,
            xa,
            No
        ];
    }
}
class xa extends Uo {
    constructor(t){
        super(), this.emoji = "", this.count = 0, this.viewerHasReacted = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xa, t, e);
    }
    static $() {
        return [
            "CommentReactionGroup|1 emoji 9|2 count 13|3 viewer_has_reacted 8"
        ];
    }
}
class Na extends Uo {
    constructor(t){
        super(), this.emoji = "", this.viewerIsReactor = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Na).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Na).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Na).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Na, t, e);
    }
    static $() {
        return [
            "CommentReaction|1 emoji 9|6 viewer_is_reactor 8|7 reactor #0",
            No
        ];
    }
}
class Da extends Uo {
    constructor(t){
        super(), this.verdict = Fo.UNSPECIFIED, this.body = "", this.versionNumber = n.protoInt64.zero, this.requireLatestVersion = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Da).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Da).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Da).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Da, t, e);
    }
    static $() {
        return [
            "CreateReviewRequest|1 change #0|2 verdict #1|3 body 9|4 version_number 4|5 require_latest_version 8",
            na,
            Fo
        ];
    }
}
class Ua extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ua).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ua).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ua).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ua, t, e);
    }
    static $() {
        return [
            "CreateReviewResponse|1 review #0",
            va
        ];
    }
}
class Qa extends Uo {
    constructor(t){
        super(), this.reviewId = "", this.body = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qa, t, e);
    }
    static $() {
        return [
            "UpdateReviewRequest|1 change #0|2 review_id 9|3 body 9",
            na
        ];
    }
}
class Ma extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ma).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ma).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ma).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ma, t, e);
    }
    static $() {
        return [
            "UpdateReviewResponse|1 review #0",
            va
        ];
    }
}
class Oa extends Uo {
    constructor(t){
        super(), this.reviewId = "", this.reason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Oa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Oa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Oa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Oa, t, e);
    }
    static $() {
        return [
            "DismissReviewRequest|1 change #0|2 review_id 9|3 reason 9",
            na
        ];
    }
}
class Fa extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fa, t, e);
    }
    static $() {
        return [
            "DismissReviewResponse|1 review #0",
            va
        ];
    }
}
class La extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new La).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new La).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new La).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(La, t, e);
    }
    static $() {
        return [
            "ListReviewsRequest|1 change #0",
            na
        ];
    }
}
class $a extends Uo {
    constructor(t){
        super(), this.reviews = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $a).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $a).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $a).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($a, t, e);
    }
    static $() {
        return [
            "ListReviewsResponse|1 reviews #0*",
            va
        ];
    }
}
class Ga extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ga).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ga).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ga).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ga, t, e);
    }
    static $() {
        return [
            "ListChangeTimelineEventsRequest|1 change #0",
            na
        ];
    }
}
class Ha extends Uo {
    constructor(t){
        super(), this.events = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ha).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ha).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ha).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ha, t, e);
    }
    static $() {
        return [
            "ListChangeTimelineEventsResponse|1 events #0*",
            qa
        ];
    }
}
class Ka extends Uo {
    constructor(t){
        super(), this.body = "", this.versionNumber = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ka).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ka).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ka).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ka, t, e);
    }
    static $() {
        return [
            "CreateCommentRequest|1 change #0|2 body 9|3 version_number 4",
            na
        ];
    }
}
class Va extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Va).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Va).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Va).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Va, t, e);
    }
    static $() {
        return [
            "CreateCommentResponse|1 comment #0",
            Ta
        ];
    }
}
class za extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new za).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new za).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new za).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(za, t, e);
    }
    static $() {
        return [
            "ListCommentsRequest|1 change #0",
            na
        ];
    }
}
class Wa extends Uo {
    constructor(t){
        super(), this.comments = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wa, t, e);
    }
    static $() {
        return [
            "ListCommentsResponse|1 comments #0*",
            Ta
        ];
    }
}
class Ya extends Uo {
    constructor(t){
        super(), this.id = "", this.changeId = "", this.kind = Lo.UNSPECIFIED, this.assignedGroupId = "", this.createdVia = $o.UNSPECIFIED, this.cursorUserId = n.protoInt64.zero, this.cursorGroupId = n.protoInt64.zero, this.assignedServiceAccountId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ya).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ya).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ya).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ya, t, e);
    }
    static $() {
        return [
            "ChangeAssignment|1 id 9|2 change_id 9|3 kind #0|5 assigned_group_id 9|6 created_via #1|8 created_at #2|9 updated_at #2|10 cursor_user_id 3|11 cursor_group_id 3|12 assigned_user #3|13 assigned_group #4|14 created_by #5|15 assigned_service_account #6|16 assigned_service_account_id 9",
            Lo,
            $o,
            n.Timestamp,
            fu,
            pu,
            No,
            gu
        ];
    }
}
class ja extends Uo {
    constructor(t){
        super(), this.id = "", this.changeId = "", this.kind = Lo.UNSPECIFIED, this.action = Go.UNSPECIFIED, this.assignedUserId = "", this.assignedGroupId = "", this.createdVia = $o.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ja).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ja).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ja).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ja, t, e);
    }
    static $() {
        return [
            "ReviewRequestEvent|1 id 9|2 change_id 9|3 kind #0|4 action #1|13 assigned_user_id 9|6 assigned_group_id 9|7 created_via #2|9 created_at #3|10 actor #4|11 assigned_user #5|12 assigned_group #6",
            Lo,
            Go,
            $o,
            n.Timestamp,
            No,
            fu,
            pu
        ];
    }
}
class Xa extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xa, t, e);
    }
    static $() {
        return [
            "ListReviewRequestEventsRequest|1 change #0",
            na
        ];
    }
}
class Za extends Uo {
    constructor(t){
        super(), this.events = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Za).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Za).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Za).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Za, t, e);
    }
    static $() {
        return [
            "ListReviewRequestEventsResponse|1 events #0*",
            ja
        ];
    }
}
class tu extends Uo {
    constructor(t){
        super(), this.target = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tu, t, e);
    }
    static $() {
        return [
            "RequestReviewRequest|1 change #0|3 group_id 9 target|4 cursor_user_id 3 target|5 cursor_group_id 3 target|6 user_id 9 target|7 service_account_id 9 target",
            na
        ];
    }
}
class eu extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new eu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new eu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new eu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(eu, t, e);
    }
    static $() {
        return [
            "RequestReviewResponse|1 assignment #0",
            Ya
        ];
    }
}
class ru extends Uo {
    constructor(t){
        super(), this.target = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ru).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ru).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ru).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ru, t, e);
    }
    static $() {
        return [
            "ReviewRequestTarget|2 group_id 9 target|3 cursor_user_id 3 target|4 cursor_group_id 3 target|5 user_id 9 target|6 service_account_id 9 target"
        ];
    }
}
class nu extends Uo {
    constructor(t){
        super(), this.additions = [], this.removals = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nu, t, e);
    }
    static $() {
        return [
            "ApplyReviewRequestChangesRequest|1 change #0|2 additions #1*|3 removals #1*",
            na,
            ru
        ];
    }
}
class su extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new su).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new su).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new su).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(su, t, e);
    }
    static $() {
        return [
            "ApplyReviewRequestChangesResponse"
        ];
    }
}
class iu extends Uo {
    constructor(t){
        super(), this.targets = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new iu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new iu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new iu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(iu, t, e);
    }
    static $() {
        return [
            "RequestReviewsRequest|1 change #0|2 targets #1*",
            na,
            ru
        ];
    }
}
class ou extends Uo {
    constructor(t){
        super(), this.assignments = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ou).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ou).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ou).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ou, t, e);
    }
    static $() {
        return [
            "RequestReviewsResponse|1 assignments #0*",
            Ya
        ];
    }
}
class au extends Uo {
    constructor(t){
        super(), this.target = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new au).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new au).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new au).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(au, t, e);
    }
    static $() {
        return [
            "CloseReviewRequestRequest|1 change #0|3 group_id 9 target|4 cursor_user_id 3 target|5 cursor_group_id 3 target|6 user_id 9 target|7 service_account_id 9 target",
            na
        ];
    }
}
class uu extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new uu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new uu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new uu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(uu, t, e);
    }
    static $() {
        return [
            "CloseReviewRequestResponse"
        ];
    }
}
class cu extends Uo {
    constructor(t){
        super(), this.target = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cu, t, e);
    }
    static $() {
        return [
            "AddAssigneeRequest|1 change #0|3 group_id 9 target|4 cursor_user_id 3 target|5 cursor_group_id 3 target|6 user_id 9 target",
            na
        ];
    }
}
class lu extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lu, t, e);
    }
    static $() {
        return [
            "AddAssigneeResponse|1 assignment #0",
            Ya
        ];
    }
}
class mu extends Uo {
    constructor(t){
        super(), this.target = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mu, t, e);
    }
    static $() {
        return [
            "RemoveAssigneeRequest|1 change #0|3 group_id 9 target|4 cursor_user_id 3 target|5 cursor_group_id 3 target|6 user_id 9 target",
            na
        ];
    }
}
class du extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new du).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new du).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new du).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(du, t, e);
    }
    static $() {
        return [
            "RemoveAssigneeResponse"
        ];
    }
}
class fu extends Uo {
    constructor(t){
        super(), this.firstName = "", this.lastName = "", this.email = "", this.avatarUrl = "", this.cursorUserId = n.protoInt64.zero, this.userId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fu, t, e);
    }
    static $() {
        return [
            "OriginReviewerCandidateUser|3 first_name 9|4 last_name 9|5 email 9|6 avatar_url 9|7 cursor_user_id 3|8 user_id 9"
        ];
    }
}
class pu extends Uo {
    constructor(t){
        super(), this.groupPublicId = "", this.organizationSlug = "", this.groupSlug = "", this.name = "", this.cursorGroupId = n.protoInt64.zero, this.memberUserIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pu, t, e);
    }
    static $() {
        return [
            "OriginReviewerCandidateGroup|1 group_public_id 9|2 organization_slug 9|3 group_slug 9|4 name 9|6 cursor_group_id 3|7 member_user_ids 9*"
        ];
    }
}
class hu extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hu, t, e);
    }
    static $() {
        return [
            "ListOriginRepoReviewerCandidatesRequest|1 repo #0",
            o
        ];
    }
}
class gu extends Uo {
    constructor(t){
        super(), this.serviceAccountId = "", this.displayName = "", this.avatarUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gu, t, e);
    }
    static $() {
        return [
            "OriginReviewerCandidateServiceAccount|1 service_account_id 9|2 display_name 9|3 avatar_url 9"
        ];
    }
}
class Au extends Uo {
    constructor(t){
        super(), this.users = [], this.groups = [], this.serviceAccounts = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Au).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Au).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Au).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Au, t, e);
    }
    static $() {
        return [
            "ListOriginRepoReviewerCandidatesResponse|1 users #0*|2 groups #1*|3 service_accounts #2*",
            fu,
            pu,
            gu
        ];
    }
}
class _u extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _u).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _u).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _u).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_u, t, e);
    }
    static $() {
        return [
            "GetChangeRequest|1 change #0|2 include_head_ref_exists 8?|3 include_merge_when_ready 8?|4 include_commits_behind_base 8?|5 include_viewer_capabilities 8?|6 include_merge_queue 8?",
            na
        ];
    }
}
class yu extends Uo {
    constructor(t){
        super(), this.id = "", this.name = "", this.color = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yu, t, e);
    }
    static $() {
        return [
            "ChangeLabel|1 id 9|2 name 9|3 color 9|4 description 9?"
        ];
    }
}
class wu extends Uo {
    constructor(t){
        super(), this.id = "", this.changeId = "", this.repoUuid = "", this.changeNumber = n.protoInt64.zero, this.status = "", this.source = "", this.trunkBranch = "", this.consecutiveFailedAttempts = 0, this.dev = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wu, t, e);
    }
    static $() {
        return [
            "ChangeMergeWhenReadySummary|1 id 9|2 change_id 9|3 repo_uuid 9|4 change_number 4|6 status 9|7 source 9|8 trunk_branch 9|9 lock_expires_at #0?|10 consecutive_failed_attempts 5|11 dev 8|12 repo_org 9?|13 repo_name 9?|14 enabled_by #1",
            n.Timestamp,
            No
        ];
    }
}
class Su extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Su).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Su).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Su).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Su, t, e);
    }
    static $() {
        return [
            "ChangeViewerCapabilities|1 can_write_pull_requests 8?|2 can_write_contents 8?|3 can_write_reviews 8?|4 can_merge 8?|5 can_enable_merge_when_ready 8?|6 can_disable_merge_when_ready 8?"
        ];
    }
}
class Ju extends Uo {
    constructor(t){
        super(), this.headSha = "", this.targetRef = "", this.status = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ju).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ju).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ju).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ju, t, e);
    }
    static $() {
        return [
            "ChangeMergeQueueSummary|1 head_sha 9|2 target_ref 9|3 status 9|4 ahead 13?|5 validation_sha 9?|6 eviction_reason 9?"
        ];
    }
}
class Bu extends Uo {
    constructor(t){
        super(), this.versions = [], this.assignments = [], this.labels = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bu, t, e);
    }
    static $() {
        return [
            "GetChangeResponse|1 change #0|2 versions #1*|3 assignments #2*|4 labels #3*|5 viewer_last_viewed_at #4?|6 viewer_timeline_viewed_at #4?|7 head_ref_exists 8?|8 merge_when_ready #5?|9 commits_behind_base 5?|12 commits_behind_base_as_of_version 4?|10 viewer_capabilities #6?|11 viewer_is_author 8?|13 merge_queue #7?|14 merge_queue_owns_landing 8?|15 head_ref_locked 8?",
            Xo,
            Zo,
            Ya,
            yu,
            n.Timestamp,
            wu,
            Su,
            Ju
        ];
    }
}
class Eu extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Eu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Eu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Eu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Eu, t, e);
    }
    static $() {
        return [
            "GetChangeCodeownersApplicationRequest|1 change #0|2 version_number 4?",
            na
        ];
    }
}
class Iu extends Uo {
    constructor(t){
        super(), this.checkedPaths = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Iu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Iu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Iu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Iu, t, e);
    }
    static $() {
        return [
            "ChangeCodeownersSnapshotMissing|1 checked_paths 9*"
        ];
    }
}
class Cu extends Uo {
    constructor(t){
        super(), this.path = "", this.sizeBytes = n.protoInt64.zero, this.maxSizeBytes = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cu, t, e);
    }
    static $() {
        return [
            "ChangeCodeownersSnapshotTooLarge|1 path 9|2 size_bytes 4|3 max_size_bytes 4"
        ];
    }
}
class bu extends Uo {
    constructor(t){
        super(), this.path = "", this.sizeBytes = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bu, t, e);
    }
    static $() {
        return [
            "ChangeCodeownersSnapshotFound|1 path 9|2 size_bytes 4"
        ];
    }
}
class ku extends Uo {
    constructor(t){
        super(), this.baseSha = "", this.status = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ku).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ku).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ku).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ku, t, e);
    }
    static $() {
        return [
            "ChangeCodeownersSnapshot|1 base_sha 9|2 missing #0 status|3 too_large #1 status|4 found #2 status",
            Iu,
            Cu,
            bu
        ];
    }
}
class vu extends Uo {
    constructor(t){
        super(), this.path = "", this.reason = Ho.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vu, t, e);
    }
    static $() {
        return [
            "ChangeCodeownersMatchPath|1 path 9|2 reason #0",
            Ho
        ];
    }
}
class qu extends Uo {
    constructor(t){
        super(), this.label = "", this.identity = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qu, t, e);
    }
    static $() {
        return [
            "ChangeCodeowner|1 label 9|2 user #0 identity|3 group #1 identity",
            Ru,
            Pu
        ];
    }
}
class Ru extends Uo {
    constructor(t){
        super(), this.login = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ru).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ru).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ru).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ru, t, e);
    }
    static $() {
        return [
            "ChangeCodeowner.User|1 login 9"
        ];
    }
}
class Pu extends Uo {
    constructor(t){
        super(), this.organizationSlug = "", this.groupSlug = "", this.groupPublicId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pu, t, e);
    }
    static $() {
        return [
            "ChangeCodeowner.Group|1 organization_slug 9|2 group_slug 9|3 group_public_id 9"
        ];
    }
}
class Tu extends Uo {
    constructor(t){
        super(), this.owners = [], this.requirementGroupId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tu, t, e);
    }
    static $() {
        return [
            "ChangeCodeownersResolvedOwnerRule|1 match_path #0|2 owners #1*|3 requirement_group_id 9",
            vu,
            qu
        ];
    }
}
class xu extends Uo {
    constructor(t){
        super(), this.changeKind = Wn.UNSPECIFIED, this.canonicalPath = "", this.matchPaths = [], this.resolvedOwnerRules = [], this.agenticOwners = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xu, t, e);
    }
    static $() {
        return [
            "ChangeCodeownersChangedPath|1 change_kind #0|2 canonical_path 9|3 old_path 9?|4 match_paths #1*|5 resolved_owner_rules #2*|6 agentic_owners #3*",
            Wn,
            vu,
            Tu,
            qu
        ];
    }
}
class Nu extends Uo {
    constructor(t){
        super(), this.canonicalPath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nu, t, e);
    }
    static $() {
        return [
            "ChangeCodeownersRequirementPath|1 canonical_path 9|2 match_path #0",
            vu
        ];
    }
}
class Du extends Uo {
    constructor(t){
        super(), this.id = "", this.owners = [], this.paths = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Du).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Du).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Du).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Du, t, e);
    }
    static $() {
        return [
            "ChangeCodeownersRequirementGroup|1 id 9|2 owners #0*|3 paths #1*",
            qu,
            Nu
        ];
    }
}
class Uu extends Uo {
    constructor(t){
        super(), this.changedPaths = [], this.requirementGroups = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Uu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Uu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Uu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Uu, t, e);
    }
    static $() {
        return [
            "GetChangeCodeownersApplicationResponse|1 snapshot #0|2 changed_paths #1*|3 requirement_groups #2*|4 undeterminable #3",
            ku,
            xu,
            Du,
            Qu
        ];
    }
}
class Qu extends Uo {
    constructor(t){
        super(), this.detail = "", this.remediation = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qu, t, e);
    }
    static $() {
        return [
            "ChangeCodeownersUndeterminable|1 detail 9|2 remediation 9"
        ];
    }
}
class Mu extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mu, t, e);
    }
    static $() {
        return [
            "GetChangeStackRequest|1 change #0",
            na
        ];
    }
}
class Ou extends Uo {
    constructor(t){
        super(), this.changeId = "", this.headSha = "", this.recordedBaseSha = "", this.rootBaseRef = "", this.parentRelation = Ko.UNSPECIFIED, this.recommendedAction = Vo.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ou).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ou).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ou).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ou, t, e);
    }
    static $() {
        return [
            "StackMemberState|1 change_id 9|2 head_sha 9|3 recorded_base_sha 9|4 root_base_ref 9|5 parent_head_sha 9?|6 parent_relation #0|7 recommended_action #1",
            Ko,
            Vo
        ];
    }
}
class Fu extends Uo {
    constructor(t){
        super(), this.changes = [], this.convergenceConflictedPaths = [], this.memberStates = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fu, t, e);
    }
    static $() {
        return [
            "GetChangeStackResponse|1 changes #0*|6 stack_id 9?|2 convergence_state 9?|3 convergence_conflicted_change_number 4?|4 convergence_conflicted_paths 9*|5 convergence_blocked_reason 9?|7 member_states #1*",
            Xo,
            Ou
        ];
    }
}
class Lu extends Uo {
    constructor(t){
        super(), this.changeNumbers = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Lu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Lu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Lu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Lu, t, e);
    }
    static $() {
        return [
            "GetProjectedLatestVersionsRequest|1 identifier #0|2 change_numbers 4*",
            o
        ];
    }
}
class $u extends Uo {
    constructor(t){
        super(), this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $u).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $u).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $u).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($u, t, e);
    }
    static $() {
        return [
            "ProjectedLatestVersionEntry|1 change_number 4|2 projected_latest_version #0",
            Zo
        ];
    }
}
class Gu extends Uo {
    constructor(t){
        super(), this.entries = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gu, t, e);
    }
    static $() {
        return [
            "GetProjectedLatestVersionsResponse|1 entries #0*",
            $u
        ];
    }
}
class Hu extends Uo {
    constructor(t){
        super(), this.versionNumber = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hu, t, e);
    }
    static $() {
        return [
            "ListChangeCommitsRequest|1 change #0|2 version_number 4|3 max_commits 13?",
            na
        ];
    }
}
class Ku extends Uo {
    constructor(t){
        super(), this.commits = [], this.mergeBaseSha = "", this.truncated = !1, this.actorDisplaysBySha = {}, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ku).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ku).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ku).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ku, t, e);
    }
    static $() {
        return [
            "ListChangeCommitsResponse|1 commits #0*|2 merge_base_sha 9|3 truncated 8|4 actor_displays_by_sha 9,#1",
            hs,
            Vu
        ];
    }
}
class Vu extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vu, t, e);
    }
    static $() {
        return [
            "CommitActorDisplays|1 author #0|2 committer #0",
            zu
        ];
    }
}
class zu extends Uo {
    constructor(t){
        super(), this.displayName = "", this.avatarUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zu, t, e);
    }
    static $() {
        return [
            "CommitActorDisplay|1 display_name 9|2 avatar_url 9"
        ];
    }
}
class Wu extends Uo {
    constructor(t){
        super(), this.file = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wu, t, e);
    }
    static $() {
        return [
            "ListChangesRequest|1 identifier #0|2 status 9?|3 cursor 4?|4 limit 5?|5 author_id 9?|6 base_ref 9?|7 head_ref 9?|8 file 9*",
            o
        ];
    }
}
class Yu extends Uo {
    constructor(t){
        super(), this.headRef = "", this.includeInactive = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yu, t, e);
    }
    static $() {
        return [
            "ListChangesByHeadRefRequest|1 identifier #0|2 head_ref 9|3 include_inactive 8",
            o
        ];
    }
}
class ju extends Uo {
    constructor(t){
        super(), this.changes = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ju).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ju).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ju).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ju, t, e);
    }
    static $() {
        return [
            "ListChangesByHeadRefResponse|1 changes #0*",
            Xo
        ];
    }
}
class Xu extends Uo {
    constructor(t){
        super(), this.sha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xu, t, e);
    }
    static $() {
        return [
            "GetCommitReferencesRequest|1 identifier #0|2 sha 9",
            o
        ];
    }
}
class Zu extends Uo {
    constructor(t){
        super(), this.branchName = "", this.pullRequestNumber = n.protoInt64.zero, this.status = Qo.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zu, t, e);
    }
    static $() {
        return [
            "CommitReference|1 branch_name 9|2 pull_request_number 3|3 status #0",
            Qo
        ];
    }
}
class tc extends Uo {
    constructor(t){
        super(), this.references = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tc, t, e);
    }
    static $() {
        return [
            "GetCommitReferencesResponse|1 references #0*",
            Zu
        ];
    }
}
class ec extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ec).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ec).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ec).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ec, t, e);
    }
    static $() {
        return [
            "ChangeWithLatestVersion|1 change #0|2 latest_version #1?",
            Xo,
            Zo
        ];
    }
}
class rc extends Uo {
    constructor(t){
        super(), this.changeNumbers = [], this.headRefs = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rc, t, e);
    }
    static $() {
        return [
            "BatchGetChangesRequest|1 identifier #0|2 change_numbers 4*|3 head_refs 9*",
            o
        ];
    }
}
class nc extends Uo {
    constructor(t){
        super(), this.changes = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nc, t, e);
    }
    static $() {
        return [
            "BatchGetChangesResponse|1 changes #0*",
            ec
        ];
    }
}
class sc extends Uo {
    constructor(t){
        super(), this.changes = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sc, t, e);
    }
    static $() {
        return [
            "ListChangesResponse|1 changes #0*|2 next_cursor 4?",
            ec
        ];
    }
}
class ic extends Uo {
    constructor(t){
        super(), this.repos = [], this.limit = 0, this.sortField = zo.UNSPECIFIED, this.sortIsAsc = !1, this.skipTotalCount = !1, this.changeIds = [], this.dropUnauthorizedRepos = !1, this.viewerScoped = !1, this.includeStackMembers = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ic).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ic).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ic).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ic, t, e);
    }
    static $() {
        return [
            "GetSectionOfChangesRequest|1 repos #0*|2 filter #1|3 cursor 9?|4 limit 5|5 sort_field #2|6 sort_is_asc 8|7 skip_total_count 8|8 change_ids 9*|10 drop_unauthorized_repos 8|9 viewer_scoped 8|11 include_stack_members 8",
            o,
            Ac,
            zo
        ];
    }
}
class oc extends Uo {
    constructor(t){
        super(), this.changes = [], this.hasMore = !1, this.totalCount = 0, this.droppedRepoCount = 0, this.stackMembers = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new oc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new oc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new oc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(oc, t, e);
    }
    static $() {
        return [
            "GetSectionOfChangesResponse|1 changes #0*|2 has_more 8|3 total_count 5|4 dropped_repo_count 5|5 stack_members #1*",
            hc,
            ac
        ];
    }
}
class ac extends Uo {
    constructor(t){
        super(), this.id = "", this.number = 0, this.stackId = "", this.baseRef = "", this.status = Qo.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ac).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ac).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ac).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ac, t, e);
    }
    static $() {
        return [
            "SectionOfChangesStackMember|1 id 9|2 number 5|3 stack_id 9|4 parent_change_id 9?|5 base_ref 9|6 status #0",
            Qo
        ];
    }
}
class uc extends Uo {
    constructor(t){
        super(), this.query = "", this.limit = 0, this.includeLabels = !1, this.includeAssignees = !1, this.includeReviewRequests = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new uc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new uc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new uc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(uc, t, e);
    }
    static $() {
        return [
            "SearchChangesRequest|1 identifier #0?|2 query 9|3 cursor 9?|4 limit 5|5 include_labels 8|6 include_assignees 8|7 include_review_requests 8",
            o
        ];
    }
}
class cc extends Uo {
    constructor(t){
        super(), this.changes = [], this.hasMore = !1, this.totalCount = 0, this.totalCountIsLowerBound = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cc, t, e);
    }
    static $() {
        return [
            "SearchChangesResponse|1 changes #0*|2 has_more 8|3 next_cursor 9?|4 total_count 5|5 total_count_is_lower_bound 8",
            hc
        ];
    }
}
class lc extends Uo {
    constructor(t){
        super(), this.repos = [], this.filters = [], this.dropUnauthorizedRepos = !1, this.viewerScoped = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lc, t, e);
    }
    static $() {
        return [
            "CountSectionsOfChangesRequest|1 repos #0*|2 filters #1*|3 drop_unauthorized_repos 8|4 viewer_scoped 8",
            o,
            Ac
        ];
    }
}
class mc extends Uo {
    constructor(t){
        super(), this.counts = [], this.droppedRepoCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mc, t, e);
    }
    static $() {
        return [
            "CountSectionsOfChangesResponse|1 counts 5*|2 dropped_repo_count 5"
        ];
    }
}
class dc extends Uo {
    constructor(t){
        super(), this.cursorUserIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dc, t, e);
    }
    static $() {
        return [
            "ResolveSectionPersonalBotAuthorsRequest|1 cursor_user_ids 3*"
        ];
    }
}
class fc extends Uo {
    constructor(t){
        super(), this.countsAsOwner = !1, this.authors = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fc, t, e);
    }
    static $() {
        return [
            "ResolveSectionPersonalBotAuthorsResponse|1 counts_as_owner 8|2 authors #0*",
            pc
        ];
    }
}
class pc extends Uo {
    constructor(t){
        super(), this.cursorUserId = n.protoInt64.zero, this.serviceAccountIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pc, t, e);
    }
    static $() {
        return [
            "SectionPersonalBotAuthor|1 cursor_user_id 3|2 service_account_ids 9*"
        ];
    }
}
class hc extends Uo {
    constructor(t){
        super(), this.id = "", this.number = 0, this.repoId = "", this.title = "", this.description = "", this.headRef = "", this.baseRef = "", this.status = Wo.UNSPECIFIED, this.headSha = "", this.baseSha = "", this.additions = 0, this.deletions = 0, this.changedFiles = 0, this.versionCount = 0, this.reviewers = [], this.totalThreadCount = 0, this.unresolvedThreadCount = 0, this.repoNamespace = "", this.repoName = "", this.labels = [], this.assignees = [], this.reviewRequests = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hc, t, e);
    }
    static $() {
        return [
            "SectionOfChanges|1 id 9|2 number 5|3 repo_id 9|4 title 9|5 description 9|6 head_ref 9|7 base_ref 9|9 status #0|10 created_at #1|11 updated_at #1|12 merged_at #1?|13 closed_at #1?|14 head_sha 9|15 base_sha 9|16 additions 5|17 deletions 5|18 changed_files 5|19 version_count 5|20 review_decision 9?|21 reviewers #2*|22 total_thread_count 5|23 unresolved_thread_count 5|24 parent_change_id 9?|25 stack_id 9?|26 repo_namespace 9|27 repo_name 9|31 author #3|32 viewer_last_viewed_at #1?|33 discussion_comment_count 5?|34 agent_wrote 8?|35 labels #4*|36 assignees #5*|37 review_requests #5*",
            Wo,
            n.Timestamp,
            gc,
            No,
            yu,
            Ya
        ];
    }
}
class gc extends Uo {
    constructor(t){
        super(), this.verdict = Yo.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesReviewer|2 verdict #0|3 reviewed_at #1|7 author #2",
            Yo,
            n.Timestamp,
            No
        ];
    }
}
class Ac extends Uo {
    constructor(t){
        super(), this.kind = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ac).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ac).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ac).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ac, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilter|1 and #0 kind|2 or #1 kind|3 not #2 kind|4 consolidated_status #3 kind|5 title_contains #4 kind|6 description_contains #5 kind|7 merge_base #6 kind|8 trunk #7 kind|9 last_updated #8 kind|10 open_review_request_for #9 kind|11 reopened_review_request_for #10 kind|12 closed_review_request_from #11 kind|13 includes_direct_reviewer #12 kind|14 author_is #13 kind|15 review_status #14 kind|16 approved_by #15 kind|17 includes_past_reviewer #16 kind|18 has_label #17 kind|19 num_files_changed #18 kind|20 num_lines_changed #19 kind|21 includes_reviewer #20 kind|22 includes_assignee #21 kind|23 includes_direct_team_reviewer #22 kind|24 mentions #23 kind|25 merged_within #24 kind|100 unsupported #25 kind",
            _c,
            yc,
            wc,
            Sc,
            Jc,
            Bc,
            Ec,
            Ic,
            Cc,
            bc,
            kc,
            vc,
            qc,
            Rc,
            Pc,
            Tc,
            xc,
            Nc,
            Dc,
            Uc,
            Qc,
            Oc,
            Fc,
            Lc,
            $c,
            Gc
        ];
    }
}
class _c extends Uo {
    constructor(t){
        super(), this.exprs = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _c).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _c).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _c).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_c, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterAnd|1 exprs #0*",
            Ac
        ];
    }
}
class yc extends Uo {
    constructor(t){
        super(), this.exprs = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterOr|1 exprs #0*",
            Ac
        ];
    }
}
class wc extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterNot|1 expr #0",
            Ac
        ];
    }
}
class Sc extends Uo {
    constructor(t){
        super(), this.status = Wo.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterConsolidatedStatus|1 status #0",
            Wo
        ];
    }
}
class Jc extends Uo {
    constructor(t){
        super(), this.text = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterTitleContains|1 text 9"
        ];
    }
}
class Bc extends Uo {
    constructor(t){
        super(), this.text = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterDescriptionContains|1 text 9"
        ];
    }
}
class Ec extends Uo {
    constructor(t){
        super(), this.mergeBase = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ec).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ec).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ec).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ec, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterMergeBase|1 merge_base 9"
        ];
    }
}
class Ic extends Uo {
    constructor(t){
        super(), this.trunk = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ic).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ic).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ic).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ic, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterTrunk|1 trunk 9"
        ];
    }
}
class Cc extends Uo {
    constructor(t){
        super(), this.hours = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterLastUpdated|1 hours 5"
        ];
    }
}
class bc extends Uo {
    constructor(t){
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterOpenReviewRequestFor|2 cursor_user_id 3"
        ];
    }
}
class kc extends Uo {
    constructor(t){
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new kc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new kc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new kc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(kc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterReopenedReviewRequestFor|2 cursor_user_id 3"
        ];
    }
}
class vc extends Uo {
    constructor(t){
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterClosedReviewRequestFrom|2 cursor_user_id 3"
        ];
    }
}
class qc extends Uo {
    constructor(t){
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterIncludesDirectReviewer|2 cursor_user_id 3"
        ];
    }
}
class Rc extends Uo {
    constructor(t){
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterAuthorIs|2 cursor_user_id 3"
        ];
    }
}
class Pc extends Uo {
    constructor(t){
        super(), this.state = jo.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterReviewStatus|1 state #0",
            jo
        ];
    }
}
class Tc extends Uo {
    constructor(t){
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterApprovedBy|2 cursor_user_id 3"
        ];
    }
}
class xc extends Uo {
    constructor(t){
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterIncludesPastReviewer|2 cursor_user_id 3"
        ];
    }
}
class Nc extends Uo {
    constructor(t){
        super(), this.name = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterHasLabel|1 name 9"
        ];
    }
}
class Dc extends Uo {
    constructor(t){
        super(), this.numFiles = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterNumFilesChanged|1 num_files 5"
        ];
    }
}
class Uc extends Uo {
    constructor(t){
        super(), this.numLines = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Uc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Uc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Uc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Uc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterNumLinesChanged|1 num_lines 5"
        ];
    }
}
class Qc extends Uo {
    constructor(t){
        super(), this.groupPublicIds = [], this.cursorUserId = n.protoInt64.zero, this.groupMembers = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterIncludesReviewer|2 group_public_ids 9*|3 cursor_user_id 3|4 group_members #0*",
            Mc
        ];
    }
}
class Mc extends Uo {
    constructor(t){
        super(), this.groupPublicId = "", this.cursorUserIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterReviewerGroupMembers|1 group_public_id 9|2 cursor_user_ids 3*"
        ];
    }
}
class Oc extends Uo {
    constructor(t){
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Oc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Oc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Oc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Oc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterIncludesAssignee|2 cursor_user_id 3"
        ];
    }
}
class Fc extends Uo {
    constructor(t){
        super(), this.slug = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterIncludesDirectTeamReviewer|1 slug 9"
        ];
    }
}
class Lc extends Uo {
    constructor(t){
        super(), this.username = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Lc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Lc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Lc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Lc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterMentions|1 username 9"
        ];
    }
}
class $c extends Uo {
    constructor(t){
        super(), this.hours = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $c).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $c).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $c).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($c, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterMergedWithin|1 hours 5"
        ];
    }
}
class Gc extends Uo {
    constructor(t){
        super(), this.kind = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gc, t, e);
    }
    static $() {
        return [
            "SectionOfChangesFilterUnsupported|1 kind 9"
        ];
    }
}
class Hc extends Uo {
    constructor(t){
        super(), this.verdict = Fo.UNSPECIFIED, this.body = "", this.versionNumber = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hc, t, e);
    }
    static $() {
        return [
            "StartReviewRequest|1 change #0|2 verdict #1|3 body 9|4 version_number 4",
            na,
            Fo
        ];
    }
}
class Kc extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Kc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Kc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Kc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Kc, t, e);
    }
    static $() {
        return [
            "StartReviewResponse|1 review #0",
            va
        ];
    }
}
class Vc extends Uo {
    constructor(t){
        super(), this.reviewId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vc, t, e);
    }
    static $() {
        return [
            "SubmitReviewRequest|1 change #0|2 review_id 9|3 verdict #1?|4 body 9?",
            na,
            Fo
        ];
    }
}
class zc extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zc, t, e);
    }
    static $() {
        return [
            "SubmitReviewResponse|1 review #0",
            va
        ];
    }
}
class Wc extends Uo {
    constructor(t){
        super(), this.reviewId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wc, t, e);
    }
    static $() {
        return [
            "DiscardPendingReviewRequest|1 change #0|2 review_id 9",
            na
        ];
    }
}
class Yc extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yc, t, e);
    }
    static $() {
        return [
            "DiscardPendingReviewResponse"
        ];
    }
}
class jc extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new jc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new jc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new jc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(jc, t, e);
    }
    static $() {
        return [
            "GetPendingReviewRequest|1 change #0",
            na
        ];
    }
}
class Xc extends Uo {
    constructor(t){
        super(), this.threadCount = 0, this.hasPendingComments = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xc, t, e);
    }
    static $() {
        return [
            "GetPendingReviewResponse|1 review #0?|2 thread_count 13|3 has_pending_comments 8",
            va
        ];
    }
}
class Zc extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zc, t, e);
    }
    static $() {
        return [
            "CheckChangeCreationAccessRequest|1 identifier #0",
            o
        ];
    }
}
class tl extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tl, t, e);
    }
    static $() {
        return [
            "CheckChangeCreationAccessResponse"
        ];
    }
}
class el extends Uo {
    constructor(t){
        super(), this.gate = "", this.headSha = "", this.verdict = "", this.summary = "", this.findings = [], this.gateFields = {}, this.links = [], this.rubricPath = "", this.lane = "", this.model = "", this.agent = "", this.transcriptUrl = "", this.transcriptId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new el).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new el).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new el).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(el, t, e);
    }
    static $() {
        return [
            "SubmitPullRequestGateReportRequest|1 change #0|2 gate 9|3 head_sha 9|4 verdict 9|5 summary 9|6 findings #1*|7 gate_fields 9,9|8 links #2*|9 rubric_path 9|10 lane 9|11 model 9|12 agent 9|13 transcript_url 9|14 transcript_id 9",
            na,
            il,
            ol
        ];
    }
}
class rl extends Uo {
    constructor(t){
        super(), this.headSha = "", this.mediaType = "", this.bodyGzip = new Uint8Array(0), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rl, t, e);
    }
    static $() {
        return [
            "UploadPullRequestGateTranscriptRequest|1 change #0|2 head_sha 9|3 media_type 9|4 body_gzip 12",
            na
        ];
    }
}
class nl extends Uo {
    constructor(t){
        super(), this.outcome = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nl, t, e);
    }
    static $() {
        return [
            "UploadPullRequestGateTranscriptResponse|1 uploaded #0 outcome|2 refused #1 outcome",
            sl,
            ul
        ];
    }
}
class sl extends Uo {
    constructor(t){
        super(), this.id = "", this.sha256 = "", this.byteSize = n.protoInt64.zero, this.mediaType = "", this.purged = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sl, t, e);
    }
    static $() {
        return [
            "PullRequestGateTranscript|1 id 9|2 sha256 9|3 byte_size 4|4 media_type 9|5 purged 8"
        ];
    }
}
class il extends Uo {
    constructor(t){
        super(), this.id = "", this.severity = "", this.status = "", this.title = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new il).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new il).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new il).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(il, t, e);
    }
    static $() {
        return [
            "PullRequestGateReportFinding|1 id 9|2 severity 9|3 status 9|4 title 9|5 path 9?|6 line 13?"
        ];
    }
}
class ol extends Uo {
    constructor(t){
        super(), this.label = "", this.url = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ol).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ol).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ol).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ol, t, e);
    }
    static $() {
        return [
            "PullRequestGateReportLink|1 label 9|2 url 9"
        ];
    }
}
class al extends Uo {
    constructor(t){
        super(), this.outcome = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new al).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new al).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new al).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(al, t, e);
    }
    static $() {
        return [
            "SubmitPullRequestGateReportResponse|1 submitted #0 outcome|2 refused #1 outcome",
            cl,
            ul
        ];
    }
}
class ul extends Uo {
    constructor(t){
        super(), this.reason = "", this.message = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ul).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ul).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ul).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ul, t, e);
    }
    static $() {
        return [
            "PullRequestGateReportRefusal|1 reason 9|2 message 9"
        ];
    }
}
class cl extends Uo {
    constructor(t){
        super(), this.id = "", this.gate = "", this.verdict = "", this.headSha = "", this.baseSha = "", this.client = "", this.summary = "", this.findings = [], this.proof = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cl, t, e);
    }
    static $() {
        return [
            "PullRequestGateReport|1 id 9|2 gate 9|3 verdict 9|4 head_sha 9|5 base_sha 9|6 client 9|7 lane 9?|8 model 9?|9 agent 9?|10 run_id 9?|11 transcript_url 9?|12 summary 9|13 findings #0*|14 created_at #1|15 transcript #2?|16 proof 9|17 audit #3?",
            il,
            n.Timestamp,
            sl,
            ll
        ];
    }
}
class ll extends Uo {
    constructor(t){
        super(), this.status = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ll).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ll).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ll).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ll, t, e);
    }
    static $() {
        return [
            "PullRequestGateReportAudit|1 status 9|2 reason 9?|3 completed_at #0?",
            n.Timestamp
        ];
    }
}
class ml extends Uo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ml).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ml).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ml).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ml, t, e);
    }
    static $() {
        return [
            "ListPullRequestGateReportsRequest|1 change #0|2 head_sha 9?",
            na
        ];
    }
}
class dl extends Uo {
    constructor(t){
        super(), this.headSha = "", this.requiredGates = [], this.reports = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dl, t, e);
    }
    static $() {
        return [
            "ListPullRequestGateReportsResponse|1 head_sha 9|2 required_gates 9*|3 gates_file_unavailable_reason 9?|4 reports #0*",
            cl
        ];
    }
}
const fl = "origin.v1.";
class pl extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return fl;
    }
}
var hl = (0, s.QT)(n.proto3, fl, "ImportedGithubPullRequestState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "OPEN"
    ],
    [
        2,
        "CLOSED"
    ],
    [
        3,
        "MERGED"
    ]
], 1), gl = (0, s.QT)(n.proto3, fl, "ImportedGithubReviewVerdict", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "APPROVE"
    ],
    [
        2,
        "REQUEST_CHANGES"
    ],
    [
        3,
        "COMMENT"
    ]
], 1), Al = (0, s.QT)(n.proto3, fl, "ImportedGithubCommentSide", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "LEFT"
    ],
    [
        2,
        "RIGHT"
    ]
], 1);
class _l extends pl {
    constructor(t){
        super(), this.allowDefaultActorFallback = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _l).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _l).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _l).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_l, t, e);
    }
    static $() {
        return [
            "ImportGithubPullRequestRequest|1 identifier #0|2 pull_request #1|3 allow_default_actor_fallback 8",
            o,
            wl
        ];
    }
}
class yl extends pl {
    constructor(t){
        super(), this.changeId = "", this.number = 0, this.versionsCreated = 0, this.reviewsCreated = 0, this.threadsCreated = 0, this.commentsCreated = 0, this.timelineEventsCreated = 0, this.warnings = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yl, t, e);
    }
    static $() {
        return [
            "ImportGithubPullRequestResponse|1 change_id 9|2 number 5|3 versions_created 5|4 reviews_created 5|5 threads_created 5|6 comments_created 5|7 timeline_events_created 5|8 warnings 9*"
        ];
    }
}
class wl extends pl {
    constructor(t){
        super(), this.number = 0, this.githubNodeId = "", this.title = "", this.description = "", this.state = hl.UNSPECIFIED, this.draft = !1, this.authorLogin = "", this.headRef = "", this.headSha = "", this.baseRef = "", this.baseSha = "", this.mergeCommitSha = "", this.mergedByLogin = "", this.reviews = [], this.reviewComments = [], this.issueComments = [], this.timelineEvents = [], this.actors = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wl, t, e);
    }
    static $() {
        return [
            "ImportedGithubPullRequest|1 number 5|2 github_node_id 9|3 title 9|4 description 9|5 state #0|6 draft 8|7 author_login 9|8 head_ref 9|9 head_sha 9|10 base_ref 9|11 base_sha 9|12 created_at #1|13 merged_at #1?|14 closed_at #1?|15 merge_commit_sha 9|16 merged_by_login 9|17 reviews #2*|18 review_comments #3*|19 issue_comments #4*|20 timeline_events #5*|21 actors #6*",
            hl,
            n.Timestamp,
            Jl,
            Bl,
            El,
            Il,
            Sl
        ];
    }
}
class Sl extends pl {
    constructor(t){
        super(), this.login = "", this.githubUserNodeId = "", this.githubUserDatabaseId = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sl, t, e);
    }
    static $() {
        return [
            "ImportedGithubActor|1 login 9|2 github_user_node_id 9|3 github_user_database_id 3"
        ];
    }
}
class Jl extends pl {
    constructor(t){
        super(), this.githubNodeId = "", this.authorLogin = "", this.verdict = gl.UNSPECIFIED, this.body = "", this.commitSha = "", this.dismissedByLogin = "", this.dismissalMessage = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jl, t, e);
    }
    static $() {
        return [
            "ImportedGithubReview|1 github_node_id 9|2 author_login 9|3 verdict #0|4 body 9|5 commit_sha 9|6 submitted_at #1|7 dismissed_at #1?|8 dismissed_by_login 9|9 dismissal_message 9",
            gl,
            n.Timestamp
        ];
    }
}
class Bl extends pl {
    constructor(t){
        super(), this.githubNodeId = "", this.reviewGithubNodeId = "", this.inReplyToGithubNodeId = "", this.authorLogin = "", this.body = "", this.path = "", this.commitSha = "", this.side = Al.UNSPECIFIED, this.startLine = 0, this.endLine = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bl, t, e);
    }
    static $() {
        return [
            "ImportedGithubReviewComment|1 github_node_id 9|2 review_github_node_id 9|3 in_reply_to_github_node_id 9|4 author_login 9|5 body 9|6 path 9|7 commit_sha 9|8 side #0|9 start_line 5|10 end_line 5|11 created_at #1",
            Al,
            n.Timestamp
        ];
    }
}
class El extends pl {
    constructor(t){
        super(), this.githubNodeId = "", this.authorLogin = "", this.body = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new El).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new El).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new El).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(El, t, e);
    }
    static $() {
        return [
            "ImportedGithubIssueComment|1 github_node_id 9|2 author_login 9|3 body 9|4 created_at #0",
            n.Timestamp
        ];
    }
}
class Il extends pl {
    constructor(t){
        super(), this.githubEvent = "", this.actorLogin = "", this.label = "", this.subjectLogin = "", this.previousTitle = "", this.newTitle = "", this.previousSha = "", this.newSha = "", this.previousBaseRef = "", this.newBaseRef = "", this.dismissedReviewGithubNodeId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Il).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Il).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Il).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Il, t, e);
    }
    static $() {
        return [
            "ImportedGithubTimelineEvent|1 github_event 9|2 actor_login 9|3 created_at #0|4 label 9|5 subject_login 9|6 previous_title 9|7 new_title 9|8 previous_sha 9|9 new_sha 9|10 previous_base_ref 9|11 new_base_ref 9|12 dismissed_review_github_node_id 9",
            n.Timestamp
        ];
    }
}
const Cl = "origin.v1.";
class bl extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return Cl;
    }
}
var kl = (0, s.QT)(n.proto3, Cl, "MergeConflictResolutionState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "UNAVAILABLE"
    ],
    [
        2,
        "GENERATING"
    ],
    [
        3,
        "READY"
    ],
    [
        4,
        "NOT_CONFIDENT"
    ],
    [
        5,
        "APPLIED"
    ]
], 1), vl = (0, s.QT)(n.proto3, Cl, "MergeConflictResolutionStaleCause", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "BASE_MOVED"
    ],
    [
        2,
        "HEAD_MOVED"
    ]
], 1), ql = (0, s.QT)(n.proto3, Cl, "MergeConflictResolutionHunkKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "OURS"
    ],
    [
        2,
        "THEIRS"
    ],
    [
        3,
        "BASE"
    ],
    [
        4,
        "UNION"
    ],
    [
        5,
        "UNION_REVERSED"
    ],
    [
        6,
        "DROP"
    ],
    [
        7,
        "MERGED_LINES"
    ],
    [
        8,
        "MERGED_TOKENS"
    ],
    [
        9,
        "COMBINATION"
    ],
    [
        10,
        "FORMATTER_MERGE"
    ],
    [
        11,
        "STRUCTURAL"
    ],
    [
        12,
        "CONTENT_SIDE"
    ],
    [
        13,
        "KEEP_EDIT"
    ],
    [
        14,
        "KEEP_DELETION"
    ]
], 1), Rl = (0, s.QT)(n.proto3, Cl, "MergeConflictResolutionLineSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CONTEXT"
    ],
    [
        2,
        "OURS"
    ],
    [
        3,
        "THEIRS"
    ],
    [
        4,
        "BOTH"
    ],
    [
        5,
        "RESOLVED"
    ]
], 1), Pl = (0, s.QT)(n.proto3, Cl, "MergeConflictResolutionStepState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CLEAN"
    ],
    [
        2,
        "RESOLVED"
    ],
    [
        3,
        "UNRESOLVED"
    ]
], 1);
class Tl extends bl {
    constructor(t){
        super(), this.landingRef = "", this.landingSha = "", this.changes = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tl, t, e);
    }
    static $() {
        return [
            "MergeConflictResolutionPin|1 landing_ref 9|2 landing_sha 9|3 changes #0*",
            xl
        ];
    }
}
class xl extends bl {
    constructor(t){
        super(), this.changeNumber = n.protoInt64.zero, this.headSha = "", this.baseRef = "", this.recordedBaseSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xl, t, e);
    }
    static $() {
        return [
            "MergeConflictResolutionPinnedChange|1 change_number 4|2 head_sha 9|3 base_ref 9|4 recorded_base_sha 9"
        ];
    }
}
class Nl extends bl {
    constructor(t){
        super(), this.path = "", this.hunkCount = 0, this.resolutionDigest = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nl, t, e);
    }
    static $() {
        return [
            "MergeConflictResolutionFile|1 path 9|2 hunk_count 13|3 resolution_digest 9"
        ];
    }
}
class Dl extends bl {
    constructor(t){
        super(), this.text = "", this.source = Rl.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dl, t, e);
    }
    static $() {
        return [
            "MergeConflictResolutionPreviewLine|1 text 9|2 source #0",
            Rl
        ];
    }
}
class Ul extends bl {
    constructor(t){
        super(), this.path = "", this.startLine = 0, this.endLine = 0, this.kind = ql.UNSPECIFIED, this.needsPerson = !1, this.lines = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ul).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ul).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ul).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ul, t, e);
    }
    static $() {
        return [
            "MergeConflictResolutionPreviewHunk|1 path 9|2 start_line 13|3 end_line 13|4 kind #0|5 needs_person 8|6 lines #1*",
            ql,
            Dl
        ];
    }
}
class Ql extends bl {
    constructor(t){
        super(), this.changeNumber = n.protoInt64.zero, this.title = "", this.state = Pl.UNSPECIFIED, this.merged = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ql).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ql).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ql).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ql, t, e);
    }
    static $() {
        return [
            "MergeConflictResolutionStackStep|1 change_number 4|2 title 9|3 author #0|4 state #1|5 merged 8",
            No,
            Pl
        ];
    }
}
class Ml extends bl {
    constructor(t){
        super(), this.owningChangeNumber = n.protoInt64.zero, this.steps = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ml).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ml).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ml).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ml, t, e);
    }
    static $() {
        return [
            "MergeConflictResolutionStackPlan|1 owning_change_number 4|2 steps #0*",
            Ql
        ];
    }
}
class Ol extends bl {
    constructor(t){
        super(), this.state = kl.UNSPECIFIED, this.resolutionId = "", this.fileCount = 0, this.hunkCount = 0, this.reasonCode = "", this.reason = "", this.staleCause = vl.UNSPECIFIED, this.files = [], this.previewHunks = [], this.appliedCommitSha = "", this.undoAvailable = !1, this.appliedByViewer = !1, this.appliedOnChangeNumber = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ol).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ol).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ol).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ol, t, e);
    }
    static $() {
        return [
            "MergeConflictResolution|1 state #0|2 resolution_id 9|3 pin #1|4 file_count 13|5 hunk_count 13|6 reason_code 9|7 reason 9|8 stale_cause #2|9 files #3*|10 preview_hunks #4*|11 stack_plan #5?|12 applied_commit_sha 9|13 undo_available 8|14 applied_by_viewer 8|15 applied_by #6|16 applied_on_change_number 4",
            kl,
            Tl,
            vl,
            Nl,
            Ul,
            Ml,
            No
        ];
    }
}
class Fl extends bl {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fl, t, e);
    }
    static $() {
        return [
            "GetMergeConflictResolutionRequest|1 change #0",
            na
        ];
    }
}
class Ll extends bl {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ll).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ll).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ll).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ll, t, e);
    }
    static $() {
        return [
            "GetMergeConflictResolutionResponse|1 resolution #0",
            Ol
        ];
    }
}
class $l extends bl {
    constructor(t){
        super(), this.resolutionId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $l).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $l).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $l).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($l, t, e);
    }
    static $() {
        return [
            "ApplyMergeConflictResolutionRequest|1 change #0|2 resolution_id 9|3 expected #1",
            na,
            Tl
        ];
    }
}
class Gl extends bl {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gl, t, e);
    }
    static $() {
        return [
            "ApplyMergeConflictResolutionResponse|1 resolution #0",
            Ol
        ];
    }
}
class Hl extends bl {
    constructor(t){
        super(), this.resolutionId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hl, t, e);
    }
    static $() {
        return [
            "UndoMergeConflictResolutionRequest|1 change #0|2 resolution_id 9",
            na
        ];
    }
}
class Kl extends bl {
    constructor(t){
        super(), this.restoredHeadSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Kl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Kl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Kl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Kl, t, e);
    }
    static $() {
        return [
            "UndoMergeConflictResolutionResponse|1 resolution #0|2 restored_head_sha 9",
            Ol
        ];
    }
}
const Vl = "origin.v1.";
class zl extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return Vl;
    }
}
var Wl = (0, s.QT)(n.proto3, Vl, "CommentSide", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "LEFT"
    ],
    [
        2,
        "RIGHT"
    ]
], 1), Yl = (0, s.QT)(n.proto3, Vl, "CommentThreadPortingStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PORTED"
    ],
    [
        2,
        "ORPHANED"
    ]
], 1);
class jl extends zl {
    constructor(t){
        super(), this.id = "", this.changeId = "", this.versionId = "", this.versionNumber = n.protoInt64.zero, this.reviewId = "", this.path = "", this.side = Wl.UNSPECIFIED, this.startLine = 0, this.endLine = 0, this.externalId = "", this.comments = [], this.portedToVersionNumber = n.protoInt64.zero, this.portingStatus = Yl.UNSPECIFIED, this.portedPath = "", this.portedStartLine = 0, this.portedEndLine = 0, this.versionHeadSha = "", this.versionBaseSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new jl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new jl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new jl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(jl, t, e);
    }
    static $() {
        return [
            "CommentThread|1 id 9|2 change_id 9|3 version_id 9|4 version_number 4|5 review_id 9|6 resolved_at #0|8 path 9|9 side #1|10 start_line 13|11 end_line 13|12 external_id 9|13 created_at #0|14 updated_at #0|15 comments #2*|19 resolved_by #3|20 ported_to_version_number 4|21 porting_status #4|22 ported_path 9|23 ported_start_line 13|24 ported_end_line 13|25 version_head_sha 9|26 version_base_sha 9|27 version_created_at #0",
            n.Timestamp,
            Wl,
            Ta,
            No,
            Yl
        ];
    }
}
class Xl extends zl {
    constructor(t){
        super(), this.body = "", this.versionNumber = n.protoInt64.zero, this.path = "", this.side = Wl.UNSPECIFIED, this.startLine = 0, this.endLine = 0, this.reviewId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xl, t, e);
    }
    static $() {
        return [
            "CreateCommentThreadRequest|1 change #0|2 body 9|3 version_number 4|4 path 9|5 side #1|6 start_line 13|7 end_line 13|8 review_id 9",
            na,
            Wl
        ];
    }
}
class Zl extends zl {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zl).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zl).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zl).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zl, t, e);
    }
    static $() {
        return [
            "CreateCommentThreadResponse|1 thread #0",
            jl
        ];
    }
}
class tm extends zl {
    constructor(t){
        super(), this.versionNumber = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tm, t, e);
    }
    static $() {
        return [
            "ListCommentThreadsRequest|1 change #0|2 version_number 4",
            na
        ];
    }
}
class em extends zl {
    constructor(t){
        super(), this.threads = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new em).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new em).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new em).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(em, t, e);
    }
    static $() {
        return [
            "ListCommentThreadsResponse|1 threads #0*",
            jl
        ];
    }
}
class rm extends zl {
    constructor(t){
        super(), this.threadId = "", this.body = "", this.reviewId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rm, t, e);
    }
    static $() {
        return [
            "AddCommentToThreadRequest|1 change #0|2 thread_id 9|3 body 9|4 review_id 9",
            na
        ];
    }
}
class nm extends zl {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nm, t, e);
    }
    static $() {
        return [
            "AddCommentToThreadResponse|1 comment #0",
            Ta
        ];
    }
}
class sm extends zl {
    constructor(t){
        super(), this.threadId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sm, t, e);
    }
    static $() {
        return [
            "ResolveCommentThreadRequest|1 change #0|2 thread_id 9",
            na
        ];
    }
}
class im extends zl {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new im).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new im).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new im).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(im, t, e);
    }
    static $() {
        return [
            "ResolveCommentThreadResponse|1 thread #0",
            jl
        ];
    }
}
class om extends zl {
    constructor(t){
        super(), this.threadId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new om).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new om).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new om).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(om, t, e);
    }
    static $() {
        return [
            "ReopenCommentThreadRequest|1 change #0|2 thread_id 9",
            na
        ];
    }
}
class am extends zl {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new am).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new am).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new am).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(am, t, e);
    }
    static $() {
        return [
            "ReopenCommentThreadResponse|1 thread #0",
            jl
        ];
    }
}
class um extends zl {
    constructor(t){
        super(), this.commentId = "", this.body = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new um).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new um).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new um).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(um, t, e);
    }
    static $() {
        return [
            "UpdateCommentRequest|1 comment_id 9|2 body 9"
        ];
    }
}
class cm extends zl {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cm, t, e);
    }
    static $() {
        return [
            "UpdateCommentResponse|1 comment #0",
            Ta
        ];
    }
}
class lm extends zl {
    constructor(t){
        super(), this.commentId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lm, t, e);
    }
    static $() {
        return [
            "DeleteCommentRequest|1 comment_id 9"
        ];
    }
}
class mm extends zl {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mm, t, e);
    }
    static $() {
        return [
            "DeleteCommentResponse"
        ];
    }
}
class dm extends zl {
    constructor(t){
        super(), this.commentId = "", this.emoji = "", this.active = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dm, t, e);
    }
    static $() {
        return [
            "SetCommentReactionRequest|1 comment_id 9|2 emoji 9|3 active 8"
        ];
    }
}
class fm extends zl {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fm, t, e);
    }
    static $() {
        return [
            "SetCommentReactionResponse"
        ];
    }
}
class pm extends zl {
    constructor(t){
        super(), this.commentId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pm, t, e);
    }
    static $() {
        return [
            "ListCommentReactionsRequest|1 comment_id 9"
        ];
    }
}
class hm extends zl {
    constructor(t){
        super(), this.reactions = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hm, t, e);
    }
    static $() {
        return [
            "ListCommentReactionsResponse|1 reactions #0*",
            Na
        ];
    }
}
class gm extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class Am extends gm {
    constructor(t){
        super(), this.filePath = "", this.versionId = "", this.headCommitSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Am).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Am).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Am).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Am, t, e);
    }
    static $() {
        return [
            "MarkFileAsViewedRequest|1 change #0|2 file_path 9|3 version_id 9|4 head_commit_sha 9",
            na
        ];
    }
}
class _m extends gm {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _m).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _m).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _m).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_m, t, e);
    }
    static $() {
        return [
            "MarkFileAsViewedResponse"
        ];
    }
}
class ym extends gm {
    constructor(t){
        super(), this.filePath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ym).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ym).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ym).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ym, t, e);
    }
    static $() {
        return [
            "UnmarkFileAsViewedRequest|1 change #0|2 file_path 9",
            na
        ];
    }
}
class wm extends gm {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wm, t, e);
    }
    static $() {
        return [
            "UnmarkFileAsViewedResponse"
        ];
    }
}
class Sm extends gm {
    constructor(t){
        super(), this.directoryPath = "", this.filePaths = [], this.versionId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sm, t, e);
    }
    static $() {
        return [
            "MarkDirectoryAsViewedRequest|1 change #0|2 directory_path 9|3 file_paths 9*|4 version_id 9",
            na
        ];
    }
}
class Jm extends gm {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jm, t, e);
    }
    static $() {
        return [
            "MarkDirectoryAsViewedResponse"
        ];
    }
}
class Bm extends gm {
    constructor(t){
        super(), this.filePaths = [], this.versionId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bm, t, e);
    }
    static $() {
        return [
            "MarkAllFilesAsViewedRequest|1 change #0|2 file_paths 9*|3 version_id 9",
            na
        ];
    }
}
class Em extends gm {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Em).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Em).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Em).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Em, t, e);
    }
    static $() {
        return [
            "MarkAllFilesAsViewedResponse"
        ];
    }
}
class Im extends gm {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Im).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Im).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Im).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Im, t, e);
    }
    static $() {
        return [
            "UnmarkAllFilesAsViewedRequest|1 change #0",
            na
        ];
    }
}
class Cm extends gm {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cm, t, e);
    }
    static $() {
        return [
            "UnmarkAllFilesAsViewedResponse"
        ];
    }
}
class bm extends gm {
    constructor(t){
        super(), this.headCommitSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bm, t, e);
    }
    static $() {
        return [
            "ListFileViewedStatesRequest|1 change #0|2 head_commit_sha 9",
            na
        ];
    }
}
class km extends gm {
    constructor(t){
        super(), this.fileViewedStates = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new km).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new km).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new km).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(km, t, e);
    }
    static $() {
        return [
            "ListFileViewedStatesResponse|1 file_viewed_states #0*|2 head_version_id 9?",
            vm
        ];
    }
}
class vm extends gm {
    constructor(t){
        super(), this.filePath = "", this.versionId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vm, t, e);
    }
    static $() {
        return [
            "FileViewedState|1 file_path 9|2 version_id 9|3 stale 8?"
        ];
    }
}
const qm = "origin.v1.";
class Rm extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return qm;
    }
}
var Pm = (0, s.QT)(n.proto3, qm, "PullRequestViewedCursor", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "OPENED"
    ],
    [
        2,
        "TIMELINE"
    ]
], 1);
class Tm extends Rm {
    constructor(t){
        super(), this.cursor = Pm.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tm, t, e);
    }
    static $() {
        return [
            "MarkPullRequestAsViewedRequest|1 change #0|2 viewed_at #1|3 cursor #2",
            na,
            n.Timestamp,
            Pm
        ];
    }
}
class xm extends Rm {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xm, t, e);
    }
    static $() {
        return [
            "MarkPullRequestAsViewedResponse|1 viewed_at #0|2 timeline_viewed_at #0?",
            n.Timestamp
        ];
    }
}
class Nm extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class Dm extends Nm {
    constructor(t){
        super(), this.prUrl = "", this.headSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dm, t, e);
    }
    static $() {
        return [
            "GeneratedCodeTourStackMember|1 pr_url 9|2 head_sha 9"
        ];
    }
}
class Um extends Nm {
    constructor(t){
        super(), this.id = "", this.storageKey = "", this.result = "", this.machineGenerated = !1, this.updatedAtMs = n.protoInt64.zero, this.stackId = "", this.stackMembers = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Um).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Um).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Um).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Um, t, e);
    }
    static $() {
        return [
            "GeneratedCodeTour|1 id 9|2 storage_key 9|3 result 9|4 agentic_markdown 9?|5 agentic_error_message 9?|6 format_version 13?|7 prompt_revision 13?|8 machine_generated 8|9 updated_at_ms 3|10 stack_id 9|11 stack_members #0*",
            Dm
        ];
    }
}
class Qm extends Nm {
    constructor(t){
        super(), this.storageKey = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qm, t, e);
    }
    static $() {
        return [
            "GetGeneratedCodeTourRequest|1 change #0|2 storage_key 9",
            na
        ];
    }
}
class Mm extends Nm {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mm, t, e);
    }
    static $() {
        return [
            "GetGeneratedCodeTourResponse|1 tour #0?",
            Um
        ];
    }
}
class Om extends Nm {
    constructor(t){
        super(), this.storageKey = "", this.headSha = "", this.result = "", this.featureConfigurationJson = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Om).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Om).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Om).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Om, t, e);
    }
    static $() {
        return [
            "UpsertGeneratedCodeTourRequest|1 change #0|2 storage_key 9|3 head_sha 9|4 result 9|5 agentic_markdown 9?|6 agentic_error_message 9?|7 feature_configuration_json 9|8 expected_agentic_markdown_sha256 9?",
            na
        ];
    }
}
class Fm extends Nm {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fm, t, e);
    }
    static $() {
        return [
            "UpsertGeneratedCodeTourResponse|1 tour #0",
            Um
        ];
    }
}
class Lm extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class $m extends Lm {
    constructor(t){
        super(), this.id = "", this.changeId = "", this.repoUuid = "", this.changeNumber = n.protoInt64.zero, this.status = "", this.source = "", this.trunkBranch = "", this.consecutiveFailedAttempts = 0, this.dev = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $m).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $m).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $m).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($m, t, e);
    }
    static $() {
        return [
            "ChangeMergeWhenReady|1 id 9|2 change_id 9|3 repo_uuid 9|4 change_number 4|6 status 9|7 source 9|8 trunk_branch 9|9 lock_expires_at #0?|10 consecutive_failed_attempts 5|11 dev 8|12 repo_org 9?|13 repo_name 9?|14 enabled_by #1",
            n.Timestamp,
            No
        ];
    }
}
class Gm extends Lm {
    constructor(t){
        super(), this.trunkBranch = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gm, t, e);
    }
    static $() {
        return [
            "EnableChangeMergeWhenReadyRequest|1 change #0|2 trunk_branch 9|3 source 9?|4 dev 8?",
            na
        ];
    }
}
class Hm extends Lm {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hm, t, e);
    }
    static $() {
        return [
            "EnableChangeMergeWhenReadyResponse|1 record #0",
            $m
        ];
    }
}
class Km extends Lm {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Km).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Km).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Km).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Km, t, e);
    }
    static $() {
        return [
            "GetChangeMergeWhenReadyRequest|1 change #0|2 status 9?",
            na
        ];
    }
}
class Vm extends Lm {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vm, t, e);
    }
    static $() {
        return [
            "GetChangeMergeWhenReadyResponse|1 record #0?",
            $m
        ];
    }
}
class zm extends Lm {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zm, t, e);
    }
    static $() {
        return [
            "DisableChangeMergeWhenReadyRequest|1 change #0",
            na
        ];
    }
}
class Wm extends Lm {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wm).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wm).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wm).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wm, t, e);
    }
    static $() {
        return [
            "DisableChangeMergeWhenReadyResponse"
        ];
    }
}
const Ym = "origin.v1.";
var jm = (0, s.QT)(n.proto3, Ym, "CheckRunLifecycleStatus", [
    [
        0,
        "CHECK_RUN_LIFECYCLE_STATUS_UNSPECIFIED"
    ],
    [
        1,
        "queued"
    ],
    [
        2,
        "in_progress"
    ],
    [
        3,
        "completed"
    ],
    [
        4,
        "rerequested"
    ],
    [
        5,
        "failing"
    ]
]), Xm = (0, s.QT)(n.proto3, Ym, "CheckRunConclusion", [
    [
        0,
        "CHECK_RUN_CONCLUSION_UNSPECIFIED"
    ],
    [
        1,
        "success"
    ],
    [
        2,
        "failure"
    ],
    [
        3,
        "neutral"
    ],
    [
        4,
        "cancelled"
    ],
    [
        5,
        "skipped"
    ],
    [
        6,
        "timed_out"
    ],
    [
        7,
        "action_required"
    ],
    [
        8,
        "stale"
    ]
]);
const Zm = "origin.v1.";
class td extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return Zm;
    }
}
var ed = (0, s.QT)(n.proto3, Zm, "CommitCheckRollupState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NONE"
    ],
    [
        2,
        "SUCCESS"
    ],
    [
        3,
        "PENDING"
    ],
    [
        4,
        "FAILURE"
    ]
], 1), rd = (0, s.QT)(n.proto3, Zm, "CheckRunAnnotationLevel", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NOTICE"
    ],
    [
        2,
        "WARNING"
    ],
    [
        3,
        "FAILURE"
    ]
], 1), nd = (0, s.QT)(n.proto3, Zm, "MergeabilityScope", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "STACK"
    ],
    [
        2,
        "SINGLE_CHANGE"
    ]
], 1), sd = (0, s.QT)(n.proto3, Zm, "RestackStackMemberOutcome", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "OK"
    ],
    [
        2,
        "ALREADY_CURRENT"
    ],
    [
        3,
        "CONFLICT"
    ],
    [
        4,
        "SKIPPED"
    ]
], 1);
class id extends td {
    constructor(t){
        super(), this.sha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new id).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new id).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new id).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(id, t, e);
    }
    static $() {
        return [
            "GetCiStateRequest|1 identifier #0|2 sha 9|3 change_number 4?|4 version_number 4?|5 use_latest_version 8?|6 include_check_run_annotations 8?",
            o
        ];
    }
}
class od extends td {
    constructor(t){
        super(), this.checkRunGroups = [], this.missingRequiredChecks = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new od).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new od).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new od).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(od, t, e);
    }
    static $() {
        return [
            "GetCiStateResponse|1 check_run_groups #0*|2 missing_required_checks #1*|3 resolved_head_sha 9?",
            Sd,
            gd
        ];
    }
}
class ad extends td {
    constructor(t){
        super(), this.shas = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ad).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ad).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ad).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ad, t, e);
    }
    static $() {
        return [
            "BatchGetCommitCheckRollupsRequest|1 identifier #0|2 shas 9*",
            o
        ];
    }
}
class ud extends td {
    constructor(t){
        super(), this.sha = "", this.state = ed.UNSPECIFIED, this.successCount = 0, this.pendingCount = 0, this.failureCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ud).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ud).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ud).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ud, t, e);
    }
    static $() {
        return [
            "CommitCheckRollup|1 sha 9|2 state #0|3 success_count 13|4 pending_count 13|5 failure_count 13",
            ed
        ];
    }
}
class cd extends td {
    constructor(t){
        super(), this.rollups = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cd, t, e);
    }
    static $() {
        return [
            "BatchGetCommitCheckRollupsResponse|1 rollups #0*",
            ud
        ];
    }
}
class ld extends td {
    constructor(t){
        super(), this.checkRunId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ld).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ld).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ld).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ld, t, e);
    }
    static $() {
        return [
            "GetCheckRunRequest|1 identifier #0|2 check_run_id 9",
            o
        ];
    }
}
class md extends td {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new md).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new md).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new md).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(md, t, e);
    }
    static $() {
        return [
            "GetCheckRunResponse|1 check_run #0",
            yd
        ];
    }
}
class dd extends td {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dd, t, e);
    }
    static $() {
        return [
            "ListRepoCheckSourcesRequest|1 identifier #0",
            o
        ];
    }
}
class fd extends td {
    constructor(t){
        super(), this.runKey = "", this.name = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fd, t, e);
    }
    static $() {
        return [
            "RepoCheckSourceRun|1 run_key 9|2 name 9"
        ];
    }
}
class pd extends td {
    constructor(t){
        super(), this.groupKey = "", this.suiteName = "", this.runs = [], this.lastSeenAtUnixMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pd, t, e);
    }
    static $() {
        return [
            "RepoCheckSource|1 actor #0|2 group_key 9|3 suite_name 9|4 runs #1*|5 last_seen_at_unix_ms 3",
            Ad,
            fd
        ];
    }
}
class hd extends td {
    constructor(t){
        super(), this.sources = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hd, t, e);
    }
    static $() {
        return [
            "ListRepoCheckSourcesResponse|1 sources #0*",
            pd
        ];
    }
}
class gd extends td {
    constructor(t){
        super(), this.displayName = "", this.identityPath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gd, t, e);
    }
    static $() {
        return [
            "MissingRequiredCheck|1 display_name 9|2 identity_path 9"
        ];
    }
}
class Ad extends td {
    constructor(t){
        super(), this.kind = "", this.id = "", this.displayName = "", this.iconUrl = "", this.appId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ad).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ad).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ad).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ad, t, e);
    }
    static $() {
        return [
            "CheckRunActor|1 kind 9|2 id 9|3 display_name 9|5 icon_url 9|6 app_id 9"
        ];
    }
}
class _d extends td {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _d).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _d).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _d).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_d, t, e);
    }
    static $() {
        return [
            "CheckRunOutput|1 title 9?|2 summary 9?|3 text 9?"
        ];
    }
}
class yd extends td {
    constructor(t){
        super(), this.id = "", this.name = "", this.status = jm.CHECK_RUN_LIFECYCLE_STATUS_UNSPECIFIED, this.externalId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yd, t, e);
    }
    static $() {
        return [
            "CheckRunStatus|1 id 9|2 name 9|4 details_url 9?|5 status #0|6 conclusion #1?|7 started_at_unix_ms 3?|8 completed_at_unix_ms 3?|9 external_id 9|10 required 8?|11 output #2?|12 deadline_at_unix_ms 3?|13 is_rerequestable 8?|14 rerequested_at_unix_ms 3?|15 annotations #3?|16 base_sha 9?",
            jm,
            Xm,
            _d,
            wd
        ];
    }
}
class wd extends td {
    constructor(t){
        super(), this.annotations = [], this.truncated = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wd, t, e);
    }
    static $() {
        return [
            "CheckRunAnnotationBatch|1 annotations #0*|2 truncated 8",
            qd
        ];
    }
}
class Sd extends td {
    constructor(t){
        super(), this.id = "", this.name = "", this.checkRuns = [], this.externalId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sd, t, e);
    }
    static $() {
        return [
            "CheckRunGroup|1 id 9|2 name 9|4 details_url 9?|5 check_runs #0*|6 actor #1|7 external_id 9|8 base_sha 9?",
            yd,
            Ad
        ];
    }
}
class Jd extends td {
    constructor(t){
        super(), this.checkRunGroups = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jd, t, e);
    }
    static $() {
        return [
            "CiState|1 check_run_groups #0*",
            Sd
        ];
    }
}
class Bd extends td {
    constructor(t){
        super(), this.headSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bd, t, e);
    }
    static $() {
        return [
            "PostCheckRunRequest|1 identifier #0|2 head_sha 9|3 group #1|4 check #2",
            o,
            Ed,
            Id
        ];
    }
}
class Ed extends td {
    constructor(t){
        super(), this.key = "", this.name = "", this.externalId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ed).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ed).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ed).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ed, t, e);
    }
    static $() {
        return [
            "CheckRunGroupInput|1 key 9|2 name 9|3 external_id 9|4 details_url 9?"
        ];
    }
}
class Id extends td {
    constructor(t){
        super(), this.key = "", this.name = "", this.externalId = "", this.status = jm.CHECK_RUN_LIFECYCLE_STATUS_UNSPECIFIED, this.externalUpdatedAtUnixMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Id).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Id).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Id).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Id, t, e);
    }
    static $() {
        return [
            "CheckRunInput|1 key 9|2 name 9|3 external_id 9|4 status #0|5 conclusion #1?|6 external_updated_at_unix_ms 3|7 started_at_unix_ms 3?|8 completed_at_unix_ms 3?|10 details_url 9?|11 output #2?|12 deadline_at_unix_ms 3?|13 is_rerequestable 8?",
            jm,
            Xm,
            _d
        ];
    }
}
class Cd extends td {
    constructor(t){
        super(), this.repoId = "", this.sha = "", this.checkRunGroupId = "", this.checkRunId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cd, t, e);
    }
    static $() {
        return [
            "PostCheckRunResponse|1 repo_id 9|2 sha 9|3 check_run_group_id 9|4 check_run_id 9"
        ];
    }
}
class bd extends td {
    constructor(t){
        super(), this.startColumn = 0, this.endColumn = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bd, t, e);
    }
    static $() {
        return [
            "CheckRunAnnotationColumnRange|1 start_column 5|2 end_column 5"
        ];
    }
}
class kd extends td {
    constructor(t){
        super(), this.path = "", this.startLine = 0, this.endLine = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new kd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new kd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new kd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(kd, t, e);
    }
    static $() {
        return [
            "CheckRunAnnotationLocation|1 path 9|2 start_line 5|3 end_line 5|4 columns #0",
            bd
        ];
    }
}
class vd extends td {
    constructor(t){
        super(), this.annotationLevel = rd.UNSPECIFIED, this.message = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vd, t, e);
    }
    static $() {
        return [
            "CheckRunAnnotationInput|4 annotation_level #0|5 message 9|8 title 9?|9 raw_details 9?|11 location #1",
            rd,
            kd
        ];
    }
}
class qd extends td {
    constructor(t){
        super(), this.id = "", this.checkRunId = "", this.annotationLevel = rd.UNSPECIFIED, this.message = "", this.createdAtUnixMs = n.protoInt64.zero, this.updatedAtUnixMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qd, t, e);
    }
    static $() {
        return [
            "CheckRunAnnotation|1 id 9|2 check_run_id 9|3 annotation_level #0|4 message 9|5 title 9?|6 raw_details 9?|7 created_at_unix_ms 3|8 updated_at_unix_ms 3|9 location #1",
            rd,
            kd
        ];
    }
}
class Rd extends td {
    constructor(t){
        super(), this.checkRunId = "", this.annotations = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rd, t, e);
    }
    static $() {
        return [
            "CreateCheckRunAnnotationsRequest|1 identifier #0|2 check_run_id 9|3 annotations #1*",
            o,
            vd
        ];
    }
}
class Pd extends td {
    constructor(t){
        super(), this.annotations = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pd, t, e);
    }
    static $() {
        return [
            "CreateCheckRunAnnotationsResponse|1 annotations #0*",
            qd
        ];
    }
}
class Td extends td {
    constructor(t){
        super(), this.checkRunId = "", this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Td).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Td).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Td).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Td, t, e);
    }
    static $() {
        return [
            "ListCheckRunAnnotationsRequest|1 identifier #0|2 check_run_id 9|3 page_size 5|4 page_token 9",
            o
        ];
    }
}
class xd extends td {
    constructor(t){
        super(), this.annotations = [], this.nextPageToken = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xd, t, e);
    }
    static $() {
        return [
            "ListCheckRunAnnotationsResponse|1 annotations #0*|2 next_page_token 9",
            qd
        ];
    }
}
class Nd extends td {
    constructor(t){
        super(), this.checkRunId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nd, t, e);
    }
    static $() {
        return [
            "RerequestCheckRunRequest|1 change #0|2 check_run_id 9",
            na
        ];
    }
}
class Dd extends td {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dd, t, e);
    }
    static $() {
        return [
            "RerequestCheckRunResponse|1 check_run #0",
            yd
        ];
    }
}
class Ud extends td {
    constructor(t){
        super(), this.changeNumber = n.protoInt64.zero, this.scope = nd.UNSPECIFIED, this.previewRestackConflict = !1, this.includeDefaultMergeMode = !1, this.includeSummary = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ud).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ud).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ud).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ud, t, e);
    }
    static $() {
        return [
            "GetChangesetMergeabilityRequest|1 identifier #0|2 change_number 4|3 expected_head_sha 9?|4 scope #1|5 preview_restack_conflict 8|6 include_default_merge_mode 8|7 include_head_ref_exists 8?|8 include_summary 8",
            o,
            nd
        ];
    }
}
class Qd extends td {
    constructor(t){
        super(), this.mergeable = !1, this.ciPassing = !1, this.meetsApprovalRequirements = !1, this.hasMergeConflicts = !1, this.conflictedPaths = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qd, t, e);
    }
    static $() {
        return [
            "GetChangesetMergeabilityResponse|1 mergeable 8|2 ci_passing 8|3 ci_state #0|4 meets_approval_requirements 8|5 has_merge_conflicts 8|6 mergeability #1|7 stack_mergeability #2?|8 conflicted_paths 9*|9 review_decision 9?|10 evaluated_head_sha 9?|11 evaluated_base_tip_sha 9?|12 default_merge_mode #3?|13 head_ref_exists 8?|15 target_rules_unread 8?|16 summary #4?",
            Jd,
            Fd,
            Yd,
            Fn,
            Md
        ];
    }
}
class Md extends td {
    constructor(t){
        super(), this.verdict = "", this.blockers = [], this.evaluatedChangeNumbers = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Md).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Md).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Md).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Md, t, e);
    }
    static $() {
        return [
            "ChangesetMergeabilitySummary|1 verdict 9|2 blockers #0*|3 evaluated_change_numbers 4*",
            Od
        ];
    }
}
class Od extends td {
    constructor(t){
        super(), this.kind = "", this.message = "", this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Od).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Od).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Od).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Od, t, e);
    }
    static $() {
        return [
            "ChangesetMergeabilitySummaryBlocker|1 kind 9|2 message 9|3 change_number 4|4 required_checks_state 9?|5 required_approval_count 13?|6 approved_count 13?|7 conflict_inherited_from_downstack 8?|8 invalid_stack_reason 9?"
        ];
    }
}
class Fd extends td {
    constructor(t){
        super(), this.verdict = "", this.evaluations = [], this.blockers = [], this.configurationDiagnostics = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fd, t, e);
    }
    static $() {
        return [
            "ChangesetMergeability|1 verdict 9|2 evaluations #0*|3 blockers #1*|4 configuration_diagnostics #2*",
            Ld,
            zd,
            Wd
        ];
    }
}
class Ld extends td {
    constructor(t){
        super(), this.ruleType = "", this.rulesetId = "", this.rulesetName = "", this.ruleId = "", this.enforcement = "", this.result = "", this.message = "", this.category = "", this.violations = [], this.gatesWaivedChecks = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ld).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ld).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ld).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ld, t, e);
    }
    static $() {
        return [
            "ChangesetRuleEvaluation|1 rule_type 9|2 ruleset_id 9|3 ruleset_name 9|4 rule_id 9|5 enforcement 9|6 result 9|7 message 9|8 category 9|9 violations #0*|10 satisfied_by #1?|11 gates_waived_checks #2*",
            Kd,
            Gd,
            $d
        ];
    }
}
class $d extends td {
    constructor(t){
        super(), this.name = "", this.checkRunIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $d).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $d).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $d).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($d, t, e);
    }
    static $() {
        return [
            "ChangesetGatesWaivedCheck|1 name 9|2 check_run_ids 9*"
        ];
    }
}
class Gd extends td {
    constructor(t){
        super(), this.kind = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gd, t, e);
    }
    static $() {
        return [
            "ChangesetReviewSatisfaction|1 kind 9|2 gates #0?",
            Hd
        ];
    }
}
class Hd extends td {
    constructor(t){
        super(), this.headSha = "", this.landingBaseSha = "", this.gatesFileBlobOid = "", this.approved = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hd, t, e);
    }
    static $() {
        return [
            "ChangesetGatesResult|1 head_sha 9|2 landing_base_sha 9|3 gates_file_blob_oid 9|4 approved #0*|5 trunk_tip_gates_file_blob_oid 9?",
            Ra
        ];
    }
}
class Kd extends td {
    constructor(t){
        super(), this.ruleType = "", this.detail = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Kd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Kd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Kd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Kd, t, e);
    }
    static $() {
        return [
            "ChangesetRuleViolation|1 rule_type 9|2 detail 9|3 remediation 9?|4 actionable_signal #0?",
            Vd
        ];
    }
}
class Vd extends td {
    constructor(t){
        super(), this.kind = "", this.checkNames = [], this.ownerLabels = [], this.paths = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vd, t, e);
    }
    static $() {
        return [
            "ChangesetRuleActionableSignal|1 kind 9|2 check_names 9*|3 required_count 5?|4 actual_count 5?|5 owner_labels 9*|6 paths 9*"
        ];
    }
}
class zd extends td {
    constructor(t){
        super(), this.kind = "", this.mergedChangeNumbers = [], this.openChangeNumbers = [], this.conflictedPaths = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zd, t, e);
    }
    static $() {
        return [
            "ChangesetMergeBlocker|1 kind 9|2 rule_failure #0?|3 merge_ref_sha 9?|4 base_tip_sha_at_computation 9?|5 current_base_tip_sha 9?|6 ruleset_id 9?|7 rule_id 9?|8 enforcement 9?|9 message 9?|10 change_number 4?|11 merge_commit_oid 9?|12 merged_change_numbers 4*|13 open_change_numbers 4*|14 top_change_number 4?|15 downstack_change_number 4?|16 top_head_sha 9?|17 downstack_head_sha 9?|18 compare_status 9?|19 topology_reason 9?|20 root_base_ref 9?|21 conflicted_paths 9*|22 conflict_inherited_from_downstack 8?|23 recorded_base_sha 9?|24 target_base_ref 9?",
            Ld
        ];
    }
}
class Wd extends td {
    constructor(t){
        super(), this.kind = "", this.severity = "", this.message = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wd, t, e);
    }
    static $() {
        return [
            "ChangesetRuleConfigurationDiagnostic|1 kind 9|2 severity 9|3 message 9|4 ruleset_id 9?|5 rule_id 9?|6 bypass_actor_id 9?|7 enforcement 9?"
        ];
    }
}
class Yd extends td {
    constructor(t){
        super(), this.targetChangeNumber = n.protoInt64.zero, this.prefixChangeNumbers = [], this.rootBaseRef = "", this.verdict = "", this.blockers = [], this.memberEvaluations = [], this.convergenceConflictedPaths = [], this.restackConflictedPaths = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yd, t, e);
    }
    static $() {
        return [
            "StackMergeability|1 target_change_number 4|2 prefix_change_numbers 4*|3 root_base_ref 9|4 verdict 9|5 blockers #0*|6 member_evaluations #1*|7 convergence_state 9?|8 convergence_conflicted_change_number 4?|9 convergence_conflicted_paths 9*|10 convergence_updated_at 9?|11 restack_conflicted_change_number 4?|12 restack_conflicted_paths 9*|13 restack_preview_pending 8?",
            zd,
            jd
        ];
    }
}
class jd extends td {
    constructor(t){
        super(), this.changeNumber = n.protoInt64.zero, this.role = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new jd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new jd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new jd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(jd, t, e);
    }
    static $() {
        return [
            "StackMemberEvaluation|1 change_number 4|2 role 9|3 mergeability #0",
            Fd
        ];
    }
}
class Xd extends td {
    constructor(t){
        super(), this.topChangeNumber = n.protoInt64.zero, this.mode = Fn.UNSPECIFIED, this.expectedTargetHeadSha = "", this.expectedMemberHeadShas = {}, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xd, t, e);
    }
    static $() {
        return [
            "MergeStackRequest|1 identifier #0|2 top_change_number 4|3 mode #1|4 expected_target_head_sha 9|5 commit_title 9?|6 commit_message 9?|7 bypass_merge_queue 8?|8 allow_open_pull_request_base 8?|9 expected_member_head_shas 4,9",
            o,
            Fn
        ];
    }
}
class Zd extends td {
    constructor(t){
        super(), this.mergeCommitSha = "", this.mergedChangeNumbers = [], this.mergeQueueEntryId = "", this.mergeQueueSkipped = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zd).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zd).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zd).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zd, t, e);
    }
    static $() {
        return [
            "MergeStackResponse|1 merge_commit_sha 9|2 merged_change_numbers 4*|3 merge_queue_entry_id 9|4 merge_queue_skipped 8"
        ];
    }
}
class tf extends td {
    constructor(t){
        super(), this.topChangeNumber = n.protoInt64.zero, this.dryRun = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tf, t, e);
    }
    static $() {
        return [
            "RestackStackRequest|1 identifier #0|2 top_change_number 4|3 dry_run 8",
            o
        ];
    }
}
class ef extends td {
    constructor(t){
        super(), this.changeNumber = n.protoInt64.zero, this.headSha = "", this.ontoRef = "", this.outcome = sd.UNSPECIFIED, this.conflictedPaths = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ef).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ef).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ef).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ef, t, e);
    }
    static $() {
        return [
            "RestackStackDryRunMember|1 change_number 4|2 head_sha 9|3 onto_ref 9|4 onto_sha 9?|5 new_head_sha 9?|6 outcome #0|7 conflicted_paths 9*",
            sd
        ];
    }
}
class rf extends td {
    constructor(t){
        super(), this.restackedChangeNumbers = [], this.dryRunMembers = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rf, t, e);
    }
    static $() {
        return [
            "RestackStackResponse|1 restacked_change_numbers 4*|2 dry_run_members #0*",
            ef
        ];
    }
}
class nf extends td {
    constructor(t){
        super(), this.runId = "", this.jobName = "", this.headSha = "", this.cause = {
            case: void 0
        }, this.runActive = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nf, t, e);
    }
    static $() {
        return [
            "OriginCiJob|1 run_id 9|2 job_name 9|3 head_sha 9|4 pull_request_number 4 cause|5 push_ref 9 cause|6 run_active 8|7 result #0?",
            sf
        ];
    }
}
class sf extends td {
    constructor(t){
        super(), this.conclusion = Xm.CHECK_RUN_CONCLUSION_UNSPECIFIED, this.completedAtUnixMs = n.protoInt64.zero, this.logTruncated = !1, this.steps = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sf, t, e);
    }
    static $() {
        return [
            "OriginCiJobResult|1 conclusion #0|2 exit_code 5?|3 image 9?|4 note 9?|5 started_at_unix_ms 3?|6 completed_at_unix_ms 3|7 log_bytes 3?|8 log_truncated 8|9 steps #1*",
            Xm,
            of
        ];
    }
}
class of extends td {
    constructor(t){
        super(), this.index = 0, this.startedAtUnixMs = n.protoInt64.zero, this.completedAtUnixMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new of).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new of).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new of).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(of, t, e);
    }
    static $() {
        return [
            "OriginCiJobStep|1 index 13|2 started_at_unix_ms 3|3 completed_at_unix_ms 3"
        ];
    }
}
class af extends td {
    constructor(t){
        super(), this.runId = "", this.jobName = "", this.offset = n.protoInt64.zero, this.limit = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new af).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new af).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new af).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(af, t, e);
    }
    static $() {
        return [
            "GetOriginCiJobLogRequest|1 identifier #0|2 run_id 9|3 job_name 9|4 offset 3|5 limit 3|6 live_cursor 9?",
            o
        ];
    }
}
class uf extends td {
    constructor(t){
        super(), this.data = new Uint8Array(0), this.offset = n.protoInt64.zero, this.totalBytes = n.protoInt64.zero, this.liveCursor = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new uf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new uf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new uf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(uf, t, e);
    }
    static $() {
        return [
            "GetOriginCiJobLogResponse|1 job #0|2 data 12|3 offset 3|4 total_bytes 3|5 live_cursor 9",
            nf
        ];
    }
}
const cf = "origin.v1.";
class lf extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return cf;
    }
}
var mf = (0, s.QT)(n.proto3, cf, "MergeQueueValidationCheckMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ALL_TRUNK_RULESETS"
    ],
    [
        2,
        "QUEUE_CHECKS_ONLY"
    ]
], 1), df = (0, s.QT)(n.proto3, cf, "MergeQueueConfigOutcome", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CREATED"
    ],
    [
        2,
        "RE_ENABLED"
    ],
    [
        3,
        "ALREADY_ENABLED"
    ],
    [
        4,
        "DISABLED"
    ],
    [
        5,
        "ALREADY_DISABLED"
    ],
    [
        6,
        "UPDATED"
    ],
    [
        7,
        "UNCHANGED"
    ]
], 1);
class ff extends lf {
    constructor(t){
        super(), this.expectedHeadSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ff).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ff).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ff).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ff, t, e);
    }
    static $() {
        return [
            "EnqueueForMergeRequest|1 change #0|2 expected_head_sha 9",
            na
        ];
    }
}
class pf extends lf {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pf, t, e);
    }
    static $() {
        return [
            "EnqueueForMergeResponse|1 entry #0",
            Mf
        ];
    }
}
class hf extends lf {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hf, t, e);
    }
    static $() {
        return [
            "CancelMergeQueueEntryRequest|1 change #0",
            na
        ];
    }
}
class gf extends lf {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gf, t, e);
    }
    static $() {
        return [
            "CancelMergeQueueEntryResponse|1 entry #0",
            Mf
        ];
    }
}
class Af extends lf {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Af).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Af).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Af).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Af, t, e);
    }
    static $() {
        return [
            "GetMergeQueueStatusRequest|1 change #0",
            na
        ];
    }
}
class _f extends lf {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _f).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _f).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _f).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_f, t, e);
    }
    static $() {
        return [
            "GetMergeQueueStatusResponse|1 entry #0",
            Mf
        ];
    }
}
class yf extends lf {
    constructor(t){
        super(), this.targetRef = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yf, t, e);
    }
    static $() {
        return [
            "GetMergeQueueRequest|1 identifier #0|2 target_ref 9",
            o
        ];
    }
}
class wf extends lf {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wf, t, e);
    }
    static $() {
        return [
            "GetMergeQueueResponse|1 queue #0",
            Tf
        ];
    }
}
class Sf extends lf {
    constructor(t){
        super(), this.queueId = "", this.targetRef = "", this.speculationDepth = 0, this.maxConcurrentValidations = 0, this.validationTimeoutMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sf, t, e);
    }
    static $() {
        return [
            "MergeQueueConfig|1 queue_id 9|2 target_ref 9|3 enabled 8?|4 speculation_depth 13|5 max_concurrent_validations 13|6 validation_timeout_ms 4|7 validation_checks #0",
            Bf
        ];
    }
}
class Jf extends lf {
    constructor(t){
        super(), this.actorKind = "", this.actorId = "", this.groupKey = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jf, t, e);
    }
    static $() {
        return [
            "MergeQueueRequiredCheck|1 actor_kind 9|2 actor_id 9|3 group_key 9|4 run_key 9?|5 name 9?"
        ];
    }
}
class Bf extends lf {
    constructor(t){
        super(), this.mode = mf.UNSPECIFIED, this.checks = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bf, t, e);
    }
    static $() {
        return [
            "MergeQueueValidationChecks|1 mode #0|2 checks #1*",
            mf,
            Jf
        ];
    }
}
class Ef extends lf {
    constructor(t){
        super(), this.targetRef = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ef).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ef).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ef).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ef, t, e);
    }
    static $() {
        return [
            "GetMergeQueueConfigRequest|1 identifier #0|2 target_ref 9",
            o
        ];
    }
}
class If extends lf {
    constructor(t){
        super(), this.inheritedChecks = [], this.unresolvedChecks = [], this.prOnlyChecks = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new If).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new If).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new If).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(If, t, e);
    }
    static $() {
        return [
            "GetMergeQueueConfigResponse|1 config #0|2 inherited_checks #1*|3 unresolved_checks #1*|4 pr_only_checks #2*",
            Sf,
            Jf,
            Cf
        ];
    }
}
class Cf extends lf {
    constructor(t){
        super(), this.groupKey = "", this.runKey = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cf, t, e);
    }
    static $() {
        return [
            "MergeQueuePrOnlyCheck|1 group_key 9|2 run_key 9"
        ];
    }
}
class bf extends lf {
    constructor(t){
        super(), this.targetRef = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bf, t, e);
    }
    static $() {
        return [
            "EnableMergeQueueRequest|1 identifier #0|2 target_ref 9|3 speculation_depth 13?|4 max_concurrent_validations 13?|5 validation_timeout_ms 4?|6 validation_checks #1?",
            o,
            Bf
        ];
    }
}
class kf extends lf {
    constructor(t){
        super(), this.outcome = df.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new kf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new kf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new kf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(kf, t, e);
    }
    static $() {
        return [
            "EnableMergeQueueResponse|1 config #0|2 outcome #1",
            Sf,
            df
        ];
    }
}
class vf extends lf {
    constructor(t){
        super(), this.targetRef = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vf, t, e);
    }
    static $() {
        return [
            "DisableMergeQueueRequest|1 identifier #0|2 target_ref 9",
            o
        ];
    }
}
class qf extends lf {
    constructor(t){
        super(), this.outcome = df.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qf, t, e);
    }
    static $() {
        return [
            "DisableMergeQueueResponse|1 config #0|2 outcome #1",
            Sf,
            df
        ];
    }
}
class Rf extends lf {
    constructor(t){
        super(), this.targetRef = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rf, t, e);
    }
    static $() {
        return [
            "UpdateMergeQueueConfigRequest|1 identifier #0|2 target_ref 9|3 speculation_depth 13?|4 max_concurrent_validations 13?|5 validation_timeout_ms 4?|6 validation_checks #1?",
            o,
            Bf
        ];
    }
}
class Pf extends lf {
    constructor(t){
        super(), this.outcome = df.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pf, t, e);
    }
    static $() {
        return [
            "UpdateMergeQueueConfigResponse|1 config #0|2 outcome #1",
            Sf,
            df
        ];
    }
}
class Tf extends lf {
    constructor(t){
        super(), this.targetRef = "", this.epoch = n.protoInt64.zero, this.entries = [], this.nodes = [], this.lands = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tf, t, e);
    }
    static $() {
        return [
            "MergeQueueView|1 identifier #0|2 target_ref 9|3 epoch 4|4 entries #1*|5 nodes #2*|6 lands #3*",
            o,
            xf,
            Df,
            Qf
        ];
    }
}
class xf extends lf {
    constructor(t){
        super(), this.entryId = "", this.pullRequests = [], this.position = 0, this.ciCancelCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xf, t, e);
    }
    static $() {
        return [
            "MergeQueueViewEntry|1 entry_id 9|2 pull_requests #0*|3 position 13|4 status #1|5 enqueued_at #2|6 ci_cancel_count 13",
            Nf,
            Of,
            n.Timestamp
        ];
    }
}
class Nf extends lf {
    constructor(t){
        super(), this.number = n.protoInt64.zero, this.headSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nf, t, e);
    }
    static $() {
        return [
            "MergeQueueViewPullRequest|1 number 4|2 head_sha 9"
        ];
    }
}
class Df extends lf {
    constructor(t){
        super(), this.nodeId = "", this.state = Uf.UNSPECIFIED, this.changeNumbers = [], this.assumedChangeNumbers = [], this.checkRunGroups = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Df).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Df).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Df).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Df, t, e);
    }
    static $() {
        return [
            "MergeQueueViewNode|1 node_id 9|2 state #0|3 tested_sha 9?|4 chain_ref 9?|5 started_at #1|6 change_numbers 4*|7 assumed_change_numbers 4*|8 check_run_groups #2*",
            Uf,
            n.Timestamp,
            Sd
        ];
    }
}
var Uf = (0, s.QT)(n.proto3, cf, "MergeQueueViewNode.State", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PREPARING"
    ],
    [
        2,
        "CONFLICT"
    ],
    [
        3,
        "RUNNING"
    ],
    [
        4,
        "GREEN"
    ],
    [
        5,
        "RED"
    ],
    [
        6,
        "CANCELLING"
    ],
    [
        7,
        "CANCELLED"
    ]
], 1);
class Qf extends lf {
    constructor(t){
        super(), this.moveId = "", this.expectedTrunkSha = "", this.landedSha = "", this.changeNumbers = [], this.bookedQueueEpoch = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qf, t, e);
    }
    static $() {
        return [
            "MergeQueueViewLand|1 move_id 9|2 expected_trunk_sha 9|3 landed_sha 9|4 change_numbers 4*|5 decided_at #0|6 landed_at #0|7 booked_queue_epoch 4",
            n.Timestamp
        ];
    }
}
class Mf extends lf {
    constructor(t){
        super(), this.entryId = "", this.targetRef = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mf, t, e);
    }
    static $() {
        return [
            "MergeQueueEntry|1 entry_id 9|2 change #0|3 target_ref 9|4 status #1",
            na,
            Of
        ];
    }
}
class Of extends lf {
    constructor(t){
        super(), this.kind = Ff.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Of).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Of).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Of).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Of, t, e);
    }
    static $() {
        return [
            "MergeQueueEntryStatus|1 kind #0|2 position 13?|3 blocked_on 9?|4 tested_sha 9?|5 failure 9?|6 eviction_reason 9?",
            Ff
        ];
    }
}
var Ff = (0, s.QT)(n.proto3, cf, "MergeQueueEntryStatus.Kind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "QUEUED"
    ],
    [
        2,
        "VALIDATING"
    ],
    [
        3,
        "MERGING"
    ],
    [
        4,
        "MERGED"
    ],
    [
        5,
        "EVICTED"
    ],
    [
        6,
        "CANCELLED"
    ]
], 1);
class Lf extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class $f extends Lf {
    constructor(t){
        super(), this.previewRestackConflict = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $f).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $f).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $f).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($f, t, e);
    }
    static $() {
        return [
            "GetChangeStackPageDataRequest|1 change #0|2 preview_restack_conflict 8",
            na
        ];
    }
}
class Gf extends Lf {
    constructor(t){
        super(), this.mirrorStatus = g.UNSPECIFIED, this.items = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gf, t, e);
    }
    static $() {
        return [
            "GetChangeStackPageDataResponse|1 mirror_status #0|2 items #1*|3 reviewer_candidates #2",
            g,
            Hf,
            Au
        ];
    }
}
class Hf extends Lf {
    constructor(t){
        super(), this.versions = [], this.assignments = [], this.reviews = [], this.totalThreadCount = 0, this.unresolvedThreadCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hf, t, e);
    }
    static $() {
        return [
            "ChangeStackPageItem|1 change #0|2 versions #1*|3 assignments #2*|4 reviews #3*|5 mergeability #4|6 total_thread_count 5|7 unresolved_thread_count 5",
            Xo,
            Zo,
            Ya,
            va,
            Qd
        ];
    }
}
class Kf extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class Vf extends Kf {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vf, t, e);
    }
    static $() {
        return [
            "GetReviewRequirementsRequest|1 change #0",
            na
        ];
    }
}
class zf extends Kf {
    constructor(t){
        super(), this.headSha = "", this.codeReviewGates = [], this.approvals = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zf, t, e);
    }
    static $() {
        return [
            "GetReviewRequirementsResponse|1 head_sha 9|2 mergeability #0|3 gates #1|4 code_review_gates #2*|5 approvals #3*",
            Md,
            Wf,
            ep,
            np
        ];
    }
}
class Wf extends Kf {
    constructor(t){
        super(), this.enrollment = "", this.headGatesFileErrors = [], this.requiredGates = [], this.gatesRequired = !1, this.standInForChecks = [], this.gatesClearReview = !1, this.humanOnlyPaths = [], this.cannotStandInPaths = [], this.uncoveredPaths = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wf, t, e);
    }
    static $() {
        return [
            "ReviewRequirementsGates|1 enrollment 9|2 head_gates_file_errors 9*|3 gates_file #0?|4 required_gates #1*|5 gates_required 8|6 stand_in_for_checks 9*|7 gates_clear_review 8|8 human_only_paths #2*|9 cannot_stand_in_paths #2*|10 uncovered_paths 9*|11 owner_scope #3?|12 human_approval_latest_version_required 8?",
            Yf,
            jf,
            Xf,
            Zf
        ];
    }
}
class Yf extends Kf {
    constructor(t){
        super(), this.status = "", this.validationErrors = [], this.landingBaseSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yf, t, e);
    }
    static $() {
        return [
            "ReviewRequirementsGatesFile|1 status 9|2 unavailable_reason 9?|3 validation_errors 9*|4 landing_base_sha 9|5 blob_oid 9?|6 trunk_tip_blob_oid 9?|7 landing_base_has_gates_file 8?"
        ];
    }
}
class jf extends Kf {
    constructor(t){
        super(), this.gate = "", this.checkName = "", this.status = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new jf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new jf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new jf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(jf, t, e);
    }
    static $() {
        return [
            "ReviewRequirementsGate|1 gate 9|2 check_name 9|3 status 9|4 report_url 9?|5 report_client 9?"
        ];
    }
}
class Xf extends Kf {
    constructor(t){
        super(), this.path = "", this.reason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xf, t, e);
    }
    static $() {
        return [
            "ReviewRequirementsPath|1 path 9|2 reason 9|3 cause 9?"
        ];
    }
}
class Zf extends Kf {
    constructor(t){
        super(), this.kind = "", this.outside = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zf).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zf).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zf).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zf, t, e);
    }
    static $() {
        return [
            "ReviewRequirementsOwnerScope|1 kind 9|2 reason 9?|3 outside #0*",
            tp
        ];
    }
}
class tp extends Kf {
    constructor(t){
        super(), this.source = "", this.anyHuman = !1, this.owners = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tp, t, e);
    }
    static $() {
        return [
            "ReviewRequirementsOwnerRequirement|1 source 9|2 any_human 8|3 owners 9*"
        ];
    }
}
class ep extends Kf {
    constructor(t){
        super(), this.checkName = "", this.state = "", this.waivedByGates = !1, this.blocking = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ep).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ep).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ep).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ep, t, e);
    }
    static $() {
        return [
            "ReviewRequirementsCodeReviewGate|1 check_name 9|2 state 9|3 waived_by_gates 8|4 blocking 8|5 report #0?|6 owners_unknown_reason 9?",
            rp
        ];
    }
}
class rp extends Kf {
    constructor(t){
        super(), this.outcome = "", this.unblockReviewers = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rp, t, e);
    }
    static $() {
        return [
            "ReviewRequirementsCodeReviewGateReport|1 outcome 9|2 satisfied_policies 13?|3 total_policies 13?|4 unblock_reviewers 9*"
        ];
    }
}
class np extends Kf {
    constructor(t){
        super(), this.source = "", this.owners = [], this.anyHuman = !1, this.paths = [], this.morePaths = 0, this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new np).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new np).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new np).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(np, t, e);
    }
    static $() {
        return [
            "ReviewRequirementsApproval|1 source 9|2 owners 9*|3 any_human 8|4 paths 9*|5 more_paths 13|6 check_name 9?|7 scope 9?|8 required_count 13?|9 approved_count 13?|10 change_number 4"
        ];
    }
}
const sp = "origin.v1.";
class ip extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return sp;
    }
}
var op = (0, s.QT)(n.proto3, sp, "RepoSelectionMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ALL"
    ],
    [
        2,
        "SELECTED"
    ]
], 1), ap = (0, s.QT)(n.proto3, sp, "AppInstallRequestOutcome", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CREATED"
    ],
    [
        2,
        "ALREADY_PENDING"
    ],
    [
        3,
        "DENIED_COOLDOWN"
    ],
    [
        4,
        "ALREADY_INSTALLED"
    ]
], 1);
class up extends ip {
    constructor(t){
        super(), this.id = "", this.displayName = "", this.webhookUrl = "", this.isPublic = !1, this.namespaceSlug = "", this.events = [], this.createdAt = "", this.updatedAt = "", this.installationRedirectUris = [], this.iconUrl = "", this.description = "", this.websiteUrl = "", this.defaultScopes = [], this.webhookDisabledAt = "", this.webhookDeliveryState = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new up).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new up).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new up).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(up, t, e);
    }
    static $() {
        return [
            "App|1 id 9|3 display_name 9|4 webhook_url 9|6 is_public 8|7 namespace_slug 9|8 events 9*|10 created_at 9|11 updated_at 9|12 installation_redirect_uris 9*|13 icon_url 9|14 description 9|15 website_url 9|16 default_scopes 9*|17 created_by #0|18 updated_by #0|19 webhook_disabled_at 9|20 webhook_delivery_state 9|21 marketplace_listing #1",
            No,
            Sp
        ];
    }
}
class cp extends ip {
    constructor(t){
        super(), this.installationCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cp, t, e);
    }
    static $() {
        return [
            "AppStats|1 installation_count 13"
        ];
    }
}
class lp extends ip {
    constructor(t){
        super(), this.kid = "", this.createdAt = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lp, t, e);
    }
    static $() {
        return [
            "AppSigningKey|1 kid 9|2 created_at 9"
        ];
    }
}
class mp extends ip {
    constructor(t){
        super(), this.displayName = "", this.webhookUrl = "", this.namespaceSlug = "", this.publicKey = "", this.events = [], this.installationRedirectUris = [], this.description = "", this.websiteUrl = "", this.defaultScopes = [], this.workloadIdentityPolicies = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mp, t, e);
    }
    static $() {
        return [
            "CreateAppRequest|2 display_name 9|3 webhook_url 9|6 namespace_slug 9|7 public_key 9|8 events 9*|10 installation_redirect_uris 9*|11 description 9|12 website_url 9|13 default_scopes 9*|14 workload_identity_policies #0*",
            Qp
        ];
    }
}
class dp extends ip {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dp, t, e);
    }
    static $() {
        return [
            "CreateAppResponse|1 app #0",
            up
        ];
    }
}
class fp extends ip {
    constructor(t){
        super(), this.id = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fp, t, e);
    }
    static $() {
        return [
            "GetAppRequest|1 id 9"
        ];
    }
}
class pp extends ip {
    constructor(t){
        super(), this.signingKeys = [], this.workloadIdentityPolicies = [], this.workloadIdentityEnabled = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pp, t, e);
    }
    static $() {
        return [
            "GetAppResponse|1 app #0|2 stats #1|3 signing_keys #2*|4 workload_identity_policies #3*|5 workload_identity_enabled 8",
            up,
            cp,
            lp,
            Qp
        ];
    }
}
class hp extends ip {
    constructor(t){
        super(), this.appId = "", this.publicKey = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hp, t, e);
    }
    static $() {
        return [
            "AddAppSigningKeyRequest|1 app_id 9|2 public_key 9"
        ];
    }
}
class gp extends ip {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gp, t, e);
    }
    static $() {
        return [
            "AddAppSigningKeyResponse|1 key #0",
            lp
        ];
    }
}
class Ap extends ip {
    constructor(t){
        super(), this.appId = "", this.kid = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ap).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ap).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ap).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ap, t, e);
    }
    static $() {
        return [
            "RevokeAppSigningKeyRequest|1 app_id 9|2 kid 9"
        ];
    }
}
class _p extends ip {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _p).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _p).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _p).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_p, t, e);
    }
    static $() {
        return [
            "RevokeAppSigningKeyResponse"
        ];
    }
}
class yp extends ip {
    constructor(t){
        super(), this.namespaceSlug = "", this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yp, t, e);
    }
    static $() {
        return [
            "ListNamespaceAppsRequest|1 namespace_slug 9|2 page_size 13|3 page_token 9"
        ];
    }
}
class wp extends ip {
    constructor(t){
        super(), this.nextPageToken = "", this.appMetadata = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wp, t, e);
    }
    static $() {
        return [
            "ListNamespaceAppsResponse|2 next_page_token 9|3 app_metadata #0*",
            Jp
        ];
    }
}
class Sp extends ip {
    constructor(t){
        super(), this.slug = "", this.listedAt = "", this.tags = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sp, t, e);
    }
    static $() {
        return [
            "AppMarketplaceListing|1 slug 9|2 listed_at 9|3 tags 9*|4 publisher_id 3?"
        ];
    }
}
class Jp extends ip {
    constructor(t){
        super(), this.id = "", this.displayName = "", this.ownerNamespace = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jp, t, e);
    }
    static $() {
        return [
            "AppDisplayMetadata|1 id 9|3 display_name 9|4 icon_url 9?|5 description 9?|7 marketplace_listing #0|8 owner_namespace 9",
            Sp
        ];
    }
}
class Bp extends ip {
    constructor(t){
        super(), this.pageSize = 0, this.pageToken = "", this.tag = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bp, t, e);
    }
    static $() {
        return [
            "ListPublicAppsRequest|1 page_size 13|2 page_token 9|3 tag 9"
        ];
    }
}
class Ep extends ip {
    constructor(t){
        super(), this.apps = [], this.nextPageToken = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ep).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ep).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ep).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ep, t, e);
    }
    static $() {
        return [
            "ListPublicAppsResponse|1 apps #0*|2 next_page_token 9",
            Jp
        ];
    }
}
class Ip extends ip {
    constructor(t){
        super(), this.id = "", this.appId = "", this.namespaceSlug = "", this.createdAt = "", this.updatedAt = "", this.repoSelectionMode = op.UNSPECIFIED, this.repoIds = [], this.acceptedScopes = [], this.reviewedDefaultScopes = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ip).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ip).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ip).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ip, t, e);
    }
    static $() {
        return [
            "Installation|1 id 9|2 app_id 9|3 namespace_slug 9|4 created_at 9|5 updated_at 9|6 repo_selection_mode #0|7 repo_ids 9*|8 accepted_scopes 9*|9 suspended_at 9?|10 reviewed_default_scopes 9*|11 installed_by #1|12 updated_by #1?|13 suspended_by #1?",
            op,
            No
        ];
    }
}
class Cp extends ip {
    constructor(t){
        super(), this.id = "", this.appId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cp, t, e);
    }
    static $() {
        return [
            "InstallationReference|1 id 9|2 app_id 9|3 app_metadata #0",
            Jp
        ];
    }
}
class bp extends ip {
    constructor(t){
        super(), this.appId = "", this.namespaceSlug = "", this.repoIds = [], this.requestedScopes = [], this.reviewedDefaultScopes = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bp, t, e);
    }
    static $() {
        return [
            "CreateInstallationRequest|1 app_id 9|2 namespace_slug 9|3 repo_ids 9*|4 requested_scopes 9*|5 state 9?|6 reviewed_default_scopes 9*"
        ];
    }
}
class kp extends ip {
    constructor(t){
        super(), this.installationReceipt = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new kp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new kp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new kp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(kp, t, e);
    }
    static $() {
        return [
            "CreateInstallationResponse|1 installation #0|2 installation_receipt 9",
            Ip
        ];
    }
}
class vp extends ip {
    constructor(t){
        super(), this.id = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vp, t, e);
    }
    static $() {
        return [
            "GetInstallationRequest|1 id 9"
        ];
    }
}
class qp extends ip {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qp, t, e);
    }
    static $() {
        return [
            "GetInstallationResponse|1 installation #0",
            Ip
        ];
    }
}
class Rp extends ip {
    constructor(t){
        super(), this.namespaceSlug = "", this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rp, t, e);
    }
    static $() {
        return [
            "ListNamespaceInstallationsRequest|1 namespace_slug 9|2 page_size 13|3 page_token 9"
        ];
    }
}
class Pp extends ip {
    constructor(t){
        super(), this.installations = [], this.nextPageToken = "", this.installationReferences = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pp, t, e);
    }
    static $() {
        return [
            "ListNamespaceInstallationsResponse|1 installations #0*|2 next_page_token 9|3 installation_references #1*",
            Ip,
            Cp
        ];
    }
}
class Tp extends ip {
    constructor(t){
        super(), this.id = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tp, t, e);
    }
    static $() {
        return [
            "UpdateAppRequest|1 id 9|2 display_name 9?|3 webhook_url 9?|5 events #0?|6 is_public 8?|8 installation_redirect_uris #1?|9 description 9?|10 website_url 9?|11 default_scopes #2?|12 workload_identity_policies #3?",
            xp,
            Np,
            Dp,
            Mp
        ];
    }
}
class xp extends ip {
    constructor(t){
        super(), this.events = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xp, t, e);
    }
    static $() {
        return [
            "AppEventsReplace|1 events 9*"
        ];
    }
}
class Np extends ip {
    constructor(t){
        super(), this.installationRedirectUris = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Np).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Np).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Np).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Np, t, e);
    }
    static $() {
        return [
            "AppInstallationRedirectUrisReplace|1 installation_redirect_uris 9*"
        ];
    }
}
class Dp extends ip {
    constructor(t){
        super(), this.scopes = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dp, t, e);
    }
    static $() {
        return [
            "AppDefaultScopesReplace|1 scopes 9*"
        ];
    }
}
class Up extends ip {
    constructor(t){
        super(), this.path = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Up).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Up).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Up).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Up, t, e);
    }
    static $() {
        return [
            "AppWorkloadIdentityClaimMatcher|1 path 9|2 exact 9?|3 regex 9?"
        ];
    }
}
class Qp extends ip {
    constructor(t){
        super(), this.issuerFamily = "", this.issuer = "", this.claims = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qp, t, e);
    }
    static $() {
        return [
            "AppWorkloadIdentityPolicy|1 issuer_family 9|2 issuer 9|3 subject_exact 9?|4 subject_regex 9?|5 claims #0*|6 enabled 8?",
            Up
        ];
    }
}
class Mp extends ip {
    constructor(t){
        super(), this.policies = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mp, t, e);
    }
    static $() {
        return [
            "AppWorkloadIdentityPoliciesReplace|1 policies #0*",
            Qp
        ];
    }
}
class Op extends ip {
    constructor(t){
        super(), this.appId = "", this.enabled = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Op).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Op).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Op).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Op, t, e);
    }
    static $() {
        return [
            "SetAppWebhookDeliveryEnabledRequest|1 app_id 9|2 enabled 8"
        ];
    }
}
class Fp extends ip {
    constructor(t){
        super(), this.transitioned = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fp, t, e);
    }
    static $() {
        return [
            "SetAppWebhookDeliveryEnabledResponse|1 app #0|2 transitioned 8",
            up
        ];
    }
}
class Lp extends ip {
    constructor(t){
        super(), this.appId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Lp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Lp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Lp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Lp, t, e);
    }
    static $() {
        return [
            "SendAppWebhookTestDeliveryRequest|1 app_id 9"
        ];
    }
}
class $p extends ip {
    constructor(t){
        super(), this.delivered = !1, this.responseStatusCode = 0, this.deliveryId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $p).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $p).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $p).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($p, t, e);
    }
    static $() {
        return [
            "SendAppWebhookTestDeliveryResponse|1 delivered 8|2 response_status_code 5|3 delivery_id 9"
        ];
    }
}
class Gp extends ip {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gp, t, e);
    }
    static $() {
        return [
            "UpdateAppResponse|1 app #0",
            up
        ];
    }
}
class Hp extends ip {
    constructor(t){
        super(), this.appId = "", this.icon = new Uint8Array(0), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hp, t, e);
    }
    static $() {
        return [
            "SetAppIconRequest|1 app_id 9|2 icon 12"
        ];
    }
}
class Kp extends ip {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Kp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Kp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Kp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Kp, t, e);
    }
    static $() {
        return [
            "SetAppIconResponse|1 app #0",
            up
        ];
    }
}
class Vp extends ip {
    constructor(t){
        super(), this.id = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vp, t, e);
    }
    static $() {
        return [
            "DeleteAppRequest|1 id 9"
        ];
    }
}
class zp extends ip {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zp, t, e);
    }
    static $() {
        return [
            "DeleteAppResponse"
        ];
    }
}
class Wp extends ip {
    constructor(t){
        super(), this.id = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wp, t, e);
    }
    static $() {
        return [
            "DeleteInstallationRequest|1 id 9"
        ];
    }
}
class Yp extends ip {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yp, t, e);
    }
    static $() {
        return [
            "DeleteInstallationResponse"
        ];
    }
}
class jp extends ip {
    constructor(t){
        super(), this.includeGrantedScopes = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new jp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new jp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new jp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(jp, t, e);
    }
    static $() {
        return [
            "PreviewAppInstallationOptions|1 include_granted_scopes 8"
        ];
    }
}
class Xp extends ip {
    constructor(t){
        super(), this.namespaceSlug = "", this.appId = "", this.requestedScopes = [], this.summary = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xp, t, e);
    }
    static $() {
        return [
            "PreviewAppInstallationRequest|1 namespace_slug 9|2 app_id 9|3 requested_scopes 9*|4 summary 9|5 redirect_uri 9?|6 options #0",
            jp
        ];
    }
}
class Zp extends ip {
    constructor(t){
        super(), this.scope = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zp).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zp).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zp).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zp, t, e);
    }
    static $() {
        return [
            "PreviewAppInstallationScope|1 scope 9"
        ];
    }
}
class th extends ip {
    constructor(t){
        super(), this.summary = "", this.requestedScopes = [], this.grantedScopes = [], this.appWebsiteUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new th).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new th).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new th).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(th, t, e);
    }
    static $() {
        return [
            "PreviewAppInstallationResponse|12 app #0|5 summary 9|6 requested_scopes #1*|7 granted_scopes #1*|8 existing_installation #2|10 app_website_url 9",
            Jp,
            Zp,
            eh
        ];
    }
}
class eh extends ip {
    constructor(t){
        super(), this.installationId = "", this.repoSelectionMode = op.UNSPECIFIED, this.repoIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new eh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new eh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new eh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(eh, t, e);
    }
    static $() {
        return [
            "ExistingInstallation|1 installation_id 9|2 repo_selection_mode #0|3 repo_ids 9*",
            op
        ];
    }
}
class rh extends ip {
    constructor(t){
        super(), this.id = "", this.displayName = "", this.namespaceSlug = "", this.iconUrl = "", this.description = "", this.websiteUrl = "", this.defaultScopes = [], this.installRedirectUri = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rh, t, e);
    }
    static $() {
        return [
            "AppMetadata|1 id 9|3 display_name 9|4 namespace_slug 9|5 icon_url 9|6 description 9|7 website_url 9|8 default_scopes 9*|9 install_redirect_uri 9|10 is_public 8?|11 marketplace_listing #0",
            Sp
        ];
    }
}
class nh extends ip {
    constructor(t){
        super(), this.id = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nh, t, e);
    }
    static $() {
        return [
            "GetAppMetadataRequest|1 id 9"
        ];
    }
}
class sh extends ip {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sh, t, e);
    }
    static $() {
        return [
            "GetAppMetadataResponse|1 app #0|2 stats #1",
            rh,
            cp
        ];
    }
}
class ih extends ip {
    constructor(t){
        super(), this.id = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ih).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ih).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ih).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ih, t, e);
    }
    static $() {
        return [
            "SuspendInstallationRequest|1 id 9"
        ];
    }
}
class oh extends ip {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new oh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new oh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new oh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(oh, t, e);
    }
    static $() {
        return [
            "SuspendInstallationResponse"
        ];
    }
}
class ah extends ip {
    constructor(t){
        super(), this.id = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ah).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ah).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ah).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ah, t, e);
    }
    static $() {
        return [
            "UnsuspendInstallationRequest|1 id 9"
        ];
    }
}
class uh extends ip {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new uh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new uh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new uh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(uh, t, e);
    }
    static $() {
        return [
            "UnsuspendInstallationResponse"
        ];
    }
}
class ch extends ip {
    constructor(t){
        super(), this.repoId = "", this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ch).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ch).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ch).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ch, t, e);
    }
    static $() {
        return [
            "ListRepoInstallationsRequest|1 repo_id 9|2 page_size 13|3 page_token 9"
        ];
    }
}
class lh extends ip {
    constructor(t){
        super(), this.installations = [], this.nextPageToken = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lh, t, e);
    }
    static $() {
        return [
            "ListRepoInstallationsResponse|1 installations #0*|2 next_page_token 9",
            Cp
        ];
    }
}
class mh extends ip {
    constructor(t){
        super(), this.namespaceId = "", this.appId = "", this.repoIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mh, t, e);
    }
    static $() {
        return [
            "RequestAppInstallRequest|1 namespace_id 9|2 app_id 9|4 repo_ids 9*"
        ];
    }
}
class dh extends ip {
    constructor(t){
        super(), this.outcome = ap.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dh, t, e);
    }
    static $() {
        return [
            "RequestAppInstallResponse|1 outcome #0|2 cool_down_expires_at 9?",
            ap
        ];
    }
}
class fh extends ip {
    constructor(t){
        super(), this.namespaceId = "", this.appId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fh, t, e);
    }
    static $() {
        return [
            "GetMyAppInstallRequestRequest|1 namespace_id 9|2 app_id 9"
        ];
    }
}
class ph extends ip {
    constructor(t){
        super(), this.hasPendingRequest = !1, this.pendingRepoSelectionMode = op.UNSPECIFIED, this.pendingRepoIds = [], this.hasCurrentInstallation = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ph).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ph).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ph).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ph, t, e);
    }
    static $() {
        return [
            "GetMyAppInstallRequestResponse|1 has_pending_request 8|2 pending_repo_selection_mode #0|3 pending_repo_ids 9*|4 has_current_installation 8|5 has_requestable_repositories 8?",
            op
        ];
    }
}
class hh extends ip {
    constructor(t){
        super(), this.namespaceId = "", this.appId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hh, t, e);
    }
    static $() {
        return [
            "CancelMyAppInstallRequestRequest|1 namespace_id 9|2 app_id 9"
        ];
    }
}
class gh extends ip {
    constructor(t){
        super(), this.canceled = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gh, t, e);
    }
    static $() {
        return [
            "CancelMyAppInstallRequestResponse|1 canceled 8"
        ];
    }
}
class Ah extends ip {
    constructor(t){
        super(), this.id = "", this.createdAt = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ah).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ah).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ah).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ah, t, e);
    }
    static $() {
        return [
            "AppInstallRequest|1 id 9|2 requester #0|4 created_at 9",
            No
        ];
    }
}
class _h extends ip {
    constructor(t){
        super(), this.requests = [], this.requestedRepoSelectionMode = op.UNSPECIFIED, this.requestedRepoIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _h).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _h).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _h).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_h, t, e);
    }
    static $() {
        return [
            "AppInstallRequestGroup|1 app #0|2 requests #1*|3 requested_repo_selection_mode #2|4 requested_repo_ids 9*",
            Jp,
            Ah,
            op
        ];
    }
}
class yh extends ip {
    constructor(t){
        super(), this.namespaceId = "", this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yh, t, e);
    }
    static $() {
        return [
            "ListAppInstallRequestsRequest|1 namespace_id 9|2 page_size 13|3 page_token 9"
        ];
    }
}
class wh extends ip {
    constructor(t){
        super(), this.groups = [], this.nextPageToken = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wh, t, e);
    }
    static $() {
        return [
            "ListAppInstallRequestsResponse|1 groups #0*|2 next_page_token 9",
            _h
        ];
    }
}
class Sh extends ip {
    constructor(t){
        super(), this.namespaceId = "", this.appId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sh, t, e);
    }
    static $() {
        return [
            "DenyAppInstallRequestsRequest|1 namespace_id 9|2 app_id 9"
        ];
    }
}
class Jh extends ip {
    constructor(t){
        super(), this.deniedCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jh, t, e);
    }
    static $() {
        return [
            "DenyAppInstallRequestsResponse|1 denied_count 13"
        ];
    }
}
class Bh extends ip {
    constructor(t){
        super(), this.installationId = "", this.redirectUri = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bh, t, e);
    }
    static $() {
        return [
            "PreviewAppUserConfirmationRequest|1 installation_id 9|2 redirect_uri 9|3 state 9?"
        ];
    }
}
class Eh extends ip {
    constructor(t){
        super(), this.userId = "", this.email = "", this.namespaceId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Eh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Eh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Eh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Eh, t, e);
    }
    static $() {
        return [
            "AppUserConfirmationDisclosure|1 user_id 9|2 email 9|3 namespace_id 9"
        ];
    }
}
class Ih extends ip {
    constructor(t){
        super(), this.installationId = "", this.namespaceSlug = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ih).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ih).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ih).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ih, t, e);
    }
    static $() {
        return [
            "PreviewAppUserConfirmationResponse|1 app #0|2 installation_id 9|3 namespace_slug 9|4 disclosure #1",
            Jp,
            Eh
        ];
    }
}
class Ch extends ip {
    constructor(t){
        super(), this.installationId = "", this.redirectUri = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ch).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ch).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ch).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ch, t, e);
    }
    static $() {
        return [
            "ConfirmAppUserConfirmationRequest|1 installation_id 9|2 redirect_uri 9|3 state 9?"
        ];
    }
}
class bh extends ip {
    constructor(t){
        super(), this.confirmationReceipt = "", this.redirectUri = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bh, t, e);
    }
    static $() {
        return [
            "ConfirmAppUserConfirmationResponse|1 confirmation_receipt 9|2 redirect_uri 9"
        ];
    }
}
const kh = "origin.v1.";
class vh extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return kh;
    }
}
var qh = (0, s.QT)(n.proto3, kh, "AtlasFreshness", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "EAGER"
    ],
    [
        2,
        "BALANCED"
    ],
    [
        3,
        "RELAXED"
    ],
    [
        4,
        "MANUAL"
    ]
], 1);
class Rh extends vh {
    constructor(t){
        super(), this.path = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rh, t, e);
    }
    static $() {
        return [
            "GetAtlasNodeRequest|1 repo #0|2 path 9",
            o
        ];
    }
}
class Ph extends vh {
    constructor(t){
        super(), this.layer = "", this.label = "", this.contentMarkdown = "", this.digestJson = "", this.status = "", this.lastGenAt = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ph).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ph).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ph).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ph, t, e);
    }
    static $() {
        return [
            "AtlasNodeLayerContent|1 layer 9|2 label 9|3 content_markdown 9|4 digest_json 9|5 status 9|6 last_gen_at 9"
        ];
    }
}
class Th extends vh {
    constructor(t){
        super(), this.lastCommit = "", this.layers = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Th).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Th).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Th).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Th, t, e);
    }
    static $() {
        return [
            "GetAtlasNodeResponse|1 last_commit 9|2 layers #0*",
            Ph
        ];
    }
}
class xh extends vh {
    constructor(t){
        super(), this.layer = "", this.label = "", this.enabled = !1, this.generatedNodes = 0, this.pendingNodes = 0, this.lastGenAt = "", this.failedNodes = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xh, t, e);
    }
    static $() {
        return [
            "AtlasLayerStatus|1 layer 9|2 label 9|3 enabled 8|4 generated_nodes 5|5 pending_nodes 5|6 last_gen_at 9|7 failed_nodes 5"
        ];
    }
}
class Nh extends vh {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nh, t, e);
    }
    static $() {
        return [
            "GetAtlasRepoStatusRequest|1 repo #0",
            o
        ];
    }
}
class Dh extends vh {
    constructor(t){
        super(), this.configured = !1, this.enabled = !1, this.model = "", this.nodeCount = 0, this.layers = [], this.refreshing = !1, this.freshness = qh.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dh, t, e);
    }
    static $() {
        return [
            "GetAtlasRepoStatusResponse|1 configured 8|2 enabled 8|3 model 9|4 node_count 5|5 layers #0*|6 refreshing 8|7 freshness #1",
            xh,
            qh
        ];
    }
}
class Uh extends vh {
    constructor(t){
        super(), this.enabled = !1, this.enabledLayers = [], this.freshness = qh.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Uh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Uh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Uh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Uh, t, e);
    }
    static $() {
        return [
            "SetAtlasRepoConfigRequest|1 repo #0|2 enabled 8|3 enabled_layers 9*|4 freshness #1",
            o,
            qh
        ];
    }
}
class Qh extends vh {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qh, t, e);
    }
    static $() {
        return [
            "SetAtlasRepoConfigResponse|1 status #0",
            Dh
        ];
    }
}
class Mh extends vh {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mh, t, e);
    }
    static $() {
        return [
            "RefreshAtlasRepoRequest|1 repo #0",
            o
        ];
    }
}
class Oh extends vh {
    constructor(t){
        super(), this.headSha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Oh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Oh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Oh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Oh, t, e);
    }
    static $() {
        return [
            "RefreshAtlasRepoResponse|1 head_sha 9"
        ];
    }
}
class Fh extends vh {
    constructor(t){
        super(), this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fh, t, e);
    }
    static $() {
        return [
            "ListAtlasNodePathsRequest|1 repo #0|2 page_size 13|3 page_token 9",
            o
        ];
    }
}
class Lh extends vh {
    constructor(t){
        super(), this.path = "", this.diagramKinds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Lh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Lh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Lh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Lh, t, e);
    }
    static $() {
        return [
            "AtlasNodePathEntry|1 path 9|2 diagram_kinds 9*"
        ];
    }
}
class $h extends vh {
    constructor(t){
        super(), this.paths = [], this.nextPageToken = "", this.entries = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $h).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $h).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $h).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($h, t, e);
    }
    static $() {
        return [
            "ListAtlasNodePathsResponse|1 paths 9*|2 next_page_token 9|3 entries #0*",
            Lh
        ];
    }
}
const Gh = "origin.v1.";
class Hh extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return Gh;
    }
}
var Kh = (0, s.QT)(n.proto3, Gh, "RulesetEnforcement", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ACTIVE"
    ],
    [
        2,
        "EVALUATE"
    ],
    [
        3,
        "DISABLED"
    ]
], 1), Vh = (0, s.QT)(n.proto3, Gh, "RulesetKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MERGE_BRANCH"
    ],
    [
        2,
        "PUSH_BRANCH"
    ],
    [
        3,
        "PUSH_TAG"
    ],
    [
        4,
        "PUSH_REPOSITORY"
    ]
], 1), zh = (0, s.QT)(n.proto3, Gh, "RulesetBypassMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ALWAYS"
    ],
    [
        2,
        "PULL_REQUEST_ONLY"
    ]
], 1), Wh = (0, s.QT)(n.proto3, Gh, "RulesetBypassActorKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USER"
    ],
    [
        2,
        "TEAM"
    ],
    [
        3,
        "APP"
    ],
    [
        6,
        "ORIGIN_ROLE"
    ]
], 1);
class Yh extends Hh {
    constructor(t){
        super(), this.id = "", this.ruleType = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yh, t, e);
    }
    static $() {
        return [
            "RulesetRule|1 id 9|2 rule_type 9|3 parameters #0",
            n.Struct
        ];
    }
}
class jh extends Hh {
    constructor(t){
        super(), this.id = "", this.bypassMode = zh.UNSPECIFIED, this.actorKind = Wh.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new jh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new jh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new jh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(jh, t, e);
    }
    static $() {
        return [
            "RulesetBypassActor|1 id 9|2 bypass_mode #0|3 actor_kind #1|4 actor_payload #2",
            zh,
            Wh,
            n.Struct
        ];
    }
}
class Xh extends Hh {
    constructor(t){
        super(), this.id = "", this.name = "", this.description = "", this.enforcement = Kh.UNSPECIFIED, this.kind = Vh.UNSPECIFIED, this.includedRefNames = [], this.excludedRefNames = [], this.rules = [], this.bypassActors = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xh, t, e);
    }
    static $() {
        return [
            "Ruleset|1 id 9|2 repo #0|3 name 9|4 description 9|5 enforcement #1|6 kind #2|7 included_ref_names 9*|8 excluded_ref_names 9*|9 rules #3*|10 bypass_actors #4*",
            o,
            Kh,
            Vh,
            Yh,
            jh
        ];
    }
}
class Zh extends Hh {
    constructor(t){
        super(), this.ruleType = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zh).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zh).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zh).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zh, t, e);
    }
    static $() {
        return [
            "RulesetRuleInput|1 rule_type 9|2 parameters #0",
            n.Struct
        ];
    }
}
class tg extends Hh {
    constructor(t){
        super(), this.bypassMode = zh.UNSPECIFIED, this.actorKind = Wh.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tg, t, e);
    }
    static $() {
        return [
            "RulesetBypassActorInput|1 bypass_mode #0|2 actor_kind #1|3 actor_payload #2",
            zh,
            Wh,
            n.Struct
        ];
    }
}
class eg extends Hh {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new eg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new eg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new eg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(eg, t, e);
    }
    static $() {
        return [
            "ListRulesetsRequest|1 repo #0",
            o
        ];
    }
}
class rg extends Hh {
    constructor(t){
        super(), this.rulesets = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rg, t, e);
    }
    static $() {
        return [
            "ListRulesetsResponse|1 rulesets #0*",
            Xh
        ];
    }
}
class ng extends Hh {
    constructor(t){
        super(), this.rulesetId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ng).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ng).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ng).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ng, t, e);
    }
    static $() {
        return [
            "GetRulesetRequest|1 repo #0|2 ruleset_id 9",
            o
        ];
    }
}
class sg extends Hh {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sg, t, e);
    }
    static $() {
        return [
            "GetRulesetResponse|1 ruleset #0",
            Xh
        ];
    }
}
class ig extends Hh {
    constructor(t){
        super(), this.name = "", this.description = "", this.enforcement = Kh.UNSPECIFIED, this.kind = Vh.UNSPECIFIED, this.includedRefNames = [], this.excludedRefNames = [], this.rules = [], this.bypassActors = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ig).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ig).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ig).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ig, t, e);
    }
    static $() {
        return [
            "UpsertRulesetRequest|1 repo #0|2 ruleset_id 9?|3 name 9|4 description 9|5 enforcement #1|6 kind #2|7 included_ref_names 9*|8 excluded_ref_names 9*|9 rules #3*|10 bypass_actors #4*",
            o,
            Kh,
            Vh,
            Zh,
            tg
        ];
    }
}
class og extends Hh {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new og).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new og).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new og).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(og, t, e);
    }
    static $() {
        return [
            "UpsertRulesetResponse|1 ruleset #0",
            Xh
        ];
    }
}
class ag extends Hh {
    constructor(t){
        super(), this.rulesetId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ag).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ag).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ag).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ag, t, e);
    }
    static $() {
        return [
            "DeleteRulesetRequest|1 repo #0|2 ruleset_id 9",
            o
        ];
    }
}
class ug extends Hh {
    constructor(t){
        super(), this.rulesetId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ug).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ug).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ug).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ug, t, e);
    }
    static $() {
        return [
            "DeleteRulesetResponse|1 ruleset_id 9"
        ];
    }
}
class cg extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class lg extends cg {
    constructor(t){
        super(), this.id = "", this.repoUuid = "", this.name = "", this.color = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lg, t, e);
    }
    static $() {
        return [
            "Label|1 id 9|2 repo_uuid 9|3 name 9|4 color 9|5 description 9?|6 created_at #0|7 updated_at #0",
            n.Timestamp
        ];
    }
}
class mg extends cg {
    constructor(t){
        super(), this.name = "", this.color = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mg, t, e);
    }
    static $() {
        return [
            "CreateLabelRequest|1 repo #0|2 name 9|3 color 9|4 description 9?",
            o
        ];
    }
}
class dg extends cg {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dg, t, e);
    }
    static $() {
        return [
            "CreateLabelResponse|1 label #0",
            lg
        ];
    }
}
class fg extends cg {
    constructor(t){
        super(), this.labelId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fg, t, e);
    }
    static $() {
        return [
            "UpdateLabelRequest|1 repo #0|2 label_id 9|3 name 9?|4 color 9?|5 description 9?",
            o
        ];
    }
}
class pg extends cg {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pg, t, e);
    }
    static $() {
        return [
            "UpdateLabelResponse|1 label #0",
            lg
        ];
    }
}
class hg extends cg {
    constructor(t){
        super(), this.labelId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hg, t, e);
    }
    static $() {
        return [
            "DeleteLabelRequest|1 repo #0|2 label_id 9",
            o
        ];
    }
}
class gg extends cg {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gg, t, e);
    }
    static $() {
        return [
            "DeleteLabelResponse"
        ];
    }
}
class Ag extends cg {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ag).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ag).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ag).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ag, t, e);
    }
    static $() {
        return [
            "ListLabelsRequest|1 repo #0|2 cursor 9?|3 limit 5?|4 search_query 9?",
            o
        ];
    }
}
class _g extends cg {
    constructor(t){
        super(), this.labels = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _g).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _g).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _g).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_g, t, e);
    }
    static $() {
        return [
            "ListLabelsResponse|1 labels #0*|2 next_cursor 9?",
            lg
        ];
    }
}
class yg extends cg {
    constructor(t){
        super(), this.name = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yg, t, e);
    }
    static $() {
        return [
            "GetLabelByNameRequest|1 repo #0|2 name 9",
            o
        ];
    }
}
class wg extends cg {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wg, t, e);
    }
    static $() {
        return [
            "GetLabelByNameResponse|1 label #0?",
            lg
        ];
    }
}
class Sg extends cg {
    constructor(t){
        super(), this.labelId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sg, t, e);
    }
    static $() {
        return [
            "AddLabelToChangeRequest|1 change #0|2 label_id 9",
            na
        ];
    }
}
class Jg extends cg {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jg, t, e);
    }
    static $() {
        return [
            "AddLabelToChangeResponse"
        ];
    }
}
class Bg extends cg {
    constructor(t){
        super(), this.labelId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bg, t, e);
    }
    static $() {
        return [
            "RemoveLabelFromChangeRequest|1 change #0|2 label_id 9",
            na
        ];
    }
}
class Eg extends cg {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Eg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Eg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Eg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Eg, t, e);
    }
    static $() {
        return [
            "RemoveLabelFromChangeResponse"
        ];
    }
}
class Ig extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class Cg extends Ig {
    constructor(t){
        super(), this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cg, t, e);
    }
    static $() {
        return [
            "WatchChangeSyncEventsRequest|1 identifier #0|2 change_number 4",
            o
        ];
    }
}
class bg extends Ig {
    constructor(t){
        super(), this.frame = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bg, t, e);
    }
    static $() {
        return [
            "WatchChangeSyncEventsResponse|1 snapshot_json 9 frame|2 event_json 9 frame|3 heartbeat #0 frame",
            kg
        ];
    }
}
class kg extends Ig {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new kg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new kg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new kg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(kg, t, e);
    }
    static $() {
        return [
            "SyncEventHeartbeat"
        ];
    }
}
class vg extends Ig {
    constructor(t){
        super(), this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vg, t, e);
    }
    static $() {
        return [
            "ChangeSyncTarget|1 identifier #0|2 change_number 4|3 resume #1?",
            o,
            qg
        ];
    }
}
class qg extends Ig {
    constructor(t){
        super(), this.streamSeqs = {}, this.headSha = "", this.headVersionNumber = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qg, t, e);
    }
    static $() {
        return [
            "SyncResumeCursor|1 stream_seqs 9,4|2 head_sha 9|3 head_version_number 13"
        ];
    }
}
class Rg extends Ig {
    constructor(t){
        super(), this.sha = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rg, t, e);
    }
    static $() {
        return [
            "ShaSyncTarget|1 identifier #0|2 sha 9",
            o
        ];
    }
}
class Pg extends Ig {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pg, t, e);
    }
    static $() {
        return [
            "RepoSyncTarget|1 identifier #0",
            o
        ];
    }
}
class Tg extends Ig {
    constructor(t){
        super(), this.ref = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tg, t, e);
    }
    static $() {
        return [
            "RefSyncTarget|1 identifier #0|2 ref 9",
            o
        ];
    }
}
class xg extends Ig {
    constructor(t){
        super(), this.targetRef = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xg, t, e);
    }
    static $() {
        return [
            "QueueSyncTarget|1 identifier #0|2 target_ref 9",
            o
        ];
    }
}
class Ng extends Ig {
    constructor(t){
        super(), this.kind = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ng).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ng).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ng).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ng, t, e);
    }
    static $() {
        return [
            "SyncTarget|1 sha #0 kind|2 repo #1 kind|3 ref #2 kind|4 queue #3 kind",
            Rg,
            Pg,
            Tg,
            xg
        ];
    }
}
class Dg extends Ig {
    constructor(t){
        super(), this.subscriptions = [], this.targets = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dg, t, e);
    }
    static $() {
        return [
            "WatchChangeSyncEventsV2Request|1 subscriptions #0*|2 targets #1*",
            vg,
            Ng
        ];
    }
}
class Ug extends Ig {
    constructor(t){
        super(), this.connectionId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ug).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ug).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ug).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ug, t, e);
    }
    static $() {
        return [
            "WatchSyncSessionStarted|1 connection_id 9"
        ];
    }
}
class Qg extends Ig {
    constructor(t){
        super(), this.snapshotJson = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qg, t, e);
    }
    static $() {
        return [
            "TaggedSyncSnapshot|1 target #0|2 snapshot_json 9|3 sync_target #1",
            vg,
            Ng
        ];
    }
}
class Mg extends Ig {
    constructor(t){
        super(), this.eventJson = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mg, t, e);
    }
    static $() {
        return [
            "TaggedSyncEvent|1 target #0|2 event_json 9|3 sync_target #1",
            vg,
            Ng
        ];
    }
}
class Og extends Ig {
    constructor(t){
        super(), this.reason = "", this.message = "", this.updateId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Og).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Og).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Og).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Og, t, e);
    }
    static $() {
        return [
            "WatchSyncSubscriptionNack|1 target #0|2 reason 9|3 message 9|4 sync_target #1|5 update_id 9",
            vg,
            Ng
        ];
    }
}
class Fg extends Ig {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fg, t, e);
    }
    static $() {
        return [
            "WatchSyncSubscriptionRemoved|1 target #0|2 sync_target #1",
            vg,
            Ng
        ];
    }
}
class Lg extends Ig {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Lg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Lg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Lg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Lg, t, e);
    }
    static $() {
        return [
            "WatchSyncSubscriptionResumed|1 target #0",
            vg
        ];
    }
}
class $g extends Ig {
    constructor(t){
        super(), this.frame = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $g).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $g).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $g).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($g, t, e);
    }
    static $() {
        return [
            "WatchChangeSyncEventsV2Response|1 session #0 frame|2 snapshot #1 frame|3 event #2 frame|4 heartbeat #3 frame|5 nack #4 frame|6 removed #5 frame|7 resumed #6 frame",
            Ug,
            Qg,
            Mg,
            kg,
            Og,
            Fg,
            Lg
        ];
    }
}
class Gg extends Ig {
    constructor(t){
        super(), this.connectionId = "", this.add = [], this.remove = [], this.addTargets = [], this.removeTargets = [], this.updateId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gg, t, e);
    }
    static $() {
        return [
            "UpdateWatchChangeSyncSubscriptionsRequest|1 connection_id 9|2 add #0*|3 remove #0*|4 add_targets #1*|5 remove_targets #1*|6 update_id 9",
            vg,
            Ng
        ];
    }
}
class Hg extends Ig {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hg, t, e);
    }
    static $() {
        return [
            "UpdateWatchChangeSyncSubscriptionsResponse"
        ];
    }
}
class Kg extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class Vg extends Kg {
    constructor(t){
        super(), this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vg, t, e);
    }
    static $() {
        return [
            "GetChangeSyncSnapshotRequest|1 identifier #0|2 change_number 4",
            o
        ];
    }
}
class zg extends Kg {
    constructor(t){
        super(), this.snapshotJson = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zg, t, e);
    }
    static $() {
        return [
            "GetChangeSyncSnapshotResponse|1 snapshot_json 9|2 viewer_state #0",
            Wg
        ];
    }
}
class Wg extends Kg {
    constructor(t){
        super(), this.pendingReviews = [], this.pendingThreads = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wg, t, e);
    }
    static $() {
        return [
            "ChangeSyncViewerState|1 timeline_viewed_at #0?|2 pending_reviews #1*|3 pending_threads #2*",
            n.Timestamp,
            va,
            jl
        ];
    }
}
class Yg extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class jg extends Yg {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new jg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new jg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new jg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(jg, t, e);
    }
    static $() {
        return [
            "GithubOutageDrillProbeRequest"
        ];
    }
}
class Xg extends Yg {
    constructor(t){
        super(), this.intercepted = !1, this.attemptCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xg).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xg).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xg).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xg, t, e);
    }
    static $() {
        return [
            "GithubOutageDrillProbeResponse|1 intercepted 8|2 attempt_count 13"
        ];
    }
}
const Zg = {
    typeName: "origin.v1.OriginService",
    methods: {
        listHostedRepos: {
            name: "ListHostedRepos",
            I: w,
            O: S,
            kind: n.MethodKind.Unary
        },
        createRepo: {
            name: "CreateRepo",
            I: B,
            O: E,
            kind: n.MethodKind.Unary
        },
        createRepoAndEnsureUserNamespace: {
            name: "CreateRepoAndEnsureUserNamespace",
            I: B,
            O: E,
            kind: n.MethodKind.Unary
        },
        publishAgentTempRepo: {
            name: "PublishAgentTempRepo",
            I,
            O: C,
            kind: n.MethodKind.Unary
        },
        createMirroredRepo: {
            name: "CreateMirroredRepo",
            I: b,
            O: E,
            kind: n.MethodKind.Unary
        },
        filterMirrorableGithubRepos: {
            name: "FilterMirrorableGithubRepos",
            I: k,
            O: v,
            kind: n.MethodKind.Unary
        },
        deleteRepo: {
            name: "DeleteRepo",
            I: tt,
            O: et,
            kind: n.MethodKind.Unary
        },
        deleteMirroredRepo: {
            name: "DeleteMirroredRepo",
            I: rt,
            O: nt,
            kind: n.MethodKind.Unary
        },
        getRepo: {
            name: "GetRepo",
            I: gt,
            O: Bt,
            kind: n.MethodKind.Unary
        },
        getRepoWithMirrorInfo: {
            name: "GetRepoWithMirrorInfo",
            I: gt,
            O: It,
            kind: n.MethodKind.Unary
        },
        getRepoByGithubMirror: {
            name: "GetRepoByGithubMirror",
            I: Ct,
            O: It,
            kind: n.MethodKind.Unary
        },
        recordCloneKitUsage: {
            name: "RecordCloneKitUsage",
            I: kt,
            O: vt,
            kind: n.MethodKind.Unary
        },
        updateRepoMergeSettings: {
            name: "UpdateRepoMergeSettings",
            I: it,
            O: ot,
            kind: n.MethodKind.Unary
        },
        updateRepoBranchDeletionSetting: {
            name: "UpdateRepoBranchDeletionSetting",
            I: at,
            O: ut,
            kind: n.MethodKind.Unary
        },
        listRepoCloneKits: {
            name: "ListRepoCloneKits",
            I: ct,
            O: lt,
            kind: n.MethodKind.Unary
        },
        updateRepoVisibility: {
            name: "UpdateRepoVisibility",
            I: dt,
            O: ft,
            kind: n.MethodKind.Unary
        },
        updateRepoDefaultBranch: {
            name: "UpdateRepoDefaultBranch",
            I: pt,
            O: ht,
            kind: n.MethodKind.Unary
        },
        detachRepoMirror: {
            name: "DetachRepoMirror",
            I: q,
            O: R,
            kind: n.MethodKind.Unary
        },
        reattachRepoMirror: {
            name: "ReattachRepoMirror",
            I: P,
            O: x,
            kind: n.MethodKind.Unary
        },
        transitionRepoMirrorStatus: {
            name: "TransitionRepoMirrorStatus",
            I: L,
            O: $,
            kind: n.MethodKind.Unary
        },
        forceRepoMirrorCutover: {
            name: "ForceRepoMirrorCutover",
            I: G,
            O: H,
            kind: n.MethodKind.Unary
        },
        syncMirror: {
            name: "SyncMirror",
            I: K,
            O: V,
            kind: n.MethodKind.Unary
        },
        createRepoMirrorDeployKey: {
            name: "CreateRepoMirrorDeployKey",
            I: D,
            O: U,
            kind: n.MethodKind.Unary
        },
        getRepoMirrorDeployKey: {
            name: "GetRepoMirrorDeployKey",
            I: Q,
            O: M,
            kind: n.MethodKind.Unary
        },
        deleteRepoMirrorDeployKey: {
            name: "DeleteRepoMirrorDeployKey",
            I: O,
            O: F,
            kind: n.MethodKind.Unary
        },
        getMirrorTransitionJob: {
            name: "GetMirrorTransitionJob",
            I: Y,
            O: j,
            kind: n.MethodKind.Unary
        },
        getActiveMirrorTransitionJob: {
            name: "GetActiveMirrorTransitionJob",
            I: z,
            O: W,
            kind: n.MethodKind.Unary
        },
        getRepoNamespace: {
            name: "GetRepoNamespace",
            I: Mt,
            O: Ot,
            kind: n.MethodKind.Unary
        },
        doesNamespaceExistForTeam: {
            name: "DoesNamespaceExistForTeam",
            I: Ft,
            O: Lt,
            kind: n.MethodKind.Unary
        },
        getAuthorizedNamespaces: {
            name: "GetAuthorizedNamespaces",
            I: $t,
            O: Gt,
            kind: n.MethodKind.Unary
        },
        createOriginNamespace: {
            name: "CreateOriginNamespace",
            I: Rt,
            O: Pt,
            kind: n.MethodKind.Unary
        },
        setupTeamNamespace: {
            name: "SetupTeamNamespace",
            I: Tt,
            O: xt,
            kind: n.MethodKind.Unary
        },
        setupUserNamespace: {
            name: "SetupUserNamespace",
            I: Nt,
            O: Qt,
            kind: n.MethodKind.Unary
        },
        suggestOriginNamespace: {
            name: "SuggestOriginNamespace",
            I: Dt,
            O: Ut,
            kind: n.MethodKind.Unary
        },
        listRepoAssignablePolicies: {
            name: "ListRepoAssignablePolicies",
            I: ee,
            O: re,
            kind: n.MethodKind.Unary
        },
        getRepoTeamAccess: {
            name: "GetRepoTeamAccess",
            I: ie,
            O: oe,
            kind: n.MethodKind.Unary
        },
        listRepoGrants: {
            name: "ListRepoGrants",
            I: ce,
            O: le,
            kind: n.MethodKind.Unary
        },
        setRepoTeamAccess: {
            name: "SetRepoTeamAccess",
            I: me,
            O: de,
            kind: n.MethodKind.Unary
        },
        setRepoUserAccess: {
            name: "SetRepoUserAccess",
            I: fe,
            O: pe,
            kind: n.MethodKind.Unary
        },
        createRepoShareInvite: {
            name: "CreateRepoShareInvite",
            I: Ne,
            O: De,
            kind: n.MethodKind.Unary
        },
        createRepoShareBatchInvites: {
            name: "CreateRepoShareBatchInvites",
            I: Ue,
            O: Oe,
            kind: n.MethodKind.Unary
        },
        updateRepoShareInvite: {
            name: "UpdateRepoShareInvite",
            I: Fe,
            O: Le,
            kind: n.MethodKind.Unary
        },
        revokeRepoShareInvite: {
            name: "RevokeRepoShareInvite",
            I: $e,
            O: Ge,
            kind: n.MethodKind.Unary
        },
        listRepoShareInvites: {
            name: "ListRepoShareInvites",
            I: He,
            O: Ke,
            kind: n.MethodKind.Unary
        },
        getShareInviteByToken: {
            name: "GetShareInviteByToken",
            I: ze,
            O: We,
            kind: n.MethodKind.Unary
        },
        declineShareInvite: {
            name: "DeclineShareInvite",
            I: Ye,
            O: je,
            kind: n.MethodKind.Unary
        },
        acceptShareInvite: {
            name: "AcceptShareInvite",
            I: Xe,
            O: Ze,
            kind: n.MethodKind.Unary
        },
        listMyShareInvites: {
            name: "ListMyShareInvites",
            I: er,
            O: rr,
            kind: n.MethodKind.Unary
        },
        listMyExternalRepositories: {
            name: "ListMyExternalRepositories",
            I: sr,
            O: ir,
            kind: n.MethodKind.Unary
        },
        leaveMyExternalRepository: {
            name: "LeaveMyExternalRepository",
            I: mr,
            O: dr,
            kind: n.MethodKind.Unary
        },
        setRepoGroupAccess: {
            name: "SetRepoGroupAccess",
            I: he,
            O: ge,
            kind: n.MethodKind.Unary
        },
        hasOriginPermission: {
            name: "HasOriginPermission",
            I: Xt,
            O: Zt,
            kind: n.MethodKind.Unary
        },
        getNamespaceTeamAccess: {
            name: "GetNamespaceTeamAccess",
            I: _e,
            O: ye,
            kind: n.MethodKind.Unary
        },
        setNamespaceTeamAccess: {
            name: "SetNamespaceTeamAccess",
            I: we,
            O: Se,
            kind: n.MethodKind.Unary
        },
        listNamespaceGrants: {
            name: "ListNamespaceGrants",
            I: Be,
            O: Ee,
            kind: n.MethodKind.Unary
        },
        setNamespaceUserAccess: {
            name: "SetNamespaceUserAccess",
            I: Ie,
            O: Ce,
            kind: n.MethodKind.Unary
        },
        setNamespaceGroupAccess: {
            name: "SetNamespaceGroupAccess",
            I: be,
            O: ke,
            kind: n.MethodKind.Unary
        },
        listNamespaceAssignablePolicies: {
            name: "ListNamespaceAssignablePolicies",
            I: Pe,
            O: Te,
            kind: n.MethodKind.Unary
        },
        listGroupGrantsInNamespace: {
            name: "ListGroupGrantsInNamespace",
            I: ve,
            O: Re,
            kind: n.MethodKind.Unary
        },
        getNamespaceSshCertificateAuthorities: {
            name: "GetNamespaceSshCertificateAuthorities",
            I: hr,
            O: gr,
            kind: n.MethodKind.Unary
        },
        addNamespaceSshCertificateAuthority: {
            name: "AddNamespaceSshCertificateAuthority",
            I: Ar,
            O: _r,
            kind: n.MethodKind.Unary
        },
        removeNamespaceSshCertificateAuthority: {
            name: "RemoveNamespaceSshCertificateAuthority",
            I: yr,
            O: wr,
            kind: n.MethodKind.Unary
        },
        setNamespaceSshRequireCertificates: {
            name: "SetNamespaceSshRequireCertificates",
            I: Sr,
            O: Jr,
            kind: n.MethodKind.Unary
        },
        getNamespaceInboundIpAllowlist: {
            name: "GetNamespaceInboundIpAllowlist",
            I: Ir,
            O: Cr,
            kind: n.MethodKind.Unary
        },
        addNamespaceInboundIpAllowlistEntry: {
            name: "AddNamespaceInboundIpAllowlistEntry",
            I: br,
            O: kr,
            kind: n.MethodKind.Unary
        },
        updateNamespaceInboundIpAllowlistEntry: {
            name: "UpdateNamespaceInboundIpAllowlistEntry",
            I: vr,
            O: qr,
            kind: n.MethodKind.Unary
        },
        deleteNamespaceInboundIpAllowlistEntry: {
            name: "DeleteNamespaceInboundIpAllowlistEntry",
            I: Rr,
            O: Pr,
            kind: n.MethodKind.Unary
        },
        setNamespaceInboundIpAllowlistEnabled: {
            name: "SetNamespaceInboundIpAllowlistEnabled",
            I: Tr,
            O: xr,
            kind: n.MethodKind.Unary
        },
        addSshPublicKey: {
            name: "AddSshPublicKey",
            I: Ur,
            O: Qr,
            kind: n.MethodKind.Unary
        },
        listSshPublicKeys: {
            name: "ListSshPublicKeys",
            I: Mr,
            O: Or,
            kind: n.MethodKind.Unary
        },
        deleteSshPublicKey: {
            name: "DeleteSshPublicKey",
            I: Fr,
            O: Lr,
            kind: n.MethodKind.Unary
        },
        upsertOriginUserSlackNotification: {
            name: "UpsertOriginUserSlackNotification",
            I: Vr,
            O: zr,
            kind: n.MethodKind.Unary
        },
        deleteOriginUserSlackNotification: {
            name: "DeleteOriginUserSlackNotification",
            I: Wr,
            O: Yr,
            kind: n.MethodKind.Unary
        },
        getOriginUserSlackNotification: {
            name: "GetOriginUserSlackNotification",
            I: jr,
            O: Xr,
            kind: n.MethodKind.Unary
        },
        getOriginCommitEmailVerification: {
            name: "GetOriginCommitEmailVerification",
            I: sn,
            O: on,
            kind: n.MethodKind.Unary
        },
        startOriginCommitEmailVerification: {
            name: "StartOriginCommitEmailVerification",
            I: an,
            O: un,
            kind: n.MethodKind.Unary
        },
        createOriginUserSlackReviewReminder: {
            name: "CreateOriginUserSlackReviewReminder",
            I: pn,
            O: hn,
            kind: n.MethodKind.Unary
        },
        updateOriginUserSlackReviewReminder: {
            name: "UpdateOriginUserSlackReviewReminder",
            I: gn,
            O: An,
            kind: n.MethodKind.Unary
        },
        listOriginUserSlackReviewReminders: {
            name: "ListOriginUserSlackReviewReminders",
            I: _n,
            O: yn,
            kind: n.MethodKind.Unary
        },
        getOriginUserSlackReviewReminder: {
            name: "GetOriginUserSlackReviewReminder",
            I: wn,
            O: Sn,
            kind: n.MethodKind.Unary
        },
        disableOriginUserSlackReviewReminder: {
            name: "DisableOriginUserSlackReviewReminder",
            I: Jn,
            O: Bn,
            kind: n.MethodKind.Unary
        },
        subscribeOriginSlackChannel: {
            name: "SubscribeOriginSlackChannel",
            I: qn,
            O: Pn,
            kind: n.MethodKind.Unary
        },
        unsubscribeOriginSlackChannel: {
            name: "UnsubscribeOriginSlackChannel",
            I: Tn,
            O: xn,
            kind: n.MethodKind.Unary
        },
        listOriginSlackChannelSubscriptions: {
            name: "ListOriginSlackChannelSubscriptions",
            I: Nn,
            O: Dn,
            kind: n.MethodKind.Unary
        },
        getCommit: {
            name: "GetCommit",
            I: Si,
            O: jn,
            kind: n.MethodKind.Unary
        },
        getBlob: {
            name: "GetBlob",
            I: Ji,
            O: Xn,
            kind: n.MethodKind.Unary
        },
        getTag: {
            name: "GetTag",
            I: Bi,
            O: Zn,
            kind: n.MethodKind.Unary
        },
        getTree: {
            name: "GetTree",
            I: Ei,
            O: ts,
            kind: n.MethodKind.Unary
        },
        resolveRepoPath: {
            name: "ResolveRepoPath",
            I: ai,
            O: ws,
            kind: n.MethodKind.Unary
        },
        getRepoContent: {
            name: "GetRepoContent",
            I: ui,
            O: Ss,
            kind: n.MethodKind.Unary
        },
        mintRawRepoFileLink: {
            name: "MintRawRepoFileLink",
            I: ci,
            O: li,
            kind: n.MethodKind.Unary
        },
        getRepoTarball: {
            name: "GetRepoTarball",
            I: mi,
            O: di,
            kind: n.MethodKind.Unary
        },
        getRepoContentAtSha: {
            name: "GetRepoContentAtSha",
            I: fi,
            O: Ss,
            kind: n.MethodKind.Unary
        },
        getRepoContentDetailsAtSha: {
            name: "GetRepoContentDetailsAtSha",
            I: pi,
            O: Is,
            kind: n.MethodKind.Unary
        },
        batchGetRepoContentAtSha: {
            name: "BatchGetRepoContentAtSha",
            I: hi,
            O: Bs,
            kind: n.MethodKind.Unary
        },
        resolveCodeIntelligenceSymbolAtPosition: {
            name: "ResolveCodeIntelligenceSymbolAtPosition",
            I: co,
            O: lo,
            kind: n.MethodKind.Unary
        },
        findCodeIntelligenceReferencesAtPosition: {
            name: "FindCodeIntelligenceReferencesAtPosition",
            I: mo,
            O: go,
            kind: n.MethodKind.ServerStreaming
        },
        getRepoCodeowners: {
            name: "GetRepoCodeowners",
            I: gi,
            O: _i,
            kind: n.MethodKind.Unary
        },
        getGithubRepoCodeowners: {
            name: "GetGithubRepoCodeowners",
            I: yi,
            O: wi,
            kind: n.MethodKind.Unary
        },
        getFileHistory: {
            name: "GetFileHistory",
            I: Ii,
            O: Cs,
            kind: n.MethodKind.Unary
        },
        getFileHistoryPage: {
            name: "GetFileHistoryPage",
            I: Ci,
            O: bi,
            kind: n.MethodKind.Unary
        },
        getFileHistoryPageWithDiffStats: {
            name: "GetFileHistoryPageWithDiffStats",
            I: ki,
            O: ks,
            kind: n.MethodKind.Unary
        },
        getFuzzyPaths: {
            name: "GetFuzzyPaths",
            I: Ri,
            O: Ts,
            kind: n.MethodKind.Unary
        },
        listRepoPaths: {
            name: "ListRepoPaths",
            I: Pi,
            O: xs,
            kind: n.MethodKind.Unary
        },
        grepRepo: {
            name: "GrepRepo",
            I: Ti,
            O: Qs,
            kind: n.MethodKind.ServerStreaming
        },
        getPullRequestDiff: {
            name: "GetPullRequestDiff",
            I: xi,
            O: Fs,
            kind: n.MethodKind.ServerStreaming
        },
        getCommitDiff: {
            name: "GetCommitDiff",
            I: Ni,
            O: $s,
            kind: n.MethodKind.ServerStreaming
        },
        getCommitDiff2: {
            name: "GetCommitDiff2",
            I: Di,
            O: Ks,
            kind: n.MethodKind.ServerStreaming
        },
        getCommitChangedPaths: {
            name: "GetCommitChangedPaths",
            I: Ui,
            O: Vs,
            kind: n.MethodKind.Unary
        },
        getCommitDiffStats: {
            name: "GetCommitDiffStats",
            I: Qi,
            O: zs,
            kind: n.MethodKind.Unary
        },
        getBlame: {
            name: "GetBlame",
            I: vi,
            O: qs,
            kind: n.MethodKind.ServerStreaming
        },
        getTreeBlame: {
            name: "GetTreeBlame",
            I: qi,
            O: Ps,
            kind: n.MethodKind.Unary
        },
        listRefs: {
            name: "ListRefs",
            I: Mi,
            O: ti,
            kind: n.MethodKind.Unary
        },
        searchRefs: {
            name: "SearchRefs",
            I: Oi,
            O: ei,
            kind: n.MethodKind.Unary
        },
        lookupCommits: {
            name: "LookupCommits",
            I: Fi,
            O: ss,
            kind: n.MethodKind.Unary
        },
        getCommitActivity: {
            name: "GetCommitActivity",
            I: Li,
            O: $i,
            kind: n.MethodKind.Unary
        },
        compareCommits: {
            name: "CompareCommits",
            I: Ki,
            O: ls,
            kind: n.MethodKind.Unary
        },
        listCommitsInRange: {
            name: "ListCommitsInRange",
            I: Vi,
            O: cs,
            kind: n.MethodKind.Unary
        },
        canMerge: {
            name: "CanMerge",
            I: Hi,
            O: ms,
            kind: n.MethodKind.Unary
        },
        createCommitFromFiles: {
            name: "CreateCommitFromFiles",
            I: zi,
            O: Wi,
            kind: n.MethodKind.Unary
        },
        getCollectedPullRequestDiff: {
            name: "GetCollectedPullRequestDiff",
            I: ji,
            O: Xi,
            kind: n.MethodKind.Unary
        },
        getDiffListing: {
            name: "GetDiffListing",
            I: Eo,
            O: Ro,
            kind: n.MethodKind.Unary
        },
        streamDiffFiles: {
            name: "StreamDiffFiles",
            I: Io,
            O: Ro,
            kind: n.MethodKind.ServerStreaming
        },
        getDiffFile: {
            name: "GetDiffFile",
            I: bo,
            O: Ro,
            kind: n.MethodKind.Unary
        },
        getDiffEngineInfo: {
            name: "GetDiffEngineInfo",
            I: vo,
            O: Ro,
            kind: n.MethodKind.Unary
        },
        portAnchors: {
            name: "PortAnchors",
            I: qo,
            O: Ro,
            kind: n.MethodKind.Unary
        },
        createChange: {
            name: "CreateChange",
            I: ea,
            O: ra,
            kind: n.MethodKind.Unary
        },
        importGithubPullRequest: {
            name: "ImportGithubPullRequest",
            I: _l,
            O: yl,
            kind: n.MethodKind.Unary
        },
        updateChange: {
            name: "UpdateChange",
            I: oa,
            O: aa,
            kind: n.MethodKind.Unary
        },
        updateChangeBranch: {
            name: "UpdateChangeBranch",
            I: ua,
            O: ca,
            kind: n.MethodKind.Unary
        },
        getMergeConflictResolution: {
            name: "GetMergeConflictResolution",
            I: Fl,
            O: Ll,
            kind: n.MethodKind.Unary
        },
        applyMergeConflictResolution: {
            name: "ApplyMergeConflictResolution",
            I: $l,
            O: Gl,
            kind: n.MethodKind.Unary
        },
        undoMergeConflictResolution: {
            name: "UndoMergeConflictResolution",
            I: Hl,
            O: Kl,
            kind: n.MethodKind.Unary
        },
        deleteChangeHeadBranch: {
            name: "DeleteChangeHeadBranch",
            I: la,
            O: ma,
            kind: n.MethodKind.Unary
        },
        restorePullRequestBranch: {
            name: "RestorePullRequestBranch",
            I: da,
            O: fa,
            kind: n.MethodKind.Unary
        },
        retargetChange: {
            name: "RetargetChange",
            I: pa,
            O: ha,
            kind: n.MethodKind.Unary
        },
        foldChange: {
            name: "FoldChange",
            I: ga,
            O: Aa,
            kind: n.MethodKind.Unary
        },
        landChangeTreePath: {
            name: "LandChangeTreePath",
            I: _a,
            O: ya,
            kind: n.MethodKind.Unary
        },
        splitChangeIntoStack: {
            name: "SplitChangeIntoStack",
            I: wa,
            O: Ja,
            kind: n.MethodKind.Unary
        },
        updateChangeMetadata: {
            name: "UpdateChangeMetadata",
            I: Ba,
            O: Ea,
            kind: n.MethodKind.Unary
        },
        updateChangeStatus: {
            name: "UpdateChangeStatus",
            I: Ia,
            O: ba,
            kind: n.MethodKind.Unary
        },
        createReview: {
            name: "CreateReview",
            I: Da,
            O: Ua,
            kind: n.MethodKind.Unary
        },
        updateReview: {
            name: "UpdateReview",
            I: Qa,
            O: Ma,
            kind: n.MethodKind.Unary
        },
        dismissReview: {
            name: "DismissReview",
            I: Oa,
            O: Fa,
            kind: n.MethodKind.Unary
        },
        listReviews: {
            name: "ListReviews",
            I: La,
            O: $a,
            kind: n.MethodKind.Unary
        },
        listChangeTimelineEvents: {
            name: "ListChangeTimelineEvents",
            I: Ga,
            O: Ha,
            kind: n.MethodKind.Unary
        },
        startReview: {
            name: "StartReview",
            I: Hc,
            O: Kc,
            kind: n.MethodKind.Unary
        },
        submitReview: {
            name: "SubmitReview",
            I: Vc,
            O: zc,
            kind: n.MethodKind.Unary
        },
        discardPendingReview: {
            name: "DiscardPendingReview",
            I: Wc,
            O: Yc,
            kind: n.MethodKind.Unary
        },
        getPendingReview: {
            name: "GetPendingReview",
            I: jc,
            O: Xc,
            kind: n.MethodKind.Unary
        },
        requestReview: {
            name: "RequestReview",
            I: tu,
            O: eu,
            kind: n.MethodKind.Unary
        },
        applyReviewRequestChanges: {
            name: "ApplyReviewRequestChanges",
            I: nu,
            O: su,
            kind: n.MethodKind.Unary
        },
        requestReviews: {
            name: "RequestReviews",
            I: iu,
            O: ou,
            kind: n.MethodKind.Unary
        },
        closeReviewRequest: {
            name: "CloseReviewRequest",
            I: au,
            O: uu,
            kind: n.MethodKind.Unary
        },
        listReviewRequestEvents: {
            name: "ListReviewRequestEvents",
            I: Xa,
            O: Za,
            kind: n.MethodKind.Unary
        },
        addAssignee: {
            name: "AddAssignee",
            I: cu,
            O: lu,
            kind: n.MethodKind.Unary
        },
        removeAssignee: {
            name: "RemoveAssignee",
            I: mu,
            O: du,
            kind: n.MethodKind.Unary
        },
        listOriginRepoReviewerCandidates: {
            name: "ListOriginRepoReviewerCandidates",
            I: hu,
            O: Au,
            kind: n.MethodKind.Unary
        },
        createComment: {
            name: "CreateComment",
            I: Ka,
            O: Va,
            kind: n.MethodKind.Unary
        },
        listComments: {
            name: "ListComments",
            I: za,
            O: Wa,
            kind: n.MethodKind.Unary
        },
        createCommentThread: {
            name: "CreateCommentThread",
            I: Xl,
            O: Zl,
            kind: n.MethodKind.Unary
        },
        submitPullRequestGateReport: {
            name: "SubmitPullRequestGateReport",
            I: el,
            O: al,
            kind: n.MethodKind.Unary
        },
        listPullRequestGateReports: {
            name: "ListPullRequestGateReports",
            I: ml,
            O: dl,
            kind: n.MethodKind.Unary
        },
        uploadPullRequestGateTranscript: {
            name: "UploadPullRequestGateTranscript",
            I: rl,
            O: nl,
            kind: n.MethodKind.Unary
        },
        listCommentThreads: {
            name: "ListCommentThreads",
            I: tm,
            O: em,
            kind: n.MethodKind.Unary
        },
        addCommentToThread: {
            name: "AddCommentToThread",
            I: rm,
            O: nm,
            kind: n.MethodKind.Unary
        },
        resolveCommentThread: {
            name: "ResolveCommentThread",
            I: sm,
            O: im,
            kind: n.MethodKind.Unary
        },
        reopenCommentThread: {
            name: "ReopenCommentThread",
            I: om,
            O: am,
            kind: n.MethodKind.Unary
        },
        updateComment: {
            name: "UpdateComment",
            I: um,
            O: cm,
            kind: n.MethodKind.Unary
        },
        deleteComment: {
            name: "DeleteComment",
            I: lm,
            O: mm,
            kind: n.MethodKind.Unary
        },
        setCommentReaction: {
            name: "SetCommentReaction",
            I: dm,
            O: fm,
            kind: n.MethodKind.Unary
        },
        listCommentReactions: {
            name: "ListCommentReactions",
            I: pm,
            O: hm,
            kind: n.MethodKind.Unary
        },
        markFileAsViewed: {
            name: "MarkFileAsViewed",
            I: Am,
            O: _m,
            kind: n.MethodKind.Unary
        },
        unmarkFileAsViewed: {
            name: "UnmarkFileAsViewed",
            I: ym,
            O: wm,
            kind: n.MethodKind.Unary
        },
        markDirectoryAsViewed: {
            name: "MarkDirectoryAsViewed",
            I: Sm,
            O: Jm,
            kind: n.MethodKind.Unary
        },
        markAllFilesAsViewed: {
            name: "MarkAllFilesAsViewed",
            I: Bm,
            O: Em,
            kind: n.MethodKind.Unary
        },
        unmarkAllFilesAsViewed: {
            name: "UnmarkAllFilesAsViewed",
            I: Im,
            O: Cm,
            kind: n.MethodKind.Unary
        },
        listFileViewedStates: {
            name: "ListFileViewedStates",
            I: bm,
            O: km,
            kind: n.MethodKind.Unary
        },
        markPullRequestAsViewed: {
            name: "MarkPullRequestAsViewed",
            I: Tm,
            O: xm,
            kind: n.MethodKind.Unary
        },
        getGeneratedCodeTour: {
            name: "GetGeneratedCodeTour",
            I: Qm,
            O: Mm,
            kind: n.MethodKind.Unary
        },
        upsertGeneratedCodeTour: {
            name: "UpsertGeneratedCodeTour",
            I: Om,
            O: Fm,
            kind: n.MethodKind.Unary
        },
        enableChangeMergeWhenReady: {
            name: "EnableChangeMergeWhenReady",
            I: Gm,
            O: Hm,
            kind: n.MethodKind.Unary
        },
        getChangeMergeWhenReady: {
            name: "GetChangeMergeWhenReady",
            I: Km,
            O: Vm,
            kind: n.MethodKind.Unary
        },
        disableChangeMergeWhenReady: {
            name: "DisableChangeMergeWhenReady",
            I: zm,
            O: Wm,
            kind: n.MethodKind.Unary
        },
        enqueueForMerge: {
            name: "EnqueueForMerge",
            I: ff,
            O: pf,
            kind: n.MethodKind.Unary
        },
        cancelMergeQueueEntry: {
            name: "CancelMergeQueueEntry",
            I: hf,
            O: gf,
            kind: n.MethodKind.Unary
        },
        getMergeQueueStatus: {
            name: "GetMergeQueueStatus",
            I: Af,
            O: _f,
            kind: n.MethodKind.Unary
        },
        getMergeQueue: {
            name: "GetMergeQueue",
            I: yf,
            O: wf,
            kind: n.MethodKind.Unary
        },
        getMergeQueueConfig: {
            name: "GetMergeQueueConfig",
            I: Ef,
            O: If,
            kind: n.MethodKind.Unary
        },
        enableMergeQueue: {
            name: "EnableMergeQueue",
            I: bf,
            O: kf,
            kind: n.MethodKind.Unary
        },
        disableMergeQueue: {
            name: "DisableMergeQueue",
            I: vf,
            O: qf,
            kind: n.MethodKind.Unary
        },
        updateMergeQueueConfig: {
            name: "UpdateMergeQueueConfig",
            I: Rf,
            O: Pf,
            kind: n.MethodKind.Unary
        },
        getChange: {
            name: "GetChange",
            I: _u,
            O: Bu,
            kind: n.MethodKind.Unary
        },
        getChangeCodeownersApplication: {
            name: "GetChangeCodeownersApplication",
            I: Eu,
            O: Uu,
            kind: n.MethodKind.Unary
        },
        getProjectedLatestVersions: {
            name: "GetProjectedLatestVersions",
            I: Lu,
            O: Gu,
            kind: n.MethodKind.Unary
        },
        getChangeStackPageData: {
            name: "GetChangeStackPageData",
            I: $f,
            O: Gf,
            kind: n.MethodKind.Unary
        },
        getChangeStack: {
            name: "GetChangeStack",
            I: Mu,
            O: Fu,
            kind: n.MethodKind.Unary
        },
        listChangeCommits: {
            name: "ListChangeCommits",
            I: Hu,
            O: Ku,
            kind: n.MethodKind.Unary
        },
        listChanges: {
            name: "ListChanges",
            I: Wu,
            O: sc,
            kind: n.MethodKind.Unary
        },
        listChangesByHeadRef: {
            name: "ListChangesByHeadRef",
            I: Yu,
            O: ju,
            kind: n.MethodKind.Unary
        },
        getCommitReferences: {
            name: "GetCommitReferences",
            I: Xu,
            O: tc,
            kind: n.MethodKind.Unary
        },
        batchGetChanges: {
            name: "BatchGetChanges",
            I: rc,
            O: nc,
            kind: n.MethodKind.Unary
        },
        searchChanges: {
            name: "SearchChanges",
            I: uc,
            O: cc,
            kind: n.MethodKind.Unary
        },
        getSectionOfChanges: {
            name: "GetSectionOfChanges",
            I: ic,
            O: oc,
            kind: n.MethodKind.Unary
        },
        countSectionsOfChanges: {
            name: "CountSectionsOfChanges",
            I: lc,
            O: mc,
            kind: n.MethodKind.Unary
        },
        resolveSectionPersonalBotAuthors: {
            name: "ResolveSectionPersonalBotAuthors",
            I: dc,
            O: fc,
            kind: n.MethodKind.Unary
        },
        getCiState: {
            name: "GetCiState",
            I: id,
            O: od,
            kind: n.MethodKind.Unary
        },
        batchGetCommitCheckRollups: {
            name: "BatchGetCommitCheckRollups",
            I: ad,
            O: cd,
            kind: n.MethodKind.Unary
        },
        getCheckRun: {
            name: "GetCheckRun",
            I: ld,
            O: md,
            kind: n.MethodKind.Unary
        },
        listRepoCheckSources: {
            name: "ListRepoCheckSources",
            I: dd,
            O: hd,
            kind: n.MethodKind.Unary
        },
        getOriginCiJobLog: {
            name: "GetOriginCiJobLog",
            I: af,
            O: uf,
            kind: n.MethodKind.Unary
        },
        postCheckRun: {
            name: "PostCheckRun",
            I: Bd,
            O: Cd,
            kind: n.MethodKind.Unary
        },
        createCheckRunAnnotations: {
            name: "CreateCheckRunAnnotations",
            I: Rd,
            O: Pd,
            kind: n.MethodKind.Unary
        },
        listCheckRunAnnotations: {
            name: "ListCheckRunAnnotations",
            I: Td,
            O: xd,
            kind: n.MethodKind.Unary
        },
        rerequestCheckRun: {
            name: "RerequestCheckRun",
            I: Nd,
            O: Dd,
            kind: n.MethodKind.Unary
        },
        getChangesetMergeability: {
            name: "GetChangesetMergeability",
            I: Ud,
            O: Qd,
            kind: n.MethodKind.Unary
        },
        getReviewRequirements: {
            name: "GetReviewRequirements",
            I: Vf,
            O: zf,
            kind: n.MethodKind.Unary
        },
        mergeStack: {
            name: "MergeStack",
            I: Xd,
            O: Zd,
            kind: n.MethodKind.Unary
        },
        revertPullRequest: {
            name: "RevertPullRequest",
            I: sa,
            O: ia,
            kind: n.MethodKind.Unary
        },
        restackStack: {
            name: "RestackStack",
            I: tf,
            O: rf,
            kind: n.MethodKind.Unary
        },
        getApp: {
            name: "GetApp",
            I: fp,
            O: pp,
            kind: n.MethodKind.Unary
        },
        createApp: {
            name: "CreateApp",
            I: mp,
            O: dp,
            kind: n.MethodKind.Unary
        },
        addAppSigningKey: {
            name: "AddAppSigningKey",
            I: hp,
            O: gp,
            kind: n.MethodKind.Unary
        },
        revokeAppSigningKey: {
            name: "RevokeAppSigningKey",
            I: Ap,
            O: _p,
            kind: n.MethodKind.Unary
        },
        getAppMetadata: {
            name: "GetAppMetadata",
            I: nh,
            O: sh,
            kind: n.MethodKind.Unary
        },
        listNamespaceApps: {
            name: "ListNamespaceApps",
            I: yp,
            O: wp,
            kind: n.MethodKind.Unary
        },
        listPublicApps: {
            name: "ListPublicApps",
            I: Bp,
            O: Ep,
            kind: n.MethodKind.Unary
        },
        createInstallation: {
            name: "CreateInstallation",
            I: bp,
            O: kp,
            kind: n.MethodKind.Unary
        },
        getInstallation: {
            name: "GetInstallation",
            I: vp,
            O: qp,
            kind: n.MethodKind.Unary
        },
        listNamespaceInstallations: {
            name: "ListNamespaceInstallations",
            I: Rp,
            O: Pp,
            kind: n.MethodKind.Unary
        },
        listRepoInstallations: {
            name: "ListRepoInstallations",
            I: ch,
            O: lh,
            kind: n.MethodKind.Unary
        },
        updateApp: {
            name: "UpdateApp",
            I: Tp,
            O: Gp,
            kind: n.MethodKind.Unary
        },
        setAppWebhookDeliveryEnabled: {
            name: "SetAppWebhookDeliveryEnabled",
            I: Op,
            O: Fp,
            kind: n.MethodKind.Unary
        },
        sendAppWebhookTestDelivery: {
            name: "SendAppWebhookTestDelivery",
            I: Lp,
            O: $p,
            kind: n.MethodKind.Unary
        },
        deleteApp: {
            name: "DeleteApp",
            I: Vp,
            O: zp,
            kind: n.MethodKind.Unary
        },
        setAppIcon: {
            name: "SetAppIcon",
            I: Hp,
            O: Kp,
            kind: n.MethodKind.Unary
        },
        deleteInstallation: {
            name: "DeleteInstallation",
            I: Wp,
            O: Yp,
            kind: n.MethodKind.Unary
        },
        suspendInstallation: {
            name: "SuspendInstallation",
            I: ih,
            O: oh,
            kind: n.MethodKind.Unary
        },
        unsuspendInstallation: {
            name: "UnsuspendInstallation",
            I: ah,
            O: uh,
            kind: n.MethodKind.Unary
        },
        listReposForAppInstall: {
            name: "ListReposForAppInstall",
            I: J,
            O: S,
            kind: n.MethodKind.Unary
        },
        previewAppInstallation: {
            name: "PreviewAppInstallation",
            I: Xp,
            O: th,
            kind: n.MethodKind.Unary
        },
        requestAppInstall: {
            name: "RequestAppInstall",
            I: mh,
            O: dh,
            kind: n.MethodKind.Unary
        },
        getMyAppInstallRequest: {
            name: "GetMyAppInstallRequest",
            I: fh,
            O: ph,
            kind: n.MethodKind.Unary
        },
        cancelMyAppInstallRequest: {
            name: "CancelMyAppInstallRequest",
            I: hh,
            O: gh,
            kind: n.MethodKind.Unary
        },
        listAppInstallRequests: {
            name: "ListAppInstallRequests",
            I: yh,
            O: wh,
            kind: n.MethodKind.Unary
        },
        denyAppInstallRequests: {
            name: "DenyAppInstallRequests",
            I: Sh,
            O: Jh,
            kind: n.MethodKind.Unary
        },
        getAtlasNode: {
            name: "GetAtlasNode",
            I: Rh,
            O: Th,
            kind: n.MethodKind.Unary
        },
        listAtlasNodePaths: {
            name: "ListAtlasNodePaths",
            I: Fh,
            O: $h,
            kind: n.MethodKind.Unary
        },
        getAtlasRepoStatus: {
            name: "GetAtlasRepoStatus",
            I: Nh,
            O: Dh,
            kind: n.MethodKind.Unary
        },
        setAtlasRepoConfig: {
            name: "SetAtlasRepoConfig",
            I: Uh,
            O: Qh,
            kind: n.MethodKind.Unary
        },
        refreshAtlasRepo: {
            name: "RefreshAtlasRepo",
            I: Mh,
            O: Oh,
            kind: n.MethodKind.Unary
        },
        listRulesets: {
            name: "ListRulesets",
            I: eg,
            O: rg,
            kind: n.MethodKind.Unary
        },
        getRuleset: {
            name: "GetRuleset",
            I: ng,
            O: sg,
            kind: n.MethodKind.Unary
        },
        upsertRuleset: {
            name: "UpsertRuleset",
            I: ig,
            O: og,
            kind: n.MethodKind.Unary
        },
        deleteRuleset: {
            name: "DeleteRuleset",
            I: ag,
            O: ug,
            kind: n.MethodKind.Unary
        },
        createLabel: {
            name: "CreateLabel",
            I: mg,
            O: dg,
            kind: n.MethodKind.Unary
        },
        updateLabel: {
            name: "UpdateLabel",
            I: fg,
            O: pg,
            kind: n.MethodKind.Unary
        },
        deleteLabel: {
            name: "DeleteLabel",
            I: hg,
            O: gg,
            kind: n.MethodKind.Unary
        },
        listLabels: {
            name: "ListLabels",
            I: Ag,
            O: _g,
            kind: n.MethodKind.Unary
        },
        getLabelByName: {
            name: "GetLabelByName",
            I: yg,
            O: wg,
            kind: n.MethodKind.Unary
        },
        addLabelToChange: {
            name: "AddLabelToChange",
            I: Sg,
            O: Jg,
            kind: n.MethodKind.Unary
        },
        removeLabelFromChange: {
            name: "RemoveLabelFromChange",
            I: Bg,
            O: Eg,
            kind: n.MethodKind.Unary
        },
        checkChangeCreationAccess: {
            name: "CheckChangeCreationAccess",
            I: Zc,
            O: tl,
            kind: n.MethodKind.Unary
        },
        watchChangeSyncEvents: {
            name: "WatchChangeSyncEvents",
            I: Cg,
            O: bg,
            kind: n.MethodKind.ServerStreaming
        },
        getChangeSyncSnapshot: {
            name: "GetChangeSyncSnapshot",
            I: Vg,
            O: zg,
            kind: n.MethodKind.Unary
        },
        watchChangeSyncEventsV2: {
            name: "WatchChangeSyncEventsV2",
            I: Dg,
            O: $g,
            kind: n.MethodKind.ServerStreaming
        },
        updateWatchChangeSyncSubscriptions: {
            name: "UpdateWatchChangeSyncSubscriptions",
            I: Gg,
            O: Hg,
            kind: n.MethodKind.Unary
        },
        fastForwardBranch: {
            name: "FastForwardBranch",
            I: Zi,
            O: to,
            kind: n.MethodKind.Unary
        },
        listRepoExternalCollaborators: {
            name: "ListRepoExternalCollaborators",
            I: ar,
            O: ur,
            kind: n.MethodKind.Unary
        },
        setRepoExternalCollaboratorAccess: {
            name: "SetRepoExternalCollaboratorAccess",
            I: cr,
            O: lr,
            kind: n.MethodKind.Unary
        },
        previewAppUserConfirmation: {
            name: "PreviewAppUserConfirmation",
            I: Bh,
            O: Ih,
            kind: n.MethodKind.Unary
        },
        confirmAppUserConfirmation: {
            name: "ConfirmAppUserConfirmation",
            I: Ch,
            O: bh,
            kind: n.MethodKind.Unary
        },
        githubOutageDrillProbe: {
            name: "GithubOutageDrillProbe",
            I: jg,
            O: Xg,
            kind: n.MethodKind.Unary
        }
    }
};
