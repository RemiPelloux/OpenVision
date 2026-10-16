require.r(exports);
require.d(exports, {
    AiWebSearchResult: ()=>AiWebSearchResult,
    AiWebSearchResults: ()=>AiWebSearchResults,
    ChunkType: ()=>ChunkType,
    CodeChunkContextInclusionInfo: ()=>CodeChunkContextInclusionInfo,
    CodeChunkContextInclusionInfoV2: ()=>CodeChunkContextInclusionInfoV2,
    CodeChunkContextInclusionInfoV2_InclusionType: ()=>CodeChunkContextInclusionInfoV2_InclusionType,
    CodeChunkContextInclusionInfoV2_Intent: ()=>CodeChunkContextInclusionInfoV2_Intent,
    CodeChunkContextInclusionInfo_InclusionType: ()=>CodeChunkContextInclusionInfo_InclusionType,
    CodeChunkContextInclusionInfo_Intent: ()=>CodeChunkContextInclusionInfo_Intent,
    CodeChunkContextInclusionInfo_TokenCount: ()=>CodeChunkContextInclusionInfo_TokenCount,
    Commit: ()=>Commit,
    ComposerFileDiff: ()=>ComposerFileDiff,
    ComposerFileDiffHistory: ()=>ComposerFileDiffHistory,
    ComposerFileDiff_ChunkDiff: ()=>ComposerFileDiff_ChunkDiff,
    ComposerFileDiff_Editor: ()=>ComposerFileDiff_Editor,
    ContextPiece: ()=>ContextPiece,
    ContextPieceUpdate: ()=>ContextPieceUpdate,
    ContextRerankingCandidateFile: ()=>ContextRerankingCandidateFile,
    ContextToRank: ()=>ContextToRank,
    ContextWindowStatus: ()=>ContextWindowStatus,
    ConversationMessage: ()=>ConversationMessage,
    ConversationMessageHeader: ()=>ConversationMessageHeader,
    ConversationMessage_ApproximateLintError: ()=>ConversationMessage_ApproximateLintError,
    ConversationMessage_CodeChunk: ()=>ConversationMessage_CodeChunk,
    ConversationMessage_CodeChunk_CodeChunkGitContext: ()=>ConversationMessage_CodeChunk_CodeChunkGitContext,
    ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo: ()=>ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo,
    ConversationMessage_CodeChunk_Intent: ()=>ConversationMessage_CodeChunk_Intent,
    ConversationMessage_CodeChunk_SummarizationStrategy: ()=>ConversationMessage_CodeChunk_SummarizationStrategy,
    ConversationMessage_ComposerContext: ()=>ConversationMessage_ComposerContext,
    ConversationMessage_DeletedFile: ()=>ConversationMessage_DeletedFile,
    ConversationMessage_DiffSinceLastApply: ()=>ConversationMessage_DiffSinceLastApply,
    ConversationMessage_DocumentationSelection: ()=>ConversationMessage_DocumentationSelection,
    ConversationMessage_EditLocation: ()=>ConversationMessage_EditLocation,
    ConversationMessage_EditTrailContext: ()=>ConversationMessage_EditTrailContext,
    ConversationMessage_HumanChange: ()=>ConversationMessage_HumanChange,
    ConversationMessage_IdeEditorsState: ()=>ConversationMessage_IdeEditorsState,
    ConversationMessage_IdeEditorsState_File: ()=>ConversationMessage_IdeEditorsState_File,
    ConversationMessage_KnowledgeItem: ()=>ConversationMessage_KnowledgeItem,
    ConversationMessage_Lints: ()=>ConversationMessage_Lints,
    ConversationMessage_McpDescriptor: ()=>ConversationMessage_McpDescriptor,
    ConversationMessage_McpDescriptor_Tool: ()=>ConversationMessage_McpDescriptor_Tool,
    ConversationMessage_MessageType: ()=>ConversationMessage_MessageType,
    ConversationMessage_MultiRangeCodeChunk: ()=>ConversationMessage_MultiRangeCodeChunk,
    ConversationMessage_MultiRangeCodeChunk_RangeWithPriority: ()=>ConversationMessage_MultiRangeCodeChunk_RangeWithPriority,
    ConversationMessage_NotepadContext: ()=>ConversationMessage_NotepadContext,
    ConversationMessage_PlanUpdate: ()=>ConversationMessage_PlanUpdate,
    ConversationMessage_RecentLocation: ()=>ConversationMessage_RecentLocation,
    ConversationMessage_RenderedDiff: ()=>ConversationMessage_RenderedDiff,
    ConversationMessage_SimulatedMessageMetadata: ()=>ConversationMessage_SimulatedMessageMetadata,
    ConversationMessage_Thinking: ()=>ConversationMessage_Thinking,
    ConversationMessage_ThinkingStyle: ()=>ConversationMessage_ThinkingStyle,
    ConversationMessage_ToolResult: ()=>ConversationMessage_ToolResult,
    ConversationSummary: ()=>ConversationSummary,
    ConversationSummaryStarter: ()=>ConversationSummaryStarter,
    ConversationSummaryStrategy: ()=>ConversationSummaryStrategy,
    ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation: ()=>ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation,
    ConvertOALToNALRequest: ()=>ConvertOALToNALRequest,
    ConvertOALToNALResponse: ()=>ConvertOALToNALResponse,
    CurrentFileLocationData: ()=>CurrentFileLocationData,
    DeepSearchSubagentParams: ()=>DeepSearchSubagentParams,
    DeepSearchSubagentReturnValue: ()=>DeepSearchSubagentReturnValue,
    DeepSearchSubagentReturnValue_ContextItem: ()=>DeepSearchSubagentReturnValue_ContextItem,
    DiffFile: ()=>DiffFile,
    DiffHistoryData: ()=>DiffHistoryData,
    DocsReference: ()=>DocsReference,
    Document: ()=>Document,
    DocumentIdsWithScores: ()=>DocumentIdsWithScores,
    DocumentationCitation: ()=>DocumentationCitation,
    FileLink: ()=>FileLink,
    FixLintsSubagentParams: ()=>FixLintsSubagentParams,
    FixLintsSubagentReturnValue: ()=>FixLintsSubagentReturnValue,
    FolderFileInfo: ()=>FolderFileInfo,
    FolderInfo: ()=>FolderInfo,
    GetPromptDryRunResponse: ()=>GetPromptDryRunResponse,
    GetPromptDryRunResponse_TokenCount: ()=>GetPromptDryRunResponse_TokenCount,
    InterpreterResult: ()=>InterpreterResult,
    ProjectLayout: ()=>ProjectLayout,
    ProjectLayoutDirectory: ()=>ProjectLayoutDirectory,
    ProjectLayoutDirectoryContent: ()=>ProjectLayoutDirectoryContent,
    ProjectLayoutFile: ()=>ProjectLayoutFile,
    PullRequest: ()=>PullRequest,
    RankedContext: ()=>RankedContext,
    RedDiff: ()=>RedDiff,
    RerankDocumentsRequest: ()=>RerankDocumentsRequest,
    RerankDocumentsResponse: ()=>RerankDocumentsResponse,
    SearchFileInfo: ()=>SearchFileInfo,
    SearchInfo: ()=>SearchInfo,
    ServiceStatusUpdate: ()=>ServiceStatusUpdate,
    SimpleFileDiff: ()=>SimpleFileDiff,
    SimpleFileDiff_Chunk: ()=>SimpleFileDiff_Chunk,
    SpanContext: ()=>SpanContext,
    SpecSubagentParams: ()=>SpecSubagentParams,
    SpecSubagentReturnValue: ()=>SpecSubagentReturnValue,
    StarsFeedbackRequest: ()=>StarsFeedbackRequest,
    StatusUpdate: ()=>StatusUpdate,
    StatusUpdates: ()=>StatusUpdates,
    StreamReplayChatRequest: ()=>StreamReplayChatRequest,
    StreamStart: ()=>StreamStart,
    StreamUnifiedChatRequest: ()=>StreamUnifiedChatRequest,
    StreamUnifiedChatRequestWithTools: ()=>StreamUnifiedChatRequestWithTools,
    StreamUnifiedChatRequestWithToolsIdempotent: ()=>StreamUnifiedChatRequestWithToolsIdempotent,
    StreamUnifiedChatRequest_CodeSearchResult: ()=>StreamUnifiedChatRequest_CodeSearchResult,
    StreamUnifiedChatRequest_CurrentPlan: ()=>StreamUnifiedChatRequest_CurrentPlan,
    StreamUnifiedChatRequest_FullFileCmdKOptions: ()=>StreamUnifiedChatRequest_FullFileCmdKOptions,
    StreamUnifiedChatRequest_RecentEdits: ()=>StreamUnifiedChatRequest_RecentEdits,
    StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo: ()=>StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo,
    StreamUnifiedChatRequest_RecentEdits_FileInfo: ()=>StreamUnifiedChatRequest_RecentEdits_FileInfo,
    StreamUnifiedChatRequest_RedDiff: ()=>StreamUnifiedChatRequest_RedDiff,
    StreamUnifiedChatRequest_ThinkingLevel: ()=>StreamUnifiedChatRequest_ThinkingLevel,
    StreamUnifiedChatRequest_UnifiedMode: ()=>StreamUnifiedChatRequest_UnifiedMode,
    StreamUnifiedChatResponse: ()=>StreamUnifiedChatResponse,
    StreamUnifiedChatResponseWithTools: ()=>StreamUnifiedChatResponseWithTools,
    StreamUnifiedChatResponseWithToolsIdempotent: ()=>StreamUnifiedChatResponseWithToolsIdempotent,
    StreamUnifiedChatResponse_ChunkIdentity: ()=>StreamUnifiedChatResponse_ChunkIdentity,
    StreamUnifiedChatResponse_FinalToolResult: ()=>StreamUnifiedChatResponse_FinalToolResult,
    StreamUnifiedChatResponse_ImageDescription: ()=>StreamUnifiedChatResponse_ImageDescription,
    StreamUnifiedChatResponse_UsedCode: ()=>StreamUnifiedChatResponse_UsedCode,
    StringReplacement: ()=>StringReplacement,
    SubagentInfo: ()=>SubagentInfo,
    SubagentReturnCall: ()=>SubagentReturnCall,
    SubagentType: ()=>SubagentType,
    SuggestedCodeBlock: ()=>SuggestedCodeBlock,
    SymbolLink: ()=>SymbolLink,
    TaskSubagentParams: ()=>TaskSubagentParams,
    TaskSubagentReturnValue: ()=>TaskSubagentReturnValue,
    UserResponseToSuggestedCodeBlock: ()=>UserResponseToSuggestedCodeBlock,
    UserResponseToSuggestedCodeBlock_UserResponseType: ()=>UserResponseToSuggestedCodeBlock_UserResponseType,
    UserRules: ()=>UserRules,
    ViewableCommitProps: ()=>ViewableCommitProps,
    ViewableDiffProps: ()=>ViewableDiffProps,
    ViewableGitContext: ()=>ViewableGitContext,
    ViewablePRProps: ()=>ViewablePRProps,
    WarmStreamUnifiedChatWithToolsResponse: ()=>WarmStreamUnifiedChatWithToolsResponse,
    WebCitation: ()=>WebCitation,
    WebReference: ()=>WebReference,
    WelcomeMessage: ()=>WelcomeMessage,
    WorkspaceFolder: ()=>WorkspaceFolder
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _tools_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-151.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-55.js");
var _docs_pb_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-152.js");
var _repository_pb_js__WEBPACK_IMPORTED_MODULE_4__ = require("./module-91.js");
var _composer_pb_js__WEBPACK_IMPORTED_MODULE_5__ = require("./module-63.js");
var _agent_v1_agent_pb_js__WEBPACK_IMPORTED_MODULE_6__ = require("./module-67.js");
var _agent_v1_request_context_exec_pb_js__WEBPACK_IMPORTED_MODULE_7__ = require("./module-144.js");
var _agent_v1_selected_context_pb_js__WEBPACK_IMPORTED_MODULE_8__ = require("./module-149.js");
var _shadow_workspace_pb_js__WEBPACK_IMPORTED_MODULE_9__ = require("./module-153.js");
const ChunkType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.ChunkType", [
    {
        no: 0,
        name: "CHUNK_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CHUNK_TYPE_CODEBASE",
        localName: "CODEBASE"
    },
    {
        no: 2,
        name: "CHUNK_TYPE_LONG_FILE",
        localName: "LONG_FILE"
    },
    {
        no: 3,
        name: "CHUNK_TYPE_DOCS",
        localName: "DOCS"
    }
]);
const SubagentType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.SubagentType", [
    {
        no: 0,
        name: "SUBAGENT_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUBAGENT_TYPE_DEEP_SEARCH",
        localName: "DEEP_SEARCH"
    },
    {
        no: 2,
        name: "SUBAGENT_TYPE_FIX_LINTS",
        localName: "FIX_LINTS"
    },
    {
        no: 3,
        name: "SUBAGENT_TYPE_TASK",
        localName: "TASK"
    },
    {
        no: 4,
        name: "SUBAGENT_TYPE_SPEC",
        localName: "SPEC"
    }
]);
const StreamReplayChatRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamReplayChatRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "tokens_per_second",
            kind: "scalar",
            T: 1,
            opt: true
        }
    ]);
