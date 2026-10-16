import { x } from "./tslib.es6.js";
import { i0i } from "./useOnMount.js";
import { xW } from "./useRefWithInit.js";
import { A3, Rfe } from "./useTimeout.js";
var Olu, Flu, Blu, IFs, Ulu;
export { Blu, Flu, IFs, Olu, Ulu };
var __wakaru_Hev_initialized = false;
export function Hev() {
if (__wakaru_Hev_initialized) return;
__wakaru_Hev_initialized = true;
x(), xW(), i0i(), A3(), Olu = Object.defineProperty, Flu = (e, t, n)=>t in e ? Olu(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, Blu = (e, t, n)=>Flu(e, typeof t != "symbol" ? t + "" : t, n), IFs = 0, Ulu = class zwm extends Rfe {
    constructor(){
        super(...arguments), Blu(this, "clear", ()=>{
            this.currentId !== IFs && (clearInterval(this.currentId), this.currentId = IFs);
        });
    }
    static create() {
        return new zwm;
    }
    start(t, n) {
        this.clear(), this.currentId = setInterval(()=>{
            n();
        }, t);
    }
};

}
