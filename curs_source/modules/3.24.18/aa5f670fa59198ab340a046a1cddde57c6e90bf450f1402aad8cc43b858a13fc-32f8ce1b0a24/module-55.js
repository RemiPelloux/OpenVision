require.r(exports);
require.d(exports, {
    AzureState: ()=>AzureState,
    BM25Chunk: ()=>BM25Chunk,
    BedrockState: ()=>BedrockState,
    ChatExternalLink: ()=>ChatExternalLink,
    ChatQuote: ()=>ChatQuote,
    ClientAction: ()=>ClientAction,
    CloudAgentModelSelection: ()=>CloudAgentModelSelection,
    CloudAgentModelSelection_ParameterValue: ()=>CloudAgentModelSelection_ParameterValue,
    CmdKDebugInfo: ()=>CmdKDebugInfo,
    CmdKDebugInfo_CppFileDiffHistory: ()=>CmdKDebugInfo_CppFileDiffHistory,
    CmdKDebugInfo_OpenEditor: ()=>CmdKDebugInfo_OpenEditor,
    CmdKDebugInfo_PastThought: ()=>CmdKDebugInfo_PastThought,
    CmdKDebugInfo_UnsavedFiles: ()=>CmdKDebugInfo_UnsavedFiles,
    CmdKExternalLink: ()=>CmdKExternalLink,
    CodeBlock: ()=>CodeBlock,
    CodeBlock_Signatures: ()=>CodeBlock_Signatures,
    CodeChunk: ()=>CodeChunk,
    CodeChunk_Intent: ()=>CodeChunk_Intent,
    CodeChunk_SummarizationStrategy: ()=>CodeChunk_SummarizationStrategy,
    CommitDiffString: ()=>CommitDiffString,
    CommitNote: ()=>CommitNote,
    CommitNoteWithEmbeddings: ()=>CommitNoteWithEmbeddings,
    ComposerExternalLink: ()=>ComposerExternalLink,
    ComputeLinesDiffOriginalAndModified: ()=>ComputeLinesDiffOriginalAndModified,
    ConfigureSpendLimitAction: ()=>ConfigureSpendLimitAction,
    CrossExtHostHeader: ()=>CrossExtHostHeader,
    CrossExtHostHeaders: ()=>CrossExtHostHeaders,
    CurrentFileInfo: ()=>CurrentFileInfo,
    CurrentFileInfo_NotebookCell: ()=>CurrentFileInfo_NotebookCell,
    CursorPosition: ()=>CursorPosition,
    CursorRange: ()=>CursorRange,
    CursorRule: ()=>CursorRule,
    CustomErrorDetails: ()=>CustomErrorDetails,
    DashboardAction: ()=>DashboardAction,
    DataframeInfo: ()=>DataframeInfo,
    DataframeInfo_Column: ()=>DataframeInfo_Column,
    DetailedLine: ()=>DetailedLine,
    Diagnostic: ()=>Diagnostic,
    Diagnostic_DiagnosticSeverity: ()=>Diagnostic_DiagnosticSeverity,
    Diagnostic_RelatedInformation: ()=>Diagnostic_RelatedInformation,
    DocumentSymbol: ()=>DocumentSymbol,
    DocumentSymbolWithText: ()=>DocumentSymbolWithText,
    DocumentSymbol_Range: ()=>DocumentSymbol_Range,
    DocumentSymbol_SymbolKind: ()=>DocumentSymbol_SymbolKind,
    EmbeddingModel: ()=>EmbeddingModel,
    EnvironmentInfo: ()=>EnvironmentInfo,
    ErrorAnalyticsMetadata: ()=>ErrorAnalyticsMetadata,
    ErrorButton: ()=>ErrorButton,
    ErrorDetails: ()=>ErrorDetails,
    ErrorDetails_Error: ()=>ErrorDetails_Error,
    ExplicitContext: ()=>ExplicitContext,
    FeatureType: ()=>FeatureType,
    File: ()=>File,
    FileDiff: ()=>FileDiff,
    FileDiff_Chunk: ()=>FileDiff_Chunk,
    FileGit: ()=>FileGit,
    FullCommitNotes: ()=>FullCommitNotes,
    GetDiffRequest: ()=>GetDiffRequest,
    GetDiffRequest_OutputFormat: ()=>GetDiffRequest_OutputFormat,
    GetDiffResponse: ()=>GetDiffResponse,
    GetDiffResponse_SubmoduleDiff: ()=>GetDiffResponse_SubmoduleDiff,
    GitCommit: ()=>GitCommit,
    GitDiff: ()=>GitDiff,
    GitDiff_DiffType: ()=>GitDiff_DiffType,
    HoverDetails: ()=>HoverDetails,
    ImageProto: ()=>ImageProto,
    ImageProto_Dimension: ()=>ImageProto_Dimension,
    LineRange: ()=>LineRange,
    Lint: ()=>Lint,
    LintSeverity: ()=>LintSeverity,
    LinterError: ()=>LinterError,
    LinterErrors: ()=>LinterErrors,
    LinterErrorsWithoutFileContents: ()=>LinterErrorsWithoutFileContents,
    MCPInstructions: ()=>MCPInstructions,
    ModelDetails: ()=>ModelDetails,
    ModelInfo: ()=>ModelInfo,
    PlanChoice: ()=>PlanChoice,
    PureMessage: ()=>PureMessage,
    PureMessage_MessageType: ()=>PureMessage_MessageType,
    RCPCallFrame: ()=>RCPCallFrame,
    RCPChatMessage: ()=>RCPChatMessage,
    RCPLogEntry: ()=>RCPLogEntry,
    RCPMessage: ()=>RCPMessage,
    RCPStackTrace: ()=>RCPStackTrace,
    RCPUIElementPicked: ()=>RCPUIElementPicked,
    ReloadWindowAction: ()=>ReloadWindowAction,
    SelectionWithOrientation: ()=>SelectionWithOrientation,
    SimpleFileChunk: ()=>SimpleFileChunk,
    SimpleRange: ()=>SimpleRange,
    SimpleUnaryCrossExtensionHostMessage: ()=>SimpleUnaryCrossExtensionHostMessage,
    SimplestRange: ()=>SimplestRange,
    SwitchModelAction: ()=>SwitchModelAction,
    SwitchModelAction_ModelParameterValue: ()=>SwitchModelAction_ModelParameterValue,
    UpgradeAction: ()=>UpgradeAction,
    UpgradeChoice: ()=>UpgradeChoice,
    UriComponents: ()=>UriComponents,
    UrlAction: ()=>UrlAction,
    VscodeCPUProperties: ()=>VscodeCPUProperties,
    VscodeOSProperties: ()=>VscodeOSProperties,
    VscodeOSStatistics: ()=>VscodeOSStatistics
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const LintSeverity = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.LintSeverity", [
    {
        no: 0,
        name: "LINT_SEVERITY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "LINT_SEVERITY_ERROR",
        localName: "ERROR"
    },
    {
        no: 2,
        name: "LINT_SEVERITY_WARNING",
        localName: "WARNING"
    },
    {
        no: 3,
        name: "LINT_SEVERITY_INFO",
        localName: "INFO"
    },
    {
        no: 4,
        name: "LINT_SEVERITY_HINT",
        localName: "HINT"
    },
    {
        no: 5,
        name: "LINT_SEVERITY_AI",
        localName: "AI"
    }
]);
const FeatureType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.FeatureType", [
    {
        no: 0,
        name: "FEATURE_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FEATURE_TYPE_EDIT",
        localName: "EDIT"
    },
    {
        no: 2,
        name: "FEATURE_TYPE_GENERATE",
        localName: "GENERATE"
    },
    {
        no: 3,
        name: "FEATURE_TYPE_INLINE_LONG_COMPLETION",
        localName: "INLINE_LONG_COMPLETION"
    }
]);
const EmbeddingModel = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.EmbeddingModel", [
    {
        no: 0,
        name: "EMBEDDING_MODEL_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "EMBEDDING_MODEL_VOYAGE_CODE_2",
        localName: "VOYAGE_CODE_2"
    },
    {
        no: 2,
        name: "EMBEDDING_MODEL_TEXT_EMBEDDINGS_LARGE_3",
        localName: "TEXT_EMBEDDINGS_LARGE_3"
    },
    {
        no: 3,
        name: "EMBEDDING_MODEL_QWEN_1_5B_CUSTOM",
        localName: "QWEN_1_5B_CUSTOM"
    },
    {
        no: 4,
        name: "EMBEDDING_MODEL_MOCK_CHUNKER_ERROR",
        localName: "MOCK_CHUNKER_ERROR"
    },
    {
        no: 5,
        name: "EMBEDDING_MODEL_QWEN_1_5B_0618_CUSTOM",
        localName: "QWEN_1_5B_0618_CUSTOM"
    },
    {
        no: 6,
        name: "EMBEDDING_MODEL_QWEN_1_5B_0618_FP8_MM_CUSTOM",
        localName: "QWEN_1_5B_0618_FP8_MM_CUSTOM"
    }
]);
const CursorPosition = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CursorPosition", ()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "column",
            kind: "scalar",
            T: 5
        }
    ]);
