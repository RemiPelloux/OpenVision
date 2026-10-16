"use strict";
require.d(exports, {
    P7: ()=>a,
    PJ: ()=>o,
    yj: ()=>c
});
var n = require("./module-43955.js"), s = require("./module-89396.js");
function o(e) {
    return void 0 !== e && (void 0 !== e.smartModeClassifierAutoModeEnabled || e.disabledTeamRules.length > 0 || void 0 !== e.adminCommandDenylist || void 0 !== e.commitAttributionMessage || void 0 !== e.prAttributionMessage || void 0 !== e.mountedAgentStores || void 0 !== e.webSearchEnabled || void 0 !== e.webFetchEnabled || void 0 !== e.readLintsEnabled || void 0 !== e.searchConversationsEnabled || e.appendedRules.length > 0 || e.filteredBrowserMcpProviderIds.length > 0 || void 0 !== e.gitRepoBranchAncestry || void 0 !== e.adminPermissionsAutoRun || void 0 !== e.userPermissionsAutoRun || void 0 !== e.projectPermissionsAutoRun || void 0 !== e.hooksConfig || void 0 !== e.hooksAdditionalContext || void 0 !== e.debugModeConfig || void 0 !== e.recentlyAddedPlugin || (e.prefetchFileUris ?? []).length > 0 || void 0 !== e.sandboxEnabled);
}
function i(e, t) {
    return e.source === n.gv.TEAM && !0 !== e.isRequired && t.has(function(e) {
        return e.fullPath.split("/").pop() ?? e.fullPath;
    }(e));
}
function a(e, t) {
    if (!o(t)) return e;
    if (t.disabledTeamRules.length > 0) {
        const r = new Set([
            ...e.disabledTeamRules,
            ...t.disabledTeamRules
        ]);
        e.disabledTeamRules = [
            ...r
        ], e.rules = e.rules.filter((e)=>!i(e, r)), e.nonFileRules = e.nonFileRules.filter((e)=>!i(e, r));
    }
    if (t.filteredBrowserMcpProviderIds.length > 0) {
        const r = new Set(t.filteredBrowserMcpProviderIds);
        e.tools = e.tools.filter((e)=>!r.has(e.providerIdentifier));
    }
    var r, n;
    t.appendedRules.length > 0 && (e.rules = function(e, t) {
        if (0 === t.length) return [
            ...e
        ];
        const r = new Set(e.map((e)=>e.fullPath)), n = [
            ...e
        ];
        for (const e of t)r.has(e.fullPath) || (r.add(e.fullPath), n.push(e));
        return n;
    }(e.rules, t.appendedRules)), void 0 !== t.gitRepoBranchAncestry && (e.gitRepos = (r = e.gitRepos, void 0 === (n = t.gitRepoBranchAncestry) ? [
        ...r
    ] : r.map((e)=>e.path !== n.repoPath ? e : new s.DS({
            ...e,
            branchName: n.currentBranch,
            previousBranchIsAncestor: n.isAncestor
        })))), void 0 !== t.adminCommandDenylist && (e.adminCommandDenylist = [
        ...t.adminCommandDenylist.values
    ]), void 0 !== t.commitAttributionMessage && (e.commitAttributionMessage = t.commitAttributionMessage), void 0 !== t.prAttributionMessage && (e.prAttributionMessage = t.prAttributionMessage), void 0 !== t.webSearchEnabled && (e.webSearchEnabled = t.webSearchEnabled), void 0 !== t.webFetchEnabled && (e.webFetchEnabled = t.webFetchEnabled), void 0 !== t.readLintsEnabled && (e.readLintsEnabled = t.readLintsEnabled), void 0 !== t.searchConversationsEnabled && (e.searchConversationsEnabled = t.searchConversationsEnabled), void 0 !== t.adminPermissionsAutoRun && (e.adminPermissionsAutoRun = t.adminPermissionsAutoRun), void 0 !== t.userPermissionsAutoRun && (e.userPermissionsAutoRun = t.userPermissionsAutoRun), void 0 !== t.projectPermissionsAutoRun && (e.projectPermissionsAutoRun = t.projectPermissionsAutoRun), void 0 !== t.hooksConfig && (e.hooksConfig = t.hooksConfig), void 0 !== t.hooksAdditionalContext && (e.hooksAdditionalContext = t.hooksAdditionalContext), void 0 !== t.debugModeConfig && (e.debugModeConfig = t.debugModeConfig), void 0 !== t.recentlyAddedPlugin && (e.recentlyAddedPlugin = t.recentlyAddedPlugin);
    return (void 0 !== t.smartModeClassifierAutoModeEnabled || void 0 !== t.mountedAgentStores || void 0 !== t.sandboxEnabled) && (e.env ??= new s.GE, void 0 !== t.smartModeClassifierAutoModeEnabled && (e.env.smartModeClassifierAutoModeEnabled = t.smartModeClassifierAutoModeEnabled), void 0 !== t.mountedAgentStores && (e.env.mountedAgentStores = [
        ...t.mountedAgentStores.values
    ]), void 0 !== t.sandboxEnabled && (e.env.sandboxEnabled = t.sandboxEnabled)), e;
}
function c(e) {
    const t = e.clone();
    return t.fileContents = {}, t.precomputedHumanChanges = [], t.recentlyAddedPlugin = void 0, t.matchedInstalledPlugin = void 0, t.debugModeConfig = void 0, t.hooksAdditionalContext = void 0, void 0 !== t.env && (t.env.devForceNextSmartModeClassifierBlockToken = void 0, t.env.devDelayNextSmartModeClassifierToken = void 0), t;
}
