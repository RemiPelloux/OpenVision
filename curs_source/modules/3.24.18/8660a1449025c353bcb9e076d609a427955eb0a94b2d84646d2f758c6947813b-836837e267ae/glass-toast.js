import { dp } from "./connect.js";
import { tT } from "./errorMessage.js";
import { zc } from "./glass-notification-service.js";
import { E6e } from "./pinnedAgentsStorage.js";
import { E } from "./tslib.es6.js";
var vff, tg, _ff;
export { _ff, tg, vff };
var __wakaru_BS_initialized = false;
export function BS() {
if (__wakaru_BS_initialized) return;
__wakaru_BS_initialized = true;
"use strict";
E(), dp(), tT(), E6e(), zc(), vff = 8e3, tg = {
    copyPrUrl: "glass.copy-pr-url",
    copyCommitSha: "glass.copy-commit-sha",
    copyBranchName: "glass.copy-branch-name",
    copyDiffPath: "glass.copy-diff-path",
    copyMessages: "glass.copy-messages",
    copyRemoteUrl: "glass.copy-remote-url",
    copyBrowserUrl: "glass.copy-browser-url",
    copyPlanMarkdown: "glass.copy-plan-markdown",
    copyAgentDeeplink: "glass.copy-agent-deeplink",
    copyExtensionId: "glass.copy-extension-id",
    copyExtensionIdFailed: "glass.copy-extension-id-failed",
    copyAuthId: "glass.copy-auth-id",
    copyAuthIdFailed: "glass.copy-auth-id-failed",
    copyMessagesEmpty: "glass.copy-messages-empty",
    copyCursorComLink: "glass.copy-cursor-com-link",
    copyOutputPath: "glass.copy-output-path",
    copyGeneric: "glass.copy-generic",
    cloudDraftGoToFile: "glass.cloud-draft-go-to-file",
    cloudNonImageAttachmentRejected: "glass.cloud-non-image-attachment-rejected",
    cloudUnsupportedAttachmentRejected: "glass.cloud-unsupported-attachment-rejected",
    cloudFolderTruncated: "glass.cloud-folder-truncated",
    cloudPluginSkillLocalRetarget: "glass.cloud-plugin-skill-local-retarget",
    designNoteNotSent: "glass.design-note-not-sent",
    devBackendSwitchProdGuard: "glass.dev-backend-switch-prod-guard",
    devDynamicConfigsProdGuard: "glass.dev-dynamic-configs-prod-guard",
    devExperimentsProdGuard: "glass.dev-experiments-prod-guard",
    statsigRefreshing: "glass.statsig-refreshing",
    statsigRefreshed: "glass.statsig-refreshed",
    statsigRefreshFailed: "glass.statsig-refresh-failed",
    fileTreePasteAncestor: "glass.file-tree-paste-ancestor",
    fileTreeReadonlyParent: "glass.file-tree-readonly-parent",
    fileTreeAlreadyExists: "glass.file-tree-already-exists",
    fileTreeDeleteMissing: "glass.file-tree-delete-missing",
    prActionFailed: "glass.pr-action-failed",
    ciInvestigationFailed: "glass.ci-investigation-failed",
    editPrTitleUpdated: "glass.edit-pr-title-updated",
    editPrTitleFailed: "glass.edit-pr-title-failed",
    spendLimitEmpty: "glass.spend-limit-empty",
    spendLimitInvalidNumber: "glass.spend-limit-invalid-number",
    spendLimitTeamNotFound: "glass.spend-limit-team-not-found",
    spendLimitFailed: "glass.spend-limit-failed",
    queuedMessageRemoveFailed: "glass.queued-message-remove-failed",
    queuedMessageSendFailed: "glass.queued-message-send-failed",
    queuedMessageMultitaskFailed: "glass.queued-message-multitask-failed",
    queuedMessageUpdateFailed: "glass.queued-message-update-failed",
    queuedMessageMoveToNewChatFailed: "glass.queued-message-move-to-new-chat-failed",
    goalUpdateFailed: "glass.goal-update-failed",
    followupSubmitFailed: "glass.followup-submit-failed",
    mainBotSendFailed: "glass.main-bot-send-failed",
    mcpAuthUrlUnavailable: "glass.mcp-auth-url-unavailable",
    mcpAuthOpenFailed: "glass.mcp-auth-open-failed",
    remoteControlWaitingForWorker: "glass.remote-control-waiting-for-worker",
    agentConfetti: "glass.agent-confetti",
    agentHeavyLoad: "glass.agent-heavy-load",
    agentHeavyLoadProcessKilled: "glass.agent-heavy-load-process-killed",
    newProjectCreateFailed: "glass.new-project-create-failed",
    newProjectOriginReady: "glass.new-project-origin-ready",
    pinAgentLimitReached: "glass.pin-agent-limit-reached",
    remoteControlRequiredForCloudProject: "glass.remote-control-required-for-cloud-project",
    unifiedSkuCreditsPurchased: "glass.unified-sku-credits-purchased",
    unifiedSkuBuyCreditsUnavailable: "glass.unified-sku-buy-credits-unavailable"
}, _ff = "glass.machine-pressure:";

}
