"use strict";
require.d(exports, {
    $P: ()=>d,
    Gk: ()=>I,
    HH: ()=>l,
    JP: ()=>m,
    Oz: ()=>u,
    W2: ()=>Q,
    bs: ()=>B,
    cN: ()=>R,
    dG: ()=>T,
    eL: ()=>y,
    fq: ()=>f,
    g4: ()=>U,
    k7: ()=>J,
    l_: ()=>E,
    qD: ()=>O,
    uE: ()=>P,
    uv: ()=>c,
    xu: ()=>H,
    yy: ()=>S,
    zw: ()=>G
});
var n = require("./module-6038.js"), s = require("./module-7918.js"), i = require("./module-8592.js");
const o = "aiserver.v1.";
class a extends i.HL {
    static get runtime() {
        return (0, i.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return o;
    }
}
class u extends a {
    constructor(t){
        super(), this.files = [], this.targetDir = "", this.repo = "", n.proto3.util.initPartial(t, this);
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
            "CreateExperimentalIndexRequest|1 files 9*|2 target_dir 9|3 repo 9"
        ];
    }
}
class c extends a {
    constructor(t){
        super(), this.indexId = "", n.proto3.util.initPartial(t, this);
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
            "CreateExperimentalIndexResponse|1 index_id 9"
        ];
    }
}
class l extends a {
    constructor(t){
        super(), this.indexId = "", n.proto3.util.initPartial(t, this);
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
            "ListExperimentalIndexFilesRequest|1 index_id 9"
        ];
    }
}
class m extends a {
    constructor(t){
        super(), this.indexId = "", this.files = [], n.proto3.util.initPartial(t, this);
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
            "ListExperimentalIndexFilesResponse|1 index_id 9|2 files #0*",
            M
        ];
    }
}
class d extends a {
    constructor(t){
        super(), this.indexId = "", n.proto3.util.initPartial(t, this);
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
            "ListenExperimentalIndexRequest|1 index_id 9"
        ];
    }
}
class f extends a {
    constructor(t){
        super(), this.indexId = "", this.item = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "ListenExperimentalIndexResponse|1 index_id 9|2 ready #0 item|3 register #1 item|4 choose #2 item|5 summarize #3 item|6 error #4 item",
            p,
            h,
            g,
            A,
            _
        ];
    }
}
class p extends a {
    constructor(t){
        super(), this.indexId = "", n.proto3.util.initPartial(t, this);
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
            "ListenExperimentalIndexResponse.ReadyItem|1 index_id 9|2 request #0",
            d
        ];
    }
}
class h extends a {
    constructor(t){
        super(), this.reqUuid = "", n.proto3.util.initPartial(t, this);
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
            "ListenExperimentalIndexResponse.RegisterItem|1 response #0|2 request #1|3 req_uuid 9",
            w,
            y
        ];
    }
}
class g extends a {
    constructor(t){
        super(), this.reqUuid = "", n.proto3.util.initPartial(t, this);
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
            "ListenExperimentalIndexResponse.ChooseItem|1 response #0|2 request #1|3 req_uuid 9",
            k,
            I
        ];
    }
}
class A extends a {
    constructor(t){
        super(), this.reqUuid = "", n.proto3.util.initPartial(t, this);
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
            "ListenExperimentalIndexResponse.SummarizeItem|1 response #0|2 request #1|3 req_uuid 9",
            x,
            T
        ];
    }
}
class _ extends a {
    constructor(t){
        super(), this.message = "", this.statusCode = 0, this.request = {
            case: void 0
        }, this.reqUuid = "", n.proto3.util.initPartial(t, this);
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
            "ListenExperimentalIndexResponse.ErrorItem|1 message 9|2 status_code 5|3 register #0 request|4 choose #1 request|5 summarize #2 request|6 req_uuid 9",
            y,
            I,
            T
        ];
    }
}
class y extends a {
    constructor(t){
        super(), this.indexId = "", this.workspaceRelativePath = "", this.content = [], n.proto3.util.initPartial(t, this);
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
            "RegisterFileToIndexRequest|1 index_id 9|2 workspace_relative_path 9|3 root_context_node #0|4 content 9*",
            F
        ];
    }
}
class w extends a {
    constructor(t){
        super(), this.fileId = "", this.rootContextNodeId = "", this.dependencyResolutionAttempts = [], n.proto3.util.initPartial(t, this);
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
            "RegisterFileToIndexResponse|1 file_id 9|2 root_context_node_id 9|3 dependency_resolution_attempts #0*|4 file_data #1",
            L,
            M
        ];
    }
}
class S extends a {
    constructor(t){
        super(), this.indexId = "", this.fileId = "", this.dependencyResolutionResults = [], n.proto3.util.initPartial(t, this);
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
            "SetupIndexDependenciesRequest|1 index_id 9|3 file_id 9|2 dependency_resolution_results #0*",
            $
        ];
    }
}
class J extends a {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "SetupIndexDependenciesResponse"
        ];
    }
}
class B extends a {
    constructor(t){
        super(), this.indexId = "", n.proto3.util.initPartial(t, this);
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
            "ComputeIndexTopoSortRequest|1 index_id 9"
        ];
    }
}
class E extends a {
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
            "ComputeIndexTopoSortResponse"
        ];
    }
}
class I extends a {
    constructor(t){
        super(), this.indexId = "", this.request = {
            case: void 0
        }, this.recompute = !1, n.proto3.util.initPartial(t, this);
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
            "ChooseCodeReferencesRequest|1 index_id 9|2 file #0 request|3 node #1 request|4 recompute 8",
            C,
            b
        ];
    }
}
class C extends a {
    constructor(t){
        super(), this.fileId = "", n.proto3.util.initPartial(t, this);
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
            "ChooseCodeReferencesRequest.FileRequest|1 file_id 9"
        ];
    }
}
class b extends a {
    constructor(t){
        super(), this.nodeId = "", n.proto3.util.initPartial(t, this);
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
            "ChooseCodeReferencesRequest.NodeRequest|1 node_id 9"
        ];
    }
}
class k extends a {
    constructor(t){
        super(), this.response = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "ChooseCodeReferencesResponse|1 file #0 response|2 node #1 response",
            q,
            v
        ];
    }
}
class v extends a {
    constructor(t){
        super(), this.nodeId = "", this.actions = [], this.skipped = !1, this.dependencies = [], n.proto3.util.initPartial(t, this);
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
            "ChooseCodeReferencesResponse.NodeResponse|1 node_id 9|2 actions #0*|3 skipped 8|4 dependencies 9*",
            Y
        ];
    }
}
class q extends a {
    constructor(t){
        super(), this.fileId = "", this.nodeResponses = [], n.proto3.util.initPartial(t, this);
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
            "ChooseCodeReferencesResponse.FileResponse|1 file_id 9|2 node_responses #0*",
            v
        ];
    }
}
class R extends a {
    constructor(t){
        super(), this.nodeId = "", this.references = [], n.proto3.util.initPartial(t, this);
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
            "RegisterCodeReferencesRequest|1 node_id 9|2 references #0*",
            K
        ];
    }
}
class P extends a {
    constructor(t){
        super(), this.dependencies = [], n.proto3.util.initPartial(t, this);
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
            "RegisterCodeReferencesResponse|1 dependencies 9*"
        ];
    }
}
class T extends a {
    constructor(t){
        super(), this.indexId = "", this.nodeId = "", this.recompute = !1, n.proto3.util.initPartial(t, this);
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
            "SummarizeWithReferencesRequest|1 index_id 9|2 node_id 9|3 recompute 8"
        ];
    }
}
class x extends a {
    constructor(t){
        super(), this.response = {
            case: void 0
        }, this.nodeId = "", n.proto3.util.initPartial(t, this);
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
            "SummarizeWithReferencesResponse|1 success #0 response|2 dependency #1 response|3 node_id 9",
            N,
            D
        ];
    }
}
class N extends a {
    constructor(t){
        super(), this.summary = "", n.proto3.util.initPartial(t, this);
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
            "SummarizeWithReferencesResponse.Success|1 summary 9"
        ];
    }
}
class D extends a {
    constructor(t){
        super(), this.nodes = [], n.proto3.util.initPartial(t, this);
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
            "SummarizeWithReferencesResponse.Dependency|2 nodes 9*"
        ];
    }
}
class U extends a {
    constructor(t){
        super(), this.reqUuid = "", n.proto3.util.initPartial(t, this);
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
            "RequestReceivedResponse|1 req_uuid 9"
        ];
    }
}
class Q extends a {
    constructor(t){
        super(), this.indexId = "", this.id = "", this.summary = "", n.proto3.util.initPartial(t, this);
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
            "ReflectionData|1 index_id 9|2 id 9|3 summary 9"
        ];
    }
}
class M extends a {
    constructor(t){
        super(), this.indexId = "", this.workspaceRelativePath = "", this.stage = "", this.order = 0, this.nodes = [], n.proto3.util.initPartial(t, this);
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
            "IndexFileData|1 index_id 9|2 workspace_relative_path 9|3 stage 9|4 order 5|5 nodes #0*",
            O
        ];
    }
}
class O extends a {
    constructor(t){
        super(), this.nodeId = "", this.stage = "", this.content = "", this.summary = "", n.proto3.util.initPartial(t, this);
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
            "IndexFileData.NodeData|1 node_id 9|2 stage 9|3 content 9|4 summary 9"
        ];
    }
}
class F extends a {
    constructor(t){
        super(), this.workspaceRelativePath = "", this.startLineNumber = 0, this.endLineNumber = 0, this.children = [], n.proto3.util.initPartial(t, this);
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
            "SerializedContextNode|1 workspace_relative_path 9|2 start_line_number 5|3 end_line_number 5|4 children #0*|5 node_snippets #1",
            F,
            z
        ];
    }
}
class L extends a {
    constructor(t){
        super(), this.workspaceRelativePath = "", this.nodeId = "", n.proto3.util.initPartial(t, this);
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
            "URIResolutionAttempt|1 workspace_relative_path 9|2 node_id 9|3 symbol #0",
            Y
        ];
    }
}
class $ extends a {
    constructor(t){
        super(), this.resolvedPaths = [], n.proto3.util.initPartial(t, this);
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
            "URIResolutionResult|1 request #0|2 resolved_paths 9*",
            L
        ];
    }
}
class G extends a {
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
            "ExtractPathsRequest|1 file_code_snippets #0",
            z
        ];
    }
}
class H extends a {
    constructor(t){
        super(), this.paths = [], n.proto3.util.initPartial(t, this);
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
            "ExtractPathsResponse|1 paths #0*",
            Y
        ];
    }
}
class K extends a {
    constructor(t){
        super(), this.references = [], n.proto3.util.initPartial(t, this);
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
            "SymbolActionResults|1 action #0|2 references #1*",
            Y,
            V
        ];
    }
}
class V extends a {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "SymbolActionResultReference|1 range #0|2 reference #1",
            s.SimpleRange,
            z
        ];
    }
}
class z extends a {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.totalLines = 0, this.snippets = [], n.proto3.util.initPartial(t, this);
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
            "FileCodeSnippets|1 relative_workspace_path 9|2 total_lines 5|3 snippets #0*",
            W
        ];
    }
}
class W extends a {
    constructor(t){
        super(), this.startLineNumber = 0, this.endLineNumber = 0, this.lines = [], n.proto3.util.initPartial(t, this);
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
            "CodeSnippet|1 start_line_number 5|2 end_line_number 5|3 lines 9*"
        ];
    }
}
class Y extends a {
    constructor(t){
        super(), this.workspaceRelativePath = "", this.lineNumber = 0, this.symbolStartColumn = 0, this.symbolEndColumn = 0, this.action = j.UNSPECIFIED, this.symbol = "", n.proto3.util.initPartial(t, this);
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
            "CodeSymbolWithAction|1 workspace_relative_path 9|2 line_number 5|3 symbol_start_column 5|4 symbol_end_column 5|5 action #0|6 symbol 9",
            j
        ];
    }
}
var j = (0, i.QT)(n.proto3, o, "CodeSymbolWithAction.CodeSymbolAction", [
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
