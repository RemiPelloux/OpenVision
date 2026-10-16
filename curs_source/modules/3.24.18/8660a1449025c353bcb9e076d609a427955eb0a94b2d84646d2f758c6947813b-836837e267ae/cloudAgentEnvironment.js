import { Gt, Nt, Qe, Vh, Vn, Wd, en, st } from "./Iwo.js";
import { Ry } from "./agentRepositoryService.js";
import { qn, xI } from "./async.js";
import { Dqe, Owi, pd } from "./background_composer_pb.js";
import { rp } from "./bcIdFromAuthority.js";
import { kl } from "./browser.ts";
import { urk } from "./cloudAgentRepoSlashCommands.js";
import { lxn } from "./cloudCatalogService.js";
import { BPe } from "./cloudMcpOAuthFlowState.js";
import { eJm } from "./cloudMcpServerCache.js";
import { axn } from "./cloudMcpServerState.js";
import { TCi, fKm } from "./cloudWorkspaceFileSearch.js";
import { Fqe, Oqe } from "./constants_19.js";
import { pa } from "./constants_8.js";
import { DBa, Du, MBa } from "./dashboard_pb.js";
import { fo } from "./environmentService.js";
import { ld } from "./extensions_4.js";
import { $ok, AJm, BJm, Ctl, FJm, FVm, Gok, Klk, LJm, Lts, MVm, NJm, Nk, Nnl, OJm, OVm, Ots, PVm, Ptl, Sck, Sze, UJa, UJm, Ylk, Zlk, _ck, crk, eTi, etl, fck, gck, hnl, jJm, kck, mKm, nxn, pJm, rJm, rat, sle, vck, vze, wck, yck } from "./gYa.js";
import { NM, Ust, _Si, bSi, mJ, sf } from "./ipa.js";
import { Jtl, lTi } from "./localAgentEnvironment.js";
import { ub } from "./localAgentRepository.js";
import { mTt } from "./mentionChipActionHandler.js";
import { Ftl, Lns } from "./mentionsCapabilityService.js";
import { aTt } from "./mentionsQuery.js";
import { Ttl } from "./mentionsRanking.js";
import { Ki } from "./network.js";
import { cp } from "./objects.js";
import { lTt } from "./plusMenuMcpServerMapping.js";
import { D4e } from "./promptInputUriPayload.js";
import { Kf, ca } from "./reactive.js";
import { aJm } from "./repoSlashInventoryCache.js";
import { uTi } from "./settingsCloudMcpHelpers.js";
import { Hqt } from "./slashMenuData.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { gT } from "./utils_24.js";
import { Ai, Xo } from "./uuid_2.js";
import { Cu, Lc } from "./workspaceCollectionService.js";
import { Lh } from "./workspaceMetadataService.js";
import { HM } from "./workspaces.js";
import { Cqe, owi, vh } from "./yBp.js";
import { Rp } from "./ze.js";
var bTi, Lnl, $Jm, HJm, WJm, Onl, Fnl, GJm, qJm, zJm, VJm, KJm, YJm, XJm, czt;
export { $Jm, Fnl, GJm, HJm, KJm, Lnl, Onl, VJm, WJm, XJm, YJm, bTi, czt, qJm, zJm };
var __wakaru_Bnl_initialized = false;
export function Bnl() {
if (__wakaru_Bnl_initialized) return;
__wakaru_Bnl_initialized = true;
"use strict";
E(), Qe(), qn(), rp(), pa(), Gt(), Ki(), cp(), fn(), HM(), Du(), urk(), pd(), gT(), Ry(), Kf(), Hqt(), Lh(), fo(), ld(), fKm(), Jtl(), Ftl(), D4e(), uTi(), lTt(), eJm(), aJm(), lxn(), ub(), BPe(), axn(), Xo(), kl(), mTt(), Fqe(), aTt(), Ttl(), Cu(), bTi = "/workspace", Lnl = [
    "anysphere.cursor-agent-exec",
    "anysphere.cursor-agent-host"
], $Jm = "glass.cloudRepoBranches.", HJm = 300 * 1e3, WJm = "glass.cloudRepoBranchRecency.", Onl = 50, Fnl = [
    1e3,
    2e3,
    4e3,
    8e3,
    15e3,
    3e4,
    6e4,
    12e4
], GJm = 25, qJm = 8, zJm = new Map, VJm = 25, KJm = {
    mentionRanks: new Map,
    trackerRanks: new Map,
    historyRanks: new Map
}, YJm = 1e4, XJm = 3e4, czt = class extends st {
    constructor(t, e, n, i = {}){
        super(), this._targetRepoUrls = t, this._workspaceFactory = e, this._services = n, this._launchContext = i, this._slashMenuItems = new ca([]), this.slashMenuItems = this._slashMenuItems, this._mentionFilesLoading = new ca(!1), this.mentionFilesLoading = this._mentionFilesLoading, this._mcpServers = new ca([]), this.mcpServers = this._mcpServers, this._cloudPluginBrandLogoByPluginId = new Map, this._delegateStore = this._register(new Nt), this._defaultBranches = new ca([]), this.defaultBranches = this._defaultBranches, this._branchOptionsByRepo = new ca([]), this.branchOptionsByRepo = this._branchOptionsByRepo, this._delegateAttachGeneration = 0, this._warmRequested = !1, this._vmProvisionedSkills = [], this._managedSkills = [], this._managedSkillSourceUris = new Map, this._repoSlashMenuItems = [], this._repoSlashRefreshGeneration = 0, this._repoSlashMenuItemsAreComplete = !1, this._managedSkillsRefreshGeneration = 0, this._cloudMcpServers = [], this._cloudMcpStatusByServerId = new Map, this._cloudMcpRefreshGeneration = 0, this._branchStateByRepoPath = this._createBranchStates(t), this._slashDiscoveryGitRef = this._launchContext.gitRef?.trim() || void 0;
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
        return this._services.workspaceFileSearchCache ?? TCi;
    }
    _getWorkspaceReactive() {
        return this._workspaceFactory?.workspace;
    }
    _createBranchStates(t) {
        const e = new Map;
        return t.forEach((n, i)=>{
            const r = n.trim();
            if (!r) return;
            const s = sf(r), o = i === 0 ? bTi : s || r;
            !o || e.has(o) || e.set(o, {
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
        }), e;
    }
    _getBranchState(t) {
        return this._branchStateByRepoPath.get(t.trim());
    }
    _syncDefaultBranches() {
        this._defaultBranches.set([
            ...this._branchStateByRepoPath.values()
        ].map((t)=>({
                repoPath: t.repoPath,
                branch: t.defaultBranch,
                repoUrl: t.repoUrl
            })));
    }
    _syncBranchOptionsByRepo() {
        this._branchOptionsByRepo.set([
            ...this._branchStateByRepoPath.values()
        ].map((t)=>({
                repoPath: t.repoPath,
                branchOptions: t.branchOptions
            })));
    }
    _syncRepoScopedBranchState() {
        this._syncDefaultBranches(), this._syncBranchOptionsByRepo();
    }
    _setDefaultBranch(t, e) {
        const n = t.defaultBranch;
        t.defaultBranch = e, this._syncDefaultBranches(), t.repoPath === bTi && this._slashDiscoveryGitRef === void 0 && n !== e && e !== void 0 && this._refreshRepoSlashCommands();
    }
    updateSlashDiscoveryGitRef(t) {
        const e = t?.trim();
        e && this._slashDiscoveryGitRef !== e && (this._slashDiscoveryGitRef = e, this._refreshRepoSlashCommands());
    }
    _setBranchOptions(t, e) {
        t.branchOptions = e, this._syncBranchOptionsByRepo();
    }
    setVmProvisionedSkills(t) {
        this._vmProvisionedSkills = t, this._rebuildMergedSlashMenu();
    }
    refreshSlashInventory() {
        this._markWorkspaceFilesStale(), this._refreshRepoSlashCommands();
    }
    _markWorkspaceFilesStale() {
        const t = this._launchContext.agentId?.trim();
        if (!t) return;
        const e = this._workspaceFileSearchKey ?? this._getWorkspaceFileSearchKey(t);
        this._workspaceFileSearchKey = e, this._workspaceFileSearchCache.markStale(e);
    }
    async hydrateVmProvisionedSkills(t) {
        try {
            const i = ((await this._services.backgroundComposerClient.getBackgroundComposerInfo(new Dqe({
                bcId: t,
                includeDiff: !1,
                doNotThrowIfSetupNotFinished: !0
            }), {
                headers: vh(Ai())
            })).composer?.vmProvisionedSkills ?? []).filter((r)=>r.skillId.trim().length > 0).map((r)=>({
                    skillId: r.skillId,
                    description: r.description,
                    displayName: r.displayName,
                    environments: r.environments,
                    disabledEnvironments: r.disabledEnvironments
                }));
            this.setVmProvisionedSkills(i);
        } catch (e) {
            this._services.structuredLogService?.debug("background_composer", "CloudAgentEnvironment: Failed to hydrate VM provisioned skills", {
                agentId: t,
                error: e instanceof Error ? e : void 0
            });
        }
    }
    _managedSkillSourceUri(t) {
        const e = this._services.getHostUserHomeUri?.(), n = AJm(t);
        if (!(e === void 0 || n === void 0)) return rt.joinPath(e, ".cursor", "skills-cursor", n, "SKILL.md");
    }
    async _verifiedManagedSkillSourceUris(t) {
        const e = this._services.fileExists;
        if (e === void 0) return new Map;
        const n = new xI(qJm), i = t.map((s)=>n.queue(async ()=>{
                const o = this._managedSkillSourceUri(s.skillId);
                if (o !== void 0) try {
                    return await e(o) ? [
                        s.skillId,
                        o.toString()
                    ] : void 0;
                } catch  {
                    return;
                }
            })), r = await Promise.all(i);
        return new Map(r.filter((s)=>s !== void 0));
    }
    _vmSkillSlashItems(t, e) {
        const n = e.scope === "managed" ? this._managedSkillSourceUris : zJm;
        return t.map((i)=>{
            const r = _Si(i.skillId) ?? i.skillId.trim(), s = i.displayName?.trim(), o = s !== void 0 && s.length > 0 ? s : r, a = {
                case: "cursor_skill",
                filename: i.skillId,
                displayName: r
            }, l = e.scope === "managed" ? PVm(r) : void 0, c = Lts(l?.description ?? i.description), u = e.scope === "managed" ? MVm(r) : void 0, d = o !== r ? [
                r,
                ...u ?? []
            ] : u;
            return {
                id: `skill-${i.skillId}`,
                name: o,
                ...o !== r ? {
                    commandName: r
                } : {},
                searchAliases: d,
                searchKeywords: l?.searchKeywords,
                description: c,
                type: "skill",
                slashSubject: mJ({
                    kind: "skill",
                    scope: e.scope,
                    identifier: r,
                    syncEligibility: e.syncEligibility
                }),
                payload: a,
                onSelect: ()=>{},
                tooltip: c || void 0,
                sourceUri: n.get(i.skillId)
            };
        });
    }
    async _refreshManagedSkills() {
        const t = ++this._managedSkillsRefreshGeneration;
        if (!this._services.cursorAuthenticationService.isAuthenticated()) {
            !this._store.isDisposed && t === this._managedSkillsRefreshGeneration && (this._managedSkills = [], this._managedSkillSourceUris = new Map, this._managedSkillsScope = void 0, this._rebuildMergedSlashMenu());
            return;
        }
        this._resetManagedSkillsOnScopeChange();
        const e = this._getCloudMcpCacheScope();
        try {
            const n = await this._services.cloudCatalog.getManagedSkills();
            if (this._store.isDisposed || t !== this._managedSkillsRefreshGeneration) return;
            const i = (n.skills ?? []).filter((o)=>o.enabled !== !1 && NJm({
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
            if (this._store.isDisposed || t !== this._managedSkillsRefreshGeneration) return;
            const s = this._getCloudMcpCacheScope();
            if (s.authId !== e.authId || s.teamId !== e.teamId) return;
            this._managedSkills = i, this._managedSkillSourceUris = r, this._managedSkillsScope = s, this._rebuildMergedSlashMenu();
        } catch (n) {
            if (this._store.isDisposed || t !== this._managedSkillsRefreshGeneration) return;
            this._services.structuredLogService?.warn("background_composer", "CloudAgentEnvironment: Failed to hydrate managed skills", {
                error: n instanceof Error ? n : void 0
            }), this._managedSkills = [], this._managedSkillSourceUris = new Map, this._rebuildMergedSlashMenu();
        }
    }
    _resetManagedSkillsOnScopeChange() {
        const t = this._managedSkillsScope, e = this._getCloudMcpCacheScope();
        t !== void 0 && t.authId === e.authId && t.teamId === e.teamId || (this._managedSkills = [], this._managedSkillSourceUris = new Map, this._managedSkillsScope = e, this._rebuildMergedSlashMenu());
    }
    _rebuildMergedSlashMenu() {
        const t = crk({
            delegateItems: this._delegateEnvironment?.slashMenuItems?.value ?? [],
            repoInventoryItems: this._repoSlashMenuItems
        }), e = new Set, n = (a)=>{
            const l = Ots(a);
            l !== void 0 && e.add(l);
        };
        t.forEach(n);
        const i = this._repoSlashMenuItems.filter((a)=>{
            const l = Ots(a);
            return l === void 0 || !e.has(l) ? (n(a), !0) : !1;
        }), r = this._vmSkillSlashItems(this._vmProvisionedSkills.filter((a)=>NJm(a) && !e.has(UJa(a.skillId))), {
            scope: "user",
            syncEligibility: "local-only"
        });
        r.forEach(n);
        const s = this._vmSkillSlashItems(this._managedSkills.filter((a)=>!e.has(UJa(a.skillId))), {
            scope: "managed",
            syncEligibility: "server-safe"
        }), o = this._createRecencyAttacher();
        this._slashMenuItems.set(o([
            ...t,
            ...i,
            ...r,
            ...s
        ]));
    }
    _createRecencyAttacher() {
        const t = this._services.cursorCommandsService?.getRecentlyUsedGlobalOrder();
        if (!t || t.length === 0) return (r)=>r;
        const e = Date.now(), n = new Map, i = new Map;
        return t.forEach((r, s)=>{
            const o = bSi(r.type, r.identifier);
            o !== void 0 && !n.has(o) && (n.set(o, e - s * 1e3), i.set(o, s));
        }), (r)=>r.map((s)=>{
                if (s.type !== "skill" && s.type !== "command" && s.type !== "subagent") return s;
                const o = s.payload?.case === "cursor_skill" || s.payload?.case === "cursor_command" ? s.payload.filename : s.payload?.case === "subagent" ? s.payload.name : s.id.startsWith(`${s.type}-`) ? s.id.slice(`${s.type}-`.length) : s.id, a = bSi(s.type, o), l = a !== void 0 ? n.get(a) : void 0, c = a !== void 0 ? i.get(a) : void 0;
                return s.lastUsedTime === l && s.legacyMruRank === c ? s : {
                    ...s,
                    lastUsedTime: l,
                    legacyMruRank: c
                };
            });
    }
    _resolveGitRefForSlashDiscovery() {
        return this._slashDiscoveryGitRef ? this._slashDiscoveryGitRef : this._branchStateByRepoPath.get(bTi)?.defaultBranch?.trim() || void 0;
    }
    _cachedRepoSlashMenuItems(t) {
        const e = rJm(this._services.cacheStorageService, {
            authId: this._services.cursorAuthenticationService.getCurrentAuthId(),
            repoUrl: t
        });
        return e === void 0 ? void 0 : FVm(e, {
            repoUrl: t
        });
    }
    _hydrateRepoSlashCommandsFromCache() {
        if (!this._services.cursorAuthenticationService.isAuthenticated()) return;
        this._repoSlashScopeAuthId = this._services.cursorAuthenticationService.getCurrentAuthId();
        const t = OVm(this._targetRepoUrls[0]), e = t === void 0 ? void 0 : this._cachedRepoSlashMenuItems(t);
        this._repoSlashMenuItems = e ?? [], this._repoSlashMenuItemsAreComplete = e !== void 0, this._rebuildMergedSlashMenu();
    }
    _resetRepoSlashRowsOnScopeChange() {
        const t = this._services.cursorAuthenticationService.getCurrentAuthId();
        this._repoSlashScopeAuthId !== void 0 && this._repoSlashScopeAuthId === t || this._hydrateRepoSlashCommandsFromCache();
    }
    async _refreshRepoSlashCommands() {
        const t = ++this._repoSlashRefreshGeneration, e = OVm(this._targetRepoUrls[0]), n = this._launchContext.agentId?.trim() ?? "";
        if (!this._services.cursorAuthenticationService.isAuthenticated() || n.length === 0 && e === void 0) {
            !this._store.isDisposed && t === this._repoSlashRefreshGeneration && (this._repoSlashMenuTargetKey = void 0, this._repoSlashMenuItems = [], this._repoSlashMenuItemsAreComplete = !1, this._repoSlashScopeAuthId = void 0, this._rebuildMergedSlashMenu());
            return;
        }
        this._resetRepoSlashRowsOnScopeChange();
        const i = this._resolveGitRefForSlashDiscovery(), r = JSON.stringify([
            n,
            e ?? null,
            i ?? null
        ]), s = this._repoSlashMenuTargetKey;
        if (s !== r && (this._repoSlashMenuTargetKey = r, s !== void 0)) {
            const o = e !== void 0 ? this._cachedRepoSlashMenuItems(e) : void 0;
            this._repoSlashMenuItems = o ?? [], this._repoSlashMenuItemsAreComplete = o !== void 0, this._rebuildMergedSlashMenu();
        }
        try {
            const o = await this._services.cursorAuthenticationService.dashboardClient();
            if (this._store.isDisposed || t !== this._repoSlashRefreshGeneration) return;
            for(let a = 0;; a++){
                const l = n.length > 0 ? await o.getBackgroundComposerSlashCommands(new DBa({
                    bcId: n,
                    repoUrl: e,
                    gitRef: i
                })) : await o.getRepoSlashCommands(new MBa({
                    repoUrl: e,
                    gitRef: i
                }));
                if (this._store.isDisposed || t !== this._repoSlashRefreshGeneration) return;
                const c = {
                    skillNames: l.skillNames ?? [],
                    commandNames: l.commandNames ?? [],
                    skills: "skills" in l ? l.skills : void 0,
                    commands: "commands" in l ? l.commands : void 0
                }, u = "machineInventoryPending" in l && l.machineInventoryPending === !0;
                if ((!u || !this._repoSlashMenuItemsAreComplete) && (this._repoSlashMenuItems = FVm(c, {
                    repoUrl: e
                }), this._repoSlashMenuItemsAreComplete = !u, this._rebuildMergedSlashMenu()), !u && e !== void 0) {
                    const h = {
                        authId: this._services.cursorAuthenticationService.getCurrentAuthId(),
                        repoUrl: e
                    }, p = n.length === 0 && c.skillNames.length === 0 && c.commandNames.length === 0 ? rJm(this._services.cacheStorageService, h) : void 0;
                    p !== void 0 && (p.skillNames.length > 0 || p.commandNames.length > 0) || Zlk(this._services.cacheStorageService, h, {
                        gitRef: i,
                        ...c
                    });
                }
                const d = a >= Fnl.length;
                if (!u || d || (await Wd(Fnl[a]), this._store.isDisposed || t !== this._repoSlashRefreshGeneration)) return;
            }
        } catch (o) {
            if (this._store.isDisposed || t !== this._repoSlashRefreshGeneration) return;
            this._services.structuredLogService?.debug("background_composer", "CloudAgentEnvironment: Failed to hydrate repo slash commands", {
                repoUrl: e,
                gitRef: i,
                agentId: n.length > 0 ? n : void 0,
                error: o instanceof Error ? o : void 0
            });
        }
    }
    _setCloudMcpServers(t, e = this._cloudMcpStatusByServerId, n = this._cloudPluginBrandLogoByPluginId) {
        this._cloudMcpServers = t, this._cloudMcpStatusByServerId = e, this._cloudPluginBrandLogoByPluginId = n;
        const i = Gok(t, e, this._services.mcpWellKnownDetectionService, this._cloudPluginBrandLogoByPluginId);
        Rp(this._mcpServers.value, i) || this._mcpServers.set(i);
    }
    _getCloudMcpCacheScope() {
        return {
            authId: this._services.cursorAuthenticationService.getCurrentAuthId(),
            teamId: this._services.cursorAuthenticationService.getTeamId()
        };
    }
    _hydrateCloudMcpServersFromCache() {
        if (!this._services.cursorAuthenticationService.isAuthenticated()) return;
        const t = this._getCloudMcpCacheScope();
        this._cloudMcpServersScope = t;
        const e = Klk(this._services.cacheStorageService, t);
        this._setCloudMcpServers(e?.servers ?? [], e?.statusByServerId ?? new Map, e?.pluginBrandLogoByPluginId ?? new Map);
    }
    _resetCloudMcpServersOnScopeChange() {
        const t = this._cloudMcpServersScope, e = this._getCloudMcpCacheScope();
        t !== void 0 && t.authId === e.authId && t.teamId === e.teamId || this._hydrateCloudMcpServersFromCache();
    }
    async _fetchCloudMcpStatuses(t, e, n) {
        const i = t.filter(hnl), r = pJm(t);
        if (r.length === 0) return new Map;
        const s = rat(this._services.productService.urlProtocol, this._services.cloudMcpOAuthLoopbackService.isEnabled());
        try {
            const o = await this._services.cloudCatalog.getMcpStatuses({
                serverIds: r,
                oauthRedirectUri: s
            }, {
                forceRefresh: n
            });
            if (this._store.isDisposed || e !== this._cloudMcpRefreshGeneration) return new Map;
            const a = new Map;
            for (const l of o.statuses){
                const c = LJm(l);
                c !== void 0 && a.set(l.id, {
                    ...c,
                    authorizationUrl: OJm(c.authorizationUrl, l.id, i.find((u)=>u.id === l.id)?.url)
                });
            }
            return a;
        } catch (o) {
            if (n) throw o;
            const a = new Map;
            for (const l of i)a.set(l.id, {
                status: "error",
                isConnected: !1
            });
            return a;
        }
    }
    async _refreshCloudMcpServers(t) {
        const e = ++this._cloudMcpRefreshGeneration;
        if (!this._services.cursorAuthenticationService.isAuthenticated()) {
            if (t?.preserveOnError === !0) throw new Error("Cannot refresh cloud MCP servers: not authenticated");
            this._setCloudMcpServers([], new Map, new Map), this._cloudMcpServersScope = void 0;
            return;
        }
        this._resetCloudMcpServersOnScopeChange();
        const n = this._getCloudMcpCacheScope();
        try {
            const i = t?.forceRefresh === !0, r = await this._services.cloudCatalog.getMcpCatalog({
                forceRefresh: i
            }), s = r.servers, o = r.pluginBrandLogosResolved ? r.pluginBrandLogoByPluginId : this._cloudPluginBrandLogoByPluginId;
            if (this._store.isDisposed || e !== this._cloudMcpRefreshGeneration) return;
            const a = await this._fetchCloudMcpStatuses(s, e, i);
            if (this._store.isDisposed || e !== this._cloudMcpRefreshGeneration) return;
            const l = this._getCloudMcpCacheScope();
            if (l.authId !== n.authId || l.teamId !== n.teamId) return;
            this._setCloudMcpServers(s, a, o), this._cloudMcpServersScope = l, Ylk(this._services.cacheStorageService, l, {
                servers: s,
                statusByServerId: a,
                pluginBrandLogoByPluginId: o
            });
        } catch (i) {
            if (this._store.isDisposed || e !== this._cloudMcpRefreshGeneration) return;
            if (t?.preserveOnError === !0) throw i;
        }
    }
    _getBranchCacheAuthScopeFromToken(t) {
        if (t) return this._services.cursorAuthenticationService.getAuthIdFromToken(t) ?? void 0;
    }
    async _getBranchCacheAuthScope() {
        try {
            const t = await this._services.cursorAuthenticationService.getAccessToken();
            return this._getBranchCacheAuthScopeFromToken(t);
        } catch  {
            return;
        }
    }
    async _initializeBranchCacheKeys(t) {
        const e = [
            ...this._branchStateByRepoPath.values()
        ], n = new Map;
        for (const r of e)n.set(r, ++r.cacheKeyGeneration);
        const i = e.length > 0 ? t ? this._getBranchCacheAuthScopeFromToken(t.accessToken) : await this._getBranchCacheAuthScope() : void 0;
        for (const r of e){
            const s = n.get(r);
            if (this._store.isDisposed || s === void 0 || s !== r.cacheKeyGeneration) continue;
            const o = Nnl(r.repoUrl), a = o && i ? BJm($Jm, i, o) : void 0, l = o && i ? BJm(WJm, i, o) : void 0, c = a !== r.branchOptionsCacheKey || l !== r.branchRecencyCacheKey, u = r.branchOptions?.query ?? "";
            if (r.normalizedRepoUrl = o, r.branchOptionsCacheKey = a, r.branchRecencyCacheKey = l, c && (r.requestGeneration++, this._setBranchOptions(r, u.length > 0 ? {
                branches: [],
                query: u,
                page: 0,
                hasMore: !1,
                isLoading: !0,
                isLoadingMore: !1,
                isEmptyRepo: !1
            } : void 0), this._setDefaultBranch(r, void 0)), u.length > 0) {
                c && this._fetchBranchOptionsPage(r, {
                    append: !1,
                    page: 1,
                    query: u
                });
                continue;
            }
            this._shouldRevalidateBranchOptions(r) && this.refreshBranchOptions(r.repoPath);
        }
    }
    _getCachedBranchOptionsEntry(t) {
        const e = t.branchOptionsCacheKey;
        if (!e) return;
        const n = this._services.storageService.get(e, -1);
        if (n) try {
            return JSON.parse(n);
        } catch  {
            return;
        }
    }
    _getCachedBranchRecencyEntries(t) {
        const e = t.branchRecencyCacheKey;
        if (!e) return [];
        const n = this._services.storageService.get(e, -1);
        if (!n) return [];
        try {
            const i = JSON.parse(n);
            return Array.isArray(i) ? i.filter(wck) : [];
        } catch  {
            return [];
        }
    }
    _storeBranchRecencyEntries(t, e) {
        t.branchRecencyCacheKey && this._services.storageService.store(t.branchRecencyCacheKey, JSON.stringify(e.slice(0, Onl)), -1, 1);
    }
    _getBranchRecencyRanks(t) {
        const e = new Map;
        for (const i of this._getCachedBranchRecencyEntries(t))jJm(e, i.name, {
            priority: 0,
            timestamp: i.selectedAtMs
        });
        const n = t.normalizedRepoUrl;
        if (!n) return e;
        for (const i of this._services.getAgentHeaders?.() ?? []){
            if (i.isArchived.value || !Nk(i.trackedGitRepos.value).some((o)=>Nnl(o) === n)) continue;
            const s = i.lastUpdatedAt.value || i.createdAt;
            for (const o of i.trackedGitRepos.value){
                const a = o.repoUrl.value?.trim();
                if (!a || Nnl(a) !== n) continue;
                const l = o.activeBranchName.value?.trim();
                l && jJm(e, l, {
                    priority: 1,
                    timestamp: s
                });
            }
        }
        return e;
    }
    _orderBranchesByRecency(t, e) {
        if (e.length <= 1) return e;
        const n = this._getBranchRecencyRanks(t);
        if (n.size === 0) return e;
        const i = new Map;
        return e.forEach((r, s)=>{
            i.set(r.name, s);
        }), [
            ...e
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
    _toBranchOptionsState(t, e, n = "") {
        const i = Sck(e, n);
        return n.length > 0 ? i : {
            ...i,
            branches: this._orderBranchesByRecency(t, i.branches)
        };
    }
    _applyCachedBranchOptionsEntry(t, e) {
        this._setBranchOptions(t, this._toBranchOptionsState(t, e)), this._setDefaultBranch(t, UJm(e.branches, e.bootstrapBranch));
    }
    _shouldRevalidateBranchOptions(t) {
        const e = this._getCachedBranchOptionsEntry(t);
        return e ? (this._applyCachedBranchOptionsEntry(t, e), kck(e)) : !0;
    }
    _storeBranchOptions(t, e) {
        if (!t.branchOptionsCacheKey || e.query.length > 0) return;
        const n = {
            branches: e.branches,
            fetchedAtMs: Date.now(),
            page: e.page,
            hasMore: e.hasMore,
            isEmptyRepo: e.isEmptyRepo,
            bootstrapBranch: e.bootstrapBranch
        };
        this._services.storageService.store(t.branchOptionsCacheKey, JSON.stringify(n), -1, 1);
    }
    async _fetchBranchOptionsPage(t, e) {
        const n = t.repoUrl;
        if (!n) {
            this._setBranchOptions(t, void 0), this._setDefaultBranch(t, void 0);
            return;
        }
        const { append: i, page: r, query: s } = e, o = t.branchOptions;
        if (i && (!o || o.isLoading || o.isLoadingMore || !o.hasMore)) return;
        if (i && o) this._setBranchOptions(t, {
            ...o,
            isLoadingMore: !0
        });
        else {
            const l = o?.query === s;
            this._setBranchOptions(t, {
                branches: o?.branches ?? [],
                query: s,
                page: l ? o.page : 0,
                hasMore: l ? o.hasMore : !1,
                isLoading: !l || (o?.branches.length ?? 0) === 0,
                isLoadingMore: !1,
                isEmptyRepo: o?.isEmptyRepo ?? !1,
                bootstrapBranch: o?.bootstrapBranch
            });
        }
        const a = ++t.requestGeneration;
        try {
            const l = await this._services.backgroundComposerClient.getRepositoryBranches(new Owi({
                repoUrl: n,
                page: r,
                ...s ? {
                    query: s
                } : {}
            }));
            if (this._store.isDisposed || a !== t.requestGeneration) return;
            const c = l.branches.map((g)=>({
                    name: g.name,
                    isDefault: g.isDefault
                })), d = [
                ...i ? t.branchOptions?.branches ?? [] : []
            ];
            for (const g of c)d.some((f)=>f.name === g.name) || d.push(g);
            const p = {
                branches: s.length === 0 ? this._orderBranchesByRecency(t, d) : d,
                query: s,
                page: r,
                hasMore: l.hasMore,
                isLoading: !1,
                isLoadingMore: !1,
                isEmptyRepo: l.isEmptyRepo,
                bootstrapBranch: l.bootstrapBranch || void 0
            };
            this._setBranchOptions(t, p), s.length === 0 && this._setDefaultBranch(t, UJm(d, p.bootstrapBranch)), this._storeBranchOptions(t, {
                ...p,
                branches: d
            });
        } catch  {
            if (this._store.isDisposed || a !== t.requestGeneration) return;
            const l = t.branchOptions;
            if (!l) return;
            this._setBranchOptions(t, {
                ...l,
                isLoading: !1,
                isLoadingMore: !1
            });
        }
    }
    notifyBranchPickerOpened(t) {}
    recordBranchSelection(t, e) {
        const n = this._getBranchState(t);
        if (!n) return;
        const i = e.trim();
        if (!i || !n.branchRecencyCacheKey) return;
        const r = [
            {
                name: i,
                selectedAtMs: Date.now()
            },
            ...this._getCachedBranchRecencyEntries(n).filter((o)=>o.name !== i)
        ].slice(0, Onl);
        this._storeBranchRecencyEntries(n, r);
        const s = n.branchOptions;
        !s || s.query.length > 0 || this._setBranchOptions(n, {
            ...s,
            branches: this._orderBranchesByRecency(n, s.branches)
        });
    }
    setBranchOptionsQuery(t, e) {
        const n = this._getBranchState(t);
        if (!n) return;
        const i = e.trim();
        n.branchOptions?.query !== i && (i.length === 0 && (n.requestGeneration++, !this._shouldRevalidateBranchOptions(n)) || this._fetchBranchOptionsPage(n, {
            append: !1,
            page: 1,
            query: i
        }));
    }
    loadMoreBranchOptions(t) {
        const e = this._getBranchState(t);
        if (!e) return Promise.resolve();
        const n = e.branchOptions;
        return !n || !n.hasMore || n.isLoading || n.isLoadingMore ? Promise.resolve() : this._fetchBranchOptionsPage(e, {
            append: !0,
            page: n.page + 1,
            query: n.query
        });
    }
    refreshBranchOptions(t) {
        const e = this._getBranchState(t);
        return e ? this._fetchBranchOptionsPage(e, {
            append: !1,
            page: 1,
            query: e.branchOptions?.query ?? ""
        }) : Promise.resolve();
    }
    async _initializeAsync() {
        const t = this._getWorkspaceReactive();
        if (t !== void 0) {
            let n = !1;
            const i = this._register(new Vn), r = (s)=>{
                if (i.clear(), !s || this._store.isDisposed) return;
                const o = ()=>{
                    n = !0, this._attachDelegateEnvironment(s.workspaceIdentifier);
                }, a = vck(s);
                if (a.kind === "never") return;
                if (a.kind === "local") {
                    o();
                    return;
                }
                const { extensionService: l } = a, c = new Nt;
                i.value = c, _ck(l).catch(()=>!1).then((u)=>{
                    if (!c.isDisposed) {
                        if (u) {
                            o();
                            return;
                        }
                        c.add(en.once(l.onDidChangeExtensionsStatus)(()=>r(s)));
                    }
                });
            };
            if (this._register(t.onChange(r)), r(t.value), !n) {
                const s = await this._findMatchingWorkspace();
                !this._store.isDisposed && s && !n && await this._attachDelegateEnvironment(s);
            }
            this._rebuildMergedSlashMenu();
            return;
        }
        const e = await this._findMatchingWorkspace();
        if (!this._store.isDisposed) {
            if (!e) {
                this._rebuildMergedSlashMenu();
                return;
            }
            await this._attachDelegateEnvironment(e);
        }
    }
    async _attachDelegateEnvironment(t) {
        const e = ++this._delegateAttachGeneration;
        if (this._delegateWorkspaceIdentifierId === t.id) return;
        let n;
        try {
            if (n = await this._services.workspaceCollectionService.createWorkspaceReference(t, Lc.Customizations | Lc.Mcp | Lc.Git), this._store.isDisposed) {
                n.dispose();
                return;
            }
            if (this._store.isDisposed || e !== this._delegateAttachGeneration || this._delegateWorkspaceIdentifierId === t.id) {
                n.dispose();
                return;
            }
            this._delegateStore.clear(), this._delegateEnvironment = void 0, this._delegateWorkspaceIdentifierId = void 0;
            const i = new lTi(n, {
                agentKind: "cloud",
                includeCloudOnlyGlobalCommands: !0,
                targetEnvironment: "cloud"
            });
            n = void 0, this._delegateEnvironment = i, this._delegateWorkspaceIdentifierId = t.id, this._delegateStore.add(i), this._delegateStore.add(i.slashMenuItems.onChange(()=>{
                this._rebuildMergedSlashMenu();
            })), this._rebuildMergedSlashMenu(), this._warmRequested && i.warmSlashMenuCache();
        } catch  {
            n?.dispose(), this._store.isDisposed || this._rebuildMergedSlashMenu();
        }
    }
    async _findMatchingWorkspace() {
        if (this._targetRepoUrls.length === 0) return;
        const t = Ust(this._targetRepoUrls);
        if (t.size === 0) return;
        const e = await this._services.workspacesService.getRecentlyOpened();
        for (const n of e.workspaces){
            if (n.remoteAuthority !== void 0) continue;
            const i = await this._getAnyWorkspaceIdentifier(n);
            if (!i) continue;
            const r = this._services.workspaceMetadataService.getMetadata(i), s = sle(r);
            if (s.length !== 0) {
                for (const o of s)if (t.has(NM(o))) return this._getWorkspaceIdentifier(n);
            }
        }
    }
    async _getAnyWorkspaceIdentifier(t) {
        if (owi(t)) return t.workspace;
        if (Cqe(t)) return this._services.workspacesService.getSingleFolderWorkspaceIdentifier(t.folderUri);
    }
    async _getWorkspaceIdentifier(t) {
        if (Cqe(t)) return this._services.workspacesService.getSingleFolderWorkspaceIdentifier(t.folderUri);
    }
    warmMentionSources() {
        const t = this._launchContext.agentId?.trim();
        if (t && !this._store.isDisposed) {
            const e = this._getWorkspaceFileSearchKey(t);
            this._workspaceFileSearchKey = e, this._workspaceFileSearchCache.prewarm(e, ()=>this._listCloudWorkspaceFilePaths(t));
        }
    }
    warmSlashMenuCache() {
        this._warmRequested = !0, this._delegateEnvironment?.warmSlashMenuCache();
    }
    applySelectionSideEffects(t, e) {
        if (this._delegateEnvironment) {
            this._delegateEnvironment.applySelectionSideEffects(t, e), this._recordSelectionRecency(t);
            return;
        }
        this._recordSelectionRecency(t, e);
    }
    _recordSelectionRecency(t, e) {
        switch(t.type){
            case "skill":
                {
                    const n = t.id.startsWith("skill-") ? t.id.slice(6) : t.id;
                    this._markCloudItemRecentlyUsed("skill", n), e?.(n);
                    break;
                }
            case "command":
                {
                    const n = t.id.startsWith("command-") ? t.id.slice(8) : t.id.startsWith("mcp-") ? t.id.slice(4) : t.id;
                    this._markCloudItemRecentlyUsed("command", n);
                    break;
                }
            case "subagent":
                {
                    const n = t.id.startsWith("subagent-") ? t.id.slice(9) : t.id;
                    this._markCloudItemRecentlyUsed("subagent", n);
                    break;
                }
            default:
                break;
        }
    }
    applySkillSelectionSideEffects(t, e) {
        if (this._delegateEnvironment) {
            this._delegateEnvironment.applySkillSelectionSideEffects(t, e);
            const i = t.startsWith("skill-") ? t.slice(6) : t;
            this._markCloudItemRecentlyUsed("skill", i);
            return;
        }
        const n = t.startsWith("skill-") ? t.slice(6) : t;
        this._markCloudItemRecentlyUsed("skill", n), e?.(n);
    }
    _markCloudItemRecentlyUsed(t, e) {
        const n = this._services.cursorCommandsService;
        !n || e.trim().length === 0 || (n.markAsRecentlyUsed(t, e), this._rebuildMergedSlashMenu());
    }
    toggleMcpServer(t, e) {
        this._toggleCloudMcpServer(t, e);
    }
    async runMcpServerAttentionAction(t) {
        if (t.kind !== "retry") throw new Error(`Unsupported cloud MCP action: ${t.kind}`);
        await this._retryCloudMcpServer(t.serverId);
    }
    async fetchCloudMcpAuthStatus(t) {
        const e = vze(t);
        if (e !== void 0) try {
            const r = (await (await this._services.cursorAuthenticationService.dashboardClient()).checkHttpMcpStatus({
                serverIds: [
                    e
                ],
                oauthRedirectUri: rat(this._services.productService.urlProtocol, this._services.cloudMcpOAuthLoopbackService.isEnabled())
            })).statuses.find((a)=>a.id === e), s = r && LJm(r);
            if (!s) return;
            const o = {
                ...s,
                authorizationUrl: OJm(s.authorizationUrl, e, this._cloudMcpServers.find((a)=>a.id === e)?.url)
            };
            if (!this._store.isDisposed) {
                const a = new Map(this._cloudMcpStatusByServerId);
                a.set(e, o), this._setCloudMcpServers(this._cloudMcpServers, a);
            }
            return o;
        } catch  {
            return;
        }
    }
    async _retryCloudMcpServer(t) {
        const e = vze(t), n = this._cloudMcpServers.find((i)=>i.id === e);
        if (e === void 0 || !n || !hnl(n)) throw new Error(`Cloud MCP server cannot be retried: ${t}`);
        this._cloudMcpRetryRefresh || (this._cloudMcpRetryRefresh = this._refreshCloudMcpServers({
            preserveOnError: !0,
            forceRefresh: !0
        }).finally(()=>{
            this._cloudMcpRetryRefresh = void 0;
        })), await this._cloudMcpRetryRefresh;
    }
    async _toggleCloudMcpServer(t, e) {
        const n = vze(t);
        if (n === void 0) return;
        const i = this._cloudMcpServers, r = i.find((c)=>c.id === n);
        if (!r || r.enabled === e) return;
        const s = this._cloudMcpStatusByServerId, o = i.map((c)=>c.id === n ? fck(c, {
                enabled: e
            }) : c), a = new Map(s);
        e || a.delete(n);
        const l = o.filter((c)=>c.enabled).map((c)=>c.id);
        this._setCloudMcpServers(o, a);
        try {
            await (await this._services.cursorAuthenticationService.dashboardClient()).updateUserDefaultMcpSettings({
                enabledServerIds: l
            }), Sze();
        } catch  {
            this._store.isDisposed || this._setCloudMcpServers(i, s);
        }
    }
    _getCloudMcpMentionItems(t) {
        return $ok(this._mcpServers.value, t);
    }
    async _getCloudPastChatMentionItems(t, e) {
        return this._services.experimentService.checkFeatureGate("cloud_agent_bc_id_attachment", {
            disableExposureLog: !0
        }) ? e.isCancellationRequested || this._store.isDisposed ? [] : [
            ...(this._services.getAgentHeaders?.() ?? []).map((i)=>({
                    header: i,
                    parent: void 0
                })),
            ...this._services.getCloudSubagentHeaders?.() ?? []
        ].filter(({ header: i })=>!i.isArchived.value && etl(t, i.name.value.trim() || Oqe)).sort((i, r)=>(r.header.lastUpdatedAt.value ?? r.header.createdAt) - (i.header.lastUpdatedAt.value ?? i.header.createdAt)).slice(0, GJm).map(({ header: i, parent: r })=>{
            const s = i.name.value.trim() || Oqe;
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
                parentName: r === void 0 ? void 0 : r.name.value.trim() || Oqe
            };
        }) : [];
    }
    async _listCloudWorkspaceFilePaths(t) {
        return (await this._services.backgroundComposerClient.listWorkspaceFiles({
            bcId: t
        })).relativePaths;
    }
    _loadCloudWorkspaceFileSearch(t) {
        const e = this._getWorkspaceFileSearchKey(t);
        return this._workspaceFileSearchKey = e, this._workspaceFileSearchCache.load(e, ()=>this._listCloudWorkspaceFilePaths(t));
    }
    _getWorkspaceFileSearchKey(t) {
        return mKm({
            agentId: t,
            authId: this._services.cursorAuthenticationService.getCurrentAuthId(),
            teamId: this._services.cursorAuthenticationService.getTeamId()
        });
    }
    async _getCloudWorkspaceFileMentions(t, e, n) {
        const i = this._launchContext.agentId?.trim();
        if (!i || n?.scope !== void 0 && n.scope !== "files_and_folders" || e.isCancellationRequested) return [];
        let r;
        try {
            r = n?.strategy === "fast" ? this._workspaceFileSearchCache.get(this._getWorkspaceFileSearchKey(i)) : await this._loadCloudWorkspaceFileSearch(i);
        } catch  {
            return [];
        }
        if (!r || e.isCancellationRequested || this._store.isDisposed) return [];
        let s = this._keystrokeFileScan;
        (s?.searchIndexRef.deref() !== r || s.query !== t || s.cancellationToken !== e) && (s = {
            searchIndexRef: new WeakRef(r),
            query: t,
            cancellationToken: e,
            mentions: yck({
                agentId: i,
                searchIndex: r,
                query: t,
                isBlocked: (a)=>this._services.cursorIgnoreService?.isAdminBlockedForRepoPaths({
                        repoUrls: this._targetRepoUrls,
                        relativePath: a
                    }) ?? !1,
                cancellationToken: e
            })
        }, this._keystrokeFileScan = s);
        const o = await s.mentions;
        return this._store.isDisposed ? [] : o;
    }
    async getMentionItems(t, e, n) {
        if (e.isCancellationRequested) return [];
        let i, r;
        if (n === void 0) i = void 0;
        else {
            const { onAuthoritativePartial: S, ...k } = n;
            i = k, r = S;
        }
        if (i?.scope === "past_chats") {
            const S = await this._getCloudPastChatMentionItems(t, e);
            return this._delegateEnvironment ? [
                ...await this._delegateEnvironment.getMentionItems(t, e, i),
                ...S
            ] : S;
        }
        const s = i?.scope === void 0, o = s ? this._getCloudMcpMentionItems(t) : [], a = i?.scope === void 0 && t.trim().length > 0 ? await this._getCloudPastChatMentionItems(t, e) : [], l = i?.scope === void 0 || i.scope === "branch_diff_main" ? eTi(t) : [], c = i?.scope === void 0 ? Ptl(t) : [], u = (S)=>{
            const k = s ? gck(S, o) : [
                ...S
            ], C = [
                ...l,
                ...c
            ].filter((I)=>!k.some((A)=>A.id === I.id));
            if (a.length === 0) return [
                ...C,
                ...k
            ];
            const T = Ctl(nxn(t), [
                ...k,
                ...a
            ], KJm).map((I)=>I.item);
            return [
                ...C,
                ...T
            ];
        }, d = this._launchContext.agentId?.trim(), h = !!d && (i?.scope === void 0 || i.scope === "files_and_folders");
        if (i?.strategy === "fast" && !h && this._delegateEnvironment) {
            const S = await this._delegateEnvironment.getMentionItems(t, e, i);
            return u(S);
        }
        const p = this._getCloudWorkspaceFileMentions(t, e, i);
        if (i?.strategy === "fast") {
            const S = await p;
            return u(S);
        }
        const g = Vh((this._delegateEnvironment ? this._delegateEnvironment.getMentionItems(t, e, i) : this._getWorkspaceCapabilityMentionItems(t, e, i)).catch(()=>[]), YJm).then((S)=>S ?? []), f = Vh(p, XJm), _ = (S, k)=>k === void 0 && h ? S.filter((C)=>C.type !== "file") : S;
        if (this._mentionFilesLoadingPass = e, this._mentionFilesLoading.set(h && d !== void 0 && this._workspaceFileSearchCache.get(this._getWorkspaceFileSearchKey(d)) === void 0), f.then(()=>{
            this._mentionFilesLoadingPass === e && this._mentionFilesLoading.set(!1);
        }), r !== void 0) {
            const S = await this._getCloudWorkspaceFileMentions(t, e, {
                ...i,
                strategy: "fast"
            });
            let k = [], C;
            const T = ()=>{
                if (e.isCancellationRequested || this._store.isDisposed) return;
                const I = u(FJm({
                    items: _(k, C),
                    cloudFileItems: C ?? S
                }));
                r(I.filter((A)=>A.type !== "canvas"));
            };
            g.then((I)=>{
                k = I, I.length > 0 && T();
            }), f.then((I)=>{
                C = I, h && T();
            });
        }
        const [b, y] = await Promise.all([
            g,
            f
        ]);
        return u(FJm({
            items: _(b, y),
            cloudFileItems: y ?? []
        }));
    }
    async _getWorkspaceCapabilityMentionItems(t, e, n) {
        const i = await this._awaitCloudAgentWorkspace(e);
        if (!i || this._store.isDisposed) return [];
        if (!this._mentionsCapability) {
            const r = new Lns(i);
            if (this._store.isDisposed) return r.dispose(), [];
            this._mentionsCapability = this._register(r);
        }
        return this._mentionsCapability.getMentionItems({
            query: t,
            cancellationToken: e,
            strategy: n?.strategy,
            scope: n?.scope
        });
    }
    async resolvePastChatFirstPrompt(t) {
        return this._delegateEnvironment ? this._delegateEnvironment.resolvePastChatFirstPrompt(t) : this._mentionsCapability?.getPastChatFirstPromptSnippet(rt.revive(t));
    }
    async resolvePastChatTranscript(t) {
        return this._delegateEnvironment ? this._delegateEnvironment.resolvePastChatTranscript?.(t) : (await this._mentionsCapability?.resolvePastChatTranscript(t))?.toJSON();
    }
    async _awaitCloudAgentWorkspace(t) {
        const e = this._workspaceFactory;
        if (!e) return;
        const n = e.workspace.value;
        if (n !== void 0) return n;
        if (t.isCancellationRequested) return;
        await e.load(Lc.Unknown);
        const i = e.workspace.value;
        return i !== void 0 ? i : await new Promise((r)=>{
            const s = e.workspace.onChange((a)=>{
                a !== void 0 && (s.dispose(), o.dispose(), r(a));
            }), o = t.onCancellationRequested(()=>{
                s.dispose(), r(void 0);
            });
        });
    }
};

}
