"use strict";
require.d(exports, {
    Dc: ()=>m,
    Dh: ()=>l,
    EB: ()=>c,
    HC: ()=>x,
    I8: ()=>_,
    IC: ()=>w,
    Jb: ()=>C,
    K5: ()=>p,
    RC: ()=>v,
    Wd: ()=>T,
    _3: ()=>g,
    bG: ()=>y,
    hn: ()=>b,
    ho: ()=>h,
    ks: ()=>E,
    oQ: ()=>k,
    t8: ()=>I,
    vV: ()=>f,
    w3: ()=>a,
    wm: ()=>S,
    xp: ()=>d,
    yq: ()=>u
});
var n = require("./module-36038.js"), o = require("./module-8592.js");
const s = "agent.v1.";
class i extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return s;
    }
}
var a = (0, o.QT)(n.proto3, s, "MouseButton", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "LEFT"
    ],
    [
        2,
        "RIGHT"
    ],
    [
        3,
        "MIDDLE"
    ],
    [
        4,
        "BACK"
    ],
    [
        5,
        "FORWARD"
    ]
], 1), l = (0, o.QT)(n.proto3, s, "ScrollDirection", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "UP"
    ],
    [
        2,
        "DOWN"
    ],
    [
        3,
        "LEFT"
    ],
    [
        4,
        "RIGHT"
    ]
], 1), c = (0, o.QT)(n.proto3, s, "KeyStroke", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "TAP"
    ],
    [
        2,
        "DOWN"
    ],
    [
        3,
        "UP"
    ]
], 1), u = (0, o.QT)(n.proto3, s, "ComputerUseSettleOutcome", [
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
        "FIXED"
    ],
    [
        3,
        "STABLE"
    ],
    [
        4,
        "CAP"
    ],
    [
        5,
        "CAPTURE_FAILED"
    ]
], 1);
class d extends i {
    constructor(e){
        super(), this.x = 0, this.y = 0, n.proto3.util.initPartial(e, this);
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
            "Coordinate|1 x 5|2 y 5"
        ];
    }
}
class p extends i {
    constructor(e){
        super(), this.toolCallId = "", this.actions = [], n.proto3.util.initPartial(e, this);
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
            "ComputerUseArgs|1 tool_call_id 9|2 actions #0*|3 description 9?|4 bind_unmapped_characters 8?|5 desktop_lease_actor_id 9?|6 screenshot_settle_ms 5?|8 settle_until_stable 8?",
            h
        ];
    }
}
class h extends i {
    constructor(e){
        super(), this.action = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "ComputerUseAction|1 mouse_move #0 action|2 click #1 action|3 mouse_down #2 action|4 mouse_up #3 action|5 drag #4 action|6 scroll #5 action|7 type #6 action|8 key #7 action|9 wait #8 action|10 screenshot #9 action|11 cursor_position #10 action",
            m,
            f,
            g,
            y,
            v,
            w,
            b,
            _,
            S,
            x,
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
            "MouseMoveAction|1 coordinate #0",
            d
        ];
    }
}
class f extends i {
    constructor(e){
        super(), this.button = a.UNSPECIFIED, this.count = 0, n.proto3.util.initPartial(e, this);
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
            "ClickAction|1 coordinate #0?|2 button #1|3 count 5|4 modifier_keys 9?",
            d,
            a
        ];
    }
}
class g extends i {
    constructor(e){
        super(), this.button = a.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "MouseDownAction|1 button #0",
            a
        ];
    }
}
class y extends i {
    constructor(e){
        super(), this.button = a.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "MouseUpAction|1 button #0",
            a
        ];
    }
}
class v extends i {
    constructor(e){
        super(), this.path = [], this.button = a.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "DragAction|1 path #0*|2 button #1|3 modifier_keys 9?",
            d,
            a
        ];
    }
}
class w extends i {
    constructor(e){
        super(), this.direction = l.UNSPECIFIED, this.amount = 0, n.proto3.util.initPartial(e, this);
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
            "ScrollAction|1 coordinate #0?|2 direction #1|3 amount 5|4 modifier_keys 9?",
            d,
            l
        ];
    }
}
class b extends i {
    constructor(e){
        super(), this.text = "", n.proto3.util.initPartial(e, this);
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
            "TypeAction|1 text 9"
        ];
    }
}
class _ extends i {
    constructor(e){
        super(), this.key = "", this.stroke = c.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "KeyAction|1 key 9|2 hold_duration_ms 5?|3 stroke #0",
            c
        ];
    }
}
class S extends i {
    constructor(e){
        super(), this.durationMs = 0, n.proto3.util.initPartial(e, this);
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
            "WaitAction|1 duration_ms 5"
        ];
    }
}
class x extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ScreenshotAction"
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
            "CursorPositionAction"
        ];
    }
}
class E extends i {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "ComputerUseResult|1 success #0 result|2 error #1 result",
            T,
            C
        ];
    }
}
class T extends i {
    constructor(e){
        super(), this.actionCount = 0, this.durationMs = 0, n.proto3.util.initPartial(e, this);
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
            "ComputerUseSuccess|1 action_count 5|2 duration_ms 5|3 screenshot 9?|4 log 9?|5 screenshot_path 9?|6 cursor_position #0?|7 settle_ms 5?|8 settle_outcome #1?",
            d,
            u
        ];
    }
}
class C extends i {
    constructor(e){
        super(), this.error = "", this.actionCount = 0, this.durationMs = 0, n.proto3.util.initPartial(e, this);
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
            "ComputerUseError|1 error 9|2 action_count 5|3 duration_ms 5|4 log 9?|5 screenshot 9?|6 screenshot_path 9?"
        ];
    }
}
class I extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ComputerUseToolCall|1 args #0|2 result #1",
            p,
            E
        ];
    }
}
