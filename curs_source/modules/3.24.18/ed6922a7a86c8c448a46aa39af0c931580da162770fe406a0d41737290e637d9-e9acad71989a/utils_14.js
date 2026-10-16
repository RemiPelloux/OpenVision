import { qy } from "./charCode.js";
import { x } from "./tslib.es6.js";
var RFt, Nns, Ons;
export { Nns, Ons, RFt };
var __wakaru_eyi_initialized = false;
export function eyi() {
if (__wakaru_eyi_initialized) return;
__wakaru_eyi_initialized = true;
"use strict";
x(), qy(), RFt = class {
    constructor(e, t){
        this.width = e, this.height = t, this.array = [], this.array = new Array(e * t);
    }
    get(e, t) {
        return this.array[e + t * this.width];
    }
    set(e, t, n) {
        this.array[e + t * this.width] = n;
    }
}, Nns = class VIa {
    constructor(t, n, i){
        this.range = t, this.lines = n, this.source = i, this.histogram = [];
        let r = 0;
        for(let s = t.startLineNumber - 1; s < t.endLineNumberExclusive - 1; s++){
            const o = n[s];
            for(let c = 0; c < o.length; c++){
                r++;
                const l = o[c], u = VIa.getKey(l);
                this.histogram[u] = (this.histogram[u] || 0) + 1;
            }
            r++;
            const a = VIa.getKey(`
`);
            this.histogram[a] = (this.histogram[a] || 0) + 1;
        }
        this.totalCount = r;
    }
    static getKey(t) {
        let n = this.chrKeys.get(t);
        return n === void 0 && (n = this.chrKeys.size, this.chrKeys.set(t, n)), n;
    }
    computeSimilarity(t) {
        let n = 0;
        const i = Math.max(this.histogram.length, t.histogram.length);
        for(let r = 0; r < i; r++)n += Math.abs((this.histogram[r] ?? 0) - (t.histogram[r] ?? 0));
        return 1 - n / (this.totalCount + t.totalCount);
    }
}, Nns.chrKeys = new Map, Ons = Nns;

}
