import { lf, qJe, td } from "./A3u.js";
import { Cl, Hp, Se, bt, cn, rn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { aR, bn } from "./async.js";
import { Za, na } from "./authenticationService.js";
import { Km } from "./composerMessageStorageService.js";
import { HSt, Jh, L$i, P$i, USt, YPn, dHt } from "./dashboard_pb.js";
import { Vr, Yi } from "./environmentService.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { dgo } from "./marketplaceListingConfig.js";
import { Cp, vp } from "./metricsService.js";
import { bu } from "./objects.js";
import { qa } from "./observable.js";
import { HU, wde } from "./observableValue.js";
import { Fde } from "./pluginProtoConverters.js";
import { bi } from "./protobuf.js";
import { Xo, mn, vn, yh } from "./qIc.js";
import { DR } from "./remoteAuthorityResolver.js";
import { Lk } from "./sentry.js";
import { Vn, yn } from "./storage_2.js";
import { fd } from "./struct_pb.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Fw } from "./utils_24.js";
import { Js, zn } from "./uuid.js";
import { Jn, ci } from "./workspace.js";
import { $6, $Jd, GMv, KMv, NJd, OJd, PJd, WMv, ugo } from "./xmo.js";
var EN, Xqi, HJd, WJd, GJd, Zqi, OUe, Qqi;
export { EN, GJd, HJd, OUe, Qqi, WJd, Xqi, Zqi };
var __wakaru_lF_initialized = false;
export function lF() {
if (__wakaru_lF_initialized) return;
__wakaru_lF_initialized = true;
"use strict";
x(), Jh(), Jh(), bn(), bt(), Se(), qa(), wde(), bu(), Qt(), Js(), bi(), Pn(), Ze(), Qn(), DR(), Lk(), Vn(), ci(), Cp(), Fw(), Za(), Vr(), qs(), dgo(), Fde(), EN = vn("pluginsProviderService"), Xqi = 3e4, HJd = 3e4, WJd = 4, GJd = "cursor.plugins.installedIds", Zqi = "user-local:", OUe = new Map, Qqi = class extends we {
    constructor(e, t, n, i, r, s, o){
        super(), this._cursorAuthenticationService = e, this._workspaceContextService = t, this._workbenchEnvironmentService = n, this._experimentService = i, this._metricsService = r, this._logService = s, this._storageService = o, this._pluginsProvider = new HU, this._providerWaitTimer = this._register(new cn), this._onDidPluginsChange = this._register(new ve), this.onDidPluginsChange = this._onDidPluginsChange.event, this._onDidPluginsChangeWithoutRefetch = this._register(new ve), this.onDidPluginsChangeWithoutRefetch = this._onDidPluginsChangeWithoutRefetch.event, this._onDidNewPluginsDetected = this._register(new ve), this.onDidNewPluginsDetected = this._onDidNewPluginsDetected.event, this._cacheByContext = new Map, this._pluginsCache = Xo("pluginsCache", void 0), this.pluginsCache = this._pluginsCache, this._refreshInstalledPluginsQueued = !1, this._refreshInstalledPluginsPendingUseReplica = !0, this._allowEmptySnapshotByKey = new Set, this._pluginComponentDataStaleByKey = new Set, this._installedPluginsConsistencyByKey = new Map, this._lastEffectiveInstalledPluginsByKey = new Map, this._installedPluginsConversionByKey = new Map, this._refreshMarketplacePluginsInFlightByKey = new Map, this._catalogRefreshSeq = 0, this._lastPublishedCatalogSeq = 0, this._persistedInstalledIdsByKey = new Map, this._onDidPluginsCacheChange = this._register(new ve), this.onDidPluginsCacheChange = this._onDidPluginsCacheChange.event, this._hydrateInstalledPluginIdsFromStorage(), this._register(t.onDidChangeWorkspaceFolders(()=>this._refreshCacheObservable()));
        const a = ()=>OUe.clear(), c = ()=>{
            a(), this._refreshCacheObservable();
        };
        e.addLoginChangedListener(c), this._register(rn(()=>e.removeLoginChangedListener(c))), this._register(rn(()=>this._resolvePendingProviderWait?.(void 0))), this._register(e.onDidChangeTeamIds(a)), this._maybeWarmMarketplacePluginsForCurrentContext();
    }
    _getCurrentCacheKey() {
        return WMv(this._cursorAuthenticationService.getTeamId(), this._workspaceContextService.getWorkspace().folders.map((e)=>e.uri.toString()));
    }
    _refreshCacheObservable() {
        const e = this._getCurrentCacheKey();
        this._cacheByContext.has(e) || this._hydrateInstalledPluginIdsFromStorage(e), this._pluginsCache.set(this._cacheByContext.get(e), void 0, void 0), this._onDidPluginsCacheChange.fire(), this._maybeWarmMarketplacePluginsForCurrentContext();
    }
    _hydrateInstalledPluginIdsFromStorage(e) {
        const t = e ?? this._getCurrentCacheKey(), n = OJd(t), i = this._storageService.get(n, -1);
        if (i) try {
            const r = JSON.parse(i);
            if (!Array.isArray(r) || r.length === 0) return;
            const s = new Set(r.filter((o)=>typeof o.id == "string").map((o)=>o.id));
            s.size > 0 && this._persistedInstalledIdsByKey.set(t, s);
        } catch  {}
    }
    _persistInstalledPluginIds(e, t) {
        const n = OJd(e), i = t.map((r)=>({
                id: r.plugin.id,
                sources: [
                    ...r.sources
                ]
            }));
        this._storageService.store(n, JSON.stringify(i), -1, 1);
    }
    _maybeWarmMarketplacePluginsForCurrentContext() {
        const e = this._getCurrentCacheKey();
        if (this._cacheByContext.get(e)?.allMarketplacePlugins !== void 0 || this._refreshMarketplacePluginsInFlightByKey.has(e)) return;
        const n = this._refreshMarketplacePluginsFromDashboardClient(e).finally(()=>{
            this._refreshMarketplacePluginsInFlightByKey.delete(e);
        });
        this._refreshMarketplacePluginsInFlightByKey.set(e, n);
    }
    _getSharedMarketplaceSnapshotKey() {
        return String(this._cursorAuthenticationService.getTeamId() ?? "no-team");
    }
    async _getOrFetchSharedMarketplaceSnapshot(e) {
        const t = this._getSharedMarketplaceSnapshotKey();
        e.forceRefetch && OUe.delete(t);
        let n = OUe.get(t) ?? this._startSharedMarketplaceSnapshotFetch(t), i = await n;
        for(;;){
            const r = OUe.get(t);
            if (r === void 0 || r === n) return i;
            n = r;
            try {
                i = await n;
            } catch  {}
        }
    }
    _startSharedMarketplaceSnapshotFetch(e) {
        const t = this._fetchMarketplaceSnapshotFromDashboard();
        OUe.set(e, t);
        const n = ()=>{
            OUe.get(e) === t && OUe.delete(e);
        };
        return t.then((i)=>{
            i.complete || n();
        }, n), t;
    }
    async _fetchMarketplaceSnapshotFromDashboard() {
        const e = await this._cursorAuthenticationService.dashboardClient(), t = ugo(this._experimentService), n = await Hp(e.listMarketplacePlugins(new USt({}), {
            headers: td(zn())
        }), t), i = (n?.plugins ?? []).map($6), r = await Hp(e.listMarketplaces(new YPn({}), {
            headers: td(zn())
        }), t), s = r?.marketplaces ?? [], o = [];
        for (const l of s){
            const u = PJd(l);
            u !== void 0 && o.push(u);
        }
        const a = await $Jd(s.map((l)=>l.id), async (l)=>[
                ...(await e.listMarketplacePlugins(new USt({
                    marketplaceId: l
                }), {
                    headers: td(zn())
                })).plugins
            ].map($6), t), c = new Map;
        for (const l of i)c.set(l.id, l);
        for (const l of a.values())for (const u of l)c.set(u.id, u);
        return {
            snapshot: {
                allMarketplacePlugins: Array.from(c.values()),
                pluginsByMarketplaceId: a,
                marketplaces: o
            },
            complete: n !== void 0 && r !== void 0
        };
    }
    async _refreshMarketplacePluginsFromDashboardClient(e, t = {
        forceRefetch: !1
    }) {
        const n = ++this._catalogRefreshSeq;
        try {
            const { snapshot: i } = await this._getOrFetchSharedMarketplaceSnapshot(t);
            if (n < this._lastPublishedCatalogSeq) return;
            this._lastPublishedCatalogSeq = n, this.setCachedPlugins({
                allMarketplacePlugins: i.allMarketplacePlugins.slice(),
                pluginsByMarketplaceId: new Map(Array.from(i.pluginsByMarketplaceId, ([r, s])=>[
                        r,
                        s.slice()
                    ])),
                marketplaces: i.marketplaces.slice()
            }, e);
        } catch  {}
    }
    _shouldWarnAboutProviderWaitTimeout() {
        const e = this._workbenchEnvironmentService.remoteAuthority;
        return e ? qJe(e) !== "background-composer" : !0;
    }
    _warnProviderWaitTimeout() {
        this._shouldWarnAboutProviderWaitTimeout() && console.warn(`[PluginsProviderService] Timed out waiting for plugins provider after ${Xqi}ms`);
    }
    _waitForProvider() {
        return this._pluginsProvider.getState().state === "fulfilled" ? lf(this._pluginsProvider) : this._store.isDisposed ? Promise.resolve(void 0) : (this._pendingProviderWait === void 0 && (this._pendingProviderWait = new Promise((e)=>{
            this._resolvePendingProviderWait = e, this._providerWaitTimer.value = Cl(()=>{
                this._warnProviderWaitTimeout(), e(void 0);
            }, Xqi), lf(this._pluginsProvider).then(e, ()=>e(void 0));
        }).finally(()=>{
            this._providerWaitTimer.clear(), this._resolvePendingProviderWait = void 0, this._pendingProviderWait = void 0;
        })), this._pendingProviderWait);
    }
    getPluginsCacheKey() {
        return this._getCurrentCacheKey();
    }
    setCachedPlugins(e, t) {
        const n = t ?? this._getCurrentCacheKey(), r = {
            ...this._cacheByContext.get(n) ?? {}
        };
        let s = !1;
        const o = (a, c)=>{
            c !== void 0 && (yh(r[a], c) || (r[a] = c, s = !0));
        };
        o("installedPlugins", e.installedPlugins), o("importedExternalPlugins", e.importedExternalPlugins), o("installedCursorThirdPartyPlugins", e.installedCursorThirdPartyPlugins), o("allMarketplacePlugins", e.allMarketplacePlugins), e.pluginsByMarketplaceId !== void 0 && (r.pluginsByMarketplaceId = e.pluginsByMarketplaceId, s = !0), e.marketplaces !== void 0 && (r.marketplaces = e.marketplaces, s = !0), o("installedGitHubPlugins", e.installedGitHubPlugins), o("loadedPlugins", e.loadedPlugins), o("pluginComponentFiles", e.pluginComponentFiles), o("loadFailures", e.loadFailures), s && (this._cacheByContext.set(n, r), e.installedPlugins !== void 0 && r.installedPlugins && this._persistInstalledPluginIds(n, r.installedPlugins), n === this._getCurrentCacheKey() && (this._pluginsCache.set(r, void 0, void 0), this._onDidPluginsCacheChange.fire()));
    }
    async _callWithOutcome(e, t, n) {
        const i = performance.now(), r = await this._waitForProvider();
        if (!r) return {
            outcome: "no_provider",
            value: n
        };
        const s = performance.now() - i, o = Xqi - s;
        if (o <= 0) {
            const l = `[PluginsProviderService] ${e} timed out after ${s.toFixed(1)}ms (waiting for provider)`;
            return Km(new Error(l), {
                captureContext: {
                    tags: {
                        client_error_type: "plugins_provider_timeout"
                    },
                    extra: {
                        methodName: e,
                        elapsed: s.toFixed(1)
                    },
                    fingerprint: [
                        "plugins-provider-timeout",
                        e
                    ]
                }
            }), console.warn(l), {
                outcome: "timeout",
                value: n
            };
        }
        const a = await Hp(t(r), o);
        if (a === void 0) {
            const l = (performance.now() - i).toFixed(1), u = `[PluginsProviderService] ${e} timed out after ${l}ms`;
            return Km(new Error(u), {
                captureContext: {
                    tags: {
                        client_error_type: "plugins_provider_timeout"
                    },
                    extra: {
                        methodName: e,
                        elapsed: l
                    },
                    fingerprint: [
                        "plugins-provider-timeout",
                        e
                    ]
                }
            }), console.warn(u), {
                outcome: "timeout",
                value: n
            };
        }
        const c = performance.now() - i;
        return c > 1e3 && this._logService.debug(`[PluginsProviderService] ${e} took ${c.toFixed(1)}ms`), {
            outcome: "ok",
            value: a
        };
    }
    async _callWithTimeout(e, t, n) {
        const { value: i } = await this._callWithOutcome(e, t, n);
        return i;
    }
    async getPluginMcpServers() {
        return this._callWithTimeout("getPluginMcpServers", (e)=>e.getPluginMcpServers(), []);
    }
    async getPluginMcpServersWithOutcome() {
        const { outcome: e, value: t } = await this._callWithOutcome("getPluginMcpServers", (n)=>n.getPluginMcpServers(), []);
        return {
            outcome: e,
            servers: t
        };
    }
    async getPluginHooks() {
        return this._callWithTimeout("getPluginHooks", (e)=>e.getPluginHooks(), {
            hooks: [],
            errors: []
        });
    }
    async getPluginCommands() {
        return this._callWithTimeout("getPluginCommands", (e)=>e.getPluginCommands(), []);
    }
    async getLoadedPluginsSummary() {
        return this._callWithTimeout("getLoadedPluginsSummary", (e)=>e.getLoadedPluginsSummary(), []);
    }
    async getPluginLoadFailures() {
        return this._callWithTimeout("getPluginLoadFailures", (e)=>e.getPluginLoadFailures(), []);
    }
    async getPluginComponentFiles() {
        return this._callWithTimeout("getPluginComponentFiles", (e)=>e.getPluginComponentFiles(), []);
    }
    isPluginComponentDataStale() {
        return this._pluginComponentDataStaleByKey.has(this._getCurrentCacheKey());
    }
    async getPluginSetIncomplete() {
        return this._callWithTimeout("getPluginSetIncomplete", (e)=>e.getPluginSetIncomplete(), !0);
    }
    async getPrimitiveAuthorship(e) {
        return this._callWithTimeout("getPrimitiveAuthorship", (t)=>t.getPrimitiveAuthorship(e), []);
    }
    async getInstalledGitHubPlugins() {
        return this._callWithTimeout("getInstalledGitHubPlugins", (e)=>e.getInstalledGitHubPlugins(), []);
    }
    async addGitHubPlugin(e) {
        return (await lf(this._pluginsProvider)).addGitHubPlugin(e);
    }
    async removeGitHubPlugin(e) {
        return (await lf(this._pluginsProvider)).removeGitHubPlugin(e);
    }
    async removeLocalPlugin(e) {
        return (await lf(this._pluginsProvider)).removeLocalPlugin(e);
    }
    async saveLocalPluginVariables(e, t) {
        return (await lf(this._pluginsProvider)).saveLocalPluginVariables(e, t);
    }
    async discoverMarketplacePlugins(e, t, n) {
        return this._callWithTimeout("discoverMarketplacePlugins", (i)=>i.discoverMarketplacePlugins(e, t, n), []);
    }
    async parseGitHubRepoForPlugins({ gitUrl: e, gitRef: t, signal: n, source: i }) {
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
                const l = await this.parseGitHubRepoForPluginsLocally(e, t);
                return l.marketplaceName && this._persistLocallyParsedMarketplace({
                    gitRef: t,
                    parseResult: l
                }).catch((u)=>{
                    this._logService.warn("[PluginsProviderService] Failed to persist locally parsed marketplace", u);
                }), l;
            }
            return await (await this._cursorAuthenticationService.dashboardClient()).parseGitHubRepoForPlugins(new P$i({
                gitUrl: e,
                gitRef: t
            }), {
                headers: td(zn()),
                signal: n
            });
        } catch (c) {
            throw s = !0, this._metricsService.increment({
                stat: "marketplace.parseGitHubRepoForPlugins.error",
                tags: a
            }), c;
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
    async _persistLocallyParsedMarketplace({ gitRef: e, parseResult: t }) {
        const n = await this._cursorAuthenticationService.dashboardClient(), i = t.commitSha || t.defaultBranch || e || "", r = t.plugins.filter((s)=>!s.parseError).map((s)=>new dHt({
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
        await n.registerMarketplaceAndPlugins(new HSt({
            gitUrl: t.repositoryUrl,
            gitRef: i,
            marketplaceName: t.marketplaceName,
            plugins: r,
            commitSha: t.commitSha || void 0
        }), {
            headers: td(zn())
        }), this._logService.info(`[PluginsProviderService] Persisted locally parsed marketplace: ${t.marketplaceName} with ${r.length} plugin(s)`);
    }
    async importLocalMarketplace(e) {
        const t = await this.parseGitHubRepoForPluginsLocally(Ee.file(e).toString());
        return await this._persistLocallyParsedMarketplace({
            gitRef: void 0,
            parseResult: t
        }), await this._refreshMarketplacePluginsFromDashboardClient(this._getCurrentCacheKey(), {
            forceRefetch: !0
        }).catch((n)=>{
            this._logService.warn("[PluginsProviderService] Failed to refresh marketplace cache after local import", n);
        }), t;
    }
    async importClaudeMarketplaces() {
        const e = {
            discovered: 0,
            registered: 0,
            failed: 0
        }, t = await this._waitForProvider();
        if (!t) return this._logService.warn("[PluginsProviderService] importClaudeMarketplaces: plugins provider not available"), e;
        const n = await this._cursorAuthenticationService.dashboardClient();
        let i = [];
        try {
            i = (await n.listMarketplaces(new YPn({}), {
                headers: td(zn())
            })).marketplaces.filter((h)=>h.userId !== void 0).map((h)=>h.name);
        } catch (u) {
            this._logService.warn("[PluginsProviderService] importClaudeMarketplaces: listMarketplaces failed; will assume no existing marketplaces", u);
        }
        let r;
        try {
            r = await t.discoverClaudeMarketplacePayloads(i);
        } catch (u) {
            return this._logService.warn("[PluginsProviderService] importClaudeMarketplaces: discoverClaudeMarketplacePayloads failed", u), e;
        }
        if (r.length === 0) return e;
        const s = new aR(WJd), o = r.map((u)=>s.queue(async ()=>{
                const h = NJd(u.gitUrl), p = new HSt({
                    gitUrl: h,
                    gitRef: u.gitRef,
                    marketplaceName: u.marketplaceName,
                    commitSha: u.commitSha,
                    plugins: u.plugins.map((g)=>new dHt({
                            name: g.name,
                            displayName: g.displayName,
                            description: g.description,
                            gitPath: g.gitPath,
                            gitUrl: g.gitUrl ? NJd(g.gitUrl) : g.gitUrl,
                            gitRef: g.gitRef,
                            skills: g.skills,
                            subagents: g.subagents,
                            hooks: g.hooks,
                            rules: g.rules,
                            mcpServers: g.mcpServers,
                            commands: g.commands,
                            logoUrl: g.logoUrl,
                            variables: g.variables ? fd.fromJson(g.variables) : void 0
                        }))
                });
                await n.registerMarketplaceAndPlugins(p, {
                    headers: td(zn())
                });
            })), a = await Promise.allSettled(o);
        let c = 0, l = 0;
        return a.forEach((u, h)=>{
            if (u.status === "fulfilled") {
                c += 1;
                return;
            }
            l += 1, this._logService.warn(`[PluginsProviderService] Failed to register Claude marketplace ${r[h]?.marketplaceName}`, u.reason);
        }), c > 0 && this._refreshMarketplacePluginsFromDashboardClient(this._getCurrentCacheKey(), {
            forceRefetch: !0
        }).catch((u)=>{
            this._logService.warn("[PluginsProviderService] Failed to refresh marketplace cache after Claude import", u);
        }), this._logService.info(`[PluginsProviderService] Claude marketplace import complete: discovered=${r.length}, registered=${c}, failed=${l}`), {
            discovered: r.length,
            registered: c,
            failed: l
        };
    }
    async parseGitHubRepoForPluginsLocally(e, t) {
        const n = await this._waitForProvider();
        if (!n) throw new Error("Plugins provider not available");
        const i = await Hp(n.parseGitHubRepoForPluginsLocally(e, t), HJd);
        if (i === void 0) throw new Error("Timed out while cloning or parsing the plugin repository");
        return new L$i(i);
    }
    async installProjectPlugin(e) {
        return (await lf(this._pluginsProvider)).installProjectPlugin(e);
    }
    async removeProjectPlugin(e) {
        return (await lf(this._pluginsProvider)).removeProjectPlugin(e);
    }
    async getEffectiveInstalledPlugins(e) {
        const t = this._getCurrentCacheKey(), n = await this._callWithTimeout("getEffectiveInstalledPlugins", (r)=>r.getEffectiveInstalledPlugins(e), []), i = this._lastEffectiveInstalledPluginsByKey.get(t);
        return i !== void 0 && yh(i, n) ? i : (this._lastEffectiveInstalledPluginsByKey.set(t, n), n);
    }
    async getPluginsSnapshot(e) {
        try {
            return await this._callWithTimeout("getPluginsSnapshot", (t)=>t.getPluginsSnapshot(e), void 0);
        } catch  {
            return;
        }
    }
    registerPluginsProvider(e) {
        return this._pluginsProvider.set(e);
    }
    allowNextEmptyInstalledSnapshot() {
        const e = this._getCurrentCacheKey();
        this._allowEmptySnapshotByKey.add(e);
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
    _convertExtHostPluginsMemoized(e, t) {
        const n = this._installedPluginsConversionByKey.get(e);
        if (n !== void 0 && yh(n.raw, t)) return n.converted;
        const i = GMv(t);
        return this._installedPluginsConversionByKey.set(e, {
            raw: t,
            converted: i
        }), i;
    }
    applyPluginsSnapshot(e, t, n) {
        const i = t ?? this._getCurrentCacheKey(), r = n?.consistency, s = n?.origin === "push" && r === "replica" && this._installedPluginsConsistencyByKey.get(i) === "primary", o = this._allowEmptySnapshotByKey.delete(i), a = this._convertExtHostPluginsMemoized(i, e.effectiveInstalledPlugins);
        e.pluginSetIncomplete && this._pluginComponentDataStaleByKey.add(i);
        const c = e.pluginSetIncomplete ? void 0 : e.loadedPluginsSummary, l = this._cacheByContext.get(i);
        if (!o && a.length === 0 && e.loadedPluginsSummary.length > 0 && (l?.installedPlugins?.length ?? 0) > 0) {
            this.setCachedPlugins({
                importedExternalPlugins: e.importedExternalPlugins,
                installedCursorThirdPartyPlugins: e.installedCursorThirdPartyPlugins,
                installedGitHubPlugins: e.installedGitHubPlugins,
                loadedPlugins: c,
                loadFailures: e.loadFailures ?? []
            }, i);
            return;
        }
        const u = {
            importedExternalPlugins: e.importedExternalPlugins,
            installedCursorThirdPartyPlugins: e.installedCursorThirdPartyPlugins,
            installedGitHubPlugins: e.installedGitHubPlugins,
            loadedPlugins: c,
            loadFailures: e.loadFailures ?? []
        };
        s || (u.installedPlugins = a), this.setCachedPlugins(u, i), !s && r !== void 0 && this._installedPluginsConsistencyByKey.set(i, r);
    }
    async refreshPluginData(e) {
        const [t, n, i, r, s] = await Promise.all([
            this.getInstalledGitHubPlugins(),
            this.getLoadedPluginsSummary(),
            this.getPluginComponentFiles(),
            this.getPluginLoadFailures(),
            this.getPluginSetIncomplete()
        ]), o = {
            installedGitHubPlugins: t,
            loadFailures: r
        }, a = e ?? this._getCurrentCacheKey();
        s ? this._pluginComponentDataStaleByKey.add(a) : (this._pluginComponentDataStaleByKey.delete(a), o.loadedPlugins = n, o.pluginComponentFiles = i), this.setCachedPlugins(o, e);
    }
    async refreshInstalledPlugins(e) {
        return this._refreshInstalledPluginsPendingUseReplica = this._refreshInstalledPluginsPendingUseReplica && e.useReplica, this._refreshInstalledPluginsInFlight ? (this._refreshInstalledPluginsQueued = !0, this._refreshInstalledPluginsInFlight) : (this._refreshInstalledPluginsInFlight = (async ()=>{
            do {
                this._refreshInstalledPluginsQueued = !1;
                const t = this._refreshInstalledPluginsPendingUseReplica;
                this._refreshInstalledPluginsPendingUseReplica = !0, await this._refreshInstalledPluginsInternal(t);
            }while (this._refreshInstalledPluginsQueued)
        })().finally(()=>{
            this._refreshInstalledPluginsInFlight = void 0, this._refreshInstalledPluginsQueued = !1, this._refreshInstalledPluginsPendingUseReplica = !0;
        }), this._refreshInstalledPluginsInFlight);
    }
    async _refreshInstalledPluginsInternal(e) {
        const t = this._getCurrentCacheKey();
        try {
            const n = await this.getPluginsSnapshot(e);
            if (n) {
                this.applyPluginsSnapshot(n, t, {
                    consistency: e ? "replica" : "primary",
                    origin: "refresh"
                });
                return;
            }
            const i = this._allowEmptySnapshotByKey.delete(t), [r] = await Promise.all([
                this.getEffectiveInstalledPlugins(e),
                this.refreshPluginData(t)
            ]), s = this._cacheByContext.get(t);
            let o = this._convertExtHostPluginsMemoized(t, r);
            const a = s?.loadedPlugins?.length ?? 0, c = s?.installedPlugins?.length ?? 0;
            if (!i && o.length === 0 && a > 0) {
                const u = await this.getEffectiveInstalledPlugins(e);
                if (u.length > 0 && (o = this._convertExtHostPluginsMemoized(t, u)), o.length === 0 && c > 0) return;
            }
            const l = s?.installedPlugins;
            if (l !== void 0 && l.length > 0) {
                const u = new Set(l.map((p)=>p.plugin.id)), h = o.filter((p)=>!u.has(p.plugin.id));
                h.length > 0 && (this._logService.info(`[PluginsProviderService] Detected ${h.length} newly installed plugin(s): ${h.map((p)=>p.plugin.displayName).join(", ")}`), this._onDidNewPluginsDetected.fire(h));
            }
            this.setCachedPlugins({
                installedPlugins: o
            }, t), this._installedPluginsConsistencyByKey.set(t, e ? "replica" : "primary");
        } catch  {
            this._cacheByContext.get(t)?.installedPlugins === void 0 && this.setCachedPlugins({
                installedPlugins: []
            }, t);
        }
    }
    async refreshMarketplacePlugins(e) {
        const t = this._getCurrentCacheKey();
        OUe.delete(this._getSharedMarketplaceSnapshotKey());
        const n = ++this._catalogRefreshSeq;
        try {
            const i = ugo(this._experimentService), r = await KMv(e, i);
            if (n < this._lastPublishedCatalogSeq) return;
            this._lastPublishedCatalogSeq = n, this.setCachedPlugins({
                allMarketplacePlugins: r.allMarketplacePlugins,
                pluginsByMarketplaceId: r.pluginsByMarketplaceId,
                marketplaces: r.marketplaces
            }, t);
        } catch  {}
    }
    warmMarketplacePlugins() {
        this._maybeWarmMarketplacePluginsForCurrentContext();
    }
    async requestPluginsRefresh() {
        await (await lf(this._pluginsProvider)).requestRefresh();
    }
    async addExtensionPlugin(e) {
        await (await lf(this._pluginsProvider)).addExtensionPlugin(e);
    }
    async removeExtensionPlugin(e) {
        await (await lf(this._pluginsProvider)).removeExtensionPlugin(e);
    }
    getPersistedInstalledPluginIds() {
        const e = this._getCurrentCacheKey();
        return this._persistedInstalledIdsByKey.get(e);
    }
    upsertInstalledPluginInCache(e) {
        const t = this._getCurrentCacheKey(), i = this._cacheByContext.get(t)?.installedPlugins ?? [], r = i.findIndex((s)=>s.plugin.id === e.plugin.id);
        if (r !== -1) {
            const s = new Set([
                ...i[r].sources,
                ...e.sources
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
            }, t);
            return;
        }
        this.setCachedPlugins({
            installedPlugins: [
                ...i,
                e
            ]
        }, t);
    }
    removeInstalledPluginFromCache(e) {
        const t = this._getCurrentCacheKey(), i = this._cacheByContext.get(t)?.installedPlugins;
        i && this.setCachedPlugins({
            installedPlugins: i.filter((r)=>r.plugin.id !== e)
        }, t);
    }
    removeInstalledPluginSourceFromCache(e, t) {
        const n = this._getCurrentCacheKey(), r = this._cacheByContext.get(n)?.installedPlugins;
        if (!r) return;
        const s = r.flatMap((o)=>{
            if (o.plugin.id !== e) return [
                o
            ];
            const a = o.sources.filter((c)=>c !== t);
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
}, Qqi = ie([
    C(0, na),
    C(1, Jn),
    C(2, Yi),
    C(3, Kr),
    C(4, vp),
    C(5, Wn),
    C(6, yn)
], Qqi), mn(EN, Qqi, 1);

}
