import { Pe, _i } from "./codicons.js";
import { $3s, Jm } from "./composer_pb.js";
import { SKr, So, cgi } from "./constants_8.js";
import { mi } from "./index_188.js";
import { Ie, Pr, fe } from "./keyCodes.js";
import { p9i, sQe } from "./pinnedAgentsStorage.js";
import { nt, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
var X7s, BSu, USu, $An, Z7s, $Su, Z6e, dMe, Que, Q6e, Ox, T6, HSu, WSu, HAn, WAn, m9i, g9i, Kbt, Ybt, GSu, GAn, Q7s, U8t, $8t, J7s, e$s, t$s, Xbt, n$s, Zbt, VAn, Nj, i$s, Qbt, jAn, r$s, s$s, VSu, jSu, qAn, oQe, Jbt, o$s, f9i, a$s, v9i, H8t, W8t, c$s, G8t, qSu, l$s, zAn, zSu, KAn, u$s, Ove, _9i, b9i, KSu, y9i, V8t, YAn, S9i, k9i, j8t, YSu, w9i, q8t, XAn, z8t, XSu, d$s, h$s, ZSu, QSu, p$s, eyt, K8t, m$s, g$s, f$s, J6e, C9i, v$s, _$s, b$s, y$s, bse, JSu, Y8t, T9i, X8t, S$s, k$s, eku, tku, nku, iku, rku, sku, w$s, oku, C$s, aku, T$s, E$s, cku, ccv, lku, uku, dku, lcv, hku, pku, mku, gku, fku, vku, _ku, bku, E9i, ZAn, tyt, x$s, yku, Sku, kku, I$s, x9i, I9i, A$s, wku, Cku, Z8t, Tku, Eku, Q8t, R$s, D$s, M$s, P$s, xku, Iku;
export { $8t, $An, $Su, A$s, BSu, C$s, C9i, Cku, D$s, E$s, E9i, Eku, G8t, GAn, GSu, H8t, HAn, HSu, I$s, I9i, Iku, J6e, J7s, JSu, Jbt, K8t, KAn, KSu, Kbt, M$s, Nj, Ove, Ox, P$s, Q6e, Q7s, Q8t, QSu, Qbt, Que, R$s, S$s, S9i, Sku, T$s, T6, T9i, Tku, U8t, USu, V8t, VAn, VSu, W8t, WAn, WSu, X7s, X8t, XAn, XSu, Xbt, Y8t, YAn, YSu, Ybt, Z6e, Z7s, Z8t, ZAn, ZSu, Zbt, _$s, _9i, _ku, a$s, aku, b$s, b9i, bku, bse, c$s, ccv, cku, d$s, dMe, dku, e$s, eku, eyt, f$s, f9i, fku, g$s, g9i, gku, h$s, hku, i$s, iku, j8t, jAn, jSu, k$s, k9i, kku, l$s, lcv, lku, m$s, m9i, mku, n$s, nku, o$s, oQe, oku, p$s, pku, q8t, qAn, qSu, r$s, rku, s$s, sku, t$s, tku, tyt, u$s, uku, v$s, v9i, vku, w$s, w9i, wku, x$s, x9i, xku, y$s, y9i, yku, z8t, zAn, zSu };
var __wakaru_eg_initialized = false;
export function eg() {
if (__wakaru_eg_initialized) return;
__wakaru_eg_initialized = true;
"use strict";
x(), mi(), Jm(), ql(), _i(), So(), Pr(), sQe(), X7s = "New Agent", BSu = 10, USu = {
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
}, $An = 1e5, Z7s = 3, $Su = p9i, Z6e = 24, dMe = 4, Que = "transparent", Q6e = "transparent", Ox = 10, T6 = 6, HSu = 400, WSu = 400, HAn = 320, WAn = 320, m9i = 800, g9i = 800, Kbt = 20, Ybt = 320, GSu = .9, GAn = 8, Q7s = 840, U8t = 450, $8t = 5, J7s = "New Project", e$s = "Show Chat History", t$s = "Show Chat History (Editor)", Xbt = "composer.startComposerPrompt2", n$s = "composer.startComposerPrompt", Zbt = "composer.addfilestocomposer", VAn = "composer.addfilestonnewcomposer", Nj = "composer.showComposerHistory", i$s = "composer.showBackgroundAgentHistory", Qbt = "composer.showComposerHistoryEditor", jAn = cgi, r$s = "composer.selectPreviousComposer", s$s = "composer.selectNextComposer", VSu = "composer.selectPreviousSubComposerTab", jSu = "composer.selectNextSubComposerTab", qAn = "composer.addsymbolstonewcomposer", oQe = "composer.addsymbolstocomposer", Jbt = "aichat.newfollowupaction", o$s = "composer.fixerrormessage", f9i = "composer.openAsPane", a$s = "composer.openAsBar", v9i = "composer.openChatAsEditor", H8t = "composer.exportChatAsMd", W8t = "composer.shareChat", c$s = "composer.forkSharedChat", G8t = "composer.copyRequestId", qSu = "composer.copyRequestIdFromPane", l$s = "composer.copyRequestIdFromEditor", zAn = "composer.reportFeedback", zSu = "chat.openCursorSettings", KAn = "composer.cancelChat", u$s = "composer.resumeCurrentChat", Ove = SKr, _9i = "composer.updateTitle", b9i = "composer.updateStatus", KSu = "composer.cycleMode", y9i = "composer.toggleChatAsEditor", V8t = "composer.closeComposerTab", YAn = "composer.closeOtherComposerTabs", S9i = "composer.previousChatTab", k9i = "composer.nextChatTab", j8t = "composer.openModelToggle", YSu = "composer.cycleModel", w9i = "composer.cycleModelParameter", q8t = "composer.openModeMenu", XAn = "composer.openAddContextMenu", z8t = "composer.openComposer", XSu = "composer.openComposerFromNotification", d$s = "composer.acceptPendingFromNotification", h$s = "composer.rejectPendingFromNotification", ZSu = "composer.approveCloudApprovalFromNotification", QSu = "composer.denyCloudApprovalFromNotification", p$s = "composer.getComposerHandleById", eyt = "composer.cancelComposerStep", K8t = "composer.acceptComposerStep", m$s = "composer.approvePendingShellToolDecision", g$s = "composer.approvePendingShellToolDecisionAllowlist", f$s = "composer.skipPendingShellToolDecision", J6e = "composer.cancelComposerStepInputFocused", C9i = "composer.cancelTerminalToolCall", v$s = "composer.toggleVoiceDictation", _$s = "composer.resetMode", b$s = "composer.triggerCreateWorktreeButton", y$s = "composer.clearComposerTabs", bse = "composer.createNewComposerTab", JSu = "workbench.action.backgroundComposer.createNewComposerTab", Y8t = "composer.duplicateChat", T9i = "composer.renameChat", X8t = "composer.sendToAgent", S$s = "composer.handleBugBotDeeplink", k$s = "composer.handleBugBotMultipleDeeplinks", eku = "composer.focusComposer", tku = "composer.openTerminalInWorktree", nku = "composer.find.focus", iku = "composer.find.hide", rku = "composer.find.next", sku = "composer.find.previous", w$s = "composer.getOrderedSelectedComposerIds", oku = "workbench.action.chat.open", C$s = "workbench.action.chat.testOpenWithPrompt", aku = "composer.testNotification", T$s = "Chat", E$s = Pe.files, cku = "workbench.panel.composerChatViewPane", ccv = [
    $3s.ITERATE
], lku = new Set([
    nt.WEB_SEARCH,
    nt.WEB_FETCH,
    nt.LIST_DIR,
    nt.LIST_DIR_V2,
    nt.RIPGREP_SEARCH,
    nt.RIPGREP_RAW_SEARCH,
    nt.SEMANTIC_SEARCH_FULL,
    nt.FILE_SEARCH,
    nt.GLOB_FILE_SEARCH,
    nt.READ_SEMSEARCH_FILES,
    nt.SEARCH_SYMBOLS,
    nt.GO_TO_DEFINITION,
    nt.READ_FILE,
    nt.READ_FILE_V2,
    nt.TODO_READ,
    nt.FETCH_RULES,
    nt.READ_LINTS,
    nt.AWAIT,
    nt.GET_MCP_TOOLS
]), uku = Ie.CtrlCmd | fe.KeyL, dku = Ie.CtrlCmd | fe.KeyI, lcv = Ie.CtrlCmd | Ie.Shift | fe.KeyL, hku = Ie.CtrlCmd | Ie.Shift | fe.KeyL, pku = Ie.CtrlCmd | Ie.Shift | fe.KeyD, mku = Ie.CtrlCmd | Ie.Shift | fe.Enter, gku = 5, fku = 12, vku = 100, _ku = 200, bku = 240, E9i = 3.5, ZAn = "var(--composer-human-message-content-padding-block, 8px)", tyt = "var(--composer-human-message-line-height, 22px)", x$s = `calc(${tyt} * ${E9i})`, yku = E9i % 1 + 1, Sku = `calc(${tyt} * ${yku} + ${ZAn})`, kku = 12, I$s = 1, x9i = "cursorAuth/onboardingDate", I9i = "cursorAuth/changeManagementCodeSnippets", A$s = "cursorAuth/workspaceOpenedDate", wku = "cmdK.resolveConflictInCmdK", Cku = "composer.resolveAllConflictsInChat", Z8t = "composer.showViewMenu", Tku = "developer.openAgentTranscript", Eku = "developer.simulateSlowProviderToggle", Q8t = "developer.exportChat", R$s = "developer.importChat", D$s = "developer.bulkImportChats", M$s = [
    bse,
    "composer.createNewWithPrevContext",
    "workbench.action.backgroundComposer.createNewComposerWithPrevContext",
    JSu,
    i$s,
    "workbench.action.backgroundComposer.showBackgroundAgentHistory"
], P$s = 0, xku = 14, Iku = "pane";

}
