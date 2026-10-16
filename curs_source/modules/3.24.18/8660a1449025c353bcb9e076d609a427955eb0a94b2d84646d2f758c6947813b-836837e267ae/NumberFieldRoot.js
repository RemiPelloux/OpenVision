import { N7 } from "./FieldRootContext.js";
import { C_e } from "./FormContext.js";
import { Dsh, Ioe, Lm, OY, Vj, ak, jwe, pu, r0, tit, uL, w_e, yne, zd } from "./LYd.js";
import { c$r, u$r } from "./NumberFieldRootContext.js";
import { b_e } from "./addEventListener.js";
import { VS } from "./createBaseUIEventDetails.js";
import { ySn } from "./formatNumber.js";
import { HWe, M2a, cS1 } from "./ipa.js";
import { $8t, Wnt } from "./os.js";
import { hB } from "./owner.js";
import { ECp, ICp, L2a, N2a, W2a, f$r, xCp } from "./parse_10.js";
import { VHe, Zb, eoh, kO, mRr, vQo, y_e } from "./reason-parts.js";
import { $D } from "./shadowDom.js";
import { N_i, d$r } from "./stateAttributesMapping_11.js";
import { E } from "./tslib.es6.js";
import { __e } from "./useControlled.js";
import { Nsh } from "./useForcedRerendering.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { nit } from "./useLabelableId.js";
import { m_e } from "./useMergedRefs.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import { Fwe } from "./useValueAsRef.js";
import { DCp } from "./validate.js";
import { MSt, WHe, Z5e } from "./visuallyHidden.js";
import * as b6e from "./react-runtime/react/esm-index-production.js";
import { jsx as dS1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as uS1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Z2a;
export { Z2a };
var __wakaru_hS1_initialized = false;
export function hS1() {
if (__wakaru_hS1_initialized) return;
__wakaru_hS1_initialized = true;
E(), b_e(), __e(), Jy(), jv(), Fwe(), Nsh(), m_e(), WHe(), hB(), u$r(), N7(), C_e(), nit(), d$r(), Om(), f$r(), ySn(), DCp(), VS(), Zb(), Wnt(), $D(), Z2a = b6e.forwardRef(function(e, n) {
    const { id: i, min: r, max: s, smallStep: o = .1, step: a = 1, largeStep: l = 10, required: c = !1, disabled: u = !1, readOnly: d = !1, form: h, name: p, defaultValue: g, value: f, onValueChange: _, onValueCommitted: b, allowWheelScrub: y = !1, snapOnStep: S = !1, allowOutOfRange: k = !1, format: C, locale: T, render: I, className: A, inputRef: P, style: M, ...O } = e, { setDirty: N, validityData: U, disabled: j, setFilled: $, invalid: H, name: G, state: q, validation: K } = Vj(), { clearErrors: V } = w_e(), Y = j || u, J = G ?? p, Q = a === "any" ? 1 : a, [te, ee] = b6e.useState(!1), re = r ?? Number.MIN_SAFE_INTEGER, ie = s ?? Number.MAX_SAFE_INTEGER, oe = r ?? 0, se = C?.style, le = b6e.useRef(null), ce = Ioe(P, K.inputRef), ae = tit({
        id: i
    }), [de, he] = yne({
        controlled: f,
        default: g,
        name: "NumberField",
        state: "value"
    }), ge = de ?? null, pe = uL(ge);
    su(()=>{
        $(ge !== null);
    }, [
        $,
        ge
    ]);
    const ve = Dsh(), fe = uL(C), Te = b6e.useRef(!1), _e = pu((xe, Oe)=>{
        Te.current = !1, b?.(xe, Oe);
    }), Ce = b6e.useRef(!0), Se = b6e.useRef(null), [Pe, we] = b6e.useState(()=>HWe(ge, T, C)), [Ie, Me] = b6e.useState("numeric"), De = pu(()=>{
        const { decimal: xe, group: Oe, currency: ct, literal: Ye } = M2a(T, C), Ve = new Set;
        ECp.forEach((He)=>Ve.add(He)), xe && Ve.add(xe), Oe && (Ve.add(Oe), W2a.test(Oe) && Ve.add(" "));
        const Xe = se === "percent" || se === "unit" && C?.unit === "percent", lt = se === "percent" || se === "unit" && C?.unit === "permille";
        return Xe && N2a.forEach((He)=>Ve.add(He)), lt && L2a.forEach((He)=>Ve.add(He)), se === "currency" && ct && Ve.add(ct), Ye && (Array.from(Ye).forEach((He)=>Ve.add(He)), W2a.test(Ye) && Ve.add(" ")), ICp.forEach((He)=>Ve.add(He)), (re < 0 || k) && xCp.forEach((He)=>Ve.add(He)), Ve;
    }), Ne = pu((xe)=>xe?.altKey ? o : xe?.shiftKey ? l : Q), be = pu((xe, Oe)=>{
        const ct = Oe.event, Ye = Oe.direction, Ve = Oe.reason === VHe || Oe.reason === y_e || Oe.reason === mRr || Oe.reason === vQo || Oe.reason === kO, Xe = !k || !Ve, lt = cS1(xe, {
            step: Ye ? Ne(ct) * Ye : void 0,
            format: fe.current,
            minWithDefault: re,
            maxWithDefault: ie,
            minWithZeroDefault: oe,
            snapOnStep: S,
            small: ct?.altKey ?? !1,
            clamp: Xe
        }), He = lt !== ge || Ve && (xe !== ge || Ce.current === !1);
        if (He) {
            if (_?.(lt, Oe), Oe.isCanceled) return !1;
            he(lt), N(lt !== U.initialValue), Te.current = !0;
        }
        return Se.current = lt, Ce.current && we(HWe(lt, T, C)), ve(), He;
    }), je = pu((xe, { direction: Oe, currentValue: ct, event: Ye, reason: Ve })=>{
        const Xe = ct ?? pe.current, lt = Ye;
        return typeof Xe != "number" ? be(0, zd(Ve, lt)) : be(Xe + xe * Oe, zd(Ve, lt, void 0, {
            direction: Oe
        }));
    });
    su(function() {
        if (!Ce.current) return;
        const Oe = HWe(ge, T, C);
        Oe !== Pe && we(Oe);
    }), su(function() {
        if (!$8t) return;
        let Oe = "text";
        re >= 0 && (Oe = "decimal"), Me(Oe);
    }, [
        re
    ]), b6e.useEffect(function() {
        const Oe = le.current;
        if (Y || d || !y || !Oe) return;
        function ct(Ye) {
            if (Ye.ctrlKey || OY(ak(le.current)) !== le.current) return;
            Ye.preventDefault(), Ce.current = !0;
            const Ve = Ne(Ye);
            je(Ve, {
                direction: Ye.deltaY > 0 ? -1 : 1,
                event: Ye,
                reason: "wheel"
            }) && _e(Se.current ?? pe.current, jwe(eoh, Ye));
        }
        return r0(Oe, "wheel", ct);
    }, [
        y,
        je,
        Y,
        d,
        Ne,
        _e,
        Se,
        pe
    ]);
    const $e = b6e.useMemo(()=>({
            ...q,
            disabled: Y,
            readOnly: d,
            required: c,
            value: ge,
            inputValue: Pe,
            scrubbing: te
        }), [
        q,
        Y,
        d,
        c,
        ge,
        Pe,
        te
    ]), Je = b6e.useMemo(()=>({
            inputRef: le,
            inputValue: Pe,
            value: ge,
            minWithDefault: re,
            maxWithDefault: ie,
            disabled: Y,
            readOnly: d,
            id: ae,
            setValue: be,
            incrementValue: je,
            getStepAmount: Ne,
            allowInputSyncRef: Ce,
            formatOptionsRef: fe,
            valueRef: pe,
            lastChangedValueRef: Se,
            hasPendingCommitRef: Te,
            name: J,
            nameProp: p,
            required: c,
            invalid: H,
            inputMode: Ie,
            getAllowedNonNumericKeys: De,
            min: r,
            max: s,
            setInputValue: we,
            locale: T,
            isScrubbing: te,
            setIsScrubbing: ee,
            state: $e,
            onValueCommitted: _e
        }), [
        le,
        Pe,
        ge,
        re,
        ie,
        Y,
        d,
        ae,
        be,
        je,
        Ne,
        fe,
        pe,
        J,
        p,
        c,
        H,
        Ie,
        De,
        r,
        s,
        we,
        T,
        te,
        $e,
        _e
    ]), Ge = Lm("div", e, {
        ref: n,
        state: $e,
        props: O,
        stateAttributesMapping: N_i
    });
    return uS1(c$r.Provider, {
        value: Je,
        children: [
            Ge,
            dS1("input", {
                ...K.getValidationProps(Y, {
                    onFocus () {
                        le.current?.focus();
                    },
                    onChange (xe) {
                        if (xe.nativeEvent.defaultPrevented || Y || d) return;
                        const Oe = xe.currentTarget.valueAsNumber, ct = Number.isNaN(Oe) ? null : Oe, Ye = zd(kO, xe.nativeEvent);
                        be(ct, Ye), V(J), K.change(Se.current ?? ct);
                    }
                }),
                ref: ce,
                type: "number",
                form: h,
                name: J,
                value: ge ?? "",
                min: r,
                max: s,
                step: a,
                disabled: Y,
                readOnly: d,
                required: c,
                "aria-hidden": !0,
                tabIndex: -1,
                style: J ? MSt : Z5e,
                suppressHydrationWarning: !0
            })
        ]
    });
}), process.env.NODE_ENV !== "production" && (Z2a.displayName = "NumberFieldRoot");

}
