import { x } from "./tslib.es6.js";
var vbi, mFt;
export { mFt, vbi };
var __wakaru_gFt_initialized = false;
export function gFt() {
if (__wakaru_gFt_initialized) return;
__wakaru_gFt_initialized = true;
"use strict";
x(), vbi = class {
    constructor(e){
        this._prefix = e, this._lastId = 0;
    }
    nextId() {
        return this._prefix + ++this._lastId;
    }
}, mFt = new vbi("id#");

}
