require.r(exports);
require.d(exports, {
    AddTestParams: ()=>AddTestParams,
    AddTestResult: ()=>AddTestResult,
    AddTestResult_Feedback: ()=>AddTestResult_Feedback,
    AddTestResult_RelatedInformation: ()=>AddTestResult_RelatedInformation,
    AddUiStepParams: ()=>AddUiStepParams,
    AddUiStepParams_SearchResult: ()=>AddUiStepParams_SearchResult,
    AddUiStepParams_SearchResults: ()=>AddUiStepParams_SearchResults,
    AddUiStepResult: ()=>AddUiStepResult,
    ApplyAgentDiffParams: ()=>ApplyAgentDiffParams,
    AskQuestionParams: ()=>AskQuestionParams,
    AskQuestionParams_Option: ()=>AskQuestionParams_Option,
    AskQuestionParams_Question: ()=>AskQuestionParams_Question,
    AskQuestionResult: ()=>AskQuestionResult,
    AskQuestionResult_Answer: ()=>AskQuestionResult_Answer,
    AskQuestionStream: ()=>AskQuestionStream,
    AwaitTaskParams: ()=>AwaitTaskParams,
    AwaitTaskResult: ()=>AwaitTaskResult,
    AwaitTaskResult_TaskResultItem: ()=>AwaitTaskResult_TaskResultItem,
    AwaitTaskStream: ()=>AwaitTaskStream,
    BackgroundComposerFollowupParams: ()=>BackgroundComposerFollowupParams,
    BackgroundComposerFollowupResult: ()=>BackgroundComposerFollowupResult,
    BackgroundComposerFollowupStream: ()=>BackgroundComposerFollowupStream,
    BuiltinTool: ()=>BuiltinTool,
    BuiltinToolCall: ()=>BuiltinToolCall,
    BuiltinToolResult: ()=>BuiltinToolResult,
    CallMcpToolParams: ()=>CallMcpToolParams,
    CallMcpToolResult: ()=>CallMcpToolResult,
    CallMcpToolStream: ()=>CallMcpToolStream,
    ClientSideToolV2: ()=>ClientSideToolV2,
    ClientSideToolV2Call: ()=>ClientSideToolV2Call,
    ClientSideToolV2Result: ()=>ClientSideToolV2Result,
    ComputerUseParams: ()=>ComputerUseParams,
    ComputerUseResult: ()=>ComputerUseResult,
    ComputerUseStream: ()=>ComputerUseStream,
    ConnectScmGithub: ()=>ConnectScmGithub,
    ConnectScmGithubRepository: ()=>ConnectScmGithubRepository,
    ConnectScmParams: ()=>ConnectScmParams,
    ConnectScmResult: ()=>ConnectScmResult,
    ConnectScmStream: ()=>ConnectScmStream,
    CreateDiagramParams: ()=>CreateDiagramParams,
    CreateDiagramResult: ()=>CreateDiagramResult,
    CreateDiagramStream: ()=>CreateDiagramStream,
    CreatePlanParams: ()=>CreatePlanParams,
    CreatePlanResult: ()=>CreatePlanResult,
    CreatePlanResult_Accepted: ()=>CreatePlanResult_Accepted,
    CreatePlanResult_Modified: ()=>CreatePlanResult_Modified,
    CreatePlanResult_Rejected: ()=>CreatePlanResult_Rejected,
    CreatePlanStream: ()=>CreatePlanStream,
    CreateRmFilesParams: ()=>CreateRmFilesParams,
    CreateRmFilesResult: ()=>CreateRmFilesResult,
    CustomToolCall: ()=>CustomToolCall,
    CustomToolResult: ()=>CustomToolResult,
    DeepSearchParams: ()=>DeepSearchParams,
    DeepSearchResult: ()=>DeepSearchResult,
    DeepSearchStream: ()=>DeepSearchStream,
    DeleteFileParams: ()=>DeleteFileParams,
    DeleteFileResult: ()=>DeleteFileResult,
    DeleteFileStream: ()=>DeleteFileStream,
    DeleteTestParams: ()=>DeleteTestParams,
    DeleteTestResult: ()=>DeleteTestResult,
    EditFileParams: ()=>EditFileParams,
    EditFileResult: ()=>EditFileResult,
    EditFileResult_EditFileHumanReview: ()=>EditFileResult_EditFileHumanReview,
    EditFileResult_FileDiff: ()=>EditFileResult_FileDiff,
    EditFileResult_FileDiff_ChunkDiff: ()=>EditFileResult_FileDiff_ChunkDiff,
    EditFileResult_FileDiff_Editor: ()=>EditFileResult_FileDiff_Editor,
    EditFileResult_HumanFeedback: ()=>EditFileResult_HumanFeedback,
    EditFileResult_RecoverableError: ()=>EditFileResult_RecoverableError,
    EditFileResult_RecoverableError_RecoverableErrorType: ()=>EditFileResult_RecoverableError_RecoverableErrorType,
    EditFileStream: ()=>EditFileStream,
    EditFileV2Params: ()=>EditFileV2Params,
    EditFileV2Params_StreamingEditCode: ()=>EditFileV2Params_StreamingEditCode,
    EditFileV2Params_StreamingEditText: ()=>EditFileV2Params_StreamingEditText,
    EditFileV2Result: ()=>EditFileV2Result,
    EditFileV2Stream: ()=>EditFileV2Stream,
    EditParams: ()=>EditParams,
    EditParams_FrontendEditType: ()=>EditParams_FrontendEditType,
    EditResult: ()=>EditResult,
    EditResult_Feedback: ()=>EditResult_Feedback,
    EditResult_RelatedInformation: ()=>EditResult_RelatedInformation,
    EndParams: ()=>EndParams,
    EndResult: ()=>EndResult,
    ErrorToolResult: ()=>ErrorToolResult,
    FetchPullRequestParams: ()=>FetchPullRequestParams,
    FetchPullRequestResult: ()=>FetchPullRequestResult,
    FetchPullRequestStream: ()=>FetchPullRequestStream,
    FetchRulesParams: ()=>FetchRulesParams,
    FetchRulesResult: ()=>FetchRulesResult,
    FetchRulesStream: ()=>FetchRulesStream,
    FixLintsParams: ()=>FixLintsParams,
    FixLintsResult: ()=>FixLintsResult,
    FixLintsResult_FileResult: ()=>FixLintsResult_FileResult,
    FixLintsStream: ()=>FixLintsStream,
    GetMcpToolsParams: ()=>GetMcpToolsParams,
    GetMcpToolsResult: ()=>GetMcpToolsResult,
    GetProjectStructureParams: ()=>GetProjectStructureParams,
    GetProjectStructureResult: ()=>GetProjectStructureResult,
    GetProjectStructureResult_File: ()=>GetProjectStructureResult_File,
    GetSymbolsParams: ()=>GetSymbolsParams,
    GetSymbolsParams_LineRange: ()=>GetSymbolsParams_LineRange,
    GetSymbolsResult: ()=>GetSymbolsResult,
    GetTestsParams: ()=>GetTestsParams,
    GetTestsResult: ()=>GetTestsResult,
    GetTestsResult_Test: ()=>GetTestsResult_Test,
    GlobFileSearchParams: ()=>GlobFileSearchParams,
    GlobFileSearchResult: ()=>GlobFileSearchResult,
    GlobFileSearchResult_Directory: ()=>GlobFileSearchResult_Directory,
    GlobFileSearchResult_File: ()=>GlobFileSearchResult_File,
    GlobFileSearchStream: ()=>GlobFileSearchStream,
    GotodefDefinition: ()=>GotodefDefinition,
    GotodefParams: ()=>GotodefParams,
    GotodefResult: ()=>GotodefResult,
    GotodefStream: ()=>GotodefStream,
    HumanReview: ()=>HumanReview,
    IssueComment: ()=>IssueComment,
    Knowledge: ()=>Knowledge,
    KnowledgeBaseParams: ()=>KnowledgeBaseParams,
    KnowledgeBaseResult: ()=>KnowledgeBaseResult,
    KnowledgeBaseStream: ()=>KnowledgeBaseStream,
    ListDirParams: ()=>ListDirParams,
    ListDirResult: ()=>ListDirResult,
    ListDirResult_File: ()=>ListDirResult_File,
    ListDirStream: ()=>ListDirStream,
    ListDirV2Params: ()=>ListDirV2Params,
    ListDirV2Result: ()=>ListDirV2Result,
    ListDirV2Result_DirectoryTreeNode: ()=>ListDirV2Result_DirectoryTreeNode,
    ListDirV2Result_DirectoryTreeNode_File: ()=>ListDirV2Result_DirectoryTreeNode_File,
    ListDirV2Stream: ()=>ListDirV2Stream,
    ListMcpResourcesParams: ()=>ListMcpResourcesParams,
    ListMcpResourcesResult: ()=>ListMcpResourcesResult,
    ListMcpResourcesResult_MCPResource: ()=>ListMcpResourcesResult_MCPResource,
    ListMcpResourcesStream: ()=>ListMcpResourcesStream,
    MCPParams: ()=>MCPParams,
    MCPParams_Tool: ()=>MCPParams_Tool,
    MCPParams_TranscriptDisplay: ()=>MCPParams_TranscriptDisplay,
    MCPResult: ()=>MCPResult,
    MCPStream: ()=>MCPStream,
    MatchRange: ()=>MatchRange,
    McpAuthParams: ()=>McpAuthParams,
    McpAuthResult: ()=>McpAuthResult,
    McpAuthStream: ()=>McpAuthStream,
    MissingFile: ()=>MissingFile,
    MissingFile_MissingReason: ()=>MissingFile_MissingReason,
    NewEditParams: ()=>NewEditParams,
    NewEditResult: ()=>NewEditResult,
    NewFileParams: ()=>NewFileParams,
    NewFileResult: ()=>NewFileResult,
    NudgeMessage: ()=>NudgeMessage,
    OutputLocation: ()=>OutputLocation,
    PlanPhase: ()=>PlanPhase,
    PullRequestReference: ()=>PullRequestReference,
    Range: ()=>Range,
    ReadChunkParams: ()=>ReadChunkParams,
    ReadChunkResult: ()=>ReadChunkResult,
    ReadFileParams: ()=>ReadFileParams,
    ReadFileResult: ()=>ReadFileResult,
    ReadFileStream: ()=>ReadFileStream,
    ReadFileV2Params: ()=>ReadFileV2Params,
    ReadFileV2Result: ()=>ReadFileV2Result,
    ReadFileV2Stream: ()=>ReadFileV2Stream,
    ReadLintsParams: ()=>ReadLintsParams,
    ReadLintsResult: ()=>ReadLintsResult,
    ReadLintsStream: ()=>ReadLintsStream,
    ReadMcpResourceParams: ()=>ReadMcpResourceParams,
    ReadMcpResourceResult: ()=>ReadMcpResourceResult,
    ReadMcpResourceStream: ()=>ReadMcpResourceStream,
    ReadProjectParams: ()=>ReadProjectParams,
    ReadProjectResult: ()=>ReadProjectResult,
    ReadProjectStream: ()=>ReadProjectStream,
    ReadSemsearchFilesParams: ()=>ReadSemsearchFilesParams,
    ReadSemsearchFilesResult: ()=>ReadSemsearchFilesResult,
    ReadSemsearchFilesStream: ()=>ReadSemsearchFilesStream,
    ReadWithLinterParams: ()=>ReadWithLinterParams,
    ReadWithLinterResult: ()=>ReadWithLinterResult,
    ReapplyParams: ()=>ReapplyParams,
    ReapplyResult: ()=>ReapplyResult,
    ReapplyStream: ()=>ReapplyStream,
    ReportBugfixResultsParams: ()=>ReportBugfixResultsParams,
    ReportBugfixResultsResult: ()=>ReportBugfixResultsResult,
    ReportBugfixResultsStream: ()=>ReportBugfixResultsStream,
    RipgrepRawSearchContentMatch: ()=>RipgrepRawSearchContentMatch,
    RipgrepRawSearchContentResult: ()=>RipgrepRawSearchContentResult,
    RipgrepRawSearchCountResult: ()=>RipgrepRawSearchCountResult,
    RipgrepRawSearchError: ()=>RipgrepRawSearchError,
    RipgrepRawSearchFileCount: ()=>RipgrepRawSearchFileCount,
    RipgrepRawSearchFileMatch: ()=>RipgrepRawSearchFileMatch,
    RipgrepRawSearchFilesResult: ()=>RipgrepRawSearchFilesResult,
    RipgrepRawSearchFilesResult_FileEntry: ()=>RipgrepRawSearchFilesResult_FileEntry,
    RipgrepRawSearchParams: ()=>RipgrepRawSearchParams,
    RipgrepRawSearchResult: ()=>RipgrepRawSearchResult,
    RipgrepRawSearchStream: ()=>RipgrepRawSearchStream,
    RipgrepRawSearchSuccess: ()=>RipgrepRawSearchSuccess,
    RipgrepRawSearchUnionResult: ()=>RipgrepRawSearchUnionResult,
    RipgrepSearchParams: ()=>RipgrepSearchParams,
    RipgrepSearchParams_IPatternInfoProto: ()=>RipgrepSearchParams_IPatternInfoProto,
    RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto: ()=>RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto,
    RipgrepSearchParams_ITextQueryBuilderOptionsProto: ()=>RipgrepSearchParams_ITextQueryBuilderOptionsProto,
    RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto: ()=>RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto,
    RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto: ()=>RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto,
    RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto: ()=>RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto,
    RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto: ()=>RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto,
    RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto: ()=>RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto,
    RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto: ()=>RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto,
    RipgrepSearchResult: ()=>RipgrepSearchResult,
    RipgrepSearchResultInternal: ()=>RipgrepSearchResultInternal,
    RipgrepSearchResultInternal_ICachedSearchStats: ()=>RipgrepSearchResultInternal_ICachedSearchStats,
    RipgrepSearchResultInternal_IFileMatch: ()=>RipgrepSearchResultInternal_IFileMatch,
    RipgrepSearchResultInternal_IFileSearchProviderStats: ()=>RipgrepSearchResultInternal_IFileSearchProviderStats,
    RipgrepSearchResultInternal_IFileSearchStats: ()=>RipgrepSearchResultInternal_IFileSearchStats,
    RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType: ()=>RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType,
    RipgrepSearchResultInternal_ISearchEngineStats: ()=>RipgrepSearchResultInternal_ISearchEngineStats,
    RipgrepSearchResultInternal_ISearchRange: ()=>RipgrepSearchResultInternal_ISearchRange,
    RipgrepSearchResultInternal_ISearchRangeSetPairing: ()=>RipgrepSearchResultInternal_ISearchRangeSetPairing,
    RipgrepSearchResultInternal_ITextSearchCompleteMessage: ()=>RipgrepSearchResultInternal_ITextSearchCompleteMessage,
    RipgrepSearchResultInternal_ITextSearchContext: ()=>RipgrepSearchResultInternal_ITextSearchContext,
    RipgrepSearchResultInternal_ITextSearchMatch: ()=>RipgrepSearchResultInternal_ITextSearchMatch,
    RipgrepSearchResultInternal_ITextSearchResult: ()=>RipgrepSearchResultInternal_ITextSearchResult,
    RipgrepSearchResultInternal_ITextSearchStats: ()=>RipgrepSearchResultInternal_ITextSearchStats,
    RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType: ()=>RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType,
    RipgrepSearchResultInternal_SearchCompletionExitCode: ()=>RipgrepSearchResultInternal_SearchCompletionExitCode,
    RipgrepSearchResultInternal_TextSearchCompleteMessageType: ()=>RipgrepSearchResultInternal_TextSearchCompleteMessageType,
    RipgrepSearchStream: ()=>RipgrepSearchStream,
    RunTerminalCommandEndedReason: ()=>RunTerminalCommandEndedReason,
    RunTerminalCommandV2Params: ()=>RunTerminalCommandV2Params,
    RunTerminalCommandV2Params_ExecutionOptions: ()=>RunTerminalCommandV2Params_ExecutionOptions,
    RunTerminalCommandV2Result: ()=>RunTerminalCommandV2Result,
    RunTerminalCommandV2Stream: ()=>RunTerminalCommandV2Stream,
    RunTerminalCommandsParams: ()=>RunTerminalCommandsParams,
    RunTerminalCommandsResult: ()=>RunTerminalCommandsResult,
    RunTestParams: ()=>RunTestParams,
    RunTestResult: ()=>RunTestResult,
    SaveFileParams: ()=>SaveFileParams,
    SaveFileResult: ()=>SaveFileResult,
    ScratchpadResult: ()=>ScratchpadResult,
    SearchParams: ()=>SearchParams,
    SearchResult: ()=>SearchResult,
    SearchSymbolsParams: ()=>SearchSymbolsParams,
    SearchSymbolsResult: ()=>SearchSymbolsResult,
    SearchSymbolsResult_SymbolMatch: ()=>SearchSymbolsResult_SymbolMatch,
    SearchSymbolsStream: ()=>SearchSymbolsStream,
    SearchToolFileSearchResult: ()=>SearchToolFileSearchResult,
    SearchToolFileSearchResult_Line: ()=>SearchToolFileSearchResult_Line,
    SemanticSearchArguments: ()=>SemanticSearchArguments,
    SemanticSearchFullParams: ()=>SemanticSearchFullParams,
    SemanticSearchFullResult: ()=>SemanticSearchFullResult,
    SemanticSearchFullStream: ()=>SemanticSearchFullStream,
    SemanticSearchParams: ()=>SemanticSearchParams,
    SemanticSearchResult: ()=>SemanticSearchResult,
    SemanticSearchResult_Item: ()=>SemanticSearchResult_Item,
    ServerSideToolResult: ()=>ServerSideToolResult,
    ShellCommandParsingResult: ()=>ShellCommandParsingResult,
    ShellCommandParsingResult_ExecutableCommand: ()=>ShellCommandParsingResult_ExecutableCommand,
    ShellCommandParsingResult_ExecutableCommandArg: ()=>ShellCommandParsingResult_ExecutableCommandArg,
    ShellCommandParsingResult_Redirect: ()=>ShellCommandParsingResult_Redirect,
    ShellType: ()=>ShellType,
    Step: ()=>Step,
    StreamedBackPartialToolCall: ()=>StreamedBackPartialToolCall,
    StreamedBackToolCall: ()=>StreamedBackToolCall,
    StreamedBackToolCallV2: ()=>StreamedBackToolCallV2,
    SummarizeCodeParams: ()=>SummarizeCodeParams,
    SummarizeCodeResult: ()=>SummarizeCodeResult,
    SummarizeCodeStream: ()=>SummarizeCodeStream,
    SwitchModeParams: ()=>SwitchModeParams,
    SwitchModeResult: ()=>SwitchModeResult,
    SwitchModeStream: ()=>SwitchModeStream,
    TaskParams: ()=>TaskParams,
    TaskResult: ()=>TaskResult,
    TaskResult_AsyncTaskResult: ()=>TaskResult_AsyncTaskResult,
    TaskResult_CompletedTaskResult: ()=>TaskResult_CompletedTaskResult,
    TaskStream: ()=>TaskStream,
    TaskV2Params: ()=>TaskV2Params,
    TaskV2Result: ()=>TaskV2Result,
    TaskV2Stream: ()=>TaskV2Stream,
    TodoItem: ()=>TodoItem,
    TodoReadParams: ()=>TodoReadParams,
    TodoReadResult: ()=>TodoReadResult,
    TodoReadStream: ()=>TodoReadStream,
    TodoWriteParams: ()=>TodoWriteParams,
    TodoWriteResult: ()=>TodoWriteResult,
    TodoWriteStream: ()=>TodoWriteStream,
    ToolCall: ()=>ToolCall,
    ToolCallFileSearchParams: ()=>ToolCallFileSearchParams,
    ToolCallFileSearchResult: ()=>ToolCallFileSearchResult,
    ToolCallFileSearchResult_File: ()=>ToolCallFileSearchResult_File,
    ToolCallFileSearchStream: ()=>ToolCallFileSearchStream,
    ToolPullRequestResult: ()=>ToolPullRequestResult,
    ToolResult: ()=>ToolResult,
    ToolResultAttachments: ()=>ToolResultAttachments,
    ToolResultAttachments_DiscoveryBudgetReminder: ()=>ToolResultAttachments_DiscoveryBudgetReminder,
    ToolResultAttachments_TodoReminderType: ()=>ToolResultAttachments_TodoReminderType,
    ToolResultError: ()=>ToolResultError,
    ToolResultError_EditFileError: ()=>ToolResultError_EditFileError,
    ToolResultError_SearchReplaceError: ()=>ToolResultError_SearchReplaceError,
    UndoEditParams: ()=>UndoEditParams,
    UndoEditResult: ()=>UndoEditResult,
    UpdateProjectParams: ()=>UpdateProjectParams,
    UpdateProjectResult: ()=>UpdateProjectResult,
    UpdateProjectStream: ()=>UpdateProjectStream,
    UpdateProjectStringReplacement: ()=>UpdateProjectStringReplacement,
    WebFetchParams: ()=>WebFetchParams,
    WebFetchResult: ()=>WebFetchResult,
    WebFetchStream: ()=>WebFetchStream,
    WebSearchParams: ()=>WebSearchParams,
    WebSearchResult: ()=>WebSearchResult,
    WebSearchResult_WebReference: ()=>WebSearchResult_WebReference,
    WebSearchStream: ()=>WebSearchStream,
    WriteShellStdinStream: ()=>WriteShellStdinStream
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-55.js");
var _agent_v1_background_shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-106.js");
var _agent_v1_record_screen_exec_pb_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-103.js");
var _agent_v1_apply_agent_diff_tool_pb_js__WEBPACK_IMPORTED_MODULE_4__ = require("./module-96.js");
var _agent_v1_generate_image_tool_pb_js__WEBPACK_IMPORTED_MODULE_5__ = require("./module-101.js");
var _agent_v1_ai_attribution_tool_pb_js__WEBPACK_IMPORTED_MODULE_6__ = require("./module-113.js");
var _repository_pb_js__WEBPACK_IMPORTED_MODULE_7__ = require("./module-91.js");
var _agent_v1_sandbox_pb_js__WEBPACK_IMPORTED_MODULE_8__ = require("./module-71.js");
var _agent_v1_shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_9__ = require("./module-70.js");
var _agent_v1_subagents_pb_js__WEBPACK_IMPORTED_MODULE_10__ = require("./module-68.js");
var _agent_v1_ls_exec_pb_js__WEBPACK_IMPORTED_MODULE_11__ = require("./module-84.js");
var _agent_v1_computer_use_tool_pb_js__WEBPACK_IMPORTED_MODULE_12__ = require("./module-104.js");
var _agent_v1_report_bugfix_results_tool_pb_js__WEBPACK_IMPORTED_MODULE_13__ = require("./module-112.js");
const ClientSideToolV2 = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.ClientSideToolV2", [
    {
        no: 0,
        name: "CLIENT_SIDE_TOOL_V2_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLIENT_SIDE_TOOL_V2_READ_SEMSEARCH_FILES",
        localName: "READ_SEMSEARCH_FILES"
    },
    {
        no: 3,
        name: "CLIENT_SIDE_TOOL_V2_RIPGREP_SEARCH",
        localName: "RIPGREP_SEARCH"
    },
    {
        no: 5,
        name: "CLIENT_SIDE_TOOL_V2_READ_FILE",
        localName: "READ_FILE"
    },
    {
        no: 6,
        name: "CLIENT_SIDE_TOOL_V2_LIST_DIR",
        localName: "LIST_DIR"
    },
    {
        no: 7,
        name: "CLIENT_SIDE_TOOL_V2_EDIT_FILE",
        localName: "EDIT_FILE"
    },
    {
        no: 8,
        name: "CLIENT_SIDE_TOOL_V2_FILE_SEARCH",
        localName: "FILE_SEARCH"
    },
    {
        no: 9,
        name: "CLIENT_SIDE_TOOL_V2_SEMANTIC_SEARCH_FULL",
        localName: "SEMANTIC_SEARCH_FULL"
    },
    {
        no: 11,
        name: "CLIENT_SIDE_TOOL_V2_DELETE_FILE",
        localName: "DELETE_FILE"
    },
    {
        no: 12,
        name: "CLIENT_SIDE_TOOL_V2_REAPPLY",
        localName: "REAPPLY"
    },
    {
        no: 15,
        name: "CLIENT_SIDE_TOOL_V2_RUN_TERMINAL_COMMAND_V2",
        localName: "RUN_TERMINAL_COMMAND_V2"
    },
    {
        no: 16,
        name: "CLIENT_SIDE_TOOL_V2_FETCH_RULES",
        localName: "FETCH_RULES"
    },
    {
        no: 18,
        name: "CLIENT_SIDE_TOOL_V2_WEB_SEARCH",
        localName: "WEB_SEARCH"
    },
    {
        no: 19,
        name: "CLIENT_SIDE_TOOL_V2_MCP",
        localName: "MCP"
    },
    {
        no: 23,
        name: "CLIENT_SIDE_TOOL_V2_SEARCH_SYMBOLS",
        localName: "SEARCH_SYMBOLS"
    },
    {
        no: 24,
        name: "CLIENT_SIDE_TOOL_V2_BACKGROUND_COMPOSER_FOLLOWUP",
        localName: "BACKGROUND_COMPOSER_FOLLOWUP"
    },
    {
        no: 25,
        name: "CLIENT_SIDE_TOOL_V2_KNOWLEDGE_BASE",
        localName: "KNOWLEDGE_BASE"
    },
    {
        no: 26,
        name: "CLIENT_SIDE_TOOL_V2_FETCH_PULL_REQUEST",
        localName: "FETCH_PULL_REQUEST"
    },
    {
        no: 27,
        name: "CLIENT_SIDE_TOOL_V2_DEEP_SEARCH",
        localName: "DEEP_SEARCH"
    },
    {
        no: 28,
        name: "CLIENT_SIDE_TOOL_V2_CREATE_DIAGRAM",
        localName: "CREATE_DIAGRAM"
    },
    {
        no: 29,
        name: "CLIENT_SIDE_TOOL_V2_FIX_LINTS",
        localName: "FIX_LINTS"
    },
    {
        no: 30,
        name: "CLIENT_SIDE_TOOL_V2_READ_LINTS",
        localName: "READ_LINTS"
    },
    {
        no: 31,
        name: "CLIENT_SIDE_TOOL_V2_GO_TO_DEFINITION",
        localName: "GO_TO_DEFINITION"
    },
    {
        no: 32,
        name: "CLIENT_SIDE_TOOL_V2_TASK",
        localName: "TASK"
    },
    {
        no: 33,
        name: "CLIENT_SIDE_TOOL_V2_AWAIT_TASK",
        localName: "AWAIT_TASK"
    },
    {
        no: 34,
        name: "CLIENT_SIDE_TOOL_V2_TODO_READ",
        localName: "TODO_READ"
    },
    {
        no: 35,
        name: "CLIENT_SIDE_TOOL_V2_TODO_WRITE",
        localName: "TODO_WRITE"
    },
    {
        no: 38,
        name: "CLIENT_SIDE_TOOL_V2_EDIT_FILE_V2",
        localName: "EDIT_FILE_V2"
    },
    {
        no: 39,
        name: "CLIENT_SIDE_TOOL_V2_LIST_DIR_V2",
        localName: "LIST_DIR_V2"
    },
    {
        no: 40,
        name: "CLIENT_SIDE_TOOL_V2_READ_FILE_V2",
        localName: "READ_FILE_V2"
    },
    {
        no: 41,
        name: "CLIENT_SIDE_TOOL_V2_RIPGREP_RAW_SEARCH",
        localName: "RIPGREP_RAW_SEARCH"
    },
    {
        no: 42,
        name: "CLIENT_SIDE_TOOL_V2_GLOB_FILE_SEARCH",
        localName: "GLOB_FILE_SEARCH"
    },
    {
        no: 43,
        name: "CLIENT_SIDE_TOOL_V2_CREATE_PLAN",
        localName: "CREATE_PLAN"
    },
    {
        no: 44,
        name: "CLIENT_SIDE_TOOL_V2_LIST_MCP_RESOURCES",
        localName: "LIST_MCP_RESOURCES"
    },
    {
        no: 45,
        name: "CLIENT_SIDE_TOOL_V2_READ_MCP_RESOURCE",
        localName: "READ_MCP_RESOURCE"
    },
    {
        no: 46,
        name: "CLIENT_SIDE_TOOL_V2_READ_PROJECT",
        localName: "READ_PROJECT"
    },
    {
        no: 47,
        name: "CLIENT_SIDE_TOOL_V2_UPDATE_PROJECT",
        localName: "UPDATE_PROJECT"
    },
    {
        no: 48,
        name: "CLIENT_SIDE_TOOL_V2_TASK_V2",
        localName: "TASK_V2"
    },
    {
        no: 49,
        name: "CLIENT_SIDE_TOOL_V2_CALL_MCP_TOOL",
        localName: "CALL_MCP_TOOL"
    },
    {
        no: 50,
        name: "CLIENT_SIDE_TOOL_V2_APPLY_AGENT_DIFF",
        localName: "APPLY_AGENT_DIFF"
    },
    {
        no: 51,
        name: "CLIENT_SIDE_TOOL_V2_ASK_QUESTION",
        localName: "ASK_QUESTION"
    },
    {
        no: 52,
        name: "CLIENT_SIDE_TOOL_V2_SWITCH_MODE",
        localName: "SWITCH_MODE"
    },
    {
        no: 53,
        name: "CLIENT_SIDE_TOOL_V2_GENERATE_IMAGE",
        localName: "GENERATE_IMAGE"
    },
    {
        no: 54,
        name: "CLIENT_SIDE_TOOL_V2_COMPUTER_USE",
        localName: "COMPUTER_USE"
    },
    {
        no: 55,
        name: "CLIENT_SIDE_TOOL_V2_WRITE_SHELL_STDIN",
        localName: "WRITE_SHELL_STDIN"
    },
    {
        no: 56,
        name: "CLIENT_SIDE_TOOL_V2_RECORD_SCREEN",
        localName: "RECORD_SCREEN"
    },
    {
        no: 57,
        name: "CLIENT_SIDE_TOOL_V2_WEB_FETCH",
        localName: "WEB_FETCH"
    },
    {
        no: 58,
        name: "CLIENT_SIDE_TOOL_V2_REPORT_BUGFIX_RESULTS",
        localName: "REPORT_BUGFIX_RESULTS"
    },
    {
        no: 59,
        name: "CLIENT_SIDE_TOOL_V2_AI_ATTRIBUTION",
        localName: "AI_ATTRIBUTION"
    },
    {
        no: 60,
        name: "CLIENT_SIDE_TOOL_V2_MCP_AUTH",
        localName: "MCP_AUTH"
    },
    {
        no: 61,
        name: "CLIENT_SIDE_TOOL_V2_REFLECT",
        localName: "REFLECT"
    },
    {
        no: 62,
        name: "CLIENT_SIDE_TOOL_V2_AWAIT",
        localName: "AWAIT"
    },
    {
        no: 63,
        name: "CLIENT_SIDE_TOOL_V2_GET_MCP_TOOLS",
        localName: "GET_MCP_TOOLS"
    },
    {
        no: 65,
        name: "CLIENT_SIDE_TOOL_V2_SEND_TO_USER",
        localName: "SEND_TO_USER"
    },
    {
        no: 66,
        name: "CLIENT_SIDE_TOOL_V2_CONNECT_SCM",
        localName: "CONNECT_SCM"
    }
]);
const ShellType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.ShellType", [
    {
        no: 0,
        name: "SHELL_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SHELL_TYPE_BASH",
        localName: "BASH"
    },
    {
        no: 2,
        name: "SHELL_TYPE_POWERSHELL",
        localName: "POWERSHELL"
    }
]);
const BuiltinTool = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.BuiltinTool", [
    {
        no: 0,
        name: "BUILTIN_TOOL_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BUILTIN_TOOL_SEARCH",
        localName: "SEARCH"
    },
    {
        no: 2,
        name: "BUILTIN_TOOL_READ_CHUNK",
        localName: "READ_CHUNK"
    },
    {
        no: 3,
        name: "BUILTIN_TOOL_GOTODEF",
        localName: "GOTODEF"
    },
    {
        no: 4,
        name: "BUILTIN_TOOL_EDIT",
        localName: "EDIT"
    },
    {
        no: 5,
        name: "BUILTIN_TOOL_UNDO_EDIT",
        localName: "UNDO_EDIT"
    },
    {
        no: 6,
        name: "BUILTIN_TOOL_END",
        localName: "END"
    },
    {
        no: 7,
        name: "BUILTIN_TOOL_NEW_FILE",
        localName: "NEW_FILE"
    },
    {
        no: 8,
        name: "BUILTIN_TOOL_ADD_TEST",
        localName: "ADD_TEST"
    },
    {
        no: 9,
        name: "BUILTIN_TOOL_RUN_TEST",
        localName: "RUN_TEST"
    },
    {
        no: 10,
        name: "BUILTIN_TOOL_DELETE_TEST",
        localName: "DELETE_TEST"
    },
    {
        no: 11,
        name: "BUILTIN_TOOL_SAVE_FILE",
        localName: "SAVE_FILE"
    },
    {
        no: 12,
        name: "BUILTIN_TOOL_GET_TESTS",
        localName: "GET_TESTS"
    },
    {
        no: 13,
        name: "BUILTIN_TOOL_GET_SYMBOLS",
        localName: "GET_SYMBOLS"
    },
    {
        no: 14,
        name: "BUILTIN_TOOL_SEMANTIC_SEARCH",
        localName: "SEMANTIC_SEARCH"
    },
    {
        no: 15,
        name: "BUILTIN_TOOL_GET_PROJECT_STRUCTURE",
        localName: "GET_PROJECT_STRUCTURE"
    },
    {
        no: 16,
        name: "BUILTIN_TOOL_CREATE_RM_FILES",
        localName: "CREATE_RM_FILES"
    },
    {
        no: 17,
        name: "BUILTIN_TOOL_RUN_TERMINAL_COMMANDS",
        localName: "RUN_TERMINAL_COMMANDS"
    },
    {
        no: 18,
        name: "BUILTIN_TOOL_NEW_EDIT",
        localName: "NEW_EDIT"
    },
    {
        no: 19,
        name: "BUILTIN_TOOL_READ_WITH_LINTER",
        localName: "READ_WITH_LINTER"
    }
]);
const RunTerminalCommandEndedReason = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.RunTerminalCommandEndedReason", [
    {
        no: 0,
        name: "RUN_TERMINAL_COMMAND_ENDED_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_COMPLETED",
        localName: "EXECUTION_COMPLETED"
    },
    {
        no: 2,
        name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_ABORTED",
        localName: "EXECUTION_ABORTED"
    },
    {
        no: 3,
        name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_FAILED",
        localName: "EXECUTION_FAILED"
    },
    {
        no: 4,
        name: "RUN_TERMINAL_COMMAND_ENDED_REASON_ERROR_OCCURRED_CHECKING_REASON",
        localName: "ERROR_OCCURRED_CHECKING_REASON"
    },
    {
        no: 5,
        name: "RUN_TERMINAL_COMMAND_ENDED_REASON_IDLE_TIMEOUT",
        localName: "IDLE_TIMEOUT"
    }
]);
const ReapplyParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReapplyParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]);
const ApplyAgentDiffParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ApplyAgentDiffParams", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        }
    ]);
const ReapplyResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReapplyResult", ()=>[
        {
            no: 1,
            name: "diff",
            kind: "message",
            T: EditFileResult_FileDiff
        },
        {
            no: 2,
            name: "is_applied",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "apply_failed",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "linter_errors",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LinterError,
            repeated: true
        },
        {
            no: 5,
            name: "rejected",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const FetchRulesParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FetchRulesParams", ()=>[
        {
            no: 1,
            name: "rule_names",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const FetchRulesResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FetchRulesResult", ()=>[
        {
            no: 1,
            name: "rules",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.CursorRule,
            repeated: true
        }
    ]);
const ReapplyStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReapplyStream", []);
const SemanticSearchArguments = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SemanticSearchArguments", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "target_directories",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "explanation",
            kind: "scalar",
            T: 9
        }
    ]);
const ToolResultError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ToolResultError", ()=>[
        {
            no: 1,
            name: "client_visible_error_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "model_visible_error_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "actual_error_message_only_send_from_client_to_server_never_the_other_way_around_because_that_may_be_a_security_risk",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "edit_file_error_details",
            kind: "message",
            T: ToolResultError_EditFileError,
            oneof: "error_details"
        },
        {
            no: 6,
            name: "search_replace_error_details",
            kind: "message",
            T: ToolResultError_SearchReplaceError,
            oneof: "error_details"
        }
    ]);
