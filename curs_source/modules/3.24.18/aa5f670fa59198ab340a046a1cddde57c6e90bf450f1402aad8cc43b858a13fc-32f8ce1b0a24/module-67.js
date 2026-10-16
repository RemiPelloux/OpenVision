require.r(exports);
require.d(exports, {
    ActiveBranchChange: ()=>ActiveBranchChange,
    AgentConversationTurn: ()=>AgentConversationTurn,
    AgentConversationTurnStructure: ()=>AgentConversationTurnStructure,
    AgentMode: ()=>AgentMode,
    AgentRunRequest: ()=>AgentRunRequest,
    AskQuestionInteractionQuery: ()=>AskQuestionInteractionQuery,
    AskQuestionInteractionResponse: ()=>AskQuestionInteractionResponse,
    AssistantMessage: ()=>AssistantMessage,
    AsyncAskQuestionCompletionAction: ()=>AsyncAskQuestionCompletionAction,
    BackgroundShellAction: ()=>BackgroundShellAction,
    BackgroundSubagentAction: ()=>BackgroundSubagentAction,
    BackgroundTaskCompletion: ()=>BackgroundTaskCompletion,
    BackgroundTaskCompletionAction: ()=>BackgroundTaskCompletionAction,
    BackgroundTaskKind: ()=>BackgroundTaskKind,
    BackgroundTaskNotificationContext: ()=>BackgroundTaskNotificationContext,
    BackgroundTaskStatus: ()=>BackgroundTaskStatus,
    CancelAction: ()=>CancelAction,
    CancelSubagentAction: ()=>CancelSubagentAction,
    ClientLlmGatewayCredential: ()=>ClientLlmGatewayCredential,
    CloudSubagentInheritedContext: ()=>CloudSubagentInheritedContext,
    CloudSubagentReference: ()=>CloudSubagentReference,
    CommunicateUpdateHistoryEntry: ()=>CommunicateUpdateHistoryEntry,
    CommunicateUpdateTurnState: ()=>CommunicateUpdateTurnState,
    ContextInjectionCancelled: ()=>ContextInjectionCancelled,
    ContextInjectionDelivered: ()=>ContextInjectionDelivered,
    ContextInjectionQueued: ()=>ContextInjectionQueued,
    ContextInjectionQueuedForNextTurn: ()=>ContextInjectionQueuedForNextTurn,
    ContextInjectionRejected: ()=>ContextInjectionRejected,
    ContextInjectionState: ()=>ContextInjectionState,
    ContextInjectionStateUpdate: ()=>ContextInjectionStateUpdate,
    ConversationAction: ()=>ConversationAction,
    ConversationHistory: ()=>ConversationHistory,
    ConversationHistoryAssistantContent: ()=>ConversationHistoryAssistantContent,
    ConversationHistoryAssistantMessage: ()=>ConversationHistoryAssistantMessage,
    ConversationHistoryImageContent: ()=>ConversationHistoryImageContent,
    ConversationHistoryMessage: ()=>ConversationHistoryMessage,
    ConversationHistoryReasoningContent: ()=>ConversationHistoryReasoningContent,
    ConversationHistoryRedactedReasoningContent: ()=>ConversationHistoryRedactedReasoningContent,
    ConversationHistoryTextContent: ()=>ConversationHistoryTextContent,
    ConversationHistoryToolCall: ()=>ConversationHistoryToolCall,
    ConversationHistoryToolMessage: ()=>ConversationHistoryToolMessage,
    ConversationHistoryToolResultContent: ()=>ConversationHistoryToolResultContent,
    ConversationHistoryUserContent: ()=>ConversationHistoryUserContent,
    ConversationHistoryUserMessage: ()=>ConversationHistoryUserMessage,
    ConversationPlan: ()=>ConversationPlan,
    ConversationState: ()=>ConversationState,
    ConversationStateStructure: ()=>ConversationStateStructure,
    ConversationStep: ()=>ConversationStep,
    ConversationSummary: ()=>ConversationSummary,
    ConversationSummaryArchive: ()=>ConversationSummaryArchive,
    ConversationTokenDetails: ()=>ConversationTokenDetails,
    ConversationTurn: ()=>ConversationTurn,
    ConversationTurnStructure: ()=>ConversationTurnStructure,
    CustomModeDescriptor: ()=>CustomModeDescriptor,
    CustomModeExitIntent: ()=>CustomModeExitIntent,
    CustomModeIntent: ()=>CustomModeIntent,
    CustomModeSource: ()=>CustomModeSource,
    ExecutePlanAction: ()=>ExecutePlanAction,
    ExecutePlanInfo: ()=>ExecutePlanInfo,
    FeedbackRequestCategory: ()=>FeedbackRequestCategory,
    FeedbackRequestCategoryGroup: ()=>FeedbackRequestCategoryGroup,
    FeedbackRequestUpdate: ()=>FeedbackRequestUpdate,
    FileState: ()=>FileState,
    FileStateStructure: ()=>FileStateStructure,
    GoalContinuationAction: ()=>GoalContinuationAction,
    GoalState: ()=>GoalState,
    GrokBotNudgeUpdate: ()=>GrokBotNudgeUpdate,
    HeartbeatUpdate: ()=>HeartbeatUpdate,
    InjectContextAction: ()=>InjectContextAction,
    InteractionQuery: ()=>InteractionQuery,
    InteractionResponse: ()=>InteractionResponse,
    InteractionResponseMetadata: ()=>InteractionResponseMetadata,
    InteractionUpdate: ()=>InteractionUpdate,
    InterruptedPendingToolCallResolution: ()=>InterruptedPendingToolCallResolution,
    InterruptedPendingToolCallResolutions: ()=>InterruptedPendingToolCallResolutions,
    LongReasoningReminderState: ()=>LongReasoningReminderState,
    MessageSender: ()=>MessageSender,
    MessageSender_Kind: ()=>MessageSender_Kind,
    ModelDetails: ()=>ModelDetails,
    NewCloudVmTarget: ()=>NewCloudVmTarget,
    PartialToolCallUpdate: ()=>PartialToolCallUpdate,
    PlanRegistryEntry: ()=>PlanRegistryEntry,
    PostRequestPromptUpdate: ()=>PostRequestPromptUpdate,
    PreFetchedBlob: ()=>PreFetchedBlob,
    PreparedTaskSubagent: ()=>PreparedTaskSubagent,
    ProjectDetails: ()=>ProjectDetails,
    ProjectSideChatDetails: ()=>ProjectSideChatDetails,
    ProjectSubagentDetails: ()=>ProjectSubagentDetails,
    PromptContextNode: ()=>PromptContextNode,
    PromptContextSourceRef: ()=>PromptContextSourceRef,
    PromptContextUsageTree: ()=>PromptContextUsageTree,
    PromptSuggestionUpdate: ()=>PromptSuggestionUpdate,
    PromptTokenBreakdownCategory: ()=>PromptTokenBreakdownCategory,
    PromptTokenBreakdownSnapshot: ()=>PromptTokenBreakdownSnapshot,
    ResponseComparisonCompleted: ()=>ResponseComparisonCompleted,
    ResponseComparisonDisplayOrder: ()=>ResponseComparisonDisplayOrder,
    ResponseComparisonSkipReason: ()=>ResponseComparisonSkipReason,
    ResponseComparisonSkipped: ()=>ResponseComparisonSkipped,
    ResponseComparisonStarted: ()=>ResponseComparisonStarted,
    ResponseComparisonTextDelta: ()=>ResponseComparisonTextDelta,
    ResponseComparisonUpdate: ()=>ResponseComparisonUpdate,
    ResumeAction: ()=>ResumeAction,
    RoutedModelUpdate: ()=>RoutedModelUpdate,
    SameMachineTarget: ()=>SameMachineTarget,
    SelfHostedPoolTarget: ()=>SelfHostedPoolTarget,
    SelfHostedWorkerLabel: ()=>SelfHostedWorkerLabel,
    SelfHostedWorkerTarget: ()=>SelfHostedWorkerTarget,
    SetActiveBranchArgs: ()=>SetActiveBranchArgs,
    SetActiveBranchError: ()=>SetActiveBranchError,
    SetActiveBranchResult: ()=>SetActiveBranchResult,
    SetActiveBranchSuccess: ()=>SetActiveBranchSuccess,
    SetActiveBranchToolCall: ()=>SetActiveBranchToolCall,
    ShellCommand: ()=>ShellCommand,
    ShellCommandAction: ()=>ShellCommandAction,
    ShellConversationTurn: ()=>ShellConversationTurn,
    ShellConversationTurnStructure: ()=>ShellConversationTurnStructure,
    ShellOutput: ()=>ShellOutput,
    ShellOutputDeltaUpdate: ()=>ShellOutputDeltaUpdate,
    SimulatedMsgReason: ()=>SimulatedMsgReason,
    StartPlanAction: ()=>StartPlanAction,
    StepCompletedUpdate: ()=>StepCompletedUpdate,
    StepStartedUpdate: ()=>StepStartedUpdate,
    StepTiming: ()=>StepTiming,
    SubagentCredentials: ()=>SubagentCredentials,
    SubagentDispatchStep: ()=>SubagentDispatchStep,
    SubagentDispatchTool: ()=>SubagentDispatchTool,
    SubagentModelOverride: ()=>SubagentModelOverride,
    SubagentPersistedState: ()=>SubagentPersistedState,
    SubagentRunState: ()=>SubagentRunState,
    SubagentRunStatus: ()=>SubagentRunStatus,
    SubmittedCustomMode: ()=>SubmittedCustomMode,
    SubmittedExitedCustomMode: ()=>SubmittedExitedCustomMode,
    SubscriptionEventDisplay: ()=>SubscriptionEventDisplay,
    SubscriptionNotificationAction: ()=>SubscriptionNotificationAction,
    SubscriptionSource: ()=>SubscriptionSource,
    SummarizeAction: ()=>SummarizeAction,
    SummaryCompletedUpdate: ()=>SummaryCompletedUpdate,
    SummaryStartedUpdate: ()=>SummaryStartedUpdate,
    SummaryUpdate: ()=>SummaryUpdate,
    SystemContextInjection: ()=>SystemContextInjection,
    TargetMachine: ()=>TargetMachine,
    TaskArgs: ()=>TaskArgs,
    TaskError: ()=>TaskError,
    TaskResult: ()=>TaskResult,
    TaskSuccess: ()=>TaskSuccess,
    TaskToolCall: ()=>TaskToolCall,
    TaskToolCallArgsProto: ()=>TaskToolCallArgsProto,
    TaskToolCallDelta: ()=>TaskToolCallDelta,
    TextDeltaUpdate: ()=>TextDeltaUpdate,
    ThinkingCompletedUpdate: ()=>ThinkingCompletedUpdate,
    ThinkingDeltaUpdate: ()=>ThinkingDeltaUpdate,
    ThinkingDetails: ()=>ThinkingDetails,
    ThinkingMessage: ()=>ThinkingMessage,
    ThinkingStyle: ()=>ThinkingStyle,
    TokenDeltaUpdate: ()=>TokenDeltaUpdate,
    ToolCall: ()=>ToolCall,
    ToolCallCompletedUpdate: ()=>ToolCallCompletedUpdate,
    ToolCallDelta: ()=>ToolCallDelta,
    ToolCallDeltaUpdate: ()=>ToolCallDeltaUpdate,
    ToolCallStartedUpdate: ()=>ToolCallStartedUpdate,
    ToolRequestsListedUpdate: ()=>ToolRequestsListedUpdate,
    TrackedGitRepo: ()=>TrackedGitRepo,
    TriggeringUserInfo: ()=>TriggeringUserInfo,
    TruncatedToolCall: ()=>TruncatedToolCall,
    TruncatedToolCallArgs: ()=>TruncatedToolCallArgs,
    TruncatedToolCallError: ()=>TruncatedToolCallError,
    TruncatedToolCallResult: ()=>TruncatedToolCallResult,
    TruncatedToolCallSuccess: ()=>TruncatedToolCallSuccess,
    TurnEndedUpdate: ()=>TurnEndedUpdate,
    TurnTelemetryState: ()=>TurnTelemetryState,
    UserContextInjection: ()=>UserContextInjection,
    UserDisplayInfo: ()=>UserDisplayInfo,
    UserMessage: ()=>UserMessage,
    UserMessageAction: ()=>UserMessageAction,
    UserMessageAppendedUpdate: ()=>UserMessageAppendedUpdate,
    UserMessage_SimulatedMessageMetadata: ()=>UserMessage_SimulatedMessageMetadata
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _subagents_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-68.js");
var _shell_tool_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-69.js");
var _delete_tool_pb_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-74.js");
var _glob_tool_pb_js__WEBPACK_IMPORTED_MODULE_4__ = require("./module-76.js");
var _grep_tool_pb_js__WEBPACK_IMPORTED_MODULE_5__ = require("./module-77.js");
var _read_tool_pb_js__WEBPACK_IMPORTED_MODULE_6__ = require("./module-79.js");
var _todo_tool_pb_js__WEBPACK_IMPORTED_MODULE_7__ = require("./module-81.js");
var _edit_tool_pb_js__WEBPACK_IMPORTED_MODULE_8__ = require("./module-82.js");
var _ls_tool_pb_js__WEBPACK_IMPORTED_MODULE_9__ = require("./module-83.js");
var _read_lints_tool_pb_js__WEBPACK_IMPORTED_MODULE_10__ = require("./module-85.js");
var _mcp_tool_pb_js__WEBPACK_IMPORTED_MODULE_11__ = require("./module-87.js");
var _semsearch_tool_pb_js__WEBPACK_IMPORTED_MODULE_12__ = require("./module-90.js");
var _create_plan_tool_pb_js__WEBPACK_IMPORTED_MODULE_13__ = require("./module-93.js");
var _web_search_tool_pb_js__WEBPACK_IMPORTED_MODULE_14__ = require("./module-94.js");
var _mcp_resource_tool_pb_js__WEBPACK_IMPORTED_MODULE_15__ = require("./module-95.js");
var _apply_agent_diff_tool_pb_js__WEBPACK_IMPORTED_MODULE_16__ = require("./module-96.js");
var _ask_question_tool_pb_js__WEBPACK_IMPORTED_MODULE_17__ = require("./module-97.js");
var _fetch_tool_pb_js__WEBPACK_IMPORTED_MODULE_18__ = require("./module-98.js");
var _switch_mode_tool_pb_js__WEBPACK_IMPORTED_MODULE_19__ = require("./module-100.js");
var _generate_image_tool_pb_js__WEBPACK_IMPORTED_MODULE_20__ = require("./module-101.js");
var _record_screen_tool_pb_js__WEBPACK_IMPORTED_MODULE_21__ = require("./module-102.js");
var _computer_use_tool_pb_js__WEBPACK_IMPORTED_MODULE_22__ = require("./module-104.js");
var _write_shell_stdin_tool_pb_js__WEBPACK_IMPORTED_MODULE_23__ = require("./module-105.js");
var _reflect_tool_pb_js__WEBPACK_IMPORTED_MODULE_24__ = require("./module-107.js");
var _setup_vm_environment_tool_pb_js__WEBPACK_IMPORTED_MODULE_25__ = require("./module-108.js");
var _start_grind_execution_tool_pb_js__WEBPACK_IMPORTED_MODULE_26__ = require("./module-109.js");
var _start_grind_planning_tool_pb_js__WEBPACK_IMPORTED_MODULE_27__ = require("./module-110.js");
var _web_fetch_tool_pb_js__WEBPACK_IMPORTED_MODULE_28__ = require("./module-111.js");
var _report_bugfix_results_tool_pb_js__WEBPACK_IMPORTED_MODULE_29__ = require("./module-112.js");
var _ai_attribution_tool_pb_js__WEBPACK_IMPORTED_MODULE_30__ = require("./module-113.js");
var _pr_management_tool_pb_js__WEBPACK_IMPORTED_MODULE_31__ = require("./module-114.js");
var _mcp_auth_tool_pb_js__WEBPACK_IMPORTED_MODULE_32__ = require("./module-115.js");
var _await_tool_pb_js__WEBPACK_IMPORTED_MODULE_33__ = require("./module-116.js");
var _blame_by_file_path_tool_pb_js__WEBPACK_IMPORTED_MODULE_34__ = require("./module-117.js");
var _get_mcp_tools_tool_pb_js__WEBPACK_IMPORTED_MODULE_35__ = require("./module-118.js");
var _report_bug_tool_pb_js__WEBPACK_IMPORTED_MODULE_36__ = require("./module-119.js");
var _communicate_update_tool_pb_js__WEBPACK_IMPORTED_MODULE_37__ = require("./module-120.js");
var _send_final_summary_tool_pb_js__WEBPACK_IMPORTED_MODULE_38__ = require("./module-121.js");
var _replace_env_tool_pb_js__WEBPACK_IMPORTED_MODULE_39__ = require("./module-122.js");
var _edit_pr_labels_tool_pb_js__WEBPACK_IMPORTED_MODULE_40__ = require("./module-123.js");
var _record_ci_investigation_findings_tool_pb_js__WEBPACK_IMPORTED_MODULE_41__ = require("./module-124.js");
var _send_message_tool_pb_js__WEBPACK_IMPORTED_MODULE_42__ = require("./module-125.js");
var _fetch_cloud_agent_data_tool_pb_js__WEBPACK_IMPORTED_MODULE_43__ = require("./module-126.js");
var _send_to_user_tool_pb_js__WEBPACK_IMPORTED_MODULE_44__ = require("./module-127.js");
var _pi_read_tool_pb_js__WEBPACK_IMPORTED_MODULE_45__ = require("./module-128.js");
var _pi_bash_tool_pb_js__WEBPACK_IMPORTED_MODULE_46__ = require("./module-130.js");
var _pi_edit_tool_pb_js__WEBPACK_IMPORTED_MODULE_47__ = require("./module-131.js");
var _pi_write_tool_pb_js__WEBPACK_IMPORTED_MODULE_48__ = require("./module-132.js");
var _pi_grep_tool_pb_js__WEBPACK_IMPORTED_MODULE_49__ = require("./module-133.js");
var _pi_find_tool_pb_js__WEBPACK_IMPORTED_MODULE_50__ = require("./module-134.js");
var _pi_ls_tool_pb_js__WEBPACK_IMPORTED_MODULE_51__ = require("./module-135.js");
var _connect_scm_tool_pb_js__WEBPACK_IMPORTED_MODULE_52__ = require("./module-136.js");
var _search_conversations_tool_pb_js__WEBPACK_IMPORTED_MODULE_53__ = require("./module-137.js");
var _goal_tool_pb_js__WEBPACK_IMPORTED_MODULE_54__ = require("./module-139.js");
var _coordinator_tools_pb_js__WEBPACK_IMPORTED_MODULE_55__ = require("./module-140.js");
var _cloud_canvas_tool_pb_js__WEBPACK_IMPORTED_MODULE_56__ = require("./module-141.js");
var _generate_video_tool_pb_js__WEBPACK_IMPORTED_MODULE_57__ = require("./module-142.js");
var _x_search_tool_pb_js__WEBPACK_IMPORTED_MODULE_58__ = require("./module-143.js");
var _hook_additional_context_pb_js__WEBPACK_IMPORTED_MODULE_59__ = require("./module-73.js");
var _request_context_exec_pb_js__WEBPACK_IMPORTED_MODULE_60__ = require("./module-144.js");
var _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_61__ = require("./module-70.js");
var _selected_context_pb_js__WEBPACK_IMPORTED_MODULE_62__ = require("./module-149.js");
var _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_63__ = require("./module-66.js");
var _mcp_pb_js__WEBPACK_IMPORTED_MODULE_64__ = require("./module-89.js");
var _system_prompt_pb_js__WEBPACK_IMPORTED_MODULE_65__ = require("./module-148.js");
const AgentMode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.AgentMode", [
    {
        no: 0,
        name: "AGENT_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_MODE_AGENT",
        localName: "AGENT"
    },
    {
        no: 2,
        name: "AGENT_MODE_ASK",
        localName: "ASK"
    },
    {
        no: 3,
        name: "AGENT_MODE_PLAN",
        localName: "PLAN"
    },
    {
        no: 4,
        name: "AGENT_MODE_DEBUG",
        localName: "DEBUG"
    },
    {
        no: 5,
        name: "AGENT_MODE_TRIAGE",
        localName: "TRIAGE"
    },
    {
        no: 7,
        name: "AGENT_MODE_MULTITASK",
        localName: "MULTITASK"
    },
    {
        no: 8,
        name: "AGENT_MODE_CUSTOM",
        localName: "CUSTOM"
    }
]);
const BackgroundTaskKind = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.BackgroundTaskKind", [
    {
        no: 0,
        name: "BACKGROUND_TASK_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_TASK_KIND_SHELL",
        localName: "SHELL"
    },
    {
        no: 2,
        name: "BACKGROUND_TASK_KIND_SUBAGENT",
        localName: "SUBAGENT"
    }
]);
const BackgroundTaskStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.BackgroundTaskStatus", [
    {
        no: 0,
        name: "BACKGROUND_TASK_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_TASK_STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 2,
        name: "BACKGROUND_TASK_STATUS_ERROR",
        localName: "ERROR"
    },
    {
        no: 3,
        name: "BACKGROUND_TASK_STATUS_ABORTED",
        localName: "ABORTED"
    }
]);
const BackgroundTaskNotificationContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.BackgroundTaskNotificationContext", [
    {
        no: 0,
        name: "BACKGROUND_TASK_NOTIFICATION_CONTEXT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_TASK_NOTIFICATION_CONTEXT_USER_DRIVEN_INTERACTIVE_CHILD",
        localName: "USER_DRIVEN_INTERACTIVE_CHILD"
    }
]);
const SubagentRunStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.SubagentRunStatus", [
    {
        no: 0,
        name: "SUBAGENT_RUN_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUBAGENT_RUN_STATUS_RUNNING",
        localName: "RUNNING"
    },
    {
        no: 2,
        name: "SUBAGENT_RUN_STATUS_BACKGROUNDED",
        localName: "BACKGROUNDED"
    },
    {
        no: 3,
        name: "SUBAGENT_RUN_STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 4,
        name: "SUBAGENT_RUN_STATUS_ERROR",
        localName: "ERROR"
    },
    {
        no: 5,
        name: "SUBAGENT_RUN_STATUS_ABORTED",
        localName: "ABORTED"
    }
]);
const SubagentDispatchTool = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.SubagentDispatchTool", [
    {
        no: 0,
        name: "SUBAGENT_DISPATCH_TOOL_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUBAGENT_DISPATCH_TOOL_TASK",
        localName: "TASK"
    },
    {
        no: 2,
        name: "SUBAGENT_DISPATCH_TOOL_CREATE_AGENT",
        localName: "CREATE_AGENT"
    },
    {
        no: 3,
        name: "SUBAGENT_DISPATCH_TOOL_SEND_TO_AGENT",
        localName: "SEND_TO_AGENT"
    }
]);
const CustomModeSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.CustomModeSource", [
    {
        no: 0,
        name: "CUSTOM_MODE_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CUSTOM_MODE_SOURCE_AGENT_SKILL",
        localName: "AGENT_SKILL"
    },
    {
        no: 2,
        name: "CUSTOM_MODE_SOURCE_PLUGIN_SKILL",
        localName: "PLUGIN_SKILL"
    },
    {
        no: 3,
        name: "CUSTOM_MODE_SOURCE_REPO_SKILL",
        localName: "REPO_SKILL"
    },
    {
        no: 4,
        name: "CUSTOM_MODE_SOURCE_MANAGED_SKILL",
        localName: "MANAGED_SKILL"
    }
]);
const SimulatedMsgReason = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.SimulatedMsgReason", [
    {
        no: 0,
        name: "SIMULATED_MSG_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SIMULATED_MSG_REASON_PLAN_EXECUTION",
        localName: "PLAN_EXECUTION"
    },
    {
        no: 2,
        name: "SIMULATED_MSG_REASON_COMMIT_REMINDER",
        localName: "COMMIT_REMINDER"
    },
    {
        no: 3,
        name: "SIMULATED_MSG_REASON_BACKGROUND_TASK_COMPLETION",
        localName: "BACKGROUND_TASK_COMPLETION"
    },
    {
        no: 4,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_COMMIT",
        localName: "DIFF_TAB_COMMIT"
    },
    {
        no: 5,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_COMMIT_AND_PUSH",
        localName: "DIFF_TAB_COMMIT_AND_PUSH"
    },
    {
        no: 6,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_PUSH",
        localName: "DIFF_TAB_PUSH"
    },
    {
        no: 7,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_CREATE_PR",
        localName: "DIFF_TAB_CREATE_PR"
    },
    {
        no: 8,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_FIX_MERGE_CONFLICTS",
        localName: "DIFF_TAB_FIX_MERGE_CONFLICTS"
    },
    {
        no: 9,
        name: "SIMULATED_MSG_REASON_USER_SENT_TO_SUBAGENT",
        localName: "USER_SENT_TO_SUBAGENT"
    },
    {
        no: 10,
        name: "SIMULATED_MSG_REASON_USER_INTERRUPTED_SUBAGENT",
        localName: "USER_INTERRUPTED_SUBAGENT"
    },
    {
        no: 11,
        name: "SIMULATED_MSG_REASON_USER_QUEUED_TO_SUBAGENT",
        localName: "USER_QUEUED_TO_SUBAGENT"
    },
    {
        no: 12,
        name: "SIMULATED_MSG_REASON_BABYSIT_PR_IN_CLOUD",
        localName: "BABYSIT_PR_IN_CLOUD"
    },
    {
        no: 13,
        name: "SIMULATED_MSG_REASON_CI_PANEL_INVESTIGATE_FAILURE",
        localName: "CI_PANEL_INVESTIGATE_FAILURE"
    },
    {
        no: 14,
        name: "SIMULATED_MSG_REASON_MULTITASK",
        localName: "MULTITASK"
    },
    {
        no: 15,
        name: "SIMULATED_MSG_REASON_BUILD_IN_PARALLEL",
        localName: "BUILD_IN_PARALLEL"
    },
    {
        no: 16,
        name: "SIMULATED_MSG_REASON_MULTITASK_SPLIT_PRS",
        localName: "MULTITASK_SPLIT_PRS"
    },
    {
        no: 17,
        name: "SIMULATED_MSG_REASON_APPLY_LOCALLY",
        localName: "APPLY_LOCALLY"
    },
    {
        no: 18,
        name: "SIMULATED_MSG_REASON_CHECKOUT_BRANCH",
        localName: "CHECKOUT_BRANCH"
    },
    {
        no: 19,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_UPDATE_BRANCH",
        localName: "DIFF_TAB_UPDATE_BRANCH"
    },
    {
        no: 20,
        name: "SIMULATED_MSG_REASON_PR_TAB_BUGBOT_FIX",
        localName: "PR_TAB_BUGBOT_FIX"
    },
    {
        no: 22,
        name: "SIMULATED_MSG_REASON_RUN_BUGBOT_REVIEW",
        localName: "RUN_BUGBOT_REVIEW"
    },
    {
        no: 23,
        name: "SIMULATED_MSG_REASON_RUN_SECURITY_REVIEW",
        localName: "RUN_SECURITY_REVIEW"
    },
    {
        no: 24,
        name: "SIMULATED_MSG_REASON_FSD_APPLY_FINDING",
        localName: "FSD_APPLY_FINDING"
    },
    {
        no: 25,
        name: "SIMULATED_MSG_REASON_FSD_UNDO_FINDING",
        localName: "FSD_UNDO_FINDING"
    },
    {
        no: 26,
        name: "SIMULATED_MSG_REASON_FSD_START",
        localName: "FSD_START"
    },
    {
        no: 27,
        name: "SIMULATED_MSG_REASON_FSD_PR_INTERRUPT",
        localName: "FSD_PR_INTERRUPT"
    },
    {
        no: 28,
        name: "SIMULATED_MSG_REASON_SUBSCRIPTION",
        localName: "SUBSCRIPTION"
    },
    {
        no: 29,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_CREATE_BRANCH",
        localName: "DIFF_TAB_CREATE_BRANCH"
    },
    {
        no: 30,
        name: "SIMULATED_MSG_REASON_AGENT_STORE_CONFLICT",
        localName: "AGENT_STORE_CONFLICT"
    },
    {
        no: 31,
        name: "SIMULATED_MSG_REASON_GOAL_CONTINUATION",
        localName: "GOAL_CONTINUATION"
    },
    {
        no: 32,
        name: "SIMULATED_MSG_REASON_PROJECT_KICKOFF",
        localName: "PROJECT_KICKOFF"
    },
    {
        no: 33,
        name: "SIMULATED_MSG_REASON_MARKDOWN_PROMPT_BUTTON",
        localName: "MARKDOWN_PROMPT_BUTTON"
    },
    {
        no: 34,
        name: "SIMULATED_MSG_REASON_USER_QUICK_ACTION",
        localName: "USER_QUICK_ACTION"
    },
    {
        no: 35,
        name: "SIMULATED_MSG_REASON_INTERACTION_RESPONSE",
        localName: "INTERACTION_RESPONSE"
    }
]);
const SubscriptionSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.SubscriptionSource", [
    {
        no: 0,
        name: "SUBSCRIPTION_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUBSCRIPTION_SOURCE_SLACK",
        localName: "SLACK"
    },
    {
        no: 2,
        name: "SUBSCRIPTION_SOURCE_GITHUB",
        localName: "GITHUB"
    },
    {
        no: 3,
        name: "SUBSCRIPTION_SOURCE_LINEAR",
        localName: "LINEAR"
    },
    {
        no: 4,
        name: "SUBSCRIPTION_SOURCE_ORIGIN",
        localName: "ORIGIN"
    },
    {
        no: 5,
        name: "SUBSCRIPTION_SOURCE_FACTORY",
        localName: "FACTORY"
    }
]);
const ThinkingStyle = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.ThinkingStyle", [
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
const ResponseComparisonDisplayOrder = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.ResponseComparisonDisplayOrder", [
    {
        no: 0,
        name: "RESPONSE_COMPARISON_DISPLAY_ORDER_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RESPONSE_COMPARISON_DISPLAY_ORDER_PARENT_FIRST",
        localName: "PARENT_FIRST"
    },
    {
        no: 2,
        name: "RESPONSE_COMPARISON_DISPLAY_ORDER_ALTERNATE_FIRST",
        localName: "ALTERNATE_FIRST"
    }
]);
const ResponseComparisonSkipReason = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.ResponseComparisonSkipReason", [
    {
        no: 0,
        name: "RESPONSE_COMPARISON_SKIP_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RESPONSE_COMPARISON_SKIP_REASON_ALTERNATE_TOOL_CALL",
        localName: "ALTERNATE_TOOL_CALL"
    },
    {
        no: 2,
        name: "RESPONSE_COMPARISON_SKIP_REASON_INFERENCE_ERROR",
        localName: "INFERENCE_ERROR"
    },
    {
        no: 3,
        name: "RESPONSE_COMPARISON_SKIP_REASON_TIMEOUT",
        localName: "TIMEOUT"
    },
    {
        no: 4,
        name: "RESPONSE_COMPARISON_SKIP_REASON_CANCELLED",
        localName: "CANCELLED"
    }
]);
const TaskArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TaskArgs", ()=>[
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
            kind: "message",
            T: _subagents_pb_js__WEBPACK_IMPORTED_MODULE_1__.SubagentType
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
            name: "resume",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "agent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "attachments",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 8,
            name: "mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_subagents_pb_js__WEBPACK_IMPORTED_MODULE_1__.TaskMode)
        },
        {
            no: 9,
            name: "responding_to_message_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 10,
            name: "environment",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_subagents_pb_js__WEBPACK_IMPORTED_MODULE_1__.SubagentExecutionEnvironment)
        },
        {
            no: 11,
            name: "machine",
            kind: "message",
            T: TargetMachine,
            opt: true
        }
    ]);