const VscodeOSStatistics = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.VscodeOSStatistics", ()=>[
        {
            no: 1,
            name: "totalmem",
            kind: "scalar",
            T: 1
        },
        {
            no: 2,
            name: "freemem",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "loadavg",
            kind: "scalar",
            T: 1,
            repeated: true
        }
    ]);
const VscodeOSProperties = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.VscodeOSProperties", ()=>[
        {
            no: 1,
            name: "type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "release",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "arch",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "platform",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "cpus",
            kind: "message",
            T: VscodeCPUProperties,
            repeated: true
        }
    ]);
const VscodeCPUProperties = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.VscodeCPUProperties", ()=>[
        {
            no: 1,
            name: "model",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "speed",
            kind: "scalar",
            T: 1
        }
    ]);
const EnvironmentInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EnvironmentInfo", ()=>[
        {
            no: 1,
            name: "exthost_platform",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "exthost_arch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "exthost_release",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "exthost_shell",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "local_timestamp",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "workspace_uris",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 7,
            name: "cursor_version",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "is_remote",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 9,
            name: "local_os_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "home_directory",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "local_timezone",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SelectionWithOrientation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SelectionWithOrientation", ()=>[
        {
            no: 1,
            name: "selection_start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "selection_start_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "position_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "position_column",
            kind: "scalar",
            T: 5
        }
    ]);
const GetDiffRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetDiffRequest", ()=>[
        {
            no: 1,
            name: "cwd",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "base_ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "merge_base",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "target_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "unified_context_lines",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "max_untracked_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "submodule_recurse_depth",
            kind: "scalar",
            T: 5
        },
        {
            no: 10,
            name: "include_space_changes",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "committed_only",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "compute_patch_id",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "return_head_sha",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 14,
            name: "max_response_bytes",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 15,
            name: "max_files_with_contents",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 16,
            name: "max_content_bytes",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 8,
            name: "output_format",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(GetDiffRequest_OutputFormat),
            opt: true
        }
    ]);
