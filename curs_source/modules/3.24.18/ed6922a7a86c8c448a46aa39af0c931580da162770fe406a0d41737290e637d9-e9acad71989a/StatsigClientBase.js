import { IJe } from "./$_StatsigGlobal.js";
import { Wyv, _yv } from "./A3u.js";
import { Ffd, Ofd } from "./ErrorBoundary.js";
import { kfd, wfd } from "./EventLogger.js";
import { $E, Pee } from "./Log_3.js";
import { $fd } from "./MemoKey.js";
import { VSt } from "./SafeJs.js";
import { SHi, qto } from "./SessionID.js";
import { QMe, bHi } from "./StableID.js";
import { RJe, nLn } from "./StatsigOptionsCommon.js";
import { DJe, V3 } from "./StorageProvider.js";
import { x } from "./tslib.es6.js";
var cvd, lvd;
export { cvd, lvd };
var __wakaru_Gyv_initialized = false;
export function Gyv() {
if (__wakaru_Gyv_initialized) return;
__wakaru_Gyv_initialized = true;
"use strict";
x(), IJe(), IJe(), Ffd(), wfd(), Pee(), $fd(), VSt(), qto(), bHi(), nLn(), DJe(), cvd = 3e3, lvd = class {
    constructor(e, t, n, i){
        this.loadingStatus = "Uninitialized", this._initializePromise = null, this._listeners = {};
        const r = this.$emt.bind(this);
        i?.logLevel != null && ($E.level = i.logLevel), i?.disableStorage && V3._setDisabled(!0), i?.initialSessionID && SHi.overrideInitialSessionID(i.initialSessionID, e), i?.storageProvider && V3._setProvider(i.storageProvider), i?.enableCookies && QMe._setCookiesEnabled(e, i.enableCookies), i?.disableStableID && QMe._setDisabled(e, !0), this._sdkKey = e, this._options = i ?? {}, this._memoCache = new Map, this.overrideAdapter = i?.overrideAdapter ?? null, this._logger = new kfd(e, r, n, i), this._errorBoundary = new Ofd(e, i, r), this._errorBoundary.wrap(this), this._errorBoundary.wrap(t), this._errorBoundary.wrap(this._logger), n.setErrorBoundary(this._errorBoundary), this.dataAdapter = t, this.dataAdapter.attach(e, i, n), this.storageProvider = V3, this.overrideAdapter?.loadFromStorage?.()?.catch((s)=>this._errorBoundary.logError("OA::loadFromStorage", s)), this._primeReadyRipcord(), Wyv(e, this);
    }
    updateRuntimeOptions(e) {
        e.loggingEnabled ? (this._options.loggingEnabled = e.loggingEnabled, this._logger.setLoggingEnabled(e.loggingEnabled)) : e.disableLogging != null && (this._options.disableLogging = e.disableLogging, this._logger.setLoggingEnabled(e.disableLogging ? "disabled" : "browser-only")), e.disableStorage != null && (this._options.disableStorage = e.disableStorage, V3._setDisabled(e.disableStorage)), e.enableCookies != null && (this._options.enableCookies = e.enableCookies, QMe._setCookiesEnabled(this._sdkKey, e.enableCookies)), e.logEventCompressionMode ? this._logger.setLogEventCompressionMode(e.logEventCompressionMode) : e.disableCompression && this._logger.setLogEventCompressionMode(RJe.Disabled);
    }
    flush() {
        return this._logger.flush();
    }
    async shutdown() {
        this.$emt({
            name: "pre_shutdown"
        }), this._setStatus("Uninitialized", null), this._initializePromise = null, await this._logger.stop();
    }
    on(e, t) {
        this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t);
    }
    off(e, t) {
        if (this._listeners[e]) {
            const n = this._listeners[e].indexOf(t);
            n !== -1 && this._listeners[e].splice(n, 1);
        }
    }
    $on(e, t) {
        t.__isInternal = !0, this.on(e, t);
    }
    $emt(e) {
        const t = (n)=>{
            try {
                n(e);
            } catch (i) {
                if (n.__isInternal === !0) {
                    this._errorBoundary.logError(`__emit:${e.name}`, i);
                    return;
                }
                $E.error("An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.", e);
            }
        };
        this._listeners[e.name] && this._listeners[e.name].forEach((n)=>t(n)), this._listeners["*"]?.forEach(t);
    }
    _setStatus(e, t) {
        this.loadingStatus = e, this._memoCache.clear(), this.$emt({
            name: "values_updated",
            status: e,
            values: t
        });
    }
    _enqueueExposure(e, t, n) {
        if (n?.disableExposureLog === !0) {
            this._logger.incrementNonExposureCount(e);
            return;
        }
        this._logger.enqueue(t);
    }
    _memoize(e, t) {
        return (n, i)=>{
            if (this._options.disableEvaluationMemoization) return t(n, i);
            const r = _yv(e, n, i);
            return r ? (this._memoCache.has(r) || (this._memoCache.size >= cvd && this._memoCache.clear(), this._memoCache.set(r, t(n, i))), this._memoCache.get(r)) : t(n, i);
        };
    }
};

}
