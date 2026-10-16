import { x } from "./tslib.es6.js";
var kpt, xze, fOt;
export { fOt, kpt, xze };
var __wakaru_NQr_initialized = false;
export function NQr() {
if (__wakaru_NQr_initialized) return;
__wakaru_NQr_initialized = true;
"use strict";
x(), kpt = ((e)=>(e[e.Disabled = 0] = "Disabled", e[e.EnabledForActive = 1] = "EnabledForActive", e[e.Enabled = 2] = "Enabled", e))(kpt || {}), xze = class {
    constructor(e, t, n, i, r, s){
        if (this.visibleColumn = e, this.column = t, this.className = n, this.horizontalLine = i, this.forWrappedLinesAfterColumn = r, this.forWrappedLinesBeforeOrAtColumn = s, e !== -1 == (t !== -1)) throw new Error;
    }
}, fOt = class {
    constructor(e, t){
        this.top = e, this.endColumn = t;
    }
};

}
