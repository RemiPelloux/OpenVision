"use strict";
require.d(exports, {
    $P: ()=>p,
    Gk: ()=>I,
    HH: ()=>u,
    JP: ()=>d,
    Oz: ()=>c,
    W2: ()=>N,
    bs: ()=>b,
    cN: ()=>B,
    dG: ()=>J,
    eL: ()=>v,
    fq: ()=>m,
    g4: ()=>O,
    k7: ()=>S,
    l_: ()=>E,
    qD: ()=>U,
    uE: ()=>P,
    uv: ()=>l,
    xu: ()=>G,
    yy: ()=>A,
    zw: ()=>j
});
var n = require("./module-36038.js"), s = require("./module-67918.js"), o = require("./module-8592.js");
const i = "aiserver.v1.";
class a extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return i;
    }
}
class c extends a {
    constructor(e){
        super(), this.files = [], this.targetDir = "", this.repo = "", n.proto3.util.initPartial(e, this);
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
            "CreateExperimentalIndexRequest|1 files 9*|2 target_dir 9|3 repo 9"
        ];
    }
}
class l extends a {
    constructor(e){
        super(), this.indexId = "", n.proto3.util.initPartial(e, this);
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
            "CreateExperimentalIndexResponse|1 index_id 9"
        ];
    }
}
class u extends a {
    constructor(e){
        super(), this.indexId = "", n.proto3.util.initPartial(e, this);
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
            "ListExperimentalIndexFilesRequest|1 index_id 9"
        ];
    }
}
class d extends a {
    constructor(e){
        super(), this.indexId = "", this.files = [], n.proto3.util.initPartial(e, this);
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
            "ListExperimentalIndexFilesResponse|1 index_id 9|2 files #0*",
            F
        ];
    }
}
class p extends a {
    constructor(e){
        super(), this.indexId = "", n.proto3.util.initPartial(e, this);
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
            "ListenExperimentalIndexRequest|1 index_id 9"
        ];
    }
}
class m extends a {
    constructor(e){
        super(), this.indexId = "", this.item = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "ListenExperimentalIndexResponse|1 index_id 9|2 ready #0 item|3 register #1 item|4 choose #2 item|5 summarize #3 item|6 error #4 item",
            h,
            f,
            g,
            y,
            w
        ];
    }
}
class h extends a {
    constructor(e){
        super(), this.indexId = "", n.proto3.util.initPartial(e, this);
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
            "ListenExperimentalIndexResponse.ReadyItem|1 index_id 9|2 request #0",
            p
        ];
    }
}
class f extends a {
    constructor(e){
        super(), this.reqUuid = "", n.proto3.util.initPartial(e, this);
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
            "ListenExperimentalIndexResponse.RegisterItem|1 response #0|2 request #1|3 req_uuid 9",
            _,
            v
        ];
    }
}
class g extends a {
    constructor(e){
        super(), this.reqUuid = "", n.proto3.util.initPartial(e, this);
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
            "ListenExperimentalIndexResponse.ChooseItem|1 response #0|2 request #1|3 req_uuid 9",
            x,
            I
        ];
    }
}
class y extends a {
    constructor(e){
        super(), this.reqUuid = "", n.proto3.util.initPartial(e, this);
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
            "ListenExperimentalIndexResponse.SummarizeItem|1 response #0|2 request #1|3 req_uuid 9",
            M,
            J
        ];
    }
}
class w extends a {
    constructor(e){
        super(), this.message = "", this.statusCode = 0, this.request = {
            case: void 0
        }, this.reqUuid = "", n.proto3.util.initPartial(e, this);
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
            "ListenExperimentalIndexResponse.ErrorItem|1 message 9|2 status_code 5|3 register #0 request|4 choose #1 request|5 summarize #2 request|6 req_uuid 9",
            v,
            I,
            J
        ];
    }
}
class v extends a {
    constructor(e){
        super(), this.indexId = "", this.workspaceRelativePath = "", this.content = [], n.proto3.util.initPartial(e, this);
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
            "RegisterFileToIndexRequest|1 index_id 9|2 workspace_relative_path 9|3 root_context_node #0|4 content 9*",
            L
        ];
    }
}
class _ extends a {
    constructor(e){
        super(), this.fileId = "", this.rootContextNodeId = "", this.dependencyResolutionAttempts = [], n.proto3.util.initPartial(e, this);
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
            "RegisterFileToIndexResponse|1 file_id 9|2 root_context_node_id 9|3 dependency_resolution_attempts #0*|4 file_data #1",
            $,
            F
        ];
    }
}
class A extends a {
    constructor(e){
        super(), this.indexId = "", this.fileId = "", this.dependencyResolutionResults = [], n.proto3.util.initPartial(e, this);
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
            "SetupIndexDependenciesRequest|1 index_id 9|3 file_id 9|2 dependency_resolution_results #0*",
            Q
        ];
    }
}
class S extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "SetupIndexDependenciesResponse"
        ];
    }
}
class b extends a {
    constructor(e){
        super(), this.indexId = "", n.proto3.util.initPartial(e, this);
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
            "ComputeIndexTopoSortRequest|1 index_id 9"
        ];
    }
}
class E extends a {
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
            "ComputeIndexTopoSortResponse"
        ];
    }
}
class I extends a {
    constructor(e){
        super(), this.indexId = "", this.request = {
            case: void 0
        }, this.recompute = !1, n.proto3.util.initPartial(e, this);
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
            "ChooseCodeReferencesRequest|1 index_id 9|2 file #0 request|3 node #1 request|4 recompute 8",
            C,
            k
        ];
    }
}
class C extends a {
    constructor(e){
        super(), this.fileId = "", n.proto3.util.initPartial(e, this);
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
            "ChooseCodeReferencesRequest.FileRequest|1 file_id 9"
        ];
    }
}
class k extends a {
    constructor(e){
        super(), this.nodeId = "", n.proto3.util.initPartial(e, this);
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
            "ChooseCodeReferencesRequest.NodeRequest|1 node_id 9"
        ];
    }
}
class x extends a {
    constructor(e){
        super(), this.response = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "ChooseCodeReferencesResponse|1 file #0 response|2 node #1 response",
            R,
            T
        ];
    }
}
class T extends a {
    constructor(e){
        super(), this.nodeId = "", this.actions = [], this.skipped = !1, this.dependencies = [], n.proto3.util.initPartial(e, this);
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
            "ChooseCodeReferencesResponse.NodeResponse|1 node_id 9|2 actions #0*|3 skipped 8|4 dependencies 9*",
            K
        ];
    }
}
class R extends a {
    constructor(e){
        super(), this.fileId = "", this.nodeResponses = [], n.proto3.util.initPartial(e, this);
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
            "ChooseCodeReferencesResponse.FileResponse|1 file_id 9|2 node_responses #0*",
            T
        ];
    }
}
class B extends a {
    constructor(e){
        super(), this.nodeId = "", this.references = [], n.proto3.util.initPartial(e, this);
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
            "RegisterCodeReferencesRequest|1 node_id 9|2 references #0*",
            H
        ];
    }
}
class P extends a {
    constructor(e){
        super(), this.dependencies = [], n.proto3.util.initPartial(e, this);
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
            "RegisterCodeReferencesResponse|1 dependencies 9*"
        ];
    }
}
class J extends a {
    constructor(e){
        super(), this.indexId = "", this.nodeId = "", this.recompute = !1, n.proto3.util.initPartial(e, this);
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
            "SummarizeWithReferencesRequest|1 index_id 9|2 node_id 9|3 recompute 8"
        ];
    }
}
class M extends a {
    constructor(e){
        super(), this.response = {
            case: void 0
        }, this.nodeId = "", n.proto3.util.initPartial(e, this);
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
            "SummarizeWithReferencesResponse|1 success #0 response|2 dependency #1 response|3 node_id 9",
            q,
            D
        ];
    }
}
class q extends a {
    constructor(e){
        super(), this.summary = "", n.proto3.util.initPartial(e, this);
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
            "SummarizeWithReferencesResponse.Success|1 summary 9"
        ];
    }
}
class D extends a {
    constructor(e){
        super(), this.nodes = [], n.proto3.util.initPartial(e, this);
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
            "SummarizeWithReferencesResponse.Dependency|2 nodes 9*"
        ];
    }
}
class O extends a {
    constructor(e){
        super(), this.reqUuid = "", n.proto3.util.initPartial(e, this);
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
            "RequestReceivedResponse|1 req_uuid 9"
        ];
    }
}
class N extends a {
    constructor(e){
        super(), this.indexId = "", this.id = "", this.summary = "", n.proto3.util.initPartial(e, this);
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
            "ReflectionData|1 index_id 9|2 id 9|3 summary 9"
        ];
    }
}
class F extends a {
    constructor(e){
        super(), this.indexId = "", this.workspaceRelativePath = "", this.stage = "", this.order = 0, this.nodes = [], n.proto3.util.initPartial(e, this);
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
            "IndexFileData|1 index_id 9|2 workspace_relative_path 9|3 stage 9|4 order 5|5 nodes #0*",
            U
        ];
    }
}
class U extends a {
    constructor(e){
        super(), this.nodeId = "", this.stage = "", this.content = "", this.summary = "", n.proto3.util.initPartial(e, this);
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
            "IndexFileData.NodeData|1 node_id 9|2 stage 9|3 content 9|4 summary 9"
        ];
    }
}
class L extends a {
    constructor(e){
        super(), this.workspaceRelativePath = "", this.startLineNumber = 0, this.endLineNumber = 0, this.children = [], n.proto3.util.initPartial(e, this);
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
            "SerializedContextNode|1 workspace_relative_path 9|2 start_line_number 5|3 end_line_number 5|4 children #0*|5 node_snippets #1",
            L,
            W
        ];
    }
}
class $ extends a {
    constructor(e){
        super(), this.workspaceRelativePath = "", this.nodeId = "", n.proto3.util.initPartial(e, this);
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
            "URIResolutionAttempt|1 workspace_relative_path 9|2 node_id 9|3 symbol #0",
            K
        ];
    }
}
class Q extends a {
    constructor(e){
        super(), this.resolvedPaths = [], n.proto3.util.initPartial(e, this);
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
            "URIResolutionResult|1 request #0|2 resolved_paths 9*",
            $
        ];
    }
}
class j extends a {
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
            "ExtractPathsRequest|1 file_code_snippets #0",
            W
        ];
    }
}
class G extends a {
    constructor(e){
        super(), this.paths = [], n.proto3.util.initPartial(e, this);
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
            "ExtractPathsResponse|1 paths #0*",
            K
        ];
    }
}
class H extends a {
    constructor(e){
        super(), this.references = [], n.proto3.util.initPartial(e, this);
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
            "SymbolActionResults|1 action #0|2 references #1*",
            K,
            z
        ];
    }
}
class z extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "SymbolActionResultReference|1 range #0|2 reference #1",
            s.SimpleRange,
            W
        ];
    }
}
class W extends a {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.totalLines = 0, this.snippets = [], n.proto3.util.initPartial(e, this);
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
            "FileCodeSnippets|1 relative_workspace_path 9|2 total_lines 5|3 snippets #0*",
            V
        ];
    }
}
class V extends a {
    constructor(e){
        super(), this.startLineNumber = 0, this.endLineNumber = 0, this.lines = [], n.proto3.util.initPartial(e, this);
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
            "CodeSnippet|1 start_line_number 5|2 end_line_number 5|3 lines 9*"
        ];
    }
}
class K extends a {
    constructor(e){
        super(), this.workspaceRelativePath = "", this.lineNumber = 0, this.symbolStartColumn = 0, this.symbolEndColumn = 0, this.action = Y.UNSPECIFIED, this.symbol = "", n.proto3.util.initPartial(e, this);
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
            "CodeSymbolWithAction|1 workspace_relative_path 9|2 line_number 5|3 symbol_start_column 5|4 symbol_end_column 5|5 action #0|6 symbol 9",
            Y
        ];
    }
}
var Y = (0, o.QT)(n.proto3, i, "CodeSymbolWithAction.CodeSymbolAction", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "GO_TO_DEFINITION"
    ],
    [
        2,
        "GO_TO_IMPLEMENTATION"
    ],
    [
        3,
        "REFERENCES"
    ]
], 1);
