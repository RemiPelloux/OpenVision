import { mj } from "./FieldRootContext.js";
import { mCe } from "./FormContext.js";
import { Bre } from "./LabelableContext.js";
import { Ore, sY } from "./constants_11.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { C5 } from "./owner.js";
import { Fre, KBt, KS, Mre, Qu, kp, oY, pCe, su, uj, zgt } from "./qIc.js";
import { g_, lN } from "./reason-parts.js";
import { cN } from "./shadowDom.js";
import { x } from "./tslib.es6.js";
import { sCe } from "./useControlled.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { Kgt } from "./useLabelableId.js";
import { YBt } from "./useRegisterFieldControl.js";
import { wp } from "./useRenderElement.js";
import { Cy } from "./useStableCallback.js";
import * as O3l from "./react-runtime/react/esm-index-production.js";
var IDi;
export { IDi };
var __wakaru_F3l_initialized = false;
export function F3l() {
if (__wakaru_F3l_initialized) return;
__wakaru_F3l_initialized = true;
x(), sCe(), af(), C5(), Cy(), mj(), YBt(), mCe(), Bre(), Kgt(), sY(), wp(), Ty(), cN(), g_(), IDi = O3l.forwardRef(function(t, n) {
    const { render: i, className: r, id: s, name: o, value: a, disabled: c = !1, onValueChange: l, defaultValue: u, autoFocus: h = !1, style: p, ...g } = t, { state: f, name: v, disabled: b, setTouched: y, setDirty: T, validityData: E, setFocused: A, setFilled: R, validationMode: D, validation: P } = oY(), { clearErrors: N } = pCe(), O = b || c, F = v ?? o, H = {
        ...f,
        disabled: O
    }, { labelId: $ } = Fre(), W = zgt({
        id: s
    });
    gl(()=>{
        const K = a != null;
        P.inputRef.current?.value || K && a !== "" ? R(!0) : K && a === "" && R(!1);
    }, [
        P.inputRef,
        R,
        a
    ]);
    const G = O3l.useRef(null);
    gl(()=>{
        h && G.current === uj(KS(G.current)) && A(!0);
    }, [
        h,
        A
    ]);
    const [q] = Mre({
        controlled: a,
        default: u,
        name: "FieldControl",
        state: "value"
    }), z = a !== void 0, X = z ? q : void 0, Y = su(()=>P.inputRef.current?.value);
    return KBt(P.inputRef, W, X, Y, !O, o), kp("input", t, {
        ref: [
            n,
            G
        ],
        state: H,
        props: [
            {
                id: W,
                disabled: O,
                name: F,
                ref: P.inputRef,
                "aria-labelledby": $,
                autoFocus: h,
                ...z ? {
                    value: X
                } : {
                    defaultValue: u
                },
                onChange (K) {
                    const J = K.currentTarget.value;
                    l?.(J, Qu(lN, K.nativeEvent)), T(J !== E.initialValue), R(J !== ""), K.nativeEvent.defaultPrevented || (N(F), P.change(J));
                },
                onFocus () {
                    A(!0);
                },
                onBlur (K) {
                    y(!0), A(!1), D === "onBlur" && P.commit(K.currentTarget.value);
                },
                onKeyDown (K) {
                    K.currentTarget.tagName === "INPUT" && K.key === "Enter" && (y(!0), P.commit(K.currentTarget.value));
                }
            },
            g,
            (K)=>P.getValidationProps(O, K)
        ],
        stateAttributesMapping: Ore
    });
}), process.env.NODE_ENV !== "production" && (IDi.displayName = "FieldControl");

}
