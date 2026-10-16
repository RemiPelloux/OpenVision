"use strict";
require.r(exports), require.d(exports, {
    RemoteAgentHostPresenceService: ()=>X
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
        super(), this.id = "", this.method = "", this.data = new Uint8Array(0), this.kind = c.UNSPECIFIED, this.error = "", n.proto3.util.initPartial(e, this);
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
            "RemoteAgentHostFrame|1 id 9|2 method 9|3 data 12|4 kind #0|5 error 9",
            c
        ];
    }
}
var c = (0, s.QT)(n.proto3, o, "RemoteAgentHostFrame.Kind", [
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
var l = require("./module-60829.js");
const u = "aiserver.v1.";
class d extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return u;
    }
}
var p = (0, s.QT)(n.proto3, u, "RemoteAgentHostControllerMethod", [
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
], 1), m = (0, s.QT)(n.proto3, u, "RemoteAgentHostTargetPresence", [
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
], 1), h = (0, s.QT)(n.proto3, u, "RemoteAgentHostControllerPairing", [
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
], 1), f = (0, s.QT)(n.proto3, u, "RemoteControlV2RegistrationState", [
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
], 1), g = (0, s.QT)(n.proto3, u, "RemoteControlV2RegistrationReason", [
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
], 1), y = (n.proto3, (0, s.QT)(n.proto3, u, "ControllerTrustStatus", [
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
class w extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "GetRemoteControlV2UserSettingsRequest"
        ];
    }
}
class v extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "GetRemoteControlV2UserSettingsResponse|1 settings #0|2 policy #1",
            l.WH,
            l.WJ
        ];
    }
}
class _ extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "UpdateRemoteControlV2UserSettingsRequest|1 settings #0",
            l.WH
        ];
    }
}
class A extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "UpdateRemoteControlV2UserSettingsResponse|1 settings #0|2 policy #1",
            l.WH,
            l.WJ
        ];
    }
}
class S extends d {
    constructor(e){
        super(), this.targetId = "", this.method = p.UNSPECIFIED, this.data = new Uint8Array(0), n.proto3.util.initPartial(e, this);
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
            "CallAgentHostRequest|1 target_id 9|2 method #0|3 data 12",
            p
        ];
    }
}
class b extends d {
    constructor(e){
        super(), this.data = new Uint8Array(0), n.proto3.util.initPartial(e, this);
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
            "CallAgentHostResponse|1 data 12"
        ];
    }
}
class E extends d {
    constructor(e){
        super(), this.targetId = "", this.method = p.UNSPECIFIED, this.data = new Uint8Array(0), n.proto3.util.initPartial(e, this);
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
            "StreamAgentHostRequest|1 target_id 9|2 method #0|3 data 12",
            p
        ];
    }
}
class I extends d {
    constructor(e){
        super(), this.data = new Uint8Array(0), this.keepalive = !1, n.proto3.util.initPartial(e, this);
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
            "StreamAgentHostResponse|1 data 12|2 keepalive 8"
        ];
    }
}
class C extends d {
    constructor(e){
        super(), this.targetId = "", this.displayName = "", this.agentHostVersion = "", this.presence = m.UNSPECIFIED, this.enrollmentGeneration = 0, this.controllerPairing = h.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "SharedRemoteAgentHostTarget|1 target_id 9|2 display_name 9|3 agent_host_version 9|4 presence #0|5 enrollment_generation 5|6 controller_pairing #1|7 reset_at_ms 3?",
            m,
            h
        ];
    }
}
class k extends d {
    constructor(e){
        super(), this.pageSize = 0, this.pageToken = "", this.controllerThumbprint = "", n.proto3.util.initPartial(e, this);
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
            "ListSharedTargetsRequest|1 page_size 5|2 page_token 9|3 controller_thumbprint 9"
        ];
    }
}
class x extends d {
    constructor(e){
        super(), this.targets = [], this.nextPageToken = "", this.recentlyResetTargets = [], n.proto3.util.initPartial(e, this);
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
            "ListSharedTargetsResponse|1 targets #0*|2 next_page_token 9|3 recently_reset_targets #0*",
            C
        ];
    }
}
class T extends d {
    constructor(e){
        super(), this.targetId = "", n.proto3.util.initPartial(e, this);
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
            "RevokeSharedTargetRequest|1 target_id 9|2 expected_enrollment_generation 5?"
        ];
    }
}
class R extends d {
    constructor(e){
        super(), this.affectedGeneration = 0, this.currentGeneration = 0, n.proto3.util.initPartial(e, this);
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
            "RevokeSharedTargetResponse|1 affected_generation 5|2 current_generation 5"
        ];
    }
}
class B extends d {
    constructor(e){
        super(), this.targetId = "", n.proto3.util.initPartial(e, this);
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
            "GetSharedTargetRegistrationStateRequest|1 target_id 9"
        ];
    }
}
class P extends d {
    constructor(e){
        super(), this.state = f.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "GetSharedTargetRegistrationStateResponse|1 state #0|2 enrollment_generation 5?|3 has_enrollment_history 8?",
            f
        ];
    }
}
class J extends d {
    constructor(e){
        super(), this.targetId = "", this.displayName = "", this.agentHostVersion = "", n.proto3.util.initPartial(e, this);
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
            "EnableSharedTargetRequest|1 target_id 9|2 display_name 9|3 agent_host_version 9|4 registration_reason #0?|5 public_key_jwk 9?",
            g
        ];
    }
}
class M extends d {
    constructor(e){
        super(), this.enrollmentGeneration = 0, n.proto3.util.initPartial(e, this);
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
            "EnableSharedTargetResponse|1 enrollment_generation 5|2 display_name 9?"
        ];
    }
}
class q extends d {
    constructor(e){
        super(), this.publicKeyJwk = "", this.label = "", this.targetId = "", n.proto3.util.initPartial(e, this);
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
            "TrustControllerRequest|1 public_key_jwk 9|2 label 9|3 target_id 9"
        ];
    }
}
class D extends d {
    constructor(e){
        super(), this.status = y.UNSPECIFIED, this.thumbprint = "", this.verificationCode = "", n.proto3.util.initPartial(e, this);
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
            "TrustControllerResponse|1 status #0|2 thumbprint 9|3 challenge_id 9?|4 verification_code 9",
            y
        ];
    }
}
class O extends d {
    constructor(e){
        super(), this.key = {
            case: void 0
        }, this.targetId = "", n.proto3.util.initPartial(e, this);
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
            "GetControllerTrustStatusRequest|1 public_key_jwk 9 key|2 thumbprint 9 key|3 target_id 9"
        ];
    }
}
class N extends d {
    constructor(e){
        super(), this.status = y.UNSPECIFIED, this.thumbprint = "", this.verificationCode = "", n.proto3.util.initPartial(e, this);
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
            "GetControllerTrustStatusResponse|1 status #0|2 thumbprint 9|3 challenge_id 9?|4 verification_code 9",
            y
        ];
    }
}
class F extends d {
    constructor(e){
        super(), this.targetId = "", n.proto3.util.initPartial(e, this);
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
            "ListPendingControllerApprovalsRequest|1 target_id 9"
        ];
    }
}
class U extends d {
    constructor(e){
        super(), this.challengeId = "", this.challenge = "", this.label = "", this.thumbprint = "", this.createdAtUnix = 0, this.verificationCode = "", this.targetId = "", n.proto3.util.initPartial(e, this);
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
            "PendingControllerApproval|1 challenge_id 9|2 challenge 9|3 label 9|4 thumbprint 9|5 created_at_unix 13|6 verification_code 9|7 target_id 9"
        ];
    }
}
class L extends d {
    constructor(e){
        super(), this.approvals = [], n.proto3.util.initPartial(e, this);
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
            "ListPendingControllerApprovalsResponse|1 approvals #0*",
            U
        ];
    }
}
class $ extends d {
    constructor(e){
        super(), this.challengeId = "", this.signature = "", n.proto3.util.initPartial(e, this);
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
            "ApproveControllerRequest|1 challenge_id 9|2 signature 9"
        ];
    }
}
class Q extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ApproveControllerResponse|1 controller #0",
            H
        ];
    }
}
class j extends d {
    constructor(e){
        super(), this.challengeId = "", this.signature = "", n.proto3.util.initPartial(e, this);
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
            "RejectControllerRequest|1 challenge_id 9|2 signature 9"
        ];
    }
}
class G extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "RejectControllerResponse"
        ];
    }
}
class H extends d {
    constructor(e){
        super(), this.thumbprint = "", this.label = "", this.createdAtUnix = 0, this.lastUsedAtUnix = 0, this.pairedTargetIds = [], n.proto3.util.initPartial(e, this);
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
            "TrustedController|1 thumbprint 9|2 label 9|3 created_at_unix 13|4 last_used_at_unix 13|5 paired_target_ids 9*"
        ];
    }
}
class z extends d {
    constructor(e){
        super(), this.targetId = "", n.proto3.util.initPartial(e, this);
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
            "ListControllersRequest|1 target_id 9"
        ];
    }
}
class W extends d {
    constructor(e){
        super(), this.controllers = [], n.proto3.util.initPartial(e, this);
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
            "ListControllersResponse|1 controllers #0*",
            H
        ];
    }
}
class V extends d {
    constructor(e){
        super(), this.thumbprint = "", n.proto3.util.initPartial(e, this);
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
            "RevokeControllerRequest|1 thumbprint 9"
        ];
    }
}
class K extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "RevokeControllerResponse"
        ];
    }
}
class Y extends d {
    constructor(e){
        super(), this.thumbprint = "", this.targetId = "", n.proto3.util.initPartial(e, this);
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
            "UnpairControllerRequest|1 thumbprint 9|2 target_id 9"
        ];
    }
}
class Z extends d {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "UnpairControllerResponse"
        ];
    }
}
const X = {
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
            I: k,
            O: x,
            kind: n.MethodKind.Unary
        },
        revokeSharedTarget: {
            name: "RevokeSharedTarget",
            I: T,
            O: R,
            kind: n.MethodKind.Unary
        },
        getSharedTargetRegistrationState: {
            name: "GetSharedTargetRegistrationState",
            I: B,
            O: P,
            kind: n.MethodKind.Unary
        },
        enableSharedTarget: {
            name: "EnableSharedTarget",
            I: J,
            O: M,
            kind: n.MethodKind.Unary
        },
        callAgentHost: {
            name: "CallAgentHost",
            I: S,
            O: b,
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
            I: q,
            O: D,
            kind: n.MethodKind.Unary
        },
        getControllerTrustStatus: {
            name: "GetControllerTrustStatus",
            I: O,
            O: N,
            kind: n.MethodKind.Unary
        },
        listPendingControllerApprovals: {
            name: "ListPendingControllerApprovals",
            I: F,
            O: L,
            kind: n.MethodKind.Unary
        },
        approveController: {
            name: "ApproveController",
            I: $,
            O: Q,
            kind: n.MethodKind.Unary
        },
        rejectController: {
            name: "RejectController",
            I: j,
            O: G,
            kind: n.MethodKind.Unary
        },
        listControllers: {
            name: "ListControllers",
            I: z,
            O: W,
            kind: n.MethodKind.Unary
        },
        revokeController: {
            name: "RevokeController",
            I: V,
            O: K,
            kind: n.MethodKind.Unary
        },
        unpairController: {
            name: "UnpairController",
            I: Y,
            O: Z,
            kind: n.MethodKind.Unary
        },
        getRemoteControlV2UserSettings: {
            name: "GetRemoteControlV2UserSettings",
            I: w,
            O: v,
            kind: n.MethodKind.Unary
        },
        updateRemoteControlV2UserSettings: {
            name: "UpdateRemoteControlV2UserSettings",
            I: _,
            O: A,
            kind: n.MethodKind.Unary
        }
    }
};
