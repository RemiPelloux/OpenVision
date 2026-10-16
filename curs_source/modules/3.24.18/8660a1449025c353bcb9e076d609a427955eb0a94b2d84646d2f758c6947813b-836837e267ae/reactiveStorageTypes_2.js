import { E } from "./tslib.es6.js";
var RWt, zBp, mpe, s51, SFa, VBp, Ozr, Fzr, KBp, Bzr, YBp, PWt, Uzr, kFa, ePe, wFa, XCn, CFa, jzr, ZCn, QCn, RP, GI, Fr, XBp, ZBp, Zst, JCn, TFa, QBp, JBp, QSi, F0t, o51;
export { Bzr, CFa, F0t, Fr, Fzr, GI, JBp, JCn, KBp, Ozr, PWt, QBp, QCn, QSi, RP, RWt, SFa, TFa, Uzr, VBp, XBp, XCn, YBp, ZBp, ZCn, Zst, ePe, jzr, kFa, mpe, o51, s51, wFa, zBp };
var __wakaru_Um_initialized = false;
export function Um() {
if (__wakaru_Um_initialized) return;
__wakaru_Um_initialized = true;
"use strict";
E(), RWt = [
    "cmd-k",
    "background-composer",
    "composer",
    "composer-ensemble",
    "plan-execution",
    "spec",
    "deep-search",
    "quick-agent"
], zBp = [
    "explore"
], mpe = ((t)=>(t.TO_MAIN_FROM_BRANCH = "to_main_from_branch", t.TO_HEAD = "to_head", t))(mpe || {}), s51 = {
    symbol: Symbol.for("cursor.agentStreamMetadata"),
    defaultValue: void 0
}, SFa = ((t)=>(t.id = "local", t))(SFa || {}), VBp = "x-client-key", Ozr = "x-ghost-mode", Fzr = "x-new-onboarding-completed", KBp = "x-session-id", Bzr = "x-cursor-client-version", YBp = "x-cursor-client-commit", PWt = "x-cursor-client-type", Uzr = "x-cursor-team-id", kFa = ((t)=>(t.GetCachedServerConfig = "aiServerConfigService.getCachedServerConfig", t))(kFa || {}), ePe = ((t)=>(t.Ack = "editHistoryDiffFormatter.ack", t.GetModelValueInRanges = "editHistoryDiffFormatter.getModelValueInRanges", t.GetModelValue = "editHistoryDiffFormatter.getModelValue", t.FormatDiffHistory = "editHistoryDiffFormatter.formatDiffHistory", t.InitModel = "editHistoryDiffFormatter.initModel", t.CompileGlobalDiffTrajectories = "editHistoryDiffFormatter.compileGlobalDiffTrajectories", t.IsRevertingToRecentModel = "editHistoryDiffFormatter.isRevertingToRecentModel", t.IsSuggestingRecentlyRejectedEdit = "editHistoryDiffFormatter.isSuggestingRecentlyRejectedEdit", t.RecordRejectedEdit = "editHistoryDiffFormatter.recordRejectedEdit", t.ProcessModelChangeLoop = "editHistoryDiffFormatter.processModelChangeLoop", t.SetEnableCppWhitespaceDiffHistoryMode = "editHistoryDiffFormatter.setEnableCppWhitespaceDiffHistoryMode", t.SetEnableCppIncludeUnchangedLines = "editHistoryDiffFormatter.setEnableCppIncludeUnchangedLines", t))(ePe || {}), wFa = ((t)=>(t.GetExtHostInfo = "extHostInfo.getExtHostInfo", t))(wFa || {}), XCn = ((t)=>(t.GetFileSyncUpdates = "fileSync.getFileSyncUpdates", t.ShouldRelyOnFileSyncForFile = "fileSync.shouldRelyOnFileSyncForFile", t.GetFileSyncEncryptionHeader = "fileSync.getFileSyncEncryptionHeader", t.ResetSequentialSuccessfulSync = "fileSync.resetSequentialSuccessfulSync", t.TriggerFileSync = "fileSync.triggerFileSync", t))(XCn || {}), CFa = ((t)=>(t.UploadToSignedUrl = "attachedMedia.uploadToSignedUrl", t))(CFa || {}), jzr = ((t)=>(t.GetCurrentIndexAndRecentCommits = "git.getCurrentIndexAndRecentCommits", t))(jzr || {}), ZCn = ((t)=>(t.ComputeLocalContext = "bugbotLocal.computeLocalContext", t.ComputeChangedFiles = "bugbotLocal.computeChangedFiles", t))(ZCn || {}), QCn = ((t)=>(t.DNSLookup = "connectDebug.dnsLookup", t.InspectTLSInfo = "connectDebug.inspectTLSInfo", t.Http2Ping = "connectDebug.http2Ping", t))(QCn || {}), RP = ((t)=>(t.CallTool = "mcp.callTool", t.CreateClient = "mcp.createClient", t.DeleteClient = "mcp.deleteClient", t.ReloadClient = "mcp.reloadClient", t.ListOfferings = "mcp.listOfferings", t.ListToolsRaw = "mcp.listToolsRaw", t.LogoutServer = "mcp.logoutServer", t.CancelOAuthAuthorization = "mcp.cancelOAuthAuthorization", t.ClearAllTokens = "mcp.clearAllTokens", t.GetInstructions = "mcp.getInstructions", t.GetPrompt = "mcp.getPrompt", t.ReadResource = "mcp.readResource", t))(RP || {}), GI = ((t)=>(t.Unknown = "unknown", t.LineChange = "line_change", t.Typing = "typing", t.OptionHold = "option_hold", t.LinterErrors = "lint_errors", t.ParameterHints = "parameter_hints", t.CursorPrediction = "cursor_prediction", t.ManualTrigger = "manual_trigger", t.EditorChange = "editor_change", t.LspSuggestions = "lsp_suggestions", t))(GI || {}), Fr = ((t)=>(t.FREE = "free", t.PRO = "pro", t.PRO_PLUS = "pro_plus", t.ENTERPRISE = "enterprise", t.FREE_TRIAL = "free_trial", t.ULTRA = "ultra", t.PRO_STUDENT = "pro_student", t.EXPRESS = "express", t.PREMIUM = "premium", t.PLUS = "plus", t.SUPER = "super", t.UNIFIED_ULTRA = "unified_ultra", t))(Fr || {}), XBp = new Set(Object.values(Fr)), ZBp = new Set([
    "premium",
    "plus",
    "super",
    "unified_ultra"
]), Zst = "cursor.cpp.disabledLanguages", JCn = "cursor.general.disableHttp2", TFa = "cursor.general.disableHttp1SSE", QBp = "cursor.general.gitGraphIndexing", JBp = "cursor.action.startTrackingRequest", QSi = "not a real key", F0t = ".cursor/worktrees", o51 = `${F0t}/**`;

}
