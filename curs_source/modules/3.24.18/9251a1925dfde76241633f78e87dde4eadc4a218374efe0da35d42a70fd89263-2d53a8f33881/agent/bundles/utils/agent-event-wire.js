import { MCP_TOOL_ERROR_REASONS, init_mcp_tool_error_detail } from "../tools/mcp/mcp-tool-error-detail.js";
import { external_exports } from "../../../external_exports.js";
import { init_dist6 } from "../../../hooks/dist/index.js";
import { HOOK_EXECUTION_TRANSPORT_MODES } from "../../../hooks/dist/transport.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { text2, textFieldCapsOf } from "../../../tree_chunk_napi_exports.js";
var FORWARDABLE_AGENT_EVENT_METHODS, MAX_AGENT_EVENT_OPTIONS_JSON_BYTES, AGENT_EVENT_TRUNCATION_MARKER, textFieldCaps, shortString, idString, finiteNumber2, nonNegativeInt, MAX_AGENT_EVENT_TOOL_CALL_COUNT, toolCallCount2, pluginAttribution, toolExecutionAttribution, AGENT_EVENT_OPTIONS_SCHEMAS, AGENT_EVENT_TEXT_FIELD_CAPS, CLIENT_ONLY_AGENT_EVENT_OPTION_KEYS;
export { AGENT_EVENT_OPTIONS_SCHEMAS, AGENT_EVENT_TEXT_FIELD_CAPS, AGENT_EVENT_TRUNCATION_MARKER, CLIENT_ONLY_AGENT_EVENT_OPTION_KEYS, FORWARDABLE_AGENT_EVENT_METHODS, MAX_AGENT_EVENT_OPTIONS_JSON_BYTES, MAX_AGENT_EVENT_TOOL_CALL_COUNT, finiteNumber2, idString, nonNegativeInt, pluginAttribution, shortString, textFieldCaps, toolCallCount2, toolExecutionAttribution };
var __wakaru_init_agent_event_wire_initialized = false;
export function init_agent_event_wire() {
if (__wakaru_init_agent_event_wire_initialized) return;
__wakaru_init_agent_event_wire_initialized = true;
"use strict";
init_dist6();
init_zod();
init_mcp_tool_error_detail();
FORWARDABLE_AGENT_EVENT_METHODS = [
    "trackUnfinishedTodos",
    "trackUnfinishedTodosWhenCreatedTodos",
    "trackUnfinishedTodosWhenHadUnfinishedTodosAtStart",
    "trackSummarizationTriggered",
    "trackPromptTokens",
    "trackNumberOfToolCalls",
    "trackToolCallStarted",
    "trackToolCallResult",
    "trackComputerUseExecution",
    "trackRecordScreenExecution",
    "trackLoopDetected",
    "trackSubagentCreated",
    "trackSubagentCompleted",
    "trackShellSandboxResult",
    "trackSkillUsed",
    "trackSkillApplied",
    "trackHookExecuted",
    "trackSmartModeClassifierCall",
    "trackUnauthorizedAccessJudgeVerdict",
    "trackPlanModeModelFinished",
    "trackMcpToolCall",
    "trackMcpToolCallResult",
    "trackContextInjectionLifecycle"
];
MAX_AGENT_EVENT_OPTIONS_JSON_BYTES = 16 * 1024;
AGENT_EVENT_TRUNCATION_MARKER = "[truncated]";
textFieldCaps = new WeakMap();
shortString = text2(1024);
idString = external_exports.string().max(256);
finiteNumber2 = external_exports.number().finite();
nonNegativeInt = external_exports.number().int().nonnegative();
MAX_AGENT_EVENT_TOOL_CALL_COUNT = 1e4;
toolCallCount2 = nonNegativeInt.max(MAX_AGENT_EVENT_TOOL_CALL_COUNT);
pluginAttribution = {
    plugin: shortString.optional(),
    marketplace: shortString.optional(),
    pluginId: shortString.optional(),
    marketplaceId: shortString.optional()
};
toolExecutionAttribution = {
    requestId: idString.optional(),
    parentRequestId: idString.optional(),
    rootParentRequestId: idString.optional(),
    conversationId: idString.optional(),
    requestModelName: shortString.optional(),
    isSubagent: external_exports.boolean()
};
AGENT_EVENT_OPTIONS_SCHEMAS = {
    trackUnfinishedTodos: external_exports.object({
        unfinishedTodoCount: nonNegativeInt
    }).strict(),
    trackUnfinishedTodosWhenCreatedTodos: external_exports.object({
        unfinishedTodoCount: nonNegativeInt,
        createdTodoCount: nonNegativeInt
    }).strict(),
    trackUnfinishedTodosWhenHadUnfinishedTodosAtStart: external_exports.object({
        unfinishedTodosAtEnd: nonNegativeInt,
        unfinishedTodosAtStart: nonNegativeInt
    }).strict(),
    trackSummarizationTriggered: external_exports.object({
        userMessageCountBeforeSummarization: nonNegativeInt,
        toolCallCountBeforeSummarization: nonNegativeInt,
        summaryLengthInChars: nonNegativeInt,
        summarizationModelId: shortString,
        mainModelId: shortString.optional(),
        summarizerType: external_exports.enum([
            "external",
            "self"
        ]).optional(),
        summarizationStartInvocationId: idString.optional(),
        summarizationPersistInvocationId: idString.optional(),
        triggerTokensUsed: nonNegativeInt.optional(),
        triggerTokensMax: nonNegativeInt.optional(),
        additionalMessagesCount: nonNegativeInt.optional(),
        additionalUserMessageCount: nonNegativeInt.optional(),
        additionalSystemMessageCount: nonNegativeInt.optional(),
        additionalAssistantMessageCount: nonNegativeInt.optional(),
        additionalToolMessageCount: nonNegativeInt.optional(),
        additionalToolCallCount: nonNegativeInt.optional(),
        summaryLifecycleId: idString.optional()
    }).strict(),
    trackPromptTokens: external_exports.object({
        mcpToolTokens: nonNegativeInt,
        mcpToolCount: nonNegativeInt,
        mcpEnabled: external_exports.boolean(),
        mcpDiscoveryMode: external_exports.enum([
            "meta",
            "filesystem",
            "legacy",
            "disabled"
        ]),
        mcpServerCount: nonNegativeInt,
        ruleTokens: nonNegativeInt,
        ruleCount: nonNegativeInt,
        availableSkillTokens: nonNegativeInt,
        availableSkillCount: nonNegativeInt,
        manuallyAttachedSkillTokens: nonNegativeInt,
        manuallyAttachedSkillCount: nonNegativeInt,
        conversationHistoryTokens: nonNegativeInt,
        conversationHistoryMessageCount: nonNegativeInt,
        fileAttachmentTokens: nonNegativeInt,
        fileAttachmentCount: nonNegativeInt,
        invocationId: idString.optional()
    }).strict(),
    trackNumberOfToolCalls: external_exports.object({
        numberOfToolCalls: toolCallCount2,
        numberOfFailedToolCalls: toolCallCount2,
        numberOfUnexpectedToolCallErrors: toolCallCount2,
        success: external_exports.boolean()
    }).strict(),
    trackToolCallStarted: external_exports.object({
        toolName: shortString,
        toolCallId: idString
    }).strict(),
    trackToolCallResult: external_exports.object({
        toolName: shortString,
        toolCallId: idString,
        outcome: shortString
    }).strict(),
    trackComputerUseExecution: external_exports.object({
        provider: external_exports.enum([
            "anthropic",
            "gemini",
            "openai"
        ]),
        toolCallId: idString,
        requestedActionCount: nonNegativeInt,
        executedActionCount: nonNegativeInt.optional(),
        mouseMoveCount: nonNegativeInt,
        clickCount: nonNegativeInt,
        mouseDownCount: nonNegativeInt,
        mouseUpCount: nonNegativeInt,
        dragCount: nonNegativeInt,
        scrollCount: nonNegativeInt,
        typeCount: nonNegativeInt,
        keyCount: nonNegativeInt,
        waitCount: nonNegativeInt,
        screenshotCount: nonNegativeInt,
        cursorPositionCount: nonNegativeInt,
        outcome: external_exports.enum([
            "success",
            "error"
        ]),
        durationMs: finiteNumber2,
        screenshotProduced: external_exports.boolean(),
        screenshotSavedToTemp: external_exports.boolean(),
        diagnosticScreenshotProduced: external_exports.boolean(),
        diagnosticScreenshotSavedToTemp: external_exports.boolean(),
        ...toolExecutionAttribution
    }).strict(),
    trackRecordScreenExecution: external_exports.object({
        toolCallId: idString,
        mode: external_exports.enum([
            "start",
            "save",
            "discard"
        ]),
        result: external_exports.enum([
            "start_success",
            "save_success",
            "discard_success",
            "failure"
        ]),
        recordingDurationMs: finiteNumber2.optional(),
        priorRecordingCancelled: external_exports.boolean(),
        requestedFilenameRejected: external_exports.boolean(),
        ...toolExecutionAttribution
    }).strict(),
    trackLoopDetected: external_exports.object({
        loopKind: external_exports.enum([
            "single_message_single_line",
            "single_message_multi_line",
            "single_message_reasoning_single_line",
            "single_message_reasoning_multi_line",
            "multi_message",
            "multi_message_only_toolcall_args"
        ]),
        isLoopReoccurrence: external_exports.boolean(),
        loopReoccurrenceTimeframe: external_exports.enum([
            "before_last_user",
            "since_last_user"
        ]).optional(),
        period: nonNegativeInt.optional(),
        repetitions: nonNegativeInt.optional(),
        isInLoopingFallback: external_exports.boolean().optional()
    }).strict(),
    trackSubagentCreated: external_exports.object({
        subagentType: shortString,
        subagentName: shortString.optional(),
        subagentModel: shortString.optional(),
        parentModel: shortString.optional(),
        isReadonly: external_exports.boolean(),
        isResumed: external_exports.boolean(),
        isParallel: external_exports.boolean(),
        parallelBatchSize: nonNegativeInt.optional(),
        hasAttachments: external_exports.boolean(),
        toolCallId: idString,
        subagentSource: shortString.optional(),
        ...pluginAttribution
    }).strict(),
    trackSubagentCompleted: external_exports.object({
        subagentType: shortString,
        subagentModel: shortString.optional(),
        parentModel: shortString.optional(),
        status: external_exports.enum([
            "success",
            "error"
        ]),
        durationMs: finiteNumber2,
        messageCount: nonNegativeInt,
        toolCallCount: nonNegativeInt,
        isReadonly: external_exports.boolean(),
        isParallel: external_exports.boolean(),
        toolCallId: idString,
        ...pluginAttribution
    }).strict(),
    trackShellSandboxResult: external_exports.object({
        outcome: external_exports.enum([
            "completed",
            "permission_denied"
        ]),
        requestedPolicyType: external_exports.enum([
            "readonly",
            "readwrite",
            "none",
            "unspecified"
        ]),
        toolCallId: idString,
        command: text2(8192).optional(),
        effectivePolicyType: external_exports.enum([
            "readonly",
            "readwrite",
            "none",
            "unspecified"
        ]).optional(),
        allowlistEscalated: external_exports.boolean().optional(),
        networkAccess: external_exports.boolean().optional(),
        gitWritesBlocked: external_exports.boolean().optional(),
        exitCode: external_exports.number().int().nullable().optional(),
        failureKind: external_exports.enum([
            "sandbox",
            "network",
            "unknown"
        ]).optional(),
        durationMs: finiteNumber2.optional(),
        isReadonly: external_exports.boolean().optional()
    }).strict(),
    trackSkillUsed: external_exports.object(pluginAttribution).strict().optional(),
    trackSkillApplied: external_exports.object({
        skillId: shortString,
        skillSource: external_exports.enum([
            "workspace",
            "user",
            "builtin",
            "plugin",
            "claude",
            "unknown"
        ]),
        entrypoint: external_exports.enum([
            "agent_read",
            "manually_attached",
            "skill_name_in_prompt"
        ]),
        userMessageMentionsSkill: external_exports.boolean().optional(),
        toolCallId: idString.optional(),
        ...pluginAttribution
    }).strict(),
    trackHookExecuted: external_exports.object({
        hookStep: shortString,
        hookSource: shortString,
        hookType: external_exports.enum([
            "preToolUse",
            "postToolUse",
            "postToolUseFailure",
            "beforeSubmitPrompt",
            "afterAgentResponse",
            "afterAgentThought",
            "stop",
            "subagentStart",
            "subagentStop"
        ]),
        status: external_exports.enum([
            "success",
            "blocked",
            "failed",
            "timeout"
        ]),
        latencyMs: finiteNumber2,
        failClosed: external_exports.boolean().optional(),
        timedOut: external_exports.boolean().optional(),
        transportMode: external_exports.enum(HOOK_EXECUTION_TRANSPORT_MODES).optional(),
        toolName: shortString.optional(),
        failureType: shortString.optional(),
        ...pluginAttribution
    }).strict(),
    trackSmartModeClassifierCall: external_exports.object({
        mode: external_exports.enum([
            "enforce",
            "shadow"
        ]),
        actionKind: external_exports.enum([
            "shell",
            "mcp",
            "sand_computer",
            "web_fetch",
            "fetch_mcp_resource",
            "other",
            "unknown"
        ]),
        surfaceLabel: external_exports.enum([
            "host_machine",
            "isolated_box"
        ]).optional(),
        outcome: external_exports.enum([
            "allow",
            "block",
            "error",
            "missing",
            "exception"
        ]),
        decision: external_exports.enum([
            "allow",
            "block",
            "unspecified",
            "unknown"
        ]),
        hasReason: external_exports.boolean(),
        latencyMs: finiteNumber2,
        retryCount: nonNegativeInt,
        failureReason: external_exports.enum([
            "invalid_target",
            "model_blocked_by_team_policy",
            "classification_parse_failed",
            "missing_tool_calls",
            "missing_classify_tool_call_after_forced_classification",
            "workspace_tool_limit_reached",
            "classifier_exception",
            "classifier_result_error",
            "not_classified",
            "missing_result",
            "unspecified_decision",
            "unknown_decision",
            "timeout_exception",
            "unknown_exception"
        ]).optional()
    }).strict(),
    trackUnauthorizedAccessJudgeVerdict: external_exports.object({
        outcome: external_exports.enum([
            "judged",
            "failed",
            "skipped"
        ]),
        unauthorizedAccess: external_exports.boolean().optional(),
        category: external_exports.enum([
            "none",
            "access_out_of_scope",
            "exceeds_authorization",
            "credential_misuse",
            "recon_or_scanning",
            "denial_of_service",
            "damage_or_tampering",
            "sandbox_escape"
        ]).optional(),
        targetPresent: external_exports.boolean().optional(),
        latencyMs: finiteNumber2.optional(),
        model: shortString.optional(),
        stepIndex: nonNegativeInt,
        toolCallIds: external_exports.array(idString).max(256),
        toolNames: external_exports.array(shortString).max(256),
        failureReason: shortString.optional()
    }).strict(),
    trackPlanModeModelFinished: external_exports.object({
        durationInMode: finiteNumber2,
        todosProposed: nonNegativeInt,
        todosCompleted: nonNegativeInt,
        userMessagesDuringExecution: nonNegativeInt,
        modelName: shortString.optional(),
        requestId: idString.optional(),
        conversationId: idString.optional(),
        planId: idString.optional()
    }).strict(),
    trackMcpToolCall: external_exports.object({
        toolCallId: idString,
        name: shortString,
        mcpServerName: shortString,
        origin: external_exports.enum([
            "built-in",
            "external"
        ]).optional(),
        ...pluginAttribution
    }).strict(),
    trackMcpToolCallResult: external_exports.object({
        toolCallId: idString,
        toolName: shortString,
        mcpServerName: shortString,
        success: external_exports.boolean(),
        errorMessage: text2(4096).optional(),
        errorClassification: shortString.optional(),
        errorReason: external_exports.enum(MCP_TOOL_ERROR_REASONS).optional(),
        errorStatus: external_exports.number().int().min(100).max(599).optional()
    }).strict(),
    trackContextInjectionLifecycle: external_exports.object({
        injectionId: idString,
        outcome: external_exports.enum([
            "queued",
            "delivered",
            "queued_for_next_turn",
            "cancelled",
            "rejected"
        ]),
        reason: shortString.optional(),
        runId: idString.optional()
    }).strict()
};
AGENT_EVENT_TEXT_FIELD_CAPS = Object.fromEntries(FORWARDABLE_AGENT_EVENT_METHODS.map((methodName)=>[
        methodName,
        textFieldCapsOf(AGENT_EVENT_OPTIONS_SCHEMAS[methodName])
    ]));
CLIENT_ONLY_AGENT_EVENT_OPTION_KEYS = {
    trackSkillApplied: [
        "skillPath"
    ],
    trackMcpToolCallResult: [
        "paramsJson",
        "providerErrorCode"
    ]
};

}
