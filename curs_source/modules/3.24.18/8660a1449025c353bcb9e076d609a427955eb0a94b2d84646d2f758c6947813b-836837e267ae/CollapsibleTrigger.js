import { fva } from "./CollapsibleRootContext.js";
import { Lm, wz } from "./LYd.js";
import { F$h, L$h } from "./collapsibleOpenStateMapping.js";
import { R$h } from "./ipa.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { E } from "./tslib.es6.js";
import { Cz } from "./useButton.js";
import { Om } from "./useRenderElement.js";
import * as oxS from "./react-runtime/react/esm-index-production.js";
var U$h, hFr;
export { U$h, hFr };
var __wakaru_axS_initialized = false;
export function axS() {
if (__wakaru_axS_initialized) return;
__wakaru_axS_initialized = true;
E(), F$h(), l6(), Om(), fva(), Cz(), U$h = {
    ...L$h,
    ...D7
}, hFr = oxS.forwardRef(function(e, n) {
    const { panelId: i, open: r, handleTrigger: s, state: o, disabled: a } = R$h(), { className: l, disabled: c = a, render: u, nativeButton: d = !0, style: h, ...p } = e, { getButtonProps: g, buttonRef: f } = wz({
        disabled: c,
        focusableWhenDisabled: !0,
        native: d
    });
    return Lm("button", e, {
        state: o,
        ref: [
            n,
            f
        ],
        props: [
            {
                "aria-controls": r ? i : void 0,
                "aria-expanded": r,
                onClick: s
            },
            p,
            g
        ],
        stateAttributesMapping: U$h
    });
}), process.env.NODE_ENV !== "production" && (hFr.displayName = "CollapsibleTrigger");

}
