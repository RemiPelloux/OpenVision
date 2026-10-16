import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_attached_media } from "../attached-media.js";
import { init_platform_communication_tools } from "../automations/platform-communication-tools.js";
import { init_common11 } from "./common.js";
import { init_tool_config } from "./tool-config.js";
import { init_tool_set_finalization } from "./tool-set-finalization.js";
import { init_claude_helpers } from "../prompts/claude-helpers.js";
import { init_cloud_meta_agent } from "../prompts/cloud-meta-agent/index.js";
import { init_cloud_environment_setup } from "../prompts/cloud/cloud-environment-setup.js";
import { init_dsv3_0226_system_prompt } from "../prompts/dsv3-0226-system-prompt.js";
import { init_dsv3_1018_system_prompt } from "../prompts/dsv3-1018-system-prompt.js";
import { init_dsv3_1205_system_prompt } from "../prompts/dsv3-1205-system-prompt.js";
import { init_dsv30226_cloud_testing_prompt } from "../prompts/dsv30226-cloud-testing-prompt.js";
import { init_host_environment } from "../prompts/host-environment.js";
import { init_shared2 } from "../prompts/shared.js";
import { init_slack_prompt_flags } from "../prompts/slack-prompt-flags.js";
import { init_ui_browser_verification } from "../prompts/ui-browser-verification.js";
import { createReportBugfixResultsTool } from "../tools/bugbot/autofix-result/report-bugfix-results.js";
import { createRecordScreenTool } from "../tools/cloud-agents/record-screen/record-screen.js";
import { createReflectGeneralTool } from "../tools/cloud-agents/reflect-general.js";
import { createReplaceEnvTool } from "../tools/cloud-agents/replace-env/replace-env.js";
import { createSetupVmEnvironmentTool } from "../tools/cloud-agents/setup-vm-environment/setup-vm-environment.js";
import { createAskQuestionTool } from "../tools/core/ask-question/index.js";
import { createCreatePlanTool } from "../tools/core/create-plan/create-plan.js";
import { createDeleteTool } from "../tools/core/delete.js";
import { createEditNotebookTool } from "../tools/core/edit/edit-notebook.js";
import { createStrReplaceTool } from "../tools/core/edit/str-replace.js";
import { createWriteTool } from "../tools/core/edit/write.js";
import { createGenerateImageTool } from "../tools/core/generate-image.js";
import { createGlobTool } from "../tools/core/glob/glob.js";
import { createLsTool } from "../tools/core/ls/ls.js";
import { createMockReadLintsTool } from "../tools/core/mock-read-lints.js";
import { createReadLintsTool } from "../tools/core/read-lints.js";
import { createReadTool } from "../tools/core/read/read.js";
import { createRecordCiInvestigationFindingsTool } from "../tools/core/record-ci-investigation-findings.js";
import { createSearchConversationsTool } from "../tools/core/search-conversations/search-conversations.js";
import { createSemanticSearchTool, init_semantic_search } from "../tools/core/semantic-search/semantic-search.js";
import { createShellTool } from "../tools/core/shell/shell.js";
import { init_ci_investigator_subagent } from "../tools/core/subagent/ci-investigator-subagent.js";
import { createSwitchModeTool } from "../tools/core/switch-mode.js";
import { createUpdateTodosTool } from "../tools/core/todo/todo.js";
import { createWebFetchTool } from "../tools/core/web-fetch/web-fetch.js";
import { createWebSearchTool } from "../tools/core/web-search.js";
import { createXSearchTool } from "../tools/core/x-search.js";
import { init_dev_smart_mode_classifier_block } from "../tools/dev-smart-mode-classifier-block.js";
import { init_exclude_tools } from "../tools/exclude-tools.js";
import { init_tools } from "../tools/index.js";
import { DynamicToolRegistry, init_builtin_tools } from "../tools/mcp/builtin-tools.js";
import { init_clamp_direct_mcp_tools } from "../tools/mcp/clamp-direct-mcp-tools.js";
import { createFetchMcpResourceTool } from "../tools/mcp/fetch-mcp-resource.js";
import { createGetMcpToolsTool } from "../tools/mcp/get-mcp-tools.js";
import { createListMcpResourcesTool } from "../tools/mcp/list-mcp-resources.js";
import { createCallMcpTool, createMcpTool } from "../tools/mcp/mcp.js";
import { createSendMessageTool } from "../tools/meta/send-message.js";
import { createConnectScmTool } from "../tools/scm/connect-scm.js";
import { createSetActiveBranchTool } from "../tools/set-active-branch.js";
import { init_subagent_model_force_policy } from "../tools/subagent-model-force-policy.js";
import { createTaskTool } from "../tools/task.js";
import { AgentType, init_agent_config } from "../utils/agent-config.js";
import { init_environment_setup_source } from "../utils/environment-setup-source.js";
import { init_mcp_file_system } from "../utils/mcp-file-system.js";
import { init_request_id } from "../utils/request-id.js";
import { ENV_SETUP_TMUX_SESSION_NAME } from "../../../constants/dist/cloud-agent.js";
import { init_dist2 } from "../../../constants/dist/index.js";
import { init_dist } from "../../../context/dist/index.js";
import { Dsv3Agent1018SharedPrefix, EnvironmentSetupSpecificInstructions, HostEnvironmentInstructions, NamedAgentHomeSystemPrompt, NamedAgentSessionInstructions, SlackV1_5MessagingSection, buildSubagentConfigs, createAnthropicComputerTool, createAwaitTool, createDevSmartModeClassifierBlockState, createDevSmartModeClassifierDelayState, createGenerateVideoTool, createGoalTools, createImageGenerationConcurrencyLimiter, forgeCliReposFromSessionRemoteUrls, getDsv3McpFileSystemInstructions, getDsv3McpFileSystemToolNames, getInlineVideoMaxBytes, getNamedAgentSessionPromptContext, getSignedUrlVideoMaxBytes, isDynamicToolProfileEnabled, isEnvironmentSetupBackgroundComposerSource, isForcedSubagentModelBlocked, isNamedAgentHomePromptSession, isRequestBasedComposerForceUnavailable, isSlackV1_5ThreadBoundSession, isSubagentExcludedCommunicationMcpTool, renderContent, resolveConversationStartedDate, resolveEffectiveMcpMetaToolOptions, resolveSwitchModeTargetModes, shouldAllowInteractiveMcpAuth, shouldEnableJobCompletionNotifications, shouldEnableJobProgressNotifications, shouldEnableReadLintsTool, shouldEnableWebFetchTool, shouldEnableWebSearchTool, shouldIncludeSearchConversationsTool, shouldIncludeSendMessageTool, shouldIncludeWatchVideoSubagent, shouldInjectUiBrowserVerificationPrompt, shouldPreferRedactedReadTool, slackV1_5PromptFlags } from "../../../mcp_sandbox_policy_exports.js";
import { init_dist32 } from "../../../prompt-jsx/dist/index.js";
import { AgentMode, init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
import { CustomSubagentPermissionMode, init_subagents_pb } from "../../../proto/dist/generated/agent/v1/subagents_pb.js";
import { BackgroundComposerSource, init_background_composer_pb } from "../../../proto/dist/generated/aiserver/v1/background_composer_pb.js";
import { BackgroundAgentInstructionsDsv31205, BackgroundAgentSecurityInstructionsDsv3, Dsv3Agent0226SharedPrefix, Dsv3Agent1205SharedPrefix, clampDirectMcpTools, createDsv3GrepTool, createGlassMetaParentToolSet, extractSandboxNetworkInfo, finalizeToolSet, isCiInvestigatorSubagent2, mcpRemoteHookFields, normalizeMcpToolName2, renderDsv30226CloudTestingPromptAppendix, shouldDisableTerminalOutputUiStreaming2, shouldIncludeCliReflectGeneralTool2, shouldIncludeConnectScmTool2, shouldIncludeTaskToolForSubagentDepth2, shouldPreserveTaskToolForNestedSubagents2, shouldUseGlassMetaParentAgentMode2, truncateMcpToolName2 } from "../../../tree_chunk_napi_exports.js";
var import_node_crypto44, logger105, MAX_TOOL_NAME_LENGTH2, HASH_SUFFIX_LENGTH2, DSV3_GET_MCP_TOOLS_TOOL_NAME, DSV3_CALL_MCP_TOOL_NAME, DSV3_GET_DYNAMIC_TOOLS_TOOL_NAME, DSV3_CALL_DYNAMIC_TOOL_NAME, DSV3_FETCH_MCP_RESOURCE_TOOL_NAME, dsv31018ToolsGenerator, getDsv3SlackMcpToolNames, DSV3_1018_DEFAULT_SYSTEM_PROMPT, dsv31018SystemPromptGenerator;
export { DSV3_1018_DEFAULT_SYSTEM_PROMPT, DSV3_CALL_DYNAMIC_TOOL_NAME, DSV3_CALL_MCP_TOOL_NAME, DSV3_FETCH_MCP_RESOURCE_TOOL_NAME, DSV3_GET_DYNAMIC_TOOLS_TOOL_NAME, DSV3_GET_MCP_TOOLS_TOOL_NAME, HASH_SUFFIX_LENGTH2, MAX_TOOL_NAME_LENGTH2, dsv31018SystemPromptGenerator, dsv31018ToolsGenerator, getDsv3SlackMcpToolNames, import_node_crypto44, logger105 };
var __wakaru_init_dsv31018_initialized = false;
export function init_dsv31018() {
if (__wakaru_init_dsv31018_initialized) return;
__wakaru_init_dsv31018_initialized = true;
"use strict";
import_node_crypto44 = require("node:crypto");
init_dist2();
init_dist();
init_dist32();
init_agent_pb();
init_subagents_pb();
init_background_composer_pb();
init_attached_media();
init_platform_communication_tools();
init_claude_helpers();
init_cloud_environment_setup();
init_cloud_meta_agent();
init_dsv3_0226_system_prompt();
init_dsv3_1018_system_prompt();
init_dsv3_1205_system_prompt();
init_dsv30226_cloud_testing_prompt();
init_host_environment();
init_shared2();
init_slack_prompt_flags();
init_ui_browser_verification();
init_semantic_search();
init_ci_investigator_subagent();
init_dev_smart_mode_classifier_block();
init_exclude_tools();
init_tools();
init_builtin_tools();
init_clamp_direct_mcp_tools();
init_subagent_model_force_policy();
init_agent_config();
init_environment_setup_source();
init_mcp_file_system();
init_request_id();
init_common11();
init_tool_config();
init_tool_set_finalization();
logger105 = createLogger("@anysphere/agent:dsv31018");
MAX_TOOL_NAME_LENGTH2 = 64;
HASH_SUFFIX_LENGTH2 = 7;
DSV3_GET_MCP_TOOLS_TOOL_NAME = "GetMcpTools";
DSV3_CALL_MCP_TOOL_NAME = "CallMcpTool";
DSV3_GET_DYNAMIC_TOOLS_TOOL_NAME = "GetDynamicTools";
DSV3_CALL_DYNAMIC_TOOL_NAME = "CallDynamicTool";
DSV3_FETCH_MCP_RESOURCE_TOOL_NAME = "FetchMcpResource";
dsv31018ToolsGenerator = (props)=>{
    if (shouldUseGlassMetaParentAgentMode2(props.featureFlags)) {
        if (props.taskToolProps === void 0 || props.modelInfo === void 0) {
            return finalizeToolSet(props, []);
        }
        return finalizeToolSet(props, createGlassMetaParentToolSet({
            resourceAccessor: props.resourceAccessor,
            stateHandler: props.stateHandler,
            featureFlags: props.featureFlags,
            modelInfo: props.modelInfo,
            taskToolProps: props.taskToolProps
        }).getStaticTools());
    }
    const { resourceAccessor, stateHandler, mcpTools, searchImplementation, repositoryInfos, mode, fileOperationLockManager, webSearch, generateImage, promptVersion } = props;
    const sharedTerminalEnvSetupEnabled = props.featureFlags?.sharedTerminalEnvSetup === true && isEnvironmentSetupBackgroundComposerSource(props.backgroundAgentSource);
    const enableJobProgressNotifications = promptVersion === "cursor-0226" && shouldEnableJobProgressNotifications(props.featureFlags, props.agentType);
    const devSmartModeClassifierBlockState = createDevSmartModeClassifierBlockState(props.requestContext);
    const devSmartModeClassifierDelayState = createDevSmartModeClassifierDelayState(props.requestContext);
    const formattingOptions = {
        shouldUseFormatCodeblock: true,
        gpt5StyleLineNumbers: false,
        gpt5CodexCatN: false,
        enableLineNumbers: props.enableLineNumbers,
        sparseLineNumbers: props.sparseLineNumbers
    };
    const preferRedactedRead = shouldPreferRedactedReadTool(props.requestContext);
    const isRawMatterhorn = props.modelInfo?.isComposerMatterhorn === true && props.modelInfo?.isRawTrainingSlug === true;
    const isAskMode = mode === AgentMode.ASK;
    const enableFilterEditToolsInAskMode = props.enableFilterEditToolsInAskMode ?? true;
    const shouldFilterEditToolsInAskMode = isAskMode && enableFilterEditToolsInAskMode;
    const shouldRestrictEditTools = props.agentType === AgentType.BACKGROUND && props.backgroundAgentSource === BackgroundComposerSource.GRAPHITE_CHAT_WEB;
    let finalizedToolSet;
    const tools = [];
    if (shouldIncludeCliReflectGeneralTool2(props)) {
        tools.push(createReflectGeneralTool(props.featureFlags?.cliReflectGeneralConfig));
    }
    if (props.enableSemanticSearch && repositoryInfos.length > 0) {
        tools.push(createSemanticSearchTool(resourceAccessor, searchImplementation, promptVersion, formattingOptions, props.enableSemanticSearchNumResults ?? false ? {
            enabled: true,
            required: props.requireSemanticSearchNumResults ?? false,
            topK: 25
        } : void 0, {
            preferRedactedRead
        }));
    }
    const sandboxEnabled = props.sandboxSupported && (props.requestContext?.env?.sandboxEnabled ?? false);
    const sandboxPromptEnabled = (props.sandboxPromptEnabled ?? props.sandboxSupported) && (props.requestContext?.env?.sandboxEnabled ?? false);
    const shouldUseSandbox = props.sandboxSupported && shouldFilterEditToolsInAskMode;
    if (!shouldFilterEditToolsInAskMode || shouldUseSandbox) {
        const enableCoAuthoredByTrailer = (()=>{
            const featureFlagEnabled = props.featureFlags?.enableCoAuthoredByTrailer === true;
            const isCliOrIde = props.agentType === AgentType.CLI || props.agentType === AgentType.IDE;
            const hasCommitAttributionMessage = !!props.requestContext?.commitAttributionMessage;
            return featureFlagEnabled && isCliOrIde && hasCommitAttributionMessage;
        })();
        const enablePRGeneratedByFooter = (()=>{
            const featureFlagEnabled = props.featureFlags?.enableCoAuthoredByTrailer === true;
            const isCliOrIde = props.agentType === AgentType.CLI || props.agentType === AgentType.IDE;
            const hasPrAttributionMessage = !!props.requestContext?.prAttributionMessage;
            return featureFlagEnabled && isCliOrIde && hasPrAttributionMessage;
        })();
        tools.push(createShellTool(resourceAccessor, {
            enableTerminalFiles: props.enableTerminalFiles,
            fileOperationLockManager: promptVersion === "dsv3-1018" ? fileOperationLockManager : void 0,
            fileOutputThresholdBytes: props.enableTerminalFiles ? BigInt(4e4) : BigInt(0),
            terminalsFolder: props.requestContext?.env?.terminalsFolder,
            osVersion: props.requestContext?.env?.osVersion,
            disableTerminalOutputUiStreaming: shouldDisableTerminalOutputUiStreaming2(props),
            sandboxEnabled: sandboxEnabled || shouldUseSandbox,
            sandboxPromptEnabled: sandboxPromptEnabled || (props.sandboxPromptEnabled ?? props.sandboxSupported ?? false) && shouldUseSandbox,
            isReadonly: (isAskMode || shouldRestrictEditTools) && (props.enableReadonlyShell ?? props.featureFlags?.enableReadonlyShell ?? false),
            enableGithubTools: props.enableGithubTools,
            configTimeoutMs: props.terminalTimeoutMs,
            enableBlockUntilMs: props.enableShellBlockUntilMs !== void 0 ? props.enableShellBlockUntilMs : promptVersion === "cursor-0226" || promptVersion === "dsv3-1205" && props.featureFlags?.enableShellBlockUntilMsComposer === true,
            requireBlockUntilMs: props.requireShellBlockUntilMs,
            defaultBlockUntilMs: props.defaultShellBlockUntilMs,
            enableCloseStdin: props.featureFlags?.closeStdin,
            enableCoAuthoredByTrailer,
            enablePRGeneratedByFooter,
            shellType: props.requestContext?.env?.shell,
            agentType: props.agentType,
            enableSandboxSharedBuildCache: props.featureFlags?.enableSandboxSharedBuildCache,
            sandboxNetworkInfo: extractSandboxNetworkInfo(props.requestContext?.env),
            requestContext: props.requestContext,
            smartModeClassifierMode: props.smartModeClassifierMode,
            smartModeClassifierShadowMode: props.smartModeClassifierShadowMode,
            devSmartModeClassifierBlockState,
            devSmartModeClassifierDelayState,
            enableTmuxGuidance: props.agentType === AgentType.BACKGROUND && (props.featureFlags?.cloudAgentTmuxShellGuidance || sharedTerminalEnvSetupEnabled),
            tmuxSharedSessionName: sharedTerminalEnvSetupEnabled ? ENV_SETUP_TMUX_SESSION_NAME : void 0,
            tmuxSelfHostedMachine: props.featureFlags?.cloudAgentSelfHostedMachine === true,
            enableJobCompletionNotifications: shouldEnableJobCompletionNotifications(props.featureFlags),
            enableJobProgressNotifications,
            outputNotificationLimit: props.featureFlags?.outputNotificationLimit
        }, promptVersion));
    }
    if (props.featureFlags?.enableSetActiveBranch === true && !isRawMatterhorn && (props.requestContext?.env?.workspacePaths.length ?? 0) <= 1) {
        tools.push(createSetActiveBranchTool(resourceAccessor, stateHandler));
    }
    if (!isRawMatterhorn && shouldIncludeConnectScmTool2(props)) {
        tools.push(createConnectScmTool());
    }
    if (props.featureFlags?.enableGoalTools === true && props.subagentConfig === void 0 && !shouldRestrictEditTools) {
        const { createGoalTool, updateGoalTool } = createGoalTools(stateHandler, {
            agentSessionId: props.agentSessionId
        });
        tools.push(createGoalTool, updateGoalTool);
    }
    if ((props.featureFlags?.enableCiInvestigatorSubagent ?? false) && (props.agentType === AgentType.BACKGROUND || props.agentType === AgentType.IDE) && isCiInvestigatorSubagent2(props)) {
        tools.push(createRecordCiInvestigationFindingsTool());
    }
    if (props.enableGrepTool !== false) {
        tools.push(createDsv3GrepTool(resourceAccessor, promptVersion, props.featureFlags));
    }
    if (!shouldFilterEditToolsInAskMode && !shouldRestrictEditTools) {
        tools.push(createDeleteTool(resourceAccessor, fileOperationLockManager, stateHandler, promptVersion));
    }
    if (shouldEnableWebSearchTool(props.enableWebSearch, props.requestContext)) {
        tools.push(createWebSearchTool(webSearch, promptVersion, {
            resourceAccessor,
            projectFolder: props.requestContext?.env?.projectFolder,
            osPlatform: props.requestContext?.env?.osVersion?.split(" ")[0],
            conversationStartedDate: resolveConversationStartedDate(props.stateHandler, props.requestContext),
            variant: props.webSearchToolVariant
        }));
    }
    if (shouldIncludeSearchConversationsTool(props)) {
        tools.push(createSearchConversationsTool(resourceAccessor));
    }
    if (shouldIncludeSendMessageTool(stateHandler, props)) {
        tools.push(createSendMessageTool());
    }
    const webFetchAvailable = promptVersion === "cursor-0226" ? props.webFetchAvailable !== false : props.webFetchAvailable;
    const webFetchEnabledByUser = props.requestContext?.webFetchEnabled ?? true;
    if (props.webFetchService && shouldEnableWebFetchTool({
        webFetchAvailable,
        webFetchEnabledByUser
    })) {
        tools.push(createWebFetchTool(props.webFetchService, promptVersion, {
            resourceAccessor,
            agentType: props.agentType,
            requestContext: props.requestContext,
            smartModeClassifierMode: props.smartModeClassifierMode,
            smartModeClassifierShadowMode: props.smartModeClassifierShadowMode,
            devSmartModeClassifierBlockState,
            devSmartModeClassifierDelayState,
            projectFolder: props.requestContext?.env?.projectFolder,
            osPlatform: props.requestContext?.env?.osVersion?.split(" ")[0],
            stripCredentialedUrls: props.featureFlags?.stripCredentialedUrls === true
        }));
    }
    if (props.enableGenerateImage && !isRawMatterhorn) {
        const imageGenerationConcurrencyLimiter = props.imageGenerationConcurrencyLimiter ?? createImageGenerationConcurrencyLimiter(2);
        tools.push(createGenerateImageTool(resourceAccessor, generateImage, promptVersion, props.requestContext, imageGenerationConcurrencyLimiter, isAskMode || props.subagentConfig?.permissionMode === CustomSubagentPermissionMode.READONLY, props.generateImageSuspiciousKeywords, props.isGenerateImageModelRestricted));
    }
    if (props.generateVideo !== void 0 && !isRawMatterhorn) {
        tools.push(createGenerateVideoTool({
            ...props.generateVideo,
            resourceAccessor,
            promptVersion,
            requestContext: props.requestContext,
            isReadonly: isAskMode || props.subagentConfig?.permissionMode === CustomSubagentPermissionMode.READONLY
        }));
    }
    if (props.xSearch !== void 0 && !isRawMatterhorn && (props.requestContext?.webSearchEnabled ?? true)) {
        tools.push(createXSearchTool(props.xSearch, promptVersion));
    }
    if (props.enableRecordScreen) {
        tools.push(createRecordScreenTool(resourceAccessor, promptVersion));
    }
    if (props.enableSetupVmEnvironment) {
        tools.push(createSetupVmEnvironmentTool(resourceAccessor, promptVersion, {
            enableDockerfileContents: props.enableReplaceEnv
        }));
    }
    if (props.enableReplaceEnv) {
        tools.push(createReplaceEnvTool(resourceAccessor, promptVersion));
    }
    if (!shouldFilterEditToolsInAskMode) {
        if (shouldEnableReadLintsTool(props.enableReadLints, props.requestContext)) {
            tools.push(createReadLintsTool(resourceAccessor, promptVersion));
        } else {
            tools.push(createMockReadLintsTool(resourceAccessor, promptVersion));
        }
        if (!shouldRestrictEditTools) {
            tools.push(createEditNotebookTool(resourceAccessor, formattingOptions, fileOperationLockManager, stateHandler, promptVersion, props.modelInfo, props.featureFlags));
        }
        tools.push(createUpdateTodosTool(resourceAccessor, stateHandler, promptVersion));
        if (!shouldRestrictEditTools) {
            tools.push(createStrReplaceTool(resourceAccessor, formattingOptions, fileOperationLockManager, stateHandler, promptVersion, props.modelInfo, props.featureFlags));
            tools.push(createWriteTool(resourceAccessor, fileOperationLockManager, stateHandler, promptVersion, props.modelInfo, props.featureFlags));
        }
    }
    tools.push(createReadTool(resourceAccessor, formattingOptions, promptVersion, {
        preferRedactedRead,
        fileOperationLockManager
    }));
    tools.push(createGlobTool(resourceAccessor, promptVersion));
    if (props.enableDeprecatedLsTool ?? false) {
        tools.push(createLsTool(resourceAccessor, promptVersion));
    }
    if (props.enableAskQuestionTool && (!isRawMatterhorn || mode === AgentMode.PLAN)) {
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
            modelInfo: props.modelInfo,
            useNewPlanModePrompts: props.featureFlags?.useNewPlanModePrompts,
            requestContext: props.requestContext,
            askQuestionToolName: props.askQuestionToolName
        }));
    }
    const taskToolProps = props.taskToolProps;
    if (taskToolProps && !isRawMatterhorn) {
        const isForcedModelBlocked = isForcedSubagentModelBlocked(taskToolProps.subagentModelForcePolicy, taskToolProps.forceModelId, taskToolProps.isModelBlocked);
        const isForcedComposerUnavailable = isRequestBasedComposerForceUnavailable(taskToolProps.subagentModelForcePolicy, taskToolProps.forceModelId);
        if (!isForcedModelBlocked && !isForcedComposerUnavailable && shouldIncludeTaskToolForSubagentDepth2(props, "dsv31018")) {
            const rawCustomSubagentsDsv3 = props.requestContext?.customSubagents ?? [];
            const customSubagents = taskToolProps.normalizeCustomSubagents(rawCustomSubagentsDsv3);
            const includeExploreSubagent = taskToolProps.enableExploreSubagent ?? false;
            const includeShellSubagent = taskToolProps.enableShellSubagent ?? false;
            const includeDebugSubagent = taskToolProps.enableDebugSubagent ?? false;
            const includePastConversationExplorerSubagent = props.featureFlags?.enablePastConversationExplorerSubagent ?? false;
            const includeCiInvestigatorSubagent = props.featureFlags?.enableCiInvestigatorSubagent ?? false;
            const includeBugbotSubagent = props.featureFlags?.enableBugbotSubagent ?? false;
            const bugbotSupportsNaturalLanguage = props.featureFlags?.enableReviewAgentNaturalLanguageDescription ?? false;
            const bugbotEnableProactiveReview = props.featureFlags?.enableProactiveBugbotReviewSubagent ?? false;
            const includeSecurityReviewSubagent = props.featureFlags?.enableSecurityReviewSubagent ?? false;
            const includeFsdSubagent = props.featureFlags?.enableFsdSubagent ?? false;
            const subagentConfigs = buildSubagentConfigs({
                customSubagents,
                enableNestedSubagents: shouldPreserveTaskToolForNestedSubagents2(props.featureFlags, taskToolProps.requireServerSideSubagent),
                includeComputerUseSubagent: props.enableComputerUseSubagent ?? false,
                includeWatchVideoSubagent: shouldIncludeWatchVideoSubagent({
                    agentType: props.agentType,
                    backgroundAgentSource: props.backgroundAgentSource,
                    featureFlags: props.featureFlags
                }),
                includeExploreSubagent,
                includeShellSubagent,
                includeDebugSubagent,
                includeBrowserUseSubagent: false,
                includeVmSetupHelperSubagent: props.enableSetupVmEnvironment ?? false,
                includePastConversationExplorerSubagent,
                computerUseSubagentOverrides: props.computerUseSubagentOverrides,
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
            const readonlyShellEnabled = (props.enableReadonlyShell ?? props.featureFlags?.enableReadonlyShell ?? false) && (props.requestContext?.env?.sandboxEnabled ?? false);
            tools.push(createTaskTool(resourceAccessor, taskToolProps.getTaskToolConfig, taskToolProps.modelInfo, stateHandler, subagentConfigs, {
                parentRequestedModelName: taskToolProps.parentRequestedModelName,
                parentModelParameters: taskToolProps.parentModelParameters,
                parentMaxMode: taskToolProps.parentMaxMode,
                forceModelId: taskToolProps.forceModelId,
                compareModelCosts: taskToolProps.compareModelCosts,
                requiresMaxMode: taskToolProps.requiresMaxMode,
                subagentModelForcePolicy: taskToolProps.subagentModelForcePolicy,
                requireServerSideSubagent: taskToolProps.requireServerSideSubagent,
                readonlyShellEnabled,
                allowCustomModelId: false,
                includeExploreSubagent,
                enableExecuteHookExec: taskToolProps.enableExecuteHookExec,
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
                isModelBlocked: taskToolProps.isModelBlocked,
                isModelValid: taskToolProps.isModelValid,
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
    if (props.enableAwaitTool === true) {
        const canUseClientSideSubagentForTaskTool = props.enableSubagentAwaiting ?? (props.featureFlags?.useClientSideSubagent === true && props.taskToolProps?.requireServerSideSubagent !== true);
        const enableAwaitForSubagentsDsv3 = props.enableAwaitForSubagents ?? props.featureFlags?.enableAwaitForSubagents !== false;
        const hasShellOrTaskTool = tools.some((tool)=>tool.toolIdentifier === "SHELL" || tool.toolIdentifier === "TASK");
        if (hasShellOrTaskTool) {
            tools.push(createAwaitTool(resourceAccessor, {
                terminalsFolder: props.requestContext?.env?.terminalsFolder,
                agentTranscriptsFolder: props.agentType === AgentType.BACKGROUND ? void 0 : props.requestContext?.env?.agentTranscriptsFolder,
                defaultModelId: props.modelInfo?.modelName,
                defaultBlockUntilMs: props.defaultAwaitBlockUntilMs,
                requireBlockUntilMs: props.requireAwaitBlockUntilMs,
                enableAwaitTerminalPathCompat: promptVersion === "cursor-0226",
                enableSubagentAwaiting: canUseClientSideSubagentForTaskTool,
                enableAwaitForSubagents: enableAwaitForSubagentsDsv3,
                fixClaudeSubagentAwait: props.featureFlags?.fixClaudeSubagentAwait === true,
                enableBoundedSubagentAwait: canUseClientSideSubagentForTaskTool && props.featureFlags?.enableBoundedSubagentAwait === true,
                promptCacheTTLMs: props.estimatedCacheTTLMs,
                enableJobCompletionNotifications: shouldEnableJobCompletionNotifications(props.featureFlags),
                useTrainingShellOnlyPrompt: props.useRlHarness === true || props.enableSubagentAwaiting === false
            }, promptVersion));
        }
    }
    const dropCustomPromptContext = props.featureFlags?.dropCustomPromptContext === true;
    let dynamicToolRegistry;
    if (!shouldFilterEditToolsInAskMode && !dropCustomPromptContext) {
        const mcpFileSystemOptions = props.requestContext?.mcpFileSystemOptions ?? props.mcpFileSystemOptions;
        const useDynamicToolNamespaces = isDynamicToolProfileEnabled(props.featureFlags?.dynamicToolProfile);
        const getToolsName = useDynamicToolNamespaces ? DSV3_GET_DYNAMIC_TOOLS_TOOL_NAME : DSV3_GET_MCP_TOOLS_TOOL_NAME;
        const callToolName = useDynamicToolNamespaces ? DSV3_CALL_DYNAMIC_TOOL_NAME : DSV3_CALL_MCP_TOOL_NAME;
        const mcpMetaToolOptions = resolveEffectiveMcpMetaToolOptions({
            mcpMetaToolOptions: props.requestContext?.mcpMetaToolOptions,
            mcpTools,
            mcpDirectMode: props.mcpDirectMode,
            mcpMetaToolFallback: props.featureFlags?.mcpMetaToolFallback,
            enableMcp: props.enableMcp,
            mcpFileSystemModeActive: mcpFileSystemOptions?.enabled === true && props.featureFlags?.enableMCPFileSystem === true,
            instructionToolNames: {
                discoveryToolName: getToolsName,
                invocationToolName: callToolName,
                useDynamicToolNamespaces
            }
        });
        const allowInteractiveMcpAuth = shouldAllowInteractiveMcpAuth(props);
        const mcpFileSystemToolNames = getDsv3McpFileSystemToolNames(props.modelInfo);
        const subagentMcpToolBlock = props.subagentConfig !== void 0 ? isSubagentExcludedCommunicationMcpTool : void 0;
        if (mcpMetaToolOptions?.enabled === true && !isRawMatterhorn) {
            dynamicToolRegistry = useDynamicToolNamespaces ? new DynamicToolRegistry({
                directToolRecoveryEnabled: props.featureFlags?.dynamicToolsDirectToolRecovery === true
            }) : void 0;
            tools.push(createGetMcpToolsTool(mcpMetaToolOptions, {
                resourceAccessor,
                projectDir: mcpFileSystemOptions?.workspaceProjectDir,
                toolName: getToolsName,
                callMcpToolName: callToolName,
                allowInteractiveMcpAuth,
                dynamicToolRegistry,
                omitBuiltinToolNamesFromDescription: props.featureFlags?.deferUserInfoCatalogRerender === true,
                isMcpToolBlocked: subagentMcpToolBlock
            }));
            tools.push(createCallMcpTool({
                resourceAccessor,
                name: callToolName,
                mcpMetaToolOptions,
                validateMcpToolDescriptors: props.validateMcpToolDescriptors,
                getMcpToolsToolName: getToolsName,
                allowInteractiveMcpAuth,
                agentType: props.agentType,
                requestContext: props.requestContext,
                smartModeClassifierMode: props.smartModeClassifierMode,
                smartModeClassifierShadowMode: props.smartModeClassifierShadowMode,
                devSmartModeClassifierBlockState,
                devSmartModeClassifierDelayState,
                dynamicToolRegistry,
                isMcpToolBlocked: subagentMcpToolBlock,
                steerReleaseReadOnlyTools: props.featureFlags?.mcpSteerReleaseReadOnlyTools === true,
                ...mcpRemoteHookFields(props)
            }));
            tools.push(createFetchMcpResourceTool(resourceAccessor, {
                name: DSV3_FETCH_MCP_RESOURCE_TOOL_NAME,
                mcpMode: "meta_tool",
                agentType: props.agentType,
                requestContext: props.requestContext,
                smartModeClassifierMode: props.smartModeClassifierMode,
                smartModeClassifierShadowMode: props.smartModeClassifierShadowMode,
                devSmartModeClassifierBlockState,
                devSmartModeClassifierDelayState
            }));
        } else if (mcpFileSystemOptions?.enabled && props.featureFlags?.enableMCPFileSystem && !isRawMatterhorn) {
            if (mcpFileSystemOptions.mcpDescriptors.length > 0) {
                tools.push(createCallMcpTool({
                    resourceAccessor,
                    name: mcpFileSystemToolNames.callMcpTool,
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
                    name: mcpFileSystemToolNames.fetchMcpResource,
                    mcpMode: "file_system",
                    agentType: props.agentType,
                    requestContext: props.requestContext,
                    smartModeClassifierMode: props.smartModeClassifierMode,
                    smartModeClassifierShadowMode: props.smartModeClassifierShadowMode,
                    devSmartModeClassifierBlockState,
                    devSmartModeClassifierDelayState
                }));
            }
        } else if (props.enableMcp && !isRawMatterhorn) {
            if (promptVersion !== "cursor-0226" || !props.isEvalContext) {
                tools.push(createListMcpResourcesTool(resourceAccessor, mcpFileSystemToolNames.listMcpResources));
                tools.push(createFetchMcpResourceTool(resourceAccessor, {
                    name: mcpFileSystemToolNames.fetchMcpResource,
                    agentType: props.agentType,
                    requestContext: props.requestContext,
                    smartModeClassifierMode: props.smartModeClassifierMode,
                    smartModeClassifierShadowMode: props.smartModeClassifierShadowMode,
                    devSmartModeClassifierBlockState,
                    devSmartModeClassifierDelayState
                }));
            }
            const { tools: directMcpTools } = clampDirectMcpTools(mcpTools.filter((mcpTool)=>subagentMcpToolBlock?.({
                    serverIdentifier: mcpTool.providerIdentifier,
                    toolName: mcpTool.toolName
                }) !== true), props.maxDirectMcpTools, props.loggingContext);
            for (const mcpTool of directMcpTools){
                tools.push(createMcpTool(resourceAccessor, mcpTool, {
                    name: truncateMcpToolName2(`mcp_${normalizeMcpToolName2(mcpTool.providerIdentifier)}_${normalizeMcpToolName2(mcpTool.toolName)}`),
                    ...mcpRemoteHookFields(props),
                    configuredSteps: props.requestContext?.hooksConfig?.configuredSteps
                }));
            }
        }
    }
    if (props.switchModeToolConfig?.enabled && !isRawMatterhorn) {
        tools.push(createSwitchModeTool({
            targetModes: resolveSwitchModeTargetModes(props.stateHandler, props.switchModeToolConfig.targetModes)
        }));
    }
    const isBugbotAutofix = props.agentType === AgentType.BACKGROUND && props.backgroundAgentSource === BackgroundComposerSource.BUGBOT_AUTOFIX;
    if (isBugbotAutofix) {
        tools.push(createReportBugfixResultsTool(resourceAccessor, promptVersion));
    }
    if (props.enableComputerUse) {
        const canvas = props.computerUseApiCanvas ?? {
            width: 1280,
            height: 800
        };
        tools.push(createAnthropicComputerTool({
            displayWidthPx: canvas.width,
            displayHeightPx: canvas.height,
            resourceAccessor,
            modelId: props.modelInfo?.modelName
        }));
    }
    finalizedToolSet = finalizeToolSet(props, tools, dynamicToolRegistry);
    return finalizedToolSet;
};
getDsv3SlackMcpToolNames = (toolSetHandle)=>{
    const getMcpTools = toolSetHandle.getStaticTool("GET_MCP_TOOLS")?.name;
    const callMcpTool = toolSetHandle.getStaticTool("MCP")?.name;
    return getMcpTools !== void 0 && callMcpTool !== void 0 ? {
        getMcpTools,
        callMcpTool
    } : void 0;
};
DSV3_1018_DEFAULT_SYSTEM_PROMPT = (props, toolSetHandle)=>{
    const is1205Series = props.promptVersion === "dsv3-1205";
    const isSlackV1_5Thread = isSlackV1_5ThreadBoundSession(props);
    const slackFlags = slackV1_5PromptFlags(props.featureFlags, props.namedAgentSessionKind);
    const isDsv30226OrMatterhorn = props.promptVersion === "cursor-0226";
    const omitCloudWorkerProcedure = props.omitCloudWorkerProcedure === true;
    const useProjectCoordinatorPrompting = props.useProjectCoordinatorPrompting === true;
    const backgroundAgentSourceForWorkerProcedure = omitCloudWorkerProcedure ? void 0 : props.backgroundAgentSource;
    const omittedWorkerProcedureBlock = props.backgroundAgentSource === void 0 ? "" : useProjectCoordinatorPrompting ? `

${renderContent(HostEnvironmentInstructions({
        workspacePaths: props.env?.workspacePaths ?? []
    }))}
` : omitCloudWorkerProcedure ? BackgroundAgentSecurityInstructionsDsv3() : "";
    const forgeCliRepos = forgeCliReposFromSessionRemoteUrls(props.sessionRemoteUrls);
    const isGhCliWriteEnabled = props.featureFlags?.cloudAgentGhCliReadWrite === true;
    const isSelfHostedMachine = props.featureFlags?.cloudAgentSelfHostedMachine === true;
    const isSelfHostedMyMachine = props.featureFlags?.cloudAgentSelfHostedMyMachine === true;
    const dsv30226IntelligentAppendix = isDsv30226OrMatterhorn && !omitCloudWorkerProcedure ? renderDsv30226CloudTestingPromptAppendix(props, {
        slackMcpToolNames: getDsv3SlackMcpToolNames(toolSetHandle),
        toolSetHandle
    }) : "";
    const legacyPersona = props.persona === "grok" || props.persona === "grok-4.5" || props.persona === "grok-4.6" || props.persona === "grok-4.7" ? "composer" : props.persona;
    const basePrompt = isDsv30226OrMatterhorn ? Dsv3Agent0226SharedPrefix({
        agentType: props.agentType,
        persona: props.persona,
        communicationStyle: props.communicationStyle ?? (props.modelInfo?.isComposerMatterhorn === true ? "simple" : void 0),
        isThinking: props.isThinking,
        useCommunicationV2: props.featureFlags?.enableDsv30226CommunicationV2 === true,
        useGrok46CommunicationV2: props.featureFlags?.useGrok46CommunicationV2 === true,
        includeBrowserVerification: shouldInjectUiBrowserVerificationPrompt(props.modelInfo)
    }) + (backgroundAgentSourceForWorkerProcedure !== void 0 ? `
${BackgroundAgentInstructionsDsv31205(backgroundAgentSourceForWorkerProcedure, {
        slimBeforeIntelligentTestingAppendix: dsv30226IntelligentAppendix.length > 0,
        includeBackgroundSetupStatusGuidance: props.featureFlags?.cloudAgentAsyncInstallStatusPromptFix === true,
        includeStartScriptStatusGuidance: props.featureFlags?.cloudAgentStartScriptStatusPrompt === true,
        slackPeerUsersCanInstruct: props.slackPeerUsersCanInstruct === true,
        slackThreadRepliesAsFollowups: slackFlags.threadRepliesAsFollowups,
        isRepoless: props.isRepoless === true,
        repolessPromptVariant: props.repolessPromptVariant,
        isSlackV1_5ThreadBound: isSlackV1_5Thread,
        forgeCliRepos,
        isGhCliWriteEnabled,
        isSelfHostedMachine,
        isSelfHostedMyMachine
    })}
` : "") + dsv30226IntelligentAppendix : is1205Series ? Dsv3Agent1205SharedPrefix({
        agentType: props.agentType,
        persona: legacyPersona,
        isRewriteModel: props.isRewriteModel,
        backgroundAgentSource: backgroundAgentSourceForWorkerProcedure,
        isThinking: props.isThinking,
        enableTerminalFiles: props.enableTerminalFiles,
        switchModeToolConfig: props.switchModeToolConfig,
        isComposer15: props.modelInfo?.isComposer15,
        includeBackgroundSetupStatusGuidance: props.featureFlags?.cloudAgentAsyncInstallStatusPromptFix === true,
        includeStartScriptStatusGuidance: props.featureFlags?.cloudAgentStartScriptStatusPrompt === true,
        slackPeerUsersCanInstruct: props.slackPeerUsersCanInstruct === true,
        slackThreadRepliesAsFollowups: slackFlags.threadRepliesAsFollowups,
        isRepoless: props.isRepoless === true,
        repolessPromptVariant: props.repolessPromptVariant,
        isSlackV1_5ThreadBound: isSlackV1_5Thread,
        forgeCliRepos,
        isGhCliWriteEnabled,
        isSelfHostedMachine,
        isSelfHostedMyMachine
    }) : Dsv3Agent1018SharedPrefix({
        agentType: props.agentType,
        persona: legacyPersona,
        isRewriteModel: props.isRewriteModel,
        backgroundAgentSource: backgroundAgentSourceForWorkerProcedure,
        isThinking: props.isThinking,
        switchModeToolConfig: props.switchModeToolConfig,
        includeBackgroundSetupStatusGuidance: props.featureFlags?.cloudAgentAsyncInstallStatusPromptFix === true,
        includeStartScriptStatusGuidance: props.featureFlags?.cloudAgentStartScriptStatusPrompt === true,
        isRepoless: props.isRepoless === true,
        repolessPromptVariant: props.repolessPromptVariant,
        isSlackV1_5ThreadBound: isSlackV1_5Thread,
        isSelfHostedMyMachine
    });
    const mcpFileSystemOptions = props.requestContext?.mcpFileSystemOptions ?? props.mcpFileSystemOptions;
    const shouldFilterEditToolsInAskMode = props.mode === AgentMode.ASK && (props.enableFilterEditToolsInAskMode ?? true);
    const shouldShiftDsv3McpFilesInstructionsToUserMsg = props.featureFlags?.shiftDsv3McpFilesInstructionsToUserMsg === true;
    const disableMcpForRawMatterhorn = props.modelInfo?.isComposerMatterhorn === true && props.modelInfo?.isRawTrainingSlug === true;
    const mcpInstructions = getDsv3McpFileSystemInstructions({
        mode: props.mode,
        enableFilterEditToolsInAskMode: props.enableFilterEditToolsInAskMode,
        mcpFileSystemOptions: disableMcpForRawMatterhorn ? void 0 : mcpFileSystemOptions,
        mcpMetaToolOptions: disableMcpForRawMatterhorn ? void 0 : props.requestContext?.mcpMetaToolOptions,
        featureFlags: props.featureFlags,
        modelInfo: props.modelInfo
    });
    const mcpInstructionsBlock = !shouldShiftDsv3McpFilesInstructionsToUserMsg && mcpInstructions.length > 0 ? `

${mcpInstructions}` : "";
    const isEnvironmentSetup = isEnvironmentSetupBackgroundComposerSource(props.backgroundAgentSource);
    const generalizedEnvSetupEnabled = props.featureFlags?.generalizedEnvSetup === true;
    const sharedTerminalEnvSetupEnabled = isEnvironmentSetup && props.featureFlags?.sharedTerminalEnvSetup === true;
    const envSetupShellToolName = sharedTerminalEnvSetupEnabled ? toolSetHandle.getTool("SHELL")?.name : void 0;
    const envSetupBlock = isEnvironmentSetup && !omitCloudWorkerProcedure && !generalizedEnvSetupEnabled ? `

${renderContent(EnvironmentSetupSpecificInstructions({
        sharedTerminalShellToolName: envSetupShellToolName,
        cloudAgentEgressAllowlistButtonsEnabled: props.featureFlags?.cloudAgentEgressAllowlistButtons ?? false,
        cloudAgentEnvSetupWithDockerfilesEnabled: props.featureFlags?.cloudAgentEnvSetupWithDockerfiles ?? false
    }))}` : "";
    const slackMessagingBlock = isSlackV1_5Thread ? `

${renderContent(SlackV1_5MessagingSection({
        mcpToolNames: getDsv3SlackMcpToolNames(toolSetHandle),
        flags: slackFlags
    }))}` : "";
    return basePrompt + omittedWorkerProcedureBlock + mcpInstructionsBlock + envSetupBlock + slackMessagingBlock;
};
dsv31018SystemPromptGenerator = (props, toolSetHandle)=>{
    if (isNamedAgentHomePromptSession(props)) {
        return renderContent(NamedAgentHomeSystemPrompt({
            agentName: props.namedAgentName
        }));
    }
    const basePrompt = DSV3_1018_DEFAULT_SYSTEM_PROMPT(props, toolSetHandle);
    if (props.isCloudMetaAgentParent === true) {
        return basePrompt;
    }
    if (props.subagentType !== void 0) {
        return basePrompt;
    }
    const namedAgentSession = getNamedAgentSessionPromptContext(props);
    if (namedAgentSession === void 0) {
        return basePrompt;
    }
    const getMcpTools = toolSetHandle.getStaticTool("GET_MCP_TOOLS")?.name;
    const callMcpTool = toolSetHandle.getStaticTool("MCP")?.name;
    const mcpToolNames = getMcpTools !== void 0 && callMcpTool !== void 0 ? {
        getMcpTools,
        callMcpTool
    } : void 0;
    return `${basePrompt}

${renderContent(NamedAgentSessionInstructions({
        session: namedAgentSession,
        agentName: props.namedAgentName,
        isSlackV1_5: props.isSlackV1_5 === true,
        mcpToolNames
    }))}`;
};

}
