import { Ekt, td, u1e } from "./A3u.js";
import { $j, S$t, fMn, gMn, t0, y$t } from "./De_3.js";
import { Ct, He, Hp, Kl, Se, bt, cn, we } from "./HVr.js";
import { V6 } from "./agentRepositoryService.js";
import { aR, bn } from "./async.js";
import { hm, quo, wUe } from "./background_composer_pb.js";
import { nb } from "./bcIdFromAuthority.js";
import { Yu } from "./browser.ts";
import { j6v } from "./cloudAgentRepoSlashCommands.js";
import { mVt } from "./cloudCatalogService.js";
import { WPe } from "./cloudMcpOAuthFlowState.js";
import { I$v } from "./cloudMcpServerCache.js";
import { fFn } from "./cloudMcpServerState.js";
import { Gch, I4v } from "./cloudWorkspaceFileSearch.js";
import { fPe, vPe } from "./constants_19.js";
import { So } from "./constants_8.js";
import { Jh, eeo, teo } from "./dashboard_pb.js";
import { Vr } from "./environmentService.js";
import { hc } from "./extensions_4.js";
import { dph, uph } from "./localAgentEnvironment.js";
import { B0 } from "./localAgentRepository.js";
import { Hwt } from "./mentionChipActionHandler.js";
import { lyo, yYi } from "./mentionsCapabilityService.js";
import { Jet } from "./mentionsQuery.js";
import { hhh } from "./mentionsRanking.js";
import { li } from "./network.js";
import { bu } from "./objects.js";
import { iFn } from "./plusMenuMcpServerMapping.js";
import { YUe } from "./promptInputUriPayload.js";
import { yh } from "./qIc.js";
import { N1, gh } from "./reactive.js";
import { M$v } from "./repoSlashInventoryCache.js";
import { xyo } from "./settingsCloudMcpHelpers.js";
import { Cwt } from "./slashMenuData.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Fw } from "./utils_24.js";
import { Js, zn } from "./uuid.js";
import { U0, Yv } from "./workspaceCollectionService.js";
import { a0 } from "./workspaceMetadataService.js";
import { IA } from "./workspaces.js";
import { C8v, CKi, Dph, E$v, E_o, G$v, HGt, K$v, Lbo, Nyo, R$v, T$v, TKi, UPe, V$v, V6v, W$v, X$v, Y$v, _mh, aVt, amh, cVt, cch, eyo, fmh, gFn, gmh, hmh, iyo, j$v, jyo, lch, mch, mmh, oFn, pVt, pch, pmh, vmh, wph, x4v, x8v, z$v } from "./xmo.js";
var yFn, qyo, bmh, ymh, Smh, zyo, Kyo, kmh, wmh, Cmh, Tmh, Emh, xmh, Imh, fVt;
export { Cmh, Emh, Imh, Kyo, Smh, Tmh, bmh, fVt, kmh, qyo, wmh, xmh, yFn, ymh, zyo };
var __wakaru_Yyo_initialized = false;
export function Yyo() {
if (__wakaru_Yyo_initialized) return;
__wakaru_Yyo_initialized = true;
"use strict";
x(), Se(), bn(), nb(), So(), bt(), li(), bu(), Qt(), IA(), Jh(), j6v(), hm(), Fw(), V6(), N1(), Cwt(), a0(), Vr(), hc(), I4v(), dph(), lyo(), YUe(), xyo(), iFn(), I$v(), M$v(), mVt(), B0(), WPe(), fFn(), Js(), Yu(), Hwt(), vPe(), Jet(), hhh(), Yv(), yFn = "/workspace", qyo = [
    "anysphere.cursor-agent-exec",
    "anysphere.cursor-agent-host"
], bmh = "glass.cloudRepoBranches.", ymh = 300 * 1e3, Smh = "glass.cloudRepoBranchRecency.", zyo = 50, Kyo = [
    1e3,
    2e3,
    4e3,
    8e3,
    15e3,
    3e4,
    6e4,
    12e4
], kmh = 25, wmh = 8, Cmh = new Map, Tmh = 25, Emh = {
    mentionRanks: new Map,
    trackerRanks: new Map,
    historyRanks: new Map
}, xmh = 1e4, Imh = 3e4, fVt = class extends we {
    constructor(e, t, n, i = {}){
        super(), this._targetRepoUrls = e, this._workspaceFactory = t, this._services = n, this._launchContext = i, this._slashMenuItems = new gh([]), this.slashMenuItems = this._slashMenuItems, this._mentionFilesLoading = new gh(!1), this.mentionFilesLoading = this._mentionFilesLoading, this._mcpServers = new gh([]), this.mcpServers = this._mcpServers, this._cloudPluginBrandLogoByPluginId = new Map, this._delegateStore = this._register(new He), this._defaultBranches = new gh([]), this.defaultBranches = this._defaultBranches, this._branchOptionsByRepo = new gh([]), this.branchOptionsByRepo = this._branchOptionsByRepo, this._delegateAttachGeneration = 0, this._warmRequested = !1, this._vmProvisionedSkills = [], this._managedSkills = [], this._managedSkillSourceUris = new Map, this._repoSlashMenuItems = [], this._repoSlashRefreshGeneration = 0, this._repoSlashMenuItemsAreComplete = !1, this._managedSkillsRefreshGeneration = 0, this._cloudMcpServers = [], this._cloudMcpStatusByServerId = new Map, this._cloudMcpRefreshGeneration = 0, this._branchStateByRepoPath = this._createBranchStates(e), this._slashDiscoveryGitRef = this._launchContext.gitRef?.trim() || void 0;
        const r = this._launchContext.agentId?.trim();
        r && this._services.cursorIgnoreService && this._register(this._services.cursorIgnoreService.registerCursorWorkerRepoUrls({
            agentId: r,
            repoUrls: this._targetRepoUrls
        })), r && (this._workspaceFileSearchKey = this._getWorkspaceFileSearchKey(r), this._register({
            dispose: ()=>{
                this._workspaceFileSearchKey && this._workspaceFileSearchCache.invalidate(this._workspaceFileSearchKey);
            }
        }));
        const s = ()=>{
            this._refreshCloudMcpServers(), this._refreshRepoSlashCommands(), this._refreshManagedSkills();
        };
        this._services.cursorAuthenticationService.addLoginChangedListener(s), this._register({
            dispose: ()=>{
                this._services.cursorAuthenticationService.removeLoginChangedListener(s);
            }
        }), this._register(this._services.cloudCatalog.onDidInvalidate((a)=>{
            (a === "all" || a === "mcp") && this._refreshCloudMcpServers(), (a === "all" || a === "skills") && this._refreshManagedSkills();
        }));
        const o = this._services.mcpWellKnownDetectionService;
        o !== void 0 && this._register(o.onDidResolveIcons(()=>{
            this._setCloudMcpServers(this._cloudMcpServers);
        })), this._register(this._services.cursorAuthenticationService.onDidChangeAccessToken((a)=>{
            this._initializeBranchCacheKeys({
                accessToken: a
            });
        })), this._hydrateCloudMcpServersFromCache(), this._hydrateRepoSlashCommandsFromCache(), this._refreshCloudMcpServers(), this._refreshRepoSlashCommands(), this._refreshManagedSkills(), this._initializeAsync(), this._initializeBranchCacheKeys(), this._syncRepoScopedBranchState();
    }
    get _workspaceFileSearchCache() {
        return this._services.workspaceFileSearchCache ?? Gch;
    }
    _getWorkspaceReactive() {
        return this._workspaceFactory?.workspace;
    }
    _createBranchStates(e) {
        const t = new Map;
        return e.forEach((n, i)=>{
            const r = n.trim();
            if (!r) return;
            const s = t0(r), o = i === 0 ? yFn : s || r;
            !o || t.has(o) || t.set(o, {
                repoPath: o,
                repoUrl: r,
                defaultBranch: void 0,
                branchOptions: void 0,
                branchOptionsCacheKey: void 0,
                branchRecencyCacheKey: void 0,
                normalizedRepoUrl: void 0,
                requestGeneration: 0,
                cacheKeyGeneration: 0
            });
        }), t;
    }
    _getBranchState(e) {
        return this._branchStateByRepoPath.get(e.trim());
    }
    _syncDefaultBranches() {
        this._defaultBranches.set([
            ...this._branchStateByRepoPath.values()
        ].map((e)=>({
                repoPath: e.repoPath,
                branch: e.defaultBranch,
                repoUrl: e.repoUrl
            })));
    }
    _syncBranchOptionsByRepo() {
        this._branchOptionsByRepo.set([
            ...this._branchStateByRepoPath.values()
        ].map((e)=>({
                repoPath: e.repoPath,
                branchOptions: e.branchOptions
            })));
    }
    _syncRepoScopedBranchState() {
        this._syncDefaultBranches(), this._syncBranchOptionsByRepo();
    }
    _setDefaultBranch(e, t) {
        const n = e.defaultBranch;
        e.defaultBranch = t, this._syncDefaultBranches(), e.repoPath === yFn && this._slashDiscoveryGitRef === void 0 && n !== t && t !== void 0 && this._refreshRepoSlashCommands();
    }
    updateSlashDiscoveryGitRef(e) {
        const t = e?.trim();
        t && this._slashDiscoveryGitRef !== t && (this._slashDiscoveryGitRef = t, this._refreshRepoSlashCommands());
    }
    _setBranchOptions(e, t) {
        e.branchOptions = t, this._syncBranchOptionsByRepo();
    }
    setVmProvisionedSkills(e) {
        this._vmProvisionedSkills = e, this._rebuildMergedSlashMenu();
    }
    refreshSlashInventory() {
        this._markWorkspaceFilesStale(), this._refreshRepoSlashCommands();
    }
    _markWorkspaceFilesStale() {
        const e = this._launchContext.agentId?.trim();
        if (!e) return;
        const t = this._workspaceFileSearchKey ?? this._getWorkspaceFileSearchKey(e);
        this._workspaceFileSearchKey = t, this._workspaceFileSearchCache.markStale(t);
    }
    async hydrateVmProvisionedSkills(e) {
        try {
            const i = ((await this._services.backgroundComposerClient.getBackgroundComposerInfo(new wUe({
                bcId: e,
                includeDiff: !1,
                doNotThrowIfSetupNotFinished: !0
            }), {
                headers: td(zn())
            })).composer?.vmProvisionedSkills ?? []).filter((r)=>r.skillId.trim().length > 0).map((r)=>({
                    skillId: r.skillId,
                    description: r.description,
                    displayName: r.displayName,
                    environments: r.environments,
                    disabledEnvironments: r.disabledEnvironments
                }));
            this.setVmProvisionedSkills(i);
        } catch (t) {
            this._services.structuredLogService?.debug("background_composer", "CloudAgentEnvironment: Failed to hydrate VM provisioned skills", {
                agentId: e,
                error: t instanceof Error ? t : void 0
            });
        }
    }
    _managedSkillSourceUri(e) {
        const t = this._services.getHostUserHomeUri?.(), n = amh(e);
        if (!(t === void 0 || n === void 0)) return Ee.joinPath(t, ".cursor", "skills-cursor", n, "SKILL.md");
    }
    async _verifiedManagedSkillSourceUris(e) {
        const t = this._services.fileExists;
        if (t === void 0) return new Map;
        const n = new aR(wmh), i = e.map((s)=>n.queue(async ()=>{
                const o = this._managedSkillSourceUri(s.skillId);
                if (o !== void 0) try {
                    return await t(o) ? [
                        s.skillId,
                        o.toString()
                    ] : void 0;
                } catch  {
                    return;
                }
            })), r = await Promise.all(i);
        return new Map(r.filter((s)=>s !== void 0));
    }
    _vmSkillSlashItems(e, t) {
        const n = t.scope === "managed" ? this._managedSkillSourceUris : Cmh;
        return e.map((i)=>{
            const r = gMn(i.skillId) ?? i.skillId.trim(), s = i.displayName?.trim(), o = s !== void 0 && s.length > 0 ? s : r, a = {
                case: "cursor_skill",
                filename: i.skillId,
                displayName: r
            }, c = t.scope === "managed" ? cch(r) : void 0, l = CKi(c?.description ?? i.description), u = t.scope === "managed" ? lch(r) : void 0, h = o !== r ? [
                r,
                ...u ?? []
            ] : u;
            return {
                id: `skill-${i.skillId}`,
                name: o,
                ...o !== r ? {
                    commandName: r
                } : {},
                searchAliases: h,
                searchKeywords: c?.searchKeywords,
                description: l,
                type: "skill",
                slashSubject: $j({
                    kind: "skill",
                    scope: t.scope,
                    identifier: r,
                    syncEligibility: t.syncEligibility
                }),
                payload: a,
                onSelect: ()=>{},
                tooltip: l || void 0,
                sourceUri: n.get(i.skillId)
            };
        });
    }
    async _refreshManagedSkills() {
        const e = ++this._managedSkillsRefreshGeneration;
        if (!this._services.cursorAuthenticationService.isAuthenticated()) {
            !this._store.isDisposed && e === this._managedSkillsRefreshGeneration && (this._managedSkills = [], this._managedSkillSourceUris = new Map, this._managedSkillsScope = void 0, this._rebuildMergedSlashMenu());
            return;
        }
        this._resetManagedSkillsOnScopeChange();
        const t = this._getCloudMcpCacheScope();
        try {
            const n = await this._services.cloudCatalog.getManagedSkills();
            if (this._store.isDisposed || e !== this._managedSkillsRefreshGeneration) return;
            const i = (n.skills ?? []).filter((o)=>o.enabled !== !1 && hmh({
                    skillId: o.id,
                    description: o.description,
                    environments: o.environments,
                    disabledEnvironments: o.disabledEnvironments
                })).map((o)=>({
                    skillId: o.id,
                    description: o.description,
                    environments: o.environments,
                    disabledEnvironments: o.disabledEnvironments
                })), r = await this._verifiedManagedSkillSourceUris(i);
            if (this._store.isDisposed || e !== this._managedSkillsRefreshGeneration) return;
            const s = this._getCloudMcpCacheScope();
            if (s.authId !== t.authId || s.teamId !== t.teamId) return;
            this._managedSkills = i, this._managedSkillSourceUris = r, this._managedSkillsScope = s, this._rebuildMergedSlashMenu();
        } catch (n) {
            if (this._store.isDisposed || e !== this._managedSkillsRefreshGeneration) return;
            this._services.structuredLogService?.warn("background_composer", "CloudAgentEnvironment: Failed to hydrate managed skills", {
                error: n instanceof Error ? n : void 0
            }), this._managedSkills = [], this._managedSkillSourceUris = new Map, this._rebuildMergedSlashMenu();
        }
    }
    _resetManagedSkillsOnScopeChange() {
        const e = this._managedSkillsScope, t = this._getCloudMcpCacheScope();
        e !== void 0 && e.authId === t.authId && e.teamId === t.teamId || (this._managedSkills = [], this._managedSkillSourceUris = new Map, this._managedSkillsScope = t, this._rebuildMergedSlashMenu());
    }
    _rebuildMergedSlashMenu() {
        const e = V6v({
            delegateItems: this._delegateEnvironment?.slashMenuItems?.value ?? [],
            repoInventoryItems: this._repoSlashMenuItems
        }), t = new Set, n = (a)=>{
            const c = TKi(a);
            c !== void 0 && t.add(c);
        };
        e.forEach(n);
        const i = this._repoSlashMenuItems.filter((a)=>{
            const c = TKi(a);
            return c === void 0 || !t.has(c) ? (n(a), !0) : !1;
        }), r = this._vmSkillSlashItems(this._vmProvisionedSkills.filter((a)=>hmh(a) && !t.has(E_o(a.skillId))), {
            scope: "user",
            syncEligibility: "local-only"
        });
        r.forEach(n);
        const s = this._vmSkillSlashItems(this._managedSkills.filter((a)=>!t.has(E_o(a.skillId))), {
            scope: "managed",
            syncEligibility: "server-safe"
        }), o = this._createRecencyAttacher();
        this._slashMenuItems.set(o([
            ...e,
            ...i,
            ...r,
            ...s
        ]));
    }
    _createRecencyAttacher() {
        const e = this._services.cursorCommandsService?.getRecentlyUsedGlobalOrder();
        if (!e || e.length === 0) return (r)=>r;
        const t = Date.now(), n = new Map, i = new Map;
        return e.forEach((r, s)=>{
            const o = fMn(r.type, r.identifier);
            o !== void 0 && !n.has(o) && (n.set(o, t - s * 1e3), i.set(o, s));
        }), (r)=>r.map((s)=>{
                if (s.type !== "skill" && s.type !== "command" && s.type !== "subagent") return s;
                const o = s.payload?.case === "cursor_skill" || s.payload?.case === "cursor_command" ? s.payload.filename : s.payload?.case === "subagent" ? s.payload.name : s.id.startsWith(`${s.type}-`) ? s.id.slice(`${s.type}-`.length) : s.id, a = fMn(s.type, o), c = a !== void 0 ? n.get(a) : void 0, l = a !== void 0 ? i.get(a) : void 0;
                return s.lastUsedTime === c && s.legacyMruRank === l ? s : {
                    ...s,
                    lastUsedTime: c,
                    legacyMruRank: l
                };
            });
    }
    _resolveGitRefForSlashDiscovery() {
        return this._slashDiscoveryGitRef ? this._slashDiscoveryGitRef : this._branchStateByRepoPath.get(yFn)?.defaultBranch?.trim() || void 0;
    }
    _cachedRepoSlashMenuItems(e) {
        const t = wph(this._services.cacheStorageService, {
            authId: this._services.cursorAuthenticationService.getCurrentAuthId(),
            repoUrl: e
        });
        return t === void 0 ? void 0 : mch(t, {
            repoUrl: e
        });
    }
    _hydrateRepoSlashCommandsFromCache() {
        if (!this._services.cursorAuthenticationService.isAuthenticated()) return;
        this._repoSlashScopeAuthId = this._services.cursorAuthenticationService.getCurrentAuthId();
        const e = pch(this._targetRepoUrls[0]), t = e === void 0 ? void 0 : this._cachedRepoSlashMenuItems(e);
        this._repoSlashMenuItems = t ?? [], this._repoSlashMenuItemsAreComplete = t !== void 0, this._rebuildMergedSlashMenu();
    }
    _resetRepoSlashRowsOnScopeChange() {
        const e = this._services.cursorAuthenticationService.getCurrentAuthId();
        this._repoSlashScopeAuthId !== void 0 && this._repoSlashScopeAuthId === e || this._hydrateRepoSlashCommandsFromCache();
    }
    async _refreshRepoSlashCommands() {
        const e = ++this._repoSlashRefreshGeneration, t = pch(this._targetRepoUrls[0]), n = this._launchContext.agentId?.trim() ?? "";
        if (!this._services.cursorAuthenticationService.isAuthenticated() || n.length === 0 && t === void 0) {
            !this._store.isDisposed && e === this._repoSlashRefreshGeneration && (this._repoSlashMenuTargetKey = void 0, this._repoSlashMenuItems = [], this._repoSlashMenuItemsAreComplete = !1, this._repoSlashScopeAuthId = void 0, this._rebuildMergedSlashMenu());
            return;
        }
        this._resetRepoSlashRowsOnScopeChange();
        const i = this._resolveGitRefForSlashDiscovery(), r = JSON.stringify([
            n,
            t ?? null,
            i ?? null
        ]), s = this._repoSlashMenuTargetKey;
        if (s !== r && (this._repoSlashMenuTargetKey = r, s !== void 0)) {
            const o = t !== void 0 ? this._cachedRepoSlashMenuItems(t) : void 0;
            this._repoSlashMenuItems = o ?? [], this._repoSlashMenuItemsAreComplete = o !== void 0, this._rebuildMergedSlashMenu();
        }
        try {
            const o = await this._services.cursorAuthenticationService.dashboardClient();
            if (this._store.isDisposed || e !== this._repoSlashRefreshGeneration) return;
            for(let a = 0;; a++){
                const c = n.length > 0 ? await o.getBackgroundComposerSlashCommands(new teo({
                    bcId: n,
                    repoUrl: t,
                    gitRef: i
                })) : await o.getRepoSlashCommands(new eeo({
                    repoUrl: t,
                    gitRef: i
                }));
                if (this._store.isDisposed || e !== this._repoSlashRefreshGeneration) return;
                const l = {
                    skillNames: c.skillNames ?? [],
                    commandNames: c.commandNames ?? [],
                    skills: "skills" in c ? c.skills : void 0,
                    commands: "commands" in c ? c.commands : void 0
                }, u = "machineInventoryPending" in c && c.machineInventoryPending === !0;
                if ((!u || !this._repoSlashMenuItemsAreComplete) && (this._repoSlashMenuItems = mch(l, {
                    repoUrl: t
                }), this._repoSlashMenuItemsAreComplete = !u, this._rebuildMergedSlashMenu()), !u && t !== void 0) {
                    const p = {
                        authId: this._services.cursorAuthenticationService.getCurrentAuthId(),
                        repoUrl: t
                    }, g = n.length === 0 && l.skillNames.length === 0 && l.commandNames.length === 0 ? wph(this._services.cacheStorageService, p) : void 0;
                    g !== void 0 && (g.skillNames.length > 0 || g.commandNames.length > 0) || R$v(this._services.cacheStorageService, p, {
                        gitRef: i,
                        ...l
                    });
                }
                const h = a >= Kyo.length;
                if (!u || h || (await Kl(Kyo[a]), this._store.isDisposed || e !== this._repoSlashRefreshGeneration)) return;
            }
        } catch (o) {
            if (this._store.isDisposed || e !== this._repoSlashRefreshGeneration) return;
            this._services.structuredLogService?.debug("background_composer", "CloudAgentEnvironment: Failed to hydrate repo slash commands", {
                repoUrl: t,
                gitRef: i,
                agentId: n.length > 0 ? n : void 0,
                error: o instanceof Error ? o : void 0
            });
        }
    }
    _setCloudMcpServers(e, t = this._cloudMcpStatusByServerId, n = this._cloudPluginBrandLogoByPluginId) {
        this._cloudMcpServers = e, this._cloudMcpStatusByServerId = t, this._cloudPluginBrandLogoByPluginId = n;
        const i = x8v(e, t, this._services.mcpWellKnownDetectionService, this._cloudPluginBrandLogoByPluginId);
        yh(this._mcpServers.value, i) || this._mcpServers.set(i);
    }
    _getCloudMcpCacheScope() {
        return {
            authId: this._services.cursorAuthenticationService.getCurrentAuthId(),
            teamId: this._services.cursorAuthenticationService.getTeamId()
        };
    }
    _hydrateCloudMcpServersFromCache() {
        if (!this._services.cursorAuthenticationService.isAuthenticated()) return;
        const e = this._getCloudMcpCacheScope();
        this._cloudMcpServersScope = e;
        const t = T$v(this._services.cacheStorageService, e);
        this._setCloudMcpServers(t?.servers ?? [], t?.statusByServerId ?? new Map, t?.pluginBrandLogoByPluginId ?? new Map);
    }
    _resetCloudMcpServersOnScopeChange() {
        const e = this._cloudMcpServersScope, t = this._getCloudMcpCacheScope();
        e !== void 0 && e.authId === t.authId && e.teamId === t.teamId || this._hydrateCloudMcpServersFromCache();
    }
    async _fetchCloudMcpStatuses(e, t, n) {
        const i = e.filter(Nyo), r = Dph(e);
        if (r.length === 0) return new Map;
        const s = pVt(this._services.productService.urlProtocol, this._services.cloudMcpOAuthLoopbackService.isEnabled());
        try {
            const o = await this._services.cloudCatalog.getMcpStatuses({
                serverIds: r,
                oauthRedirectUri: s
            }, {
                forceRefresh: n
            });
            if (this._store.isDisposed || t !== this._cloudMcpRefreshGeneration) return new Map;
            const a = new Map;
            for (const c of o.statuses){
                const l = pmh(c);
                l !== void 0 && a.set(c.id, {
                    ...l,
                    authorizationUrl: mmh(l.authorizationUrl, c.id, i.find((u)=>u.id === c.id)?.url)
                });
            }
            return a;
        } catch (o) {
            if (n) throw o;
            const a = new Map;
            for (const c of i)a.set(c.id, {
                status: "error",
                isConnected: !1
            });
            return a;
        }
    }
    async _refreshCloudMcpServers(e) {
        const t = ++this._cloudMcpRefreshGeneration;
        if (!this._services.cursorAuthenticationService.isAuthenticated()) {
            if (e?.preserveOnError === !0) throw new Error("Cannot refresh cloud MCP servers: not authenticated");
            this._setCloudMcpServers([], new Map, new Map), this._cloudMcpServersScope = void 0;
            return;
        }
        this._resetCloudMcpServersOnScopeChange();
        const n = this._getCloudMcpCacheScope();
        try {
            const i = e?.forceRefresh === !0, r = await this._services.cloudCatalog.getMcpCatalog({
                forceRefresh: i
            }), s = r.servers, o = r.pluginBrandLogosResolved ? r.pluginBrandLogoByPluginId : this._cloudPluginBrandLogoByPluginId;
            if (this._store.isDisposed || t !== this._cloudMcpRefreshGeneration) return;
            const a = await this._fetchCloudMcpStatuses(s, t, i);
            if (this._store.isDisposed || t !== this._cloudMcpRefreshGeneration) return;
            const c = this._getCloudMcpCacheScope();
            if (c.authId !== n.authId || c.teamId !== n.teamId) return;
            this._setCloudMcpServers(s, a, o), this._cloudMcpServersScope = c, E$v(this._services.cacheStorageService, c, {
                servers: s,
                statusByServerId: a,
                pluginBrandLogoByPluginId: o
            });
        } catch (i) {
            if (this._store.isDisposed || t !== this._cloudMcpRefreshGeneration) return;
            if (e?.preserveOnError === !0) throw i;
        }
    }
    _getBranchCacheAuthScopeFromToken(e) {
        if (e) return this._services.cursorAuthenticationService.getAuthIdFromToken(e) ?? void 0;
    }
    async _getBranchCacheAuthScope() {
        try {
            const e = await this._services.cursorAuthenticationService.getAccessToken();
            return this._getBranchCacheAuthScopeFromToken(e);
        } catch  {
            return;
        }
    }
    async _initializeBranchCacheKeys(e) {
        const t = [
            ...this._branchStateByRepoPath.values()
        ], n = new Map;
        for (const r of t)n.set(r, ++r.cacheKeyGeneration);
        const i = t.length > 0 ? e ? this._getBranchCacheAuthScopeFromToken(e.accessToken) : await this._getBranchCacheAuthScope() : void 0;
        for (const r of t){
            const s = n.get(r);
            if (this._store.isDisposed || s === void 0 || s !== r.cacheKeyGeneration) continue;
            const o = jyo(r.repoUrl), a = o && i ? fmh(bmh, i, o) : void 0, c = o && i ? fmh(Smh, i, o) : void 0, l = a !== r.branchOptionsCacheKey || c !== r.branchRecencyCacheKey, u = r.branchOptions?.query ?? "";
            if (r.normalizedRepoUrl = o, r.branchOptionsCacheKey = a, r.branchRecencyCacheKey = c, l && (r.requestGeneration++, this._setBranchOptions(r, u.length > 0 ? {
                branches: [],
                query: u,
                page: 0,
                hasMore: !1,
                isLoading: !0,
                isLoadingMore: !1,
                isEmptyRepo: !1
            } : void 0), this._setDefaultBranch(r, void 0)), u.length > 0) {
                l && this._fetchBranchOptionsPage(r, {
                    append: !1,
                    page: 1,
                    query: u
                });
                continue;
            }
            this._shouldRevalidateBranchOptions(r) && this.refreshBranchOptions(r.repoPath);
        }
    }
    _getCachedBranchOptionsEntry(e) {
        const t = e.branchOptionsCacheKey;
        if (!t) return;
        const n = this._services.storageService.get(t, -1);
        if (n) try {
            return JSON.parse(n);
        } catch  {
            return;
        }
    }
    _getCachedBranchRecencyEntries(e) {
        const t = e.branchRecencyCacheKey;
        if (!t) return [];
        const n = this._services.storageService.get(t, -1);
        if (!n) return [];
        try {
            const i = JSON.parse(n);
            return Array.isArray(i) ? i.filter(X$v) : [];
        } catch  {
            return [];
        }
    }
    _storeBranchRecencyEntries(e, t) {
        e.branchRecencyCacheKey && this._services.storageService.store(e.branchRecencyCacheKey, JSON.stringify(t.slice(0, zyo)), -1, 1);
    }
    _getBranchRecencyRanks(e) {
        const t = new Map;
        for (const i of this._getCachedBranchRecencyEntries(e))_mh(t, i.name, {
            priority: 0,
            timestamp: i.selectedAtMs
        });
        const n = e.normalizedRepoUrl;
        if (!n) return t;
        for (const i of this._services.getAgentHeaders?.() ?? []){
            if (i.isArchived.value || !UPe(i.trackedGitRepos.value).some((o)=>jyo(o) === n)) continue;
            const s = i.lastUpdatedAt.value || i.createdAt;
            for (const o of i.trackedGitRepos.value){
                const a = o.repoUrl.value?.trim();
                if (!a || jyo(a) !== n) continue;
                const c = o.activeBranchName.value?.trim();
                c && _mh(t, c, {
                    priority: 1,
                    timestamp: s
                });
            }
        }
        return t;
    }
    _orderBranchesByRecency(e, t) {
        if (t.length <= 1) return t;
        const n = this._getBranchRecencyRanks(e);
        if (n.size === 0) return t;
        const i = new Map;
        return t.forEach((r, s)=>{
            i.set(r.name, s);
        }), [
            ...t
        ].sort((r, s)=>{
            if (r.isDefault !== s.isDefault) return r.isDefault ? -1 : 1;
            const o = n.get(r.name), a = n.get(s.name);
            if (o && a) {
                if (o.priority !== a.priority) return o.priority - a.priority;
                if (o.timestamp !== a.timestamp) return a.timestamp - o.timestamp;
            } else {
                if (o) return -1;
                if (a) return 1;
            }
            return (i.get(r.name) ?? 0) - (i.get(s.name) ?? 0);
        });
    }
    _toBranchOptionsState(e, t, n = "") {
        const i = K$v(t, n);
        return n.length > 0 ? i : {
            ...i,
            branches: this._orderBranchesByRecency(e, i.branches)
        };
    }
    _applyCachedBranchOptionsEntry(e, t) {
        this._setBranchOptions(e, this._toBranchOptionsState(e, t)), this._setDefaultBranch(e, vmh(t.branches, t.bootstrapBranch));
    }
    _shouldRevalidateBranchOptions(e) {
        const t = this._getCachedBranchOptionsEntry(e);
        return t ? (this._applyCachedBranchOptionsEntry(e, t), Y$v(t)) : !0;
    }
    _storeBranchOptions(e, t) {
        if (!e.branchOptionsCacheKey || t.query.length > 0) return;
        const n = {
            branches: t.branches,
            fetchedAtMs: Date.now(),
            page: t.page,
            hasMore: t.hasMore,
            isEmptyRepo: t.isEmptyRepo,
            bootstrapBranch: t.bootstrapBranch
        };
        this._services.storageService.store(e.branchOptionsCacheKey, JSON.stringify(n), -1, 1);
    }
    async _fetchBranchOptionsPage(e, t) {
        const n = e.repoUrl;
        if (!n) {
            this._setBranchOptions(e, void 0), this._setDefaultBranch(e, void 0);
            return;
        }
        const { append: i, page: r, query: s } = t, o = e.branchOptions;
        if (i && (!o || o.isLoading || o.isLoadingMore || !o.hasMore)) return;
        if (i && o) this._setBranchOptions(e, {
            ...o,
            isLoadingMore: !0
        });
        else {
            const c = o?.query === s;
            this._setBranchOptions(e, {
                branches: o?.branches ?? [],
                query: s,
                page: c ? o.page : 0,
                hasMore: c ? o.hasMore : !1,
                isLoading: !c || (o?.branches.length ?? 0) === 0,
                isLoadingMore: !1,
                isEmptyRepo: o?.isEmptyRepo ?? !1,
                bootstrapBranch: o?.bootstrapBranch
            });
        }
        const a = ++e.requestGeneration;
        try {
            const c = await this._services.backgroundComposerClient.getRepositoryBranches(new quo({
                repoUrl: n,
                page: r,
                ...s ? {
                    query: s
                } : {}
            }));
            if (this._store.isDisposed || a !== e.requestGeneration) return;
            const l = c.branches.map((f)=>({
                    name: f.name,
                    isDefault: f.isDefault
                })), h = [
                ...i ? e.branchOptions?.branches ?? [] : []
            ];
            for (const f of l)h.some((v)=>v.name === f.name) || h.push(f);
            const g = {
                branches: s.length === 0 ? this._orderBranchesByRecency(e, h) : h,
                query: s,
                page: r,
                hasMore: c.hasMore,
                isLoading: !1,
                isLoadingMore: !1,
                isEmptyRepo: c.isEmptyRepo,
                bootstrapBranch: c.bootstrapBranch || void 0
            };
            this._setBranchOptions(e, g), s.length === 0 && this._setDefaultBranch(e, vmh(h, g.bootstrapBranch)), this._storeBranchOptions(e, {
                ...g,
                branches: h
            });
        } catch  {
            if (this._store.isDisposed || a !== e.requestGeneration) return;
            const c = e.branchOptions;
            if (!c) return;
            this._setBranchOptions(e, {
                ...c,
                isLoading: !1,
                isLoadingMore: !1
            });
        }
    }
    notifyBranchPickerOpened(e) {}
    recordBranchSelection(e, t) {
        const n = this._getBranchState(e);
        if (!n) return;
        const i = t.trim();
        if (!i || !n.branchRecencyCacheKey) return;
        const r = [
            {
                name: i,
                selectedAtMs: Date.now()
            },
            ...this._getCachedBranchRecencyEntries(n).filter((o)=>o.name !== i)
        ].slice(0, zyo);
        this._storeBranchRecencyEntries(n, r);
        const s = n.branchOptions;
        !s || s.query.length > 0 || this._setBranchOptions(n, {
            ...s,
            branches: this._orderBranchesByRecency(n, s.branches)
        });
    }
    setBranchOptionsQuery(e, t) {
        const n = this._getBranchState(e);
        if (!n) return;
        const i = t.trim();
        n.branchOptions?.query !== i && (i.length === 0 && (n.requestGeneration++, !this._shouldRevalidateBranchOptions(n)) || this._fetchBranchOptionsPage(n, {
            append: !1,
            page: 1,
            query: i
        }));
    }
    loadMoreBranchOptions(e) {
        const t = this._getBranchState(e);
        if (!t) return Promise.resolve();
        const n = t.branchOptions;
        return !n || !n.hasMore || n.isLoading || n.isLoadingMore ? Promise.resolve() : this._fetchBranchOptionsPage(t, {
            append: !0,
            page: n.page + 1,
            query: n.query
        });
    }
    refreshBranchOptions(e) {
        const t = this._getBranchState(e);
        return t ? this._fetchBranchOptionsPage(t, {
            append: !1,
            page: 1,
            query: t.branchOptions?.query ?? ""
        }) : Promise.resolve();
    }
    async _initializeAsync() {
        const e = this._getWorkspaceReactive();
        if (e !== void 0) {
            let n = !1;
            const i = this._register(new cn), r = (s)=>{
                if (i.clear(), !s || this._store.isDisposed) return;
                const o = ()=>{
                    n = !0, this._attachDelegateEnvironment(s.workspaceIdentifier);
                }, a = V$v(s);
                if (a.kind === "never") return;
                if (a.kind === "local") {
                    o();
                    return;
                }
                const { extensionService: c } = a, l = new He;
                i.value = l, j$v(c).catch(()=>!1).then((u)=>{
                    if (!l.isDisposed) {
                        if (u) {
                            o();
                            return;
                        }
                        l.add(Ct.once(c.onDidChangeExtensionsStatus)(()=>r(s)));
                    }
                });
            };
            if (this._register(e.onChange(r)), r(e.value), !n) {
                const s = await this._findMatchingWorkspace();
                !this._store.isDisposed && s && !n && await this._attachDelegateEnvironment(s);
            }
            this._rebuildMergedSlashMenu();
            return;
        }
        const t = await this._findMatchingWorkspace();
        if (!this._store.isDisposed) {
            if (!t) {
                this._rebuildMergedSlashMenu();
                return;
            }
            await this._attachDelegateEnvironment(t);
        }
    }
    async _attachDelegateEnvironment(e) {
        const t = ++this._delegateAttachGeneration;
        if (this._delegateWorkspaceIdentifierId === e.id) return;
        let n;
        try {
            if (n = await this._services.workspaceCollectionService.createWorkspaceReference(e, U0.Customizations | U0.Mcp | U0.Git), this._store.isDisposed) {
                n.dispose();
                return;
            }
            if (this._store.isDisposed || t !== this._delegateAttachGeneration || this._delegateWorkspaceIdentifierId === e.id) {
                n.dispose();
                return;
            }
            this._delegateStore.clear(), this._delegateEnvironment = void 0, this._delegateWorkspaceIdentifierId = void 0;
            const i = new uph(n, {
                agentKind: "cloud",
                includeCloudOnlyGlobalCommands: !0,
                targetEnvironment: "cloud"
            });
            n = void 0, this._delegateEnvironment = i, this._delegateWorkspaceIdentifierId = e.id, this._delegateStore.add(i), this._delegateStore.add(i.slashMenuItems.onChange(()=>{
                this._rebuildMergedSlashMenu();
            })), this._rebuildMergedSlashMenu(), this._warmRequested && i.warmSlashMenuCache();
        } catch  {
            n?.dispose(), this._store.isDisposed || this._rebuildMergedSlashMenu();
        }
    }
    async _findMatchingWorkspace() {
        if (this._targetRepoUrls.length === 0) return;
        const e = S$t(this._targetRepoUrls);
        if (e.size === 0) return;
        const t = await this._services.workspacesService.getRecentlyOpened();
        for (const n of t.workspaces){
            if (n.remoteAuthority !== void 0) continue;
            const i = await this._getAnyWorkspaceIdentifier(n);
            if (!i) continue;
            const r = this._services.workspaceMetadataService.getMetadata(i), s = HGt(r);
            if (s.length !== 0) {
                for (const o of s)if (e.has(y$t(o))) return this._getWorkspaceIdentifier(n);
            }
        }
    }
    async _getAnyWorkspaceIdentifier(e) {
        if (Ekt(e)) return e.workspace;
        if (u1e(e)) return this._services.workspacesService.getSingleFolderWorkspaceIdentifier(e.folderUri);
    }
    async _getWorkspaceIdentifier(e) {
        if (u1e(e)) return this._services.workspacesService.getSingleFolderWorkspaceIdentifier(e.folderUri);
    }
    warmMentionSources() {
        const e = this._launchContext.agentId?.trim();
        if (e && !this._store.isDisposed) {
            const t = this._getWorkspaceFileSearchKey(e);
            this._workspaceFileSearchKey = t, this._workspaceFileSearchCache.prewarm(t, ()=>this._listCloudWorkspaceFilePaths(e));
        }
    }
    warmSlashMenuCache() {
        this._warmRequested = !0, this._delegateEnvironment?.warmSlashMenuCache();
    }
    applySelectionSideEffects(e, t) {
        if (this._delegateEnvironment) {
            this._delegateEnvironment.applySelectionSideEffects(e, t), this._recordSelectionRecency(e);
            return;
        }
        this._recordSelectionRecency(e, t);
    }
    _recordSelectionRecency(e, t) {
        switch(e.type){
            case "skill":
                {
                    const n = e.id.startsWith("skill-") ? e.id.slice(6) : e.id;
                    this._markCloudItemRecentlyUsed("skill", n), t?.(n);
                    break;
                }
            case "command":
                {
                    const n = e.id.startsWith("command-") ? e.id.slice(8) : e.id.startsWith("mcp-") ? e.id.slice(4) : e.id;
                    this._markCloudItemRecentlyUsed("command", n);
                    break;
                }
            case "subagent":
                {
                    const n = e.id.startsWith("subagent-") ? e.id.slice(9) : e.id;
                    this._markCloudItemRecentlyUsed("subagent", n);
                    break;
                }
            default:
                break;
        }
    }
    applySkillSelectionSideEffects(e, t) {
        if (this._delegateEnvironment) {
            this._delegateEnvironment.applySkillSelectionSideEffects(e, t);
            const i = e.startsWith("skill-") ? e.slice(6) : e;
            this._markCloudItemRecentlyUsed("skill", i);
            return;
        }
        const n = e.startsWith("skill-") ? e.slice(6) : e;
        this._markCloudItemRecentlyUsed("skill", n), t?.(n);
    }
    _markCloudItemRecentlyUsed(e, t) {
        const n = this._services.cursorCommandsService;
        !n || t.trim().length === 0 || (n.markAsRecentlyUsed(e, t), this._rebuildMergedSlashMenu());
    }
    toggleMcpServer(e, t) {
        this._toggleCloudMcpServer(e, t);
    }
    async runMcpServerAttentionAction(e) {
        if (e.kind !== "retry") throw new Error(`Unsupported cloud MCP action: ${e.kind}`);
        await this._retryCloudMcpServer(e.serverId);
    }
    async fetchCloudMcpAuthStatus(e) {
        const t = cVt(e);
        if (t !== void 0) try {
            const r = (await (await this._services.cursorAuthenticationService.dashboardClient()).checkHttpMcpStatus({
                serverIds: [
                    t
                ],
                oauthRedirectUri: pVt(this._services.productService.urlProtocol, this._services.cloudMcpOAuthLoopbackService.isEnabled())
            })).statuses.find((a)=>a.id === t), s = r && pmh(r);
            if (!s) return;
            const o = {
                ...s,
                authorizationUrl: mmh(s.authorizationUrl, t, this._cloudMcpServers.find((a)=>a.id === t)?.url)
            };
            if (!this._store.isDisposed) {
                const a = new Map(this._cloudMcpStatusByServerId);
                a.set(t, o), this._setCloudMcpServers(this._cloudMcpServers, a);
            }
            return o;
        } catch  {
            return;
        }
    }
    async _retryCloudMcpServer(e) {
        const t = cVt(e), n = this._cloudMcpServers.find((i)=>i.id === t);
        if (t === void 0 || !n || !Nyo(n)) throw new Error(`Cloud MCP server cannot be retried: ${e}`);
        this._cloudMcpRetryRefresh || (this._cloudMcpRetryRefresh = this._refreshCloudMcpServers({
            preserveOnError: !0,
            forceRefresh: !0
        }).finally(()=>{
            this._cloudMcpRetryRefresh = void 0;
        })), await this._cloudMcpRetryRefresh;
    }
    async _toggleCloudMcpServer(e, t) {
        const n = cVt(e);
        if (n === void 0) return;
        const i = this._cloudMcpServers, r = i.find((l)=>l.id === n);
        if (!r || r.enabled === t) return;
        const s = this._cloudMcpStatusByServerId, o = i.map((l)=>l.id === n ? G$v(l, {
                enabled: t
            }) : l), a = new Map(s);
        t || a.delete(n);
        const c = o.filter((l)=>l.enabled).map((l)=>l.id);
        this._setCloudMcpServers(o, a);
        try {
            await (await this._services.cursorAuthenticationService.dashboardClient()).updateUserDefaultMcpSettings({
                enabledServerIds: c
            }), gFn();
        } catch  {
            this._store.isDisposed || this._setCloudMcpServers(i, s);
        }
    }
    _getCloudMcpMentionItems(e) {
        return C8v(this._mcpServers.value, e);
    }
    async _getCloudPastChatMentionItems(e, t) {
        return this._services.experimentService.checkFeatureGate("cloud_agent_bc_id_attachment", {
            disableExposureLog: !0
        }) ? t.isCancellationRequested || this._store.isDisposed ? [] : [
            ...(this._services.getAgentHeaders?.() ?? []).map((i)=>({
                    header: i,
                    parent: void 0
                })),
            ...this._services.getCloudSubagentHeaders?.() ?? []
        ].filter(({ header: i })=>!i.isArchived.value && Lbo(e, i.name.value.trim() || fPe)).sort((i, r)=>(r.header.lastUpdatedAt.value ?? r.header.createdAt) - (i.header.lastUpdatedAt.value ?? i.header.createdAt)).slice(0, kmh).map(({ header: i, parent: r })=>{
            const s = i.name.value.trim() || fPe;
            return {
                id: `cloud-past-chat:${i.id}`,
                label: s,
                rawText: i.id,
                type: "chat",
                menuIcon: "chat-bubble",
                description: "Past Chat",
                lastUsedTime: i.lastUpdatedAt.value ?? i.createdAt,
                payload: {
                    case: "pastChatSelection",
                    agentId: i.id,
                    name: s
                },
                parentName: r === void 0 ? void 0 : r.name.value.trim() || fPe
            };
        }) : [];
    }
    async _listCloudWorkspaceFilePaths(e) {
        return (await this._services.backgroundComposerClient.listWorkspaceFiles({
            bcId: e
        })).relativePaths;
    }
    _loadCloudWorkspaceFileSearch(e) {
        const t = this._getWorkspaceFileSearchKey(e);
        return this._workspaceFileSearchKey = t, this._workspaceFileSearchCache.load(t, ()=>this._listCloudWorkspaceFilePaths(e));
    }
    _getWorkspaceFileSearchKey(e) {
        return x4v({
            agentId: e,
            authId: this._services.cursorAuthenticationService.getCurrentAuthId(),
            teamId: this._services.cursorAuthenticationService.getTeamId()
        });
    }
    async _getCloudWorkspaceFileMentions(e, t, n) {
        const i = this._launchContext.agentId?.trim();
        if (!i || n?.scope !== void 0 && n.scope !== "files_and_folders" || t.isCancellationRequested) return [];
        let r;
        try {
            r = n?.strategy === "fast" ? this._workspaceFileSearchCache.get(this._getWorkspaceFileSearchKey(i)) : await this._loadCloudWorkspaceFileSearch(i);
        } catch  {
            return [];
        }
        if (!r || t.isCancellationRequested || this._store.isDisposed) return [];
        let s = this._keystrokeFileScan;
        (s?.searchIndexRef.deref() !== r || s.query !== e || s.cancellationToken !== t) && (s = {
            searchIndexRef: new WeakRef(r),
            query: e,
            cancellationToken: t,
            mentions: z$v({
                agentId: i,
                searchIndex: r,
                query: e,
                isBlocked: (a)=>this._services.cursorIgnoreService?.isAdminBlockedForRepoPaths({
                        repoUrls: this._targetRepoUrls,
                        relativePath: a
                    }) ?? !1,
                cancellationToken: t
            })
        }, this._keystrokeFileScan = s);
        const o = await s.mentions;
        return this._store.isDisposed ? [] : o;
    }
    async getMentionItems(e, t, n) {
        if (t.isCancellationRequested) return [];
        let i, r;
        if (n === void 0) i = void 0;
        else {
            const { onAuthoritativePartial: E, ...A } = n;
            i = A, r = E;
        }
        if (i?.scope === "past_chats") {
            const E = await this._getCloudPastChatMentionItems(e, t);
            return this._delegateEnvironment ? [
                ...await this._delegateEnvironment.getMentionItems(e, t, i),
                ...E
            ] : E;
        }
        const s = i?.scope === void 0, o = s ? this._getCloudMcpMentionItems(e) : [], a = i?.scope === void 0 && e.trim().length > 0 ? await this._getCloudPastChatMentionItems(e, t) : [], c = i?.scope === void 0 || i.scope === "branch_diff_main" ? oFn(e) : [], l = i?.scope === void 0 ? iyo(e) : [], u = (E)=>{
            const A = s ? W$v(E, o) : [
                ...E
            ], R = [
                ...c,
                ...l
            ].filter((P)=>!A.some((N)=>N.id === P.id));
            if (a.length === 0) return [
                ...R,
                ...A
            ];
            const D = eyo(aVt(e), [
                ...A,
                ...a
            ], Emh).map((P)=>P.item);
            return [
                ...R,
                ...D
            ];
        }, h = this._launchContext.agentId?.trim(), p = !!h && (i?.scope === void 0 || i.scope === "files_and_folders");
        if (i?.strategy === "fast" && !p && this._delegateEnvironment) {
            const E = await this._delegateEnvironment.getMentionItems(e, t, i);
            return u(E);
        }
        const g = this._getCloudWorkspaceFileMentions(e, t, i);
        if (i?.strategy === "fast") {
            const E = await g;
            return u(E);
        }
        const f = Hp((this._delegateEnvironment ? this._delegateEnvironment.getMentionItems(e, t, i) : this._getWorkspaceCapabilityMentionItems(e, t, i)).catch(()=>[]), xmh).then((E)=>E ?? []), v = Hp(g, Imh), b = (E, A)=>A === void 0 && p ? E.filter((R)=>R.type !== "file") : E;
        if (this._mentionFilesLoadingPass = t, this._mentionFilesLoading.set(p && h !== void 0 && this._workspaceFileSearchCache.get(this._getWorkspaceFileSearchKey(h)) === void 0), v.then(()=>{
            this._mentionFilesLoadingPass === t && this._mentionFilesLoading.set(!1);
        }), r !== void 0) {
            const E = await this._getCloudWorkspaceFileMentions(e, t, {
                ...i,
                strategy: "fast"
            });
            let A = [], R;
            const D = ()=>{
                if (t.isCancellationRequested || this._store.isDisposed) return;
                const P = u(gmh({
                    items: b(A, R),
                    cloudFileItems: R ?? E
                }));
                r(P.filter((N)=>N.type !== "canvas"));
            };
            f.then((P)=>{
                A = P, P.length > 0 && D();
            }), v.then((P)=>{
                R = P, p && D();
            });
        }
        const [y, T] = await Promise.all([
            f,
            v
        ]);
        return u(gmh({
            items: b(y, T),
            cloudFileItems: T ?? []
        }));
    }
    async _getWorkspaceCapabilityMentionItems(e, t, n) {
        const i = await this._awaitCloudAgentWorkspace(t);
        if (!i || this._store.isDisposed) return [];
        if (!this._mentionsCapability) {
            const r = new yYi(i);
            if (this._store.isDisposed) return r.dispose(), [];
            this._mentionsCapability = this._register(r);
        }
        return this._mentionsCapability.getMentionItems({
            query: e,
            cancellationToken: t,
            strategy: n?.strategy,
            scope: n?.scope
        });
    }
    async resolvePastChatFirstPrompt(e) {
        return this._delegateEnvironment ? this._delegateEnvironment.resolvePastChatFirstPrompt(e) : this._mentionsCapability?.getPastChatFirstPromptSnippet(Ee.revive(e));
    }
    async resolvePastChatTranscript(e) {
        return this._delegateEnvironment ? this._delegateEnvironment.resolvePastChatTranscript?.(e) : (await this._mentionsCapability?.resolvePastChatTranscript(e))?.toJSON();
    }
    async _awaitCloudAgentWorkspace(e) {
        const t = this._workspaceFactory;
        if (!t) return;
        const n = t.workspace.value;
        if (n !== void 0) return n;
        if (e.isCancellationRequested) return;
        await t.load(U0.Unknown);
        const i = t.workspace.value;
        return i !== void 0 ? i : await new Promise((r)=>{
            const s = t.workspace.onChange((a)=>{
                a !== void 0 && (s.dispose(), o.dispose(), r(a));
            }), o = e.onCancellationRequested(()=>{
                s.dispose(), r(void 0);
            });
        });
    }
};

}
