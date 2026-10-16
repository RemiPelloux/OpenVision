import { Cb, nU } from "./model_2.js";
import { x } from "./tslib.es6.js";
var $ze, l5c;
export { $ze, l5c };
var __wakaru_rvg_initialized = false;
export function rvg() {
if (__wakaru_rvg_initialized) return;
__wakaru_rvg_initialized = true;
"use strict";
x(), Cb(), $ze = nU.Right, l5c = class {
    constructor(e){
        this.persist = 0, this._requiredLanes = 1, this.lanes = new Uint8Array(Math.ceil((e + 1) * $ze / 8));
    }
    reset(e) {
        const t = Math.ceil((e + 1) * $ze / 8);
        this.lanes.length < t ? this.lanes = new Uint8Array(t) : this.lanes.fill(0), this._requiredLanes = 1;
    }
    get requiredLanes() {
        return this._requiredLanes;
    }
    push(e, t, n) {
        n && (this.persist |= 1 << e - 1);
        for(let i = t.startLineNumber; i <= t.endLineNumber; i++){
            const r = $ze * i + (e - 1);
            this.lanes[r >>> 3] |= 1 << r % 8, this._requiredLanes = Math.max(this._requiredLanes, this.countAtLine(i));
        }
    }
    getLanesAtLine(e) {
        const t = [];
        let n = $ze * e;
        for(let i = 0; i < $ze; i++)(this.persist & 1 << i || this.lanes[n >>> 3] & 1 << n % 8) && t.push(i + 1), n++;
        return t.length ? t : [
            nU.Center
        ];
    }
    countAtLine(e) {
        let t = $ze * e, n = 0;
        for(let i = 0; i < $ze; i++)(this.persist & 1 << i || this.lanes[t >>> 3] & 1 << t % 8) && n++, t++;
        return n;
    }
};

}
