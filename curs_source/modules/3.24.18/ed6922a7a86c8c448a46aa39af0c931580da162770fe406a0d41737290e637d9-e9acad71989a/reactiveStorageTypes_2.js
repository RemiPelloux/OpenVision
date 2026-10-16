import { x } from "./tslib.es6.js";
var pSt, Q3u, Aee, G_v, _Xs, J3u, g7i, f7i, eBu, v7i, tBu, mSt, _7i, bXs, Jve, yXs, z$t, SXs, b7i, K$t, Y$t, $x, bC, Vi, nBu, iBu, H4e, X$t, kXs, rBu, sBu, zMn, hJe, V_v;
export { $x, Aee, G_v, H4e, J3u, Jve, K$t, Q3u, SXs, V_v, Vi, X$t, Y$t, _7i, _Xs, b7i, bC, bXs, eBu, f7i, g7i, hJe, iBu, kXs, mSt, nBu, pSt, rBu, sBu, tBu, v7i, yXs, z$t, zMn };
var __wakaru_Vp_initialized = false;
export function Vp() {
if (__wakaru_Vp_initialized) return;
__wakaru_Vp_initialized = true;
"use strict";
x(), pSt = [
    "cmd-k",
    "background-composer",
    "composer",
    "composer-ensemble",
    "plan-execution",
    "spec",
    "deep-search",
    "quick-agent"
], Q3u = [
    "explore"
], Aee = ((e)=>(e.TO_MAIN_FROM_BRANCH = "to_main_from_branch", e.TO_HEAD = "to_head", e))(Aee || {}), G_v = {
    symbol: Symbol.for("cursor.agentStreamMetadata"),
    defaultValue: void 0
}, _Xs = ((e)=>(e.id = "local", e))(_Xs || {}), J3u = "x-client-key", g7i = "x-ghost-mode", f7i = "x-new-onboarding-completed", eBu = "x-session-id", v7i = "x-cursor-client-version", tBu = "x-cursor-client-commit", mSt = "x-cursor-client-type", _7i = "x-cursor-team-id", bXs = ((e)=>(e.GetCachedServerConfig = "aiServerConfigService.getCachedServerConfig", e))(bXs || {}), Jve = ((e)=>(e.Ack = "editHistoryDiffFormatter.ack", e.GetModelValueInRanges = "editHistoryDiffFormatter.getModelValueInRanges", e.GetModelValue = "editHistoryDiffFormatter.getModelValue", e.FormatDiffHistory = "editHistoryDiffFormatter.formatDiffHistory", e.InitModel = "editHistoryDiffFormatter.initModel", e.CompileGlobalDiffTrajectories = "editHistoryDiffFormatter.compileGlobalDiffTrajectories", e.IsRevertingToRecentModel = "editHistoryDiffFormatter.isRevertingToRecentModel", e.IsSuggestingRecentlyRejectedEdit = "editHistoryDiffFormatter.isSuggestingRecentlyRejectedEdit", e.RecordRejectedEdit = "editHistoryDiffFormatter.recordRejectedEdit", e.ProcessModelChangeLoop = "editHistoryDiffFormatter.processModelChangeLoop", e.SetEnableCppWhitespaceDiffHistoryMode = "editHistoryDiffFormatter.setEnableCppWhitespaceDiffHistoryMode", e.SetEnableCppIncludeUnchangedLines = "editHistoryDiffFormatter.setEnableCppIncludeUnchangedLines", e))(Jve || {}), yXs = ((e)=>(e.GetExtHostInfo = "extHostInfo.getExtHostInfo", e))(yXs || {}), z$t = ((e)=>(e.GetFileSyncUpdates = "fileSync.getFileSyncUpdates", e.ShouldRelyOnFileSyncForFile = "fileSync.shouldRelyOnFileSyncForFile", e.GetFileSyncEncryptionHeader = "fileSync.getFileSyncEncryptionHeader", e.ResetSequentialSuccessfulSync = "fileSync.resetSequentialSuccessfulSync", e.TriggerFileSync = "fileSync.triggerFileSync", e))(z$t || {}), SXs = ((e)=>(e.UploadToSignedUrl = "attachedMedia.uploadToSignedUrl", e))(SXs || {}), b7i = ((e)=>(e.GetCurrentIndexAndRecentCommits = "git.getCurrentIndexAndRecentCommits", e))(b7i || {}), K$t = ((e)=>(e.ComputeLocalContext = "bugbotLocal.computeLocalContext", e.ComputeChangedFiles = "bugbotLocal.computeChangedFiles", e))(K$t || {}), Y$t = ((e)=>(e.DNSLookup = "connectDebug.dnsLookup", e.InspectTLSInfo = "connectDebug.inspectTLSInfo", e.Http2Ping = "connectDebug.http2Ping", e))(Y$t || {}), $x = ((e)=>(e.CallTool = "mcp.callTool", e.CreateClient = "mcp.createClient", e.DeleteClient = "mcp.deleteClient", e.ReloadClient = "mcp.reloadClient", e.ListOfferings = "mcp.listOfferings", e.ListToolsRaw = "mcp.listToolsRaw", e.LogoutServer = "mcp.logoutServer", e.CancelOAuthAuthorization = "mcp.cancelOAuthAuthorization", e.ClearAllTokens = "mcp.clearAllTokens", e.GetInstructions = "mcp.getInstructions", e.GetPrompt = "mcp.getPrompt", e.ReadResource = "mcp.readResource", e))($x || {}), bC = ((e)=>(e.Unknown = "unknown", e.LineChange = "line_change", e.Typing = "typing", e.OptionHold = "option_hold", e.LinterErrors = "lint_errors", e.ParameterHints = "parameter_hints", e.CursorPrediction = "cursor_prediction", e.ManualTrigger = "manual_trigger", e.EditorChange = "editor_change", e.LspSuggestions = "lsp_suggestions", e))(bC || {}), Vi = ((e)=>(e.FREE = "free", e.PRO = "pro", e.PRO_PLUS = "pro_plus", e.ENTERPRISE = "enterprise", e.FREE_TRIAL = "free_trial", e.ULTRA = "ultra", e.PRO_STUDENT = "pro_student", e.EXPRESS = "express", e.PREMIUM = "premium", e.PLUS = "plus", e.SUPER = "super", e.UNIFIED_ULTRA = "unified_ultra", e))(Vi || {}), nBu = new Set(Object.values(Vi)), iBu = new Set([
    "premium",
    "plus",
    "super",
    "unified_ultra"
]), H4e = "cursor.cpp.disabledLanguages", X$t = "cursor.general.disableHttp2", kXs = "cursor.general.disableHttp1SSE", rBu = "cursor.general.gitGraphIndexing", sBu = "cursor.action.startTrackingRequest", zMn = "not a real key", hJe = ".cursor/worktrees", V_v = `${hJe}/**`;

}
