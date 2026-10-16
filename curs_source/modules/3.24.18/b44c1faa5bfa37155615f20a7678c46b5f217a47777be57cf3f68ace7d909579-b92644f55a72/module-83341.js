"use strict";
require.d(exports, {
    i9: ()=>l
});
var n = require("./module-36038.js"), s = require("./module-8592.js");
class o extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "aiserver.v1.";
    }
}
class i extends o {
    constructor(e){
        super(), this.line = 0, this.character = 0, n.proto3.util.initPartial(e, this);
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
            "LspSubgraphPosition|1 line 5|2 character 5"
        ];
    }
}
class a extends o {
    constructor(e){
        super(), this.startLine = 0, this.startCharacter = 0, this.endLine = 0, this.endCharacter = 0, n.proto3.util.initPartial(e, this);
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
            "LspSubgraphRange|1 start_line 5|2 start_character 5|3 end_line 5|4 end_character 5"
        ];
    }
}
class c extends o {
    constructor(e){
        super(), this.type = "", this.content = "", n.proto3.util.initPartial(e, this);
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
            "LspSubgraphContextItem|1 uri 9?|2 type 9|3 content 9|4 range #0?",
            a
        ];
    }
}
class l extends o {
    constructor(e){
        super(), this.uri = "", this.symbolName = "", this.positions = [], this.contextItems = [], this.score = 0, n.proto3.util.initPartial(e, this);
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
            "LspSubgraphFullContext|1 uri 9|2 symbol_name 9|3 positions #0*|4 context_items #1*|5 score 2",
            i,
            c
        ];
    }
}
