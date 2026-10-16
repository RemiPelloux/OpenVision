import { KAv, T_e, YAv, dso, kPe, qJe } from "./A3u.js";
import { S_, Th, qh } from "./De_3.js";
import { AKv, BKv, BZi, DKv, FKv, GZi, IKv, Jkh, K5, KCo, KE, MKv, NKv, OKv, Pkh, Qkh, RKv, VZi, Yzv, Zkh, _wh, a0o, bwh, c0o, cLe, jCo, kwh, l0o, nKv, o0o, pKv, q1e, qzv, r0o, s0o, tKv, u0o, wCt, wwh, xKv, y3n } from "./ECo.js";
import { Cl, Ct, Fo, He, Hp, Se, bt, cn, mge, po, ve, we, wi } from "./HVr.js";
import { ie } from "./actions_2.js";
import { Wzv } from "./admin-mcp-policy.ts";
import { gkh } from "./admin-mcp-tool-allowlist.ts";
import { R1, pw } from "./adminSettingsService.js";
import { M$, xX } from "./aiEverythingProviderService.js";
import { ca, la } from "./aiMiscServices.js";
import { dw, tE } from "./aiServerConfigService.js";
import { q5, uq } from "./appLayoutService.js";
import { bn } from "./async.js";
import { Za, na } from "./authenticationService.js";
import { nb } from "./bcIdFromAuthority.js";
import { njt, yCt } from "./browserAutomationService.js";
import { Zzv } from "./browser_3.ts";
import { Ar } from "./cancellation.js";
import { Ctt, Tzv } from "./cgh.js";
import { $n, vi } from "./commands.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { AA, xC } from "./composerModesServiceTypes.js";
import { Cn, qt } from "./configuration.js";
import { lG, yq } from "./configurationResolver.js";
import { SCt, z_e } from "./configurationResolverExpression.js";
import { uwh } from "./cursorBackendMcpToolDisplay.js";
import { H$, zX } from "./environmentService_3.js";
import { Kr, qs } from "./experimentService.js";
import { Ma, hc } from "./extensions_4.js";
import { Fi, Ii } from "./files.js";
import { T_ } from "./hash.js";
import { B_e, GX, JOn, aYi } from "./hostedMcpPlacementService.js";
import { Ml } from "./index.ts";
import { z3 } from "./index_10.ts";
import { Gp } from "./index_3.ts";
import { r2, v3 } from "./jsonContributionRegistry.js";
import { vCt } from "./jsonc_2.js";
import { JYr, Qn, h1 } from "./log.js";
import { VCo } from "./mcp-tool-annotations_2.ts";
import { wbo } from "./mcp-url-utils.ts";
import { $qc, Pmt, los } from "./mcp.ts";
import { b3n, rjt } from "./mcpConfigService.js";
import { O$, Vee, Xkt, Ykt, v1e } from "./mcpConstants.js";
import { eKv } from "./mcpEnvExpansion.js";
import { UZi } from "./mcpProcessRouting.js";
import { dFn } from "./mcpProcessServerIdentifier.js";
import { Ett, kCt } from "./mcpProcessSnapshotFanoutService.js";
import { l8e, rLe } from "./mcpProviderService.js";
import { Kkh, Qzv, Ykh, qkh, zkh } from "./mcpSchema.js";
import { MR } from "./mcpServiceTypes.js";
import { iKv } from "./mcpSnapshotMapping.js";
import { ZOn } from "./mcpUtils.js";
import { S1e, k1e } from "./mcpWellKnownDetection.js";
import { Cp, vp } from "./metricsService.js";
import { di, ji, pi } from "./notification.js";
import { bu } from "./objects.js";
import { fu, zl } from "./pathService.js";
import { kn, rr } from "./platform_2.js";
import { EN, lF } from "./pluginsProviderService.js";
import { Ka, jo } from "./productService.js";
import { Jt, Ut, _R, bM, cC, e0g, qn, ros, xO, yh } from "./qIc.js";
import { Gs, Ya } from "./quickInput.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { $x, Vp } from "./reactiveStorageTypes_2.js";
import { DR } from "./remoteAuthorityResolver.js";
import { Gkh } from "./resolved-oauth-client-id.ts";
import { Li, ml } from "./resources.js";
import { nXs } from "./solidExports.js";
import { Vn, yn } from "./storage_2.js";
import { Xh, im } from "./structuredLog.js";
import { Nkh } from "./triggersNamingGate.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Ea, rl } from "./uriIdentity.js";
import { Ku } from "./utilities_3.js";
import { xge } from "./utils_10.js";
import { U6, XU } from "./workbenchCommandRegistry.js";
import { Jn, ci } from "./workspace.js";
import { B7v, CMv, Nwt, PUv, dy, owt, pyo, s8v, zUe } from "./xmo.js";
var h0o, p0o, lE, sjt, ojt, Cwh, Twh, Ewh, m0o, g0o, S3n, ol, JX, ek, xwh, f0o, v0o, jZi, qZi, _0o, zZi, b0o, y0o, S0o, Iwh, k0o, w0o, Awh, C0o, Rwh, KZi, ajt, cjt, ljt, Dwh, Mwh, T0o, CCt, Pwh, k3n, Lwh, Nwh, Sq;
export { Awh, C0o, CCt, Cwh, Dwh, Ewh, Iwh, JX, KZi, Lwh, Mwh, Nwh, Pwh, Rwh, S0o, S3n, Sq, T0o, Twh, _0o, ajt, b0o, cjt, ek, f0o, g0o, h0o, jZi, k0o, k3n, lE, ljt, m0o, ojt, ol, p0o, qZi, sjt, v0o, w0o, xwh, y0o, zZi };
var __wakaru_eZ_initialized = false;
export function eZ() {
if (__wakaru_eZ_initialized) return;
__wakaru_eZ_initialized = true;
"use strict";
x(), Ml(), nb(), Fo(), vCt(), bt(), xge(), T_(), bu(), bn(), Ar(), Se(), Li(), Qt(), vi(), Cn(), xX(), Fi(), v3(), ji(), Ka(), Ya(), Ha(), Ku(), Vp(), rr(), Qn(), Vn(), rl(), ci(), K5(), uq(), njt(), nl(), AA(), lG(), SCt(), zX(), DR(), R1(), Za(), tE(), qs(), Nkh(), fu(), ZOn(), la(), GX(), v1e(), Cp(), Gp(), Wzv(), gkh(), VCo(), z3(), wbo(), Zzv(), Gkh(), im(), owt(), dFn(), l8e(), Qzv(), eKv(), MR(), iKv(), uwh(), nXs(), qn(), lF(), UZi(), kCt(), k1e(), hc(), XU(), b3n(), MR(), h0o = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), p0o = (e)=>{
    throw TypeError(e);
}, lE = (e, t)=>(n, i)=>t(n, i, e), sjt = (e, t, n)=>{
    if (t != null) {
        typeof t != "object" && typeof t != "function" && p0o("Object expected");
        var i, r;
        n && (i = t[h0o("asyncDispose")]), i === void 0 && (i = t[h0o("dispose")], n && (r = i)), typeof i != "function" && p0o("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), e.push([
            n,
            i,
            t
        ]);
    } else n && e.push([
        n
    ]);
    return t;
}, ojt = (e, t, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, c, l) {
        return l = Error(c), l.name = "SuppressedError", l.error = o, l.suppressed = a, l;
    }, r = (o)=>t = n ? new i(o, t, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = e.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (c)=>(r(c), s()));
        } catch (c) {
            r(c);
        }
        if (n) throw t;
    };
    return s();
}, Ewh = {
    identifier: Pmt.identifier,
    name: "Origin",
    type: "streamableHttp",
    url: Pmt.serverUrl
}, m0o = "cursor-origin-readonly", g0o = class {
    constructor(e){
        this.timer = e.timer, this.serverIncarnationId = e.serverIncarnationId, this.baselineSnapshotGeneration = e.baselineSnapshotGeneration, this.attempt = e.attempt, this.startedAtMs = e.startedAtMs, this.reason = e.reason;
    }
    dispose() {
        this.timer.dispose();
    }
}, S3n = !1, ol = S3n ? console.info : ()=>{}, JX = S3n ? console.warn : ()=>{}, ek = S3n ? console.error : ()=>{}, xwh = S3n ? (e, t)=>{
    ol("[MCPService] Debug: Clearing known server IDs"), e.remove(t, 0);
} : ()=>{}, f0o = 6e4, v0o = 3e4, jZi = 1e4, qZi = {
    metadataTimeoutMs: jZi,
    lifecycleTimeoutMs: jZi,
    recoveryPerRetryTimeoutMs: jZi
}, _0o = "Cursor MCP extension host restarted; reconnecting", zZi = "mcp.refreshSnapshot", b0o = 4, y0o = "mcp.sharedOAuthFanoutEvent.", S0o = 2e3, Iwh = 5 * 6e4, k0o = Symbol("MCP_METADATA_ABORT_ERROR"), w0o = class extends (Twh = Error, Cwh = k0o, Twh) {
    constructor(e){
        super(e), this[Cwh] = !0, this.isMcpMetadataAbortError = !0, this.name = "McpMetadataAbortError";
    }
}, Awh = class extends w0o {
    constructor(e, t){
        super(`MCP IPC timeout: ${e} exceeded ${t}ms`), this.name = "McpIpcTimeoutError";
    }
}, C0o = class {
    constructor(e, t, n, i, r, s){
        this.everythingProviderService = e, this.metricsService = t, this.connectionType = n, this.serverId = i, this.getTimeouts = r, this.serverName = s;
    }
    async getProvider() {
        return await this.everythingProviderService.waitForCommandEverythingProvider(f0o, $x.CreateClient);
    }
    async _timedRunCommand(e, t) {
        var n = [];
        try {
            const s = sjt(n, S_(qh().withName(`mcp.runCommand.${e}`)));
            return s.span.setAttribute("mcp.ipc.connection_type", this.connectionType), await o0o(s.span, e, this.metricsService, async ()=>{
                const o = await this.getProvider();
                if (!o) throw new Error("No provider found");
                const a = this.getTimeoutMsForAction(e);
                if (a === void 0) return await o.runCommand(e, t);
                const c = new AbortController;
                return await wCt(async ()=>await o.runCommand(e, t, c.signal), a, `mcp.runCommand.${e}`, c);
            });
        } catch (s) {
            var i = s, r = !0;
        } finally{
            ojt(n, i, r);
        }
    }
    getTimeoutMsForAction(e) {
        const t = this.getTimeouts();
        switch(e){
            case $x.ListOfferings:
            case $x.ListToolsRaw:
            case $x.GetInstructions:
                return t.metadataTimeoutMs;
            case $x.CreateClient:
            case $x.DeleteClient:
            case $x.ReloadClient:
                return t.lifecycleTimeoutMs;
            default:
                return;
        }
    }
    async callTool(e, t, n) {
        var i = [];
        try {
            const { abortSignal: o } = n;
            o?.throwIfAborted();
            const a = sjt(i, S_(qh().withName(`mcp.runCommand.${$x.CallTool}`)));
            return a.span.setAttribute("mcp.ipc.connection_type", this.connectionType), a.span.setAttribute("mcp.tool_name", e), await o0o(a.span, $x.CallTool, this.metricsService, async ()=>{
                const c = await this.getProvider();
                if (!c) throw new Error("No provider found");
                const l = c.runCommand($x.CallTool, {
                    name: e,
                    args: t,
                    identifier: this.serverId,
                    toolCallId: n.toolCallId,
                    composerId: n.composerId,
                    useLeaseElicitation: n.useLeaseElicitation
                });
                let u;
                return o ? u = await Promise.race([
                    l,
                    new Promise((h, p)=>{
                        o.addEventListener("abort", ()=>{
                            p(new Error("Tool call was cancelled"));
                        });
                    })
                ]) : u = await l, u?.result;
            });
        } catch (o) {
            var r = o, s = !0;
        } finally{
            ojt(i, r, s);
        }
    }
    async getPrompt(e, t) {
        return (await this._timedRunCommand($x.GetPrompt, {
            identifier: this.serverId,
            name: e,
            args: t
        }))?.result;
    }
    async readResource(e) {
        return (await this._timedRunCommand($x.ReadResource, {
            identifier: this.serverId,
            uri: e
        }))?.result;
    }
    async listOfferings() {
        return this._timedRunCommand($x.ListOfferings, {
            identifier: this.serverId
        });
    }
    async listToolsRaw() {
        return (await this._timedRunCommand($x.ListToolsRaw, {
            identifier: this.serverId
        }))?.tools ?? [];
    }
    async createClient(e) {
        return this._timedRunCommand($x.CreateClient, {
            identifier: this.serverId,
            serverInfo: e,
            serverName: this.serverName
        });
    }
    async deleteClient(e) {
        await this._timedRunCommand($x.DeleteClient, {
            identifier: this.serverId,
            reason: e
        });
    }
    async reloadClient(e, t) {
        return this._timedRunCommand($x.ReloadClient, {
            identifier: this.serverId,
            serverInfo: e,
            serverName: this.serverName,
            armLoopback: t === "authenticate"
        });
    }
    async logoutServer() {
        await this._timedRunCommand($x.LogoutServer, {
            identifier: this.serverId
        });
    }
    async clearAllTokens() {
        await this._timedRunCommand($x.ClearAllTokens, {});
    }
}, Rwh = class {
    constructor(e, t, n){
        this.mcpProviderService = e, this.serverId = t, this.getTimeouts = n;
        const i = this.mcpProviderService.getMcpProvider(this.serverId);
        if (!i) throw new Error(`MCP provider with id '${this.serverId}' not found`);
        this.provider = i;
    }
    async callTool(e, t, n) {
        const { abortSignal: i } = n;
        if (i?.throwIfAborted(), !this.provider) throw new Error(`MCP provider with id '${this.serverId}' not found`);
        const r = this.provider.callTool(e, t, {
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
    async getPrompt(e, t) {}
    async readResource(e) {}
    async listOfferings() {
        if (!this.provider) throw new Error(`MCP provider with id '${this.serverId}' not found`);
        const e = this.getTimeouts().metadataTimeoutMs;
        return wCt(()=>this.provider.listOfferings(), e, "mcpProviderServiceClient.listOfferings");
    }
    async listToolsRaw() {
        const e = await this.listOfferings();
        return e?.tools ? e.tools.map((t)=>({
                name: t.name,
                description: t.description || void 0,
                inputSchema: t.parameters ? JSON.parse(t.parameters) : void 0
            })) : [];
    }
    async createClient(e) {}
    async deleteClient(e) {}
    async reloadClient(e) {
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
}, KZi = 3, ajt = "Server is blocked by team admin", cjt = "Server is not on the team network allowlist", ljt = {
    server_placed: aYi,
    placement_unknown: JOn
}, Dwh = new Set([
    ajt,
    cjt,
    ...Object.values(ljt)
]), Mwh = "mcp.hosted_placement.row_transition", T0o = "mcp_access_network_allowlist", CCt = "mcp_settings_overhaul", Pwh = new Set([
    "all",
    "off",
    "custom"
]), k3n = class {
    constructor(e){
        this.consecutiveFailures = 0, this.client = e.client, this.serverId = e.serverId, this.shouldAttemptRecoveryConservative = e.shouldAttemptRecoveryConservative, this.shouldAttemptRecoveryForToolCall = e.shouldAttemptRecoveryForToolCall, this.getTimeouts = e.getTimeouts, this.recreateClient = e.recreateClient, this.reloadClientAfterFailedRecreate = e.reloadClientAfterFailedRecreate, this.onRecoverySuccess = e.onRecoverySuccess, this.onRecoveryFailure = e.onRecoveryFailure;
    }
    getUnderlyingClient() {
        return this.client;
    }
    isRecoverableEnvironmentError(e) {
        const t = e instanceof Error ? e.message : String(e);
        return t.includes("No server info found") || t.includes("No adapter found") || t.includes("No provider found");
    }
    recordRecoveryFailure() {
        this.consecutiveFailures++, this.consecutiveFailures >= KZi && this.onRecoveryFailure();
    }
    async withRecovery(e, t) {
        try {
            const n = await e();
            return this.consecutiveFailures = 0, n;
        } catch (n) {
            const i = t ? this.shouldAttemptRecoveryForToolCall() : this.shouldAttemptRecoveryConservative();
            if (this.isRecoverableEnvironmentError(n) && i) {
                if (this.consecutiveFailures >= KZi) throw ol(`[MCPService] Server ${this.serverId} has failed recovery ${this.consecutiveFailures} times, backing off`), this.onRecoveryFailure(), n;
                ol(`[MCPService] Server ${this.serverId} missing but was previously working, attempting recovery (attempt ${this.consecutiveFailures + 1}/${KZi})`);
                let r;
                const s = this.getTimeouts().recoveryPerRetryTimeoutMs;
                try {
                    r = await wCt(()=>this.recreateClient(), s, `mcp.recovery.recreateClient.${this.serverId}`);
                } catch (a) {
                    throw this.recordRecoveryFailure(), a;
                }
                const o = this.reloadClientAfterFailedRecreate;
                if (!r && o) try {
                    const a = await wCt(()=>o(), s, `mcp.recovery.reloadClient.${this.serverId}`);
                    r = BKv(a);
                } catch (a) {
                    throw this.recordRecoveryFailure(), a;
                }
                if (r) return ol(`[MCPService] Recovery successful for ${this.serverId}, retrying operation`), this.consecutiveFailures = 0, this.onRecoverySuccess(), await e();
                this.recordRecoveryFailure();
            }
            throw n;
        }
    }
    async callTool(e, t, n) {
        return this.withRecovery(()=>this.client.callTool(e, t, n), !0);
    }
    async getPrompt(e, t) {
        return this.withRecovery(()=>this.client.getPrompt(e, t), !1);
    }
    async readResource(e) {
        return this.withRecovery(()=>this.client.readResource(e), !1);
    }
    async listOfferings() {
        return this.withRecovery(()=>this.client.listOfferings(), !1);
    }
    async listToolsRaw() {
        return this.withRecovery(()=>this.client.listToolsRaw(), !1);
    }
    async createClient(e) {
        return this.client.createClient(e);
    }
    async ensureConnected(e, t) {
        return GZi(this.client) ? this.client.ensureConnected(e, t) : this.client.createClient(e);
    }
    async probeServer(e) {
        GZi(this.client) && this.client.probeServer && await this.client.probeServer(e);
    }
    async deleteClient(e) {
        return this.client.deleteClient(e);
    }
    async reloadClient(e, t) {
        return this.withRecovery(()=>this.client.reloadClient(e, t), !1);
    }
    async logoutServer() {
        return this.client.logoutServer();
    }
    async clearAllTokens() {
        return this.client.clearAllTokens();
    }
}, Lwh = new Map, Nwh = Ut({}), Sq = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v, b, y, T, E, A, R, D, P, N, O, F, H, $, W, G, q, z, X){
        super(), this.storageService = e, this.everythingProviderService = t, this.reactiveStorageService = n, this.contextService = i, this.fileService = r, this.uriIdentityService = s, this.environmentService = o, this.pathService = a, this.productService = c, this.notificationService = l, this.composerModesService = u, this.adminSettingsService = h, this.commandService = p, this.pluginsProviderService = g, this.analyticsService = f, this.quickInputService = v, this.configurationResolverService = b, this.cursorAuthenticationService = y, this.experimentsService = T, this.mcpProviderService = E, this.appLayoutService = A, this.browserAutomationService = R, this.configurationService = D, this.composerDataService = P, this.loggerService = N, this.metricsService = O, this.mcpWellKnownDetectionService = F, this.structuredLogService = H, this.extensionService = $, this.workbenchCommandRegistry = W, this.mcpConfigService = G, this.mcpProcessSnapshotFanoutService = q, this.aiServerConfigService = z, this.hostedMcpPlacementService = X, this.workspaceFolderWatchers = this._register(new He), this.projectManagedServers = [], this.userConfiguredServers = [], this.extensionRegisteredServers = [], this.defaultServers = [], this.originMcpReconcileSequence = Promise.resolve(), this.pluginServers = [], this.userConfigFileWatcher = this._register(new cn), this.previouslyKnownServerIds = new Set, this.KNOWN_SERVER_IDS_KEY = "mcpService.knownServerIds", this.pendingRefreshResolvers = [], this.initializeServersRequestedDuringInit = !1, this.pendingInitializeServersReasons = [], this.createClientPromises = new Map, this.allServersSignal = Ut([]), this.allServers = this.allServersSignal[0], this.setAllServers = this.allServersSignal[1], this.toolsCacheSignal = Ut({}), this.toolsCache = this.toolsCacheSignal[0], this.setToolsCache = this.toolsCacheSignal[1], this.promptsCacheSignal = Ut({}), this.promptsCache = this.promptsCacheSignal[0], this.setPromptsCache = this.promptsCacheSignal[1], this.resourcesCacheSignal = Ut({}), this.resourcesCache = this.resourcesCacheSignal[0], this.setResourcesCache = this.resourcesCacheSignal[1], this.instructionsCacheSignal = Ut({}), this.instructionsCache = this.instructionsCacheSignal[0], this.setInstructionsCache = this.instructionsCacheSignal[1], this.statusCacheSignal = Ut({}), this.statusCache = this.statusCacheSignal[0], this.setStatusCache = this.statusCacheSignal[1], this.progressCacheSignal = Ut({}), this.progressCache = this.progressCacheSignal[0], this.setProgressCache = this.progressCacheSignal[1], this.parsingErrorsSignal = Ut({}), this.parsingErrors = this.parsingErrorsSignal[0], this.setParsingErrors = this.parsingErrorsSignal[1], this.elicitationRequestsCacheSignal = Nwh, this.elicitationRequestsCache = this.elicitationRequestsCacheSignal[0], this.setElicitationRequestsCache = this.elicitationRequestsCacheSignal[1], this.ownedElicitationRequestIds = new Set, this.ownedLeaseElicitationToolCallIds = new Set, this.leaseElicitationHandlers = Lwh, this._onDidChangeServerStatus = this._register(new ve), this.onDidChangeServerStatus = this._onDidChangeServerStatus.event, this.lastReconciledDisabledGlobalMcpServers = [], this._onSettingsChanged = this._register(new ve), this.onSettingsChanged = this._onSettingsChanged.event, this._onDidInitialize = this._register(new ve), this.onDidInitialize = this._onDidInitialize.event, this._initialized = !1, this.mcpClientProviders = new Map, this.mcpProcessRoutedServerIds = new Set, this._durableSnapshots = new Map, this._onDidChangeMcpSnapshots = this._register(new ve), this.onDidChangeMcpSnapshots = this._onDidChangeMcpSnapshots.event, this._durableSnapshotGeneration = 0, this._hasReceivedAnySnapshots = !1, this._cursorMcpDegradedServers = new Set, this._everythingProviderRehydrateTargetGeneration = 0, this._windowedCounters = Sq._freshWindowedCounters(), this.successfullyInitializedServers = new Set, this.hasObservedInitialRemoteExtensionRegistration = !1, this.isIgnoringInitialRemoteExtensionHostLifecycleBurst = !1, this.remoteExtensionHostRefreshRequestedWhileRunning = !1, this.snapshotWatchdogs = this._register(new po), this.serverIncarnationIds = new Map, this.lastDeleteReasons = new Map, this.statusEnteredAtMs = new Map, this.sharedOAuthFanoutQueues = new Map, this.recentExternalSharedOAuthFanoutAtMs = new Map, this.sharedOAuthFanoutServiceInstanceId = `${Date.now()}-${Math.random().toString(36).slice(2)}`, this.hostedMcpPlacementChangedDuringInit = !1, this.mcpWorkbenchServerLoggers = this._register(new po), this.defaultAuthResolver = {
            resolve: async (ce)=>{
                let de;
                try {
                    de = new URL(ce).hostname;
                } catch  {
                    return;
                }
                if (de === "mcp.slack.com") {
                    const le = this.experimentsService.getDynamicConfigParam("slack_mcp_client_id", "clientId", {
                        disableExposureLog: !1
                    });
                    return le ? {
                        CLIENT_ID: le
                    } : void 0;
                }
                if (de === "setup.shopify.com") {
                    const le = this.experimentsService.getDynamicConfigParam("shopify_mcp_client_id", "clientId", {
                        disableExposureLog: !1
                    });
                    return le ? {
                        CLIENT_ID: le
                    } : void 0;
                }
            }
        }, this.metricsService.increment({
            stat: "mcp.session_start"
        }), this._shouldEmitCoalesceMetrics = this.experimentsService.checkFeatureGate("mcp_coalesce_metrics_sampling", {
            disableExposureLog: !1
        }), this._metaMcpToolEnabled = this.experimentsService.checkFeatureGate("meta_mcp_tool", {
            disableExposureLog: !1
        }), CMv(this.experimentsService.checkFeatureGate("mcp_structured_logging", {
            disableExposureLog: !1
        }));
        const Y = (ce)=>this.workbenchCommandRegistry.registerCommand(ce);
        this.whenInitialized = new Promise((ce)=>{
            this._whenInitializedResolve = ce;
        }), this.mcpFilesLogger = this._register(this.loggerService.createLogger("workbench.mcp.files", {
            name: "MCP Logs",
            hidden: !1
        })), this.mcpOAuthLogger = this._register(this.loggerService.createLogger("workbench.mcp.oauth", {
            name: "MCP OAuth",
            hidden: !1
        })), this._mcpAllowlistLogger = this._register(this.loggerService.createLogger("workbench.mcp.allowlist", {
            name: "MCP Allowlist",
            hidden: !1
        })), this._logAllowlist("info", "[MCPService] MCP Allowlist logger initialized."), this.adminMcpRuntimePolicyFingerprint = this.getAdminMcpRuntimePolicyFingerprint(), this.disabledMcpServers = this._register(Th(this.storageService, "disabledMcpServers")), this.disabledGlobalMcpServers = this._register(Th(this.storageService, "disabledGlobalMcpServers")), this.migrateLegacyOriginMcpBuiltinIdentifier(), this.approvedProjectMcpServers = this._register(Th(this.storageService, "approvedProjectMcpServers")), this.thirdPartyExtensibilityObservable = this._register(Th(this.storageService, "thirdPartyExtensibilityEnabled")), this.useProfileScopedGlobalMcpDisabledState = this.experimentsService.checkFeatureGate("mcp_profile_scoped_global_disabled_state", {
            disableExposureLog: !1
        }), this.useProfileScopedGlobalMcpDisabledState && (this.dropLegacyWorkspaceDisabledGlobalMcpServers(), this.lastReconciledDisabledGlobalMcpServers = this.disabledGlobalMcpServers.get(), this._register(xO(this.disabledGlobalMcpServers, (ce)=>{
            const de = this.lastReconciledDisabledGlobalMcpServers;
            this.lastReconciledDisabledGlobalMcpServers = ce, this.reconcileDisabledGlobalMcpServersChange(de, ce);
        }))), this._register(xO(this.thirdPartyExtensibilityObservable, ()=>{
            ol("[MCPService] thirdPartyExtensibilityEnabled changed, refreshing plugin servers"), this.refreshPluginServers("third_party_extensibility_changed").then(()=>this.initializeServers("third_party_extensibility_changed"));
        })), this.loginChangedListener = (ce)=>{
            this.reconcileOriginMcpBuiltinServer(ce ? "login_changed_logged_in" : "login_changed_logged_out");
        };
        const Z = kn.as(r2.JSONContribution);
        Z.registerSchema(qkh, Kkh), Z.registerSchema(zkh, Ykh), this.initializePlaywrightProtection(), this.initializePreviouslyKnownServerIds(), this._register(this.contextService.onDidChangeWorkspaceFolders(()=>this.reset({
                skipUserConfigFile: !0
            }))), this._register(this.fileService.onDidFilesChange((ce)=>this.onDidFilesChange(ce))), this._register(this.mcpProviderService.onDidChangeProviders(()=>{
            ol("[MCPService] MCP providers changed, refreshing servers and caches"), this.mcpClientProviders.clear(), this.mcpProcessRoutedServerIds.clear(), this.initializeServers("mcp_providers_changed");
        })), this._register(this.everythingProviderService.onDidChangeCommandProvider((ce)=>{
            this._handleEverythingProviderCommandChange(ce);
        })), this._register(this.mcpConfigService.onDidChangeSelection((ce)=>{
            const de = new Set(ce.nextSelectedServers.map((le)=>le.identifier));
            for (const le of ce.previousSelectedServers)de.has(le.identifier) || this.removeHiddenDedupeServerRuntimeState(le, "dedupe_mcp_servers_selection_changed");
            this.getServers();
            for (const le of ce.nextSelectedServers)this.isServerEnabled(le) && !this.isServerBlocked(le) && this.createClientIfNotExists(le);
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
        })), this._register(this.experimentsService.onDidChangeGates((ce)=>{
            (ce.changedGates === void 0 || ce.changedGates.has(T0o) || ce.changedGates.has(CCt)) && this.handleAdminMcpRuntimePolicyChange().catch(()=>{}), (ce.changedGates === void 0 || ce.changedGates.has("meta_mcp_tool")) && (this._metaMcpToolEnabled = this.experimentsService.checkFeatureGate("meta_mcp_tool", {
                disableExposureLog: !1
            })), (ce.changedGates === void 0 || ce.changedGates.has("origin_mcp")) && this.reconcileOriginMcpBuiltinServer("origin_mcp_gate_changed");
        })), this._register(this.storageService.onDidChangeValue(0, void 0, this._store)((ce)=>{
            ce.external && this.handleSharedOAuthFanoutStorageChange(ce.key);
        })), this._register(this.extensionService.onDidRegisterExtensions(()=>{
            this.handleRemoteExtensionHostLifecycleEvent("register").catch((ce)=>{
                this.logRemoteExtensionHostLifecycleError("register", ce);
            });
        })), this._register(this.extensionService.onDidChangeExtensionsStatus(()=>{
            this.handleRemoteExtensionHostLifecycleEvent("status").catch((ce)=>{
                this.logRemoteExtensionHostLifecycleError("status", ce);
            });
        })), Ct.fromObservableLight(this.disabledMcpServers)(()=>this._onSettingsChanged.fire()), Ct.fromObservableLight(this.disabledGlobalMcpServers)(()=>this._onSettingsChanged.fire()), Ct.fromObservableLight(this.approvedProjectMcpServers)(()=>this._onSettingsChanged.fire()), this._register(Y({
            id: "mcp.updateStatus",
            handler: (ce, de)=>{
                if (!de || !de.identifier || !de.status) return;
                const le = this.getServers().find((ye)=>ye.identifier === de.identifier);
                if (le && !this._isExthostConnectionOwner(le)) {
                    this.logMcpServerFile(de.identifier, "debug", `[MCPService] Ignoring exthost status update for process-routed server: ${de.identifier}`, de.status);
                    return;
                }
                if (ol(`[MCPService] Received status update from command: ${de.identifier}`, de.status), de.status.type === "needsAuth" && this.statusCache()[de.identifier]?.type !== "needsAuth") {
                    const _e = de.reason ?? "status_update";
                    this.recordOAuthNeedsAuthMetric(_e), this._logOAuth("info", `[MCPService] Server entered needsAuth: ${de.identifier} (cause=${_e})`, void 0, {
                        identifier: de.identifier,
                        cause: _e
                    });
                }
                this.updateServerStatus(de.identifier, de.status);
            }
        }));
        const K = (ce, de)=>{
            this.updateServerStatus(ce, de);
        };
        this._register(Y({
            id: "mcp.needsAuth",
            handler: (ce, de)=>{
                const le = this.getServers().find((_e)=>_e.identifier === de.identifier);
                if (le && !this._isExthostConnectionOwner(le)) {
                    this.logMcpServerFile(de.identifier, "debug", `[MCPService] Ignoring exthost needsAuth update for process-routed server: ${de.identifier}`);
                    return;
                }
                this.statusCache()[de.identifier]?.type !== "needsAuth" && (this.recordOAuthNeedsAuthMetric("mcp_needs_auth_command"), this._logOAuth("info", `[MCPService] Server entered needsAuth via command: ${de.identifier} (cause=mcp_needs_auth_command)`, void 0, {
                    identifier: de.identifier,
                    cause: "mcp_needs_auth_command"
                })), K(de.identifier, {
                    type: "needsAuth",
                    authorizationUrl: de.authorizationUrl
                });
            }
        })), this._register(Y({
            id: "mcp.oauthStorageCleared",
            handler: (ce, de)=>{
                !de || !de.identifier || !de.reason || (this.recordOAuthStateClearMetric("oauth_storage_cleared", "success", {
                    detail: de.reason
                }), this._logOAuth("warn", `[MCPService] OAuth storage cleared for server: ${de.identifier} (reason=${de.reason})`, void 0, {
                    identifier: de.identifier,
                    reason: de.reason
                }));
            }
        })), this._register(Y({
            id: "mcp.oauthRefreshFailed",
            handler: (ce, de)=>{
                !de || !de.identifier || !de.path || (this.metricsService.increment({
                    stat: "mcp.oauth_refresh_failed",
                    tags: {
                        path: de.path,
                        error_name: de.errorName ?? "unknown",
                        is_oauth_error: String(de.isOAuthError ?? !1)
                    }
                }), this._logOAuth("warn", `[MCPService] OAuth refresh failed: ${de.identifier} (path=${de.path}, error=${de.errorName ?? "unknown"}: ${de.errorMessage ?? "no message"})`, void 0, {
                    identifier: de.identifier,
                    path: de.path,
                    errorName: de.errorName,
                    errorMessage: de.errorMessage,
                    isOAuthError: de.isOAuthError
                }));
            }
        })), this._register(Y({
            id: "mcp.diskKVSetIfAbsent",
            handler: async (ce, de, le)=>this.storageService.cursorDiskKVSetIfAbsent(de, le)
        })), this._register(Y({
            id: "mcp.diskKVReplaceIfEquals",
            handler: async (ce, de, le, ye)=>this.storageService.cursorDiskKVReplaceIfEquals(de, le, ye)
        })), this._register(Y({
            id: "mcp.diskKVDelete",
            handler: async (ce, de, le)=>this.storageService.cursorDiskKVDelete(de, le)
        })), this._register(Y({
            id: "mcp.diskKVGet",
            handler: async (ce, de)=>this.storageService.cursorDiskKVGet(de)
        })), this._register(Y({
            id: "mcp.reloadClient",
            handler: async (ce, de)=>{
                if (!de || !de.identifier) {
                    ek("[MCPService] mcp.reloadClient called without identifier");
                    return;
                }
                ol(`[MCPService] Received reload client command for: ${de.identifier}`);
                try {
                    await this.reloadClient(de.identifier);
                } catch (le) {
                    ek(`[MCPService] Error reloading client ${de.identifier}:`, le);
                }
            }
        })), this._register(Y({
            id: "mcp.progressNotification",
            handler: async (ce, de)=>{
                ol(`[MCPService] Received progress notification for: ${de.progressToken}`, de.notification), this.setProgressCache((le)=>({
                        ...le,
                        [de.progressToken]: de.notification
                    }));
            }
        }));
        const J = async ()=>{
            ol("[MCPService] plugins changed, refreshing plugin servers");
            try {
                await this.refreshPluginServers("plugins_changed"), await this.initializeServers("plugins_changed");
            } catch (ce) {
                dy(this.structuredLogService, "error", "[MCPService] Error refreshing plugin servers on plugins change", ce instanceof Error ? ce : void 0);
            }
        };
        this._register(this.pluginsProviderService.onDidPluginsChange(J)), this._register(this.pluginsProviderService.onDidPluginsChangeWithoutRefetch(J)), this._register(this.pluginsProviderService.onDidPluginsCacheChange(()=>{
            this.mcpWellKnownDetectionService.preResolveServerIcons(this.allServers().filter((ce)=>ce.pluginManaged));
        }));
        const { dispose: ne } = bM((ce)=>(Jt(()=>{
                this.mcpWellKnownDetectionService.preResolveServerIcons(this.allServers());
            }), {
                dispose: ce
            }));
        this._register({
            dispose: ne
        }), this._register(Y({
            id: "mcp.elicitationRequest",
            handler: async (ce, de)=>(ol(`[MCPService] Received elicitation request: ${de.request.message}`), new Promise((le)=>{
                    const ye = (_e)=>{
                        ol(`[MCPService] Sending elicitation response for request ${de.request.id}: ${_e.action}`), this.commandService.executeCommand("mcp.elicitationResponse", {
                            requestId: de.request.id,
                            response: _e
                        }).catch((me)=>JX(`[MCPService] Error sending elicitation response for request ${de.request.id}: ${me instanceof Error ? me.message : String(me)}`)), le(_e);
                    };
                    this.storeOwnedElicitationRequest(de.request.id, {
                        ...de.request,
                        resolve: ye
                    });
                }))
        })), this._register(Y({
            id: "mcp.leaseElicitationRequest",
            handler: async (ce, de)=>{
                ol(`[MCPService] Received lease elicitation request for toolCallId: ${de.toolCallId}`);
                const le = this.leaseElicitationHandlers.get(de.toolCallId);
                if (!le) return JX(`[MCPService] No lease handler found for toolCallId: ${de.toolCallId}, declining`), {
                    action: "decline"
                };
                try {
                    const ye = {
                        id: `lease-${de.toolCallId}-${Date.now()}`,
                        message: de.request.message,
                        requestedSchema: de.request.requestedSchema
                    }, _e = await le(ye);
                    return ol(`[MCPService] Lease handler returned: ${_e.action}`), this.leaseElicitationHandlers.has(de.toolCallId) ? _e : (ol("[MCPService] Handler unregistered during elicitation, returning decline"), {
                        action: "decline"
                    });
                } catch (ye) {
                    return ek("[MCPService] Lease handler error:", ye), {
                        action: "decline"
                    };
                }
            }
        })), this.clearDeprecatedStoredMcpServers(), this.reset();
        let ee;
        const { dispose: se } = bM((ce)=>(Jt(()=>{
                const le = KE().browserFeatures;
                ee !== void 0 && ee !== le && (dy(this.structuredLogService, "info", "[MCPService] Browser features setting changed", void 0, {
                    subkey: "browser_mcp",
                    previousValue: String(ee),
                    newValue: String(le)
                }), this._onSettingsChanged.fire()), ee = le;
            }), {
                dispose: ce
            }));
        this._register({
            dispose: se
        });
        let re;
        const { dispose: ue } = bM((ce)=>(Jt(()=>{
                const de = this.reactiveStorageService.applicationUserPersistentStorage.lastBrowserConnectionMode;
                re !== void 0 && re !== de && (dy(this.structuredLogService, "info", "[MCPService] Browser connection mode changed", void 0, {
                    subkey: "browser_mcp",
                    previousMode: String(re),
                    newMode: String(de)
                }), this._onSettingsChanged.fire()), re = de;
            }), {
                dispose: ce
            }));
        this._register({
            dispose: ue
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
    getSharedOAuthFanoutStorageKey(e) {
        return `${y0o}${e}`;
    }
    isSharedOAuthFanoutStorageKey(e) {
        return e.startsWith(y0o);
    }
    pruneStaleSharedOAuthFanoutStorageEvents(e = Date.now()) {
        for (const t of this.storageService.keys(0, 1)){
            if (!this.isSharedOAuthFanoutStorageKey(t)) continue;
            const n = this.parseSharedOAuthFanoutStorageEvent(this.storageService.get(t, 0));
            (!n || e - n.emittedAtMs > Iwh) && this.storageService.remove(t, 0);
        }
    }
    publishSharedOAuthFanoutEvent(e) {
        if (this.shouldSuppressSharedOAuthFanoutRebroadcast(e)) {
            this._logOAuth("info", "[MCPService] Shared OAuth fanout rebroadcast suppressed", void 0, {
                serverUrl: zUe(e.serverUrl),
                change: e.change,
                sourceIdentifier: e.sourceIdentifier,
                sourceWorkspaceId: e.sourceWorkspaceId,
                debounceMs: S0o
            });
            return;
        }
        const t = Date.now(), n = {
            eventId: `${t}-${Math.random().toString(36).slice(2)}`,
            serverUrl: e.serverUrl,
            change: e.change,
            sourceIdentifier: e.sourceIdentifier,
            sourceWorkspaceId: e.sourceWorkspaceId,
            sourceServiceInstanceId: this.sharedOAuthFanoutServiceInstanceId,
            cause: e.cause,
            saveKind: e.saveKind,
            emittedAtMs: t
        };
        this.lastProcessedSharedOAuthFanoutEventId = n.eventId, this.pruneStaleSharedOAuthFanoutStorageEvents(t), this.storageService.store(this.getSharedOAuthFanoutStorageKey(n.eventId), JSON.stringify(n), 0, 1);
    }
    getSharedOAuthFanoutDebounceKey(e) {
        return `${zUe(e.serverUrl)}::${e.change}`;
    }
    shouldSuppressSharedOAuthFanoutRebroadcast(e) {
        const t = this.getSharedOAuthFanoutDebounceKey(e), n = Date.now(), i = this.recentExternalSharedOAuthFanoutAtMs.get(t);
        return i === void 0 ? !1 : n - i > S0o ? (this.recentExternalSharedOAuthFanoutAtMs.delete(t), !1) : !0;
    }
    enqueueSharedOAuthFanout(e) {
        const t = zUe(e.serverUrl), i = (this.sharedOAuthFanoutQueues.get(t) ?? Promise.resolve()).catch(()=>{}).then(async ()=>{
            this.publishSharedOAuthFanoutEvent(e), await this.handleSharedOAuthStateChanged({
                serverUrl: e.serverUrl,
                change: e.change,
                sourceIdentifier: e.sourceIdentifier,
                sourceWorkspaceId: e.sourceWorkspaceId,
                sourceServiceInstanceId: this.sharedOAuthFanoutServiceInstanceId,
                cause: e.cause,
                saveKind: e.saveKind
            });
        }).catch((r)=>{
            this._logOAuth("warn", "[MCPService] Shared OAuth fanout queue failed", r, {
                serverUrl: t,
                change: e.change,
                sourceIdentifier: e.sourceIdentifier,
                sourceWorkspaceId: e.sourceWorkspaceId
            });
        });
        this.sharedOAuthFanoutQueues.set(t, i), i.finally(()=>{
            this.sharedOAuthFanoutQueues.get(t) === i && this.sharedOAuthFanoutQueues.delete(t);
        });
    }
    parseSharedOAuthFanoutStorageEvent(e) {
        if (e) try {
            const t = JSON.parse(e);
            return typeof t.eventId != "string" || typeof t.serverUrl != "string" || typeof t.change != "string" || typeof t.sourceServiceInstanceId != "string" || typeof t.emittedAtMs != "number" ? void 0 : t;
        } catch  {
            return;
        }
    }
    async handleSharedOAuthFanoutStorageChange(e) {
        if (!this.isMcpOAuthFanoutEnabled() || !this.isSharedOAuthFanoutStorageKey(e)) return;
        const t = this.parseSharedOAuthFanoutStorageEvent(this.storageService.get(e, 0));
        if (!(!t || t.eventId === this.lastProcessedSharedOAuthFanoutEventId)) {
            if (t.sourceServiceInstanceId === this.sharedOAuthFanoutServiceInstanceId) {
                this.lastProcessedSharedOAuthFanoutEventId = t.eventId;
                return;
            }
            this.lastProcessedSharedOAuthFanoutEventId = t.eventId, this.recentExternalSharedOAuthFanoutAtMs.set(this.getSharedOAuthFanoutDebounceKey(t), Date.now());
            try {
                await this.handleSharedOAuthStateChanged({
                    serverUrl: t.serverUrl,
                    change: t.change,
                    sourceIdentifier: t.sourceIdentifier,
                    sourceWorkspaceId: t.sourceWorkspaceId,
                    sourceServiceInstanceId: t.sourceServiceInstanceId,
                    cause: t.cause,
                    saveKind: t.saveKind
                });
            } catch (n) {
                this._logOAuth("warn", "[MCPService] Shared OAuth fanout storage handler failed", n, {
                    serverUrl: zUe(t.serverUrl),
                    change: t.change,
                    sourceIdentifier: t.sourceIdentifier,
                    sourceWorkspaceId: t.sourceWorkspaceId
                });
            }
        }
    }
    initializePlaywrightProtection() {
        const t = !this.experimentsService.checkFeatureGate("playwright_autorun", {
            disableExposureLog: !1
        }), n = this.reactiveStorageService.applicationUserPersistentStorage.composerState;
        n.playwrightProtection !== t && !n.userManuallyChangedPlaywrightProtection && this.reactiveStorageService.setApplicationUserPersistentStorage("composerState", "playwrightProtection", t);
    }
    async getProvider() {
        return await this.everythingProviderService.waitForCommandEverythingProvider(f0o, $x.CreateClient);
    }
    _getMcpIpcTimeouts() {
        const e = this.experimentsService.getDynamicConfig("mcp_ipc_timeouts", {
            disableExposureLog: !1
        });
        return {
            metadataTimeoutMs: s0o(e.metadata_timeout_ms, qZi.metadataTimeoutMs),
            lifecycleTimeoutMs: s0o(e.lifecycle_timeout_ms, qZi.lifecycleTimeoutMs),
            recoveryPerRetryTimeoutMs: s0o(e.recovery_per_retry_timeout_ms, qZi.recoveryPerRetryTimeoutMs)
        };
    }
    isMcpProviderServer(e) {
        return e.url?.startsWith("mcp-provider://") ?? !1;
    }
    shouldSkipBrowserServer(e) {
        const t = e.identifier === Vee, n = e.identifier === O$;
        if (!t && !n) return !1;
        const i = this.reactiveStorageService?.applicationUserPersistentStorage?.lastBrowserConnectionMode;
        let r;
        if (n) r = "deprecated";
        else if (!KE().browserFeatures) r = "browser_features_disabled";
        else {
            const o = kPe(i);
            o === "editor" && t ? r = void 0 : o === "none" && t && (r = `connection_mode_${String(o)}`);
        }
        if (r !== this._lastBrowserSkipReason) {
            const s = this._lastBrowserSkipReason;
            this._lastBrowserSkipReason = r, dy(this.structuredLogService, "debug", `[MCPService] Browser server skip reason changed: ${s ?? "none"} -> ${r ?? "none"}`, void 0, {
                subkey: "browser_mcp",
                identifier: e.identifier,
                reason: r ?? "none",
                previousReason: s ?? "none"
            });
        }
        return r !== void 0;
    }
    async getMcpClient(e, t, n) {
        const i = ()=>this._getMcpIpcTimeouts(), r = n ?? this.getServers().find((u)=>u.identifier === e), s = this.mcpProviderService.getAllProviders().some((u)=>u.id === e), o = !s && this.shouldUseMcpProcessClient(e, r), a = this.mcpClientProviders.get(e);
        if (a) {
            if (!this.mcpProcessRoutedServerIds.has(e) || o) return a;
            this.mcpClientProviders.delete(e), this.createClientPromises.delete(e), this.mcpProcessRoutedServerIds.delete(e), await a.deleteClient("mcp_process_route_disabled");
        }
        let c;
        if (s) {
            ol(`[MCPService] Using MCP provider service for server: ${e}`);
            try {
                c = new Rwh(this.mcpProviderService, e, i);
            } catch  {
                ol(`[MCPService] Falling back to everything provider service for server: ${e}`), c = new C0o(this.everythingProviderService, this.metricsService, this.environmentService.remoteAuthority ? "remote" : "local", e, i, t);
            }
            this.mcpProcessRoutedServerIds.delete(e);
        } else if (o && this.mcpProcessClientFactory) {
            ol(`[MCPService] Using shared MCP process client for server: ${e}`);
            const u = r?.projectPath ? this.contextService.getWorkspace().folders.find((p)=>this.folderToKey(p) === r.projectPath) : void 0, h = this.contextService.getWorkspace().folders.map((p)=>p.uri.fsPath);
            c = this.mcpProcessClientFactory({
                serverId: e,
                serverName: t,
                projectScopeHash: this.getMcpProcessProjectScopeHash(r),
                projectFsPath: u?.uri.fsPath,
                workspaceFolderFsPaths: h
            }), this.mcpProcessRoutedServerIds.add(e);
        } else ol(`[MCPService] Using everything provider service for server: ${e}`), c = new C0o(this.everythingProviderService, this.metricsService, this.environmentService.remoteAuthority ? "remote" : "local", e, i, t), this.mcpProcessRoutedServerIds.delete(e);
        const l = new k3n({
            client: c,
            serverId: e,
            shouldAttemptRecoveryConservative: ()=>this.successfullyInitializedServers.has(e),
            shouldAttemptRecoveryForToolCall: ()=>this.successfullyInitializedServers.has(e) || this._serverHasDurableSnapshotTools(e),
            getTimeouts: i,
            recreateClient: ()=>this._selfHealRecreateClient(e),
            reloadClientAfterFailedRecreate: ()=>this._selfHealReloadAfterFailedRecreate(e, o),
            onRecoverySuccess: ()=>this.successfullyInitializedServers.add(e),
            onRecoveryFailure: ()=>this.successfullyInitializedServers.delete(e)
        });
        return this.mcpClientProviders.set(e, l), l;
    }
    async _selfHealRecreateClient(e) {
        const t = this.getServers().find((n)=>n.identifier === e);
        return t ? this.createClient(t) : !1;
    }
    async _selfHealReloadAfterFailedRecreate(e, t) {
        const n = this.getServers().find((s)=>s.identifier === e);
        if (!n) return;
        if (this.refuseUserDisabledServer(n, "self_heal")) return {
            success: !1,
            connected: !1,
            statusType: "disconnected",
            error: "Server is disabled"
        };
        const i = await this.resolveServerVariables(n), r = this.getResolvedServerBlockMessage(i);
        return r ? (this.updateServerStatus(e, {
            type: "error",
            error: r
        }), {
            success: !1,
            connected: !1,
            statusType: "error",
            error: r
        }) : t ? this._ensureConnectedWithResolvedServer(n, i, "self_healing") : this._reloadClientWithResolvedServer(n, i);
    }
    hasMcpProviderForServerId(e) {
        return this.mcpProviderService.getAllProviders().some((t)=>t.id === e);
    }
    async _waitForMcpProviderRegistration(e, t) {
        if (this.hasMcpProviderForServerId(e)) return;
        const n = new He;
        try {
            await new Promise((i, r)=>{
                const s = n.add(mge(t));
                n.add(s.token.onCancellationRequested(()=>r(new Error("Tool call was cancelled")))), n.add(this.mcpProviderService.onDidChangeProviders(()=>{
                    this.hasMcpProviderForServerId(e) && i();
                })), Cl(()=>r(new Error(`Server not found: ${e} (MCP provider did not re-register within ${v0o}ms)`)), v0o, n);
            });
        } finally{
            n.dispose();
        }
    }
    isMcpSharedProcessTransportEnabled() {
        return this.mcpProcessClientFactory !== void 0;
    }
    isMcpProcessEligibleServer(e) {
        return !!e && !this.environmentService.remoteAuthority && !this.isMcpProviderServer(e) && !this.hasMcpProviderForServerId(e.identifier);
    }
    shouldUseMcpProcessClient(e, t) {
        return this.mcpProcessClientFactory ? (t ??= this.getServers().find((n)=>n.identifier === e), this.isMcpProcessEligibleServer(t)) : !1;
    }
    shouldUseMcpProcessOutput(e) {
        return this.shouldUseMcpProcessClient(e.identifier, e);
    }
    getHostedMcpWithholdMessage(e, t) {
        const n = e.type === "streamableHttp", i = t?.skipUnresolvedUrls && e.url?.includes("${") ? void 0 : e.url, r = this.hostedMcpPlacementService.withholdReason({
            identifier: e.identifier,
            url: i,
            isHttp: n,
            declaredPlacement: e.placement
        });
        return r === void 0 ? void 0 : ljt[r];
    }
    onDidChangeHostedMcpPlacement() {
        if (!this._initialized) {
            this.hostedMcpPlacementChangedDuringInit = !0;
            return;
        }
        this.reEvaluateBlockedServers().catch((e)=>{
            ek("[MCPService] Error re-evaluating Hosted MCP placement:", e);
        });
    }
    reconcileHostedMcpPlacementAfterInit() {
        this.hostedMcpPlacementChangedDuringInit && (this.hostedMcpPlacementChangedDuringInit = !1, this.reEvaluateBlockedServers().catch((e)=>{
            ek("[MCPService] Error re-evaluating Hosted MCP placement after initialization:", e);
        }));
    }
    async refreshHostedMcpPlacementForReload(e) {
        e.type !== "streamableHttp" || !this.hostedMcpPlacementService.isRoutingEnabled() || await Hp(this.hostedMcpPlacementService.refresh("mcp_server_reload", {
            force: !0
        }), Sq._HOSTED_MCP_PLACEMENT_INITIAL_FETCH_TIMEOUT_MS);
    }
    async awaitHostedMcpPlacement(e) {
        if (!this.hostedMcpPlacementService.isRoutingEnabled()) return;
        const t = this.hostedMcpPlacementService.refresh(`mcp_servers_initialized:${e}`, {
            localHttpRowsKey: s8v(this.resolveEffectiveServers().map((n)=>({
                    identifier: n.identifier,
                    url: n.url,
                    isHttp: n.type === "streamableHttp" && !this.isMcpProviderServer(n)
                })))
        });
        this.hostedMcpPlacementService.isPlacementKnown || await Hp(t, Sq._HOSTED_MCP_PLACEMENT_INITIAL_FETCH_TIMEOUT_MS);
    }
    getMcpProcessProjectScopeHash(e) {
        if (!(!e?.projectManaged || !e.projectPath)) return BZi(this.contextService.getWorkspace().id, e.projectPath);
    }
    getMcpProcessRouteChangingServerIds() {
        return new Set(this.getServers().filter((e)=>this.isMcpProcessEligibleServer(e)).map((e)=>e.identifier));
    }
    setMcpProcessClientFactory(e) {
        this.mcpProcessClientFactory !== e && (this.mcpProcessClientFactory = e, this.resetMcpProcessRouting("mcp_process_client_factory_changed"), this.reconcileOriginMcpBuiltinServer("mcp_process_client_factory_changed"));
    }
    resetMcpProcessRouting(e) {
        const t = new Set([
            ...this.mcpProcessRoutedServerIds,
            ...this.getMcpProcessRouteChangingServerIds()
        ]);
        if (t.size !== 0) {
            for (const n of t){
                const i = this.mcpClientProviders.get(n);
                this.mcpProcessRoutedServerIds.delete(n), this.mcpClientProviders.delete(n), this.createClientPromises.delete(n), this.successfullyInitializedServers.delete(n), this._durableSnapshots.delete(n), this._cursorMcpDegradedServers.delete(n), this.statusEnteredAtMs.delete(n), this.lastDeleteReasons.set(n, e), this._nextServerIncarnationId(n), this._clearSnapshotWatchdog(n, "replaced"), this.clearServerStatus(n), i && i.deleteClient(e).catch((r)=>{
                    ek(`[MCPService] Error deleting cached client after MCP process routing reset for ${n}:`, r);
                });
            }
            this.setToolsCache((n)=>this.omitServerIds(n, t)), this.setPromptsCache((n)=>this.omitServerIds(n, t)), this.setResourcesCache((n)=>this.omitServerIds(n, t)), this.setInstructionsCache((n)=>this.omitServerIds(n, t)), this._onDidChangeMcpSnapshots.fire(Array.from(t)), this._initialized && this.initializeServers(e).catch((n)=>{
                ek("[MCPService] Error reinitializing servers after MCP process routing reset:", n);
            });
        }
    }
    omitServerIds(e, t) {
        const n = {};
        for (const [i, r] of Object.entries(e))t.has(i) || (n[i] = r);
        return n;
    }
    cleanupHiddenDedupeServerRuntimeState() {
        const e = [], t = new Set;
        for (const r of this.mcpConfigService.getFullMCPServerState()){
            if (!r.isGrouped) continue;
            const s = new Set(r.selectedServerIdentifiers);
            for (const o of r.servers)s.has(o.identifier) || t.has(o.identifier) || !this.hasMcpServerRuntimeState(o.identifier) || (e.push(o), t.add(o.identifier));
        }
        if (e.length === 0) return;
        const n = "dedupe_mcp_servers_hidden_duplicate", i = new Set;
        for (const r of e)this.removeHiddenDedupeServerRuntimeState(r, n), i.add(r.identifier);
        i.size !== 0 && (this.setToolsCache((r)=>this.omitServerIds(r, i)), this.setPromptsCache((r)=>this.omitServerIds(r, i)), this.setResourcesCache((r)=>this.omitServerIds(r, i)), this.setInstructionsCache((r)=>this.omitServerIds(r, i)), this._onDidChangeMcpSnapshots.fire(Array.from(i)));
    }
    hasMcpServerRuntimeState(e) {
        return this.mcpClientProviders.has(e) || this.createClientPromises.has(e) || this.successfullyInitializedServers.has(e) || this._durableSnapshots.has(e) || this._cursorMcpDegradedServers.has(e) || Object.prototype.hasOwnProperty.call(this.statusCache(), e) || Object.prototype.hasOwnProperty.call(this.toolsCache(), e) || Object.prototype.hasOwnProperty.call(this.promptsCache(), e) || Object.prototype.hasOwnProperty.call(this.resourcesCache(), e) || Object.prototype.hasOwnProperty.call(this.instructionsCache(), e);
    }
    removeHiddenDedupeServerRuntimeState(e, t) {
        const n = this.mcpClientProviders.get(e.identifier);
        this.mcpClientProviders.delete(e.identifier), this.mcpProcessRoutedServerIds.delete(e.identifier), this.createClientPromises.delete(e.identifier), this.successfullyInitializedServers.delete(e.identifier), this._durableSnapshots.delete(e.identifier), this._cursorMcpDegradedServers.delete(e.identifier), this.statusEnteredAtMs.delete(e.identifier), this.lastDeleteReasons.set(e.identifier, t), this._nextServerIncarnationId(e.identifier), this._clearSnapshotWatchdog(e.identifier, "delete_client"), this.clearServerStatus(e.identifier), this.clearElicitationRequestsForServer(e.identifier), n && n.deleteClient(t).catch((i)=>{
            ek(`[MCPService] Error deleting hidden duplicate MCP client ${e.identifier}:`, i), dy(this.structuredLogService, "error", "[MCPService] Error deleting hidden duplicate MCP client", i instanceof Error ? i : void 0, {
                subkey: "delete_client",
                identifier: e.identifier
            });
        });
    }
    _injectTestClient(e, t, n) {
        this.mcpClientProviders.set(e.identifier, t);
        const i = this.extensionRegisteredServers.findIndex((r)=>r.identifier === e.identifier);
        i >= 0 ? this.extensionRegisteredServers[i] = e : this.extensionRegisteredServers.push(e), n?.tools && this.setToolsCache((r)=>({
                ...r,
                [e.identifier]: n.tools ?? []
            })), n?.prompts && this.setPromptsCache((r)=>({
                ...r,
                [e.identifier]: n.prompts ?? []
            })), n?.resources && this.setResourcesCache((r)=>({
                ...r,
                [e.identifier]: n.resources ?? []
            })), n?.instructions !== void 0 && this.setInstructionsCache((r)=>({
                ...r,
                [e.identifier]: n.instructions ?? ""
            })), this.updateServerStatus(e.identifier, n?.status ?? {
            type: "connected"
        });
    }
    clearDeprecatedStoredMcpServers() {
        const e = this.reactiveStorageService.applicationUserPersistentStorage.mcpServers;
        !e || e.length === 0 || (ol(`[MCPService] Clearing ${e.length} deprecated stored MCP servers`), this.reactiveStorageService.setApplicationUserPersistentStorage("mcpServers", []));
    }
    async getUserConfigFilePath() {
        const e = await this.pathService.userHome({
            preferLocal: !1
        });
        return this.uriIdentityService.extUri.joinPath(e, ".cursor", "mcp.json");
    }
    async initializeUserConfiguredServers() {
        ol("[MCPService] Initializing user-configured servers from file");
        try {
            const e = await this.getUserConfigFilePath();
            if (this._store.isDisposed) return;
            const t = ml(e);
            this.userConfigFileWatcher.value = this.fileService.watch(t);
            const n = [
                ...this.userConfiguredServers
            ];
            this.userConfiguredServers = await this._handleMcpConfigFileChange(e, {
                projectManaged: !1
            }, n), ol(`[MCPService] Loaded ${this.userConfiguredServers.length} user-configured servers from file`);
        } catch (e) {
            ek("[MCPService] Error initializing user-configured servers:", e);
        }
    }
    async reset(e = {}) {
        ol("[MCPService] Resetting MCP service");
        const t = this.contextService.getWorkspace().folders;
        this.workspaceFolderWatchers.clear();
        for (const n of t){
            const i = this.uriIdentityService.extUri.joinPath(n.uri, ".cursor");
            this.workspaceFolderWatchers.add(this.fileService.watch(i));
        }
        await this.refreshProjectManagedServers(), await this.refreshPluginServers("reset"), e.skipUserConfigFile || await this.initializeUserConfiguredServers(), await this.initializeServers(e.skipUserConfigFile ? "reset_skip_user_config" : "reset");
    }
    async onDidFilesChange(e) {
        let t = !1;
        const n = [], i = this.contextService.getWorkspace().folders;
        for (const s of i){
            const o = this.uriIdentityService.extUri.joinPath(s.uri, ".cursor", "mcp.json");
            this.eventTouchesConfigFile(e, o) && (await this.handleProjectMcpJsonChange(o, s), t = !0, n.push("project_mcp_json_changed"));
        }
        const r = await this.getUserConfigFilePath();
        this.eventTouchesConfigFile(e, r) && (ol(`[MCPService] User config file changed: ${r.toString()}`), await this.initializeUserConfiguredServers(), t = !0, n.push("user_mcp_config_changed")), t && (this._onSettingsChanged.fire(), await this.initializeServers(n));
    }
    eventTouchesConfigFile(e, t) {
        const n = this.uriIdentityService.extUri;
        for (const i of e.rawAdded)if (i.path.length === t.path.length && n.isEqual(i, t)) return !0;
        for (const i of e.rawUpdated)if (i.path.length === t.path.length && n.isEqual(i, t)) return !0;
        for (const i of e.rawDeleted)if (i.path.length <= t.path.length && n.isEqualOrParent(t, i)) return !0;
        return !1;
    }
    async refreshProjectManagedServers() {
        const e = this.contextService.getWorkspace().folders;
        ol("[MCPService] Refreshing project-managed servers", e);
        for (const t of e){
            const n = this.uriIdentityService.extUri.joinPath(t.uri, ".cursor", "mcp.json");
            try {
                await this.handleProjectMcpJsonChange(n, t);
            } catch (i) {
                ek(`[MCPService] Error loading MCP config from ${n}:`, i);
            }
        }
    }
    async refreshPluginServers(e) {
        const t = this.thirdPartyExtensibilityObservable.get(), n = this.experimentsService.checkFeatureGate("enable_cc_plugin_import", {
            disableExposureLog: !1
        });
        ol("[MCPService] Refreshing plugin servers");
        let i = [], r = "ok", s = 0;
        try {
            const { outcome: o, servers: a } = await this.pluginsProviderService.getPluginMcpServersWithOutcome();
            r = o, s = a.length, i = a.filter((l)=>t && n || l.pluginSource !== "claude-plugin").map((l)=>({
                    identifier: l.identifier,
                    name: l.name,
                    marketplace: l.marketplace,
                    marketplaceId: l.marketplaceId,
                    type: l.type,
                    url: l.url,
                    headers: l.headers,
                    auth: l.auth,
                    ...l.type === "streamableHttp" && l.placement !== void 0 ? {
                        placement: l.placement
                    } : {},
                    command: l.command,
                    args: l.args,
                    env: l.env,
                    envFile: l.envFile,
                    cwd: l.cwd,
                    enabledTools: l.enabledTools,
                    projectManaged: !1,
                    pluginManaged: !0,
                    pluginName: l.pluginName,
                    pluginId: l.pluginId
                })), ol("[MCPService] Loaded plugin servers:", i.map((l)=>l.identifier));
        } catch (o) {
            r = "error", dy(this.structuredLogService, "error", "[MCPService] Error loading plugin servers", o instanceof Error ? o : void 0);
        }
        this.pluginServers = i, this._reportPluginCensus(e, r, s);
    }
    _reportPluginCensus(e, t, n) {
        const i = this.resolveEffectiveServers(), r = this.environmentService.remoteAuthority, s = {
            trigger: e,
            providerOutcome: t,
            descriptorsReceived: n,
            pluginServersAssigned: this.pluginServers.length,
            defaultServers: this.defaultServers.length,
            userServers: this.userConfiguredServers.length,
            projectServers: this.projectManagedServers.length,
            extensionServers: this.extensionRegisteredServers.length,
            providerServers: this.mcpProviderService.getAllProviders().length,
            effectiveTotal: i.length,
            enabledTotal: i.filter((a)=>this.isServerEnabled(a)).length,
            remoteAuthorityPrefix: r !== void 0 ? qJe(r) : "local"
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
        o !== this._lastPluginCensusSignature && (this._lastPluginCensusSignature = o, this.mcpFilesLogger.info(`[MCPService] Plugin MCP census: ${JSON.stringify(s)}`), dy(this.structuredLogService, "info", "[MCPService] Plugin MCP census", void 0, {
            subkey: "plugin_mcp_census",
            event: "mcp_plugin_resolution_census",
            ...s
        }));
    }
    async handleProjectMcpJsonChange(e, t) {
        ol(`[MCPService] Project MCP JSON changed: ${e.toString()}`);
        const n = this.folderToKey(t);
        try {
            const i = this.projectManagedServers.filter((s)=>s.projectPath === n), r = await this._handleMcpConfigFileChange(e, {
                projectManaged: !0,
                projectPath: n
            }, i);
            this.projectManagedServers = this.projectManagedServers.filter((s)=>!s.projectPath || s.projectPath !== n), this.projectManagedServers.push(...r);
        } catch (i) {
            ek(`[MCPService] Error parsing MCP JSON file: ${e.toString()}`, i);
        }
    }
    computeIdentifier(e) {
        const t = this.computeIdentifierPrefix(e.projectPath);
        return e.extensionId ? `${t}${e.extensionId}-${e.name}` : `${t}${e.name}`;
    }
    computeIdentifierPrefix(e) {
        return e ? `project-${e}-` : "user-";
    }
    async parseMcpServersFromFile(e, t) {
        if (!await this.fileService.exists(e)) return ol(`[MCPService] MCP config file does not exist: ${e}`), [];
        const i = this.computeIdentifierPrefix(t.projectPath);
        ol(`[MCPService] Using identifier prefix: ${i}`);
        try {
            const r = await this.fileService.readFile(e), s = Ctt(r.value.toString()), o = [];
            if (!s.mcpServers || typeof s.mcpServers != "object" || Array.isArray(s.mcpServers)) {
                const l = "Invalid config: mcpServers must be an object";
                return ol("[MCPService] " + l, s), ol("[MCPService] Setting parsing error for prefix:", i), this.setParsingErrors((u)=>{
                    const h = {
                        ...u,
                        [i]: l
                    };
                    return ol("[MCPService] New parsing errors:", h), h;
                }), o;
            }
            this.setParsingErrors((l)=>{
                const { [i]: u, ...h } = l;
                return ol("[MCPService] Cleared parsing error for prefix:", i), ol("[MCPService] Remaining parsing errors:", h), h;
            });
            for (const [l, u] of Object.entries(s.mcpServers)){
                const h = this.computeIdentifier({
                    name: l,
                    ...t
                });
                if (!u.command && !u.url) {
                    const g = `Server "${l}" must have either a command (for stdio) or url (for SSE)`;
                    ol("[MCPService] " + g), this.setParsingErrors((f)=>({
                            ...f,
                            [this.computeIdentifierPrefix(t.projectPath)]: g
                        }));
                    continue;
                }
                const p = Array.isArray(u.enabledTools) ? u.enabledTools.filter((g)=>typeof g == "string") : void 0;
                if (u.command) {
                    if (typeof u.command != "string" || !u.command.trim()) {
                        const f = `Server "${l}" has an invalid command: must be a non-empty string`;
                        ol("[MCPService] " + f), this.setParsingErrors((v)=>({
                                ...v,
                                [this.computeIdentifierPrefix(t.projectPath)]: f
                            }));
                        continue;
                    }
                    const g = {
                        identifier: h,
                        name: l,
                        type: "stdio",
                        env: u.env,
                        envFile: u.envFile,
                        command: u.command,
                        args: u.args,
                        ...t,
                        enabledTools: p
                    };
                    ol("[MCPService] Adding stdio server:", g), o.push(g);
                } else if (u.url) {
                    if (typeof u.url != "string" || !u.url.trim()) {
                        const b = `Server "${l}" has an invalid url: must be a non-empty string`;
                        ol("[MCPService] " + b), this.setParsingErrors((y)=>({
                                ...y,
                                [this.computeIdentifierPrefix(t.projectPath)]: b
                            }));
                        continue;
                    }
                    const g = this.ensureUrlHasProtocol(u.url), f = YAv(u.placement);
                    f === void 0 && u.placement !== void 0 && ol(`[MCPService] Server "${l}" declares an unknown placement, ignoring it:`, u.placement);
                    const v = {
                        identifier: h,
                        name: l,
                        type: "streamableHttp",
                        url: g,
                        headers: typeof u == "object" && "headers" in u ? u.headers : void 0,
                        auth: typeof u == "object" && "auth" in u ? u.auth : void 0,
                        ...f !== void 0 ? {
                            placement: f
                        } : {},
                        ...t,
                        enabledTools: p
                    };
                    ol("[MCPService] Adding streamableHttp server:", v), o.push(v);
                }
            }
            const a = this.approvedProjectMcpServers.get(), c = a.filter((l)=>{
                if (!l.startsWith(i)) return !0;
                const u = l.includes(":"), h = u ? l.split(":")[0] : l, p = o.find((f)=>f.identifier === h);
                if (!p) return !1;
                if (!u) return !0;
                const g = this.computeApprovalKey(p);
                return l === g;
            });
            return c.length !== a.length && this.approvedProjectMcpServers.set(c, void 0), o;
        } catch (r) {
            if (r.code !== "FileNotFound") {
                ek("[MCPService] Error parsing MCP config file:", r);
                const s = r instanceof SyntaxError ? `JSON syntax error: ${r.message}` : r instanceof Error ? r.message : String(r);
                ol("[MCPService] Setting parsing error for prefix:", i, s), this.setParsingErrors((o)=>{
                    const a = {
                        ...o,
                        [i]: s
                    };
                    return ol("[MCPService] New parsing errors:", a), a;
                });
            }
            return [];
        }
    }
    _normalizeInitializeServerReasons(e) {
        const t = (Array.isArray(e) ? e : [
            e
        ]).map((n)=>n.trim()).filter((n)=>n.length > 0);
        return t.length > 0 ? Array.from(new Set(t)) : [
            "unspecified"
        ];
    }
    async initializeServers(e = "unspecified") {
        if (this._store.isDisposed) return;
        const t = this._normalizeInitializeServerReasons(e);
        if (this.initializeServersPromise) return this.initializeServersRequestedDuringInit = !0, this.pendingInitializeServersReasons = this._normalizeInitializeServerReasons([
            ...this.pendingInitializeServersReasons,
            ...t
        ]), dy(this.structuredLogService, "info", "[MCPService] initializeServers requested while initialization already in progress", void 0, {
            subkey: "server_init",
            initializeReason: t[0],
            initializeReasons: JSON.stringify(t),
            queuedReasons: JSON.stringify(this.pendingInitializeServersReasons),
            queuedReasonCount: this.pendingInitializeServersReasons.length
        }), this.initializeServersPromise;
        const n = this._normalizeInitializeServerReasons([
            ...this.pendingInitializeServersReasons,
            ...t
        ]);
        if (this.pendingInitializeServersReasons = [], this.initializeServersRequestedDuringInit = !1, this.initializeServersPromise = this.doInitializeServers(n).finally(()=>{
            this.initializeServersPromise = void 0;
        }), await this.initializeServersPromise, this.initializeServersRequestedDuringInit) {
            const i = this.pendingInitializeServersReasons;
            return this.initializeServersRequestedDuringInit = !1, this.pendingInitializeServersReasons = [], this.initializeServers(i);
        }
        this._reconcileMissingDurableSnapshots("initialize_complete").catch((i)=>{
            ek("[MCPService] Error reconciling missing durable snapshots after initializeServers:", i);
        }), this._initialized || (this._initialized = !0, this._whenInitializedResolve?.(), this._onDidInitialize.fire()), this.reconcileHostedMcpPlacementAfterInit();
    }
    isInitialized() {
        return this._initialized;
    }
    async doInitializeServers(e) {
        dy(this.structuredLogService, "info", "[MCPService] Starting server initialization", void 0, {
            subkey: "server_init",
            initializeReason: e[0] ?? "unspecified",
            initializeReasons: JSON.stringify(e),
            initializeReasonCount: e.length
        }), await this.awaitHostedMcpPlacement(e[0] ?? "unspecified");
        const t = this.getServers();
        dy(this.structuredLogService, "info", `[MCPService] Found ${t.length} servers on startup`, void 0, {
            subkey: "server_init",
            serverCount: t.length,
            initializeReason: e[0] ?? "unspecified",
            initializeReasons: JSON.stringify(e),
            initializeReasonCount: e.length
        });
        try {
            await this.migrateLegacyApprovals();
        } catch (s) {
            dy(this.structuredLogService, "error", "[MCPService] Error migrating legacy approvals", s instanceof Error ? s : void 0, {
                subkey: "server_init"
            });
        }
        const n = [];
        for (const s of t){
            if (this.refuseUserDisabledServer(s, "initialize")) continue;
            const o = this.getServerBlockMessage(s);
            if (o) {
                ol(`[MCPService] Server ${s.identifier} is blocked, skipping`), this.updateServerStatus(s.identifier, {
                    type: "error",
                    error: o
                });
                continue;
            }
            if (!this.isServerEnabled(s) && !this.isMcpProviderServer(s)) {
                ol(`[MCPService] Server ${s.identifier} is disabled, skipping`), this.updateServerStatus(s.identifier, {
                    type: "disconnected"
                });
                continue;
            }
            if (s.type === "stdio" && !s.command) {
                JX(`[MCPService] Missing command for stdio server ${s.identifier}`), this.updateServerStatus(s.identifier, {
                    type: "error",
                    error: "Missing command for stdio server"
                });
                continue;
            }
            n.push(s);
        }
        ol(`[MCPService] Initializing ${n.length} servers in parallel`);
        const i = n.map(async (s)=>{
            try {
                ol(`[MCPService] Creating client for server: ${s.identifier}`);
                const o = await this.createClientIfNotExists(s);
                return o ? (ol(`[MCPService] Successfully created client for server: ${s.identifier}`), this.successfullyInitializedServers.add(s.identifier)) : ol(`[MCPService] createClient returned false for server: ${s.identifier} (may already be registered)`), {
                    server: s,
                    success: o
                };
            } catch (o) {
                return dy(this.structuredLogService, "error", `[MCPService] Error initializing server ${s.identifier}`, o instanceof Error ? o : void 0, {
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
            dy(this.structuredLogService, "error", "[MCPService] Error refreshing caches after server init", s instanceof Error ? s : void 0, {
                subkey: "server_init"
            });
        }
    }
    _getPostInitializeRefreshServerIdentifiers(e) {
        return e.filter((t)=>this.isMcpProviderServer(t) && !this._isBrowserProviderServer(t)).map((t)=>t.identifier);
    }
    _isBrowserProviderServer(e) {
        return e.identifier === Vee || e.identifier === O$;
    }
    async handleRemoteExtensionHostLifecycleEvent(e) {
        if (this.environmentService.remoteAuthority) {
            if (e === "register" && !this.hasObservedInitialRemoteExtensionRegistration) {
                this.hasObservedInitialRemoteExtensionRegistration = !0, this.isIgnoringInitialRemoteExtensionHostLifecycleBurst = !0, queueMicrotask(()=>{
                    this.isIgnoringInitialRemoteExtensionHostLifecycleBurst = !1;
                });
                return;
            }
            if (this.hasObservedInitialRemoteExtensionRegistration && !this.isIgnoringInitialRemoteExtensionHostLifecycleBurst) return this.remoteExtensionHostRefreshPromise ? (this.remoteExtensionHostRefreshRequestedWhileRunning = !0, this.remoteExtensionHostRefreshPromise) : (this.remoteExtensionHostRefreshPromise = (async ()=>{
                let t = e;
                do this.remoteExtensionHostRefreshRequestedWhileRunning = !1, ol(`[MCPService] Remote extension host lifecycle event (${t}) detected, refreshing MCP servers`), await this.initializeServers(), t = "coalesced";
                while (this.remoteExtensionHostRefreshRequestedWhileRunning)
            })().finally(()=>{
                this.remoteExtensionHostRefreshPromise = void 0, this.remoteExtensionHostRefreshRequestedWhileRunning = !1;
            }), this.remoteExtensionHostRefreshPromise);
        }
    }
    logRemoteExtensionHostLifecycleError(e, t) {
        dy(this.structuredLogService, "error", `[MCPService] Error handling remote extension ${e} lifecycle event`, t instanceof Error ? t : void 0, {
            subkey: "remote_extension_lifecycle",
            source: e,
            errorMessage: t instanceof Error ? t.message : String(t)
        });
    }
    migrateLegacyOriginMcpBuiltinIdentifier() {
        for (const e of [
            this.disabledMcpServers,
            this.disabledGlobalMcpServers
        ]){
            const t = e.get();
            if (!t.includes(m0o)) continue;
            const n = t.filter((i)=>i !== m0o);
            n.includes(Pmt.identifier) || n.push(Pmt.identifier), e.set(n, void 0);
        }
    }
    shouldRegisterOriginMcpBuiltinServer() {
        return this.mcpProcessClientFactory !== void 0 && !this.environmentService.remoteAuthority && this.cursorAuthenticationService.isAuthenticated() && this.experimentsService.checkFeatureGate("origin_mcp", {
            disableExposureLog: !this.experimentsService.hasAuthenticatedStatsigUser()
        });
    }
    reconcileOriginMcpBuiltinServer(e) {
        return this.originMcpReconcileSequence = this.originMcpReconcileSequence.then(async ()=>{
            let t = !1;
            try {
                const n = this.defaultServers.find(xKv);
                this.shouldRegisterOriginMcpBuiltinServer() ? n || (this.defaultServers = [
                    ...this.defaultServers,
                    Ewh
                ], this.getServers(), t = !0) : n && (this.defaultServers = this.defaultServers.filter((i)=>i !== n), this.getServers(), t = !0, await this.deleteClient(n, "origin_mcp_removed"));
            } catch (n) {
                ek("[MCPService] Failed to reconcile Origin MCP server:", n);
            }
            (t || e.startsWith("login_changed_")) && await this.initializeServers(e);
        }).catch((t)=>{
            ek("[MCPService] Failed to reconcile Origin MCP server:", t);
        }), this.originMcpReconcileSequence;
    }
    resolveEffectiveServers() {
        const t = this.mcpProviderService.getAllProviders().map((i)=>({
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
            ...t
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
        const e = this.resolveEffectiveServers();
        return ol("[MCPService] Getting servers:", e.map((t)=>({
                identifier: t.identifier,
                type: t.type,
                command: t.command,
                url: t.url,
                status: this.statusCache()[t.identifier]
            }))), this.setAllServers(e), this.cleanupHiddenDedupeServerRuntimeState(), e;
    }
    _isEverythingProviderManagedServer(e) {
        return !this.isMcpProviderServer(e);
    }
    _isExthostConnectionOwner(e) {
        return !!(!this.isMcpSharedProcessTransportEnabled() || this.isMcpProviderServer(e));
    }
    _isEverythingProviderExthostManagedServer(e) {
        return this._isEverythingProviderManagedServer(e) && !this.shouldUseMcpProcessClient(e.identifier, e);
    }
    _shouldMutateStatusDuringRefreshCaches(e) {
        return this.isMcpSharedProcessTransportEnabled() ? this._isExthostConnectionOwner(e) : !0;
    }
    _isCursorMcpExthostDegradedStatus(e) {
        return e?.type === "degraded" && e.reason === _0o;
    }
    _handleEverythingProviderCommandChange(e) {
        if (e.command === $x.CreateClient) {
            if (e.state === "unregistered") {
                this._markEverythingProviderServersDegraded();
                return;
            }
            this._queueEverythingProviderRehydrate(e.generation);
        }
    }
    _markEverythingProviderServersDegraded() {
        for (const e of this.getServers()){
            if (!this._isEverythingProviderExthostManagedServer(e) || !this.isServerEnabled(e) || this.isServerBlocked(e)) continue;
            const t = this.statusCache()[e.identifier];
            t?.type !== "connected" && t?.type !== "initializing" || (this._cursorMcpDegradedServers.add(e.identifier), this.updateServerStatus(e.identifier, {
                type: "degraded",
                reason: _0o
            }));
        }
    }
    _getEverythingProviderRehydrateCandidates() {
        return this.getServers().filter((e)=>!this._cursorMcpDegradedServers.has(e.identifier) || !this._isEverythingProviderExthostManagedServer(e) || !this.isServerEnabled(e) || this.isServerBlocked(e) ? !1 : this._isCursorMcpExthostDegradedStatus(this.statusCache()[e.identifier]));
    }
    _queueEverythingProviderRehydrate(e) {
        this._cursorMcpDegradedServers.size !== 0 && (this._everythingProviderRehydrateTargetGeneration = Math.max(this._everythingProviderRehydrateTargetGeneration, e), !this._everythingProviderRehydratePromise && (this._everythingProviderRehydratePromise = this._runEverythingProviderRehydrateLoop().catch((t)=>{
            ek("[MCPService] Error rehydrating EverythingProvider-managed servers:", t), dy(this.structuredLogService, "error", "[MCPService] Error rehydrating EverythingProvider-managed servers", t instanceof Error ? t : void 0, {
                subkey: "everything_provider_rehydrate"
            });
        }).finally(()=>{
            this._everythingProviderRehydratePromise = void 0;
        })));
    }
    async _runEverythingProviderRehydrateLoop() {
        do {
            const e = this._everythingProviderRehydrateTargetGeneration;
            if (await this._rehydrateEverythingProviderServers(), e === this._everythingProviderRehydrateTargetGeneration) return;
        }while (!0)
    }
    async _rehydrateEverythingProviderServers() {
        const e = this._getEverythingProviderRehydrateCandidates();
        if (e.length !== 0) for(let t = 0; t < e.length; t += b0o){
            const n = e.slice(t, t + b0o);
            await Promise.all(n.map(async (i)=>{
                try {
                    await this.createClient(i) && (this.successfullyInitializedServers.add(i.identifier), this._cursorMcpDegradedServers.delete(i.identifier), this.updateServerStatus(i.identifier, {
                        type: "connected"
                    }));
                } catch (r) {
                    dy(this.structuredLogService, "warn", `[MCPService] Failed to rehydrate server after EverythingProvider re-registration: ${i.identifier}`, r instanceof Error ? r : void 0, {
                        subkey: "rehydrate_after_provider_register",
                        identifier: i.identifier,
                        serverName: i.name
                    });
                }
            }));
        }
    }
    logMcpFile(e, t, ...n) {
        this.mcpFilesLogger[e](t, ...n), dy(this.structuredLogService, e, t, n[0] instanceof Error ? n[0] : void 0, {
            subkey: "mcp_files"
        });
    }
    mcpWorkbenchServerLoggerId(e) {
        return `${pyo(e)}.workbench`;
    }
    getMcpWorkbenchServerLogger(e) {
        const t = e, n = this.mcpWorkbenchServerLoggers.get(t);
        if (n) return n;
        if (this._store.isDisposed) return new JYr;
        const i = this.loggerService.createLogger(this.mcpWorkbenchServerLoggerId(e), {
            name: "MCPService",
            hidden: !1,
            group: B7v(e)
        });
        return this.mcpWorkbenchServerLoggers.set(t, i), i;
    }
    logMcpServerFile(e, t, n, ...i) {
        this.logMcpFile(t, n, ...i), this.getMcpWorkbenchServerLogger(e)[t](n, ...i);
    }
    _logOAuth(e, t, n, i) {
        e === "error" ? this.mcpOAuthLogger.error(t, n) : this.mcpOAuthLogger[e](t), dy(this.structuredLogService, e, t, n, {
            subkey: "mcp_oauth",
            ...i
        });
    }
    _logAllowlist(e, t, n) {
        this._mcpAllowlistLogger[e](t), dy(this.structuredLogService, e, t, void 0, {
            subkey: "mcp_allowlist",
            ...n
        });
    }
    updateServerStatus(e, t) {
        const n = this.allServers().find((o)=>o.identifier === e) ?? this.getServers().find((o)=>o.identifier === e);
        if (!n) {
            ek(`[MCPService] Cannot update status: server ${e} not found`), dy(this.structuredLogService, "error", "[MCPService] Cannot update status: server not found", void 0, {
                subkey: "status_update",
                identifier: e
            });
            return;
        }
        const i = this.statusCache()[e], r = JSON.stringify(i) !== JSON.stringify(t), s = i?.type !== t.type;
        if (this.setStatusCache((o)=>({
                ...o,
                [e]: t
            })), this._isCursorMcpExthostDegradedStatus(t) || this._cursorMcpDegradedServers.delete(e), r && (this._onDidChangeServerStatus.fire({
            identifier: e,
            status: t
        }), this._emitStatusTransitionMetrics(n, i, t), s)) {
            const o = t.type === "error" ? "error" : t.type === "degraded" ? "warn" : "info";
            dy(this.structuredLogService, o, `[MCPService] Server status update: ${e} -> ${t.type}`, void 0, {
                subkey: "status_update",
                identifier: e,
                serverName: n.name,
                newStatus: t.type,
                oldStatus: i?.type ?? "unknown"
            });
            const a = i?.type ?? "none", c = t.type, l = this.statusEnteredAtMs.get(e), u = l !== void 0 ? Date.now() - l : void 0;
            this.statusEnteredAtMs.set(e, Date.now());
            const h = (()=>{
                try {
                    return typeof n.url == "string" ? new URL(n.url).host : void 0;
                } catch  {
                    return;
                }
            })();
            this._logOAuth("info", `[MCPService] State transition: ${e} ${a} \u2192 ${c}`, void 0, {
                event: "mcp_oauth_state_transition",
                serverIdentifier: e,
                from: a,
                to: c,
                serverUrlHost: h,
                serverType: n.type,
                previousStateDurationMs: u,
                ...t.type === "error" ? {
                    errorDetail: IKv(t.error)
                } : {}
            });
        }
    }
    clearServerStatus(e) {
        this.setStatusCache((t)=>{
            const { [e]: n, ...i } = t;
            return i;
        });
    }
    _isIncomingSnapshotNewer(e, t) {
        return t.snapshotEpoch !== e.snapshotEpoch ? t.snapshotEpoch > e.snapshotEpoch : t.snapshotRevision > e.snapshotRevision;
    }
    _isExactDuplicateSnapshot(e, t) {
        return e.snapshotEpoch === t.snapshotEpoch && e.snapshotRevision === t.snapshotRevision && this._providerSnapshotMatches(e, t);
    }
    receiveMcpSnapshots(e, t) {
        this._hasReceivedAnySnapshots = !0;
        const n = performance.now(), i = [];
        let r = 0;
        for (const f of e){
            const v = this._durableSnapshots.get(f.serverIdentifier);
            if (v && !this._isIncomingSnapshotNewer(v, f)) {
                r++, this._isExactDuplicateSnapshot(v, f) || dy(this.structuredLogService, "warn", `[MCPService] Dropping stale snapshot for ${f.serverIdentifier}`, void 0, {
                    subkey: "snapshot",
                    identifier: f.serverIdentifier,
                    incomingEpoch: f.snapshotEpoch,
                    incomingRevision: f.snapshotRevision,
                    existingEpoch: v.snapshotEpoch,
                    existingRevision: v.snapshotRevision
                });
                continue;
            }
            this._durableSnapshotGeneration++;
            const b = {
                ...f,
                snapshotGeneration: this._durableSnapshotGeneration
            };
            this._durableSnapshots.set(b.serverIdentifier, b), this._clearSnapshotWatchdogOnFreshSnapshot(b), i.push(b), dy(this.structuredLogService, "info", `[MCPService] Received snapshot for ${f.serverIdentifier}`, void 0, {
                subkey: "snapshot",
                identifier: f.serverIdentifier,
                serverName: f.serverName,
                snapshotEpoch: f.snapshotEpoch,
                snapshotRevision: f.snapshotRevision,
                status: f.status,
                toolCount: f.tools.length,
                resourceCount: f.resources.length,
                promptCount: f.prompts.length,
                hasInstructions: f.instructions !== void 0,
                generation: this._durableSnapshotGeneration
            });
        }
        if (i.length === 0) {
            const f = performance.now() - n, v = {
                mcp_version: "snapshots"
            };
            this.metricsService.distribution({
                stat: "mcp.snapshot.receive_duration_ms",
                value: f,
                tags: v
            }), this.metricsService.distribution({
                stat: "mcp.snapshot.receive_tool_count",
                value: 0,
                tags: v
            }), this.metricsService.increment({
                stat: "mcp.snapshot.receive_count",
                value: e.length,
                tags: v
            }), this.metricsService.increment({
                stat: "mcp.snapshot.receive_stale_count",
                value: r,
                tags: v
            });
            return;
        }
        const s = {}, o = {}, a = {}, c = {}, l = {};
        let u = 0;
        for (const f of i)s[f.serverIdentifier] = Zkh(f), o[f.serverIdentifier] = tKv(f), a[f.serverIdentifier] = f.prompts.map((v)=>({
                name: v.name,
                description: v.description ?? "",
                inputSchema: {}
            })), c[f.serverIdentifier] = nKv(f), f.instructions !== void 0 && (l[f.serverIdentifier] = f.instructions), u += f.tools.length;
        const h = this.statusCache();
        this.setToolsCache((f)=>({
                ...f,
                ...s
            })), this.setStatusCache((f)=>({
                ...f,
                ...o
            })), this.setPromptsCache((f)=>({
                ...f,
                ...a
            })), this.setResourcesCache((f)=>({
                ...f,
                ...c
            })), this.setInstructionsCache((f)=>{
            const v = {
                ...f,
                ...l
            };
            for (const b of i)b.instructions === void 0 && delete v[b.serverIdentifier];
            return v;
        });
        for (const f of i){
            const v = o[f.serverIdentifier], b = h[f.serverIdentifier];
            v && b?.type !== v.type && this._onDidChangeServerStatus.fire({
                identifier: f.serverIdentifier,
                status: v
            });
        }
        this._onDidChangeMcpSnapshots.fire(i.map((f)=>f.serverIdentifier));
        const p = performance.now() - n, g = {
            mcp_version: "snapshots"
        };
        this.metricsService.distribution({
            stat: "mcp.snapshot.receive_duration_ms",
            value: p,
            tags: g
        }), this.metricsService.distribution({
            stat: "mcp.snapshot.receive_tool_count",
            value: u,
            tags: g
        }), this.metricsService.increment({
            stat: "mcp.snapshot.receive_count",
            value: e.length,
            tags: g
        }), this.metricsService.increment({
            stat: "mcp.snapshot.receive_stale_count",
            value: r,
            tags: g
        });
    }
    receiveMcpFileSystemDescriptors(e) {
        this._mcpFileSystemDescriptors = Object.freeze(e);
    }
    receiveMcpWorkspaceProjectDir(e) {
        this._mcpWorkspaceProjectDir = e;
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
        const e = this.allServers(), t = new Map(e.map((o)=>[
                o.identifier,
                o
            ])), n = this.statusCache(), i = this._getRawMcpSnapshots(), r = this._withSyntheticSnapshots(i, e, n), s = [];
        for (const o of r){
            const a = t.get(o.serverIdentifier) ?? this._synthesizeMissingBrowserProviderServer(o);
            a && (!this.isServerEnabled(a) && !this.isMcpProviderServer(a) || this.isMcpProviderServer(a) && this.shouldSkipBrowserServer(a) || s.push(this._resolveSnapshot(o, a, n)));
        }
        return s;
    }
    _synthesizeMissingBrowserProviderServer(e) {
        if (e.serverIdentifier === Vee && this._durableSnapshots.has(e.serverIdentifier)) return {
            identifier: e.serverIdentifier,
            name: e.serverName,
            type: "streamableHttp",
            url: "mcp-provider://" + e.serverIdentifier,
            projectManaged: !1
        };
    }
    getResolvedMcpSnapshot(e) {
        const t = this.statusCache();
        let n = this._durableSnapshots.get(e);
        const i = this.allServers().find((r)=>r.identifier === e) ?? (n ? this._synthesizeMissingBrowserProviderServer(n) : void 0);
        if (!(!i || !this.isServerEnabled(i) && !this.isMcpProviderServer(i)) && !(this.isMcpProviderServer(i) && this.shouldSkipBrowserServer(i))) {
            if (!n) {
                const r = t[e];
                if (r?.type === "needsAuth" || r?.type === "error") n = this._makeSyntheticSnapshot(i, r);
                else return;
            }
            return this._resolveSnapshot(n, i, t);
        }
    }
    getResolvedMcpSnapshotTools() {
        const e = new Map(this.allServers().map((t)=>[
                t.identifier,
                t
            ]));
        return this.getResolvedMcpSnapshots().map((t)=>{
            const n = e.get(t.serverIdentifier) ?? this._synthesizeMissingBrowserProviderServer(t), i = n !== void 0 && this.isMcpProviderServer(n);
            return {
                serverIdentifier: t.serverIdentifier,
                serverName: t.serverName,
                plugin: t.plugin,
                marketplace: t.marketplace,
                pluginId: t.pluginId,
                marketplaceId: t.marketplaceId,
                ...i ? {
                    source: "internal"
                } : {},
                tools: t.tools
            };
        });
    }
    recordGetMcpToolsDiscoveryFreshness() {
        const e = this._lastObservedMetaMcpSnapshots;
        if (e === void 0 || e.length === 0) return;
        const t = new Map(this.getResolvedMcpSnapshots().map((n)=>[
                n.serverIdentifier,
                n
            ]));
        for (const n of e){
            const i = t.get(n.serverIdentifier);
            i !== void 0 && this._emitMcpDiscoveryFreshnessMetrics("meta_mcp", n.serverIdentifier, this._normalizeMetaMcpToolNames(i), this._normalizeMetaMcpToolNames(n));
        }
    }
    setMetaMcpFreshnessBaseline(e) {
        this._lastObservedMetaMcpSnapshots = e.map((t)=>({
                ...t,
                tools: t.tools.map((n)=>({
                        name: n.name,
                        description: n.description,
                        inputSchema: n.inputSchema,
                        outputSchema: n.outputSchema
                    })),
                resources: [],
                prompts: []
            }));
    }
    _normalizeMetaMcpToolNames(e) {
        return e ? e.tools.map((t)=>t.name).filter((t)=>t.length > 0).sort((t, n)=>t.localeCompare(n)) : [];
    }
    _emitMcpDiscoveryFreshnessMetrics(e, t, n, i) {
        const r = new Set(i), s = new Set(n), o = n.filter((u)=>!r.has(u)), a = i.filter((u)=>!s.has(u)), c = o.length === 0 && a.length === 0 ? "match" : "mismatch", l = {
            surface: e
        };
        this.metricsService.increment({
            stat: "mcp.discovery_freshness.check",
            value: 1,
            tags: {
                ...l,
                outcome: c
            }
        }), this.metricsService.distribution({
            stat: "mcp.discovery_freshness.missing_tools",
            value: o.length,
            tags: l
        }), this.metricsService.distribution({
            stat: "mcp.discovery_freshness.extra_tools",
            value: a.length,
            tags: l
        }), this.metricsService.distribution({
            stat: "mcp.discovery_freshness.symmetric_difference",
            value: o.length + a.length,
            tags: l
        });
    }
    _withSyntheticSnapshots(e, t, n) {
        const i = new Set(e.map((s)=>s.serverIdentifier)), r = [
            ...e
        ];
        for (const s of t){
            if (i.has(s.identifier)) continue;
            const o = n[s.identifier];
            (o?.type === "needsAuth" || o?.type === "error") && r.push(this._makeSyntheticSnapshot(s, o));
        }
        return r;
    }
    _makeSyntheticSnapshot(e, t) {
        return {
            serverIdentifier: e.identifier,
            serverName: e.name,
            plugin: e.pluginName,
            marketplace: e.marketplace,
            pluginId: e.pluginId,
            marketplaceId: e.marketplaceId,
            snapshotEpoch: 0,
            snapshotRevision: 0,
            status: t.type,
            statusDetail: this._mcpStatusDetail(t),
            statusRetryable: t.type === "error" ? t.isRetryable : void 0,
            tools: [],
            resources: [],
            prompts: [],
            instructions: void 0,
            snapshotGeneration: 0
        };
    }
    _buildProviderSnapshotPush(e, t, n) {
        const i = this._durableSnapshots.get(e.identifier), r = this.statusCache()[e.identifier];
        return {
            serverIdentifier: e.identifier,
            serverName: e.name,
            plugin: e.pluginName,
            marketplace: e.marketplace,
            pluginId: e.pluginId,
            marketplaceId: e.marketplaceId,
            snapshotEpoch: i?.snapshotEpoch ?? Date.now(),
            snapshotRevision: i?.snapshotRevision !== void 0 ? i.snapshotRevision + 1 : 1,
            status: r?.type ?? "connected",
            statusDetail: r ? this._mcpStatusDetail(r) : void 0,
            statusRetryable: r?.type === "error" ? r.isRetryable : void 0,
            tools: t.tools.map((s)=>({
                    name: s.name,
                    description: s.description,
                    inputSchema: a0o(s.parameters),
                    outputSchema: s.outputSchema ? a0o(s.outputSchema) : void 0,
                    _meta: s._meta
                })),
            resources: t.resources?.map((s)=>({
                    uri: s.uri,
                    name: s.name,
                    description: s.description,
                    mimeType: s.mimeType
                })) ?? [],
            prompts: t.prompts.map((s)=>({
                    name: s.name,
                    description: s.description,
                    arguments: AKv(s.parameters)
                })),
            instructions: n
        };
    }
    _normalizeProviderSnapshot(e) {
        return {
            serverIdentifier: e.serverIdentifier,
            serverName: e.serverName,
            plugin: e.plugin,
            marketplace: e.marketplace,
            pluginId: e.pluginId,
            marketplaceId: e.marketplaceId,
            status: e.status,
            statusDetail: e.statusDetail,
            statusRetryable: e.statusRetryable,
            tools: e.tools.map((t)=>({
                    name: t.name,
                    description: t.description,
                    inputSchema: t.inputSchema,
                    outputSchema: t.outputSchema,
                    _meta: t._meta
                })).sort((t, n)=>t.name.localeCompare(n.name)),
            resources: e.resources.map((t)=>({
                    uri: t.uri,
                    name: t.name,
                    description: t.description,
                    mimeType: t.mimeType
                })).sort((t, n)=>t.uri.localeCompare(n.uri)),
            prompts: e.prompts.map((t)=>({
                    name: t.name,
                    description: t.description,
                    arguments: (t.arguments ?? []).map((n)=>({
                            name: n.name,
                            description: n.description,
                            required: n.required
                        })).sort((n, i)=>n.name.localeCompare(i.name))
                })).sort((t, n)=>t.name.localeCompare(n.name)),
            instructions: e.instructions
        };
    }
    _providerSnapshotMatches(e, t) {
        return yh(this._normalizeProviderSnapshot(e), this._normalizeProviderSnapshot(t));
    }
    _maybeRefreshProviderSnapshot(e, t, n) {
        if (!this.isMcpProviderServer(e)) return;
        const i = this._buildProviderSnapshotPush(e, t, n), r = this._durableSnapshots.get(e.identifier);
        r && this._providerSnapshotMatches(r, i) || this.receiveMcpSnapshots([
            i
        ]);
    }
    _resolveSnapshot(e, t, n) {
        const i = n[e.serverIdentifier], r = i?.type ?? e.status, s = i ? this._mcpStatusDetail(i) ?? e.statusDetail : e.statusDetail, o = i?.type === "error" ? i.isRetryable : e.statusRetryable, a = this.makeToolDisabledChecker(t), c = e.tools.filter((l)=>!a(l.name, l.annotations));
        return {
            ...e,
            serverName: t.name,
            plugin: t.pluginName,
            marketplace: t.marketplace,
            pluginId: t.pluginId,
            marketplaceId: t.marketplaceId,
            tools: c,
            status: r,
            statusDetail: s,
            statusRetryable: o
        };
    }
    _getToolsFromDurableSnapshotLast(e) {
        const t = this._durableSnapshots.get(e.identifier);
        if (!t) return;
        const n = this.makeToolDisabledChecker(e);
        return Zkh(t).filter((i)=>!n(i.name, i.annotations));
    }
    _getToolsRawFromDurableSnapshot(e) {
        const t = this._durableSnapshots.get(e.identifier);
        if (!t) return;
        const n = this.makeToolDisabledChecker(e);
        return t.tools.filter((i)=>!n(i.name, i.annotations)).map((i)=>({
                name: i.name,
                description: i.description,
                inputSchema: i.inputSchema,
                outputSchema: i.outputSchema,
                annotations: i.annotations
            }));
    }
    _warnToolsInCacheMissingFromDurableSnapshot(e, t) {
        const n = this._durableSnapshots.get(e.identifier);
        if (!n || !t?.length) return;
        const i = this.makeToolDisabledChecker(e), r = new Set(n.tools.filter((s)=>!i(s.name, s.annotations)).map((s)=>s.name));
        for (const s of t)i(s.name, s.annotations) || r.has(s.name) || dy(this.structuredLogService, "warn", `[MCPService] Tool "${s.name}" is in tools cache but not in durable snapshot for server ${e.identifier}`, void 0, {
            subkey: "snapshot",
            identifier: e.identifier,
            serverName: e.name,
            toolName: s.name
        });
    }
    _serverHasDurableSnapshotTools(e) {
        const t = this._durableSnapshots.get(e);
        return t !== void 0 && t.tools.length > 0;
    }
    _shouldSkipPassiveCreateForDurableSnapshot(e, t) {
        return t?.type === "degraded" || t?.type === "error" && t.isRetryable !== !1 ? !1 : e.type === "streamableHttp" && e.auth !== void 0 && this.shouldUseMcpProcessClient(e.identifier, e) && this._serverHasDurableSnapshotTools(e.identifier);
    }
    _shouldAttemptSnapshotRefreshForMcpStatus(e) {
        return !(!e || e.type === "needsAuth" || e.type === "error" && e.isRetryable === !1);
    }
    _serverInfoFromResolvedServer(e) {
        const t = e.type === "streamableHttp" && e.url ? this.ensureUrlHasProtocol(e.url) : e.url || "";
        return e.type === "stdio" ? {
            type: "stdio",
            command: e.command ?? "",
            args: e.args,
            env: e.env ?? {},
            cwd: e.cwd,
            projectPath: e.projectPath
        } : {
            type: "streamableHttp",
            serverUrl: t,
            headers: e.headers,
            auth: e.auth,
            ...e.placement !== void 0 ? {
                placement: e.placement
            } : {},
            projectPath: e.projectPath
        };
    }
    async _reloadClientWithResolvedServer(e, t, n = "user_requested") {
        const i = this.mcpClientProviders.get(e.identifier) ?? await this.getMcpClient(e.identifier, e.name, e), r = i instanceof k3n ? i.getUnderlyingClient() : i, s = this._serverInfoFromResolvedServer(t);
        try {
            return await r.reloadClient(s, n);
        } catch (o) {
            return ek(`[MCPService] Error reloading client (underlying) for ${e.identifier}:`, o), {
                success: !1,
                connected: !1,
                statusType: "error",
                error: o instanceof Error ? o.message : String(o)
            };
        }
    }
    async _ensureConnectedWithResolvedServer(e, t, n) {
        const i = this.mcpClientProviders.get(e.identifier) ?? await this.getMcpClient(e.identifier, e.name, e), r = i instanceof k3n ? i.getUnderlyingClient() : i, s = this._serverInfoFromResolvedServer(t);
        try {
            return GZi(r) ? await r.ensureConnected(s, n) : await r.createClient(s);
        } catch (o) {
            return ek(`[MCPService] Error ensuring client (underlying) for ${e.identifier}:`, o), {
                success: !1,
                connected: !1,
                statusType: "error",
                error: o instanceof Error ? o.message : String(o)
            };
        }
    }
    _nextServerIncarnationId(e) {
        const t = (this.serverIncarnationIds.get(e) ?? 0) + 1;
        return this.serverIncarnationIds.set(e, t), t;
    }
    _clearSnapshotWatchdog(e, t) {
        this.snapshotWatchdogs.deleteAndDispose(e);
    }
    _clearAllSnapshotWatchdogs(e) {
        for (const t of Array.from(this.snapshotWatchdogs.keys()))this._clearSnapshotWatchdog(t, e);
    }
    _clearSnapshotWatchdogOnFreshSnapshot(e) {
        const t = this.snapshotWatchdogs.get(e.serverIdentifier);
        !t || e.snapshotGeneration <= t.baselineSnapshotGeneration || (this.metricsService.distribution({
            stat: "mcp.create_to_first_snapshot_ms",
            value: Date.now() - t.startedAtMs
        }), this._clearSnapshotWatchdog(e.serverIdentifier, "snapshot_received"));
    }
    _armSnapshotWatchdog(e, t) {
        if (this.isMcpProviderServer(e) || this._store.isDisposed) return;
        const n = this._nextServerIncarnationId(e.identifier), i = this._durableSnapshots.get(e.identifier)?.snapshotGeneration ?? 0, r = Date.now();
        this._clearSnapshotWatchdog(e.identifier, "replaced"), ((o, a)=>{
            const c = Cl(()=>{
                this._runSnapshotWatchdog(e.identifier, n, i, o);
            }, a, this._store);
            this.snapshotWatchdogs.set(e.identifier, new g0o({
                timer: c,
                serverIncarnationId: n,
                baselineSnapshotGeneration: i,
                attempt: o,
                startedAtMs: r,
                reason: t
            }));
        })(0, Sq._SNAPSHOT_WATCHDOG_INITIAL_DELAY_MS);
    }
    _shouldSkipPassiveSnapshotRecovery(e, t) {
        return t.reason !== "reload" && t.baselineSnapshotGeneration > 0 && e.type === "streamableHttp" && e.auth !== void 0 && this.shouldUseMcpProcessClient(e.identifier, e);
    }
    async _requestSnapshotRefresh(e) {
        if (this.shouldUseMcpProcessClient(e.identifier, e)) {
            const t = await this.getMcpClient(e.identifier, e.name, e), n = t instanceof k3n ? t.getUnderlyingClient() : t;
            if (GZi(n) && n.probeServer) {
                await n.probeServer("snapshot_recovery");
                return;
            }
        }
        if (!this.workbenchCommandRegistry.getCommand(zZi)) {
            dy(this.structuredLogService, "info", `[MCPService] Skipping snapshot refresh for ${e.identifier}: refresh command is not registered`, void 0, {
                subkey: "snapshot_watchdog",
                identifier: e.identifier,
                reconcileReason: "refresh_command_unregistered"
            });
            return;
        }
        await this.commandService.executeCommand(zZi, {
            identifier: e.identifier
        });
    }
    async _runSnapshotWatchdog(e, t, n, i) {
        const r = this.snapshotWatchdogs.get(e);
        if (!r || r.serverIncarnationId !== t || r.attempt !== i) return;
        const s = this._durableSnapshots.get(e);
        if (s && s.snapshotGeneration > n) {
            this._clearSnapshotWatchdog(e, "snapshot_received");
            return;
        }
        const o = this.resolveEffectiveServers().find((c)=>c.identifier === e);
        if (!o) {
            this._clearSnapshotWatchdog(e, "server_missing");
            return;
        }
        const a = this.statusCache()[e];
        if (!this._shouldAttemptSnapshotRefreshForMcpStatus(a)) {
            this._clearSnapshotWatchdog(e, "server_not_ready");
            return;
        }
        if (this._shouldSkipPassiveSnapshotRecovery(o, r)) {
            dy(this.structuredLogService, "info", `[MCPService] Snapshot watchdog preserving existing durable snapshot for ${e}`, void 0, {
                subkey: "snapshot_watchdog",
                identifier: e,
                serverIncarnationId: t,
                reconcileReason: r.reason,
                baselineSnapshotGeneration: n
            }), this._clearSnapshotWatchdog(e, "snapshot_not_required");
            return;
        }
        if (i === 0) {
            dy(this.structuredLogService, "warn", `[MCPService] Snapshot watchdog retrying refresh for ${e}`, void 0, {
                subkey: "snapshot_watchdog",
                identifier: e,
                serverIncarnationId: t,
                reconcileReason: "missing_durable_snapshot",
                lastDeleteReason: this.lastDeleteReasons.get(e) ?? "none"
            });
            try {
                await this._requestSnapshotRefresh(o);
            } catch (u) {
                const h = u instanceof Error && u.message === `command '${zZi}' not found`;
                dy(this.structuredLogService, h ? "warn" : "error", `[MCPService] Snapshot watchdog failed to request refresh for ${e}`, u instanceof Error ? u : void 0, {
                    subkey: "snapshot_watchdog",
                    identifier: e,
                    serverIncarnationId: t,
                    reconcileReason: "missing_durable_snapshot",
                    lastDeleteReason: this.lastDeleteReasons.get(e) ?? "none"
                });
            }
            const c = this.snapshotWatchdogs.get(e);
            if (!c || c.serverIncarnationId !== t || c.attempt !== 0) return;
            const l = Cl(()=>{
                this._runSnapshotWatchdog(e, t, n, 1);
            }, Sq._SNAPSHOT_WATCHDOG_RETRY_DELAY_MS, this._store);
            this.snapshotWatchdogs.set(e, new g0o({
                ...c,
                timer: l,
                attempt: 1
            }));
            return;
        }
        this.metricsService.increment({
            stat: "mcp.snapshot.watchdog_timed_out_without_snapshot"
        }), dy(this.structuredLogService, "warn", `[MCPService] Snapshot watchdog timed out without a fresh snapshot for ${e}`, void 0, {
            subkey: "snapshot_watchdog",
            identifier: e,
            serverIncarnationId: t,
            reconcileReason: "missing_durable_snapshot",
            lastDeleteReason: this.lastDeleteReasons.get(e) ?? "none"
        }), this._clearSnapshotWatchdog(e, "attempts_exhausted");
    }
    async _reconcileMissingDurableSnapshots(e) {
        const t = this.getServers().filter((n)=>{
            if (this.isMcpProviderServer(n) || !this.isServerEnabled(n)) return !1;
            const i = this.statusCache()[n.identifier];
            return this._shouldAttemptSnapshotRefreshForMcpStatus(i) ? !this._durableSnapshots.has(n.identifier) : !1;
        });
        t.length !== 0 && (dy(this.structuredLogService, "info", "[MCPService] Reconciling servers missing durable snapshots", void 0, {
            subkey: "snapshot_reconcile",
            reconcileReason: e,
            serverCount: t.length
        }), await Promise.allSettled(t.map(async (n)=>{
            this.snapshotWatchdogs.has(n.identifier) || this._armSnapshotWatchdog(n, "reconcile_sweep"), dy(this.structuredLogService, "info", `[MCPService] Requesting snapshot refresh for ${n.identifier} from reconcile sweep`, void 0, {
                subkey: "snapshot_reconcile",
                identifier: n.identifier,
                serverName: n.name,
                reconcileReason: e,
                lastDeleteReason: this.lastDeleteReasons.get(n.identifier) ?? "none"
            }), await this._requestSnapshotRefresh(n);
        })));
    }
    _mcpStatusDetail(e) {
        switch(e.type){
            case "needsAuth":
                return e.authorizationUrl;
            case "error":
                return e.error;
            case "degraded":
                return e.reason;
            case "connected":
            case "disconnected":
            case "initializing":
                return;
            default:
                return e;
        }
    }
    isMcpInfoComplete() {
        return this._hasReceivedAnySnapshots;
    }
    drainWindowedCounters() {
        const e = {
            mcpVersion: "snapshots",
            ...this._windowedCounters
        };
        return this._windowedCounters = Sq._freshWindowedCounters(), e;
    }
    ensureUrlHasProtocol(e) {
        let t = e;
        e.match(/^[a-z]{1,8}:\/\//) || (ol(`[MCPService] Adding http:// protocol to URL: ${e}`), t = `http://${e}`);
        try {
            const n = new URL(t);
            if (n.protocol === "http:" && Sq.GOOGLE_WORKSPACE_MCP_HOSTS.has(n.hostname.toLowerCase())) return ol(`[MCPService] Upgrading https-only MCP host to https: ${n.hostname}`), n.protocol = "https:", n.toString();
        } catch  {}
        return t;
    }
    async resolveDefaultAuth(e, t) {
        let n;
        try {
            n = new URL(e);
        } catch  {
            return t;
        }
        if (Sq.GOOGLE_WORKSPACE_MCP_HOSTS.has(n.hostname)) {
            if (n.protocol === "https:" && jCo(t?.CLIENT_ID) === void 0) {
                const i = this.aiServerConfigService.cachedServerConfig.googleWorkspaceMcpOauthClient;
                if (i !== void 0 && i.clientId.length > 0) {
                    const r = e0g(n.hostname)?.scopes, s = {
                        ...t ?? {},
                        CLIENT_ID: i.clientId,
                        ...(t?.scopes === void 0 || t.scopes.length === 0) && r !== void 0 ? {
                            scopes: [
                                ...r
                            ]
                        } : {}
                    };
                    return i.clientSecret.length > 0 ? s.CLIENT_SECRET = i.clientSecret : delete s.CLIENT_SECRET, s;
                }
            }
            return t;
        }
        return Yzv(e, t, this.defaultAuthResolver);
    }
    async reloadClient(e, t = "user_requested") {
        ol(`[MCPService] Reloading client for server ${e}`);
        try {
            const n = this.resolveEffectiveServers().find((s)=>s.identifier === e);
            if (!n) throw new Error("Server not found");
            if (this.refuseUserDisabledServer(n, "reload")) return {
                success: !1,
                connected: !1,
                statusType: "disconnected",
                error: "Server is disabled"
            };
            this._armSnapshotWatchdog(n, "reload"), await this.refreshHostedMcpPlacementForReload(n);
            const i = await this.resolveServerVariables(n), r = this.getResolvedServerBlockMessage(i);
            return r ? (this._logAllowlist("warn", `[MCPService] Blocking MCP reload for ${e}: ${r}`, {
                identifier: e,
                serverName: n.name,
                serverUrl: i.url
            }), this.updateServerStatus(e, {
                type: "error",
                error: r
            }), {
                success: !1,
                connected: !1,
                statusType: "error",
                error: r
            }) : await this._reloadClientWithResolvedServer(n, i, t);
        } catch (n) {
            ek(`[MCPService] Error reloading client for server ${e}:`, n);
            return;
        }
    }
    _mergeRefreshServerIds(e, t) {
        if (e === "all") return e;
        if (!t || t.length === 0) return "all";
        const n = new Set(e ?? []);
        for (const i of t)n.add(i);
        return n;
    }
    _refreshScopeSummary(e) {
        if (!e || e.length === 0) return "all";
        const t = Array.from(new Set(e)), n = t.slice(0, 5).join(",");
        return t.length > 5 ? `${n},...(${t.length} total)` : n;
    }
    _isServerRefreshable(e) {
        if (e.type === "stdio" && !e.command) return JX(`[MCPService] Missing command for stdio server ${e.identifier}`), !1;
        const t = this.isServerEnabled(e), n = this.isMcpProviderServer(e);
        return !t && !n ? (ol(`[MCPService] Skipping disabled server ${e.identifier} during refreshCaches`), !1) : !(this.isMcpSharedProcessTransportEnabled() && this.shouldUseMcpProcessClient(e.identifier, e));
    }
    _getServersToRefresh(e) {
        const t = this.getServers();
        return (!e || e.length === 0 ? t : t.filter((i)=>e.includes(i.identifier))).filter((i)=>this._isServerRefreshable(i));
    }
    _applyRefreshResultForServer(e, t, n) {
        const i = this._getEffectiveOfferingsForRefreshResult(e.identifier, t, n);
        if (i !== t) return this.logMcpFile("info", `[MCPService] Preserving prior offerings for ${e.identifier} during transient degraded refresh`), {
            offerings: i,
            tools: n.previousTools[e.identifier] ?? [],
            prompts: n.previousPrompts[e.identifier],
            resources: n.previousResources[e.identifier]
        };
        const r = {
            type: "object",
            properties: {}
        }, s = ({ raw: l, fallback: u, serverIdentifier: h, entityType: p, entityName: g, fieldName: f })=>{
            if (!l) return u;
            try {
                const v = JSON.parse(l);
                if (v && typeof v == "object") return v;
                const b = `[MCPService] Non-object ${p}.${f} for ${h}/${g}; using fallback`;
                return this.logMcpFile("warn", b), JX(b), u;
            } catch (v) {
                const b = `[MCPService] Failed to parse ${p}.${f} for ${h}/${g}; using fallback`;
                return this.logMcpFile("warn", b, v), JX(b, v), u;
            }
        }, o = t.tools.map((l)=>({
                name: l.name,
                originalName: l.originalName,
                description: l.description,
                inputSchema: s({
                    raw: l.parameters,
                    fallback: r,
                    serverIdentifier: e.identifier,
                    entityType: "tool",
                    entityName: l.name,
                    fieldName: "parameters"
                }),
                outputSchema: l.outputSchema ? s({
                    raw: l.outputSchema,
                    fallback: r,
                    serverIdentifier: e.identifier,
                    entityType: "tool",
                    entityName: l.name,
                    fieldName: "outputSchema"
                }) : void 0,
                title: l.title,
                meta: l._meta
            }));
        ol(`[MCPService] Found ${o.length} tools on server ${e.identifier}`);
        const a = t.prompts.length > 0 ? t.prompts.map((l)=>({
                name: l.name,
                description: l.description,
                inputSchema: s({
                    raw: l.parameters,
                    fallback: r,
                    serverIdentifier: e.identifier,
                    entityType: "prompt",
                    entityName: l.name,
                    fieldName: "parameters"
                })
            })) : void 0;
        a !== void 0 && ol(`[MCPService] Found ${a.length} prompts on server ${e.identifier}`);
        const c = t.resources && t.resources.length > 0 ? t.resources.map((l)=>({
                uri: l.uri,
                name: l.name,
                description: l.description,
                mimeType: l.mimeType,
                annotations: l.annotations
            })) : void 0;
        return c !== void 0 && ol(`[MCPService] Found ${c.length} resources on server ${e.identifier}`), {
            offerings: i,
            tools: o,
            prompts: a,
            resources: c
        };
    }
    async _refreshSingleServerCache(e, t) {
        var n = [];
        try {
            const s = sjt(n, S_(qh().withName("mcp.refreshSingleServerCache")));
            s.span.setAttribute("mcp.ipc.connection_type", this.environmentService.remoteAuthority ? "remote" : "local"), s.span.setAttribute("mcp.ipc.server_identifier", e);
            const o = performance.now(), a = (t ?? this.getServers()).find((y)=>y.identifier === e);
            if (!a || !this._isServerRefreshable(a)) return;
            const c = this.toolsCache(), l = this.promptsCache(), u = this.resourcesCache(), h = this.instructionsCache();
            let p;
            try {
                if (p = await this._listOfferingsForServer(a.identifier, a), p && this._isAbortedOfferingsRefreshResult(p)) this.metricsService.increment({
                    stat: "mcp.offering_fetch",
                    tags: {
                        version: "v1",
                        result: "aborted"
                    }
                });
                else if (p && this._isAuthoritativeOfferingsRefreshResult(p)) {
                    const y = this.statusCache()[a.identifier], T = (p.tools?.length ?? 0) > 0 || (p.prompts?.length ?? 0) > 0 || (p.resources?.length ?? 0) > 0;
                    this._shouldMutateStatusDuringRefreshCaches(a) && (y?.type === "error" || y?.type === "needsAuth") && T && (ol(`[MCPService] Server ${a.identifier} was in '${y.type}' but listOfferings succeeded with results, recovering to 'connected'`), this.updateServerStatus(a.identifier, {
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
            } catch (y) {
                const T = y instanceof Error ? y.message : String(y);
                if (_wh(y)) {
                    ol(`[MCPService] Metadata refresh aborted for server ${a.identifier}; preserving prior status and offerings`), this.metricsService.increment({
                        stat: "mcp.offering_fetch",
                        tags: {
                            version: "v1",
                            result: "aborted"
                        }
                    });
                    return;
                }
                ek(`[MCPService] Error refreshing caches for server ${a.identifier}:`, T), this.metricsService.increment({
                    stat: "mcp.offering_fetch",
                    tags: {
                        version: "v1",
                        result: "error"
                    }
                }), this._shouldMutateStatusDuringRefreshCaches(a) && this.updateServerStatus(a.identifier, {
                    type: "error",
                    error: T
                });
                return;
            }
            if (!p) return;
            if (this._isAbortedOfferingsRefreshResult(p)) {
                this.logMcpFile("info", `[MCPService] Ignoring aborted metadata refresh for ${a.identifier}; preserving prior status and offerings`);
                return;
            }
            const g = this._applyRefreshResultForServer(a, p, {
                previousTools: c,
                previousPrompts: l,
                previousResources: u
            }), f = {
                [a.identifier]: g.offerings
            };
            this.setToolsCache((y)=>({
                    ...y,
                    [a.identifier]: g.tools
                })), this.setPromptsCache((y)=>{
                const T = {
                    ...y
                };
                return g.prompts === void 0 ? delete T[a.identifier] : T[a.identifier] = g.prompts, T;
            }), this.setResourcesCache((y)=>{
                const T = {
                    ...y
                };
                return g.resources === void 0 ? delete T[a.identifier] : T[a.identifier] = g.resources, T;
            }), this.mcpWellKnownDetectionService.preResolveServerIcons([
                a
            ]);
            let v = h[a.identifier];
            try {
                v = (await this.getInstructionsForWriting([
                    a
                ])).find((T)=>T.serverIdentifier === a.identifier)?.instructions, this.metricsService.increment({
                    stat: "mcp.instructions_fetch",
                    tags: {
                        version: "v1",
                        result: "success"
                    }
                });
            } catch (y) {
                this.metricsService.increment({
                    stat: "mcp.instructions_fetch",
                    tags: {
                        version: "v1",
                        result: "error"
                    }
                }), this.logMcpFile("warn", "getInstructionsForWriting failed (continuing with previous instructions):", y), ek("[MCPService] Error fetching instructions for MCP index files:", y);
            }
            this.setInstructionsCache((y)=>{
                const T = {
                    ...y
                };
                return v === void 0 || v.length === 0 ? delete T[a.identifier] : T[a.identifier] = v, T;
            }), this._maybeRefreshProviderSnapshot(a, g.offerings, v);
            const b = performance.now() - o;
            s.span.setAttribute("mcp.ipc.duration_ms", String(b)), s.span.setAttribute("mcp.ipc.server_count", "1"), this.metricsService.distribution({
                stat: "mcp.ipc.duration_ms",
                value: b,
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
            ojt(n, i, r);
        }
    }
    async refreshMcpProviderCaches() {
        const e = this.getServers().filter((t)=>this.isMcpProviderServer(t) && this._isServerRefreshable(t)).map((t)=>t.identifier);
        e.length !== 0 && await this.refreshCaches({
            serverIdentifiers: e
        });
    }
    async refreshCaches(e) {
        if (this.refreshCachesPromise) return this.pendingRefreshServerIds = this._mergeRefreshServerIds(this.pendingRefreshServerIds, e?.serverIdentifiers), ol(`[MCPService] Refresh already in progress, queuing for follow-up refresh (scope=${this.pendingRefreshServerIds === "all" || this.pendingRefreshServerIds === void 0 ? "all" : this._refreshScopeSummary(Array.from(this.pendingRefreshServerIds))})`), this._shouldEmitCoalesceMetrics && this.metricsService.increment({
            stat: "mcp.refresh_caches",
            tags: {
                result: "coalesced"
            }
        }), new Promise((t)=>{
            this.pendingRefreshResolvers.push(t);
        });
        {
            const t = e?.force ?? !1;
            if (this._shouldEmitCoalesceMetrics && this.metricsService.increment({
                stat: "mcp.refresh_caches",
                tags: {
                    result: "executed",
                    force: t ? "true" : "false"
                }
            }), e?.serverIdentifiers && e.serverIdentifiers.length > 0) {
                const n = this.getServers();
                this.refreshCachesPromise = Promise.all(Array.from(new Set(e.serverIdentifiers)).map((i)=>this._refreshSingleServerCache(i, n))).then(()=>{});
            } else this.refreshCachesPromise = this._doRefreshCaches();
            try {
                await this.refreshCachesPromise, this.metricsService.increment({
                    stat: "mcp.settings_changed_fired"
                }), this._onSettingsChanged.fire();
            } finally{
                if (this.refreshCachesPromise = void 0, this.pendingRefreshResolvers.length > 0) {
                    const n = this.pendingRefreshServerIds;
                    ol(`[MCPService] Refresh was requested during refresh, running again to pick up changes (scope=${n === "all" || n === void 0 ? "all" : this._refreshScopeSummary(Array.from(n))})`);
                    const i = this.pendingRefreshResolvers;
                    this.pendingRefreshResolvers = [], this.pendingRefreshServerIds = void 0, this.refreshCaches({
                        force: !0,
                        serverIdentifiers: n === "all" || n === void 0 ? void 0 : Array.from(n)
                    }).then(()=>{
                        for (const r of i)r();
                    }).catch((r)=>{
                        ek("[MCPService] Error during follow-up refresh:", r);
                        for (const s of i)s();
                    });
                }
            }
        }
    }
    async _listOfferingsForServer(e, t) {
        var n = [];
        try {
            const s = sjt(n, S_(qh().withName("mcp.listOfferingsForServer")));
            return s.span.setAttribute("mcp.ipc.connection_type", this.environmentService.remoteAuthority ? "remote" : "local"), s.span.setAttribute("mcp.ipc.server_identifier", e), this.metricsService.increment({
                stat: "mcp.list_offerings_call",
                tags: {
                    version: "v1"
                }
            }), await o0o(s.span, "list_offerings", this.metricsService, async ()=>(await this.getMcpClient(e, void 0, t)).listOfferings());
        } catch (s) {
            var i = s, r = !0;
        } finally{
            ojt(n, i, r);
        }
    }
    async refreshPluginServersAndWait() {
        await this.refreshPluginServers("refresh_plugin_servers_and_wait"), await this.initializeServers("refresh_plugin_servers_and_wait");
    }
    _shouldPreservePriorOfferingsForRefreshResult(e, t, n) {
        if (t.refreshState !== "transient_degraded") return !1;
        const { previousTools: i, previousPrompts: r, previousResources: s } = n;
        return (i[e]?.length ?? 0) > 0 || (r[e]?.length ?? 0) > 0 || (s[e]?.length ?? 0) > 0 ? !(t.tools.length > 0 || t.prompts.length > 0 || (t.resources?.length ?? 0) > 0) : !1;
    }
    _isAuthoritativeOfferingsRefreshResult(e) {
        return e.refreshState !== "transient_degraded" && e.refreshState !== "aborted";
    }
    _isAbortedOfferingsRefreshResult(e) {
        return e.refreshState === "aborted";
    }
    _getEffectiveOfferingsForRefreshResult(e, t, n) {
        if (!this._shouldPreservePriorOfferingsForRefreshResult(e, t, n)) return t;
        const { previousTools: i, previousPrompts: r, previousResources: s } = n;
        return {
            tools: (i[e] ?? []).map((o)=>({
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
            prompts: (r[e] ?? []).map((o)=>({
                    name: o.name,
                    description: o.description,
                    parameters: JSON.stringify(o.inputSchema)
                })),
            resources: s[e]?.map((o)=>({
                    uri: o.uri,
                    name: o.name,
                    description: o.description,
                    mimeType: o.mimeType,
                    annotations: o.annotations
                })),
            refreshState: t.refreshState
        };
    }
    async _doRefreshCaches() {
        var e = [];
        try {
            const i = sjt(e, S_(qh().withName("mcp.refreshCaches")));
            i.span.setAttribute("mcp.ipc.connection_type", this.environmentService.remoteAuthority ? "remote" : "local");
            const r = performance.now();
            ol("[MCPService] Refreshing tools");
            const s = this.getServers(), o = this.toolsCache(), a = this.promptsCache(), c = this.resourcesCache(), l = this.instructionsCache(), u = new Set, h = this._getServersToRefresh();
            if (h.length === 0) return;
            ol(`[MCPService] Refreshing caches for ${h.length} servers in parallel`);
            const p = h.map(async (R)=>{
                try {
                    const D = await this._listOfferingsForServer(R.identifier, R);
                    if (D && this._isAbortedOfferingsRefreshResult(D)) return this.metricsService.increment({
                        stat: "mcp.offering_fetch",
                        tags: {
                            version: "v1",
                            result: "aborted"
                        }
                    }), {
                        server: R,
                        result: D,
                        error: null
                    };
                    if (D && this._isAuthoritativeOfferingsRefreshResult(D)) {
                        const P = this.statusCache()[R.identifier], N = (D.tools?.length ?? 0) > 0 || (D.prompts?.length ?? 0) > 0 || (D.resources?.length ?? 0) > 0;
                        this._shouldMutateStatusDuringRefreshCaches(R) && (P?.type === "error" || P?.type === "needsAuth") && N && (ol(`[MCPService] Server ${R.identifier} was in '${P.type}' but listOfferings succeeded with results, recovering to 'connected'`), this.updateServerStatus(R.identifier, {
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
                        server: R,
                        result: D,
                        error: null
                    };
                } catch (D) {
                    const P = D instanceof Error ? D.message : String(D);
                    return _wh(D) ? (ol(`[MCPService] Metadata refresh aborted for server ${R.identifier}; preserving prior status and offerings`), this.metricsService.increment({
                        stat: "mcp.offering_fetch",
                        tags: {
                            version: "v1",
                            result: "aborted"
                        }
                    }), u.add(R.identifier), {
                        server: R,
                        result: null,
                        error: D
                    }) : (ek(`[MCPService] Error refreshing caches for server ${R.identifier}:`, P), this.metricsService.increment({
                        stat: "mcp.offering_fetch",
                        tags: {
                            version: "v1",
                            result: "error"
                        }
                    }), this._shouldMutateStatusDuringRefreshCaches(R) && this.updateServerStatus(R.identifier, {
                        type: "error",
                        error: P
                    }), {
                        server: R,
                        result: null,
                        error: D
                    });
                }
            }), g = await Promise.allSettled(p), f = {}, v = {}, b = {}, y = {};
            for (const R of g){
                if (R.status === "rejected") continue;
                const { server: D, result: P } = R.value;
                if (!P) continue;
                if (this._isAbortedOfferingsRefreshResult(P)) {
                    this.logMcpFile("info", `[MCPService] Ignoring aborted metadata refresh for ${D.identifier}; preserving prior status and offerings`), u.add(D.identifier);
                    continue;
                }
                const N = this._applyRefreshResultForServer(D, P, {
                    previousTools: o,
                    previousPrompts: a,
                    previousResources: c
                });
                y[D.identifier] = N.offerings, f[D.identifier] = N.tools, N.prompts !== void 0 && (v[D.identifier] = N.prompts), N.resources !== void 0 && (b[D.identifier] = N.resources);
            }
            for (const R of u)o[R] !== void 0 && (f[R] = o[R]), a[R] !== void 0 && (v[R] = a[R]), c[R] !== void 0 && (b[R] = c[R]);
            this.setToolsCache({
                ...o,
                ...f
            }), this.setPromptsCache({
                ...a,
                ...v
            }), this.setResourcesCache({
                ...c,
                ...b
            }), this.mcpWellKnownDetectionService.preResolveServerIcons(s);
            const T = {};
            for (const R of u){
                const D = l[R];
                D !== void 0 && (T[R] = D);
            }
            const E = h.filter((R)=>!u.has(R.identifier));
            try {
                const R = E.length > 0 ? await this.getInstructionsForWriting(E) : [];
                for (const D of R)T[D.serverIdentifier] = D.instructions;
                this.metricsService.increment({
                    stat: "mcp.instructions_fetch",
                    tags: {
                        version: "v1",
                        result: "success"
                    }
                });
            } catch (R) {
                this.metricsService.increment({
                    stat: "mcp.instructions_fetch",
                    tags: {
                        version: "v1",
                        result: "error"
                    }
                }), this.logMcpFile("warn", "getInstructionsForWriting failed (continuing with empty instructions):", R), ek("[MCPService] Error fetching instructions for MCP index files:", R);
            }
            this.setInstructionsCache({
                ...l,
                ...T
            });
            for (const R of h){
                const D = y[R.identifier];
                D && this._maybeRefreshProviderSnapshot(R, D, T[R.identifier]);
            }
            const A = performance.now() - r;
            i.span.setAttribute("mcp.ipc.duration_ms", String(A)), i.span.setAttribute("mcp.ipc.server_count", String(h.length)), this.metricsService.distribution({
                stat: "mcp.ipc.duration_ms",
                value: A,
                tags: {
                    name: "refresh_caches",
                    outcome: "success",
                    server_count: String(h.length)
                }
            }), this.metricsService.increment({
                stat: "mcp.ipc.count",
                tags: {
                    name: "refresh_caches",
                    outcome: "success"
                }
            });
        } catch (i) {
            var t = i, n = !0;
        } finally{
            ojt(e, t, n);
        }
    }
    async statusOfServer(e) {
        const t = this.getServerBlockMessage(e);
        return t !== void 0 ? {
            type: "error",
            error: t
        } : this.isMcpProviderServer(e) ? {
            type: "connected"
        } : this.statusCache()[e.identifier] || {
            type: "disconnected"
        };
    }
    async getAvailableTools() {
        ol("[MCPService] Getting available tools");
        const e = {}, t = this.toolsCache(), n = (r, s)=>{
            const o = t[r];
            if (!o?.length) return;
            const a = this.makeToolDisabledChecker(s);
            e[r] = o.filter((c)=>!a(c.name, c.annotations));
        }, i = this.getServers();
        for (const r of i){
            if (this.getServerBlockMessage(r) !== void 0) {
                ol(`[MCPService] Skipping blocked server ${r.identifier}`);
                continue;
            }
            if (!r || !this.isServerEnabled(r) && !this.isMcpProviderServer(r)) {
                ol(`[MCPService] Skipping disabled server ${r.identifier}`);
                continue;
            }
            if (this.isMcpProviderServer(r) && this.shouldSkipBrowserServer(r)) {
                ol(`[MCPService] Skipping browser server ${r.identifier} during getAvailableTools`);
                continue;
            }
            const s = this._getToolsFromDurableSnapshotLast(r);
            if (s !== void 0) {
                this._warnToolsInCacheMissingFromDurableSnapshot(r, t[r.identifier]);
                const o = this.makeToolDisabledChecker(r);
                e[r.identifier] = s.filter((a)=>!o(a.name, a.annotations));
                continue;
            }
            n(r.identifier, r);
        }
        return ol("[MCPService] Available tools:", Object.values(e).flat().map((r)=>r.name)), e;
    }
    async getToolsForComposer(e, t) {
        ol("[MCPService] Getting tools for composer");
        const n = Date.now(), i = await this.getAvailableTools(), r = [], s = (l)=>{
            const u = l.meta?.ui?.visibility;
            return !u || u.length === 0 || u.includes("model");
        }, o = (l)=>{
            if (!e || e === "agent" || e === "plan") return !0;
            if (e === "chat" || e === "edit") return !1;
            const u = this.composerModesService.getMode(e);
            return u ? u?.enabledMcpServers.includes(l) : !0;
        }, a = t?.browserIntegrationPreference ?? this.reactiveStorageService.applicationUserPersistentStorage.lastBrowserConnectionMode, c = kPe(a);
        for(const l in i){
            const u = this.getServers().find((v)=>v.identifier === l);
            if (!u || !o(l)) continue;
            const h = i[l].filter(s), p = u.name;
            if (c === "none" && p === Xkt) continue;
            const f = this.isMcpProviderServer(u);
            r.push(...h.map((v)=>({
                    name: v.name,
                    description: v.description,
                    parameters: JSON.stringify(v.inputSchema),
                    serverName: Nwt(p),
                    ...f && v.meta?.transcriptDisplay ? {
                        transcriptDisplay: v.meta.transcriptDisplay
                    } : {}
                })));
        }
        return this._emitDiscoveryMetrics(Date.now() - n, r.length), r;
    }
    async getInstructionsForComposer(e, t) {
        return this._fetchInstructionsForComposer(e, t);
    }
    async _fetchInstructionsForServerById(e) {
        let t;
        try {
            t = await this.everythingProviderService.waitForCommandEverythingProvider(0, $x.CreateClient);
        } catch  {
            return "";
        }
        if (!t) return "";
        const n = new AbortController;
        return ((await wCt(()=>t.runCommand($x.GetInstructions, {
                identifier: e
            }, n.signal), this._getMcpIpcTimeouts().metadataTimeoutMs, `mcp.runCommand.${$x.GetInstructions}`, n))?.instructions ?? "").trim();
    }
    async _getInstructionsForServer(e, t) {
        if (this.isMcpProviderServer(e)) return this.mcpProviderService.getMcpProvider(e.identifier)?.instructions?.trim();
        if (this.statusCache()[e.identifier]?.type === "connected") {
            if (this.metricsService.increment({
                stat: "mcp.get_instructions"
            }), t) {
                const i = new AbortController;
                return ((await wCt(()=>t.runCommand($x.GetInstructions, {
                        identifier: e.identifier
                    }, i.signal), this._getMcpIpcTimeouts().metadataTimeoutMs, `mcp.runCommand.${$x.GetInstructions}`, i))?.instructions ?? "").trim();
            }
            return this._fetchInstructionsForServerById(e.identifier);
        }
    }
    async _fetchInstructionsForComposer(e, t) {
        ol("[MCPService] Getting instructions for composer");
        const n = this.getServers();
        let i;
        try {
            i = await this.everythingProviderService.waitForCommandEverythingProvider(0, $x.CreateClient);
        } catch  {
            return ol("[MCPService] Everything provider not ready yet, returning empty instructions"), [];
        }
        if (!i) return JX("[MCPService] No everything provider available to fetch instructions"), [];
        const r = (c)=>{
            if (!e || e === "agent" || e === "plan") return !0;
            if (e === "chat" || e === "edit") return !1;
            const l = this.composerModesService.getMode(e);
            return l ? l?.enabledMcpServers.includes(c) : !0;
        }, s = t?.browserIntegrationPreference ?? this.reactiveStorageService.applicationUserPersistentStorage.lastBrowserConnectionMode, o = kPe(s), a = [];
        for (const c of n){
            if (!this.isServerEnabled(c) && !this.isMcpProviderServer(c) || !r(c.identifier)) continue;
            const l = c.name, u = c.identifier;
            if (!(o === "none" && l === Xkt)) try {
                const h = await this._getInstructionsForServer(c, i);
                h && h.length > 0 && a.push({
                    serverName: l,
                    serverIdentifier: u,
                    instructions: h
                });
            } catch (h) {
                JX(`[MCPService] Error getting instructions for server ${c.identifier}:`, h);
            }
        }
        return a;
    }
    async getInstructionsForWriting(e) {
        let t;
        try {
            t = await this.everythingProviderService.waitForCommandEverythingProvider(0, $x.CreateClient);
        } catch  {
            return [];
        }
        if (!t) return [];
        const n = [];
        for (const i of e){
            if (!this.isServerEnabled(i) && !this.isMcpProviderServer(i) || this.isMcpProviderServer(i) && this.shouldSkipBrowserServer(i)) continue;
            const r = i.identifier;
            try {
                const s = await this._getInstructionsForServer(i, t);
                s && s.length > 0 && n.push({
                    serverIdentifier: r,
                    instructions: s
                });
            } catch (s) {
                JX(`[MCPService] Error getting instructions for server ${i.identifier}:`, s);
            }
        }
        return n;
    }
    _snapshotContainsTool(e, t) {
        return e?.tools.some((n)=>n.name === t) ?? !1;
    }
    _getLogicalToolFailure(e) {
        if (!e || typeof e != "object" || !("isError" in e) || e.isError !== !0) return {
            isLogicalError: !1
        };
        let t;
        if ("content" in e && Array.isArray(e.content)) {
            const n = [];
            for (const i of e.content)!i || typeof i != "object" || "type" in i && i.type === "text" && "text" in i && typeof i.text == "string" && n.push(i.text);
            n.length > 0 && (t = n.join(`
`).slice(0, 1e3));
        }
        return {
            isLogicalError: !0,
            logicalErrorMessage: t
        };
    }
    _summarizeServerIdentifiers(e) {
        const t = Array.from(new Set(e));
        if (t.length === 0) return;
        const n = t.slice(0, 5).join(",");
        return t.length > 5 ? `${n},...(${t.length} total)` : n;
    }
    _getToolCallFailureContextMetadata(e) {
        try {
            const t = this.getServers(), n = e.server ?? (e.requestedServerIdentifier ? t.find((u)=>u.identifier === e.requestedServerIdentifier) : void 0), i = n ? this.statusCache()[n.identifier] : e.requestedServerIdentifier ? this.statusCache()[e.requestedServerIdentifier] : void 0, r = n ? this._durableSnapshots.get(n.identifier) : void 0, s = n ? this.getResolvedMcpSnapshot(n.identifier) : void 0, o = Object.entries(this.toolsCache()).filter(([, u])=>u.some((h)=>h.name === e.toolName)).map(([u])=>u), a = Array.from(this._durableSnapshots.values()).filter((u)=>this._snapshotContainsTool(u, e.toolName)).map((u)=>u.serverIdentifier), c = this.getResolvedMcpSnapshots().filter((u)=>this._snapshotContainsTool(u, e.toolName)).map((u)=>u.serverIdentifier), l = {
                failureKind: e.failureKind,
                toolName: e.toolName,
                toolCallId: e.toolCallId,
                requestedServerIdentifier: e.requestedServerIdentifier,
                logicalErrorMessage: e.logicalErrorMessage,
                snapshotPushEnabled: !0,
                toolCallConnectionType: this.environmentService.remoteAuthority ? "remote_ssh" : "local",
                hasRemoteAuthority: !!this.environmentService.remoteAuthority,
                browserConnectionMode: kPe(this.reactiveStorageService.applicationUserPersistentStorage.lastBrowserConnectionMode),
                registeredServerCount: t.length,
                enabledServerCount: t.filter((u)=>this.isServerEnabled(u)).length,
                matchingToolsCacheServerCount: o.length,
                matchingRawSnapshotServerCount: a.length,
                matchingResolvedSnapshotServerCount: c.length,
                matchingToolsCacheServers: this._summarizeServerIdentifiers(o),
                matchingRawSnapshotServers: this._summarizeServerIdentifiers(a),
                matchingResolvedSnapshotServers: this._summarizeServerIdentifiers(c)
            };
            return n && Object.assign(l, {
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
                toolDisabledState: this.isToolDisabled(n, e.toolName) ?? "enabled",
                toolPresentInToolsCache: (this.toolsCache()[n.identifier] ?? []).some((u)=>u.name === e.toolName),
                latestSnapshotPresent: !!r,
                latestSnapshotEpoch: r?.snapshotEpoch,
                latestSnapshotRevision: r?.snapshotRevision,
                latestSnapshotGeneration: r?.snapshotGeneration,
                latestSnapshotStatus: r?.status,
                latestSnapshotToolCount: r?.tools.length,
                latestSnapshotPromptCount: r?.prompts.length,
                latestSnapshotResourceCount: r?.resources.length,
                latestSnapshotHasInstructions: r?.instructions !== void 0,
                latestSnapshotHasRequestedTool: this._snapshotContainsTool(r, e.toolName),
                resolvedSnapshotPresent: !!s,
                resolvedSnapshotStatus: s?.status,
                resolvedSnapshotToolCount: s?.tools.length,
                resolvedSnapshotHasRequestedTool: this._snapshotContainsTool(s, e.toolName)
            }), {
                mcpErrorMeta: l
            };
        } catch (t) {
            return {
                mcpErrorMeta: {
                    toolName: e.toolName,
                    toolCallId: e.toolCallId,
                    requestedServerIdentifier: e.requestedServerIdentifier,
                    failureKind: e.failureKind,
                    logicalErrorMessage: e.logicalErrorMessage,
                    failureContextBuildErrorMessage: t instanceof Error ? t.message : String(t)
                }
            };
        }
    }
    async callTool(e, t, n, i, r, s) {
        i?.throwIfAborted(), ol("[MCPService] Calling tool:", e, "with toolCallId:", n);
        const o = Date.now(), a = this.getServers(), c = await this.getAvailableTools(), l = kPe(this.reactiveStorageService.applicationUserPersistentStorage.lastBrowserConnectionMode);
        let u = !1, h, p;
        for(const g in c){
            if (s && g !== s) continue;
            const f = a.filter((R)=>this.isServerEnabled(R)).find((R)=>R.identifier === g);
            if (!f) continue;
            const v = f.name, b = f.identifier, y = v === Xkt, T = b === O$ || v === Ykt;
            if (l === "editor") {
                if (T) continue;
            } else if ((l === "none" || l === void 0) && (y || T)) continue;
            if (c[g].find((R)=>R.name === e)) {
                u = !0, h = f;
                try {
                    const R = await this.getMcpClient(f.identifier);
                    let D = t;
                    if (f.name === Xkt || f.identifier === O$) {
                        const N = this.experimentsService.getDynamicConfig("playwright_log_configs", {
                            disableExposureLog: !1
                        });
                        D = {
                            ...t,
                            __playwrightLogConfigs: N
                        }, ol("[MCPService] Added Playwright log configs to tool call:", D.__playwrightLogConfigs);
                    }
                    const P = await R.callTool(e, D, {
                        useLeaseElicitation: !1,
                        toolCallId: n,
                        abortSignal: i,
                        composerId: r
                    });
                    if (P) {
                        const N = Date.now() - o, O = this._deriveServerSource(f), F = this._getLogicalToolFailure(P);
                        return F.isLogicalError ? (dy(this.structuredLogService, "error", `[MCPService] Tool ${e} on server ${g} returned isError`, void 0, {
                            subkey: "tool_call",
                            toolName: e,
                            serverIdentifier: g,
                            toolCallId: n,
                            failureKind: "direct_call_logical_error",
                            ...this._getToolCallFailureContextMetadata({
                                toolName: e,
                                toolCallId: n,
                                failureKind: "direct_call_logical_error",
                                server: f,
                                requestedServerIdentifier: s,
                                logicalErrorMessage: F.logicalErrorMessage
                            })
                        }), this._emitToolCallMetrics({
                            durationMs: N,
                            status: "error",
                            source: O,
                            transport: q1e(f),
                            providerHost: cLe(f)
                        })) : this._emitToolCallMetrics({
                            durationMs: N,
                            status: "success",
                            source: O,
                            transport: q1e(f),
                            providerHost: cLe(f)
                        }), this.clearProgressForTool(n), n && this.clearElicitationRequestsForToolCall(n), P;
                    }
                } catch (R) {
                    ek(`[MCPService] Error calling tool ${e} on server ${g}:`, R), dy(this.structuredLogService, "error", `[MCPService] Error calling tool ${e} on server ${g}`, R instanceof Error ? R : void 0, {
                        subkey: "tool_call",
                        toolName: e,
                        serverIdentifier: g,
                        toolCallId: n,
                        failureKind: "direct_call_error",
                        ...this._getToolCallFailureContextMetadata({
                            toolName: e,
                            toolCallId: n,
                            failureKind: "direct_call_error",
                            server: f,
                            requestedServerIdentifier: s
                        })
                    }), p = R, this.clearProgressForTool(n), n && this.clearElicitationRequestsForToolCall(n);
                }
            }
        }
        if (u) {
            const g = p instanceof Error && p.message === "Tool call was cancelled" ? "cancelled" : "error";
            throw this._emitToolCallMetrics({
                durationMs: Date.now() - o,
                status: g,
                source: h !== void 0 ? this._deriveServerSource(h) : "unknown",
                transport: h !== void 0 ? q1e(h) : void 0,
                providerHost: h !== void 0 ? cLe(h) : void 0
            }), p instanceof Error ? new Error(`Tool execution failed: ${p.message}`, {
                cause: p
            }) : new Error(`Tool execution failed: ${String(p)}`);
        }
        throw this._emitToolCallMetrics({
            durationMs: Date.now() - o,
            status: "error",
            source: "unknown"
        }), dy(this.structuredLogService, "error", `[MCPService] No server found with tool: ${e}`, void 0, {
            subkey: "tool_call",
            toolName: e,
            toolCallId: n,
            failureKind: "tool_lookup_failure",
            ...this._getToolCallFailureContextMetadata({
                toolName: e,
                toolCallId: n,
                failureKind: "tool_lookup_failure",
                requestedServerIdentifier: s
            })
        }), new Error(`No server found with tool: ${e}`);
    }
    async callToolForLease(e, t, n, i) {
        const { abortSignal: r, toolCallId: s } = i;
        r?.throwIfAborted(), ol("[MCPService] Calling tool for lease:", t, "on server:", e, "with toolCallId:", s);
        const o = Date.now();
        let c = this.getServers().find((p)=>p.identifier === e);
        if (!c) {
            const p = this._durableSnapshots.get(e);
            c = p ? this._synthesizeMissingBrowserProviderServer(p) : void 0;
        }
        if (!c) throw this._emitToolCallMetrics({
            durationMs: Date.now() - o,
            status: "error",
            source: "unknown"
        }), dy(this.structuredLogService, "error", `[MCPService] Cannot call lease tool ${t}: server not found ${e}`, void 0, {
            subkey: "tool_call",
            toolName: t,
            serverIdentifier: e,
            toolCallId: s,
            failureKind: "lease_precondition_failure",
            ...this._getToolCallFailureContextMetadata({
                toolName: t,
                toolCallId: s,
                failureKind: "lease_precondition_failure",
                requestedServerIdentifier: e
            })
        }), new Error(`Server not found: ${e}`);
        const l = this.getServerBlockMessage(c);
        if (l !== void 0) throw this._emitToolCallMetrics({
            durationMs: Date.now() - o,
            status: "error",
            source: this._deriveServerSource(c),
            transport: q1e(c),
            providerHost: cLe(c)
        }), dy(this.structuredLogService, "error", `[MCPService] Cannot call lease tool ${t}: server ${e} is blocked`, void 0, {
            subkey: "tool_call",
            toolName: t,
            serverIdentifier: e,
            toolCallId: s,
            failureKind: "lease_precondition_failure",
            ...this._getToolCallFailureContextMetadata({
                toolName: t,
                toolCallId: s,
                failureKind: "lease_precondition_failure",
                server: c,
                requestedServerIdentifier: e
            })
        }), new Error(l);
        if (!this.isServerEnabled(c) && !this.isMcpProviderServer(c)) throw this._emitToolCallMetrics({
            durationMs: Date.now() - o,
            status: "error",
            source: this._deriveServerSource(c),
            transport: q1e(c),
            providerHost: cLe(c)
        }), dy(this.structuredLogService, "error", `[MCPService] Cannot call lease tool ${t}: server ${e} is disabled`, void 0, {
            subkey: "tool_call",
            toolName: t,
            serverIdentifier: e,
            toolCallId: s,
            failureKind: "lease_precondition_failure",
            ...this._getToolCallFailureContextMetadata({
                toolName: t,
                toolCallId: s,
                failureKind: "lease_precondition_failure",
                server: c,
                requestedServerIdentifier: e
            })
        }), new Error(`Server is disabled: ${e}`);
        if (this.isToolDisabled(c, t) !== void 0) throw this._emitToolCallMetrics({
            durationMs: Date.now() - o,
            status: "error",
            source: this._deriveServerSource(c),
            transport: q1e(c),
            providerHost: cLe(c)
        }), dy(this.structuredLogService, "error", `[MCPService] Cannot call lease tool ${t}: tool is disabled`, void 0, {
            subkey: "tool_call",
            toolName: t,
            serverIdentifier: e,
            toolCallId: s,
            failureKind: "lease_precondition_failure",
            ...this._getToolCallFailureContextMetadata({
                toolName: t,
                toolCallId: s,
                failureKind: "lease_precondition_failure",
                server: c,
                requestedServerIdentifier: e
            })
        }), new Error(`Tool is disabled: ${t}`);
        if (this.isMcpProviderServer(c) && this.shouldSkipBrowserServer(c)) throw this._emitToolCallMetrics({
            durationMs: Date.now() - o,
            status: "error",
            source: this._deriveServerSource(c),
            transport: q1e(c),
            providerHost: cLe(c)
        }), dy(this.structuredLogService, "error", `[MCPService] Cannot call lease tool ${t}: server ${e} is skipped by browser state`, void 0, {
            subkey: "tool_call",
            toolName: t,
            serverIdentifier: e,
            toolCallId: s,
            failureKind: "lease_precondition_failure",
            ...this._getToolCallFailureContextMetadata({
                toolName: t,
                toolCallId: s,
                failureKind: "lease_precondition_failure",
                server: c,
                requestedServerIdentifier: e
            })
        }), new Error(`Server is disabled: ${e}`);
        const h = this._deriveServerSource(c);
        try {
            this.isMcpProviderServer(c) && await this._waitForMcpProviderRegistration(c.identifier, r);
            const p = await this.getMcpClient(c.identifier, c.name, c);
            let g = n;
            if (c.name === Xkt || c.identifier === O$) {
                const y = this.experimentsService.getDynamicConfig("playwright_log_configs", {
                    disableExposureLog: !1
                });
                g = {
                    ...n,
                    __playwrightLogConfigs: y
                }, ol("[MCPService] Added Playwright log configs to lease tool call:", g.__playwrightLogConfigs);
            }
            const f = await p.callTool(t, g, i), v = Date.now() - o, b = this._getLogicalToolFailure(f);
            return b.isLogicalError ? (dy(this.structuredLogService, "error", `[MCPService] Lease tool ${t} on server ${e} returned isError`, void 0, {
                subkey: "tool_call",
                toolName: t,
                serverIdentifier: e,
                toolCallId: s,
                failureKind: "lease_call_logical_error",
                ...this._getToolCallFailureContextMetadata({
                    toolName: t,
                    toolCallId: s,
                    failureKind: "lease_call_logical_error",
                    server: c,
                    requestedServerIdentifier: e,
                    logicalErrorMessage: b.logicalErrorMessage
                })
            }), this._emitToolCallMetrics({
                durationMs: v,
                status: "error",
                source: h,
                transport: q1e(c),
                providerHost: cLe(c)
            })) : this._emitToolCallMetrics({
                durationMs: v,
                status: "success",
                source: h,
                transport: q1e(c),
                providerHost: cLe(c)
            }), this.clearProgressForTool(s), s && this.clearElicitationRequestsForToolCall(s), f;
        } catch (p) {
            ek(`[MCPService] Error calling lease tool ${t} on server ${e}:`, p), dy(this.structuredLogService, "error", `[MCPService] Error calling lease tool ${t} on server ${e}`, p instanceof Error ? p : void 0, {
                subkey: "tool_call",
                toolName: t,
                serverIdentifier: e,
                toolCallId: s,
                failureKind: "lease_call_error",
                ...this._getToolCallFailureContextMetadata({
                    toolName: t,
                    toolCallId: s,
                    failureKind: "lease_call_error",
                    server: c,
                    requestedServerIdentifier: e
                })
            }), this.clearProgressForTool(s), s && this.clearElicitationRequestsForToolCall(s);
            const g = p instanceof Error && p.message === "Tool call was cancelled" ? "cancelled" : "error";
            throw this._emitToolCallMetrics({
                durationMs: Date.now() - o,
                status: g,
                source: h,
                transport: q1e(c),
                providerHost: cLe(c)
            }), p;
        }
    }
    async getPrompt(e, t) {
        ol("[MCPService] Getting prompt:", e);
        const n = this.getServers();
        for(const i in this.promptsCache()){
            const r = n.find((a)=>a.identifier === i);
            if (!(!r || !this.isServerEnabled(r) && !this.isMcpProviderServer(r) || this.isMcpProviderServer(r) && this.shouldSkipBrowserServer(r) || !this.promptsCache()[i].find((a)=>a.name === e))) try {
                const c = await (await this.getMcpClient(r.identifier)).getPrompt(e, t);
                if (c) return c;
            } catch (a) {
                ek(`[MCPService] Error getting prompt ${e} on server ${i}:`, a);
            }
        }
        throw new Error(`No server found with prompt: ${e}`);
    }
    async getPromptForServer(e, t, n) {
        ol("[MCPService] Getting prompt for server:", e, "prompt:", t);
        const r = this.getServers().find((s)=>s.identifier === e);
        if (!r) throw new Error(`Server not found: ${e}`);
        if (!this.isServerEnabled(r) && !this.isMcpProviderServer(r)) throw new Error(`Server is disabled: ${e}`);
        if (this.isMcpProviderServer(r) && this.shouldSkipBrowserServer(r)) throw new Error(`Server is disabled: ${e}`);
        if (!this.isMcpProviderServer(r)) try {
            return await (await this.getMcpClient(r.identifier)).getPrompt(t, n);
        } catch (s) {
            throw ek(`[MCPService] Error getting prompt ${t} on server ${e}:`, s), s;
        }
    }
    getToolsRawFromCache(e) {
        const t = this.toolsCache()[e];
        if (t && t.length > 0) return t.map((n)=>({
                name: n.name,
                description: n.description,
                inputSchema: n.inputSchema,
                outputSchema: n.outputSchema,
                annotations: n.annotations
            }));
    }
    async getToolsRawForServer(e) {
        const t = this.getServers().find((r)=>r.identifier === e);
        if (t) {
            const r = this._getToolsRawFromDurableSnapshot(t);
            if (r !== void 0) return r;
        }
        const n = this.getToolsRawFromCache(e);
        return n || (await this.getMcpClient(e)).listToolsRaw();
    }
    async readResource(e, t) {
        ol("[MCPService] Reading resource:", e, "from server:", t);
        const n = this.getServers();
        if (t) {
            let i = n.find((r)=>r.identifier === t || r.name === t);
            if (!i) {
                const r = Nwt(t);
                i = n.find((s)=>{
                    const o = Nwt(s.name);
                    return s.identifier === r || s.name === r || o === r || s.identifier.includes(r) || s.name.includes(r);
                });
            }
            if (!i) throw new Error(`Server not found: ${t}`);
            if (!this.isServerEnabled(i) && !this.isMcpProviderServer(i)) throw new Error(`Server is disabled: ${t}`);
            if (this.isMcpProviderServer(i) && this.shouldSkipBrowserServer(i)) throw new Error(`Server is disabled: ${t}`);
            try {
                const s = await (await this.getMcpClient(i.identifier)).readResource(e);
                if (s) return s;
            } catch (r) {
                throw ek(`[MCPService] Error reading resource ${e} on server ${i.identifier}:`, r), r;
            }
        }
        for (const i of n)if (!(!this.isServerEnabled(i) && !this.isMcpProviderServer(i)) && !(this.isMcpProviderServer(i) && this.shouldSkipBrowserServer(i))) try {
            const s = await (await this.getMcpClient(i.identifier)).readResource(e);
            if (s) return s;
        } catch (r) {
            ek(`[MCPService] Error reading resource ${e} on server ${i.identifier}:`, r);
        }
        throw new Error(`No server found that can read resource: ${e}`);
    }
    clearProgressForTool(e) {
        e && this.setProgressCache((t)=>{
            const { [e]: n, ...i } = t;
            return i;
        });
    }
    getElicitationRequestForToolCall(e) {
        const t = this.elicitationRequestsCache();
        return Object.values(t).find((n)=>n.toolCallId === e);
    }
    resolveElicitationRequest(e, t) {
        const i = this.elicitationRequestsCache()[e];
        i ? (ol(`[MCPService] Resolving elicitation request ${e} with action: ${t.action}`), i.resolve(t), this.setElicitationRequestsCache((r)=>{
            const { [e]: s, ...o } = r;
            return o;
        }), this.ownedElicitationRequestIds.delete(e)) : JX(`[MCPService] No elicitation request found for ID: ${e}`);
    }
    clearElicitationRequestsForToolCall(e) {
        this.cancelSharedElicitationRequests((t)=>t.toolCallId === e);
    }
    registerLeaseElicitationHandler(e, t) {
        ol(`[MCPService] Registering lease elicitation handler for toolCallId: ${e}`), this.leaseElicitationHandlers.set(e, t), this.ownedLeaseElicitationToolCallIds.add(e);
    }
    unregisterLeaseElicitationHandler(e) {
        ol(`[MCPService] Unregistering lease elicitation handler for toolCallId: ${e}`), this.leaseElicitationHandlers.delete(e), this.ownedLeaseElicitationToolCallIds.delete(e);
    }
    async handleElicitationRequest(e, t, n, i) {
        const r = `${e}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        return new Promise((s)=>{
            const o = {
                id: r,
                message: i.message,
                requestedSchema: i.requestedSchema,
                serverIdentifier: e,
                toolCallId: n,
                resolve: (a)=>{
                    s(a);
                }
            };
            this.storeOwnedElicitationRequest(r, o);
        });
    }
    async deleteClient(e, t) {
        this.createClientPromises.delete(e.identifier), this.lastDeleteReasons.set(e.identifier, t ?? "unknown"), this._nextServerIncarnationId(e.identifier), this._clearSnapshotWatchdog(e.identifier, "delete_client"), this._cursorMcpDegradedServers.delete(e.identifier);
        try {
            await (await this.getMcpClient(e.identifier)).deleteClient(t);
        } catch (n) {
            ek("[MCPService] Error deleting client:", n), dy(this.structuredLogService, "error", "[MCPService] Error deleting client", n instanceof Error ? n : void 0, {
                subkey: "delete_client",
                identifier: e.identifier
            });
        } finally{
            this._durableSnapshots.delete(e.identifier), this.clearServerStatus(e.identifier), this.clearElicitationRequestsForServer(e.identifier), this.successfullyInitializedServers.delete(e.identifier), this.mcpWorkbenchServerLoggers.deleteAndDispose(e.identifier), this.loggerService.deregisterLogger(this.mcpWorkbenchServerLoggerId(e.identifier));
        }
    }
    clearElicitationRequestsForServer(e) {
        this.cancelOwnedElicitationRequests((t)=>t.serverIdentifier === e);
    }
    storeOwnedElicitationRequest(e, t) {
        this.ownedElicitationRequestIds.add(e), this.setElicitationRequestsCache((n)=>({
                ...n,
                [e]: t
            }));
    }
    cancelOwnedElicitationRequests(e) {
        const t = this.ownedElicitationRequestIds;
        t === void 0 || t.size === 0 || this.setElicitationRequestsCache((n)=>{
            const i = {
                ...n
            };
            for (const r of [
                ...t
            ]){
                const s = n[r];
                if (s === void 0) {
                    t.delete(r);
                    continue;
                }
                e(s) && (s.resolve({
                    action: "cancel"
                }), delete i[r], t.delete(r));
            }
            return i;
        });
    }
    cancelSharedElicitationRequests(e) {
        this.setElicitationRequestsCache((t)=>{
            const n = {
                ...t
            };
            let i = !1;
            for (const [r, s] of Object.entries(t))e(s) && (s.resolve({
                action: "cancel"
            }), delete n[r], this.ownedElicitationRequestIds?.delete(r), i = !0);
            return i ? n : t;
        });
    }
    clearOwnedElicitationState() {
        this.cancelOwnedElicitationRequests(()=>!0);
        for (const e of [
            ...this.ownedLeaseElicitationToolCallIds
        ])this.leaseElicitationHandlers.delete(e), this.ownedLeaseElicitationToolCallIds.delete(e);
    }
    async createClient(e) {
        this.metricsService.increment({
            stat: "mcp.create_client"
        });
        const t = e.identifier, n = this.createClientPromises.get(t);
        if (n) return n;
        this._armSnapshotWatchdog(e, "create");
        const i = this.createClientInternal(e).finally(()=>{
            this.createClientPromises.delete(t);
        });
        return this.createClientPromises.set(t, i), i;
    }
    async createClientIfNotExists(e) {
        const t = this.statusCache()[e.identifier];
        return t?.type === "connected" ? (this.logMcpServerFile(e.identifier, "debug", `[MCPService] Skipping createClient for already-connected server: ${e.identifier}`), !0) : t?.type === "needsAuth" ? (this.logMcpServerFile(e.identifier, "debug", `[MCPService] Skipping createClient for needsAuth server: ${e.identifier}`), !1) : t?.type === "error" && t.isRetryable === !1 ? (this.logMcpServerFile(e.identifier, "debug", `[MCPService] Skipping automatic createClient for non-retryable error server: ${e.identifier}`), !1) : this._shouldSkipPassiveCreateForDurableSnapshot(e, t) ? (this.logMcpServerFile(e.identifier, "debug", `[MCPService] Skipping passive createClient for snapshot-backed OAuth HTTP server: ${e.identifier}`), dy(this.structuredLogService, "info", "[MCPService] Skipping passive createClient for snapshot-backed OAuth HTTP server", void 0, {
            subkey: "create_client",
            identifier: e.identifier,
            serverName: e.name,
            reason: "snapshot_backed_passive_create"
        }), !0) : this.createClient(e);
    }
    async createClientInternal(e) {
        if (this.refuseUserDisabledServer(e, "create")) return !1;
        const t = this.getServerBlockMessage(e);
        if (t) return this.updateServerStatus(e.identifier, {
            type: "error",
            error: t
        }), !1;
        if (this.isMcpProviderServer(e)) return this.updateServerStatus(e.identifier, {
            type: "connected"
        }), !0;
        try {
            const n = await this.resolveServerVariables(e), i = this.getResolvedServerBlockMessage(n);
            if (i) return this._logAllowlist("warn", `[MCPService] Blocking remote MCP server before connect: ${e.identifier} (${i})`, {
                identifier: e.identifier,
                serverName: e.name,
                serverUrl: n.url
            }), this.updateServerStatus(e.identifier, {
                type: "error",
                error: i
            }), !1;
            this._logAllowlist("info", `[MCPService] createClient: identifier="${n.identifier}", serverName="${e.name}"`, {
                identifier: n.identifier,
                serverName: e.name
            }), this.logMcpServerFile(n.identifier, "info", `[MCPService] createClient: identifier="${n.identifier}", serverName="${e.name}"`);
            const r = await this.getMcpClient(n.identifier, e.name, e), s = this._serverInfoFromResolvedServer(n), a = await r.createClient(s);
            return a === void 0 ? (this.logMcpServerFile(n.identifier, "warn", `[MCPService] createClient returned undefined for server: ${n.identifier}`), !1) : a.statusType === "initializing" ? (this.logMcpServerFile(n.identifier, "info", `[MCPService] createClient completed for server: ${n.identifier}, statusType=initializing, success=${a.success}`), a.success) : typeof a.connected == "boolean" ? (this.logMcpServerFile(n.identifier, a.error ? "error" : "info", `[MCPService] createClient completed for server: ${n.identifier}, connected=${a.connected}, statusType=${a.statusType}${a.error ? `, error=${a.error}` : ""}`), a.connected) : typeof a.statusType == "string" ? (this.logMcpServerFile(n.identifier, "info", `[MCPService] createClient completed for server: ${n.identifier}, statusType=${a.statusType}`), a.statusType === "connected") : (this.logMcpServerFile(n.identifier, "info", `[MCPService] createClient completed for server: ${n.identifier}, success=${a.success}`), a.success);
        } catch (n) {
            throw ek("[MCPService] Error creating client:", n), this.logMcpServerFile(e.identifier, "error", "[MCPService] Error creating client:", n), dy(this.structuredLogService, "error", "[MCPService] Error creating client", n instanceof Error ? n : void 0, {
                subkey: "create_client",
                identifier: e.identifier,
                serverName: e.name
            }), n;
        }
        return !1;
    }
    getMcpAdminBlockMessage(e) {
        const n = this.adminSettingsService.getCached().allowedMcpConfiguration;
        if (n?.disableAll === !0) return ajt;
        const i = e.identifier === Vee || e.identifier === O$, r = this.reactiveStorageService.applicationUserPersistentStorage.isEnterprise;
        if (i) return r !== !1 ? this.adminSettingsService.getBrowserFeaturesForCurrentIdentity() === !0 ? void 0 : ajt : void 0;
        if (!n) return;
        const o = this.experimentsService.checkFeatureGate(CCt, {
            disableExposureLog: !0
        }) ? n : {
            ...n,
            allowUserOverrideMcpServers: !1,
            deniedMcpServers: []
        };
        return NKv(e, o, {
            useCorePolicy: !0
        }) ? ajt : void 0;
    }
    getTeamNetworkAllowlistBlockMessage(e, t) {
        const n = e.identifier === Vee || e.identifier === O$;
        if (e.type !== "streamableHttp" || !e.url || this.isMcpProviderServer(e) || n) return;
        const i = this.adminSettingsService.getCached().allowedMcpConfiguration, r = this.experimentsService.checkFeatureGate(CCt, {
            disableExposureLog: !0
        }), s = this.experimentsService.checkFeatureGate(T0o, {
            disableExposureLog: !1
        });
        if (!r && !s || i?.requireMcpServersInTeamNetworkAllowlist !== !0 || t?.skipUnresolvedUrls && e.url.includes("${")) return;
        const o = (this.adminSettingsService.getCached().networkAllowlist ?? []).map((a)=>a.trim()).filter((a)=>a.length > 0);
        return r ? dso(e.url, o) ? void 0 : cjt : o.length === 0 || dso(e.url, o) ? void 0 : cjt;
    }
    getMcpNetworkControlsBlockMessage(e, t) {
        const n = e.identifier === Vee || e.identifier === O$;
        if (e.type !== "streamableHttp" || !e.url || this.isMcpProviderServer(e) || n) return;
        const i = this.adminSettingsService.getCached(), r = i.allowedMcpConfiguration;
        if (!this.experimentsService.checkFeatureGate(CCt, {
            disableExposureLog: !0
        }) || t?.skipUnresolvedUrls && e.url.includes("${")) return;
        const o = OKv(e, r?.allowedMcpServers ?? []), a = {
            enabled: o !== void 0,
            mcpNetworkAllowlist: FKv(o, e),
            localAgentNetworkAllowlist: i.networkAllowlist,
            blockMessage: cjt
        };
        return PUv(e.url, a);
    }
    getEffectiveEnabledTools(e) {
        const t = this.adminSettingsService.getCached().allowedMcpConfiguration, n = y3n(e, t?.allowedMcpServers ?? []);
        if (!(n === void 0 || l0o(n).mode !== "custom")) return (n.toolAllowlist ?? []).map((r)=>r.trim()).filter((r)=>r.length > 0);
    }
    getAdminToolPolicy(e) {
        const t = y3n(e, this.adminSettingsService.getCached().allowedMcpConfiguration?.allowedMcpServers ?? []);
        if (t !== void 0) return l0o(t);
    }
    getUserToolGroupPolicy(e) {
        const t = this.reactiveStorageService.applicationUserPersistentStorage;
        return VZi(e.identifier, t.mcpToolGroupPolicy, t.mcpDisabledTools ?? []);
    }
    getServerBlockMessage(e) {
        return this.getMcpAdminBlockMessage(e) ?? this.getMcpNetworkControlsBlockMessage(e, {
            skipUnresolvedUrls: !0
        }) ?? this.getTeamNetworkAllowlistBlockMessage(e, {
            skipUnresolvedUrls: !0
        }) ?? this.getHostedMcpWithholdMessage(e, {
            skipUnresolvedUrls: !0
        });
    }
    getResolvedServerBlockMessage(e) {
        return this.getMcpAdminBlockMessage(e) ?? this.getMcpNetworkControlsBlockMessage(e) ?? this.getTeamNetworkAllowlistBlockMessage(e) ?? this.getHostedMcpWithholdMessage(e);
    }
    isServerBlocked(e) {
        return this.getServerBlockMessage(e) !== void 0;
    }
    isServerBlockRetryable(e) {
        return this.getServerBlockMessage(e) === JOn;
    }
    getAdminMcpRuntimePolicyFingerprint() {
        const e = this.adminSettingsService.getCached(), t = e.allowedMcpConfiguration, n = this.experimentsService.checkFeatureGate(CCt, {
            disableExposureLog: !0
        });
        return JSON.stringify({
            mcpSettingsOverhaulEnabled: n,
            allowedMcpConfiguration: t === void 0 ? void 0 : n ? {
                disableAll: t.disableAll,
                allowUserOverrideMcpServers: t.allowUserOverrideMcpServers,
                requireMcpServersInTeamNetworkAllowlist: t.requireMcpServersInTeamNetworkAllowlist,
                allowedMcpServers: (t.allowedMcpServers ?? []).map((i)=>({
                        command: i.command,
                        serverUrl: i.serverUrl,
                        networkMode: i.networkMode,
                        networkAllowlist: i.networkAllowlist,
                        toolAllowlist: i.toolAllowlist,
                        toolAllowlistMode: i.toolAllowlistMode
                    })),
                deniedMcpServers: (t.deniedMcpServers ?? []).map((i)=>({
                        command: i.command,
                        serverUrl: i.serverUrl
                    }))
            } : {
                disableAll: t.disableAll,
                requireMcpServersInTeamNetworkAllowlist: t.requireMcpServersInTeamNetworkAllowlist
            },
            networkAllowlist: e.networkAllowlist,
            browserFeatures: this.adminSettingsService.getBrowserFeaturesForCurrentIdentity()
        });
    }
    getAdminMcpRuntimePolicyLogMetadata() {
        const e = this.adminSettingsService.getCached(), t = e.allowedMcpConfiguration, n = t?.allowedMcpServers ?? [], i = t?.deniedMcpServers ?? [];
        return {
            mcpSettingsOverhaulEnabled: this.experimentsService.checkFeatureGate(CCt, {
                disableExposureLog: !0
            }),
            allowedMcpServerCount: n.length,
            deniedMcpServerCount: i.length,
            networkAllowlistCount: e.networkAllowlist?.length ?? 0,
            perServerNetworkAllowlistCounts: n.map((r)=>({
                    command: r.command,
                    serverUrl: r.serverUrl,
                    networkAllowlistCount: r.networkAllowlist?.length ?? 0,
                    toolAllowlistCount: r.toolAllowlist?.length ?? 0
                }))
        };
    }
    async handleAdminMcpRuntimePolicyChange() {
        const e = this.adminMcpRuntimePolicyFingerprint;
        this._logAllowlist("info", "[MCPService] Admin MCP settings changed; evaluating MCP runtime policy", {
            ...this.getAdminMcpRuntimePolicyLogMetadata(),
            previousPolicyFingerprint: e === void 0 ? void 0 : cC(e).toString(16)
        }), await this.reEvaluateBlockedServers();
        const t = this.getAdminMcpRuntimePolicyFingerprint();
        if (t === e) {
            this._logAllowlist("info", "[MCPService] Admin MCP runtime policy unchanged; skipping MCP respawn pass", {
                ...this.getAdminMcpRuntimePolicyLogMetadata(),
                policyFingerprint: cC(t).toString(16)
            });
            return;
        }
        this.adminMcpRuntimePolicyFingerprint = t, this._logAllowlist("info", "[MCPService] Admin MCP runtime policy changed; checking connected MCP servers for respawn", {
            ...this.getAdminMcpRuntimePolicyLogMetadata(),
            previousPolicyFingerprint: e === void 0 ? void 0 : cC(e).toString(16),
            nextPolicyFingerprint: cC(t).toString(16)
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
        const e = (this.reEvaluateBlockedServersTail ?? Promise.resolve()).then(()=>this.doReEvaluateBlockedServers(), ()=>this.doReEvaluateBlockedServers());
        return this.reEvaluateBlockedServersTail = e.then(()=>{}, ()=>{}), e;
    }
    async doReEvaluateBlockedServers() {
        const e = this.allServers(), t = this.statusCache(), n = new Set;
        for (const i of e)try {
            const r = t[i.identifier];
            if (!this.isServerEnabledByUser(i) && !this.isMcpProviderServer(i)) {
                r !== void 0 && r.type !== "disconnected" && !(r.type === "error" && c0o(r.error)) && (ol(`[MCPService] Server ${i.identifier} is disabled by the user, disconnecting`), await this.deleteClient(i, "server_disabled"), n.add(i.identifier)), r?.type !== "disconnected" ? this.updateServerStatus(i.identifier, {
                    type: "disconnected"
                }) : this._onDidChangeServerStatus.fire({
                    identifier: i.identifier,
                    status: r
                });
                continue;
            }
            const s = await this.resolveServerVariables(i), o = this.getResolvedServerBlockMessage(s);
            if (o !== void 0) {
                const c = r === void 0 || r.type === "disconnected" || r.type === "error" && c0o(r.error);
                c || (ol(`[MCPService] Server ${i.identifier} is now blocked (${o}), disconnecting`), await this.deleteClient(i, "server_blocked"), n.add(i.identifier)), (!c || r?.type === "error" && r.error !== o) && (o === ljt.server_placed && this._emitHostedPlacementRowTransition({
                    server: i,
                    resolved: s,
                    from: DKv(r),
                    to: "server_placed"
                }), this.updateServerStatus(i.identifier, {
                    type: "error",
                    error: o
                }));
            } else if (r?.type === "error" && c0o(r.error)) {
                ol(`[MCPService] Server ${i.identifier} is no longer blocked, reconnecting`);
                const c = bwh(r.error);
                c !== void 0 && this._emitHostedPlacementRowTransition({
                    server: i,
                    resolved: s,
                    from: c,
                    to: "released"
                }), this.isServerEnabled(i) && await this.createClientIfNotExists(i);
            }
        } catch (r) {
            ek(`[MCPService] Error re-evaluating blocked status for ${i.identifier}:`, r);
        }
        n.size > 0 && (this.setToolsCache((i)=>this.omitServerIds(i, n)), this.setPromptsCache((i)=>this.omitServerIds(i, n)), this.setResourcesCache((i)=>this.omitServerIds(i, n)), this.setInstructionsCache((i)=>this.omitServerIds(i, n)), this._onDidChangeMcpSnapshots.fire(Array.from(n)));
    }
    isServerEnabled(e) {
        return this.isServerBlocked(e) || this.shouldSkipBrowserServer(e) ? !1 : this.isServerEnabledByUser(e);
    }
    refuseUserDisabledServer(e, t) {
        return this.isServerEnabledByUser(e) || this.isMcpProviderServer(e) ? !1 : (ol(`[MCPService] Server ${e.identifier} is disabled by the user, not dialing (${t})`), this.statusCache()[e.identifier]?.type !== "disconnected" && this.updateServerStatus(e.identifier, {
            type: "disconnected"
        }), !0);
    }
    isServerEnabledByUser(e) {
        if (e.projectManaged) {
            const n = this.approvedProjectMcpServers.get(), i = this.computeApprovalKey(e), r = n.includes(i), s = n.includes(e.identifier);
            if (!r && !s) return ol(`[MCPService] Server ${e.identifier} not approved with current configuration (no legacy or hash approval), disabling`), !1;
        }
        return !this.getDisabledServersListFor(e).includes(e.identifier);
    }
    getDisabledServersListFor(e) {
        return !this.useProfileScopedGlobalMcpDisabledState || e.projectManaged ? this.disabledMcpServers.get() : this.disabledGlobalMcpServers.get();
    }
    setDisabledServersListFor(e, t) {
        if (!this.useProfileScopedGlobalMcpDisabledState || e.projectManaged) {
            this.disabledMcpServers.set(t, void 0);
            return;
        }
        this.setDisabledGlobalMcpServers(t);
    }
    setDisabledGlobalMcpServers(e) {
        this.lastReconciledDisabledGlobalMcpServers = e, this.disabledGlobalMcpServers.set(e, void 0);
    }
    isProjectManagedIdentifier(e) {
        return e.startsWith("project-");
    }
    dropLegacyWorkspaceDisabledGlobalMcpServers() {
        try {
            const e = this.disabledMcpServers.get(), t = e.filter((n)=>this.isProjectManagedIdentifier(n));
            if (t.length === e.length) return;
            this.disabledMcpServers.set(t, void 0), ol("[MCPService] Dropped legacy workspace-scoped disabled state for global MCP servers:", e.filter((n)=>!this.isProjectManagedIdentifier(n)));
        } catch (e) {
            ek("[MCPService] Failed to drop legacy workspace-scoped disabled state for global MCP servers", e);
        }
    }
    reconcileDisabledGlobalMcpServersChange(e, t) {
        const n = new Set(e), i = new Set(t), r = t.filter((a)=>!n.has(a)), s = e.filter((a)=>!i.has(a));
        if (r.length === 0 && s.length === 0) return;
        ol("[MCPService] Disabled global MCP servers changed externally:", {
            newlyDisabled: r,
            newlyEnabled: s
        });
        const o = new Map(this.allServers().map((a)=>[
                a.identifier,
                a
            ]));
        for (const a of r){
            const c = o.get(a);
            !c || c.projectManaged || this.deleteClient(c, "shared_server_disabled").then(()=>{
                this.successfullyInitializedServers.delete(c.identifier);
            });
        }
        for (const a of s){
            const c = o.get(a);
            !c || c.projectManaged || !this.isServerEnabled(c) || this.createClientIfNotExists(c).then((l)=>{
                l ? this.successfullyInitializedServers.add(c.identifier) : this.successfullyInitializedServers.delete(c.identifier);
            });
        }
        this.getServers();
    }
    getServerDisplayName(e) {
        return this.allServers().find((n)=>n.identifier === e)?.name ?? pKv(this._cursorSubscriptionsMcpCopy(), e) ?? e;
    }
    _cursorSubscriptionsMcpCopy() {
        return Qkh(Pkh(this.experimentsService));
    }
    getInternalToolTranscriptDisplay(e, t, n) {
        const i = this.allServers().find((s)=>s.identifier === e);
        return !i || !this.isMcpProviderServer(i) ? Jkh(this._cursorSubscriptionsMcpCopy(), e, t, n) : (this._getToolsFromDurableSnapshotLast(i) ?? this.toolsCache()[e])?.find((s)=>s.name === t)?.meta?.transcriptDisplay;
    }
    get mcpAllowlistLogger() {
        return this._mcpAllowlistLogger;
    }
    toolKey(e, t) {
        return `${e.identifier}|${t}`;
    }
    makeToolDisabledChecker(e) {
        const t = this.reactiveStorageService.applicationUserPersistentStorage, n = new Set(t.mcpDisabledTools ?? []), i = VZi(e.identifier, t.mcpToolGroupPolicy, t.mcpDisabledTools ?? []), r = (a, c)=>{
            const l = kwh(c), u = i[l];
            if (u === "off" || u === "custom" && n.has(this.toolKey(e, a))) return "disabledByUser";
        };
        let s;
        const o = y3n(e, this.adminSettingsService.getCached().allowedMcpConfiguration?.allowedMcpServers ?? []);
        if (o !== void 0) {
            const a = l0o(o);
            a.mode !== "all" && (s = (c, l)=>!Tzv(a, {
                    name: c,
                    annotations: l
                }));
        }
        return (a, c)=>{
            if (s?.(a, c)) return "disabledByAdmin";
            const l = r(a, c);
            if (l !== void 0) return l;
        };
    }
    isToolDisabled(e, t, n) {
        return this.makeToolDisabledChecker(e)(t, n ?? wwh(this, e, t));
    }
    toggleServerEnabled(e) {
        this.setServerEnabled(e, !this.isServerEnabledByUser(e));
    }
    setServerEnabled(e, t) {
        if (this.isServerEnabledByUser(e) === t) return;
        ol(`[MCPService] Setting server enabled state: ${e.identifier} -> ${t}`);
        let n = [
            ...this.getDisabledServersListFor(e)
        ];
        if (t) this.whitelistProjectServer(e), n = n.filter((i)=>i !== e.identifier);
        else {
            const i = new Set(n);
            i.add(e.identifier), n = Array.from(i);
        }
        ol("[MCPService] Setting server enabled state:", {
            disabledServers: n
        }), this.setDisabledServersListFor(e, n), this.getServers(), t ? this.createClientIfNotExists(e).then((i)=>{
            i ? this.successfullyInitializedServers.add(e.identifier) : this.successfullyInitializedServers.delete(e.identifier);
        }) : this.deleteClient(e, "server_disabled").then(()=>{
            this.successfullyInitializedServers.delete(e.identifier);
        });
    }
    setSharedServerEnabledState(e, t) {
        if (e.projectManaged) return;
        const n = [
            ...this.getDisabledServersListFor(e)
        ], i = n.includes(e.identifier);
        if (t) {
            if (!i) return;
            this.setDisabledServersListFor(e, n.filter((r)=>r !== e.identifier)), this.getServers();
            return;
        }
        i || (this.setDisabledServersListFor(e, [
            ...n,
            e.identifier
        ]), this.getServers());
    }
    async reconcileSharedServer(e, t) {
        const n = this.getServers().find((i)=>i.identifier === e);
        if (!(!n || n.projectManaged)) switch(t){
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
                    await this.reloadClient(e);
                    return;
                }
            case "authChanged":
                {
                    n.type === "streamableHttp" && await this.clearServerOAuthState(e, "manual_or_external", n);
                    return;
                }
            default:
                return t;
        }
    }
    toggleToolDisabled(e, t, n) {
        const i = n ?? wwh(this, e, t), r = this.makeToolDisabledChecker(e)(t, i);
        if (r === "disabledByAdmin" || r === "disabledByConfig") return;
        const s = kwh(i), o = this.reactiveStorageService.applicationUserPersistentStorage, a = VZi(e.identifier, o.mcpToolGroupPolicy, o.mcpDisabledTools ?? []);
        if (a[s] === "off") return;
        const c = this.toolKey(e, t), l = new Set(o.mcpDisabledTools || []);
        a[s] === "all" ? (this.reactiveStorageService.setApplicationUserPersistentStorage("mcpToolGroupPolicy", {
            ...o.mcpToolGroupPolicy ?? {},
            [e.identifier]: {
                ...a,
                [s]: "custom"
            }
        }), l.add(c)) : l.has(c) ? l.delete(c) : l.add(c), this.reactiveStorageService.setApplicationUserPersistentStorage("mcpDisabledTools", [
            ...l
        ]), this._onSettingsChanged.fire();
    }
    setUserToolGroupPolicy(e, t, n) {
        const i = u0o(n), r = this.reactiveStorageService.applicationUserPersistentStorage, s = VZi(e.identifier, r.mcpToolGroupPolicy, r.mcpDisabledTools ?? []);
        s[t] !== i && (this.reactiveStorageService.setApplicationUserPersistentStorage("mcpToolGroupPolicy", {
            ...r.mcpToolGroupPolicy ?? {},
            [e.identifier]: {
                ...s,
                [t]: i
            }
        }), this._onSettingsChanged.fire());
    }
    whitelistProjectServer(e) {
        if (!e.projectManaged) return;
        const t = [
            ...this.approvedProjectMcpServers.get()
        ], n = this.computeApprovalKey(e);
        t.includes(n) || (t.push(n), this.approvedProjectMcpServers.set(t, void 0));
    }
    removeServerApproval(e) {
        if (!e.projectManaged) return;
        const t = [
            ...this.approvedProjectMcpServers.get()
        ], n = t.filter((i)=>!(i === e.identifier || i.includes(":") && i.startsWith(`${e.identifier}:`)));
        n.length !== t.length && (ol(`[MCPService] Removed approval for server ${e.identifier} due to configuration change`), this.approvedProjectMcpServers.set(n, void 0));
    }
    initializePreviouslyKnownServerIds() {
        xwh(this.storageService, this.KNOWN_SERVER_IDS_KEY);
        const e = this.storageService.get(this.KNOWN_SERVER_IDS_KEY, 0);
        if (e) try {
            const t = JSON.parse(e);
            this.previouslyKnownServerIds = new Set(t), ol(`[MCPService] Loaded ${this.previouslyKnownServerIds.size} known server IDs from storage`);
        } catch (t) {
            ek("[MCPService] Error parsing known server IDs from storage:", t), this.previouslyKnownServerIds = new Set;
        }
        else this.previouslyKnownServerIds = new Set;
    }
    savePreviouslyKnownServerIds() {
        const e = Array.from(this.previouslyKnownServerIds);
        this.storageService.store(this.KNOWN_SERVER_IDS_KEY, JSON.stringify(e), 0, 1), ol(`[MCPService] Saved ${e.length} known server IDs to storage`);
    }
    async migrateLegacyApprovals() {
        const e = [
            ...this.approvedProjectMcpServers.get()
        ], t = e.filter((s)=>!s.includes(":")), n = e.filter((s)=>s.includes(":"));
        if (t.length === 0) return;
        ol(`[MCPService] Found ${t.length} legacy approvals to migrate`);
        const i = this.getServers().filter((s)=>s.projectManaged), r = [
            ...n
        ];
        for (const s of t){
            const o = i.find((a)=>a.identifier === s);
            if (o) {
                const a = this.computeApprovalKey(o);
                r.includes(a) || (r.push(a), ol(`[MCPService] Migrated legacy approval: ${s} -> ${a}`));
            }
        }
        r.length !== n.length && (ol(`[MCPService] Successfully migrated ${r.length} legacy approvals to hash-based system`), this.approvedProjectMcpServers.set(r, void 0));
    }
    dispose() {
        this._clearAllSnapshotWatchdogs("disabled"), this.clearOwnedElicitationState(), this.userConfigFileWatcher.clear(), super.dispose();
    }
    async registerMCPServer(e, t, n) {
        const i = `extension-${Nwt(e)}`, r = this.computeIdentifier({
            name: i,
            extensionId: n
        });
        if (this.extensionRegisteredServers.some((o)=>o.identifier === r)) {
            ol(`[MCPService] Server ${r} already registered`);
            return;
        }
        let s;
        if (typeof t == "string" || typeof t == "object" && "url" in t) {
            const o = typeof t == "string" ? t : t.url, a = this.ensureUrlHasProtocol(o);
            ol(`[MCPService] Registering extension MCP HTTP/SSE server: ${a} with name: ${e} from extension: ${n}`), s = {
                identifier: r,
                name: i,
                type: "streamableHttp",
                url: a,
                headers: typeof t == "object" && "headers" in t ? t.headers : void 0,
                projectManaged: !1,
                extensionId: n
            };
        } else {
            const o = t;
            ol(`[MCPService] Registering extension MCP stdio server: ${o.command} with name: ${e} from extension: ${n}`), s = {
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
            this.isServerEnabled(s) ? await this.createClientIfNotExists(s) ? (ol(`[MCPService] Successfully created client for server: ${s.identifier}`), this.successfullyInitializedServers.add(s.identifier)) : (ol(`[MCPService] Failed to create client for server: ${s.identifier}`), this.successfullyInitializedServers.delete(s.identifier), this.updateServerStatus(s.identifier, {
                type: "error",
                error: "Failed to create client"
            })) : this.updateServerStatus(s.identifier, {
                type: "disconnected"
            });
        } catch (o) {
            ek(`[MCPService] Error initializing extension server ${s.identifier}:`, o), this.successfullyInitializedServers.delete(s.identifier), this.updateServerStatus(s.identifier, {
                type: "error",
                error: o instanceof Error ? o.message : String(o)
            });
        }
    }
    async unregisterMCPServer(e, t) {
        ol(`[MCPService] Unregistering extension MCP server with name: ${e} from extension: ${t}`);
        const n = `extension-${Nwt(e)}`, i = this.computeIdentifier({
            name: n,
            extensionId: t
        }), r = this.extensionRegisteredServers.find((s)=>s.identifier === i);
        if (!r) {
            ol(`[MCPService] No server found with name: ${e}`);
            return;
        }
        this.extensionRegisteredServers = this.extensionRegisteredServers.filter((s)=>s !== r);
        try {
            await this.deleteClient(r, "extension_server_unregistered"), r.type === "streamableHttp" && await this.clearServerOAuthState(r.identifier, "extension_server_unregistered", r);
        } catch (s) {
            ek(`[MCPService] Error deleting client for server ${r.identifier}:`, s);
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
    async _handleMcpConfigFileChange(e, t, n) {
        ol(`[MCPService] Handling MCP config file change: ${e.toString()}`, t);
        const i = await this.parseMcpServersFromFile(e, t), r = new Map(i.map((c)=>[
                c.identifier,
                c
            ]));
        for (const c of n){
            const l = r.get(c.identifier);
            if (!l) ol(`[MCPService] Server removed, deleting client: ${c.identifier}`), await this.deleteClient(c, "config_server_removed"), c.type === "streamableHttp" && await this.clearServerOAuthState(c.identifier, "config_server_removed", c);
            else {
                let u = !1;
                try {
                    const h = this.computeServerConfigHash(c), p = this.computeServerConfigHash(l);
                    u = h !== p;
                } catch  {
                    u = JSON.stringify(c) !== JSON.stringify(l);
                }
                u ? (ol(`[MCPService] Server modified (hash changed), deleting old client and removing approval: ${c.identifier}`), await this.deleteClient(c, "config_server_modified"), c.type === "streamableHttp" && await this.clearServerOAuthState(c.identifier, "config_server_modified", c), c.projectManaged && (this.removeServerApproval(c), this.previouslyKnownServerIds.delete(c.identifier))) : c.placement !== l.placement && (ol(`[MCPService] Server placement declaration changed, deleting old client: ${c.identifier}`), await this.deleteClient(c, "config_placement_changed"));
            }
        }
        const s = [];
        for (const c of i)this.previouslyKnownServerIds.has(c.identifier) || (s.push(c), this.previouslyKnownServerIds.add(c.identifier));
        s.length > 0 && this.savePreviouslyKnownServerIds();
        for (const c of s){
            const l = this.getCommandForLogging(c.command, c.args);
            this.analyticsService.trackEvent("mcp.installed", {
                name: c.name,
                url: c.url,
                command: l,
                deeplink: !1
            });
        }
        const o = _R(this.environmentService.remoteAuthority);
        if (!!0 && !o && !this.environmentService.suppressPopupsOnStartup) for (const c of s)ol(`[MCPService] New server detected: ${c.identifier} (projectManaged: ${t.projectManaged})`), this.isServerEnabled(c) ? ol(`[MCPService] Server ${c.identifier} is already enabled, skipping notification`) : this.notificationService.prompt(pi.Info, `New MCP server detected: ${c.name}`, [
            {
                label: "Enable",
                run: ()=>{
                    this.isServerEnabled(c) || (this.toggleServerEnabled(c), t.projectManaged && this.reloadClient(c.identifier));
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
        else ol("[MCPService] Skipping server detection notifications (disabled or BC/Pod window)");
        return i;
    }
    getMetricSafeErrorName(e) {
        return e instanceof Error && e.name.trim().length > 0 ? e.name : "unknown_error";
    }
    recordOAuthStateClearMetric(e, t, n) {
        const i = {
            cause: e,
            result: t
        };
        n?.errorName !== void 0 && (i.error_name = n.errorName), n?.detail !== void 0 && (i.detail = n.detail), this.metricsService.increment({
            stat: "mcp.oauth_state_cleared",
            value: n?.value,
            tags: i
        });
    }
    recordOAuthNeedsAuthMetric(e) {
        this.metricsService.increment({
            stat: "mcp.oauth_needs_auth",
            tags: {
                cause: e
            }
        });
    }
    async runMcpCommandWithTimeout(e, t, n) {
        const i = await this.getProvider();
        if (!i) throw new Error("No provider found");
        const r = new AbortController;
        return wCt(()=>i.runCommand(e, t, r.signal), n, `mcp.runCommand.${e}`, r);
    }
    async clearServerOAuthState(e, t = "manual_or_external", n, i) {
        const r = r0o(t) ? "hard" : "identifier", s = r === "hard" ? i?.notifySharedStateChange ?? !0 : !1, o = n?.type === "streamableHttp" ? n.url : void 0;
        if (this._logOAuth("info", `[MCPService] OAuth clear candidate for server: ${e} (cause=${t})`, void 0, {
            identifier: e,
            cause: t,
            notifySharedStateChange: s,
            serverType: n?.type,
            dashboardManaged: n?.dashboardManaged ?? !1,
            serverUrl: o
        }), this.shouldUseMcpProcessClient(e, n)) try {
            await (await this.getMcpClient(e, n?.name, n)).logoutServer(), this.recordOAuthStateClearMetric(t, "success", {
                detail: "mcp_process"
            });
            return;
        } catch (l) {
            const u = this.getMetricSafeErrorName(l);
            throw this.recordOAuthStateClearMetric(t, "error", {
                errorName: u,
                detail: "mcp_process"
            }), l;
        }
        const a = r === "identifier" ? {
            identifier: e,
            serverUrl: o,
            mode: "identifier",
            cause: t
        } : {
            identifier: e,
            serverUrl: o,
            mode: "hard",
            deleteSharedOAuthState: s,
            notifySharedStateChange: s,
            cause: t
        }, c = r === "identifier" ? "clearing identifier-scoped" : "clearing";
        ol(`[MCPService] ${c} OAuth state for server: ${e}`), this._logOAuth("info", `[MCPService] ${c} OAuth state for server: ${e} (cause=${t})`, void 0, {
            identifier: e,
            cause: t,
            clearMode: a.mode,
            serverUrl: o
        });
        try {
            if (!(await this.runMcpCommandWithTimeout($x.LogoutServer, a, this._getMcpIpcTimeouts().lifecycleTimeoutMs))?.success) {
                this.recordOAuthStateClearMetric(t, "error", {
                    errorName: "logout_command_failed",
                    detail: r
                }), this._logOAuth("warn", `[MCPService] LogoutServer command did not clear OAuth state for server: ${e} (cause=${t})`, void 0, {
                    identifier: e,
                    cause: t
                });
                return;
            }
            this.recordOAuthStateClearMetric(t, "success", {
                detail: r
            }), this._logOAuth("info", `[MCPService] ${r === "identifier" ? "Cleared identifier-scoped" : "Cleared"} OAuth state for server: ${e} (cause=${t})`, void 0, {
                identifier: e,
                cause: t,
                clearMode: a.mode,
                serverUrl: o
            }), ol(`[MCPService] Successfully ${r === "identifier" ? "cleared identifier-scoped" : "cleared"} OAuth state for server: ${e}`);
        } catch (l) {
            const u = this.getMetricSafeErrorName(l);
            this.recordOAuthStateClearMetric(t, "error", {
                errorName: u,
                detail: r
            }), this._logOAuth("error", `[MCPService] Error clearing OAuth state for server: ${e} (cause=${t}, error=${u})`, l instanceof Error ? l : void 0, {
                identifier: e,
                cause: t,
                errorName: u
            }), ek(`[MCPService] Error clearing OAuth state for server ${e}:`, l);
        }
    }
    async dashboardMcpSharedOAuthGet(e) {
        return {
            entries: []
        };
    }
    async dashboardMcpSharedOAuthStore(e) {
        return {
            applied: !1,
            skippedBecauseBackendNewer: !1
        };
    }
    async dashboardMcpSharedOAuthDelete(e) {}
    async dashboardMcpOAuthRefreshLockBegin(e) {
        return {
            outcome: "skipped",
            enforce: !1
        };
    }
    async dashboardMcpOAuthRefreshLockRelease(e) {}
    async dashboardMcpSharedOAuthNotifyStateChanged(e) {
        if (!this.isMcpOAuthFanoutEnabled() || !e.serverUrl || !e.change) return;
        const t = zUe(e.serverUrl);
        this._logOAuth("info", "[MCPService] Fanout shared OAuth state change", void 0, {
            serverUrl: t,
            change: e.change,
            sourceIdentifier: e.identifier,
            sourceWorkspaceId: e.sourceWorkspaceId,
            dispatchMode: "queued"
        }), this.enqueueSharedOAuthFanout({
            serverUrl: e.serverUrl,
            change: e.change,
            sourceIdentifier: e.identifier,
            sourceWorkspaceId: e.sourceWorkspaceId,
            cause: e.cause,
            saveKind: e.saveKind
        });
    }
    async handleSharedOAuthStateChanged(e) {
        if (!this.isMcpOAuthFanoutEnabled()) return;
        const t = zUe(e.serverUrl), n = this.allServers().filter((i)=>i.type === "streamableHttp" && typeof i.url == "string" && zUe(i.url) === t);
        for (const i of n){
            const r = this.statusCache()[i.identifier], s = !!(e.sourceIdentifier && i.identifier === e.sourceIdentifier && e.sourceServiceInstanceId !== void 0 && e.sourceServiceInstanceId === this.sharedOAuthFanoutServiceInstanceId), o = this.isServerEnabled(i);
            if (!s && e.change !== "client_info_saved") {
                if (e.change === "tokens_saved") {
                    if (!o || r?.type === "connected" || r?.type === "degraded") continue;
                    if (e.saveKind === "refresh" && r?.type === "needsAuth") {
                        this._logOAuth("info", "[MCPService] Fanout skipped for needsAuth sibling on refresh save", void 0, {
                            event: "mcp_oauth_fanout_skipped_refresh_needs_auth",
                            sourceIdentifier: e.sourceIdentifier,
                            sourceWorkspaceId: e.sourceWorkspaceId,
                            sourceServiceInstanceId: e.sourceServiceInstanceId,
                            serverUrlHost: (()=>{
                                try {
                                    return new URL(e.serverUrl).host;
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
                        changeKind: e.change,
                        saveKind: e.saveKind,
                        sourceIdentifier: e.sourceIdentifier,
                        sourceWorkspaceId: e.sourceWorkspaceId,
                        sourceServiceInstanceId: e.sourceServiceInstanceId,
                        serverUrlHost: (()=>{
                            try {
                                return new URL(e.serverUrl).host;
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
                        const c = a instanceof Error ? a.message : String(a);
                        this._logOAuth("warn", "[MCPService] Shared OAuth save fanout reload failed", a, {
                            identifier: i.identifier,
                            serverUrl: t
                        }), this.updateServerStatus(i.identifier, {
                            type: "error",
                            error: `OAuth fanout reload failed: ${c}`
                        });
                    }
                    continue;
                }
                try {
                    const a = e.cause ?? "manual_or_external";
                    r0o(a) ? (this._logOAuth("info", "[MCPService] Fanout applied to sibling server", void 0, {
                        event: "mcp_oauth_fanout_applied",
                        changeKind: e.change,
                        sourceIdentifier: e.sourceIdentifier,
                        sourceWorkspaceId: e.sourceWorkspaceId,
                        sourceServiceInstanceId: e.sourceServiceInstanceId,
                        serverUrlHost: (()=>{
                            try {
                                return new URL(e.serverUrl).host;
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
                        serverUrl: t,
                        serverType: i.type,
                        dashboardManaged: i.dashboardManaged ?? !1,
                        sourceIdentifier: e.sourceIdentifier,
                        sourceWorkspaceId: e.sourceWorkspaceId,
                        skipped: !0
                    }), e.cause !== void 0 && r0o(e.cause) && o && await this.reloadClient(i.identifier);
                } catch (a) {
                    const c = a instanceof Error ? a.message : String(a);
                    this._logOAuth("warn", "[MCPService] Shared OAuth clear fanout failed", a, {
                        identifier: i.identifier,
                        serverUrl: t
                    }), this.updateServerStatus(i.identifier, {
                        type: "error",
                        error: `OAuth fanout clear failed: ${c}`
                    });
                }
            }
        }
    }
    async logoutServer(e) {
        if (ol(`[MCPService] Logging out server: ${e.identifier}`), e.type !== "streamableHttp") {
            JX(`[MCPService] Logout not applicable for server type: ${e.type}`);
            return;
        }
        try {
            await this.clearServerOAuthState(e.identifier, "user_logout", e), await this.reloadClient(e.identifier), ol(`[MCPService] Successfully logged out server: ${e.identifier}`);
        } catch (t) {
            ek(`[MCPService] Error logging out server ${e.identifier}:`, t), this.updateServerStatus(e.identifier, {
                type: "error",
                error: t instanceof Error ? t.message : String(t)
            });
        }
    }
    async cancelOAuthAuthorization(e) {
        try {
            await this.runMcpCommandWithTimeout($x.CancelOAuthAuthorization, {
                identifier: e
            }, this._getMcpIpcTimeouts().lifecycleTimeoutMs);
        } catch (t) {
            this._logOAuth("warn", `[MCPService] Failed to cancel OAuth authorization for server: ${e}`, t, {
                identifier: e
            });
        }
    }
    async getConfigFileUri(e) {
        if (e?.projectManaged) {
            const n = this.contextService.getWorkspace().folders.find((i)=>this.folderToKey(i) === e.projectPath);
            if (n) return this.uriIdentityService.extUri.joinPath(n.uri, ".cursor", "mcp.json");
        }
        return this.getUserConfigFilePath();
    }
    async openConfigFile(e) {
        const t = await this.getConfigFileUri(e);
        e?.projectManaged || await this.fileService.exists(t) || await this.fileService.writeFile(t, wi.fromString(JSON.stringify({
            mcpServers: {}
        }, null, 2))), await this.commandService.executeCommand("vscode.open", t);
    }
    async removeServer(e) {
        if (ol(`[MCPService] Removing server: ${e.identifier}`), KAv(e)) {
            JX(`[MCPService] Cannot remove managed server locally: ${e.identifier}.`);
            return;
        }
        try {
            await this.deleteClient(e, "server_removed"), e.type === "streamableHttp" && await this.clearServerOAuthState(e.identifier, "server_removed", e), e.projectManaged && e.projectPath ? await this.removeServerFromProjectConfig(e) : await this.removeServerFromUserConfig(e), ol(`[MCPService] Successfully removed server: ${e.identifier}`);
        } catch (t) {
            throw ek(`[MCPService] Error removing server ${e.identifier}:`, t), t;
        }
    }
    async removeServerFromProjectConfig(e) {
        const n = this.contextService.getWorkspace().folders.find((r)=>this.folderToKey(r) === e.projectPath);
        if (!n) throw new Error(`Project folder not found for server: ${e.identifier}`);
        const i = this.uriIdentityService.extUri.joinPath(n.uri, ".cursor", "mcp.json");
        await this.removeServerFromConfigFile(e, i);
    }
    async removeServerFromUserConfig(e) {
        const t = await this.getUserConfigFilePath();
        await this.removeServerFromConfigFile(e, t);
    }
    async removeServerFromConfigFile(e, t) {
        try {
            if (!await this.fileService.exists(t)) {
                ol(`[MCPService] Config file does not exist, server already removed: ${t.toString()}`);
                return;
            }
            const i = await this.fileService.readFile(t), r = Ctt(i.value.toString());
            r.mcpServers && r.mcpServers[e.name] && (delete r.mcpServers[e.name], await this.fileService.writeFile(t, wi.fromString(JSON.stringify(r, null, 2))), ol(`[MCPService] Removed server ${e.name} from ${t.toString()}`));
        } catch (n) {
            throw ek(`[MCPService] Error removing server from ${t.toString()}:`, n), n;
        }
    }
    folderToKey(e) {
        return `${e.index}-${e.name}`;
    }
    getCommandForLogging(e, t) {
        if (!e) return "";
        const n = t && t.length > 0 ? `${e} ${t.join(" ")}` : e;
        return n.startsWith("npx") ? n.split(" ").slice(0, 3).join(" ") : n.startsWith("uvx") ? n.split(" ").slice(0, 2).join(" ") : "custom";
    }
    async clearAllTokens() {
        ol("[MCPService] Clearing all OAuth tokens for MCP servers"), this._logOAuth("info", "[MCPService] Clearing OAuth state for all MCP servers (cause=clear_all_tokens)", void 0, {
            cause: "clear_all_tokens"
        });
        try {
            const e = await this.runMcpCommandWithTimeout($x.ClearAllTokens, {}, this._getMcpIpcTimeouts().lifecycleTimeoutMs);
            if (!e?.success) {
                this.recordOAuthStateClearMetric("clear_all_tokens", "error", {
                    errorName: "clear_all_tokens_command_failed"
                }), this._logOAuth("warn", "[MCPService] ClearAllTokens command did not clear OAuth state", void 0, {
                    cause: "clear_all_tokens"
                });
                return;
            }
            const t = e.cleared?.length ?? 0;
            this.recordOAuthStateClearMetric("clear_all_tokens", "success", {
                value: t
            }), this._logOAuth("info", `[MCPService] Cleared OAuth state for ${t} server(s) (cause=clear_all_tokens)`, void 0, {
                cause: "clear_all_tokens",
                clearedCount: t
            }), ol("[MCPService] Successfully cleared all OAuth tokens");
        } catch (e) {
            const t = this.getMetricSafeErrorName(e);
            this.recordOAuthStateClearMetric("clear_all_tokens", "error", {
                errorName: t
            }), this._logOAuth("error", `[MCPService] Error clearing all OAuth tokens (cause=clear_all_tokens, error=${t})`, e instanceof Error ? e : void 0, {
                cause: "clear_all_tokens",
                errorName: t
            }), ek("[MCPService] Error clearing all tokens:", e);
        }
    }
    computeServerConfigHash(e) {
        const t = [
            "command",
            "args",
            "env",
            "envFile",
            "url",
            "headers",
            "auth"
        ], n = {};
        for (const r of t)r in e && (n[r] = e[r]);
        const i = JSON.stringify(n);
        return cC(i).toString(16).substring(0, 16);
    }
    computeApprovalKey(e) {
        const t = this.computeServerConfigHash(e);
        return `${e.identifier}:${t}`;
    }
    async loadEnvFile(e, t) {
        try {
            ol(`[MCPService] Loading envFile: ${e}`), ol(`[MCPService] Workspace folder: ${t?.uri.toString() || "none"}`);
            const n = z_e.parse({
                envFile: e
            }), r = (await this.configurationResolverService.resolveAsync(t, n)).envFile;
            if (!r) return {};
            let s;
            if (r.startsWith("/") || r.match(/^[a-zA-Z]:/)) s = Ee.file(r);
            else {
                let u = t?.uri;
                if (!u) {
                    const p = this.composerDataService.selectedComposer?.gitWorktree?.worktreePath;
                    p ? u = Ee.file(p) : u = this.contextService.getWorkspace().folders[0]?.uri;
                }
                if (!u) return JX(`[MCPService] No workspace folder available to resolve relative envFile path: ${r}`), {};
                s = Ee.joinPath(u, r);
            }
            const a = (await this.fileService.readFile(s)).value.toString(), c = {}, l = a.split(`
`);
            for(let u = 0; u < l.length; u++){
                const p = l[u].trim();
                if (!p || p.startsWith("#")) continue;
                const g = p.indexOf("=");
                if (g === -1) continue;
                const f = p.substring(0, g).trim();
                let v = p.substring(g + 1).trim();
                (v.startsWith('"') && v.endsWith('"') || v.startsWith("'") && v.endsWith("'")) && (v = v.slice(1, -1)), f && (c[f] = v);
            }
            return c;
        } catch (n) {
            return JX(`[MCPService] Failed to load envFile ${e}:`, n), {};
        }
    }
    async resolveServerVariables(e) {
        try {
            const t = e.projectPath ? this.contextService.getWorkspace().folders.find((p)=>this.folderToKey(p) === e.projectPath) : this.contextService.getWorkspace().folders[0];
            let n = {};
            e.envFile && (n = await this.loadEnvFile(e.envFile, t));
            const i = {
                ...n,
                ...e.env
            }, r = {
                command: e.command,
                args: e.args,
                env: i,
                url: e.url,
                headers: e.headers,
                envFile: e.envFile,
                auth: e.auth
            }, s = KCo(r), o = z_e.parse(s), a = await this.configurationResolverService.resolveAsync(t, o);
            let c = e.type === "streamableHttp" && a.url ? await this.resolveDefaultAuth(a.url, a.auth) : a.auth;
            const l = qzv(e.auth?.CLIENT_ID, c?.CLIENT_ID);
            l !== void 0 && l !== c?.CLIENT_ID && (c = {
                ...c ?? {},
                CLIENT_ID: l
            });
            const u = e.type === "streamableHttp" ? await this.withRestMcpCursorAuthHeader(a.url, a.headers) : a.headers;
            return {
                ...e,
                command: a.command,
                args: a.args,
                env: a.env,
                url: a.url,
                headers: u,
                envFile: a.envFile,
                auth: c
            };
        } catch (t) {
            return ek(`[MCPService] Failed to resolve variables for server ${e.identifier}:`, t), dy(this.structuredLogService, "warn", `[MCPService] Failed to resolve variables for server ${e.identifier}`, t instanceof Error ? t : void 0, {
                subkey: "resolve_variables",
                identifier: e.identifier,
                serverName: e.name
            }), e;
        }
    }
    async withRestMcpCursorAuthHeader(e, t) {
        if (e === void 0 || ros(e) === void 0 || Object.keys(t ?? {}).some((r)=>r.toLowerCase() === los)) return t;
        const i = await this.cursorAuthenticationService.getAccessToken();
        return i ? {
            ...t ?? {},
            [los]: `Bearer ${i}`
        } : t;
    }
    async disableServersByName(e) {
        if (!e || e.length === 0) return;
        ol("[MCPService] Disabling servers by name:", e);
        const t = this.getServers(), n = [];
        for (const i of t)e.includes(i.name) && this.isServerEnabled(i) && (n.push(i), ol(`[MCPService] Found enabled server to disable: ${i.name} (${i.identifier})`));
        if (n.length > 0) {
            const i = [
                ...this.disabledMcpServers.get()
            ], r = [
                ...this.disabledGlobalMcpServers.get()
            ];
            let s = !1, o = !1;
            for (const a of n){
                const c = this.useProfileScopedGlobalMcpDisabledState && !a.projectManaged, l = c ? r : i;
                l.includes(a.identifier) || (l.push(a.identifier), c ? o = !0 : s = !0), await this.deleteClient(a, "server_disabled_by_name"), ol(`[MCPService] Disabled server: ${a.name} (${a.identifier})`);
            }
            s && this.disabledMcpServers.set(i, void 0), o && this.setDisabledGlobalMcpServers(r), ol(`[MCPService] Successfully disabled ${n.length} server(s)`);
        } else ol("[MCPService] No enabled servers found matching the provided names");
    }
    _emitHostedPlacementRowTransition(e) {
        const { server: t, resolved: n } = e, i = this.hostedMcpPlacementService.listedRowFor({
            identifier: n.identifier,
            url: n.url,
            isHttp: n.type === "streamableHttp"
        });
        this.metricsService.increment({
            stat: Mwh,
            value: 1,
            tags: {
                from: e.from,
                to: e.to,
                server_status: i?.status ?? "unlisted",
                source: this._deriveServerSource(t),
                scope: RKv(i)
            }
        });
    }
    _deriveServerSource(e) {
        return T_e(e);
    }
    _emitToolCallMetrics({ durationMs: e, status: t, source: n, transport: i, providerHost: r }) {
        t === "success" ? this._windowedCounters.toolCallSuccesses++ : this._windowedCounters.toolCallFailures++;
        const s = {
            status: t,
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
            value: e,
            tags: s
        });
    }
    _emitDiscoveryMetrics(e, t) {
        const n = {
            mcp_version: "snapshots"
        };
        this.metricsService.distribution({
            stat: "mcp.discovery.duration_ms",
            value: e,
            tags: n
        }), this.metricsService.distribution({
            stat: "mcp.discovery.tool_count",
            value: t,
            tags: n
        });
    }
    _emitStatusTransitionMetrics(e, t, n) {
        const i = t?.type ?? "none", r = n.type;
        r === "disconnected" && i === "connected" && this._windowedCounters.disconnects++, r === "connected" && i !== "connected" && i !== "none" && i !== "initializing" && this._windowedCounters.reconnects++, r === "error" && this._windowedCounters.errors++;
        const s = this._deriveServerSource(e), o = q1e(e), a = "snapshots";
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
            const c = n.type !== "error" ? "unknown" : MKv(n.error) ? "hosted_withheld" : Sq._classifyErrorReason(n.error);
            this.metricsService.increment({
                stat: "mcp.connection.errors",
                value: 1,
                tags: {
                    source: s,
                    transport: o,
                    mcp_version: a,
                    error_reason: c
                }
            });
        }
    }
    static _classifyErrorReason(e) {
        const t = e.toLowerCase();
        return t.includes("unauthorized") || t.includes("forbidden") || /\b401\b/.test(t) || /\b403\b/.test(t) ? "auth" : /\b(timeout|timed out|deadline exceeded)\b/.test(t) ? "timeout" : /\bsession\b/.test(t) && (/\b404\b/.test(t) || /invalid|terminat|not found/i.test(t)) ? "session_invalidated" : t.match(/\b(5\d{2})\b/) ? "http_5xx" : t.match(/\b(4\d{2})\b/) && !t.includes("unauthorized") && !t.includes("forbidden") ? "http_4xx" : /\b(econnrefused|econnreset|enotfound|epipe|ehostunreach|enetunreach|fetch failed|network)\b/.test(t) ? "network" : t.includes("client closed") || t.includes("process exited") || t.includes("spawn") || t.includes("enoent") ? "process" : "unknown";
    }
}, Sq._SNAPSHOT_WATCHDOG_INITIAL_DELAY_MS = 5e3, Sq._SNAPSHOT_WATCHDOG_RETRY_DELAY_MS = 15e3, Sq._HOSTED_MCP_PLACEMENT_INITIAL_FETCH_TIMEOUT_MS = 1e4, Sq.GOOGLE_WORKSPACE_MCP_HOSTS = $qc, Sq = ie([
    lE(0, yn),
    lE(1, M$),
    lE(2, Do),
    lE(3, Jn),
    lE(4, Ii),
    lE(5, Ea),
    lE(6, H$),
    lE(7, zl),
    lE(8, jo),
    lE(9, di),
    lE(10, xC),
    lE(11, pw),
    lE(12, $n),
    lE(13, EN),
    lE(14, ca),
    lE(15, Gs),
    lE(16, yq),
    lE(17, na),
    lE(18, Kr),
    lE(19, rLe),
    lE(20, q5),
    lE(21, yCt),
    lE(22, qt),
    lE(23, Zs),
    lE(24, h1),
    lE(25, vp),
    lE(26, S1e),
    lE(27, Xh),
    lE(28, Ma),
    lE(29, U6),
    lE(30, rjt),
    lE(31, Ett),
    lE(32, dw),
    lE(33, B_e)
], Sq);

}
