import { Gt, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var Kov, _Ln;
export { Kov, _Ln };
var __wakaru_BGl_initialized = false;
export function BGl() {
if (__wakaru_BGl_initialized) return;
__wakaru_BGl_initialized = true;
"use strict";
E(), Gt(), Kov = class {
    constructor(){
        this._onDidChange = new tt, this.onDidChange = this._onDidChange.event;
    }
    notifyChanged(t) {
        this._onDidChange.fire(t);
    }
}, _Ln = new Kov;

}
