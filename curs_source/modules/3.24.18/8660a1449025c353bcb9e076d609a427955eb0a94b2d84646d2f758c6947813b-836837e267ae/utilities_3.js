import { vl, wm } from "./buildFlags.js";
import { Tj, Wse, pa } from "./constants_8.js";
import { Bm, D6e, GR1, K2e, MGr, Oae, eie, y0t } from "./ipa.js";
import { Bx1 } from "./migrations.js";
import { jx1 } from "./observable_2.js";
import { Lae, Ox } from "./reactiveStorageTypes.js";
import { Zi } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { Hu, R5 } from "./utils_pb.js";
var uWt, bLp, yLp, SLp, dWt;
export { SLp, bLp, dWt, uWt, yLp };
var __wakaru_wu_initialized = false;
export function wu() {
if (__wakaru_wu_initialized) return;
__wakaru_wu_initialized = true;
"use strict";
E(), Hu(), pa(), wm(), Zi(), Bx1(), jx1(), Lae(), uWt = "", bLp = [
    "last-used",
    "cloud",
    "local",
    "new-worktree",
    "shared-pool",
    "remote-control"
], yLp = [
    Ox.Code,
    Ox.File,
    Ox.Folder,
    Ox.GitDiff
], SLp = 10080 * 60 * 1e3, dWt = {
    lastUpdateHiddenTimeInUnixSeconds: Oae(0),
    lastUpdateHiddenVersion: K2e(""),
    updatePromptLastPromptTime: Oae(0),
    updatePromptPromptsShownForVersion: eie({}),
    updatePromptPromptsShownToday: Oae(0),
    updatePromptPromptsShownTodayDate: K2e(""),
    updatePromptSnoozedUntilTime: Oae(0),
    updatePromptForceUpdate: Bm(!1),
    settingsDismissedOpenAIKeyWarning: Bm(!1),
    settingsDismissedClaudeKeyWarning: Bm(!1),
    settingsDismissedGoogleKeyWarning: Bm(!1),
    settingsDismissedBedrockKeyWarning: Bm(!1),
    dismissedGeneralCustomizeBanner: Bm(!1),
    dismissedP2PReferralCta: Bm(!1),
    dismissedClaudeCodeImportCta: Bm(!1),
    dismissedGrokBotTopBarCta: Bm(!1),
    perfVoteCollapsed: Bm(!1),
    annotateEntered: Bm(!1),
    annotateUseCount: Oae(0),
    annotateSendImmediately: Bm(!0),
    lastSingleModelPreference: K2e("{}"),
    lastTimeClosedPaymentFailed: Oae(0),
    lastPaymentFailed: Bm(!1),
    paymentRecoveryAction: K2e(""),
    pendingCancellationDate: K2e(""),
    hasClickedSlackConnect: Bm(!1),
    grokBotInstalled: Bm(!1),
    claudeMdEnabled: Bm(!1),
    thirdPartyExtensibilityEnabled: Bm(!0),
    importPluginsFromClaudeOnBoot: Bm(!0),
    importClaudeCodeAgents: Bm(!1),
    useDedicatedLocalAgentRuntimeHost: Bm(!1),
    composerAutocompleteHeuristicsEnabled: Bm(!1),
    composerAutocompleteHeuristicsAutoApplied: Bm(!1),
    newAgentDefaultEnvironment: {
        fromStorage: (t)=>bLp.includes(t) ? t : "last-used",
        toStorage: (t)=>t,
        defaultValue: "last-used",
        storageScope: -1,
        storageTarget: 0
    },
    agentAutorunBrandNewDefaultAttempted: Bm(!1),
    localAgentTeamDefaultRunModeApplied: Bm(!1),
    appliedAutoReviewRunModeResetByTeam: eie({}),
    steerQueuedMessagesNuxDismissed: Bm(!1),
    firstSteerNoticeShown: Bm(!1),
    jumpOnDiffAccept: Bm(!0),
    cloudAgentApprovalNotificationsWhileFocused: Bm(!0),
    chatSubmitOnCmdEnter: Bm(!1),
    collapseAutoRunCommands: Bm(!0),
    allowModelFallbacks: Bm(!0),
    modelNudgesEnabled: Bm(!0, -1, 0),
    numberOfTimesShownFallbackModelWarning: Oae(0),
    isCursorDevToolsEnabled: Bm(!1),
    glassDevSimulatePrScmRateLimitPct: Oae(0),
    shouldUseZeroAgentExecStreamStartTimeout: Bm(!1),
    shouldShowComposerVirtualizationMap: Bm(!1),
    videoPlayerMuted: Bm(!1),
    needsComposerInitialOpening: Bm(!0, 1, 0),
    shouldMockCursorPrediction: Bm(!1, 1, 0),
    isRcpInternalExtensionEnabled: Bm(!1, 1, 0),
    indexingData: eie({
        preferredEmbeddingModel: R5.UNSPECIFIED
    }, 1, 0),
    uniqueCppWorkspaceId: K2e("", 1, 0),
    isComposerBarChatCollapsed: Bm(!1, 1, 0),
    shouldShowAgentWindowTitleHelperText: Bm(!0, 0, 0),
    composerBarPosition: eie(null, 1, 0),
    devToolsPosition: eie({
        x: 0,
        y: 0
    }, 1, 0),
    shouldExplicitlyShowFgComposerInBg: Bm(!1, 1, 0),
    enableDataHandleDebugging: Bm(!1, 1, 0),
    visualizeLoadedHandles: Bm(!1, 1, 0),
    approvedProjectMcpServers: D6e([], -1, 0),
    disabledMcpServers: D6e([], 1, 0),
    disabledGlobalMcpServers: D6e([], 0, 0),
    workspaceEligibleForSnippetLearning: Bm(!1, 1, 0),
    releaseTrackAppliedAt: Oae(0, -1, 0),
    copyPasteMentions: {
        ...D6e([], -1, 0),
        fromStorage: (t)=>{
            try {
                const e = JSON.parse(t);
                return Array.isArray(e) ? e.filter(GR1) : [];
            } catch  {
                return [];
            }
        }
    },
    disposableTrackingEnabled: {
        ...Bm(!1, -1, 0),
        get defaultValue () {
            return vl.developmentTooling;
        }
    },
    autoRunBugbotOnCommit: Bm(!1, -1, 0),
    allowPromotionalAgentReviewRuns: Bm(!0, -1, 0),
    lastCloudHandoffUpsellAtUnixMs: Oae(0, -1, 0),
    worktreeCleanupIntervalHours: Oae(6, -1, 0),
    worktreeMaxCount: Oae(25, -1, 0),
    worktreesGlobalMaxSizeGb: Oae(50, -1, 0),
    voiceInputLanguage: K2e(uWt, -1, 0),
    voiceModeSpeed: Oae(1.2, -1, 0),
    voiceModeLanguage: K2e("auto", -1, 0),
    voiceModeInputDeviceId: K2e("", -1, 0),
    bugbotIncludeSubmodules: Bm(!0, -1, 0),
    bugbotIncludeUntrackedFiles: Bm(!0, -1, 0),
    bugbotDeepReviewDefault: Bm(!1, -1, 0),
    attributeCommitsToAgent: Bm(!0, -1, 0),
    attributePRsToAgent: Bm(!0, -1, 0),
    agentBranchPrefix: K2e("", -1, 0),
    disabledTeamRules: D6e([], -1, 0),
    agentLayoutDiffViewMode: y0t(Wse.Default, -1, 0),
    unifiedAppLayout: y0t(Tj.Editor, -1, 0),
    extensionSigningVerificationEnabled: Bm(!1, -1, 0),
    extensionSigningEnabledAt: Oae(0, -1, 0),
    grandfatheredExtensionHashes: eie({}, -1, 0),
    autoHideEditorWhenEmpty: Bm(!1, -1, 0),
    chatEditorGroupEnabled: Bm(!1, -1, 0),
    reviewControlLocation: y0t("breadcrumb", -1, 0),
    globalLayoutState: eie(null, -1, 0),
    sandboxSupported: Bm(!1, 1, 0),
    sandboxNetworkDefault: {
        fromStorage: (t)=>t === "ask" ? "user_config_with_defaults" : t === "enabled" ? "allow_all" : t === "user_config_only" || t === "user_config_with_defaults" || t === "allow_all" ? t : "user_config_with_defaults",
        toStorage: (t)=>t,
        defaultValue: "user_config_with_defaults",
        storageScope: -1,
        storageTarget: 0
    },
    sandboxAutoRunSettingEnabled: Bm(!0, -1, 0),
    agentReadBoundary: {
        fromStorage: (t)=>t === "workspace" ? "workspace" : "system",
        toStorage: (t)=>t,
        defaultValue: "system",
        storageScope: -1,
        storageTarget: 0
    },
    agentReadAllowlist: D6e([], -1, 0),
    sandboxingSeen: Bm(!1, -1, 0),
    sandboxPromoVersionSeen: Oae(0, -1, 0),
    sandboxDebugOutputDir: K2e("", -1, 0),
    devSimulateTerminalSandboxDisabled: Bm(!1, -1, 0),
    terminalExecutionServiceV3HealthCheckResult: y0t("untested", -1, 0),
    planExecUseChatModel: Bm(!0, -1, 0),
    planExecMode: y0t("agent", -1, 0),
    indexingGrepEnabled: Bm(!0, 1, 0),
    debugGlassNavEntries: Bm(!1, -1, 0),
    showFpsMeter: {
        ...Bm(!1, -1, 0),
        get defaultValue () {
            return vl.developmentTooling;
        }
    },
    showWorkbenchLifecycleMetric: Bm(!1, -1, 0),
    diffMeterPanelOpen: Bm(!1, -1, 0),
    showLeakedDisposables: Bm(!1, -1, 0),
    autoOpenLocalhostUrls: Bm(!0, -1, 0),
    glassOpenWebLinksInBrowser: Bm(!1, -1, 0),
    glassWorkspaceLspEnabled: Bm(!0, -1, 0),
    glassWorkspaceLspWorktreesEnabled: Bm(!1, -1, 0),
    glassRemoteControlKeepAwakeWhilePluggedIn: Bm(!1, -1, 0),
    remoteControlMachineName: K2e("", -1, 1),
    glassShowChatStatusBar: Bm(!0, -1, 0),
    glassAutoContinueInterruptedAgents: Bm(!0, -1, 0),
    glassUseSendMessageTool: Bm(!1, -1, 0),
    glassUnifiedProjectPillLastTabByProject: eie({}, -1, 0),
    agentConfettiCannonEnabled: Bm(!1, -1, 0),
    desktopBridgeUserEnabled: Bm(!1, -1, 0),
    glassStatusBarShowRepo: Bm(!1, -1, 0),
    glassStatusBarShowBranch: Bm(!0, -1, 0),
    glassStatusBarShowEnvironment: Bm(!0, -1, 0),
    glassStatusBarShowContext: Bm(!0, -1, 0),
    mcpSettingsViewGroupBy: y0t("scope", 0, 0),
    mcpSettingsViewSortBy: y0t("name", 0, 0),
    mainBotSelected: Bm(!1, 0, 0),
    composerFileListExpanded: Bm(!0, 1, 0),
    browserUrlPopupDismissed: Bm(!1, -1, 0),
    pinnedComposers: D6e([], 1, 0),
    dismissedAutoOpenDialog: Bm(!1, -1, 0),
    markdownEditorModePreferences: eie({}, -1, 0),
    csvTableModePreferences: eie({}, -1, 0),
    csvTableDefaultMode: {
        fromStorage: (t)=>t === "table" || t === "raw" ? t : null,
        toStorage: (t)=>t ?? "",
        defaultValue: null,
        storageScope: -1,
        storageTarget: 0
    },
    noInlineDiffs: MGr(null, -1, 0),
    autoFormatOnAgentFinish: MGr(null, -1, 0),
    isPostOnboardingFirstLanding: Bm(!1, -1, 0),
    newChatAutoSwitchApplied: Bm(!1, -1, 0),
    steerFromCloudModalOpened: Bm(!1, -1, 0),
    initialModelState: y0t("applied", -1, 0),
    initialModelAppliedConfig: eie(null, -1, 0),
    initialModelNeedsGlassDraftSync: Bm(!1, -1, 0),
    applicationOpenModelAppliedConfig: eie(null, -1, 0),
    applicationOpenModelNeedsGlassDraftSync: Bm(!1, -1, 0),
    applicationOpenRecentComposerModelSwitch: eie(null, -1, 0),
    confirmedModelDialogueKeys: D6e([], -1, 0),
    shownPostPickerModelWarningKeysByConversation: eie({}, -1, 0),
    seenNewModelBadgeModelNames: D6e([], -1, 0),
    seenNewParameterValueKeys: D6e([], -1, 0),
    selectedDismissibleModelBadgeKeys: D6e([], -1, 0),
    pendingModelConfirmation: eie(null, -1, 0),
    subagentModelOverrides: eie({}, -1, 0),
    userAgentStoreSkillsMigration: eie(null, -1, 0),
    privateInferenceUseCursorModels: MGr(null, -1, 1),
    privateInferenceEnabled: MGr(null, -1, 1),
    userAgentStoreSkillsMigrationDevOverride: Bm(!1, -1, 0)
};

}