const ToolResultError_EditFileError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ToolResultError.EditFileError", ()=>[
        {
            no: 1,
            name: "num_lines_in_file_before_edit",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ToolResultError_EditFileError"
});
const ToolResultError_SearchReplaceError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ToolResultError.SearchReplaceError", ()=>[
        {
            no: 1,
            name: "num_lines_in_file_before_edit",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ToolResultError_SearchReplaceError"
});
const ClientSideToolV2Call = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ClientSideToolV2Call", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ClientSideToolV2)
        },
        {
            no: 2,
            name: "read_semsearch_files_params",
            kind: "message",
            T: ReadSemsearchFilesParams,
            oneof: "params"
        },
        {
            no: 5,
            name: "ripgrep_search_params",
            kind: "message",
            T: RipgrepSearchParams,
            oneof: "params"
        },
        {
            no: 8,
            name: "read_file_params",
            kind: "message",
            T: ReadFileParams,
            oneof: "params"
        },
        {
            no: 12,
            name: "list_dir_params",
            kind: "message",
            T: ListDirParams,
            oneof: "params"
        },
        {
            no: 13,
            name: "edit_file_params",
            kind: "message",
            T: EditFileParams,
            oneof: "params"
        },
        {
            no: 16,
            name: "file_search_params",
            kind: "message",
            T: ToolCallFileSearchParams,
            oneof: "params"
        },
        {
            no: 17,
            name: "semantic_search_full_params",
            kind: "message",
            T: SemanticSearchFullParams,
            oneof: "params"
        },
        {
            no: 19,
            name: "delete_file_params",
            kind: "message",
            T: DeleteFileParams,
            oneof: "params"
        },
        {
            no: 20,
            name: "reapply_params",
            kind: "message",
            T: ReapplyParams,
            oneof: "params"
        },
        {
            no: 23,
            name: "run_terminal_command_v2_params",
            kind: "message",
            T: RunTerminalCommandV2Params,
            oneof: "params"
        },
        {
            no: 24,
            name: "fetch_rules_params",
            kind: "message",
            T: FetchRulesParams,
            oneof: "params"
        },
        {
            no: 26,
            name: "web_search_params",
            kind: "message",
            T: WebSearchParams,
            oneof: "params"
        },
        {
            no: 27,
            name: "mcp_params",
            kind: "message",
            T: MCPParams,
            oneof: "params"
        },
        {
            no: 31,
            name: "search_symbols_params",
            kind: "message",
            T: SearchSymbolsParams,
            oneof: "params"
        },
        {
            no: 41,
            name: "gotodef_params",
            kind: "message",
            T: GotodefParams,
            oneof: "params"
        },
        {
            no: 32,
            name: "background_composer_followup_params",
            kind: "message",
            T: BackgroundComposerFollowupParams,
            oneof: "params"
        },
        {
            no: 33,
            name: "knowledge_base_params",
            kind: "message",
            T: KnowledgeBaseParams,
            oneof: "params"
        },
        {
            no: 34,
            name: "fetch_pull_request_params",
            kind: "message",
            T: FetchPullRequestParams,
            oneof: "params"
        },
        {
            no: 35,
            name: "deep_search_params",
            kind: "message",
            T: DeepSearchParams,
            oneof: "params"
        },
        {
            no: 36,
            name: "create_diagram_params",
            kind: "message",
            T: CreateDiagramParams,
            oneof: "params"
        },
        {
            no: 37,
            name: "fix_lints_params",
            kind: "message",
            T: FixLintsParams,
            oneof: "params"
        },
        {
            no: 38,
            name: "read_lints_params",
            kind: "message",
            T: ReadLintsParams,
            oneof: "params"
        },
        {
            no: 42,
            name: "task_params",
            kind: "message",
            T: TaskParams,
            oneof: "params"
        },
        {
            no: 43,
            name: "await_task_params",
            kind: "message",
            T: AwaitTaskParams,
            oneof: "params"
        },
        {
            no: 44,
            name: "todo_read_params",
            kind: "message",
            T: TodoReadParams,
            oneof: "params"
        },
        {
            no: 45,
            name: "todo_write_params",
            kind: "message",
            T: TodoWriteParams,
            oneof: "params"
        },
        {
            no: 50,
            name: "edit_file_v2_params",
            kind: "message",
            T: EditFileV2Params,
            oneof: "params"
        },
        {
            no: 52,
            name: "list_dir_v2_params",
            kind: "message",
            T: ListDirV2Params,
            oneof: "params"
        },
        {
            no: 53,
            name: "read_file_v2_params",
            kind: "message",
            T: ReadFileV2Params,
            oneof: "params"
        },
        {
            no: 54,
            name: "ripgrep_raw_search_params",
            kind: "message",
            T: RipgrepRawSearchParams,
            oneof: "params"
        },
        {
            no: 55,
            name: "glob_file_search_params",
            kind: "message",
            T: GlobFileSearchParams,
            oneof: "params"
        },
        {
            no: 56,
            name: "create_plan_params",
            kind: "message",
            T: CreatePlanParams,
            oneof: "params"
        },
        {
            no: 57,
            name: "list_mcp_resources_params",
            kind: "message",
            T: ListMcpResourcesParams,
            oneof: "params"
        },
        {
            no: 58,
            name: "read_mcp_resource_params",
            kind: "message",
            T: ReadMcpResourceParams,
            oneof: "params"
        },
        {
            no: 59,
            name: "read_project_params",
            kind: "message",
            T: ReadProjectParams,
            oneof: "params"
        },
        {
            no: 60,
            name: "update_project_params",
            kind: "message",
            T: UpdateProjectParams,
            oneof: "params"
        },
        {
            no: 61,
            name: "task_v2_params",
            kind: "message",
            T: TaskV2Params,
            oneof: "params"
        },
        {
            no: 62,
            name: "call_mcp_tool_params",
            kind: "message",
            T: CallMcpToolParams,
            oneof: "params"
        },
        {
            no: 63,
            name: "apply_agent_diff_params",
            kind: "message",
            T: ApplyAgentDiffParams,
            oneof: "params"
        },
        {
            no: 64,
            name: "ask_question_params",
            kind: "message",
            T: AskQuestionParams,
            oneof: "params"
        },
        {
            no: 65,
            name: "switch_mode_params",
            kind: "message",
            T: SwitchModeParams,
            oneof: "params"
        },
        {
            no: 66,
            name: "computer_use_params",
            kind: "message",
            T: ComputerUseParams,
            oneof: "params"
        },
        {
            no: 67,
            name: "write_shell_stdin_params",
            kind: "message",
            T: _agent_v1_background_shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_2__.WriteShellStdinArgs,
            oneof: "params"
        },
        {
            no: 68,
            name: "record_screen_params",
            kind: "message",
            T: _agent_v1_record_screen_exec_pb_js__WEBPACK_IMPORTED_MODULE_3__.RecordScreenArgs,
            oneof: "params"
        },
        {
            no: 69,
            name: "web_fetch_params",
            kind: "message",
            T: WebFetchParams,
            oneof: "params"
        },
        {
            no: 70,
            name: "report_bugfix_results_params",
            kind: "message",
            T: ReportBugfixResultsParams,
            oneof: "params"
        },
        {
            no: 71,
            name: "mcp_auth_params",
            kind: "message",
            T: McpAuthParams,
            oneof: "params"
        },
        {
            no: 72,
            name: "get_mcp_tools_params",
            kind: "message",
            T: GetMcpToolsParams,
            oneof: "params"
        },
        {
            no: 73,
            name: "connect_scm_params",
            kind: "message",
            T: ConnectScmParams,
            oneof: "params"
        },
        {
            no: 3,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "timeout_ms",
            kind: "scalar",
            T: 1,
            opt: true
        },
        {
            no: 9,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 14,
            name: "is_streaming",
            kind: "scalar",
            T: 8
        },
        {
            no: 15,
            name: "is_last_message",
            kind: "scalar",
            T: 8
        },
        {
            no: 51,
            name: "internal",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "raw_args",
            kind: "scalar",
            T: 9
        },
        {
            no: 48,
            name: "tool_index",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 49,
            name: "model_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ClientSideToolV2Result = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ClientSideToolV2Result", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ClientSideToolV2)
        },
        {
            no: 2,
            name: "read_semsearch_files_result",
            kind: "message",
            T: ReadSemsearchFilesResult,
            oneof: "result"
        },
        {
            no: 4,
            name: "ripgrep_search_result",
            kind: "message",
            T: RipgrepSearchResult,
            oneof: "result"
        },
        {
            no: 6,
            name: "read_file_result",
            kind: "message",
            T: ReadFileResult,
            oneof: "result"
        },
        {
            no: 9,
            name: "list_dir_result",
            kind: "message",
            T: ListDirResult,
            oneof: "result"
        },
        {
            no: 10,
            name: "edit_file_result",
            kind: "message",
            T: EditFileResult,
            oneof: "result"
        },
        {
            no: 11,
            name: "file_search_result",
            kind: "message",
            T: ToolCallFileSearchResult,
            oneof: "result"
        },
        {
            no: 18,
            name: "semantic_search_full_result",
            kind: "message",
            T: SemanticSearchFullResult,
            oneof: "result"
        },
        {
            no: 20,
            name: "delete_file_result",
            kind: "message",
            T: DeleteFileResult,
            oneof: "result"
        },
        {
            no: 21,
            name: "reapply_result",
            kind: "message",
            T: ReapplyResult,
            oneof: "result"
        },
        {
            no: 24,
            name: "run_terminal_command_v2_result",
            kind: "message",
            T: RunTerminalCommandV2Result,
            oneof: "result"
        },
        {
            no: 25,
            name: "fetch_rules_result",
            kind: "message",
            T: FetchRulesResult,
            oneof: "result"
        },
        {
            no: 27,
            name: "web_search_result",
            kind: "message",
            T: WebSearchResult,
            oneof: "result"
        },
        {
            no: 28,
            name: "mcp_result",
            kind: "message",
            T: MCPResult,
            oneof: "result"
        },
        {
            no: 32,
            name: "search_symbols_result",
            kind: "message",
            T: SearchSymbolsResult,
            oneof: "result"
        },
        {
            no: 33,
            name: "background_composer_followup_result",
            kind: "message",
            T: BackgroundComposerFollowupResult,
            oneof: "result"
        },
        {
            no: 34,
            name: "knowledge_base_result",
            kind: "message",
            T: KnowledgeBaseResult,
            oneof: "result"
        },
        {
            no: 36,
            name: "fetch_pull_request_result",
            kind: "message",
            T: FetchPullRequestResult,
            oneof: "result"
        },
        {
            no: 37,
            name: "deep_search_result",
            kind: "message",
            T: DeepSearchResult,
            oneof: "result"
        },
        {
            no: 38,
            name: "create_diagram_result",
            kind: "message",
            T: CreateDiagramResult,
            oneof: "result"
        },
        {
            no: 39,
            name: "fix_lints_result",
            kind: "message",
            T: FixLintsResult,
            oneof: "result"
        },
        {
            no: 40,
            name: "read_lints_result",
            kind: "message",
            T: ReadLintsResult,
            oneof: "result"
        },
        {
            no: 41,
            name: "gotodef_result",
            kind: "message",
            T: GotodefResult,
            oneof: "result"
        },
        {
            no: 42,
            name: "task_result",
            kind: "message",
            T: TaskResult,
            oneof: "result"
        },
        {
            no: 43,
            name: "await_task_result",
            kind: "message",
            T: AwaitTaskResult,
            oneof: "result"
        },
        {
            no: 44,
            name: "todo_read_result",
            kind: "message",
            T: TodoReadResult,
            oneof: "result"
        },
        {
            no: 45,
            name: "todo_write_result",
            kind: "message",
            T: TodoWriteResult,
            oneof: "result"
        },
        {
            no: 51,
            name: "edit_file_v2_result",
            kind: "message",
            T: EditFileV2Result,
            oneof: "result"
        },
        {
            no: 52,
            name: "list_dir_v2_result",
            kind: "message",
            T: ListDirV2Result,
            oneof: "result"
        },
        {
            no: 53,
            name: "read_file_v2_result",
            kind: "message",
            T: ReadFileV2Result,
            oneof: "result"
        },
        {
            no: 54,
            name: "ripgrep_raw_search_result",
            kind: "message",
            T: RipgrepRawSearchResult,
            oneof: "result"
        },
        {
            no: 55,
            name: "glob_file_search_result",
            kind: "message",
            T: GlobFileSearchResult,
            oneof: "result"
        },
        {
            no: 56,
            name: "create_plan_result",
            kind: "message",
            T: CreatePlanResult,
            oneof: "result"
        },
        {
            no: 57,
            name: "list_mcp_resources_result",
            kind: "message",
            T: ListMcpResourcesResult,
            oneof: "result"
        },
        {
            no: 58,
            name: "read_mcp_resource_result",
            kind: "message",
            T: ReadMcpResourceResult,
            oneof: "result"
        },
        {
            no: 59,
            name: "read_project_result",
            kind: "message",
            T: ReadProjectResult,
            oneof: "result"
        },
        {
            no: 60,
            name: "update_project_result",
            kind: "message",
            T: UpdateProjectResult,
            oneof: "result"
        },
        {
            no: 61,
            name: "task_v2_result",
            kind: "message",
            T: TaskV2Result,
            oneof: "result"
        },
        {
            no: 62,
            name: "call_mcp_tool_result",
            kind: "message",
            T: CallMcpToolResult,
            oneof: "result"
        },
        {
            no: 63,
            name: "apply_agent_diff_result",
            kind: "message",
            T: _agent_v1_apply_agent_diff_tool_pb_js__WEBPACK_IMPORTED_MODULE_4__.ApplyAgentDiffResult,
            oneof: "result"
        },
        {
            no: 64,
            name: "ask_question_result",
            kind: "message",
            T: AskQuestionResult,
            oneof: "result"
        },
        {
            no: 65,
            name: "switch_mode_result",
            kind: "message",
            T: SwitchModeResult,
            oneof: "result"
        },
        {
            no: 66,
            name: "computer_use_result",
            kind: "message",
            T: ComputerUseResult,
            oneof: "result"
        },
        {
            no: 67,
            name: "generate_image_result",
            kind: "message",
            T: _agent_v1_generate_image_tool_pb_js__WEBPACK_IMPORTED_MODULE_5__.GenerateImageResult,
            oneof: "result"
        },
        {
            no: 68,
            name: "write_shell_stdin_result",
            kind: "message",
            T: _agent_v1_background_shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_2__.WriteShellStdinResult,
            oneof: "result"
        },
        {
            no: 69,
            name: "record_screen_result",
            kind: "message",
            T: _agent_v1_record_screen_exec_pb_js__WEBPACK_IMPORTED_MODULE_3__.RecordScreenResult,
            oneof: "result"
        },
        {
            no: 70,
            name: "web_fetch_result",
            kind: "message",
            T: WebFetchResult,
            oneof: "result"
        },
        {
            no: 71,
            name: "report_bugfix_results_result",
            kind: "message",
            T: ReportBugfixResultsResult,
            oneof: "result"
        },
        {
            no: 72,
            name: "ai_attribution_result",
            kind: "message",
            T: _agent_v1_ai_attribution_tool_pb_js__WEBPACK_IMPORTED_MODULE_6__.AiAttributionResult,
            oneof: "result"
        },
        {
            no: 73,
            name: "mcp_auth_result",
            kind: "message",
            T: McpAuthResult,
            oneof: "result"
        },
        {
            no: 74,
            name: "get_mcp_tools_result",
            kind: "message",
            T: GetMcpToolsResult,
            oneof: "result"
        },
        {
            no: 75,
            name: "connect_scm_result",
            kind: "message",
            T: ConnectScmResult,
            oneof: "result"
        },
        {
            no: 35,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "error",
            kind: "message",
            T: ToolResultError,
            opt: true
        },
        {
            no: 48,
            name: "model_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 49,
            name: "tool_index",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 50,
            name: "attachments",
            kind: "message",
            T: ToolResultAttachments,
            opt: true
        }
    ]);
const NudgeMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.NudgeMessage", ()=>[
        {
            no: 1,
            name: "raw_message",
            kind: "scalar",
            T: 9
        }
    ]);
const ToolResultAttachments = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ToolResultAttachments", ()=>[
        {
            no: 1,
            name: "original_todos",
            kind: "message",
            T: TodoItem,
            repeated: true
        },
        {
            no: 2,
            name: "updated_todos",
            kind: "message",
            T: TodoItem,
            repeated: true
        },
        {
            no: 3,
            name: "nudge_messages",
            kind: "message",
            T: NudgeMessage,
            repeated: true
        },
        {
            no: 4,
            name: "should_show_todo_write_reminder",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "todo_reminder_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ToolResultAttachments_TodoReminderType)
        },
        {
            no: 6,
            name: "discovery_budget_reminder",
            kind: "message",
            T: ToolResultAttachments_DiscoveryBudgetReminder,
            opt: true
        }
    ]);
const ToolResultAttachments_TodoReminderType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.ToolResultAttachments.TodoReminderType", [
    {
        no: 0,
        name: "TODO_REMINDER_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TODO_REMINDER_TYPE_EVERY_10_TURNS",
        localName: "EVERY_10_TURNS"
    },
    {
        no: 2,
        name: "TODO_REMINDER_TYPE_AFTER_EDIT",
        localName: "AFTER_EDIT"
    }
]);
const ToolResultAttachments_DiscoveryBudgetReminder = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ToolResultAttachments.DiscoveryBudgetReminder", ()=>[
        {
            no: 1,
            name: "discovery_rounds_remaining",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "discovery_effort",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "ToolResultAttachments_DiscoveryBudgetReminder"
});
const StreamedBackPartialToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamedBackPartialToolCall", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ClientSideToolV2)
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "tool_index",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 5,
            name: "model_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const StreamedBackToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamedBackToolCall", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ClientSideToolV2)
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "read_semsearch_files_stream",
            kind: "message",
            T: ReadSemsearchFilesStream,
            oneof: "params"
        },
        {
            no: 5,
            name: "ripgrep_search_stream",
            kind: "message",
            T: RipgrepSearchStream,
            oneof: "params"
        },
        {
            no: 7,
            name: "read_file_stream",
            kind: "message",
            T: ReadFileStream,
            oneof: "params"
        },
        {
            no: 12,
            name: "list_dir_stream",
            kind: "message",
            T: ListDirStream,
            oneof: "params"
        },
        {
            no: 13,
            name: "edit_file_stream",
            kind: "message",
            T: EditFileStream,
            oneof: "params"
        },
        {
            no: 14,
            name: "file_search_stream",
            kind: "message",
            T: ToolCallFileSearchStream,
            oneof: "params"
        },
        {
            no: 19,
            name: "semantic_search_full_stream",
            kind: "message",
            T: SemanticSearchFullStream,
            oneof: "params"
        },
        {
            no: 21,
            name: "delete_file_stream",
            kind: "message",
            T: DeleteFileStream,
            oneof: "params"
        },
        {
            no: 22,
            name: "reapply_stream",
            kind: "message",
            T: ReapplyStream,
            oneof: "params"
        },
        {
            no: 25,
            name: "run_terminal_command_v2_stream",
            kind: "message",
            T: RunTerminalCommandV2Stream,
            oneof: "params"
        },
        {
            no: 26,
            name: "fetch_rules_stream",
            kind: "message",
            T: FetchRulesStream,
            oneof: "params"
        },
        {
            no: 28,
            name: "web_search_stream",
            kind: "message",
            T: WebSearchStream,
            oneof: "params"
        },
        {
            no: 29,
            name: "mcp_stream",
            kind: "message",
            T: MCPStream,
            oneof: "params"
        },
        {
            no: 33,
            name: "search_symbols_stream",
            kind: "message",
            T: SearchSymbolsStream,
            oneof: "params"
        },
        {
            no: 41,
            name: "gotodef_stream",
            kind: "message",
            T: GotodefStream,
            oneof: "params"
        },
        {
            no: 34,
            name: "background_composer_followup_stream",
            kind: "message",
            T: BackgroundComposerFollowupStream,
            oneof: "params"
        },
        {
            no: 35,
            name: "knowledge_base_stream",
            kind: "message",
            T: KnowledgeBaseStream,
            oneof: "params"
        },
        {
            no: 36,
            name: "fetch_pull_request_stream",
            kind: "message",
            T: FetchPullRequestStream,
            oneof: "params"
        },
        {
            no: 37,
            name: "deep_search_stream",
            kind: "message",
            T: DeepSearchStream,
            oneof: "params"
        },
        {
            no: 38,
            name: "create_diagram_stream",
            kind: "message",
            T: CreateDiagramStream,
            oneof: "params"
        },
        {
            no: 39,
            name: "fix_lints_stream",
            kind: "message",
            T: FixLintsStream,
            oneof: "params"
        },
        {
            no: 40,
            name: "read_lints_stream",
            kind: "message",
            T: ReadLintsStream,
            oneof: "params"
        },
        {
            no: 42,
            name: "task_stream",
            kind: "message",
            T: TaskStream,
            oneof: "params"
        },
        {
            no: 43,
            name: "await_task_stream",
            kind: "message",
            T: AwaitTaskStream,
            oneof: "params"
        },
        {
            no: 44,
            name: "todo_read_stream",
            kind: "message",
            T: TodoReadStream,
            oneof: "params"
        },
        {
            no: 45,
            name: "todo_write_stream",
            kind: "message",
            T: TodoWriteStream,
            oneof: "params"
        },
        {
            no: 52,
            name: "edit_file_v2_stream",
            kind: "message",
            T: EditFileV2Stream,
            oneof: "params"
        },
        {
            no: 53,
            name: "list_dir_v2_stream",
            kind: "message",
            T: ListDirV2Stream,
            oneof: "params"
        },
        {
            no: 54,
            name: "read_file_v2_stream",
            kind: "message",
            T: ReadFileV2Stream,
            oneof: "params"
        },
        {
            no: 55,
            name: "ripgrep_raw_search_stream",
            kind: "message",
            T: RipgrepRawSearchStream,
            oneof: "params"
        },
        {
            no: 56,
            name: "glob_file_search_stream",
            kind: "message",
            T: GlobFileSearchStream,
            oneof: "params"
        },
        {
            no: 57,
            name: "create_plan_stream",
            kind: "message",
            T: CreatePlanStream,
            oneof: "params"
        },
        {
            no: 58,
            name: "list_mcp_resources_stream",
            kind: "message",
            T: ListMcpResourcesStream,
            oneof: "params"
        },
        {
            no: 59,
            name: "read_mcp_resource_stream",
            kind: "message",
            T: ReadMcpResourceStream,
            oneof: "params"
        },
        {
            no: 60,
            name: "read_project_stream",
            kind: "message",
            T: ReadProjectStream,
            oneof: "params"
        },
        {
            no: 61,
            name: "update_project_stream",
            kind: "message",
            T: UpdateProjectStream,
            oneof: "params"
        },
        {
            no: 62,
            name: "task_v2_stream",
            kind: "message",
            T: TaskV2Stream,
            oneof: "params"
        },
        {
            no: 63,
            name: "call_mcp_tool_stream",
            kind: "message",
            T: CallMcpToolStream,
            oneof: "params"
        },
        {
            no: 64,
            name: "ask_question_stream",
            kind: "message",
            T: AskQuestionStream,
            oneof: "params"
        },
        {
            no: 65,
            name: "switch_mode_stream",
            kind: "message",
            T: SwitchModeStream,
            oneof: "params"
        },
        {
            no: 66,
            name: "computer_use_stream",
            kind: "message",
            T: ComputerUseStream,
            oneof: "params"
        },
        {
            no: 67,
            name: "write_shell_stdin_stream",
            kind: "message",
            T: WriteShellStdinStream,
            oneof: "params"
        },
        {
            no: 68,
            name: "web_fetch_stream",
            kind: "message",
            T: WebFetchStream,
            oneof: "params"
        },
        {
            no: 69,
            name: "report_bugfix_results_stream",
            kind: "message",
            T: ReportBugfixResultsStream,
            oneof: "params"
        },
        {
            no: 70,
            name: "mcp_auth_stream",
            kind: "message",
            T: McpAuthStream,
            oneof: "params"
        },
        {
            no: 71,
            name: "connect_scm_stream",
            kind: "message",
            T: ConnectScmStream,
            oneof: "params"
        },
        {
            no: 8,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "raw_args",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "error",
            kind: "message",
            T: ToolResultError,
            opt: true
        },
        {
            no: 50,
            name: "tool_index",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 51,
            name: "model_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const StreamedBackToolCallV2 = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamedBackToolCallV2", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ClientSideToolV2)
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "read_semsearch_files_params",
            kind: "message",
            T: ReadSemsearchFilesParams,
            oneof: "params"
        },
        {
            no: 5,
            name: "ripgrep_search_params",
            kind: "message",
            T: RipgrepSearchParams,
            oneof: "params"
        },
        {
            no: 9,
            name: "read_file_params",
            kind: "message",
            T: ReadFileParams,
            oneof: "params"
        },
        {
            no: 12,
            name: "list_dir_params",
            kind: "message",
            T: ListDirParams,
            oneof: "params"
        },
        {
            no: 13,
            name: "edit_file_params",
            kind: "message",
            T: EditFileParams,
            oneof: "params"
        },
        {
            no: 16,
            name: "file_search_params",
            kind: "message",
            T: ToolCallFileSearchParams,
            oneof: "params"
        },
        {
            no: 17,
            name: "semantic_search_full_params",
            kind: "message",
            T: SemanticSearchFullParams,
            oneof: "params"
        },
        {
            no: 19,
            name: "delete_file_params",
            kind: "message",
            T: DeleteFileParams,
            oneof: "params"
        },
        {
            no: 20,
            name: "reapply_params",
            kind: "message",
            T: ReapplyParams,
            oneof: "params"
        },
        {
            no: 23,
            name: "run_terminal_command_v2_params",
            kind: "message",
            T: RunTerminalCommandV2Params,
            oneof: "params"
        },
        {
            no: 24,
            name: "fetch_rules_params",
            kind: "message",
            T: FetchRulesParams,
            oneof: "params"
        },
        {
            no: 26,
            name: "web_search_params",
            kind: "message",
            T: WebSearchParams,
            oneof: "params"
        },
        {
            no: 27,
            name: "mcp_params",
            kind: "message",
            T: MCPParams,
            oneof: "params"
        },
        {
            no: 31,
            name: "search_symbols_params",
            kind: "message",
            T: SearchSymbolsParams,
            oneof: "params"
        },
        {
            no: 41,
            name: "gotodef_params",
            kind: "message",
            T: GotodefParams,
            oneof: "params"
        },
        {
            no: 32,
            name: "background_composer_followup_params",
            kind: "message",
            T: BackgroundComposerFollowupParams,
            oneof: "params"
        },
        {
            no: 33,
            name: "knowledge_base_params",
            kind: "message",
            T: KnowledgeBaseParams,
            oneof: "params"
        },
        {
            no: 34,
            name: "fetch_pull_request_params",
            kind: "message",
            T: FetchPullRequestParams,
            oneof: "params"
        },
        {
            no: 35,
            name: "deep_search_params",
            kind: "message",
            T: DeepSearchParams,
            oneof: "params"
        },
        {
            no: 36,
            name: "create_diagram_params",
            kind: "message",
            T: CreateDiagramParams,
            oneof: "params"
        },
        {
            no: 37,
            name: "fix_lints_params",
            kind: "message",
            T: FixLintsParams,
            oneof: "params"
        },
        {
            no: 38,
            name: "read_lints_params",
            kind: "message",
            T: ReadLintsParams,
            oneof: "params"
        },
        {
            no: 42,
            name: "task_params",
            kind: "message",
            T: TaskParams,
            oneof: "params"
        },
        {
            no: 43,
            name: "await_task_params",
            kind: "message",
            T: AwaitTaskParams,
            oneof: "params"
        },
        {
            no: 44,
            name: "todo_read_params",
            kind: "message",
            T: TodoReadParams,
            oneof: "params"
        },
        {
            no: 45,
            name: "todo_write_params",
            kind: "message",
            T: TodoWriteParams,
            oneof: "params"
        },
        {
            no: 48,
            name: "edit_file_v2_params",
            kind: "message",
            T: EditFileV2Params,
            oneof: "params"
        },
        {
            no: 49,
            name: "list_dir_v2_params",
            kind: "message",
            T: ListDirV2Params,
            oneof: "params"
        },
        {
            no: 61,
            name: "read_file_v2_params",
            kind: "message",
            T: ReadFileV2Params,
            oneof: "params"
        },
        {
            no: 62,
            name: "ripgrep_raw_search_params",
            kind: "message",
            T: RipgrepRawSearchParams,
            oneof: "params"
        },
        {
            no: 63,
            name: "glob_file_search_params",
            kind: "message",
            T: GlobFileSearchParams,
            oneof: "params"
        },
        {
            no: 64,
            name: "create_plan_params",
            kind: "message",
            T: CreatePlanParams,
            oneof: "params"
        },
        {
            no: 65,
            name: "list_mcp_resources_params",
            kind: "message",
            T: ListMcpResourcesParams,
            oneof: "params"
        },
        {
            no: 66,
            name: "read_mcp_resource_params",
            kind: "message",
            T: ReadMcpResourceParams,
            oneof: "params"
        },
        {
            no: 67,
            name: "read_project_params",
            kind: "message",
            T: ReadProjectParams,
            oneof: "params"
        },
        {
            no: 68,
            name: "update_project_params",
            kind: "message",
            T: UpdateProjectParams,
            oneof: "params"
        },
        {
            no: 69,
            name: "task_v2_params",
            kind: "message",
            T: TaskV2Params,
            oneof: "params"
        },
        {
            no: 70,
            name: "call_mcp_tool_params",
            kind: "message",
            T: CallMcpToolParams,
            oneof: "params"
        },
        {
            no: 71,
            name: "apply_agent_diff_params",
            kind: "message",
            T: ApplyAgentDiffParams,
            oneof: "params"
        },
        {
            no: 72,
            name: "ask_question_params",
            kind: "message",
            T: AskQuestionParams,
            oneof: "params"
        },
        {
            no: 73,
            name: "switch_mode_params",
            kind: "message",
            T: SwitchModeParams,
            oneof: "params"
        },
        {
            no: 74,
            name: "computer_use_params",
            kind: "message",
            T: ComputerUseParams,
            oneof: "params"
        },
        {
            no: 75,
            name: "write_shell_stdin_params",
            kind: "message",
            T: _agent_v1_background_shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_2__.WriteShellStdinArgs,
            oneof: "params"
        },
        {
            no: 76,
            name: "record_screen_params",
            kind: "message",
            T: _agent_v1_record_screen_exec_pb_js__WEBPACK_IMPORTED_MODULE_3__.RecordScreenArgs,
            oneof: "params"
        },
        {
            no: 77,
            name: "web_fetch_params",
            kind: "message",
            T: WebFetchParams,
            oneof: "params"
        },
        {
            no: 78,
            name: "report_bugfix_results_params",
            kind: "message",
            T: ReportBugfixResultsParams,
            oneof: "params"
        },
        {
            no: 79,
            name: "mcp_auth_params",
            kind: "message",
            T: McpAuthParams,
            oneof: "params"
        },
        {
            no: 80,
            name: "get_mcp_tools_params",
            kind: "message",
            T: GetMcpToolsParams,
            oneof: "params"
        },
        {
            no: 81,
            name: "connect_scm_params",
            kind: "message",
            T: ConnectScmParams,
            oneof: "params"
        },
        {
            no: 8,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "raw_args",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "error",
            kind: "message",
            T: ToolResultError,
            opt: true
        },
        {
            no: 50,
            name: "tool_index",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 51,
            name: "model_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const EditFileV2Params = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditFileV2Params", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "contents_after_edit",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "waiting_for_file_contents",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "text",
            kind: "message",
            T: EditFileV2Params_StreamingEditText,
            oneof: "streaming_edit"
        },
        {
            no: 5,
            name: "code",
            kind: "message",
            T: EditFileV2Params_StreamingEditCode,
            oneof: "streaming_edit"
        },
        {
            no: 6,
            name: "should_send_back_linter_errors",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "diff",
            kind: "message",
            T: EditFileResult_FileDiff,
            opt: true
        },
        {
            no: 8,
            name: "result_for_model",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "streaming_content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "no_codeblock",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 11,
            name: "cloud_agent_edit",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const EditFileV2Params_StreamingEditText = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditFileV2Params.StreamingEditText", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "EditFileV2Params_StreamingEditText"
});
const EditFileV2Params_StreamingEditCode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditFileV2Params.StreamingEditCode", ()=>[
        {
            no: 1,
            name: "code",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "EditFileV2Params_StreamingEditCode"
});
const EditFileV2Result = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditFileV2Result", ()=>[
        {
            no: 1,
            name: "contents_before_edit",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "eol_sequence",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "detected_language",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "file_was_created",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "diff",
            kind: "message",
            T: EditFileResult_FileDiff,
            opt: true
        },
        {
            no: 4,
            name: "rejected",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "linter_errors",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LinterError,
            repeated: true
        },
        {
            no: 6,
            name: "sent_back_linter_errors",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "should_auto_fix_lints",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "human_review_v2",
            kind: "message",
            T: HumanReview,
            opt: true
        },
        {
            no: 10,
            name: "result_for_model",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "contents_after_edit",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 13,
            name: "before_content_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 14,
            name: "after_content_id",
            kind: "scalar",
            T: 9
        }
    ]);
