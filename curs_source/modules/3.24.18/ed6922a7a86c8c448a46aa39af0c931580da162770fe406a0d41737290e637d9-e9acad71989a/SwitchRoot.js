import { mj } from "./FieldRootContext.js";
import { mCe } from "./FormContext.js";
import { Bre } from "./LabelableContext.js";
import { r3l, vDi } from "./SwitchRootContext.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { LE, R0 } from "./empty.js";
import { o3l } from "./f0s.js";
import { D0 } from "./floating-ui.utils.dom.js";
import { QK } from "./mergeProps.js";
import { Fre, I3, Ire, KBt, Mre, Qu, SR, e$, e9e, fA, kp, oY, pCe, zgt } from "./qIc.js";
import { g_, lN } from "./reason-parts.js";
import { k1s, s3l } from "./stateAttributesMapping_3.js";
import { x } from "./tslib.es6.js";
import { a3l } from "./useAriaLabelledBy.js";
import { TD } from "./useBaseUiId.js";
import { t$ } from "./useButton.js";
import { sCe } from "./useControlled.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { Kgt } from "./useLabelableId.js";
import { _fe } from "./useMergedRefs.js";
import { YBt } from "./useRegisterFieldControl.js";
import { wp } from "./useRenderElement.js";
import { XBt } from "./useValueChanged.js";
import { Cgt, oYe, sYe } from "./visuallyHidden.js";
import * as _Di from "./react-runtime/react/esm-index-production.js";
import { jsx as c3l } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as scf } from "./react-runtime/react/esm-jsx-runtime-production.js";
var w1s;
export { w1s };
var __wakaru_ocf_initialized = false;
export function ocf() {
if (__wakaru_ocf_initialized) return;
__wakaru_ocf_initialized = true;
x(), sCe(), _fe(), af(), oYe(), LE(), wp(), TD(), r3l(), s3l(), mj(), YBt(), mCe(), Bre(), a3l(), Kgt(), Ty(), XBt(), t$(), D0(), QK(), g_(), w1s = _Di.forwardRef(function(t, n) {
    const { checked: i, className: r, defaultChecked: s, "aria-labelledby": o, form: a, id: c, inputRef: l, name: u, nativeButton: h = !1, onCheckedChange: p, readOnly: g = !1, required: f = !1, disabled: v = !1, render: b, uncheckedValue: y, value: T, style: E, ...A } = t, { clearErrors: R } = pCe(), { state: D, setTouched: P, setDirty: N, validityData: O, setFilled: F, setFocused: H, validationMode: $, disabled: W, name: G, validation: q } = oY(), { labelId: z } = Fre(), X = W || v, Y = G ?? u, Z = _Di.useRef(null), K = Ire(Z, l, q.inputRef), J = _Di.useRef(null), ne = SR(), ee = zgt({
        id: c,
        implicit: !1,
        controlRef: J
    }), se = h ? void 0 : ee, [re, ue] = Mre({
        controlled: i,
        default: !!s,
        name: "Switch",
        state: "checked"
    });
    KBt(J, ne, re, void 0, !X, u), gl(()=>{
        Z.current && F(Z.current.checked);
    }, [
        Z,
        F
    ]), e9e(re, ()=>{
        R(Y), N(re !== O.initialValue), F(re), q.change(re);
    });
    const { getButtonProps: ce, buttonRef: de } = e$({
        disabled: X,
        native: h
    }), le = o3l(o, z, Z, !h, se), ye = {
        id: h ? ee : ne,
        role: "switch",
        "aria-checked": re,
        "aria-readonly": g || void 0,
        "aria-required": f || void 0,
        "aria-labelledby": le,
        onFocus () {
            X || H(!0);
        },
        onBlur () {
            const xe = Z.current;
            !xe || X || (P(!0), H(!1), $ === "onBlur" && q.commit(xe.checked));
        },
        onClick (xe) {
            if (g || X) return;
            xe.preventDefault();
            const Le = Z.current;
            Le && Le.dispatchEvent(new (fA(Le)).PointerEvent("click", {
                bubbles: !0,
                shiftKey: xe.shiftKey,
                ctrlKey: xe.ctrlKey,
                altKey: xe.altKey,
                metaKey: xe.metaKey
            }));
        }
    }, _e = I3({
        checked: re,
        disabled: X,
        form: a,
        id: se,
        name: Y,
        required: f,
        style: Y ? Cgt : sYe,
        tabIndex: -1,
        type: "checkbox",
        "aria-hidden": !0,
        ref: K,
        onChange (xe) {
            if (xe.nativeEvent.defaultPrevented) return;
            if (g) {
                xe.preventDefault();
                return;
            }
            const Le = xe.currentTarget.checked, Be = Qu(lN, xe.nativeEvent);
            p?.(Le, Be), !Be.isCanceled && ue(Le);
        },
        onFocus () {
            J.current?.focus();
        }
    }, (xe)=>q.getValidationProps(X, xe), T !== void 0 ? {
        value: T
    } : R0), me = _Di.useMemo(()=>({
            ...D,
            checked: re,
            disabled: X,
            readOnly: g,
            required: f
        }), [
        D,
        re,
        X,
        g,
        f
    ]), Ce = kp("span", t, {
        state: me,
        ref: [
            n,
            J,
            de
        ],
        props: [
            ye,
            A,
            ce,
            (xe)=>q.getValidationProps(X, xe)
        ],
        stateAttributesMapping: k1s
    });
    return scf(vDi.Provider, {
        value: me,
        children: [
            Ce,
            !re && Y && y !== void 0 && c3l("input", {
                type: "hidden",
                form: a,
                name: Y,
                value: y,
                disabled: X
            }),
            c3l("input", {
                ..._e,
                suppressHydrationWarning: !0
            })
        ]
    });
}), process.env.NODE_ENV !== "production" && (w1s.displayName = "SwitchRoot");

}
