import { pMs } from "./TabsListContext.js";
import { KNi } from "./TabsRootContext.js";
import { pTs, yBl } from "./constants_14.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { GYl, dMs } from "./f0s.js";
import { C5 } from "./owner.js";
import { KS, Qu, SR, cg, e$, kp, uj, wSl } from "./qIc.js";
import { g_, lN } from "./reason-parts.js";
import { cN } from "./shadowDom.js";
import { YNi, pEn } from "./stateAttributesMapping_7.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { t$ } from "./useButton.js";
import { CSl } from "./useCompositeItem.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { wp } from "./useRenderElement.js";
import * as T4t from "./react-runtime/react/esm-index-production.js";
var mMs;
export { mMs };
var __wakaru_tBf_initialized = false;
export function tBf() {
if (__wakaru_tBf_initialized) return;
__wakaru_tBf_initialized = true;
x(), C5(), af(), TD(), wp(), yBl(), CSl(), KNi(), YNi(), pMs(), Ty(), cN(), t$(), g_(), mMs = T4t.forwardRef(function(t, n) {
    const { className: i, disabled: r = !1, render: s, value: o, id: a, nativeButton: c = !0, style: l, ...u } = t, { value: h, getTabPanelIdByValue: p, orientation: g, tabActivationDirection: f } = dMs(), { activateOnFocus: v, highlightedTabIndex: b, onTabActivation: y, registerTabResizeObserverElement: T, setHighlightedTabIndex: E, tabsListElement: A } = GYl(), R = SR(a), D = T4t.useMemo(()=>({
            disabled: r,
            id: R,
            value: o
        }), [
        r,
        R,
        o
    ]), { compositeProps: P, compositeRef: N, index: O } = wSl({
        metadata: D
    }), F = o === h, H = T4t.useRef(!1), $ = T4t.useRef(null);
    gl(()=>{
        const ee = $.current;
        if (ee) return T(ee);
    }, [
        T
    ]), gl(()=>{
        if (H.current) {
            H.current = !1;
            return;
        }
        if (!(F && O > -1 && b !== O)) return;
        const ee = A;
        if (ee != null) {
            const se = uj(KS(ee));
            if (se && cg(ee, se)) return;
        }
        r || E(O);
    }, [
        F,
        O,
        b,
        E,
        r,
        A
    ]);
    const { getButtonProps: W, buttonRef: G } = e$({
        disabled: r,
        native: c,
        focusableWhenDisabled: !0
    }), q = p(o), z = T4t.useRef(!1), X = T4t.useRef(!1);
    function Y(ee) {
        F || r || y(o, Qu(lN, ee.nativeEvent, void 0, {
            activationDirection: "none"
        }));
    }
    function Z(ee) {
        F || (O > -1 && !r && E(O), !r && v && (!z.current || z.current && X.current) && y(o, Qu(lN, ee.nativeEvent, void 0, {
            activationDirection: "none"
        })));
    }
    function K(ee) {
        if (F || r) return;
        z.current = !0;
        function se() {
            z.current = !1, X.current = !1;
        }
        (!ee.button || ee.button === 0) && (X.current = !0, KS(ee.currentTarget).addEventListener("pointerup", se, {
            once: !0
        }));
    }
    return kp("button", t, {
        state: {
            disabled: r,
            active: F,
            orientation: g,
            tabActivationDirection: f
        },
        ref: [
            n,
            G,
            N,
            $
        ],
        props: [
            P,
            {
                role: "tab",
                "aria-controls": q,
                "aria-selected": F,
                id: R,
                onClick: Y,
                onFocus: Z,
                onPointerDown: K,
                [pTs]: F ? "" : void 0,
                onKeyDownCapture () {
                    H.current = !0;
                }
            },
            u,
            W
        ],
        stateAttributesMapping: pEn
    });
}), process.env.NODE_ENV !== "production" && (mMs.displayName = "TabsTab");

}
