"use strict";
require.d(exports, {
    $F: ()=>p,
    Kc: ()=>y,
    Kn: ()=>g,
    LM: ()=>b,
    M0: ()=>h,
    YH: ()=>u,
    Yn: ()=>l,
    a4: ()=>_,
    d: ()=>f,
    hR: ()=>d,
    p7: ()=>m,
    tk: ()=>v,
    y_: ()=>w
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
var a = (0, s.QT)(n.proto3, o, "WriteCanvasFailReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "TYPECHECK_FAILED"
    ],
    [
        2,
        "COMPILE_FAILED"
    ],
    [
        3,
        "TOO_LARGE"
    ],
    [
        4,
        "UNAVAILABLE"
    ],
    [
        5,
        "NOT_FOUND"
    ],
    [
        6,
        "REFUSED"
    ]
], 1), c = (0, s.QT)(n.proto3, o, "ReadCanvasFailReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NOT_FOUND"
    ],
    [
        2,
        "UNAVAILABLE"
    ],
    [
        3,
        "REFUSED"
    ],
    [
        4,
        "INVALID_REFERENCE"
    ]
], 1);
class l extends i {
    constructor(e){
        super(), this.line = 0, this.character = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new l).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new l).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new l).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(l, e, t);
    }
    static $() {
        return [
            "CloudCanvasToolDiagnosticPosition|1 line 5|2 character 5"
        ];
    }
}
class u extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new u).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new u).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new u).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(u, e, t);
    }
    static $() {
        return [
            "CloudCanvasToolDiagnosticRange|1 start #0|2 end #0",
            l
        ];
    }
}
class d extends i {
    constructor(e){
        super(), this.message = "", n.proto3.util.initPartial(e, this);
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
            "CloudCanvasToolDiagnostic|1 message 9|2 code 9?|3 severity 5?|4 range #0?",
            u
        ];
    }
}
class p extends i {
    constructor(e){
        super(), this.contents = "", n.proto3.util.initPartial(e, this);
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
            "WriteCanvasArgs|1 contents 9|2 canvas_id 9?|3 title 9?"
        ];
    }
}
class m extends i {
    constructor(e){
        super(), this.canvasId = "", this.url = "", n.proto3.util.initPartial(e, this);
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
            "WriteCanvasSuccess|1 canvas_id 9|2 title 9?|3 url 9"
        ];
    }
}
class h extends i {
    constructor(e){
        super(), this.reason = a.UNSPECIFIED, this.diagnostics = [], n.proto3.util.initPartial(e, this);
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
            "WriteCanvasFailure|1 reason #0|2 diagnostics #1*|3 detail 9?",
            a,
            d
        ];
    }
}
class f extends i {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "WriteCanvasResult|1 success #0 result|2 failure #1 result",
            m,
            h
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
            "WriteCanvasToolCall|1 args #0|2 result #1",
            p,
            f
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
            "ReadCanvasArgs|1 canvas_id 9?|2 url 9?"
        ];
    }
}
class w extends i {
    constructor(e){
        super(), this.canvasId = "", this.url = "", this.source = "", n.proto3.util.initPartial(e, this);
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
            "ReadCanvasSuccess|1 canvas_id 9|2 title 9?|3 url 9|4 source 9"
        ];
    }
}
class v extends i {
    constructor(e){
        super(), this.reason = c.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "ReadCanvasFailure|1 reason #0|2 detail 9?",
            c
        ];
    }
}
class _ extends i {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "ReadCanvasResult|1 success #0 result|2 failure #1 result",
            w,
            v
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
            "ReadCanvasToolCall|1 args #0|2 result #1",
            y,
            _
        ];
    }
}
