import { Y_e } from "./ComboboxRootContext.js";
import { Ic, Lm } from "./LYd.js";
import { x0e } from "./ipa.js";
import { I4, T_e } from "./popupStateMapping.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { gm, yGe } from "./store_5.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import { TW } from "./useStore.js";
import * as RZS from "./react-runtime/react/esm-index-production.js";
var Fcp, t7r;
export { Fcp, t7r };
var __wakaru_Bcp_initialized = false;
export function Bcp() {
if (__wakaru_Bcp_initialized) return;
__wakaru_Bcp_initialized = true;
E(), Y_e(), I4(), l6(), Om(), yGe(), TW(), Fcp = {
    ...T_e,
    ...D7
}, t7r = RZS.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, a = x0e(), l = Ic(a, gm.open), c = Ic(a, gm.mounted), u = Ic(a, gm.transitionStatus);
    return Lm("div", e, {
        state: {
            open: l,
            transitionStatus: u
        },
        ref: n,
        stateAttributesMapping: Fcp,
        props: [
            {
                role: "presentation",
                hidden: !c,
                style: {
                    userSelect: "none",
                    WebkitUserSelect: "none"
                }
            },
            o
        ]
    });
}), process.env.NODE_ENV !== "production" && (t7r.displayName = "ComboboxBackdrop");

}
