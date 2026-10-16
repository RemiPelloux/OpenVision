import { h } from "./tslib.es6.js";
var H4, ca;
export { H4, ca };
var __wakaru_Yo_initialized = false;
export function Yo() {
if (__wakaru_Yo_initialized) return;
__wakaru_Yo_initialized = true;
"use strict";
h(), H4 = globalThis.performance && typeof globalThis.performance.now == "function", ca = class H9e {
    static create(t) {
        return new H9e(t);
    }
    constructor(t){
        this._now = H4 && t === !1 ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
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
