"use strict";
require.d(exports, {
    $b: ()=>ke,
    AY: ()=>re,
    BZ: ()=>D,
    CD: ()=>v,
    D7: ()=>yt,
    EM: ()=>at,
    Ev: ()=>ot,
    F0: ()=>qt,
    Fg: ()=>et,
    G_: ()=>be,
    Gb: ()=>Me,
    H0: ()=>wt,
    Ht: ()=>b,
    Hz: ()=>R,
    IO: ()=>_t,
    J3: ()=>Ie,
    J4: ()=>ge,
    J6: ()=>ne,
    JK: ()=>pt,
    JW: ()=>Ct,
    Jn: ()=>le,
    LX: ()=>K,
    Lk: ()=>Bt,
    M: ()=>Je,
    Ml: ()=>je,
    Mt: ()=>Fe,
    N9: ()=>F,
    NX: ()=>E,
    NY: ()=>ut,
    OZ: ()=>gt,
    Ot: ()=>ce,
    P4: ()=>Pt,
    PF: ()=>Nt,
    PY: ()=>Jt,
    Pg: ()=>bt,
    Pi: ()=>T,
    Qf: ()=>it,
    Qk: ()=>N,
    R1: ()=>M,
    TQ: ()=>x,
    Th: ()=>De,
    To: ()=>he,
    Wn: ()=>At,
    X: ()=>Ge,
    X7: ()=>Ne,
    XO: ()=>V,
    Xi: ()=>dt,
    Yv: ()=>oe,
    ZS: ()=>fe,
    Ze: ()=>A,
    Zg: ()=>Dt,
    Zi: ()=>vt,
    aq: ()=>St,
    bq: ()=>U,
    bt: ()=>Tt,
    cK: ()=>O,
    c_: ()=>Ke,
    cj: ()=>S,
    cp: ()=>Et,
    cy: ()=>j,
    dC: ()=>we,
    fF: ()=>Xe,
    g6: ()=>y,
    gW: ()=>Rt,
    hV: ()=>se,
    hq: ()=>Y,
    j$: ()=>Qe,
    j2: ()=>ye,
    jz: ()=>k,
    k2: ()=>Re,
    k4: ()=>Ye,
    k9: ()=>tt,
    kc: ()=>ie,
    kr: ()=>_,
    ky: ()=>ae,
    lX: ()=>ze,
    m$: ()=>He,
    mX: ()=>xt,
    mY: ()=>de,
    mq: ()=>ue,
    n4: ()=>me,
    nK: ()=>qe,
    nP: ()=>X,
    oX: ()=>Te,
    pI: ()=>L,
    re: ()=>Z,
    s: ()=>Ce,
    tP: ()=>Mt,
    ty: ()=>pe,
    uQ: ()=>Ot,
    vC: ()=>Ze,
    vG: ()=>Pe,
    vb: ()=>Be,
    vq: ()=>Se,
    w3: ()=>g,
    wy: ()=>I,
    x5: ()=>Ee,
    yu: ()=>xe,
    z4: ()=>ct,
    zF: ()=>q,
    zU: ()=>kt
});
var n = require("./module-36038.js"), s = require("./module-69584.js"), o = require("./module-83133.js"), i = require("./module-86209.js"), a = require("./module-43955.js"), c = require("./module-89396.js"), l = require("./module-89582.js"), u = require("./module-5289.js"), d = require("./module-67918.js"), p = require("./module-38427.js"), m = require("./module-8592.js");
const h = "agent.v1.";
class f extends m.HL {
    static get runtime() {
        return (0, m.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return h;
    }
}
var g = (0, m.QT)(n.proto3, h, "SubagentInteractionPolicy", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "AUTO_REJECT"
    ],
    [
        2,
        "BUBBLE_TO_PARENT"
    ],
    [
        3,
        "SURFACE_TO_USER"
    ]
], 1), y = (0, m.QT)(n.proto3, h, "AgentHostSessionStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "IDLE"
    ],
    [
        2,
        "RUNNING"
    ],
    [
        3,
        "AWAITING_INPUT"
    ]
], 1), w = (0, m.QT)(n.proto3, h, "AgentHostSkillSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USER"
    ],
    [
        2,
        "WORKSPACE"
    ],
    [
        3,
        "NESTED_WORKSPACE"
    ],
    [
        4,
        "TEAM"
    ],
    [
        5,
        "BUILT_IN"
    ],
    [
        6,
        "PLUGIN"
    ]
], 1), v = (0, m.QT)(n.proto3, h, "AgentHostSendDelivery", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "QUEUE"
    ],
    [
        2,
        "NOW"
    ],
    [
        3,
        "STEERED"
    ],
    [
        4,
        "INTERRUPTED"
    ]
], 1), _ = (0, m.QT)(n.proto3, h, "AgentHostApprovalBlockReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "OUT_OF_WORKSPACE"
    ],
    [
        2,
        "PROTECTED_CONFIG"
    ],
    [
        3,
        "WORKSPACE_WRITE"
    ]
], 1), A = (0, m.QT)(n.proto3, h, "AgentHostApprovalHookSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USER"
    ],
    [
        2,
        "PROJECT"
    ],
    [
        3,
        "ENTERPRISE"
    ],
    [
        4,
        "TEAM"
    ]
], 1), S = (0, m.QT)(n.proto3, h, "AgentHostApprovalOperationType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "WRITE"
    ],
    [
        2,
        "READ"
    ],
    [
        3,
        "SHELL"
    ],
    [
        4,
        "DELETE"
    ],
    [
        5,
        "MCP"
    ]
], 1), b = (0, m.QT)(n.proto3, h, "AgentHostInteractionResponseStatus", [
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
        "ALREADY_RESOLVED"
    ],
    [
        3,
        "NOT_FOUND"
    ]
], 1), E = (0, m.QT)(n.proto3, h, "AgentHostBackgroundWorkKind", [
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
], 1), I = (0, m.QT)(n.proto3, h, "AgentHostBackgroundWorkState", [
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
        "QUEUED"
    ]
], 1), C = (0, m.QT)(n.proto3, h, "AgentHostShellLifecycleState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "STARTING"
    ],
    [
        2,
        "RUNNING"
    ],
    [
        3,
        "EXITED"
    ],
    [
        4,
        "ABORTED"
    ]
], 1), k = (0, m.QT)(n.proto3, h, "AgentHostTurnOutcome", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "COMPLETED"
    ],
    [
        2,
        "INTERRUPTED"
    ],
    [
        3,
        "FAILED"
    ]
], 1), x = (0, m.QT)(n.proto3, h, "AgentHostTurnInterruptInitiator", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USER_STOP"
    ],
    [
        2,
        "FOLLOW_UP"
    ],
    [
        3,
        "CLIENT_ERROR"
    ],
    [
        4,
        "HOST"
    ]
], 1), T = (0, m.QT)(n.proto3, h, "AgentHostTurnStopReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MAX_STEPS_REACHED"
    ]
], 1);
class R extends f {
    constructor(e){
        super(), this.sessionId = "", this.clientInstanceId = "", n.proto3.util.initPartial(e, this);
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
            "CreateAgentHostSessionRequest|1 session_id 9|2 initial_history #0?|3 session_options #1?|4 client_instance_id 9",
            s.Y9z,
            B
        ];
    }
}
class B extends f {
    constructor(e){
        super(), this.workspacePaths = [], this.hostedMcpLocalGrantIdentifiers = [], n.proto3.util.initPartial(e, this);
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
            "AgentHostSessionOptions|1 workspace_paths 9*|2 worktree_main_path 9?|3 is_glass_root 8?|4 interaction_policy #0?|5 owning_project #1?|6 local_subagent_limits #2?|7 hosted_mcp_routing_enabled 8?|8 hosted_mcp_local_grant_identifiers 9*",
            g,
            J,
            P
        ];
    }
}
class P extends f {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "AgentHostLocalSubagentLimits|1 max_running 13?"
        ];
    }
}
class J extends f {
    constructor(e){
        super(), this.projectAgentId = "", n.proto3.util.initPartial(e, this);
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
            "AgentHostOwningProject|1 project_agent_id 9|2 project_name 9?"
        ];
    }
}
class M extends f {
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
            "CreateAgentHostSessionResponse"
        ];
    }
}
class q extends f {
    constructor(e){
        super(), this.sessionId = "", n.proto3.util.initPartial(e, this);
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
            "ForkAgentHostSessionRequest|1 session_id 9|2 through_turn_id 9?"
        ];
    }
}
class D extends f {
    constructor(e){
        super(), this.sessionId = "", n.proto3.util.initPartial(e, this);
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
            "ForkAgentHostSessionResponse|1 session_id 9"
        ];
    }
}
class O extends f {
    constructor(e){
        super(), this.workspacePathsFilter = [], this.matchAnyWorkspaceRoot = !1, n.proto3.util.initPartial(e, this);
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
            "ListAgentHostSessionsRequest|1 include_children 8?|2 parent_session_id 9?|3 limit 13?|4 workspace_paths_filter 9*|5 match_any_workspace_root 8|6 owner_client_instance_id 9?|7 include_owner_unrooted_sessions 8?"
        ];
    }
}
class N extends f {
    constructor(e){
        super(), this.sessions = [], n.proto3.util.initPartial(e, this);
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
            "ListAgentHostSessionsResponse|1 sessions #0*",
            Q
        ];
    }
}
class F extends f {
    constructor(e){
        super(), this.workspacePathsFilter = [], this.matchAnyWorkspaceRoot = !1, n.proto3.util.initPartial(e, this);
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
            "WatchAgentHostSessionsRequest|1 workspace_paths_filter 9*|2 match_any_workspace_root 8|3 owner_client_instance_id 9?|4 include_owner_unrooted_sessions 8?"
        ];
    }
}
class U extends f {
    constructor(e){
        super(), this.sessionId = "", n.proto3.util.initPartial(e, this);
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
            "HasAgentHostSessionRequest|1 session_id 9"
        ];
    }
}
class L extends f {
    constructor(e){
        super(), this.exists = !1, n.proto3.util.initPartial(e, this);
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
            "HasAgentHostSessionResponse|1 exists 8"
        ];
    }
}
class $ extends f {
    constructor(e){
        super(), this.parentSessionId = "", this.parentToolCallId = "", this.rootSessionId = "", n.proto3.util.initPartial(e, this);
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
            "SessionParent|1 parent_session_id 9|2 parent_tool_call_id 9|3 root_session_id 9"
        ];
    }
}
class Q extends f {
    constructor(e){
        super(), this.sessionId = "", this.status = y.UNSPECIFIED, this.lastEventId = n.protoInt64.zero, this.queuedTurnIds = [], n.proto3.util.initPartial(e, this);
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
            "AgentHostSession|1 session_id 9|2 status #0|3 last_event_id 4|4 forked_from_session_id 9?|5 parent #1?|6 title 9?|7 updated_at #2?|8 model_id 9?|11 running_turn_id 9?|12 queued_turn_ids 9*|13 workspace #3?",
            y,
            $,
            n.Timestamp,
            Y
        ];
    }
}
class j extends f {
    constructor(e){
        super(), this.event = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "WatchAgentHostSessionsEvent|1 snapshot #0 event|2 added #1 event|3 updated #2 event|4 deleted #3 event|5 keepalive 8?",
            G,
            H,
            z,
            W
        ];
    }
}
class G extends f {
    constructor(e){
        super(), this.sessions = [], n.proto3.util.initPartial(e, this);
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
            "AgentHostSessionsSnapshot|1 sessions #0*",
            Q
        ];
    }
}
class H extends f {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "AgentHostSessionAdded|1 session #0",
            Q
        ];
    }
}
class z extends f {
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
            "AgentHostSessionUpdated|1 session #0",
            Q
        ];
    }
}
class W extends f {
    constructor(e){
        super(), this.sessionId = "", n.proto3.util.initPartial(e, this);
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
            "AgentHostSessionDeleted|1 session_id 9"
        ];
    }
}
class V extends f {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ListAgentHostWorkspacesRequest"
        ];
    }
}
class K extends f {
    constructor(e){
        super(), this.workspaces = [], n.proto3.util.initPartial(e, this);
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
            "ListAgentHostWorkspacesResponse|1 workspaces #0*",
            Y
        ];
    }
}
class Y extends f {
    constructor(e){
        super(), this.workspacePaths = [], n.proto3.util.initPartial(e, this);
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
        return n.proto3.util.equals(Y, e, t);
    }
    static $() {
        return [
            "AgentHostWorkspace|1 workspace_paths 9*|2 worktree_main_path 9?|3 display_path 9?"
        ];
    }
}
class Z extends f {
    constructor(e){
        super(), this.sessionId = "", this.workspacePaths = [], this.refresh = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Z).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Z).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Z).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Z, e, t);
    }
    static $() {
        return [
            "ListAgentHostSkillsRequest|1 session_id 9|2 workspace_paths 9*|3 refresh 8"
        ];
    }
}
class X extends f {
    constructor(e){
        super(), this.skills = [], this.scanErrors = [], this.workspacePaths = [], n.proto3.util.initPartial(e, this);
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
        return n.proto3.util.equals(X, e, t);
    }
    static $() {
        return [
            "ListAgentHostSkillsResponse|1 skills #0*|2 scan_errors #1*|3 workspace_paths 9*",
            ee,
            te
        ];
    }
}
class ee extends f {
    constructor(e){
        super(), this.qualifiedName = "", this.isDefault = !1, this.source = w.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ee).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ee).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ee).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ee, e, t);
    }
    static $() {
        return [
            "AgentHostSkill|1 skill #0|2 qualified_name 9|3 is_default 8|4 source #1",
            o.Q,
            w
        ];
    }
}
class te extends f {
    constructor(e){
        super(), this.path = "", this.message = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new te).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new te).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new te).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(te, e, t);
    }
    static $() {
        return [
            "AgentHostSkillScanError|1 path 9|2 message 9"
        ];
    }
}
class re extends f {
    constructor(e){
        super(), this.sessionId = "", this.text = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new re).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new re).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new re).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(re, e, t);
    }
    static $() {
        return [
            "SendAgentHostMessageRequest|1 session_id 9|2 text 9|3 model_id 9?|4 model_details #0?|5 turn_options #1?|6 requested_model #2?|7 message_id 9?",
            s.Gmx,
            Wt,
            i.G4
        ];
    }
}
class ne extends f {
    constructor(e){
        super(), this.sessionId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ne).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ne).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ne).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ne, e, t);
    }
    static $() {
        return [
            "SendAgentHostActionRequest|1 session_id 9|2 action #0|3 model_id 9?|4 model_details #1?|5 turn_options #2?|6 requested_model #3?|7 base_history #4?|8 request_context_decoration #5?|9 delivery #6?|10 replace_queued_turn_id 9?",
            s.QFf,
            s.Gmx,
            Wt,
            i.G4,
            s.Y9z,
            se,
            v
        ];
    }
}
class se extends f {
    constructor(e){
        super(), this.disabledTeamRules = [], this.appendedRules = [], this.filteredBrowserMcpProviderIds = [], this.prefetchFileUris = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new se).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new se).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new se).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(se, e, t);
    }
    static $() {
        return [
            "RequestContextDecoration|1 smart_mode_classifier_auto_mode_enabled 8?|2 disabled_team_rules 9*|3 admin_command_denylist #0?|4 commit_attribution_message 9?|5 pr_attribution_message 9?|6 mounted_agent_stores #1?|7 web_search_enabled 8?|8 web_fetch_enabled 8?|9 read_lints_enabled 8?|10 search_conversations_enabled 8?|11 appended_rules #2*|12 filtered_browser_mcp_provider_ids 9*|13 git_repo_branch_ancestry #3?|14 admin_permissions_auto_run #4?|15 user_permissions_auto_run #4?|16 project_permissions_auto_run #4?|17 hooks_config #5?|18 hooks_additional_context 9?|19 debug_mode_config #6?|20 recently_added_plugin #7?|21 prefetch_file_uris 9*|22 sandbox_enabled 8?",
            oe,
            ie,
            a.DX,
            ae,
            c.ag,
            c.Jy,
            c.TT,
            c.iT
        ];
    }
}
class oe extends f {
    constructor(e){
        super(), this.values = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new oe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new oe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new oe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(oe, e, t);
    }
    static $() {
        return [
            "StringListOverlay|1 values 9*"
        ];
    }
}
class ie extends f {
    constructor(e){
        super(), this.values = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ie).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ie).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ie).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ie, e, t);
    }
    static $() {
        return [
            "MountedAgentStoreListOverlay|1 values #0*",
            c.Lz
        ];
    }
}
class ae extends f {
    constructor(e){
        super(), this.repoPath = "", this.currentBranch = "", this.isAncestor = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ae).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ae).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ae).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ae, e, t);
    }
    static $() {
        return [
            "GitRepoBranchAncestry|1 repo_path 9|2 current_branch 9|3 is_ancestor 8"
        ];
    }
}
class ce extends f {
    constructor(e){
        super(), this.turnId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ce).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ce).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ce).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ce, e, t);
    }
    static $() {
        return [
            "SendAgentHostMessageResponse|1 turn_id 9|2 delivered_as #0?",
            v
        ];
    }
}
class le extends f {
    constructor(e){
        super(), this.turnId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new le).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new le).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new le).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(le, e, t);
    }
    static $() {
        return [
            "SendAgentHostActionResponse|1 turn_id 9|2 delivered_as #0?",
            v
        ];
    }
}
class ue extends f {
    constructor(e){
        super(), this.sessionId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ue).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ue).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ue).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ue, e, t);
    }
    static $() {
        return [
            "DeleteAgentHostSessionRequest|1 session_id 9"
        ];
    }
}
class de extends f {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new de).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new de).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new de).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(de, e, t);
    }
    static $() {
        return [
            "DeleteAgentHostSessionResponse"
        ];
    }
}
class pe extends f {
    constructor(e){
        super(), this.sessionId = "", this.turnId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pe, e, t);
    }
    static $() {
        return [
            "InterruptAgentHostTurnRequest|1 session_id 9|2 turn_id 9|3 reason 9?|4 session_tree 8?|5 initiated_by #0?",
            x
        ];
    }
}
class me extends f {
    constructor(e){
        super(), this.interrupted = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new me).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new me).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new me).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(me, e, t);
    }
    static $() {
        return [
            "InterruptAgentHostTurnResponse|1 interrupted 8"
        ];
    }
}
class he extends f {
    constructor(e){
        super(), this.sessionId = "", this.turnId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new he).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new he).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new he).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(he, e, t);
    }
    static $() {
        return [
            "CancelQueuedAgentHostTurnRequest|1 session_id 9|2 turn_id 9|3 reason 9?|4 initiated_by #0?",
            x
        ];
    }
}
class fe extends f {
    constructor(e){
        super(), this.cancelled = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fe, e, t);
    }
    static $() {
        return [
            "CancelQueuedAgentHostTurnResponse|1 cancelled 8"
        ];
    }
}
class ge extends f {
    constructor(e){
        super(), this.sessionId = "", this.turnIds = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ge).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ge).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ge).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ge, e, t);
    }
    static $() {
        return [
            "ReorderQueuedAgentHostTurnsRequest|1 session_id 9|2 turn_ids 9*"
        ];
    }
}
class ye extends f {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ye).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ye).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ye).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ye, e, t);
    }
    static $() {
        return [
            "ReorderQueuedAgentHostTurnsResponse"
        ];
    }
}
class we extends f {
    constructor(e){
        super(), this.sessionId = "", this.turnId = "", this.edit = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new we).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new we).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new we).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(we, e, t);
    }
    static $() {
        return [
            "EditQueuedAgentHostTurnRequest|1 session_id 9|2 turn_id 9|3 user_message #0 edit|4 shell_command #1 edit",
            ve,
            Ae
        ];
    }
}
class ve extends f {
    constructor(e){
        super(), this.text = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ve).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ve).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ve).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ve, e, t);
    }
    static $() {
        return [
            "QueuedAgentHostUserMessageEdit|1 text 9|2 images #0?",
            _e
        ];
    }
}
class _e extends f {
    constructor(e){
        super(), this.images = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _e).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _e).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _e).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_e, e, t);
    }
    static $() {
        return [
            "QueuedAgentHostImages|1 images #0*",
            l.d
        ];
    }
}
class Ae extends f {
    constructor(e){
        super(), this.command = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ae).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ae).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ae).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ae, e, t);
    }
    static $() {
        return [
            "QueuedAgentHostShellCommandEdit|1 command 9"
        ];
    }
}
class Se extends f {
    constructor(e){
        super(), this.edited = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Se).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Se).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Se).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Se, e, t);
    }
    static $() {
        return [
            "EditQueuedAgentHostTurnResponse|1 edited 8"
        ];
    }
}
class be extends f {
    constructor(e){
        super(), this.path = "", this.reason = "", this.isNewFile = !1, this.diffString = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new be).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new be).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new be).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(be, e, t);
    }
    static $() {
        return [
            "AgentHostApprovalWriteDetails|1 path 9|2 reason 9|3 is_new_file 8|4 diff_string 9|5 before 9?|6 after 9?|7 block_reason #0?",
            _
        ];
    }
}
class Ee extends f {
    constructor(e){
        super(), this.path = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ee).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ee).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ee).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ee, e, t);
    }
    static $() {
        return [
            "AgentHostApprovalReadDetails|1 path 9|2 reason 9?"
        ];
    }
}
class Ie extends f {
    constructor(e){
        super(), this.command = "", this.workingDirectory = "", this.timeout = 0, this.notAllowedCommands = [], this.suggestedAllowlistEntries = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ie).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ie).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ie).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ie, e, t);
    }
    static $() {
        return [
            "AgentHostApprovalShellDetails|1 command 9|2 working_directory 9|3 timeout 13|4 reason 9?|5 hook_source #0?|6 is_sandbox_available 8?|7 is_sandbox_enabled 8?|8 can_allowlist 8?|9 not_allowed_commands 9*|10 suggested_allowlist_entries 9*|11 smart_mode_approval_reason 9?|12 smart_mode_approval_request_id 9?",
            A
        ];
    }
}
class Ce extends f {
    constructor(e){
        super(), this.path = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ce).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ce).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ce).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ce, e, t);
    }
    static $() {
        return [
            "AgentHostApprovalDeleteDetails|1 path 9"
        ];
    }
}
class ke extends f {
    constructor(e){
        super(), this.name = "", this.toolName = "", this.providerIdentifier = "", this.args = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ke).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ke).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ke).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ke, e, t);
    }
    static $() {
        return [
            "AgentHostApprovalMcpDetails|1 name 9|2 tool_name 9|3 provider_identifier 9|4 args 9,#0|5 source 9?|6 reason 9?|7 hook_source #1?|8 can_allowlist 8?|9 smart_mode_approval_reason 9?|10 smart_mode_approval_request_id 9?",
            n.Value,
            A
        ];
    }
}
class xe extends f {
    constructor(e){
        super(), this.type = S.UNSPECIFIED, this.details = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xe, e, t);
    }
    static $() {
        return [
            "AgentHostApprovalOperation|1 type #0|2 write #1 details|3 read #2 details|4 shell #3 details|5 delete #4 details|6 mcp #5 details",
            S,
            be,
            Ee,
            Ie,
            Ce,
            ke
        ];
    }
}
class Te extends f {
    constructor(e){
        super(), this.toolCallId = "", this.offeredAllowlistEntries = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Te).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Te).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Te).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Te, e, t);
    }
    static $() {
        return [
            "AgentHostApprovalRequest|1 tool_call_id 9|2 operation #0|3 offered_allowlist_entries 9*",
            xe
        ];
    }
}
class Re extends f {
    constructor(e){
        super(), this.approved = !1, this.allowlistEntries = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Re).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Re).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Re).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Re, e, t);
    }
    static $() {
        return [
            "AgentHostApprovalResult|1 approved 8|2 reason 9?|3 allowlist_entries 9*"
        ];
    }
}
class Be extends f {
    constructor(e){
        super(), this.requestId = "", this.message = "", this.requestedSchemaJson = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Be).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Be).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Be).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Be, e, t);
    }
    static $() {
        return [
            "McpElicitationRequest|1 request_id 9|2 message 9|3 requested_schema_json 9"
        ];
    }
}
class Pe extends f {
    constructor(e){
        super(), this.action = Je.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Pe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Pe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Pe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Pe, e, t);
    }
    static $() {
        return [
            "McpElicitationResponse|1 action #0|2 content #1",
            Je,
            n.Struct
        ];
    }
}
var Je = (0, m.QT)(n.proto3, h, "McpElicitationResponse.Action", [
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
class Me extends f {
    constructor(e){
        super(), this.serverName = "", this.toolName = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Me).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Me).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Me).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Me, e, t);
    }
    static $() {
        return [
            "AgentHostMcpElicitationRequest|1 server_name 9|2 tool_name 9|3 tool_call_id 9?|4 elicitation #0",
            Be
        ];
    }
}
class qe extends f {
    constructor(e){
        super(), this.sessionId = "", this.interactionId = "", this.answer = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qe, e, t);
    }
    static $() {
        return [
            "RespondToAgentHostInteractionRequest|1 session_id 9|2 interaction_id 9|3 interaction_response #0 answer|4 exec_approval #1 answer|5 mcp_elicitation #2 answer",
            s.Y5,
            Re,
            Pe
        ];
    }
}
class De extends f {
    constructor(e){
        super(), this.status = b.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new De).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new De).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new De).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(De, e, t);
    }
    static $() {
        return [
            "RespondToAgentHostInteractionResponse|1 status #0",
            b
        ];
    }
}
class Oe extends f {
    constructor(e){
        super(), this.interactionId = "", this.turnId = "", this.question = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Oe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Oe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Oe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Oe, e, t);
    }
    static $() {
        return [
            "AgentHostPendingInteraction|1 interaction_id 9|2 turn_id 9|3 interaction_query #0 question|4 exec_approval #1 question|5 mcp_elicitation #2 question",
            s.Pd7,
            Te,
            Me
        ];
    }
}
class Ne extends f {
    constructor(e){
        super(), this.sessionId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ne).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ne).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ne).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ne, e, t);
    }
    static $() {
        return [
            "WatchAgentHostSessionInteractionsRequest|1 session_id 9"
        ];
    }
}
class Fe extends f {
    constructor(e){
        super(), this.event = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Fe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Fe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Fe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Fe, e, t);
    }
    static $() {
        return [
            "WatchAgentHostSessionInteractionsEvent|1 snapshot #0 event|2 state #1 event",
            Ue,
            Le
        ];
    }
}
class Ue extends f {
    constructor(e){
        super(), this.interactions = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ue).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ue).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ue).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ue, e, t);
    }
    static $() {
        return [
            "AgentHostSessionInteractionsSnapshot|1 interactions #0*",
            Oe
        ];
    }
}
class Le extends f {
    constructor(e){
        super(), this.interactions = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Le).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Le).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Le).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Le, e, t);
    }
    static $() {
        return [
            "AgentHostSessionInteractionsState|1 interactions #0*",
            Oe
        ];
    }
}
class $e extends f {
    constructor(e){
        super(), this.id = "", this.kind = E.UNSPECIFIED, this.state = I.UNSPECIFIED, this.hasAbort = !1, this.metadata = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $e).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $e).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $e).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($e, e, t);
    }
    static $() {
        return [
            "AgentHostBackgroundWork|1 id 9|2 kind #0|3 state #1|4 owner_id 9?|5 has_abort 8|6 metadata 9,9",
            E,
            I
        ];
    }
}
class Qe extends f {
    constructor(e){
        super(), this.sessionId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Qe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Qe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Qe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Qe, e, t);
    }
    static $() {
        return [
            "WatchAgentHostSessionBackgroundWorkRequest|1 session_id 9|2 kind #0?|3 state #1?|4 owner_id 9?",
            E,
            I
        ];
    }
}
class je extends f {
    constructor(e){
        super(), this.event = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new je).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new je).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new je).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(je, e, t);
    }
    static $() {
        return [
            "WatchAgentHostSessionBackgroundWorkEvent|1 snapshot #0 event|2 state #1 event",
            We,
            Ve
        ];
    }
}
class Ge extends f {
    constructor(e){
        super(), this.sessionId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ge).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ge).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ge).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ge, e, t);
    }
    static $() {
        return [
            "WatchAgentHostSessionTurnLifecycleRequest|1 session_id 9"
        ];
    }
}
class He extends f {
    constructor(e){
        super(), this.event = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new He).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new He).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new He).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(He, e, t);
    }
    static $() {
        return [
            "WatchAgentHostSessionTurnLifecycleEvent|1 ready #0 event|2 lifecycle #1 event",
            ze,
            Ct
        ];
    }
}
class ze extends f {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ze).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ze).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ze).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ze, e, t);
    }
    static $() {
        return [
            "AgentHostTurnLifecycleWatchReady"
        ];
    }
}
class We extends f {
    constructor(e){
        super(), this.work = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new We).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new We).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new We).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(We, e, t);
    }
    static $() {
        return [
            "AgentHostSessionBackgroundWorkSnapshot|1 work #0*",
            $e
        ];
    }
}
class Ve extends f {
    constructor(e){
        super(), this.work = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ve).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ve).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ve).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ve, e, t);
    }
    static $() {
        return [
            "AgentHostSessionBackgroundWorkState|1 work #0*",
            $e
        ];
    }
}
class Ke extends f {
    constructor(e){
        super(), this.sessionId = "", this.workId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ke).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ke).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ke).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ke, e, t);
    }
    static $() {
        return [
            "AbortAgentHostBackgroundWorkRequest|1 session_id 9|2 work_id 9"
        ];
    }
}
class Ye extends f {
    constructor(e){
        super(), this.aborted = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ye).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ye).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ye).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ye, e, t);
    }
    static $() {
        return [
            "AbortAgentHostBackgroundWorkResponse|1 aborted 8"
        ];
    }
}
class Ze extends f {
    constructor(e){
        super(), this.sessionId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ze).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ze).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ze).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ze, e, t);
    }
    static $() {
        return [
            "AbortAllAgentHostBackgroundWorkRequest|1 session_id 9|2 kind #0?|3 state #1?|4 owner_id 9?",
            E,
            I
        ];
    }
}
class Xe extends f {
    constructor(e){
        super(), this.abortedCount = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Xe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Xe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Xe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Xe, e, t);
    }
    static $() {
        return [
            "AbortAllAgentHostBackgroundWorkResponse|1 aborted_count 13"
        ];
    }
}
class et extends f {
    constructor(e){
        super(), this.sessionId = "", this.shellId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new et).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new et).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new et).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(et, e, t);
    }
    static $() {
        return [
            "WatchAgentHostSessionShellOutputRequest|1 session_id 9|2 shell_id 9|3 include_snapshot 8?|4 from_output_offset 4?"
        ];
    }
}
class tt extends f {
    constructor(e){
        super(), this.event = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new tt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new tt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new tt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(tt, e, t);
    }
    static $() {
        return [
            "WatchAgentHostSessionShellOutputEvent|1 snapshot #0 event|2 output #1 event|3 lifecycle #2 event",
            rt,
            nt,
            st
        ];
    }
}
class rt extends f {
    constructor(e){
        super(), this.shellId = "", this.command = "", this.cwd = "", this.state = C.UNSPECIFIED, this.bufferedOutput = new Uint8Array(0), this.nextOutputOffset = n.protoInt64.zero, this.adopted = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new rt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new rt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new rt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(rt, e, t);
    }
    static $() {
        return [
            "AgentHostShellOutputSnapshot|1 shell_id 9|2 command 9|3 cwd 9|4 state #0|5 buffered_output 12|6 next_output_offset 4|7 tool_call_id 9?|8 title 9?|9 adopted 8",
            C
        ];
    }
}
class nt extends f {
    constructor(e){
        super(), this.shellId = "", this.outputOffset = n.protoInt64.zero, this.stream = {
            case: void 0
        }, this.isBackpressured = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new nt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new nt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new nt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(nt, e, t);
    }
    static $() {
        return [
            "AgentHostShellOutputChunk|1 shell_id 9|2 output_offset 4|3 stdout 12 stream|4 stderr 12 stream|5 is_backpressured 8"
        ];
    }
}
class st extends f {
    constructor(e){
        super(), this.shellId = "", this.state = C.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new st).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new st).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new st).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(st, e, t);
    }
    static $() {
        return [
            "AgentHostShellLifecycle|1 shell_id 9|2 state #0|3 exit_code 5?|4 abort_reason 9?",
            C
        ];
    }
}
class ot extends f {
    constructor(e){
        super(), this.sessionId = "", this.shellId = "", this.data = new Uint8Array(0), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ot).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ot).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ot).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ot, e, t);
    }
    static $() {
        return [
            "WriteAgentHostSessionShellInputRequest|1 session_id 9|2 shell_id 9|3 data 12"
        ];
    }
}
class it extends f {
    constructor(e){
        super(), this.bytesAccepted = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new it).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new it).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new it).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(it, e, t);
    }
    static $() {
        return [
            "WriteAgentHostSessionShellInputResponse|1 bytes_accepted 4"
        ];
    }
}
class at extends f {
    constructor(e){
        super(), this.sessionId = "", this.clientInstanceId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new at).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new at).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new at).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(at, e, t);
    }
    static $() {
        return [
            "AttachAgentHostSessionRequest|1 session_id 9|2 last_event_id 4?|3 background_task_completions_only 8?|4 client_instance_id 9"
        ];
    }
}
class ct extends f {
    constructor(e){
        super(), this.sessionId = "", this.blobIds = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ct).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ct).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ct).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ct, e, t);
    }
    static $() {
        return [
            "GetAgentHostSessionBlobsRequest|1 session_id 9|2 blob_ids 12*|3 max_response_bytes 4?"
        ];
    }
}
class lt extends f {
    constructor(e){
        super(), this.blobId = new Uint8Array(0), this.data = new Uint8Array(0), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new lt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new lt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new lt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(lt, e, t);
    }
    static $() {
        return [
            "AgentHostSessionBlob|1 blob_id 12|2 data 12"
        ];
    }
}
class ut extends f {
    constructor(e){
        super(), this.blobs = [], this.missingBlobIds = [], this.oversizeBlobIds = [], this.remainingBlobIds = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ut).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ut).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ut).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ut, e, t);
    }
    static $() {
        return [
            "GetAgentHostSessionBlobsResponse|1 blobs #0*|2 missing_blob_ids 12*|4 oversize_blob_ids 12*|3 remaining_blob_ids 12*",
            lt
        ];
    }
}
class dt extends f {
    constructor(e){
        super(), this.path = "", this.readOffset = n.protoInt64.zero, this.readLimit = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new dt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new dt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new dt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(dt, e, t);
    }
    static $() {
        return [
            "ReadAgentHostFileRequest|1 path 9|2 read_offset 4|3 read_limit 4|4 cached_mtime_ms 3?"
        ];
    }
}
class pt extends f {
    constructor(e){
        super(), this.totalBytes = n.protoInt64.zero, this.mtimeMs = n.protoInt64.zero, this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pt, e, t);
    }
    static $() {
        return [
            "ReadAgentHostFileResponse|1 total_bytes 4|2 mtime_ms 3|3 chunk #0 result|4 not_modified #1 result|5 too_large #2 result",
            mt,
            ht,
            ft
        ];
    }
}
class mt extends f {
    constructor(e){
        super(), this.offset = n.protoInt64.zero, this.data = new Uint8Array(0), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new mt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new mt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new mt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(mt, e, t);
    }
    static $() {
        return [
            "AgentHostFileChunk|1 offset 4|2 data 12"
        ];
    }
}
class ht extends f {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ht).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ht).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ht).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ht, e, t);
    }
    static $() {
        return [
            "AgentHostFileNotModified"
        ];
    }
}
class ft extends f {
    constructor(e){
        super(), this.maxBytes = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ft).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ft).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ft).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ft, e, t);
    }
    static $() {
        return [
            "AgentHostFileTooLarge|1 max_bytes 4"
        ];
    }
}
class gt extends f {
    constructor(e){
        super(), this.expectedApiSchemaRevision = "", this.desiredLocalLoopEnabled = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new gt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new gt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new gt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(gt, e, t);
    }
    static $() {
        return [
            "GetAgentHostDaemonInfoRequest|1 expected_api_schema_revision 9|2 desired_local_loop_enabled 8|3 allow_newer_schema 8?"
        ];
    }
}
class yt extends f {
    constructor(e){
        super(), this.daemonVersion = "", this.apiSchemaRevision = "", this.localLoopEnabled = !1, this.listenAddress = "", this.processPid = 0, this.runningSessionCount = 0, this.buildIdentity = "", this.capabilities = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new yt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new yt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new yt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(yt, e, t);
    }
    static $() {
        return [
            "GetAgentHostDaemonInfoResponse|1 daemon_version 9|2 api_schema_revision 9|3 local_loop_enabled 8|4 listen_address 9|5 process_pid 13|6 running_session_count 13|7 build_identity 9|8 capabilities 9*"
        ];
    }
}
class wt extends f {
    constructor(e){
        super(), this.reason = "", this.onlyIfIdle = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new wt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new wt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new wt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(wt, e, t);
    }
    static $() {
        return [
            "ShutdownAgentHostDaemonRequest|1 reason 9|2 only_if_idle 8"
        ];
    }
}
class vt extends f {
    constructor(e){
        super(), this.shutdownScheduled = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new vt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new vt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new vt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(vt, e, t);
    }
    static $() {
        return [
            "ShutdownAgentHostDaemonResponse|1 shutdown_scheduled 8"
        ];
    }
}
class _t extends f {
    constructor(e){
        super(), this.accessToken = "", this.issuedAtMs = n.protoInt64.zero, this.clientInstanceId = "", this.signedOut = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _t).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _t).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _t).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_t, e, t);
    }
    static $() {
        return [
            "UpdateAgentHostDaemonAuthRequest|1 access_token 9|2 issued_at_ms 4|3 expires_at_ms 4?|4 client_instance_id 9|5 signed_out 8"
        ];
    }
}
class At extends f {
    constructor(e){
        super(), this.accepted = !1, this.privacyMode = u.PrivacyMode.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new At).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new At).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new At).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(At, e, t);
    }
    static $() {
        return [
            "UpdateAgentHostDaemonAuthResponse|1 accepted 8|2 rejection_reason 9?|3 privacy_mode #0",
            u.PrivacyMode
        ];
    }
}
class St extends f {
    constructor(e){
        super(), this.sessionId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new St).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new St).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new St).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(St, e, t);
    }
    static $() {
        return [
            "SetAgentHostSessionTitleRequest|1 session_id 9|2 title 9?"
        ];
    }
}
class bt extends f {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new bt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new bt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new bt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(bt, e, t);
    }
    static $() {
        return [
            "SetAgentHostSessionTitleResponse"
        ];
    }
}
class Et extends f {
    constructor(e){
        super(), this.eventId = n.protoInt64.zero, this.event = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Et).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Et).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Et).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Et, e, t);
    }
    static $() {
        return [
            "AgentHostSessionEvent|1 event_id 4|14 keepalive 8?|2 interaction_update #0 event|3 conversation_state #1 event|4 turn_started #2 event|8 turn_awaiting_input #3 event|9 turn_settled #4 event|10 interaction_resolved #5 event|11 subagent_started #6 event|12 background_task_completed #7 event|13 turn_interactions_superseded #8 event",
            s.Uq,
            s.Y9z,
            Ut,
            $t,
            Ht,
            Gt,
            Ft,
            It,
            Lt
        ];
    }
}
class It extends f {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new It).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new It).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new It).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(It, e, t);
    }
    static $() {
        return [
            "AgentHostBackgroundTaskCompleted|1 completion #0",
            s.KFq
        ];
    }
}
class Ct extends f {
    constructor(e){
        super(), this.turnId = "", this.event = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ct).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ct).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ct).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ct, e, t);
    }
    static $() {
        return [
            "AgentHostTurnLifecycle|1 turn_id 9|2 network_phase_started #0 event|3 response_metadata #1 event|4 connection_state_changed #2 event|5 first_message #3 event|6 first_message_network #4 event|7 first_non_heartbeat_response #5 event|8 ttft_breakdown #6 event|9 finished #7 event|10 turn_runtime_selected #8 event",
            xt,
            Rt,
            Pt,
            qt,
            Dt,
            Ot,
            Nt,
            kt,
            Tt
        ];
    }
}
class kt extends f {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new kt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new kt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new kt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(kt, e, t);
    }
    static $() {
        return [
            "AgentHostTurnLifecycleFinished"
        ];
    }
}
class xt extends f {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xt, e, t);
    }
    static $() {
        return [
            "AgentHostNetworkPhaseStarted"
        ];
    }
}
class Tt extends f {
    constructor(e){
        super(), this.runtime = "", this.reason = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Tt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Tt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Tt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Tt, e, t);
    }
    static $() {
        return [
            "AgentHostTurnRuntimeSelected|1 runtime 9|2 reason 9"
        ];
    }
}
class Rt extends f {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Rt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Rt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Rt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Rt, e, t);
    }
    static $() {
        return [
            "AgentHostResponseMetadata|1 server_region 9?|2 transport_mode 9?"
        ];
    }
}
class Bt extends f {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Bt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Bt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Bt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Bt, e, t);
    }
    static $() {
        return [
            "AgentHostReconnectTrigger|1 error_class 9?|2 connect_code 13?|3 connect_code_name 9?|4 error_code 13?|5 count_as_server_error 8?|6 count_as_transport_error 8?|7 stall_aborted 8?|8 originating_request_id 9?|9 attempt_request_id 9?|10 endpoint_url 9?|11 transport_failure_kind 9?|12 transport_mode 9?|13 loop 9?"
        ];
    }
}
class Pt extends f {
    constructor(e){
        super(), this.state = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Pt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Pt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Pt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Pt, e, t);
    }
    static $() {
        return [
            "AgentHostConnectionStateChanged|1 connected #0 state|2 reconnecting #1 state",
            Jt,
            Mt
        ];
    }
}
class Jt extends f {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Jt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Jt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Jt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Jt, e, t);
    }
    static $() {
        return [
            "AgentHostConnected"
        ];
    }
}
class Mt extends f {
    constructor(e){
        super(), this.attempt = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Mt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Mt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Mt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Mt, e, t);
    }
    static $() {
        return [
            "AgentHostReconnecting|1 attempt 13|2 trigger #0?",
            Bt
        ];
    }
}
class qt extends f {
    constructor(e){
        super(), this.elapsedMs = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qt, e, t);
    }
    static $() {
        return [
            "AgentHostFirstMessage|1 elapsed_ms 1"
        ];
    }
}
class Dt extends f {
    constructor(e){
        super(), this.elapsedMs = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Dt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Dt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Dt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Dt, e, t);
    }
    static $() {
        return [
            "AgentHostFirstMessageNetwork|1 elapsed_ms 1"
        ];
    }
}
class Ot extends f {
    constructor(e){
        super(), this.handshakeMs = 0, this.attempt = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ot).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ot).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ot).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ot, e, t);
    }
    static $() {
        return [
            "AgentHostFirstNonHeartbeatResponse|1 handshake_ms 1|2 attempt 13"
        ];
    }
}
class Nt extends f {
    constructor(e){
        super(), this.serverFirstTokenMs = 0, this.preStreamSetupMs = 0, this.waitForFirstEventMs = 0, this.slowPoolWaitMs = 0, this.attempt = 0, this.clientClock = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Nt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Nt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Nt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Nt, e, t);
    }
    static $() {
        return [
            "AgentHostTtftBreakdown|1 server_first_token_ms 1|2 pre_stream_setup_ms 1|3 wait_for_first_event_ms 1|4 provider_ttft_ms 1?|5 slow_pool_wait_ms 1|6 attempt 13|7 client_prep_ms 1?|8 client_clock 8"
        ];
    }
}
class Ft extends f {
    constructor(e){
        super(), this.turnId = "", this.parentToolCallId = "", this.childSessionId = "", this.rootSessionId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ft).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ft).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ft).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ft, e, t);
    }
    static $() {
        return [
            "AgentHostSubagentStarted|1 turn_id 9|2 parent_tool_call_id 9|3 child_session_id 9|4 root_session_id 9"
        ];
    }
}
class Ut extends f {
    constructor(e){
        super(), this.turnId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ut).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ut).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ut).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ut, e, t);
    }
    static $() {
        return [
            "AgentHostTurnStarted|1 turn_id 9"
        ];
    }
}
class Lt extends f {
    constructor(e){
        super(), this.turnId = "", this.continuation = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Lt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Lt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Lt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Lt, e, t);
    }
    static $() {
        return [
            "AgentHostTurnInteractionsSuperseded|1 turn_id 9|2 replay_action_from_state #0 continuation|3 resume_from_checkpoint #0 continuation",
            s.Y9z
        ];
    }
}
class $t extends f {
    constructor(e){
        super(), this.turnId = "", this.requestId = "", this.interactionId = "", this.question = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $t).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $t).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $t).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($t, e, t);
    }
    static $() {
        return [
            "AgentHostTurnAwaitingInput|1 turn_id 9|2 request_id 9|3 interaction_id 9|4 interaction_query #0 question|5 exec_approval #1 question|6 mcp_elicitation #2 question",
            s.Pd7,
            Te,
            Me
        ];
    }
}
class Qt extends f {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Qt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Qt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Qt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Qt, e, t);
    }
    static $() {
        return [
            "AgentHostInteractionCancelled|1 reason 9?"
        ];
    }
}
class jt extends f {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new jt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new jt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new jt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(jt, e, t);
    }
    static $() {
        return [
            "AgentHostInteractionFailed|1 error 9"
        ];
    }
}
class Gt extends f {
    constructor(e){
        super(), this.turnId = "", this.interactionId = "", this.resolution = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Gt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Gt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Gt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Gt, e, t);
    }
    static $() {
        return [
            "AgentHostInteractionResolved|1 turn_id 9|2 interaction_id 9|3 responded #0 resolution|4 cancelled #1 resolution|5 failed #2 resolution|6 exec_approval #3 resolution|7 mcp_elicitation #4 resolution",
            s.Y5,
            Qt,
            jt,
            Re,
            Pe
        ];
    }
}
class Ht extends f {
    constructor(e){
        super(), this.turnId = "", this.outcome = k.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ht).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ht).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ht).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ht, e, t);
    }
    static $() {
        return [
            "AgentHostTurnSettled|1 turn_id 9|2 outcome #0|3 detail 9?|4 error #1?|5 interrupted_by #2?|6 stop_reason #3?",
            k,
            zt,
            x,
            T
        ];
    }
}
class zt extends f {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new zt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new zt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new zt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(zt, e, t);
    }
    static $() {
        return [
            "AgentHostTurnError|1 kind 9?|2 title 9?|3 detail 9?|4 is_retryable 8?|5 connect_code 13?|6 inference_request_error_type 9?|7 request_id 9?|8 error_details #0?|9 action 9?",
            d.ErrorDetails
        ];
    }
}
class Wt extends f {
    constructor(e){
        super(), this.selectedSubagentModels = [], this.subagentModelOverrides = [], this.requestHeaders = {}, this.allowedTools = [], this.excludedTools = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Wt).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Wt).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Wt).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Wt, e, t);
    }
    static $() {
        return [
            "AgentHostTurnOptions|1 generation_uuid 9?|2 custom_system_prompt 9?|3 exclude_workspace_context 8?|4 enable_agent_retries 8?|5 fixed_retry_delay_ms 13?|6 endless_retries 8?|7 agent_session_id 9?|8 is_running_in_test 8?|9 stall_advisory_timeout_ms 13?|10 stall_fail_timeout_ms 13?|11 selected_subagent_models #0*|12 subagent_model_overrides #1*|13 request_context_blob_transport_mode 9?|14 request_context_blob_max_bytes 13?|15 request_context_dynamic_inline_max_bytes 13?|16 suggest_next_prompt 8?|17 blob_encryption_key 9?|18 client_supports_inline_images 8?|19 client_supports_preview_card 8?|20 client_supports_send_to_user 8?|22 client_supports_routed_model_update 8?|23 request_headers 9,9|24 system_prompt_spec #2?|25 max_steps 13?|26 allowed_tools 9*|27 excluded_tools 9*|28 can_create_cloud_subagents 8?|29 started_as_new_project 8?|30 first_project_onboarding 8?|31 harness 9?|32 subagent_smart_mode_auto_run 8?|33 local_loop_gate_enabled 8?",
            i.G4,
            s.Bjv,
            p.$
        ];
    }
}
