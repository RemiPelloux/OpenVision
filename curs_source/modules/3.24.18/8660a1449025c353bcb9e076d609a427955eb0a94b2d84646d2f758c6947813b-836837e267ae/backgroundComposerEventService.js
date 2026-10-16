import { Gt, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var $xn, $ig;
export { $ig, $xn };
var __wakaru_rEi_initialized = false;
export function rEi() {
if (__wakaru_rEi_initialized) return;
__wakaru_rEi_initialized = true;
"use strict";
E(), It(), Qe(), Rn(), Gt(), $xn = jn("backgroundComposerEventService"), $ig = class extends st {
    constructor(){
        super(...arguments), this._onDidBcStatusChangeEmitter = this._register(new tt), this.onDidBcStatusChange = this._onDidBcStatusChangeEmitter.event, this._onDidRequestPauseEmitter = this._register(new tt), this.onDidRequestPause = this._onDidRequestPauseEmitter.event, this._onDidRequestOptimizedDiffDetailsEmitter = this._register(new tt), this.onDidRequestOptimizedDiffDetails = this._onDidRequestOptimizedDiffDetailsEmitter.event, this._onDidResolveOptimizedDiffDetailsEmitter = this._register(new tt), this.onDidResolveOptimizedDiffDetails = this._onDidResolveOptimizedDiffDetailsEmitter.event;
    }
    fireDidBcStatusChange(t) {
        this._onDidBcStatusChangeEmitter.fire(t);
    }
    fireDidRequestPause(t) {
        this._onDidRequestPauseEmitter.fire(t);
    }
    fireDidRequestOptimizedDiffDetails(t) {
        this._onDidRequestOptimizedDiffDetailsEmitter.fire(t);
    }
    fireDidResolveOptimizedDiffDetails(t) {
        this._onDidResolveOptimizedDiffDetailsEmitter.fire(t);
    }
}, bn($xn, $ig, 2);

}
