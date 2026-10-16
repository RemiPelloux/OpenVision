import { N7 } from "./FieldRootContext.js";
import { C_e } from "./FormContext.js";
import { Ez, Jnt, Lm, URe, Vj, jwe, w_e, zQ, zd, zvn } from "./LYd.js";
import { VQ } from "./LabelableContext.js";
import { u$r } from "./NumberFieldRootContext.js";
import { VS } from "./createBaseUIEventDetails.js";
import { Sne } from "./event_3.js";
import { ySn } from "./formatNumber.js";
import { HWe, M2a, P2a, RCp, X2a, c0n, mCp } from "./ipa.js";
import { K2a, V2a, Y2a, f$r, g$r } from "./parse_10.js";
import { Q_n, VHe, Zb, mRr, vQo, y_e } from "./reason-parts.js";
import { BHe, Qvn } from "./safeReact.js";
import { N_i, d$r } from "./stateAttributesMapping_11.js";
import { E } from "./tslib.es6.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { eit } from "./useRegisterFieldControl.js";
import { Om } from "./useRenderElement.js";
import { rit } from "./useValueChanged.js";
import { DCp } from "./validate.js";
import { Vvn } from "./warn.js";
import * as v$r from "./react-runtime/react/esm-index-production.js";
var YCp, nPa;
export { YCp, nPa };
var __wakaru_ES1_initialized = false;
export function ES1() {
if (__wakaru_ES1_initialized) return;
__wakaru_ES1_initialized = true;
E(), Qvn(), Vvn(), jv(), u$r(), N7(), eit(), C_e(), VQ(), f$r(), d$r(), Om(), VS(), ySn(), rit(), DCp(), Zb(), Sne(), YCp = new Set([
    "Backspace",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    "Tab",
    "Enter",
    "Escape"
]), nPa = v$r.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { allowInputSyncRef: a, disabled: l, formatOptionsRef: c, getAllowedNonNumericKeys: u, getStepAmount: d, id: h, incrementValue: p, inputMode: g, inputValue: f, max: _, min: b, name: y, nameProp: S, readOnly: k, required: C, setValue: T, state: I, setInputValue: A, locale: P, inputRef: M, value: O, onValueCommitted: N, lastChangedValueRef: U, hasPendingCommitRef: j, valueRef: $ } = P2a(), { clearErrors: H } = w_e(), { validationMode: G, setTouched: q, setFocused: K, invalid: V, shouldValidateOnChange: Y, validation: J } = Vj(), { labelId: Q } = zQ(), te = v$r.useRef(!1), ee = v$r.useRef(!1), re = v$r.useRef(null);
    return Jnt(M, h, O, void 0, !l, S), su(()=>{
        if (re.current != null) {
            const se = re.current;
            re.current = null, M.current?.setSelectionRange(se, se);
        }
    }), URe(O, ()=>{
        if (H(y), ee.current && !Y()) {
            ee.current = !1;
            return;
        }
        J.change(O);
    }), Lm("input", e, {
        ref: [
            n,
            M
        ],
        state: I,
        props: [
            {
                id: h,
                required: C,
                disabled: l,
                readOnly: k,
                inputMode: g,
                value: f,
                type: "text",
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: "false",
                "aria-roledescription": "Number field",
                "aria-invalid": !l && V ? !0 : void 0,
                "aria-labelledby": Q,
                suppressHydrationWarning: !0,
                onFocus (se) {
                    if (se.defaultPrevented || l || (K(!0), te.current)) return;
                    te.current = !0;
                    const le = se.currentTarget, ce = le.value.length;
                    le.setSelectionRange(ce, ce);
                },
                onBlur (se) {
                    if (se.defaultPrevented || l || (q(!0), K(!1), k)) return;
                    const le = !a.current, ce = j.current;
                    if (a.current = !0, f.trim() === "") {
                        const Ce = zd(y_e, se.nativeEvent);
                        if (T(null, Ce), Ce.isCanceled) return;
                        G === "onBlur" && J.commit(null), (le || ce || O !== null) && N(null, jwe(y_e, se.nativeEvent));
                        return;
                    }
                    const ae = c.current, de = c0n(f, P, ae);
                    if (de === null) return;
                    const he = X2a(ae);
                    let ge;
                    !le && !he ? ge = O : he ? ge = RCp(de, ae) : ge = de;
                    const pe = jwe(mRr, se.nativeEvent), ve = O !== ge, fe = le || ve || ce;
                    let Te = ge;
                    if (ve) {
                        const Ce = zd(mRr, se.nativeEvent);
                        if (ee.current = !0, T(ge, Ce), Ce.isCanceled) {
                            ee.current = !1;
                            return;
                        }
                        Te = U.current ?? ge, Te === O && (ee.current = !1);
                    }
                    G === "onBlur" && J.commit(Te), fe && N(Te, pe);
                    const _e = HWe(Te, P, ae);
                    f !== _e && A(_e);
                },
                onChange (se) {
                    if (se.nativeEvent.defaultPrevented) return;
                    a.current = !1;
                    const le = se.currentTarget.value;
                    if (le.trim() === "") {
                        A(le), T(null, zd(y_e, se.nativeEvent));
                        return;
                    }
                    const ce = u();
                    if (!Array.from(le).every((he)=>mCp(he) || g$r.test(he) || ce.has(he))) return;
                    const de = c0n(le, P, c.current);
                    A(le), de !== null && T(de, zd(VHe, se.nativeEvent));
                },
                onKeyDown (se) {
                    if (se.defaultPrevented || k || l) return;
                    const le = se.nativeEvent, ce = !a.current, ae = u();
                    let de = ae.has(se.key);
                    const { decimal: he, currency: ge, percentSign: pe } = M2a(P, c.current), ve = se.currentTarget.selectionStart, fe = se.currentTarget.selectionEnd, Te = ve === 0 && fe === f.length, _e = (je)=>ve != null && fe != null && je >= ve && je < fe;
                    [
                        [
                            g$r,
                            V2a
                        ],
                        [
                            Y2a,
                            K2a
                        ]
                    ].forEach(([je, $e])=>{
                        if (je.test(se.key) && Array.from(ae).some((Je)=>je.test(Je))) {
                            const Je = f.search($e), Ge = Je !== -1 && _e(Je);
                            de = !(g$r.test(f) || Y2a.test(f)) || Te || Ge;
                        }
                    }), [
                        he,
                        ge,
                        pe
                    ].forEach((je)=>{
                        if (se.key === je) {
                            const $e = f.indexOf(je), Je = _e($e);
                            de = !f.includes(je) || Te || Je;
                        }
                    });
                    const Se = YCp.has(se.key), Pe = se.key === "ArrowUp" || se.key === "ArrowDown";
                    if (se.which === 229 || se.altKey && !Pe || se.ctrlKey || se.metaKey || de || mCp(se.key) || Se) return;
                    const we = se.key === "Home" && b != null, Ie = se.key === "End" && _ != null;
                    if (se.key.length > 1 && !Pe && !we && !Ie) return;
                    const Me = ce ? c0n(f, P, c.current) : null, De = d(se);
                    Ez(se);
                    const Ne = jwe(Q_n, le);
                    let be = !1;
                    se.key === "ArrowUp" || se.key === "ArrowDown" ? (a.current = !0, ce || (U.current = $.current), be = p(De, {
                        direction: se.key === "ArrowUp" ? 1 : -1,
                        currentValue: Me,
                        event: le,
                        reason: Q_n
                    })) : we ? (a.current = !0, be = T(b, zd(Q_n, le))) : Ie && (a.current = !0, be = T(_, zd(Q_n, le))), be && N(U.current ?? $.current, Ne);
                },
                onPaste (se) {
                    if (se.defaultPrevented || k || l) return;
                    let le = "";
                    try {
                        le = se.clipboardData?.getData("text/plain") ?? "";
                    } catch  {
                        if (process.env.NODE_ENV !== "production") {
                            const pe = BHe.captureOwnerStack?.() || "";
                            zvn("<NumberField.Input> could not read clipboard text during paste handling.", pe);
                        }
                        return;
                    }
                    se.preventDefault();
                    const ce = se.currentTarget, ae = ce.selectionStart ?? f.length, de = ce.selectionEnd ?? f.length, he = f.slice(0, ae) + le + f.slice(de), ge = c0n(he, P, c.current);
                    ge !== null && (a.current = !1, re.current = ae + le.length, T(ge, zd(vQo, se.nativeEvent)), A(he));
                }
            },
            o,
            (se)=>J.getValidationProps(l, se)
        ],
        stateAttributesMapping: N_i
    });
}), process.env.NODE_ENV !== "production" && (nPa.displayName = "NumberFieldInput");

}
