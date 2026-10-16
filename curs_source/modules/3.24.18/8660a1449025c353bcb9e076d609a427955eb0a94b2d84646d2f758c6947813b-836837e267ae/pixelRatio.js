import { Gt, Qe, m4, st, tt } from "./Iwo.js";
import { Hn, L7o, pO } from "./dom_2.js";
import { E } from "./tslib.es6.js";
var MUd, DUd, NUd, Vtt;
export { DUd, MUd, NUd, Vtt };
var __wakaru_gsi_initialized = false;
export function gsi() {
if (__wakaru_gsi_initialized) return;
__wakaru_gsi_initialized = true;
"use strict";
E(), Hn(), Gt(), Qe(), MUd = class extends st {
    constructor(t){
        super(), this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._listener = ()=>this._handleChange(t, !0), this._mediaQueryList = null, this._handleChange(t, !1);
    }
    _handleChange(t, e) {
        this._mediaQueryList?.removeEventListener("change", this._listener), this._mediaQueryList = t.matchMedia(`(resolution: ${t.devicePixelRatio}dppx)`), this._mediaQueryList.addEventListener("change", this._listener), e && this._onDidChange.fire();
    }
}, DUd = class extends st {
    constructor(t){
        super(), this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._value = this._getPixelRatio(t);
        const e = this._register(new MUd(t));
        this._register(e.onDidChange(()=>{
            this._value = this._getPixelRatio(t), this._onDidChange.fire(this._value);
        }));
    }
    get value() {
        return this._value;
    }
    _getPixelRatio(t) {
        const e = document.createElement("canvas").getContext("2d"), n = t.devicePixelRatio || 1, i = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
        return n / i;
    }
}, NUd = class {
    constructor(){
        this.mapWindowIdToPixelRatioMonitor = new Map;
    }
    _getOrCreatePixelRatioMonitor(t) {
        const e = pO(t);
        let n = this.mapWindowIdToPixelRatioMonitor.get(e);
        if (!n) {
            n = m4(new DUd(t)), this.mapWindowIdToPixelRatioMonitor.set(e, n);
            const i = m4(L7o(({ vscodeWindowId: r })=>{
                r === e && (i.dispose(), n?.dispose(), this.mapWindowIdToPixelRatioMonitor.delete(e));
            }));
        }
        return n;
    }
    getInstance(t) {
        return this._getOrCreatePixelRatioMonitor(t);
    }
}, Vtt = new NUd;

}
