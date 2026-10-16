import { i9h } from "./CompositeRoot.js";
import { pu } from "./LYd.js";
import { KBr, n0a } from "./TabsListContext.js";
import { Cfi } from "./TabsRootContext.js";
import { vA, xoe } from "./empty.js";
import { n9h, qBr } from "./ipa.js";
import { Tfi, gkn } from "./stateAttributesMapping_7.js";
import { E } from "./tslib.es6.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { Jy } from "./useStableCallback.js";
import { jsx as Nsp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as S$t from "./react-runtime/react/esm-index-production.js";
var ZBr;
export { ZBr };
var __wakaru_Lsp_initialized = false;
export function Lsp() {
if (__wakaru_Lsp_initialized) return;
__wakaru_Lsp_initialized = true;
E(), Jy(), jv(), vA(), i9h(), Tfi(), Cfi(), n0a(), ZBr = S$t.forwardRef(function(e, n) {
    const { activateOnFocus: i = !1, className: r, loopFocus: s = !0, render: o, style: a, ...l } = e, { onValueChange: c, orientation: u, value: d, setTabMap: h, tabActivationDirection: p } = qBr(), [g, f] = S$t.useState(0), [_, b] = S$t.useState(null), y = S$t.useRef(new Set), S = S$t.useRef(new Set), k = S$t.useRef(null);
    su(()=>{
        if (typeof ResizeObserver > "u") return;
        const O = new ResizeObserver(()=>{
            y.current.forEach((N)=>{
                N();
            });
        });
        return k.current = O, _ && O.observe(_), S.current.forEach((N)=>{
            O.observe(N);
        }), ()=>{
            O.disconnect(), k.current = null;
        };
    }, [
        _
    ]);
    const C = pu((O)=>(y.current.add(O), ()=>{
            y.current.delete(O);
        })), T = pu((O)=>(S.current.add(O), k.current?.observe(O), ()=>{
            S.current.delete(O), k.current?.unobserve(O);
        })), I = pu((O, N)=>{
        O !== d && c(O, N);
    }), A = {
        orientation: u,
        tabActivationDirection: p
    }, P = {
        "aria-orientation": u === "vertical" ? "vertical" : void 0,
        role: "tablist"
    }, M = S$t.useMemo(()=>({
            activateOnFocus: i,
            highlightedTabIndex: g,
            registerIndicatorUpdateListener: C,
            registerTabResizeObserverElement: T,
            onTabActivation: I,
            setHighlightedTabIndex: f,
            tabsListElement: _
        }), [
        i,
        g,
        C,
        T,
        I,
        f,
        _
    ]);
    return Nsp(KBr.Provider, {
        value: M,
        children: Nsp(n9h, {
            render: o,
            className: r,
            style: a,
            state: A,
            refs: [
                n,
                b
            ],
            props: [
                P,
                l
            ],
            stateAttributesMapping: gkn,
            highlightedIndex: g,
            enableHomeAndEndKeys: !0,
            loopFocus: s,
            orientation: u,
            onHighlightedIndexChange: f,
            onMapChange: h,
            disabledIndices: xoe
        })
    });
}), process.env.NODE_ENV !== "production" && (ZBr.displayName = "TabsList");

}
