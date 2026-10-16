import { E } from "./tslib.es6.js";
import { pi, vt } from "./ze.js";
var Xwm, Zwm, Qwm, Jwm, e0m, YUa, t0m, zr, XUa, ZUa, X81, DYr, n0m;
export { DYr, Jwm, Qwm, X81, XUa, Xwm, YUa, ZUa, Zwm, e0m, n0m, t0m, zr };
var __wakaru_at_initialized = false;
export function at() {
if (__wakaru_at_initialized) return;
__wakaru_at_initialized = true;
E(), pi(), pi(), Xwm = [
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "disabled",
    "formnovalidate",
    "hidden",
    "indeterminate",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "seamless",
    "selected"
], Zwm = new Set([
    "className",
    "value",
    "readOnly",
    "noValidate",
    "formNoValidate",
    "isMap",
    "noModule",
    "playsInline",
    ...Xwm
]), Qwm = new Set([
    "innerHTML",
    "textContent",
    "innerText",
    "children"
]), Jwm = Object.assign(Object.create(null), {
    className: "class",
    htmlFor: "for"
}), e0m = Object.assign(Object.create(null), {
    class: "className",
    novalidate: {
        $: "noValidate",
        FORM: 1
    },
    formnovalidate: {
        $: "formNoValidate",
        BUTTON: 1,
        INPUT: 1
    },
    ismap: {
        $: "isMap",
        IMG: 1
    },
    nomodule: {
        $: "noModule",
        SCRIPT: 1
    },
    playsinline: {
        $: "playsInline",
        VIDEO: 1
    },
    readonly: {
        $: "readOnly",
        INPUT: 1,
        TEXTAREA: 1
    }
}), YUa = new Set([
    "beforeinput",
    "click",
    "dblclick",
    "contextmenu",
    "focusin",
    "focusout",
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "pointerdown",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "touchend",
    "touchmove",
    "touchstart"
]), t0m = {
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace"
}, zr = (t)=>vt(()=>t()), XUa = "_$DX_DELEGATE", ZUa = window.trustedTypes?.createPolicy("solidjs", {
    createHTML: (t)=>t
}), X81 = Symbol(), DYr = !1, n0m = "http://www.w3.org/2000/svg";

}
