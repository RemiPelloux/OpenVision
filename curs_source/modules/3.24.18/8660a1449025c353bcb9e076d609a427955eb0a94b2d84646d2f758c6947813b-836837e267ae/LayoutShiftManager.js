import { E } from "./tslib.es6.js";
var eKu;
export { eKu };
var __wakaru_gvy_initialized = false;
export function gvy() {
if (__wakaru_gvy_initialized) return;
__wakaru_gvy_initialized = true;
"use strict";
E(), eKu = class {
    constructor(){
        this._sessionValue = 0, this._sessionEntries = [];
    }
    _processEntry(t) {
        if (t.hadRecentInput) return;
        const e = this._sessionEntries[0], n = this._sessionEntries[this._sessionEntries.length - 1];
        this._sessionValue && e && n && t.startTime - n.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (this._sessionValue += t.value, this._sessionEntries.push(t)) : (this._sessionValue = t.value, this._sessionEntries = [
            t
        ]), this._onAfterProcessingUnexpectedShift?.(t);
    }
};

}
