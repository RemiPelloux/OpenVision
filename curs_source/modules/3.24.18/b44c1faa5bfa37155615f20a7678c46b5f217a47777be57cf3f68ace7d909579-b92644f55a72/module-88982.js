"use strict";
require.r(exports), require.d(exports, {
    OriginService: ()=>Xg
});
var n = require("./module-36038.js"), s = require("./module-8592.js");
class o extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class i extends o {
    constructor(e){
        super(), this.org = "", this.name = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new i).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new i).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new i).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(i, e, t);
    }
    static $() {
        return [
            "ClientRepoIdentifier|1 org 9|2 name 9"
        ];
    }
}
class a extends o {
    constructor(e){
        super(), this.owner = "", this.repo = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new a).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new a).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new a).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(a, e, t);
    }
    static $() {
        return [
            "GithubRepoIdentifier|1 owner 9|2 repo 9|3 enterprise_id 9?"
        ];
    }
}
const c = "origin.v1.";
class l extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return c;
    }
}
var u = (0, s.QT)(n.proto3, c, "ListHostedReposOrderBy", [
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
], 1), d = (0, s.QT)(n.proto3, c, "RepoKind", [
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
], 1), p = (0, s.QT)(n.proto3, c, "RepoVisibility", [
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
], 1), m = (0, s.QT)(n.proto3, c, "RepoMirrorTransition", [
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
], 1), h = (0, s.QT)(n.proto3, c, "RepoMirrorTransitionJobStatus", [
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
], 1), f = (0, s.QT)(n.proto3, c, "RepoMirrorTransitionJobPhase", [
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
], 1), g = (0, s.QT)(n.proto3, c, "MirrorStatus", [
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
], 1), y = (0, s.QT)(n.proto3, c, "OriginNamespaceOwnerType", [
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
], 1), w = (0, s.QT)(n.proto3, c, "AuthorizedNamespaceAccessReason", [
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
class v extends l {
    constructor(e){
        super(), this.org = "", this.name = "", this.cloneUrl = "", this.defaultBranch = "", this.repoUuid = "", this.mirrorStatus = g.UNSPECIFIED, this.forgeEnvironment = "", this.originNamespaceId = "", this.allowMergeCommit = !1, this.allowSquashMerge = !1, this.visibility = p.UNSPECIFIED, this.repoKind = d.UNSPECIFIED, this.deleteBranchOnMerge = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new v).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new v).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new v).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(v, e, t);
    }
    static $() {
        return [
            "RepoSummary|1 org 9|2 name 9|3 clone_url 9|4 default_branch 9|6 github_node_id 9?|7 github_enterprise_id 9?|8 repo_uuid 9|9 mirror_status #0|10 last_pushed_at #1?|11 forge_environment 9|12 origin_namespace_id 9|13 allow_merge_commit 8|14 allow_squash_merge 8|15 visibility #2|16 github_mirror_info #3?|17 deleted_at #1?|18 repo_kind #4|19 owner_type 9?|20 delete_branch_on_merge 8|21 created_at #1?|22 updated_at #1?|23 github_installation_id 4?",
            g,
            n.Timestamp,
            p,
            Ee,
            d
        ];
    }
}
class _ extends l {
    constructor(e){
        super(), this.pageSize = 0, this.pageToken = "", this.search = "", this.orderBy = u.UNSPECIFIED, this.namespace = "", this.includeGithubMirrorInfo = !1, this.applyRepositoryPickerPolicy = !1, this.includeExternalCollaboratorRepos = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_, e, t);
    }
    static $() {
        return [
            "ListHostedReposRequest|1 page_size 13|2 page_token 9|3 search 9|4 order_by #0|5 namespace 9|6 include_github_mirror_info 8|7 apply_repository_picker_policy 8|8 include_external_collaborator_repos 8",
            u
        ];
    }
}
class A extends l {
    constructor(e){
        super(), this.repositories = [], this.nextPageToken = "", this.totalCount = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new A).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new A).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new A).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(A, e, t);
    }
    static $() {
        return [
            "ListHostedReposResponse|1 repositories #0*|2 next_page_token 9|3 total_count 13",
            v
        ];
    }
}
class S extends l {
    constructor(e){
        super(), this.namespace = "", this.pageSize = 0, this.pageToken = "", this.search = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new S).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new S).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new S).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(S, e, t);
    }
    static $() {
        return [
            "ListReposForAppInstallRequest|1 namespace 9|2 page_size 13|3 page_token 9|4 search 9"
        ];
    }
}
class b extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new b).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new b).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new b).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(b, e, t);
    }
    static $() {
        return [
            "CreateRepoRequest|1 identifier #0|2 default_branch 9?|6 forge_environment 9?|7 repo_kind #1?|8 visibility #2?",
            i,
            d,
            p
        ];
    }
}
class E extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new E).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new E).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new E).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(E, e, t);
    }
    static $() {
        return [
            "CreateRepoResponse|3 repository #0",
            se
        ];
    }
}
class I extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new I).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new I).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new I).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(I, e, t);
    }
    static $() {
        return [
            "PublishAgentTempRepoRequest|1 identifier #0|2 new_name 9?|3 visibility #1?",
            i,
            p
        ];
    }
}
class C extends l {
    constructor(e){
        super(), this.published = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new C).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new C).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new C).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(C, e, t);
    }
    static $() {
        return [
            "PublishAgentTempRepoResponse|1 published 8|2 repository #0",
            se
        ];
    }
}
class k extends l {
    constructor(e){
        super(), this.targetNamespace = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new k).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new k).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new k).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(k, e, t);
    }
    static $() {
        return [
            "CreateMirroredRepoRequest|1 github_source #0|2 target_namespace 9|3 forge_environment 9?|4 repo_kind #1?|6 github_installation_id 3?",
            a,
            d
        ];
    }
}
class x extends l {
    constructor(e){
        super(), this.repos = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new x).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new x).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new x).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(x, e, t);
    }
    static $() {
        return [
            "FilterMirrorableGithubReposRequest|1 repos #0*|2 org_admin_only 8?",
            a
        ];
    }
}
class T extends l {
    constructor(e){
        super(), this.mirrorableRepos = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new T).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new T).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new T).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(T, e, t);
    }
    static $() {
        return [
            "FilterMirrorableGithubReposResponse|1 mirrorable_repos #0*",
            a
        ];
    }
}
class R extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new R).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new R).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new R).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(R, e, t);
    }
    static $() {
        return [
            "DetachRepoMirrorRequest|1 identifier #0",
            i
        ];
    }
}
class B extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new B).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new B).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new B).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(B, e, t);
    }
    static $() {
        return [
            "DetachRepoMirrorResponse"
        ];
    }
}
class P extends l {
    constructor(e){
        super(), this.dryRun = !1, this.allowOverwrite = !1, this.waitForCatchUp = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new P).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new P).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new P).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(P, e, t);
    }
    static $() {
        return [
            "ReattachRepoMirrorRequest|1 identifier #0|2 dry_run 8|3 allow_overwrite 8|4 wait_for_catch_up 8",
            i
        ];
    }
}
class J extends l {
    constructor(e){
        super(), this.inSync = !1, this.totalMismatches = 0, this.localRefCount = 0, this.remoteRefCount = 0, this.divergedRefs = [], this.divergedRefCount = 0, this.sampleComplete = !1, this.sampledMismatchCount = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new J).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new J).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new J).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(J, e, t);
    }
    static $() {
        return [
            "MirrorRefComparison|1 in_sync 8|2 total_mismatches 5|3 local_ref_count 5|4 remote_ref_count 5|5 diverged_refs 9*|6 diverged_ref_count 5|7 sample_complete 8|8 sampled_mismatch_count 5"
        ];
    }
}
class M extends l {
    constructor(e){
        super(), this.deployKeyPresent = !1, this.catchUpDispatched = !1, this.catchUpCompleted = !1, this.githubStateSkipped = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new M).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new M).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new M).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(M, e, t);
    }
    static $() {
        return [
            "ReattachRepoMirrorResponse|1 repository #0|2 github_state #1|3 deploy_key_present 8|4 catch_up_dispatched 8|5 catch_up_completed 8|6 catch_up_error 9?|7 github_state_skipped 8",
            se,
            J
        ];
    }
}
class q extends l {
    constructor(e){
        super(), this.publicKeyOpenssh = "", this.fingerprintSha256 = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new q).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new q).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new q).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(q, e, t);
    }
    static $() {
        return [
            "RepoMirrorDeployKeyInfo|1 public_key_openssh 9|2 fingerprint_sha256 9|3 created_at #0|4 updated_at #0",
            n.Timestamp
        ];
    }
}
class D extends l {
    constructor(e){
        super(), this.rotate = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new D).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new D).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new D).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(D, e, t);
    }
    static $() {
        return [
            "CreateRepoMirrorDeployKeyRequest|1 identifier #0|2 rotate 8",
            i
        ];
    }
}
class O extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new O).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new O).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new O).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(O, e, t);
    }
    static $() {
        return [
            "CreateRepoMirrorDeployKeyResponse|1 deploy_key #0",
            q
        ];
    }
}
class N extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new N).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new N).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new N).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(N, e, t);
    }
    static $() {
        return [
            "GetRepoMirrorDeployKeyRequest|1 identifier #0",
            i
        ];
    }
}
class F extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new F).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new F).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new F).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(F, e, t);
    }
    static $() {
        return [
            "GetRepoMirrorDeployKeyResponse|1 deploy_key #0?",
            q
        ];
    }
}
class U extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new U).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new U).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new U).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(U, e, t);
    }
    static $() {
        return [
            "DeleteRepoMirrorDeployKeyRequest|1 identifier #0",
            i
        ];
    }
}
class L extends l {
    constructor(e){
        super(), this.deleted = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new L).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new L).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new L).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(L, e, t);
    }
    static $() {
        return [
            "DeleteRepoMirrorDeployKeyResponse|1 deleted 8"
        ];
    }
}
class $ extends l {
    constructor(e){
        super(), this.transition = m.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($, e, t);
    }
    static $() {
        return [
            "TransitionRepoMirrorStatusRequest|1 identifier #0|2 transition #1",
            i,
            m
        ];
    }
}
class Q extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Q).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Q).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Q).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Q, e, t);
    }
    static $() {
        return [
            "TransitionRepoMirrorStatusResponse|1 repository #0|2 active_job_info #1",
            se,
            X
        ];
    }
}
class j extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new j).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new j).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new j).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(j, e, t);
    }
    static $() {
        return [
            "ForceRepoMirrorCutoverRequest|1 identifier #0",
            i
        ];
    }
}
class G extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new G).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new G).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new G).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(G, e, t);
    }
    static $() {
        return [
            "ForceRepoMirrorCutoverResponse|1 repository #0|2 active_job_info #1",
            se,
            X
        ];
    }
}
class H extends l {
    constructor(e){
        super(), this.ref = "", this.wait = !1, this.sha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new H).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new H).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new H).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(H, e, t);
    }
    static $() {
        return [
            "SyncMirrorRequest|1 identifier #0|2 ref 9|3 wait 8|4 sha 9",
            i
        ];
    }
}
class z extends l {
    constructor(e){
        super(), this.synced = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new z).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new z).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new z).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(z, e, t);
    }
    static $() {
        return [
            "SyncMirrorResponse|1 synced 8"
        ];
    }
}
class W extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new W).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new W).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new W).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(W, e, t);
    }
    static $() {
        return [
            "GetActiveMirrorTransitionJobRequest|1 identifier #0",
            i
        ];
    }
}
class V extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new V).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new V).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new V).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(V, e, t);
    }
    static $() {
        return [
            "GetActiveMirrorTransitionJobResponse|1 active_job_info #0|2 last_job_info #0",
            X
        ];
    }
}
class K extends l {
    constructor(e){
        super(), this.jobId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new K).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new K).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new K).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(K, e, t);
    }
    static $() {
        return [
            "GetMirrorTransitionJobRequest|1 identifier #0|2 job_id 9",
            i
        ];
    }
}
class Y extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Y).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Y).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Y).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Y, e, t);
    }
    static $() {
        return [
            "GetMirrorTransitionJobResponse|1 job #0|2 repository #1",
            X,
            se
        ];
    }
}
class Z extends l {
    constructor(e){
        super(), this.subphase = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Z).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Z).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Z).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Z, e, t);
    }
    static $() {
        return [
            "MirrorFetchProgress|1 subphase 9|2 bytes_received 4?|3 heartbeat_at #0?",
            n.Timestamp
        ];
    }
}
class X extends l {
    constructor(e){
        super(), this.id = "", this.transition = m.UNSPECIFIED, this.mirrorStatus = g.UNSPECIFIED, this.status = h.UNSPECIFIED, this.phase = f.UNSPECIFIED, this.attemptCount = 0, this.createdAt = "", this.updatedAt = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new X).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new X).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new X).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(X, e, t);
    }
    static $() {
        return [
            "RepoMirrorTransitionJob|1 id 9|2 identifier #0|3 transition #1|4 mirror_status #2|5 status #3|6 phase #4|7 attempt_count 13|11 drain_until 9?|12 last_error_code 9?|13 last_error_message 9?|15 started_at 9?|16 completed_at 9?|17 created_at 9|18 updated_at 9|19 fetch_progress #5?",
            i,
            m,
            g,
            h,
            f,
            Z
        ];
    }
}
class ee extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ee).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ee).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ee).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ee, e, t);
    }
    static $() {
        return [
            "DeleteRepoClientRequest|1 identifier #0",
            i
        ];
    }
}
class te extends l {
    constructor(e){
        super(), this.repoUuid = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new te).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new te).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new te).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(te, e, t);
    }
    static $() {
        return [
            "DeleteRepoClientResponse|1 repo_uuid 9"
        ];
    }
}
class re extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new re).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new re).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new re).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(re, e, t);
    }
    static $() {
        return [
            "DeleteMirroredRepoRequest|1 identifier #0",
            i
        ];
    }
}
class ne extends l {
    constructor(e){
        super(), this.repoUuid = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ne).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ne).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ne).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ne, e, t);
    }
    static $() {
        return [
            "DeleteMirroredRepoResponse|1 repo_uuid 9"
        ];
    }
}
class se extends l {
    constructor(e){
        super(), this.defaultBranch = "", this.mirrorStatus = g.UNSPECIFIED, this.repoUuid = "", this.forgeEnvironment = "", this.originNamespaceId = "", this.allowMergeCommit = !1, this.allowSquashMerge = !1, this.visibility = p.UNSPECIFIED, this.deleteBranchOnMerge = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new se).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new se).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new se).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(se, e, t);
    }
    static $() {
        return [
            "Repo|1 identifier #0|2 default_branch 9|4 github_node_id 9?|5 github_enterprise_id 9?|6 mirror_status #1|7 active_mirror_transition_job_id 9?|8 repo_uuid 9|9 github_installation_id 4?|10 created_at #2?|11 updated_at #2?|12 last_pushed_at #2?|13 owner_entity_id 3?|14 owner_type 9?|15 forge_environment 9|16 origin_namespace_id 9|17 allow_merge_commit 8|18 allow_squash_merge 8|19 visibility #3|20 delete_branch_on_merge 8|21 deleted_at #2?",
            i,
            g,
            n.Timestamp,
            p
        ];
    }
}
class oe extends l {
    constructor(e){
        super(), this.allowMergeCommit = !1, this.allowSquashMerge = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new oe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new oe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new oe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(oe, e, t);
    }
    static $() {
        return [
            "UpdateRepoMergeSettingsRequest|1 identifier #0|2 allow_merge_commit 8|3 allow_squash_merge 8",
            i
        ];
    }
}
class ie extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ie).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ie).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ie).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ie, e, t);
    }
    static $() {
        return [
            "UpdateRepoMergeSettingsResponse|1 repository #0",
            se
        ];
    }
}
class ae extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ae).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ae).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ae).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ae, e, t);
    }
    static $() {
        return [
            "UpdateRepoBranchDeletionSettingRequest|1 identifier #0|2 delete_branch_on_merge 8?",
            i
        ];
    }
}
class ce extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ce).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ce).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ce).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ce, e, t);
    }
    static $() {
        return [
            "UpdateRepoBranchDeletionSettingResponse|1 repository #0",
            se
        ];
    }
}
class le extends l {
    constructor(e){
        super(), this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new le).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new le).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new le).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(le, e, t);
    }
    static $() {
        return [
            "ListRepoCloneKitsRequest|1 identifier #0|2 page_size 13|3 page_token 9",
            i
        ];
    }
}
class ue extends l {
    constructor(e){
        super(), this.kits = [], this.nextPageToken = "", this.cloneKitEnabled = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ue).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ue).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ue).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ue, e, t);
    }
    static $() {
        return [
            "ListRepoCloneKitsResponse|1 kits #0*|2 next_page_token 9|3 clone_kit_enabled 8",
            de
        ];
    }
}
class de extends l {
    constructor(e){
        super(), this.packHash = "", this.tipCommit = "", this.packSizeBytes = n.protoInt64.zero, this.idxSizeBytes = n.protoInt64.zero, this.revSizeBytes = n.protoInt64.zero, this.kitVersion = "", this.isCurrent = !1, this.packSha256 = "", this.idxSha256 = "", this.revSha256 = "", this.chunksSha256 = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new de).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new de).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new de).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(de, e, t);
    }
    static $() {
        return [
            "RepoCloneKitGeneration|1 pack_hash 9|2 tip_commit 9|3 pack_size_bytes 3|4 idx_size_bytes 3|5 rev_size_bytes 3|6 last_published_at #0|7 kit_version 9|8 is_current 8|9 pack_sha256 9|10 idx_sha256 9|11 rev_sha256 9|12 chunks_sha256 9",
            n.Timestamp
        ];
    }
}
class pe extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pe, e, t);
    }
    static $() {
        return [
            "UpdateRepoVisibilityRequest|1 identifier #0|2 visibility #1?",
            i,
            p
        ];
    }
}
class me extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new me).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new me).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new me).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(me, e, t);
    }
    static $() {
        return [
            "UpdateRepoVisibilityResponse|1 repository #0",
            se
        ];
    }
}
class he extends l {
    constructor(e){
        super(), this.defaultBranch = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new he).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new he).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new he).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(he, e, t);
    }
    static $() {
        return [
            "UpdateRepoDefaultBranchRequest|1 identifier #0|2 default_branch 9",
            i
        ];
    }
}
class fe extends l {
    constructor(e){
        super(), this.defaultBranch = "", this.changed = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fe, e, t);
    }
    static $() {
        return [
            "UpdateRepoDefaultBranchResponse|1 default_branch 9|2 changed 8|3 repository #0",
            se
        ];
    }
}
class ge extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ge).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ge).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ge).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ge, e, t);
    }
    static $() {
        return [
            "GetRepoRequest|1 identifier #0|2 include_authenticated_viewer 8?|3 include_merge_queues 8?",
            i
        ];
    }
}
class ye extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ye).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ye).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ye).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ye, e, t);
    }
    static $() {
        return [
            "AuthenticatedOriginViewer|1 identity #0|2 profile #1|3 gate #2|4 policy #3",
            ve,
            _e,
            Ae,
            Se
        ];
    }
}
var we = (0, s.QT)(n.proto3, c, "AuthenticatedOriginViewer.OriginDisabledState", [
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
class ve extends l {
    constructor(e){
        super(), this.authId = "", this.publicUserId = "", this.originAuthorIds = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ve).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ve).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ve).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ve, e, t);
    }
    static $() {
        return [
            "AuthenticatedOriginViewer.Identity|1 auth_id 9|2 public_user_id 9|3 origin_author_ids 9*"
        ];
    }
}
class _e extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _e).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _e).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _e).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_e, e, t);
    }
    static $() {
        return [
            "AuthenticatedOriginViewer.Profile|1 email 9?|2 first_name 9?|3 last_name 9?|4 avatar_url 9?"
        ];
    }
}
class Ae extends l {
    constructor(e){
        super(), this.isEnterpriseUser = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ae).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ae).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ae).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ae, e, t);
    }
    static $() {
        return [
            "AuthenticatedOriginViewer.GateAttributes|1 team_id 5?|2 created_at_iso 9?|3 is_enterprise_user 8|4 email_domain_type 9?|5 country 9?|6 organization_id 3?|7 organization_public_id 9?|8 is_team_admin 8?"
        ];
    }
}
class Se extends l {
    constructor(e){
        super(), this.originDisabled = we.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Se).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Se).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Se).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Se, e, t);
    }
    static $() {
        return [
            "AuthenticatedOriginViewer.ReviewPolicy|1 origin_disabled #0",
            we
        ];
    }
}
class be extends l {
    constructor(e){
        super(), this.mergeQueueTargetRefs = [], this.mergeQueueAvailable = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new be).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new be).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new be).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(be, e, t);
    }
    static $() {
        return [
            "GetRepoResponse|1 repository #0|2 github_mirror_info #1?|3 merge_queue_target_refs 9*|4 merge_queue_available 8",
            se,
            Ee
        ];
    }
}
class Ee extends l {
    constructor(e){
        super(), this.githubOwner = "", this.githubRepo = "", this.githubRepoUrl = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ee).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ee).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ee).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ee, e, t);
    }
    static $() {
        return [
            "RepoGithubMirrorInfo|1 github_owner 9|2 github_repo 9|3 github_repo_url 9"
        ];
    }
}
class Ie extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ie).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ie).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ie).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ie, e, t);
    }
    static $() {
        return [
            "GetRepoWithMirrorInfoResponse|1 repository #0|2 github_mirror_info #1|3 viewer_can_write_changes 8?|4 authenticated_viewer #2?",
            se,
            Ee,
            ye
        ];
    }
}
class Ce extends l {
    constructor(e){
        super(), this.githubNodeId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ce).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ce).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ce).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ce, e, t);
    }
    static $() {
        return [
            "GetRepoByGithubMirrorRequest|1 github_node_id 9|2 github_enterprise_id 9?"
        ];
    }
}
class ke extends l {
    constructor(e){
        super(), this.manifestMs = 0, this.downloadMs = 0, this.verifyMs = 0, this.fetchMs = 0, this.checkoutMs = 0, this.totalMs = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ke).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ke).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ke).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ke, e, t);
    }
    static $() {
        return [
            "CloneKitTimingsMs|1 manifest_ms 5|2 download_ms 5|3 verify_ms 5|4 fetch_ms 5|5 checkout_ms 5|6 total_ms 5"
        ];
    }
}
class xe extends l {
    constructor(e){
        super(), this.invocationId = "", this.artifactBytes = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xe, e, t);
    }
    static $() {
        return [
            "RecordCloneKitUsageRequest|1 invocation_id 9|2 identifier #0|3 artifact_bytes 3|4 timings #1?",
            i,
            ke
        ];
    }
}
class Te extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Te).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Te).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Te).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Te, e, t);
    }
    static $() {
        return [
            "RecordCloneKitUsageResponse"
        ];
    }
}
class Re extends l {
    constructor(e){
        super(), this.id = "", this.ownerType = y.UNSPECIFIED, this.ownerEntityId = n.protoInt64.zero, this.namespace = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Re).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Re).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Re).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Re, e, t);
    }
    static $() {
        return [
            "OriginNamespace|1 id 9|2 owner_type #0|3 owner_entity_id 3|4 namespace 9",
            y
        ];
    }
}
class Be extends l {
    constructor(e){
        super(), this.ownerType = y.UNSPECIFIED, this.ownerEntityId = n.protoInt64.zero, this.namespace = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Be).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Be).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Be).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Be, e, t);
    }
    static $() {
        return [
            "CreateOriginNamespaceRequest|1 owner_type #0|2 owner_entity_id 3|3 namespace 9",
            y
        ];
    }
}
class Pe extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Pe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Pe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Pe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Pe, e, t);
    }
    static $() {
        return [
            "CreateOriginNamespaceResponse|1 origin_namespace #0",
            Re
        ];
    }
}
class Je extends l {
    constructor(e){
        super(), this.ownerType = y.UNSPECIFIED, this.ownerEntityId = n.protoInt64.zero, this.namespace = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Je).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Je).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Je).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Je, e, t);
    }
    static $() {
        return [
            "SetupTeamNamespaceRequest|1 owner_type #0|2 owner_entity_id 3|3 namespace 9",
            y
        ];
    }
}
class Me extends l {
    constructor(e){
        super(), this.namespaceCreated = !1, this.grantsChanged = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Me).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Me).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Me).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Me, e, t);
    }
    static $() {
        return [
            "SetupTeamNamespaceResponse|1 origin_namespace #0|2 namespace_created 8|3 grants_changed 8",
            Re
        ];
    }
}
class qe extends l {
    constructor(e){
        super(), this.namespace = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qe, e, t);
    }
    static $() {
        return [
            "SetupUserNamespaceRequest|1 namespace 9"
        ];
    }
}
class De extends l {
    constructor(e){
        super(), this.preferredSlug = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new De).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new De).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new De).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(De, e, t);
    }
    static $() {
        return [
            "SuggestOriginNamespaceRequest|1 preferred_slug 9"
        ];
    }
}
class Oe extends l {
    constructor(e){
        super(), this.available = !1, this.normalizedSlug = "", this.suggestedSlug = "", this.message = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Oe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Oe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Oe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Oe, e, t);
    }
    static $() {
        return [
            "SuggestOriginNamespaceResponse|1 available 8|2 normalized_slug 9|3 suggested_slug 9|4 message 9"
        ];
    }
}
class Ne extends l {
    constructor(e){
        super(), this.namespaceCreated = !1, this.grantsChanged = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ne).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ne).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ne).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ne, e, t);
    }
    static $() {
        return [
            "SetupUserNamespaceResponse|1 origin_namespace #0|2 namespace_created 8|3 grants_changed 8",
            Re
        ];
    }
}
class Fe extends l {
    constructor(e){
        super(), this.ownerType = y.UNSPECIFIED, this.ownerEntityId = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Fe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Fe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Fe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Fe, e, t);
    }
    static $() {
        return [
            "GetRepoNamespaceRequest|1 owner_type #0|2 owner_entity_id 3",
            y
        ];
    }
}
class Ue extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ue).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ue).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ue).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ue, e, t);
    }
    static $() {
        return [
            "GetRepoNamespaceResponse|1 origin_namespace #0",
            Re
        ];
    }
}
class Le extends l {
    constructor(e){
        super(), this.teamId = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Le).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Le).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Le).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Le, e, t);
    }
    static $() {
        return [
            "DoesNamespaceExistForTeamRequest|1 team_id 3"
        ];
    }
}
class $e extends l {
    constructor(e){
        super(), this.exists = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $e).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $e).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $e).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($e, e, t);
    }
    static $() {
        return [
            "DoesNamespaceExistForTeamResponse|1 exists 8"
        ];
    }
}
class Qe extends l {
    constructor(e){
        super(), this.includeExplicitGrantNamespaces = !1, this.includeAllTeams = !1, this.includeGrantedNamespaces = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Qe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Qe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Qe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Qe, e, t);
    }
    static $() {
        return [
            "GetAuthorizedNamespacesRequest|1 include_explicit_grant_namespaces 8|2 include_all_teams 8|3 include_granted_namespaces 8"
        ];
    }
}
class je extends l {
    constructor(e){
        super(), this.namespaces = [], this.originDisabledForTeam = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new je).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new je).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new je).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(je, e, t);
    }
    static $() {
        return [
            "GetAuthorizedNamespacesResponse|1 namespaces #0*|2 origin_disabled_for_team 8",
            Ge
        ];
    }
}
class Ge extends l {
    constructor(e){
        super(), this.accessReason = w.UNSPECIFIED, this.originAllowPublicRepos = !1, this.appWorkloadIdentityEnabled = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ge).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ge).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ge).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ge, e, t);
    }
    static $() {
        return [
            "AuthorizedNamespace|1 namespace #0|2 access_reason #1|3 origin_allow_public_repos 8|4 app_workload_identity_enabled 8",
            Re,
            w
        ];
    }
}
const He = "origin.v1.";
class ze extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return He;
    }
}
var We = (0, s.QT)(n.proto3, He, "AuthPolicyAppliesTo", [
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
], 1), Ve = (0, s.QT)(n.proto3, He, "GroupScope", [
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
], 1), Ke = (0, s.QT)(n.proto3, He, "TeamGroupKind", [
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
class Ye extends ze {
    constructor(e){
        super(), this.resourceKind = "", this.action = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ye).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ye).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ye).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ye, e, t);
    }
    static $() {
        return [
            "AuthPolicyStatement|1 resource_kind 9|2 action 9"
        ];
    }
}
class Ze extends ze {
    constructor(e){
        super(), this.scope = "", this.resource = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ze).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ze).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ze).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ze, e, t);
    }
    static $() {
        return [
            "HasOriginPermissionRequest|1 scope 9|2 namespace_slug 9 resource|3 repository #0 resource|4 app_id 9 resource",
            i
        ];
    }
}
class Xe extends ze {
    constructor(e){
        super(), this.allowed = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Xe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Xe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Xe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Xe, e, t);
    }
    static $() {
        return [
            "HasOriginPermissionResponse|1 allowed 8"
        ];
    }
}
class et extends ze {
    constructor(e){
        super(), this.name = "", this.displayName = "", this.description = "", this.appliesTo = We.UNSPECIFIED, this.isOriginManaged = !1, this.isCustom = !1, this.statements = [], this.userFacingScopeCount = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new et).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new et).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new et).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(et, e, t);
    }
    static $() {
        return [
            "AuthPolicySummary|1 name 9|2 display_name 9|3 description 9|4 applies_to #0|5 is_origin_managed 8|6 is_custom 8|7 statements #1*|8 user_facing_scope_count 5",
            We,
            Ye
        ];
    }
}
class tt extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new tt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new tt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new tt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(tt, e, t);
    }
    static $() {
        return [
            "ListRepoAssignablePoliciesRequest|1 identifier #0",
            i
        ];
    }
}
class rt extends ze {
    constructor(e){
        super(), this.policies = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new rt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new rt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new rt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(rt, e, t);
    }
    static $() {
        return [
            "ListRepoAssignablePoliciesResponse|1 policies #0*",
            et
        ];
    }
}
class nt extends ze {
    constructor(e){
        super(), this.name = "", this.displayName = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new nt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new nt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new nt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(nt, e, t);
    }
    static $() {
        return [
            "GrantPolicyRef|1 name 9|2 display_name 9"
        ];
    }
}
class st extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new st).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new st).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new st).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(st, e, t);
    }
    static $() {
        return [
            "TeamGroupAccess|1 namespace_policy #0|2 repo_policy #0|3 effective_policy #0",
            nt
        ];
    }
}
class ot extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ot).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ot).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ot).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ot, e, t);
    }
    static $() {
        return [
            "GetRepoTeamAccessRequest|1 identifier #0",
            i
        ];
    }
}
class it extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new it).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new it).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new it).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(it, e, t);
    }
    static $() {
        return [
            "GetRepoTeamAccessResponse|1 namespace #0|2 team_admins #1|3 team_members #1",
            Re,
            st
        ];
    }
}
class at extends ze {
    constructor(e){
        super(), this.kind = "", this.externalId = "", this.displayName = "", this.email = "", this.groupAdminCount = 0, this.groupMemberCount = 0, this.groupScope = Ve.UNSPECIFIED, this.isIdpSynced = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new at).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new at).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new at).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(at, e, t);
    }
    static $() {
        return [
            "GrantPrincipal|1 kind 9|2 external_id 9|3 display_name 9|4 email 9|5 group_admin_count 5|6 group_member_count 5|7 group_scope #0|8 is_idp_synced 8",
            Ve
        ];
    }
}
class ct extends ze {
    constructor(e){
        super(), this.isNamespaceOwned = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ct).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ct).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ct).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ct, e, t);
    }
    static $() {
        return [
            "RepoGrantRow|1 principal #0|2 namespace_policy #1|3 repo_policy #1|4 effective_policy #1|5 is_namespace_owned 8",
            at,
            nt
        ];
    }
}
class lt extends ze {
    constructor(e){
        super(), this.page = 0, this.pageSize = 0, this.search = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new lt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new lt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new lt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(lt, e, t);
    }
    static $() {
        return [
            "ListRepoGrantsRequest|1 identifier #0|2 page 5|3 page_size 5|4 search 9",
            i
        ];
    }
}
class ut extends ze {
    constructor(e){
        super(), this.rows = [], this.totalCount = 0, this.listTruncated = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ut).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ut).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ut).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ut, e, t);
    }
    static $() {
        return [
            "ListRepoGrantsResponse|1 rows #0*|2 total_count 5|3 list_truncated 8",
            ct
        ];
    }
}
class dt extends ze {
    constructor(e){
        super(), this.group = Ke.UNSPECIFIED, this.policyUpdate = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new dt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new dt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new dt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(dt, e, t);
    }
    static $() {
        return [
            "SetRepoTeamAccessRequest|1 identifier #0|2 group #1|3 policy_name 9 policy_update|4 clear_override 8 policy_update",
            i,
            Ke
        ];
    }
}
class pt extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pt, e, t);
    }
    static $() {
        return [
            "SetRepoTeamAccessResponse|1 namespace #0|2 team_admins #1|3 team_members #1",
            Re,
            st
        ];
    }
}
class mt extends ze {
    constructor(e){
        super(), this.userId = "", this.policyUpdate = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new mt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new mt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new mt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(mt, e, t);
    }
    static $() {
        return [
            "SetRepoUserAccessRequest|1 identifier #0|2 user_id 9|3 policy_name 9 policy_update|4 clear_access 8 policy_update",
            i
        ];
    }
}
class ht extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ht).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ht).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ht).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ht, e, t);
    }
    static $() {
        return [
            "SetRepoUserAccessResponse"
        ];
    }
}
class ft extends ze {
    constructor(e){
        super(), this.groupId = "", this.policyUpdate = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ft).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ft).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ft).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ft, e, t);
    }
    static $() {
        return [
            "SetRepoGroupAccessRequest|1 identifier #0|2 group_id 9|3 policy_name 9 policy_update|4 clear_access 8 policy_update",
            i
        ];
    }
}
class gt extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new gt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new gt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new gt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(gt, e, t);
    }
    static $() {
        return [
            "SetRepoGroupAccessResponse"
        ];
    }
}
class yt extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new yt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new yt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new yt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(yt, e, t);
    }
    static $() {
        return [
            "NamespaceTeamGroupAccess|1 policy #0",
            nt
        ];
    }
}
class wt extends ze {
    constructor(e){
        super(), this.namespaceSlug = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new wt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new wt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new wt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(wt, e, t);
    }
    static $() {
        return [
            "GetNamespaceTeamAccessRequest|1 namespace_slug 9"
        ];
    }
}
class vt extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new vt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new vt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new vt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(vt, e, t);
    }
    static $() {
        return [
            "GetNamespaceTeamAccessResponse|1 namespace #0|2 team_admins #1|3 team_members #1",
            Re,
            yt
        ];
    }
}
class _t extends ze {
    constructor(e){
        super(), this.namespaceSlug = "", this.group = Ke.UNSPECIFIED, this.policyUpdate = {
            case: void 0
        }, this.retainSelfAdmin = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _t).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _t).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _t).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_t, e, t);
    }
    static $() {
        return [
            "SetNamespaceTeamAccessRequest|1 namespace_slug 9|2 group #0|3 policy_name 9 policy_update|4 clear_access 8 policy_update|5 retain_self_admin 8",
            Ke
        ];
    }
}
class At extends ze {
    constructor(e){
        super(), this.selfAdminGranted = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new At).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new At).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new At).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(At, e, t);
    }
    static $() {
        return [
            "SetNamespaceTeamAccessResponse|1 namespace #0|2 team_admins #1|3 team_members #1|4 self_admin_granted 8",
            Re,
            yt
        ];
    }
}
class St extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new St).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new St).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new St).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(St, e, t);
    }
    static $() {
        return [
            "NamespaceGrantRow|1 principal #0|2 policy #1",
            at,
            nt
        ];
    }
}
class bt extends ze {
    constructor(e){
        super(), this.namespaceSlug = "", this.page = 0, this.pageSize = 0, this.search = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new bt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new bt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new bt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(bt, e, t);
    }
    static $() {
        return [
            "ListNamespaceGrantsRequest|1 namespace_slug 9|2 page 5|3 page_size 5|4 search 9"
        ];
    }
}
class Et extends ze {
    constructor(e){
        super(), this.rows = [], this.totalCount = 0, this.listTruncated = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Et).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Et).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Et).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Et, e, t);
    }
    static $() {
        return [
            "ListNamespaceGrantsResponse|1 rows #0*|2 total_count 5|3 list_truncated 8",
            St
        ];
    }
}
class It extends ze {
    constructor(e){
        super(), this.namespaceSlug = "", this.userIds = [], this.policyUpdate = {
            case: void 0
        }, this.retainSelfAdmin = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new It).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new It).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new It).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(It, e, t);
    }
    static $() {
        return [
            "SetNamespaceUserAccessRequest|1 namespace_slug 9|2 user_ids 9*|3 policy_name 9 policy_update|4 clear_access 8 policy_update|5 retain_self_admin 8"
        ];
    }
}
class Ct extends ze {
    constructor(e){
        super(), this.selfAdminGranted = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ct).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ct).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ct).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ct, e, t);
    }
    static $() {
        return [
            "SetNamespaceUserAccessResponse|1 namespace #0|2 self_admin_granted 8",
            Re
        ];
    }
}
class kt extends ze {
    constructor(e){
        super(), this.namespaceSlug = "", this.groupIds = [], this.policyUpdate = {
            case: void 0
        }, this.retainSelfAdmin = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new kt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new kt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new kt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(kt, e, t);
    }
    static $() {
        return [
            "SetNamespaceGroupAccessRequest|1 namespace_slug 9|2 group_ids 9*|3 policy_name 9 policy_update|4 clear_access 8 policy_update|5 retain_self_admin 8"
        ];
    }
}
class xt extends ze {
    constructor(e){
        super(), this.selfAdminGranted = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xt, e, t);
    }
    static $() {
        return [
            "SetNamespaceGroupAccessResponse|1 namespace #0|2 self_admin_granted 8",
            Re
        ];
    }
}
class Tt extends ze {
    constructor(e){
        super(), this.namespaceSlug = "", this.groupId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Tt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Tt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Tt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Tt, e, t);
    }
    static $() {
        return [
            "ListGroupGrantsInNamespaceRequest|1 namespace_slug 9|2 group_id 9"
        ];
    }
}
class Rt extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Rt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Rt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Rt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Rt, e, t);
    }
    static $() {
        return [
            "GroupRepoGrant|1 repository #0|2 namespace_policy #1|3 repo_policy #1|4 effective_policy #1",
            i,
            nt
        ];
    }
}
class Bt extends ze {
    constructor(e){
        super(), this.repoGrants = [], this.listTruncated = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Bt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Bt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Bt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Bt, e, t);
    }
    static $() {
        return [
            "ListGroupGrantsInNamespaceResponse|1 principal #0|2 namespace_policy #1|3 repo_grants #2*|4 list_truncated 8",
            at,
            nt,
            Rt
        ];
    }
}
class Pt extends ze {
    constructor(e){
        super(), this.namespaceSlug = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Pt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Pt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Pt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Pt, e, t);
    }
    static $() {
        return [
            "ListNamespaceAssignablePoliciesRequest|1 namespace_slug 9"
        ];
    }
}
class Jt extends ze {
    constructor(e){
        super(), this.policies = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Jt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Jt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Jt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Jt, e, t);
    }
    static $() {
        return [
            "ListNamespaceAssignablePoliciesResponse|1 policies #0*",
            et
        ];
    }
}
class Mt extends ze {
    constructor(e){
        super(), this.id = "", this.inviteeEmail = "", this.policyName = "", this.invitedByPrincipalKind = "", this.invitedByPrincipalId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Mt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Mt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Mt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Mt, e, t);
    }
    static $() {
        return [
            "RepoShareInvite|1 id 9|2 invitee_email 9|3 policy_name 9|4 expires_at #0|5 accepted_at #0|6 declined_at #0|7 revoked_at #0|8 created_at #0|9 invited_by_principal_kind 9|10 invited_by_principal_id 9",
            n.Timestamp
        ];
    }
}
class qt extends ze {
    constructor(e){
        super(), this.inviteeEmail = "", this.policyName = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qt, e, t);
    }
    static $() {
        return [
            "CreateRepoShareInviteRequest|1 identifier #0|2 invitee_email 9|3 policy_name 9",
            i
        ];
    }
}
class Dt extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Dt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Dt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Dt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Dt, e, t);
    }
    static $() {
        return [
            "CreateRepoShareInviteResponse|1 invite #0",
            Mt
        ];
    }
}
class Ot extends ze {
    constructor(e){
        super(), this.inviteeEmails = [], this.policyName = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ot).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ot).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ot).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ot, e, t);
    }
    static $() {
        return [
            "CreateRepoShareBatchInvitesRequest|1 identifier #0|2 invitee_emails 9*|3 policy_name 9",
            i
        ];
    }
}
class Nt extends ze {
    constructor(e){
        super(), this.message = "", this.code = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Nt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Nt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Nt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Nt, e, t);
    }
    static $() {
        return [
            "RepoShareInviteAttemptError|1 message 9|2 code 5"
        ];
    }
}
class Ft extends ze {
    constructor(e){
        super(), this.inviteeEmail = "", this.outcome = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ft).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ft).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ft).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ft, e, t);
    }
    static $() {
        return [
            "RepoShareInviteAttempt|1 invitee_email 9|2 invite #0 outcome|3 error #1 outcome",
            Mt,
            Nt
        ];
    }
}
class Ut extends ze {
    constructor(e){
        super(), this.attempts = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ut).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ut).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ut).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ut, e, t);
    }
    static $() {
        return [
            "CreateRepoShareBatchInvitesResponse|1 attempts #0*",
            Ft
        ];
    }
}
class Lt extends ze {
    constructor(e){
        super(), this.inviteId = "", this.rotateToken = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Lt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Lt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Lt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Lt, e, t);
    }
    static $() {
        return [
            "UpdateRepoShareInviteRequest|1 identifier #0|2 invite_id 9|3 policy_name 9?|4 rotate_token 8",
            i
        ];
    }
}
class $t extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $t).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $t).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $t).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($t, e, t);
    }
    static $() {
        return [
            "UpdateRepoShareInviteResponse|1 invite #0",
            Mt
        ];
    }
}
class Qt extends ze {
    constructor(e){
        super(), this.inviteId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Qt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Qt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Qt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Qt, e, t);
    }
    static $() {
        return [
            "RevokeRepoShareInviteRequest|1 identifier #0|2 invite_id 9",
            i
        ];
    }
}
class jt extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new jt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new jt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new jt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(jt, e, t);
    }
    static $() {
        return [
            "RevokeRepoShareInviteResponse|1 invite #0",
            Mt
        ];
    }
}
class Gt extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Gt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Gt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Gt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Gt, e, t);
    }
    static $() {
        return [
            "ListRepoShareInvitesRequest|1 identifier #0",
            i
        ];
    }
}
class Ht extends ze {
    constructor(e){
        super(), this.invites = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ht).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ht).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ht).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ht, e, t);
    }
    static $() {
        return [
            "ListRepoShareInvitesResponse|1 invites #0*",
            Mt
        ];
    }
}
class zt extends ze {
    constructor(e){
        super(), this.inviteeEmail = "", this.inviterDisplayName = "", this.policyName = "", this.inviteId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new zt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new zt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new zt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(zt, e, t);
    }
    static $() {
        return [
            "RepoShareInviteDetails|1 invitee_email 9|2 repository #0|3 inviter_display_name 9|4 policy_name 9|5 expires_at #1|6 invite_id 9",
            i,
            n.Timestamp
        ];
    }
}
class Wt extends ze {
    constructor(e){
        super(), this.token = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Wt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Wt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Wt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Wt, e, t);
    }
    static $() {
        return [
            "GetShareInviteByTokenRequest|1 token 9"
        ];
    }
}
class Vt extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Vt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Vt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Vt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Vt, e, t);
    }
    static $() {
        return [
            "GetShareInviteByTokenResponse|1 invite #0",
            zt
        ];
    }
}
class Kt extends ze {
    constructor(e){
        super(), this.locator = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Kt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Kt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Kt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Kt, e, t);
    }
    static $() {
        return [
            "DeclineShareInviteRequest|1 token 9 locator|2 invite_id 9 locator"
        ];
    }
}
class Yt extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Yt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Yt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Yt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Yt, e, t);
    }
    static $() {
        return [
            "DeclineShareInviteResponse"
        ];
    }
}
class Zt extends ze {
    constructor(e){
        super(), this.locator = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Zt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Zt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Zt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Zt, e, t);
    }
    static $() {
        return [
            "AcceptShareInviteRequest|1 token 9 locator|2 invite_id 9 locator"
        ];
    }
}
class Xt extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Xt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Xt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Xt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Xt, e, t);
    }
    static $() {
        return [
            "AcceptShareInviteResponse|1 repository #0",
            i
        ];
    }
}
class er extends ze {
    constructor(e){
        super(), this.inviteId = "", this.inviterDisplayName = "", this.policyName = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new er).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new er).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new er).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(er, e, t);
    }
    static $() {
        return [
            "MyShareInvite|1 invite_id 9|2 repository #0|3 inviter_display_name 9|4 policy_name 9|5 expires_at #1|6 created_at #1",
            i,
            n.Timestamp
        ];
    }
}
class tr extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new tr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new tr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new tr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(tr, e, t);
    }
    static $() {
        return [
            "ListMyShareInvitesRequest"
        ];
    }
}
class rr extends ze {
    constructor(e){
        super(), this.invites = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new rr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new rr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new rr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(rr, e, t);
    }
    static $() {
        return [
            "ListMyShareInvitesResponse|1 invites #0*",
            er
        ];
    }
}
class nr extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new nr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new nr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new nr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(nr, e, t);
    }
    static $() {
        return [
            "MyExternalRepository|1 repository #0|2 policy #1|3 added_at #2",
            i,
            nt,
            n.Timestamp
        ];
    }
}
class sr extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new sr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new sr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new sr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(sr, e, t);
    }
    static $() {
        return [
            "ListMyExternalRepositoriesRequest"
        ];
    }
}
class or extends ze {
    constructor(e){
        super(), this.repositories = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new or).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new or).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new or).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(or, e, t);
    }
    static $() {
        return [
            "ListMyExternalRepositoriesResponse|1 repositories #0*",
            nr
        ];
    }
}
class ir extends ze {
    constructor(e){
        super(), this.userId = "", this.displayName = "", this.email = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ir).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ir).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ir).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ir, e, t);
    }
    static $() {
        return [
            "RepoExternalCollaboratorRow|1 user_id 9|2 display_name 9|3 email 9|4 policy #0|5 added_at #1",
            nt,
            n.Timestamp
        ];
    }
}
class ar extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ar).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ar).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ar).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ar, e, t);
    }
    static $() {
        return [
            "ListRepoExternalCollaboratorsRequest|1 identifier #0",
            i
        ];
    }
}
class cr extends ze {
    constructor(e){
        super(), this.rows = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new cr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new cr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new cr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(cr, e, t);
    }
    static $() {
        return [
            "ListRepoExternalCollaboratorsResponse|1 rows #0*",
            ir
        ];
    }
}
class lr extends ze {
    constructor(e){
        super(), this.userId = "", this.policyUpdate = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new lr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new lr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new lr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(lr, e, t);
    }
    static $() {
        return [
            "SetRepoExternalCollaboratorAccessRequest|1 identifier #0|2 user_id 9|3 policy #1 policy_update|4 remove 8 policy_update",
            i,
            nt
        ];
    }
}
class ur extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ur).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ur).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ur).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ur, e, t);
    }
    static $() {
        return [
            "SetRepoExternalCollaboratorAccessResponse"
        ];
    }
}
class dr extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new dr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new dr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new dr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(dr, e, t);
    }
    static $() {
        return [
            "LeaveMyExternalRepositoryRequest|1 identifier #0",
            i
        ];
    }
}
class pr extends ze {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pr, e, t);
    }
    static $() {
        return [
            "LeaveMyExternalRepositoryResponse"
        ];
    }
}
class mr extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class hr extends mr {
    constructor(e){
        super(), this.id = "", this.name = "", this.algo = "", this.fingerprint = "", this.publicKey = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new hr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new hr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new hr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(hr, e, t);
    }
    static $() {
        return [
            "NamespaceSshCertificateAuthority|1 id 9|2 name 9|3 algo 9|4 fingerprint 9|5 public_key 9|6 created_at #0",
            n.Timestamp
        ];
    }
}
class fr extends mr {
    constructor(e){
        super(), this.namespaceSlug = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fr, e, t);
    }
    static $() {
        return [
            "GetNamespaceSshCertificateAuthoritiesRequest|1 namespace_slug 9"
        ];
    }
}
class gr extends mr {
    constructor(e){
        super(), this.certificateAuthorities = [], this.requireCertificates = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new gr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new gr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new gr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(gr, e, t);
    }
    static $() {
        return [
            "GetNamespaceSshCertificateAuthoritiesResponse|1 certificate_authorities #0*|2 require_certificates 8",
            hr
        ];
    }
}
class yr extends mr {
    constructor(e){
        super(), this.namespaceSlug = "", this.publicKey = "", this.name = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new yr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new yr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new yr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(yr, e, t);
    }
    static $() {
        return [
            "AddNamespaceSshCertificateAuthorityRequest|1 namespace_slug 9|2 public_key 9|3 name 9"
        ];
    }
}
class wr extends mr {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new wr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new wr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new wr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(wr, e, t);
    }
    static $() {
        return [
            "AddNamespaceSshCertificateAuthorityResponse|1 certificate_authority #0",
            hr
        ];
    }
}
class vr extends mr {
    constructor(e){
        super(), this.namespaceSlug = "", this.id = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new vr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new vr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new vr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(vr, e, t);
    }
    static $() {
        return [
            "RemoveNamespaceSshCertificateAuthorityRequest|1 namespace_slug 9|2 id 9"
        ];
    }
}
class _r extends mr {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _r).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _r).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _r).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_r, e, t);
    }
    static $() {
        return [
            "RemoveNamespaceSshCertificateAuthorityResponse"
        ];
    }
}
class Ar extends mr {
    constructor(e){
        super(), this.namespaceSlug = "", this.requireCertificates = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ar).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ar).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ar).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ar, e, t);
    }
    static $() {
        return [
            "SetNamespaceSshRequireCertificatesRequest|1 namespace_slug 9|2 require_certificates 8"
        ];
    }
}
class Sr extends mr {
    constructor(e){
        super(), this.requireCertificates = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Sr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Sr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Sr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Sr, e, t);
    }
    static $() {
        return [
            "SetNamespaceSshRequireCertificatesResponse|1 require_certificates 8"
        ];
    }
}
class br extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class Er extends br {
    constructor(e){
        super(), this.cidr = "", this.description = "", this.id = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Er).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Er).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Er).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Er, e, t);
    }
    static $() {
        return [
            "NamespaceInboundIpAllowlistEntry|1 cidr 9|2 description 9|3 enabled 8?|4 created_at #0|5 id 9",
            n.Timestamp
        ];
    }
}
class Ir extends br {
    constructor(e){
        super(), this.namespaceSlug = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ir).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ir).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ir).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ir, e, t);
    }
    static $() {
        return [
            "GetNamespaceInboundIpAllowlistRequest|1 namespace_slug 9"
        ];
    }
}
class Cr extends br {
    constructor(e){
        super(), this.enabled = !1, this.entries = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Cr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Cr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Cr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Cr, e, t);
    }
    static $() {
        return [
            "GetNamespaceInboundIpAllowlistResponse|1 enabled 8|2 entries #0*",
            Er
        ];
    }
}
class kr extends br {
    constructor(e){
        super(), this.namespaceSlug = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new kr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new kr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new kr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(kr, e, t);
    }
    static $() {
        return [
            "AddNamespaceInboundIpAllowlistEntryRequest|1 namespace_slug 9|2 entry #0",
            Er
        ];
    }
}
class xr extends br {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xr, e, t);
    }
    static $() {
        return [
            "AddNamespaceInboundIpAllowlistEntryResponse|1 entry #0",
            Er
        ];
    }
}
class Tr extends br {
    constructor(e){
        super(), this.namespaceSlug = "", this.cidr = "", this.entryId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Tr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Tr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Tr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Tr, e, t);
    }
    static $() {
        return [
            "UpdateNamespaceInboundIpAllowlistEntryRequest|1 namespace_slug 9|2 cidr 9|3 next_cidr 9?|4 description 9?|5 enabled 8?|6 entry_id 9"
        ];
    }
}
class Rr extends br {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Rr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Rr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Rr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Rr, e, t);
    }
    static $() {
        return [
            "UpdateNamespaceInboundIpAllowlistEntryResponse|1 entry #0",
            Er
        ];
    }
}
class Br extends br {
    constructor(e){
        super(), this.namespaceSlug = "", this.cidr = "", this.entryId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Br).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Br).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Br).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Br, e, t);
    }
    static $() {
        return [
            "DeleteNamespaceInboundIpAllowlistEntryRequest|1 namespace_slug 9|2 cidr 9|3 entry_id 9"
        ];
    }
}
class Pr extends br {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Pr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Pr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Pr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Pr, e, t);
    }
    static $() {
        return [
            "DeleteNamespaceInboundIpAllowlistEntryResponse"
        ];
    }
}
class Jr extends br {
    constructor(e){
        super(), this.namespaceSlug = "", this.enabled = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Jr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Jr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Jr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Jr, e, t);
    }
    static $() {
        return [
            "SetNamespaceInboundIpAllowlistEnabledRequest|1 namespace_slug 9|2 enabled 8"
        ];
    }
}
class Mr extends br {
    constructor(e){
        super(), this.enabled = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Mr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Mr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Mr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Mr, e, t);
    }
    static $() {
        return [
            "SetNamespaceInboundIpAllowlistEnabledResponse|1 enabled 8"
        ];
    }
}
class qr extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class Dr extends qr {
    constructor(e){
        super(), this.id = "", this.name = "", this.algo = "", this.fingerprint = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Dr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Dr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Dr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Dr, e, t);
    }
    static $() {
        return [
            "SshPublicKey|1 id 9|2 name 9|3 algo 9|4 fingerprint 9|5 created_at #0|6 last_used_at #0",
            n.Timestamp
        ];
    }
}
class Or extends qr {
    constructor(e){
        super(), this.publicKey = "", this.name = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Or).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Or).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Or).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Or, e, t);
    }
    static $() {
        return [
            "AddSshPublicKeyRequest|1 public_key 9|2 name 9"
        ];
    }
}
class Nr extends qr {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Nr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Nr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Nr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Nr, e, t);
    }
    static $() {
        return [
            "AddSshPublicKeyResponse|1 ssh_public_key #0",
            Dr
        ];
    }
}
class Fr extends qr {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Fr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Fr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Fr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Fr, e, t);
    }
    static $() {
        return [
            "ListSshPublicKeysRequest"
        ];
    }
}
class Ur extends qr {
    constructor(e){
        super(), this.sshPublicKeys = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ur).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ur).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ur).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ur, e, t);
    }
    static $() {
        return [
            "ListSshPublicKeysResponse|1 ssh_public_keys #0*",
            Dr
        ];
    }
}
class Lr extends qr {
    constructor(e){
        super(), this.id = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Lr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Lr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Lr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Lr, e, t);
    }
    static $() {
        return [
            "DeleteSshPublicKeyRequest|1 id 9"
        ];
    }
}
class $r extends qr {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $r).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $r).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $r).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($r, e, t);
    }
    static $() {
        return [
            "DeleteSshPublicKeyResponse"
        ];
    }
}
const Qr = "origin.v1.";
class jr extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return Qr;
    }
}
var Gr = (0, s.QT)(n.proto3, Qr, "EventType", [
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
class Hr extends jr {
    constructor(e){
        super(), this.id = "", this.originNamespaceId = "", this.slackTeamId = "", this.ignoreDrafts = !1, this.events = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Hr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Hr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Hr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Hr, e, t);
    }
    static $() {
        return [
            "OriginSlackNotification|1 id 9|2 origin_namespace_id 9|3 slack_team_id 9|4 ignore_drafts 8|5 events #0*|8 notify_app_bots 8?|6 created_at #1|7 updated_at #1",
            Gr,
            n.Timestamp
        ];
    }
}
class zr extends jr {
    constructor(e){
        super(), this.originNamespaceId = "", this.ignoreDrafts = !1, this.events = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new zr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new zr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new zr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(zr, e, t);
    }
    static $() {
        return [
            "UpsertOriginUserSlackNotificationRequest|1 origin_namespace_id 9|2 slack_team_id 9?|3 ignore_drafts 8|4 events #0*|5 notify_app_bots 8?",
            Gr
        ];
    }
}
class Wr extends jr {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Wr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Wr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Wr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Wr, e, t);
    }
    static $() {
        return [
            "UpsertOriginUserSlackNotificationResponse|1 notification #0",
            Hr
        ];
    }
}
class Vr extends jr {
    constructor(e){
        super(), this.id = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Vr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Vr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Vr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Vr, e, t);
    }
    static $() {
        return [
            "DeleteOriginUserSlackNotificationRequest|1 id 9"
        ];
    }
}
class Kr extends jr {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Kr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Kr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Kr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Kr, e, t);
    }
    static $() {
        return [
            "DeleteOriginUserSlackNotificationResponse"
        ];
    }
}
class Yr extends jr {
    constructor(e){
        super(), this.originNamespaceId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Yr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Yr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Yr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Yr, e, t);
    }
    static $() {
        return [
            "GetOriginUserSlackNotificationRequest|1 slack_team_id 9?|2 origin_namespace_id 9"
        ];
    }
}
class Zr extends jr {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Zr).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Zr).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Zr).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Zr, e, t);
    }
    static $() {
        return [
            "GetOriginUserSlackNotificationResponse|1 notification #0?",
            Hr
        ];
    }
}
const Xr = "origin.v1.";
class en extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return Xr;
    }
}
var tn = (0, s.QT)(n.proto3, Xr, "CommitEmailGithubState", [
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
], 1), rn = (0, s.QT)(n.proto3, Xr, "CommitEmailVerificationState", [
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
class nn extends en {
    constructor(e){
        super(), this.noreplyEmail = "", this.eligible = !1, this.connectedGithubLogin = "", this.githubState = tn.UNSPECIFIED, this.state = rn.UNSPECIFIED, this.verificationUrl = "", this.mismatchedGithubLogin = "", this.githubSettingsEmailsUrl = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new nn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new nn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new nn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(nn, e, t);
    }
    static $() {
        return [
            "OriginCommitEmailVerification|1 noreply_email 9|2 eligible 8|3 connected_github_login 9|4 github_state #0|5 state #1|6 verification_url 9|7 mismatched_github_login 9|8 github_settings_emails_url 9|9 updated_at #2",
            tn,
            rn,
            n.Timestamp
        ];
    }
}
class sn extends en {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new sn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new sn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new sn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(sn, e, t);
    }
    static $() {
        return [
            "GetOriginCommitEmailVerificationRequest"
        ];
    }
}
class on extends en {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new on).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new on).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new on).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(on, e, t);
    }
    static $() {
        return [
            "GetOriginCommitEmailVerificationResponse|1 verification #0",
            nn
        ];
    }
}
class an extends en {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new an).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new an).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new an).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(an, e, t);
    }
    static $() {
        return [
            "StartOriginCommitEmailVerificationRequest"
        ];
    }
}
class cn extends en {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new cn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new cn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new cn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(cn, e, t);
    }
    static $() {
        return [
            "StartOriginCommitEmailVerificationResponse|1 verification #0",
            nn
        ];
    }
}
const ln = "origin.v1.";
class un extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return ln;
    }
}
var dn = (0, s.QT)(n.proto3, ln, "SlackReviewReminderDayOfWeek", [
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
class pn extends un {
    constructor(e){
        super(), this.includeTeamReviewRequests = !1, this.ignoreDrafts = !1, this.requiredLabels = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pn, e, t);
    }
    static $() {
        return [
            "OriginSlackReviewReminderFilters|1 include_team_review_requests 8|2 ignore_drafts 8|3 require_review_request 8?|4 remind_authors_after_reviews 8?|5 ignore_approved_count 8?|6 required_labels 9*"
        ];
    }
}
class mn extends un {
    constructor(e){
        super(), this.id = "", this.originNamespaceId = "", this.slackTeamId = "", this.repoIds = [], this.daysOfWeek = [], this.timesOfDay = [], this.timeZone = "", this.enabled = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new mn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new mn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new mn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(mn, e, t);
    }
    static $() {
        return [
            "OriginSlackReviewReminder|1 id 9|2 origin_namespace_id 9|3 slack_team_id 9|4 repo_ids 9*|5 days_of_week #0*|6 times_of_day 9*|7 time_zone 9|8 filters #1|9 enabled 8|10 last_sent_at #2?|11 last_outcome 9?|12 created_at #2|13 updated_at #2",
            dn,
            pn,
            n.Timestamp
        ];
    }
}
class hn extends un {
    constructor(e){
        super(), this.originNamespaceId = "", this.repoIds = [], this.daysOfWeek = [], this.timesOfDay = [], this.timeZone = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new hn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new hn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new hn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(hn, e, t);
    }
    static $() {
        return [
            "CreateOriginUserSlackReviewReminderRequest|1 origin_namespace_id 9|2 slack_team_id 9?|3 repo_ids 9*|4 days_of_week #0*|5 times_of_day 9*|6 time_zone 9|7 filters #1|8 enabled 8?",
            dn,
            pn
        ];
    }
}
class fn extends un {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fn, e, t);
    }
    static $() {
        return [
            "CreateOriginUserSlackReviewReminderResponse|1 reminder #0",
            mn
        ];
    }
}
class gn extends un {
    constructor(e){
        super(), this.id = "", this.originNamespaceId = "", this.repoIds = [], this.daysOfWeek = [], this.timesOfDay = [], this.timeZone = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new gn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new gn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new gn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(gn, e, t);
    }
    static $() {
        return [
            "UpdateOriginUserSlackReviewReminderRequest|1 id 9|2 origin_namespace_id 9|3 slack_team_id 9?|4 repo_ids 9*|5 days_of_week #0*|6 times_of_day 9*|7 time_zone 9|8 filters #1|9 enabled 8?",
            dn,
            pn
        ];
    }
}
class yn extends un {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new yn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new yn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new yn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(yn, e, t);
    }
    static $() {
        return [
            "UpdateOriginUserSlackReviewReminderResponse|1 reminder #0",
            mn
        ];
    }
}
class wn extends un {
    constructor(e){
        super(), this.originNamespaceId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new wn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new wn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new wn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(wn, e, t);
    }
    static $() {
        return [
            "ListOriginUserSlackReviewRemindersRequest|1 origin_namespace_id 9|2 slack_team_id 9?"
        ];
    }
}
class vn extends un {
    constructor(e){
        super(), this.reminders = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new vn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new vn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new vn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(vn, e, t);
    }
    static $() {
        return [
            "ListOriginUserSlackReviewRemindersResponse|1 reminders #0*",
            mn
        ];
    }
}
class _n extends un {
    constructor(e){
        super(), this.id = "", this.originNamespaceId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _n).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _n).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _n).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_n, e, t);
    }
    static $() {
        return [
            "GetOriginUserSlackReviewReminderRequest|1 id 9|2 origin_namespace_id 9"
        ];
    }
}
class An extends un {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new An).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new An).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new An).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(An, e, t);
    }
    static $() {
        return [
            "GetOriginUserSlackReviewReminderResponse|1 reminder #0",
            mn
        ];
    }
}
class Sn extends un {
    constructor(e){
        super(), this.id = "", this.originNamespaceId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Sn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Sn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Sn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Sn, e, t);
    }
    static $() {
        return [
            "DisableOriginUserSlackReviewReminderRequest|1 id 9|2 origin_namespace_id 9"
        ];
    }
}
class bn extends un {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new bn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new bn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new bn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(bn, e, t);
    }
    static $() {
        return [
            "DisableOriginUserSlackReviewReminderResponse|1 reminder #0",
            mn
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
], 1), kn = (0, s.QT)(n.proto3, En, "OriginSlackChannelExposureReason", [
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
], 1), xn = (0, s.QT)(n.proto3, En, "OriginSlackChannelExposureStatus", [
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
class Tn extends In {
    constructor(e){
        super(), this.id = "", this.slackTeamId = "", this.slackChannelId = "", this.repoOwner = "", this.repoName = "", this.features = [], this.requiredLabels = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Tn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Tn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Tn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Tn, e, t);
    }
    static $() {
        return [
            "OriginSlackChannelSubscription|1 id 9|2 slack_team_id 9|3 slack_channel_id 9|4 repo_owner 9|5 repo_name 9|6 features #0*|7 commit_ref_pattern 9?|8 required_labels 9*|9 created_at #1|10 updated_at #1",
            Cn,
            n.Timestamp
        ];
    }
}
class Rn extends In {
    constructor(e){
        super(), this.slackChannelId = "", this.repoOwner = "", this.repoName = "", this.features = [], this.requiredLabels = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Rn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Rn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Rn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Rn, e, t);
    }
    static $() {
        return [
            "SubscribeOriginSlackChannelRequest|1 slack_channel_id 9|2 slack_team_id 9?|3 repo_owner 9|4 repo_name 9|5 features #0*|6 commit_ref_pattern 9?|7 required_labels 9*",
            Cn
        ];
    }
}
class Bn extends In {
    constructor(e){
        super(), this.status = xn.UNSPECIFIED, this.reasons = [], this.repoVisibility = p.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Bn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Bn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Bn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Bn, e, t);
    }
    static $() {
        return [
            "OriginSlackChannelExposure|1 status #0|2 reasons #1*|3 repo_visibility #2",
            xn,
            kn,
            p
        ];
    }
}
class Pn extends In {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Pn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Pn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Pn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Pn, e, t);
    }
    static $() {
        return [
            "SubscribeOriginSlackChannelResponse|1 subscription #0|2 exposure #1",
            Tn,
            Bn
        ];
    }
}
class Jn extends In {
    constructor(e){
        super(), this.slackChannelId = "", this.repoOwner = "", this.repoName = "", this.features = [], this.requiredLabels = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Jn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Jn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Jn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Jn, e, t);
    }
    static $() {
        return [
            "UnsubscribeOriginSlackChannelRequest|1 slack_channel_id 9|2 slack_team_id 9?|3 repo_owner 9|4 repo_name 9|5 features #0*|6 required_labels 9*",
            Cn
        ];
    }
}
class Mn extends In {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Mn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Mn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Mn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Mn, e, t);
    }
    static $() {
        return [
            "UnsubscribeOriginSlackChannelResponse|1 subscription #0?",
            Tn
        ];
    }
}
class qn extends In {
    constructor(e){
        super(), this.slackChannelId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qn, e, t);
    }
    static $() {
        return [
            "ListOriginSlackChannelSubscriptionsRequest|1 slack_channel_id 9|2 slack_team_id 9?"
        ];
    }
}
class Dn extends In {
    constructor(e){
        super(), this.subscriptions = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Dn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Dn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Dn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Dn, e, t);
    }
    static $() {
        return [
            "ListOriginSlackChannelSubscriptionsResponse|1 subscriptions #0*",
            Tn
        ];
    }
}
const On = "git_forge.v1.";
class Nn extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return On;
    }
}
var Fn = (0, s.QT)(n.proto3, On, "CommitActivityLineStats", [
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
], 1), Un = (0, s.QT)(n.proto3, On, "CompareCommitsStatus", [
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
], 1), Ln = (0, s.QT)(n.proto3, On, "MergeMode", [
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
], 1), $n = (n.proto3, (0, s.QT)(n.proto3, On, "MergeRenameMode", [
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
], 1)), Qn = (0, s.QT)(n.proto3, On, "CanMergeCacheOnlyOutcome", [
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
], 1), jn = (n.proto3, n.proto3, (0, s.QT)(n.proto3, On, "CommitFileMode", [
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
], 1)), Gn = (0, s.QT)(n.proto3, On, "GrepPriority", [
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
], 1), Hn = (n.proto3, n.proto3, (0, s.QT)(n.proto3, On, "GrepLineKind", [
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
], 1)), zn = (0, s.QT)(n.proto3, On, "GeneratedAttributesRevision", [
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
], 1), Wn = (0, s.QT)(n.proto3, On, "FileMode", [
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
], 1), Vn = (0, s.QT)(n.proto3, On, "ChangeKind", [
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
], 1), Kn = (n.proto3, n.proto3, (0, s.QT)(n.proto3, On, "ListRefsFilter", [
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
class Yn extends Nn {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Yn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Yn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Yn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Yn, e, t);
    }
    static $() {
        return [
            "GetCommitResponse|1 commit #0",
            fs
        ];
    }
}
class Zn extends Nn {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Zn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Zn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Zn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Zn, e, t);
    }
    static $() {
        return [
            "GetBlobResponse|1 blob #0",
            ws
        ];
    }
}
class Xn extends Nn {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Xn).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Xn).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Xn).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Xn, e, t);
    }
    static $() {
        return [
            "GetTagResponse|1 tag #0",
            ns
        ];
    }
}
class es extends Nn {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new es).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new es).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new es).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(es, e, t);
    }
    static $() {
        return [
            "GetTreeResponse|1 tree #0",
            ts
        ];
    }
}
class ts extends Nn {
    constructor(e){
        super(), this.sha = "", this.tree = [], this.truncated = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ts).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ts).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ts).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ts, e, t);
    }
    static $() {
        return [
            "Tree|1 sha 9|2 tree #0*|3 truncated 8",
            rs
        ];
    }
}
class rs extends Nn {
    constructor(e){
        super(), this.path = "", this.mode = "", this.type = "", this.sha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new rs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new rs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new rs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(rs, e, t);
    }
    static $() {
        return [
            "TreeEntry|1 path 9|2 mode 9|3 type 9|4 sha 9|5 size 4?"
        ];
    }
}
class ns extends Nn {
    constructor(e){
        super(), this.sha = "", this.name = "", this.message = "", this.objectSha = "", this.objectType = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ns).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ns).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ns).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ns, e, t);
    }
    static $() {
        return [
            "Tag|1 sha 9|2 name 9|3 message 9|4 tagger #0|5 object_sha 9|6 object_type 9",
            gs
        ];
    }
}
class ss extends Nn {
    constructor(e){
        super(), this.commits = [], this.truncated = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ss).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ss).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ss).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ss, e, t);
    }
    static $() {
        return [
            "LookupCommitsResponse|1 commits #0*|2 truncated 8",
            fs
        ];
    }
}
class os extends Nn {
    constructor(e){
        super(), this.dayStart = n.protoInt64.zero, this.commits = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new os).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new os).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new os).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(os, e, t);
    }
    static $() {
        return [
            "CommitActivityDay|1 day_start 3|2 commits 13"
        ];
    }
}
class is extends Nn {
    constructor(e){
        super(), this.weekStart = n.protoInt64.zero, this.commits = 0, this.additions = n.protoInt64.zero, this.deletions = n.protoInt64.zero, this.lineStatsPartialCommits = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new is).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new is).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new is).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(is, e, t);
    }
    static $() {
        return [
            "CommitActivityWeek|1 week_start 3|2 commits 13|3 additions 4|4 deletions 4|5 line_stats_partial_commits 13"
        ];
    }
}
class as extends Nn {
    constructor(e){
        super(), this.name = "", this.email = "", this.commits = 0, this.weeks = [], this.additions = n.protoInt64.zero, this.deletions = n.protoInt64.zero, this.key = "", this.days = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new as).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new as).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new as).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(as, e, t);
    }
    static $() {
        return [
            "CommitActivityContributor|1 name 9|2 email 9|3 commits 13|4 weeks #0*|5 additions 4|6 deletions 4|7 key 9|8 days #1*",
            is,
            os
        ];
    }
}
class cs extends Nn {
    constructor(e){
        super(), this.commitSha = "", this.weeks = [], this.contributors = [], this.totalCommits = 0, this.totalContributors = 0, this.truncated = !1, this.lineStats = Fn.UNSPECIFIED, this.lineStatsPartialCommits = 0, this.baseIsAncestor = !1, this.daysIncluded = !1, this.rootCommitSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new cs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new cs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new cs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(cs, e, t);
    }
    static $() {
        return [
            "GetCommitActivityResponse|1 commit_sha 9|2 weeks #0*|3 contributors #1*|4 total_commits 13|5 total_contributors 13|6 truncated 8|7 line_stats #2|8 line_stats_partial_commits 13|9 base_is_ancestor 8|10 days_included 8|11 root_commit_sha 9",
            is,
            as,
            Fn
        ];
    }
}
class ls extends Nn {
    constructor(e){
        super(), this.commits = [], this.baseCommitSha = "", this.headCommitSha = "", this.mergeBaseCommitSha = "", this.truncated = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ls).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ls).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ls).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ls, e, t);
    }
    static $() {
        return [
            "ListCommitsInRangeResponse|1 commits #0*|2 base_commit_sha 9|3 head_commit_sha 9|4 merge_base_commit_sha 9|5 truncated 8",
            fs
        ];
    }
}
class us extends Nn {
    constructor(e){
        super(), this.status = Un.UNSPECIFIED, this.aheadBy = 0, this.behindBy = 0, this.baseCommitSha = "", this.headCommitSha = "", this.mergeBaseCommitSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new us).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new us).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new us).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(us, e, t);
    }
    static $() {
        return [
            "CompareCommitsResponse|1 status #0|2 ahead_by 5|3 behind_by 5|4 base_commit_sha 9|5 head_commit_sha 9|6 merge_base_commit_sha 9",
            Un
        ];
    }
}
class ds extends Nn {
    constructor(e){
        super(), this.canMergeWithoutConflicts = !1, this.conflictedPaths = [], this.renameMode = $n.UNSPECIFIED, this.cacheOnlyOutcome = Qn.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ds).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ds).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ds).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ds, e, t);
    }
    static $() {
        return [
            "CanMergeResponse|1 can_merge_without_conflicts 8|2 merged_tree_sha 12?|3 conflicted_paths 9*|4 rename_mode #0|5 cache_only_outcome #1",
            $n,
            Qn
        ];
    }
}
class ps extends Nn {
    constructor(e){
        super(), this.content = new Uint8Array(0), this.mode = jn.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ps).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ps).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ps).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ps, e, t);
    }
    static $() {
        return [
            "CommitFileUpsert|1 content 12|2 mode #0",
            jn
        ];
    }
}
class ms extends Nn {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ms).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ms).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ms).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ms, e, t);
    }
    static $() {
        return [
            "CommitFileDelete"
        ];
    }
}
class hs extends Nn {
    constructor(e){
        super(), this.path = "", this.operation = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new hs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new hs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new hs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(hs, e, t);
    }
    static $() {
        return [
            "CommitFileOperation|1 path 9|2 upsert #0 operation|3 delete #1 operation",
            ps,
            ms
        ];
    }
}
class fs extends Nn {
    constructor(e){
        super(), this.sha = "", this.message = "", this.parentShas = [], this.treeSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fs, e, t);
    }
    static $() {
        return [
            "Commit|1 sha 9|2 message 9|3 author #0|4 committer #0|5 parent_shas 9*|7 tree_sha 9|8 change_id 9?",
            gs
        ];
    }
}
class gs extends Nn {
    constructor(e){
        super(), this.name = "", this.email = "", this.timestamp = n.protoInt64.zero, this.timezoneOffset = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new gs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new gs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new gs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(gs, e, t);
    }
    static $() {
        return [
            "Signature|1 name 9|2 email 9|3 timestamp 3|4 timezone_offset 5"
        ];
    }
}
class ys extends Nn {
    constructor(e){
        super(), this.revision = "", this.path = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ys).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ys).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ys).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ys, e, t);
    }
    static $() {
        return [
            "PathIdentifier|1 revision 9|2 path 9"
        ];
    }
}
class ws extends Nn {
    constructor(e){
        super(), this.size = "", this.encoding = "", this.content = "", this.sha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ws).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ws).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ws).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ws, e, t);
    }
    static $() {
        return [
            "FileContent|1 size 9|2 encoding 9|3 content 9|4 sha 9"
        ];
    }
}
class vs extends Nn {
    constructor(e){
        super(), this.entries = [], this.sha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new vs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new vs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new vs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(vs, e, t);
    }
    static $() {
        return [
            "DirectoryContent|1 entries #0*|2 sha 9",
            Us
        ];
    }
}
class _s extends Nn {
    constructor(e){
        super(), this.resolvedCommitSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _s).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _s).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _s).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_s, e, t);
    }
    static $() {
        return [
            "ResolveRefPathResponse|1 path_identifier #0|2 resolved_commit_sha 9",
            ys
        ];
    }
}
class As extends Nn {
    constructor(e){
        super(), this.content = {
            case: void 0
        }, this.resolvedCommitSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new As).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new As).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new As).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(As, e, t);
    }
    static $() {
        return [
            "GetRepoContentResponse|1 file_content #0 content|2 directory_content #1 content|3 path_identifier #2|4 resolved_commit_sha 9",
            ws,
            vs,
            ys
        ];
    }
}
class Ss extends Nn {
    constructor(e){
        super(), this.path = "", this.found = !1, this.content = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ss).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ss).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ss).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ss, e, t);
    }
    static $() {
        return [
            "BatchRepoContentResult|1 path 9|2 found 8|3 file_content #0 content|4 directory_content #1 content",
            ws,
            vs
        ];
    }
}
class bs extends Nn {
    constructor(e){
        super(), this.results = [], this.resolvedCommitSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new bs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new bs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new bs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(bs, e, t);
    }
    static $() {
        return [
            "BatchGetRepoContentResponse|1 results #0*|2 resolved_commit_sha 9",
            Ss
        ];
    }
}
class Es extends Nn {
    constructor(e){
        super(), this.type = "", this.isBinary = !1, this.tooLargeToIntrospect = !1, this.sha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Es).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Es).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Es).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Es, e, t);
    }
    static $() {
        return [
            "RepoContentDetails|1 type 9|2 size 4?|3 is_binary 8|4 too_large_to_introspect 8|5 sha 9"
        ];
    }
}
class Is extends Nn {
    constructor(e){
        super(), this.resolvedCommitSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Is).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Is).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Is).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Is, e, t);
    }
    static $() {
        return [
            "GetRepoContentDetailsResponse|1 details #0?|2 path_identifier #1|3 resolved_commit_sha 9",
            Es,
            ys
        ];
    }
}
class Cs extends Nn {
    constructor(e){
        super(), this.commits = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Cs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Cs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Cs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Cs, e, t);
    }
    static $() {
        return [
            "GetFileHistoryResponse|1 commits #0*",
            Fs
        ];
    }
}
class ks extends Nn {
    constructor(e){
        super(), this.renameNotChecked = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ks).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ks).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ks).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ks, e, t);
    }
    static $() {
        return [
            "FileHistoryCommitEntry|1 commit #0|2 diff_base_commit_sha 9?|8 path_stats #1?|9 path 9?|10 renamed_from_path 9?|11 rename_not_checked 8",
            Fs,
            Ks
        ];
    }
}
class xs extends Nn {
    constructor(e){
        super(), this.entries = [], this.hasMore = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xs, e, t);
    }
    static $() {
        return [
            "GetFileHistoryPageWithDiffStatsResponse|1 entries #0*|2 has_more 8|3 next_cursor 9?",
            ks
        ];
    }
}
class Ts extends Nn {
    constructor(e){
        super(), this.commitSha = new Uint8Array(0), this.startInBlamedFile = 0, this.len = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ts).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ts).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ts).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ts, e, t);
    }
    static $() {
        return [
            "BlameLineRange|1 commit_sha 12|2 start_in_blamed_file 13|3 len 13"
        ];
    }
}
class Rs extends Nn {
    constructor(e){
        super(), this.commits = [], this.lineRanges = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Rs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Rs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Rs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Rs, e, t);
    }
    static $() {
        return [
            "BlameChunk|1 commits #0*|2 line_ranges #1*",
            Fs,
            Ts
        ];
    }
}
class Bs extends Nn {
    constructor(e){
        super(), this.name = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Bs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Bs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Bs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Bs, e, t);
    }
    static $() {
        return [
            "TreeEntryBlame|1 name 9|2 last_commit #0",
            Fs
        ];
    }
}
class Ps extends Nn {
    constructor(e){
        super(), this.entries = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ps).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ps).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ps).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ps, e, t);
    }
    static $() {
        return [
            "GetTreeBlameResponse|1 entries #0*",
            Bs
        ];
    }
}
class Js extends Nn {
    constructor(e){
        super(), this.paths = [], this.hasMore = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Js).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Js).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Js).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Js, e, t);
    }
    static $() {
        return [
            "GetFuzzyPathsResponse|1 paths 9*|2 has_more 8"
        ];
    }
}
class Ms extends Nn {
    constructor(e){
        super(), this.paths = [], this.hasMore = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ms).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ms).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ms).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ms, e, t);
    }
    static $() {
        return [
            "ListTreePathsResponse|1 paths 9*|2 has_more 8"
        ];
    }
}
class qs extends Nn {
    constructor(e){
        super(), this.literal = !1, this.caseInsensitive = !1, this.wholeWord = !1, this.contextBefore = 0, this.contextAfter = 0, this.includes = [], this.excludes = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qs, e, t);
    }
    static $() {
        return [
            "GrepSearchOptions|1 literal 8|2 case_insensitive 8|3 whole_word 8|4 context_before 13|5 context_after 13|6 max_lines 4?|7 filter_path 9?|8 includes 9*|9 excludes 9*"
        ];
    }
}
class Ds extends Nn {
    constructor(e){
        super(), this.start = 0, this.end = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ds).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ds).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ds).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ds, e, t);
    }
    static $() {
        return [
            "GrepSubmatch|1 start 13|2 end 13"
        ];
    }
}
class Os extends Nn {
    constructor(e){
        super(), this.path = "", this.lines = "", this.lineNumber = 0, this.absoluteOffset = n.protoInt64.zero, this.submatches = [], this.kind = Hn.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Os).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Os).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Os).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Os, e, t);
    }
    static $() {
        return [
            "GrepMatch|1 path 9|2 lines 9|3 line_number 13|4 absolute_offset 4|5 submatches #0*|6 kind #1",
            Ds,
            Hn
        ];
    }
}
class Ns extends Nn {
    constructor(e){
        super(), this.matches = [], this.limitHit = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ns).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ns).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ns).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ns, e, t);
    }
    static $() {
        return [
            "GrepRepoChunk|1 matches #0*|2 limit_hit 8",
            Os
        ];
    }
}
class Fs extends Nn {
    constructor(e){
        super(), this.sha = new Uint8Array(0), this.summary = "", this.authorName = "", this.authorEmail = "", this.timestamp = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Fs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Fs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Fs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Fs, e, t);
    }
    static $() {
        return [
            "ShortCommit|1 sha 12|2 summary 9|3 author_name 9|4 author_email 9|5 timestamp 3"
        ];
    }
}
class Us extends Nn {
    constructor(e){
        super(), this.type = "", this.name = "", this.path = "", this.sha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Us).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Us).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Us).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Us, e, t);
    }
    static $() {
        return [
            "RepoContentEntry|1 type 9|2 name 9|3 path 9|4 sha 9|5 size 4?"
        ];
    }
}
class Ls extends Nn {
    constructor(e){
        super(), this.entries = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ls).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ls).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ls).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ls, e, t);
    }
    static $() {
        return [
            "PullRequestDiffChunk|1 header #0?|3 entries #1*",
            Vs,
            Ys
        ];
    }
}
class $s extends Nn {
    constructor(e){
        super(), this.hasMore = !1, this.entries = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $s).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $s).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $s).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($s, e, t);
    }
    static $() {
        return [
            "CommitDiffHeader|1 commit #0|2 base_commit_sha 9?|3 stats #1|5 has_more 8|6 next_page_cursor 9?|7 entries #2*",
            fs,
            Zs,
            Ys
        ];
    }
}
class Qs extends Nn {
    constructor(e){
        super(), this.entries = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Qs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Qs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Qs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Qs, e, t);
    }
    static $() {
        return [
            "CommitDiffChunk|1 header #0?|3 entries #1*",
            $s,
            Ys
        ];
    }
}
class js extends Nn {
    constructor(e){
        super(), this.entries = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new js).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new js).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new js).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(js, e, t);
    }
    static $() {
        return [
            "CommitDiff2Header|1 commit #0|2 base_commit_sha 9?|3 entries #1*",
            fs,
            Ys
        ];
    }
}
class Gs extends Nn {
    constructor(e){
        super(), this.headerIndex = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Gs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Gs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Gs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Gs, e, t);
    }
    static $() {
        return [
            "CommitDiff2Entry|1 header_index 13|2 stats #0|3 patch 9?",
            Ks
        ];
    }
}
class Hs extends Nn {
    constructor(e){
        super(), this.entries = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Hs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Hs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Hs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Hs, e, t);
    }
    static $() {
        return [
            "CommitDiff2Chunk|1 header #0?|2 entries #1*|3 trailer #2?",
            js,
            Gs,
            Zs
        ];
    }
}
class zs extends Nn {
    constructor(e){
        super(), this.entries = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new zs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new zs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new zs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(zs, e, t);
    }
    static $() {
        return [
            "GetCommitChangedPathsResponse|1 base_commit_sha 9?|2 entries #0*",
            Ys
        ];
    }
}
class Ws extends Nn {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ws).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ws).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ws).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ws, e, t);
    }
    static $() {
        return [
            "GetCommitDiffStatsResponse|1 base_commit_sha 9?|2 stats #0",
            Zs
        ];
    }
}
class Vs extends Nn {
    constructor(e){
        super(), this.mergeBaseCommitSha = "", this.hasMore = !1, this.entries = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Vs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Vs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Vs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Vs, e, t);
    }
    static $() {
        return [
            "DiffHeader|1 merge_base_commit_sha 9|4 has_more 8|5 next_page_cursor 9?|6 entries #0*",
            Ys
        ];
    }
}
class Ks extends Nn {
    constructor(e){
        super(), this.additions = 0, this.deletions = 0, this.isBinary = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ks).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ks).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ks).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ks, e, t);
    }
    static $() {
        return [
            "FileStats|1 additions 5|2 deletions 5|3 is_binary 8"
        ];
    }
}
class Ys extends Nn {
    constructor(e){
        super(), this.path = "", this.changeKind = Vn.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ys).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ys).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ys).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ys, e, t);
    }
    static $() {
        return [
            "DiffEntry|1 path 9|2 old_path 9?|3 change_kind #0|4 old_mode #1?|5 new_mode #1?|6 old_sha 9?|7 new_sha 9?|8 stats #2?|9 patch 9?|10 is_generated 8?",
            Vn,
            Wn,
            Ks
        ];
    }
}
class Zs extends Nn {
    constructor(e){
        super(), this.filesChanged = 0, this.additions = 0, this.deletions = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Zs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Zs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Zs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Zs, e, t);
    }
    static $() {
        return [
            "CommitDiffStats|1 files_changed 13|2 additions 5|3 deletions 5"
        ];
    }
}
class Xs extends Nn {
    constructor(e){
        super(), this.name = "", this.targetSha = "", this.objectSha = "", this.objectType = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Xs).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Xs).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Xs).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Xs, e, t);
    }
    static $() {
        return [
            "RefInfo|1 name 9|2 target_sha 9|3 object_sha 9|4 object_type 9"
        ];
    }
}
class eo extends Nn {
    constructor(e){
        super(), this.refs = [], this.refInfos = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new eo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new eo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new eo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(eo, e, t);
    }
    static $() {
        return [
            "ListRefsResponse|1 refs 9*|2 ref_infos #0*|5 next_page_token 9?",
            Xs
        ];
    }
}
class to extends Nn {
    constructor(e){
        super(), this.refInfos = [], this.exactMatch = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new to).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new to).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new to).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(to, e, t);
    }
    static $() {
        return [
            "SearchRefsResponse|1 ref_infos #0*|2 exact_match 8",
            Xs
        ];
    }
}
const ro = "origin.v1.";
class no extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return ro;
    }
}
var so = (0, s.QT)(n.proto3, ro, "GithubCodeownersFileStatus", [
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
], 1), oo = (0, s.QT)(n.proto3, ro, "GithubCodeownerViewerMatch", [
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
], 1), io = (0, s.QT)(n.proto3, ro, "GithubCodeownersViewerMembershipUnknownReason", [
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
class ao extends no {
    constructor(e){
        super(), this.refPath = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ao).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ao).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ao).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ao, e, t);
    }
    static $() {
        return [
            "ResolveRepoPathClientRequest|1 identifier #0|2 ref_path 9",
            i
        ];
    }
}
class co extends no {
    constructor(e){
        super(), this.refPath = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new co).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new co).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new co).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(co, e, t);
    }
    static $() {
        return [
            "GetRepoContentClientRequest|1 identifier #0|2 ref_path 9|3 max_file_size 4?",
            i
        ];
    }
}
class lo extends no {
    constructor(e){
        super(), this.refPath = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new lo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new lo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new lo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(lo, e, t);
    }
    static $() {
        return [
            "MintRawRepoFileLinkClientRequest|1 identifier #0|2 ref_path 9",
            i
        ];
    }
}
class uo extends no {
    constructor(e){
        super(), this.token = "", this.rawOrigin = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new uo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new uo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new uo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(uo, e, t);
    }
    static $() {
        return [
            "MintRawRepoFileLinkClientResponse|1 token 9|2 path_identifier #0|3 raw_origin 9",
            ys
        ];
    }
}
class po extends no {
    constructor(e){
        super(), this.ref = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new po).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new po).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new po).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(po, e, t);
    }
    static $() {
        return [
            "GetRepoTarballClientRequest|1 identifier #0|2 ref 9",
            i
        ];
    }
}
class mo extends no {
    constructor(e){
        super(), this.downloadUrl = "", this.sha = "", this.filename = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new mo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new mo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new mo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(mo, e, t);
    }
    static $() {
        return [
            "GetRepoTarballClientResponse|1 download_url 9|2 sha 9|3 filename 9"
        ];
    }
}
class ho extends no {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ho).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ho).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ho).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ho, e, t);
    }
    static $() {
        return [
            "GetRepoContentAtShaClientRequest|1 identifier #0|2 path_identifier #1|3 max_file_size 4?",
            i,
            ys
        ];
    }
}
class fo extends no {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fo, e, t);
    }
    static $() {
        return [
            "GetRepoContentDetailsAtShaClientRequest|1 identifier #0|2 path_identifier #1",
            i,
            ys
        ];
    }
}
class go extends no {
    constructor(e){
        super(), this.revision = "", this.paths = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new go).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new go).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new go).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(go, e, t);
    }
    static $() {
        return [
            "BatchGetRepoContentAtShaClientRequest|1 identifier #0|2 revision 9|3 paths 9*|4 max_file_size 4?",
            i
        ];
    }
}
class yo extends no {
    constructor(e){
        super(), this.baseRef = "", this.paths = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new yo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new yo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new yo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(yo, e, t);
    }
    static $() {
        return [
            "GetRepoCodeownersClientRequest|1 identifier #0|2 base_ref 9|3 paths 9*",
            i
        ];
    }
}
class wo extends no {
    constructor(e){
        super(), this.owners = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new wo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new wo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new wo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(wo, e, t);
    }
    static $() {
        return [
            "CodeownersOwners|1 owners 9*"
        ];
    }
}
class vo extends no {
    constructor(e){
        super(), this.codeownersByPath = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new vo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new vo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new vo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(vo, e, t);
    }
    static $() {
        return [
            "GetRepoCodeownersResponse|1 codeowners_by_path 9,#0",
            wo
        ];
    }
}
class _o extends no {
    constructor(e){
        super(), this.baseSha = "", this.paths = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _o).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _o).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _o).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_o, e, t);
    }
    static $() {
        return [
            "GetGithubRepoCodeownersClientRequest|1 identifier #0|2 base_sha 9|3 paths 9*",
            i
        ];
    }
}
class Ao extends no {
    constructor(e){
        super(), this.codeownersByPath = {}, this.fileStatus = so.UNSPECIFIED, this.filePath = "", this.viewerMatchByOwner = {}, this.viewerMembershipKnown = !1, this.viewerMembershipUnknownReason = io.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ao).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ao).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ao).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ao, e, t);
    }
    static $() {
        return [
            "GetGithubRepoCodeownersResponse|1 codeowners_by_path 9,#0|2 file_status #1|3 file_path 9|4 viewer_match_by_owner 9,#2|5 viewer_membership_known 8|6 viewer_membership_unknown_reason #3",
            wo,
            so,
            oo,
            io
        ];
    }
}
class So extends no {
    constructor(e){
        super(), this.commitSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new So).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new So).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new So).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(So, e, t);
    }
    static $() {
        return [
            "GetCommitClientRequest|1 identifier #0|2 commit_sha 9",
            i
        ];
    }
}
class bo extends no {
    constructor(e){
        super(), this.blobSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new bo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new bo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new bo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(bo, e, t);
    }
    static $() {
        return [
            "GetBlobClientRequest|1 identifier #0|2 blob_sha 9",
            i
        ];
    }
}
class Eo extends no {
    constructor(e){
        super(), this.tagSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Eo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Eo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Eo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Eo, e, t);
    }
    static $() {
        return [
            "GetTagClientRequest|1 identifier #0|2 tag_sha 9",
            i
        ];
    }
}
class Io extends no {
    constructor(e){
        super(), this.treeSha = "", this.recursive = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Io).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Io).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Io).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Io, e, t);
    }
    static $() {
        return [
            "GetTreeClientRequest|1 identifier #0|2 tree_sha 9|3 recursive 8",
            i
        ];
    }
}
class Co extends no {
    constructor(e){
        super(), this.startCommitSha = "", this.maxCommits = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Co).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Co).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Co).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Co, e, t);
    }
    static $() {
        return [
            "GetFileHistoryClientRequest|1 identifier #0|2 start_commit_sha 9|3 path 9?|4 max_commits 13",
            i
        ];
    }
}
class ko extends no {
    constructor(e){
        super(), this.startCommitSha = "", this.pageSize = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ko).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ko).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ko).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ko, e, t);
    }
    static $() {
        return [
            "GetFileHistoryPageClientRequest|1 identifier #0|2 start_commit_sha 9|3 path 9?|4 page_size 13|5 next_cursor 9?",
            i
        ];
    }
}
class xo extends no {
    constructor(e){
        super(), this.commits = [], this.hasMore = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xo, e, t);
    }
    static $() {
        return [
            "GetFileHistoryPageResponse|1 commits #0*|2 has_more 8|3 next_cursor 9?",
            Fs
        ];
    }
}
class To extends no {
    constructor(e){
        super(), this.startCommitSha = "", this.pageSize = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new To).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new To).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new To).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(To, e, t);
    }
    static $() {
        return [
            "GetFileHistoryPageWithDiffStatsClientRequest|1 identifier #0|2 start_commit_sha 9|3 path 9?|4 page_size 13|5 next_cursor 9?",
            i
        ];
    }
}
class Ro extends no {
    constructor(e){
        super(), this.startCommitSha = "", this.path = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ro).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ro).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ro).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ro, e, t);
    }
    static $() {
        return [
            "GetBlameClientRequest|1 identifier #0|2 start_commit_sha 9|3 path 9",
            i
        ];
    }
}
class Bo extends no {
    constructor(e){
        super(), this.startCommitSha = "", this.path = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Bo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Bo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Bo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Bo, e, t);
    }
    static $() {
        return [
            "GetTreeBlameClientRequest|1 identifier #0|2 start_commit_sha 9|3 path 9",
            i
        ];
    }
}
class Po extends no {
    constructor(e){
        super(), this.commitSha = "", this.query = "", this.limit = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Po).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Po).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Po).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Po, e, t);
    }
    static $() {
        return [
            "GetFuzzyPathsClientRequest|1 identifier #0|2 commit_sha 9|3 query 9|4 limit 13",
            i
        ];
    }
}
class Jo extends no {
    constructor(e){
        super(), this.revision = "", this.includes = [], this.excludes = [], this.limit = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Jo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Jo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Jo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Jo, e, t);
    }
    static $() {
        return [
            "ListRepoPathsClientRequest|1 identifier #0|2 revision 9|3 includes 9*|4 excludes 9*|5 limit 13",
            i
        ];
    }
}
class Mo extends no {
    constructor(e){
        super(), this.revision = "", this.query = "", this.maxResults = 0, this.maxTotalLines = 0, this.priority = Gn.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Mo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Mo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Mo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Mo, e, t);
    }
    static $() {
        return [
            "GrepRepoClientRequest|1 identifier #0|2 revision 9|3 query 9|4 options #1|5 max_results 13|6 max_total_lines 13|7 priority #2",
            i,
            qs,
            Gn
        ];
    }
}
class qo extends no {
    constructor(e){
        super(), this.headCommitSha = "", this.baseCommitSha = "", this.contextLines = 0, this.generatedAttributesRevision = zn.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qo, e, t);
    }
    static $() {
        return [
            "GetPullRequestDiffClientRequest|1 identifier #0|2 head_commit_sha 9|3 base_commit_sha 9|4 include_patches 8?|5 include_file_stats 8?|6 page_size 13?|7 page_cursor 9?|8 context_lines 13|9 generated_attributes_revision #1",
            i,
            zn
        ];
    }
}
class Do extends no {
    constructor(e){
        super(), this.commitSha = "", this.includePatches = !1, this.paths = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Do).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Do).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Do).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Do, e, t);
    }
    static $() {
        return [
            "GetCommitDiffClientRequest|1 identifier #0|2 commit_sha 9|3 base_commit_sha 9?|4 include_patches 8|5 paths 9*|6 page_size 13?|7 page_cursor 9?",
            i
        ];
    }
}
class Oo extends no {
    constructor(e){
        super(), this.commitSha = "", this.includePatches = !1, this.paths = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Oo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Oo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Oo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Oo, e, t);
    }
    static $() {
        return [
            "GetCommitDiff2ClientRequest|1 identifier #0|2 commit_sha 9|3 base_commit_sha 9?|4 include_patches 8|5 paths 9*",
            i
        ];
    }
}
class No extends no {
    constructor(e){
        super(), this.commitSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new No).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new No).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new No).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(No, e, t);
    }
    static $() {
        return [
            "GetCommitChangedPathsClientRequest|1 identifier #0|2 commit_sha 9|3 base_commit_sha 9?",
            i
        ];
    }
}
class Fo extends no {
    constructor(e){
        super(), this.commitSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Fo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Fo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Fo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Fo, e, t);
    }
    static $() {
        return [
            "GetCommitDiffStatsClientRequest|1 identifier #0|2 commit_sha 9|3 base_commit_sha 9?",
            i
        ];
    }
}
class Uo extends no {
    constructor(e){
        super(), this.filter = Kn.UNSPECIFIED, this.namesOnly = !1, this.prefix = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Uo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Uo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Uo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Uo, e, t);
    }
    static $() {
        return [
            "ListRefsClientRequest|1 identifier #0|2 filter #1|3 names_only 8|4 prefix 9|5 limit 13?|7 page_token 9?",
            i,
            Kn
        ];
    }
}
class Lo extends no {
    constructor(e){
        super(), this.filter = Kn.UNSPECIFIED, this.query = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Lo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Lo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Lo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Lo, e, t);
    }
    static $() {
        return [
            "SearchRefsClientRequest|1 identifier #0|2 filter #1|3 query 9|4 limit 13?",
            i,
            Kn
        ];
    }
}
class $o extends no {
    constructor(e){
        super(), this.shaPrefix = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $o).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $o).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $o).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($o, e, t);
    }
    static $() {
        return [
            "LookupCommitsClientRequest|1 identifier #0|2 sha_prefix 9|3 limit 13?",
            i
        ];
    }
}
class Qo extends no {
    constructor(e){
        super(), this.revision = "", this.includeLineStats = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Qo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Qo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Qo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Qo, e, t);
    }
    static $() {
        return [
            "GetCommitActivityClientRequest|1 identifier #0|2 revision 9|3 since_timestamp 3?|4 max_contributors 13?|5 until_timestamp 3?|6 include_line_stats 8",
            i
        ];
    }
}
class jo extends no {
    constructor(e){
        super(), this.usersByContributorKey = {}, this.pending = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new jo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new jo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new jo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(jo, e, t);
    }
    static $() {
        return [
            "GetCommitActivityClientResponse|1 activity #0|2 users_by_contributor_key 9,#1|3 pending 8",
            cs,
            Go
        ];
    }
}
class Go extends no {
    constructor(e){
        super(), this.userId = "", this.displayName = "", this.avatarUrl = "", this.profileHandle = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Go).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Go).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Go).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Go, e, t);
    }
    static $() {
        return [
            "CommitActivityContributorUser|1 user_id 9|2 display_name 9|3 avatar_url 9|4 profile_handle 9"
        ];
    }
}
class Ho extends no {
    constructor(e){
        super(), this.ours = "", this.theirs = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ho).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ho).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ho).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ho, e, t);
    }
    static $() {
        return [
            "CanMergeClientRequest|1 identifier #0|2 ours 9|3 theirs 9",
            i
        ];
    }
}
class zo extends no {
    constructor(e){
        super(), this.baseRevision = "", this.headRevision = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new zo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new zo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new zo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(zo, e, t);
    }
    static $() {
        return [
            "CompareCommitsClientRequest|1 identifier #0|2 base_revision 9|3 head_revision 9",
            i
        ];
    }
}
class Wo extends no {
    constructor(e){
        super(), this.baseRevision = "", this.headRevision = "", this.oldestFirst = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Wo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Wo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Wo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Wo, e, t);
    }
    static $() {
        return [
            "ListCommitsInRangeClientRequest|1 identifier #0|2 base_revision 9|3 head_revision 9|4 max_commits 5?|5 oldest_first 8",
            i
        ];
    }
}
class Vo extends no {
    constructor(e){
        super(), this.branch = "", this.message = "", this.files = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Vo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Vo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Vo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Vo, e, t);
    }
    static $() {
        return [
            "CreateCommitFromFilesClientRequest|1 identifier #0|2 branch 9|3 expected_head_sha 9?|4 message 9|5 author #1|6 committer #1?|7 files #2*",
            i,
            gs,
            hs
        ];
    }
}
class Ko extends no {
    constructor(e){
        super(), this.commitSha = "", this.treeSha = "", this.oldHeadSha = "", this.reverseMirrorPushFailed = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ko).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ko).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ko).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ko, e, t);
    }
    static $() {
        return [
            "CreateCommitFromFilesClientResponse|1 commit_sha 9|2 tree_sha 9|3 old_head_sha 9|4 reverse_mirror_push_failed 8"
        ];
    }
}
class Yo extends no {
    constructor(e){
        super(), this.path = "", this.changeKind = Vn.UNSPECIFIED, this.isBinary = !1, this.patch = "", this.additions = 0, this.deletions = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Yo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Yo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Yo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Yo, e, t);
    }
    static $() {
        return [
            "CollectedFileDiff|1 path 9|2 old_path 9?|3 change_kind #0|4 is_binary 8|5 patch 9|6 additions 5|7 deletions 5|8 is_generated 8?|9 old_mode #1?|10 new_mode #1?",
            Vn,
            Wn
        ];
    }
}
class Zo extends no {
    constructor(e){
        super(), this.headCommitSha = "", this.baseCommitSha = "", this.contextLines = 0, this.generatedAttributesRevision = zn.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Zo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Zo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Zo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Zo, e, t);
    }
    static $() {
        return [
            "GetCollectedPullRequestDiffRequest|1 identifier #0|2 head_commit_sha 9|3 base_commit_sha 9|4 include_patches 8?|5 include_file_stats 8?|6 page_size 13?|7 page_cursor 9?|8 change_number 4?|9 version_number 4?|10 context_lines 13|11 generated_attributes_revision #1|12 project_latest_version_base 8?",
            i,
            zn
        ];
    }
}
class Xo extends no {
    constructor(e){
        super(), this.mergeBaseSha = "", this.files = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Xo).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Xo).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Xo).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Xo, e, t);
    }
    static $() {
        return [
            "GetCollectedPullRequestDiffResponse|1 merge_base_sha 9|2 files #0*|4 next_page_cursor 9?|5 resolved_head_sha 9?|6 resolved_base_sha 9?|7 resolved_version_number 4?",
            Yo
        ];
    }
}
class ei extends no {
    constructor(e){
        super(), this.branch = "", this.expectedHeadSha = "", this.newHeadSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ei).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ei).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ei).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ei, e, t);
    }
    static $() {
        return [
            "FastForwardBranchClientRequest|1 identifier #0|2 branch 9|3 expected_head_sha 9|4 new_head_sha 9",
            i
        ];
    }
}
class ti extends no {
    constructor(e){
        super(), this.oldHeadSha = "", this.newHeadSha = "", this.unchanged = !1, this.reverseMirrorPushFailed = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ti).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ti).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ti).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ti, e, t);
    }
    static $() {
        return [
            "FastForwardBranchClientResponse|1 old_head_sha 9|2 new_head_sha 9|3 unchanged 8|4 reverse_mirror_push_failed 8"
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
var si = (0, s.QT)(n.proto3, ri, "CodeIntelligenceProvenance", [
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
class oi extends ni {
    constructor(e){
        super(), this.indexedCommitSha = "", this.provenance = si.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new oi).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new oi).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new oi).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(oi, e, t);
    }
    static $() {
        return [
            "CodeIntelligenceIndex|1 indexed_commit_sha 9|2 provenance #0",
            si
        ];
    }
}
class ii extends ni {
    constructor(e){
        super(), this.line = 0, this.utf16Column = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ii).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ii).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ii).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ii, e, t);
    }
    static $() {
        return [
            "CodeIntelligencePosition|1 line 13|2 utf16_column 13"
        ];
    }
}
class ai extends ni {
    constructor(e){
        super(), this.startLine = 0, this.startUtf16Column = 0, this.endLine = 0, this.endUtf16Column = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ai).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ai).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ai).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ai, e, t);
    }
    static $() {
        return [
            "CodeIntelligenceRange|1 start_line 13|2 start_utf16_column 13|3 end_line 13|4 end_utf16_column 13"
        ];
    }
}
class ci extends ni {
    constructor(e){
        super(), this.path = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ci).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ci).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ci).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ci, e, t);
    }
    static $() {
        return [
            "CodeIntelligenceLocation|1 path 9|2 range #0",
            ai
        ];
    }
}
class li extends ni {
    constructor(e){
        super(), this.opaqueId = "", this.definitions = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new li).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new li).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new li).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(li, e, t);
    }
    static $() {
        return [
            "ResolvedCodeIntelligenceSymbol|1 opaque_id 9|2 occurrence_range #0|3 definition #1?|4 signature 9?|5 documentation 9?|6 definitions #1*|7 kind 9?",
            ai,
            ci
        ];
    }
}
class ui extends ni {
    constructor(e){
        super(), this.commitSha = "", this.path = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ui).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ui).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ui).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ui, e, t);
    }
    static $() {
        return [
            "ResolveCodeIntelligenceSymbolAtPositionRequest|1 repo #0|2 commit_sha 9|3 path 9|4 position #1",
            i,
            ii
        ];
    }
}
class di extends ni {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new di).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new di).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new di).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(di, e, t);
    }
    static $() {
        return [
            "ResolveCodeIntelligenceSymbolAtPositionResponse|1 index #0|2 symbol #1?",
            oi,
            li
        ];
    }
}
class pi extends ni {
    constructor(e){
        super(), this.commitSha = "", this.path = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pi).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pi).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pi).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pi, e, t);
    }
    static $() {
        return [
            "FindCodeIntelligenceReferencesAtPositionRequest|1 repo #0|2 commit_sha 9|3 path 9|4 position #1",
            i,
            ii
        ];
    }
}
class mi extends ni {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new mi).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new mi).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new mi).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(mi, e, t);
    }
    static $() {
        return [
            "FindCodeIntelligenceReferencesAtPositionHeader|1 index #0|2 symbol #1?",
            oi,
            li
        ];
    }
}
class hi extends ni {
    constructor(e){
        super(), this.isDefinition = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new hi).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new hi).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new hi).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(hi, e, t);
    }
    static $() {
        return [
            "FindCodeIntelligenceReferencesAtPositionResult|1 location #0|2 is_definition 8",
            ci
        ];
    }
}
class fi extends ni {
    constructor(e){
        super(), this.totalCount = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fi).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fi).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fi).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fi, e, t);
    }
    static $() {
        return [
            "FindCodeIntelligenceReferencesAtPositionTrailer|1 total_count 13"
        ];
    }
}
class gi extends ni {
    constructor(e){
        super(), this.chunk = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new gi).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new gi).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new gi).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(gi, e, t);
    }
    static $() {
        return [
            "FindCodeIntelligenceReferencesAtPositionResponse|1 header #0 chunk|2 result #1 chunk|3 trailer #2 chunk",
            mi,
            hi,
            fi
        ];
    }
}
const yi = "origin.v1.";
class wi extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return yi;
    }
}
var vi = (0, s.QT)(n.proto3, yi, "DiffRelayOwnerPrivacyClass", [
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
], 1), _i = (0, s.QT)(n.proto3, yi, "DiffRelayContentEncoding", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "IDENTITY"
    ]
], 1), Ai = (0, s.QT)(n.proto3, yi, "DiffRelayNotServedReason", [
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
class Si extends wi {
    constructor(e){
        super(), this.headCommitSha = "", this.baseCommitSha = "", this.baseIsMergeBase = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Si).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Si).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Si).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Si, e, t);
    }
    static $() {
        return [
            "DiffRelayTarget|1 identifier #0|2 change_number 4?|3 version_number 4?|4 head_commit_sha 9|5 base_commit_sha 9|6 base_is_merge_base 8|7 from #1?",
            i,
            bi
        ];
    }
}
class bi extends wi {
    constructor(e){
        super(), this.headCommitSha = "", this.baseCommitSha = "", this.baseIsMergeBase = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new bi).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new bi).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new bi).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(bi, e, t);
    }
    static $() {
        return [
            "DiffRelayCommitPair|1 head_commit_sha 9|2 base_commit_sha 9|3 base_is_merge_base 8"
        ];
    }
}
class Ei extends wi {
    constructor(e){
        super(), this.serviceRequest = new Uint8Array(0), this.shadow = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ei).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ei).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ei).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ei, e, t);
    }
    static $() {
        return [
            "GetDiffListingClientRequest|1 target #0|2 service_request 12|3 shadow 8",
            Si
        ];
    }
}
class Ii extends wi {
    constructor(e){
        super(), this.serviceRequest = new Uint8Array(0), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ii).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ii).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ii).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ii, e, t);
    }
    static $() {
        return [
            "StreamDiffFilesClientRequest|1 target #0|2 service_request 12|3 thread_anchors #1?",
            Si,
            Ci
        ];
    }
}
class Ci extends wi {
    constructor(e){
        super(), this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ci).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ci).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ci).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ci, e, t);
    }
    static $() {
        return [
            "DiffRelayStreamThreadAnchorSource|1 change_number 4"
        ];
    }
}
class ki extends wi {
    constructor(e){
        super(), this.serviceRequest = new Uint8Array(0), this.shadow = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ki).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ki).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ki).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ki, e, t);
    }
    static $() {
        return [
            "GetDiffFileClientRequest|1 target #0|2 service_request 12|3 shadow 8|4 thread_anchors #1?",
            Si,
            xi
        ];
    }
}
class xi extends wi {
    constructor(e){
        super(), this.changeNumber = n.protoInt64.zero, this.fromPath = "", this.toPath = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xi).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xi).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xi).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xi, e, t);
    }
    static $() {
        return [
            "DiffRelayThreadAnchorSource|1 change_number 4|2 from_path 9|3 to_path 9"
        ];
    }
}
class Ti extends wi {
    constructor(e){
        super(), this.serviceRequest = new Uint8Array(0), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ti).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ti).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ti).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ti, e, t);
    }
    static $() {
        return [
            "GetDiffEngineInfoClientRequest|1 service_request 12"
        ];
    }
}
class Ri extends wi {
    constructor(e){
        super(), this.serviceRequest = new Uint8Array(0), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ri).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ri).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ri).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ri, e, t);
    }
    static $() {
        return [
            "PortAnchorsClientRequest|1 target #0|2 source #0|3 service_request 12",
            Si
        ];
    }
}
class Bi extends wi {
    constructor(e){
        super(), this.body = {
            case: void 0
        }, this.contentEncoding = _i.UNSPECIFIED, this.chunkIndex = 0, this.done = !1, this.ownerPrivacyClass = vi.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Bi).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Bi).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Bi).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Bi, e, t);
    }
    static $() {
        return [
            "OriginDiffEnvelope|1 payload 12 body|2 oversized #0 body|3 not_served #1 body|4 content_encoding #2|5 chunk_index 13|6 done 8|7 owner_privacy_class #3",
            Pi,
            Ji,
            _i,
            vi
        ];
    }
}
class Pi extends wi {
    constructor(e){
        super(), this.sizeBytes = n.protoInt64.zero, this.maxBytes = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Pi).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Pi).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Pi).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Pi, e, t);
    }
    static $() {
        return [
            "DiffRelayOversized|1 size_bytes 4|2 max_bytes 4"
        ];
    }
}
class Ji extends wi {
    constructor(e){
        super(), this.reason = Ai.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ji).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ji).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ji).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ji, e, t);
    }
    static $() {
        return [
            "DiffRelayNotServed|1 reason #0",
            Ai
        ];
    }
}
class Mi extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class qi extends Mi {
    constructor(e){
        super(), this.id = "", this.kind = "", this.displayName = "", this.avatarUrl = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qi).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qi).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qi).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qi, e, t);
    }
    static $() {
        return [
            "ActorWithDisplay|1 id 9|2 kind 9|3 display_name 9|4 avatar_url 9|5 performed_via #0",
            qi
        ];
    }
}
const Di = "origin.v1.";
class Oi extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return Di;
    }
}
var Ni = (0, s.QT)(n.proto3, Di, "ChangeStatus", [
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
], 1), Fi = (0, s.QT)(n.proto3, Di, "VersionPotentialMergeCommitState", [
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
], 1), Ui = (0, s.QT)(n.proto3, Di, "UpdateChangeBranchMethod", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MERGE_COMMIT"
    ]
], 1), Li = (0, s.QT)(n.proto3, Di, "ReviewVerdict", [
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
], 1), $i = (0, s.QT)(n.proto3, Di, "ChangeAssignmentKind", [
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
], 1), Qi = (0, s.QT)(n.proto3, Di, "ChangeAssignmentCreatedVia", [
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
], 1), ji = (0, s.QT)(n.proto3, Di, "ReviewRequestEventAction", [
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
], 1), Gi = (0, s.QT)(n.proto3, Di, "ChangeCodeownersMatchPathReason", [
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
], 1), Hi = (0, s.QT)(n.proto3, Di, "StackMemberParentRelation", [
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
], 1), zi = (0, s.QT)(n.proto3, Di, "StackMemberRecommendedAction", [
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
], 1), Wi = (0, s.QT)(n.proto3, Di, "SectionOfChangesSortField", [
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
], 1), Vi = (0, s.QT)(n.proto3, Di, "SectionOfChangesStatus", [
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
], 1), Ki = (0, s.QT)(n.proto3, Di, "SectionOfChangesVerdict", [
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
], 1), Yi = (0, s.QT)(n.proto3, Di, "SectionOfChangesReviewStatusState", [
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
class Zi extends Oi {
    constructor(e){
        super(), this.id = "", this.repoUuid = "", this.number = n.protoInt64.zero, this.title = "", this.description = "", this.headRef = "", this.baseRef = "", this.status = Ni.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Zi).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Zi).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Zi).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Zi, e, t);
    }
    static $() {
        return [
            "Change|1 id 9|2 repo_uuid 9|3 number 4|4 title 9|5 description 9|6 head_ref 9|7 base_ref 9|9 status #0|10 created_at #1|11 updated_at #1|12 merged_at #1?|13 closed_at #1?|14 parent_change_id 9?|15 stack_id 9?|16 merge_commit_sha 9?|22 author #2|23 merged_by #2|24 merged_version_id 9?",
            Ni,
            n.Timestamp,
            qi
        ];
    }
}
class Xi extends Oi {
    constructor(e){
        super(), this.id = "", this.changeId = "", this.number = n.protoInt64.zero, this.headSha = "", this.baseSha = "", this.additions = 0, this.deletions = 0, this.changedFiles = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Xi).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Xi).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Xi).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Xi, e, t);
    }
    static $() {
        return [
            "Version|1 id 9|2 change_id 9|3 number 4|4 head_sha 9|5 base_sha 9|6 created_at #0|7 additions 5|8 deletions 5|9 changed_files 5|10 merge_base_sha 9?|11 ahead_by 5?|12 behind_by 5?|13 head_tree_oid 9?|14 merge_base_tree_oid 9?|15 potential_merge_commit #1|16 included_in_merge 8?",
            n.Timestamp,
            ea
        ];
    }
}
class ea extends Oi {
    constructor(e){
        super(), this.state = Fi.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ea).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ea).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ea).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ea, e, t);
    }
    static $() {
        return [
            "VersionPotentialMergeCommit|1 state #0|2 sha 9?|3 base_sha 9?",
            Fi
        ];
    }
}
class ta extends Oi {
    constructor(e){
        super(), this.title = "", this.description = "", this.headRef = "", this.baseRef = "", this.status = Ni.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ta).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ta).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ta).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ta, e, t);
    }
    static $() {
        return [
            "CreateChangeRequest|1 identifier #0|2 title 9|3 description 9|4 head_ref 9|5 base_ref 9|6 status #1|7 parent_change #2",
            i,
            Ni,
            na
        ];
    }
}
class ra extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ra).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ra).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ra).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ra, e, t);
    }
    static $() {
        return [
            "CreateChangeResponse|1 change #0|2 initial_version #1",
            Zi,
            Xi
        ];
    }
}
class na extends Oi {
    constructor(e){
        super(), this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new na).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new na).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new na).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(na, e, t);
    }
    static $() {
        return [
            "ChangeIdentifier|1 identifier #0|2 change_number 4",
            i
        ];
    }
}
class sa extends Oi {
    constructor(e){
        super(), this.draft = !1, this.allowStackLandingRevert = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new sa).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new sa).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new sa).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(sa, e, t);
    }
    static $() {
        return [
            "RevertPullRequestRequest|1 change #0|2 title 9?|3 description 9?|4 draft 8|5 allow_stack_landing_revert 8",
            na
        ];
    }
}
class oa extends Oi {
    constructor(e){
        super(), this.reverseMirrorPushFailed = !1, this.revertedChangeNumbers = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new oa).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new oa).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new oa).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(oa, e, t);
    }
    static $() {
        return [
            "RevertPullRequestResponse|1 change #0|2 reverse_mirror_push_failed 8|5 reverted_change_numbers 4*",
            Zi
        ];
    }
}
class ia extends Oi {
    constructor(e){
        super(), this.parentUpdate = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ia).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ia).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ia).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ia, e, t);
    }
    static $() {
        return [
            "UpdateChangeRequest|1 change #0|2 head_ref 9?|3 base_ref 9?|4 parent_change #0 parent_update|5 clear_parent 8 parent_update",
            na
        ];
    }
}
class aa extends Oi {
    constructor(e){
        super(), this.unchanged = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new aa).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new aa).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new aa).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(aa, e, t);
    }
    static $() {
        return [
            "UpdateChangeResponse|1 change #0|2 latest_version #1|3 unchanged 8",
            Zi,
            Xi
        ];
    }
}
class ca extends Oi {
    constructor(e){
        super(), this.method = Ui.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ca).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ca).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ca).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ca, e, t);
    }
    static $() {
        return [
            "UpdateChangeBranchRequest|1 change #0|2 method #1",
            na,
            Ui
        ];
    }
}
class la extends Oi {
    constructor(e){
        super(), this.unchanged = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new la).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new la).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new la).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(la, e, t);
    }
    static $() {
        return [
            "UpdateChangeBranchResponse|1 change #0|2 latest_version #1|3 unchanged 8",
            Zi,
            Xi
        ];
    }
}
class ua extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ua).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ua).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ua).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ua, e, t);
    }
    static $() {
        return [
            "DeleteChangeHeadBranchRequest|1 change #0",
            na
        ];
    }
}
class da extends Oi {
    constructor(e){
        super(), this.alreadyDeleted = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new da).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new da).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new da).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(da, e, t);
    }
    static $() {
        return [
            "DeleteChangeHeadBranchResponse|1 already_deleted 8"
        ];
    }
}
class pa extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pa).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pa).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pa).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pa, e, t);
    }
    static $() {
        return [
            "RestorePullRequestBranchRequest|1 change #0",
            na
        ];
    }
}
class ma extends Oi {
    constructor(e){
        super(), this.alreadyRestored = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ma).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ma).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ma).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ma, e, t);
    }
    static $() {
        return [
            "RestorePullRequestBranchResponse|1 already_restored 8"
        ];
    }
}
class ha extends Oi {
    constructor(e){
        super(), this.baseRef = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ha).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ha).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ha).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ha, e, t);
    }
    static $() {
        return [
            "RetargetChangeRequest|1 change #0|2 base_ref 9",
            na
        ];
    }
}
class fa extends Oi {
    constructor(e){
        super(), this.unchanged = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fa).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fa).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fa).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fa, e, t);
    }
    static $() {
        return [
            "RetargetChangeResponse|1 change #0|2 latest_version #1|3 unchanged 8",
            Zi,
            Xi
        ];
    }
}
class ga extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ga).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ga).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ga).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ga, e, t);
    }
    static $() {
        return [
            "FoldChangeRequest|1 change #0",
            na
        ];
    }
}
class ya extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ya).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ya).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ya).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ya, e, t);
    }
    static $() {
        return [
            "FoldChangeResponse"
        ];
    }
}
class wa extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new wa).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new wa).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new wa).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(wa, e, t);
    }
    static $() {
        return [
            "LandChangeTreePathRequest|1 tree #0|2 leaf #0",
            na
        ];
    }
}
class va extends Oi {
    constructor(e){
        super(), this.oldTrunkSha = "", this.newTrunkSha = "", this.mergedChangeNumbers = [], this.closedChangeNumbers = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new va).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new va).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new va).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(va, e, t);
    }
    static $() {
        return [
            "LandChangeTreePathResponse|1 old_trunk_sha 9|2 new_trunk_sha 9|3 merged_change_numbers 4*|4 closed_change_numbers 4*"
        ];
    }
}
class _a extends Oi {
    constructor(e){
        super(), this.expectedHeadSha = "", this.expectedBaseSha = "", this.groups = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _a).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _a).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _a).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_a, e, t);
    }
    static $() {
        return [
            "SplitChangeIntoStackRequest|1 change #0|2 expected_head_sha 9|3 expected_base_sha 9|4 groups #1*",
            na,
            Aa
        ];
    }
}
class Aa extends Oi {
    constructor(e){
        super(), this.title = "", this.paths = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Aa).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Aa).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Aa).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Aa, e, t);
    }
    static $() {
        return [
            "SplitChangeStackGroup|1 title 9|2 paths 9*"
        ];
    }
}
class Sa extends Oi {
    constructor(e){
        super(), this.changes = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Sa).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Sa).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Sa).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Sa, e, t);
    }
    static $() {
        return [
            "SplitChangeIntoStackResponse|1 changes #0*",
            Zi
        ];
    }
}
class ba extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ba).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ba).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ba).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ba, e, t);
    }
    static $() {
        return [
            "UpdateChangeMetadataRequest|1 change #0|2 title 9?|3 description 9?",
            na
        ];
    }
}
class Ea extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ea).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ea).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ea).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ea, e, t);
    }
    static $() {
        return [
            "UpdateChangeMetadataResponse|1 change #0",
            Zi
        ];
    }
}
class Ia extends Oi {
    constructor(e){
        super(), this.status = Ni.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ia).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ia).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ia).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ia, e, t);
    }
    static $() {
        return [
            "UpdateChangeStatusRequest|1 change #0|2 status #1|3 reset_base #2?",
            na,
            Ni,
            Ca
        ];
    }
}
class Ca extends Oi {
    constructor(e){
        super(), this.expectedBaseTipSha = "", this.resetToSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ca).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ca).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ca).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ca, e, t);
    }
    static $() {
        return [
            "ReopenBaseReset|1 expected_base_tip_sha 9|2 reset_to_sha 9"
        ];
    }
}
class ka extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ka).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ka).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ka).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ka, e, t);
    }
    static $() {
        return [
            "UpdateChangeStatusResponse|1 change #0",
            Zi
        ];
    }
}
class xa extends Oi {
    constructor(e){
        super(), this.dismissalMessage = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xa).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xa).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xa).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xa, e, t);
    }
    static $() {
        return [
            "ReviewDismissal|1 dismissed_at #0|4 dismissal_message 9|5 dismissed_by #1",
            n.Timestamp,
            qi
        ];
    }
}
class Ta extends Oi {
    constructor(e){
        super(), this.id = "", this.changeId = "", this.versionId = "", this.versionNumber = n.protoInt64.zero, this.verdict = Li.UNSPECIFIED, this.body = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ta).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ta).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ta).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ta, e, t);
    }
    static $() {
        return [
            "Review|1 id 9|2 change_id 9|3 version_id 9|4 version_number 4|6 verdict #0|7 body 9|8 created_at #1|12 submitted_at #1?|13 dismissal #2?|14 author #3",
            Li,
            n.Timestamp,
            xa,
            qi
        ];
    }
}
class Ra extends Oi {
    constructor(e){
        super(), this.id = "", this.eventType = "", this.actorDisplayName = "", this.actorAvatarUrl = "", this.subjectUserId = "", this.subjectUserDisplayName = "", this.subjectUserAvatarUrl = "", this.subjectGroupId = "", this.labelName = "", this.labelColor = "", this.previousBaseRef = "", this.newBaseRef = "", this.previousTitle = "", this.newTitle = "", this.previousHeadSha = "", this.newHeadSha = "", this.headRefName = "", this.reviewId = "", this.dismissalMessage = "", this.relatedChangeNumber = n.protoInt64.zero, this.mergeQueueEvictionReason = "", this.mergeQueueValidationSha = "", this.satisfierGates = [], this.stoodInOwnerRules = [], this.codeReviewGateReported = !1, this.baseRefName = "", this.previousBaseSha = "", this.newBaseSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ra).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ra).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ra).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ra, e, t);
    }
    static $() {
        return [
            "ChangeTimelineEvent|1 id 9|2 event_type 9|3 created_at #0|6 actor_display_name 9|7 actor_avatar_url 9|8 subject_user_id 9|9 subject_user_display_name 9|10 subject_user_avatar_url 9|11 subject_group_id 9|12 label_name 9|13 label_color 9|14 previous_base_ref 9|15 new_base_ref 9|16 previous_title 9|17 new_title 9|18 previous_head_sha 9|19 new_head_sha 9|20 head_ref_name 9|21 review_id 9|22 dismissal_message 9|23 related_change_number 4|24 actor #1|25 merge_queue_eviction_reason 9|26 merge_queue_validation_sha 9|27 satisfier_gates #2*|28 stood_in_owner_rules #3*|29 code_review_gate_reported 8|30 base_ref_name 9|31 previous_base_sha 9|32 new_base_sha 9",
            n.Timestamp,
            qi,
            Ba,
            Pa
        ];
    }
}
class Ba extends Oi {
    constructor(e){
        super(), this.gate = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ba).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ba).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ba).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ba, e, t);
    }
    static $() {
        return [
            "ChangesetApprovedGate|1 gate 9|2 report_url 9?"
        ];
    }
}
class Pa extends Oi {
    constructor(e){
        super(), this.scope = "", this.reviewers = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Pa).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Pa).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Pa).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Pa, e, t);
    }
    static $() {
        return [
            "ChangeTimelineOwnerRule|1 scope 9|2 reviewers 9*"
        ];
    }
}
class Ja extends Oi {
    constructor(e){
        super(), this.id = "", this.changeId = "", this.versionId = "", this.versionNumber = n.protoInt64.zero, this.body = "", this.threadId = "", this.reactionGroups = [], this.reviewId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ja).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ja).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ja).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ja, e, t);
    }
    static $() {
        return [
            "Comment|1 id 9|2 change_id 9|3 version_id 9|4 version_number 4|6 body 9|7 created_at #0|8 updated_at #0|9 thread_id 9|13 reaction_groups #1*|14 author #2|15 review_id 9",
            n.Timestamp,
            Ma,
            qi
        ];
    }
}
class Ma extends Oi {
    constructor(e){
        super(), this.emoji = "", this.count = 0, this.viewerHasReacted = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ma).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ma).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ma).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ma, e, t);
    }
    static $() {
        return [
            "CommentReactionGroup|1 emoji 9|2 count 13|3 viewer_has_reacted 8"
        ];
    }
}
class qa extends Oi {
    constructor(e){
        super(), this.emoji = "", this.viewerIsReactor = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qa).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qa).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qa).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qa, e, t);
    }
    static $() {
        return [
            "CommentReaction|1 emoji 9|6 viewer_is_reactor 8|7 reactor #0",
            qi
        ];
    }
}
class Da extends Oi {
    constructor(e){
        super(), this.verdict = Li.UNSPECIFIED, this.body = "", this.versionNumber = n.protoInt64.zero, this.requireLatestVersion = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Da).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Da).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Da).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Da, e, t);
    }
    static $() {
        return [
            "CreateReviewRequest|1 change #0|2 verdict #1|3 body 9|4 version_number 4|5 require_latest_version 8",
            na,
            Li
        ];
    }
}
class Oa extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Oa).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Oa).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Oa).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Oa, e, t);
    }
    static $() {
        return [
            "CreateReviewResponse|1 review #0",
            Ta
        ];
    }
}
class Na extends Oi {
    constructor(e){
        super(), this.reviewId = "", this.body = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Na).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Na).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Na).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Na, e, t);
    }
    static $() {
        return [
            "UpdateReviewRequest|1 change #0|2 review_id 9|3 body 9",
            na
        ];
    }
}
class Fa extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Fa).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Fa).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Fa).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Fa, e, t);
    }
    static $() {
        return [
            "UpdateReviewResponse|1 review #0",
            Ta
        ];
    }
}
class Ua extends Oi {
    constructor(e){
        super(), this.reviewId = "", this.reason = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ua).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ua).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ua).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ua, e, t);
    }
    static $() {
        return [
            "DismissReviewRequest|1 change #0|2 review_id 9|3 reason 9",
            na
        ];
    }
}
class La extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new La).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new La).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new La).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(La, e, t);
    }
    static $() {
        return [
            "DismissReviewResponse|1 review #0",
            Ta
        ];
    }
}
class $a extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $a).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $a).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $a).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($a, e, t);
    }
    static $() {
        return [
            "ListReviewsRequest|1 change #0",
            na
        ];
    }
}
class Qa extends Oi {
    constructor(e){
        super(), this.reviews = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Qa).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Qa).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Qa).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Qa, e, t);
    }
    static $() {
        return [
            "ListReviewsResponse|1 reviews #0*",
            Ta
        ];
    }
}
class ja extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ja).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ja).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ja).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ja, e, t);
    }
    static $() {
        return [
            "ListChangeTimelineEventsRequest|1 change #0",
            na
        ];
    }
}
class Ga extends Oi {
    constructor(e){
        super(), this.events = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ga).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ga).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ga).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ga, e, t);
    }
    static $() {
        return [
            "ListChangeTimelineEventsResponse|1 events #0*",
            Ra
        ];
    }
}
class Ha extends Oi {
    constructor(e){
        super(), this.body = "", this.versionNumber = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ha).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ha).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ha).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ha, e, t);
    }
    static $() {
        return [
            "CreateCommentRequest|1 change #0|2 body 9|3 version_number 4",
            na
        ];
    }
}
class za extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new za).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new za).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new za).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(za, e, t);
    }
    static $() {
        return [
            "CreateCommentResponse|1 comment #0",
            Ja
        ];
    }
}
class Wa extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Wa).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Wa).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Wa).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Wa, e, t);
    }
    static $() {
        return [
            "ListCommentsRequest|1 change #0",
            na
        ];
    }
}
class Va extends Oi {
    constructor(e){
        super(), this.comments = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Va).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Va).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Va).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Va, e, t);
    }
    static $() {
        return [
            "ListCommentsResponse|1 comments #0*",
            Ja
        ];
    }
}
class Ka extends Oi {
    constructor(e){
        super(), this.id = "", this.changeId = "", this.kind = $i.UNSPECIFIED, this.assignedGroupId = "", this.createdVia = Qi.UNSPECIFIED, this.cursorUserId = n.protoInt64.zero, this.cursorGroupId = n.protoInt64.zero, this.assignedServiceAccountId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ka).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ka).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ka).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ka, e, t);
    }
    static $() {
        return [
            "ChangeAssignment|1 id 9|2 change_id 9|3 kind #0|5 assigned_group_id 9|6 created_via #1|8 created_at #2|9 updated_at #2|10 cursor_user_id 3|11 cursor_group_id 3|12 assigned_user #3|13 assigned_group #4|14 created_by #5|15 assigned_service_account #6|16 assigned_service_account_id 9",
            $i,
            Qi,
            n.Timestamp,
            mc,
            hc,
            qi,
            gc
        ];
    }
}
class Ya extends Oi {
    constructor(e){
        super(), this.id = "", this.changeId = "", this.kind = $i.UNSPECIFIED, this.action = ji.UNSPECIFIED, this.assignedUserId = "", this.assignedGroupId = "", this.createdVia = Qi.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ya).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ya).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ya).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ya, e, t);
    }
    static $() {
        return [
            "ReviewRequestEvent|1 id 9|2 change_id 9|3 kind #0|4 action #1|13 assigned_user_id 9|6 assigned_group_id 9|7 created_via #2|9 created_at #3|10 actor #4|11 assigned_user #5|12 assigned_group #6",
            $i,
            ji,
            Qi,
            n.Timestamp,
            qi,
            mc,
            hc
        ];
    }
}
class Za extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Za).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Za).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Za).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Za, e, t);
    }
    static $() {
        return [
            "ListReviewRequestEventsRequest|1 change #0",
            na
        ];
    }
}
class Xa extends Oi {
    constructor(e){
        super(), this.events = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Xa).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Xa).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Xa).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Xa, e, t);
    }
    static $() {
        return [
            "ListReviewRequestEventsResponse|1 events #0*",
            Ya
        ];
    }
}
class ec extends Oi {
    constructor(e){
        super(), this.target = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ec).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ec).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ec).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ec, e, t);
    }
    static $() {
        return [
            "RequestReviewRequest|1 change #0|3 group_id 9 target|4 cursor_user_id 3 target|5 cursor_group_id 3 target|6 user_id 9 target|7 service_account_id 9 target",
            na
        ];
    }
}
class tc extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new tc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new tc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new tc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(tc, e, t);
    }
    static $() {
        return [
            "RequestReviewResponse|1 assignment #0",
            Ka
        ];
    }
}
class rc extends Oi {
    constructor(e){
        super(), this.target = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new rc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new rc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new rc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(rc, e, t);
    }
    static $() {
        return [
            "ReviewRequestTarget|2 group_id 9 target|3 cursor_user_id 3 target|4 cursor_group_id 3 target|5 user_id 9 target|6 service_account_id 9 target"
        ];
    }
}
class nc extends Oi {
    constructor(e){
        super(), this.additions = [], this.removals = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new nc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new nc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new nc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(nc, e, t);
    }
    static $() {
        return [
            "ApplyReviewRequestChangesRequest|1 change #0|2 additions #1*|3 removals #1*",
            na,
            rc
        ];
    }
}
class sc extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new sc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new sc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new sc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(sc, e, t);
    }
    static $() {
        return [
            "ApplyReviewRequestChangesResponse"
        ];
    }
}
class oc extends Oi {
    constructor(e){
        super(), this.targets = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new oc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new oc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new oc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(oc, e, t);
    }
    static $() {
        return [
            "RequestReviewsRequest|1 change #0|2 targets #1*",
            na,
            rc
        ];
    }
}
class ic extends Oi {
    constructor(e){
        super(), this.assignments = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ic).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ic).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ic).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ic, e, t);
    }
    static $() {
        return [
            "RequestReviewsResponse|1 assignments #0*",
            Ka
        ];
    }
}
class ac extends Oi {
    constructor(e){
        super(), this.target = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ac).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ac).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ac).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ac, e, t);
    }
    static $() {
        return [
            "CloseReviewRequestRequest|1 change #0|3 group_id 9 target|4 cursor_user_id 3 target|5 cursor_group_id 3 target|6 user_id 9 target|7 service_account_id 9 target",
            na
        ];
    }
}
class cc extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new cc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new cc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new cc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(cc, e, t);
    }
    static $() {
        return [
            "CloseReviewRequestResponse"
        ];
    }
}
class lc extends Oi {
    constructor(e){
        super(), this.target = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new lc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new lc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new lc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(lc, e, t);
    }
    static $() {
        return [
            "AddAssigneeRequest|1 change #0|3 group_id 9 target|4 cursor_user_id 3 target|5 cursor_group_id 3 target|6 user_id 9 target",
            na
        ];
    }
}
class uc extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new uc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new uc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new uc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(uc, e, t);
    }
    static $() {
        return [
            "AddAssigneeResponse|1 assignment #0",
            Ka
        ];
    }
}
class dc extends Oi {
    constructor(e){
        super(), this.target = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new dc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new dc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new dc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(dc, e, t);
    }
    static $() {
        return [
            "RemoveAssigneeRequest|1 change #0|3 group_id 9 target|4 cursor_user_id 3 target|5 cursor_group_id 3 target|6 user_id 9 target",
            na
        ];
    }
}
class pc extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pc, e, t);
    }
    static $() {
        return [
            "RemoveAssigneeResponse"
        ];
    }
}
class mc extends Oi {
    constructor(e){
        super(), this.firstName = "", this.lastName = "", this.email = "", this.avatarUrl = "", this.cursorUserId = n.protoInt64.zero, this.userId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new mc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new mc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new mc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(mc, e, t);
    }
    static $() {
        return [
            "OriginReviewerCandidateUser|3 first_name 9|4 last_name 9|5 email 9|6 avatar_url 9|7 cursor_user_id 3|8 user_id 9"
        ];
    }
}
class hc extends Oi {
    constructor(e){
        super(), this.groupPublicId = "", this.organizationSlug = "", this.groupSlug = "", this.name = "", this.cursorGroupId = n.protoInt64.zero, this.memberUserIds = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new hc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new hc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new hc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(hc, e, t);
    }
    static $() {
        return [
            "OriginReviewerCandidateGroup|1 group_public_id 9|2 organization_slug 9|3 group_slug 9|4 name 9|6 cursor_group_id 3|7 member_user_ids 9*"
        ];
    }
}
class fc extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fc, e, t);
    }
    static $() {
        return [
            "ListOriginRepoReviewerCandidatesRequest|1 repo #0",
            i
        ];
    }
}
class gc extends Oi {
    constructor(e){
        super(), this.serviceAccountId = "", this.displayName = "", this.avatarUrl = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new gc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new gc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new gc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(gc, e, t);
    }
    static $() {
        return [
            "OriginReviewerCandidateServiceAccount|1 service_account_id 9|2 display_name 9|3 avatar_url 9"
        ];
    }
}
class yc extends Oi {
    constructor(e){
        super(), this.users = [], this.groups = [], this.serviceAccounts = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new yc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new yc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new yc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(yc, e, t);
    }
    static $() {
        return [
            "ListOriginRepoReviewerCandidatesResponse|1 users #0*|2 groups #1*|3 service_accounts #2*",
            mc,
            hc,
            gc
        ];
    }
}
class wc extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new wc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new wc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new wc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(wc, e, t);
    }
    static $() {
        return [
            "GetChangeRequest|1 change #0|2 include_head_ref_exists 8?|3 include_merge_when_ready 8?|4 include_commits_behind_base 8?|5 include_viewer_capabilities 8?|6 include_merge_queue 8?",
            na
        ];
    }
}
class vc extends Oi {
    constructor(e){
        super(), this.id = "", this.name = "", this.color = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new vc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new vc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new vc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(vc, e, t);
    }
    static $() {
        return [
            "ChangeLabel|1 id 9|2 name 9|3 color 9|4 description 9?"
        ];
    }
}
class _c extends Oi {
    constructor(e){
        super(), this.id = "", this.changeId = "", this.repoUuid = "", this.changeNumber = n.protoInt64.zero, this.status = "", this.source = "", this.trunkBranch = "", this.consecutiveFailedAttempts = 0, this.dev = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _c).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _c).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _c).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_c, e, t);
    }
    static $() {
        return [
            "ChangeMergeWhenReadySummary|1 id 9|2 change_id 9|3 repo_uuid 9|4 change_number 4|6 status 9|7 source 9|8 trunk_branch 9|9 lock_expires_at #0?|10 consecutive_failed_attempts 5|11 dev 8|12 repo_org 9?|13 repo_name 9?|14 enabled_by #1",
            n.Timestamp,
            qi
        ];
    }
}
class Ac extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ac).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ac).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ac).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ac, e, t);
    }
    static $() {
        return [
            "ChangeViewerCapabilities|1 can_write_pull_requests 8?|2 can_write_contents 8?|3 can_write_reviews 8?|4 can_merge 8?|5 can_enable_merge_when_ready 8?|6 can_disable_merge_when_ready 8?"
        ];
    }
}
class Sc extends Oi {
    constructor(e){
        super(), this.headSha = "", this.targetRef = "", this.status = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Sc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Sc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Sc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Sc, e, t);
    }
    static $() {
        return [
            "ChangeMergeQueueSummary|1 head_sha 9|2 target_ref 9|3 status 9|4 ahead 13?|5 validation_sha 9?|6 eviction_reason 9?"
        ];
    }
}
class bc extends Oi {
    constructor(e){
        super(), this.versions = [], this.assignments = [], this.labels = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new bc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new bc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new bc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(bc, e, t);
    }
    static $() {
        return [
            "GetChangeResponse|1 change #0|2 versions #1*|3 assignments #2*|4 labels #3*|5 viewer_last_viewed_at #4?|6 viewer_timeline_viewed_at #4?|7 head_ref_exists 8?|8 merge_when_ready #5?|9 commits_behind_base 5?|12 commits_behind_base_as_of_version 4?|10 viewer_capabilities #6?|11 viewer_is_author 8?|13 merge_queue #7?|14 merge_queue_owns_landing 8?|15 head_ref_locked 8?",
            Zi,
            Xi,
            Ka,
            vc,
            n.Timestamp,
            _c,
            Ac,
            Sc
        ];
    }
}
class Ec extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ec).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ec).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ec).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ec, e, t);
    }
    static $() {
        return [
            "GetChangeCodeownersApplicationRequest|1 change #0|2 version_number 4?",
            na
        ];
    }
}
class Ic extends Oi {
    constructor(e){
        super(), this.checkedPaths = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ic).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ic).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ic).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ic, e, t);
    }
    static $() {
        return [
            "ChangeCodeownersSnapshotMissing|1 checked_paths 9*"
        ];
    }
}
class Cc extends Oi {
    constructor(e){
        super(), this.path = "", this.sizeBytes = n.protoInt64.zero, this.maxSizeBytes = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Cc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Cc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Cc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Cc, e, t);
    }
    static $() {
        return [
            "ChangeCodeownersSnapshotTooLarge|1 path 9|2 size_bytes 4|3 max_size_bytes 4"
        ];
    }
}
class kc extends Oi {
    constructor(e){
        super(), this.path = "", this.sizeBytes = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new kc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new kc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new kc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(kc, e, t);
    }
    static $() {
        return [
            "ChangeCodeownersSnapshotFound|1 path 9|2 size_bytes 4"
        ];
    }
}
class xc extends Oi {
    constructor(e){
        super(), this.baseSha = "", this.status = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xc, e, t);
    }
    static $() {
        return [
            "ChangeCodeownersSnapshot|1 base_sha 9|2 missing #0 status|3 too_large #1 status|4 found #2 status",
            Ic,
            Cc,
            kc
        ];
    }
}
class Tc extends Oi {
    constructor(e){
        super(), this.path = "", this.reason = Gi.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Tc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Tc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Tc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Tc, e, t);
    }
    static $() {
        return [
            "ChangeCodeownersMatchPath|1 path 9|2 reason #0",
            Gi
        ];
    }
}
class Rc extends Oi {
    constructor(e){
        super(), this.label = "", this.identity = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Rc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Rc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Rc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Rc, e, t);
    }
    static $() {
        return [
            "ChangeCodeowner|1 label 9|2 user #0 identity|3 group #1 identity",
            Bc,
            Pc
        ];
    }
}
class Bc extends Oi {
    constructor(e){
        super(), this.login = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Bc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Bc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Bc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Bc, e, t);
    }
    static $() {
        return [
            "ChangeCodeowner.User|1 login 9"
        ];
    }
}
class Pc extends Oi {
    constructor(e){
        super(), this.organizationSlug = "", this.groupSlug = "", this.groupPublicId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Pc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Pc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Pc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Pc, e, t);
    }
    static $() {
        return [
            "ChangeCodeowner.Group|1 organization_slug 9|2 group_slug 9|3 group_public_id 9"
        ];
    }
}
class Jc extends Oi {
    constructor(e){
        super(), this.owners = [], this.requirementGroupId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Jc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Jc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Jc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Jc, e, t);
    }
    static $() {
        return [
            "ChangeCodeownersResolvedOwnerRule|1 match_path #0|2 owners #1*|3 requirement_group_id 9",
            Tc,
            Rc
        ];
    }
}
class Mc extends Oi {
    constructor(e){
        super(), this.changeKind = Vn.UNSPECIFIED, this.canonicalPath = "", this.matchPaths = [], this.resolvedOwnerRules = [], this.agenticOwners = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Mc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Mc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Mc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Mc, e, t);
    }
    static $() {
        return [
            "ChangeCodeownersChangedPath|1 change_kind #0|2 canonical_path 9|3 old_path 9?|4 match_paths #1*|5 resolved_owner_rules #2*|6 agentic_owners #3*",
            Vn,
            Tc,
            Jc,
            Rc
        ];
    }
}
class qc extends Oi {
    constructor(e){
        super(), this.canonicalPath = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qc, e, t);
    }
    static $() {
        return [
            "ChangeCodeownersRequirementPath|1 canonical_path 9|2 match_path #0",
            Tc
        ];
    }
}
class Dc extends Oi {
    constructor(e){
        super(), this.id = "", this.owners = [], this.paths = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Dc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Dc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Dc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Dc, e, t);
    }
    static $() {
        return [
            "ChangeCodeownersRequirementGroup|1 id 9|2 owners #0*|3 paths #1*",
            Rc,
            qc
        ];
    }
}
class Oc extends Oi {
    constructor(e){
        super(), this.changedPaths = [], this.requirementGroups = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Oc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Oc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Oc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Oc, e, t);
    }
    static $() {
        return [
            "GetChangeCodeownersApplicationResponse|1 snapshot #0|2 changed_paths #1*|3 requirement_groups #2*|4 undeterminable #3",
            xc,
            Mc,
            Dc,
            Nc
        ];
    }
}
class Nc extends Oi {
    constructor(e){
        super(), this.detail = "", this.remediation = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Nc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Nc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Nc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Nc, e, t);
    }
    static $() {
        return [
            "ChangeCodeownersUndeterminable|1 detail 9|2 remediation 9"
        ];
    }
}
class Fc extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Fc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Fc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Fc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Fc, e, t);
    }
    static $() {
        return [
            "GetChangeStackRequest|1 change #0",
            na
        ];
    }
}
class Uc extends Oi {
    constructor(e){
        super(), this.changeId = "", this.headSha = "", this.recordedBaseSha = "", this.rootBaseRef = "", this.parentRelation = Hi.UNSPECIFIED, this.recommendedAction = zi.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Uc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Uc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Uc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Uc, e, t);
    }
    static $() {
        return [
            "StackMemberState|1 change_id 9|2 head_sha 9|3 recorded_base_sha 9|4 root_base_ref 9|5 parent_head_sha 9?|6 parent_relation #0|7 recommended_action #1",
            Hi,
            zi
        ];
    }
}
class Lc extends Oi {
    constructor(e){
        super(), this.changes = [], this.convergenceConflictedPaths = [], this.memberStates = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Lc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Lc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Lc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Lc, e, t);
    }
    static $() {
        return [
            "GetChangeStackResponse|1 changes #0*|6 stack_id 9?|2 convergence_state 9?|3 convergence_conflicted_change_number 4?|4 convergence_conflicted_paths 9*|5 convergence_blocked_reason 9?|7 member_states #1*",
            Zi,
            Uc
        ];
    }
}
class $c extends Oi {
    constructor(e){
        super(), this.changeNumbers = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $c).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $c).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $c).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($c, e, t);
    }
    static $() {
        return [
            "GetProjectedLatestVersionsRequest|1 identifier #0|2 change_numbers 4*",
            i
        ];
    }
}
class Qc extends Oi {
    constructor(e){
        super(), this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Qc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Qc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Qc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Qc, e, t);
    }
    static $() {
        return [
            "ProjectedLatestVersionEntry|1 change_number 4|2 projected_latest_version #0",
            Xi
        ];
    }
}
class jc extends Oi {
    constructor(e){
        super(), this.entries = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new jc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new jc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new jc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(jc, e, t);
    }
    static $() {
        return [
            "GetProjectedLatestVersionsResponse|1 entries #0*",
            Qc
        ];
    }
}
class Gc extends Oi {
    constructor(e){
        super(), this.versionNumber = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Gc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Gc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Gc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Gc, e, t);
    }
    static $() {
        return [
            "ListChangeCommitsRequest|1 change #0|2 version_number 4|3 max_commits 13?",
            na
        ];
    }
}
class Hc extends Oi {
    constructor(e){
        super(), this.commits = [], this.mergeBaseSha = "", this.truncated = !1, this.actorDisplaysBySha = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Hc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Hc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Hc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Hc, e, t);
    }
    static $() {
        return [
            "ListChangeCommitsResponse|1 commits #0*|2 merge_base_sha 9|3 truncated 8|4 actor_displays_by_sha 9,#1",
            fs,
            zc
        ];
    }
}
class zc extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new zc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new zc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new zc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(zc, e, t);
    }
    static $() {
        return [
            "CommitActorDisplays|1 author #0|2 committer #0",
            Wc
        ];
    }
}
class Wc extends Oi {
    constructor(e){
        super(), this.displayName = "", this.avatarUrl = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Wc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Wc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Wc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Wc, e, t);
    }
    static $() {
        return [
            "CommitActorDisplay|1 display_name 9|2 avatar_url 9"
        ];
    }
}
class Vc extends Oi {
    constructor(e){
        super(), this.file = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Vc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Vc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Vc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Vc, e, t);
    }
    static $() {
        return [
            "ListChangesRequest|1 identifier #0|2 status 9?|3 cursor 4?|4 limit 5?|5 author_id 9?|6 base_ref 9?|7 head_ref 9?|8 file 9*",
            i
        ];
    }
}
class Kc extends Oi {
    constructor(e){
        super(), this.headRef = "", this.includeInactive = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Kc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Kc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Kc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Kc, e, t);
    }
    static $() {
        return [
            "ListChangesByHeadRefRequest|1 identifier #0|2 head_ref 9|3 include_inactive 8",
            i
        ];
    }
}
class Yc extends Oi {
    constructor(e){
        super(), this.changes = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Yc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Yc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Yc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Yc, e, t);
    }
    static $() {
        return [
            "ListChangesByHeadRefResponse|1 changes #0*",
            Zi
        ];
    }
}
class Zc extends Oi {
    constructor(e){
        super(), this.sha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Zc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Zc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Zc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Zc, e, t);
    }
    static $() {
        return [
            "GetCommitReferencesRequest|1 identifier #0|2 sha 9",
            i
        ];
    }
}
class Xc extends Oi {
    constructor(e){
        super(), this.branchName = "", this.pullRequestNumber = n.protoInt64.zero, this.status = Ni.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Xc).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Xc).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Xc).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Xc, e, t);
    }
    static $() {
        return [
            "CommitReference|1 branch_name 9|2 pull_request_number 3|3 status #0",
            Ni
        ];
    }
}
class el extends Oi {
    constructor(e){
        super(), this.references = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new el).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new el).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new el).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(el, e, t);
    }
    static $() {
        return [
            "GetCommitReferencesResponse|1 references #0*",
            Xc
        ];
    }
}
class tl extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new tl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new tl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new tl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(tl, e, t);
    }
    static $() {
        return [
            "ChangeWithLatestVersion|1 change #0|2 latest_version #1?",
            Zi,
            Xi
        ];
    }
}
class rl extends Oi {
    constructor(e){
        super(), this.changeNumbers = [], this.headRefs = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new rl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new rl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new rl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(rl, e, t);
    }
    static $() {
        return [
            "BatchGetChangesRequest|1 identifier #0|2 change_numbers 4*|3 head_refs 9*",
            i
        ];
    }
}
class nl extends Oi {
    constructor(e){
        super(), this.changes = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new nl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new nl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new nl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(nl, e, t);
    }
    static $() {
        return [
            "BatchGetChangesResponse|1 changes #0*",
            tl
        ];
    }
}
class sl extends Oi {
    constructor(e){
        super(), this.changes = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new sl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new sl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new sl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(sl, e, t);
    }
    static $() {
        return [
            "ListChangesResponse|1 changes #0*|2 next_cursor 4?",
            tl
        ];
    }
}
class ol extends Oi {
    constructor(e){
        super(), this.repos = [], this.limit = 0, this.sortField = Wi.UNSPECIFIED, this.sortIsAsc = !1, this.skipTotalCount = !1, this.changeIds = [], this.dropUnauthorizedRepos = !1, this.viewerScoped = !1, this.includeStackMembers = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ol).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ol).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ol).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ol, e, t);
    }
    static $() {
        return [
            "GetSectionOfChangesRequest|1 repos #0*|2 filter #1|3 cursor 9?|4 limit 5|5 sort_field #2|6 sort_is_asc 8|7 skip_total_count 8|8 change_ids 9*|10 drop_unauthorized_repos 8|9 viewer_scoped 8|11 include_stack_members 8",
            i,
            yl,
            Wi
        ];
    }
}
class il extends Oi {
    constructor(e){
        super(), this.changes = [], this.hasMore = !1, this.totalCount = 0, this.droppedRepoCount = 0, this.stackMembers = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new il).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new il).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new il).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(il, e, t);
    }
    static $() {
        return [
            "GetSectionOfChangesResponse|1 changes #0*|2 has_more 8|3 total_count 5|4 dropped_repo_count 5|5 stack_members #1*",
            fl,
            al
        ];
    }
}
class al extends Oi {
    constructor(e){
        super(), this.id = "", this.number = 0, this.stackId = "", this.baseRef = "", this.status = Ni.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new al).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new al).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new al).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(al, e, t);
    }
    static $() {
        return [
            "SectionOfChangesStackMember|1 id 9|2 number 5|3 stack_id 9|4 parent_change_id 9?|5 base_ref 9|6 status #0",
            Ni
        ];
    }
}
class cl extends Oi {
    constructor(e){
        super(), this.query = "", this.limit = 0, this.includeLabels = !1, this.includeAssignees = !1, this.includeReviewRequests = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new cl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new cl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new cl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(cl, e, t);
    }
    static $() {
        return [
            "SearchChangesRequest|1 identifier #0?|2 query 9|3 cursor 9?|4 limit 5|5 include_labels 8|6 include_assignees 8|7 include_review_requests 8",
            i
        ];
    }
}
class ll extends Oi {
    constructor(e){
        super(), this.changes = [], this.hasMore = !1, this.totalCount = 0, this.totalCountIsLowerBound = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ll).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ll).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ll).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ll, e, t);
    }
    static $() {
        return [
            "SearchChangesResponse|1 changes #0*|2 has_more 8|3 next_cursor 9?|4 total_count 5|5 total_count_is_lower_bound 8",
            fl
        ];
    }
}
class ul extends Oi {
    constructor(e){
        super(), this.repos = [], this.filters = [], this.dropUnauthorizedRepos = !1, this.viewerScoped = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ul).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ul).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ul).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ul, e, t);
    }
    static $() {
        return [
            "CountSectionsOfChangesRequest|1 repos #0*|2 filters #1*|3 drop_unauthorized_repos 8|4 viewer_scoped 8",
            i,
            yl
        ];
    }
}
class dl extends Oi {
    constructor(e){
        super(), this.counts = [], this.droppedRepoCount = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new dl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new dl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new dl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(dl, e, t);
    }
    static $() {
        return [
            "CountSectionsOfChangesResponse|1 counts 5*|2 dropped_repo_count 5"
        ];
    }
}
class pl extends Oi {
    constructor(e){
        super(), this.cursorUserIds = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pl, e, t);
    }
    static $() {
        return [
            "ResolveSectionPersonalBotAuthorsRequest|1 cursor_user_ids 3*"
        ];
    }
}
class ml extends Oi {
    constructor(e){
        super(), this.countsAsOwner = !1, this.authors = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ml).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ml).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ml).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ml, e, t);
    }
    static $() {
        return [
            "ResolveSectionPersonalBotAuthorsResponse|1 counts_as_owner 8|2 authors #0*",
            hl
        ];
    }
}
class hl extends Oi {
    constructor(e){
        super(), this.cursorUserId = n.protoInt64.zero, this.serviceAccountIds = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new hl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new hl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new hl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(hl, e, t);
    }
    static $() {
        return [
            "SectionPersonalBotAuthor|1 cursor_user_id 3|2 service_account_ids 9*"
        ];
    }
}
class fl extends Oi {
    constructor(e){
        super(), this.id = "", this.number = 0, this.repoId = "", this.title = "", this.description = "", this.headRef = "", this.baseRef = "", this.status = Vi.UNSPECIFIED, this.headSha = "", this.baseSha = "", this.additions = 0, this.deletions = 0, this.changedFiles = 0, this.versionCount = 0, this.reviewers = [], this.totalThreadCount = 0, this.unresolvedThreadCount = 0, this.repoNamespace = "", this.repoName = "", this.labels = [], this.assignees = [], this.reviewRequests = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fl, e, t);
    }
    static $() {
        return [
            "SectionOfChanges|1 id 9|2 number 5|3 repo_id 9|4 title 9|5 description 9|6 head_ref 9|7 base_ref 9|9 status #0|10 created_at #1|11 updated_at #1|12 merged_at #1?|13 closed_at #1?|14 head_sha 9|15 base_sha 9|16 additions 5|17 deletions 5|18 changed_files 5|19 version_count 5|20 review_decision 9?|21 reviewers #2*|22 total_thread_count 5|23 unresolved_thread_count 5|24 parent_change_id 9?|25 stack_id 9?|26 repo_namespace 9|27 repo_name 9|31 author #3|32 viewer_last_viewed_at #1?|33 discussion_comment_count 5?|34 agent_wrote 8?|35 labels #4*|36 assignees #5*|37 review_requests #5*",
            Vi,
            n.Timestamp,
            gl,
            qi,
            vc,
            Ka
        ];
    }
}
class gl extends Oi {
    constructor(e){
        super(), this.verdict = Ki.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new gl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new gl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new gl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(gl, e, t);
    }
    static $() {
        return [
            "SectionOfChangesReviewer|2 verdict #0|3 reviewed_at #1|7 author #2",
            Ki,
            n.Timestamp,
            qi
        ];
    }
}
class yl extends Oi {
    constructor(e){
        super(), this.kind = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new yl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new yl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new yl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(yl, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilter|1 and #0 kind|2 or #1 kind|3 not #2 kind|4 consolidated_status #3 kind|5 title_contains #4 kind|6 description_contains #5 kind|7 merge_base #6 kind|8 trunk #7 kind|9 last_updated #8 kind|10 open_review_request_for #9 kind|11 reopened_review_request_for #10 kind|12 closed_review_request_from #11 kind|13 includes_direct_reviewer #12 kind|14 author_is #13 kind|15 review_status #14 kind|16 approved_by #15 kind|17 includes_past_reviewer #16 kind|18 has_label #17 kind|19 num_files_changed #18 kind|20 num_lines_changed #19 kind|21 includes_reviewer #20 kind|22 includes_assignee #21 kind|23 includes_direct_team_reviewer #22 kind|24 mentions #23 kind|25 merged_within #24 kind|100 unsupported #25 kind",
            wl,
            vl,
            _l,
            Al,
            Sl,
            bl,
            El,
            Il,
            Cl,
            kl,
            xl,
            Tl,
            Rl,
            Bl,
            Pl,
            Jl,
            Ml,
            ql,
            Dl,
            Ol,
            Nl,
            Ul,
            Ll,
            $l,
            Ql,
            jl
        ];
    }
}
class wl extends Oi {
    constructor(e){
        super(), this.exprs = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new wl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new wl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new wl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(wl, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterAnd|1 exprs #0*",
            yl
        ];
    }
}
class vl extends Oi {
    constructor(e){
        super(), this.exprs = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new vl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new vl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new vl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(vl, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterOr|1 exprs #0*",
            yl
        ];
    }
}
class _l extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _l).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _l).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _l).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_l, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterNot|1 expr #0",
            yl
        ];
    }
}
class Al extends Oi {
    constructor(e){
        super(), this.status = Vi.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Al).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Al).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Al).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Al, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterConsolidatedStatus|1 status #0",
            Vi
        ];
    }
}
class Sl extends Oi {
    constructor(e){
        super(), this.text = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Sl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Sl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Sl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Sl, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterTitleContains|1 text 9"
        ];
    }
}
class bl extends Oi {
    constructor(e){
        super(), this.text = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new bl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new bl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new bl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(bl, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterDescriptionContains|1 text 9"
        ];
    }
}
class El extends Oi {
    constructor(e){
        super(), this.mergeBase = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new El).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new El).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new El).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(El, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterMergeBase|1 merge_base 9"
        ];
    }
}
class Il extends Oi {
    constructor(e){
        super(), this.trunk = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Il).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Il).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Il).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Il, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterTrunk|1 trunk 9"
        ];
    }
}
class Cl extends Oi {
    constructor(e){
        super(), this.hours = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Cl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Cl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Cl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Cl, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterLastUpdated|1 hours 5"
        ];
    }
}
class kl extends Oi {
    constructor(e){
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new kl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new kl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new kl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(kl, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterOpenReviewRequestFor|2 cursor_user_id 3"
        ];
    }
}
class xl extends Oi {
    constructor(e){
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xl, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterReopenedReviewRequestFor|2 cursor_user_id 3"
        ];
    }
}
class Tl extends Oi {
    constructor(e){
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Tl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Tl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Tl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Tl, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterClosedReviewRequestFrom|2 cursor_user_id 3"
        ];
    }
}
class Rl extends Oi {
    constructor(e){
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Rl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Rl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Rl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Rl, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterIncludesDirectReviewer|2 cursor_user_id 3"
        ];
    }
}
class Bl extends Oi {
    constructor(e){
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Bl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Bl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Bl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Bl, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterAuthorIs|2 cursor_user_id 3"
        ];
    }
}
class Pl extends Oi {
    constructor(e){
        super(), this.state = Yi.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Pl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Pl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Pl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Pl, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterReviewStatus|1 state #0",
            Yi
        ];
    }
}
class Jl extends Oi {
    constructor(e){
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Jl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Jl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Jl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Jl, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterApprovedBy|2 cursor_user_id 3"
        ];
    }
}
class Ml extends Oi {
    constructor(e){
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ml).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ml).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ml).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ml, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterIncludesPastReviewer|2 cursor_user_id 3"
        ];
    }
}
class ql extends Oi {
    constructor(e){
        super(), this.name = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ql).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ql).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ql).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ql, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterHasLabel|1 name 9"
        ];
    }
}
class Dl extends Oi {
    constructor(e){
        super(), this.numFiles = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Dl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Dl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Dl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Dl, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterNumFilesChanged|1 num_files 5"
        ];
    }
}
class Ol extends Oi {
    constructor(e){
        super(), this.numLines = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ol).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ol).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ol).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ol, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterNumLinesChanged|1 num_lines 5"
        ];
    }
}
class Nl extends Oi {
    constructor(e){
        super(), this.groupPublicIds = [], this.cursorUserId = n.protoInt64.zero, this.groupMembers = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Nl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Nl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Nl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Nl, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterIncludesReviewer|2 group_public_ids 9*|3 cursor_user_id 3|4 group_members #0*",
            Fl
        ];
    }
}
class Fl extends Oi {
    constructor(e){
        super(), this.groupPublicId = "", this.cursorUserIds = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Fl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Fl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Fl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Fl, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterReviewerGroupMembers|1 group_public_id 9|2 cursor_user_ids 3*"
        ];
    }
}
class Ul extends Oi {
    constructor(e){
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ul).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ul).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ul).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ul, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterIncludesAssignee|2 cursor_user_id 3"
        ];
    }
}
class Ll extends Oi {
    constructor(e){
        super(), this.slug = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ll).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ll).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ll).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ll, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterIncludesDirectTeamReviewer|1 slug 9"
        ];
    }
}
class $l extends Oi {
    constructor(e){
        super(), this.username = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $l).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $l).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $l).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($l, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterMentions|1 username 9"
        ];
    }
}
class Ql extends Oi {
    constructor(e){
        super(), this.hours = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ql).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ql).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ql).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ql, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterMergedWithin|1 hours 5"
        ];
    }
}
class jl extends Oi {
    constructor(e){
        super(), this.kind = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new jl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new jl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new jl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(jl, e, t);
    }
    static $() {
        return [
            "SectionOfChangesFilterUnsupported|1 kind 9"
        ];
    }
}
class Gl extends Oi {
    constructor(e){
        super(), this.verdict = Li.UNSPECIFIED, this.body = "", this.versionNumber = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Gl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Gl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Gl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Gl, e, t);
    }
    static $() {
        return [
            "StartReviewRequest|1 change #0|2 verdict #1|3 body 9|4 version_number 4",
            na,
            Li
        ];
    }
}
class Hl extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Hl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Hl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Hl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Hl, e, t);
    }
    static $() {
        return [
            "StartReviewResponse|1 review #0",
            Ta
        ];
    }
}
class zl extends Oi {
    constructor(e){
        super(), this.reviewId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new zl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new zl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new zl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(zl, e, t);
    }
    static $() {
        return [
            "SubmitReviewRequest|1 change #0|2 review_id 9|3 verdict #1?|4 body 9?",
            na,
            Li
        ];
    }
}
class Wl extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Wl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Wl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Wl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Wl, e, t);
    }
    static $() {
        return [
            "SubmitReviewResponse|1 review #0",
            Ta
        ];
    }
}
class Vl extends Oi {
    constructor(e){
        super(), this.reviewId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Vl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Vl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Vl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Vl, e, t);
    }
    static $() {
        return [
            "DiscardPendingReviewRequest|1 change #0|2 review_id 9",
            na
        ];
    }
}
class Kl extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Kl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Kl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Kl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Kl, e, t);
    }
    static $() {
        return [
            "DiscardPendingReviewResponse"
        ];
    }
}
class Yl extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Yl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Yl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Yl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Yl, e, t);
    }
    static $() {
        return [
            "GetPendingReviewRequest|1 change #0",
            na
        ];
    }
}
class Zl extends Oi {
    constructor(e){
        super(), this.threadCount = 0, this.hasPendingComments = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Zl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Zl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Zl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Zl, e, t);
    }
    static $() {
        return [
            "GetPendingReviewResponse|1 review #0?|2 thread_count 13|3 has_pending_comments 8",
            Ta
        ];
    }
}
class Xl extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Xl).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Xl).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Xl).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Xl, e, t);
    }
    static $() {
        return [
            "CheckChangeCreationAccessRequest|1 identifier #0",
            i
        ];
    }
}
class eu extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new eu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new eu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new eu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(eu, e, t);
    }
    static $() {
        return [
            "CheckChangeCreationAccessResponse"
        ];
    }
}
class tu extends Oi {
    constructor(e){
        super(), this.gate = "", this.headSha = "", this.verdict = "", this.summary = "", this.findings = [], this.gateFields = {}, this.links = [], this.rubricPath = "", this.lane = "", this.model = "", this.agent = "", this.transcriptUrl = "", this.transcriptId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new tu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new tu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new tu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(tu, e, t);
    }
    static $() {
        return [
            "SubmitPullRequestGateReportRequest|1 change #0|2 gate 9|3 head_sha 9|4 verdict 9|5 summary 9|6 findings #1*|7 gate_fields 9,9|8 links #2*|9 rubric_path 9|10 lane 9|11 model 9|12 agent 9|13 transcript_url 9|14 transcript_id 9",
            na,
            ou,
            iu
        ];
    }
}
class ru extends Oi {
    constructor(e){
        super(), this.headSha = "", this.mediaType = "", this.bodyGzip = new Uint8Array(0), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ru).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ru).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ru).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ru, e, t);
    }
    static $() {
        return [
            "UploadPullRequestGateTranscriptRequest|1 change #0|2 head_sha 9|3 media_type 9|4 body_gzip 12",
            na
        ];
    }
}
class nu extends Oi {
    constructor(e){
        super(), this.outcome = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new nu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new nu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new nu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(nu, e, t);
    }
    static $() {
        return [
            "UploadPullRequestGateTranscriptResponse|1 uploaded #0 outcome|2 refused #1 outcome",
            su,
            cu
        ];
    }
}
class su extends Oi {
    constructor(e){
        super(), this.id = "", this.sha256 = "", this.byteSize = n.protoInt64.zero, this.mediaType = "", this.purged = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new su).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new su).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new su).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(su, e, t);
    }
    static $() {
        return [
            "PullRequestGateTranscript|1 id 9|2 sha256 9|3 byte_size 4|4 media_type 9|5 purged 8"
        ];
    }
}
class ou extends Oi {
    constructor(e){
        super(), this.id = "", this.severity = "", this.status = "", this.title = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ou).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ou).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ou).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ou, e, t);
    }
    static $() {
        return [
            "PullRequestGateReportFinding|1 id 9|2 severity 9|3 status 9|4 title 9|5 path 9?|6 line 13?"
        ];
    }
}
class iu extends Oi {
    constructor(e){
        super(), this.label = "", this.url = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new iu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new iu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new iu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(iu, e, t);
    }
    static $() {
        return [
            "PullRequestGateReportLink|1 label 9|2 url 9"
        ];
    }
}
class au extends Oi {
    constructor(e){
        super(), this.outcome = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new au).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new au).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new au).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(au, e, t);
    }
    static $() {
        return [
            "SubmitPullRequestGateReportResponse|1 submitted #0 outcome|2 refused #1 outcome",
            lu,
            cu
        ];
    }
}
class cu extends Oi {
    constructor(e){
        super(), this.reason = "", this.message = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new cu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new cu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new cu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(cu, e, t);
    }
    static $() {
        return [
            "PullRequestGateReportRefusal|1 reason 9|2 message 9"
        ];
    }
}
class lu extends Oi {
    constructor(e){
        super(), this.id = "", this.gate = "", this.verdict = "", this.headSha = "", this.baseSha = "", this.client = "", this.summary = "", this.findings = [], this.proof = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new lu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new lu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new lu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(lu, e, t);
    }
    static $() {
        return [
            "PullRequestGateReport|1 id 9|2 gate 9|3 verdict 9|4 head_sha 9|5 base_sha 9|6 client 9|7 lane 9?|8 model 9?|9 agent 9?|10 run_id 9?|11 transcript_url 9?|12 summary 9|13 findings #0*|14 created_at #1|15 transcript #2?|16 proof 9|17 audit #3?",
            ou,
            n.Timestamp,
            su,
            uu
        ];
    }
}
class uu extends Oi {
    constructor(e){
        super(), this.status = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new uu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new uu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new uu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(uu, e, t);
    }
    static $() {
        return [
            "PullRequestGateReportAudit|1 status 9|2 reason 9?|3 completed_at #0?",
            n.Timestamp
        ];
    }
}
class du extends Oi {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new du).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new du).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new du).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(du, e, t);
    }
    static $() {
        return [
            "ListPullRequestGateReportsRequest|1 change #0|2 head_sha 9?",
            na
        ];
    }
}
class pu extends Oi {
    constructor(e){
        super(), this.headSha = "", this.requiredGates = [], this.reports = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pu, e, t);
    }
    static $() {
        return [
            "ListPullRequestGateReportsResponse|1 head_sha 9|2 required_gates 9*|3 gates_file_unavailable_reason 9?|4 reports #0*",
            lu
        ];
    }
}
const mu = "origin.v1.";
class hu extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return mu;
    }
}
var fu = (0, s.QT)(n.proto3, mu, "ImportedGithubPullRequestState", [
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
], 1), gu = (0, s.QT)(n.proto3, mu, "ImportedGithubReviewVerdict", [
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
], 1), yu = (0, s.QT)(n.proto3, mu, "ImportedGithubCommentSide", [
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
class wu extends hu {
    constructor(e){
        super(), this.allowDefaultActorFallback = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new wu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new wu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new wu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(wu, e, t);
    }
    static $() {
        return [
            "ImportGithubPullRequestRequest|1 identifier #0|2 pull_request #1|3 allow_default_actor_fallback 8",
            i,
            _u
        ];
    }
}
class vu extends hu {
    constructor(e){
        super(), this.changeId = "", this.number = 0, this.versionsCreated = 0, this.reviewsCreated = 0, this.threadsCreated = 0, this.commentsCreated = 0, this.timelineEventsCreated = 0, this.warnings = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new vu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new vu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new vu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(vu, e, t);
    }
    static $() {
        return [
            "ImportGithubPullRequestResponse|1 change_id 9|2 number 5|3 versions_created 5|4 reviews_created 5|5 threads_created 5|6 comments_created 5|7 timeline_events_created 5|8 warnings 9*"
        ];
    }
}
class _u extends hu {
    constructor(e){
        super(), this.number = 0, this.githubNodeId = "", this.title = "", this.description = "", this.state = fu.UNSPECIFIED, this.draft = !1, this.authorLogin = "", this.headRef = "", this.headSha = "", this.baseRef = "", this.baseSha = "", this.mergeCommitSha = "", this.mergedByLogin = "", this.reviews = [], this.reviewComments = [], this.issueComments = [], this.timelineEvents = [], this.actors = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _u).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _u).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _u).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_u, e, t);
    }
    static $() {
        return [
            "ImportedGithubPullRequest|1 number 5|2 github_node_id 9|3 title 9|4 description 9|5 state #0|6 draft 8|7 author_login 9|8 head_ref 9|9 head_sha 9|10 base_ref 9|11 base_sha 9|12 created_at #1|13 merged_at #1?|14 closed_at #1?|15 merge_commit_sha 9|16 merged_by_login 9|17 reviews #2*|18 review_comments #3*|19 issue_comments #4*|20 timeline_events #5*|21 actors #6*",
            fu,
            n.Timestamp,
            Su,
            bu,
            Eu,
            Iu,
            Au
        ];
    }
}
class Au extends hu {
    constructor(e){
        super(), this.login = "", this.githubUserNodeId = "", this.githubUserDatabaseId = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Au).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Au).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Au).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Au, e, t);
    }
    static $() {
        return [
            "ImportedGithubActor|1 login 9|2 github_user_node_id 9|3 github_user_database_id 3"
        ];
    }
}
class Su extends hu {
    constructor(e){
        super(), this.githubNodeId = "", this.authorLogin = "", this.verdict = gu.UNSPECIFIED, this.body = "", this.commitSha = "", this.dismissedByLogin = "", this.dismissalMessage = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Su).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Su).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Su).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Su, e, t);
    }
    static $() {
        return [
            "ImportedGithubReview|1 github_node_id 9|2 author_login 9|3 verdict #0|4 body 9|5 commit_sha 9|6 submitted_at #1|7 dismissed_at #1?|8 dismissed_by_login 9|9 dismissal_message 9",
            gu,
            n.Timestamp
        ];
    }
}
class bu extends hu {
    constructor(e){
        super(), this.githubNodeId = "", this.reviewGithubNodeId = "", this.inReplyToGithubNodeId = "", this.authorLogin = "", this.body = "", this.path = "", this.commitSha = "", this.side = yu.UNSPECIFIED, this.startLine = 0, this.endLine = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new bu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new bu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new bu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(bu, e, t);
    }
    static $() {
        return [
            "ImportedGithubReviewComment|1 github_node_id 9|2 review_github_node_id 9|3 in_reply_to_github_node_id 9|4 author_login 9|5 body 9|6 path 9|7 commit_sha 9|8 side #0|9 start_line 5|10 end_line 5|11 created_at #1",
            yu,
            n.Timestamp
        ];
    }
}
class Eu extends hu {
    constructor(e){
        super(), this.githubNodeId = "", this.authorLogin = "", this.body = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Eu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Eu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Eu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Eu, e, t);
    }
    static $() {
        return [
            "ImportedGithubIssueComment|1 github_node_id 9|2 author_login 9|3 body 9|4 created_at #0",
            n.Timestamp
        ];
    }
}
class Iu extends hu {
    constructor(e){
        super(), this.githubEvent = "", this.actorLogin = "", this.label = "", this.subjectLogin = "", this.previousTitle = "", this.newTitle = "", this.previousSha = "", this.newSha = "", this.previousBaseRef = "", this.newBaseRef = "", this.dismissedReviewGithubNodeId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Iu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Iu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Iu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Iu, e, t);
    }
    static $() {
        return [
            "ImportedGithubTimelineEvent|1 github_event 9|2 actor_login 9|3 created_at #0|4 label 9|5 subject_login 9|6 previous_title 9|7 new_title 9|8 previous_sha 9|9 new_sha 9|10 previous_base_ref 9|11 new_base_ref 9|12 dismissed_review_github_node_id 9",
            n.Timestamp
        ];
    }
}
const Cu = "origin.v1.";
class ku extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return Cu;
    }
}
var xu = (0, s.QT)(n.proto3, Cu, "MergeConflictResolutionState", [
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
], 1), Tu = (0, s.QT)(n.proto3, Cu, "MergeConflictResolutionStaleCause", [
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
], 1), Ru = (0, s.QT)(n.proto3, Cu, "MergeConflictResolutionHunkKind", [
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
], 1), Bu = (0, s.QT)(n.proto3, Cu, "MergeConflictResolutionLineSource", [
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
], 1), Pu = (0, s.QT)(n.proto3, Cu, "MergeConflictResolutionStepState", [
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
class Ju extends ku {
    constructor(e){
        super(), this.landingRef = "", this.landingSha = "", this.changes = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ju).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ju).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ju).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ju, e, t);
    }
    static $() {
        return [
            "MergeConflictResolutionPin|1 landing_ref 9|2 landing_sha 9|3 changes #0*",
            Mu
        ];
    }
}
class Mu extends ku {
    constructor(e){
        super(), this.changeNumber = n.protoInt64.zero, this.headSha = "", this.baseRef = "", this.recordedBaseSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Mu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Mu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Mu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Mu, e, t);
    }
    static $() {
        return [
            "MergeConflictResolutionPinnedChange|1 change_number 4|2 head_sha 9|3 base_ref 9|4 recorded_base_sha 9"
        ];
    }
}
class qu extends ku {
    constructor(e){
        super(), this.path = "", this.hunkCount = 0, this.resolutionDigest = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qu, e, t);
    }
    static $() {
        return [
            "MergeConflictResolutionFile|1 path 9|2 hunk_count 13|3 resolution_digest 9"
        ];
    }
}
class Du extends ku {
    constructor(e){
        super(), this.text = "", this.source = Bu.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Du).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Du).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Du).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Du, e, t);
    }
    static $() {
        return [
            "MergeConflictResolutionPreviewLine|1 text 9|2 source #0",
            Bu
        ];
    }
}
class Ou extends ku {
    constructor(e){
        super(), this.path = "", this.startLine = 0, this.endLine = 0, this.kind = Ru.UNSPECIFIED, this.needsPerson = !1, this.lines = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ou).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ou).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ou).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ou, e, t);
    }
    static $() {
        return [
            "MergeConflictResolutionPreviewHunk|1 path 9|2 start_line 13|3 end_line 13|4 kind #0|5 needs_person 8|6 lines #1*",
            Ru,
            Du
        ];
    }
}
class Nu extends ku {
    constructor(e){
        super(), this.changeNumber = n.protoInt64.zero, this.title = "", this.state = Pu.UNSPECIFIED, this.merged = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Nu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Nu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Nu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Nu, e, t);
    }
    static $() {
        return [
            "MergeConflictResolutionStackStep|1 change_number 4|2 title 9|3 author #0|4 state #1|5 merged 8",
            qi,
            Pu
        ];
    }
}
class Fu extends ku {
    constructor(e){
        super(), this.owningChangeNumber = n.protoInt64.zero, this.steps = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Fu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Fu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Fu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Fu, e, t);
    }
    static $() {
        return [
            "MergeConflictResolutionStackPlan|1 owning_change_number 4|2 steps #0*",
            Nu
        ];
    }
}
class Uu extends ku {
    constructor(e){
        super(), this.state = xu.UNSPECIFIED, this.resolutionId = "", this.fileCount = 0, this.hunkCount = 0, this.reasonCode = "", this.reason = "", this.staleCause = Tu.UNSPECIFIED, this.files = [], this.previewHunks = [], this.appliedCommitSha = "", this.undoAvailable = !1, this.appliedByViewer = !1, this.appliedOnChangeNumber = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Uu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Uu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Uu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Uu, e, t);
    }
    static $() {
        return [
            "MergeConflictResolution|1 state #0|2 resolution_id 9|3 pin #1|4 file_count 13|5 hunk_count 13|6 reason_code 9|7 reason 9|8 stale_cause #2|9 files #3*|10 preview_hunks #4*|11 stack_plan #5?|12 applied_commit_sha 9|13 undo_available 8|14 applied_by_viewer 8|15 applied_by #6|16 applied_on_change_number 4",
            xu,
            Ju,
            Tu,
            qu,
            Ou,
            Fu,
            qi
        ];
    }
}
class Lu extends ku {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Lu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Lu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Lu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Lu, e, t);
    }
    static $() {
        return [
            "GetMergeConflictResolutionRequest|1 change #0",
            na
        ];
    }
}
class $u extends ku {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $u).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $u).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $u).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($u, e, t);
    }
    static $() {
        return [
            "GetMergeConflictResolutionResponse|1 resolution #0",
            Uu
        ];
    }
}
class Qu extends ku {
    constructor(e){
        super(), this.resolutionId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Qu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Qu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Qu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Qu, e, t);
    }
    static $() {
        return [
            "ApplyMergeConflictResolutionRequest|1 change #0|2 resolution_id 9|3 expected #1",
            na,
            Ju
        ];
    }
}
class ju extends ku {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ju).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ju).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ju).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ju, e, t);
    }
    static $() {
        return [
            "ApplyMergeConflictResolutionResponse|1 resolution #0",
            Uu
        ];
    }
}
class Gu extends ku {
    constructor(e){
        super(), this.resolutionId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Gu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Gu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Gu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Gu, e, t);
    }
    static $() {
        return [
            "UndoMergeConflictResolutionRequest|1 change #0|2 resolution_id 9",
            na
        ];
    }
}
class Hu extends ku {
    constructor(e){
        super(), this.restoredHeadSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Hu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Hu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Hu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Hu, e, t);
    }
    static $() {
        return [
            "UndoMergeConflictResolutionResponse|1 resolution #0|2 restored_head_sha 9",
            Uu
        ];
    }
}
const zu = "origin.v1.";
class Wu extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return zu;
    }
}
var Vu = (0, s.QT)(n.proto3, zu, "CommentSide", [
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
], 1), Ku = (0, s.QT)(n.proto3, zu, "CommentThreadPortingStatus", [
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
class Yu extends Wu {
    constructor(e){
        super(), this.id = "", this.changeId = "", this.versionId = "", this.versionNumber = n.protoInt64.zero, this.reviewId = "", this.path = "", this.side = Vu.UNSPECIFIED, this.startLine = 0, this.endLine = 0, this.externalId = "", this.comments = [], this.portedToVersionNumber = n.protoInt64.zero, this.portingStatus = Ku.UNSPECIFIED, this.portedPath = "", this.portedStartLine = 0, this.portedEndLine = 0, this.versionHeadSha = "", this.versionBaseSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Yu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Yu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Yu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Yu, e, t);
    }
    static $() {
        return [
            "CommentThread|1 id 9|2 change_id 9|3 version_id 9|4 version_number 4|5 review_id 9|6 resolved_at #0|8 path 9|9 side #1|10 start_line 13|11 end_line 13|12 external_id 9|13 created_at #0|14 updated_at #0|15 comments #2*|19 resolved_by #3|20 ported_to_version_number 4|21 porting_status #4|22 ported_path 9|23 ported_start_line 13|24 ported_end_line 13|25 version_head_sha 9|26 version_base_sha 9|27 version_created_at #0",
            n.Timestamp,
            Vu,
            Ja,
            qi,
            Ku
        ];
    }
}
class Zu extends Wu {
    constructor(e){
        super(), this.body = "", this.versionNumber = n.protoInt64.zero, this.path = "", this.side = Vu.UNSPECIFIED, this.startLine = 0, this.endLine = 0, this.reviewId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Zu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Zu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Zu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Zu, e, t);
    }
    static $() {
        return [
            "CreateCommentThreadRequest|1 change #0|2 body 9|3 version_number 4|4 path 9|5 side #1|6 start_line 13|7 end_line 13|8 review_id 9",
            na,
            Vu
        ];
    }
}
class Xu extends Wu {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Xu).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Xu).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Xu).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Xu, e, t);
    }
    static $() {
        return [
            "CreateCommentThreadResponse|1 thread #0",
            Yu
        ];
    }
}
class ed extends Wu {
    constructor(e){
        super(), this.versionNumber = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ed).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ed).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ed).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ed, e, t);
    }
    static $() {
        return [
            "ListCommentThreadsRequest|1 change #0|2 version_number 4",
            na
        ];
    }
}
class td extends Wu {
    constructor(e){
        super(), this.threads = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new td).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new td).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new td).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(td, e, t);
    }
    static $() {
        return [
            "ListCommentThreadsResponse|1 threads #0*",
            Yu
        ];
    }
}
class rd extends Wu {
    constructor(e){
        super(), this.threadId = "", this.body = "", this.reviewId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new rd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new rd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new rd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(rd, e, t);
    }
    static $() {
        return [
            "AddCommentToThreadRequest|1 change #0|2 thread_id 9|3 body 9|4 review_id 9",
            na
        ];
    }
}
class nd extends Wu {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new nd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new nd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new nd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(nd, e, t);
    }
    static $() {
        return [
            "AddCommentToThreadResponse|1 comment #0",
            Ja
        ];
    }
}
class sd extends Wu {
    constructor(e){
        super(), this.threadId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new sd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new sd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new sd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(sd, e, t);
    }
    static $() {
        return [
            "ResolveCommentThreadRequest|1 change #0|2 thread_id 9",
            na
        ];
    }
}
class od extends Wu {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new od).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new od).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new od).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(od, e, t);
    }
    static $() {
        return [
            "ResolveCommentThreadResponse|1 thread #0",
            Yu
        ];
    }
}
class id extends Wu {
    constructor(e){
        super(), this.threadId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new id).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new id).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new id).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(id, e, t);
    }
    static $() {
        return [
            "ReopenCommentThreadRequest|1 change #0|2 thread_id 9",
            na
        ];
    }
}
class ad extends Wu {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ad).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ad).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ad).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ad, e, t);
    }
    static $() {
        return [
            "ReopenCommentThreadResponse|1 thread #0",
            Yu
        ];
    }
}
class cd extends Wu {
    constructor(e){
        super(), this.commentId = "", this.body = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new cd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new cd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new cd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(cd, e, t);
    }
    static $() {
        return [
            "UpdateCommentRequest|1 comment_id 9|2 body 9"
        ];
    }
}
class ld extends Wu {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ld).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ld).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ld).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ld, e, t);
    }
    static $() {
        return [
            "UpdateCommentResponse|1 comment #0",
            Ja
        ];
    }
}
class ud extends Wu {
    constructor(e){
        super(), this.commentId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ud).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ud).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ud).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ud, e, t);
    }
    static $() {
        return [
            "DeleteCommentRequest|1 comment_id 9"
        ];
    }
}
class dd extends Wu {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new dd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new dd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new dd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(dd, e, t);
    }
    static $() {
        return [
            "DeleteCommentResponse"
        ];
    }
}
class pd extends Wu {
    constructor(e){
        super(), this.commentId = "", this.emoji = "", this.active = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pd, e, t);
    }
    static $() {
        return [
            "SetCommentReactionRequest|1 comment_id 9|2 emoji 9|3 active 8"
        ];
    }
}
class md extends Wu {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new md).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new md).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new md).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(md, e, t);
    }
    static $() {
        return [
            "SetCommentReactionResponse"
        ];
    }
}
class hd extends Wu {
    constructor(e){
        super(), this.commentId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new hd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new hd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new hd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(hd, e, t);
    }
    static $() {
        return [
            "ListCommentReactionsRequest|1 comment_id 9"
        ];
    }
}
class fd extends Wu {
    constructor(e){
        super(), this.reactions = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fd, e, t);
    }
    static $() {
        return [
            "ListCommentReactionsResponse|1 reactions #0*",
            qa
        ];
    }
}
class gd extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class yd extends gd {
    constructor(e){
        super(), this.filePath = "", this.versionId = "", this.headCommitSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new yd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new yd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new yd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(yd, e, t);
    }
    static $() {
        return [
            "MarkFileAsViewedRequest|1 change #0|2 file_path 9|3 version_id 9|4 head_commit_sha 9",
            na
        ];
    }
}
class wd extends gd {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new wd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new wd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new wd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(wd, e, t);
    }
    static $() {
        return [
            "MarkFileAsViewedResponse"
        ];
    }
}
class vd extends gd {
    constructor(e){
        super(), this.filePath = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new vd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new vd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new vd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(vd, e, t);
    }
    static $() {
        return [
            "UnmarkFileAsViewedRequest|1 change #0|2 file_path 9",
            na
        ];
    }
}
class _d extends gd {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _d).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _d).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _d).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_d, e, t);
    }
    static $() {
        return [
            "UnmarkFileAsViewedResponse"
        ];
    }
}
class Ad extends gd {
    constructor(e){
        super(), this.directoryPath = "", this.filePaths = [], this.versionId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ad).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ad).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ad).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ad, e, t);
    }
    static $() {
        return [
            "MarkDirectoryAsViewedRequest|1 change #0|2 directory_path 9|3 file_paths 9*|4 version_id 9",
            na
        ];
    }
}
class Sd extends gd {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Sd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Sd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Sd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Sd, e, t);
    }
    static $() {
        return [
            "MarkDirectoryAsViewedResponse"
        ];
    }
}
class bd extends gd {
    constructor(e){
        super(), this.filePaths = [], this.versionId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new bd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new bd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new bd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(bd, e, t);
    }
    static $() {
        return [
            "MarkAllFilesAsViewedRequest|1 change #0|2 file_paths 9*|3 version_id 9",
            na
        ];
    }
}
class Ed extends gd {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ed).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ed).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ed).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ed, e, t);
    }
    static $() {
        return [
            "MarkAllFilesAsViewedResponse"
        ];
    }
}
class Id extends gd {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Id).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Id).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Id).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Id, e, t);
    }
    static $() {
        return [
            "UnmarkAllFilesAsViewedRequest|1 change #0",
            na
        ];
    }
}
class Cd extends gd {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Cd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Cd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Cd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Cd, e, t);
    }
    static $() {
        return [
            "UnmarkAllFilesAsViewedResponse"
        ];
    }
}
class kd extends gd {
    constructor(e){
        super(), this.headCommitSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new kd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new kd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new kd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(kd, e, t);
    }
    static $() {
        return [
            "ListFileViewedStatesRequest|1 change #0|2 head_commit_sha 9",
            na
        ];
    }
}
class xd extends gd {
    constructor(e){
        super(), this.fileViewedStates = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xd, e, t);
    }
    static $() {
        return [
            "ListFileViewedStatesResponse|1 file_viewed_states #0*|2 head_version_id 9?",
            Td
        ];
    }
}
class Td extends gd {
    constructor(e){
        super(), this.filePath = "", this.versionId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Td).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Td).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Td).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Td, e, t);
    }
    static $() {
        return [
            "FileViewedState|1 file_path 9|2 version_id 9|3 stale 8?"
        ];
    }
}
const Rd = "origin.v1.";
class Bd extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return Rd;
    }
}
var Pd = (0, s.QT)(n.proto3, Rd, "PullRequestViewedCursor", [
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
class Jd extends Bd {
    constructor(e){
        super(), this.cursor = Pd.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Jd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Jd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Jd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Jd, e, t);
    }
    static $() {
        return [
            "MarkPullRequestAsViewedRequest|1 change #0|2 viewed_at #1|3 cursor #2",
            na,
            n.Timestamp,
            Pd
        ];
    }
}
class Md extends Bd {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Md).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Md).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Md).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Md, e, t);
    }
    static $() {
        return [
            "MarkPullRequestAsViewedResponse|1 viewed_at #0|2 timeline_viewed_at #0?",
            n.Timestamp
        ];
    }
}
class qd extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class Dd extends qd {
    constructor(e){
        super(), this.prUrl = "", this.headSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Dd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Dd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Dd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Dd, e, t);
    }
    static $() {
        return [
            "GeneratedCodeTourStackMember|1 pr_url 9|2 head_sha 9"
        ];
    }
}
class Od extends qd {
    constructor(e){
        super(), this.id = "", this.storageKey = "", this.result = "", this.machineGenerated = !1, this.updatedAtMs = n.protoInt64.zero, this.stackId = "", this.stackMembers = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Od).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Od).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Od).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Od, e, t);
    }
    static $() {
        return [
            "GeneratedCodeTour|1 id 9|2 storage_key 9|3 result 9|4 agentic_markdown 9?|5 agentic_error_message 9?|6 format_version 13?|7 prompt_revision 13?|8 machine_generated 8|9 updated_at_ms 3|10 stack_id 9|11 stack_members #0*",
            Dd
        ];
    }
}
class Nd extends qd {
    constructor(e){
        super(), this.storageKey = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Nd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Nd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Nd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Nd, e, t);
    }
    static $() {
        return [
            "GetGeneratedCodeTourRequest|1 change #0|2 storage_key 9",
            na
        ];
    }
}
class Fd extends qd {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Fd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Fd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Fd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Fd, e, t);
    }
    static $() {
        return [
            "GetGeneratedCodeTourResponse|1 tour #0?",
            Od
        ];
    }
}
class Ud extends qd {
    constructor(e){
        super(), this.storageKey = "", this.headSha = "", this.result = "", this.featureConfigurationJson = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ud).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ud).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ud).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ud, e, t);
    }
    static $() {
        return [
            "UpsertGeneratedCodeTourRequest|1 change #0|2 storage_key 9|3 head_sha 9|4 result 9|5 agentic_markdown 9?|6 agentic_error_message 9?|7 feature_configuration_json 9|8 expected_agentic_markdown_sha256 9?",
            na
        ];
    }
}
class Ld extends qd {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ld).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ld).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ld).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ld, e, t);
    }
    static $() {
        return [
            "UpsertGeneratedCodeTourResponse|1 tour #0",
            Od
        ];
    }
}
class $d extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class Qd extends $d {
    constructor(e){
        super(), this.id = "", this.changeId = "", this.repoUuid = "", this.changeNumber = n.protoInt64.zero, this.status = "", this.source = "", this.trunkBranch = "", this.consecutiveFailedAttempts = 0, this.dev = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Qd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Qd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Qd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Qd, e, t);
    }
    static $() {
        return [
            "ChangeMergeWhenReady|1 id 9|2 change_id 9|3 repo_uuid 9|4 change_number 4|6 status 9|7 source 9|8 trunk_branch 9|9 lock_expires_at #0?|10 consecutive_failed_attempts 5|11 dev 8|12 repo_org 9?|13 repo_name 9?|14 enabled_by #1",
            n.Timestamp,
            qi
        ];
    }
}
class jd extends $d {
    constructor(e){
        super(), this.trunkBranch = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new jd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new jd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new jd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(jd, e, t);
    }
    static $() {
        return [
            "EnableChangeMergeWhenReadyRequest|1 change #0|2 trunk_branch 9|3 source 9?|4 dev 8?",
            na
        ];
    }
}
class Gd extends $d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Gd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Gd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Gd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Gd, e, t);
    }
    static $() {
        return [
            "EnableChangeMergeWhenReadyResponse|1 record #0",
            Qd
        ];
    }
}
class Hd extends $d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Hd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Hd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Hd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Hd, e, t);
    }
    static $() {
        return [
            "GetChangeMergeWhenReadyRequest|1 change #0|2 status 9?",
            na
        ];
    }
}
class zd extends $d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new zd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new zd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new zd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(zd, e, t);
    }
    static $() {
        return [
            "GetChangeMergeWhenReadyResponse|1 record #0?",
            Qd
        ];
    }
}
class Wd extends $d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Wd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Wd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Wd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Wd, e, t);
    }
    static $() {
        return [
            "DisableChangeMergeWhenReadyRequest|1 change #0",
            na
        ];
    }
}
class Vd extends $d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Vd).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Vd).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Vd).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Vd, e, t);
    }
    static $() {
        return [
            "DisableChangeMergeWhenReadyResponse"
        ];
    }
}
const Kd = "origin.v1.";
var Yd = (0, s.QT)(n.proto3, Kd, "CheckRunLifecycleStatus", [
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
]), Zd = (0, s.QT)(n.proto3, Kd, "CheckRunConclusion", [
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
const Xd = "origin.v1.";
class ep extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return Xd;
    }
}
var tp = (0, s.QT)(n.proto3, Xd, "CommitCheckRollupState", [
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
], 1), rp = (0, s.QT)(n.proto3, Xd, "CheckRunAnnotationLevel", [
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
], 1), np = (0, s.QT)(n.proto3, Xd, "MergeabilityScope", [
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
], 1), sp = (0, s.QT)(n.proto3, Xd, "RestackStackMemberOutcome", [
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
class op extends ep {
    constructor(e){
        super(), this.sha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new op).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new op).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new op).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(op, e, t);
    }
    static $() {
        return [
            "GetCiStateRequest|1 identifier #0|2 sha 9|3 change_number 4?|4 version_number 4?|5 use_latest_version 8?|6 include_check_run_annotations 8?",
            i
        ];
    }
}
class ip extends ep {
    constructor(e){
        super(), this.checkRunGroups = [], this.missingRequiredChecks = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ip).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ip).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ip).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ip, e, t);
    }
    static $() {
        return [
            "GetCiStateResponse|1 check_run_groups #0*|2 missing_required_checks #1*|3 resolved_head_sha 9?",
            Ap,
            gp
        ];
    }
}
class ap extends ep {
    constructor(e){
        super(), this.shas = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ap).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ap).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ap).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ap, e, t);
    }
    static $() {
        return [
            "BatchGetCommitCheckRollupsRequest|1 identifier #0|2 shas 9*",
            i
        ];
    }
}
class cp extends ep {
    constructor(e){
        super(), this.sha = "", this.state = tp.UNSPECIFIED, this.successCount = 0, this.pendingCount = 0, this.failureCount = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new cp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new cp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new cp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(cp, e, t);
    }
    static $() {
        return [
            "CommitCheckRollup|1 sha 9|2 state #0|3 success_count 13|4 pending_count 13|5 failure_count 13",
            tp
        ];
    }
}
class lp extends ep {
    constructor(e){
        super(), this.rollups = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new lp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new lp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new lp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(lp, e, t);
    }
    static $() {
        return [
            "BatchGetCommitCheckRollupsResponse|1 rollups #0*",
            cp
        ];
    }
}
class up extends ep {
    constructor(e){
        super(), this.checkRunId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new up).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new up).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new up).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(up, e, t);
    }
    static $() {
        return [
            "GetCheckRunRequest|1 identifier #0|2 check_run_id 9",
            i
        ];
    }
}
class dp extends ep {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new dp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new dp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new dp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(dp, e, t);
    }
    static $() {
        return [
            "GetCheckRunResponse|1 check_run #0",
            vp
        ];
    }
}
class pp extends ep {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pp, e, t);
    }
    static $() {
        return [
            "ListRepoCheckSourcesRequest|1 identifier #0",
            i
        ];
    }
}
class mp extends ep {
    constructor(e){
        super(), this.runKey = "", this.name = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new mp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new mp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new mp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(mp, e, t);
    }
    static $() {
        return [
            "RepoCheckSourceRun|1 run_key 9|2 name 9"
        ];
    }
}
class hp extends ep {
    constructor(e){
        super(), this.groupKey = "", this.suiteName = "", this.runs = [], this.lastSeenAtUnixMs = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new hp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new hp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new hp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(hp, e, t);
    }
    static $() {
        return [
            "RepoCheckSource|1 actor #0|2 group_key 9|3 suite_name 9|4 runs #1*|5 last_seen_at_unix_ms 3",
            yp,
            mp
        ];
    }
}
class fp extends ep {
    constructor(e){
        super(), this.sources = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fp, e, t);
    }
    static $() {
        return [
            "ListRepoCheckSourcesResponse|1 sources #0*",
            hp
        ];
    }
}
class gp extends ep {
    constructor(e){
        super(), this.displayName = "", this.identityPath = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new gp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new gp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new gp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(gp, e, t);
    }
    static $() {
        return [
            "MissingRequiredCheck|1 display_name 9|2 identity_path 9"
        ];
    }
}
class yp extends ep {
    constructor(e){
        super(), this.kind = "", this.id = "", this.displayName = "", this.iconUrl = "", this.appId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new yp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new yp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new yp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(yp, e, t);
    }
    static $() {
        return [
            "CheckRunActor|1 kind 9|2 id 9|3 display_name 9|5 icon_url 9|6 app_id 9"
        ];
    }
}
class wp extends ep {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new wp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new wp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new wp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(wp, e, t);
    }
    static $() {
        return [
            "CheckRunOutput|1 title 9?|2 summary 9?|3 text 9?"
        ];
    }
}
class vp extends ep {
    constructor(e){
        super(), this.id = "", this.name = "", this.status = Yd.CHECK_RUN_LIFECYCLE_STATUS_UNSPECIFIED, this.externalId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new vp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new vp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new vp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(vp, e, t);
    }
    static $() {
        return [
            "CheckRunStatus|1 id 9|2 name 9|4 details_url 9?|5 status #0|6 conclusion #1?|7 started_at_unix_ms 3?|8 completed_at_unix_ms 3?|9 external_id 9|10 required 8?|11 output #2?|12 deadline_at_unix_ms 3?|13 is_rerequestable 8?|14 rerequested_at_unix_ms 3?|15 annotations #3?|16 base_sha 9?",
            Yd,
            Zd,
            wp,
            _p
        ];
    }
}
class _p extends ep {
    constructor(e){
        super(), this.annotations = [], this.truncated = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _p).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _p).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _p).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_p, e, t);
    }
    static $() {
        return [
            "CheckRunAnnotationBatch|1 annotations #0*|2 truncated 8",
            Rp
        ];
    }
}
class Ap extends ep {
    constructor(e){
        super(), this.id = "", this.name = "", this.checkRuns = [], this.externalId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ap).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ap).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ap).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ap, e, t);
    }
    static $() {
        return [
            "CheckRunGroup|1 id 9|2 name 9|4 details_url 9?|5 check_runs #0*|6 actor #1|7 external_id 9|8 base_sha 9?",
            vp,
            yp
        ];
    }
}
class Sp extends ep {
    constructor(e){
        super(), this.checkRunGroups = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Sp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Sp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Sp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Sp, e, t);
    }
    static $() {
        return [
            "CiState|1 check_run_groups #0*",
            Ap
        ];
    }
}
class bp extends ep {
    constructor(e){
        super(), this.headSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new bp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new bp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new bp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(bp, e, t);
    }
    static $() {
        return [
            "PostCheckRunRequest|1 identifier #0|2 head_sha 9|3 group #1|4 check #2",
            i,
            Ep,
            Ip
        ];
    }
}
class Ep extends ep {
    constructor(e){
        super(), this.key = "", this.name = "", this.externalId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ep).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ep).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ep).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ep, e, t);
    }
    static $() {
        return [
            "CheckRunGroupInput|1 key 9|2 name 9|3 external_id 9|4 details_url 9?"
        ];
    }
}
class Ip extends ep {
    constructor(e){
        super(), this.key = "", this.name = "", this.externalId = "", this.status = Yd.CHECK_RUN_LIFECYCLE_STATUS_UNSPECIFIED, this.externalUpdatedAtUnixMs = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ip).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ip).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ip).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ip, e, t);
    }
    static $() {
        return [
            "CheckRunInput|1 key 9|2 name 9|3 external_id 9|4 status #0|5 conclusion #1?|6 external_updated_at_unix_ms 3|7 started_at_unix_ms 3?|8 completed_at_unix_ms 3?|10 details_url 9?|11 output #2?|12 deadline_at_unix_ms 3?|13 is_rerequestable 8?",
            Yd,
            Zd,
            wp
        ];
    }
}
class Cp extends ep {
    constructor(e){
        super(), this.repoId = "", this.sha = "", this.checkRunGroupId = "", this.checkRunId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Cp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Cp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Cp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Cp, e, t);
    }
    static $() {
        return [
            "PostCheckRunResponse|1 repo_id 9|2 sha 9|3 check_run_group_id 9|4 check_run_id 9"
        ];
    }
}
class kp extends ep {
    constructor(e){
        super(), this.startColumn = 0, this.endColumn = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new kp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new kp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new kp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(kp, e, t);
    }
    static $() {
        return [
            "CheckRunAnnotationColumnRange|1 start_column 5|2 end_column 5"
        ];
    }
}
class xp extends ep {
    constructor(e){
        super(), this.path = "", this.startLine = 0, this.endLine = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xp, e, t);
    }
    static $() {
        return [
            "CheckRunAnnotationLocation|1 path 9|2 start_line 5|3 end_line 5|4 columns #0",
            kp
        ];
    }
}
class Tp extends ep {
    constructor(e){
        super(), this.annotationLevel = rp.UNSPECIFIED, this.message = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Tp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Tp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Tp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Tp, e, t);
    }
    static $() {
        return [
            "CheckRunAnnotationInput|4 annotation_level #0|5 message 9|8 title 9?|9 raw_details 9?|11 location #1",
            rp,
            xp
        ];
    }
}
class Rp extends ep {
    constructor(e){
        super(), this.id = "", this.checkRunId = "", this.annotationLevel = rp.UNSPECIFIED, this.message = "", this.createdAtUnixMs = n.protoInt64.zero, this.updatedAtUnixMs = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Rp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Rp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Rp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Rp, e, t);
    }
    static $() {
        return [
            "CheckRunAnnotation|1 id 9|2 check_run_id 9|3 annotation_level #0|4 message 9|5 title 9?|6 raw_details 9?|7 created_at_unix_ms 3|8 updated_at_unix_ms 3|9 location #1",
            rp,
            xp
        ];
    }
}
class Bp extends ep {
    constructor(e){
        super(), this.checkRunId = "", this.annotations = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Bp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Bp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Bp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Bp, e, t);
    }
    static $() {
        return [
            "CreateCheckRunAnnotationsRequest|1 identifier #0|2 check_run_id 9|3 annotations #1*",
            i,
            Tp
        ];
    }
}
class Pp extends ep {
    constructor(e){
        super(), this.annotations = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Pp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Pp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Pp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Pp, e, t);
    }
    static $() {
        return [
            "CreateCheckRunAnnotationsResponse|1 annotations #0*",
            Rp
        ];
    }
}
class Jp extends ep {
    constructor(e){
        super(), this.checkRunId = "", this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Jp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Jp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Jp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Jp, e, t);
    }
    static $() {
        return [
            "ListCheckRunAnnotationsRequest|1 identifier #0|2 check_run_id 9|3 page_size 5|4 page_token 9",
            i
        ];
    }
}
class Mp extends ep {
    constructor(e){
        super(), this.annotations = [], this.nextPageToken = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Mp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Mp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Mp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Mp, e, t);
    }
    static $() {
        return [
            "ListCheckRunAnnotationsResponse|1 annotations #0*|2 next_page_token 9",
            Rp
        ];
    }
}
class qp extends ep {
    constructor(e){
        super(), this.checkRunId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qp, e, t);
    }
    static $() {
        return [
            "RerequestCheckRunRequest|1 change #0|2 check_run_id 9",
            na
        ];
    }
}
class Dp extends ep {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Dp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Dp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Dp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Dp, e, t);
    }
    static $() {
        return [
            "RerequestCheckRunResponse|1 check_run #0",
            vp
        ];
    }
}
class Op extends ep {
    constructor(e){
        super(), this.changeNumber = n.protoInt64.zero, this.scope = np.UNSPECIFIED, this.previewRestackConflict = !1, this.includeDefaultMergeMode = !1, this.includeSummary = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Op).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Op).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Op).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Op, e, t);
    }
    static $() {
        return [
            "GetChangesetMergeabilityRequest|1 identifier #0|2 change_number 4|3 expected_head_sha 9?|4 scope #1|5 preview_restack_conflict 8|6 include_default_merge_mode 8|7 include_head_ref_exists 8?|8 include_summary 8",
            i,
            np
        ];
    }
}
class Np extends ep {
    constructor(e){
        super(), this.mergeable = !1, this.ciPassing = !1, this.meetsApprovalRequirements = !1, this.hasMergeConflicts = !1, this.conflictedPaths = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Np).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Np).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Np).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Np, e, t);
    }
    static $() {
        return [
            "GetChangesetMergeabilityResponse|1 mergeable 8|2 ci_passing 8|3 ci_state #0|4 meets_approval_requirements 8|5 has_merge_conflicts 8|6 mergeability #1|7 stack_mergeability #2?|8 conflicted_paths 9*|9 review_decision 9?|10 evaluated_head_sha 9?|11 evaluated_base_tip_sha 9?|12 default_merge_mode #3?|13 head_ref_exists 8?|15 target_rules_unread 8?|16 summary #4?",
            Sp,
            Lp,
            Kp,
            Ln,
            Fp
        ];
    }
}
class Fp extends ep {
    constructor(e){
        super(), this.verdict = "", this.blockers = [], this.evaluatedChangeNumbers = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Fp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Fp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Fp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Fp, e, t);
    }
    static $() {
        return [
            "ChangesetMergeabilitySummary|1 verdict 9|2 blockers #0*|3 evaluated_change_numbers 4*",
            Up
        ];
    }
}
class Up extends ep {
    constructor(e){
        super(), this.kind = "", this.message = "", this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Up).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Up).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Up).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Up, e, t);
    }
    static $() {
        return [
            "ChangesetMergeabilitySummaryBlocker|1 kind 9|2 message 9|3 change_number 4|4 required_checks_state 9?|5 required_approval_count 13?|6 approved_count 13?|7 conflict_inherited_from_downstack 8?|8 invalid_stack_reason 9?"
        ];
    }
}
class Lp extends ep {
    constructor(e){
        super(), this.verdict = "", this.evaluations = [], this.blockers = [], this.configurationDiagnostics = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Lp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Lp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Lp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Lp, e, t);
    }
    static $() {
        return [
            "ChangesetMergeability|1 verdict 9|2 evaluations #0*|3 blockers #1*|4 configuration_diagnostics #2*",
            $p,
            Wp,
            Vp
        ];
    }
}
class $p extends ep {
    constructor(e){
        super(), this.ruleType = "", this.rulesetId = "", this.rulesetName = "", this.ruleId = "", this.enforcement = "", this.result = "", this.message = "", this.category = "", this.violations = [], this.gatesWaivedChecks = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $p).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $p).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $p).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($p, e, t);
    }
    static $() {
        return [
            "ChangesetRuleEvaluation|1 rule_type 9|2 ruleset_id 9|3 ruleset_name 9|4 rule_id 9|5 enforcement 9|6 result 9|7 message 9|8 category 9|9 violations #0*|10 satisfied_by #1?|11 gates_waived_checks #2*",
            Hp,
            jp,
            Qp
        ];
    }
}
class Qp extends ep {
    constructor(e){
        super(), this.name = "", this.checkRunIds = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Qp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Qp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Qp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Qp, e, t);
    }
    static $() {
        return [
            "ChangesetGatesWaivedCheck|1 name 9|2 check_run_ids 9*"
        ];
    }
}
class jp extends ep {
    constructor(e){
        super(), this.kind = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new jp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new jp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new jp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(jp, e, t);
    }
    static $() {
        return [
            "ChangesetReviewSatisfaction|1 kind 9|2 gates #0?",
            Gp
        ];
    }
}
class Gp extends ep {
    constructor(e){
        super(), this.headSha = "", this.landingBaseSha = "", this.gatesFileBlobOid = "", this.approved = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Gp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Gp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Gp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Gp, e, t);
    }
    static $() {
        return [
            "ChangesetGatesResult|1 head_sha 9|2 landing_base_sha 9|3 gates_file_blob_oid 9|4 approved #0*|5 trunk_tip_gates_file_blob_oid 9?",
            Ba
        ];
    }
}
class Hp extends ep {
    constructor(e){
        super(), this.ruleType = "", this.detail = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Hp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Hp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Hp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Hp, e, t);
    }
    static $() {
        return [
            "ChangesetRuleViolation|1 rule_type 9|2 detail 9|3 remediation 9?|4 actionable_signal #0?",
            zp
        ];
    }
}
class zp extends ep {
    constructor(e){
        super(), this.kind = "", this.checkNames = [], this.ownerLabels = [], this.paths = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new zp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new zp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new zp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(zp, e, t);
    }
    static $() {
        return [
            "ChangesetRuleActionableSignal|1 kind 9|2 check_names 9*|3 required_count 5?|4 actual_count 5?|5 owner_labels 9*|6 paths 9*"
        ];
    }
}
class Wp extends ep {
    constructor(e){
        super(), this.kind = "", this.mergedChangeNumbers = [], this.openChangeNumbers = [], this.conflictedPaths = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Wp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Wp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Wp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Wp, e, t);
    }
    static $() {
        return [
            "ChangesetMergeBlocker|1 kind 9|2 rule_failure #0?|3 merge_ref_sha 9?|4 base_tip_sha_at_computation 9?|5 current_base_tip_sha 9?|6 ruleset_id 9?|7 rule_id 9?|8 enforcement 9?|9 message 9?|10 change_number 4?|11 merge_commit_oid 9?|12 merged_change_numbers 4*|13 open_change_numbers 4*|14 top_change_number 4?|15 downstack_change_number 4?|16 top_head_sha 9?|17 downstack_head_sha 9?|18 compare_status 9?|19 topology_reason 9?|20 root_base_ref 9?|21 conflicted_paths 9*|22 conflict_inherited_from_downstack 8?|23 recorded_base_sha 9?|24 target_base_ref 9?",
            $p
        ];
    }
}
class Vp extends ep {
    constructor(e){
        super(), this.kind = "", this.severity = "", this.message = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Vp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Vp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Vp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Vp, e, t);
    }
    static $() {
        return [
            "ChangesetRuleConfigurationDiagnostic|1 kind 9|2 severity 9|3 message 9|4 ruleset_id 9?|5 rule_id 9?|6 bypass_actor_id 9?|7 enforcement 9?"
        ];
    }
}
class Kp extends ep {
    constructor(e){
        super(), this.targetChangeNumber = n.protoInt64.zero, this.prefixChangeNumbers = [], this.rootBaseRef = "", this.verdict = "", this.blockers = [], this.memberEvaluations = [], this.convergenceConflictedPaths = [], this.restackConflictedPaths = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Kp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Kp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Kp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Kp, e, t);
    }
    static $() {
        return [
            "StackMergeability|1 target_change_number 4|2 prefix_change_numbers 4*|3 root_base_ref 9|4 verdict 9|5 blockers #0*|6 member_evaluations #1*|7 convergence_state 9?|8 convergence_conflicted_change_number 4?|9 convergence_conflicted_paths 9*|10 convergence_updated_at 9?|11 restack_conflicted_change_number 4?|12 restack_conflicted_paths 9*|13 restack_preview_pending 8?",
            Wp,
            Yp
        ];
    }
}
class Yp extends ep {
    constructor(e){
        super(), this.changeNumber = n.protoInt64.zero, this.role = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Yp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Yp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Yp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Yp, e, t);
    }
    static $() {
        return [
            "StackMemberEvaluation|1 change_number 4|2 role 9|3 mergeability #0",
            Lp
        ];
    }
}
class Zp extends ep {
    constructor(e){
        super(), this.topChangeNumber = n.protoInt64.zero, this.mode = Ln.UNSPECIFIED, this.expectedTargetHeadSha = "", this.expectedMemberHeadShas = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Zp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Zp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Zp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Zp, e, t);
    }
    static $() {
        return [
            "MergeStackRequest|1 identifier #0|2 top_change_number 4|3 mode #1|4 expected_target_head_sha 9|5 commit_title 9?|6 commit_message 9?|7 bypass_merge_queue 8?|8 allow_open_pull_request_base 8?|9 expected_member_head_shas 4,9",
            i,
            Ln
        ];
    }
}
class Xp extends ep {
    constructor(e){
        super(), this.mergeCommitSha = "", this.mergedChangeNumbers = [], this.mergeQueueEntryId = "", this.mergeQueueSkipped = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Xp).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Xp).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Xp).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Xp, e, t);
    }
    static $() {
        return [
            "MergeStackResponse|1 merge_commit_sha 9|2 merged_change_numbers 4*|3 merge_queue_entry_id 9|4 merge_queue_skipped 8"
        ];
    }
}
class em extends ep {
    constructor(e){
        super(), this.topChangeNumber = n.protoInt64.zero, this.dryRun = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new em).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new em).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new em).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(em, e, t);
    }
    static $() {
        return [
            "RestackStackRequest|1 identifier #0|2 top_change_number 4|3 dry_run 8",
            i
        ];
    }
}
class tm extends ep {
    constructor(e){
        super(), this.changeNumber = n.protoInt64.zero, this.headSha = "", this.ontoRef = "", this.outcome = sp.UNSPECIFIED, this.conflictedPaths = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new tm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new tm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new tm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(tm, e, t);
    }
    static $() {
        return [
            "RestackStackDryRunMember|1 change_number 4|2 head_sha 9|3 onto_ref 9|4 onto_sha 9?|5 new_head_sha 9?|6 outcome #0|7 conflicted_paths 9*",
            sp
        ];
    }
}
class rm extends ep {
    constructor(e){
        super(), this.restackedChangeNumbers = [], this.dryRunMembers = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new rm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new rm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new rm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(rm, e, t);
    }
    static $() {
        return [
            "RestackStackResponse|1 restacked_change_numbers 4*|2 dry_run_members #0*",
            tm
        ];
    }
}
class nm extends ep {
    constructor(e){
        super(), this.runId = "", this.jobName = "", this.headSha = "", this.cause = {
            case: void 0
        }, this.runActive = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new nm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new nm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new nm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(nm, e, t);
    }
    static $() {
        return [
            "OriginCiJob|1 run_id 9|2 job_name 9|3 head_sha 9|4 pull_request_number 4 cause|5 push_ref 9 cause|6 run_active 8|7 result #0?",
            sm
        ];
    }
}
class sm extends ep {
    constructor(e){
        super(), this.conclusion = Zd.CHECK_RUN_CONCLUSION_UNSPECIFIED, this.completedAtUnixMs = n.protoInt64.zero, this.logTruncated = !1, this.steps = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new sm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new sm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new sm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(sm, e, t);
    }
    static $() {
        return [
            "OriginCiJobResult|1 conclusion #0|2 exit_code 5?|3 image 9?|4 note 9?|5 started_at_unix_ms 3?|6 completed_at_unix_ms 3|7 log_bytes 3?|8 log_truncated 8|9 steps #1*",
            Zd,
            om
        ];
    }
}
class om extends ep {
    constructor(e){
        super(), this.index = 0, this.startedAtUnixMs = n.protoInt64.zero, this.completedAtUnixMs = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new om).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new om).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new om).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(om, e, t);
    }
    static $() {
        return [
            "OriginCiJobStep|1 index 13|2 started_at_unix_ms 3|3 completed_at_unix_ms 3"
        ];
    }
}
class im extends ep {
    constructor(e){
        super(), this.runId = "", this.jobName = "", this.offset = n.protoInt64.zero, this.limit = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new im).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new im).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new im).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(im, e, t);
    }
    static $() {
        return [
            "GetOriginCiJobLogRequest|1 identifier #0|2 run_id 9|3 job_name 9|4 offset 3|5 limit 3|6 live_cursor 9?",
            i
        ];
    }
}
class am extends ep {
    constructor(e){
        super(), this.data = new Uint8Array(0), this.offset = n.protoInt64.zero, this.totalBytes = n.protoInt64.zero, this.liveCursor = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new am).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new am).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new am).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(am, e, t);
    }
    static $() {
        return [
            "GetOriginCiJobLogResponse|1 job #0|2 data 12|3 offset 3|4 total_bytes 3|5 live_cursor 9",
            nm
        ];
    }
}
const cm = "origin.v1.";
class lm extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return cm;
    }
}
var um = (0, s.QT)(n.proto3, cm, "MergeQueueValidationCheckMode", [
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
], 1), dm = (0, s.QT)(n.proto3, cm, "MergeQueueConfigOutcome", [
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
class pm extends lm {
    constructor(e){
        super(), this.expectedHeadSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pm, e, t);
    }
    static $() {
        return [
            "EnqueueForMergeRequest|1 change #0|2 expected_head_sha 9",
            na
        ];
    }
}
class mm extends lm {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new mm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new mm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new mm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(mm, e, t);
    }
    static $() {
        return [
            "EnqueueForMergeResponse|1 entry #0",
            Nm
        ];
    }
}
class hm extends lm {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new hm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new hm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new hm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(hm, e, t);
    }
    static $() {
        return [
            "CancelMergeQueueEntryRequest|1 change #0",
            na
        ];
    }
}
class fm extends lm {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fm, e, t);
    }
    static $() {
        return [
            "CancelMergeQueueEntryResponse|1 entry #0",
            Nm
        ];
    }
}
class gm extends lm {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new gm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new gm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new gm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(gm, e, t);
    }
    static $() {
        return [
            "GetMergeQueueStatusRequest|1 change #0",
            na
        ];
    }
}
class ym extends lm {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ym).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ym).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ym).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ym, e, t);
    }
    static $() {
        return [
            "GetMergeQueueStatusResponse|1 entry #0",
            Nm
        ];
    }
}
class wm extends lm {
    constructor(e){
        super(), this.targetRef = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new wm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new wm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new wm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(wm, e, t);
    }
    static $() {
        return [
            "GetMergeQueueRequest|1 identifier #0|2 target_ref 9",
            i
        ];
    }
}
class vm extends lm {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new vm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new vm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new vm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(vm, e, t);
    }
    static $() {
        return [
            "GetMergeQueueResponse|1 queue #0",
            Pm
        ];
    }
}
class _m extends lm {
    constructor(e){
        super(), this.queueId = "", this.targetRef = "", this.speculationDepth = 0, this.maxConcurrentValidations = 0, this.validationTimeoutMs = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _m).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _m).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _m).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_m, e, t);
    }
    static $() {
        return [
            "MergeQueueConfig|1 queue_id 9|2 target_ref 9|3 enabled 8?|4 speculation_depth 13|5 max_concurrent_validations 13|6 validation_timeout_ms 4|7 validation_checks #0",
            Sm
        ];
    }
}
class Am extends lm {
    constructor(e){
        super(), this.actorKind = "", this.actorId = "", this.groupKey = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Am).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Am).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Am).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Am, e, t);
    }
    static $() {
        return [
            "MergeQueueRequiredCheck|1 actor_kind 9|2 actor_id 9|3 group_key 9|4 run_key 9?|5 name 9?"
        ];
    }
}
class Sm extends lm {
    constructor(e){
        super(), this.mode = um.UNSPECIFIED, this.checks = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Sm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Sm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Sm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Sm, e, t);
    }
    static $() {
        return [
            "MergeQueueValidationChecks|1 mode #0|2 checks #1*",
            um,
            Am
        ];
    }
}
class bm extends lm {
    constructor(e){
        super(), this.targetRef = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new bm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new bm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new bm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(bm, e, t);
    }
    static $() {
        return [
            "GetMergeQueueConfigRequest|1 identifier #0|2 target_ref 9",
            i
        ];
    }
}
class Em extends lm {
    constructor(e){
        super(), this.inheritedChecks = [], this.unresolvedChecks = [], this.prOnlyChecks = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Em).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Em).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Em).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Em, e, t);
    }
    static $() {
        return [
            "GetMergeQueueConfigResponse|1 config #0|2 inherited_checks #1*|3 unresolved_checks #1*|4 pr_only_checks #2*",
            _m,
            Am,
            Im
        ];
    }
}
class Im extends lm {
    constructor(e){
        super(), this.groupKey = "", this.runKey = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Im).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Im).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Im).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Im, e, t);
    }
    static $() {
        return [
            "MergeQueuePrOnlyCheck|1 group_key 9|2 run_key 9"
        ];
    }
}
class Cm extends lm {
    constructor(e){
        super(), this.targetRef = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Cm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Cm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Cm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Cm, e, t);
    }
    static $() {
        return [
            "EnableMergeQueueRequest|1 identifier #0|2 target_ref 9|3 speculation_depth 13?|4 max_concurrent_validations 13?|5 validation_timeout_ms 4?|6 validation_checks #1?",
            i,
            Sm
        ];
    }
}
class km extends lm {
    constructor(e){
        super(), this.outcome = dm.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new km).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new km).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new km).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(km, e, t);
    }
    static $() {
        return [
            "EnableMergeQueueResponse|1 config #0|2 outcome #1",
            _m,
            dm
        ];
    }
}
class xm extends lm {
    constructor(e){
        super(), this.targetRef = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xm, e, t);
    }
    static $() {
        return [
            "DisableMergeQueueRequest|1 identifier #0|2 target_ref 9",
            i
        ];
    }
}
class Tm extends lm {
    constructor(e){
        super(), this.outcome = dm.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Tm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Tm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Tm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Tm, e, t);
    }
    static $() {
        return [
            "DisableMergeQueueResponse|1 config #0|2 outcome #1",
            _m,
            dm
        ];
    }
}
class Rm extends lm {
    constructor(e){
        super(), this.targetRef = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Rm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Rm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Rm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Rm, e, t);
    }
    static $() {
        return [
            "UpdateMergeQueueConfigRequest|1 identifier #0|2 target_ref 9|3 speculation_depth 13?|4 max_concurrent_validations 13?|5 validation_timeout_ms 4?|6 validation_checks #1?",
            i,
            Sm
        ];
    }
}
class Bm extends lm {
    constructor(e){
        super(), this.outcome = dm.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Bm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Bm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Bm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Bm, e, t);
    }
    static $() {
        return [
            "UpdateMergeQueueConfigResponse|1 config #0|2 outcome #1",
            _m,
            dm
        ];
    }
}
class Pm extends lm {
    constructor(e){
        super(), this.targetRef = "", this.epoch = n.protoInt64.zero, this.entries = [], this.nodes = [], this.lands = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Pm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Pm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Pm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Pm, e, t);
    }
    static $() {
        return [
            "MergeQueueView|1 identifier #0|2 target_ref 9|3 epoch 4|4 entries #1*|5 nodes #2*|6 lands #3*",
            i,
            Jm,
            qm,
            Om
        ];
    }
}
class Jm extends lm {
    constructor(e){
        super(), this.entryId = "", this.pullRequests = [], this.position = 0, this.ciCancelCount = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Jm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Jm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Jm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Jm, e, t);
    }
    static $() {
        return [
            "MergeQueueViewEntry|1 entry_id 9|2 pull_requests #0*|3 position 13|4 status #1|5 enqueued_at #2|6 ci_cancel_count 13",
            Mm,
            Fm,
            n.Timestamp
        ];
    }
}
class Mm extends lm {
    constructor(e){
        super(), this.number = n.protoInt64.zero, this.headSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Mm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Mm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Mm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Mm, e, t);
    }
    static $() {
        return [
            "MergeQueueViewPullRequest|1 number 4|2 head_sha 9"
        ];
    }
}
class qm extends lm {
    constructor(e){
        super(), this.nodeId = "", this.state = Dm.UNSPECIFIED, this.changeNumbers = [], this.assumedChangeNumbers = [], this.checkRunGroups = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qm, e, t);
    }
    static $() {
        return [
            "MergeQueueViewNode|1 node_id 9|2 state #0|3 tested_sha 9?|4 chain_ref 9?|5 started_at #1|6 change_numbers 4*|7 assumed_change_numbers 4*|8 check_run_groups #2*",
            Dm,
            n.Timestamp,
            Ap
        ];
    }
}
var Dm = (0, s.QT)(n.proto3, cm, "MergeQueueViewNode.State", [
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
class Om extends lm {
    constructor(e){
        super(), this.moveId = "", this.expectedTrunkSha = "", this.landedSha = "", this.changeNumbers = [], this.bookedQueueEpoch = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Om).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Om).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Om).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Om, e, t);
    }
    static $() {
        return [
            "MergeQueueViewLand|1 move_id 9|2 expected_trunk_sha 9|3 landed_sha 9|4 change_numbers 4*|5 decided_at #0|6 landed_at #0|7 booked_queue_epoch 4",
            n.Timestamp
        ];
    }
}
class Nm extends lm {
    constructor(e){
        super(), this.entryId = "", this.targetRef = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Nm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Nm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Nm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Nm, e, t);
    }
    static $() {
        return [
            "MergeQueueEntry|1 entry_id 9|2 change #0|3 target_ref 9|4 status #1",
            na,
            Fm
        ];
    }
}
class Fm extends lm {
    constructor(e){
        super(), this.kind = Um.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Fm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Fm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Fm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Fm, e, t);
    }
    static $() {
        return [
            "MergeQueueEntryStatus|1 kind #0|2 position 13?|3 blocked_on 9?|4 tested_sha 9?|5 failure 9?|6 eviction_reason 9?",
            Um
        ];
    }
}
var Um = (0, s.QT)(n.proto3, cm, "MergeQueueEntryStatus.Kind", [
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
class Lm extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class $m extends Lm {
    constructor(e){
        super(), this.previewRestackConflict = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $m).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $m).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $m).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($m, e, t);
    }
    static $() {
        return [
            "GetChangeStackPageDataRequest|1 change #0|2 preview_restack_conflict 8",
            na
        ];
    }
}
class Qm extends Lm {
    constructor(e){
        super(), this.mirrorStatus = g.UNSPECIFIED, this.items = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Qm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Qm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Qm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Qm, e, t);
    }
    static $() {
        return [
            "GetChangeStackPageDataResponse|1 mirror_status #0|2 items #1*|3 reviewer_candidates #2",
            g,
            jm,
            yc
        ];
    }
}
class jm extends Lm {
    constructor(e){
        super(), this.versions = [], this.assignments = [], this.reviews = [], this.totalThreadCount = 0, this.unresolvedThreadCount = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new jm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new jm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new jm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(jm, e, t);
    }
    static $() {
        return [
            "ChangeStackPageItem|1 change #0|2 versions #1*|3 assignments #2*|4 reviews #3*|5 mergeability #4|6 total_thread_count 5|7 unresolved_thread_count 5",
            Zi,
            Xi,
            Ka,
            Ta,
            Np
        ];
    }
}
class Gm extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class Hm extends Gm {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Hm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Hm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Hm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Hm, e, t);
    }
    static $() {
        return [
            "GetReviewRequirementsRequest|1 change #0",
            na
        ];
    }
}
class zm extends Gm {
    constructor(e){
        super(), this.headSha = "", this.codeReviewGates = [], this.approvals = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new zm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new zm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new zm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(zm, e, t);
    }
    static $() {
        return [
            "GetReviewRequirementsResponse|1 head_sha 9|2 mergeability #0|3 gates #1|4 code_review_gates #2*|5 approvals #3*",
            Fp,
            Wm,
            eh,
            rh
        ];
    }
}
class Wm extends Gm {
    constructor(e){
        super(), this.enrollment = "", this.headGatesFileErrors = [], this.requiredGates = [], this.gatesRequired = !1, this.standInForChecks = [], this.gatesClearReview = !1, this.humanOnlyPaths = [], this.cannotStandInPaths = [], this.uncoveredPaths = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Wm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Wm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Wm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Wm, e, t);
    }
    static $() {
        return [
            "ReviewRequirementsGates|1 enrollment 9|2 head_gates_file_errors 9*|3 gates_file #0?|4 required_gates #1*|5 gates_required 8|6 stand_in_for_checks 9*|7 gates_clear_review 8|8 human_only_paths #2*|9 cannot_stand_in_paths #2*|10 uncovered_paths 9*|11 owner_scope #3?|12 human_approval_latest_version_required 8?",
            Vm,
            Km,
            Ym,
            Zm
        ];
    }
}
class Vm extends Gm {
    constructor(e){
        super(), this.status = "", this.validationErrors = [], this.landingBaseSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Vm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Vm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Vm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Vm, e, t);
    }
    static $() {
        return [
            "ReviewRequirementsGatesFile|1 status 9|2 unavailable_reason 9?|3 validation_errors 9*|4 landing_base_sha 9|5 blob_oid 9?|6 trunk_tip_blob_oid 9?|7 landing_base_has_gates_file 8?"
        ];
    }
}
class Km extends Gm {
    constructor(e){
        super(), this.gate = "", this.checkName = "", this.status = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Km).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Km).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Km).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Km, e, t);
    }
    static $() {
        return [
            "ReviewRequirementsGate|1 gate 9|2 check_name 9|3 status 9|4 report_url 9?|5 report_client 9?"
        ];
    }
}
class Ym extends Gm {
    constructor(e){
        super(), this.path = "", this.reason = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ym).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ym).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ym).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ym, e, t);
    }
    static $() {
        return [
            "ReviewRequirementsPath|1 path 9|2 reason 9|3 cause 9?"
        ];
    }
}
class Zm extends Gm {
    constructor(e){
        super(), this.kind = "", this.outside = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Zm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Zm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Zm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Zm, e, t);
    }
    static $() {
        return [
            "ReviewRequirementsOwnerScope|1 kind 9|2 reason 9?|3 outside #0*",
            Xm
        ];
    }
}
class Xm extends Gm {
    constructor(e){
        super(), this.source = "", this.anyHuman = !1, this.owners = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Xm).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Xm).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Xm).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Xm, e, t);
    }
    static $() {
        return [
            "ReviewRequirementsOwnerRequirement|1 source 9|2 any_human 8|3 owners 9*"
        ];
    }
}
class eh extends Gm {
    constructor(e){
        super(), this.checkName = "", this.state = "", this.waivedByGates = !1, this.blocking = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new eh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new eh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new eh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(eh, e, t);
    }
    static $() {
        return [
            "ReviewRequirementsCodeReviewGate|1 check_name 9|2 state 9|3 waived_by_gates 8|4 blocking 8|5 report #0?|6 owners_unknown_reason 9?",
            th
        ];
    }
}
class th extends Gm {
    constructor(e){
        super(), this.outcome = "", this.unblockReviewers = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new th).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new th).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new th).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(th, e, t);
    }
    static $() {
        return [
            "ReviewRequirementsCodeReviewGateReport|1 outcome 9|2 satisfied_policies 13?|3 total_policies 13?|4 unblock_reviewers 9*"
        ];
    }
}
class rh extends Gm {
    constructor(e){
        super(), this.source = "", this.owners = [], this.anyHuman = !1, this.paths = [], this.morePaths = 0, this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new rh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new rh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new rh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(rh, e, t);
    }
    static $() {
        return [
            "ReviewRequirementsApproval|1 source 9|2 owners 9*|3 any_human 8|4 paths 9*|5 more_paths 13|6 check_name 9?|7 scope 9?|8 required_count 13?|9 approved_count 13?|10 change_number 4"
        ];
    }
}
const nh = "origin.v1.";
class sh extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return nh;
    }
}
var oh = (0, s.QT)(n.proto3, nh, "RepoSelectionMode", [
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
], 1), ih = (0, s.QT)(n.proto3, nh, "AppInstallRequestOutcome", [
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
class ah extends sh {
    constructor(e){
        super(), this.id = "", this.displayName = "", this.webhookUrl = "", this.isPublic = !1, this.namespaceSlug = "", this.events = [], this.createdAt = "", this.updatedAt = "", this.installationRedirectUris = [], this.iconUrl = "", this.description = "", this.websiteUrl = "", this.defaultScopes = [], this.webhookDisabledAt = "", this.webhookDeliveryState = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ah).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ah).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ah).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ah, e, t);
    }
    static $() {
        return [
            "App|1 id 9|3 display_name 9|4 webhook_url 9|6 is_public 8|7 namespace_slug 9|8 events 9*|10 created_at 9|11 updated_at 9|12 installation_redirect_uris 9*|13 icon_url 9|14 description 9|15 website_url 9|16 default_scopes 9*|17 created_by #0|18 updated_by #0|19 webhook_disabled_at 9|20 webhook_delivery_state 9|21 marketplace_listing #1",
            qi,
            _h
        ];
    }
}
class ch extends sh {
    constructor(e){
        super(), this.installationCount = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ch).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ch).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ch).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ch, e, t);
    }
    static $() {
        return [
            "AppStats|1 installation_count 13"
        ];
    }
}
class lh extends sh {
    constructor(e){
        super(), this.kid = "", this.createdAt = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new lh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new lh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new lh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(lh, e, t);
    }
    static $() {
        return [
            "AppSigningKey|1 kid 9|2 created_at 9"
        ];
    }
}
class uh extends sh {
    constructor(e){
        super(), this.displayName = "", this.webhookUrl = "", this.namespaceSlug = "", this.publicKey = "", this.events = [], this.installationRedirectUris = [], this.description = "", this.websiteUrl = "", this.defaultScopes = [], this.workloadIdentityPolicies = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new uh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new uh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new uh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(uh, e, t);
    }
    static $() {
        return [
            "CreateAppRequest|2 display_name 9|3 webhook_url 9|6 namespace_slug 9|7 public_key 9|8 events 9*|10 installation_redirect_uris 9*|11 description 9|12 website_url 9|13 default_scopes 9*|14 workload_identity_policies #0*",
            Oh
        ];
    }
}
class dh extends sh {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new dh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new dh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new dh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(dh, e, t);
    }
    static $() {
        return [
            "CreateAppResponse|1 app #0",
            ah
        ];
    }
}
class ph extends sh {
    constructor(e){
        super(), this.id = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ph).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ph).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ph).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ph, e, t);
    }
    static $() {
        return [
            "GetAppRequest|1 id 9"
        ];
    }
}
class mh extends sh {
    constructor(e){
        super(), this.signingKeys = [], this.workloadIdentityPolicies = [], this.workloadIdentityEnabled = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new mh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new mh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new mh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(mh, e, t);
    }
    static $() {
        return [
            "GetAppResponse|1 app #0|2 stats #1|3 signing_keys #2*|4 workload_identity_policies #3*|5 workload_identity_enabled 8",
            ah,
            ch,
            lh,
            Oh
        ];
    }
}
class hh extends sh {
    constructor(e){
        super(), this.appId = "", this.publicKey = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new hh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new hh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new hh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(hh, e, t);
    }
    static $() {
        return [
            "AddAppSigningKeyRequest|1 app_id 9|2 public_key 9"
        ];
    }
}
class fh extends sh {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fh, e, t);
    }
    static $() {
        return [
            "AddAppSigningKeyResponse|1 key #0",
            lh
        ];
    }
}
class gh extends sh {
    constructor(e){
        super(), this.appId = "", this.kid = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new gh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new gh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new gh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(gh, e, t);
    }
    static $() {
        return [
            "RevokeAppSigningKeyRequest|1 app_id 9|2 kid 9"
        ];
    }
}
class yh extends sh {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new yh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new yh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new yh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(yh, e, t);
    }
    static $() {
        return [
            "RevokeAppSigningKeyResponse"
        ];
    }
}
class wh extends sh {
    constructor(e){
        super(), this.namespaceSlug = "", this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new wh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new wh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new wh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(wh, e, t);
    }
    static $() {
        return [
            "ListNamespaceAppsRequest|1 namespace_slug 9|2 page_size 13|3 page_token 9"
        ];
    }
}
class vh extends sh {
    constructor(e){
        super(), this.nextPageToken = "", this.appMetadata = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new vh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new vh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new vh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(vh, e, t);
    }
    static $() {
        return [
            "ListNamespaceAppsResponse|2 next_page_token 9|3 app_metadata #0*",
            Ah
        ];
    }
}
class _h extends sh {
    constructor(e){
        super(), this.slug = "", this.listedAt = "", this.tags = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _h).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _h).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _h).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_h, e, t);
    }
    static $() {
        return [
            "AppMarketplaceListing|1 slug 9|2 listed_at 9|3 tags 9*|4 publisher_id 3?"
        ];
    }
}
class Ah extends sh {
    constructor(e){
        super(), this.id = "", this.displayName = "", this.ownerNamespace = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ah).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ah).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ah).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ah, e, t);
    }
    static $() {
        return [
            "AppDisplayMetadata|1 id 9|3 display_name 9|4 icon_url 9?|5 description 9?|7 marketplace_listing #0|8 owner_namespace 9",
            _h
        ];
    }
}
class Sh extends sh {
    constructor(e){
        super(), this.pageSize = 0, this.pageToken = "", this.tag = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Sh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Sh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Sh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Sh, e, t);
    }
    static $() {
        return [
            "ListPublicAppsRequest|1 page_size 13|2 page_token 9|3 tag 9"
        ];
    }
}
class bh extends sh {
    constructor(e){
        super(), this.apps = [], this.nextPageToken = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new bh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new bh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new bh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(bh, e, t);
    }
    static $() {
        return [
            "ListPublicAppsResponse|1 apps #0*|2 next_page_token 9",
            Ah
        ];
    }
}
class Eh extends sh {
    constructor(e){
        super(), this.id = "", this.appId = "", this.namespaceSlug = "", this.createdAt = "", this.updatedAt = "", this.repoSelectionMode = oh.UNSPECIFIED, this.repoIds = [], this.acceptedScopes = [], this.reviewedDefaultScopes = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Eh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Eh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Eh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Eh, e, t);
    }
    static $() {
        return [
            "Installation|1 id 9|2 app_id 9|3 namespace_slug 9|4 created_at 9|5 updated_at 9|6 repo_selection_mode #0|7 repo_ids 9*|8 accepted_scopes 9*|9 suspended_at 9?|10 reviewed_default_scopes 9*|11 installed_by #1|12 updated_by #1?|13 suspended_by #1?",
            oh,
            qi
        ];
    }
}
class Ih extends sh {
    constructor(e){
        super(), this.id = "", this.appId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ih).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ih).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ih).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ih, e, t);
    }
    static $() {
        return [
            "InstallationReference|1 id 9|2 app_id 9|3 app_metadata #0",
            Ah
        ];
    }
}
class Ch extends sh {
    constructor(e){
        super(), this.appId = "", this.namespaceSlug = "", this.repoIds = [], this.requestedScopes = [], this.reviewedDefaultScopes = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ch).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ch).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ch).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ch, e, t);
    }
    static $() {
        return [
            "CreateInstallationRequest|1 app_id 9|2 namespace_slug 9|3 repo_ids 9*|4 requested_scopes 9*|5 state 9?|6 reviewed_default_scopes 9*"
        ];
    }
}
class kh extends sh {
    constructor(e){
        super(), this.installationReceipt = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new kh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new kh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new kh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(kh, e, t);
    }
    static $() {
        return [
            "CreateInstallationResponse|1 installation #0|2 installation_receipt 9",
            Eh
        ];
    }
}
class xh extends sh {
    constructor(e){
        super(), this.id = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xh, e, t);
    }
    static $() {
        return [
            "GetInstallationRequest|1 id 9"
        ];
    }
}
class Th extends sh {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Th).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Th).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Th).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Th, e, t);
    }
    static $() {
        return [
            "GetInstallationResponse|1 installation #0",
            Eh
        ];
    }
}
class Rh extends sh {
    constructor(e){
        super(), this.namespaceSlug = "", this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Rh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Rh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Rh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Rh, e, t);
    }
    static $() {
        return [
            "ListNamespaceInstallationsRequest|1 namespace_slug 9|2 page_size 13|3 page_token 9"
        ];
    }
}
class Bh extends sh {
    constructor(e){
        super(), this.installations = [], this.nextPageToken = "", this.installationReferences = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Bh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Bh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Bh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Bh, e, t);
    }
    static $() {
        return [
            "ListNamespaceInstallationsResponse|1 installations #0*|2 next_page_token 9|3 installation_references #1*",
            Eh,
            Ih
        ];
    }
}
class Ph extends sh {
    constructor(e){
        super(), this.id = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ph).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ph).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ph).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ph, e, t);
    }
    static $() {
        return [
            "UpdateAppRequest|1 id 9|2 display_name 9?|3 webhook_url 9?|5 events #0?|6 is_public 8?|8 installation_redirect_uris #1?|9 description 9?|10 website_url 9?|11 default_scopes #2?|12 workload_identity_policies #3?",
            Jh,
            Mh,
            qh,
            Nh
        ];
    }
}
class Jh extends sh {
    constructor(e){
        super(), this.events = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Jh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Jh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Jh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Jh, e, t);
    }
    static $() {
        return [
            "AppEventsReplace|1 events 9*"
        ];
    }
}
class Mh extends sh {
    constructor(e){
        super(), this.installationRedirectUris = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Mh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Mh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Mh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Mh, e, t);
    }
    static $() {
        return [
            "AppInstallationRedirectUrisReplace|1 installation_redirect_uris 9*"
        ];
    }
}
class qh extends sh {
    constructor(e){
        super(), this.scopes = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qh, e, t);
    }
    static $() {
        return [
            "AppDefaultScopesReplace|1 scopes 9*"
        ];
    }
}
class Dh extends sh {
    constructor(e){
        super(), this.path = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Dh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Dh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Dh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Dh, e, t);
    }
    static $() {
        return [
            "AppWorkloadIdentityClaimMatcher|1 path 9|2 exact 9?|3 regex 9?"
        ];
    }
}
class Oh extends sh {
    constructor(e){
        super(), this.issuerFamily = "", this.issuer = "", this.claims = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Oh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Oh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Oh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Oh, e, t);
    }
    static $() {
        return [
            "AppWorkloadIdentityPolicy|1 issuer_family 9|2 issuer 9|3 subject_exact 9?|4 subject_regex 9?|5 claims #0*|6 enabled 8?",
            Dh
        ];
    }
}
class Nh extends sh {
    constructor(e){
        super(), this.policies = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Nh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Nh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Nh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Nh, e, t);
    }
    static $() {
        return [
            "AppWorkloadIdentityPoliciesReplace|1 policies #0*",
            Oh
        ];
    }
}
class Fh extends sh {
    constructor(e){
        super(), this.appId = "", this.enabled = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Fh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Fh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Fh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Fh, e, t);
    }
    static $() {
        return [
            "SetAppWebhookDeliveryEnabledRequest|1 app_id 9|2 enabled 8"
        ];
    }
}
class Uh extends sh {
    constructor(e){
        super(), this.transitioned = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Uh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Uh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Uh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Uh, e, t);
    }
    static $() {
        return [
            "SetAppWebhookDeliveryEnabledResponse|1 app #0|2 transitioned 8",
            ah
        ];
    }
}
class Lh extends sh {
    constructor(e){
        super(), this.appId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Lh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Lh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Lh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Lh, e, t);
    }
    static $() {
        return [
            "SendAppWebhookTestDeliveryRequest|1 app_id 9"
        ];
    }
}
class $h extends sh {
    constructor(e){
        super(), this.delivered = !1, this.responseStatusCode = 0, this.deliveryId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $h).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $h).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $h).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($h, e, t);
    }
    static $() {
        return [
            "SendAppWebhookTestDeliveryResponse|1 delivered 8|2 response_status_code 5|3 delivery_id 9"
        ];
    }
}
class Qh extends sh {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Qh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Qh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Qh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Qh, e, t);
    }
    static $() {
        return [
            "UpdateAppResponse|1 app #0",
            ah
        ];
    }
}
class jh extends sh {
    constructor(e){
        super(), this.appId = "", this.icon = new Uint8Array(0), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new jh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new jh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new jh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(jh, e, t);
    }
    static $() {
        return [
            "SetAppIconRequest|1 app_id 9|2 icon 12"
        ];
    }
}
class Gh extends sh {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Gh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Gh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Gh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Gh, e, t);
    }
    static $() {
        return [
            "SetAppIconResponse|1 app #0",
            ah
        ];
    }
}
class Hh extends sh {
    constructor(e){
        super(), this.id = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Hh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Hh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Hh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Hh, e, t);
    }
    static $() {
        return [
            "DeleteAppRequest|1 id 9"
        ];
    }
}
class zh extends sh {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new zh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new zh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new zh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(zh, e, t);
    }
    static $() {
        return [
            "DeleteAppResponse"
        ];
    }
}
class Wh extends sh {
    constructor(e){
        super(), this.id = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Wh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Wh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Wh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Wh, e, t);
    }
    static $() {
        return [
            "DeleteInstallationRequest|1 id 9"
        ];
    }
}
class Vh extends sh {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Vh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Vh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Vh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Vh, e, t);
    }
    static $() {
        return [
            "DeleteInstallationResponse"
        ];
    }
}
class Kh extends sh {
    constructor(e){
        super(), this.includeGrantedScopes = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Kh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Kh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Kh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Kh, e, t);
    }
    static $() {
        return [
            "PreviewAppInstallationOptions|1 include_granted_scopes 8"
        ];
    }
}
class Yh extends sh {
    constructor(e){
        super(), this.namespaceSlug = "", this.appId = "", this.requestedScopes = [], this.summary = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Yh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Yh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Yh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Yh, e, t);
    }
    static $() {
        return [
            "PreviewAppInstallationRequest|1 namespace_slug 9|2 app_id 9|3 requested_scopes 9*|4 summary 9|5 redirect_uri 9?|6 options #0",
            Kh
        ];
    }
}
class Zh extends sh {
    constructor(e){
        super(), this.scope = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Zh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Zh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Zh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Zh, e, t);
    }
    static $() {
        return [
            "PreviewAppInstallationScope|1 scope 9"
        ];
    }
}
class Xh extends sh {
    constructor(e){
        super(), this.summary = "", this.requestedScopes = [], this.grantedScopes = [], this.appWebsiteUrl = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Xh).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Xh).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Xh).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Xh, e, t);
    }
    static $() {
        return [
            "PreviewAppInstallationResponse|12 app #0|5 summary 9|6 requested_scopes #1*|7 granted_scopes #1*|8 existing_installation #2|10 app_website_url 9",
            Ah,
            Zh,
            ef
        ];
    }
}
class ef extends sh {
    constructor(e){
        super(), this.installationId = "", this.repoSelectionMode = oh.UNSPECIFIED, this.repoIds = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ef).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ef).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ef).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ef, e, t);
    }
    static $() {
        return [
            "ExistingInstallation|1 installation_id 9|2 repo_selection_mode #0|3 repo_ids 9*",
            oh
        ];
    }
}
class tf extends sh {
    constructor(e){
        super(), this.id = "", this.displayName = "", this.namespaceSlug = "", this.iconUrl = "", this.description = "", this.websiteUrl = "", this.defaultScopes = [], this.installRedirectUri = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new tf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new tf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new tf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(tf, e, t);
    }
    static $() {
        return [
            "AppMetadata|1 id 9|3 display_name 9|4 namespace_slug 9|5 icon_url 9|6 description 9|7 website_url 9|8 default_scopes 9*|9 install_redirect_uri 9|10 is_public 8?|11 marketplace_listing #0",
            _h
        ];
    }
}
class rf extends sh {
    constructor(e){
        super(), this.id = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new rf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new rf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new rf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(rf, e, t);
    }
    static $() {
        return [
            "GetAppMetadataRequest|1 id 9"
        ];
    }
}
class nf extends sh {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new nf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new nf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new nf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(nf, e, t);
    }
    static $() {
        return [
            "GetAppMetadataResponse|1 app #0|2 stats #1",
            tf,
            ch
        ];
    }
}
class sf extends sh {
    constructor(e){
        super(), this.id = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new sf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new sf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new sf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(sf, e, t);
    }
    static $() {
        return [
            "SuspendInstallationRequest|1 id 9"
        ];
    }
}
class of extends sh {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new of).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new of).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new of).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(of, e, t);
    }
    static $() {
        return [
            "SuspendInstallationResponse"
        ];
    }
}
class af extends sh {
    constructor(e){
        super(), this.id = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new af).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new af).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new af).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(af, e, t);
    }
    static $() {
        return [
            "UnsuspendInstallationRequest|1 id 9"
        ];
    }
}
class cf extends sh {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new cf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new cf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new cf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(cf, e, t);
    }
    static $() {
        return [
            "UnsuspendInstallationResponse"
        ];
    }
}
class lf extends sh {
    constructor(e){
        super(), this.repoId = "", this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new lf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new lf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new lf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(lf, e, t);
    }
    static $() {
        return [
            "ListRepoInstallationsRequest|1 repo_id 9|2 page_size 13|3 page_token 9"
        ];
    }
}
class uf extends sh {
    constructor(e){
        super(), this.installations = [], this.nextPageToken = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new uf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new uf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new uf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(uf, e, t);
    }
    static $() {
        return [
            "ListRepoInstallationsResponse|1 installations #0*|2 next_page_token 9",
            Ih
        ];
    }
}
class df extends sh {
    constructor(e){
        super(), this.namespaceId = "", this.appId = "", this.repoIds = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new df).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new df).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new df).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(df, e, t);
    }
    static $() {
        return [
            "RequestAppInstallRequest|1 namespace_id 9|2 app_id 9|4 repo_ids 9*"
        ];
    }
}
class pf extends sh {
    constructor(e){
        super(), this.outcome = ih.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pf, e, t);
    }
    static $() {
        return [
            "RequestAppInstallResponse|1 outcome #0|2 cool_down_expires_at 9?",
            ih
        ];
    }
}
class mf extends sh {
    constructor(e){
        super(), this.namespaceId = "", this.appId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new mf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new mf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new mf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(mf, e, t);
    }
    static $() {
        return [
            "GetMyAppInstallRequestRequest|1 namespace_id 9|2 app_id 9"
        ];
    }
}
class hf extends sh {
    constructor(e){
        super(), this.hasPendingRequest = !1, this.pendingRepoSelectionMode = oh.UNSPECIFIED, this.pendingRepoIds = [], this.hasCurrentInstallation = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new hf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new hf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new hf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(hf, e, t);
    }
    static $() {
        return [
            "GetMyAppInstallRequestResponse|1 has_pending_request 8|2 pending_repo_selection_mode #0|3 pending_repo_ids 9*|4 has_current_installation 8|5 has_requestable_repositories 8?",
            oh
        ];
    }
}
class ff extends sh {
    constructor(e){
        super(), this.namespaceId = "", this.appId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ff).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ff).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ff).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ff, e, t);
    }
    static $() {
        return [
            "CancelMyAppInstallRequestRequest|1 namespace_id 9|2 app_id 9"
        ];
    }
}
class gf extends sh {
    constructor(e){
        super(), this.canceled = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new gf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new gf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new gf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(gf, e, t);
    }
    static $() {
        return [
            "CancelMyAppInstallRequestResponse|1 canceled 8"
        ];
    }
}
class yf extends sh {
    constructor(e){
        super(), this.id = "", this.createdAt = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new yf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new yf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new yf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(yf, e, t);
    }
    static $() {
        return [
            "AppInstallRequest|1 id 9|2 requester #0|4 created_at 9",
            qi
        ];
    }
}
class wf extends sh {
    constructor(e){
        super(), this.requests = [], this.requestedRepoSelectionMode = oh.UNSPECIFIED, this.requestedRepoIds = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new wf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new wf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new wf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(wf, e, t);
    }
    static $() {
        return [
            "AppInstallRequestGroup|1 app #0|2 requests #1*|3 requested_repo_selection_mode #2|4 requested_repo_ids 9*",
            Ah,
            yf,
            oh
        ];
    }
}
class vf extends sh {
    constructor(e){
        super(), this.namespaceId = "", this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new vf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new vf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new vf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(vf, e, t);
    }
    static $() {
        return [
            "ListAppInstallRequestsRequest|1 namespace_id 9|2 page_size 13|3 page_token 9"
        ];
    }
}
class _f extends sh {
    constructor(e){
        super(), this.groups = [], this.nextPageToken = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _f).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _f).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _f).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_f, e, t);
    }
    static $() {
        return [
            "ListAppInstallRequestsResponse|1 groups #0*|2 next_page_token 9",
            wf
        ];
    }
}
class Af extends sh {
    constructor(e){
        super(), this.namespaceId = "", this.appId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Af).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Af).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Af).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Af, e, t);
    }
    static $() {
        return [
            "DenyAppInstallRequestsRequest|1 namespace_id 9|2 app_id 9"
        ];
    }
}
class Sf extends sh {
    constructor(e){
        super(), this.deniedCount = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Sf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Sf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Sf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Sf, e, t);
    }
    static $() {
        return [
            "DenyAppInstallRequestsResponse|1 denied_count 13"
        ];
    }
}
class bf extends sh {
    constructor(e){
        super(), this.installationId = "", this.redirectUri = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new bf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new bf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new bf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(bf, e, t);
    }
    static $() {
        return [
            "PreviewAppUserConfirmationRequest|1 installation_id 9|2 redirect_uri 9|3 state 9?"
        ];
    }
}
class Ef extends sh {
    constructor(e){
        super(), this.userId = "", this.email = "", this.namespaceId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ef).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ef).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ef).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ef, e, t);
    }
    static $() {
        return [
            "AppUserConfirmationDisclosure|1 user_id 9|2 email 9|3 namespace_id 9"
        ];
    }
}
class If extends sh {
    constructor(e){
        super(), this.installationId = "", this.namespaceSlug = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new If).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new If).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new If).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(If, e, t);
    }
    static $() {
        return [
            "PreviewAppUserConfirmationResponse|1 app #0|2 installation_id 9|3 namespace_slug 9|4 disclosure #1",
            Ah,
            Ef
        ];
    }
}
class Cf extends sh {
    constructor(e){
        super(), this.installationId = "", this.redirectUri = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Cf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Cf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Cf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Cf, e, t);
    }
    static $() {
        return [
            "ConfirmAppUserConfirmationRequest|1 installation_id 9|2 redirect_uri 9|3 state 9?"
        ];
    }
}
class kf extends sh {
    constructor(e){
        super(), this.confirmationReceipt = "", this.redirectUri = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new kf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new kf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new kf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(kf, e, t);
    }
    static $() {
        return [
            "ConfirmAppUserConfirmationResponse|1 confirmation_receipt 9|2 redirect_uri 9"
        ];
    }
}
const xf = "origin.v1.";
class Tf extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return xf;
    }
}
var Rf = (0, s.QT)(n.proto3, xf, "AtlasFreshness", [
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
class Bf extends Tf {
    constructor(e){
        super(), this.path = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Bf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Bf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Bf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Bf, e, t);
    }
    static $() {
        return [
            "GetAtlasNodeRequest|1 repo #0|2 path 9",
            i
        ];
    }
}
class Pf extends Tf {
    constructor(e){
        super(), this.layer = "", this.label = "", this.contentMarkdown = "", this.digestJson = "", this.status = "", this.lastGenAt = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Pf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Pf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Pf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Pf, e, t);
    }
    static $() {
        return [
            "AtlasNodeLayerContent|1 layer 9|2 label 9|3 content_markdown 9|4 digest_json 9|5 status 9|6 last_gen_at 9"
        ];
    }
}
class Jf extends Tf {
    constructor(e){
        super(), this.lastCommit = "", this.layers = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Jf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Jf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Jf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Jf, e, t);
    }
    static $() {
        return [
            "GetAtlasNodeResponse|1 last_commit 9|2 layers #0*",
            Pf
        ];
    }
}
class Mf extends Tf {
    constructor(e){
        super(), this.layer = "", this.label = "", this.enabled = !1, this.generatedNodes = 0, this.pendingNodes = 0, this.lastGenAt = "", this.failedNodes = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Mf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Mf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Mf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Mf, e, t);
    }
    static $() {
        return [
            "AtlasLayerStatus|1 layer 9|2 label 9|3 enabled 8|4 generated_nodes 5|5 pending_nodes 5|6 last_gen_at 9|7 failed_nodes 5"
        ];
    }
}
class qf extends Tf {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qf, e, t);
    }
    static $() {
        return [
            "GetAtlasRepoStatusRequest|1 repo #0",
            i
        ];
    }
}
class Df extends Tf {
    constructor(e){
        super(), this.configured = !1, this.enabled = !1, this.model = "", this.nodeCount = 0, this.layers = [], this.refreshing = !1, this.freshness = Rf.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Df).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Df).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Df).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Df, e, t);
    }
    static $() {
        return [
            "GetAtlasRepoStatusResponse|1 configured 8|2 enabled 8|3 model 9|4 node_count 5|5 layers #0*|6 refreshing 8|7 freshness #1",
            Mf,
            Rf
        ];
    }
}
class Of extends Tf {
    constructor(e){
        super(), this.enabled = !1, this.enabledLayers = [], this.freshness = Rf.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Of).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Of).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Of).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Of, e, t);
    }
    static $() {
        return [
            "SetAtlasRepoConfigRequest|1 repo #0|2 enabled 8|3 enabled_layers 9*|4 freshness #1",
            i,
            Rf
        ];
    }
}
class Nf extends Tf {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Nf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Nf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Nf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Nf, e, t);
    }
    static $() {
        return [
            "SetAtlasRepoConfigResponse|1 status #0",
            Df
        ];
    }
}
class Ff extends Tf {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ff).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ff).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ff).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ff, e, t);
    }
    static $() {
        return [
            "RefreshAtlasRepoRequest|1 repo #0",
            i
        ];
    }
}
class Uf extends Tf {
    constructor(e){
        super(), this.headSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Uf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Uf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Uf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Uf, e, t);
    }
    static $() {
        return [
            "RefreshAtlasRepoResponse|1 head_sha 9"
        ];
    }
}
class Lf extends Tf {
    constructor(e){
        super(), this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Lf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Lf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Lf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Lf, e, t);
    }
    static $() {
        return [
            "ListAtlasNodePathsRequest|1 repo #0|2 page_size 13|3 page_token 9",
            i
        ];
    }
}
class $f extends Tf {
    constructor(e){
        super(), this.path = "", this.diagramKinds = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $f).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $f).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $f).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($f, e, t);
    }
    static $() {
        return [
            "AtlasNodePathEntry|1 path 9|2 diagram_kinds 9*"
        ];
    }
}
class Qf extends Tf {
    constructor(e){
        super(), this.paths = [], this.nextPageToken = "", this.entries = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Qf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Qf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Qf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Qf, e, t);
    }
    static $() {
        return [
            "ListAtlasNodePathsResponse|1 paths 9*|2 next_page_token 9|3 entries #0*",
            $f
        ];
    }
}
const jf = "origin.v1.";
class Gf extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return jf;
    }
}
var Hf = (0, s.QT)(n.proto3, jf, "RulesetEnforcement", [
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
], 1), zf = (0, s.QT)(n.proto3, jf, "RulesetKind", [
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
], 1), Wf = (0, s.QT)(n.proto3, jf, "RulesetBypassMode", [
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
], 1), Vf = (0, s.QT)(n.proto3, jf, "RulesetBypassActorKind", [
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
class Kf extends Gf {
    constructor(e){
        super(), this.id = "", this.ruleType = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Kf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Kf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Kf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Kf, e, t);
    }
    static $() {
        return [
            "RulesetRule|1 id 9|2 rule_type 9|3 parameters #0",
            n.Struct
        ];
    }
}
class Yf extends Gf {
    constructor(e){
        super(), this.id = "", this.bypassMode = Wf.UNSPECIFIED, this.actorKind = Vf.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Yf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Yf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Yf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Yf, e, t);
    }
    static $() {
        return [
            "RulesetBypassActor|1 id 9|2 bypass_mode #0|3 actor_kind #1|4 actor_payload #2",
            Wf,
            Vf,
            n.Struct
        ];
    }
}
class Zf extends Gf {
    constructor(e){
        super(), this.id = "", this.name = "", this.description = "", this.enforcement = Hf.UNSPECIFIED, this.kind = zf.UNSPECIFIED, this.includedRefNames = [], this.excludedRefNames = [], this.rules = [], this.bypassActors = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Zf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Zf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Zf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Zf, e, t);
    }
    static $() {
        return [
            "Ruleset|1 id 9|2 repo #0|3 name 9|4 description 9|5 enforcement #1|6 kind #2|7 included_ref_names 9*|8 excluded_ref_names 9*|9 rules #3*|10 bypass_actors #4*",
            i,
            Hf,
            zf,
            Kf,
            Yf
        ];
    }
}
class Xf extends Gf {
    constructor(e){
        super(), this.ruleType = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Xf).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Xf).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Xf).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Xf, e, t);
    }
    static $() {
        return [
            "RulesetRuleInput|1 rule_type 9|2 parameters #0",
            n.Struct
        ];
    }
}
class eg extends Gf {
    constructor(e){
        super(), this.bypassMode = Wf.UNSPECIFIED, this.actorKind = Vf.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new eg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new eg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new eg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(eg, e, t);
    }
    static $() {
        return [
            "RulesetBypassActorInput|1 bypass_mode #0|2 actor_kind #1|3 actor_payload #2",
            Wf,
            Vf,
            n.Struct
        ];
    }
}
class tg extends Gf {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new tg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new tg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new tg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(tg, e, t);
    }
    static $() {
        return [
            "ListRulesetsRequest|1 repo #0",
            i
        ];
    }
}
class rg extends Gf {
    constructor(e){
        super(), this.rulesets = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new rg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new rg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new rg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(rg, e, t);
    }
    static $() {
        return [
            "ListRulesetsResponse|1 rulesets #0*",
            Zf
        ];
    }
}
class ng extends Gf {
    constructor(e){
        super(), this.rulesetId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ng).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ng).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ng).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ng, e, t);
    }
    static $() {
        return [
            "GetRulesetRequest|1 repo #0|2 ruleset_id 9",
            i
        ];
    }
}
class sg extends Gf {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new sg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new sg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new sg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(sg, e, t);
    }
    static $() {
        return [
            "GetRulesetResponse|1 ruleset #0",
            Zf
        ];
    }
}
class og extends Gf {
    constructor(e){
        super(), this.name = "", this.description = "", this.enforcement = Hf.UNSPECIFIED, this.kind = zf.UNSPECIFIED, this.includedRefNames = [], this.excludedRefNames = [], this.rules = [], this.bypassActors = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new og).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new og).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new og).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(og, e, t);
    }
    static $() {
        return [
            "UpsertRulesetRequest|1 repo #0|2 ruleset_id 9?|3 name 9|4 description 9|5 enforcement #1|6 kind #2|7 included_ref_names 9*|8 excluded_ref_names 9*|9 rules #3*|10 bypass_actors #4*",
            i,
            Hf,
            zf,
            Xf,
            eg
        ];
    }
}
class ig extends Gf {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ig).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ig).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ig).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ig, e, t);
    }
    static $() {
        return [
            "UpsertRulesetResponse|1 ruleset #0",
            Zf
        ];
    }
}
class ag extends Gf {
    constructor(e){
        super(), this.rulesetId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ag).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ag).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ag).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ag, e, t);
    }
    static $() {
        return [
            "DeleteRulesetRequest|1 repo #0|2 ruleset_id 9",
            i
        ];
    }
}
class cg extends Gf {
    constructor(e){
        super(), this.rulesetId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new cg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new cg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new cg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(cg, e, t);
    }
    static $() {
        return [
            "DeleteRulesetResponse|1 ruleset_id 9"
        ];
    }
}
class lg extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class ug extends lg {
    constructor(e){
        super(), this.id = "", this.repoUuid = "", this.name = "", this.color = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ug).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ug).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ug).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ug, e, t);
    }
    static $() {
        return [
            "Label|1 id 9|2 repo_uuid 9|3 name 9|4 color 9|5 description 9?|6 created_at #0|7 updated_at #0",
            n.Timestamp
        ];
    }
}
class dg extends lg {
    constructor(e){
        super(), this.name = "", this.color = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new dg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new dg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new dg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(dg, e, t);
    }
    static $() {
        return [
            "CreateLabelRequest|1 repo #0|2 name 9|3 color 9|4 description 9?",
            i
        ];
    }
}
class pg extends lg {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pg, e, t);
    }
    static $() {
        return [
            "CreateLabelResponse|1 label #0",
            ug
        ];
    }
}
class mg extends lg {
    constructor(e){
        super(), this.labelId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new mg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new mg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new mg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(mg, e, t);
    }
    static $() {
        return [
            "UpdateLabelRequest|1 repo #0|2 label_id 9|3 name 9?|4 color 9?|5 description 9?",
            i
        ];
    }
}
class hg extends lg {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new hg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new hg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new hg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(hg, e, t);
    }
    static $() {
        return [
            "UpdateLabelResponse|1 label #0",
            ug
        ];
    }
}
class fg extends lg {
    constructor(e){
        super(), this.labelId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fg, e, t);
    }
    static $() {
        return [
            "DeleteLabelRequest|1 repo #0|2 label_id 9",
            i
        ];
    }
}
class gg extends lg {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new gg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new gg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new gg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(gg, e, t);
    }
    static $() {
        return [
            "DeleteLabelResponse"
        ];
    }
}
class yg extends lg {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new yg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new yg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new yg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(yg, e, t);
    }
    static $() {
        return [
            "ListLabelsRequest|1 repo #0|2 cursor 9?|3 limit 5?|4 search_query 9?",
            i
        ];
    }
}
class wg extends lg {
    constructor(e){
        super(), this.labels = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new wg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new wg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new wg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(wg, e, t);
    }
    static $() {
        return [
            "ListLabelsResponse|1 labels #0*|2 next_cursor 9?",
            ug
        ];
    }
}
class vg extends lg {
    constructor(e){
        super(), this.name = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new vg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new vg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new vg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(vg, e, t);
    }
    static $() {
        return [
            "GetLabelByNameRequest|1 repo #0|2 name 9",
            i
        ];
    }
}
class _g extends lg {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _g).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _g).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _g).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_g, e, t);
    }
    static $() {
        return [
            "GetLabelByNameResponse|1 label #0?",
            ug
        ];
    }
}
class Ag extends lg {
    constructor(e){
        super(), this.labelId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ag).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ag).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ag).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ag, e, t);
    }
    static $() {
        return [
            "AddLabelToChangeRequest|1 change #0|2 label_id 9",
            na
        ];
    }
}
class Sg extends lg {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Sg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Sg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Sg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Sg, e, t);
    }
    static $() {
        return [
            "AddLabelToChangeResponse"
        ];
    }
}
class bg extends lg {
    constructor(e){
        super(), this.labelId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new bg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new bg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new bg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(bg, e, t);
    }
    static $() {
        return [
            "RemoveLabelFromChangeRequest|1 change #0|2 label_id 9",
            na
        ];
    }
}
class Eg extends lg {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Eg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Eg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Eg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Eg, e, t);
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
    constructor(e){
        super(), this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Cg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Cg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Cg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Cg, e, t);
    }
    static $() {
        return [
            "WatchChangeSyncEventsRequest|1 identifier #0|2 change_number 4",
            i
        ];
    }
}
class kg extends Ig {
    constructor(e){
        super(), this.frame = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new kg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new kg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new kg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(kg, e, t);
    }
    static $() {
        return [
            "WatchChangeSyncEventsResponse|1 snapshot_json 9 frame|2 event_json 9 frame|3 heartbeat #0 frame",
            xg
        ];
    }
}
class xg extends Ig {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xg, e, t);
    }
    static $() {
        return [
            "SyncEventHeartbeat"
        ];
    }
}
class Tg extends Ig {
    constructor(e){
        super(), this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Tg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Tg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Tg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Tg, e, t);
    }
    static $() {
        return [
            "ChangeSyncTarget|1 identifier #0|2 change_number 4|3 resume #1?",
            i,
            Rg
        ];
    }
}
class Rg extends Ig {
    constructor(e){
        super(), this.streamSeqs = {}, this.headSha = "", this.headVersionNumber = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Rg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Rg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Rg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Rg, e, t);
    }
    static $() {
        return [
            "SyncResumeCursor|1 stream_seqs 9,4|2 head_sha 9|3 head_version_number 13"
        ];
    }
}
class Bg extends Ig {
    constructor(e){
        super(), this.sha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Bg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Bg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Bg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Bg, e, t);
    }
    static $() {
        return [
            "ShaSyncTarget|1 identifier #0|2 sha 9",
            i
        ];
    }
}
class Pg extends Ig {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Pg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Pg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Pg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Pg, e, t);
    }
    static $() {
        return [
            "RepoSyncTarget|1 identifier #0",
            i
        ];
    }
}
class Jg extends Ig {
    constructor(e){
        super(), this.ref = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Jg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Jg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Jg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Jg, e, t);
    }
    static $() {
        return [
            "RefSyncTarget|1 identifier #0|2 ref 9",
            i
        ];
    }
}
class Mg extends Ig {
    constructor(e){
        super(), this.targetRef = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Mg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Mg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Mg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Mg, e, t);
    }
    static $() {
        return [
            "QueueSyncTarget|1 identifier #0|2 target_ref 9",
            i
        ];
    }
}
class qg extends Ig {
    constructor(e){
        super(), this.kind = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qg, e, t);
    }
    static $() {
        return [
            "SyncTarget|1 sha #0 kind|2 repo #1 kind|3 ref #2 kind|4 queue #3 kind",
            Bg,
            Pg,
            Jg,
            Mg
        ];
    }
}
class Dg extends Ig {
    constructor(e){
        super(), this.subscriptions = [], this.targets = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Dg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Dg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Dg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Dg, e, t);
    }
    static $() {
        return [
            "WatchChangeSyncEventsV2Request|1 subscriptions #0*|2 targets #1*",
            Tg,
            qg
        ];
    }
}
class Og extends Ig {
    constructor(e){
        super(), this.connectionId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Og).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Og).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Og).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Og, e, t);
    }
    static $() {
        return [
            "WatchSyncSessionStarted|1 connection_id 9"
        ];
    }
}
class Ng extends Ig {
    constructor(e){
        super(), this.snapshotJson = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ng).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ng).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ng).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ng, e, t);
    }
    static $() {
        return [
            "TaggedSyncSnapshot|1 target #0|2 snapshot_json 9|3 sync_target #1",
            Tg,
            qg
        ];
    }
}
class Fg extends Ig {
    constructor(e){
        super(), this.eventJson = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Fg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Fg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Fg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Fg, e, t);
    }
    static $() {
        return [
            "TaggedSyncEvent|1 target #0|2 event_json 9|3 sync_target #1",
            Tg,
            qg
        ];
    }
}
class Ug extends Ig {
    constructor(e){
        super(), this.reason = "", this.message = "", this.updateId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ug).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ug).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ug).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ug, e, t);
    }
    static $() {
        return [
            "WatchSyncSubscriptionNack|1 target #0|2 reason 9|3 message 9|4 sync_target #1|5 update_id 9",
            Tg,
            qg
        ];
    }
}
class Lg extends Ig {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Lg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Lg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Lg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Lg, e, t);
    }
    static $() {
        return [
            "WatchSyncSubscriptionRemoved|1 target #0|2 sync_target #1",
            Tg,
            qg
        ];
    }
}
class $g extends Ig {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $g).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $g).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $g).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($g, e, t);
    }
    static $() {
        return [
            "WatchSyncSubscriptionResumed|1 target #0",
            Tg
        ];
    }
}
class Qg extends Ig {
    constructor(e){
        super(), this.frame = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Qg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Qg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Qg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Qg, e, t);
    }
    static $() {
        return [
            "WatchChangeSyncEventsV2Response|1 session #0 frame|2 snapshot #1 frame|3 event #2 frame|4 heartbeat #3 frame|5 nack #4 frame|6 removed #5 frame|7 resumed #6 frame",
            Og,
            Ng,
            Fg,
            xg,
            Ug,
            Lg,
            $g
        ];
    }
}
class jg extends Ig {
    constructor(e){
        super(), this.connectionId = "", this.add = [], this.remove = [], this.addTargets = [], this.removeTargets = [], this.updateId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new jg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new jg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new jg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(jg, e, t);
    }
    static $() {
        return [
            "UpdateWatchChangeSyncSubscriptionsRequest|1 connection_id 9|2 add #0*|3 remove #0*|4 add_targets #1*|5 remove_targets #1*|6 update_id 9",
            Tg,
            qg
        ];
    }
}
class Gg extends Ig {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Gg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Gg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Gg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Gg, e, t);
    }
    static $() {
        return [
            "UpdateWatchChangeSyncSubscriptionsResponse"
        ];
    }
}
class Hg extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "origin.v1.";
    }
}
class zg extends Hg {
    constructor(e){
        super(), this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new zg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new zg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new zg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(zg, e, t);
    }
    static $() {
        return [
            "GetChangeSyncSnapshotRequest|1 identifier #0|2 change_number 4",
            i
        ];
    }
}
class Wg extends Hg {
    constructor(e){
        super(), this.snapshotJson = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Wg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Wg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Wg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Wg, e, t);
    }
    static $() {
        return [
            "GetChangeSyncSnapshotResponse|1 snapshot_json 9|2 viewer_state #0",
            Vg
        ];
    }
}
class Vg extends Hg {
    constructor(e){
        super(), this.pendingReviews = [], this.pendingThreads = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Vg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Vg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Vg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Vg, e, t);
    }
    static $() {
        return [
            "ChangeSyncViewerState|1 timeline_viewed_at #0?|2 pending_reviews #1*|3 pending_threads #2*",
            n.Timestamp,
            Ta,
            Yu
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
class Yg extends Kg {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Yg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Yg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Yg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Yg, e, t);
    }
    static $() {
        return [
            "GithubOutageDrillProbeRequest"
        ];
    }
}
class Zg extends Kg {
    constructor(e){
        super(), this.intercepted = !1, this.attemptCount = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Zg).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Zg).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Zg).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Zg, e, t);
    }
    static $() {
        return [
            "GithubOutageDrillProbeResponse|1 intercepted 8|2 attempt_count 13"
        ];
    }
}
const Xg = {
    typeName: "origin.v1.OriginService",
    methods: {
        listHostedRepos: {
            name: "ListHostedRepos",
            I: _,
            O: A,
            kind: n.MethodKind.Unary
        },
        createRepo: {
            name: "CreateRepo",
            I: b,
            O: E,
            kind: n.MethodKind.Unary
        },
        createRepoAndEnsureUserNamespace: {
            name: "CreateRepoAndEnsureUserNamespace",
            I: b,
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
            I: k,
            O: E,
            kind: n.MethodKind.Unary
        },
        filterMirrorableGithubRepos: {
            name: "FilterMirrorableGithubRepos",
            I: x,
            O: T,
            kind: n.MethodKind.Unary
        },
        deleteRepo: {
            name: "DeleteRepo",
            I: ee,
            O: te,
            kind: n.MethodKind.Unary
        },
        deleteMirroredRepo: {
            name: "DeleteMirroredRepo",
            I: re,
            O: ne,
            kind: n.MethodKind.Unary
        },
        getRepo: {
            name: "GetRepo",
            I: ge,
            O: be,
            kind: n.MethodKind.Unary
        },
        getRepoWithMirrorInfo: {
            name: "GetRepoWithMirrorInfo",
            I: ge,
            O: Ie,
            kind: n.MethodKind.Unary
        },
        getRepoByGithubMirror: {
            name: "GetRepoByGithubMirror",
            I: Ce,
            O: Ie,
            kind: n.MethodKind.Unary
        },
        recordCloneKitUsage: {
            name: "RecordCloneKitUsage",
            I: xe,
            O: Te,
            kind: n.MethodKind.Unary
        },
        updateRepoMergeSettings: {
            name: "UpdateRepoMergeSettings",
            I: oe,
            O: ie,
            kind: n.MethodKind.Unary
        },
        updateRepoBranchDeletionSetting: {
            name: "UpdateRepoBranchDeletionSetting",
            I: ae,
            O: ce,
            kind: n.MethodKind.Unary
        },
        listRepoCloneKits: {
            name: "ListRepoCloneKits",
            I: le,
            O: ue,
            kind: n.MethodKind.Unary
        },
        updateRepoVisibility: {
            name: "UpdateRepoVisibility",
            I: pe,
            O: me,
            kind: n.MethodKind.Unary
        },
        updateRepoDefaultBranch: {
            name: "UpdateRepoDefaultBranch",
            I: he,
            O: fe,
            kind: n.MethodKind.Unary
        },
        detachRepoMirror: {
            name: "DetachRepoMirror",
            I: R,
            O: B,
            kind: n.MethodKind.Unary
        },
        reattachRepoMirror: {
            name: "ReattachRepoMirror",
            I: P,
            O: M,
            kind: n.MethodKind.Unary
        },
        transitionRepoMirrorStatus: {
            name: "TransitionRepoMirrorStatus",
            I: $,
            O: Q,
            kind: n.MethodKind.Unary
        },
        forceRepoMirrorCutover: {
            name: "ForceRepoMirrorCutover",
            I: j,
            O: G,
            kind: n.MethodKind.Unary
        },
        syncMirror: {
            name: "SyncMirror",
            I: H,
            O: z,
            kind: n.MethodKind.Unary
        },
        createRepoMirrorDeployKey: {
            name: "CreateRepoMirrorDeployKey",
            I: D,
            O,
            kind: n.MethodKind.Unary
        },
        getRepoMirrorDeployKey: {
            name: "GetRepoMirrorDeployKey",
            I: N,
            O: F,
            kind: n.MethodKind.Unary
        },
        deleteRepoMirrorDeployKey: {
            name: "DeleteRepoMirrorDeployKey",
            I: U,
            O: L,
            kind: n.MethodKind.Unary
        },
        getMirrorTransitionJob: {
            name: "GetMirrorTransitionJob",
            I: K,
            O: Y,
            kind: n.MethodKind.Unary
        },
        getActiveMirrorTransitionJob: {
            name: "GetActiveMirrorTransitionJob",
            I: W,
            O: V,
            kind: n.MethodKind.Unary
        },
        getRepoNamespace: {
            name: "GetRepoNamespace",
            I: Fe,
            O: Ue,
            kind: n.MethodKind.Unary
        },
        doesNamespaceExistForTeam: {
            name: "DoesNamespaceExistForTeam",
            I: Le,
            O: $e,
            kind: n.MethodKind.Unary
        },
        getAuthorizedNamespaces: {
            name: "GetAuthorizedNamespaces",
            I: Qe,
            O: je,
            kind: n.MethodKind.Unary
        },
        createOriginNamespace: {
            name: "CreateOriginNamespace",
            I: Be,
            O: Pe,
            kind: n.MethodKind.Unary
        },
        setupTeamNamespace: {
            name: "SetupTeamNamespace",
            I: Je,
            O: Me,
            kind: n.MethodKind.Unary
        },
        setupUserNamespace: {
            name: "SetupUserNamespace",
            I: qe,
            O: Ne,
            kind: n.MethodKind.Unary
        },
        suggestOriginNamespace: {
            name: "SuggestOriginNamespace",
            I: De,
            O: Oe,
            kind: n.MethodKind.Unary
        },
        listRepoAssignablePolicies: {
            name: "ListRepoAssignablePolicies",
            I: tt,
            O: rt,
            kind: n.MethodKind.Unary
        },
        getRepoTeamAccess: {
            name: "GetRepoTeamAccess",
            I: ot,
            O: it,
            kind: n.MethodKind.Unary
        },
        listRepoGrants: {
            name: "ListRepoGrants",
            I: lt,
            O: ut,
            kind: n.MethodKind.Unary
        },
        setRepoTeamAccess: {
            name: "SetRepoTeamAccess",
            I: dt,
            O: pt,
            kind: n.MethodKind.Unary
        },
        setRepoUserAccess: {
            name: "SetRepoUserAccess",
            I: mt,
            O: ht,
            kind: n.MethodKind.Unary
        },
        createRepoShareInvite: {
            name: "CreateRepoShareInvite",
            I: qt,
            O: Dt,
            kind: n.MethodKind.Unary
        },
        createRepoShareBatchInvites: {
            name: "CreateRepoShareBatchInvites",
            I: Ot,
            O: Ut,
            kind: n.MethodKind.Unary
        },
        updateRepoShareInvite: {
            name: "UpdateRepoShareInvite",
            I: Lt,
            O: $t,
            kind: n.MethodKind.Unary
        },
        revokeRepoShareInvite: {
            name: "RevokeRepoShareInvite",
            I: Qt,
            O: jt,
            kind: n.MethodKind.Unary
        },
        listRepoShareInvites: {
            name: "ListRepoShareInvites",
            I: Gt,
            O: Ht,
            kind: n.MethodKind.Unary
        },
        getShareInviteByToken: {
            name: "GetShareInviteByToken",
            I: Wt,
            O: Vt,
            kind: n.MethodKind.Unary
        },
        declineShareInvite: {
            name: "DeclineShareInvite",
            I: Kt,
            O: Yt,
            kind: n.MethodKind.Unary
        },
        acceptShareInvite: {
            name: "AcceptShareInvite",
            I: Zt,
            O: Xt,
            kind: n.MethodKind.Unary
        },
        listMyShareInvites: {
            name: "ListMyShareInvites",
            I: tr,
            O: rr,
            kind: n.MethodKind.Unary
        },
        listMyExternalRepositories: {
            name: "ListMyExternalRepositories",
            I: sr,
            O: or,
            kind: n.MethodKind.Unary
        },
        leaveMyExternalRepository: {
            name: "LeaveMyExternalRepository",
            I: dr,
            O: pr,
            kind: n.MethodKind.Unary
        },
        setRepoGroupAccess: {
            name: "SetRepoGroupAccess",
            I: ft,
            O: gt,
            kind: n.MethodKind.Unary
        },
        hasOriginPermission: {
            name: "HasOriginPermission",
            I: Ze,
            O: Xe,
            kind: n.MethodKind.Unary
        },
        getNamespaceTeamAccess: {
            name: "GetNamespaceTeamAccess",
            I: wt,
            O: vt,
            kind: n.MethodKind.Unary
        },
        setNamespaceTeamAccess: {
            name: "SetNamespaceTeamAccess",
            I: _t,
            O: At,
            kind: n.MethodKind.Unary
        },
        listNamespaceGrants: {
            name: "ListNamespaceGrants",
            I: bt,
            O: Et,
            kind: n.MethodKind.Unary
        },
        setNamespaceUserAccess: {
            name: "SetNamespaceUserAccess",
            I: It,
            O: Ct,
            kind: n.MethodKind.Unary
        },
        setNamespaceGroupAccess: {
            name: "SetNamespaceGroupAccess",
            I: kt,
            O: xt,
            kind: n.MethodKind.Unary
        },
        listNamespaceAssignablePolicies: {
            name: "ListNamespaceAssignablePolicies",
            I: Pt,
            O: Jt,
            kind: n.MethodKind.Unary
        },
        listGroupGrantsInNamespace: {
            name: "ListGroupGrantsInNamespace",
            I: Tt,
            O: Bt,
            kind: n.MethodKind.Unary
        },
        getNamespaceSshCertificateAuthorities: {
            name: "GetNamespaceSshCertificateAuthorities",
            I: fr,
            O: gr,
            kind: n.MethodKind.Unary
        },
        addNamespaceSshCertificateAuthority: {
            name: "AddNamespaceSshCertificateAuthority",
            I: yr,
            O: wr,
            kind: n.MethodKind.Unary
        },
        removeNamespaceSshCertificateAuthority: {
            name: "RemoveNamespaceSshCertificateAuthority",
            I: vr,
            O: _r,
            kind: n.MethodKind.Unary
        },
        setNamespaceSshRequireCertificates: {
            name: "SetNamespaceSshRequireCertificates",
            I: Ar,
            O: Sr,
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
            I: kr,
            O: xr,
            kind: n.MethodKind.Unary
        },
        updateNamespaceInboundIpAllowlistEntry: {
            name: "UpdateNamespaceInboundIpAllowlistEntry",
            I: Tr,
            O: Rr,
            kind: n.MethodKind.Unary
        },
        deleteNamespaceInboundIpAllowlistEntry: {
            name: "DeleteNamespaceInboundIpAllowlistEntry",
            I: Br,
            O: Pr,
            kind: n.MethodKind.Unary
        },
        setNamespaceInboundIpAllowlistEnabled: {
            name: "SetNamespaceInboundIpAllowlistEnabled",
            I: Jr,
            O: Mr,
            kind: n.MethodKind.Unary
        },
        addSshPublicKey: {
            name: "AddSshPublicKey",
            I: Or,
            O: Nr,
            kind: n.MethodKind.Unary
        },
        listSshPublicKeys: {
            name: "ListSshPublicKeys",
            I: Fr,
            O: Ur,
            kind: n.MethodKind.Unary
        },
        deleteSshPublicKey: {
            name: "DeleteSshPublicKey",
            I: Lr,
            O: $r,
            kind: n.MethodKind.Unary
        },
        upsertOriginUserSlackNotification: {
            name: "UpsertOriginUserSlackNotification",
            I: zr,
            O: Wr,
            kind: n.MethodKind.Unary
        },
        deleteOriginUserSlackNotification: {
            name: "DeleteOriginUserSlackNotification",
            I: Vr,
            O: Kr,
            kind: n.MethodKind.Unary
        },
        getOriginUserSlackNotification: {
            name: "GetOriginUserSlackNotification",
            I: Yr,
            O: Zr,
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
            O: cn,
            kind: n.MethodKind.Unary
        },
        createOriginUserSlackReviewReminder: {
            name: "CreateOriginUserSlackReviewReminder",
            I: hn,
            O: fn,
            kind: n.MethodKind.Unary
        },
        updateOriginUserSlackReviewReminder: {
            name: "UpdateOriginUserSlackReviewReminder",
            I: gn,
            O: yn,
            kind: n.MethodKind.Unary
        },
        listOriginUserSlackReviewReminders: {
            name: "ListOriginUserSlackReviewReminders",
            I: wn,
            O: vn,
            kind: n.MethodKind.Unary
        },
        getOriginUserSlackReviewReminder: {
            name: "GetOriginUserSlackReviewReminder",
            I: _n,
            O: An,
            kind: n.MethodKind.Unary
        },
        disableOriginUserSlackReviewReminder: {
            name: "DisableOriginUserSlackReviewReminder",
            I: Sn,
            O: bn,
            kind: n.MethodKind.Unary
        },
        subscribeOriginSlackChannel: {
            name: "SubscribeOriginSlackChannel",
            I: Rn,
            O: Pn,
            kind: n.MethodKind.Unary
        },
        unsubscribeOriginSlackChannel: {
            name: "UnsubscribeOriginSlackChannel",
            I: Jn,
            O: Mn,
            kind: n.MethodKind.Unary
        },
        listOriginSlackChannelSubscriptions: {
            name: "ListOriginSlackChannelSubscriptions",
            I: qn,
            O: Dn,
            kind: n.MethodKind.Unary
        },
        getCommit: {
            name: "GetCommit",
            I: So,
            O: Yn,
            kind: n.MethodKind.Unary
        },
        getBlob: {
            name: "GetBlob",
            I: bo,
            O: Zn,
            kind: n.MethodKind.Unary
        },
        getTag: {
            name: "GetTag",
            I: Eo,
            O: Xn,
            kind: n.MethodKind.Unary
        },
        getTree: {
            name: "GetTree",
            I: Io,
            O: es,
            kind: n.MethodKind.Unary
        },
        resolveRepoPath: {
            name: "ResolveRepoPath",
            I: ao,
            O: _s,
            kind: n.MethodKind.Unary
        },
        getRepoContent: {
            name: "GetRepoContent",
            I: co,
            O: As,
            kind: n.MethodKind.Unary
        },
        mintRawRepoFileLink: {
            name: "MintRawRepoFileLink",
            I: lo,
            O: uo,
            kind: n.MethodKind.Unary
        },
        getRepoTarball: {
            name: "GetRepoTarball",
            I: po,
            O: mo,
            kind: n.MethodKind.Unary
        },
        getRepoContentAtSha: {
            name: "GetRepoContentAtSha",
            I: ho,
            O: As,
            kind: n.MethodKind.Unary
        },
        getRepoContentDetailsAtSha: {
            name: "GetRepoContentDetailsAtSha",
            I: fo,
            O: Is,
            kind: n.MethodKind.Unary
        },
        batchGetRepoContentAtSha: {
            name: "BatchGetRepoContentAtSha",
            I: go,
            O: bs,
            kind: n.MethodKind.Unary
        },
        resolveCodeIntelligenceSymbolAtPosition: {
            name: "ResolveCodeIntelligenceSymbolAtPosition",
            I: ui,
            O: di,
            kind: n.MethodKind.Unary
        },
        findCodeIntelligenceReferencesAtPosition: {
            name: "FindCodeIntelligenceReferencesAtPosition",
            I: pi,
            O: gi,
            kind: n.MethodKind.ServerStreaming
        },
        getRepoCodeowners: {
            name: "GetRepoCodeowners",
            I: yo,
            O: vo,
            kind: n.MethodKind.Unary
        },
        getGithubRepoCodeowners: {
            name: "GetGithubRepoCodeowners",
            I: _o,
            O: Ao,
            kind: n.MethodKind.Unary
        },
        getFileHistory: {
            name: "GetFileHistory",
            I: Co,
            O: Cs,
            kind: n.MethodKind.Unary
        },
        getFileHistoryPage: {
            name: "GetFileHistoryPage",
            I: ko,
            O: xo,
            kind: n.MethodKind.Unary
        },
        getFileHistoryPageWithDiffStats: {
            name: "GetFileHistoryPageWithDiffStats",
            I: To,
            O: xs,
            kind: n.MethodKind.Unary
        },
        getFuzzyPaths: {
            name: "GetFuzzyPaths",
            I: Po,
            O: Js,
            kind: n.MethodKind.Unary
        },
        listRepoPaths: {
            name: "ListRepoPaths",
            I: Jo,
            O: Ms,
            kind: n.MethodKind.Unary
        },
        grepRepo: {
            name: "GrepRepo",
            I: Mo,
            O: Ns,
            kind: n.MethodKind.ServerStreaming
        },
        getPullRequestDiff: {
            name: "GetPullRequestDiff",
            I: qo,
            O: Ls,
            kind: n.MethodKind.ServerStreaming
        },
        getCommitDiff: {
            name: "GetCommitDiff",
            I: Do,
            O: Qs,
            kind: n.MethodKind.ServerStreaming
        },
        getCommitDiff2: {
            name: "GetCommitDiff2",
            I: Oo,
            O: Hs,
            kind: n.MethodKind.ServerStreaming
        },
        getCommitChangedPaths: {
            name: "GetCommitChangedPaths",
            I: No,
            O: zs,
            kind: n.MethodKind.Unary
        },
        getCommitDiffStats: {
            name: "GetCommitDiffStats",
            I: Fo,
            O: Ws,
            kind: n.MethodKind.Unary
        },
        getBlame: {
            name: "GetBlame",
            I: Ro,
            O: Rs,
            kind: n.MethodKind.ServerStreaming
        },
        getTreeBlame: {
            name: "GetTreeBlame",
            I: Bo,
            O: Ps,
            kind: n.MethodKind.Unary
        },
        listRefs: {
            name: "ListRefs",
            I: Uo,
            O: eo,
            kind: n.MethodKind.Unary
        },
        searchRefs: {
            name: "SearchRefs",
            I: Lo,
            O: to,
            kind: n.MethodKind.Unary
        },
        lookupCommits: {
            name: "LookupCommits",
            I: $o,
            O: ss,
            kind: n.MethodKind.Unary
        },
        getCommitActivity: {
            name: "GetCommitActivity",
            I: Qo,
            O: jo,
            kind: n.MethodKind.Unary
        },
        compareCommits: {
            name: "CompareCommits",
            I: zo,
            O: us,
            kind: n.MethodKind.Unary
        },
        listCommitsInRange: {
            name: "ListCommitsInRange",
            I: Wo,
            O: ls,
            kind: n.MethodKind.Unary
        },
        canMerge: {
            name: "CanMerge",
            I: Ho,
            O: ds,
            kind: n.MethodKind.Unary
        },
        createCommitFromFiles: {
            name: "CreateCommitFromFiles",
            I: Vo,
            O: Ko,
            kind: n.MethodKind.Unary
        },
        getCollectedPullRequestDiff: {
            name: "GetCollectedPullRequestDiff",
            I: Zo,
            O: Xo,
            kind: n.MethodKind.Unary
        },
        getDiffListing: {
            name: "GetDiffListing",
            I: Ei,
            O: Bi,
            kind: n.MethodKind.Unary
        },
        streamDiffFiles: {
            name: "StreamDiffFiles",
            I: Ii,
            O: Bi,
            kind: n.MethodKind.ServerStreaming
        },
        getDiffFile: {
            name: "GetDiffFile",
            I: ki,
            O: Bi,
            kind: n.MethodKind.Unary
        },
        getDiffEngineInfo: {
            name: "GetDiffEngineInfo",
            I: Ti,
            O: Bi,
            kind: n.MethodKind.Unary
        },
        portAnchors: {
            name: "PortAnchors",
            I: Ri,
            O: Bi,
            kind: n.MethodKind.Unary
        },
        createChange: {
            name: "CreateChange",
            I: ta,
            O: ra,
            kind: n.MethodKind.Unary
        },
        importGithubPullRequest: {
            name: "ImportGithubPullRequest",
            I: wu,
            O: vu,
            kind: n.MethodKind.Unary
        },
        updateChange: {
            name: "UpdateChange",
            I: ia,
            O: aa,
            kind: n.MethodKind.Unary
        },
        updateChangeBranch: {
            name: "UpdateChangeBranch",
            I: ca,
            O: la,
            kind: n.MethodKind.Unary
        },
        getMergeConflictResolution: {
            name: "GetMergeConflictResolution",
            I: Lu,
            O: $u,
            kind: n.MethodKind.Unary
        },
        applyMergeConflictResolution: {
            name: "ApplyMergeConflictResolution",
            I: Qu,
            O: ju,
            kind: n.MethodKind.Unary
        },
        undoMergeConflictResolution: {
            name: "UndoMergeConflictResolution",
            I: Gu,
            O: Hu,
            kind: n.MethodKind.Unary
        },
        deleteChangeHeadBranch: {
            name: "DeleteChangeHeadBranch",
            I: ua,
            O: da,
            kind: n.MethodKind.Unary
        },
        restorePullRequestBranch: {
            name: "RestorePullRequestBranch",
            I: pa,
            O: ma,
            kind: n.MethodKind.Unary
        },
        retargetChange: {
            name: "RetargetChange",
            I: ha,
            O: fa,
            kind: n.MethodKind.Unary
        },
        foldChange: {
            name: "FoldChange",
            I: ga,
            O: ya,
            kind: n.MethodKind.Unary
        },
        landChangeTreePath: {
            name: "LandChangeTreePath",
            I: wa,
            O: va,
            kind: n.MethodKind.Unary
        },
        splitChangeIntoStack: {
            name: "SplitChangeIntoStack",
            I: _a,
            O: Sa,
            kind: n.MethodKind.Unary
        },
        updateChangeMetadata: {
            name: "UpdateChangeMetadata",
            I: ba,
            O: Ea,
            kind: n.MethodKind.Unary
        },
        updateChangeStatus: {
            name: "UpdateChangeStatus",
            I: Ia,
            O: ka,
            kind: n.MethodKind.Unary
        },
        createReview: {
            name: "CreateReview",
            I: Da,
            O: Oa,
            kind: n.MethodKind.Unary
        },
        updateReview: {
            name: "UpdateReview",
            I: Na,
            O: Fa,
            kind: n.MethodKind.Unary
        },
        dismissReview: {
            name: "DismissReview",
            I: Ua,
            O: La,
            kind: n.MethodKind.Unary
        },
        listReviews: {
            name: "ListReviews",
            I: $a,
            O: Qa,
            kind: n.MethodKind.Unary
        },
        listChangeTimelineEvents: {
            name: "ListChangeTimelineEvents",
            I: ja,
            O: Ga,
            kind: n.MethodKind.Unary
        },
        startReview: {
            name: "StartReview",
            I: Gl,
            O: Hl,
            kind: n.MethodKind.Unary
        },
        submitReview: {
            name: "SubmitReview",
            I: zl,
            O: Wl,
            kind: n.MethodKind.Unary
        },
        discardPendingReview: {
            name: "DiscardPendingReview",
            I: Vl,
            O: Kl,
            kind: n.MethodKind.Unary
        },
        getPendingReview: {
            name: "GetPendingReview",
            I: Yl,
            O: Zl,
            kind: n.MethodKind.Unary
        },
        requestReview: {
            name: "RequestReview",
            I: ec,
            O: tc,
            kind: n.MethodKind.Unary
        },
        applyReviewRequestChanges: {
            name: "ApplyReviewRequestChanges",
            I: nc,
            O: sc,
            kind: n.MethodKind.Unary
        },
        requestReviews: {
            name: "RequestReviews",
            I: oc,
            O: ic,
            kind: n.MethodKind.Unary
        },
        closeReviewRequest: {
            name: "CloseReviewRequest",
            I: ac,
            O: cc,
            kind: n.MethodKind.Unary
        },
        listReviewRequestEvents: {
            name: "ListReviewRequestEvents",
            I: Za,
            O: Xa,
            kind: n.MethodKind.Unary
        },
        addAssignee: {
            name: "AddAssignee",
            I: lc,
            O: uc,
            kind: n.MethodKind.Unary
        },
        removeAssignee: {
            name: "RemoveAssignee",
            I: dc,
            O: pc,
            kind: n.MethodKind.Unary
        },
        listOriginRepoReviewerCandidates: {
            name: "ListOriginRepoReviewerCandidates",
            I: fc,
            O: yc,
            kind: n.MethodKind.Unary
        },
        createComment: {
            name: "CreateComment",
            I: Ha,
            O: za,
            kind: n.MethodKind.Unary
        },
        listComments: {
            name: "ListComments",
            I: Wa,
            O: Va,
            kind: n.MethodKind.Unary
        },
        createCommentThread: {
            name: "CreateCommentThread",
            I: Zu,
            O: Xu,
            kind: n.MethodKind.Unary
        },
        submitPullRequestGateReport: {
            name: "SubmitPullRequestGateReport",
            I: tu,
            O: au,
            kind: n.MethodKind.Unary
        },
        listPullRequestGateReports: {
            name: "ListPullRequestGateReports",
            I: du,
            O: pu,
            kind: n.MethodKind.Unary
        },
        uploadPullRequestGateTranscript: {
            name: "UploadPullRequestGateTranscript",
            I: ru,
            O: nu,
            kind: n.MethodKind.Unary
        },
        listCommentThreads: {
            name: "ListCommentThreads",
            I: ed,
            O: td,
            kind: n.MethodKind.Unary
        },
        addCommentToThread: {
            name: "AddCommentToThread",
            I: rd,
            O: nd,
            kind: n.MethodKind.Unary
        },
        resolveCommentThread: {
            name: "ResolveCommentThread",
            I: sd,
            O: od,
            kind: n.MethodKind.Unary
        },
        reopenCommentThread: {
            name: "ReopenCommentThread",
            I: id,
            O: ad,
            kind: n.MethodKind.Unary
        },
        updateComment: {
            name: "UpdateComment",
            I: cd,
            O: ld,
            kind: n.MethodKind.Unary
        },
        deleteComment: {
            name: "DeleteComment",
            I: ud,
            O: dd,
            kind: n.MethodKind.Unary
        },
        setCommentReaction: {
            name: "SetCommentReaction",
            I: pd,
            O: md,
            kind: n.MethodKind.Unary
        },
        listCommentReactions: {
            name: "ListCommentReactions",
            I: hd,
            O: fd,
            kind: n.MethodKind.Unary
        },
        markFileAsViewed: {
            name: "MarkFileAsViewed",
            I: yd,
            O: wd,
            kind: n.MethodKind.Unary
        },
        unmarkFileAsViewed: {
            name: "UnmarkFileAsViewed",
            I: vd,
            O: _d,
            kind: n.MethodKind.Unary
        },
        markDirectoryAsViewed: {
            name: "MarkDirectoryAsViewed",
            I: Ad,
            O: Sd,
            kind: n.MethodKind.Unary
        },
        markAllFilesAsViewed: {
            name: "MarkAllFilesAsViewed",
            I: bd,
            O: Ed,
            kind: n.MethodKind.Unary
        },
        unmarkAllFilesAsViewed: {
            name: "UnmarkAllFilesAsViewed",
            I: Id,
            O: Cd,
            kind: n.MethodKind.Unary
        },
        listFileViewedStates: {
            name: "ListFileViewedStates",
            I: kd,
            O: xd,
            kind: n.MethodKind.Unary
        },
        markPullRequestAsViewed: {
            name: "MarkPullRequestAsViewed",
            I: Jd,
            O: Md,
            kind: n.MethodKind.Unary
        },
        getGeneratedCodeTour: {
            name: "GetGeneratedCodeTour",
            I: Nd,
            O: Fd,
            kind: n.MethodKind.Unary
        },
        upsertGeneratedCodeTour: {
            name: "UpsertGeneratedCodeTour",
            I: Ud,
            O: Ld,
            kind: n.MethodKind.Unary
        },
        enableChangeMergeWhenReady: {
            name: "EnableChangeMergeWhenReady",
            I: jd,
            O: Gd,
            kind: n.MethodKind.Unary
        },
        getChangeMergeWhenReady: {
            name: "GetChangeMergeWhenReady",
            I: Hd,
            O: zd,
            kind: n.MethodKind.Unary
        },
        disableChangeMergeWhenReady: {
            name: "DisableChangeMergeWhenReady",
            I: Wd,
            O: Vd,
            kind: n.MethodKind.Unary
        },
        enqueueForMerge: {
            name: "EnqueueForMerge",
            I: pm,
            O: mm,
            kind: n.MethodKind.Unary
        },
        cancelMergeQueueEntry: {
            name: "CancelMergeQueueEntry",
            I: hm,
            O: fm,
            kind: n.MethodKind.Unary
        },
        getMergeQueueStatus: {
            name: "GetMergeQueueStatus",
            I: gm,
            O: ym,
            kind: n.MethodKind.Unary
        },
        getMergeQueue: {
            name: "GetMergeQueue",
            I: wm,
            O: vm,
            kind: n.MethodKind.Unary
        },
        getMergeQueueConfig: {
            name: "GetMergeQueueConfig",
            I: bm,
            O: Em,
            kind: n.MethodKind.Unary
        },
        enableMergeQueue: {
            name: "EnableMergeQueue",
            I: Cm,
            O: km,
            kind: n.MethodKind.Unary
        },
        disableMergeQueue: {
            name: "DisableMergeQueue",
            I: xm,
            O: Tm,
            kind: n.MethodKind.Unary
        },
        updateMergeQueueConfig: {
            name: "UpdateMergeQueueConfig",
            I: Rm,
            O: Bm,
            kind: n.MethodKind.Unary
        },
        getChange: {
            name: "GetChange",
            I: wc,
            O: bc,
            kind: n.MethodKind.Unary
        },
        getChangeCodeownersApplication: {
            name: "GetChangeCodeownersApplication",
            I: Ec,
            O: Oc,
            kind: n.MethodKind.Unary
        },
        getProjectedLatestVersions: {
            name: "GetProjectedLatestVersions",
            I: $c,
            O: jc,
            kind: n.MethodKind.Unary
        },
        getChangeStackPageData: {
            name: "GetChangeStackPageData",
            I: $m,
            O: Qm,
            kind: n.MethodKind.Unary
        },
        getChangeStack: {
            name: "GetChangeStack",
            I: Fc,
            O: Lc,
            kind: n.MethodKind.Unary
        },
        listChangeCommits: {
            name: "ListChangeCommits",
            I: Gc,
            O: Hc,
            kind: n.MethodKind.Unary
        },
        listChanges: {
            name: "ListChanges",
            I: Vc,
            O: sl,
            kind: n.MethodKind.Unary
        },
        listChangesByHeadRef: {
            name: "ListChangesByHeadRef",
            I: Kc,
            O: Yc,
            kind: n.MethodKind.Unary
        },
        getCommitReferences: {
            name: "GetCommitReferences",
            I: Zc,
            O: el,
            kind: n.MethodKind.Unary
        },
        batchGetChanges: {
            name: "BatchGetChanges",
            I: rl,
            O: nl,
            kind: n.MethodKind.Unary
        },
        searchChanges: {
            name: "SearchChanges",
            I: cl,
            O: ll,
            kind: n.MethodKind.Unary
        },
        getSectionOfChanges: {
            name: "GetSectionOfChanges",
            I: ol,
            O: il,
            kind: n.MethodKind.Unary
        },
        countSectionsOfChanges: {
            name: "CountSectionsOfChanges",
            I: ul,
            O: dl,
            kind: n.MethodKind.Unary
        },
        resolveSectionPersonalBotAuthors: {
            name: "ResolveSectionPersonalBotAuthors",
            I: pl,
            O: ml,
            kind: n.MethodKind.Unary
        },
        getCiState: {
            name: "GetCiState",
            I: op,
            O: ip,
            kind: n.MethodKind.Unary
        },
        batchGetCommitCheckRollups: {
            name: "BatchGetCommitCheckRollups",
            I: ap,
            O: lp,
            kind: n.MethodKind.Unary
        },
        getCheckRun: {
            name: "GetCheckRun",
            I: up,
            O: dp,
            kind: n.MethodKind.Unary
        },
        listRepoCheckSources: {
            name: "ListRepoCheckSources",
            I: pp,
            O: fp,
            kind: n.MethodKind.Unary
        },
        getOriginCiJobLog: {
            name: "GetOriginCiJobLog",
            I: im,
            O: am,
            kind: n.MethodKind.Unary
        },
        postCheckRun: {
            name: "PostCheckRun",
            I: bp,
            O: Cp,
            kind: n.MethodKind.Unary
        },
        createCheckRunAnnotations: {
            name: "CreateCheckRunAnnotations",
            I: Bp,
            O: Pp,
            kind: n.MethodKind.Unary
        },
        listCheckRunAnnotations: {
            name: "ListCheckRunAnnotations",
            I: Jp,
            O: Mp,
            kind: n.MethodKind.Unary
        },
        rerequestCheckRun: {
            name: "RerequestCheckRun",
            I: qp,
            O: Dp,
            kind: n.MethodKind.Unary
        },
        getChangesetMergeability: {
            name: "GetChangesetMergeability",
            I: Op,
            O: Np,
            kind: n.MethodKind.Unary
        },
        getReviewRequirements: {
            name: "GetReviewRequirements",
            I: Hm,
            O: zm,
            kind: n.MethodKind.Unary
        },
        mergeStack: {
            name: "MergeStack",
            I: Zp,
            O: Xp,
            kind: n.MethodKind.Unary
        },
        revertPullRequest: {
            name: "RevertPullRequest",
            I: sa,
            O: oa,
            kind: n.MethodKind.Unary
        },
        restackStack: {
            name: "RestackStack",
            I: em,
            O: rm,
            kind: n.MethodKind.Unary
        },
        getApp: {
            name: "GetApp",
            I: ph,
            O: mh,
            kind: n.MethodKind.Unary
        },
        createApp: {
            name: "CreateApp",
            I: uh,
            O: dh,
            kind: n.MethodKind.Unary
        },
        addAppSigningKey: {
            name: "AddAppSigningKey",
            I: hh,
            O: fh,
            kind: n.MethodKind.Unary
        },
        revokeAppSigningKey: {
            name: "RevokeAppSigningKey",
            I: gh,
            O: yh,
            kind: n.MethodKind.Unary
        },
        getAppMetadata: {
            name: "GetAppMetadata",
            I: rf,
            O: nf,
            kind: n.MethodKind.Unary
        },
        listNamespaceApps: {
            name: "ListNamespaceApps",
            I: wh,
            O: vh,
            kind: n.MethodKind.Unary
        },
        listPublicApps: {
            name: "ListPublicApps",
            I: Sh,
            O: bh,
            kind: n.MethodKind.Unary
        },
        createInstallation: {
            name: "CreateInstallation",
            I: Ch,
            O: kh,
            kind: n.MethodKind.Unary
        },
        getInstallation: {
            name: "GetInstallation",
            I: xh,
            O: Th,
            kind: n.MethodKind.Unary
        },
        listNamespaceInstallations: {
            name: "ListNamespaceInstallations",
            I: Rh,
            O: Bh,
            kind: n.MethodKind.Unary
        },
        listRepoInstallations: {
            name: "ListRepoInstallations",
            I: lf,
            O: uf,
            kind: n.MethodKind.Unary
        },
        updateApp: {
            name: "UpdateApp",
            I: Ph,
            O: Qh,
            kind: n.MethodKind.Unary
        },
        setAppWebhookDeliveryEnabled: {
            name: "SetAppWebhookDeliveryEnabled",
            I: Fh,
            O: Uh,
            kind: n.MethodKind.Unary
        },
        sendAppWebhookTestDelivery: {
            name: "SendAppWebhookTestDelivery",
            I: Lh,
            O: $h,
            kind: n.MethodKind.Unary
        },
        deleteApp: {
            name: "DeleteApp",
            I: Hh,
            O: zh,
            kind: n.MethodKind.Unary
        },
        setAppIcon: {
            name: "SetAppIcon",
            I: jh,
            O: Gh,
            kind: n.MethodKind.Unary
        },
        deleteInstallation: {
            name: "DeleteInstallation",
            I: Wh,
            O: Vh,
            kind: n.MethodKind.Unary
        },
        suspendInstallation: {
            name: "SuspendInstallation",
            I: sf,
            O: of,
            kind: n.MethodKind.Unary
        },
        unsuspendInstallation: {
            name: "UnsuspendInstallation",
            I: af,
            O: cf,
            kind: n.MethodKind.Unary
        },
        listReposForAppInstall: {
            name: "ListReposForAppInstall",
            I: S,
            O: A,
            kind: n.MethodKind.Unary
        },
        previewAppInstallation: {
            name: "PreviewAppInstallation",
            I: Yh,
            O: Xh,
            kind: n.MethodKind.Unary
        },
        requestAppInstall: {
            name: "RequestAppInstall",
            I: df,
            O: pf,
            kind: n.MethodKind.Unary
        },
        getMyAppInstallRequest: {
            name: "GetMyAppInstallRequest",
            I: mf,
            O: hf,
            kind: n.MethodKind.Unary
        },
        cancelMyAppInstallRequest: {
            name: "CancelMyAppInstallRequest",
            I: ff,
            O: gf,
            kind: n.MethodKind.Unary
        },
        listAppInstallRequests: {
            name: "ListAppInstallRequests",
            I: vf,
            O: _f,
            kind: n.MethodKind.Unary
        },
        denyAppInstallRequests: {
            name: "DenyAppInstallRequests",
            I: Af,
            O: Sf,
            kind: n.MethodKind.Unary
        },
        getAtlasNode: {
            name: "GetAtlasNode",
            I: Bf,
            O: Jf,
            kind: n.MethodKind.Unary
        },
        listAtlasNodePaths: {
            name: "ListAtlasNodePaths",
            I: Lf,
            O: Qf,
            kind: n.MethodKind.Unary
        },
        getAtlasRepoStatus: {
            name: "GetAtlasRepoStatus",
            I: qf,
            O: Df,
            kind: n.MethodKind.Unary
        },
        setAtlasRepoConfig: {
            name: "SetAtlasRepoConfig",
            I: Of,
            O: Nf,
            kind: n.MethodKind.Unary
        },
        refreshAtlasRepo: {
            name: "RefreshAtlasRepo",
            I: Ff,
            O: Uf,
            kind: n.MethodKind.Unary
        },
        listRulesets: {
            name: "ListRulesets",
            I: tg,
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
            I: og,
            O: ig,
            kind: n.MethodKind.Unary
        },
        deleteRuleset: {
            name: "DeleteRuleset",
            I: ag,
            O: cg,
            kind: n.MethodKind.Unary
        },
        createLabel: {
            name: "CreateLabel",
            I: dg,
            O: pg,
            kind: n.MethodKind.Unary
        },
        updateLabel: {
            name: "UpdateLabel",
            I: mg,
            O: hg,
            kind: n.MethodKind.Unary
        },
        deleteLabel: {
            name: "DeleteLabel",
            I: fg,
            O: gg,
            kind: n.MethodKind.Unary
        },
        listLabels: {
            name: "ListLabels",
            I: yg,
            O: wg,
            kind: n.MethodKind.Unary
        },
        getLabelByName: {
            name: "GetLabelByName",
            I: vg,
            O: _g,
            kind: n.MethodKind.Unary
        },
        addLabelToChange: {
            name: "AddLabelToChange",
            I: Ag,
            O: Sg,
            kind: n.MethodKind.Unary
        },
        removeLabelFromChange: {
            name: "RemoveLabelFromChange",
            I: bg,
            O: Eg,
            kind: n.MethodKind.Unary
        },
        checkChangeCreationAccess: {
            name: "CheckChangeCreationAccess",
            I: Xl,
            O: eu,
            kind: n.MethodKind.Unary
        },
        watchChangeSyncEvents: {
            name: "WatchChangeSyncEvents",
            I: Cg,
            O: kg,
            kind: n.MethodKind.ServerStreaming
        },
        getChangeSyncSnapshot: {
            name: "GetChangeSyncSnapshot",
            I: zg,
            O: Wg,
            kind: n.MethodKind.Unary
        },
        watchChangeSyncEventsV2: {
            name: "WatchChangeSyncEventsV2",
            I: Dg,
            O: Qg,
            kind: n.MethodKind.ServerStreaming
        },
        updateWatchChangeSyncSubscriptions: {
            name: "UpdateWatchChangeSyncSubscriptions",
            I: jg,
            O: Gg,
            kind: n.MethodKind.Unary
        },
        fastForwardBranch: {
            name: "FastForwardBranch",
            I: ei,
            O: ti,
            kind: n.MethodKind.Unary
        },
        listRepoExternalCollaborators: {
            name: "ListRepoExternalCollaborators",
            I: ar,
            O: cr,
            kind: n.MethodKind.Unary
        },
        setRepoExternalCollaboratorAccess: {
            name: "SetRepoExternalCollaboratorAccess",
            I: lr,
            O: ur,
            kind: n.MethodKind.Unary
        },
        previewAppUserConfirmation: {
            name: "PreviewAppUserConfirmation",
            I: bf,
            O: If,
            kind: n.MethodKind.Unary
        },
        confirmAppUserConfirmation: {
            name: "ConfirmAppUserConfirmation",
            I: Cf,
            O: kf,
            kind: n.MethodKind.Unary
        },
        githubOutageDrillProbe: {
            name: "GithubOutageDrillProbe",
            I: Yg,
            O: Zg,
            kind: n.MethodKind.Unary
        }
    }
};
