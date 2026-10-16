import { init_dist7 } from "../../../../agent-core/dist/index.js";
import { init_dist8 } from "../../../../agent-exec/dist/index.js";
import { mcpAllowlistPrecheckExecutorResource } from "../../../../agent-exec/dist/mcp-allowlist-precheck.js";
import { mcpExecutorResource } from "../../../../agent-exec/dist/mcp.js";
import { readExecutorResource, redactedReadExecutorResource } from "../../../../agent-exec/dist/read.js";
import { SYMBOLIC_PATH_ARGUMENT_PREFIX } from "../../../../agent-exec/dist/symbolic-path-args.js";
import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_common11 } from "../../configs/common.js";
import { ShimCall, init_shim } from "../../shims/shim.js";
import { init_smart_mode_classifier_context } from "../../smart-mode-classifier-context.js";
import { init_smart_mode_project_permissions } from "../../smart-mode-project-permissions.js";
import { init_state } from "../../state.js";
import { ASK_MODE_MODEL_ERROR, CustomToolCallError, ToolCallAbortedError, ToolCallError, ToolCallRejectedError, agentToolExecutionMetaKey, init_common9, withSafeParsedArgs } from "../common.js";
import { ToolErrorClassification, init_core5 } from "../core.js";
import { init_connect_error2 } from "../core/connect-error.js";
import { init_dev_smart_mode_classifier_block } from "../dev-smart-mode-classifier-block.js";
import { init_backend_routed_mcp_hooks } from "./backend-routed-mcp-hooks.js";
import { init_builtin_tools } from "./builtin-tools.js";
import { init_dynamic_tool_argument_repair, parseArgumentsLeniently, stringifiedDynamicToolArguments } from "./dynamic-tool-argument-repair.js";
import { init_get_mcp_tools } from "./get-mcp-tools.js";
import { init_mcp_argument_schema_normalization } from "./mcp-argument-schema-normalization.js";
import { MCP_AUTH_VIRTUAL_TOOL_NAME, init_mcp_auth_invocation } from "./mcp-auth-invocation.js";
import { init_mcp_error_classification } from "./mcp-error-classification.js";
import { init_mcp_output_spill } from "./mcp-output-spill.js";
import { init_mcp_tool_error_detail } from "./mcp-tool-error-detail.js";
import { init_smart_mode_approval_store, smartModeMcpApprovalStoreResource } from "./smart-mode-approval-store.js";
import { init_smart_mode_approval } from "./smart-mode-approval.js";
import { init_symbolic_tool_args } from "./symbolic-tool-args.js";
import { init_smart_mode_classifier_runtime_state } from "../smart-mode-classifier-runtime-state.js";
import { init_tool_timeout_suspension } from "../tool-timeout-suspension.js";
import { init_agent_config } from "../../utils/agent-config.js";
import { getAgentEventTracker, init_event_tracking } from "../../utils/event-tracking.js";
import { CALL_MCP_TOOL_FAILURE_REASONS, init_mcp_metrics } from "../../utils/mcp-metrics.js";
import { getConversationId, init_request_id } from "../../utils/request-id.js";
import { SMART_MODE_CLASSIFIER_MANUAL_REVIEW_ERROR_REASON, init_smart_mode_classifier_error_metadata } from "../../utils/smart-mode-classifier-error-metadata.js";
import { init_smart_mode_classifier_measurement } from "../../utils/smart-mode-classifier-measurement.js";
import { mcpToolRequiresConfirmation, parseMcpToolAnnotations } from "../../../../bidi_connect_exports.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { collectSymbolicPathArguments, mcpInputSchemaToJson, queryMcpAuth, supportsInteractiveMcpAuth } from "../../../../dist_exports.js";
import { external_exports } from "../../../../external_exports.js";
import { init_mcp_tool_annotations } from "../../../../mcp-core/dist/mcp-tool-annotations.js";
import { agentToolResultToMcpToolResult, asRecord, cancelSmartModeMcpApprovalRequest, catalogAfterIncompleteMcpRefresh, classifyMcpErrorMessage, convertExecSuccessToToolSuccess, createMcpAuthToolCall, createMcpToolCall, createMcpTransportError, createSteerReleasedMcpResult, createSteerReleasedMcpSuccess, createVirtualMcpAuthRejectedResult, createVirtualMcpAuthSuccessResult, createZodAgentTool, defineShim, describeSymbolicToolArguments, emitCallMcpToolMetrics, emitMcpSearchThenCallResult, executeToolResultOrError, fetchMcpDescriptorsWithRefreshPolicy, generateSeededUuid, getMcpToolOrigin, getRequiredToolName, getSmartModeClassifierRuntimeState, getWrappedMcpErrorClassification, isAgentStreamStartTimeoutError, isMcpAuthPlaceholderCatalog, isReservedDynamicToolsNamespace, jsonSchema, keepInteractiveMcpAuthTool, mcpCatalogTurnCount, mcpFailureTrackingFields, mcpPermissionDeniedResult, mcpResultErrorDetail, mcpThrownErrorDetail, mcpToolErrorTrackingFields, mcpToolResultTrackingOutcome, missingRequiredArgumentsMessage, normalizeMcpArgumentsToInputSchema, normalizeMcpInputSchema, normalizeMcpToolName, raceMcpExecAgainstSteerRelease, rejectSmartModeMcpPreflightBlock, renderMcpTool, renderToolResultOrError, reportMcpMetaToolFailure, reportShim, resolveDynamicInvocationHarnessIdentity, safeString, shouldPreferRedactedReadTool, spillLargeMcpTextOutput, symbolicPathArgumentsForApproval, symbolicPathArgumentsForReview, symbolicPathArgumentsUnsupportedError, throwMcpExecuteError, toProtoSystemReminders, truncateMcpToolName, wasPrecededByGetMcpToolsSearch, wrapBackendRoutedMcpExecute, writeToolResultToFile } from "../../../../mcp_sandbox_policy_exports.js";
import { init_dist25 } from "../../../../node_modules/.pnpm/_077e680643459f7d1d564b303258f2e9/node_modules/ai/dist/index.mjs";
import { Value } from "../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/struct_pb.js";
import { init_esm2 } from "../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { McpAllowlistPrecheckArgs } from "../../../../proto/dist/generated/agent/v1/mcp_allowlist_precheck_exec_pb.js";
import { McpAuthArgs, McpAuthRejected, McpAuthResult, McpAuthSuccess, McpAuthToolCall, init_mcp_auth_tool_pb } from "../../../../proto/dist/generated/agent/v1/mcp_auth_tool_pb.js";
import { McpArgs, McpRefreshPolicy, McpRejected, McpResult, init_mcp_exec_pb } from "../../../../proto/dist/generated/agent/v1/mcp_exec_pb.js";
import { McpDescriptor, McpToolDescriptor, init_mcp_pb } from "../../../../proto/dist/generated/agent/v1/mcp_pb.js";
import { McpToolCall, McpToolError, McpToolResult, init_mcp_tool_pb } from "../../../../proto/dist/generated/agent/v1/mcp_tool_pb.js";
import { init_utils_pb } from "../../../../proto/dist/generated/agent/v1/utils_pb.js";
import { init_dist27 } from "../../../../redaction/dist/index.js";
var import_node_crypto28, __addDisposableResource55, __disposeResources55, logger62, McpPermissionDeniedError, DEDICATED_MCP_INVALID_ARGS_REMINDER, DynamicToolExecutionError, McpServerDoesNotExistError, McpToolDoesNotExistError, McpExecToolNotFoundError, APP_OWNED_MCP_SERVER_IDENTIFIERS, McpWithoutReadToolDefinitionError, McpInvalidArgsToolDefinitionReminderError, McpMissingRequiredArgumentsError, McpToolDefinitionChangedError, MCP_CATALOG_REFRESH_FAILED_GUIDANCE, McpCatalogRefreshFailedError, mcpCatalogChangesByState, MAX_TOOL_NAME_LENGTH, HASH_SUFFIX_LENGTH, MCP_STEER_RELEASE_DEFAULT_MIN_RUNTIME_MS, MCP_STEER_RELEASE_DRAIN_MS, SMART_MODE_MCP_BLOCK_REASON, SMART_MODE_MCP_BLOCKED_AUTONOMOUS_REMINDER_LEAD, SMART_MODE_MCP_BLOCKED_AUTONOMOUS_REASON_SUFFIX, SMART_MODE_DYNAMIC_MCP_BLOCKED_AUTONOMOUS_REASON_SUFFIX, SMART_MODE_MCP_PREFLIGHT_REJECTED_TELEMETRY_REASON, SMART_MODE_MCP_CLASSIFIER_ERROR_REASON, SMART_MODE_MCP_PARENT_REQUESTED_APPROVAL_FALLBACK_REASON, createMcpTool, descriptionForMcpAlias, envelopeFieldsInArguments, writeToFileInArguments, smartModeKeysInArguments, schemaKeySpelling, missingRequiredArguments, createCallMcpTool;
export { APP_OWNED_MCP_SERVER_IDENTIFIERS, DEDICATED_MCP_INVALID_ARGS_REMINDER, DynamicToolExecutionError, HASH_SUFFIX_LENGTH, MAX_TOOL_NAME_LENGTH, MCP_CATALOG_REFRESH_FAILED_GUIDANCE, MCP_STEER_RELEASE_DEFAULT_MIN_RUNTIME_MS, MCP_STEER_RELEASE_DRAIN_MS, McpCatalogRefreshFailedError, McpExecToolNotFoundError, McpInvalidArgsToolDefinitionReminderError, McpMissingRequiredArgumentsError, McpPermissionDeniedError, McpServerDoesNotExistError, McpToolDefinitionChangedError, McpToolDoesNotExistError, McpWithoutReadToolDefinitionError, SMART_MODE_DYNAMIC_MCP_BLOCKED_AUTONOMOUS_REASON_SUFFIX, SMART_MODE_MCP_BLOCKED_AUTONOMOUS_REASON_SUFFIX, SMART_MODE_MCP_BLOCKED_AUTONOMOUS_REMINDER_LEAD, SMART_MODE_MCP_BLOCK_REASON, SMART_MODE_MCP_CLASSIFIER_ERROR_REASON, SMART_MODE_MCP_PARENT_REQUESTED_APPROVAL_FALLBACK_REASON, SMART_MODE_MCP_PREFLIGHT_REJECTED_TELEMETRY_REASON, __addDisposableResource55, __disposeResources55, createCallMcpTool, createMcpTool, descriptionForMcpAlias, envelopeFieldsInArguments, import_node_crypto28, logger62, mcpCatalogChangesByState, missingRequiredArguments, schemaKeySpelling, smartModeKeysInArguments, writeToFileInArguments };
var __wakaru_init_mcp8_initialized = false;
export function init_mcp8() {
if (__wakaru_init_mcp8_initialized) return;
__wakaru_init_mcp8_initialized = true;
"use strict";
import_node_crypto28 = require("node:crypto");
init_dist8();
init_dist26();
init_dist();
init_mcp_tool_annotations();
init_smart_mode_classifier_context();
init_smart_mode_project_permissions();
init_state();
init_shim();
init_agent_config();
init_event_tracking();
init_mcp_metrics();
init_smart_mode_classifier_measurement();
init_dev_smart_mode_classifier_block();
init_smart_mode_classifier_runtime_state();
init_tool_timeout_suspension();
init_backend_routed_mcp_hooks();
init_common11();
init_dynamic_tool_argument_repair();
init_dist7();
init_agent_pb();
init_mcp_auth_tool_pb();
init_mcp_exec_pb();
init_mcp_pb();
init_mcp_tool_pb();
init_utils_pb();
init_esm2();
init_dist25();
init_zod();
init_request_id();
init_smart_mode_classifier_error_metadata();
init_common9();
init_connect_error2();
init_core5();
init_builtin_tools();
init_get_mcp_tools();
init_mcp_argument_schema_normalization();
init_mcp_auth_invocation();
init_mcp_tool_error_detail();
init_mcp_error_classification();
init_mcp_output_spill();
init_symbolic_tool_args();
init_smart_mode_approval();
init_smart_mode_approval_store();
init_dist27();
__addDisposableResource55 = function(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose2, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose2 = value[Symbol.asyncDispose];
        }
        if (dispose2 === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose2 = value[Symbol.dispose];
            if (async) inner = dispose2;
        }
        if (typeof dispose2 !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose2 = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value,
            dispose: dispose2,
            async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
};
__disposeResources55 = (function(SuppressedError2) {
    return function(env) {
        function fail3(e) {
            env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s3 = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s3 === 1) return s3 = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s3 |= 2, Promise.resolve(result).then(next, function(e) {
                            fail3(e);
                            return next();
                        });
                    } else s3 |= 1;
                } catch (e) {
                    fail3(e);
                }
            }
            if (s3 === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
logger62 = createLogger("tools/mcp");
McpPermissionDeniedError = class extends CustomToolCallError {
    constructor(args){
        const visible = args.isReadonly ? ASK_MODE_MODEL_ERROR : `Permission denied: ${args.error}`;
        const reminder = args.extraReminder !== void 0 && args.extraReminder.length > 0 ? `
${args.extraReminder}` : "";
        super(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
            error: args.error,
            clientVisibleErrorMessage: visible,
            modelVisibleErrorMessage: `${visible}${reminder}`
        });
        this.error = args.error;
        this.isReadonly = args.isReadonly;
        this.extraReminder = args.extraReminder;
    }
};
McpPermissionDeniedError.telemetryName = "McpPermissionDeniedError";
DEDICATED_MCP_INVALID_ARGS_REMINDER = "The MCP server rejected these arguments as invalid. Before retrying, inspect this MCP tool's input schema/tool definition and rebuild the arguments from that schema.";
DynamicToolExecutionError = class extends CustomToolCallError {
    constructor(){
        super(...arguments);
        this.hideFromClientToolCall = true;
    }
};
DynamicToolExecutionError.telemetryName = "DynamicToolExecutionError";
McpServerDoesNotExistError = class extends CustomToolCallError {
    constructor(serverIdentifier, readServerDefReminder){
        super(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
            error: `MCP server does not exist: ${serverIdentifier}`,
            clientVisibleErrorMessage: `MCP server does not exist: ${serverIdentifier}`,
            modelVisibleErrorMessage: `MCP server does not exist: ${serverIdentifier}. ${readServerDefReminder}`
        });
        this.serverIdentifier = serverIdentifier;
        this.readServerDefReminder = readServerDefReminder;
    }
};
McpServerDoesNotExistError.telemetryName = "McpServerDoesNotExistError";
McpToolDoesNotExistError = class extends CustomToolCallError {
    constructor(serverIdentifier, toolName, readToolDefReminder){
        super(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
            error: `MCP tool does not exist: server=${serverIdentifier}, tool=${toolName}`,
            clientVisibleErrorMessage: `MCP tool does not exist: ${toolName}`,
            modelVisibleErrorMessage: "unused"
        });
        this.serverIdentifier = serverIdentifier;
        this.toolName = toolName;
        this.readToolDefReminder = readToolDefReminder;
    }
};
McpToolDoesNotExistError.telemetryName = "McpToolDoesNotExistError";
McpExecToolNotFoundError = class extends CustomToolCallError {
    constructor(args){
        const reminder = args.extraReminder !== void 0 && args.extraReminder.length > 0 ? `
${args.extraReminder}` : "";
        super(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
            error: args.errorMessage,
            clientVisibleErrorMessage: args.errorMessage,
            modelVisibleErrorMessage: `${args.errorMessage}${reminder}`
        });
    }
};
McpExecToolNotFoundError.telemetryName = "McpExecToolNotFoundError";
APP_OWNED_MCP_SERVER_IDENTIFIERS = new Set([
    "cursor-app-control",
    "cursor-browser-extension",
    "cursor-dev-control",
    "cursor-ide-browser"
]);
McpWithoutReadToolDefinitionError = class extends CustomToolCallError {
    constructor(error3, readToolDefReminder, classification = ToolErrorClassification.OTHER_ERROR){
        const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
        const modelMessage = error3 instanceof CustomToolCallError ? error3.modelVisibleErrorMessage : errorMessage4;
        super(classification, {
            error: `Error in call_mcp_tool: ${errorMessage4} without reading the tool definition`,
            clientVisibleErrorMessage: "Tool execution error",
            modelVisibleErrorMessage: modelMessage,
            systemReminders: [
                readToolDefReminder
            ]
        });
        this.error = error3;
        this.readToolDefReminder = readToolDefReminder;
    }
};
McpWithoutReadToolDefinitionError.telemetryName = "McpWithoutReadToolDefinitionError";
McpInvalidArgsToolDefinitionReminderError = class extends CustomToolCallError {
    constructor(error3, readToolDefReminder){
        const modelMessage = error3 instanceof CustomToolCallError ? error3.modelVisibleErrorMessage : error3.message;
        super(ToolErrorClassification.INVALID_ARGS, {
            error: error3.message,
            clientVisibleErrorMessage: "Tool execution error",
            modelVisibleErrorMessage: modelMessage,
            systemReminders: [
                readToolDefReminder
            ]
        });
    }
};
McpInvalidArgsToolDefinitionReminderError.telemetryName = "McpInvalidArgsToolDefinitionReminderError";
McpMissingRequiredArgumentsError = class extends CustomToolCallError {
    constructor(message){
        super(ToolErrorClassification.INVALID_ARGS, {
            error: message,
            clientVisibleErrorMessage: "Tool execution error",
            modelVisibleErrorMessage: message
        });
    }
};
McpMissingRequiredArgumentsError.telemetryName = "McpMissingRequiredArgumentsError";
McpToolDefinitionChangedError = class extends CustomToolCallError {
    constructor(args){
        const hasSchema = args.freshInputSchemaJson !== void 0 && args.freshInputSchemaJson.length > 0;
        const schemaBlock = hasSchema ? `
Fresh input schema:
${args.freshInputSchemaJson}` : "";
        const rebuild = hasSchema ? "Rebuild the arguments from this schema before retrying." : "Rediscover the tool schema and rebuild the arguments.";
        const reminder = args.extraReminder !== void 0 && args.extraReminder.length > 0 ? `
${args.extraReminder}` : "";
        const message = `The input schema for tool ${args.toolName} changed after a catalog refresh.${schemaBlock}
${rebuild}`;
        super(ToolErrorClassification.INVALID_ARGS, {
            error: message,
            clientVisibleErrorMessage: "Tool execution error",
            modelVisibleErrorMessage: `${message}${reminder}`
        });
    }
};
McpToolDefinitionChangedError.telemetryName = "McpToolDefinitionChangedError";
MCP_CATALOG_REFRESH_FAILED_GUIDANCE = "The tool list could not be re-read, so it is unknown whether this tool still exists. Retry discovery shortly rather than repeating this call.";
McpCatalogRefreshFailedError = class extends CustomToolCallError {
    constructor(error3, extraReminder){
        const classification = error3 instanceof CustomToolCallError ? error3.classification : classifyMcpErrorMessage(error3.message) ?? ToolErrorClassification.OTHER_ERROR;
        const reminder = extraReminder !== void 0 && extraReminder.length > 0 ? `
${extraReminder}` : "";
        const message = `${error3.message} ${MCP_CATALOG_REFRESH_FAILED_GUIDANCE}`;
        super(classification, {
            error: message,
            clientVisibleErrorMessage: "Tool execution error",
            modelVisibleErrorMessage: `${message}${reminder}`
        });
    }
};
McpCatalogRefreshFailedError.telemetryName = "McpCatalogRefreshFailedError";
mcpCatalogChangesByState = new WeakMap();
MAX_TOOL_NAME_LENGTH = 64;
HASH_SUFFIX_LENGTH = 7;
MCP_STEER_RELEASE_DEFAULT_MIN_RUNTIME_MS = 5e3;
MCP_STEER_RELEASE_DRAIN_MS = 1500;
SMART_MODE_MCP_BLOCK_REASON = "Blocked by Auto-review";
SMART_MODE_MCP_BLOCKED_AUTONOMOUS_REMINDER_LEAD = "Auto-review blocked this autonomous";
SMART_MODE_MCP_BLOCKED_AUTONOMOUS_REASON_SUFFIX = `

<system_reminder>
${SMART_MODE_MCP_BLOCKED_AUTONOMOUS_REMINDER_LEAD} tool call. Decide now between two paths: (1) if a genuinely safer, lower-privilege, authorized path satisfies the request, use it; (2) if this blocked action is still necessary and the user should approve it, immediately retry the exact same call_mcp_tool call with requestSmartModeApproval set to true AND smartModeBlockReason set to the exact block reason text above. That retry is what shows the native approval card; stopping here leaves the user with no approval UI. Do not change the tool arguments or use an escalated variant when retrying for approval. Trying a different anonymous public file host, pastebin, disposable transfer link, or similar courier is NOT path (1) \u2014 that is the same unauthorized data-exposure crossing \u2014 so for that class prefer path (2) or ask the user, do not shop for another intermediary.
</system_reminder>`;
SMART_MODE_DYNAMIC_MCP_BLOCKED_AUTONOMOUS_REASON_SUFFIX = `

<system_reminder>
${SMART_MODE_MCP_BLOCKED_AUTONOMOUS_REMINDER_LEAD} MCP tool call. Decide now between two paths: (1) if a genuinely safer, lower-privilege, authorized path satisfies the request, use it; (2) if this blocked action is still necessary and the user should approve it, immediately retry the exact same CallDynamicTool call with mcpDetails.requestSmartModeApproval set to true AND mcpDetails.smartModeBlockReason set to the exact block reason text above. Preserve mcpDetails.description from the blocked call. That retry is what shows the native approval card; stopping here leaves the user with no approval UI. Do not change the tool arguments or use an escalated variant when retrying for approval. Trying a different anonymous public file host, pastebin, disposable transfer link, or similar courier is NOT path (1) \u2014 that is the same unauthorized data-exposure crossing \u2014 so for that class prefer path (2) or ask the user, do not shop for another intermediary.
</system_reminder>`;
SMART_MODE_MCP_PREFLIGHT_REJECTED_TELEMETRY_REASON = "Smart Mode preflight rejected the MCP call";
SMART_MODE_MCP_CLASSIFIER_ERROR_REASON = SMART_MODE_CLASSIFIER_MANUAL_REVIEW_ERROR_REASON;
SMART_MODE_MCP_PARENT_REQUESTED_APPROVAL_FALLBACK_REASON = SMART_MODE_MCP_CLASSIFIER_ERROR_REASON;
createMcpTool = (resourceAccessor, mcpToolDefinition, options2 = {})=>{
    const executor = resourceAccessor.get(mcpExecutorResource);
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource55(env_1, createSpan(parentCtx.withName("mcpExecute")), false);
            const args = rawArgs;
            const toolArgs = new McpArgs({
                name: mcpToolDefinition.name,
                args: Object.fromEntries(Object.entries(args).map(([key, value])=>[
                        key,
                        Value.fromJson(value)
                    ])),
                toolCallId: meta.toolCallId,
                providerIdentifier: mcpToolDefinition.providerIdentifier,
                toolName: mcpToolDefinition.toolName,
                serverIdentifier: mcpToolDefinition.clientKey
            });
            const baseToolCall = new McpToolCall({
                args: toolArgs,
                result: void 0
            });
            return await interactionHandler.executeToolCall(spanCtxt.ctx, createMcpToolCall(baseToolCall), meta.toolCallId, async (ctx)=>{
                logger62.info(ctx, "MCP tool call", {
                    mcpServer: mcpToolDefinition.providerIdentifier,
                    mcpToolName: mcpToolDefinition.toolName
                });
                const tracker = getAgentEventTracker(ctx);
                tracker.trackMcpToolCall(ctx, {
                    toolCallId: meta.toolCallId,
                    name: mcpToolDefinition.toolName,
                    mcpServerName: mcpToolDefinition.providerIdentifier,
                    origin: getMcpToolOrigin(mcpToolDefinition.clientKey),
                    plugin: mcpToolDefinition.plugin,
                    marketplace: mcpToolDefinition.marketplace,
                    pluginId: mcpToolDefinition.pluginId,
                    marketplaceId: mcpToolDefinition.marketplaceId
                });
                const paramsJson = JSON.stringify(args);
                let execResult;
                try {
                    const executeInner = (execCtx, mcpArgs)=>executor.execute(execCtx.with(agentToolExecutionMetaKey, meta), mcpArgs, {
                            execId: generateSeededUuid(meta.toolCallId),
                            hookContextCollector: meta.hookContextCollector
                        });
                    const executeMaybeHooked = wrapBackendRoutedMcpExecute({
                        executor,
                        providerIdentifier: mcpToolDefinition.providerIdentifier,
                        toolName: mcpToolDefinition.toolName,
                        executeFn: executeInner,
                        hookOptions: {
                            resourceAccessor,
                            enableExecuteHookExec: options2.enableExecuteHookExec,
                            configuredSteps: options2.configuredSteps,
                            model: options2.model,
                            hookContextCollector: meta.hookContextCollector
                        },
                        requestContext: {
                            toolCallId: meta.toolCallId,
                            model: options2.model,
                            conversationId: getConversationId(ctx)
                        }
                    });
                    execResult = await executeMaybeHooked(ctx, toolArgs);
                    const result = convertExecSuccessToToolSuccess(execResult, {
                        requestedToolName: mcpToolDefinition.toolName,
                        catalogServer: mcpToolDefinition.providerIdentifier,
                        stateHandler: meta.stateHandler,
                        invalidArgsToolDefReminder: DEDICATED_MCP_INVALID_ARGS_REMINDER
                    });
                    tracker.trackMcpToolCallResult(ctx, {
                        toolCallId: meta.toolCallId,
                        toolName: mcpToolDefinition.toolName,
                        mcpServerName: mcpToolDefinition.providerIdentifier,
                        paramsJson,
                        ...mcpToolResultTrackingOutcome(result),
                        ...mcpToolErrorTrackingFields(mcpResultErrorDetail(execResult))
                    });
                    return result;
                } catch (e) {
                    const classifiedError = e instanceof ToolCallError ? e : createMcpTransportError(e instanceof Error ? e.message : String(e), e);
                    tracker.trackMcpToolCallResult(ctx, {
                        toolCallId: meta.toolCallId,
                        toolName: mcpToolDefinition.toolName,
                        mcpServerName: mcpToolDefinition.providerIdentifier,
                        paramsJson,
                        success: false,
                        errorMessage: classifiedError instanceof Error ? classifiedError.message : String(classifiedError),
                        errorClassification: getWrappedMcpErrorClassification(classifiedError),
                        ...mcpFailureTrackingFields(execResult, e)
                    });
                    if (e instanceof ToolCallError) {
                        throw e;
                    }
                    throwMcpExecuteError(classifiedError, {
                        toolName: mcpToolDefinition.toolName,
                        invalidArgsToolDefReminder: DEDICATED_MCP_INVALID_ARGS_REMINDER,
                        stateHandler: meta.stateHandler
                    });
                }
            }, (result)=>createMcpToolCall(new McpToolCall({
                    ...baseToolCall,
                    result
                })), meta.hookContextCollector);
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources55(env_1);
        }
    };
    const toolDescription = mcpToolDefinition.description ?? "";
    return {
        toolIdentifier: "MCP",
        mcpToolSource: {
            serverIdentifier: mcpToolDefinition.clientKey,
            toolName: mcpToolDefinition.toolName
        },
        name: options2.name ?? truncateMcpToolName(normalizeMcpToolName(mcpToolDefinition.name)),
        descriptionGenerator: (_props)=>toolDescription,
        parameters: jsonSchema(normalizeMcpInputSchema(mcpToolDefinition.inputSchema, {
            convertTupleSchemaToDraft2020_12: options2.convertTupleSchemaToDraft2020_12
        })),
        render: renderMcpTool,
        execute: withSafeParsedArgs(external_exports.unknown(), execute, createMcpToolCall(new McpToolCall())),
        serializeError: (error3)=>{
            if (error3 instanceof McpPermissionDeniedError) {
                return createMcpToolCall(new McpToolCall({
                    result: mcpPermissionDeniedResult(error3)
                }));
            }
            if (error3 instanceof ToolCallRejectedError) {
                return createMcpToolCall(new McpToolCall({
                    result: new McpToolResult({
                        result: {
                            case: "rejected",
                            value: new McpRejected({
                                reason: error3.message
                            })
                        }
                    })
                }));
            }
            if (error3 instanceof CustomToolCallError) {
                return createMcpToolCall(new McpToolCall({
                    result: new McpToolResult({
                        result: {
                            case: "error",
                            value: new McpToolError({
                                error: error3.clientVisibleErrorMessage,
                                readToolDefReminder: error3.modelVisibleErrorMessage,
                                systemReminders: toProtoSystemReminders(error3.systemReminders)
                            })
                        }
                    })
                }));
            }
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            return createMcpToolCall(new McpToolCall({
                result: new McpToolResult({
                    result: {
                        case: "error",
                        value: new McpToolError({
                            error: "Tool execution error",
                            readToolDefReminder: errorMessage4
                        })
                    }
                })
            }));
        }
    };
};
descriptionForMcpAlias = defineShim({
    name: "mcp_description_for_mcp_alias"
});
envelopeFieldsInArguments = defineShim({
    name: "mcp_envelope_fields_in_arguments"
});
writeToFileInArguments = defineShim({
    name: "mcp_write_to_file_in_arguments"
});
smartModeKeysInArguments = defineShim({
    name: "mcp_smart_mode_keys_in_arguments"
});
schemaKeySpelling = defineShim({
    name: "mcp_schema_key_spelling"
});
missingRequiredArguments = defineShim({
    name: "mcp_missing_required_arguments",
    refusalReasons: [
        "missing_required_arguments"
    ]
});
createCallMcpTool = (options2)=>{
    const { resourceAccessor, name: name17 = "CallMcpTool", mcpFileSystemOptions, mcpMetaToolOptions, validateMcpToolDescriptors = false, normalizeArgumentsToInputSchema = false, getMcpToolsToolName, allowInteractiveMcpAuth = false, nonInteractiveAuthError, agentType, requestContext, smartModeClassifierMode = false, smartModeClassifierShadowMode = false, smartModeApprovalProvider, devSmartModeClassifierBlockState, devSmartModeClassifierDelayState, dynamicToolRegistry, isMcpToolBlocked, mcpToolBlockedModelSuffix, extractSmartModeClassifierConversationContext: extractSmartModeClassifierConversationContext2, userAutoRunInstructions, projectAutoRunInstructions, suppressSmartModeClassifierTelemetryIds, smartModeClassifierMaxAttempts, loadSmartModeWorkspacePermissionFiles = true, disableSmartModeAllowlistPrecheck = false, steerReleaseReadOnlyTools = false, steerReleaseMinRuntimeMs = MCP_STEER_RELEASE_DEFAULT_MIN_RUNTIME_MS, steerReleaseDrainMs = MCP_STEER_RELEASE_DRAIN_MS, enableExecuteHookExec, model, hackySymbolicToolCalls = false, writeToolResultText, symbolicPathArgumentsUnavailableFor, symbolicPathReadExecutor } = options2;
    const useDynamicToolNamespaces = dynamicToolRegistry !== void 0;
    const executor = resourceAccessor.get(mcpExecutorResource);
    const mcpMetaToolEnabled = mcpMetaToolOptions?.enabled ?? false;
    const resolvedGetMcpToolsToolName = getMcpToolsToolName ?? "GetMcpTools";
    const serverDescriptors = new Map();
    const toolDefinitionPaths = new Map();
    const descriptorSource = mcpMetaToolEnabled ? mcpMetaToolOptions?.mcpDescriptors ?? [] : mcpFileSystemOptions?.mcpDescriptors ?? [];
    for (const descriptor of descriptorSource){
        const rawTools = descriptor.tools ?? [];
        const descriptorTools = allowInteractiveMcpAuth ? rawTools : rawTools.filter((t)=>t.toolName !== MCP_AUTH_VIRTUAL_TOOL_NAME);
        const descriptorForRegistration = allowInteractiveMcpAuth || descriptorTools.length === rawTools.length ? descriptor : new McpDescriptor({
            serverIdentifier: descriptor.serverIdentifier,
            serverName: descriptor.serverName,
            plugin: descriptor.plugin,
            marketplace: descriptor.marketplace,
            serverUseInstructions: descriptor.serverUseInstructions,
            folderPath: descriptor.folderPath,
            pluginDbId: descriptor.pluginDbId,
            marketplaceId: descriptor.marketplaceId,
            tools: descriptorTools
        });
        serverDescriptors.set(descriptor.serverIdentifier, descriptorForRegistration);
        for (const tool of descriptorTools){
            if (tool.definitionPath) {
                const key = `${descriptor.serverIdentifier}:${tool.toolName}`;
                toolDefinitionPaths.set(key, tool.definitionPath);
            }
        }
    }
    const jsonValueSchema2 = external_exports.lazy(()=>external_exports.union([
            external_exports.null(),
            external_exports.boolean(),
            external_exports.number(),
            external_exports.string(),
            external_exports.record(jsonValueSchema2),
            external_exports.array(jsonValueSchema2)
        ]));
    const argumentsRecordSchema = external_exports.record(jsonValueSchema2);
    const argumentsParameterSchema = argumentsRecordSchema.optional().describe(useDynamicToolNamespaces ? "Arguments to pass to the tool, as described by the tool descriptor." : "Arguments to pass to the MCP tool, as described in the tool descriptor.");
    const baseParametersSchema3 = external_exports.object({
        server: external_exports.string().describe("Identifier of the MCP server hosting the tool."),
        toolName: external_exports.string().describe("Name of the MCP tool to invoke."),
        arguments: argumentsParameterSchema
    });
    const modelIdentityParametersSchema = useDynamicToolNamespaces ? external_exports.object({
        namespace: external_exports.string().describe("Dynamic namespace hosting the tool, e.g. an MCP server."),
        toolName: external_exports.string().describe("Name of the tool to invoke.")
    }) : baseParametersSchema3.omit({
        arguments: true
    });
    const callDescriptionSchema = external_exports.string().describe("Short plain-language description of what this call will do. One sentence naming the outcome and where it applies (channel, page, file, or service) when known. Do not include tool names, argument keys, or JSON.");
    const descriptionParametersSchema = external_exports.object({
        description: callDescriptionSchema.optional()
    });
    const smartModeApprovalParametersSchema3 = external_exports.object({
        requestSmartModeApproval: external_exports.boolean().optional().describe("Set to true when immediately retrying the exact same MCP call after Auto-review blocks it and you decide the user should approve it through the native approval card."),
        smartModeBlockReason: external_exports.string().optional().describe("Provide the exact block reason returned by Auto-review in the prior rejection. Required when requestSmartModeApproval is true so the approval card shows the original classifier reason without re-running the classifier.")
    });
    const smartModeApprovalRequestParametersEnabled = smartModeClassifierMode;
    const mcpDetailsParametersSchema = external_exports.object({
        description: callDescriptionSchema,
        ...smartModeApprovalRequestParametersEnabled ? {
            requestSmartModeApproval: smartModeApprovalParametersSchema3.shape.requestSmartModeApproval.default(false),
            smartModeBlockReason: smartModeApprovalParametersSchema3.shape.smartModeBlockReason
        } : {}
    });
    const mcpDetailsInputSchema = external_exports.object({
        description: callDescriptionSchema.optional(),
        ...smartModeApprovalParametersSchema3.shape
    });
    const writeToFileEnabled = hackySymbolicToolCalls && mcpMetaToolEnabled && writeToolResultText !== void 0;
    const writeToFileModelParameters = writeToFileEnabled ? external_exports.object({
        write_to_file: external_exports.boolean().optional().describe("When true, the tool's result is written to a file under agent-tools/ in the workspace instead of being returned inline, regardless of its size; the result then reports the file path, size, and line count. Use it when you expect a large result that you want to read selectively or pass on to another tool by path. System reminders attached to the call are still returned inline.")
    }).shape : {};
    const readNestedWriteToFile = (raw)=>{
        const nested = asRecord(raw.arguments)?.write_to_file;
        const server = raw.server ?? raw.namespace;
        if (typeof nested !== "boolean" || typeof server !== "string" || typeof raw.toolName !== "string") {
            return void 0;
        }
        let schema2;
        if (isReservedDynamicToolsNamespace(server)) {
            schema2 = dynamicToolRegistry?.getTool(raw.toolName)?.parameters.jsonSchema;
        } else {
            const descriptor = serverDescriptors.get(server)?.tools.find((tool)=>tool.toolName === raw.toolName);
            schema2 = descriptor === void 0 ? void 0 : mcpInputSchemaToJson(descriptor);
        }
        const properties = asRecord(asRecord(schema2)?.properties);
        return properties === void 0 || "write_to_file" in properties ? void 0 : nested;
    };
    const readWriteToFile = (raw)=>{
        const nested = readNestedWriteToFile(raw);
        const writeToFile = typeof raw.write_to_file === "boolean" ? raw.write_to_file : nested === true;
        if (nested === void 0) {
            return {
                writeToFile,
                arguments: void 0
            };
        }
        const { write_to_file: _lifted, ...rest } = asRecord(raw.arguments) ?? {};
        return {
            writeToFile,
            arguments: rest
        };
    };
    const parametersSchema29 = useDynamicToolNamespaces ? modelIdentityParametersSchema.extend({
        mcpDetails: mcpDetailsParametersSchema.optional().describe("MCP-specific call metadata. Set this only when invoking a tool from an external MCP namespace; omit it for first-party tools in the cursor namespace."),
        ...writeToFileModelParameters,
        arguments: argumentsParameterSchema
    }) : modelIdentityParametersSchema.extend({
        ...descriptionParametersSchema.shape,
        ...smartModeApprovalRequestParametersEnabled ? smartModeApprovalParametersSchema3.shape : {},
        ...writeToFileModelParameters,
        arguments: argumentsParameterSchema
    });
    const normalizeCallMcpToolArgsInput = (raw)=>{
        if (raw === null || typeof raw !== "object" || Array.isArray(raw)) {
            return raw;
        }
        const normalized = {
            ...raw
        };
        if (useDynamicToolNamespaces) {
            if (normalized.namespace !== void 0) {
                normalized.server = normalized.namespace;
                delete normalized.namespace;
            }
            const missingIdentity = [
                normalized.server === void 0 ? "namespace" : void 0,
                normalized.toolName === void 0 ? "toolName" : void 0
            ].filter((field4)=>field4 !== void 0);
            if (missingIdentity.length > 0) {
                throw new Error(`Missing required ${missingIdentity.length === 1 ? "field" : "fields"}: ${missingIdentity.join(", ")}. Re-issue the call with the tool's identity set; \`arguments\` alone does not identify the tool.`);
            }
        }
        if (normalized.descriptionForMcp !== void 0) {
            normalized.description ??= normalized.descriptionForMcp;
            delete normalized.descriptionForMcp;
            reportShim(descriptionForMcpAlias.applied(void 0));
        }
        const maybeArguments = normalized.arguments;
        if (typeof maybeArguments === "string") {
            const recovered = parseArgumentsLeniently(maybeArguments);
            if (recovered === void 0) {
                const refusal = reportShim(stringifiedDynamicToolArguments.refused("unparseable_arguments", "Failed to parse arguments string as JSON object. Re-issue the call with `arguments` as a JSON object literal rather than a quoted string."));
                throw new Error(refusal.message);
            }
            reportShim(stringifiedDynamicToolArguments.applied(void 0, {
                log: {
                    repaired: recovered.repaired
                }
            }));
            const args = recovered.args;
            const foldedFields = [];
            if (recovered.repaired) {
                const foldedDetails = args.mcpDetails;
                if (foldedDetails !== void 0) {
                    delete args.mcpDetails;
                    normalized.mcpDetails ??= foldedDetails;
                    foldedFields.push("mcpDetails");
                }
                const foldedDescription = args.descriptionForMcp;
                if (foldedDescription !== void 0) {
                    delete args.descriptionForMcp;
                    normalized.description ??= foldedDescription;
                    foldedFields.push("descriptionForMcp");
                }
            }
            const leakedDescription = recovered.envelopeFields?.description;
            if (leakedDescription !== void 0 && normalized.description === void 0) {
                normalized.description = leakedDescription;
                foldedFields.push("description");
            }
            if (foldedFields.length > 0) {
                reportShim(envelopeFieldsInArguments.applied(void 0, {
                    log: {
                        fields: foldedFields.join(",")
                    }
                }));
            }
            normalized.arguments = args;
        }
        if (hackySymbolicToolCalls) {
            const lifted = readWriteToFile(normalized).arguments;
            if (lifted !== void 0) {
                normalized.arguments = lifted;
                reportShim(writeToFileInArguments.applied(void 0));
            }
        }
        const inner = normalized.arguments;
        if (smartModeApprovalRequestParametersEnabled && inner != null && typeof inner === "object" && !Array.isArray(inner)) {
            const innerRecord = inner;
            if ("requestSmartModeApproval" in innerRecord || "smartModeBlockReason" in innerRecord) {
                const stripped = {
                    ...innerRecord
                };
                normalized.requestSmartModeApproval ??= stripped.requestSmartModeApproval;
                normalized.smartModeBlockReason ??= stripped.smartModeBlockReason;
                delete stripped.requestSmartModeApproval;
                delete stripped.smartModeBlockReason;
                normalized.arguments = stripped;
                reportShim(smartModeKeysInArguments.applied(void 0));
            }
        }
        return normalized;
    };
    const internalParametersSchema = useDynamicToolNamespaces ? baseParametersSchema3.extend({
        ...descriptionParametersSchema.shape,
        ...smartModeApprovalParametersSchema3.shape,
        mcpDetails: mcpDetailsInputSchema.optional()
    }).transform(({ mcpDetails, ...args })=>({
            ...args,
            description: mcpDetails?.description ?? args.description,
            requestSmartModeApproval: mcpDetails?.requestSmartModeApproval ?? args.requestSmartModeApproval,
            smartModeBlockReason: mcpDetails?.smartModeBlockReason ?? args.smartModeBlockReason
        })) : baseParametersSchema3.extend({
        ...descriptionParametersSchema.shape,
        ...smartModeApprovalRequestParametersEnabled ? smartModeApprovalParametersSchema3.shape : {}
    });
    const parsingParametersSchema = external_exports.preprocess(normalizeCallMcpToolArgsInput, internalParametersSchema);
    const descriptorLookup = (args)=>{
        const descriptor = serverDescriptors.get(args.serverIdentifier);
        if (descriptor === void 0) {
            return "no-server";
        }
        if (!(descriptor.tools ?? []).some((tool)=>tool.toolName === args.toolName)) {
            return "no-tool";
        }
        return "ok";
    };
    const throwForDescriptorMiss = (args)=>{
        if (args.status === "no-server") {
            throw new McpServerDoesNotExistError(args.serverIdentifier, `Use ${resolvedGetMcpToolsToolName} to discover available ${useDynamicToolNamespaces ? "namespaces" : "servers"}.`);
        }
        throw new McpExecToolNotFoundError({
            errorMessage: `Tool ${args.toolName} was not found. Use ${resolvedGetMcpToolsToolName} to discover available ${useDynamicToolNamespaces ? "namespaces" : "servers"} and their tools.`
        });
    };
    const applyRefreshedMcpDescriptors = (refreshed)=>{
        let appliedComplete = false;
        for (const incoming of refreshed){
            const previous = serverDescriptors.get(incoming.serverIdentifier);
            const rawTools = incoming.tools ?? [];
            const descriptorTools = allowInteractiveMcpAuth ? rawTools : rawTools.filter((t)=>t.toolName !== MCP_AUTH_VIRTUAL_TOOL_NAME);
            const previousTools = previous?.tools ?? [];
            const incomingIsIncomplete = descriptorTools.length === 0 || isMcpAuthPlaceholderCatalog(descriptorTools);
            if (incomingIsIncomplete && previousTools.length === 0) {
                continue;
            }
            const mergedIncoming = incomingIsIncomplete && previousTools.length > 0 ? catalogAfterIncompleteMcpRefresh({
                previousTools,
                incomingTools: descriptorTools
            }) : descriptorTools;
            const toolsSource = allowInteractiveMcpAuth ? keepInteractiveMcpAuthTool({
                previousTools,
                incomingTools: mergedIncoming
            }) : mergedIncoming;
            const merged = new McpDescriptor({
                serverIdentifier: incoming.serverIdentifier,
                serverName: incoming.serverName || previous?.serverName,
                plugin: incoming.plugin || previous?.plugin,
                marketplace: incoming.marketplace || previous?.marketplace,
                serverUseInstructions: incoming.serverUseInstructions || previous?.serverUseInstructions,
                folderPath: previous?.folderPath ?? incoming.folderPath,
                pluginDbId: previous?.pluginDbId ?? incoming.pluginDbId,
                marketplaceId: previous?.marketplaceId ?? incoming.marketplaceId,
                tools: toolsSource.map((tool)=>{
                    const previousTool = previousTools.find((candidate)=>candidate.toolName === tool.toolName);
                    return new McpToolDescriptor({
                        toolName: tool.toolName,
                        description: tool.description,
                        definitionPath: tool.definitionPath || previousTool?.definitionPath,
                        inputSchema: tool.inputSchema,
                        inputSchemaJson: tool.inputSchemaJson,
                        annotationsJson: tool.annotationsJson ?? previousTool?.annotationsJson
                    });
                })
            });
            serverDescriptors.set(incoming.serverIdentifier, merged);
            appliedComplete = true;
            for (const tool of merged.tools ?? []){
                if (tool.definitionPath) {
                    toolDefinitionPaths.set(`${incoming.serverIdentifier}:${tool.toolName}`, tool.definitionPath);
                }
            }
        }
        return appliedComplete;
    };
    const descriptorRefreshesByState = new WeakMap();
    const descriptorRefreshesFallback = new Map();
    const refreshDescriptorOncePerTurn = async (args)=>{
        const key = args.serverIdentifier;
        const startRefresh = async (map4)=>{
            const refreshed = await fetchMcpDescriptorsWithRefreshPolicy(args.ctx, resourceAccessor, {
                serverIdentifiers: [
                    args.serverIdentifier
                ],
                refreshPolicy: McpRefreshPolicy.FORCE_IF_MISSING
            });
            if (refreshed === void 0) {
                return;
            }
            const applied = applyRefreshedMcpDescriptors(refreshed.filter((descriptor)=>descriptor.serverIdentifier === args.serverIdentifier));
            if (!applied) {
                map4.delete(key);
            }
        };
        const getOrStart = (map4)=>{
            let pending = map4.get(key);
            if (pending === void 0) {
                pending = startRefresh(map4).catch((error3)=>{
                    map4.delete(key);
                    throw error3;
                });
                map4.set(key, pending);
            }
            return pending;
        };
        if (args.stateHandler !== null && typeof args.stateHandler === "object") {
            const turnCount = mcpCatalogTurnCount(args.stateHandler);
            let scope = descriptorRefreshesByState.get(args.stateHandler);
            if (scope === void 0 || scope.turnCount !== turnCount) {
                scope = {
                    turnCount,
                    inflight: new Map()
                };
                descriptorRefreshesByState.set(args.stateHandler, scope);
            }
            await getOrStart(scope.inflight);
            return;
        }
        await getOrStart(descriptorRefreshesFallback);
    };
    const ensureToolOnMcpToolDescriptors = async (args)=>{
        if (descriptorLookup({
            serverIdentifier: args.serverIdentifier,
            toolName: args.toolName
        }) === "ok") {
            return;
        }
        await refreshDescriptorOncePerTurn(args);
        const status = descriptorLookup({
            serverIdentifier: args.serverIdentifier,
            toolName: args.toolName
        });
        if (status !== "ok") {
            throwForDescriptorMiss({
                serverIdentifier: args.serverIdentifier,
                toolName: args.toolName,
                status
            });
        }
    };
    const checkToolDefinitionRead = (serverIdentifier, toolName, stateHandler)=>{
        if (!stateHandler) {
            return {
                kind: "read"
            };
        }
        const serverDescriptor = serverDescriptors.get(serverIdentifier);
        if (!serverDescriptor) {
            if (mcpMetaToolEnabled && serverDescriptors.size === 0) {
                return {
                    kind: "read"
                };
            }
            return {
                kind: "noServer",
                serverIdentifier
            };
        }
        const toolKey = `${serverIdentifier}:${toolName}`;
        const definitionPath = toolDefinitionPaths.get(toolKey);
        if (!definitionPath) {
            if (mcpMetaToolEnabled) {
                return {
                    kind: "read"
                };
            }
            return {
                kind: "noTool",
                toolName,
                serverPath: serverDescriptor.folderPath
            };
        }
        if (stateHandler.hasReadPath(safeString(definitionPath))) {
            return {
                kind: "read"
            };
        }
        return {
            kind: "unread",
            unreadPath: definitionPath
        };
    };
    const advertisedInputSchema = (serverIdentifier, toolName)=>{
        const tool = serverDescriptors.get(serverIdentifier)?.tools.find((candidate)=>candidate.toolName === toolName);
        return tool === void 0 ? void 0 : mcpInputSchemaToJson(tool);
    };
    const execute = async (parentCtx, interactionHandler, requestedArgs, meta)=>{
        const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource55(env_2, createSpan(parentCtx.withName("callMcpToolExecute")), false);
            const startTime = Date.now();
            const mcpMode = mcpMetaToolEnabled ? "meta_tool" : "file_system";
            const inputSchema = normalizeArgumentsToInputSchema ? advertisedInputSchema(requestedArgs.server, requestedArgs.toolName) : void 0;
            const schemaNormalization = inputSchema === void 0 ? void 0 : normalizeMcpArgumentsToInputSchema(requestedArgs.arguments, inputSchema);
            const args = schemaNormalization === void 0 ? requestedArgs : {
                ...requestedArgs,
                arguments: schemaNormalization.arguments
            };
            const shims = new ShimCall();
            if (schemaNormalization !== void 0 && (schemaNormalization.renamedKeys > 0 || schemaNormalization.enumValues > 0)) {
                shims.report(schemaKeySpelling.applied(void 0, {
                    log: {
                        server: args.server,
                        renamed_keys: schemaNormalization.renamedKeys,
                        enum_values: schemaNormalization.enumValues
                    }
                }));
                shims.flush(spanCtxt.ctx);
            }
            const precededByGetMcpToolsSearch = mcpMetaToolEnabled && await wasPrecededByGetMcpToolsSearch(spanCtxt.ctx, meta.stateHandler);
            const emitSuccessMetrics = (ctx, result, calledWithoutReadDef2)=>{
                const durationMs2 = Date.now() - startTime;
                let responseBytes = 0;
                if (result.result.case === "success") {
                    for (const item of result.result.value.content){
                        if (item.content.case === "text") {
                            responseBytes += item.content.value.outputLocation === void 0 ? Buffer.byteLength(item.content.value.text, "utf8") : Number(item.content.value.outputLocation.sizeBytes);
                        } else if (item.content.case === "image") {
                            responseBytes += item.content.value.data.length;
                        }
                    }
                }
                emitCallMcpToolMetrics(ctx, {
                    mcpMode,
                    durationMs: durationMs2,
                    success: true,
                    responseBytes,
                    calledWithoutReadDef: calledWithoutReadDef2
                });
                if (precededByGetMcpToolsSearch) {
                    emitMcpSearchThenCallResult(ctx, "success");
                }
            };
            const emitErrorMetrics = (ctx, input)=>{
                const { failureReason, retryable, calledWithoutReadDef: calledWithoutReadDef2, error: error3 } = input;
                const durationMs2 = Date.now() - startTime;
                emitCallMcpToolMetrics(ctx, {
                    mcpMode,
                    durationMs: durationMs2,
                    success: false,
                    failureReason,
                    retryable,
                    calledWithoutReadDef: calledWithoutReadDef2
                });
                if (error3 !== void 0) {
                    reportMcpMetaToolFailure(ctx, error3, {
                        tool: name17,
                        failureReason,
                        retryable,
                        server: args.server,
                        toolName: args.toolName,
                        mcpMode,
                        durationMs: durationMs2
                    });
                }
                if (precededByGetMcpToolsSearch) {
                    emitMcpSearchThenCallResult(ctx, failureReason === CALL_MCP_TOOL_FAILURE_REASONS.TOOL_NOT_FOUND ? "tool_not_found" : "error");
                }
            };
            if (!mcpFileSystemOptions && !mcpMetaToolEnabled) {
                throw new Error("MCP file system options are required for CallMcpTool");
            }
            if (!allowInteractiveMcpAuth && args.toolName === MCP_AUTH_VIRTUAL_TOOL_NAME) {
                throw new CustomToolCallError(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
                    error: "Interactive MCP authentication is only available in the Cursor desktop IDE.",
                    clientVisibleErrorMessage: nonInteractiveAuthError?.clientVisible ?? "Interactive MCP authentication is only available in the Cursor desktop IDE.",
                    modelVisibleErrorMessage: nonInteractiveAuthError?.modelVisible ?? "Interactive MCP authentication is not available in this agent environment. Ask the user to authenticate the MCP server in the Cursor desktop IDE, then retry."
                });
            }
            if (args.toolName === MCP_AUTH_VIRTUAL_TOOL_NAME && !supportsInteractiveMcpAuth(args.server.trim())) {
                const nonAuthenticatableMessage = `"${args.server}" is a built-in Cursor server that does not use interactive authentication.`;
                throw new CustomToolCallError(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
                    error: nonAuthenticatableMessage,
                    clientVisibleErrorMessage: nonAuthenticatableMessage,
                    modelVisibleErrorMessage: `${nonAuthenticatableMessage} If its tools are failing, the failure is not an authentication problem; read the tool error and address that instead.`
                });
            }
            if (isMcpToolBlocked?.({
                serverIdentifier: args.server,
                toolName: args.toolName
            }) === true) {
                const blockedMessage = `Tool "${args.toolName}" on "${args.server}" is not available in this agent context.`;
                emitErrorMetrics(spanCtxt.ctx, {
                    failureReason: CALL_MCP_TOOL_FAILURE_REASONS.REJECTED,
                    retryable: false,
                    calledWithoutReadDef: false
                });
                throw new CustomToolCallError(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
                    error: blockedMessage,
                    clientVisibleErrorMessage: blockedMessage,
                    modelVisibleErrorMessage: `${blockedMessage} ${mcpToolBlockedModelSuffix ?? "It speaks to the end user on the parent agent's behalf and is reserved for the parent agent. Include anything you want communicated in your final response instead."}`
                });
            }
            if (dynamicToolRegistry !== void 0 && !dynamicToolRegistry.isEmpty() && isReservedDynamicToolsNamespace(args.server)) {
                const innerTool = dynamicToolRegistry.getTool(args.toolName);
                logger62.info(spanCtxt.ctx, "Built-in tool dispatch via CallDynamicTool", {
                    toolName: args.toolName,
                    found: innerTool !== void 0
                });
                if (innerTool === void 0) {
                    const availableTools = dynamicToolRegistry.getToolNames();
                    const message = availableTools.length === 0 ? `No built-in tools are available ${useDynamicToolNamespaces ? "in namespace" : "on server"} "${args.server}".` : `Built-in tool "${args.toolName}" not found ${useDynamicToolNamespaces ? "in namespace" : "on server"} "${args.server}". Available tools: ${availableTools.join(", ")}. Use ${resolvedGetMcpToolsToolName} to discover their schemas.`;
                    emitCallMcpToolMetrics(spanCtxt.ctx, {
                        mcpMode: "meta_tool",
                        durationMs: Date.now() - startTime,
                        success: false,
                        failureReason: CALL_MCP_TOOL_FAILURE_REASONS.TOOL_NOT_FOUND
                    });
                    if (precededByGetMcpToolsSearch) {
                        emitMcpSearchThenCallResult(spanCtxt.ctx, "tool_not_found");
                    }
                    throw new CustomToolCallError(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
                        error: message,
                        clientVisibleErrorMessage: message,
                        modelVisibleErrorMessage: message
                    });
                }
                if (hackySymbolicToolCalls) {
                    const symbolicPaths = collectSymbolicPathArguments(args.arguments);
                    if (symbolicPaths.length > 0) {
                        throw symbolicPathArgumentsUnsupportedError(args.toolName, symbolicPaths);
                    }
                }
                const argsJson = JSON.stringify(args.arguments ?? {});
                const argsStream = (async function*() {
                    yield argsJson;
                })();
                try {
                    const output = await executeToolResultOrError(innerTool, spanCtxt.ctx, interactionHandler, argsStream, meta);
                    const rendered = await renderToolResultOrError(spanCtxt.ctx, innerTool, output, {
                        allTools: dynamicToolRegistry.getDescriptionProps().allTools,
                        blobStore: meta.stateHandler?.getBlobStore?.()
                    });
                    if ("error" in output) {
                        const message = rendered.content.filter((item)=>item.type === "text").map((item)=>item.text).join("\n") || "Dynamic tool execution failed";
                        throw new DynamicToolExecutionError(output.errorClassification, {
                            error: message,
                            clientVisibleErrorMessage: message,
                            modelVisibleErrorMessage: message,
                            systemReminders: rendered.systemReminders
                        });
                    }
                    const result = agentToolResultToMcpToolResult(rendered);
                    emitCallMcpToolMetrics(spanCtxt.ctx, {
                        mcpMode: "meta_tool",
                        durationMs: Date.now() - startTime,
                        success: true
                    });
                    if (precededByGetMcpToolsSearch) {
                        emitMcpSearchThenCallResult(spanCtxt.ctx, "success");
                    }
                    return result;
                } catch (error3) {
                    emitCallMcpToolMetrics(spanCtxt.ctx, {
                        mcpMode: "meta_tool",
                        durationMs: Date.now() - startTime,
                        success: false,
                        failureReason: CALL_MCP_TOOL_FAILURE_REASONS.OTHER
                    });
                    if (precededByGetMcpToolsSearch) {
                        emitMcpSearchThenCallResult(spanCtxt.ctx, "error");
                    }
                    throw error3;
                }
            }
            if (validateMcpToolDescriptors) {
                await ensureToolOnMcpToolDescriptors({
                    ctx: spanCtxt.ctx,
                    serverIdentifier: args.server,
                    toolName: args.toolName,
                    stateHandler: meta.stateHandler
                });
            }
            if (schemaNormalization !== void 0 && schemaNormalization.missingRequired.length > 0 && schemaNormalization.undeclaredKeys.length === 0) {
                const refusal = shims.report(missingRequiredArguments.refused("missing_required_arguments", missingRequiredArgumentsMessage(args.toolName, schemaNormalization.missingRequired, JSON.stringify(inputSchema)), {
                    server: args.server,
                    missing: schemaNormalization.missingRequired.length
                }));
                shims.flush(spanCtxt.ctx);
                const error3 = new McpMissingRequiredArgumentsError(refusal.message);
                emitErrorMetrics(spanCtxt.ctx, {
                    failureReason: CALL_MCP_TOOL_FAILURE_REASONS.MISSING_REQUIRED_ARGUMENTS,
                    retryable: false,
                    calledWithoutReadDef: false,
                    error: error3
                });
                throw error3;
            }
            const unreadToolCheck = checkToolDefinitionRead(args.server, args.toolName, meta.stateHandler);
            const calledWithoutReadDef = unreadToolCheck.kind === "unread";
            logger62.info(spanCtxt.ctx, "MCP tool call", {
                server: args.server,
                toolName: args.toolName,
                calledWithoutReadDef,
                ...calledWithoutReadDef && {
                    unreadPath: unreadToolCheck.unreadPath
                }
            });
            let readToolDefReminder;
            if (unreadToolCheck.kind === "unread") {
                if (mcpMetaToolEnabled) {
                    readToolDefReminder = `You called this tool without first discovering its schema via ${resolvedGetMcpToolsToolName}. For future calls, call ${resolvedGetMcpToolsToolName} with {"${useDynamicToolNamespaces ? "namespace" : "server"}":"${args.server}","toolName":"${args.toolName}"} before calling ${name17}.`;
                } else {
                    readToolDefReminder = `You called this MCP tool without first reading its schema/descriptor file. For future calls to this tool, please read the tool definition at "${unreadToolCheck.unreadPath}" first to ensure you're using the correct parameters.`;
                }
            }
            const toolDefinitionPath = toolDefinitionPaths.get(`${args.server}:${args.toolName}`);
            const getInvalidArgsToolDefReminder = ()=>{
                if (readToolDefReminder !== void 0) {
                    return readToolDefReminder;
                }
                if (mcpMetaToolEnabled) {
                    return `The ${useDynamicToolNamespaces ? "namespace" : "MCP server"} rejected these arguments as invalid. Before retrying, call ${resolvedGetMcpToolsToolName} with {"${useDynamicToolNamespaces ? "namespace" : "server"}":"${args.server}","toolName":"${args.toolName}"} and rebuild the arguments from the returned input schema.`;
                }
                if (toolDefinitionPath !== void 0) {
                    return `The MCP server rejected these arguments as invalid. Before retrying, read the tool definition at "${toolDefinitionPath}" and rebuild the arguments from that schema.`;
                }
                return `The MCP server rejected these arguments as invalid. Before retrying, read the MCP server descriptor files for "${args.server}" and the tool definition for "${args.toolName}" so the arguments match the schema.`;
            };
            const invalidArgsToolDefReminder = getInvalidArgsToolDefReminder();
            const descriptor = serverDescriptors.get(args.server);
            if (descriptor !== void 0) {
                spanCtxt.span.setAttribute("serverName", args.server);
                if (descriptor.tools.some((tool)=>tool.toolName === args.toolName)) {
                    spanCtxt.span.setAttribute("toolName", args.toolName);
                }
            }
            const serverDisplayName = descriptor?.serverName ?? args.server;
            const plugin = descriptor?.plugin;
            const marketplace = descriptor?.marketplace;
            const pluginId = descriptor?.pluginDbId;
            const marketplaceId = descriptor?.marketplaceId;
            if (allowInteractiveMcpAuth && args.toolName === MCP_AUTH_VIRTUAL_TOOL_NAME) {
                const serverIdentifier = args.server.trim();
                if (serverIdentifier.length === 0) {
                    const message = "Missing serverIdentifier or toolCallId";
                    throw new CustomToolCallError(ToolErrorClassification.INVALID_ARGS, {
                        error: message,
                        clientVisibleErrorMessage: message,
                        modelVisibleErrorMessage: message
                    });
                }
                const mcpAuthArgs = new McpAuthArgs({
                    serverIdentifier,
                    toolCallId: meta.toolCallId
                });
                const pendingAuthToolCall = createMcpAuthToolCall(new McpAuthToolCall({
                    args: mcpAuthArgs
                }));
                await interactionHandler.emitPartialToolCall(spanCtxt.ctx, meta.toolCallId, pendingAuthToolCall);
                await interactionHandler.recordPendingToolCall(spanCtxt.ctx, meta.toolCallId, pendingAuthToolCall);
                const tracker = getAgentEventTracker(spanCtxt.ctx);
                tracker.trackMcpToolCall(spanCtxt.ctx, {
                    toolCallId: meta.toolCallId,
                    name: args.toolName,
                    mcpServerName: serverDisplayName,
                    origin: getMcpToolOrigin(args.server),
                    plugin,
                    marketplace,
                    pluginId,
                    marketplaceId
                });
                const paramsJson = JSON.stringify(args.arguments ?? {});
                try {
                    const mcpAuthResponse = await queryMcpAuth(interactionHandler.listener, spanCtxt.ctx, mcpAuthArgs);
                    const rejectedReason = mcpAuthResponse.result.case === "rejected" ? mcpAuthResponse.result.value.reason || "User rejected MCP authentication" : void 0;
                    const authResult = rejectedReason === void 0 ? createVirtualMcpAuthSuccessResult(serverIdentifier) : createVirtualMcpAuthRejectedResult(rejectedReason);
                    if (rejectedReason === void 0) {
                        tracker.trackMcpToolCallResult(spanCtxt.ctx, {
                            toolCallId: meta.toolCallId,
                            toolName: args.toolName,
                            mcpServerName: serverDisplayName,
                            paramsJson,
                            success: true
                        });
                        emitSuccessMetrics(spanCtxt.ctx, authResult, calledWithoutReadDef);
                    } else {
                        const rejectedError = new ToolCallRejectedError(rejectedReason);
                        tracker.trackMcpToolCallResult(spanCtxt.ctx, {
                            toolCallId: meta.toolCallId,
                            toolName: args.toolName,
                            mcpServerName: serverDisplayName,
                            paramsJson,
                            success: false,
                            errorMessage: rejectedError.message,
                            errorClassification: getWrappedMcpErrorClassification(rejectedError),
                            ...mcpToolErrorTrackingFields(mcpThrownErrorDetail(rejectedError))
                        });
                        emitErrorMetrics(spanCtxt.ctx, {
                            failureReason: CALL_MCP_TOOL_FAILURE_REASONS.REJECTED,
                            retryable: false,
                            calledWithoutReadDef,
                            error: rejectedError
                        });
                    }
                    await interactionHandler.executeToolCall(spanCtxt.ctx, pendingAuthToolCall, meta.toolCallId, async ()=>authResult, ()=>createMcpAuthToolCall(new McpAuthToolCall({
                            args: mcpAuthArgs,
                            result: new McpAuthResult({
                                result: rejectedReason === void 0 ? {
                                    case: "success",
                                    value: new McpAuthSuccess({
                                        serverIdentifier
                                    })
                                } : {
                                    case: "rejected",
                                    value: new McpAuthRejected({
                                        reason: rejectedReason
                                    })
                                }
                            })
                        })), meta.hookContextCollector);
                    return authResult;
                } catch (error3) {
                    tracker.trackMcpToolCallResult(spanCtxt.ctx, {
                        toolCallId: meta.toolCallId,
                        toolName: args.toolName,
                        mcpServerName: serverDisplayName,
                        paramsJson,
                        success: false,
                        errorMessage: error3 instanceof Error ? error3.message : String(error3),
                        errorClassification: error3 instanceof Error ? getWrappedMcpErrorClassification(error3) : ToolErrorClassification.OTHER_ERROR,
                        ...mcpToolErrorTrackingFields(mcpThrownErrorDetail(error3))
                    });
                    emitErrorMetrics(spanCtxt.ctx, {
                        failureReason: error3 instanceof ToolCallRejectedError ? CALL_MCP_TOOL_FAILURE_REASONS.REJECTED : CALL_MCP_TOOL_FAILURE_REASONS.OTHER,
                        retryable: false,
                        calledWithoutReadDef,
                        error: error3
                    });
                    throw error3;
                }
            }
            const symbolicPathArguments = hackySymbolicToolCalls && args.arguments !== void 0 ? await describeSymbolicToolArguments(spanCtxt.ctx, {
                args: args.arguments,
                getReadExecutor: ()=>symbolicPathReadExecutor?.() ?? resourceAccessor.get(shouldPreferRedactedReadTool(requestContext) ? redactedReadExecutorResource : readExecutorResource),
                toolCallId: meta.toolCallId,
                routeUnavailableReason: symbolicPathArgumentsUnavailableFor === void 0 ? void 0 : ()=>symbolicPathArgumentsUnavailableFor(spanCtxt.ctx, serverDisplayName)
            }) : [];
            const symbolicPathArgumentsForClassifier = symbolicPathArgumentsForReview(symbolicPathArguments);
            const symbolicPathArgumentBindings = symbolicPathArgumentsForApproval(symbolicPathArguments);
            const toolArgs = new McpArgs({
                name: `${args.server}-${args.toolName}`,
                args: Object.fromEntries(Object.entries(args.arguments ?? {}).map(([key, value])=>[
                        key,
                        Value.fromJson(value)
                    ])),
                toolCallId: meta.toolCallId,
                providerIdentifier: serverDisplayName,
                toolName: args.toolName,
                serverIdentifier: args.server,
                symbolicPathArguments
            });
            const baseToolCall = new McpToolCall({
                args: toolArgs,
                result: void 0,
                description: args.description
            });
            return await interactionHandler.executeToolCall(spanCtxt.ctx, createMcpToolCall(baseToolCall), meta.toolCallId, async (ctx)=>{
                const tracker = getAgentEventTracker(ctx);
                tracker.trackMcpToolCall(ctx, {
                    toolCallId: meta.toolCallId,
                    name: args.toolName,
                    mcpServerName: serverDisplayName,
                    origin: getMcpToolOrigin(args.server),
                    plugin,
                    marketplace,
                    pluginId,
                    marketplaceId
                });
                const paramsJson = JSON.stringify(args.arguments ?? {});
                const smartModeClassifierState = getSmartModeClassifierRuntimeState({
                    agentType,
                    requestContext,
                    smartModeClassifierMode,
                    smartModeClassifierShadowMode,
                    devBlockState: devSmartModeClassifierBlockState,
                    devDelayState: devSmartModeClassifierDelayState
                });
                const smartModeClassifierEnabled = smartModeClassifierState.enabled;
                const smartModeClassifierShadowEnabled = smartModeClassifierState.shadowEnabled;
                const runtimeDevSmartModeClassifierBlockState = smartModeClassifierState.devBlockState;
                const runtimeDevSmartModeClassifierDelayState = smartModeClassifierState.devDelayState;
                const toolDescriptor = descriptor?.tools.find((tool)=>tool.toolName === args.toolName);
                let allowlistedByPrecheck = false;
                if ((smartModeClassifierEnabled || smartModeClassifierShadowEnabled) && args.requestSmartModeApproval !== true && !disableSmartModeAllowlistPrecheck) {
                    const precheckExecutor = resourceAccessor.get(mcpAllowlistPrecheckExecutorResource);
                    if (precheckExecutor !== void 0) {
                        try {
                            const precheck = await precheckExecutor.execute(ctx, new McpAllowlistPrecheckArgs({
                                providerIdentifier: serverDisplayName,
                                toolName: args.toolName,
                                toolCallId: meta.toolCallId,
                                annotationsJson: toolDescriptor?.annotationsJson
                            }));
                            allowlistedByPrecheck = precheck.allowlisted;
                        } catch (error3) {
                            if (error3 instanceof Error && error3.name === "AbortError") {
                                throw error3;
                            }
                            if (isAgentStreamStartTimeoutError(error3)) {
                                throw error3;
                            }
                            logger62.warn(ctx, "MCP allowlist precheck failed", {
                                error: error3 instanceof Error ? error3.message : String(error3)
                            });
                        }
                    }
                }
                const abortSignal = interactionHandler.getAbortSignal?.(ctx) ?? ctx.signal;
                const toolDefinitionDescription = toolDescriptor?.description ?? "";
                const toolDefinitionInputSchemaText = JSON.stringify(toolDescriptor?.inputSchema?.toJson() ?? null);
                const toolDefinitionAnnotations = parseMcpToolAnnotations(toolDescriptor?.annotationsJson);
                const toolDefinitionText = JSON.stringify({
                    description: toolDefinitionDescription,
                    inputSchema: toolDescriptor?.inputSchema?.toJson() ?? null,
                    annotations: toolDefinitionAnnotations ?? null
                });
                const toolDefinitionBinding = smartModeApprovalProvider === void 0 ? void 0 : {
                    identity: toolDefinitionPath ?? `${args.server}:${args.toolName}`,
                    hash: toolDescriptor === void 0 ? void 0 : (0, import_node_crypto28.createHash)("sha256").update(toolDefinitionText).digest("hex")
                };
                const toolDefinitionMetadata = smartModeApprovalProvider === void 0 ? void 0 : {
                    description: toolDefinitionDescription.slice(0, 4e3),
                    input_schema_json: toolDefinitionInputSchemaText.slice(0, 12e3),
                    ...toolDefinitionAnnotations === void 0 ? {} : {
                        annotations: toolDefinitionAnnotations
                    },
                    definition_hash: toolDefinitionBinding?.hash ?? "",
                    truncated: toolDefinitionDescription.length > 4e3 || toolDefinitionInputSchemaText.length > 12e3
                };
                const loadWorkspacePermissionFiles = loadSmartModeWorkspacePermissionFiles;
                const smartModeApproval = allowlistedByPrecheck ? void 0 : await rejectSmartModeMcpPreflightBlock(ctx, {
                    resourceAccessor,
                    enabled: smartModeClassifierEnabled,
                    shadowEnabled: smartModeClassifierShadowEnabled,
                    toolCallId: meta.toolCallId,
                    stateHandler: meta.stateHandler,
                    devSmartModeClassifierBlockState: runtimeDevSmartModeClassifierBlockState,
                    devSmartModeClassifierDelayState: runtimeDevSmartModeClassifierDelayState,
                    workspacePaths: loadWorkspacePermissionFiles ? meta.workspacePaths : void 0,
                    userAutoRunInstructions: loadWorkspacePermissionFiles ? meta.userAutoRunInstructions ?? userAutoRunInstructions : userAutoRunInstructions,
                    projectAutoRunInstructions: loadWorkspacePermissionFiles ? meta.projectAutoRunInstructions ?? projectAutoRunInstructions : projectAutoRunInstructions,
                    requestSmartModeApproval: args.requestSmartModeApproval,
                    smartModeBlockReason: args.smartModeBlockReason,
                    description: args.description,
                    approvalProvider: smartModeApprovalProvider,
                    signal: abortSignal,
                    useNestedMcpDetails: useDynamicToolNamespaces,
                    agentType,
                    toolDefinitionBinding,
                    extractSmartModeClassifierConversationContext: extractSmartModeClassifierConversationContext2,
                    suppressClassifierTelemetryIds: suppressSmartModeClassifierTelemetryIds,
                    classifierMaxAttempts: smartModeClassifierMaxAttempts,
                    target: {
                        serverIdentifier: args.server,
                        serverName: descriptor?.serverName,
                        serverDisplayName,
                        toolName: args.toolName,
                        mcpMode,
                        mcpArguments: args.arguments,
                        symbolicPathArguments: symbolicPathArgumentsForClassifier,
                        symbolicPathArgumentBindings,
                        toolDefinitionMetadata
                    },
                    onRejectWithoutNativeApproval: (error3)=>{
                        const telemetryError = new ToolCallRejectedError(SMART_MODE_MCP_PREFLIGHT_REJECTED_TELEMETRY_REASON);
                        tracker.trackMcpToolCallResult(ctx, {
                            toolCallId: meta.toolCallId,
                            toolName: args.toolName,
                            mcpServerName: serverDisplayName,
                            paramsJson,
                            success: false,
                            errorMessage: telemetryError.message,
                            errorClassification: getWrappedMcpErrorClassification(telemetryError),
                            ...mcpToolErrorTrackingFields(mcpThrownErrorDetail(error3))
                        });
                        emitErrorMetrics(ctx, {
                            failureReason: CALL_MCP_TOOL_FAILURE_REASONS.REJECTED,
                            retryable: false,
                            calledWithoutReadDef,
                            error: telemetryError
                        });
                    }
                });
                if (smartModeApproval !== void 0) {
                    toolArgs.smartModeApproval = smartModeApproval;
                } else if (smartModeClassifierEnabled && !allowlistedByPrecheck && !mcpToolRequiresConfirmation(toolDefinitionAnnotations)) {
                    toolArgs.skipApproval = true;
                }
                let execResult;
                try {
                    if (abortSignal.aborted) {
                        throw new ToolCallAbortedError();
                    }
                    const executeInner = (execCtx, mcpArgs)=>executor.execute(execCtx.with(agentToolExecutionMetaKey, meta), mcpArgs, {
                            execId: generateSeededUuid(meta.toolCallId),
                            hookContextCollector: meta.hookContextCollector
                        });
                    const steerReleaseSignal = steerReleaseReadOnlyTools && parseMcpToolAnnotations(toolDescriptor?.annotationsJson)?.readOnlyHint === true ? meta.contextInjectionSignal : void 0;
                    let steerReleaseOutcome;
                    const executeWithOptionalSteer = async (execCtx, mcpArgs)=>{
                        if (steerReleaseSignal === void 0) {
                            return executeInner(execCtx, mcpArgs);
                        }
                        const outcome = await raceMcpExecAgainstSteerRelease({
                            toolCtx: execCtx,
                            steerSignal: steerReleaseSignal,
                            minRuntimeMs: steerReleaseMinRuntimeMs,
                            drainMs: steerReleaseDrainMs,
                            run: (raceCtx)=>executeInner(raceCtx, mcpArgs)
                        });
                        if (outcome.kind === "completed") {
                            return outcome.execResult;
                        }
                        steerReleaseOutcome = outcome;
                        return new McpResult({
                            result: {
                                case: "success",
                                value: createSteerReleasedMcpSuccess({
                                    server: args.server,
                                    toolName: args.toolName,
                                    runtimeMs: outcome.runtimeMs
                                })
                            }
                        });
                    };
                    const executeMaybeHooked = wrapBackendRoutedMcpExecute({
                        executor,
                        providerIdentifier: serverDisplayName,
                        toolName: args.toolName,
                        executeFn: executeWithOptionalSteer,
                        hookOptions: {
                            resourceAccessor,
                            enableExecuteHookExec,
                            configuredSteps: requestContext?.hooksConfig?.configuredSteps,
                            model,
                            hookContextCollector: meta.hookContextCollector
                        },
                        requestContext: {
                            toolCallId: meta.toolCallId,
                            model,
                            conversationId: getConversationId(ctx)
                        }
                    });
                    execResult = await executeMaybeHooked(ctx, toolArgs);
                    if (steerReleaseOutcome !== void 0) {
                        logger62.info(ctx, "nal.steer_release.mcp", {
                            server: args.server,
                            toolName: args.toolName,
                            runtimeMs: steerReleaseOutcome.runtimeMs,
                            callId: meta.toolCallId,
                            ...steerReleaseOutcome.execErrorAfterRelease !== void 0 ? {
                                execErrorAfterRelease: steerReleaseOutcome.execErrorAfterRelease instanceof Error ? steerReleaseOutcome.execErrorAfterRelease.message : String(steerReleaseOutcome.execErrorAfterRelease)
                            } : {}
                        });
                        if (smartModeApproval !== void 0) {
                            try {
                                await cancelSmartModeMcpApprovalRequest(ctx, resourceAccessor.get(smartModeMcpApprovalStoreResource), smartModeApproval.requestId);
                            } catch (cancelError) {
                                logger62.warn(spanCtxt.ctx, "Failed to cancel Smart Mode MCP approval request after steer release", {
                                    error: cancelError,
                                    requestId: smartModeApproval.requestId
                                });
                            }
                        }
                        const releasedResult = createSteerReleasedMcpResult({
                            server: args.server,
                            toolName: args.toolName,
                            runtimeMs: steerReleaseOutcome.runtimeMs
                        });
                        tracker.trackMcpToolCallResult(ctx, {
                            toolCallId: meta.toolCallId,
                            toolName: args.toolName,
                            mcpServerName: serverDisplayName,
                            paramsJson,
                            success: true
                        });
                        emitSuccessMetrics(ctx, releasedResult, calledWithoutReadDef);
                        return releasedResult;
                    }
                } catch (error3) {
                    if (smartModeApproval !== void 0) {
                        try {
                            await cancelSmartModeMcpApprovalRequest(ctx, resourceAccessor.get(smartModeMcpApprovalStoreResource), smartModeApproval.requestId);
                        } catch (cancelError) {
                            logger62.warn(spanCtxt.ctx, "Failed to cancel Smart Mode MCP approval request", {
                                error: cancelError,
                                requestId: smartModeApproval.requestId
                            });
                        }
                    }
                    const classifiedError = error3 instanceof ToolCallError ? error3 : createMcpTransportError(error3 instanceof Error ? error3.message : String(error3), error3);
                    tracker.trackMcpToolCallResult(ctx, {
                        toolCallId: meta.toolCallId,
                        toolName: args.toolName,
                        mcpServerName: serverDisplayName,
                        paramsJson,
                        success: false,
                        errorMessage: classifiedError instanceof Error ? classifiedError.message : String(classifiedError),
                        errorClassification: getWrappedMcpErrorClassification(classifiedError),
                        ...mcpToolErrorTrackingFields(mcpThrownErrorDetail(error3))
                    });
                    emitErrorMetrics(ctx, {
                        failureReason: CALL_MCP_TOOL_FAILURE_REASONS.TRANSPORT_ERROR,
                        retryable: false,
                        calledWithoutReadDef,
                        error: classifiedError
                    });
                    throwMcpExecuteError(classifiedError, {
                        toolName: args.toolName,
                        getMcpToolsToolName: mcpMetaToolEnabled ? resolvedGetMcpToolsToolName : void 0,
                        mcpFileSystemOptions: mcpMetaToolEnabled ? void 0 : mcpFileSystemOptions,
                        readToolDefReminder,
                        invalidArgsToolDefReminder,
                        stateHandler: meta.stateHandler
                    });
                }
                execResult = await spillLargeMcpTextOutput({
                    ctx,
                    result: execResult,
                    resourceAccessor,
                    projectDir: requestContext?.mcpFileSystemOptions?.workspaceProjectDir ?? mcpFileSystemOptions?.workspaceProjectDir ?? requestContext?.env?.projectFolder,
                    osPlatform: requestContext?.env?.osVersion?.split(" ")[0],
                    toolCallId: meta.toolCallId
                });
                try {
                    const result = convertExecSuccessToToolSuccess(execResult, {
                        mcpFileSystemOptions: mcpMetaToolEnabled ? void 0 : mcpFileSystemOptions,
                        getMcpToolsToolName: mcpMetaToolEnabled ? resolvedGetMcpToolsToolName : void 0,
                        requestedServer: args.server,
                        requestedToolName: args.toolName,
                        readToolDefReminder,
                        invalidArgsToolDefReminder,
                        stateHandler: meta.stateHandler
                    });
                    tracker.trackMcpToolCallResult(ctx, {
                        toolCallId: meta.toolCallId,
                        toolName: args.toolName,
                        mcpServerName: serverDisplayName,
                        paramsJson,
                        ...mcpToolResultTrackingOutcome(result),
                        ...mcpToolErrorTrackingFields(mcpResultErrorDetail(execResult))
                    });
                    emitSuccessMetrics(ctx, result, calledWithoutReadDef);
                    return result;
                } catch (e) {
                    tracker.trackMcpToolCallResult(ctx, {
                        toolCallId: meta.toolCallId,
                        toolName: args.toolName,
                        mcpServerName: serverDisplayName,
                        paramsJson,
                        success: false,
                        errorMessage: e instanceof Error ? e.message : String(e),
                        errorClassification: e instanceof Error ? getWrappedMcpErrorClassification(e) : ToolErrorClassification.OTHER_ERROR,
                        ...mcpFailureTrackingFields(execResult, e)
                    });
                    let failureReason = CALL_MCP_TOOL_FAILURE_REASONS.OTHER;
                    if (e instanceof ToolCallRejectedError) {
                        failureReason = CALL_MCP_TOOL_FAILURE_REASONS.REJECTED;
                    } else if (e instanceof McpServerDoesNotExistError) {
                        failureReason = CALL_MCP_TOOL_FAILURE_REASONS.SERVER_NOT_FOUND;
                    } else if (e instanceof McpPermissionDeniedError) {
                        failureReason = CALL_MCP_TOOL_FAILURE_REASONS.PERMISSION_DENIED;
                    } else if (e instanceof McpExecToolNotFoundError) {
                        failureReason = CALL_MCP_TOOL_FAILURE_REASONS.EXEC_NOT_FOUND;
                    } else if (e instanceof McpWithoutReadToolDefinitionError) {
                        failureReason = CALL_MCP_TOOL_FAILURE_REASONS.WITHOUT_READ_DEF;
                    }
                    emitErrorMetrics(ctx, {
                        failureReason,
                        retryable: false,
                        calledWithoutReadDef,
                        error: e
                    });
                    throw e;
                }
            }, (result)=>createMcpToolCall(new McpToolCall({
                    ...baseToolCall,
                    result
                })), meta.hookContextCollector);
        } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        } finally{
            __disposeResources55(env_2);
        }
    };
    const exampleDescriptionLine = `"description": "Search the public docs for the example API",
  `;
    const symbolicToolCallGuidance = writeToFileEnabled ? `

Set "write_to_file": true to have the result written to a file under agent-tools/ in the workspace instead of returned inline, regardless of its size; you then get back the file path, size, and line count. Prefer it for results you expect to be large and want to read selectively or hand to another tool by path.

For tools in external MCP namespaces (not the cursor namespace), any string argument, at any nesting depth, whose whole value is "${SYMBOLIC_PATH_ARGUMENT_PREFIX}/absolute/path.txt", with no surrounding text, is replaced with that file's contents when the call is sent, so a file (for example one produced by write_to_file) can be passed to the server without reading it into the conversation. Example: "arguments": { "body": "${SYMBOLIC_PATH_ARGUMENT_PREFIX}/workspace/agent-tools/1f3c.txt" }.` : "";
    return createZodAgentTool("MCP", {
        name: name17,
        dynamicToolMetaRole: mcpMetaToolEnabled ? "invocation" : void 0,
        dynamicInvocationEnvelope: writeToFileEnabled && writeToolResultText !== void 0 ? {
            readWriteToFile,
            writeResultToFile: (ctx, result, toolCallId)=>writeToolResultToFile({
                    ctx,
                    toolCallId,
                    write: writeToolResultText
                }, result)
        } : void 0,
        resolveToolCallTelemetry: dynamicToolRegistry === void 0 ? void 0 : (rawArgs)=>{
            const harnessIdentity = resolveDynamicInvocationHarnessIdentity(rawArgs, dynamicToolRegistry);
            if (rawArgs === null || typeof rawArgs !== "object" || Array.isArray(rawArgs)) {
                return {
                    toolIdentifier: "MCP",
                    isDynamic: true,
                    ...harnessIdentity
                };
            }
            const requestedToolName = "toolName" in rawArgs && typeof rawArgs.toolName === "string" ? rawArgs.toolName : void 0;
            const namespace = "namespace" in rawArgs ? rawArgs.namespace : void 0;
            if (typeof namespace === "string" && !dynamicToolRegistry.isEmpty() && isReservedDynamicToolsNamespace(namespace) && requestedToolName !== void 0) {
                return {
                    toolIdentifier: dynamicToolRegistry.getTool(requestedToolName)?.toolIdentifier ?? "unknown",
                    isDynamic: true,
                    ...harnessIdentity
                };
            }
            return {
                toolIdentifier: "MCP",
                isDynamic: true,
                ...harnessIdentity
            };
        },
        descriptionGenerator: (props)=>{
            if (mcpMetaToolEnabled) {
                const getMcpToolsToolName2 = getRequiredToolName(props.allTools, "GET_MCP_TOOLS");
                if (useDynamicToolNamespaces) {
                    return `Invoke one tool from a dynamic namespace, e.g. an MCP server. IMPORTANT: Always call ${getMcpToolsToolName2} for this namespace/tool before calling to ensure correct parameters. Set mcpDetails only for tools from external MCP namespaces; omit it for first-party tools in the cursor namespace.

Example:
{
  "namespace": "my-namespace",
  "toolName": "search",
  "mcpDetails": { "description": "Search the public docs for the example API" },
  "arguments": { "query": "example", "limit": 10 }
}${symbolicToolCallGuidance}`;
                }
                return `Call an MCP tool by server identifier and tool name with arbitrary JSON arguments. IMPORTANT: Always call ${getMcpToolsToolName2} for this server/tool before calling to ensure correct parameters.

Example:
{
  "server": "my-mcp-server",
  "toolName": "search",
  ${exampleDescriptionLine}"arguments": { "query": "example", "limit": 10 }
}${symbolicToolCallGuidance}`;
            }
            return `Call an MCP tool by server identifier and tool name with arbitrary JSON arguments. IMPORTANT: Always read the tool's schema/descriptor BEFORE calling to ensure correct parameters.

Example:
{
  "server": "my-mcp-server",
  "toolName": "search",
  ${exampleDescriptionLine}"arguments": { "query": "example", "limit": 10 }
}`;
        },
        parameters: parametersSchema29,
        render: renderMcpTool,
        execute: withSafeParsedArgs(parsingParametersSchema, execute, createMcpToolCall(new McpToolCall())),
        serializeError: (error3)=>{
            if (error3 instanceof McpWithoutReadToolDefinitionError) {
                return createMcpToolCall(new McpToolCall({
                    result: new McpToolResult({
                        result: {
                            case: "error",
                            value: new McpToolError({
                                error: error3.clientVisibleErrorMessage,
                                readToolDefReminder: error3.modelVisibleErrorMessage,
                                systemReminders: toProtoSystemReminders(error3.systemReminders)
                            })
                        }
                    })
                }));
            }
            if (error3 instanceof McpServerDoesNotExistError) {
                return createMcpToolCall(new McpToolCall({
                    result: new McpToolResult({
                        result: {
                            case: "error",
                            value: new McpToolError({
                                error: error3.clientVisibleErrorMessage,
                                readToolDefReminder: error3.readServerDefReminder
                            })
                        }
                    })
                }));
            }
            if (error3 instanceof McpToolDoesNotExistError) {
                return createMcpToolCall(new McpToolCall({
                    result: new McpToolResult({
                        result: {
                            case: "error",
                            value: new McpToolError({
                                error: error3.clientVisibleErrorMessage,
                                readToolDefReminder: error3.readToolDefReminder
                            })
                        }
                    })
                }));
            }
            if (error3 instanceof McpPermissionDeniedError) {
                return createMcpToolCall(new McpToolCall({
                    result: mcpPermissionDeniedResult(error3)
                }));
            }
            if (error3 instanceof ToolCallRejectedError) {
                return createMcpToolCall(new McpToolCall({
                    result: new McpToolResult({
                        result: {
                            case: "rejected",
                            value: new McpRejected({
                                reason: error3.message
                            })
                        }
                    })
                }));
            }
            if (error3 instanceof CustomToolCallError) {
                return createMcpToolCall(new McpToolCall({
                    result: new McpToolResult({
                        result: {
                            case: "error",
                            value: new McpToolError({
                                error: error3.clientVisibleErrorMessage,
                                readToolDefReminder: error3.modelVisibleErrorMessage,
                                systemReminders: toProtoSystemReminders(error3.systemReminders)
                            })
                        }
                    })
                }));
            }
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            return createMcpToolCall(new McpToolCall({
                result: new McpToolResult({
                    result: {
                        case: "error",
                        value: new McpToolError({
                            error: "Tool execution error",
                            readToolDefReminder: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
