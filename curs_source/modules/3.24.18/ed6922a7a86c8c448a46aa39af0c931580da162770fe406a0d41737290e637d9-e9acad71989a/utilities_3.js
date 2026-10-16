import { D0e, Fh, Fj, RQe, dX, i4i, ndv, zve } from "./De_3.js";
import { am, kc } from "./buildFlags.js";
import { CK, So, m3 } from "./constants_8.js";
import { Xcv } from "./migrations.js";
import { Qcv } from "./observable_2.js";
import { E1, uX } from "./reactiveStorageTypes.js";
import { Vn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
import { hu, zP } from "./utils_pb.js";
var Tyt, V1u, j1u, q1u, Eyt;
export { Eyt, Tyt, V1u, j1u, q1u };
var __wakaru_Ku_initialized = false;
export function Ku() {
if (__wakaru_Ku_initialized) return;
__wakaru_Ku_initialized = true;
"use strict";
x(), hu(), So(), am(), Vn(), Xcv(), Qcv(), uX(), Tyt = "", V1u = [
    "last-used",
    "cloud",
    "local",
    "new-worktree",
    "shared-pool",
    "remote-control"
], j1u = [
    E1.Code,
    E1.File,
    E1.Folder,
    E1.GitDiff
], q1u = 10080 * 60 * 1e3, Eyt = {
    lastUpdateHiddenTimeInUnixSeconds: dX(0),
    lastUpdateHiddenVersion: zve(""),
    updatePromptLastPromptTime: dX(0),
    updatePromptPromptsShownForVersion: Fj({}),
    updatePromptPromptsShownToday: dX(0),
    updatePromptPromptsShownTodayDate: zve(""),
    updatePromptSnoozedUntilTime: dX(0),
    updatePromptForceUpdate: Fh(!1),
    settingsDismissedOpenAIKeyWarning: Fh(!1),
    settingsDismissedClaudeKeyWarning: Fh(!1),
    settingsDismissedGoogleKeyWarning: Fh(!1),
    settingsDismissedBedrockKeyWarning: Fh(!1),
    dismissedGeneralCustomizeBanner: Fh(!1),
    dismissedP2PReferralCta: Fh(!1),
    dismissedClaudeCodeImportCta: Fh(!1),
    dismissedGrokBotTopBarCta: Fh(!1),
    perfVoteCollapsed: Fh(!1),
    annotateEntered: Fh(!1),
    annotateUseCount: dX(0),
    annotateSendImmediately: Fh(!0),
    lastSingleModelPreference: zve("{}"),
    lastTimeClosedPaymentFailed: dX(0),
    lastPaymentFailed: Fh(!1),
    paymentRecoveryAction: zve(""),
    pendingCancellationDate: zve(""),
    hasClickedSlackConnect: Fh(!1),
    grokBotInstalled: Fh(!1),
    claudeMdEnabled: Fh(!1),
    thirdPartyExtensibilityEnabled: Fh(!0),
    importPluginsFromClaudeOnBoot: Fh(!0),
    importClaudeCodeAgents: Fh(!1),
    useDedicatedLocalAgentRuntimeHost: Fh(!1),
    composerAutocompleteHeuristicsEnabled: Fh(!1),
    composerAutocompleteHeuristicsAutoApplied: Fh(!1),
    newAgentDefaultEnvironment: {
        fromStorage: (e)=>V1u.includes(e) ? e : "last-used",
        toStorage: (e)=>e,
        defaultValue: "last-used",
        storageScope: -1,
        storageTarget: 0
    },
    agentAutorunBrandNewDefaultAttempted: Fh(!1),
    localAgentTeamDefaultRunModeApplied: Fh(!1),
    appliedAutoReviewRunModeResetByTeam: Fj({}),
    steerQueuedMessagesNuxDismissed: Fh(!1),
    firstSteerNoticeShown: Fh(!1),
    jumpOnDiffAccept: Fh(!0),
    cloudAgentApprovalNotificationsWhileFocused: Fh(!0),
    chatSubmitOnCmdEnter: Fh(!1),
    collapseAutoRunCommands: Fh(!0),
    allowModelFallbacks: Fh(!0),
    modelNudgesEnabled: Fh(!0, -1, 0),
    numberOfTimesShownFallbackModelWarning: dX(0),
    isCursorDevToolsEnabled: Fh(!1),
    glassDevSimulatePrScmRateLimitPct: dX(0),
    shouldUseZeroAgentExecStreamStartTimeout: Fh(!1),
    shouldShowComposerVirtualizationMap: Fh(!1),
    videoPlayerMuted: Fh(!1),
    needsComposerInitialOpening: Fh(!0, 1, 0),
    shouldMockCursorPrediction: Fh(!1, 1, 0),
    isRcpInternalExtensionEnabled: Fh(!1, 1, 0),
    indexingData: Fj({
        preferredEmbeddingModel: zP.UNSPECIFIED
    }, 1, 0),
    uniqueCppWorkspaceId: zve("", 1, 0),
    isComposerBarChatCollapsed: Fh(!1, 1, 0),
    shouldShowAgentWindowTitleHelperText: Fh(!0, 0, 0),
    composerBarPosition: Fj(null, 1, 0),
    devToolsPosition: Fj({
        x: 0,
        y: 0
    }, 1, 0),
    shouldExplicitlyShowFgComposerInBg: Fh(!1, 1, 0),
    enableDataHandleDebugging: Fh(!1, 1, 0),
    visualizeLoadedHandles: Fh(!1, 1, 0),
    approvedProjectMcpServers: D0e([], -1, 0),
    disabledMcpServers: D0e([], 1, 0),
    disabledGlobalMcpServers: D0e([], 0, 0),
    workspaceEligibleForSnippetLearning: Fh(!1, 1, 0),
    releaseTrackAppliedAt: dX(0, -1, 0),
    copyPasteMentions: {
        ...D0e([], -1, 0),
        fromStorage: (e)=>{
            try {
                const t = JSON.parse(e);
                return Array.isArray(t) ? t.filter(ndv) : [];
            } catch  {
                return [];
            }
        }
    },
    disposableTrackingEnabled: {
        ...Fh(!1, -1, 0),
        get defaultValue () {
            return kc.developmentTooling;
        }
    },
    autoRunBugbotOnCommit: Fh(!1, -1, 0),
    allowPromotionalAgentReviewRuns: Fh(!0, -1, 0),
    lastCloudHandoffUpsellAtUnixMs: dX(0, -1, 0),
    worktreeCleanupIntervalHours: dX(6, -1, 0),
    worktreeMaxCount: dX(25, -1, 0),
    worktreesGlobalMaxSizeGb: dX(50, -1, 0),
    voiceInputLanguage: zve(Tyt, -1, 0),
    voiceModeSpeed: dX(1.2, -1, 0),
    voiceModeLanguage: zve("auto", -1, 0),
    voiceModeInputDeviceId: zve("", -1, 0),
    bugbotIncludeSubmodules: Fh(!0, -1, 0),
    bugbotIncludeUntrackedFiles: Fh(!0, -1, 0),
    bugbotDeepReviewDefault: Fh(!1, -1, 0),
    attributeCommitsToAgent: Fh(!0, -1, 0),
    attributePRsToAgent: Fh(!0, -1, 0),
    agentBranchPrefix: zve("", -1, 0),
    disabledTeamRules: D0e([], -1, 0),
    agentLayoutDiffViewMode: RQe(CK.Default, -1, 0),
    unifiedAppLayout: RQe(m3.Editor, -1, 0),
    extensionSigningVerificationEnabled: Fh(!1, -1, 0),
    extensionSigningEnabledAt: dX(0, -1, 0),
    grandfatheredExtensionHashes: Fj({}, -1, 0),
    autoHideEditorWhenEmpty: Fh(!1, -1, 0),
    chatEditorGroupEnabled: Fh(!1, -1, 0),
    reviewControlLocation: RQe("breadcrumb", -1, 0),
    globalLayoutState: Fj(null, -1, 0),
    sandboxSupported: Fh(!1, 1, 0),
    sandboxNetworkDefault: {
        fromStorage: (e)=>e === "ask" ? "user_config_with_defaults" : e === "enabled" ? "allow_all" : e === "user_config_only" || e === "user_config_with_defaults" || e === "allow_all" ? e : "user_config_with_defaults",
        toStorage: (e)=>e,
        defaultValue: "user_config_with_defaults",
        storageScope: -1,
        storageTarget: 0
    },
    sandboxAutoRunSettingEnabled: Fh(!0, -1, 0),
    agentReadBoundary: {
        fromStorage: (e)=>e === "workspace" ? "workspace" : "system",
        toStorage: (e)=>e,
        defaultValue: "system",
        storageScope: -1,
        storageTarget: 0
    },
    agentReadAllowlist: D0e([], -1, 0),
    sandboxingSeen: Fh(!1, -1, 0),
    sandboxPromoVersionSeen: dX(0, -1, 0),
    sandboxDebugOutputDir: zve("", -1, 0),
    devSimulateTerminalSandboxDisabled: Fh(!1, -1, 0),
    terminalExecutionServiceV3HealthCheckResult: RQe("untested", -1, 0),
    planExecUseChatModel: Fh(!0, -1, 0),
    planExecMode: RQe("agent", -1, 0),
    indexingGrepEnabled: Fh(!0, 1, 0),
    debugGlassNavEntries: Fh(!1, -1, 0),
    showFpsMeter: {
        ...Fh(!1, -1, 0),
        get defaultValue () {
            return kc.developmentTooling;
        }
    },
    showWorkbenchLifecycleMetric: Fh(!1, -1, 0),
    diffMeterPanelOpen: Fh(!1, -1, 0),
    showLeakedDisposables: Fh(!1, -1, 0),
    autoOpenLocalhostUrls: Fh(!0, -1, 0),
    glassOpenWebLinksInBrowser: Fh(!1, -1, 0),
    glassWorkspaceLspEnabled: Fh(!0, -1, 0),
    glassWorkspaceLspWorktreesEnabled: Fh(!1, -1, 0),
    glassRemoteControlKeepAwakeWhilePluggedIn: Fh(!1, -1, 0),
    remoteControlMachineName: zve("", -1, 1),
    glassShowChatStatusBar: Fh(!0, -1, 0),
    glassAutoContinueInterruptedAgents: Fh(!0, -1, 0),
    glassUseSendMessageTool: Fh(!1, -1, 0),
    glassUnifiedProjectPillLastTabByProject: Fj({}, -1, 0),
    agentConfettiCannonEnabled: Fh(!1, -1, 0),
    desktopBridgeUserEnabled: Fh(!1, -1, 0),
    glassStatusBarShowRepo: Fh(!1, -1, 0),
    glassStatusBarShowBranch: Fh(!0, -1, 0),
    glassStatusBarShowEnvironment: Fh(!0, -1, 0),
    glassStatusBarShowContext: Fh(!0, -1, 0),
    mcpSettingsViewGroupBy: RQe("scope", 0, 0),
    mcpSettingsViewSortBy: RQe("name", 0, 0),
    mainBotSelected: Fh(!1, 0, 0),
    composerFileListExpanded: Fh(!0, 1, 0),
    browserUrlPopupDismissed: Fh(!1, -1, 0),
    pinnedComposers: D0e([], 1, 0),
    dismissedAutoOpenDialog: Fh(!1, -1, 0),
    markdownEditorModePreferences: Fj({}, -1, 0),
    csvTableModePreferences: Fj({}, -1, 0),
    csvTableDefaultMode: {
        fromStorage: (e)=>e === "table" || e === "raw" ? e : null,
        toStorage: (e)=>e ?? "",
        defaultValue: null,
        storageScope: -1,
        storageTarget: 0
    },
    noInlineDiffs: i4i(null, -1, 0),
    autoFormatOnAgentFinish: i4i(null, -1, 0),
    isPostOnboardingFirstLanding: Fh(!1, -1, 0),
    newChatAutoSwitchApplied: Fh(!1, -1, 0),
    steerFromCloudModalOpened: Fh(!1, -1, 0),
    initialModelState: RQe("applied", -1, 0),
    initialModelAppliedConfig: Fj(null, -1, 0),
    initialModelNeedsGlassDraftSync: Fh(!1, -1, 0),
    applicationOpenModelAppliedConfig: Fj(null, -1, 0),
    applicationOpenModelNeedsGlassDraftSync: Fh(!1, -1, 0),
    applicationOpenRecentComposerModelSwitch: Fj(null, -1, 0),
    confirmedModelDialogueKeys: D0e([], -1, 0),
    shownPostPickerModelWarningKeysByConversation: Fj({}, -1, 0),
    seenNewModelBadgeModelNames: D0e([], -1, 0),
    seenNewParameterValueKeys: D0e([], -1, 0),
    selectedDismissibleModelBadgeKeys: D0e([], -1, 0),
    pendingModelConfirmation: Fj(null, -1, 0),
    subagentModelOverrides: Fj({}, -1, 0),
    userAgentStoreSkillsMigration: Fj(null, -1, 0),
    privateInferenceUseCursorModels: i4i(null, -1, 1),
    privateInferenceEnabled: i4i(null, -1, 1),
    userAgentStoreSkillsMigrationDevOverride: Fh(!1, -1, 0)
};

}
