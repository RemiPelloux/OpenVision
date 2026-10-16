import { x } from "./tslib.es6.js";
var PTc;
export { PTc };
var __wakaru_Acg_initialized = false;
export function Acg() {
if (__wakaru_Acg_initialized) return;
__wakaru_Acg_initialized = true;
"use strict";
x(), PTc = class {
    constructor(){
        this._sessionValue = 0, this._sessionEntries = [];
    }
    _processEntry(e) {
        if (e.hadRecentInput) return;
        const t = this._sessionEntries[0], n = this._sessionEntries[this._sessionEntries.length - 1];
        this._sessionValue && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (this._sessionValue += e.value, this._sessionEntries.push(e)) : (this._sessionValue = e.value, this._sessionEntries = [
            e
        ]), this._onAfterProcessingUnexpectedShift?.(e);
    }
};

}