const TargetMachine = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TargetMachine", ()=>[
        {
            no: 1,
            name: "same_machine",
            kind: "message",
            T: SameMachineTarget,
            oneof: "machine"
        },
        {
            no: 2,
            name: "new_cloud_vm",
            kind: "message",
            T: NewCloudVmTarget,
            oneof: "machine"
        },
        {
            no: 3,
            name: "self_hosted_worker",
            kind: "message",
            T: SelfHostedWorkerTarget,
            oneof: "machine"
        },
        {
            no: 4,
            name: "self_hosted_pool",
            kind: "message",
            T: SelfHostedPoolTarget,
            oneof: "machine"
        }
    ]);
const SameMachineTarget = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SameMachineTarget", []);
const NewCloudVmTarget = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.NewCloudVmTarget", ()=>[
        {
            no: 1,
            name: "environment_build_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SelfHostedWorkerTarget = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelfHostedWorkerTarget", ()=>[
        {
            no: 1,
            name: "worker_id",
            kind: "scalar",
            T: 9
        }
    ]);
const SelfHostedPoolTarget = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelfHostedPoolTarget", ()=>[
        {
            no: 1,
            name: "pool",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "labels",
            kind: "message",
            T: SelfHostedWorkerLabel,
            repeated: true
        }
    ]);
