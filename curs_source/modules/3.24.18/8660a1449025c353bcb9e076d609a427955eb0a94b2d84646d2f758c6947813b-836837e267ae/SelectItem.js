import { FRe, Ic, Lm, Qnt, dQo, elh, iWe, wz, zd } from "./LYd.js";
import { M2r, cea } from "./SelectItemContext.js";
import { tWe } from "./SelectRootContext.js";
import { VS } from "./createBaseUIEventDetails.js";
import { Sne } from "./event_3.js";
import { s7t } from "./itemEquality.js";
import { Zb, qnt } from "./reason-parts.js";
import { _S, iit } from "./store_4.js";
import { E } from "./tslib.es6.js";
import { Cz } from "./useButton.js";
import { P2r, rWe } from "./useCompositeListItem.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { Om } from "./useRenderElement.js";
import { TW } from "./useStore.js";
import * as HSt from "./react-runtime/react/esm-index-production.js";
import { jsx as s$y } from "./react-runtime/react/esm-jsx-runtime-production.js";
var uea;
export { uea };
var __wakaru_o$y_initialized = false;
export function o$y() {
if (__wakaru_o$y_initialized) return;
__wakaru_o$y_initialized = true;
E(), jv(), tWe(), rWe(), Om(), cea(), iit(), VS(), s7t(), Sne(), TW(), Cz(), Zb(), uea = HSt.memo(HSt.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, value: o = null, label: a, disabled: l = !1, nativeButton: c = !1, ...u } = e, d = HSt.useRef(null), h = iWe({
        label: a,
        textRef: d,
        indexGuessBehavior: P2r.GuessFromOrder
    }), { store: p, itemProps: g, setOpen: f, setValue: _, selectionRef: b, typingRef: y, valuesRef: S, multiple: k, selectedItemTextRef: C, disabled: T, readOnly: I } = Qnt(), A = Ic(p, _S.isActive, h.index), P = Ic(p, _S.open), M = Ic(p, _S.isSelected, o), O = Ic(p, _S.isSelectedByFocus, h.index), N = Ic(p, _S.isItemEqualToValue), U = h.index, j = U !== -1, $ = HSt.useRef(null);
    su(()=>{
        if (!j) return;
        const ie = S.current;
        return ie[U] = o, ()=>{
            delete ie[U];
        };
    }, [
        j,
        U,
        o,
        S
    ]), su(()=>{
        if (!j) return;
        const ie = p.state.value;
        let oe = ie;
        k && Array.isArray(ie) && (oe = ie.length > 0 ? ie[ie.length - 1] : void 0), oe !== void 0 && FRe(o, oe, N) && (p.set("selectedIndex", U), d.current && (C.current = d.current));
    }, [
        j,
        U,
        k,
        N,
        p,
        o,
        C
    ]);
    const H = HSt.useRef(null), G = HSt.useRef("mouse"), q = HSt.useRef(!1), { getButtonProps: K, buttonRef: V } = wz({
        disabled: l,
        focusableWhenDisabled: !0,
        native: c,
        composite: !0
    }), Y = {
        disabled: l,
        selected: M,
        highlighted: A
    };
    function J(ie) {
        if (T || I) return;
        const oe = p.state.value;
        if (k) {
            const se = Array.isArray(oe) ? oe : [], le = M ? elh(se, o, N) : [
                ...se,
                o
            ];
            _(le, zd(qnt, ie));
        } else _(o, zd(qnt, ie)), f(!1, zd(qnt, ie));
    }
    function Q() {
        b.current.dragY = 0;
    }
    const te = {
        role: "option",
        "aria-selected": M,
        tabIndex: P && A ? 0 : -1,
        onKeyDown (ie) {
            H.current = ie.key, p.set("activeIndex", U), ie.key === " " && y.current && ie.preventDefault();
        },
        onClick (ie) {
            const oe = ie.type === "click" && G.current !== "touch", se = ie.nativeEvent.pointerType, le = oe && dQo(ie.nativeEvent) && (se !== void 0 || A), ce = oe && !le && !q.current;
            q.current = !1, !(ie.type === "keydown" && H.current === null) && (l || ie.type === "keydown" && H.current === " " && y.current || ce || (H.current = null, J(ie.nativeEvent)));
        },
        onPointerEnter (ie) {
            G.current = ie.pointerType;
        },
        onPointerMove (ie) {
            if (ie.pointerType === "mouse" && ie.buttons === 1) {
                const oe = b.current;
                oe.dragY += ie.movementY, oe.dragY ** 2 >= 64 && (oe.allowUnselectedMouseUp = !0);
            }
        },
        onPointerDown (ie) {
            G.current = ie.pointerType, q.current = !0, Q();
        },
        onMouseUp () {
            if (Q(), l || G.current === "touch" || q.current) return;
            const ie = !b.current.allowSelectedMouseUp && M, oe = !b.current.allowUnselectedMouseUp && !M;
            ie || oe || (q.current = !0, $.current?.click(), q.current = !1);
        }
    }, ee = Lm("div", e, {
        ref: [
            V,
            n,
            h.ref,
            $
        ],
        state: Y,
        props: [
            g,
            te,
            u,
            K
        ]
    }), re = HSt.useMemo(()=>({
            selected: M,
            index: U,
            textRef: d,
            selectedByFocus: O,
            hasRegistered: j
        }), [
        M,
        U,
        d,
        O,
        j
    ]);
    return s$y(M2r.Provider, {
        value: re,
        children: ee
    });
})), process.env.NODE_ENV !== "production" && (uea.displayName = "SelectItem");

}
