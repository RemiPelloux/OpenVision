import { LBl } from "./ProgressRootContext.js";
import { Jlf, iuf } from "./f0s.js";
import { kp } from "./qIc.js";
import { NBl, STs } from "./stateAttributesMapping_5.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import { ruf } from "./valueToPercent.js";
import * as suf from "./react-runtime/react/esm-index-production.js";
var wTs;
export { wTs };
var __wakaru_ouf_initialized = false;
export function ouf() {
if (__wakaru_ouf_initialized) return;
__wakaru_ouf_initialized = true;
x(), wp(), ruf(), LBl(), NBl(), wTs = suf.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, ...o } = t, { max: a, min: c, value: l, state: u } = Jlf(), h = Number.isFinite(l) && l !== null ? iuf(l, c, a) : null, p = h == null ? {} : {
        insetInlineStart: 0,
        height: "inherit",
        width: `${h}%`
    };
    return kp("div", t, {
        state: u,
        ref: n,
        props: [
            {
                style: p
            },
            o
        ],
        stateAttributesMapping: STs
    });
}), process.env.NODE_ENV !== "production" && (wTs.displayName = "ProgressIndicator");

}
