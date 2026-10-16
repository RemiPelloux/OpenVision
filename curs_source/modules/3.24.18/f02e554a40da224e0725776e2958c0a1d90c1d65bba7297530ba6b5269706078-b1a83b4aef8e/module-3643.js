"use strict";
require.d(exports, {
    Jb: ()=>b,
    K5: ()=>d,
    Wd: ()=>C,
    ho: ()=>f,
    ks: ()=>I,
    t8: ()=>k
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
var a = (0, s.QT)(n.proto3, i, "MouseButton", [
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
], 1), u = (0, s.QT)(n.proto3, i, "ScrollDirection", [
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
], 1), c = (0, s.QT)(n.proto3, i, "KeyStroke", [
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
], 1), l = (0, s.QT)(n.proto3, i, "ComputerUseSettleOutcome", [
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
class m extends o {
    constructor(t){
        super(), this.x = 0, this.y = 0, n.proto3.util.initPartial(t, this);
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
            "Coordinate|1 x 5|2 y 5"
        ];
    }
}
class d extends o {
    constructor(t){
        super(), this.toolCallId = "", this.actions = [], n.proto3.util.initPartial(t, this);
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
            "ComputerUseArgs|1 tool_call_id 9|2 actions #0*|3 description 9?|4 bind_unmapped_characters 8?|5 desktop_lease_actor_id 9?|6 screenshot_settle_ms 5?|8 settle_until_stable 8?",
            f
        ];
    }
}
class f extends o {
    constructor(t){
        super(), this.action = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "ComputerUseAction|1 mouse_move #0 action|2 click #1 action|3 mouse_down #2 action|4 mouse_up #3 action|5 drag #4 action|6 scroll #5 action|7 type #6 action|8 key #7 action|9 wait #8 action|10 screenshot #9 action|11 cursor_position #10 action",
            p,
            h,
            g,
            A,
            _,
            y,
            w,
            S,
            J,
            B,
            E
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
            "MouseMoveAction|1 coordinate #0",
            m
        ];
    }
}
class h extends o {
    constructor(t){
        super(), this.button = a.UNSPECIFIED, this.count = 0, n.proto3.util.initPartial(t, this);
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
            "ClickAction|1 coordinate #0?|2 button #1|3 count 5|4 modifier_keys 9?",
            m,
            a
        ];
    }
}
class g extends o {
    constructor(t){
        super(), this.button = a.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
            "MouseDownAction|1 button #0",
            a
        ];
    }
}
class A extends o {
    constructor(t){
        super(), this.button = a.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
            "MouseUpAction|1 button #0",
            a
        ];
    }
}
class _ extends o {
    constructor(t){
        super(), this.path = [], this.button = a.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
            "DragAction|1 path #0*|2 button #1|3 modifier_keys 9?",
            m,
            a
        ];
    }
}
class y extends o {
    constructor(t){
        super(), this.direction = u.UNSPECIFIED, this.amount = 0, n.proto3.util.initPartial(t, this);
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
            "ScrollAction|1 coordinate #0?|2 direction #1|3 amount 5|4 modifier_keys 9?",
            m,
            u
        ];
    }
}
class w extends o {
    constructor(t){
        super(), this.text = "", n.proto3.util.initPartial(t, this);
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
            "TypeAction|1 text 9"
        ];
    }
}
class S extends o {
    constructor(t){
        super(), this.key = "", this.stroke = c.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
            "KeyAction|1 key 9|2 hold_duration_ms 5?|3 stroke #0",
            c
        ];
    }
}
class J extends o {
    constructor(t){
        super(), this.durationMs = 0, n.proto3.util.initPartial(t, this);
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
            "WaitAction|1 duration_ms 5"
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
            "ScreenshotAction"
        ];
    }
}
class E extends o {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "CursorPositionAction"
        ];
    }
}
class I extends o {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
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
            "ComputerUseResult|1 success #0 result|2 error #1 result",
            C,
            b
        ];
    }
}
class C extends o {
    constructor(t){
        super(), this.actionCount = 0, this.durationMs = 0, n.proto3.util.initPartial(t, this);
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
            "ComputerUseSuccess|1 action_count 5|2 duration_ms 5|3 screenshot 9?|4 log 9?|5 screenshot_path 9?|6 cursor_position #0?|7 settle_ms 5?|8 settle_outcome #1?",
            m,
            l
        ];
    }
}
class b extends o {
    constructor(t){
        super(), this.error = "", this.actionCount = 0, this.durationMs = 0, n.proto3.util.initPartial(t, this);
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
            "ComputerUseError|1 error 9|2 action_count 5|3 duration_ms 5|4 log 9?|5 screenshot 9?|6 screenshot_path 9?"
        ];
    }
}
class k extends o {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "ComputerUseToolCall|1 args #0|2 result #1",
            d,
            I
        ];
    }
}
