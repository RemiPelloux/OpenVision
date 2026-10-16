"use strict";
require.d(exports, {
    xyI: ()=>Lo,
    Mpn: ()=>ec,
    Ibo: ()=>ju,
    QFf: ()=>Ea,
    Y9z: ()=>Wu,
    o7L: ()=>ou,
    YbX: ()=>Vo,
    Mzv: ()=>Ou,
    hGJ: ()=>Ya,
    Pd7: ()=>Nc,
    Y5: ()=>Dc,
    nh0: ()=>Au,
    Uq: ()=>Rc,
    D$r: ()=>Cu,
    Gmx: ()=>Xu,
    onr: ()=>tc,
    umU: ()=>Su,
    d2k: ()=>Qu,
    c_h: ()=>zo,
    Bjv: ()=>Zu,
    gan: ()=>_u,
    vns: ()=>Wo,
    iHX: ()=>Ia,
    _8g: ()=>yu
});
var n = require("./module-6038.js"), s = require("./module-1491.js"), i = require("./module-2671.js"), o = require("./module-8592.js");
class a extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class u extends a {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "ShellToolCall|1 args #0|2 result #1|3 description 9?",
            i.a,
            i.W4
        ];
    }
}
class c extends a {
    constructor(t){
        super(), this.content = "", n.proto3.util.initPartial(t, this);
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
            "ShellToolCallStdoutDelta|1 content 9"
        ];
    }
}
class l extends a {
    constructor(t){
        super(), this.content = "", n.proto3.util.initPartial(t, this);
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
            "ShellToolCallStderrDelta|1 content 9"
        ];
    }
}
class m extends a {
    constructor(t){
        super(), this.delta = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "ShellToolCallDelta|1 stdout #0 delta|2 stderr #1 delta",
            c,
            l
        ];
    }
}
var d = require("./module-9260.js");
class f extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class p extends f {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "DeleteToolCall|1 args #0|2 result #1",
            d.dn,
            d.Pi
        ];
    }
}
class h extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class g extends h {
    constructor(t){
        super(), this.globPattern = "", n.proto3.util.initPartial(t, this);
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
            "GlobToolArgs|1 target_directory 9?|2 glob_pattern 9"
        ];
    }
}
class A extends h {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "GlobToolResult|1 success #0 result|2 error #1 result",
            y,
            _
        ];
    }
}
class _ extends h {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
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
            "GlobToolError|1 error 9"
        ];
    }
}
class y extends h {
    constructor(t){
        super(), this.pattern = "", this.path = "", this.files = [], this.totalFiles = 0, this.clientTruncated = !1, this.ripgrepTruncated = !1, n.proto3.util.initPartial(t, this);
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
            "GlobToolSuccess|1 pattern 9|2 path 9|3 files 9*|4 total_files 5|5 client_truncated 8|6 ripgrep_truncated 8"
        ];
    }
}
class w extends h {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "GlobToolCall|1 args #0|2 result #1",
            g,
            A
        ];
    }
}
var S = require("./module-9903.js");
class J extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class B extends J {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "GrepToolCall|1 args #0|2 result #1",
            S.Qj,
            S.Ud
        ];
    }
}
var E = require("./module-3955.js");
class I extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class C extends I {
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
            "ReadToolCall|1 args #0|2 result #1",
            b,
            k
        ];
    }
}
class b extends I {
    constructor(t){
        super(), this.path = "", n.proto3.util.initPartial(t, this);
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
            "ReadToolArgs|1 path 9|2 offset 5?|3 limit 5?|5 include_line_numbers 8?"
        ];
    }
}
class k extends I {
    constructor(t){
        super(), this.result = {
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
            "ReadToolResult|1 success #0 result|2 error #1 result",
            q,
            R
        ];
    }
}
class v extends I {
    constructor(t){
        super(), this.startLine = 0, this.endLine = 0, n.proto3.util.initPartial(t, this);
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
            "ReadRange|1 start_line 13|2 end_line 13"
        ];
    }
}
class q extends I {
    constructor(t){
        super(), this.output = {
            case: void 0
        }, this.isEmpty = !1, this.exceededLimit = !1, this.totalLines = 0, this.fileSize = 0, this.path = "", this.relatedCursorRulePaths = [], this.relatedCursorRules = [], n.proto3.util.initPartial(t, this);
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
            "ReadToolSuccess|1 content 9 output|6 data 12 output|9 data_blob_id 12 output|10 content_blob_id 12 output|2 is_empty 8|3 exceeded_limit 8|4 total_lines 13|5 file_size 13|7 path 9|8 read_range #0?|11 include_line_numbers 8?|12 related_cursor_rule_paths 9*|13 related_cursor_rules #1*",
            v,
            E.DX
        ];
    }
}
class R extends I {
    constructor(t){
        super(), this.errorMessage = "", n.proto3.util.initPartial(t, this);
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
            "ReadToolError|1 error_message 9"
        ];
    }
}
const P = "agent.v1.";
class T extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return P;
    }
}
var x = (0, o.QT)(n.proto3, P, "TodoStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PENDING"
    ],
    [
        2,
        "IN_PROGRESS"
    ],
    [
        3,
        "COMPLETED"
    ],
    [
        4,
        "CANCELLED"
    ]
], 1);
class N extends T {
    constructor(t){
        super(), this.id = "", this.content = "", this.status = x.UNSPECIFIED, this.createdAt = n.protoInt64.zero, this.updatedAt = n.protoInt64.zero, this.dependencies = [], n.proto3.util.initPartial(t, this);
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
            "TodoItem|1 id 9|2 content 9|3 status #0|4 created_at 3|5 updated_at 3|6 dependencies 9*",
            x
        ];
    }
}
class D extends T {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "UpdateTodosToolCall|1 args #0|2 result #1",
            U,
            Q
        ];
    }
}
class U extends T {
    constructor(t){
        super(), this.todos = [], this.merge = !1, n.proto3.util.initPartial(t, this);
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
            "UpdateTodosArgs|1 todos #0*|2 merge 8",
            N
        ];
    }
}
class Q extends T {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "UpdateTodosResult|1 success #0 result|2 error #1 result",
            M,
            O
        ];
    }
}
class M extends T {
    constructor(t){
        super(), this.todos = [], this.totalCount = 0, this.wasMerge = !1, n.proto3.util.initPartial(t, this);
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
            "UpdateTodosSuccess|1 todos #0*|2 total_count 5|3 was_merge 8",
            N
        ];
    }
}
class O extends T {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
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
            "UpdateTodosError|1 error 9"
        ];
    }
}
class F extends T {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "ReadTodosToolCall|1 args #0|2 result #1",
            L,
            $
        ];
    }
}
class L extends T {
    constructor(t){
        super(), this.statusFilter = [], this.idFilter = [], n.proto3.util.initPartial(t, this);
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
            "ReadTodosArgs|1 status_filter #0*|2 id_filter 9*",
            x
        ];
    }
}
class $ extends T {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "ReadTodosResult|1 success #0 result|2 error #1 result",
            G,
            H
        ];
    }
}
class G extends T {
    constructor(t){
        super(), this.todos = [], this.totalCount = 0, n.proto3.util.initPartial(t, this);
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
            "ReadTodosSuccess|1 todos #0*|2 total_count 5",
            N
        ];
    }
}
class H extends T {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
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
            "ReadTodosError|1 error 9"
        ];
    }
}
class K extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class V extends K {
    constructor(t){
        super(), this.path = "", n.proto3.util.initPartial(t, this);
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
            "EditArgs|1 path 9|6 stream_content 9?"
        ];
    }
}
class z extends K {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "EditResult|1 success #0 result|2 file_not_found #1 result|3 read_permission_denied #2 result|4 write_permission_denied #3 result|6 rejected #4 result|7 error #5 result",
            W,
            Y,
            j,
            X,
            Z,
            tt
        ];
    }
}
class W extends K {
    constructor(t){
        super(), this.path = "", this.afterFullFileContent = "", n.proto3.util.initPartial(t, this);
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
            "EditSuccess|1 path 9|3 lines_added 5?|4 lines_removed 5?|5 diff_string 9?|6 before_full_file_content 9?|7 after_full_file_content 9|8 message 9?"
        ];
    }
}
class Y extends K {
    constructor(t){
        super(), this.path = "", n.proto3.util.initPartial(t, this);
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
            "EditFileNotFound|1 path 9"
        ];
    }
}
class j extends K {
    constructor(t){
        super(), this.path = "", n.proto3.util.initPartial(t, this);
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
            "EditReadPermissionDenied|1 path 9"
        ];
    }
}
class X extends K {
    constructor(t){
        super(), this.path = "", this.error = "", this.isReadonly = !1, n.proto3.util.initPartial(t, this);
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
            "EditWritePermissionDenied|1 path 9|2 error 9|3 is_readonly 8"
        ];
    }
}
class Z extends K {
    constructor(t){
        super(), this.path = "", this.reason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Z).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Z).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Z).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Z, t, e);
    }
    static $() {
        return [
            "EditRejected|1 path 9|2 reason 9"
        ];
    }
}
class tt extends K {
    constructor(t){
        super(), this.path = "", this.error = "", n.proto3.util.initPartial(t, this);
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
            "EditError|1 path 9|2 error 9|5 model_visible_error 9?"
        ];
    }
}
class et extends K {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "EditToolCall|1 args #0|2 result #1",
            V,
            z
        ];
    }
}
class rt extends K {
    constructor(t){
        super(), this.streamContentDelta = "", n.proto3.util.initPartial(t, this);
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
            "EditToolCallDelta|1 stream_content_delta 9"
        ];
    }
}
var nt = require("./module-2730.js");
class st extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class it extends st {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "LsToolCall|1 args #0|2 result #1",
            nt.xe,
            nt.fv
        ];
    }
}
var ot = require("./module-6885.js"), at = require("./module-4500.js");
class ut extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class ct extends ut {
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
            "ReadLintsToolCall|1 args #0|2 result #1",
            lt,
            mt
        ];
    }
}
class lt extends ut {
    constructor(t){
        super(), this.paths = [], n.proto3.util.initPartial(t, this);
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
            "ReadLintsToolArgs|1 paths 9*"
        ];
    }
}
class mt extends ut {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mt, t, e);
    }
    static $() {
        return [
            "ReadLintsToolResult|1 success #0 result|2 error #1 result",
            dt,
            gt
        ];
    }
}
class dt extends ut {
    constructor(t){
        super(), this.fileDiagnostics = [], this.totalFiles = 0, this.totalDiagnostics = 0, n.proto3.util.initPartial(t, this);
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
            "ReadLintsToolSuccess|1 file_diagnostics #0*|2 total_files 5|3 total_diagnostics 5",
            ft
        ];
    }
}
class ft extends ut {
    constructor(t){
        super(), this.path = "", this.diagnostics = [], this.diagnosticsCount = 0, n.proto3.util.initPartial(t, this);
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
            "FileDiagnostics|1 path 9|2 diagnostics #0*|3 diagnostics_count 5",
            pt
        ];
    }
}
class pt extends ut {
    constructor(t){
        super(), this.severity = ot.h_.UNSPECIFIED, this.message = "", this.source = "", this.code = "", this.isStale = !1, n.proto3.util.initPartial(t, this);
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
            "DiagnosticItem|1 severity #0|2 range #1|3 message 9|4 source 9|5 code 9|6 is_stale 8",
            ot.h_,
            ht
        ];
    }
}
class ht extends ut {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "DiagnosticRange|1 start #0|2 end #0",
            at.yX
        ];
    }
}
class gt extends ut {
    constructor(t){
        super(), this.errorMessage = "", n.proto3.util.initPartial(t, this);
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
            "ReadLintsToolError|1 error_message 9"
        ];
    }
}
var At = require("./module-1197.js");
class _t extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class yt extends _t {
    constructor(t){
        super(), this.error = "", this.readToolDefReminder = "", this.systemReminders = [], n.proto3.util.initPartial(t, this);
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
            "McpToolError|1 error 9|2 read_tool_def_reminder 9|3 system_reminders #0*",
            At.Kp
        ];
    }
}
class wt extends _t {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "McpToolResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 permission_denied #3 result",
            At.QW,
            yt,
            At.xo,
            At.HQ
        ];
    }
}
class St extends _t {
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
            "McpToolCall|1 args #0|2 result #1|3 description 9?",
            At.E_,
            wt
        ];
    }
}
var Jt = require("./module-1563.js");
class Bt extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class Et extends Bt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "SemSearchToolCall|1 args #0|2 result #1",
            It,
            Ct
        ];
    }
}
class It extends Bt {
    constructor(t){
        super(), this.query = "", this.targetDirectories = [], this.explanation = "", n.proto3.util.initPartial(t, this);
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
            "SemSearchToolArgs|1 query 9|2 target_directories 9*|3 explanation 9"
        ];
    }
}
class Ct extends Bt {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "SemSearchToolResult|1 success #0 result|2 error #1 result",
            bt,
            kt
        ];
    }
}
class bt extends Bt {
    constructor(t){
        super(), this.results = "", this.codeResults = [], n.proto3.util.initPartial(t, this);
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
            "SemSearchToolSuccess|1 results 9|2 code_results #0*",
            Jt.PT
        ];
    }
}
class kt extends Bt {
    constructor(t){
        super(), this.errorMessage = "", n.proto3.util.initPartial(t, this);
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
            "SemSearchToolError|1 error_message 9"
        ];
    }
}
class vt extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class qt extends vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qt, t, e);
    }
    static $() {
        return [
            "CreatePlanToolCall|1 args #0|2 result #1",
            Pt,
            Tt
        ];
    }
}
class Rt extends vt {
    constructor(t){
        super(), this.name = "", this.todos = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rt, t, e);
    }
    static $() {
        return [
            "Phase|1 name 9|2 todos #0*",
            N
        ];
    }
}
class Pt extends vt {
    constructor(t){
        super(), this.plan = "", this.todos = [], this.overview = "", this.name = "", this.isProject = !1, this.phases = [], n.proto3.util.initPartial(t, this);
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
            "CreatePlanArgs|1 plan 9|2 todos #0*|3 overview 9|4 name 9|5 is_project 8|6 phases #1*",
            N,
            Rt
        ];
    }
}
class Tt extends vt {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, this.planUri = "", n.proto3.util.initPartial(t, this);
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
            "CreatePlanResult|1 success #0 result|2 error #1 result|3 plan_uri 9",
            xt,
            Nt
        ];
    }
}
class xt extends vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "CreatePlanSuccess"
        ];
    }
}
class Nt extends vt {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
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
            "CreatePlanError|1 error 9"
        ];
    }
}
class Dt extends vt {
    constructor(t){
        super(), this.toolCallId = "", n.proto3.util.initPartial(t, this);
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
            "CreatePlanRequestQuery|1 args #0|2 tool_call_id 9",
            Pt
        ];
    }
}
class Ut extends vt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ut).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ut).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ut).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ut, t, e);
    }
    static $() {
        return [
            "CreatePlanRequestResponse|1 result #0",
            Tt
        ];
    }
}
class Qt extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class Mt extends Qt {
    constructor(t){
        super(), this.searchTerm = "", this.toolCallId = "", n.proto3.util.initPartial(t, this);
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
            "WebSearchArgs|1 search_term 9|2 tool_call_id 9"
        ];
    }
}
class Ot extends Qt {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ot).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ot).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ot).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ot, t, e);
    }
    static $() {
        return [
            "WebSearchResult|1 success #0 result|2 error #1 result|3 rejected #2 result",
            Ft,
            Lt,
            $t
        ];
    }
}
class Ft extends Qt {
    constructor(t){
        super(), this.references = [], n.proto3.util.initPartial(t, this);
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
            "WebSearchSuccess|1 references #0*",
            Gt
        ];
    }
}
class Lt extends Qt {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Lt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Lt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Lt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Lt, t, e);
    }
    static $() {
        return [
            "WebSearchError|1 error 9"
        ];
    }
}
class $t extends Qt {
    constructor(t){
        super(), this.reason = "", n.proto3.util.initPartial(t, this);
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
            "WebSearchRejected|1 reason 9"
        ];
    }
}
class Gt extends Qt {
    constructor(t){
        super(), this.title = "", this.url = "", this.chunk = "", n.proto3.util.initPartial(t, this);
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
            "WebSearchReference|1 title 9|2 url 9|3 chunk 9"
        ];
    }
}
class Ht extends Qt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "WebSearchToolCall|1 args #0|2 result #1",
            Mt,
            Ot
        ];
    }
}
class Kt extends Qt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "WebSearchRequestQuery|1 args #0",
            Mt
        ];
    }
}
class Vt extends Qt {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "WebSearchRequestResponse|1 approved #0 result|2 rejected #1 result",
            zt,
            Wt
        ];
    }
}
class zt extends Qt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "WebSearchRequestResponse.Approved"
        ];
    }
}
class Wt extends Qt {
    constructor(t){
        super(), this.reason = "", n.proto3.util.initPartial(t, this);
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
            "WebSearchRequestResponse.Rejected|1 reason 9"
        ];
    }
}
class Yt extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class jt extends Yt {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new jt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new jt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new jt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(jt, t, e);
    }
    static $() {
        return [
            "ListMcpResourcesToolCall|1 args #0|2 result #1",
            At.kj,
            At.kP
        ];
    }
}
class Xt extends Yt {
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
            "ReadMcpResourceToolCall|1 args #0|2 result #1",
            At.DI,
            At.ZD
        ];
    }
}
var Zt = require("./module-5814.js"), te = require("./module-8892.js"), ee = require("./module-1489.js");
class re extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class ne extends re {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ne).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ne).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ne).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ne, t, e);
    }
    static $() {
        return [
            "FetchToolCall|1 args #0|2 result #1",
            ee.UM,
            ee.uN
        ];
    }
}
class se extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class ie extends se {
    constructor(t){
        super(), this.targetModeId = "", this.toolCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ie).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ie).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ie).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ie, t, e);
    }
    static $() {
        return [
            "SwitchModeArgs|1 target_mode_id 9|2 explanation 9?|3 tool_call_id 9"
        ];
    }
}
class oe extends se {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new oe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new oe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new oe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(oe, t, e);
    }
    static $() {
        return [
            "SwitchModeResult|1 success #0 result|2 error #1 result|3 rejected #2 result",
            ae,
            ue,
            ce
        ];
    }
}
class ae extends se {
    constructor(t){
        super(), this.fromModeId = "", this.toModeId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ae).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ae).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ae).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ae, t, e);
    }
    static $() {
        return [
            "SwitchModeSuccess|1 from_mode_id 9|2 to_mode_id 9"
        ];
    }
}
class ue extends se {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ue).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ue).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ue).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ue, t, e);
    }
    static $() {
        return [
            "SwitchModeError|1 error 9"
        ];
    }
}
class ce extends se {
    constructor(t){
        super(), this.reason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ce).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ce).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ce).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ce, t, e);
    }
    static $() {
        return [
            "SwitchModeRejected|1 reason 9"
        ];
    }
}
class le extends se {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new le).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new le).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new le).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(le, t, e);
    }
    static $() {
        return [
            "SwitchModeToolCall|1 args #0|2 result #1",
            ie,
            oe
        ];
    }
}
class me extends se {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new me).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new me).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new me).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(me, t, e);
    }
    static $() {
        return [
            "SwitchModeRequestQuery|1 args #0",
            ie
        ];
    }
}
class de extends se {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new de).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new de).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new de).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(de, t, e);
    }
    static $() {
        return [
            "SwitchModeRequestResponse|1 approved #0 result|2 rejected #1 result",
            fe,
            pe
        ];
    }
}
class fe extends se {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fe, t, e);
    }
    static $() {
        return [
            "SwitchModeRequestResponse.Approved"
        ];
    }
}
class pe extends se {
    constructor(t){
        super(), this.reason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pe, t, e);
    }
    static $() {
        return [
            "SwitchModeRequestResponse.Rejected|1 reason 9"
        ];
    }
}
var he = require("./module-7747.js"), ge = require("./module-1531.js");
class Ae extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class _e extends Ae {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _e).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _e).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _e).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_e, t, e);
    }
    static $() {
        return [
            "RecordScreenToolCall|1 args #0|2 result #1",
            ge.zH,
            ge.Tj
        ];
    }
}
var ye = require("./module-3643.js"), we = require("./module-4498.js");
class Se extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class Je extends Se {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Je).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Je).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Je).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Je, t, e);
    }
    static $() {
        return [
            "WriteShellStdinToolCall|1 args #0|2 result #1",
            we.LL,
            we.nt
        ];
    }
}
class Be extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class Ee extends Be {
    constructor(t){
        super(), this.unexpectedActionOutcomes = "", this.relevantInstructions = "", this.scenarioAnalysis = "", this.criticalSynthesis = "", this.nextSteps = "", this.toolCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ee).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ee).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ee).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ee, t, e);
    }
    static $() {
        return [
            "ReflectArgs|1 unexpected_action_outcomes 9|2 relevant_instructions 9|3 scenario_analysis 9|4 critical_synthesis 9|5 next_steps 9|6 tool_call_id 9"
        ];
    }
}
class Ie extends Be {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ie).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ie).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ie).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ie, t, e);
    }
    static $() {
        return [
            "ReflectResult|1 success #0 result|2 error #1 result",
            Ce,
            be
        ];
    }
}
class Ce extends Be {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ce).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ce).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ce).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ce, t, e);
    }
    static $() {
        return [
            "ReflectSuccess"
        ];
    }
}
class be extends Be {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new be).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new be).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new be).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(be, t, e);
    }
    static $() {
        return [
            "ReflectError|1 error 9"
        ];
    }
}
class ke extends Be {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ke).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ke).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ke).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ke, t, e);
    }
    static $() {
        return [
            "ReflectToolCall|1 args #0|2 result #1",
            Ee,
            Ie
        ];
    }
}
class ve extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class qe extends ve {
    constructor(t){
        super(), this.installCommand = "", this.startCommand = "", this.dockerfileContents = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qe, t, e);
    }
    static $() {
        return [
            "SetupVmEnvironmentArgs|2 install_command 9|3 start_command 9|4 dockerfile_contents 9"
        ];
    }
}
class Re extends ve {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Re).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Re).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Re).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Re, t, e);
    }
    static $() {
        return [
            "SetupVmEnvironmentResult|1 success #0 result",
            Pe
        ];
    }
}
class Pe extends ve {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pe, t, e);
    }
    static $() {
        return [
            "SetupVmEnvironmentSuccess"
        ];
    }
}
class Te extends ve {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Te).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Te).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Te).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Te, t, e);
    }
    static $() {
        return [
            "SetupVmEnvironmentToolCall|1 args #0|2 result #1",
            qe,
            Re
        ];
    }
}
class xe extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class Ne extends xe {
    constructor(t){
        super(), this.toolCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ne).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ne).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ne).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ne, t, e);
    }
    static $() {
        return [
            "StartGrindExecutionArgs|1 explanation 9?|2 tool_call_id 9"
        ];
    }
}
class De extends xe {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new De).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new De).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new De).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(De, t, e);
    }
    static $() {
        return [
            "StartGrindExecutionResult|1 success #0 result|2 error #1 result",
            Ue,
            Qe
        ];
    }
}
class Ue extends xe {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ue).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ue).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ue).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ue, t, e);
    }
    static $() {
        return [
            "StartGrindExecutionSuccess"
        ];
    }
}
class Qe extends xe {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qe, t, e);
    }
    static $() {
        return [
            "StartGrindExecutionError|1 error 9"
        ];
    }
}
class Me extends xe {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Me).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Me).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Me).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Me, t, e);
    }
    static $() {
        return [
            "StartGrindExecutionToolCall|1 args #0|2 result #1",
            Ne,
            De
        ];
    }
}
class Oe extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class Fe extends Oe {
    constructor(t){
        super(), this.toolCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fe, t, e);
    }
    static $() {
        return [
            "StartGrindPlanningArgs|1 explanation 9?|2 tool_call_id 9"
        ];
    }
}
class Le extends Oe {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Le).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Le).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Le).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Le, t, e);
    }
    static $() {
        return [
            "StartGrindPlanningResult|1 success #0 result|2 error #1 result",
            $e,
            Ge
        ];
    }
}
class $e extends Oe {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $e).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $e).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $e).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($e, t, e);
    }
    static $() {
        return [
            "StartGrindPlanningSuccess"
        ];
    }
}
class Ge extends Oe {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ge).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ge).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ge).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ge, t, e);
    }
    static $() {
        return [
            "StartGrindPlanningError|1 error 9"
        ];
    }
}
class He extends Oe {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new He).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new He).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new He).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(He, t, e);
    }
    static $() {
        return [
            "StartGrindPlanningToolCall|1 args #0|2 result #1",
            Fe,
            Le
        ];
    }
}
class Ke extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class Ve extends Ke {
    constructor(t){
        super(), this.url = "", this.toolCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ve).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ve).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ve).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ve, t, e);
    }
    static $() {
        return [
            "WebFetchArgs|1 url 9|2 tool_call_id 9"
        ];
    }
}
class ze extends Ke {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ze).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ze).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ze).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ze, t, e);
    }
    static $() {
        return [
            "WebFetchResult|1 success #0 result|2 error #1 result|3 rejected #2 result",
            We,
            Ye,
            je
        ];
    }
}
class We extends Ke {
    constructor(t){
        super(), this.url = "", this.markdown = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new We).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new We).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new We).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(We, t, e);
    }
    static $() {
        return [
            "WebFetchSuccess|1 url 9|2 markdown 9|3 output_location #0?",
            at.pV
        ];
    }
}
class Ye extends Ke {
    constructor(t){
        super(), this.url = "", this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ye).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ye).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ye).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ye, t, e);
    }
    static $() {
        return [
            "WebFetchError|1 url 9|2 error 9"
        ];
    }
}
class je extends Ke {
    constructor(t){
        super(), this.reason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new je).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new je).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new je).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(je, t, e);
    }
    static $() {
        return [
            "WebFetchRejected|1 reason 9"
        ];
    }
}
class Xe extends Ke {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xe).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xe).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xe).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xe, t, e);
    }
    static $() {
        return [
            "WebFetchToolCall|1 args #0|2 result #1",
            Ve,
            ze
        ];
    }
}
class Ze extends Ke {
    constructor(t){
        super(), this.skipApproval = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ze).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ze).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ze).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ze, t, e);
    }
    static $() {
        return [
            "WebFetchRequestQuery|1 args #0|2 skip_approval 8|3 smart_mode_approval #1",
            Ve,
            at.UC
        ];
    }
}
class tr extends Ke {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tr, t, e);
    }
    static $() {
        return [
            "WebFetchRequestResponse|1 approved #0 result|2 rejected #1 result",
            er,
            rr
        ];
    }
}
class er extends Ke {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new er).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new er).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new er).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(er, t, e);
    }
    static $() {
        return [
            "WebFetchRequestResponse.Approved"
        ];
    }
}
class rr extends Ke {
    constructor(t){
        super(), this.reason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rr, t, e);
    }
    static $() {
        return [
            "WebFetchRequestResponse.Rejected|1 reason 9"
        ];
    }
}
var nr = require("./module-867.js"), sr = require("./module-5178.js");
const ir = "agent.v1.";
class or extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return ir;
    }
}
var ar = (0, o.QT)(n.proto3, ir, "MergePrMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MERGE"
    ],
    [
        2,
        "AUTO"
    ],
    [
        3,
        "DISABLE_AUTO"
    ]
], 1), ur = (0, o.QT)(n.proto3, ir, "MergePrMethod", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MERGE"
    ],
    [
        2,
        "SQUASH"
    ]
], 1), cr = (0, o.QT)(n.proto3, ir, "PullRequestStatus", [
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
    ]
], 1);
class lr extends or {
    constructor(t){
        super(), this.toolCallId = "", this.action = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lr, t, e);
    }
    static $() {
        return [
            "PrManagementArgs|1 tool_call_id 9|2 create_pr #0 action|3 update_pr #1 action|4 post_comment #2 action|5 resolve_comment #3 action|6 get_ci_status #4 action|7 set_pr_status #5 action|8 merge_pr #6 action",
            mr,
            dr,
            fr,
            pr,
            hr,
            gr,
            Ar
        ];
    }
}
class mr extends or {
    constructor(t){
        super(), this.title = "", this.body = "", this.branchName = "", this.addLabels = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mr, t, e);
    }
    static $() {
        return [
            "CreatePrAction|1 title 9|2 body 9|3 base_branch 9?|4 draft 8?|5 branch_name 9|6 add_labels 9*|7 repo_url 9?|8 skip_branch_prefix_check 8?|9 stack_on_pr_number 3?"
        ];
    }
}
class dr extends or {
    constructor(t){
        super(), this.addLabels = [], this.removeLabels = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dr, t, e);
    }
    static $() {
        return [
            "UpdatePrAction|1 pr_url 9?|2 title 9?|3 body 9?|4 base_branch 9?|5 branch_name 9?|6 add_labels 9*|7 remove_labels 9*|8 repo_url 9?|9 stack_on_pr_number 3?|10 clear_stack 8?|11 draft 8?"
        ];
    }
}
class fr extends or {
    constructor(t){
        super(), this.body = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fr, t, e);
    }
    static $() {
        return [
            "PostCommentAction|1 pr_url 9?|2 branch_name 9?|3 body 9|4 repo_url 9?|5 in_reply_to 3?|6 path 9?|7 line 5?|8 start_line 5?|9 side 9?|10 reply_to_reference 9?"
        ];
    }
}
class pr extends or {
    constructor(t){
        super(), this.commentId = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pr, t, e);
    }
    static $() {
        return [
            "ResolveCommentAction|1 pr_url 9?|2 branch_name 9?|3 comment_id 3|4 repo_url 9?|5 comment_reference 9?"
        ];
    }
}
class hr extends or {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hr, t, e);
    }
    static $() {
        return [
            "GetCiStatusAction|1 pr_url 9?|2 branch_name 9?|3 repo_url 9?"
        ];
    }
}
class gr extends or {
    constructor(t){
        super(), this.status = cr.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gr, t, e);
    }
    static $() {
        return [
            "SetPrStatusAction|1 pr_url 9?|2 branch_name 9?|3 repo_url 9?|4 status #0",
            cr
        ];
    }
}
class Ar extends or {
    constructor(t){
        super(), this.mode = ar.UNSPECIFIED, this.method = ur.UNSPECIFIED, this.expectedMemberHeadShas = {}, this.downstack = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ar).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ar).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ar).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ar, t, e);
    }
    static $() {
        return [
            "MergePrAction|1 pr_url 9?|2 branch_name 9?|3 repo_url 9?|4 mode #0|5 method #1|6 expected_head_sha 9?|7 expected_member_head_shas 9,9|8 downstack 8",
            ar,
            ur
        ];
    }
}
class _r extends or {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _r).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _r).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _r).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_r, t, e);
    }
    static $() {
        return [
            "PrManagementResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 registered #3 result|5 needs_confirmation #4 result",
            yr,
            wr,
            Sr,
            Jr,
            Br
        ];
    }
}
class yr extends or {
    constructor(t){
        super(), this.prUrl = "", this.prNumber = 0, this.message = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yr, t, e);
    }
    static $() {
        return [
            "PrManagementSuccess|1 pr_url 9|2 pr_number 5|3 message 9"
        ];
    }
}
class wr extends or {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wr, t, e);
    }
    static $() {
        return [
            "PrManagementError|1 error 9"
        ];
    }
}
class Sr extends or {
    constructor(t){
        super(), this.reason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sr, t, e);
    }
    static $() {
        return [
            "PrManagementRejected|1 reason 9"
        ];
    }
}
class Jr extends or {
    constructor(t){
        super(), this.message = "", this.title = "", this.body = "", this.branchName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jr, t, e);
    }
    static $() {
        return [
            "PrManagementRegistered|1 message 9|2 title 9|3 body 9|4 base_branch 9?|5 draft 8?|6 branch_name 9"
        ];
    }
}
class Br extends or {
    constructor(t){
        super(), this.message = "", this.discoveredPrUrl = "", this.discoveredPrNumber = 0, this.discoveredPrTitle = "", this.branchName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Br).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Br).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Br).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Br, t, e);
    }
    static $() {
        return [
            "PrManagementNeedsConfirmation|1 message 9|2 discovered_pr_url 9|3 discovered_pr_number 5|4 discovered_pr_title 9|5 branch_name 9"
        ];
    }
}
class Er extends or {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Er).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Er).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Er).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Er, t, e);
    }
    static $() {
        return [
            "PrManagementToolCall|1 args #0|2 result #1",
            lr,
            _r
        ];
    }
}
class Ir extends or {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ir).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ir).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ir).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ir, t, e);
    }
    static $() {
        return [
            "PrManagementRequestQuery|1 args #0",
            lr
        ];
    }
}
class Cr extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class br extends Cr {
    constructor(t){
        super(), this.serverIdentifier = "", this.toolCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new br).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new br).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new br).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(br, t, e);
    }
    static $() {
        return [
            "McpAuthArgs|1 server_identifier 9|2 tool_call_id 9"
        ];
    }
}
class kr extends Cr {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new kr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new kr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new kr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(kr, t, e);
    }
    static $() {
        return [
            "McpAuthResult|1 success #0 result|2 error #1 result|3 rejected #2 result",
            vr,
            qr,
            Rr
        ];
    }
}
class vr extends Cr {
    constructor(t){
        super(), this.serverIdentifier = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vr, t, e);
    }
    static $() {
        return [
            "McpAuthSuccess|1 server_identifier 9"
        ];
    }
}
class qr extends Cr {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qr, t, e);
    }
    static $() {
        return [
            "McpAuthError|1 error 9"
        ];
    }
}
class Rr extends Cr {
    constructor(t){
        super(), this.reason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rr, t, e);
    }
    static $() {
        return [
            "McpAuthRejected|1 reason 9"
        ];
    }
}
class Pr extends Cr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pr, t, e);
    }
    static $() {
        return [
            "McpAuthToolCall|1 args #0|2 result #1",
            br,
            kr
        ];
    }
}
class Tr extends Cr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tr, t, e);
    }
    static $() {
        return [
            "McpAuthRequestQuery|1 args #0",
            br
        ];
    }
}
class xr extends Cr {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xr, t, e);
    }
    static $() {
        return [
            "McpAuthRequestResponse|1 approved #0 result|2 rejected #1 result",
            Nr,
            Dr
        ];
    }
}
class Nr extends Cr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nr, t, e);
    }
    static $() {
        return [
            "McpAuthRequestResponse.Approved"
        ];
    }
}
class Dr extends Cr {
    constructor(t){
        super(), this.reason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dr, t, e);
    }
    static $() {
        return [
            "McpAuthRequestResponse.Rejected|1 reason 9"
        ];
    }
}
class Ur extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class Qr extends Ur {
    constructor(t){
        super(), this.taskId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qr, t, e);
    }
    static $() {
        return [
            "AwaitArgs|1 task_id 9|2 block_until_ms 13?|3 regex 9?"
        ];
    }
}
class Mr extends Ur {
    constructor(t){
        super(), this.taskId = "", this.runtimeMs = n.protoInt64.zero, this.outputFilePath = "", this.outputLength = n.protoInt64.zero, this.regexRequested = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mr, t, e);
    }
    static $() {
        return [
            "AwaitTaskComplete|1 task_id 9|2 runtime_ms 4|3 output_file_path 9|4 output_length 4|5 regex_requested 8|6 regex_match 9?|7 exit_code 17?|8 wake_reason 9?"
        ];
    }
}
class Or extends Ur {
    constructor(t){
        super(), this.taskId = "", this.runtimeMs = n.protoInt64.zero, this.outputFilePath = "", this.outputLength = n.protoInt64.zero, this.regexRequested = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Or).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Or).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Or).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Or, t, e);
    }
    static $() {
        return [
            "AwaitTaskStillRunning|1 task_id 9|2 runtime_ms 4|3 output_file_path 9|4 output_length 4|5 regex_requested 8|6 regex_match 9?|7 wake_reason 9?"
        ];
    }
}
class Fr extends Ur {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fr, t, e);
    }
    static $() {
        return [
            "AwaitError|1 error 9"
        ];
    }
}
class Lr extends Ur {
    constructor(t){
        super(), this.awaitResult = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Lr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Lr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Lr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Lr, t, e);
    }
    static $() {
        return [
            "AwaitSuccess|1 complete #0 await_result|2 still_running #1 await_result",
            Mr,
            Or
        ];
    }
}
class $r extends Ur {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $r).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $r).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $r).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($r, t, e);
    }
    static $() {
        return [
            "AwaitResult|1 complete #0 result|2 still_running #1 result|3 error #2 result|4 success #3 result",
            Mr,
            Or,
            Fr,
            Lr
        ];
    }
}
class Gr extends Ur {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gr, t, e);
    }
    static $() {
        return [
            "AwaitToolCall|1 args #0|2 result #1",
            Qr,
            $r
        ];
    }
}
class Hr extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class Kr extends Hr {
    constructor(t){
        super(), this.filePath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Kr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Kr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Kr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Kr, t, e);
    }
    static $() {
        return [
            "BlameByFilePathArgs|1 file_path 9|2 start_line 5?|3 end_line 5?"
        ];
    }
}
class Vr extends Hr {
    constructor(t){
        super(), this.content = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vr, t, e);
    }
    static $() {
        return [
            "BlameByFilePathSuccess|1 content 9"
        ];
    }
}
class zr extends Hr {
    constructor(t){
        super(), this.errorMessage = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zr, t, e);
    }
    static $() {
        return [
            "BlameByFilePathError|1 error_message 9"
        ];
    }
}
class Wr extends Hr {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wr, t, e);
    }
    static $() {
        return [
            "BlameByFilePathResult|1 success #0 result|2 error #1 result",
            Vr,
            zr
        ];
    }
}
class Yr extends Hr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yr, t, e);
    }
    static $() {
        return [
            "BlameByFilePathToolCall|1 args #0|2 result #1",
            Kr,
            Wr
        ];
    }
}
class jr extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class Xr extends jr {
    constructor(t){
        super(), this.toolCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xr, t, e);
    }
    static $() {
        return [
            "GetMcpToolsArgs|1 server 9?|2 tool_name 9?|3 pattern 9?|4 tool_call_id 9"
        ];
    }
}
class Zr extends jr {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zr).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zr).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zr).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zr, t, e);
    }
    static $() {
        return [
            "GetMcpToolsAgentResult|1 success #0 result|2 error #1 result",
            tn,
            en
        ];
    }
}
class tn extends jr {
    constructor(t){
        super(), this.content = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tn, t, e);
    }
    static $() {
        return [
            "GetMcpToolsSuccess|1 content 9|2 output_file_path 9?"
        ];
    }
}
class en extends jr {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new en).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new en).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new en).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(en, t, e);
    }
    static $() {
        return [
            "GetMcpToolsError|1 error 9"
        ];
    }
}
class rn extends jr {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rn, t, e);
    }
    static $() {
        return [
            "GetMcpToolsToolCall|1 args #0|2 result #1",
            Xr,
            Zr
        ];
    }
}
class nn extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class sn extends nn {
    constructor(t){
        super(), this.title = "", this.file = "", this.startLine = 0, this.endLine = 0, this.description = "", this.severity = "", this.category = "", this.rationale = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sn, t, e);
    }
    static $() {
        return [
            "ReportBugArgs|1 title 9|2 file 9|3 start_line 5|4 end_line 5|5 description 9|6 severity 9|7 category 9|8 rationale 9"
        ];
    }
}
class on extends nn {
    constructor(t){
        super(), this.output = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new on).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new on).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new on).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(on, t, e);
    }
    static $() {
        return [
            "ReportBugSuccess|1 output 9"
        ];
    }
}
class an extends nn {
    constructor(t){
        super(), this.errorMessage = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new an).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new an).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new an).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(an, t, e);
    }
    static $() {
        return [
            "ReportBugError|1 error_message 9"
        ];
    }
}
class un extends nn {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new un).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new un).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new un).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(un, t, e);
    }
    static $() {
        return [
            "ReportBugResult|1 success #0 result|2 error #1 result",
            on,
            an
        ];
    }
}
class cn extends nn {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cn, t, e);
    }
    static $() {
        return [
            "ReportBugToolCall|1 args #0|2 result #1",
            sn,
            un
        ];
    }
}
class ln extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class mn extends ln {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mn, t, e);
    }
    static $() {
        return [
            "CommunicateUpdateArgs|1 current_step 9?|3 final_summary 9?|4 completed_subtitle 9?"
        ];
    }
}
class dn extends ln {
    constructor(t){
        super(), this.currentStep = "", this.messageIndex = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dn, t, e);
    }
    static $() {
        return [
            "CommunicateUpdateSuccess|1 current_step 9|3 message_index 13"
        ];
    }
}
class fn extends ln {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fn, t, e);
    }
    static $() {
        return [
            "CommunicateUpdateError|1 error 9"
        ];
    }
}
class pn extends ln {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pn, t, e);
    }
    static $() {
        return [
            "CommunicateUpdateResult|1 success #0 result|2 error #1 result",
            dn,
            fn
        ];
    }
}
class hn extends ln {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hn, t, e);
    }
    static $() {
        return [
            "CommunicateUpdateToolCall|1 args #0|2 result #1",
            mn,
            pn
        ];
    }
}
class gn extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class An extends gn {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new An).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new An).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new An).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(An, t, e);
    }
    static $() {
        return [
            "SendFinalSummaryArgs|1 final_summary 9?"
        ];
    }
}
class _n extends gn {
    constructor(t){
        super(), this.finalSummary = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _n).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _n).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _n).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_n, t, e);
    }
    static $() {
        return [
            "SendFinalSummarySuccess|1 final_summary 9"
        ];
    }
}
class yn extends gn {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yn, t, e);
    }
    static $() {
        return [
            "SendFinalSummaryError|1 error 9"
        ];
    }
}
class wn extends gn {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wn, t, e);
    }
    static $() {
        return [
            "SendFinalSummaryResult|1 success #0 result|2 error #1 result",
            _n,
            yn
        ];
    }
}
class Sn extends gn {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sn, t, e);
    }
    static $() {
        return [
            "SendFinalSummaryToolCall|1 args #0|2 result #1",
            An,
            wn
        ];
    }
}
const Jn = "agent.v1.";
class Bn extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return Jn;
    }
}
var En = (0, o.QT)(n.proto3, Jn, "ReplaceEnvMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CUSTOM"
    ],
    [
        2,
        "CLEAN_SLATE"
    ],
    [
        3,
        "DEFAULT"
    ]
], 1);
class In extends Bn {
    constructor(t){
        super(), this.repoUrl = "", this.ref = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new In).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new In).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new In).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(In, t, e);
    }
    static $() {
        return [
            "RepoCheckoutRefOverride|1 repo_url 9|2 ref 9"
        ];
    }
}
class Cn extends Bn {
    constructor(t){
        super(), this.installScript = "", this.dockerfileContents = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cn, t, e);
    }
    static $() {
        return [
            "ReplaceEnvConfig|1 install_script 9|2 dockerfile_contents 9"
        ];
    }
}
class bn extends Bn {
    constructor(t){
        super(), this.mode = En.UNSPECIFIED, this.checkoutRefOverrides = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bn, t, e);
    }
    static $() {
        return [
            "ReplaceEnvArgs|1 config #0|2 mode #1|3 checkout_ref_overrides #2*",
            Cn,
            En,
            In
        ];
    }
}
class kn extends Bn {
    constructor(t){
        super(), this.setupLogs = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new kn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new kn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new kn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(kn, t, e);
    }
    static $() {
        return [
            "ReplaceEnvSuccess|1 setup_logs 9"
        ];
    }
}
class vn extends Bn {
    constructor(t){
        super(), this.errorMessage = "", this.setupLogs = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vn, t, e);
    }
    static $() {
        return [
            "ReplaceEnvFailure|1 error_message 9|2 setup_logs 9"
        ];
    }
}
class qn extends Bn {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qn, t, e);
    }
    static $() {
        return [
            "ReplaceEnvResult|1 success #0 result|2 failure #1 result",
            kn,
            vn
        ];
    }
}
class Rn extends Bn {
    constructor(t){
        super(), this.associatedPodKey = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rn, t, e);
    }
    static $() {
        return [
            "ReplaceEnvToolCall|1 args #0|2 result #1|3 associated_pod_key 9",
            bn,
            qn
        ];
    }
}
class Pn extends Bn {
    constructor(t){
        super(), this.associatedPodKey = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pn, t, e);
    }
    static $() {
        return [
            "ReplaceEnvToolCallDelta|1 associated_pod_key 9"
        ];
    }
}
class Tn extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class xn extends Tn {
    constructor(t){
        super(), this.toolCallId = "", this.prUrl = "", this.addLabels = [], this.removeLabels = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xn, t, e);
    }
    static $() {
        return [
            "EditPrLabelsArgs|1 tool_call_id 9|2 pr_url 9|4 add_labels 9*|5 remove_labels 9*"
        ];
    }
}
class Nn extends Tn {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nn, t, e);
    }
    static $() {
        return [
            "EditPrLabelsResult|1 success #0 result|2 error #1 result",
            Dn,
            Un
        ];
    }
}
class Dn extends Tn {
    constructor(t){
        super(), this.prUrl = "", this.prNumber = 0, this.message = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dn, t, e);
    }
    static $() {
        return [
            "EditPrLabelsSuccess|1 pr_url 9|2 pr_number 5|3 message 9"
        ];
    }
}
class Un extends Tn {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Un).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Un).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Un).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Un, t, e);
    }
    static $() {
        return [
            "EditPrLabelsError|1 error 9"
        ];
    }
}
class Qn extends Tn {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qn, t, e);
    }
    static $() {
        return [
            "EditPrLabelsToolCall|1 args #0|2 result #1",
            xn,
            Nn
        ];
    }
}
class Mn extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class On extends Mn {
    constructor(t){
        super(), this.checkName = "", this.tldr = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new On).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new On).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new On).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(On, t, e);
    }
    static $() {
        return [
            "RecordCiInvestigationFinding|1 check_name 9|2 details_url 9?|3 tldr 9|4 root_cause 9?|5 failing_signal 9?|6 suggested_next_step 9?|7 diff_relation 9?|8 diff_relation_evidence 9?|9 flake_assessment 9?|10 flake_evidence 9?|11 rerun_available 8?|12 rerun_evidence 9?|13 recommended_action 9?|14 recommended_action_evidence 9?|15 confidence 9?"
        ];
    }
}
class Fn extends Mn {
    constructor(t){
        super(), this.summary = "", this.themes = [], this.checkKeys = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fn, t, e);
    }
    static $() {
        return [
            "RecordCiInvestigationOverall|1 summary 9|2 themes 9*|3 recommended_action 9?|4 recommended_action_evidence 9?|5 check_keys 9*"
        ];
    }
}
class Ln extends Mn {
    constructor(t){
        super(), this.findings = [], this.toolCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ln).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ln).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ln).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ln, t, e);
    }
    static $() {
        return [
            "RecordCiInvestigationFindingsArgs|1 findings #0*|2 overall #1?|3 tool_call_id 9",
            On,
            Fn
        ];
    }
}
class $n extends Mn {
    constructor(t){
        super(), this.message = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $n).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $n).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $n).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($n, t, e);
    }
    static $() {
        return [
            "RecordCiInvestigationFindingsSuccess|1 message 9"
        ];
    }
}
class Gn extends Mn {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gn, t, e);
    }
    static $() {
        return [
            "RecordCiInvestigationFindingsError|1 error 9"
        ];
    }
}
class Hn extends Mn {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hn, t, e);
    }
    static $() {
        return [
            "RecordCiInvestigationFindingsResult|1 success #0 result|2 error #1 result",
            $n,
            Gn
        ];
    }
}
class Kn extends Mn {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Kn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Kn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Kn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Kn, t, e);
    }
    static $() {
        return [
            "RecordCiInvestigationFindingsToolCall|1 args #0|2 result #1",
            Ln,
            Hn
        ];
    }
}
class Vn extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class zn extends Vn {
    constructor(t){
        super(), this.content = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zn, t, e);
    }
    static $() {
        return [
            "SendMessageText|1 content 9"
        ];
    }
}
class Wn extends Vn {
    constructor(t){
        super(), this.url = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wn, t, e);
    }
    static $() {
        return [
            "SendMessageAttachment|1 url 9|2 alt 9?"
        ];
    }
}
class Yn extends Vn {
    constructor(t){
        super(), this.message = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yn, t, e);
    }
    static $() {
        return [
            "SendMessageArgs|1 text #0 message|2 attachment #1 message",
            zn,
            Wn
        ];
    }
}
class jn extends Vn {
    constructor(t){
        super(), this.timestamp = n.protoInt64.zero, this.messageId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new jn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new jn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new jn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(jn, t, e);
    }
    static $() {
        return [
            "SendMessageSuccess|1 timestamp 4|2 message_id 9"
        ];
    }
}
class Xn extends Vn {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xn, t, e);
    }
    static $() {
        return [
            "SendMessageError|1 error 9"
        ];
    }
}
class Zn extends Vn {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zn).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zn).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zn).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zn, t, e);
    }
    static $() {
        return [
            "SendMessageResult|1 success #0 result|2 error #1 result",
            jn,
            Xn
        ];
    }
}
class ts extends Vn {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ts).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ts).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ts).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ts, t, e);
    }
    static $() {
        return [
            "SendMessageToolCall|1 args #0|2 result #1",
            Yn,
            Zn
        ];
    }
}
class es extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class rs extends es {
    constructor(t){
        super(), this.bcIds = [], this.sources = [], this.statuses = [], this.includeTeamWide = !1, this.includeArchived = !1, this.includeTranscript = !1, this.activeSince = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rs, t, e);
    }
    static $() {
        return [
            "FetchCloudAgentDataArgs|4 bc_ids 9*|6 sources 9*|7 statuses 9*|8 include_team_wide 8|9 include_archived 8|10 limit 5?|12 include_transcript 8|13 active_since 9"
        ];
    }
}
class ns extends es {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ns).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ns).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ns).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ns, t, e);
    }
    static $() {
        return [
            "FetchCloudAgentDataResult|1 success #0 result|2 error #1 result",
            ss,
            is
        ];
    }
}
class ss extends es {
    constructor(t){
        super(), this.summary = "", this.agentCount = 0, this.writtenPaths = [], this.unavailableBcIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ss).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ss).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ss).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ss, t, e);
    }
    static $() {
        return [
            "FetchCloudAgentDataSuccess|1 summary 9|2 agent_count 5|3 written_paths 9*|4 unavailable_bc_ids 9*"
        ];
    }
}
class is extends es {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new is).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new is).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new is).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(is, t, e);
    }
    static $() {
        return [
            "FetchCloudAgentDataError|1 error 9"
        ];
    }
}
class os extends es {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new os).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new os).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new os).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(os, t, e);
    }
    static $() {
        return [
            "FetchCloudAgentDataToolCall|1 args #0|2 result #1",
            rs,
            ns
        ];
    }
}
class as extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class us extends as {
    constructor(t){
        super(), this.message = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new us).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new us).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new us).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(us, t, e);
    }
    static $() {
        return [
            "SendToUserArgs|1 message 9"
        ];
    }
}
class cs extends as {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cs, t, e);
    }
    static $() {
        return [
            "SendToUserSuccess"
        ];
    }
}
class ls extends as {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ls).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ls).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ls).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ls, t, e);
    }
    static $() {
        return [
            "SendToUserError|1 error 9"
        ];
    }
}
class ms extends as {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ms).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ms).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ms).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ms, t, e);
    }
    static $() {
        return [
            "SendToUserResult|1 success #0 result|2 error #1 result",
            cs,
            ls
        ];
    }
}
class ds extends as {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ds).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ds).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ds).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ds, t, e);
    }
    static $() {
        return [
            "SendToUserToolCall|1 args #0|2 result #1",
            us,
            ms
        ];
    }
}
var fs = require("./module-8036.js");
class ps extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class hs extends ps {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hs, t, e);
    }
    static $() {
        return [
            "PiReadToolCall|1 args #0|2 result #1",
            gs,
            As
        ];
    }
}
class gs extends ps {
    constructor(t){
        super(), this.path = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gs, t, e);
    }
    static $() {
        return [
            "PiReadToolArgs|1 path 9|2 offset 5?|3 limit 5?"
        ];
    }
}
class As extends ps {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new As).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new As).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new As).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(As, t, e);
    }
    static $() {
        return [
            "PiReadToolResult|1 success #0 result|2 error #1 result",
            _s,
            ys
        ];
    }
}
class _s extends ps {
    constructor(t){
        super(), this.output = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _s).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _s).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _s).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_s, t, e);
    }
    static $() {
        return [
            "PiReadToolSuccess|1 output 9|2 truncation #0?",
            fs.d
        ];
    }
}
class ys extends ps {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ys).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ys).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ys).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ys, t, e);
    }
    static $() {
        return [
            "PiReadToolError|1 error 9"
        ];
    }
}
class ws extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class Ss extends ws {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ss).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ss).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ss).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ss, t, e);
    }
    static $() {
        return [
            "PiBashToolCall|1 args #0|2 result #1",
            Js,
            Bs
        ];
    }
}
class Js extends ws {
    constructor(t){
        super(), this.command = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Js).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Js).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Js).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Js, t, e);
    }
    static $() {
        return [
            "PiBashToolArgs|1 command 9|2 timeout 1?"
        ];
    }
}
class Bs extends ws {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bs, t, e);
    }
    static $() {
        return [
            "PiBashToolResult|1 success #0 result|2 error #1 result",
            Es,
            Is
        ];
    }
}
class Es extends ws {
    constructor(t){
        super(), this.output = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Es).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Es).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Es).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Es, t, e);
    }
    static $() {
        return [
            "PiBashToolSuccess|1 output 9|2 truncation #0?|3 full_output_path 9?",
            fs.d
        ];
    }
}
class Is extends ws {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Is).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Is).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Is).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Is, t, e);
    }
    static $() {
        return [
            "PiBashToolError|1 error 9|2 truncation #0?|3 full_output_path 9?",
            fs.d
        ];
    }
}
var Cs = require("./module-2628.js");
class bs extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class ks extends bs {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ks).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ks).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ks).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ks, t, e);
    }
    static $() {
        return [
            "PiWriteToolCall|1 args #0|2 result #1",
            vs,
            qs
        ];
    }
}
class vs extends bs {
    constructor(t){
        super(), this.path = "", this.content = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vs, t, e);
    }
    static $() {
        return [
            "PiWriteToolArgs|1 path 9|2 content 9"
        ];
    }
}
class qs extends bs {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qs, t, e);
    }
    static $() {
        return [
            "PiWriteToolResult|1 success #0 result|2 error #1 result|3 rejected #2 result",
            Rs,
            Ps,
            Ts
        ];
    }
}
class Rs extends bs {
    constructor(t){
        super(), this.output = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rs, t, e);
    }
    static $() {
        return [
            "PiWriteToolSuccess|1 output 9"
        ];
    }
}
class Ps extends bs {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ps).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ps).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ps).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ps, t, e);
    }
    static $() {
        return [
            "PiWriteToolError|1 error 9"
        ];
    }
}
class Ts extends bs {
    constructor(t){
        super(), this.reason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ts).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ts).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ts).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ts, t, e);
    }
    static $() {
        return [
            "PiWriteToolRejected|1 reason 9"
        ];
    }
}
class xs extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class Ns extends xs {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ns).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ns).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ns).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ns, t, e);
    }
    static $() {
        return [
            "PiGrepToolCall|1 args #0|2 result #1",
            Ds,
            Us
        ];
    }
}
class Ds extends xs {
    constructor(t){
        super(), this.pattern = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ds).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ds).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ds).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ds, t, e);
    }
    static $() {
        return [
            "PiGrepToolArgs|1 pattern 9|2 path 9?|3 glob 9?|4 ignore_case 8?|5 literal 8?|6 context 5?|7 limit 5?"
        ];
    }
}
class Us extends xs {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Us).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Us).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Us).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Us, t, e);
    }
    static $() {
        return [
            "PiGrepToolResult|1 success #0 result|2 error #1 result",
            Qs,
            Ms
        ];
    }
}
class Qs extends xs {
    constructor(t){
        super(), this.output = "", this.linesTruncated = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qs, t, e);
    }
    static $() {
        return [
            "PiGrepToolSuccess|1 output 9|2 truncation #0?|3 match_limit_reached 13?|4 lines_truncated 8",
            fs.d
        ];
    }
}
class Ms extends xs {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ms).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ms).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ms).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ms, t, e);
    }
    static $() {
        return [
            "PiGrepToolError|1 error 9"
        ];
    }
}
class Os extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class Fs extends Os {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fs, t, e);
    }
    static $() {
        return [
            "PiFindToolCall|1 args #0|2 result #1",
            Ls,
            $s
        ];
    }
}
class Ls extends Os {
    constructor(t){
        super(), this.pattern = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ls).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ls).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ls).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ls, t, e);
    }
    static $() {
        return [
            "PiFindToolArgs|1 pattern 9|2 path 9?|3 limit 5?"
        ];
    }
}
class $s extends Os {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $s).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $s).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $s).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($s, t, e);
    }
    static $() {
        return [
            "PiFindToolResult|1 success #0 result|2 error #1 result",
            Gs,
            Hs
        ];
    }
}
class Gs extends Os {
    constructor(t){
        super(), this.output = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gs, t, e);
    }
    static $() {
        return [
            "PiFindToolSuccess|1 output 9|2 truncation #0?|3 result_limit_reached 13?",
            fs.d
        ];
    }
}
class Hs extends Os {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hs, t, e);
    }
    static $() {
        return [
            "PiFindToolError|1 error 9"
        ];
    }
}
class Ks extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class Vs extends Ks {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vs, t, e);
    }
    static $() {
        return [
            "PiLsToolCall|1 args #0|2 result #1",
            zs,
            Ws
        ];
    }
}
class zs extends Ks {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zs, t, e);
    }
    static $() {
        return [
            "PiLsToolArgs|1 path 9?|2 limit 5?"
        ];
    }
}
class Ws extends Ks {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ws).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ws).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ws).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ws, t, e);
    }
    static $() {
        return [
            "PiLsToolResult|1 success #0 result|2 error #1 result",
            Ys,
            js
        ];
    }
}
class Ys extends Ks {
    constructor(t){
        super(), this.output = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ys).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ys).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ys).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ys, t, e);
    }
    static $() {
        return [
            "PiLsToolSuccess|1 output 9|2 truncation #0?|3 entry_limit_reached 13?",
            fs.d
        ];
    }
}
class js extends Ks {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new js).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new js).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new js).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(js, t, e);
    }
    static $() {
        return [
            "PiLsToolError|1 error 9"
        ];
    }
}
class Xs extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class Zs extends Xs {
    constructor(t){
        super(), this.toolCallId = "", this.target = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zs).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zs).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zs).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zs, t, e);
    }
    static $() {
        return [
            "ConnectScmArgs|1 tool_call_id 9|2 github #0 target",
            ti
        ];
    }
}
class ti extends Xs {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ti).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ti).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ti).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ti, t, e);
    }
    static $() {
        return [
            "ConnectScmGithub|1 repository #0|2 ghe_application 9?",
            ei
        ];
    }
}
class ei extends Xs {
    constructor(t){
        super(), this.owner = "", this.repo = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ei).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ei).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ei).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ei, t, e);
    }
    static $() {
        return [
            "ConnectScmGithubRepository|1 owner 9|2 repo 9"
        ];
    }
}
class ri extends Xs {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ri).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ri).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ri).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ri, t, e);
    }
    static $() {
        return [
            "ConnectScmResult|1 success #0 result|2 error #1 result|3 rejected #2 result",
            ni,
            si,
            ii
        ];
    }
}
class ni extends Xs {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ni).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ni).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ni).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ni, t, e);
    }
    static $() {
        return [
            "ConnectScmSuccess"
        ];
    }
}
class si extends Xs {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new si).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new si).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new si).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(si, t, e);
    }
    static $() {
        return [
            "ConnectScmError|1 error 9"
        ];
    }
}
class ii extends Xs {
    constructor(t){
        super(), this.reason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ii).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ii).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ii).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ii, t, e);
    }
    static $() {
        return [
            "ConnectScmRejected|1 reason 9"
        ];
    }
}
class oi extends Xs {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new oi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new oi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new oi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(oi, t, e);
    }
    static $() {
        return [
            "ConnectScmToolCall|1 args #0|2 result #1",
            Zs,
            ri
        ];
    }
}
class ai extends Xs {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ai).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ai).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ai).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ai, t, e);
    }
    static $() {
        return [
            "ConnectScmRequestQuery|1 args #0",
            Zs
        ];
    }
}
class ui extends Xs {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ui).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ui).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ui).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ui, t, e);
    }
    static $() {
        return [
            "ConnectScmRequestResponse|1 approved #0 result|2 rejected #1 result|3 failed #2 result",
            ci,
            li,
            mi
        ];
    }
}
class ci extends Xs {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ci).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ci).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ci).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ci, t, e);
    }
    static $() {
        return [
            "ConnectScmRequestResponse.Approved"
        ];
    }
}
class li extends Xs {
    constructor(t){
        super(), this.reason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new li).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new li).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new li).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(li, t, e);
    }
    static $() {
        return [
            "ConnectScmRequestResponse.Rejected|1 reason 9"
        ];
    }
}
class mi extends Xs {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mi, t, e);
    }
    static $() {
        return [
            "ConnectScmRequestResponse.Failed|1 error 9"
        ];
    }
}
var di = require("./module-3081.js");
class fi extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class pi extends fi {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pi, t, e);
    }
    static $() {
        return [
            "SearchConversationsToolCall|1 args #0|2 result #1",
            di.$m,
            di.pT
        ];
    }
}
const hi = "agent.v1.";
class gi extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return hi;
    }
}
var Ai = (0, o.QT)(n.proto3, hi, "GoalStatus", [
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
        "PAUSED"
    ],
    [
        3,
        "COMPLETE"
    ],
    [
        4,
        "CLEARED"
    ]
], 1);
class _i extends gi {
    constructor(t){
        super(), this.objective = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _i).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _i).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _i).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_i, t, e);
    }
    static $() {
        return [
            "CreateGoalArgs|1 objective 9"
        ];
    }
}
class yi extends gi {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yi, t, e);
    }
    static $() {
        return [
            "CreateGoalSuccess"
        ];
    }
}
class wi extends gi {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wi, t, e);
    }
    static $() {
        return [
            "GoalError|1 error 9"
        ];
    }
}
class Si extends gi {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Si).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Si).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Si).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Si, t, e);
    }
    static $() {
        return [
            "CreateGoalResult|1 success #0 result|2 error #1 result",
            yi,
            wi
        ];
    }
}
class Ji extends gi {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ji).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ji).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ji).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ji, t, e);
    }
    static $() {
        return [
            "CreateGoalToolCall|1 args #0|2 result #1",
            _i,
            Si
        ];
    }
}
class Bi extends gi {
    constructor(t){
        super(), this.status = Ai.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bi, t, e);
    }
    static $() {
        return [
            "UpdateGoalArgs|1 status #0",
            Ai
        ];
    }
}
class Ei extends gi {
    constructor(t){
        super(), this.status = Ai.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ei).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ei).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ei).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ei, t, e);
    }
    static $() {
        return [
            "UpdateGoalSuccess|1 status #0",
            Ai
        ];
    }
}
class Ii extends gi {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ii).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ii).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ii).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ii, t, e);
    }
    static $() {
        return [
            "UpdateGoalResult|1 success #0 result|2 error #1 result",
            Ei,
            wi
        ];
    }
}
class Ci extends gi {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ci).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ci).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ci).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ci, t, e);
    }
    static $() {
        return [
            "UpdateGoalToolCall|1 args #0|2 result #1",
            Bi,
            Ii
        ];
    }
}
const bi = "agent.v1.";
class ki extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return bi;
    }
}
var vi = (0, o.QT)(n.proto3, bi, "CreateAgentPlacementApprovalState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "REQUIRED"
    ],
    [
        2,
        "DENIED"
    ]
], 1);
class qi extends ki {
    constructor(t){
        super(), this.toolCallId = "", this.agentIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qi, t, e);
    }
    static $() {
        return [
            "GetAgentStatusArgs|1 tool_call_id 9|2 agent_ids 9*"
        ];
    }
}
class Ri extends ki {
    constructor(t){
        super(), this.bcId = "", this.name = "", this.lifecycle = "", this.turnInFlight = !1, this.lastTerminalTurnStatus = "", this.prUrl = "", this.lastActivityAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ri).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ri).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ri).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ri, t, e);
    }
    static $() {
        return [
            "GetAgentStatusWorker|1 bc_id 9|2 name 9|3 lifecycle 9|4 turn_in_flight 8|5 last_terminal_turn_status 9|6 pr_url 9|7 last_activity_at_ms 4"
        ];
    }
}
class Pi extends ki {
    constructor(t){
        super(), this.workers = [], this.message = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pi, t, e);
    }
    static $() {
        return [
            "GetAgentStatusSuccess|1 workers #0*|2 message 9",
            Ri
        ];
    }
}
class Ti extends ki {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ti).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ti).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ti).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ti, t, e);
    }
    static $() {
        return [
            "GetAgentStatusError|1 error 9"
        ];
    }
}
class xi extends ki {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xi, t, e);
    }
    static $() {
        return [
            "GetAgentStatusResult|1 success #0 result|2 error #1 result",
            Pi,
            Ti
        ];
    }
}
class Ni extends ki {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ni).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ni).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ni).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ni, t, e);
    }
    static $() {
        return [
            "GetAgentStatusToolCall|1 args #0|2 result #1",
            qi,
            xi
        ];
    }
}
class Di extends ki {
    constructor(t){
        super(), this.toolCallId = "", this.agentId = "", this.message = "", this.delivery = "", this.title = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Di).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Di).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Di).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Di, t, e);
    }
    static $() {
        return [
            "SendToAgentArgs|1 tool_call_id 9|2 agent_id 9|3 message 9|4 delivery 9|5 title 9|6 model 9?"
        ];
    }
}
class Ui extends ki {
    constructor(t){
        super(), this.workerBcId = "", this.deliveredAs = "", this.message = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ui).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ui).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ui).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ui, t, e);
    }
    static $() {
        return [
            "SendToAgentSuccess|1 worker_bc_id 9|2 delivered_as 9|3 message 9"
        ];
    }
}
class Qi extends ki {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qi, t, e);
    }
    static $() {
        return [
            "SendToAgentError|1 error 9"
        ];
    }
}
class Mi extends ki {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mi, t, e);
    }
    static $() {
        return [
            "SendToAgentResult|1 success #0 result|2 error #1 result",
            Ui,
            Qi
        ];
    }
}
class Oi extends ki {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Oi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Oi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Oi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Oi, t, e);
    }
    static $() {
        return [
            "SendToAgentToolCall|1 args #0|2 result #1",
            Di,
            Mi
        ];
    }
}
class Fi extends ki {
    constructor(t){
        super(), this.toolCallId = "", this.agentId = "", this.mode = "", this.maxTurns = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fi, t, e);
    }
    static $() {
        return [
            "ReadAgentTranscriptArgs|1 tool_call_id 9|2 agent_id 9|3 mode 9|4 max_turns 13"
        ];
    }
}
class Li extends ki {
    constructor(t){
        super(), this.transcript = "", this.truncated = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Li).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Li).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Li).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Li, t, e);
    }
    static $() {
        return [
            "ReadAgentTranscriptSuccess|1 transcript 9|2 truncated 8"
        ];
    }
}
class $i extends ki {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $i).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $i).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $i).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($i, t, e);
    }
    static $() {
        return [
            "ReadAgentTranscriptError|1 error 9"
        ];
    }
}
class Gi extends ki {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gi, t, e);
    }
    static $() {
        return [
            "ReadAgentTranscriptResult|1 success #0 result|2 error #1 result",
            Li,
            $i
        ];
    }
}
class Hi extends ki {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hi, t, e);
    }
    static $() {
        return [
            "ReadAgentTranscriptToolCall|1 args #0|2 result #1",
            Fi,
            Gi
        ];
    }
}
class Ki extends ki {
    constructor(t){
        super(), this.toolCallId = "", this.prompt = "", this.labels = {}, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ki).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ki).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ki).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ki, t, e);
    }
    static $() {
        return [
            "CreateAgentArgs|1 tool_call_id 9|2 prompt 9|3 name 9?|4 model 9?|5 base_branch 9?|6 machine_type 9?|7 worker_id 9?|8 pool 9?|9 labels 9,9|10 environment_build_id 9?|11 environment_id 9?"
        ];
    }
}
class Vi extends ki {
    constructor(t){
        super(), this.agentId = "", this.message = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vi, t, e);
    }
    static $() {
        return [
            "CreateAgentSuccess|1 agent_id 9|2 message 9"
        ];
    }
}
class zi extends ki {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zi, t, e);
    }
    static $() {
        return [
            "CreateAgentError|1 error 9|2 placement_approval_state #0?",
            vi
        ];
    }
}
class Wi extends ki {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wi, t, e);
    }
    static $() {
        return [
            "CreateAgentResult|1 success #0 result|2 error #1 result",
            Vi,
            zi
        ];
    }
}
class Yi extends ki {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yi, t, e);
    }
    static $() {
        return [
            "CreateAgentToolCall|1 args #0|2 result #1",
            Ki,
            Wi
        ];
    }
}
class ji extends ki {
    constructor(t){
        super(), this.toolCallId = "", this.agentId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ji).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ji).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ji).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ji, t, e);
    }
    static $() {
        return [
            "StopAgentArgs|1 tool_call_id 9|2 agent_id 9"
        ];
    }
}
class Xi extends ki {
    constructor(t){
        super(), this.workerBcId = "", this.message = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xi, t, e);
    }
    static $() {
        return [
            "StopAgentSuccess|1 worker_bc_id 9|2 message 9"
        ];
    }
}
class Zi extends ki {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zi).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zi).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zi).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zi, t, e);
    }
    static $() {
        return [
            "StopAgentError|1 error 9"
        ];
    }
}
class to extends ki {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new to).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new to).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new to).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(to, t, e);
    }
    static $() {
        return [
            "StopAgentResult|1 success #0 result|2 error #1 result",
            Xi,
            Zi
        ];
    }
}
class eo extends ki {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new eo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new eo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new eo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(eo, t, e);
    }
    static $() {
        return [
            "StopAgentToolCall|1 args #0|2 result #1",
            ji,
            to
        ];
    }
}
const ro = "agent.v1.";
class no extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return ro;
    }
}
var so = (0, o.QT)(n.proto3, ro, "WriteCanvasFailReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "TYPECHECK_FAILED"
    ],
    [
        2,
        "COMPILE_FAILED"
    ],
    [
        3,
        "TOO_LARGE"
    ],
    [
        4,
        "UNAVAILABLE"
    ],
    [
        5,
        "NOT_FOUND"
    ],
    [
        6,
        "REFUSED"
    ]
], 1), io = (0, o.QT)(n.proto3, ro, "ReadCanvasFailReason", [
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
        "UNAVAILABLE"
    ],
    [
        3,
        "REFUSED"
    ],
    [
        4,
        "INVALID_REFERENCE"
    ]
], 1);
class oo extends no {
    constructor(t){
        super(), this.line = 0, this.character = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new oo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new oo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new oo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(oo, t, e);
    }
    static $() {
        return [
            "CloudCanvasToolDiagnosticPosition|1 line 5|2 character 5"
        ];
    }
}
class ao extends no {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ao).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ao).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ao).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ao, t, e);
    }
    static $() {
        return [
            "CloudCanvasToolDiagnosticRange|1 start #0|2 end #0",
            oo
        ];
    }
}
class uo extends no {
    constructor(t){
        super(), this.message = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new uo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new uo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new uo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(uo, t, e);
    }
    static $() {
        return [
            "CloudCanvasToolDiagnostic|1 message 9|2 code 9?|3 severity 5?|4 range #0?",
            ao
        ];
    }
}
class co extends no {
    constructor(t){
        super(), this.contents = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new co).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new co).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new co).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(co, t, e);
    }
    static $() {
        return [
            "WriteCanvasArgs|1 contents 9|2 canvas_id 9?|3 title 9?"
        ];
    }
}
class lo extends no {
    constructor(t){
        super(), this.canvasId = "", this.url = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lo, t, e);
    }
    static $() {
        return [
            "WriteCanvasSuccess|1 canvas_id 9|2 title 9?|3 url 9"
        ];
    }
}
class mo extends no {
    constructor(t){
        super(), this.reason = so.UNSPECIFIED, this.diagnostics = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mo, t, e);
    }
    static $() {
        return [
            "WriteCanvasFailure|1 reason #0|2 diagnostics #1*|3 detail 9?",
            so,
            uo
        ];
    }
}
class fo extends no {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fo, t, e);
    }
    static $() {
        return [
            "WriteCanvasResult|1 success #0 result|2 failure #1 result",
            lo,
            mo
        ];
    }
}
class po extends no {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new po).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new po).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new po).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(po, t, e);
    }
    static $() {
        return [
            "WriteCanvasToolCall|1 args #0|2 result #1",
            co,
            fo
        ];
    }
}
class ho extends no {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ho).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ho).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ho).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ho, t, e);
    }
    static $() {
        return [
            "ReadCanvasArgs|1 canvas_id 9?|2 url 9?"
        ];
    }
}
class go extends no {
    constructor(t){
        super(), this.canvasId = "", this.url = "", this.source = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new go).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new go).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new go).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(go, t, e);
    }
    static $() {
        return [
            "ReadCanvasSuccess|1 canvas_id 9|2 title 9?|3 url 9|4 source 9"
        ];
    }
}
class Ao extends no {
    constructor(t){
        super(), this.reason = io.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ao).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ao).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ao).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ao, t, e);
    }
    static $() {
        return [
            "ReadCanvasFailure|1 reason #0|2 detail 9?",
            io
        ];
    }
}
class _o extends no {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _o).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _o).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _o).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_o, t, e);
    }
    static $() {
        return [
            "ReadCanvasResult|1 success #0 result|2 failure #1 result",
            go,
            Ao
        ];
    }
}
class yo extends no {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yo, t, e);
    }
    static $() {
        return [
            "ReadCanvasToolCall|1 args #0|2 result #1",
            ho,
            _o
        ];
    }
}
class wo extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class So extends wo {
    constructor(t){
        super(), this.prompt = "", this.referenceImagePaths = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new So).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new So).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new So).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(So, t, e);
    }
    static $() {
        return [
            "GenerateVideoArgs|1 prompt 9|2 file_path 9?|3 image_path 9?|4 reference_image_paths 9*|5 duration_seconds 13?|6 aspect_ratio 9?|7 resolution 9?"
        ];
    }
}
class Jo extends wo {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jo, t, e);
    }
    static $() {
        return [
            "GenerateVideoResult|1 success #0 result|2 error #1 result",
            Bo,
            Eo
        ];
    }
}
class Bo extends wo {
    constructor(t){
        super(), this.filePath = "", this.durationSeconds = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bo, t, e);
    }
    static $() {
        return [
            "GenerateVideoSuccess|1 file_path 9|2 duration_seconds 13"
        ];
    }
}
class Eo extends wo {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Eo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Eo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Eo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Eo, t, e);
    }
    static $() {
        return [
            "GenerateVideoError|1 error 9"
        ];
    }
}
class Io extends wo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Io).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Io).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Io).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Io, t, e);
    }
    static $() {
        return [
            "GenerateVideoToolCall|1 args #0|2 result #1",
            So,
            Jo
        ];
    }
}
class Co extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class bo extends Co {
    constructor(t){
        super(), this.query = "", this.allowedXHandles = [], this.excludedXHandles = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bo, t, e);
    }
    static $() {
        return [
            "XSearchArgs|1 query 9|2 from_date 9?|3 to_date 9?|4 allowed_x_handles 9*|5 excluded_x_handles 9*"
        ];
    }
}
class ko extends Co {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ko).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ko).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ko).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ko, t, e);
    }
    static $() {
        return [
            "XSearchResult|1 success #0 result|2 error #1 result|3 rejected #2 result",
            vo,
            Ro,
            Po
        ];
    }
}
class vo extends Co {
    constructor(t){
        super(), this.answer = "", this.citations = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vo, t, e);
    }
    static $() {
        return [
            "XSearchSuccess|1 answer 9|2 citations #0*",
            qo
        ];
    }
}
class qo extends Co {
    constructor(t){
        super(), this.url = "", this.title = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qo, t, e);
    }
    static $() {
        return [
            "XSearchCitation|1 url 9|2 title 9"
        ];
    }
}
class Ro extends Co {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ro).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ro).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ro).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ro, t, e);
    }
    static $() {
        return [
            "XSearchError|1 error 9"
        ];
    }
}
class Po extends Co {
    constructor(t){
        super(), this.reason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Po).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Po).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Po).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Po, t, e);
    }
    static $() {
        return [
            "XSearchRejected|1 reason 9"
        ];
    }
}
class To extends Co {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new To).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new To).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new To).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(To, t, e);
    }
    static $() {
        return [
            "XSearchToolCall|1 args #0|2 result #1",
            bo,
            ko
        ];
    }
}
var xo = require("./module-1180.js"), No = require("./module-9639.js"), Do = require("./module-9582.js"), Uo = require("./module-6209.js"), Qo = require("./module-4175.js"), Mo = require("./module-8427.js");
const Oo = "agent.v1.";
class Fo extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return Oo;
    }
}
var Lo = (0, o.QT)(n.proto3, Oo, "AgentMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "AGENT"
    ],
    [
        2,
        "ASK"
    ],
    [
        3,
        "PLAN"
    ],
    [
        4,
        "DEBUG"
    ],
    [
        5,
        "TRIAGE"
    ],
    [
        7,
        "MULTITASK"
    ],
    [
        8,
        "CUSTOM"
    ]
], 1), $o = (0, o.QT)(n.proto3, Oo, "BackgroundTaskKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SHELL"
    ],
    [
        2,
        "SUBAGENT"
    ]
], 1), Go = (0, o.QT)(n.proto3, Oo, "BackgroundTaskStatus", [
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
        "ERROR"
    ],
    [
        3,
        "ABORTED"
    ]
], 1), Ho = (0, o.QT)(n.proto3, Oo, "BackgroundTaskNotificationContext", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USER_DRIVEN_INTERACTIVE_CHILD"
    ]
], 1), Ko = (0, o.QT)(n.proto3, Oo, "SubagentRunStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "RUNNING"
    ],
    [
        2,
        "BACKGROUNDED"
    ],
    [
        3,
        "SUCCESS"
    ],
    [
        4,
        "ERROR"
    ],
    [
        5,
        "ABORTED"
    ]
], 1), Vo = (n.proto3, (0, o.QT)(n.proto3, Oo, "CustomModeSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "AGENT_SKILL"
    ],
    [
        2,
        "PLUGIN_SKILL"
    ],
    [
        3,
        "REPO_SKILL"
    ],
    [
        4,
        "MANAGED_SKILL"
    ]
], 1)), zo = (0, o.QT)(n.proto3, Oo, "SimulatedMsgReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PLAN_EXECUTION"
    ],
    [
        2,
        "COMMIT_REMINDER"
    ],
    [
        3,
        "BACKGROUND_TASK_COMPLETION"
    ],
    [
        4,
        "DIFF_TAB_COMMIT"
    ],
    [
        5,
        "DIFF_TAB_COMMIT_AND_PUSH"
    ],
    [
        6,
        "DIFF_TAB_PUSH"
    ],
    [
        7,
        "DIFF_TAB_CREATE_PR"
    ],
    [
        8,
        "DIFF_TAB_FIX_MERGE_CONFLICTS"
    ],
    [
        9,
        "USER_SENT_TO_SUBAGENT"
    ],
    [
        10,
        "USER_INTERRUPTED_SUBAGENT"
    ],
    [
        11,
        "USER_QUEUED_TO_SUBAGENT"
    ],
    [
        12,
        "BABYSIT_PR_IN_CLOUD"
    ],
    [
        13,
        "CI_PANEL_INVESTIGATE_FAILURE"
    ],
    [
        14,
        "MULTITASK"
    ],
    [
        15,
        "BUILD_IN_PARALLEL"
    ],
    [
        16,
        "MULTITASK_SPLIT_PRS"
    ],
    [
        17,
        "APPLY_LOCALLY"
    ],
    [
        18,
        "CHECKOUT_BRANCH"
    ],
    [
        19,
        "DIFF_TAB_UPDATE_BRANCH"
    ],
    [
        20,
        "PR_TAB_BUGBOT_FIX"
    ],
    [
        22,
        "RUN_BUGBOT_REVIEW"
    ],
    [
        23,
        "RUN_SECURITY_REVIEW"
    ],
    [
        24,
        "FSD_APPLY_FINDING"
    ],
    [
        25,
        "FSD_UNDO_FINDING"
    ],
    [
        26,
        "FSD_START"
    ],
    [
        27,
        "FSD_PR_INTERRUPT"
    ],
    [
        28,
        "SUBSCRIPTION"
    ],
    [
        29,
        "DIFF_TAB_CREATE_BRANCH"
    ],
    [
        30,
        "AGENT_STORE_CONFLICT"
    ],
    [
        31,
        "GOAL_CONTINUATION"
    ],
    [
        32,
        "PROJECT_KICKOFF"
    ],
    [
        33,
        "MARKDOWN_PROMPT_BUTTON"
    ],
    [
        34,
        "USER_QUICK_ACTION"
    ],
    [
        35,
        "INTERACTION_RESPONSE"
    ]
], 1), Wo = (0, o.QT)(n.proto3, Oo, "SubscriptionSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SLACK"
    ],
    [
        2,
        "GITHUB"
    ],
    [
        3,
        "LINEAR"
    ],
    [
        4,
        "ORIGIN"
    ],
    [
        5,
        "FACTORY"
    ]
], 1), Yo = (0, o.QT)(n.proto3, Oo, "ThinkingStyle", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DEFAULT"
    ],
    [
        2,
        "CODEX"
    ],
    [
        3,
        "GPT5"
    ]
], 1), jo = (0, o.QT)(n.proto3, Oo, "ResponseComparisonDisplayOrder", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PARENT_FIRST"
    ],
    [
        2,
        "ALTERNATE_FIRST"
    ]
], 1), Xo = (0, o.QT)(n.proto3, Oo, "ResponseComparisonSkipReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ALTERNATE_TOOL_CALL"
    ],
    [
        2,
        "INFERENCE_ERROR"
    ],
    [
        3,
        "TIMEOUT"
    ],
    [
        4,
        "CANCELLED"
    ]
], 1);
class Zo extends Fo {
    constructor(t){
        super(), this.description = "", this.prompt = "", this.attachments = [], this.mode = s.FL.UNSPECIFIED, this.respondingToMessageIds = [], this.environment = s.dU.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zo).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zo).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zo).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zo, t, e);
    }
    static $() {
        return [
            "TaskArgs|1 description 9|2 prompt 9|3 subagent_type #0|4 model 9?|5 resume 9?|6 agent_id 9?|7 attachments 9*|8 mode #1|9 responding_to_message_ids 9*|10 environment #2|11 machine #3?",
            s._L,
            s.FL,
            s.dU,
            ta
        ];
    }
}
class ta extends Fo {
    constructor(t){
        super(), this.machine = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ta).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ta).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ta).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ta, t, e);
    }
    static $() {
        return [
            "TargetMachine|1 same_machine #0 machine|2 new_cloud_vm #1 machine|3 self_hosted_worker #2 machine|4 self_hosted_pool #3 machine",
            ea,
            ra,
            na,
            sa
        ];
    }
}
class ea extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ea).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ea).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ea).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ea, t, e);
    }
    static $() {
        return [
            "SameMachineTarget"
        ];
    }
}
class ra extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ra).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ra).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ra).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ra, t, e);
    }
    static $() {
        return [
            "NewCloudVmTarget|1 environment_build_id 9?|2 base_branch 9?"
        ];
    }
}
class na extends Fo {
    constructor(t){
        super(), this.workerId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new na).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new na).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new na).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(na, t, e);
    }
    static $() {
        return [
            "SelfHostedWorkerTarget|1 worker_id 9"
        ];
    }
}
class sa extends Fo {
    constructor(t){
        super(), this.labels = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sa, t, e);
    }
    static $() {
        return [
            "SelfHostedPoolTarget|1 pool 9?|2 labels #0*",
            ia
        ];
    }
}
class ia extends Fo {
    constructor(t){
        super(), this.key = "", this.value = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ia).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ia).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ia).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ia, t, e);
    }
    static $() {
        return [
            "SelfHostedWorkerLabel|1 key 9|2 value 9"
        ];
    }
}
class oa extends Fo {
    constructor(t){
        super(), this.conversationSteps = [], this.isBackground = !1, this.backgroundReason = s.qL.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new oa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new oa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new oa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(oa, t, e);
    }
    static $() {
        return [
            "TaskSuccess|1 conversation_steps #0*|2 agent_id 9?|3 is_background 8|4 duration_ms 4?|5 result_suffix 9?|6 background_reason #1|7 transcript_path 9?",
            Ba,
            s.qL
        ];
    }
}
class aa extends Fo {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new aa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new aa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new aa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(aa, t, e);
    }
    static $() {
        return [
            "TaskError|1 error 9"
        ];
    }
}
class ua extends Fo {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ua).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ua).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ua).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ua, t, e);
    }
    static $() {
        return [
            "TaskResult|1 success #0 result|2 error #1 result",
            oa,
            aa
        ];
    }
}
class ca extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ca).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ca).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ca).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ca, t, e);
    }
    static $() {
        return [
            "TaskToolCall|1 args #0|2 result #1|3 cloud_agent_bc_id 9?",
            Zo,
            ua
        ];
    }
}
class la extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new la).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new la).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new la).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(la, t, e);
    }
    static $() {
        return [
            "TaskToolCallDelta|1 interaction_update #0",
            Rc
        ];
    }
}
class ma extends Fo {
    constructor(t){
        super(), this.path = "", this.branchName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ma).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ma).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ma).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ma, t, e);
    }
    static $() {
        return [
            "SetActiveBranchArgs|1 path 9|2 branch_name 9"
        ];
    }
}
class da extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new da).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new da).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new da).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(da, t, e);
    }
    static $() {
        return [
            "SetActiveBranchSuccess"
        ];
    }
}
class fa extends Fo {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fa, t, e);
    }
    static $() {
        return [
            "SetActiveBranchError|1 error 9"
        ];
    }
}
class pa extends Fo {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pa, t, e);
    }
    static $() {
        return [
            "SetActiveBranchResult|1 success #0 result|2 error #1 result",
            da,
            fa
        ];
    }
}
class ha extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ha).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ha).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ha).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ha, t, e);
    }
    static $() {
        return [
            "SetActiveBranchToolCall|1 args #0|2 result #1",
            ma,
            pa
        ];
    }
}
class ga extends Fo {
    constructor(t){
        super(), this.tool = {
            case: void 0
        }, this.hookAdditionalContexts = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ga).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ga).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ga).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ga, t, e);
    }
    static $() {
        return [
            "ToolCall|1 shell_tool_call #0 tool|3 delete_tool_call #1 tool|4 glob_tool_call #2 tool|5 grep_tool_call #3 tool|8 read_tool_call #4 tool|9 update_todos_tool_call #5 tool|10 read_todos_tool_call #6 tool|12 edit_tool_call #7 tool|13 ls_tool_call #8 tool|14 read_lints_tool_call #9 tool|15 mcp_tool_call #10 tool|16 sem_search_tool_call #11 tool|17 create_plan_tool_call #12 tool|18 web_search_tool_call #13 tool|19 task_tool_call #14 tool|20 list_mcp_resources_tool_call #15 tool|21 read_mcp_resource_tool_call #16 tool|22 apply_agent_diff_tool_call #17 tool|23 ask_question_tool_call #18 tool|24 fetch_tool_call #19 tool|25 switch_mode_tool_call #20 tool|28 generate_image_tool_call #21 tool|29 record_screen_tool_call #22 tool|30 computer_use_tool_call #23 tool|31 write_shell_stdin_tool_call #24 tool|32 reflect_tool_call #25 tool|33 setup_vm_environment_tool_call #26 tool|34 truncated_tool_call #27 tool|35 start_grind_execution_tool_call #28 tool|36 start_grind_planning_tool_call #29 tool|37 web_fetch_tool_call #30 tool|38 report_bugfix_results_tool_call #31 tool|39 ai_attribution_tool_call #32 tool|40 pr_management_tool_call #33 tool|41 mcp_auth_tool_call #34 tool|42 await_tool_call #35 tool|43 blame_by_file_path_tool_call #36 tool|44 get_mcp_tools_tool_call #37 tool|45 report_bug_tool_call #38 tool|46 set_active_branch_tool_call #39 tool|48 communicate_update_tool_call #40 tool|49 send_final_summary_tool_call #41 tool|51 replace_env_tool_call #42 tool|52 edit_pr_labels_tool_call #43 tool|53 record_ci_investigation_findings_tool_call #44 tool|55 send_message_tool_call #45 tool|56 fetch_cloud_agent_data_tool_call #46 tool|58 send_to_user_tool_call #47 tool|61 pi_read_tool_call #48 tool|62 pi_bash_tool_call #49 tool|63 pi_edit_tool_call #50 tool|64 pi_write_tool_call #51 tool|65 pi_grep_tool_call #52 tool|66 pi_find_tool_call #53 tool|67 pi_ls_tool_call #54 tool|68 connect_scm_tool_call #55 tool|69 search_conversations_tool_call #56 tool|70 create_goal_tool_call #57 tool|71 update_goal_tool_call #58 tool|73 get_agent_status_tool_call #59 tool|74 send_to_agent_tool_call #60 tool|75 read_agent_transcript_tool_call #61 tool|76 create_agent_tool_call #62 tool|77 stop_agent_tool_call #63 tool|79 write_canvas_tool_call #64 tool|80 read_canvas_tool_call #65 tool|81 generate_video_tool_call #66 tool|82 x_search_tool_call #67 tool|54 hook_additional_contexts #68*|57 tool_call_id 9?|59 started_at_ms 4?|60 completed_at_ms 4?",
            u,
            p,
            w,
            B,
            C,
            D,
            F,
            et,
            it,
            ct,
            St,
            Et,
            qt,
            Ht,
            ca,
            jt,
            Xt,
            Zt.JU,
            te.OU,
            ne,
            le,
            he.r9,
            _e,
            ye.t8,
            Je,
            ke,
            Te,
            Sa,
            Me,
            He,
            Xe,
            nr.U_,
            sr.ex,
            Er,
            Pr,
            Gr,
            Yr,
            rn,
            cn,
            ha,
            hn,
            Sn,
            Rn,
            Qn,
            Kn,
            ts,
            os,
            ds,
            hs,
            Ss,
            Cs.EN,
            ks,
            Ns,
            Fs,
            Vs,
            oi,
            pi,
            Ji,
            Ci,
            Ni,
            Oi,
            Hi,
            Yi,
            eo,
            po,
            yo,
            Io,
            To,
            xo.C
        ];
    }
}
class Aa extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Aa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Aa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Aa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Aa, t, e);
    }
    static $() {
        return [
            "TruncatedToolCallArgs"
        ];
    }
}
class _a extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _a).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _a).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _a).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_a, t, e);
    }
    static $() {
        return [
            "TruncatedToolCallSuccess"
        ];
    }
}
class ya extends Fo {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ya).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ya).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ya).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ya, t, e);
    }
    static $() {
        return [
            "TruncatedToolCallError|1 error 9"
        ];
    }
}
class wa extends Fo {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wa, t, e);
    }
    static $() {
        return [
            "TruncatedToolCallResult|1 success #0 result|2 error #1 result",
            _a,
            ya
        ];
    }
}
class Sa extends Fo {
    constructor(t){
        super(), this.originalStepBlobId = new Uint8Array(0), this.originalStepSizeBytes = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sa, t, e);
    }
    static $() {
        return [
            "TruncatedToolCall|1 original_step_blob_id 12|2 args #0|3 result #1|4 original_step_size_bytes 13|5 preview #2",
            Aa,
            wa,
            ga
        ];
    }
}
class Ja extends Fo {
    constructor(t){
        super(), this.delta = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ja).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ja).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ja).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ja, t, e);
    }
    static $() {
        return [
            "ToolCallDelta|1 shell_tool_call_delta #0 delta|2 task_tool_call_delta #1 delta|3 edit_tool_call_delta #2 delta|4 replace_env_tool_call_delta #3 delta",
            m,
            la,
            rt,
            Pn
        ];
    }
}
class Ba extends Fo {
    constructor(t){
        super(), this.message = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ba).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ba).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ba).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ba, t, e);
    }
    static $() {
        return [
            "ConversationStep|1 assistant_message #0 message|2 tool_call #1 message|3 thinking_message #2 message",
            ku,
            ga,
            vu
        ];
    }
}
class Ea extends Fo {
    constructor(t){
        super(), this.action = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ea).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ea).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ea).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ea, t, e);
    }
    static $() {
        return [
            "ConversationAction|1 user_message_action #0 action|2 resume_action #1 action|3 cancel_action #2 action|4 summarize_action #3 action|5 shell_command_action #4 action|6 start_plan_action #5 action|7 execute_plan_action #6 action|8 async_ask_question_completion_action #7 action|10 cancel_subagent_action #8 action|12 background_task_completion_action #9 action|13 background_shell_action #10 action|14 background_subagent_action #11 action|16 subscription_notification_action #12 action|18 goal_continuation_action #13 action|19 inject_context_action #14 action|11 triggering_auth_id 9?|15 triggering_user_info #15?|17 request_context_parts #16?",
            Va,
            mu,
            lu,
            fu,
            pu,
            hu,
            gu,
            du,
            va,
            Ca,
            qa,
            Ra,
            za,
            Wa,
            Ya,
            Ia,
            No.sG
        ];
    }
}
class Ia extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ia).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ia).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ia).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ia, t, e);
    }
    static $() {
        return [
            "TriggeringUserInfo|1 auth_id 9?|2 user_id 5?"
        ];
    }
}
class Ca extends Fo {
    constructor(t){
        super(), this.completions = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ca).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ca).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ca).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ca, t, e);
    }
    static $() {
        return [
            "BackgroundTaskCompletionAction|1 completions #0*|2 system_reminder 9?|3 request_context #1",
            ba,
            No.bb
        ];
    }
}
class ba extends Fo {
    constructor(t){
        super(), this.taskId = "", this.kind = $o.UNSPECIFIED, this.status = Go.UNSPECIFIED, this.title = "", this.reason = s.U6.UNSPECIFIED, this.notificationContext = Ho.UNSPECIFIED, this.recordOnly = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ba).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ba).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ba).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ba, t, e);
    }
    static $() {
        return [
            "BackgroundTaskCompletion|1 task_id 9|2 kind #0|3 status #1|4 title 9|5 detail 9?|6 output_path 9?|7 thread_id 9?|8 reason #2|9 subagent_id 9?|10 tool_call_id 9?|11 notification_context #3|12 completed_at_ms 4?|13 record_only 8",
            $o,
            Go,
            s.U6,
            Ho
        ];
    }
}
class ka extends Fo {
    constructor(t){
        super(), this.parentToolCallId = "", this.environment = s.dU.UNSPECIFIED, this.status = Ko.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ka).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ka).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ka).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ka, t, e);
    }
    static $() {
        return [
            "SubagentRunState|1 parent_tool_call_id 9|2 subagent_id 9?|3 environment #0|4 status #1|5 title 9?|6 detail 9?|7 transcript_path 9?|8 output_path 9?|9 completed_timestamp_ms 4?|10 completion_reason #2?",
            s.dU,
            Ko,
            s.U6
        ];
    }
}
class va extends Fo {
    constructor(t){
        super(), this.subagentId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new va).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new va).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new va).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(va, t, e);
    }
    static $() {
        return [
            "CancelSubagentAction|1 subagent_id 9"
        ];
    }
}
class qa extends Fo {
    constructor(t){
        super(), this.toolCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qa, t, e);
    }
    static $() {
        return [
            "BackgroundShellAction|1 tool_call_id 9"
        ];
    }
}
class Ra extends Fo {
    constructor(t){
        super(), this.toolCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ra).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ra).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ra).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ra, t, e);
    }
    static $() {
        return [
            "BackgroundSubagentAction|1 tool_call_id 9"
        ];
    }
}
class Pa extends Fo {
    constructor(t){
        super(), this.toolCallId = "", this.resolution = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pa, t, e);
    }
    static $() {
        return [
            "InterruptedPendingToolCallResolution|1 tool_call_id 9|2 shell_result #0 resolution|3 task_result #1 resolution",
            i.W4,
            ua
        ];
    }
}
class Ta extends Fo {
    constructor(t){
        super(), this.resolutions = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ta).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ta).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ta).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ta, t, e);
    }
    static $() {
        return [
            "InterruptedPendingToolCallResolutions|1 resolutions #0*",
            Pa
        ];
    }
}
class xa extends Fo {
    constructor(t){
        super(), this.messages = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xa, t, e);
    }
    static $() {
        return [
            "ConversationHistory|1 messages #0*|2 replace_user_info 8?",
            Na
        ];
    }
}
class Na extends Fo {
    constructor(t){
        super(), this.message = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Na).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Na).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Na).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Na, t, e);
    }
    static $() {
        return [
            "ConversationHistoryMessage|1 user #0 message|2 assistant #1 message|3 tool #2 message",
            Da,
            Oa,
            Ha
        ];
    }
}
class Da extends Fo {
    constructor(t){
        super(), this.content = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Da).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Da).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Da).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Da, t, e);
    }
    static $() {
        return [
            "ConversationHistoryUserMessage|1 content #0*",
            Ua
        ];
    }
}
class Ua extends Fo {
    constructor(t){
        super(), this.content = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ua).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ua).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ua).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ua, t, e);
    }
    static $() {
        return [
            "ConversationHistoryUserContent|1 text #0 content|2 image #1 content",
            Qa,
            Ma
        ];
    }
}
class Qa extends Fo {
    constructor(t){
        super(), this.text = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qa, t, e);
    }
    static $() {
        return [
            "ConversationHistoryTextContent|1 text 9"
        ];
    }
}
class Ma extends Fo {
    constructor(t){
        super(), this.data = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ma).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ma).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ma).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ma, t, e);
    }
    static $() {
        return [
            "ConversationHistoryImageContent|1 data 9|2 mime_type 9?"
        ];
    }
}
class Oa extends Fo {
    constructor(t){
        super(), this.content = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Oa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Oa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Oa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Oa, t, e);
    }
    static $() {
        return [
            "ConversationHistoryAssistantMessage|1 content #0*",
            Fa
        ];
    }
}
class Fa extends Fo {
    constructor(t){
        super(), this.content = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fa, t, e);
    }
    static $() {
        return [
            "ConversationHistoryAssistantContent|1 text #0 content|2 reasoning #1 content|3 redacted_reasoning #2 content|4 tool_call #3 content",
            Qa,
            La,
            $a,
            Ga
        ];
    }
}
class La extends Fo {
    constructor(t){
        super(), this.text = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new La).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new La).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new La).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(La, t, e);
    }
    static $() {
        return [
            "ConversationHistoryReasoningContent|1 text 9|2 signature 9?"
        ];
    }
}
class $a extends Fo {
    constructor(t){
        super(), this.data = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $a).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $a).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $a).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($a, t, e);
    }
    static $() {
        return [
            "ConversationHistoryRedactedReasoningContent|1 data 9"
        ];
    }
}
class Ga extends Fo {
    constructor(t){
        super(), this.toolCallId = "", this.toolName = "", this.argsJson = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ga).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ga).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ga).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ga, t, e);
    }
    static $() {
        return [
            "ConversationHistoryToolCall|1 tool_call_id 9|2 tool_name 9|3 args_json 9"
        ];
    }
}
class Ha extends Fo {
    constructor(t){
        super(), this.toolCallId = "", this.toolName = "", this.content = [], this.hookAdditionalContexts = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ha).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ha).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ha).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ha, t, e);
    }
    static $() {
        return [
            "ConversationHistoryToolMessage|1 tool_call_id 9|2 tool_name 9|3 content #0*|4 is_error 8?|5 hook_additional_contexts #1*",
            Ka,
            xo.C
        ];
    }
}
class Ka extends Fo {
    constructor(t){
        super(), this.content = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ka).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ka).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ka).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ka, t, e);
    }
    static $() {
        return [
            "ConversationHistoryToolResultContent|1 text #0 content|2 image #1 content",
            Qa,
            Ma
        ];
    }
}
class Va extends Fo {
    constructor(t){
        super(), this.prependUserMessages = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Va).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Va).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Va).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Va, t, e);
    }
    static $() {
        return [
            "UserMessageAction|1 user_message #0|2 request_context #1|3 send_to_interaction_listener 8?|4 prepend_user_messages #0*|6 interrupted_pending_tool_call_resolutions #2?|7 conversation_history #3?|8 trailing_conversation_history #3?",
            Eu,
            No.bb,
            Ta,
            xa
        ];
    }
}
class za extends Fo {
    constructor(t){
        super(), this.notifications = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new za).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new za).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new za).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(za, t, e);
    }
    static $() {
        return [
            "SubscriptionNotificationAction|1 notifications #0*|2 request_context #1|3 send_to_interaction_listener 8?",
            Eu,
            No.bb
        ];
    }
}
class Wa extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wa, t, e);
    }
    static $() {
        return [
            "GoalContinuationAction"
        ];
    }
}
class Ya extends Fo {
    constructor(t){
        super(), this.injectionId = "", this.expectedRunId = "", this.payload = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ya).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ya).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ya).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ya, t, e);
    }
    static $() {
        return [
            "InjectContextAction|1 injection_id 9|2 expected_run_id 9|3 user_context #0 payload|4 system_context #1 payload",
            ja,
            Xa
        ];
    }
}
class ja extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ja).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ja).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ja).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ja, t, e);
    }
    static $() {
        return [
            "UserContextInjection|1 user_message #0|2 request_context #1",
            Eu,
            No.bb
        ];
    }
}
class Xa extends Fo {
    constructor(t){
        super(), this.producer = "", this.content = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xa).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xa).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xa).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xa, t, e);
    }
    static $() {
        return [
            "SystemContextInjection|1 producer 9|2 content 9"
        ];
    }
}
class Za extends Fo {
    constructor(t){
        super(), this.state = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Za).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Za).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Za).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Za, t, e);
    }
    static $() {
        return [
            "ContextInjectionState|1 queued #0 state|2 delivered #1 state|3 queued_for_next_turn #2 state|4 cancelled #3 state|5 rejected #4 state",
            tu,
            eu,
            ru,
            nu,
            su
        ];
    }
}
class tu extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tu, t, e);
    }
    static $() {
        return [
            "ContextInjectionQueued"
        ];
    }
}
class eu extends Fo {
    constructor(t){
        super(), this.step = 0, this.deliveryBatchId = "", this.deliveredAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new eu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new eu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new eu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(eu, t, e);
    }
    static $() {
        return [
            "ContextInjectionDelivered|1 step 5|2 delivery_batch_id 9|3 delivered_at_ms 3"
        ];
    }
}
class ru extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ru).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ru).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ru).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ru, t, e);
    }
    static $() {
        return [
            "ContextInjectionQueuedForNextTurn"
        ];
    }
}
class nu extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nu, t, e);
    }
    static $() {
        return [
            "ContextInjectionCancelled"
        ];
    }
}
class su extends Fo {
    constructor(t){
        super(), this.reason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new su).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new su).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new su).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(su, t, e);
    }
    static $() {
        return [
            "ContextInjectionRejected|1 reason 9"
        ];
    }
}
class iu extends Fo {
    constructor(t){
        super(), this.id = "", this.label = "", this.source = Vo.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new iu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new iu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new iu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(iu, t, e);
    }
    static $() {
        return [
            "SubmittedCustomMode|1 id 9|2 label 9|5 source #0|6 source_path 9?|7 source_hash 9?|10 managed_skill_id 9?|11 plugin_id 9?|12 plugin_snapshot_token 9?",
            Vo
        ];
    }
}
class ou extends Fo {
    constructor(t){
        super(), this.id = "", this.label = "", this.source = Vo.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ou).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ou).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ou).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ou, t, e);
    }
    static $() {
        return [
            "CustomModeDescriptor|1 id 9|2 label 9|3 description 9?|4 icon 9?|5 color 9?|6 source #0|7 source_path 9?|8 source_hash 9?|9 managed_skill_id 9?|10 plugin_id 9?|11 plugin_snapshot_token 9?",
            Vo
        ];
    }
}
class au extends Fo {
    constructor(t){
        super(), this.id = "", this.label = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new au).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new au).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new au).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(au, t, e);
    }
    static $() {
        return [
            "SubmittedExitedCustomMode|1 id 9|2 label 9"
        ];
    }
}
class uu extends Fo {
    constructor(t){
        super(), this.nextMode = Lo.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new uu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new uu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new uu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(uu, t, e);
    }
    static $() {
        return [
            "CustomModeExitIntent|1 next_mode #0|2 exited_mode #1",
            Lo,
            au
        ];
    }
}
class cu extends Fo {
    constructor(t){
        super(), this.intent = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cu, t, e);
    }
    static $() {
        return [
            "CustomModeIntent|1 enter #0 intent|2 exit #1 intent",
            iu,
            uu
        ];
    }
}
class lu extends Fo {
    constructor(t){
        super(), this.reason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lu, t, e);
    }
    static $() {
        return [
            "CancelAction|1 reason 9|3 interrupted_pending_tool_call_resolutions #0?",
            Ta
        ];
    }
}
class mu extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mu, t, e);
    }
    static $() {
        return [
            "ResumeAction|2 request_context #0",
            No.bb
        ];
    }
}
class du extends Fo {
    constructor(t){
        super(), this.originalToolCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new du).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new du).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new du).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(du, t, e);
    }
    static $() {
        return [
            "AsyncAskQuestionCompletionAction|1 original_tool_call_id 9|2 original_args #0|3 result #1|4 request_context #2",
            te.ju,
            te.tz,
            No.bb
        ];
    }
}
class fu extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fu, t, e);
    }
    static $() {
        return [
            "SummarizeAction"
        ];
    }
}
class pu extends Fo {
    constructor(t){
        super(), this.execId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pu, t, e);
    }
    static $() {
        return [
            "ShellCommandAction|1 shell_command #0|2 exec_id 9",
            qu
        ];
    }
}
class hu extends Fo {
    constructor(t){
        super(), this.isSpec = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hu, t, e);
    }
    static $() {
        return [
            "StartPlanAction|1 user_message #0|2 request_context #1|3 is_spec 8",
            Eu,
            No.bb
        ];
    }
}
class gu extends Fo {
    constructor(t){
        super(), this.executionMode = Lo.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gu, t, e);
    }
    static $() {
        return [
            "ExecutePlanAction|1 request_context #0|2 plan #1?|3 plan_file_uri 9?|4 plan_file_content 9?|5 execution_mode #2|6 kickoff_message_id 9?|7 plan_id 9?|8 plan_file_path 9?",
            No.bb,
            Ru,
            Lo
        ];
    }
}
class Au extends Fo {
    constructor(t){
        super(), this.interactionId = "", this.skippedQuestionIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Au).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Au).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Au).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Au, t, e);
    }
    static $() {
        return [
            "InteractionResponseMetadata|1 interaction_id 9|2 response #0?|3 skipped_question_ids 9*",
            Dc
        ];
    }
}
class _u extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _u).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _u).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _u).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_u, t, e);
    }
    static $() {
        return [
            "SubscriptionEventDisplay|1 display_label 9?|2 resource_url 9?|3 subscription_id 9?"
        ];
    }
}
class yu extends Fo {
    constructor(t){
        super(), this.userId = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yu, t, e);
    }
    static $() {
        return [
            "UserDisplayInfo|1 user_id 5|2 display_name 9?|3 email 9?|4 profile_picture_url 9?"
        ];
    }
}
class wu extends Fo {
    constructor(t){
        super(), this.planId = "", this.planTitle = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wu, t, e);
    }
    static $() {
        return [
            "ExecutePlanInfo|1 plan_id 9|2 plan_title 9"
        ];
    }
}
class Su extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Su).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Su).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Su).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Su, t, e);
    }
    static $() {
        return [
            "ProjectDetails|1 name 9?|2 subagent #0?|3 side_chat #1?|4 init_description 9?",
            Ju,
            Bu
        ];
    }
}
class Ju extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ju).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ju).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ju).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ju, t, e);
    }
    static $() {
        return [
            "ProjectSubagentDetails|2 store_dir 9?"
        ];
    }
}
class Bu extends Fo {
    constructor(t){
        super(), this.storeDir = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bu, t, e);
    }
    static $() {
        return [
            "ProjectSideChatDetails|1 store_dir 9"
        ];
    }
}
class Eu extends Fo {
    constructor(t){
        super(), this.text = "", this.messageId = "", this.mode = Lo.UNSPECIFIED, this.conversationStateBlobId = new Uint8Array(0), this.hookAdditionalContexts = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Eu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Eu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Eu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Eu, t, e);
    }
    static $() {
        return [
            "UserMessage|1 text 9|2 message_id 9|3 selected_context #0?|4 mode #1|5 is_simulated_msg 8?|6 best_of_n_group_id 9?|7 try_use_best_of_n_promotion 8?|8 rich_text 9?|9 simulated_msg_reason #2?|10 conversation_state_blob_id 12|11 subagent_system_reminder 9?|13 triggering_user_info #3?|14 execute_plan_info #4?|15 simulated_message_metadata #5?|16 prompt_reference_id 9?|17 thread_id 9?|18 text_blob_id 12?|19 rich_text_blob_id 12?|21 hook_additional_contexts #6*|22 custom_mode_intent #7?|23 project_details #8?|24 turn_steer 8?|25 started_at_ms 4?|26 completed_at_ms 4?|27 sent_by_agent_id 9?|28 sent_by_voice_call 8?|29 sender #9?|30 forked_context 9?",
            Do.xv,
            Lo,
            zo,
            Ia,
            wu,
            Iu,
            xo.C,
            cu,
            Su,
            Cu
        ];
    }
}
class Iu extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Iu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Iu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Iu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Iu, t, e);
    }
    static $() {
        return [
            "UserMessage.SimulatedMessageMetadata|1 title 9?|2 task_id 9?|3 fsd_finding_action 9?|4 url 9?|5 subscription_source #0?|6 subscription_event_display #1?|7 interaction_response #2?",
            Wo,
            _u,
            Au
        ];
    }
}
class Cu extends Fo {
    constructor(t){
        super(), this.kind = bu.UNSPECIFIED, this.id = "", this.displayName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cu, t, e);
    }
    static $() {
        return [
            "MessageSender|1 kind #0|2 id 9|3 display_name 9",
            bu
        ];
    }
}
var bu = (0, o.QT)(n.proto3, Oo, "MessageSender.Kind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "AGENT"
    ],
    [
        2,
        "VOICE_CALL"
    ],
    [
        3,
        "MAIN_BOT"
    ],
    [
        4,
        "PROJECT"
    ]
], 1);
class ku extends Fo {
    constructor(t){
        super(), this.text = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ku).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ku).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ku).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ku, t, e);
    }
    static $() {
        return [
            "AssistantMessage|1 text 9|2 started_at_ms 4?|3 completed_at_ms 4?"
        ];
    }
}
class vu extends Fo {
    constructor(t){
        super(), this.text = "", this.durationMs = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vu, t, e);
    }
    static $() {
        return [
            "ThinkingMessage|1 text 9|2 duration_ms 13|3 started_at_ms 4?|4 completed_at_ms 4?"
        ];
    }
}
class qu extends Fo {
    constructor(t){
        super(), this.command = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qu, t, e);
    }
    static $() {
        return [
            "ShellCommand|1 command 9"
        ];
    }
}
class Ru extends Fo {
    constructor(t){
        super(), this.plan = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ru).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ru).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ru).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ru, t, e);
    }
    static $() {
        return [
            "ConversationPlan|1 plan 9"
        ];
    }
}
class Pu extends Fo {
    constructor(t){
        super(), this.id = "", this.path = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pu, t, e);
    }
    static $() {
        return [
            "PlanRegistryEntry|1 id 9|2 path 9"
        ];
    }
}
class Tu extends Fo {
    constructor(t){
        super(), this.conversationId = "", this.goalId = "", this.objective = "", this.status = Ai.UNSPECIFIED, this.idleContinuationsWithoutToolCalls = 0, this.continuationCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tu, t, e);
    }
    static $() {
        return [
            "GoalState|1 conversation_id 9|2 goal_id 9|3 objective 9|4 status #0|5 idle_continuations_without_tool_calls 13|6 active_duration_ms 4?|7 last_accrued_at_ms 4?|8 continuation_count 13|9 agent_session_id 9?",
            Ai
        ];
    }
}
class xu extends Fo {
    constructor(t){
        super(), this.id = "", this.label = "", this.estimatedTokens = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xu, t, e);
    }
    static $() {
        return [
            "PromptTokenBreakdownCategory|1 id 9|2 label 9|3 estimated_tokens 13|4 character_count 13?"
        ];
    }
}
class Nu extends Fo {
    constructor(t){
        super(), this.totalUsedTokens = 0, this.maxTokens = 0, this.categories = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nu, t, e);
    }
    static $() {
        return [
            "PromptTokenBreakdownSnapshot|1 total_used_tokens 13|2 max_tokens 13|3 categories #0*",
            xu
        ];
    }
}
class Du extends Fo {
    constructor(t){
        super(), this.sourceType = "", this.messageIndex = 0, this.contentPath = "", this.startOffset = 0, this.endOffset = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Du).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Du).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Du).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Du, t, e);
    }
    static $() {
        return [
            "PromptContextSourceRef|1 source_type 9|3 message_index 13|4 content_path 9|5 start_offset 13|6 end_offset 13"
        ];
    }
}
class Uu extends Fo {
    constructor(t){
        super(), this.id = "", this.kind = "", this.label = "", this.categoryId = "", this.estimatedTokens = 0, this.characterCount = 0, this.contentAvailable = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Uu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Uu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Uu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Uu, t, e);
    }
    static $() {
        return [
            "PromptContextNode|1 id 9|2 parent_id 9?|3 kind 9|4 label 9|5 category_id 9|6 estimated_tokens 13|7 character_count 13|9 content_available 8|11 source #0?|12 inline_content 9?",
            Du
        ];
    }
}
class Qu extends Fo {
    constructor(t){
        super(), this.schemaVersion = 0, this.nodes = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qu, t, e);
    }
    static $() {
        return [
            "PromptContextUsageTree|1 schema_version 13|2 nodes #0*",
            Uu
        ];
    }
}
class Mu extends Fo {
    constructor(t){
        super(), this.usedTokens = 0, this.maxTokens = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mu, t, e);
    }
    static $() {
        return [
            "ConversationTokenDetails|1 used_tokens 13|2 max_tokens 13|3 breakdown #0?|4 prompt_context_usage_tree #1?",
            Nu,
            Qu
        ];
    }
}
class Ou extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ou).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ou).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ou).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ou, t, e);
    }
    static $() {
        return [
            "FileState|1 content 9?|2 initial_content 9?"
        ];
    }
}
class Fu extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Fu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Fu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Fu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Fu, t, e);
    }
    static $() {
        return [
            "FileStateStructure|1 content 12?|2 initial_content 12?"
        ];
    }
}
class Lu extends Fo {
    constructor(t){
        super(), this.durationMs = n.protoInt64.zero, this.timestampMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Lu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Lu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Lu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Lu, t, e);
    }
    static $() {
        return [
            "StepTiming|1 duration_ms 4|2 timestamp_ms 4"
        ];
    }
}
class $u extends Fo {
    constructor(t){
        super(), this.completedTurnCountCapped = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $u).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $u).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $u).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($u, t, e);
    }
    static $() {
        return [
            "TurnTelemetryState|1 completed_turn_count_capped 13|2 last_completed_turn_timestamp_ms 4?"
        ];
    }
}
class Gu extends Fo {
    constructor(t){
        super(), this.step = "", this.messageIndex = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gu, t, e);
    }
    static $() {
        return [
            "CommunicateUpdateHistoryEntry|1 step 9|3 message_index 13"
        ];
    }
}
class Hu extends Fo {
    constructor(t){
        super(), this.history = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Hu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Hu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Hu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Hu, t, e);
    }
    static $() {
        return [
            "CommunicateUpdateTurnState|1 history #0*|2 final_summary 9?|3 completed_subtitle 9?",
            Gu
        ];
    }
}
class Ku extends Fo {
    constructor(t){
        super(), this.createdTimestampMs = n.protoInt64.zero, this.lastUsedTimestampMs = n.protoInt64.zero, this.environment = s.dU.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ku).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ku).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ku).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ku, t, e);
    }
    static $() {
        return [
            "SubagentPersistedState|1 conversation_state #0|2 created_timestamp_ms 4|3 last_used_timestamp_ms 4|4 subagent_type #1|5 model_id 9?|6 environment #2|7 cloud_subagent #3?|8 first_class_bc_id 9?|9 cloud_requested_environment_build_id 9?|10 machine #4?",
            Wu,
            s._L,
            s.dU,
            Vu,
            ta
        ];
    }
}
class Vu extends Fo {
    constructor(t){
        super(), this.bcId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vu, t, e);
    }
    static $() {
        return [
            "CloudSubagentReference|1 bc_id 9|2 transcript_path 9?"
        ];
    }
}
class zu extends Fo {
    constructor(t){
        super(), this.repoPath = "", this.branchName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zu, t, e);
    }
    static $() {
        return [
            "TrackedGitRepo|1 repo_path 9|2 branch_name 9"
        ];
    }
}
class Wu extends Fo {
    constructor(t){
        super(), this.rootPromptMessagesJson = [], this.turns = [], this.todos = [], this.pendingToolCalls = [], this.previousWorkspaceUris = [], this.fileStates = {}, this.fileStatesV2 = {}, this.summaryArchives = [], this.turnTimings = [], this.subagentStates = {}, this.selfSummaryCount = 0, this.readPaths = [], this.plans = {}, this.trackedGitRepoBranches = [], this.communicateUpdateHistory = [], this.subagentThreads = {}, this.communicateUpdateStatesByParentToolCallId = {}, this.subagentRunsByParentToolCallId = {}, this.subagentStateRefs = {}, this.completedAskQuestionToolCallIds = [], this.durableSkillBlocks = [], this.recentUserMessageIds = [], this.mentionedAgentIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wu, t, e);
    }
    static $() {
        return [
            "ConversationStateStructure|1 root_prompt_messages_json 12*|8 turns 12*|3 todos 12*|4 pending_tool_calls 9*|5 token_details #0|6 summary 12?|7 plan 12?|9 previous_workspace_uris 9*|10 mode #1?|11 summary_archive 12?|12 file_states 9,12|15 file_states_v2 9,#2|13 summary_archives 12*|14 turn_timings #3*|16 subagent_states 9,#4|17 self_summary_count 13|18 read_paths 9*|19 active_branch_name 9?|20 plans 9,#5|21 tracked_git_repo_branches #6*|22 agent_type 9?|23 communicate_update_history #7*|24 subagent_threads 9,9|25 communicate_update_final_summary 9?|28 communicate_update_completed_subtitle 9?|29 communicate_update_states_by_parent_tool_call_id 9,#8|30 subagent_runs_by_parent_tool_call_id 9,#9|26 conversation_started_timestamp_ms 4?|27 conversation_started_time_zone 9?|31 subagent_state_refs 9,12|32 goal_state #10?|33 is_root_project_conversation 8?|34 completed_ask_question_tool_call_ids 9*|35 durable_skill_blocks 9*|36 durable_custom_mode_id 9?|37 message_count_at_last_compaction 13?|38 recent_user_message_ids 9*|39 recent_user_message_ids_older_turn_count 13?|40 turn_telemetry #11?|42 mentioned_agent_ids 9*",
            Mu,
            Lo,
            Fu,
            Lu,
            Ku,
            Pu,
            zu,
            Gu,
            Hu,
            ka,
            Tu,
            $u
        ];
    }
}
class Yu extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yu, t, e);
    }
    static $() {
        return [
            "ThinkingDetails"
        ];
    }
}
class ju extends Fo {
    constructor(t){
        super(), this.bearerToken = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ju).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ju).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ju).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ju, t, e);
    }
    static $() {
        return [
            "ClientLlmGatewayCredential|1 bearer_token 9"
        ];
    }
}
class Xu extends Fo {
    constructor(t){
        super(), this.modelId = "", this.displayModelId = "", this.displayName = "", this.displayNameShort = "", this.aliases = [], this.credentials = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xu, t, e);
    }
    static $() {
        return [
            "ModelDetails|1 model_id 9|3 display_model_id 9|4 display_name 9|5 display_name_short 9|6 aliases 9*|2 thinking_details #0?|7 max_mode 8?|8 api_key_credentials #1 credentials|9 azure_credentials #2 credentials|10 bedrock_credentials #3 credentials",
            Yu,
            Uo.G0,
            Uo.ih,
            Uo.R4
        ];
    }
}
class Zu extends Fo {
    constructor(t){
        super(), this.subagentType = "", this.selection = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Zu).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Zu).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Zu).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Zu, t, e);
    }
    static $() {
        return [
            "SubagentModelOverride|1 subagent_type 9|2 model #0 selection|3 inherit 8 selection|4 disabled 8 selection",
            Uo.G4
        ];
    }
}
class tc extends Fo {
    constructor(t){
        super(), this.id = new Uint8Array(0), this.value = new Uint8Array(0), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tc, t, e);
    }
    static $() {
        return [
            "PreFetchedBlob|1 id 12|2 value 12"
        ];
    }
}
class ec extends Fo {
    constructor(t){
        super(), this.selectedSubagentModels = [], this.selectedSubagentModelDetails = [], this.preFetchedBlobs = [], this.subagentModelOverrides = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ec).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ec).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ec).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ec, t, e);
    }
    static $() {
        return [
            "AgentRunRequest|1 conversation_state #0|2 action #1|3 model_details #2|9 requested_model #3?|4 mcp_tools #4|5 conversation_id 9?|6 mcp_file_system_options #5?|7 skill_options #6?|8 custom_system_prompt 9?|10 suggest_next_prompt 8?|11 subagent_type_name 9?|12 exclude_workspace_context 8?|13 harness 9?|14 selected_subagent_models #3*|15 selected_subagent_model_details #2*|16 conversation_group_id 9?|17 pre_fetched_blobs #7*|18 dev_raw_model_slug 9?|19 client_supports_inline_images 8?|20 subagent_model_overrides #8*|21 can_create_cloud_subagents 8?|22 suppress_subagent_progress_update_tool 8?|23 client_supports_send_to_user 8?|24 computer_use_coordinate_mode 9?|25 run_id 9?|26 agent_session_id 9?|28 client_supports_routed_model_update 8?|29 system_prompt_spec #9?|30 client_llm_gateway_credential #10?|31 client_supports_preview_card 8?|32 started_as_new_project 8?|33 first_project_onboarding 8?|34 next_interaction_query_id 13?",
            Wu,
            Ea,
            Xu,
            Uo.G4,
            Qo.Or,
            Qo.Is,
            No.uw,
            tc,
            Zu,
            Mo.$,
            ju
        ];
    }
}
class rc extends Fo {
    constructor(t){
        super(), this.text = "", this.isServerNotice = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rc, t, e);
    }
    static $() {
        return [
            "TextDeltaUpdate|1 text 9|2 is_server_notice 8"
        ];
    }
}
class nc extends Fo {
    constructor(t){
        super(), this.displayName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nc, t, e);
    }
    static $() {
        return [
            "RoutedModelUpdate|1 display_name 9"
        ];
    }
}
class sc extends Fo {
    constructor(t){
        super(), this.callId = "", this.modelCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new sc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new sc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new sc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(sc, t, e);
    }
    static $() {
        return [
            "ToolCallStartedUpdate|1 call_id 9|2 tool_call #0|3 model_call_id 9",
            ga
        ];
    }
}
class ic extends Fo {
    constructor(t){
        super(), this.callId = "", this.modelCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ic).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ic).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ic).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ic, t, e);
    }
    static $() {
        return [
            "ToolCallCompletedUpdate|1 call_id 9|2 tool_call #0|3 model_call_id 9",
            ga
        ];
    }
}
class oc extends Fo {
    constructor(t){
        super(), this.callId = "", this.modelCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new oc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new oc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new oc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(oc, t, e);
    }
    static $() {
        return [
            "ToolCallDeltaUpdate|1 call_id 9|2 tool_call_delta #0|3 model_call_id 9",
            Ja
        ];
    }
}
class ac extends Fo {
    constructor(t){
        super(), this.callId = "", this.argsTextDelta = "", this.modelCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ac).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ac).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ac).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ac, t, e);
    }
    static $() {
        return [
            "PartialToolCallUpdate|1 call_id 9|2 tool_call #0|3 args_text_delta 9|4 model_call_id 9",
            ga
        ];
    }
}
class uc extends Fo {
    constructor(t){
        super(), this.text = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new uc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new uc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new uc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(uc, t, e);
    }
    static $() {
        return [
            "ThinkingDeltaUpdate|1 text 9|2 thinking_style #0?",
            Yo
        ];
    }
}
class cc extends Fo {
    constructor(t){
        super(), this.thinkingDurationMs = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new cc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new cc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new cc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(cc, t, e);
    }
    static $() {
        return [
            "ThinkingCompletedUpdate|1 thinking_duration_ms 5"
        ];
    }
}
class lc extends Fo {
    constructor(t){
        super(), this.tokens = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lc, t, e);
    }
    static $() {
        return [
            "TokenDeltaUpdate|1 tokens 5"
        ];
    }
}
class mc extends Fo {
    constructor(t){
        super(), this.summary = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mc, t, e);
    }
    static $() {
        return [
            "SummaryUpdate|1 summary 9"
        ];
    }
}
class dc extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dc, t, e);
    }
    static $() {
        return [
            "SummaryStartedUpdate"
        ];
    }
}
class fc extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new fc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new fc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new fc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(fc, t, e);
    }
    static $() {
        return [
            "HeartbeatUpdate"
        ];
    }
}
class pc extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pc, t, e);
    }
    static $() {
        return [
            "SummaryCompletedUpdate|1 hook_message 9?|2 failed 8?"
        ];
    }
}
class hc extends Fo {
    constructor(t){
        super(), this.event = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new hc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new hc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new hc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(hc, t, e);
    }
    static $() {
        return [
            "ShellOutputDeltaUpdate|1 stdout #0 event|2 stderr #1 event|3 exit #2 event|4 start #3 event",
            i.o0,
            i.Db,
            i.vb,
            i.tD
        ];
    }
}
class gc extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gc, t, e);
    }
    static $() {
        return [
            "TurnEndedUpdate|1 input_tokens 3?|2 output_tokens 3?|3 cache_read_tokens 3?|4 cache_write_tokens 3?|5 reasoning_tokens 3?|6 ended_at_ms 4?"
        ];
    }
}
class Ac extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ac).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ac).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ac).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ac, t, e);
    }
    static $() {
        return [
            "UserMessageAppendedUpdate|1 user_message #0",
            Eu
        ];
    }
}
class _c extends Fo {
    constructor(t){
        super(), this.stepId = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _c).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _c).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _c).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_c, t, e);
    }
    static $() {
        return [
            "StepStartedUpdate|1 step_id 4"
        ];
    }
}
class yc extends Fo {
    constructor(t){
        super(), this.callCount = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yc, t, e);
    }
    static $() {
        return [
            "ToolRequestsListedUpdate|1 call_count 13"
        ];
    }
}
class wc extends Fo {
    constructor(t){
        super(), this.stepId = n.protoInt64.zero, this.stepDurationMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wc, t, e);
    }
    static $() {
        return [
            "StepCompletedUpdate|1 step_id 4|2 step_duration_ms 3"
        ];
    }
}
class Sc extends Fo {
    constructor(t){
        super(), this.suggestion = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Sc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Sc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Sc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Sc, t, e);
    }
    static $() {
        return [
            "PromptSuggestionUpdate|1 suggestion 9"
        ];
    }
}
class Jc extends Fo {
    constructor(t){
        super(), this.path = "", this.branchName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jc, t, e);
    }
    static $() {
        return [
            "ActiveBranchChange|1 path 9|2 branch_name 9"
        ];
    }
}
class Bc extends Fo {
    constructor(t){
        super(), this.id = "", this.label = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bc, t, e);
    }
    static $() {
        return [
            "FeedbackRequestCategory|1 id 9|2 label 9"
        ];
    }
}
class Ec extends Fo {
    constructor(t){
        super(), this.id = "", this.prompt = "", this.categories = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ec).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ec).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ec).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ec, t, e);
    }
    static $() {
        return [
            "FeedbackRequestCategoryGroup|1 id 9|2 prompt 9|3 categories #0*",
            Bc
        ];
    }
}
class Ic extends Fo {
    constructor(t){
        super(), this.requestId = "", this.categories = [], this.categoryGroups = [], this.showFormImmediately = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ic).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ic).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ic).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ic, t, e);
    }
    static $() {
        return [
            "FeedbackRequestUpdate|1 request_id 9|2 canonical_model_name 9?|3 categories #0*|4 category_groups #1*|5 show_form_immediately 8|6 title 9?|7 negative_title 9?|8 comment_placeholder 9?",
            Bc,
            Ec
        ];
    }
}
class Cc extends Fo {
    constructor(t){
        super(), this.displayOrder = jo.UNSPECIFIED, this.parentInvocationId = "", this.alternateInvocationId = "", this.parentResponse = "", this.comparisonConfigId = "", this.alternateModelId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Cc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Cc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Cc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Cc, t, e);
    }
    static $() {
        return [
            "ResponseComparisonStarted|1 display_order #0|2 parent_invocation_id 9|3 alternate_invocation_id 9|4 parent_response 9|5 comparison_config_id 9|6 alternate_model_id 9",
            jo
        ];
    }
}
class bc extends Fo {
    constructor(t){
        super(), this.text = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bc, t, e);
    }
    static $() {
        return [
            "ResponseComparisonTextDelta|1 text 9"
        ];
    }
}
class kc extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new kc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new kc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new kc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(kc, t, e);
    }
    static $() {
        return [
            "ResponseComparisonCompleted"
        ];
    }
}
class vc extends Fo {
    constructor(t){
        super(), this.reason = Xo.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vc, t, e);
    }
    static $() {
        return [
            "ResponseComparisonSkipped|1 reason #0",
            Xo
        ];
    }
}
class qc extends Fo {
    constructor(t){
        super(), this.comparisonId = "", this.event = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qc, t, e);
    }
    static $() {
        return [
            "ResponseComparisonUpdate|1 comparison_id 9|2 started #0 event|3 text_delta #1 event|4 completed #2 event|5 skipped #3 event",
            Cc,
            bc,
            kc,
            vc
        ];
    }
}
class Rc extends Fo {
    constructor(t){
        super(), this.message = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rc, t, e);
    }
    static $() {
        return [
            "InteractionUpdate|1 text_delta #0 message|7 partial_tool_call #1 message|15 tool_call_delta #2 message|2 tool_call_started #3 message|3 tool_call_completed #4 message|4 thinking_delta #5 message|5 thinking_completed #6 message|6 user_message_appended #7 message|8 token_delta #8 message|9 summary #9 message|10 summary_started #10 message|11 summary_completed #11 message|12 shell_output_delta #12 message|13 heartbeat #13 message|14 turn_ended #14 message|16 step_started #15 message|17 step_completed #16 message|27 tool_requests_listed #17 message|18 prompt_suggestion #18 message|19 post_request_prompt #19 message|20 active_branch_change #20 message|21 feedback_request #21 message|22 response_comparison #22 message|23 context_injection_state #23 message|24 routed_model #24 message|26 grok_bot_nudge #25 message|25 message_started_at_ms 4?",
            rc,
            ac,
            oc,
            sc,
            ic,
            uc,
            cc,
            Ac,
            lc,
            mc,
            dc,
            pc,
            hc,
            fc,
            gc,
            _c,
            wc,
            yc,
            Sc,
            Tc,
            Jc,
            Ic,
            qc,
            Pc,
            nc,
            xc
        ];
    }
}
class Pc extends Fo {
    constructor(t){
        super(), this.injectionId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pc, t, e);
    }
    static $() {
        return [
            "ContextInjectionStateUpdate|1 injection_id 9|2 state #0",
            Za
        ];
    }
}
class Tc extends Fo {
    constructor(t){
        super(), this.title = "", this.message = "", this.buttonLabel = "", this.buttonUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tc, t, e);
    }
    static $() {
        return [
            "PostRequestPromptUpdate|1 title 9|2 message 9|3 button_label 9|4 button_url 9"
        ];
    }
}
class xc extends Fo {
    constructor(t){
        super(), this.job = "", this.description = "", this.showNumber = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xc, t, e);
    }
    static $() {
        return [
            "GrokBotNudgeUpdate|1 job 9|2 description 9|3 show_number 13"
        ];
    }
}
class Nc extends Fo {
    constructor(t){
        super(), this.id = 0, this.query = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nc, t, e);
    }
    static $() {
        return [
            "InteractionQuery|1 id 13|2 web_search_request_query #0 query|3 ask_question_interaction_query #1 query|4 switch_mode_request_query #2 query|7 create_plan_request_query #3 query|8 setup_vm_environment_args #4 query|9 web_fetch_request_query #5 query|10 pr_management_request_query #6 query|11 mcp_auth_request_query #7 query|12 generate_image_request_query #8 query|13 replace_env_args #9 query|14 connect_scm_request_query #10 query",
            Kt,
            Uc,
            me,
            Dt,
            qe,
            Ze,
            Ir,
            Tr,
            he.Uj,
            bn,
            ai
        ];
    }
}
class Dc extends Fo {
    constructor(t){
        super(), this.id = 0, this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dc, t, e);
    }
    static $() {
        return [
            "InteractionResponse|1 id 13|2 web_search_request_response #0 result|3 ask_question_interaction_response #1 result|4 switch_mode_request_response #2 result|7 create_plan_request_response #3 result|8 setup_vm_environment_result #4 result|9 web_fetch_request_response #5 result|10 pr_management_result #6 result|11 mcp_auth_request_response #7 result|12 generate_image_request_response #8 result|13 replace_env_result #9 result|14 connect_scm_request_response #10 result",
            Vt,
            Qc,
            de,
            Ut,
            Re,
            tr,
            _r,
            xr,
            he.vW,
            qn,
            ui
        ];
    }
}
class Uc extends Fo {
    constructor(t){
        super(), this.toolCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Uc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Uc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Uc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Uc, t, e);
    }
    static $() {
        return [
            "AskQuestionInteractionQuery|1 args #0|2 tool_call_id 9",
            te.ju
        ];
    }
}
class Qc extends Fo {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qc).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qc).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qc).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qc, t, e);
    }
    static $() {
        return [
            "AskQuestionInteractionResponse|1 result #0",
            te.tz
        ];
    }
}
