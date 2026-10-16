"use strict";
require.d(exports, {
    Em: ()=>k,
    FF: ()=>Me,
    FT: ()=>Fe,
    GL: ()=>se,
    Hm: ()=>Ie,
    Hr: ()=>B,
    I1: ()=>De,
    JN: ()=>D,
    Mx: ()=>K,
    N5: ()=>ve,
    NG: ()=>p,
    NS: ()=>O,
    Nj: ()=>M,
    OM: ()=>Te,
    OQ: ()=>oe,
    Og: ()=>Le,
    Qv: ()=>$e,
    Sz: ()=>pe,
    U4: ()=>ge,
    UI: ()=>j,
    V8: ()=>T,
    WJ: ()=>ne,
    WQ: ()=>Qe,
    Ws: ()=>V,
    X8: ()=>Q,
    Yn: ()=>_,
    _I: ()=>P,
    _O: ()=>h,
    a1: ()=>_e,
    aU: ()=>Oe,
    aZ: ()=>Ae,
    as: ()=>c,
    bB: ()=>ae,
    bH: ()=>Ee,
    dy: ()=>J,
    eH: ()=>$,
    fp: ()=>Ue,
    gu: ()=>Ce,
    hw: ()=>d,
    i1: ()=>I,
    jU: ()=>re,
    kk: ()=>ie,
    l4: ()=>m,
    mr: ()=>me,
    op: ()=>Ge,
    p0: ()=>U,
    ph: ()=>R,
    q$: ()=>Be,
    q5: ()=>Re,
    qZ: ()=>be,
    rX: ()=>L,
    rd: ()=>we,
    sc: ()=>Se,
    t3: ()=>de,
    tK: ()=>W,
    uH: ()=>b,
    uM: ()=>xe,
    uj: ()=>C,
    vz: ()=>w,
    x$: ()=>v,
    xL: ()=>S,
    xN: ()=>z,
    xQ: ()=>qe,
    zc: ()=>F
});
var n = require("./module-36038.js"), s = require("./module-8592.js");
const o = "aiserver.v1.";
class i extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return o;
    }
}
var a = (0, s.QT)(n.proto3, o, "AgentStoreKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CLOUD"
    ],
    [
        2,
        "LOCAL"
    ],
    [
        3,
        "AUTOMATION"
    ],
    [
        4,
        "USER"
    ],
    [
        5,
        "TEAM"
    ],
    [
        6,
        "NAMED_AGENT"
    ],
    [
        7,
        "GROK_BOT"
    ]
], 1), c = (0, s.QT)(n.proto3, o, "AgentStoreSourceKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CLOUD"
    ],
    [
        2,
        "LOCAL"
    ],
    [
        3,
        "AUTOMATION"
    ],
    [
        4,
        "USER"
    ],
    [
        5,
        "TEAM"
    ],
    [
        6,
        "NAMED_AGENT"
    ],
    [
        7,
        "GROK_BOT"
    ]
], 1), l = (0, s.QT)(n.proto3, o, "AgentStoreEntryKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DIRECTORY"
    ],
    [
        2,
        "FILE"
    ]
], 1), u = (0, s.QT)(n.proto3, o, "AgentStoreDocumentVisibility", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PRIVATE"
    ],
    [
        2,
        "TEAM_VIEW"
    ],
    [
        3,
        "PUBLIC"
    ]
], 1), d = (0, s.QT)(n.proto3, o, "AgentStoreTombstoneMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "INCLUDE"
    ],
    [
        2,
        "OMIT"
    ],
    [
        3,
        "SINCE"
    ]
], 1), p = (0, s.QT)(n.proto3, o, "AgentStoreDirectoryListingMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DIRECTORY_PAGE"
    ],
    [
        2,
        "COMPLETE_FLAT_STORE"
    ],
    [
        3,
        "COMPLETE_FLAT_SUBTREE"
    ]
], 1), m = (0, s.QT)(n.proto3, o, "AgentStoreMultipartOperationFailureCode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PRECONDITION_FAILED"
    ],
    [
        2,
        "UPLOAD_NOT_FOUND"
    ],
    [
        3,
        "INVALID_PARTS"
    ],
    [
        4,
        "CHECKSUM_MISMATCH"
    ],
    [
        5,
        "TRANSIENT"
    ],
    [
        6,
        "INTERNAL"
    ],
    [
        7,
        "RESTART_REQUIRED"
    ]
], 1), h = (0, s.QT)(n.proto3, o, "AgentStoreDeleteFileStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DELETED"
    ],
    [
        2,
        "ALREADY_DELETED"
    ],
    [
        3,
        "CONFLICT"
    ]
], 1), f = (0, s.QT)(n.proto3, o, "AgentStoreUndeleteFileStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "RESTORED"
    ],
    [
        2,
        "NOT_DELETED"
    ],
    [
        3,
        "CONFLICT"
    ],
    [
        4,
        "UNRECOVERABLE"
    ],
    [
        5,
        "TOO_LARGE"
    ]
], 1), g = (0, s.QT)(n.proto3, o, "AgentStoreShareVisibility", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        2,
        "TEAM"
    ],
    [
        3,
        "PUBLIC"
    ]
], 1), y = (0, s.QT)(n.proto3, o, "ListSharedAgentStoresScope", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MINE"
    ],
    [
        2,
        "TEAM"
    ]
], 1);
class w extends i {
    constructor(e){
        super(), this.n = 0, n.proto3.util.initPartial(e, this);
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
            "ListAgentStoresRequest|1 n 5|5 page_token 9?"
        ];
    }
}
class v extends i {
    constructor(e){
        super(), this.kind = c.UNSPECIFIED, this.sourceId = "", n.proto3.util.initPartial(e, this);
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
            "AgentStoreSourceRef|1 kind #0|2 source_id 9",
            c
        ];
    }
}
class _ extends i {
    constructor(e){
        super(), this.target = {
            case: void 0
        }, this.serverGenerated = !1, n.proto3.util.initPartial(e, this);
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
            "AgentStoreMount|1 mount_name 9?|2 source #0 target|3 store_id 9 target|4 share_id 9 target|5 server_generated 8",
            v
        ];
    }
}
class A extends i {
    constructor(e){
        super(), this.storeId = "", this.createdAtMs = 0, this.updatedAtMs = 0, this.repoUrls = [], this.shares = [], this.kind = a.UNSPECIFIED, this.sourceId = "", n.proto3.util.initPartial(e, this);
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
            "AgentStore|1 store_id 9|4 created_at_ms 1|5 updated_at_ms 1|8 repo_urls 9*|9 shares #0*|10 kind #1|11 last_file_write_at_ms 1?|12 source_id 9|13 source_display_name 9?|14 source #2",
            Ne,
            a,
            v
        ];
    }
}
class S extends i {
    constructor(e){
        super(), this.stores = [], this.hasMore = !1, n.proto3.util.initPartial(e, this);
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
            "ListAgentStoresResponse|1 stores #0*|2 has_more 8|4 next_page_token 9?",
            A
        ];
    }
}
class b extends i {
    constructor(e){
        super(), this.storeId = "", this.relativePath = "", n.proto3.util.initPartial(e, this);
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
            "ListAgentStoreEntriesRequest|1 store_id 9|2 relative_path 9|3 share_id 9?"
        ];
    }
}
class E extends i {
    constructor(e){
        super(), this.name = "", this.relativePath = "", this.kind = l.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "AgentStoreEntry|1 name 9|2 relative_path 9|3 kind #0|4 size_bytes 3?|5 updated_at_ms 1?",
            l
        ];
    }
}
class I extends i {
    constructor(e){
        super(), this.normalizedRelativePath = "", this.entries = [], n.proto3.util.initPartial(e, this);
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
            "ListAgentStoreEntriesResponse|1 normalized_relative_path 9|2 entries #0*",
            E
        ];
    }
}
class C extends i {
    constructor(e){
        super(), this.storeId = "", this.relativePath = "", n.proto3.util.initPartial(e, this);
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
            "ReadAgentStoreFileRequest|1 store_id 9|2 relative_path 9|3 share_id 9?"
        ];
    }
}
class k extends i {
    constructor(e){
        super(), this.content = "", n.proto3.util.initPartial(e, this);
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
            "ReadAgentStoreFileResponse|1 content 9|2 document_owner_view #0?",
            x
        ];
    }
}
class x extends i {
    constructor(e){
        super(), this.visibility = u.UNSPECIFIED, this.canShareToTeam = !1, n.proto3.util.initPartial(e, this);
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
            "AgentStoreDocumentOwnerView|1 visibility #0|2 can_share_to_team 8",
            u
        ];
    }
}
class T extends i {
    constructor(e){
        super(), this.storeId = "", this.documentId = "", this.visibility = u.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "SetAgentStoreDocumentVisibilityRequest|1 store_id 9|2 document_id 9|3 visibility #0",
            u
        ];
    }
}
class R extends i {
    constructor(e){
        super(), this.visibility = u.UNSPECIFIED, this.url = "", n.proto3.util.initPartial(e, this);
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
            "SetAgentStoreDocumentVisibilityResponse|1 visibility #0|2 url 9",
            u
        ];
    }
}
class B extends i {
    constructor(e){
        super(), this.storeId = "", this.documentId = "", this.source = "", n.proto3.util.initPartial(e, this);
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
            "WriteAgentStoreDocumentRequest|1 store_id 9|2 document_id 9|3 source 9"
        ];
    }
}
class P extends i {
    constructor(e){
        super(), this.etag = "", this.title = "", this.url = "", n.proto3.util.initPartial(e, this);
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
            "WriteAgentStoreDocumentResponse|1 etag 9|3 title 9|4 url 9"
        ];
    }
}
class J extends i {
    constructor(e){
        super(), this.agentId = "", n.proto3.util.initPartial(e, this);
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
            "MintAgentStoreTokenRequest|1 agent_id 9|2 share_id 9?|3 store_id 9?|4 source #0",
            v
        ];
    }
}
class M extends i {
    constructor(e){
        super(), this.token = "", this.expiresAtMs = n.protoInt64.zero, this.agentIds = [], this.storeIds = [], n.proto3.util.initPartial(e, this);
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
            "MintAgentStoreTokenResponse|1 token 9|2 expires_at_ms 3|3 agent_ids 9*|4 store_ids 9*"
        ];
    }
}
class q extends i {
    constructor(e){
        super(), this.relPath = "", this.etag = "", this.sizeBytes = n.protoInt64.zero, this.lastModifiedMs = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
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
            "AgentStoreFileEntry|1 rel_path 9|2 etag 9|3 size_bytes 3|4 last_modified_ms 3"
        ];
    }
}
class D extends i {
    constructor(e){
        super(), this.agentId = "", this.tombstoneMode = d.UNSPECIFIED, this.tombstonesSinceMs = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
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
            "ListAgentStoreFilesRequest|1 agent_id 9|2 share_id 9?|3 store_id 9?|4 tombstone_mode #0|5 tombstones_since_ms 3",
            d
        ];
    }
}
class O extends i {
    constructor(e){
        super(), this.files = [], this.tombstones = [], this.listingComplete = !1, this.tombstoneWatermarkMs = n.protoInt64.zero, this.tombstoneFloorMs = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
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
            "ListAgentStoreFilesResponse|1 files #0*|2 tombstones #1*|3 listing_complete 8|4 tombstone_watermark_ms 3|5 tombstone_floor_ms 3",
            q,
            N
        ];
    }
}
class N extends i {
    constructor(e){
        super(), this.relPath = "", this.tombstoneEtag = "", this.deletedAtMs = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
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
            "AgentStoreTombstone|1 rel_path 9|2 tombstone_etag 9|3 deleted_at_ms 3"
        ];
    }
}
class F extends i {
    constructor(e){
        super(), this.relativePath = "", this.pageSize = 0, this.pageToken = "", this.preferCompleteFlatStore = !1, this.tombstoneMode = d.UNSPECIFIED, this.tombstonesSinceMs = n.protoInt64.zero, this.ifVersionEqual = "", n.proto3.util.initPartial(e, this);
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
            "ListAgentStoreDirectoryRequest|1 store_id 9?|2 share_id 9?|3 relative_path 9|4 page_size 5|5 page_token 9|6 prefer_complete_flat_store 8|7 tombstone_mode #0|8 tombstones_since_ms 3|9 if_version_equal 9",
            d
        ];
    }
}
class U extends i {
    constructor(e){
        super(), this.files = [], this.subdirs = [], this.nextPageToken = "", this.mode = p.UNSPECIFIED, this.tombstones = [], this.removedSubdirs = [], this.listingComplete = !1, this.tombstoneWatermarkMs = n.protoInt64.zero, this.tombstoneFloorMs = n.protoInt64.zero, this.version = "", this.notModified = !1, n.proto3.util.initPartial(e, this);
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
            "ListAgentStoreDirectoryResponse|1 files #0*|2 subdirs 9*|3 next_page_token 9|4 mode #1|5 tombstones #2*|6 removed_subdirs 9*|7 listing_complete 8|8 tombstone_watermark_ms 3|9 tombstone_floor_ms 3|10 version 9|11 not_modified 8",
            q,
            p,
            N
        ];
    }
}
class L extends i {
    constructor(e){
        super(), this.entries = [], n.proto3.util.initPartial(e, this);
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
            "CheckAgentStoreVersionsRequest|1 entries #0*",
            $
        ];
    }
}
class $ extends i {
    constructor(e){
        super(), this.requestId = "", this.token = "", this.version = "", this.preferCompleteFlatStore = !1, n.proto3.util.initPartial(e, this);
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
            "CheckAgentStoreVersionsRequest.Entry|1 request_id 9|2 store_id 9?|3 share_id 9?|4 token 9|5 version 9|6 prefer_complete_flat_store 8"
        ];
    }
}
class Q extends i {
    constructor(e){
        super(), this.results = [], n.proto3.util.initPartial(e, this);
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
            "CheckAgentStoreVersionsResponse|1 results #0*",
            G
        ];
    }
}
var j = (0, s.QT)(n.proto3, o, "CheckAgentStoreVersionsResponse.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "UNCHANGED"
    ],
    [
        2,
        "CHANGED"
    ],
    [
        3,
        "UNAUTHORIZED"
    ],
    [
        4,
        "ERROR"
    ]
], 1);
class G extends i {
    constructor(e){
        super(), this.requestId = "", this.status = j.UNSPECIFIED, this.version = "", this.tombstoneWatermarkMs = n.protoInt64.zero, this.tombstoneFloorMs = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
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
            "CheckAgentStoreVersionsResponse.Result|1 request_id 9|2 status #0|3 version 9|4 tombstone_watermark_ms 3|5 tombstone_floor_ms 3",
            j
        ];
    }
}
class H extends i {
    constructor(e){
        super(), this.relPath = "", this.url = "", this.expiresAtMs = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
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
            "AgentStoreReadInstruction|1 rel_path 9|2 url 9|3 expires_at_ms 3"
        ];
    }
}
class z extends i {
    constructor(e){
        super(), this.agentId = "", this.relPaths = [], n.proto3.util.initPartial(e, this);
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
            "PresignAgentStoreReadsRequest|1 agent_id 9|2 rel_paths 9*|3 share_id 9?|4 store_id 9?"
        ];
    }
}
class W extends i {
    constructor(e){
        super(), this.instructions = [], n.proto3.util.initPartial(e, this);
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
            "PresignAgentStoreReadsResponse|1 instructions #0*",
            H
        ];
    }
}
class V extends i {
    constructor(e){
        super(), this.partNumber = 0, this.offsetBytes = n.protoInt64.zero, this.sizeBytes = n.protoInt64.zero, this.checksumSha256 = new Uint8Array(0), n.proto3.util.initPartial(e, this);
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
            "AgentStoreMultipartUploadPartDescriptor|1 part_number 13|2 offset_bytes 3|3 size_bytes 3|4 checksum_sha256 12"
        ];
    }
}
class K extends i {
    constructor(e){
        super(), this.relPath = "", this.sizeBytes = n.protoInt64.zero, this.sha = "", this.precondition = {
            case: void 0
        }, this.multipartParts = [], n.proto3.util.initPartial(e, this);
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
            "AgentStoreWriteFileEntry|1 rel_path 9|2 size_bytes 3|3 sha 9|4 base_etag 9 precondition|5 expect_absent 8 precondition|6 multipart_parts #0*",
            V
        ];
    }
}
class Y extends i {
    constructor(e){
        super(), this.relPath = "", this.url = "", this.headers = {}, this.expiresAtMs = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
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
            "AgentStoreConflictWriteInstruction|1 rel_path 9|2 url 9|3 headers 9,9|4 expires_at_ms 3|5 multipart #0?",
            ee
        ];
    }
}
class Z extends i {
    constructor(e){
        super(), this.conflictRelPath = "", this.lockExpiresAtMs = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
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
            "AgentStoreLockRedirect|1 holder #0?|2 conflict_rel_path 9|3 lock_expires_at_ms 3",
            ye
        ];
    }
}
class X extends i {
    constructor(e){
        super(), this.relPath = "", this.url = "", this.headers = {}, this.expiresAtMs = n.protoInt64.zero, this.primaryPreconditionFailed = !1, n.proto3.util.initPartial(e, this);
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
            "AgentStoreWriteInstruction|1 rel_path 9|2 url 9|3 headers 9,9|4 expires_at_ms 3|5 conflict #0?|6 lock_redirect #1?|7 multipart #2?|8 primary_precondition_failed 8",
            Y,
            Z,
            ee
        ];
    }
}
class ee extends i {
    constructor(e){
        super(), this.parts = [], this.partUrlsExpiresAtMs = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
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
            "AgentStoreMultipartWriteInstruction|1 context #0|2 parts #1*|3 part_urls_expires_at_ms 3",
            re,
            te
        ];
    }
}
class te extends i {
    constructor(e){
        super(), this.partNumber = 0, this.url = "", this.headers = {}, this.offsetBytes = n.protoInt64.zero, this.sizeBytes = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
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
            "AgentStoreMultipartUploadPartInstruction|1 part_number 13|2 url 9|3 headers 9,9|4 offset_bytes 3|5 size_bytes 3"
        ];
    }
}
class re extends i {
    constructor(e){
        super(), this.uploadId = "", this.storeId = "", this.relPath = "", this.sizeBytes = n.protoInt64.zero, this.sha = "", this.expectedPartCount = 0, this.precondition = {
            case: void 0
        }, this.sessionId = "", n.proto3.util.initPartial(e, this);
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
            "AgentStoreMultipartUploadContext|1 upload_id 9|2 store_id 9|3 rel_path 9|4 size_bytes 3|5 sha 9|6 expected_part_count 13|7 base_etag 9 precondition|8 expect_absent 8 precondition|9 session_id 9"
        ];
    }
}
class ne extends i {
    constructor(e){
        super(), this.agentId = "", this.files = [], this.supportsSignedContentLength = !1, n.proto3.util.initPartial(e, this);
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
            "PresignAgentStoreWritesRequest|1 agent_id 9|2 files #0*|3 store_id 9?|4 lock_token 9?|5 lock_client_uuid 9?|6 supports_signed_content_length 8",
            K
        ];
    }
}
class se extends i {
    constructor(e){
        super(), this.instructions = [], n.proto3.util.initPartial(e, this);
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
            "PresignAgentStoreWritesResponse|1 instructions #0*",
            X
        ];
    }
}
class oe extends i {
    constructor(e){
        super(), this.partNumber = 0, this.etag = "", this.checksumSha256 = new Uint8Array(0), n.proto3.util.initPartial(e, this);
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
            "AgentStoreMultipartUploadedPart|1 part_number 13|2 etag 9|3 checksum_sha256 12"
        ];
    }
}
class ie extends i {
    constructor(e){
        super(), this.parts = [], n.proto3.util.initPartial(e, this);
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
            "AgentStoreMultipartWriteCompletion|1 context #0|2 parts #1*",
            re,
            oe
        ];
    }
}
class ae extends i {
    constructor(e){
        super(), this.storeId = "", this.completions = [], n.proto3.util.initPartial(e, this);
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
            "CompleteAgentStoreMultipartWritesRequest|1 store_id 9|2 completions #0*",
            ie
        ];
    }
}
class ce extends i {
    constructor(e){
        super(), this.etag = "", n.proto3.util.initPartial(e, this);
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
            "AgentStoreMultipartWriteSuccess|1 etag 9"
        ];
    }
}
class le extends i {
    constructor(e){
        super(), this.code = m.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "AgentStoreMultipartOperationFailure|1 code #0",
            m
        ];
    }
}
class ue extends i {
    constructor(e){
        super(), this.inputIndex = 0, this.relPath = "", this.outcome = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "AgentStoreMultipartWriteResult|1 input_index 13|2 rel_path 9|3 success #0 outcome|4 failure #1 outcome",
            ce,
            le
        ];
    }
}
class de extends i {
    constructor(e){
        super(), this.results = [], n.proto3.util.initPartial(e, this);
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
            "CompleteAgentStoreMultipartWritesResponse|1 results #0*",
            ue
        ];
    }
}
class pe extends i {
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
            "AgentStoreMultipartWriteAbort|1 context #0",
            re
        ];
    }
}
class me extends i {
    constructor(e){
        super(), this.storeId = "", this.uploads = [], n.proto3.util.initPartial(e, this);
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
            "AbortAgentStoreMultipartWritesRequest|1 store_id 9|2 uploads #0*",
            pe
        ];
    }
}
class he extends i {
    constructor(e){
        super(), this.alreadyFinished = !1, n.proto3.util.initPartial(e, this);
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
            "AgentStoreMultipartAbortSuccess|1 already_finished 8"
        ];
    }
}
class fe extends i {
    constructor(e){
        super(), this.inputIndex = 0, this.relPath = "", this.outcome = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "AgentStoreMultipartAbortResult|1 input_index 13|2 rel_path 9|3 success #0 outcome|4 failure #1 outcome",
            he,
            le
        ];
    }
}
class ge extends i {
    constructor(e){
        super(), this.results = [], n.proto3.util.initPartial(e, this);
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
            "AbortAgentStoreMultipartWritesResponse|1 results #0*",
            fe
        ];
    }
}
class ye extends i {
    constructor(e){
        super(), this.clientUuid = "", this.pid = 0, n.proto3.util.initPartial(e, this);
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
            "AgentStoreFileLockHolder|1 client_uuid 9|2 pid 13"
        ];
    }
}
class we extends i {
    constructor(e){
        super(), this.storeId = "", this.relPath = "", this.acquisitionId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new we).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new we).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new we).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(we, e, t);
    }
    static $() {
        return [
            "AcquireAgentStoreFileLockRequest|1 store_id 9|2 rel_path 9|3 holder #0|4 acquisition_id 9|5 ttl_seconds 3?",
            ye
        ];
    }
}
class ve extends i {
    constructor(e){
        super(), this.acquired = !1, this.expiresAtMs = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
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
            "AcquireAgentStoreFileLockResponse|1 acquired 8|2 lock_token 9?|3 current_holder #0?|4 expires_at_ms 3",
            ye
        ];
    }
}
class _e extends i {
    constructor(e){
        super(), this.storeId = "", this.relPath = "", this.lockToken = "", n.proto3.util.initPartial(e, this);
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
            "RenewAgentStoreFileLockRequest|1 store_id 9|2 rel_path 9|3 lock_token 9"
        ];
    }
}
class Ae extends i {
    constructor(e){
        super(), this.renewed = !1, this.expiresAtMs = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
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
            "RenewAgentStoreFileLockResponse|1 renewed 8|2 expires_at_ms 3"
        ];
    }
}
class Se extends i {
    constructor(e){
        super(), this.storeId = "", this.relPath = "", this.lockToken = "", n.proto3.util.initPartial(e, this);
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
            "ReleaseAgentStoreFileLockRequest|1 store_id 9|2 rel_path 9|3 lock_token 9"
        ];
    }
}
class be extends i {
    constructor(e){
        super(), this.released = !1, n.proto3.util.initPartial(e, this);
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
            "ReleaseAgentStoreFileLockResponse|1 released 8"
        ];
    }
}
class Ee extends i {
    constructor(e){
        super(), this.storeId = "", this.relPath = "", n.proto3.util.initPartial(e, this);
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
            "GetAgentStoreFileLockRequest|1 store_id 9|2 rel_path 9"
        ];
    }
}
class Ie extends i {
    constructor(e){
        super(), this.held = !1, this.expiresAtMs = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
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
            "GetAgentStoreFileLockResponse|1 held 8|2 holder #0?|3 expires_at_ms 3",
            ye
        ];
    }
}
class Ce extends i {
    constructor(e){
        super(), this.relPath = "", this.baseEtag = "", this.deleteCurrent = !1, n.proto3.util.initPartial(e, this);
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
            "AgentStoreDeleteFileEntry|1 rel_path 9|2 base_etag 9|3 mutation_id 9?|4 delete_current 8"
        ];
    }
}
class ke extends i {
    constructor(e){
        super(), this.relPath = "", this.status = h.UNSPECIFIED, this.tombstoneEtag = "", n.proto3.util.initPartial(e, this);
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
            "AgentStoreDeleteFileResult|1 rel_path 9|2 status #0|3 tombstone_etag 9|4 current_etag 9?",
            h
        ];
    }
}
class xe extends i {
    constructor(e){
        super(), this.files = [], n.proto3.util.initPartial(e, this);
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
            "DeleteAgentStoreFilesRequest|1 store_id 9?|2 files #0*",
            Ce
        ];
    }
}
class Te extends i {
    constructor(e){
        super(), this.results = [], n.proto3.util.initPartial(e, this);
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
            "DeleteAgentStoreFilesResponse|1 results #0*",
            ke
        ];
    }
}
class Re extends i {
    constructor(e){
        super(), this.relPath = "", n.proto3.util.initPartial(e, this);
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
            "RmdirAgentStoreRequest|1 store_id 9?|2 share_id 9?|3 rel_path 9"
        ];
    }
}
class Be extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "RmdirAgentStoreResponse"
        ];
    }
}
class Pe extends i {
    constructor(e){
        super(), this.relPath = "", this.tombstoneEtag = "", n.proto3.util.initPartial(e, this);
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
            "AgentStoreUndeleteFileEntry|1 rel_path 9|2 tombstone_etag 9|3 mutation_id 9?"
        ];
    }
}
class Je extends i {
    constructor(e){
        super(), this.relPath = "", this.status = f.UNSPECIFIED, this.restoredEtag = "", n.proto3.util.initPartial(e, this);
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
            "AgentStoreUndeleteFileResult|1 rel_path 9|2 status #0|3 restored_etag 9|4 current_etag 9?",
            f
        ];
    }
}
class Me extends i {
    constructor(e){
        super(), this.files = [], n.proto3.util.initPartial(e, this);
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
            "UndeleteAgentStoreFilesRequest|1 store_id 9?|2 files #0*",
            Pe
        ];
    }
}
class qe extends i {
    constructor(e){
        super(), this.results = [], n.proto3.util.initPartial(e, this);
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
            "UndeleteAgentStoreFilesResponse|1 results #0*",
            Je
        ];
    }
}
class De extends i {
    constructor(e){
        super(), this.storeId = "", this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(e, this);
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
            "ListAgentStoreTombstonesRequest|1 store_id 9|2 page_size 5|3 page_token 9"
        ];
    }
}
class Oe extends i {
    constructor(e){
        super(), this.tombstones = [], this.nextPageToken = "", n.proto3.util.initPartial(e, this);
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
            "ListAgentStoreTombstonesResponse|1 tombstones #0*|2 next_page_token 9",
            N
        ];
    }
}
class Ne extends i {
    constructor(e){
        super(), this.shareId = "", this.pathPrefix = "", this.visibility = g.UNSPECIFIED, this.createdAtMs = 0, n.proto3.util.initPartial(e, this);
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
            "SharedAgentStoreInfo|1 share_id 9|2 path_prefix 9|3 visibility #0|4 created_at_ms 1|5 revoked_at_ms 1?",
            g
        ];
    }
}
class Fe extends i {
    constructor(e){
        super(), this.agentId = "", this.pathPrefix = "", n.proto3.util.initPartial(e, this);
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
            "ShareAgentStoreRequest|1 agent_id 9|2 path_prefix 9|4 store_id 9?|5 source #0",
            v
        ];
    }
}
class Ue extends i {
    constructor(e){
        super(), this.shareId = "", this.shareUrl = "", n.proto3.util.initPartial(e, this);
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
            "ShareAgentStoreResponse|1 share_id 9|2 share_url 9"
        ];
    }
}
class Le extends i {
    constructor(e){
        super(), this.shareId = "", n.proto3.util.initPartial(e, this);
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
            "UnshareAgentStoreRequest|1 share_id 9"
        ];
    }
}
class $e extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "UnshareAgentStoreResponse"
        ];
    }
}
class Qe extends i {
    constructor(e){
        super(), this.limit = 0, n.proto3.util.initPartial(e, this);
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
            "ListSharedAgentStoresRequest|1 limit 5|2 created_before_ms 1?|3 owning_user_id 5?|4 search_query 9?|5 scope #0?|6 created_before_share_id 9?",
            y
        ];
    }
}
class je extends i {
    constructor(e){
        super(), this.shareId = "", this.agentId = "", this.storeId = "", this.pathPrefix = "", this.visibility = g.UNSPECIFIED, this.createdAtMs = 0, this.ownerDisplayName = "", this.storeKind = "", this.kind = a.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "SharedAgentStoreListing|1 share_id 9|2 agent_id 9|3 store_id 9|4 path_prefix 9|5 visibility #0|6 created_at_ms 1|7 revoked_at_ms 1?|8 owning_user_id 5?|9 owning_team_id 5?|10 owner_display_name 9|11 store_kind 9|12 kind #1|13 source #2",
            g,
            a,
            v
        ];
    }
}
class Ge extends i {
    constructor(e){
        super(), this.listings = [], this.hasMore = !1, n.proto3.util.initPartial(e, this);
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
            "ListSharedAgentStoresResponse|1 listings #0*|2 has_more 8|3 next_created_before_ms 1?|4 next_created_before_share_id 9?",
            je
        ];
    }
}
