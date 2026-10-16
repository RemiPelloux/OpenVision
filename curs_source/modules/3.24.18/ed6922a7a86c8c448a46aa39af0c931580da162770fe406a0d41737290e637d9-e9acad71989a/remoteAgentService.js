import { Kl } from "./HVr.js";
import { bn } from "./async.js";
import { Ze } from "./instantiation.js";
import { vn } from "./qIc.js";
import { ykt } from "./remoteAgentConnection.js";
import { x } from "./tslib.es6.js";
var Kd, uUe;
export { Kd, uUe };
var __wakaru_Ip_initialized = false;
export function Ip() {
if (__wakaru_Ip_initialized) return;
__wakaru_Ip_initialized = true;
"use strict";
x(), Ze(), ykt(), bn(), Kd = vn("remoteAgentService"), uUe = new class {
    constructor(){
        this.maxSampleCount = 5, this.sampleDelay = 2e3, this.initial = [], this.maxInitialCount = 3, this.average = [], this.maxAverageCount = 100, this.highLatencyMultiple = 2, this.highLatencyMinThreshold = 500, this.highLatencyMaxThreshold = 1500, this.lastMeasurement = void 0;
    }
    get latency() {
        return this.lastMeasurement;
    }
    async measure(e) {
        let t = 1 / 0;
        for(let i = 0; i < this.maxSampleCount; i++){
            const r = await e.getRoundTripTime();
            if (r === void 0) return;
            t = Math.min(t, r / 2), await Kl(this.sampleDelay);
        }
        this.average.push(t), this.average.length > this.maxAverageCount && this.average.shift();
        let n;
        return this.initial.length < this.maxInitialCount ? this.initial.push(t) : n = this.initial.reduce((i, r)=>i + r, 0) / this.initial.length, this.lastMeasurement = {
            initial: n,
            current: t,
            average: this.average.reduce((i, r)=>i + r, 0) / this.average.length,
            high: typeof n > "u" ? !1 : t > this.highLatencyMaxThreshold || t > this.highLatencyMinThreshold && t > n * this.highLatencyMultiple
        }, this.lastMeasurement;
    }
};

}