const GetDiffRequest_OutputFormat = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.GetDiffRequest.OutputFormat", [
    {
        no: 0,
        name: "OUTPUT_FORMAT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "OUTPUT_FORMAT_NAME_STATUS",
        localName: "NAME_STATUS"
    },
    {
        no: 2,
        name: "OUTPUT_FORMAT_NAME_STATUS_AND_NUMSTAT",
        localName: "NAME_STATUS_AND_NUMSTAT"
    },
    {
        no: 3,
        name: "OUTPUT_FORMAT_FILE_DIFFS",
        localName: "FILE_DIFFS"
    },
    {
        no: 4,
        name: "OUTPUT_FORMAT_DIFFS_WITH_BEFORE_AND_AFTER",
        localName: "DIFFS_WITH_BEFORE_AND_AFTER"
    }
]);
const GetDiffResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetDiffResponse", ()=>[
        {
            no: 1,
            name: "diff",
            kind: "message",
            T: GitDiff
        },
        {
            no: 2,
            name: "submodule_diffs",
            kind: "message",
            T: GetDiffResponse_SubmoduleDiff,
            repeated: true
        },
        {
            no: 3,
            name: "patch_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "head_sha",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "has_uncommitted_changes",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const GetDiffResponse_SubmoduleDiff = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetDiffResponse.SubmoduleDiff", ()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff",
            kind: "message",
            T: GitDiff
        },
        {
            no: 3,
            name: "errored",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "GetDiffResponse_SubmoduleDiff"
});
const SimplestRange = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SimplestRange", ()=>[
        {
            no: 1,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_inclusive",
            kind: "scalar",
            T: 5
        }
    ]);
const ComputeLinesDiffOriginalAndModified = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComputeLinesDiffOriginalAndModified", ()=>[
        {
            no: 1,
            name: "original",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "modified",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const GitDiff = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GitDiff", ()=>[
        {
            no: 1,
            name: "diffs",
            kind: "message",
            T: FileDiff,
            repeated: true
        },
        {
            no: 2,
            name: "diff_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(GitDiff_DiffType)
        },
        {
            no: 3,
            name: "file_contents_omitted",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const GitDiff_DiffType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.GitDiff.DiffType", [
    {
        no: 0,
        name: "DIFF_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "DIFF_TYPE_DIFF_TO_HEAD",
        localName: "DIFF_TO_HEAD"
    },
    {
        no: 2,
        name: "DIFF_TYPE_DIFF_FROM_BRANCH_TO_MAIN",
        localName: "DIFF_FROM_BRANCH_TO_MAIN"
    }
]);
const FileDiff = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FileDiff", ()=>[
        {
            no: 4,
            name: "added",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "removed",
            kind: "scalar",
            T: 5
        },
        {
            no: 1,
            name: "from",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "to",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "chunks",
            kind: "message",
            T: FileDiff_Chunk,
            repeated: true
        },
        {
            no: 6,
            name: "before_file_contents",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "after_file_contents",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "is_generated",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 9,
            name: "old_mode",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "new_mode",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const FileDiff_Chunk = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FileDiff.Chunk", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "old_start",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "old_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "new_start",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "new_lines",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "FileDiff_Chunk"
});
const SimpleRange = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SimpleRange", ()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "start_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line_number_inclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_column",
            kind: "scalar",
            T: 5
        }
    ]);
const SimpleFileChunk = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SimpleFileChunk", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: SimplestRange
        },
        {
            no: 3,
            name: "chunk_hash",
            kind: "scalar",
            T: 9
        }
    ]);
const CmdKDebugInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CmdKDebugInfo", ()=>[
        {
            no: 1,
            name: "remote_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "commit_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "git_patch",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "unsaved_files",
            kind: "message",
            T: CmdKDebugInfo_UnsavedFiles,
            repeated: true
        },
        {
            no: 5,
            name: "unix_timestamp_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 6,
            name: "open_editors",
            kind: "message",
            T: CmdKDebugInfo_OpenEditor,
            repeated: true
        },
        {
            no: 7,
            name: "file_diff_histories",
            kind: "message",
            T: CmdKDebugInfo_CppFileDiffHistory,
            repeated: true
        },
        {
            no: 8,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "branch_notes",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "branch_notes_rich",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "global_notes",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "past_thoughts",
            kind: "message",
            T: CmdKDebugInfo_PastThought,
            repeated: true
        },
        {
            no: 13,
            name: "base_branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 14,
            name: "base_branch_commit_id",
            kind: "scalar",
            T: 9
        }
    ]);
const CmdKDebugInfo_UnsavedFiles = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CmdKDebugInfo.UnsavedFiles", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "contents",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "CmdKDebugInfo_UnsavedFiles"
});
const CmdKDebugInfo_OpenEditor = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CmdKDebugInfo.OpenEditor", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "editor_group_index",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "editor_group_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "is_active",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "CmdKDebugInfo_OpenEditor"
});
const CmdKDebugInfo_CppFileDiffHistory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CmdKDebugInfo.CppFileDiffHistory", ()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff_history",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ], {
    localName: "CmdKDebugInfo_CppFileDiffHistory"
});
const CmdKDebugInfo_PastThought = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CmdKDebugInfo.PastThought", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "time_in_unix_seconds",
            kind: "scalar",
            T: 1
        }
    ], {
    localName: "CmdKDebugInfo_PastThought"
});
const LineRange = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LineRange", ()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_number_inclusive",
            kind: "scalar",
            T: 5
        }
    ]);
const CursorRange = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CursorRange", ()=>[
        {
            no: 1,
            name: "start_position",
            kind: "message",
            T: CursorPosition
        },
        {
            no: 2,
            name: "end_position",
            kind: "message",
            T: CursorPosition
        }
    ]);
const DetailedLine = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DetailedLine", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 2
        },
        {
            no: 3,
            name: "is_signature",
            kind: "scalar",
            T: 8
        }
    ]);
const CodeBlock = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CodeBlock", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_contents",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "file_contents_length",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "range",
            kind: "message",
            T: CursorRange
        },
        {
            no: 4,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "signatures",
            kind: "message",
            T: CodeBlock_Signatures
        },
        {
            no: 6,
            name: "override_contents",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "original_contents",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "detailed_lines",
            kind: "message",
            T: DetailedLine,
            repeated: true
        },
        {
            no: 10,
            name: "file_git_context",
            kind: "message",
            T: FileGit
        }
    ]);
