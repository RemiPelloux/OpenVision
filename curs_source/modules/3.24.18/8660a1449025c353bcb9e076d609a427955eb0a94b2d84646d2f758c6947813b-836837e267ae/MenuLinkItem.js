import { $I, Lm, iWe, uB, wz } from "./LYd.js";
import { WUt } from "./MenuPositionerContext.js";
import { F_e } from "./MenuRootContext.js";
import { O_e, VFh, gSn } from "./ipa.js";
import { mne } from "./mergeProps.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { Cz } from "./useButton.js";
import { rWe } from "./useCompositeListItem.js";
import { KFh } from "./useMenuItemCommonProps.js";
import { Om } from "./useRenderElement.js";
import * as JFh from "./react-runtime/react/esm-index-production.js";
var Kpa;
export { Kpa };
var __wakaru_qyS_initialized = false;
export function qyS() {
if (__wakaru_qyS_initialized) return;
__wakaru_qyS_initialized = true;
E(), F_e(), Om(), _A(), rWe(), WUt(), KFh(), Cz(), mne(), Kpa = JFh.forwardRef(function(e, n) {
    const { render: i, className: r, id: s, label: o, closeOnClick: a = !1, style: l, ...c } = e, u = JFh.useRef(null), d = iWe({
        label: o
    }), p = gSn(!0)?.context.nodeId, g = $I(s), { store: f } = O_e(), _ = f.useState("isActive", d.index), b = f.useState("itemProps"), y = f.context.typingRef, { getButtonProps: S, buttonRef: k } = wz({
        native: !1,
        composite: !0
    }), C = VFh({
        closeOnClick: a,
        highlighted: _,
        id: g,
        nodeId: p,
        store: f,
        typingRef: y,
        itemRef: u
    });
    function T(A) {
        return uB(C, A, S);
    }
    return Lm("a", e, {
        state: {
            highlighted: _
        },
        props: [
            b,
            c,
            T
        ],
        ref: [
            u,
            k,
            n,
            d.ref
        ]
    });
}), process.env.NODE_ENV !== "production" && (Kpa.displayName = "MenuLinkItem");

}
