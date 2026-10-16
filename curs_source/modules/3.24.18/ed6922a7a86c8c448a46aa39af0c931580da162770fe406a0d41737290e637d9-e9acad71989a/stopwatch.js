import { x } from "./tslib.es6.js";
var hxc, Vy;
export { Vy, hxc };
var __wakaru_aA_initialized = false;
export function aA() {
if (__wakaru_aA_initialized) return;
__wakaru_aA_initialized = true;
"use strict";
x(), hxc = globalThis.performance && typeof globalThis.performance.now == "function", Vy = class _Sm {
    static create(t) {
        return new _Sm(t);
    }
    constructor(t){
        this._now = hxc && t === !1 ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
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
