import { w } from "./tslib.es6.js";
var As, ks;
export { As, ks };
var __wakaru_ta_initialized = false;
export function ta() {
if (__wakaru_ta_initialized) return;
__wakaru_ta_initialized = true;
"use strict";
w(), As = globalThis.performance && typeof globalThis.performance.now == "function", ks = class Co {
    static create(t) {
        return new Co(t);
    }
    constructor(t){
        this._now = As && t === !1 ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
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
