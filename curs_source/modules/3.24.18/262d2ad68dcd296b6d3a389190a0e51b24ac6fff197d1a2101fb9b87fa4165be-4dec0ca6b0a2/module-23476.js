"use strict";
require.d(exports, {
    TO: ()=>u,
    Z_: ()=>a,
    dV: ()=>h,
    ec: ()=>c,
    fv: ()=>d,
    km: ()=>f,
    u1: ()=>l,
    uq: ()=>p,
    us: ()=>m
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
var a = (0, o.QT)(n.proto3, s, "ReplaceEnvMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CUSTOM"
    ],
    [
        2,
        "CLEAN_SLATE"
    ],
    [
        3,
        "DEFAULT"
    ]
], 1);
class l extends i {
    constructor(e){
        super(), this.repoUrl = "", this.ref = "", n.proto3.util.initPartial(e, this);
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
            "RepoCheckoutRefOverride|1 repo_url 9|2 ref 9"
        ];
    }
}
class c extends i {
    constructor(e){
        super(), this.installScript = "", this.dockerfileContents = "", n.proto3.util.initPartial(e, this);
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
            "ReplaceEnvConfig|1 install_script 9|2 dockerfile_contents 9"
        ];
    }
}
class u extends i {
    constructor(e){
        super(), this.mode = a.UNSPECIFIED, this.checkoutRefOverrides = [], n.proto3.util.initPartial(e, this);
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
            "ReplaceEnvArgs|1 config #0|2 mode #1|3 checkout_ref_overrides #2*",
            c,
            a,
            l
        ];
    }
}
class d extends i {
    constructor(e){
        super(), this.setupLogs = "", n.proto3.util.initPartial(e, this);
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
            "ReplaceEnvSuccess|1 setup_logs 9"
        ];
    }
}
class p extends i {
    constructor(e){
        super(), this.errorMessage = "", this.setupLogs = "", n.proto3.util.initPartial(e, this);
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
            "ReplaceEnvFailure|1 error_message 9|2 setup_logs 9"
        ];
    }
}
class h extends i {
    constructor(e){
        super(), this.result = {
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
            "ReplaceEnvResult|1 success #0 result|2 failure #1 result",
            d,
            p
        ];
    }
}
class m extends i {
    constructor(e){
        super(), this.associatedPodKey = "", n.proto3.util.initPartial(e, this);
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
            "ReplaceEnvToolCall|1 args #0|2 result #1|3 associated_pod_key 9",
            u,
            h
        ];
    }
}
class f extends i {
    constructor(e){
        super(), this.associatedPodKey = "", n.proto3.util.initPartial(e, this);
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
            "ReplaceEnvToolCallDelta|1 associated_pod_key 9"
        ];
    }
}
