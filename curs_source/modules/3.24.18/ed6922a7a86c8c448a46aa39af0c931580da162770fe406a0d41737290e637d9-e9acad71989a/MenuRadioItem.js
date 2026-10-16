import { Svt } from "./MenuPositionerContext.js";
import { RFl } from "./MenuRadioGroupContext.js";
import { a1s, vaf } from "./MenuRadioItemContext.js";
import { Xre } from "./MenuRootContext.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { Yre, maf, n6t, nDi } from "./f0s.js";
import { Qu, SR, kp, vYe } from "./qIc.js";
import { V5e, g_ } from "./reason-parts.js";
import { X0s, _Fl } from "./stateAttributesMapping_2.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { _Ye } from "./useCompositeListItem.js";
import { iDi, rDi } from "./useMenuItem.js";
import { wp } from "./useRenderElement.js";
import * as MFl from "./react-runtime/react/esm-index-production.js";
import { jsx as _af } from "./react-runtime/react/esm-jsx-runtime-production.js";
var c1s;
export { c1s };
var __wakaru_baf_initialized = false;
export function baf() {
if (__wakaru_baf_initialized) return;
__wakaru_baf_initialized = true;
x(), Xre(), wp(), TD(), RFl(), vaf(), _Fl(), _Ye(), rDi(), Svt(), Ty(), g_(), c1s = MFl.forwardRef(function(t, n) {
    const { render: i, className: r, id: s, label: o, nativeButton: a = !1, disabled: c = !1, closeOnClick: l = !1, value: u, style: h, ...p } = t, g = vYe({
        label: o
    }), f = n6t(!0), v = SR(s), { store: b } = Yre(), y = b.useState("isActive", g.index), T = b.useState("itemProps"), { value: E, setValue: A, disabled: R } = maf(), D = R || c, P = E === u, { getItemProps: N, itemRef: O } = nDi({
        closeOnClick: l,
        disabled: D,
        highlighted: y,
        id: v,
        store: b,
        nativeButton: a,
        nodeId: f?.context.nodeId,
        itemMetadata: iDi
    }), F = MFl.useMemo(()=>({
            disabled: D,
            highlighted: y,
            checked: P
        }), [
        D,
        y,
        P
    ]);
    function H(W) {
        const G = Qu(V5e, W.nativeEvent, void 0, {
            preventUnmountOnClose () {}
        });
        A(u, G);
    }
    const $ = kp("div", t, {
        state: F,
        stateAttributesMapping: X0s,
        props: [
            T,
            {
                role: "menuitemradio",
                "aria-checked": P,
                onClick: H
            },
            p,
            N
        ],
        ref: [
            O,
            n,
            g.ref
        ]
    });
    return _af(a1s.Provider, {
        value: F,
        children: $
    });
}), process.env.NODE_ENV !== "production" && (c1s.displayName = "MenuRadioItem");

}
