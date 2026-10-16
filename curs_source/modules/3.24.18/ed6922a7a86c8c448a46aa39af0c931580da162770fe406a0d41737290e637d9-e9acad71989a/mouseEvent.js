import { Ai, Oo, jn } from "./HVr.js";
import { bht, i5, ile, n_ } from "./browser_2.js";
import { Pzr, yAc } from "./iframe.js";
import { x } from "./tslib.es6.js";
var J_, rBe;
export { J_, rBe };
var __wakaru_ew_initialized = false;
export function ew() {
if (__wakaru_ew_initialized) return;
__wakaru_ew_initialized = true;
"use strict";
x(), n_(), Pzr(), jn(), J_ = class {
    constructor(e, t){
        this.timestamp = Date.now(), this.browserEvent = t, this.leftButton = t.button === 0, this.middleButton = t.button === 1, this.rightButton = t.button === 2, this.buttons = t.buttons, this.target = t.target, this.detail = t.detail || 1, t.type === "dblclick" && (this.detail = 2), this.ctrlKey = t.ctrlKey, this.shiftKey = t.shiftKey, this.altKey = t.altKey, this.metaKey = t.metaKey, typeof t.pageX == "number" ? (this.posx = t.pageX, this.posy = t.pageY) : (this.posx = t.clientX + this.target.ownerDocument.body.scrollLeft + this.target.ownerDocument.documentElement.scrollLeft, this.posy = t.clientY + this.target.ownerDocument.body.scrollTop + this.target.ownerDocument.documentElement.scrollTop);
        const n = yAc.getPositionOfChildWindowRelativeToAncestorWindow(e, t.view);
        this.posx -= n.left, this.posy -= n.top;
    }
    preventDefault() {
        this.browserEvent.preventDefault();
    }
    stopPropagation() {
        this.browserEvent.stopPropagation();
    }
}, rBe = class {
    constructor(e, t = 0, n = 0){
        this.browserEvent = e || null, this.target = e ? e.target || e.targetNode || e.srcElement : null, this.deltaY = n, this.deltaX = t;
        let i = !1;
        if (bht) {
            const r = navigator.userAgent.match(/Chrome\/(\d+)/);
            i = (r ? parseInt(r[1]) : 123) <= 122;
        }
        if (e) {
            const r = e, s = e, o = e.view?.devicePixelRatio || 1;
            if (typeof r.wheelDeltaY < "u") i ? this.deltaY = r.wheelDeltaY / (120 * o) : this.deltaY = r.wheelDeltaY / 120;
            else if (typeof s.VERTICAL_AXIS < "u" && s.axis === s.VERTICAL_AXIS) this.deltaY = -s.detail / 3;
            else if (e.type === "wheel") {
                const a = e;
                a.deltaMode === a.DOM_DELTA_LINE ? i5 && !Ai ? this.deltaY = -e.deltaY / 3 : this.deltaY = -e.deltaY : this.deltaY = -e.deltaY / 40;
            }
            if (typeof r.wheelDeltaX < "u") ile && Oo ? this.deltaX = -(r.wheelDeltaX / 120) : i ? this.deltaX = r.wheelDeltaX / (120 * o) : this.deltaX = r.wheelDeltaX / 120;
            else if (typeof s.HORIZONTAL_AXIS < "u" && s.axis === s.HORIZONTAL_AXIS) this.deltaX = -e.detail / 3;
            else if (e.type === "wheel") {
                const a = e;
                a.deltaMode === a.DOM_DELTA_LINE ? i5 && !Ai ? this.deltaX = -e.deltaX / 3 : this.deltaX = -e.deltaX : this.deltaX = -e.deltaX / 40;
            }
            this.deltaY === 0 && this.deltaX === 0 && e.wheelDelta && (i ? this.deltaY = e.wheelDelta / (120 * o) : this.deltaY = e.wheelDelta / 120);
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
