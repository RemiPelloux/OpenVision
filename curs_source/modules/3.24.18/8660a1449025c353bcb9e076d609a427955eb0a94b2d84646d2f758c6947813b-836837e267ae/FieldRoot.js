import { N7, eci } from "./FieldRootContext.js";
import { zOr } from "./FieldsetRootContext.js";
import { C_e } from "./FormContext.js";
import { Lm, pu, w_e } from "./LYd.js";
import { VOr, o4h } from "./LabelableProvider.js";
import { BY, Jli, wne } from "./constants_11.js";
import { GOr, b1S, v1S } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { y1S } from "./useFieldControlRegistration.js";
import { _1S } from "./useFieldValidation.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import * as Dhe from "./react-runtime/react/esm-index-production.js";
import { jsx as Mma } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Dma, Nma;
export { Dma, Nma };
var __wakaru_S1S_initialized = false;
export function S1S() {
if (__wakaru_S1S_initialized) return;
__wakaru_S1S_initialized = true;
E(), jv(), Jy(), N7(), BY(), zOr(), C_e(), Om(), _1S(), y1S(), o4h(), Dma = Dhe.forwardRef(function(e, n) {
    const { errors: i, validationMode: r, submitAttemptedRef: s } = w_e(), { render: o, className: a, validate: l, validationDebounceTime: c = 0, validationMode: u = r, name: d, disabled: h = !1, invalid: p, dirty: g, touched: f, actionsRef: _, style: b, ...y } = e, S = GOr(!0)?.disabled, k = pu(l || (()=>null)), C = S || h, [T, I] = Dhe.useState(!1), [A, P] = Dhe.useState(!1), [M, O] = Dhe.useState(!1), [N, U] = Dhe.useState(!1), j = g ?? A, $ = f ?? T, H = Dhe.useRef(j), G = Dhe.useRef(void 0), [q, K] = Dhe.useState(), V = d ?? q;
    su(()=>{
        g !== void 0 && (H.current = g);
    }, [
        g
    ]);
    const Y = Dhe.useCallback(()=>G.current, []), J = Dhe.useCallback((fe)=>{
        G.current = fe;
    }, []), Q = pu((fe)=>{
        g === void 0 && (fe && (H.current = !0), P(fe));
    }), te = pu((fe)=>{
        f === void 0 && I(fe);
    }), ee = pu(()=>u === "onChange" || u === "onSubmit" && s.current), re = V && Object.hasOwn(i, V) ? i[V] : null, ie = !!(Array.isArray(re) ? re.length : re), oe = p === !0 || ie, [se, le] = Dhe.useState({
        state: Jli,
        error: "",
        errors: [],
        value: null,
        initialValue: null
    }), ce = C ? null : !oe && se.state.valid, ae = Dhe.useMemo(()=>({
            disabled: C,
            touched: $,
            dirty: j,
            valid: ce,
            filled: M,
            focused: N
        }), [
        C,
        $,
        j,
        ce,
        M,
        N
    ]), de = v1S({
        setValidityData: le,
        validate: k,
        validityData: se,
        validationDebounceTime: c,
        invalid: oe,
        markedDirtyRef: H,
        state: ae,
        shouldValidateOnChange: ee,
        getRegisteredFieldId: Y
    }), [he, ge] = b1S({
        commit: de.commit,
        invalid: oe,
        markedDirtyRef: H,
        name: d,
        setRegisteredFieldName: K,
        setRegisteredFieldId: J,
        setValidityData: le,
        validityData: se
    });
    Dhe.useImperativeHandle(_, ()=>({
            validate: he
        }), [
        he
    ]);
    const pe = Dhe.useMemo(()=>({
            invalid: oe,
            name: V,
            validityData: se,
            setValidityData: le,
            disabled: C,
            touched: $,
            setTouched: te,
            dirty: j,
            setDirty: Q,
            filled: M,
            setFilled: O,
            focused: N,
            setFocused: U,
            validate: k,
            validationMode: u,
            validationDebounceTime: c,
            shouldValidateOnChange: ee,
            state: ae,
            markedDirtyRef: H,
            registerFieldControl: ge,
            validation: de
        }), [
        oe,
        V,
        se,
        C,
        $,
        te,
        j,
        Q,
        M,
        O,
        N,
        U,
        k,
        u,
        c,
        ee,
        ae,
        ge,
        de
    ]), ve = Lm("div", e, {
        ref: n,
        state: ae,
        props: y,
        stateAttributesMapping: wne
    });
    return Mma(eci.Provider, {
        value: pe,
        children: ve
    });
}), process.env.NODE_ENV !== "production" && (Dma.displayName = "FieldRootInner"), Nma = Dhe.forwardRef(function(e, n) {
    return Mma(VOr, {
        children: Mma(Dma, {
            ...e,
            ref: n
        })
    });
}), process.env.NODE_ENV !== "production" && (Nma.displayName = "FieldRoot");

}
