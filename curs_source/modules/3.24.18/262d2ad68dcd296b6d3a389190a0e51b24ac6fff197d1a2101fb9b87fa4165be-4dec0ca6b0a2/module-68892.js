"use strict";
require.d(exports, {
    OU: ()=>i,
    WW: ()=>l,
    Ww: ()=>m,
    dE: ()=>p,
    ju: ()=>a,
    ox: ()=>f,
    pq: ()=>c,
    tz: ()=>d,
    wh: ()=>h,
    yt: ()=>u
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
        super(), n.proto3.util.initPartial(e, this);
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
            "AskQuestionToolCall|1 args #0|2 result #1",
            a,
            d
        ];
    }
}
class a extends s {
    constructor(e){
        super(), this.title = "", this.questions = [], this.runAsync = !1, this.asyncOriginalToolCallId = "", n.proto3.util.initPartial(e, this);
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
            "AskQuestionArgs|1 title 9|2 questions #0*|5 run_async 8|6 async_original_tool_call_id 9",
            l
        ];
    }
}
class l extends s {
    constructor(e){
        super(), this.id = "", this.prompt = "", this.options = [], this.allowMultiple = !1, n.proto3.util.initPartial(e, this);
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
            "AskQuestionArgs.Question|1 id 9|2 prompt 9|3 options #0*|4 allow_multiple 8",
            c
        ];
    }
}
class c extends s {
    constructor(e){
        super(), this.id = "", this.label = "", n.proto3.util.initPartial(e, this);
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
            "AskQuestionArgs.Option|1 id 9|2 label 9"
        ];
    }
}
class u extends s {
    constructor(e){
        super(), this.interactionId = "", n.proto3.util.initPartial(e, this);
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
            "AskQuestionAsync|1 interaction_id 9"
        ];
    }
}
class d extends s {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "AskQuestionResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 async #3 result",
            p,
            m,
            f,
            u
        ];
    }
}
class p extends s {
    constructor(e){
        super(), this.answers = [], n.proto3.util.initPartial(e, this);
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
            "AskQuestionSuccess|1 answers #0*",
            h
        ];
    }
}
class h extends s {
    constructor(e){
        super(), this.questionId = "", this.selectedOptionIds = [], this.freeformText = "", n.proto3.util.initPartial(e, this);
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
            "AskQuestionSuccess.Answer|1 question_id 9|2 selected_option_ids 9*|3 freeform_text 9"
        ];
    }
}
class m extends s {
    constructor(e){
        super(), this.errorMessage = "", n.proto3.util.initPartial(e, this);
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
            "AskQuestionError|1 error_message 9"
        ];
    }
}
class f extends s {
    constructor(e){
        super(), this.reason = "", n.proto3.util.initPartial(e, this);
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
            "AskQuestionRejected|1 reason 9"
        ];
    }
}
