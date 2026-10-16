"use strict";
require.d(exports, {
    KC: ()=>a,
    MZ: ()=>l,
    ci: ()=>c,
    wP: ()=>u
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
class a extends i {
    constructor(e){
        super(), this.prefixUrl = "", this.docName = "", this.isDifferentPrefixOrigin = !1, this.truePrefixUrl = "", this.public = !1, n.proto3.util.initPartial(e, this);
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
            "DocumentationMetadata|1 prefix_url 9|2 doc_name 9|3 is_different_prefix_origin 8|4 true_prefix_url 9|5 public 8|6 team_id 5?"
        ];
    }
}
class c extends i {
    constructor(e){
        super(), this.docName = "", this.pageUrl = "", this.documentationChunk = "", this.score = 0, this.pageTitle = "", n.proto3.util.initPartial(e, this);
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
            "DocumentationChunk|1 doc_name 9|2 page_url 9|3 documentation_chunk 9|4 score 2|5 page_title 9"
        ];
    }
}
class l extends i {
    constructor(e){
        super(), this.docIdentifier = "", this.query = "", this.topK = 0, this.rerankResults = !1, n.proto3.util.initPartial(e, this);
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
            "DocumentationQueryRequest|1 doc_identifier 9|2 query 9|3 top_k 13|4 rerank_results 8"
        ];
    }
}
class u extends i {
    constructor(e){
        super(), this.docIdentifier = "", this.docName = "", this.docChunks = [], this.status = d.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "DocumentationQueryResponse|1 doc_identifier 9|2 doc_name 9|3 doc_chunks #0*|4 status #1",
            c,
            d
        ];
    }
}
var d = (0, s.QT)(n.proto3, o, "DocumentationQueryResponse.Status", [
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
