import { Y_e } from "./ComboboxRootContext.js";
import { N7 } from "./FieldRootContext.js";
import { Ic, Lm, Nf, Vj, pu } from "./LYd.js";
import { vZS } from "./handleInputPress.js";
import { bGe, fZS, x0e } from "./ipa.js";
import { $D } from "./shadowDom.js";
import { ZCa, z8r } from "./stateAttributesMapping_8.js";
import { gm, yGe } from "./store_5.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import { TW } from "./useStore.js";
import * as _ZS from "./react-runtime/react/esm-index-production.js";
var eTa;
export { eTa };
var __wakaru_bZS_initialized = false;
export function bZS() {
if (__wakaru_bZS_initialized) return;
__wakaru_bZS_initialized = true;
E(), Jy(), Om(), N7(), Y_e(), yGe(), ZCa(), vZS(), TW(), $D(), eTa = _ZS.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { state: a } = Vj(), l = x0e(), { filteredItems: c } = bGe(), u = Ic(l, gm.open), d = Ic(l, gm.mounted), h = Ic(l, gm.popupSide), p = Ic(l, gm.positionerElement), g = Ic(l, gm.disabled), f = Ic(l, gm.readOnly), _ = Ic(l, gm.hasSelectedValue), b = Ic(l, gm.selectionMode), y = d && p ? h : null, S = g, k = c.length === 0, T = {
        ...a,
        open: u,
        disabled: S,
        readOnly: f,
        popupSide: y,
        listEmpty: k,
        placeholder: b === "none" ? !1 : !_
    }, I = pu((A)=>{
        l.set("inputGroupElement", A);
    });
    return Lm("div", e, {
        ref: [
            n,
            I
        ],
        props: [
            {
                role: "group",
                onMouseDown (A) {
                    fZS(A, l, S, f, (P)=>Nf(l.state.chipsContainerRef.current, P));
                }
            },
            o
        ],
        state: T,
        stateAttributesMapping: z8r
    });
}), process.env.NODE_ENV !== "production" && (eTa.displayName = "ComboboxInputGroup");

}
