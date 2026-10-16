import { x } from "./tslib.es6.js";
import { i0i } from "./useOnMount.js";
import { xW } from "./useRefWithInit.js";
import { A3, Rfe } from "./useTimeout.js";
var isl, rsl, phs, ssl, ISn;
export { ISn, isl, phs, rsl, ssl };
var __wakaru_mhs_initialized = false;
export function mhs() {
if (__wakaru_mhs_initialized) return;
__wakaru_mhs_initialized = true;
x(), i0i(), xW(), A3(), isl = Object.defineProperty, rsl = (e, t, n)=>t in e ? isl(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, phs = (e, t, n)=>rsl(e, typeof t != "symbol" ? t + "" : t, n), ssl = class Rwm {
    constructor(){
        phs(this, "dispose", ()=>{
            this.openChangeTimeout.clear(), this.restTimeout.clear();
        }), phs(this, "disposeEffect", ()=>this.dispose), this.pointerType = void 0, this.interactedInside = !1, this.handler = void 0, this.blockMouseMove = !0, this.performedPointerEventsMutation = !1, this.pointerEventsScopeElement = null, this.pointerEventsReferenceElement = null, this.pointerEventsFloatingElement = null, this.restTimeoutPending = !1, this.openChangeTimeout = new Rfe, this.restTimeout = new Rfe, this.handleCloseOptions = void 0;
    }
    static create() {
        return new Rwm;
    }
}, ISn = new WeakMap;

}
