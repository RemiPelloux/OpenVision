import { iMe } from "./DialogRootContext.js";
import { M6e } from "./f0s.js";
import { Ure, g2 } from "./popupStateMapping.js";
import { kp } from "./qIc.js";
import { $O, T5 } from "./stateAttributesMapping.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import * as hJf from "./react-runtime/react/esm-index-production.js";
var Ocu, NOs;
export { NOs, Ocu };
var __wakaru_pJf_initialized = false;
export function pJf() {
if (__wakaru_pJf_initialized) return;
__wakaru_pJf_initialized = true;
x(), iMe(), wp(), g2(), $O(), Ocu = {
    ...Ure,
    ...T5
}, NOs = hJf.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, forceRender: o = !1, ...a } = t, { store: c } = M6e(), l = c.useState("open"), u = c.useState("nested"), h = c.useState("mounted"), p = c.useState("transitionStatus");
    return kp("div", t, {
        state: {
            open: l,
            transitionStatus: p
        },
        ref: [
            c.context.backdropRef,
            n
        ],
        stateAttributesMapping: Ocu,
        props: [
            {
                role: "presentation",
                hidden: !h,
                style: {
                    userSelect: "none",
                    WebkitUserSelect: "none"
                }
            },
            a
        ],
        enabled: o || !u
    });
}), process.env.NODE_ENV !== "production" && (NOs.displayName = "DialogBackdrop");

}