const StreamUnifiedChatRequestWithTools = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamUnifiedChatRequestWithTools", ()=>[
        {
            no: 1,
            name: "stream_unified_chat_request",
            kind: "message",
            T: StreamUnifiedChatRequest,
            oneof: "request"
        },
        {
            no: 2,
            name: "client_side_tool_v2_result",
            kind: "message",
            T: _tools_pb_js__WEBPACK_IMPORTED_MODULE_1__.ClientSideToolV2Result,
            oneof: "request"
        }
    ]);
const UserRules = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UserRules", ()=>[
        {
            no: 1,
            name: "rules",
            kind: "message",
            T: ConversationMessage_KnowledgeItem,
            repeated: true
        }
    ]);
const StreamStart = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamStart", ()=>[
        {
            no: 1,
            name: "padding",
            kind: "scalar",
            T: 9
        }
    ]);
const SpanContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SpanContext", ()=>[
        {
            no: 1,
            name: "trace_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "span_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "trace_flags",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 4,
            name: "trace_state",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const StreamUnifiedChatResponseWithTools = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamUnifiedChatResponseWithTools", ()=>[
        {
            no: 1,
            name: "client_side_tool_v2_call",
            kind: "message",
            T: _tools_pb_js__WEBPACK_IMPORTED_MODULE_1__.ClientSideToolV2Call,
            oneof: "response"
        },
        {
            no: 2,
            name: "stream_unified_chat_response",
            kind: "message",
            T: StreamUnifiedChatResponse,
            oneof: "response"
        },
        {
            no: 3,
            name: "conversation_summary",
            kind: "message",
            T: ConversationSummary,
            oneof: "response"
        },
        {
            no: 4,
            name: "user_rules",
            kind: "message",
            T: UserRules,
            oneof: "response"
        },
        {
            no: 5,
            name: "stream_start",
            kind: "message",
            T: StreamStart,
            oneof: "response"
        },
        {
            no: 6,
            name: "tracing_context",
            kind: "message",
            T: SpanContext,
            opt: true
        },
        {
            no: 7,
            name: "event_id",
            kind: "scalar",
            T: 9
        }
    ]);
const StreamUnifiedChatRequestWithToolsIdempotent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamUnifiedChatRequestWithToolsIdempotent", ()=>[
        {
            no: 1,
            name: "client_chunk",
            kind: "message",
            T: StreamUnifiedChatRequestWithTools,
            oneof: "request"
        },
        {
            no: 2,
            name: "abort",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "request"
        },
        {
            no: 3,
            name: "close",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "request"
        },
        {
            no: 4,
            name: "idempotency_key",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "seqno",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
const WelcomeMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.WelcomeMessage", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_degraded_mode",
            kind: "scalar",
            T: 8
        }
    ]);
const StreamUnifiedChatResponseWithToolsIdempotent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamUnifiedChatResponseWithToolsIdempotent", ()=>[
        {
            no: 1,
            name: "server_chunk",
            kind: "message",
            T: StreamUnifiedChatResponseWithTools,
            oneof: "response"
        },
        {
            no: 3,
            name: "welcome_message",
            kind: "message",
            T: WelcomeMessage,
            oneof: "response"
        },
        {
            no: 4,
            name: "seqno_ack",
            kind: "scalar",
            T: 13,
            oneof: "response"
        }
    ]);
const ConversationSummaryStrategy = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationSummaryStrategy", ()=>[
        {
            no: 1,
            name: "plain_text_summary",
            kind: "scalar",
            T: 9,
            oneof: "strategy"
        },
        {
            no: 2,
            name: "arbitrary_summary_plus_tool_result_truncation",
            kind: "message",
            T: ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation,
            oneof: "strategy"
        }
    ]);
const ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationSummaryStrategy.ArbitrarySummaryPlusToolResultTruncation", ()=>[
        {
            no: 1,
            name: "arbitrary_summary",
            kind: "message",
            T: ConversationSummary
        },
        {
            no: 2,
            name: "tool_result_truncation_length",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation"
});
const ConversationSummary = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationSummary", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "truncation_last_bubble_id_inclusive",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "client_should_start_sending_from_inclusive_bubble_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "previous_conversation_summary_bubble_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "includes_tool_results",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "strategy",
            kind: "scalar",
            T: 9
        }
    ]);
const ContextToRank = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextToRank", ()=>[
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
            name: "line_range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.LineRange,
            opt: true
        },
        {
            no: 4,
            name: "code_block",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.CodeBlock,
            opt: true
        }
    ]);
const RankedContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RankedContext", ()=>[
        {
            no: 1,
            name: "context",
            kind: "message",
            T: ContextToRank
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]);
const DocumentationCitation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DocumentationCitation", ()=>[
        {
            no: 1,
            name: "chunks",
            kind: "message",
            T: _docs_pb_js__WEBPACK_IMPORTED_MODULE_3__.DocumentationChunk,
            repeated: true
        }
    ]);
const WebCitation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.WebCitation", ()=>[
        {
            no: 1,
            name: "references",
            kind: "message",
            T: WebReference,
            repeated: true
        }
    ]);
const WebReference = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.WebReference", ()=>[
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "chunk",
            kind: "scalar",
            T: 9
        }
    ]);
