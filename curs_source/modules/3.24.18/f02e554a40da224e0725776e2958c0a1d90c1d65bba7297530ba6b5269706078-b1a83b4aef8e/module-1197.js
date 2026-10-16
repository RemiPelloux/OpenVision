"use strict";
require.d(exports, {
    DI: ()=>Q,
    E_: ()=>l,
    HQ: ()=>I,
    Km: ()=>C,
    Kp: ()=>y,
    QW: ()=>w,
    ZD: ()=>M,
    _W: ()=>b,
    iz: ()=>d,
    kP: ()=>T,
    kj: ()=>P,
    xo: ()=>E
});
var n = require("./module-6038.js"), s = require("./module-4500.js"), i = require("./module-4175.js"), o = require("./module-8592.js");
const a = "agent.v1.";
class u extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return a;
    }
}
var c = (0, o.QT)(n.proto3, a, "McpRefreshPolicy", [
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
class l extends u {
    constructor(t){
        super(), this.name = "", this.args = {}, this.toolCallId = "", this.providerIdentifier = "", this.toolName = "", this.smartModeApprovalOnly = !1, this.skipApproval = !1, this.serverIdentifier = "", this.symbolicPathArguments = [], n.proto3.util.initPartial(t, this);
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
            "McpArgs|1 name 9|2 args 9,#0|3 tool_call_id 9|4 provider_identifier 9|5 tool_name 9|6 smart_mode_approval #1?|7 smart_mode_approval_only 8|8 skip_approval 8|9 server_identifier 9|10 symbolic_path_arguments #2*",
            n.Value,
            s.UC,
            m
        ];
    }
}
class m extends u {
    constructor(t){
        super(), this.path = "", this.sha256 = "", this.sizeBytes = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
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
            "McpSymbolicPathArgument|1 path 9|2 sha256 9|3 size_bytes 3"
        ];
    }
}
class d extends u {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "McpResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 permission_denied #3 result|5 tool_not_found #4 result|6 server_not_found #5 result|7 approved #6 result",
            w,
            S,
            E,
            I,
            p,
            h,
            f
        ];
    }
}
class f extends u {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "McpApproved"
        ];
    }
}
class p extends u {
    constructor(t){
        super(), this.name = "", this.availableTools = [], n.proto3.util.initPartial(t, this);
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
            "McpToolNotFound|1 name 9|2 available_tools 9*|3 recovery #0?",
            J
        ];
    }
}
class h extends u {
    constructor(t){
        super(), this.name = "", this.availableServers = [], n.proto3.util.initPartial(t, this);
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
            "McpServerNotFound|1 name 9|2 available_servers 9*"
        ];
    }
}
class g extends u {
    constructor(t){
        super(), this.text = "", n.proto3.util.initPartial(t, this);
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
            "McpTextContent|1 text 9|2 output_location #0?",
            s.pV
        ];
    }
}
class A extends u {
    constructor(t){
        super(), this.data = new Uint8Array(0), this.mimeType = "", n.proto3.util.initPartial(t, this);
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
            "McpImageContent|1 data 12|2 mime_type 9"
        ];
    }
}
class _ extends u {
    constructor(t){
        super(), this.content = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "McpToolResultContentItem|1 text #0 content|2 image #1 content",
            g,
            A
        ];
    }
}
class y extends u {
    constructor(t){
        super(), this.body = "", n.proto3.util.initPartial(t, this);
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
            "SystemReminder|1 body 9"
        ];
    }
}
class w extends u {
    constructor(t){
        super(), this.content = [], this.isError = !1, this.systemReminders = [], n.proto3.util.initPartial(t, this);
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
            "McpSuccess|1 content #0*|2 is_error 8|3 structured_content #1|4 system_reminders #2*",
            _,
            n.Struct,
            y
        ];
    }
}
class S extends u {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
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
            "McpError|1 error 9|2 needs_auth 8?|3 recovery #0?|4 http_status 5?",
            J
        ];
    }
}
class J extends u {
    constructor(t){
        super(), this.outcome = B.UNSPECIFIED, this.availableTools = [], n.proto3.util.initPartial(t, this);
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
            "McpRecovery|1 outcome #0|2 fresh_input_schema_json 9?|3 available_tools 9*",
            B
        ];
    }
}
var B = (0, o.QT)(n.proto3, a, "McpRecovery.Outcome", [
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
class E extends u {
    constructor(t){
        super(), this.reason = "", this.isReadonly = !1, n.proto3.util.initPartial(t, this);
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
            "McpRejected|1 reason 9|2 is_readonly 8"
        ];
    }
}
class I extends u {
    constructor(t){
        super(), this.error = "", this.isReadonly = !1, n.proto3.util.initPartial(t, this);
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
            "McpPermissionDenied|1 error 9|2 is_readonly 8"
        ];
    }
}
class C extends u {
    constructor(t){
        super(), this.serverIdentifiers = [], this.kickOnly = !1, n.proto3.util.initPartial(t, this);
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
            "McpStateExecArgs|1 server_identifiers 9*|2 kick_only 8|3 refresh_policy #0?",
            c
        ];
    }
}
class b extends u {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "McpStateExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result",
            v,
            q,
            R
        ];
    }
}
class k extends u {
    constructor(t){
        super(), this.serverName = "", this.serverIdentifier = "", this.tools = [], this.instructions = [], n.proto3.util.initPartial(t, this);
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
            "McpStateServer|1 server_name 9|2 server_identifier 9|3 plugin 9?|4 marketplace 9?|5 tools #0*|6 instructions #1*|7 status 9?|8 error_message 9?",
            i.gd,
            i.I0
        ];
    }
}
class v extends u {
    constructor(t){
        super(), this.servers = [], n.proto3.util.initPartial(t, this);
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
            "McpStateSuccess|1 servers #0*",
            k
        ];
    }
}
class q extends u {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
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
            "McpStateError|1 error 9"
        ];
    }
}
class R extends u {
    constructor(t){
        super(), this.reason = "", n.proto3.util.initPartial(t, this);
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
            "McpStateRejected|1 reason 9"
        ];
    }
}
class P extends u {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "ListMcpResourcesExecArgs|1 server 9?"
        ];
    }
}
class T extends u {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "ListMcpResourcesExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result",
            N,
            D,
            U
        ];
    }
}
class x extends u {
    constructor(t){
        super(), this.uri = "", this.server = "", this.annotations = {}, n.proto3.util.initPartial(t, this);
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
            "ListMcpResourcesExecResult.McpResource|1 uri 9|2 name 9?|3 description 9?|4 mime_type 9?|5 server 9|6 annotations 9,9"
        ];
    }
}
class N extends u {
    constructor(t){
        super(), this.resources = [], n.proto3.util.initPartial(t, this);
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
            "ListMcpResourcesSuccess|1 resources #0*",
            x
        ];
    }
}
class D extends u {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
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
            "ListMcpResourcesError|1 error 9"
        ];
    }
}
class U extends u {
    constructor(t){
        super(), this.reason = "", n.proto3.util.initPartial(t, this);
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
            "ListMcpResourcesRejected|1 reason 9"
        ];
    }
}
class Q extends u {
    constructor(t){
        super(), this.server = "", this.uri = "", this.toolCallId = "", n.proto3.util.initPartial(t, this);
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
            "ReadMcpResourceExecArgs|1 server 9|2 uri 9|3 download_path 9?|4 tool_call_id 9|5 smart_mode_approval #0?",
            s.UC
        ];
    }
}
class M extends u {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "ReadMcpResourceExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 not_found #3 result",
            O,
            F,
            L,
            $
        ];
    }
}
class O extends u {
    constructor(t){
        super(), this.uri = "", this.content = {
            case: void 0
        }, this.annotations = {}, n.proto3.util.initPartial(t, this);
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
            "ReadMcpResourceSuccess|1 uri 9|2 name 9?|3 description 9?|4 mime_type 9?|5 text 9 content|6 blob 12 content|7 annotations 9,9|8 download_path 9?|9 output_location #0?|10 meta_json 9?",
            s.pV
        ];
    }
}
class F extends u {
    constructor(t){
        super(), this.uri = "", this.error = "", n.proto3.util.initPartial(t, this);
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
            "ReadMcpResourceError|1 uri 9|2 error 9"
        ];
    }
}
class L extends u {
    constructor(t){
        super(), this.uri = "", this.reason = "", n.proto3.util.initPartial(t, this);
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
            "ReadMcpResourceRejected|1 uri 9|2 reason 9"
        ];
    }
}
class $ extends u {
    constructor(t){
        super(), this.uri = "", n.proto3.util.initPartial(t, this);
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
            "ReadMcpResourceNotFound|1 uri 9"
        ];
    }
}
