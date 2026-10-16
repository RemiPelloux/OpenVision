"use strict";
require.d(exports, {
    Cr: ()=>c,
    Fl: ()=>l,
    HC: ()=>d,
    gl: ()=>u
});
var n = require("./module-36038.js"), s = require("./module-67918.js"), o = require("./module-8592.js");
const i = "aiserver.v1.";
class a extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return i;
    }
}
n.proto3, n.proto3, n.proto3;
class c extends a {
    constructor(e){
        super(), this.file = "", this.startLine = 0, this.endLine = 0, this.codeLines = [], n.proto3.util.initPartial(e, this);
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
            "BugLocation|1 file 9|2 start_line 5|3 end_line 5|4 code_lines 9*"
        ];
    }
}
class l extends a {
    constructor(e){
        super(), this.locations = [], this.id = "", this.description = "", n.proto3.util.initPartial(e, this);
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
            "BugReport|1 locations #0*|2 id 9|3 description 9|4 confidence 2?|5 category 9?|6 severity 9?|7 title 9?|9 rationale 9?|10 triggered_by_rule_id 9?|11 model_confidence 2?",
            c
        ];
    }
}
class u extends a {
    constructor(e){
        super(), this.bugReports = [], n.proto3.util.initPartial(e, this);
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
            "BugReports|1 bug_reports #0*",
            l
        ];
    }
}
class d extends a {
    constructor(e){
        super(), this.contextFiles = [], this.inBackgroundSubsidized = !1, this.hasTelemetry = !1, n.proto3.util.initPartial(e, this);
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
            "StreamBugBotRequest|1 git_diff #0|13 context_files #1*|2 model_details #2|3 user_instructions 9?|4 bug_detection_guidelines 9?|5 iterations 5?|12 unified_context_lines 5?|6 in_background_subsidized 8|7 session_id 9?|8 price_id 9?|9 has_telemetry 8|10 constrain_to_file 9?|11 constrain_to_range #3?|14 deep_review 8?",
            s.GitDiff,
            s.CodeBlock,
            s.ModelDetails,
            p
        ];
    }
}
class p extends a {
    constructor(e){
        super(), this.startLine = 0, this.endLineInclusive = 0, n.proto3.util.initPartial(e, this);
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
            "StreamBugBotRequest.Range|1 start_line 5|2 end_line_inclusive 5"
        ];
    }
}