const DocsReference = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DocsReference", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "chunk",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]);
const AiWebSearchResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AiWebSearchResult", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        }
    ]);
const AiWebSearchResults = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AiWebSearchResults", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: AiWebSearchResult,
            repeated: true
        }
    ]);
const StatusUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StatusUpdate", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "metadata",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const StatusUpdates = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StatusUpdates", ()=>[
        {
            no: 1,
            name: "updates",
            kind: "message",
            T: StatusUpdate,
            repeated: true
        }
    ]);
const RerankDocumentsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RerankDocumentsRequest", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "documents",
            kind: "message",
            T: Document,
            repeated: true
        }
    ]);
const RerankDocumentsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RerankDocumentsResponse", ()=>[
        {
            no: 1,
            name: "documents",
            kind: "message",
            T: DocumentIdsWithScores,
            repeated: true
        }
    ]);
const Document = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.Document", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "id",
            kind: "scalar",
            T: 9
        }
    ]);
const DocumentIdsWithScores = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DocumentIdsWithScores", ()=>[
        {
            no: 1,
            name: "document_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]);
const ComposerFileDiffHistory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerFileDiffHistory", ()=>[
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
        },
        {
            no: 3,
            name: "diff_history_timestamps",
            kind: "scalar",
            T: 1,
            repeated: true
        }
    ]);
const WorkspaceFolder = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.WorkspaceFolder", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]);
const StreamUnifiedChatRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamUnifiedChatRequest", ()=>[
        {
            no: 1,
            name: "conversation",
            kind: "message",
            T: ConversationMessage,
            repeated: true
        },
        {
            no: 30,
            name: "full_conversation_headers_only",
            kind: "message",
            T: ConversationMessageHeader,
            repeated: true
        },
        {
            no: 2,
            name: "allow_long_file_scan",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 3,
            name: "explicit_context",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.ExplicitContext
        },
        {
            no: 4,
            name: "can_handle_filenames_after_language_ids",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "model_details",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.ModelDetails
        },
        {
            no: 6,
            name: "linter_errors",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.LinterErrors
        },
        {
            no: 7,
            name: "documentation_identifiers",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 8,
            name: "use_web",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "external_links",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.ComposerExternalLink,
            repeated: true
        },
        {
            no: 10,
            name: "project_context",
            kind: "message",
            T: ConversationMessage,
            opt: true
        },
        {
            no: 11,
            name: "diffs_for_compressing_files",
            kind: "message",
            T: StreamUnifiedChatRequest_RedDiff,
            repeated: true
        },
        {
            no: 12,
            name: "compress_edits",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 13,
            name: "should_cache",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 14,
            name: "multi_file_linter_errors",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.LinterErrors,
            repeated: true
        },
        {
            no: 15,
            name: "current_file",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.CurrentFileInfo
        },
        {
            no: 16,
            name: "recent_edits",
            kind: "message",
            T: StreamUnifiedChatRequest_RecentEdits,
            opt: true
        },
        {
            no: 17,
            name: "use_reference_composer_diff_prompt",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 18,
            name: "file_diff_histories",
            kind: "message",
            T: ComposerFileDiffHistory,
            repeated: true
        },
        {
            no: 19,
            name: "use_new_compression_scheme",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 21,
            name: "quotes",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.ChatQuote,
            repeated: true
        },
        {
            no: 20,
            name: "additional_ranked_context",
            kind: "message",
            T: RankedContext,
            repeated: true
        },
        {
            no: 22,
            name: "is_chat",
            kind: "scalar",
            T: 8
        },
        {
            no: 23,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 72,
            name: "replying_to_request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 24,
            name: "repository_info",
            kind: "message",
            T: _repository_pb_js__WEBPACK_IMPORTED_MODULE_4__.RepositoryInfo
        },
        {
            no: 25,
            name: "repository_info_should_query_staging",
            kind: "scalar",
            T: 8
        },
        {
            no: 39,
            name: "repository_info_should_query_prod",
            kind: "scalar",
            T: 8
        },
        {
            no: 52,
            name: "query_only_repo_access",
            kind: "message",
            T: _repository_pb_js__WEBPACK_IMPORTED_MODULE_4__.QueryOnlyRepoAccess
        },
        {
            no: 44,
            name: "repo_query_auth_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 26,
            name: "environment_info",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.EnvironmentInfo
        },
        {
            no: 27,
            name: "is_agentic",
            kind: "scalar",
            T: 8
        },
        {
            no: 28,
            name: "conversation_summary",
            kind: "message",
            T: ConversationSummary,
            opt: true
        },
        {
            no: 29,
            name: "supported_tools",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_tools_pb_js__WEBPACK_IMPORTED_MODULE_1__.ClientSideToolV2),
            repeated: true
        },
        {
            no: 31,
            name: "enable_yolo_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 32,
            name: "yolo_prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 33,
            name: "use_unified_chat_prompt",
            kind: "scalar",
            T: 8
        },
        {
            no: 34,
            name: "mcp_tools",
            kind: "message",
            T: _tools_pb_js__WEBPACK_IMPORTED_MODULE_1__.MCPParams_Tool,
            repeated: true
        },
        {
            no: 35,
            name: "use_full_inputs_context",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 36,
            name: "is_resume",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 37,
            name: "allow_model_fallbacks",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 38,
            name: "number_of_times_shown_fallback_model_warning",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 40,
            name: "context_bank_session_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 41,
            name: "context_bank_version",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 43,
            name: "context_bank_encryption_key",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 45,
            name: "is_headless",
            kind: "scalar",
            T: 8
        },
        {
            no: 68,
            name: "is_background_composer",
            kind: "scalar",
            T: 8
        },
        {
            no: 42,
            name: "uses_codebase_results",
            kind: "message",
            T: StreamUnifiedChatRequest_CodeSearchResult,
            opt: true
        },
        {
            no: 46,
            name: "unified_mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(StreamUnifiedChatRequest_UnifiedMode),
            opt: true
        },
        {
            no: 47,
            name: "tools_requiring_accepted_return",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_tools_pb_js__WEBPACK_IMPORTED_MODULE_1__.ClientSideToolV2),
            repeated: true
        },
        {
            no: 48,
            name: "should_disable_tools",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 49,
            name: "thinking_level",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(StreamUnifiedChatRequest_ThinkingLevel),
            opt: true
        },
        {
            no: 50,
            name: "should_use_chat_prompt",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 55,
            name: "background_composer_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 51,
            name: "uses_rules",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 53,
            name: "mode_uses_auto_apply",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 54,
            name: "unified_mode_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 56,
            name: "use_generate_rules_prompt",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 57,
            name: "edit_tool_supports_search_and_replace",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 58,
            name: "project_layouts",
            kind: "message",
            T: ProjectLayout,
            repeated: true
        },
        {
            no: 59,
            name: "repository_name_if_unindexed",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 60,
            name: "indexing_progress",
            kind: "scalar",
            T: 1,
            opt: true
        },
        {
            no: 61,
            name: "full_file_cmd_k_options",
            kind: "message",
            T: StreamUnifiedChatRequest_FullFileCmdKOptions,
            opt: true
        },
        {
            no: 62,
            name: "indexing_phase_if_unindexed",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 63,
            name: "use_knowledge_base_prompt",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 64,
            name: "indexing_num_files_if_unindexed",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 66,
            name: "subagent_info",
            kind: "message",
            T: SubagentInfo,
            opt: true
        },
        {
            no: 67,
            name: "supports_git_index",
            kind: "scalar",
            T: 8
        },
        {
            no: 69,
            name: "force_is_not_dev",
            kind: "scalar",
            T: 8
        },
        {
            no: 70,
            name: "disable_edit_file_timeout",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 71,
            name: "should_attach_linter_errors",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 73,
            name: "should_speculatively_route_gpt5",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 74,
            name: "force_terminal_hanging_detection",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 75,
            name: "force_summarization",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 76,
            name: "is_quick_search_query",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 77,
            name: "is_spec_mode",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 78,
            name: "allow_server_side_semantic_search",
            kind: "scalar",
            T: 8
        },
        {
            no: 79,
            name: "speculative_summarization_encryption_key",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 81,
            name: "workspace_folders",
            kind: "message",
            T: WorkspaceFolder,
            repeated: true
        },
        {
            no: 82,
            name: "does_readfile_support_images",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 83,
            name: "sandboxing_support_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 84,
            name: "custom_planning_instructions",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 85,
            name: "enable_terminal_file_persistence",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 86,
            name: "terminals_folder",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 93,
            name: "agent_transcripts_folder",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 87,
            name: "agent_notes_folder",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 88,
            name: "agent_tools_folder",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 89,
            name: "current_plan",
            kind: "message",
            T: StreamUnifiedChatRequest_CurrentPlan,
            opt: true
        },
        {
            no: 90,
            name: "has_mcp_descriptors",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 91,
            name: "best_of_n_group_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 92,
            name: "try_use_best_of_n_promotion",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const StreamUnifiedChatRequest_UnifiedMode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.StreamUnifiedChatRequest.UnifiedMode", [
    {
        no: 0,
        name: "UNIFIED_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "UNIFIED_MODE_CHAT",
        localName: "CHAT"
    },
    {
        no: 2,
        name: "UNIFIED_MODE_AGENT",
        localName: "AGENT"
    },
    {
        no: 3,
        name: "UNIFIED_MODE_EDIT",
        localName: "EDIT"
    },
    {
        no: 4,
        name: "UNIFIED_MODE_CUSTOM",
        localName: "CUSTOM"
    },
    {
        no: 5,
        name: "UNIFIED_MODE_PLAN",
        localName: "PLAN"
    },
    {
        no: 6,
        name: "UNIFIED_MODE_DEBUG",
        localName: "DEBUG"
    }
]);
const StreamUnifiedChatRequest_ThinkingLevel = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.StreamUnifiedChatRequest.ThinkingLevel", [
    {
        no: 0,
        name: "THINKING_LEVEL_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "THINKING_LEVEL_MEDIUM",
        localName: "MEDIUM"
    },
    {
        no: 2,
        name: "THINKING_LEVEL_HIGH",
        localName: "HIGH"
    }
]);
const StreamUnifiedChatRequest_RedDiff = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.RedDiff", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "red_ranges",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.SimplestRange,
            repeated: true
        },
        {
            no: 3,
            name: "red_ranges_reversed",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.SimplestRange,
            repeated: true
        },
        {
            no: 4,
            name: "start_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "end_hash",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamUnifiedChatRequest_RedDiff"
});
const StreamUnifiedChatRequest_RecentEdits = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.RecentEdits", ()=>[
        {
            no: 1,
            name: "code_block_info",
            kind: "message",
            T: StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo,
            repeated: true
        },
        {
            no: 2,
            name: "final_file_values",
            kind: "message",
            T: StreamUnifiedChatRequest_RecentEdits_FileInfo,
            repeated: true
        },
        {
            no: 3,
            name: "edits_belong_to_composer_generation_uuid",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "StreamUnifiedChatRequest_RecentEdits"
});
const StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.RecentEdits.CodeBlockInfo", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content_before",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "content_after",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "generation_uuid",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "version",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ], {
    localName: "StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo"
});
const StreamUnifiedChatRequest_RecentEdits_FileInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.RecentEdits.FileInfo", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamUnifiedChatRequest_RecentEdits_FileInfo"
});
const StreamUnifiedChatRequest_CodeSearchResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.CodeSearchResult", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: _repository_pb_js__WEBPACK_IMPORTED_MODULE_4__.CodeResult,
            repeated: true
        },
        {
            no: 2,
            name: "all_files",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.File,
            repeated: true
        }
    ], {
    localName: "StreamUnifiedChatRequest_CodeSearchResult"
});
const StreamUnifiedChatRequest_FullFileCmdKOptions = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.FullFileCmdKOptions", ()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamUnifiedChatRequest_FullFileCmdKOptions"
});
const StreamUnifiedChatRequest_CurrentPlan = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamUnifiedChatRequest.CurrentPlan", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamUnifiedChatRequest_CurrentPlan"
});
const ContextPiece = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextPiece", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]);
const ContextPieceUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextPieceUpdate", ()=>[
        {
            no: 1,
            name: "pieces",
            kind: "message",
            T: ContextPiece,
            repeated: true
        }
    ]);
const StreamUnifiedChatResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamUnifiedChatResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 22,
            name: "server_bubble_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "debugging_only_chat_prompt",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "debugging_only_token_count",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "document_citation",
            kind: "message",
            T: DocumentationCitation
        },
        {
            no: 5,
            name: "filled_prompt",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "is_big_file",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 7,
            name: "intermediate_text",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "is_using_slow_request",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "chunk_identity",
            kind: "message",
            T: StreamUnifiedChatResponse_ChunkIdentity,
            opt: true
        },
        {
            no: 9,
            name: "docs_reference",
            kind: "message",
            T: DocsReference,
            opt: true
        },
        {
            no: 11,
            name: "web_citation",
            kind: "message",
            T: WebCitation,
            opt: true
        },
        {
            no: 33,
            name: "ai_web_search_results",
            kind: "message",
            T: AiWebSearchResults,
            opt: true
        },
        {
            no: 12,
            name: "status_updates",
            kind: "message",
            T: StatusUpdates,
            opt: true
        },
        {
            no: 13,
            name: "tool_call",
            kind: "message",
            T: _tools_pb_js__WEBPACK_IMPORTED_MODULE_1__.StreamedBackToolCall,
            opt: true
        },
        {
            no: 36,
            name: "tool_call_v2",
            kind: "message",
            T: _tools_pb_js__WEBPACK_IMPORTED_MODULE_1__.StreamedBackToolCallV2,
            opt: true
        },
        {
            no: 14,
            name: "should_break_ai_message",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 15,
            name: "partial_tool_call",
            kind: "message",
            T: _tools_pb_js__WEBPACK_IMPORTED_MODULE_1__.StreamedBackPartialToolCall,
            opt: true
        },
        {
            no: 16,
            name: "final_tool_result",
            kind: "message",
            T: StreamUnifiedChatResponse_FinalToolResult,
            opt: true
        },
        {
            no: 17,
            name: "symbol_link",
            kind: "message",
            T: SymbolLink,
            opt: true
        },
        {
            no: 19,
            name: "file_link",
            kind: "message",
            T: FileLink,
            opt: true
        },
        {
            no: 18,
            name: "conversation_summary",
            kind: "message",
            T: ConversationSummary,
            opt: true
        },
        {
            no: 20,
            name: "service_status_update",
            kind: "message",
            T: ServiceStatusUpdate,
            opt: true
        },
        {
            no: 21,
            name: "viewable_git_context",
            kind: "message",
            T: ViewableGitContext,
            opt: true
        },
        {
            no: 23,
            name: "context_piece_update",
            kind: "message",
            T: ContextPieceUpdate,
            opt: true
        },
        {
            no: 24,
            name: "used_code",
            kind: "message",
            T: StreamUnifiedChatResponse_UsedCode,
            opt: true
        },
        {
            no: 25,
            name: "thinking",
            kind: "message",
            T: ConversationMessage_Thinking,
            opt: true
        },
        {
            no: 37,
            name: "thinking_style",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ConversationMessage_ThinkingStyle),
            opt: true
        },
        {
            no: 26,
            name: "stop_using_dsv3_agentic_model",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 27,
            name: "usage_uuid",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 28,
            name: "conversation_summary_starter",
            kind: "message",
            T: ConversationSummaryStarter,
            opt: true
        },
        {
            no: 29,
            name: "subagent_return",
            kind: "message",
            T: SubagentReturnCall,
            opt: true
        },
        {
            no: 30,
            name: "context_window_status",
            kind: "message",
            T: ContextWindowStatus,
            opt: true
        },
        {
            no: 31,
            name: "image_description",
            kind: "message",
            T: StreamUnifiedChatResponse_ImageDescription,
            opt: true
        },
        {
            no: 32,
            name: "parallel_tool_calls_complete",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 34,
            name: "stars_feedback_request",
            kind: "message",
            T: StarsFeedbackRequest,
            opt: true
        },
        {
            no: 35,
            name: "model_provider_request_json",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const StreamUnifiedChatResponse_UsedCode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamUnifiedChatResponse.UsedCode", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: _repository_pb_js__WEBPACK_IMPORTED_MODULE_4__.CodeResult,
            repeated: true
        }
    ], {
    localName: "StreamUnifiedChatResponse_UsedCode"
});
const StreamUnifiedChatResponse_ChunkIdentity = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamUnifiedChatResponse.ChunkIdentity", ()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "chunk_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ChunkType)
        }
    ], {
    localName: "StreamUnifiedChatResponse_ChunkIdentity"
});
const StreamUnifiedChatResponse_FinalToolResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamUnifiedChatResponse.FinalToolResult", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: _tools_pb_js__WEBPACK_IMPORTED_MODULE_1__.ClientSideToolV2Result
        }
    ], {
    localName: "StreamUnifiedChatResponse_FinalToolResult"
});
const StreamUnifiedChatResponse_ImageDescription = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamUnifiedChatResponse.ImageDescription", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "image_uuid",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamUnifiedChatResponse_ImageDescription"
});
const ContextWindowStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextWindowStatus", ()=>[
        {
            no: 1,
            name: "percentage_remaining",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "tokens_used",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "token_limit",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "percentage_remaining_float",
            kind: "scalar",
            T: 2,
            opt: true
        }
    ]);
const StarsFeedbackRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StarsFeedbackRequest", ()=>[
        {
            no: 1,
            name: "bubble_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
const ConversationSummaryStarter = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationSummaryStarter", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
const ServiceStatusUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ServiceStatusUpdate", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "codicon",
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
            name: "action_to_run_on_status_update",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SymbolLink = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SymbolLink", ()=>[
        {
            no: 1,
            name: "symbol_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "symbol_search_string",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "rough_line_number",
            kind: "scalar",
            T: 5
        }
    ]);
const FileLink = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FileLink", ()=>[
        {
            no: 1,
            name: "display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]);
const RedDiff = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RedDiff", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "red_ranges",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.SimplestRange,
            repeated: true
        },
        {
            no: 3,
            name: "red_ranges_reversed",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.SimplestRange,
            repeated: true
        },
        {
            no: 4,
            name: "start_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "end_hash",
            kind: "scalar",
            T: 9
        }
    ]);
