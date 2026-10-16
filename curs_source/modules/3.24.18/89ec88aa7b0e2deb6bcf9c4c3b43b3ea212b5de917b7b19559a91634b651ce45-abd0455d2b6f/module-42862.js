require.d(exports, {
    DY: ()=>v,
    G1: ()=>d,
    Gv: ()=>q,
    Hl: ()=>w,
    I: ()=>H,
    M: ()=>J,
    MC: ()=>h,
    Rb: ()=>T,
    Zm: ()=>D,
    aB: ()=>S,
    ev: ()=>x,
    s6: ()=>B,
    vG: ()=>A,
    wC: ()=>z,
    wt: ()=>k
});
var s = require(36038), n = require(34175), i = require(32180), o = require(11197), a = require(24513), c = require(8592);
const l = "aiserver.v1.";
class u extends c.HL {
    static get runtime() {
        return (0, c.kU)(this, "runtime", s.proto3);
    }
    static $p() {
        return l;
    }
}
var d = (0, c.QT)(s.proto3, l, "McpToolCaller", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "IDE"
    ],
    [
        2,
        "GLASS"
    ],
    [
        3,
        "AGENT_HOST_LOCAL_LOOP"
    ]
], 1), h = (0, c.QT)(s.proto3, l, "McpPlacement", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SERVER"
    ],
    [
        2,
        "CLIENT"
    ],
    [
        3,
        "UNDECIDED"
    ]
], 1), p = (0, c.QT)(s.proto3, l, "McpPlacementSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "EXPLICIT"
    ],
    [
        2,
        "TEAM_DEFAULT"
    ],
    [
        3,
        "PROBE"
    ],
    [
        4,
        "MANUAL"
    ],
    [
        5,
        "LOGIN"
    ],
    [
        6,
        "CLIENT_PROBE"
    ],
    [
        7,
        "NONE"
    ]
], 1), f = (0, c.QT)(s.proto3, l, "McpPlacementProbe", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NONE"
    ],
    [
        2,
        "SERVER_CAPABLE"
    ],
    [
        3,
        "UNREACHABLE"
    ],
    [
        4,
        "INCONCLUSIVE"
    ]
], 1), g = (0, c.QT)(s.proto3, l, "McpPlacementRequestSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MANUAL"
    ],
    [
        2,
        "CLIENT_PROBE"
    ]
], 1), m = (0, c.QT)(s.proto3, l, "McpRowKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PLUGIN"
    ],
    [
        2,
        "CUSTOM"
    ],
    [
        3,
        "TEAM"
    ]
], 1);
class v extends u {
    constructor(e){
        super(), this.serverIdentifiers = [], s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(v, e, t);
    }
    static $() {
        return [
            "ListMcpToolsRequest|1 server_identifiers 9*|2 mcp_config_json 9?"
        ];
    }
}
class w extends u {
    constructor(e){
        super(), this.servers = [], s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(w, e, t);
    }
    static $() {
        return [
            "ListMcpToolsResponse|1 servers #0*",
            y
        ];
    }
}
class y extends u {
    constructor(e){
        super(), this.serverIdentifier = "", this.status = "", this.tools = [], this.accountLabel = "", this.rowServerIdentifier = "", this.servedBy = i.JLr.UNSPECIFIED, this.placement = h.UNSPECIFIED, this.url = "", this.placementSource = p.UNSPECIFIED, this.placementProbe = f.UNSPECIFIED, this.placementProbeReason = "", this.overriddenDeclaredPlacement = !1, this.rowKind = m.UNSPECIFIED, this.displayName = "", s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(y, e, t);
    }
    static $() {
        return [
            "ListMcpToolsResponse.Server|1 server_identifier 9|2 status 9|3 tools #0*|4 account_label 9|5 row_server_identifier 9|6 served_by #1|7 placement #2|8 url 9|9 placement_source #3|10 placement_probe #4|11 placement_probe_reason 9|12 overridden_declared_placement 8|13 row_kind #5|14 viewer_can_decide 8?|15 instructions 9?|16 plugin 9?|17 marketplace 9?|18 plugin_db_id 9?|19 marketplace_id 9?|20 display_name 9",
            n.gd,
            i.JLr,
            h,
            p,
            f,
            m
        ];
    }
}
class S extends u {
    constructor(e){
        super(), this.serverIdentifier = "", this.toolName = "", this.accountKey = "", this.toolCallId = "", this.conversationId = "", this.caller = d.UNSPECIFIED, this.deviceTag = "", this.clientApproved = !1, s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(S, e, t);
    }
    static $() {
        return [
            "CallMcpToolRequest|1 server_identifier 9|2 tool_name 9|3 args #0|4 account_key 9|5 tool_call_id 9|6 conversation_id 9|7 caller #1|8 device_tag 9|9 client_approved 8|10 mcp_config_json 9?",
            s.Struct,
            d
        ];
    }
}
class I extends u {
    constructor(e){
        super(), this.progress = 0, s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(I, e, t);
    }
    static $() {
        return [
            "McpToolCallProgress|1 progress 1|2 total 1?|3 message 9?"
        ];
    }
}
class C extends u {
    constructor(e){
        super(), this.requestId = "", this.message = "", this.requestedSchemaJson = "", s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(C, e, t);
    }
    static $() {
        return [
            "McpElicitationRequest|1 request_id 9|2 message 9|3 requested_schema_json 9"
        ];
    }
}
class P extends u {
    constructor(e){
        super(), this.reason = k.UNSPECIFIED, this.detail = "", s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(P, e, t);
    }
    static $() {
        return [
            "NotReachableFromBackend|1 reason #0|2 detail 9",
            k
        ];
    }
}
var k = (0, c.QT)(s.proto3, l, "NotReachableFromBackend.Reason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DNS"
    ],
    [
        2,
        "CONNECTION_REFUSED"
    ],
    [
        3,
        "TLS"
    ],
    [
        4,
        "TIMEOUT"
    ],
    [
        5,
        "HTTP_5XX"
    ],
    [
        6,
        "OTHER"
    ]
], 1);
class M extends u {
    constructor(e){
        super(), this.servedBy = i.JLr.UNSPECIFIED, this.detail = "", s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(M, e, t);
    }
    static $() {
        return [
            "McpToolNeedsAuth|1 served_by #0|2 detail 9",
            i.JLr
        ];
    }
}
class E extends u {
    constructor(e){
        super(), this.servedBy = i.JLr.UNSPECIFIED, this.detail = "", s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(E, e, t);
    }
    static $() {
        return [
            "McpToolNotRoutable|1 served_by #0|2 detail 9",
            i.JLr
        ];
    }
}
class _ extends u {
    constructor(e){
        super(), this.placement = h.UNSPECIFIED, this.detail = "", s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(_, e, t);
    }
    static $() {
        return [
            "McpToolNotDialed|1 placement #0|2 detail 9",
            h
        ];
    }
}
class b extends u {
    constructor(e){
        super(), this.outcome = {
            case: void 0
        }, s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(b, e, t);
    }
    static $() {
        return [
            "CallMcpToolOutcome|1 result #0 outcome|2 not_reachable #1 outcome|3 needs_auth #2 outcome|4 not_routable #3 outcome|5 not_dialed #4 outcome",
            o.iz,
            P,
            M,
            E,
            _
        ];
    }
}
class R extends u {
    constructor(e){
        super(), this.requestId = "", s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(R, e, t);
    }
    static $() {
        return [
            "McpElicitationClosed|1 request_id 9"
        ];
    }
}
class q extends u {
    constructor(e){
        super(), this.event = {
            case: void 0
        }, s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(q, e, t);
    }
    static $() {
        return [
            "CallMcpToolResponse|1 progress #0 event|2 elicitation_request #1 event|3 outcome #2 event|4 elicitation_closed #3 event",
            I,
            C,
            b,
            R
        ];
    }
}
class A extends u {
    constructor(e){
        super(), this.action = J.UNSPECIFIED, s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(A, e, t);
    }
    static $() {
        return [
            "McpElicitationResponse|1 action #0|2 content #1",
            J,
            s.Struct
        ];
    }
}
var J = (0, c.QT)(s.proto3, l, "McpElicitationResponse.Action", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ACCEPT"
    ],
    [
        2,
        "DECLINE"
    ],
    [
        3,
        "CANCEL"
    ]
], 1);
class T extends u {
    constructor(e){
        super(), this.toolCallId = "", this.requestId = "", s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(T, e, t);
    }
    static $() {
        return [
            "RespondToMcpElicitationRequest|1 tool_call_id 9|2 request_id 9|3 response #0",
            A
        ];
    }
}
class D extends u {
    constructor(e){
        super(), this.status = N.UNSPECIFIED, s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(D, e, t);
    }
    static $() {
        return [
            "RespondToMcpElicitationResponse|1 status #0",
            N
        ];
    }
}
var N = (0, c.QT)(s.proto3, l, "RespondToMcpElicitationResponse.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ACCEPTED"
    ],
    [
        2,
        "NOT_FOUND"
    ],
    [
        3,
        "ALREADY_RESOLVED"
    ],
    [
        4,
        "NOT_IMPLEMENTED"
    ]
], 1);
class x extends u {
    constructor(e){
        super(), this.serverUrl = "", this.refreshToken = "", s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(x, e, t);
    }
    static $() {
        return [
            "MigrateMcpOAuthGrantRequest|1 server_url 9|2 refresh_token 9|3 client_information #0",
            a.Im
        ];
    }
}
class L extends u {
    constructor(e){
        super(), this.method = "", s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(L, e, t);
    }
    static $() {
        return [
            "McpToolServiceNotImplemented|1 method 9"
        ];
    }
}
class B extends u {
    constructor(e){
        super(), this.outcome = {
            case: void 0
        }, s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(B, e, t);
    }
    static $() {
        return [
            "MigrateMcpOAuthGrantResponse|1 migrated #0 outcome|2 server_copy_kept #1 outcome|3 invalid_grant #2 outcome|4 reuse_detected #3 outcome|5 provider_error #4 outcome|6 rejected_grok_row #5 outcome|7 not_implemented #6 outcome|8 persist_failed #7 outcome|9 rejected_client_placed #8 outcome",
            U,
            F,
            O,
            $,
            j,
            W,
            L,
            G,
            K
        ];
    }
}
class U extends u {
    constructor(e){
        super(), s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(U, e, t);
    }
    static $() {
        return [
            "MigrateMcpOAuthGrantResponse.Migrated"
        ];
    }
}
class F extends u {
    constructor(e){
        super(), s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(F, e, t);
    }
    static $() {
        return [
            "MigrateMcpOAuthGrantResponse.ServerCopyKept"
        ];
    }
}
class O extends u {
    constructor(e){
        super(), this.detail = "", s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(O, e, t);
    }
    static $() {
        return [
            "MigrateMcpOAuthGrantResponse.InvalidGrant|1 detail 9"
        ];
    }
}
class $ extends u {
    constructor(e){
        super(), this.detail = "", s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals($, e, t);
    }
    static $() {
        return [
            "MigrateMcpOAuthGrantResponse.ReuseDetected|1 detail 9"
        ];
    }
}
class j extends u {
    constructor(e){
        super(), this.detail = "", s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(j, e, t);
    }
    static $() {
        return [
            "MigrateMcpOAuthGrantResponse.ProviderError|1 detail 9"
        ];
    }
}
class W extends u {
    constructor(e){
        super(), s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(W, e, t);
    }
    static $() {
        return [
            "MigrateMcpOAuthGrantResponse.RejectedGrokRow"
        ];
    }
}
class G extends u {
    constructor(e){
        super(), this.detail = "", s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(G, e, t);
    }
    static $() {
        return [
            "MigrateMcpOAuthGrantResponse.PersistFailed|1 detail 9"
        ];
    }
}
class K extends u {
    constructor(e){
        super(), s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(K, e, t);
    }
    static $() {
        return [
            "MigrateMcpOAuthGrantResponse.RejectedClientPlaced"
        ];
    }
}
class H extends u {
    constructor(e){
        super(), this.serverIdentifier = "", this.placement = h.UNSPECIFIED, this.source = g.UNSPECIFIED, s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(H, e, t);
    }
    static $() {
        return [
            "SetMcpServerPlacementRequest|1 server_identifier 9|2 placement #0|3 source #1",
            h,
            g
        ];
    }
}
class z extends u {
    constructor(e){
        super(), this.outcome = {
            case: void 0
        }, s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(z, e, t);
    }
    static $() {
        return [
            "SetMcpServerPlacementResponse|1 updated #0 outcome|2 precondition_failed #1 outcome|3 rejected_declared_placement #2 outcome|4 rejected_grok_row #3 outcome|5 not_implemented #4 outcome",
            Q,
            V,
            X,
            Y,
            L
        ];
    }
}
class Q extends u {
    constructor(e){
        super(), this.placement = h.UNSPECIFIED, s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(Q, e, t);
    }
    static $() {
        return [
            "SetMcpServerPlacementResponse.Updated|1 placement #0",
            h
        ];
    }
}
class V extends u {
    constructor(e){
        super(), this.detail = "", s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(V, e, t);
    }
    static $() {
        return [
            "SetMcpServerPlacementResponse.PreconditionFailed|1 detail 9"
        ];
    }
}
class X extends u {
    constructor(e){
        super(), s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(X, e, t);
    }
    static $() {
        return [
            "SetMcpServerPlacementResponse.RejectedDeclaredPlacement"
        ];
    }
}
class Y extends u {
    constructor(e){
        super(), s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(Y, e, t);
    }
    static $() {
        return [
            "SetMcpServerPlacementResponse.RejectedGrokRow"
        ];
    }
}
