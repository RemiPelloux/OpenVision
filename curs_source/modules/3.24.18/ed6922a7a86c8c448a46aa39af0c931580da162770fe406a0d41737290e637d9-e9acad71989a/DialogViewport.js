import { BOs } from "./DialogPortalContext.js";
import { iMe } from "./DialogRootContext.js";
import { FJf, GOs } from "./DialogViewportDataAttributes.js";
import { $cu, M6e } from "./f0s.js";
import { Ure, g2 } from "./popupStateMapping.js";
import { kp } from "./qIc.js";
import { $O, T5 } from "./stateAttributesMapping.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import * as BJf from "./react-runtime/react/esm-index-production.js";
var Ycu, VOs;
export { VOs, Ycu };
var __wakaru_UJf_initialized = false;
export function UJf() {
if (__wakaru_UJf_initialized) return;
__wakaru_UJf_initialized = true;
x(), wp(), g2(), $O(), iMe(), BOs(), FJf(), Ycu = {
    ...Ure,
    ...T5,
    nested (e) {
        return e ? {
            [GOs.nested]: ""
        } : null;
    },
    nestedDialogOpen (e) {
        return e ? {
            [GOs.nestedDialogOpen]: ""
        } : null;
    }
}, VOs = BJf.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, children: o, ...a } = t, c = $cu(), { store: l } = M6e(), u = l.useState("open"), h = l.useState("nested"), p = l.useState("transitionStatus"), g = l.useState("nestedOpenDialogCount"), f = l.useState("mounted"), v = l.useStateSetter("viewportElement"), b = g > 0;
    return kp("div", t, {
        enabled: c || f,
        state: {
            open: u,
            nested: h,
            transitionStatus: p,
            nestedDialogOpen: b
        },
        ref: [
            n,
            v
        ],
        stateAttributesMapping: Ycu,
        props: [
            {
                role: "presentation",
                hidden: !f,
                style: {
                    pointerEvents: u ? void 0 : "none"
                },
                children: o
            },
            a
        ]
    });
}), process.env.NODE_ENV !== "production" && (VOs.displayName = "DialogViewport");

}
