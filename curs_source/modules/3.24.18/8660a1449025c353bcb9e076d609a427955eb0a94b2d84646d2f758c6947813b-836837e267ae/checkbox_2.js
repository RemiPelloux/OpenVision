import { ZEk } from "./checkbox.css";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { Ea, Er, lo, wt, zu } from "./yBp.js";
import { pi, vt, xn } from "./ze.js";
var Ykg, tye;
export { Ykg, tye };
var __wakaru_IRn_initialized = false;
export function IRn() {
if (__wakaru_IRn_initialized) return;
__wakaru_IRn_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), pi(), ZEk(), Ykg = wt("<div role=checkbox>"), tye = (t)=>{
    const e = vt(()=>t.size || "medium"), n = (i)=>{
        (i.key === " " || i.key === "Enter") && (i.preventDefault(), t.onChange(!t.value));
    };
    return (()=>{
        var i = Ykg();
        return zu((r)=>{
            t.elementRef && t.elementRef(r);
        }, i), i.addEventListener("keydown", (r)=>{
            t.tabFocusable && n(r);
        }), i.addEventListener("click", (r)=>{
            r.stopPropagation(), t.onChange(!t.value);
        }), xn((r)=>{
            var s = `cursor-setting-value-checkbox codicon codicon-check${t.value ? " checked" : ""} ${e()} ${t.highlightedBorder ? "highlighted-border" : ""} ${t.noBackground ? "no-background" : ""} ${t.filled ? "filled" : ""} outline-hidden`, o = t.value, a = t.ariaLabel, l = t.ariaLabelledBy, c = t.ariaDescribedBy, u = t.style, d = t.tabFocusable ? 0 : void 0;
            return s !== r.e && Er(i, r.e = s), o !== r.t && lo(i, "aria-checked", r.t = o), a !== r.a && lo(i, "aria-label", r.a = a), l !== r.o && lo(i, "aria-labelledby", r.o = l), c !== r.i && lo(i, "aria-describedby", r.i = c), r.n = Ea(i, u, r.n), d !== r.s && lo(i, "tabindex", r.s = d), r;
        }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0,
            n: void 0,
            s: void 0
        }), i;
    })();
};

}
