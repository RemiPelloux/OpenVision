import { Wj } from "./DirectionContext.js";
import { B5, K3, Lb, Lm, Nf, OY, U8t, UY, ak, g2, jwe, pu, r0, uL, zd } from "./LYd.js";
import { Xjr } from "./SliderRootContext.js";
import { b_e } from "./addEventListener.js";
import { sit } from "./clamp.js";
import { VS } from "./createBaseUIEventDetails.js";
import { aT } from "./floating-ui.utils.dom.js";
import { a0p } from "./getMidpoint.js";
import { KRa, Sb1, l0p, n0p, o0p, wb1, zRa } from "./ipa.js";
import { hB } from "./owner.js";
import { Jsh, Zb, fQo } from "./reason-parts.js";
import { kb1 } from "./resolveThumbCollision.js";
import { c0p } from "./roundValueToStep.js";
import { $D } from "./shadowDom.js";
import { Kjr, T_i } from "./stateAttributesMapping_10.js";
import { E } from "./tslib.es6.js";
import { Hnt } from "./useAnimationFrame.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import { Fwe } from "./useValueAsRef.js";
import { i0p } from "./validateMinimumDistance.js";
import * as ost from "./react-runtime/react/esm-index-production.js";
var d0p, YRa;
export { YRa, d0p };
var __wakaru_Cb1_initialized = false;
export function Cb1() {
if (__wakaru_Cb1_initialized) return;
__wakaru_Cb1_initialized = true;
E(), aT(), b_e(), hB(), Hnt(), Jy(), Fwe(), sit(), VS(), Om(), Wj(), Xjr(), Kjr(), a0p(), c0p(), i0p(), kb1(), $D(), Zb(), d0p = 2, YRa = ost.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { disabled: a, dragging: l, inset: c, lastChangeReasonRef: u, max: d, min: h, minStepsBetweenValues: p, onValueCommitted: g, orientation: f, pressedInputRef: _, pressedThumbCenterOffsetRef: b, pressedThumbIndexRef: y, pressedValuesRef: S, registerFieldControlRef: k, renderBeforeHydration: C, setActive: T, setDragging: I, setValue: A, state: P, step: M, thumbCollisionBehavior: O, thumbRefs: N, values: U } = zRa(), j = K3(), $ = U.length > 1, H = f === "vertical", G = ost.useRef(null), q = ost.useRef(null), K = pu((fe)=>{
        fe && q.current == null && (q.current = g2(fe).getComputedStyle(fe));
    }), V = ost.useRef(null), Y = ost.useRef(0), J = ost.useRef(0), Q = ost.useRef(null), te = uL(U);
    function ee(fe) {
        y.current !== fe && (y.current = fe);
        const Te = N.current[fe];
        if (!Te) {
            b.current = null, _.current = null;
            return;
        }
        _.current = Te.querySelector('input[type="range"]');
    }
    function re() {
        y.current = -1, b.current = null, _.current = null;
    }
    function ie(fe) {
        return Lb(fe) ? N.current.some((Te)=>!Lb(Te) || !Nf(Te, fe) ? !1 : Te.querySelector('input[type="range"]')?.disabled === !0) : !1;
    }
    function oe(fe) {
        const Te = G.current, _e = y.current;
        if (!Te || !$ && (_e < 0 || _e >= U.length)) return null;
        const { width: Ce, height: Se, bottom: Pe, left: we, right: Ie } = Te.getBoundingClientRect(), Me = wb1(q.current, H), De = J.current, Ne = (H ? Se : Ce) - Me.start - Me.end - De * 2, be = b.current ?? 0, je = fe.x - be, $e = fe.y - be, Je = H ? Pe - $e - Me.end : (j === "rtl" ? Ie - je : je - we) - Me.start, Ge = UY((Je - De) / Ne, 0, 1);
        let xe = (d - h) * Ge + h;
        return xe = l0p(xe, M, h), xe = UY(xe, h, d), $ ? _e < 0 ? null : Sb1({
            behavior: O,
            values: U,
            currentValues: te.current ?? U,
            initialValues: S.current,
            pressedIndex: _e,
            nextValue: xe,
            min: h,
            max: d,
            step: M,
            minStepsBetweenValues: p
        }) : {
            value: xe,
            thumbIndex: _e,
            didSwap: !1
        };
    }
    function se(fe) {
        S.current = $ ? U.slice() : null, Q.current = null, te.current = U;
        const Te = y.current;
        let _e = Te;
        if (Te > -1 && Te < U.length) {
            if (U[Te] === d) {
                let Ce = Te;
                for(; Ce > 0 && U[Ce - 1] === d;)Ce -= 1;
                _e = Ce;
            }
        } else {
            const Ce = H ? "y" : "x";
            let Se;
            _e = -1;
            for(let Pe = 0; Pe < N.current.length; Pe += 1){
                const we = N.current[Pe];
                if (Lb(we) && !we.querySelector('input[type="range"]')?.disabled) {
                    const Ie = o0p(we), Me = Math.abs(fe[Ce] - Ie[Ce]);
                    (Se === void 0 || Me <= Se) && (_e = Pe, Se = Me);
                }
            }
        }
        if (_e > -1 && _e !== Te && ee(_e), c) {
            const Ce = N.current[_e];
            if (Lb(Ce)) {
                const Se = Ce.getBoundingClientRect(), Pe = H ? "height" : "width";
                J.current = Se[Pe] / 2;
            }
        }
    }
    function le(fe) {
        const Te = N.current?.[fe]?.querySelector('input[type="range"]');
        Te && Te.focus({
            preventScroll: !0,
            focusVisible: !1
        });
    }
    function ce(fe, Te, _e) {
        const Ce = A(fe.value, zd(Te, _e, void 0, {
            activeThumbIndex: fe.thumbIndex
        }));
        return Ce && (Q.current = fe.value, te.current = Array.isArray(fe.value) ? fe.value : [
            fe.value
        ], fe.didSwap && ee(fe.thumbIndex)), Ce;
    }
    const ae = pu((fe)=>{
        const Te = KRa(fe, V);
        if (Te == null) return;
        if (Y.current += 1, fe.type === "pointermove" && fe.buttons === 0) {
            de(fe);
            return;
        }
        const _e = oe(Te);
        _e != null && n0p(_e.value, M, p) && (!l && Y.current > d0p && I(!0), ce(_e, Jsh, fe) && _e.didSwap && le(_e.thumbIndex));
    }), de = pu((fe)=>{
        if (T(-1), I(!1), _.current = null, b.current = null, Q.current != null) {
            const Te = u.current;
            g(Q.current, jwe(Te, fe));
        }
        "pointerType" in fe && G.current?.hasPointerCapture(fe.pointerId) && G.current?.releasePointerCapture(fe.pointerId), y.current = -1, V.current = null, S.current = null, Q.current = null, ge();
    }), he = pu((fe)=>{
        if (a) return;
        if (ie(B5(fe))) {
            re();
            return;
        }
        const Te = fe.changedTouches[0];
        Te != null && (V.current = Te.identifier);
        const _e = KRa(fe, V);
        if (_e != null) {
            se(_e);
            const Se = oe(_e);
            if (Se == null) return;
            le(Se.thumbIndex), ce(Se, fQo, fe) && Se.didSwap && le(Se.thumbIndex);
        }
        Y.current = 0;
        const Ce = ak(G.current);
        Ce.addEventListener("touchmove", ae, {
            passive: !0
        }), Ce.addEventListener("touchend", de, {
            passive: !0
        });
    }), ge = pu(()=>{
        const fe = ak(G.current);
        fe.removeEventListener("pointermove", ae), fe.removeEventListener("pointerup", de), fe.removeEventListener("touchmove", ae), fe.removeEventListener("touchend", de), S.current = null, Q.current = null;
    }), pe = U8t();
    return ost.useEffect(()=>{
        const fe = G.current;
        if (!fe) return ()=>ge();
        const Te = r0(fe, "touchstart", he, {
            passive: !0
        });
        return ()=>{
            Te(), pe.cancel(), ge();
        };
    }, [
        ge,
        he,
        G,
        pe
    ]), ost.useEffect(()=>{
        a && ge();
    }, [
        a,
        ge
    ]), Lm("div", e, {
        state: P,
        ref: [
            n,
            k,
            G,
            K
        ],
        props: [
            {
                "data-base-ui-slider-control": C ? "" : void 0,
                onPointerDown (fe) {
                    const Te = G.current, _e = B5(fe.nativeEvent);
                    if (!Te || a || fe.defaultPrevented || !Lb(_e) || fe.button !== 0) return;
                    if (ie(_e)) {
                        re();
                        return;
                    }
                    const Ce = KRa(fe, V);
                    if (Ce != null) {
                        se(Ce);
                        const Pe = oe(Ce);
                        if (Pe == null) return;
                        Nf(N.current[Pe.thumbIndex], OY(ak(Te))) ? fe.preventDefault() : pe.request(()=>{
                            le(Pe.thumbIndex);
                        }), I(!0), b.current != null || ce(Pe, fQo, fe.nativeEvent) && Pe.didSwap && le(Pe.thumbIndex);
                    }
                    fe.nativeEvent.pointerId && Te.setPointerCapture(fe.nativeEvent.pointerId), Y.current = 0;
                    const Se = ak(G.current);
                    Se.addEventListener("pointermove", ae, {
                        passive: !0
                    }), Se.addEventListener("pointerup", de, {
                        once: !0
                    });
                }
            },
            o
        ],
        stateAttributesMapping: T_i
    });
}), process.env.NODE_ENV !== "production" && (YRa.displayName = "SliderControl");

}
