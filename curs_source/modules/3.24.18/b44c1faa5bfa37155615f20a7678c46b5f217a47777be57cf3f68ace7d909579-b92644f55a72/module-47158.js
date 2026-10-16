"use strict";
require.r(exports), require.d(exports, {
    UploadService: ()=>k
});
var n = require("./module-36038.js"), s = require("./module-65610.js"), o = require("./module-8592.js");
const i = "aiserver.v1.";
class a extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return i;
    }
}
var c = (0, o.QT)(n.proto3, i, "UploadStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "IN_PROGRESS"
    ],
    [
        2,
        "SUCCEEDED"
    ],
    [
        3,
        "FAILED"
    ],
    [
        4,
        "NOT_FOUND"
    ]
], 1);
class l extends a {
    constructor(e){
        super(), this.docIdentifier = "", n.proto3.util.initPartial(e, this);
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
            "RescrapeDocsRequest|1 doc_identifier 9|2 force_reupload 8?"
        ];
    }
}
class u extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new u).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new u).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new u).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(u, e, t);
    }
    static $() {
        return [
            "RescrapeDocsRequestV2|1 new_doc_req #0|2 force_reupload 8?",
            _
        ];
    }
}
class d extends a {
    constructor(e){
        super(), this.success = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new d).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new d).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new d).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(d, e, t);
    }
    static $() {
        return [
            "RescrapeDocsResponse|1 success 8|2 new_doc_identifier 9?"
        ];
    }
}
class p extends a {
    constructor(e){
        super(), this.docIdentifier = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new p).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new p).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new p).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(p, e, t);
    }
    static $() {
        return [
            "UploadedStatusRequest|1 doc_identifier 9"
        ];
    }
}
class m extends a {
    constructor(e){
        super(), this.docIdentifier = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new m).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new m).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new m).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(m, e, t);
    }
    static $() {
        return [
            "UploadDocumentationRequest|1 doc_identifier 9"
        ];
    }
}
class h extends a {
    constructor(e){
        super(), this.docIdentifier = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new h).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new h).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new h).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(h, e, t);
    }
    static $() {
        return [
            "GetPagesRequest|1 doc_identifier 9"
        ];
    }
}
class f extends a {
    constructor(e){
        super(), this.docIdentifier = "", n.proto3.util.initPartial(e, this);
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
            "GetDocRequest|1 doc_identifier 9"
        ];
    }
}
class g extends a {
    constructor(e){
        super(), this.id = 0, this.uuid = "", this.docIdentifier = "", this.docName = "", this.docUrlRoot = "", this.docUrlPrefix = "", this.isDifferentPrefix = !1, this.createdAt = "", this.updatedAt = "", this.lastUploadedAt = "", this.showToAllUsers = !1, this.teamId = 0, this.customInstructions = "", this.pages = [], this.publishToTeam = !1, n.proto3.util.initPartial(e, this);
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
            "ProtoDoc|1 id 5|2 uuid 9|3 doc_identifier 9|4 doc_name 9|5 doc_url_root 9|6 doc_url_prefix 9|7 is_different_prefix 8|8 created_at 9|9 updated_at 9|10 last_uploaded_at 9|11 upload_status #0|12 show_to_all_users 8|13 team_id 5|14 custom_instructions 9|15 pages #1*|16 publish_to_team 8",
            b,
            y
        ];
    }
}
class y extends a {
    constructor(e){
        super(), this.url = "", this.title = "", n.proto3.util.initPartial(e, this);
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
            "ProtoDocPage|1 url 9|2 title 9"
        ];
    }
}
class w extends a {
    constructor(e){
        super(), this.pages = [], this.pageUrls = [], n.proto3.util.initPartial(e, this);
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
            "Pages|1 pages 9*|2 page_urls 9*"
        ];
    }
}
class v extends a {
    constructor(e){
        super(), this.docIdentifier = "", this.password = "", this.docName = "", n.proto3.util.initPartial(e, this);
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
            "MarkAsPublicRequest|1 doc_identifier 9|2 password 9|3 doc_name 9"
        ];
    }
}
class _ extends a {
    constructor(e){
        super(), this.docIdentifier = "", this.ignorePrefixes = [], this.ignoreUrls = [], n.proto3.util.initPartial(e, this);
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
            "NewDocumentationRequest|1 doc_identifier 9|2 metadata #0|4 ignore_prefixes 9*|5 ignore_urls 9*|6 custom_instructions 9?|7 publish_to_team 8?|8 client_handles_uuid 8?",
            s.KC
        ];
    }
}
class A extends a {
    constructor(e){
        super(), this.status = S.UNSPECIFIED, this.progress = 0, this.similarDocIdentifier = "", this.uploadedPages = [], this.docUuid = "", n.proto3.util.initPartial(e, this);
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
            "UploadResponse|1 status #0|2 progress 2|3 similar_doc_identifier 9|4 uploaded_pages 9*|5 doc_uuid 9",
            S
        ];
    }
}
var S = (0, o.QT)(n.proto3, i, "UploadResponse.Status", [
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
        "ALREADY_EXISTS"
    ],
    [
        4,
        "SIMILAR_ALREADY_EXISTS"
    ]
], 1);
class b extends a {
    constructor(e){
        super(), this.status = E.UNSPECIFIED, this.uploadedPages = [], n.proto3.util.initPartial(e, this);
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
            "UploadedStatus|1 status #0|2 uploaded_pages 9*",
            E
        ];
    }
}
var E = (0, o.QT)(n.proto3, i, "UploadedStatus.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "IN_PROGRESS"
    ],
    [
        2,
        "SUCCEEDED"
    ],
    [
        3,
        "FAILED"
    ],
    [
        4,
        "NOT_FOUND"
    ]
], 1);
class I extends a {
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
            "UpsertDocsRequest|1 upload_status #0?|2 ignore_index_prefix 9?|3 doc_id 5?",
            c
        ];
    }
}
class C extends a {
    constructor(e){
        super(), this.responses = [], n.proto3.util.initPartial(e, this);
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
            "UpsertDocsResponse|1 responses #0*",
            A
        ];
    }
}
const k = {
    typeName: "aiserver.v1.UploadService",
    methods: {
        uploadDocumentation: {
            name: "UploadDocumentation",
            I: _,
            O: A,
            kind: n.MethodKind.Unary
        },
        uploadDocumentationStatus: {
            name: "UploadDocumentationStatus",
            I: m,
            O: b,
            kind: n.MethodKind.Unary
        },
        markAsPublic: {
            name: "MarkAsPublic",
            I: v,
            O: b,
            kind: n.MethodKind.Unary
        },
        uploadStatus: {
            name: "UploadStatus",
            I: p,
            O: b,
            kind: n.MethodKind.Unary
        },
        getPages: {
            name: "GetPages",
            I: h,
            O: w,
            kind: n.MethodKind.Unary
        },
        getDoc: {
            name: "GetDoc",
            I: f,
            O: g,
            kind: n.MethodKind.Unary
        },
        rescrapeDocs: {
            name: "RescrapeDocs",
            I: l,
            O: d,
            kind: n.MethodKind.Unary
        },
        rescrapeDocsV2: {
            name: "RescrapeDocsV2",
            I: u,
            O: d,
            kind: n.MethodKind.Unary
        },
        upsertAllDocs: {
            name: "UpsertAllDocs",
            I,
            O: C,
            kind: n.MethodKind.Unary
        }
    }
};
