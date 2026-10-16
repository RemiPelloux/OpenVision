"use strict";
require.d(exports, {
    i9: ()=>c
});
var n = require("./module-6038.js"), s = require("./module-8592.js");
class i extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "aiserver.v1.";
    }
}
class o extends i {
    constructor(t){
        super(), this.line = 0, this.character = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new o).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new o).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new o).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(o, t, e);
    }
    static $() {
        return [
            "LspSubgraphPosition|1 line 5|2 character 5"
        ];
    }
}
class a extends i {
    constructor(t){
        super(), this.startLine = 0, this.startCharacter = 0, this.endLine = 0, this.endCharacter = 0, n.proto3.util.initPartial(t, this);
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
            "LspSubgraphRange|1 start_line 5|2 start_character 5|3 end_line 5|4 end_character 5"
        ];
    }
}
class u extends i {
    constructor(t){
        super(), this.type = "", this.content = "", n.proto3.util.initPartial(t, this);
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
            "LspSubgraphContextItem|1 uri 9?|2 type 9|3 content 9|4 range #0?",
            a
        ];
    }
}
class c extends i {
    constructor(t){
        super(), this.uri = "", this.symbolName = "", this.positions = [], this.contextItems = [], this.score = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new c).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new c).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new c).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(c, t, e);
    }
    static $() {
        return [
            "LspSubgraphFullContext|1 uri 9|2 symbol_name 9|3 positions #0*|4 context_items #1*|5 score 2",
            o,
            u
        ];
    }
}
