import { E } from "./tslib.es6.js";
import { sLl } from "./useOnMount.mjs";
import { jxt } from "./useRefWithInit.mjs";
import { pKe, xct } from "./useTimeout.mjs";
import { fOl } from "./utils.mjs";
var Q2f, k3i;
export { Q2f, k3i };
var __wakaru_J2f_initialized = false;
export function J2f() {
if (__wakaru_J2f_initialized) return;
__wakaru_J2f_initialized = true;
"use client";
E(), sLl(), jxt(), xct(), fOl(), Q2f = class vMb {
    constructor(){
        this.pointerType = void 0, this.interactedInside = !1, this.handler = void 0, this.blockMouseMove = !0, this.performedPointerEventsMutation = !1, this.pointerEventsScopeElement = null, this.pointerEventsReferenceElement = null, this.pointerEventsFloatingElement = null, this.restTimeoutPending = !1, this.openChangeTimeout = new pKe, this.restTimeout = new pKe, this.handleCloseOptions = void 0;
    }
    static create() {
        return new vMb;
    }
    dispose = ()=>{
        this.openChangeTimeout.clear(), this.restTimeout.clear();
    };
    disposeEffect = ()=>this.dispose;
}, k3i = new WeakMap;

}
