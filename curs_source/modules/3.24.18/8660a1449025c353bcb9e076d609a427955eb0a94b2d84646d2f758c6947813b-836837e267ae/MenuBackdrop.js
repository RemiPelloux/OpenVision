import { HUt } from "./ContextMenuRootContext.js";
import { Lm } from "./LYd.js";
import { F_e } from "./MenuRootContext.js";
import { O_e, mSn } from "./ipa.js";
import { I4, T_e } from "./popupStateMapping.js";
import { E4, Zb } from "./reason-parts.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import * as RyS from "./react-runtime/react/esm-index-production.js";
var zFh, Bpa;
export { Bpa, zFh };
var __wakaru_PyS_initialized = false;
export function PyS() {
if (__wakaru_PyS_initialized) return;
__wakaru_PyS_initialized = true;
E(), F_e(), Om(), I4(), l6(), HUt(), Zb(), zFh = {
    ...T_e,
    ...D7
}, Bpa = RyS.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { store: a } = O_e(), l = a.useState("open"), c = a.useState("mounted"), u = a.useState("transitionStatus"), d = a.useState("lastOpenChangeReason"), h = mSn(), p = {
        open: l,
        transitionStatus: u
    };
    return Lm("div", e, {
        ref: h?.backdropRef ? [
            n,
            h.backdropRef
        ] : n,
        state: p,
        stateAttributesMapping: zFh,
        props: [
            {
                role: "presentation",
                hidden: !c,
                style: {
                    pointerEvents: d === E4 ? "none" : void 0,
                    userSelect: "none",
                    WebkitUserSelect: "none"
                }
            },
            o
        ]
    });
}), process.env.NODE_ENV !== "production" && (Bpa.displayName = "MenuBackdrop");

}
