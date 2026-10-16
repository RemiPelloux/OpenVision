import { $ma, JOr } from "./CheckboxGroupContext.js";
import { H4h, Zma } from "./CheckboxRoot.js";
import { N7 } from "./FieldRootContext.js";
import { C_e } from "./FormContext.js";
import { $I, Jnt, Lm, URe, Vj, pu, tci, w_e, yne, zQ } from "./LYd.js";
import { VQ } from "./LabelableContext.js";
import { b2r } from "./areArraysEqual.js";
import { BY, wne } from "./constants_11.js";
import { vA, xoe } from "./empty.js";
import { ab1 } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { lb1 } from "./useCheckboxGroupParent.js";
import { __e } from "./useControlled.js";
import { eit } from "./useRegisterFieldControl.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import { rit } from "./useValueChanged.js";
import * as C_i from "./react-runtime/react/esm-index-production.js";
import { jsx as cb1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
var qRa;
export { qRa };
var __wakaru_ub1_initialized = false;
export function ub1() {
if (__wakaru_ub1_initialized) return;
__wakaru_ub1_initialized = true;
E(), __e(), Jy(), vA(), _A(), Om(), $ma(), N7(), eit(), VQ(), BY(), H4h(), lb1(), C_e(), rit(), b2r(), qRa = C_i.forwardRef(function(e, n) {
    const { allValues: i, className: r, defaultValue: s, disabled: o = !1, id: a, onValueChange: l, render: c, value: u, style: d, ...h } = e, { disabled: p, name: g, state: f, validation: _, setFilled: b, setDirty: y, validityData: S } = Vj(), { labelId: k, getDescriptionProps: C } = zQ(), { clearErrors: T } = w_e(), I = p || o, A = C_i.useMemo(()=>{
        if (u === void 0) return s ?? [];
    }, [
        u,
        s
    ]), [P, M] = yne({
        controlled: u,
        default: A,
        name: "CheckboxGroup",
        state: "value"
    }), O = pu((V, Y)=>{
        l?.(V, Y), !Y.isCanceled && M(V);
    }), N = ab1({
        allValues: i,
        value: P,
        onValueChange: O
    }), U = $I(a), j = C_i.useRef(null), $ = C_i.useCallback((V)=>{
        j.current == null && V != null && !V.hasAttribute(Zma) && (j.current = V);
    }, []);
    Jnt(j, U, P, void 0, !!g && !I, g);
    const H = P ?? xoe;
    URe(H, ()=>{
        g && T(g);
        const V = Array.isArray(S.initialValue) ? S.initialValue : xoe;
        b(H.length > 0), y(!tci(H, V)), _.change(H);
    });
    const G = {
        ...f,
        disabled: I
    }, q = C_i.useMemo(()=>({
            allValues: i,
            value: P,
            defaultValue: A,
            setValue: O,
            parent: N,
            disabled: I,
            validation: _,
            registerControlRef: $
        }), [
        i,
        P,
        A,
        O,
        N,
        I,
        _,
        $
    ]), K = Lm("div", e, {
        state: G,
        ref: n,
        props: [
            {
                id: a,
                role: "group",
                "aria-labelledby": k
            },
            h,
            C
        ],
        stateAttributesMapping: wne
    });
    return cb1(JOr.Provider, {
        value: q,
        children: K
    });
}), process.env.NODE_ENV !== "production" && (qRa.displayName = "CheckboxGroup");

}
