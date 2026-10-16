import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { BROWSER_MCP_PROVIDER_IDS, CURSOR_SELF_CONTROL_PROVIDER_ID } from "../../../agent-exec/dist/mcp.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_attached_media } from "../attached-media.js";
import { init_platform_communication_tools } from "../automations/platform-communication-tools.js";
import { init_common11 } from "./common.js";
import { filterToolSetForCodexCloud, init_openai_codex_cloud2, shouldFilterToolsForCodexCloud, shouldUseCodexCloudBehavior } from "./openai-codex-cloud.js";
import { init_tool_set_finalization } from "./tool-set-finalization.js";
import { createReportBugfixResultsTool } from "../tools/bugbot/autofix-result/report-bugfix-results.js";
import { createRecordScreenTool } from "../tools/cloud-agents/record-screen/record-screen.js";
import { createReflectGeneralTool } from "../tools/cloud-agents/reflect-general.js";
import { createReplaceEnvTool } from "../tools/cloud-agents/replace-env/replace-env.js";
import { createSetupVmEnvironmentTool } from "../tools/cloud-agents/setup-vm-environment/setup-vm-environment.js";
import { init_core5 } from "../tools/core.js";
import { createAskQuestionTool } from "../tools/core/ask-question/index.js";
import { createCodeLineageTool } from "../tools/core/code-lineage.js";
import { createCreatePlanTool } from "../tools/core/create-plan/create-plan.js";
import { createDeleteTool } from "../tools/core/delete.js";
import { createGenerateImageTool } from "../tools/core/generate-image.js";
import { createGlobTool } from "../tools/core/glob/glob.js";
import { createGrepTool } from "../tools/core/grep/grep.js";
import { createMiniSweAgentBashTool } from "../tools/core/miniswe/mini-swe-agent-bash.js";
import { createReadLintsTool } from "../tools/core/read-lints.js";
import { createReadTool } from "../tools/core/read/read.js";
import { createRecordCiInvestigationFindingsTool } from "../tools/core/record-ci-investigation-findings.js";
import { createSearchConversationsTool } from "../tools/core/search-conversations/search-conversations.js";
import { createSemanticSearchTool } from "../tools/core/semantic-search/semantic-search.js";
import { createShellTool } from "../tools/core/shell/shell.js";
import { init_ci_investigator_subagent } from "../tools/core/subagent/ci-investigator-subagent.js";
import { init_subagent_config } from "../tools/core/subagent/subagent-config.js";
import { init_subagent_utils } from "../tools/core/subagent/subagent-utils.js";
import { createSwitchModeTool } from "../tools/core/switch-mode.js";
import { createUpdateTodosTool } from "../tools/core/todo/todo.js";
import { createWebFetchTool } from "../tools/core/web-fetch/web-fetch.js";
import { createWebSearchTool } from "../tools/core/web-search.js";
import { createXSearchTool } from "../tools/core/x-search.js";
import { init_dev_smart_mode_classifier_block } from "../tools/dev-smart-mode-classifier-block.js";
import { init_exclude_tools } from "../tools/exclude-tools.js";
import { init_tools } from "../tools/index.js";
import { init_builtin_tools } from "../tools/mcp/builtin-tools.js";
import { init_clamp_direct_mcp_tools } from "../tools/mcp/clamp-direct-mcp-tools.js";
import { createFetchMcpResourceTool } from "../tools/mcp/fetch-mcp-resource.js";
import { createListMcpResourcesTool } from "../tools/mcp/list-mcp-resources.js";
import { createCallMcpTool, createMcpTool, init_mcp8 } from "../tools/mcp/mcp.js";
import { createSendMessageTool } from "../tools/meta/send-message.js";
import { createSendToUserTool } from "../tools/meta/send-to-user.js";
import { createConnectScmTool } from "../tools/scm/connect-scm.js";
import { createSetActiveBranchTool } from "../tools/set-active-branch.js";
import { init_subagent_model_force_policy } from "../tools/subagent-model-force-policy.js";
import { createTaskTool } from "../tools/task.js";
import { AgentType, init_agent_config } from "../utils/agent-config.js";
import { init_environment_setup_source } from "../utils/environment-setup-source.js";
import { init_request_id } from "../utils/request-id.js";
import { ENV_SETUP_TMUX_SESSION_NAME } from "../../../constants/dist/cloud-agent.js";
import { init_dist2 } from "../../../constants/dist/index.js";
import { init_dist } from "../../../context/dist/index.js";
import { buildSubagentConfigs, createAnthropicComputerTool, createAwaitTool, createDevSmartModeClassifierBlockState, createDevSmartModeClassifierDelayState, createGenerateVideoTool, createGoalTools, createImageGenerationConcurrencyLimiter, getInlineVideoMaxBytes, getSignedUrlVideoMaxBytes, isDynamicToolProfileEnabled, isEnvironmentSetupBackgroundComposerSource, isForcedSubagentModelBlocked, isRequestBasedComposerForceUnavailable, isSubagentExcludedCommunicationMcpTool, resolveConversationStartedDate, resolveEffectiveMcpMetaToolOptions, resolveSwitchModeTargetModes, shouldAllowInteractiveMcpAuth, shouldConvertMcpTupleSchemas, shouldEnableJobCompletionNotifications, shouldEnableJobProgressNotifications, shouldEnableReadLintsTool, shouldEnableWebFetchTool, shouldEnableWebSearchTool, shouldIncludeSearchConversationsTool, shouldIncludeSendMessageTool, shouldIncludeWatchVideoSubagent, shouldPreferRedactedReadTool } from "../../../mcp_sandbox_policy_exports.js";
import { AgentMode, init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
import { McpFileSystemOptions, init_mcp_pb } from "../../../proto/dist/generated/agent/v1/mcp_pb.js";
import { CustomSubagentPermissionMode, init_subagents_pb } from "../../../proto/dist/generated/agent/v1/subagents_pb.js";
import { BackgroundComposerSource, init_background_composer_pb } from "../../../proto/dist/generated/aiserver/v1/background_composer_pb.js";
import { addHarnessTools, clampDirectMcpTools, createGlassMetaParentToolSet, defaultAgentEditToolGenerator, extractSandboxNetworkInfo, filterCloudMetaAgentParentTools, finalizeToolSet, getParametersSchema5, isCiInvestigatorSubagent, isCloudMetaAgentParentToolSession, isDsv3PromptVersion, isGrindSwarmSubagentModelAllowed, mcpRemoteHookFields, registerMcpMetaTools, shouldDisableTerminalOutputUiStreaming, shouldIncludeBrowserUseSubagent, shouldIncludeCliReflectGeneralTool, shouldIncludeConnectScmTool, shouldIncludeTaskToolForSubagentDepth, shouldPreserveTaskToolForNestedSubagents, shouldUseGlassMetaParentAgentMode } from "../../../tree_chunk_napi_exports.js";
var logger104, CLOUD_META_AGENT_PARENT_TOOL_IDENTIFIERS, CLOUD_META_AGENT_PARENT_STORE_MEMORY_TOOL_IDENTIFIERS, defaultAgentToolsGenerator;
export { CLOUD_META_AGENT_PARENT_STORE_MEMORY_TOOL_IDENTIFIERS, CLOUD_META_AGENT_PARENT_TOOL_IDENTIFIERS, defaultAgentToolsGenerator, logger104 };
var __wakaru_init_tool_config_initialized = false;
export function init_tool_config() {
if (__wakaru_init_tool_config_initialized) return;
__wakaru_init_tool_config_initialized = true;
"use strict";
init_dist8();
init_dist2();
init_dist();
init_agent_pb();
init_mcp_pb();
init_subagents_pb();
init_background_composer_pb();
init_attached_media();
init_platform_communication_tools();
init_ci_investigator_subagent();
init_subagent_config();
init_subagent_utils();
init_core5();
init_dev_smart_mode_classifier_block();
init_exclude_tools();
init_tools();
init_builtin_tools();
init_clamp_direct_mcp_tools();
init_mcp8();
init_subagent_model_force_policy();
init_agent_config();
init_environment_setup_source();
init_request_id();
init_common11();
init_openai_codex_cloud2();
init_tool_set_finalization();
logger104 = createLogger("@anysphere/agent:tool-config");
CLOUD_META_AGENT_PARENT_TOOL_IDENTIFIERS = new Set([
    "TASK",
    "GET_MCP_TOOLS",
    "FETCH_MCP_RESOURCE",
    "LIST_MCP_RESOURCES"
]);
CLOUD_META_AGENT_PARENT_STORE_MEMORY_TOOL_IDENTIFIERS = new Set([
    "READ",
    "WRITE",
    "STR_REPLACE",
    "LS"
]);
defaultAgentToolsGenerator = (props)=>{
    if (props.modelInfo.vendor === "cursor" && isDsv3PromptVersion(props.modelInfo.promptVersion)) {
        throw new Error("Tools for dsv3-1018 are handled in dsv31018ToolsGenerator");
    }
    if (shouldUseGlassMetaParentAgentMode(props)) {
        return createGlassMetaParentToolSet(props);
    }
    const { resourceAccessor, fileOperationLockManager, stateHandler, formattingOptions, mcpTools, repositoryInfos, searchImplementation, mode, webSearch, generateImage } = props;
    const promptVersion = props.promptVersion ?? props.modelInfo.promptVersion;
    const sharedTerminalEnvSetupEnabled = props.featureFlags?.sharedTerminalEnvSetup === true && isEnvironmentSetupBackgroundComposerSource(props.backgroundAgentSource);
    const devSmartModeClassifierBlockState = createDevSmartModeClassifierBlockState(props.requestContext);
    const devSmartModeClassifierDelayState = createDevSmartModeClassifierDelayState(props.requestContext);
    const isCloudMetaAgentParent = isCloudMetaAgentParentToolSession(props);
    const shouldFilterCloudMetaAgentParentTools = isCloudMetaAgentParent;
    const isReadonlySubagent = props.subagentConfig?.permissionMode === CustomSubagentPermissionMode.READONLY;
    const subagentMcpToolBlock = props.subagentConfig !== void 0 ? isSubagentExcludedCommunicationMcpTool : void 0;
    if (props.featureFlags?.useMinimalHarness === true) {
        const tools2 = [
            createShellTool(resourceAccessor, {
                fileOutputThresholdBytes: props.fileOutputThresholdBytes,
                enableTerminalFiles: props.enableTerminalFiles,
                sandboxEnabled: props.requestContext?.env?.sandboxEnabled ?? false,
                terminalsFolder: props.requestContext?.env?.terminalsFolder,
                osVersion: props.requestContext?.env?.osVersion,
                enableCloseStdin: props.featureFlags?.closeStdin,
                disableTerminalOutputUiStreaming: shouldDisableTerminalOutputUiStreaming(props),
                enableBlockUntilMs: true,
                defaultBlockUntilMs: props.defaultShellBlockUntilMs,
                parametersSchema: getParametersSchema5({
                    version: promptVersion,
                    sandboxEnabled: props.requestContext?.env?.sandboxEnabled ?? false,
                    enableBlockUntilMs: true,
                    defaultBlockUntilMs: props.defaultShellBlockUntilMs,
                    strictArgParsing: props.strictArgParsing ?? false,
                    useMinimalHarness: true,
                    enableJobProgressNotifications: shouldEnableJobProgressNotifications(props.featureFlags, props.agentType)
                }),
                configTimeoutMs: props.terminalTimeoutMs,
                enableGithubTools: props.agentType !== AgentType.BACKGROUND,
                enablePrCreationForgeGuidance: props.featureFlags?.prCreationForgeGuidance === true,
                shellType: props.requestContext?.env?.shell,
                agentType: props.agentType,
                enableSandboxSharedBuildCache: props.featureFlags?.enableSandboxSharedBuildCache,
                sandboxNetworkInfo: extractSandboxNetworkInfo(props.requestContext?.env),
                commandClassifierService: props.commandClassifierService,
                requestContext: props.requestContext,
                smartModeClassifierMode: props.smartModeClassifierMode,
                smartModeClassifierShadowMode: props.smartModeClassifierShadowMode,
                devSmartModeClassifierBlockState,
                devSmartModeClassifierDelayState,
                useMinimalHarness: true,
                enableTmuxGuidance: props.agentType === AgentType.BACKGROUND && (props.featureFlags?.cloudAgentTmuxShellGuidance || sharedTerminalEnvSetupEnabled),
                tmuxSharedSessionName: sharedTerminalEnvSetupEnabled ? ENV_SETUP_TMUX_SESSION_NAME : void 0,
                tmuxSelfHostedMachine: props.featureFlags?.cloudAgentSelfHostedMachine === true,
                enableJobCompletionNotifications: shouldEnableJobCompletionNotifications(props.featureFlags),
                enableJobProgressNotifications: shouldEnableJobProgressNotifications(props.featureFlags, props.agentType),
                includeCommandSubstitutionWarning: props.modelInfo.isGpt56 === true,
                outputNotificationLimit: props.featureFlags?.outputNotificationLimit
            }, promptVersion),
            createReadTool(resourceAccessor, formattingOptions, promptVersion, {
                enableLineNumbersArg: props.enableReadFileLineNumbersArg,
                enableNegativeOffset: props.featureFlags?.enableReadToolNegativeOffset,
                useExplicitOffsetLimitDescription: props.featureFlags?.enableReadFileExplicitOffsetLimitDescription === true,
                preferRedactedRead: shouldPreferRedactedReadTool(props.requestContext),
                useMinimalHarness: true
            })
        ];
        tools2.push(createWebSearchTool(webSearch, promptVersion, {
            resourceAccessor,
            enableExecuteHookExec: props.enableExecuteHookExec,
            model: props.modelInfo.modelName,
            configuredSteps: props.requestContext?.hooksConfig?.configuredSteps,
            projectFolder: props.requestContext?.env?.projectFolder,
            osPlatform: props.requestContext?.env?.osVersion?.split(" ")[0],
            useMinimalHarness: true,
            variant: props.webSearchToolVariant
        }));
        if (props.webFetchService) {
            tools2.push(createWebFetchTool(props.webFetchService, promptVersion, {
                resourceAccessor,
                agentType: props.agentType,
                requestContext: props.requestContext,
                smartModeClassifierMode: props.smartModeClassifierMode,
                smartModeClassifierShadowMode: props.smartModeClassifierShadowMode,
                devSmartModeClassifierBlockState,
                devSmartModeClassifierDelayState,
                enableExecuteHookExec: props.enableExecuteHookExec,
                model: props.modelInfo.modelName,
                configuredSteps: props.requestContext?.hooksConfig?.configuredSteps,
                projectFolder: props.requestContext?.env?.projectFolder,
                osPlatform: props.requestContext?.env?.osVersion?.split(" ")[0],
                useMinimalHarness: true,
                stripCredentialedUrls: props.featureFlags?.stripCredentialedUrls === true
            }));
        }
        if (shouldIncludeCliReflectGeneralTool(props)) {
            tools2.push(createReflectGeneralTool(props.featureFlags?.cliReflectGeneralConfig));
        }
        if (props.featureFlags?.enablePiTools === true) {
            addHarnessTools(tools2, resourceAccessor);
        }
        if (props.includeMiniSweAgentBashTool === true) {
            tools2.push(createMiniSweAgentBashTool(resourceAccessor));
        }
        const mcpMetaToolOptions2 = resolveEffectiveMcpMetaToolOptions({
            mcpMetaToolOptions: props.requestContext?.mcpMetaToolOptions,
            mcpTools: props.mcpTools,
            mcpDirectMode: props.mcpDirectMode,
            mcpMetaToolFallback: props.featureFlags?.mcpMetaToolFallback,
            enableMcp: props.enableMcp,
            mcpFileSystemModeActive: props.requestContext?.mcpFileSystemOptions?.enabled === true
        });
        let dynamicToolRegistry2;
        if (mcpMetaToolOptions2?.enabled === true) {
            const allowInteractiveMcpAuth2 = shouldAllowInteractiveMcpAuth(props);
            dynamicToolRegistry2 = registerMcpMetaTools(tools2, {
                mcpMetaToolOptions: mcpMetaToolOptions2,
                resourceAccessor,
                projectDir: props.requestContext?.mcpFileSystemOptions?.workspaceProjectDir,
                allowInteractiveMcpAuth: allowInteractiveMcpAuth2,
                agentType: props.agentType,
                requestContext: props.requestContext,
                smartModeClassifierMode: props.smartModeClassifierMode,
                smartModeClassifierShadowMode: props.smartModeClassifierShadowMode,
                devSmartModeClassifierBlockState,
                devSmartModeClassifierDelayState,
                useDynamicToolNamespaces: isDynamicToolProfileEnabled(props.featureFlags?.dynamicToolProfile),
                omitBuiltinToolNamesFromDescription: props.featureFlags?.deferUserInfoCatalogRerender === true,
                directToolRecoveryEnabled: props.featureFlags?.dynamicToolsDirectToolRecovery === true,
                steerReleaseReadOnlyTools: props.featureFlags?.mcpSteerReleaseReadOnlyTools === true,
                isMcpToolBlocked: subagentMcpToolBlock,
                ...mcpRemoteHookFields(props)
            });
        }
        const toolSetHandle2 = finalizeToolSet(props, tools2, dynamicToolRegistry2);
        return shouldFilterCloudMetaAgentParentTools ? toolSetHandle2.transformToolsInPlace((tools3)=>filterCloudMetaAgentParentTools(tools3)) : toolSetHandle2;
    }
    const aiAttributionService = props.enableAiAttribution && props.aiAttribution ? props.aiAttribution : void 0;
    const canUseAiAttribution = aiAttributionService !== void 0;
    const enableComputerUse = props.enableComputerUse && props.modelInfo.vendor === "anthropic";
    const shouldFilterToolsForCloudCodex = shouldFilterToolsForCodexCloud(shouldUseCodexCloudBehavior(props), props.featureFlags);
    const enableGithubTools = props.agentType !== AgentType.BACKGROUND;
    const shouldRestrictEditTools = props.agentType === AgentType.BACKGROUND && props.backgroundAgentSource === BackgroundComposerSource.GRAPHITE_CHAT_WEB;
    const sandboxSupported = Boolean(props.requestContext?.env?.sandboxSupported);
    const forceSandboxEnabled = sandboxSupported && (mode === AgentMode.ASK || isReadonlySubagent);
    let finalizedToolSet;
    const tools = [
        createShellTool(resourceAccessor, {
            fileOutputThresholdBytes: props.fileOutputThresholdBytes,
            enableTerminalFiles: props.enableTerminalFiles,
            sandboxEnabled: forceSandboxEnabled ? true : props.requestContext?.env?.sandboxEnabled ?? false,
            terminalsFolder: props.requestContext?.env?.terminalsFolder,
            osVersion: props.requestContext?.env?.osVersion,
            isReadonly: (mode === AgentMode.ASK || isReadonlySubagent || shouldRestrictEditTools) && (props.featureFlags?.enableReadonlyShell ?? false),
            enableCloseStdin: props.featureFlags?.closeStdin,
            disableTerminalOutputUiStreaming: shouldDisableTerminalOutputUiStreaming(props),
            enableBlockUntilMs: true,
            defaultBlockUntilMs: props.defaultShellBlockUntilMs,
            compactShellDescription: props.featureFlags?.compactShellDescription === true || props.subagentConfig?.subagent_type?.type.case === "computerUse",
            parametersSchema: getParametersSchema5({
                version: promptVersion,
                sandboxEnabled: forceSandboxEnabled ? true : props.requestContext?.env?.sandboxEnabled ?? false,
                isReadonly: (mode === AgentMode.ASK || isReadonlySubagent) && (props.featureFlags?.enableReadonlyShell ?? false),
                enableBlockUntilMs: true,
                defaultBlockUntilMs: props.defaultShellBlockUntilMs,
                strictArgParsing: props.strictArgParsing ?? false,
                enableJobProgressNotifications: shouldEnableJobProgressNotifications(props.featureFlags, props.agentType)
            }),
            configTimeoutMs: props.terminalTimeoutMs,
            enableGithubTools,
            enablePrCreationForgeGuidance: props.featureFlags?.prCreationForgeGuidance === true,
            enableCoAuthoredByTrailer: (()=>{
                const featureFlagEnabled = props.featureFlags?.enableCoAuthoredByTrailer === true;
                const isCliOrIde = props.agentType === AgentType.CLI || props.agentType === AgentType.IDE;
                const hasCommitAttributionMessage = !!props.requestContext?.commitAttributionMessage;
                return featureFlagEnabled && isCliOrIde && hasCommitAttributionMessage;
            })(),
            enablePRGeneratedByFooter: (()=>{
                const featureFlagEnabled = props.featureFlags?.enableCoAuthoredByTrailer === true;
                const isCliOrIde = props.agentType === AgentType.CLI || props.agentType === AgentType.IDE;
                const hasPrAttributionMessage = !!props.requestContext?.prAttributionMessage;
                return featureFlagEnabled && isCliOrIde && hasPrAttributionMessage;
            })(),
            shellType: props.requestContext?.env?.shell,
            agentType: props.agentType,
            enableSandboxSharedBuildCache: props.featureFlags?.enableSandboxSharedBuildCache,
            subagentConfig: props.subagentConfig,
            sandboxNetworkInfo: extractSandboxNetworkInfo(props.requestContext?.env),
            commandClassifierService: props.commandClassifierService,
            requestContext: props.requestContext,
            smartModeClassifierMode: props.smartModeClassifierMode,
            smartModeClassifierShadowMode: props.smartModeClassifierShadowMode,
            devSmartModeClassifierBlockState,
            devSmartModeClassifierDelayState,
            enableTmuxGuidance: props.agentType === AgentType.BACKGROUND && (props.featureFlags?.cloudAgentTmuxShellGuidance || sharedTerminalEnvSetupEnabled),
            tmuxSharedSessionName: sharedTerminalEnvSetupEnabled ? ENV_SETUP_TMUX_SESSION_NAME : void 0,
            tmuxSelfHostedMachine: props.featureFlags?.cloudAgentSelfHostedMachine === true,
            enableJobCompletionNotifications: shouldEnableJobCompletionNotifications(props.featureFlags),
            enableJobProgressNotifications: shouldEnableJobProgressNotifications(props.featureFlags, props.agentType),
            includeCommandSubstitutionWarning: props.modelInfo.isGpt56 === true,
            outputNotificationLimit: props.featureFlags?.outputNotificationLimit
        }, promptVersion),
        createGlobTool(resourceAccessor, promptVersion)
    ];
    if (props.includeMiniSweAgentBashTool === true) {
        tools.push(createMiniSweAgentBashTool(resourceAccessor));
    }
    if (shouldIncludeCliReflectGeneralTool(props)) {
        tools.push(createReflectGeneralTool(props.featureFlags?.cliReflectGeneralConfig));
    }
    if (props.featureFlags?.enableSetActiveBranch === true && (props.requestContext?.env?.workspacePaths.length ?? 0) <= 1) {
        tools.push(createSetActiveBranchTool(resourceAccessor, stateHandler));
    }
    if (shouldIncludeConnectScmTool(props)) {
        tools.push(createConnectScmTool());
    }
    if (shouldIncludeSearchConversationsTool(props)) {
        tools.push(createSearchConversationsTool(resourceAccessor));
    }
    if (shouldIncludeSendMessageTool(stateHandler, props)) {
        tools.push(createSendMessageTool());
    }
    if (props.featureFlags?.enableGoalTools === true && props.subagentConfig === void 0 && !shouldRestrictEditTools) {
        const { createGoalTool, updateGoalTool } = createGoalTools(stateHandler, {
            agentSessionId: props.agentSessionId
        });
        tools.push(createGoalTool, updateGoalTool);
    }
    if ((props.featureFlags?.enableCiInvestigatorSubagent ?? false) && (props.agentType === AgentType.BACKGROUND || props.agentType === AgentType.IDE) && isCiInvestigatorSubagent(props)) {
        tools.push(createRecordCiInvestigationFindingsTool());
    }
    if (props.enableGrepTool !== false) {
        tools.push(createGrepTool(resourceAccessor, promptVersion, {
            boostSemanticSearch: props.featureFlags?.boostSemanticSearch,
            semanticSearchReminderMinPatterns: props.featureFlags?.semanticSearchReminderMinPatterns,
            enableBroadGlobGuard: props.featureFlags?.enableGrepBroadGlobGuard
        }));
    }
    const longRunningJobsEnabled = props.featureFlags?.longRunningJobs === true;
    const canUseClientSideSubagentForTaskTool = props.featureFlags?.useClientSideSubagent === true && props.taskToolProps?.requireServerSideSubagent !== true;
    const enableAwaitForSubagents = props.featureFlags?.enableAwaitForSubagents !== false;
    const hasShellOrTaskTool = tools.some((tool)=>tool.toolIdentifier === "SHELL" || tool.toolIdentifier === "TASK");
    if (longRunningJobsEnabled && !isDsv3PromptVersion(promptVersion) && hasShellOrTaskTool) {
        tools.push(createAwaitTool(resourceAccessor, {
            terminalsFolder: props.requestContext?.env?.terminalsFolder,
            agentTranscriptsFolder: props.agentType === AgentType.BACKGROUND ? void 0 : props.requestContext?.env?.agentTranscriptsFolder,
            defaultModelId: props.modelInfo.modelName,
            enableAwaitTerminalPathCompat: props.modelInfo.promptVersion === "cursor-0226",
            enableSubagentAwaiting: canUseClientSideSubagentForTaskTool,
            enableAwaitForSubagents,
            fixClaudeSubagentAwait: props.featureFlags?.fixClaudeSubagentAwait === true,
            enableBoundedSubagentAwait: canUseClientSideSubagentForTaskTool && props.featureFlags?.enableBoundedSubagentAwait === true,
            promptCacheTTLMs: props.estimatedCacheTTLMs,
            enableJobCompletionNotifications: shouldEnableJobCompletionNotifications(props.featureFlags)
        }, promptVersion));
    }
    tools.push(createReadTool(resourceAccessor, formattingOptions, promptVersion, {
        enableLineNumbersArg: props.enableReadFileLineNumbersArg,
        enableNegativeOffset: props.featureFlags?.enableReadToolNegativeOffset,
        useExplicitOffsetLimitDescription: props.featureFlags?.enableReadFileExplicitOffsetLimitDescription === true,
        preferRedactedRead: shouldPreferRedactedReadTool(props.requestContext),
        fileOperationLockManager
    }));
    if (!shouldRestrictEditTools) {
        tools.push(createDeleteTool(resourceAccessor, fileOperationLockManager, stateHandler, promptVersion));
        tools.push(...defaultAgentEditToolGenerator({
            ...props,
            promptVersion
        }));
    }
    const includeGrindSwarmSubagent = (props.featureFlags?.enableGrindSwarmSubagent ?? false) && isGrindSwarmSubagentModelAllowed(props.modelInfo);
    const enableBrowserSubagentGating = props.featureFlags?.enableBrowserSubagentGating ?? false;
    const isGrindSwarmSubagent = includeGrindSwarmSubagent && props.subagentConfig?.subagent_type?.type.case === "custom" && (props.subagentConfig.subagent_type.type.value.name === "coordinator-agent" || props.subagentConfig.subagent_type.type.value.name === "worker-agent");
    if (!isGrindSwarmSubagent) {
        tools.push(createUpdateTodosTool(resourceAccessor, stateHandler, promptVersion));
    }
    const isBugbotAutofix = props.agentType === AgentType.BACKGROUND && props.backgroundAgentSource === BackgroundComposerSource.BUGBOT_AUTOFIX;
    if (isBugbotAutofix) {
        tools.push(createReportBugfixResultsTool(resourceAccessor, promptVersion));
    }
    if (shouldEnableReadLintsTool(props.enableReadLints, props.requestContext)) {
        tools.push(createReadLintsTool(resourceAccessor, promptVersion));
    }
    if (props.enableSendToUser === true) {
        tools.push(createSendToUserTool());
    }
    if (props.enableSemanticSearch && repositoryInfos.length > 0) {
        const numResultsConfig = props.modelInfo.vendor === "anthropic" ? {
            enabled: true,
            required: false,
            topK: props.semanticSearchTopK ?? 15
        } : void 0;
        tools.push(createSemanticSearchTool(resourceAccessor, searchImplementation, promptVersion, void 0, numResultsConfig, {
            preferRedactedRead: shouldPreferRedactedReadTool(props.requestContext)
        }));
    }
    if (shouldEnableWebSearchTool(props.enableWebSearch, props.requestContext)) {
        const conversationStartedDate = resolveConversationStartedDate(props.stateHandler, props.requestContext);
        tools.push(createWebSearchTool(webSearch, promptVersion, {
            resourceAccessor,
            enableExecuteHookExec: props.enableExecuteHookExec,
            model: props.modelInfo.modelName,
            configuredSteps: props.requestContext?.hooksConfig?.configuredSteps,
            projectFolder: props.requestContext?.env?.projectFolder,
            osPlatform: props.requestContext?.env?.osVersion?.split(" ")[0],
            conversationStartedDate,
            variant: props.webSearchToolVariant
        }));
    }
    if (shouldEnableWebFetchTool({
        webFetchAvailable: props.webFetchAvailable,
        webFetchEnabledByUser: props.requestContext?.webFetchEnabled ?? true
    }) && props.webFetchService) {
        tools.push(createWebFetchTool(props.webFetchService, promptVersion, {
            resourceAccessor,
            agentType: props.agentType,
            requestContext: props.requestContext,
            smartModeClassifierMode: props.smartModeClassifierMode,
            smartModeClassifierShadowMode: props.smartModeClassifierShadowMode,
            devSmartModeClassifierBlockState,
            devSmartModeClassifierDelayState,
            enableExecuteHookExec: props.enableExecuteHookExec,
            model: props.modelInfo.modelName,
            configuredSteps: props.requestContext?.hooksConfig?.configuredSteps,
            projectFolder: props.requestContext?.env?.projectFolder,
            osPlatform: props.requestContext?.env?.osVersion?.split(" ")[0],
            stripCredentialedUrls: props.featureFlags?.stripCredentialedUrls === true
        }));
    }
    if (props.enableGenerateImage) {
        const imageGenerationConcurrencyLimiter = props.imageGenerationConcurrencyLimiter ?? createImageGenerationConcurrencyLimiter(2);
        tools.push(createGenerateImageTool(resourceAccessor, generateImage, promptVersion, props.requestContext, imageGenerationConcurrencyLimiter, mode === AgentMode.ASK || isReadonlySubagent, props.generateImageSuspiciousKeywords, props.isGenerateImageModelRestricted));
    }
    if (props.generateVideo !== void 0) {
        tools.push(createGenerateVideoTool({
            ...props.generateVideo,
            resourceAccessor,
            promptVersion,
            requestContext: props.requestContext,
            isReadonly: mode === AgentMode.ASK || isReadonlySubagent
        }));
    }
    if (props.xSearch !== void 0 && (props.requestContext?.webSearchEnabled ?? true)) {
        tools.push(createXSearchTool(props.xSearch, promptVersion, {
            resourceAccessor,
            enableExecuteHookExec: props.enableExecuteHookExec,
            model: props.modelInfo.modelName,
            configuredSteps: props.requestContext?.hooksConfig?.configuredSteps
        }));
    }
    if (canUseAiAttribution) {
        const aiAttributionOptions = {
            projectFolder: props.requestContext?.env?.projectFolder,
            osPlatform: props.requestContext?.env?.osVersion?.split(" ")[0],
            resourceAccessor
        };
        tools.push(createCodeLineageTool(aiAttributionService, promptVersion, aiAttributionOptions));
    }
    if (props.enableRecordScreen) {
        tools.push(createRecordScreenTool(resourceAccessor, promptVersion));
    }
    if (props.enableReplaceEnv) {
        tools.push(createReplaceEnvTool(resourceAccessor, promptVersion));
    }
    if (props.enableSetupVmEnvironment) {
        tools.push(createSetupVmEnvironmentTool(resourceAccessor, promptVersion, {
            enableDockerfileContents: props.enableReplaceEnv
        }));
    }
    if (props.enableAskQuestionTool) {
        tools.push(createAskQuestionTool(resourceAccessor, {
            name: props.askQuestionToolName,
            modelInfo: props.modelInfo,
            useAntiAskQuestionDescription: props.featureFlags?.enableAntiAskQuestionToolDescription === true,
            autoRejectFirstAskQuestion: props.autoRejectFirstAskQuestion,
            getDynamicTools: ()=>finalizedToolSet?.getDynamicTools() ?? []
        }));
    }
    if (mode === AgentMode.PLAN) {
        tools.push(createCreatePlanTool(resourceAccessor, stateHandler, promptVersion, props.enableAskQuestionTool, {
            planModePromptCitation: props.featureFlags?.planModePromptCitation,
            enableCodeLineage: canUseAiAttribution,
            useNewPlanModePrompts: props.featureFlags?.useNewPlanModePrompts,
            requestContext: props.requestContext,
            askQuestionToolName: props.askQuestionToolName
        }));
    }
    const includeExploreSubagent = props.featureFlags?.enableExploreSubagent ?? false;
    const includePastConversationExplorerSubagent = props.featureFlags?.enablePastConversationExplorerSubagent ?? false;
    const includeCursorBlameLearningSubagent = canUseAiAttribution;
    const includeDebugSubagent = props.featureFlags?.enableDebugSubagent ?? false;
    let hasComputerUseSubagent = false;
    const taskToolProps = props.taskToolProps;
    const rawCustomSubagents = props.requestContext?.customSubagents ?? [];
    const customSubagents = taskToolProps ? taskToolProps.normalizeCustomSubagents(rawCustomSubagents) : rawCustomSubagents;
    if (taskToolProps) {
        const isForcedModelBlocked = isForcedSubagentModelBlocked(taskToolProps.subagentModelForcePolicy, taskToolProps.forceModelId, taskToolProps.isModelBlocked);
        const isForcedComposerUnavailable = isRequestBasedComposerForceUnavailable(taskToolProps.subagentModelForcePolicy, taskToolProps.forceModelId);
        if (!isForcedModelBlocked && !isForcedComposerUnavailable && shouldIncludeTaskToolForSubagentDepth(props, "default")) {
            const includeCiInvestigatorSubagent = props.featureFlags?.enableCiInvestigatorSubagent ?? false;
            const includeBugbotSubagent = props.featureFlags?.enableBugbotSubagent ?? false;
            const bugbotSupportsNaturalLanguage = props.featureFlags?.enableReviewAgentNaturalLanguageDescription ?? false;
            const bugbotEnableProactiveReview = props.featureFlags?.enableProactiveBugbotReviewSubagent ?? false;
            const includeSecurityReviewSubagent = props.featureFlags?.enableSecurityReviewSubagent ?? false;
            const includeFsdSubagent = props.featureFlags?.enableFsdSubagent ?? false;
            const taskToolIncludeGrindSwarmSubagent = (taskToolProps.enableGrindSwarmSubagent ?? false) && isGrindSwarmSubagentModelAllowed(props.modelInfo);
            const includeBrowserUseSubagent = taskToolProps.enableBrowserSubagent ?? false;
            const subagentConfigs = buildSubagentConfigs({
                customSubagents,
                enableNestedSubagents: shouldPreserveTaskToolForNestedSubagents(props.featureFlags, taskToolProps.requireServerSideSubagent),
                includeComputerUseSubagent: props.enableComputerUseSubagent ?? false,
                includeWatchVideoSubagent: shouldIncludeWatchVideoSubagent({
                    agentType: props.agentType,
                    backgroundAgentSource: props.backgroundAgentSource,
                    featureFlags: props.featureFlags
                }),
                includeExploreSubagent,
                includeShellSubagent: taskToolProps.enableShellSubagent,
                includeDebugSubagent,
                includeBrowserUseSubagent: shouldIncludeBrowserUseSubagent(props, {
                    enableBrowserSubagentGating,
                    includeBrowserUseSubagent
                }),
                includeVmSetupHelperSubagent: props.enableSetupVmEnvironment ?? false,
                includePastConversationExplorerSubagent,
                includeCursorBlameLearningSubagent,
                computerUseSubagentOverrides: props.computerUseSubagentOverrides,
                includeGrindSwarmSubagent: taskToolIncludeGrindSwarmSubagent,
                includeCursorGuideSubagent: true,
                includeCiInvestigatorSubagent,
                includeBugbotSubagent,
                bugbotSupportsNaturalLanguage,
                bugbotEnableProactiveReview,
                bugbotModelOverride: taskToolProps.bugbotModelOverride,
                includeSecurityReviewSubagent,
                includeFsdSubagent,
                restrictToCoordinatorKeepList: props.featureFlags?.cloudCoordinatorToolsEnabled === true,
                subagentModelOverrides: taskToolProps.subagentModelOverrides
            });
            hasComputerUseSubagent = subagentConfigs.some((config2)=>config2.subagent_type.type.case === "computerUse");
            const readonlyShellEnabled = props.requestContext?.env?.sandboxEnabled ?? false;
            tools.push(createTaskTool(resourceAccessor, taskToolProps.getTaskToolConfig, props.modelInfo, props.stateHandler, subagentConfigs, {
                parentRequestedModelName: taskToolProps.parentRequestedModelName,
                parentModelParameters: taskToolProps.parentModelParameters,
                parentMaxMode: taskToolProps.parentMaxMode,
                isModelBlocked: taskToolProps.isModelBlocked,
                isModelValid: taskToolProps.isModelValid,
                requiresMaxMode: taskToolProps.requiresMaxMode,
                forceModelId: taskToolProps.forceModelId,
                compareModelCosts: taskToolProps.compareModelCosts,
                subagentModelForcePolicy: taskToolProps.subagentModelForcePolicy,
                requireServerSideSubagent: taskToolProps.requireServerSideSubagent,
                readonlyShellEnabled,
                allowCustomModelId: props.synthesis !== void 0,
                includeExploreSubagent,
                enableExecuteHookExec: props.enableExecuteHookExec,
                subagentModels: taskToolProps.subagentModels,
                subagentModelsInUserInfo: taskToolProps.subagentModelsInUserInfo === true,
                subagentInheritGuidance: taskToolProps.subagentInheritGuidance ?? taskToolProps.subagentModelsInUserInfo === true,
                catalogUpdatesOnUserTurns: props.featureFlags?.deferUserInfoCatalogRerender === true,
                subagentCredentials: taskToolProps.subagentCredentials,
                attachedMediaUrlProvider: taskToolProps.attachedMediaUrlProvider,
                geminiVideoAttachedMediaUrlProvider: taskToolProps.geminiVideoAttachedMediaUrlProvider,
                inlineVideoMaxBytes: getInlineVideoMaxBytes({
                    featureFlags: props.featureFlags
                }),
                signedUrlVideoMaxBytes: getSignedUrlVideoMaxBytes({
                    featureFlags: props.featureFlags
                }),
                configuredSteps: props.requestContext?.hooksConfig?.configuredSteps,
                useClientSideSubagent: props.featureFlags?.useClientSideSubagent,
                enableCloudAsyncSubagents: props.featureFlags?.enableCloudAsyncSubagents,
                defaultSubagentsRunInBackground: props.featureFlags?.defaultSubagentsRunInBackground,
                enableSubagentInterrupt: props.featureFlags?.subagentSupportInterrupt,
                allowResumeSelfFork: (props.agentType === AgentType.IDE || props.agentType === AgentType.BACKGROUND) && props.featureFlags?.allowResumeSelfFork === true,
                environmentParamForSubagent: props.featureFlags?.environmentParamForSubagent === true,
                requestedEnvironmentBuildParamForSubagent: props.featureFlags?.requestedEnvironmentBuildParamForSubagent === true,
                cloudSubagentTargeting: props.featureFlags?.cloudSubagentTargeting === true,
                enableMultitaskMode: props.featureFlags?.enableMultitaskMode,
                enableJobCompletionNotifications: shouldEnableJobCompletionNotifications(props.featureFlags),
                hideAsyncSubagentTaskNotifications: props.featureFlags?.hideAsyncSubagentTaskNotifications,
                enableAgentChatLinks: props.featureFlags?.enableAgentChatLinks !== false && props.agentType === AgentType.IDE,
                enableExploreParentModelInheritance: props.featureFlags?.enableExploreParentModelInheritance,
                cloudCoordinatorTaskVariant: props.featureFlags?.cloudCoordinatorToolsEnabled === true && props.featureFlags?.cloudCoordinatorTaskEnabled === true,
                subagentExperimentGroup: taskToolProps.subagentExperimentGroup
            }));
        }
    }
    const shouldRemoveAllBrowserTools = hasComputerUseSubagent && !enableComputerUse;
    const shouldRemoveSelfControlOnly = enableComputerUse;
    const convertMcpTupleSchemas = shouldConvertMcpTupleSchemas(props, props.modelInfo.modelName);
    let mcpFileSystemOptions = props.requestContext?.mcpFileSystemOptions;
    if (mcpFileSystemOptions !== void 0 && (shouldRemoveAllBrowserTools || shouldRemoveSelfControlOnly)) {
        const filteredDescriptors = shouldRemoveAllBrowserTools ? mcpFileSystemOptions.mcpDescriptors.filter((descriptor)=>!BROWSER_MCP_PROVIDER_IDS.has(descriptor.serverIdentifier)) : mcpFileSystemOptions.mcpDescriptors.filter((descriptor)=>descriptor.serverIdentifier !== CURSOR_SELF_CONTROL_PROVIDER_ID);
        mcpFileSystemOptions = new McpFileSystemOptions({
            enabled: mcpFileSystemOptions.enabled,
            workspaceProjectDir: mcpFileSystemOptions.workspaceProjectDir,
            mcpDescriptors: filteredDescriptors
        });
    }
    const filteredMcpTools = shouldRemoveAllBrowserTools ? mcpTools.filter((tool)=>!BROWSER_MCP_PROVIDER_IDS.has(tool.providerIdentifier)) : shouldRemoveSelfControlOnly ? mcpTools.filter((tool)=>tool.providerIdentifier !== CURSOR_SELF_CONTROL_PROVIDER_ID) : mcpTools;
    const mcpMetaToolOptions = resolveEffectiveMcpMetaToolOptions({
        mcpMetaToolOptions: props.requestContext?.mcpMetaToolOptions,
        mcpTools: filteredMcpTools,
        mcpDirectMode: props.mcpDirectMode,
        mcpMetaToolFallback: props.featureFlags?.mcpMetaToolFallback,
        enableMcp: props.enableMcp,
        mcpFileSystemModeActive: mcpFileSystemOptions?.enabled === true
    });
    const allowInteractiveMcpAuth = shouldAllowInteractiveMcpAuth(props);
    const dropCustomPromptContext = props.featureFlags?.dropCustomPromptContext === true;
    let dynamicToolRegistry;
    if (!dropCustomPromptContext && mcpMetaToolOptions?.enabled === true) {
        dynamicToolRegistry = registerMcpMetaTools(tools, {
            mcpMetaToolOptions,
            resourceAccessor,
            projectDir: mcpFileSystemOptions?.workspaceProjectDir,
            allowInteractiveMcpAuth,
            agentType: props.agentType,
            requestContext: props.requestContext,
            smartModeClassifierMode: props.smartModeClassifierMode,
            smartModeClassifierShadowMode: props.smartModeClassifierShadowMode,
            devSmartModeClassifierBlockState,
            devSmartModeClassifierDelayState,
            useDynamicToolNamespaces: isDynamicToolProfileEnabled(props.featureFlags?.dynamicToolProfile),
            omitBuiltinToolNamesFromDescription: props.featureFlags?.deferUserInfoCatalogRerender === true,
            directToolRecoveryEnabled: props.featureFlags?.dynamicToolsDirectToolRecovery === true,
            steerReleaseReadOnlyTools: props.featureFlags?.mcpSteerReleaseReadOnlyTools === true,
            isMcpToolBlocked: subagentMcpToolBlock,
            ...mcpRemoteHookFields(props)
        });
    } else if (!dropCustomPromptContext && mcpFileSystemOptions?.enabled) {
        if (mcpFileSystemOptions.mcpDescriptors.length > 0) {
            tools.push(createCallMcpTool({
                resourceAccessor,
                mcpFileSystemOptions,
                allowInteractiveMcpAuth,
                agentType: props.agentType,
                requestContext: props.requestContext,
                smartModeClassifierMode: props.smartModeClassifierMode,
                smartModeClassifierShadowMode: props.smartModeClassifierShadowMode,
                devSmartModeClassifierBlockState,
                devSmartModeClassifierDelayState,
                isMcpToolBlocked: subagentMcpToolBlock,
                steerReleaseReadOnlyTools: props.featureFlags?.mcpSteerReleaseReadOnlyTools === true,
                ...mcpRemoteHookFields(props)
            }));
            tools.push(createFetchMcpResourceTool(resourceAccessor, {
                name: "FetchMcpResource",
                mcpMode: "file_system",
                agentType: props.agentType,
                requestContext: props.requestContext,
                smartModeClassifierMode: props.smartModeClassifierMode,
                smartModeClassifierShadowMode: props.smartModeClassifierShadowMode,
                devSmartModeClassifierBlockState,
                devSmartModeClassifierDelayState
            }));
        }
    } else if (!dropCustomPromptContext && props.enableMcp) {
        const candidateMcpTools = filteredMcpTools.filter((mcpTool)=>subagentMcpToolBlock?.({
                serverIdentifier: mcpTool.providerIdentifier,
                toolName: mcpTool.toolName
            }) !== true);
        const { tools: directMcpTools } = clampDirectMcpTools(candidateMcpTools, props.maxDirectMcpTools, props.loggingContext);
        for (const mcpTool of directMcpTools){
            tools.push(createMcpTool(resourceAccessor, mcpTool, {
                convertTupleSchemaToDraft2020_12: convertMcpTupleSchemas,
                ...mcpRemoteHookFields(props),
                configuredSteps: props.requestContext?.hooksConfig?.configuredSteps
            }));
        }
        tools.push(createListMcpResourcesTool(resourceAccessor));
        tools.push(createFetchMcpResourceTool(resourceAccessor, {
            agentType: props.agentType,
            requestContext: props.requestContext,
            smartModeClassifierMode: props.smartModeClassifierMode,
            smartModeClassifierShadowMode: props.smartModeClassifierShadowMode,
            devSmartModeClassifierBlockState,
            devSmartModeClassifierDelayState
        }));
    }
    if (props.switchModeToolConfig?.enabled) {
        tools.push(createSwitchModeTool({
            targetModes: resolveSwitchModeTargetModes(props.stateHandler, props.switchModeToolConfig.targetModes)
        }));
    }
    if (enableComputerUse) {
        const canvas = props.computerUseApiCanvas ?? {
            width: 1280,
            height: 800
        };
        tools.push(createAnthropicComputerTool({
            displayWidthPx: canvas.width,
            displayHeightPx: canvas.height,
            resourceAccessor,
            modelId: props.modelInfo.modelName
        }));
    }
    const toolSetHandle = finalizeToolSet(props, tools, dynamicToolRegistry);
    finalizedToolSet = toolSetHandle;
    const filteredToolSetHandle = shouldFilterCloudMetaAgentParentTools ? toolSetHandle.transformToolsInPlace((tools2)=>filterCloudMetaAgentParentTools(tools2)) : toolSetHandle;
    return shouldFilterToolsForCloudCodex ? filterToolSetForCodexCloud(filteredToolSetHandle) : filteredToolSetHandle;
};

}
