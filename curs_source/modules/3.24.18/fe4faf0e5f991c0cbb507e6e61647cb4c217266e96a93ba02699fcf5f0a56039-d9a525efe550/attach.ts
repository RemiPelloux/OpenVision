import { Zr, rd } from "./cn.ts";
import { i } from "./plugin-brand-icon.js";
import { Ho, wn } from "./stylex.mjs";
function $e({ rootClass: r, stylexStyles: e, className: a, style: s }) {
    const l = wn(e);
    return {
        className: Zr(r, l.className, a),
        style: {
            ...l.style,
            ...s
        }
    };
}
export { $e };
var __wakaru_Y_i_initialized = false;
export function Y_i() {
if (__wakaru_Y_i_initialized) return;
__wakaru_Y_i_initialized = true;
"use strict";
Ho(), rd(), i($e, "attach");

}