const CodeBlock_Signatures = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CodeBlock.Signatures", ()=>[
        {
            no: 1,
            name: "ranges",
            kind: "message",
            T: CursorRange,
            repeated: true
        }
    ], {
    localName: "CodeBlock_Signatures"
});
const GitCommit = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GitCommit", ()=>[
        {
            no: 1,
            name: "commit",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "author",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "date",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
const FileGit = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FileGit", ()=>[
        {
            no: 1,
            name: "commits",
            kind: "message",
            T: GitCommit,
            repeated: true
        }
    ]);
const File = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.File", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "file_git_context",
            kind: "message",
            T: FileGit
        }
    ]);
const Diagnostic = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.Diagnostic", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: CursorRange
        },
        {
            no: 3,
            name: "severity",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(Diagnostic_DiagnosticSeverity)
        },
        {
            no: 4,
            name: "related_information",
            kind: "message",
            T: Diagnostic_RelatedInformation,
            repeated: true
        }
    ]);
const Diagnostic_DiagnosticSeverity = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.Diagnostic.DiagnosticSeverity", [
    {
        no: 0,
        name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "DIAGNOSTIC_SEVERITY_ERROR",
        localName: "ERROR"
    },
    {
        no: 2,
        name: "DIAGNOSTIC_SEVERITY_WARNING",
        localName: "WARNING"
    },
    {
        no: 3,
        name: "DIAGNOSTIC_SEVERITY_INFORMATION",
        localName: "INFORMATION"
    },
    {
        no: 4,
        name: "DIAGNOSTIC_SEVERITY_HINT",
        localName: "HINT"
    }
]);
const Diagnostic_RelatedInformation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.Diagnostic.RelatedInformation", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: CursorRange
        }
    ], {
    localName: "Diagnostic_RelatedInformation"
});
const Lint = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.Lint", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: SimpleRange
        },
        {
            no: 3,
            name: "severity",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(LintSeverity)
        }
    ]);
const BM25Chunk = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BM25Chunk", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: SimplestRange
        },
        {
            no: 3,
            name: "score",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "relative_path",
            kind: "scalar",
            T: 9
        }
    ]);
const CurrentFileInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CurrentFileInfo", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 18,
            name: "rely_on_filesync",
            kind: "scalar",
            T: 8
        },
        {
            no: 17,
            name: "sha_256_hash",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 16,
            name: "cells",
            kind: "message",
            T: CurrentFileInfo_NotebookCell,
            repeated: true
        },
        {
            no: 10,
            name: "top_chunks",
            kind: "message",
            T: BM25Chunk,
            repeated: true
        },
        {
            no: 9,
            name: "contents_start_at_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "cursor_position",
            kind: "message",
            T: CursorPosition
        },
        {
            no: 4,
            name: "dataframes",
            kind: "message",
            T: DataframeInfo,
            repeated: true
        },
        {
            no: 8,
            name: "total_number_of_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "language_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "selection",
            kind: "message",
            T: CursorRange
        },
        {
            no: 11,
            name: "alternative_version_id",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "diagnostics",
            kind: "message",
            T: Diagnostic,
            repeated: true
        },
        {
            no: 14,
            name: "file_version",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 15,
            name: "cell_start_lines",
            kind: "scalar",
            T: 5,
            repeated: true
        },
        {
            no: 19,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 20,
            name: "line_ending",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const CurrentFileInfo_NotebookCell = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CurrentFileInfo.NotebookCell", [], {
    localName: "CurrentFileInfo_NotebookCell"
});
const AzureState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AzureState", ()=>[
        {
            no: 1,
            name: "api_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "base_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "deployment",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "use_azure",
            kind: "scalar",
            T: 8
        }
    ]);
const BedrockState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BedrockState", ()=>[
        {
            no: 1,
            name: "access_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "secret_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "region",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "use_bedrock",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "session_token",
            kind: "scalar",
            T: 9
        }
    ]);
const ModelDetails = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ModelDetails", ()=>[
        {
            no: 1,
            name: "model_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "api_key",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "enable_ghost_mode",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "azure_state",
            kind: "message",
            T: AzureState,
            opt: true
        },
        {
            no: 5,
            name: "enable_slow_pool",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "openai_api_base_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "bedrock_state",
            kind: "message",
            T: BedrockState,
            opt: true
        },
        {
            no: 8,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const CloudAgentModelSelection = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CloudAgentModelSelection", ()=>[
        {
            no: 1,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "parameters",
            kind: "message",
            T: CloudAgentModelSelection_ParameterValue,
            repeated: true
        },
        {
            no: 3,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const CloudAgentModelSelection_ParameterValue = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CloudAgentModelSelection.ParameterValue", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "CloudAgentModelSelection_ParameterValue"
});
const ModelInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ModelInfo", ()=>[
        {
            no: 1,
            name: "model_name",
            kind: "scalar",
            T: 9
        }
    ]);
const DataframeInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DataframeInfo", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "shape",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "data_dimensionality",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "columns",
            kind: "message",
            T: DataframeInfo_Column,
            repeated: true
        },
        {
            no: 7,
            name: "row_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "index_column",
            kind: "scalar",
            T: 9
        }
    ]);
const DataframeInfo_Column = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DataframeInfo.Column", ()=>[
        {
            no: 1,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "type",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "DataframeInfo_Column"
});
const LinterError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LinterError", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: CursorRange
        },
        {
            no: 3,
            name: "source",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "related_information",
            kind: "message",
            T: Diagnostic_RelatedInformation,
            repeated: true
        },
        {
            no: 5,
            name: "severity",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(Diagnostic_DiagnosticSeverity),
            opt: true
        },
        {
            no: 6,
            name: "is_stale",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const LinterErrors = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LinterErrors", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "errors",
            kind: "message",
            T: LinterError,
            repeated: true
        },
        {
            no: 3,
            name: "file_contents",
            kind: "scalar",
            T: 9
        }
    ]);