const SelfHostedWorkerLabel = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelfHostedWorkerLabel", ()=>[
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
const TaskSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TaskSuccess", ()=>[
        {
            no: 1,
            name: "conversation_steps",
            kind: "message",
            T: ConversationStep,
            repeated: true
        },
        {
            no: 2,
            name: "agent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "is_background",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "duration_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 5,
            name: "result_suffix",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "background_reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_subagents_pb_js__WEBPACK_IMPORTED_MODULE_1__.SubagentBackgroundReason)
        },
        {
            no: 7,
            name: "transcript_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const TaskError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TaskError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const TaskResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TaskResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: TaskSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: TaskError,
            oneof: "result"
        }
    ]);
const TaskToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TaskToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: TaskArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: TaskResult
        },
        {
            no: 3,
            name: "cloud_agent_bc_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const TaskToolCallDelta = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TaskToolCallDelta", ()=>[
        {
            no: 1,
            name: "interaction_update",
            kind: "message",
            T: InteractionUpdate
        }
    ]);
const SetActiveBranchArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SetActiveBranchArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9
        }
    ]);
const SetActiveBranchSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SetActiveBranchSuccess", []);
const SetActiveBranchError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SetActiveBranchError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const SetActiveBranchResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SetActiveBranchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SetActiveBranchSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: SetActiveBranchError,
            oneof: "result"
        }
    ]);
const SetActiveBranchToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SetActiveBranchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: SetActiveBranchArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: SetActiveBranchResult
        }
    ]);
const ToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ToolCall", ()=>[
        {
            no: 1,
            name: "shell_tool_call",
            kind: "message",
            T: _shell_tool_pb_js__WEBPACK_IMPORTED_MODULE_2__.ShellToolCall,
            oneof: "tool"
        },
        {
            no: 3,
            name: "delete_tool_call",
            kind: "message",
            T: _delete_tool_pb_js__WEBPACK_IMPORTED_MODULE_3__.DeleteToolCall,
            oneof: "tool"
        },
        {
            no: 4,
            name: "glob_tool_call",
            kind: "message",
            T: _glob_tool_pb_js__WEBPACK_IMPORTED_MODULE_4__.GlobToolCall,
            oneof: "tool"
        },
        {
            no: 5,
            name: "grep_tool_call",
            kind: "message",
            T: _grep_tool_pb_js__WEBPACK_IMPORTED_MODULE_5__.GrepToolCall,
            oneof: "tool"
        },
        {
            no: 8,
            name: "read_tool_call",
            kind: "message",
            T: _read_tool_pb_js__WEBPACK_IMPORTED_MODULE_6__.ReadToolCall,
            oneof: "tool"
        },
        {
            no: 9,
            name: "update_todos_tool_call",
            kind: "message",
            T: _todo_tool_pb_js__WEBPACK_IMPORTED_MODULE_7__.UpdateTodosToolCall,
            oneof: "tool"
        },
        {
            no: 10,
            name: "read_todos_tool_call",
            kind: "message",
            T: _todo_tool_pb_js__WEBPACK_IMPORTED_MODULE_7__.ReadTodosToolCall,
            oneof: "tool"
        },
        {
            no: 12,
            name: "edit_tool_call",
            kind: "message",
            T: _edit_tool_pb_js__WEBPACK_IMPORTED_MODULE_8__.EditToolCall,
            oneof: "tool"
        },
        {
            no: 13,
            name: "ls_tool_call",
            kind: "message",
            T: _ls_tool_pb_js__WEBPACK_IMPORTED_MODULE_9__.LsToolCall,
            oneof: "tool"
        },
        {
            no: 14,
            name: "read_lints_tool_call",
            kind: "message",
            T: _read_lints_tool_pb_js__WEBPACK_IMPORTED_MODULE_10__.ReadLintsToolCall,
            oneof: "tool"
        },
        {
            no: 15,
            name: "mcp_tool_call",
            kind: "message",
            T: _mcp_tool_pb_js__WEBPACK_IMPORTED_MODULE_11__.McpToolCall,
            oneof: "tool"
        },
        {
            no: 16,
            name: "sem_search_tool_call",
            kind: "message",
            T: _semsearch_tool_pb_js__WEBPACK_IMPORTED_MODULE_12__.SemSearchToolCall,
            oneof: "tool"
        },
        {
            no: 17,
            name: "create_plan_tool_call",
            kind: "message",
            T: _create_plan_tool_pb_js__WEBPACK_IMPORTED_MODULE_13__.CreatePlanToolCall,
            oneof: "tool"
        },
        {
            no: 18,
            name: "web_search_tool_call",
            kind: "message",
            T: _web_search_tool_pb_js__WEBPACK_IMPORTED_MODULE_14__.WebSearchToolCall,
            oneof: "tool"
        },
        {
            no: 19,
            name: "task_tool_call",
            kind: "message",
            T: TaskToolCall,
            oneof: "tool"
        },
        {
            no: 20,
            name: "list_mcp_resources_tool_call",
            kind: "message",
            T: _mcp_resource_tool_pb_js__WEBPACK_IMPORTED_MODULE_15__.ListMcpResourcesToolCall,
            oneof: "tool"
        },
        {
            no: 21,
            name: "read_mcp_resource_tool_call",
            kind: "message",
            T: _mcp_resource_tool_pb_js__WEBPACK_IMPORTED_MODULE_15__.ReadMcpResourceToolCall,
            oneof: "tool"
        },
        {
            no: 22,
            name: "apply_agent_diff_tool_call",
            kind: "message",
            T: _apply_agent_diff_tool_pb_js__WEBPACK_IMPORTED_MODULE_16__.ApplyAgentDiffToolCall,
            oneof: "tool"
        },
        {
            no: 23,
            name: "ask_question_tool_call",
            kind: "message",
            T: _ask_question_tool_pb_js__WEBPACK_IMPORTED_MODULE_17__.AskQuestionToolCall,
            oneof: "tool"
        },
        {
            no: 24,
            name: "fetch_tool_call",
            kind: "message",
            T: _fetch_tool_pb_js__WEBPACK_IMPORTED_MODULE_18__.FetchToolCall,
            oneof: "tool"
        },
        {
            no: 25,
            name: "switch_mode_tool_call",
            kind: "message",
            T: _switch_mode_tool_pb_js__WEBPACK_IMPORTED_MODULE_19__.SwitchModeToolCall,
            oneof: "tool"
        },
        {
            no: 28,
            name: "generate_image_tool_call",
            kind: "message",
            T: _generate_image_tool_pb_js__WEBPACK_IMPORTED_MODULE_20__.GenerateImageToolCall,
            oneof: "tool"
        },
        {
            no: 29,
            name: "record_screen_tool_call",
            kind: "message",
            T: _record_screen_tool_pb_js__WEBPACK_IMPORTED_MODULE_21__.RecordScreenToolCall,
            oneof: "tool"
        },
        {
            no: 30,
            name: "computer_use_tool_call",
            kind: "message",
            T: _computer_use_tool_pb_js__WEBPACK_IMPORTED_MODULE_22__.ComputerUseToolCall,
            oneof: "tool"
        },
        {
            no: 31,
            name: "write_shell_stdin_tool_call",
            kind: "message",
            T: _write_shell_stdin_tool_pb_js__WEBPACK_IMPORTED_MODULE_23__.WriteShellStdinToolCall,
            oneof: "tool"
        },
        {
            no: 32,
            name: "reflect_tool_call",
            kind: "message",
            T: _reflect_tool_pb_js__WEBPACK_IMPORTED_MODULE_24__.ReflectToolCall,
            oneof: "tool"
        },
        {
            no: 33,
            name: "setup_vm_environment_tool_call",
            kind: "message",
            T: _setup_vm_environment_tool_pb_js__WEBPACK_IMPORTED_MODULE_25__.SetupVmEnvironmentToolCall,
            oneof: "tool"
        },
        {
            no: 34,
            name: "truncated_tool_call",
            kind: "message",
            T: TruncatedToolCall,
            oneof: "tool"
        },
        {
            no: 35,
            name: "start_grind_execution_tool_call",
            kind: "message",
            T: _start_grind_execution_tool_pb_js__WEBPACK_IMPORTED_MODULE_26__.StartGrindExecutionToolCall,
            oneof: "tool"
        },
        {
            no: 36,
            name: "start_grind_planning_tool_call",
            kind: "message",
            T: _start_grind_planning_tool_pb_js__WEBPACK_IMPORTED_MODULE_27__.StartGrindPlanningToolCall,
            oneof: "tool"
        },
        {
            no: 37,
            name: "web_fetch_tool_call",
            kind: "message",
            T: _web_fetch_tool_pb_js__WEBPACK_IMPORTED_MODULE_28__.WebFetchToolCall,
            oneof: "tool"
        },
        {
            no: 38,
            name: "report_bugfix_results_tool_call",
            kind: "message",
            T: _report_bugfix_results_tool_pb_js__WEBPACK_IMPORTED_MODULE_29__.ReportBugfixResultsToolCall,
            oneof: "tool"
        },
        {
            no: 39,
            name: "ai_attribution_tool_call",
            kind: "message",
            T: _ai_attribution_tool_pb_js__WEBPACK_IMPORTED_MODULE_30__.AiAttributionToolCall,
            oneof: "tool"
        },
        {
            no: 40,
            name: "pr_management_tool_call",
            kind: "message",
            T: _pr_management_tool_pb_js__WEBPACK_IMPORTED_MODULE_31__.PrManagementToolCall,
            oneof: "tool"
        },
        {
            no: 41,
            name: "mcp_auth_tool_call",
            kind: "message",
            T: _mcp_auth_tool_pb_js__WEBPACK_IMPORTED_MODULE_32__.McpAuthToolCall,
            oneof: "tool"
        },
        {
            no: 42,
            name: "await_tool_call",
            kind: "message",
            T: _await_tool_pb_js__WEBPACK_IMPORTED_MODULE_33__.AwaitToolCall,
            oneof: "tool"
        },
        {
            no: 43,
            name: "blame_by_file_path_tool_call",
            kind: "message",
            T: _blame_by_file_path_tool_pb_js__WEBPACK_IMPORTED_MODULE_34__.BlameByFilePathToolCall,
            oneof: "tool"
        },
        {
            no: 44,
            name: "get_mcp_tools_tool_call",
            kind: "message",
            T: _get_mcp_tools_tool_pb_js__WEBPACK_IMPORTED_MODULE_35__.GetMcpToolsToolCall,
            oneof: "tool"
        },
        {
            no: 45,
            name: "report_bug_tool_call",
            kind: "message",
            T: _report_bug_tool_pb_js__WEBPACK_IMPORTED_MODULE_36__.ReportBugToolCall,
            oneof: "tool"
        },
        {
            no: 46,
            name: "set_active_branch_tool_call",
            kind: "message",
            T: SetActiveBranchToolCall,
            oneof: "tool"
        },
        {
            no: 48,
            name: "communicate_update_tool_call",
            kind: "message",
            T: _communicate_update_tool_pb_js__WEBPACK_IMPORTED_MODULE_37__.CommunicateUpdateToolCall,
            oneof: "tool"
        },
        {
            no: 49,
            name: "send_final_summary_tool_call",
            kind: "message",
            T: _send_final_summary_tool_pb_js__WEBPACK_IMPORTED_MODULE_38__.SendFinalSummaryToolCall,
            oneof: "tool"
        },
        {
            no: 51,
            name: "replace_env_tool_call",
            kind: "message",
            T: _replace_env_tool_pb_js__WEBPACK_IMPORTED_MODULE_39__.ReplaceEnvToolCall,
            oneof: "tool"
        },
        {
            no: 52,
            name: "edit_pr_labels_tool_call",
            kind: "message",
            T: _edit_pr_labels_tool_pb_js__WEBPACK_IMPORTED_MODULE_40__.EditPrLabelsToolCall,
            oneof: "tool"
        },
        {
            no: 53,
            name: "record_ci_investigation_findings_tool_call",
            kind: "message",
            T: _record_ci_investigation_findings_tool_pb_js__WEBPACK_IMPORTED_MODULE_41__.RecordCiInvestigationFindingsToolCall,
            oneof: "tool"
        },
        {
            no: 55,
            name: "send_message_tool_call",
            kind: "message",
            T: _send_message_tool_pb_js__WEBPACK_IMPORTED_MODULE_42__.SendMessageToolCall,
            oneof: "tool"
        },
        {
            no: 56,
            name: "fetch_cloud_agent_data_tool_call",
            kind: "message",
            T: _fetch_cloud_agent_data_tool_pb_js__WEBPACK_IMPORTED_MODULE_43__.FetchCloudAgentDataToolCall,
            oneof: "tool"
        },
        {
            no: 58,
            name: "send_to_user_tool_call",
            kind: "message",
            T: _send_to_user_tool_pb_js__WEBPACK_IMPORTED_MODULE_44__.SendToUserToolCall,
            oneof: "tool"
        },
        {
            no: 61,
            name: "pi_read_tool_call",
            kind: "message",
            T: _pi_read_tool_pb_js__WEBPACK_IMPORTED_MODULE_45__.PiReadToolCall,
            oneof: "tool"
        },
        {
            no: 62,
            name: "pi_bash_tool_call",
            kind: "message",
            T: _pi_bash_tool_pb_js__WEBPACK_IMPORTED_MODULE_46__.PiBashToolCall,
            oneof: "tool"
        },
        {
            no: 63,
            name: "pi_edit_tool_call",
            kind: "message",
            T: _pi_edit_tool_pb_js__WEBPACK_IMPORTED_MODULE_47__.PiEditToolCall,
            oneof: "tool"
        },
        {
            no: 64,
            name: "pi_write_tool_call",
            kind: "message",
            T: _pi_write_tool_pb_js__WEBPACK_IMPORTED_MODULE_48__.PiWriteToolCall,
            oneof: "tool"
        },
        {
            no: 65,
            name: "pi_grep_tool_call",
            kind: "message",
            T: _pi_grep_tool_pb_js__WEBPACK_IMPORTED_MODULE_49__.PiGrepToolCall,
            oneof: "tool"
        },
        {
            no: 66,
            name: "pi_find_tool_call",
            kind: "message",
            T: _pi_find_tool_pb_js__WEBPACK_IMPORTED_MODULE_50__.PiFindToolCall,
            oneof: "tool"
        },
        {
            no: 67,
            name: "pi_ls_tool_call",
            kind: "message",
            T: _pi_ls_tool_pb_js__WEBPACK_IMPORTED_MODULE_51__.PiLsToolCall,
            oneof: "tool"
        },
        {
            no: 68,
            name: "connect_scm_tool_call",
            kind: "message",
            T: _connect_scm_tool_pb_js__WEBPACK_IMPORTED_MODULE_52__.ConnectScmToolCall,
            oneof: "tool"
        },
        {
            no: 69,
            name: "search_conversations_tool_call",
            kind: "message",
            T: _search_conversations_tool_pb_js__WEBPACK_IMPORTED_MODULE_53__.SearchConversationsToolCall,
            oneof: "tool"
        },
        {
            no: 70,
            name: "create_goal_tool_call",
            kind: "message",
            T: _goal_tool_pb_js__WEBPACK_IMPORTED_MODULE_54__.CreateGoalToolCall,
            oneof: "tool"
        },
        {
            no: 71,
            name: "update_goal_tool_call",
            kind: "message",
            T: _goal_tool_pb_js__WEBPACK_IMPORTED_MODULE_54__.UpdateGoalToolCall,
            oneof: "tool"
        },
        {
            no: 73,
            name: "get_agent_status_tool_call",
            kind: "message",
            T: _coordinator_tools_pb_js__WEBPACK_IMPORTED_MODULE_55__.GetAgentStatusToolCall,
            oneof: "tool"
        },
        {
            no: 74,
            name: "send_to_agent_tool_call",
            kind: "message",
            T: _coordinator_tools_pb_js__WEBPACK_IMPORTED_MODULE_55__.SendToAgentToolCall,
            oneof: "tool"
        },
        {
            no: 75,
            name: "read_agent_transcript_tool_call",
            kind: "message",
            T: _coordinator_tools_pb_js__WEBPACK_IMPORTED_MODULE_55__.ReadAgentTranscriptToolCall,
            oneof: "tool"
        },
        {
            no: 76,
            name: "create_agent_tool_call",
            kind: "message",
            T: _coordinator_tools_pb_js__WEBPACK_IMPORTED_MODULE_55__.CreateAgentToolCall,
            oneof: "tool"
        },
        {
            no: 77,
            name: "stop_agent_tool_call",
            kind: "message",
            T: _coordinator_tools_pb_js__WEBPACK_IMPORTED_MODULE_55__.StopAgentToolCall,
            oneof: "tool"
        },
        {
            no: 79,
            name: "write_canvas_tool_call",
            kind: "message",
            T: _cloud_canvas_tool_pb_js__WEBPACK_IMPORTED_MODULE_56__.WriteCanvasToolCall,
            oneof: "tool"
        },
        {
            no: 80,
            name: "read_canvas_tool_call",
            kind: "message",
            T: _cloud_canvas_tool_pb_js__WEBPACK_IMPORTED_MODULE_56__.ReadCanvasToolCall,
            oneof: "tool"
        },
        {
            no: 81,
            name: "generate_video_tool_call",
            kind: "message",
            T: _generate_video_tool_pb_js__WEBPACK_IMPORTED_MODULE_57__.GenerateVideoToolCall,
            oneof: "tool"
        },
        {
            no: 82,
            name: "x_search_tool_call",
            kind: "message",
            T: _x_search_tool_pb_js__WEBPACK_IMPORTED_MODULE_58__.XSearchToolCall,
            oneof: "tool"
        },
        {
            no: 54,
            name: "hook_additional_contexts",
            kind: "message",
            T: _hook_additional_context_pb_js__WEBPACK_IMPORTED_MODULE_59__.HookAdditionalContext,
            repeated: true
        },
        {
            no: 57,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 59,
            name: "started_at_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 60,
            name: "completed_at_ms",
            kind: "scalar",
            T: 4,
            opt: true
        }
    ]);
const TruncatedToolCallArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TruncatedToolCallArgs", []);
const TruncatedToolCallSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TruncatedToolCallSuccess", []);
const TruncatedToolCallError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TruncatedToolCallError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const TruncatedToolCallResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TruncatedToolCallResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: TruncatedToolCallSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: TruncatedToolCallError,
            oneof: "result"
        }
    ]);
const TruncatedToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TruncatedToolCall", ()=>[
        {
            no: 1,
            name: "original_step_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "args",
            kind: "message",
            T: TruncatedToolCallArgs
        },
        {
            no: 3,
            name: "result",
            kind: "message",
            T: TruncatedToolCallResult
        },
        {
            no: 4,
            name: "original_step_size_bytes",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "preview",
            kind: "message",
            T: ToolCall
        }
    ]);
const ToolCallDelta = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ToolCallDelta", ()=>[
        {
            no: 1,
            name: "shell_tool_call_delta",
            kind: "message",
            T: _shell_tool_pb_js__WEBPACK_IMPORTED_MODULE_2__.ShellToolCallDelta,
            oneof: "delta"
        },
        {
            no: 2,
            name: "task_tool_call_delta",
            kind: "message",
            T: TaskToolCallDelta,
            oneof: "delta"
        },
        {
            no: 3,
            name: "edit_tool_call_delta",
            kind: "message",
            T: _edit_tool_pb_js__WEBPACK_IMPORTED_MODULE_8__.EditToolCallDelta,
            oneof: "delta"
        },
        {
            no: 4,
            name: "replace_env_tool_call_delta",
            kind: "message",
            T: _replace_env_tool_pb_js__WEBPACK_IMPORTED_MODULE_39__.ReplaceEnvToolCallDelta,
            oneof: "delta"
        }
    ]);
const ConversationStep = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationStep", ()=>[
        {
            no: 1,
            name: "assistant_message",
            kind: "message",
            T: AssistantMessage,
            oneof: "message"
        },
        {
            no: 2,
            name: "tool_call",
            kind: "message",
            T: ToolCall,
            oneof: "message"
        },
        {
            no: 3,
            name: "thinking_message",
            kind: "message",
            T: ThinkingMessage,
            oneof: "message"
        }
    ]);
const ConversationAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationAction", ()=>[
        {
            no: 1,
            name: "user_message_action",
            kind: "message",
            T: UserMessageAction,
            oneof: "action"
        },
        {
            no: 2,
            name: "resume_action",
            kind: "message",
            T: ResumeAction,
            oneof: "action"
        },
        {
            no: 3,
            name: "cancel_action",
            kind: "message",
            T: CancelAction,
            oneof: "action"
        },
        {
            no: 4,
            name: "summarize_action",
            kind: "message",
            T: SummarizeAction,
            oneof: "action"
        },
        {
            no: 5,
            name: "shell_command_action",
            kind: "message",
            T: ShellCommandAction,
            oneof: "action"
        },
        {
            no: 6,
            name: "start_plan_action",
            kind: "message",
            T: StartPlanAction,
            oneof: "action"
        },
        {
            no: 7,
            name: "execute_plan_action",
            kind: "message",
            T: ExecutePlanAction,
            oneof: "action"
        },
        {
            no: 8,
            name: "async_ask_question_completion_action",
            kind: "message",
            T: AsyncAskQuestionCompletionAction,
            oneof: "action"
        },
        {
            no: 10,
            name: "cancel_subagent_action",
            kind: "message",
            T: CancelSubagentAction,
            oneof: "action"
        },
        {
            no: 12,
            name: "background_task_completion_action",
            kind: "message",
            T: BackgroundTaskCompletionAction,
            oneof: "action"
        },
        {
            no: 13,
            name: "background_shell_action",
            kind: "message",
            T: BackgroundShellAction,
            oneof: "action"
        },
        {
            no: 14,
            name: "background_subagent_action",
            kind: "message",
            T: BackgroundSubagentAction,
            oneof: "action"
        },
        {
            no: 16,
            name: "subscription_notification_action",
            kind: "message",
            T: SubscriptionNotificationAction,
            oneof: "action"
        },
        {
            no: 18,
            name: "goal_continuation_action",
            kind: "message",
            T: GoalContinuationAction,
            oneof: "action"
        },
        {
            no: 19,
            name: "inject_context_action",
            kind: "message",
            T: InjectContextAction,
            oneof: "action"
        },
        {
            no: 11,
            name: "triggering_auth_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 15,
            name: "triggering_user_info",
            kind: "message",
            T: TriggeringUserInfo,
            opt: true
        },
        {
            no: 17,
            name: "request_context_parts",
            kind: "message",
            T: _request_context_exec_pb_js__WEBPACK_IMPORTED_MODULE_60__.RequestContextPartReferences,
            opt: true
        }
    ]);
const TriggeringUserInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TriggeringUserInfo", ()=>[
        {
            no: 1,
            name: "auth_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "user_id",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const BackgroundTaskCompletionAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.BackgroundTaskCompletionAction", ()=>[
        {
            no: 1,
            name: "completions",
            kind: "message",
            T: BackgroundTaskCompletion,
            repeated: true
        },
        {
            no: 2,
            name: "system_reminder",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "request_context",
            kind: "message",
            T: _request_context_exec_pb_js__WEBPACK_IMPORTED_MODULE_60__.RequestContext
        }
    ]);
const BackgroundTaskCompletion = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.BackgroundTaskCompletion", ()=>[
        {
            no: 1,
            name: "task_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "kind",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(BackgroundTaskKind)
        },
        {
            no: 3,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(BackgroundTaskStatus)
        },
        {
            no: 4,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "output_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "thread_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_subagents_pb_js__WEBPACK_IMPORTED_MODULE_1__.BackgroundTaskCompletionReason)
        },
        {
            no: 9,
            name: "subagent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "notification_context",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(BackgroundTaskNotificationContext)
        },
        {
            no: 12,
            name: "completed_at_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 13,
            name: "record_only",
            kind: "scalar",
            T: 8
        }
    ]);
const SubagentRunState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentRunState", ()=>[
        {
            no: 1,
            name: "parent_tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "subagent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "environment",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_subagents_pb_js__WEBPACK_IMPORTED_MODULE_1__.SubagentExecutionEnvironment)
        },
        {
            no: 4,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SubagentRunStatus)
        },
        {
            no: 5,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "transcript_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "output_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "completed_timestamp_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 10,
            name: "completion_reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_subagents_pb_js__WEBPACK_IMPORTED_MODULE_1__.BackgroundTaskCompletionReason),
            opt: true
        }
    ]);
const SubagentDispatchStep = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentDispatchStep", ()=>[
        {
            no: 1,
            name: "step_index",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "tool",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SubagentDispatchTool)
        },
        {
            no: 4,
            name: "backgrounded",
            kind: "scalar",
            T: 8
        }
    ]);
const CancelSubagentAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CancelSubagentAction", ()=>[
        {
            no: 1,
            name: "subagent_id",
            kind: "scalar",
            T: 9
        }
    ]);
const BackgroundShellAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.BackgroundShellAction", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const BackgroundSubagentAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.BackgroundSubagentAction", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const InterruptedPendingToolCallResolution = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.InterruptedPendingToolCallResolution", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "shell_result",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_61__.ShellResult,
            oneof: "resolution"
        },
        {
            no: 3,
            name: "task_result",
            kind: "message",
            T: TaskResult,
            oneof: "resolution"
        }
    ]);
const InterruptedPendingToolCallResolutions = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.InterruptedPendingToolCallResolutions", ()=>[
        {
            no: 1,
            name: "resolutions",
            kind: "message",
            T: InterruptedPendingToolCallResolution,
            repeated: true
        }
    ]);
const ConversationHistory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationHistory", ()=>[
        {
            no: 1,
            name: "messages",
            kind: "message",
            T: ConversationHistoryMessage,
            repeated: true
        },
        {
            no: 2,
            name: "replace_user_info",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const ConversationHistoryMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationHistoryMessage", ()=>[
        {
            no: 1,
            name: "user",
            kind: "message",
            T: ConversationHistoryUserMessage,
            oneof: "message"
        },
        {
            no: 2,
            name: "assistant",
            kind: "message",
            T: ConversationHistoryAssistantMessage,
            oneof: "message"
        },
        {
            no: 3,
            name: "tool",
            kind: "message",
            T: ConversationHistoryToolMessage,
            oneof: "message"
        }
    ]);
const ConversationHistoryUserMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationHistoryUserMessage", ()=>[
        {
            no: 1,
            name: "content",
            kind: "message",
            T: ConversationHistoryUserContent,
            repeated: true
        }
    ]);
const ConversationHistoryUserContent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationHistoryUserContent", ()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: ConversationHistoryTextContent,
            oneof: "content"
        },
        {
            no: 2,
            name: "image",
            kind: "message",
            T: ConversationHistoryImageContent,
            oneof: "content"
        }
    ]);
const ConversationHistoryTextContent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationHistoryTextContent", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]);
const ConversationHistoryImageContent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationHistoryImageContent", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "mime_type",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ConversationHistoryAssistantMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationHistoryAssistantMessage", ()=>[
        {
            no: 1,
            name: "content",
            kind: "message",
            T: ConversationHistoryAssistantContent,
            repeated: true
        }
    ]);
const ConversationHistoryAssistantContent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationHistoryAssistantContent", ()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: ConversationHistoryTextContent,
            oneof: "content"
        },
        {
            no: 2,
            name: "reasoning",
            kind: "message",
            T: ConversationHistoryReasoningContent,
            oneof: "content"
        },
        {
            no: 3,
            name: "redacted_reasoning",
            kind: "message",
            T: ConversationHistoryRedactedReasoningContent,
            oneof: "content"
        },
        {
            no: 4,
            name: "tool_call",
            kind: "message",
            T: ConversationHistoryToolCall,
            oneof: "content"
        }
    ]);
const ConversationHistoryReasoningContent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationHistoryReasoningContent", ()=>[
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
            T: 9,
            opt: true
        }
    ]);
const ConversationHistoryRedactedReasoningContent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationHistoryRedactedReasoningContent", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9
        }
    ]);
const ConversationHistoryToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationHistoryToolCall", ()=>[
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
            name: "args_json",
            kind: "scalar",
            T: 9
        }
    ]);
const ConversationHistoryToolMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationHistoryToolMessage", ()=>[
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
            name: "content",
            kind: "message",
            T: ConversationHistoryToolResultContent,
            repeated: true
        },
        {
            no: 4,
            name: "is_error",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "hook_additional_contexts",
            kind: "message",
            T: _hook_additional_context_pb_js__WEBPACK_IMPORTED_MODULE_59__.HookAdditionalContext,
            repeated: true
        }
    ]);
const ConversationHistoryToolResultContent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationHistoryToolResultContent", ()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: ConversationHistoryTextContent,
            oneof: "content"
        },
        {
            no: 2,
            name: "image",
            kind: "message",
            T: ConversationHistoryImageContent,
            oneof: "content"
        }
    ]);
const UserMessageAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.UserMessageAction", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "message",
            T: UserMessage
        },
        {
            no: 2,
            name: "request_context",
            kind: "message",
            T: _request_context_exec_pb_js__WEBPACK_IMPORTED_MODULE_60__.RequestContext
        },
        {
            no: 3,
            name: "send_to_interaction_listener",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "prepend_user_messages",
            kind: "message",
            T: UserMessage,
            repeated: true
        },
        {
            no: 6,
            name: "interrupted_pending_tool_call_resolutions",
            kind: "message",
            T: InterruptedPendingToolCallResolutions,
            opt: true
        },
        {
            no: 7,
            name: "conversation_history",
            kind: "message",
            T: ConversationHistory,
            opt: true
        },
        {
            no: 8,
            name: "trailing_conversation_history",
            kind: "message",
            T: ConversationHistory,
            opt: true
        }
    ]);
const SubscriptionNotificationAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubscriptionNotificationAction", ()=>[
        {
            no: 1,
            name: "notifications",
            kind: "message",
            T: UserMessage,
            repeated: true
        },
        {
            no: 2,
            name: "request_context",
            kind: "message",
            T: _request_context_exec_pb_js__WEBPACK_IMPORTED_MODULE_60__.RequestContext
        },
        {
            no: 3,
            name: "send_to_interaction_listener",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const GoalContinuationAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GoalContinuationAction", []);
const InjectContextAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.InjectContextAction", ()=>[
        {
            no: 1,
            name: "injection_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "expected_run_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "user_context",
            kind: "message",
            T: UserContextInjection,
            oneof: "payload"
        },
        {
            no: 4,
            name: "system_context",
            kind: "message",
            T: SystemContextInjection,
            oneof: "payload"
        }
    ]);
const UserContextInjection = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.UserContextInjection", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "message",
            T: UserMessage
        },
        {
            no: 2,
            name: "request_context",
            kind: "message",
            T: _request_context_exec_pb_js__WEBPACK_IMPORTED_MODULE_60__.RequestContext
        }
    ]);
const SystemContextInjection = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SystemContextInjection", ()=>[
        {
            no: 1,
            name: "producer",
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
const ContextInjectionState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ContextInjectionState", ()=>[
        {
            no: 1,
            name: "queued",
            kind: "message",
            T: ContextInjectionQueued,
            oneof: "state"
        },
        {
            no: 2,
            name: "delivered",
            kind: "message",
            T: ContextInjectionDelivered,
            oneof: "state"
        },
        {
            no: 3,
            name: "queued_for_next_turn",
            kind: "message",
            T: ContextInjectionQueuedForNextTurn,
            oneof: "state"
        },
        {
            no: 4,
            name: "cancelled",
            kind: "message",
            T: ContextInjectionCancelled,
            oneof: "state"
        },
        {
            no: 5,
            name: "rejected",
            kind: "message",
            T: ContextInjectionRejected,
            oneof: "state"
        }
    ]);
const ContextInjectionQueued = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ContextInjectionQueued", []);
const ContextInjectionDelivered = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ContextInjectionDelivered", ()=>[
        {
            no: 1,
            name: "step",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "delivery_batch_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "delivered_at_ms",
            kind: "scalar",
            T: 3
        }
    ]);
const ContextInjectionQueuedForNextTurn = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ContextInjectionQueuedForNextTurn", []);
const ContextInjectionCancelled = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ContextInjectionCancelled", []);
const ContextInjectionRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ContextInjectionRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
const SubmittedCustomMode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubmittedCustomMode", ()=>[
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
        },
        {
            no: 5,
            name: "source",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CustomModeSource)
        },
        {
            no: 6,
            name: "source_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "source_hash",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "managed_skill_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "plugin_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "plugin_snapshot_token",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const CustomModeDescriptor = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CustomModeDescriptor", ()=>[
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
            name: "icon",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "color",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "source",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CustomModeSource)
        },
        {
            no: 7,
            name: "source_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "source_hash",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "managed_skill_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "plugin_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "plugin_snapshot_token",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SubmittedExitedCustomMode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubmittedExitedCustomMode", ()=>[
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
    ]);
const CustomModeExitIntent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CustomModeExitIntent", ()=>[
        {
            no: 1,
            name: "next_mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AgentMode)
        },
        {
            no: 2,
            name: "exited_mode",
            kind: "message",
            T: SubmittedExitedCustomMode
        }
    ]);
const CustomModeIntent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CustomModeIntent", ()=>[
        {
            no: 1,
            name: "enter",
            kind: "message",
            T: SubmittedCustomMode,
            oneof: "intent"
        },
        {
            no: 2,
            name: "exit",
            kind: "message",
            T: CustomModeExitIntent,
            oneof: "intent"
        }
    ]);
const CancelAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CancelAction", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "interrupted_pending_tool_call_resolutions",
            kind: "message",
            T: InterruptedPendingToolCallResolutions,
            opt: true
        }
    ]);
const ResumeAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ResumeAction", ()=>[
        {
            no: 2,
            name: "request_context",
            kind: "message",
            T: _request_context_exec_pb_js__WEBPACK_IMPORTED_MODULE_60__.RequestContext
        }
    ]);
const AsyncAskQuestionCompletionAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AsyncAskQuestionCompletionAction", ()=>[
        {
            no: 1,
            name: "original_tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "original_args",
            kind: "message",
            T: _ask_question_tool_pb_js__WEBPACK_IMPORTED_MODULE_17__.AskQuestionArgs
        },
        {
            no: 3,
            name: "result",
            kind: "message",
            T: _ask_question_tool_pb_js__WEBPACK_IMPORTED_MODULE_17__.AskQuestionResult
        },
        {
            no: 4,
            name: "request_context",
            kind: "message",
            T: _request_context_exec_pb_js__WEBPACK_IMPORTED_MODULE_60__.RequestContext
        }
    ]);
const SummarizeAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SummarizeAction", []);
const ShellCommandAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellCommandAction", ()=>[
        {
            no: 1,
            name: "shell_command",
            kind: "message",
            T: ShellCommand
        },
        {
            no: 2,
            name: "exec_id",
            kind: "scalar",
            T: 9
        }
    ]);
const StartPlanAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StartPlanAction", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "message",
            T: UserMessage
        },
        {
            no: 2,
            name: "request_context",
            kind: "message",
            T: _request_context_exec_pb_js__WEBPACK_IMPORTED_MODULE_60__.RequestContext
        },
        {
            no: 3,
            name: "is_spec",
            kind: "scalar",
            T: 8
        }
    ]);
const ExecutePlanAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ExecutePlanAction", ()=>[
        {
            no: 1,
            name: "request_context",
            kind: "message",
            T: _request_context_exec_pb_js__WEBPACK_IMPORTED_MODULE_60__.RequestContext
        },
        {
            no: 2,
            name: "plan",
            kind: "message",
            T: ConversationPlan,
            opt: true
        },
        {
            no: 3,
            name: "plan_file_uri",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "plan_file_content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "execution_mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AgentMode)
        },
        {
            no: 6,
            name: "kickoff_message_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "plan_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "plan_file_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const InteractionResponseMetadata = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.InteractionResponseMetadata", ()=>[
        {
            no: 1,
            name: "interaction_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "response",
            kind: "message",
            T: InteractionResponse,
            opt: true
        },
        {
            no: 3,
            name: "skipped_question_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const SubscriptionEventDisplay = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubscriptionEventDisplay", ()=>[
        {
            no: 1,
            name: "display_label",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "resource_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "subscription_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const UserDisplayInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.UserDisplayInfo", ()=>[
        {
            no: 1,
            name: "user_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "display_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "email",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "profile_picture_url",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ExecutePlanInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ExecutePlanInfo", ()=>[
        {
            no: 1,
            name: "plan_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "plan_title",
            kind: "scalar",
            T: 9
        }
    ]);
const ProjectDetails = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ProjectDetails", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "subagent",
            kind: "message",
            T: ProjectSubagentDetails,
            opt: true
        },
        {
            no: 3,
            name: "side_chat",
            kind: "message",
            T: ProjectSideChatDetails,
            opt: true
        },
        {
            no: 4,
            name: "init_description",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ProjectSubagentDetails = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ProjectSubagentDetails", ()=>[
        {
            no: 2,
            name: "store_dir",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ProjectSideChatDetails = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ProjectSideChatDetails", ()=>[
        {
            no: 1,
            name: "store_dir",
            kind: "scalar",
            T: 9
        }
    ]);
const UserMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.UserMessage", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "selected_context",
            kind: "message",
            T: _selected_context_pb_js__WEBPACK_IMPORTED_MODULE_62__.SelectedContext,
            opt: true
        },
        {
            no: 4,
            name: "mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AgentMode)
        },
        {
            no: 5,
            name: "is_simulated_msg",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "best_of_n_group_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "try_use_best_of_n_promotion",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "rich_text",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "simulated_msg_reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SimulatedMsgReason),
            opt: true
        },
        {
            no: 10,
            name: "conversation_state_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 11,
            name: "subagent_system_reminder",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 13,
            name: "triggering_user_info",
            kind: "message",
            T: TriggeringUserInfo,
            opt: true
        },
        {
            no: 14,
            name: "execute_plan_info",
            kind: "message",
            T: ExecutePlanInfo,
            opt: true
        },
        {
            no: 15,
            name: "simulated_message_metadata",
            kind: "message",
            T: UserMessage_SimulatedMessageMetadata,
            opt: true
        },
        {
            no: 16,
            name: "prompt_reference_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 17,
            name: "thread_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 18,
            name: "text_blob_id",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 19,
            name: "rich_text_blob_id",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 21,
            name: "hook_additional_contexts",
            kind: "message",
            T: _hook_additional_context_pb_js__WEBPACK_IMPORTED_MODULE_59__.HookAdditionalContext,
            repeated: true
        },
        {
            no: 22,
            name: "custom_mode_intent",
            kind: "message",
            T: CustomModeIntent,
            opt: true
        },
        {
            no: 23,
            name: "project_details",
            kind: "message",
            T: ProjectDetails,
            opt: true
        },
        {
            no: 24,
            name: "turn_steer",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 25,
            name: "started_at_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 26,
            name: "completed_at_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 27,
            name: "sent_by_agent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 28,
            name: "sent_by_voice_call",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 29,
            name: "sender",
            kind: "message",
            T: MessageSender,
            opt: true
        },
        {
            no: 30,
            name: "forked_context",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const UserMessage_SimulatedMessageMetadata = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.UserMessage.SimulatedMessageMetadata", ()=>[
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SubscriptionSource),
            opt: true
        },
        {
            no: 6,
            name: "subscription_event_display",
            kind: "message",
            T: SubscriptionEventDisplay,
            opt: true
        },
        {
            no: 7,
            name: "interaction_response",
            kind: "message",
            T: InteractionResponseMetadata,
            opt: true
        }
    ], {
    localName: "UserMessage_SimulatedMessageMetadata"
});
const MessageSender = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.MessageSender", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(MessageSender_Kind)
        },
        {
            no: 2,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "display_name",
            kind: "scalar",
            T: 9
        }
    ]);
const MessageSender_Kind = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.MessageSender.Kind", [
    {
        no: 0,
        name: "KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "KIND_AGENT",
        localName: "AGENT"
    },
    {
        no: 2,
        name: "KIND_VOICE_CALL",
        localName: "VOICE_CALL"
    },
    {
        no: 3,
        name: "KIND_MAIN_BOT",
        localName: "MAIN_BOT"
    },
    {
        no: 4,
        name: "KIND_PROJECT",
        localName: "PROJECT"
    }
]);
const AssistantMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AssistantMessage", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "started_at_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 3,
            name: "completed_at_ms",
            kind: "scalar",
            T: 4,
            opt: true
        }
    ]);
const ThinkingMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ThinkingMessage", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "duration_ms",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "started_at_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 4,
            name: "completed_at_ms",
            kind: "scalar",
            T: 4,
            opt: true
        }
    ]);
const ShellCommand = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellCommand", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        }
    ]);
const ShellOutput = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellOutput", ()=>[
        {
            no: 1,
            name: "stdout",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "stderr",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "exit_code",
            kind: "scalar",
            T: 5
        }
    ]);
const ConversationTurn = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationTurn", ()=>[
        {
            no: 1,
            name: "agent_conversation_turn",
            kind: "message",
            T: AgentConversationTurn,
            oneof: "turn"
        },
        {
            no: 2,
            name: "shell_conversation_turn",
            kind: "message",
            T: ShellConversationTurn,
            oneof: "turn"
        }
    ]);
const ConversationPlan = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationPlan", ()=>[
        {
            no: 1,
            name: "plan",
            kind: "scalar",
            T: 9
        }
    ]);
const PlanRegistryEntry = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PlanRegistryEntry", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
const GoalState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GoalState", ()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "goal_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "objective",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_goal_tool_pb_js__WEBPACK_IMPORTED_MODULE_54__.GoalStatus)
        },
        {
            no: 5,
            name: "idle_continuations_without_tool_calls",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "active_duration_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 7,
            name: "last_accrued_at_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 8,
            name: "continuation_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 9,
            name: "agent_session_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ConversationTurnStructure = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationTurnStructure", ()=>[
        {
            no: 1,
            name: "agent_conversation_turn",
            kind: "message",
            T: AgentConversationTurnStructure,
            oneof: "turn"
        },
        {
            no: 2,
            name: "shell_conversation_turn",
            kind: "message",
            T: ShellConversationTurnStructure,
            oneof: "turn"
        }
    ]);
const AgentConversationTurn = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AgentConversationTurn", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "message",
            T: UserMessage
        },
        {
            no: 2,
            name: "steps",
            kind: "message",
            T: ConversationStep,
            repeated: true
        },
        {
            no: 3,
            name: "request_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const AgentConversationTurnStructure = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AgentConversationTurnStructure", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "steps",
            kind: "scalar",
            T: 12,
            repeated: true
        },
        {
            no: 3,
            name: "request_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "encrypted_model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "dynamic_tool_count",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 6,
            name: "send_message_step_indices",
            kind: "scalar",
            T: 13,
            repeated: true
        },
        {
            no: 7,
            name: "routed_model_display_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "subagent_dispatch_steps",
            kind: "message",
            T: SubagentDispatchStep,
            repeated: true
        },
        {
            no: 9,
            name: "dynamic_tool_names",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 10,
            name: "user_message_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "long_reasoning_reminder",
            kind: "message",
            T: LongReasoningReminderState,
            opt: true
        },
        {
            no: 12,
            name: "long_reasoning_reminder_exposure_logged",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "assistant_text_step_indices",
            kind: "scalar",
            T: 13,
            repeated: true
        },
        {
            no: 14,
            name: "assistant_text_steps_recorded",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const LongReasoningReminderState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.LongReasoningReminderState", ()=>[
        {
            no: 1,
            name: "remaining_delay_calls",
            kind: "scalar",
            T: 13
        }
    ]);
const ShellConversationTurn = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellConversationTurn", ()=>[
        {
            no: 1,
            name: "shell_command",
            kind: "message",
            T: ShellCommand
        },
        {
            no: 2,
            name: "shell_output",
            kind: "message",
            T: ShellOutput
        }
    ]);
const ShellConversationTurnStructure = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellConversationTurnStructure", ()=>[
        {
            no: 1,
            name: "shell_command",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "shell_output",
            kind: "scalar",
            T: 12
        }
    ]);
const ConversationSummary = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationSummary", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]);
const ConversationSummaryArchive = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationSummaryArchive", ()=>[
        {
            no: 1,
            name: "summarized_messages",
            kind: "scalar",
            T: 12,
            repeated: true
        },
        {
            no: 2,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "window_tail",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "summary_message",
            kind: "scalar",
            T: 12
        }
    ]);
const PromptTokenBreakdownCategory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PromptTokenBreakdownCategory", ()=>[
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
        },
        {
            no: 3,
            name: "estimated_tokens",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "character_count",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
const PromptTokenBreakdownSnapshot = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PromptTokenBreakdownSnapshot", ()=>[
        {
            no: 1,
            name: "total_used_tokens",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "max_tokens",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "categories",
            kind: "message",
            T: PromptTokenBreakdownCategory,
            repeated: true
        }
    ]);
const PromptContextSourceRef = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PromptContextSourceRef", ()=>[
        {
            no: 1,
            name: "source_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message_index",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "content_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "start_offset",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "end_offset",
            kind: "scalar",
            T: 13
        }
    ]);
const PromptContextNode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PromptContextNode", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "parent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "category_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "estimated_tokens",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "character_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 9,
            name: "content_available",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "source",
            kind: "message",
            T: PromptContextSourceRef,
            opt: true
        },
        {
            no: 12,
            name: "inline_content",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const PromptContextUsageTree = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PromptContextUsageTree", ()=>[
        {
            no: 1,
            name: "schema_version",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "nodes",
            kind: "message",
            T: PromptContextNode,
            repeated: true
        }
    ]);
const ConversationTokenDetails = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationTokenDetails", ()=>[
        {
            no: 1,
            name: "used_tokens",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "max_tokens",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "breakdown",
            kind: "message",
            T: PromptTokenBreakdownSnapshot,
            opt: true
        },
        {
            no: 4,
            name: "prompt_context_usage_tree",
            kind: "message",
            T: PromptContextUsageTree,
            opt: true
        }
    ]);
const FileState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.FileState", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "initial_content",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const FileStateStructure = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.FileStateStructure", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 2,
            name: "initial_content",
            kind: "scalar",
            T: 12,
            opt: true
        }
    ]);
const StepTiming = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StepTiming", ()=>[
        {
            no: 1,
            name: "duration_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "timestamp_ms",
            kind: "scalar",
            T: 4
        }
    ]);
const TurnTelemetryState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TurnTelemetryState", ()=>[
        {
            no: 1,
            name: "completed_turn_count_capped",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "last_completed_turn_timestamp_ms",
            kind: "scalar",
            T: 4,
            opt: true
        }
    ]);
const ConversationState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationState", ()=>[
        {
            no: 1,
            name: "root_prompt_messages_json",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 8,
            name: "turns",
            kind: "message",
            T: ConversationTurn,
            repeated: true
        },
        {
            no: 3,
            name: "todos",
            kind: "message",
            T: _todo_tool_pb_js__WEBPACK_IMPORTED_MODULE_7__.TodoItem,
            repeated: true
        },
        {
            no: 4,
            name: "pending_tool_calls",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "token_details",
            kind: "message",
            T: ConversationTokenDetails
        },
        {
            no: 6,
            name: "summary",
            kind: "message",
            T: ConversationSummary,
            opt: true
        },
        {
            no: 7,
            name: "plan",
            kind: "message",
            T: ConversationPlan,
            opt: true
        },
        {
            no: 9,
            name: "summary_archive",
            kind: "message",
            T: ConversationSummaryArchive,
            opt: true
        },
        {
            no: 10,
            name: "file_states",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: FileState
            }
        },
        {
            no: 11,
            name: "summary_archives",
            kind: "message",
            T: ConversationSummaryArchive,
            repeated: true
        },
        {
            no: 12,
            name: "plans",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: PlanRegistryEntry
            }
        },
        {
            no: 13,
            name: "communicate_update_history",
            kind: "message",
            T: CommunicateUpdateHistoryEntry,
            repeated: true
        },
        {
            no: 14,
            name: "communicate_update_final_summary",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 15,
            name: "communicate_update_completed_subtitle",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 16,
            name: "communicate_update_states_by_parent_tool_call_id",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: CommunicateUpdateTurnState
            }
        }
    ]);
const CommunicateUpdateHistoryEntry = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CommunicateUpdateHistoryEntry", ()=>[
        {
            no: 1,
            name: "step",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message_index",
            kind: "scalar",
            T: 13
        }
    ]);
