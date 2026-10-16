"use strict";
require.d(exports, {
    QM: ()=>d,
    U7: ()=>l,
    bM: ()=>u,
    en: ()=>p,
    hY: ()=>i,
    j6: ()=>c,
    v3: ()=>a
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
        super(), this.path = "", this.fileText = "", this.toolCallId = "", this.returnFileContentAfterWrite = !1, this.fileBytes = new Uint8Array(0), n.proto3.util.initPartial(e, this);
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
            "WriteArgs|1 path 9|2 file_text 9|3 tool_call_id 9|4 return_file_content_after_write 8|5 file_bytes 12|6 encoding_hint 9?"
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
            "WriteResult|1 success #0 result|3 permission_denied #1 result|4 no_space #2 result|5 error #3 result|6 rejected #4 result",
            c,
            l,
            u,
            d,
            p
        ];
    }
}
class c extends o {
    constructor(e){
        super(), this.path = "", this.linesCreated = 0, this.fileSize = 0, n.proto3.util.initPartial(e, this);
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
            "WriteSuccess|1 path 9|2 lines_created 5|3 file_size 5|4 file_content_after_write 9?"
        ];
    }
}
class l extends o {
    constructor(e){
        super(), this.path = "", this.directory = "", this.operation = "", this.error = "", this.isReadonly = !1, n.proto3.util.initPartial(e, this);
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
            "WritePermissionDenied|1 path 9|2 directory 9|3 operation 9|4 error 9|5 is_readonly 8"
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
            "WriteNoSpace|1 path 9"
        ];
    }
}
class d extends o {
    constructor(e){
        super(), this.path = "", this.error = "", n.proto3.util.initPartial(e, this);
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
            "WriteError|1 path 9|2 error 9"
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
            "WriteRejected|1 path 9|2 reason 9"
        ];
    }
}
