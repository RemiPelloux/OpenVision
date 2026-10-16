import { x } from "./tslib.es6.js";
import { i0i } from "./useOnMount.js";
import { xW } from "./useRefWithInit.js";
var nil, iil, r0i, NBt, Rfe;
export { NBt, Rfe, iil, nil, r0i };
var __wakaru_A3_initialized = false;
export function A3() {
if (__wakaru_A3_initialized) return;
__wakaru_A3_initialized = true;
x(), xW(), i0i(), nil = Object.defineProperty, iil = (e, t, n)=>t in e ? nil(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, r0i = (e, t, n)=>iil(e, typeof t != "symbol" ? t + "" : t, n), NBt = 0, Rfe = class Awm {
    constructor(){
        r0i(this, "currentId", NBt), r0i(this, "clear", ()=>{
            this.currentId !== NBt && (clearTimeout(this.currentId), this.currentId = NBt);
        }), r0i(this, "disposeEffect", ()=>this.clear);
    }
    static create() {
        return new Awm;
    }
    start(t, n) {
        this.clear(), this.currentId = setTimeout(()=>{
            this.currentId = NBt, n();
        }, t);
    }
    isStarted() {
        return this.currentId !== NBt;
    }
};

}