const ConversationMessageHeader = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessageHeader", ()=>[
        {
            no: 1,
            name: "bubble_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "server_bubble_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ConversationMessage_MessageType)
        }
    ]);
const DiffFile = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DiffFile", ()=>[
        {
            no: 1,
            name: "file_details",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_name",
            kind: "scalar",
            T: 9
        }
    ]);
const ViewableCommitProps = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ViewableCommitProps", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "files",
            kind: "message",
            T: DiffFile,
            repeated: true
        }
    ]);
const ViewablePRProps = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ViewablePRProps", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "files",
            kind: "message",
            T: DiffFile,
            repeated: true
        }
    ]);
const ViewableDiffProps = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ViewableDiffProps", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: DiffFile,
            repeated: true
        },
        {
            no: 2,
            name: "diff_preface",
            kind: "scalar",
            T: 9
        }
    ]);
const ViewableGitContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ViewableGitContext", ()=>[
        {
            no: 1,
            name: "commit_data",
            kind: "message",
            T: ViewableCommitProps,
            opt: true
        },
        {
            no: 2,
            name: "pull_request_data",
            kind: "message",
            T: ViewablePRProps,
            opt: true
        },
        {
            no: 3,
            name: "diff_data",
            kind: "message",
            T: ViewableDiffProps,
            repeated: true
        }
    ]);
const ConversationMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ConversationMessage_MessageType)
        },
        {
            no: 3,
            name: "attached_code_chunks",
            kind: "message",
            T: ConversationMessage_CodeChunk,
            repeated: true
        },
        {
            no: 4,
            name: "codebase_context_chunks",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.CodeBlock,
            repeated: true
        },
        {
            no: 5,
            name: "commits",
            kind: "message",
            T: Commit,
            repeated: true
        },
        {
            no: 6,
            name: "pull_requests",
            kind: "message",
            T: PullRequest,
            repeated: true
        },
        {
            no: 7,
            name: "git_diffs",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.GitDiff,
            repeated: true
        },
        {
            no: 8,
            name: "assistant_suggested_diffs",
            kind: "message",
            T: SimpleFileDiff,
            repeated: true
        },
        {
            no: 9,
            name: "interpreter_results",
            kind: "message",
            T: InterpreterResult,
            repeated: true
        },
        {
            no: 10,
            name: "images",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.ImageProto,
            repeated: true
        },
        {
            no: 11,
            name: "attached_folders",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 12,
            name: "approximate_lint_errors",
            kind: "message",
            T: ConversationMessage_ApproximateLintError,
            repeated: true
        },
        {
            no: 13,
            name: "bubble_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 32,
            name: "server_bubble_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 14,
            name: "attached_folders_new",
            kind: "message",
            T: FolderInfo,
            repeated: true
        },
        {
            no: 15,
            name: "lints",
            kind: "message",
            T: ConversationMessage_Lints,
            repeated: true
        },
        {
            no: 16,
            name: "user_responses_to_suggested_code_blocks",
            kind: "message",
            T: UserResponseToSuggestedCodeBlock,
            repeated: true
        },
        {
            no: 17,
            name: "relevant_files",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 18,
            name: "tool_results",
            kind: "message",
            T: ConversationMessage_ToolResult,
            repeated: true
        },
        {
            no: 19,
            name: "notepads",
            kind: "message",
            T: ConversationMessage_NotepadContext,
            repeated: true
        },
        {
            no: 20,
            name: "is_capability_iteration",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 21,
            name: "capabilities",
            kind: "message",
            T: _composer_pb_js__WEBPACK_IMPORTED_MODULE_5__.ComposerCapabilityRequest,
            repeated: true
        },
        {
            no: 22,
            name: "edit_trail_contexts",
            kind: "message",
            T: ConversationMessage_EditTrailContext,
            repeated: true
        },
        {
            no: 23,
            name: "suggested_code_blocks",
            kind: "message",
            T: SuggestedCodeBlock,
            repeated: true
        },
        {
            no: 24,
            name: "diffs_for_compressing_files",
            kind: "message",
            T: RedDiff,
            repeated: true
        },
        {
            no: 25,
            name: "multi_file_linter_errors",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.LinterErrorsWithoutFileContents,
            repeated: true
        },
        {
            no: 26,
            name: "diff_histories",
            kind: "message",
            T: DiffHistoryData,
            repeated: true
        },
        {
            no: 27,
            name: "recently_viewed_files",
            kind: "message",
            T: ConversationMessage_CodeChunk,
            repeated: true
        },
        {
            no: 28,
            name: "recent_locations_history",
            kind: "message",
            T: ConversationMessage_RecentLocation,
            repeated: true
        },
        {
            no: 29,
            name: "is_agentic",
            kind: "scalar",
            T: 8
        },
        {
            no: 30,
            name: "file_diff_trajectories",
            kind: "message",
            T: ComposerFileDiffHistory,
            repeated: true
        },
        {
            no: 31,
            name: "conversation_summary",
            kind: "message",
            T: ConversationSummary,
            opt: true
        },
        {
            no: 33,
            name: "existed_subsequent_terminal_command",
            kind: "scalar",
            T: 8
        },
        {
            no: 34,
            name: "existed_previous_terminal_command",
            kind: "scalar",
            T: 8
        },
        {
            no: 35,
            name: "docs_references",
            kind: "message",
            T: DocsReference,
            repeated: true
        },
        {
            no: 36,
            name: "web_references",
            kind: "message",
            T: WebReference,
            repeated: true
        },
        {
            no: 75,
            name: "ai_web_search_results",
            kind: "message",
            T: AiWebSearchResult,
            repeated: true
        },
        {
            no: 37,
            name: "git_context",
            kind: "message",
            T: ViewableGitContext,
            opt: true
        },
        {
            no: 38,
            name: "attached_folders_list_dir_results",
            kind: "message",
            T: _tools_pb_js__WEBPACK_IMPORTED_MODULE_1__.ListDirResult,
            repeated: true
        },
        {
            no: 39,
            name: "cached_conversation_summary",
            kind: "message",
            T: ConversationSummary,
            opt: true
        },
        {
            no: 40,
            name: "human_changes",
            kind: "message",
            T: ConversationMessage_HumanChange,
            repeated: true
        },
        {
            no: 41,
            name: "attached_human_changes",
            kind: "scalar",
            T: 8
        },
        {
            no: 42,
            name: "summarized_composers",
            kind: "message",
            T: ConversationMessage_ComposerContext,
            repeated: true
        },
        {
            no: 43,
            name: "cursor_rules",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.CursorRule,
            repeated: true
        },
        {
            no: 44,
            name: "context_pieces",
            kind: "message",
            T: ContextPiece,
            repeated: true
        },
        {
            no: 45,
            name: "thinking",
            kind: "message",
            T: ConversationMessage_Thinking,
            opt: true
        },
        {
            no: 46,
            name: "all_thinking_blocks",
            kind: "message",
            T: ConversationMessage_Thinking,
            repeated: true
        },
        {
            no: 85,
            name: "thinking_style",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ConversationMessage_ThinkingStyle),
            opt: true
        },
        {
            no: 47,
            name: "unified_mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(StreamUnifiedChatRequest_UnifiedMode),
            opt: true
        },
        {
            no: 98,
            name: "agent_mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_agent_v1_agent_pb_js__WEBPACK_IMPORTED_MODULE_6__.AgentMode),
            opt: true
        },
        {
            no: 48,
            name: "diffs_since_last_apply",
            kind: "message",
            T: ConversationMessage_DiffSinceLastApply,
            repeated: true
        },
        {
            no: 49,
            name: "deleted_files",
            kind: "message",
            T: ConversationMessage_DeletedFile,
            repeated: true
        },
        {
            no: 50,
            name: "usage_uuid",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 51,
            name: "supported_tools",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_tools_pb_js__WEBPACK_IMPORTED_MODULE_1__.ClientSideToolV2),
            repeated: true
        },
        {
            no: 52,
            name: "current_file_location_data",
            kind: "message",
            T: CurrentFileLocationData,
            opt: true
        },
        {
            no: 53,
            name: "edit_tool_supports_search_and_replace",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 54,
            name: "last_terminal_cwd",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 55,
            name: "user_explicitly_asked_to_generate_cursor_rules",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 56,
            name: "console_logs",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.RCPLogEntry,
            repeated: true
        },
        {
            no: 57,
            name: "rich_text",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 58,
            name: "knowledge_items",
            kind: "message",
            T: ConversationMessage_KnowledgeItem,
            repeated: true
        },
        {
            no: 59,
            name: "ui_element_picked",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.RCPUIElementPicked,
            repeated: true
        },
        {
            no: 60,
            name: "user_explicitly_asked_to_add_to_knowledge_base",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 61,
            name: "documentation_selections",
            kind: "message",
            T: ConversationMessage_DocumentationSelection,
            repeated: true
        },
        {
            no: 62,
            name: "external_links",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.ComposerExternalLink,
            repeated: true
        },
        {
            no: 63,
            name: "use_web",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 64,
            name: "project_layouts",
            kind: "message",
            T: ProjectLayout,
            repeated: true
        },
        {
            no: 65,
            name: "thinking_duration_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 88,
            name: "step_duration_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 66,
            name: "subagent_return",
            kind: "message",
            T: SubagentReturnCall,
            opt: true
        },
        {
            no: 67,
            name: "is_simple_looping_message",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 68,
            name: "capability_contexts",
            kind: "message",
            T: _composer_pb_js__WEBPACK_IMPORTED_MODULE_5__.ComposerCapabilityContext,
            repeated: true
        },
        {
            no: 69,
            name: "checkpoint_commit_hash",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 70,
            name: "git_status_raw",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 71,
            name: "todos",
            kind: "message",
            T: _tools_pb_js__WEBPACK_IMPORTED_MODULE_1__.TodoItem,
            repeated: true
        },
        {
            no: 72,
            name: "is_review_edits_followup",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 74,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 73,
            name: "ide_editors_state",
            kind: "message",
            T: ConversationMessage_IdeEditorsState,
            opt: true
        },
        {
            no: 76,
            name: "context_window_status",
            kind: "message",
            T: ContextWindowStatus,
            opt: true
        },
        {
            no: 77,
            name: "is_plan_execution",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 78,
            name: "created_at",
            kind: "scalar",
            T: 9
        },
        {
            no: 79,
            name: "model_info",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.ModelInfo
        },
        {
            no: 80,
            name: "is_quick_search_query",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 81,
            name: "plan_update",
            kind: "message",
            T: ConversationMessage_PlanUpdate,
            opt: true
        },
        {
            no: 82,
            name: "is_simulated_msg",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 95,
            name: "simulated_msg_reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_agent_v1_agent_pb_js__WEBPACK_IMPORTED_MODULE_6__.SimulatedMsgReason),
            opt: true
        },
        {
            no: 97,
            name: "simulated_message_metadata",
            kind: "message",
            T: ConversationMessage_SimulatedMessageMetadata,
            opt: true
        },
        {
            no: 83,
            name: "mcp_descriptors",
            kind: "message",
            T: ConversationMessage_McpDescriptor,
            repeated: true
        },
        {
            no: 84,
            name: "workspace_project_dir",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 87,
            name: "workspace_uris",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 86,
            name: "debug_mode_config",
            kind: "message",
            T: _agent_v1_request_context_exec_pb_js__WEBPACK_IMPORTED_MODULE_7__.DebugModeConfig,
            opt: true
        },
        {
            no: 89,
            name: "text_blob_id",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 90,
            name: "rich_text_blob_id",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 91,
            name: "cursor_commands",
            kind: "message",
            T: _agent_v1_selected_context_pb_js__WEBPACK_IMPORTED_MODULE_8__.SelectedCursorCommand,
            repeated: true
        },
        {
            no: 92,
            name: "cursor_commands_explicitly_set",
            kind: "scalar",
            T: 8
        },
        {
            no: 93,
            name: "past_chats",
            kind: "message",
            T: _agent_v1_selected_context_pb_js__WEBPACK_IMPORTED_MODULE_8__.SelectedPastChat,
            repeated: true
        },
        {
            no: 94,
            name: "past_chats_explicitly_set",
            kind: "scalar",
            T: 8
        },
        {
            no: 96,
            name: "triggering_user_info",
            kind: "message",
            T: _agent_v1_agent_pb_js__WEBPACK_IMPORTED_MODULE_6__.TriggeringUserInfo,
            opt: true
        },
        {
            no: 99,
            name: "turn_steer",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 100,
            name: "sent_by_agent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 101,
            name: "sent_by_voice_call",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 102,
            name: "sender",
            kind: "message",
            T: _agent_v1_agent_pb_js__WEBPACK_IMPORTED_MODULE_6__.MessageSender,
            opt: true
        }
    ]);
