import { E } from "./tslib.es6.js";
var FYu, Xw;
export { FYu, Xw };
var __wakaru_D3_initialized = false;
export function D3() {
if (__wakaru_D3_initialized) return;
__wakaru_D3_initialized = true;
"use strict";
E(), FYu = globalThis.performance && typeof globalThis.performance.now == "function", Xw = class Wxb {
    static create(e) {
        return new Wxb(e);
    }
    constructor(e){
        this._now = FYu && e === !1 ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
    }
    stop() {
        this._stopTime = this._now();
    }
    reset() {
        this._startTime = this._now(), this._stopTime = -1;
    }
    elapsed() {
        return this._stopTime !== -1 ? this._stopTime - this._startTime : this._now() - this._startTime;
    }
};

}
