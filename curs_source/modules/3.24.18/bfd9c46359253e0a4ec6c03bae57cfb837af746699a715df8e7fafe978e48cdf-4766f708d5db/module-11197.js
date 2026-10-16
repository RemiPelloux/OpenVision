"use strict";
require.d(exports, {
    DI: ()=>N,
    Dh: ()=>$,
    E_: ()=>u,
    HQ: ()=>E,
    Is: ()=>q,
    JL: ()=>f,
    Jx: ()=>L,
    KZ: ()=>U,
    Ke: ()=>m,
    Km: ()=>I,
    Kp: ()=>v,
    Nh: ()=>b,
    QW: ()=>_,
    T2: ()=>B,
    WV: ()=>h,
    X2: ()=>O,
    XE: ()=>C,
    ZD: ()=>F,
    _W: ()=>T,
    _Z: ()=>w,
    do: ()=>y,
    ew: ()=>l,
    iz: ()=>p,
    kP: ()=>J,
    kj: ()=>M,
    n: ()=>d,
    ov: ()=>j,
    pv: ()=>P,
    tX: ()=>k,
    w2: ()=>D,
    xo: ()=>x,
    zN: ()=>g
});
var n = require("./module-36038.js"), s = require("./module-64500.js"), o = require("./module-34175.js"), i = require("./module-8592.js");
const a = "agent.v1.";
class c extends i.HL {
    static get runtime() {
        return (0, i.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return a;
    }
}
var l = (0, i.QT)(n.proto3, a, "McpRefreshPolicy", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FORCE_IF_MISSING"
    ],
    [
        2,
        "FORCE"
    ]
], 1);
class u extends c {
    constructor(e){
        super(), this.name = "", this.args = {}, this.toolCallId = "", this.providerIdentifier = "", this.toolName = "", this.smartModeApprovalOnly = !1, this.skipApproval = !1, this.serverIdentifier = "", this.symbolicPathArguments = [], n.proto3.util.initPartial(e, this);
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
            "McpArgs|1 name 9|2 args 9,#0|3 tool_call_id 9|4 provider_identifier 9|5 tool_name 9|6 smart_mode_approval #1?|7 smart_mode_approval_only 8|8 skip_approval 8|9 server_identifier 9|10 symbolic_path_arguments #2*",
            n.Value,
            s.UC,
            d
        ];
    }
}
class d extends c {
    constructor(e){
        super(), this.path = "", this.sha256 = "", this.sizeBytes = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
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
            "McpSymbolicPathArgument|1 path 9|2 sha256 9|3 size_bytes 3"
        ];
    }
}
class p extends c {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "McpResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 permission_denied #3 result|5 tool_not_found #4 result|6 server_not_found #5 result|7 approved #6 result",
            _,
            b,
            x,
            E,
            h,
            f,
            m
        ];
    }
}
class m extends c {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "McpApproved"
        ];
    }
}
class h extends c {
    constructor(e){
        super(), this.name = "", this.availableTools = [], n.proto3.util.initPartial(e, this);
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
            "McpToolNotFound|1 name 9|2 available_tools 9*|3 recovery #0?",
            S
        ];
    }
}
class f extends c {
    constructor(e){
        super(), this.name = "", this.availableServers = [], n.proto3.util.initPartial(e, this);
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
            "McpServerNotFound|1 name 9|2 available_servers 9*"
        ];
    }
}
class g extends c {
    constructor(e){
        super(), this.text = "", n.proto3.util.initPartial(e, this);
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
            "McpTextContent|1 text 9|2 output_location #0?",
            s.pV
        ];
    }
}
class y extends c {
    constructor(e){
        super(), this.data = new Uint8Array(0), this.mimeType = "", n.proto3.util.initPartial(e, this);
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
            "McpImageContent|1 data 12|2 mime_type 9"
        ];
    }
}
class w extends c {
    constructor(e){
        super(), this.content = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "McpToolResultContentItem|1 text #0 content|2 image #1 content",
            g,
            y
        ];
    }
}
class v extends c {
    constructor(e){
        super(), this.body = "", n.proto3.util.initPartial(e, this);
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
            "SystemReminder|1 body 9"
        ];
    }
}
class _ extends c {
    constructor(e){
        super(), this.content = [], this.isError = !1, this.systemReminders = [], n.proto3.util.initPartial(e, this);
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
            "McpSuccess|1 content #0*|2 is_error 8|3 structured_content #1|4 system_reminders #2*",
            w,
            n.Struct,
            v
        ];
    }
}
class b extends c {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
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
            "McpError|1 error 9|2 needs_auth 8?|3 recovery #0?|4 http_status 5?",
            S
        ];
    }
}
class S extends c {
    constructor(e){
        super(), this.outcome = k.UNSPECIFIED, this.availableTools = [], n.proto3.util.initPartial(e, this);
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
            "McpRecovery|1 outcome #0|2 fresh_input_schema_json 9?|3 available_tools 9*",
            k
        ];
    }
}
var k = (0, i.QT)(n.proto3, a, "McpRecovery.Outcome", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CHANGED"
    ],
    [
        2,
        "REMOVED"
    ],
    [
        3,
        "UNCHANGED"
    ],
    [
        4,
        "REFRESH_FAILED"
    ]
], 1);
class x extends c {
    constructor(e){
        super(), this.reason = "", this.isReadonly = !1, n.proto3.util.initPartial(e, this);
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
            "McpRejected|1 reason 9|2 is_readonly 8"
        ];
    }
}
class E extends c {
    constructor(e){
        super(), this.error = "", this.isReadonly = !1, n.proto3.util.initPartial(e, this);
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
            "McpPermissionDenied|1 error 9|2 is_readonly 8"
        ];
    }
}
class I extends c {
    constructor(e){
        super(), this.serverIdentifiers = [], this.kickOnly = !1, n.proto3.util.initPartial(e, this);
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
            "McpStateExecArgs|1 server_identifiers 9*|2 kick_only 8|3 refresh_policy #0?",
            l
        ];
    }
}
class T extends c {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "McpStateExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result",
            P,
            A,
            R
        ];
    }
}
class C extends c {
    constructor(e){
        super(), this.serverName = "", this.serverIdentifier = "", this.tools = [], this.instructions = [], n.proto3.util.initPartial(e, this);
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
            "McpStateServer|1 server_name 9|2 server_identifier 9|3 plugin 9?|4 marketplace 9?|5 tools #0*|6 instructions #1*|7 status 9?|8 error_message 9?",
            o.gd,
            o.I0
        ];
    }
}
class P extends c {
    constructor(e){
        super(), this.servers = [], n.proto3.util.initPartial(e, this);
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
            "McpStateSuccess|1 servers #0*",
            C
        ];
    }
}
class A extends c {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
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
            "McpStateError|1 error 9"
        ];
    }
}
class R extends c {
    constructor(e){
        super(), this.reason = "", n.proto3.util.initPartial(e, this);
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
            "McpStateRejected|1 reason 9"
        ];
    }
}
class M extends c {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ListMcpResourcesExecArgs|1 server 9?"
        ];
    }
}
class J extends c {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "ListMcpResourcesExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result",
            B,
            D,
            q
        ];
    }
}
class O extends c {
    constructor(e){
        super(), this.uri = "", this.server = "", this.annotations = {}, n.proto3.util.initPartial(e, this);
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
            "ListMcpResourcesExecResult.McpResource|1 uri 9|2 name 9?|3 description 9?|4 mime_type 9?|5 server 9|6 annotations 9,9"
        ];
    }
}
class B extends c {
    constructor(e){
        super(), this.resources = [], n.proto3.util.initPartial(e, this);
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
            "ListMcpResourcesSuccess|1 resources #0*",
            O
        ];
    }
}
class D extends c {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
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
            "ListMcpResourcesError|1 error 9"
        ];
    }
}
class q extends c {
    constructor(e){
        super(), this.reason = "", n.proto3.util.initPartial(e, this);
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
            "ListMcpResourcesRejected|1 reason 9"
        ];
    }
}
class N extends c {
    constructor(e){
        super(), this.server = "", this.uri = "", this.toolCallId = "", n.proto3.util.initPartial(e, this);
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
            "ReadMcpResourceExecArgs|1 server 9|2 uri 9|3 download_path 9?|4 tool_call_id 9|5 smart_mode_approval #0?",
            s.UC
        ];
    }
}
class F extends c {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "ReadMcpResourceExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 not_found #3 result",
            U,
            L,
            $,
            j
        ];
    }
}
class U extends c {
    constructor(e){
        super(), this.uri = "", this.content = {
            case: void 0
        }, this.annotations = {}, n.proto3.util.initPartial(e, this);
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
            "ReadMcpResourceSuccess|1 uri 9|2 name 9?|3 description 9?|4 mime_type 9?|5 text 9 content|6 blob 12 content|7 annotations 9,9|8 download_path 9?|9 output_location #0?|10 meta_json 9?",
            s.pV
        ];
    }
}
class L extends c {
    constructor(e){
        super(), this.uri = "", this.error = "", n.proto3.util.initPartial(e, this);
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
            "ReadMcpResourceError|1 uri 9|2 error 9"
        ];
    }
}
class $ extends c {
    constructor(e){
        super(), this.uri = "", this.reason = "", n.proto3.util.initPartial(e, this);
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
            "ReadMcpResourceRejected|1 uri 9|2 reason 9"
        ];
    }
}
class j extends c {
    constructor(e){
        super(), this.uri = "", n.proto3.util.initPartial(e, this);
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
            "ReadMcpResourceNotFound|1 uri 9"
        ];
    }
}
