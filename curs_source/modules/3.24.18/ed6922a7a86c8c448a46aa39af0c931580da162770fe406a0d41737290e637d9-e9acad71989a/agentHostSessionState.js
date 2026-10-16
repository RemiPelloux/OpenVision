import { Se, bt, ve, we } from "./HVr.js";
import { x } from "./tslib.es6.js";
var kTh;
export { kTh };
var __wakaru_bQv_initialized = false;
export function bQv() {
if (__wakaru_bQv_initialized) return;
__wakaru_bQv_initialized = true;
"use strict";
x(), bt(), Se(), kTh = class extends we {
    constructor(e, t){
        super(), this.sessionId = e, this.options = t, this.watchEmitter = this._register(new ve), this.attachEmitter = this._register(new ve), this.closeEmitter = this._register(new ve), this.eventLog = [], this.backgroundWork = new Map, this.lastEventId = 0n;
    }
    dispose() {
        this._store.isDisposed || this.closeEmitter.fire(), super.dispose();
    }
};

}
