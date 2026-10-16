import { Qe } from "./Iwo.js";
import { Am, cs } from "./Sol.js";
import { qn } from "./async.js";
import { SR } from "./async_3.js";
import { Hn } from "./dom_2.js";
import { e_ } from "./jotaiSolidBridge.js";
import { coe } from "./scrollable.js";
import { dIk } from "./scrollableContext.js";
import { hIk } from "./scrollableDiv.css";
import { E7 } from "./scrollableElement.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { pi } from "./ze.js";
var cwg, uwg, Mpl, Dpl, Ecs, Npl, Lpl, Opl, ARn, Ics, Fpl;
export { ARn, Dpl, Ecs, Fpl, Ics, Lpl, Mpl, Npl, Opl, cwg, uwg };
var __wakaru_eD_initialized = false;
export function eD() {
if (__wakaru_eD_initialized) return;
__wakaru_eD_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), at(), at(), Am(), pi(), Hn(), E7(), SR(), qn(), Qe(), coe(), vo(), e_(), dIk(), hIk(), cwg = wt("<div><div>"), uwg = wt("<div>"), Mpl = cs(!1), Dpl = cs(!1), Ecs = cs(!1), Npl = cs(!1), Lpl = cs(!1), Opl = cs(void 0), ARn = cs({
    width: 0,
    height: 0,
    scrollWidth: 0,
    scrollHeight: 0
}), Ics = cs(null, (t, e, { scrollWidth: n, scrollHeight: i })=>{
    const r = t(ARn);
    (r.scrollWidth !== n || r.scrollHeight !== i) && e(ARn, {
        ...r,
        scrollWidth: n,
        scrollHeight: i
    });
}), Fpl = cs(null, (t, e, { width: n, height: i })=>{
    const r = t(ARn);
    (r.width !== n || r.height !== i) && e(ARn, {
        ...r,
        width: n,
        height: i
    });
});

}