const ConversationMessage_MessageType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.ConversationMessage.MessageType", [
    {
        no: 0,
        name: "MESSAGE_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MESSAGE_TYPE_HUMAN",
        localName: "HUMAN"
    },
    {
        no: 2,
        name: "MESSAGE_TYPE_AI",
        localName: "AI"
    }
]);
const ConversationMessage_ThinkingStyle = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.ConversationMessage.ThinkingStyle", [
    {
        no: 0,
        name: "THINKING_STYLE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "THINKING_STYLE_DEFAULT",
        localName: "DEFAULT"
    },
    {
        no: 2,
        name: "THINKING_STYLE_CODEX",
        localName: "CODEX"
    },
    {
        no: 3,
        name: "THINKING_STYLE_GPT5",
        localName: "GPT5"
    }
]);
const ConversationMessage_CodeChunk = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.CodeChunk", ()=>[
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ConversationMessage_CodeChunk_SummarizationStrategy),
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ConversationMessage_CodeChunk_Intent),
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
        },
        {
            no: 9,
            name: "contents_are_missing",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 10,
            name: "is_only_included_from_folder",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 11,
            name: "code_chunk_git_context",
            kind: "message",
            T: ConversationMessage_CodeChunk_CodeChunkGitContext,
            opt: true
        }
    ], {
    localName: "ConversationMessage_CodeChunk"
});
const ConversationMessage_CodeChunk_Intent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.ConversationMessage.CodeChunk.Intent", [
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
    },
    {
        no: 3,
        name: "INTENT_RECENTLY_VIEWED_FILE",
        localName: "RECENTLY_VIEWED_FILE"
    },
    {
        no: 4,
        name: "INTENT_OUTLINE",
        localName: "OUTLINE"
    },
    {
        no: 5,
        name: "INTENT_MENTIONED_FILE",
        localName: "MENTIONED_FILE"
    },
    {
        no: 6,
        name: "INTENT_CODE_SELECTION",
        localName: "CODE_SELECTION"
    },
    {
        no: 7,
        name: "INTENT_AI_EDITED_FILE",
        localName: "AI_EDITED_FILE"
    },
    {
        no: 8,
        name: "INTENT_VISIBLE_FILE",
        localName: "VISIBLE_FILE"
    },
    {
        no: 9,
        name: "INTENT_TERMINAL_SELECTION",
        localName: "TERMINAL_SELECTION"
    }
]);
const ConversationMessage_CodeChunk_SummarizationStrategy = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.ConversationMessage.CodeChunk.SummarizationStrategy", [
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
const ConversationMessage_CodeChunk_CodeChunkGitContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.CodeChunk.CodeChunkGitContext", ()=>[
        {
            no: 1,
            name: "git_info",
            kind: "message",
            T: ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo,
            repeated: true
        }
    ], {
    localName: "ConversationMessage_CodeChunk_CodeChunkGitContext"
});
const ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.CodeChunk.CodeChunkGitContext.CodeChunkGitInfo", ()=>[
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
    ], {
    localName: "ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo"
});
const ConversationMessage_ToolResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.ToolResult", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "tool_index",
            kind: "scalar",
            T: 13
        },
        {
            no: 12,
            name: "model_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "args",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "raw_args",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "attached_code_chunks",
            kind: "message",
            T: ConversationMessage_CodeChunk,
            repeated: true
        },
        {
            no: 7,
            name: "content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "result",
            kind: "message",
            T: _tools_pb_js__WEBPACK_IMPORTED_MODULE_1__.ClientSideToolV2Result
        },
        {
            no: 9,
            name: "error",
            kind: "message",
            T: _tools_pb_js__WEBPACK_IMPORTED_MODULE_1__.ToolResultError,
            opt: true
        },
        {
            no: 10,
            name: "images",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.ImageProto,
            repeated: true
        },
        {
            no: 11,
            name: "tool_call",
            kind: "message",
            T: _tools_pb_js__WEBPACK_IMPORTED_MODULE_1__.ClientSideToolV2Call,
            opt: true
        },
        {
            no: 13,
            name: "started_at_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 14,
            name: "completed_at_ms",
            kind: "scalar",
            T: 4,
            opt: true
        }
    ], {
    localName: "ConversationMessage_ToolResult"
});
const ConversationMessage_MultiRangeCodeChunk = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.MultiRangeCodeChunk", ()=>[
        {
            no: 1,
            name: "ranges",
            kind: "message",
            T: ConversationMessage_MultiRangeCodeChunk_RangeWithPriority,
            repeated: true
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ConversationMessage_MultiRangeCodeChunk"
});
const ConversationMessage_MultiRangeCodeChunk_RangeWithPriority = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.MultiRangeCodeChunk.RangeWithPriority", ()=>[
        {
            no: 1,
            name: "range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.SimplestRange
        },
        {
            no: 2,
            name: "priority",
            kind: "scalar",
            T: 1
        }
    ], {
    localName: "ConversationMessage_MultiRangeCodeChunk_RangeWithPriority"
});
const ConversationMessage_NotepadContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.NotepadContext", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "attached_code_chunks",
            kind: "message",
            T: ConversationMessage_CodeChunk,
            repeated: true
        },
        {
            no: 4,
            name: "attached_folders",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "commits",
            kind: "message",
            T: Commit,
            repeated: true
        },
        {
            no: 6,
            name: "pull_requests",
            kind: "message",
            T: PullRequest,
            repeated: true
        },
        {
            no: 7,
            name: "git_diffs",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.GitDiff,
            repeated: true
        },
        {
            no: 8,
            name: "images",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.ImageProto,
            repeated: true
        }
    ], {
    localName: "ConversationMessage_NotepadContext"
});
const ConversationMessage_ComposerContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.ComposerContext", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "conversation_summary",
            kind: "message",
            T: ConversationSummary
        }
    ], {
    localName: "ConversationMessage_ComposerContext"
});
const ConversationMessage_EditLocation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.EditLocation", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.SimplestRange
        },
        {
            no: 4,
            name: "initial_range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.SimplestRange
        },
        {
            no: 5,
            name: "context_lines",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "text_range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.SimplestRange
        }
    ], {
    localName: "ConversationMessage_EditLocation"
});
const ConversationMessage_EditTrailContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.EditTrailContext", ()=>[
        {
            no: 1,
            name: "unique_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "edit_trail_sorted",
            kind: "message",
            T: ConversationMessage_EditLocation,
            repeated: true
        }
    ], {
    localName: "ConversationMessage_EditTrailContext"
});
const ConversationMessage_ApproximateLintError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.ApproximateLintError", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "start_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "end_column",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ConversationMessage_ApproximateLintError"
});
const ConversationMessage_Lints = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.Lints", ()=>[
        {
            no: 1,
            name: "lints",
            kind: "message",
            T: _shadow_workspace_pb_js__WEBPACK_IMPORTED_MODULE_9__.GetLintsForChangeResponse
        },
        {
            no: 2,
            name: "chat_codeblock_model_value",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ConversationMessage_Lints"
});
const ConversationMessage_RecentLocation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.RecentLocation", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ConversationMessage_RecentLocation"
});
const ConversationMessage_RenderedDiff = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.RenderedDiff", ()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_number_exclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "before_context_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "removed_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "added_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "after_context_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ], {
    localName: "ConversationMessage_RenderedDiff"
});
const ConversationMessage_HumanChange = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.HumanChange", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "rendered_diffs",
            kind: "message",
            T: ConversationMessage_RenderedDiff,
            repeated: true
        }
    ], {
    localName: "ConversationMessage_HumanChange"
});
const ConversationMessage_Thinking = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.Thinking", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "signature",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "redacted_thinking",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "is_last_thinking_chunk",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "ConversationMessage_Thinking"
});
const ConversationMessage_DiffSinceLastApply = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.DiffSinceLastApply", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff",
            kind: "message",
            T: _tools_pb_js__WEBPACK_IMPORTED_MODULE_1__.EditFileResult_FileDiff,
            opt: true
        },
        {
            no: 4,
            name: "is_accepted",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "is_rejected",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "last_apply_chained_from_n_human_messages_ago",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ], {
    localName: "ConversationMessage_DiffSinceLastApply"
});
const ConversationMessage_DeletedFile = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.DeletedFile", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ConversationMessage_DeletedFile"
});
const ConversationMessage_KnowledgeItem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.KnowledgeItem", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "knowledge",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "knowledge_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "is_generated",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "ConversationMessage_KnowledgeItem"
});
const ConversationMessage_DocumentationSelection = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.DocumentationSelection", ()=>[
        {
            no: 1,
            name: "doc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ConversationMessage_DocumentationSelection"
});
const ConversationMessage_IdeEditorsState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.IdeEditorsState", ()=>[
        {
            no: 1,
            name: "is_pill_displayed",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "visible_file_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "recently_viewed_file_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "visible_files",
            kind: "message",
            T: ConversationMessage_IdeEditorsState_File,
            repeated: true
        },
        {
            no: 5,
            name: "recently_viewed_files",
            kind: "message",
            T: ConversationMessage_IdeEditorsState_File,
            repeated: true
        }
    ], {
    localName: "ConversationMessage_IdeEditorsState"
});
const ConversationMessage_IdeEditorsState_File = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.IdeEditorsState.File", ()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_currently_focused",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 3,
            name: "current_line_number",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "current_line_text",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "line_count",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 6,
            name: "absolute_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "ConversationMessage_IdeEditorsState_File"
});
const ConversationMessage_PlanUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.PlanUpdate", ()=>[
        {
            no: 1,
            name: "current_plan",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_first_time_seen",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "ConversationMessage_PlanUpdate"
});
const ConversationMessage_SimulatedMessageMetadata = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.SimulatedMessageMetadata", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "task_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "fsd_finding_action",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "subscription_source",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_agent_v1_agent_pb_js__WEBPACK_IMPORTED_MODULE_6__.SubscriptionSource),
            opt: true
        },
        {
            no: 6,
            name: "subscription_event_display",
            kind: "message",
            T: _agent_v1_agent_pb_js__WEBPACK_IMPORTED_MODULE_6__.SubscriptionEventDisplay,
            opt: true
        },
        {
            no: 7,
            name: "interaction_response",
            kind: "message",
            T: _agent_v1_agent_pb_js__WEBPACK_IMPORTED_MODULE_6__.InteractionResponseMetadata,
            opt: true
        }
    ], {
    localName: "ConversationMessage_SimulatedMessageMetadata"
});
const ConversationMessage_McpDescriptor = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.McpDescriptor", ()=>[
        {
            no: 1,
            name: "folder_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "server_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "tools",
            kind: "message",
            T: ConversationMessage_McpDescriptor_Tool,
            repeated: true
        },
        {
            no: 4,
            name: "server_use_instructions",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "ConversationMessage_McpDescriptor"
});
const ConversationMessage_McpDescriptor_Tool = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConversationMessage.McpDescriptor.Tool", ()=>[
        {
            no: 1,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "ConversationMessage_McpDescriptor_Tool"
});
const CurrentFileLocationData = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CurrentFileLocationData", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]);
const SearchInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SearchInfo", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: SearchFileInfo,
            repeated: true
        }
    ]);
const SearchFileInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SearchFileInfo", ()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
const FolderInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FolderInfo", ()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: FolderFileInfo,
            repeated: true
        }
    ]);
const FolderFileInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FolderFileInfo", ()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]);
const InterpreterResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.InterpreterResult", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]);
const SimpleFileDiff = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SimpleFileDiff", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "chunks",
            kind: "message",
            T: SimpleFileDiff_Chunk,
            repeated: true
        }
    ]);
const SimpleFileDiff_Chunk = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SimpleFileDiff.Chunk", ()=>[
        {
            no: 1,
            name: "old_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "new_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "old_range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.LineRange
        },
        {
            no: 4,
            name: "new_range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.LineRange
        }
    ], {
    localName: "SimpleFileDiff_Chunk"
});
const Commit = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.Commit", ()=>[
        {
            no: 1,
            name: "sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "diff",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.FileDiff,
            repeated: true
        },
        {
            no: 5,
            name: "author",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "date",
            kind: "scalar",
            T: 9
        }
    ]);
const PullRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PullRequest", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "diff",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.FileDiff,
            repeated: true
        },
        {
            no: 4,
            name: "id",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "number",
            kind: "scalar",
            T: 3
        }
    ]);
const SuggestedCodeBlock = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SuggestedCodeBlock", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]);
const UserResponseToSuggestedCodeBlock = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UserResponseToSuggestedCodeBlock", ()=>[
        {
            no: 1,
            name: "user_response_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(UserResponseToSuggestedCodeBlock_UserResponseType)
        },
        {
            no: 2,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "user_modifications_to_suggested_code_blocks",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.FileDiff,
            opt: true
        }
    ]);
const UserResponseToSuggestedCodeBlock_UserResponseType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.UserResponseToSuggestedCodeBlock.UserResponseType", [
    {
        no: 0,
        name: "USER_RESPONSE_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "USER_RESPONSE_TYPE_ACCEPT",
        localName: "ACCEPT"
    },
    {
        no: 2,
        name: "USER_RESPONSE_TYPE_REJECT",
        localName: "REJECT"
    },
    {
        no: 3,
        name: "USER_RESPONSE_TYPE_MODIFY",
        localName: "MODIFY"
    }
]);
const ContextRerankingCandidateFile = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextRerankingCandidateFile", ()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_content",
            kind: "scalar",
            T: 9
        }
    ]);
const ComposerFileDiff = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerFileDiff", ()=>[
        {
            no: 1,
            name: "chunks",
            kind: "message",
            T: ComposerFileDiff_ChunkDiff,
            repeated: true
        },
        {
            no: 2,
            name: "editor",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ComposerFileDiff_Editor)
        },
        {
            no: 3,
            name: "hit_timeout",
            kind: "scalar",
            T: 8
        }
    ]);
const ComposerFileDiff_Editor = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.ComposerFileDiff.Editor", [
    {
        no: 0,
        name: "EDITOR_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "EDITOR_AI",
        localName: "AI"
    },
    {
        no: 2,
        name: "EDITOR_HUMAN",
        localName: "HUMAN"
    }
]);
const ComposerFileDiff_ChunkDiff = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerFileDiff.ChunkDiff", ()=>[
        {
            no: 1,
            name: "diff_string",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "old_start",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "new_start",
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
            name: "new_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "lines_removed",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "lines_added",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ComposerFileDiff_ChunkDiff"
});
const DiffHistoryData = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DiffHistoryData", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diffs",
            kind: "message",
            T: ComposerFileDiff,
            repeated: true
        },
        {
            no: 3,
            name: "timestamp",
            kind: "scalar",
            T: 1
        },
        {
            no: 4,
            name: "unique_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "start_to_end_diff",
            kind: "message",
            T: ComposerFileDiff
        }
    ]);
const WarmStreamUnifiedChatWithToolsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.WarmStreamUnifiedChatWithToolsResponse", []);
const CodeChunkContextInclusionInfoV2 = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CodeChunkContextInclusionInfoV2", ()=>[
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
            name: "end_line_number_inclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "intent",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CodeChunkContextInclusionInfoV2_Intent)
        },
        {
            no: 10,
            name: "inclusion_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CodeChunkContextInclusionInfoV2_InclusionType)
        },
        {
            no: 6,
            name: "tooltip_text",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "pill_is_dashed",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "pill_sub_codicon_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "detail_text",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "codicon_name",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const CodeChunkContextInclusionInfoV2_Intent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.CodeChunkContextInclusionInfoV2.Intent", [
    {
        no: 0,
        name: "INTENT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "INTENT_FILE",
        localName: "FILE"
    },
    {
        no: 2,
        name: "INTENT_SELECTION",
        localName: "SELECTION"
    }
]);
const CodeChunkContextInclusionInfoV2_InclusionType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.CodeChunkContextInclusionInfoV2.InclusionType", [
    {
        no: 0,
        name: "INCLUSION_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "INCLUSION_TYPE_FULL",
        localName: "FULL"
    },
    {
        no: 2,
        name: "INCLUSION_TYPE_OUTLINE",
        localName: "OUTLINE"
    },
    {
        no: 3,
        name: "INCLUSION_TYPE_FILENAME",
        localName: "FILENAME"
    }
]);
const GetPromptDryRunResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetPromptDryRunResponse", ()=>[
        {
            no: 1,
            name: "code_chunks",
            kind: "message",
            T: CodeChunkContextInclusionInfo,
            repeated: true
        },
        {
            no: 3,
            name: "user_message_token_limit",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "user_message_token_count",
            kind: "message",
            T: GetPromptDryRunResponse_TokenCount
        },
        {
            no: 5,
            name: "full_conversation_token_count",
            kind: "message",
            T: GetPromptDryRunResponse_TokenCount
        },
        {
            no: 6,
            name: "code_chunks_v2",
            kind: "message",
            T: CodeChunkContextInclusionInfoV2,
            repeated: true
        },
        {
            no: 2,
            name: "folder_exclusion_tooltip",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "bar_fraction",
            kind: "scalar",
            T: 2
        },
        {
            no: 8,
            name: "did_bar_overflow",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "should_show_new_chat_hint",
            kind: "scalar",
            T: 8
        }
    ]);
const GetPromptDryRunResponse_TokenCount = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetPromptDryRunResponse.TokenCount", ()=>[
        {
            no: 1,
            name: "is_over_token_limit",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "num_tokens",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ], {
    localName: "GetPromptDryRunResponse_TokenCount"
});
const CodeChunkContextInclusionInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CodeChunkContextInclusionInfo", ()=>[
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
            name: "end_line_number_inclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "inclusion_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CodeChunkContextInclusionInfo_InclusionType)
        },
        {
            no: 5,
            name: "full_file_token_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "prompt_token_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 11,
            name: "full_file_tokens_count",
            kind: "message",
            T: CodeChunkContextInclusionInfo_TokenCount
        },
        {
            no: 7,
            name: "exclusion_tooltip",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "intent",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CodeChunkContextInclusionInfo_Intent)
        },
        {
            no: 9,
            name: "chunk_is_from_last_user_message",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "is_compressed",
            kind: "scalar",
            T: 8
        }
    ]);
const CodeChunkContextInclusionInfo_InclusionType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.CodeChunkContextInclusionInfo.InclusionType", [
    {
        no: 0,
        name: "INCLUSION_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "INCLUSION_TYPE_FULL",
        localName: "FULL"
    },
    {
        no: 2,
        name: "INCLUSION_TYPE_OUTLINE",
        localName: "OUTLINE"
    },
    {
        no: 3,
        name: "INCLUSION_TYPE_FILENAME",
        localName: "FILENAME"
    }
]);
const CodeChunkContextInclusionInfo_Intent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.CodeChunkContextInclusionInfo.Intent", [
    {
        no: 0,
        name: "INTENT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "INTENT_FILE",
        localName: "FILE"
    },
    {
        no: 2,
        name: "INTENT_SELECTION",
        localName: "SELECTION"
    }
]);
const CodeChunkContextInclusionInfo_TokenCount = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CodeChunkContextInclusionInfo.TokenCount", ()=>[
        {
            no: 1,
            name: "is_too_large_to_count",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "num_tokens",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "CodeChunkContextInclusionInfo_TokenCount"
});
const SubagentReturnCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SubagentReturnCall", ()=>[
        {
            no: 1,
            name: "subagent_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SubagentType)
        },
        {
            no: 2,
            name: "deep_search_return_value",
            kind: "message",
            T: DeepSearchSubagentReturnValue,
            oneof: "return_value"
        },
        {
            no: 3,
            name: "fix_lints_return_value",
            kind: "message",
            T: FixLintsSubagentReturnValue,
            oneof: "return_value"
        },
        {
            no: 4,
            name: "task_return_value",
            kind: "message",
            T: TaskSubagentReturnValue,
            oneof: "return_value"
        },
        {
            no: 5,
            name: "spec_return_value",
            kind: "message",
            T: SpecSubagentReturnValue,
            oneof: "return_value"
        }
    ]);
const SubagentInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SubagentInfo", ()=>[
        {
            no: 1,
            name: "subagent_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SubagentType)
        },
        {
            no: 2,
            name: "subagent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "deep_search_params",
            kind: "message",
            T: DeepSearchSubagentParams,
            oneof: "params"
        },
        {
            no: 4,
            name: "fix_lints_params",
            kind: "message",
            T: FixLintsSubagentParams,
            oneof: "params"
        },
        {
            no: 6,
            name: "task_params",
            kind: "message",
            T: TaskSubagentParams,
            oneof: "params"
        },
        {
            no: 7,
            name: "spec_params",
            kind: "message",
            T: SpecSubagentParams,
            oneof: "params"
        },
        {
            no: 5,
            name: "parent_request_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const DeepSearchSubagentParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DeepSearchSubagentParams", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]);
const DeepSearchSubagentReturnValue = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DeepSearchSubagentReturnValue", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: DeepSearchSubagentReturnValue_ContextItem,
            repeated: true
        }
    ]);
const DeepSearchSubagentReturnValue_ContextItem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DeepSearchSubagentReturnValue.ContextItem", ()=>[
        {
            no: 1,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.LineRange,
            opt: true
        },
        {
            no: 3,
            name: "explanation",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "DeepSearchSubagentReturnValue_ContextItem"
});
const FixLintsSubagentParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FixLintsSubagentParams", []);
const FixLintsSubagentReturnValue = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FixLintsSubagentReturnValue", []);
const TaskSubagentParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TaskSubagentParams", ()=>[
        {
            no: 1,
            name: "task_description",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "allowed_write_directories",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const TaskSubagentReturnValue = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TaskSubagentReturnValue", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]);
const SpecSubagentParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SpecSubagentParams", ()=>[
        {
            no: 1,
            name: "plan",
            kind: "scalar",
            T: 9
        }
    ]);
const SpecSubagentReturnValue = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SpecSubagentReturnValue", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "string_replacements",
            kind: "message",
            T: StringReplacement,
            repeated: true
        }
    ]);
const StringReplacement = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StringReplacement", ()=>[
        {
            no: 1,
            name: "old_string",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "new_string",
            kind: "scalar",
            T: 9
        }
    ]);
const ProjectLayout = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ProjectLayout", ()=>[
        {
            no: 1,
            name: "root_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "message",
            T: ProjectLayoutDirectoryContent
        },
        {
            no: 3,
            name: "list_dir_v2_result",
            kind: "message",
            T: _tools_pb_js__WEBPACK_IMPORTED_MODULE_1__.ListDirV2Result,
            opt: true
        }
    ]);
const ProjectLayoutDirectoryContent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ProjectLayoutDirectoryContent", ()=>[
        {
            no: 1,
            name: "directories",
            kind: "message",
            T: ProjectLayoutDirectory,
            repeated: true
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: ProjectLayoutFile,
            repeated: true
        },
        {
            no: 3,
            name: "total_files",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "total_subfolders",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 5,
            name: "hidden_files",
            kind: "message",
            T: ProjectLayoutFile,
            repeated: true
        }
    ]);
const ProjectLayoutDirectory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ProjectLayoutDirectory", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "message",
            T: ProjectLayoutDirectoryContent
        }
    ]);
const ProjectLayoutFile = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ProjectLayoutFile", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]);
const ConvertOALToNALRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConvertOALToNALRequest", ()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: StreamUnifiedChatRequest
        },
        {
            no: 2,
            name: "file_states",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: _agent_v1_agent_pb_js__WEBPACK_IMPORTED_MODULE_6__.FileState
            }
        }
    ]);
const ConvertOALToNALResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConvertOALToNALResponse", ()=>[
        {
            no: 1,
            name: "conversation_state",
            kind: "message",
            T: _agent_v1_agent_pb_js__WEBPACK_IMPORTED_MODULE_6__.ConversationStateStructure
        },
        {
            no: 2,
            name: "blobs",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 12
            }
        },
        {
            no: 3,
            name: "bubble_checkpoints",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: _agent_v1_agent_pb_js__WEBPACK_IMPORTED_MODULE_6__.ConversationStateStructure
            }
        }
    ]);
