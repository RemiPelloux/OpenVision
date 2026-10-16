import { Se, bt, u3, ve, we } from "./HVr.js";
import { OV, TYr, en } from "./dom_2.js";
import { x } from "./tslib.es6.js";
var v5c, _5c, b5c, d5;
export { _5c, b5c, d5, v5c };
var __wakaru_SJ_initialized = false;
export function SJ() {
if (__wakaru_SJ_initialized) return;
__wakaru_SJ_initialized = true;
"use strict";
x(), en(), bt(), Se(), v5c = class extends we {
    constructor(e){
        super(), this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event, this._listener = ()=>this._handleChange(e, !0), this._mediaQueryList = null, this._handleChange(e, !1);
    }
    _handleChange(e, t) {
        this._mediaQueryList?.removeEventListener("change", this._listener), this._mediaQueryList = e.matchMedia(`(resolution: ${e.devicePixelRatio}dppx)`), this._mediaQueryList.addEventListener("change", this._listener), t && this._onDidChange.fire();
    }
}, _5c = class extends we {
    constructor(e){
        super(), this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event, this._value = this._getPixelRatio(e);
        const t = this._register(new v5c(e));
        this._register(t.onDidChange(()=>{
            this._value = this._getPixelRatio(e), this._onDidChange.fire(this._value);
        }));
    }
    get value() {
        return this._value;
    }
    _getPixelRatio(e) {
        const t = document.createElement("canvas").getContext("2d"), n = e.devicePixelRatio || 1, i = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
        return n / i;
    }
}, b5c = class {
    constructor(){
        this.mapWindowIdToPixelRatioMonitor = new Map;
    }
    _getOrCreatePixelRatioMonitor(e) {
        const t = OV(e);
        let n = this.mapWindowIdToPixelRatioMonitor.get(t);
        if (!n) {
            n = u3(new _5c(e)), this.mapWindowIdToPixelRatioMonitor.set(t, n);
            const i = u3(TYr(({ vscodeWindowId: r })=>{
                r === t && (i.dispose(), n?.dispose(), this.mapWindowIdToPixelRatioMonitor.delete(t));
            }));
        }
        return n;
    }
    getInstance(e) {
        return this._getOrCreatePixelRatioMonitor(e);
    }
}, d5 = new b5c;

}
