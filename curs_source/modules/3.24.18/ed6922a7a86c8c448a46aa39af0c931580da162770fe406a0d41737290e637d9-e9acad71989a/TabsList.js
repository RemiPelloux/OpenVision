import { $lf } from "./CompositeRoot.js";
import { XNi, pMs } from "./TabsListContext.js";
import { KNi } from "./TabsRootContext.js";
import { Are, LE } from "./empty.js";
import { Ulf, dMs } from "./f0s.js";
import { su } from "./qIc.js";
import { YNi, pEn } from "./stateAttributesMapping_7.js";
import { x } from "./tslib.es6.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { Cy } from "./useStableCallback.js";
import * as F_t from "./react-runtime/react/esm-index-production.js";
import { jsx as qYl } from "./react-runtime/react/esm-jsx-runtime-production.js";
var vMs;
export { vMs };
var __wakaru_hBf_initialized = false;
export function hBf() {
if (__wakaru_hBf_initialized) return;
__wakaru_hBf_initialized = true;
x(), Cy(), af(), LE(), $lf(), YNi(), KNi(), pMs(), vMs = F_t.forwardRef(function(t, n) {
    const { activateOnFocus: i = !1, className: r, loopFocus: s = !0, render: o, style: a, ...c } = t, { onValueChange: l, orientation: u, value: h, setTabMap: p, tabActivationDirection: g } = dMs(), [f, v] = F_t.useState(0), [b, y] = F_t.useState(null), T = F_t.useRef(new Set), E = F_t.useRef(new Set), A = F_t.useRef(null);
    gl(()=>{
        if (typeof ResizeObserver > "u") return;
        const H = new ResizeObserver(()=>{
            T.current.forEach(($)=>{
                $();
            });
        });
        return A.current = H, b && H.observe(b), E.current.forEach(($)=>{
            H.observe($);
        }), ()=>{
            H.disconnect(), A.current = null;
        };
    }, [
        b
    ]);
    const R = su((H)=>(T.current.add(H), ()=>{
            T.current.delete(H);
        })), D = su((H)=>(E.current.add(H), A.current?.observe(H), ()=>{
            E.current.delete(H), A.current?.unobserve(H);
        })), P = su((H, $)=>{
        H !== h && l(H, $);
    }), N = {
        orientation: u,
        tabActivationDirection: g
    }, O = {
        "aria-orientation": u === "vertical" ? "vertical" : void 0,
        role: "tablist"
    }, F = F_t.useMemo(()=>({
            activateOnFocus: i,
            highlightedTabIndex: f,
            registerIndicatorUpdateListener: R,
            registerTabResizeObserverElement: D,
            onTabActivation: P,
            setHighlightedTabIndex: v,
            tabsListElement: b
        }), [
        i,
        f,
        R,
        D,
        P,
        v,
        b
    ]);
    return qYl(XNi.Provider, {
        value: F,
        children: qYl(Ulf, {
            render: o,
            className: r,
            style: a,
            state: N,
            refs: [
                n,
                y
            ],
            props: [
                O,
                c
            ],
            stateAttributesMapping: pEn,
            highlightedIndex: f,
            enableHomeAndEndKeys: !0,
            loopFocus: s,
            orientation: u,
            onHighlightedIndexChange: v,
            onMapChange: p,
            disabledIndices: Are
        })
    });
}), process.env.NODE_ENV !== "production" && (vMs.displayName = "TabsList");

}
