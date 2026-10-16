import { E } from "./tslib.es6.js";
var J9t, ryt, rfn;
export { J9t, rfn, ryt };
var __wakaru_zjo_initialized = false;
export function zjo() {
if (__wakaru_zjo_initialized) return;
__wakaru_zjo_initialized = true;
"use strict";
E(), J9t = ((t)=>(t[t.Disabled = 0] = "Disabled", t[t.EnabledForActive = 1] = "EnabledForActive", t[t.Enabled = 2] = "Enabled", t))(J9t || {}), ryt = class {
    constructor(t, e, n, i, r, s){
        if (this.visibleColumn = t, this.column = e, this.className = n, this.horizontalLine = i, this.forWrappedLinesAfterColumn = r, this.forWrappedLinesBeforeOrAtColumn = s, t !== -1 == (e !== -1)) throw new Error;
    }
}, rfn = class {
    constructor(t, e){
        this.top = t, this.endColumn = e;
    }
};

}
