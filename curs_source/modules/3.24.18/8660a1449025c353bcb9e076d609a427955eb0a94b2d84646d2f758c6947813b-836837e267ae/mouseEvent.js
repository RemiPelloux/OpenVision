import { Di, _r, xa } from "./Iwo.js";
import { A_, Zke, _7, ybt } from "./browser_2.js";
import { V8o, hOd } from "./iframe.js";
import { E } from "./tslib.es6.js";
var iT, _tt;
export { _tt, iT };
var __wakaru_i2_initialized = false;
export function i2() {
if (__wakaru_i2_initialized) return;
__wakaru_i2_initialized = true;
"use strict";
E(), A_(), V8o(), Di(), iT = class {
    constructor(t, e){
        this.timestamp = Date.now(), this.browserEvent = e, this.leftButton = e.button === 0, this.middleButton = e.button === 1, this.rightButton = e.button === 2, this.buttons = e.buttons, this.target = e.target, this.detail = e.detail || 1, e.type === "dblclick" && (this.detail = 2), this.ctrlKey = e.ctrlKey, this.shiftKey = e.shiftKey, this.altKey = e.altKey, this.metaKey = e.metaKey, typeof e.pageX == "number" ? (this.posx = e.pageX, this.posy = e.pageY) : (this.posx = e.clientX + this.target.ownerDocument.body.scrollLeft + this.target.ownerDocument.documentElement.scrollLeft, this.posy = e.clientY + this.target.ownerDocument.body.scrollTop + this.target.ownerDocument.documentElement.scrollTop);
        const n = hOd.getPositionOfChildWindowRelativeToAncestorWindow(t, e.view);
        this.posx -= n.left, this.posy -= n.top;
    }
    preventDefault() {
        this.browserEvent.preventDefault();
    }
    stopPropagation() {
        this.browserEvent.stopPropagation();
    }
}, _tt = class {
    constructor(t, e = 0, n = 0){
        this.browserEvent = t || null, this.target = t ? t.target || t.targetNode || t.srcElement : null, this.deltaY = n, this.deltaX = e;
        let i = !1;
        if (ybt) {
            const r = navigator.userAgent.match(/Chrome\/(\d+)/);
            i = (r ? parseInt(r[1]) : 123) <= 122;
        }
        if (t) {
            const r = t, s = t, o = t.view?.devicePixelRatio || 1;
            if (typeof r.wheelDeltaY < "u") i ? this.deltaY = r.wheelDeltaY / (120 * o) : this.deltaY = r.wheelDeltaY / 120;
            else if (typeof s.VERTICAL_AXIS < "u" && s.axis === s.VERTICAL_AXIS) this.deltaY = -s.detail / 3;
            else if (t.type === "wheel") {
                const a = t;
                a.deltaMode === a.DOM_DELTA_LINE ? _7 && !_r ? this.deltaY = -t.deltaY / 3 : this.deltaY = -t.deltaY : this.deltaY = -t.deltaY / 40;
            }
            if (typeof r.wheelDeltaX < "u") Zke && xa ? this.deltaX = -(r.wheelDeltaX / 120) : i ? this.deltaX = r.wheelDeltaX / (120 * o) : this.deltaX = r.wheelDeltaX / 120;
            else if (typeof s.HORIZONTAL_AXIS < "u" && s.axis === s.HORIZONTAL_AXIS) this.deltaX = -t.detail / 3;
            else if (t.type === "wheel") {
                const a = t;
                a.deltaMode === a.DOM_DELTA_LINE ? _7 && !_r ? this.deltaX = -t.deltaX / 3 : this.deltaX = -t.deltaX : this.deltaX = -t.deltaX / 40;
            }
            this.deltaY === 0 && this.deltaX === 0 && t.wheelDelta && (i ? this.deltaY = t.wheelDelta / (120 * o) : this.deltaY = t.wheelDelta / 120);
        }
    }
    preventDefault() {
        this.browserEvent?.preventDefault();
    }
    stopPropagation() {
        this.browserEvent?.stopPropagation();
    }
};

}
