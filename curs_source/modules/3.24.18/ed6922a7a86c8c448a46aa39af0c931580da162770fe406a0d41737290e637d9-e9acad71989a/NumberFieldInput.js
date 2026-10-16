import { mj } from "./FieldRootContext.js";
import { mCe } from "./FormContext.js";
import { Bre } from "./LabelableContext.js";
import { xFi } from "./NumberFieldRootContext.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { lj } from "./event_3.js";
import { Mlu, RUt, TFs, a6t, aFs, flu, oFs } from "./f0s.js";
import { Q0n } from "./formatNumber.js";
import { CFs, MFi, PFi, kFs, wFs } from "./parse_7.js";
import { Fre, KBt, Qu, cCe, e9e, kp, oY, pCe, qbn, wU } from "./qIc.js";
import { Pre, _ds, g_, hSn, j5e, p0i } from "./reason-parts.js";
import { RRe, q3t } from "./safeReact.js";
import { IFi, kxn } from "./stateAttributesMapping_10.js";
import { x } from "./tslib.es6.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { YBt } from "./useRegisterFieldControl.js";
import { wp } from "./useRenderElement.js";
import { XBt } from "./useValueChanged.js";
import { Nlu } from "./validate.js";
import { zbn } from "./warn.js";
import * as LFi from "./react-runtime/react/esm-index-production.js";
var Zlu, DFs;
export { DFs, Zlu };
var __wakaru_Zev_initialized = false;
export function Zev() {
if (__wakaru_Zev_initialized) return;
__wakaru_Zev_initialized = true;
x(), q3t(), zbn(), af(), xFi(), mj(), YBt(), mCe(), Bre(), PFi(), IFi(), wp(), Ty(), Q0n(), XBt(), Nlu(), g_(), lj(), Zlu = new Set([
    "Backspace",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    "Tab",
    "Enter",
    "Escape"
]), DFs = LFi.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, ...o } = t, { allowInputSyncRef: a, disabled: c, formatOptionsRef: l, getAllowedNonNumericKeys: u, getStepAmount: h, id: p, incrementValue: g, inputMode: f, inputValue: v, max: b, min: y, name: T, nameProp: E, readOnly: A, required: R, setValue: D, state: P, setInputValue: N, locale: O, inputRef: F, value: H, onValueCommitted: $, lastChangedValueRef: W, hasPendingCommitRef: G, valueRef: q } = oFs(), { clearErrors: z } = pCe(), { validationMode: X, setTouched: Y, setFocused: Z, invalid: K, shouldValidateOnChange: J, validation: ne } = oY(), { labelId: ee } = Fre(), se = LFi.useRef(!1), re = LFi.useRef(!1), ue = LFi.useRef(null);
    return KBt(F, p, H, void 0, !c, E), gl(()=>{
        if (ue.current != null) {
            const le = ue.current;
            ue.current = null, F.current?.setSelectionRange(le, le);
        }
    }), e9e(H, ()=>{
        if (z(T), re.current && !J()) {
            re.current = !1;
            return;
        }
        ne.change(H);
    }), kp("input", t, {
        ref: [
            n,
            F
        ],
        state: P,
        props: [
            {
                id: p,
                required: R,
                disabled: c,
                readOnly: A,
                inputMode: f,
                value: v,
                type: "text",
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: "false",
                "aria-roledescription": "Number field",
                "aria-invalid": !c && K ? !0 : void 0,
                "aria-labelledby": ee,
                suppressHydrationWarning: !0,
                onFocus (le) {
                    if (le.defaultPrevented || c || (Z(!0), se.current)) return;
                    se.current = !0;
                    const ye = le.currentTarget, _e = ye.value.length;
                    ye.setSelectionRange(_e, _e);
                },
                onBlur (le) {
                    if (le.defaultPrevented || c || (Y(!0), Z(!1), A)) return;
                    const ye = !a.current, _e = G.current;
                    if (a.current = !0, v.trim() === "") {
                        const et = Qu(Pre, le.nativeEvent);
                        if (D(null, et), et.isCanceled) return;
                        X === "onBlur" && ne.commit(null), (ye || _e || H !== null) && $(null, cCe(Pre, le.nativeEvent));
                        return;
                    }
                    const me = l.current, Ce = RUt(v, O, me);
                    if (Ce === null) return;
                    const xe = TFs(me);
                    let Le;
                    !ye && !xe ? Le = H : xe ? Le = Mlu(Ce, me) : Le = Ce;
                    const Be = cCe(p0i, le.nativeEvent), je = H !== Le, Ge = ye || je || _e;
                    let Xe = Le;
                    if (je) {
                        const et = Qu(p0i, le.nativeEvent);
                        if (re.current = !0, D(Le, et), et.isCanceled) {
                            re.current = !1;
                            return;
                        }
                        Xe = W.current ?? Le, Xe === H && (re.current = !1);
                    }
                    X === "onBlur" && ne.commit(Xe), Ge && $(Xe, Be);
                    const Ke = a6t(Xe, O, me);
                    v !== Ke && N(Ke);
                },
                onChange (le) {
                    if (le.nativeEvent.defaultPrevented) return;
                    a.current = !1;
                    const ye = le.currentTarget.value;
                    if (ye.trim() === "") {
                        N(ye), D(null, Qu(Pre, le.nativeEvent));
                        return;
                    }
                    const _e = u();
                    if (!Array.from(ye).every((xe)=>flu(xe) || MFi.test(xe) || _e.has(xe))) return;
                    const Ce = RUt(ye, O, l.current);
                    N(ye), Ce !== null && D(Ce, Qu(j5e, le.nativeEvent));
                },
                onKeyDown (le) {
                    if (le.defaultPrevented || A || c) return;
                    const ye = le.nativeEvent, _e = !a.current, me = u();
                    let Ce = me.has(le.key);
                    const { decimal: xe, currency: Le, percentSign: Be } = aFs(O, l.current), je = le.currentTarget.selectionStart, Ge = le.currentTarget.selectionEnd, Xe = je === 0 && Ge === v.length, Ke = (ht)=>je != null && Ge != null && ht >= je && ht < Ge;
                    [
                        [
                            MFi,
                            kFs
                        ],
                        [
                            CFs,
                            wFs
                        ]
                    ].forEach(([ht, ut])=>{
                        if (ht.test(le.key) && Array.from(me).some((Dt)=>ht.test(Dt))) {
                            const Dt = v.search(ut), lt = Dt !== -1 && Ke(Dt);
                            Ce = !(MFi.test(v) || CFs.test(v)) || Xe || lt;
                        }
                    }), [
                        xe,
                        Le,
                        Be
                    ].forEach((ht)=>{
                        if (le.key === ht) {
                            const ut = v.indexOf(ht), Dt = Ke(ut);
                            Ce = !v.includes(ht) || Xe || Dt;
                        }
                    });
                    const We = Zlu.has(le.key), it = le.key === "ArrowUp" || le.key === "ArrowDown";
                    if (le.which === 229 || le.altKey && !it || le.ctrlKey || le.metaKey || Ce || flu(le.key) || We) return;
                    const Ne = le.key === "Home" && y != null, Fe = le.key === "End" && b != null;
                    if (le.key.length > 1 && !it && !Ne && !Fe) return;
                    const Qe = _e ? RUt(v, O, l.current) : null, tt = h(le);
                    wU(le);
                    const st = cCe(hSn, ye);
                    let vt = !1;
                    le.key === "ArrowUp" || le.key === "ArrowDown" ? (a.current = !0, _e || (W.current = q.current), vt = g(tt, {
                        direction: le.key === "ArrowUp" ? 1 : -1,
                        currentValue: Qe,
                        event: ye,
                        reason: hSn
                    })) : Ne ? (a.current = !0, vt = D(y, Qu(hSn, ye))) : Fe && (a.current = !0, vt = D(b, Qu(hSn, ye))), vt && $(W.current ?? q.current, st);
                },
                onPaste (le) {
                    if (le.defaultPrevented || A || c) return;
                    let ye = "";
                    try {
                        ye = le.clipboardData?.getData("text/plain") ?? "";
                    } catch  {
                        if (process.env.NODE_ENV !== "production") {
                            const Be = RRe.captureOwnerStack?.() || "";
                            qbn("<NumberField.Input> could not read clipboard text during paste handling.", Be);
                        }
                        return;
                    }
                    le.preventDefault();
                    const _e = le.currentTarget, me = _e.selectionStart ?? v.length, Ce = _e.selectionEnd ?? v.length, xe = v.slice(0, me) + ye + v.slice(Ce), Le = RUt(xe, O, l.current);
                    Le !== null && (a.current = !1, ue.current = me + ye.length, D(Le, Qu(_ds, le.nativeEvent)), N(xe));
                }
            },
            o,
            (le)=>ne.getValidationProps(c, le)
        ],
        stateAttributesMapping: kxn
    });
}), process.env.NODE_ENV !== "production" && (DFs.displayName = "NumberFieldInput");

}
