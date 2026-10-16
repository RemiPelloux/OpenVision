import { Gt, Qe, st, tt } from "./Iwo.js";
import { Hn, Ix, ws } from "./dom_2.js";
import { E } from "./tslib.es6.js";
var V0r;
export { V0r };
var __wakaru_K0r_initialized = false;
export function K0r() {
if (__wakaru_K0r_initialized) return;
__wakaru_K0r_initialized = true;
"use strict";
E(), Qe(), Gt(), Hn(), V0r = class extends st {
    constructor(t, e){
        super(), this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._referenceDomElement = t, this._width = -1, this._height = -1, this._resizeObserver = null, this.measureReferenceDomElement(!1, e);
    }
    dispose() {
        this.stopObserving(), super.dispose();
    }
    getWidth() {
        return this._width;
    }
    getHeight() {
        return this._height;
    }
    startObserving(t = !1) {
        if (!this._resizeObserver && this._referenceDomElement) {
            let e = null;
            const n = ()=>{
                e ? this.observe({
                    width: e.width,
                    height: e.height
                }, t) : this.observe(void 0, t);
            };
            let i = !1, r = !1;
            const s = ()=>{
                if (i && !r) try {
                    i = !1, r = !0, n();
                } finally{
                    Ix(ws(this._referenceDomElement), ()=>{
                        r = !1, s();
                    });
                }
            }, o = ws(this._referenceDomElement)?.ResizeObserver;
            this._resizeObserver = new o((a)=>{
                a && a[0] && a[0].contentRect ? e = {
                    width: a[0].contentRect.width,
                    height: a[0].contentRect.height
                } : e = null, i = !0, s();
            }), this._resizeObserver.observe(this._referenceDomElement);
        }
    }
    stopObserving() {
        this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null);
    }
    observe(t, e = !1) {
        this.measureReferenceDomElement(!0, t, e);
    }
    measureReferenceDomElement(t, e, n = !1) {
        let i = 0, r = 0;
        e ? (i = e.width, r = e.height) : this._referenceDomElement && (i = this._referenceDomElement.clientWidth, r = this._referenceDomElement.clientHeight), i = Math.max(5, i), r = Math.max(5, r), (this._width !== i || this._height !== r) && (this._width = i, n ? this._height = Math.max(r, this._referenceDomElement.clientHeight) : this._height = r, t && this._onDidChange.fire());
    }
};

}
