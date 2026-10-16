import { Qe, st } from "./Iwo.js";
import { Hn, Pr, ws } from "./dom_2.js";
import { nT, rv } from "./keyboardEvent.js";
import { i2, iT } from "./mouseEvent.js";
import { fO, kM } from "./touch.js";
import { E } from "./tslib.es6.js";
import { li } from "./ze.js";
var k4;
export { k4 };
var __wakaru_CY_initialized = false;
export function CY() {
if (__wakaru_CY_initialized) return;
__wakaru_CY_initialized = true;
"use strict";
E(), Hn(), nT(), i2(), fO(), Qe(), k4 = class extends st {
    onclick(t, e) {
        this._register(li(t, Pr.CLICK, (n)=>e(new iT(ws(t), n))));
    }
    onmousedown(t, e) {
        this._register(li(t, Pr.MOUSE_DOWN, (n)=>e(new iT(ws(t), n))));
    }
    onmouseover(t, e) {
        this._register(li(t, Pr.MOUSE_OVER, (n)=>e(new iT(ws(t), n))));
    }
    onmouseleave(t, e) {
        this._register(li(t, Pr.MOUSE_LEAVE, (n)=>e(new iT(ws(t), n))));
    }
    onkeydown(t, e) {
        this._register(li(t, Pr.KEY_DOWN, (n)=>e(new rv(n))));
    }
    onkeyup(t, e) {
        this._register(li(t, Pr.KEY_UP, (n)=>e(new rv(n))));
    }
    oninput(t, e) {
        this._register(li(t, Pr.INPUT, e));
    }
    onblur(t, e) {
        this._register(li(t, Pr.BLUR, e));
    }
    onfocus(t, e) {
        this._register(li(t, Pr.FOCUS, e));
    }
    onchange(t, e) {
        this._register(li(t, Pr.CHANGE, e));
    }
    ignoreGesture(t) {
        return kM.ignoreTarget(t);
    }
};

}
