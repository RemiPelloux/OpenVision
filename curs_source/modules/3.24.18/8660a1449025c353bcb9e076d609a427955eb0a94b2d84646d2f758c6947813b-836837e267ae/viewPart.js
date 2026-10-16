import { E } from "./tslib.es6.js";
import { _yt, cBt } from "./viewEventHandler.js";
var AQ, YAe;
export { AQ, YAe };
var __wakaru_pz_initialized = false;
export function pz() {
if (__wakaru_pz_initialized) return;
__wakaru_pz_initialized = true;
"use strict";
E(), cBt(), AQ = class extends _yt {
    constructor(t){
        super(), this._context = t, this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this), super.dispose();
    }
}, YAe = class {
    static write(t, e) {
        t.setAttribute("data-mprt", String(e));
    }
    static read(t) {
        const e = t.getAttribute("data-mprt");
        return e === null ? 0 : parseInt(e, 10);
    }
    static collect(t, e) {
        const n = [];
        let i = 0;
        for(; t && t !== t.ownerDocument.body && t !== e;)t.nodeType === t.ELEMENT_NODE && (n[i++] = this.read(t)), t = t.parentElement;
        const r = new Uint8Array(i);
        for(let s = 0; s < i; s++)r[s] = n[i - s - 1];
        return r;
    }
};

}
