import { Gt, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Ks, Wr } from "./notification.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Fb, $zr;
export { $zr, Fb };
var __wakaru_LS_initialized = false;
export function LS() {
if (__wakaru_LS_initialized) return;
__wakaru_LS_initialized = true;
"use strict";
E(), It(), Qe(), Rn(), Gt(), Ks(), Fb = Il("composerEventService"), $zr = class extends st {
    constructor(t){
        super(), this._notificationService = t, this._onContextRemovedEmitter = this._register(new tt), this.onContextRemoved = this._onContextRemovedEmitter.event, this._onShouldShowPreviewEmitter = this._register(new tt), this.onShouldShowPreview = this._onShouldShowPreviewEmitter.event, this._onShouldForceTextEmitter = this._register(new tt), this.onShouldForceText = this._onShouldForceTextEmitter.event, this._onDidAiEditFileEmitter = this._register(new tt), this.onDidAiEditFile = this._onDidAiEditFileEmitter.event, this._onDidAcceptDiffWithoutInlineEmitter = this._register(new tt), this.onDidAcceptDiffWithoutInline = this._onDidAcceptDiffWithoutInlineEmitter.event, this._onDidFinishAiEditToolCallEmitter = this._register(new tt), this.onDidFinishAiEditToolCall = this._onDidFinishAiEditToolCallEmitter.event, this._onDidSendRequestEmitter = this._register(new tt), this.onDidSendRequest = this._onDidSendRequestEmitter.event, this._onDidSendRequestForWorkspaceEmitter = this._register(new tt), this.onDidSendRequestForWorkspace = this._onDidSendRequestForWorkspaceEmitter.event, this._onMaybeRunOnComposerSettledEmitter = this._register(new tt), this.onMaybeRunOnComposerSettled = this._onMaybeRunOnComposerSettledEmitter.event, this._onDidContextChangeEmitter = this._register(new tt), this.onDidContextChange = this._onDidContextChangeEmitter.event, this._onDidPasteEmitter = this._register(new tt), this.onDidPaste = this._onDidPasteEmitter.event, this._onDidPasteImageEmitter = this._register(new tt), this.onDidPasteImage = this._onDidPasteImageEmitter.event, this._onShouldSwapComposersEmitter = this._register(new tt), this.onShouldSwapComposers = this._onShouldSwapComposersEmitter.event, this._onDidChangeUnifiedModeEmitter = this._register(new tt), this.onDidChangeUnifiedMode = this._onDidChangeUnifiedModeEmitter.event, this._onDidChangeAgentApprovalModeEmitter = this._register(new tt), this.onDidChangeAgentApprovalMode = this._onDidChangeAgentApprovalModeEmitter.event, this._onDidComposerViewsServiceFinishInitializingEmitter = this._register(new tt), this.onDidComposerViewsServiceFinishInitializing = this._onDidComposerViewsServiceFinishInitializingEmitter.event, this._onDidComposerServiceFinishInitializingEmitter = this._register(new tt), this.onDidComposerServiceFinishInitializing = this._onDidComposerServiceFinishInitializingEmitter.event, this._onWindowInWindowChangedTitleBarEmitter = this._register(new tt), this.onWindowInWindowChangedTitleBar = this._onWindowInWindowChangedTitleBarEmitter.event, this._onDidRegisterNewCodeBlockEmitter = this._register(new tt), this.onDidRegisterNewCodeBlock = this._onDidRegisterNewCodeBlockEmitter.event, this._onResetComposerEmitter = this._register(new tt), this.onResetComposer = this._onResetComposerEmitter.event, this._onDidFinishStreamChatEmitter = this._register(new tt), this.onDidFinishStreamChat = this._onDidFinishStreamChatEmitter.event, this._onDidFinishStreamChatForWorkspaceEmitter = this._register(new tt), this.onDidFinishStreamChatForWorkspace = this._onDidFinishStreamChatForWorkspaceEmitter.event, this._onDidDeleteFileToolCallEmitter = this._register(new tt), this.onDidDeleteFileToolCall = this._onDidDeleteFileToolCallEmitter.event, this._onDidPersistComposerEmitter = this._register(new tt), this.onDidPersistComposer = this._onDidPersistComposerEmitter.event, this._onDidPersistCompletedTurnEmitter = this._register(new tt), this.onDidPersistCompletedTurn = this._onDidPersistCompletedTurnEmitter.event, this._onDidDeleteComposerEmitter = this._register(new tt), this.onDidDeleteComposer = this._onDidDeleteComposerEmitter.event, this._onDidFilesChangeEmitter = this._register(new tt), this.onDidFilesChange = this._onDidFilesChangeEmitter.event, this._onNewFileDeletedEmitter = this._register(new tt), this.onNewFileDeleted = this._onNewFileDeletedEmitter.event, this._onDidDeleteCanvasFileEmitter = this._register(new tt), this.onDidDeleteCanvasFile = this._onDidDeleteCanvasFileEmitter.event, this._onToRemoveDiffsEmitter = this._register(new tt), this.onToRemoveDiffs = this._onToRemoveDiffsEmitter.event, this._onDidUpdateAgentLayoutPaneEmitter = this._register(new tt), this.onDidUpdateAgentLayoutPane = this._onDidUpdateAgentLayoutPaneEmitter.event, this._onDidRequestOpenBranchMenuEmitter = this._register(new tt), this.onDidRequestOpenBranchMenu = this._onDidRequestOpenBranchMenuEmitter.event, this._onDidRequestSwitchSubComposerTabEmitter = this._register(new tt), this.onDidRequestSwitchSubComposerTab = this._onDidRequestSwitchSubComposerTabEmitter.event, this._onDidLoadComposerEmitter = this._register(new tt), this.onDidLoadComposer = this._onDidLoadComposerEmitter.event, this._onDidComposerStopGeneratingEmitter = this._register(new tt), this.onDidComposerStopGenerating = this._onDidComposerStopGeneratingEmitter.event, this._onDidRequestAppendImagesEmitter = this._register(new tt), this.onDidRequestAppendImages = this._onDidRequestAppendImagesEmitter.event, this._isComposerViewsServiceInitialized = !1, this._isComposerServiceInitialized = !1;
    }
    fireContextRemoved(t) {
        this._onContextRemovedEmitter.fire(t);
    }
    fireShouldShowPreview(t) {
        this._onShouldShowPreviewEmitter.fire(t);
    }
    fireShouldForceText(t) {
        this._onShouldForceTextEmitter.fire(t);
    }
    fireDidAiEditFile(t) {
        this._onDidAiEditFileEmitter.fire(t);
    }
    fireDidAcceptDiffWithoutInline(t) {
        this._onDidAcceptDiffWithoutInlineEmitter.fire(t);
    }
    fireDidFinishAiEditToolCall(t) {
        this._onDidFinishAiEditToolCallEmitter.fire(t);
    }
    fireDidSendRequest(t) {
        this._onDidSendRequestEmitter.fire(t);
    }
    fireDidSendRequestForWorkspace(t) {
        this._onDidSendRequestForWorkspaceEmitter.fire(t);
    }
    fireMaybeRunOnComposerSettled(t) {
        this._onMaybeRunOnComposerSettledEmitter.fire(t);
    }
    fireDidContextChange(t) {
        this._onDidContextChangeEmitter.fire(t);
    }
    fireDidPaste(t) {
        this._onDidPasteEmitter.fire(t);
    }
    fireDidPasteImage(t) {
        this._onDidPasteImageEmitter.fire(t);
    }
    fireShouldSwapComposers(t) {
        this._onShouldSwapComposersEmitter.fire(t);
    }
    fireOnDidChangeUnifiedMode(t) {
        this._onDidChangeUnifiedModeEmitter.fire(t);
    }
    fireDidChangeAgentApprovalMode(t) {
        this._onDidChangeAgentApprovalModeEmitter.fire(t);
    }
    fireDidComposerViewsServiceFinishInitializing() {
        this._isComposerViewsServiceInitialized = !0, this._onDidComposerViewsServiceFinishInitializingEmitter.fire();
    }
    fireDidComposerServiceFinishInitializing() {
        this._isComposerServiceInitialized = !0, this._onDidComposerServiceFinishInitializingEmitter.fire();
    }
    fireDidRegisterNewCodeBlock(t) {
        this._onDidRegisterNewCodeBlockEmitter.fire(t);
    }
    fireResetComposer() {
        this._onResetComposerEmitter.fire();
    }
    fireWindowInWindowChangedTitleBar() {
        this._onWindowInWindowChangedTitleBarEmitter.fire();
    }
    fireDidFinishStreamChat(t) {
        this._onDidFinishStreamChatEmitter.fire(t);
    }
    fireDidFinishStreamChatForWorkspace(t) {
        this._onDidFinishStreamChatForWorkspaceEmitter.fire(t);
    }
    fireDidDeleteFileToolCall(t) {
        this._onDidDeleteFileToolCallEmitter.fire(t);
    }
    fireDidPersistComposer(t) {
        this._onDidPersistComposerEmitter.fire(t);
    }
    fireDidPersistCompletedTurn(t) {
        this._onDidPersistCompletedTurnEmitter.fire(t);
    }
    fireDidDeleteComposer(t) {
        this._onDidDeleteComposerEmitter.fire(t);
    }
    fireDidComposerStopGenerating(t) {
        this._onDidComposerStopGeneratingEmitter.fire(t);
    }
    fireDidRequestAppendImages(t) {
        this._onDidRequestAppendImagesEmitter.fire(t);
    }
    fireNewFileDeleted(t) {
        this._onNewFileDeletedEmitter.fire(t);
    }
    fireDidDeleteCanvasFile(t) {
        this._onDidDeleteCanvasFileEmitter.fire(t);
    }
    isComposerViewsServiceInitialized() {
        return this._isComposerViewsServiceInitialized;
    }
    isComposerServiceInitialized() {
        return this._isComposerServiceInitialized;
    }
    fireDidFilesChange(t) {
        this._onDidFilesChangeEmitter.fire(t);
    }
    fireToRemoveDiffs(t) {
        this._onToRemoveDiffsEmitter.fire(t);
    }
    fireDidUpdateAgentLayoutPane(t) {
        this._onDidUpdateAgentLayoutPaneEmitter.fire(t);
    }
    fireDidRequestOpenBranchMenu(t) {
        this._onDidRequestOpenBranchMenuEmitter.fire(t);
    }
    fireDidRequestSwitchSubComposerTab(t) {
        this._onDidRequestSwitchSubComposerTabEmitter.fire(t);
    }
    fireDidLoadComposer(t) {
        this._onDidLoadComposerEmitter.fire(t);
    }
}, $zr = Re([
    F(0, Wr)
], $zr), bn(Fb, $zr, 0, 1);

}
