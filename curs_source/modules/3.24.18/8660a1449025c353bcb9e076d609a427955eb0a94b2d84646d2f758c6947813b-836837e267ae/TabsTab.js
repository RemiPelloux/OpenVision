import { $I, Lm, Nf, OY, Vkh, ak, wz, zd } from "./LYd.js";
import { n0a } from "./TabsListContext.js";
import { Cfi } from "./TabsRootContext.js";
import { s5r, sga } from "./constants_14.js";
import { VS } from "./createBaseUIEventDetails.js";
import { Tsp, qBr } from "./ipa.js";
import { hB } from "./owner.js";
import { Zb, kO } from "./reason-parts.js";
import { $D } from "./shadowDom.js";
import { Tfi, gkn } from "./stateAttributesMapping_7.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { Cz } from "./useButton.js";
import { Kkh } from "./useCompositeItem.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { Om } from "./useRenderElement.js";
import * as fkn from "./react-runtime/react/esm-index-production.js";
var YBr;
export { YBr };
var __wakaru_Esp_initialized = false;
export function Esp() {
if (__wakaru_Esp_initialized) return;
__wakaru_Esp_initialized = true;
E(), hB(), jv(), _A(), Om(), sga(), Kkh(), Cfi(), Tfi(), n0a(), VS(), $D(), Cz(), Zb(), YBr = fkn.forwardRef(function(e, n) {
    const { className: i, disabled: r = !1, render: s, value: o, id: a, nativeButton: l = !0, style: c, ...u } = e, { value: d, getTabPanelIdByValue: h, orientation: p, tabActivationDirection: g } = qBr(), { activateOnFocus: f, highlightedTabIndex: _, onTabActivation: b, registerTabResizeObserverElement: y, setHighlightedTabIndex: S, tabsListElement: k } = Tsp(), C = $I(a), T = fkn.useMemo(()=>({
            disabled: r,
            id: C,
            value: o
        }), [
        r,
        C,
        o
    ]), { compositeProps: I, compositeRef: A, index: P } = Vkh({
        metadata: T
    }), M = o === d, O = fkn.useRef(!1), N = fkn.useRef(null);
    su(()=>{
        const Q = N.current;
        if (Q) return y(Q);
    }, [
        y
    ]), su(()=>{
        if (O.current) {
            O.current = !1;
            return;
        }
        if (!(M && P > -1 && _ !== P)) return;
        const Q = k;
        if (Q != null) {
            const te = OY(ak(Q));
            if (te && Nf(Q, te)) return;
        }
        r || S(P);
    }, [
        M,
        P,
        _,
        S,
        r,
        k
    ]);
    const { getButtonProps: U, buttonRef: j } = wz({
        disabled: r,
        native: l,
        focusableWhenDisabled: !0
    }), $ = h(o), H = fkn.useRef(!1), G = fkn.useRef(!1);
    function q(Q) {
        M || r || b(o, zd(kO, Q.nativeEvent, void 0, {
            activationDirection: "none"
        }));
    }
    function K(Q) {
        M || (P > -1 && !r && S(P), !r && f && (!H.current || H.current && G.current) && b(o, zd(kO, Q.nativeEvent, void 0, {
            activationDirection: "none"
        })));
    }
    function V(Q) {
        if (M || r) return;
        H.current = !0;
        function te() {
            H.current = !1, G.current = !1;
        }
        (!Q.button || Q.button === 0) && (G.current = !0, ak(Q.currentTarget).addEventListener("pointerup", te, {
            once: !0
        }));
    }
    return Lm("button", e, {
        state: {
            disabled: r,
            active: M,
            orientation: p,
            tabActivationDirection: g
        },
        ref: [
            n,
            j,
            A,
            N
        ],
        props: [
            I,
            {
                role: "tab",
                "aria-controls": $,
                "aria-selected": M,
                id: C,
                onClick: q,
                onFocus: K,
                onPointerDown: V,
                [s5r]: M ? "" : void 0,
                onKeyDownCapture () {
                    O.current = !0;
                }
            },
            u,
            U
        ],
        stateAttributesMapping: gkn
    });
}), process.env.NODE_ENV !== "production" && (YBr.displayName = "TabsTab");

}
