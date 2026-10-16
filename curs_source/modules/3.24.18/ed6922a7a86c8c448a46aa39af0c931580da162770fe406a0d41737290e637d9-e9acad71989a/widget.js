import { Se, we } from "./HVr.js";
import { Fn, en, xi } from "./dom_2.js";
import { gu, jg } from "./keyboardEvent.js";
import { J_, ew } from "./mouseEvent.js";
import { Xt } from "./qIc.js";
import { Ex, zT } from "./touch.js";
import { x } from "./tslib.es6.js";
var pR;
export { pR };
var __wakaru_RO_initialized = false;
export function RO() {
if (__wakaru_RO_initialized) return;
__wakaru_RO_initialized = true;
"use strict";
x(), en(), jg(), ew(), Ex(), Se(), pR = class extends we {
    onclick(e, t) {
        this._register(Xt(e, Fn.CLICK, (n)=>t(new J_(xi(e), n))));
    }
    onmousedown(e, t) {
        this._register(Xt(e, Fn.MOUSE_DOWN, (n)=>t(new J_(xi(e), n))));
    }
    onmouseover(e, t) {
        this._register(Xt(e, Fn.MOUSE_OVER, (n)=>t(new J_(xi(e), n))));
    }
    onmouseleave(e, t) {
        this._register(Xt(e, Fn.MOUSE_LEAVE, (n)=>t(new J_(xi(e), n))));
    }
    onkeydown(e, t) {
        this._register(Xt(e, Fn.KEY_DOWN, (n)=>t(new gu(n))));
    }
    onkeyup(e, t) {
        this._register(Xt(e, Fn.KEY_UP, (n)=>t(new gu(n))));
    }
    oninput(e, t) {
        this._register(Xt(e, Fn.INPUT, t));
    }
    onblur(e, t) {
        this._register(Xt(e, Fn.BLUR, t));
    }
    onfocus(e, t) {
        this._register(Xt(e, Fn.FOCUS, t));
    }
    onchange(e, t) {
        this._register(Xt(e, Fn.CHANGE, t));
    }
    ignoreGesture(e) {
        return zT.ignoreTarget(e);
    }
};

}
