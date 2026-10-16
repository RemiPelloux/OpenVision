import { PEs } from "./CollapsibleRootContext.js";
import { I6l, R6l } from "./collapsibleOpenStateMapping.js";
import { w6l } from "./f0s.js";
import { e$, kp } from "./qIc.js";
import { $O, T5 } from "./stateAttributesMapping.js";
import { x } from "./tslib.es6.js";
import { t$ } from "./useButton.js";
import { wp } from "./useRenderElement.js";
import * as mgf from "./react-runtime/react/esm-index-production.js";
var M6l, EMi;
export { EMi, M6l };
var __wakaru_ggf_initialized = false;
export function ggf() {
if (__wakaru_ggf_initialized) return;
__wakaru_ggf_initialized = true;
x(), R6l(), $O(), wp(), PEs(), t$(), M6l = {
    ...I6l,
    ...T5
}, EMi = mgf.forwardRef(function(t, n) {
    const { panelId: i, open: r, handleTrigger: s, state: o, disabled: a } = w6l(), { className: c, disabled: l = a, render: u, nativeButton: h = !0, style: p, ...g } = t, { getButtonProps: f, buttonRef: v } = e$({
        disabled: l,
        focusableWhenDisabled: !0,
        native: h
    });
    return kp("button", t, {
        state: o,
        ref: [
            n,
            v
        ],
        props: [
            {
                "aria-controls": r ? i : void 0,
                "aria-expanded": r,
                onClick: s
            },
            g,
            f
        ],
        stateAttributesMapping: M6l
    });
}), process.env.NODE_ENV !== "production" && (EMi.displayName = "CollapsibleTrigger");

}
