import { E } from "./tslib.es6.js";
var ES;
export { ES };
var __wakaru_hP_initialized = false;
export function hP() {
if (__wakaru_hP_initialized) return;
__wakaru_hP_initialized = true;
"use strict";
E(), ES = class {
    constructor(t){
        this.executor = t, this._didRun = !1;
    }
    get hasValue() {
        return this._didRun;
    }
    get value() {
        if (!this._didRun) try {
            this._value = this.executor();
        } catch (t) {
            this._error = t;
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