const LinterErrorsWithoutFileContents = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LinterErrorsWithoutFileContents", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "errors",
            kind: "message",
            T: LinterError,
            repeated: true
        }
    ]);
const CursorRule = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CursorRule", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "body",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "is_from_glob",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "always_apply",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "attach_to_background_agents",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 7,
            name: "full_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "environments",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 9,
            name: "disabled_environments",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 10,
            name: "plugin",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ExplicitContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ExplicitContext", ()=>[
        {
            no: 1,
            name: "context",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo_context",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "rules",
            kind: "message",
            T: CursorRule,
            repeated: true
        },
        {
            no: 4,
            name: "mode_specific_context",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "mcp_instructions",
            kind: "message",
            T: MCPInstructions,
            repeated: true
        }
    ]);
const MCPInstructions = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.MCPInstructions", ()=>[
        {
            no: 1,
            name: "server_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "instructions",
            kind: "scalar",
            T: 9
        }
    ]);
const PureMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PureMessage", ()=>[
        {
            no: 1,
            name: "message_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(PureMessage_MessageType)
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
const PureMessage_MessageType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.PureMessage.MessageType", [
    {
        no: 0,
        name: "MESSAGE_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MESSAGE_TYPE_SYSTEM",
        localName: "SYSTEM"
    },
    {
        no: 2,
        name: "MESSAGE_TYPE_USER",
        localName: "USER"
    },
    {
        no: 3,
        name: "MESSAGE_TYPE_ASSISTANT",
        localName: "ASSISTANT"
    }
]);
const DocumentSymbol = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DocumentSymbol", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "kind",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(DocumentSymbol_SymbolKind)
        },
        {
            no: 5,
            name: "container_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "range",
            kind: "message",
            T: DocumentSymbol_Range
        },
        {
            no: 7,
            name: "selection_range",
            kind: "message",
            T: DocumentSymbol_Range
        },
        {
            no: 8,
            name: "children",
            kind: "message",
            T: DocumentSymbol,
            repeated: true
        }
    ]);
const DocumentSymbol_SymbolKind = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.DocumentSymbol.SymbolKind", [
    {
        no: 0,
        name: "SYMBOL_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SYMBOL_KIND_FILE",
        localName: "FILE"
    },
    {
        no: 2,
        name: "SYMBOL_KIND_MODULE",
        localName: "MODULE"
    },
    {
        no: 3,
        name: "SYMBOL_KIND_NAMESPACE",
        localName: "NAMESPACE"
    },
    {
        no: 4,
        name: "SYMBOL_KIND_PACKAGE",
        localName: "PACKAGE"
    },
    {
        no: 5,
        name: "SYMBOL_KIND_CLASS",
        localName: "CLASS"
    },
    {
        no: 6,
        name: "SYMBOL_KIND_METHOD",
        localName: "METHOD"
    },
    {
        no: 7,
        name: "SYMBOL_KIND_PROPERTY",
        localName: "PROPERTY"
    },
    {
        no: 8,
        name: "SYMBOL_KIND_FIELD",
        localName: "FIELD"
    },
    {
        no: 9,
        name: "SYMBOL_KIND_CONSTRUCTOR",
        localName: "CONSTRUCTOR"
    },
    {
        no: 10,
        name: "SYMBOL_KIND_ENUM",
        localName: "ENUM"
    },
    {
        no: 11,
        name: "SYMBOL_KIND_INTERFACE",
        localName: "INTERFACE"
    },
    {
        no: 12,
        name: "SYMBOL_KIND_FUNCTION",
        localName: "FUNCTION"
    },
    {
        no: 13,
        name: "SYMBOL_KIND_VARIABLE",
        localName: "VARIABLE"
    },
    {
        no: 14,
        name: "SYMBOL_KIND_CONSTANT",
        localName: "CONSTANT"
    },
    {
        no: 15,
        name: "SYMBOL_KIND_STRING",
        localName: "STRING"
    },
    {
        no: 16,
        name: "SYMBOL_KIND_NUMBER",
        localName: "NUMBER"
    },
    {
        no: 17,
        name: "SYMBOL_KIND_BOOLEAN",
        localName: "BOOLEAN"
    },
    {
        no: 18,
        name: "SYMBOL_KIND_ARRAY",
        localName: "ARRAY"
    },
    {
        no: 19,
        name: "SYMBOL_KIND_OBJECT",
        localName: "OBJECT"
    },
    {
        no: 20,
        name: "SYMBOL_KIND_KEY",
        localName: "KEY"
    },
    {
        no: 21,
        name: "SYMBOL_KIND_NULL",
        localName: "NULL"
    },
    {
        no: 22,
        name: "SYMBOL_KIND_ENUM_MEMBER",
        localName: "ENUM_MEMBER"
    },
    {
        no: 23,
        name: "SYMBOL_KIND_STRUCT",
        localName: "STRUCT"
    },
    {
        no: 24,
        name: "SYMBOL_KIND_EVENT",
        localName: "EVENT"
    },
    {
        no: 25,
        name: "SYMBOL_KIND_OPERATOR",
        localName: "OPERATOR"
    },
    {
        no: 26,
        name: "SYMBOL_KIND_TYPE_PARAMETER",
        localName: "TYPE_PARAMETER"
    }
]);
const DocumentSymbol_Range = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DocumentSymbol.Range", ()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "start_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_column",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "DocumentSymbol_Range"
});
const HoverDetails = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.HoverDetails", ()=>[
        {
            no: 1,
            name: "code_details",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "markdown_blocks",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const UriComponents = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UriComponents", ()=>[
        {
            no: 1,
            name: "scheme",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "authority",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "query",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "fragment",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const DocumentSymbolWithText = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DocumentSymbolWithText", ()=>[
        {
            no: 1,
            name: "symbol",
            kind: "message",
            T: DocumentSymbol
        },
        {
            no: 2,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "text_in_symbol_range",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "uri_components",
            kind: "message",
            T: UriComponents
        }
    ]);
