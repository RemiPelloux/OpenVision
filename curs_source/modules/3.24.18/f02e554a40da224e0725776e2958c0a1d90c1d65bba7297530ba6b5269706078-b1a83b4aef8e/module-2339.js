"use strict";
require.r(exports), require.d(exports, {
    RemoteAgentHostPresenceService: ()=>Z
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
        super(), this.id = "", this.method = "", this.data = new Uint8Array(0), this.kind = u.UNSPECIFIED, this.error = "", n.proto3.util.initPartial(t, this);
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
            "RemoteAgentHostFrame|1 id 9|2 method 9|3 data 12|4 kind #0|5 error 9",
            u
        ];
    }
}
var u = (0, s.QT)(n.proto3, i, "RemoteAgentHostFrame.Kind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "REQUEST"
    ],
    [
        2,
        "RESPONSE"
    ],
    [
        3,
        "ERROR"
    ]
], 1);
var c = require("./module-829.js");
const l = "aiserver.v1.";
class m extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return l;
    }
}
var d = (0, s.QT)(n.proto3, l, "RemoteAgentHostControllerMethod", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "LIST_SESSIONS"
    ],
    [
        2,
        "WATCH_SESSIONS"
    ],
    [
        3,
        "ATTACH_SESSION"
    ],
    [
        4,
        "GET_SESSION_BLOBS"
    ],
    [
        5,
        "SEND_MESSAGE"
    ],
    [
        6,
        "INTERRUPT_TURN"
    ],
    [
        7,
        "CANCEL_QUEUED_TURN"
    ],
    [
        8,
        "CREATE_SESSION"
    ],
    [
        9,
        "RESPOND_TO_INTERACTION"
    ],
    [
        10,
        "LIST_WORKSPACES"
    ],
    [
        12,
        "SEND_ACTION"
    ],
    [
        13,
        "READ_FILE"
    ],
    [
        14,
        "LIST_SKILLS"
    ]
], 1), f = (0, s.QT)(n.proto3, l, "RemoteAgentHostTargetPresence", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ONLINE"
    ],
    [
        2,
        "OFFLINE"
    ]
], 1), p = (0, s.QT)(n.proto3, l, "RemoteAgentHostControllerPairing", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PAIRED"
    ],
    [
        2,
        "PENDING"
    ],
    [
        3,
        "UNPAIRED"
    ],
    [
        4,
        "REVOKED"
    ]
], 1), h = (0, s.QT)(n.proto3, l, "RemoteControlV2RegistrationState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NOT_ENROLLED"
    ],
    [
        2,
        "ENABLED"
    ],
    [
        3,
        "DISABLED"
    ]
], 1), g = (0, s.QT)(n.proto3, l, "RemoteControlV2RegistrationReason", [
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
        "AUTOMATIC"
    ]
], 1), A = (n.proto3, (0, s.QT)(n.proto3, l, "ControllerTrustStatus", [
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
        "TRUSTED"
    ],
    [
        3,
        "REVOKED"
    ],
    [
        4,
        "REJECTED"
    ],
    [
        5,
        "NONE"
    ]
], 1));
n.proto3, n.proto3;
class _ extends m {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "GetRemoteControlV2UserSettingsRequest"
        ];
    }
}
class y extends m {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "GetRemoteControlV2UserSettingsResponse|1 settings #0|2 policy #1",
            c.WH,
            c.WJ
        ];
    }
}
class w extends m {
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
            "UpdateRemoteControlV2UserSettingsRequest|1 settings #0",
            c.WH
        ];
    }
}
class S extends m {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "UpdateRemoteControlV2UserSettingsResponse|1 settings #0|2 policy #1",
            c.WH,
            c.WJ
        ];
    }
}
class J extends m {
    constructor(t){
        super(), this.targetId = "", this.method = d.UNSPECIFIED, this.data = new Uint8Array(0), n.proto3.util.initPartial(t, this);
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
            "CallAgentHostRequest|1 target_id 9|2 method #0|3 data 12",
            d
        ];
    }
}
class B extends m {
    constructor(t){
        super(), this.data = new Uint8Array(0), n.proto3.util.initPartial(t, this);
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
            "CallAgentHostResponse|1 data 12"
        ];
    }
}
class E extends m {
    constructor(t){
        super(), this.targetId = "", this.method = d.UNSPECIFIED, this.data = new Uint8Array(0), n.proto3.util.initPartial(t, this);
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
            "StreamAgentHostRequest|1 target_id 9|2 method #0|3 data 12",
            d
        ];
    }
}
class I extends m {
    constructor(t){
        super(), this.data = new Uint8Array(0), this.keepalive = !1, n.proto3.util.initPartial(t, this);
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
            "StreamAgentHostResponse|1 data 12|2 keepalive 8"
        ];
    }
}
class C extends m {
    constructor(t){
        super(), this.targetId = "", this.displayName = "", this.agentHostVersion = "", this.presence = f.UNSPECIFIED, this.enrollmentGeneration = 0, this.controllerPairing = p.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
            "SharedRemoteAgentHostTarget|1 target_id 9|2 display_name 9|3 agent_host_version 9|4 presence #0|5 enrollment_generation 5|6 controller_pairing #1|7 reset_at_ms 3?",
            f,
            p
        ];
    }
}
class b extends m {
    constructor(t){
        super(), this.pageSize = 0, this.pageToken = "", this.controllerThumbprint = "", n.proto3.util.initPartial(t, this);
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
            "ListSharedTargetsRequest|1 page_size 5|2 page_token 9|3 controller_thumbprint 9"
        ];
    }
}
class k extends m {
    constructor(t){
        super(), this.targets = [], this.nextPageToken = "", this.recentlyResetTargets = [], n.proto3.util.initPartial(t, this);
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
            "ListSharedTargetsResponse|1 targets #0*|2 next_page_token 9|3 recently_reset_targets #0*",
            C
        ];
    }
}
class v extends m {
    constructor(t){
        super(), this.targetId = "", n.proto3.util.initPartial(t, this);
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
            "RevokeSharedTargetRequest|1 target_id 9|2 expected_enrollment_generation 5?"
        ];
    }
}
class q extends m {
    constructor(t){
        super(), this.affectedGeneration = 0, this.currentGeneration = 0, n.proto3.util.initPartial(t, this);
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
            "RevokeSharedTargetResponse|1 affected_generation 5|2 current_generation 5"
        ];
    }
}
class R extends m {
    constructor(t){
        super(), this.targetId = "", n.proto3.util.initPartial(t, this);
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
            "GetSharedTargetRegistrationStateRequest|1 target_id 9"
        ];
    }
}
class P extends m {
    constructor(t){
        super(), this.state = h.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
            "GetSharedTargetRegistrationStateResponse|1 state #0|2 enrollment_generation 5?|3 has_enrollment_history 8?",
            h
        ];
    }
}
class T extends m {
    constructor(t){
        super(), this.targetId = "", this.displayName = "", this.agentHostVersion = "", n.proto3.util.initPartial(t, this);
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
            "EnableSharedTargetRequest|1 target_id 9|2 display_name 9|3 agent_host_version 9|4 registration_reason #0?|5 public_key_jwk 9?",
            g
        ];
    }
}
class x extends m {
    constructor(t){
        super(), this.enrollmentGeneration = 0, n.proto3.util.initPartial(t, this);
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
            "EnableSharedTargetResponse|1 enrollment_generation 5|2 display_name 9?"
        ];
    }
}
class N extends m {
    constructor(t){
        super(), this.publicKeyJwk = "", this.label = "", this.targetId = "", n.proto3.util.initPartial(t, this);
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
            "TrustControllerRequest|1 public_key_jwk 9|2 label 9|3 target_id 9"
        ];
    }
}
class D extends m {
    constructor(t){
        super(), this.status = A.UNSPECIFIED, this.thumbprint = "", this.verificationCode = "", n.proto3.util.initPartial(t, this);
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
            "TrustControllerResponse|1 status #0|2 thumbprint 9|3 challenge_id 9?|4 verification_code 9",
            A
        ];
    }
}
class U extends m {
    constructor(t){
        super(), this.key = {
            case: void 0
        }, this.targetId = "", n.proto3.util.initPartial(t, this);
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
            "GetControllerTrustStatusRequest|1 public_key_jwk 9 key|2 thumbprint 9 key|3 target_id 9"
        ];
    }
}
class Q extends m {
    constructor(t){
        super(), this.status = A.UNSPECIFIED, this.thumbprint = "", this.verificationCode = "", n.proto3.util.initPartial(t, this);
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
            "GetControllerTrustStatusResponse|1 status #0|2 thumbprint 9|3 challenge_id 9?|4 verification_code 9",
            A
        ];
    }
}
class M extends m {
    constructor(t){
        super(), this.targetId = "", n.proto3.util.initPartial(t, this);
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
            "ListPendingControllerApprovalsRequest|1 target_id 9"
        ];
    }
}
class O extends m {
    constructor(t){
        super(), this.challengeId = "", this.challenge = "", this.label = "", this.thumbprint = "", this.createdAtUnix = 0, this.verificationCode = "", this.targetId = "", n.proto3.util.initPartial(t, this);
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
            "PendingControllerApproval|1 challenge_id 9|2 challenge 9|3 label 9|4 thumbprint 9|5 created_at_unix 13|6 verification_code 9|7 target_id 9"
        ];
    }
}
class F extends m {
    constructor(t){
        super(), this.approvals = [], n.proto3.util.initPartial(t, this);
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
            "ListPendingControllerApprovalsResponse|1 approvals #0*",
            O
        ];
    }
}
class L extends m {
    constructor(t){
        super(), this.challengeId = "", this.signature = "", n.proto3.util.initPartial(t, this);
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
            "ApproveControllerRequest|1 challenge_id 9|2 signature 9"
        ];
    }
}
class $ extends m {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "ApproveControllerResponse|1 controller #0",
            K
        ];
    }
}
class G extends m {
    constructor(t){
        super(), this.challengeId = "", this.signature = "", n.proto3.util.initPartial(t, this);
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
            "RejectControllerRequest|1 challenge_id 9|2 signature 9"
        ];
    }
}
class H extends m {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "RejectControllerResponse"
        ];
    }
}
class K extends m {
    constructor(t){
        super(), this.thumbprint = "", this.label = "", this.createdAtUnix = 0, this.lastUsedAtUnix = 0, this.pairedTargetIds = [], n.proto3.util.initPartial(t, this);
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
            "TrustedController|1 thumbprint 9|2 label 9|3 created_at_unix 13|4 last_used_at_unix 13|5 paired_target_ids 9*"
        ];
    }
}
class V extends m {
    constructor(t){
        super(), this.targetId = "", n.proto3.util.initPartial(t, this);
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
            "ListControllersRequest|1 target_id 9"
        ];
    }
}
class z extends m {
    constructor(t){
        super(), this.controllers = [], n.proto3.util.initPartial(t, this);
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
            "ListControllersResponse|1 controllers #0*",
            K
        ];
    }
}
class W extends m {
    constructor(t){
        super(), this.thumbprint = "", n.proto3.util.initPartial(t, this);
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
            "RevokeControllerRequest|1 thumbprint 9"
        ];
    }
}
class Y extends m {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "RevokeControllerResponse"
        ];
    }
}
class j extends m {
    constructor(t){
        super(), this.thumbprint = "", this.targetId = "", n.proto3.util.initPartial(t, this);
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
            "UnpairControllerRequest|1 thumbprint 9|2 target_id 9"
        ];
    }
}
class X extends m {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "UnpairControllerResponse"
        ];
    }
}
const Z = {
    typeName: "aiserver.v1.RemoteAgentHostPresenceService",
    methods: {
        connectTarget: {
            name: "ConnectTarget",
            I: a,
            O: a,
            kind: n.MethodKind.BiDiStreaming
        },
        listSharedTargets: {
            name: "ListSharedTargets",
            I: b,
            O: k,
            kind: n.MethodKind.Unary
        },
        revokeSharedTarget: {
            name: "RevokeSharedTarget",
            I: v,
            O: q,
            kind: n.MethodKind.Unary
        },
        getSharedTargetRegistrationState: {
            name: "GetSharedTargetRegistrationState",
            I: R,
            O: P,
            kind: n.MethodKind.Unary
        },
        enableSharedTarget: {
            name: "EnableSharedTarget",
            I: T,
            O: x,
            kind: n.MethodKind.Unary
        },
        callAgentHost: {
            name: "CallAgentHost",
            I: J,
            O: B,
            kind: n.MethodKind.Unary
        },
        streamAgentHost: {
            name: "StreamAgentHost",
            I: E,
            O: I,
            kind: n.MethodKind.ServerStreaming
        },
        trustController: {
            name: "TrustController",
            I: N,
            O: D,
            kind: n.MethodKind.Unary
        },
        getControllerTrustStatus: {
            name: "GetControllerTrustStatus",
            I: U,
            O: Q,
            kind: n.MethodKind.Unary
        },
        listPendingControllerApprovals: {
            name: "ListPendingControllerApprovals",
            I: M,
            O: F,
            kind: n.MethodKind.Unary
        },
        approveController: {
            name: "ApproveController",
            I: L,
            O: $,
            kind: n.MethodKind.Unary
        },
        rejectController: {
            name: "RejectController",
            I: G,
            O: H,
            kind: n.MethodKind.Unary
        },
        listControllers: {
            name: "ListControllers",
            I: V,
            O: z,
            kind: n.MethodKind.Unary
        },
        revokeController: {
            name: "RevokeController",
            I: W,
            O: Y,
            kind: n.MethodKind.Unary
        },
        unpairController: {
            name: "UnpairController",
            I: j,
            O: X,
            kind: n.MethodKind.Unary
        },
        getRemoteControlV2UserSettings: {
            name: "GetRemoteControlV2UserSettings",
            I: _,
            O: y,
            kind: n.MethodKind.Unary
        },
        updateRemoteControlV2UserSettings: {
            name: "UpdateRemoteControlV2UserSettings",
            I: w,
            O: S,
            kind: n.MethodKind.Unary
        }
    }
};