const CommunicateUpdateTurnState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CommunicateUpdateTurnState", ()=>[
        {
            no: 1,
            name: "history",
            kind: "message",
            T: CommunicateUpdateHistoryEntry,
            repeated: true
        },
        {
            no: 2,
            name: "final_summary",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "completed_subtitle",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SubagentPersistedState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentPersistedState", ()=>[
        {
            no: 1,
            name: "conversation_state",
            kind: "message",
            T: ConversationStateStructure
        },
        {
            no: 2,
            name: "created_timestamp_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "last_used_timestamp_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "subagent_type",
            kind: "message",
            T: _subagents_pb_js__WEBPACK_IMPORTED_MODULE_1__.SubagentType
        },
        {
            no: 5,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "environment",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_subagents_pb_js__WEBPACK_IMPORTED_MODULE_1__.SubagentExecutionEnvironment)
        },
        {
            no: 7,
            name: "cloud_subagent",
            kind: "message",
            T: CloudSubagentReference,
            opt: true
        },
        {
            no: 8,
            name: "first_class_bc_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "cloud_requested_environment_build_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "machine",
            kind: "message",
            T: TargetMachine,
            opt: true
        }
    ]);
const CloudSubagentReference = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CloudSubagentReference", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "transcript_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const TrackedGitRepo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TrackedGitRepo", ()=>[
        {
            no: 1,
            name: "repo_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9
        }
    ]);
const ConversationStateStructure = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ConversationStateStructure", ()=>[
        {
            no: 1,
            name: "root_prompt_messages_json",
            kind: "scalar",
            T: 12,
            repeated: true
        },
        {
            no: 8,
            name: "turns",
            kind: "scalar",
            T: 12,
            repeated: true
        },
        {
            no: 3,
            name: "todos",
            kind: "scalar",
            T: 12,
            repeated: true
        },
        {
            no: 4,
            name: "pending_tool_calls",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "token_details",
            kind: "message",
            T: ConversationTokenDetails
        },
        {
            no: 6,
            name: "summary",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 7,
            name: "plan",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 9,
            name: "previous_workspace_uris",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 10,
            name: "mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AgentMode),
            opt: true
        },
        {
            no: 11,
            name: "summary_archive",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 12,
            name: "file_states",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 12
            }
        },
        {
            no: 15,
            name: "file_states_v2",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: FileStateStructure
            }
        },
        {
            no: 13,
            name: "summary_archives",
            kind: "scalar",
            T: 12,
            repeated: true
        },
        {
            no: 14,
            name: "turn_timings",
            kind: "message",
            T: StepTiming,
            repeated: true
        },
        {
            no: 16,
            name: "subagent_states",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: SubagentPersistedState
            }
        },
        {
            no: 17,
            name: "self_summary_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 18,
            name: "read_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 19,
            name: "active_branch_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 20,
            name: "plans",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: PlanRegistryEntry
            }
        },
        {
            no: 21,
            name: "tracked_git_repo_branches",
            kind: "message",
            T: TrackedGitRepo,
            repeated: true
        },
        {
            no: 22,
            name: "agent_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 23,
            name: "communicate_update_history",
            kind: "message",
            T: CommunicateUpdateHistoryEntry,
            repeated: true
        },
        {
            no: 24,
            name: "subagent_threads",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 25,
            name: "communicate_update_final_summary",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 28,
            name: "communicate_update_completed_subtitle",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 29,
            name: "communicate_update_states_by_parent_tool_call_id",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: CommunicateUpdateTurnState
            }
        },
        {
            no: 30,
            name: "subagent_runs_by_parent_tool_call_id",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: SubagentRunState
            }
        },
        {
            no: 26,
            name: "conversation_started_timestamp_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 27,
            name: "conversation_started_time_zone",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 31,
            name: "subagent_state_refs",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 12
            }
        },
        {
            no: 32,
            name: "goal_state",
            kind: "message",
            T: GoalState,
            opt: true
        },
        {
            no: 33,
            name: "is_root_project_conversation",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 34,
            name: "completed_ask_question_tool_call_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 35,
            name: "durable_skill_blocks",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 36,
            name: "durable_custom_mode_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 37,
            name: "message_count_at_last_compaction",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 38,
            name: "recent_user_message_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 39,
            name: "recent_user_message_ids_older_turn_count",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 40,
            name: "turn_telemetry",
            kind: "message",
            T: TurnTelemetryState,
            opt: true
        },
        {
            no: 42,
            name: "mentioned_agent_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const ThinkingDetails = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ThinkingDetails", []);
const ClientLlmGatewayCredential = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ClientLlmGatewayCredential", ()=>[
        {
            no: 1,
            name: "bearer_token",
            kind: "scalar",
            T: 9
        }
    ]);
const ModelDetails = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ModelDetails", ()=>[
        {
            no: 1,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "display_model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "display_name_short",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "aliases",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "thinking_details",
            kind: "message",
            T: ThinkingDetails,
            opt: true
        },
        {
            no: 7,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "api_key_credentials",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_63__.ApiKeyCredentials,
            oneof: "credentials"
        },
        {
            no: 9,
            name: "azure_credentials",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_63__.AzureCredentials,
            oneof: "credentials"
        },
        {
            no: 10,
            name: "bedrock_credentials",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_63__.BedrockCredentials,
            oneof: "credentials"
        }
    ]);
const SubagentModelOverride = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentModelOverride", ()=>[
        {
            no: 1,
            name: "subagent_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "model",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_63__.RequestedModel,
            oneof: "selection"
        },
        {
            no: 3,
            name: "inherit",
            kind: "scalar",
            T: 8,
            oneof: "selection"
        },
        {
            no: 4,
            name: "disabled",
            kind: "scalar",
            T: 8,
            oneof: "selection"
        }
    ]);
const PreFetchedBlob = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PreFetchedBlob", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]);
const AgentRunRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AgentRunRequest", ()=>[
        {
            no: 1,
            name: "conversation_state",
            kind: "message",
            T: ConversationStateStructure
        },
        {
            no: 2,
            name: "action",
            kind: "message",
            T: ConversationAction
        },
        {
            no: 3,
            name: "model_details",
            kind: "message",
            T: ModelDetails
        },
        {
            no: 9,
            name: "requested_model",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_63__.RequestedModel,
            opt: true
        },
        {
            no: 4,
            name: "mcp_tools",
            kind: "message",
            T: _mcp_pb_js__WEBPACK_IMPORTED_MODULE_64__.McpTools
        },
        {
            no: 5,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "mcp_file_system_options",
            kind: "message",
            T: _mcp_pb_js__WEBPACK_IMPORTED_MODULE_64__.McpFileSystemOptions,
            opt: true
        },
        {
            no: 7,
            name: "skill_options",
            kind: "message",
            T: _request_context_exec_pb_js__WEBPACK_IMPORTED_MODULE_60__.SkillOptions,
            opt: true
        },
        {
            no: 8,
            name: "custom_system_prompt",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "suggest_next_prompt",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 11,
            name: "subagent_type_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "exclude_workspace_context",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 13,
            name: "harness",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 14,
            name: "selected_subagent_models",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_63__.RequestedModel,
            repeated: true
        },
        {
            no: 15,
            name: "selected_subagent_model_details",
            kind: "message",
            T: ModelDetails,
            repeated: true
        },
        {
            no: 16,
            name: "conversation_group_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 17,
            name: "pre_fetched_blobs",
            kind: "message",
            T: PreFetchedBlob,
            repeated: true
        },
        {
            no: 18,
            name: "dev_raw_model_slug",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 19,
            name: "client_supports_inline_images",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 20,
            name: "subagent_model_overrides",
            kind: "message",
            T: SubagentModelOverride,
            repeated: true
        },
        {
            no: 21,
            name: "can_create_cloud_subagents",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 22,
            name: "suppress_subagent_progress_update_tool",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 23,
            name: "client_supports_send_to_user",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 24,
            name: "computer_use_coordinate_mode",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 25,
            name: "run_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 26,
            name: "agent_session_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 28,
            name: "client_supports_routed_model_update",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 29,
            name: "system_prompt_spec",
            kind: "message",
            T: _system_prompt_pb_js__WEBPACK_IMPORTED_MODULE_65__.SystemPromptSpec,
            opt: true
        },
        {
            no: 30,
            name: "client_llm_gateway_credential",
            kind: "message",
            T: ClientLlmGatewayCredential,
            opt: true
        },
        {
            no: 31,
            name: "client_supports_preview_card",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 32,
            name: "started_as_new_project",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 33,
            name: "first_project_onboarding",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 34,
            name: "next_interaction_query_id",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
const TextDeltaUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TextDeltaUpdate", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_server_notice",
            kind: "scalar",
            T: 8
        }
    ]);
const RoutedModelUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RoutedModelUpdate", ()=>[
        {
            no: 1,
            name: "display_name",
            kind: "scalar",
            T: 9
        }
    ]);
const ToolCallStartedUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ToolCallStartedUpdate", ()=>[
        {
            no: 1,
            name: "call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call",
            kind: "message",
            T: ToolCall
        },
        {
            no: 3,
            name: "model_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const ToolCallCompletedUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ToolCallCompletedUpdate", ()=>[
        {
            no: 1,
            name: "call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call",
            kind: "message",
            T: ToolCall
        },
        {
            no: 3,
            name: "model_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const ToolCallDeltaUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ToolCallDeltaUpdate", ()=>[
        {
            no: 1,
            name: "call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call_delta",
            kind: "message",
            T: ToolCallDelta
        },
        {
            no: 3,
            name: "model_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const PartialToolCallUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PartialToolCallUpdate", ()=>[
        {
            no: 1,
            name: "call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call",
            kind: "message",
            T: ToolCall
        },
        {
            no: 3,
            name: "args_text_delta",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "model_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const ThinkingDeltaUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ThinkingDeltaUpdate", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "thinking_style",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ThinkingStyle),
            opt: true
        }
    ]);
const ThinkingCompletedUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ThinkingCompletedUpdate", ()=>[
        {
            no: 1,
            name: "thinking_duration_ms",
            kind: "scalar",
            T: 5
        }
    ]);
const TokenDeltaUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TokenDeltaUpdate", ()=>[
        {
            no: 1,
            name: "tokens",
            kind: "scalar",
            T: 5
        }
    ]);
const SummaryUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SummaryUpdate", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]);
const SummaryStartedUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SummaryStartedUpdate", []);
const HeartbeatUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.HeartbeatUpdate", []);
const SummaryCompletedUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SummaryCompletedUpdate", ()=>[
        {
            no: 1,
            name: "hook_message",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "failed",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const ShellOutputDeltaUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ShellOutputDeltaUpdate", ()=>[
        {
            no: 1,
            name: "stdout",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_61__.ShellStreamStdout,
            oneof: "event"
        },
        {
            no: 2,
            name: "stderr",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_61__.ShellStreamStderr,
            oneof: "event"
        },
        {
            no: 3,
            name: "exit",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_61__.ShellStreamExit,
            oneof: "event"
        },
        {
            no: 4,
            name: "start",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_61__.ShellStreamStart,
            oneof: "event"
        }
    ]);
const TurnEndedUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TurnEndedUpdate", ()=>[
        {
            no: 1,
            name: "input_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 2,
            name: "output_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 3,
            name: "cache_read_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 4,
            name: "cache_write_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 5,
            name: "reasoning_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 6,
            name: "ended_at_ms",
            kind: "scalar",
            T: 4,
            opt: true
        }
    ]);
const UserMessageAppendedUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.UserMessageAppendedUpdate", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "message",
            T: UserMessage
        }
    ]);
const StepStartedUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StepStartedUpdate", ()=>[
        {
            no: 1,
            name: "step_id",
            kind: "scalar",
            T: 4
        }
    ]);
const ToolRequestsListedUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ToolRequestsListedUpdate", ()=>[
        {
            no: 1,
            name: "call_count",
            kind: "scalar",
            T: 13
        }
    ]);
const StepCompletedUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StepCompletedUpdate", ()=>[
        {
            no: 1,
            name: "step_id",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "step_duration_ms",
            kind: "scalar",
            T: 3
        }
    ]);
const PromptSuggestionUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PromptSuggestionUpdate", ()=>[
        {
            no: 1,
            name: "suggestion",
            kind: "scalar",
            T: 9
        }
    ]);
const ActiveBranchChange = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ActiveBranchChange", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9
        }
    ]);
const FeedbackRequestCategory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.FeedbackRequestCategory", ()=>[
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
    ]);
const FeedbackRequestCategoryGroup = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.FeedbackRequestCategoryGroup", ()=>[
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
            name: "categories",
            kind: "message",
            T: FeedbackRequestCategory,
            repeated: true
        }
    ]);
const FeedbackRequestUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.FeedbackRequestUpdate", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "canonical_model_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "categories",
            kind: "message",
            T: FeedbackRequestCategory,
            repeated: true
        },
        {
            no: 4,
            name: "category_groups",
            kind: "message",
            T: FeedbackRequestCategoryGroup,
            repeated: true
        },
        {
            no: 5,
            name: "show_form_immediately",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "negative_title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "comment_placeholder",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ResponseComparisonStarted = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ResponseComparisonStarted", ()=>[
        {
            no: 1,
            name: "display_order",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ResponseComparisonDisplayOrder)
        },
        {
            no: 2,
            name: "parent_invocation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "alternate_invocation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "parent_response",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "comparison_config_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "alternate_model_id",
            kind: "scalar",
            T: 9
        }
    ]);
const ResponseComparisonTextDelta = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ResponseComparisonTextDelta", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]);
const ResponseComparisonCompleted = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ResponseComparisonCompleted", []);
const ResponseComparisonSkipped = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ResponseComparisonSkipped", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ResponseComparisonSkipReason)
        }
    ]);
const ResponseComparisonUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ResponseComparisonUpdate", ()=>[
        {
            no: 1,
            name: "comparison_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "started",
            kind: "message",
            T: ResponseComparisonStarted,
            oneof: "event"
        },
        {
            no: 3,
            name: "text_delta",
            kind: "message",
            T: ResponseComparisonTextDelta,
            oneof: "event"
        },
        {
            no: 4,
            name: "completed",
            kind: "message",
            T: ResponseComparisonCompleted,
            oneof: "event"
        },
        {
            no: 5,
            name: "skipped",
            kind: "message",
            T: ResponseComparisonSkipped,
            oneof: "event"
        }
    ]);
const InteractionUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.InteractionUpdate", ()=>[
        {
            no: 1,
            name: "text_delta",
            kind: "message",
            T: TextDeltaUpdate,
            oneof: "message"
        },
        {
            no: 7,
            name: "partial_tool_call",
            kind: "message",
            T: PartialToolCallUpdate,
            oneof: "message"
        },
        {
            no: 15,
            name: "tool_call_delta",
            kind: "message",
            T: ToolCallDeltaUpdate,
            oneof: "message"
        },
        {
            no: 2,
            name: "tool_call_started",
            kind: "message",
            T: ToolCallStartedUpdate,
            oneof: "message"
        },
        {
            no: 3,
            name: "tool_call_completed",
            kind: "message",
            T: ToolCallCompletedUpdate,
            oneof: "message"
        },
        {
            no: 4,
            name: "thinking_delta",
            kind: "message",
            T: ThinkingDeltaUpdate,
            oneof: "message"
        },
        {
            no: 5,
            name: "thinking_completed",
            kind: "message",
            T: ThinkingCompletedUpdate,
            oneof: "message"
        },
        {
            no: 6,
            name: "user_message_appended",
            kind: "message",
            T: UserMessageAppendedUpdate,
            oneof: "message"
        },
        {
            no: 8,
            name: "token_delta",
            kind: "message",
            T: TokenDeltaUpdate,
            oneof: "message"
        },
        {
            no: 9,
            name: "summary",
            kind: "message",
            T: SummaryUpdate,
            oneof: "message"
        },
        {
            no: 10,
            name: "summary_started",
            kind: "message",
            T: SummaryStartedUpdate,
            oneof: "message"
        },
        {
            no: 11,
            name: "summary_completed",
            kind: "message",
            T: SummaryCompletedUpdate,
            oneof: "message"
        },
        {
            no: 12,
            name: "shell_output_delta",
            kind: "message",
            T: ShellOutputDeltaUpdate,
            oneof: "message"
        },
        {
            no: 13,
            name: "heartbeat",
            kind: "message",
            T: HeartbeatUpdate,
            oneof: "message"
        },
        {
            no: 14,
            name: "turn_ended",
            kind: "message",
            T: TurnEndedUpdate,
            oneof: "message"
        },
        {
            no: 16,
            name: "step_started",
            kind: "message",
            T: StepStartedUpdate,
            oneof: "message"
        },
        {
            no: 17,
            name: "step_completed",
            kind: "message",
            T: StepCompletedUpdate,
            oneof: "message"
        },
        {
            no: 27,
            name: "tool_requests_listed",
            kind: "message",
            T: ToolRequestsListedUpdate,
            oneof: "message"
        },
        {
            no: 18,
            name: "prompt_suggestion",
            kind: "message",
            T: PromptSuggestionUpdate,
            oneof: "message"
        },
        {
            no: 19,
            name: "post_request_prompt",
            kind: "message",
            T: PostRequestPromptUpdate,
            oneof: "message"
        },
        {
            no: 20,
            name: "active_branch_change",
            kind: "message",
            T: ActiveBranchChange,
            oneof: "message"
        },
        {
            no: 21,
            name: "feedback_request",
            kind: "message",
            T: FeedbackRequestUpdate,
            oneof: "message"
        },
        {
            no: 22,
            name: "response_comparison",
            kind: "message",
            T: ResponseComparisonUpdate,
            oneof: "message"
        },
        {
            no: 23,
            name: "context_injection_state",
            kind: "message",
            T: ContextInjectionStateUpdate,
            oneof: "message"
        },
        {
            no: 24,
            name: "routed_model",
            kind: "message",
            T: RoutedModelUpdate,
            oneof: "message"
        },
        {
            no: 26,
            name: "grok_bot_nudge",
            kind: "message",
            T: GrokBotNudgeUpdate,
            oneof: "message"
        },
        {
            no: 25,
            name: "message_started_at_ms",
            kind: "scalar",
            T: 4,
            opt: true
        }
    ]);
const ContextInjectionStateUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ContextInjectionStateUpdate", ()=>[
        {
            no: 1,
            name: "injection_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "state",
            kind: "message",
            T: ContextInjectionState
        }
    ]);
const PostRequestPromptUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PostRequestPromptUpdate", ()=>[
        {
            no: 1,
            name: "title",
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
            name: "button_label",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "button_url",
            kind: "scalar",
            T: 9
        }
    ]);
const GrokBotNudgeUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GrokBotNudgeUpdate", ()=>[
        {
            no: 1,
            name: "job",
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
            name: "show_number",
            kind: "scalar",
            T: 13
        }
    ]);
const InteractionQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.InteractionQuery", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "web_search_request_query",
            kind: "message",
            T: _web_search_tool_pb_js__WEBPACK_IMPORTED_MODULE_14__.WebSearchRequestQuery,
            oneof: "query"
        },
        {
            no: 3,
            name: "ask_question_interaction_query",
            kind: "message",
            T: AskQuestionInteractionQuery,
            oneof: "query"
        },
        {
            no: 4,
            name: "switch_mode_request_query",
            kind: "message",
            T: _switch_mode_tool_pb_js__WEBPACK_IMPORTED_MODULE_19__.SwitchModeRequestQuery,
            oneof: "query"
        },
        {
            no: 7,
            name: "create_plan_request_query",
            kind: "message",
            T: _create_plan_tool_pb_js__WEBPACK_IMPORTED_MODULE_13__.CreatePlanRequestQuery,
            oneof: "query"
        },
        {
            no: 8,
            name: "setup_vm_environment_args",
            kind: "message",
            T: _setup_vm_environment_tool_pb_js__WEBPACK_IMPORTED_MODULE_25__.SetupVmEnvironmentArgs,
            oneof: "query"
        },
        {
            no: 9,
            name: "web_fetch_request_query",
            kind: "message",
            T: _web_fetch_tool_pb_js__WEBPACK_IMPORTED_MODULE_28__.WebFetchRequestQuery,
            oneof: "query"
        },
        {
            no: 10,
            name: "pr_management_request_query",
            kind: "message",
            T: _pr_management_tool_pb_js__WEBPACK_IMPORTED_MODULE_31__.PrManagementRequestQuery,
            oneof: "query"
        },
        {
            no: 11,
            name: "mcp_auth_request_query",
            kind: "message",
            T: _mcp_auth_tool_pb_js__WEBPACK_IMPORTED_MODULE_32__.McpAuthRequestQuery,
            oneof: "query"
        },
        {
            no: 12,
            name: "generate_image_request_query",
            kind: "message",
            T: _generate_image_tool_pb_js__WEBPACK_IMPORTED_MODULE_20__.GenerateImageRequestQuery,
            oneof: "query"
        },
        {
            no: 13,
            name: "replace_env_args",
            kind: "message",
            T: _replace_env_tool_pb_js__WEBPACK_IMPORTED_MODULE_39__.ReplaceEnvArgs,
            oneof: "query"
        },
        {
            no: 14,
            name: "connect_scm_request_query",
            kind: "message",
            T: _connect_scm_tool_pb_js__WEBPACK_IMPORTED_MODULE_52__.ConnectScmRequestQuery,
            oneof: "query"
        }
    ]);
const InteractionResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.InteractionResponse", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "web_search_request_response",
            kind: "message",
            T: _web_search_tool_pb_js__WEBPACK_IMPORTED_MODULE_14__.WebSearchRequestResponse,
            oneof: "result"
        },
        {
            no: 3,
            name: "ask_question_interaction_response",
            kind: "message",
            T: AskQuestionInteractionResponse,
            oneof: "result"
        },
        {
            no: 4,
            name: "switch_mode_request_response",
            kind: "message",
            T: _switch_mode_tool_pb_js__WEBPACK_IMPORTED_MODULE_19__.SwitchModeRequestResponse,
            oneof: "result"
        },
        {
            no: 7,
            name: "create_plan_request_response",
            kind: "message",
            T: _create_plan_tool_pb_js__WEBPACK_IMPORTED_MODULE_13__.CreatePlanRequestResponse,
            oneof: "result"
        },
        {
            no: 8,
            name: "setup_vm_environment_result",
            kind: "message",
            T: _setup_vm_environment_tool_pb_js__WEBPACK_IMPORTED_MODULE_25__.SetupVmEnvironmentResult,
            oneof: "result"
        },
        {
            no: 9,
            name: "web_fetch_request_response",
            kind: "message",
            T: _web_fetch_tool_pb_js__WEBPACK_IMPORTED_MODULE_28__.WebFetchRequestResponse,
            oneof: "result"
        },
        {
            no: 10,
            name: "pr_management_result",
            kind: "message",
            T: _pr_management_tool_pb_js__WEBPACK_IMPORTED_MODULE_31__.PrManagementResult,
            oneof: "result"
        },
        {
            no: 11,
            name: "mcp_auth_request_response",
            kind: "message",
            T: _mcp_auth_tool_pb_js__WEBPACK_IMPORTED_MODULE_32__.McpAuthRequestResponse,
            oneof: "result"
        },
        {
            no: 12,
            name: "generate_image_request_response",
            kind: "message",
            T: _generate_image_tool_pb_js__WEBPACK_IMPORTED_MODULE_20__.GenerateImageRequestResponse,
            oneof: "result"
        },
        {
            no: 13,
            name: "replace_env_result",
            kind: "message",
            T: _replace_env_tool_pb_js__WEBPACK_IMPORTED_MODULE_39__.ReplaceEnvResult,
            oneof: "result"
        },
        {
            no: 14,
            name: "connect_scm_request_response",
            kind: "message",
            T: _connect_scm_tool_pb_js__WEBPACK_IMPORTED_MODULE_52__.ConnectScmRequestResponse,
            oneof: "result"
        }
    ]);
const AskQuestionInteractionQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AskQuestionInteractionQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: _ask_question_tool_pb_js__WEBPACK_IMPORTED_MODULE_17__.AskQuestionArgs
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const AskQuestionInteractionResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AskQuestionInteractionResponse", ()=>[
        {
            no: 1,
            name: "result",
            kind: "message",
            T: _ask_question_tool_pb_js__WEBPACK_IMPORTED_MODULE_17__.AskQuestionResult
        }
    ]);
const TaskToolCallArgsProto = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.TaskToolCallArgsProto", ()=>[
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
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "subagent_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "resume",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "readonly",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 7,
            name: "run_in_background",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "attachments",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 9,
            name: "environment",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_subagents_pb_js__WEBPACK_IMPORTED_MODULE_1__.SubagentExecutionEnvironment)
        },
        {
            no: 10,
            name: "cloud_base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "cloud_requested_environment_build_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "machine",
            kind: "message",
            T: TargetMachine,
            opt: true
        },
        {
            no: 13,
            name: "interrupt",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const SubagentCredentials = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SubagentCredentials", ()=>[
        {
            no: 1,
            name: "api_key_credentials",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_63__.ApiKeyCredentials,
            oneof: "credentials"
        },
        {
            no: 2,
            name: "azure_credentials",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_63__.AzureCredentials,
            oneof: "credentials"
        },
        {
            no: 3,
            name: "bedrock_credentials",
            kind: "message",
            T: _requested_model_pb_js__WEBPACK_IMPORTED_MODULE_63__.BedrockCredentials,
            oneof: "credentials"
        }
    ]);
const CloudSubagentInheritedContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CloudSubagentInheritedContext", ()=>[
        {
            no: 1,
            name: "automation_run_bc_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "inline_mcp_config_json",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "resolved",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "inline_mcp_config_blob_id",
            kind: "scalar",
            T: 12
        }
    ]);
const PreparedTaskSubagent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PreparedTaskSubagent", ()=>[
        {
            no: 1,
            name: "subagent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "subagent_type_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "subagent_type",
            kind: "message",
            T: _subagents_pb_js__WEBPACK_IMPORTED_MODULE_1__.SubagentType
        },
        {
            no: 4,
            name: "analytics_subagent_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "resolved_model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "effective_readonly",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "use_ask_mode_for_subagent",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "conversation_state",
            kind: "message",
            T: ConversationStateStructure
        },
        {
            no: 9,
            name: "initial_action",
            kind: "message",
            T: ConversationAction
        },
        {
            no: 10,
            name: "initial_turns_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 11,
            name: "subagent_request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "is_resume",
            kind: "scalar",
            T: 8
        },
        {
            no: 14,
            name: "parent_request_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 15,
            name: "root_parent_request_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 16,
            name: "task_prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 17,
            name: "task_description",
            kind: "scalar",
            T: 9
        },
        {
            no: 18,
            name: "selected_context",
            kind: "message",
            T: _selected_context_pb_js__WEBPACK_IMPORTED_MODULE_62__.SelectedContext,
            opt: true
        },
        {
            no: 19,
            name: "plugin",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 20,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 21,
            name: "parent_model_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 22,
            name: "raw_args",
            kind: "message",
            T: TaskToolCallArgsProto
        },
        {
            no: 23,
            name: "subagent_credentials",
            kind: "message",
            T: SubagentCredentials
        },
        {
            no: 25,
            name: "result_suffix",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 26,
            name: "enable_execute_hook_exec",
            kind: "scalar",
            T: 8
        },
        {
            no: 27,
            name: "configured_steps",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 28,
            name: "readonly_shell_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 29,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 30,
            name: "prepared_timestamp_unix_ms",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 31,
            name: "plugin_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 32,
            name: "marketplace_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 33,
            name: "subagent_source",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 34,
            name: "cloud_subagent_bc_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 35,
            name: "provider_tool_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 36,
            name: "inherited_context",
            kind: "message",
            T: CloudSubagentInheritedContext,
            opt: true
        },
        {
            no: 37,
            name: "usage_uuid",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
