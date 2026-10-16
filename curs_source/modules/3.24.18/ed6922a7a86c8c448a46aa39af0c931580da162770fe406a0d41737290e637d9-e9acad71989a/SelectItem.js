import { D1i, cps } from "./SelectItemContext.js";
import { VRe } from "./SelectRootContext.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { lj } from "./event_3.js";
import { Ygt } from "./itemEquality.js";
import { Nfe, Q5e, Qu, e$, gsl, jc, kp, pds, vYe } from "./qIc.js";
import { V5e, g_ } from "./reason-parts.js";
import { J5e, f_ } from "./store_4.js";
import { x } from "./tslib.es6.js";
import { t$ } from "./useButton.js";
import { R1i, _Ye } from "./useCompositeListItem.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { wp } from "./useRenderElement.js";
import { kU } from "./useStore.js";
import * as bYe from "./react-runtime/react/esm-index-production.js";
import { jsx as tLg } from "./react-runtime/react/esm-jsx-runtime-production.js";
var lps;
export { lps };
var __wakaru_nLg_initialized = false;
export function nLg() {
if (__wakaru_nLg_initialized) return;
__wakaru_nLg_initialized = true;
x(), af(), VRe(), _Ye(), wp(), cps(), J5e(), Ty(), Ygt(), lj(), kU(), t$(), g_(), lps = bYe.memo(bYe.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, value: o = null, label: a, disabled: c = !1, nativeButton: l = !1, ...u } = t, h = bYe.useRef(null), p = vYe({
        label: a,
        textRef: h,
        indexGuessBehavior: R1i.GuessFromOrder
    }), { store: g, itemProps: f, setOpen: v, setValue: b, selectionRef: y, typingRef: T, valuesRef: E, multiple: A, selectedItemTextRef: R, disabled: D, readOnly: P } = Q5e(), N = jc(g, f_.isActive, p.index), O = jc(g, f_.open), F = jc(g, f_.isSelected, o), H = jc(g, f_.isSelectedByFocus, p.index), $ = jc(g, f_.isItemEqualToValue), W = p.index, G = W !== -1, q = bYe.useRef(null);
    gl(()=>{
        if (!G) return;
        const ce = E.current;
        return ce[W] = o, ()=>{
            delete ce[W];
        };
    }, [
        G,
        W,
        o,
        E
    ]), gl(()=>{
        if (!G) return;
        const ce = g.state.value;
        let de = ce;
        A && Array.isArray(ce) && (de = ce.length > 0 ? ce[ce.length - 1] : void 0), de !== void 0 && Nfe(o, de, $) && (g.set("selectedIndex", W), h.current && (R.current = h.current));
    }, [
        G,
        W,
        A,
        $,
        g,
        o,
        R
    ]);
    const z = bYe.useRef(null), X = bYe.useRef("mouse"), Y = bYe.useRef(!1), { getButtonProps: Z, buttonRef: K } = e$({
        disabled: c,
        focusableWhenDisabled: !0,
        native: l,
        composite: !0
    }), J = {
        disabled: c,
        selected: F,
        highlighted: N
    };
    function ne(ce) {
        if (D || P) return;
        const de = g.state.value;
        if (A) {
            const le = Array.isArray(de) ? de : [], ye = F ? gsl(le, o, $) : [
                ...le,
                o
            ];
            b(ye, Qu(V5e, ce));
        } else b(o, Qu(V5e, ce)), v(!1, Qu(V5e, ce));
    }
    function ee() {
        y.current.dragY = 0;
    }
    const se = {
        role: "option",
        "aria-selected": F,
        tabIndex: O && N ? 0 : -1,
        onKeyDown (ce) {
            z.current = ce.key, g.set("activeIndex", W), ce.key === " " && T.current && ce.preventDefault();
        },
        onClick (ce) {
            const de = ce.type === "click" && X.current !== "touch", le = ce.nativeEvent.pointerType, ye = de && pds(ce.nativeEvent) && (le !== void 0 || N), _e = de && !ye && !Y.current;
            Y.current = !1, !(ce.type === "keydown" && z.current === null) && (c || ce.type === "keydown" && z.current === " " && T.current || _e || (z.current = null, ne(ce.nativeEvent)));
        },
        onPointerEnter (ce) {
            X.current = ce.pointerType;
        },
        onPointerMove (ce) {
            if (ce.pointerType === "mouse" && ce.buttons === 1) {
                const de = y.current;
                de.dragY += ce.movementY, de.dragY ** 2 >= 64 && (de.allowUnselectedMouseUp = !0);
            }
        },
        onPointerDown (ce) {
            X.current = ce.pointerType, Y.current = !0, ee();
        },
        onMouseUp () {
            if (ee(), c || X.current === "touch" || Y.current) return;
            const ce = !y.current.allowSelectedMouseUp && F, de = !y.current.allowUnselectedMouseUp && !F;
            ce || de || (Y.current = !0, q.current?.click(), Y.current = !1);
        }
    }, re = kp("div", t, {
        ref: [
            K,
            n,
            p.ref,
            q
        ],
        state: J,
        props: [
            f,
            se,
            u,
            Z
        ]
    }), ue = bYe.useMemo(()=>({
            selected: F,
            index: W,
            textRef: h,
            selectedByFocus: H,
            hasRegistered: G
        }), [
        F,
        W,
        h,
        H,
        G
    ]);
    return tLg(D1i.Provider, {
        value: ue,
        children: re
    });
})), process.env.NODE_ENV !== "production" && (lps.displayName = "SelectItem");

}
