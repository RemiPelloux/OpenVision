import { $i, Pl, fs, oa, yt } from "./A3u.js";
import { ac_ } from "./checkbox.css";
import { Oe, Rn, qn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { $e } from "./web.js";
var d2h, $8e;
export { $8e, d2h };
var __wakaru_$tr_initialized = false;
export function $tr() {
if (__wakaru_$tr_initialized) return;
__wakaru_$tr_initialized = true;
"use strict";
x(), $e(), $e(), $e(), $e(), $e(), $e(), qn(), ac_(), d2h = yt("<div role=checkbox>"), $8e = (e)=>{
    const t = Oe(()=>e.size || "medium"), n = (i)=>{
        (i.key === " " || i.key === "Enter") && (i.preventDefault(), e.onChange(!e.value));
    };
    return (()=>{
        var i = d2h();
        return Pl((r)=>{
            e.elementRef && e.elementRef(r);
        }, i), i.addEventListener("keydown", (r)=>{
            e.tabFocusable && n(r);
        }), i.addEventListener("click", (r)=>{
            r.stopPropagation(), e.onChange(!e.value);
        }), Rn((r)=>{
            var s = `cursor-setting-value-checkbox codicon codicon-check${e.value ? " checked" : ""} ${t()} ${e.highlightedBorder ? "highlighted-border" : ""} ${e.noBackground ? "no-background" : ""} ${e.filled ? "filled" : ""} outline-hidden`, o = e.value, a = e.ariaLabel, c = e.ariaLabelledBy, l = e.ariaDescribedBy, u = e.style, h = e.tabFocusable ? 0 : void 0;
            return s !== r.e && $i(i, r.e = s), o !== r.t && fs(i, "aria-checked", r.t = o), a !== r.a && fs(i, "aria-label", r.a = a), c !== r.o && fs(i, "aria-labelledby", r.o = c), l !== r.i && fs(i, "aria-describedby", r.i = l), r.n = oa(i, u, r.n), h !== r.s && fs(i, "tabindex", r.s = h), r;
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
