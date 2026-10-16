import { OSn, mj } from "./FieldRootContext.js";
import { F1s } from "./FieldsetRootContext.js";
import { mCe } from "./FormContext.js";
import { D3l, wDi } from "./LabelableProvider.js";
import { NSn, Ore, sY } from "./constants_11.js";
import { Ncf, O1s, Pcf } from "./f0s.js";
import { kp, pCe, su } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Ocf } from "./useFieldControlRegistration.js";
import { Lcf } from "./useFieldValidation.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { wp } from "./useRenderElement.js";
import { Cy } from "./useStableCallback.js";
import { jsx as $1s } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as tee from "./react-runtime/react/esm-index-production.js";
var H1s, W1s;
export { H1s, W1s };
var __wakaru_Fcf_initialized = false;
export function Fcf() {
if (__wakaru_Fcf_initialized) return;
__wakaru_Fcf_initialized = true;
x(), af(), Cy(), mj(), sY(), F1s(), mCe(), wp(), Lcf(), Ocf(), D3l(), H1s = tee.forwardRef(function(t, n) {
    const { errors: i, validationMode: r, submitAttemptedRef: s } = pCe(), { render: o, className: a, validate: c, validationDebounceTime: l = 0, validationMode: u = r, name: h, disabled: p = !1, invalid: g, dirty: f, touched: v, actionsRef: b, style: y, ...T } = t, E = O1s(!0)?.disabled, A = su(c || (()=>null)), R = E || p, [D, P] = tee.useState(!1), [N, O] = tee.useState(!1), [F, H] = tee.useState(!1), [$, W] = tee.useState(!1), G = f ?? N, q = v ?? D, z = tee.useRef(G), X = tee.useRef(void 0), [Y, Z] = tee.useState(), K = h ?? Y;
    gl(()=>{
        f !== void 0 && (z.current = f);
    }, [
        f
    ]);
    const J = tee.useCallback(()=>X.current, []), ne = tee.useCallback((Ge)=>{
        X.current = Ge;
    }, []), ee = su((Ge)=>{
        f === void 0 && (Ge && (z.current = !0), O(Ge));
    }), se = su((Ge)=>{
        v === void 0 && P(Ge);
    }), re = su(()=>u === "onChange" || u === "onSubmit" && s.current), ue = K && Object.hasOwn(i, K) ? i[K] : null, ce = !!(Array.isArray(ue) ? ue.length : ue), de = g === !0 || ce, [le, ye] = tee.useState({
        state: NSn,
        error: "",
        errors: [],
        value: null,
        initialValue: null
    }), _e = R ? null : !de && le.state.valid, me = tee.useMemo(()=>({
            disabled: R,
            touched: q,
            dirty: G,
            valid: _e,
            filled: F,
            focused: $
        }), [
        R,
        q,
        G,
        _e,
        F,
        $
    ]), Ce = Pcf({
        setValidityData: ye,
        validate: A,
        validityData: le,
        validationDebounceTime: l,
        invalid: de,
        markedDirtyRef: z,
        state: me,
        shouldValidateOnChange: re,
        getRegisteredFieldId: J
    }), [xe, Le] = Ncf({
        commit: Ce.commit,
        invalid: de,
        markedDirtyRef: z,
        name: h,
        setRegisteredFieldName: Z,
        setRegisteredFieldId: ne,
        setValidityData: ye,
        validityData: le
    });
    tee.useImperativeHandle(b, ()=>({
            validate: xe
        }), [
        xe
    ]);
    const Be = tee.useMemo(()=>({
            invalid: de,
            name: K,
            validityData: le,
            setValidityData: ye,
            disabled: R,
            touched: q,
            setTouched: se,
            dirty: G,
            setDirty: ee,
            filled: F,
            setFilled: H,
            focused: $,
            setFocused: W,
            validate: A,
            validationMode: u,
            validationDebounceTime: l,
            shouldValidateOnChange: re,
            state: me,
            markedDirtyRef: z,
            registerFieldControl: Le,
            validation: Ce
        }), [
        de,
        K,
        le,
        R,
        q,
        se,
        G,
        ee,
        F,
        H,
        $,
        W,
        A,
        u,
        l,
        re,
        me,
        Le,
        Ce
    ]), je = kp("div", t, {
        ref: n,
        state: me,
        props: T,
        stateAttributesMapping: Ore
    });
    return $1s(OSn.Provider, {
        value: Be,
        children: je
    });
}), process.env.NODE_ENV !== "production" && (H1s.displayName = "FieldRootInner"), W1s = tee.forwardRef(function(t, n) {
    return $1s(wDi, {
        children: $1s(H1s, {
            ...t,
            ref: n
        })
    });
}), process.env.NODE_ENV !== "production" && (W1s.displayName = "FieldRoot");

}
