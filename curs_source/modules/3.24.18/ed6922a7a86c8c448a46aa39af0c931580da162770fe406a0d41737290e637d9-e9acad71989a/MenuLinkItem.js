import { Svt } from "./MenuPositionerContext.js";
import { Xre } from "./MenuRootContext.js";
import { Yre, fFl, n6t } from "./f0s.js";
import { QK } from "./mergeProps.js";
import { I3, SR, e$, kp, vYe } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { t$ } from "./useButton.js";
import { _Ye } from "./useCompositeListItem.js";
import { vFl } from "./useMenuItemCommonProps.js";
import { wp } from "./useRenderElement.js";
import * as kFl from "./react-runtime/react/esm-index-production.js";
var n1s;
export { n1s };
var __wakaru_caf_initialized = false;
export function caf() {
if (__wakaru_caf_initialized) return;
__wakaru_caf_initialized = true;
x(), Xre(), wp(), TD(), _Ye(), Svt(), vFl(), t$(), QK(), n1s = kFl.forwardRef(function(t, n) {
    const { render: i, className: r, id: s, label: o, closeOnClick: a = !1, style: c, ...l } = t, u = kFl.useRef(null), h = vYe({
        label: o
    }), g = n6t(!0)?.context.nodeId, f = SR(s), { store: v } = Yre(), b = v.useState("isActive", h.index), y = v.useState("itemProps"), T = v.context.typingRef, { getButtonProps: E, buttonRef: A } = e$({
        native: !1,
        composite: !0
    }), R = fFl({
        closeOnClick: a,
        highlighted: b,
        id: f,
        nodeId: g,
        store: v,
        typingRef: T,
        itemRef: u
    });
    function D(N) {
        return I3(R, N, E);
    }
    return kp("a", t, {
        state: {
            highlighted: b
        },
        props: [
            y,
            l,
            D
        ],
        ref: [
            u,
            A,
            n,
            h.ref
        ]
    });
}), process.env.NODE_ENV !== "production" && (n1s.displayName = "MenuLinkItem");

}
