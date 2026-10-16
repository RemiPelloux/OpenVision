"use strict";
require.d(exports, {
    F: ()=>m,
    Kc: ()=>a,
    SG: ()=>c,
    T6: ()=>h,
    fw: ()=>f,
    g$: ()=>i,
    kF: ()=>l,
    nF: ()=>u,
    pl: ()=>p,
    uK: ()=>d
});
var n = require("./module-36038.js"), s = require("./module-8592.js");
class o extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class i extends o {
    constructor(e){
        super(), this.path = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new i).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new i).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new i).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(i, e, t);
    }
    static $() {
        return [
            "EditArgs|1 path 9|6 stream_content 9?"
        ];
    }
}
class a extends o {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "EditResult|1 success #0 result|2 file_not_found #1 result|3 read_permission_denied #2 result|4 write_permission_denied #3 result|6 rejected #4 result|7 error #5 result",
            c,
            l,
            u,
            d,
            p,
            m
        ];
    }
}
class c extends o {
    constructor(e){
        super(), this.path = "", this.afterFullFileContent = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new c).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new c).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new c).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(c, e, t);
    }
    static $() {
        return [
            "EditSuccess|1 path 9|3 lines_added 5?|4 lines_removed 5?|5 diff_string 9?|6 before_full_file_content 9?|7 after_full_file_content 9|8 message 9?"
        ];
    }
}
class l extends o {
    constructor(e){
        super(), this.path = "", n.proto3.util.initPartial(e, this);
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
            "EditFileNotFound|1 path 9"
        ];
    }
}
class u extends o {
    constructor(e){
        super(), this.path = "", n.proto3.util.initPartial(e, this);
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
            "EditReadPermissionDenied|1 path 9"
        ];
    }
}
class d extends o {
    constructor(e){
        super(), this.path = "", this.error = "", this.isReadonly = !1, n.proto3.util.initPartial(e, this);
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
            "EditWritePermissionDenied|1 path 9|2 error 9|3 is_readonly 8"
        ];
    }
}
class p extends o {
    constructor(e){
        super(), this.path = "", this.reason = "", n.proto3.util.initPartial(e, this);
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
            "EditRejected|1 path 9|2 reason 9"
        ];
    }
}
class m extends o {
    constructor(e){
        super(), this.path = "", this.error = "", n.proto3.util.initPartial(e, this);
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
            "EditError|1 path 9|2 error 9|5 model_visible_error 9?"
        ];
    }
}
class h extends o {
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
            "EditToolCall|1 args #0|2 result #1",
            i,
            a
        ];
    }
}
class f extends o {
    constructor(e){
        super(), this.streamContentDelta = "", n.proto3.util.initPartial(e, this);
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
            "EditToolCallDelta|1 stream_content_delta 9"
        ];
    }
}
