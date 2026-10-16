import { Gt, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var $Ud, KAe;
export { $Ud, KAe };
var __wakaru_aBt_initialized = false;
export function aBt() {
if (__wakaru_aBt_initialized) return;
__wakaru_aBt_initialized = true;
"use strict";
E(), Gt(), $Ud = class {
    constructor(){
        this._tabFocus = !1, this._onDidChangeTabFocus = new tt, this.onDidChangeTabFocus = this._onDidChangeTabFocus.event;
    }
    getTabFocusMode() {
        return this._tabFocus;
    }
    setTabFocusMode(t) {
        this._tabFocus = t, this._onDidChangeTabFocus.fire(this._tabFocus);
    }
}, KAe = new $Ud;

}
