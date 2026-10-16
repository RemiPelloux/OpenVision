import { N7 } from "./FieldRootContext.js";
import { C_e } from "./FormContext.js";
import { Jnt, Lm, OY, Vj, ak, pu, tit, w_e, yne, zQ, zd } from "./LYd.js";
import { VQ } from "./LabelableContext.js";
import { BY, wne } from "./constants_11.js";
import { VS } from "./createBaseUIEventDetails.js";
import { hB } from "./owner.js";
import { Zb, kO } from "./reason-parts.js";
import { $D } from "./shadowDom.js";
import { E } from "./tslib.es6.js";
import { __e } from "./useControlled.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { nit } from "./useLabelableId.js";
import { eit } from "./useRegisterFieldControl.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import * as d4h from "./react-runtime/react/esm-index-production.js";
var QOr;
export { QOr };
var __wakaru_h4h_initialized = false;
export function h4h() {
if (__wakaru_h4h_initialized) return;
__wakaru_h4h_initialized = true;
E(), __e(), jv(), hB(), Jy(), N7(), eit(), C_e(), VQ(), nit(), BY(), Om(), VS(), $D(), Zb(), QOr = d4h.forwardRef(function(e, n) {
    const { render: i, className: r, id: s, name: o, value: a, disabled: l = !1, onValueChange: c, defaultValue: u, autoFocus: d = !1, style: h, ...p } = e, { state: g, name: f, disabled: _, setTouched: b, setDirty: y, validityData: S, setFocused: k, setFilled: C, validationMode: T, validation: I } = Vj(), { clearErrors: A } = w_e(), P = _ || l, M = f ?? o, O = {
        ...g,
        disabled: P
    }, { labelId: N } = zQ(), U = tit({
        id: s
    });
    su(()=>{
        const V = a != null;
        I.inputRef.current?.value || V && a !== "" ? C(!0) : V && a === "" && C(!1);
    }, [
        I.inputRef,
        C,
        a
    ]);
    const j = d4h.useRef(null);
    su(()=>{
        d && j.current === OY(ak(j.current)) && k(!0);
    }, [
        d,
        k
    ]);
    const [$] = yne({
        controlled: a,
        default: u,
        name: "FieldControl",
        state: "value"
    }), H = a !== void 0, G = H ? $ : void 0, q = pu(()=>I.inputRef.current?.value);
    return Jnt(I.inputRef, U, G, q, !P, o), Lm("input", e, {
        ref: [
            n,
            j
        ],
        state: O,
        props: [
            {
                id: U,
                disabled: P,
                name: M,
                ref: I.inputRef,
                "aria-labelledby": N,
                autoFocus: d,
                ...H ? {
                    value: G
                } : {
                    defaultValue: u
                },
                onChange (V) {
                    const Y = V.currentTarget.value;
                    c?.(Y, zd(kO, V.nativeEvent)), y(Y !== S.initialValue), C(Y !== ""), V.nativeEvent.defaultPrevented || (A(M), I.change(Y));
                },
                onFocus () {
                    k(!0);
                },
                onBlur (V) {
                    b(!0), k(!1), T === "onBlur" && I.commit(V.currentTarget.value);
                },
                onKeyDown (V) {
                    V.currentTarget.tagName === "INPUT" && V.key === "Enter" && (b(!0), I.commit(V.currentTarget.value));
                }
            },
            p,
            (V)=>I.getValidationProps(P, V)
        ],
        stateAttributesMapping: wne
    });
}), process.env.NODE_ENV !== "production" && (QOr.displayName = "FieldControl");

}