const ErrorDetails = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ErrorDetails", ()=>[
        {
            no: 1,
            name: "error",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ErrorDetails_Error)
        },
        {
            no: 2,
            name: "details",
            kind: "message",
            T: CustomErrorDetails
        },
        {
            no: 3,
            name: "is_expected",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const ErrorDetails_Error = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.ErrorDetails.Error", [
    {
        no: 0,
        name: "ERROR_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ERROR_BAD_API_KEY",
        localName: "BAD_API_KEY"
    },
    {
        no: 42,
        name: "ERROR_BAD_USER_API_KEY",
        localName: "BAD_USER_API_KEY"
    },
    {
        no: 2,
        name: "ERROR_NOT_LOGGED_IN",
        localName: "NOT_LOGGED_IN"
    },
    {
        no: 3,
        name: "ERROR_INVALID_AUTH_ID",
        localName: "INVALID_AUTH_ID"
    },
    {
        no: 4,
        name: "ERROR_NOT_HIGH_ENOUGH_PERMISSIONS",
        localName: "NOT_HIGH_ENOUGH_PERMISSIONS"
    },
    {
        no: 18,
        name: "ERROR_AGENT_REQUIRES_LOGIN",
        localName: "AGENT_REQUIRES_LOGIN"
    },
    {
        no: 5,
        name: "ERROR_BAD_MODEL_NAME",
        localName: "BAD_MODEL_NAME"
    },
    {
        no: 39,
        name: "ERROR_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 40,
        name: "ERROR_DEPRECATED",
        localName: "DEPRECATED"
    },
    {
        no: 6,
        name: "ERROR_USER_NOT_FOUND",
        localName: "USER_NOT_FOUND"
    },
    {
        no: 7,
        name: "ERROR_FREE_USER_RATE_LIMIT_EXCEEDED",
        localName: "FREE_USER_RATE_LIMIT_EXCEEDED"
    },
    {
        no: 8,
        name: "ERROR_PRO_USER_RATE_LIMIT_EXCEEDED",
        localName: "PRO_USER_RATE_LIMIT_EXCEEDED"
    },
    {
        no: 9,
        name: "ERROR_FREE_USER_USAGE_LIMIT",
        localName: "FREE_USER_USAGE_LIMIT"
    },
    {
        no: 10,
        name: "ERROR_PRO_USER_USAGE_LIMIT",
        localName: "PRO_USER_USAGE_LIMIT"
    },
    {
        no: 41,
        name: "ERROR_RESOURCE_EXHAUSTED",
        localName: "RESOURCE_EXHAUSTED"
    },
    {
        no: 11,
        name: "ERROR_AUTH_TOKEN_NOT_FOUND",
        localName: "AUTH_TOKEN_NOT_FOUND"
    },
    {
        no: 12,
        name: "ERROR_AUTH_TOKEN_EXPIRED",
        localName: "AUTH_TOKEN_EXPIRED"
    },
    {
        no: 13,
        name: "ERROR_OPENAI",
        localName: "OPENAI"
    },
    {
        no: 14,
        name: "ERROR_OPENAI_RATE_LIMIT_EXCEEDED",
        localName: "OPENAI_RATE_LIMIT_EXCEEDED"
    },
    {
        no: 20,
        name: "ERROR_MAX_TOKENS",
        localName: "MAX_TOKENS"
    },
    {
        no: 23,
        name: "ERROR_PRO_USER_ONLY",
        localName: "PRO_USER_ONLY"
    },
    {
        no: 21,
        name: "ERROR_USER_ABORTED_REQUEST",
        localName: "USER_ABORTED_REQUEST"
    },
    {
        no: 25,
        name: "ERROR_TIMEOUT",
        localName: "TIMEOUT"
    },
    {
        no: 22,
        name: "ERROR_GENERIC_RATE_LIMIT_EXCEEDED",
        localName: "GENERIC_RATE_LIMIT_EXCEEDED"
    },
    {
        no: 28,
        name: "ERROR_GPT_4_VISION_PREVIEW_RATE_LIMIT",
        localName: "GPT_4_VISION_PREVIEW_RATE_LIMIT"
    },
    {
        no: 29,
        name: "ERROR_CUSTOM_MESSAGE",
        localName: "CUSTOM_MESSAGE"
    },
    {
        no: 30,
        name: "ERROR_OUTDATED_CLIENT",
        localName: "OUTDATED_CLIENT"
    },
    {
        no: 31,
        name: "ERROR_CLAUDE_IMAGE_TOO_LARGE",
        localName: "CLAUDE_IMAGE_TOO_LARGE"
    },
    {
        no: 33,
        name: "ERROR_FILE_NOT_FOUND",
        localName: "FILE_NOT_FOUND"
    },
    {
        no: 34,
        name: "ERROR_API_KEY_RATE_LIMIT",
        localName: "API_KEY_RATE_LIMIT"
    },
    {
        no: 35,
        name: "ERROR_DEBOUNCED",
        localName: "DEBOUNCED"
    },
    {
        no: 36,
        name: "ERROR_BAD_REQUEST",
        localName: "BAD_REQUEST"
    },
    {
        no: 37,
        name: "ERROR_REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED",
        localName: "REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED"
    },
    {
        no: 38,
        name: "ERROR_UNAUTHORIZED",
        localName: "UNAUTHORIZED"
    },
    {
        no: 43,
        name: "ERROR_CONVERSATION_TOO_LONG",
        localName: "CONVERSATION_TOO_LONG"
    },
    {
        no: 44,
        name: "ERROR_USAGE_PRICING_REQUIRED",
        localName: "USAGE_PRICING_REQUIRED"
    },
    {
        no: 45,
        name: "ERROR_USAGE_PRICING_REQUIRED_CHANGEABLE",
        localName: "USAGE_PRICING_REQUIRED_CHANGEABLE"
    },
    {
        no: 46,
        name: "ERROR_GITHUB_NO_USER_CREDENTIALS",
        localName: "GITHUB_NO_USER_CREDENTIALS"
    },
    {
        no: 47,
        name: "ERROR_GITHUB_USER_NO_ACCESS",
        localName: "GITHUB_USER_NO_ACCESS"
    },
    {
        no: 48,
        name: "ERROR_GITHUB_APP_NO_ACCESS",
        localName: "GITHUB_APP_NO_ACCESS"
    },
    {
        no: 49,
        name: "ERROR_GITHUB_MULTIPLE_OWNERS",
        localName: "GITHUB_MULTIPLE_OWNERS"
    },
    {
        no: 50,
        name: "ERROR_RATE_LIMITED",
        localName: "RATE_LIMITED"
    },
    {
        no: 51,
        name: "ERROR_RATE_LIMITED_CHANGEABLE",
        localName: "RATE_LIMITED_CHANGEABLE"
    },
    {
        no: 52,
        name: "ERROR_CUSTOM",
        localName: "CUSTOM"
    },
    {
        no: 53,
        name: "ERROR_HOOKS_BLOCKED",
        localName: "HOOKS_BLOCKED"
    },
    {
        no: 54,
        name: "ERROR_SUSPICIOUS_USAGE_BLOCKED",
        localName: "SUSPICIOUS_USAGE_BLOCKED"
    },
    {
        no: 55,
        name: "ERROR_EXTENSION_HOST_TIMEOUT",
        localName: "EXTENSION_HOST_TIMEOUT"
    },
    {
        no: 56,
        name: "ERROR_NETWORK_ERROR",
        localName: "NETWORK_ERROR"
    },
    {
        no: 57,
        name: "ERROR_PROVIDER_ERROR",
        localName: "PROVIDER_ERROR"
    },
    {
        no: 58,
        name: "ERROR_MODEL_BLOCKED",
        localName: "MODEL_BLOCKED"
    },
    {
        no: 59,
        name: "ERROR_INTERNAL",
        localName: "INTERNAL"
    },
    {
        no: 60,
        name: "ERROR_MAX_MODE_REQUIRED",
        localName: "MAX_MODE_REQUIRED"
    },
    {
        no: 61,
        name: "ERROR_MODEL_NO_LONGER_SUPPORTED",
        localName: "MODEL_NO_LONGER_SUPPORTED"
    },
    {
        no: 62,
        name: "ERROR_PRICING_WARNING",
        localName: "PRICING_WARNING"
    },
    {
        no: 63,
        name: "ERROR_SLOW_POOL",
        localName: "SLOW_POOL"
    },
    {
        no: 64,
        name: "ERROR_UNSUPPORTED_REGION",
        localName: "UNSUPPORTED_REGION"
    },
    {
        no: 65,
        name: "ERROR_ACCOUNT_CLOSED",
        localName: "ACCOUNT_CLOSED"
    },
    {
        no: 66,
        name: "ERROR_TENANT_RESTRICTION_VIOLATION",
        localName: "TENANT_RESTRICTION_VIOLATION"
    }
]);
const CustomErrorDetails = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CustomErrorDetails", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "is_retryable",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "show_request_id",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "should_show_immediate_error",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "buttons",
            kind: "message",
            T: ErrorButton,
            repeated: true
        },
        {
            no: 7,
            name: "additional_info",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 9,
            name: "plan_choices",
            kind: "message",
            T: PlanChoice,
            repeated: true
        },
        {
            no: 10,
            name: "analytics_metadata",
            kind: "message",
            T: ErrorAnalyticsMetadata,
            opt: true
        }
    ]);
