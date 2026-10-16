import { yt } from "./A3u.js";
import { Df, so } from "./ECo.js";
import { Se } from "./HVr.js";
import { bn } from "./async.js";
import { Aq } from "./async_3.js";
import { en } from "./dom_2.js";
import { c_ } from "./jotaiSolidBridge.js";
import { qn } from "./qIc.js";
import { e6 } from "./scrollable.js";
import { Sc_ } from "./scrollableContext.js";
import { kc_ } from "./scrollableDiv.css";
import { mA } from "./scrollableElement.js";
import { Vs } from "./solidContext.js";
import { x } from "./tslib.es6.js";
import { $e } from "./web.js";
var T2h, E2h, dAo, hAo, Vtr, pAo, mAo, gAo, Iqt, jtr, fAo;
export { E2h, Iqt, T2h, Vtr, dAo, fAo, gAo, hAo, jtr, mAo, pAo };
var __wakaru_h8_initialized = false;
export function h8() {
if (__wakaru_h8_initialized) return;
__wakaru_h8_initialized = true;
"use strict";
x(), $e(), $e(), $e(), $e(), $e(), $e(), $e(), $e(), $e(), Df(), qn(), en(), mA(), Aq(), bn(), Se(), e6(), Vs(), c_(), Sc_(), kc_(), T2h = yt("<div><div>"), E2h = yt("<div>"), dAo = so(!1), hAo = so(!1), Vtr = so(!1), pAo = so(!1), mAo = so(!1), gAo = so(void 0), Iqt = so({
    width: 0,
    height: 0,
    scrollWidth: 0,
    scrollHeight: 0
}), jtr = so(null, (e, t, { scrollWidth: n, scrollHeight: i })=>{
    const r = e(Iqt);
    (r.scrollWidth !== n || r.scrollHeight !== i) && t(Iqt, {
        ...r,
        scrollWidth: n,
        scrollHeight: i
    });
}), fAo = so(null, (e, t, { width: n, height: i })=>{
    const r = e(Iqt);
    (r.width !== n || r.height !== i) && t(Iqt, {
        ...r,
        width: n,
        height: i
    });
});

}
