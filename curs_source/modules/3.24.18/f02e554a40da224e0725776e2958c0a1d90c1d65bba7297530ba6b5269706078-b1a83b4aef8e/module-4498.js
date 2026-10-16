"use strict";
require.d(exports, {
    $P: ()=>c,
    LL: ()=>f,
    Lt: ()=>l,
    nt: ()=>p
});
var n = require("./module-6038.js"), s = require("./module-2671.js"), i = require("./module-3574.js"), o = require("./module-4500.js"), a = require("./module-8592.js");
class u extends a.HL {
    static get runtime() {
        return (0, a.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class c extends u {
    constructor(t){
        super(), this.command = "", this.workingDirectory = "", this.toolCallId = "", this.enableWriteShellStdinTool = !1, this.skipApproval = !1, this.adminCommandDenylist = [], this.suppressStdinLogging = !1, n.proto3.util.initPartial(t, this);
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
            "BackgroundShellSpawnArgs|1 command 9|2 working_directory 9|3 tool_call_id 9|4 parsing_result #0|5 sandbox_policy #1?|6 enable_write_shell_stdin_tool 8|7 description 9?|8 classifier_result #2?|9 output_notification #3?|10 smart_mode_approval #4?|11 hook_approval_requirement #5?|12 skip_approval 8|13 conversation_id 9?|14 admin_command_denylist 9*|15 request_id 9?|16 suppress_stdin_logging 8|17 secret_scope_id 9?",
            s.HO,
            i.Mw,
            s.E4,
            s.$F,
            o.UC,
            s.In
        ];
    }
}
class l extends u {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new l).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new l).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new l).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(l, t, e);
    }
    static $() {
        return [
            "BackgroundShellSpawnResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 permission_denied #3 result|5 sandbox_unsupported #4 result",
            m,
            d,
            s.pZ,
            s.jn,
            s.rI
        ];
    }
}
class m extends u {
    constructor(t){
        super(), this.shellId = 0, this.command = "", this.workingDirectory = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new m).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new m).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new m).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(m, t, e);
    }
    static $() {
        return [
            "BackgroundShellSpawnSuccess|1 shell_id 13|2 command 9|3 working_directory 9|4 pid 13?"
        ];
    }
}
class d extends u {
    constructor(t){
        super(), this.command = "", this.workingDirectory = "", this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new d).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new d).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new d).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(d, t, e);
    }
    static $() {
        return [
            "BackgroundShellSpawnError|1 command 9|2 working_directory 9|3 error 9"
        ];
    }
}
class f extends u {
    constructor(t){
        super(), this.shellId = 0, this.chars = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new f).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new f).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new f).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(f, t, e);
    }
    static $() {
        return [
            "WriteShellStdinArgs|1 shell_id 13|2 chars 9"
        ];
    }
}
class p extends u {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new p).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new p).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new p).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(p, t, e);
    }
    static $() {
        return [
            "WriteShellStdinResult|1 success #0 result|2 error #1 result",
            h,
            g
        ];
    }
}
class h extends u {
    constructor(t){
        super(), this.shellId = 0, this.terminalFileLengthBeforeInputWritten = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new h).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new h).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new h).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(h, t, e);
    }
    static $() {
        return [
            "WriteShellStdinSuccess|1 shell_id 13|2 terminal_file_length_before_input_written 13"
        ];
    }
}
class g extends u {
    constructor(t){
        super(), this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new g).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new g).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new g).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(g, t, e);
    }
    static $() {
        return [
            "WriteShellStdinError|1 error 9"
        ];
    }
}
