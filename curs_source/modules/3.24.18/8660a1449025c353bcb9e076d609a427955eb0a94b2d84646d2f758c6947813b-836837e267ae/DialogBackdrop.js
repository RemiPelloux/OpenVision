import { FGe } from "./DialogRootContext.js";
import { Lm } from "./LYd.js";
import { rst } from "./ipa.js";
import { I4, T_e } from "./popupStateMapping.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import * as m_1 from "./react-runtime/react/esm-index-production.js";
var Rwp, ARa;
export { ARa, Rwp };
var __wakaru_g_1_initialized = false;
export function g_1() {
if (__wakaru_g_1_initialized) return;
__wakaru_g_1_initialized = true;
E(), FGe(), Om(), I4(), l6(), Rwp = {
    ...T_e,
    ...D7
}, ARa = m_1.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, forceRender: o = !1, ...a } = e, { store: l } = rst(), c = l.useState("open"), u = l.useState("nested"), d = l.useState("mounted"), h = l.useState("transitionStatus");
    return Lm("div", e, {
        state: {
            open: c,
            transitionStatus: h
        },
        ref: [
            l.context.backdropRef,
            n
        ],
        stateAttributesMapping: Rwp,
        props: [
            {
                role: "presentation",
                hidden: !d,
                style: {
                    userSelect: "none",
                    WebkitUserSelect: "none"
                }
            },
            a
        ],
        enabled: o || !u
    });
}), process.env.NODE_ENV !== "production" && (ARa.displayName = "DialogBackdrop");

}
