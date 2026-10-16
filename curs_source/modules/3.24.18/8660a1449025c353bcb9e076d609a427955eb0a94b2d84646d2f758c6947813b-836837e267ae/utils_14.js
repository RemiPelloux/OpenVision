import { Cw } from "./charCode.js";
import { E } from "./tslib.es6.js";
var svn, jGo, $Go;
export { $Go, jGo, svn };
var __wakaru_xTr_initialized = false;
export function xTr() {
if (__wakaru_xTr_initialized) return;
__wakaru_xTr_initialized = true;
"use strict";
E(), Cw(), svn = class {
    constructor(t, e){
        this.width = t, this.height = e, this.array = [], this.array = new Array(t * e);
    }
    get(t, e) {
        return this.array[t + e * this.width];
    }
    set(t, e, n) {
        this.array[t + e * this.width] = n;
    }
}, jGo = class IJc {
    constructor(e, n, i){
        this.range = e, this.lines = n, this.source = i, this.histogram = [];
        let r = 0;
        for(let s = e.startLineNumber - 1; s < e.endLineNumberExclusive - 1; s++){
            const o = n[s];
            for(let l = 0; l < o.length; l++){
                r++;
                const c = o[l], u = IJc.getKey(c);
                this.histogram[u] = (this.histogram[u] || 0) + 1;
            }
            r++;
            const a = IJc.getKey(`
`);
            this.histogram[a] = (this.histogram[a] || 0) + 1;
        }
        this.totalCount = r;
    }
    static getKey(e) {
        let n = this.chrKeys.get(e);
        return n === void 0 && (n = this.chrKeys.size, this.chrKeys.set(e, n)), n;
    }
    computeSimilarity(e) {
        let n = 0;
        const i = Math.max(this.histogram.length, e.histogram.length);
        for(let r = 0; r < i; r++)n += Math.abs((this.histogram[r] ?? 0) - (e.histogram[r] ?? 0));
        return 1 - n / (this.totalCount + e.totalCount);
    }
}, jGo.chrKeys = new Map, $Go = jGo;

}
