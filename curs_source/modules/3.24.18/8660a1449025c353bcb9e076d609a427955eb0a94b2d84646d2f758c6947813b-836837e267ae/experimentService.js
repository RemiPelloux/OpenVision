import { Gt, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { PEo } from "./StatsigClient.js";
import { REo, ied } from "./StatsigEvaluationsDataAdapter.js";
import { AZn, o_t } from "./StatsigOptionsCommon.js";
import { U8o } from "./aiServerConfigStorage.js";
import { Bde, uY } from "./clientNumericMetricsService.js";
import { A_r, hMo, pa } from "./constants_8.js";
import { Hi, Rr } from "./contextkey.js";
import { Tm, x_ } from "./contextkeys.js";
import { fo, ps } from "./environmentService.js";
import { Bte, KOe, Lld, gAe, gPo, jse } from "./experimentConfig.gen.js";
import { Rn } from "./extensions.js";
import { ISy } from "./index_13.js";
import { It } from "./instantiation.js";
import { Uh, ip } from "./metricsService.js";
import { fc, hu } from "./productService.js";
import { MPo, b_r } from "./reactiveStorageSinglePassStringifyGate.js";
import { sk, vb } from "./solidEventsWrapper.js";
import { kud, wud } from "./startupConnectTransportSetting.js";
import { Zi, ki } from "./storage_2.js";
import { Cm, wh } from "./structuredLog.js";
import { E } from "./tslib.es6.js";
import { ocd, scd, tEy } from "./updateStorageKeys.js";
import { F, Re } from "./userDataProfile.js";
import { $t, Bs } from "./window.js";
import { F8o } from "./ze.js";
var Cr, J9;
export { Cr, J9 };
var __wakaru__s_initialized = false;
export function _s() {
if (__wakaru__s_initialized) return;
__wakaru__s_initialized = true;
"use strict";
E(), It(), Rn(), Qe(), ISy(), AZn(), ied(), Zi(), fo(), hu(), Gt(), jse(), ip(), Hi(), Cm(), x_(), sk(), MPo(), Bde(), Bs(), tEy(), pa(), wud(), U8o(), Cr = Il("experimentService"), J9 = class extends st {
    constructor(t, e, n, i, r, s, o, a){
        if (super(), this.storageService = t, this.environmentService = e, this.productService = n, this.metricsService = i, this.reactiveStorageSinglePassStringifyGate = r, this.contextKeyService = s, this.clientNumericMetricsService = o, this.structuredLogService = a, this._statsig = null, this._initialized = !1, this._featureFlagOverrides = new Map, this._experimentOverrides = new Map, this._dynamicConfigOverrides = new Map, this._layerOverrides = new Map, this._systemGateValues = new Map, this._featureGateProperties = new Map, this._experimentParamProperties = new Map, this._dynamicConfigParamProperties = new Map, this._layerParamProperties = new Map, this._isCalculatingHash = !1, this._needsRecalculation = !1, this._onDidChangeGates = this._register(new tt), this.onDidChangeGates = this._onDidChangeGates.event, this._constructionTime = performance.now(), this._dataAdapter = new REo, this._isTestMode = !!this.environmentService.enableSmokeTestDriver, this._isTestMode) {
            console.log("[ExperimentService] Test mode detected (enableSmokeTestDriver) - using default feature flags with overrides"), this._initialized = !0, this._loadTestFeatureFlags(), this._loadTestExperiments(), this._loadTestDynamicConfigs(), this._loadTestLayers(), this._syncGateToReactiveStorageStringifyGate();
            return;
        }
        this._canUseOverrides() && (this._loadOverridesFromStorage(), this._loadTestFeatureFlags(), this._loadTestExperiments(), this._loadTestDynamicConfigs(), this._loadTestLayers()), this._register(this.contextKeyService.onDidChangeContext((d)=>{
            d.affectsSome(new Set([
                Tm.key
            ])) && (this._canUseOverrides() && this._featureFlagOverrides.size === 0 && this._loadOverridesFromStorage(), this._onDidChangeGates.fire({}));
        }));
        const l = performance.now(), c = this._initFromCachedBootstrap(), u = performance.now();
        this.metricsService.distribution({
            stat: "experimentService.blocking_time",
            value: u - l,
            tags: {
                source: c ? "cache" : "network"
            }
        }), this.metricsService.distribution({
            stat: "experimentService.blocking_time_from_construction",
            value: u - this._constructionTime,
            tags: {
                source: c ? "cache" : "network"
            }
        }), this._register(this.onDidChangeGates((d)=>{
            for (const [h, p] of this._featureGateProperties)if (!d.changedGates || d.changedGates.has(h)) {
                const g = this.checkFeatureGate(h, {
                    disableExposureLog: !0
                });
                g !== p.value && p.change(g);
            }
            for (const [h, p] of this._experimentParamProperties){
                const [g, f] = h.split("::::");
                if (!d.changedExperiments || d.changedExperiments.has(g)) {
                    const _ = this.getExperimentParam(g, f, {
                        disableExposureLog: !0
                    });
                    _ !== p.value && p.change(_);
                }
            }
            for (const [h, p] of this._dynamicConfigParamProperties){
                const [g, f] = h.split("::::");
                if (!d.changedConfigs || d.changedConfigs.has(g)) {
                    const _ = this.getDynamicConfigParam(g, f, {
                        disableExposureLog: !0
                    });
                    _ !== p.value && p.change(_);
                }
            }
            for (const [h, p] of this._layerParamProperties){
                const [g, f] = h.split("::::");
                if (!d.changedLayers || d.changedLayers.has(g)) {
                    const _ = this.getLayerParam(g, f, {
                        disableExposureLog: !0
                    });
                    _ !== p.value && p.change(_);
                }
            }
            (!d.changedGates || d.changedGates.size > 0) && this._recalculateGatesHash();
        })), this.clientNumericMetricsService.setExperimentService(this), this._syncGateToReactiveStorageStringifyGate(), this._syncGateToApplicationStorage("windows_linux_update_auth_headers", scd), this._syncGateToApplicationStorage("updater_recovery_windows", ocd), this._syncGateToApplicationStorage("glass_shared_application_storage", hMo, !0), this._syncGateToApplicationStorage("model_catalog_own_key", A_r, !0), this._syncGateToApplicationStorage("glass_startup_connect_transport", kud);
    }
    _syncGateToReactiveStorageStringifyGate() {
        const t = ()=>{
            this.reactiveStorageSinglePassStringifyGate.set(this.checkFeatureGate("reactivestorage_single_pass_stringify", {
                disableExposureLog: !1
            }));
        };
        t(), this._register(this.onDidChangeGates((e)=>{
            (!e.changedGates || e.changedGates.has("reactivestorage_single_pass_stringify")) && t();
        }));
    }
    _syncGateToApplicationStorage(t, e, n = !1) {
        const i = ()=>{
            const a = this.checkFeatureGate(t, {
                disableExposureLog: !0
            });
            this.storageService.getBoolean(e, -1) !== a && this.storageService.store(e, a, -1, 1);
        }, r = ()=>{
            this._register(this.onDidChangeGates((a)=>{
                (!a.changedGates || a.changedGates.has(t)) && i();
            }));
        };
        (this.storageService.initialize?.() ?? Promise.resolve()).then(()=>{
            n && this.storageService.getBoolean(e, -1) !== void 0 && this.environmentService.isGlass && this.environmentService.glassWorkspaceRole !== "agentWorkspace" && this.checkFeatureGate(t, {
                disableExposureLog: !1
            }), i(), r();
        }).catch(()=>{
            r();
        });
    }
    _initFromCachedBootstrap() {
        const t = performance.now(), e = this.storageService.get(J9.STATSIG_BOOTSTRAP_STORAGE_KEY, -1);
        if (!e || e.length === 0) return this.metricsService.increment({
            stat: "experimentService.bootstrap.source",
            tags: {
                source: "network_cache_miss"
            }
        }), !1;
        try {
            const n = JSON.parse(e), i = n && n.user ? n.user : {};
            this._lastAppliedStatsigUser = JSON.stringify(i), this._hydrateStatsigClient(e, i, "cache"), this._lastAppliedStatsigConfig = e, this.metricsService.increment({
                stat: "experimentService.bootstrap.source",
                tags: {
                    source: "cache"
                }
            });
            const r = performance.now();
            return this.metricsService.distribution({
                stat: "experimentService.cache_init_time",
                value: r - t
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
    _getUrlString(t) {
        return typeof t == "string" ? t : t instanceof Request ? t.url : String(t);
    }
    _initializeStatsigClient(t, e) {
        const n = performance.now();
        if (this._statsig) this._statsig.updateUserSync(t, {
            disableBackgroundCacheRefresh: !0
        });
        else {
            const r = this.productService.statsigLogEventProxyUrl, s = typeof r == "string" && r.length > 0;
            this._statsig = new PEo(this.productService.statsigClientKey ?? "", t, {
                dataAdapter: e,
                loggingEnabled: s ? "always" : "disabled",
                disableStorage: !0,
                logEventCompressionMode: o_t.Forced,
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
    checkFeatureGate(t, e) {
        if (!e.doNotUseIgnoreLocalOverridesExceptForDeveloperOverrideUi) {
            const i = this._featureFlagOverrides.get(t);
            if (this._canUseOverrides() && i) {
                if (this._isOverrideActive(i)) return this.metricsService.increment({
                    stat: "experimentService.override_gate_check",
                    tags: {
                        gate: t
                    }
                }), i.value;
                console.log(`[ExperimentService] Feature flag override "${t}" expired during runtime, clearing`), this._featureFlagOverrides.delete(t), this._persistOverridesToStorage(), this._onDidChangeGates.fire({
                    changedGates: new Set([
                        t
                    ])
                });
            }
        }
        const n = this._systemGateValues.get(t);
        return n !== void 0 ? n : this._checkGateWithoutOverride(t, e);
    }
    _checkGateWithoutOverride(t, e) {
        if (this._statsig) try {
            return this._statsig.checkGate(t, e);
        } catch  {
            return this.metricsService.increment({
                stat: "experimentService.gate_check_error"
            }), gAe[t]?.default ?? !1;
        }
        else return this.metricsService.increment({
            stat: "experimentService.uninitialized_gate_check"
        }), gAe[t]?.default ?? !1;
    }
    _isOverrideActive(t) {
        return t.expiresAt === null || t.expiresAt > Date.now();
    }
    getFeatureGateProperty(t) {
        let e = this._featureGateProperties.get(t);
        return e || (e = this._register(new vb(this.checkFeatureGate(t, {
            disableExposureLog: !0
        }))), this._featureGateProperties.set(t, e)), e;
    }
    getExperimentParamProperty(t, e) {
        const n = `${t}::::${String(e)}`;
        let i = this._experimentParamProperties.get(n);
        return i || (i = this._register(new vb(this.getExperimentParam(t, e, {
            disableExposureLog: !0
        }))), this._experimentParamProperties.set(n, i)), i;
    }
    getDynamicConfigParamProperty(t, e) {
        const n = `${t}::::${String(e)}`;
        let i = this._dynamicConfigParamProperties.get(n);
        return i || (i = this._register(new vb(this.getDynamicConfigParam(t, e, {
            disableExposureLog: !0
        }))), this._dynamicConfigParamProperties.set(n, i)), i;
    }
    getLayerParamProperty(t, e) {
        const n = `${t}::::${String(e)}`;
        let i = this._layerParamProperties.get(n);
        return i || (i = this._register(new vb(this.getLayerParam(t, e, {
            disableExposureLog: !0
        }))), this._layerParamProperties.set(n, i)), i;
    }
    getExperiment(t, e) {
        const n = performance.now();
        let i, r;
        if (!e.doNotUseIgnoreLocalOverridesExceptForDeveloperOverrideUi && this._canUseOverrides() && this._experimentOverrides.has(t)) i = this._experimentOverrides.get(t), r = "override", this.metricsService.increment({
            stat: "experimentService.override_experiment_check",
            tags: {
                experiment: t
            }
        });
        else if (!this._statsig) i = KOe[t]?.fallbackValues ?? {}, r = "default", this.metricsService.increment({
            stat: "experimentService.uninitialized_experiment_check"
        });
        else try {
            i = this._statsig.getExperiment(t, e).value, r = "statsig";
        } catch  {
            i = KOe[t]?.fallbackValues ?? {}, r = "error", this.metricsService.increment({
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
    getExperimentParam(t, e, n) {
        return this.getExperiment(t, n)[e];
    }
    getExperimentGroup(t, e) {
        if (!this._statsig) return null;
        try {
            return this._statsig.getExperiment(t, e).groupName ?? null;
        } catch (n) {
            return console.error(`[ExperimentService] Error getting experiment group for ${t}:`, n), null;
        }
    }
    getLayerParam(t, e, n) {
        const i = gPo[t], r = i.fallbackValues[e];
        if (this._canUseOverrides()) {
            const s = this._layerOverrides.get(t);
            if (s !== void 0 && Object.prototype.hasOwnProperty.call(s, e)) try {
                return i.parseValue[e](s[e]);
            } catch (o) {
                return this.structuredLogService.error("experiment_refresh_service", "ExperimentService: failed to parse layer override, using fallback", o instanceof Error ? o : new Error(String(o)), {
                    layer: t,
                    param: String(e)
                }), r;
            }
        }
        if (!this._statsig) return this.metricsService.increment({
            stat: "experimentService.uninitialized_layer_check"
        }), r;
        try {
            const s = this._statsig.getLayer(t, n).get(String(e), r);
            return i.parseValue[e](s);
        } catch  {
            return this.metricsService.increment({
                stat: "experimentService.layer_check_error"
            }), r;
        }
    }
    _mergeDynamicConfigWithFallback(t, e) {
        return {
            ...Bte[t]?.fallbackValues ?? {},
            ...e ?? {}
        };
    }
    getDynamicConfig(t, e) {
        const n = performance.now();
        let i, r;
        if (!Bte[t]) throw new Error(`Dynamic config ${t} not found`);
        if (this._canUseOverrides() && this._dynamicConfigOverrides.has(t)) i = this._mergeDynamicConfigWithFallback(t, this._dynamicConfigOverrides.get(t)), r = "override", this.metricsService.increment({
            stat: "experimentService.override_config_check",
            tags: {
                config: t
            }
        });
        else if (!this._statsig) i = Bte[t]?.fallbackValues, r = "default", this.metricsService.increment({
            stat: "experimentService.uninitialized_config_check"
        });
        else try {
            const o = this._statsig.getDynamicConfig(t, e);
            i = this._mergeDynamicConfigWithFallback(t, o.value), r = "statsig";
        } catch  {
            i = Bte[t]?.fallbackValues, r = "error", this.metricsService.increment({
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
    getDynamicConfigParam(t, e, n) {
        return this.getDynamicConfig(t, n)[e];
    }
    setExperimentOverride(t, e) {
        if (!this._canUseOverrides()) {
            console.warn("[ExperimentService] Cannot set experiment overrides in production builds for non-dev users");
            return;
        }
        const n = this._experimentOverrides.has(t), i = n ? this._experimentOverrides.get(t) : void 0;
        this._experimentOverrides.set(t, e), this._persistOverridesToStorage(), (!n || JSON.stringify(i) !== JSON.stringify(e)) && this._onDidChangeGates.fire({
            changedExperiments: new Set([
                t
            ])
        }), this.metricsService.increment({
            stat: "experimentService.experiment_override_set",
            tags: {
                experiment: t
            }
        });
    }
    clearExperimentOverride(t) {
        if (!this._canUseOverrides()) {
            console.warn("[ExperimentService] Cannot clear experiment overrides in production builds for non-dev users");
            return;
        }
        this._experimentOverrides.has(t) && (this._experimentOverrides.delete(t), this._persistOverridesToStorage(), this._onDidChangeGates.fire({
            changedExperiments: new Set([
                t
            ])
        }), this.metricsService.increment({
            stat: "experimentService.experiment_override_cleared",
            tags: {
                experiment: t
            }
        }));
    }
    getExperimentOverrides() {
        return new Map(this._experimentOverrides);
    }
    hasExperimentOverride(t) {
        return this._experimentOverrides.has(t);
    }
    setDynamicConfigOverride(t, e) {
        if (!this._canUseOverrides()) {
            console.warn("[ExperimentService] Cannot set dynamic config overrides in production builds for non-dev users");
            return;
        }
        const n = this._dynamicConfigOverrides.has(t), i = n ? this._dynamicConfigOverrides.get(t) : void 0;
        this._dynamicConfigOverrides.set(t, e), this._persistOverridesToStorage(), (!n || JSON.stringify(i) !== JSON.stringify(e)) && this._onDidChangeGates.fire({
            changedConfigs: new Set([
                t
            ])
        }), this.metricsService.increment({
            stat: "experimentService.config_override_set",
            tags: {
                config: t
            }
        });
    }
    clearDynamicConfigOverride(t) {
        if (!this._canUseOverrides()) {
            console.warn("[ExperimentService] Cannot clear dynamic config overrides in production builds for non-dev users");
            return;
        }
        this._dynamicConfigOverrides.has(t) && (this._dynamicConfigOverrides.delete(t), this._persistOverridesToStorage(), this._onDidChangeGates.fire({
            changedConfigs: new Set([
                t
            ])
        }), this.metricsService.increment({
            stat: "experimentService.config_override_cleared",
            tags: {
                config: t
            }
        }));
    }
    getDynamicConfigOverrides() {
        return new Map(this._dynamicConfigOverrides);
    }
    hasDynamicConfigOverride(t) {
        return this._dynamicConfigOverrides.has(t);
    }
    isInitialized() {
        return this._initialized;
    }
    hasAuthenticatedStatsigUser() {
        return this._hydratedUserId !== void 0 && this._hydratedUserId !== "";
    }
    canEvaluateExperimentParamForIdentity(t, e, n) {
        if (t.length === 0) return !1;
        if (this._canUseOverrides()) {
            const i = this._experimentOverrides.get(e);
            if (i !== void 0) return Object.prototype.hasOwnProperty.call(i, n);
        }
        if (this._hydratedUserId !== t || !this._statsig) return this.metricsService.increment({
            stat: "experimentService.experiment_param_not_authoritative",
            tags: {
                experiment: e
            }
        }), this.structuredLogService.warn("experiment_refresh_service", "ExperimentService: experiment param not authoritative for current identity, skipping", {
            experiment: e,
            reason: this._statsig ? this._hydratedUserId === void 0 ? "anonymous_cache" : "identity_mismatch" : "statsig_not_hydrated"
        }), !1;
        try {
            const i = this._statsig.getExperiment(e, {
                disableExposureLog: !0
            });
            return Object.prototype.hasOwnProperty.call(i.value, n);
        } catch (i) {
            return this.structuredLogService.error("experiment_refresh_service", "ExperimentService: error evaluating experiment param authoritativeness", i instanceof Error ? i : new Error(String(i)), {
                experiment: e
            }), !1;
        }
    }
    hasHydratedLayerParamForIdentity(t, e, n) {
        if (t.length === 0 || this._hydratedUserId !== t || !this._statsig) return !1;
        try {
            const i = this._statsig.getLayer(e, {
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
    async _persistBootstrap(t, e) {
        if (this.storageService.get(J9.STATSIG_BOOTSTRAP_STORAGE_KEY, -1) !== t) try {
            this.storageService.store(J9.STATSIG_BOOTSTRAP_STORAGE_KEY, t, -1, 1), await this.storageService.flushStorage(-1), this.metricsService.increment({
                stat: "experimentService.persist_success",
                tags: {
                    trigger: e
                }
            });
        } catch (n) {
            console.error("[ExperimentService] Error persisting bootstrap", n), this.metricsService.increment({
                stat: "experimentService.persist_failure",
                tags: {
                    trigger: e
                }
            });
        }
    }
    _hydrateStatsigClient(t, e, n) {
        e.userAgent = $t.navigator.userAgent.trim(), this._initializeStatsigClient(e, this._dataAdapter), this._dataAdapter.setData(t), this._statsig?.updateUserSync(e, {
            disableBackgroundCacheRefresh: !0
        }), this._hydratedUserId = typeof e.userID == "string" ? e.userID : void 0;
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
    refreshStatsigConfig(t, e, n) {
        const i = this._lastAppliedStatsigConfig !== void 0 && t === this._lastAppliedStatsigConfig ? this._lastAppliedStatsigConfig : t, r = i !== this._lastAppliedStatsigConfig, s = JSON.stringify(e), o = s !== this._lastAppliedStatsigUser;
        if (this._persistBootstrap(i, n).catch(()=>{}), n === "poll" && !r && !o) {
            this.metricsService.increment({
                stat: "experimentService.refresh_skipped_unchanged"
            });
            return;
        }
        this._hydrateStatsigClient(i, e, "network"), this._lastAppliedStatsigConfig = i, this._lastAppliedStatsigUser = s, this._onDidChangeGates.fire({});
    }
    setFeatureFlagOverride(t, e) {
        if (!this._canUseOverrides()) {
            console.warn("[ExperimentService] Cannot set feature flag overrides in production builds for non-dev users");
            return;
        }
        const n = this.hasFeatureFlagOverride(t), r = (n ? this._featureFlagOverrides.get(t) : void 0)?.value, s = Date.now() + J9.FEATURE_FLAG_OVERRIDE_TTL_MS;
        this._featureFlagOverrides.set(t, {
            value: e,
            expiresAt: s
        }), this._persistOverridesToStorage(), (!n || r !== e) && this._onDidChangeGates.fire({
            changedGates: new Set([
                t
            ])
        }), this.metricsService.increment({
            stat: "experimentService.override_set",
            tags: {
                gate: t,
                value: String(e)
            }
        });
    }
    clearFeatureFlagOverride(t) {
        if (!this._canUseOverrides()) {
            console.warn("[ExperimentService] Cannot clear feature flag overrides in production builds for non-dev users");
            return;
        }
        this._featureFlagOverrides.has(t) && (this._featureFlagOverrides.delete(t), this._persistOverridesToStorage(), this._onDidChangeGates.fire({
            changedGates: new Set([
                t
            ])
        }), this.metricsService.increment({
            stat: "experimentService.override_cleared",
            tags: {
                gate: t
            }
        }));
    }
    clearAllFeatureFlagOverrides() {
        if (!this._canUseOverrides()) {
            console.warn("[ExperimentService] Cannot clear feature flag overrides in production builds for non-dev users");
            return;
        }
        const t = new Set(this._featureFlagOverrides.keys());
        t.size > 0 && (this._featureFlagOverrides.clear(), this.storageService.remove(J9.FEATURE_FLAG_OVERRIDES_STORAGE_KEY, -1), this._onDidChangeGates.fire({
            changedGates: t
        }), this.metricsService.increment({
            stat: "experimentService.all_overrides_cleared",
            tags: {
                count: String(t.size)
            }
        }));
    }
    clearAllOverrides() {
        if (!this._canUseOverrides()) return this.structuredLogService.warn("experiment_refresh_service", "ExperimentService: cannot clear overrides in production builds for non-dev users"), {
            featureFlags: 0,
            experiments: 0,
            dynamicConfigs: 0
        };
        const t = new Set(this._featureFlagOverrides.keys()), e = new Set(this._experimentOverrides.keys()), n = new Set(this._dynamicConfigOverrides.keys()), i = {
            featureFlags: this.getFeatureFlagOverrides().size,
            experiments: e.size,
            dynamicConfigs: n.size
        };
        if (t.size === 0 && e.size === 0 && n.size === 0) return i;
        this._featureFlagOverrides.clear(), this._experimentOverrides.clear(), this._dynamicConfigOverrides.clear();
        for (const r of [
            J9.FEATURE_FLAG_OVERRIDES_STORAGE_KEY,
            J9.EXPERIMENT_OVERRIDES_STORAGE_KEY,
            J9.DYNAMIC_CONFIG_OVERRIDES_STORAGE_KEY
        ])this.storageService.remove(r, -1);
        return this._onDidChangeGates.fire({
            changedGates: t,
            changedExperiments: e,
            changedConfigs: n
        }), i;
    }
    getFeatureFlagOverrides() {
        const t = new Map;
        for (const [e, n] of this._featureFlagOverrides)this._isOverrideActive(n) && t.set(e, n.value);
        return t;
    }
    hasFeatureFlagOverride(t) {
        const e = this._featureFlagOverrides.get(t);
        return e !== void 0 && this._isOverrideActive(e);
    }
    setSystemGateValue(t, e) {
        this._systemGateValues.get(t) !== e && (this._systemGateValues.set(t, e), this._onDidChangeGates.fire({
            changedGates: new Set([
                t
            ])
        }));
    }
    clearSystemGateValue(t) {
        const e = this._systemGateValues.get(t);
        if (e === void 0) return;
        this._systemGateValues.delete(t);
        const n = this._checkGateWithoutOverride(t, {
            disableExposureLog: !0
        });
        e !== n && this._onDidChangeGates.fire({
            changedGates: new Set([
                t
            ])
        });
    }
    getOverridesForHeader() {
        if (!this._canUseOverrides()) return;
        const t = 32768, e = {}, n = this.getFeatureFlagOverrides();
        if (n.size > 0 && (e.featureFlags = Object.fromEntries(n)), this._experimentOverrides.size > 0) {
            const s = Object.create(null);
            for (const [o, a] of this._experimentOverrides)typeof a == "object" && a !== null && !Array.isArray(a) && (s[o] = a);
            Object.keys(s).length > 0 && (e.experiments = s);
        }
        if (this._dynamicConfigOverrides.size > 0) {
            const s = Object.create(null);
            for (const [o, a] of this._dynamicConfigOverrides)typeof a == "object" && a !== null && !Array.isArray(a) && (s[o] = a);
            Object.keys(s).length > 0 && (e.dynamicConfigs = s);
        }
        if (!(e.featureFlags !== void 0 || e.experiments !== void 0 || e.dynamicConfigs !== void 0)) return;
        const r = JSON.stringify(e);
        if (!(r.length > t)) return r;
    }
    _loadTestFeatureFlags() {
        const t = this.environmentService.testFeatureFlags;
        if (!t) {
            console.log("[ExperimentService] No test feature flags provided - using all defaults");
            return;
        }
        let e;
        try {
            const n = atob(t);
            e = JSON.parse(n);
        } catch (n) {
            console.error("[ExperimentService] Failed to parse test feature flags JSON (expected base64-encoded JSON):", n);
            return;
        }
        for (const [n, i] of Object.entries(e))typeof i == "boolean" ? (this._featureFlagOverrides.set(n, {
            value: i,
            expiresAt: null
        }), console.log(`[ExperimentService] Test flag: ${n} = ${i}`)) : console.warn(`[ExperimentService] Ignoring non-boolean test flag value for ${n}: ${i}`);
    }
    _loadTestDynamicConfigs() {
        const t = this.environmentService.testDynamicConfigs;
        if (t) try {
            const e = atob(t), n = JSON.parse(e);
            for (const [i, r] of Object.entries(n)){
                if (!(i in Bte)) {
                    console.warn(`[ExperimentService] Ignoring unknown dynamic config override "${i}"`);
                    continue;
                }
                const s = i, a = Lld[s].safeParse(r);
                if (!a.success) {
                    console.error(`[ExperimentService] Failed to parse dynamic config override for "${i}"`, a.error);
                    continue;
                }
                this._dynamicConfigOverrides.set(s, a.data);
            }
        } catch (e) {
            console.error("[ExperimentService] Failed to parse test dynamic configs JSON:", e), console.error("[ExperimentService] JSON was:", t);
        }
    }
    _loadTestExperiments() {
        const t = this.environmentService.testExperiments;
        if (t) try {
            const e = atob(t), n = JSON.parse(e);
            for (const [i, r] of Object.entries(n)){
                if (!(i in KOe)) {
                    console.warn(`[ExperimentService] Ignoring unknown experiment override "${i}"`);
                    continue;
                }
                if (typeof r != "object" || r === null || Array.isArray(r)) {
                    console.warn(`[ExperimentService] Ignoring non-object experiment override "${i}"`);
                    continue;
                }
                this._experimentOverrides.set(i, r);
            }
        } catch (e) {
            console.error("[ExperimentService] Failed to parse test experiments JSON:", e), console.error("[ExperimentService] JSON was:", t);
        }
    }
    _loadTestLayers() {
        const t = this.environmentService.testLayers;
        if (t) try {
            const e = atob(t), n = JSON.parse(e);
            for (const [i, r] of Object.entries(n)){
                if (!(i in gPo)) {
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
        } catch (e) {
            this.structuredLogService.error("experiment_refresh_service", "ExperimentService: failed to parse test layers JSON", e instanceof Error ? e : new Error(String(e)));
        }
    }
    _loadOverridesFromStorage() {
        try {
            const t = this.storageService.get(J9.FEATURE_FLAG_OVERRIDES_STORAGE_KEY, -1);
            if (t) {
                const e = JSON.parse(t);
                let n = 0;
                for (const [i, r] of Object.entries(e))if (r !== null && typeof r == "object" && "value" in r && "expiresAt" in r) {
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
        } catch (t) {
            console.error("Failed to load feature flag overrides from storage:", t), this.metricsService.increment({
                stat: "experimentService.flag_overrides_load_error"
            });
        }
        try {
            const t = this.storageService.get(J9.EXPERIMENT_OVERRIDES_STORAGE_KEY, -1);
            if (t) {
                const e = JSON.parse(t);
                this._experimentOverrides = new Map(Object.entries(e)), this.metricsService.increment({
                    stat: "experimentService.experiment_overrides_loaded",
                    tags: {
                        count: String(this._experimentOverrides.size)
                    }
                });
            }
        } catch (t) {
            console.error("Failed to load experiment overrides from storage:", t), this.metricsService.increment({
                stat: "experimentService.experiment_overrides_load_error"
            });
        }
        try {
            const t = this.storageService.get(J9.DYNAMIC_CONFIG_OVERRIDES_STORAGE_KEY, -1);
            if (t) {
                const e = JSON.parse(t);
                this._dynamicConfigOverrides = new Map(Object.entries(e)), this.metricsService.increment({
                    stat: "experimentService.config_overrides_loaded",
                    tags: {
                        count: String(this._dynamicConfigOverrides.size)
                    }
                });
            }
        } catch (t) {
            console.error("Failed to load dynamic config overrides from storage:", t), this.metricsService.increment({
                stat: "experimentService.config_overrides_load_error"
            });
        }
    }
    _canUseOverrides() {
        return this._isTestMode || !(this.environmentService.isBuilt && !this.environmentService.isExtensionDevelopment) ? !0 : !!this.contextKeyService.getContextKeyValue(Tm.key) || this._isDevUserInCachedServerConfig();
    }
    _isDevUserInCachedServerConfig() {
        if (this._cachedDiskDevUserOverrideEligibility !== void 0) return this._cachedDiskDevUserOverrideEligibility;
        try {
            this._cachedDiskDevUserOverrideEligibility = F8o(this.storageService)?.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers ?? !1;
        } catch  {
            this.metricsService.increment({
                stat: "experimentService.cached_server_config_override_eligibility_read_error"
            }), this._cachedDiskDevUserOverrideEligibility = !1;
        }
        return this._cachedDiskDevUserOverrideEligibility ?? !1;
    }
    _persistFeatureFlagOverridesToStorage() {
        if (!this._isTestMode) try {
            const t = {};
            for (const [e, n] of this._featureFlagOverrides)t[e] = n;
            this.storageService.store(J9.FEATURE_FLAG_OVERRIDES_STORAGE_KEY, JSON.stringify(t), -1, 0), this.metricsService.increment({
                stat: "experimentService.flag_overrides_persisted",
                tags: {
                    count: String(this._featureFlagOverrides.size)
                }
            });
        } catch (t) {
            console.error("Failed to persist feature flag overrides to storage:", t), this.metricsService.increment({
                stat: "experimentService.flag_overrides_persist_error"
            });
        }
    }
    _persistOverridesToStorage() {
        if (!this._isTestMode) {
            this._persistFeatureFlagOverridesToStorage();
            try {
                const t = {};
                for (const [e, n] of this._experimentOverrides)t[e] = n;
                this.storageService.store(J9.EXPERIMENT_OVERRIDES_STORAGE_KEY, JSON.stringify(t), -1, 0), this.metricsService.increment({
                    stat: "experimentService.experiment_overrides_persisted",
                    tags: {
                        count: String(this._experimentOverrides.size)
                    }
                });
            } catch (t) {
                console.error("Failed to persist experiment overrides to storage:", t), this.metricsService.increment({
                    stat: "experimentService.experiment_overrides_persist_error"
                });
            }
            try {
                const t = {};
                for (const [e, n] of this._dynamicConfigOverrides)t[e] = n;
                this.storageService.store(J9.DYNAMIC_CONFIG_OVERRIDES_STORAGE_KEY, JSON.stringify(t), -1, 0), this.metricsService.increment({
                    stat: "experimentService.config_overrides_persisted",
                    tags: {
                        count: String(this._dynamicConfigOverrides.size)
                    }
                });
            } catch (t) {
                console.error("Failed to persist dynamic config overrides to storage:", t), this.metricsService.increment({
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
        const t = [];
        for (const o of Object.keys(gAe))this.checkFeatureGate(o, {
            disableExposureLog: !0
        }) && t.push(o);
        t.sort();
        const e = t.join("|"), n = new TextEncoder, i = await crypto.subtle.digest("SHA-256", n.encode(e)), s = Array.from(new Uint8Array(i)).map((o)=>o.toString(16).padStart(2, "0")).join("");
        this.clientNumericMetricsService.setFeatureFlagHash(s.substring(0, 16), e);
    }
}, J9.FEATURE_FLAG_OVERRIDES_STORAGE_KEY = "workbench.experiments.featureFlagOverrides", J9.FEATURE_FLAG_OVERRIDE_TTL_MS = 1440 * 60 * 1e3, J9.EXPERIMENT_OVERRIDES_STORAGE_KEY = "workbench.experiments.experimentOverrides", J9.DYNAMIC_CONFIG_OVERRIDES_STORAGE_KEY = "workbench.experiments.dynamicConfigOverrides", J9.STATSIG_BOOTSTRAP_STORAGE_KEY = "workbench.experiments.statsigBootstrap", J9 = Re([
    F(0, ki),
    F(1, ps),
    F(2, fc),
    F(3, Uh),
    F(4, b_r),
    F(5, Rr),
    F(6, uY),
    F(7, wh)
], J9), bn(Cr, J9, 0, 1);

}
