import { $I, Lm, iWe, zd } from "./LYd.js";
import { WUt } from "./MenuPositionerContext.js";
import { a6h } from "./MenuRadioGroupContext.js";
import { Jpa, eSS } from "./MenuRadioItemContext.js";
import { F_e } from "./MenuRootContext.js";
import { VS } from "./createBaseUIEventDetails.js";
import { COr, O_e, ZyS, gSn } from "./ipa.js";
import { Zb, qnt } from "./reason-parts.js";
import { Hpa, YFh } from "./stateAttributesMapping_2.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { rWe } from "./useCompositeListItem.js";
import { EOr, TOr } from "./useMenuItem.js";
import { Om } from "./useRenderElement.js";
import * as c6h from "./react-runtime/react/esm-index-production.js";
import { jsx as tSS } from "./react-runtime/react/esm-jsx-runtime-production.js";
var ema;
export { ema };
var __wakaru_nSS_initialized = false;
export function nSS() {
if (__wakaru_nSS_initialized) return;
__wakaru_nSS_initialized = true;
E(), F_e(), Om(), _A(), a6h(), eSS(), YFh(), rWe(), EOr(), WUt(), VS(), Zb(), ema = c6h.forwardRef(function(e, n) {
    const { render: i, className: r, id: s, label: o, nativeButton: a = !1, disabled: l = !1, closeOnClick: c = !1, value: u, style: d, ...h } = e, p = iWe({
        label: o
    }), g = gSn(!0), f = $I(s), { store: _ } = O_e(), b = _.useState("isActive", p.index), y = _.useState("itemProps"), { value: S, setValue: k, disabled: C } = ZyS(), T = C || l, I = S === u, { getItemProps: A, itemRef: P } = COr({
        closeOnClick: c,
        disabled: T,
        highlighted: b,
        id: f,
        store: _,
        nativeButton: a,
        nodeId: g?.context.nodeId,
        itemMetadata: TOr
    }), M = c6h.useMemo(()=>({
            disabled: T,
            highlighted: b,
            checked: I
        }), [
        T,
        b,
        I
    ]);
    function O(U) {
        const j = zd(qnt, U.nativeEvent, void 0, {
            preventUnmountOnClose () {}
        });
        k(u, j);
    }
    const N = Lm("div", e, {
        state: M,
        stateAttributesMapping: Hpa,
        props: [
            y,
            {
                role: "menuitemradio",
                "aria-checked": I,
                onClick: O
            },
            h,
            A
        ],
        ref: [
            P,
            n,
            p.ref
        ]
    });
    return tSS(Jpa.Provider, {
        value: M,
        children: N
    });
}), process.env.NODE_ENV !== "production" && (ema.displayName = "MenuRadioItem");

}
