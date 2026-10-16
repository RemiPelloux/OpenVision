import { MRa } from "./DialogPortalContext.js";
import { FGe } from "./DialogRootContext.js";
import { FRa, U_1 } from "./DialogViewportDataAttributes.js";
import { Lm } from "./LYd.js";
import { Nwp, rst } from "./ipa.js";
import { I4, T_e } from "./popupStateMapping.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import * as j_1 from "./react-runtime/react/esm-index-production.js";
var Wwp, BRa;
export { BRa, Wwp };
var __wakaru_$_1_initialized = false;
export function $_1() {
if (__wakaru_$_1_initialized) return;
__wakaru_$_1_initialized = true;
E(), Om(), I4(), l6(), FGe(), MRa(), U_1(), Wwp = {
    ...T_e,
    ...D7,
    nested (t) {
        return t ? {
            [FRa.nested]: ""
        } : null;
    },
    nestedDialogOpen (t) {
        return t ? {
            [FRa.nestedDialogOpen]: ""
        } : null;
    }
}, BRa = j_1.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, children: o, ...a } = e, l = Nwp(), { store: c } = rst(), u = c.useState("open"), d = c.useState("nested"), h = c.useState("transitionStatus"), p = c.useState("nestedOpenDialogCount"), g = c.useState("mounted"), f = c.useStateSetter("viewportElement"), _ = p > 0;
    return Lm("div", e, {
        enabled: l || g,
        state: {
            open: u,
            nested: d,
            transitionStatus: h,
            nestedDialogOpen: _
        },
        ref: [
            n,
            f
        ],
        stateAttributesMapping: Wwp,
        props: [
            {
                role: "presentation",
                hidden: !g,
                style: {
                    pointerEvents: u ? void 0 : "none"
                },
                children: o
            },
            a
        ]
    });
}), process.env.NODE_ENV !== "production" && (BRa.displayName = "DialogViewport");

}
