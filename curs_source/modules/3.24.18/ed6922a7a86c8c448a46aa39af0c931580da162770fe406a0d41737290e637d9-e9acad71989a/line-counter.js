import { x } from "./tslib.es6.js";
var els;
export { els };
var __wakaru_tls_initialized = false;
export function tls() {
if (__wakaru_tls_initialized) return;
__wakaru_tls_initialized = true;
x(), els = class {
    constructor(){
        this.lineStarts = [], this.addNewLine = (e)=>this.lineStarts.push(e), this.linePos = (e)=>{
            let t = 0, n = this.lineStarts.length;
            for(; t < n;){
                const r = t + n >> 1;
                this.lineStarts[r] < e ? t = r + 1 : n = r;
            }
            if (this.lineStarts[t] === e) return {
                line: t + 1,
                col: 1
            };
            if (t === 0) return {
                line: 0,
                col: e
            };
            const i = this.lineStarts[t - 1];
            return {
                line: t,
                col: e - i + 1
            };
        };
    }
};

}
