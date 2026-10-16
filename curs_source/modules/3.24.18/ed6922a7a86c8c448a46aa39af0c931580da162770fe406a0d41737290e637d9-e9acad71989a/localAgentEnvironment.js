import { Se, hM, we } from "./HVr.js";
import { ca, la } from "./aiMiscServices.js";
import { Za, na } from "./authenticationService.js";
import { Yu } from "./browser.ts";
import { PZd } from "./cacheStorageEnvelope.js";
import { Jkt, YWt } from "./cacheStorageService.js";
import { DUe, MUe } from "./cloudMcpOAuthLoopbackService.js";
import { Bhh, F7v } from "./coalescedRefreshScheduler.js";
import { $n, vi } from "./commands.js";
import { VX, ite } from "./cursorCommands.js";
import { Bw, LR } from "./cursorRules.js";
import { MKi } from "./customModeUtils.js";
import { Vr, Yi } from "./environmentService.js";
import { Fi, Ii } from "./files.js";
import { kk, r0 } from "./gitContextService.js";
import { tFn } from "./hostedMcpLogin.js";
import { B_e, GX } from "./hostedMcpPlacementService.js";
import { mi } from "./index_188.js";
import { a$v, oph } from "./localAgentBranchOptionsTracker.js";
import { dyo } from "./mcpConnectFlow.js";
import { MR, P1 } from "./mcpServiceTypes.js";
import { S1e, k1e } from "./mcpWellKnownDetection.js";
import { lyo, yYi } from "./mentionsCapabilityService.js";
import { O7v } from "./menuSourceHydrationMetrics.js";
import { Cp, vp } from "./metricsService.js";
import { bu } from "./objects.js";
import { Khh } from "./openMcpServerOutput.js";
import { eo, ko } from "./opener.js";
import { EN, lF } from "./pluginsProviderService.js";
import { iFn } from "./plusMenuMcpServerMapping.js";
import { Ka, jo } from "./productService.js";
import { yh } from "./qIc.js";
import { N1, gh, xKi } from "./reactive.js";
import { Ip, Kd } from "./remoteAgentService.js";
import { dT, l0 } from "./scm.js";
import { Cwt } from "./slashMenuData.js";
import { Vn, yn } from "./storage_2.js";
import { Xh, im } from "./structuredLog.js";
import { U_e, jPe } from "./subagentsService.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Jn, ci } from "./workspace.js";
import { D2, a0 } from "./workspaceMetadataService.js";
import { RC, oE } from "./workspaceTrust.js";
import { Jee, L7v, N7v, U4v, c$v, d$v, ddh, f$v, g$v, hVt, jhh, kKi, m8v, oYi, u$v, uch, uyo, v$v } from "./xmo.js";
var AYi, pFn, cph, yyo, Syo, kyo, wyo, lph, Cyo, uph;
export { AYi, Cyo, Syo, cph, kyo, lph, pFn, uph, wyo, yyo };
var __wakaru_dph_initialized = false;
export function dph() {
if (__wakaru_dph_initialized) return;
__wakaru_dph_initialized = true;
"use strict";
x(), Se(), bu(), Qt(), Fi(), vi(), ko(), Vn(), im(), ci(), RC(), mi(), Yu(), Cwt(), MKi(), lyo(), ite(), lF(), Bw(), jPe(), la(), dyo(), tFn(), GX(), Za(), MUe(), Ka(), MR(), k1e(), Cp(), N1(), O7v(), F7v(), r0(), YWt(), PZd(), iFn(), Vr(), a0(), Ip(), dT(), Khh(), a$v(), AYi = "slashMenuItems/", pFn = `${AYi}v7/`, cph = 10080 * 60 * 1e3, yyo = 1e6, Syo = "\0slash-menu-oversized", kyo = new Map, wyo = "agentEnvironment.slashMenuItems.", lph = `${Jkt}${wyo}`, Cyo = !1, uph = class extends we {
    constructor(e, t){
        super(), this._workspaceRef = e, this._mcpServersRebuildQueued = !1, this._slashMenuRefresh = new Bhh((G)=>this._doFetchAndSetSlashMenu(G)), this._register({
            dispose: ()=>this._workspaceRef?.dispose()
        }), this._includeCloudOnlyGlobalCommands = t.includeCloudOnlyGlobalCommands ?? !1, this._targetEnvironment = t.targetEnvironment, this._agentKind = t.agentKind;
        const n = this._workspaceRef;
        if (!n) throw new Error("LocalAgentEnvironment requires a workspace reference");
        const { cursorCommandsService: i, cursorRulesService: r, pluginsProviderService: s, subagentsService: o, mcpService: a, mcpWellKnownDetectionService: c, hostedMcpPlacementService: l, cursorAuthenticationService: u, cloudMcpOAuthLoopbackService: h, productService: p, openerService: g, metricsService: f, analyticsService: v, structuredLogService: b, fileService: y, workspaceContextService: T, workspaceMetadataService: E, remoteAgentService: A, commandService: R, workbenchEnvironmentService: D, gitContextService: P, scmService: N, storageService: O, workspaceTrustManagementService: F } = n.object.instantiationService.invokeFunction((G)=>({
                cursorCommandsService: G.get(VX),
                cursorRulesService: G.get(LR),
                pluginsProviderService: G.get(EN),
                subagentsService: G.get(U_e),
                mcpService: G.get(P1),
                mcpWellKnownDetectionService: G.get(S1e),
                hostedMcpPlacementService: G.get(B_e),
                cursorAuthenticationService: G.get(na),
                cloudMcpOAuthLoopbackService: G.get(DUe),
                productService: G.get(jo),
                openerService: G.get(eo),
                metricsService: G.get(vp),
                analyticsService: G.get(ca),
                structuredLogService: G.get(Xh),
                fileService: G.get(Ii),
                workspaceContextService: G.get(Jn),
                workspaceMetadataService: G.get(D2),
                remoteAgentService: G.get(Kd),
                commandService: G.get($n),
                workbenchEnvironmentService: G.get(Yi),
                gitContextService: G.get(kk),
                scmService: G.get(l0),
                storageService: G.get(yn),
                workspaceTrustManagementService: G.get(oE)
            }));
        this._cursorCommandsService = i, this._cursorRulesService = r, this._pluginsProviderService = s, this._subagentsService = o, this._mcpService = a, this._mcpWellKnownDetectionService = c, this._hostedMcpPlacementService = l, this._hostedMcpLoginServices = {
            cursorAuthenticationService: u,
            cloudMcpOAuthLoopbackService: h,
            openerService: g,
            productService: p
        }, this._openerService = g, this._metricsService = f, this._sourceHydrationObserver = L7v((G)=>{
            N7v({
                event: G,
                metricsService: this._metricsService,
                agentKind: this._agentKind
            });
        }), this._analyticsService = v, this._structuredLogService = b, this._fileService = y, this._workspaceContextService = T, this._workspaceMetadataService = E, this._remoteAgentService = A, this._commandService = R, this._isGlass = D.isGlass === !0, this._workspaceIdentifier = n.object.workspaceIdentifier, this._mentionsCapability = new yYi(n.object), this._register(this._mentionsCapability), Cyo || (Cyo = !0, c$v(O));
        const H = d$v({
            includeCloudOnlyGlobalCommands: this._includeCloudOnlyGlobalCommands,
            targetEnvironment: this._targetEnvironment
        }), $ = D.isGlass ? "glass" : "classic", W = `${pFn}${H}.${$}.` + n.object.workspaceIdentifier.id;
        this._customModeInventoryScope = W, this._slashMenuItems = new xKi([], {
            ...u$v(O, W),
            deserialize: g$v
        }), this.slashMenuItems = this._slashMenuItems, this._mcpServers = new gh(this._buildMcpServers()), this.mcpServers = this._mcpServers, this._register(this._mcpService.onSettingsChanged(()=>{
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
        })), this._branchTracker = this._register(new oph(n.object.workspaceIdentifier, P, N, T, E, O, F, D.remoteAuthority)), this.defaultBranches = this._branchTracker.defaultBranches, this.branchOptionsByRepo = this._branchTracker.branchOptionsByRepo, this._register(this._cursorCommandsService.onDidChangeCommands(()=>{
            this._fetchAndSetSlashMenu();
        })), this._register(this._cursorRulesService.onDidChangeRules(()=>{
            this._fetchAndSetSlashMenu();
        })), this._register(this._subagentsService.onDidSubagentsChange(()=>{
            this._fetchAndSetSlashMenu();
        })), this._register(this._pluginsProviderService.onDidPluginsCacheChange(()=>{
            this._fetchAndSetSlashMenu(), this._scheduleMcpServersRebuild();
        })), this._register(this._workspaceContextService.onDidChangeWorkspaceFolders(()=>{
            this._fetchAndSetSlashMenu();
        })), this._register(this._workspaceMetadataService.onDidChangeMetadata((G)=>{
            G.metadata.workspaceId === this._workspaceIdentifier.id && this._fetchAndSetSlashMenu();
        })), this._register(y.onDidFilesChange((G)=>{
            if (!G.gotAdded() && !G.gotDeleted()) return;
            const q = T.getWorkspace().folders;
            for (const z of q)if (G.affects(z.uri, 1, 2)) {
                this._mentionsCapability?.invalidateFileQueryCache();
                return;
            }
        })), this._fetchAndSetSlashMenu();
    }
    _buildMcpServers() {
        return ddh(this._mcpService, this._mcpWellKnownDetectionService, this._hostedMcpPlacementService);
    }
    _scheduleMcpServersRebuild() {
        this._mcpServersRebuildQueued || (this._mcpServersRebuildQueued = !0, queueMicrotask(()=>{
            this._mcpServersRebuildQueued = !1, !this._store.isDisposed && this._setMcpServers(this._buildMcpServers());
        }));
    }
    _setMcpServers(e) {
        yh(this._mcpServers.value, e) || (this._mcpServers.set(e), this._fetchAndSetSlashMenu());
    }
    _buildSlashMenuWorkspaceFolders() {
        const e = this._workspaceMetadataService.getMetadata(this._workspaceIdentifier)?.trackedGitRepos ?? [], t = this._remoteAgentService.getConnection() !== null;
        return this._workspaceContextService.getWorkspace().folders.map((n)=>{
            const i = Jee(hM(n.uri, !0, t)), r = this._fileService.hasCapability(n.uri, 1024);
            return {
                path: i,
                pathCaseSensitive: r,
                repoScopeId: kKi({
                    folderPath: i,
                    pathCaseSensitive: r,
                    trackedRepos: e
                })
            };
        });
    }
    _fetchAndSetSlashMenu() {
        return this._slashMenuRefresh.refresh();
    }
    async _doFetchAndSetSlashMenu(e) {
        if (!this._workspaceRef) return;
        const t = this._resolveSlashMenuServices();
        try {
            const n = await uch({
                services: t,
                existingRuleIds: [],
                existingSubagentNames: [],
                supportsSkills: !0,
                supportsSubagents: !0,
                onSelectOption: ()=>{},
                includeCloudOnlyGlobalCommands: this._includeCloudOnlyGlobalCommands,
                workspaceFolders: this._buildSlashMenuWorkspaceFolders(),
                targetEnvironment: this._targetEnvironment,
                token: e,
                sourceHydration: this._sourceHydrationObserver,
                onPartialItems: (s)=>{
                    if (e.isCancellationRequested) return;
                    const o = f$v({
                        currentItems: this._slashMenuItems.value,
                        partialItems: s
                    });
                    this._slashMenuItems.setTransient(o);
                }
            });
            if (e.isCancellationRequested) return;
            v$v(this._slashMenuItems.value, n) || this._slashMenuItems.set(n);
            const i = U4v(n), r = kyo.get(this._customModeInventoryScope);
            (r === void 0 || !yh(r, i)) && (kyo.set(this._customModeInventoryScope, i), this._analyticsService.trackEvent("custom_mode.inventory", i));
        } catch  {}
    }
    warmSlashMenuCache() {
        this._slashMenuItems.warm();
    }
    setBranchOptionsQuery(e, t) {
        this._branchTracker?.setQuery(e, t);
    }
    notifyBranchPickerOpened(e) {
        this._branchTracker?.notifyBranchPickerOpened(e);
    }
    primeBranchPicker(e) {
        this._branchTracker?.primeBranchPicker(e);
    }
    loadMoreBranchOptions(e) {
        return this._branchTracker?.loadMore(e) ?? Promise.resolve();
    }
    refreshBranchOptions(e) {
        return this._branchTracker?.refresh(e) ?? Promise.resolve();
    }
    recordBranchSelection(e, t) {
        this._branchTracker?.recordSelection(e, t);
    }
    applySelectionSideEffects(e, t) {
        switch(e.type){
            case "skill":
                {
                    const n = hVt(e.id, "skill-");
                    this._cursorCommandsService.markAsRecentlyUsed("skill", n), t?.(n);
                    break;
                }
            case "command":
                {
                    const n = e.id.startsWith("command-") ? hVt(e.id, "command-") : hVt(e.id, "mcp-");
                    this._cursorCommandsService.markAsRecentlyUsed("command", n);
                    break;
                }
            case "subagent":
                {
                    const n = hVt(e.id, "subagent-");
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
                    const n = e.type;
                    break;
                }
        }
    }
    applySkillSelectionSideEffects(e, t) {
        const n = hVt(e, "skill-");
        this._cursorCommandsService.markAsRecentlyUsed("skill", n), t?.(n);
    }
    async getMentionItems(e, t, n) {
        return this._mentionsCapability?.getMentionItems({
            query: e,
            cancellationToken: t,
            strategy: n?.strategy,
            scope: n?.scope,
            onAuthoritativePartial: n?.onAuthoritativePartial
        }) ?? Promise.resolve([]);
    }
    async resolvePastChatFirstPrompt(e) {
        return this._mentionsCapability?.getPastChatFirstPromptSnippet(Ee.revive(e)) ?? Promise.resolve(void 0);
    }
    async resolvePastChatTranscript(e) {
        return (await this._mentionsCapability?.resolvePastChatTranscript(e))?.toJSON();
    }
    toggleMcpServer(e, t) {
        const n = this._mcpService.allServers().find((i)=>i.identifier === e);
        n && this._mcpService.setServerEnabled(n, t);
    }
    _hostedMcpRowFor(e) {
        const t = this._mcpService.allServers().find((n)=>n.identifier === e || n.name === e);
        return t === void 0 ? void 0 : this._hostedMcpPlacementService.serverPlacedRowFor(oYi(t));
    }
    async connectMcpServer(e) {
        const t = this._hostedMcpRowFor(e.serverId);
        return t !== void 0 ? (this._metricsService.increment({
            stat: "mcp.login_click",
            tags: {
                source: "glass_plus_menu",
                placement: "server"
            }
        }), m8v({
            row: t,
            services: this._hostedMcpLoginServices,
            placementService: this._hostedMcpPlacementService,
            abortSignal: e.abortSignal,
            onStateUpdate: e.onStateUpdate
        })) : uyo({
            serverIdentifier: e.serverId,
            mcpService: this._mcpService,
            openerService: this._openerService,
            metricsService: this._metricsService,
            analyticsService: this._analyticsService,
            structuredLogService: this._structuredLogService,
            metricsSource: "glass_plus_menu",
            analyticsLocation: "composer",
            logSource: "glass_plus_menu",
            abortSignal: e.abortSignal,
            onStateUpdate: e.onStateUpdate
        });
    }
    async runMcpServerAttentionAction(e) {
        if (e.kind === "retry") {
            if (this._hostedMcpRowFor(e.serverId) === void 0) throw new Error(`Unsupported local MCP action: ${e.kind}`);
            await this._hostedMcpPlacementService.refresh("plus_menu_retry", {
                force: !0
            });
            return;
        }
        const t = this._workspaceRef;
        if (!t) throw new Error("Cannot show MCP output for a disposed local environment");
        const n = this._mcpService.allServers().find((i)=>i.identifier === e.serverId);
        if (!n) throw new Error(`MCP server not found: ${e.serverId}`);
        await jhh({
            server: n,
            mcpService: this._mcpService,
            instantiationService: t.object.instantiationService,
            commandService: this._commandService,
            isGlass: this._isGlass,
            workspaceId: this._workspaceIdentifier.id,
            glassRevealAsTab: !0
        });
    }
    _resolveSlashMenuServices() {
        const e = this._workspaceRef;
        if (!e) throw new Error("Cannot resolve slash menu services for disposed LocalAgentEnvironment");
        return e.object.instantiationService.invokeFunction((t)=>{
            const n = t.get(VX), i = t.get(LR), r = t.get(EN), s = t.get(U_e), o = t.get(P1);
            return {
                cursorCommandsService: {
                    getCommands: (a)=>n.getCommands(a),
                    getRecentlyUsedGlobalOrder: ()=>n.getRecentlyUsedGlobalOrder(),
                    getCommandMetadata: (a)=>n.getCommandMetadata(a)
                },
                cursorRulesService: {
                    getAllRules: (a, c)=>i.getAllRules(a, c),
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
                resolvePluginBrandIcon: ({ pluginId: a, displayName: c })=>{
                    const l = this._mcpServers.value, u = a === void 0 ? void 0 : l.find((f)=>f.pluginId === a), h = c.toLowerCase(), p = u ? [] : l.filter((f)=>f.name.toLowerCase() === h), g = u ?? (p.length === 1 ? p[0] : void 0);
                    return g !== void 0 ? g.iconSrc : this._mcpWellKnownDetectionService.getServerIcon(c);
                }
            };
        });
    }
    dispose() {
        this._slashMenuRefresh.dispose(), this._slashMenuItems.dispose(), super.dispose(), this._workspaceRef = void 0, this._mentionsCapability = void 0, this._branchTracker = void 0;
    }
};

}
