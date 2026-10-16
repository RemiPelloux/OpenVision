import { Ec, Gt, Pn, Qe, Vh, Vn, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { qn, xI } from "./async.js";
import { Rs, ss } from "./authenticationService.js";
import { Sv } from "./composerMessageStorageService.js";
import { Du, X0t, _Kr, rGt, tki, vKr, vTn } from "./dashboard_pb.js";
import { fo, ps } from "./environmentService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { $8m, G8m, KYa, T6, Y8m, cq1, lq1, mq1, q8m } from "./gYa.js";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { YYa } from "./marketplaceListingConfig.js";
import { Uh, ip } from "./metricsService.js";
import { cp } from "./objects.js";
import { Jc } from "./observable.js";
import { Yz, cCe } from "./observableValue.js";
import { Lbe } from "./pluginProtoConverters.js";
import { hr } from "./protobuf.js";
import { UM } from "./remoteAuthorityResolver.js";
import { Q0 } from "./sentry.js";
import { Zi, ki } from "./storage_2.js";
import { qd } from "./struct_pb.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { gT } from "./utils_24.js";
import { Ai, Xo } from "./uuid_2.js";
import { Sr, yr } from "./workspace.js";
import { D_, Z6e, vh } from "./yBp.js";
import { Rp, bc } from "./ze.js";
var VI, JJr, X8m, Z8m, Q8m, ees, Fot, tes;
export { Fot, JJr, Q8m, VI, X8m, Z8m, ees, tes };
var __wakaru_IA_initialized = false;
export function IA() {
if (__wakaru_IA_initialized) return;
__wakaru_IA_initialized = true;
"use strict";
E(), Du(), Du(), qn(), Gt(), Qe(), Jc(), cCe(), cp(), fn(), Xo(), hr(), Rn(), It(), Ji(), UM(), Q0(), Zi(), Sr(), ip(), gT(), Rs(), fo(), _s(), YYa(), Lbe(), VI = jn("pluginsProviderService"), JJr = 3e4, X8m = 3e4, Z8m = 4, Q8m = "cursor.plugins.installedIds", ees = "user-local:", Fot = new Map, tes = class extends st {
    constructor(t, e, n, i, r, s, o){
        super(), this._cursorAuthenticationService = t, this._workspaceContextService = e, this._workbenchEnvironmentService = n, this._experimentService = i, this._metricsService = r, this._logService = s, this._storageService = o, this._pluginsProvider = new Yz, this._providerWaitTimer = this._register(new Vn), this._onDidPluginsChange = this._register(new tt), this.onDidPluginsChange = this._onDidPluginsChange.event, this._onDidPluginsChangeWithoutRefetch = this._register(new tt), this.onDidPluginsChangeWithoutRefetch = this._onDidPluginsChangeWithoutRefetch.event, this._onDidNewPluginsDetected = this._register(new tt), this.onDidNewPluginsDetected = this._onDidNewPluginsDetected.event, this._cacheByContext = new Map, this._pluginsCache = bc("pluginsCache", void 0), this.pluginsCache = this._pluginsCache, this._refreshInstalledPluginsQueued = !1, this._refreshInstalledPluginsPendingUseReplica = !0, this._allowEmptySnapshotByKey = new Set, this._pluginComponentDataStaleByKey = new Set, this._installedPluginsConsistencyByKey = new Map, this._lastEffectiveInstalledPluginsByKey = new Map, this._installedPluginsConversionByKey = new Map, this._refreshMarketplacePluginsInFlightByKey = new Map, this._catalogRefreshSeq = 0, this._lastPublishedCatalogSeq = 0, this._persistedInstalledIdsByKey = new Map, this._onDidPluginsCacheChange = this._register(new tt), this.onDidPluginsCacheChange = this._onDidPluginsCacheChange.event, this._hydrateInstalledPluginIdsFromStorage(), this._register(e.onDidChangeWorkspaceFolders(()=>this._refreshCacheObservable()));
        const a = ()=>Fot.clear(), l = ()=>{
            a(), this._refreshCacheObservable();
        };
        t.addLoginChangedListener(l), this._register(Pn(()=>t.removeLoginChangedListener(l))), this._register(Pn(()=>this._resolvePendingProviderWait?.(void 0))), this._register(t.onDidChangeTeamIds(a)), this._maybeWarmMarketplacePluginsForCurrentContext();
    }
    _getCurrentCacheKey() {
        return lq1(this._cursorAuthenticationService.getTeamId(), this._workspaceContextService.getWorkspace().folders.map((t)=>t.uri.toString()));
    }
    _refreshCacheObservable() {
        const t = this._getCurrentCacheKey();
        this._cacheByContext.has(t) || this._hydrateInstalledPluginIdsFromStorage(t), this._pluginsCache.set(this._cacheByContext.get(t), void 0, void 0), this._onDidPluginsCacheChange.fire(), this._maybeWarmMarketplacePluginsForCurrentContext();
    }
    _hydrateInstalledPluginIdsFromStorage(t) {
        const e = t ?? this._getCurrentCacheKey(), n = q8m(e), i = this._storageService.get(n, -1);
        if (i) try {
            const r = JSON.parse(i);
            if (!Array.isArray(r) || r.length === 0) return;
            const s = new Set(r.filter((o)=>typeof o.id == "string").map((o)=>o.id));
            s.size > 0 && this._persistedInstalledIdsByKey.set(e, s);
        } catch  {}
    }
    _persistInstalledPluginIds(t, e) {
        const n = q8m(t), i = e.map((r)=>({
                id: r.plugin.id,
                sources: [
                    ...r.sources
                ]
            }));
        this._storageService.store(n, JSON.stringify(i), -1, 1);
    }
    _maybeWarmMarketplacePluginsForCurrentContext() {
        const t = this._getCurrentCacheKey();
        if (this._cacheByContext.get(t)?.allMarketplacePlugins !== void 0 || this._refreshMarketplacePluginsInFlightByKey.has(t)) return;
        const n = this._refreshMarketplacePluginsFromDashboardClient(t).finally(()=>{
            this._refreshMarketplacePluginsInFlightByKey.delete(t);
        });
        this._refreshMarketplacePluginsInFlightByKey.set(t, n);
    }
    _getSharedMarketplaceSnapshotKey() {
        return String(this._cursorAuthenticationService.getTeamId() ?? "no-team");
    }
    async _getOrFetchSharedMarketplaceSnapshot(t) {
        const e = this._getSharedMarketplaceSnapshotKey();
        t.forceRefetch && Fot.delete(e);
        let n = Fot.get(e) ?? this._startSharedMarketplaceSnapshotFetch(e), i = await n;
        for(;;){
            const r = Fot.get(e);
            if (r === void 0 || r === n) return i;
            n = r;
            try {
                i = await n;
            } catch  {}
        }
    }
    _startSharedMarketplaceSnapshotFetch(t) {
        const e = this._fetchMarketplaceSnapshotFromDashboard();
        Fot.set(t, e);
        const n = ()=>{
            Fot.get(t) === e && Fot.delete(t);
        };
        return e.then((i)=>{
            i.complete || n();
        }, n), e;
    }
    async _fetchMarketplaceSnapshotFromDashboard() {
        const t = await this._cursorAuthenticationService.dashboardClient(), e = KYa(this._experimentService), n = await Vh(t.listMarketplacePlugins(new X0t({}), {
            headers: vh(Ai())
        }), e), i = (n?.plugins ?? []).map(T6), r = await Vh(t.listMarketplaces(new tki({}), {
            headers: vh(Ai())
        }), e), s = r?.marketplaces ?? [], o = [];
        for (const c of s){
            const u = $8m(c);
            u !== void 0 && o.push(u);
        }
        const a = await Y8m(s.map((c)=>c.id), async (c)=>[
                ...(await t.listMarketplacePlugins(new X0t({
                    marketplaceId: c
                }), {
                    headers: vh(Ai())
                })).plugins
            ].map(T6), e), l = new Map;
        for (const c of i)l.set(c.id, c);
        for (const c of a.values())for (const u of c)l.set(u.id, u);
        return {
            snapshot: {
                allMarketplacePlugins: Array.from(l.values()),
                pluginsByMarketplaceId: a,
                marketplaces: o
            },
            complete: n !== void 0 && r !== void 0
        };
    }
    async _refreshMarketplacePluginsFromDashboardClient(t, e = {
        forceRefetch: !1
    }) {
        const n = ++this._catalogRefreshSeq;
        try {
            const { snapshot: i } = await this._getOrFetchSharedMarketplaceSnapshot(e);
            if (n < this._lastPublishedCatalogSeq) return;
            this._lastPublishedCatalogSeq = n, this.setCachedPlugins({
                allMarketplacePlugins: i.allMarketplacePlugins.slice(),
                pluginsByMarketplaceId: new Map(Array.from(i.pluginsByMarketplaceId, ([r, s])=>[
                        r,
                        s.slice()
                    ])),
                marketplaces: i.marketplaces.slice()
            }, t);
        } catch  {}
    }
    _shouldWarnAboutProviderWaitTimeout() {
        const t = this._workbenchEnvironmentService.remoteAuthority;
        return t ? Z6e(t) !== "background-composer" : !0;
    }
    _warnProviderWaitTimeout() {
        this._shouldWarnAboutProviderWaitTimeout() && console.warn(`[PluginsProviderService] Timed out waiting for plugins provider after ${JJr}ms`);
    }
    _waitForProvider() {
        return this._pluginsProvider.getState().state === "fulfilled" ? D_(this._pluginsProvider) : this._store.isDisposed ? Promise.resolve(void 0) : (this._pendingProviderWait === void 0 && (this._pendingProviderWait = new Promise((t)=>{
            this._resolvePendingProviderWait = t, this._providerWaitTimer.value = Ec(()=>{
                this._warnProviderWaitTimeout(), t(void 0);
            }, JJr), D_(this._pluginsProvider).then(t, ()=>t(void 0));
        }).finally(()=>{
            this._providerWaitTimer.clear(), this._resolvePendingProviderWait = void 0, this._pendingProviderWait = void 0;
        })), this._pendingProviderWait);
    }
    getPluginsCacheKey() {
        return this._getCurrentCacheKey();
    }
    setCachedPlugins(t, e) {
        const n = e ?? this._getCurrentCacheKey(), r = {
            ...this._cacheByContext.get(n) ?? {}
        };
        let s = !1;
        const o = (a, l)=>{
            l !== void 0 && (Rp(r[a], l) || (r[a] = l, s = !0));
        };
        o("installedPlugins", t.installedPlugins), o("importedExternalPlugins", t.importedExternalPlugins), o("installedCursorThirdPartyPlugins", t.installedCursorThirdPartyPlugins), o("allMarketplacePlugins", t.allMarketplacePlugins), t.pluginsByMarketplaceId !== void 0 && (r.pluginsByMarketplaceId = t.pluginsByMarketplaceId, s = !0), t.marketplaces !== void 0 && (r.marketplaces = t.marketplaces, s = !0), o("installedGitHubPlugins", t.installedGitHubPlugins), o("loadedPlugins", t.loadedPlugins), o("pluginComponentFiles", t.pluginComponentFiles), o("loadFailures", t.loadFailures), s && (this._cacheByContext.set(n, r), t.installedPlugins !== void 0 && r.installedPlugins && this._persistInstalledPluginIds(n, r.installedPlugins), n === this._getCurrentCacheKey() && (this._pluginsCache.set(r, void 0, void 0), this._onDidPluginsCacheChange.fire()));
    }
    async _callWithOutcome(t, e, n) {
        const i = performance.now(), r = await this._waitForProvider();
        if (!r) return {
            outcome: "no_provider",
            value: n
        };
        const s = performance.now() - i, o = JJr - s;
        if (o <= 0) {
            const c = `[PluginsProviderService] ${t} timed out after ${s.toFixed(1)}ms (waiting for provider)`;
            return Sv(new Error(c), {
                captureContext: {
                    tags: {
                        client_error_type: "plugins_provider_timeout"
                    },
                    extra: {
                        methodName: t,
                        elapsed: s.toFixed(1)
                    },
                    fingerprint: [
                        "plugins-provider-timeout",
                        t
                    ]
                }
            }), console.warn(c), {
                outcome: "timeout",
                value: n
            };
        }
        const a = await Vh(e(r), o);
        if (a === void 0) {
            const c = (performance.now() - i).toFixed(1), u = `[PluginsProviderService] ${t} timed out after ${c}ms`;
            return Sv(new Error(u), {
                captureContext: {
                    tags: {
                        client_error_type: "plugins_provider_timeout"
                    },
                    extra: {
                        methodName: t,
                        elapsed: c
                    },
                    fingerprint: [
                        "plugins-provider-timeout",
                        t
                    ]
                }
            }), console.warn(u), {
                outcome: "timeout",
                value: n
            };
        }
        const l = performance.now() - i;
        return l > 1e3 && this._logService.debug(`[PluginsProviderService] ${t} took ${l.toFixed(1)}ms`), {
            outcome: "ok",
            value: a
        };
    }
    async _callWithTimeout(t, e, n) {
        const { value: i } = await this._callWithOutcome(t, e, n);
        return i;
    }
    async getPluginMcpServers() {
        return this._callWithTimeout("getPluginMcpServers", (t)=>t.getPluginMcpServers(), []);
    }
    async getPluginMcpServersWithOutcome() {
        const { outcome: t, value: e } = await this._callWithOutcome("getPluginMcpServers", (n)=>n.getPluginMcpServers(), []);
        return {
            outcome: t,
            servers: e
        };
    }
    async getPluginHooks() {
        return this._callWithTimeout("getPluginHooks", (t)=>t.getPluginHooks(), {
            hooks: [],
            errors: []
        });
    }
    async getPluginCommands() {
        return this._callWithTimeout("getPluginCommands", (t)=>t.getPluginCommands(), []);
    }
    async getLoadedPluginsSummary() {
        return this._callWithTimeout("getLoadedPluginsSummary", (t)=>t.getLoadedPluginsSummary(), []);
    }
    async getPluginLoadFailures() {
        return this._callWithTimeout("getPluginLoadFailures", (t)=>t.getPluginLoadFailures(), []);
    }
    async getPluginComponentFiles() {
        return this._callWithTimeout("getPluginComponentFiles", (t)=>t.getPluginComponentFiles(), []);
    }
    isPluginComponentDataStale() {
        return this._pluginComponentDataStaleByKey.has(this._getCurrentCacheKey());
    }
    async getPluginSetIncomplete() {
        return this._callWithTimeout("getPluginSetIncomplete", (t)=>t.getPluginSetIncomplete(), !0);
    }
    async getPrimitiveAuthorship(t) {
        return this._callWithTimeout("getPrimitiveAuthorship", (e)=>e.getPrimitiveAuthorship(t), []);
    }
    async getInstalledGitHubPlugins() {
        return this._callWithTimeout("getInstalledGitHubPlugins", (t)=>t.getInstalledGitHubPlugins(), []);
    }
    async addGitHubPlugin(t) {
        return (await D_(this._pluginsProvider)).addGitHubPlugin(t);
    }
    async removeGitHubPlugin(t) {
        return (await D_(this._pluginsProvider)).removeGitHubPlugin(t);
    }
    async removeLocalPlugin(t) {
        return (await D_(this._pluginsProvider)).removeLocalPlugin(t);
    }
    async saveLocalPluginVariables(t, e) {
        return (await D_(this._pluginsProvider)).saveLocalPluginVariables(t, e);
    }
    async discoverMarketplacePlugins(t, e, n) {
        return this._callWithTimeout("discoverMarketplacePlugins", (i)=>i.discoverMarketplacePlugins(t, e, n), []);
    }
    async parseGitHubRepoForPlugins({ gitUrl: t, gitRef: e, signal: n, source: i }) {
        const r = performance.now();
        let s = !1;
        const o = this._experimentService.checkFeatureGate("enable_local_3p_plugin_imports", {
            disableExposureLog: !1
        }), a = {
            source: i,
            imported_locally: String(o)
        };
        this._metricsService.increment({
            stat: "marketplace.parseGitHubRepoForPlugins.count",
            tags: a
        });
        try {
            if (o) {
                const c = await this.parseGitHubRepoForPluginsLocally(t, e);
                return c.marketplaceName && this._persistLocallyParsedMarketplace({
                    gitRef: e,
                    parseResult: c
                }).catch((u)=>{
                    this._logService.warn("[PluginsProviderService] Failed to persist locally parsed marketplace", u);
                }), c;
            }
            return await (await this._cursorAuthenticationService.dashboardClient()).parseGitHubRepoForPlugins(new vKr({
                gitUrl: t,
                gitRef: e
            }), {
                headers: vh(Ai()),
                signal: n
            });
        } catch (l) {
            throw s = !0, this._metricsService.increment({
                stat: "marketplace.parseGitHubRepoForPlugins.error",
                tags: a
            }), l;
        } finally{
            this._metricsService.distribution({
                stat: "marketplace.parseGitHubRepoForPlugins.duration",
                value: performance.now() - r,
                tags: {
                    ...a,
                    errored: String(s)
                }
            });
        }
    }
    async _persistLocallyParsedMarketplace({ gitRef: t, parseResult: e }) {
        const n = await this._cursorAuthenticationService.dashboardClient(), i = e.commitSha || e.defaultBranch || t || "", r = e.plugins.filter((s)=>!s.parseError).map((s)=>new vTn({
                name: s.name,
                displayName: s.displayName,
                description: s.description,
                gitPath: s.gitPath,
                gitUrl: s.sourceGitUrl ?? "",
                gitRef: s.sourceGitRef ?? "",
                skills: s.skills,
                subagents: s.subagents,
                hooks: s.hooks,
                rules: s.rules,
                mcpServers: s.mcpServers,
                commands: s.commands,
                logoUrl: s.logoUrl,
                variables: s.variables,
                minClientVersions: s.minClientVersions
            }));
        await n.registerMarketplaceAndPlugins(new rGt({
            gitUrl: e.repositoryUrl,
            gitRef: i,
            marketplaceName: e.marketplaceName,
            plugins: r,
            commitSha: e.commitSha || void 0
        }), {
            headers: vh(Ai())
        }), this._logService.info(`[PluginsProviderService] Persisted locally parsed marketplace: ${e.marketplaceName} with ${r.length} plugin(s)`);
    }
    async importLocalMarketplace(t) {
        const e = await this.parseGitHubRepoForPluginsLocally(rt.file(t).toString());
        return await this._persistLocallyParsedMarketplace({
            gitRef: void 0,
            parseResult: e
        }), await this._refreshMarketplacePluginsFromDashboardClient(this._getCurrentCacheKey(), {
            forceRefetch: !0
        }).catch((n)=>{
            this._logService.warn("[PluginsProviderService] Failed to refresh marketplace cache after local import", n);
        }), e;
    }
    async importClaudeMarketplaces() {
        const t = {
            discovered: 0,
            registered: 0,
            failed: 0
        }, e = await this._waitForProvider();
        if (!e) return this._logService.warn("[PluginsProviderService] importClaudeMarketplaces: plugins provider not available"), t;
        const n = await this._cursorAuthenticationService.dashboardClient();
        let i = [];
        try {
            i = (await n.listMarketplaces(new tki({}), {
                headers: vh(Ai())
            })).marketplaces.filter((d)=>d.userId !== void 0).map((d)=>d.name);
        } catch (u) {
            this._logService.warn("[PluginsProviderService] importClaudeMarketplaces: listMarketplaces failed; will assume no existing marketplaces", u);
        }
        let r;
        try {
            r = await e.discoverClaudeMarketplacePayloads(i);
        } catch (u) {
            return this._logService.warn("[PluginsProviderService] importClaudeMarketplaces: discoverClaudeMarketplacePayloads failed", u), t;
        }
        if (r.length === 0) return t;
        const s = new xI(Z8m), o = r.map((u)=>s.queue(async ()=>{
                const d = G8m(u.gitUrl), h = new rGt({
                    gitUrl: d,
                    gitRef: u.gitRef,
                    marketplaceName: u.marketplaceName,
                    commitSha: u.commitSha,
                    plugins: u.plugins.map((p)=>new vTn({
                            name: p.name,
                            displayName: p.displayName,
                            description: p.description,
                            gitPath: p.gitPath,
                            gitUrl: p.gitUrl ? G8m(p.gitUrl) : p.gitUrl,
                            gitRef: p.gitRef,
                            skills: p.skills,
                            subagents: p.subagents,
                            hooks: p.hooks,
                            rules: p.rules,
                            mcpServers: p.mcpServers,
                            commands: p.commands,
                            logoUrl: p.logoUrl,
                            variables: p.variables ? qd.fromJson(p.variables) : void 0
                        }))
                });
                await n.registerMarketplaceAndPlugins(h, {
                    headers: vh(Ai())
                });
            })), a = await Promise.allSettled(o);
        let l = 0, c = 0;
        return a.forEach((u, d)=>{
            if (u.status === "fulfilled") {
                l += 1;
                return;
            }
            c += 1, this._logService.warn(`[PluginsProviderService] Failed to register Claude marketplace ${r[d]?.marketplaceName}`, u.reason);
        }), l > 0 && this._refreshMarketplacePluginsFromDashboardClient(this._getCurrentCacheKey(), {
            forceRefetch: !0
        }).catch((u)=>{
            this._logService.warn("[PluginsProviderService] Failed to refresh marketplace cache after Claude import", u);
        }), this._logService.info(`[PluginsProviderService] Claude marketplace import complete: discovered=${r.length}, registered=${l}, failed=${c}`), {
            discovered: r.length,
            registered: l,
            failed: c
        };
    }
    async parseGitHubRepoForPluginsLocally(t, e) {
        const n = await this._waitForProvider();
        if (!n) throw new Error("Plugins provider not available");
        const i = await Vh(n.parseGitHubRepoForPluginsLocally(t, e), X8m);
        if (i === void 0) throw new Error("Timed out while cloning or parsing the plugin repository");
        return new _Kr(i);
    }
    async installProjectPlugin(t) {
        return (await D_(this._pluginsProvider)).installProjectPlugin(t);
    }
    async removeProjectPlugin(t) {
        return (await D_(this._pluginsProvider)).removeProjectPlugin(t);
    }
    async getEffectiveInstalledPlugins(t) {
        const e = this._getCurrentCacheKey(), n = await this._callWithTimeout("getEffectiveInstalledPlugins", (r)=>r.getEffectiveInstalledPlugins(t), []), i = this._lastEffectiveInstalledPluginsByKey.get(e);
        return i !== void 0 && Rp(i, n) ? i : (this._lastEffectiveInstalledPluginsByKey.set(e, n), n);
    }
    async getPluginsSnapshot(t) {
        try {
            return await this._callWithTimeout("getPluginsSnapshot", (e)=>e.getPluginsSnapshot(t), void 0);
        } catch  {
            return;
        }
    }
    registerPluginsProvider(t) {
        return this._pluginsProvider.set(t);
    }
    allowNextEmptyInstalledSnapshot() {
        const t = this._getCurrentCacheKey();
        this._allowEmptySnapshotByKey.add(t);
    }
    notifyPluginsChanged() {
        this._onDidPluginsChange.fire();
    }
    notifyPluginsChangedWithoutRefetch() {
        this._onDidPluginsChangeWithoutRefetch.fire();
    }
    notifyProviderReady() {
        this._onDidPluginsChange.fire();
    }
    _convertExtHostPluginsMemoized(t, e) {
        const n = this._installedPluginsConversionByKey.get(t);
        if (n !== void 0 && Rp(n.raw, e)) return n.converted;
        const i = cq1(e);
        return this._installedPluginsConversionByKey.set(t, {
            raw: e,
            converted: i
        }), i;
    }
    applyPluginsSnapshot(t, e, n) {
        const i = e ?? this._getCurrentCacheKey(), r = n?.consistency, s = n?.origin === "push" && r === "replica" && this._installedPluginsConsistencyByKey.get(i) === "primary", o = this._allowEmptySnapshotByKey.delete(i), a = this._convertExtHostPluginsMemoized(i, t.effectiveInstalledPlugins);
        t.pluginSetIncomplete && this._pluginComponentDataStaleByKey.add(i);
        const l = t.pluginSetIncomplete ? void 0 : t.loadedPluginsSummary, c = this._cacheByContext.get(i);
        if (!o && a.length === 0 && t.loadedPluginsSummary.length > 0 && (c?.installedPlugins?.length ?? 0) > 0) {
            this.setCachedPlugins({
                importedExternalPlugins: t.importedExternalPlugins,
                installedCursorThirdPartyPlugins: t.installedCursorThirdPartyPlugins,
                installedGitHubPlugins: t.installedGitHubPlugins,
                loadedPlugins: l,
                loadFailures: t.loadFailures ?? []
            }, i);
            return;
        }
        const u = {
            importedExternalPlugins: t.importedExternalPlugins,
            installedCursorThirdPartyPlugins: t.installedCursorThirdPartyPlugins,
            installedGitHubPlugins: t.installedGitHubPlugins,
            loadedPlugins: l,
            loadFailures: t.loadFailures ?? []
        };
        s || (u.installedPlugins = a), this.setCachedPlugins(u, i), !s && r !== void 0 && this._installedPluginsConsistencyByKey.set(i, r);
    }
    async refreshPluginData(t) {
        const [e, n, i, r, s] = await Promise.all([
            this.getInstalledGitHubPlugins(),
            this.getLoadedPluginsSummary(),
            this.getPluginComponentFiles(),
            this.getPluginLoadFailures(),
            this.getPluginSetIncomplete()
        ]), o = {
            installedGitHubPlugins: e,
            loadFailures: r
        }, a = t ?? this._getCurrentCacheKey();
        s ? this._pluginComponentDataStaleByKey.add(a) : (this._pluginComponentDataStaleByKey.delete(a), o.loadedPlugins = n, o.pluginComponentFiles = i), this.setCachedPlugins(o, t);
    }
    async refreshInstalledPlugins(t) {
        return this._refreshInstalledPluginsPendingUseReplica = this._refreshInstalledPluginsPendingUseReplica && t.useReplica, this._refreshInstalledPluginsInFlight ? (this._refreshInstalledPluginsQueued = !0, this._refreshInstalledPluginsInFlight) : (this._refreshInstalledPluginsInFlight = (async ()=>{
            do {
                this._refreshInstalledPluginsQueued = !1;
                const e = this._refreshInstalledPluginsPendingUseReplica;
                this._refreshInstalledPluginsPendingUseReplica = !0, await this._refreshInstalledPluginsInternal(e);
            }while (this._refreshInstalledPluginsQueued)
        })().finally(()=>{
            this._refreshInstalledPluginsInFlight = void 0, this._refreshInstalledPluginsQueued = !1, this._refreshInstalledPluginsPendingUseReplica = !0;
        }), this._refreshInstalledPluginsInFlight);
    }
    async _refreshInstalledPluginsInternal(t) {
        const e = this._getCurrentCacheKey();
        try {
            const n = await this.getPluginsSnapshot(t);
            if (n) {
                this.applyPluginsSnapshot(n, e, {
                    consistency: t ? "replica" : "primary",
                    origin: "refresh"
                });
                return;
            }
            const i = this._allowEmptySnapshotByKey.delete(e), [r] = await Promise.all([
                this.getEffectiveInstalledPlugins(t),
                this.refreshPluginData(e)
            ]), s = this._cacheByContext.get(e);
            let o = this._convertExtHostPluginsMemoized(e, r);
            const a = s?.loadedPlugins?.length ?? 0, l = s?.installedPlugins?.length ?? 0;
            if (!i && o.length === 0 && a > 0) {
                const u = await this.getEffectiveInstalledPlugins(t);
                if (u.length > 0 && (o = this._convertExtHostPluginsMemoized(e, u)), o.length === 0 && l > 0) return;
            }
            const c = s?.installedPlugins;
            if (c !== void 0 && c.length > 0) {
                const u = new Set(c.map((h)=>h.plugin.id)), d = o.filter((h)=>!u.has(h.plugin.id));
                d.length > 0 && (this._logService.info(`[PluginsProviderService] Detected ${d.length} newly installed plugin(s): ${d.map((h)=>h.plugin.displayName).join(", ")}`), this._onDidNewPluginsDetected.fire(d));
            }
            this.setCachedPlugins({
                installedPlugins: o
            }, e), this._installedPluginsConsistencyByKey.set(e, t ? "replica" : "primary");
        } catch  {
            this._cacheByContext.get(e)?.installedPlugins === void 0 && this.setCachedPlugins({
                installedPlugins: []
            }, e);
        }
    }
    async refreshMarketplacePlugins(t) {
        const e = this._getCurrentCacheKey();
        Fot.delete(this._getSharedMarketplaceSnapshotKey());
        const n = ++this._catalogRefreshSeq;
        try {
            const i = KYa(this._experimentService), r = await mq1(t, i);
            if (n < this._lastPublishedCatalogSeq) return;
            this._lastPublishedCatalogSeq = n, this.setCachedPlugins({
                allMarketplacePlugins: r.allMarketplacePlugins,
                pluginsByMarketplaceId: r.pluginsByMarketplaceId,
                marketplaces: r.marketplaces
            }, e);
        } catch  {}
    }
    warmMarketplacePlugins() {
        this._maybeWarmMarketplacePluginsForCurrentContext();
    }
    async requestPluginsRefresh() {
        await (await D_(this._pluginsProvider)).requestRefresh();
    }
    async addExtensionPlugin(t) {
        await (await D_(this._pluginsProvider)).addExtensionPlugin(t);
    }
    async removeExtensionPlugin(t) {
        await (await D_(this._pluginsProvider)).removeExtensionPlugin(t);
    }
    getPersistedInstalledPluginIds() {
        const t = this._getCurrentCacheKey();
        return this._persistedInstalledIdsByKey.get(t);
    }
    upsertInstalledPluginInCache(t) {
        const e = this._getCurrentCacheKey(), i = this._cacheByContext.get(e)?.installedPlugins ?? [], r = i.findIndex((s)=>s.plugin.id === t.plugin.id);
        if (r !== -1) {
            const s = new Set([
                ...i[r].sources,
                ...t.sources
            ]);
            if (s.size === i[r].sources.length) return;
            const o = [
                ...i
            ];
            o[r] = {
                ...i[r],
                sources: Array.from(s)
            }, this.setCachedPlugins({
                installedPlugins: o
            }, e);
            return;
        }
        this.setCachedPlugins({
            installedPlugins: [
                ...i,
                t
            ]
        }, e);
    }
    removeInstalledPluginFromCache(t) {
        const e = this._getCurrentCacheKey(), i = this._cacheByContext.get(e)?.installedPlugins;
        i && this.setCachedPlugins({
            installedPlugins: i.filter((r)=>r.plugin.id !== t)
        }, e);
    }
    removeInstalledPluginSourceFromCache(t, e) {
        const n = this._getCurrentCacheKey(), r = this._cacheByContext.get(n)?.installedPlugins;
        if (!r) return;
        const s = r.flatMap((o)=>{
            if (o.plugin.id !== t) return [
                o
            ];
            const a = o.sources.filter((l)=>l !== e);
            return a.length === 0 ? [] : [
                {
                    ...o,
                    sources: a
                }
            ];
        });
        this.setCachedPlugins({
            installedPlugins: s
        }, n);
    }
}, tes = Re([
    F(0, ss),
    F(1, yr),
    F(2, ps),
    F(3, Cr),
    F(4, Uh),
    F(5, Li),
    F(6, ki)
], tes), bn(VI, tes, 1);

}
