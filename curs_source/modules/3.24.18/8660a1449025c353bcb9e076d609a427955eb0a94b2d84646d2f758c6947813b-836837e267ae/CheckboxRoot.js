import { $ma } from "./CheckboxGroupContext.js";
import { i5r, j4h } from "./CheckboxRootContext.js";
import { ppi } from "./FieldItemContext.js";
import { N7 } from "./FieldRootContext.js";
import { C_e } from "./FormContext.js";
import { $I, Ax, CW, Ioe, Jnt, Lm, URe, Vj, g2, uB, w_e, wz, yne, zQ, zd } from "./LYd.js";
import { VQ } from "./LabelableContext.js";
import { VS } from "./createBaseUIEventDetails.js";
import { pE, vA } from "./empty.js";
import { aT } from "./floating-ui.utils.dom.js";
import { okS } from "./getDefaultFormSubmitter.js";
import { F4h, YOr, gma, m4h, skS } from "./ipa.js";
import { mne } from "./mergeProps.js";
import { Zb, kO } from "./reason-parts.js";
import { E } from "./tslib.es6.js";
import { fma } from "./useAriaLabelledBy.js";
import { _A } from "./useBaseUiId.js";
import { Cz } from "./useButton.js";
import { __e } from "./useControlled.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { m_e } from "./useMergedRefs.js";
import { jQ } from "./useRefWithInit.js";
import { eit } from "./useRegisterFieldControl.js";
import { Om } from "./useRenderElement.js";
import { B4h } from "./useStateAttributesMapping.js";
import { rit } from "./useValueChanged.js";
import { MSt, WHe, Z5e } from "./visuallyHidden.js";
import { jsx as $4h } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as XUt from "./react-runtime/react/esm-index-production.js";
import { jsxs as ukS } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Zma, Qma;
export { Qma, Zma };
var __wakaru_H4h_initialized = false;
export function H4h() {
if (__wakaru_H4h_initialized) return;
__wakaru_H4h_initialized = true;
E(), vA(), __e(), jv(), m_e(), jQ(), WHe(), okS(), B4h(), Om(), _A(), Cz(), N7(), eit(), ppi(), C_e(), VQ(), fma(), $ma(), j4h(), VS(), rit(), mne(), Zb(), aT(), Zma = "data-parent", Qma = XUt.forwardRef(function(e, n) {
    const { checked: i, className: r, defaultChecked: s = !1, "aria-labelledby": o, disabled: a = !1, form: l, id: c, indeterminate: u = !1, inputRef: d, name: h, onCheckedChange: p, parent: g = !1, readOnly: f = !1, render: _, required: b = !1, uncheckedValue: y, value: S, nativeButton: k = !1, style: C, ...T } = e, { clearErrors: I } = w_e(), { disabled: A, name: P, setDirty: M, setFilled: O, setFocused: N, setTouched: U, state: j, validationMode: $, validityData: H, validation: G } = Vj(), q = YOr(), { labelId: K, controlId: V, registerControlId: Y, getDescriptionProps: J } = zQ(), Q = m4h(), te = Q?.parent, ee = te && Q.allValues, re = A || q.disabled || Q?.disabled || a, ie = P ?? h, oe = S ?? ie, se = $I(), le = $I();
    let ce = V;
    ee ? ce = g ? le : `${te.id}-${oe}` : c && (ce = c);
    let ae = {};
    ee && (g ? ae = Q.parent.getParentProps() : oe && (ae = Q.parent.getChildProps(oe)));
    const { checked: de = i, indeterminate: he = u, onCheckedChange: ge, ...pe } = ae, ve = Q?.value, fe = Q?.setValue, Te = Q?.defaultValue, _e = XUt.useRef(null), Ce = CW(()=>Symbol("checkbox-control")), Se = XUt.useRef(!1), { getButtonProps: Pe, buttonRef: we } = wz({
        disabled: re,
        native: k
    }), Ie = Q?.validation ?? G, [Me, De] = yne({
        controlled: oe && ve && !g ? ve.includes(oe) : de,
        default: oe && Te && !g ? Te.includes(oe) : s,
        name: "Checkbox",
        state: "checked"
    }), Ne = ee ? !!de : Me, be = ee && he || u;
    su(()=>{
        Y !== Ax && (Se.current = !0, Y(Ce.current, ce));
    }, [
        ce,
        Y,
        Ce
    ]), XUt.useEffect(()=>{
        const Ye = Ce.current;
        return ()=>{
            !Se.current || Y === Ax || (Se.current = !1, Y(Ye, void 0));
        };
    }, [
        Y,
        Ce
    ]), Jnt(_e, se, Me, void 0, !Q && !re, h);
    const je = XUt.useRef(null), $e = Ioe(d, je, Ie.inputRef, Ie.registerInput), Je = gma(o, K, je, !k, ce ?? void 0);
    su(()=>{
        je.current && (je.current.indeterminate = be, Me && O(!0));
    }, [
        Me,
        be,
        O
    ]), URe(Me, ()=>{
        Q || (I(ie), O(Me), M(Me !== H.initialValue), Ie.change(Me));
    });
    const Ge = uB({
        checked: Me,
        disabled: re,
        form: l,
        name: g ? void 0 : ie,
        id: k ? void 0 : ce ?? void 0,
        required: b,
        ref: $e,
        style: ie ? MSt : Z5e,
        tabIndex: -1,
        type: "checkbox",
        "aria-hidden": !0,
        onChange (Ye) {
            if (Ye.nativeEvent.defaultPrevented) return;
            if (f) {
                Ye.preventDefault();
                return;
            }
            const Ve = Ye.currentTarget.checked, Xe = zd(kO, Ye.nativeEvent);
            if (p?.(Ve, Xe), !Xe.isCanceled && (ge?.(Ve, Xe), !Xe.isCanceled && (De(Ve), oe && ve && fe && !g && !ee))) {
                const lt = Ve ? [
                    ...ve,
                    oe
                ] : ve.filter((He)=>He !== oe);
                fe(lt, Xe);
            }
        },
        onFocus () {
            _e.current?.focus();
        }
    }, S !== void 0 ? {
        value: (Q ? Me && S : S) || ""
    } : pE, J, (Ye)=>Ie.getValidationProps(re, Ye));
    XUt.useEffect(()=>{
        if (!te || !oe) return;
        const Ye = te.disabledStatesRef.current;
        return Ye.set(oe, re), ()=>{
            Ye.delete(oe);
        };
    }, [
        te,
        re,
        oe
    ]);
    const xe = XUt.useMemo(()=>({
            ...j,
            checked: Ne,
            disabled: re,
            readOnly: f,
            required: b,
            indeterminate: be
        }), [
        j,
        Ne,
        re,
        f,
        b,
        be
    ]), Oe = F4h(xe), ct = Lm("span", e, {
        state: xe,
        ref: [
            we,
            _e,
            n,
            Q?.registerControlRef
        ],
        props: [
            {
                id: k ? ce ?? void 0 : se,
                role: "checkbox",
                "aria-checked": be ? "mixed" : Ne,
                "aria-readonly": f || void 0,
                "aria-required": b || void 0,
                "aria-labelledby": Je,
                [Zma]: g ? "" : void 0,
                onFocus () {
                    re || N(!0);
                },
                onBlur () {
                    const Ye = je.current;
                    Ye && (U(!0), N(!1), $ === "onBlur" && Ie.commit(Q ? ve : Ye.checked));
                },
                onKeyDown (Ye) {
                    if (Ye.key !== "Enter" || (Ye.preventBaseUIHandler(), Ye.defaultPrevented)) return;
                    const Ve = je.current?.form ?? null, Xe = Ye.currentTarget, lt = Ye.nativeEvent, He = Ye.preventDefault, gt = lt.preventDefault;
                    let ht = !1;
                    Ye.preventDefault = ()=>{
                        ht = !0, He.call(Ye);
                    }, lt.preventDefault = ()=>{
                        ht = !0, gt.call(lt);
                    }, gt.call(lt), g2(Xe).queueMicrotask(()=>{
                        Ye.preventDefault = He, lt.preventDefault = gt, ht || skS(Ve)?.click();
                    });
                },
                onClick (Ye) {
                    if (f || re) return;
                    Ye.preventDefault();
                    const Ve = je.current;
                    Ve && Ve.dispatchEvent(new (g2(Ve)).PointerEvent("click", {
                        bubbles: !0,
                        shiftKey: Ye.shiftKey,
                        ctrlKey: Ye.ctrlKey,
                        altKey: Ye.altKey,
                        metaKey: Ye.metaKey
                    }));
                }
            },
            T,
            pe,
            Pe,
            J,
            (Ye)=>Ie.getValidationProps(re, Ye)
        ],
        stateAttributesMapping: Oe
    });
    return ukS(i5r.Provider, {
        value: xe,
        children: [
            ct,
            !Me && !Q && ie && !g && y !== void 0 && $4h("input", {
                type: "hidden",
                form: l,
                name: ie,
                value: y,
                disabled: re
            }),
            $4h("input", {
                ...Ge,
                suppressHydrationWarning: !0
            })
        ]
    });
}), process.env.NODE_ENV !== "production" && (Qma.displayName = "CheckboxRoot");

}
