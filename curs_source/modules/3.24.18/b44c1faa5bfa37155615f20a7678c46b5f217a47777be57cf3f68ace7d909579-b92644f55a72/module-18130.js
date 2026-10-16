"use strict";
require.d(exports, {
    $l: ()=>i,
    He: ()=>o
});
var n = require("./module-60525.js");
const s = [
    "cursor-ide-browser",
    "cursor-browser-extension"
];
function o(e) {
    const t = e.gitRepos.find((e)=>void 0 !== e.previousBranchIsAncestor && e.branchName.length > 0);
    return new n.hV({
        ...void 0 !== e.env?.smartModeClassifierAutoModeEnabled ? {
            smartModeClassifierAutoModeEnabled: e.env.smartModeClassifierAutoModeEnabled
        } : {},
        disabledTeamRules: [
            ...e.disabledTeamRules
        ],
        adminCommandDenylist: new n.Yv({
            values: [
                ...e.adminCommandDenylist
            ]
        }),
        ...void 0 !== e.commitAttributionMessage ? {
            commitAttributionMessage: e.commitAttributionMessage
        } : {},
        ...void 0 !== e.prAttributionMessage ? {
            prAttributionMessage: e.prAttributionMessage
        } : {},
        ...void 0 !== e.env ? {
            mountedAgentStores: new n.kc({
                values: [
                    ...e.env.mountedAgentStores
                ]
            })
        } : {},
        ...!1 === e.env?.sandboxEnabled ? {
            sandboxEnabled: !1
        } : {},
        ...void 0 !== e.webSearchEnabled ? {
            webSearchEnabled: e.webSearchEnabled
        } : {},
        ...void 0 !== e.webFetchEnabled ? {
            webFetchEnabled: e.webFetchEnabled
        } : {},
        ...void 0 !== e.readLintsEnabled ? {
            readLintsEnabled: e.readLintsEnabled
        } : {},
        ...void 0 !== e.searchConversationsEnabled ? {
            searchConversationsEnabled: e.searchConversationsEnabled
        } : {},
        appendedRules: [
            ...e.rules
        ],
        ...void 0 !== t ? {
            gitRepoBranchAncestry: new n.ky({
                repoPath: t.path,
                currentBranch: t.branchName,
                isAncestor: !0 === t.previousBranchIsAncestor
            })
        } : {},
        ...void 0 !== e.adminPermissionsAutoRun ? {
            adminPermissionsAutoRun: e.adminPermissionsAutoRun
        } : {},
        ...void 0 !== e.userPermissionsAutoRun ? {
            userPermissionsAutoRun: e.userPermissionsAutoRun
        } : {},
        ...void 0 !== e.projectPermissionsAutoRun ? {
            projectPermissionsAutoRun: e.projectPermissionsAutoRun
        } : {},
        ...void 0 !== e.hooksConfig ? {
            hooksConfig: e.hooksConfig
        } : {},
        ...void 0 !== e.hooksAdditionalContext ? {
            hooksAdditionalContext: e.hooksAdditionalContext
        } : {},
        ...void 0 !== e.debugModeConfig ? {
            debugModeConfig: e.debugModeConfig
        } : {},
        ...void 0 !== e.recentlyAddedPlugin ? {
            recentlyAddedPlugin: e.recentlyAddedPlugin
        } : {},
        filteredBrowserMcpProviderIds: i(s, e.tools.map((e)=>e.providerIdentifier)),
        prefetchFileUris: Object.keys(e.fileContents)
    });
}
function i(e, t) {
    if (void 0 === t) return [];
    const r = new Set(t);
    return s.filter((t)=>e.includes(t) && !r.has(t));
}
