import { bt, ve } from "./HVr.js";
import { x } from "./tslib.es6.js";
var NMc, Qqe;
export { NMc, Qqe };
var __wakaru_afi_initialized = false;
export function afi() {
if (__wakaru_afi_initialized) return;
__wakaru_afi_initialized = true;
"use strict";
x(), bt(), NMc = class {
    constructor(){
        this._inputMode = "insert", this._onDidChangeInputMode = new ve, this.onDidChangeInputMode = this._onDidChangeInputMode.event;
    }
    getInputMode() {
        return this._inputMode;
    }
    setInputMode(e) {
        this._inputMode = e, this._onDidChangeInputMode.fire(this._inputMode);
    }
}, Qqe = new NMc;

}
