"use strict";
require.r(exports), require.d(exports, {
    UploadService: ()=>b
});
var n = require("./module-6038.js"), s = require("./module-5610.js"), i = require("./module-8592.js");
const o = "aiserver.v1.";
class a extends i.HL {
    static get runtime() {
        return (0, i.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return o;
    }
}
var u = (0, i.QT)(n.proto3, o, "UploadStatus", [
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
class c extends a {
    constructor(t){
        super(), this.docIdentifier = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new c).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new c).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new c).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(c, t, e);
    }
    static $() {
        return [
            "RescrapeDocsRequest|1 doc_identifier 9|2 force_reupload 8?"
        ];
    }
}
class l extends a {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new l).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new l).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new l).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(l, t, e);
    }
    static $() {
        return [
            "RescrapeDocsRequestV2|1 new_doc_req #0|2 force_reupload 8?",
            w
        ];
    }
}
class m extends a {
    constructor(t){
        super(), this.success = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new m).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new m).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new m).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(m, t, e);
    }
    static $() {
        return [
            "RescrapeDocsResponse|1 success 8|2 new_doc_identifier 9?"
        ];
    }
}
class d extends a {
    constructor(t){
        super(), this.docIdentifier = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new d).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new d).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new d).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(d, t, e);
    }
    static $() {
        return [
            "UploadedStatusRequest|1 doc_identifier 9"
        ];
    }
}
class f extends a {
    constructor(t){
        super(), this.docIdentifier = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new f).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new f).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new f).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(f, t, e);
    }
    static $() {
        return [
            "UploadDocumentationRequest|1 doc_identifier 9"
        ];
    }
}
class p extends a {
    constructor(t){
        super(), this.docIdentifier = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new p).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new p).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new p).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(p, t, e);
    }
    static $() {
        return [
            "GetPagesRequest|1 doc_identifier 9"
        ];
    }
}
class h extends a {
    constructor(t){
        super(), this.docIdentifier = "", n.proto3.util.initPartial(t, this);
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
            "GetDocRequest|1 doc_identifier 9"
        ];
    }
}
class g extends a {
    constructor(t){
        super(), this.id = 0, this.uuid = "", this.docIdentifier = "", this.docName = "", this.docUrlRoot = "", this.docUrlPrefix = "", this.isDifferentPrefix = !1, this.createdAt = "", this.updatedAt = "", this.lastUploadedAt = "", this.showToAllUsers = !1, this.teamId = 0, this.customInstructions = "", this.pages = [], this.publishToTeam = !1, n.proto3.util.initPartial(t, this);
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
            "ProtoDoc|1 id 5|2 uuid 9|3 doc_identifier 9|4 doc_name 9|5 doc_url_root 9|6 doc_url_prefix 9|7 is_different_prefix 8|8 created_at 9|9 updated_at 9|10 last_uploaded_at 9|11 upload_status #0|12 show_to_all_users 8|13 team_id 5|14 custom_instructions 9|15 pages #1*|16 publish_to_team 8",
            B,
            A
        ];
    }
}
class A extends a {
    constructor(t){
        super(), this.url = "", this.title = "", n.proto3.util.initPartial(t, this);
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
            "ProtoDocPage|1 url 9|2 title 9"
        ];
    }
}
class _ extends a {
    constructor(t){
        super(), this.pages = [], this.pageUrls = [], n.proto3.util.initPartial(t, this);
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
            "Pages|1 pages 9*|2 page_urls 9*"
        ];
    }
}
class y extends a {
    constructor(t){
        super(), this.docIdentifier = "", this.password = "", this.docName = "", n.proto3.util.initPartial(t, this);
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
            "MarkAsPublicRequest|1 doc_identifier 9|2 password 9|3 doc_name 9"
        ];
    }
}
class w extends a {
    constructor(t){
        super(), this.docIdentifier = "", this.ignorePrefixes = [], this.ignoreUrls = [], n.proto3.util.initPartial(t, this);
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
            "NewDocumentationRequest|1 doc_identifier 9|2 metadata #0|4 ignore_prefixes 9*|5 ignore_urls 9*|6 custom_instructions 9?|7 publish_to_team 8?|8 client_handles_uuid 8?",
            s.KC
        ];
    }
}
class S extends a {
    constructor(t){
        super(), this.status = J.UNSPECIFIED, this.progress = 0, this.similarDocIdentifier = "", this.uploadedPages = [], this.docUuid = "", n.proto3.util.initPartial(t, this);
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
            "UploadResponse|1 status #0|2 progress 2|3 similar_doc_identifier 9|4 uploaded_pages 9*|5 doc_uuid 9",
            J
        ];
    }
}
var J = (0, i.QT)(n.proto3, o, "UploadResponse.Status", [
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
class B extends a {
    constructor(t){
        super(), this.status = E.UNSPECIFIED, this.uploadedPages = [], n.proto3.util.initPartial(t, this);
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
            "UploadedStatus|1 status #0|2 uploaded_pages 9*",
            E
        ];
    }
}
var E = (0, i.QT)(n.proto3, o, "UploadedStatus.Status", [
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
            "UpsertDocsRequest|1 upload_status #0?|2 ignore_index_prefix 9?|3 doc_id 5?",
            u
        ];
    }
}
class C extends a {
    constructor(t){
        super(), this.responses = [], n.proto3.util.initPartial(t, this);
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
            "UpsertDocsResponse|1 responses #0*",
            S
        ];
    }
}
const b = {
    typeName: "aiserver.v1.UploadService",
    methods: {
        uploadDocumentation: {
            name: "UploadDocumentation",
            I: w,
            O: S,
            kind: n.MethodKind.Unary
        },
        uploadDocumentationStatus: {
            name: "UploadDocumentationStatus",
            I: f,
            O: B,
            kind: n.MethodKind.Unary
        },
        markAsPublic: {
            name: "MarkAsPublic",
            I: y,
            O: B,
            kind: n.MethodKind.Unary
        },
        uploadStatus: {
            name: "UploadStatus",
            I: d,
            O: B,
            kind: n.MethodKind.Unary
        },
        getPages: {
            name: "GetPages",
            I: p,
            O: _,
            kind: n.MethodKind.Unary
        },
        getDoc: {
            name: "GetDoc",
            I: h,
            O: g,
            kind: n.MethodKind.Unary
        },
        rescrapeDocs: {
            name: "RescrapeDocs",
            I: c,
            O: m,
            kind: n.MethodKind.Unary
        },
        rescrapeDocsV2: {
            name: "RescrapeDocsV2",
            I: l,
            O: m,
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
