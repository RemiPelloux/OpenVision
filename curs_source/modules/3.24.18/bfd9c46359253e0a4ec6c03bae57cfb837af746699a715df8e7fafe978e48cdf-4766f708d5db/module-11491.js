"use strict";
require.d(exports, {
    $j: ()=>f,
    Bk: ()=>x,
    FL: ()=>d,
    IR: ()=>y,
    U6: ()=>u,
    _L: ()=>p,
    _x: ()=>h,
    aF: ()=>g,
    b$: ()=>a,
    cl: ()=>k,
    cr: ()=>w,
    dU: ()=>c,
    iq: ()=>_,
    l0: ()=>b,
    p_: ()=>m,
    qL: ()=>l,
    sx: ()=>S,
    zn: ()=>v,
    zz: ()=>E
});
var n = require("./module-36038.js"), s = require("./module-8592.js");
const o = "agent.v1.";
class i extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return o;
    }
}
var a = (0, s.QT)(n.proto3, o, "CustomSubagentPermissionMode", [
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
], 1), c = (0, s.QT)(n.proto3, o, "SubagentExecutionEnvironment", [
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
], 1), l = (0, s.QT)(n.proto3, o, "SubagentBackgroundReason", [
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
], 1), u = (0, s.QT)(n.proto3, o, "BackgroundTaskCompletionReason", [
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
], 1), d = (0, s.QT)(n.proto3, o, "TaskMode", [
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
class p extends i {
    constructor(e){
        super(), this.type = {
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
            "SubagentType|1 unspecified #0 type|2 computer_use #1 type|3 custom #2 type|4 explore #3 type|5 media_review #4 type|6 bash #5 type|7 browser_use #6 type|8 shell #7 type|9 vm_setup_helper #8 type|10 debug #9 type|11 cursor_guide #10 type|12 watch_video #11 type",
            m,
            h,
            x,
            f,
            g,
            y,
            v,
            w,
            _,
            b,
            S,
            k
        ];
    }
}
class m extends i {
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
            "SubagentTypeUnspecified"
        ];
    }
}
class h extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "SubagentTypeComputerUse"
        ];
    }
}
class f extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "SubagentTypeExplore"
        ];
    }
}
class g extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "SubagentTypeMediaReview"
        ];
    }
}
class y extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "SubagentTypeBash"
        ];
    }
}
class w extends i {
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
            "SubagentTypeShell"
        ];
    }
}
class v extends i {
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
            "SubagentTypeBrowserUse"
        ];
    }
}
class _ extends i {
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
            "SubagentTypeVmSetupHelper"
        ];
    }
}
class b extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "SubagentTypeDebug"
        ];
    }
}
class S extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "SubagentTypeCursorGuide"
        ];
    }
}
class k extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "SubagentTypeWatchVideo"
        ];
    }
}
class x extends i {
    constructor(e){
        super(), this.name = "", n.proto3.util.initPartial(e, this);
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
            "SubagentTypeCustom|1 name 9"
        ];
    }
}
class E extends i {
    constructor(e){
        super(), this.fullPath = "", this.name = "", this.description = "", this.tools = [], this.model = "", this.prompt = "", this.permissionMode = a.UNSPECIFIED, this.isBackground = !1, this.forceDefaultModel = !1, n.proto3.util.initPartial(e, this);
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
            "CustomSubagent|1 full_path 9|2 name 9|3 description 9|4 tools 9*|5 model 9|6 prompt 9|7 permission_mode #0|8 is_background 8|9 plugin 9?|10 marketplace 9?|11 plugin_id 9?|12 marketplace_id 9?|13 force_default_model 8|14 source 9?",
            a
        ];
    }
}
