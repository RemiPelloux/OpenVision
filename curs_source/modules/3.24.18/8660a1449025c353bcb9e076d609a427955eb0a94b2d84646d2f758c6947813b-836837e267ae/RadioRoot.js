import { caa } from "./CompositeItem.js";
import { ppi } from "./FieldItemContext.js";
import { N7 } from "./FieldRootContext.js";
import { $I, Ax, Ioe, Lm, Vj, _2r, g2, laa, pu, tit, wz, zQ, zd } from "./LYd.js";
import { VQ } from "./LabelableContext.js";
import { Y4h } from "./RadioGroupContext.js";
import { Z4h, a5r } from "./RadioRootContext.js";
import { s5r, sga } from "./constants_14.js";
import { VS } from "./createBaseUIEventDetails.js";
import { pE, vA } from "./empty.js";
import { aT } from "./floating-ui.utils.dom.js";
import { YOr, gma, mkS } from "./ipa.js";
import { Zb, kO } from "./reason-parts.js";
import { tlh } from "./serializeValue.js";
import { V4h, r5r } from "./stateAttributesMapping_4.js";
import { E } from "./tslib.es6.js";
import { fma } from "./useAriaLabelledBy.js";
import { _A } from "./useBaseUiId.js";
import { Cz } from "./useButton.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { nit } from "./useLabelableId.js";
import { m_e } from "./useMergedRefs.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import { MSt, WHe, Z5e } from "./visuallyHidden.js";
import { jsx as Q4h } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as fkS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as l5r from "./react-runtime/react/esm-index-production.js";
var oga;
export { oga };
var __wakaru_vkS_initialized = false;
export function vkS() {
if (__wakaru_vkS_initialized) return;
__wakaru_vkS_initialized = true;
E(), m_e(), jv(), Jy(), WHe(), vA(), VS(), V4h(), _A(), Om(), sga(), caa(), N7(), ppi(), VQ(), fma(), nit(), Y4h(), tlh(), Z4h(), aT(), Cz(), Zb(), oga = l5r.forwardRef(function(e, n) {
    const { render: i, className: r, disabled: s = !1, readOnly: o = !1, required: a = !1, "aria-labelledby": l, value: c, inputRef: u, nativeButton: d = !1, id: h, style: p, ...g } = e, f = mkS(), { disabled: _, readOnly: b, required: y, form: S, checkedValue: k, touched: C = !1, validation: T, name: I } = f ?? {}, A = f?.setCheckedValue ?? Ax, P = f?.setTouched ?? Ax, M = f?.registerControlRef ?? Ax, O = f?.registerInputRef ?? Ax, { setTouched: N, setFilled: U, state: j, disabled: $ } = Vj(), H = YOr(), { labelId: G, getDescriptionProps: q } = zQ(), K = $ || H.disabled || _ || s, V = b || o, Y = y || a, J = S, Q = f ? k === c : c === "", te = l5r.useRef(null), ee = l5r.useRef(null), re = pu((Se)=>{
        Se && M(Se, K);
    }), ie = Ioe(u, ee, O);
    su(()=>{
        ee.current?.checked && U(!0);
    }, [
        U
    ]), su(()=>{
        if (ee.current) {
            if (K && Q) {
                O(null);
                return;
            }
            te.current && M(te.current, K), O(ee.current);
        }
    }, [
        Q,
        K,
        M,
        O
    ]);
    const oe = $I(), se = tit({
        id: h,
        implicit: !1,
        controlRef: te
    }), le = d ? void 0 : se, ce = gma(l, G, ee, !d, le), ae = {
        role: "radio",
        "aria-checked": Q,
        "aria-required": Y || void 0,
        "aria-readonly": V || void 0,
        "aria-labelledby": ce,
        [s5r]: Q ? "" : void 0,
        id: d ? se : oe,
        onKeyDown (Se) {
            Se.key === "Enter" && Se.preventDefault();
        },
        onClick (Se) {
            if (Se.defaultPrevented || K || V) return;
            Se.preventDefault();
            const Pe = ee.current;
            Pe && Pe.dispatchEvent(new (g2(Pe)).PointerEvent("click", {
                bubbles: !0,
                shiftKey: Se.shiftKey,
                ctrlKey: Se.ctrlKey,
                altKey: Se.altKey,
                metaKey: Se.metaKey
            }));
        },
        onFocus (Se) {
            Se.defaultPrevented || K || V || !C || (ee.current?.click(), P(!1));
        }
    }, { getButtonProps: de, buttonRef: he } = wz({
        disabled: K,
        native: d,
        composite: !1
    }), ge = {
        type: "radio",
        ref: ie,
        form: J,
        id: le,
        name: I,
        tabIndex: -1,
        style: I ? MSt : Z5e,
        "aria-hidden": !0,
        ...c !== void 0 ? {
            value: _2r(c)
        } : pE,
        disabled: K,
        checked: Q,
        required: Y,
        readOnly: V,
        onChange (Se) {
            if (Se.nativeEvent.defaultPrevented || K || V || c === void 0) return;
            const Pe = zd(kO, Se.nativeEvent);
            A(c, Pe), !Pe.isCanceled && N(!0);
        },
        onFocus () {
            te.current?.focus();
        }
    }, pe = l5r.useMemo(()=>({
            ...j,
            required: Y,
            disabled: K,
            readOnly: V,
            checked: Q
        }), [
        j,
        K,
        V,
        Q,
        Y
    ]), ve = pe, fe = f !== void 0, Te = [
        n,
        te,
        he,
        re
    ], _e = [
        ae,
        g,
        de,
        q,
        T ? (Se)=>T.getValidationProps(K, Se) : pE
    ], Ce = Lm("span", e, {
        enabled: !fe,
        state: pe,
        ref: Te,
        props: _e,
        stateAttributesMapping: r5r
    });
    return fkS(a5r.Provider, {
        value: ve,
        children: [
            fe ? Q4h(laa, {
                tag: "span",
                render: i,
                className: r,
                style: p,
                state: pe,
                refs: Te,
                props: _e,
                stateAttributesMapping: r5r
            }) : Ce,
            Q4h("input", {
                ...ge,
                suppressHydrationWarning: !0
            })
        ]
    });
}), process.env.NODE_ENV !== "production" && (oga.displayName = "RadioRoot");

}
