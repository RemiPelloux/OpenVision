import { Gt, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var rHd, Ofn;
export { Ofn, rHd };
var __wakaru_sHd_initialized = false;
export function sHd() {
if (__wakaru_sHd_initialized) return;
__wakaru_sHd_initialized = true;
"use strict";
E(), Gt(), rHd = class {
    constructor(){
        this._onDidChange = new tt, this.onDidChange = this._onDidChange.event, this._enabled = !0;
    }
    get enabled() {
        return this._enabled;
    }
    enable() {
        this._enabled = !0, this._onDidChange.fire();
    }
    disable() {
        this._enabled = !1, this._onDidChange.fire();
    }
}, Ofn = new rHd;

}
