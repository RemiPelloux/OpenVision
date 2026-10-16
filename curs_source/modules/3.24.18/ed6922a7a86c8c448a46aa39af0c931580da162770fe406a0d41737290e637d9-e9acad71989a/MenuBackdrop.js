import { yvt } from "./ContextMenuRootContext.js";
import { Xre } from "./MenuRootContext.js";
import { Yre, t6t } from "./f0s.js";
import { Ure, g2 } from "./popupStateMapping.js";
import { kp } from "./qIc.js";
import { g_, m2 } from "./reason-parts.js";
import { $O, T5 } from "./stateAttributesMapping.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import * as zof from "./react-runtime/react/esm-index-production.js";
var gFl, q0s;
export { gFl, q0s };
var __wakaru_Kof_initialized = false;
export function Kof() {
if (__wakaru_Kof_initialized) return;
__wakaru_Kof_initialized = true;
x(), Xre(), wp(), g2(), $O(), yvt(), g_(), gFl = {
    ...Ure,
    ...T5
}, q0s = zof.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, ...o } = t, { store: a } = Yre(), c = a.useState("open"), l = a.useState("mounted"), u = a.useState("transitionStatus"), h = a.useState("lastOpenChangeReason"), p = t6t(), g = {
        open: c,
        transitionStatus: u
    };
    return kp("div", t, {
        ref: p?.backdropRef ? [
            n,
            p.backdropRef
        ] : n,
        state: g,
        stateAttributesMapping: gFl,
        props: [
            {
                role: "presentation",
                hidden: !l,
                style: {
                    pointerEvents: h === m2 ? "none" : void 0,
                    userSelect: "none",
                    WebkitUserSelect: "none"
                }
            },
            o
        ]
    });
}), process.env.NODE_ENV !== "production" && (q0s.displayName = "MenuBackdrop");

}
