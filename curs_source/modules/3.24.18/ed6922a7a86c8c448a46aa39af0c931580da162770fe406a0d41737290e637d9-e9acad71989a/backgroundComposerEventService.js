import { Se, bt, ve, we } from "./HVr.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var GVt, T_h;
export { GVt, T_h };
var __wakaru_QFn_initialized = false;
export function QFn() {
if (__wakaru_QFn_initialized) return;
__wakaru_QFn_initialized = true;
"use strict";
x(), Ze(), Se(), Pn(), bt(), GVt = vn("backgroundComposerEventService"), T_h = class extends we {
    constructor(){
        super(...arguments), this._onDidBcStatusChangeEmitter = this._register(new ve), this.onDidBcStatusChange = this._onDidBcStatusChangeEmitter.event, this._onDidRequestPauseEmitter = this._register(new ve), this.onDidRequestPause = this._onDidRequestPauseEmitter.event, this._onDidRequestOptimizedDiffDetailsEmitter = this._register(new ve), this.onDidRequestOptimizedDiffDetails = this._onDidRequestOptimizedDiffDetailsEmitter.event, this._onDidResolveOptimizedDiffDetailsEmitter = this._register(new ve), this.onDidResolveOptimizedDiffDetails = this._onDidResolveOptimizedDiffDetailsEmitter.event;
    }
    fireDidBcStatusChange(e) {
        this._onDidBcStatusChangeEmitter.fire(e);
    }
    fireDidRequestPause(e) {
        this._onDidRequestPauseEmitter.fire(e);
    }
    fireDidRequestOptimizedDiffDetails(e) {
        this._onDidRequestOptimizedDiffDetailsEmitter.fire(e);
    }
    fireDidResolveOptimizedDiffDetails(e) {
        this._onDidResolveOptimizedDiffDetailsEmitter.fire(e);
    }
}, mn(GVt, T_h, 2);

}
