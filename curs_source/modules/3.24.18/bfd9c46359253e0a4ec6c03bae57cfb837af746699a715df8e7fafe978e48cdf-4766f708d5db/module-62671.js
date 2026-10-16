"use strict";
require.d(exports, {
    $F: ()=>b,
    Db: ()=>R,
    E4: ()=>w,
    FI: ()=>q,
    HO: ()=>h,
    Hu: ()=>S,
    In: ()=>x,
    Jg: ()=>d,
    Lv: ()=>m,
    Ng: ()=>B,
    Pv: ()=>g,
    QR: ()=>N,
    R_: ()=>P,
    W4: ()=>T,
    Y9: ()=>O,
    _d: ()=>u,
    a: ()=>I,
    b: ()=>E,
    eG: ()=>U,
    iA: ()=>p,
    iH: ()=>C,
    jK: ()=>k,
    jn: ()=>$,
    mJ: ()=>j,
    mW: ()=>y,
    nD: ()=>_,
    o0: ()=>A,
    pZ: ()=>L,
    r6: ()=>f,
    rI: ()=>D,
    sw: ()=>v,
    tD: ()=>J,
    vb: ()=>M,
    xC: ()=>F
});
var n = require("./module-36038.js"), s = require("./module-13574.js"), o = require("./module-64500.js"), i = require("./module-21180.js"), a = require("./module-8592.js");
const c = "agent.v1.";
class l extends a.HL {
    static get runtime() {
        return (0, a.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return c;
    }
}
var u = (0, a.QT)(n.proto3, c, "TimeoutBehavior", [
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
], 1), d = (0, a.QT)(n.proto3, c, "ShellBackgroundReason", [
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
], 1), p = (0, a.QT)(n.proto3, c, "ForceBackgroundShellStatus", [
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
], 1), m = (0, a.QT)(n.proto3, c, "ShellAbortReason", [
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
class h extends l {
    constructor(e){
        super(), this.parsingFailed = !1, this.executableCommands = [], this.hasRedirects = !1, this.hasCommandSubstitution = !1, this.redirects = [], n.proto3.util.initPartial(e, this);
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
            "ShellCommandParsingResult|1 parsing_failed 8|2 executable_commands #0*|3 has_redirects 8|4 has_command_substitution 8|5 all_redirects_are_dev_null 8?|6 redirects #1*",
            g,
            y
        ];
    }
}
class f extends l {
    constructor(e){
        super(), this.type = "", this.value = "", n.proto3.util.initPartial(e, this);
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
            "ShellCommandParsingResult.ExecutableCommandArg|1 type 9|2 value 9"
        ];
    }
}
class g extends l {
    constructor(e){
        super(), this.name = "", this.args = [], this.fullText = "", n.proto3.util.initPartial(e, this);
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
            "ShellCommandParsingResult.ExecutableCommand|1 name 9|2 args #0*|3 full_text 9",
            f
        ];
    }
}
class y extends l {
    constructor(e){
        super(), this.operator = "", this.destinationFds = [], this.targetNodeType = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new y).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new y).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new y).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(y, e, t);
    }
    static $() {
        return [
            "ShellCommandParsingResult.Redirect|1 operator 9|2 destination_fds 13*|3 target_node_type 9|4 target_text 9?"
        ];
    }
}
class w extends l {
    constructor(e){
        super(), this.commands = [], this.suggestedSandboxMode = v.UNSPECIFIED, this.classificationFailed = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new w).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new w).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new w).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(w, e, t);
    }
    static $() {
        return [
            "CommandClassifierResult|1 commands #0*|2 suggested_sandbox_mode #1|3 classification_failed 8",
            _,
            v
        ];
    }
}
var v = (0, a.QT)(n.proto3, c, "CommandClassifierResult.SuggestedSandboxMode", [
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
class _ extends l {
    constructor(e){
        super(), this.name = "", this.arguments = [], this.subcommandTokens = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_, e, t);
    }
    static $() {
        return [
            "CommandClassifierResult.ClassifiedCommand|1 name 9|2 arguments 9*|3 suggested_allowlist_entry 9?|4 subcommand_tokens 9*"
        ];
    }
}
class b extends l {
    constructor(e){
        super(), this.pattern = "", this.reason = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new b).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new b).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new b).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(b, e, t);
    }
    static $() {
        return [
            "ShellOutputNotificationConfig|1 pattern 9|2 reason 9|3 debounce 1?|4 notification_limit 5?"
        ];
    }
}
class S extends l {
    constructor(e){
        super(), this.toolCallId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new S).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new S).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new S).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(S, e, t);
    }
    static $() {
        return [
            "ForceBackgroundShellArgs|1 tool_call_id 9"
        ];
    }
}
class k extends l {
    constructor(e){
        super(), this.status = p.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new k).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new k).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new k).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(k, e, t);
    }
    static $() {
        return [
            "ForceBackgroundShellResult|1 status #0|2 shell_result #1?",
            p,
            T
        ];
    }
}
class x extends l {
    constructor(e){
        super(), this.kind = E.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new x).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new x).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new x).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(x, e, t);
    }
    static $() {
        return [
            "ShellHookApprovalRequirement|1 kind #0|2 reason 9?",
            E
        ];
    }
}
var E = (0, a.QT)(n.proto3, c, "ShellHookApprovalRequirement.Kind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FORCE_PROMPT"
    ]
], 1);
class I extends l {
    constructor(e){
        super(), this.command = "", this.workingDirectory = "", this.timeout = 0, this.toolCallId = "", this.simpleCommands = [], this.hasInputRedirect = !1, this.hasOutputRedirect = !1, this.isBackground = !1, this.skipApproval = !1, this.timeoutBehavior = u.UNSPECIFIED, this.closeStdin = !1, this.adminCommandDenylist = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new I).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new I).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new I).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(I, e, t);
    }
    static $() {
        return [
            "ShellArgs|1 command 9|2 working_directory 9|3 timeout 5|4 tool_call_id 9|5 simple_commands 9*|6 has_input_redirect 8|7 has_output_redirect 8|8 parsing_result #0|9 requested_sandbox_policy #1?|10 file_output_threshold_bytes 4?|11 is_background 8|12 skip_approval 8|13 timeout_behavior #2|14 hard_timeout 5?|15 description 9?|16 classifier_result #3?|17 close_stdin 8|18 output_notification #4?|19 smart_mode_approval #5?|20 hook_approval_requirement #6?|21 conversation_id 9?|22 admin_command_denylist 9*|23 request_id 9?|24 secret_scope_id 9?",
            h,
            s.Mw,
            u,
            w,
            b,
            o.UC,
            x
        ];
    }
}
class T extends l {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new T).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new T).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new T).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(T, e, t);
    }
    static $() {
        return [
            "ShellResult|1 success #0 result|2 failure #1 result|3 timeout #2 result|4 rejected #3 result|5 spawn_error #4 result|7 permission_denied #5 result|101 sandbox_policy #6?|102 is_background 8?|103 terminals_folder 9?|104 pid 13?",
            N,
            F,
            U,
            L,
            j,
            $,
            s.Mw
        ];
    }
}
class C extends l {
    constructor(e){
        super(), this.kind = P.UNSPECIFIED, this.memoryLimitBytes = n.protoInt64.zero, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new C).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new C).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new C).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(C, e, t);
    }
    static $() {
        return [
            "ShellOomKill|1 kind #0|2 memory_limit_bytes 4",
            P
        ];
    }
}
var P = (0, a.QT)(n.proto3, c, "ShellOomKill.Kind", [
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
class A extends l {
    constructor(e){
        super(), this.data = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new A).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new A).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new A).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(A, e, t);
    }
    static $() {
        return [
            "ShellStreamStdout|1 data 9"
        ];
    }
}
class R extends l {
    constructor(e){
        super(), this.data = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new R).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new R).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new R).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(R, e, t);
    }
    static $() {
        return [
            "ShellStreamStderr|1 data 9"
        ];
    }
}
class M extends l {
    constructor(e){
        super(), this.code = 0, this.cwd = "", this.aborted = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new M).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new M).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new M).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(M, e, t);
    }
    static $() {
        return [
            "ShellStreamExit|1 code 13|2 cwd 9|3 output_location #0?|4 aborted 8|5 abort_reason #1?|6 local_execution_time_ms 5?|7 oom_kill #2?",
            o.pV,
            m,
            C
        ];
    }
}
class J extends l {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new J).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new J).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new J).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(J, e, t);
    }
    static $() {
        return [
            "ShellStreamStart|1 sandbox_policy #0?",
            s.Mw
        ];
    }
}
class O extends l {
    constructor(e){
        super(), this.shellId = 0, this.command = "", this.workingDirectory = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new O).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new O).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new O).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(O, e, t);
    }
    static $() {
        return [
            "ShellStreamBackgrounded|1 shell_id 13|2 command 9|3 working_directory 9|4 pid 13?|5 ms_to_wait 5?|6 reason #0?",
            d
        ];
    }
}
class B extends l {
    constructor(e){
        super(), this.hookAdditionalContexts = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new B).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new B).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new B).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(B, e, t);
    }
    static $() {
        return [
            "ShellStreamHookContext|1 hook_additional_contexts #0*",
            i.C
        ];
    }
}
class D extends l {
    constructor(e){
        super(), this.command = "", this.workingDirectory = "", this.sandboxPolicyType = "", this.reason = "", this.isReadonly = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new D).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new D).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new D).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(D, e, t);
    }
    static $() {
        return [
            "ShellSandboxUnsupported|1 command 9|2 working_directory 9|3 sandbox_policy_type 9|4 reason 9|5 is_readonly 8"
        ];
    }
}
class q extends l {
    constructor(e){
        super(), this.event = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new q).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new q).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new q).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(q, e, t);
    }
    static $() {
        return [
            "ShellStream|1 stdout #0 event|2 stderr #1 event|3 exit #2 event|4 start #3 event|5 rejected #4 event|6 permission_denied #5 event|7 backgrounded #6 event|8 hook_context #7 event|9 sandbox_unsupported #8 event",
            A,
            R,
            M,
            J,
            L,
            $,
            O,
            B,
            D
        ];
    }
}
class N extends l {
    constructor(e){
        super(), this.command = "", this.workingDirectory = "", this.exitCode = 0, this.signal = "", this.stdout = "", this.stderr = "", this.executionTime = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new N).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new N).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new N).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(N, e, t);
    }
    static $() {
        return [
            "ShellSuccess|1 command 9|2 working_directory 9|3 exit_code 5|4 signal 9|5 stdout 9|6 stderr 9|7 execution_time 5|8 output_location #0?|9 shell_id 13?|10 interleaved_output 9?|11 pid 13?|12 ms_to_wait 5?|13 local_execution_time_ms 5?|14 background_reason #1?|15 output_head 9?|16 output_tail 9?|17 elided_chars 13?",
            o.pV,
            d
        ];
    }
}
class F extends l {
    constructor(e){
        super(), this.command = "", this.workingDirectory = "", this.exitCode = 0, this.signal = "", this.stdout = "", this.stderr = "", this.executionTime = 0, this.aborted = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new F).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new F).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new F).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(F, e, t);
    }
    static $() {
        return [
            "ShellFailure|1 command 9|2 working_directory 9|3 exit_code 5|4 signal 9|5 stdout 9|6 stderr 9|7 execution_time 5|8 output_location #0?|9 interleaved_output 9?|10 abort_reason #1?|11 aborted 8|12 local_execution_time_ms 5?|13 output_head 9?|14 output_tail 9?|15 elided_chars 13?|16 oom_kill #2?",
            o.pV,
            m,
            C
        ];
    }
}
class U extends l {
    constructor(e){
        super(), this.command = "", this.workingDirectory = "", this.timeoutMs = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new U).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new U).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new U).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(U, e, t);
    }
    static $() {
        return [
            "ShellTimeout|1 command 9|2 working_directory 9|3 timeout_ms 5"
        ];
    }
}
class L extends l {
    constructor(e){
        super(), this.command = "", this.workingDirectory = "", this.reason = "", this.isReadonly = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new L).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new L).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new L).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(L, e, t);
    }
    static $() {
        return [
            "ShellRejected|1 command 9|2 working_directory 9|3 reason 9|4 is_readonly 8"
        ];
    }
}
class $ extends l {
    constructor(e){
        super(), this.command = "", this.workingDirectory = "", this.error = "", this.isReadonly = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($, e, t);
    }
    static $() {
        return [
            "ShellPermissionDenied|1 command 9|2 working_directory 9|3 error 9|4 is_readonly 8"
        ];
    }
}
class j extends l {
    constructor(e){
        super(), this.command = "", this.workingDirectory = "", this.error = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new j).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new j).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new j).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(j, e, t);
    }
    static $() {
        return [
            "ShellSpawnError|1 command 9|2 working_directory 9|3 error 9"
        ];
    }
}
