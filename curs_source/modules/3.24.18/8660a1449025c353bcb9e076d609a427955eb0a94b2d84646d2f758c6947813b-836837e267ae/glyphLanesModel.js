import { J0, ihe } from "./model_2.js";
import { E } from "./tslib.es6.js";
var gyt, TUd;
export { TUd, gyt };
var __wakaru_XPy_initialized = false;
export function XPy() {
if (__wakaru_XPy_initialized) return;
__wakaru_XPy_initialized = true;
"use strict";
E(), J0(), gyt = ihe.Right, TUd = class {
    constructor(t){
        this.persist = 0, this._requiredLanes = 1, this.lanes = new Uint8Array(Math.ceil((t + 1) * gyt / 8));
    }
    reset(t) {
        const e = Math.ceil((t + 1) * gyt / 8);
        this.lanes.length < e ? this.lanes = new Uint8Array(e) : this.lanes.fill(0), this._requiredLanes = 1;
    }
    get requiredLanes() {
        return this._requiredLanes;
    }
    push(t, e, n) {
        n && (this.persist |= 1 << t - 1);
        for(let i = e.startLineNumber; i <= e.endLineNumber; i++){
            const r = gyt * i + (t - 1);
            this.lanes[r >>> 3] |= 1 << r % 8, this._requiredLanes = Math.max(this._requiredLanes, this.countAtLine(i));
        }
    }
    getLanesAtLine(t) {
        const e = [];
        let n = gyt * t;
        for(let i = 0; i < gyt; i++)(this.persist & 1 << i || this.lanes[n >>> 3] & 1 << n % 8) && e.push(i + 1), n++;
        return e.length ? e : [
            ihe.Center
        ];
    }
    countAtLine(t) {
        let e = gyt * t, n = 0;
        for(let i = 0; i < gyt; i++)(this.persist & 1 << i || this.lanes[e >>> 3] & 1 << e % 8) && n++, e++;
        return n;
    }
};

}
