import { NoopConversationActionReceiver } from "../../../agent-core/dist/conversation-actions/remote.js";
import { init_dist7 } from "../../../agent-core/dist/index.js";
import { DeferredInteractionResponseError, Responses } from "../../../agent-core/dist/interaction-queries.js";
import { init_server } from "../../../agent-core/dist/server.js";
import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { forceBackgroundSubagentExecutorResource } from "../../../agent-exec/dist/subagent-control.js";
import { RUNNING_SUBAGENT_FOLLOWUP_ERROR, pendingSubagentReplayKey, subagentExecutorResource } from "../../../agent-exec/dist/subagent.js";
import { createSpan } from "../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { AnysphereAgent, init_dist35 } from "../index.js";
import { ShimCall, init_shim } from "../shims/shim.js";
import { init_error_class_name } from "../telemetry/error-class-name.js";
import { ToolCallArgParseError, init_common9, withSafeParsedArgs } from "./common.js";
import { init_composer_subagent_resolution } from "./composer-subagent-resolution.js";
import { init_core5 } from "./core.js";
import { init_connect_error2 } from "./core/connect-error.js";
import { init_remote_hooks } from "./core/remote-hooks.js";
import { init_image_processing, tryHydrateReferencedImages } from "./core/subagent/image-processing.js";
import { init_models } from "./core/subagent/models.js";
import { init_subagent_config } from "./core/subagent/subagent-config.js";
import { init_subagent_fork } from "./core/subagent/subagent-fork.js";
import { SubagentResumeMode, init_types13 } from "./core/subagent/types.js";
import { init_lenient_boolean } from "./lenient-boolean.js";
import { init_subagent_forced_model_resolution } from "./subagent-forced-model-resolution.js";
import { SubagentModelForcePolicy, init_subagent_model_force_policy } from "./subagent-model-force-policy.js";
import { init_subagent_registry, subagentRegistryResource } from "./subagent-registry.js";
import { init_task_subagent_completion } from "./task-subagent-completion.js";
import { init_task_subagent_preparation } from "./task-subagent-preparation.js";
import { init_task_tool_name } from "./task-tool-name.js";
import { getAgentEventTracker, init_event_tracking } from "../utils/event-tracking.js";
import { createSubagentContext, getConversationGroupId, getConversationId, init_request_id, parentRequestIdKey, requestModelNameKey } from "../utils/request-id.js";
import { init_dist26 } from "../../../chat-inference/dist/index.js";
import { init_dist } from "../../../context/dist/index.js";
import { createReadonlyResourceAccessor } from "../../../dist_exports.js";
import { external_exports } from "../../../external_exports.js";
import { assertCloudOnlyTaskArgsAllowed, assertMachineAndLegacyArgsNotBothSet, assertResumeSelfForkAllowed, assertValidForkTurns, buildClientContinuationConfig, buildClientSubagentAttachmentsContext, buildCloudSubagentPersistedState, buildPreparedTaskToolHookInput, buildTaskParametersSchema, buildTaskToolDescriptionParts, createStringResult, createSubagentAgentConfig, createTaskToolCall, createZodAgentTool, defineShim, executeRemotePreToolUseHookWithPermissionCheck, executeSubagentStartHook, findSubagentConfigByName, fromRedactedConversationStateStructure, fromRedactedCoreMessage, getLatestParentCursorCommands, getSubagentTypeName, getTaskToolName, getUserAttachedVideoPaths, handleSubagentExecutionError, handleSubagentRunStreamError, isGeminiVideoSubagentType, isPromptVisibleDescription, isWritableIterableClosedError, maybeAppendInterruptRetryHint, pinSubagentModels, prepareTaskSubagent, processSubagentIterationSuccess, renderTaskResultToString, resolveTaskSubagentConfig, targetMachineToProto, toClientSubagentPlacement, toRedactedConversationAction, toRedactedConversationStateStructure, toRedactedInteractionListener, trackPreparedTaskSubagentCreated, trackTaskSubagentCreated } from "../../../mcp_sandbox_policy_exports.js";
import { init_esm3 } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { AssistantMessage, ConversationStep, SubagentPersistedState, TaskArgs, TaskError, TaskResult, TaskSuccess, TaskToolCall, TaskToolCallArgsProto, TaskToolCallDelta, ToolCallDelta, init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
import { ForceBackgroundSubagentArgs, ForceBackgroundSubagentStatus, SubagentArgs, init_subagent_exec_pb } from "../../../proto/dist/generated/agent/v1/subagent_exec_pb.js";
import { SubagentBackgroundReason, SubagentExecutionEnvironment, init_subagents_pb } from "../../../proto/dist/generated/agent/v1/subagents_pb.js";
import { init_agent_v1 } from "../../../redacted-protos/dist/agent-v1.js";
import { PrivacyCapability } from "../../../redaction/dist/classification.js";
import { init_dist27 } from "../../../redaction/dist/index.js";
import { init_dist3 } from "../../../utils/dist/index.js";
var __addDisposableResource68, __disposeResources68, logger84, TASK_RESUME_SELF_SENTINEL, SUBAGENT_STREAM_CLOSED_ERROR, SubagentBlockedByHookError, PROVIDER_ERROR_PREFIX, NOT_FOUND_ERROR_PREFIX, API_ERROR_PREFIX, TASK_ERROR_SHAPE_MAX_JSON_CHARS, TASK_ERROR_SHAPE_MAX_KEYS, StreamingTaskInteractionListener, modelAlias, fastModelIgnored, subagentTypeSpelling, blankToUndefined, sameMachineSchema, selfHostedWorkerSchema, selfHostedPoolSchema, CATALOG_UPDATE_LOCATION_SUFFIX, createTaskTool;
export { API_ERROR_PREFIX, CATALOG_UPDATE_LOCATION_SUFFIX, NOT_FOUND_ERROR_PREFIX, PROVIDER_ERROR_PREFIX, SUBAGENT_STREAM_CLOSED_ERROR, StreamingTaskInteractionListener, SubagentBlockedByHookError, TASK_ERROR_SHAPE_MAX_JSON_CHARS, TASK_ERROR_SHAPE_MAX_KEYS, TASK_RESUME_SELF_SENTINEL, __addDisposableResource68, __disposeResources68, blankToUndefined, createTaskTool, fastModelIgnored, logger84, modelAlias, sameMachineSchema, selfHostedPoolSchema, selfHostedWorkerSchema, subagentTypeSpelling };
var __wakaru_init_task_initialized = false;
export function init_task() {
if (__wakaru_init_task_initialized) return;
__wakaru_init_task_initialized = true;
"use strict";
init_dist7();
init_server();
init_dist8();
init_dist26();
init_dist();
init_agent_pb();
init_subagent_exec_pb();
init_subagents_pb();
init_agent_v1();
init_dist27();
init_dist3();
init_esm3();
init_zod();
init_dist35();
init_shim();
init_error_class_name();
init_event_tracking();
init_request_id();
init_common9();
init_composer_subagent_resolution();
init_connect_error2();
init_remote_hooks();
init_image_processing();
init_models();
init_subagent_config();
init_subagent_fork();
init_types13();
init_core5();
init_lenient_boolean();
init_subagent_forced_model_resolution();
init_subagent_model_force_policy();
init_subagent_registry();
init_task_subagent_completion();
init_task_subagent_preparation();
init_task_tool_name();
__addDisposableResource68 = function(env, value, async) {
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
__disposeResources68 = (function(SuppressedError2) {
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
logger84 = createLogger("task-tool");
TASK_RESUME_SELF_SENTINEL = "self";
SUBAGENT_STREAM_CLOSED_ERROR = "The subagent's connection closed before it finished (the run was torn down mid-flight). This is usually transient \u2014 please try again.";
SubagentBlockedByHookError = class extends Error {
    constructor(message){
        super(message);
        this.toolCallAuditOutcome = "denied";
        this.name = "SubagentBlockedByHookError";
    }
};
SubagentBlockedByHookError.telemetryName = "SubagentBlockedByHookError";
PROVIDER_ERROR_PREFIX = "Provider error:";
NOT_FOUND_ERROR_PREFIX = "Not found error:";
API_ERROR_PREFIX = "API Error:";
TASK_ERROR_SHAPE_MAX_JSON_CHARS = 4e3;
TASK_ERROR_SHAPE_MAX_KEYS = 50;
StreamingTaskInteractionListener = class {
    constructor(interactionHandler, toolCallId){
        this.interactionHandler = interactionHandler;
        this.toolCallId = toolCallId;
    }
    async sendUpdate(ctx, update) {
        await this.interactionHandler.emitToolCallDelta(ctx, this.toolCallId, new ToolCallDelta({
            delta: {
                case: "taskToolCallDelta",
                value: new TaskToolCallDelta({
                    interactionUpdate: update
                })
            }
        }));
    }
    async query(_ctx, query) {
        switch(query.query.case){
            case "webSearchRequestQuery":
                return Responses.webSearchApproved(query.id);
            case "webFetchRequestQuery":
                return Responses.webFetchApproved(query.id);
            case "generateImageRequestQuery":
                return Responses.generateImageApproved(query.id);
            default:
                {
                    throw new Error(`Unhandled interaction query type: ${query.query.case}`);
                }
        }
    }
};
modelAlias = defineShim({
    name: "task_model_alias"
});
fastModelIgnored = defineShim({
    name: "task_fast_model_ignored"
});
subagentTypeSpelling = defineShim({
    name: "task_subagent_type_spelling"
});
blankToUndefined = (val)=>typeof val === "string" && val.trim() === "" ? void 0 : val;
sameMachineSchema = external_exports.object({
    type: external_exports.literal("same_machine")
}).strict().describe("Run on this machine, sharing its checkout and branch. The default.");
selfHostedWorkerSchema = external_exports.object({
    type: external_exports.literal("self_hosted_worker"),
    worker_id: external_exports.string().min(1).describe("Worker to run on, from cursor-cloud-list-self-hosted-workers. Only your own machines can be targeted this way; use self_hosted_pool for a team pool worker. Check that tool's sharedAssignmentAllowed first: a shared worker runs this subagent alongside others, otherwise the subagent waits for the worker to free up.")
}).strict().describe("Run on one specific self-hosted worker of your own. The subagent uses that machine's existing checkout and branch, so it cannot be given a base branch.");
selfHostedPoolSchema = external_exports.object({
    type: external_exports.literal("self_hosted_pool"),
    pool: external_exports.string().optional().describe("Pool to draw a worker from. Defaults to the team's default pool."),
    labels: external_exports.record(external_exports.string()).optional().describe("Key/value labels a candidate worker must all match.")
}).strict().describe("Run on any free worker in a self-hosted pool. Pool workers are claimed exclusively, so the subagent queues until one is free.");
CATALOG_UPDATE_LOCATION_SUFFIX = ", or in the most recent <user_info_catalog_update> block on a later user turn";
createTaskTool = (resourceAccessor, getTaskToolConfig, parentModelInfo, stateHandler, subagentConfigs, options2)=>{
    const { readonlyShellEnabled, allowCustomModelId, includeModelParameter = true, modelParameterDescription, includeExploreSubagent, enableExecuteHookExec, subagentModels: configuredSubagentModels, subagentModelsInUserInfo = false, subagentInheritGuidance = subagentModelsInUserInfo, catalogUpdatesOnUserTurns = false, catalogsInDynamicDescription = false, isModelBlocked, isModelValid, parentMaxMode, forceModelId, subagentModelForcePolicy, compareModelCosts, requiresMaxMode, requireServerSideSubagent, configuredSteps, useClientSideSubagent, enableCloudAsyncSubagents, defaultSubagentsRunInBackground, enableMultitaskMode, enableJobCompletionNotifications, hideAsyncSubagentTaskNotifications, forbidPollingOnlyInBackgroundHint = false, enableAgentChatLinks = true, cloudCoordinatorTaskVariant, enableExploreParentModelInheritance, subagentExperimentGroup, subagentCredentials, attachedMediaUrlProvider, geminiVideoAttachedMediaUrlProvider, inlineVideoMaxBytes, signedUrlVideoMaxBytes, trustedVideoAttachmentRoots, selfForkTurns } = options2;
    if (selfForkTurns !== void 0) {
        assertValidForkTurns(selfForkTurns);
    }
    const subagentModels = subagentModelForcePolicy === SubagentModelForcePolicy.ParentPin && forceModelId !== void 0 ? pinSubagentModels(configuredSubagentModels, forceModelId) : configuredSubagentModels;
    const canUseClientSideSubagent = Boolean(useClientSideSubagent) && !requireServerSideSubagent;
    const supportsAsyncSubagents = canUseClientSideSubagent || enableCloudAsyncSubagents === true;
    const allowResumeSelfFork = supportsAsyncSubagents && options2.allowResumeSelfFork === true;
    const enableSubagentInterrupt = supportsAsyncSubagents && options2.enableSubagentInterrupt === true;
    const shouldDefaultSubagentsRunInBackground = supportsAsyncSubagents && defaultSubagentsRunInBackground === true;
    const taskToolNotificationHintsEnabled = enableJobCompletionNotifications === true && supportsAsyncSubagents;
    const enableTaskToolHooksExec = Boolean(enableExecuteHookExec);
    const taskSchemaOptions = {
        resumeOnlySubagentConfigs: options2.resumeOnlySubagentConfigs,
        allowCustomModelId,
        includeModelParameter,
        modelParameterDescription,
        subagentModels,
        subagentModelsInUserInfo,
        subagentInheritGuidance,
        catalogUpdatesOnUserTurns,
        useClientSideSubagent: canUseClientSideSubagent,
        includeRunInBackgroundInTaskSchema: supportsAsyncSubagents,
        defaultSubagentsRunInBackground: shouldDefaultSubagentsRunInBackground,
        enableSubagentInterrupt,
        environmentParamForSubagent: options2.environmentParamForSubagent === true,
        requestedEnvironmentBuildParamForSubagent: options2.requestedEnvironmentBuildParamForSubagent === true,
        cloudSubagentTargeting: options2.cloudSubagentTargeting === true,
        requireExplicitSubagentTypeForNewSession: options2.requireExplicitSubagentTypeForNewSession === true,
        allowResumeSelfFork,
        enableMultitaskMode,
        taskToolNotificationHintsEnabled,
        hideAsyncSubagentTaskNotifications,
        enableAgentChatLinks
    };
    const { schemaTowardsModel, schemaForParsing } = buildTaskParametersSchema(subagentConfigs, taskSchemaOptions);
    const replayConfigs = (options2.resumeOnlySubagentConfigs ?? []).filter((config2)=>findSubagentConfigByName(subagentConfigs, getSubagentTypeName(config2.subagent_type)) === void 0);
    const replaySchema = replayConfigs.length > 0 && options2.supportsRetiredSubagentReattachment === true && canUseClientSideSubagent ? buildTaskParametersSchema([
        subagentConfigs[0],
        ...subagentConfigs.slice(1),
        ...replayConfigs
    ], {
        ...taskSchemaOptions,
        resumeOnlySubagentConfigs: void 0
    }).schemaForParsing : schemaForParsing;
    const isPendingReplay = (ctx, meta)=>options2.supportsRetiredSubagentReattachment === true && replayConfigs.length > 0 && canUseClientSideSubagent && ctx.get(pendingSubagentReplayKey) !== void 0 && meta.toolCallId.length > 0 && ctx.get(pendingSubagentReplayKey)?.toolCallId === meta.toolCallId;
    const toolName = options2.toolName ?? getTaskToolName(parentModelInfo);
    const areCatalogsInUserInfo = (options3)=>subagentModelsInUserInfo || !isPromptVisibleDescription(options3) && !catalogsInDynamicDescription;
    const taskDescriptionPartsCache = new WeakMap();
    const getTaskDescriptionParts = (props, catalogsInUserInfo)=>{
        let partsByPlacement = taskDescriptionPartsCache.get(props);
        const cachedParts = partsByPlacement?.get(catalogsInUserInfo);
        if (cachedParts !== void 0) {
            return cachedParts;
        }
        const { allTools } = props;
        const parts = buildTaskToolDescriptionParts({
            parentModelInfo,
            configs: subagentConfigs,
            defaultResumeMode: SubagentResumeMode.DEFAULT,
            includeExploreSubagent,
            useClientSideSubagent: canUseClientSideSubagent,
            includeRunInBackgroundInTaskSchema: supportsAsyncSubagents,
            enableSubagentInterrupt,
            taskToolNotificationHintsEnabled,
            hideAsyncSubagentTaskNotifications,
            allowResumeSelfFork,
            enableAgentChatLinks,
            includeModelParameter,
            subagentModels,
            subagentModelsInUserInfo,
            subagentInheritGuidance,
            catalogsInUserInfo,
            catalogUpdatesOnUserTurns,
            toolLabel: toolName,
            readToolName: allTools.READ?.name,
            globToolName: allTools.GLOB?.name,
            subagentExperimentGroup,
            descriptionBase: options2.descriptionBase
        });
        let fullDescription = parts.fullDescription;
        if (taskToolNotificationHintsEnabled) {
            const awaitToolName = allTools.AWAIT?.name;
            const awaitPollClause = forbidPollingOnlyInBackgroundHint ? `${awaitToolName} or poll it` : `${awaitToolName}, poll, or proactively check on its progress`;
            const pollClause = forbidPollingOnlyInBackgroundHint ? "poll it" : "poll or proactively check on its progress";
            fullDescription += awaitToolName ? `

When an agent runs in the background, you will be automatically notified when it completes after you end your own turn - do NOT ${awaitPollClause}. Continue with other work or end your turn instead. Don't mention this to the user.` : `

When an agent runs in the background, you will be automatically notified when it completes after you end your own turn - do NOT ${pollClause}. Continue with other work or end your turn instead. Don't mention this to the user.`;
        }
        if (subagentExperimentGroup === "no-subagent-unless-asked") {
            fullDescription = `IMPORTANT: Do NOT use this tool unless the user has explicitly asked you to use subagents, delegate to agents, or use the ${toolName} tool. You should perform tasks directly using your own tools instead of delegating to subagents. Only use this tool when the user specifically requests it.

` + fullDescription;
        }
        const descriptionParts = {
            ...parts,
            fullDescription
        };
        if (partsByPlacement === void 0) {
            partsByPlacement = new Map();
            taskDescriptionPartsCache.set(props, partsByPlacement);
        }
        partsByPlacement.set(catalogsInUserInfo, descriptionParts);
        return descriptionParts;
    };
    const buildTaskDescription = (props, options3)=>getTaskDescriptionParts(props, areCatalogsInUserInfo(options3)).fullDescription;
    const createParentStateAccessor = ()=>({
            restoreSubagentState: (ctx, subagentId)=>stateHandler.restoreSubagentState(ctx, subagentId),
            resolveSubagentId: (subagentIdOrBcId)=>stateHandler.resolveSubagentId(subagentIdOrBcId),
            getSubagentIdToResume: (typeName, mode)=>stateHandler.getSubagentIdToResume(typeName, mode),
            getConversationState: async (ctx)=>{
                const result = await stateHandler.computeNewStructure(ctx);
                return fromRedactedConversationStateStructure(result, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
            },
            getRootPromptMessages: ()=>stateHandler.rootPromptBuilder.getMessages().map((message)=>fromRedactedCoreMessage(message, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED))
        });
    const parseTaskToolCallArgs = (rawArgs)=>{
        let parsedJson;
        try {
            parsedJson = typeof rawArgs === "string" ? JSON.parse(rawArgs) : rawArgs;
        } catch (error3) {
            const message = error3 instanceof Error ? error3.message : "Failed to parse arguments";
            throw new ToolCallArgParseError(`Invalid arguments:
argument: ${message}`);
        }
        const parseResult = schemaForParsing.safeParse(parsedJson);
        if (!parseResult.success) {
            const errorMessages = parseResult.error.errors.map((err)=>{
                const path64 = err.path.length > 0 ? err.path.join(".") : "argument";
                return `${path64}: ${err.message}`;
            });
            throw new ToolCallArgParseError(`Invalid arguments:
${errorMessages.join("\n")}`);
        }
        const parsedArgs = parseResult.data;
        assertResumeSelfForkAllowed(parsedArgs, allowResumeSelfFork);
        assertMachineAndLegacyArgsNotBothSet(parsedArgs);
        assertCloudOnlyTaskArgsAllowed(parsedArgs);
        return parsedArgs;
    };
    const createTaskToolHookInput = (args)=>({
            description: args.description,
            prompt: args.prompt,
            model: args.model,
            environment: args.environment,
            cloud_base_branch: args.cloud_base_branch,
            cloud_requested_environment_build_id: args.cloud_requested_environment_build_id,
            machine: args.machine,
            resume: args.resume,
            interrupt: args.interrupt,
            subagent_type: args.subagent_type,
            run_in_background: args.run_in_background,
            file_attachments: args.file_attachments
        });
    const applyUpdatedInputToTaskArgs = (rawArgs, updatedInput)=>{
        const mergedArgs = {
            ...rawArgs,
            ...updatedInput
        };
        const parseResult = schemaForParsing.safeParse(mergedArgs);
        if (!parseResult.success) {
            const errorMessages = parseResult.error.errors.map((err)=>{
                const path64 = err.path.length > 0 ? err.path.join(".") : "argument";
                return `${path64}: ${err.message}`;
            });
            throw new ToolCallArgParseError(`Invalid preToolUse updated_input:
${errorMessages.join("\n")}`);
        }
        const parsedArgs = parseResult.data;
        assertResumeSelfForkAllowed(parsedArgs, allowResumeSelfFork);
        assertMachineAndLegacyArgsNotBothSet(parsedArgs);
        assertCloudOnlyTaskArgsAllowed(parsedArgs);
        return parsedArgs;
    };
    const applyTaskPreToolUseUpdatedInput = async (ctx, rawArgs, toolCallId)=>{
        if (!enableTaskToolHooksExec) {
            return rawArgs;
        }
        const hookResult = await executeRemotePreToolUseHookWithPermissionCheck({
            ctx,
            toolName,
            toolInput: createTaskToolHookInput(rawArgs),
            requestContext: {
                toolCallId
            },
            options: {
                resourceAccessor,
                enableExecuteHookExec: enableTaskToolHooksExec,
                configuredSteps
            }
        });
        if (!hookResult.updatedInput) {
            return rawArgs;
        }
        return applyUpdatedInputToTaskArgs(rawArgs, hookResult.updatedInput);
    };
    const applyDefaultRunInBackground = (rawArgs)=>{
        if (!shouldDefaultSubagentsRunInBackground || rawArgs.run_in_background !== void 0) {
            return rawArgs;
        }
        return {
            ...rawArgs,
            run_in_background: true
        };
    };
    const getUpdatedTaskRawArgs = async (ctx, rawArgs, toolCallId)=>await applyTaskPreToolUseUpdatedInput(ctx, applyDefaultRunInBackground(rawArgs), toolCallId);
    const getTaskToolRuntimeConfig = async (ctx, prepared)=>{
        logger84.info(ctx, "Getting Task tool config", {
            toolCallId: prepared.toolCallId,
            subagentType: prepared.subagentTypeName,
            overriddenModelId: prepared.resolvedModelId
        });
        try {
            return await getTaskToolConfig(prepared.resolvedModelId, prepared.subagentType);
        } catch (configError) {
            logger84.error(ctx, "Failed to get Task tool config", configError, {
                toolCallId: prepared.toolCallId,
                subagentType: prepared.subagentTypeName,
                overriddenModelId: prepared.resolvedModelId
            });
            throw configError;
        }
    };
    const runPreparedTaskSubagentLaunchSetup = async (ctx, prepared, taskToolConfig, creationAnalytics)=>{
        if (!prepared.isResume) {
            try {
                await executeSubagentStartHook({
                    resourceAccessor,
                    toolCallId: prepared.toolCallId,
                    subagentId: prepared.subagentId,
                    subagentType: prepared.subagentTypeName,
                    overriddenModelId: prepared.resolvedModelId,
                    task: prepared.taskPrompt,
                    parentCtx: ctx,
                    enableExecuteHookExec: enableTaskToolHooksExec,
                    configuredSteps
                });
            } catch (hookError) {
                if (hookError instanceof SubagentBlockedByHookError) {
                    throw hookError;
                }
                logger84.error(ctx, "Error executing subagentStart hook", hookError, {
                    toolCallId: prepared.toolCallId,
                    subagentType: prepared.subagentTypeName
                });
            }
        }
        if (prepared.parentRequestId) {
            taskToolConfig.logSubagentStart?.({
                parentRequestId: prepared.parentRequestId,
                rootParentRequestId: prepared.rootParentRequestId ?? prepared.parentRequestId,
                parentAgentToolCallId: prepared.toolCallId,
                subagentRequestId: prepared.subagentRequestId,
                action: prepared.initialAction,
                conversationState: prepared.conversationState,
                modelId: prepared.resolvedModelId
            });
        }
        if (creationAnalytics) {
            trackPreparedTaskSubagentCreated(ctx, prepared, creationAnalytics);
        }
    };
    const prepareResolvedTaskSubagentForLaunch = async (ctx, rawArgs, meta, resolved, parentState, options3)=>{
        const parentCursorCommands = await getLatestParentCursorCommands(ctx, stateHandler);
        const prepared = await prepareTaskSubagent({
            resolved,
            ctx,
            rawArgs,
            meta,
            parentState,
            resourceAccessor,
            parentModelInfo,
            subagentCredentials,
            enableExecuteHookExec: enableTaskToolHooksExec,
            configuredSteps,
            readonlyShellEnabled,
            toolName,
            parentCursorCommands: parentCursorCommands ?? void 0,
            privacyMode: stateHandler.getPrivacyMode(),
            attachedMediaUrlProvider,
            geminiVideoAttachedMediaUrlProvider,
            inlineVideoMaxBytes,
            signedUrlVideoMaxBytes,
            selfForkTurns
        });
        const taskToolConfig = options3?.taskToolConfig ?? await getTaskToolRuntimeConfig(ctx, {
            toolCallId: prepared.toolCallId,
            subagentTypeName: prepared.subagentTypeName,
            subagentType: prepared.subagentType,
            resolvedModelId: prepared.resolvedModelId
        });
        await runPreparedTaskSubagentLaunchSetup(ctx, prepared, taskToolConfig, options3?.creationAnalytics);
        return {
            prepared,
            taskToolConfig
        };
    };
    const prepareTaskSubagentForLaunch = async (ctx, rawArgs, meta, launchOptions)=>{
        const updatedRawArgs = await getUpdatedTaskRawArgs(ctx, rawArgs, meta.toolCallId);
        await stateHandler.ensureSubagentStatesLoaded(ctx);
        const parentState = createParentStateAccessor();
        const resolved = await resolveTaskSubagentConfig({
            ctx,
            rawArgs: updatedRawArgs,
            meta,
            subagentConfigs,
            resumeOnlySubagentConfigs: options2.resumeOnlySubagentConfigs,
            parentState,
            parentModelInfo,
            options: {
                forceModelId,
                subagentModelForcePolicy,
                parentRequestedModelName: options2.parentRequestedModelName,
                parentModelParameters: options2.parentModelParameters,
                parentMaxMode,
                subagentModels,
                isModelBlocked,
                isModelValid,
                requiresMaxMode,
                compareModelCosts,
                enableExploreParentModelInheritance
            }
        });
        const { prepared } = await prepareResolvedTaskSubagentForLaunch(ctx, updatedRawArgs, meta, resolved, parentState, launchOptions);
        return prepared;
    };
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_7 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource68(env_7, createSpan(parentCtx.withName("taskExecute")), false);
            const updatedRawArgs = await getUpdatedTaskRawArgs(spanCtxt.ctx, rawArgs, meta.toolCallId);
            assertResumeSelfForkAllowed(updatedRawArgs, allowResumeSelfFork);
            await stateHandler.ensureSubagentStatesLoaded(spanCtxt.ctx);
            const parentState = createParentStateAccessor();
            const reattachOnly = isPendingReplay(spanCtxt.ctx, meta) && !updatedRawArgs.resume && findSubagentConfigByName(replayConfigs, updatedRawArgs.subagent_type ?? "") !== void 0;
            const executionCtx = reattachOnly ? spanCtxt.ctx.with(pendingSubagentReplayKey, {
                toolCallId: meta.toolCallId,
                reattachOnly: true
            }) : spanCtxt.ctx;
            const resolved = await resolveTaskSubagentConfig({
                ctx: executionCtx,
                rawArgs: updatedRawArgs,
                meta,
                subagentConfigs,
                resumeOnlySubagentConfigs: options2.resumeOnlySubagentConfigs,
                reattachOnly,
                parentState,
                parentModelInfo,
                options: {
                    forceModelId,
                    subagentModelForcePolicy,
                    parentRequestedModelName: options2.parentRequestedModelName,
                    parentModelParameters: options2.parentModelParameters,
                    parentMaxMode,
                    subagentModels,
                    isModelBlocked,
                    isModelValid,
                    requiresMaxMode,
                    compareModelCosts,
                    enableExploreParentModelInheritance
                }
            });
            const { subagentConfig, effectiveReadonly, useAskModeForSubagent, typeName, analyticsSubagentType, resolvedModelId, resolvedModelParameters, subagentIdToResume, subagentId, isSelfForkRequested, effectiveEnvironment, effectiveTargetMachine } = resolved;
            const freshClientSubagentPlacement = canUseClientSideSubagent && subagentIdToResume === void 0 ? toClientSubagentPlacement(effectiveTargetMachine) : void 0;
            const args = new TaskArgs({
                description: updatedRawArgs.description,
                prompt: updatedRawArgs.prompt,
                subagentType: subagentConfig.subagent_type,
                model: resolvedModelId,
                resume: updatedRawArgs.resume,
                agentId: subagentId,
                attachments: updatedRawArgs.file_attachments,
                environment: effectiveEnvironment,
                machine: targetMachineToProto(effectiveTargetMachine)
            });
            const baseToolCall = new TaskToolCall({
                args,
                result: void 0
            });
            await interactionHandler.emitPartialToolCall(executionCtx, meta.toolCallId, createTaskToolCall(new TaskToolCall({
                args,
                result: void 0
            })));
            const taskResult = await interactionHandler.executeToolCall(executionCtx, createTaskToolCall(baseToolCall), meta.toolCallId, async (ctx)=>{
                const executionStartTime = Date.now();
                const eventTracker = getAgentEventTracker(ctx);
                if (canUseClientSideSubagent) {
                    logger84.info(ctx, "Using client-side subagent execution", {
                        toolCallId: meta.toolCallId,
                        subagentType: typeName,
                        modelId: resolvedModelId
                    });
                    trackTaskSubagentCreated(ctx, {
                        analyticsSubagentType,
                        subagentTypeName: typeName,
                        resolvedModelId,
                        effectiveReadonly,
                        isResume: subagentIdToResume !== void 0,
                        rawArgs: new TaskToolCallArgsProto({
                            description: updatedRawArgs.description,
                            prompt: updatedRawArgs.prompt,
                            model: updatedRawArgs.model,
                            subagentType: updatedRawArgs.subagent_type,
                            resume: updatedRawArgs.resume,
                            runInBackground: updatedRawArgs.run_in_background,
                            attachments: updatedRawArgs.file_attachments ?? [],
                            environment: effectiveEnvironment,
                            cloudBaseBranch: updatedRawArgs.cloud_base_branch,
                            cloudRequestedEnvironmentBuildId: updatedRawArgs.cloud_requested_environment_build_id,
                            interrupt: updatedRawArgs.interrupt
                        }),
                        toolCallId: meta.toolCallId,
                        plugin: subagentConfig.plugin,
                        marketplace: subagentConfig.marketplace,
                        pluginId: subagentConfig.pluginId,
                        marketplaceId: subagentConfig.marketplaceId,
                        subagentSource: subagentConfig.subagentSource,
                        parentModelName: parentModelInfo.modelName
                    }, {
                        isParallel: false,
                        parallelBatchSize: void 0
                    });
                    try {
                        const subagentExecutor = resourceAccessor.get(subagentExecutorResource);
                        const continuationConfig = buildClientContinuationConfig(subagentConfig);
                        const clientReadonly = useAskModeForSubagent;
                        const rootParentConversationId = getConversationGroupId(ctx);
                        const parentConversationId = getConversationId(ctx);
                        const runInBackground2 = updatedRawArgs.run_in_background ?? subagentConfig.isBackground;
                        let selectedContext2;
                        const privacyMode = stateHandler.getPrivacyMode();
                        if (updatedRawArgs.file_attachments && updatedRawArgs.file_attachments.length > 0) {
                            const userAttachedVideoPaths = await getUserAttachedVideoPaths(ctx, stateHandler);
                            selectedContext2 = await buildClientSubagentAttachmentsContext(ctx, updatedRawArgs.file_attachments, resourceAccessor, meta.toolCallId, {
                                resolvedModelId,
                                privacyMode,
                                attachedMediaUrlProvider: isGeminiVideoSubagentType(subagentConfig.subagent_type) ? geminiVideoAttachedMediaUrlProvider ?? attachedMediaUrlProvider : attachedMediaUrlProvider,
                                conversationId: parentConversationId,
                                inlineVideoMaxBytes,
                                signedUrlVideoMaxBytes,
                                userAttachedVideoPaths,
                                trustedVideoAttachmentRoots
                            });
                        }
                        const steerSignal = meta.contextInjectionSignal;
                        let stopSteerHandoff;
                        if (steerSignal !== void 0 && runInBackground2 !== true) {
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
                                        const forceBackgroundExecutor = resourceAccessor.get(forceBackgroundSubagentExecutorResource);
                                        const forceBackgroundResult = await forceBackgroundExecutor.execute(ctx, new ForceBackgroundSubagentArgs({
                                            toolCallId: meta.toolCallId
                                        }));
                                        if (forceBackgroundResult.status === ForceBackgroundSubagentStatus.ACCEPTED) {
                                            handoffAccepted = true;
                                        }
                                    } catch (error3) {
                                        logger84.debug(ctx, "Steer-driven subagent background handoff failed", {
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
                        let result;
                        try {
                            result = await subagentExecutor.execute(ctx, new SubagentArgs({
                                toolCallId: meta.toolCallId,
                                subagentType: typeName,
                                modelId: resolvedModelId,
                                modelParameters: resolvedModelParameters?.map((parameter)=>({
                                        id: parameter.id,
                                        value: parameter.value
                                    })),
                                credentials: subagentCredentials,
                                prompt: updatedRawArgs.prompt,
                                readonly: clientReadonly,
                                resumeAgentId: isSelfForkRequested ? void 0 : subagentIdToResume,
                                forkAgentId: isSelfForkRequested ? parentConversationId : void 0,
                                interrupt: enableSubagentInterrupt && updatedRawArgs.interrupt === true ? true : void 0,
                                runInBackground: runInBackground2,
                                continuationConfig,
                                rootParentConversationId,
                                parentConversationId,
                                selectedContext: selectedContext2,
                                environment: freshClientSubagentPlacement?.environment ?? effectiveEnvironment,
                                cloudBaseBranch: subagentIdToResume === void 0 ? freshClientSubagentPlacement?.cloudBaseBranch : updatedRawArgs.cloud_base_branch
                            }));
                        } finally{
                            stopSteerHandoff?.();
                        }
                        if (result.result.case === "error") {
                            const error3 = result.result.value;
                            const durationMs3 = Date.now() - executionStartTime;
                            logger84.warn(ctx, "Client-side subagent failed or was aborted", {
                                toolCallId: meta.toolCallId,
                                subagentType: typeName,
                                agentId: error3.agentId,
                                error: error3.error,
                                durationMs: durationMs3
                            });
                            throw new Error(maybeAppendInterruptRetryHint(error3.error ?? "Unknown subagent error", enableSubagentInterrupt, updatedRawArgs.interrupt === true));
                        }
                        if (result.result.case !== "success") {
                            throw new Error("Unknown subagent result");
                        }
                        const success = result.result.value;
                        if (success.backgroundReason === SubagentBackgroundReason.QUEUED_FOLLOW_UP) {
                            return new TaskResult({
                                result: {
                                    case: "error",
                                    value: new TaskError({
                                        error: maybeAppendInterruptRetryHint(RUNNING_SUBAGENT_FOLLOWUP_ERROR, enableSubagentInterrupt, updatedRawArgs.interrupt === true)
                                    })
                                }
                            });
                        }
                        const lastAgentId = effectiveEnvironment === SubagentExecutionEnvironment.CLOUD ? success.agentId : success.agentId ?? subagentId;
                        if (lastAgentId !== void 0 && lastAgentId.length > 0 && (!reattachOnly || stateHandler.restoreSubagentState(ctx, lastAgentId) === void 0)) {
                            stateHandler.persistSubagentState(ctx, lastAgentId, subagentConfig.subagent_type, reattachOnly ? new SubagentPersistedState() : effectiveEnvironment === SubagentExecutionEnvironment.CLOUD ? buildCloudSubagentPersistedState({
                                bcId: lastAgentId,
                                modelId: resolvedModelId,
                                transcriptPath: success.transcriptPath,
                                machine: effectiveTargetMachine
                            }) : new SubagentPersistedState({
                                modelId: resolvedModelId
                            }));
                        }
                        const isBackground = success.backgroundReason !== SubagentBackgroundReason.UNSPECIFIED;
                        const totalLoops = 1;
                        const durationMs2 = Date.now() - executionStartTime;
                        logger84.info(ctx, "Client-side subagent completed successfully", {
                            toolCallId: meta.toolCallId,
                            subagentType: typeName,
                            agentId: lastAgentId,
                            durationMs: durationMs2,
                            totalLoops
                        });
                        eventTracker.trackSubagentCompleted(ctx, {
                            subagentType: analyticsSubagentType,
                            subagentModel: resolvedModelId,
                            parentModel: parentModelInfo.modelName,
                            status: "success",
                            durationMs: durationMs2,
                            toolCallCount: success.toolCallCount,
                            messageCount: 0,
                            isReadonly: effectiveReadonly,
                            isParallel: false,
                            toolCallId: meta.toolCallId,
                            plugin: subagentConfig.plugin,
                            marketplace: subagentConfig.marketplace,
                            pluginId: subagentConfig.pluginId,
                            marketplaceId: subagentConfig.marketplaceId
                        });
                        const conversationSteps = [];
                        if (!isBackground && success.finalMessage) {
                            conversationSteps.push(new ConversationStep({
                                message: {
                                    case: "assistantMessage",
                                    value: new AssistantMessage({
                                        text: success.finalMessage
                                    })
                                }
                            }));
                        }
                        return new TaskResult({
                            result: {
                                case: "success",
                                value: new TaskSuccess({
                                    conversationSteps,
                                    durationMs: BigInt(durationMs2),
                                    agentId: lastAgentId,
                                    isBackground,
                                    backgroundReason: success.backgroundReason,
                                    transcriptPath: success.transcriptPath
                                })
                            }
                        });
                    } catch (error3) {
                        if (error3 instanceof DeferredInteractionResponseError) {
                            throw error3;
                        }
                        const durationMs2 = Date.now() - executionStartTime;
                        const isStreamClosed = isWritableIterableClosedError(error3);
                        const errorMessage4 = isStreamClosed ? SUBAGENT_STREAM_CLOSED_ERROR : error3 instanceof Error ? error3.message : String(error3);
                        if (isStreamClosed) {
                            logger84.info(ctx, "Client-side subagent execution interrupted by stream teardown", {
                                toolCallId: meta.toolCallId,
                                subagentType: typeName,
                                durationMs: durationMs2
                            });
                        } else {
                            logger84.error(ctx, "Client-side subagent execution threw error", error3, {
                                toolCallId: meta.toolCallId,
                                subagentType: typeName,
                                durationMs: durationMs2
                            });
                        }
                        eventTracker.trackSubagentCompleted(ctx, {
                            subagentType: analyticsSubagentType,
                            subagentModel: resolvedModelId,
                            parentModel: parentModelInfo.modelName,
                            status: "error",
                            durationMs: durationMs2,
                            toolCallCount: 0,
                            messageCount: 0,
                            isReadonly: effectiveReadonly,
                            isParallel: false,
                            toolCallId: meta.toolCallId,
                            plugin: subagentConfig.plugin,
                            marketplace: subagentConfig.marketplace,
                            pluginId: subagentConfig.pluginId,
                            marketplaceId: subagentConfig.marketplaceId
                        });
                        return new TaskResult({
                            result: {
                                case: "error",
                                value: new TaskError({
                                    error: errorMessage4
                                })
                            }
                        });
                    }
                }
                const overriddenModelId = resolvedModelId;
                let state;
                const blobStore = stateHandler.getBlobStore();
                const interactionListener = toRedactedInteractionListener(new StreamingTaskInteractionListener(interactionHandler, meta.toolCallId), stateHandler.getPrivacyMode());
                const conversationActionReceiver = new NoopConversationActionReceiver();
                const { prepared, taskToolConfig } = await prepareResolvedTaskSubagentForLaunch(ctx, updatedRawArgs, meta, resolved, parentState);
                const selectedContext = prepared.selectedContext;
                const action = prepared.initialAction;
                const conversationState = prepared.conversationState;
                const postToolUseHookInput = buildPreparedTaskToolHookInput(prepared);
                const { agentConfig: baseAgentConfig, promptSession, summarizationHandler } = taskToolConfig;
                let effectiveResourceAccessor = resourceAccessor;
                if (effectiveReadonly) {
                    effectiveResourceAccessor = createReadonlyResourceAccessor(resourceAccessor, !readonlyShellEnabled);
                }
                const subagentRequestId = prepared.subagentRequestId;
                const subagentAgentConfig = createSubagentAgentConfig({
                    baseAgentConfig,
                    subagentConfig,
                    overriddenModelId,
                    subagentInstanceId: subagentRequestId
                });
                const initialTurnsCount = prepared.initialTurnsCount;
                logger84.info(ctx, "Creating subagent and starting execution", {
                    toolCallId: meta.toolCallId,
                    subagentType: typeName,
                    modelId: subagentAgentConfig.modelId,
                    initialTurnsCount,
                    subagentId
                });
                const subagentDetachedCtx = ctx.withDetached();
                const [subagentCtx, cancelSubagent] = subagentDetachedCtx.withCancel();
                const registry2 = resourceAccessor.get(subagentRegistryResource);
                const parentRequestId = prepared.parentRequestId;
                const rootParentRequestId = prepared.rootParentRequestId;
                const baseSubagentCtx = createSubagentContext(subagentCtx, subagentRequestId, meta.toolCallId);
                const telemetryModelName = subagentConfig.isGithubBugbotSubagent ? "github_bugbot" : overriddenModelId;
                let subagentCtxWithTelemetry = baseSubagentCtx.with(requestModelNameKey, telemetryModelName);
                if (parentRequestId) {
                    subagentCtxWithTelemetry = subagentCtxWithTelemetry.with(parentRequestIdKey, parentRequestId);
                }
                registry2.register(subagentId, {
                    cancel: cancelSubagent
                }, meta.toolCallId);
                const executionTimeoutMs = subagentConfig.executionTimeoutMs;
                const executionTimeoutId = executionTimeoutMs !== void 0 && Number.isFinite(executionTimeoutMs) && executionTimeoutMs > 0 ? setTimeout(()=>{
                    registry2.cancel(subagentId, {
                        intentional: true,
                        reason: `Subagent exceeded execution timeout of ${executionTimeoutMs}ms`
                    });
                }, executionTimeoutMs) : void 0;
                const isParallel = registry2.size > 1;
                const parallelBatchSize = isParallel ? registry2.size : void 0;
                trackPreparedTaskSubagentCreated(ctx, prepared, {
                    isParallel,
                    parallelBatchSize
                });
                const agent = new AnysphereAgent(subagentAgentConfig, promptSession, interactionListener, effectiveResourceAccessor, blobStore, summarizationHandler, conversationActionReceiver);
                const iterState = {
                    loopCount: 0,
                    runStreamCompleted: false,
                    subagentStopCalled: false
                };
                let currentAction = action;
                let currentState = conversationState;
                const completionCtx = {
                    subagentId,
                    subagentRequestId,
                    toolCallId: meta.toolCallId,
                    typeName,
                    analyticsSubagentType,
                    overriddenModelId,
                    effectiveReadonly,
                    useAskModeForSubagent,
                    initialTurnsCount,
                    executionStartTime,
                    isParallel,
                    parentModelName: parentModelInfo.modelName,
                    resultSuffix: subagentConfig.resultSuffix,
                    selectedContext,
                    plugin: subagentConfig.plugin,
                    marketplace: subagentConfig.marketplace,
                    pluginId: subagentConfig.pluginId,
                    marketplaceId: subagentConfig.marketplaceId,
                    rawArgsPrompt: updatedRawArgs.prompt,
                    rawArgsDescription: updatedRawArgs.description
                };
                const hookContext = {
                    resourceAccessor,
                    toolCallId: meta.toolCallId,
                    subagentId,
                    subagentType: typeName,
                    overriddenModelId,
                    parentCtx: ctx,
                    enableExecuteHookExec: enableTaskToolHooksExec,
                    configuredSteps
                };
                const completionDeps = {
                    ctx,
                    blobStore,
                    resourceAccessor,
                    registry: registry2,
                    hookContext,
                    enableTaskToolHooksExec,
                    configuredSteps,
                    toolName,
                    postToolUseHookInput
                };
                try {
                    while(true){
                        iterState.runStreamCompleted = false;
                        iterState.subagentStopCalled = false;
                        const turnsAtStartOfIteration = iterState.loopCount === 0 ? initialTurnsCount : currentState.turns.length;
                        try {
                            state = await agent.runStream(subagentCtxWithTelemetry, toRedactedConversationStateStructure(currentState, stateHandler.getPrivacyMode()), toRedactedConversationAction(currentAction, stateHandler.getPrivacyMode()), [], async (_ctx, _state)=>{});
                            iterState.runStreamCompleted = true;
                            currentState = state;
                        } catch (runStreamError) {
                            await handleSubagentRunStreamError(runStreamError, currentState, iterState, completionCtx, completionDeps, subagentCtx.canceled, registry2.lastAbortOptions);
                        }
                        const iterResult = await processSubagentIterationSuccess(currentState, turnsAtStartOfIteration, iterState, completionCtx, completionDeps, (persistCtx, persistSubagentId, _subagentType, persistedState)=>{
                            stateHandler.persistSubagentState(persistCtx, persistSubagentId, subagentConfig.subagent_type, persistedState);
                        }, subagentConfig.subagent_type);
                        if (iterResult.shouldContinue) {
                            currentAction = iterResult.nextAction;
                        } else {
                            return iterResult.finalResult;
                        }
                    }
                } catch (error3) {
                    return await handleSubagentExecutionError(error3, state, iterState, completionCtx, completionDeps, subagentCtx.canceled, registry2.lastAbortOptions);
                } finally{
                    if (executionTimeoutId !== void 0) {
                        clearTimeout(executionTimeoutId);
                    }
                }
            }, (r)=>createTaskToolCall(new TaskToolCall({
                    args: baseToolCall.args,
                    result: r
                })));
            return taskResult;
        } catch (e_7) {
            env_7.error = e_7;
            env_7.hasError = true;
        } finally{
            __disposeResources68(env_7);
        }
    };
    const render2 = async (_ctx, taskResult, _props)=>{
        const fullText = renderTaskResultToString(taskResult, {
            enableJobCompletionNotifications: taskToolNotificationHintsEnabled,
            hideAsyncSubagentTaskNotifications,
            enableAgentChatLinks,
            cloudCoordinatorTaskVariant
        });
        if (taskResult.result.case === "success" && taskResult.result.value.backgroundReason === SubagentBackgroundReason.UNSPECIFIED) {
            const hydratedResult = tryHydrateReferencedImages(fullText, taskResult.result.value.conversationSteps);
            if (hydratedResult !== void 0) {
                return hydratedResult;
            }
        }
        return createStringResult(fullText, taskResult.result.case === "error");
    };
    return createZodAgentTool("TASK", {
        name: toolName,
        contextType: {
            type: "dynamic",
            conciseStaticContext: "Spawn local and cloud subagents natively."
        },
        descriptionGenerator: buildTaskDescription,
        descriptionTokenPartsGenerator: (props, options3)=>{
            const catalogsInUserInfo = areCatalogsInUserInfo(options3);
            const parts = getTaskDescriptionParts(props, catalogsInUserInfo);
            return {
                subagentDescriptionText: catalogsInUserInfo ? void 0 : parts.subagentTypeDescriptionsText,
                availableSubagentModelsDescriptionText: includeModelParameter && catalogsInUserInfo ? parts.modelsDescription : void 0,
                availableSubagentTypesDescriptionText: catalogsInUserInfo ? parts.subagentTypeDescriptionsText : void 0
            };
        },
        parameters: schemaTowardsModel,
        prepareSubagent: async (ctx, rawArgs, meta)=>{
            const shims = new ShimCall();
            let parsedArgs;
            try {
                parsedArgs = shims.run(()=>parseTaskToolCallArgs(rawArgs));
            } finally{
                shims.flush(ctx);
            }
            return await prepareTaskSubagentForLaunch(ctx, parsedArgs, meta);
        },
        execute: (ctx, handler, argsStream, meta)=>withSafeParsedArgs(isPendingReplay(ctx, meta) ? replaySchema : schemaForParsing, execute, createTaskToolCall(new TaskToolCall()))(ctx, handler, argsStream, meta),
        render: render2,
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            return createTaskToolCall(new TaskToolCall({
                result: new TaskResult({
                    result: {
                        case: "error",
                        value: new TaskError({
                            error: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
