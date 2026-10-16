import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { Empty } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/empty_pb.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { AgentMode, ConversationStateStructure, FileState, InteractionResponseMetadata, MessageSender, SimulatedMsgReason, SubscriptionEventDisplay, SubscriptionSource, TriggeringUserInfo, init_agent_pb } from "../../agent/v1/agent_pb.js";
import { DebugModeConfig, init_request_context_exec_pb } from "../../agent/v1/request_context_exec_pb.js";
import { SelectedCursorCommand, SelectedPastChat, init_selected_context_pb } from "../../agent/v1/selected_context_pb.js";
import { ComposerCapabilityContext, ComposerCapabilityRequest, init_composer_pb } from "./composer_pb.js";
import { DocumentationChunk, init_docs_pb } from "./docs_pb.js";
import { CodeResult, QueryOnlyRepoAccess, RepositoryInfo, init_repository_pb } from "./repository_pb.js";
import { GetLintsForChangeResponse, init_shadow_workspace_pb } from "./shadow_workspace_pb.js";
import { ClientSideToolV2, ClientSideToolV2Call, ClientSideToolV2Result, EditFileResult_FileDiff, ListDirResult, ListDirV2Result, MCPParams_Tool, StreamedBackPartialToolCall, StreamedBackToolCall, StreamedBackToolCallV2, TodoItem2, ToolResultError, init_tools_pb } from "./tools_pb.js";
import { ChatQuote, CodeBlock, ComposerExternalLink, CurrentFileInfo, CursorRule2, EnvironmentInfo, ExplicitContext, File2, FileDiff, GitDiff, ImageProto, LineRange, LinterErrors, LinterErrorsWithoutFileContents, ModelDetails, ModelInfo, RCPLogEntry, RCPUIElementPicked, SimplestRange, init_utils_pb2 } from "./utils_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage115, __protoMessage3112, ChunkType, SubagentType2, StreamReplayChatRequest, StreamUnifiedChatRequestWithTools, UserRules, StreamStart, SpanContext2, StreamUnifiedChatResponseWithTools, StreamUnifiedChatRequestWithToolsIdempotent, WelcomeMessage, StreamUnifiedChatResponseWithToolsIdempotent, ConversationSummary2, ContextToRank, RankedContext, DocumentationCitation, WebCitation, WebReference, DocsReference, AiWebSearchResult, AiWebSearchResults, StatusUpdate, StatusUpdates, RerankDocumentsRequest, RerankDocumentsResponse, Document, DocumentIdsWithScores, ComposerFileDiffHistory, WorkspaceFolder, StreamUnifiedChatRequest, StreamUnifiedChatRequest_UnifiedMode, StreamUnifiedChatRequest_ThinkingLevel, StreamUnifiedChatRequest_RedDiff, StreamUnifiedChatRequest_RecentEdits, StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo, StreamUnifiedChatRequest_RecentEdits_FileInfo, StreamUnifiedChatRequest_CodeSearchResult, StreamUnifiedChatRequest_FullFileCmdKOptions, StreamUnifiedChatRequest_CurrentPlan, ContextPiece, ContextPieceUpdate, StreamUnifiedChatResponse, StreamUnifiedChatResponse_UsedCode, StreamUnifiedChatResponse_ChunkIdentity, StreamUnifiedChatResponse_FinalToolResult, StreamUnifiedChatResponse_ImageDescription, ContextWindowStatus, StarsFeedbackRequest, ConversationSummaryStarter, ServiceStatusUpdate, SymbolLink, FileLink, RedDiff, ConversationMessageHeader, DiffFile, ViewableCommitProps, ViewablePRProps, ViewableDiffProps, ViewableGitContext, ConversationMessage, ConversationMessage_MessageType, ConversationMessage_ThinkingStyle, ConversationMessage_CodeChunk, ConversationMessage_CodeChunk_Intent, ConversationMessage_CodeChunk_SummarizationStrategy, ConversationMessage_CodeChunk_CodeChunkGitContext, ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo, ConversationMessage_ToolResult, ConversationMessage_NotepadContext, ConversationMessage_ComposerContext, ConversationMessage_EditLocation, ConversationMessage_EditTrailContext, ConversationMessage_ApproximateLintError, ConversationMessage_Lints, ConversationMessage_RecentLocation, ConversationMessage_RenderedDiff, ConversationMessage_HumanChange, ConversationMessage_Thinking, ConversationMessage_DiffSinceLastApply, ConversationMessage_DeletedFile, ConversationMessage_KnowledgeItem, ConversationMessage_DocumentationSelection, ConversationMessage_IdeEditorsState, ConversationMessage_IdeEditorsState_File, ConversationMessage_PlanUpdate, ConversationMessage_SimulatedMessageMetadata, ConversationMessage_McpDescriptor, ConversationMessage_McpDescriptor_Tool, CurrentFileLocationData, FolderInfo, FolderFileInfo, InterpreterResult, SimpleFileDiff, SimpleFileDiff_Chunk, Commit, PullRequest, SuggestedCodeBlock, UserResponseToSuggestedCodeBlock, UserResponseToSuggestedCodeBlock_UserResponseType, ContextRerankingCandidateFile, ComposerFileDiff, ComposerFileDiff_Editor, ComposerFileDiff_ChunkDiff, DiffHistoryData, WarmStreamUnifiedChatWithToolsResponse, CodeChunkContextInclusionInfoV2, CodeChunkContextInclusionInfoV2_Intent, CodeChunkContextInclusionInfoV2_InclusionType, GetPromptDryRunResponse, GetPromptDryRunResponse_TokenCount, CodeChunkContextInclusionInfo, CodeChunkContextInclusionInfo_InclusionType, CodeChunkContextInclusionInfo_Intent, CodeChunkContextInclusionInfo_TokenCount, SubagentReturnCall, SubagentInfo, DeepSearchSubagentParams, DeepSearchSubagentReturnValue, DeepSearchSubagentReturnValue_ContextItem, FixLintsSubagentParams, FixLintsSubagentReturnValue, TaskSubagentParams, TaskSubagentReturnValue, SpecSubagentParams, SpecSubagentReturnValue, StringReplacement, ProjectLayout, ProjectLayoutDirectoryContent, ProjectLayoutDirectory, ProjectLayoutFile, ConvertOALToNALRequest, ConvertOALToNALResponse;
export { AiWebSearchResult, AiWebSearchResults, ChunkType, CodeChunkContextInclusionInfo, CodeChunkContextInclusionInfoV2, CodeChunkContextInclusionInfoV2_InclusionType, CodeChunkContextInclusionInfoV2_Intent, CodeChunkContextInclusionInfo_InclusionType, CodeChunkContextInclusionInfo_Intent, CodeChunkContextInclusionInfo_TokenCount, Commit, ComposerFileDiff, ComposerFileDiffHistory, ComposerFileDiff_ChunkDiff, ComposerFileDiff_Editor, ContextPiece, ContextPieceUpdate, ContextRerankingCandidateFile, ContextToRank, ContextWindowStatus, ConversationMessage, ConversationMessageHeader, ConversationMessage_ApproximateLintError, ConversationMessage_CodeChunk, ConversationMessage_CodeChunk_CodeChunkGitContext, ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo, ConversationMessage_CodeChunk_Intent, ConversationMessage_CodeChunk_SummarizationStrategy, ConversationMessage_ComposerContext, ConversationMessage_DeletedFile, ConversationMessage_DiffSinceLastApply, ConversationMessage_DocumentationSelection, ConversationMessage_EditLocation, ConversationMessage_EditTrailContext, ConversationMessage_HumanChange, ConversationMessage_IdeEditorsState, ConversationMessage_IdeEditorsState_File, ConversationMessage_KnowledgeItem, ConversationMessage_Lints, ConversationMessage_McpDescriptor, ConversationMessage_McpDescriptor_Tool, ConversationMessage_MessageType, ConversationMessage_NotepadContext, ConversationMessage_PlanUpdate, ConversationMessage_RecentLocation, ConversationMessage_RenderedDiff, ConversationMessage_SimulatedMessageMetadata, ConversationMessage_Thinking, ConversationMessage_ThinkingStyle, ConversationMessage_ToolResult, ConversationSummary2, ConversationSummaryStarter, ConvertOALToNALRequest, ConvertOALToNALResponse, CurrentFileLocationData, DeepSearchSubagentParams, DeepSearchSubagentReturnValue, DeepSearchSubagentReturnValue_ContextItem, DiffFile, DiffHistoryData, DocsReference, Document, DocumentIdsWithScores, DocumentationCitation, FileLink, FixLintsSubagentParams, FixLintsSubagentReturnValue, FolderFileInfo, FolderInfo, GetPromptDryRunResponse, GetPromptDryRunResponse_TokenCount, InterpreterResult, ProjectLayout, ProjectLayoutDirectory, ProjectLayoutDirectoryContent, ProjectLayoutFile, PullRequest, RankedContext, RedDiff, RerankDocumentsRequest, RerankDocumentsResponse, ServiceStatusUpdate, SimpleFileDiff, SimpleFileDiff_Chunk, SpanContext2, SpecSubagentParams, SpecSubagentReturnValue, StarsFeedbackRequest, StatusUpdate, StatusUpdates, StreamReplayChatRequest, StreamStart, StreamUnifiedChatRequest, StreamUnifiedChatRequestWithTools, StreamUnifiedChatRequestWithToolsIdempotent, StreamUnifiedChatRequest_CodeSearchResult, StreamUnifiedChatRequest_CurrentPlan, StreamUnifiedChatRequest_FullFileCmdKOptions, StreamUnifiedChatRequest_RecentEdits, StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo, StreamUnifiedChatRequest_RecentEdits_FileInfo, StreamUnifiedChatRequest_RedDiff, StreamUnifiedChatRequest_ThinkingLevel, StreamUnifiedChatRequest_UnifiedMode, StreamUnifiedChatResponse, StreamUnifiedChatResponseWithTools, StreamUnifiedChatResponseWithToolsIdempotent, StreamUnifiedChatResponse_ChunkIdentity, StreamUnifiedChatResponse_FinalToolResult, StreamUnifiedChatResponse_ImageDescription, StreamUnifiedChatResponse_UsedCode, StringReplacement, SubagentInfo, SubagentReturnCall, SubagentType2, SuggestedCodeBlock, SymbolLink, TaskSubagentParams, TaskSubagentReturnValue, UserResponseToSuggestedCodeBlock, UserResponseToSuggestedCodeBlock_UserResponseType, UserRules, ViewableCommitProps, ViewableDiffProps, ViewableGitContext, ViewablePRProps, WarmStreamUnifiedChatWithToolsResponse, WebCitation, WebReference, WelcomeMessage, WorkspaceFolder, __protoMessage3112, __protoPackage115 };
var __wakaru_init_chat_pb_initialized = false;
export function init_chat_pb() {
if (__wakaru_init_chat_pb_initialized) return;
__wakaru_init_chat_pb_initialized = true;
"use strict";
init_esm2();
init_tools_pb();
init_utils_pb2();
init_docs_pb();
init_repository_pb();
init_composer_pb();
init_agent_pb();
init_request_context_exec_pb();
init_selected_context_pb();
init_shadow_workspace_pb();
init_compact();
__protoPackage115 = "aiserver.v1.";
__protoMessage3112 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage115;
    }
};
ChunkType = enumType2(proto3, __protoPackage115, "ChunkType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CODEBASE"
    ],
    [
        2,
        "LONG_FILE"
    ],
    [
        3,
        "DOCS"
    ]
], 1);
SubagentType2 = enumType2(proto3, __protoPackage115, "SubagentType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DEEP_SEARCH"
    ],
    [
        2,
        "FIX_LINTS"
    ],
    [
        3,
        "TASK"
    ],
    [
        4,
        "SPEC"
    ]
], 1);
StreamReplayChatRequest = class _StreamReplayChatRequest extends __protoMessage3112 {
    constructor(data){
        super();
        this.requestId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamReplayChatRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamReplayChatRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamReplayChatRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamReplayChatRequest, a, b2);
    }
    static $() {
        return [
            "StreamReplayChatRequest|1 request_id 9|3 tokens_per_second 1?"
        ];
    }
};
StreamUnifiedChatRequestWithTools = class _StreamUnifiedChatRequestWithTools extends __protoMessage3112 {
    constructor(data){
        super();
        this.request = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamUnifiedChatRequestWithTools().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamUnifiedChatRequestWithTools().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamUnifiedChatRequestWithTools().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamUnifiedChatRequestWithTools, a, b2);
    }
    static $() {
        return [
            "StreamUnifiedChatRequestWithTools|1 stream_unified_chat_request #0 request|2 client_side_tool_v2_result #1 request",
            StreamUnifiedChatRequest,
            ClientSideToolV2Result
        ];
    }
};
UserRules = class _UserRules extends __protoMessage3112 {
    constructor(data){
        super();
        this.rules = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UserRules().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UserRules().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UserRules().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UserRules, a, b2);
    }
    static $() {
        return [
            "UserRules|1 rules #0*",
            ConversationMessage_KnowledgeItem
        ];
    }
};
StreamStart = class _StreamStart extends __protoMessage3112 {
    constructor(data){
        super();
        this.padding = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamStart().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamStart().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamStart().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamStart, a, b2);
    }
    static $() {
        return [
            "StreamStart|1 padding 9"
        ];
    }
};
SpanContext2 = class _SpanContext extends __protoMessage3112 {
    constructor(data){
        super();
        this.traceId = "";
        this.spanId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SpanContext().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SpanContext().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SpanContext().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SpanContext, a, b2);
    }
    static $() {
        return [
            "SpanContext|1 trace_id 9|2 span_id 9|3 trace_flags 13?|4 trace_state 9?"
        ];
    }
};
StreamUnifiedChatResponseWithTools = class _StreamUnifiedChatResponseWithTools extends __protoMessage3112 {
    constructor(data){
        super();
        this.response = {
            case: void 0
        };
        this.eventId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamUnifiedChatResponseWithTools().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamUnifiedChatResponseWithTools().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamUnifiedChatResponseWithTools().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamUnifiedChatResponseWithTools, a, b2);
    }
    static $() {
        return [
            "StreamUnifiedChatResponseWithTools|1 client_side_tool_v2_call #0 response|2 stream_unified_chat_response #1 response|3 conversation_summary #2 response|4 user_rules #3 response|5 stream_start #4 response|6 tracing_context #5?|7 event_id 9",
            ClientSideToolV2Call,
            StreamUnifiedChatResponse,
            ConversationSummary2,
            UserRules,
            StreamStart,
            SpanContext2
        ];
    }
};
StreamUnifiedChatRequestWithToolsIdempotent = class _StreamUnifiedChatRequestWithToolsIdempotent extends __protoMessage3112 {
    constructor(data){
        super();
        this.request = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamUnifiedChatRequestWithToolsIdempotent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamUnifiedChatRequestWithToolsIdempotent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamUnifiedChatRequestWithToolsIdempotent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamUnifiedChatRequestWithToolsIdempotent, a, b2);
    }
    static $() {
        return [
            "StreamUnifiedChatRequestWithToolsIdempotent|1 client_chunk #0 request|2 abort #1 request|3 close #1 request|4 idempotency_key 9?|5 seqno 13?",
            StreamUnifiedChatRequestWithTools,
            Empty
        ];
    }
};
WelcomeMessage = class _WelcomeMessage extends __protoMessage3112 {
    constructor(data){
        super();
        this.message = "";
        this.isDegradedMode = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WelcomeMessage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WelcomeMessage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WelcomeMessage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WelcomeMessage, a, b2);
    }
    static $() {
        return [
            "WelcomeMessage|1 message 9|2 is_degraded_mode 8"
        ];
    }
};
StreamUnifiedChatResponseWithToolsIdempotent = class _StreamUnifiedChatResponseWithToolsIdempotent extends __protoMessage3112 {
    constructor(data){
        super();
        this.response = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamUnifiedChatResponseWithToolsIdempotent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamUnifiedChatResponseWithToolsIdempotent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamUnifiedChatResponseWithToolsIdempotent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamUnifiedChatResponseWithToolsIdempotent, a, b2);
    }
    static $() {
        return [
            "StreamUnifiedChatResponseWithToolsIdempotent|1 server_chunk #0 response|3 welcome_message #1 response|4 seqno_ack 13 response",
            StreamUnifiedChatResponseWithTools,
            WelcomeMessage
        ];
    }
};
ConversationSummary2 = class _ConversationSummary extends __protoMessage3112 {
    constructor(data){
        super();
        this.summary = "";
        this.truncationLastBubbleIdInclusive = "";
        this.clientShouldStartSendingFromInclusiveBubbleId = "";
        this.previousConversationSummaryBubbleId = "";
        this.includesToolResults = false;
        this.strategy = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationSummary().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationSummary().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationSummary().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationSummary, a, b2);
    }
    static $() {
        return [
            "ConversationSummary|1 summary 9|2 truncation_last_bubble_id_inclusive 9|3 client_should_start_sending_from_inclusive_bubble_id 9|4 previous_conversation_summary_bubble_id 9|5 includes_tool_results 8|6 strategy 9"
        ];
    }
};
ContextToRank = class _ContextToRank extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.contents = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ContextToRank().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ContextToRank().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ContextToRank().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ContextToRank, a, b2);
    }
    static $() {
        return [
            "ContextToRank|1 relative_workspace_path 9|2 contents 9|3 line_range #0?|4 code_block #1?",
            LineRange,
            CodeBlock
        ];
    }
};
RankedContext = class _RankedContext extends __protoMessage3112 {
    constructor(data){
        super();
        this.score = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RankedContext().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RankedContext().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RankedContext().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RankedContext, a, b2);
    }
    static $() {
        return [
            "RankedContext|1 context #0|2 score 2",
            ContextToRank
        ];
    }
};
DocumentationCitation = class _DocumentationCitation extends __protoMessage3112 {
    constructor(data){
        super();
        this.chunks = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DocumentationCitation().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DocumentationCitation().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DocumentationCitation().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DocumentationCitation, a, b2);
    }
    static $() {
        return [
            "DocumentationCitation|1 chunks #0*",
            DocumentationChunk
        ];
    }
};
WebCitation = class _WebCitation extends __protoMessage3112 {
    constructor(data){
        super();
        this.references = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WebCitation().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WebCitation().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WebCitation().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WebCitation, a, b2);
    }
    static $() {
        return [
            "WebCitation|1 references #0*",
            WebReference
        ];
    }
};
WebReference = class _WebReference extends __protoMessage3112 {
    constructor(data){
        super();
        this.title = "";
        this.url = "";
        this.chunk = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WebReference().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WebReference().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WebReference().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WebReference, a, b2);
    }
    static $() {
        return [
            "WebReference|2 title 9|1 url 9|3 chunk 9"
        ];
    }
};
DocsReference = class _DocsReference extends __protoMessage3112 {
    constructor(data){
        super();
        this.title = "";
        this.url = "";
        this.chunk = "";
        this.name = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DocsReference().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DocsReference().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DocsReference().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DocsReference, a, b2);
    }
    static $() {
        return [
            "DocsReference|1 title 9|2 url 9|3 chunk 9|4 name 9"
        ];
    }
};
AiWebSearchResult = class _AiWebSearchResult extends __protoMessage3112 {
    constructor(data){
        super();
        this.content = "";
        this.title = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AiWebSearchResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AiWebSearchResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AiWebSearchResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AiWebSearchResult, a, b2);
    }
    static $() {
        return [
            "AiWebSearchResult|1 content 9|2 title 9"
        ];
    }
};
AiWebSearchResults = class _AiWebSearchResults extends __protoMessage3112 {
    constructor(data){
        super();
        this.results = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AiWebSearchResults().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AiWebSearchResults().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AiWebSearchResults().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AiWebSearchResults, a, b2);
    }
    static $() {
        return [
            "AiWebSearchResults|1 results #0*",
            AiWebSearchResult
        ];
    }
};
StatusUpdate = class _StatusUpdate extends __protoMessage3112 {
    constructor(data){
        super();
        this.message = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StatusUpdate().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StatusUpdate().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StatusUpdate().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StatusUpdate, a, b2);
    }
    static $() {
        return [
            "StatusUpdate|1 message 9|2 metadata 9?"
        ];
    }
};
StatusUpdates = class _StatusUpdates extends __protoMessage3112 {
    constructor(data){
        super();
        this.updates = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StatusUpdates().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StatusUpdates().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StatusUpdates().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StatusUpdates, a, b2);
    }
    static $() {
        return [
            "StatusUpdates|1 updates #0*",
            StatusUpdate
        ];
    }
};
RerankDocumentsRequest = class _RerankDocumentsRequest extends __protoMessage3112 {
    constructor(data){
        super();
        this.query = "";
        this.documents = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RerankDocumentsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RerankDocumentsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RerankDocumentsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RerankDocumentsRequest, a, b2);
    }
    static $() {
        return [
            "RerankDocumentsRequest|1 query 9|2 documents #0*",
            Document
        ];
    }
};
RerankDocumentsResponse = class _RerankDocumentsResponse extends __protoMessage3112 {
    constructor(data){
        super();
        this.documents = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RerankDocumentsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RerankDocumentsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RerankDocumentsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RerankDocumentsResponse, a, b2);
    }
    static $() {
        return [
            "RerankDocumentsResponse|1 documents #0*",
            DocumentIdsWithScores
        ];
    }
};
Document = class _Document extends __protoMessage3112 {
    constructor(data){
        super();
        this.content = "";
        this.id = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _Document().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Document().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Document().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_Document, a, b2);
    }
    static $() {
        return [
            "Document|1 content 9|2 id 9"
        ];
    }
};
DocumentIdsWithScores = class _DocumentIdsWithScores extends __protoMessage3112 {
    constructor(data){
        super();
        this.documentId = "";
        this.score = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DocumentIdsWithScores().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DocumentIdsWithScores().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DocumentIdsWithScores().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DocumentIdsWithScores, a, b2);
    }
    static $() {
        return [
            "DocumentIdsWithScores|1 document_id 9|2 score 2"
        ];
    }
};
ComposerFileDiffHistory = class _ComposerFileDiffHistory extends __protoMessage3112 {
    constructor(data){
        super();
        this.fileName = "";
        this.diffHistory = [];
        this.diffHistoryTimestamps = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ComposerFileDiffHistory().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ComposerFileDiffHistory().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ComposerFileDiffHistory().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ComposerFileDiffHistory, a, b2);
    }
    static $() {
        return [
            "ComposerFileDiffHistory|1 file_name 9|2 diff_history 9*|3 diff_history_timestamps 1*"
        ];
    }
};
WorkspaceFolder = class _WorkspaceFolder extends __protoMessage3112 {
    constructor(data){
        super();
        this.uri = "";
        this.name = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WorkspaceFolder().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WorkspaceFolder().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WorkspaceFolder().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WorkspaceFolder, a, b2);
    }
    static $() {
        return [
            "WorkspaceFolder|1 uri 9|2 name 9"
        ];
    }
};
StreamUnifiedChatRequest = class _StreamUnifiedChatRequest extends __protoMessage3112 {
    constructor(data){
        super();
        this.conversation = [];
        this.fullConversationHeadersOnly = [];
        this.documentationIdentifiers = [];
        this.externalLinks = [];
        this.diffsForCompressingFiles = [];
        this.multiFileLinterErrors = [];
        this.fileDiffHistories = [];
        this.quotes = [];
        this.additionalRankedContext = [];
        this.isChat = false;
        this.conversationId = "";
        this.replyingToRequestId = "";
        this.repositoryInfoShouldQueryStaging = false;
        this.repositoryInfoShouldQueryProd = false;
        this.repoQueryAuthToken = "";
        this.isAgentic = false;
        this.supportedTools = [];
        this.enableYoloMode = false;
        this.yoloPrompt = "";
        this.useUnifiedChatPrompt = false;
        this.mcpTools = [];
        this.isHeadless = false;
        this.isBackgroundComposer = false;
        this.toolsRequiringAcceptedReturn = [];
        this.projectLayouts = [];
        this.supportsGitIndex = false;
        this.forceIsNotDev = false;
        this.allowServerSideSemanticSearch = false;
        this.workspaceFolders = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamUnifiedChatRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamUnifiedChatRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamUnifiedChatRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamUnifiedChatRequest, a, b2);
    }
    static $() {
        return [
            "StreamUnifiedChatRequest|1 conversation #0*|30 full_conversation_headers_only #1*|2 allow_long_file_scan 8?|3 explicit_context #2|4 can_handle_filenames_after_language_ids 8?|5 model_details #3|6 linter_errors #4|7 documentation_identifiers 9*|8 use_web 9?|9 external_links #5*|10 project_context #0?|11 diffs_for_compressing_files #6*|12 compress_edits 8?|13 should_cache 8?|14 multi_file_linter_errors #4*|15 current_file #7|16 recent_edits #8?|17 use_reference_composer_diff_prompt 8?|18 file_diff_histories #9*|19 use_new_compression_scheme 8?|21 quotes #10*|20 additional_ranked_context #11*|22 is_chat 8|23 conversation_id 9|72 replying_to_request_id 9|24 repository_info #12|25 repository_info_should_query_staging 8|39 repository_info_should_query_prod 8|52 query_only_repo_access #13|44 repo_query_auth_token 9|26 environment_info #14|27 is_agentic 8|28 conversation_summary #15?|29 supported_tools #16*|31 enable_yolo_mode 8|32 yolo_prompt 9|33 use_unified_chat_prompt 8|34 mcp_tools #17*|35 use_full_inputs_context 8?|36 is_resume 8?|37 allow_model_fallbacks 8?|38 number_of_times_shown_fallback_model_warning 5?|40 context_bank_session_id 9?|41 context_bank_version 5?|43 context_bank_encryption_key 12?|45 is_headless 8|68 is_background_composer 8|42 uses_codebase_results #18?|46 unified_mode #19?|47 tools_requiring_accepted_return #16*|48 should_disable_tools 8?|49 thinking_level #20?|50 should_use_chat_prompt 8?|55 background_composer_id 9?|51 uses_rules 8?|53 mode_uses_auto_apply 8?|54 unified_mode_name 9?|56 use_generate_rules_prompt 8?|57 edit_tool_supports_search_and_replace 8?|58 project_layouts #21*|59 repository_name_if_unindexed 9?|60 indexing_progress 1?|61 full_file_cmd_k_options #22?|62 indexing_phase_if_unindexed 9?|63 use_knowledge_base_prompt 8?|64 indexing_num_files_if_unindexed 5?|66 subagent_info #23?|67 supports_git_index 8|69 force_is_not_dev 8|70 disable_edit_file_timeout 8?|71 should_attach_linter_errors 8?|73 should_speculatively_route_gpt5 8?|74 force_terminal_hanging_detection 8?|75 force_summarization 8?|76 is_quick_search_query 8?|77 is_spec_mode 8?|78 allow_server_side_semantic_search 8|79 speculative_summarization_encryption_key 12?|81 workspace_folders #24*|82 does_readfile_support_images 8?|83 sandboxing_support_enabled 8?|84 custom_planning_instructions 9?|85 enable_terminal_file_persistence 8?|86 terminals_folder 9?|93 agent_transcripts_folder 9?|87 agent_notes_folder 9?|88 agent_tools_folder 9?|89 current_plan #25?|90 has_mcp_descriptors 8?|91 best_of_n_group_id 9?|92 try_use_best_of_n_promotion 8?",
            ConversationMessage,
            ConversationMessageHeader,
            ExplicitContext,
            ModelDetails,
            LinterErrors,
            ComposerExternalLink,
            StreamUnifiedChatRequest_RedDiff,
            CurrentFileInfo,
            StreamUnifiedChatRequest_RecentEdits,
            ComposerFileDiffHistory,
            ChatQuote,
            RankedContext,
            RepositoryInfo,
            QueryOnlyRepoAccess,
            EnvironmentInfo,
            ConversationSummary2,
            ClientSideToolV2,
            MCPParams_Tool,
            StreamUnifiedChatRequest_CodeSearchResult,
            StreamUnifiedChatRequest_UnifiedMode,
            StreamUnifiedChatRequest_ThinkingLevel,
            ProjectLayout,
            StreamUnifiedChatRequest_FullFileCmdKOptions,
            SubagentInfo,
            WorkspaceFolder,
            StreamUnifiedChatRequest_CurrentPlan
        ];
    }
};
StreamUnifiedChatRequest_UnifiedMode = enumType2(proto3, __protoPackage115, "StreamUnifiedChatRequest.UnifiedMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CHAT"
    ],
    [
        2,
        "AGENT"
    ],
    [
        3,
        "EDIT"
    ],
    [
        4,
        "CUSTOM"
    ],
    [
        5,
        "PLAN"
    ],
    [
        6,
        "DEBUG"
    ]
], 1);
StreamUnifiedChatRequest_ThinkingLevel = enumType2(proto3, __protoPackage115, "StreamUnifiedChatRequest.ThinkingLevel", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MEDIUM"
    ],
    [
        2,
        "HIGH"
    ]
], 1);
StreamUnifiedChatRequest_RedDiff = class _StreamUnifiedChatRequest_RedDiff extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.redRanges = [];
        this.redRangesReversed = [];
        this.startHash = "";
        this.endHash = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamUnifiedChatRequest_RedDiff().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamUnifiedChatRequest_RedDiff().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamUnifiedChatRequest_RedDiff().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamUnifiedChatRequest_RedDiff, a, b2);
    }
    static $() {
        return [
            "StreamUnifiedChatRequest.RedDiff|1 relative_workspace_path 9|2 red_ranges #0*|3 red_ranges_reversed #0*|4 start_hash 9|5 end_hash 9",
            SimplestRange
        ];
    }
};
StreamUnifiedChatRequest_RecentEdits = class _StreamUnifiedChatRequest_RecentEdits extends __protoMessage3112 {
    constructor(data){
        super();
        this.codeBlockInfo = [];
        this.finalFileValues = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamUnifiedChatRequest_RecentEdits().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamUnifiedChatRequest_RecentEdits().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamUnifiedChatRequest_RecentEdits().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamUnifiedChatRequest_RecentEdits, a, b2);
    }
    static $() {
        return [
            "StreamUnifiedChatRequest.RecentEdits|1 code_block_info #0*|2 final_file_values #1*|3 edits_belong_to_composer_generation_uuid 9?",
            StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo,
            StreamUnifiedChatRequest_RecentEdits_FileInfo
        ];
    }
};
StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo = class _StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo, a, b2);
    }
    static $() {
        return [
            "StreamUnifiedChatRequest.RecentEdits.CodeBlockInfo|1 relative_workspace_path 9|2 content_before 9?|3 content_after 9?|4 generation_uuid 9?|5 version 5?"
        ];
    }
};
StreamUnifiedChatRequest_RecentEdits_FileInfo = class _StreamUnifiedChatRequest_RecentEdits_FileInfo extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.content = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamUnifiedChatRequest_RecentEdits_FileInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamUnifiedChatRequest_RecentEdits_FileInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamUnifiedChatRequest_RecentEdits_FileInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamUnifiedChatRequest_RecentEdits_FileInfo, a, b2);
    }
    static $() {
        return [
            "StreamUnifiedChatRequest.RecentEdits.FileInfo|1 relative_workspace_path 9|2 content 9"
        ];
    }
};
StreamUnifiedChatRequest_CodeSearchResult = class _StreamUnifiedChatRequest_CodeSearchResult extends __protoMessage3112 {
    constructor(data){
        super();
        this.results = [];
        this.allFiles = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamUnifiedChatRequest_CodeSearchResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamUnifiedChatRequest_CodeSearchResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamUnifiedChatRequest_CodeSearchResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamUnifiedChatRequest_CodeSearchResult, a, b2);
    }
    static $() {
        return [
            "StreamUnifiedChatRequest.CodeSearchResult|1 results #0*|2 all_files #1*",
            CodeResult,
            File2
        ];
    }
};
StreamUnifiedChatRequest_FullFileCmdKOptions = class _StreamUnifiedChatRequest_FullFileCmdKOptions extends __protoMessage3112 {
    constructor(data){
        super();
        this.filePath = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamUnifiedChatRequest_FullFileCmdKOptions().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamUnifiedChatRequest_FullFileCmdKOptions().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamUnifiedChatRequest_FullFileCmdKOptions().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamUnifiedChatRequest_FullFileCmdKOptions, a, b2);
    }
    static $() {
        return [
            "StreamUnifiedChatRequest.FullFileCmdKOptions|1 file_path 9"
        ];
    }
};
StreamUnifiedChatRequest_CurrentPlan = class _StreamUnifiedChatRequest_CurrentPlan extends __protoMessage3112 {
    constructor(data){
        super();
        this.content = "";
        this.name = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamUnifiedChatRequest_CurrentPlan().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamUnifiedChatRequest_CurrentPlan().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamUnifiedChatRequest_CurrentPlan().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamUnifiedChatRequest_CurrentPlan, a, b2);
    }
    static $() {
        return [
            "StreamUnifiedChatRequest.CurrentPlan|1 content 9|2 name 9"
        ];
    }
};
ContextPiece = class _ContextPiece extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.content = "";
        this.score = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ContextPiece().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ContextPiece().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ContextPiece().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ContextPiece, a, b2);
    }
    static $() {
        return [
            "ContextPiece|1 relative_workspace_path 9|2 content 9|3 score 2"
        ];
    }
};
ContextPieceUpdate = class _ContextPieceUpdate extends __protoMessage3112 {
    constructor(data){
        super();
        this.pieces = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ContextPieceUpdate().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ContextPieceUpdate().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ContextPieceUpdate().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ContextPieceUpdate, a, b2);
    }
    static $() {
        return [
            "ContextPieceUpdate|1 pieces #0*",
            ContextPiece
        ];
    }
};
StreamUnifiedChatResponse = class _StreamUnifiedChatResponse extends __protoMessage3112 {
    constructor(data){
        super();
        this.text = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamUnifiedChatResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamUnifiedChatResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamUnifiedChatResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamUnifiedChatResponse, a, b2);
    }
    static $() {
        return [
            "StreamUnifiedChatResponse|1 text 9|22 server_bubble_id 9?|2 debugging_only_chat_prompt 9?|3 debugging_only_token_count 5?|4 document_citation #0|5 filled_prompt 9?|6 is_big_file 8?|7 intermediate_text 9?|10 is_using_slow_request 8?|8 chunk_identity #1?|9 docs_reference #2?|11 web_citation #3?|33 ai_web_search_results #4?|12 status_updates #5?|13 tool_call #6?|36 tool_call_v2 #7?|14 should_break_ai_message 8?|15 partial_tool_call #8?|16 final_tool_result #9?|17 symbol_link #10?|19 file_link #11?|18 conversation_summary #12?|20 service_status_update #13?|21 viewable_git_context #14?|23 context_piece_update #15?|24 used_code #16?|25 thinking #17?|37 thinking_style #18?|26 stop_using_dsv3_agentic_model 8?|27 usage_uuid 9?|28 conversation_summary_starter #19?|29 subagent_return #20?|30 context_window_status #21?|31 image_description #22?|32 parallel_tool_calls_complete 8?|34 stars_feedback_request #23?|35 model_provider_request_json 9?",
            DocumentationCitation,
            StreamUnifiedChatResponse_ChunkIdentity,
            DocsReference,
            WebCitation,
            AiWebSearchResults,
            StatusUpdates,
            StreamedBackToolCall,
            StreamedBackToolCallV2,
            StreamedBackPartialToolCall,
            StreamUnifiedChatResponse_FinalToolResult,
            SymbolLink,
            FileLink,
            ConversationSummary2,
            ServiceStatusUpdate,
            ViewableGitContext,
            ContextPieceUpdate,
            StreamUnifiedChatResponse_UsedCode,
            ConversationMessage_Thinking,
            ConversationMessage_ThinkingStyle,
            ConversationSummaryStarter,
            SubagentReturnCall,
            ContextWindowStatus,
            StreamUnifiedChatResponse_ImageDescription,
            StarsFeedbackRequest
        ];
    }
};
StreamUnifiedChatResponse_UsedCode = class _StreamUnifiedChatResponse_UsedCode extends __protoMessage3112 {
    constructor(data){
        super();
        this.codeResults = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamUnifiedChatResponse_UsedCode().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamUnifiedChatResponse_UsedCode().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamUnifiedChatResponse_UsedCode().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamUnifiedChatResponse_UsedCode, a, b2);
    }
    static $() {
        return [
            "StreamUnifiedChatResponse.UsedCode|1 code_results #0*",
            CodeResult
        ];
    }
};
StreamUnifiedChatResponse_ChunkIdentity = class _StreamUnifiedChatResponse_ChunkIdentity extends __protoMessage3112 {
    constructor(data){
        super();
        this.fileName = "";
        this.startLine = 0;
        this.endLine = 0;
        this.text = "";
        this.chunkType = ChunkType.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamUnifiedChatResponse_ChunkIdentity().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamUnifiedChatResponse_ChunkIdentity().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamUnifiedChatResponse_ChunkIdentity().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamUnifiedChatResponse_ChunkIdentity, a, b2);
    }
    static $() {
        return [
            "StreamUnifiedChatResponse.ChunkIdentity|1 file_name 9|2 start_line 5|3 end_line 5|4 text 9|5 chunk_type #0",
            ChunkType
        ];
    }
};
StreamUnifiedChatResponse_FinalToolResult = class _StreamUnifiedChatResponse_FinalToolResult extends __protoMessage3112 {
    constructor(data){
        super();
        this.toolCallId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamUnifiedChatResponse_FinalToolResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamUnifiedChatResponse_FinalToolResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamUnifiedChatResponse_FinalToolResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamUnifiedChatResponse_FinalToolResult, a, b2);
    }
    static $() {
        return [
            "StreamUnifiedChatResponse.FinalToolResult|1 tool_call_id 9|2 result #0",
            ClientSideToolV2Result
        ];
    }
};
StreamUnifiedChatResponse_ImageDescription = class _StreamUnifiedChatResponse_ImageDescription extends __protoMessage3112 {
    constructor(data){
        super();
        this.description = "";
        this.imageUuid = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamUnifiedChatResponse_ImageDescription().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamUnifiedChatResponse_ImageDescription().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamUnifiedChatResponse_ImageDescription().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamUnifiedChatResponse_ImageDescription, a, b2);
    }
    static $() {
        return [
            "StreamUnifiedChatResponse.ImageDescription|1 description 9|2 image_uuid 9"
        ];
    }
};
ContextWindowStatus = class _ContextWindowStatus extends __protoMessage3112 {
    constructor(data){
        super();
        this.percentageRemaining = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ContextWindowStatus().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ContextWindowStatus().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ContextWindowStatus().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ContextWindowStatus, a, b2);
    }
    static $() {
        return [
            "ContextWindowStatus|1 percentage_remaining 5|2 tokens_used 5?|3 token_limit 5?|4 percentage_remaining_float 2?"
        ];
    }
};
StarsFeedbackRequest = class _StarsFeedbackRequest extends __protoMessage3112 {
    constructor(data){
        super();
        this.bubbleId = "";
        this.message = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StarsFeedbackRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StarsFeedbackRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StarsFeedbackRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StarsFeedbackRequest, a, b2);
    }
    static $() {
        return [
            "StarsFeedbackRequest|1 bubble_id 9|2 message 9"
        ];
    }
};
ConversationSummaryStarter = class _ConversationSummaryStarter extends __protoMessage3112 {
    constructor(data){
        super();
        this.message = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationSummaryStarter().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationSummaryStarter().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationSummaryStarter().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationSummaryStarter, a, b2);
    }
    static $() {
        return [
            "ConversationSummaryStarter|1 message 9"
        ];
    }
};
ServiceStatusUpdate = class _ServiceStatusUpdate extends __protoMessage3112 {
    constructor(data){
        super();
        this.message = "";
        this.codicon = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ServiceStatusUpdate().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ServiceStatusUpdate().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ServiceStatusUpdate().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ServiceStatusUpdate, a, b2);
    }
    static $() {
        return [
            "ServiceStatusUpdate|1 message 9|2 codicon 9|3 allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown 8?|4 action_to_run_on_status_update 9?"
        ];
    }
};
SymbolLink = class _SymbolLink extends __protoMessage3112 {
    constructor(data){
        super();
        this.symbolName = "";
        this.symbolSearchString = "";
        this.relativeWorkspacePath = "";
        this.roughLineNumber = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SymbolLink().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SymbolLink().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SymbolLink().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SymbolLink, a, b2);
    }
    static $() {
        return [
            "SymbolLink|1 symbol_name 9|2 symbol_search_string 9|3 relative_workspace_path 9|4 rough_line_number 5"
        ];
    }
};
FileLink = class _FileLink extends __protoMessage3112 {
    constructor(data){
        super();
        this.displayName = "";
        this.relativeWorkspacePath = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FileLink().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FileLink().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FileLink().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FileLink, a, b2);
    }
    static $() {
        return [
            "FileLink|1 display_name 9|2 relative_workspace_path 9"
        ];
    }
};
RedDiff = class _RedDiff extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.redRanges = [];
        this.redRangesReversed = [];
        this.startHash = "";
        this.endHash = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RedDiff().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RedDiff().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RedDiff().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RedDiff, a, b2);
    }
    static $() {
        return [
            "RedDiff|1 relative_workspace_path 9|2 red_ranges #0*|3 red_ranges_reversed #0*|4 start_hash 9|5 end_hash 9",
            SimplestRange
        ];
    }
};
ConversationMessageHeader = class _ConversationMessageHeader extends __protoMessage3112 {
    constructor(data){
        super();
        this.bubbleId = "";
        this.type = ConversationMessage_MessageType.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessageHeader().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessageHeader().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessageHeader().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessageHeader, a, b2);
    }
    static $() {
        return [
            "ConversationMessageHeader|1 bubble_id 9|2 server_bubble_id 9?|3 type #0",
            ConversationMessage_MessageType
        ];
    }
};
DiffFile = class _DiffFile extends __protoMessage3112 {
    constructor(data){
        super();
        this.fileDetails = "";
        this.fileName = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DiffFile().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DiffFile().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DiffFile().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DiffFile, a, b2);
    }
    static $() {
        return [
            "DiffFile|1 file_details 9|2 file_name 9"
        ];
    }
};
ViewableCommitProps = class _ViewableCommitProps extends __protoMessage3112 {
    constructor(data){
        super();
        this.description = "";
        this.message = "";
        this.files = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ViewableCommitProps().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ViewableCommitProps().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ViewableCommitProps().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ViewableCommitProps, a, b2);
    }
    static $() {
        return [
            "ViewableCommitProps|1 description 9|2 message 9|3 files #0*",
            DiffFile
        ];
    }
};
ViewablePRProps = class _ViewablePRProps extends __protoMessage3112 {
    constructor(data){
        super();
        this.title = "";
        this.body = "";
        this.files = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ViewablePRProps().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ViewablePRProps().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ViewablePRProps().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ViewablePRProps, a, b2);
    }
    static $() {
        return [
            "ViewablePRProps|1 title 9|2 body 9|3 files #0*",
            DiffFile
        ];
    }
};
ViewableDiffProps = class _ViewableDiffProps extends __protoMessage3112 {
    constructor(data){
        super();
        this.files = [];
        this.diffPreface = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ViewableDiffProps().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ViewableDiffProps().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ViewableDiffProps().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ViewableDiffProps, a, b2);
    }
    static $() {
        return [
            "ViewableDiffProps|1 files #0*|2 diff_preface 9",
            DiffFile
        ];
    }
};
ViewableGitContext = class _ViewableGitContext extends __protoMessage3112 {
    constructor(data){
        super();
        this.diffData = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ViewableGitContext().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ViewableGitContext().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ViewableGitContext().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ViewableGitContext, a, b2);
    }
    static $() {
        return [
            "ViewableGitContext|1 commit_data #0?|2 pull_request_data #1?|3 diff_data #2*",
            ViewableCommitProps,
            ViewablePRProps,
            ViewableDiffProps
        ];
    }
};
ConversationMessage = class _ConversationMessage extends __protoMessage3112 {
    constructor(data){
        super();
        this.text = "";
        this.type = ConversationMessage_MessageType.UNSPECIFIED;
        this.attachedCodeChunks = [];
        this.codebaseContextChunks = [];
        this.commits = [];
        this.pullRequests = [];
        this.gitDiffs = [];
        this.assistantSuggestedDiffs = [];
        this.interpreterResults = [];
        this.images = [];
        this.attachedFolders = [];
        this.approximateLintErrors = [];
        this.bubbleId = "";
        this.attachedFoldersNew = [];
        this.lints = [];
        this.userResponsesToSuggestedCodeBlocks = [];
        this.relevantFiles = [];
        this.toolResults = [];
        this.notepads = [];
        this.capabilities = [];
        this.editTrailContexts = [];
        this.suggestedCodeBlocks = [];
        this.diffsForCompressingFiles = [];
        this.multiFileLinterErrors = [];
        this.diffHistories = [];
        this.recentlyViewedFiles = [];
        this.recentLocationsHistory = [];
        this.isAgentic = false;
        this.fileDiffTrajectories = [];
        this.existedSubsequentTerminalCommand = false;
        this.existedPreviousTerminalCommand = false;
        this.docsReferences = [];
        this.webReferences = [];
        this.aiWebSearchResults = [];
        this.attachedFoldersListDirResults = [];
        this.humanChanges = [];
        this.attachedHumanChanges = false;
        this.summarizedComposers = [];
        this.cursorRules = [];
        this.contextPieces = [];
        this.allThinkingBlocks = [];
        this.diffsSinceLastApply = [];
        this.deletedFiles = [];
        this.supportedTools = [];
        this.consoleLogs = [];
        this.knowledgeItems = [];
        this.uiElementPicked = [];
        this.documentationSelections = [];
        this.externalLinks = [];
        this.projectLayouts = [];
        this.capabilityContexts = [];
        this.todos = [];
        this.requestId = "";
        this.createdAt = "";
        this.mcpDescriptors = [];
        this.workspaceUris = [];
        this.cursorCommands = [];
        this.cursorCommandsExplicitlySet = false;
        this.pastChats = [];
        this.pastChatsExplicitlySet = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage, a, b2);
    }
    static $() {
        return [
            "ConversationMessage|1 text 9|2 type #0|3 attached_code_chunks #1*|4 codebase_context_chunks #2*|5 commits #3*|6 pull_requests #4*|7 git_diffs #5*|8 assistant_suggested_diffs #6*|9 interpreter_results #7*|10 images #8*|11 attached_folders 9*|12 approximate_lint_errors #9*|13 bubble_id 9|32 server_bubble_id 9?|14 attached_folders_new #10*|15 lints #11*|16 user_responses_to_suggested_code_blocks #12*|17 relevant_files 9*|18 tool_results #13*|19 notepads #14*|20 is_capability_iteration 8?|21 capabilities #15*|22 edit_trail_contexts #16*|23 suggested_code_blocks #17*|24 diffs_for_compressing_files #18*|25 multi_file_linter_errors #19*|26 diff_histories #20*|27 recently_viewed_files #1*|28 recent_locations_history #21*|29 is_agentic 8|30 file_diff_trajectories #22*|31 conversation_summary #23?|33 existed_subsequent_terminal_command 8|34 existed_previous_terminal_command 8|35 docs_references #24*|36 web_references #25*|75 ai_web_search_results #26*|37 git_context #27?|38 attached_folders_list_dir_results #28*|39 cached_conversation_summary #23?|40 human_changes #29*|41 attached_human_changes 8|42 summarized_composers #30*|43 cursor_rules #31*|44 context_pieces #32*|45 thinking #33?|46 all_thinking_blocks #33*|85 thinking_style #34?|47 unified_mode #35?|98 agent_mode #36?|48 diffs_since_last_apply #37*|49 deleted_files #38*|50 usage_uuid 9?|51 supported_tools #39*|52 current_file_location_data #40?|53 edit_tool_supports_search_and_replace 8?|54 last_terminal_cwd 9?|55 user_explicitly_asked_to_generate_cursor_rules 8?|56 console_logs #41*|57 rich_text 9?|58 knowledge_items #42*|59 ui_element_picked #43*|60 user_explicitly_asked_to_add_to_knowledge_base 8?|61 documentation_selections #44*|62 external_links #45*|63 use_web 8?|64 project_layouts #46*|65 thinking_duration_ms 5?|88 step_duration_ms 5?|66 subagent_return #47?|67 is_simple_looping_message 8?|68 capability_contexts #48*|69 checkpoint_commit_hash 9?|70 git_status_raw 9?|71 todos #49*|72 is_review_edits_followup 8?|74 request_id 9|73 ide_editors_state #50?|76 context_window_status #51?|77 is_plan_execution 8?|78 created_at 9|79 model_info #52|80 is_quick_search_query 8?|81 plan_update #53?|82 is_simulated_msg 8?|95 simulated_msg_reason #54?|97 simulated_message_metadata #55?|83 mcp_descriptors #56*|84 workspace_project_dir 9?|87 workspace_uris 9*|86 debug_mode_config #57?|89 text_blob_id 12?|90 rich_text_blob_id 12?|91 cursor_commands #58*|92 cursor_commands_explicitly_set 8|93 past_chats #59*|94 past_chats_explicitly_set 8|96 triggering_user_info #60?|99 turn_steer 8?|100 sent_by_agent_id 9?|101 sent_by_voice_call 8?|102 sender #61?",
            ConversationMessage_MessageType,
            ConversationMessage_CodeChunk,
            CodeBlock,
            Commit,
            PullRequest,
            GitDiff,
            SimpleFileDiff,
            InterpreterResult,
            ImageProto,
            ConversationMessage_ApproximateLintError,
            FolderInfo,
            ConversationMessage_Lints,
            UserResponseToSuggestedCodeBlock,
            ConversationMessage_ToolResult,
            ConversationMessage_NotepadContext,
            ComposerCapabilityRequest,
            ConversationMessage_EditTrailContext,
            SuggestedCodeBlock,
            RedDiff,
            LinterErrorsWithoutFileContents,
            DiffHistoryData,
            ConversationMessage_RecentLocation,
            ComposerFileDiffHistory,
            ConversationSummary2,
            DocsReference,
            WebReference,
            AiWebSearchResult,
            ViewableGitContext,
            ListDirResult,
            ConversationMessage_HumanChange,
            ConversationMessage_ComposerContext,
            CursorRule2,
            ContextPiece,
            ConversationMessage_Thinking,
            ConversationMessage_ThinkingStyle,
            StreamUnifiedChatRequest_UnifiedMode,
            AgentMode,
            ConversationMessage_DiffSinceLastApply,
            ConversationMessage_DeletedFile,
            ClientSideToolV2,
            CurrentFileLocationData,
            RCPLogEntry,
            ConversationMessage_KnowledgeItem,
            RCPUIElementPicked,
            ConversationMessage_DocumentationSelection,
            ComposerExternalLink,
            ProjectLayout,
            SubagentReturnCall,
            ComposerCapabilityContext,
            TodoItem2,
            ConversationMessage_IdeEditorsState,
            ContextWindowStatus,
            ModelInfo,
            ConversationMessage_PlanUpdate,
            SimulatedMsgReason,
            ConversationMessage_SimulatedMessageMetadata,
            ConversationMessage_McpDescriptor,
            DebugModeConfig,
            SelectedCursorCommand,
            SelectedPastChat,
            TriggeringUserInfo,
            MessageSender
        ];
    }
};
ConversationMessage_MessageType = enumType2(proto3, __protoPackage115, "ConversationMessage.MessageType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "HUMAN"
    ],
    [
        2,
        "AI"
    ]
], 1);
ConversationMessage_ThinkingStyle = enumType2(proto3, __protoPackage115, "ConversationMessage.ThinkingStyle", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DEFAULT"
    ],
    [
        2,
        "CODEX"
    ],
    [
        3,
        "GPT5"
    ]
], 1);
ConversationMessage_CodeChunk = class _ConversationMessage_CodeChunk extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.startLineNumber = 0;
        this.lines = [];
        this.languageIdentifier = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_CodeChunk().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_CodeChunk().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_CodeChunk().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_CodeChunk, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.CodeChunk|1 relative_workspace_path 9|2 start_line_number 5|3 lines 9*|4 summarization_strategy #0?|5 language_identifier 9|6 intent #1?|7 is_final_version 8?|8 is_first_version 8?|9 contents_are_missing 8?|10 is_only_included_from_folder 8?|11 code_chunk_git_context #2?",
            ConversationMessage_CodeChunk_SummarizationStrategy,
            ConversationMessage_CodeChunk_Intent,
            ConversationMessage_CodeChunk_CodeChunkGitContext
        ];
    }
};
ConversationMessage_CodeChunk_Intent = enumType2(proto3, __protoPackage115, "ConversationMessage.CodeChunk.Intent", [
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
    ],
    [
        3,
        "RECENTLY_VIEWED_FILE"
    ],
    [
        4,
        "OUTLINE"
    ],
    [
        5,
        "MENTIONED_FILE"
    ],
    [
        6,
        "CODE_SELECTION"
    ],
    [
        7,
        "AI_EDITED_FILE"
    ],
    [
        8,
        "VISIBLE_FILE"
    ],
    [
        9,
        "TERMINAL_SELECTION"
    ]
], 1);
ConversationMessage_CodeChunk_SummarizationStrategy = enumType2(proto3, __protoPackage115, "ConversationMessage.CodeChunk.SummarizationStrategy", [
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
ConversationMessage_CodeChunk_CodeChunkGitContext = class _ConversationMessage_CodeChunk_CodeChunkGitContext extends __protoMessage3112 {
    constructor(data){
        super();
        this.gitInfo = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_CodeChunk_CodeChunkGitContext().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_CodeChunk_CodeChunkGitContext().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_CodeChunk_CodeChunkGitContext().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_CodeChunk_CodeChunkGitContext, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.CodeChunk.CodeChunkGitContext|1 git_info #0*",
            ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo
        ];
    }
};
ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo = class _ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo extends __protoMessage3112 {
    constructor(data){
        super();
        this.commit = "";
        this.author = "";
        this.date = "";
        this.message = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.CodeChunk.CodeChunkGitContext.CodeChunkGitInfo|1 commit 9|2 author 9|3 date 9|4 message 9"
        ];
    }
};
ConversationMessage_ToolResult = class _ConversationMessage_ToolResult extends __protoMessage3112 {
    constructor(data){
        super();
        this.toolCallId = "";
        this.toolName = "";
        this.toolIndex = 0;
        this.args = "";
        this.rawArgs = "";
        this.attachedCodeChunks = [];
        this.images = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_ToolResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_ToolResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_ToolResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_ToolResult, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.ToolResult|1 tool_call_id 9|2 tool_name 9|3 tool_index 13|12 model_call_id 9?|4 args 9|5 raw_args 9|6 attached_code_chunks #0*|7 content 9?|8 result #1|9 error #2?|10 images #3*|11 tool_call #4?|13 started_at_ms 4?|14 completed_at_ms 4?",
            ConversationMessage_CodeChunk,
            ClientSideToolV2Result,
            ToolResultError,
            ImageProto,
            ClientSideToolV2Call
        ];
    }
};
ConversationMessage_NotepadContext = class _ConversationMessage_NotepadContext extends __protoMessage3112 {
    constructor(data){
        super();
        this.name = "";
        this.text = "";
        this.attachedCodeChunks = [];
        this.attachedFolders = [];
        this.commits = [];
        this.pullRequests = [];
        this.gitDiffs = [];
        this.images = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_NotepadContext().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_NotepadContext().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_NotepadContext().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_NotepadContext, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.NotepadContext|1 name 9|2 text 9|3 attached_code_chunks #0*|4 attached_folders 9*|5 commits #1*|6 pull_requests #2*|7 git_diffs #3*|8 images #4*",
            ConversationMessage_CodeChunk,
            Commit,
            PullRequest,
            GitDiff,
            ImageProto
        ];
    }
};
ConversationMessage_ComposerContext = class _ConversationMessage_ComposerContext extends __protoMessage3112 {
    constructor(data){
        super();
        this.name = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_ComposerContext().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_ComposerContext().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_ComposerContext().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_ComposerContext, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.ComposerContext|1 name 9|2 conversation_summary #0",
            ConversationSummary2
        ];
    }
};
ConversationMessage_EditLocation = class _ConversationMessage_EditLocation extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.contextLines = "";
        this.text = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_EditLocation().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_EditLocation().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_EditLocation().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_EditLocation, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.EditLocation|1 relative_workspace_path 9|3 range #0|4 initial_range #0|5 context_lines 9|6 text 9|7 text_range #0",
            SimplestRange
        ];
    }
};
ConversationMessage_EditTrailContext = class _ConversationMessage_EditTrailContext extends __protoMessage3112 {
    constructor(data){
        super();
        this.uniqueId = "";
        this.editTrailSorted = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_EditTrailContext().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_EditTrailContext().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_EditTrailContext().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_EditTrailContext, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.EditTrailContext|1 unique_id 9|2 edit_trail_sorted #0*",
            ConversationMessage_EditLocation
        ];
    }
};
ConversationMessage_ApproximateLintError = class _ConversationMessage_ApproximateLintError extends __protoMessage3112 {
    constructor(data){
        super();
        this.message = "";
        this.value = "";
        this.startLine = 0;
        this.endLine = 0;
        this.startColumn = 0;
        this.endColumn = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_ApproximateLintError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_ApproximateLintError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_ApproximateLintError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_ApproximateLintError, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.ApproximateLintError|1 message 9|2 value 9|3 start_line 5|4 end_line 5|5 start_column 5|6 end_column 5"
        ];
    }
};
ConversationMessage_Lints = class _ConversationMessage_Lints extends __protoMessage3112 {
    constructor(data){
        super();
        this.chatCodeblockModelValue = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_Lints().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_Lints().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_Lints().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_Lints, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.Lints|1 lints #0|2 chat_codeblock_model_value 9",
            GetLintsForChangeResponse
        ];
    }
};
ConversationMessage_RecentLocation = class _ConversationMessage_RecentLocation extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.lineNumber = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_RecentLocation().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_RecentLocation().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_RecentLocation().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_RecentLocation, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.RecentLocation|1 relative_workspace_path 9|2 line_number 5"
        ];
    }
};
ConversationMessage_RenderedDiff = class _ConversationMessage_RenderedDiff extends __protoMessage3112 {
    constructor(data){
        super();
        this.startLineNumber = 0;
        this.endLineNumberExclusive = 0;
        this.beforeContextLines = [];
        this.removedLines = [];
        this.addedLines = [];
        this.afterContextLines = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_RenderedDiff().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_RenderedDiff().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_RenderedDiff().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_RenderedDiff, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.RenderedDiff|1 start_line_number 5|2 end_line_number_exclusive 5|3 before_context_lines 9*|4 removed_lines 9*|5 added_lines 9*|6 after_context_lines 9*"
        ];
    }
};
ConversationMessage_HumanChange = class _ConversationMessage_HumanChange extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.renderedDiffs = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_HumanChange().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_HumanChange().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_HumanChange().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_HumanChange, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.HumanChange|1 relative_workspace_path 9|2 rendered_diffs #0*",
            ConversationMessage_RenderedDiff
        ];
    }
};
ConversationMessage_Thinking = class _ConversationMessage_Thinking extends __protoMessage3112 {
    constructor(data){
        super();
        this.text = "";
        this.signature = "";
        this.redactedThinking = "";
        this.isLastThinkingChunk = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_Thinking().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_Thinking().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_Thinking().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_Thinking, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.Thinking|1 text 9|2 signature 9|3 redacted_thinking 9|4 is_last_thinking_chunk 8"
        ];
    }
};
ConversationMessage_DiffSinceLastApply = class _ConversationMessage_DiffSinceLastApply extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_DiffSinceLastApply().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_DiffSinceLastApply().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_DiffSinceLastApply().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_DiffSinceLastApply, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.DiffSinceLastApply|1 relative_workspace_path 9|2 diff #0?|4 is_accepted 8?|5 is_rejected 8?|6 last_apply_chained_from_n_human_messages_ago 5?",
            EditFileResult_FileDiff
        ];
    }
};
ConversationMessage_DeletedFile = class _ConversationMessage_DeletedFile extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_DeletedFile().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_DeletedFile().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_DeletedFile().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_DeletedFile, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.DeletedFile|1 relative_workspace_path 9"
        ];
    }
};
ConversationMessage_KnowledgeItem = class _ConversationMessage_KnowledgeItem extends __protoMessage3112 {
    constructor(data){
        super();
        this.title = "";
        this.knowledge = "";
        this.knowledgeId = "";
        this.isGenerated = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_KnowledgeItem().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_KnowledgeItem().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_KnowledgeItem().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_KnowledgeItem, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.KnowledgeItem|1 title 9|2 knowledge 9|3 knowledge_id 9|4 is_generated 8"
        ];
    }
};
ConversationMessage_DocumentationSelection = class _ConversationMessage_DocumentationSelection extends __protoMessage3112 {
    constructor(data){
        super();
        this.docId = "";
        this.name = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_DocumentationSelection().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_DocumentationSelection().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_DocumentationSelection().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_DocumentationSelection, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.DocumentationSelection|1 doc_id 9|2 name 9"
        ];
    }
};
ConversationMessage_IdeEditorsState = class _ConversationMessage_IdeEditorsState extends __protoMessage3112 {
    constructor(data){
        super();
        this.isPillDisplayed = false;
        this.visibleFilePaths = [];
        this.recentlyViewedFilePaths = [];
        this.visibleFiles = [];
        this.recentlyViewedFiles = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_IdeEditorsState().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_IdeEditorsState().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_IdeEditorsState().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_IdeEditorsState, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.IdeEditorsState|1 is_pill_displayed 8|2 visible_file_paths 9*|3 recently_viewed_file_paths 9*|4 visible_files #0*|5 recently_viewed_files #0*",
            ConversationMessage_IdeEditorsState_File
        ];
    }
};
ConversationMessage_IdeEditorsState_File = class _ConversationMessage_IdeEditorsState_File extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativePath = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_IdeEditorsState_File().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_IdeEditorsState_File().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_IdeEditorsState_File().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_IdeEditorsState_File, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.IdeEditorsState.File|1 relative_path 9|2 is_currently_focused 8?|3 current_line_number 5?|4 current_line_text 9?|5 line_count 5?|6 absolute_path 9?"
        ];
    }
};
ConversationMessage_PlanUpdate = class _ConversationMessage_PlanUpdate extends __protoMessage3112 {
    constructor(data){
        super();
        this.currentPlan = "";
        this.isFirstTimeSeen = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_PlanUpdate().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_PlanUpdate().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_PlanUpdate().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_PlanUpdate, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.PlanUpdate|1 current_plan 9|2 is_first_time_seen 8"
        ];
    }
};
ConversationMessage_SimulatedMessageMetadata = class _ConversationMessage_SimulatedMessageMetadata extends __protoMessage3112 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_SimulatedMessageMetadata().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_SimulatedMessageMetadata().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_SimulatedMessageMetadata().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_SimulatedMessageMetadata, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.SimulatedMessageMetadata|1 title 9?|2 task_id 9?|3 fsd_finding_action 9?|4 url 9?|5 subscription_source #0?|6 subscription_event_display #1?|7 interaction_response #2?",
            SubscriptionSource,
            SubscriptionEventDisplay,
            InteractionResponseMetadata
        ];
    }
};
ConversationMessage_McpDescriptor = class _ConversationMessage_McpDescriptor extends __protoMessage3112 {
    constructor(data){
        super();
        this.folderPath = "";
        this.tools = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_McpDescriptor().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_McpDescriptor().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_McpDescriptor().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_McpDescriptor, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.McpDescriptor|1 folder_path 9|2 server_name 9?|3 tools #0*|4 server_use_instructions 9?",
            ConversationMessage_McpDescriptor_Tool
        ];
    }
};
ConversationMessage_McpDescriptor_Tool = class _ConversationMessage_McpDescriptor_Tool extends __protoMessage3112 {
    constructor(data){
        super();
        this.toolName = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConversationMessage_McpDescriptor_Tool().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConversationMessage_McpDescriptor_Tool().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConversationMessage_McpDescriptor_Tool().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConversationMessage_McpDescriptor_Tool, a, b2);
    }
    static $() {
        return [
            "ConversationMessage.McpDescriptor.Tool|1 tool_name 9|2 description 9?"
        ];
    }
};
CurrentFileLocationData = class _CurrentFileLocationData extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.lineNumber = 0;
        this.text = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CurrentFileLocationData().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CurrentFileLocationData().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CurrentFileLocationData().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CurrentFileLocationData, a, b2);
    }
    static $() {
        return [
            "CurrentFileLocationData|1 relative_workspace_path 9|2 line_number 5|3 text 9"
        ];
    }
};
FolderInfo = class _FolderInfo extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativePath = "";
        this.files = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FolderInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FolderInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FolderInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FolderInfo, a, b2);
    }
    static $() {
        return [
            "FolderInfo|1 relative_path 9|2 files #0*",
            FolderFileInfo
        ];
    }
};
FolderFileInfo = class _FolderFileInfo extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativePath = "";
        this.content = "";
        this.truncated = false;
        this.score = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FolderFileInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FolderFileInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FolderFileInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FolderFileInfo, a, b2);
    }
    static $() {
        return [
            "FolderFileInfo|1 relative_path 9|2 content 9|3 truncated 8|4 score 2"
        ];
    }
};
InterpreterResult = class _InterpreterResult extends __protoMessage3112 {
    constructor(data){
        super();
        this.output = "";
        this.success = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InterpreterResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InterpreterResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InterpreterResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InterpreterResult, a, b2);
    }
    static $() {
        return [
            "InterpreterResult|1 output 9|2 success 8"
        ];
    }
};
SimpleFileDiff = class _SimpleFileDiff extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.chunks = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SimpleFileDiff().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SimpleFileDiff().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SimpleFileDiff().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SimpleFileDiff, a, b2);
    }
    static $() {
        return [
            "SimpleFileDiff|1 relative_workspace_path 9|3 chunks #0*",
            SimpleFileDiff_Chunk
        ];
    }
};
SimpleFileDiff_Chunk = class _SimpleFileDiff_Chunk extends __protoMessage3112 {
    constructor(data){
        super();
        this.oldLines = [];
        this.newLines = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SimpleFileDiff_Chunk().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SimpleFileDiff_Chunk().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SimpleFileDiff_Chunk().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SimpleFileDiff_Chunk, a, b2);
    }
    static $() {
        return [
            "SimpleFileDiff.Chunk|1 old_lines 9*|2 new_lines 9*|3 old_range #0|4 new_range #0",
            LineRange
        ];
    }
};
Commit = class _Commit extends __protoMessage3112 {
    constructor(data){
        super();
        this.sha = "";
        this.message = "";
        this.description = "";
        this.diff = [];
        this.author = "";
        this.date = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _Commit().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Commit().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Commit().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_Commit, a, b2);
    }
    static $() {
        return [
            "Commit|1 sha 9|2 message 9|3 description 9|4 diff #0*|5 author 9|6 date 9",
            FileDiff
        ];
    }
};
PullRequest = class _PullRequest extends __protoMessage3112 {
    constructor(data){
        super();
        this.title = "";
        this.body = "";
        this.diff = [];
        this.id = protoInt64.zero;
        this.number = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PullRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PullRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PullRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PullRequest, a, b2);
    }
    static $() {
        return [
            "PullRequest|1 title 9|2 body 9|3 diff #0*|4 id 3|5 number 3",
            FileDiff
        ];
    }
};
SuggestedCodeBlock = class _SuggestedCodeBlock extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SuggestedCodeBlock().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SuggestedCodeBlock().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SuggestedCodeBlock().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SuggestedCodeBlock, a, b2);
    }
    static $() {
        return [
            "SuggestedCodeBlock|1 relative_workspace_path 9"
        ];
    }
};
UserResponseToSuggestedCodeBlock = class _UserResponseToSuggestedCodeBlock extends __protoMessage3112 {
    constructor(data){
        super();
        this.userResponseType = UserResponseToSuggestedCodeBlock_UserResponseType.UNSPECIFIED;
        this.filePath = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UserResponseToSuggestedCodeBlock().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UserResponseToSuggestedCodeBlock().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UserResponseToSuggestedCodeBlock().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UserResponseToSuggestedCodeBlock, a, b2);
    }
    static $() {
        return [
            "UserResponseToSuggestedCodeBlock|1 user_response_type #0|2 file_path 9|3 user_modifications_to_suggested_code_blocks #1?",
            UserResponseToSuggestedCodeBlock_UserResponseType,
            FileDiff
        ];
    }
};
UserResponseToSuggestedCodeBlock_UserResponseType = enumType2(proto3, __protoPackage115, "UserResponseToSuggestedCodeBlock.UserResponseType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ACCEPT"
    ],
    [
        2,
        "REJECT"
    ],
    [
        3,
        "MODIFY"
    ]
], 1);
ContextRerankingCandidateFile = class _ContextRerankingCandidateFile extends __protoMessage3112 {
    constructor(data){
        super();
        this.fileName = "";
        this.fileContent = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ContextRerankingCandidateFile().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ContextRerankingCandidateFile().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ContextRerankingCandidateFile().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ContextRerankingCandidateFile, a, b2);
    }
    static $() {
        return [
            "ContextRerankingCandidateFile|1 file_name 9|2 file_content 9"
        ];
    }
};
ComposerFileDiff = class _ComposerFileDiff extends __protoMessage3112 {
    constructor(data){
        super();
        this.chunks = [];
        this.editor = ComposerFileDiff_Editor.UNSPECIFIED;
        this.hitTimeout = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ComposerFileDiff().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ComposerFileDiff().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ComposerFileDiff().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ComposerFileDiff, a, b2);
    }
    static $() {
        return [
            "ComposerFileDiff|1 chunks #0*|2 editor #1|3 hit_timeout 8",
            ComposerFileDiff_ChunkDiff,
            ComposerFileDiff_Editor
        ];
    }
};
ComposerFileDiff_Editor = enumType2(proto3, __protoPackage115, "ComposerFileDiff.Editor", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "AI"
    ],
    [
        2,
        "HUMAN"
    ]
], 1);
ComposerFileDiff_ChunkDiff = class _ComposerFileDiff_ChunkDiff extends __protoMessage3112 {
    constructor(data){
        super();
        this.diffString = "";
        this.oldStart = 0;
        this.newStart = 0;
        this.oldLines = 0;
        this.newLines = 0;
        this.linesRemoved = 0;
        this.linesAdded = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ComposerFileDiff_ChunkDiff().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ComposerFileDiff_ChunkDiff().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ComposerFileDiff_ChunkDiff().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ComposerFileDiff_ChunkDiff, a, b2);
    }
    static $() {
        return [
            "ComposerFileDiff.ChunkDiff|1 diff_string 9|2 old_start 5|3 new_start 5|4 old_lines 5|5 new_lines 5|6 lines_removed 5|7 lines_added 5"
        ];
    }
};
DiffHistoryData = class _DiffHistoryData extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.diffs = [];
        this.timestamp = 0;
        this.uniqueId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DiffHistoryData().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DiffHistoryData().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DiffHistoryData().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DiffHistoryData, a, b2);
    }
    static $() {
        return [
            "DiffHistoryData|1 relative_workspace_path 9|2 diffs #0*|3 timestamp 1|4 unique_id 9|5 start_to_end_diff #0",
            ComposerFileDiff
        ];
    }
};
WarmStreamUnifiedChatWithToolsResponse = class _WarmStreamUnifiedChatWithToolsResponse extends __protoMessage3112 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WarmStreamUnifiedChatWithToolsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WarmStreamUnifiedChatWithToolsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WarmStreamUnifiedChatWithToolsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WarmStreamUnifiedChatWithToolsResponse, a, b2);
    }
    static $() {
        return [
            "WarmStreamUnifiedChatWithToolsResponse"
        ];
    }
};
CodeChunkContextInclusionInfoV2 = class _CodeChunkContextInclusionInfoV2 extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.startLineNumber = 0;
        this.endLineNumberInclusive = 0;
        this.intent = CodeChunkContextInclusionInfoV2_Intent.UNSPECIFIED;
        this.inclusionType = CodeChunkContextInclusionInfoV2_InclusionType.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CodeChunkContextInclusionInfoV2().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CodeChunkContextInclusionInfoV2().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CodeChunkContextInclusionInfoV2().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CodeChunkContextInclusionInfoV2, a, b2);
    }
    static $() {
        return [
            "CodeChunkContextInclusionInfoV2|1 relative_workspace_path 9|2 start_line_number 5|3 end_line_number_inclusive 5|4 intent #0|10 inclusion_type #1|6 tooltip_text 9?|9 pill_is_dashed 8?|8 pill_sub_codicon_name 9?|5 detail_text 9?|7 codicon_name 9?",
            CodeChunkContextInclusionInfoV2_Intent,
            CodeChunkContextInclusionInfoV2_InclusionType
        ];
    }
};
CodeChunkContextInclusionInfoV2_Intent = enumType2(proto3, __protoPackage115, "CodeChunkContextInclusionInfoV2.Intent", [
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
        "SELECTION"
    ]
], 1);
CodeChunkContextInclusionInfoV2_InclusionType = enumType2(proto3, __protoPackage115, "CodeChunkContextInclusionInfoV2.InclusionType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FULL"
    ],
    [
        2,
        "OUTLINE"
    ],
    [
        3,
        "FILENAME"
    ]
], 1);
GetPromptDryRunResponse = class _GetPromptDryRunResponse extends __protoMessage3112 {
    constructor(data){
        super();
        this.codeChunks = [];
        this.userMessageTokenLimit = 0;
        this.codeChunksV2 = [];
        this.folderExclusionTooltip = "";
        this.barFraction = 0;
        this.didBarOverflow = false;
        this.shouldShowNewChatHint = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetPromptDryRunResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetPromptDryRunResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetPromptDryRunResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetPromptDryRunResponse, a, b2);
    }
    static $() {
        return [
            "GetPromptDryRunResponse|1 code_chunks #0*|3 user_message_token_limit 5|4 user_message_token_count #1|5 full_conversation_token_count #1|6 code_chunks_v2 #2*|2 folder_exclusion_tooltip 9|7 bar_fraction 2|8 did_bar_overflow 8|9 should_show_new_chat_hint 8",
            CodeChunkContextInclusionInfo,
            GetPromptDryRunResponse_TokenCount,
            CodeChunkContextInclusionInfoV2
        ];
    }
};
GetPromptDryRunResponse_TokenCount = class _GetPromptDryRunResponse_TokenCount extends __protoMessage3112 {
    constructor(data){
        super();
        this.isOverTokenLimit = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetPromptDryRunResponse_TokenCount().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetPromptDryRunResponse_TokenCount().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetPromptDryRunResponse_TokenCount().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetPromptDryRunResponse_TokenCount, a, b2);
    }
    static $() {
        return [
            "GetPromptDryRunResponse.TokenCount|1 is_over_token_limit 8|2 num_tokens 5?"
        ];
    }
};
CodeChunkContextInclusionInfo = class _CodeChunkContextInclusionInfo extends __protoMessage3112 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.startLineNumber = 0;
        this.endLineNumberInclusive = 0;
        this.inclusionType = CodeChunkContextInclusionInfo_InclusionType.UNSPECIFIED;
        this.fullFileTokenCount = 0;
        this.promptTokenCount = 0;
        this.intent = CodeChunkContextInclusionInfo_Intent.UNSPECIFIED;
        this.chunkIsFromLastUserMessage = false;
        this.isCompressed = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CodeChunkContextInclusionInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CodeChunkContextInclusionInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CodeChunkContextInclusionInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CodeChunkContextInclusionInfo, a, b2);
    }
    static $() {
        return [
            "CodeChunkContextInclusionInfo|1 relative_workspace_path 9|2 start_line_number 5|3 end_line_number_inclusive 5|4 inclusion_type #0|5 full_file_token_count 5|6 prompt_token_count 5|11 full_file_tokens_count #1|7 exclusion_tooltip 9?|8 intent #2|9 chunk_is_from_last_user_message 8|10 is_compressed 8",
            CodeChunkContextInclusionInfo_InclusionType,
            CodeChunkContextInclusionInfo_TokenCount,
            CodeChunkContextInclusionInfo_Intent
        ];
    }
};
CodeChunkContextInclusionInfo_InclusionType = enumType2(proto3, __protoPackage115, "CodeChunkContextInclusionInfo.InclusionType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FULL"
    ],
    [
        2,
        "OUTLINE"
    ],
    [
        3,
        "FILENAME"
    ]
], 1);
CodeChunkContextInclusionInfo_Intent = enumType2(proto3, __protoPackage115, "CodeChunkContextInclusionInfo.Intent", [
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
        "SELECTION"
    ]
], 1);
CodeChunkContextInclusionInfo_TokenCount = class _CodeChunkContextInclusionInfo_TokenCount extends __protoMessage3112 {
    constructor(data){
        super();
        this.isTooLargeToCount = false;
        this.numTokens = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CodeChunkContextInclusionInfo_TokenCount().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CodeChunkContextInclusionInfo_TokenCount().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CodeChunkContextInclusionInfo_TokenCount().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CodeChunkContextInclusionInfo_TokenCount, a, b2);
    }
    static $() {
        return [
            "CodeChunkContextInclusionInfo.TokenCount|1 is_too_large_to_count 8|2 num_tokens 5"
        ];
    }
};
SubagentReturnCall = class _SubagentReturnCall extends __protoMessage3112 {
    constructor(data){
        super();
        this.subagentType = SubagentType2.UNSPECIFIED;
        this.returnValue = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SubagentReturnCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SubagentReturnCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SubagentReturnCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SubagentReturnCall, a, b2);
    }
    static $() {
        return [
            "SubagentReturnCall|1 subagent_type #0|2 deep_search_return_value #1 return_value|3 fix_lints_return_value #2 return_value|4 task_return_value #3 return_value|5 spec_return_value #4 return_value",
            SubagentType2,
            DeepSearchSubagentReturnValue,
            FixLintsSubagentReturnValue,
            TaskSubagentReturnValue,
            SpecSubagentReturnValue
        ];
    }
};
SubagentInfo = class _SubagentInfo extends __protoMessage3112 {
    constructor(data){
        super();
        this.subagentType = SubagentType2.UNSPECIFIED;
        this.subagentId = "";
        this.params = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SubagentInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SubagentInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SubagentInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SubagentInfo, a, b2);
    }
    static $() {
        return [
            "SubagentInfo|1 subagent_type #0|2 subagent_id 9|3 deep_search_params #1 params|4 fix_lints_params #2 params|6 task_params #3 params|7 spec_params #4 params|5 parent_request_id 9?",
            SubagentType2,
            DeepSearchSubagentParams,
            FixLintsSubagentParams,
            TaskSubagentParams,
            SpecSubagentParams
        ];
    }
};
DeepSearchSubagentParams = class _DeepSearchSubagentParams extends __protoMessage3112 {
    constructor(data){
        super();
        this.query = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DeepSearchSubagentParams().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DeepSearchSubagentParams().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DeepSearchSubagentParams().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DeepSearchSubagentParams, a, b2);
    }
    static $() {
        return [
            "DeepSearchSubagentParams|1 query 9"
        ];
    }
};
DeepSearchSubagentReturnValue = class _DeepSearchSubagentReturnValue extends __protoMessage3112 {
    constructor(data){
        super();
        this.contextItems = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DeepSearchSubagentReturnValue().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DeepSearchSubagentReturnValue().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DeepSearchSubagentReturnValue().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DeepSearchSubagentReturnValue, a, b2);
    }
    static $() {
        return [
            "DeepSearchSubagentReturnValue|1 context_items #0*",
            DeepSearchSubagentReturnValue_ContextItem
        ];
    }
};
DeepSearchSubagentReturnValue_ContextItem = class _DeepSearchSubagentReturnValue_ContextItem extends __protoMessage3112 {
    constructor(data){
        super();
        this.file = "";
        this.explanation = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DeepSearchSubagentReturnValue_ContextItem().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DeepSearchSubagentReturnValue_ContextItem().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DeepSearchSubagentReturnValue_ContextItem().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DeepSearchSubagentReturnValue_ContextItem, a, b2);
    }
    static $() {
        return [
            "DeepSearchSubagentReturnValue.ContextItem|1 file 9|2 line_range #0?|3 explanation 9",
            LineRange
        ];
    }
};
FixLintsSubagentParams = class _FixLintsSubagentParams extends __protoMessage3112 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FixLintsSubagentParams().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FixLintsSubagentParams().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FixLintsSubagentParams().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FixLintsSubagentParams, a, b2);
    }
    static $() {
        return [
            "FixLintsSubagentParams"
        ];
    }
};
FixLintsSubagentReturnValue = class _FixLintsSubagentReturnValue extends __protoMessage3112 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FixLintsSubagentReturnValue().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FixLintsSubagentReturnValue().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FixLintsSubagentReturnValue().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FixLintsSubagentReturnValue, a, b2);
    }
    static $() {
        return [
            "FixLintsSubagentReturnValue"
        ];
    }
};
TaskSubagentParams = class _TaskSubagentParams extends __protoMessage3112 {
    constructor(data){
        super();
        this.taskDescription = "";
        this.allowedWriteDirectories = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _TaskSubagentParams().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _TaskSubagentParams().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _TaskSubagentParams().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_TaskSubagentParams, a, b2);
    }
    static $() {
        return [
            "TaskSubagentParams|1 task_description 9|2 allowed_write_directories 9*"
        ];
    }
};
TaskSubagentReturnValue = class _TaskSubagentReturnValue extends __protoMessage3112 {
    constructor(data){
        super();
        this.summary = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _TaskSubagentReturnValue().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _TaskSubagentReturnValue().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _TaskSubagentReturnValue().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_TaskSubagentReturnValue, a, b2);
    }
    static $() {
        return [
            "TaskSubagentReturnValue|1 summary 9"
        ];
    }
};
SpecSubagentParams = class _SpecSubagentParams extends __protoMessage3112 {
    constructor(data){
        super();
        this.plan = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SpecSubagentParams().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SpecSubagentParams().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SpecSubagentParams().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SpecSubagentParams, a, b2);
    }
    static $() {
        return [
            "SpecSubagentParams|1 plan 9"
        ];
    }
};
SpecSubagentReturnValue = class _SpecSubagentReturnValue extends __protoMessage3112 {
    constructor(data){
        super();
        this.summary = "";
        this.stringReplacements = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SpecSubagentReturnValue().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SpecSubagentReturnValue().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SpecSubagentReturnValue().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SpecSubagentReturnValue, a, b2);
    }
    static $() {
        return [
            "SpecSubagentReturnValue|1 summary 9|2 string_replacements #0*",
            StringReplacement
        ];
    }
};
StringReplacement = class _StringReplacement extends __protoMessage3112 {
    constructor(data){
        super();
        this.oldString = "";
        this.newString = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StringReplacement().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StringReplacement().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StringReplacement().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StringReplacement, a, b2);
    }
    static $() {
        return [
            "StringReplacement|1 old_string 9|2 new_string 9"
        ];
    }
};
ProjectLayout = class _ProjectLayout extends __protoMessage3112 {
    constructor(data){
        super();
        this.rootPath = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ProjectLayout().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ProjectLayout().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ProjectLayout().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ProjectLayout, a, b2);
    }
    static $() {
        return [
            "ProjectLayout|1 root_path 9|2 content #0|3 list_dir_v2_result #1?",
            ProjectLayoutDirectoryContent,
            ListDirV2Result
        ];
    }
};
ProjectLayoutDirectoryContent = class _ProjectLayoutDirectoryContent extends __protoMessage3112 {
    constructor(data){
        super();
        this.directories = [];
        this.files = [];
        this.hiddenFiles = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ProjectLayoutDirectoryContent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ProjectLayoutDirectoryContent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ProjectLayoutDirectoryContent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ProjectLayoutDirectoryContent, a, b2);
    }
    static $() {
        return [
            "ProjectLayoutDirectoryContent|1 directories #0*|2 files #1*|3 total_files 5?|4 total_subfolders 5?|5 hidden_files #1*",
            ProjectLayoutDirectory,
            ProjectLayoutFile
        ];
    }
};
ProjectLayoutDirectory = class _ProjectLayoutDirectory extends __protoMessage3112 {
    constructor(data){
        super();
        this.name = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ProjectLayoutDirectory().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ProjectLayoutDirectory().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ProjectLayoutDirectory().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ProjectLayoutDirectory, a, b2);
    }
    static $() {
        return [
            "ProjectLayoutDirectory|1 name 9|2 content #0",
            ProjectLayoutDirectoryContent
        ];
    }
};
ProjectLayoutFile = class _ProjectLayoutFile extends __protoMessage3112 {
    constructor(data){
        super();
        this.name = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ProjectLayoutFile().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ProjectLayoutFile().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ProjectLayoutFile().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ProjectLayoutFile, a, b2);
    }
    static $() {
        return [
            "ProjectLayoutFile|1 name 9"
        ];
    }
};
ConvertOALToNALRequest = class _ConvertOALToNALRequest extends __protoMessage3112 {
    constructor(data){
        super();
        this.fileStates = {};
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConvertOALToNALRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConvertOALToNALRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConvertOALToNALRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConvertOALToNALRequest, a, b2);
    }
    static $() {
        return [
            "ConvertOALToNALRequest|1 request #0|2 file_states 9,#1",
            StreamUnifiedChatRequest,
            FileState
        ];
    }
};
ConvertOALToNALResponse = class _ConvertOALToNALResponse extends __protoMessage3112 {
    constructor(data){
        super();
        this.blobs = {};
        this.bubbleCheckpoints = {};
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ConvertOALToNALResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ConvertOALToNALResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ConvertOALToNALResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ConvertOALToNALResponse, a, b2);
    }
    static $() {
        return [
            "ConvertOALToNALResponse|1 conversation_state #0|2 blobs 9,12|3 bubble_checkpoints 9,#0",
            ConversationStateStructure
        ];
    }
};

}
