"use strict";
require.d(exports, {
    Mw: ()=>l
});
var n = require("./module-6038.js"), s = require("./module-8592.js");
const i = "agent.v1.";
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
        super(), n.proto3.util.initPartial(t, this);
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
            "NetworkPolicyLoggingConfig|1 decision_log_path 9?|2 log_format 9?"
        ];
    }
}
class u extends o {
    constructor(t){
        super(), this.deny = [], this.allow = [], n.proto3.util.initPartial(t, this);
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
            "NetworkPolicy|1 version 13?|2 default_action #0?|3 deny 9*|4 allow 9*|5 logging #1?",
            c,
            a
        ];
    }
}
var c = (0, s.QT)(n.proto3, i, "NetworkPolicy.DefaultAction", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ALLOW"
    ],
    [
        2,
        "DENY"
    ]
], 1);
class l extends o {
    constructor(t){
        super(), this.type = m.UNSPECIFIED, this.additionalReadwritePaths = [], this.additionalReadonlyPaths = [], this.readBoundary = d.UNSPECIFIED, this.additionalReadPaths = [], n.proto3.util.initPartial(t, this);
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
            "SandboxPolicy|1 type #0|2 network_access 8?|3 additional_readwrite_paths 9*|4 additional_readonly_paths 9*|5 debug_output_dir 9?|7 disable_tmp_write 8?|8 allowlist_escalated 8?|9 enable_shared_build_cache 8?|10 network_policy #1?|11 network_policy_strict 8?|12 capture_denies 8?|13 skip_statsig_defaults 8?|14 read_boundary #2|15 additional_read_paths 9*",
            m,
            u,
            d
        ];
    }
}
var m = (0, s.QT)(n.proto3, i, "SandboxPolicy.Type", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "INSECURE_NONE"
    ],
    [
        2,
        "WORKSPACE_READWRITE"
    ],
    [
        3,
        "WORKSPACE_READONLY"
    ]
], 1), d = (0, s.QT)(n.proto3, i, "SandboxPolicy.ReadBoundaryMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SYSTEM"
    ],
    [
        2,
        "WORKSPACE"
    ]
], 1);
