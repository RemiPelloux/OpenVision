import { iTa } from "./ComboboxCollection.js";
import { K8r } from "./ComboboxPositionerContext.js";
import { Y_e } from "./ComboboxRootContext.js";
import { dbn } from "./CompositeList.js";
import { Ez, Ic, Lm, pu, ubn } from "./LYd.js";
import { Sne } from "./event_3.js";
import { JCa, U8r, bGe, x0e, zkn } from "./ipa.js";
import { gm, yGe } from "./store_5.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import { TW } from "./useStore.js";
import { jsx as Ecp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as Tcp from "./react-runtime/react/esm-index-production.js";
var Yfi;
export { Yfi };
var __wakaru_Icp_initialized = false;
export function Icp() {
if (__wakaru_Icp_initialized) return;
__wakaru_Icp_initialized = true;
E(), Jy(), Om(), Y_e(), K8r(), yGe(), iTa(), dbn(), TW(), Sne(), Yfi = Tcp.forwardRef(function(e, n) {
    var i;
    const { render: r, className: s, style: o, children: a, ...l } = e, c = x0e(), u = U8r(), d = !!JCa(!0), { filteredItems: h, hasItems: p } = bGe(), g = Ic(c, gm.selectionMode), f = Ic(c, gm.grid), _ = Ic(c, gm.popupProps), b = Ic(c, gm.virtualized), y = Ic(c, gm.forceMounted), S = g === "multiple", k = h.length === 0, C = pu((N)=>{
        c.set("positionerElement", N);
    }), T = pu((N)=>{
        c.set("listElement", N);
    }), I = Tcp.useMemo(()=>typeof a == "function" ? i || (i = Ecp(zkn, {
            children: a
        })) : a, [
        a
    ]), A = {
        empty: k
    }, P = u.useState("floatingId"), M = Lm("div", e, {
        state: A,
        ref: [
            n,
            T,
            d ? null : C
        ],
        props: [
            _,
            {
                children: I,
                tabIndex: -1,
                id: P,
                role: f ? "grid" : "listbox",
                "aria-multiselectable": S ? "true" : void 0,
                onKeyDown (N) {
                    if (!(c.state.disabled || c.state.readOnly) && N.key === "Enter") {
                        const U = c.state.activeIndex;
                        if (U == null) return;
                        Ez(N);
                        const j = N.nativeEvent, $ = c.state.listRef.current[U];
                        $ && (c.state.selectionEventRef.current = j, $.click(), c.state.selectionEventRef.current = null);
                    }
                },
                onKeyDownCapture () {
                    c.state.keyboardActiveRef.current = !0;
                },
                onPointerMoveCapture () {
                    c.state.keyboardActiveRef.current = !1;
                }
            },
            l
        ]
    });
    if (b) return M;
    const O = p && !y ? void 0 : c.state.labelsRef;
    return Ecp(ubn, {
        elementsRef: c.state.listRef,
        labelsRef: O,
        children: M
    });
}), process.env.NODE_ENV !== "production" && (Yfi.displayName = "ComboboxList");

}
