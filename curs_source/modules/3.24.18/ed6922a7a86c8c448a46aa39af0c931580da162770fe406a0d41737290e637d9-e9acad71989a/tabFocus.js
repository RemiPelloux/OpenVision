import { bt, ve } from "./HVr.js";
import { x } from "./tslib.es6.js";
var E5c, Ewe;
export { E5c, Ewe };
var __wakaru_Wfn_initialized = false;
export function Wfn() {
if (__wakaru_Wfn_initialized) return;
__wakaru_Wfn_initialized = true;
"use strict";
x(), bt(), E5c = class {
    constructor(){
        this._tabFocus = !1, this._onDidChangeTabFocus = new ve, this.onDidChangeTabFocus = this._onDidChangeTabFocus.event;
    }
    getTabFocusMode() {
        return this._tabFocus;
    }
    setTabFocusMode(e) {
        this._tabFocus = e, this._onDidChangeTabFocus.fire(this._tabFocus);
    }
}, Ewe = new E5c;

}
