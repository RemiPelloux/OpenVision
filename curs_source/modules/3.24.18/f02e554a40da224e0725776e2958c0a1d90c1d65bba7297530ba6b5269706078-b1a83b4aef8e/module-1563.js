"use strict";
require.d(exports, {
    $C: ()=>xt,
    A8: ()=>lt,
    AY: ()=>gt,
    A_: ()=>ct,
    Ad: ()=>rt,
    B6: ()=>O,
    BO: ()=>kt,
    CR: ()=>bt,
    DS: ()=>K,
    Fp: ()=>Mt,
    GB: ()=>Ct,
    GX: ()=>Ht,
    L7: ()=>Qt,
    LO: ()=>vt,
    Lf: ()=>st,
    MD: ()=>_,
    P5: ()=>Dt,
    PT: ()=>pt,
    Ri: ()=>$,
    Ss: ()=>T,
    W$: ()=>dt,
    WS: ()=>Xt,
    XM: ()=>X,
    YH: ()=>Ft,
    bD: ()=>It,
    bn: ()=>Jt,
    bq: ()=>ft,
    do: ()=>v,
    eI: ()=>A,
    eh: ()=>ot,
    em: ()=>Zt,
    fP: ()=>z,
    fh: ()=>D,
    g$: ()=>Wt,
    hZ: ()=>tt,
    i$: ()=>at,
    ic: ()=>h,
    iq: ()=>nt,
    j1: ()=>At,
    jq: ()=>wt,
    jw: ()=>N,
    lm: ()=>et,
    lp: ()=>I,
    m1: ()=>Vt,
    p5: ()=>M,
    pD: ()=>it,
    qA: ()=>x,
    qO: ()=>y,
    rL: ()=>J,
    se: ()=>d,
    v0: ()=>S,
    wj: ()=>Gt,
    xq: ()=>p,
    yX: ()=>ht,
    yk: ()=>Yt
});
var n = require("./module-6038.js"), s = require("./module-7918.js"), i = require("./module-5035.js"), o = require("./module-8592.js");
const a = "aiserver.v1.";
class u extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return a;
    }
}
var c = (0, o.QT)(n.proto3, a, "ChunkingStrategy", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DEFAULT"
    ]
], 1), l = (0, o.QT)(n.proto3, a, "SimilarityMetricType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SIMHASH"
    ]
], 1), m = (0, o.QT)(n.proto3, a, "PathKeyHashType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SHA256"
    ]
], 1), d = (0, o.QT)(n.proto3, a, "RerankerAlgorithm", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "LULEA"
    ],
    [
        2,
        "UMEA"
    ],
    [
        3,
        "NONE"
    ],
    [
        4,
        "LLAMA"
    ],
    [
        5,
        "STARCODER_V1"
    ],
    [
        6,
        "GPT_3_5_LOGPROBS"
    ],
    [
        7,
        "LULEA_HAIKU"
    ],
    [
        8,
        "COHERE"
    ],
    [
        9,
        "VOYAGE"
    ],
    [
        10,
        "VOYAGE_EMBEDS"
    ],
    [
        11,
        "IDENTITY"
    ],
    [
        12,
        "ADA_EMBEDS"
    ]
], 1), f = (0, o.QT)(n.proto3, a, "DatabaseProvider", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "AURORA"
    ],
    [
        2,
        "PLANETSCALE"
    ]
], 1), p = (0, o.QT)(n.proto3, a, "RechunkerChoice", [
    [
        0,
        "RECHUNKER_CHOICE_UNSPECIFIED"
    ],
    [
        1,
        "RECHUNKER_CHOICE_IDENTITY"
    ],
    [
        2,
        "RECHUNKER_CHOICE_600_TOKS"
    ],
    [
        3,
        "RECHUNKER_CHOICE_2400_TOKS"
    ],
    [
        4,
        "RECHUNKER_CHOICE_4000_TOKS"
    ]
]);
class h extends u {
    constructor(t){
        super(), this.readmes = [], this.topLevelRelativeWorkspacePaths = [], this.workspaceRootPath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new h).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new h).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new h).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(h, t, e);
    }
    static $() {
        return [
            "GetHighLevelFolderDescriptionRequest|1 readmes #0*|2 top_level_relative_workspace_paths 9*|4 workspace_root_path 9",
            g
        ];
    }
}
class g extends u {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.contents = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new g).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new g).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new g).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(g, t, e);
    }
    static $() {
        return [
            "GetHighLevelFolderDescriptionRequest.Readme|1 relative_workspace_path 9|2 contents 9"
        ];
    }
}
class A extends u {
    constructor(t){
        super(), this.description = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new A).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new A).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new A).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(A, t, e);
    }
    static $() {
        return [
            "GetHighLevelFolderDescriptionResponse|1 description 9"
        ];
    }
}
class _ extends u {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_, t, e);
    }
    static $() {
        return [
            "EnsureIndexCreatedRequest|1 repository #0",
            Jt
        ];
    }
}
class y extends u {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "EnsureIndexCreatedResponse"
        ];
    }
}
class w extends u {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.hashOfNode = "", n.proto3.util.initPartial(t, this);
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
            "PartialPathItem|1 relative_workspace_path 9|2 hash_of_node 9"
        ];
    }
}
class S extends u {
    constructor(t){
        super(), this.rootHash = "", this.potentialLegacyRepoName = "", n.proto3.util.initPartial(t, this);
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
            "FastRepoInitHandshakeRequest|1 repository #0|2 root_hash 9|3 potential_legacy_repo_name 9",
            Jt
        ];
    }
}
class J extends u {
    constructor(t){
        super(), this.status = B.UNSPECIFIED, this.repoName = "", n.proto3.util.initPartial(t, this);
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
            "FastRepoInitHandshakeResponse|1 status #0|2 repo_name 9",
            B
        ];
    }
}
var B = (0, o.QT)(n.proto3, a, "FastRepoInitHandshakeResponse.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "UP_TO_DATE"
    ],
    [
        2,
        "OUT_OF_SYNC"
    ],
    [
        3,
        "FAILURE"
    ],
    [
        4,
        "EMPTY"
    ]
], 1);
class E extends u {
    constructor(t){
        super(), this.encryptedRelativePath = "", this.hash = "", this.children = [], n.proto3.util.initPartial(t, this);
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
            "LocalCodebaseFileInfo|1 encrypted_relative_path 9|2 hash 9|3 children #0*|4 separator 9?",
            E
        ];
    }
}
class I extends u {
    constructor(t){
        super(), this.rootHash = "", this.similarityMetricType = l.UNSPECIFIED, this.similarityMetric = [], this.pathKeyHash = "", this.pathKeyHashType = m.UNSPECIFIED, this.doCopy = !1, this.pathKey = "", this.returnAfterBackgroundCopyStarted = !1, n.proto3.util.initPartial(t, this);
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
            "FastRepoInitHandshakeV2Request|1 repository #0|2 root_hash 9|3 similarity_metric_type #1|4 similarity_metric 2*|5 path_key_hash 9|6 path_key_hash_type #2|7 do_copy 8|8 path_key 9|9 local_codebase_root_info #3|10 return_after_background_copy_started 8",
            Jt,
            l,
            m,
            E
        ];
    }
}
class C extends u {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "QueryOnlyRepositoryInfo|1 repository #0|2 query_only_repo_access #1",
            Jt,
            ft
        ];
    }
}
class b extends u {
    constructor(t){
        super(), this.codebaseId = "", this.status = k.UNSPECIFIED, this.copyTaskHandle = "", n.proto3.util.initPartial(t, this);
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
            "RepositoryCodebaseInfo|1 codebase_id 9|2 status #0|3 query_only_similar_repo #1|4 copy_task_handle 9",
            k,
            C
        ];
    }
}
var k = (0, o.QT)(n.proto3, a, "RepositoryCodebaseInfo.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "UP_TO_DATE"
    ],
    [
        2,
        "OUT_OF_SYNC"
    ],
    [
        3,
        "EMPTY"
    ],
    [
        4,
        "EMPTY_WITH_COPY_AVAILABLE"
    ],
    [
        5,
        "COPY_IN_PROGRESS"
    ]
], 1);
class v extends u {
    constructor(t){
        super(), this.status = q.UNSPECIFIED, this.codebases = [], n.proto3.util.initPartial(t, this);
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
            "FastRepoInitHandshakeV2Response|1 status #0|2 codebases #1*",
            q,
            b
        ];
    }
}
var q = (0, o.QT)(n.proto3, a, "FastRepoInitHandshakeV2Response.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FAILURE"
    ],
    [
        2,
        "SUCCESS"
    ]
], 1);
class R extends u {
    constructor(t){
        super(), this.codebaseId = "", this.status = P.UNSPECIFIED, this.similarityMetricType = l.UNSPECIFIED, this.similarityMetric = [], this.pathKeyHash = "", this.pathKeyHashType = m.UNSPECIFIED, this.failedUploadCount = 0, this.failedDeleteCount = 0, this.totalUploadCount = 0, this.totalDeleteCount = 0, this.failedSubtreeCount = 0, this.totalSubtreeCount = 0, this.hitIterationLimit = !1, n.proto3.util.initPartial(t, this);
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
            "RepositoryCodebaseSyncStatus|1 codebase_id 9|2 status #0|3 similarity_metric_type #1|4 similarity_metric 2*|5 path_key_hash 9|6 path_key_hash_type #2|7 failed_upload_count 5|8 failed_delete_count 5|9 total_upload_count 5|10 total_delete_count 5|11 failed_subtree_count 5|12 total_subtree_count 5|13 hit_iteration_limit 8",
            P,
            l,
            m
        ];
    }
}
var P = (0, o.QT)(n.proto3, a, "RepositoryCodebaseSyncStatus.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SUCCESS"
    ],
    [
        2,
        "FAILURE"
    ]
], 1);
class T extends u {
    constructor(t){
        super(), this.codebases = [], n.proto3.util.initPartial(t, this);
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
            "FastRepoSyncCompleteRequest|1 codebases #0*",
            R
        ];
    }
}
class x extends u {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "FastRepoSyncCompleteResponse"
        ];
    }
}
class N extends u {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "SyncMerkleSubtreeRequest|1 repository #0|2 local_partial_path #1",
            Jt,
            w
        ];
    }
}
class D extends u {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "SyncMerkleSubtreeResponse|1 match 8 result|2 mismatch #0 result",
            U
        ];
    }
}
class U extends u {
    constructor(t){
        super(), this.children = [], n.proto3.util.initPartial(t, this);
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
            "SyncMerkleSubtreeResponse.Mismatch|1 children #0*",
            w
        ];
    }
}
class Q extends u {
    constructor(t){
        super(), this.orthogonalTransformSeed = 0, n.proto3.util.initPartial(t, this);
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
            "ClientRepositoryInfo|1 orthogonal_transform_seed 1"
        ];
    }
}
class M extends u {
    constructor(t){
        super(), this.codebaseId = "", this.localPartialPaths = [], n.proto3.util.initPartial(t, this);
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
            "SyncMerkleSubtreeV2Request|1 client_repository_info #0|2 codebase_id 9|3 local_partial_path #1|4 local_partial_paths #1*",
            Q,
            w
        ];
    }
}
class O extends u {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, this.results = [], n.proto3.util.initPartial(t, this);
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
            "SyncMerkleSubtreeV2Response|1 match 8 result|2 mismatch #0 result|3 results #1*",
            F,
            L
        ];
    }
}
class F extends u {
    constructor(t){
        super(), this.children = [], n.proto3.util.initPartial(t, this);
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
            "SyncMerkleSubtreeV2Response.Mismatch|1 children #0*",
            w
        ];
    }
}
class L extends u {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "SyncMerkleSubtreeV2Response.PartialPathResult|1 match 8 result|2 mismatch #0 result|3 response_size_limit_exceeded 8 result",
            F
        ];
    }
}
class $ extends u {
    constructor(t){
        super(), this.partialPath = {
            case: void 0
        }, this.ancestorSpline = [], this.updateType = G.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
            "FastUpdateFileRequest|1 repository #0|2 directory #1 partial_path|3 local_file #2 partial_path|4 ancestor_spline #1*|5 update_type #3",
            Jt,
            w,
            H,
            G
        ];
    }
}
var G = (0, o.QT)(n.proto3, a, "FastUpdateFileRequest.UpdateType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ADD"
    ],
    [
        2,
        "DELETE"
    ],
    [
        3,
        "MODIFY"
    ]
], 1);
class H extends u {
    constructor(t){
        super(), this.hash = "", this.unencryptedRelativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
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
            "FastUpdateFileRequest.LocalFile|1 file #0|2 hash 9|3 unencrypted_relative_workspace_path 9",
            s.File
        ];
    }
}
class K extends u {
    constructor(t){
        super(), this.status = V.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
            "FastUpdateFileResponse|1 status #0",
            V
        ];
    }
}
var V = (0, o.QT)(n.proto3, a, "FastUpdateFileResponse.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SUCCESS"
    ],
    [
        2,
        "FAILURE"
    ],
    [
        3,
        "EXPECTED_FAILURE"
    ]
], 1);
class z extends u {
    constructor(t){
        super(), this.codebaseId = "", this.partialPath = {
            case: void 0
        }, this.ancestorSpline = [], this.updateType = W.UNSPECIFIED, this.fileUpdates = [], n.proto3.util.initPartial(t, this);
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
            "FastUpdateFileV2Request|1 client_repository_info #0|2 codebase_id 9|3 directory #1 partial_path|4 local_file #2 partial_path|5 ancestor_spline #1*|6 update_type #3|7 file_updates #4*",
            Q,
            w,
            Y,
            W,
            j
        ];
    }
}
var W = (0, o.QT)(n.proto3, a, "FastUpdateFileV2Request.UpdateType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ADD"
    ],
    [
        2,
        "DELETE"
    ],
    [
        3,
        "MODIFY"
    ],
    [
        4,
        "BATCH"
    ]
], 1);
class Y extends u {
    constructor(t){
        super(), this.hash = "", this.unencryptedRelativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
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
            "FastUpdateFileV2Request.LocalFile|1 file #0|2 hash 9|3 unencrypted_relative_workspace_path 9",
            s.File
        ];
    }
}
class j extends u {
    constructor(t){
        super(), this.partialPath = {
            case: void 0
        }, this.ancestorSpline = [], this.updateType = W.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
            "FastUpdateFileV2Request.FileUpdate|1 directory #0 partial_path|2 local_file #1 partial_path|3 ancestor_spline #0*|4 update_type #2",
            w,
            Y,
            W
        ];
    }
}
class X extends u {
    constructor(t){
        super(), this.status = Z.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
            "FastUpdateFileV2Response|1 status #0",
            Z
        ];
    }
}
var Z = (0, o.QT)(n.proto3, a, "FastUpdateFileV2Response.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SUCCESS"
    ],
    [
        2,
        "FAILURE"
    ],
    [
        3,
        "EXPECTED_FAILURE"
    ]
], 1);
class tt extends u {
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
            "GetUploadLimitsRequest|1 repository #0?",
            Jt
        ];
    }
}
class et extends u {
    constructor(t){
        super(), this.softLimit = 0, this.hardLimit = 0, n.proto3.util.initPartial(t, this);
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
            "GetUploadLimitsResponse|1 soft_limit 5|2 hard_limit 5"
        ];
    }
}
class rt extends u {
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
            "GetNumFilesToSendRequest|1 repository #0",
            Jt
        ];
    }
}
class nt extends u {
    constructor(t){
        super(), this.numFiles = 0, n.proto3.util.initPartial(t, this);
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
            "GetNumFilesToSendResponse|1 num_files 5"
        ];
    }
}
class st extends u {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "GetAvailableChunkingStrategiesRequest|1 repository #0",
            Jt
        ];
    }
}
class it extends u {
    constructor(t){
        super(), this.chunkingStrategies = [], n.proto3.util.initPartial(t, this);
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
            "GetAvailableChunkingStrategiesResponse|1 chunking_strategies #0*",
            c
        ];
    }
}
class ot extends u {
    constructor(t){
        super(), this.texts = [], n.proto3.util.initPartial(t, this);
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
            "GetEmbeddingsRequest|1 texts 9*"
        ];
    }
}
class at extends u {
    constructor(t){
        super(), this.embeddings = [], n.proto3.util.initPartial(t, this);
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
            "GetEmbeddingsResponse|2 embeddings #0*",
            ut
        ];
    }
}
class ut extends u {
    constructor(t){
        super(), this.embedding = [], n.proto3.util.initPartial(t, this);
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
            "GetEmbeddingsResponse.Embedding|1 embedding 2*"
        ];
    }
}
n.proto3;
n.proto3;
n.proto3;
n.proto3;
n.proto3;
n.proto3;
n.proto3;
n.proto3;
class ct extends u {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "RemoveRepositoryRequest|1 repository #0",
            Jt
        ];
    }
}
class lt extends u {
    constructor(t){
        super(), this.status = mt.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
            "RemoveRepositoryResponse|1 status #0",
            mt
        ];
    }
}
var mt = (0, o.QT)(n.proto3, a, "RemoveRepositoryResponse.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NOT_FOUND"
    ],
    [
        2,
        "NOT_AUTHORIZED"
    ],
    [
        3,
        "STARTED"
    ],
    [
        4,
        "SUCCESS"
    ]
], 1);
n.proto3;
class dt extends u {
    constructor(t){
        super(), this.query = "", this.topK = 0, this.rerank = !1, n.proto3.util.initPartial(t, this);
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
            "SearchRepositoryRequest|1 query 9|2 repository #0|3 top_k 5|4 model_details #1|5 rerank 8|6 context_cache_request 8?|7 glob_filter 9?|8 not_glob_filter 9?|9 race_n_requests 5?|10 query_only_repo_access #2",
            Jt,
            s.ModelDetails,
            ft
        ];
    }
}
class ft extends u {
    constructor(t){
        super(), this.ownerAuthId = "", this.accessToken = "", this.userRepoOwner = "", this.userRepoName = "", n.proto3.util.initPartial(t, this);
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
            "QueryOnlyRepoAccess|1 owner_auth_id 9|2 access_token 9|3 user_repo_owner 9|4 user_repo_name 9"
        ];
    }
}
class pt extends u {
    constructor(t){
        super(), this.score = 0, n.proto3.util.initPartial(t, this);
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
            "CodeResult|1 code_block #0|2 score 2",
            s.CodeBlock
        ];
    }
}
class ht extends u {
    constructor(t){
        super(), this.score = 0, n.proto3.util.initPartial(t, this);
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
            "FileResult|1 file #0|2 score 2",
            s.File
        ];
    }
}
class gt extends u {
    constructor(t){
        super(), this.codeResults = [], n.proto3.util.initPartial(t, this);
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
            "SearchRepositoryResponse|1 code_results #0*",
            pt
        ];
    }
}
class At extends u {
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
            "SemSearchRequest|1 request #0",
            dt
        ];
    }
}
class _t extends u {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _t).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _t).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _t).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_t, t, e);
    }
    static $() {
        return [
            "CodeResultWithClassificationInfo|1 code_result #0|2 line_number_classification #1?",
            pt,
            yt
        ];
    }
}
class yt extends u {
    constructor(t){
        super(), this.queryComputedFor = "", this.matchedStrings = [], n.proto3.util.initPartial(t, this);
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
            "CodeResultWithClassificationInfo.LineNumberClassification|1 detailed_line #0|2 query_computed_for 9|3 matched_strings 9*|4 highlight_range #1",
            s.DetailedLine,
            s.SimpleRange
        ];
    }
}
class wt extends u {
    constructor(t){
        super(), this.codeResults = [], n.proto3.util.initPartial(t, this);
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
            "SemSearchResponse|1 response #0|2 metadata #1?|3 code_results #2*",
            gt,
            St,
            _t
        ];
    }
}
class St extends u {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "SemSearchResponse.SemSearchMetadata|1 query_embedding_model 9?|2 server_side_latency_ms 5?|3 embed_latency_ms 5?|4 knn_latency_ms 5?"
        ];
    }
}
n.proto3;
n.proto3;
n.proto3;
class Jt extends u {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.remoteUrls = [], this.remoteNames = [], this.repoName = "", this.repoOwner = "", this.isTracked = !1, this.isLocal = !1, this.workspaceUri = "", n.proto3.util.initPartial(t, this);
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
            "RepositoryInfo|1 relative_workspace_path 9|2 remote_urls 9*|3 remote_names 9*|4 repo_name 9|5 repo_owner 9|6 is_tracked 8|7 is_local 8|8 num_files 5?|9 orthogonal_transform_seed 1?|10 preferred_embedding_model #0?|11 workspace_uri 9|12 preferred_db_provider #1?",
            s.EmbeddingModel,
            f
        ];
    }
}
class Bt extends u {
    constructor(t){
        super(), this.score = 0, n.proto3.util.initPartial(t, this);
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
            "NodeResult|1 node #0|2 file #1|3 score 2",
            i.qD,
            s.File
        ];
    }
}
class Et extends u {
    constructor(t){
        super(), this.score = 0, n.proto3.util.initPartial(t, this);
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
            "ReflectionResult|1 reflection #0|2 score 2",
            i.W2
        ];
    }
}
class It extends u {
    constructor(t){
        super(), this.topNodes = [], this.reflections = [], this.indexId = "", n.proto3.util.initPartial(t, this);
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
            "SearchRepositoryDeepContextResponse|1 top_nodes #0*|2 reflections #1*|3 index_id 9",
            Bt,
            Et
        ];
    }
}
class Ct extends u {
    constructor(t){
        super(), this.query = "", this.codeResults = [], n.proto3.util.initPartial(t, this);
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
            "GetLineNumberClassificationsRequest|1 query 9|2 code_results #0*",
            pt
        ];
    }
}
class bt extends u {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "GetLineNumberClassificationsResponse|1 classified_result #0",
            _t
        ];
    }
}
class kt extends u {
    constructor(t){
        super(), this.codebaseId = "", this.copyTaskHandle = "", n.proto3.util.initPartial(t, this);
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
            "GetCopyStatusRequest|1 codebase_id 9|2 copy_task_handle 9"
        ];
    }
}
class vt extends u {
    constructor(t){
        super(), this.phase = qt.UNSPECIFIED, this.percentDone = 0, this.errorMessage = "", n.proto3.util.initPartial(t, this);
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
            "GetCopyStatusResponse|1 phase #0|2 percent_done 2|3 error_message 9|4 completed_status #1?",
            qt,
            Rt
        ];
    }
}
var qt = (0, o.QT)(n.proto3, a, "GetCopyStatusResponse.Phase", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "INITIALIZING"
    ],
    [
        2,
        "COPYING"
    ],
    [
        3,
        "COMPLETED"
    ],
    [
        4,
        "CREATING_SEARCH_FILTERS"
    ],
    [
        5,
        "COPYING_SEARCH_STATE"
    ],
    [
        6,
        "COPYING_TREE_STATE"
    ],
    [
        7,
        "SYNCING_COPY"
    ]
], 1), Rt = (0, o.QT)(n.proto3, a, "GetCopyStatusResponse.CompletedStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "UP_TO_DATE"
    ],
    [
        2,
        "OUT_OF_SYNC"
    ],
    [
        3,
        "FAILURE"
    ]
], 1);
class Pt extends u {
    constructor(t){
        super(), this.path = "", this.diff = [], n.proto3.util.initPartial(t, this);
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
            "IndexedFile|1 path 9|2 diff 9*"
        ];
    }
}
class Tt extends u {
    constructor(t){
        super(), this.prNumber = 0, this.sha = "", this.message = "", this.changedFiles = [], this.generation = 0, this.commitSecret = "", this.unixTimestamp = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
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
            "IndexedPullRequest|1 pr_number 13|2 sha 9|3 message 9|4 changed_files #0*|5 generation 13|6 commit_secret 9|7 unix_timestamp 3|8 title 9?|9 author 9?",
            Pt
        ];
    }
}
class xt extends u {
    constructor(t){
        super(), this.origin = "", n.proto3.util.initPartial(t, this);
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
            "RepoHistoryInitHandshakeRequest|1 repository #0|2 origin 9|3 test_origin_commit 9?|4 test_origin_commit_secret 9?|5 send_copy_candidates 8?",
            Jt
        ];
    }
}
class Nt extends u {
    constructor(t){
        super(), this.historyId = "", n.proto3.util.initPartial(t, this);
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
            "RepoHistoryInfo|1 history_id 9|2 branch_name 9?|3 last_indexed_commit 9?|4 last_indexed_commit_generation 13?|5 sync_bitmap 12?"
        ];
    }
}
class Dt extends u {
    constructor(t){
        super(), this.status = Ut.UNSPECIFIED, this.histories = [], this.copyCandidates = [], n.proto3.util.initPartial(t, this);
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
            "RepoHistoryInitHandshakeResponse|1 status #0|2 histories #1*|3 copy_candidate_nonce 9?|4 copy_candidates 9*|5 error_message 9?",
            Ut,
            Nt
        ];
    }
}
var Ut = (0, o.QT)(n.proto3, a, "RepoHistoryInitHandshakeResponse.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FAILURE"
    ],
    [
        2,
        "SUCCESS"
    ],
    [
        3,
        "TEST_CANDIDATES"
    ],
    [
        4,
        "NO_INDEXING"
    ]
], 1);
class Qt extends u {
    constructor(t){
        super(), this.historyId = "", this.pullRequests = [], this.ignoreCommits = [], n.proto3.util.initPartial(t, this);
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
            "RepoHistorySyncOneRequest|1 history_id 9|2 pull_requests #0*|3 ignore_commits 13*",
            Tt
        ];
    }
}
class Mt extends u {
    constructor(t){
        super(), this.status = Ot.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
            "RepoHistorySyncOneResponse|1 status #0",
            Ot
        ];
    }
}
var Ot = (0, o.QT)(n.proto3, a, "RepoHistorySyncOneResponse.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SUCCESS"
    ],
    [
        2,
        "FAILURE"
    ],
    [
        3,
        "PARTIAL_SUCCESS"
    ],
    [
        4,
        "NOT_INDEXING"
    ]
], 1);
class Ft extends u {
    constructor(t){
        super(), this.syncedHistories = [], n.proto3.util.initPartial(t, this);
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
            "RepoHistorySyncCompleteRequest|1 synced_histories #0*",
            $t
        ];
    }
}
var Lt = (0, o.QT)(n.proto3, a, "RepoHistorySyncCompleteRequest.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SUCCESS"
    ],
    [
        2,
        "FAILURE"
    ],
    [
        3,
        "TOTAL_FAILURE"
    ],
    [
        4,
        "INTERRUPTED"
    ]
], 1);
class $t extends u {
    constructor(t){
        super(), this.historyId = "", this.status = Lt.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
            "RepoHistorySyncCompleteRequest.SyncedHistory|1 history_id 9|2 status #0|3 last_indexed_commit 9?|4 last_indexed_commit_secret 9?|5 last_indexed_commit_generation 13?",
            Lt
        ];
    }
}
class Gt extends u {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "RepoHistorySyncCompleteResponse"
        ];
    }
}
class Ht extends u {
    constructor(t){
        super(), this.query = "", this.topK = 0, n.proto3.util.initPartial(t, this);
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
            "SearchPRHistoryRequest|1 repository #0|2 query 9|3 top_k 5",
            Jt
        ];
    }
}
class Kt extends u {
    constructor(t){
        super(), this.filePath = "", this.startLineNumberZeroIndexed = 0, this.endLineNumberZeroIndexedExclusive = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Kt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Kt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Kt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Kt, t, e);
    }
    static $() {
        return [
            "PRDiffChunkPointer|1 file_path 9|2 start_line_number_zero_indexed 5|3 end_line_number_zero_indexed_exclusive 5"
        ];
    }
}
class Vt extends u {
    constructor(t){
        super(), this.results = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vt, t, e);
    }
    static $() {
        return [
            "SearchPRHistoryResponse|1 results #0*|2 git_height 13?",
            zt
        ];
    }
}
class zt extends u {
    constructor(t){
        super(), this.commitHash = "", this.score = 0, this.diffChunks = [], this.changedFiles = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zt, t, e);
    }
    static $() {
        return [
            "SearchPRHistoryResponse.PRSearchResult|1 commit_hash 9|2 score 2|3 diff_chunks #0*|4 title 9?|5 summary 9?|6 pr_number 13?|7 author 9?|8 date 9?|9 changed_files 9*",
            Kt
        ];
    }
}
class Wt extends u {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wt, t, e);
    }
    static $() {
        return [
            "RemoveRepoHistoryRequest|1 repository #0",
            Jt
        ];
    }
}
class Yt extends u {
    constructor(t){
        super(), this.status = jt.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yt, t, e);
    }
    static $() {
        return [
            "RemoveRepoHistoryResponse|1 status #0",
            jt
        ];
    }
}
var jt = (0, o.QT)(n.proto3, a, "RemoveRepoHistoryResponse.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NOT_FOUND"
    ],
    [
        2,
        "NOT_AUTHORIZED"
    ],
    [
        3,
        "PARTIAL_SUCCESS"
    ],
    [
        4,
        "SUCCESS"
    ]
], 1);
class Xt extends u {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "GetPRIndexingStatusRequest|1 repository #0",
            Jt
        ];
    }
}
class Zt extends u {
    constructor(t){
        super(), this.status = te.UNSPECIFIED, this.syncPercentage = 0, n.proto3.util.initPartial(t, this);
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
            "GetPRIndexingStatusResponse|1 status #0|2 sync_percentage 2|3 last_indexed_commit 9?|4 last_indexed_generation 13?|5 total_commits 13?|6 indexing_rate 2?|7 last_updated_timestamp 3?|8 index_version 13?",
            te
        ];
    }
}
var te = (0, o.QT)(n.proto3, a, "GetPRIndexingStatusResponse.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "EMPTY"
    ],
    [
        2,
        "SYNCING"
    ],
    [
        3,
        "SYNCED"
    ],
    [
        4,
        "PARTIAL"
    ]
], 1);
