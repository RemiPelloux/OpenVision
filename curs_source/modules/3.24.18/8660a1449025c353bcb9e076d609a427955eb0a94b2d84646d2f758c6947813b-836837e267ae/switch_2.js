import { RYw } from "./switch.css";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { Ea, Er, lo, wt } from "./yBp.js";
import { xn } from "./ze.js";
var Drv, jOi;
export { Drv, jOi };
var __wakaru_QWl_initialized = false;
export function QWl() {
if (__wakaru_QWl_initialized) return;
__wakaru_QWl_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), RYw(), Drv = wt("<div><div>"), jOi = (t)=>{
    const e = (n)=>t.size === void 0 || t.size === "regular" ? "" : `${n}-${t.size}`;
    return (()=>{
        var n = Drv(), i = n.firstChild;
        return n.addEventListener("mouseleave", (r)=>t.onMouseLeave?.(r)), n.addEventListener("mouseenter", (r)=>t.onMouseEnter?.(r)), n.addEventListener("keydown", (r)=>{
            t.ariaLabel && (r.key === "Enter" || r.key === " ") && (r.preventDefault(), r.currentTarget.click());
        }), n.addEventListener("click", (r)=>{
            t.onToggle(r);
        }), xn((r)=>{
            var s = t.ariaLabel ? t.value : void 0, o = t.ariaLabel, a = `solid-switch ${e("solid-switch")} ${t.onColor === "blue" ? "solid-switch-on-blue" : ""}`, l = t.ariaLabel ? "switch" : void 0, c = t.style, u = t.ariaLabel ? 0 : void 0, d = t.value ? "On" : "Off", h = `solid-switch-toggle ${t.value ? "on" : "off"} ${e("solid-switch-toggle")}`;
            return s !== r.e && lo(n, "aria-checked", r.e = s), o !== r.t && lo(n, "aria-label", r.t = o), a !== r.a && Er(n, r.a = a), l !== r.o && lo(n, "role", r.o = l), r.i = Ea(n, c, r.i), u !== r.n && lo(n, "tabindex", r.n = u), d !== r.s && lo(n, "title", r.s = d), h !== r.h && Er(i, r.h = h), r;
        }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0,
            n: void 0,
            s: void 0,
            h: void 0
        }), n;
    })();
};

}
