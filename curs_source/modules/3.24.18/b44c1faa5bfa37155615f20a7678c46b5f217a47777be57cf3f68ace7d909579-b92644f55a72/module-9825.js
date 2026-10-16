"use strict";
require.d(exports, {
    Ek: ()=>P,
    Gn: ()=>c,
    Km: ()=>x
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
class c extends a {
    constructor(e){
        super(), this.type = l.UNSPECIFIED, this.data = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityRequest|1 type #0|2 loop_on_lints #1 data|3 loop_on_tests #2 data|4 mega_planner #3 data|5 loop_on_command #4 data|6 tool_call #5 data|7 diff_review #6 data|8 context_picking #7 data|9 edit_trail #8 data|10 auto_context #9 data|11 context_planner #10 data|12 remember_this #11 data|13 decomposer #12 data|14 cursor_rules #13 data",
            l,
            m,
            h,
            f,
            g,
            y,
            w,
            S,
            b,
            E,
            I,
            C,
            A,
            k
        ];
    }
}
var l = (0, o.QT)(n.proto3, i, "ComposerCapabilityRequest.ComposerCapabilityType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "LOOP_ON_LINTS"
    ],
    [
        2,
        "LOOP_ON_TESTS"
    ],
    [
        3,
        "MEGA_PLANNER"
    ],
    [
        4,
        "LOOP_ON_COMMAND"
    ],
    [
        5,
        "TOOL_CALL"
    ],
    [
        6,
        "DIFF_REVIEW"
    ],
    [
        7,
        "CONTEXT_PICKING"
    ],
    [
        8,
        "EDIT_TRAIL"
    ],
    [
        9,
        "AUTO_CONTEXT"
    ],
    [
        10,
        "CONTEXT_PLANNER"
    ],
    [
        11,
        "DIFF_HISTORY"
    ],
    [
        12,
        "REMEMBER_THIS"
    ],
    [
        13,
        "DECOMPOSER"
    ],
    [
        14,
        "USES_CODEBASE"
    ],
    [
        15,
        "TOOL_FORMER"
    ],
    [
        16,
        "CURSOR_RULES"
    ],
    [
        17,
        "TOKEN_COUNTER"
    ],
    [
        18,
        "USAGE_DATA"
    ],
    [
        19,
        "CHIMES"
    ],
    [
        20,
        "CODE_DECAY_TRACKER"
    ],
    [
        21,
        "BACKGROUND_COMPOSER"
    ],
    [
        22,
        "SUMMARIZATION"
    ],
    [
        23,
        "AI_CODE_TRACKING"
    ],
    [
        24,
        "QUEUING"
    ],
    [
        25,
        "MEMORIES"
    ],
    [
        26,
        "RCP_LOGS"
    ],
    [
        27,
        "KNOWLEDGE_FETCH"
    ],
    [
        28,
        "SLACK_INTEGRATION"
    ],
    [
        29,
        "SUB_COMPOSER"
    ],
    [
        30,
        "THINKING"
    ],
    [
        31,
        "CONTEXT_WINDOW"
    ],
    [
        32,
        "ONLINE_METRICS"
    ],
    [
        33,
        "NOTIFICATIONS"
    ],
    [
        34,
        "SPEC"
    ],
    [
        35,
        "BROWSER_AGENT"
    ]
], 1), u = (0, o.QT)(n.proto3, i, "ComposerCapabilityRequest.ToolType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ADD_FILE_TO_CONTEXT"
    ],
    [
        3,
        "ITERATE"
    ],
    [
        4,
        "REMOVE_FILE_FROM_CONTEXT"
    ],
    [
        5,
        "SEMANTIC_SEARCH_CODEBASE"
    ]
], 1);
class d extends a {
    constructor(e){
        super(), this.type = u.UNSPECIFIED, this.name = "", this.properties = {}, this.required = [], n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityRequest.ToolSchema|1 type #0|2 name 9|3 properties 9,#1|4 required 9*",
            u,
            p
        ];
    }
}
class p extends a {
    constructor(e){
        super(), this.type = "", n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityRequest.SchemaProperty|1 type 9|2 description 9?"
        ];
    }
}
class m extends a {
    constructor(e){
        super(), this.linterErrors = [], n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityRequest.LoopOnLintsCapability|1 linter_errors #0*|2 custom_instructions 9?",
            s.LinterErrors
        ];
    }
}
class h extends a {
    constructor(e){
        super(), this.testNames = [], n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityRequest.LoopOnTestsCapability|1 test_names 9*|2 custom_instructions 9?"
        ];
    }
}
class f extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityRequest.MegaPlannerCapability|1 custom_instructions 9?"
        ];
    }
}
class g extends a {
    constructor(e){
        super(), this.command = "", n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityRequest.LoopOnCommandCapability|1 command 9|2 custom_instructions 9?|3 output 9?|4 exit_code 5?"
        ];
    }
}
class y extends a {
    constructor(e){
        super(), this.toolSchemas = [], this.relevantFiles = [], this.filesInContext = [], this.semanticSearchFiles = [], n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityRequest.ToolCallCapability|1 custom_instructions 9?|2 tool_schemas #0*|3 relevant_files 9*|4 files_in_context 9*|5 semantic_search_files 9*",
            d
        ];
    }
}
class w extends a {
    constructor(e){
        super(), this.diffs = [], n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityRequest.DiffReviewCapability|1 custom_instructions 9?|2 diffs #0*",
            v
        ];
    }
}
class v extends a {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.chunks = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new v).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new v).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new v).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(v, e, t);
    }
    static $() {
        return [
            "ComposerCapabilityRequest.DiffReviewCapability.SimpleFileDiff|1 relative_workspace_path 9|3 chunks #0*",
            _
        ];
    }
}
class _ extends a {
    constructor(e){
        super(), this.oldLines = [], this.newLines = [], n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityRequest.DiffReviewCapability.SimpleFileDiff.Chunk|1 old_lines 9*|2 new_lines 9*|3 old_range #0|4 new_range #0",
            s.LineRange
        ];
    }
}
class A extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityRequest.DecomposerCapability|1 custom_instructions 9?"
        ];
    }
}
class S extends a {
    constructor(e){
        super(), this.potentialContextFiles = [], this.potentialContextCodeChunks = [], this.filesInContext = [], n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityRequest.ContextPickingCapability|1 custom_instructions 9?|2 potential_context_files 9*|3 potential_context_code_chunks #0*|4 files_in_context 9*",
            s.CodeChunk
        ];
    }
}
class b extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityRequest.EditTrailCapability|1 custom_instructions 9?"
        ];
    }
}
class E extends a {
    constructor(e){
        super(), this.additionalFiles = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new E).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new E).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new E).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(E, e, t);
    }
    static $() {
        return [
            "ComposerCapabilityRequest.AutoContextCapability|1 custom_instructions 9?|2 additional_files 9*"
        ];
    }
}
class I extends a {
    constructor(e){
        super(), this.attachedCodeChunks = [], n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityRequest.ContextPlannerCapability|1 custom_instructions 9?|2 attached_code_chunks #0*",
            s.CodeChunk
        ];
    }
}
class C extends a {
    constructor(e){
        super(), this.memory = "", n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityRequest.RememberThisCapability|1 custom_instructions 9?|2 memory 9"
        ];
    }
}
class k extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityRequest.CursorRulesCapability|1 custom_instructions 9?"
        ];
    }
}
class x extends a {
    constructor(e){
        super(), this.data = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityContext|27 slack_integration #0 data|28 github_pr #1 data|29 microsoft_teams_integration #2 data",
            T,
            B,
            R
        ];
    }
}
class T extends a {
    constructor(e){
        super(), this.thread = "", n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityContext.SlackIntegrationContext|1 thread 9|2 channel_name 9?|3 channel_purpose 9?|4 channel_topic 9?|5 sender_name 9?|6 sender_id 9?|7 sender_type 9?|8 is_directly_addressed 8?"
        ];
    }
}
class R extends a {
    constructor(e){
        super(), this.thread = "", n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityContext.MicrosoftTeamsIntegrationContext|1 thread 9|2 channel_name 9?|3 team_name 9?|4 channel_description 9?|5 team_description 9?"
        ];
    }
}
class B extends a {
    constructor(e){
        super(), this.title = "", this.description = "", this.comments = "", n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityContext.GithubPRContext|1 title 9|2 description 9|3 comments 9|4 ci_failures 9?|5 code_tour_context #0|6 conflict_resolution #1",
            P,
            J
        ];
    }
}
class P extends a {
    constructor(e){
        super(), this.changeId = "", this.headSha = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new P).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new P).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new P).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(P, e, t);
    }
    static $() {
        return [
            "ComposerCapabilityContext.GithubPRContext.CodeTourContext|1 change_id 9|2 head_sha 9|3 current_revision_id 9?|4 visible_section_id 9?|5 visible_step_id 9?|6 path_scope_prefix 9?"
        ];
    }
}
class J extends a {
    constructor(e){
        super(), this.conflictedPaths = [], this.hunks = [], this.files = [], n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityContext.GithubPRContext.ConflictResolutionContext|1 head_sha 9?|2 base_sha 9?|3 base_ref 9?|4 conflicted_paths 9*|5 gate_reason 9?|6 hunks #0*|7 files #1*",
            M,
            q
        ];
    }
}
class M extends a {
    constructor(e){
        super(), this.path = "", this.startLine = 0, this.outcome = "", this.needsPerson = !1, n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityContext.GithubPRContext.ConflictResolutionContext.HunkReport|1 path 9|2 start_line 13|3 outcome 9|4 kind 9?|5 needs_person 8"
        ];
    }
}
class q extends a {
    constructor(e){
        super(), this.path = "", this.content = "", this.fullyResolved = !1, n.proto3.util.initPartial(e, this);
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
            "ComposerCapabilityContext.GithubPRContext.ConflictResolutionContext.ResolvedFile|1 path 9|2 content 9|3 fully_resolved 8"
        ];
    }
}
