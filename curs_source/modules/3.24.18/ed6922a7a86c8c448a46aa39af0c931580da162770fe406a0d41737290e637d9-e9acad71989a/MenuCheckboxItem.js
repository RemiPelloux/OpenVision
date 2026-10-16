import { Xof, z0s } from "./MenuCheckboxItemContext.js";
import { Svt } from "./MenuPositionerContext.js";
import { Xre } from "./MenuRootContext.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { Yre, n6t, nDi } from "./f0s.js";
import { Mre, Qu, SR, kp, vYe } from "./qIc.js";
import { V5e, g_ } from "./reason-parts.js";
import { X0s, _Fl } from "./stateAttributesMapping_2.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { _Ye } from "./useCompositeListItem.js";
import { sCe } from "./useControlled.js";
import { iDi, rDi } from "./useMenuItem.js";
import { wp } from "./useRenderElement.js";
import { jsx as Jof } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as bFl from "./react-runtime/react/esm-index-production.js";
var Z0s;
export { Z0s };
var __wakaru_eaf_initialized = false;
export function eaf() {
if (__wakaru_eaf_initialized) return;
__wakaru_eaf_initialized = true;
x(), sCe(), Xof(), rDi(), _Ye(), Xre(), wp(), TD(), _Fl(), Svt(), Ty(), g_(), Z0s = bFl.forwardRef(function(t, n) {
    const { render: i, className: r, id: s, label: o, nativeButton: a = !1, disabled: c = !1, closeOnClick: l = !1, checked: u, defaultChecked: h, onCheckedChange: p, style: g, ...f } = t, v = vYe({
        label: o
    }), b = n6t(!0), y = SR(s), { store: T } = Yre(), E = T.useState("isActive", v.index), A = T.useState("itemProps"), [R, D] = Mre({
        controlled: u,
        default: h ?? !1,
        name: "MenuCheckboxItem",
        state: "checked"
    }), { getItemProps: P, itemRef: N } = nDi({
        closeOnClick: l,
        disabled: c,
        highlighted: E,
        id: y,
        store: T,
        nativeButton: a,
        nodeId: b?.context.nodeId,
        itemMetadata: iDi
    }), O = bFl.useMemo(()=>({
            disabled: c,
            highlighted: E,
            checked: R
        }), [
        c,
        E,
        R
    ]);
    function F($) {
        const W = Qu(V5e, $.nativeEvent, void 0, {
            preventUnmountOnClose () {}
        });
        p?.(!R, W), !W.isCanceled && D((G)=>!G);
    }
    const H = kp("div", t, {
        state: O,
        stateAttributesMapping: X0s,
        props: [
            A,
            {
                role: "menuitemcheckbox",
                "aria-checked": R,
                onClick: F
            },
            f,
            P
        ],
        ref: [
            N,
            n,
            v.ref
        ]
    });
    return Jof(z0s.Provider, {
        value: O,
        children: H
    });
}), process.env.NODE_ENV !== "production" && (Z0s.displayName = "MenuCheckboxItem");

}
