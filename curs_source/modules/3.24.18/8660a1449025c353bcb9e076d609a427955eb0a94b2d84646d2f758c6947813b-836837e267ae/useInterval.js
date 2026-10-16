import { E } from "./tslib.es6.js";
import { rRr } from "./useOnMount.js";
import { jQ } from "./useRefWithInit.js";
import { M7, RRe } from "./useTimeout.js";
var NCp, LCp, OCp, J2a, FCp;
export { FCp, J2a, LCp, NCp, OCp };
var __wakaru_fS1_initialized = false;
export function fS1() {
if (__wakaru_fS1_initialized) return;
__wakaru_fS1_initialized = true;
E(), jQ(), rRr(), M7(), NCp = Object.defineProperty, LCp = (t, e, n)=>e in t ? NCp(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, OCp = (t, e, n)=>LCp(t, typeof e != "symbol" ? e + "" : e, n), J2a = 0, FCp = class A2b extends RRe {
    constructor(){
        super(...arguments), OCp(this, "clear", ()=>{
            this.currentId !== J2a && (clearInterval(this.currentId), this.currentId = J2a);
        });
    }
    static create() {
        return new A2b;
    }
    start(e, n) {
        this.clear(), this.currentId = setInterval(()=>{
            n();
        }, e);
    }
};

}
