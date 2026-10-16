"use strict";
require.d(exports, {
    $F: ()=>S,
    Db: ()=>R,
    E4: ()=>_,
    FI: ()=>U,
    HO: ()=>p,
    Hu: ()=>J,
    In: ()=>E,
    W4: ()=>b,
    a: ()=>C,
    jK: ()=>B,
    jn: ()=>L,
    o0: ()=>q,
    pZ: ()=>F,
    rI: ()=>D,
    tD: ()=>T,
    vb: ()=>P
});
var n = require("./module-6038.js"), s = require("./module-3574.js"), i = require("./module-4500.js"), o = require("./module-1180.js"), a = require("./module-8592.js");
const u = "agent.v1.";
class c extends a.HL {
    static get runtime() {
        return (0, a.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return u;
    }
}
var l = (0, a.QT)(n.proto3, u, "TimeoutBehavior", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CANCEL"
    ],
    [
        2,
        "BACKGROUND"
    ]
], 1), m = (0, a.QT)(n.proto3, u, "ShellBackgroundReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "TIMEOUT"
    ],
    [
        2,
        "USER_REQUEST"
    ]
], 1), d = (0, a.QT)(n.proto3, u, "ForceBackgroundShellStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ACCEPTED"
    ],
    [
        2,
        "NOT_FOUND"
    ]
], 1), f = (0, a.QT)(n.proto3, u, "ShellAbortReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USER_ABORT"
    ],
    [
        2,
        "TIMEOUT"
    ]
], 1);
class p extends c {
    constructor(t){
        super(), this.parsingFailed = !1, this.executableCommands = [], this.hasRedirects = !1, this.hasCommandSubstitution = !1, this.redirects = [], n.proto3.util.initPartial(t, this);
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
            "ShellCommandParsingResult|1 parsing_failed 8|2 executable_commands #0*|3 has_redirects 8|4 has_command_substitution 8|5 all_redirects_are_dev_null 8?|6 redirects #1*",
            g,
            A
        ];
    }
}
class h extends c {
    constructor(t){
        super(), this.type = "", this.value = "", n.proto3.util.initPartial(t, this);
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
            "ShellCommandParsingResult.ExecutableCommandArg|1 type 9|2 value 9"
        ];
    }
}
class g extends c {
    constructor(t){
        super(), this.name = "", this.args = [], this.fullText = "", n.proto3.util.initPartial(t, this);
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
            "ShellCommandParsingResult.ExecutableCommand|1 name 9|2 args #0*|3 full_text 9",
            h
        ];
    }
}
class A extends c {
    constructor(t){
        super(), this.operator = "", this.destinationFds = [], this.targetNodeType = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new A).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new A).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new A).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(A, t, e);
    }
    static $() {
        return [
            "ShellCommandParsingResult.Redirect|1 operator 9|2 destination_fds 13*|3 target_node_type 9|4 target_text 9?"
        ];
    }
}
class _ extends c {
    constructor(t){
        super(), this.commands = [], this.suggestedSandboxMode = y.UNSPECIFIED, this.classificationFailed = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_, t, e);
    }
    static $() {
        return [
            "CommandClassifierResult|1 commands #0*|2 suggested_sandbox_mode #1|3 classification_failed 8",
            w,
            y
        ];
    }
}
var y = (0, a.QT)(n.proto3, u, "CommandClassifierResult.SuggestedSandboxMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SANDBOX"
    ],
    [
        2,
        "NO_SANDBOX"
    ],
    [
        3,
        "UNDETERMINED"
    ]
], 1);
class w extends c {
    constructor(t){
        super(), this.name = "", this.arguments = [], this.subcommandTokens = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new w).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new w).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new w).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(w, t, e);
    }
    static $() {
        return [
            "CommandClassifierResult.ClassifiedCommand|1 name 9|2 arguments 9*|3 suggested_allowlist_entry 9?|4 subcommand_tokens 9*"
        ];
    }
}
class S extends c {
    constructor(t){
        super(), this.pattern = "", this.reason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new S).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new S).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new S).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(S, t, e);
    }
    static $() {
        return [
            "ShellOutputNotificationConfig|1 pattern 9|2 reason 9|3 debounce 1?|4 notification_limit 5?"
        ];
    }
}
class J extends c {
    constructor(t){
        super(), this.toolCallId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new J).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new J).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new J).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(J, t, e);
    }
    static $() {
        return [
            "ForceBackgroundShellArgs|1 tool_call_id 9"
        ];
    }
}
class B extends c {
    constructor(t){
        super(), this.status = d.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new B).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new B).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new B).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(B, t, e);
    }
    static $() {
        return [
            "ForceBackgroundShellResult|1 status #0|2 shell_result #1?",
            d,
            b
        ];
    }
}
class E extends c {
    constructor(t){
        super(), this.kind = I.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new E).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new E).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new E).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(E, t, e);
    }
    static $() {
        return [
            "ShellHookApprovalRequirement|1 kind #0|2 reason 9?",
            I
        ];
    }
}
var I = (0, a.QT)(n.proto3, u, "ShellHookApprovalRequirement.Kind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FORCE_PROMPT"
    ]
], 1);
class C extends c {
    constructor(t){
        super(), this.command = "", this.workingDirectory = "", this.timeout = 0, this.toolCallId = "", this.simpleCommands = [], this.hasInputRedirect = !1, this.hasOutputRedirect = !1, this.isBackground = !1, this.skipApproval = !1, this.timeoutBehavior = l.UNSPECIFIED, this.closeStdin = !1, this.adminCommandDenylist = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new C).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new C).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new C).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(C, t, e);
    }
    static $() {
        return [
            "ShellArgs|1 command 9|2 working_directory 9|3 timeout 5|4 tool_call_id 9|5 simple_commands 9*|6 has_input_redirect 8|7 has_output_redirect 8|8 parsing_result #0|9 requested_sandbox_policy #1?|10 file_output_threshold_bytes 4?|11 is_background 8|12 skip_approval 8|13 timeout_behavior #2|14 hard_timeout 5?|15 description 9?|16 classifier_result #3?|17 close_stdin 8|18 output_notification #4?|19 smart_mode_approval #5?|20 hook_approval_requirement #6?|21 conversation_id 9?|22 admin_command_denylist 9*|23 request_id 9?|24 secret_scope_id 9?",
            p,
            s.Mw,
            l,
            _,
            S,
            i.UC,
            E
        ];
    }
}
class b extends c {
    constructor(t){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new b).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new b).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new b).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(b, t, e);
    }
    static $() {
        return [
            "ShellResult|1 success #0 result|2 failure #1 result|3 timeout #2 result|4 rejected #3 result|5 spawn_error #4 result|7 permission_denied #5 result|101 sandbox_policy #6?|102 is_background 8?|103 terminals_folder 9?|104 pid 13?",
            Q,
            M,
            O,
            F,
            $,
            L,
            s.Mw
        ];
    }
}
class k extends c {
    constructor(t){
        super(), this.kind = v.UNSPECIFIED, this.memoryLimitBytes = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new k).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new k).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new k).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(k, t, e);
    }
    static $() {
        return [
            "ShellOomKill|1 kind #0|2 memory_limit_bytes 4",
            v
        ];
    }
}
var v = (0, a.QT)(n.proto3, u, "ShellOomKill.Kind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "COMMAND_KILLED"
    ],
    [
        2,
        "COMMAND_FAILED"
    ],
    [
        3,
        "UNCONFIRMED"
    ]
], 1);
class q extends c {
    constructor(t){
        super(), this.data = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new q).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new q).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new q).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(q, t, e);
    }
    static $() {
        return [
            "ShellStreamStdout|1 data 9"
        ];
    }
}
class R extends c {
    constructor(t){
        super(), this.data = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new R).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new R).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new R).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(R, t, e);
    }
    static $() {
        return [
            "ShellStreamStderr|1 data 9"
        ];
    }
}
class P extends c {
    constructor(t){
        super(), this.code = 0, this.cwd = "", this.aborted = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new P).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new P).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new P).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(P, t, e);
    }
    static $() {
        return [
            "ShellStreamExit|1 code 13|2 cwd 9|3 output_location #0?|4 aborted 8|5 abort_reason #1?|6 local_execution_time_ms 5?|7 oom_kill #2?",
            i.pV,
            f,
            k
        ];
    }
}
class T extends c {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new T).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new T).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new T).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(T, t, e);
    }
    static $() {
        return [
            "ShellStreamStart|1 sandbox_policy #0?",
            s.Mw
        ];
    }
}
class x extends c {
    constructor(t){
        super(), this.shellId = 0, this.command = "", this.workingDirectory = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new x).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new x).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new x).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(x, t, e);
    }
    static $() {
        return [
            "ShellStreamBackgrounded|1 shell_id 13|2 command 9|3 working_directory 9|4 pid 13?|5 ms_to_wait 5?|6 reason #0?",
            m
        ];
    }
}
class N extends c {
    constructor(t){
        super(), this.hookAdditionalContexts = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new N).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new N).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new N).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(N, t, e);
    }
    static $() {
        return [
            "ShellStreamHookContext|1 hook_additional_contexts #0*",
            o.C
        ];
    }
}
class D extends c {
    constructor(t){
        super(), this.command = "", this.workingDirectory = "", this.sandboxPolicyType = "", this.reason = "", this.isReadonly = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new D).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new D).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new D).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(D, t, e);
    }
    static $() {
        return [
            "ShellSandboxUnsupported|1 command 9|2 working_directory 9|3 sandbox_policy_type 9|4 reason 9|5 is_readonly 8"
        ];
    }
}
class U extends c {
    constructor(t){
        super(), this.event = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new U).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new U).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new U).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(U, t, e);
    }
    static $() {
        return [
            "ShellStream|1 stdout #0 event|2 stderr #1 event|3 exit #2 event|4 start #3 event|5 rejected #4 event|6 permission_denied #5 event|7 backgrounded #6 event|8 hook_context #7 event|9 sandbox_unsupported #8 event",
            q,
            R,
            P,
            T,
            F,
            L,
            x,
            N,
            D
        ];
    }
}
class Q extends c {
    constructor(t){
        super(), this.command = "", this.workingDirectory = "", this.exitCode = 0, this.signal = "", this.stdout = "", this.stderr = "", this.executionTime = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Q).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Q).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Q).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Q, t, e);
    }
    static $() {
        return [
            "ShellSuccess|1 command 9|2 working_directory 9|3 exit_code 5|4 signal 9|5 stdout 9|6 stderr 9|7 execution_time 5|8 output_location #0?|9 shell_id 13?|10 interleaved_output 9?|11 pid 13?|12 ms_to_wait 5?|13 local_execution_time_ms 5?|14 background_reason #1?|15 output_head 9?|16 output_tail 9?|17 elided_chars 13?",
            i.pV,
            m
        ];
    }
}
class M extends c {
    constructor(t){
        super(), this.command = "", this.workingDirectory = "", this.exitCode = 0, this.signal = "", this.stdout = "", this.stderr = "", this.executionTime = 0, this.aborted = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new M).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new M).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new M).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(M, t, e);
    }
    static $() {
        return [
            "ShellFailure|1 command 9|2 working_directory 9|3 exit_code 5|4 signal 9|5 stdout 9|6 stderr 9|7 execution_time 5|8 output_location #0?|9 interleaved_output 9?|10 abort_reason #1?|11 aborted 8|12 local_execution_time_ms 5?|13 output_head 9?|14 output_tail 9?|15 elided_chars 13?|16 oom_kill #2?",
            i.pV,
            f,
            k
        ];
    }
}
class O extends c {
    constructor(t){
        super(), this.command = "", this.workingDirectory = "", this.timeoutMs = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new O).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new O).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new O).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(O, t, e);
    }
    static $() {
        return [
            "ShellTimeout|1 command 9|2 working_directory 9|3 timeout_ms 5"
        ];
    }
}
class F extends c {
    constructor(t){
        super(), this.command = "", this.workingDirectory = "", this.reason = "", this.isReadonly = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new F).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new F).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new F).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(F, t, e);
    }
    static $() {
        return [
            "ShellRejected|1 command 9|2 working_directory 9|3 reason 9|4 is_readonly 8"
        ];
    }
}
class L extends c {
    constructor(t){
        super(), this.command = "", this.workingDirectory = "", this.error = "", this.isReadonly = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new L).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new L).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new L).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(L, t, e);
    }
    static $() {
        return [
            "ShellPermissionDenied|1 command 9|2 working_directory 9|3 error 9|4 is_readonly 8"
        ];
    }
}
class $ extends c {
    constructor(t){
        super(), this.command = "", this.workingDirectory = "", this.error = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($, t, e);
    }
    static $() {
        return [
            "ShellSpawnError|1 command 9|2 working_directory 9|3 error 9"
        ];
    }
}
