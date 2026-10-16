import { E } from "./tslib.es6.js";
var iAr;
export { iAr };
var __wakaru_rAr_initialized = false;
export function rAr() {
if (__wakaru_rAr_initialized) return;
__wakaru_rAr_initialized = true;
E(), iAr = class {
    constructor(){
        this.lineStarts = [], this.addNewLine = (t)=>this.lineStarts.push(t), this.linePos = (t)=>{
            let e = 0, n = this.lineStarts.length;
            for(; e < n;){
                const r = e + n >> 1;
                this.lineStarts[r] < t ? e = r + 1 : n = r;
            }
            if (this.lineStarts[e] === t) return {
                line: e + 1,
                col: 1
            };
            if (e === 0) return {
                line: 0,
                col: t
            };
            const i = this.lineStarts[e - 1];
            return {
                line: e,
                col: t - i + 1
            };
        };
    }
};

}
