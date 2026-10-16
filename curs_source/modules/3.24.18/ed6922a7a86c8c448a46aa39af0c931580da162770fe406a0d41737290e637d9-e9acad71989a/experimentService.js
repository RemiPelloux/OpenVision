import { Rro } from "./A3u.js";
import { Se, bt, ve, we } from "./HVr.js";
import { eno } from "./StatsigClient.js";
import { Jto, vvd } from "./StatsigEvaluationsDataAdapter.js";
import { RJe, nLn } from "./StatsigOptionsCommon.js";
import { C, ie } from "./actions_2.js";
import { Mro } from "./aiServerConfigStorage.js";
import { kX, yde } from "./clientNumericMetricsService.js";
import { So, ugi, xKr } from "./constants_8.js";
import { dn, xn } from "./contextkey.js";
import { of, oy } from "./contextkeys.js";
import { Vr, Yi } from "./environmentService.js";
import { JMe, Kj, i_e, ino, t1e, xvd } from "./experimentConfig.gen.js";
import { Pn } from "./extensions.js";
import { hSv } from "./index_198.js";
import { Ze } from "./instantiation.js";
import { Cp, vp } from "./metricsService.js";
import { Ka, jo } from "./productService.js";
import { mn, pd } from "./qIc.js";
import { AHi, rno } from "./reactiveStorageSinglePassStringifyGate.js";
import { av, sy } from "./solidEventsWrapper.js";
import { Dvd, Mvd } from "./startupConnectTransportSetting.js";
import { Vn, yn } from "./storage_2.js";
import { Xh, im } from "./structuredLog.js";
import { x } from "./tslib.es6.js";
import { Avd, Rvd, fSv } from "./updateStorageKeys.js";
import { lo, on } from "./window.js";
var Kr, q3;
export { Kr, q3 };
var __wakaru_qs_initialized = false;
export function qs() {
if (__wakaru_qs_initialized) return;
__wakaru_qs_initialized = true;
"use strict";
x(), Ze(), Pn(), Se(), hSv(), nLn(), vvd(), Vn(), Vr(), Ka(), bt(), i_e(), Cp(), dn(), im(), of(), sy(), rno(), yde(), lo(), fSv(), So(), Mvd(), Mro(), Kr = pd("experimentService"), q3 = class extends we {
    constructor(e, t, n, i, r, s, o, a){
        if (super(), this.storageService = e, this.environmentService = t, this.productService = n, this.metricsService = i, this.reactiveStorageSinglePassStringifyGate = r, this.contextKeyService = s, this.clientNumericMetricsService = o, this.structuredLogService = a, this._statsig = null, this._initialized = !1, this._featureFlagOverrides = new Map, this._experimentOverrides = new Map, this._dynamicConfigOverrides = new Map, this._layerOverrides = new Map, this._systemGateValues = new Map, this._featureGateProperties = new Map, this._experimentParamProperties = new Map, this._dynamicConfigParamProperties = new Map, this._layerParamProperties = new Map, this._isCalculatingHash = !1, this._needsRecalculation = !1, this._onDidChangeGates = this._register(new ve), this.onDidChangeGates = this._onDidChangeGates.event, this._constructionTime = performance.now(), this._dataAdapter = new Jto, this._isTestMode = !!this.environmentService.enableSmokeTestDriver, this._isTestMode) {
            console.log("[ExperimentService] Test mode detected (enableSmokeTestDriver) - using default feature flags with overrides"), this._initialized = !0, this._loadTestFeatureFlags(), this._loadTestExperiments(), this._loadTestDynamicConfigs(), this._loadTestLayers(), this._syncGateToReactiveStorageStringifyGate();
            return;
        }
        this._canUseOverrides() && (this._loadOverridesFromStorage(), this._loadTestFeatureFlags(), this._loadTestExperiments(), this._loadTestDynamicConfigs(), this._loadTestLayers()), this._register(this.contextKeyService.onDidChangeContext((h)=>{
            h.affectsSome(new Set([
                oy.key
            ])) && (this._canUseOverrides() && this._featureFlagOverrides.size === 0 && this._loadOverridesFromStorage(), this._onDidChangeGates.fire({}));
        }));
        const c = performance.now(), l = this._initFromCachedBootstrap(), u = performance.now();
        this.metricsService.distribution({
            stat: "experimentService.blocking_time",
            value: u - c,
            tags: {
                source: l ? "cache" : "network"
            }
        }), this.metricsService.distribution({
            stat: "experimentService.blocking_time_from_construction",
            value: u - this._constructionTime,
            tags: {
                source: l ? "cache" : "network"
            }
        }), this._register(this.onDidChangeGates((h)=>{
            for (const [p, g] of this._featureGateProperties)if (!h.changedGates || h.changedGates.has(p)) {
                const f = this.checkFeatureGate(p, {
                    disableExposureLog: !0
                });
                f !== g.value && g.change(f);
            }
            for (const [p, g] of this._experimentParamProperties){
                const [f, v] = p.split("::::");
                if (!h.changedExperiments || h.changedExperiments.has(f)) {
                    const b = this.getExperimentParam(f, v, {
                        disableExposureLog: !0
                    });
                    b !== g.value && g.change(b);
                }
            }
            for (const [p, g] of this._dynamicConfigParamProperties){
                const [f, v] = p.split("::::");
                if (!h.changedConfigs || h.changedConfigs.has(f)) {
                    const b = this.getDynamicConfigParam(f, v, {
                        disableExposureLog: !0
                    });
                    b !== g.value && g.change(b);
                }
            }
            for (const [p, g] of this._layerParamProperties){
                const [f, v] = p.split("::::");
                if (!h.changedLayers || h.changedLayers.has(f)) {
                    const b = this.getLayerParam(f, v, {
                        disableExposureLog: !0
                    });
                    b !== g.value && g.change(b);
                }
            }
            (!h.changedGates || h.changedGates.size > 0) && this._recalculateGatesHash();
        })), this.clientNumericMetricsService.setExperimentService(this), this._syncGateToReactiveStorageStringifyGate(), this._syncGateToApplicationStorage("windows_linux_update_auth_headers", Avd), this._syncGateToApplicationStorage("updater_recovery_windows", Rvd), this._syncGateToApplicationStorage("glass_shared_application_storage", xKr, !0), this._syncGateToApplicationStorage("model_catalog_own_key", ugi, !0), this._syncGateToApplicationStorage("glass_startup_connect_transport", Dvd);
    }
    _syncGateToReactiveStorageStringifyGate() {
        const e = ()=>{
            this.reactiveStorageSinglePassStringifyGate.set(this.checkFeatureGate("reactivestorage_single_pass_stringify", {
                disableExposureLog: !1
            }));
        };
        e(), this._register(this.onDidChangeGates((t)=>{
            (!t.changedGates || t.changedGates.has("reactivestorage_single_pass_stringify")) && e();
        }));
    }
    _syncGateToApplicationStorage(e, t, n = !1) {
        const i = ()=>{
            const a = this.checkFeatureGate(e, {
                disableExposureLog: !0
            });
            this.storageService.getBoolean(t, -1) !== a && this.storageService.store(t, a, -1, 1);
        }, r = ()=>{
            this._register(this.onDidChangeGates((a)=>{
                (!a.changedGates || a.changedGates.has(e)) && i();
            }));
        };
        (this.storageService.initialize?.() ?? Promise.resolve()).then(()=>{
            n && this.storageService.getBoolean(t, -1) !== void 0 && this.environmentService.isGlass && this.environmentService.glassWorkspaceRole !== "agentWorkspace" && this.checkFeatureGate(e, {
                disableExposureLog: !1
            }), i(), r();
        }).catch(()=>{
            r();
        });
    }
    _initFromCachedBootstrap() {
        const e = performance.now(), t = this.storageService.get(q3.STATSIG_BOOTSTRAP_STORAGE_KEY, -1);
        if (!t || t.length === 0) return this.metricsService.increment({
            stat: "experimentService.bootstrap.source",
            tags: {
                source: "network_cache_miss"
            }
        }), !1;
        try {
            const n = JSON.parse(t), i = n && n.user ? n.user : {};
            this._lastAppliedStatsigUser = JSON.stringify(i), this._hydrateStatsigClient(t, i, "cache"), this._lastAppliedStatsigConfig = t, this.metricsService.increment({
                stat: "experimentService.bootstrap.source",
                tags: {
                    source: "cache"
                }
            });
            const r = performance.now();
            return this.metricsService.distribution({
                stat: "experimentService.cache_init_time",
                value: r - e
            }), !0;
        } catch (n) {
            return console.error("[ExperimentService] Error parsing cached bootstrap", n), this.metricsService.increment({
                stat: "experimentService.bootstrap.source",
                tags: {
                    source: "network_cache_parse_error"
                }
            }), this.metricsService.increment({
                stat: "experimentService.cache_parse_error"
            }), !1;
        }
    }
    _getUrlString(e) {
        return typeof e == "string" ? e : e instanceof Request ? e.url : String(e);
    }
    _initializeStatsigClient(e, t) {
        const n = performance.now();
        if (this._statsig) this._statsig.updateUserSync(e, {
            disableBackgroundCacheRefresh: !0
        });
        else {
            const r = this.productService.statsigLogEventProxyUrl, s = typeof r == "string" && r.length > 0;
            this._statsig = new eno(this.productService.statsigClientKey ?? "", e, {
                dataAdapter: t,
                loggingEnabled: s ? "always" : "disabled",
                disableStorage: !0,
                logEventCompressionMode: RJe.Forced,
                networkConfig: s ? {
                    api: r,
                    networkOverrideFunc: (o, a)=>this._getUrlString(o).includes("/rgstr") ? fetch(o, a) : Promise.resolve(new Response(null, {
                            status: 204
                        }))
                } : {
                    preventAllNetworkTraffic: !0
                }
            }), this._statsig.initializeSync({
                disableBackgroundCacheRefresh: !0
            });
        }
        const i = performance.now();
        this.metricsService.distribution({
            stat: "experimentService.statsig_client_init_time",
            value: i - n
        });
    }
    checkFeatureGate(e, t) {
        if (!t.doNotUseIgnoreLocalOverridesExceptForDeveloperOverrideUi) {
            const i = this._featureFlagOverrides.get(e);
            if (this._canUseOverrides() && i) {
                if (this._isOverrideActive(i)) return this.metricsService.increment({
                    stat: "experimentService.override_gate_check",
                    tags: {
                        gate: e
                    }
                }), i.value;
                console.log(`[ExperimentService] Feature flag override "${e}" expired during runtime, clearing`), this._featureFlagOverrides.delete(e), this._persistOverridesToStorage(), this._onDidChangeGates.fire({
                    changedGates: new Set([
                        e
                    ])
                });
            }
        }
        const n = this._systemGateValues.get(e);
        return n !== void 0 ? n : this._checkGateWithoutOverride(e, t);
    }
    _checkGateWithoutOverride(e, t) {
        if (this._statsig) try {
            return this._statsig.checkGate(e, t);
        } catch  {
            return this.metricsService.increment({
                stat: "experimentService.gate_check_error"
            }), JMe[e]?.default ?? !1;
        }
        else return this.metricsService.increment({
            stat: "experimentService.uninitialized_gate_check"
        }), JMe[e]?.default ?? !1;
    }
    _isOverrideActive(e) {
        return e.expiresAt === null || e.expiresAt > Date.now();
    }
    getFeatureGateProperty(e) {
        let t = this._featureGateProperties.get(e);
        return t || (t = this._register(new av(this.checkFeatureGate(e, {
            disableExposureLog: !0
        }))), this._featureGateProperties.set(e, t)), t;
    }
    getExperimentParamProperty(e, t) {
        const n = `${e}::::${String(t)}`;
        let i = this._experimentParamProperties.get(n);
        return i || (i = this._register(new av(this.getExperimentParam(e, t, {
            disableExposureLog: !0
        }))), this._experimentParamProperties.set(n, i)), i;
    }
    getDynamicConfigParamProperty(e, t) {
        const n = `${e}::::${String(t)}`;
        let i = this._dynamicConfigParamProperties.get(n);
        return i || (i = this._register(new av(this.getDynamicConfigParam(e, t, {
            disableExposureLog: !0
        }))), this._dynamicConfigParamProperties.set(n, i)), i;
    }
    getLayerParamProperty(e, t) {
        const n = `${e}::::${String(t)}`;
        let i = this._layerParamProperties.get(n);
        return i || (i = this._register(new av(this.getLayerParam(e, t, {
            disableExposureLog: !0
        }))), this._layerParamProperties.set(n, i)), i;
    }
    getExperiment(e, t) {
        const n = performance.now();
        let i, r;
        if (!t.doNotUseIgnoreLocalOverridesExceptForDeveloperOverrideUi && this._canUseOverrides() && this._experimentOverrides.has(e)) i = this._experimentOverrides.get(e), r = "override", this.metricsService.increment({
            stat: "experimentService.override_experiment_check",
            tags: {
                experiment: e
            }
        });
        else if (!this._statsig) i = t1e[e]?.fallbackValues ?? {}, r = "default", this.metricsService.increment({
            stat: "experimentService.uninitialized_experiment_check"
        });
        else try {
            i = this._statsig.getExperiment(e, t).value, r = "statsig";
        } catch  {
            i = t1e[e]?.fallbackValues ?? {}, r = "error", this.metricsService.increment({
                stat: "experimentService.experiment_check_error"
            });
        }
        const s = performance.now();
        return this.metricsService.distribution({
            stat: "experimentService.experiment_check_time",
            value: s - n,
            tags: {
                source: r
            }
        }), i;
    }
    getExperimentParam(e, t, n) {
        return this.getExperiment(e, n)[t];
    }
    getExperimentGroup(e, t) {
        if (!this._statsig) return null;
        try {
            return this._statsig.getExperiment(e, t).groupName ?? null;
        } catch (n) {
            return console.error(`[ExperimentService] Error getting experiment group for ${e}:`, n), null;
        }
    }
    getLayerParam(e, t, n) {
        const i = ino[e], r = i.fallbackValues[t];
        if (this._canUseOverrides()) {
            const s = this._layerOverrides.get(e);
            if (s !== void 0 && Object.prototype.hasOwnProperty.call(s, t)) try {
                return i.parseValue[t](s[t]);
            } catch (o) {
                return this.structuredLogService.error("experiment_refresh_service", "ExperimentService: failed to parse layer override, using fallback", o instanceof Error ? o : new Error(String(o)), {
                    layer: e,
                    param: String(t)
                }), r;
            }
        }
        if (!this._statsig) return this.metricsService.increment({
            stat: "experimentService.uninitialized_layer_check"
        }), r;
        try {
            const s = this._statsig.getLayer(e, n).get(String(t), r);
            return i.parseValue[t](s);
        } catch  {
            return this.metricsService.increment({
                stat: "experimentService.layer_check_error"
            }), r;
        }
    }
    _mergeDynamicConfigWithFallback(e, t) {
        return {
            ...Kj[e]?.fallbackValues ?? {},
            ...t ?? {}
        };
    }
    getDynamicConfig(e, t) {
        const n = performance.now();
        let i, r;
        if (!Kj[e]) throw new Error(`Dynamic config ${e} not found`);
        if (this._canUseOverrides() && this._dynamicConfigOverrides.has(e)) i = this._mergeDynamicConfigWithFallback(e, this._dynamicConfigOverrides.get(e)), r = "override", this.metricsService.increment({
            stat: "experimentService.override_config_check",
            tags: {
                config: e
            }
        });
        else if (!this._statsig) i = Kj[e]?.fallbackValues, r = "default", this.metricsService.increment({
            stat: "experimentService.uninitialized_config_check"
        });
        else try {
            const o = this._statsig.getDynamicConfig(e, t);
            i = this._mergeDynamicConfigWithFallback(e, o.value), r = "statsig";
        } catch  {
            i = Kj[e]?.fallbackValues, r = "error", this.metricsService.increment({
                stat: "experimentService.config_check_error"
            });
        }
        const s = performance.now();
        return this.metricsService.distribution({
            stat: "experimentService.config_check_time",
            value: s - n,
            tags: {
                source: r
            }
        }), i;
    }
    getDynamicConfigParam(e, t, n) {
        return this.getDynamicConfig(e, n)[t];
    }
    setExperimentOverride(e, t) {
        if (!this._canUseOverrides()) {
            console.warn("[ExperimentService] Cannot set experiment overrides in production builds for non-dev users");
            return;
        }
        const n = this._experimentOverrides.has(e), i = n ? this._experimentOverrides.get(e) : void 0;
        this._experimentOverrides.set(e, t), this._persistOverridesToStorage(), (!n || JSON.stringify(i) !== JSON.stringify(t)) && this._onDidChangeGates.fire({
            changedExperiments: new Set([
                e
            ])
        }), this.metricsService.increment({
            stat: "experimentService.experiment_override_set",
            tags: {
                experiment: e
            }
        });
    }
    clearExperimentOverride(e) {
        if (!this._canUseOverrides()) {
            console.warn("[ExperimentService] Cannot clear experiment overrides in production builds for non-dev users");
            return;
        }
        this._experimentOverrides.has(e) && (this._experimentOverrides.delete(e), this._persistOverridesToStorage(), this._onDidChangeGates.fire({
            changedExperiments: new Set([
                e
            ])
        }), this.metricsService.increment({
            stat: "experimentService.experiment_override_cleared",
            tags: {
                experiment: e
            }
        }));
    }
    getExperimentOverrides() {
        return new Map(this._experimentOverrides);
    }
    hasExperimentOverride(e) {
        return this._experimentOverrides.has(e);
    }
    setDynamicConfigOverride(e, t) {
        if (!this._canUseOverrides()) {
            console.warn("[ExperimentService] Cannot set dynamic config overrides in production builds for non-dev users");
            return;
        }
        const n = this._dynamicConfigOverrides.has(e), i = n ? this._dynamicConfigOverrides.get(e) : void 0;
        this._dynamicConfigOverrides.set(e, t), this._persistOverridesToStorage(), (!n || JSON.stringify(i) !== JSON.stringify(t)) && this._onDidChangeGates.fire({
            changedConfigs: new Set([
                e
            ])
        }), this.metricsService.increment({
            stat: "experimentService.config_override_set",
            tags: {
                config: e
            }
        });
    }
    clearDynamicConfigOverride(e) {
        if (!this._canUseOverrides()) {
            console.warn("[ExperimentService] Cannot clear dynamic config overrides in production builds for non-dev users");
            return;
        }
        this._dynamicConfigOverrides.has(e) && (this._dynamicConfigOverrides.delete(e), this._persistOverridesToStorage(), this._onDidChangeGates.fire({
            changedConfigs: new Set([
                e
            ])
        }), this.metricsService.increment({
            stat: "experimentService.config_override_cleared",
            tags: {
                config: e
            }
        }));
    }
    getDynamicConfigOverrides() {
        return new Map(this._dynamicConfigOverrides);
    }
    hasDynamicConfigOverride(e) {
        return this._dynamicConfigOverrides.has(e);
    }
    isInitialized() {
        return this._initialized;
    }
    hasAuthenticatedStatsigUser() {
        return this._hydratedUserId !== void 0 && this._hydratedUserId !== "";
    }
    canEvaluateExperimentParamForIdentity(e, t, n) {
        if (e.length === 0) return !1;
        if (this._canUseOverrides()) {
            const i = this._experimentOverrides.get(t);
            if (i !== void 0) return Object.prototype.hasOwnProperty.call(i, n);
        }
        if (this._hydratedUserId !== e || !this._statsig) return this.metricsService.increment({
            stat: "experimentService.experiment_param_not_authoritative",
            tags: {
                experiment: t
            }
        }), this.structuredLogService.warn("experiment_refresh_service", "ExperimentService: experiment param not authoritative for current identity, skipping", {
            experiment: t,
            reason: this._statsig ? this._hydratedUserId === void 0 ? "anonymous_cache" : "identity_mismatch" : "statsig_not_hydrated"
        }), !1;
        try {
            const i = this._statsig.getExperiment(t, {
                disableExposureLog: !0
            });
            return Object.prototype.hasOwnProperty.call(i.value, n);
        } catch (i) {
            return this.structuredLogService.error("experiment_refresh_service", "ExperimentService: error evaluating experiment param authoritativeness", i instanceof Error ? i : new Error(String(i)), {
                experiment: t
            }), !1;
        }
    }
    hasHydratedLayerParamForIdentity(e, t, n) {
        if (e.length === 0 || this._hydratedUserId !== e || !this._statsig) return !1;
        try {
            const i = this._statsig.getLayer(t, {
                disableExposureLog: !0
            });
            return Object.prototype.hasOwnProperty.call(i.__value, n);
        } catch  {
            return !1;
        }
    }
    async flushExposureLog() {
        try {
            await this._statsig?.flush();
        } catch  {}
    }
    async _persistBootstrap(e, t) {
        if (this.storageService.get(q3.STATSIG_BOOTSTRAP_STORAGE_KEY, -1) !== e) try {
            this.storageService.store(q3.STATSIG_BOOTSTRAP_STORAGE_KEY, e, -1, 1), await this.storageService.flushStorage(-1), this.metricsService.increment({
                stat: "experimentService.persist_success",
                tags: {
                    trigger: t
                }
            });
        } catch (n) {
            console.error("[ExperimentService] Error persisting bootstrap", n), this.metricsService.increment({
                stat: "experimentService.persist_failure",
                tags: {
                    trigger: t
                }
            });
        }
    }
    _hydrateStatsigClient(e, t, n) {
        t.userAgent = on.navigator.userAgent.trim(), this._initializeStatsigClient(t, this._dataAdapter), this._dataAdapter.setData(e), this._statsig?.updateUserSync(t, {
            disableBackgroundCacheRefresh: !0
        }), this._hydratedUserId = typeof t.userID == "string" ? t.userID : void 0;
        const i = this._initialized;
        if (this._initialized = !0, !i) {
            const r = performance.now();
            this.metricsService.distribution({
                stat: "experimentService.time_to_initialized_ms",
                value: r - this._constructionTime,
                tags: {
                    source: n
                }
            });
        }
    }
    refreshStatsigConfig(e, t, n) {
        const i = this._lastAppliedStatsigConfig !== void 0 && e === this._lastAppliedStatsigConfig ? this._lastAppliedStatsigConfig : e, r = i !== this._lastAppliedStatsigConfig, s = JSON.stringify(t), o = s !== this._lastAppliedStatsigUser;
        if (this._persistBootstrap(i, n).catch(()=>{}), n === "poll" && !r && !o) {
            this.metricsService.increment({
                stat: "experimentService.refresh_skipped_unchanged"
            });
            return;
        }
        this._hydrateStatsigClient(i, t, "network"), this._lastAppliedStatsigConfig = i, this._lastAppliedStatsigUser = s, this._onDidChangeGates.fire({});
    }
    setFeatureFlagOverride(e, t) {
        if (!this._canUseOverrides()) {
            console.warn("[ExperimentService] Cannot set feature flag overrides in production builds for non-dev users");
            return;
        }
        const n = this.hasFeatureFlagOverride(e), r = (n ? this._featureFlagOverrides.get(e) : void 0)?.value, s = Date.now() + q3.FEATURE_FLAG_OVERRIDE_TTL_MS;
        this._featureFlagOverrides.set(e, {
            value: t,
            expiresAt: s
        }), this._persistOverridesToStorage(), (!n || r !== t) && this._onDidChangeGates.fire({
            changedGates: new Set([
                e
            ])
        }), this.metricsService.increment({
            stat: "experimentService.override_set",
            tags: {
                gate: e,
                value: String(t)
            }
        });
    }
    clearFeatureFlagOverride(e) {
        if (!this._canUseOverrides()) {
            console.warn("[ExperimentService] Cannot clear feature flag overrides in production builds for non-dev users");
            return;
        }
        this._featureFlagOverrides.has(e) && (this._featureFlagOverrides.delete(e), this._persistOverridesToStorage(), this._onDidChangeGates.fire({
            changedGates: new Set([
                e
            ])
        }), this.metricsService.increment({
            stat: "experimentService.override_cleared",
            tags: {
                gate: e
            }
        }));
    }
    clearAllFeatureFlagOverrides() {
        if (!this._canUseOverrides()) {
            console.warn("[ExperimentService] Cannot clear feature flag overrides in production builds for non-dev users");
            return;
        }
        const e = new Set(this._featureFlagOverrides.keys());
        e.size > 0 && (this._featureFlagOverrides.clear(), this.storageService.remove(q3.FEATURE_FLAG_OVERRIDES_STORAGE_KEY, -1), this._onDidChangeGates.fire({
            changedGates: e
        }), this.metricsService.increment({
            stat: "experimentService.all_overrides_cleared",
            tags: {
                count: String(e.size)
            }
        }));
    }
    clearAllOverrides() {
        if (!this._canUseOverrides()) return this.structuredLogService.warn("experiment_refresh_service", "ExperimentService: cannot clear overrides in production builds for non-dev users"), {
            featureFlags: 0,
            experiments: 0,
            dynamicConfigs: 0
        };
        const e = new Set(this._featureFlagOverrides.keys()), t = new Set(this._experimentOverrides.keys()), n = new Set(this._dynamicConfigOverrides.keys()), i = {
            featureFlags: this.getFeatureFlagOverrides().size,
            experiments: t.size,
            dynamicConfigs: n.size
        };
        if (e.size === 0 && t.size === 0 && n.size === 0) return i;
        this._featureFlagOverrides.clear(), this._experimentOverrides.clear(), this._dynamicConfigOverrides.clear();
        for (const r of [
            q3.FEATURE_FLAG_OVERRIDES_STORAGE_KEY,
            q3.EXPERIMENT_OVERRIDES_STORAGE_KEY,
            q3.DYNAMIC_CONFIG_OVERRIDES_STORAGE_KEY
        ])this.storageService.remove(r, -1);
        return this._onDidChangeGates.fire({
            changedGates: e,
            changedExperiments: t,
            changedConfigs: n
        }), i;
    }
    getFeatureFlagOverrides() {
        const e = new Map;
        for (const [t, n] of this._featureFlagOverrides)this._isOverrideActive(n) && e.set(t, n.value);
        return e;
    }
    hasFeatureFlagOverride(e) {
        const t = this._featureFlagOverrides.get(e);
        return t !== void 0 && this._isOverrideActive(t);
    }
    setSystemGateValue(e, t) {
        this._systemGateValues.get(e) !== t && (this._systemGateValues.set(e, t), this._onDidChangeGates.fire({
            changedGates: new Set([
                e
            ])
        }));
    }
    clearSystemGateValue(e) {
        const t = this._systemGateValues.get(e);
        if (t === void 0) return;
        this._systemGateValues.delete(e);
        const n = this._checkGateWithoutOverride(e, {
            disableExposureLog: !0
        });
        t !== n && this._onDidChangeGates.fire({
            changedGates: new Set([
                e
            ])
        });
    }
    getOverridesForHeader() {
        if (!this._canUseOverrides()) return;
        const e = 32768, t = {}, n = this.getFeatureFlagOverrides();
        if (n.size > 0 && (t.featureFlags = Object.fromEntries(n)), this._experimentOverrides.size > 0) {
            const s = Object.create(null);
            for (const [o, a] of this._experimentOverrides)typeof a == "object" && a !== null && !Array.isArray(a) && (s[o] = a);
            Object.keys(s).length > 0 && (t.experiments = s);
        }
        if (this._dynamicConfigOverrides.size > 0) {
            const s = Object.create(null);
            for (const [o, a] of this._dynamicConfigOverrides)typeof a == "object" && a !== null && !Array.isArray(a) && (s[o] = a);
            Object.keys(s).length > 0 && (t.dynamicConfigs = s);
        }
        if (!(t.featureFlags !== void 0 || t.experiments !== void 0 || t.dynamicConfigs !== void 0)) return;
        const r = JSON.stringify(t);
        if (!(r.length > e)) return r;
    }
    _loadTestFeatureFlags() {
        const e = this.environmentService.testFeatureFlags;
        if (!e) {
            console.log("[ExperimentService] No test feature flags provided - using all defaults");
            return;
        }
        let t;
        try {
            const n = atob(e);
            t = JSON.parse(n);
        } catch (n) {
            console.error("[ExperimentService] Failed to parse test feature flags JSON (expected base64-encoded JSON):", n);
            return;
        }
        for (const [n, i] of Object.entries(t))typeof i == "boolean" ? (this._featureFlagOverrides.set(n, {
            value: i,
            expiresAt: null
        }), console.log(`[ExperimentService] Test flag: ${n} = ${i}`)) : console.warn(`[ExperimentService] Ignoring non-boolean test flag value for ${n}: ${i}`);
    }
    _loadTestDynamicConfigs() {
        const e = this.environmentService.testDynamicConfigs;
        if (e) try {
            const t = atob(e), n = JSON.parse(t);
            for (const [i, r] of Object.entries(n)){
                if (!(i in Kj)) {
                    console.warn(`[ExperimentService] Ignoring unknown dynamic config override "${i}"`);
                    continue;
                }
                const s = i, a = xvd[s].safeParse(r);
                if (!a.success) {
                    console.error(`[ExperimentService] Failed to parse dynamic config override for "${i}"`, a.error);
                    continue;
                }
                this._dynamicConfigOverrides.set(s, a.data);
            }
        } catch (t) {
            console.error("[ExperimentService] Failed to parse test dynamic configs JSON:", t), console.error("[ExperimentService] JSON was:", e);
        }
    }
    _loadTestExperiments() {
        const e = this.environmentService.testExperiments;
        if (e) try {
            const t = atob(e), n = JSON.parse(t);
            for (const [i, r] of Object.entries(n)){
                if (!(i in t1e)) {
                    console.warn(`[ExperimentService] Ignoring unknown experiment override "${i}"`);
                    continue;
                }
                if (typeof r != "object" || r === null || Array.isArray(r)) {
                    console.warn(`[ExperimentService] Ignoring non-object experiment override "${i}"`);
                    continue;
                }
                this._experimentOverrides.set(i, r);
            }
        } catch (t) {
            console.error("[ExperimentService] Failed to parse test experiments JSON:", t), console.error("[ExperimentService] JSON was:", e);
        }
    }
    _loadTestLayers() {
        const e = this.environmentService.testLayers;
        if (e) try {
            const t = atob(e), n = JSON.parse(t);
            for (const [i, r] of Object.entries(n)){
                if (!(i in ino)) {
                    this.structuredLogService.warn("experiment_refresh_service", "ExperimentService: ignoring unknown test layer override", {
                        layer: i
                    });
                    continue;
                }
                if (typeof r != "object" || r === null || Array.isArray(r)) {
                    this.structuredLogService.warn("experiment_refresh_service", "ExperimentService: ignoring non-object test layer override", {
                        layer: i
                    });
                    continue;
                }
                this._layerOverrides.set(i, r), this.structuredLogService.info("experiment_refresh_service", "ExperimentService: applied test layer override", {
                    layer: i,
                    params: JSON.stringify(r)
                });
            }
        } catch (t) {
            this.structuredLogService.error("experiment_refresh_service", "ExperimentService: failed to parse test layers JSON", t instanceof Error ? t : new Error(String(t)));
        }
    }
    _loadOverridesFromStorage() {
        try {
            const e = this.storageService.get(q3.FEATURE_FLAG_OVERRIDES_STORAGE_KEY, -1);
            if (e) {
                const t = JSON.parse(e);
                let n = 0;
                for (const [i, r] of Object.entries(t))if (r !== null && typeof r == "object" && "value" in r && "expiresAt" in r) {
                    const s = r;
                    this._isOverrideActive(s) ? this._featureFlagOverrides.set(i, s) : (n++, console.log(`[ExperimentService] Feature flag override "${i}" expired, clearing`));
                } else typeof r == "boolean" ? (n++, console.log(`[ExperimentService] Feature flag override "${i}" has no TTL, discarding`)) : (n++, console.log(`[ExperimentService] Feature flag override "${i}" has invalid format, clearing`));
                n > 0 && this._persistFeatureFlagOverridesToStorage(), this.metricsService.increment({
                    stat: "experimentService.flag_overrides_loaded",
                    tags: {
                        count: String(this._featureFlagOverrides.size)
                    }
                });
            }
        } catch (e) {
            console.error("Failed to load feature flag overrides from storage:", e), this.metricsService.increment({
                stat: "experimentService.flag_overrides_load_error"
            });
        }
        try {
            const e = this.storageService.get(q3.EXPERIMENT_OVERRIDES_STORAGE_KEY, -1);
            if (e) {
                const t = JSON.parse(e);
                this._experimentOverrides = new Map(Object.entries(t)), this.metricsService.increment({
                    stat: "experimentService.experiment_overrides_loaded",
                    tags: {
                        count: String(this._experimentOverrides.size)
                    }
                });
            }
        } catch (e) {
            console.error("Failed to load experiment overrides from storage:", e), this.metricsService.increment({
                stat: "experimentService.experiment_overrides_load_error"
            });
        }
        try {
            const e = this.storageService.get(q3.DYNAMIC_CONFIG_OVERRIDES_STORAGE_KEY, -1);
            if (e) {
                const t = JSON.parse(e);
                this._dynamicConfigOverrides = new Map(Object.entries(t)), this.metricsService.increment({
                    stat: "experimentService.config_overrides_loaded",
                    tags: {
                        count: String(this._dynamicConfigOverrides.size)
                    }
                });
            }
        } catch (e) {
            console.error("Failed to load dynamic config overrides from storage:", e), this.metricsService.increment({
                stat: "experimentService.config_overrides_load_error"
            });
        }
    }
    _canUseOverrides() {
        return this._isTestMode || !(this.environmentService.isBuilt && !this.environmentService.isExtensionDevelopment) ? !0 : !!this.contextKeyService.getContextKeyValue(oy.key) || this._isDevUserInCachedServerConfig();
    }
    _isDevUserInCachedServerConfig() {
        if (this._cachedDiskDevUserOverrideEligibility !== void 0) return this._cachedDiskDevUserOverrideEligibility;
        try {
            this._cachedDiskDevUserOverrideEligibility = Rro(this.storageService)?.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers ?? !1;
        } catch  {
            this.metricsService.increment({
                stat: "experimentService.cached_server_config_override_eligibility_read_error"
            }), this._cachedDiskDevUserOverrideEligibility = !1;
        }
        return this._cachedDiskDevUserOverrideEligibility ?? !1;
    }
    _persistFeatureFlagOverridesToStorage() {
        if (!this._isTestMode) try {
            const e = {};
            for (const [t, n] of this._featureFlagOverrides)e[t] = n;
            this.storageService.store(q3.FEATURE_FLAG_OVERRIDES_STORAGE_KEY, JSON.stringify(e), -1, 0), this.metricsService.increment({
                stat: "experimentService.flag_overrides_persisted",
                tags: {
                    count: String(this._featureFlagOverrides.size)
                }
            });
        } catch (e) {
            console.error("Failed to persist feature flag overrides to storage:", e), this.metricsService.increment({
                stat: "experimentService.flag_overrides_persist_error"
            });
        }
    }
    _persistOverridesToStorage() {
        if (!this._isTestMode) {
            this._persistFeatureFlagOverridesToStorage();
            try {
                const e = {};
                for (const [t, n] of this._experimentOverrides)e[t] = n;
                this.storageService.store(q3.EXPERIMENT_OVERRIDES_STORAGE_KEY, JSON.stringify(e), -1, 0), this.metricsService.increment({
                    stat: "experimentService.experiment_overrides_persisted",
                    tags: {
                        count: String(this._experimentOverrides.size)
                    }
                });
            } catch (e) {
                console.error("Failed to persist experiment overrides to storage:", e), this.metricsService.increment({
                    stat: "experimentService.experiment_overrides_persist_error"
                });
            }
            try {
                const e = {};
                for (const [t, n] of this._dynamicConfigOverrides)e[t] = n;
                this.storageService.store(q3.DYNAMIC_CONFIG_OVERRIDES_STORAGE_KEY, JSON.stringify(e), -1, 0), this.metricsService.increment({
                    stat: "experimentService.config_overrides_persisted",
                    tags: {
                        count: String(this._dynamicConfigOverrides.size)
                    }
                });
            } catch (e) {
                console.error("Failed to persist dynamic config overrides to storage:", e), this.metricsService.increment({
                    stat: "experimentService.config_overrides_persist_error"
                });
            }
        }
    }
    _recalculateGatesHash() {
        this._isCalculatingHash ? this._needsRecalculation = !0 : (this._isCalculatingHash = !0, this._needsRecalculation = !1, this._calculateGatesHash().finally(()=>{
            this._isCalculatingHash = !1, this._needsRecalculation && this._recalculateGatesHash();
        }));
    }
    async _calculateGatesHash() {
        const e = [];
        for (const o of Object.keys(JMe))this.checkFeatureGate(o, {
            disableExposureLog: !0
        }) && e.push(o);
        e.sort();
        const t = e.join("|"), n = new TextEncoder, i = await crypto.subtle.digest("SHA-256", n.encode(t)), s = Array.from(new Uint8Array(i)).map((o)=>o.toString(16).padStart(2, "0")).join("");
        this.clientNumericMetricsService.setFeatureFlagHash(s.substring(0, 16), t);
    }
}, q3.FEATURE_FLAG_OVERRIDES_STORAGE_KEY = "workbench.experiments.featureFlagOverrides", q3.FEATURE_FLAG_OVERRIDE_TTL_MS = 1440 * 60 * 1e3, q3.EXPERIMENT_OVERRIDES_STORAGE_KEY = "workbench.experiments.experimentOverrides", q3.DYNAMIC_CONFIG_OVERRIDES_STORAGE_KEY = "workbench.experiments.dynamicConfigOverrides", q3.STATSIG_BOOTSTRAP_STORAGE_KEY = "workbench.experiments.statsigBootstrap", q3 = ie([
    C(0, yn),
    C(1, Yi),
    C(2, jo),
    C(3, vp),
    C(4, AHi),
    C(5, xn),
    C(6, kX),
    C(7, Xh)
], q3), mn(Kr, q3, 0, 1);

}
