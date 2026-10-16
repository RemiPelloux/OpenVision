"use strict";
require.d(exports, {
    $P: ()=>l,
    Gv: ()=>g,
    LL: ()=>m,
    Lt: ()=>u,
    Of: ()=>p,
    Po: ()=>d,
    nt: ()=>h,
    tR: ()=>f
});
var n = require("./module-36038.js"), s = require("./module-62671.js"), o = require("./module-13574.js"), i = require("./module-64500.js"), a = require("./module-8592.js");
class c extends a.HL {
    static get runtime() {
        return (0, a.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class l extends c {
    constructor(e){
        super(), this.command = "", this.workingDirectory = "", this.toolCallId = "", this.enableWriteShellStdinTool = !1, this.skipApproval = !1, this.adminCommandDenylist = [], this.suppressStdinLogging = !1, n.proto3.util.initPartial(e, this);
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
            "BackgroundShellSpawnArgs|1 command 9|2 working_directory 9|3 tool_call_id 9|4 parsing_result #0|5 sandbox_policy #1?|6 enable_write_shell_stdin_tool 8|7 description 9?|8 classifier_result #2?|9 output_notification #3?|10 smart_mode_approval #4?|11 hook_approval_requirement #5?|12 skip_approval 8|13 conversation_id 9?|14 admin_command_denylist 9*|15 request_id 9?|16 suppress_stdin_logging 8|17 secret_scope_id 9?",
            s.HO,
            o.Mw,
            s.E4,
            s.$F,
            i.UC,
            s.In
        ];
    }
}
class u extends c {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "BackgroundShellSpawnResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 permission_denied #3 result|5 sandbox_unsupported #4 result",
            d,
            p,
            s.pZ,
            s.jn,
            s.rI
        ];
    }
}
class d extends c {
    constructor(e){
        super(), this.shellId = 0, this.command = "", this.workingDirectory = "", n.proto3.util.initPartial(e, this);
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
            "BackgroundShellSpawnSuccess|1 shell_id 13|2 command 9|3 working_directory 9|4 pid 13?"
        ];
    }
}
class p extends c {
    constructor(e){
        super(), this.command = "", this.workingDirectory = "", this.error = "", n.proto3.util.initPartial(e, this);
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
            "BackgroundShellSpawnError|1 command 9|2 working_directory 9|3 error 9"
        ];
    }
}
class m extends c {
    constructor(e){
        super(), this.shellId = 0, this.chars = "", n.proto3.util.initPartial(e, this);
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
            "WriteShellStdinArgs|1 shell_id 13|2 chars 9"
        ];
    }
}
class h extends c {
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
            "WriteShellStdinResult|1 success #0 result|2 error #1 result",
            f,
            g
        ];
    }
}
class f extends c {
    constructor(e){
        super(), this.shellId = 0, this.terminalFileLengthBeforeInputWritten = 0, n.proto3.util.initPartial(e, this);
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
            "WriteShellStdinSuccess|1 shell_id 13|2 terminal_file_length_before_input_written 13"
        ];
    }
}
class g extends c {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
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
            "WriteShellStdinError|1 error 9"
        ];
    }
}