const EditFileV2Stream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditFileV2Stream", []);
const EditFileParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditFileParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "language",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "blocking",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "instructions",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "should_edit_file_fail_for_large_files",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "old_string",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "new_string",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "allow_multiple_matches",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 10,
            name: "use_whitespace_insensitive_fallback",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 11,
            name: "use_did_you_mean_fuzzy_match",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 16,
            name: "gracefully_handle_recoverable_errors",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 9,
            name: "line_ranges",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LineRange,
            repeated: true
        },
        {
            no: 13,
            name: "notebook_cell_idx",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 14,
            name: "is_new_cell",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 15,
            name: "cell_language",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 17,
            name: "edit_category",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 18,
            name: "should_eagerly_process_lints",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const EditFileResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditFileResult", ()=>[
        {
            no: 1,
            name: "diff",
            kind: "message",
            T: EditFileResult_FileDiff
        },
        {
            no: 2,
            name: "is_applied",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "apply_failed",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "linter_errors",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LinterError,
            repeated: true
        },
        {
            no: 5,
            name: "rejected",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "num_matches",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "whitespace_insensitive_fallback_found_match",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "no_match_found_in_line_ranges",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 11,
            name: "recoverable_error",
            kind: "message",
            T: EditFileResult_RecoverableError,
            opt: true
        },
        {
            no: 9,
            name: "num_lines_in_file",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 10,
            name: "is_subagent_edit",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 12,
            name: "diff_became_no_op_due_to_on_save_fixes",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 13,
            name: "human_review",
            kind: "message",
            T: EditFileResult_EditFileHumanReview,
            opt: true
        },
        {
            no: 14,
            name: "human_feedback",
            kind: "message",
            T: EditFileResult_HumanFeedback,
            opt: true
        },
        {
            no: 15,
            name: "should_eagerly_process_lints",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 16,
            name: "human_review_v2",
            kind: "message",
            T: HumanReview,
            opt: true
        },
        {
            no: 17,
            name: "were_all_new_linter_errors_resolved_by_this_edit",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const EditFileResult_FileDiff = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditFileResult.FileDiff", ()=>[
        {
            no: 1,
            name: "chunks",
            kind: "message",
            T: EditFileResult_FileDiff_ChunkDiff,
            repeated: true
        },
        {
            no: 2,
            name: "editor",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(EditFileResult_FileDiff_Editor)
        },
        {
            no: 3,
            name: "hit_timeout",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "EditFileResult_FileDiff"
});
const EditFileResult_FileDiff_Editor = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.EditFileResult.FileDiff.Editor", [
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
const EditFileResult_FileDiff_ChunkDiff = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditFileResult.FileDiff.ChunkDiff", ()=>[
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
    localName: "EditFileResult_FileDiff_ChunkDiff"
});
const EditFileResult_RecoverableError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditFileResult.RecoverableError", ()=>[
        {
            no: 1,
            name: "error_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(EditFileResult_RecoverableError_RecoverableErrorType)
        },
        {
            no: 2,
            name: "model_message",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "EditFileResult_RecoverableError"
});
const EditFileResult_RecoverableError_RecoverableErrorType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.EditFileResult.RecoverableError.RecoverableErrorType", [
    {
        no: 0,
        name: "RECOVERABLE_ERROR_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RECOVERABLE_ERROR_TYPE_SEARCH_STRING_NOT_FOUND",
        localName: "SEARCH_STRING_NOT_FOUND"
    },
    {
        no: 2,
        name: "RECOVERABLE_ERROR_TYPE_AMBIGUOUS_SEARCH_STRING",
        localName: "AMBIGUOUS_SEARCH_STRING"
    }
]);
const EditFileResult_EditFileHumanReview = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditFileResult.EditFileHumanReview", ()=>[
        {
            no: 1,
            name: "is_edit_accepted",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "text_result",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "stop_and_get_new_user_input",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "EditFileResult_EditFileHumanReview"
});
const EditFileResult_HumanFeedback = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditFileResult.HumanFeedback", ()=>[
        {
            no: 1,
            name: "selected_option",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "feedback_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "submit_feedback_as_new_message",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "bubble_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "EditFileResult_HumanFeedback"
});
const HumanReview = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.HumanReview", ()=>[
        {
            no: 1,
            name: "selected_option",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "feedback_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "submit_feedback_as_new_message",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "bubble_id",
            kind: "scalar",
            T: 9
        }
    ]);
const EditFileStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditFileStream", []);
const ToolCallFileSearchParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ToolCallFileSearchParams", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]);
const ToolCallFileSearchStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ToolCallFileSearchStream", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]);
const ToolCallFileSearchResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ToolCallFileSearchResult", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: ToolCallFileSearchResult_File,
            repeated: true
        },
        {
            no: 2,
            name: "limit_hit",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 3,
            name: "num_results",
            kind: "scalar",
            T: 5
        }
    ]);
const ToolCallFileSearchResult_File = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ToolCallFileSearchResult.File", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ToolCallFileSearchResult_File"
});
const ListDirParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListDirParams", ()=>[
        {
            no: 1,
            name: "directory_path",
            kind: "scalar",
            T: 9
        }
    ]);
const ListDirResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListDirResult", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: ListDirResult_File,
            repeated: true
        },
        {
            no: 2,
            name: "directory_relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]);
const ListDirResult_File = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListDirResult.File", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_directory",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "size",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 4,
            name: "last_modified",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Timestamp,
            opt: true
        },
        {
            no: 5,
            name: "num_children",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 6,
            name: "num_lines",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ], {
    localName: "ListDirResult_File"
});
const ListDirStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListDirStream", []);
const ReadFileParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadFileParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "read_entire_file",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "start_line_one_indexed",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "end_line_one_indexed_inclusive",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 5,
            name: "file_is_allowed_to_be_read_entirely",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "max_lines",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "max_chars",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 8,
            name: "min_lines",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const ReadFileResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadFileResult", ()=>[
        {
            no: 1,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "did_downgrade_to_line_range",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "did_shorten_line_range",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "did_set_default_line_range",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "full_file_contents",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "outline",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "start_line_one_indexed",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 8,
            name: "end_line_one_indexed_inclusive",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 9,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "did_shorten_char_range",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "read_full_file",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 12,
            name: "total_lines",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 13,
            name: "matching_cursor_rules",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.CursorRule,
            repeated: true
        },
        {
            no: 14,
            name: "file_git_context",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.FileGit
        }
    ]);
const ReadFileStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadFileStream", []);
const RipgrepSearchParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchParams", ()=>[
        {
            no: 1,
            name: "options",
            kind: "message",
            T: RipgrepSearchParams_ITextQueryBuilderOptionsProto
        },
        {
            no: 2,
            name: "pattern_info",
            kind: "message",
            T: RipgrepSearchParams_IPatternInfoProto
        }
    ]);
const RipgrepSearchParams_IPatternInfoProto = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchParams.IPatternInfoProto", ()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_reg_exp",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 3,
            name: "is_word_match",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "word_separators",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "is_multiline",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "is_unicode",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 7,
            name: "is_case_sensitive",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "notebook_info",
            kind: "message",
            T: RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto
        },
        {
            no: 9,
            name: "pattern_was_escaped",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ], {
    localName: "RipgrepSearchParams_IPatternInfoProto"
});
const RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchParams.IPatternInfoProto.INotebookPatternInfoProto", ()=>[
        {
            no: 1,
            name: "is_in_notebook_markdown_input",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 2,
            name: "is_in_notebook_markdown_preview",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 3,
            name: "is_in_notebook_cell_input",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "is_in_notebook_cell_output",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ], {
    localName: "RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto"
});
const RipgrepSearchParams_ITextQueryBuilderOptionsProto = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto", ()=>[
        {
            no: 1,
            name: "preview_options",
            kind: "message",
            T: RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto
        },
        {
            no: 2,
            name: "file_encoding",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "surrounding_context",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "is_smart_case",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "notebook_search_config",
            kind: "message",
            T: RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto
        },
        {
            no: 6,
            name: "exclude_pattern",
            kind: "message",
            T: RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto
        },
        {
            no: 7,
            name: "include_pattern",
            kind: "message",
            T: RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto
        },
        {
            no: 8,
            name: "expand_patterns",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 9,
            name: "max_results",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 10,
            name: "max_file_size",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 11,
            name: "disregard_ignore_files",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 12,
            name: "disregard_global_ignore_files",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 13,
            name: "disregard_parent_ignore_files",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 14,
            name: "disregard_exclude_settings",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 15,
            name: "disregard_search_exclude_settings",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 16,
            name: "ignore_symlinks",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 17,
            name: "only_open_editors",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 18,
            name: "only_file_scheme",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 19,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 20,
            name: "extra_file_resources",
            kind: "message",
            T: RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto"
});
const RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExtraFileResourcesProto", ()=>[
        {
            no: 1,
            name: "extra_file_resources",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto"
});
const RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExcludePatternProto", ()=>[
        {
            no: 1,
            name: "exclude_pattern",
            kind: "message",
            T: RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto,
            repeated: true
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto"
});
const RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPatternBuilderProto", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "pattern",
            kind: "message",
            T: RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto"
});
const RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPathPatternBuilderProto", ()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "patterns",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto"
});
const RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ITextSearchPreviewOptionsProto", ()=>[
        {
            no: 1,
            name: "match_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "chars_per_line",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto"
});
const RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.INotebookSearchConfigProto", ()=>[
        {
            no: 1,
            name: "include_markup_input",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "include_markup_preview",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "include_code_input",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "include_output",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto"
});
const RipgrepSearchResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchResult", ()=>[
        {
            no: 1,
            name: "internal",
            kind: "message",
            T: RipgrepSearchResultInternal
        }
    ]);
const RipgrepSearchResultInternal = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchResultInternal", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: RipgrepSearchResultInternal_IFileMatch,
            repeated: true
        },
        {
            no: 2,
            name: "exit",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RipgrepSearchResultInternal_SearchCompletionExitCode),
            opt: true
        },
        {
            no: 3,
            name: "limit_hit",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "messages",
            kind: "message",
            T: RipgrepSearchResultInternal_ITextSearchCompleteMessage,
            repeated: true
        },
        {
            no: 5,
            name: "file_search_stats",
            kind: "message",
            T: RipgrepSearchResultInternal_IFileSearchStats,
            oneof: "stats"
        },
        {
            no: 6,
            name: "text_search_stats",
            kind: "message",
            T: RipgrepSearchResultInternal_ITextSearchStats,
            oneof: "stats"
        }
    ]);
const RipgrepSearchResultInternal_TextSearchCompleteMessageType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.RipgrepSearchResultInternal.TextSearchCompleteMessageType", [
    {
        no: 0,
        name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_INFORMATION",
        localName: "INFORMATION"
    },
    {
        no: 2,
        name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_WARNING",
        localName: "WARNING"
    }
]);
const RipgrepSearchResultInternal_SearchCompletionExitCode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.RipgrepSearchResultInternal.SearchCompletionExitCode", [
    {
        no: 0,
        name: "SEARCH_COMPLETION_EXIT_CODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SEARCH_COMPLETION_EXIT_CODE_NORMAL",
        localName: "NORMAL"
    },
    {
        no: 2,
        name: "SEARCH_COMPLETION_EXIT_CODE_NEW_SEARCH_STARTED",
        localName: "NEW_SEARCH_STARTED"
    }
]);
const RipgrepSearchResultInternal_IFileMatch = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileMatch", ()=>[
        {
            no: 1,
            name: "resource",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "results",
            kind: "message",
            T: RipgrepSearchResultInternal_ITextSearchResult,
            repeated: true
        }
    ], {
    localName: "RipgrepSearchResultInternal_IFileMatch"
});
const RipgrepSearchResultInternal_ITextSearchResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchResult", ()=>[
        {
            no: 1,
            name: "match",
            kind: "message",
            T: RipgrepSearchResultInternal_ITextSearchMatch,
            oneof: "result"
        },
        {
            no: 2,
            name: "context",
            kind: "message",
            T: RipgrepSearchResultInternal_ITextSearchContext,
            oneof: "result"
        }
    ], {
    localName: "RipgrepSearchResultInternal_ITextSearchResult"
});
const RipgrepSearchResultInternal_ITextSearchMatch = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchMatch", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "range_locations",
            kind: "message",
            T: RipgrepSearchResultInternal_ISearchRangeSetPairing,
            repeated: true
        },
        {
            no: 3,
            name: "preview_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "webview_index",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 5,
            name: "cell_fragment",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "RipgrepSearchResultInternal_ITextSearchMatch"
});
const RipgrepSearchResultInternal_ITextSearchContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchContext", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "line_number",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "RipgrepSearchResultInternal_ITextSearchContext"
});
const RipgrepSearchResultInternal_ISearchRangeSetPairing = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchRangeSetPairing", ()=>[
        {
            no: 1,
            name: "source",
            kind: "message",
            T: RipgrepSearchResultInternal_ISearchRange
        },
        {
            no: 2,
            name: "preview",
            kind: "message",
            T: RipgrepSearchResultInternal_ISearchRange
        }
    ], {
    localName: "RipgrepSearchResultInternal_ISearchRangeSetPairing"
});
const RipgrepSearchResultInternal_ISearchRange = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchRange", ()=>[
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
    localName: "RipgrepSearchResultInternal_ISearchRange"
});
const RipgrepSearchResultInternal_ITextSearchCompleteMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchCompleteMessage", ()=>[
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RipgrepSearchResultInternal_TextSearchCompleteMessageType)
        },
        {
            no: 3,
            name: "trusted",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ], {
    localName: "RipgrepSearchResultInternal_ITextSearchCompleteMessage"
});
const RipgrepSearchResultInternal_IFileSearchStats = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileSearchStats", ()=>[
        {
            no: 1,
            name: "from_cache",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "search_engine_stats",
            kind: "message",
            T: RipgrepSearchResultInternal_ISearchEngineStats,
            oneof: "detail_stats"
        },
        {
            no: 3,
            name: "cached_search_stats",
            kind: "message",
            T: RipgrepSearchResultInternal_ICachedSearchStats,
            oneof: "detail_stats"
        },
        {
            no: 4,
            name: "file_search_provider_stats",
            kind: "message",
            T: RipgrepSearchResultInternal_IFileSearchProviderStats,
            oneof: "detail_stats"
        },
        {
            no: 5,
            name: "result_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType)
        },
        {
            no: 7,
            name: "sorting_time",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ], {
    localName: "RipgrepSearchResultInternal_IFileSearchStats"
});
const RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.RipgrepSearchResultInternal.IFileSearchStats.FileSearchProviderType", [
    {
        no: 0,
        name: "FILE_SEARCH_PROVIDER_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FILE_SEARCH_PROVIDER_TYPE_FILE_SEARCH_PROVIDER",
        localName: "FILE_SEARCH_PROVIDER"
    },
    {
        no: 2,
        name: "FILE_SEARCH_PROVIDER_TYPE_SEARCH_PROCESS",
        localName: "SEARCH_PROCESS"
    }
]);
const RipgrepSearchResultInternal_ITextSearchStats = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchStats", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType)
        }
    ], {
    localName: "RipgrepSearchResultInternal_ITextSearchStats"
});
const RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.RipgrepSearchResultInternal.ITextSearchStats.TextSearchProviderType", [
    {
        no: 0,
        name: "TEXT_SEARCH_PROVIDER_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TEXT_SEARCH_PROVIDER_TYPE_TEXT_SEARCH_PROVIDER",
        localName: "TEXT_SEARCH_PROVIDER"
    },
    {
        no: 2,
        name: "TEXT_SEARCH_PROVIDER_TYPE_SEARCH_PROCESS",
        localName: "SEARCH_PROCESS"
    },
    {
        no: 3,
        name: "TEXT_SEARCH_PROVIDER_TYPE_AI_TEXT_SEARCH_PROVIDER",
        localName: "AI_TEXT_SEARCH_PROVIDER"
    }
]);
const RipgrepSearchResultInternal_ISearchEngineStats = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchEngineStats", ()=>[
        {
            no: 1,
            name: "file_walk_time",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "directories_walked",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "files_walked",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "cmd_time",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "cmd_result_count",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ], {
    localName: "RipgrepSearchResultInternal_ISearchEngineStats"
});
const RipgrepSearchResultInternal_ICachedSearchStats = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ICachedSearchStats", ()=>[
        {
            no: 1,
            name: "cache_was_resolved",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "cache_lookup_time",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "cache_filter_time",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "cache_entry_count",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "RipgrepSearchResultInternal_ICachedSearchStats"
});
const RipgrepSearchResultInternal_IFileSearchProviderStats = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileSearchProviderStats", ()=>[
        {
            no: 1,
            name: "provider_time",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "post_process_time",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "RipgrepSearchResultInternal_IFileSearchProviderStats"
});
const RipgrepSearchStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepSearchStream", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]);
const ReadSemsearchFilesParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadSemsearchFilesParams", ()=>[
        {
            no: 1,
            name: "repository_info",
            kind: "message",
            T: _repository_pb_js__WEBPACK_IMPORTED_MODULE_7__.RepositoryInfo
        },
        {
            no: 2,
            name: "code_results",
            kind: "message",
            T: _repository_pb_js__WEBPACK_IMPORTED_MODULE_7__.CodeResult,
            repeated: true
        },
        {
            no: 3,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "pr_references",
            kind: "message",
            T: PullRequestReference,
            repeated: true
        },
        {
            no: 5,
            name: "pr_search_on",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const MissingFile = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.MissingFile", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "missing_reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(MissingFile_MissingReason)
        },
        {
            no: 3,
            name: "num_lines",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const MissingFile_MissingReason = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.MissingFile.MissingReason", [
    {
        no: 0,
        name: "MISSING_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MISSING_REASON_TOO_LARGE",
        localName: "TOO_LARGE"
    },
    {
        no: 2,
        name: "MISSING_REASON_NOT_FOUND",
        localName: "NOT_FOUND"
    }
]);
const Knowledge = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.Knowledge", ()=>[
        {
            no: 1,
            name: "knowledge",
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
const ToolPullRequestResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ToolPullRequestResult", ()=>[
        {
            no: 1,
            name: "sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "full_pr_contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "score",
            kind: "scalar",
            T: 2
        },
        {
            no: 4,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "pr_number",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 7,
            name: "changed_files",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 8,
            name: "author",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "date",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ReadSemsearchFilesResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadSemsearchFilesResult", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: _repository_pb_js__WEBPACK_IMPORTED_MODULE_7__.CodeResult,
            repeated: true
        },
        {
            no: 2,
            name: "all_files",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.File,
            repeated: true
        },
        {
            no: 3,
            name: "missing_files",
            kind: "message",
            T: MissingFile,
            repeated: true
        },
        {
            no: 4,
            name: "knowledge_results",
            kind: "message",
            T: Knowledge,
            repeated: true
        },
        {
            no: 5,
            name: "pr_results",
            kind: "message",
            T: ToolPullRequestResult,
            repeated: true
        },
        {
            no: 6,
            name: "git_remote_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "pr_hydration_timed_out",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const ReadSemsearchFilesStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadSemsearchFilesStream", ()=>[
        {
            no: 1,
            name: "num_files",
            kind: "scalar",
            T: 5
        }
    ]);
const SemanticSearchFullParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SemanticSearchFullParams", ()=>[
        {
            no: 1,
            name: "repository_info",
            kind: "message",
            T: _repository_pb_js__WEBPACK_IMPORTED_MODULE_7__.RepositoryInfo
        },
        {
            no: 2,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "include_pattern",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "exclude_pattern",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "top_k",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "pr_references",
            kind: "message",
            T: PullRequestReference,
            repeated: true
        },
        {
            no: 7,
            name: "pr_search_on",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "explanation",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "code_results",
            kind: "message",
            T: _repository_pb_js__WEBPACK_IMPORTED_MODULE_7__.CodeResult,
            repeated: true
        }
    ]);
const SemanticSearchFullResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SemanticSearchFullResult", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: _repository_pb_js__WEBPACK_IMPORTED_MODULE_7__.CodeResult,
            repeated: true
        },
        {
            no: 2,
            name: "all_files",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.File,
            repeated: true
        },
        {
            no: 3,
            name: "missing_files",
            kind: "message",
            T: MissingFile,
            repeated: true
        },
        {
            no: 4,
            name: "knowledge_results",
            kind: "message",
            T: Knowledge,
            repeated: true
        },
        {
            no: 5,
            name: "pr_results",
            kind: "message",
            T: ToolPullRequestResult,
            repeated: true
        },
        {
            no: 6,
            name: "git_remote_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "pr_hydration_timed_out",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const SemanticSearchFullStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SemanticSearchFullStream", ()=>[
        {
            no: 1,
            name: "num_files",
            kind: "scalar",
            T: 5
        }
    ]);
const DeleteFileParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DeleteFileParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]);
const DeleteFileResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DeleteFileResult", ()=>[
        {
            no: 1,
            name: "rejected",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "file_non_existent",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "file_deleted_successfully",
            kind: "scalar",
            T: 8
        }
    ]);
const DeleteFileStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DeleteFileStream", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]);
const BuiltinToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BuiltinToolCall", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(BuiltinTool)
        },
        {
            no: 2,
            name: "search_params",
            kind: "message",
            T: SearchParams,
            oneof: "params"
        },
        {
            no: 3,
            name: "read_chunk_params",
            kind: "message",
            T: ReadChunkParams,
            oneof: "params"
        },
        {
            no: 4,
            name: "gotodef_params",
            kind: "message",
            T: GotodefParams,
            oneof: "params"
        },
        {
            no: 5,
            name: "edit_params",
            kind: "message",
            T: EditParams,
            oneof: "params"
        },
        {
            no: 6,
            name: "undo_edit_params",
            kind: "message",
            T: UndoEditParams,
            oneof: "params"
        },
        {
            no: 7,
            name: "end_params",
            kind: "message",
            T: EndParams,
            oneof: "params"
        },
        {
            no: 8,
            name: "new_file_params",
            kind: "message",
            T: NewFileParams,
            oneof: "params"
        },
        {
            no: 9,
            name: "add_test_params",
            kind: "message",
            T: AddTestParams,
            oneof: "params"
        },
        {
            no: 10,
            name: "run_test_params",
            kind: "message",
            T: RunTestParams,
            oneof: "params"
        },
        {
            no: 11,
            name: "delete_test_params",
            kind: "message",
            T: DeleteTestParams,
            oneof: "params"
        },
        {
            no: 12,
            name: "save_file_params",
            kind: "message",
            T: SaveFileParams,
            oneof: "params"
        },
        {
            no: 13,
            name: "get_tests_params",
            kind: "message",
            T: GetTestsParams,
            oneof: "params"
        },
        {
            no: 14,
            name: "get_symbols_params",
            kind: "message",
            T: GetSymbolsParams,
            oneof: "params"
        },
        {
            no: 15,
            name: "semantic_search_params",
            kind: "message",
            T: SemanticSearchParams,
            oneof: "params"
        },
        {
            no: 16,
            name: "get_project_structure_params",
            kind: "message",
            T: GetProjectStructureParams,
            oneof: "params"
        },
        {
            no: 17,
            name: "create_rm_files_params",
            kind: "message",
            T: CreateRmFilesParams,
            oneof: "params"
        },
        {
            no: 18,
            name: "run_terminal_commands_params",
            kind: "message",
            T: RunTerminalCommandsParams,
            oneof: "params"
        },
        {
            no: 19,
            name: "new_edit_params",
            kind: "message",
            T: NewEditParams,
            oneof: "params"
        },
        {
            no: 20,
            name: "read_with_linter_params",
            kind: "message",
            T: ReadWithLinterParams,
            oneof: "params"
        },
        {
            no: 21,
            name: "add_ui_step_params",
            kind: "message",
            T: AddUiStepParams,
            oneof: "params"
        },
        {
            no: 23,
            name: "read_semsearch_files_params",
            kind: "message",
            T: ReadSemsearchFilesParams,
            oneof: "params"
        },
        {
            no: 26,
            name: "delete_file_params",
            kind: "message",
            T: DeleteFileParams,
            oneof: "params"
        },
        {
            no: 22,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const BuiltinToolResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BuiltinToolResult", ()=>[
        {
            no: 1,
            name: "tool",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(BuiltinTool)
        },
        {
            no: 2,
            name: "search_result",
            kind: "message",
            T: SearchResult,
            oneof: "result"
        },
        {
            no: 3,
            name: "read_chunk_result",
            kind: "message",
            T: ReadChunkResult,
            oneof: "result"
        },
        {
            no: 4,
            name: "gotodef_result",
            kind: "message",
            T: GotodefResult,
            oneof: "result"
        },
        {
            no: 5,
            name: "edit_result",
            kind: "message",
            T: EditResult,
            oneof: "result"
        },
        {
            no: 6,
            name: "undo_edit_result",
            kind: "message",
            T: UndoEditResult,
            oneof: "result"
        },
        {
            no: 7,
            name: "end_result",
            kind: "message",
            T: EndResult,
            oneof: "result"
        },
        {
            no: 8,
            name: "new_file_result",
            kind: "message",
            T: NewFileResult,
            oneof: "result"
        },
        {
            no: 9,
            name: "add_test_result",
            kind: "message",
            T: AddTestResult,
            oneof: "result"
        },
        {
            no: 10,
            name: "run_test_result",
            kind: "message",
            T: RunTestResult,
            oneof: "result"
        },
        {
            no: 11,
            name: "delete_test_result",
            kind: "message",
            T: DeleteTestResult,
            oneof: "result"
        },
        {
            no: 12,
            name: "save_file_result",
            kind: "message",
            T: SaveFileResult,
            oneof: "result"
        },
        {
            no: 13,
            name: "get_tests_result",
            kind: "message",
            T: GetTestsResult,
            oneof: "result"
        },
        {
            no: 14,
            name: "get_symbols_result",
            kind: "message",
            T: GetSymbolsResult,
            oneof: "result"
        },
        {
            no: 15,
            name: "semantic_search_result",
            kind: "message",
            T: SemanticSearchResult,
            oneof: "result"
        },
        {
            no: 16,
            name: "get_project_structure_result",
            kind: "message",
            T: GetProjectStructureResult,
            oneof: "result"
        },
        {
            no: 17,
            name: "create_rm_files_result",
            kind: "message",
            T: CreateRmFilesResult,
            oneof: "result"
        },
        {
            no: 18,
            name: "run_terminal_commands_result",
            kind: "message",
            T: RunTerminalCommandsResult,
            oneof: "result"
        },
        {
            no: 19,
            name: "new_edit_result",
            kind: "message",
            T: NewEditResult,
            oneof: "result"
        },
        {
            no: 20,
            name: "read_with_linter_result",
            kind: "message",
            T: ReadWithLinterResult,
            oneof: "result"
        },
        {
            no: 21,
            name: "add_ui_step_result",
            kind: "message",
            T: AddUiStepResult,
            oneof: "result"
        },
        {
            no: 22,
            name: "read_semsearch_files_result",
            kind: "message",
            T: ReadSemsearchFilesResult,
            oneof: "result"
        },
        {
            no: 24,
            name: "delete_file_result",
            kind: "message",
            T: DeleteFileResult,
            oneof: "result"
        }
    ]);
const AddUiStepParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AddUiStepParams", ()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "search_results",
            kind: "message",
            T: AddUiStepParams_SearchResults,
            oneof: "step"
        }
    ]);
const AddUiStepParams_SearchResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AddUiStepParams.SearchResult", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AddUiStepParams_SearchResult"
});
const AddUiStepParams_SearchResults = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AddUiStepParams.SearchResults", ()=>[
        {
            no: 1,
            name: "search_results",
            kind: "message",
            T: AddUiStepParams_SearchResult,
            repeated: true
        }
    ], {
    localName: "AddUiStepParams_SearchResults"
});
const AddUiStepResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AddUiStepResult", []);
const ServerSideToolResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ServerSideToolResult", []);
const ToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ToolCall", ()=>[
        {
            no: 1,
            name: "builtin_tool_call",
            kind: "message",
            T: BuiltinToolCall,
            oneof: "tool_call"
        },
        {
            no: 2,
            name: "custom_tool_call",
            kind: "message",
            T: CustomToolCall,
            oneof: "tool_call"
        }
    ]);
const ToolResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ToolResult", ()=>[
        {
            no: 1,
            name: "builtin_tool_result",
            kind: "message",
            T: BuiltinToolResult,
            oneof: "tool_result"
        },
        {
            no: 2,
            name: "custom_tool_result",
            kind: "message",
            T: CustomToolResult,
            oneof: "tool_result"
        },
        {
            no: 3,
            name: "error_tool_result",
            kind: "message",
            T: ErrorToolResult,
            oneof: "tool_result"
        }
    ]);
const ReadWithLinterParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadWithLinterParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]);
const ReadWithLinterResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadWithLinterResult", ()=>[
        {
            no: 1,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diagnostics",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.Diagnostic,
            repeated: true
        }
    ]);
const RunTerminalCommandsParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RunTerminalCommandsParams", ()=>[
        {
            no: 1,
            name: "commands",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "commands_uuid",
            kind: "scalar",
            T: 9
        }
    ]);
const RunTerminalCommandsResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RunTerminalCommandsResult", ()=>[
        {
            no: 1,
            name: "outputs",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const CreateRmFilesParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CreateRmFilesParams", ()=>[
        {
            no: 1,
            name: "removed_file_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "created_file_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "created_directory_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const CreateRmFilesResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CreateRmFilesResult", ()=>[
        {
            no: 1,
            name: "created_file_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "removed_file_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const GetProjectStructureParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetProjectStructureParams", []);
const GetProjectStructureResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetProjectStructureResult", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: GetProjectStructureResult_File,
            repeated: true
        },
        {
            no: 2,
            name: "root_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]);
const GetProjectStructureResult_File = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetProjectStructureResult.File", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "outline",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "GetProjectStructureResult_File"
});
const NewFileParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.NewFileParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]);
const SemanticSearchParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SemanticSearchParams", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "include_pattern",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "exclude_pattern",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "top_k",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "index_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "grab_whole_file",
            kind: "scalar",
            T: 8
        }
    ]);
const Range = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.Range", ()=>[
        {
            no: 1,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "start_character",
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
            name: "end_character",
            kind: "scalar",
            T: 5
        }
    ]);
const MatchRange = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.MatchRange", ()=>[
        {
            no: 1,
            name: "start",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end",
            kind: "scalar",
            T: 5
        }
    ]);
const SemanticSearchResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SemanticSearchResult", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: SemanticSearchResult_Item,
            repeated: true
        },
        {
            no: 2,
            name: "files",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]);
const SemanticSearchResult_Item = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SemanticSearchResult.Item", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        },
        {
            no: 3,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.SimpleRange
        },
        {
            no: 5,
            name: "original_content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "detailed_lines",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.DetailedLine,
            repeated: true
        }
    ], {
    localName: "SemanticSearchResult_Item"
});
const SearchParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SearchParams", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "regex",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "include_pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "exclude_pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "filename_search",
            kind: "scalar",
            T: 8
        }
    ]);
const SearchToolFileSearchResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SearchToolFileSearchResult", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "num_matches",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "potentially_relevant_lines",
            kind: "message",
            T: SearchToolFileSearchResult_Line,
            repeated: true
        },
        {
            no: 4,
            name: "cropped",
            kind: "scalar",
            T: 8
        }
    ]);
const SearchToolFileSearchResult_Line = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SearchToolFileSearchResult.Line", ()=>[
        {
            no: 1,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "SearchToolFileSearchResult_Line"
});
const SearchResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SearchResult", ()=>[
        {
            no: 1,
            name: "file_results",
            kind: "message",
            T: SearchToolFileSearchResult,
            repeated: true
        },
        {
            no: 2,
            name: "num_total_matches",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "num_total_matched_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "num_total_may_be_incomplete",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "files_only",
            kind: "scalar",
            T: 8
        }
    ]);
const ReadChunkParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadChunkParams", ()=>[
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
            name: "num_lines",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const ReadChunkResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadChunkResult", ()=>[
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
            name: "total_num_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "cropped",
            kind: "scalar",
            T: 8
        }
    ]);
const UndoEditParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UndoEditParams", []);
const EndParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EndParams", []);
const NewFileResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.NewFileResult", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_total_lines",
            kind: "scalar",
            T: 5
        }
    ]);
const UndoEditResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UndoEditResult", ()=>[
        {
            no: 1,
            name: "feedback",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "context_start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "context_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "context_total_num_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "file_total_lines",
            kind: "scalar",
            T: 5
        }
    ]);
const EndResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EndResult", []);
const CustomToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CustomToolCall", ()=>[
        {
            no: 1,
            name: "tool_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "params",
            kind: "scalar",
            T: 9
        }
    ]);
const ScratchpadResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ScratchpadResult", []);
const CustomToolResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CustomToolResult", ()=>[
        {
            no: 1,
            name: "tool_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "result",
            kind: "scalar",
            T: 9
        }
    ]);
const GotodefParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GotodefParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "symbol",
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
        }
    ]);
const GotodefDefinition = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GotodefDefinition", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "fully_qualified_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "symbol_kind",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "end_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "code_context_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const GotodefResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GotodefResult", ()=>[
        {
            no: 1,
            name: "definitions",
            kind: "message",
            T: GotodefDefinition,
            repeated: true
        }
    ]);
const ErrorToolResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ErrorToolResult", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);
const NewEditParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.NewEditParams", ()=>[
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
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "end_line_number",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "edit_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "first_edit",
            kind: "scalar",
            T: 8
        }
    ]);
const NewEditResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.NewEditResult", []);
const EditParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditParams", ()=>[
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
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "replace_num_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "new_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 7,
            name: "replace_whole_file",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "edit_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "frontend_edit_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(EditParams_FrontendEditType)
        },
        {
            no: 8,
            name: "auto_fix_all_linter_errors_in_file",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const EditParams_FrontendEditType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.EditParams.FrontendEditType", [
    {
        no: 0,
        name: "FRONTEND_EDIT_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FRONTEND_EDIT_TYPE_INLINE_DIFFS",
        localName: "INLINE_DIFFS"
    },
    {
        no: 2,
        name: "FRONTEND_EDIT_TYPE_SIMPLE",
        localName: "SIMPLE"
    }
]);
const EditResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditResult", ()=>[
        {
            no: 1,
            name: "feedback",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "context_start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "context_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "file_total_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "structured_feedback",
            kind: "message",
            T: EditResult_Feedback,
            repeated: true
        }
    ]);
const EditResult_RelatedInformation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditResult.RelatedInformation", ()=>[
        {
            no: 1,
            name: "message",
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
            name: "end_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "EditResult_RelatedInformation"
});
const EditResult_Feedback = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditResult.Feedback", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "severity",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "related_information",
            kind: "message",
            T: EditResult_RelatedInformation,
            repeated: true
        }
    ], {
    localName: "EditResult_Feedback"
});
const AddTestParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AddTestParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "test_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "test_code",
            kind: "scalar",
            T: 9
        }
    ]);
const AddTestResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AddTestResult", ()=>[
        {
            no: 1,
            name: "feedback",
            kind: "message",
            T: AddTestResult_Feedback,
            repeated: true
        }
    ]);
const AddTestResult_RelatedInformation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AddTestResult.RelatedInformation", ()=>[
        {
            no: 1,
            name: "message",
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
            name: "end_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AddTestResult_RelatedInformation"
});
const AddTestResult_Feedback = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AddTestResult.Feedback", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "severity",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "related_information",
            kind: "message",
            T: AddTestResult_RelatedInformation,
            repeated: true
        }
    ], {
    localName: "AddTestResult_Feedback"
});
const RunTestParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RunTestParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "test_name",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const RunTestResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RunTestResult", ()=>[
        {
            no: 1,
            name: "result",
            kind: "scalar",
            T: 9
        }
    ]);
const GetTestsParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetTestsParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]);
const GetTestsResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetTestsResult", ()=>[
        {
            no: 1,
            name: "tests",
            kind: "message",
            T: GetTestsResult_Test,
            repeated: true
        }
    ]);
const GetTestsResult_Test = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetTestsResult.Test", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ], {
    localName: "GetTestsResult_Test"
});
const DeleteTestParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DeleteTestParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "test_name",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const DeleteTestResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DeleteTestResult", []);
const SaveFileParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SaveFileParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]);
const SaveFileResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SaveFileResult", []);
const GetSymbolsParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetSymbolsParams", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_range",
            kind: "message",
            T: GetSymbolsParams_LineRange,
            opt: true
        },
        {
            no: 3,
            name: "include_children",
            kind: "scalar",
            T: 8
        }
    ]);
const GetSymbolsParams_LineRange = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetSymbolsParams.LineRange", ()=>[
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
    ], {
    localName: "GetSymbolsParams_LineRange"
});
const GetSymbolsResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetSymbolsResult", ()=>[
        {
            no: 1,
            name: "symbols",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.DocumentSymbol,
            repeated: true
        }
    ]);
const ShellCommandParsingResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ShellCommandParsingResult", ()=>[
        {
            no: 1,
            name: "parsing_failed",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "executable_commands",
            kind: "message",
            T: ShellCommandParsingResult_ExecutableCommand,
            repeated: true
        },
        {
            no: 3,
            name: "has_redirects",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "has_command_substitution",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "all_redirects_are_dev_null",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "redirects",
            kind: "message",
            T: ShellCommandParsingResult_Redirect,
            repeated: true
        }
    ]);
const ShellCommandParsingResult_ExecutableCommandArg = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ShellCommandParsingResult.ExecutableCommandArg", ()=>[
        {
            no: 1,
            name: "type",
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
    localName: "ShellCommandParsingResult_ExecutableCommandArg"
});
const ShellCommandParsingResult_ExecutableCommand = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ShellCommandParsingResult.ExecutableCommand", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "args",
            kind: "message",
            T: ShellCommandParsingResult_ExecutableCommandArg,
            repeated: true
        },
        {
            no: 3,
            name: "full_text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ShellCommandParsingResult_ExecutableCommand"
});
const ShellCommandParsingResult_Redirect = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ShellCommandParsingResult.Redirect", ()=>[
        {
            no: 1,
            name: "operator",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "destination_fds",
            kind: "scalar",
            T: 13,
            repeated: true
        },
        {
            no: 3,
            name: "target_node_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "target_text",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "ShellCommandParsingResult_Redirect"
});
const RunTerminalCommandV2Params = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RunTerminalCommandV2Params", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "cwd",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "new_session",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "options",
            kind: "message",
            T: RunTerminalCommandV2Params_ExecutionOptions,
            opt: true
        },
        {
            no: 5,
            name: "is_background",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "require_user_approval",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "parsing_result",
            kind: "message",
            T: ShellCommandParsingResult,
            opt: true
        },
        {
            no: 8,
            name: "idle_timeout_seconds",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 9,
            name: "requested_sandbox_policy",
            kind: "message",
            T: _agent_v1_sandbox_pb_js__WEBPACK_IMPORTED_MODULE_8__.SandboxPolicy,
            opt: true
        },
        {
            no: 10,
            name: "file_output_threshold_bytes",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 11,
            name: "command_description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "classifier_result",
            kind: "message",
            T: _agent_v1_shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_9__.CommandClassifierResult,
            opt: true
        }
    ]);
const RunTerminalCommandV2Params_ExecutionOptions = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RunTerminalCommandV2Params.ExecutionOptions", ()=>[
        {
            no: 1,
            name: "timeout",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 2,
            name: "skip_ai_check",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 3,
            name: "command_run_timeout_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "command_change_check_interval_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 5,
            name: "ai_finish_check_max_attempts",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 6,
            name: "ai_finish_check_interval_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "delayer_interval_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 8,
            name: "ai_check_for_hangs",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ], {
    localName: "RunTerminalCommandV2Params_ExecutionOptions"
});
const OutputLocation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.OutputLocation", ()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "line_count",
            kind: "scalar",
            T: 3
        }
    ]);
const RunTerminalCommandV2Result = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RunTerminalCommandV2Result", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "exit_code",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "rejected",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "popped_out_into_background",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "is_running_in_background",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "not_interrupted",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "resulting_working_directory",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "did_user_change",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "ended_reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RunTerminalCommandEndedReason)
        },
        {
            no: 10,
            name: "exit_code_v2",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 11,
            name: "updated_command",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "output_raw",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "human_review_v2",
            kind: "message",
            T: HumanReview,
            opt: true
        },
        {
            no: 14,
            name: "effective_sandbox_policy",
            kind: "message",
            T: _agent_v1_sandbox_pb_js__WEBPACK_IMPORTED_MODULE_8__.SandboxPolicy,
            opt: true
        },
        {
            no: 15,
            name: "terminal_instance_id",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 16,
            name: "output_location",
            kind: "message",
            T: OutputLocation,
            opt: true
        },
        {
            no: 17,
            name: "terminal_instance_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 18,
            name: "background_shell_id",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
const RunTerminalCommandV2Stream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RunTerminalCommandV2Stream", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_background",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "parsing_result",
            kind: "message",
            T: ShellCommandParsingResult,
            opt: true
        },
        {
            no: 8,
            name: "idle_timeout_seconds",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 9,
            name: "requested_sandbox_policy",
            kind: "message",
            T: _agent_v1_sandbox_pb_js__WEBPACK_IMPORTED_MODULE_8__.SandboxPolicy,
            opt: true
        }
    ]);
const FetchRulesStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FetchRulesStream", ()=>[
        {
            no: 1,
            name: "rule_names",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const WebSearchParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.WebSearchParams", ()=>[
        {
            no: 1,
            name: "search_term",
            kind: "scalar",
            T: 9
        }
    ]);
const WebSearchResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.WebSearchResult", ()=>[
        {
            no: 1,
            name: "references",
            kind: "message",
            T: WebSearchResult_WebReference,
            repeated: true
        },
        {
            no: 2,
            name: "is_final",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 3,
            name: "rejected",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const WebSearchResult_WebReference = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.WebSearchResult.WebReference", ()=>[
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
        }
    ], {
    localName: "WebSearchResult_WebReference"
});
const WebSearchStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.WebSearchStream", ()=>[
        {
            no: 1,
            name: "search_term",
            kind: "scalar",
            T: 9
        }
    ]);
const MCPParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.MCPParams", ()=>[
        {
            no: 1,
            name: "tools",
            kind: "message",
            T: MCPParams_Tool,
            repeated: true
        },
        {
            no: 2,
            name: "file_output_threshold_bytes",
            kind: "scalar",
            T: 3,
            opt: true
        }
    ]);
const MCPParams_Tool = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.MCPParams.Tool", ()=>[
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
            name: "parameters",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "server_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "transcript_display",
            kind: "message",
            T: MCPParams_TranscriptDisplay,
            opt: true
        }
    ], {
    localName: "MCPParams_Tool"
});
const MCPParams_TranscriptDisplay = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.MCPParams.TranscriptDisplay", ()=>[
        {
            no: 1,
            name: "loading",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "success",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "MCPParams_TranscriptDisplay"
});
const MCPResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.MCPResult", ()=>[
        {
            no: 1,
            name: "selected_tool",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "result",
            kind: "scalar",
            T: 9
        }
    ]);
const MCPStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.MCPStream", ()=>[
        {
            no: 1,
            name: "tools",
            kind: "message",
            T: MCPParams_Tool,
            repeated: true
        }
    ]);
const ListMcpResourcesParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListMcpResourcesParams", ()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ListMcpResourcesResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListMcpResourcesResult", ()=>[
        {
            no: 1,
            name: "resources",
            kind: "message",
            T: ListMcpResourcesResult_MCPResource,
            repeated: true
        }
    ]);
const ListMcpResourcesResult_MCPResource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListMcpResourcesResult.MCPResource", ()=>[
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
            name: "mime_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "server",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "annotations",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ], {
    localName: "ListMcpResourcesResult_MCPResource"
});
const ReadMcpResourceParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadMcpResourceParams", ()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "download_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ReadMcpResourceResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadMcpResourceResult", ()=>[
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
            name: "mime_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "text",
            kind: "scalar",
            T: 9,
            oneof: "content"
        },
        {
            no: 6,
            name: "blob",
            kind: "scalar",
            T: 12,
            oneof: "content"
        },
        {
            no: 7,
            name: "annotations",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]);
const CallMcpToolParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CallMcpToolParams", ()=>[
        {
            no: 1,
            name: "server",
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
            name: "tool_args",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Struct
        }
    ]);
const CallMcpToolResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CallMcpToolResult", ()=>[
        {
            no: 1,
            name: "server",
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
            name: "result",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Struct
        }
    ]);
const GetMcpToolsParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetMcpToolsParams", ()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "tool_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "pattern",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const GetMcpToolsResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetMcpToolsResult", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "output_file_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SearchSymbolsParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SearchSymbolsParams", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]);
const SearchSymbolsResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SearchSymbolsResult", ()=>[
        {
            no: 1,
            name: "matches",
            kind: "message",
            T: SearchSymbolsResult_SymbolMatch,
            repeated: true
        },
        {
            no: 2,
            name: "rejected",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const SearchSymbolsResult_SymbolMatch = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SearchSymbolsResult.SymbolMatch", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "range",
            kind: "message",
            T: Range
        },
        {
            no: 4,
            name: "secondary_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "label_matches",
            kind: "message",
            T: MatchRange,
            repeated: true
        },
        {
            no: 6,
            name: "description_matches",
            kind: "message",
            T: MatchRange,
            repeated: true
        },
        {
            no: 7,
            name: "score",
            kind: "scalar",
            T: 1
        }
    ], {
    localName: "SearchSymbolsResult_SymbolMatch"
});
const SearchSymbolsStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SearchSymbolsStream", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]);
const BackgroundComposerFollowupParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BackgroundComposerFollowupParams", ()=>[
        {
            no: 1,
            name: "proposed_followup",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]);
const BackgroundComposerFollowupResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BackgroundComposerFollowupResult", ()=>[
        {
            no: 1,
            name: "proposed_followup",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_sent",
            kind: "scalar",
            T: 8
        }
    ]);
const BackgroundComposerFollowupStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BackgroundComposerFollowupStream", []);
const SummarizeCodeParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SummarizeCodeParams", ()=>[
        {
            no: 1,
            name: "target_files",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "focus_query",
            kind: "scalar",
            T: 9
        }
    ]);
const SummarizeCodeResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SummarizeCodeResult", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]);
const SummarizeCodeStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SummarizeCodeStream", []);
const KnowledgeBaseParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.KnowledgeBaseParams", ()=>[
        {
            no: 1,
            name: "knowledge_to_store",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "existing_knowledge_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "action",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const KnowledgeBaseResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.KnowledgeBaseResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "confirmation_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "id",
            kind: "scalar",
            T: 9
        }
    ]);
const KnowledgeBaseStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.KnowledgeBaseStream", []);
const FetchPullRequestParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FetchPullRequestParams", ()=>[
        {
            no: 1,
            name: "pull_number_or_commit_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "is_github",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const FetchPullRequestResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FetchPullRequestResult", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pr_number",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "body",
            kind: "scalar",
            T: 9
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
        },
        {
            no: 7,
            name: "diff",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "sha",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "external_link",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "comments",
            kind: "message",
            T: IssueComment,
            repeated: true
        },
        {
            no: 12,
            name: "labels",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 13,
            name: "assignees",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 14,
            name: "is_issue",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 15,
            name: "state",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 16,
            name: "prompt_connect_github",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const IssueComment = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.IssueComment", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "author",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "created_at",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "updated_at",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "author_association",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const FetchPullRequestStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FetchPullRequestStream", []);
const PullRequestReference = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PullRequestReference", ()=>[
        {
            no: 1,
            name: "sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "pr_number",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 6,
            name: "author",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "date",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "changed_files",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const DeepSearchParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DeepSearchParams", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ]);
const DeepSearchResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DeepSearchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "result",
            kind: "scalar",
            T: 9
        }
    ]);
const DeepSearchStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DeepSearchStream", []);
const CreateDiagramParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CreateDiagramParams", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
const CreateDiagramResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CreateDiagramResult", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const CreateDiagramStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CreateDiagramStream", []);
const FixLintsParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FixLintsParams", []);
const FixLintsResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FixLintsResult", ()=>[
        {
            no: 1,
            name: "file_results",
            kind: "message",
            T: FixLintsResult_FileResult,
            repeated: true
        }
    ]);
const FixLintsResult_FileResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FixLintsResult.FileResult", ()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff",
            kind: "message",
            T: EditFileResult_FileDiff
        },
        {
            no: 3,
            name: "is_applied",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "apply_failed",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "error",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "linter_errors",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LinterError,
            repeated: true
        }
    ], {
    localName: "FixLintsResult_FileResult"
});
const FixLintsStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FixLintsStream", []);
const ReadLintsParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadLintsParams", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const ReadLintsResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadLintsResult", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "linter_errors",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LinterError,
            repeated: true
        },
        {
            no: 3,
            name: "linter_errors_by_file",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LinterErrors,
            repeated: true
        }
    ]);
const ReadLintsStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadLintsStream", []);
const GotodefStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GotodefStream", []);
const TaskParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TaskParams", ()=>[
        {
            no: 1,
            name: "task_description",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "task_title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "async",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 3,
            name: "allowed_write_directories",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "model_override",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "max_mode_override",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 7,
            name: "default_expanded_while_running",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const TaskResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TaskResult", ()=>[
        {
            no: 1,
            name: "completed_task_result",
            kind: "message",
            T: TaskResult_CompletedTaskResult,
            oneof: "result"
        },
        {
            no: 2,
            name: "async_task_result",
            kind: "message",
            T: TaskResult_AsyncTaskResult,
            oneof: "result"
        }
    ]);
const TaskResult_CompletedTaskResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TaskResult.CompletedTaskResult", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_results",
            kind: "message",
            T: FixLintsResult_FileResult,
            repeated: true
        },
        {
            no: 3,
            name: "user_aborted",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "subagent_errored",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "TaskResult_CompletedTaskResult"
});
const TaskResult_AsyncTaskResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TaskResult.AsyncTaskResult", ()=>[
        {
            no: 1,
            name: "task_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "user_aborted",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "subagent_errored",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "TaskResult_AsyncTaskResult"
});
const TaskStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TaskStream", []);
const TaskV2Params = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TaskV2Params", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "subagent_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_agent_v1_subagents_pb_js__WEBPACK_IMPORTED_MODULE_10__.TaskMode)
        }
    ]);
const TaskV2Result = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TaskV2Result", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "is_background",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "cloud_agent_bc_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const TaskV2Stream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TaskV2Stream", []);
const RipgrepRawSearchParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepRawSearchParams", ()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "glob",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "output_mode",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "context_before",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 6,
            name: "context_after",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "context",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 8,
            name: "case_insensitive",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 9,
            name: "type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "head_limit",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 11,
            name: "multiline",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 12,
            name: "sort",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 13,
            name: "sort_ascending",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 14,
            name: "ignore_globs",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 15,
            name: "offset",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const RipgrepRawSearchResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepRawSearchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: RipgrepRawSearchSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: RipgrepRawSearchError,
            oneof: "result"
        }
    ]);
const RipgrepRawSearchError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepRawSearchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const RipgrepRawSearchSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepRawSearchSuccess", ()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "output_mode",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "workspace_results",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: RipgrepRawSearchUnionResult
            }
        },
        {
            no: 5,
            name: "active_editor_result",
            kind: "message",
            T: RipgrepRawSearchUnionResult,
            opt: true
        }
    ]);
const RipgrepRawSearchUnionResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepRawSearchUnionResult", ()=>[
        {
            no: 1,
            name: "count",
            kind: "message",
            T: RipgrepRawSearchCountResult,
            oneof: "result"
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: RipgrepRawSearchFilesResult,
            oneof: "result"
        },
        {
            no: 3,
            name: "content",
            kind: "message",
            T: RipgrepRawSearchContentResult,
            oneof: "result"
        }
    ]);
const RipgrepRawSearchCountResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepRawSearchCountResult", ()=>[
        {
            no: 1,
            name: "counts",
            kind: "message",
            T: RipgrepRawSearchFileCount,
            repeated: true
        },
        {
            no: 2,
            name: "total_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "total_matches",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "client_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "head_limit_applied",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "offset_applied",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 5,
            name: "ripgrep_truncated",
            kind: "scalar",
            T: 8
        }
    ]);
const RipgrepRawSearchFileCount = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepRawSearchFileCount", ()=>[
        {
            no: 1,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "is_dirty",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "is_out_of_workspace",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "absolute_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const RipgrepRawSearchFilesResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepRawSearchFilesResult", ()=>[
        {
            no: 1,
            name: "files",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "total_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "client_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "ripgrep_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "files_with_meta",
            kind: "message",
            T: RipgrepRawSearchFilesResult_FileEntry,
            repeated: true
        },
        {
            no: 6,
            name: "head_limit_applied",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "offset_applied",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const RipgrepRawSearchFilesResult_FileEntry = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepRawSearchFilesResult.FileEntry", ()=>[
        {
            no: 1,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_dirty",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "is_out_of_workspace",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "absolute_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "RipgrepRawSearchFilesResult_FileEntry"
});
const RipgrepRawSearchContentResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepRawSearchContentResult", ()=>[
        {
            no: 1,
            name: "matches",
            kind: "message",
            T: RipgrepRawSearchFileMatch,
            repeated: true
        },
        {
            no: 2,
            name: "total_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "total_matched_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "client_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "ripgrep_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "head_limit_applied",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "offset_applied",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const RipgrepRawSearchFileMatch = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepRawSearchFileMatch", ()=>[
        {
            no: 1,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "matches",
            kind: "message",
            T: RipgrepRawSearchContentMatch,
            repeated: true
        },
        {
            no: 3,
            name: "is_dirty",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "is_out_of_workspace",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "absolute_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const RipgrepRawSearchContentMatch = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepRawSearchContentMatch", ()=>[
        {
            no: 1,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "content_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "is_context_line",
            kind: "scalar",
            T: 8
        }
    ]);
const RipgrepRawSearchStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RipgrepRawSearchStream", ()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        }
    ]);
const AwaitTaskParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AwaitTaskParams", ()=>[
        {
            no: 1,
            name: "ids",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const AwaitTaskResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AwaitTaskResult", ()=>[
        {
            no: 1,
            name: "task_results",
            kind: "message",
            T: AwaitTaskResult_TaskResultItem,
            repeated: true
        },
        {
            no: 2,
            name: "missing_task_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const AwaitTaskResult_TaskResultItem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AwaitTaskResult.TaskResultItem", ()=>[
        {
            no: 1,
            name: "task_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: TaskResult_CompletedTaskResult
        }
    ], {
    localName: "AwaitTaskResult_TaskResultItem"
});
const AwaitTaskStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AwaitTaskStream", []);
const TodoReadParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TodoReadParams", ()=>[
        {
            no: 1,
            name: "read",
            kind: "scalar",
            T: 8
        }
    ]);
const TodoItem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TodoItem", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "dependencies",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const TodoReadResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TodoReadResult", ()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: TodoItem,
            repeated: true
        }
    ]);
const TodoReadStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TodoReadStream", []);
const TodoWriteParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TodoWriteParams", ()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: TodoItem,
            repeated: true
        },
        {
            no: 2,
            name: "merge",
            kind: "scalar",
            T: 8
        }
    ]);
const TodoWriteResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TodoWriteResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "ready_task_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "needs_in_progress_todos",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "final_todos",
            kind: "message",
            T: TodoItem,
            repeated: true
        },
        {
            no: 5,
            name: "initial_todos",
            kind: "message",
            T: TodoItem,
            repeated: true
        },
        {
            no: 6,
            name: "was_merge",
            kind: "scalar",
            T: 8
        }
    ]);
const TodoWriteStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TodoWriteStream", []);
const ListDirV2Params = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListDirV2Params", ()=>[
        {
            no: 1,
            name: "target_directory",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ignore_globs",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "should_enrich_terminal_metadata",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const ListDirV2Result = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListDirV2Result", ()=>[
        {
            no: 1,
            name: "directory_tree_root",
            kind: "message",
            T: ListDirV2Result_DirectoryTreeNode
        }
    ]);
const ListDirV2Result_DirectoryTreeNode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListDirV2Result.DirectoryTreeNode", ()=>[
        {
            no: 1,
            name: "abs_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "children_dirs",
            kind: "message",
            T: ListDirV2Result_DirectoryTreeNode,
            repeated: true
        },
        {
            no: 3,
            name: "children_files",
            kind: "message",
            T: ListDirV2Result_DirectoryTreeNode_File,
            repeated: true
        },
        {
            no: 4,
            name: "children_were_processed",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "full_subtree_extension_counts",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 5
            }
        },
        {
            no: 6,
            name: "num_files",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ListDirV2Result_DirectoryTreeNode"
});
const ListDirV2Result_DirectoryTreeNode_File = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListDirV2Result.DirectoryTreeNode.File", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "terminal_metadata",
            kind: "message",
            T: _agent_v1_ls_exec_pb_js__WEBPACK_IMPORTED_MODULE_11__.TerminalMetadata,
            opt: true
        }
    ], {
    localName: "ListDirV2Result_DirectoryTreeNode_File"
});
const ListDirV2Stream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListDirV2Stream", []);
const ReadFileV2Params = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadFileV2Params", ()=>[
        {
            no: 1,
            name: "target_file",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "offset",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "chars_limit",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "effective_uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "enable_line_numbers",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const ReadFileV2Result = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadFileV2Result", ()=>[
        {
            no: 1,
            name: "contents",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "num_characters_in_requested_range",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "offset_is_bigger_than_number_of_lines_in_file",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "total_lines_in_file",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 5,
            name: "matching_cursor_rules",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.CursorRule,
            repeated: true
        },
        {
            no: 6,
            name: "images",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.ImageProto,
            repeated: true
        }
    ]);
const ReadFileV2Stream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadFileV2Stream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: ReadFileV2Params,
            opt: true
        }
    ]);
const GlobFileSearchParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GlobFileSearchParams", ()=>[
        {
            no: 1,
            name: "target_directory",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "glob_pattern",
            kind: "scalar",
            T: 9
        }
    ]);
const GlobFileSearchResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GlobFileSearchResult", ()=>[
        {
            no: 1,
            name: "directories",
            kind: "message",
            T: GlobFileSearchResult_Directory,
            repeated: true
        }
    ]);
const GlobFileSearchResult_File = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GlobFileSearchResult.File", ()=>[
        {
            no: 1,
            name: "rel_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "GlobFileSearchResult_File"
});
const GlobFileSearchResult_Directory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GlobFileSearchResult.Directory", ()=>[
        {
            no: 1,
            name: "abs_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: GlobFileSearchResult_File,
            repeated: true
        },
        {
            no: 3,
            name: "total_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "ripgrep_truncated",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "GlobFileSearchResult_Directory"
});
const GlobFileSearchStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GlobFileSearchStream", []);
const ListMcpResourcesStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListMcpResourcesStream", []);
const CallMcpToolStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CallMcpToolStream", []);
const ReadMcpResourceStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadMcpResourceStream", []);
const Step = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.Step", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
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
            name: "instructions",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "prerequisites",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "sub_composer_id",
            kind: "scalar",
            T: 9
        }
    ]);
const PlanPhase = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PlanPhase", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "todos",
            kind: "message",
            T: TodoItem,
            repeated: true
        }
    ]);
const CreatePlanParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CreatePlanParams", ()=>[
        {
            no: 1,
            name: "plan",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "steps",
            kind: "message",
            T: Step,
            repeated: true
        },
        {
            no: 5,
            name: "old_str",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "new_str",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "todos",
            kind: "message",
            T: TodoItem,
            repeated: true
        },
        {
            no: 9,
            name: "overview",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "is_spec",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "is_project",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "phases",
            kind: "message",
            T: PlanPhase,
            repeated: true
        }
    ]);
const CreatePlanResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CreatePlanResult", ()=>[
        {
            no: 1,
            name: "accepted",
            kind: "message",
            T: CreatePlanResult_Accepted,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: CreatePlanResult_Rejected,
            oneof: "result"
        },
        {
            no: 3,
            name: "modified",
            kind: "message",
            T: CreatePlanResult_Modified,
            oneof: "result"
        },
        {
            no: 4,
            name: "plan_uri",
            kind: "scalar",
            T: 9
        }
    ]);
const CreatePlanResult_Accepted = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CreatePlanResult.Accepted", ()=>[
        {
            no: 1,
            name: "final_todos",
            kind: "message",
            T: TodoItem,
            repeated: true
        }
    ], {
    localName: "CreatePlanResult_Accepted"
});
const CreatePlanResult_Rejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CreatePlanResult.Rejected", [], {
    localName: "CreatePlanResult_Rejected"
});
const CreatePlanResult_Modified = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CreatePlanResult.Modified", ()=>[
        {
            no: 1,
            name: "new_plan",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "final_todos",
            kind: "message",
            T: TodoItem,
            repeated: true
        }
    ], {
    localName: "CreatePlanResult_Modified"
});
const CreatePlanStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CreatePlanStream", []);
const ReadProjectParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadProjectParams", []);
const ReadProjectResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadProjectResult", ()=>[
        {
            no: 1,
            name: "plan",
            kind: "scalar",
            T: 9
        }
    ]);
const ReadProjectStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReadProjectStream", []);
const UpdateProjectStringReplacement = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UpdateProjectStringReplacement", ()=>[
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
const UpdateProjectParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UpdateProjectParams", ()=>[
        {
            no: 1,
            name: "string_replacements",
            kind: "message",
            T: UpdateProjectStringReplacement,
            repeated: true
        },
        {
            no: 2,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]);
const UpdateProjectResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UpdateProjectResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "updated_plan",
            kind: "scalar",
            T: 9
        }
    ]);
const UpdateProjectStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UpdateProjectStream", []);
const AskQuestionParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AskQuestionParams", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "questions",
            kind: "message",
            T: AskQuestionParams_Question,
            repeated: true
        },
        {
            no: 3,
            name: "run_async",
            kind: "scalar",
            T: 8
        }
    ]);
const AskQuestionParams_Question = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AskQuestionParams.Question", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: AskQuestionParams_Option,
            repeated: true
        },
        {
            no: 4,
            name: "allow_multiple",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "AskQuestionParams_Question"
});
const AskQuestionParams_Option = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AskQuestionParams.Option", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AskQuestionParams_Option"
});
const AskQuestionResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AskQuestionResult", ()=>[
        {
            no: 1,
            name: "answers",
            kind: "message",
            T: AskQuestionResult_Answer,
            repeated: true
        },
        {
            no: 2,
            name: "is_async",
            kind: "scalar",
            T: 8
        }
    ]);
const AskQuestionResult_Answer = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AskQuestionResult.Answer", ()=>[
        {
            no: 1,
            name: "question_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "selected_option_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "freeform_text",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "AskQuestionResult_Answer"
});
const AskQuestionStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AskQuestionStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: AskQuestionParams
        }
    ]);
const SwitchModeParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwitchModeParams", ()=>[
        {
            no: 1,
            name: "from_mode_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "to_mode_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "explanation",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SwitchModeResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwitchModeResult", ()=>[
        {
            no: 1,
            name: "from_mode_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "to_mode_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "auto_approved",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "user_approved",
            kind: "scalar",
            T: 8
        }
    ]);
const SwitchModeStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwitchModeStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: SwitchModeParams
        }
    ]);
const ComputerUseParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComputerUseParams", ()=>[
        {
            no: 1,
            name: "actions",
            kind: "message",
            T: _agent_v1_computer_use_tool_pb_js__WEBPACK_IMPORTED_MODULE_12__.ComputerUseAction,
            repeated: true
        }
    ]);
const ComputerUseResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComputerUseResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: _agent_v1_computer_use_tool_pb_js__WEBPACK_IMPORTED_MODULE_12__.ComputerUseSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: _agent_v1_computer_use_tool_pb_js__WEBPACK_IMPORTED_MODULE_12__.ComputerUseError,
            oneof: "result"
        }
    ]);
const ComputerUseStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComputerUseStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: ComputerUseParams
        }
    ]);
const WriteShellStdinStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.WriteShellStdinStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: _agent_v1_background_shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_2__.WriteShellStdinArgs
        }
    ]);
const WebFetchParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.WebFetchParams", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]);
const WebFetchResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.WebFetchResult", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "markdown",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "error",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const WebFetchStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.WebFetchStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: WebFetchParams
        }
    ]);
const ReportBugfixResultsParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReportBugfixResultsParams", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "results",
            kind: "message",
            T: _agent_v1_report_bugfix_results_tool_pb_js__WEBPACK_IMPORTED_MODULE_13__.BugfixResultItem,
            repeated: true
        }
    ]);
const ReportBugfixResultsResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReportBugfixResultsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: _agent_v1_report_bugfix_results_tool_pb_js__WEBPACK_IMPORTED_MODULE_13__.ReportBugfixResultsSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: _agent_v1_report_bugfix_results_tool_pb_js__WEBPACK_IMPORTED_MODULE_13__.ReportBugfixResultsError,
            oneof: "result"
        }
    ]);
const ReportBugfixResultsStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReportBugfixResultsStream", ()=>[
        {
            no: 1,
            name: "params",
            kind: "message",
            T: ReportBugfixResultsParams
        }
    ]);
const McpAuthParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.McpAuthParams", ()=>[
        {
            no: 1,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        }
    ]);
const McpAuthResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.McpAuthResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
const McpAuthStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.McpAuthStream", []);
const ConnectScmParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConnectScmParams", ()=>[
        {
            no: 1,
            name: "github",
            kind: "message",
            T: ConnectScmGithub
        }
    ]);
const ConnectScmGithub = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConnectScmGithub", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: ConnectScmGithubRepository
        },
        {
            no: 2,
            name: "ghe_application",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ConnectScmGithubRepository = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConnectScmGithubRepository", ()=>[
        {
            no: 1,
            name: "owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo",
            kind: "scalar",
            T: 9
        }
    ]);
const ConnectScmResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConnectScmResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
const ConnectScmStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ConnectScmStream", []);
