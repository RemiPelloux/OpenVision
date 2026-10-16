import { E } from "./tslib.es6.js";
import { sI0 } from "./wTv.js";
var RIv;
export { RIv };
var __wakaru_PIv_initialized = false;
export function PIv() {
if (__wakaru_PIv_initialized) return;
__wakaru_PIv_initialized = true;
"use strict";
E(), RIv = class {
    constructor(t){
        this.generation = 0, this.latestDesiredId = t;
    }
    get value() {
        return this.generation;
    }
    get desiredId() {
        return this.latestDesiredId;
    }
    claim(t) {
        return t !== this.latestDesiredId && (this.latestDesiredId = t, this.generation += 1), this.generation;
    }
    invalidate() {
        return this.latestDesiredId = void 0, this.generation += 1, this.generation;
    }
    isCurrent(t) {
        return sI0({
            capturedGeneration: t,
            latestGeneration: this.generation
        });
    }
};

}
