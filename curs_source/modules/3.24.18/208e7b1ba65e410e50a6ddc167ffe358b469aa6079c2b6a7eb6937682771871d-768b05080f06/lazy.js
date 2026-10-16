import { h } from "./tslib.es6.js";
var Ci;
export { Ci };
var __wakaru_Xo_initialized = false;
export function Xo() {
if (__wakaru_Xo_initialized) return;
__wakaru_Xo_initialized = true;
"use strict";
h(), Ci = class {
    constructor(e){
        this.executor = e, this._didRun = !1;
    }
    get hasValue() {
        return this._didRun;
    }
    get value() {
        if (!this._didRun) try {
            this._value = this.executor();
        } catch (e) {
            this._error = e;
        } finally{
            this._didRun = !0;
        }
        if (this._error) throw this._error;
        return this._value;
    }
    get rawValue() {
        return this._value;
    }
};

}
