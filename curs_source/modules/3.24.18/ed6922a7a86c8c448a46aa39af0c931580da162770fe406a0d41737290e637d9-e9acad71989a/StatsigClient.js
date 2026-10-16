import { xJe } from "./$_StatsigGlobal.js";
import { Kyv, Yyv, dvd, fvd, oHi, oLn, qyv, vHi, zyv } from "./A3u.js";
import { n_e } from "./Diagnostics.js";
import { Jyv, pvd } from "./EvaluationStore.js";
import { $E } from "./Log_3.js";
import { qSt } from "./MemoKey.js";
import { gvd, kHi } from "./Network_2.js";
import { lSv } from "./ParamStoreGetterFactory.js";
import { aLn } from "./SDKType.js";
import { tLn } from "./SafeJs.js";
import { SHi } from "./SessionID.js";
import { QMe } from "./StableID.js";
import { lvd } from "./StatsigClientBase.js";
import { Jto, vvd } from "./StatsigEvaluationsDataAdapter.js";
import { cfd, kto, lfd } from "./StatsigEvent.js";
import { hvd, zSt } from "./StatsigUpdateDetails.js";
import { V3 } from "./StorageProvider.js";
import { MJe } from "./index_197.js";
import { x } from "./tslib.es6.js";
var eno;
export { eno };
var __wakaru_uSv_initialized = false;
export function uSv() {
if (__wakaru_uSv_initialized) return;
__wakaru_uSv_initialized = true;
"use strict";
x(), MJe(), Jyv(), gvd(), lSv(), vvd(), eno = class mAa extends lvd {
    constructor(t, n, i = null){
        aLn._setClientType(t, "javascript-client");
        const r = new kHi(i, (o)=>{
            this.$emt(o);
        });
        super(t, i?.dataAdapter ?? new Jto, r, i), this._possibleFirstTouchMetadata = {}, this.getFeatureGate = this._memoize(qSt._gate, this._getFeatureGateImpl.bind(this)), this.getDynamicConfig = this._memoize(qSt._dynamicConfig, this._getDynamicConfigImpl.bind(this)), this.getExperiment = this._memoize(qSt._experiment, this._getExperimentImpl.bind(this)), this.getConfigList = this._memoize(qSt._configList, this._getConfigListImpl.bind(this)), this.getLayer = this._memoize(qSt._layer, this._getLayerImpl.bind(this)), this.getParameterStore = this._memoize(qSt._paramStore, this._getParameterStoreImpl.bind(this)), this._store = new pvd(t), this._network = r, this._user = this._configureUser(n, i), this._sdkInstanceID = vHi();
        const s = i?.plugins ?? [];
        for (const o of s)o.bind(this);
    }
    static instance(t) {
        const n = xJe().instance(t);
        return n instanceof mAa ? n : ($E.warn(tLn() ? "StatsigClient.instance is not supported in server environments" : "Unable to find StatsigClient instance"), new mAa(t ?? "", {}));
    }
    initializeSync(t) {
        return this.loadingStatus !== "Uninitialized" ? zSt(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...this._store.getWarnings() ?? []
        ]) : (this._logger.start(), this.updateUserSync(this._user, t));
    }
    async initializeAsync(t) {
        return this._initializePromise ? this._initializePromise : (this._initializePromise = this._initializeAsyncImpl(t), this._initializePromise);
    }
    updateUserSync(t, n) {
        const i = performance.now();
        try {
            return this._updateUserSyncImpl(t, n, i);
        } catch (r) {
            const s = r instanceof Error ? r : new Error(String(r));
            return this._createErrorUpdateDetails(s, i);
        }
    }
    _updateUserSyncImpl(t, n, i) {
        const r = [
            ...this._store.getWarnings() ?? []
        ];
        this._resetForUser(t);
        const s = this.dataAdapter.getDataSync(this._user);
        s == null && r.push("NoCachedValues"), this._store.setValues(s, this._user), this._finalizeUpdate(s);
        const o = n?.disableBackgroundCacheRefresh;
        return o === !0 || o == null && s?.source === "Bootstrap" ? zSt(!0, this._store.getSource(), performance.now() - i, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), r) : (this._runPostUpdate(s ?? null, this._user), zSt(!0, this._store.getSource(), performance.now() - i, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), r));
    }
    async updateUserAsync(t, n) {
        const i = performance.now();
        try {
            return await this._updateUserAsyncImpl(t, n);
        } catch (r) {
            const s = r instanceof Error ? r : new Error(String(r));
            return this._createErrorUpdateDetails(s, i);
        }
    }
    async _updateUserAsyncImpl(t, n) {
        this._resetForUser(t);
        const i = this._user;
        n_e._markInitOverallStart(this._sdkKey);
        let r = this.dataAdapter.getDataSync(i);
        if (this._store.setValues(r, this._user), this._setStatus("Loading", r), r = await this.dataAdapter.getDataAsync(r, i, n), i !== this._user) return zSt(!1, this._store.getSource(), -1, new Error("User changed during update"), this._network.getLastUsedInitUrlAndReset());
        let s = !1;
        r != null && (n_e._markInitProcessStart(this._sdkKey), s = this._store.setValues(r, this._user), n_e._markInitProcessEnd(this._sdkKey, {
            success: s
        })), this._finalizeUpdate(r), s || (this._errorBoundary.attachErrorIfNoneExists(hvd.NO_NETWORK_DATA), this.$emt({
            name: "initialization_failure"
        })), n_e._markInitOverallEnd(this._sdkKey, s, this._store.getCurrentSourceDetails());
        const o = n_e._enqueueDiagnosticsEvent(this._user, this._logger, this._sdkKey, this._options);
        return zSt(s, this._store.getSource(), o, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), this._store.getWarnings());
    }
    getContext() {
        return {
            sdkKey: this._sdkKey,
            options: this._options,
            values: this._store.getValues(),
            user: JSON.parse(JSON.stringify(this._user)),
            errorBoundary: this._errorBoundary,
            session: SHi.get(this._sdkKey),
            stableID: QMe.get(this._sdkKey),
            sdkInstanceID: this._sdkInstanceID
        };
    }
    checkGate(t, n) {
        return this.getFeatureGate(t, n).value;
    }
    logEvent(t, n, i) {
        const r = typeof t == "string" ? {
            eventName: t,
            value: n,
            metadata: i
        } : t;
        this.$emt({
            name: "log_event_called",
            event: r
        }), this._logger.enqueue({
            ...r,
            user: this._user,
            time: Date.now()
        });
    }
    updateUserWithAnalyticsOnlyMetadata(t) {
        this._user = this._configureUser({
            ...this._user,
            analyticsOnlyMetadata: t
        }, this._options);
    }
    _primeReadyRipcord() {
        this.$on("error", ()=>{
            this.loadingStatus === "Loading" && this._finalizeUpdate(null);
        });
    }
    async _initializeAsyncImpl(t) {
        return V3.isReady() || await V3.isReadyResolver(), this._logger.start(), this.updateUserAsync(this._user, t);
    }
    _createErrorUpdateDetails(t, n) {
        return zSt(!1, this._store.getSource(), performance.now() - n, t, null, [
            ...this._store.getWarnings() ?? []
        ]);
    }
    _finalizeUpdate(t) {
        this._store.finalize(), this._setStatus("Ready", t);
    }
    _runPostUpdate(t, n) {
        this.dataAdapter.getDataAsync(t, n, {
            priority: "low"
        }).catch((i)=>{
            $E.error("An error occurred after update.", i);
        });
    }
    _resetForUser(t) {
        this._logger.reset(), this._store.reset(), this._user = this._configureUser(t, this._options);
    }
    _configureUser(t, n) {
        const i = oLn(t, n), r = i.customIDs?.stableID;
        return r && QMe.setOverride(r, this._sdkKey), i.analyticsOnlyMetadata = {
            ...i.analyticsOnlyMetadata,
            ...this._possibleFirstTouchMetadata
        }, i;
    }
    _getFeatureGateImpl(t, n) {
        const { result: i, details: r } = this._store.getGate(t), s = qyv(t, r, i), a = this.overrideAdapter?.getGateOverride?.(s, this._user, n) ?? s;
        return this._enqueueExposure(t, cfd(this._user, a, this._store.getExposureMapping()), n), this.$emt({
            name: "gate_evaluation",
            gate: a
        }), a;
    }
    _getDynamicConfigImpl(t, n) {
        const { result: i, details: r } = this._store.getConfig(t), s = dvd(t, r, i), a = this.overrideAdapter?.getDynamicConfigOverride?.(s, this._user, n) ?? s;
        return this._enqueueExposure(t, kto(this._user, a, this._store.getExposureMapping()), n), this.$emt({
            name: "dynamic_config_evaluation",
            dynamicConfig: a
        }), a;
    }
    _getExperimentImpl(t, n) {
        const { result: i, details: r } = this._store.getConfig(t), s = zyv(t, r, i);
        s.__evaluation != null && (s.__evaluation.secondary_exposures = oHi(s.__evaluation?.secondary_exposures ?? [], this._store.getExposureMapping()));
        const a = this.overrideAdapter?.getExperimentOverride?.(s, this._user, n) ?? s;
        return this._enqueueExposure(t, kto(this._user, a, this._store.getExposureMapping()), n), this.$emt({
            name: "experiment_evaluation",
            experiment: a
        }), a;
    }
    _getConfigListImpl() {
        return this._store.getConfigList();
    }
    _getLayerImpl(t, n) {
        const { result: i, details: r } = this._store.getLayer(t), s = Kyv(t, r, i), o = this.overrideAdapter?.getLayerOverride?.(s, this._user, n);
        n?.disableExposureLog && this._logger.incrementNonExposureCount(t);
        const a = Yyv(s, o, o?.__value ?? s.__value, (c)=>{
            n?.disableExposureLog || this._enqueueExposure(t, lfd(this._user, a, c, this._store.getExposureMapping()), n);
        });
        return this.$emt({
            name: "layer_evaluation",
            layer: a
        }), a;
    }
    _getParameterStoreImpl(t, n) {
        const { result: i, details: r } = this._store.getParamStore(t);
        this._logger.incrementNonExposureCount(t);
        const s = {
            name: t,
            details: r,
            __configuration: i,
            get: fvd(this, i, n)
        }, o = this.overrideAdapter?.getParamStoreOverride?.(s, n);
        return o != null && (s.__configuration = o.config, s.details = o.details, s.get = fvd(this, o.config, n)), s;
    }
};

}
