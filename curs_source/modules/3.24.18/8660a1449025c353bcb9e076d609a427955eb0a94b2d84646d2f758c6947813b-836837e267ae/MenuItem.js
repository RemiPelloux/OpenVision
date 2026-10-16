import { $I, Lm, iWe } from "./LYd.js";
import { WUt } from "./MenuPositionerContext.js";
import { F_e } from "./MenuRootContext.js";
import { COr, O_e, gSn } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { rWe } from "./useCompositeListItem.js";
import { EOr, TOr } from "./useMenuItem.js";
import { Om } from "./useRenderElement.js";
import * as WyS from "./react-runtime/react/esm-index-production.js";
var Vpa;
export { Vpa };
var __wakaru_GyS_initialized = false;
export function GyS() {
if (__wakaru_GyS_initialized) return;
__wakaru_GyS_initialized = true;
E(), EOr(), F_e(), Om(), _A(), rWe(), WUt(), Vpa = WyS.forwardRef(function(e, n) {
    const { render: i, className: r, id: s, label: o, nativeButton: a = !1, disabled: l = !1, closeOnClick: c = !0, style: u, ...d } = e, h = iWe({
        label: o
    }), p = gSn(!0), g = $I(s), { store: f } = O_e(), _ = f.useState("isActive", h.index), b = f.useState("itemProps"), { getItemProps: y, itemRef: S } = COr({
        closeOnClick: c,
        disabled: l,
        highlighted: _,
        id: g,
        store: f,
        nativeButton: a,
        nodeId: p?.context.nodeId,
        itemMetadata: TOr
    });
    return Lm("div", e, {
        state: {
            disabled: l,
            highlighted: _
        },
        props: [
            b,
            d,
            y
        ],
        ref: [
            S,
            n,
            h.ref
        ]
    });
}), process.env.NODE_ENV !== "production" && (Vpa.displayName = "MenuItem");

}
