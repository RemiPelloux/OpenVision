import { cHi, iLn, nfd } from "./A3u.js";
import { nHi } from "./CacheKey.js";
import { AJe, vHt } from "./Hashing.js";
import { $E, Pee } from "./Log_3.js";
import { Q4e, bde, iHi } from "./NetworkConfig.js";
import { VSt, sfd, tLn } from "./SafeJs.js";
import { afd, dfd } from "./StatsigEvent.js";
import { nLn, wto } from "./StatsigOptionsCommon.js";
import { DJe, V3 } from "./StorageProvider.js";
import { Tto, mfd } from "./UrlConfiguration.js";
import { Ito, gfd, rLn } from "./VisibilityObserving.js";
import { x } from "./tslib.es6.js";
var ffd, vfd, _fd, bfd, yfd, Sfd, Ato, bHt, yHt, kfd;
export { Ato, Sfd, _fd, bHt, bfd, ffd, kfd, vfd, yHt, yfd };
var __wakaru_wfd_initialized = false;
export function wfd() {
if (__wakaru_wfd_initialized) return;
__wakaru_wfd_initialized = true;
"use strict";
x(), nHi(), vHt(), Pee(), iHi(), VSt(), dfd(), nLn(), DJe(), mfd(), Ito(), ffd = 100, vfd = 100, _fd = 1e4, bfd = 1e3, yfd = 6e5, Sfd = 500, Ato = 200, bHt = {}, yHt = {
    Startup: "startup",
    GainedFocus: "gained_focus"
}, kfd = class $in {
    constructor(t, n, i, r){
        this._sdkKey = t, this._emitter = n, this._network = i, this._options = r, this._queue = [], this._lastExposureTimeMap = {}, this._lastExposureTimeMapSize = 0, this._nonExposedChecks = {}, this._hasRunQuickFlush = !1, this._creationTime = Date.now(), this._loggingEnabled = r?.loggingEnabled ?? (r?.disableLogging === !0 ? wto.disabled : wto.browserOnly), r?.loggingEnabled && r.disableLogging !== void 0 && $E.warn("Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging."), this._maxQueueSize = r?.loggingBufferMaxSize ?? ffd;
        const s = r?.networkConfig;
        this._logEventUrlConfig = new Tto(bde._rgstr, s?.logEventUrl, s?.api, s?.logEventFallbackUrls);
    }
    static _safeFlushAndForget(t) {
        bHt[t]?.flush().catch(()=>{});
    }
    static _safeRetryFailedLogs(t) {
        bHt[t]?._retryFailedLogs(yHt.GainedFocus);
    }
    setLogEventCompressionMode(t) {
        this._network.setLogEventCompressionMode(t);
    }
    setLoggingEnabled(t) {
        this._loggingEnabled = t;
    }
    enqueue(t) {
        this._shouldLogEvent(t) && (this._normalizeAndAppendEvent(t), this._quickFlushIfNeeded(), this._queue.length > this._maxQueueSize && $in._safeFlushAndForget(this._sdkKey));
    }
    incrementNonExposureCount(t) {
        const n = this._nonExposedChecks[t] ?? 0;
        this._nonExposedChecks[t] = n + 1;
    }
    reset() {
        this.flush().catch(()=>{}), this._lastExposureTimeMap = {}, this._lastExposureTimeMapSize = 0;
    }
    start() {
        const t = tLn();
        t && this._options?.loggingEnabled !== "always" || (bHt[this._sdkKey] = this, t || gfd((n)=>{
            n === "background" ? $in._safeFlushAndForget(this._sdkKey) : n === "foreground" && $in._safeRetryFailedLogs(this._sdkKey);
        }), this._retryFailedLogs(yHt.Startup), this._startBackgroundFlushInterval());
    }
    async stop() {
        this._flushIntervalId && (clearInterval(this._flushIntervalId), this._flushIntervalId = null), delete bHt[this._sdkKey], await this.flush();
    }
    async flush() {
        for(this._appendAndResetNonExposedChecks(); this._queue.length > 0;){
            if (rLn() || await new Promise((n)=>setTimeout(n, 0)), rLn()) {
                const n = this._queue;
                this._queue = [], n.length > 0 && await this._sendEvents(n);
                return;
            }
            const t = this._queue.splice(0, vfd);
            if (t.length === 0) return;
            await this._sendEvents(t);
        }
    }
    _quickFlushIfNeeded() {
        this._hasRunQuickFlush || (this._hasRunQuickFlush = !0, !(Date.now() - this._creationTime > Ato) && setTimeout(()=>$in._safeFlushAndForget(this._sdkKey), Ato));
    }
    _shouldLogEvent(t) {
        if (this._options?.loggingEnabled !== "always" && tLn()) return !1;
        if (!afd(t)) return !0;
        const n = t.user ? t.user : {
            statsigEnvironment: void 0
        }, i = nfd(this._sdkKey, n), r = t.metadata ? t.metadata : {}, s = [
            t.eventName,
            i,
            r.gate,
            r.config,
            r.ruleID,
            r.allocatedExperiment,
            r.parameterName,
            String(r.isExplicitParameter),
            r.reason
        ].join("|"), o = this._lastExposureTimeMap[s], a = Date.now();
        return o && a - o < yfd ? !1 : (this._lastExposureTimeMapSize > bfd && (this._lastExposureTimeMap = {}, this._lastExposureTimeMapSize = 0), this._lastExposureTimeMap[s] === void 0 && this._lastExposureTimeMapSize++, this._lastExposureTimeMap[s] = a, !0);
    }
    async _sendEvents(t, n = !0) {
        if (this._loggingEnabled === "disabled") return n && this._saveFailedLogsToStorage(t), !1;
        try {
            const r = rLn() && this._network.isBeaconSupported() && this._options?.networkConfig?.networkOverrideFunc == null;
            return this._emitter({
                name: "pre_logs_flushed",
                events: t
            }), (r ? this._sendEventsViaBeacon(t) : await this._sendEventsViaPost(t)).success ? (this._emitter({
                name: "logs_flushed",
                events: t
            }), !0) : ($E.warn("Failed to flush events."), n && this._saveFailedLogsToStorage(t), !1);
        } catch  {
            return $E.warn("Failed to flush events."), !1;
        }
    }
    async _sendEventsViaPost(t) {
        const i = (await this._network.post(this._getRequestData(t)))?.code ?? -1;
        return {
            success: i >= 200 && i < 300
        };
    }
    _sendEventsViaBeacon(t) {
        return {
            success: this._network.beacon(this._getRequestData(t))
        };
    }
    _getRequestData(t) {
        return {
            sdkKey: this._sdkKey,
            data: {
                events: t
            },
            urlConfig: this._logEventUrlConfig,
            retries: 3,
            isCompressable: !0,
            params: {
                [Q4e.EventCount]: String(t.length)
            },
            credentials: "same-origin"
        };
    }
    _saveFailedLogsToStorage(t) {
        const n = this._getStorageKey();
        try {
            const i = iLn(n);
            for(i && i.length > 0 && (t = i.concat(t)); t.length > Sfd;)t.shift();
            cHi(n, t);
        } catch  {
            $E.warn("Unable to save failed logs to storage");
        }
    }
    _retryFailedLogs(t) {
        const n = this._getStorageKey();
        (async ()=>{
            V3.isReady() || await V3.isReadyResolver();
            const i = iLn(n);
            if (!i) return;
            t === yHt.Startup && V3.removeItem(n), await this._sendEvents(i, t === yHt.Startup) && t === yHt.GainedFocus && V3.removeItem(n);
        })().catch(()=>{
            $E.warn("Failed to flush stored logs");
        });
    }
    _getStorageKey() {
        return `statsig.failed_logs.${AJe(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(t) {
        t.user && (t.user = {
            ...t.user
        }, delete t.user.privateAttributes);
        const n = {}, i = this._getCurrentPageUrl();
        i && (n.statsigMetadata = {
            currentPage: i
        });
        const r = {
            ...t,
            ...n
        };
        $E.debug("Enqueued Event:", r), this._queue.push(r);
    }
    _appendAndResetNonExposedChecks() {
        Object.keys(this._nonExposedChecks).length !== 0 && (this._normalizeAndAppendEvent({
            eventName: "statsig::non_exposed_checks",
            user: null,
            time: Date.now(),
            metadata: {
                checks: {
                    ...this._nonExposedChecks
                }
            }
        }), this._nonExposedChecks = {});
    }
    _getCurrentPageUrl() {
        if (this._options?.includeCurrentPageUrlWithEvents !== !1) return sfd();
    }
    _startBackgroundFlushInterval() {
        const t = this._options?.loggingIntervalMs ?? _fd, n = setInterval(()=>{
            const i = bHt[this._sdkKey];
            !i || i._flushIntervalId !== n ? clearInterval(n) : $in._safeFlushAndForget(this._sdkKey);
        }, t);
        this._flushIntervalId = n;
    }
};

}
