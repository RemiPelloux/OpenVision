import { Lm } from "./LYd.js";
import { m9h } from "./ProgressRootContext.js";
import { BkS, v9h } from "./ipa.js";
import { g9h, gga } from "./stateAttributesMapping_5.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import { _9h } from "./valueToPercent.js";
import * as HkS from "./react-runtime/react/esm-index-production.js";
var vga;
export { vga };
var __wakaru_WkS_initialized = false;
export function WkS() {
if (__wakaru_WkS_initialized) return;
__wakaru_WkS_initialized = true;
E(), Om(), _9h(), m9h(), g9h(), vga = HkS.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { max: a, min: l, value: c, state: u } = BkS(), d = Number.isFinite(c) && c !== null ? v9h(c, l, a) : null, h = d == null ? {} : {
        insetInlineStart: 0,
        height: "inherit",
        width: `${d}%`
    };
    return Lm("div", e, {
        state: u,
        ref: n,
        props: [
            {
                style: h
            },
            o
        ],
        stateAttributesMapping: gga
    });
}), process.env.NODE_ENV !== "production" && (vga.displayName = "ProgressIndicator");

}
