"use strict";
require.d(exports, {
    PT: ()=>g,
    yX: ()=>y,
    bq: ()=>f,
    xq: ()=>m,
    bn: ()=>w,
    se: ()=>p,
    bD: ()=>S,
    AY: ()=>v
});
var n = require("./module-36038.js"), o = require("./module-67918.js"), s = require("./module-8592.js");
const i = "aiserver.v1.";
class a extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return i;
    }
}
class l extends a {
    constructor(e){
        super(), this.indexId = "", this.id = "", this.summary = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new l).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new l).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new l).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(l, e, t);
    }
    static $() {
        return [
            "ReflectionData|1 index_id 9|2 id 9|3 summary 9"
        ];
    }
}
class c extends a {
    constructor(e){
        super(), this.nodeId = "", this.stage = "", this.content = "", this.summary = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new c).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new c).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new c).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(c, e, t);
    }
    static $() {
        return [
            "IndexFileData.NodeData|1 node_id 9|2 stage 9|3 content 9|4 summary 9"
        ];
    }
}
n.proto3;
const u = "aiserver.v1.";
class d extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return u;
    }
}
n.proto3, n.proto3, n.proto3;
var p = (0, s.QT)(n.proto3, u, "RerankerAlgorithm", [
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
], 1), h = (0, s.QT)(n.proto3, u, "DatabaseProvider", [
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
], 1), m = (0, s.QT)(n.proto3, u, "RechunkerChoice", [
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
n.proto3;
n.proto3;
n.proto3;
n.proto3;
n.proto3;
n.proto3;
n.proto3;
n.proto3;
n.proto3;
n.proto3;
n.proto3;
n.proto3;
n.proto3;
n.proto3;
n.proto3;
n.proto3;
n.proto3;
n.proto3;
class f extends d {
    constructor(e){
        super(), this.ownerAuthId = "", this.accessToken = "", this.userRepoOwner = "", this.userRepoName = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new f).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new f).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new f).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(f, e, t);
    }
    static $() {
        return [
            "QueryOnlyRepoAccess|1 owner_auth_id 9|2 access_token 9|3 user_repo_owner 9|4 user_repo_name 9"
        ];
    }
}
class g extends d {
    constructor(e){
        super(), this.score = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new g).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new g).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new g).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(g, e, t);
    }
    static $() {
        return [
            "CodeResult|1 code_block #0|2 score 2",
            o.NG
        ];
    }
}
class y extends d {
    constructor(e){
        super(), this.score = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new y).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new y).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new y).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(y, e, t);
    }
    static $() {
        return [
            "FileResult|1 file #0|2 score 2",
            o.ZH
        ];
    }
}
class v extends d {
    constructor(e){
        super(), this.codeResults = [], n.proto3.util.initPartial(e, this);
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
            "SearchRepositoryResponse|1 code_results #0*",
            g
        ];
    }
}
n.proto3;
n.proto3;
n.proto3;
class w extends d {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.remoteUrls = [], this.remoteNames = [], this.repoName = "", this.repoOwner = "", this.isTracked = !1, this.isLocal = !1, this.workspaceUri = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new w).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new w).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new w).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(w, e, t);
    }
    static $() {
        return [
            "RepositoryInfo|1 relative_workspace_path 9|2 remote_urls 9*|3 remote_names 9*|4 repo_name 9|5 repo_owner 9|6 is_tracked 8|7 is_local 8|8 num_files 5?|9 orthogonal_transform_seed 1?|10 preferred_embedding_model #0?|11 workspace_uri 9|12 preferred_db_provider #1?",
            o.Nj,
            h
        ];
    }
}
class b extends d {
    constructor(e){
        super(), this.score = 0, n.proto3.util.initPartial(e, this);
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
            "NodeResult|1 node #0|2 file #1|3 score 2",
            c,
            o.ZH
        ];
    }
}
class _ extends d {
    constructor(e){
        super(), this.score = 0, n.proto3.util.initPartial(e, this);
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
            "ReflectionResult|1 reflection #0|2 score 2",
            l
        ];
    }
}
class S extends d {
    constructor(e){
        super(), this.topNodes = [], this.reflections = [], this.indexId = "", n.proto3.util.initPartial(e, this);
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
            "SearchRepositoryDeepContextResponse|1 top_nodes #0*|2 reflections #1*|3 index_id 9",
            b,
            _
        ];
    }
}
n.proto3, n.proto3;
n.proto3;
n.proto3;
n.proto3;
n.proto3;
n.proto3;
