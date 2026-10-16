import { gs, yt } from "./codicons.js";
import { EOo, tf } from "./composer_pb.js";
import { I_r, oMo, pa } from "./constants_8.js";
import { Mt } from "./index_197.js";
import { Ma, Ze, ut } from "./keyCodes.js";
import { E6e, x0n } from "./pinnedAgentsStorage.js";
import { Ct, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
var cDa, P2p, M2p, Mbi, uDa, D2p, _st, WGe, W0e, bst, xP, GW, N2p, L2p, Dbi, Nbi, DHr, NHr, PHt, MHt, O2p, Lbi, dDa, A0n, hDa, Obi, pDa, mDa, DHt, gDa, NHt, Fbi, Jne, fDa, LHt, Bbi, vDa, _Da, F2p, B2p, Ubi, yst, OHt, bDa, LHr, yDa, OHr, R0n, FHt, SDa, P0n, U2p, kDa, jbi, j2p, $bi, wDa, B2e, FHr, BHr, $2p, UHr, M0n, Hbi, jHr, $Hr, D0n, H2p, Wbi, N0n, Gbi, L0n, W2p, CDa, TDa, G2p, q2p, EDa, BHt, O0n, IDa, xDa, ADa, Sst, HHr, RDa, PDa, MDa, DDa, dbe, z2p, F0n, WHr, B0n, GHr, qHr, V2p, K2p, Y2p, X2p, Z2p, Q2p, NDa, J2p, LDa, ePp, ODa, FDa, tPp, AI1, nPp, iPp, rPp, RI1, sPp, oPp, aPp, lPp, cPp, uPp, dPp, hPp, zHr, qbi, UHt, BDa, pPp, mPp, gPp, UDa, VHr, KHr, jDa, fPp, vPp, U0n, _Pp, bPp, j0n, $Da, HDa, WDa, GDa, yPp, YHr;
export { $2p, $Da, $Hr, $bi, A0n, ADa, AI1, B0n, B2e, B2p, BDa, BHr, BHt, Bbi, CDa, D0n, D2p, DDa, DHr, DHt, Dbi, EDa, F0n, F2p, FDa, FHr, FHt, Fbi, G2p, GDa, GHr, GW, Gbi, H2p, HDa, HHr, Hbi, IDa, J2p, Jne, K2p, KHr, L0n, L2p, LDa, LHr, LHt, Lbi, M0n, M2p, MDa, MHt, Mbi, N0n, N2p, NDa, NHr, NHt, Nbi, O0n, O2p, ODa, OHr, OHt, Obi, P0n, P2p, PDa, PHt, Q2p, R0n, RDa, RI1, SDa, Sst, TDa, U0n, U2p, UDa, UHr, UHt, Ubi, V2p, VHr, W0e, W2p, WDa, WGe, WHr, Wbi, X2p, Y2p, YHr, Z2p, _Da, _Pp, _st, aPp, bDa, bPp, bst, cDa, cPp, dDa, dPp, dbe, ePp, fDa, fPp, gDa, gPp, hDa, hPp, iPp, j0n, j2p, jDa, jHr, jbi, kDa, lPp, mDa, mPp, nPp, oPp, pDa, pPp, q2p, qHr, qbi, rPp, sPp, tPp, uDa, uPp, vDa, vPp, wDa, xDa, xP, yDa, yPp, yst, z2p, zHr };
var __wakaru_Ef_initialized = false;
export function Ef() {
if (__wakaru_Ef_initialized) return;
__wakaru_Ef_initialized = true;
"use strict";
E(), Mt(), tf(), Pu(), gs(), pa(), Ma(), E6e(), cDa = "New Agent", P2p = 10, M2p = {
    none: "None",
    applying: "Applying",
    generating: "Generating",
    apply_pending: "Waiting to be applied",
    cancelled: "Cancelled",
    completed: "Completed",
    accepted: "Accepted",
    rejected: "Rejected",
    aborted: "Aborted",
    outdated: "Outdated"
}, Mbi = 1e5, uDa = 3, D2p = x0n, _st = 24, WGe = 4, W0e = "transparent", bst = "transparent", xP = 10, GW = 6, N2p = 400, L2p = 400, Dbi = 320, Nbi = 320, DHr = 800, NHr = 800, PHt = 20, MHt = 320, O2p = .9, Lbi = 8, dDa = 840, A0n = 450, hDa = 5, Obi = "New Project", pDa = "Show Chat History", mDa = "Show Chat History (Editor)", DHt = "composer.startComposerPrompt2", gDa = "composer.startComposerPrompt", NHt = "composer.addfilestocomposer", Fbi = "composer.addfilestonnewcomposer", Jne = "composer.showComposerHistory", fDa = "composer.showBackgroundAgentHistory", LHt = "composer.showComposerHistoryEditor", Bbi = I_r, vDa = "composer.selectPreviousComposer", _Da = "composer.selectNextComposer", F2p = "composer.selectPreviousSubComposerTab", B2p = "composer.selectNextSubComposerTab", Ubi = "composer.addsymbolstonewcomposer", yst = "composer.addsymbolstocomposer", OHt = "aichat.newfollowupaction", bDa = "composer.fixerrormessage", LHr = "composer.openAsPane", yDa = "composer.openAsBar", OHr = "composer.openChatAsEditor", R0n = "composer.exportChatAsMd", FHt = "composer.shareChat", SDa = "composer.forkSharedChat", P0n = "composer.copyRequestId", U2p = "composer.copyRequestIdFromPane", kDa = "composer.copyRequestIdFromEditor", jbi = "composer.reportFeedback", j2p = "chat.openCursorSettings", $bi = "composer.cancelChat", wDa = "composer.resumeCurrentChat", B2e = oMo, FHr = "composer.updateTitle", BHr = "composer.updateStatus", $2p = "composer.cycleMode", UHr = "composer.toggleChatAsEditor", M0n = "composer.closeComposerTab", Hbi = "composer.closeOtherComposerTabs", jHr = "composer.previousChatTab", $Hr = "composer.nextChatTab", D0n = "composer.openModelToggle", H2p = "composer.cycleModel", Wbi = "composer.cycleModelParameter", N0n = "composer.openModeMenu", Gbi = "composer.openAddContextMenu", L0n = "composer.openComposer", W2p = "composer.openComposerFromNotification", CDa = "composer.acceptPendingFromNotification", TDa = "composer.rejectPendingFromNotification", G2p = "composer.approveCloudApprovalFromNotification", q2p = "composer.denyCloudApprovalFromNotification", EDa = "composer.getComposerHandleById", BHt = "composer.cancelComposerStep", O0n = "composer.acceptComposerStep", IDa = "composer.approvePendingShellToolDecision", xDa = "composer.approvePendingShellToolDecisionAllowlist", ADa = "composer.skipPendingShellToolDecision", Sst = "composer.cancelComposerStepInputFocused", HHr = "composer.cancelTerminalToolCall", RDa = "composer.toggleVoiceDictation", PDa = "composer.resetMode", MDa = "composer.triggerCreateWorktreeButton", DDa = "composer.clearComposerTabs", dbe = "composer.createNewComposerTab", z2p = "workbench.action.backgroundComposer.createNewComposerTab", F0n = "composer.duplicateChat", WHr = "composer.renameChat", B0n = "composer.sendToAgent", GHr = "composer.handleBugBotDeeplink", qHr = "composer.handleBugBotMultipleDeeplinks", V2p = "composer.focusComposer", K2p = "composer.openTerminalInWorktree", Y2p = "composer.find.focus", X2p = "composer.find.hide", Z2p = "composer.find.next", Q2p = "composer.find.previous", NDa = "composer.getOrderedSelectedComposerIds", J2p = "workbench.action.chat.open", LDa = "workbench.action.chat.testOpenWithPrompt", ePp = "composer.testNotification", ODa = "Chat", FDa = yt.files, tPp = "workbench.panel.composerChatViewPane", AI1 = [
    EOo.ITERATE
], nPp = new Set([
    Ct.WEB_SEARCH,
    Ct.WEB_FETCH,
    Ct.LIST_DIR,
    Ct.LIST_DIR_V2,
    Ct.RIPGREP_SEARCH,
    Ct.RIPGREP_RAW_SEARCH,
    Ct.SEMANTIC_SEARCH_FULL,
    Ct.FILE_SEARCH,
    Ct.GLOB_FILE_SEARCH,
    Ct.READ_SEMSEARCH_FILES,
    Ct.SEARCH_SYMBOLS,
    Ct.GO_TO_DEFINITION,
    Ct.READ_FILE,
    Ct.READ_FILE_V2,
    Ct.TODO_READ,
    Ct.FETCH_RULES,
    Ct.READ_LINTS,
    Ct.AWAIT,
    Ct.GET_MCP_TOOLS
]), iPp = ut.CtrlCmd | Ze.KeyL, rPp = ut.CtrlCmd | Ze.KeyI, RI1 = ut.CtrlCmd | ut.Shift | Ze.KeyL, sPp = ut.CtrlCmd | ut.Shift | Ze.KeyL, oPp = ut.CtrlCmd | ut.Shift | Ze.KeyD, aPp = ut.CtrlCmd | ut.Shift | Ze.Enter, lPp = 5, cPp = 12, uPp = 100, dPp = 200, hPp = 240, zHr = 3.5, qbi = "var(--composer-human-message-content-padding-block, 8px)", UHt = "var(--composer-human-message-line-height, 22px)", BDa = `calc(${UHt} * ${zHr})`, pPp = zHr % 1 + 1, mPp = `calc(${UHt} * ${pPp} + ${qbi})`, gPp = 12, UDa = 1, VHr = "cursorAuth/onboardingDate", KHr = "cursorAuth/changeManagementCodeSnippets", jDa = "cursorAuth/workspaceOpenedDate", fPp = "cmdK.resolveConflictInCmdK", vPp = "composer.resolveAllConflictsInChat", U0n = "composer.showViewMenu", _Pp = "developer.openAgentTranscript", bPp = "developer.simulateSlowProviderToggle", j0n = "developer.exportChat", $Da = "developer.importChat", HDa = "developer.bulkImportChats", WDa = [
    dbe,
    "composer.createNewWithPrevContext",
    "workbench.action.backgroundComposer.createNewComposerWithPrevContext",
    z2p,
    fDa,
    "workbench.action.backgroundComposer.showBackgroundAgentHistory"
], GDa = 0, yPp = 14, YHr = "pane";

}
