"use strict";
require.r(exports), require.d(exports, {
    AzureState: ()=>W,
    BM25Chunk: ()=>G,
    BedrockState: ()=>V,
    ChatExternalLink: ()=>Me,
    ChatQuote: ()=>Je,
    ClientAction: ()=>Se,
    CloudAgentModelSelection: ()=>Y,
    CloudAgentModelSelection_ParameterValue: ()=>Z,
    CmdKDebugInfo: ()=>x,
    CmdKDebugInfo_CppFileDiffHistory: ()=>B,
    CmdKDebugInfo_OpenEditor: ()=>R,
    CmdKDebugInfo_PastThought: ()=>P,
    CmdKDebugInfo_UnsavedFiles: ()=>T,
    CmdKExternalLink: ()=>De,
    CodeBlock: ()=>D,
    CodeBlock_Signatures: ()=>O,
    CodeChunk: ()=>je,
    CodeChunk_Intent: ()=>Ge,
    CodeChunk_SummarizationStrategy: ()=>He,
    CommitDiffString: ()=>Fe,
    CommitNote: ()=>Oe,
    CommitNoteWithEmbeddings: ()=>Ne,
    ComposerExternalLink: ()=>qe,
    ComputeLinesDiffOriginalAndModified: ()=>A,
    ConfigureSpendLimitAction: ()=>Te,
    CrossExtHostHeader: ()=>Le,
    CrossExtHostHeaders: ()=>$e,
    CurrentFileInfo: ()=>H,
    CurrentFileInfo_NotebookCell: ()=>z,
    CursorPosition: ()=>u,
    CursorRange: ()=>M,
    CursorRule: ()=>oe,
    CustomErrorDetails: ()=>we,
    DashboardAction: ()=>Ee,
    DataframeInfo: ()=>ee,
    DataframeInfo_Column: ()=>te,
    DetailedLine: ()=>q,
    Diagnostic: ()=>L,
    Diagnostic_DiagnosticSeverity: ()=>$,
    Diagnostic_RelatedInformation: ()=>Q,
    DocumentSymbol: ()=>ue,
    DocumentSymbolWithText: ()=>fe,
    DocumentSymbol_Range: ()=>pe,
    DocumentSymbol_SymbolKind: ()=>de,
    EmbeddingModel: ()=>l,
    EnvironmentInfo: ()=>h,
    ErrorAnalyticsMetadata: ()=>ve,
    ErrorButton: ()=>Ae,
    ErrorDetails: ()=>ge,
    ErrorDetails_Error: ()=>ye,
    ExplicitContext: ()=>ie,
    FeatureType: ()=>c,
    File: ()=>U,
    FileDiff: ()=>E,
    FileDiff_Chunk: ()=>I,
    FileGit: ()=>F,
    FullCommitNotes: ()=>Ue,
    GetDiffRequest: ()=>g,
    GetDiffRequest_OutputFormat: ()=>y,
    GetDiffResponse: ()=>w,
    GetDiffResponse_SubmoduleDiff: ()=>v,
    GitCommit: ()=>N,
    GitDiff: ()=>S,
    GitDiff_DiffType: ()=>b,
    HoverDetails: ()=>me,
    ImageProto: ()=>Be,
    ImageProto_Dimension: ()=>Pe,
    LineRange: ()=>J,
    Lint: ()=>j,
    LintSeverity: ()=>a,
    LinterError: ()=>re,
    LinterErrors: ()=>ne,
    LinterErrorsWithoutFileContents: ()=>se,
    MCPInstructions: ()=>ae,
    ModelDetails: ()=>K,
    ModelInfo: ()=>X,
    PlanChoice: ()=>_e,
    PureMessage: ()=>ce,
    PureMessage_MessageType: ()=>le,
    RCPCallFrame: ()=>ze,
    RCPChatMessage: ()=>Ye,
    RCPLogEntry: ()=>Ve,
    RCPMessage: ()=>Ze,
    RCPStackTrace: ()=>We,
    RCPUIElementPicked: ()=>Ke,
    ReloadWindowAction: ()=>be,
    SelectionWithOrientation: ()=>f,
    SimpleFileChunk: ()=>k,
    SimpleRange: ()=>C,
    SimpleUnaryCrossExtensionHostMessage: ()=>Qe,
    SimplestRange: ()=>_,
    SwitchModelAction: ()=>ke,
    SwitchModelAction_ModelParameterValue: ()=>xe,
    UpgradeAction: ()=>Ce,
    UpgradeChoice: ()=>Ie,
    UriComponents: ()=>he,
    UrlAction: ()=>Re,
    VscodeCPUProperties: ()=>m,
    VscodeOSProperties: ()=>p,
    VscodeOSStatistics: ()=>d
});
var n = require("./module-36038.js"), s = require("./module-8592.js");
const o = "aiserver.v1.";
class i extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return o;
    }
}
var a = (0, s.QT)(n.proto3, o, "LintSeverity", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ERROR"
    ],
    [
        2,
        "WARNING"
    ],
    [
        3,
        "INFO"
    ],
    [
        4,
        "HINT"
    ],
    [
        5,
        "AI"
    ]
], 1), c = (0, s.QT)(n.proto3, o, "FeatureType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "EDIT"
    ],
    [
        2,
        "GENERATE"
    ],
    [
        3,
        "INLINE_LONG_COMPLETION"
    ]
], 1), l = (0, s.QT)(n.proto3, o, "EmbeddingModel", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "VOYAGE_CODE_2"
    ],
    [
        2,
        "TEXT_EMBEDDINGS_LARGE_3"
    ],
    [
        3,
        "QWEN_1_5B_CUSTOM"
    ],
    [
        4,
        "MOCK_CHUNKER_ERROR"
    ],
    [
        5,
        "QWEN_1_5B_0618_CUSTOM"
    ],
    [
        6,
        "QWEN_1_5B_0618_FP8_MM_CUSTOM"
    ]
], 1);
class u extends i {
    constructor(e){
        super(), this.line = 0, this.column = 0, n.proto3.util.initPartial(e, this);
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
            "CursorPosition|1 line 5|2 column 5"
        ];
    }
}
class d extends i {
    constructor(e){
        super(), this.totalmem = 0, this.freemem = 0, this.loadavg = [], n.proto3.util.initPartial(e, this);
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
            "VscodeOSStatistics|1 totalmem 1|2 freemem 1|3 loadavg 1*"
        ];
    }
}
class p extends i {
    constructor(e){
        super(), this.type = "", this.release = "", this.arch = "", this.platform = "", this.cpus = [], n.proto3.util.initPartial(e, this);
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
            "VscodeOSProperties|1 type 9|2 release 9|3 arch 9|4 platform 9|5 cpus #0*",
            m
        ];
    }
}
class m extends i {
    constructor(e){
        super(), this.model = "", this.speed = 0, n.proto3.util.initPartial(e, this);
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
            "VscodeCPUProperties|1 model 9|2 speed 1"
        ];
    }
}
class h extends i {
    constructor(e){
        super(), this.workspaceUris = [], n.proto3.util.initPartial(e, this);
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
            "EnvironmentInfo|1 exthost_platform 9?|2 exthost_arch 9?|3 exthost_release 9?|4 exthost_shell 9?|5 local_timestamp 9?|6 workspace_uris 9*|7 cursor_version 9?|8 is_remote 8?|9 local_os_type 9?|10 home_directory 9?|11 local_timezone 9?"
        ];
    }
}
class f extends i {
    constructor(e){
        super(), this.selectionStartLineNumber = 0, this.selectionStartColumn = 0, this.positionLineNumber = 0, this.positionColumn = 0, n.proto3.util.initPartial(e, this);
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
            "SelectionWithOrientation|1 selection_start_line_number 5|2 selection_start_column 5|3 position_line_number 5|4 position_column 5"
        ];
    }
}
class g extends i {
    constructor(e){
        super(), this.cwd = "", this.ref = "", this.baseRef = "", this.mergeBase = !1, this.targetPaths = [], this.maxUntrackedFiles = 0, this.submoduleRecurseDepth = 0, this.includeSpaceChanges = !1, this.committedOnly = !1, this.computePatchId = !1, n.proto3.util.initPartial(e, this);
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
            "GetDiffRequest|1 cwd 9|2 ref 9|3 base_ref 9|4 merge_base 8|5 target_paths 9*|6 unified_context_lines 5?|7 max_untracked_files 5|9 submodule_recurse_depth 5|10 include_space_changes 8|11 committed_only 8|12 compute_patch_id 8|13 return_head_sha 8?|14 max_response_bytes 5?|15 max_files_with_contents 13?|16 max_content_bytes 13?|8 output_format #0?",
            y
        ];
    }
}
var y = (0, s.QT)(n.proto3, o, "GetDiffRequest.OutputFormat", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NAME_STATUS"
    ],
    [
        2,
        "NAME_STATUS_AND_NUMSTAT"
    ],
    [
        3,
        "FILE_DIFFS"
    ],
    [
        4,
        "DIFFS_WITH_BEFORE_AND_AFTER"
    ]
], 1);
class w extends i {
    constructor(e){
        super(), this.submoduleDiffs = [], n.proto3.util.initPartial(e, this);
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
            "GetDiffResponse|1 diff #0|2 submodule_diffs #1*|3 patch_id 9?|4 head_sha 9?|5 has_uncommitted_changes 8?",
            S,
            v
        ];
    }
}
class v extends i {
    constructor(e){
        super(), this.relativePath = "", this.errored = !1, n.proto3.util.initPartial(e, this);
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
            "GetDiffResponse.SubmoduleDiff|1 relative_path 9|2 diff #0|3 errored 8",
            S
        ];
    }
}
class _ extends i {
    constructor(e){
        super(), this.startLine = 0, this.endLineInclusive = 0, n.proto3.util.initPartial(e, this);
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
            "SimplestRange|1 start_line 5|2 end_line_inclusive 5"
        ];
    }
}
class A extends i {
    constructor(e){
        super(), this.original = [], this.modified = [], n.proto3.util.initPartial(e, this);
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
            "ComputeLinesDiffOriginalAndModified|1 original 9*|2 modified 9*"
        ];
    }
}
class S extends i {
    constructor(e){
        super(), this.diffs = [], this.diffType = b.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "GitDiff|1 diffs #0*|2 diff_type #1|3 file_contents_omitted 8?",
            E,
            b
        ];
    }
}
var b = (0, s.QT)(n.proto3, o, "GitDiff.DiffType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DIFF_TO_HEAD"
    ],
    [
        2,
        "DIFF_FROM_BRANCH_TO_MAIN"
    ]
], 1);
class E extends i {
    constructor(e){
        super(), this.added = 0, this.removed = 0, this.from = "", this.to = "", this.chunks = [], n.proto3.util.initPartial(e, this);
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
            "FileDiff|4 added 5|5 removed 5|1 from 9|2 to 9|3 chunks #0*|6 before_file_contents 9?|7 after_file_contents 9?|8 is_generated 8?|9 old_mode 9?|10 new_mode 9?",
            I
        ];
    }
}
class I extends i {
    constructor(e){
        super(), this.content = "", this.lines = [], this.oldStart = 0, this.oldLines = 0, this.newStart = 0, this.newLines = 0, n.proto3.util.initPartial(e, this);
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
            "FileDiff.Chunk|1 content 9|2 lines 9*|3 old_start 5|4 old_lines 5|5 new_start 5|6 new_lines 5"
        ];
    }
}
class C extends i {
    constructor(e){
        super(), this.startLineNumber = 0, this.startColumn = 0, this.endLineNumberInclusive = 0, this.endColumn = 0, n.proto3.util.initPartial(e, this);
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
            "SimpleRange|1 start_line_number 5|2 start_column 5|3 end_line_number_inclusive 5|4 end_column 5"
        ];
    }
}
class k extends i {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.chunkHash = "", n.proto3.util.initPartial(e, this);
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
            "SimpleFileChunk|1 relative_workspace_path 9|2 range #0|3 chunk_hash 9",
            _
        ];
    }
}
class x extends i {
    constructor(e){
        super(), this.remoteUrl = "", this.commitId = "", this.gitPatch = "", this.unsavedFiles = [], this.unixTimestampMs = 0, this.openEditors = [], this.fileDiffHistories = [], this.branchName = "", this.branchNotes = "", this.branchNotesRich = "", this.globalNotes = "", this.pastThoughts = [], this.baseBranchName = "", this.baseBranchCommitId = "", n.proto3.util.initPartial(e, this);
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
            "CmdKDebugInfo|1 remote_url 9|2 commit_id 9|3 git_patch 9|4 unsaved_files #0*|5 unix_timestamp_ms 1|6 open_editors #1*|7 file_diff_histories #2*|8 branch_name 9|9 branch_notes 9|12 branch_notes_rich 9|10 global_notes 9|11 past_thoughts #3*|13 base_branch_name 9|14 base_branch_commit_id 9",
            T,
            R,
            B,
            P
        ];
    }
}
class T extends i {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.contents = "", n.proto3.util.initPartial(e, this);
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
            "CmdKDebugInfo.UnsavedFiles|1 relative_workspace_path 9|2 contents 9"
        ];
    }
}
class R extends i {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.editorGroupIndex = 0, this.editorGroupId = 0, this.isActive = !1, n.proto3.util.initPartial(e, this);
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
            "CmdKDebugInfo.OpenEditor|1 relative_workspace_path 9|2 editor_group_index 5|3 editor_group_id 5|4 is_active 8"
        ];
    }
}
class B extends i {
    constructor(e){
        super(), this.fileName = "", this.diffHistory = [], n.proto3.util.initPartial(e, this);
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
            "CmdKDebugInfo.CppFileDiffHistory|1 file_name 9|2 diff_history 9*"
        ];
    }
}
class P extends i {
    constructor(e){
        super(), this.text = "", this.timeInUnixSeconds = 0, n.proto3.util.initPartial(e, this);
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
            "CmdKDebugInfo.PastThought|1 text 9|2 time_in_unix_seconds 1"
        ];
    }
}
class J extends i {
    constructor(e){
        super(), this.startLineNumber = 0, this.endLineNumberInclusive = 0, n.proto3.util.initPartial(e, this);
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
            "LineRange|1 start_line_number 5|2 end_line_number_inclusive 5"
        ];
    }
}
class M extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
            "CursorRange|1 start_position #0|2 end_position #0",
            u
        ];
    }
}
class q extends i {
    constructor(e){
        super(), this.text = "", this.lineNumber = 0, this.isSignature = !1, n.proto3.util.initPartial(e, this);
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
            "DetailedLine|1 text 9|2 line_number 2|3 is_signature 8"
        ];
    }
}
class D extends i {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.contents = "", this.detailedLines = [], n.proto3.util.initPartial(e, this);
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
            "CodeBlock|1 relative_workspace_path 9|2 file_contents 9?|9 file_contents_length 5?|3 range #0|4 contents 9|5 signatures #1|6 override_contents 9?|7 original_contents 9?|8 detailed_lines #2*|10 file_git_context #3",
            M,
            O,
            q,
            F
        ];
    }
}
class O extends i {
    constructor(e){
        super(), this.ranges = [], n.proto3.util.initPartial(e, this);
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
            "CodeBlock.Signatures|1 ranges #0*",
            M
        ];
    }
}
class N extends i {
    constructor(e){
        super(), this.commit = "", this.author = "", this.date = "", this.message = "", n.proto3.util.initPartial(e, this);
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
            "GitCommit|1 commit 9|2 author 9|3 date 9|4 message 9"
        ];
    }
}
class F extends i {
    constructor(e){
        super(), this.commits = [], n.proto3.util.initPartial(e, this);
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
            "FileGit|1 commits #0*",
            N
        ];
    }
}
class U extends i {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.contents = "", n.proto3.util.initPartial(e, this);
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
            "File|1 relative_workspace_path 9|2 contents 9|3 file_git_context #0",
            F
        ];
    }
}
class L extends i {
    constructor(e){
        super(), this.message = "", this.severity = $.UNSPECIFIED, this.relatedInformation = [], n.proto3.util.initPartial(e, this);
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
            "Diagnostic|1 message 9|2 range #0|3 severity #1|4 related_information #2*",
            M,
            $,
            Q
        ];
    }
}
var $ = (0, s.QT)(n.proto3, o, "Diagnostic.DiagnosticSeverity", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ERROR"
    ],
    [
        2,
        "WARNING"
    ],
    [
        3,
        "INFORMATION"
    ],
    [
        4,
        "HINT"
    ]
], 1);
class Q extends i {
    constructor(e){
        super(), this.message = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Q).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Q).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Q).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Q, e, t);
    }
    static $() {
        return [
            "Diagnostic.RelatedInformation|1 message 9|2 range #0",
            M
        ];
    }
}
class j extends i {
    constructor(e){
        super(), this.message = "", this.severity = a.UNSPECIFIED, n.proto3.util.initPartial(e, this);
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
            "Lint|1 message 9|2 range #0|3 severity #1",
            C,
            a
        ];
    }
}
class G extends i {
    constructor(e){
        super(), this.content = "", this.score = 0, this.relativePath = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new G).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new G).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new G).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(G, e, t);
    }
    static $() {
        return [
            "BM25Chunk|1 content 9|2 range #0|3 score 5|4 relative_path 9",
            _
        ];
    }
}
class H extends i {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.contents = "", this.relyOnFilesync = !1, this.cells = [], this.topChunks = [], this.contentsStartAtLine = 0, this.dataframes = [], this.totalNumberOfLines = 0, this.languageId = "", this.diagnostics = [], this.cellStartLines = [], this.workspaceRootPath = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new H).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new H).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new H).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(H, e, t);
    }
    static $() {
        return [
            "CurrentFileInfo|1 relative_workspace_path 9|2 contents 9|18 rely_on_filesync 8|17 sha_256_hash 9?|16 cells #0*|10 top_chunks #1*|9 contents_start_at_line 5|3 cursor_position #2|4 dataframes #3*|8 total_number_of_lines 5|5 language_id 9|6 selection #4|11 alternative_version_id 5?|7 diagnostics #5*|14 file_version 5?|15 cell_start_lines 5*|19 workspace_root_path 9|20 line_ending 9?",
            z,
            G,
            u,
            ee,
            M,
            L
        ];
    }
}
class z extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new z).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new z).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new z).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(z, e, t);
    }
    static $() {
        return [
            "CurrentFileInfo.NotebookCell"
        ];
    }
}
class W extends i {
    constructor(e){
        super(), this.apiKey = "", this.baseUrl = "", this.deployment = "", this.useAzure = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new W).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new W).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new W).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(W, e, t);
    }
    static $() {
        return [
            "AzureState|1 api_key 9|2 base_url 9|3 deployment 9|4 use_azure 8"
        ];
    }
}
class V extends i {
    constructor(e){
        super(), this.accessKey = "", this.secretKey = "", this.region = "", this.useBedrock = !1, this.sessionToken = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new V).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new V).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new V).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(V, e, t);
    }
    static $() {
        return [
            "BedrockState|1 access_key 9|2 secret_key 9|3 region 9|4 use_bedrock 8|5 session_token 9"
        ];
    }
}
class K extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new K).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new K).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new K).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(K, e, t);
    }
    static $() {
        return [
            "ModelDetails|1 model_name 9?|2 api_key 9?|3 enable_ghost_mode 8?|4 azure_state #0?|5 enable_slow_pool 8?|6 openai_api_base_url 9?|7 bedrock_state #1?|8 max_mode 8?",
            W,
            V
        ];
    }
}
class Y extends i {
    constructor(e){
        super(), this.modelId = "", this.parameters = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Y).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Y).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Y).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Y, e, t);
    }
    static $() {
        return [
            "CloudAgentModelSelection|1 model_id 9|2 parameters #0*|3 max_mode 8?",
            Z
        ];
    }
}
class Z extends i {
    constructor(e){
        super(), this.id = "", this.value = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Z).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Z).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Z).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Z, e, t);
    }
    static $() {
        return [
            "CloudAgentModelSelection.ParameterValue|1 id 9|2 value 9"
        ];
    }
}
class X extends i {
    constructor(e){
        super(), this.modelName = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new X).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new X).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new X).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(X, e, t);
    }
    static $() {
        return [
            "ModelInfo|1 model_name 9"
        ];
    }
}
class ee extends i {
    constructor(e){
        super(), this.name = "", this.shape = "", this.dataDimensionality = 0, this.columns = [], this.rowCount = 0, this.indexColumn = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ee).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ee).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ee).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ee, e, t);
    }
    static $() {
        return [
            "DataframeInfo|1 name 9|2 shape 9|3 data_dimensionality 5|6 columns #0*|7 row_count 5|8 index_column 9",
            te
        ];
    }
}
class te extends i {
    constructor(e){
        super(), this.key = "", this.type = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new te).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new te).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new te).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(te, e, t);
    }
    static $() {
        return [
            "DataframeInfo.Column|1 key 9|2 type 9"
        ];
    }
}
class re extends i {
    constructor(e){
        super(), this.message = "", this.relatedInformation = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new re).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new re).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new re).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(re, e, t);
    }
    static $() {
        return [
            "LinterError|1 message 9|2 range #0|3 source 9?|4 related_information #1*|5 severity #2?|6 is_stale 8?",
            M,
            Q,
            $
        ];
    }
}
class ne extends i {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.errors = [], this.fileContents = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ne).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ne).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ne).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ne, e, t);
    }
    static $() {
        return [
            "LinterErrors|1 relative_workspace_path 9|2 errors #0*|3 file_contents 9",
            re
        ];
    }
}
class se extends i {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.errors = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new se).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new se).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new se).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(se, e, t);
    }
    static $() {
        return [
            "LinterErrorsWithoutFileContents|1 relative_workspace_path 9|2 errors #0*",
            re
        ];
    }
}
class oe extends i {
    constructor(e){
        super(), this.name = "", this.description = "", this.environments = [], this.disabledEnvironments = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new oe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new oe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new oe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(oe, e, t);
    }
    static $() {
        return [
            "CursorRule|1 name 9|2 description 9|3 body 9?|4 is_from_glob 8?|5 always_apply 8?|6 attach_to_background_agents 8?|7 full_path 9?|8 environments 9*|9 disabled_environments 9*|10 plugin 9?|11 marketplace 9?"
        ];
    }
}
class ie extends i {
    constructor(e){
        super(), this.context = "", this.rules = [], this.mcpInstructions = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ie).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ie).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ie).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ie, e, t);
    }
    static $() {
        return [
            "ExplicitContext|1 context 9|2 repo_context 9?|3 rules #0*|4 mode_specific_context 9?|5 mcp_instructions #1*",
            oe,
            ae
        ];
    }
}
class ae extends i {
    constructor(e){
        super(), this.serverName = "", this.serverIdentifier = "", this.instructions = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ae).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ae).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ae).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ae, e, t);
    }
    static $() {
        return [
            "MCPInstructions|1 server_name 9|2 server_identifier 9|3 instructions 9"
        ];
    }
}
class ce extends i {
    constructor(e){
        super(), this.messageType = le.UNSPECIFIED, this.content = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ce).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ce).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ce).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ce, e, t);
    }
    static $() {
        return [
            "PureMessage|1 message_type #0|2 content 9",
            le
        ];
    }
}
var le = (0, s.QT)(n.proto3, o, "PureMessage.MessageType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SYSTEM"
    ],
    [
        2,
        "USER"
    ],
    [
        3,
        "ASSISTANT"
    ]
], 1);
class ue extends i {
    constructor(e){
        super(), this.name = "", this.detail = "", this.kind = de.UNSPECIFIED, this.containerName = "", this.children = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ue).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ue).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ue).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ue, e, t);
    }
    static $() {
        return [
            "DocumentSymbol|1 name 9|2 detail 9|3 kind #0|5 container_name 9|6 range #1|7 selection_range #1|8 children #2*",
            de,
            pe,
            ue
        ];
    }
}
var de = (0, s.QT)(n.proto3, o, "DocumentSymbol.SymbolKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FILE"
    ],
    [
        2,
        "MODULE"
    ],
    [
        3,
        "NAMESPACE"
    ],
    [
        4,
        "PACKAGE"
    ],
    [
        5,
        "CLASS"
    ],
    [
        6,
        "METHOD"
    ],
    [
        7,
        "PROPERTY"
    ],
    [
        8,
        "FIELD"
    ],
    [
        9,
        "CONSTRUCTOR"
    ],
    [
        10,
        "ENUM"
    ],
    [
        11,
        "INTERFACE"
    ],
    [
        12,
        "FUNCTION"
    ],
    [
        13,
        "VARIABLE"
    ],
    [
        14,
        "CONSTANT"
    ],
    [
        15,
        "STRING"
    ],
    [
        16,
        "NUMBER"
    ],
    [
        17,
        "BOOLEAN"
    ],
    [
        18,
        "ARRAY"
    ],
    [
        19,
        "OBJECT"
    ],
    [
        20,
        "KEY"
    ],
    [
        21,
        "NULL"
    ],
    [
        22,
        "ENUM_MEMBER"
    ],
    [
        23,
        "STRUCT"
    ],
    [
        24,
        "EVENT"
    ],
    [
        25,
        "OPERATOR"
    ],
    [
        26,
        "TYPE_PARAMETER"
    ]
], 1);
class pe extends i {
    constructor(e){
        super(), this.startLineNumber = 0, this.startColumn = 0, this.endLineNumber = 0, this.endColumn = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pe, e, t);
    }
    static $() {
        return [
            "DocumentSymbol.Range|1 start_line_number 5|2 start_column 5|3 end_line_number 5|4 end_column 5"
        ];
    }
}
class me extends i {
    constructor(e){
        super(), this.codeDetails = "", this.markdownBlocks = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new me).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new me).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new me).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(me, e, t);
    }
    static $() {
        return [
            "HoverDetails|1 code_details 9|2 markdown_blocks 9*"
        ];
    }
}
class he extends i {
    constructor(e){
        super(), this.scheme = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new he).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new he).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new he).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(he, e, t);
    }
    static $() {
        return [
            "UriComponents|1 scheme 9|2 authority 9?|3 path 9?|4 query 9?|5 fragment 9?"
        ];
    }
}
class fe extends i {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.textInSymbolRange = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fe, e, t);
    }
    static $() {
        return [
            "DocumentSymbolWithText|1 symbol #0|2 relative_workspace_path 9|3 text_in_symbol_range 9|4 uri_components #1",
            ue,
            he
        ];
    }
}
class ge extends i {
    constructor(e){
        super(), this.error = ye.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ge).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ge).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ge).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ge, e, t);
    }
    static $() {
        return [
            "ErrorDetails|1 error #0|2 details #1|3 is_expected 8?",
            ye,
            we
        ];
    }
}
var ye = (0, s.QT)(n.proto3, o, "ErrorDetails.Error", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "BAD_API_KEY"
    ],
    [
        42,
        "BAD_USER_API_KEY"
    ],
    [
        2,
        "NOT_LOGGED_IN"
    ],
    [
        3,
        "INVALID_AUTH_ID"
    ],
    [
        4,
        "NOT_HIGH_ENOUGH_PERMISSIONS"
    ],
    [
        18,
        "AGENT_REQUIRES_LOGIN"
    ],
    [
        5,
        "BAD_MODEL_NAME"
    ],
    [
        39,
        "NOT_FOUND"
    ],
    [
        40,
        "DEPRECATED"
    ],
    [
        6,
        "USER_NOT_FOUND"
    ],
    [
        7,
        "FREE_USER_RATE_LIMIT_EXCEEDED"
    ],
    [
        8,
        "PRO_USER_RATE_LIMIT_EXCEEDED"
    ],
    [
        9,
        "FREE_USER_USAGE_LIMIT"
    ],
    [
        10,
        "PRO_USER_USAGE_LIMIT"
    ],
    [
        41,
        "RESOURCE_EXHAUSTED"
    ],
    [
        11,
        "AUTH_TOKEN_NOT_FOUND"
    ],
    [
        12,
        "AUTH_TOKEN_EXPIRED"
    ],
    [
        13,
        "OPENAI"
    ],
    [
        14,
        "OPENAI_RATE_LIMIT_EXCEEDED"
    ],
    [
        20,
        "MAX_TOKENS"
    ],
    [
        23,
        "PRO_USER_ONLY"
    ],
    [
        21,
        "USER_ABORTED_REQUEST"
    ],
    [
        25,
        "TIMEOUT"
    ],
    [
        22,
        "GENERIC_RATE_LIMIT_EXCEEDED"
    ],
    [
        28,
        "GPT_4_VISION_PREVIEW_RATE_LIMIT"
    ],
    [
        29,
        "CUSTOM_MESSAGE"
    ],
    [
        30,
        "OUTDATED_CLIENT"
    ],
    [
        31,
        "CLAUDE_IMAGE_TOO_LARGE"
    ],
    [
        33,
        "FILE_NOT_FOUND"
    ],
    [
        34,
        "API_KEY_RATE_LIMIT"
    ],
    [
        35,
        "DEBOUNCED"
    ],
    [
        36,
        "BAD_REQUEST"
    ],
    [
        37,
        "REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED"
    ],
    [
        38,
        "UNAUTHORIZED"
    ],
    [
        43,
        "CONVERSATION_TOO_LONG"
    ],
    [
        44,
        "USAGE_PRICING_REQUIRED"
    ],
    [
        45,
        "USAGE_PRICING_REQUIRED_CHANGEABLE"
    ],
    [
        46,
        "GITHUB_NO_USER_CREDENTIALS"
    ],
    [
        47,
        "GITHUB_USER_NO_ACCESS"
    ],
    [
        48,
        "GITHUB_APP_NO_ACCESS"
    ],
    [
        49,
        "GITHUB_MULTIPLE_OWNERS"
    ],
    [
        50,
        "RATE_LIMITED"
    ],
    [
        51,
        "RATE_LIMITED_CHANGEABLE"
    ],
    [
        52,
        "CUSTOM"
    ],
    [
        53,
        "HOOKS_BLOCKED"
    ],
    [
        54,
        "SUSPICIOUS_USAGE_BLOCKED"
    ],
    [
        55,
        "EXTENSION_HOST_TIMEOUT"
    ],
    [
        56,
        "NETWORK_ERROR"
    ],
    [
        57,
        "PROVIDER_ERROR"
    ],
    [
        58,
        "MODEL_BLOCKED"
    ],
    [
        59,
        "INTERNAL"
    ],
    [
        60,
        "MAX_MODE_REQUIRED"
    ],
    [
        61,
        "MODEL_NO_LONGER_SUPPORTED"
    ],
    [
        62,
        "PRICING_WARNING"
    ],
    [
        63,
        "SLOW_POOL"
    ],
    [
        64,
        "UNSUPPORTED_REGION"
    ],
    [
        65,
        "ACCOUNT_CLOSED"
    ],
    [
        66,
        "TENANT_RESTRICTION_VIOLATION"
    ]
], 1);
class we extends i {
    constructor(e){
        super(), this.title = "", this.detail = "", this.buttons = [], this.additionalInfo = {}, this.planChoices = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new we).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new we).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new we).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(we, e, t);
    }
    static $() {
        return [
            "CustomErrorDetails|1 title 9|2 detail 9|3 allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown 8?|4 is_retryable 8?|5 show_request_id 8?|6 should_show_immediate_error 8?|8 buttons #0*|7 additional_info 9,9|9 plan_choices #1*|10 analytics_metadata #2?",
            Ae,
            _e,
            ve
        ];
    }
}
class ve extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ve).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ve).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ve).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ve, e, t);
    }
    static $() {
        return [
            "ErrorAnalyticsMetadata|1 action_required 9?"
        ];
    }
}
class _e extends i {
    constructor(e){
        super(), this.label = "", this.value = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _e).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _e).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _e).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_e, e, t);
    }
    static $() {
        return [
            "PlanChoice|1 label 9|2 sublabel 9?|3 description 9?|4 value 9"
        ];
    }
}
class Ae extends i {
    constructor(e){
        super(), this.label = "", this.action = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ae).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ae).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ae).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ae, e, t);
    }
    static $() {
        return [
            "ErrorButton|1 label 9|2 upgrade #0 action|3 switch_model #1 action|4 configure_spend_limit #2 action|5 url #3 action|6 upgrade_choice #4 action|7 dashboard_action #5 action|8 reload_window #6 action|9 client_action #7 action",
            Ce,
            ke,
            Te,
            Re,
            Ie,
            Ee,
            be,
            Se
        ];
    }
}
class Se extends i {
    constructor(e){
        super(), this.commandId = "", this.args = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Se).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Se).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Se).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Se, e, t);
    }
    static $() {
        return [
            "ClientAction|1 command_id 9|2 args 9,9"
        ];
    }
}
class be extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new be).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new be).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new be).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(be, e, t);
    }
    static $() {
        return [
            "ReloadWindowAction"
        ];
    }
}
class Ee extends i {
    constructor(e){
        super(), this.action = "", this.args = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ee).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ee).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ee).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ee, e, t);
    }
    static $() {
        return [
            "DashboardAction|1 action 9|2 args 9,9|3 success_message 9?"
        ];
    }
}
class Ie extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ie).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ie).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ie).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ie, e, t);
    }
    static $() {
        return [
            "UpgradeChoice"
        ];
    }
}
class Ce extends i {
    constructor(e){
        super(), this.membershipToUpgradeTo = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ce).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ce).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ce).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ce, e, t);
    }
    static $() {
        return [
            "UpgradeAction|1 membership_to_upgrade_to 9|2 try_immediate_upgrade 8?|3 allow_trial 8?|4 dashboard_action #0?",
            Ee
        ];
    }
}
class ke extends i {
    constructor(e){
        super(), this.parameters = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ke).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ke).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ke).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ke, e, t);
    }
    static $() {
        return [
            "SwitchModelAction|1 suggested_model 9?|2 parameters #0*|3 max_mode 8?",
            xe
        ];
    }
}
class xe extends i {
    constructor(e){
        super(), this.id = "", this.value = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xe, e, t);
    }
    static $() {
        return [
            "SwitchModelAction.ModelParameterValue|1 id 9|2 value 9"
        ];
    }
}
class Te extends i {
    constructor(e){
        super(), this.confirmLabel = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Te).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Te).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Te).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Te, e, t);
    }
    static $() {
        return [
            "ConfigureSpendLimitAction|1 confirm_label 9"
        ];
    }
}
class Re extends i {
    constructor(e){
        super(), this.url = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Re).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Re).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Re).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Re, e, t);
    }
    static $() {
        return [
            "UrlAction|1 url 9"
        ];
    }
}
class Be extends i {
    constructor(e){
        super(), this.data = new Uint8Array(0), this.uuid = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Be).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Be).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Be).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Be, e, t);
    }
    static $() {
        return [
            "ImageProto|1 data 12|2 dimension #0|3 uuid 9|4 task_specific_description 9?",
            Pe
        ];
    }
}
class Pe extends i {
    constructor(e){
        super(), this.width = 0, this.height = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Pe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Pe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Pe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Pe, e, t);
    }
    static $() {
        return [
            "ImageProto.Dimension|1 width 5|2 height 5"
        ];
    }
}
class Je extends i {
    constructor(e){
        super(), this.markdown = "", this.bubbleId = "", this.sectionIndex = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Je).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Je).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Je).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Je, e, t);
    }
    static $() {
        return [
            "ChatQuote|1 markdown 9|2 bubble_id 9|3 section_index 5"
        ];
    }
}
class Me extends i {
    constructor(e){
        super(), this.url = "", this.uuid = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Me).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Me).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Me).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Me, e, t);
    }
    static $() {
        return [
            "ChatExternalLink|1 url 9|2 uuid 9|3 pdf_content 9?|4 is_pdf 8?|5 filename 9?"
        ];
    }
}
class qe extends i {
    constructor(e){
        super(), this.url = "", this.uuid = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qe, e, t);
    }
    static $() {
        return [
            "ComposerExternalLink|1 url 9|2 uuid 9|3 pdf_content 9?|4 is_pdf 8?|5 filename 9?"
        ];
    }
}
class De extends i {
    constructor(e){
        super(), this.url = "", this.uuid = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new De).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new De).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new De).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(De, e, t);
    }
    static $() {
        return [
            "CmdKExternalLink|1 url 9|2 uuid 9"
        ];
    }
}
class Oe extends i {
    constructor(e){
        super(), this.note = "", this.commitHash = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Oe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Oe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Oe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Oe, e, t);
    }
    static $() {
        return [
            "CommitNote|1 note 9|2 commit_hash 9"
        ];
    }
}
class Ne extends i {
    constructor(e){
        super(), this.note = "", this.commitHash = "", this.embeddings = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ne).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ne).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ne).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ne, e, t);
    }
    static $() {
        return [
            "CommitNoteWithEmbeddings|1 note 9|2 commit_hash 9|3 embeddings 1*"
        ];
    }
}
class Fe extends i {
    constructor(e){
        super(), this.diff = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Fe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Fe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Fe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Fe, e, t);
    }
    static $() {
        return [
            "CommitDiffString|1 diff 9"
        ];
    }
}
class Ue extends i {
    constructor(e){
        super(), this.notes = [], this.commitHash = "", this.repoUrl = "", this.filesChangedRelativePath = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ue).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ue).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ue).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ue, e, t);
    }
    static $() {
        return [
            "FullCommitNotes|1 notes #0*|2 commit_hash 9|3 repo_url 9|4 files_changed_relative_path 9",
            Oe
        ];
    }
}
class Le extends i {
    constructor(e){
        super(), this.key = "", this.value = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Le).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Le).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Le).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Le, e, t);
    }
    static $() {
        return [
            "CrossExtHostHeader|1 key 9|2 value 9"
        ];
    }
}
class $e extends i {
    constructor(e){
        super(), this.headers = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $e).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $e).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $e).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($e, e, t);
    }
    static $() {
        return [
            "CrossExtHostHeaders|1 headers #0*",
            Le
        ];
    }
}
class Qe extends i {
    constructor(e){
        super(), this.message = new Uint8Array(0), this.isError = !1, this.connectError = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Qe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Qe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Qe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Qe, e, t);
    }
    static $() {
        return [
            "SimpleUnaryCrossExtensionHostMessage|1 message 12|2 header #0|3 trailer #0|4 is_error 8|5 connect_error 9",
            $e
        ];
    }
}
class je extends i {
    constructor(e){
        super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, this.lines = [], this.languageIdentifier = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new je).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new je).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new je).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(je, e, t);
    }
    static $() {
        return [
            "CodeChunk|1 relative_workspace_path 9|2 start_line_number 5|3 lines 9*|4 summarization_strategy #0?|5 language_identifier 9|6 intent #1?|7 is_final_version 8?|8 is_first_version 8?",
            He,
            Ge
        ];
    }
}
var Ge = (0, s.QT)(n.proto3, o, "CodeChunk.Intent", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "COMPOSER_FILE"
    ],
    [
        2,
        "COMPRESSED_COMPOSER_FILE"
    ]
], 1), He = (0, s.QT)(n.proto3, o, "CodeChunk.SummarizationStrategy", [
    [
        0,
        "NONE_UNSPECIFIED"
    ],
    [
        1,
        "SUMMARIZED"
    ],
    [
        2,
        "EMBEDDED"
    ]
], 1);
class ze extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ze).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ze).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ze).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ze, e, t);
    }
    static $() {
        return [
            "RCPCallFrame|1 function_name 9?|2 url 9?|3 line_number 5?|4 column_number 5?"
        ];
    }
}
class We extends i {
    constructor(e){
        super(), this.callFrames = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new We).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new We).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new We).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(We, e, t);
    }
    static $() {
        return [
            "RCPStackTrace|1 call_frames #0*|2 raw_stack_trace 9?",
            ze
        ];
    }
}
class Ve extends i {
    constructor(e){
        super(), this.message = "", this.timestamp = 0, this.level = "", this.clientName = "", this.sessionId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ve).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ve).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ve).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ve, e, t);
    }
    static $() {
        return [
            "RCPLogEntry|1 message 9|2 timestamp 1|3 level 9|4 client_name 9|5 session_id 9|6 stack_trace #0?|7 object_data_json 9?",
            We
        ];
    }
}
class Ke extends i {
    constructor(e){
        super(), this.element = "", this.xpath = "", this.textContent = "", this.extra = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ke).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ke).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ke).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ke, e, t);
    }
    static $() {
        return [
            "RCPUIElementPicked|1 element 9|2 xpath 9|3 text_content 9|4 extra 9|5 component 9?|6 component_props_json 9?"
        ];
    }
}
class Ye extends i {
    constructor(e){
        super(), this.text = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ye).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ye).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ye).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ye, e, t);
    }
    static $() {
        return [
            "RCPChatMessage|1 text 9"
        ];
    }
}
class Ze extends i {
    constructor(e){
        super(), this.message = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ze).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ze).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ze).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ze, e, t);
    }
    static $() {
        return [
            "RCPMessage|1 console #0 message|2 ui_element_picked #1 message|3 chat_message #2 message",
            Ve,
            Ke,
            Ye
        ];
    }
}
