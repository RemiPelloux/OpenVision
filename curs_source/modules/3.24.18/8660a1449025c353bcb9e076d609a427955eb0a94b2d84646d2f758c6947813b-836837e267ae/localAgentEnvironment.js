import { KR, Qe, st } from "./Iwo.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { Rs, ss } from "./authenticationService.js";
import { kl } from "./browser.ts";
import { F9m } from "./cacheStorageEnvelope.js";
import { YEn, mqt } from "./cacheStorageService.js";
import { Kqe, g4e } from "./cloudMcpOAuthLoopbackService.js";
import { hQm, tlk } from "./coalescedRefreshScheduler.js";
import { nr, rs } from "./commands.js";
import { DJ, uG } from "./cursorCommands.js";
import { a0, xA } from "./cursorRules.js";
import { jIn } from "./customModeUtils.js";
import { fo, ps } from "./environmentService.js";
import { is, ms } from "./files.js";
import { DVm, Dlk, Dts, Ilk, Mlk, Nlk, Qak, Qrk, Rok, SQm, Tlk, Wpe, Zak, bns, jXm, nTi, oxn, xlk } from "./gYa.js";
import { Jv, hy } from "./gitContextService.js";
import { ZCi } from "./hostedMcpLogin.js";
import { UPe, dle } from "./hostedMcpPlacementService.js";
import { Mt } from "./index_197.js";
import { Clk, FQm } from "./localAgentBranchOptionsTracker.js";
import { iTi } from "./mcpConnectFlow.js";
import { N0, y2 } from "./mcpServiceTypes.js";
import { ACe, Obe } from "./mcpWellKnownDetection.js";
import { Ftl, Lns } from "./mentionsCapabilityService.js";
import { jns } from "./menuSourceHydrationMetrics.js";
import { Uh, ip } from "./metricsService.js";
import { cp } from "./objects.js";
import { CQm } from "./openMcpServerOutput.js";
import { kc, qc } from "./opener.js";
import { IA, VI } from "./pluginsProviderService.js";
import { lTt } from "./plusMenuMcpServerMapping.js";
import { fc, hu } from "./productService.js";
import { Hts, Kf, ca } from "./reactive.js";
import { Nh, Sg } from "./remoteAgentService.js";
import { aC, cN } from "./scm.js";
import { Hqt } from "./slashMenuData.js";
import { Zi, ki } from "./storage_2.js";
import { Cm, wh } from "./structuredLog.js";
import { jPe, yze } from "./subagentsService.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Sr, yr } from "./workspace.js";
import { Lh, Qg } from "./workspaceMetadataService.js";
import { VM, jx } from "./workspaceTrust.js";
import { Rp } from "./ze.js";
var Vns, aTi, UQm, Ktl, Ytl, Xtl, Ztl, jQm, Qtl, lTi;
export { Ktl, Qtl, UQm, Vns, Xtl, Ytl, Ztl, aTi, jQm, lTi };
var __wakaru_Jtl_initialized = false;
export function Jtl() {
if (__wakaru_Jtl_initialized) return;
__wakaru_Jtl_initialized = true;
"use strict";
E(), Qe(), cp(), fn(), ms(), rs(), qc(), Zi(), Cm(), Sr(), jx(), Mt(), kl(), Hqt(), jIn(), Ftl(), DJ(), IA(), a0(), yze(), Ss(), iTi(), ZCi(), dle(), Rs(), Kqe(), hu(), y2(), ACe(), ip(), Kf(), jns(), tlk(), hy(), YEn(), F9m(), lTt(), fo(), Lh(), Sg(), cN(), CQm(), Clk(), Vns = "slashMenuItems/", aTi = `${Vns}v7/`, UQm = 10080 * 60 * 1e3, Ktl = 1e6, Ytl = "\0slash-menu-oversized", Xtl = new Map, Ztl = "agentEnvironment.slashMenuItems.", jQm = `${mqt}${Ztl}`, Qtl = !1, lTi = class extends st {
    constructor(t, e){
        super(), this._workspaceRef = t, this._mcpServersRebuildQueued = !1, this._slashMenuRefresh = new hQm((j)=>this._doFetchAndSetSlashMenu(j)), this._register({
            dispose: ()=>this._workspaceRef?.dispose()
        }), this._includeCloudOnlyGlobalCommands = e.includeCloudOnlyGlobalCommands ?? !1, this._targetEnvironment = e.targetEnvironment, this._agentKind = e.agentKind;
        const n = this._workspaceRef;
        if (!n) throw new Error("LocalAgentEnvironment requires a workspace reference");
        const { cursorCommandsService: i, cursorRulesService: r, pluginsProviderService: s, subagentsService: o, mcpService: a, mcpWellKnownDetectionService: l, hostedMcpPlacementService: c, cursorAuthenticationService: u, cloudMcpOAuthLoopbackService: d, productService: h, openerService: p, metricsService: g, analyticsService: f, structuredLogService: _, fileService: b, workspaceContextService: y, workspaceMetadataService: S, remoteAgentService: k, commandService: C, workbenchEnvironmentService: T, gitContextService: I, scmService: A, storageService: P, workspaceTrustManagementService: M } = n.object.instantiationService.invokeFunction((j)=>({
                cursorCommandsService: j.get(uG),
                cursorRulesService: j.get(xA),
                pluginsProviderService: j.get(VI),
                subagentsService: j.get(jPe),
                mcpService: j.get(N0),
                mcpWellKnownDetectionService: j.get(Obe),
                hostedMcpPlacementService: j.get(UPe),
                cursorAuthenticationService: j.get(ss),
                cloudMcpOAuthLoopbackService: j.get(g4e),
                productService: j.get(fc),
                openerService: j.get(kc),
                metricsService: j.get(Uh),
                analyticsService: j.get(Qr),
                structuredLogService: j.get(wh),
                fileService: j.get(is),
                workspaceContextService: j.get(yr),
                workspaceMetadataService: j.get(Qg),
                remoteAgentService: j.get(Nh),
                commandService: j.get(nr),
                workbenchEnvironmentService: j.get(ps),
                gitContextService: j.get(Jv),
                scmService: j.get(aC),
                storageService: j.get(ki),
                workspaceTrustManagementService: j.get(VM)
            }));
        this._cursorCommandsService = i, this._cursorRulesService = r, this._pluginsProviderService = s, this._subagentsService = o, this._mcpService = a, this._mcpWellKnownDetectionService = l, this._hostedMcpPlacementService = c, this._hostedMcpLoginServices = {
            cursorAuthenticationService: u,
            cloudMcpOAuthLoopbackService: d,
            openerService: p,
            productService: h
        }, this._openerService = p, this._metricsService = g, this._sourceHydrationObserver = Zak((j)=>{
            Qak({
                event: j,
                metricsService: this._metricsService,
                agentKind: this._agentKind
            });
        }), this._analyticsService = f, this._structuredLogService = _, this._fileService = b, this._workspaceContextService = y, this._workspaceMetadataService = S, this._remoteAgentService = k, this._commandService = C, this._isGlass = T.isGlass === !0, this._workspaceIdentifier = n.object.workspaceIdentifier, this._mentionsCapability = new Lns(n.object), this._register(this._mentionsCapability), Qtl || (Qtl = !0, Tlk(P));
        const O = xlk({
            includeCloudOnlyGlobalCommands: this._includeCloudOnlyGlobalCommands,
            targetEnvironment: this._targetEnvironment
        }), N = T.isGlass ? "glass" : "classic", U = `${aTi}${O}.${N}.` + n.object.workspaceIdentifier.id;
        this._customModeInventoryScope = U, this._slashMenuItems = new Hts([], {
            ...Ilk(P, U),
            deserialize: Mlk
        }), this.slashMenuItems = this._slashMenuItems, this._mcpServers = new ca(this._buildMcpServers()), this.mcpServers = this._mcpServers, this._register(this._mcpService.onSettingsChanged(()=>{
            this._scheduleMcpServersRebuild();
        })), this._register(this._mcpService.onDidChangeMcpSnapshots(()=>{
            this._scheduleMcpServersRebuild();
        })), this._register(this._mcpService.onDidChangeServerStatus(()=>{
            this._scheduleMcpServersRebuild();
        })), this._register(this._mcpService.onDidInitialize(()=>{
            this._scheduleMcpServersRebuild();
        })), this._register(this._hostedMcpPlacementService.onDidChangeSnapshot(()=>{
            this._scheduleMcpServersRebuild();
        })), this._register(this._mcpWellKnownDetectionService.onDidResolveIcons(()=>{
            this._scheduleMcpServersRebuild();
        })), this._branchTracker = this._register(new FQm(n.object.workspaceIdentifier, I, A, y, S, P, M, T.remoteAuthority)), this.defaultBranches = this._branchTracker.defaultBranches, this.branchOptionsByRepo = this._branchTracker.branchOptionsByRepo, this._register(this._cursorCommandsService.onDidChangeCommands(()=>{
            this._fetchAndSetSlashMenu();
        })), this._register(this._cursorRulesService.onDidChangeRules(()=>{
            this._fetchAndSetSlashMenu();
        })), this._register(this._subagentsService.onDidSubagentsChange(()=>{
            this._fetchAndSetSlashMenu();
        })), this._register(this._pluginsProviderService.onDidPluginsCacheChange(()=>{
            this._fetchAndSetSlashMenu(), this._scheduleMcpServersRebuild();
        })), this._register(this._workspaceContextService.onDidChangeWorkspaceFolders(()=>{
            this._fetchAndSetSlashMenu();
        })), this._register(this._workspaceMetadataService.onDidChangeMetadata((j)=>{
            j.metadata.workspaceId === this._workspaceIdentifier.id && this._fetchAndSetSlashMenu();
        })), this._register(b.onDidFilesChange((j)=>{
            if (!j.gotAdded() && !j.gotDeleted()) return;
            const $ = y.getWorkspace().folders;
            for (const H of $)if (j.affects(H.uri, 1, 2)) {
                this._mentionsCapability?.invalidateFileQueryCache();
                return;
            }
        })), this._fetchAndSetSlashMenu();
    }
    _buildMcpServers() {
        return jXm(this._mcpService, this._mcpWellKnownDetectionService, this._hostedMcpPlacementService);
    }
    _scheduleMcpServersRebuild() {
        this._mcpServersRebuildQueued || (this._mcpServersRebuildQueued = !0, queueMicrotask(()=>{
            this._mcpServersRebuildQueued = !1, !this._store.isDisposed && this._setMcpServers(this._buildMcpServers());
        }));
    }
    _setMcpServers(t) {
        Rp(this._mcpServers.value, t) || (this._mcpServers.set(t), this._fetchAndSetSlashMenu());
    }
    _buildSlashMenuWorkspaceFolders() {
        const t = this._workspaceMetadataService.getMetadata(this._workspaceIdentifier)?.trackedGitRepos ?? [], e = this._remoteAgentService.getConnection() !== null;
        return this._workspaceContextService.getWorkspace().folders.map((n)=>{
            const i = Wpe(KR(n.uri, !0, e)), r = this._fileService.hasCapability(n.uri, 1024);
            return {
                path: i,
                pathCaseSensitive: r,
                repoScopeId: Dts({
                    folderPath: i,
                    pathCaseSensitive: r,
                    trackedRepos: t
                })
            };
        });
    }
    _fetchAndSetSlashMenu() {
        return this._slashMenuRefresh.refresh();
    }
    async _doFetchAndSetSlashMenu(t) {
        if (!this._workspaceRef) return;
        const e = this._resolveSlashMenuServices();
        try {
            const n = await DVm({
                services: e,
                existingRuleIds: [],
                existingSubagentNames: [],
                supportsSkills: !0,
                supportsSubagents: !0,
                onSelectOption: ()=>{},
                includeCloudOnlyGlobalCommands: this._includeCloudOnlyGlobalCommands,
                workspaceFolders: this._buildSlashMenuWorkspaceFolders(),
                targetEnvironment: this._targetEnvironment,
                token: t,
                sourceHydration: this._sourceHydrationObserver,
                onPartialItems: (s)=>{
                    if (t.isCancellationRequested) return;
                    const o = Dlk({
                        currentItems: this._slashMenuItems.value,
                        partialItems: s
                    });
                    this._slashMenuItems.setTransient(o);
                }
            });
            if (t.isCancellationRequested) return;
            Nlk(this._slashMenuItems.value, n) || this._slashMenuItems.set(n);
            const i = Qrk(n), r = Xtl.get(this._customModeInventoryScope);
            (r === void 0 || !Rp(r, i)) && (Xtl.set(this._customModeInventoryScope, i), this._analyticsService.trackEvent("custom_mode.inventory", i));
        } catch  {}
    }
    warmSlashMenuCache() {
        this._slashMenuItems.warm();
    }
    setBranchOptionsQuery(t, e) {
        this._branchTracker?.setQuery(t, e);
    }
    notifyBranchPickerOpened(t) {
        this._branchTracker?.notifyBranchPickerOpened(t);
    }
    primeBranchPicker(t) {
        this._branchTracker?.primeBranchPicker(t);
    }
    loadMoreBranchOptions(t) {
        return this._branchTracker?.loadMore(t) ?? Promise.resolve();
    }
    refreshBranchOptions(t) {
        return this._branchTracker?.refresh(t) ?? Promise.resolve();
    }
    recordBranchSelection(t, e) {
        this._branchTracker?.recordSelection(t, e);
    }
    applySelectionSideEffects(t, e) {
        switch(t.type){
            case "skill":
                {
                    const n = oxn(t.id, "skill-");
                    this._cursorCommandsService.markAsRecentlyUsed("skill", n), e?.(n);
                    break;
                }
            case "command":
                {
                    const n = t.id.startsWith("command-") ? oxn(t.id, "command-") : oxn(t.id, "mcp-");
                    this._cursorCommandsService.markAsRecentlyUsed("command", n);
                    break;
                }
            case "subagent":
                {
                    const n = oxn(t.id, "subagent-");
                    this._cursorCommandsService.markAsRecentlyUsed("subagent", n);
                    break;
                }
            case "mode":
            case "action":
            case "mention":
            case "heading":
            case "divider":
            case void 0:
                break;
            default:
                {
                    const n = t.type;
                    break;
                }
        }
    }
    applySkillSelectionSideEffects(t, e) {
        const n = oxn(t, "skill-");
        this._cursorCommandsService.markAsRecentlyUsed("skill", n), e?.(n);
    }
    async getMentionItems(t, e, n) {
        return this._mentionsCapability?.getMentionItems({
            query: t,
            cancellationToken: e,
            strategy: n?.strategy,
            scope: n?.scope,
            onAuthoritativePartial: n?.onAuthoritativePartial
        }) ?? Promise.resolve([]);
    }
    async resolvePastChatFirstPrompt(t) {
        return this._mentionsCapability?.getPastChatFirstPromptSnippet(rt.revive(t)) ?? Promise.resolve(void 0);
    }
    async resolvePastChatTranscript(t) {
        return (await this._mentionsCapability?.resolvePastChatTranscript(t))?.toJSON();
    }
    toggleMcpServer(t, e) {
        const n = this._mcpService.allServers().find((i)=>i.identifier === t);
        n && this._mcpService.setServerEnabled(n, e);
    }
    _hostedMcpRowFor(t) {
        const e = this._mcpService.allServers().find((n)=>n.identifier === t || n.name === t);
        return e === void 0 ? void 0 : this._hostedMcpPlacementService.serverPlacedRowFor(bns(e));
    }
    async connectMcpServer(t) {
        const e = this._hostedMcpRowFor(t.serverId);
        return e !== void 0 ? (this._metricsService.increment({
            stat: "mcp.login_click",
            tags: {
                source: "glass_plus_menu",
                placement: "server"
            }
        }), Rok({
            row: e,
            services: this._hostedMcpLoginServices,
            placementService: this._hostedMcpPlacementService,
            abortSignal: t.abortSignal,
            onStateUpdate: t.onStateUpdate
        })) : nTi({
            serverIdentifier: t.serverId,
            mcpService: this._mcpService,
            openerService: this._openerService,
            metricsService: this._metricsService,
            analyticsService: this._analyticsService,
            structuredLogService: this._structuredLogService,
            metricsSource: "glass_plus_menu",
            analyticsLocation: "composer",
            logSource: "glass_plus_menu",
            abortSignal: t.abortSignal,
            onStateUpdate: t.onStateUpdate
        });
    }
    async runMcpServerAttentionAction(t) {
        if (t.kind === "retry") {
            if (this._hostedMcpRowFor(t.serverId) === void 0) throw new Error(`Unsupported local MCP action: ${t.kind}`);
            await this._hostedMcpPlacementService.refresh("plus_menu_retry", {
                force: !0
            });
            return;
        }
        const e = this._workspaceRef;
        if (!e) throw new Error("Cannot show MCP output for a disposed local environment");
        const n = this._mcpService.allServers().find((i)=>i.identifier === t.serverId);
        if (!n) throw new Error(`MCP server not found: ${t.serverId}`);
        await SQm({
            server: n,
            mcpService: this._mcpService,
            instantiationService: e.object.instantiationService,
            commandService: this._commandService,
            isGlass: this._isGlass,
            workspaceId: this._workspaceIdentifier.id,
            glassRevealAsTab: !0
        });
    }
    _resolveSlashMenuServices() {
        const t = this._workspaceRef;
        if (!t) throw new Error("Cannot resolve slash menu services for disposed LocalAgentEnvironment");
        return t.object.instantiationService.invokeFunction((e)=>{
            const n = e.get(uG), i = e.get(xA), r = e.get(VI), s = e.get(jPe), o = e.get(N0);
            return {
                cursorCommandsService: {
                    getCommands: (a)=>n.getCommands(a),
                    getRecentlyUsedGlobalOrder: ()=>n.getRecentlyUsedGlobalOrder(),
                    getCommandMetadata: (a)=>n.getCommandMetadata(a)
                },
                cursorRulesService: {
                    getAllRules: (a, l)=>i.getAllRules(a, l),
                    getRuleUriByFilename: (a)=>i.getRuleUriByFilename(a)
                },
                subagentsService: {
                    getAllSubagents: (a)=>s.getAllSubagents(a)
                },
                mcpService: {
                    promptsCache: ()=>o.promptsCache(),
                    allServers: ()=>o.allServers().map((a)=>({
                                identifier: a.identifier,
                                name: a.name
                            }))
                },
                pluginsProviderService: {
                    pluginsCache: {
                        get: ()=>r.pluginsCache.get()
                    }
                },
                resolvePluginBrandIcon: ({ pluginId: a, displayName: l })=>{
                    const c = this._mcpServers.value, u = a === void 0 ? void 0 : c.find((g)=>g.pluginId === a), d = l.toLowerCase(), h = u ? [] : c.filter((g)=>g.name.toLowerCase() === d), p = u ?? (h.length === 1 ? h[0] : void 0);
                    return p !== void 0 ? p.iconSrc : this._mcpWellKnownDetectionService.getServerIcon(l);
                }
            };
        });
    }
    dispose() {
        this._slashMenuRefresh.dispose(), this._slashMenuItems.dispose(), super.dispose(), this._workspaceRef = void 0, this._mentionsCapability = void 0, this._branchTracker = void 0;
    }
};

}
