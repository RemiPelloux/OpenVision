import { ju, nf } from "./agent_pb.js";
import { DHe } from "./canvasComposer.js";
import { bs, ctt, sd } from "./chat_pb.js";
import { BGr } from "./composerConversationMetrics.js";
import { wCn } from "./composerGitActionStatusService.js";
import { eCe } from "./composerTaskFollowupMessageUtils.js";
import { mo, tf } from "./composer_pb.js";
import { Ef } from "./constants_18.js";
import { Mt } from "./index_197.js";
import { Ki } from "./network.js";
import { LM } from "./selectedContextData.js";
import { v1 } from "./store.js";
import { kqr } from "./stripMarkdownToPlainText.js";
import { xqr } from "./stripReproductionSteps.js";
import { Fx } from "./tiptapRichText.js";
import { Ct, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Ai, Xo } from "./uuid_2.js";
import { Sr } from "./workspace.js";
var Hqr, o5a, Wqr, a5a, Gqr, qqr, zqr, Vqr, J_, f6p, v6p, _6p, b6p, y6p, S6p, k6p, l5a, Kqr, c5a, LCn;
export { Gqr, Hqr, J_, Kqr, LCn, S6p, Vqr, Wqr, _6p, a5a, b6p, c5a, f6p, k6p, l5a, o5a, qqr, v6p, y6p, zqr };
var __wakaru_uv_initialized = false;
export function uv() {
if (__wakaru_uv_initialized) return;
__wakaru_uv_initialized = true;
"use strict";
E(), Mt(), v1(), ju(), sd(), tf(), Pu(), Ki(), fn(), Xo(), BGr(), wCn(), Ef(), kqr(), Fx(), xqr(), Sr(), LM(), eCe(), DHe(), Hqr = class extends Error {
    constructor(t){
        super(t.actualErrorMessage), this.clientVisibleErrorMessage = t.clientVisibleErrorMessage, this.modelVisibleErrorMessage = t.modelVisibleErrorMessage, this.actualErrorMessage = t.actualErrorMessage, this.errorDetails = t.errorDetails;
    }
}, o5a = 3, Wqr = 18, a5a = 3, Gqr = 1, qqr = (t)=>t.nonExistentFilesVersion === Gqr, zqr = (t)=>({
        ...t,
        files: t.files.map((e)=>({
                ...e,
                uri: rt.revive(e.uri)
            })),
        nonExistentFiles: t.nonExistentFiles.map((e)=>({
                ...e,
                uri: rt.revive(e.uri)
            })),
        newlyCreatedFolders: t.newlyCreatedFolders.map((e)=>({
                ...e,
                uri: rt.revive(e.uri)
            })),
        activeInlineDiffs: t.activeInlineDiffs.map((e)=>({
                ...e,
                uri: rt.revive(e.uri),
                codeBlockId: e.codeBlockId ?? ""
            })),
        inlineDiffNewlyCreatedResources: {
            ...t.inlineDiffNewlyCreatedResources,
            files: t.inlineDiffNewlyCreatedResources.files.map((e)=>({
                    ...e,
                    uri: rt.revive(e.uri)
                })),
            folders: t.inlineDiffNewlyCreatedResources.folders.map((e)=>({
                    ...e,
                    uri: rt.revive(e.uri)
                }))
        }
    }), Vqr = ()=>({
        nonExistentFilesVersion: Gqr,
        files: [],
        nonExistentFiles: [],
        newlyCreatedFolders: [],
        activeInlineDiffs: [],
        inlineDiffNewlyCreatedResources: {
            files: [],
            folders: []
        }
    }), J_ = ()=>({
        _v: o5a,
        type: bs.HUMAN,
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
        bubbleId: Ai(),
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
        unifiedMode: ctt.AGENT,
        capabilityContexts: [],
        todos: [],
        createdAt: new Date().toISOString(),
        mcpDescriptors: [],
        workspaceUris: [],
        conversationState: new nf
    }), f6p = [
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
], v6p = 42, _6p = 16, b6p = 20, y6p = 10, S6p = 400, k6p = 102, l5a = [
    "createdFromBackgroundAgent",
    "agentSessionId"
], Kqr = [
    mo.TOOL_FORMER,
    mo.CURSOR_RULES,
    mo.CHIMES,
    mo.NOTIFICATIONS,
    mo.QUEUING,
    mo.ONLINE_METRICS,
    mo.AI_CODE_TRACKING,
    mo.BACKGROUND_COMPOSER
], c5a = new Set([
    Ct.RUN_TERMINAL_COMMAND_V2,
    Ct.MCP,
    Ct.EDIT_FILE_V2,
    Ct.ASK_QUESTION,
    Ct.WEB_FETCH,
    Ct.WEB_SEARCH,
    Ct.MCP_AUTH,
    Ct.CONNECT_SCM,
    Ct.GENERATE_IMAGE
]), LCn = {
    [Ct.RUN_TERMINAL_COMMAND_V2]: {
        accept: "Run",
        reject: "Stop",
        waitText: "Waiting for approval"
    },
    [Ct.EDIT_FILE]: {
        accept: "Keep",
        reject: "Undo",
        waitText: ""
    },
    [Ct.BACKGROUND_COMPOSER_FOLLOWUP]: {
        accept: "Send to background composer",
        reject: "Skip",
        waitText: "Waiting for approval"
    },
    [Ct.WEB_SEARCH]: {
        accept: "Continue",
        reject: "Cancel",
        waitText: "Waiting for approval"
    },
    [Ct.SWITCH_MODE]: {
        accept: "Switch",
        reject: "Skip",
        waitText: "Waiting for approval"
    },
    [Ct.CONNECT_SCM]: {
        accept: "Connect GitHub",
        reject: "Skip",
        waitText: "Waiting for approval"
    },
    [Ct.MCP_AUTH]: {
        accept: "Authenticate",
        reject: "Skip",
        waitText: "Waiting for approval"
    }
};

}
