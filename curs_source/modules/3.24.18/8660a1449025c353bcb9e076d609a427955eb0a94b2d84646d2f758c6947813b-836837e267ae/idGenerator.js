import { E } from "./tslib.es6.js";
var zCr, qfn;
export { qfn, zCr };
var __wakaru_zfn_initialized = false;
export function zfn() {
if (__wakaru_zfn_initialized) return;
__wakaru_zfn_initialized = true;
"use strict";
E(), zCr = class {
    constructor(t){
        this._prefix = t, this._lastId = 0;
    }
    nextId() {
        return this._prefix + ++this._lastId;
    }
}, qfn = new zCr("id#");

}
