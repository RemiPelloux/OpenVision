import { EBv } from "./CustomizeEngine.js";
import { x } from "./tslib.es6.js";
import { DBv, FX, dBv } from "./xmo.js";
import { createContext as IBv } from "./react-runtime/react/esm-index-production.js";
import { jsx as hsh } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { use as xBv } from "./react-runtime/react/esm-index-production.js";
var Yfo, Xfo, Zfo, Qfo, Jfo, evo, tvo, nvo, ivo, rvo, svo, ovo, avo, cvo, lvo, uvo, dvo, psh, msh, U$;
export { Jfo, Qfo, U$, Xfo, Yfo, Zfo, avo, cvo, dvo, evo, ivo, lvo, msh, nvo, ovo, psh, rvo, svo, tvo, uvo };
var __wakaru_MBv_initialized = false;
export function MBv() {
if (__wakaru_MBv_initialized) return;
__wakaru_MBv_initialized = true;
"use strict";
x(), EBv(), Yfo = IBv(null), Xfo = FX("Customize.Controller"), Zfo = FX("Customize.Browse"), Qfo = FX("Customize.Leaderboard.WorkspaceSelector"), Jfo = Object.assign(FX("Customize.Leaderboard"), {
    WorkspaceSelector: Qfo
}), evo = FX("Customize.Manage.SingleScope"), tvo = FX("Customize.Manage.HookLogDetails"), nvo = Object.assign(FX("Customize.Manage"), {
    SingleScope: evo,
    HookLogDetails: tvo
}), ivo = FX("Customize.Detail.GlassChrome"), rvo = Object.assign(FX("Customize.Detail"), {
    GlassChrome: ivo
}), svo = FX("Customize.GlobalSearch"), ovo = FX("Customize.TeamMarketplace.Admin"), avo = FX("Customize.TeamMarketplace.McpAuthoring"), cvo = FX("Customize.TeamMarketplace.AccessGrants"), lvo = FX("Customize.TeamMarketplace.OriginDistribution"), uvo = FX("Customize.TeamMarketplace.UserPublish"), dvo = Object.assign(FX("Customize.TeamMarketplace"), {
    Admin: ovo,
    McpAuthoring: avo,
    AccessGrants: cvo,
    OriginDistribution: lvo,
    UserPublish: uvo
}), psh = Object.assign(function({ children: t, ...n }) {
    return hsh(Yfo, {
        value: n,
        children: t
    });
}, {
    displayName: "Customize.Provider"
}), msh = Object.assign(function({ children: t }) {
    const n = xBv(Yfo);
    if (n === null) throw new Error("Customize.Root must be rendered inside Customize.Provider.");
    const i = DBv(t);
    if (i.manage === void 0) throw new Error("Customize.Root requires a Customize.Manage part (the manage port is the host's required wiring).");
    if (i.detail === void 0) throw new Error("Customize.Root requires a Customize.Detail part (the plugin-detail port is the host's required wiring).");
    return hsh(dBv, {
        ...n,
        ref: i.controller?.handleRef,
        onCustomizeViewChange: i.controller?.onViewChange,
        setNavigateToView: i.controller?.registerNavigate,
        onSelectedManageWorkspaceChange: i.controller?.onSelectedManageWorkspaceChange,
        primitiveUsageCacheKey: i.controller?.usageCacheKey,
        breadcrumbSlot: i.controller?.breadcrumbSlot,
        headerBanner: i.controller?.banner,
        leaderboardEnabled: i.leaderboard !== void 0,
        fetchTeamPrimitiveUsage: i.leaderboard?.fetchTeamPrimitiveUsage,
        usagePrimitiveDescriptors: i.leaderboard?.usagePrimitiveDescriptors,
        usagePrimitiveDescriptorLoadState: i.leaderboard?.usagePrimitiveDescriptorLoadState,
        usagePrimitiveDescriptorLoadFailures: i.leaderboard?.usagePrimitiveDescriptorLoadFailures,
        onOpenUsagePrimitiveSource: i.leaderboard?.onOpenUsagePrimitiveSource,
        resolvePrimitiveDescriptorAuthorship: i.leaderboard?.resolvePrimitiveDescriptorAuthorship,
        leaderboardWorkspaceScope: i.leaderboardWorkspaceSelector,
        manage: i.manage.port,
        manageSkillsBanner: i.manage.skillsBanner,
        manageScopeMultiselectEnabled: !i.manageSingleScope,
        hookExecutionLogDetailsEnabled: i.manageHookLogDetailsEnabled,
        pluginDetail: i.detail.port,
        detailGlassChrome: i.detailGlassChrome,
        enableGlobalSearch: i.globalSearch,
        manageTeamMarketplaceClient: i.teamMarketplace?.client,
        canManageTeamMarketplaces: i.teamMarketplaceAdmin,
        manageTeamMarketplaceDirectoryGroups: i.teamMarketplace?.directoryGroups,
        onAfterDeleteTeamMarketplace: i.teamMarketplace?.onAfterDelete,
        enableTeamMarketplaceMcps: i.teamMarketplaceMcpAuthoring,
        enableAccessGrants: i.teamMarketplaceAccessGrants !== void 0,
        manageTeamMarketplaceOrganizationGroups: i.teamMarketplaceAccessGrants?.organizationGroups,
        enableOriginDistribution: i.teamMarketplaceOriginDistribution,
        enablePublishUserSkills: i.teamMarketplaceUserPublish
    });
}, {
    displayName: "Customize.Root"
}), U$ = {
    Provider: psh,
    Root: msh,
    Controller: Xfo,
    Browse: Zfo,
    Leaderboard: Jfo,
    Manage: nvo,
    Detail: rvo,
    GlobalSearch: svo,
    TeamMarketplace: dvo
};

}
