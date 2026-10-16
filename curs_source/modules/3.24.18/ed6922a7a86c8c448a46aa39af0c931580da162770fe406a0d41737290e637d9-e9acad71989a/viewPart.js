import { x } from "./tslib.es6.js";
import { $pt, Hze } from "./viewEventHandler.js";
var mW, jge;
export { jge, mW };
var __wakaru_aU_initialized = false;
export function aU() {
if (__wakaru_aU_initialized) return;
__wakaru_aU_initialized = true;
"use strict";
x(), $pt(), mW = class extends Hze {
    constructor(e){
        super(), this._context = e, this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this), super.dispose();
    }
}, jge = class {
    static write(e, t) {
        e.setAttribute("data-mprt", String(t));
    }
    static read(e) {
        const t = e.getAttribute("data-mprt");
        return t === null ? 0 : parseInt(t, 10);
    }
    static collect(e, t) {
        const n = [];
        let i = 0;
        for(; e && e !== e.ownerDocument.body && e !== t;)e.nodeType === e.ELEMENT_NODE && (n[i++] = this.read(e)), e = e.parentElement;
        const r = new Uint8Array(i);
        for(let s = 0; s < i; s++)r[s] = n[i - s - 1];
        return r;
    }
};

}
