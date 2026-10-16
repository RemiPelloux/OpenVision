"use strict";
require.d(exports, {
    H: ()=>u,
    K2: ()=>a,
    XH: ()=>c,
    gD: ()=>l,
    wd: ()=>i
});
var n = require("./module-36038.js"), o = require("./module-8592.js");
class s extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class i extends s {
    constructor(e){
        super(), this.bcIds = [], this.sources = [], this.statuses = [], this.includeTeamWide = !1, this.includeArchived = !1, this.includeTranscript = !1, this.activeSince = "", n.proto3.util.initPartial(e, this);
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
            "FetchCloudAgentDataArgs|4 bc_ids 9*|6 sources 9*|7 statuses 9*|8 include_team_wide 8|9 include_archived 8|10 limit 5?|12 include_transcript 8|13 active_since 9"
        ];
    }
}
class a extends s {
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
            "FetchCloudAgentDataResult|1 success #0 result|2 error #1 result",
            l,
            c
        ];
    }
}
class l extends s {
    constructor(e){
        super(), this.summary = "", this.agentCount = 0, this.writtenPaths = [], this.unavailableBcIds = [], n.proto3.util.initPartial(e, this);
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
            "FetchCloudAgentDataSuccess|1 summary 9|2 agent_count 5|3 written_paths 9*|4 unavailable_bc_ids 9*"
        ];
    }
}
class c extends s {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
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
            "FetchCloudAgentDataError|1 error 9"
        ];
    }
}
class u extends s {
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
            "FetchCloudAgentDataToolCall|1 args #0|2 result #1",
            i,
            a
        ];
    }
}
