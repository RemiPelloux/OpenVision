import { i9h } from "./CompositeRoot.js";
import { N7 } from "./FieldRootContext.js";
import { zOr } from "./FieldsetRootContext.js";
import { C_e } from "./FormContext.js";
import { $I, Jnt, Nf, URe, Vj, pu, w_e, yne, zQ } from "./LYd.js";
import { VQ } from "./LabelableContext.js";
import { Y4h, o5r } from "./RadioGroupContext.js";
import { g7t, tea } from "./composite_2.js";
import { BY, wne } from "./constants_11.js";
import { GOr, n9h } from "./ipa.js";
import { $D } from "./shadowDom.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { __e } from "./useControlled.js";
import { eit } from "./useRegisterFieldControl.js";
import { Jy } from "./useStableCallback.js";
import { rit } from "./useValueChanged.js";
import * as bSn from "./react-runtime/react/esm-index-production.js";
import { jsx as r9h } from "./react-runtime/react/esm-jsx-runtime-production.js";
var s9h, lga;
export { lga, s9h };
var __wakaru_wkS_initialized = false;
export function wkS() {
if (__wakaru_wkS_initialized) return;
__wakaru_wkS_initialized = true;
E(), __e(), Jy(), _A(), g7t(), i9h(), N7(), eit(), BY(), zOr(), C_e(), VQ(), rit(), Y4h(), $D(), s9h = [
    tea
], lga = bSn.forwardRef(function(e, n) {
    const { render: i, className: r, disabled: s, readOnly: o, required: a, onValueChange: l, value: c, defaultValue: u, form: d, name: h, inputRef: p, id: g, style: f, ..._ } = e, { setTouched: b, setFocused: y, validationMode: S, name: k, disabled: C, state: T, validation: I, setDirty: A, setFilled: P, validityData: M } = Vj(), { labelId: O } = zQ(), { clearErrors: N } = w_e(), U = GOr(!0), j = C || s, $ = k ?? h, H = $I(g), [G, q] = yne({
        controlled: c,
        default: u,
        name: "RadioGroup",
        state: "value"
    }), [K, V] = bSn.useState(!1), Y = pu((de, he)=>{
        l?.(de, he), !he.isCanceled && q(de);
    }), J = bSn.useRef(null), Q = bSn.useRef(null), te = bSn.useRef(null);
    function ee(de) {
        let he;
        return p && (typeof p == "function" ? he = p(de) : p.current = de), Q.current = de, I.inputRef.current = de, he;
    }
    const re = pu((de, he = !1)=>{
        if (de) {
            if (he) {
                J.current === de && (J.current = null);
                return;
            }
            J.current == null && (J.current = de);
        }
    }), ie = pu((de)=>{
        if (!de || de.disabled) return;
        te.current || (te.current = de);
        const he = Q.current;
        if (de.checked || he == null || he.disabled) return ee(de);
    }), oe = pu(()=>{
        const de = Q.current;
        return !de || de.disabled || !de.checked ? null : G ?? null;
    });
    Jnt(J, H, G ?? null, oe, !j, h), URe(G, ()=>{
        N($), A(G !== M.initialValue), P(G != null), I.change(G);
        const de = te.current;
        G == null && de && !de.disabled && ee(de);
    });
    const se = _["aria-labelledby"] ?? O ?? U?.legendId, le = {
        ...T,
        disabled: j ?? !1,
        required: a ?? !1,
        readOnly: o ?? !1
    }, ce = bSn.useMemo(()=>({
            ...T,
            checkedValue: G,
            disabled: j,
            form: d,
            validation: I,
            name: $,
            readOnly: o,
            registerControlRef: re,
            registerInputRef: ie,
            required: a,
            setCheckedValue: Y,
            setTouched: V,
            touched: K
        }), [
        G,
        j,
        d,
        I,
        T,
        $,
        o,
        re,
        ie,
        a,
        Y,
        V,
        K
    ]), ae = {
        id: g,
        role: "radiogroup",
        "aria-required": a || void 0,
        "aria-disabled": j || void 0,
        "aria-readonly": o || void 0,
        "aria-labelledby": se,
        onFocus () {
            y(!0);
        },
        onBlur (de) {
            Nf(de.currentTarget, de.relatedTarget) || (b(!0), y(!1), S === "onBlur" && I.commit(G));
        },
        onKeyDownCapture (de) {
            de.key.startsWith("Arrow") && (V(!0), y(!0));
        }
    };
    return r9h(o5r.Provider, {
        value: ce,
        children: r9h(n9h, {
            render: i,
            className: r,
            style: f,
            state: le,
            props: [
                ae,
                _,
                (de)=>I.getValidationProps(j ?? !1, de)
            ],
            refs: [
                n
            ],
            stateAttributesMapping: wne,
            enableHomeAndEndKeys: !1,
            modifierKeys: s9h
        })
    });
}), process.env.NODE_ENV !== "production" && (lga.displayName = "RadioGroup");

}
