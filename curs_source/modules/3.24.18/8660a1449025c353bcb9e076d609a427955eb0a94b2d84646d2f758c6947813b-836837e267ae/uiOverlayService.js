import { Qe, st } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { sk, vb } from "./solidEventsWrapper.js";
import { E } from "./tslib.es6.js";
var Toi, Z_, Ezd;
export { Ezd, Toi, Z_ };
var __wakaru_fS_initialized = false;
export function fS() {
if (__wakaru_fS_initialized) return;
__wakaru_fS_initialized = true;
"use strict";
E(), Qe(), Rn(), It(), sk(), Toi = "dialog-prompt-preview", Z_ = Il("uiOverlayService"), Ezd = class extends st {
    constructor(){
        super(), this.docsLinkDialog = this._register(new vb(void 0)), this.mentionLinkToolbar = this._register(new vb(void 0)), this.inviteModal = this._register(new vb(!1)), this.reportIssueModal = this._register(new vb(!1)), this.manageSharingModal = this._register(new vb(void 0)), this.isTestingChangelogComponent = this._register(new vb(!1)), this.isTestingUpdateButton = this._register(new vb(!1)), this.focusSettingsSearchRequest = this._register(new vb(0)), this.focusCustomizeSearchRequest = this._register(new vb(0)), this.usageBasedPricingModal = this._register(new vb(void 0)), this.subscriptionTiersModal = this._register(new vb(!1)), this.githubConnectModal = this._register(new vb(void 0)), this.steerFromCloudModal = this._register(new vb(!1)), this.upgradeConfirmationModal = this._register(new vb(void 0)), this.reportFeedbackModal = this._register(new vb(void 0)), this.docsModal = this._register(new vb(!1)), this.localAgentConfigurationModal = this._register(new vb(!1)), this.privateInferenceDownloadPrompt = this._register(new vb(!1)), this.forceComposerDropdownRerender = this._register(new vb(1)), this.composerDropdownMenuOpenCount = this._register(new vb(0)), this.layoutSwitcherOpen = this._register(new vb(!1)), this.menubarMenuActive = this._register(new vb(!1)), this.errorMetadata = this._register(new vb({
            case: null,
            error: void 0
        })), this.shouldBlockNewPanelsFromPoppingUpIfTimeIsLessThan = 0, this.feedbackState = this._register(new vb({
            description: void 0,
            type: void 0,
            screenshots: []
        })), this.settingsOpenData = this._register(new vb(void 0)), this.dialogData = this._register(new vb(void 0));
    }
    get newDoc() {
        return this._newDoc;
    }
    setNewDoc(t) {
        this._newDoc = t;
    }
    async showDocsLinkConfirmation(t) {
        return this.docsLinkDialog.change({
            link: t
        }), new Promise((e)=>this._docsLinkDialogResolve = e);
    }
    closeDocsLinkConfirmation(t) {
        this._docsLinkDialogResolve && (this._docsLinkDialogResolve(t), this._docsLinkDialogResolve = void 0, this.docsLinkDialog.change(void 0));
    }
    showMentionLinkToolbar(t) {
        return this.mentionLinkToolbar.change(t), new Promise((e)=>this._mentionLinkToolbarResolve = e);
    }
    closeMentionLinkToolbar() {
        this._mentionLinkToolbarResolve && (this._mentionLinkToolbarResolve(), this._mentionLinkToolbarResolve = void 0, this.mentionLinkToolbar.change(void 0));
    }
    showInviteModal() {
        this.inviteModal.value || this.inviteModal.change(!0);
    }
    closeInviteModal() {
        this.inviteModal.value && this.inviteModal.change(!1);
    }
    showReportIssueModal() {
        this.reportIssueModal.value || this.reportIssueModal.change(!0);
    }
    closeReportIssueModal() {
        this.reportIssueModal.value && this.reportIssueModal.change(!1);
    }
    showManageSharingModal(t) {
        this.manageSharingModal.change(t);
    }
    closeManageSharingModal() {
        this.manageSharingModal.value !== void 0 && this.manageSharingModal.change(void 0);
    }
    toggleTestingChangelogComponent() {
        this.isTestingChangelogComponent.change(!this.isTestingChangelogComponent.value);
    }
    toggleTestingUpdateButton() {
        this.isTestingUpdateButton.change(!this.isTestingUpdateButton.value);
    }
    requestFocusSettingsSearch() {
        this.focusSettingsSearchRequest.change(this.focusSettingsSearchRequest.value + 1);
    }
    requestFocusCustomizeSearch() {
        this.focusCustomizeSearchRequest.change(this.focusCustomizeSearchRequest.value + 1);
    }
    showUsageBasedPricingModal(t) {
        this.usageBasedPricingModal.change(t);
    }
    closeUsageBasedPricingModal() {
        this.usageBasedPricingModal.value !== void 0 && this.usageBasedPricingModal.change(void 0);
    }
    showSubscriptionTiersModal() {
        this.subscriptionTiersModal.value || this.subscriptionTiersModal.change(!0);
    }
    showGithubConnectModal(t) {
        this.githubConnectModal.change(t);
    }
    closeGithubConnectModal() {
        this.githubConnectModal.value && this.githubConnectModal.change(void 0);
    }
    showSteerFromCloudModal() {
        this.steerFromCloudModal.value || this.steerFromCloudModal.change(!0);
    }
    closeSteerFromCloudModal() {
        this.steerFromCloudModal.value && this.steerFromCloudModal.change(!1);
    }
    closeSubscriptionTiersModal() {
        this.subscriptionTiersModal.value && this.subscriptionTiersModal.change(!1);
    }
    async showUpgradeConfirmationModal(t) {
        return this.upgradeConfirmationModal.change({
            tier: t
        }), new Promise((e)=>this._upgradeConfirmationModalResolve = e);
    }
    async showServerUpgradeConfirmationModal(t) {
        return this._upgradeConfirmationModalResolve?.(!1), this.upgradeConfirmationModal.change({
            server: t
        }), new Promise((e)=>this._upgradeConfirmationModalResolve = e);
    }
    closeUpgradeConfirmationModal(t) {
        this._upgradeConfirmationModalResolve && (this._upgradeConfirmationModalResolve(t), this._upgradeConfirmationModalResolve = void 0, this.upgradeConfirmationModal.change(void 0));
    }
    showReportFeedbackModal(t) {
        this.reportFeedbackModal.change(t);
    }
    closeReportFeedbackModal() {
        this.reportFeedbackModal.value !== void 0 && this.reportFeedbackModal.change(void 0);
    }
    setLayoutSwitcherOpen(t) {
        this.layoutSwitcherOpen.value !== t && this.layoutSwitcherOpen.change(t);
    }
    setMenubarMenuActive(t) {
        this.menubarMenuActive.value !== t && this.menubarMenuActive.change(t);
    }
    incrementComposerDropdownMenuOpenCount() {
        this.composerDropdownMenuOpenCount.change(this.composerDropdownMenuOpenCount.value + 1);
    }
    decrementComposerDropdownMenuOpenCount() {
        const t = Math.max(0, this.composerDropdownMenuOpenCount.value - 1);
        t !== this.composerDropdownMenuOpenCount.value && this.composerDropdownMenuOpenCount.change(t);
    }
    showDocsModal() {
        return this.docsModal.change(!0), new Promise((t)=>this._docsModalResolve = t);
    }
    closeDocsModal() {
        this._docsModalResolve && (this._docsModalResolve(), this._docsModalResolve = void 0), this.docsModal.value && this.docsModal.change(!1);
    }
    showLocalAgentConfigurationModal() {
        this.localAgentConfigurationModal.value || this.localAgentConfigurationModal.change(!0);
    }
    closeLocalAgentConfigurationModal() {
        this.localAgentConfigurationModal.value && this.localAgentConfigurationModal.change(!1);
    }
    showPrivateInferenceDownloadPrompt() {
        return this._privateInferenceDownloadPromptPromise !== void 0 ? this._privateInferenceDownloadPromptPromise : (this.privateInferenceDownloadPrompt.change(!0), this._privateInferenceDownloadPromptPromise = new Promise((t)=>{
            this._privateInferenceDownloadPromptResolve = t;
        }), this._privateInferenceDownloadPromptPromise);
    }
    closePrivateInferenceDownloadPrompt(t) {
        const e = this._privateInferenceDownloadPromptResolve;
        this._privateInferenceDownloadPromptResolve = void 0, this._privateInferenceDownloadPromptPromise = void 0, this.privateInferenceDownloadPrompt.value && this.privateInferenceDownloadPrompt.change(!1), e?.(t);
    }
    triggerForceComposerDropdownRerender() {
        this.forceComposerDropdownRerender.change(this.forceComposerDropdownRerender.value + 1);
    }
    showErrorMetadata(t) {
        this.errorMetadata.change(t);
    }
    closeErrorMetadata() {
        this.errorMetadata.change({
            case: null,
            error: void 0
        });
    }
    setFeedbackState(t) {
        this.feedbackState.change(t);
    }
    setSettingsOpenData(t) {
        this.settingsOpenData.change(t);
    }
    setDialogData(t, e) {
        this.dialogResolve = e, this.dialogData.change(t);
    }
    clearDialogData() {
        this.dialogResolve = void 0, this.dialogData.change(void 0);
    }
}, bn(Z_, Ezd, 0, 1);

}
