import { SIe, b$t } from "./CompositeItem.mjs";
import { H4i, j0r } from "./ToggleGroupContext.mjs";
import { Li, yc } from "./createBaseUIEventDetails.mjs";
import { Pme, zT } from "./error.mjs";
import { i } from "./plugin-brand-icon.js";
import { tc } from "./reasons.mjs";
import { Vp, ef } from "./useBaseUiId.mjs";
import { Lme, S0 } from "./useButton.mjs";
import { BT, a3 } from "./useControlled.mjs";
import { Ir, bo } from "./useIsoLayoutEffect.mjs";
import { Ki, ea } from "./useRenderElement.mjs";
import { jsx as Idi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as cHn from "./react-runtime/react/esm-index-production.js";
var Cr = {};
var DLt;
export { Cr, DLt };
var __wakaru_Z4i_initialized = false;
export function Z4i() {
if (__wakaru_Z4i_initialized) return;
__wakaru_Z4i_initialized = true;
"use client";
BT(), bo(), Pme(), ef(), ea(), H4i(), Lme(), b$t(), yc(), tc(), DLt = cHn.forwardRef(i(function(e, a) {
    const { className: s, defaultPressed: l = !1, disabled: u = !1, form: p, onPressedChange: m, pressed: b, render: g, type: _, value: v, nativeButton: x = !0, style: C, ...E } = e, A = Vp(v || void 0), $ = j0r(), I = $?.value ?? [], N = $ ? void 0 : l, R = (u || $?.disabled) ?? !1;
    Ir(()=>{
        $ && v === void 0 && $.isValueInitialized && zT("A `<Toggle>` component rendered in a `<ToggleGroup>` has no explicit `value` prop.", "This will cause issues between the Toggle Group and Toggle values.", "Provide the `<Toggle>` with a `value` prop matching the `<ToggleGroup>` values prop type.");
    }, [
        $,
        v,
        $?.isValueInitialized
    ]);
    const [P, L] = a3({
        controlled: $ ? A !== void 0 && I.indexOf(A) > -1 : b,
        default: N,
        name: "Toggle",
        state: "pressed"
    }), { getButtonProps: j, buttonRef: z } = S0({
        disabled: R,
        native: x
    }), q = {
        disabled: R,
        pressed: P
    }, O = [
        z,
        a
    ], B = [
        {
            "aria-pressed": P,
            onClick (Z) {
                const K = !P, Y = Li(Cr.none, Z.nativeEvent);
                m?.(K, Y), !Y.isCanceled && (A && $?.setGroupValue?.(A, K, Y), !Y.isCanceled && L(K));
            }
        },
        E,
        j
    ], V = Ki("button", e, {
        enabled: !$,
        state: q,
        ref: O,
        props: B
    }), H = cHn.useMemo(()=>({
            disabled: R,
            focusableWhenDisabled: !1
        }), [
        R
    ]);
    return $ ? Idi(SIe, {
        tag: "button",
        render: g,
        className: s,
        style: C,
        metadata: H,
        state: q,
        refs: O,
        props: B
    }) : V;
}, "Toggle")), DLt.displayName = "Toggle";

}
