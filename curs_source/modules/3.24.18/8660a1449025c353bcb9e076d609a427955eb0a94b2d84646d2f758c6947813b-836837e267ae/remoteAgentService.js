import { Wd } from "./Iwo.js";
import { jn } from "./SZu.js";
import { qn } from "./async.js";
import { It } from "./instantiation.js";
import { dCt } from "./remoteAgentConnection.js";
import { E } from "./tslib.es6.js";
var Nh, got;
export { Nh, got };
var __wakaru_Sg_initialized = false;
export function Sg() {
if (__wakaru_Sg_initialized) return;
__wakaru_Sg_initialized = true;
"use strict";
E(), It(), dCt(), qn(), Nh = jn("remoteAgentService"), got = new class {
    constructor(){
        this.maxSampleCount = 5, this.sampleDelay = 2e3, this.initial = [], this.maxInitialCount = 3, this.average = [], this.maxAverageCount = 100, this.highLatencyMultiple = 2, this.highLatencyMinThreshold = 500, this.highLatencyMaxThreshold = 1500, this.lastMeasurement = void 0;
    }
    get latency() {
        return this.lastMeasurement;
    }
    async measure(t) {
        let e = 1 / 0;
        for(let i = 0; i < this.maxSampleCount; i++){
            const r = await t.getRoundTripTime();
            if (r === void 0) return;
            e = Math.min(e, r / 2), await Wd(this.sampleDelay);
        }
        this.average.push(e), this.average.length > this.maxAverageCount && this.average.shift();
        let n;
        return this.initial.length < this.maxInitialCount ? this.initial.push(e) : n = this.initial.reduce((i, r)=>i + r, 0) / this.initial.length, this.lastMeasurement = {
            initial: n,
            current: e,
            average: this.average.reduce((i, r)=>i + r, 0) / this.average.length,
            high: typeof n > "u" ? !1 : e > this.highLatencyMaxThreshold || e > this.highLatencyMinThreshold && e > n * this.highLatencyMultiple
        }, this.lastMeasurement;
    }
};

}
