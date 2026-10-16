import { Gt, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var nFd, Mbt;
export { Mbt, nFd };
var __wakaru_Ykr_initialized = false;
export function Ykr() {
if (__wakaru_Ykr_initialized) return;
__wakaru_Ykr_initialized = true;
"use strict";
E(), Gt(), nFd = class {
    constructor(){
        this._inputMode = "insert", this._onDidChangeInputMode = new tt, this.onDidChangeInputMode = this._onDidChangeInputMode.event;
    }
    getInputMode() {
        return this._inputMode;
    }
    setInputMode(t) {
        this._inputMode = t, this._onDidChangeInputMode.fire(this._inputMode);
    }
}, Mbt = new nFd;

}
