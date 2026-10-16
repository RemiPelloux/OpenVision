import { $I, GQ, Lm, NRe, iWe, lbn } from "./LYd.js";
import { Msp, RqS } from "./TabsPanelDataAttributes.js";
import { Cfi } from "./TabsRootContext.js";
import { cbn } from "./inertValue.js";
import { qBr } from "./ipa.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { Tfi, gkn } from "./stateAttributesMapping_7.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { rWe } from "./useCompositeListItem.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { qQ } from "./useOpenChangeComplete.js";
import { Om } from "./useRenderElement.js";
import { LRe } from "./useTransitionStatus.js";
import * as r0a from "./react-runtime/react/esm-index-production.js";
var Dsp, s0a;
export { Dsp, s0a };
var __wakaru_PqS_initialized = false;
export function PqS() {
if (__wakaru_PqS_initialized) return;
__wakaru_PqS_initialized = true;
E(), cbn(), jv(), _A(), l6(), qQ(), LRe(), Om(), rWe(), Tfi(), Cfi(), RqS(), Dsp = {
    ...gkn,
    ...D7
}, s0a = r0a.forwardRef(function(e, n) {
    const { className: i, value: r, render: s, keepMounted: o = !1, style: a, ...l } = e, { value: c, getTabIdByPanelValue: u, orientation: d, tabActivationDirection: h, registerMountedTabPanel: p, unregisterMountedTabPanel: g } = qBr(), f = $I(), _ = r0a.useMemo(()=>({
            id: f,
            value: r
        }), [
        f,
        r
    ]), { ref: b, index: y } = iWe({
        metadata: _
    }), S = r === c, { mounted: k, transitionStatus: C, setMounted: T } = NRe(S), I = !k, A = u(r), P = {
        hidden: I,
        orientation: d,
        tabActivationDirection: h,
        transitionStatus: C
    }, M = r0a.useRef(null), O = Lm("div", e, {
        state: P,
        ref: [
            n,
            b,
            M
        ],
        props: [
            {
                "aria-labelledby": A,
                hidden: I,
                id: f,
                role: "tabpanel",
                tabIndex: S ? 0 : -1,
                inert: lbn(!S),
                [Msp.index]: y
            },
            l
        ],
        stateAttributesMapping: Dsp
    });
    return GQ({
        open: S,
        ref: M,
        onComplete () {
            S || T(!1);
        }
    }), su(()=>{
        if (!(I && !o) && f != null) return p(r, f), ()=>{
            g(r, f);
        };
    }, [
        I,
        o,
        r,
        f,
        p,
        g
    ]), o || k ? O : null;
}), process.env.NODE_ENV !== "production" && (s0a.displayName = "TabsPanel");

}
