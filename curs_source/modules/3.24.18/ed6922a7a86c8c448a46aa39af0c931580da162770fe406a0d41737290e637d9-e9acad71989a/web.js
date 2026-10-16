import { Oe, qn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var x2d, I2d, A2d, R2d, D2d, Doo, M2d, Lr, Moo, Poo, eTv, iGi, P2d;
export { A2d, D2d, Doo, I2d, Lr, M2d, Moo, P2d, Poo, R2d, eTv, iGi, x2d };
var __wakaru_$e_initialized = false;
export function $e() {
if (__wakaru_$e_initialized) return;
__wakaru_$e_initialized = true;
x(), qn(), qn(), x2d = [
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
], I2d = new Set([
    "className",
    "value",
    "readOnly",
    "noValidate",
    "formNoValidate",
    "isMap",
    "noModule",
    "playsInline",
    ...x2d
]), A2d = new Set([
    "innerHTML",
    "textContent",
    "innerText",
    "children"
]), R2d = Object.assign(Object.create(null), {
    className: "class",
    htmlFor: "for"
}), D2d = Object.assign(Object.create(null), {
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
}), Doo = new Set([
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
]), M2d = {
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace"
}, Lr = (e)=>Oe(()=>e()), Moo = "_$DX_DELEGATE", Poo = window.trustedTypes?.createPolicy("solidjs", {
    createHTML: (e)=>e
}), eTv = Symbol(), iGi = !1, P2d = "http://www.w3.org/2000/svg";

}
