"use strict";
require.d(exports, {
    Q: ()=>s
});
var n = require("./module-41011.js");
class s {
    static setTimeoutFn = setTimeout;
    beta;
    minCapacity;
    minFillRate;
    scaleConstant;
    smooth;
    enabled = !1;
    availableTokens = 0;
    lastMaxRate = 0;
    measuredTxRate = 0;
    requestCount = 0;
    fillRate;
    lastThrottleTime;
    lastTimestamp = 0;
    lastTxRateBucket;
    maxCapacity;
    timeWindow = 0;
    constructor(e){
        this.beta = e?.beta ?? .7, this.minCapacity = e?.minCapacity ?? 1, this.minFillRate = e?.minFillRate ?? .5, this.scaleConstant = e?.scaleConstant ?? .4, this.smooth = e?.smooth ?? .8, this.lastThrottleTime = this.getCurrentTimeInSeconds(), this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds()), this.fillRate = this.minFillRate, this.maxCapacity = this.minCapacity;
    }
    async getSendToken() {
        return this.acquireTokenBucket(1);
    }
    updateClientSendingRate(e) {
        let t;
        this.updateMeasuredRate();
        const r = e;
        if ("THROTTLING" === r?.errorType || (0, n.Qb)(r?.error ?? e)) {
            const e = this.enabled ? Math.min(this.measuredTxRate, this.fillRate) : this.measuredTxRate;
            this.lastMaxRate = e, this.calculateTimeWindow(), this.lastThrottleTime = this.getCurrentTimeInSeconds(), t = this.cubicThrottle(e), this.enableTokenBucket();
        } else this.calculateTimeWindow(), t = this.cubicSuccess(this.getCurrentTimeInSeconds());
        const s = Math.min(t, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(s);
    }
    getCurrentTimeInSeconds() {
        return Date.now() / 1e3;
    }
    async acquireTokenBucket(e) {
        if (this.enabled) {
            for(this.refillTokenBucket(); e > this.availableTokens;){
                const t = (e - this.availableTokens) / this.fillRate * 1e3;
                await new Promise((e)=>s.setTimeoutFn(e, t)), this.refillTokenBucket();
            }
            this.availableTokens = this.availableTokens - e;
        }
    }
    refillTokenBucket() {
        const e = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) return void (this.lastTimestamp = e);
        const t = (e - this.lastTimestamp) * this.fillRate;
        this.availableTokens = Math.min(this.maxCapacity, this.availableTokens + t), this.lastTimestamp = e;
    }
    calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
    }
    cubicThrottle(e) {
        return this.getPrecise(e * this.beta);
    }
    cubicSuccess(e) {
        return this.getPrecise(this.scaleConstant * Math.pow(e - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
        this.enabled = !0;
    }
    updateTokenBucketRate(e) {
        this.refillTokenBucket(), this.fillRate = Math.max(e, this.minFillRate), this.maxCapacity = Math.max(e, this.minCapacity), this.availableTokens = Math.min(this.availableTokens, this.maxCapacity);
    }
    updateMeasuredRate() {
        const e = this.getCurrentTimeInSeconds(), t = Math.floor(2 * e) / 2;
        if (this.requestCount++, t > this.lastTxRateBucket) {
            const e = this.requestCount / (t - this.lastTxRateBucket);
            this.measuredTxRate = this.getPrecise(e * this.smooth + this.measuredTxRate * (1 - this.smooth)), this.requestCount = 0, this.lastTxRateBucket = t;
        }
    }
    getPrecise(e) {
        return parseFloat(e.toFixed(8));
    }
}
