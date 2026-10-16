import { $3l } from "./CheckboxGroupContext.js";
import { MDi, hBl } from "./CheckboxRootContext.js";
import { EDi } from "./FieldItemContext.js";
import { mj } from "./FieldRootContext.js";
import { mCe } from "./FormContext.js";
import { Bre } from "./LabelableContext.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { LE, R0 } from "./empty.js";
import { G1s, Slf, U3l, lBl, o3l } from "./f0s.js";
import { D0 } from "./floating-ui.utils.dom.js";
import { klf } from "./getDefaultFormSubmitter.js";
import { QK } from "./mergeProps.js";
import { Fre, I3, Ire, KBt, Mre, Mx, Qu, SR, e$, e9e, fA, kp, l6, oY, pCe } from "./qIc.js";
import { g_, lN } from "./reason-parts.js";
import { x } from "./tslib.es6.js";
import { a3l } from "./useAriaLabelledBy.js";
import { TD } from "./useBaseUiId.js";
import { t$ } from "./useButton.js";
import { sCe } from "./useControlled.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { _fe } from "./useMergedRefs.js";
import { xW } from "./useRefWithInit.js";
import { YBt } from "./useRegisterFieldControl.js";
import { wp } from "./useRenderElement.js";
import { uBl } from "./useStateAttributesMapping.js";
import { XBt } from "./useValueChanged.js";
import { Cgt, oYe, sYe } from "./visuallyHidden.js";
import { jsxs as Elf } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as pBl } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as xvt from "./react-runtime/react/esm-index-production.js";
var mBl, oTs;
export { mBl, oTs };
var __wakaru_xlf_initialized = false;
export function xlf() {
if (__wakaru_xlf_initialized) return;
__wakaru_xlf_initialized = true;
x(), LE(), sCe(), af(), _fe(), xW(), oYe(), klf(), uBl(), wp(), TD(), t$(), mj(), YBt(), EDi(), mCe(), Bre(), a3l(), $3l(), hBl(), Ty(), XBt(), QK(), g_(), D0(), mBl = "data-parent", oTs = xvt.forwardRef(function(t, n) {
    const { checked: i, className: r, defaultChecked: s = !1, "aria-labelledby": o, disabled: a = !1, form: c, id: l, indeterminate: u = !1, inputRef: h, name: p, onCheckedChange: g, parent: f = !1, readOnly: v = !1, render: b, required: y = !1, uncheckedValue: T, value: E, nativeButton: A = !1, style: R, ...D } = t, { clearErrors: P } = pCe(), { disabled: N, name: O, setDirty: F, setFilled: H, setFocused: $, setTouched: W, state: G, validationMode: q, validityData: z, validation: X } = oY(), Y = G1s(), { labelId: Z, controlId: K, registerControlId: J, getDescriptionProps: ne } = Fre(), ee = U3l(), se = ee?.parent, re = se && ee.allValues, ue = N || Y.disabled || ee?.disabled || a, ce = O ?? p, de = E ?? ce, le = SR(), ye = SR();
    let _e = K;
    re ? _e = f ? ye : `${se.id}-${de}` : l && (_e = l);
    let me = {};
    re && (f ? me = ee.parent.getParentProps() : de && (me = ee.parent.getChildProps(de)));
    const { checked: Ce = i, indeterminate: xe = u, onCheckedChange: Le, ...Be } = me, je = ee?.value, Ge = ee?.setValue, Xe = ee?.defaultValue, Ke = xvt.useRef(null), et = l6(()=>Symbol("checkbox-control")), We = xvt.useRef(!1), { getButtonProps: it, buttonRef: Ne } = e$({
        disabled: ue,
        native: A
    }), Fe = ee?.validation ?? X, [Qe, tt] = Mre({
        controlled: de && je && !f ? je.includes(de) : Ce,
        default: de && Xe && !f ? Xe.includes(de) : s,
        name: "Checkbox",
        state: "checked"
    }), st = re ? !!Ce : Qe, vt = re && xe || u;
    gl(()=>{
        J !== Mx && (We.current = !0, J(et.current, _e));
    }, [
        _e,
        J,
        et
    ]), xvt.useEffect(()=>{
        const Rt = et.current;
        return ()=>{
            !We.current || J === Mx || (We.current = !1, J(Rt, void 0));
        };
    }, [
        J,
        et
    ]), KBt(Ke, le, Qe, void 0, !ee && !ue, p);
    const ht = xvt.useRef(null), ut = Ire(h, ht, Fe.inputRef, Fe.registerInput), Dt = o3l(o, Z, ht, !A, _e ?? void 0);
    gl(()=>{
        ht.current && (ht.current.indeterminate = vt, Qe && H(!0));
    }, [
        Qe,
        vt,
        H
    ]), e9e(Qe, ()=>{
        ee || (P(ce), H(Qe), F(Qe !== z.initialValue), Fe.change(Qe));
    });
    const lt = I3({
        checked: Qe,
        disabled: ue,
        form: c,
        name: f ? void 0 : ce,
        id: A ? void 0 : _e ?? void 0,
        required: y,
        ref: ut,
        style: ce ? Cgt : sYe,
        tabIndex: -1,
        type: "checkbox",
        "aria-hidden": !0,
        onChange (Rt) {
            if (Rt.nativeEvent.defaultPrevented) return;
            if (v) {
                Rt.preventDefault();
                return;
            }
            const Gt = Rt.currentTarget.checked, Nt = Qu(lN, Rt.nativeEvent);
            if (g?.(Gt, Nt), !Nt.isCanceled && (Le?.(Gt, Nt), !Nt.isCanceled && (tt(Gt), de && je && Ge && !f && !re))) {
                const sn = Gt ? [
                    ...je,
                    de
                ] : je.filter((un)=>un !== de);
                Ge(sn, Nt);
            }
        },
        onFocus () {
            Ke.current?.focus();
        }
    }, E !== void 0 ? {
        value: (ee ? Qe && E : E) || ""
    } : R0, ne, (Rt)=>Fe.getValidationProps(ue, Rt));
    xvt.useEffect(()=>{
        if (!se || !de) return;
        const Rt = se.disabledStatesRef.current;
        return Rt.set(de, ue), ()=>{
            Rt.delete(de);
        };
    }, [
        se,
        ue,
        de
    ]);
    const Tt = xvt.useMemo(()=>({
            ...G,
            checked: st,
            disabled: ue,
            readOnly: v,
            required: y,
            indeterminate: vt
        }), [
        G,
        st,
        ue,
        v,
        y,
        vt
    ]), ct = lBl(Tt), Kt = kp("span", t, {
        state: Tt,
        ref: [
            Ne,
            Ke,
            n,
            ee?.registerControlRef
        ],
        props: [
            {
                id: A ? _e ?? void 0 : le,
                role: "checkbox",
                "aria-checked": vt ? "mixed" : st,
                "aria-readonly": v || void 0,
                "aria-required": y || void 0,
                "aria-labelledby": Dt,
                [mBl]: f ? "" : void 0,
                onFocus () {
                    ue || $(!0);
                },
                onBlur () {
                    const Rt = ht.current;
                    Rt && (W(!0), $(!1), q === "onBlur" && Fe.commit(ee ? je : Rt.checked));
                },
                onKeyDown (Rt) {
                    if (Rt.key !== "Enter" || (Rt.preventBaseUIHandler(), Rt.defaultPrevented)) return;
                    const Gt = ht.current?.form ?? null, Nt = Rt.currentTarget, sn = Rt.nativeEvent, un = Rt.preventDefault, kt = sn.preventDefault;
                    let ot = !1;
                    Rt.preventDefault = ()=>{
                        ot = !0, un.call(Rt);
                    }, sn.preventDefault = ()=>{
                        ot = !0, kt.call(sn);
                    }, kt.call(sn), fA(Nt).queueMicrotask(()=>{
                        Rt.preventDefault = un, sn.preventDefault = kt, ot || Slf(Gt)?.click();
                    });
                },
                onClick (Rt) {
                    if (v || ue) return;
                    Rt.preventDefault();
                    const Gt = ht.current;
                    Gt && Gt.dispatchEvent(new (fA(Gt)).PointerEvent("click", {
                        bubbles: !0,
                        shiftKey: Rt.shiftKey,
                        ctrlKey: Rt.ctrlKey,
                        altKey: Rt.altKey,
                        metaKey: Rt.metaKey
                    }));
                }
            },
            D,
            Be,
            it,
            ne,
            (Rt)=>Fe.getValidationProps(ue, Rt)
        ],
        stateAttributesMapping: ct
    });
    return Elf(MDi.Provider, {
        value: Tt,
        children: [
            Kt,
            !Qe && !ee && ce && !f && T !== void 0 && pBl("input", {
                type: "hidden",
                form: c,
                name: ce,
                value: T,
                disabled: ue
            }),
            pBl("input", {
                ...lt,
                suppressHydrationWarning: !0
            })
        ]
    });
}), process.env.NODE_ENV !== "production" && (oTs.displayName = "CheckboxRoot");

}
