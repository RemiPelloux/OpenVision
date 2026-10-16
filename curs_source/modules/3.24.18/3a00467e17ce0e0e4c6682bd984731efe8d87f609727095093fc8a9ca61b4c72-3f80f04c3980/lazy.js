import { w } from "./tslib.es6.js";
var Me;
export { Me };
var __wakaru_Ct_initialized = false;
export function Ct() {
if (__wakaru_Ct_initialized) return;
__wakaru_Ct_initialized = true;
"use strict";
w(), Me = class {
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
