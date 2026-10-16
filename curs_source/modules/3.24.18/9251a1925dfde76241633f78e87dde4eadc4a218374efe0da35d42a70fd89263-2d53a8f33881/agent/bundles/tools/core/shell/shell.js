import { backgroundShellExecutorResource } from "../../../../../agent-exec/dist/background-shell.js";
import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { shellAllowlistPrecheckExecutorResource } from "../../../../../agent-exec/dist/shell-allowlist-precheck.js";
import { forceBackgroundShellExecutorResource } from "../../../../../agent-exec/dist/shell-control.js";
import { shellStreamExecutorResource } from "../../../../../agent-exec/dist/shell-stream.js";
import { createSpan } from "../../../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../../../agent-kv/dist/subagent-states.js";
import { init_dist28 } from "../../../../../agent-transcript/dist/index.js";
import { init_shim } from "../../../shims/shim.js";
import { init_smart_mode_classifier_context } from "../../../smart-mode-classifier-context.js";
import { init_smart_mode_project_permissions } from "../../../smart-mode-project-permissions.js";
import { ASK_MODE_MODEL_ERROR, CustomToolCallError, ToolCallAbortedError, init_common9, withSafeParsedArgs } from "../../common.js";
import { ToolErrorClassification, init_core5 } from "../../core.js";
import { init_connect_error2 } from "../connect-error.js";
import { init_background_executor } from "./background-executor.js";
import { init_background_shell_lifecycle } from "./background-shell-lifecycle.js";
import { init_command_modifiers } from "./command-modifiers.js";
import { init_exec_id } from "./exec-id.js";
import { init_formatters2 } from "./formatters.js";
import { init_interrupted_shell_output } from "./interrupted-shell-output.js";
import { init_prompts } from "./prompts/index.js";
import { init_retry_helpers } from "./retry-helpers.js";
import { init_shell_parser2 } from "./shell-parser.js";
import { init_smart_mode_approval_store2, smartModeShellApprovalStoreResource } from "./smart-mode-approval-store.js";
import { init_smart_mode_approval2 } from "./smart-mode-approval.js";
import { init_streaming } from "./streaming.js";
import { init_dev_smart_mode_classifier_block } from "../../dev-smart-mode-classifier-block.js";
import { init_smart_mode_classifier_runtime_state } from "../../smart-mode-classifier-runtime-state.js";
import { BACKGROUND_SHELL_DEFAULT_BLOCK_UNTIL_MS, init_tool_execution_timeout } from "../../tool-execution-timeout.js";
import { init_tool_timeout_suspension } from "../../tool-timeout-suspension.js";
import { AgentType, init_agent_config } from "../../../utils/agent-config.js";
import { getAgentEventTracker, init_event_tracking } from "../../../utils/event-tracking.js";
import { getConversationId, getRequestId, getSecretScopeId, init_request_id } from "../../../utils/request-id.js";
import { SMART_MODE_CLASSIFIER_MANUAL_REVIEW_ERROR_REASON, init_smart_mode_classifier_error_metadata } from "../../../utils/smart-mode-classifier-error-metadata.js";
import { init_smart_mode_classifier_measurement } from "../../../utils/smart-mode-classifier-measurement.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { createCounter } from "../../../../../dist_exports.js";
import { analyzeShellCommand } from "../../../../../dist_exports2.js";
import { init_dist30 } from "../../../../../hooks-carriers/dist/index.js";
import { analyzeFailure, appendHookAdditionalContexts, buildToolCallExecutionTimedOutMessage, classifierResultToProto, clearInterruptedShellOutputSnapshot, createShellToolCall, createStreamingShellHandler, createStringResult, createZodAgentTool, defineShim, extendMachineIdParameter, formatShellMissingExitDisplay, getSmartModeClassifierRuntimeState, isAgentStreamStartTimeoutError, isFusedStepGuardTimeoutReason, recordBackgroundShellStarted, renderShellResultToString, resolveMachineIdArgument, resolveTerminalsFolder, withToolExecutionTimeoutSuspended } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../../../../metrics/dist/index.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_index_esm } from "../../../../../node_modules/.pnpm/re2js@1.2.2/node_modules/re2js/build/index.esm.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { SandboxPolicy, SandboxPolicy_Type, init_sandbox_pb } from "../../../../../proto/dist/generated/agent/v1/sandbox_pb.js";
import { ShellAllowlistPrecheckArgs } from "../../../../../proto/dist/generated/agent/v1/shell_allowlist_precheck_exec_pb.js";
import { ForceBackgroundShellArgs, ForceBackgroundShellStatus, ShellArgs, ShellFailure, ShellOomKill_Kind, ShellPermissionDenied, ShellRejected, ShellResult, ShellSpawnError, ShellSuccess, ShellTimeout, init_shell_exec_pb } from "../../../../../proto/dist/generated/agent/v1/shell_exec_pb.js";
import { ShellToolCall, init_shell_tool_pb } from "../../../../../proto/dist/generated/agent/v1/shell_tool_pb.js";
import { SmartModeApproval, init_utils_pb } from "../../../../../proto/dist/generated/agent/v1/utils_pb.js";
import { addGitCommitTrailer, addPRGeneratedByFooter, addSmartModeApprovalRequestParameter, buildClassifierEscalatedSandboxPolicy, buildOutputNotificationConfig, computeSmartModeShellApprovalTargetFingerprint, createSmartModeShellApprovalRequest, executeBackgroundCommand, formatSmartModeShellBlockedAutonomousReason, generateShellExecId, getDescription4, getExecutionParametersSchema, getParametersSchema5, getRequestedShellPermissions, getSmartModeBlockReasonFromArgs, getSmartModeShellPreflightDecision, getToolName6, getTranscriptFilename, isSmartModeNativeApprovalRequested, resolveShellExecutionPlan, sandboxPolicyTypeToString, shouldBypassSmartModePreflightForSandboxAutorun, truncatePersistedShellScrollback } from "../../../../../tree_chunk_napi_exports.js";
import { init_dist3 } from "../../../../../utils/dist/index.js";
import { ReplayableAsyncIterable } from "../../../../../utils/dist/replayable-async-iterable.js";
var __addDisposableResource98, __disposeResources98, logger100, zshStateErrorCounter, shellMissingExitCounter, shellOomKillCounter, gitCommitTrailerCounter, prFooterCounter, ShellRejectedError, ShellAbortedError, SmartModeShellBlockedAutonomousError, ShellPermissionDeniedError, ShellSandboxUnsupportedError, ShellMissingExitError, DEFAULT_TIMEOUT_MS3, PERSISTED_SHELL_SCROLLBACK_MAX_CHARS, PERSISTED_SHELL_SCROLLBACK_MAX_LINES, MAX_OUTPUT_NOTIFICATION_PATTERN_CHARS2, MAX_OUTPUT_NOTIFICATION_REASON_CHARS, MIN_OUTPUT_NOTIFICATION_DEBOUNCE_SECONDS, MS_PER_SECOND, SMART_MODE_SHELL_BLOCK_REASON, SMART_MODE_SHELL_CLASSIFIER_ERROR_REASON, SMART_MODE_SHELL_BLOCKED_AUTONOMOUS_REASON_SUFFIX, SMART_MODE_SHELL_PARENT_REQUESTED_APPROVAL_FALLBACK_REASON, REQUEST_SMART_MODE_APPROVAL_DESCRIPTION, SMART_MODE_BLOCK_REASON_DESCRIPTION, timeoutAlias, createShellTool;
export { DEFAULT_TIMEOUT_MS3, MAX_OUTPUT_NOTIFICATION_PATTERN_CHARS2, MAX_OUTPUT_NOTIFICATION_REASON_CHARS, MIN_OUTPUT_NOTIFICATION_DEBOUNCE_SECONDS, MS_PER_SECOND, PERSISTED_SHELL_SCROLLBACK_MAX_CHARS, PERSISTED_SHELL_SCROLLBACK_MAX_LINES, REQUEST_SMART_MODE_APPROVAL_DESCRIPTION, SMART_MODE_BLOCK_REASON_DESCRIPTION, SMART_MODE_SHELL_BLOCKED_AUTONOMOUS_REASON_SUFFIX, SMART_MODE_SHELL_BLOCK_REASON, SMART_MODE_SHELL_CLASSIFIER_ERROR_REASON, SMART_MODE_SHELL_PARENT_REQUESTED_APPROVAL_FALLBACK_REASON, ShellAbortedError, ShellMissingExitError, ShellPermissionDeniedError, ShellRejectedError, ShellSandboxUnsupportedError, SmartModeShellBlockedAutonomousError, __addDisposableResource98, __disposeResources98, createShellTool, gitCommitTrailerCounter, logger100, prFooterCounter, shellMissingExitCounter, shellOomKillCounter, timeoutAlias, zshStateErrorCounter };
var __wakaru_init_shell5_initialized = false;
export function init_shell5() {
if (__wakaru_init_shell5_initialized) return;
__wakaru_init_shell5_initialized = true;
"use strict";
init_dist8();
init_dist28();
init_dist26();
init_dist();
init_dist30();
init_dist4();
init_sandbox_pb();
init_shell_exec_pb();
init_shell_tool_pb();
init_utils_pb();
init_dist3();
init_esm2();
init_index_esm();
init_zod();
init_shim();
init_smart_mode_classifier_context();
init_smart_mode_project_permissions();
init_agent_config();
init_event_tracking();
init_request_id();
init_smart_mode_classifier_error_metadata();
init_smart_mode_classifier_measurement();
init_common9();
init_core5();
init_dev_smart_mode_classifier_block();
init_smart_mode_classifier_runtime_state();
init_tool_execution_timeout();
init_tool_timeout_suspension();
init_connect_error2();
init_background_executor();
init_background_shell_lifecycle();
init_command_modifiers();
init_exec_id();
init_formatters2();
init_interrupted_shell_output();
init_prompts();
init_retry_helpers();
init_shell_parser2();
init_smart_mode_approval2();
init_smart_mode_approval_store2();
init_streaming();
__addDisposableResource98 = function(env, value, async) {
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
__disposeResources98 = (function(SuppressedError2) {
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
logger100 = createLogger("tools/shell");
zshStateErrorCounter = createCounter("shell.zsh_state_error", {
    description: "Count of 'command not found: dump_zsh_state' errors in shell output",
    labelNames: []
});
shellMissingExitCounter = createCounter("shell.missing_exit_event", {
    description: "Count of foreground shell executions whose exec stream closed without an exit event (likely exec backend unavailable/desynced)",
    labelNames: []
});
shellOomKillCounter = createCounter("shell.oom_kill", {
    description: "Failed foreground shell commands the executor related to a kernel OOM kill, by kind",
    labelNames: [
        "kind"
    ]
});
gitCommitTrailerCounter = createCounter("shell.modifier.git_commit_trailer", {
    description: "Git commit trailer modifier applications",
    labelNames: [
        "modified"
    ]
});
prFooterCounter = createCounter("shell.modifier.pr_footer", {
    description: "PR generated-by footer modifier applications",
    labelNames: [
        "modified"
    ]
});
ShellRejectedError = class extends CustomToolCallError {
    constructor(command, workingDirectory, reason, classification = ToolErrorClassification.USER_REJECTED){
        super(classification, {
            error: reason,
            clientVisibleErrorMessage: reason,
            modelVisibleErrorMessage: `Rejected: ${reason}`
        });
        this.command = command;
        this.workingDirectory = workingDirectory;
        this.reason = reason;
    }
};
ShellRejectedError.telemetryName = "ShellRejectedError";
ShellAbortedError = class extends CustomToolCallError {
    constructor(args){
        const cause = args.cause;
        let timeoutMessage;
        let classification;
        if (isFusedStepGuardTimeoutReason(cause)) {
            timeoutMessage = buildToolCallExecutionTimedOutMessage({
                toolName: "shell",
                executionTimeoutMs: cause.fuseGuardMs
            });
            classification = ToolErrorClassification.TIMEOUT;
        } else {
            timeoutMessage = "Aborted";
            classification = ToolErrorClassification.ABORTED;
        }
        super(classification, {
            error: timeoutMessage,
            clientVisibleErrorMessage: timeoutMessage,
            modelVisibleErrorMessage: timeoutMessage
        });
        this.command = args.command;
        this.workingDirectory = args.workingDirectory;
        this.elapsedMs = args.elapsedMs;
        if (cause !== void 0) {
            this.cause = cause;
        }
    }
};
ShellAbortedError.telemetryName = "ShellAbortedError";
SmartModeShellBlockedAutonomousError = class extends ShellRejectedError {
    constructor(){
        super(...arguments);
        this.hideFromClientToolCall = true;
    }
};
SmartModeShellBlockedAutonomousError.telemetryName = "SmartModeShellBlockedAutonomousError";
ShellPermissionDeniedError = class extends CustomToolCallError {
    constructor(command, workingDirectory, error3, isReadonly){
        super(ToolErrorClassification.USER_REJECTED, {
            error: error3,
            clientVisibleErrorMessage: isReadonly ? ASK_MODE_MODEL_ERROR : `Permission denied: ${error3}`,
            modelVisibleErrorMessage: isReadonly ? ASK_MODE_MODEL_ERROR : `Permission denied: ${error3}`
        });
        this.command = command;
        this.workingDirectory = workingDirectory;
        this.error = error3;
        this.isReadonly = isReadonly;
    }
};
ShellPermissionDeniedError.telemetryName = "ShellPermissionDeniedError";
ShellSandboxUnsupportedError = class extends CustomToolCallError {
    constructor(command, workingDirectory, sandboxPolicyType, reason, isReadonly){
        const display = `Terminal unavailable: this machine cannot enforce the '${sandboxPolicyType}' sandbox policy this command requires, because no working sandbox backend is available (${reason}). This is not a permission denial. Commands requiring this policy cannot run here unless sandbox support is set up on this machine.`;
        super(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
            error: display,
            clientVisibleErrorMessage: display,
            modelVisibleErrorMessage: display
        });
        this.command = command;
        this.workingDirectory = workingDirectory;
        this.isReadonly = isReadonly;
    }
};
ShellSandboxUnsupportedError.telemetryName = "ShellSandboxUnsupportedError";
ShellMissingExitError = class extends CustomToolCallError {
    constructor(command, workingDirectory, interleavedOutput){
        const display = formatShellMissingExitDisplay(interleavedOutput);
        super(ToolErrorClassification.EXEC_BACKEND_UNAVAILABLE, {
            error: display,
            clientVisibleErrorMessage: display,
            modelVisibleErrorMessage: display
        });
        this.command = command;
        this.workingDirectory = workingDirectory;
        this.interleavedOutput = interleavedOutput;
    }
};
ShellMissingExitError.telemetryName = "ShellMissingExitError";
DEFAULT_TIMEOUT_MS3 = 3e4;
PERSISTED_SHELL_SCROLLBACK_MAX_CHARS = 512 * 1024;
PERSISTED_SHELL_SCROLLBACK_MAX_LINES = 1e3;
MAX_OUTPUT_NOTIFICATION_PATTERN_CHARS2 = 500;
MAX_OUTPUT_NOTIFICATION_REASON_CHARS = 200;
MIN_OUTPUT_NOTIFICATION_DEBOUNCE_SECONDS = 5;
MS_PER_SECOND = 1e3;
SMART_MODE_SHELL_BLOCK_REASON = "Command blocked by Auto-review preflight";
SMART_MODE_SHELL_CLASSIFIER_ERROR_REASON = SMART_MODE_CLASSIFIER_MANUAL_REVIEW_ERROR_REASON;
SMART_MODE_SHELL_BLOCKED_AUTONOMOUS_REASON_SUFFIX = "\n\n<system_reminder>\nAuto-review blocked this autonomous tool call. Decide now between two paths: (1) if a genuinely safer, lower-privilege, authorized path satisfies the request, use it; (2) if this blocked action is still necessary and the user should approve it, immediately retry the exact same Shell call with request_smart_mode_approval set to true AND smart_mode_block_reason set to the exact block reason text above. That retry is what shows the native approval card; stopping here leaves the user with no approval UI. Do not change the command, add permissions, or use an escalated variant when retrying for approval. Trying a different anonymous public file host, pastebin, disposable transfer link, or similar courier is NOT path (1) \u2014 that is the same unauthorized data-exposure crossing \u2014 so for that class prefer path (2) or ask the user, do not shop for another intermediary.\n</system_reminder>";
SMART_MODE_SHELL_PARENT_REQUESTED_APPROVAL_FALLBACK_REASON = SMART_MODE_SHELL_CLASSIFIER_ERROR_REASON;
REQUEST_SMART_MODE_APPROVAL_DESCRIPTION = "Set to true when immediately retrying the exact same command after Auto-review blocks it and you decide the user should approve it through the native approval card.";
SMART_MODE_BLOCK_REASON_DESCRIPTION = "Provide the exact block reason returned by Auto-review in the prior rejection. Required when request_smart_mode_approval is true so the approval card shows the original classifier reason without re-running the classifier.";
timeoutAlias = defineShim({
    name: "shell_timeout_alias"
});
createShellTool = (resourceAccessor, options2, promptVersion = "latest")=>{
    const adminCommandDenylistSnapshot = Object.freeze([
        ...options2?.requestContext?.adminCommandDenylist ?? []
    ]);
    const shellStreamExecutor = resourceAccessor.get(shellStreamExecutorResource);
    const fileOperationLockManager = options2?.fileOperationLockManager;
    const sandboxPromptEnabled = options2?.sandboxPromptEnabled ?? options2?.sandboxEnabled ?? false;
    const isBackgroundAgentForBlockUntil = options2?.agentType === AgentType.BACKGROUND;
    const defaultTimeoutMsForBlockUntil = isBackgroundAgentForBlockUntil ? BACKGROUND_SHELL_DEFAULT_BLOCK_UNTIL_MS : DEFAULT_TIMEOUT_MS3;
    const defaultBlockUntilMs = options2?.defaultBlockUntilMs ?? defaultTimeoutMsForBlockUntil;
    const useMinimalHarness = options2?.useMinimalHarness ?? false;
    const smartModeApprovalRequestParametersEnabled = options2?.agentType !== AgentType.BACKGROUND && options2?.smartModeClassifierMode === true;
    const baseParametersSchema3 = addSmartModeApprovalRequestParameter(options2?.parametersSchema ?? getParametersSchema5({
        version: promptVersion,
        sandboxEnabled: options2?.sandboxEnabled ?? false,
        isReadonly: options2?.isReadonly,
        enableBlockUntilMs: options2?.enableBlockUntilMs,
        requireBlockUntilMs: options2?.requireBlockUntilMs,
        defaultBlockUntilMs,
        useMinimalHarness,
        enableJobProgressNotifications: options2?.enableJobProgressNotifications
    }), smartModeApprovalRequestParametersEnabled);
    const parametersSchema29 = extendMachineIdParameter(baseParametersSchema3, options2?.machineIds, options2?.machineIdParameterSchema);
    const executionParametersSchema = (meta)=>{
        const baseSchema = addSmartModeApprovalRequestParameter(getParametersSchema5({
            version: promptVersion,
            sandboxEnabled: options2?.sandboxEnabled ?? false,
            isReadonly: options2?.isReadonly,
            enableBlockUntilMs: options2?.enableBlockUntilMs,
            strictArgParsing: meta.strictArgParsing === true,
            requireBlockUntilMs: options2?.requireBlockUntilMs,
            defaultBlockUntilMs,
            useMinimalHarness,
            enableJobProgressNotifications: options2?.enableJobProgressNotifications
        }), smartModeApprovalRequestParametersEnabled);
        return getExecutionParametersSchema(extendMachineIdParameter(baseSchema, options2?.machineIds, options2?.machineIdParameterSchema), promptVersion, options2?.enableBlockUntilMs);
    };
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource98(env_1, createSpan(parentCtx.withName("shellExecute")), false);
            const shellExecuteStartMs = Date.now();
            const machineId = resolveMachineIdArgument(options2?.machineIds, rawArgs);
            const shellType = options2?.shellType;
            let command = rawArgs.command;
            if (options2?.enableCoAuthoredByTrailer) {
                const modifier = addGitCommitTrailer(shellType);
                const modified = modifier(command);
                gitCommitTrailerCounter.increment(spanCtxt.ctx, 1, {
                    modified: modified !== command ? "true" : "false"
                });
                command = modified;
            }
            if (options2?.enablePRGeneratedByFooter) {
                const modifier = addPRGeneratedByFooter(shellType);
                const modified = modifier(command);
                prFooterCounter.increment(spanCtxt.ctx, 1, {
                    modified: modified !== command ? "true" : "false"
                });
                command = modified;
            }
            const workingDirectory = "working_directory" in rawArgs ? rawArgs.working_directory : void 0;
            const configTimeoutMs = options2?.configTimeoutMs;
            const useBackgroundAfterWait = options2?.enableBlockUntilMs ?? false;
            const executionPlan = resolveShellExecutionPlan({
                rawArgs,
                configTimeoutMs,
                enableBlockUntilMs: useBackgroundAfterWait,
                defaultBlockUntilMs,
                defaultTimeoutMsForBlockUntil,
                promptVersion
            });
            const isBackground = executionPlan.shouldStartInBackground;
            const preflightGuardDecision = options2?.preflightCommandGuard?.({
                command,
                isBackground
            });
            if (preflightGuardDecision?.allow === false) {
                throw new ShellRejectedError(command, workingDirectory, preflightGuardDecision.reason);
            }
            const hasClassifierService = !!options2?.commandClassifierService;
            logger100.info(spanCtxt.ctx, "Shell tool executing", {
                commandLength: command.length,
                hasClassifierService,
                isBackground
            });
            const classifierPromise = options2?.commandClassifierService ? options2.commandClassifierService.classifyCommand(spanCtxt.ctx, {
                command,
                shell: shellType
            }).catch((error3)=>{
                logger100.warn(spanCtxt.ctx, "Command classifier failed", {
                    error: error3
                });
                return null;
            }) : Promise.resolve(null);
            const description3 = ("description" in rawArgs ? rawArgs.description : void 0) ?? ("explanation" in rawArgs ? rawArgs.explanation : void 0);
            const outputNotification = options2?.enableJobProgressNotifications === true ? buildOutputNotificationConfig(rawArgs, spanCtxt.ctx, meta.toolCallId, options2?.outputNotificationLimit) : void 0;
            const analysis = analyzeShellCommand(command);
            const conversationId = getConversationId(spanCtxt.ctx);
            const requestId = getRequestId(spanCtxt.ctx);
            const secretScopeId = getSecretScopeId(spanCtxt.ctx);
            if (conversationId !== void 0) {
                const transcriptFilename = getTranscriptFilename(conversationId);
                const matchesOwnTranscript = command.includes(transcriptFilename);
                if (matchesOwnTranscript) {
                    logger100.info(spanCtxt.ctx, "Model accessed agent transcript path", {
                        tool: "shell",
                        toolCallId: meta.toolCallId,
                        wasOwnTranscript: true
                    });
                }
            }
            let requestedSandboxPolicy;
            if (options2?.sandboxEnabled) {
                const perms = "required_permissions" in rawArgs ? rawArgs.required_permissions ?? [] : [];
                const set2 = new Set(perms);
                const requestsAll = set2.has("all");
                const wantsNetwork = set2.has("full_network") || set2.has("network");
                const workspaceReadwritePaths = meta.workspacePaths ?? [];
                const enableSharedBuildCache = options2?.enableSandboxSharedBuildCache;
                if (options2?.isReadonly) {
                    requestedSandboxPolicy = new SandboxPolicy({
                        type: SandboxPolicy_Type.WORKSPACE_READONLY,
                        networkAccess: !!wantsNetwork,
                        enableSharedBuildCache
                    });
                } else if (requestsAll) {
                    requestedSandboxPolicy = new SandboxPolicy({
                        type: SandboxPolicy_Type.INSECURE_NONE,
                        enableSharedBuildCache
                    });
                } else {
                    requestedSandboxPolicy = new SandboxPolicy({
                        type: SandboxPolicy_Type.WORKSPACE_READWRITE,
                        networkAccess: !!wantsNetwork,
                        additionalReadwritePaths: workspaceReadwritePaths,
                        enableSharedBuildCache
                    });
                }
            }
            const classifierResult = await classifierPromise;
            const protoClassifierResult = classifierResult ? classifierResultToProto(classifierResult) : void 0;
            let smartModeClassifierAllowed = false;
            let smartModeApprovalProviderApproved = false;
            const shellSurfaceLabel = options2?.smartModeApprovalSurface ?? "host_machine";
            const buildApprovalTarget = (blockReason, bindings)=>{
                const escalatedSandboxPolicy = options2?.isReadonly === true ? requestedSandboxPolicy : buildClassifierEscalatedSandboxPolicy(requestedSandboxPolicy, options2?.enableSandboxSharedBuildCache);
                return {
                    surface: shellSurfaceLabel,
                    command,
                    workingDirectory,
                    requestedSandboxPolicy: escalatedSandboxPolicy,
                    isBackground,
                    isReadonly: options2?.isReadonly ?? false,
                    executionPlan,
                    blockReason,
                    ...description3 !== void 0 && description3.trim().length > 0 ? {
                        description: description3.trim()
                    } : {},
                    ...bindings?.proposedAllowRule !== void 0 && bindings.proposedAllowRule.length > 0 ? {
                        proposedAllowRule: bindings.proposedAllowRule
                    } : {},
                    ...bindings?.appliedRules !== void 0 ? {
                        appliedRules: bindings.appliedRules
                    } : {}
                };
            };
            const createNativeApprovalForParentRequest = async (ctx, blockReason)=>{
                if (options2?.agentType === AgentType.BACKGROUND) {
                    throw new ShellRejectedError(command, workingDirectory, blockReason);
                }
                const approvalStore = resourceAccessor.get(smartModeShellApprovalStoreResource);
                const approvalRequest = await createSmartModeShellApprovalRequest(ctx, approvalStore, buildApprovalTarget(blockReason));
                return new SmartModeApproval({
                    requestId: approvalRequest.requestId,
                    reason: approvalRequest.blockReason
                });
            };
            const throwIfToolCallAborted = (ctx)=>{
                const abortSignal = interactionHandler.getAbortSignal(ctx);
                if (abortSignal.aborted) {
                    throw new ShellAbortedError({
                        command,
                        workingDirectory,
                        elapsedMs: Date.now() - shellExecuteStartMs,
                        cause: abortSignal.reason
                    });
                }
            };
            const enforceSmartModePreflight = async (ctx)=>{
                const smartModeClassifierState = getSmartModeClassifierRuntimeState({
                    agentType: options2?.agentType,
                    requestContext: options2?.requestContext,
                    smartModeClassifierMode: options2?.smartModeClassifierMode,
                    smartModeClassifierShadowMode: options2?.smartModeClassifierShadowMode,
                    devBlockState: options2?.devSmartModeClassifierBlockState,
                    devDelayState: options2?.devSmartModeClassifierDelayState
                });
                const smartModeClassifierEnabled = smartModeClassifierState.enabled;
                const smartModeClassifierShadowEnabled = smartModeClassifierState.shadowEnabled;
                const devSmartModeClassifierBlockState = smartModeClassifierState.devBlockState;
                const devSmartModeClassifierDelayState = smartModeClassifierState.devDelayState;
                const requestedPermissions = getRequestedShellPermissions(rawArgs);
                logger100.info(ctx, "Smart Mode shell preflight state", {
                    toolCallId: meta.toolCallId,
                    conversationId,
                    isBackground,
                    smartModeClassifierEnabled,
                    smartModeClassifierShadowEnabled,
                    autoModeSelected: smartModeClassifierState.autoModeSelected,
                    requestContextSmartAutoMode: options2?.requestContext?.env?.smartModeClassifierAutoModeEnabled,
                    configuredSmartModeClassifierMode: options2?.smartModeClassifierMode === true,
                    configuredSmartModeClassifierShadowMode: options2?.smartModeClassifierShadowMode === true,
                    sandboxEnabled: options2?.sandboxEnabled === true,
                    isReadonly: options2?.isReadonly === true,
                    requestedSandboxPolicyType: sandboxPolicyTypeToString(requestedSandboxPolicy?.type),
                    requestedPermissionCount: requestedPermissions.length,
                    requestedPermissions,
                    commandLength: command.length
                });
                if (isSmartModeNativeApprovalRequested(rawArgs) && smartModeClassifierEnabled && options2?.smartModeApprovalProvider === void 0) {
                    const parentBlockReason = getSmartModeBlockReasonFromArgs(rawArgs) ?? SMART_MODE_SHELL_PARENT_REQUESTED_APPROVAL_FALLBACK_REASON;
                    logger100.info(ctx, "Smart Mode shell native approval requested", {
                        toolCallId: meta.toolCallId,
                        conversationId,
                        hasParentBlockReason: getSmartModeBlockReasonFromArgs(rawArgs) !== void 0,
                        isBackground
                    });
                    return createNativeApprovalForParentRequest(ctx, parentBlockReason);
                }
                if ((smartModeClassifierEnabled || smartModeClassifierShadowEnabled) && options2?.disableSmartModeAllowlistPrecheck !== true) {
                    const precheckExecutor = resourceAccessor.get(shellAllowlistPrecheckExecutorResource);
                    logger100.info(ctx, "Smart Mode shell allowlist precheck starting", {
                        toolCallId: meta.toolCallId,
                        conversationId,
                        hasPrecheckExecutor: precheckExecutor !== void 0,
                        classifierCommandCount: protoClassifierResult?.commands.length ?? 0
                    });
                    if (precheckExecutor !== void 0) {
                        try {
                            const precheck = await precheckExecutor.execute(ctx, new ShellAllowlistPrecheckArgs({
                                command,
                                workingDirectory,
                                parsingResult: analysis.structured,
                                classifierResult: protoClassifierResult,
                                toolCallId: meta.toolCallId
                            }), machineId !== void 0 ? {
                                execId: generateShellExecId(ctx, `${meta.toolCallId}:allowlist-precheck`),
                                machineId
                            } : void 0);
                            logger100.info(ctx, "Smart Mode shell allowlist precheck completed", {
                                toolCallId: meta.toolCallId,
                                conversationId,
                                allowlisted: precheck.allowlisted
                            });
                            if (precheck.allowlisted) {
                                return void 0;
                            }
                        } catch (error3) {
                            if (error3 instanceof Error && error3.name === "AbortError") {
                                throw error3;
                            }
                            if (isAgentStreamStartTimeoutError(error3)) {
                                throw error3;
                            }
                            logger100.warn(ctx, "Shell allowlist precheck failed", {
                                error: error3 instanceof Error ? error3.message : String(error3)
                            });
                        }
                    }
                }
                const bypassSmartModePreflightForSandboxAutorun = shouldBypassSmartModePreflightForSandboxAutorun({
                    rawArgs,
                    requestedSandboxPolicy,
                    sandboxEnabled: options2?.sandboxEnabled ?? false
                });
                if (bypassSmartModePreflightForSandboxAutorun) {
                    logger100.info(ctx, "Smart Mode shell sandbox autorun bypass", {
                        toolCallId: meta.toolCallId,
                        conversationId,
                        sandboxEnabled: options2?.sandboxEnabled === true,
                        requestedSandboxPolicyType: sandboxPolicyTypeToString(requestedSandboxPolicy?.type),
                        requestedPermissionCount: requestedPermissions.length
                    });
                    return void 0;
                }
                const loadWorkspacePermissionFiles = options2?.loadSmartModeWorkspacePermissionFiles !== false;
                const decision = await getSmartModeShellPreflightDecision(ctx, {
                    resourceAccessor,
                    enabled: smartModeClassifierEnabled,
                    shadowEnabled: smartModeClassifierShadowEnabled,
                    command,
                    workingDirectory,
                    shell: shellType,
                    description: description3,
                    rawArgs,
                    executionPlan,
                    isBackground,
                    requestedSandboxPolicy,
                    sandboxEnabled: options2?.sandboxEnabled ?? false,
                    isReadonly: options2?.isReadonly ?? false,
                    surfaceLabel: shellSurfaceLabel,
                    toolCallId: meta.toolCallId,
                    stateHandler: meta.stateHandler,
                    devSmartModeClassifierBlockState,
                    devSmartModeClassifierDelayState,
                    workspacePaths: loadWorkspacePermissionFiles ? meta.workspacePaths : void 0,
                    userAutoRunInstructions: loadWorkspacePermissionFiles ? meta.userAutoRunInstructions ?? options2?.userAutoRunInstructions : options2?.userAutoRunInstructions,
                    projectAutoRunInstructions: loadWorkspacePermissionFiles ? meta.projectAutoRunInstructions ?? options2?.projectAutoRunInstructions : options2?.projectAutoRunInstructions,
                    extractSmartModeClassifierConversationContext: options2?.extractSmartModeClassifierConversationContext,
                    suppressClassifierTelemetryIds: options2?.suppressSmartModeClassifierTelemetryIds,
                    classifierMaxAttempts: options2?.smartModeClassifierMaxAttempts
                });
                if (decision.kind === "allow") {
                    smartModeClassifierAllowed = smartModeClassifierEnabled;
                    logger100.info(ctx, "Smart Mode shell classifier allowed", {
                        toolCallId: meta.toolCallId,
                        conversationId,
                        smartModeClassifierEnabled,
                        smartModeClassifierShadowEnabled,
                        isBackground
                    });
                    return void 0;
                }
                if (decision.kind === "reject") {
                    logger100.info(ctx, "Smart Mode shell classifier rejected", {
                        toolCallId: meta.toolCallId,
                        conversationId,
                        hasReason: decision.reason.length > 0,
                        isBackground
                    });
                    throw new ShellRejectedError(command, workingDirectory, decision.reason, ToolErrorClassification.OTHER_ERROR);
                }
                logger100.info(ctx, "Smart Mode shell classifier blocked", {
                    toolCallId: meta.toolCallId,
                    conversationId,
                    hasReason: decision.reason.length > 0,
                    hasApprovalProvider: options2?.smartModeApprovalProvider !== void 0,
                    approvalRetryRequested: isSmartModeNativeApprovalRequested(rawArgs),
                    isBackground
                });
                if (options2?.smartModeApprovalProvider !== void 0 && isSmartModeNativeApprovalRequested(rawArgs)) {
                    const target = buildApprovalTarget(decision.reason, {
                        proposedAllowRule: decision.proposedAllowRule,
                        appliedRules: decision.appliedRules
                    });
                    const approvalProvider = options2.smartModeApprovalProvider;
                    const approvalDecision = await withToolExecutionTimeoutSuspended(ctx, ()=>approvalProvider.requestApproval({
                            kind: "shell",
                            machineId,
                            target,
                            fingerprint: computeSmartModeShellApprovalTargetFingerprint(target),
                            toolCallId: meta.toolCallId,
                            conversationId,
                            signal: interactionHandler.getAbortSignal(ctx)
                        }));
                    throwIfToolCallAborted(ctx);
                    if (!approvalDecision.approved) {
                        throw new ShellRejectedError(command, workingDirectory, approvalDecision.reason ?? decision.reason);
                    }
                    smartModeApprovalProviderApproved = true;
                    logger100.info(ctx, "Smart Mode shell approval provider allowed", {
                        toolCallId: meta.toolCallId,
                        conversationId,
                        isBackground
                    });
                    return void 0;
                }
                throw new SmartModeShellBlockedAutonomousError(command, workingDirectory, formatSmartModeShellBlockedAutonomousReason(decision.reason));
            };
            if (isBackground === true) {
                const backgroundShellExecutor = resourceAccessor.get(backgroundShellExecutorResource);
                let effectiveRequestedSandboxPolicy = requestedSandboxPolicy;
                let smartModeApproval;
                let skipApproval = false;
                const applyBackgroundSmartModePreflight = async (ctx, updateArgs)=>{
                    smartModeApproval = await enforceSmartModePreflight(ctx);
                    const wentThroughEnforcingClassifier = smartModeClassifierAllowed || smartModeApprovalProviderApproved || smartModeApproval !== void 0;
                    effectiveRequestedSandboxPolicy = wentThroughEnforcingClassifier && options2?.isReadonly !== true ? buildClassifierEscalatedSandboxPolicy(requestedSandboxPolicy, options2?.enableSandboxSharedBuildCache) : requestedSandboxPolicy;
                    skipApproval = smartModeApproval === void 0 && (smartModeClassifierAllowed || smartModeApprovalProviderApproved);
                    if (updateArgs !== void 0) {
                        updateArgs.backgroundArgs.sandboxPolicy = effectiveRequestedSandboxPolicy;
                        updateArgs.backgroundArgs.smartModeApproval = smartModeApproval;
                        updateArgs.backgroundArgs.skipApproval = skipApproval;
                        updateArgs.shellArgs.requestedSandboxPolicy = effectiveRequestedSandboxPolicy;
                        updateArgs.shellArgs.smartModeApproval = smartModeApproval;
                        updateArgs.shellArgs.skipApproval = skipApproval;
                    }
                    logger100.info(ctx, "Smart Mode shell background handoff", {
                        toolCallId: meta.toolCallId,
                        conversationId,
                        smartModeClassifierAllowed,
                        smartModeApprovalProviderApproved,
                        hasSmartModeApproval: smartModeApproval !== void 0,
                        wentThroughEnforcingClassifier,
                        skipApproval,
                        effectiveRequestedSandboxPolicyType: sandboxPolicyTypeToString(effectiveRequestedSandboxPolicy?.type),
                        isReadonly: options2?.isReadonly === true
                    });
                };
                return executeBackgroundCommand(spanCtxt.ctx, backgroundShellExecutor, interactionHandler, {
                    command,
                    workingDirectory,
                    toolCallId: meta.toolCallId,
                    analysis,
                    requestedSandboxPolicy: effectiveRequestedSandboxPolicy,
                    terminalsFolder: resolveTerminalsFolder({
                        terminalsFolder: options2?.terminalsFolder,
                        machineId
                    }),
                    description: description3,
                    ...machineId !== void 0 ? {
                        machineId
                    } : {},
                    classifierResult: protoClassifierResult,
                    smartModeApproval,
                    skipApproval,
                    outputNotification,
                    conversationId,
                    requestId,
                    secretScopeId,
                    adminCommandDenylist: adminCommandDenylistSnapshot,
                    preflight: async (ctx, args2)=>applyBackgroundSmartModePreflight(ctx, args2),
                    beforeExecute: async (ctx)=>{
                        throwIfToolCallAborted(ctx);
                    },
                    hookContextCollector: meta.hookContextCollector
                });
            }
            const parsingResult = analysis.structured;
            const args = new ShellArgs({
                command,
                workingDirectory,
                timeout: executionPlan.backgroundAfterMs,
                toolCallId: meta.toolCallId,
                simpleCommands: analysis.legacy.simpleCommands,
                hasInputRedirect: analysis.legacy.hasInputRedirect,
                hasOutputRedirect: analysis.legacy.hasOutputRedirect,
                parsingResult,
                requestedSandboxPolicy,
                fileOutputThresholdBytes: options2?.fileOutputThresholdBytes,
                timeoutBehavior: executionPlan.timeoutBehavior,
                hardTimeout: executionPlan.hardTimeoutMs,
                description: description3,
                outputNotification,
                classifierResult: protoClassifierResult,
                conversationId,
                requestId,
                secretScopeId,
                closeStdin: options2?.enableCloseStdin === true,
                adminCommandDenylist: [
                    ...adminCommandDenylistSnapshot
                ]
            });
            const baseToolCall = new ShellToolCall({
                args,
                result: void 0,
                description: description3
            });
            const streamingHandler = createStreamingShellHandler(interactionHandler, meta, args, {
                suppressOutputDeltas: options2?.disableTerminalOutputUiStreaming === true
            });
            const applyForegroundSmartModePreflight = async (ctx)=>{
                const smartModeApproval = await enforceSmartModePreflight(ctx);
                if (smartModeApproval !== void 0) {
                    args.smartModeApproval = smartModeApproval;
                } else if (smartModeClassifierAllowed || smartModeApprovalProviderApproved) {
                    args.skipApproval = true;
                }
                const wentThroughEnforcingClassifier = smartModeClassifierAllowed || smartModeApprovalProviderApproved || smartModeApproval !== void 0;
                if (wentThroughEnforcingClassifier && options2?.isReadonly !== true) {
                    args.requestedSandboxPolicy = buildClassifierEscalatedSandboxPolicy(requestedSandboxPolicy, options2?.enableSandboxSharedBuildCache);
                }
                logger100.info(ctx, "Smart Mode shell foreground handoff", {
                    toolCallId: meta.toolCallId,
                    conversationId,
                    smartModeClassifierAllowed,
                    smartModeApprovalProviderApproved,
                    hasSmartModeApproval: smartModeApproval !== void 0,
                    wentThroughEnforcingClassifier,
                    skipApproval: args.skipApproval,
                    requestedSandboxPolicyType: sandboxPolicyTypeToString(args.requestedSandboxPolicy?.type),
                    isReadonly: options2?.isReadonly === true
                });
            };
            const rethrowShellAbort = (error3)=>{
                if (error3 instanceof ShellAbortedError || !(error3 instanceof ToolCallAbortedError) && !(error3 instanceof Error && error3.name === "AbortError")) {
                    throw error3;
                }
                throw new ShellAbortedError({
                    command,
                    workingDirectory,
                    elapsedMs: Date.now() - shellExecuteStartMs,
                    cause: interactionHandler.getAbortSignal(spanCtxt.ctx).reason ?? error3
                });
            };
            let execResult;
            try {
                execResult = await interactionHandler.executeToolCall(spanCtxt.ctx, createShellToolCall(baseToolCall), meta.toolCallId, async (ctx)=>{
                    await applyForegroundSmartModePreflight(ctx);
                    const execId = generateShellExecId(ctx, meta.toolCallId);
                    let interleavedOutput = "";
                    let stdoutOnly = "";
                    let stderrOnly = "";
                    let finalExitCode = null;
                    let receivedExit = false;
                    let aborted2 = false;
                    let abortReason;
                    let finalExecutionTime = 0;
                    let localExecutionTimeMs;
                    let outputLocation;
                    let oomKill2;
                    let actualSandboxPolicy;
                    const steerSignal = meta.contextInjectionSignal;
                    let stopSteerHandoff;
                    if (steerSignal !== void 0 && !isBackground) {
                        const STEER_HANDOFF_RETRY_MS = 500;
                        let stopped = false;
                        let handoffInFlight = false;
                        let handoffAccepted = false;
                        let retryTimer;
                        let unsubscribe;
                        const requestSteerHandoff = ()=>{
                            if (stopped || handoffInFlight || handoffAccepted) {
                                return;
                            }
                            handoffInFlight = true;
                            void (async ()=>{
                                try {
                                    const forceBackgroundExecutor = resourceAccessor.get(forceBackgroundShellExecutorResource);
                                    const forceBackgroundResult = await forceBackgroundExecutor.execute(ctx, new ForceBackgroundShellArgs({
                                        toolCallId: meta.toolCallId
                                    }), machineId !== void 0 ? {
                                        execId,
                                        machineId
                                    } : void 0);
                                    if (forceBackgroundResult.status === ForceBackgroundShellStatus.ACCEPTED) {
                                        handoffAccepted = true;
                                    }
                                } catch (error3) {
                                    logger100.debug(ctx, "Steer-driven shell background handoff failed", {
                                        toolCallId: meta.toolCallId,
                                        error: error3
                                    });
                                } finally{
                                    handoffInFlight = false;
                                    if (!stopped && !handoffAccepted && retryTimer === void 0 && steerSignal.hasPendingUserInjections()) {
                                        retryTimer = setTimeout(()=>{
                                            retryTimer = void 0;
                                            requestSteerHandoff();
                                        }, STEER_HANDOFF_RETRY_MS);
                                    }
                                }
                            })();
                        };
                        stopSteerHandoff = ()=>{
                            stopped = true;
                            if (retryTimer !== void 0) {
                                clearTimeout(retryTimer);
                                retryTimer = void 0;
                            }
                            unsubscribe?.();
                            unsubscribe = void 0;
                        };
                        unsubscribe = steerSignal.onUserInjectionAdmitted(()=>{
                            requestSteerHandoff();
                        });
                        if (steerSignal.hasPendingUserInjections()) {
                            requestSteerHandoff();
                        }
                    }
                    const wrappedShellStream = async function*() {
                        try {
                            throwIfToolCallAborted(ctx);
                            for await (const shellStream of shellStreamExecutor.execute(ctx, args, {
                                execId,
                                hookContextCollector: meta.hookContextCollector,
                                ...machineId !== void 0 ? {
                                    machineId
                                } : {},
                                deliverAgentStoreConflictNotices: meta.hookContextCollector !== void 0
                            })){
                                yield shellStream;
                            }
                        } catch (error3) {
                            if (ctx.canceled) {
                                aborted2 = true;
                                return;
                            }
                            throw error3;
                        } finally{
                            stopSteerHandoff?.();
                        }
                    };
                    for await (const shellStream of wrappedShellStream()){
                        if (shellStream.event.case === "stdout") {
                            const data = shellStream.event.value.data;
                            interleavedOutput += data;
                            stdoutOnly += data;
                            await streamingHandler.handleShellEvent(spanCtxt.ctx, {
                                type: "stdout",
                                data
                            });
                        } else if (shellStream.event.case === "stderr") {
                            const data = shellStream.event.value.data;
                            interleavedOutput += data;
                            stderrOnly += data;
                            await streamingHandler.handleShellEvent(spanCtxt.ctx, {
                                type: "stderr",
                                data
                            });
                        } else if (shellStream.event.case === "exit") {
                            receivedExit = true;
                            finalExitCode = shellStream.event.value.code | 0;
                            finalExecutionTime = Date.now() - streamingHandler.startTime;
                            localExecutionTimeMs = shellStream.event.value.localExecutionTimeMs;
                            outputLocation = shellStream.event.value.outputLocation;
                            aborted2 = shellStream.event.value.aborted;
                            abortReason = shellStream.event.value.abortReason;
                            oomKill2 = shellStream.event.value.oomKill;
                            await streamingHandler.handleShellEvent(spanCtxt.ctx, {
                                type: "exit",
                                code: finalExitCode
                            });
                        } else if (shellStream.event.case === "rejected") {
                            throw new ShellRejectedError(shellStream.event.value.command, shellStream.event.value.workingDirectory, shellStream.event.value.reason);
                        } else if (shellStream.event.case === "permissionDenied") {
                            getAgentEventTracker(ctx).trackShellSandboxResult(ctx, {
                                outcome: "permission_denied",
                                requestedPolicyType: sandboxPolicyTypeToString(requestedSandboxPolicy?.type),
                                toolCallId: meta.toolCallId,
                                command: shellStream.event.value.command,
                                isReadonly: shellStream.event.value.isReadonly
                            });
                            throw new ShellPermissionDeniedError(shellStream.event.value.command, shellStream.event.value.workingDirectory, shellStream.event.value.error, shellStream.event.value.isReadonly);
                        } else if (shellStream.event.case === "sandboxUnsupported") {
                            throw new ShellSandboxUnsupportedError(shellStream.event.value.command, shellStream.event.value.workingDirectory, shellStream.event.value.sandboxPolicyType, shellStream.event.value.reason, shellStream.event.value.isReadonly);
                        } else if (shellStream.event.case === "start") {
                            actualSandboxPolicy = shellStream.event.value.sandboxPolicy;
                        } else if (shellStream.event.case === "hookContext") {
                            appendHookAdditionalContexts(meta.hookContextCollector, shellStream.event.value.hookAdditionalContexts);
                        } else if (shellStream.event.case === "backgrounded") {
                            const { shellId, command: command2, workingDirectory: workingDirectory2, pid, msToWait, reason } = shellStream.event.value;
                            recordBackgroundShellStarted(ctx, {
                                shellId,
                                pid,
                                conversationId,
                                toolCallId: meta.toolCallId,
                                hasOutputNotification: (outputNotification?.pattern.trim().length ?? 0) > 0,
                                source: "adopt"
                            });
                            return {
                                result: {
                                    case: "success",
                                    value: new ShellSuccess({
                                        command: command2,
                                        workingDirectory: workingDirectory2,
                                        shellId,
                                        pid,
                                        stdout: stdoutOnly,
                                        stderr: stderrOnly,
                                        interleavedOutput,
                                        executionTime: Date.now() - streamingHandler.startTime,
                                        msToWait,
                                        backgroundReason: reason
                                    })
                                },
                                actualSandboxPolicy,
                                isBackground: true,
                                terminalsFolder: resolveTerminalsFolder({
                                    terminalsFolder: options2?.terminalsFolder,
                                    machineId
                                })
                            };
                        }
                    }
                    if (!receivedExit && !aborted2) {
                        if (ctx.canceled) {
                            aborted2 = true;
                        } else {
                            shellMissingExitCounter.increment(ctx, 1, {});
                            logger100.error(ctx, "Shell exec stream closed without an exit event; surfacing exec-backend-unavailable instead of a fabricated exit-0 success", {
                                toolCallId: meta.toolCallId,
                                hadPartialOutput: interleavedOutput.length > 0
                            });
                            throw new ShellMissingExitError(args.command, args.workingDirectory, interleavedOutput);
                        }
                    }
                    if (interleavedOutput.includes("command not found: dump_zsh_state")) {
                        zshStateErrorCounter.increment(ctx, 1, {});
                    }
                    const persistInlineOutput = outputLocation === void 0;
                    const baseResult = {
                        command: args.command,
                        workingDirectory: args.workingDirectory,
                        exitCode: finalExitCode ?? 0,
                        signal: aborted2 ? "SIGTERM" : "",
                        stdout: persistInlineOutput ? stdoutOnly : "",
                        stderr: persistInlineOutput ? stderrOnly : "",
                        executionTime: finalExecutionTime,
                        localExecutionTimeMs,
                        outputLocation,
                        interleavedOutput: persistInlineOutput ? interleavedOutput : truncatePersistedShellScrollback(interleavedOutput)
                    };
                    const isSuccess = finalExitCode === 0 && !aborted2;
                    if (isSuccess) {
                        return {
                            result: {
                                case: "success",
                                value: new ShellSuccess(baseResult)
                            },
                            actualSandboxPolicy
                        };
                    } else {
                        return {
                            result: {
                                case: "failure",
                                value: new ShellFailure({
                                    ...baseResult,
                                    abortReason,
                                    aborted: aborted2,
                                    oomKill: oomKill2
                                })
                            },
                            actualSandboxPolicy
                        };
                    }
                }, ({ result })=>createShellToolCall(new ShellToolCall({
                        ...baseToolCall,
                        result: new ShellResult({
                            result,
                            isBackground
                        })
                    })), meta.hookContextCollector);
            } catch (error3) {
                return rethrowShellAbort(error3);
            }
            clearInterruptedShellOutputSnapshot(meta.toolCallId);
            const oomKill = execResult.result.case === "failure" ? execResult.result.value.oomKill : void 0;
            if (oomKill !== void 0) {
                const kind = ShellOomKill_Kind[oomKill.kind]?.toLowerCase() ?? "unknown";
                shellOomKillCounter.increment(spanCtxt.ctx, 1, {
                    kind
                });
                logger100.warn(spanCtxt.ctx, "Shell command OOM kill", {
                    kind,
                    memoryLimitBytes: oomKill.memoryLimitBytes.toString()
                });
            }
            const wasBackgroundedMidExecution = execResult.result.case === "success" && execResult.result.value.shellId !== void 0 && execResult.result.value.shellId !== 0;
            if (options2?.sandboxEnabled && !isBackground && !wasBackgroundedMidExecution) {
                const resultCase = execResult.result.case;
                let exitCode = null;
                let stderr = "";
                let commandStr = "";
                let durationMs2 = 0;
                if (resultCase === "success") {
                    const successValue = execResult.result.value;
                    exitCode = successValue.exitCode;
                    stderr = successValue.stderr;
                    commandStr = successValue.command;
                    durationMs2 = successValue.executionTime;
                } else if (resultCase === "failure") {
                    const failureValue = execResult.result.value;
                    exitCode = failureValue.exitCode;
                    stderr = failureValue.stderr;
                    commandStr = failureValue.command;
                    durationMs2 = failureValue.executionTime;
                }
                const requestedType = sandboxPolicyTypeToString(requestedSandboxPolicy?.type);
                const effectiveType = sandboxPolicyTypeToString(execResult.actualSandboxPolicy?.type ?? requestedSandboxPolicy?.type);
                const allowlistEscalated = requestedType !== effectiveType;
                const failureKind = exitCode !== 0 && exitCode !== null ? analyzeFailure(exitCode, stderr, commandStr) : void 0;
                getAgentEventTracker(spanCtxt.ctx).trackShellSandboxResult(spanCtxt.ctx, {
                    outcome: "completed",
                    requestedPolicyType: requestedType,
                    toolCallId: meta.toolCallId,
                    command: commandStr,
                    effectivePolicyType: effectiveType,
                    allowlistEscalated,
                    networkAccess: requestedSandboxPolicy?.networkAccess ?? false,
                    gitWritesBlocked: false,
                    exitCode,
                    failureKind,
                    durationMs: durationMs2
                });
            }
            return new ShellResult({
                result: execResult.result,
                sandboxPolicy: execResult.actualSandboxPolicy ?? requestedSandboxPolicy,
                isBackground,
                terminalsFolder: resolveTerminalsFolder({
                    terminalsFolder: options2?.terminalsFolder,
                    machineId
                })
            });
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources98(env_1);
        }
    };
    const innerExecute = withSafeParsedArgs(executionParametersSchema, execute, createShellToolCall(new ShellToolCall()), {
        emitInitialPartialToolCall: false,
        classifyParseFailure: (issues)=>issues.length > 0 && issues.every((issue2)=>issue2.path[0] === "notify_on_output") ? ToolErrorClassification.INVALID_OUTPUT_NOTIFICATION : void 0
    });
    const executeWithExclusiveLock = async (ctx, interactionHandler, argsStream, meta)=>{
        const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const replayableStream = new ReplayableAsyncIterable(argsStream);
            const _lockHandle = __addDisposableResource98(env_2, await fileOperationLockManager.waitForExclusiveLock(ctx), false);
            return await innerExecute(ctx, interactionHandler, replayableStream, meta);
        } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        } finally{
            __disposeResources98(env_2);
        }
    };
    const render2 = async (_ctx, result, props)=>{
        return createStringResult(renderShellResultToString(result, {
            discourageAwait: props.allTools.AWAIT !== void 0,
            promptVersion,
            sandboxPromptEnabled,
            useMinimalHarness
        }));
    };
    const name17 = getToolName6(promptVersion);
    const enableTerminalFiles = options2?.enableTerminalFiles ?? false;
    const isReadonly = options2?.isReadonly ?? false;
    const enableGithubTools = options2?.enableGithubTools ?? true;
    const enableBlockUntilMs = options2?.enableBlockUntilMs ?? false;
    const requireBlockUntilMs = options2?.requireBlockUntilMs ?? false;
    return createZodAgentTool("SHELL", {
        name: name17,
        descriptionGenerator: (props)=>getDescription4({
                version: promptVersion,
                enableTerminalFiles,
                sandboxEnabled: sandboxPromptEnabled,
                isReadonly,
                enableGithubTools,
                useMinimalHarness,
                compactShellDescription: options2?.compactShellDescription,
                compactShellFileGuidance: options2?.compactShellFileGuidance,
                enableBlockUntilMs,
                requireBlockUntilMs,
                defaultBlockUntilMs,
                enableTmuxGuidance: options2?.enableTmuxGuidance,
                tmuxSharedSessionName: options2?.tmuxSharedSessionName,
                tmuxSelfHostedMachine: options2?.tmuxSelfHostedMachine,
                enableJobCompletionNotifications: options2?.enableJobCompletionNotifications,
                enableJobProgressNotifications: options2?.enableJobProgressNotifications,
                includeCommandSubstitutionWarning: options2?.includeCommandSubstitutionWarning,
                allTools: props.allTools,
                enablePrCreationForgeGuidance: options2?.enablePrCreationForgeGuidance,
                sandboxNetworkInfo: options2?.sandboxNetworkInfo
            }),
        parameters: parametersSchema29,
        execute: fileOperationLockManager !== void 0 ? executeWithExclusiveLock : innerExecute,
        render: render2,
        serializeError: (error3)=>{
            if (error3 instanceof ShellRejectedError) {
                return createShellToolCall(new ShellToolCall({
                    result: new ShellResult({
                        result: {
                            case: "rejected",
                            value: new ShellRejected({
                                command: error3.command,
                                workingDirectory: error3.workingDirectory,
                                reason: error3.reason
                            })
                        }
                    })
                }));
            }
            if (error3 instanceof ShellPermissionDeniedError) {
                return createShellToolCall(new ShellToolCall({
                    result: new ShellResult({
                        result: {
                            case: "permissionDenied",
                            value: new ShellPermissionDenied({
                                command: error3.command,
                                workingDirectory: error3.workingDirectory,
                                error: error3.error,
                                isReadonly: error3.isReadonly
                            })
                        }
                    })
                }));
            }
            if (error3 instanceof ShellAbortedError) {
                const cause = error3.cause;
                const args = new ShellArgs({
                    command: error3.command,
                    workingDirectory: error3.workingDirectory
                });
                if (isFusedStepGuardTimeoutReason(cause)) {
                    return createShellToolCall(new ShellToolCall({
                        args,
                        result: new ShellResult({
                            result: {
                                case: "timeout",
                                value: new ShellTimeout({
                                    command: error3.command,
                                    workingDirectory: error3.workingDirectory,
                                    timeoutMs: cause.fuseGuardMs
                                })
                            }
                        })
                    }));
                }
                return createShellToolCall(new ShellToolCall({
                    args,
                    result: new ShellResult({
                        result: {
                            case: "spawnError",
                            value: new ShellSpawnError({
                                command: error3.command,
                                workingDirectory: error3.workingDirectory,
                                error: "Aborted"
                            })
                        }
                    })
                }));
            }
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            return createShellToolCall(new ShellToolCall({
                result: new ShellResult({
                    result: {
                        case: "spawnError",
                        value: new ShellSpawnError({
                            error: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
