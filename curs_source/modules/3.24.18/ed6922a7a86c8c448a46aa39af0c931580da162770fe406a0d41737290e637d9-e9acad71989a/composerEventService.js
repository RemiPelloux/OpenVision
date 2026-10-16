import { Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { di, ji } from "./notification.js";
import { mn, pd } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Zy, y7i;
export { Zy, y7i };
var __wakaru_yC_initialized = false;
export function yC() {
if (__wakaru_yC_initialized) return;
__wakaru_yC_initialized = true;
"use strict";
x(), Ze(), Se(), Pn(), bt(), ji(), Zy = pd("composerEventService"), y7i = class extends we {
    constructor(e){
        super(), this._notificationService = e, this._onContextRemovedEmitter = this._register(new ve), this.onContextRemoved = this._onContextRemovedEmitter.event, this._onShouldShowPreviewEmitter = this._register(new ve), this.onShouldShowPreview = this._onShouldShowPreviewEmitter.event, this._onShouldForceTextEmitter = this._register(new ve), this.onShouldForceText = this._onShouldForceTextEmitter.event, this._onDidAiEditFileEmitter = this._register(new ve), this.onDidAiEditFile = this._onDidAiEditFileEmitter.event, this._onDidAcceptDiffWithoutInlineEmitter = this._register(new ve), this.onDidAcceptDiffWithoutInline = this._onDidAcceptDiffWithoutInlineEmitter.event, this._onDidFinishAiEditToolCallEmitter = this._register(new ve), this.onDidFinishAiEditToolCall = this._onDidFinishAiEditToolCallEmitter.event, this._onDidSendRequestEmitter = this._register(new ve), this.onDidSendRequest = this._onDidSendRequestEmitter.event, this._onDidSendRequestForWorkspaceEmitter = this._register(new ve), this.onDidSendRequestForWorkspace = this._onDidSendRequestForWorkspaceEmitter.event, this._onMaybeRunOnComposerSettledEmitter = this._register(new ve), this.onMaybeRunOnComposerSettled = this._onMaybeRunOnComposerSettledEmitter.event, this._onDidContextChangeEmitter = this._register(new ve), this.onDidContextChange = this._onDidContextChangeEmitter.event, this._onDidPasteEmitter = this._register(new ve), this.onDidPaste = this._onDidPasteEmitter.event, this._onDidPasteImageEmitter = this._register(new ve), this.onDidPasteImage = this._onDidPasteImageEmitter.event, this._onShouldSwapComposersEmitter = this._register(new ve), this.onShouldSwapComposers = this._onShouldSwapComposersEmitter.event, this._onDidChangeUnifiedModeEmitter = this._register(new ve), this.onDidChangeUnifiedMode = this._onDidChangeUnifiedModeEmitter.event, this._onDidChangeAgentApprovalModeEmitter = this._register(new ve), this.onDidChangeAgentApprovalMode = this._onDidChangeAgentApprovalModeEmitter.event, this._onDidComposerViewsServiceFinishInitializingEmitter = this._register(new ve), this.onDidComposerViewsServiceFinishInitializing = this._onDidComposerViewsServiceFinishInitializingEmitter.event, this._onDidComposerServiceFinishInitializingEmitter = this._register(new ve), this.onDidComposerServiceFinishInitializing = this._onDidComposerServiceFinishInitializingEmitter.event, this._onWindowInWindowChangedTitleBarEmitter = this._register(new ve), this.onWindowInWindowChangedTitleBar = this._onWindowInWindowChangedTitleBarEmitter.event, this._onDidRegisterNewCodeBlockEmitter = this._register(new ve), this.onDidRegisterNewCodeBlock = this._onDidRegisterNewCodeBlockEmitter.event, this._onResetComposerEmitter = this._register(new ve), this.onResetComposer = this._onResetComposerEmitter.event, this._onDidFinishStreamChatEmitter = this._register(new ve), this.onDidFinishStreamChat = this._onDidFinishStreamChatEmitter.event, this._onDidFinishStreamChatForWorkspaceEmitter = this._register(new ve), this.onDidFinishStreamChatForWorkspace = this._onDidFinishStreamChatForWorkspaceEmitter.event, this._onDidDeleteFileToolCallEmitter = this._register(new ve), this.onDidDeleteFileToolCall = this._onDidDeleteFileToolCallEmitter.event, this._onDidPersistComposerEmitter = this._register(new ve), this.onDidPersistComposer = this._onDidPersistComposerEmitter.event, this._onDidPersistCompletedTurnEmitter = this._register(new ve), this.onDidPersistCompletedTurn = this._onDidPersistCompletedTurnEmitter.event, this._onDidDeleteComposerEmitter = this._register(new ve), this.onDidDeleteComposer = this._onDidDeleteComposerEmitter.event, this._onDidFilesChangeEmitter = this._register(new ve), this.onDidFilesChange = this._onDidFilesChangeEmitter.event, this._onNewFileDeletedEmitter = this._register(new ve), this.onNewFileDeleted = this._onNewFileDeletedEmitter.event, this._onDidDeleteCanvasFileEmitter = this._register(new ve), this.onDidDeleteCanvasFile = this._onDidDeleteCanvasFileEmitter.event, this._onToRemoveDiffsEmitter = this._register(new ve), this.onToRemoveDiffs = this._onToRemoveDiffsEmitter.event, this._onDidUpdateAgentLayoutPaneEmitter = this._register(new ve), this.onDidUpdateAgentLayoutPane = this._onDidUpdateAgentLayoutPaneEmitter.event, this._onDidRequestOpenBranchMenuEmitter = this._register(new ve), this.onDidRequestOpenBranchMenu = this._onDidRequestOpenBranchMenuEmitter.event, this._onDidRequestSwitchSubComposerTabEmitter = this._register(new ve), this.onDidRequestSwitchSubComposerTab = this._onDidRequestSwitchSubComposerTabEmitter.event, this._onDidLoadComposerEmitter = this._register(new ve), this.onDidLoadComposer = this._onDidLoadComposerEmitter.event, this._onDidComposerStopGeneratingEmitter = this._register(new ve), this.onDidComposerStopGenerating = this._onDidComposerStopGeneratingEmitter.event, this._onDidRequestAppendImagesEmitter = this._register(new ve), this.onDidRequestAppendImages = this._onDidRequestAppendImagesEmitter.event, this._isComposerViewsServiceInitialized = !1, this._isComposerServiceInitialized = !1;
    }
    fireContextRemoved(e) {
        this._onContextRemovedEmitter.fire(e);
    }
    fireShouldShowPreview(e) {
        this._onShouldShowPreviewEmitter.fire(e);
    }
    fireShouldForceText(e) {
        this._onShouldForceTextEmitter.fire(e);
    }
    fireDidAiEditFile(e) {
        this._onDidAiEditFileEmitter.fire(e);
    }
    fireDidAcceptDiffWithoutInline(e) {
        this._onDidAcceptDiffWithoutInlineEmitter.fire(e);
    }
    fireDidFinishAiEditToolCall(e) {
        this._onDidFinishAiEditToolCallEmitter.fire(e);
    }
    fireDidSendRequest(e) {
        this._onDidSendRequestEmitter.fire(e);
    }
    fireDidSendRequestForWorkspace(e) {
        this._onDidSendRequestForWorkspaceEmitter.fire(e);
    }
    fireMaybeRunOnComposerSettled(e) {
        this._onMaybeRunOnComposerSettledEmitter.fire(e);
    }
    fireDidContextChange(e) {
        this._onDidContextChangeEmitter.fire(e);
    }
    fireDidPaste(e) {
        this._onDidPasteEmitter.fire(e);
    }
    fireDidPasteImage(e) {
        this._onDidPasteImageEmitter.fire(e);
    }
    fireShouldSwapComposers(e) {
        this._onShouldSwapComposersEmitter.fire(e);
    }
    fireOnDidChangeUnifiedMode(e) {
        this._onDidChangeUnifiedModeEmitter.fire(e);
    }
    fireDidChangeAgentApprovalMode(e) {
        this._onDidChangeAgentApprovalModeEmitter.fire(e);
    }
    fireDidComposerViewsServiceFinishInitializing() {
        this._isComposerViewsServiceInitialized = !0, this._onDidComposerViewsServiceFinishInitializingEmitter.fire();
    }
    fireDidComposerServiceFinishInitializing() {
        this._isComposerServiceInitialized = !0, this._onDidComposerServiceFinishInitializingEmitter.fire();
    }
    fireDidRegisterNewCodeBlock(e) {
        this._onDidRegisterNewCodeBlockEmitter.fire(e);
    }
    fireResetComposer() {
        this._onResetComposerEmitter.fire();
    }
    fireWindowInWindowChangedTitleBar() {
        this._onWindowInWindowChangedTitleBarEmitter.fire();
    }
    fireDidFinishStreamChat(e) {
        this._onDidFinishStreamChatEmitter.fire(e);
    }
    fireDidFinishStreamChatForWorkspace(e) {
        this._onDidFinishStreamChatForWorkspaceEmitter.fire(e);
    }
    fireDidDeleteFileToolCall(e) {
        this._onDidDeleteFileToolCallEmitter.fire(e);
    }
    fireDidPersistComposer(e) {
        this._onDidPersistComposerEmitter.fire(e);
    }
    fireDidPersistCompletedTurn(e) {
        this._onDidPersistCompletedTurnEmitter.fire(e);
    }
    fireDidDeleteComposer(e) {
        this._onDidDeleteComposerEmitter.fire(e);
    }
    fireDidComposerStopGenerating(e) {
        this._onDidComposerStopGeneratingEmitter.fire(e);
    }
    fireDidRequestAppendImages(e) {
        this._onDidRequestAppendImagesEmitter.fire(e);
    }
    fireNewFileDeleted(e) {
        this._onNewFileDeletedEmitter.fire(e);
    }
    fireDidDeleteCanvasFile(e) {
        this._onDidDeleteCanvasFileEmitter.fire(e);
    }
    isComposerViewsServiceInitialized() {
        return this._isComposerViewsServiceInitialized;
    }
    isComposerServiceInitialized() {
        return this._isComposerServiceInitialized;
    }
    fireDidFilesChange(e) {
        this._onDidFilesChangeEmitter.fire(e);
    }
    fireToRemoveDiffs(e) {
        this._onToRemoveDiffsEmitter.fire(e);
    }
    fireDidUpdateAgentLayoutPane(e) {
        this._onDidUpdateAgentLayoutPaneEmitter.fire(e);
    }
    fireDidRequestOpenBranchMenu(e) {
        this._onDidRequestOpenBranchMenuEmitter.fire(e);
    }
    fireDidRequestSwitchSubComposerTab(e) {
        this._onDidRequestSwitchSubComposerTabEmitter.fire(e);
    }
    fireDidLoadComposer(e) {
        this._onDidLoadComposerEmitter.fire(e);
    }
}, y7i = ie([
    C(0, di)
], y7i), mn(Zy, y7i, 0, 1);

}
