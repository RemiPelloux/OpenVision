import { $Tt, jgk } from "./Aeg.js";
import { Cke, Ec, Ga, Gt, Nt, Qe, Tr, Vh, Vn, da, en, st, tt } from "./Iwo.js";
import { h2 } from "./LYd.js";
import { PIo, tR, wky } from "./SZu.js";
import { Bze, Gfk, Hfk, Hol, Jfk, Kzt, Llg, MEi, Nlg, Plg, Qfk, Rlg, S$, T2, Vag, Vfk, Wfk, Xfk, Z4e, Zfk, aal, afk, bss, clg, dlg, ffk, ial, mss, nal, oal, qfk, qol, ral, sal, tal, ufk, ulg, vfk, xfk, yss, zfk } from "./Sol.js";
import { ifk } from "./admin-mcp-policy.ts";
import { Aag } from "./admin-mcp-tool-allowlist.ts";
import { iS, lb } from "./adminSettingsService.js";
import { Vae, fX } from "./aiEverythingProviderService.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { C1, Qb } from "./aiServerConfigService.js";
import { cG, ule } from "./appLayoutService.js";
import { qn } from "./async.js";
import { Rs, ss } from "./authenticationService.js";
import { rp } from "./bcIdFromAuthority.js";
import { X4e, YCe } from "./browserAutomationService.js";
import { hfk } from "./browser_3.ts";
import { yo } from "./cancellation.js";
import { nr, rs } from "./commands.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { uk, xE } from "./composerModesServiceTypes.js";
import { or, yi } from "./configuration.js";
import { ime, wle } from "./configurationResolver.js";
import { Vzt, eMe } from "./configurationResolverExpression.js";
import { klg } from "./cursorBackendMcpToolDisplay.js";
import { EX, vle } from "./environmentService_3.js";
import { Cr, _s } from "./experimentService.js";
import { id, ld } from "./extensions_4.js";
import { is, ms } from "./files.js";
import { Dk, Htl, R4e, Sok, Sqt, Ysk, nlk, nzt, qG1 } from "./gYa.js";
import { Xy } from "./hash.js";
import { UPe, YCi, dle, yns } from "./hostedMcpPlacementService.js";
import { nl } from "./index.ts";
import { FO } from "./index_10.ts";
import { Ng } from "./index_3.ts";
import { SS, Xh, Xp } from "./ipa.js";
import { p7, sW } from "./jsonContributionRegistry.js";
import { Gzt } from "./jsonc_2.js";
import { Ji, OTo, pA } from "./log.js";
import { $ol } from "./mcp-tool-annotations_2.ts";
import { Uel } from "./mcp-url-utils.ts";
import { OIo, U6t, qnd } from "./mcp.ts";
import { PEi, tAn } from "./mcpConfigService.js";
import { CCe, Dpe, _X, dqt, uqt } from "./mcpConstants.js";
import { gfk } from "./mcpEnvExpansion.js";
import { gss } from "./mcpProcessRouting.js";
import { sTi } from "./mcpProcessServerIdentifier.js";
import { WTt, _at } from "./mcpProcessSnapshotFanoutService.js";
import { QPe, zCe } from "./mcpProviderService.js";
import { alg, olg, pfk, rlg, slg } from "./mcpSchema.js";
import { y2 } from "./mcpServiceTypes.js";
import { _fk } from "./mcpSnapshotMapping.js";
import { VCi } from "./mcpUtils.js";
import { ACe, Obe } from "./mcpWellKnownDetection.js";
import { Uh, ip } from "./metricsService.js";
import { Ks, Wr, Yn } from "./notification.js";
import { cp } from "./objects.js";
import { Rd, ih } from "./pathService.js";
import { Eo, Fi } from "./platform_2.js";
import { IA, VI } from "./pluginsProviderService.js";
import { fc, hu } from "./productService.js";
import { Cl, Gu } from "./quickInput.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { RP, Um } from "./reactiveStorageTypes_2.js";
import { UM } from "./remoteAuthorityResolver.js";
import { tlg } from "./resolved-oauth-client-id.ts";
import { Lr, Mc } from "./resources.js";
import { lFa } from "./solidExports.js";
import { Zi, ki } from "./storage_2.js";
import { Cm, wh } from "./structuredLog.js";
import { jol } from "./triggersNamingGate.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Vp, nh } from "./uriIdentity.js";
import { Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
import { LAe } from "./utils_10.js";
import { bX, iV } from "./workbenchCommandRegistry.js";
import { Sr, yr } from "./workspace.js";
import { CH1, Vqe, Z6e, kPe, wH1, y7a } from "./yBp.js";
import { Cn, Rp, Wt, gA, pi, t6 } from "./ze.js";
var cal, ual, _R, nAn, iAn, Olg, Flg, Blg, dal, hal, DEi, Tu, Cle, O0, Ulg, pal, mal, Sss, kss, gal, wss, fal, val, _al, jlg, bal, yal, $lg, Sal, Hlg, Css, rAn, sAn, oAn, Wlg, Glg, kal, Yzt, qlg, NEi, zlg, Vlg, Tie;
export { $lg, Blg, Cle, Css, DEi, Flg, Glg, Hlg, NEi, O0, Olg, Sal, Sss, Tie, Tu, Ulg, Vlg, Wlg, Yzt, _R, _al, bal, cal, dal, fal, gal, hal, iAn, jlg, kal, kss, mal, nAn, oAn, pal, qlg, rAn, sAn, ual, val, wss, yal, zlg };
var __wakaru_gV_initialized = false;
export function gV() {
if (__wakaru_gV_initialized) return;
__wakaru_gV_initialized = true;
"use strict";
E(), nl(), rp(), Ga(), Gzt(), Gt(), LAe(), Xy(), cp(), qn(), yo(), Qe(), Lr(), fn(), rs(), or(), Vae(), ms(), sW(), Ks(), hu(), Gu(), el(), wu(), Um(), Eo(), Ji(), Zi(), Vp(), Sr(), S$(), ule(), YCe(), Pl(), xE(), wle(), Vzt(), vle(), UM(), iS(), Rs(), C1(), _s(), jol(), ih(), VCi(), Ss(), dle(), CCe(), ip(), Ng(), ifk(), Aag(), $ol(), FO(), Uel(), hfk(), tlg(), Cm(), Sqt(), sTi(), QPe(), pfk(), gfk(), y2(), _fk(), klg(), lFa(), pi(), IA(), gss(), WTt(), ACe(), ld(), bX(), PEi(), y2(), cal = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), ual = (t)=>{
    throw TypeError(t);
}, _R = (t, e)=>(n, i)=>e(n, i, t), nAn = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && ual("Object expected");
        var i, r;
        n && (i = e[cal("asyncDispose")]), i === void 0 && (i = e[cal("dispose")], n && (r = i)), typeof i != "function" && ual("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), t.push([
            n,
            i,
            e
        ]);
    } else n && t.push([
        n
    ]);
    return e;
}, iAn = (t, e, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, l, c) {
        return c = Error(l), c.name = "SuppressedError", c.error = o, c.suppressed = a, c;
    }, r = (o)=>e = n ? new i(o, e, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = t.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (l)=>(r(l), s()));
        } catch (l) {
            r(l);
        }
        if (n) throw e;
    };
    return s();
}, Blg = {
    identifier: U6t.identifier,
    name: "Origin",
    type: "streamableHttp",
    url: U6t.serverUrl
}, dal = "cursor-origin-readonly", hal = class {
    constructor(t){
        this.timer = t.timer, this.serverIncarnationId = t.serverIncarnationId, this.baselineSnapshotGeneration = t.baselineSnapshotGeneration, this.attempt = t.attempt, this.startedAtMs = t.startedAtMs, this.reason = t.reason;
    }
    dispose() {
        this.timer.dispose();
    }
}, DEi = !1, Tu = DEi ? console.info : ()=>{}, Cle = DEi ? console.warn : ()=>{}, O0 = DEi ? console.error : ()=>{}, Ulg = DEi ? (t, e)=>{
    Tu("[MCPService] Debug: Clearing known server IDs"), t.remove(e, 0);
} : ()=>{}, pal = 6e4, mal = 3e4, Sss = 1e4, kss = {
    metadataTimeoutMs: Sss,
    lifecycleTimeoutMs: Sss,
    recoveryPerRetryTimeoutMs: Sss
}, gal = "Cursor MCP extension host restarted; reconnecting", wss = "mcp.refreshSnapshot", fal = 4, val = "mcp.sharedOAuthFanoutEvent.", _al = 2e3, jlg = 5 * 6e4, bal = Symbol("MCP_METADATA_ABORT_ERROR"), yal = class extends (Flg = Error, Olg = bal, Flg) {
    constructor(t){
        super(t), this[Olg] = !0, this.isMcpMetadataAbortError = !0, this.name = "McpMetadataAbortError";
    }
}, $lg = class extends yal {
    constructor(t, e){
        super(`MCP IPC timeout: ${t} exceeded ${e}ms`), this.name = "McpIpcTimeoutError";
    }
}, Sal = class {
    constructor(t, e, n, i, r, s){
        this.everythingProviderService = t, this.metricsService = e, this.connectionType = n, this.serverId = i, this.getTimeouts = r, this.serverName = s;
    }
    async getProvider() {
        return await this.everythingProviderService.waitForCommandEverythingProvider(pal, RP.CreateClient);
    }
    async _timedRunCommand(t, e) {
        var n = [];
        try {
            const s = nAn(n, SS(Xp().withName(`mcp.runCommand.${t}`)));
            return s.span.setAttribute("mcp.ipc.connection_type", this.connectionType), await ial(s.span, t, this.metricsService, async ()=>{
                const o = await this.getProvider();
                if (!o) throw new Error("No provider found");
                const a = this.getTimeoutMsForAction(t);
                if (a === void 0) return await o.runCommand(t, e);
                const l = new AbortController;
                return await Kzt(async ()=>await o.runCommand(t, e, l.signal), a, `mcp.runCommand.${t}`, l);
            });
        } catch (s) {
            var i = s, r = !0;
        } finally{
            iAn(n, i, r);
        }
    }
    getTimeoutMsForAction(t) {
        const e = this.getTimeouts();
        switch(t){
            case RP.ListOfferings:
            case RP.ListToolsRaw:
            case RP.GetInstructions:
                return e.metadataTimeoutMs;
            case RP.CreateClient:
            case RP.DeleteClient:
            case RP.ReloadClient:
                return e.lifecycleTimeoutMs;
            default:
                return;
        }
    }
    async callTool(t, e, n) {
        var i = [];
        try {
            const { abortSignal: o } = n;
            o?.throwIfAborted();
            const a = nAn(i, SS(Xp().withName(`mcp.runCommand.${RP.CallTool}`)));
            return a.span.setAttribute("mcp.ipc.connection_type", this.connectionType), a.span.setAttribute("mcp.tool_name", t), await ial(a.span, RP.CallTool, this.metricsService, async ()=>{
                const l = await this.getProvider();
                if (!l) throw new Error("No provider found");
                const c = l.runCommand(RP.CallTool, {
                    name: t,
                    args: e,
                    identifier: this.serverId,
                    toolCallId: n.toolCallId,
                    composerId: n.composerId,
                    useLeaseElicitation: n.useLeaseElicitation
                });
                let u;
                return o ? u = await Promise.race([
                    c,
                    new Promise((d, h)=>{
                        o.addEventListener("abort", ()=>{
                            h(new Error("Tool call was cancelled"));
                        });
                    })
                ]) : u = await c, u?.result;
            });
        } catch (o) {
            var r = o, s = !0;
        } finally{
            iAn(i, r, s);
        }
    }
    async getPrompt(t, e) {
        return (await this._timedRunCommand(RP.GetPrompt, {
            identifier: this.serverId,
            name: t,
            args: e
        }))?.result;
    }
    async readResource(t) {
        return (await this._timedRunCommand(RP.ReadResource, {
            identifier: this.serverId,
            uri: t
        }))?.result;
    }
    async listOfferings() {
        return this._timedRunCommand(RP.ListOfferings, {
            identifier: this.serverId
        });
    }
    async listToolsRaw() {
        return (await this._timedRunCommand(RP.ListToolsRaw, {
            identifier: this.serverId
        }))?.tools ?? [];
    }
    async createClient(t) {
        return this._timedRunCommand(RP.CreateClient, {
            identifier: this.serverId,
            serverInfo: t,
            serverName: this.serverName
        });
    }
    async deleteClient(t) {
        await this._timedRunCommand(RP.DeleteClient, {
            identifier: this.serverId,
            reason: t
        });
    }
    async reloadClient(t, e) {
        return this._timedRunCommand(RP.ReloadClient, {
            identifier: this.serverId,
            serverInfo: t,
            serverName: this.serverName,
            armLoopback: e === "authenticate"
        });
    }
    async logoutServer() {
        await this._timedRunCommand(RP.LogoutServer, {
            identifier: this.serverId
        });
    }
    async clearAllTokens() {
        await this._timedRunCommand(RP.ClearAllTokens, {});
    }
}, Hlg = class {
    constructor(t, e, n){
        this.mcpProviderService = t, this.serverId = e, this.getTimeouts = n;
        const i = this.mcpProviderService.getMcpProvider(this.serverId);
        if (!i) throw new Error(`MCP provider with id '${this.serverId}' not found`);
        this.provider = i;
    }
    async callTool(t, e, n) {
        const { abortSignal: i } = n;
        if (i?.throwIfAborted(), !this.provider) throw new Error(`MCP provider with id '${this.serverId}' not found`);
        const r = this.provider.callTool(t, e, {
            toolCallId: n.toolCallId,
            conversationId: n.conversationId,
            composerId: n.composerId
        });
        return i ? Promise.race([
            r,
            new Promise((s, o)=>{
                i.addEventListener("abort", ()=>{
                    o(new Error("Tool call was cancelled"));
                });
            })
        ]) : r;
    }
    async getPrompt(t, e) {}
    async readResource(t) {}
    async listOfferings() {
        if (!this.provider) throw new Error(`MCP provider with id '${this.serverId}' not found`);
        const t = this.getTimeouts().metadataTimeoutMs;
        return Kzt(()=>this.provider.listOfferings(), t, "mcpProviderServiceClient.listOfferings");
    }
    async listToolsRaw() {
        const t = await this.listOfferings();
        return t?.tools ? t.tools.map((e)=>({
                name: e.name,
                description: e.description || void 0,
                inputSchema: e.parameters ? JSON.parse(e.parameters) : void 0
            })) : [];
    }
    async createClient(t) {}
    async deleteClient(t) {}
    async reloadClient(t) {
        return {
            success: !0,
            connected: !0,
            statusType: "connected"
        };
    }
    async logoutServer() {}
    async clearAllTokens() {}
    getInstructions() {
        return this.provider.instructions;
    }
}, Css = 3, rAn = "Server is blocked by team admin", sAn = "Server is not on the team network allowlist", oAn = {
    server_placed: yns,
    placement_unknown: YCi
}, Wlg = new Set([
    rAn,
    sAn,
    ...Object.values(oAn)
]), Glg = "mcp.hosted_placement.row_transition", kal = "mcp_access_network_allowlist", Yzt = "mcp_settings_overhaul", qlg = new Set([
    "all",
    "off",
    "custom"
]), NEi = class {
    constructor(t){
        this.consecutiveFailures = 0, this.client = t.client, this.serverId = t.serverId, this.shouldAttemptRecoveryConservative = t.shouldAttemptRecoveryConservative, this.shouldAttemptRecoveryForToolCall = t.shouldAttemptRecoveryForToolCall, this.getTimeouts = t.getTimeouts, this.recreateClient = t.recreateClient, this.reloadClientAfterFailedRecreate = t.reloadClientAfterFailedRecreate, this.onRecoverySuccess = t.onRecoverySuccess, this.onRecoveryFailure = t.onRecoveryFailure;
    }
    getUnderlyingClient() {
        return this.client;
    }
    isRecoverableEnvironmentError(t) {
        const e = t instanceof Error ? t.message : String(t);
        return e.includes("No server info found") || e.includes("No adapter found") || e.includes("No provider found");
    }
    recordRecoveryFailure() {
        this.consecutiveFailures++, this.consecutiveFailures >= Css && this.onRecoveryFailure();
    }
    async withRecovery(t, e) {
        try {
            const n = await t();
            return this.consecutiveFailures = 0, n;
        } catch (n) {
            const i = e ? this.shouldAttemptRecoveryForToolCall() : this.shouldAttemptRecoveryConservative();
            if (this.isRecoverableEnvironmentError(n) && i) {
                if (this.consecutiveFailures >= Css) throw Tu(`[MCPService] Server ${this.serverId} has failed recovery ${this.consecutiveFailures} times, backing off`), this.onRecoveryFailure(), n;
                Tu(`[MCPService] Server ${this.serverId} missing but was previously working, attempting recovery (attempt ${this.consecutiveFailures + 1}/${Css})`);
                let r;
                const s = this.getTimeouts().recoveryPerRetryTimeoutMs;
                try {
                    r = await Kzt(()=>this.recreateClient(), s, `mcp.recovery.recreateClient.${this.serverId}`);
                } catch (a) {
                    throw this.recordRecoveryFailure(), a;
                }
                const o = this.reloadClientAfterFailedRecreate;
                if (!r && o) try {
                    const a = await Kzt(()=>o(), s, `mcp.recovery.reloadClient.${this.serverId}`);
                    r = Jfk(a);
                } catch (a) {
                    throw this.recordRecoveryFailure(), a;
                }
                if (r) return Tu(`[MCPService] Recovery successful for ${this.serverId}, retrying operation`), this.consecutiveFailures = 0, this.onRecoverySuccess(), await t();
                this.recordRecoveryFailure();
            }
            throw n;
        }
    }
    async callTool(t, e, n) {
        return this.withRecovery(()=>this.client.callTool(t, e, n), !0);
    }
    async getPrompt(t, e) {
        return this.withRecovery(()=>this.client.getPrompt(t, e), !1);
    }
    async readResource(t) {
        return this.withRecovery(()=>this.client.readResource(t), !1);
    }
    async listOfferings() {
        return this.withRecovery(()=>this.client.listOfferings(), !1);
    }
    async listToolsRaw() {
        return this.withRecovery(()=>this.client.listToolsRaw(), !1);
    }
    async createClient(t) {
        return this.client.createClient(t);
    }
    async ensureConnected(t, e) {
        return bss(this.client) ? this.client.ensureConnected(t, e) : this.client.createClient(t);
    }
    async probeServer(t) {
        bss(this.client) && this.client.probeServer && await this.client.probeServer(t);
    }
    async deleteClient(t) {
        return this.client.deleteClient(t);
    }
    async reloadClient(t, e) {
        return this.withRecovery(()=>this.client.reloadClient(t, e), !1);
    }
    async logoutServer() {
        return this.client.logoutServer();
    }
    async clearAllTokens() {
        return this.client.clearAllTokens();
    }
}, zlg = new Map, Vlg = Wt({}), Tie = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y, S, k, C, T, I, A, P, M, O, N, U, j, $, H, G){
        super(), this.storageService = t, this.everythingProviderService = e, this.reactiveStorageService = n, this.contextService = i, this.fileService = r, this.uriIdentityService = s, this.environmentService = o, this.pathService = a, this.productService = l, this.notificationService = c, this.composerModesService = u, this.adminSettingsService = d, this.commandService = h, this.pluginsProviderService = p, this.analyticsService = g, this.quickInputService = f, this.configurationResolverService = _, this.cursorAuthenticationService = b, this.experimentsService = y, this.mcpProviderService = S, this.appLayoutService = k, this.browserAutomationService = C, this.configurationService = T, this.composerDataService = I, this.loggerService = A, this.metricsService = P, this.mcpWellKnownDetectionService = M, this.structuredLogService = O, this.extensionService = N, this.workbenchCommandRegistry = U, this.mcpConfigService = j, this.mcpProcessSnapshotFanoutService = $, this.aiServerConfigService = H, this.hostedMcpPlacementService = G, this.workspaceFolderWatchers = this._register(new Nt), this.projectManagedServers = [], this.userConfiguredServers = [], this.extensionRegisteredServers = [], this.defaultServers = [], this.originMcpReconcileSequence = Promise.resolve(), this.pluginServers = [], this.userConfigFileWatcher = this._register(new Vn), this.previouslyKnownServerIds = new Set, this.KNOWN_SERVER_IDS_KEY = "mcpService.knownServerIds", this.pendingRefreshResolvers = [], this.initializeServersRequestedDuringInit = !1, this.pendingInitializeServersReasons = [], this.createClientPromises = new Map, this.allServersSignal = Wt([]), this.allServers = this.allServersSignal[0], this.setAllServers = this.allServersSignal[1], this.toolsCacheSignal = Wt({}), this.toolsCache = this.toolsCacheSignal[0], this.setToolsCache = this.toolsCacheSignal[1], this.promptsCacheSignal = Wt({}), this.promptsCache = this.promptsCacheSignal[0], this.setPromptsCache = this.promptsCacheSignal[1], this.resourcesCacheSignal = Wt({}), this.resourcesCache = this.resourcesCacheSignal[0], this.setResourcesCache = this.resourcesCacheSignal[1], this.instructionsCacheSignal = Wt({}), this.instructionsCache = this.instructionsCacheSignal[0], this.setInstructionsCache = this.instructionsCacheSignal[1], this.statusCacheSignal = Wt({}), this.statusCache = this.statusCacheSignal[0], this.setStatusCache = this.statusCacheSignal[1], this.progressCacheSignal = Wt({}), this.progressCache = this.progressCacheSignal[0], this.setProgressCache = this.progressCacheSignal[1], this.parsingErrorsSignal = Wt({}), this.parsingErrors = this.parsingErrorsSignal[0], this.setParsingErrors = this.parsingErrorsSignal[1], this.elicitationRequestsCacheSignal = Vlg, this.elicitationRequestsCache = this.elicitationRequestsCacheSignal[0], this.setElicitationRequestsCache = this.elicitationRequestsCacheSignal[1], this.ownedElicitationRequestIds = new Set, this.ownedLeaseElicitationToolCallIds = new Set, this.leaseElicitationHandlers = zlg, this._onDidChangeServerStatus = this._register(new tt), this.onDidChangeServerStatus = this._onDidChangeServerStatus.event, this.lastReconciledDisabledGlobalMcpServers = [], this._onSettingsChanged = this._register(new tt), this.onSettingsChanged = this._onSettingsChanged.event, this._onDidInitialize = this._register(new tt), this.onDidInitialize = this._onDidInitialize.event, this._initialized = !1, this.mcpClientProviders = new Map, this.mcpProcessRoutedServerIds = new Set, this._durableSnapshots = new Map, this._onDidChangeMcpSnapshots = this._register(new tt), this.onDidChangeMcpSnapshots = this._onDidChangeMcpSnapshots.event, this._durableSnapshotGeneration = 0, this._hasReceivedAnySnapshots = !1, this._cursorMcpDegradedServers = new Set, this._everythingProviderRehydrateTargetGeneration = 0, this._windowedCounters = Tie._freshWindowedCounters(), this.successfullyInitializedServers = new Set, this.hasObservedInitialRemoteExtensionRegistration = !1, this.isIgnoringInitialRemoteExtensionHostLifecycleBurst = !1, this.remoteExtensionHostRefreshRequestedWhileRunning = !1, this.snapshotWatchdogs = this._register(new da), this.serverIncarnationIds = new Map, this.lastDeleteReasons = new Map, this.statusEnteredAtMs = new Map, this.sharedOAuthFanoutQueues = new Map, this.recentExternalSharedOAuthFanoutAtMs = new Map, this.sharedOAuthFanoutServiceInstanceId = `${Date.now()}-${Math.random().toString(36).slice(2)}`, this.hostedMcpPlacementChangedDuringInit = !1, this.mcpWorkbenchServerLoggers = this._register(new da), this.defaultAuthResolver = {
            resolve: async (ie)=>{
                let oe;
                try {
                    oe = new URL(ie).hostname;
                } catch  {
                    return;
                }
                if (oe === "mcp.slack.com") {
                    const se = this.experimentsService.getDynamicConfigParam("slack_mcp_client_id", "clientId", {
                        disableExposureLog: !1
                    });
                    return se ? {
                        CLIENT_ID: se
                    } : void 0;
                }
                if (oe === "setup.shopify.com") {
                    const se = this.experimentsService.getDynamicConfigParam("shopify_mcp_client_id", "clientId", {
                        disableExposureLog: !1
                    });
                    return se ? {
                        CLIENT_ID: se
                    } : void 0;
                }
            }
        }, this.metricsService.increment({
            stat: "mcp.session_start"
        }), this._shouldEmitCoalesceMetrics = this.experimentsService.checkFeatureGate("mcp_coalesce_metrics_sampling", {
            disableExposureLog: !1
        }), this._metaMcpToolEnabled = this.experimentsService.checkFeatureGate("meta_mcp_tool", {
            disableExposureLog: !1
        }), qG1(this.experimentsService.checkFeatureGate("mcp_structured_logging", {
            disableExposureLog: !1
        }));
        const q = (ie)=>this.workbenchCommandRegistry.registerCommand(ie);
        this.whenInitialized = new Promise((ie)=>{
            this._whenInitializedResolve = ie;
        }), this.mcpFilesLogger = this._register(this.loggerService.createLogger("workbench.mcp.files", {
            name: "MCP Logs",
            hidden: !1
        })), this.mcpOAuthLogger = this._register(this.loggerService.createLogger("workbench.mcp.oauth", {
            name: "MCP OAuth",
            hidden: !1
        })), this._mcpAllowlistLogger = this._register(this.loggerService.createLogger("workbench.mcp.allowlist", {
            name: "MCP Allowlist",
            hidden: !1
        })), this._logAllowlist("info", "[MCPService] MCP Allowlist logger initialized."), this.adminMcpRuntimePolicyFingerprint = this.getAdminMcpRuntimePolicyFingerprint(), this.disabledMcpServers = this._register(Xh(this.storageService, "disabledMcpServers")), this.disabledGlobalMcpServers = this._register(Xh(this.storageService, "disabledGlobalMcpServers")), this.migrateLegacyOriginMcpBuiltinIdentifier(), this.approvedProjectMcpServers = this._register(Xh(this.storageService, "approvedProjectMcpServers")), this.thirdPartyExtensibilityObservable = this._register(Xh(this.storageService, "thirdPartyExtensibilityEnabled")), this.useProfileScopedGlobalMcpDisabledState = this.experimentsService.checkFeatureGate("mcp_profile_scoped_global_disabled_state", {
            disableExposureLog: !1
        }), this.useProfileScopedGlobalMcpDisabledState && (this.dropLegacyWorkspaceDisabledGlobalMcpServers(), this.lastReconciledDisabledGlobalMcpServers = this.disabledGlobalMcpServers.get(), this._register(t6(this.disabledGlobalMcpServers, (ie)=>{
            const oe = this.lastReconciledDisabledGlobalMcpServers;
            this.lastReconciledDisabledGlobalMcpServers = ie, this.reconcileDisabledGlobalMcpServersChange(oe, ie);
        }))), this._register(t6(this.thirdPartyExtensibilityObservable, ()=>{
            Tu("[MCPService] thirdPartyExtensibilityEnabled changed, refreshing plugin servers"), this.refreshPluginServers("third_party_extensibility_changed").then(()=>this.initializeServers("third_party_extensibility_changed"));
        })), this.loginChangedListener = (ie)=>{
            this.reconcileOriginMcpBuiltinServer(ie ? "login_changed_logged_in" : "login_changed_logged_out");
        };
        const K = Fi.as(p7.JSONContribution);
        K.registerSchema(rlg, olg), K.registerSchema(slg, alg), this.initializePlaywrightProtection(), this.initializePreviouslyKnownServerIds(), this._register(this.contextService.onDidChangeWorkspaceFolders(()=>this.reset({
                skipUserConfigFile: !0
            }))), this._register(this.fileService.onDidFilesChange((ie)=>this.onDidFilesChange(ie))), this._register(this.mcpProviderService.onDidChangeProviders(()=>{
            Tu("[MCPService] MCP providers changed, refreshing servers and caches"), this.mcpClientProviders.clear(), this.mcpProcessRoutedServerIds.clear(), this.initializeServers("mcp_providers_changed");
        })), this._register(this.everythingProviderService.onDidChangeCommandProvider((ie)=>{
            this._handleEverythingProviderCommandChange(ie);
        })), this._register(this.mcpConfigService.onDidChangeSelection((ie)=>{
            const oe = new Set(ie.nextSelectedServers.map((se)=>se.identifier));
            for (const se of ie.previousSelectedServers)oe.has(se.identifier) || this.removeHiddenDedupeServerRuntimeState(se, "dedupe_mcp_servers_selection_changed");
            this.getServers();
            for (const se of ie.nextSelectedServers)this.isServerEnabled(se) && !this.isServerBlocked(se) && this.createClientIfNotExists(se);
            this._onSettingsChanged.fire();
        })), this.cursorAuthenticationService.addLoginChangedListener(this.loginChangedListener), this._register({
            dispose: ()=>{
                this.cursorAuthenticationService.removeLoginChangedListener(this.loginChangedListener);
            }
        }), this._register(this.cursorAuthenticationService.onDidChangeTeamIds(()=>{
            this.initializeServers("team_ids_changed");
        })), this._register(this.adminSettingsService.onDidChange(()=>{
            this.handleAdminMcpRuntimePolicyChange().catch(()=>{});
        })), this._register(this.hostedMcpPlacementService.onDidChangeSnapshot(()=>{
            this.onDidChangeHostedMcpPlacement();
        })), this._register(this.experimentsService.onDidChangeGates((ie)=>{
            (ie.changedGates === void 0 || ie.changedGates.has(kal) || ie.changedGates.has(Yzt)) && this.handleAdminMcpRuntimePolicyChange().catch(()=>{}), (ie.changedGates === void 0 || ie.changedGates.has("meta_mcp_tool")) && (this._metaMcpToolEnabled = this.experimentsService.checkFeatureGate("meta_mcp_tool", {
                disableExposureLog: !1
            })), (ie.changedGates === void 0 || ie.changedGates.has("origin_mcp")) && this.reconcileOriginMcpBuiltinServer("origin_mcp_gate_changed");
        })), this._register(this.storageService.onDidChangeValue(0, void 0, this._store)((ie)=>{
            ie.external && this.handleSharedOAuthFanoutStorageChange(ie.key);
        })), this._register(this.extensionService.onDidRegisterExtensions(()=>{
            this.handleRemoteExtensionHostLifecycleEvent("register").catch((ie)=>{
                this.logRemoteExtensionHostLifecycleError("register", ie);
            });
        })), this._register(this.extensionService.onDidChangeExtensionsStatus(()=>{
            this.handleRemoteExtensionHostLifecycleEvent("status").catch((ie)=>{
                this.logRemoteExtensionHostLifecycleError("status", ie);
            });
        })), en.fromObservableLight(this.disabledMcpServers)(()=>this._onSettingsChanged.fire()), en.fromObservableLight(this.disabledGlobalMcpServers)(()=>this._onSettingsChanged.fire()), en.fromObservableLight(this.approvedProjectMcpServers)(()=>this._onSettingsChanged.fire()), this._register(q({
            id: "mcp.updateStatus",
            handler: (ie, oe)=>{
                if (!oe || !oe.identifier || !oe.status) return;
                const se = this.getServers().find((le)=>le.identifier === oe.identifier);
                if (se && !this._isExthostConnectionOwner(se)) {
                    this.logMcpServerFile(oe.identifier, "debug", `[MCPService] Ignoring exthost status update for process-routed server: ${oe.identifier}`, oe.status);
                    return;
                }
                if (Tu(`[MCPService] Received status update from command: ${oe.identifier}`, oe.status), oe.status.type === "needsAuth" && this.statusCache()[oe.identifier]?.type !== "needsAuth") {
                    const ce = oe.reason ?? "status_update";
                    this.recordOAuthNeedsAuthMetric(ce), this._logOAuth("info", `[MCPService] Server entered needsAuth: ${oe.identifier} (cause=${ce})`, void 0, {
                        identifier: oe.identifier,
                        cause: ce
                    });
                }
                this.updateServerStatus(oe.identifier, oe.status);
            }
        }));
        const V = (ie, oe)=>{
            this.updateServerStatus(ie, oe);
        };
        this._register(q({
            id: "mcp.needsAuth",
            handler: (ie, oe)=>{
                const se = this.getServers().find((ce)=>ce.identifier === oe.identifier);
                if (se && !this._isExthostConnectionOwner(se)) {
                    this.logMcpServerFile(oe.identifier, "debug", `[MCPService] Ignoring exthost needsAuth update for process-routed server: ${oe.identifier}`);
                    return;
                }
                this.statusCache()[oe.identifier]?.type !== "needsAuth" && (this.recordOAuthNeedsAuthMetric("mcp_needs_auth_command"), this._logOAuth("info", `[MCPService] Server entered needsAuth via command: ${oe.identifier} (cause=mcp_needs_auth_command)`, void 0, {
                    identifier: oe.identifier,
                    cause: "mcp_needs_auth_command"
                })), V(oe.identifier, {
                    type: "needsAuth",
                    authorizationUrl: oe.authorizationUrl
                });
            }
        })), this._register(q({
            id: "mcp.oauthStorageCleared",
            handler: (ie, oe)=>{
                !oe || !oe.identifier || !oe.reason || (this.recordOAuthStateClearMetric("oauth_storage_cleared", "success", {
                    detail: oe.reason
                }), this._logOAuth("warn", `[MCPService] OAuth storage cleared for server: ${oe.identifier} (reason=${oe.reason})`, void 0, {
                    identifier: oe.identifier,
                    reason: oe.reason
                }));
            }
        })), this._register(q({
            id: "mcp.oauthRefreshFailed",
            handler: (ie, oe)=>{
                !oe || !oe.identifier || !oe.path || (this.metricsService.increment({
                    stat: "mcp.oauth_refresh_failed",
                    tags: {
                        path: oe.path,
                        error_name: oe.errorName ?? "unknown",
                        is_oauth_error: String(oe.isOAuthError ?? !1)
                    }
                }), this._logOAuth("warn", `[MCPService] OAuth refresh failed: ${oe.identifier} (path=${oe.path}, error=${oe.errorName ?? "unknown"}: ${oe.errorMessage ?? "no message"})`, void 0, {
                    identifier: oe.identifier,
                    path: oe.path,
                    errorName: oe.errorName,
                    errorMessage: oe.errorMessage,
                    isOAuthError: oe.isOAuthError
                }));
            }
        })), this._register(q({
            id: "mcp.diskKVSetIfAbsent",
            handler: async (ie, oe, se)=>this.storageService.cursorDiskKVSetIfAbsent(oe, se)
        })), this._register(q({
            id: "mcp.diskKVReplaceIfEquals",
            handler: async (ie, oe, se, le)=>this.storageService.cursorDiskKVReplaceIfEquals(oe, se, le)
        })), this._register(q({
            id: "mcp.diskKVDelete",
            handler: async (ie, oe, se)=>this.storageService.cursorDiskKVDelete(oe, se)
        })), this._register(q({
            id: "mcp.diskKVGet",
            handler: async (ie, oe)=>this.storageService.cursorDiskKVGet(oe)
        })), this._register(q({
            id: "mcp.reloadClient",
            handler: async (ie, oe)=>{
                if (!oe || !oe.identifier) {
                    O0("[MCPService] mcp.reloadClient called without identifier");
                    return;
                }
                Tu(`[MCPService] Received reload client command for: ${oe.identifier}`);
                try {
                    await this.reloadClient(oe.identifier);
                } catch (se) {
                    O0(`[MCPService] Error reloading client ${oe.identifier}:`, se);
                }
            }
        })), this._register(q({
            id: "mcp.progressNotification",
            handler: async (ie, oe)=>{
                Tu(`[MCPService] Received progress notification for: ${oe.progressToken}`, oe.notification), this.setProgressCache((se)=>({
                        ...se,
                        [oe.progressToken]: oe.notification
                    }));
            }
        }));
        const Y = async ()=>{
            Tu("[MCPService] plugins changed, refreshing plugin servers");
            try {
                await this.refreshPluginServers("plugins_changed"), await this.initializeServers("plugins_changed");
            } catch (ie) {
                Dk(this.structuredLogService, "error", "[MCPService] Error refreshing plugin servers on plugins change", ie instanceof Error ? ie : void 0);
            }
        };
        this._register(this.pluginsProviderService.onDidPluginsChange(Y)), this._register(this.pluginsProviderService.onDidPluginsChangeWithoutRefetch(Y)), this._register(this.pluginsProviderService.onDidPluginsCacheChange(()=>{
            this.mcpWellKnownDetectionService.preResolveServerIcons(this.allServers().filter((ie)=>ie.pluginManaged));
        }));
        const { dispose: J } = gA((ie)=>(Cn(()=>{
                this.mcpWellKnownDetectionService.preResolveServerIcons(this.allServers());
            }), {
                dispose: ie
            }));
        this._register({
            dispose: J
        }), this._register(q({
            id: "mcp.elicitationRequest",
            handler: async (ie, oe)=>(Tu(`[MCPService] Received elicitation request: ${oe.request.message}`), new Promise((se)=>{
                    const le = (ce)=>{
                        Tu(`[MCPService] Sending elicitation response for request ${oe.request.id}: ${ce.action}`), this.commandService.executeCommand("mcp.elicitationResponse", {
                            requestId: oe.request.id,
                            response: ce
                        }).catch((ae)=>Cle(`[MCPService] Error sending elicitation response for request ${oe.request.id}: ${ae instanceof Error ? ae.message : String(ae)}`)), se(ce);
                    };
                    this.storeOwnedElicitationRequest(oe.request.id, {
                        ...oe.request,
                        resolve: le
                    });
                }))
        })), this._register(q({
            id: "mcp.leaseElicitationRequest",
            handler: async (ie, oe)=>{
                Tu(`[MCPService] Received lease elicitation request for toolCallId: ${oe.toolCallId}`);
                const se = this.leaseElicitationHandlers.get(oe.toolCallId);
                if (!se) return Cle(`[MCPService] No lease handler found for toolCallId: ${oe.toolCallId}, declining`), {
                    action: "decline"
                };
                try {
                    const le = {
                        id: `lease-${oe.toolCallId}-${Date.now()}`,
                        message: oe.request.message,
                        requestedSchema: oe.request.requestedSchema
                    }, ce = await se(le);
                    return Tu(`[MCPService] Lease handler returned: ${ce.action}`), this.leaseElicitationHandlers.has(oe.toolCallId) ? ce : (Tu("[MCPService] Handler unregistered during elicitation, returning decline"), {
                        action: "decline"
                    });
                } catch (le) {
                    return O0("[MCPService] Lease handler error:", le), {
                        action: "decline"
                    };
                }
            }
        })), this.clearDeprecatedStoredMcpServers(), this.reset();
        let Q;
        const { dispose: te } = gA((ie)=>(Cn(()=>{
                const se = T2().browserFeatures;
                Q !== void 0 && Q !== se && (Dk(this.structuredLogService, "info", "[MCPService] Browser features setting changed", void 0, {
                    subkey: "browser_mcp",
                    previousValue: String(Q),
                    newValue: String(se)
                }), this._onSettingsChanged.fire()), Q = se;
            }), {
                dispose: ie
            }));
        this._register({
            dispose: te
        });
        let ee;
        const { dispose: re } = gA((ie)=>(Cn(()=>{
                const oe = this.reactiveStorageService.applicationUserPersistentStorage.lastBrowserConnectionMode;
                ee !== void 0 && ee !== oe && (Dk(this.structuredLogService, "info", "[MCPService] Browser connection mode changed", void 0, {
                    subkey: "browser_mcp",
                    previousMode: String(ee),
                    newMode: String(oe)
                }), this._onSettingsChanged.fire()), ee = oe;
            }), {
                dispose: ie
            }));
        this._register({
            dispose: re
        });
    }
    static _freshWindowedCounters() {
        return {
            reconnects: 0,
            disconnects: 0,
            errors: 0,
            toolCallSuccesses: 0,
            toolCallFailures: 0
        };
    }
    isMcpOAuthFanoutEnabled() {
        return this.environmentService.remoteAuthority !== void 0 ? !0 : !(this.mcpProcessClientFactory !== void 0 || this.mcpProcessSnapshotFanoutService.isSharedProcessSessionCommitted());
    }
    getSharedOAuthFanoutStorageKey(t) {
        return `${val}${t}`;
    }
    isSharedOAuthFanoutStorageKey(t) {
        return t.startsWith(val);
    }
    pruneStaleSharedOAuthFanoutStorageEvents(t = Date.now()) {
        for (const e of this.storageService.keys(0, 1)){
            if (!this.isSharedOAuthFanoutStorageKey(e)) continue;
            const n = this.parseSharedOAuthFanoutStorageEvent(this.storageService.get(e, 0));
            (!n || t - n.emittedAtMs > jlg) && this.storageService.remove(e, 0);
        }
    }
    publishSharedOAuthFanoutEvent(t) {
        if (this.shouldSuppressSharedOAuthFanoutRebroadcast(t)) {
            this._logOAuth("info", "[MCPService] Shared OAuth fanout rebroadcast suppressed", void 0, {
                serverUrl: R4e(t.serverUrl),
                change: t.change,
                sourceIdentifier: t.sourceIdentifier,
                sourceWorkspaceId: t.sourceWorkspaceId,
                debounceMs: _al
            });
            return;
        }
        const e = Date.now(), n = {
            eventId: `${e}-${Math.random().toString(36).slice(2)}`,
            serverUrl: t.serverUrl,
            change: t.change,
            sourceIdentifier: t.sourceIdentifier,
            sourceWorkspaceId: t.sourceWorkspaceId,
            sourceServiceInstanceId: this.sharedOAuthFanoutServiceInstanceId,
            cause: t.cause,
            saveKind: t.saveKind,
            emittedAtMs: e
        };
        this.lastProcessedSharedOAuthFanoutEventId = n.eventId, this.pruneStaleSharedOAuthFanoutStorageEvents(e), this.storageService.store(this.getSharedOAuthFanoutStorageKey(n.eventId), JSON.stringify(n), 0, 1);
    }
    getSharedOAuthFanoutDebounceKey(t) {
        return `${R4e(t.serverUrl)}::${t.change}`;
    }
    shouldSuppressSharedOAuthFanoutRebroadcast(t) {
        const e = this.getSharedOAuthFanoutDebounceKey(t), n = Date.now(), i = this.recentExternalSharedOAuthFanoutAtMs.get(e);
        return i === void 0 ? !1 : n - i > _al ? (this.recentExternalSharedOAuthFanoutAtMs.delete(e), !1) : !0;
    }
    enqueueSharedOAuthFanout(t) {
        const e = R4e(t.serverUrl), i = (this.sharedOAuthFanoutQueues.get(e) ?? Promise.resolve()).catch(()=>{}).then(async ()=>{
            this.publishSharedOAuthFanoutEvent(t), await this.handleSharedOAuthStateChanged({
                serverUrl: t.serverUrl,
                change: t.change,
                sourceIdentifier: t.sourceIdentifier,
                sourceWorkspaceId: t.sourceWorkspaceId,
                sourceServiceInstanceId: this.sharedOAuthFanoutServiceInstanceId,
                cause: t.cause,
                saveKind: t.saveKind
            });
        }).catch((r)=>{
            this._logOAuth("warn", "[MCPService] Shared OAuth fanout queue failed", r, {
                serverUrl: e,
                change: t.change,
                sourceIdentifier: t.sourceIdentifier,
                sourceWorkspaceId: t.sourceWorkspaceId
            });
        });
        this.sharedOAuthFanoutQueues.set(e, i), i.finally(()=>{
            this.sharedOAuthFanoutQueues.get(e) === i && this.sharedOAuthFanoutQueues.delete(e);
        });
    }
    parseSharedOAuthFanoutStorageEvent(t) {
        if (t) try {
            const e = JSON.parse(t);
            return typeof e.eventId != "string" || typeof e.serverUrl != "string" || typeof e.change != "string" || typeof e.sourceServiceInstanceId != "string" || typeof e.emittedAtMs != "number" ? void 0 : e;
        } catch  {
            return;
        }
    }
    async handleSharedOAuthFanoutStorageChange(t) {
        if (!this.isMcpOAuthFanoutEnabled() || !this.isSharedOAuthFanoutStorageKey(t)) return;
        const e = this.parseSharedOAuthFanoutStorageEvent(this.storageService.get(t, 0));
        if (!(!e || e.eventId === this.lastProcessedSharedOAuthFanoutEventId)) {
            if (e.sourceServiceInstanceId === this.sharedOAuthFanoutServiceInstanceId) {
                this.lastProcessedSharedOAuthFanoutEventId = e.eventId;
                return;
            }
            this.lastProcessedSharedOAuthFanoutEventId = e.eventId, this.recentExternalSharedOAuthFanoutAtMs.set(this.getSharedOAuthFanoutDebounceKey(e), Date.now());
            try {
                await this.handleSharedOAuthStateChanged({
                    serverUrl: e.serverUrl,
                    change: e.change,
                    sourceIdentifier: e.sourceIdentifier,
                    sourceWorkspaceId: e.sourceWorkspaceId,
                    sourceServiceInstanceId: e.sourceServiceInstanceId,
                    cause: e.cause,
                    saveKind: e.saveKind
                });
            } catch (n) {
                this._logOAuth("warn", "[MCPService] Shared OAuth fanout storage handler failed", n, {
                    serverUrl: R4e(e.serverUrl),
                    change: e.change,
                    sourceIdentifier: e.sourceIdentifier,
                    sourceWorkspaceId: e.sourceWorkspaceId
                });
            }
        }
    }
    initializePlaywrightProtection() {
        const e = !this.experimentsService.checkFeatureGate("playwright_autorun", {
            disableExposureLog: !1
        }), n = this.reactiveStorageService.applicationUserPersistentStorage.composerState;
        n.playwrightProtection !== e && !n.userManuallyChangedPlaywrightProtection && this.reactiveStorageService.setApplicationUserPersistentStorage("composerState", "playwrightProtection", e);
    }
    async getProvider() {
        return await this.everythingProviderService.waitForCommandEverythingProvider(pal, RP.CreateClient);
    }
    _getMcpIpcTimeouts() {
        const t = this.experimentsService.getDynamicConfig("mcp_ipc_timeouts", {
            disableExposureLog: !1
        });
        return {
            metadataTimeoutMs: nal(t.metadata_timeout_ms, kss.metadataTimeoutMs),
            lifecycleTimeoutMs: nal(t.lifecycle_timeout_ms, kss.lifecycleTimeoutMs),
            recoveryPerRetryTimeoutMs: nal(t.recovery_per_retry_timeout_ms, kss.recoveryPerRetryTimeoutMs)
        };
    }
    isMcpProviderServer(t) {
        return t.url?.startsWith("mcp-provider://") ?? !1;
    }
    shouldSkipBrowserServer(t) {
        const e = t.identifier === Dpe, n = t.identifier === _X;
        if (!e && !n) return !1;
        const i = this.reactiveStorageService?.applicationUserPersistentStorage?.lastBrowserConnectionMode;
        let r;
        if (n) r = "deprecated";
        else if (!T2().browserFeatures) r = "browser_features_disabled";
        else {
            const o = Vqe(i);
            o === "editor" && e ? r = void 0 : o === "none" && e && (r = `connection_mode_${String(o)}`);
        }
        if (r !== this._lastBrowserSkipReason) {
            const s = this._lastBrowserSkipReason;
            this._lastBrowserSkipReason = r, Dk(this.structuredLogService, "debug", `[MCPService] Browser server skip reason changed: ${s ?? "none"} -> ${r ?? "none"}`, void 0, {
                subkey: "browser_mcp",
                identifier: t.identifier,
                reason: r ?? "none",
                previousReason: s ?? "none"
            });
        }
        return r !== void 0;
    }
    async getMcpClient(t, e, n) {
        const i = ()=>this._getMcpIpcTimeouts(), r = n ?? this.getServers().find((u)=>u.identifier === t), s = this.mcpProviderService.getAllProviders().some((u)=>u.id === t), o = !s && this.shouldUseMcpProcessClient(t, r), a = this.mcpClientProviders.get(t);
        if (a) {
            if (!this.mcpProcessRoutedServerIds.has(t) || o) return a;
            this.mcpClientProviders.delete(t), this.createClientPromises.delete(t), this.mcpProcessRoutedServerIds.delete(t), await a.deleteClient("mcp_process_route_disabled");
        }
        let l;
        if (s) {
            Tu(`[MCPService] Using MCP provider service for server: ${t}`);
            try {
                l = new Hlg(this.mcpProviderService, t, i);
            } catch  {
                Tu(`[MCPService] Falling back to everything provider service for server: ${t}`), l = new Sal(this.everythingProviderService, this.metricsService, this.environmentService.remoteAuthority ? "remote" : "local", t, i, e);
            }
            this.mcpProcessRoutedServerIds.delete(t);
        } else if (o && this.mcpProcessClientFactory) {
            Tu(`[MCPService] Using shared MCP process client for server: ${t}`);
            const u = r?.projectPath ? this.contextService.getWorkspace().folders.find((h)=>this.folderToKey(h) === r.projectPath) : void 0, d = this.contextService.getWorkspace().folders.map((h)=>h.uri.fsPath);
            l = this.mcpProcessClientFactory({
                serverId: t,
                serverName: e,
                projectScopeHash: this.getMcpProcessProjectScopeHash(r),
                projectFsPath: u?.uri.fsPath,
                workspaceFolderFsPaths: d
            }), this.mcpProcessRoutedServerIds.add(t);
        } else Tu(`[MCPService] Using everything provider service for server: ${t}`), l = new Sal(this.everythingProviderService, this.metricsService, this.environmentService.remoteAuthority ? "remote" : "local", t, i, e), this.mcpProcessRoutedServerIds.delete(t);
        const c = new NEi({
            client: l,
            serverId: t,
            shouldAttemptRecoveryConservative: ()=>this.successfullyInitializedServers.has(t),
            shouldAttemptRecoveryForToolCall: ()=>this.successfullyInitializedServers.has(t) || this._serverHasDurableSnapshotTools(t),
            getTimeouts: i,
            recreateClient: ()=>this._selfHealRecreateClient(t),
            reloadClientAfterFailedRecreate: ()=>this._selfHealReloadAfterFailedRecreate(t, o),
            onRecoverySuccess: ()=>this.successfullyInitializedServers.add(t),
            onRecoveryFailure: ()=>this.successfullyInitializedServers.delete(t)
        });
        return this.mcpClientProviders.set(t, c), c;
    }
    async _selfHealRecreateClient(t) {
        const e = this.getServers().find((n)=>n.identifier === t);
        return e ? this.createClient(e) : !1;
    }
    async _selfHealReloadAfterFailedRecreate(t, e) {
        const n = this.getServers().find((s)=>s.identifier === t);
        if (!n) return;
        if (this.refuseUserDisabledServer(n, "self_heal")) return {
            success: !1,
            connected: !1,
            statusType: "disconnected",
            error: "Server is disabled"
        };
        const i = await this.resolveServerVariables(n), r = this.getResolvedServerBlockMessage(i);
        return r ? (this.updateServerStatus(t, {
            type: "error",
            error: r
        }), {
            success: !1,
            connected: !1,
            statusType: "error",
            error: r
        }) : e ? this._ensureConnectedWithResolvedServer(n, i, "self_healing") : this._reloadClientWithResolvedServer(n, i);
    }
    hasMcpProviderForServerId(t) {
        return this.mcpProviderService.getAllProviders().some((e)=>e.id === t);
    }
    async _waitForMcpProviderRegistration(t, e) {
        if (this.hasMcpProviderForServerId(t)) return;
        const n = new Nt;
        try {
            await new Promise((i, r)=>{
                const s = n.add(Cke(e));
                n.add(s.token.onCancellationRequested(()=>r(new Error("Tool call was cancelled")))), n.add(this.mcpProviderService.onDidChangeProviders(()=>{
                    this.hasMcpProviderForServerId(t) && i();
                })), Ec(()=>r(new Error(`Server not found: ${t} (MCP provider did not re-register within ${mal}ms)`)), mal, n);
            });
        } finally{
            n.dispose();
        }
    }
    isMcpSharedProcessTransportEnabled() {
        return this.mcpProcessClientFactory !== void 0;
    }
    isMcpProcessEligibleServer(t) {
        return !!t && !this.environmentService.remoteAuthority && !this.isMcpProviderServer(t) && !this.hasMcpProviderForServerId(t.identifier);
    }
    shouldUseMcpProcessClient(t, e) {
        return this.mcpProcessClientFactory ? (e ??= this.getServers().find((n)=>n.identifier === t), this.isMcpProcessEligibleServer(e)) : !1;
    }
    shouldUseMcpProcessOutput(t) {
        return this.shouldUseMcpProcessClient(t.identifier, t);
    }
    getHostedMcpWithholdMessage(t, e) {
        const n = t.type === "streamableHttp", i = e?.skipUnresolvedUrls && t.url?.includes("${") ? void 0 : t.url, r = this.hostedMcpPlacementService.withholdReason({
            identifier: t.identifier,
            url: i,
            isHttp: n,
            declaredPlacement: t.placement
        });
        return r === void 0 ? void 0 : oAn[r];
    }
    onDidChangeHostedMcpPlacement() {
        if (!this._initialized) {
            this.hostedMcpPlacementChangedDuringInit = !0;
            return;
        }
        this.reEvaluateBlockedServers().catch((t)=>{
            O0("[MCPService] Error re-evaluating Hosted MCP placement:", t);
        });
    }
    reconcileHostedMcpPlacementAfterInit() {
        this.hostedMcpPlacementChangedDuringInit && (this.hostedMcpPlacementChangedDuringInit = !1, this.reEvaluateBlockedServers().catch((t)=>{
            O0("[MCPService] Error re-evaluating Hosted MCP placement after initialization:", t);
        }));
    }
    async refreshHostedMcpPlacementForReload(t) {
        t.type !== "streamableHttp" || !this.hostedMcpPlacementService.isRoutingEnabled() || await Vh(this.hostedMcpPlacementService.refresh("mcp_server_reload", {
            force: !0
        }), Tie._HOSTED_MCP_PLACEMENT_INITIAL_FETCH_TIMEOUT_MS);
    }
    async awaitHostedMcpPlacement(t) {
        if (!this.hostedMcpPlacementService.isRoutingEnabled()) return;
        const e = this.hostedMcpPlacementService.refresh(`mcp_servers_initialized:${t}`, {
            localHttpRowsKey: Sok(this.resolveEffectiveServers().map((n)=>({
                    identifier: n.identifier,
                    url: n.url,
                    isHttp: n.type === "streamableHttp" && !this.isMcpProviderServer(n)
                })))
        });
        this.hostedMcpPlacementService.isPlacementKnown || await Vh(e, Tie._HOSTED_MCP_PLACEMENT_INITIAL_FETCH_TIMEOUT_MS);
    }
    getMcpProcessProjectScopeHash(t) {
        if (!(!t?.projectManaged || !t.projectPath)) return mss(this.contextService.getWorkspace().id, t.projectPath);
    }
    getMcpProcessRouteChangingServerIds() {
        return new Set(this.getServers().filter((t)=>this.isMcpProcessEligibleServer(t)).map((t)=>t.identifier));
    }
    setMcpProcessClientFactory(t) {
        this.mcpProcessClientFactory !== t && (this.mcpProcessClientFactory = t, this.resetMcpProcessRouting("mcp_process_client_factory_changed"), this.reconcileOriginMcpBuiltinServer("mcp_process_client_factory_changed"));
    }
    resetMcpProcessRouting(t) {
        const e = new Set([
            ...this.mcpProcessRoutedServerIds,
            ...this.getMcpProcessRouteChangingServerIds()
        ]);
        if (e.size !== 0) {
            for (const n of e){
                const i = this.mcpClientProviders.get(n);
                this.mcpProcessRoutedServerIds.delete(n), this.mcpClientProviders.delete(n), this.createClientPromises.delete(n), this.successfullyInitializedServers.delete(n), this._durableSnapshots.delete(n), this._cursorMcpDegradedServers.delete(n), this.statusEnteredAtMs.delete(n), this.lastDeleteReasons.set(n, t), this._nextServerIncarnationId(n), this._clearSnapshotWatchdog(n, "replaced"), this.clearServerStatus(n), i && i.deleteClient(t).catch((r)=>{
                    O0(`[MCPService] Error deleting cached client after MCP process routing reset for ${n}:`, r);
                });
            }
            this.setToolsCache((n)=>this.omitServerIds(n, e)), this.setPromptsCache((n)=>this.omitServerIds(n, e)), this.setResourcesCache((n)=>this.omitServerIds(n, e)), this.setInstructionsCache((n)=>this.omitServerIds(n, e)), this._onDidChangeMcpSnapshots.fire(Array.from(e)), this._initialized && this.initializeServers(t).catch((n)=>{
                O0("[MCPService] Error reinitializing servers after MCP process routing reset:", n);
            });
        }
    }
    omitServerIds(t, e) {
        const n = {};
        for (const [i, r] of Object.entries(t))e.has(i) || (n[i] = r);
        return n;
    }
    cleanupHiddenDedupeServerRuntimeState() {
        const t = [], e = new Set;
        for (const r of this.mcpConfigService.getFullMCPServerState()){
            if (!r.isGrouped) continue;
            const s = new Set(r.selectedServerIdentifiers);
            for (const o of r.servers)s.has(o.identifier) || e.has(o.identifier) || !this.hasMcpServerRuntimeState(o.identifier) || (t.push(o), e.add(o.identifier));
        }
        if (t.length === 0) return;
        const n = "dedupe_mcp_servers_hidden_duplicate", i = new Set;
        for (const r of t)this.removeHiddenDedupeServerRuntimeState(r, n), i.add(r.identifier);
        i.size !== 0 && (this.setToolsCache((r)=>this.omitServerIds(r, i)), this.setPromptsCache((r)=>this.omitServerIds(r, i)), this.setResourcesCache((r)=>this.omitServerIds(r, i)), this.setInstructionsCache((r)=>this.omitServerIds(r, i)), this._onDidChangeMcpSnapshots.fire(Array.from(i)));
    }
    hasMcpServerRuntimeState(t) {
        return this.mcpClientProviders.has(t) || this.createClientPromises.has(t) || this.successfullyInitializedServers.has(t) || this._durableSnapshots.has(t) || this._cursorMcpDegradedServers.has(t) || Object.prototype.hasOwnProperty.call(this.statusCache(), t) || Object.prototype.hasOwnProperty.call(this.toolsCache(), t) || Object.prototype.hasOwnProperty.call(this.promptsCache(), t) || Object.prototype.hasOwnProperty.call(this.resourcesCache(), t) || Object.prototype.hasOwnProperty.call(this.instructionsCache(), t);
    }
    removeHiddenDedupeServerRuntimeState(t, e) {
        const n = this.mcpClientProviders.get(t.identifier);
        this.mcpClientProviders.delete(t.identifier), this.mcpProcessRoutedServerIds.delete(t.identifier), this.createClientPromises.delete(t.identifier), this.successfullyInitializedServers.delete(t.identifier), this._durableSnapshots.delete(t.identifier), this._cursorMcpDegradedServers.delete(t.identifier), this.statusEnteredAtMs.delete(t.identifier), this.lastDeleteReasons.set(t.identifier, e), this._nextServerIncarnationId(t.identifier), this._clearSnapshotWatchdog(t.identifier, "delete_client"), this.clearServerStatus(t.identifier), this.clearElicitationRequestsForServer(t.identifier), n && n.deleteClient(e).catch((i)=>{
            O0(`[MCPService] Error deleting hidden duplicate MCP client ${t.identifier}:`, i), Dk(this.structuredLogService, "error", "[MCPService] Error deleting hidden duplicate MCP client", i instanceof Error ? i : void 0, {
                subkey: "delete_client",
                identifier: t.identifier
            });
        });
    }
    _injectTestClient(t, e, n) {
        this.mcpClientProviders.set(t.identifier, e);
        const i = this.extensionRegisteredServers.findIndex((r)=>r.identifier === t.identifier);
        i >= 0 ? this.extensionRegisteredServers[i] = t : this.extensionRegisteredServers.push(t), n?.tools && this.setToolsCache((r)=>({
                ...r,
                [t.identifier]: n.tools ?? []
            })), n?.prompts && this.setPromptsCache((r)=>({
                ...r,
                [t.identifier]: n.prompts ?? []
            })), n?.resources && this.setResourcesCache((r)=>({
                ...r,
                [t.identifier]: n.resources ?? []
            })), n?.instructions !== void 0 && this.setInstructionsCache((r)=>({
                ...r,
                [t.identifier]: n.instructions ?? ""
            })), this.updateServerStatus(t.identifier, n?.status ?? {
            type: "connected"
        });
    }
    clearDeprecatedStoredMcpServers() {
        const t = this.reactiveStorageService.applicationUserPersistentStorage.mcpServers;
        !t || t.length === 0 || (Tu(`[MCPService] Clearing ${t.length} deprecated stored MCP servers`), this.reactiveStorageService.setApplicationUserPersistentStorage("mcpServers", []));
    }
    async getUserConfigFilePath() {
        const t = await this.pathService.userHome({
            preferLocal: !1
        });
        return this.uriIdentityService.extUri.joinPath(t, ".cursor", "mcp.json");
    }
    async initializeUserConfiguredServers() {
        Tu("[MCPService] Initializing user-configured servers from file");
        try {
            const t = await this.getUserConfigFilePath();
            if (this._store.isDisposed) return;
            const e = Mc(t);
            this.userConfigFileWatcher.value = this.fileService.watch(e);
            const n = [
                ...this.userConfiguredServers
            ];
            this.userConfiguredServers = await this._handleMcpConfigFileChange(t, {
                projectManaged: !1
            }, n), Tu(`[MCPService] Loaded ${this.userConfiguredServers.length} user-configured servers from file`);
        } catch (t) {
            O0("[MCPService] Error initializing user-configured servers:", t);
        }
    }
    async reset(t = {}) {
        Tu("[MCPService] Resetting MCP service");
        const e = this.contextService.getWorkspace().folders;
        this.workspaceFolderWatchers.clear();
        for (const n of e){
            const i = this.uriIdentityService.extUri.joinPath(n.uri, ".cursor");
            this.workspaceFolderWatchers.add(this.fileService.watch(i));
        }
        await this.refreshProjectManagedServers(), await this.refreshPluginServers("reset"), t.skipUserConfigFile || await this.initializeUserConfiguredServers(), await this.initializeServers(t.skipUserConfigFile ? "reset_skip_user_config" : "reset");
    }
    async onDidFilesChange(t) {
        let e = !1;
        const n = [], i = this.contextService.getWorkspace().folders;
        for (const s of i){
            const o = this.uriIdentityService.extUri.joinPath(s.uri, ".cursor", "mcp.json");
            this.eventTouchesConfigFile(t, o) && (await this.handleProjectMcpJsonChange(o, s), e = !0, n.push("project_mcp_json_changed"));
        }
        const r = await this.getUserConfigFilePath();
        this.eventTouchesConfigFile(t, r) && (Tu(`[MCPService] User config file changed: ${r.toString()}`), await this.initializeUserConfiguredServers(), e = !0, n.push("user_mcp_config_changed")), e && (this._onSettingsChanged.fire(), await this.initializeServers(n));
    }
    eventTouchesConfigFile(t, e) {
        const n = this.uriIdentityService.extUri;
        for (const i of t.rawAdded)if (i.path.length === e.path.length && n.isEqual(i, e)) return !0;
        for (const i of t.rawUpdated)if (i.path.length === e.path.length && n.isEqual(i, e)) return !0;
        for (const i of t.rawDeleted)if (i.path.length <= e.path.length && n.isEqualOrParent(e, i)) return !0;
        return !1;
    }
    async refreshProjectManagedServers() {
        const t = this.contextService.getWorkspace().folders;
        Tu("[MCPService] Refreshing project-managed servers", t);
        for (const e of t){
            const n = this.uriIdentityService.extUri.joinPath(e.uri, ".cursor", "mcp.json");
            try {
                await this.handleProjectMcpJsonChange(n, e);
            } catch (i) {
                O0(`[MCPService] Error loading MCP config from ${n}:`, i);
            }
        }
    }
    async refreshPluginServers(t) {
        const e = this.thirdPartyExtensibilityObservable.get(), n = this.experimentsService.checkFeatureGate("enable_cc_plugin_import", {
            disableExposureLog: !1
        });
        Tu("[MCPService] Refreshing plugin servers");
        let i = [], r = "ok", s = 0;
        try {
            const { outcome: o, servers: a } = await this.pluginsProviderService.getPluginMcpServersWithOutcome();
            r = o, s = a.length, i = a.filter((c)=>e && n || c.pluginSource !== "claude-plugin").map((c)=>({
                    identifier: c.identifier,
                    name: c.name,
                    marketplace: c.marketplace,
                    marketplaceId: c.marketplaceId,
                    type: c.type,
                    url: c.url,
                    headers: c.headers,
                    auth: c.auth,
                    ...c.type === "streamableHttp" && c.placement !== void 0 ? {
                        placement: c.placement
                    } : {},
                    command: c.command,
                    args: c.args,
                    env: c.env,
                    envFile: c.envFile,
                    cwd: c.cwd,
                    enabledTools: c.enabledTools,
                    projectManaged: !1,
                    pluginManaged: !0,
                    pluginName: c.pluginName,
                    pluginId: c.pluginId
                })), Tu("[MCPService] Loaded plugin servers:", i.map((c)=>c.identifier));
        } catch (o) {
            r = "error", Dk(this.structuredLogService, "error", "[MCPService] Error loading plugin servers", o instanceof Error ? o : void 0);
        }
        this.pluginServers = i, this._reportPluginCensus(t, r, s);
    }
    _reportPluginCensus(t, e, n) {
        const i = this.resolveEffectiveServers(), r = this.environmentService.remoteAuthority, s = {
            trigger: t,
            providerOutcome: e,
            descriptorsReceived: n,
            pluginServersAssigned: this.pluginServers.length,
            defaultServers: this.defaultServers.length,
            userServers: this.userConfiguredServers.length,
            projectServers: this.projectManagedServers.length,
            extensionServers: this.extensionRegisteredServers.length,
            providerServers: this.mcpProviderService.getAllProviders().length,
            effectiveTotal: i.length,
            enabledTotal: i.filter((a)=>this.isServerEnabled(a)).length,
            remoteAuthorityPrefix: r !== void 0 ? Z6e(r) : "local"
        }, o = [
            s.providerOutcome,
            s.descriptorsReceived,
            s.pluginServersAssigned,
            s.defaultServers,
            s.userServers,
            s.projectServers,
            s.extensionServers,
            s.providerServers,
            s.effectiveTotal,
            s.enabledTotal,
            s.remoteAuthorityPrefix
        ].join("|");
        o !== this._lastPluginCensusSignature && (this._lastPluginCensusSignature = o, this.mcpFilesLogger.info(`[MCPService] Plugin MCP census: ${JSON.stringify(s)}`), Dk(this.structuredLogService, "info", "[MCPService] Plugin MCP census", void 0, {
            subkey: "plugin_mcp_census",
            event: "mcp_plugin_resolution_census",
            ...s
        }));
    }
    async handleProjectMcpJsonChange(t, e) {
        Tu(`[MCPService] Project MCP JSON changed: ${t.toString()}`);
        const n = this.folderToKey(e);
        try {
            const i = this.projectManagedServers.filter((s)=>s.projectPath === n), r = await this._handleMcpConfigFileChange(t, {
                projectManaged: !0,
                projectPath: n
            }, i);
            this.projectManagedServers = this.projectManagedServers.filter((s)=>!s.projectPath || s.projectPath !== n), this.projectManagedServers.push(...r);
        } catch (i) {
            O0(`[MCPService] Error parsing MCP JSON file: ${t.toString()}`, i);
        }
    }
    computeIdentifier(t) {
        const e = this.computeIdentifierPrefix(t.projectPath);
        return t.extensionId ? `${e}${t.extensionId}-${t.name}` : `${e}${t.name}`;
    }
    computeIdentifierPrefix(t) {
        return t ? `project-${t}-` : "user-";
    }
    async parseMcpServersFromFile(t, e) {
        if (!await this.fileService.exists(t)) return Tu(`[MCPService] MCP config file does not exist: ${t}`), [];
        const i = this.computeIdentifierPrefix(e.projectPath);
        Tu(`[MCPService] Using identifier prefix: ${i}`);
        try {
            const r = await this.fileService.readFile(t), s = $Tt(r.value.toString()), o = [];
            if (!s.mcpServers || typeof s.mcpServers != "object" || Array.isArray(s.mcpServers)) {
                const c = "Invalid config: mcpServers must be an object";
                return Tu("[MCPService] " + c, s), Tu("[MCPService] Setting parsing error for prefix:", i), this.setParsingErrors((u)=>{
                    const d = {
                        ...u,
                        [i]: c
                    };
                    return Tu("[MCPService] New parsing errors:", d), d;
                }), o;
            }
            this.setParsingErrors((c)=>{
                const { [i]: u, ...d } = c;
                return Tu("[MCPService] Cleared parsing error for prefix:", i), Tu("[MCPService] Remaining parsing errors:", d), d;
            });
            for (const [c, u] of Object.entries(s.mcpServers)){
                const d = this.computeIdentifier({
                    name: c,
                    ...e
                });
                if (!u.command && !u.url) {
                    const p = `Server "${c}" must have either a command (for stdio) or url (for SSE)`;
                    Tu("[MCPService] " + p), this.setParsingErrors((g)=>({
                            ...g,
                            [this.computeIdentifierPrefix(e.projectPath)]: p
                        }));
                    continue;
                }
                const h = Array.isArray(u.enabledTools) ? u.enabledTools.filter((p)=>typeof p == "string") : void 0;
                if (u.command) {
                    if (typeof u.command != "string" || !u.command.trim()) {
                        const g = `Server "${c}" has an invalid command: must be a non-empty string`;
                        Tu("[MCPService] " + g), this.setParsingErrors((f)=>({
                                ...f,
                                [this.computeIdentifierPrefix(e.projectPath)]: g
                            }));
                        continue;
                    }
                    const p = {
                        identifier: d,
                        name: c,
                        type: "stdio",
                        env: u.env,
                        envFile: u.envFile,
                        command: u.command,
                        args: u.args,
                        ...e,
                        enabledTools: h
                    };
                    Tu("[MCPService] Adding stdio server:", p), o.push(p);
                } else if (u.url) {
                    if (typeof u.url != "string" || !u.url.trim()) {
                        const _ = `Server "${c}" has an invalid url: must be a non-empty string`;
                        Tu("[MCPService] " + _), this.setParsingErrors((b)=>({
                                ...b,
                                [this.computeIdentifierPrefix(e.projectPath)]: _
                            }));
                        continue;
                    }
                    const p = this.ensureUrlHasProtocol(u.url), g = CH1(u.placement);
                    g === void 0 && u.placement !== void 0 && Tu(`[MCPService] Server "${c}" declares an unknown placement, ignoring it:`, u.placement);
                    const f = {
                        identifier: d,
                        name: c,
                        type: "streamableHttp",
                        url: p,
                        headers: typeof u == "object" && "headers" in u ? u.headers : void 0,
                        auth: typeof u == "object" && "auth" in u ? u.auth : void 0,
                        ...g !== void 0 ? {
                            placement: g
                        } : {},
                        ...e,
                        enabledTools: h
                    };
                    Tu("[MCPService] Adding streamableHttp server:", f), o.push(f);
                }
            }
            const a = this.approvedProjectMcpServers.get(), l = a.filter((c)=>{
                if (!c.startsWith(i)) return !0;
                const u = c.includes(":"), d = u ? c.split(":")[0] : c, h = o.find((g)=>g.identifier === d);
                if (!h) return !1;
                if (!u) return !0;
                const p = this.computeApprovalKey(h);
                return c === p;
            });
            return l.length !== a.length && this.approvedProjectMcpServers.set(l, void 0), o;
        } catch (r) {
            if (r.code !== "FileNotFound") {
                O0("[MCPService] Error parsing MCP config file:", r);
                const s = r instanceof SyntaxError ? `JSON syntax error: ${r.message}` : r instanceof Error ? r.message : String(r);
                Tu("[MCPService] Setting parsing error for prefix:", i, s), this.setParsingErrors((o)=>{
                    const a = {
                        ...o,
                        [i]: s
                    };
                    return Tu("[MCPService] New parsing errors:", a), a;
                });
            }
            return [];
        }
    }
    _normalizeInitializeServerReasons(t) {
        const e = (Array.isArray(t) ? t : [
            t
        ]).map((n)=>n.trim()).filter((n)=>n.length > 0);
        return e.length > 0 ? Array.from(new Set(e)) : [
            "unspecified"
        ];
    }
    async initializeServers(t = "unspecified") {
        if (this._store.isDisposed) return;
        const e = this._normalizeInitializeServerReasons(t);
        if (this.initializeServersPromise) return this.initializeServersRequestedDuringInit = !0, this.pendingInitializeServersReasons = this._normalizeInitializeServerReasons([
            ...this.pendingInitializeServersReasons,
            ...e
        ]), Dk(this.structuredLogService, "info", "[MCPService] initializeServers requested while initialization already in progress", void 0, {
            subkey: "server_init",
            initializeReason: e[0],
            initializeReasons: JSON.stringify(e),
            queuedReasons: JSON.stringify(this.pendingInitializeServersReasons),
            queuedReasonCount: this.pendingInitializeServersReasons.length
        }), this.initializeServersPromise;
        const n = this._normalizeInitializeServerReasons([
            ...this.pendingInitializeServersReasons,
            ...e
        ]);
        if (this.pendingInitializeServersReasons = [], this.initializeServersRequestedDuringInit = !1, this.initializeServersPromise = this.doInitializeServers(n).finally(()=>{
            this.initializeServersPromise = void 0;
        }), await this.initializeServersPromise, this.initializeServersRequestedDuringInit) {
            const i = this.pendingInitializeServersReasons;
            return this.initializeServersRequestedDuringInit = !1, this.pendingInitializeServersReasons = [], this.initializeServers(i);
        }
        this._reconcileMissingDurableSnapshots("initialize_complete").catch((i)=>{
            O0("[MCPService] Error reconciling missing durable snapshots after initializeServers:", i);
        }), this._initialized || (this._initialized = !0, this._whenInitializedResolve?.(), this._onDidInitialize.fire()), this.reconcileHostedMcpPlacementAfterInit();
    }
    isInitialized() {
        return this._initialized;
    }
    async doInitializeServers(t) {
        Dk(this.structuredLogService, "info", "[MCPService] Starting server initialization", void 0, {
            subkey: "server_init",
            initializeReason: t[0] ?? "unspecified",
            initializeReasons: JSON.stringify(t),
            initializeReasonCount: t.length
        }), await this.awaitHostedMcpPlacement(t[0] ?? "unspecified");
        const e = this.getServers();
        Dk(this.structuredLogService, "info", `[MCPService] Found ${e.length} servers on startup`, void 0, {
            subkey: "server_init",
            serverCount: e.length,
            initializeReason: t[0] ?? "unspecified",
            initializeReasons: JSON.stringify(t),
            initializeReasonCount: t.length
        });
        try {
            await this.migrateLegacyApprovals();
        } catch (s) {
            Dk(this.structuredLogService, "error", "[MCPService] Error migrating legacy approvals", s instanceof Error ? s : void 0, {
                subkey: "server_init"
            });
        }
        const n = [];
        for (const s of e){
            if (this.refuseUserDisabledServer(s, "initialize")) continue;
            const o = this.getServerBlockMessage(s);
            if (o) {
                Tu(`[MCPService] Server ${s.identifier} is blocked, skipping`), this.updateServerStatus(s.identifier, {
                    type: "error",
                    error: o
                });
                continue;
            }
            if (!this.isServerEnabled(s) && !this.isMcpProviderServer(s)) {
                Tu(`[MCPService] Server ${s.identifier} is disabled, skipping`), this.updateServerStatus(s.identifier, {
                    type: "disconnected"
                });
                continue;
            }
            if (s.type === "stdio" && !s.command) {
                Cle(`[MCPService] Missing command for stdio server ${s.identifier}`), this.updateServerStatus(s.identifier, {
                    type: "error",
                    error: "Missing command for stdio server"
                });
                continue;
            }
            n.push(s);
        }
        Tu(`[MCPService] Initializing ${n.length} servers in parallel`);
        const i = n.map(async (s)=>{
            try {
                Tu(`[MCPService] Creating client for server: ${s.identifier}`);
                const o = await this.createClientIfNotExists(s);
                return o ? (Tu(`[MCPService] Successfully created client for server: ${s.identifier}`), this.successfullyInitializedServers.add(s.identifier)) : Tu(`[MCPService] createClient returned false for server: ${s.identifier} (may already be registered)`), {
                    server: s,
                    success: o
                };
            } catch (o) {
                return Dk(this.structuredLogService, "error", `[MCPService] Error initializing server ${s.identifier}`, o instanceof Error ? o : void 0, {
                    subkey: "server_init",
                    identifier: s.identifier,
                    serverName: s.name
                }), this.updateServerStatus(s.identifier, {
                    type: "error",
                    error: o instanceof Error ? o.message : String(o)
                }), {
                    server: s,
                    success: !1,
                    error: o
                };
            }
        });
        await Promise.allSettled(i);
        const r = this._getPostInitializeRefreshServerIdentifiers(n);
        if (r === void 0 || r.length > 0) try {
            await this.refreshCaches(r === void 0 ? void 0 : {
                serverIdentifiers: r
            });
        } catch (s) {
            Dk(this.structuredLogService, "error", "[MCPService] Error refreshing caches after server init", s instanceof Error ? s : void 0, {
                subkey: "server_init"
            });
        }
    }
    _getPostInitializeRefreshServerIdentifiers(t) {
        return t.filter((e)=>this.isMcpProviderServer(e) && !this._isBrowserProviderServer(e)).map((e)=>e.identifier);
    }
    _isBrowserProviderServer(t) {
        return t.identifier === Dpe || t.identifier === _X;
    }
    async handleRemoteExtensionHostLifecycleEvent(t) {
        if (this.environmentService.remoteAuthority) {
            if (t === "register" && !this.hasObservedInitialRemoteExtensionRegistration) {
                this.hasObservedInitialRemoteExtensionRegistration = !0, this.isIgnoringInitialRemoteExtensionHostLifecycleBurst = !0, queueMicrotask(()=>{
                    this.isIgnoringInitialRemoteExtensionHostLifecycleBurst = !1;
                });
                return;
            }
            if (this.hasObservedInitialRemoteExtensionRegistration && !this.isIgnoringInitialRemoteExtensionHostLifecycleBurst) return this.remoteExtensionHostRefreshPromise ? (this.remoteExtensionHostRefreshRequestedWhileRunning = !0, this.remoteExtensionHostRefreshPromise) : (this.remoteExtensionHostRefreshPromise = (async ()=>{
                let e = t;
                do this.remoteExtensionHostRefreshRequestedWhileRunning = !1, Tu(`[MCPService] Remote extension host lifecycle event (${e}) detected, refreshing MCP servers`), await this.initializeServers(), e = "coalesced";
                while (this.remoteExtensionHostRefreshRequestedWhileRunning)
            })().finally(()=>{
                this.remoteExtensionHostRefreshPromise = void 0, this.remoteExtensionHostRefreshRequestedWhileRunning = !1;
            }), this.remoteExtensionHostRefreshPromise);
        }
    }
    logRemoteExtensionHostLifecycleError(t, e) {
        Dk(this.structuredLogService, "error", `[MCPService] Error handling remote extension ${t} lifecycle event`, e instanceof Error ? e : void 0, {
            subkey: "remote_extension_lifecycle",
            source: t,
            errorMessage: e instanceof Error ? e.message : String(e)
        });
    }
    migrateLegacyOriginMcpBuiltinIdentifier() {
        for (const t of [
            this.disabledMcpServers,
            this.disabledGlobalMcpServers
        ]){
            const e = t.get();
            if (!e.includes(dal)) continue;
            const n = e.filter((i)=>i !== dal);
            n.includes(U6t.identifier) || n.push(U6t.identifier), t.set(n, void 0);
        }
    }
    shouldRegisterOriginMcpBuiltinServer() {
        return this.mcpProcessClientFactory !== void 0 && !this.environmentService.remoteAuthority && this.cursorAuthenticationService.isAuthenticated() && this.experimentsService.checkFeatureGate("origin_mcp", {
            disableExposureLog: !this.experimentsService.hasAuthenticatedStatsigUser()
        });
    }
    reconcileOriginMcpBuiltinServer(t) {
        return this.originMcpReconcileSequence = this.originMcpReconcileSequence.then(async ()=>{
            let e = !1;
            try {
                const n = this.defaultServers.find(Hfk);
                this.shouldRegisterOriginMcpBuiltinServer() ? n || (this.defaultServers = [
                    ...this.defaultServers,
                    Blg
                ], this.getServers(), e = !0) : n && (this.defaultServers = this.defaultServers.filter((i)=>i !== n), this.getServers(), e = !0, await this.deleteClient(n, "origin_mcp_removed"));
            } catch (n) {
                O0("[MCPService] Failed to reconcile Origin MCP server:", n);
            }
            (e || t.startsWith("login_changed_")) && await this.initializeServers(t);
        }).catch((e)=>{
            O0("[MCPService] Failed to reconcile Origin MCP server:", e);
        }), this.originMcpReconcileSequence;
    }
    resolveEffectiveServers() {
        const e = this.mcpProviderService.getAllProviders().map((i)=>({
                identifier: i.id,
                name: i.name?.trim() || i.id,
                type: "streamableHttp",
                url: "mcp-provider://" + i.id,
                projectManaged: !1
            })), n = [
            ...this.defaultServers,
            ...this.userConfiguredServers,
            ...this.projectManagedServers,
            ...this.extensionRegisteredServers,
            ...this.pluginServers,
            ...e
        ];
        return [
            ...this.mcpConfigService.resolveServers({
                servers: n,
                disabledServerIdentifiers: this.useProfileScopedGlobalMcpDisabledState ? [
                    ...this.disabledMcpServers.get().filter((i)=>this.isProjectManagedIdentifier(i)),
                    ...this.disabledGlobalMcpServers.get()
                ] : this.disabledMcpServers.get()
            })
        ];
    }
    getServers() {
        const t = this.resolveEffectiveServers();
        return Tu("[MCPService] Getting servers:", t.map((e)=>({
                identifier: e.identifier,
                type: e.type,
                command: e.command,
                url: e.url,
                status: this.statusCache()[e.identifier]
            }))), this.setAllServers(t), this.cleanupHiddenDedupeServerRuntimeState(), t;
    }
    _isEverythingProviderManagedServer(t) {
        return !this.isMcpProviderServer(t);
    }
    _isExthostConnectionOwner(t) {
        return !!(!this.isMcpSharedProcessTransportEnabled() || this.isMcpProviderServer(t));
    }
    _isEverythingProviderExthostManagedServer(t) {
        return this._isEverythingProviderManagedServer(t) && !this.shouldUseMcpProcessClient(t.identifier, t);
    }
    _shouldMutateStatusDuringRefreshCaches(t) {
        return this.isMcpSharedProcessTransportEnabled() ? this._isExthostConnectionOwner(t) : !0;
    }
    _isCursorMcpExthostDegradedStatus(t) {
        return t?.type === "degraded" && t.reason === gal;
    }
    _handleEverythingProviderCommandChange(t) {
        if (t.command === RP.CreateClient) {
            if (t.state === "unregistered") {
                this._markEverythingProviderServersDegraded();
                return;
            }
            this._queueEverythingProviderRehydrate(t.generation);
        }
    }
    _markEverythingProviderServersDegraded() {
        for (const t of this.getServers()){
            if (!this._isEverythingProviderExthostManagedServer(t) || !this.isServerEnabled(t) || this.isServerBlocked(t)) continue;
            const e = this.statusCache()[t.identifier];
            e?.type !== "connected" && e?.type !== "initializing" || (this._cursorMcpDegradedServers.add(t.identifier), this.updateServerStatus(t.identifier, {
                type: "degraded",
                reason: gal
            }));
        }
    }
    _getEverythingProviderRehydrateCandidates() {
        return this.getServers().filter((t)=>!this._cursorMcpDegradedServers.has(t.identifier) || !this._isEverythingProviderExthostManagedServer(t) || !this.isServerEnabled(t) || this.isServerBlocked(t) ? !1 : this._isCursorMcpExthostDegradedStatus(this.statusCache()[t.identifier]));
    }
    _queueEverythingProviderRehydrate(t) {
        this._cursorMcpDegradedServers.size !== 0 && (this._everythingProviderRehydrateTargetGeneration = Math.max(this._everythingProviderRehydrateTargetGeneration, t), !this._everythingProviderRehydratePromise && (this._everythingProviderRehydratePromise = this._runEverythingProviderRehydrateLoop().catch((e)=>{
            O0("[MCPService] Error rehydrating EverythingProvider-managed servers:", e), Dk(this.structuredLogService, "error", "[MCPService] Error rehydrating EverythingProvider-managed servers", e instanceof Error ? e : void 0, {
                subkey: "everything_provider_rehydrate"
            });
        }).finally(()=>{
            this._everythingProviderRehydratePromise = void 0;
        })));
    }
    async _runEverythingProviderRehydrateLoop() {
        do {
            const t = this._everythingProviderRehydrateTargetGeneration;
            if (await this._rehydrateEverythingProviderServers(), t === this._everythingProviderRehydrateTargetGeneration) return;
        }while (!0)
    }
    async _rehydrateEverythingProviderServers() {
        const t = this._getEverythingProviderRehydrateCandidates();
        if (t.length !== 0) for(let e = 0; e < t.length; e += fal){
            const n = t.slice(e, e + fal);
            await Promise.all(n.map(async (i)=>{
                try {
                    await this.createClient(i) && (this.successfullyInitializedServers.add(i.identifier), this._cursorMcpDegradedServers.delete(i.identifier), this.updateServerStatus(i.identifier, {
                        type: "connected"
                    }));
                } catch (r) {
                    Dk(this.structuredLogService, "warn", `[MCPService] Failed to rehydrate server after EverythingProvider re-registration: ${i.identifier}`, r instanceof Error ? r : void 0, {
                        subkey: "rehydrate_after_provider_register",
                        identifier: i.identifier,
                        serverName: i.name
                    });
                }
            }));
        }
    }
    logMcpFile(t, e, ...n) {
        this.mcpFilesLogger[t](e, ...n), Dk(this.structuredLogService, t, e, n[0] instanceof Error ? n[0] : void 0, {
            subkey: "mcp_files"
        });
    }
    mcpWorkbenchServerLoggerId(t) {
        return `${Htl(t)}.workbench`;
    }
    getMcpWorkbenchServerLogger(t) {
        const e = t, n = this.mcpWorkbenchServerLoggers.get(e);
        if (n) return n;
        if (this._store.isDisposed) return new OTo;
        const i = this.loggerService.createLogger(this.mcpWorkbenchServerLoggerId(t), {
            name: "MCPService",
            hidden: !1,
            group: nlk(t)
        });
        return this.mcpWorkbenchServerLoggers.set(e, i), i;
    }
    logMcpServerFile(t, e, n, ...i) {
        this.logMcpFile(e, n, ...i), this.getMcpWorkbenchServerLogger(t)[e](n, ...i);
    }
    _logOAuth(t, e, n, i) {
        t === "error" ? this.mcpOAuthLogger.error(e, n) : this.mcpOAuthLogger[t](e), Dk(this.structuredLogService, t, e, n, {
            subkey: "mcp_oauth",
            ...i
        });
    }
    _logAllowlist(t, e, n) {
        this._mcpAllowlistLogger[t](e), Dk(this.structuredLogService, t, e, void 0, {
            subkey: "mcp_allowlist",
            ...n
        });
    }
    updateServerStatus(t, e) {
        const n = this.allServers().find((o)=>o.identifier === t) ?? this.getServers().find((o)=>o.identifier === t);
        if (!n) {
            O0(`[MCPService] Cannot update status: server ${t} not found`), Dk(this.structuredLogService, "error", "[MCPService] Cannot update status: server not found", void 0, {
                subkey: "status_update",
                identifier: t
            });
            return;
        }
        const i = this.statusCache()[t], r = JSON.stringify(i) !== JSON.stringify(e), s = i?.type !== e.type;
        if (this.setStatusCache((o)=>({
                ...o,
                [t]: e
            })), this._isCursorMcpExthostDegradedStatus(e) || this._cursorMcpDegradedServers.delete(t), r && (this._onDidChangeServerStatus.fire({
            identifier: t,
            status: e
        }), this._emitStatusTransitionMetrics(n, i, e), s)) {
            const o = e.type === "error" ? "error" : e.type === "degraded" ? "warn" : "info";
            Dk(this.structuredLogService, o, `[MCPService] Server status update: ${t} -> ${e.type}`, void 0, {
                subkey: "status_update",
                identifier: t,
                serverName: n.name,
                newStatus: e.type,
                oldStatus: i?.type ?? "unknown"
            });
            const a = i?.type ?? "none", l = e.type, c = this.statusEnteredAtMs.get(t), u = c !== void 0 ? Date.now() - c : void 0;
            this.statusEnteredAtMs.set(t, Date.now());
            const d = (()=>{
                try {
                    return typeof n.url == "string" ? new URL(n.url).host : void 0;
                } catch  {
                    return;
                }
            })();
            this._logOAuth("info", `[MCPService] State transition: ${t} ${a} \u2192 ${l}`, void 0, {
                event: "mcp_oauth_state_transition",
                serverIdentifier: t,
                from: a,
                to: l,
                serverUrlHost: d,
                serverType: n.type,
                previousStateDurationMs: u,
                ...e.type === "error" ? {
                    errorDetail: Wfk(e.error)
                } : {}
            });
        }
    }
    clearServerStatus(t) {
        this.setStatusCache((e)=>{
            const { [t]: n, ...i } = e;
            return i;
        });
    }
    _isIncomingSnapshotNewer(t, e) {
        return e.snapshotEpoch !== t.snapshotEpoch ? e.snapshotEpoch > t.snapshotEpoch : e.snapshotRevision > t.snapshotRevision;
    }
    _isExactDuplicateSnapshot(t, e) {
        return t.snapshotEpoch === e.snapshotEpoch && t.snapshotRevision === e.snapshotRevision && this._providerSnapshotMatches(t, e);
    }
    receiveMcpSnapshots(t, e) {
        this._hasReceivedAnySnapshots = !0;
        const n = performance.now(), i = [];
        let r = 0;
        for (const g of t){
            const f = this._durableSnapshots.get(g.serverIdentifier);
            if (f && !this._isIncomingSnapshotNewer(f, g)) {
                r++, this._isExactDuplicateSnapshot(f, g) || Dk(this.structuredLogService, "warn", `[MCPService] Dropping stale snapshot for ${g.serverIdentifier}`, void 0, {
                    subkey: "snapshot",
                    identifier: g.serverIdentifier,
                    incomingEpoch: g.snapshotEpoch,
                    incomingRevision: g.snapshotRevision,
                    existingEpoch: f.snapshotEpoch,
                    existingRevision: f.snapshotRevision
                });
                continue;
            }
            this._durableSnapshotGeneration++;
            const _ = {
                ...g,
                snapshotGeneration: this._durableSnapshotGeneration
            };
            this._durableSnapshots.set(_.serverIdentifier, _), this._clearSnapshotWatchdogOnFreshSnapshot(_), i.push(_), Dk(this.structuredLogService, "info", `[MCPService] Received snapshot for ${g.serverIdentifier}`, void 0, {
                subkey: "snapshot",
                identifier: g.serverIdentifier,
                serverName: g.serverName,
                snapshotEpoch: g.snapshotEpoch,
                snapshotRevision: g.snapshotRevision,
                status: g.status,
                toolCount: g.tools.length,
                resourceCount: g.resources.length,
                promptCount: g.prompts.length,
                hasInstructions: g.instructions !== void 0,
                generation: this._durableSnapshotGeneration
            });
        }
        if (i.length === 0) {
            const g = performance.now() - n, f = {
                mcp_version: "snapshots"
            };
            this.metricsService.distribution({
                stat: "mcp.snapshot.receive_duration_ms",
                value: g,
                tags: f
            }), this.metricsService.distribution({
                stat: "mcp.snapshot.receive_tool_count",
                value: 0,
                tags: f
            }), this.metricsService.increment({
                stat: "mcp.snapshot.receive_count",
                value: t.length,
                tags: f
            }), this.metricsService.increment({
                stat: "mcp.snapshot.receive_stale_count",
                value: r,
                tags: f
            });
            return;
        }
        const s = {}, o = {}, a = {}, l = {}, c = {};
        let u = 0;
        for (const g of i)s[g.serverIdentifier] = clg(g), o[g.serverIdentifier] = ffk(g), a[g.serverIdentifier] = g.prompts.map((f)=>({
                name: f.name,
                description: f.description ?? "",
                inputSchema: {}
            })), l[g.serverIdentifier] = vfk(g), g.instructions !== void 0 && (c[g.serverIdentifier] = g.instructions), u += g.tools.length;
        const d = this.statusCache();
        this.setToolsCache((g)=>({
                ...g,
                ...s
            })), this.setStatusCache((g)=>({
                ...g,
                ...o
            })), this.setPromptsCache((g)=>({
                ...g,
                ...a
            })), this.setResourcesCache((g)=>({
                ...g,
                ...l
            })), this.setInstructionsCache((g)=>{
            const f = {
                ...g,
                ...c
            };
            for (const _ of i)_.instructions === void 0 && delete f[_.serverIdentifier];
            return f;
        });
        for (const g of i){
            const f = o[g.serverIdentifier], _ = d[g.serverIdentifier];
            f && _?.type !== f.type && this._onDidChangeServerStatus.fire({
                identifier: g.serverIdentifier,
                status: f
            });
        }
        this._onDidChangeMcpSnapshots.fire(i.map((g)=>g.serverIdentifier));
        const h = performance.now() - n, p = {
            mcp_version: "snapshots"
        };
        this.metricsService.distribution({
            stat: "mcp.snapshot.receive_duration_ms",
            value: h,
            tags: p
        }), this.metricsService.distribution({
            stat: "mcp.snapshot.receive_tool_count",
            value: u,
            tags: p
        }), this.metricsService.increment({
            stat: "mcp.snapshot.receive_count",
            value: t.length,
            tags: p
        }), this.metricsService.increment({
            stat: "mcp.snapshot.receive_stale_count",
            value: r,
            tags: p
        });
    }
    receiveMcpFileSystemDescriptors(t) {
        this._mcpFileSystemDescriptors = Object.freeze(t);
    }
    receiveMcpWorkspaceProjectDir(t) {
        this._mcpWorkspaceProjectDir = t;
    }
    getMcpWorkspaceProjectDir() {
        return this._mcpWorkspaceProjectDir;
    }
    getMcpFileSystemDescriptors() {
        return this._mcpFileSystemDescriptors;
    }
    _getRawMcpSnapshots() {
        return Array.from(this._durableSnapshots.values());
    }
    getResolvedMcpSnapshots() {
        const t = this.allServers(), e = new Map(t.map((o)=>[
                o.identifier,
                o
            ])), n = this.statusCache(), i = this._getRawMcpSnapshots(), r = this._withSyntheticSnapshots(i, t, n), s = [];
        for (const o of r){
            const a = e.get(o.serverIdentifier) ?? this._synthesizeMissingBrowserProviderServer(o);
            a && (!this.isServerEnabled(a) && !this.isMcpProviderServer(a) || this.isMcpProviderServer(a) && this.shouldSkipBrowserServer(a) || s.push(this._resolveSnapshot(o, a, n)));
        }
        return s;
    }
    _synthesizeMissingBrowserProviderServer(t) {
        if (t.serverIdentifier === Dpe && this._durableSnapshots.has(t.serverIdentifier)) return {
            identifier: t.serverIdentifier,
            name: t.serverName,
            type: "streamableHttp",
            url: "mcp-provider://" + t.serverIdentifier,
            projectManaged: !1
        };
    }
    getResolvedMcpSnapshot(t) {
        const e = this.statusCache();
        let n = this._durableSnapshots.get(t);
        const i = this.allServers().find((r)=>r.identifier === t) ?? (n ? this._synthesizeMissingBrowserProviderServer(n) : void 0);
        if (!(!i || !this.isServerEnabled(i) && !this.isMcpProviderServer(i)) && !(this.isMcpProviderServer(i) && this.shouldSkipBrowserServer(i))) {
            if (!n) {
                const r = e[t];
                if (r?.type === "needsAuth" || r?.type === "error") n = this._makeSyntheticSnapshot(i, r);
                else return;
            }
            return this._resolveSnapshot(n, i, e);
        }
    }
    getResolvedMcpSnapshotTools() {
        const t = new Map(this.allServers().map((e)=>[
                e.identifier,
                e
            ]));
        return this.getResolvedMcpSnapshots().map((e)=>{
            const n = t.get(e.serverIdentifier) ?? this._synthesizeMissingBrowserProviderServer(e), i = n !== void 0 && this.isMcpProviderServer(n);
            return {
                serverIdentifier: e.serverIdentifier,
                serverName: e.serverName,
                plugin: e.plugin,
                marketplace: e.marketplace,
                pluginId: e.pluginId,
                marketplaceId: e.marketplaceId,
                ...i ? {
                    source: "internal"
                } : {},
                tools: e.tools
            };
        });
    }
    recordGetMcpToolsDiscoveryFreshness() {
        const t = this._lastObservedMetaMcpSnapshots;
        if (t === void 0 || t.length === 0) return;
        const e = new Map(this.getResolvedMcpSnapshots().map((n)=>[
                n.serverIdentifier,
                n
            ]));
        for (const n of t){
            const i = e.get(n.serverIdentifier);
            i !== void 0 && this._emitMcpDiscoveryFreshnessMetrics("meta_mcp", n.serverIdentifier, this._normalizeMetaMcpToolNames(i), this._normalizeMetaMcpToolNames(n));
        }
    }
    setMetaMcpFreshnessBaseline(t) {
        this._lastObservedMetaMcpSnapshots = t.map((e)=>({
                ...e,
                tools: e.tools.map((n)=>({
                        name: n.name,
                        description: n.description,
                        inputSchema: n.inputSchema,
                        outputSchema: n.outputSchema
                    })),
                resources: [],
                prompts: []
            }));
    }
    _normalizeMetaMcpToolNames(t) {
        return t ? t.tools.map((e)=>e.name).filter((e)=>e.length > 0).sort((e, n)=>e.localeCompare(n)) : [];
    }
    _emitMcpDiscoveryFreshnessMetrics(t, e, n, i) {
        const r = new Set(i), s = new Set(n), o = n.filter((u)=>!r.has(u)), a = i.filter((u)=>!s.has(u)), l = o.length === 0 && a.length === 0 ? "match" : "mismatch", c = {
            surface: t
        };
        this.metricsService.increment({
            stat: "mcp.discovery_freshness.check",
            value: 1,
            tags: {
                ...c,
                outcome: l
            }
        }), this.metricsService.distribution({
            stat: "mcp.discovery_freshness.missing_tools",
            value: o.length,
            tags: c
        }), this.metricsService.distribution({
            stat: "mcp.discovery_freshness.extra_tools",
            value: a.length,
            tags: c
        }), this.metricsService.distribution({
            stat: "mcp.discovery_freshness.symmetric_difference",
            value: o.length + a.length,
            tags: c
        });
    }
    _withSyntheticSnapshots(t, e, n) {
        const i = new Set(t.map((s)=>s.serverIdentifier)), r = [
            ...t
        ];
        for (const s of e){
            if (i.has(s.identifier)) continue;
            const o = n[s.identifier];
            (o?.type === "needsAuth" || o?.type === "error") && r.push(this._makeSyntheticSnapshot(s, o));
        }
        return r;
    }
    _makeSyntheticSnapshot(t, e) {
        return {
            serverIdentifier: t.identifier,
            serverName: t.name,
            plugin: t.pluginName,
            marketplace: t.marketplace,
            pluginId: t.pluginId,
            marketplaceId: t.marketplaceId,
            snapshotEpoch: 0,
            snapshotRevision: 0,
            status: e.type,
            statusDetail: this._mcpStatusDetail(e),
            statusRetryable: e.type === "error" ? e.isRetryable : void 0,
            tools: [],
            resources: [],
            prompts: [],
            instructions: void 0,
            snapshotGeneration: 0
        };
    }
    _buildProviderSnapshotPush(t, e, n) {
        const i = this._durableSnapshots.get(t.identifier), r = this.statusCache()[t.identifier];
        return {
            serverIdentifier: t.identifier,
            serverName: t.name,
            plugin: t.pluginName,
            marketplace: t.marketplace,
            pluginId: t.pluginId,
            marketplaceId: t.marketplaceId,
            snapshotEpoch: i?.snapshotEpoch ?? Date.now(),
            snapshotRevision: i?.snapshotRevision !== void 0 ? i.snapshotRevision + 1 : 1,
            status: r?.type ?? "connected",
            statusDetail: r ? this._mcpStatusDetail(r) : void 0,
            statusRetryable: r?.type === "error" ? r.isRetryable : void 0,
            tools: e.tools.map((s)=>({
                    name: s.name,
                    description: s.description,
                    inputSchema: ral(s.parameters),
                    outputSchema: s.outputSchema ? ral(s.outputSchema) : void 0,
                    _meta: s._meta
                })),
            resources: e.resources?.map((s)=>({
                    uri: s.uri,
                    name: s.name,
                    description: s.description,
                    mimeType: s.mimeType
                })) ?? [],
            prompts: e.prompts.map((s)=>({
                    name: s.name,
                    description: s.description,
                    arguments: Gfk(s.parameters)
                })),
            instructions: n
        };
    }
    _normalizeProviderSnapshot(t) {
        return {
            serverIdentifier: t.serverIdentifier,
            serverName: t.serverName,
            plugin: t.plugin,
            marketplace: t.marketplace,
            pluginId: t.pluginId,
            marketplaceId: t.marketplaceId,
            status: t.status,
            statusDetail: t.statusDetail,
            statusRetryable: t.statusRetryable,
            tools: t.tools.map((e)=>({
                    name: e.name,
                    description: e.description,
                    inputSchema: e.inputSchema,
                    outputSchema: e.outputSchema,
                    _meta: e._meta
                })).sort((e, n)=>e.name.localeCompare(n.name)),
            resources: t.resources.map((e)=>({
                    uri: e.uri,
                    name: e.name,
                    description: e.description,
                    mimeType: e.mimeType
                })).sort((e, n)=>e.uri.localeCompare(n.uri)),
            prompts: t.prompts.map((e)=>({
                    name: e.name,
                    description: e.description,
                    arguments: (e.arguments ?? []).map((n)=>({
                            name: n.name,
                            description: n.description,
                            required: n.required
                        })).sort((n, i)=>n.name.localeCompare(i.name))
                })).sort((e, n)=>e.name.localeCompare(n.name)),
            instructions: t.instructions
        };
    }
    _providerSnapshotMatches(t, e) {
        return Rp(this._normalizeProviderSnapshot(t), this._normalizeProviderSnapshot(e));
    }
    _maybeRefreshProviderSnapshot(t, e, n) {
        if (!this.isMcpProviderServer(t)) return;
        const i = this._buildProviderSnapshotPush(t, e, n), r = this._durableSnapshots.get(t.identifier);
        r && this._providerSnapshotMatches(r, i) || this.receiveMcpSnapshots([
            i
        ]);
    }
    _resolveSnapshot(t, e, n) {
        const i = n[t.serverIdentifier], r = i?.type ?? t.status, s = i ? this._mcpStatusDetail(i) ?? t.statusDetail : t.statusDetail, o = i?.type === "error" ? i.isRetryable : t.statusRetryable, a = this.makeToolDisabledChecker(e), l = t.tools.filter((c)=>!a(c.name, c.annotations));
        return {
            ...t,
            serverName: e.name,
            plugin: e.pluginName,
            marketplace: e.marketplace,
            pluginId: e.pluginId,
            marketplaceId: e.marketplaceId,
            tools: l,
            status: r,
            statusDetail: s,
            statusRetryable: o
        };
    }
    _getToolsFromDurableSnapshotLast(t) {
        const e = this._durableSnapshots.get(t.identifier);
        if (!e) return;
        const n = this.makeToolDisabledChecker(t);
        return clg(e).filter((i)=>!n(i.name, i.annotations));
    }
    _getToolsRawFromDurableSnapshot(t) {
        const e = this._durableSnapshots.get(t.identifier);
        if (!e) return;
        const n = this.makeToolDisabledChecker(t);
        return e.tools.filter((i)=>!n(i.name, i.annotations)).map((i)=>({
                name: i.name,
                description: i.description,
                inputSchema: i.inputSchema,
                outputSchema: i.outputSchema,
                annotations: i.annotations
            }));
    }
    _warnToolsInCacheMissingFromDurableSnapshot(t, e) {
        const n = this._durableSnapshots.get(t.identifier);
        if (!n || !e?.length) return;
        const i = this.makeToolDisabledChecker(t), r = new Set(n.tools.filter((s)=>!i(s.name, s.annotations)).map((s)=>s.name));
        for (const s of e)i(s.name, s.annotations) || r.has(s.name) || Dk(this.structuredLogService, "warn", `[MCPService] Tool "${s.name}" is in tools cache but not in durable snapshot for server ${t.identifier}`, void 0, {
            subkey: "snapshot",
            identifier: t.identifier,
            serverName: t.name,
            toolName: s.name
        });
    }
    _serverHasDurableSnapshotTools(t) {
        const e = this._durableSnapshots.get(t);
        return e !== void 0 && e.tools.length > 0;
    }
    _shouldSkipPassiveCreateForDurableSnapshot(t, e) {
        return e?.type === "degraded" || e?.type === "error" && e.isRetryable !== !1 ? !1 : t.type === "streamableHttp" && t.auth !== void 0 && this.shouldUseMcpProcessClient(t.identifier, t) && this._serverHasDurableSnapshotTools(t.identifier);
    }
    _shouldAttemptSnapshotRefreshForMcpStatus(t) {
        return !(!t || t.type === "needsAuth" || t.type === "error" && t.isRetryable === !1);
    }
    _serverInfoFromResolvedServer(t) {
        const e = t.type === "streamableHttp" && t.url ? this.ensureUrlHasProtocol(t.url) : t.url || "";
        return t.type === "stdio" ? {
            type: "stdio",
            command: t.command ?? "",
            args: t.args,
            env: t.env ?? {},
            cwd: t.cwd,
            projectPath: t.projectPath
        } : {
            type: "streamableHttp",
            serverUrl: e,
            headers: t.headers,
            auth: t.auth,
            ...t.placement !== void 0 ? {
                placement: t.placement
            } : {},
            projectPath: t.projectPath
        };
    }
    async _reloadClientWithResolvedServer(t, e, n = "user_requested") {
        const i = this.mcpClientProviders.get(t.identifier) ?? await this.getMcpClient(t.identifier, t.name, t), r = i instanceof NEi ? i.getUnderlyingClient() : i, s = this._serverInfoFromResolvedServer(e);
        try {
            return await r.reloadClient(s, n);
        } catch (o) {
            return O0(`[MCPService] Error reloading client (underlying) for ${t.identifier}:`, o), {
                success: !1,
                connected: !1,
                statusType: "error",
                error: o instanceof Error ? o.message : String(o)
            };
        }
    }
    async _ensureConnectedWithResolvedServer(t, e, n) {
        const i = this.mcpClientProviders.get(t.identifier) ?? await this.getMcpClient(t.identifier, t.name, t), r = i instanceof NEi ? i.getUnderlyingClient() : i, s = this._serverInfoFromResolvedServer(e);
        try {
            return bss(r) ? await r.ensureConnected(s, n) : await r.createClient(s);
        } catch (o) {
            return O0(`[MCPService] Error ensuring client (underlying) for ${t.identifier}:`, o), {
                success: !1,
                connected: !1,
                statusType: "error",
                error: o instanceof Error ? o.message : String(o)
            };
        }
    }
    _nextServerIncarnationId(t) {
        const e = (this.serverIncarnationIds.get(t) ?? 0) + 1;
        return this.serverIncarnationIds.set(t, e), e;
    }
    _clearSnapshotWatchdog(t, e) {
        this.snapshotWatchdogs.deleteAndDispose(t);
    }
    _clearAllSnapshotWatchdogs(t) {
        for (const e of Array.from(this.snapshotWatchdogs.keys()))this._clearSnapshotWatchdog(e, t);
    }
    _clearSnapshotWatchdogOnFreshSnapshot(t) {
        const e = this.snapshotWatchdogs.get(t.serverIdentifier);
        !e || t.snapshotGeneration <= e.baselineSnapshotGeneration || (this.metricsService.distribution({
            stat: "mcp.create_to_first_snapshot_ms",
            value: Date.now() - e.startedAtMs
        }), this._clearSnapshotWatchdog(t.serverIdentifier, "snapshot_received"));
    }
    _armSnapshotWatchdog(t, e) {
        if (this.isMcpProviderServer(t) || this._store.isDisposed) return;
        const n = this._nextServerIncarnationId(t.identifier), i = this._durableSnapshots.get(t.identifier)?.snapshotGeneration ?? 0, r = Date.now();
        this._clearSnapshotWatchdog(t.identifier, "replaced"), ((o, a)=>{
            const l = Ec(()=>{
                this._runSnapshotWatchdog(t.identifier, n, i, o);
            }, a, this._store);
            this.snapshotWatchdogs.set(t.identifier, new hal({
                timer: l,
                serverIncarnationId: n,
                baselineSnapshotGeneration: i,
                attempt: o,
                startedAtMs: r,
                reason: e
            }));
        })(0, Tie._SNAPSHOT_WATCHDOG_INITIAL_DELAY_MS);
    }
    _shouldSkipPassiveSnapshotRecovery(t, e) {
        return e.reason !== "reload" && e.baselineSnapshotGeneration > 0 && t.type === "streamableHttp" && t.auth !== void 0 && this.shouldUseMcpProcessClient(t.identifier, t);
    }
    async _requestSnapshotRefresh(t) {
        if (this.shouldUseMcpProcessClient(t.identifier, t)) {
            const e = await this.getMcpClient(t.identifier, t.name, t), n = e instanceof NEi ? e.getUnderlyingClient() : e;
            if (bss(n) && n.probeServer) {
                await n.probeServer("snapshot_recovery");
                return;
            }
        }
        if (!this.workbenchCommandRegistry.getCommand(wss)) {
            Dk(this.structuredLogService, "info", `[MCPService] Skipping snapshot refresh for ${t.identifier}: refresh command is not registered`, void 0, {
                subkey: "snapshot_watchdog",
                identifier: t.identifier,
                reconcileReason: "refresh_command_unregistered"
            });
            return;
        }
        await this.commandService.executeCommand(wss, {
            identifier: t.identifier
        });
    }
    async _runSnapshotWatchdog(t, e, n, i) {
        const r = this.snapshotWatchdogs.get(t);
        if (!r || r.serverIncarnationId !== e || r.attempt !== i) return;
        const s = this._durableSnapshots.get(t);
        if (s && s.snapshotGeneration > n) {
            this._clearSnapshotWatchdog(t, "snapshot_received");
            return;
        }
        const o = this.resolveEffectiveServers().find((l)=>l.identifier === t);
        if (!o) {
            this._clearSnapshotWatchdog(t, "server_missing");
            return;
        }
        const a = this.statusCache()[t];
        if (!this._shouldAttemptSnapshotRefreshForMcpStatus(a)) {
            this._clearSnapshotWatchdog(t, "server_not_ready");
            return;
        }
        if (this._shouldSkipPassiveSnapshotRecovery(o, r)) {
            Dk(this.structuredLogService, "info", `[MCPService] Snapshot watchdog preserving existing durable snapshot for ${t}`, void 0, {
                subkey: "snapshot_watchdog",
                identifier: t,
                serverIncarnationId: e,
                reconcileReason: r.reason,
                baselineSnapshotGeneration: n
            }), this._clearSnapshotWatchdog(t, "snapshot_not_required");
            return;
        }
        if (i === 0) {
            Dk(this.structuredLogService, "warn", `[MCPService] Snapshot watchdog retrying refresh for ${t}`, void 0, {
                subkey: "snapshot_watchdog",
                identifier: t,
                serverIncarnationId: e,
                reconcileReason: "missing_durable_snapshot",
                lastDeleteReason: this.lastDeleteReasons.get(t) ?? "none"
            });
            try {
                await this._requestSnapshotRefresh(o);
            } catch (u) {
                const d = u instanceof Error && u.message === `command '${wss}' not found`;
                Dk(this.structuredLogService, d ? "warn" : "error", `[MCPService] Snapshot watchdog failed to request refresh for ${t}`, u instanceof Error ? u : void 0, {
                    subkey: "snapshot_watchdog",
                    identifier: t,
                    serverIncarnationId: e,
                    reconcileReason: "missing_durable_snapshot",
                    lastDeleteReason: this.lastDeleteReasons.get(t) ?? "none"
                });
            }
            const l = this.snapshotWatchdogs.get(t);
            if (!l || l.serverIncarnationId !== e || l.attempt !== 0) return;
            const c = Ec(()=>{
                this._runSnapshotWatchdog(t, e, n, 1);
            }, Tie._SNAPSHOT_WATCHDOG_RETRY_DELAY_MS, this._store);
            this.snapshotWatchdogs.set(t, new hal({
                ...l,
                timer: c,
                attempt: 1
            }));
            return;
        }
        this.metricsService.increment({
            stat: "mcp.snapshot.watchdog_timed_out_without_snapshot"
        }), Dk(this.structuredLogService, "warn", `[MCPService] Snapshot watchdog timed out without a fresh snapshot for ${t}`, void 0, {
            subkey: "snapshot_watchdog",
            identifier: t,
            serverIncarnationId: e,
            reconcileReason: "missing_durable_snapshot",
            lastDeleteReason: this.lastDeleteReasons.get(t) ?? "none"
        }), this._clearSnapshotWatchdog(t, "attempts_exhausted");
    }
    async _reconcileMissingDurableSnapshots(t) {
        const e = this.getServers().filter((n)=>{
            if (this.isMcpProviderServer(n) || !this.isServerEnabled(n)) return !1;
            const i = this.statusCache()[n.identifier];
            return this._shouldAttemptSnapshotRefreshForMcpStatus(i) ? !this._durableSnapshots.has(n.identifier) : !1;
        });
        e.length !== 0 && (Dk(this.structuredLogService, "info", "[MCPService] Reconciling servers missing durable snapshots", void 0, {
            subkey: "snapshot_reconcile",
            reconcileReason: t,
            serverCount: e.length
        }), await Promise.allSettled(e.map(async (n)=>{
            this.snapshotWatchdogs.has(n.identifier) || this._armSnapshotWatchdog(n, "reconcile_sweep"), Dk(this.structuredLogService, "info", `[MCPService] Requesting snapshot refresh for ${n.identifier} from reconcile sweep`, void 0, {
                subkey: "snapshot_reconcile",
                identifier: n.identifier,
                serverName: n.name,
                reconcileReason: t,
                lastDeleteReason: this.lastDeleteReasons.get(n.identifier) ?? "none"
            }), await this._requestSnapshotRefresh(n);
        })));
    }
    _mcpStatusDetail(t) {
        switch(t.type){
            case "needsAuth":
                return t.authorizationUrl;
            case "error":
                return t.error;
            case "degraded":
                return t.reason;
            case "connected":
            case "disconnected":
            case "initializing":
                return;
            default:
                return t;
        }
    }
    isMcpInfoComplete() {
        return this._hasReceivedAnySnapshots;
    }
    drainWindowedCounters() {
        const t = {
            mcpVersion: "snapshots",
            ...this._windowedCounters
        };
        return this._windowedCounters = Tie._freshWindowedCounters(), t;
    }
    ensureUrlHasProtocol(t) {
        let e = t;
        t.match(/^[a-z]{1,8}:\/\//) || (Tu(`[MCPService] Adding http:// protocol to URL: ${t}`), e = `http://${t}`);
        try {
            const n = new URL(e);
            if (n.protocol === "http:" && Tie.GOOGLE_WORKSPACE_MCP_HOSTS.has(n.hostname.toLowerCase())) return Tu(`[MCPService] Upgrading https-only MCP host to https: ${n.hostname}`), n.protocol = "https:", n.toString();
        } catch  {}
        return e;
    }
    async resolveDefaultAuth(t, e) {
        let n;
        try {
            n = new URL(t);
        } catch  {
            return e;
        }
        if (Tie.GOOGLE_WORKSPACE_MCP_HOSTS.has(n.hostname)) {
            if (n.protocol === "https:" && Hol(e?.CLIENT_ID) === void 0) {
                const i = this.aiServerConfigService.cachedServerConfig.googleWorkspaceMcpOauthClient;
                if (i !== void 0 && i.clientId.length > 0) {
                    const r = wky(n.hostname)?.scopes, s = {
                        ...e ?? {},
                        CLIENT_ID: i.clientId,
                        ...(e?.scopes === void 0 || e.scopes.length === 0) && r !== void 0 ? {
                            scopes: [
                                ...r
                            ]
                        } : {}
                    };
                    return i.clientSecret.length > 0 ? s.CLIENT_SECRET = i.clientSecret : delete s.CLIENT_SECRET, s;
                }
            }
            return e;
        }
        return ufk(t, e, this.defaultAuthResolver);
    }
    async reloadClient(t, e = "user_requested") {
        Tu(`[MCPService] Reloading client for server ${t}`);
        try {
            const n = this.resolveEffectiveServers().find((s)=>s.identifier === t);
            if (!n) throw new Error("Server not found");
            if (this.refuseUserDisabledServer(n, "reload")) return {
                success: !1,
                connected: !1,
                statusType: "disconnected",
                error: "Server is disabled"
            };
            this._armSnapshotWatchdog(n, "reload"), await this.refreshHostedMcpPlacementForReload(n);
            const i = await this.resolveServerVariables(n), r = this.getResolvedServerBlockMessage(i);
            return r ? (this._logAllowlist("warn", `[MCPService] Blocking MCP reload for ${t}: ${r}`, {
                identifier: t,
                serverName: n.name,
                serverUrl: i.url
            }), this.updateServerStatus(t, {
                type: "error",
                error: r
            }), {
                success: !1,
                connected: !1,
                statusType: "error",
                error: r
            }) : await this._reloadClientWithResolvedServer(n, i, e);
        } catch (n) {
            O0(`[MCPService] Error reloading client for server ${t}:`, n);
            return;
        }
    }
    _mergeRefreshServerIds(t, e) {
        if (t === "all") return t;
        if (!e || e.length === 0) return "all";
        const n = new Set(t ?? []);
        for (const i of e)n.add(i);
        return n;
    }
    _refreshScopeSummary(t) {
        if (!t || t.length === 0) return "all";
        const e = Array.from(new Set(t)), n = e.slice(0, 5).join(",");
        return e.length > 5 ? `${n},...(${e.length} total)` : n;
    }
    _isServerRefreshable(t) {
        if (t.type === "stdio" && !t.command) return Cle(`[MCPService] Missing command for stdio server ${t.identifier}`), !1;
        const e = this.isServerEnabled(t), n = this.isMcpProviderServer(t);
        return !e && !n ? (Tu(`[MCPService] Skipping disabled server ${t.identifier} during refreshCaches`), !1) : !(this.isMcpSharedProcessTransportEnabled() && this.shouldUseMcpProcessClient(t.identifier, t));
    }
    _getServersToRefresh(t) {
        const e = this.getServers();
        return (!t || t.length === 0 ? e : e.filter((i)=>t.includes(i.identifier))).filter((i)=>this._isServerRefreshable(i));
    }
    _applyRefreshResultForServer(t, e, n) {
        const i = this._getEffectiveOfferingsForRefreshResult(t.identifier, e, n);
        if (i !== e) return this.logMcpFile("info", `[MCPService] Preserving prior offerings for ${t.identifier} during transient degraded refresh`), {
            offerings: i,
            tools: n.previousTools[t.identifier] ?? [],
            prompts: n.previousPrompts[t.identifier],
            resources: n.previousResources[t.identifier]
        };
        const r = {
            type: "object",
            properties: {}
        }, s = ({ raw: c, fallback: u, serverIdentifier: d, entityType: h, entityName: p, fieldName: g })=>{
            if (!c) return u;
            try {
                const f = JSON.parse(c);
                if (f && typeof f == "object") return f;
                const _ = `[MCPService] Non-object ${h}.${g} for ${d}/${p}; using fallback`;
                return this.logMcpFile("warn", _), Cle(_), u;
            } catch (f) {
                const _ = `[MCPService] Failed to parse ${h}.${g} for ${d}/${p}; using fallback`;
                return this.logMcpFile("warn", _, f), Cle(_, f), u;
            }
        }, o = e.tools.map((c)=>({
                name: c.name,
                originalName: c.originalName,
                description: c.description,
                inputSchema: s({
                    raw: c.parameters,
                    fallback: r,
                    serverIdentifier: t.identifier,
                    entityType: "tool",
                    entityName: c.name,
                    fieldName: "parameters"
                }),
                outputSchema: c.outputSchema ? s({
                    raw: c.outputSchema,
                    fallback: r,
                    serverIdentifier: t.identifier,
                    entityType: "tool",
                    entityName: c.name,
                    fieldName: "outputSchema"
                }) : void 0,
                title: c.title,
                meta: c._meta
            }));
        Tu(`[MCPService] Found ${o.length} tools on server ${t.identifier}`);
        const a = e.prompts.length > 0 ? e.prompts.map((c)=>({
                name: c.name,
                description: c.description,
                inputSchema: s({
                    raw: c.parameters,
                    fallback: r,
                    serverIdentifier: t.identifier,
                    entityType: "prompt",
                    entityName: c.name,
                    fieldName: "parameters"
                })
            })) : void 0;
        a !== void 0 && Tu(`[MCPService] Found ${a.length} prompts on server ${t.identifier}`);
        const l = e.resources && e.resources.length > 0 ? e.resources.map((c)=>({
                uri: c.uri,
                name: c.name,
                description: c.description,
                mimeType: c.mimeType,
                annotations: c.annotations
            })) : void 0;
        return l !== void 0 && Tu(`[MCPService] Found ${l.length} resources on server ${t.identifier}`), {
            offerings: i,
            tools: o,
            prompts: a,
            resources: l
        };
    }
    async _refreshSingleServerCache(t, e) {
        var n = [];
        try {
            const s = nAn(n, SS(Xp().withName("mcp.refreshSingleServerCache")));
            s.span.setAttribute("mcp.ipc.connection_type", this.environmentService.remoteAuthority ? "remote" : "local"), s.span.setAttribute("mcp.ipc.server_identifier", t);
            const o = performance.now(), a = (e ?? this.getServers()).find((b)=>b.identifier === t);
            if (!a || !this._isServerRefreshable(a)) return;
            const l = this.toolsCache(), c = this.promptsCache(), u = this.resourcesCache(), d = this.instructionsCache();
            let h;
            try {
                if (h = await this._listOfferingsForServer(a.identifier, a), h && this._isAbortedOfferingsRefreshResult(h)) this.metricsService.increment({
                    stat: "mcp.offering_fetch",
                    tags: {
                        version: "v1",
                        result: "aborted"
                    }
                });
                else if (h && this._isAuthoritativeOfferingsRefreshResult(h)) {
                    const b = this.statusCache()[a.identifier], y = (h.tools?.length ?? 0) > 0 || (h.prompts?.length ?? 0) > 0 || (h.resources?.length ?? 0) > 0;
                    this._shouldMutateStatusDuringRefreshCaches(a) && (b?.type === "error" || b?.type === "needsAuth") && y && (Tu(`[MCPService] Server ${a.identifier} was in '${b.type}' but listOfferings succeeded with results, recovering to 'connected'`), this.updateServerStatus(a.identifier, {
                        type: "connected"
                    })), this.metricsService.increment({
                        stat: "mcp.offering_fetch",
                        tags: {
                            version: "v1",
                            result: "success"
                        }
                    });
                } else this.metricsService.increment({
                    stat: "mcp.offering_fetch",
                    tags: {
                        version: "v1",
                        result: "success"
                    }
                });
            } catch (b) {
                const y = b instanceof Error ? b.message : String(b);
                if (Rlg(b)) {
                    Tu(`[MCPService] Metadata refresh aborted for server ${a.identifier}; preserving prior status and offerings`), this.metricsService.increment({
                        stat: "mcp.offering_fetch",
                        tags: {
                            version: "v1",
                            result: "aborted"
                        }
                    });
                    return;
                }
                O0(`[MCPService] Error refreshing caches for server ${a.identifier}:`, y), this.metricsService.increment({
                    stat: "mcp.offering_fetch",
                    tags: {
                        version: "v1",
                        result: "error"
                    }
                }), this._shouldMutateStatusDuringRefreshCaches(a) && this.updateServerStatus(a.identifier, {
                    type: "error",
                    error: y
                });
                return;
            }
            if (!h) return;
            if (this._isAbortedOfferingsRefreshResult(h)) {
                this.logMcpFile("info", `[MCPService] Ignoring aborted metadata refresh for ${a.identifier}; preserving prior status and offerings`);
                return;
            }
            const p = this._applyRefreshResultForServer(a, h, {
                previousTools: l,
                previousPrompts: c,
                previousResources: u
            }), g = {
                [a.identifier]: p.offerings
            };
            this.setToolsCache((b)=>({
                    ...b,
                    [a.identifier]: p.tools
                })), this.setPromptsCache((b)=>{
                const y = {
                    ...b
                };
                return p.prompts === void 0 ? delete y[a.identifier] : y[a.identifier] = p.prompts, y;
            }), this.setResourcesCache((b)=>{
                const y = {
                    ...b
                };
                return p.resources === void 0 ? delete y[a.identifier] : y[a.identifier] = p.resources, y;
            }), this.mcpWellKnownDetectionService.preResolveServerIcons([
                a
            ]);
            let f = d[a.identifier];
            try {
                f = (await this.getInstructionsForWriting([
                    a
                ])).find((y)=>y.serverIdentifier === a.identifier)?.instructions, this.metricsService.increment({
                    stat: "mcp.instructions_fetch",
                    tags: {
                        version: "v1",
                        result: "success"
                    }
                });
            } catch (b) {
                this.metricsService.increment({
                    stat: "mcp.instructions_fetch",
                    tags: {
                        version: "v1",
                        result: "error"
                    }
                }), this.logMcpFile("warn", "getInstructionsForWriting failed (continuing with previous instructions):", b), O0("[MCPService] Error fetching instructions for MCP index files:", b);
            }
            this.setInstructionsCache((b)=>{
                const y = {
                    ...b
                };
                return f === void 0 || f.length === 0 ? delete y[a.identifier] : y[a.identifier] = f, y;
            }), this._maybeRefreshProviderSnapshot(a, p.offerings, f);
            const _ = performance.now() - o;
            s.span.setAttribute("mcp.ipc.duration_ms", String(_)), s.span.setAttribute("mcp.ipc.server_count", "1"), this.metricsService.distribution({
                stat: "mcp.ipc.duration_ms",
                value: _,
                tags: {
                    name: "refresh_caches",
                    outcome: "success",
                    server_count: "1"
                }
            }), this.metricsService.increment({
                stat: "mcp.ipc.count",
                tags: {
                    name: "refresh_caches",
                    outcome: "success"
                }
            });
        } catch (s) {
            var i = s, r = !0;
        } finally{
            iAn(n, i, r);
        }
    }
    async refreshMcpProviderCaches() {
        const t = this.getServers().filter((e)=>this.isMcpProviderServer(e) && this._isServerRefreshable(e)).map((e)=>e.identifier);
        t.length !== 0 && await this.refreshCaches({
            serverIdentifiers: t
        });
    }
    async refreshCaches(t) {
        if (this.refreshCachesPromise) return this.pendingRefreshServerIds = this._mergeRefreshServerIds(this.pendingRefreshServerIds, t?.serverIdentifiers), Tu(`[MCPService] Refresh already in progress, queuing for follow-up refresh (scope=${this.pendingRefreshServerIds === "all" || this.pendingRefreshServerIds === void 0 ? "all" : this._refreshScopeSummary(Array.from(this.pendingRefreshServerIds))})`), this._shouldEmitCoalesceMetrics && this.metricsService.increment({
            stat: "mcp.refresh_caches",
            tags: {
                result: "coalesced"
            }
        }), new Promise((e)=>{
            this.pendingRefreshResolvers.push(e);
        });
        {
            const e = t?.force ?? !1;
            if (this._shouldEmitCoalesceMetrics && this.metricsService.increment({
                stat: "mcp.refresh_caches",
                tags: {
                    result: "executed",
                    force: e ? "true" : "false"
                }
            }), t?.serverIdentifiers && t.serverIdentifiers.length > 0) {
                const n = this.getServers();
                this.refreshCachesPromise = Promise.all(Array.from(new Set(t.serverIdentifiers)).map((i)=>this._refreshSingleServerCache(i, n))).then(()=>{});
            } else this.refreshCachesPromise = this._doRefreshCaches();
            try {
                await this.refreshCachesPromise, this.metricsService.increment({
                    stat: "mcp.settings_changed_fired"
                }), this._onSettingsChanged.fire();
            } finally{
                if (this.refreshCachesPromise = void 0, this.pendingRefreshResolvers.length > 0) {
                    const n = this.pendingRefreshServerIds;
                    Tu(`[MCPService] Refresh was requested during refresh, running again to pick up changes (scope=${n === "all" || n === void 0 ? "all" : this._refreshScopeSummary(Array.from(n))})`);
                    const i = this.pendingRefreshResolvers;
                    this.pendingRefreshResolvers = [], this.pendingRefreshServerIds = void 0, this.refreshCaches({
                        force: !0,
                        serverIdentifiers: n === "all" || n === void 0 ? void 0 : Array.from(n)
                    }).then(()=>{
                        for (const r of i)r();
                    }).catch((r)=>{
                        O0("[MCPService] Error during follow-up refresh:", r);
                        for (const s of i)s();
                    });
                }
            }
        }
    }
    async _listOfferingsForServer(t, e) {
        var n = [];
        try {
            const s = nAn(n, SS(Xp().withName("mcp.listOfferingsForServer")));
            return s.span.setAttribute("mcp.ipc.connection_type", this.environmentService.remoteAuthority ? "remote" : "local"), s.span.setAttribute("mcp.ipc.server_identifier", t), this.metricsService.increment({
                stat: "mcp.list_offerings_call",
                tags: {
                    version: "v1"
                }
            }), await ial(s.span, "list_offerings", this.metricsService, async ()=>(await this.getMcpClient(t, void 0, e)).listOfferings());
        } catch (s) {
            var i = s, r = !0;
        } finally{
            iAn(n, i, r);
        }
    }
    async refreshPluginServersAndWait() {
        await this.refreshPluginServers("refresh_plugin_servers_and_wait"), await this.initializeServers("refresh_plugin_servers_and_wait");
    }
    _shouldPreservePriorOfferingsForRefreshResult(t, e, n) {
        if (e.refreshState !== "transient_degraded") return !1;
        const { previousTools: i, previousPrompts: r, previousResources: s } = n;
        return (i[t]?.length ?? 0) > 0 || (r[t]?.length ?? 0) > 0 || (s[t]?.length ?? 0) > 0 ? !(e.tools.length > 0 || e.prompts.length > 0 || (e.resources?.length ?? 0) > 0) : !1;
    }
    _isAuthoritativeOfferingsRefreshResult(t) {
        return t.refreshState !== "transient_degraded" && t.refreshState !== "aborted";
    }
    _isAbortedOfferingsRefreshResult(t) {
        return t.refreshState === "aborted";
    }
    _getEffectiveOfferingsForRefreshResult(t, e, n) {
        if (!this._shouldPreservePriorOfferingsForRefreshResult(t, e, n)) return e;
        const { previousTools: i, previousPrompts: r, previousResources: s } = n;
        return {
            tools: (i[t] ?? []).map((o)=>({
                    name: o.name,
                    description: o.description,
                    parameters: JSON.stringify(o.inputSchema),
                    ...o.outputSchema ? {
                        outputSchema: JSON.stringify(o.outputSchema)
                    } : {},
                    ...o.originalName !== void 0 ? {
                        originalName: o.originalName
                    } : {},
                    ...o.meta !== void 0 ? {
                        _meta: o.meta
                    } : {}
                })),
            prompts: (r[t] ?? []).map((o)=>({
                    name: o.name,
                    description: o.description,
                    parameters: JSON.stringify(o.inputSchema)
                })),
            resources: s[t]?.map((o)=>({
                    uri: o.uri,
                    name: o.name,
                    description: o.description,
                    mimeType: o.mimeType,
                    annotations: o.annotations
                })),
            refreshState: e.refreshState
        };
    }
    async _doRefreshCaches() {
        var t = [];
        try {
            const i = nAn(t, SS(Xp().withName("mcp.refreshCaches")));
            i.span.setAttribute("mcp.ipc.connection_type", this.environmentService.remoteAuthority ? "remote" : "local");
            const r = performance.now();
            Tu("[MCPService] Refreshing tools");
            const s = this.getServers(), o = this.toolsCache(), a = this.promptsCache(), l = this.resourcesCache(), c = this.instructionsCache(), u = new Set, d = this._getServersToRefresh();
            if (d.length === 0) return;
            Tu(`[MCPService] Refreshing caches for ${d.length} servers in parallel`);
            const h = d.map(async (C)=>{
                try {
                    const T = await this._listOfferingsForServer(C.identifier, C);
                    if (T && this._isAbortedOfferingsRefreshResult(T)) return this.metricsService.increment({
                        stat: "mcp.offering_fetch",
                        tags: {
                            version: "v1",
                            result: "aborted"
                        }
                    }), {
                        server: C,
                        result: T,
                        error: null
                    };
                    if (T && this._isAuthoritativeOfferingsRefreshResult(T)) {
                        const I = this.statusCache()[C.identifier], A = (T.tools?.length ?? 0) > 0 || (T.prompts?.length ?? 0) > 0 || (T.resources?.length ?? 0) > 0;
                        this._shouldMutateStatusDuringRefreshCaches(C) && (I?.type === "error" || I?.type === "needsAuth") && A && (Tu(`[MCPService] Server ${C.identifier} was in '${I.type}' but listOfferings succeeded with results, recovering to 'connected'`), this.updateServerStatus(C.identifier, {
                            type: "connected"
                        }));
                    }
                    return this.metricsService.increment({
                        stat: "mcp.offering_fetch",
                        tags: {
                            version: "v1",
                            result: "success"
                        }
                    }), {
                        server: C,
                        result: T,
                        error: null
                    };
                } catch (T) {
                    const I = T instanceof Error ? T.message : String(T);
                    return Rlg(T) ? (Tu(`[MCPService] Metadata refresh aborted for server ${C.identifier}; preserving prior status and offerings`), this.metricsService.increment({
                        stat: "mcp.offering_fetch",
                        tags: {
                            version: "v1",
                            result: "aborted"
                        }
                    }), u.add(C.identifier), {
                        server: C,
                        result: null,
                        error: T
                    }) : (O0(`[MCPService] Error refreshing caches for server ${C.identifier}:`, I), this.metricsService.increment({
                        stat: "mcp.offering_fetch",
                        tags: {
                            version: "v1",
                            result: "error"
                        }
                    }), this._shouldMutateStatusDuringRefreshCaches(C) && this.updateServerStatus(C.identifier, {
                        type: "error",
                        error: I
                    }), {
                        server: C,
                        result: null,
                        error: T
                    });
                }
            }), p = await Promise.allSettled(h), g = {}, f = {}, _ = {}, b = {};
            for (const C of p){
                if (C.status === "rejected") continue;
                const { server: T, result: I } = C.value;
                if (!I) continue;
                if (this._isAbortedOfferingsRefreshResult(I)) {
                    this.logMcpFile("info", `[MCPService] Ignoring aborted metadata refresh for ${T.identifier}; preserving prior status and offerings`), u.add(T.identifier);
                    continue;
                }
                const A = this._applyRefreshResultForServer(T, I, {
                    previousTools: o,
                    previousPrompts: a,
                    previousResources: l
                });
                b[T.identifier] = A.offerings, g[T.identifier] = A.tools, A.prompts !== void 0 && (f[T.identifier] = A.prompts), A.resources !== void 0 && (_[T.identifier] = A.resources);
            }
            for (const C of u)o[C] !== void 0 && (g[C] = o[C]), a[C] !== void 0 && (f[C] = a[C]), l[C] !== void 0 && (_[C] = l[C]);
            this.setToolsCache({
                ...o,
                ...g
            }), this.setPromptsCache({
                ...a,
                ...f
            }), this.setResourcesCache({
                ...l,
                ..._
            }), this.mcpWellKnownDetectionService.preResolveServerIcons(s);
            const y = {};
            for (const C of u){
                const T = c[C];
                T !== void 0 && (y[C] = T);
            }
            const S = d.filter((C)=>!u.has(C.identifier));
            try {
                const C = S.length > 0 ? await this.getInstructionsForWriting(S) : [];
                for (const T of C)y[T.serverIdentifier] = T.instructions;
                this.metricsService.increment({
                    stat: "mcp.instructions_fetch",
                    tags: {
                        version: "v1",
                        result: "success"
                    }
                });
            } catch (C) {
                this.metricsService.increment({
                    stat: "mcp.instructions_fetch",
                    tags: {
                        version: "v1",
                        result: "error"
                    }
                }), this.logMcpFile("warn", "getInstructionsForWriting failed (continuing with empty instructions):", C), O0("[MCPService] Error fetching instructions for MCP index files:", C);
            }
            this.setInstructionsCache({
                ...c,
                ...y
            });
            for (const C of d){
                const T = b[C.identifier];
                T && this._maybeRefreshProviderSnapshot(C, T, y[C.identifier]);
            }
            const k = performance.now() - r;
            i.span.setAttribute("mcp.ipc.duration_ms", String(k)), i.span.setAttribute("mcp.ipc.server_count", String(d.length)), this.metricsService.distribution({
                stat: "mcp.ipc.duration_ms",
                value: k,
                tags: {
                    name: "refresh_caches",
                    outcome: "success",
                    server_count: String(d.length)
                }
            }), this.metricsService.increment({
                stat: "mcp.ipc.count",
                tags: {
                    name: "refresh_caches",
                    outcome: "success"
                }
            });
        } catch (i) {
            var e = i, n = !0;
        } finally{
            iAn(t, e, n);
        }
    }
    async statusOfServer(t) {
        const e = this.getServerBlockMessage(t);
        return e !== void 0 ? {
            type: "error",
            error: e
        } : this.isMcpProviderServer(t) ? {
            type: "connected"
        } : this.statusCache()[t.identifier] || {
            type: "disconnected"
        };
    }
    async getAvailableTools() {
        Tu("[MCPService] Getting available tools");
        const t = {}, e = this.toolsCache(), n = (r, s)=>{
            const o = e[r];
            if (!o?.length) return;
            const a = this.makeToolDisabledChecker(s);
            t[r] = o.filter((l)=>!a(l.name, l.annotations));
        }, i = this.getServers();
        for (const r of i){
            if (this.getServerBlockMessage(r) !== void 0) {
                Tu(`[MCPService] Skipping blocked server ${r.identifier}`);
                continue;
            }
            if (!r || !this.isServerEnabled(r) && !this.isMcpProviderServer(r)) {
                Tu(`[MCPService] Skipping disabled server ${r.identifier}`);
                continue;
            }
            if (this.isMcpProviderServer(r) && this.shouldSkipBrowserServer(r)) {
                Tu(`[MCPService] Skipping browser server ${r.identifier} during getAvailableTools`);
                continue;
            }
            const s = this._getToolsFromDurableSnapshotLast(r);
            if (s !== void 0) {
                this._warnToolsInCacheMissingFromDurableSnapshot(r, e[r.identifier]);
                const o = this.makeToolDisabledChecker(r);
                t[r.identifier] = s.filter((a)=>!o(a.name, a.annotations));
                continue;
            }
            n(r.identifier, r);
        }
        return Tu("[MCPService] Available tools:", Object.values(t).flat().map((r)=>r.name)), t;
    }
    async getToolsForComposer(t, e) {
        Tu("[MCPService] Getting tools for composer");
        const n = Date.now(), i = await this.getAvailableTools(), r = [], s = (c)=>{
            const u = c.meta?.ui?.visibility;
            return !u || u.length === 0 || u.includes("model");
        }, o = (c)=>{
            if (!t || t === "agent" || t === "plan") return !0;
            if (t === "chat" || t === "edit") return !1;
            const u = this.composerModesService.getMode(t);
            return u ? u?.enabledMcpServers.includes(c) : !0;
        }, a = e?.browserIntegrationPreference ?? this.reactiveStorageService.applicationUserPersistentStorage.lastBrowserConnectionMode, l = Vqe(a);
        for(const c in i){
            const u = this.getServers().find((f)=>f.identifier === c);
            if (!u || !o(c)) continue;
            const d = i[c].filter(s), h = u.name;
            if (l === "none" && h === dqt) continue;
            const g = this.isMcpProviderServer(u);
            r.push(...d.map((f)=>({
                    name: f.name,
                    description: f.description,
                    parameters: JSON.stringify(f.inputSchema),
                    serverName: nzt(h),
                    ...g && f.meta?.transcriptDisplay ? {
                        transcriptDisplay: f.meta.transcriptDisplay
                    } : {}
                })));
        }
        return this._emitDiscoveryMetrics(Date.now() - n, r.length), r;
    }
    async getInstructionsForComposer(t, e) {
        return this._fetchInstructionsForComposer(t, e);
    }
    async _fetchInstructionsForServerById(t) {
        let e;
        try {
            e = await this.everythingProviderService.waitForCommandEverythingProvider(0, RP.CreateClient);
        } catch  {
            return "";
        }
        if (!e) return "";
        const n = new AbortController;
        return ((await Kzt(()=>e.runCommand(RP.GetInstructions, {
                identifier: t
            }, n.signal), this._getMcpIpcTimeouts().metadataTimeoutMs, `mcp.runCommand.${RP.GetInstructions}`, n))?.instructions ?? "").trim();
    }
    async _getInstructionsForServer(t, e) {
        if (this.isMcpProviderServer(t)) return this.mcpProviderService.getMcpProvider(t.identifier)?.instructions?.trim();
        if (this.statusCache()[t.identifier]?.type === "connected") {
            if (this.metricsService.increment({
                stat: "mcp.get_instructions"
            }), e) {
                const i = new AbortController;
                return ((await Kzt(()=>e.runCommand(RP.GetInstructions, {
                        identifier: t.identifier
                    }, i.signal), this._getMcpIpcTimeouts().metadataTimeoutMs, `mcp.runCommand.${RP.GetInstructions}`, i))?.instructions ?? "").trim();
            }
            return this._fetchInstructionsForServerById(t.identifier);
        }
    }
    async _fetchInstructionsForComposer(t, e) {
        Tu("[MCPService] Getting instructions for composer");
        const n = this.getServers();
        let i;
        try {
            i = await this.everythingProviderService.waitForCommandEverythingProvider(0, RP.CreateClient);
        } catch  {
            return Tu("[MCPService] Everything provider not ready yet, returning empty instructions"), [];
        }
        if (!i) return Cle("[MCPService] No everything provider available to fetch instructions"), [];
        const r = (l)=>{
            if (!t || t === "agent" || t === "plan") return !0;
            if (t === "chat" || t === "edit") return !1;
            const c = this.composerModesService.getMode(t);
            return c ? c?.enabledMcpServers.includes(l) : !0;
        }, s = e?.browserIntegrationPreference ?? this.reactiveStorageService.applicationUserPersistentStorage.lastBrowserConnectionMode, o = Vqe(s), a = [];
        for (const l of n){
            if (!this.isServerEnabled(l) && !this.isMcpProviderServer(l) || !r(l.identifier)) continue;
            const c = l.name, u = l.identifier;
            if (!(o === "none" && c === dqt)) try {
                const d = await this._getInstructionsForServer(l, i);
                d && d.length > 0 && a.push({
                    serverName: c,
                    serverIdentifier: u,
                    instructions: d
                });
            } catch (d) {
                Cle(`[MCPService] Error getting instructions for server ${l.identifier}:`, d);
            }
        }
        return a;
    }
    async getInstructionsForWriting(t) {
        let e;
        try {
            e = await this.everythingProviderService.waitForCommandEverythingProvider(0, RP.CreateClient);
        } catch  {
            return [];
        }
        if (!e) return [];
        const n = [];
        for (const i of t){
            if (!this.isServerEnabled(i) && !this.isMcpProviderServer(i) || this.isMcpProviderServer(i) && this.shouldSkipBrowserServer(i)) continue;
            const r = i.identifier;
            try {
                const s = await this._getInstructionsForServer(i, e);
                s && s.length > 0 && n.push({
                    serverIdentifier: r,
                    instructions: s
                });
            } catch (s) {
                Cle(`[MCPService] Error getting instructions for server ${i.identifier}:`, s);
            }
        }
        return n;
    }
    _snapshotContainsTool(t, e) {
        return t?.tools.some((n)=>n.name === e) ?? !1;
    }
    _getLogicalToolFailure(t) {
        if (!t || typeof t != "object" || !("isError" in t) || t.isError !== !0) return {
            isLogicalError: !1
        };
        let e;
        if ("content" in t && Array.isArray(t.content)) {
            const n = [];
            for (const i of t.content)!i || typeof i != "object" || "type" in i && i.type === "text" && "text" in i && typeof i.text == "string" && n.push(i.text);
            n.length > 0 && (e = n.join(`
`).slice(0, 1e3));
        }
        return {
            isLogicalError: !0,
            logicalErrorMessage: e
        };
    }
    _summarizeServerIdentifiers(t) {
        const e = Array.from(new Set(t));
        if (e.length === 0) return;
        const n = e.slice(0, 5).join(",");
        return e.length > 5 ? `${n},...(${e.length} total)` : n;
    }
    _getToolCallFailureContextMetadata(t) {
        try {
            const e = this.getServers(), n = t.server ?? (t.requestedServerIdentifier ? e.find((u)=>u.identifier === t.requestedServerIdentifier) : void 0), i = n ? this.statusCache()[n.identifier] : t.requestedServerIdentifier ? this.statusCache()[t.requestedServerIdentifier] : void 0, r = n ? this._durableSnapshots.get(n.identifier) : void 0, s = n ? this.getResolvedMcpSnapshot(n.identifier) : void 0, o = Object.entries(this.toolsCache()).filter(([, u])=>u.some((d)=>d.name === t.toolName)).map(([u])=>u), a = Array.from(this._durableSnapshots.values()).filter((u)=>this._snapshotContainsTool(u, t.toolName)).map((u)=>u.serverIdentifier), l = this.getResolvedMcpSnapshots().filter((u)=>this._snapshotContainsTool(u, t.toolName)).map((u)=>u.serverIdentifier), c = {
                failureKind: t.failureKind,
                toolName: t.toolName,
                toolCallId: t.toolCallId,
                requestedServerIdentifier: t.requestedServerIdentifier,
                logicalErrorMessage: t.logicalErrorMessage,
                snapshotPushEnabled: !0,
                toolCallConnectionType: this.environmentService.remoteAuthority ? "remote_ssh" : "local",
                hasRemoteAuthority: !!this.environmentService.remoteAuthority,
                browserConnectionMode: Vqe(this.reactiveStorageService.applicationUserPersistentStorage.lastBrowserConnectionMode),
                registeredServerCount: e.length,
                enabledServerCount: e.filter((u)=>this.isServerEnabled(u)).length,
                matchingToolsCacheServerCount: o.length,
                matchingRawSnapshotServerCount: a.length,
                matchingResolvedSnapshotServerCount: l.length,
                matchingToolsCacheServers: this._summarizeServerIdentifiers(o),
                matchingRawSnapshotServers: this._summarizeServerIdentifiers(a),
                matchingResolvedSnapshotServers: this._summarizeServerIdentifiers(l)
            };
            return n && Object.assign(c, {
                serverIdentifier: n.identifier,
                serverName: n.name,
                serverType: n.type,
                serverSource: this._deriveServerSource(n),
                serverProjectManaged: !!n.projectManaged,
                serverDashboardManaged: !!n.dashboardManaged,
                serverPluginManaged: !!n.pluginManaged,
                serverExtensionManaged: !!n.extensionId,
                serverEnabled: this.isServerEnabled(n),
                serverBlocked: this.isServerBlocked(n),
                serverIsProvider: this.isMcpProviderServer(n),
                serverSkippedByBrowserState: this.isMcpProviderServer(n) && this.shouldSkipBrowserServer(n),
                serverStatusType: i?.type ?? "unknown",
                serverAuthenticationState: i?.type === "needsAuth" ? "needs_auth" : i ? "not_needs_auth" : "unknown",
                toolDisabledState: this.isToolDisabled(n, t.toolName) ?? "enabled",
                toolPresentInToolsCache: (this.toolsCache()[n.identifier] ?? []).some((u)=>u.name === t.toolName),
                latestSnapshotPresent: !!r,
                latestSnapshotEpoch: r?.snapshotEpoch,
                latestSnapshotRevision: r?.snapshotRevision,
                latestSnapshotGeneration: r?.snapshotGeneration,
                latestSnapshotStatus: r?.status,
                latestSnapshotToolCount: r?.tools.length,
                latestSnapshotPromptCount: r?.prompts.length,
                latestSnapshotResourceCount: r?.resources.length,
                latestSnapshotHasInstructions: r?.instructions !== void 0,
                latestSnapshotHasRequestedTool: this._snapshotContainsTool(r, t.toolName),
                resolvedSnapshotPresent: !!s,
                resolvedSnapshotStatus: s?.status,
                resolvedSnapshotToolCount: s?.tools.length,
                resolvedSnapshotHasRequestedTool: this._snapshotContainsTool(s, t.toolName)
            }), {
                mcpErrorMeta: c
            };
        } catch (e) {
            return {
                mcpErrorMeta: {
                    toolName: t.toolName,
                    toolCallId: t.toolCallId,
                    requestedServerIdentifier: t.requestedServerIdentifier,
                    failureKind: t.failureKind,
                    logicalErrorMessage: t.logicalErrorMessage,
                    failureContextBuildErrorMessage: e instanceof Error ? e.message : String(e)
                }
            };
        }
    }
    async callTool(t, e, n, i, r, s) {
        i?.throwIfAborted(), Tu("[MCPService] Calling tool:", t, "with toolCallId:", n);
        const o = Date.now(), a = this.getServers(), l = await this.getAvailableTools(), c = Vqe(this.reactiveStorageService.applicationUserPersistentStorage.lastBrowserConnectionMode);
        let u = !1, d, h;
        for(const p in l){
            if (s && p !== s) continue;
            const g = a.filter((C)=>this.isServerEnabled(C)).find((C)=>C.identifier === p);
            if (!g) continue;
            const f = g.name, _ = g.identifier, b = f === dqt, y = _ === _X || f === uqt;
            if (c === "editor") {
                if (y) continue;
            } else if ((c === "none" || c === void 0) && (b || y)) continue;
            if (l[p].find((C)=>C.name === t)) {
                u = !0, d = g;
                try {
                    const C = await this.getMcpClient(g.identifier);
                    let T = e;
                    if (g.name === dqt || g.identifier === _X) {
                        const A = this.experimentsService.getDynamicConfig("playwright_log_configs", {
                            disableExposureLog: !1
                        });
                        T = {
                            ...e,
                            __playwrightLogConfigs: A
                        }, Tu("[MCPService] Added Playwright log configs to tool call:", T.__playwrightLogConfigs);
                    }
                    const I = await C.callTool(t, T, {
                        useLeaseElicitation: !1,
                        toolCallId: n,
                        abortSignal: i,
                        composerId: r
                    });
                    if (I) {
                        const A = Date.now() - o, P = this._deriveServerSource(g), M = this._getLogicalToolFailure(I);
                        return M.isLogicalError ? (Dk(this.structuredLogService, "error", `[MCPService] Tool ${t} on server ${p} returned isError`, void 0, {
                            subkey: "tool_call",
                            toolName: t,
                            serverIdentifier: p,
                            toolCallId: n,
                            failureKind: "direct_call_logical_error",
                            ...this._getToolCallFailureContextMetadata({
                                toolName: t,
                                toolCallId: n,
                                failureKind: "direct_call_logical_error",
                                server: g,
                                requestedServerIdentifier: s,
                                logicalErrorMessage: M.logicalErrorMessage
                            })
                        }), this._emitToolCallMetrics({
                            durationMs: A,
                            status: "error",
                            source: P,
                            transport: Z4e(g),
                            providerHost: Bze(g)
                        })) : this._emitToolCallMetrics({
                            durationMs: A,
                            status: "success",
                            source: P,
                            transport: Z4e(g),
                            providerHost: Bze(g)
                        }), this.clearProgressForTool(n), n && this.clearElicitationRequestsForToolCall(n), I;
                    }
                } catch (C) {
                    O0(`[MCPService] Error calling tool ${t} on server ${p}:`, C), Dk(this.structuredLogService, "error", `[MCPService] Error calling tool ${t} on server ${p}`, C instanceof Error ? C : void 0, {
                        subkey: "tool_call",
                        toolName: t,
                        serverIdentifier: p,
                        toolCallId: n,
                        failureKind: "direct_call_error",
                        ...this._getToolCallFailureContextMetadata({
                            toolName: t,
                            toolCallId: n,
                            failureKind: "direct_call_error",
                            server: g,
                            requestedServerIdentifier: s
                        })
                    }), h = C, this.clearProgressForTool(n), n && this.clearElicitationRequestsForToolCall(n);
                }
            }
        }
        if (u) {
            const p = h instanceof Error && h.message === "Tool call was cancelled" ? "cancelled" : "error";
            throw this._emitToolCallMetrics({
                durationMs: Date.now() - o,
                status: p,
                source: d !== void 0 ? this._deriveServerSource(d) : "unknown",
                transport: d !== void 0 ? Z4e(d) : void 0,
                providerHost: d !== void 0 ? Bze(d) : void 0
            }), h instanceof Error ? new Error(`Tool execution failed: ${h.message}`, {
                cause: h
            }) : new Error(`Tool execution failed: ${String(h)}`);
        }
        throw this._emitToolCallMetrics({
            durationMs: Date.now() - o,
            status: "error",
            source: "unknown"
        }), Dk(this.structuredLogService, "error", `[MCPService] No server found with tool: ${t}`, void 0, {
            subkey: "tool_call",
            toolName: t,
            toolCallId: n,
            failureKind: "tool_lookup_failure",
            ...this._getToolCallFailureContextMetadata({
                toolName: t,
                toolCallId: n,
                failureKind: "tool_lookup_failure",
                requestedServerIdentifier: s
            })
        }), new Error(`No server found with tool: ${t}`);
    }
    async callToolForLease(t, e, n, i) {
        const { abortSignal: r, toolCallId: s } = i;
        r?.throwIfAborted(), Tu("[MCPService] Calling tool for lease:", e, "on server:", t, "with toolCallId:", s);
        const o = Date.now();
        let l = this.getServers().find((h)=>h.identifier === t);
        if (!l) {
            const h = this._durableSnapshots.get(t);
            l = h ? this._synthesizeMissingBrowserProviderServer(h) : void 0;
        }
        if (!l) throw this._emitToolCallMetrics({
            durationMs: Date.now() - o,
            status: "error",
            source: "unknown"
        }), Dk(this.structuredLogService, "error", `[MCPService] Cannot call lease tool ${e}: server not found ${t}`, void 0, {
            subkey: "tool_call",
            toolName: e,
            serverIdentifier: t,
            toolCallId: s,
            failureKind: "lease_precondition_failure",
            ...this._getToolCallFailureContextMetadata({
                toolName: e,
                toolCallId: s,
                failureKind: "lease_precondition_failure",
                requestedServerIdentifier: t
            })
        }), new Error(`Server not found: ${t}`);
        const c = this.getServerBlockMessage(l);
        if (c !== void 0) throw this._emitToolCallMetrics({
            durationMs: Date.now() - o,
            status: "error",
            source: this._deriveServerSource(l),
            transport: Z4e(l),
            providerHost: Bze(l)
        }), Dk(this.structuredLogService, "error", `[MCPService] Cannot call lease tool ${e}: server ${t} is blocked`, void 0, {
            subkey: "tool_call",
            toolName: e,
            serverIdentifier: t,
            toolCallId: s,
            failureKind: "lease_precondition_failure",
            ...this._getToolCallFailureContextMetadata({
                toolName: e,
                toolCallId: s,
                failureKind: "lease_precondition_failure",
                server: l,
                requestedServerIdentifier: t
            })
        }), new Error(c);
        if (!this.isServerEnabled(l) && !this.isMcpProviderServer(l)) throw this._emitToolCallMetrics({
            durationMs: Date.now() - o,
            status: "error",
            source: this._deriveServerSource(l),
            transport: Z4e(l),
            providerHost: Bze(l)
        }), Dk(this.structuredLogService, "error", `[MCPService] Cannot call lease tool ${e}: server ${t} is disabled`, void 0, {
            subkey: "tool_call",
            toolName: e,
            serverIdentifier: t,
            toolCallId: s,
            failureKind: "lease_precondition_failure",
            ...this._getToolCallFailureContextMetadata({
                toolName: e,
                toolCallId: s,
                failureKind: "lease_precondition_failure",
                server: l,
                requestedServerIdentifier: t
            })
        }), new Error(`Server is disabled: ${t}`);
        if (this.isToolDisabled(l, e) !== void 0) throw this._emitToolCallMetrics({
            durationMs: Date.now() - o,
            status: "error",
            source: this._deriveServerSource(l),
            transport: Z4e(l),
            providerHost: Bze(l)
        }), Dk(this.structuredLogService, "error", `[MCPService] Cannot call lease tool ${e}: tool is disabled`, void 0, {
            subkey: "tool_call",
            toolName: e,
            serverIdentifier: t,
            toolCallId: s,
            failureKind: "lease_precondition_failure",
            ...this._getToolCallFailureContextMetadata({
                toolName: e,
                toolCallId: s,
                failureKind: "lease_precondition_failure",
                server: l,
                requestedServerIdentifier: t
            })
        }), new Error(`Tool is disabled: ${e}`);
        if (this.isMcpProviderServer(l) && this.shouldSkipBrowserServer(l)) throw this._emitToolCallMetrics({
            durationMs: Date.now() - o,
            status: "error",
            source: this._deriveServerSource(l),
            transport: Z4e(l),
            providerHost: Bze(l)
        }), Dk(this.structuredLogService, "error", `[MCPService] Cannot call lease tool ${e}: server ${t} is skipped by browser state`, void 0, {
            subkey: "tool_call",
            toolName: e,
            serverIdentifier: t,
            toolCallId: s,
            failureKind: "lease_precondition_failure",
            ...this._getToolCallFailureContextMetadata({
                toolName: e,
                toolCallId: s,
                failureKind: "lease_precondition_failure",
                server: l,
                requestedServerIdentifier: t
            })
        }), new Error(`Server is disabled: ${t}`);
        const d = this._deriveServerSource(l);
        try {
            this.isMcpProviderServer(l) && await this._waitForMcpProviderRegistration(l.identifier, r);
            const h = await this.getMcpClient(l.identifier, l.name, l);
            let p = n;
            if (l.name === dqt || l.identifier === _X) {
                const b = this.experimentsService.getDynamicConfig("playwright_log_configs", {
                    disableExposureLog: !1
                });
                p = {
                    ...n,
                    __playwrightLogConfigs: b
                }, Tu("[MCPService] Added Playwright log configs to lease tool call:", p.__playwrightLogConfigs);
            }
            const g = await h.callTool(e, p, i), f = Date.now() - o, _ = this._getLogicalToolFailure(g);
            return _.isLogicalError ? (Dk(this.structuredLogService, "error", `[MCPService] Lease tool ${e} on server ${t} returned isError`, void 0, {
                subkey: "tool_call",
                toolName: e,
                serverIdentifier: t,
                toolCallId: s,
                failureKind: "lease_call_logical_error",
                ...this._getToolCallFailureContextMetadata({
                    toolName: e,
                    toolCallId: s,
                    failureKind: "lease_call_logical_error",
                    server: l,
                    requestedServerIdentifier: t,
                    logicalErrorMessage: _.logicalErrorMessage
                })
            }), this._emitToolCallMetrics({
                durationMs: f,
                status: "error",
                source: d,
                transport: Z4e(l),
                providerHost: Bze(l)
            })) : this._emitToolCallMetrics({
                durationMs: f,
                status: "success",
                source: d,
                transport: Z4e(l),
                providerHost: Bze(l)
            }), this.clearProgressForTool(s), s && this.clearElicitationRequestsForToolCall(s), g;
        } catch (h) {
            O0(`[MCPService] Error calling lease tool ${e} on server ${t}:`, h), Dk(this.structuredLogService, "error", `[MCPService] Error calling lease tool ${e} on server ${t}`, h instanceof Error ? h : void 0, {
                subkey: "tool_call",
                toolName: e,
                serverIdentifier: t,
                toolCallId: s,
                failureKind: "lease_call_error",
                ...this._getToolCallFailureContextMetadata({
                    toolName: e,
                    toolCallId: s,
                    failureKind: "lease_call_error",
                    server: l,
                    requestedServerIdentifier: t
                })
            }), this.clearProgressForTool(s), s && this.clearElicitationRequestsForToolCall(s);
            const p = h instanceof Error && h.message === "Tool call was cancelled" ? "cancelled" : "error";
            throw this._emitToolCallMetrics({
                durationMs: Date.now() - o,
                status: p,
                source: d,
                transport: Z4e(l),
                providerHost: Bze(l)
            }), h;
        }
    }
    async getPrompt(t, e) {
        Tu("[MCPService] Getting prompt:", t);
        const n = this.getServers();
        for(const i in this.promptsCache()){
            const r = n.find((a)=>a.identifier === i);
            if (!(!r || !this.isServerEnabled(r) && !this.isMcpProviderServer(r) || this.isMcpProviderServer(r) && this.shouldSkipBrowserServer(r) || !this.promptsCache()[i].find((a)=>a.name === t))) try {
                const l = await (await this.getMcpClient(r.identifier)).getPrompt(t, e);
                if (l) return l;
            } catch (a) {
                O0(`[MCPService] Error getting prompt ${t} on server ${i}:`, a);
            }
        }
        throw new Error(`No server found with prompt: ${t}`);
    }
    async getPromptForServer(t, e, n) {
        Tu("[MCPService] Getting prompt for server:", t, "prompt:", e);
        const r = this.getServers().find((s)=>s.identifier === t);
        if (!r) throw new Error(`Server not found: ${t}`);
        if (!this.isServerEnabled(r) && !this.isMcpProviderServer(r)) throw new Error(`Server is disabled: ${t}`);
        if (this.isMcpProviderServer(r) && this.shouldSkipBrowserServer(r)) throw new Error(`Server is disabled: ${t}`);
        if (!this.isMcpProviderServer(r)) try {
            return await (await this.getMcpClient(r.identifier)).getPrompt(e, n);
        } catch (s) {
            throw O0(`[MCPService] Error getting prompt ${e} on server ${t}:`, s), s;
        }
    }
    getToolsRawFromCache(t) {
        const e = this.toolsCache()[t];
        if (e && e.length > 0) return e.map((n)=>({
                name: n.name,
                description: n.description,
                inputSchema: n.inputSchema,
                outputSchema: n.outputSchema,
                annotations: n.annotations
            }));
    }
    async getToolsRawForServer(t) {
        const e = this.getServers().find((r)=>r.identifier === t);
        if (e) {
            const r = this._getToolsRawFromDurableSnapshot(e);
            if (r !== void 0) return r;
        }
        const n = this.getToolsRawFromCache(t);
        return n || (await this.getMcpClient(t)).listToolsRaw();
    }
    async readResource(t, e) {
        Tu("[MCPService] Reading resource:", t, "from server:", e);
        const n = this.getServers();
        if (e) {
            let i = n.find((r)=>r.identifier === e || r.name === e);
            if (!i) {
                const r = nzt(e);
                i = n.find((s)=>{
                    const o = nzt(s.name);
                    return s.identifier === r || s.name === r || o === r || s.identifier.includes(r) || s.name.includes(r);
                });
            }
            if (!i) throw new Error(`Server not found: ${e}`);
            if (!this.isServerEnabled(i) && !this.isMcpProviderServer(i)) throw new Error(`Server is disabled: ${e}`);
            if (this.isMcpProviderServer(i) && this.shouldSkipBrowserServer(i)) throw new Error(`Server is disabled: ${e}`);
            try {
                const s = await (await this.getMcpClient(i.identifier)).readResource(t);
                if (s) return s;
            } catch (r) {
                throw O0(`[MCPService] Error reading resource ${t} on server ${i.identifier}:`, r), r;
            }
        }
        for (const i of n)if (!(!this.isServerEnabled(i) && !this.isMcpProviderServer(i)) && !(this.isMcpProviderServer(i) && this.shouldSkipBrowserServer(i))) try {
            const s = await (await this.getMcpClient(i.identifier)).readResource(t);
            if (s) return s;
        } catch (r) {
            O0(`[MCPService] Error reading resource ${t} on server ${i.identifier}:`, r);
        }
        throw new Error(`No server found that can read resource: ${t}`);
    }
    clearProgressForTool(t) {
        t && this.setProgressCache((e)=>{
            const { [t]: n, ...i } = e;
            return i;
        });
    }
    getElicitationRequestForToolCall(t) {
        const e = this.elicitationRequestsCache();
        return Object.values(e).find((n)=>n.toolCallId === t);
    }
    resolveElicitationRequest(t, e) {
        const i = this.elicitationRequestsCache()[t];
        i ? (Tu(`[MCPService] Resolving elicitation request ${t} with action: ${e.action}`), i.resolve(e), this.setElicitationRequestsCache((r)=>{
            const { [t]: s, ...o } = r;
            return o;
        }), this.ownedElicitationRequestIds.delete(t)) : Cle(`[MCPService] No elicitation request found for ID: ${t}`);
    }
    clearElicitationRequestsForToolCall(t) {
        this.cancelSharedElicitationRequests((e)=>e.toolCallId === t);
    }
    registerLeaseElicitationHandler(t, e) {
        Tu(`[MCPService] Registering lease elicitation handler for toolCallId: ${t}`), this.leaseElicitationHandlers.set(t, e), this.ownedLeaseElicitationToolCallIds.add(t);
    }
    unregisterLeaseElicitationHandler(t) {
        Tu(`[MCPService] Unregistering lease elicitation handler for toolCallId: ${t}`), this.leaseElicitationHandlers.delete(t), this.ownedLeaseElicitationToolCallIds.delete(t);
    }
    async handleElicitationRequest(t, e, n, i) {
        const r = `${t}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        return new Promise((s)=>{
            const o = {
                id: r,
                message: i.message,
                requestedSchema: i.requestedSchema,
                serverIdentifier: t,
                toolCallId: n,
                resolve: (a)=>{
                    s(a);
                }
            };
            this.storeOwnedElicitationRequest(r, o);
        });
    }
    async deleteClient(t, e) {
        this.createClientPromises.delete(t.identifier), this.lastDeleteReasons.set(t.identifier, e ?? "unknown"), this._nextServerIncarnationId(t.identifier), this._clearSnapshotWatchdog(t.identifier, "delete_client"), this._cursorMcpDegradedServers.delete(t.identifier);
        try {
            await (await this.getMcpClient(t.identifier)).deleteClient(e);
        } catch (n) {
            O0("[MCPService] Error deleting client:", n), Dk(this.structuredLogService, "error", "[MCPService] Error deleting client", n instanceof Error ? n : void 0, {
                subkey: "delete_client",
                identifier: t.identifier
            });
        } finally{
            this._durableSnapshots.delete(t.identifier), this.clearServerStatus(t.identifier), this.clearElicitationRequestsForServer(t.identifier), this.successfullyInitializedServers.delete(t.identifier), this.mcpWorkbenchServerLoggers.deleteAndDispose(t.identifier), this.loggerService.deregisterLogger(this.mcpWorkbenchServerLoggerId(t.identifier));
        }
    }
    clearElicitationRequestsForServer(t) {
        this.cancelOwnedElicitationRequests((e)=>e.serverIdentifier === t);
    }
    storeOwnedElicitationRequest(t, e) {
        this.ownedElicitationRequestIds.add(t), this.setElicitationRequestsCache((n)=>({
                ...n,
                [t]: e
            }));
    }
    cancelOwnedElicitationRequests(t) {
        const e = this.ownedElicitationRequestIds;
        e === void 0 || e.size === 0 || this.setElicitationRequestsCache((n)=>{
            const i = {
                ...n
            };
            for (const r of [
                ...e
            ]){
                const s = n[r];
                if (s === void 0) {
                    e.delete(r);
                    continue;
                }
                t(s) && (s.resolve({
                    action: "cancel"
                }), delete i[r], e.delete(r));
            }
            return i;
        });
    }
    cancelSharedElicitationRequests(t) {
        this.setElicitationRequestsCache((e)=>{
            const n = {
                ...e
            };
            let i = !1;
            for (const [r, s] of Object.entries(e))t(s) && (s.resolve({
                action: "cancel"
            }), delete n[r], this.ownedElicitationRequestIds?.delete(r), i = !0);
            return i ? n : e;
        });
    }
    clearOwnedElicitationState() {
        this.cancelOwnedElicitationRequests(()=>!0);
        for (const t of [
            ...this.ownedLeaseElicitationToolCallIds
        ])this.leaseElicitationHandlers.delete(t), this.ownedLeaseElicitationToolCallIds.delete(t);
    }
    async createClient(t) {
        this.metricsService.increment({
            stat: "mcp.create_client"
        });
        const e = t.identifier, n = this.createClientPromises.get(e);
        if (n) return n;
        this._armSnapshotWatchdog(t, "create");
        const i = this.createClientInternal(t).finally(()=>{
            this.createClientPromises.delete(e);
        });
        return this.createClientPromises.set(e, i), i;
    }
    async createClientIfNotExists(t) {
        const e = this.statusCache()[t.identifier];
        return e?.type === "connected" ? (this.logMcpServerFile(t.identifier, "debug", `[MCPService] Skipping createClient for already-connected server: ${t.identifier}`), !0) : e?.type === "needsAuth" ? (this.logMcpServerFile(t.identifier, "debug", `[MCPService] Skipping createClient for needsAuth server: ${t.identifier}`), !1) : e?.type === "error" && e.isRetryable === !1 ? (this.logMcpServerFile(t.identifier, "debug", `[MCPService] Skipping automatic createClient for non-retryable error server: ${t.identifier}`), !1) : this._shouldSkipPassiveCreateForDurableSnapshot(t, e) ? (this.logMcpServerFile(t.identifier, "debug", `[MCPService] Skipping passive createClient for snapshot-backed OAuth HTTP server: ${t.identifier}`), Dk(this.structuredLogService, "info", "[MCPService] Skipping passive createClient for snapshot-backed OAuth HTTP server", void 0, {
            subkey: "create_client",
            identifier: t.identifier,
            serverName: t.name,
            reason: "snapshot_backed_passive_create"
        }), !0) : this.createClient(t);
    }
    async createClientInternal(t) {
        if (this.refuseUserDisabledServer(t, "create")) return !1;
        const e = this.getServerBlockMessage(t);
        if (e) return this.updateServerStatus(t.identifier, {
            type: "error",
            error: e
        }), !1;
        if (this.isMcpProviderServer(t)) return this.updateServerStatus(t.identifier, {
            type: "connected"
        }), !0;
        try {
            const n = await this.resolveServerVariables(t), i = this.getResolvedServerBlockMessage(n);
            if (i) return this._logAllowlist("warn", `[MCPService] Blocking remote MCP server before connect: ${t.identifier} (${i})`, {
                identifier: t.identifier,
                serverName: t.name,
                serverUrl: n.url
            }), this.updateServerStatus(t.identifier, {
                type: "error",
                error: i
            }), !1;
            this._logAllowlist("info", `[MCPService] createClient: identifier="${n.identifier}", serverName="${t.name}"`, {
                identifier: n.identifier,
                serverName: t.name
            }), this.logMcpServerFile(n.identifier, "info", `[MCPService] createClient: identifier="${n.identifier}", serverName="${t.name}"`);
            const r = await this.getMcpClient(n.identifier, t.name, t), s = this._serverInfoFromResolvedServer(n), a = await r.createClient(s);
            return a === void 0 ? (this.logMcpServerFile(n.identifier, "warn", `[MCPService] createClient returned undefined for server: ${n.identifier}`), !1) : a.statusType === "initializing" ? (this.logMcpServerFile(n.identifier, "info", `[MCPService] createClient completed for server: ${n.identifier}, statusType=initializing, success=${a.success}`), a.success) : typeof a.connected == "boolean" ? (this.logMcpServerFile(n.identifier, a.error ? "error" : "info", `[MCPService] createClient completed for server: ${n.identifier}, connected=${a.connected}, statusType=${a.statusType}${a.error ? `, error=${a.error}` : ""}`), a.connected) : typeof a.statusType == "string" ? (this.logMcpServerFile(n.identifier, "info", `[MCPService] createClient completed for server: ${n.identifier}, statusType=${a.statusType}`), a.statusType === "connected") : (this.logMcpServerFile(n.identifier, "info", `[MCPService] createClient completed for server: ${n.identifier}, success=${a.success}`), a.success);
        } catch (n) {
            throw O0("[MCPService] Error creating client:", n), this.logMcpServerFile(t.identifier, "error", "[MCPService] Error creating client:", n), Dk(this.structuredLogService, "error", "[MCPService] Error creating client", n instanceof Error ? n : void 0, {
                subkey: "create_client",
                identifier: t.identifier,
                serverName: t.name
            }), n;
        }
        return !1;
    }
    getMcpAdminBlockMessage(t) {
        const n = this.adminSettingsService.getCached().allowedMcpConfiguration;
        if (n?.disableAll === !0) return rAn;
        const i = t.identifier === Dpe || t.identifier === _X, r = this.reactiveStorageService.applicationUserPersistentStorage.isEnterprise;
        if (i) return r !== !1 ? this.adminSettingsService.getBrowserFeaturesForCurrentIdentity() === !0 ? void 0 : rAn : void 0;
        if (!n) return;
        const o = this.experimentsService.checkFeatureGate(Yzt, {
            disableExposureLog: !0
        }) ? n : {
            ...n,
            allowUserOverrideMcpServers: !1,
            deniedMcpServers: []
        };
        return Xfk(t, o, {
            useCorePolicy: !0
        }) ? rAn : void 0;
    }
    getTeamNetworkAllowlistBlockMessage(t, e) {
        const n = t.identifier === Dpe || t.identifier === _X;
        if (t.type !== "streamableHttp" || !t.url || this.isMcpProviderServer(t) || n) return;
        const i = this.adminSettingsService.getCached().allowedMcpConfiguration, r = this.experimentsService.checkFeatureGate(Yzt, {
            disableExposureLog: !0
        }), s = this.experimentsService.checkFeatureGate(kal, {
            disableExposureLog: !1
        });
        if (!r && !s || i?.requireMcpServersInTeamNetworkAllowlist !== !0 || e?.skipUnresolvedUrls && t.url.includes("${")) return;
        const o = (this.adminSettingsService.getCached().networkAllowlist ?? []).map((a)=>a.trim()).filter((a)=>a.length > 0);
        return r ? y7a(t.url, o) ? void 0 : sAn : o.length === 0 || y7a(t.url, o) ? void 0 : sAn;
    }
    getMcpNetworkControlsBlockMessage(t, e) {
        const n = t.identifier === Dpe || t.identifier === _X;
        if (t.type !== "streamableHttp" || !t.url || this.isMcpProviderServer(t) || n) return;
        const i = this.adminSettingsService.getCached(), r = i.allowedMcpConfiguration;
        if (!this.experimentsService.checkFeatureGate(Yzt, {
            disableExposureLog: !0
        }) || e?.skipUnresolvedUrls && t.url.includes("${")) return;
        const o = Zfk(t, r?.allowedMcpServers ?? []), a = {
            enabled: o !== void 0,
            mcpNetworkAllowlist: Qfk(o, t),
            localAgentNetworkAllowlist: i.networkAllowlist,
            blockMessage: sAn
        };
        return Ysk(t.url, a);
    }
    getEffectiveEnabledTools(t) {
        const e = this.adminSettingsService.getCached().allowedMcpConfiguration, n = MEi(t, e?.allowedMcpServers ?? []);
        if (!(n === void 0 || oal(n).mode !== "custom")) return (n.toolAllowlist ?? []).map((r)=>r.trim()).filter((r)=>r.length > 0);
    }
    getAdminToolPolicy(t) {
        const e = MEi(t, this.adminSettingsService.getCached().allowedMcpConfiguration?.allowedMcpServers ?? []);
        if (e !== void 0) return oal(e);
    }
    getUserToolGroupPolicy(t) {
        const e = this.reactiveStorageService.applicationUserPersistentStorage;
        return yss(t.identifier, e.mcpToolGroupPolicy, e.mcpDisabledTools ?? []);
    }
    getServerBlockMessage(t) {
        return this.getMcpAdminBlockMessage(t) ?? this.getMcpNetworkControlsBlockMessage(t, {
            skipUnresolvedUrls: !0
        }) ?? this.getTeamNetworkAllowlistBlockMessage(t, {
            skipUnresolvedUrls: !0
        }) ?? this.getHostedMcpWithholdMessage(t, {
            skipUnresolvedUrls: !0
        });
    }
    getResolvedServerBlockMessage(t) {
        return this.getMcpAdminBlockMessage(t) ?? this.getMcpNetworkControlsBlockMessage(t) ?? this.getTeamNetworkAllowlistBlockMessage(t) ?? this.getHostedMcpWithholdMessage(t);
    }
    isServerBlocked(t) {
        return this.getServerBlockMessage(t) !== void 0;
    }
    isServerBlockRetryable(t) {
        return this.getServerBlockMessage(t) === YCi;
    }
    getAdminMcpRuntimePolicyFingerprint() {
        const t = this.adminSettingsService.getCached(), e = t.allowedMcpConfiguration, n = this.experimentsService.checkFeatureGate(Yzt, {
            disableExposureLog: !0
        });
        return JSON.stringify({
            mcpSettingsOverhaulEnabled: n,
            allowedMcpConfiguration: e === void 0 ? void 0 : n ? {
                disableAll: e.disableAll,
                allowUserOverrideMcpServers: e.allowUserOverrideMcpServers,
                requireMcpServersInTeamNetworkAllowlist: e.requireMcpServersInTeamNetworkAllowlist,
                allowedMcpServers: (e.allowedMcpServers ?? []).map((i)=>({
                        command: i.command,
                        serverUrl: i.serverUrl,
                        networkMode: i.networkMode,
                        networkAllowlist: i.networkAllowlist,
                        toolAllowlist: i.toolAllowlist,
                        toolAllowlistMode: i.toolAllowlistMode
                    })),
                deniedMcpServers: (e.deniedMcpServers ?? []).map((i)=>({
                        command: i.command,
                        serverUrl: i.serverUrl
                    }))
            } : {
                disableAll: e.disableAll,
                requireMcpServersInTeamNetworkAllowlist: e.requireMcpServersInTeamNetworkAllowlist
            },
            networkAllowlist: t.networkAllowlist,
            browserFeatures: this.adminSettingsService.getBrowserFeaturesForCurrentIdentity()
        });
    }
    getAdminMcpRuntimePolicyLogMetadata() {
        const t = this.adminSettingsService.getCached(), e = t.allowedMcpConfiguration, n = e?.allowedMcpServers ?? [], i = e?.deniedMcpServers ?? [];
        return {
            mcpSettingsOverhaulEnabled: this.experimentsService.checkFeatureGate(Yzt, {
                disableExposureLog: !0
            }),
            allowedMcpServerCount: n.length,
            deniedMcpServerCount: i.length,
            networkAllowlistCount: t.networkAllowlist?.length ?? 0,
            perServerNetworkAllowlistCounts: n.map((r)=>({
                    command: r.command,
                    serverUrl: r.serverUrl,
                    networkAllowlistCount: r.networkAllowlist?.length ?? 0,
                    toolAllowlistCount: r.toolAllowlist?.length ?? 0
                }))
        };
    }
    async handleAdminMcpRuntimePolicyChange() {
        const t = this.adminMcpRuntimePolicyFingerprint;
        this._logAllowlist("info", "[MCPService] Admin MCP settings changed; evaluating MCP runtime policy", {
            ...this.getAdminMcpRuntimePolicyLogMetadata(),
            previousPolicyFingerprint: t === void 0 ? void 0 : tR(t).toString(16)
        }), await this.reEvaluateBlockedServers();
        const e = this.getAdminMcpRuntimePolicyFingerprint();
        if (e === t) {
            this._logAllowlist("info", "[MCPService] Admin MCP runtime policy unchanged; skipping MCP respawn pass", {
                ...this.getAdminMcpRuntimePolicyLogMetadata(),
                policyFingerprint: tR(e).toString(16)
            });
            return;
        }
        this.adminMcpRuntimePolicyFingerprint = e, this._logAllowlist("info", "[MCPService] Admin MCP runtime policy changed; checking connected MCP servers for respawn", {
            ...this.getAdminMcpRuntimePolicyLogMetadata(),
            previousPolicyFingerprint: t === void 0 ? void 0 : tR(t).toString(16),
            nextPolicyFingerprint: tR(e).toString(16)
        });
        const n = this.allServers(), i = this.statusCache();
        for (const r of n)try {
            const s = i[r.identifier];
            if (s?.type !== "connected" && s?.type !== "degraded" || this.isMcpProviderServer(r)) continue;
            const o = await this.resolveServerVariables(r);
            if (this.getResolvedServerBlockMessage(o) !== void 0) continue;
            this._logAllowlist("info", `[MCPService] Admin MCP runtime policy changed; restarting MCP server ${r.identifier}`, {
                identifier: r.identifier,
                serverName: r.name,
                serverType: o.type,
                serverUrl: o.url,
                statusType: s.type
            }), await this.deleteClient(r, "admin_mcp_runtime_policy_changed"), this.isServerEnabled(r) && await this.createClientIfNotExists(r);
        } catch (s) {
            this._logAllowlist("error", `[MCPService] Error restarting MCP server ${r.identifier} after admin policy change`, {
                identifier: r.identifier,
                serverName: r.name,
                error: s instanceof Error ? s.message : String(s)
            });
        }
    }
    reEvaluateBlockedServers() {
        const t = (this.reEvaluateBlockedServersTail ?? Promise.resolve()).then(()=>this.doReEvaluateBlockedServers(), ()=>this.doReEvaluateBlockedServers());
        return this.reEvaluateBlockedServersTail = t.then(()=>{}, ()=>{}), t;
    }
    async doReEvaluateBlockedServers() {
        const t = this.allServers(), e = this.statusCache(), n = new Set;
        for (const i of t)try {
            const r = e[i.identifier];
            if (!this.isServerEnabledByUser(i) && !this.isMcpProviderServer(i)) {
                r !== void 0 && r.type !== "disconnected" && !(r.type === "error" && sal(r.error)) && (Tu(`[MCPService] Server ${i.identifier} is disabled by the user, disconnecting`), await this.deleteClient(i, "server_disabled"), n.add(i.identifier)), r?.type !== "disconnected" ? this.updateServerStatus(i.identifier, {
                    type: "disconnected"
                }) : this._onDidChangeServerStatus.fire({
                    identifier: i.identifier,
                    status: r
                });
                continue;
            }
            const s = await this.resolveServerVariables(i), o = this.getResolvedServerBlockMessage(s);
            if (o !== void 0) {
                const l = r === void 0 || r.type === "disconnected" || r.type === "error" && sal(r.error);
                l || (Tu(`[MCPService] Server ${i.identifier} is now blocked (${o}), disconnecting`), await this.deleteClient(i, "server_blocked"), n.add(i.identifier)), (!l || r?.type === "error" && r.error !== o) && (o === oAn.server_placed && this._emitHostedPlacementRowTransition({
                    server: i,
                    resolved: s,
                    from: zfk(r),
                    to: "server_placed"
                }), this.updateServerStatus(i.identifier, {
                    type: "error",
                    error: o
                }));
            } else if (r?.type === "error" && sal(r.error)) {
                Tu(`[MCPService] Server ${i.identifier} is no longer blocked, reconnecting`);
                const l = Plg(r.error);
                l !== void 0 && this._emitHostedPlacementRowTransition({
                    server: i,
                    resolved: s,
                    from: l,
                    to: "released"
                }), this.isServerEnabled(i) && await this.createClientIfNotExists(i);
            }
        } catch (r) {
            O0(`[MCPService] Error re-evaluating blocked status for ${i.identifier}:`, r);
        }
        n.size > 0 && (this.setToolsCache((i)=>this.omitServerIds(i, n)), this.setPromptsCache((i)=>this.omitServerIds(i, n)), this.setResourcesCache((i)=>this.omitServerIds(i, n)), this.setInstructionsCache((i)=>this.omitServerIds(i, n)), this._onDidChangeMcpSnapshots.fire(Array.from(n)));
    }
    isServerEnabled(t) {
        return this.isServerBlocked(t) || this.shouldSkipBrowserServer(t) ? !1 : this.isServerEnabledByUser(t);
    }
    refuseUserDisabledServer(t, e) {
        return this.isServerEnabledByUser(t) || this.isMcpProviderServer(t) ? !1 : (Tu(`[MCPService] Server ${t.identifier} is disabled by the user, not dialing (${e})`), this.statusCache()[t.identifier]?.type !== "disconnected" && this.updateServerStatus(t.identifier, {
            type: "disconnected"
        }), !0);
    }
    isServerEnabledByUser(t) {
        if (t.projectManaged) {
            const n = this.approvedProjectMcpServers.get(), i = this.computeApprovalKey(t), r = n.includes(i), s = n.includes(t.identifier);
            if (!r && !s) return Tu(`[MCPService] Server ${t.identifier} not approved with current configuration (no legacy or hash approval), disabling`), !1;
        }
        return !this.getDisabledServersListFor(t).includes(t.identifier);
    }
    getDisabledServersListFor(t) {
        return !this.useProfileScopedGlobalMcpDisabledState || t.projectManaged ? this.disabledMcpServers.get() : this.disabledGlobalMcpServers.get();
    }
    setDisabledServersListFor(t, e) {
        if (!this.useProfileScopedGlobalMcpDisabledState || t.projectManaged) {
            this.disabledMcpServers.set(e, void 0);
            return;
        }
        this.setDisabledGlobalMcpServers(e);
    }
    setDisabledGlobalMcpServers(t) {
        this.lastReconciledDisabledGlobalMcpServers = t, this.disabledGlobalMcpServers.set(t, void 0);
    }
    isProjectManagedIdentifier(t) {
        return t.startsWith("project-");
    }
    dropLegacyWorkspaceDisabledGlobalMcpServers() {
        try {
            const t = this.disabledMcpServers.get(), e = t.filter((n)=>this.isProjectManagedIdentifier(n));
            if (e.length === t.length) return;
            this.disabledMcpServers.set(e, void 0), Tu("[MCPService] Dropped legacy workspace-scoped disabled state for global MCP servers:", t.filter((n)=>!this.isProjectManagedIdentifier(n)));
        } catch (t) {
            O0("[MCPService] Failed to drop legacy workspace-scoped disabled state for global MCP servers", t);
        }
    }
    reconcileDisabledGlobalMcpServersChange(t, e) {
        const n = new Set(t), i = new Set(e), r = e.filter((a)=>!n.has(a)), s = t.filter((a)=>!i.has(a));
        if (r.length === 0 && s.length === 0) return;
        Tu("[MCPService] Disabled global MCP servers changed externally:", {
            newlyDisabled: r,
            newlyEnabled: s
        });
        const o = new Map(this.allServers().map((a)=>[
                a.identifier,
                a
            ]));
        for (const a of r){
            const l = o.get(a);
            !l || l.projectManaged || this.deleteClient(l, "shared_server_disabled").then(()=>{
                this.successfullyInitializedServers.delete(l.identifier);
            });
        }
        for (const a of s){
            const l = o.get(a);
            !l || l.projectManaged || !this.isServerEnabled(l) || this.createClientIfNotExists(l).then((c)=>{
                c ? this.successfullyInitializedServers.add(l.identifier) : this.successfullyInitializedServers.delete(l.identifier);
            });
        }
        this.getServers();
    }
    getServerDisplayName(t) {
        return this.allServers().find((n)=>n.identifier === t)?.name ?? xfk(this._cursorSubscriptionsMcpCopy(), t) ?? t;
    }
    _cursorSubscriptionsMcpCopy() {
        return ulg(Vag(this.experimentsService));
    }
    getInternalToolTranscriptDisplay(t, e, n) {
        const i = this.allServers().find((s)=>s.identifier === t);
        return !i || !this.isMcpProviderServer(i) ? dlg(this._cursorSubscriptionsMcpCopy(), t, e, n) : (this._getToolsFromDurableSnapshotLast(i) ?? this.toolsCache()[t])?.find((s)=>s.name === e)?.meta?.transcriptDisplay;
    }
    get mcpAllowlistLogger() {
        return this._mcpAllowlistLogger;
    }
    toolKey(t, e) {
        return `${t.identifier}|${e}`;
    }
    makeToolDisabledChecker(t) {
        const e = this.reactiveStorageService.applicationUserPersistentStorage, n = new Set(e.mcpDisabledTools ?? []), i = yss(t.identifier, e.mcpToolGroupPolicy, e.mcpDisabledTools ?? []), r = (a, l)=>{
            const c = Nlg(l), u = i[c];
            if (u === "off" || u === "custom" && n.has(this.toolKey(t, a))) return "disabledByUser";
        };
        let s;
        const o = MEi(t, this.adminSettingsService.getCached().allowedMcpConfiguration?.allowedMcpServers ?? []);
        if (o !== void 0) {
            const a = oal(o);
            a.mode !== "all" && (s = (l, c)=>!jgk(a, {
                    name: l,
                    annotations: c
                }));
        }
        return (a, l)=>{
            if (s?.(a, l)) return "disabledByAdmin";
            const c = r(a, l);
            if (c !== void 0) return c;
        };
    }
    isToolDisabled(t, e, n) {
        return this.makeToolDisabledChecker(t)(e, n ?? Llg(this, t, e));
    }
    toggleServerEnabled(t) {
        this.setServerEnabled(t, !this.isServerEnabledByUser(t));
    }
    setServerEnabled(t, e) {
        if (this.isServerEnabledByUser(t) === e) return;
        Tu(`[MCPService] Setting server enabled state: ${t.identifier} -> ${e}`);
        let n = [
            ...this.getDisabledServersListFor(t)
        ];
        if (e) this.whitelistProjectServer(t), n = n.filter((i)=>i !== t.identifier);
        else {
            const i = new Set(n);
            i.add(t.identifier), n = Array.from(i);
        }
        Tu("[MCPService] Setting server enabled state:", {
            disabledServers: n
        }), this.setDisabledServersListFor(t, n), this.getServers(), e ? this.createClientIfNotExists(t).then((i)=>{
            i ? this.successfullyInitializedServers.add(t.identifier) : this.successfullyInitializedServers.delete(t.identifier);
        }) : this.deleteClient(t, "server_disabled").then(()=>{
            this.successfullyInitializedServers.delete(t.identifier);
        });
    }
    setSharedServerEnabledState(t, e) {
        if (t.projectManaged) return;
        const n = [
            ...this.getDisabledServersListFor(t)
        ], i = n.includes(t.identifier);
        if (e) {
            if (!i) return;
            this.setDisabledServersListFor(t, n.filter((r)=>r !== t.identifier)), this.getServers();
            return;
        }
        i || (this.setDisabledServersListFor(t, [
            ...n,
            t.identifier
        ]), this.getServers());
    }
    async reconcileSharedServer(t, e) {
        const n = this.getServers().find((i)=>i.identifier === t);
        if (!(!n || n.projectManaged)) switch(e){
            case "enabled":
                {
                    this.setSharedServerEnabledState(n, !0), await this.createClientIfNotExists(n) ? this.successfullyInitializedServers.add(n.identifier) : this.successfullyInitializedServers.delete(n.identifier);
                    return;
                }
            case "disabled":
                {
                    this.setSharedServerEnabledState(n, !1), await this.deleteClient(n, "shared_server_disabled"), this.successfullyInitializedServers.delete(n.identifier);
                    return;
                }
            case "reload":
                {
                    await this.reloadClient(t);
                    return;
                }
            case "authChanged":
                {
                    n.type === "streamableHttp" && await this.clearServerOAuthState(t, "manual_or_external", n);
                    return;
                }
            default:
                return e;
        }
    }
    toggleToolDisabled(t, e, n) {
        const i = n ?? Llg(this, t, e), r = this.makeToolDisabledChecker(t)(e, i);
        if (r === "disabledByAdmin" || r === "disabledByConfig") return;
        const s = Nlg(i), o = this.reactiveStorageService.applicationUserPersistentStorage, a = yss(t.identifier, o.mcpToolGroupPolicy, o.mcpDisabledTools ?? []);
        if (a[s] === "off") return;
        const l = this.toolKey(t, e), c = new Set(o.mcpDisabledTools || []);
        a[s] === "all" ? (this.reactiveStorageService.setApplicationUserPersistentStorage("mcpToolGroupPolicy", {
            ...o.mcpToolGroupPolicy ?? {},
            [t.identifier]: {
                ...a,
                [s]: "custom"
            }
        }), c.add(l)) : c.has(l) ? c.delete(l) : c.add(l), this.reactiveStorageService.setApplicationUserPersistentStorage("mcpDisabledTools", [
            ...c
        ]), this._onSettingsChanged.fire();
    }
    setUserToolGroupPolicy(t, e, n) {
        const i = aal(n), r = this.reactiveStorageService.applicationUserPersistentStorage, s = yss(t.identifier, r.mcpToolGroupPolicy, r.mcpDisabledTools ?? []);
        s[e] !== i && (this.reactiveStorageService.setApplicationUserPersistentStorage("mcpToolGroupPolicy", {
            ...r.mcpToolGroupPolicy ?? {},
            [t.identifier]: {
                ...s,
                [e]: i
            }
        }), this._onSettingsChanged.fire());
    }
    whitelistProjectServer(t) {
        if (!t.projectManaged) return;
        const e = [
            ...this.approvedProjectMcpServers.get()
        ], n = this.computeApprovalKey(t);
        e.includes(n) || (e.push(n), this.approvedProjectMcpServers.set(e, void 0));
    }
    removeServerApproval(t) {
        if (!t.projectManaged) return;
        const e = [
            ...this.approvedProjectMcpServers.get()
        ], n = e.filter((i)=>!(i === t.identifier || i.includes(":") && i.startsWith(`${t.identifier}:`)));
        n.length !== e.length && (Tu(`[MCPService] Removed approval for server ${t.identifier} due to configuration change`), this.approvedProjectMcpServers.set(n, void 0));
    }
    initializePreviouslyKnownServerIds() {
        Ulg(this.storageService, this.KNOWN_SERVER_IDS_KEY);
        const t = this.storageService.get(this.KNOWN_SERVER_IDS_KEY, 0);
        if (t) try {
            const e = JSON.parse(t);
            this.previouslyKnownServerIds = new Set(e), Tu(`[MCPService] Loaded ${this.previouslyKnownServerIds.size} known server IDs from storage`);
        } catch (e) {
            O0("[MCPService] Error parsing known server IDs from storage:", e), this.previouslyKnownServerIds = new Set;
        }
        else this.previouslyKnownServerIds = new Set;
    }
    savePreviouslyKnownServerIds() {
        const t = Array.from(this.previouslyKnownServerIds);
        this.storageService.store(this.KNOWN_SERVER_IDS_KEY, JSON.stringify(t), 0, 1), Tu(`[MCPService] Saved ${t.length} known server IDs to storage`);
    }
    async migrateLegacyApprovals() {
        const t = [
            ...this.approvedProjectMcpServers.get()
        ], e = t.filter((s)=>!s.includes(":")), n = t.filter((s)=>s.includes(":"));
        if (e.length === 0) return;
        Tu(`[MCPService] Found ${e.length} legacy approvals to migrate`);
        const i = this.getServers().filter((s)=>s.projectManaged), r = [
            ...n
        ];
        for (const s of e){
            const o = i.find((a)=>a.identifier === s);
            if (o) {
                const a = this.computeApprovalKey(o);
                r.includes(a) || (r.push(a), Tu(`[MCPService] Migrated legacy approval: ${s} -> ${a}`));
            }
        }
        r.length !== n.length && (Tu(`[MCPService] Successfully migrated ${r.length} legacy approvals to hash-based system`), this.approvedProjectMcpServers.set(r, void 0));
    }
    dispose() {
        this._clearAllSnapshotWatchdogs("disabled"), this.clearOwnedElicitationState(), this.userConfigFileWatcher.clear(), super.dispose();
    }
    async registerMCPServer(t, e, n) {
        const i = `extension-${nzt(t)}`, r = this.computeIdentifier({
            name: i,
            extensionId: n
        });
        if (this.extensionRegisteredServers.some((o)=>o.identifier === r)) {
            Tu(`[MCPService] Server ${r} already registered`);
            return;
        }
        let s;
        if (typeof e == "string" || typeof e == "object" && "url" in e) {
            const o = typeof e == "string" ? e : e.url, a = this.ensureUrlHasProtocol(o);
            Tu(`[MCPService] Registering extension MCP HTTP/SSE server: ${a} with name: ${t} from extension: ${n}`), s = {
                identifier: r,
                name: i,
                type: "streamableHttp",
                url: a,
                headers: typeof e == "object" && "headers" in e ? e.headers : void 0,
                projectManaged: !1,
                extensionId: n
            };
        } else {
            const o = e;
            Tu(`[MCPService] Registering extension MCP stdio server: ${o.command} with name: ${t} from extension: ${n}`), s = {
                identifier: r,
                name: i,
                type: "stdio",
                command: o.command,
                args: o.args,
                env: o.env ?? {},
                projectManaged: !1,
                extensionId: n
            };
        }
        this.extensionRegisteredServers.push(s), this.previouslyKnownServerIds.add(r), this.savePreviouslyKnownServerIds();
        try {
            this.isServerEnabled(s) ? await this.createClientIfNotExists(s) ? (Tu(`[MCPService] Successfully created client for server: ${s.identifier}`), this.successfullyInitializedServers.add(s.identifier)) : (Tu(`[MCPService] Failed to create client for server: ${s.identifier}`), this.successfullyInitializedServers.delete(s.identifier), this.updateServerStatus(s.identifier, {
                type: "error",
                error: "Failed to create client"
            })) : this.updateServerStatus(s.identifier, {
                type: "disconnected"
            });
        } catch (o) {
            O0(`[MCPService] Error initializing extension server ${s.identifier}:`, o), this.successfullyInitializedServers.delete(s.identifier), this.updateServerStatus(s.identifier, {
                type: "error",
                error: o instanceof Error ? o.message : String(o)
            });
        }
    }
    async unregisterMCPServer(t, e) {
        Tu(`[MCPService] Unregistering extension MCP server with name: ${t} from extension: ${e}`);
        const n = `extension-${nzt(t)}`, i = this.computeIdentifier({
            name: n,
            extensionId: e
        }), r = this.extensionRegisteredServers.find((s)=>s.identifier === i);
        if (!r) {
            Tu(`[MCPService] No server found with name: ${t}`);
            return;
        }
        this.extensionRegisteredServers = this.extensionRegisteredServers.filter((s)=>s !== r);
        try {
            await this.deleteClient(r, "extension_server_unregistered"), r.type === "streamableHttp" && await this.clearServerOAuthState(r.identifier, "extension_server_unregistered", r);
        } catch (s) {
            O0(`[MCPService] Error deleting client for server ${r.identifier}:`, s);
        }
        this.clearServerStatus(r.identifier), this.setToolsCache((s)=>{
            const { [r.identifier]: o, ...a } = s;
            return a;
        }), this.setPromptsCache((s)=>{
            const { [r.identifier]: o, ...a } = s;
            return a;
        }), this.setInstructionsCache((s)=>{
            const { [r.identifier]: o, ...a } = s;
            return a;
        }), this.clearElicitationRequestsForServer(r.identifier);
    }
    async _handleMcpConfigFileChange(t, e, n) {
        Tu(`[MCPService] Handling MCP config file change: ${t.toString()}`, e);
        const i = await this.parseMcpServersFromFile(t, e), r = new Map(i.map((l)=>[
                l.identifier,
                l
            ]));
        for (const l of n){
            const c = r.get(l.identifier);
            if (!c) Tu(`[MCPService] Server removed, deleting client: ${l.identifier}`), await this.deleteClient(l, "config_server_removed"), l.type === "streamableHttp" && await this.clearServerOAuthState(l.identifier, "config_server_removed", l);
            else {
                let u = !1;
                try {
                    const d = this.computeServerConfigHash(l), h = this.computeServerConfigHash(c);
                    u = d !== h;
                } catch  {
                    u = JSON.stringify(l) !== JSON.stringify(c);
                }
                u ? (Tu(`[MCPService] Server modified (hash changed), deleting old client and removing approval: ${l.identifier}`), await this.deleteClient(l, "config_server_modified"), l.type === "streamableHttp" && await this.clearServerOAuthState(l.identifier, "config_server_modified", l), l.projectManaged && (this.removeServerApproval(l), this.previouslyKnownServerIds.delete(l.identifier))) : l.placement !== c.placement && (Tu(`[MCPService] Server placement declaration changed, deleting old client: ${l.identifier}`), await this.deleteClient(l, "config_placement_changed"));
            }
        }
        const s = [];
        for (const l of i)this.previouslyKnownServerIds.has(l.identifier) || (s.push(l), this.previouslyKnownServerIds.add(l.identifier));
        s.length > 0 && this.savePreviouslyKnownServerIds();
        for (const l of s){
            const c = this.getCommandForLogging(l.command, l.args);
            this.analyticsService.trackEvent("mcp.installed", {
                name: l.name,
                url: l.url,
                command: c,
                deeplink: !1
            });
        }
        const o = h2(this.environmentService.remoteAuthority);
        if (!!0 && !o && !this.environmentService.suppressPopupsOnStartup) for (const l of s)Tu(`[MCPService] New server detected: ${l.identifier} (projectManaged: ${e.projectManaged})`), this.isServerEnabled(l) ? Tu(`[MCPService] Server ${l.identifier} is already enabled, skipping notification`) : this.notificationService.prompt(Yn.Info, `New MCP server detected: ${l.name}`, [
            {
                label: "Enable",
                run: ()=>{
                    this.isServerEnabled(l) || (this.toggleServerEnabled(l), e.projectManaged && this.reloadClient(l.identifier));
                }
            },
            {
                label: "Skip",
                run: ()=>{}
            },
            {
                label: "Ignore",
                isSecondary: !0,
                run: ()=>{}
            }
        ], {
            sticky: !0
        });
        else Tu("[MCPService] Skipping server detection notifications (disabled or BC/Pod window)");
        return i;
    }
    getMetricSafeErrorName(t) {
        return t instanceof Error && t.name.trim().length > 0 ? t.name : "unknown_error";
    }
    recordOAuthStateClearMetric(t, e, n) {
        const i = {
            cause: t,
            result: e
        };
        n?.errorName !== void 0 && (i.error_name = n.errorName), n?.detail !== void 0 && (i.detail = n.detail), this.metricsService.increment({
            stat: "mcp.oauth_state_cleared",
            value: n?.value,
            tags: i
        });
    }
    recordOAuthNeedsAuthMetric(t) {
        this.metricsService.increment({
            stat: "mcp.oauth_needs_auth",
            tags: {
                cause: t
            }
        });
    }
    async runMcpCommandWithTimeout(t, e, n) {
        const i = await this.getProvider();
        if (!i) throw new Error("No provider found");
        const r = new AbortController;
        return Kzt(()=>i.runCommand(t, e, r.signal), n, `mcp.runCommand.${t}`, r);
    }
    async clearServerOAuthState(t, e = "manual_or_external", n, i) {
        const r = tal(e) ? "hard" : "identifier", s = r === "hard" ? i?.notifySharedStateChange ?? !0 : !1, o = n?.type === "streamableHttp" ? n.url : void 0;
        if (this._logOAuth("info", `[MCPService] OAuth clear candidate for server: ${t} (cause=${e})`, void 0, {
            identifier: t,
            cause: e,
            notifySharedStateChange: s,
            serverType: n?.type,
            dashboardManaged: n?.dashboardManaged ?? !1,
            serverUrl: o
        }), this.shouldUseMcpProcessClient(t, n)) try {
            await (await this.getMcpClient(t, n?.name, n)).logoutServer(), this.recordOAuthStateClearMetric(e, "success", {
                detail: "mcp_process"
            });
            return;
        } catch (c) {
            const u = this.getMetricSafeErrorName(c);
            throw this.recordOAuthStateClearMetric(e, "error", {
                errorName: u,
                detail: "mcp_process"
            }), c;
        }
        const a = r === "identifier" ? {
            identifier: t,
            serverUrl: o,
            mode: "identifier",
            cause: e
        } : {
            identifier: t,
            serverUrl: o,
            mode: "hard",
            deleteSharedOAuthState: s,
            notifySharedStateChange: s,
            cause: e
        }, l = r === "identifier" ? "clearing identifier-scoped" : "clearing";
        Tu(`[MCPService] ${l} OAuth state for server: ${t}`), this._logOAuth("info", `[MCPService] ${l} OAuth state for server: ${t} (cause=${e})`, void 0, {
            identifier: t,
            cause: e,
            clearMode: a.mode,
            serverUrl: o
        });
        try {
            if (!(await this.runMcpCommandWithTimeout(RP.LogoutServer, a, this._getMcpIpcTimeouts().lifecycleTimeoutMs))?.success) {
                this.recordOAuthStateClearMetric(e, "error", {
                    errorName: "logout_command_failed",
                    detail: r
                }), this._logOAuth("warn", `[MCPService] LogoutServer command did not clear OAuth state for server: ${t} (cause=${e})`, void 0, {
                    identifier: t,
                    cause: e
                });
                return;
            }
            this.recordOAuthStateClearMetric(e, "success", {
                detail: r
            }), this._logOAuth("info", `[MCPService] ${r === "identifier" ? "Cleared identifier-scoped" : "Cleared"} OAuth state for server: ${t} (cause=${e})`, void 0, {
                identifier: t,
                cause: e,
                clearMode: a.mode,
                serverUrl: o
            }), Tu(`[MCPService] Successfully ${r === "identifier" ? "cleared identifier-scoped" : "cleared"} OAuth state for server: ${t}`);
        } catch (c) {
            const u = this.getMetricSafeErrorName(c);
            this.recordOAuthStateClearMetric(e, "error", {
                errorName: u,
                detail: r
            }), this._logOAuth("error", `[MCPService] Error clearing OAuth state for server: ${t} (cause=${e}, error=${u})`, c instanceof Error ? c : void 0, {
                identifier: t,
                cause: e,
                errorName: u
            }), O0(`[MCPService] Error clearing OAuth state for server ${t}:`, c);
        }
    }
    async dashboardMcpSharedOAuthGet(t) {
        return {
            entries: []
        };
    }
    async dashboardMcpSharedOAuthStore(t) {
        return {
            applied: !1,
            skippedBecauseBackendNewer: !1
        };
    }
    async dashboardMcpSharedOAuthDelete(t) {}
    async dashboardMcpOAuthRefreshLockBegin(t) {
        return {
            outcome: "skipped",
            enforce: !1
        };
    }
    async dashboardMcpOAuthRefreshLockRelease(t) {}
    async dashboardMcpSharedOAuthNotifyStateChanged(t) {
        if (!this.isMcpOAuthFanoutEnabled() || !t.serverUrl || !t.change) return;
        const e = R4e(t.serverUrl);
        this._logOAuth("info", "[MCPService] Fanout shared OAuth state change", void 0, {
            serverUrl: e,
            change: t.change,
            sourceIdentifier: t.identifier,
            sourceWorkspaceId: t.sourceWorkspaceId,
            dispatchMode: "queued"
        }), this.enqueueSharedOAuthFanout({
            serverUrl: t.serverUrl,
            change: t.change,
            sourceIdentifier: t.identifier,
            sourceWorkspaceId: t.sourceWorkspaceId,
            cause: t.cause,
            saveKind: t.saveKind
        });
    }
    async handleSharedOAuthStateChanged(t) {
        if (!this.isMcpOAuthFanoutEnabled()) return;
        const e = R4e(t.serverUrl), n = this.allServers().filter((i)=>i.type === "streamableHttp" && typeof i.url == "string" && R4e(i.url) === e);
        for (const i of n){
            const r = this.statusCache()[i.identifier], s = !!(t.sourceIdentifier && i.identifier === t.sourceIdentifier && t.sourceServiceInstanceId !== void 0 && t.sourceServiceInstanceId === this.sharedOAuthFanoutServiceInstanceId), o = this.isServerEnabled(i);
            if (!s && t.change !== "client_info_saved") {
                if (t.change === "tokens_saved") {
                    if (!o || r?.type === "connected" || r?.type === "degraded") continue;
                    if (t.saveKind === "refresh" && r?.type === "needsAuth") {
                        this._logOAuth("info", "[MCPService] Fanout skipped for needsAuth sibling on refresh save", void 0, {
                            event: "mcp_oauth_fanout_skipped_refresh_needs_auth",
                            sourceIdentifier: t.sourceIdentifier,
                            sourceWorkspaceId: t.sourceWorkspaceId,
                            sourceServiceInstanceId: t.sourceServiceInstanceId,
                            serverUrlHost: (()=>{
                                try {
                                    return new URL(t.serverUrl).host;
                                } catch  {
                                    return;
                                }
                            })(),
                            targetIdentifier: i.identifier,
                            localServiceInstanceId: this.sharedOAuthFanoutServiceInstanceId
                        });
                        continue;
                    }
                    this._logOAuth("info", "[MCPService] Fanout applied to sibling server", void 0, {
                        event: "mcp_oauth_fanout_applied",
                        changeKind: t.change,
                        saveKind: t.saveKind,
                        sourceIdentifier: t.sourceIdentifier,
                        sourceWorkspaceId: t.sourceWorkspaceId,
                        sourceServiceInstanceId: t.sourceServiceInstanceId,
                        serverUrlHost: (()=>{
                            try {
                                return new URL(t.serverUrl).host;
                            } catch  {
                                return;
                            }
                        })(),
                        didOverwriteLocalState: !0,
                        previousStatusType: r?.type,
                        targetIdentifier: i.identifier,
                        localServiceInstanceId: this.sharedOAuthFanoutServiceInstanceId
                    });
                    try {
                        await this.reloadClient(i.identifier);
                    } catch (a) {
                        const l = a instanceof Error ? a.message : String(a);
                        this._logOAuth("warn", "[MCPService] Shared OAuth save fanout reload failed", a, {
                            identifier: i.identifier,
                            serverUrl: e
                        }), this.updateServerStatus(i.identifier, {
                            type: "error",
                            error: `OAuth fanout reload failed: ${l}`
                        });
                    }
                    continue;
                }
                try {
                    const a = t.cause ?? "manual_or_external";
                    tal(a) ? (this._logOAuth("info", "[MCPService] Fanout applied to sibling server", void 0, {
                        event: "mcp_oauth_fanout_applied",
                        changeKind: t.change,
                        sourceIdentifier: t.sourceIdentifier,
                        sourceWorkspaceId: t.sourceWorkspaceId,
                        sourceServiceInstanceId: t.sourceServiceInstanceId,
                        serverUrlHost: (()=>{
                            try {
                                return new URL(t.serverUrl).host;
                            } catch  {
                                return;
                            }
                        })(),
                        didOverwriteLocalState: !0,
                        previousStatusType: r?.type,
                        targetIdentifier: i.identifier,
                        localServiceInstanceId: this.sharedOAuthFanoutServiceInstanceId
                    }), await this.clearServerOAuthState(i.identifier, a, i, {
                        notifySharedStateChange: !1
                    })) : this._logOAuth("info", "[MCPService] OAuth clear trigger skipped for shared OAuth fanout clear", void 0, {
                        identifier: i.identifier,
                        cause: a,
                        serverUrl: e,
                        serverType: i.type,
                        dashboardManaged: i.dashboardManaged ?? !1,
                        sourceIdentifier: t.sourceIdentifier,
                        sourceWorkspaceId: t.sourceWorkspaceId,
                        skipped: !0
                    }), t.cause !== void 0 && tal(t.cause) && o && await this.reloadClient(i.identifier);
                } catch (a) {
                    const l = a instanceof Error ? a.message : String(a);
                    this._logOAuth("warn", "[MCPService] Shared OAuth clear fanout failed", a, {
                        identifier: i.identifier,
                        serverUrl: e
                    }), this.updateServerStatus(i.identifier, {
                        type: "error",
                        error: `OAuth fanout clear failed: ${l}`
                    });
                }
            }
        }
    }
    async logoutServer(t) {
        if (Tu(`[MCPService] Logging out server: ${t.identifier}`), t.type !== "streamableHttp") {
            Cle(`[MCPService] Logout not applicable for server type: ${t.type}`);
            return;
        }
        try {
            await this.clearServerOAuthState(t.identifier, "user_logout", t), await this.reloadClient(t.identifier), Tu(`[MCPService] Successfully logged out server: ${t.identifier}`);
        } catch (e) {
            O0(`[MCPService] Error logging out server ${t.identifier}:`, e), this.updateServerStatus(t.identifier, {
                type: "error",
                error: e instanceof Error ? e.message : String(e)
            });
        }
    }
    async cancelOAuthAuthorization(t) {
        try {
            await this.runMcpCommandWithTimeout(RP.CancelOAuthAuthorization, {
                identifier: t
            }, this._getMcpIpcTimeouts().lifecycleTimeoutMs);
        } catch (e) {
            this._logOAuth("warn", `[MCPService] Failed to cancel OAuth authorization for server: ${t}`, e, {
                identifier: t
            });
        }
    }
    async getConfigFileUri(t) {
        if (t?.projectManaged) {
            const n = this.contextService.getWorkspace().folders.find((i)=>this.folderToKey(i) === t.projectPath);
            if (n) return this.uriIdentityService.extUri.joinPath(n.uri, ".cursor", "mcp.json");
        }
        return this.getUserConfigFilePath();
    }
    async openConfigFile(t) {
        const e = await this.getConfigFileUri(t);
        t?.projectManaged || await this.fileService.exists(e) || await this.fileService.writeFile(e, Tr.fromString(JSON.stringify({
            mcpServers: {}
        }, null, 2))), await this.commandService.executeCommand("vscode.open", e);
    }
    async removeServer(t) {
        if (Tu(`[MCPService] Removing server: ${t.identifier}`), wH1(t)) {
            Cle(`[MCPService] Cannot remove managed server locally: ${t.identifier}.`);
            return;
        }
        try {
            await this.deleteClient(t, "server_removed"), t.type === "streamableHttp" && await this.clearServerOAuthState(t.identifier, "server_removed", t), t.projectManaged && t.projectPath ? await this.removeServerFromProjectConfig(t) : await this.removeServerFromUserConfig(t), Tu(`[MCPService] Successfully removed server: ${t.identifier}`);
        } catch (e) {
            throw O0(`[MCPService] Error removing server ${t.identifier}:`, e), e;
        }
    }
    async removeServerFromProjectConfig(t) {
        const n = this.contextService.getWorkspace().folders.find((r)=>this.folderToKey(r) === t.projectPath);
        if (!n) throw new Error(`Project folder not found for server: ${t.identifier}`);
        const i = this.uriIdentityService.extUri.joinPath(n.uri, ".cursor", "mcp.json");
        await this.removeServerFromConfigFile(t, i);
    }
    async removeServerFromUserConfig(t) {
        const e = await this.getUserConfigFilePath();
        await this.removeServerFromConfigFile(t, e);
    }
    async removeServerFromConfigFile(t, e) {
        try {
            if (!await this.fileService.exists(e)) {
                Tu(`[MCPService] Config file does not exist, server already removed: ${e.toString()}`);
                return;
            }
            const i = await this.fileService.readFile(e), r = $Tt(i.value.toString());
            r.mcpServers && r.mcpServers[t.name] && (delete r.mcpServers[t.name], await this.fileService.writeFile(e, Tr.fromString(JSON.stringify(r, null, 2))), Tu(`[MCPService] Removed server ${t.name} from ${e.toString()}`));
        } catch (n) {
            throw O0(`[MCPService] Error removing server from ${e.toString()}:`, n), n;
        }
    }
    folderToKey(t) {
        return `${t.index}-${t.name}`;
    }
    getCommandForLogging(t, e) {
        if (!t) return "";
        const n = e && e.length > 0 ? `${t} ${e.join(" ")}` : t;
        return n.startsWith("npx") ? n.split(" ").slice(0, 3).join(" ") : n.startsWith("uvx") ? n.split(" ").slice(0, 2).join(" ") : "custom";
    }
    async clearAllTokens() {
        Tu("[MCPService] Clearing all OAuth tokens for MCP servers"), this._logOAuth("info", "[MCPService] Clearing OAuth state for all MCP servers (cause=clear_all_tokens)", void 0, {
            cause: "clear_all_tokens"
        });
        try {
            const t = await this.runMcpCommandWithTimeout(RP.ClearAllTokens, {}, this._getMcpIpcTimeouts().lifecycleTimeoutMs);
            if (!t?.success) {
                this.recordOAuthStateClearMetric("clear_all_tokens", "error", {
                    errorName: "clear_all_tokens_command_failed"
                }), this._logOAuth("warn", "[MCPService] ClearAllTokens command did not clear OAuth state", void 0, {
                    cause: "clear_all_tokens"
                });
                return;
            }
            const e = t.cleared?.length ?? 0;
            this.recordOAuthStateClearMetric("clear_all_tokens", "success", {
                value: e
            }), this._logOAuth("info", `[MCPService] Cleared OAuth state for ${e} server(s) (cause=clear_all_tokens)`, void 0, {
                cause: "clear_all_tokens",
                clearedCount: e
            }), Tu("[MCPService] Successfully cleared all OAuth tokens");
        } catch (t) {
            const e = this.getMetricSafeErrorName(t);
            this.recordOAuthStateClearMetric("clear_all_tokens", "error", {
                errorName: e
            }), this._logOAuth("error", `[MCPService] Error clearing all OAuth tokens (cause=clear_all_tokens, error=${e})`, t instanceof Error ? t : void 0, {
                cause: "clear_all_tokens",
                errorName: e
            }), O0("[MCPService] Error clearing all tokens:", t);
        }
    }
    computeServerConfigHash(t) {
        const e = [
            "command",
            "args",
            "env",
            "envFile",
            "url",
            "headers",
            "auth"
        ], n = {};
        for (const r of e)r in t && (n[r] = t[r]);
        const i = JSON.stringify(n);
        return tR(i).toString(16).substring(0, 16);
    }
    computeApprovalKey(t) {
        const e = this.computeServerConfigHash(t);
        return `${t.identifier}:${e}`;
    }
    async loadEnvFile(t, e) {
        try {
            Tu(`[MCPService] Loading envFile: ${t}`), Tu(`[MCPService] Workspace folder: ${e?.uri.toString() || "none"}`);
            const n = eMe.parse({
                envFile: t
            }), r = (await this.configurationResolverService.resolveAsync(e, n)).envFile;
            if (!r) return {};
            let s;
            if (r.startsWith("/") || r.match(/^[a-zA-Z]:/)) s = rt.file(r);
            else {
                let u = e?.uri;
                if (!u) {
                    const h = this.composerDataService.selectedComposer?.gitWorktree?.worktreePath;
                    h ? u = rt.file(h) : u = this.contextService.getWorkspace().folders[0]?.uri;
                }
                if (!u) return Cle(`[MCPService] No workspace folder available to resolve relative envFile path: ${r}`), {};
                s = rt.joinPath(u, r);
            }
            const a = (await this.fileService.readFile(s)).value.toString(), l = {}, c = a.split(`
`);
            for(let u = 0; u < c.length; u++){
                const h = c[u].trim();
                if (!h || h.startsWith("#")) continue;
                const p = h.indexOf("=");
                if (p === -1) continue;
                const g = h.substring(0, p).trim();
                let f = h.substring(p + 1).trim();
                (f.startsWith('"') && f.endsWith('"') || f.startsWith("'") && f.endsWith("'")) && (f = f.slice(1, -1)), g && (l[g] = f);
            }
            return l;
        } catch (n) {
            return Cle(`[MCPService] Failed to load envFile ${t}:`, n), {};
        }
    }
    async resolveServerVariables(t) {
        try {
            const e = t.projectPath ? this.contextService.getWorkspace().folders.find((h)=>this.folderToKey(h) === t.projectPath) : this.contextService.getWorkspace().folders[0];
            let n = {};
            t.envFile && (n = await this.loadEnvFile(t.envFile, e));
            const i = {
                ...n,
                ...t.env
            }, r = {
                command: t.command,
                args: t.args,
                env: i,
                url: t.url,
                headers: t.headers,
                envFile: t.envFile,
                auth: t.auth
            }, s = qol(r), o = eMe.parse(s), a = await this.configurationResolverService.resolveAsync(e, o);
            let l = t.type === "streamableHttp" && a.url ? await this.resolveDefaultAuth(a.url, a.auth) : a.auth;
            const c = afk(t.auth?.CLIENT_ID, l?.CLIENT_ID);
            c !== void 0 && c !== l?.CLIENT_ID && (l = {
                ...l ?? {},
                CLIENT_ID: c
            });
            const u = t.type === "streamableHttp" ? await this.withRestMcpCursorAuthHeader(a.url, a.headers) : a.headers;
            return {
                ...t,
                command: a.command,
                args: a.args,
                env: a.env,
                url: a.url,
                headers: u,
                envFile: a.envFile,
                auth: l
            };
        } catch (e) {
            return O0(`[MCPService] Failed to resolve variables for server ${t.identifier}:`, e), Dk(this.structuredLogService, "warn", `[MCPService] Failed to resolve variables for server ${t.identifier}`, e instanceof Error ? e : void 0, {
                subkey: "resolve_variables",
                identifier: t.identifier,
                serverName: t.name
            }), t;
        }
    }
    async withRestMcpCursorAuthHeader(t, e) {
        if (t === void 0 || PIo(t) === void 0 || Object.keys(e ?? {}).some((r)=>r.toLowerCase() === OIo)) return e;
        const i = await this.cursorAuthenticationService.getAccessToken();
        return i ? {
            ...e ?? {},
            [OIo]: `Bearer ${i}`
        } : e;
    }
    async disableServersByName(t) {
        if (!t || t.length === 0) return;
        Tu("[MCPService] Disabling servers by name:", t);
        const e = this.getServers(), n = [];
        for (const i of e)t.includes(i.name) && this.isServerEnabled(i) && (n.push(i), Tu(`[MCPService] Found enabled server to disable: ${i.name} (${i.identifier})`));
        if (n.length > 0) {
            const i = [
                ...this.disabledMcpServers.get()
            ], r = [
                ...this.disabledGlobalMcpServers.get()
            ];
            let s = !1, o = !1;
            for (const a of n){
                const l = this.useProfileScopedGlobalMcpDisabledState && !a.projectManaged, c = l ? r : i;
                c.includes(a.identifier) || (c.push(a.identifier), l ? o = !0 : s = !0), await this.deleteClient(a, "server_disabled_by_name"), Tu(`[MCPService] Disabled server: ${a.name} (${a.identifier})`);
            }
            s && this.disabledMcpServers.set(i, void 0), o && this.setDisabledGlobalMcpServers(r), Tu(`[MCPService] Successfully disabled ${n.length} server(s)`);
        } else Tu("[MCPService] No enabled servers found matching the provided names");
    }
    _emitHostedPlacementRowTransition(t) {
        const { server: e, resolved: n } = t, i = this.hostedMcpPlacementService.listedRowFor({
            identifier: n.identifier,
            url: n.url,
            isHttp: n.type === "streamableHttp"
        });
        this.metricsService.increment({
            stat: Glg,
            value: 1,
            tags: {
                from: t.from,
                to: t.to,
                server_status: i?.status ?? "unlisted",
                source: this._deriveServerSource(e),
                scope: qfk(i)
            }
        });
    }
    _deriveServerSource(t) {
        return kPe(t);
    }
    _emitToolCallMetrics({ durationMs: t, status: e, source: n, transport: i, providerHost: r }) {
        e === "success" ? this._windowedCounters.toolCallSuccesses++ : this._windowedCounters.toolCallFailures++;
        const s = {
            status: e,
            source: n,
            transport: i ?? "unknown",
            provider_host: r ?? "unknown",
            mcp_version: "snapshots"
        };
        this.metricsService.increment({
            stat: "mcp.tool.calls",
            value: 1,
            tags: s
        }), this.metricsService.distribution({
            stat: "mcp.tool.call_duration_ms",
            value: t,
            tags: s
        });
    }
    _emitDiscoveryMetrics(t, e) {
        const n = {
            mcp_version: "snapshots"
        };
        this.metricsService.distribution({
            stat: "mcp.discovery.duration_ms",
            value: t,
            tags: n
        }), this.metricsService.distribution({
            stat: "mcp.discovery.tool_count",
            value: e,
            tags: n
        });
    }
    _emitStatusTransitionMetrics(t, e, n) {
        const i = e?.type ?? "none", r = n.type;
        r === "disconnected" && i === "connected" && this._windowedCounters.disconnects++, r === "connected" && i !== "connected" && i !== "none" && i !== "initializing" && this._windowedCounters.reconnects++, r === "error" && this._windowedCounters.errors++;
        const s = this._deriveServerSource(t), o = Z4e(t), a = "snapshots";
        if (this.metricsService.increment({
            stat: "mcp.connection.state_transitions",
            value: 1,
            tags: {
                source: s,
                transport: o,
                from: i,
                to: r,
                mcp_version: a
            }
        }), r === "disconnected" && i === "connected" && this.metricsService.increment({
            stat: "mcp.connection.disconnects",
            value: 1,
            tags: {
                source: s,
                transport: o,
                mcp_version: a
            }
        }), r === "connected" && i !== "connected" && i !== "none" && i !== "initializing" && this.metricsService.increment({
            stat: "mcp.connection.reconnects",
            value: 1,
            tags: {
                source: s,
                transport: o,
                mcp_version: a
            }
        }), r === "error") {
            const l = n.type !== "error" ? "unknown" : Vfk(n.error) ? "hosted_withheld" : Tie._classifyErrorReason(n.error);
            this.metricsService.increment({
                stat: "mcp.connection.errors",
                value: 1,
                tags: {
                    source: s,
                    transport: o,
                    mcp_version: a,
                    error_reason: l
                }
            });
        }
    }
    static _classifyErrorReason(t) {
        const e = t.toLowerCase();
        return e.includes("unauthorized") || e.includes("forbidden") || /\b401\b/.test(e) || /\b403\b/.test(e) ? "auth" : /\b(timeout|timed out|deadline exceeded)\b/.test(e) ? "timeout" : /\bsession\b/.test(e) && (/\b404\b/.test(e) || /invalid|terminat|not found/i.test(e)) ? "session_invalidated" : e.match(/\b(5\d{2})\b/) ? "http_5xx" : e.match(/\b(4\d{2})\b/) && !e.includes("unauthorized") && !e.includes("forbidden") ? "http_4xx" : /\b(econnrefused|econnreset|enotfound|epipe|ehostunreach|enetunreach|fetch failed|network)\b/.test(e) ? "network" : e.includes("client closed") || e.includes("process exited") || e.includes("spawn") || e.includes("enoent") ? "process" : "unknown";
    }
}, Tie._SNAPSHOT_WATCHDOG_INITIAL_DELAY_MS = 5e3, Tie._SNAPSHOT_WATCHDOG_RETRY_DELAY_MS = 15e3, Tie._HOSTED_MCP_PLACEMENT_INITIAL_FETCH_TIMEOUT_MS = 1e4, Tie.GOOGLE_WORKSPACE_MCP_HOSTS = qnd, Tie = Re([
    _R(0, ki),
    _R(1, fX),
    _R(2, sa),
    _R(3, yr),
    _R(4, is),
    _R(5, nh),
    _R(6, EX),
    _R(7, Rd),
    _R(8, fc),
    _R(9, Wr),
    _R(10, uk),
    _R(11, lb),
    _R(12, nr),
    _R(13, VI),
    _R(14, Qr),
    _R(15, Cl),
    _R(16, ime),
    _R(17, ss),
    _R(18, Cr),
    _R(19, zCe),
    _R(20, cG),
    _R(21, X4e),
    _R(22, yi),
    _R(23, no),
    _R(24, pA),
    _R(25, Uh),
    _R(26, Obe),
    _R(27, wh),
    _R(28, id),
    _R(29, iV),
    _R(30, tAn),
    _R(31, _at),
    _R(32, Qb),
    _R(33, UPe)
], Tie);

}
