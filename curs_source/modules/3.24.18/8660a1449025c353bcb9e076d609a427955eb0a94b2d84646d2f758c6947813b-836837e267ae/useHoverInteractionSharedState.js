import { E } from "./tslib.es6.js";
import { rRr } from "./useOnMount.js";
import { jQ } from "./useRefWithInit.js";
import { M7, RRe } from "./useTimeout.js";
var Hah, Wah, pJo, Gah, zli;
export { Gah, Hah, Wah, pJo, zli };
var __wakaru_mJo_initialized = false;
export function mJo() {
if (__wakaru_mJo_initialized) return;
__wakaru_mJo_initialized = true;
E(), rRr(), jQ(), M7(), Hah = Object.defineProperty, Wah = (t, e, n)=>e in t ? Hah(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, pJo = (t, e, n)=>Wah(t, typeof e != "symbol" ? e + "" : e, n), Gah = class d2b {
    constructor(){
        pJo(this, "dispose", ()=>{
            this.openChangeTimeout.clear(), this.restTimeout.clear();
        }), pJo(this, "disposeEffect", ()=>this.dispose), this.pointerType = void 0, this.interactedInside = !1, this.handler = void 0, this.blockMouseMove = !0, this.performedPointerEventsMutation = !1, this.pointerEventsScopeElement = null, this.pointerEventsReferenceElement = null, this.pointerEventsFloatingElement = null, this.restTimeoutPending = !1, this.openChangeTimeout = new RRe, this.restTimeout = new RRe, this.handleCloseOptions = void 0;
    }
    static create() {
        return new d2b;
    }
}, zli = new WeakMap;

}
