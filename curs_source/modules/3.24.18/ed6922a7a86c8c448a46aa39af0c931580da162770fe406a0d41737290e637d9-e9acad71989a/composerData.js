import { Hm, zd } from "./agent_pb.js";
import { FKe } from "./canvasComposer.js";
import { Hu, Tr, x4e } from "./chat_pb.js";
import { NUi } from "./composerConversationMetrics.js";
import { OUi } from "./composerGitActionStatusService.js";
import { Xve } from "./composerTaskFollowupMessageUtils.js";
import { Jm, ps } from "./composer_pb.js";
import { eg } from "./constants_18.js";
import { mi } from "./index_188.js";
import { li } from "./network.js";
import { iL } from "./selectedContextData.js";
import { jS } from "./store.js";
import { hKs } from "./stripMarkdownToPlainText.js";
import { o8i } from "./stripReproductionSteps.js";
import { QO } from "./tiptapRichText.js";
import { nt, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Js, zn } from "./uuid.js";
import { ci } from "./workspace.js";
var _8i, LKs, b8i, NKs, y8i, S8i, k8i, w8i, Af, qLu, zLu, KLu, YLu, XLu, ZLu, QLu, OKs, C8i, FKs, A$t;
export { A$t, Af, C8i, FKs, KLu, LKs, NKs, OKs, QLu, S8i, XLu, YLu, ZLu, _8i, b8i, k8i, qLu, w8i, y8i, zLu };
var __wakaru_Wf_initialized = false;
export function Wf() {
if (__wakaru_Wf_initialized) return;
__wakaru_Wf_initialized = true;
"use strict";
x(), mi(), jS(), zd(), Hu(), Jm(), ql(), li(), Qt(), Js(), NUi(), OUi(), eg(), hKs(), QO(), o8i(), ci(), iL(), Xve(), FKe(), _8i = class extends Error {
    constructor(e){
        super(e.actualErrorMessage), this.clientVisibleErrorMessage = e.clientVisibleErrorMessage, this.modelVisibleErrorMessage = e.modelVisibleErrorMessage, this.actualErrorMessage = e.actualErrorMessage, this.errorDetails = e.errorDetails;
    }
}, LKs = 3, b8i = 18, NKs = 3, y8i = 1, S8i = (e)=>e.nonExistentFilesVersion === y8i, k8i = (e)=>({
        ...e,
        files: e.files.map((t)=>({
                ...t,
                uri: Ee.revive(t.uri)
            })),
        nonExistentFiles: e.nonExistentFiles.map((t)=>({
                ...t,
                uri: Ee.revive(t.uri)
            })),
        newlyCreatedFolders: e.newlyCreatedFolders.map((t)=>({
                ...t,
                uri: Ee.revive(t.uri)
            })),
        activeInlineDiffs: e.activeInlineDiffs.map((t)=>({
                ...t,
                uri: Ee.revive(t.uri),
                codeBlockId: t.codeBlockId ?? ""
            })),
        inlineDiffNewlyCreatedResources: {
            ...e.inlineDiffNewlyCreatedResources,
            files: e.inlineDiffNewlyCreatedResources.files.map((t)=>({
                    ...t,
                    uri: Ee.revive(t.uri)
                })),
            folders: e.inlineDiffNewlyCreatedResources.folders.map((t)=>({
                    ...t,
                    uri: Ee.revive(t.uri)
                }))
        }
    }), w8i = ()=>({
        nonExistentFilesVersion: y8i,
        files: [],
        nonExistentFiles: [],
        newlyCreatedFolders: [],
        activeInlineDiffs: [],
        inlineDiffNewlyCreatedResources: {
            files: [],
            folders: []
        }
    }), Af = ()=>({
        _v: LKs,
        type: Tr.HUMAN,
        approximateLintErrors: [],
        lints: [],
        codebaseContextChunks: [],
        commits: [],
        pullRequests: [],
        attachedCodeChunks: [],
        assistantSuggestedDiffs: [],
        gitDiffs: [],
        interpreterResults: [],
        images: [],
        attachedFolders: [],
        attachedFoldersNew: [],
        bubbleId: zn(),
        userResponsesToSuggestedCodeBlocks: [],
        suggestedCodeBlocks: [],
        diffsForCompressingFiles: [],
        relevantFiles: [],
        toolResults: [],
        notepads: [],
        capabilities: [],
        multiFileLinterErrors: [],
        diffHistories: [],
        recentLocationsHistory: [],
        recentlyViewedFiles: [],
        isAgentic: !1,
        fileDiffTrajectories: [],
        existedSubsequentTerminalCommand: !1,
        existedPreviousTerminalCommand: !1,
        docsReferences: [],
        webReferences: [],
        aiWebSearchResults: [],
        requestId: "",
        attachedFoldersListDirResults: [],
        humanChanges: [],
        attachedHumanChanges: !1,
        summarizedComposers: [],
        cursorRules: [],
        cursorCommands: [],
        cursorCommandsExplicitlySet: !1,
        pastChats: [],
        pastChatsExplicitlySet: !1,
        contextPieces: [],
        editTrailContexts: [],
        allThinkingBlocks: [],
        diffsSinceLastApply: [],
        deletedFiles: [],
        supportedTools: [],
        tokenCount: {
            inputTokens: 0,
            outputTokens: 0
        },
        attachedFileCodeChunksMetadataOnly: [],
        consoleLogs: [],
        uiElementPicked: [],
        isRefunded: !1,
        knowledgeItems: [],
        documentationSelections: [],
        externalLinks: [],
        projectLayouts: [],
        unifiedMode: x4e.AGENT,
        capabilityContexts: [],
        todos: [],
        createdAt: new Date().toISOString(),
        mcpDescriptors: [],
        workspaceUris: [],
        conversationState: new Hm
    }), qLu = [
    "isRenderable",
    "capabilityType",
    "summarizationAborted",
    "toolFormerTool",
    "toolFormerStatus",
    "taskStatus",
    "shellStatus",
    "toolCallId",
    "toolCallCase",
    "toolDisplayPath",
    "mcpProviderIdentifier",
    "mcpToolName",
    "mcpName",
    "editLinesAdded",
    "editLinesRemoved",
    "editIsNewFile",
    "progressStep",
    "toolDisplayComputed",
    "isSimulatedMsg",
    "simulatedMsgReason",
    "hasContextualGitActionRichText",
    "simulatedMessageMetadataTitle",
    "simulatedMessageMetadataTaskId",
    "simulatedMessageMetadataSuppressUIDisplay",
    "backgroundTaskCompletionKind",
    "hasEventNotification",
    "eventNotificationSource",
    "eventNotificationHeadline",
    "eventNotificationDetail",
    "eventNotificationUrl",
    "isPlanExecution",
    "hasText",
    "hasThinking",
    "hasServiceStatus",
    "isShortPlainText",
    "textPreview",
    "incomingNotificationPreview",
    "hasSentMessage",
    "sentMessageReplyTo",
    "isToolGroupable",
    "isBrowserMcpTool",
    "turnDurationMs",
    "thinkingDurationMs",
    "routedModelLabel",
    "isKeptFinalAiVisibleOutsideWorkedForGroup",
    "isSteer"
], zLu = 42, KLu = 16, YLu = 20, XLu = 10, ZLu = 400, QLu = 102, OKs = [
    "createdFromBackgroundAgent",
    "agentSessionId"
], C8i = [
    ps.TOOL_FORMER,
    ps.CURSOR_RULES,
    ps.CHIMES,
    ps.NOTIFICATIONS,
    ps.QUEUING,
    ps.ONLINE_METRICS,
    ps.AI_CODE_TRACKING,
    ps.BACKGROUND_COMPOSER
], FKs = new Set([
    nt.RUN_TERMINAL_COMMAND_V2,
    nt.MCP,
    nt.EDIT_FILE_V2,
    nt.ASK_QUESTION,
    nt.WEB_FETCH,
    nt.WEB_SEARCH,
    nt.MCP_AUTH,
    nt.CONNECT_SCM,
    nt.GENERATE_IMAGE
]), A$t = {
    [nt.RUN_TERMINAL_COMMAND_V2]: {
        accept: "Run",
        reject: "Stop",
        waitText: "Waiting for approval"
    },
    [nt.EDIT_FILE]: {
        accept: "Keep",
        reject: "Undo",
        waitText: ""
    },
    [nt.BACKGROUND_COMPOSER_FOLLOWUP]: {
        accept: "Send to background composer",
        reject: "Skip",
        waitText: "Waiting for approval"
    },
    [nt.WEB_SEARCH]: {
        accept: "Continue",
        reject: "Cancel",
        waitText: "Waiting for approval"
    },
    [nt.SWITCH_MODE]: {
        accept: "Switch",
        reject: "Skip",
        waitText: "Waiting for approval"
    },
    [nt.CONNECT_SCM]: {
        accept: "Connect GitHub",
        reject: "Skip",
        waitText: "Waiting for approval"
    },
    [nt.MCP_AUTH]: {
        accept: "Authenticate",
        reject: "Skip",
        waitText: "Waiting for approval"
    }
};

}
