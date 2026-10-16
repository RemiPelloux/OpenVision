import { ZWm } from "./CustomizeEngine.js";
import { BJ1, bJ1, ile } from "./gYa.js";
import { E } from "./tslib.es6.js";
import { createContext as LJ1 } from "./react-runtime/react/esm-index-production.js";
import { use as NJ1 } from "./react-runtime/react/esm-index-production.js";
import { jsx as QWm } from "./react-runtime/react/esm-jsx-runtime-production.js";
var KZa, YZa, XZa, ZZa, QZa, JZa, eQa, tQa, nQa, iQa, rQa, sQa, oQa, aQa, lQa, cQa, uQa, JWm, eGm, yX;
export { JWm, JZa, KZa, QZa, XZa, YZa, ZZa, aQa, cQa, eGm, eQa, iQa, lQa, nQa, oQa, rQa, sQa, tQa, uQa, yX };
var __wakaru_UJ1_initialized = false;
export function UJ1() {
if (__wakaru_UJ1_initialized) return;
__wakaru_UJ1_initialized = true;
"use strict";
E(), ZWm(), KZa = LJ1(null), YZa = ile("Customize.Controller"), XZa = ile("Customize.Browse"), ZZa = ile("Customize.Leaderboard.WorkspaceSelector"), QZa = Object.assign(ile("Customize.Leaderboard"), {
    WorkspaceSelector: ZZa
}), JZa = ile("Customize.Manage.SingleScope"), eQa = ile("Customize.Manage.HookLogDetails"), tQa = Object.assign(ile("Customize.Manage"), {
    SingleScope: JZa,
    HookLogDetails: eQa
}), nQa = ile("Customize.Detail.GlassChrome"), iQa = Object.assign(ile("Customize.Detail"), {
    GlassChrome: nQa
}), rQa = ile("Customize.GlobalSearch"), sQa = ile("Customize.TeamMarketplace.Admin"), oQa = ile("Customize.TeamMarketplace.McpAuthoring"), aQa = ile("Customize.TeamMarketplace.AccessGrants"), lQa = ile("Customize.TeamMarketplace.OriginDistribution"), cQa = ile("Customize.TeamMarketplace.UserPublish"), uQa = Object.assign(ile("Customize.TeamMarketplace"), {
    Admin: sQa,
    McpAuthoring: oQa,
    AccessGrants: aQa,
    OriginDistribution: lQa,
    UserPublish: cQa
}), JWm = Object.assign(function({ children: e, ...n }) {
    return QWm(KZa, {
        value: n,
        children: e
    });
}, {
    displayName: "Customize.Provider"
}), eGm = Object.assign(function({ children: e }) {
    const n = NJ1(KZa);
    if (n === null) throw new Error("Customize.Root must be rendered inside Customize.Provider.");
    const i = BJ1(e);
    if (i.manage === void 0) throw new Error("Customize.Root requires a Customize.Manage part (the manage port is the host's required wiring).");
    if (i.detail === void 0) throw new Error("Customize.Root requires a Customize.Detail part (the plugin-detail port is the host's required wiring).");
    return QWm(bJ1, {
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
}), yX = {
    Provider: JWm,
    Root: eGm,
    Controller: YZa,
    Browse: XZa,
    Leaderboard: QZa,
    Manage: tQa,
    Detail: iQa,
    GlobalSearch: rQa,
    TeamMarketplace: uQa
};

}
