import { RedactedUpdates } from "../../../agent-core/dist/redacted-interaction-updates.js";
import { init_server } from "../../../agent-core/dist/server.js";
import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { shellStreamExecutorResource } from "../../../agent-exec/dist/shell-stream.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_common12 } from "./common.js";
import { init_meta_agent_notes } from "./meta-agent-notes.js";
import { init_common10 } from "../common.js";
import { init_project_workspace_mcp_tools } from "../configs/project-workspace-mcp-tools.js";
import { init_composer2_cloud_testing_sections } from "../prompts/composer2-cloud-testing-sections.js";
import { init_system } from "../prompts/system.js";
import { UserInfo, init_user_info } from "../prompts/user-info.js";
import { FileOperationLockManager, init_file_operation_lock_manager } from "../tools/core/file-operation-lock-manager.js";
import { init_formatters2 } from "../tools/core/shell/formatters.js";
import { init_mcp_meta_tool } from "../utils/mcp-meta-tool.js";
import { init_request_context4 } from "../utils/request-context.js";
import { init_dist } from "../../../context/dist/index.js";
import { buildRequestContextOptions, buildUserInfoAgentNotesProps, createRedactedShellArgs, createRedactedShellCommandParsingResult, createRedactedShellOutput, createRedactedShellStreamExit, createRedactedShellStreamStart, createRedactedShellStreamStderr, createRedactedShellStreamStdout, createRedactedString, extractToolInfo, formatShellResult, formatShellResultDsv3, fromRedactedShellArgs, getAllRules, getBrowserToolNames, getComposer2CloudTestingSectionsPlacement, getRequestContext, getUserInfoMcpMetaToolOptions, isProjectWorkspaceConversation, toRedactedCoreMessages, toRedactedShellStream } from "../../../mcp_sandbox_policy_exports.js";
import { AgentMode, init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_dist33 } from "../../../redacted-protos/dist/index.js";
import { DataClassification, PrivacyCapability } from "../../../redaction/dist/classification.js";
import { init_dist27 } from "../../../redaction/dist/index.js";
var logger80, ShellCommandActionHandler;
export { ShellCommandActionHandler, logger80 };
var __wakaru_init_shell_command_action_handler_initialized = false;
export function init_shell_command_action_handler() {
if (__wakaru_init_shell_command_action_handler_initialized) return;
__wakaru_init_shell_command_action_handler_initialized = true;
"use strict";
init_server();
init_dist8();
init_dist();
init_agent_pb();
init_dist33();
init_dist27();
init_common10();
init_project_workspace_mcp_tools();
init_composer2_cloud_testing_sections();
init_system();
init_user_info();
init_file_operation_lock_manager();
init_formatters2();
init_mcp_meta_tool();
init_request_context4();
init_common12();
init_meta_agent_notes();
logger80 = createLogger("@anysphere/agent/actions/shell-command-action-handler");
ShellCommandActionHandler = class {
    constructor(config2, resourceAccessor, interactionListener, summarizationHandler, conversationActionReceiver){
        this.config = config2;
        this.resourceAccessor = resourceAccessor;
        this.interactionListener = interactionListener;
        this.summarizationHandler = summarizationHandler;
        this.conversationActionReceiver = conversationActionReceiver;
    }
    async handle(ctx, action, rootPromptExecutor, stateHandler, mcpTools, _onStateUpdate) {
        const shellCommand = action.shellCommand;
        if (!shellCommand) {
            throw new Error("Shell command is required");
        }
        const command = shellCommand.command;
        const turn = await stateHandler.createShellTurn(ctx, shellCommand);
        let stdout = createRedactedString("", DataClassification.CODE, "stdout", action._privacyMode);
        let stderr = createRedactedString("", DataClassification.CODE, "stderr", action._privacyMode);
        let combinedOutput = createRedactedString("", DataClassification.CODE, "combinedOutput", action._privacyMode);
        let exitCode = 0;
        const shellExec = this.resourceAccessor.get(shellStreamExecutorResource);
        const args = createRedactedShellArgs(action._privacyMode, {
            command,
            parsingResult: createRedactedShellCommandParsingResult(action._privacyMode, {}),
            skipApproval: true
        });
        const result = shellExec.execute(ctx, fromRedactedShellArgs(args, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED), {
            execId: action.execId
        });
        const skipInteractionUpdates = !!action.execId;
        try {
            for await (const unredStream of result){
                const stream3 = toRedactedShellStream(unredStream, action._privacyMode);
                switch(stream3.event.case){
                    case "start":
                        if (!skipInteractionUpdates) {
                            await this.interactionListener.sendUpdate(ctx, RedactedUpdates.shellOutputDelta(stream3._privacyMode, {
                                case: "start",
                                value: createRedactedShellStreamStart(stream3._privacyMode, {
                                    sandboxPolicy: stream3.event.value.sandboxPolicy
                                })
                            }));
                        }
                        break;
                    case "stdout":
                        {
                            const unwrappedData = stream3.event.value.data.unwrap(PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
                            stdout = stdout.safeTransform((s3)=>s3 + unwrappedData);
                            combinedOutput = combinedOutput.safeTransform((s3)=>s3 + unwrappedData);
                            if (!skipInteractionUpdates) {
                                await this.interactionListener.sendUpdate(ctx, RedactedUpdates.shellOutputDelta(stream3._privacyMode, {
                                    case: "stdout",
                                    value: createRedactedShellStreamStdout(stream3._privacyMode, {
                                        data: stream3.event.value.data
                                    })
                                }));
                            }
                            break;
                        }
                    case "stderr":
                        {
                            const unwrappedData2 = stream3.event.value.data.unwrap(PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
                            stderr = stderr.safeTransform((s3)=>s3 + unwrappedData2);
                            combinedOutput = combinedOutput.safeTransform((s3)=>s3 + unwrappedData2);
                            if (!skipInteractionUpdates) {
                                await this.interactionListener.sendUpdate(ctx, RedactedUpdates.shellOutputDelta(stream3._privacyMode, {
                                    case: "stderr",
                                    value: createRedactedShellStreamStderr(stream3._privacyMode, {
                                        data: stream3.event.value.data
                                    })
                                }));
                            }
                            break;
                        }
                    case "exit":
                        exitCode = stream3.event.value.code | 0;
                        if (!skipInteractionUpdates) {
                            await this.interactionListener.sendUpdate(ctx, RedactedUpdates.shellOutputDelta(stream3._privacyMode, {
                                case: "exit",
                                value: createRedactedShellStreamExit(stream3._privacyMode, {
                                    code: stream3.event.value.code,
                                    aborted: stream3.event.value.aborted
                                })
                            }));
                        }
                        break;
                }
            }
        } catch (error3) {
            logger80.error(ctx, "Shell command action handler error", error3);
        }
        turn.recordShellOutput(createRedactedShellOutput(action._privacyMode, {
            stdout,
            stderr,
            exitCode
        }));
        const toolCallId = crypto.randomUUID();
        let text4 = `Run the following command: ${command.unwrap(PrivacyCapability.UNSAFE_ALWAYS_ALLOWED)}`;
        if (stateHandler.isDsv3()) {
            text4 = `<user_query>
${text4}
</user_query>`;
        }
        const userMessage = {
            role: "user",
            content: [
                {
                    type: "text",
                    text: text4
                }
            ]
        };
        const toolName = stateHandler.isDsv3() ? "run_terminal_cmd" : "Shell";
        const assistantMessage = {
            role: "assistant",
            content: [
                {
                    type: "tool-call",
                    toolCallId,
                    toolName,
                    args: {
                        command: command.unwrap(PrivacyCapability.UNSAFE_ALWAYS_ALLOWED)
                    }
                }
            ]
        };
        const toolCallResult2 = {
            role: "tool",
            id: toolCallId,
            content: [
                {
                    type: "tool-result",
                    toolCallId,
                    toolName,
                    result: stateHandler.isDsv3() ? formatShellResultDsv3({
                        combinedOutput: combinedOutput.unwrap(PrivacyCapability.UNSAFE_ALWAYS_ALLOWED),
                        exitCode,
                        command: command.unwrap(PrivacyCapability.UNSAFE_ALWAYS_ALLOWED)
                    }, command.unwrap(PrivacyCapability.UNSAFE_ALWAYS_ALLOWED)) : formatShellResult({
                        combinedOutput: combinedOutput.unwrap(PrivacyCapability.UNSAFE_ALWAYS_ALLOWED),
                        exitCode
                    })
                }
            ]
        };
        const needsToAddSystemPrompt = rootPromptExecutor.getMessages().length === 0;
        if (needsToAddSystemPrompt) {
            const requestContext = await getRequestContext(ctx, void 0, this.resourceAccessor, buildRequestContextOptions(this.config));
            const rules = getAllRules(requestContext, this.config.nonFileRules, this.config.featureFlags);
            const modeForPrompt = stateHandler.mode ?? AgentMode.AGENT;
            const toolSetHandle = this.config.toolsGenerator({
                resourceAccessor: this.resourceAccessor,
                stateHandler,
                agentSessionId: this.config.agentSessionId,
                mcpTools,
                repositoryInfos: requestContext.repositoryInfo,
                blobStore: stateHandler.getBlobStore(),
                mode: modeForPrompt,
                loggingContext: ctx,
                requestContext,
                fileOperationLockManager: new FileOperationLockManager(),
                smartModeClassifierMode: this.config.smartModeClassifierMode,
                smartModeClassifierShadowMode: this.config.smartModeClassifierShadowMode,
                autoRejectFirstAskQuestion: this.config.autoRejectFirstAskQuestion
            });
            rootPromptExecutor.appendMessages(toRedactedCoreMessages([
                {
                    role: "system",
                    content: this.config.systemPromptGenerator({
                        requestContext,
                        cursorRules: rules,
                        env: requestContext.env,
                        browserTools: getBrowserToolNames(mcpTools),
                        cloudRule: requestContext.cloudRule ?? void 0,
                        mode: modeForPrompt
                    }, toolSetHandle)
                }
            ], stateHandler.getPrivacyMode()));
            if (!this.config.userInfoDisplayOptions?.disable) {
                const isRootProject = await isProjectWorkspaceConversation(ctx, stateHandler);
                const userInfoCloudTestingSectionsPlacement = getComposer2CloudTestingSectionsPlacement({
                    modelInfo: this.config.modelInfo,
                    enableComposer2IntelligentTestingPromptSection: this.config.enableComposer2IntelligentTestingPromptSection,
                    backgroundAgentSource: this.config.backgroundAgentSource,
                    agentType: this.config.agentType,
                    enableCloudTesting: this.config.enableCloudTesting,
                    featureFlags: this.config.featureFlags,
                    namedAgentSessionKind: this.config.namedAgentSessionKind,
                    isCloudMetaAgentParent: this.config.isCloudMetaAgentParent
                });
                const userInfoPromptVariant = this.config.getUserInfoPromptVariant?.();
                const userInfoMcpMetaToolOptions = getUserInfoMcpMetaToolOptions(requestContext.mcpMetaToolOptions, mcpTools, toolSetHandle);
                rootPromptExecutor.appendMessages(toRedactedCoreMessages([
                    {
                        role: "user",
                        content: UserInfo({
                            cursorRules: rules,
                            agentSkills: requestContext.agentSkills,
                            env: requestContext.env,
                            gitRepos: requestContext.gitRepos,
                            gitRepoInfoComplete: requestContext.gitRepoInfoComplete,
                            cloudRule: requestContext.cloudRule ?? void 0,
                            mode: modeForPrompt,
                            isRootProject,
                            dsv3: stateHandler.isDsv3(),
                            displayOptions: this.config.userInfoDisplayOptions,
                            mcpInfoComplete: requestContext.mcpInfoComplete,
                            mcpInstructions: requestContext.mcpInstructions,
                            mcpFileSystemOptions: requestContext.mcpFileSystemOptions,
                            mcpMetaToolOptions: userInfoMcpMetaToolOptions,
                            userIntentSummary: requestContext.userIntentSummary,
                            featureFlags: this.config.featureFlags,
                            enableFilterEditToolsInAskMode: this.config.enableFilterEditToolsInAskMode,
                            skipMcpInstructions: (requestContext.mcpFileSystemOptions?.enabled ?? false) || (userInfoMcpMetaToolOptions?.enabled ?? false),
                            hooksAdditionalContext: requestContext.hooksAdditionalContext,
                            automationInstructions: this.config.automationInstructions,
                            ...this.config.enableTerminalFiles !== false && {
                                terminalsFolder: requestContext.env?.terminalsFolder
                            },
                            ...buildUserInfoAgentNotesProps(this.config, requestContext.env),
                            designatedBranches: this.config.designatedBranches,
                            startedAsNewProject: this.config.startedAsNewProject,
                            newProjectSeededEmptyRoot: this.config.newProjectSeededEmptyRoot,
                            branchPrefix: this.config.branchPrefix,
                            branchSuffix: this.config.branchSuffix,
                            preferCurrentBranchInMultiPrMode: this.config.preferCurrentBranchInMultiPrMode,
                            toolInfo: extractToolInfo(toolSetHandle),
                            browserTools: getBrowserToolNames(mcpTools),
                            agentType: this.config.agentType,
                            backgroundAgentSource: this.config.backgroundAgentSource,
                            isSlackV1_5: this.config.isSlackV1_5,
                            namedAgentSessionKind: this.config.namedAgentSessionKind,
                            enableCloudTesting: this.config.enableCloudTesting,
                            useLocalAgentPrompting: this.config.useLocalAgentPrompting,
                            isRepoless: this.config.isRepoless,
                            repolessPromptVariant: this.config.repolessPromptVariant,
                            modelInfo: this.config.modelInfo,
                            agentTokenLimit: this.config.agentTokenLimit,
                            enableComposer2IntelligentTestingPromptSection: this.config.enableComposer2IntelligentTestingPromptSection
                        }),
                        ...(userInfoCloudTestingSectionsPlacement !== void 0 || userInfoPromptVariant !== void 0) && {
                            providerOptions: {
                                cursor: {
                                    ...userInfoCloudTestingSectionsPlacement !== void 0 && {
                                        composer2CloudTestingSectionsPlacement: userInfoCloudTestingSectionsPlacement
                                    },
                                    ...userInfoPromptVariant !== void 0 && {
                                        userInfoPromptVariant
                                    }
                                }
                            }
                        }
                    }
                ], stateHandler.getPrivacyMode()));
            }
        }
        rootPromptExecutor.appendMessages(toRedactedCoreMessages([
            userMessage,
            assistantMessage,
            toolCallResult2
        ], stateHandler.getPrivacyMode()));
        return await stateHandler.computeNewStructure(ctx);
    }
};

}
