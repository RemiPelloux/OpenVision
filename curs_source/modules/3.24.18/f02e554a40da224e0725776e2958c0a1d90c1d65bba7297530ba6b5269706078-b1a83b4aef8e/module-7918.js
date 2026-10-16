"use strict";
require.r(exports), require.d(exports, {
    AzureState: ()=>z,
    BM25Chunk: ()=>H,
    BedrockState: ()=>W,
    ChatExternalLink: ()=>xt,
    ChatQuote: ()=>Tt,
    ClientAction: ()=>Jt,
    CloudAgentModelSelection: ()=>j,
    CloudAgentModelSelection_ParameterValue: ()=>X,
    CmdKDebugInfo: ()=>k,
    CmdKDebugInfo_CppFileDiffHistory: ()=>R,
    CmdKDebugInfo_OpenEditor: ()=>q,
    CmdKDebugInfo_PastThought: ()=>P,
    CmdKDebugInfo_UnsavedFiles: ()=>v,
    CmdKExternalLink: ()=>Dt,
    CodeBlock: ()=>D,
    CodeBlock_Signatures: ()=>U,
    CodeChunk: ()=>Gt,
    CodeChunk_Intent: ()=>Ht,
    CodeChunk_SummarizationStrategy: ()=>Kt,
    CommitDiffString: ()=>Mt,
    CommitNote: ()=>Ut,
    CommitNoteWithEmbeddings: ()=>Qt,
    ComposerExternalLink: ()=>Nt,
    ComputeLinesDiffOriginalAndModified: ()=>S,
    ConfigureSpendLimitAction: ()=>vt,
    CrossExtHostHeader: ()=>Ft,
    CrossExtHostHeaders: ()=>Lt,
    CurrentFileInfo: ()=>K,
    CurrentFileInfo_NotebookCell: ()=>V,
    CursorPosition: ()=>l,
    CursorRange: ()=>x,
    CursorRule: ()=>it,
    CustomErrorDetails: ()=>_t,
    DashboardAction: ()=>Et,
    DataframeInfo: ()=>tt,
    DataframeInfo_Column: ()=>et,
    DetailedLine: ()=>N,
    Diagnostic: ()=>F,
    Diagnostic_DiagnosticSeverity: ()=>L,
    Diagnostic_RelatedInformation: ()=>$,
    DocumentSymbol: ()=>lt,
    DocumentSymbolWithText: ()=>ht,
    DocumentSymbol_Range: ()=>dt,
    DocumentSymbol_SymbolKind: ()=>mt,
    EmbeddingModel: ()=>c,
    EnvironmentInfo: ()=>p,
    ErrorAnalyticsMetadata: ()=>yt,
    ErrorButton: ()=>St,
    ErrorDetails: ()=>gt,
    ErrorDetails_Error: ()=>At,
    ExplicitContext: ()=>ot,
    FeatureType: ()=>u,
    File: ()=>O,
    FileDiff: ()=>E,
    FileDiff_Chunk: ()=>I,
    FileGit: ()=>M,
    FullCommitNotes: ()=>Ot,
    GetDiffRequest: ()=>g,
    GetDiffRequest_OutputFormat: ()=>A,
    GetDiffResponse: ()=>_,
    GetDiffResponse_SubmoduleDiff: ()=>y,
    GitCommit: ()=>Q,
    GitDiff: ()=>J,
    GitDiff_DiffType: ()=>B,
    HoverDetails: ()=>ft,
    ImageProto: ()=>Rt,
    ImageProto_Dimension: ()=>Pt,
    LineRange: ()=>T,
    Lint: ()=>G,
    LintSeverity: ()=>a,
    LinterError: ()=>rt,
    LinterErrors: ()=>nt,
    LinterErrorsWithoutFileContents: ()=>st,
    MCPInstructions: ()=>at,
    ModelDetails: ()=>Y,
    ModelInfo: ()=>Z,
    PlanChoice: ()=>wt,
    PureMessage: ()=>ut,
    PureMessage_MessageType: ()=>ct,
    RCPCallFrame: ()=>Vt,
    RCPChatMessage: ()=>jt,
    RCPLogEntry: ()=>Wt,
    RCPMessage: ()=>Xt,
    RCPStackTrace: ()=>zt,
    RCPUIElementPicked: ()=>Yt,
    ReloadWindowAction: ()=>Bt,
    SelectionWithOrientation: ()=>h,
    SimpleFileChunk: ()=>b,
    SimpleRange: ()=>C,
    SimpleUnaryCrossExtensionHostMessage: ()=>$t,
    SimplestRange: ()=>w,
    SwitchModelAction: ()=>bt,
    SwitchModelAction_ModelParameterValue: ()=>kt,
    UpgradeAction: ()=>Ct,
    UpgradeChoice: ()=>It,
    UriComponents: ()=>pt,
    UrlAction: ()=>qt,
    VscodeCPUProperties: ()=>f,
    VscodeOSProperties: ()=>d,
    VscodeOSStatistics: ()=>m
});
var n = require("./module-6038.js"), s = require("./module-8592.js");
const i = "aiserver.v1.";
class o extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return i;
    }
}
var a = (0, s.QT)(n.proto3, i, "LintSeverity", [
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
], 1), u = (0, s.QT)(n.proto3, i, "FeatureType", [
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
], 1), c = (0, s.QT)(n.proto3, i, "EmbeddingModel", [
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
class l extends o {
    constructor(t){
        super(), this.line = 0, this.column = 0, n.proto3.util.initPartial(t, this);
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
            "CursorPosition|1 line 5|2 column 5"
        ];
    }
}
class m extends o {
    constructor(t){
        super(), this.totalmem = 0, this.freemem = 0, this.loadavg = [], n.proto3.util.initPartial(t, this);
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
            "VscodeOSStatistics|1 totalmem 1|2 freemem 1|3 loadavg 1*"
        ];
    }
}
class d extends o {
    constructor(t){
        super(), this.type = "", this.release = "", this.arch = "", this.platform = "", this.cpus = [], n.proto3.util.initPartial(t, this);
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
            "VscodeOSProperties|1 type 9|2 release 9|3 arch 9|4 platform 9|5 cpus #0*",
            f
        ];
    }
}
class f extends o {
    constructor(t){
        super(), this.model = "", this.speed = 0, n.proto3.util.initPartial(t, this);
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
            "VscodeCPUProperties|1 model 9|2 speed 1"
        ];
    }
}
class p extends o {
    constructor(t){
        super(), this.workspaceUris = [], n.proto3.util.initPartial(t, this);
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
            "EnvironmentInfo|1 exthost_platform 9?|2 exthost_arch 9?|3 exthost_release 9?|4 exthost_shell 9?|5 local_timestamp 9?|6 workspace_uris 9*|7 cursor_version 9?|8 is_remote 8?|9 local_os_type 9?|10 home_directory 9?|11 local_timezone 9?"
        ];
    }
}
class h extends o {
    constructor(t){
        super(), this.selectionStartLineNumber = 0, this.selectionStartColumn = 0, this.positionLineNumber = 0, this.positionColumn = 0, n.proto3.util.initPartial(t, this);
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
            "SelectionWithOrientation|1 selection_start_line_number 5|2 selection_start_column 5|3 position_line_number 5|4 position_column 5"
        ];
    }
}
class g extends o {
    constructor(t){
        super(), this.cwd = "", this.ref = "", this.baseRef = "", this.mergeBase = !1, this.targetPaths = [], this.maxUntrackedFiles = 0, this.submoduleRecurseDepth = 0, this.includeSpaceChanges = !1, this.committedOnly = !1, this.computePatchId = !1, n.proto3.util.initPartial(t, this);
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
            "GetDiffRequest|1 cwd 9|2 ref 9|3 base_ref 9|4 merge_base 8|5 target_paths 9*|6 unified_context_lines 5?|7 max_untracked_files 5|9 submodule_recurse_depth 5|10 include_space_changes 8|11 committed_only 8|12 compute_patch_id 8|13 return_head_sha 8?|14 max_response_bytes 5?|15 max_files_with_contents 13?|16 max_content_bytes 13?|8 output_format #0?",
            A
        ];
    }
}
var A = (0, s.QT)(n.proto3, i, "GetDiffRequest.OutputFormat", [
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
class _ extends o {
    constructor(t){
        super(), this.submoduleDiffs = [], n.proto3.util.initPartial(t, this);
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
            "GetDiffResponse|1 diff #0|2 submodule_diffs #1*|3 patch_id 9?|4 head_sha 9?|5 has_uncommitted_changes 8?",
            J,
            y
        ];
    }
}
class y extends o {
    constructor(t){
        super(), this.relativePath = "", this.errored = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new y).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new y).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new y).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(y, t, e);
    }
    static $() {
        return [
            "GetDiffResponse.SubmoduleDiff|1 relative_path 9|2 diff #0|3 errored 8",
            J
        ];
    }
}
class w extends o {
    constructor(t){
        super(), this.startLine = 0, this.endLineInclusive = 0, n.proto3.util.initPartial(t, this);
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
            "SimplestRange|1 start_line 5|2 end_line_inclusive 5"
        ];
    }
}
class S extends o {
    constructor(t){
        super(), this.original = [], this.modified = [], n.proto3.util.initPartial(t, this);
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
            "ComputeLinesDiffOriginalAndModified|1 original 9*|2 modified 9*"
        ];
    }
}
class J extends o {
    constructor(t){
        super(), this.diffs = [], this.diffType = B.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
            "GitDiff|1 diffs #0*|2 diff_type #1|3 file_contents_omitted 8?",
            E,
            B
        ];
    }
}
var B = (0, s.QT)(n.proto3, i, "GitDiff.DiffType", [
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
class E extends o {
    constructor(t){
        super(), this.added = 0, this.removed = 0, this.from = "", this.to = "", this.chunks = [], n.proto3.util.initPartial(t, this);
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
            "FileDiff|4 added 5|5 removed 5|1 from 9|2 to 9|3 chunks #0*|6 before_file_contents 9?|7 after_file_contents 9?|8 is_generated 8?|9 old_mode 9?|10 new_mode 9?",
            I
        ];
    }
}
class I extends o {
    constructor(t){
        super(), this.content = "", this.lines = [], this.oldStart = 0, this.oldLines = 0, this.newStart = 0, this.newLines = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new I).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new I).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new I).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(I, t, e);
    }
    static $() {
        return [
            "FileDiff.Chunk|1 content 9|2 lines 9*|3 old_start 5|4 old_lines 5|5 new_start 5|6 new_lines 5"
        ];
    }
}
class C extends o {
    constructor(t){
        super(), this.startLineNumber = 0, this.startColumn = 0, this.endLineNumberInclusive = 0, this.endColumn = 0, n.proto3.util.initPartial(t, this);
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
            "SimpleRange|1 start_line_number 5|2 start_column 5|3 end_line_number_inclusive 5|4 end_column 5"
        ];
    }
}
class b extends o {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.chunkHash = "", n.proto3.util.initPartial(t, this);
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
            "SimpleFileChunk|1 relative_workspace_path 9|2 range #0|3 chunk_hash 9",
            w
        ];
    }
}
class k extends o {
    constructor(t){
        super(), this.remoteUrl = "", this.commitId = "", this.gitPatch = "", this.unsavedFiles = [], this.unixTimestampMs = 0, this.openEditors = [], this.fileDiffHistories = [], this.branchName = "", this.branchNotes = "", this.branchNotesRich = "", this.globalNotes = "", this.pastThoughts = [], this.baseBranchName = "", this.baseBranchCommitId = "", n.proto3.util.initPartial(t, this);
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
            "CmdKDebugInfo|1 remote_url 9|2 commit_id 9|3 git_patch 9|4 unsaved_files #0*|5 unix_timestamp_ms 1|6 open_editors #1*|7 file_diff_histories #2*|8 branch_name 9|9 branch_notes 9|12 branch_notes_rich 9|10 global_notes 9|11 past_thoughts #3*|13 base_branch_name 9|14 base_branch_commit_id 9",
            v,
            q,
            R,
            P
        ];
    }
}
class v extends o {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.contents = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new v).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new v).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new v).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(v, t, e);
    }
    static $() {
        return [
            "CmdKDebugInfo.UnsavedFiles|1 relative_workspace_path 9|2 contents 9"
        ];
    }
}
class q extends o {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.editorGroupIndex = 0, this.editorGroupId = 0, this.isActive = !1, n.proto3.util.initPartial(t, this);
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
            "CmdKDebugInfo.OpenEditor|1 relative_workspace_path 9|2 editor_group_index 5|3 editor_group_id 5|4 is_active 8"
        ];
    }
}
class R extends o {
    constructor(t){
        super(), this.fileName = "", this.diffHistory = [], n.proto3.util.initPartial(t, this);
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
            "CmdKDebugInfo.CppFileDiffHistory|1 file_name 9|2 diff_history 9*"
        ];
    }
}
class P extends o {
    constructor(t){
        super(), this.text = "", this.timeInUnixSeconds = 0, n.proto3.util.initPartial(t, this);
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
            "CmdKDebugInfo.PastThought|1 text 9|2 time_in_unix_seconds 1"
        ];
    }
}
class T extends o {
    constructor(t){
        super(), this.startLineNumber = 0, this.endLineNumberInclusive = 0, n.proto3.util.initPartial(t, this);
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
            "LineRange|1 start_line_number 5|2 end_line_number_inclusive 5"
        ];
    }
}
class x extends o {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "CursorRange|1 start_position #0|2 end_position #0",
            l
        ];
    }
}
class N extends o {
    constructor(t){
        super(), this.text = "", this.lineNumber = 0, this.isSignature = !1, n.proto3.util.initPartial(t, this);
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
            "DetailedLine|1 text 9|2 line_number 2|3 is_signature 8"
        ];
    }
}
class D extends o {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.contents = "", this.detailedLines = [], n.proto3.util.initPartial(t, this);
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
            "CodeBlock|1 relative_workspace_path 9|2 file_contents 9?|9 file_contents_length 5?|3 range #0|4 contents 9|5 signatures #1|6 override_contents 9?|7 original_contents 9?|8 detailed_lines #2*|10 file_git_context #3",
            x,
            U,
            N,
            M
        ];
    }
}
class U extends o {
    constructor(t){
        super(), this.ranges = [], n.proto3.util.initPartial(t, this);
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
            "CodeBlock.Signatures|1 ranges #0*",
            x
        ];
    }
}
class Q extends o {
    constructor(t){
        super(), this.commit = "", this.author = "", this.date = "", this.message = "", n.proto3.util.initPartial(t, this);
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
            "GitCommit|1 commit 9|2 author 9|3 date 9|4 message 9"
        ];
    }
}
class M extends o {
    constructor(t){
        super(), this.commits = [], n.proto3.util.initPartial(t, this);
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
            "FileGit|1 commits #0*",
            Q
        ];
    }
}
class O extends o {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.contents = "", n.proto3.util.initPartial(t, this);
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
            "File|1 relative_workspace_path 9|2 contents 9|3 file_git_context #0",
            M
        ];
    }
}
class F extends o {
    constructor(t){
        super(), this.message = "", this.severity = L.UNSPECIFIED, this.relatedInformation = [], n.proto3.util.initPartial(t, this);
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
            "Diagnostic|1 message 9|2 range #0|3 severity #1|4 related_information #2*",
            x,
            L,
            $
        ];
    }
}
var L = (0, s.QT)(n.proto3, i, "Diagnostic.DiagnosticSeverity", [
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
class $ extends o {
    constructor(t){
        super(), this.message = "", n.proto3.util.initPartial(t, this);
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
            "Diagnostic.RelatedInformation|1 message 9|2 range #0",
            x
        ];
    }
}
class G extends o {
    constructor(t){
        super(), this.message = "", this.severity = a.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new G).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new G).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new G).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(G, t, e);
    }
    static $() {
        return [
            "Lint|1 message 9|2 range #0|3 severity #1",
            C,
            a
        ];
    }
}
class H extends o {
    constructor(t){
        super(), this.content = "", this.score = 0, this.relativePath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new H).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new H).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new H).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(H, t, e);
    }
    static $() {
        return [
            "BM25Chunk|1 content 9|2 range #0|3 score 5|4 relative_path 9",
            w
        ];
    }
}
class K extends o {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.contents = "", this.relyOnFilesync = !1, this.cells = [], this.topChunks = [], this.contentsStartAtLine = 0, this.dataframes = [], this.totalNumberOfLines = 0, this.languageId = "", this.diagnostics = [], this.cellStartLines = [], this.workspaceRootPath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new K).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new K).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new K).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(K, t, e);
    }
    static $() {
        return [
            "CurrentFileInfo|1 relative_workspace_path 9|2 contents 9|18 rely_on_filesync 8|17 sha_256_hash 9?|16 cells #0*|10 top_chunks #1*|9 contents_start_at_line 5|3 cursor_position #2|4 dataframes #3*|8 total_number_of_lines 5|5 language_id 9|6 selection #4|11 alternative_version_id 5?|7 diagnostics #5*|14 file_version 5?|15 cell_start_lines 5*|19 workspace_root_path 9|20 line_ending 9?",
            V,
            H,
            l,
            tt,
            x,
            F
        ];
    }
}
class V extends o {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new V).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new V).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new V).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(V, t, e);
    }
    static $() {
        return [
            "CurrentFileInfo.NotebookCell"
        ];
    }
}
class z extends o {
    constructor(t){
        super(), this.apiKey = "", this.baseUrl = "", this.deployment = "", this.useAzure = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new z).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new z).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new z).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(z, t, e);
    }
    static $() {
        return [
            "AzureState|1 api_key 9|2 base_url 9|3 deployment 9|4 use_azure 8"
        ];
    }
}
class W extends o {
    constructor(t){
        super(), this.accessKey = "", this.secretKey = "", this.region = "", this.useBedrock = !1, this.sessionToken = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new W).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new W).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new W).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(W, t, e);
    }
    static $() {
        return [
            "BedrockState|1 access_key 9|2 secret_key 9|3 region 9|4 use_bedrock 8|5 session_token 9"
        ];
    }
}
class Y extends o {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Y).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Y).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Y).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Y, t, e);
    }
    static $() {
        return [
            "ModelDetails|1 model_name 9?|2 api_key 9?|3 enable_ghost_mode 8?|4 azure_state #0?|5 enable_slow_pool 8?|6 openai_api_base_url 9?|7 bedrock_state #1?|8 max_mode 8?",
            z,
            W
        ];
    }
}
class j extends o {
    constructor(t){
        super(), this.modelId = "", this.parameters = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new j).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new j).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new j).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(j, t, e);
    }
    static $() {
        return [
            "CloudAgentModelSelection|1 model_id 9|2 parameters #0*|3 max_mode 8?",
            X
        ];
    }
}
class X extends o {
    constructor(t){
        super(), this.id = "", this.value = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new X).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new X).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new X).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(X, t, e);
    }
    static $() {
        return [
            "CloudAgentModelSelection.ParameterValue|1 id 9|2 value 9"
        ];
    }
}
class Z extends o {
    constructor(t){
        super(), this.modelName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Z).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Z).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Z).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Z, t, e);
    }
    static $() {
        return [
            "ModelInfo|1 model_name 9"
        ];
    }
}
class tt extends o {
    constructor(t){
        super(), this.name = "", this.shape = "", this.dataDimensionality = 0, this.columns = [], this.rowCount = 0, this.indexColumn = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tt, t, e);
    }
    static $() {
        return [
            "DataframeInfo|1 name 9|2 shape 9|3 data_dimensionality 5|6 columns #0*|7 row_count 5|8 index_column 9",
            et
        ];
    }
}
class et extends o {
    constructor(t){
        super(), this.key = "", this.type = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new et).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new et).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new et).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(et, t, e);
    }
    static $() {
        return [
            "DataframeInfo.Column|1 key 9|2 type 9"
        ];
    }
}
class rt extends o {
    constructor(t){
        super(), this.message = "", this.relatedInformation = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rt, t, e);
    }
    static $() {
        return [
            "LinterError|1 message 9|2 range #0|3 source 9?|4 related_information #1*|5 severity #2?|6 is_stale 8?",
            x,
            $,
            L
        ];
    }
}
class nt extends o {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.errors = [], this.fileContents = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nt, t, e);
    }
    static $() {
        return [
            "LinterErrors|1 relative_workspace_path 9|2 errors #0*|3 file_contents 9",
            rt
        ];
    }
}
class st extends o {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.errors = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new st).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new st).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new st).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(st, t, e);
    }
    static $() {
        return [
            "LinterErrorsWithoutFileContents|1 relative_workspace_path 9|2 errors #0*",
            rt
        ];
    }
}
class it extends o {
    constructor(t){
        super(), this.name = "", this.description = "", this.environments = [], this.disabledEnvironments = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new it).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new it).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new it).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(it, t, e);
    }
    static $() {
        return [
            "CursorRule|1 name 9|2 description 9|3 body 9?|4 is_from_glob 8?|5 always_apply 8?|6 attach_to_background_agents 8?|7 full_path 9?|8 environments 9*|9 disabled_environments 9*|10 plugin 9?|11 marketplace 9?"
        ];
    }
}
class ot extends o {
    constructor(t){
        super(), this.context = "", this.rules = [], this.mcpInstructions = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ot).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ot).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ot).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ot, t, e);
    }
    static $() {
        return [
            "ExplicitContext|1 context 9|2 repo_context 9?|3 rules #0*|4 mode_specific_context 9?|5 mcp_instructions #1*",
            it,
            at
        ];
    }
}
class at extends o {
    constructor(t){
        super(), this.serverName = "", this.serverIdentifier = "", this.instructions = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new at).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new at).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new at).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(at, t, e);
    }
    static $() {
        return [
            "MCPInstructions|1 server_name 9|2 server_identifier 9|3 instructions 9"
        ];
    }
}
class ut extends o {
    constructor(t){
        super(), this.messageType = ct.UNSPECIFIED, this.content = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ut).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ut).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ut).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ut, t, e);
    }
    static $() {
        return [
            "PureMessage|1 message_type #0|2 content 9",
            ct
        ];
    }
}
var ct = (0, s.QT)(n.proto3, i, "PureMessage.MessageType", [
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
class lt extends o {
    constructor(t){
        super(), this.name = "", this.detail = "", this.kind = mt.UNSPECIFIED, this.containerName = "", this.children = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lt, t, e);
    }
    static $() {
        return [
            "DocumentSymbol|1 name 9|2 detail 9|3 kind #0|5 container_name 9|6 range #1|7 selection_range #1|8 children #2*",
            mt,
            dt,
            lt
        ];
    }
}
var mt = (0, s.QT)(n.proto3, i, "DocumentSymbol.SymbolKind", [
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
class dt extends o {
    constructor(t){
        super(), this.startLineNumber = 0, this.startColumn = 0, this.endLineNumber = 0, this.endColumn = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dt, t, e);
    }
    static $() {
        return [
            "DocumentSymbol.Range|1 start_line_number 5|2 start_column 5|3 end_line_number 5|4 end_column 5"
        ];
    }
}
class ft extends o {
    constructor(t){
        super(), this.codeDetails = "", this.markdownBlocks = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ft).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ft).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ft).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ft, t, e);
    }
    static $() {
        return [
            "HoverDetails|1 code_details 9|2 markdown_blocks 9*"
        ];
    }
}
class pt extends o {
    constructor(t){
        super(), this.scheme = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pt, t, e);
    }
    static $() {
        return [
            "UriComponents|1 scheme 9|2 authority 9?|3 path 9?|4 query 9?|5 fragment 9?"
        ];
    }
}
class ht extends o {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.textInSymbolRange = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ht).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ht).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ht).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ht, t, e);
    }
    static $() {
        return [
            "DocumentSymbolWithText|1 symbol #0|2 relative_workspace_path 9|3 text_in_symbol_range 9|4 uri_components #1",
            lt,
            pt
        ];
    }
}
class gt extends o {
    constructor(t){
        super(), this.error = At.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gt, t, e);
    }
    static $() {
        return [
            "ErrorDetails|1 error #0|2 details #1|3 is_expected 8?",
            At,
            _t
        ];
    }
}
var At = (0, s.QT)(n.proto3, i, "ErrorDetails.Error", [
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
class _t extends o {
    constructor(t){
        super(), this.title = "", this.detail = "", this.buttons = [], this.additionalInfo = {}, this.planChoices = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _t).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _t).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _t).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_t, t, e);
    }
    static $() {
        return [
            "CustomErrorDetails|1 title 9|2 detail 9|3 allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown 8?|4 is_retryable 8?|5 show_request_id 8?|6 should_show_immediate_error 8?|8 buttons #0*|7 additional_info 9,9|9 plan_choices #1*|10 analytics_metadata #2?",
            St,
            wt,
            yt
        ];
    }
}
class yt extends o {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yt, t, e);
    }
    static $() {
        return [
            "ErrorAnalyticsMetadata|1 action_required 9?"
        ];
    }
}
class wt extends o {
    constructor(t){
        super(), this.label = "", this.value = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wt, t, e);
    }
    static $() {
        return [
            "PlanChoice|1 label 9|2 sublabel 9?|3 description 9?|4 value 9"
        ];
    }
}
class St extends o {
    constructor(t){
        super(), this.label = "", this.action = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new St).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new St).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new St).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(St, t, e);
    }
    static $() {
        return [
            "ErrorButton|1 label 9|2 upgrade #0 action|3 switch_model #1 action|4 configure_spend_limit #2 action|5 url #3 action|6 upgrade_choice #4 action|7 dashboard_action #5 action|8 reload_window #6 action|9 client_action #7 action",
            Ct,
            bt,
            vt,
            qt,
            It,
            Et,
            Bt,
            Jt
        ];
    }
}
class Jt extends o {
    constructor(t){
        super(), this.commandId = "", this.args = {}, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jt, t, e);
    }
    static $() {
        return [
            "ClientAction|1 command_id 9|2 args 9,9"
        ];
    }
}
class Bt extends o {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bt, t, e);
    }
    static $() {
        return [
            "ReloadWindowAction"
        ];
    }
}
class Et extends o {
    constructor(t){
        super(), this.action = "", this.args = {}, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Et).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Et).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Et).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Et, t, e);
    }
    static $() {
        return [
            "DashboardAction|1 action 9|2 args 9,9|3 success_message 9?"
        ];
    }
}
class It extends o {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new It).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new It).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new It).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(It, t, e);
    }
    static $() {
        return [
            "UpgradeChoice"
        ];
    }
}
class Ct extends o {
    constructor(t){
        super(), this.membershipToUpgradeTo = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ct).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ct).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ct).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ct, t, e);
    }
    static $() {
        return [
            "UpgradeAction|1 membership_to_upgrade_to 9|2 try_immediate_upgrade 8?|3 allow_trial 8?|4 dashboard_action #0?",
            Et
        ];
    }
}
class bt extends o {
    constructor(t){
        super(), this.parameters = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bt, t, e);
    }
    static $() {
        return [
            "SwitchModelAction|1 suggested_model 9?|2 parameters #0*|3 max_mode 8?",
            kt
        ];
    }
}
class kt extends o {
    constructor(t){
        super(), this.id = "", this.value = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new kt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new kt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new kt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(kt, t, e);
    }
    static $() {
        return [
            "SwitchModelAction.ModelParameterValue|1 id 9|2 value 9"
        ];
    }
}
class vt extends o {
    constructor(t){
        super(), this.confirmLabel = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vt, t, e);
    }
    static $() {
        return [
            "ConfigureSpendLimitAction|1 confirm_label 9"
        ];
    }
}
class qt extends o {
    constructor(t){
        super(), this.url = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qt, t, e);
    }
    static $() {
        return [
            "UrlAction|1 url 9"
        ];
    }
}
class Rt extends o {
    constructor(t){
        super(), this.data = new Uint8Array(0), this.uuid = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rt, t, e);
    }
    static $() {
        return [
            "ImageProto|1 data 12|2 dimension #0|3 uuid 9|4 task_specific_description 9?",
            Pt
        ];
    }
}
class Pt extends o {
    constructor(t){
        super(), this.width = 0, this.height = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pt, t, e);
    }
    static $() {
        return [
            "ImageProto.Dimension|1 width 5|2 height 5"
        ];
    }
}
class Tt extends o {
    constructor(t){
        super(), this.markdown = "", this.bubbleId = "", this.sectionIndex = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tt, t, e);
    }
    static $() {
        return [
            "ChatQuote|1 markdown 9|2 bubble_id 9|3 section_index 5"
        ];
    }
}
class xt extends o {
    constructor(t){
        super(), this.url = "", this.uuid = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xt, t, e);
    }
    static $() {
        return [
            "ChatExternalLink|1 url 9|2 uuid 9|3 pdf_content 9?|4 is_pdf 8?|5 filename 9?"
        ];
    }
}
class Nt extends o {
    constructor(t){
        super(), this.url = "", this.uuid = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nt, t, e);
    }
    static $() {
        return [
            "ComposerExternalLink|1 url 9|2 uuid 9|3 pdf_content 9?|4 is_pdf 8?|5 filename 9?"
        ];
    }
}
class Dt extends o {
    constructor(t){
        super(), this.url = "", this.uuid = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Dt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Dt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Dt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Dt, t, e);
    }
    static $() {
        return [
            "CmdKExternalLink|1 url 9|2 uuid 9"
        ];
    }
}
class Ut extends o {
    constructor(t){
        super(), this.note = "", this.commitHash = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ut).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ut).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ut).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ut, t, e);
    }
    static $() {
        return [
            "CommitNote|1 note 9|2 commit_hash 9"
        ];
    }
}
class Qt extends o {
    constructor(t){
        super(), this.note = "", this.commitHash = "", this.embeddings = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Qt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Qt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Qt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Qt, t, e);
    }
    static $() {
        return [
            "CommitNoteWithEmbeddings|1 note 9|2 commit_hash 9|3 embeddings 1*"
        ];
    }
}
class Mt extends o {
    constructor(t){
        super(), this.diff = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Mt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Mt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Mt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Mt, t, e);
    }
    static $() {
        return [
            "CommitDiffString|1 diff 9"
        ];
    }
}
class Ot extends o {
    constructor(t){
        super(), this.notes = [], this.commitHash = "", this.repoUrl = "", this.filesChangedRelativePath = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ot).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ot).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ot).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ot, t, e);
    }
    static $() {
        return [
            "FullCommitNotes|1 notes #0*|2 commit_hash 9|3 repo_url 9|4 files_changed_relative_path 9",
            Ut
        ];
    }
}
class Ft extends o {
    constructor(t){
        super(), this.key = "", this.value = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ft).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ft).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ft).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ft, t, e);
    }
    static $() {
        return [
            "CrossExtHostHeader|1 key 9|2 value 9"
        ];
    }
}
class Lt extends o {
    constructor(t){
        super(), this.headers = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Lt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Lt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Lt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Lt, t, e);
    }
    static $() {
        return [
            "CrossExtHostHeaders|1 headers #0*",
            Ft
        ];
    }
}
class $t extends o {
    constructor(t){
        super(), this.message = new Uint8Array(0), this.isError = !1, this.connectError = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $t).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $t).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $t).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($t, t, e);
    }
    static $() {
        return [
            "SimpleUnaryCrossExtensionHostMessage|1 message 12|2 header #0|3 trailer #0|4 is_error 8|5 connect_error 9",
            Lt
        ];
    }
}
class Gt extends o {
    constructor(t){
        super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, this.lines = [], this.languageIdentifier = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Gt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Gt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Gt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Gt, t, e);
    }
    static $() {
        return [
            "CodeChunk|1 relative_workspace_path 9|2 start_line_number 5|3 lines 9*|4 summarization_strategy #0?|5 language_identifier 9|6 intent #1?|7 is_final_version 8?|8 is_first_version 8?",
            Kt,
            Ht
        ];
    }
}
var Ht = (0, s.QT)(n.proto3, i, "CodeChunk.Intent", [
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
], 1), Kt = (0, s.QT)(n.proto3, i, "CodeChunk.SummarizationStrategy", [
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
class Vt extends o {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Vt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Vt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Vt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Vt, t, e);
    }
    static $() {
        return [
            "RCPCallFrame|1 function_name 9?|2 url 9?|3 line_number 5?|4 column_number 5?"
        ];
    }
}
class zt extends o {
    constructor(t){
        super(), this.callFrames = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new zt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new zt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new zt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(zt, t, e);
    }
    static $() {
        return [
            "RCPStackTrace|1 call_frames #0*|2 raw_stack_trace 9?",
            Vt
        ];
    }
}
class Wt extends o {
    constructor(t){
        super(), this.message = "", this.timestamp = 0, this.level = "", this.clientName = "", this.sessionId = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Wt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Wt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Wt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Wt, t, e);
    }
    static $() {
        return [
            "RCPLogEntry|1 message 9|2 timestamp 1|3 level 9|4 client_name 9|5 session_id 9|6 stack_trace #0?|7 object_data_json 9?",
            zt
        ];
    }
}
class Yt extends o {
    constructor(t){
        super(), this.element = "", this.xpath = "", this.textContent = "", this.extra = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Yt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Yt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Yt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Yt, t, e);
    }
    static $() {
        return [
            "RCPUIElementPicked|1 element 9|2 xpath 9|3 text_content 9|4 extra 9|5 component 9?|6 component_props_json 9?"
        ];
    }
}
class jt extends o {
    constructor(t){
        super(), this.text = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new jt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new jt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new jt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(jt, t, e);
    }
    static $() {
        return [
            "RCPChatMessage|1 text 9"
        ];
    }
}
class Xt extends o {
    constructor(t){
        super(), this.message = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Xt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Xt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Xt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Xt, t, e);
    }
    static $() {
        return [
            "RCPMessage|1 console #0 message|2 ui_element_picked #1 message|3 chat_message #2 message",
            Wt,
            Yt,
            jt
        ];
    }
}
