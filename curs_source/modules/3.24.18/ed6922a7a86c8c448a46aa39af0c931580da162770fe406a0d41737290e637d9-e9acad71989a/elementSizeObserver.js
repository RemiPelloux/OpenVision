import { Se, bt, ve, we } from "./HVr.js";
import { Gb, en, xi } from "./dom_2.js";
import { x } from "./tslib.es6.js";
var ies;
export { ies };
var __wakaru_f5c_initialized = false;
export function f5c() {
if (__wakaru_f5c_initialized) return;
__wakaru_f5c_initialized = true;
"use strict";
x(), Se(), bt(), en(), ies = class extends we {
    constructor(e, t){
        super(), this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event, this._referenceDomElement = e, this._width = -1, this._height = -1, this._resizeObserver = null, this.measureReferenceDomElement(!1, t);
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
    startObserving(e = !1) {
        if (!this._resizeObserver && this._referenceDomElement) {
            let t = null;
            const n = ()=>{
                t ? this.observe({
                    width: t.width,
                    height: t.height
                }, e) : this.observe(void 0, e);
            };
            let i = !1, r = !1;
            const s = ()=>{
                if (i && !r) try {
                    i = !1, r = !0, n();
                } finally{
                    Gb(xi(this._referenceDomElement), ()=>{
                        r = !1, s();
                    });
                }
            }, o = xi(this._referenceDomElement)?.ResizeObserver;
            this._resizeObserver = new o((a)=>{
                a && a[0] && a[0].contentRect ? t = {
                    width: a[0].contentRect.width,
                    height: a[0].contentRect.height
                } : t = null, i = !0, s();
            }), this._resizeObserver.observe(this._referenceDomElement);
        }
    }
    stopObserving() {
        this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null);
    }
    observe(e, t = !1) {
        this.measureReferenceDomElement(!0, e, t);
    }
    measureReferenceDomElement(e, t, n = !1) {
        let i = 0, r = 0;
        t ? (i = t.width, r = t.height) : this._referenceDomElement && (i = this._referenceDomElement.clientWidth, r = this._referenceDomElement.clientHeight), i = Math.max(5, i), r = Math.max(5, r), (this._width !== i || this._height !== r) && (this._width = i, n ? this._height = Math.max(r, this._referenceDomElement.clientHeight) : this._height = r, e && this._onDidChange.fire());
    }
};

}
