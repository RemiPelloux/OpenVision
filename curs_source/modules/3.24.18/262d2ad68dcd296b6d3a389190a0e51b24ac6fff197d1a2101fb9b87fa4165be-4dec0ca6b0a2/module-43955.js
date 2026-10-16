"use strict";
require.d(exports, {
    DX: ()=>h,
    Xo: ()=>u,
    _u: ()=>d,
    f5: ()=>p,
    gv: ()=>a,
    i9: ()=>l,
    uT: ()=>c
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
var a = (0, o.QT)(n.proto3, s, "CursorRuleSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "TEAM"
    ],
    [
        2,
        "USER"
    ]
], 1);
class l extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "CursorRuleTypeGlobal"
        ];
    }
}
class c extends i {
    constructor(e){
        super(), this.globs = [], n.proto3.util.initPartial(e, this);
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
            "CursorRuleTypeFileGlobs|1 globs 9*"
        ];
    }
}
class u extends i {
    constructor(e){
        super(), this.description = "", n.proto3.util.initPartial(e, this);
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
            "CursorRuleTypeAgentFetched|1 description 9"
        ];
    }
}
class d extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "CursorRuleTypeManuallyAttached"
        ];
    }
}
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
            "CursorRuleType|1 global #0 type|2 file_globbed #1 type|3 agent_fetched #2 type|4 manually_attached #3 type",
            l,
            c,
            u,
            d
        ];
    }
}
class h extends i {
    constructor(e){
        super(), this.fullPath = "", this.content = "", this.source = a.UNSPECIFIED, this.environments = [], this.disabledEnvironments = [], this.scopedTo = [], this.frontmatter = "", n.proto3.util.initPartial(e, this);
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
            "CursorRule|1 full_path 9|2 content 9|3 type #0|4 source #1|5 git_remote_origin 9?|6 parse_error 9?|7 environments 9*|8 disabled_environments 9*|9 plugin 9?|10 marketplace 9?|11 plugin_id 9?|12 marketplace_id 9?|13 scoped_to 9*|14 frontmatter 9|15 is_required 8?",
            p,
            a
        ];
    }
}
