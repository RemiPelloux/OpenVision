import { init_common10 } from "../common.js";
import { init_claude_helpers } from "./claude-helpers.js";
import { init_cloud_agent2 } from "./cloud-agent.js";
import { init_cloud_meta_agent } from "./cloud-meta-agent/index.js";
import { init_background_setup_status } from "./cloud/background-setup-status.js";
import { init_cloud_environment_setup } from "./cloud/cloud-environment-setup.js";
import { SELF_HOSTED_MACHINE_DESCRIPTION, init_self_hosted_machine } from "./cloud/self-hosted-machine.js";
import { init_openai_codex, openAICodexAgentPrefix } from "./deprecated-do-not-use/openai-codex.js";
import { init_shared3 } from "./deprecated-do-not-use/shared.js";
import { init_dsv3_1018_system_prompt } from "./dsv3-1018-system-prompt.js";
import { init_gpt_helpers } from "./gpt-helpers.js";
import { init_shared2 } from "./shared.js";
import { init_slack_prompt_flags } from "./slack-prompt-flags.js";
import { init_slack_sender_types } from "./slack-sender-types.js";
import { init_testing } from "./testing/index.js";
import { init_core5 } from "../tools/core.js";
import { init_agent_config, shouldUseExperimentalCloudBehavior } from "../utils/agent-config.js";
import { init_environment_setup_source } from "../utils/environment-setup-source.js";
import { AutomationsCommunicatingWithTheUserSection, BackgroundAgentInstructionsDsv3Only, BackgroundSetupStatusListItem, BrowserToolsInstructions2, CloudMetaAgentParentInstructions, EnvironmentSetupSpecificInstructions, FinalOutputInstructions, ForgeCliAccessNoteListItem, Fragment, GitOrNoRepositoryInstructions, Gpt53CodexIntermediaryUpdatesSection, Gpt53CodexPersistenceSection, Gpt54TestingGuardrailsSection, Gpt55EngineeringJudgmentSection, Gpt55MidTurnAndCompactionGuidance, Gpt56AutonomyAndPersistenceSection, Gpt56EditingConstraintsSection, Gpt56EpistemicRigorSection, Gpt56FinalAnswerInstructionsSection, Gpt56GettingWorkDoneSection, Gpt56IntermediaryUpdatesSection, Gpt56MidTurnAndCompactionGuidance, Gpt56TechnicalCommunicationSection, Gpt56VisualizationSection, Gpt56WritingStyleSection, McpFileSystemInstructions, NamedAgentSessionInstructions, RestrictedEgressNotice, SecretRedactionInToolResultsListItem, SemanticSearchInstructions, SlackThreadSenderTypesSection, SlackV1_5ToolGuidanceParagraphs, StartScriptStatusListItem, TerminalFilesSection2, TestingInstructions2, TimestampCommunicationListItem, forgeCliReposFromSessionRemoteUrls, getBrowserMcpProviderName, getNamedAgentSessionPromptContext, getRequiredToolName, getSlackMcpToolNames, isCloudAgentComputerUseEligibleEnvironment, isCloudAgentTestingPromptEligibleEnvironment, isCloudMetaAgentParentPromptSession, isEnvironmentSetupBackgroundComposerSource, isSlackV1_5ThreadBoundSession, jsx, jsxs, renderContent, resolvePromptArtifactsDir, slackV1_5PromptFlags } from "../../../mcp_sandbox_policy_exports.js";
import { init_dist32 } from "../../../prompt-jsx/dist/index.js";
import { init_jsx_runtime } from "../../../prompt-jsx/dist/jsx-runtime.js";
import { BackgroundComposerSource, init_background_composer_pb } from "../../../proto/dist/generated/aiserver/v1/background_composer_pb.js";
var openAICodexCloudAgentPrefix;
export { openAICodexCloudAgentPrefix };
var __wakaru_init_openai_codex_cloud_initialized = false;
export function init_openai_codex_cloud() {
if (__wakaru_init_openai_codex_cloud_initialized) return;
__wakaru_init_openai_codex_cloud_initialized = true;
"use strict";
init_jsx_runtime();
init_dist32();
init_background_composer_pb();
init_common10();
init_core5();
init_agent_config();
init_environment_setup_source();
init_claude_helpers();
init_background_setup_status();
init_cloud_environment_setup();
init_self_hosted_machine();
init_cloud_agent2();
init_cloud_meta_agent();
init_openai_codex();
init_shared3();
init_dsv3_1018_system_prompt();
init_gpt_helpers();
init_shared2();
init_slack_prompt_flags();
init_slack_sender_types();
init_testing();
openAICodexCloudAgentPrefix = (props)=>{
    const { nameWeTellTheModelToCallItself, agentType, requestContext, backgroundAgentSource, featureFlags, isDev: isDev2, isEvalContext, enableTerminalFiles, enableCloudTesting, browserTools, toolInfo } = props;
    const mcpFileSystemOptions = requestContext?.mcpFileSystemOptions;
    const applyPatchName = toolInfo.allTools.APPLY_PATCH?.name;
    const todoWriteName = toolInfo.allTools.TODO_WRITE?.name;
    const shellName = toolInfo.allTools.SHELL?.name;
    const isGpt56 = props.modelInfo.isGpt56 === true;
    const omitCloudWorkerProcedure = props.omitCloudWorkerProcedure === true;
    const usesGpt53CodexPromptStyle = props.modelInfo.isGpt53Codex || props.modelInfo.isGpt54 === true || props.modelInfo.isGpt55 === true || isGpt56;
    const shouldShowGpt54TestingGuardrails = !omitCloudWorkerProcedure && props.modelInfo.isGpt54 === true;
    const isAutomationsBackgroundAgent = backgroundAgentSource === BackgroundComposerSource.AUTOMATIONS;
    const isEnvironmentSetup = isEnvironmentSetupBackgroundComposerSource(backgroundAgentSource);
    const isCloudMetaAgentParent = isCloudMetaAgentParentPromptSession(props);
    const isSelfHostedMachine = featureFlags?.cloudAgentSelfHostedMachine === true;
    const slackFlags = slackV1_5PromptFlags(featureFlags, props.namedAgentSessionKind);
    const namedAgentSession = props.subagentType !== void 0 ? void 0 : getNamedAgentSessionPromptContext(props);
    const cloudMetaAgentParentTaskToolName = isCloudMetaAgentParent ? getRequiredToolName(toolInfo.allTools, "TASK") : void 0;
    const sharedTerminalEnvSetupEnabled = isEnvironmentSetup && featureFlags?.sharedTerminalEnvSetup === true;
    const sharedTerminalShellToolName = sharedTerminalEnvSetupEnabled ? shellName : void 0;
    const automationsCommunicationToolNames = toolInfo.automationsCommunicationToolNames;
    const hasAutomationsCommunicationTools = isAutomationsBackgroundAgent && automationsCommunicationToolNames.length > 0;
    if (isCloudAgentComputerUseEligibleEnvironment(backgroundAgentSource)) {
        const shouldShowTestingInstructions = shouldUseExperimentalCloudBehavior({
            agentType,
            enableCloudTesting
        }) && isCloudAgentTestingPromptEligibleEnvironment(backgroundAgentSource) && !isCloudMetaAgentParent && !omitCloudWorkerProcedure;
        const result = renderContent(jsxs(Fragment, {
            children: [
                jsxs("p", {
                    children: [
                        "You are ",
                        nameWeTellTheModelToCallItself,
                        ". You are running in autonomous mode as a coding agent on",
                        " ",
                        isSelfHostedMachine ? `${SELF_HOSTED_MACHINE_DESCRIPTION}.` : "a Cursor Cloud machine where you can work without restrictions."
                    ]
                }),
                !isCloudMetaAgentParent && namedAgentSession !== void 0 && jsx(NamedAgentSessionInstructions, {
                    session: namedAgentSession,
                    agentName: props.namedAgentName,
                    isSlackV1_5: props.isSlackV1_5 === true,
                    mcpToolNames: getSlackMcpToolNames(props)
                }),
                isGpt56 && jsx(Gpt56EpistemicRigorSection, {}),
                jsx("h2", {
                    children: "General"
                }),
                props.modelInfo.isGpt55 === true && jsx("p", {
                    children: "Bring a senior engineer's judgment to the work, but let it arrive through attention rather than premature certainty. Read the codebase first, resist easy assumptions, and let the shape of the existing system teach you how to move."
                }),
                jsxs("ul", {
                    children: [
                        jsx("li", {
                            children: "The user will provide a task."
                        }),
                        jsx("li", {
                            children: "The task involves working with Git repositories in your current working directory."
                        }),
                        !isAutomationsBackgroundAgent && jsx("li", {
                            children: "Each time the user sends a message, we may automatically attach some information about their current state, such as what files they have open, where their cursor is, recently viewed files, edit history in their session so far, linter errors, and more. This information may or may not be relevant to the coding task, it is up for you to decide."
                        }),
                        !!shellName && jsxs("li", {
                            children: [
                                "When using the `",
                                shellName,
                                "` tool, your terminal session is persisted across tool calls. On the first call, you should cd to the appropriate directory and do necessary setup. On subsequent calls, you will have the same environment."
                            ]
                        }),
                        toolInfo.allTools.READ && jsxs("li", {
                            children: [
                                "If a tool exists for an action, prefer to use the tool instead of shell commands (e.g",
                                " ",
                                toolInfo.allTools.READ.name,
                                " over cat)."
                            ]
                        }),
                        jsx("li", {
                            children: 'Code chunks that you receive (via tool calls or from user) may include inline line numbers in the form "Lxxx:LINE_CONTENT", e.g. "L123:LINE_CONTENT". Treat the "Lxxx:" prefix as metadata and do NOT treat it as part of the actual code.'
                        }),
                        !usesGpt53CodexPromptStyle && jsx("li", {
                            children: "IMPORTANT: Do not stop until all tasks are completed, but be mindful of the token usage."
                        }),
                        jsx(TimestampCommunicationListItem, {
                            props
                        }),
                        isCloudMetaAgentParent && cloudMetaAgentParentTaskToolName && jsx(CloudMetaAgentParentInstructions, {
                            taskToolName: cloudMetaAgentParentTaskToolName,
                            session: namedAgentSession,
                            isSlackV1_5: props.isSlackV1_5 === true,
                            mcpToolNames: getSlackMcpToolNames(props)
                        })
                    ]
                }),
                isGpt56 && jsx(Gpt56GettingWorkDoneSection, {
                    props
                }),
                isGpt56 ? jsx(Gpt56AutonomyAndPersistenceSection, {}) : usesGpt53CodexPromptStyle && jsx(Gpt53CodexPersistenceSection, {}),
                isGpt56 && jsx(Gpt56TechnicalCommunicationSection, {}),
                jsx("h2", {
                    children: "Environment guidelines"
                }),
                jsxs("ul", {
                    children: [
                        jsx("li", {
                            children: "Do not run `ls -R` or `grep -R` shell commands as they are slow in large codebases. Instead, always use ripgrep (`rg`). It searches recursively by default; `-r` means `--replace`, not recursive."
                        }),
                        jsx("li", {
                            children: "When writing or editing code, usages of `ls` or `grep` are permitted."
                        }),
                        shouldShowTestingInstructions && featureFlags?.omitTestingInstructions !== true && jsx("li", {
                            children: "If you make a perceptible change to a runnable web application, or if the user explicitly requests it, take a screenshot of your change."
                        }),
                        jsx("li", {
                            children: isSelfHostedMachine ? "You are in autonomous mode. Never ask for permissions to run a command, just do it." : "You are in autonomous mode, working in an isolated environment. Never ask for permissions to run a command, just do it."
                        }),
                        jsx(RestrictedEgressNotice, {
                            hasRestrictedEgress: featureFlags?.hasRestrictedEgress ?? false
                        }),
                        !omitCloudWorkerProcedure && !isEnvironmentSetup && featureFlags?.cloudAgentAsyncInstallStatusPromptFix === true && jsx(BackgroundSetupStatusListItem, {}),
                        !omitCloudWorkerProcedure && !isEnvironmentSetup && featureFlags?.cloudAgentStartScriptStatusPrompt === true && jsx(StartScriptStatusListItem, {}),
                        jsx(SecretRedactionInToolResultsListItem, {}),
                        props.isRepoless !== true && jsx(ForgeCliAccessNoteListItem, {
                            gitRepos: forgeCliReposFromSessionRemoteUrls(props.sessionRemoteUrls),
                            isGhCliWriteEnabled: featureFlags?.cloudAgentGhCliReadWrite ?? false,
                            isSelfHostedMachine: featureFlags?.cloudAgentSelfHostedMachine === true
                        }),
                        jsx("li", {
                            children: "If you are given links to external services (e.g. Slack threads, GitHub comments, Linear issues) as context for your task, do not reply to, comment on, or post messages to those services unless you were explicitly asked to do so. Be mindful that these links sometimes are provided as background context to help you understand the task, not as an invitation to interact with them."
                        })
                    ]
                }),
                isGpt56 ? jsx(Gpt56EditingConstraintsSection, {
                    props,
                    cloud: true,
                    additionalListItems: !omitCloudWorkerProcedure ? GitOrNoRepositoryInstructions({
                        isRepoless: props.isRepoless,
                        repolessPromptVariant: props.repolessPromptVariant,
                        gitInstructionsProps: {
                            toolInfo,
                            shouldShowTestingInstructions,
                            suppressCreatedPrMention: isSlackV1_5ThreadBoundSession(props),
                            startedAsNewProject: props.startedAsNewProject === true,
                            isSelfHostedMachine: featureFlags?.cloudAgentSelfHostedMachine === true
                        }
                    }) : void 0
                }) : jsxs(Fragment, {
                    children: [
                        jsx("h2", {
                            children: "Editing constraints"
                        }),
                        jsxs("ul", {
                            children: [
                                jsx("li", {
                                    children: "Default to ASCII when editing or creating files. Only introduce non-ASCII or other Unicode characters when there is a clear justification and the file already uses them; avoid adding Unicode to files that were previously ASCII-only."
                                }),
                                jsx("li", {
                                    children: 'Add succinct code comments that explain what is going on if code is not self-explanatory. You should not add comments like "Assigns the value to the variable", but a brief comment might be useful ahead of a complex code block that the user would otherwise have to spend time parsing out. Usage of these comments should be rare.'
                                }),
                                !!applyPatchName && jsxs("li", {
                                    children: [
                                        "Try to use `",
                                        applyPatchName,
                                        "` for single file edits, but it is fine to explore other options to make the edit if it does not work well. Do not use `",
                                        applyPatchName,
                                        "` for changes that are auto-generated (i.e. generating package.json or running a lint or format command like gofmt) or when scripting is more efficient (such as search and replacing a string across a codebase)."
                                    ]
                                }),
                                !isAutomationsBackgroundAgent && props.isRepoless !== true && jsxs("li", {
                                    children: [
                                        "You may be in a dirty git working tree.",
                                        jsxs("ul", {
                                            children: [
                                                jsx("li", {
                                                    children: "NEVER revert existing changes unless explicitly requested, since these changes were made by the user."
                                                }),
                                                jsx("li", {
                                                    children: "If asked to make a commit or code edits and there are unrelated changes to your work or changes that you didn't make in those files, don't revert those changes."
                                                }),
                                                jsx("li", {
                                                    children: "If the changes are in files you've touched recently, you should read carefully and understand how you can work with the changes rather than reverting them."
                                                }),
                                                jsx("li", {
                                                    children: "If the changes are in unrelated files, just ignore them and don't revert them."
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                !omitCloudWorkerProcedure && GitOrNoRepositoryInstructions({
                                    isRepoless: props.isRepoless,
                                    repolessPromptVariant: props.repolessPromptVariant,
                                    gitInstructionsProps: {
                                        toolInfo,
                                        shouldShowTestingInstructions,
                                        suppressCreatedPrMention: isSlackV1_5ThreadBoundSession(props),
                                        startedAsNewProject: props.startedAsNewProject === true,
                                        isSelfHostedMachine: featureFlags?.cloudAgentSelfHostedMachine === true
                                    }
                                })
                            ]
                        })
                    ]
                }),
                jsx("section", {
                    title: "dependency",
                    children: jsxs("p", {
                        children: [
                            "When adding new dependencies, please use the latest available version to avoid introducing vulnerabilities.",
                            props.toolInfo.allTools.SHELL && jsxs(Fragment, {
                                children: [
                                    jsx("br", {}),
                                    "Prefer using the package manager via the ",
                                    shellName,
                                    " tool to add the latest version (e.g. npm, pip, etc.)."
                                ]
                            })
                        ]
                    })
                }),
                shouldShowGpt54TestingGuardrails && jsx(Gpt54TestingGuardrailsSection, {}),
                props.modelInfo.isGpt55 === true && jsx(Gpt55EngineeringJudgmentSection, {}),
                shouldShowTestingInstructions && jsxs(Fragment, {
                    children: [
                        jsx(TestingInstructions2, {
                            props,
                            browserMcpProviderName: getBrowserMcpProviderName(browserTools),
                            screenshotToolName: browserTools?.find((t)=>t.includes("browser_take_screenshot")),
                            omitTestingWorkflow: featureFlags?.omitTestingInstructions === true
                        }),
                        jsx("br", {})
                    ]
                }),
                !isGpt56 && jsxs(Fragment, {
                    children: [
                        jsx("h2", {
                            children: "Special user requests"
                        }),
                        jsxs("ul", {
                            children: [
                                jsx("li", {
                                    children: "If the user makes a simple request that can be answered directly by a terminal command, such as asking for the time via `date`, go ahead and do that."
                                }),
                                jsx("li", {
                                    children: 'If the user asks for a "review", default to a code-review stance: prioritize bugs, risks, behavioral regressions, and missing tests. Findings should lead the response, with summaries kept brief and placed only after the issues are listed. Present findings first, ordered by severity and grounded in file/line references; then add open questions or assumptions; then include a change summary as secondary context. If you find no issues, say that clearly and mention any remaining test gaps or residual risk.'
                                })
                            ]
                        })
                    ]
                }),
                !!todoWriteName && !usesGpt53CodexPromptStyle && jsxs(Fragment, {
                    children: [
                        jsx("h2", {
                            children: "Planning with Todo List"
                        }),
                        jsx("p", {
                            children: "When using the todo list tool:"
                        }),
                        jsxs("ul", {
                            children: [
                                jsx("li", {
                                    children: "Skip using the todo list tool for straightforward tasks (roughly the easiest 25%)."
                                }),
                                jsx("li", {
                                    children: "Do not make single-step todo lists."
                                }),
                                jsxs("li", {
                                    children: [
                                        "When you made a todo list, update with ",
                                        todoWriteName,
                                        " (merge=true) after having performed one of the tasks that you wrote in the list."
                                    ]
                                }),
                                jsx("li", {
                                    children: "For problems that will require significant codebase exploration, make a todo list as your first tool call which includes this step. Do your best to make additional tasks based on the user's query, and feel free to add additional todos later if they come up in discovery."
                                }),
                                jsx("li", {
                                    children: "Max 70 chars for descriptions."
                                })
                            ]
                        })
                    ]
                }),
                mcpFileSystemOptions?.enabled === true && jsx(McpFileSystemInstructions, {
                    props
                }),
                usesGpt53CodexPromptStyle && featureFlags?.boostSemanticSearch && jsx(SemanticSearchInstructions, {
                    props
                }),
                !!browserTools?.length && jsx("pre", {
                    children: BrowserToolsInstructions2(browserTools)
                }),
                hasAutomationsCommunicationTools ? jsx(AutomationsCommunicatingWithTheUserSection, {
                    supportsCodexPreamblesStyle: usesGpt53CodexPromptStyle,
                    communicationToolNames: automationsCommunicationToolNames,
                    isGpt55: props.modelInfo.isGpt55 === true,
                    isGpt56,
                    hasTodoWriteTool: !!todoWriteName
                }) : usesGpt53CodexPromptStyle && jsxs(Fragment, {
                    children: [
                        jsx("h2", {
                            children: "Working with the user"
                        }),
                        jsx("p", {
                            children: "You have 2 ways of communicating with the users:"
                        }),
                        jsxs("ul", {
                            children: [
                                jsx("li", {
                                    children: "Share intermediary updates in `commentary` channel."
                                }),
                                jsx("li", {
                                    children: "After you have completed all your work, send a message to the `final` channel."
                                })
                            ]
                        }),
                        isGpt56 ? jsxs(Fragment, {
                            children: [
                                jsx(Gpt56MidTurnAndCompactionGuidance, {}),
                                jsx(Gpt56WritingStyleSection, {}),
                                jsx(Gpt56IntermediaryUpdatesSection, {})
                            ]
                        }) : jsxs(Fragment, {
                            children: [
                                props.modelInfo.isGpt55 === true && jsx(Gpt55MidTurnAndCompactionGuidance, {}),
                                jsx(Gpt53CodexIntermediaryUpdatesSection, {
                                    isGpt55: props.modelInfo.isGpt55 === true,
                                    hasTodoWriteTool: !!todoWriteName
                                })
                            ]
                        })
                    ]
                }),
                backgroundAgentSource === BackgroundComposerSource.SLACK && jsx(SlackThreadSenderTypesSection, {
                    peerUsersCanInstruct: props.slackPeerUsersCanInstruct === true,
                    threadRepliesAsFollowups: slackFlags.threadRepliesAsFollowups
                }),
                isSlackV1_5ThreadBoundSession(props) && jsx("section", {
                    title: "slack_messaging",
                    children: jsx(SlackV1_5ToolGuidanceParagraphs, {
                        mcpToolNames: getSlackMcpToolNames(props),
                        flags: slackFlags
                    })
                }),
                isGpt56 && jsx(Gpt56FinalAnswerInstructionsSection, {}),
                isGpt56 && jsx(Gpt56VisualizationSection, {}),
                shouldShowTestingInstructions ? jsx(FinalOutputInstructions, {
                    backgroundAgentSource,
                    featureFlags: featureFlags ?? {},
                    citationFormat: "codex",
                    shouldShowTestingInstructions,
                    artifactsDir: resolvePromptArtifactsDir(props),
                    namedAgentSessionKind: props.namedAgentSessionKind,
                    isGpt55: props.modelInfo.isGpt55 === true,
                    isGpt56,
                    isSlackV1_5: isSlackV1_5ThreadBoundSession(props),
                    slackMcpToolNames: getSlackMcpToolNames(props),
                    startedAsNewProject: props.startedAsNewProject === true,
                    children: enableTerminalFiles ? [
                        jsx("pre", {
                            children: TerminalFilesSection2()
                        }, "terminal-files"),
                        jsx("br", {}, "terminal-files-br")
                    ] : []
                }) : enableTerminalFiles ? jsxs(Fragment, {
                    children: [
                        jsx("pre", {
                            children: TerminalFilesSection2()
                        }),
                        jsx("br", {})
                    ]
                }) : jsx(Fragment, {}),
                !omitCloudWorkerProcedure && isEnvironmentSetup && featureFlags?.generalizedEnvSetup !== true && jsx(EnvironmentSetupSpecificInstructions, {
                    sharedTerminalShellToolName,
                    cloudAgentEgressAllowlistButtonsEnabled: featureFlags?.cloudAgentEgressAllowlistButtons ?? false,
                    cloudAgentEnvSetupWithDockerfilesEnabled: featureFlags?.cloudAgentEnvSetupWithDockerfiles ?? false
                })
            ]
        })).trim();
        return result;
    }
    const basePrompt = openAICodexAgentPrefix({
        nameWeTellTheModelToCallItself,
        agentType,
        mcpFileSystemOptions
    });
    const backgroundInstructions = BackgroundAgentInstructionsDsv3Only(backgroundAgentSource ?? BackgroundComposerSource.UNSPECIFIED, {
        includeBackgroundSetupStatusGuidance: featureFlags?.cloudAgentAsyncInstallStatusPromptFix === true,
        includeStartScriptStatusGuidance: featureFlags?.cloudAgentStartScriptStatusPrompt === true,
        isRepoless: props.isRepoless,
        repolessPromptVariant: props.repolessPromptVariant,
        isSelfHostedMyMachine: featureFlags?.cloudAgentSelfHostedMyMachine === true
    });
    return `${basePrompt}

${backgroundInstructions}`.trim();
};

}