const ErrorAnalyticsMetadata = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ErrorAnalyticsMetadata", ()=>[
        {
            no: 1,
            name: "action_required",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const PlanChoice = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PlanChoice", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "sublabel",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]);
const ErrorButton = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ErrorButton", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "upgrade",
            kind: "message",
            T: UpgradeAction,
            oneof: "action"
        },
        {
            no: 3,
            name: "switch_model",
            kind: "message",
            T: SwitchModelAction,
            oneof: "action"
        },
        {
            no: 4,
            name: "configure_spend_limit",
            kind: "message",
            T: ConfigureSpendLimitAction,
            oneof: "action"
        },
        {
            no: 5,
            name: "url",
            kind: "message",
            T: UrlAction,
            oneof: "action"
        },
        {
            no: 6,
            name: "upgrade_choice",
            kind: "message",
            T: UpgradeChoice,
            oneof: "action"
        },
        {
            no: 7,
            name: "dashboard_action",
            kind: "message",
            T: DashboardAction,
            oneof: "action"
        },
        {
            no: 8,
            name: "reload_window",
            kind: "message",
            T: ReloadWindowAction,
            oneof: "action"
        },
        {
            no: 9,
            name: "client_action",
            kind: "message",
            T: ClientAction,
            oneof: "action"
        }
    ]);
const ClientAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ClientAction", ()=>[
        {
            no: 1,
            name: "command_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "args",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]);
const ReloadWindowAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReloadWindowAction", []);
const DashboardAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DashboardAction", ()=>[
        {
            no: 1,
            name: "action",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "args",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 3,
            name: "success_message",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const UpgradeChoice = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UpgradeChoice", []);
const UpgradeAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UpgradeAction", ()=>[
        {
            no: 1,
            name: "membership_to_upgrade_to",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "try_immediate_upgrade",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 3,
            name: "allow_trial",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "dashboard_action",
            kind: "message",
            T: DashboardAction,
            opt: true
        }
    ]);
const SwitchModelAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwitchModelAction", ()=>[
        {
            no: 1,
            name: "suggested_model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "parameters",
            kind: "message",
            T: SwitchModelAction_ModelParameterValue,
            repeated: true
        },
        {
            no: 3,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const SwitchModelAction_ModelParameterValue = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwitchModelAction.ModelParameterValue", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "SwitchModelAction_ModelParameterValue"
});
const ConfigureSpendLimitAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConfigureSpendLimitAction", ()=>[
        {
            no: 1,
            name: "confirm_label",
            kind: "scalar",
            T: 9
        }
    ]);
const UrlAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UrlAction", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]);
const ImageProto = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ImageProto", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "dimension",
            kind: "message",
            T: ImageProto_Dimension
        },
        {
            no: 3,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "task_specific_description",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ImageProto_Dimension = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ImageProto.Dimension", ()=>[
        {
            no: 1,
            name: "width",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "height",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ImageProto_Dimension"
});
const ChatQuote = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ChatQuote", ()=>[
        {
            no: 1,
            name: "markdown",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bubble_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "section_index",
            kind: "scalar",
            T: 5
        }
    ]);
const ChatExternalLink = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ChatExternalLink", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "pdf_content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "is_pdf",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "filename",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ComposerExternalLink = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerExternalLink", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "pdf_content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "is_pdf",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "filename",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const CmdKExternalLink = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CmdKExternalLink", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "uuid",
            kind: "scalar",
            T: 9
        }
    ]);
const CommitNote = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CommitNote", ()=>[
        {
            no: 1,
            name: "note",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "commit_hash",
            kind: "scalar",
            T: 9
        }
    ]);
const CommitNoteWithEmbeddings = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CommitNoteWithEmbeddings", ()=>[
        {
            no: 1,
            name: "note",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "commit_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "embeddings",
            kind: "scalar",
            T: 1,
            repeated: true
        }
    ]);
const CommitDiffString = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CommitDiffString", ()=>[
        {
            no: 1,
            name: "diff",
            kind: "scalar",
            T: 9
        }
    ]);
const FullCommitNotes = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FullCommitNotes", ()=>[
        {
            no: 1,
            name: "notes",
            kind: "message",
            T: CommitNote,
            repeated: true
        },
        {
            no: 2,
            name: "commit_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "files_changed_relative_path",
            kind: "scalar",
            T: 9
        }
    ]);
const CrossExtHostHeader = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CrossExtHostHeader", ()=>[
        {
            no: 1,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]);
const CrossExtHostHeaders = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CrossExtHostHeaders", ()=>[
        {
            no: 1,
            name: "headers",
            kind: "message",
            T: CrossExtHostHeader,
            repeated: true
        }
    ]);
const SimpleUnaryCrossExtensionHostMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SimpleUnaryCrossExtensionHostMessage", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "header",
            kind: "message",
            T: CrossExtHostHeaders
        },
        {
            no: 3,
            name: "trailer",
            kind: "message",
            T: CrossExtHostHeaders
        },
        {
            no: 4,
            name: "is_error",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "connect_error",
            kind: "scalar",
            T: 9
        }
    ]);
const CodeChunk = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CodeChunk", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "summarization_strategy",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CodeChunk_SummarizationStrategy),
            opt: true
        },
        {
            no: 5,
            name: "language_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "intent",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CodeChunk_Intent),
            opt: true
        },
        {
            no: 7,
            name: "is_final_version",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "is_first_version",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const CodeChunk_Intent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.CodeChunk.Intent", [
    {
        no: 0,
        name: "INTENT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "INTENT_COMPOSER_FILE",
        localName: "COMPOSER_FILE"
    },
    {
        no: 2,
        name: "INTENT_COMPRESSED_COMPOSER_FILE",
        localName: "COMPRESSED_COMPOSER_FILE"
    }
]);
const CodeChunk_SummarizationStrategy = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.CodeChunk.SummarizationStrategy", [
    {
        no: 0,
        name: "SUMMARIZATION_STRATEGY_NONE_UNSPECIFIED",
        localName: "NONE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUMMARIZATION_STRATEGY_SUMMARIZED",
        localName: "SUMMARIZED"
    },
    {
        no: 2,
        name: "SUMMARIZATION_STRATEGY_EMBEDDED",
        localName: "EMBEDDED"
    }
]);
const RCPCallFrame = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RCPCallFrame", ()=>[
        {
            no: 1,
            name: "function_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "line_number",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "column_number",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const RCPStackTrace = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RCPStackTrace", ()=>[
        {
            no: 1,
            name: "call_frames",
            kind: "message",
            T: RCPCallFrame,
            repeated: true
        },
        {
            no: 2,
            name: "raw_stack_trace",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const RCPLogEntry = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RCPLogEntry", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timestamp",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "level",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "client_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "stack_trace",
            kind: "message",
            T: RCPStackTrace,
            opt: true
        },
        {
            no: 7,
            name: "object_data_json",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const RCPUIElementPicked = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RCPUIElementPicked", ()=>[
        {
            no: 1,
            name: "element",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "xpath",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "text_content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "extra",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "component",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "component_props_json",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const RCPChatMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RCPChatMessage", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]);
const RCPMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RCPMessage", ()=>[
        {
            no: 1,
            name: "console",
            kind: "message",
            T: RCPLogEntry,
            oneof: "message"
        },
        {
            no: 2,
            name: "ui_element_picked",
            kind: "message",
            T: RCPUIElementPicked,
            oneof: "message"
        },
        {
            no: 3,
            name: "chat_message",
            kind: "message",
            T: RCPChatMessage,
            oneof: "message"
        }
    ]);
