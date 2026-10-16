import { bt, ve } from "./HVr.js";
import { x } from "./tslib.es6.js";
var V6c, oFt;
export { V6c, oFt };
var __wakaru_j6c_initialized = false;
export function j6c() {
if (__wakaru_j6c_initialized) return;
__wakaru_j6c_initialized = true;
"use strict";
x(), bt(), V6c = class {
    constructor(){
        this._onDidChange = new ve, this.onDidChange = this._onDidChange.event, this._enabled = !0;
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
}, oFt = new V6c;

}
