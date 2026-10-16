import { $I, Lm, iWe, yne, zd } from "./LYd.js";
import { DyS, Upa } from "./MenuCheckboxItemContext.js";
import { WUt } from "./MenuPositionerContext.js";
import { F_e } from "./MenuRootContext.js";
import { VS } from "./createBaseUIEventDetails.js";
import { COr, O_e, gSn } from "./ipa.js";
import { Zb, qnt } from "./reason-parts.js";
import { Hpa, YFh } from "./stateAttributesMapping_2.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { rWe } from "./useCompositeListItem.js";
import { __e } from "./useControlled.js";
import { EOr, TOr } from "./useMenuItem.js";
import { Om } from "./useRenderElement.js";
import { jsx as OyS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as XFh from "./react-runtime/react/esm-index-production.js";
var Wpa;
export { Wpa };
var __wakaru_FyS_initialized = false;
export function FyS() {
if (__wakaru_FyS_initialized) return;
__wakaru_FyS_initialized = true;
E(), __e(), DyS(), EOr(), rWe(), F_e(), Om(), _A(), YFh(), WUt(), VS(), Zb(), Wpa = XFh.forwardRef(function(e, n) {
    const { render: i, className: r, id: s, label: o, nativeButton: a = !1, disabled: l = !1, closeOnClick: c = !1, checked: u, defaultChecked: d, onCheckedChange: h, style: p, ...g } = e, f = iWe({
        label: o
    }), _ = gSn(!0), b = $I(s), { store: y } = O_e(), S = y.useState("isActive", f.index), k = y.useState("itemProps"), [C, T] = yne({
        controlled: u,
        default: d ?? !1,
        name: "MenuCheckboxItem",
        state: "checked"
    }), { getItemProps: I, itemRef: A } = COr({
        closeOnClick: c,
        disabled: l,
        highlighted: S,
        id: b,
        store: y,
        nativeButton: a,
        nodeId: _?.context.nodeId,
        itemMetadata: TOr
    }), P = XFh.useMemo(()=>({
            disabled: l,
            highlighted: S,
            checked: C
        }), [
        l,
        S,
        C
    ]);
    function M(N) {
        const U = zd(qnt, N.nativeEvent, void 0, {
            preventUnmountOnClose () {}
        });
        h?.(!C, U), !U.isCanceled && T((j)=>!j);
    }
    const O = Lm("div", e, {
        state: P,
        stateAttributesMapping: Hpa,
        props: [
            k,
            {
                role: "menuitemcheckbox",
                "aria-checked": C,
                onClick: M
            },
            g,
            I
        ],
        ref: [
            A,
            n,
            f.ref
        ]
    });
    return OyS(Upa.Provider, {
        value: P,
        children: O
    });
}), process.env.NODE_ENV !== "production" && (Wpa.displayName = "MenuCheckboxItem");

}
