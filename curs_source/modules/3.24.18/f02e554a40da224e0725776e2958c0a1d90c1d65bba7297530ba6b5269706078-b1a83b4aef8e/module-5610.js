"use strict";
require.d(exports, {
    KC: ()=>a,
    MZ: ()=>c,
    ci: ()=>u,
    wP: ()=>l
});
var n = require("./module-6038.js"), s = require("./module-8592.js");
const i = "aiserver.v1.";
class o extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return i;
    }
}
class a extends o {
    constructor(t){
        super(), this.prefixUrl = "", this.docName = "", this.isDifferentPrefixOrigin = !1, this.truePrefixUrl = "", this.public = !1, n.proto3.util.initPartial(t, this);
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
            "DocumentationMetadata|1 prefix_url 9|2 doc_name 9|3 is_different_prefix_origin 8|4 true_prefix_url 9|5 public 8|6 team_id 5?"
        ];
    }
}
class u extends o {
    constructor(t){
        super(), this.docName = "", this.pageUrl = "", this.documentationChunk = "", this.score = 0, this.pageTitle = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new u).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new u).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new u).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(u, t, e);
    }
    static $() {
        return [
            "DocumentationChunk|1 doc_name 9|2 page_url 9|3 documentation_chunk 9|4 score 2|5 page_title 9"
        ];
    }
}
class c extends o {
    constructor(t){
        super(), this.docIdentifier = "", this.query = "", this.topK = 0, this.rerankResults = !1, n.proto3.util.initPartial(t, this);
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
            "DocumentationQueryRequest|1 doc_identifier 9|2 query 9|3 top_k 13|4 rerank_results 8"
        ];
    }
}
class l extends o {
    constructor(t){
        super(), this.docIdentifier = "", this.docName = "", this.docChunks = [], this.status = m.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
            "DocumentationQueryResponse|1 doc_identifier 9|2 doc_name 9|3 doc_chunks #0*|4 status #1",
            u,
            m
        ];
    }
}
var m = (0, s.QT)(n.proto3, i, "DocumentationQueryResponse.Status", [
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
        "SUCCESS"
    ],
    [
        3,
        "FAILURE"
    ]
], 1);
