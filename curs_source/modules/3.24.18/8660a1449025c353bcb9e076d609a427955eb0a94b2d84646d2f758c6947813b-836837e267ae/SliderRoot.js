import { dbn } from "./CompositeList.js";
import { N7 } from "./FieldRootContext.js";
import { C_e } from "./FormContext.js";
import { $I, Jnt, Lm, Nf, OY, Tjy, URe, UY, Vj, ak, jwe, pu, tci, uL, ubn, w_e, y2r, yne, zQ, zd, zvn } from "./LYd.js";
import { VQ } from "./LabelableContext.js";
import { Xjr, Yjr } from "./SliderRootContext.js";
import { b2r } from "./areArraysEqual.js";
import { Jwp } from "./asc.js";
import { sit } from "./clamp.js";
import { VS } from "./createBaseUIEventDetails.js";
import { t0p } from "./getSliderValue.js";
import { Qwp, _b1, e0p, n0p, vb1 } from "./ipa.js";
import { hB } from "./owner.js";
import { Zb, kO } from "./reason-parts.js";
import { S2r } from "./resolveAriaLabelledBy.js";
import { $D } from "./shadowDom.js";
import { Kjr, T_i } from "./stateAttributesMapping_10.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { __e } from "./useControlled.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { eit } from "./useRegisterFieldControl.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import { Fwe } from "./useValueAsRef.js";
import { rit } from "./useValueChanged.js";
import { i0p } from "./validateMinimumDistance.js";
import { Vvn } from "./warn.js";
import * as dJ from "./react-runtime/react/esm-index-production.js";
import { jsx as s0p } from "./react-runtime/react/esm-jsx-runtime-production.js";
var VRa;
export { VRa };
var __wakaru_bb1_initialized = false;
export function bb1() {
if (__wakaru_bb1_initialized) return;
__wakaru_bb1_initialized = true;
E(), hB(), __e(), Jy(), Fwe(), jv(), Vvn(), VS(), rit(), _A(), Om(), sit(), b2r(), dbn(), N7(), eit(), C_e(), VQ(), S2r(), Jwp(), t0p(), i0p(), Kjr(), Xjr(), Zb(), $D(), VRa = dJ.forwardRef(function(e, n) {
    const { "aria-labelledby": i, className: r, defaultValue: s, disabled: o = !1, id: a, format: l, largeStep: c = 10, locale: u, render: d, max: h = 100, min: p = 0, minStepsBetweenValues: g = 0, form: f, name: _, onValueChange: b, onValueCommitted: y, orientation: S = "horizontal", step: k = 1, thumbCollisionBehavior: C = "push", thumbAlignment: T = "center", value: I, style: A, ...P } = e, M = $I(a), O = Tjy(M), N = pu(b), U = pu(y), { clearErrors: j } = w_e(), { state: $, disabled: H, name: G, setTouched: q, setDirty: K, validityData: V, validation: Y } = Vj(), { labelId: J } = zQ(), [Q, te] = dJ.useState(), ee = i ?? y2r(J, Q), re = H || o, ie = G ?? _, [oe, se] = yne({
        controlled: I,
        default: s ?? p,
        name: "Slider"
    }), le = dJ.useRef(null), ce = dJ.useRef(null), ae = dJ.useRef([]), de = dJ.useRef(null), he = dJ.useRef(null), ge = dJ.useRef(-1), pe = dJ.useRef(null), ve = dJ.useRef("none"), fe = uL(l), [Te, _e] = dJ.useState(-1), [Ce, Se] = dJ.useState(-1), [Pe, we] = dJ.useState(!1), [Ie, Me] = dJ.useState(()=>new Map), [De, Ne] = dJ.useState([
        void 0,
        void 0
    ]), be = pu((Ve)=>{
        _e(Ve), Ve !== -1 && Se(Ve);
    });
    Jnt(Y.inputRef, M, oe, void 0, !re, _), URe(oe, ()=>{
        j(ie), Y.change(oe);
        const Ve = V.initialValue;
        let Xe;
        Array.isArray(oe) && Array.isArray(Ve) ? Xe = !tci(oe, Ve) : Xe = oe !== Ve, K(Xe);
    });
    const je = pu((Ve)=>{
        Ve && (ce.current = Ve);
    }), $e = Array.isArray(oe), Je = dJ.useMemo(()=>$e ? oe.slice().sort(Qwp) : [
            UY(oe, p, h)
        ], [
        h,
        p,
        $e,
        oe
    ]), Ge = pu((Ve, Xe)=>{
        if (Number.isNaN(Ve) || _b1(Ve, oe)) return !1;
        const lt = Xe ?? zd(kO, void 0, void 0, {
            activeThumbIndex: -1
        }), He = lt.event, gt = He.constructor ?? Event, ht = new gt(He.type, He);
        return Object.defineProperty(ht, "target", {
            writable: !0,
            value: {
                value: Ve,
                name: ie
            }
        }), lt.event = ht, N(Ve, lt), lt.isCanceled ? !1 : (ve.current = lt.reason, se(Ve), !0);
    }), xe = pu((Ve, Xe, lt)=>{
        const He = e0p(Ve, Xe, p, h, $e, Je);
        if (n0p(He, k, g)) {
            const gt = vb1(lt), ht = Ge(He, zd(gt, lt.nativeEvent, void 0, {
                activeThumbIndex: Xe
            }));
            q(!0), ht && U(He, jwe(gt, lt.nativeEvent));
        }
    });
    process.env.NODE_ENV !== "production" && p >= h && zvn("Slider `max` must be greater than `min`."), su(()=>{
        const Ve = OY(ak(le.current));
        re && Nf(le.current, Ve) && Ve.blur();
    }, [
        re
    ]), re && Te !== -1 && be(-1);
    const Oe = dJ.useMemo(()=>({
            ...$,
            activeThumbIndex: Te,
            disabled: re,
            dragging: Pe,
            orientation: S,
            max: h,
            min: p,
            minStepsBetweenValues: g,
            step: k,
            values: Je
        }), [
        $,
        Te,
        re,
        Pe,
        h,
        p,
        g,
        S,
        k,
        Je
    ]), ct = dJ.useMemo(()=>({
            active: Te,
            controlRef: ce,
            disabled: re,
            dragging: Pe,
            validation: Y,
            formatOptionsRef: fe,
            handleInputChange: xe,
            indicatorPosition: De,
            inset: T !== "center",
            labelId: ee,
            rootLabelId: O,
            largeStep: c,
            lastUsedThumbIndex: Ce,
            lastChangeReasonRef: ve,
            form: f,
            locale: u,
            max: h,
            min: p,
            minStepsBetweenValues: g,
            name: ie,
            onValueCommitted: U,
            orientation: S,
            pressedInputRef: de,
            pressedThumbCenterOffsetRef: he,
            pressedThumbIndexRef: ge,
            pressedValuesRef: pe,
            registerFieldControlRef: je,
            renderBeforeHydration: T === "edge",
            setActive: be,
            setDragging: we,
            setIndicatorPosition: Ne,
            setLabelId: te,
            setValue: Ge,
            state: Oe,
            step: k,
            thumbCollisionBehavior: C,
            thumbMap: Ie,
            thumbRefs: ae,
            values: Je
        }), [
        Te,
        ce,
        ee,
        O,
        re,
        Pe,
        Y,
        fe,
        xe,
        De,
        c,
        Ce,
        ve,
        f,
        u,
        h,
        p,
        g,
        ie,
        U,
        S,
        de,
        he,
        ge,
        pe,
        je,
        be,
        we,
        Ne,
        te,
        Ge,
        Oe,
        k,
        C,
        T,
        Ie,
        ae,
        Je
    ]), Ye = Lm("div", e, {
        state: Oe,
        ref: [
            n,
            le
        ],
        props: [
            {
                "aria-labelledby": ee,
                id: M,
                role: "group"
            },
            P,
            (Ve)=>Y.getValidationProps(re, Ve)
        ],
        stateAttributesMapping: T_i
    });
    return s0p(Yjr.Provider, {
        value: ct,
        children: s0p(ubn, {
            elementsRef: ae,
            onMapChange: Me,
            children: Ye
        })
    });
}), process.env.NODE_ENV !== "production" && (VRa.displayName = "SliderRoot");

}
