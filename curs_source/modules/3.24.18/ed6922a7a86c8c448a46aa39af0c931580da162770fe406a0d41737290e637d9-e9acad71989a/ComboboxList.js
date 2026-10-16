import { GQl } from "./ComboboxCollection.js";
import { P2i } from "./ComboboxPositionerContext.js";
import { Nue } from "./ComboboxRootContext.js";
import { VSn } from "./CompositeList.js";
import { lj } from "./event_3.js";
import { E2i, GPs, PEn, _6e, wve } from "./f0s.js";
import { GSn, jc, kp, su, wU } from "./qIc.js";
import { b6e, op } from "./store_5.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import { Cy } from "./useStableCallback.js";
import { kU } from "./useStore.js";
import * as VQl from "./react-runtime/react/esm-index-production.js";
import { jsx as jQl } from "./react-runtime/react/esm-jsx-runtime-production.js";
var KPs;
export { KPs };
var __wakaru_rUf_initialized = false;
export function rUf() {
if (__wakaru_rUf_initialized) return;
__wakaru_rUf_initialized = true;
x(), Cy(), wp(), Nue(), P2i(), b6e(), GQl(), VSn(), kU(), lj(), KPs = VQl.forwardRef(function(t, n) {
    var i;
    const { render: r, className: s, style: o, children: a, ...c } = t, l = wve(), u = E2i(), h = !!GPs(!0), { filteredItems: p, hasItems: g } = _6e(), f = jc(l, op.selectionMode), v = jc(l, op.grid), b = jc(l, op.popupProps), y = jc(l, op.virtualized), T = jc(l, op.forceMounted), E = f === "multiple", A = p.length === 0, R = su(($)=>{
        l.set("positionerElement", $);
    }), D = su(($)=>{
        l.set("listElement", $);
    }), P = VQl.useMemo(()=>typeof a == "function" ? i || (i = jQl(PEn, {
            children: a
        })) : a, [
        a
    ]), N = {
        empty: A
    }, O = u.useState("floatingId"), F = kp("div", t, {
        state: N,
        ref: [
            n,
            D,
            h ? null : R
        ],
        props: [
            b,
            {
                children: P,
                tabIndex: -1,
                id: O,
                role: v ? "grid" : "listbox",
                "aria-multiselectable": E ? "true" : void 0,
                onKeyDown ($) {
                    if (!(l.state.disabled || l.state.readOnly) && $.key === "Enter") {
                        const W = l.state.activeIndex;
                        if (W == null) return;
                        wU($);
                        const G = $.nativeEvent, q = l.state.listRef.current[W];
                        q && (l.state.selectionEventRef.current = G, q.click(), l.state.selectionEventRef.current = null);
                    }
                },
                onKeyDownCapture () {
                    l.state.keyboardActiveRef.current = !0;
                },
                onPointerMoveCapture () {
                    l.state.keyboardActiveRef.current = !1;
                }
            },
            c
        ]
    });
    if (y) return F;
    const H = g && !T ? void 0 : l.state.labelsRef;
    return jQl(GSn, {
        elementsRef: l.state.listRef,
        labelsRef: H,
        children: F
    });
}), process.env.NODE_ENV !== "production" && (KPs.displayName = "ComboboxList");

}
