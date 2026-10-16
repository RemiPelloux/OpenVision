import { Svt } from "./MenuPositionerContext.js";
import { Xre } from "./MenuRootContext.js";
import { Yre, n6t, nDi } from "./f0s.js";
import { SR, kp, vYe } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { _Ye } from "./useCompositeListItem.js";
import { iDi, rDi } from "./useMenuItem.js";
import { wp } from "./useRenderElement.js";
import * as oaf from "./react-runtime/react/esm-index-production.js";
var t1s;
export { t1s };
var __wakaru_aaf_initialized = false;
export function aaf() {
if (__wakaru_aaf_initialized) return;
__wakaru_aaf_initialized = true;
x(), rDi(), Xre(), wp(), TD(), _Ye(), Svt(), t1s = oaf.forwardRef(function(t, n) {
    const { render: i, className: r, id: s, label: o, nativeButton: a = !1, disabled: c = !1, closeOnClick: l = !0, style: u, ...h } = t, p = vYe({
        label: o
    }), g = n6t(!0), f = SR(s), { store: v } = Yre(), b = v.useState("isActive", p.index), y = v.useState("itemProps"), { getItemProps: T, itemRef: E } = nDi({
        closeOnClick: l,
        disabled: c,
        highlighted: b,
        id: f,
        store: v,
        nativeButton: a,
        nodeId: g?.context.nodeId,
        itemMetadata: iDi
    });
    return kp("div", t, {
        state: {
            disabled: c,
            highlighted: b
        },
        props: [
            y,
            h,
            T
        ],
        ref: [
            E,
            n,
            p.ref
        ]
    });
}), process.env.NODE_ENV !== "production" && (t1s.displayName = "MenuItem");

}
