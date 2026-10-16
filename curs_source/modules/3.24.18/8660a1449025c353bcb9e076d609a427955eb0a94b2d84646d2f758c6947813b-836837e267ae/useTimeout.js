import { E } from "./tslib.es6.js";
import { rRr } from "./useOnMount.js";
import { jQ } from "./useRefWithInit.js";
var Ush, jsh, sRr, K_n, RRe;
export { K_n, RRe, Ush, jsh, sRr };
var __wakaru_M7_initialized = false;
export function M7() {
if (__wakaru_M7_initialized) return;
__wakaru_M7_initialized = true;
E(), jQ(), rRr(), Ush = Object.defineProperty, jsh = (t, e, n)=>e in t ? Ush(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, sRr = (t, e, n)=>jsh(t, typeof e != "symbol" ? e + "" : e, n), K_n = 0, RRe = class u2b {
    constructor(){
        sRr(this, "currentId", K_n), sRr(this, "clear", ()=>{
            this.currentId !== K_n && (clearTimeout(this.currentId), this.currentId = K_n);
        }), sRr(this, "disposeEffect", ()=>this.clear);
    }
    static create() {
        return new u2b;
    }
    start(e, n) {
        this.clear(), this.currentId = setTimeout(()=>{
            this.currentId = K_n, n();
        }, e);
    }
    isStarted() {
        return this.currentId !== K_n;
    }
};

}
