"use strict";
require.d(exports, {
    FL: ()=>m,
    U6: ()=>l,
    _L: ()=>d,
    dU: ()=>u,
    qL: ()=>c,
    zz: ()=>I
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
var a = (0, s.QT)(n.proto3, i, "CustomSubagentPermissionMode", [
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
        "READONLY"
    ],
    [
        3,
        "AGENT_ONLY"
    ]
], 1), u = (0, s.QT)(n.proto3, i, "SubagentExecutionEnvironment", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "LOCAL"
    ],
    [
        2,
        "CLOUD"
    ]
], 1), c = (0, s.QT)(n.proto3, i, "SubagentBackgroundReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "AGENT_REQUEST"
    ],
    [
        2,
        "USER_REQUEST"
    ],
    [
        3,
        "QUEUED_FOLLOW_UP"
    ]
], 1), l = (0, s.QT)(n.proto3, i, "BackgroundTaskCompletionReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "TASK_FINISHED"
    ],
    [
        2,
        "TASK_PROGRESS"
    ],
    [
        3,
        "WORKER_REPARENTED"
    ],
    [
        4,
        "WORKER_MESSAGE"
    ],
    [
        5,
        "WORKER_NEEDS_ATTENTION"
    ]
], 1), m = (0, s.QT)(n.proto3, i, "TaskMode", [
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
        "PLAN"
    ]
], 1);
class d extends o {
    constructor(t){
        super(), this.type = {
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
            "SubagentType|1 unspecified #0 type|2 computer_use #1 type|3 custom #2 type|4 explore #3 type|5 media_review #4 type|6 bash #5 type|7 browser_use #6 type|8 shell #7 type|9 vm_setup_helper #8 type|10 debug #9 type|11 cursor_guide #10 type|12 watch_video #11 type",
            f,
            p,
            E,
            h,
            g,
            A,
            y,
            _,
            w,
            S,
            J,
            B
        ];
    }
}
class f extends o {
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
            "SubagentTypeUnspecified"
        ];
    }
}
class p extends o {
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
            "SubagentTypeComputerUse"
        ];
    }
}
class h extends o {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "SubagentTypeExplore"
        ];
    }
}
class g extends o {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "SubagentTypeMediaReview"
        ];
    }
}
class A extends o {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "SubagentTypeBash"
        ];
    }
}
class _ extends o {
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
            "SubagentTypeShell"
        ];
    }
}
class y extends o {
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
            "SubagentTypeBrowserUse"
        ];
    }
}
class w extends o {
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
            "SubagentTypeVmSetupHelper"
        ];
    }
}
class S extends o {
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
            "SubagentTypeDebug"
        ];
    }
}
class J extends o {
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
            "SubagentTypeCursorGuide"
        ];
    }
}
class B extends o {
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
            "SubagentTypeWatchVideo"
        ];
    }
}
class E extends o {
    constructor(t){
        super(), this.name = "", n.proto3.util.initPartial(t, this);
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
            "SubagentTypeCustom|1 name 9"
        ];
    }
}
class I extends o {
    constructor(t){
        super(), this.fullPath = "", this.name = "", this.description = "", this.tools = [], this.model = "", this.prompt = "", this.permissionMode = a.UNSPECIFIED, this.isBackground = !1, this.forceDefaultModel = !1, n.proto3.util.initPartial(t, this);
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
            "CustomSubagent|1 full_path 9|2 name 9|3 description 9|4 tools 9*|5 model 9|6 prompt 9|7 permission_mode #0|8 is_background 8|9 plugin 9?|10 marketplace 9?|11 plugin_id 9?|12 marketplace_id 9?|13 force_default_model 8|14 source 9?",
            a
        ];
    }
}
