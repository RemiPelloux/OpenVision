import { WTf } from "./ProgressBar.js";
import { XHl } from "./ProgressPie.js";
import { HDi } from "./ProgressRing.js";
import { HTf, _uf, qTf } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { forwardRef as KTf } from "./react-runtime/react/esm-index-production.js";
import { jsx as lAs } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as zTf } from "./react-runtime/react/esm-compiler-runtime-production.js";
var SA;
export { SA };
var __wakaru_Q1n_initialized = false;
export function Q1n() {
if (__wakaru_Q1n_initialized) return;
__wakaru_Q1n_initialized = true;
"use strict";
x(), WTf(), XHl(), HDi(), SA = KTf(function(t, n) {
    const i = zTf(9);
    switch(t.variant){
        case "bar":
            {
                let r;
                return i[0] !== t || i[1] !== n ? (r = lAs(HTf, {
                    ...t,
                    ref: n
                }), i[0] = t, i[1] = n, i[2] = r) : r = i[2], r;
            }
        case "pie":
            {
                let r;
                return i[3] !== t || i[4] !== n ? (r = lAs(qTf, {
                    ...t,
                    ref: n
                }), i[3] = t, i[4] = n, i[5] = r) : r = i[5], r;
            }
        case "ring":
        case void 0:
            {
                let r;
                return i[6] !== t || i[7] !== n ? (r = lAs(_uf, {
                    ...t,
                    ref: n
                }), i[6] = t, i[7] = n, i[8] = r) : r = i[8], r;
            }
        default:
            return t;
    }
});

}
