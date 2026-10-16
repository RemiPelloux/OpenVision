import { Se, we } from "./HVr.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, pd } from "./qIc.js";
import { av, sy } from "./solidEventsWrapper.js";
import { x } from "./tslib.es6.js";
var byi, XT, Z7c;
export { XT, Z7c, byi };
var __wakaru_TM_initialized = false;
export function TM() {
if (__wakaru_TM_initialized) return;
__wakaru_TM_initialized = true;
"use strict";
x(), Se(), Pn(), Ze(), sy(), byi = "dialog-prompt-preview", XT = pd("uiOverlayService"), Z7c = class extends we {
    constructor(){
        super(), this.docsLinkDialog = this._register(new av(void 0)), this.mentionLinkToolbar = this._register(new av(void 0)), this.inviteModal = this._register(new av(!1)), this.reportIssueModal = this._register(new av(!1)), this.manageSharingModal = this._register(new av(void 0)), this.isTestingChangelogComponent = this._register(new av(!1)), this.isTestingUpdateButton = this._register(new av(!1)), this.focusSettingsSearchRequest = this._register(new av(0)), this.focusCustomizeSearchRequest = this._register(new av(0)), this.usageBasedPricingModal = this._register(new av(void 0)), this.subscriptionTiersModal = this._register(new av(!1)), this.githubConnectModal = this._register(new av(void 0)), this.steerFromCloudModal = this._register(new av(!1)), this.upgradeConfirmationModal = this._register(new av(void 0)), this.reportFeedbackModal = this._register(new av(void 0)), this.docsModal = this._register(new av(!1)), this.localAgentConfigurationModal = this._register(new av(!1)), this.privateInferenceDownloadPrompt = this._register(new av(!1)), this.forceComposerDropdownRerender = this._register(new av(1)), this.composerDropdownMenuOpenCount = this._register(new av(0)), this.layoutSwitcherOpen = this._register(new av(!1)), this.menubarMenuActive = this._register(new av(!1)), this.errorMetadata = this._register(new av({
            case: null,
            error: void 0
        })), this.shouldBlockNewPanelsFromPoppingUpIfTimeIsLessThan = 0, this.feedbackState = this._register(new av({
            description: void 0,
            type: void 0,
            screenshots: []
        })), this.settingsOpenData = this._register(new av(void 0)), this.dialogData = this._register(new av(void 0));
    }
    get newDoc() {
        return this._newDoc;
    }
    setNewDoc(e) {
        this._newDoc = e;
    }
    async showDocsLinkConfirmation(e) {
        return this.docsLinkDialog.change({
            link: e
        }), new Promise((t)=>this._docsLinkDialogResolve = t);
    }
    closeDocsLinkConfirmation(e) {
        this._docsLinkDialogResolve && (this._docsLinkDialogResolve(e), this._docsLinkDialogResolve = void 0, this.docsLinkDialog.change(void 0));
    }
    showMentionLinkToolbar(e) {
        return this.mentionLinkToolbar.change(e), new Promise((t)=>this._mentionLinkToolbarResolve = t);
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
    showManageSharingModal(e) {
        this.manageSharingModal.change(e);
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
    showUsageBasedPricingModal(e) {
        this.usageBasedPricingModal.change(e);
    }
    closeUsageBasedPricingModal() {
        this.usageBasedPricingModal.value !== void 0 && this.usageBasedPricingModal.change(void 0);
    }
    showSubscriptionTiersModal() {
        this.subscriptionTiersModal.value || this.subscriptionTiersModal.change(!0);
    }
    showGithubConnectModal(e) {
        this.githubConnectModal.change(e);
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
    async showUpgradeConfirmationModal(e) {
        return this.upgradeConfirmationModal.change({
            tier: e
        }), new Promise((t)=>this._upgradeConfirmationModalResolve = t);
    }
    async showServerUpgradeConfirmationModal(e) {
        return this._upgradeConfirmationModalResolve?.(!1), this.upgradeConfirmationModal.change({
            server: e
        }), new Promise((t)=>this._upgradeConfirmationModalResolve = t);
    }
    closeUpgradeConfirmationModal(e) {
        this._upgradeConfirmationModalResolve && (this._upgradeConfirmationModalResolve(e), this._upgradeConfirmationModalResolve = void 0, this.upgradeConfirmationModal.change(void 0));
    }
    showReportFeedbackModal(e) {
        this.reportFeedbackModal.change(e);
    }
    closeReportFeedbackModal() {
        this.reportFeedbackModal.value !== void 0 && this.reportFeedbackModal.change(void 0);
    }
    setLayoutSwitcherOpen(e) {
        this.layoutSwitcherOpen.value !== e && this.layoutSwitcherOpen.change(e);
    }
    setMenubarMenuActive(e) {
        this.menubarMenuActive.value !== e && this.menubarMenuActive.change(e);
    }
    incrementComposerDropdownMenuOpenCount() {
        this.composerDropdownMenuOpenCount.change(this.composerDropdownMenuOpenCount.value + 1);
    }
    decrementComposerDropdownMenuOpenCount() {
        const e = Math.max(0, this.composerDropdownMenuOpenCount.value - 1);
        e !== this.composerDropdownMenuOpenCount.value && this.composerDropdownMenuOpenCount.change(e);
    }
    showDocsModal() {
        return this.docsModal.change(!0), new Promise((e)=>this._docsModalResolve = e);
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
        return this._privateInferenceDownloadPromptPromise !== void 0 ? this._privateInferenceDownloadPromptPromise : (this.privateInferenceDownloadPrompt.change(!0), this._privateInferenceDownloadPromptPromise = new Promise((e)=>{
            this._privateInferenceDownloadPromptResolve = e;
        }), this._privateInferenceDownloadPromptPromise);
    }
    closePrivateInferenceDownloadPrompt(e) {
        const t = this._privateInferenceDownloadPromptResolve;
        this._privateInferenceDownloadPromptResolve = void 0, this._privateInferenceDownloadPromptPromise = void 0, this.privateInferenceDownloadPrompt.value && this.privateInferenceDownloadPrompt.change(!1), t?.(e);
    }
    triggerForceComposerDropdownRerender() {
        this.forceComposerDropdownRerender.change(this.forceComposerDropdownRerender.value + 1);
    }
    showErrorMetadata(e) {
        this.errorMetadata.change(e);
    }
    closeErrorMetadata() {
        this.errorMetadata.change({
            case: null,
            error: void 0
        });
    }
    setFeedbackState(e) {
        this.feedbackState.change(e);
    }
    setSettingsOpenData(e) {
        this.settingsOpenData.change(e);
    }
    setDialogData(e, t) {
        this.dialogResolve = t, this.dialogData.change(e);
    }
    clearDialogData() {
        this.dialogResolve = void 0, this.dialogData.change(void 0);
    }
}, mn(XT, Z7c, 0, 1);

}
