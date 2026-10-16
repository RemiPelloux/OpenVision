import { N7 } from "./FieldRootContext.js";
import { C_e } from "./FormContext.js";
import { $I, Ioe, Jnt, Lm, URe, Vj, g2, tit, uB, w_e, wz, yne, zQ, zd } from "./LYd.js";
import { VQ } from "./LabelableContext.js";
import { L6h, UOr } from "./SwitchRootContext.js";
import { VS } from "./createBaseUIEventDetails.js";
import { pE, vA } from "./empty.js";
import { aT } from "./floating-ui.utils.dom.js";
import { gma } from "./ipa.js";
import { mne } from "./mergeProps.js";
import { Zb, kO } from "./reason-parts.js";
import { O6h, mma } from "./stateAttributesMapping_3.js";
import { E } from "./tslib.es6.js";
import { fma } from "./useAriaLabelledBy.js";
import { _A } from "./useBaseUiId.js";
import { Cz } from "./useButton.js";
import { __e } from "./useControlled.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { nit } from "./useLabelableId.js";
import { m_e } from "./useMergedRefs.js";
import { eit } from "./useRegisterFieldControl.js";
import { Om } from "./useRenderElement.js";
import { rit } from "./useValueChanged.js";
import { MSt, WHe, Z5e } from "./visuallyHidden.js";
import { jsx as F6h } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as WSS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as jOr from "./react-runtime/react/esm-index-production.js";
var vma;
export { vma };
var __wakaru_GSS_initialized = false;
export function GSS() {
if (__wakaru_GSS_initialized) return;
__wakaru_GSS_initialized = true;
E(), __e(), m_e(), jv(), WHe(), vA(), Om(), _A(), L6h(), O6h(), N7(), eit(), C_e(), VQ(), fma(), nit(), VS(), rit(), Cz(), aT(), mne(), Zb(), vma = jOr.forwardRef(function(e, n) {
    const { checked: i, className: r, defaultChecked: s, "aria-labelledby": o, form: a, id: l, inputRef: c, name: u, nativeButton: d = !1, onCheckedChange: h, readOnly: p = !1, required: g = !1, disabled: f = !1, render: _, uncheckedValue: b, value: y, style: S, ...k } = e, { clearErrors: C } = w_e(), { state: T, setTouched: I, setDirty: A, validityData: P, setFilled: M, setFocused: O, validationMode: N, disabled: U, name: j, validation: $ } = Vj(), { labelId: H } = zQ(), G = U || f, q = j ?? u, K = jOr.useRef(null), V = Ioe(K, c, $.inputRef), Y = jOr.useRef(null), J = $I(), Q = tit({
        id: l,
        implicit: !1,
        controlRef: Y
    }), te = d ? void 0 : Q, [ee, re] = yne({
        controlled: i,
        default: !!s,
        name: "Switch",
        state: "checked"
    });
    Jnt(Y, J, ee, void 0, !G, u), su(()=>{
        K.current && M(K.current.checked);
    }, [
        K,
        M
    ]), URe(ee, ()=>{
        C(q), A(ee !== P.initialValue), M(ee), $.change(ee);
    });
    const { getButtonProps: ie, buttonRef: oe } = wz({
        disabled: G,
        native: d
    }), se = gma(o, H, K, !d, te), le = {
        id: d ? Q : J,
        role: "switch",
        "aria-checked": ee,
        "aria-readonly": p || void 0,
        "aria-required": g || void 0,
        "aria-labelledby": se,
        onFocus () {
            G || O(!0);
        },
        onBlur () {
            const he = K.current;
            !he || G || (I(!0), O(!1), N === "onBlur" && $.commit(he.checked));
        },
        onClick (he) {
            if (p || G) return;
            he.preventDefault();
            const ge = K.current;
            ge && ge.dispatchEvent(new (g2(ge)).PointerEvent("click", {
                bubbles: !0,
                shiftKey: he.shiftKey,
                ctrlKey: he.ctrlKey,
                altKey: he.altKey,
                metaKey: he.metaKey
            }));
        }
    }, ce = uB({
        checked: ee,
        disabled: G,
        form: a,
        id: te,
        name: q,
        required: g,
        style: q ? MSt : Z5e,
        tabIndex: -1,
        type: "checkbox",
        "aria-hidden": !0,
        ref: V,
        onChange (he) {
            if (he.nativeEvent.defaultPrevented) return;
            if (p) {
                he.preventDefault();
                return;
            }
            const ge = he.currentTarget.checked, pe = zd(kO, he.nativeEvent);
            h?.(ge, pe), !pe.isCanceled && re(ge);
        },
        onFocus () {
            Y.current?.focus();
        }
    }, (he)=>$.getValidationProps(G, he), y !== void 0 ? {
        value: y
    } : pE), ae = jOr.useMemo(()=>({
            ...T,
            checked: ee,
            disabled: G,
            readOnly: p,
            required: g
        }), [
        T,
        ee,
        G,
        p,
        g
    ]), de = Lm("span", e, {
        state: ae,
        ref: [
            n,
            Y,
            oe
        ],
        props: [
            le,
            k,
            ie,
            (he)=>$.getValidationProps(G, he)
        ],
        stateAttributesMapping: mma
    });
    return WSS(UOr.Provider, {
        value: ae,
        children: [
            de,
            !ee && q && b !== void 0 && F6h("input", {
                type: "hidden",
                form: a,
                name: q,
                value: b,
                disabled: G
            }),
            F6h("input", {
                ...ce,
                suppressHydrationWarning: !0
            })
        ]
    });
}), process.env.NODE_ENV !== "production" && (vma.displayName = "SwitchRoot");

}
