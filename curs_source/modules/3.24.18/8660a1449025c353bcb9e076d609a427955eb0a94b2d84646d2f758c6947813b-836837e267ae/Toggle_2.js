import { caa } from "./CompositeItem.js";
import { $I, EnS, Lm, laa, r8t, wz, yne, zd } from "./LYd.js";
import { InS } from "./ToggleGroupContext.js";
import { VS } from "./createBaseUIEventDetails.js";
import { WIr } from "./error_2.js";
import { Zb, kO } from "./reason-parts.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { Cz } from "./useButton.js";
import { __e } from "./useControlled.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { Om } from "./useRenderElement.js";
import { jsx as AnS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as Ykh from "./react-runtime/react/esm-index-production.js";
var uaa;
export { uaa };
var __wakaru_RnS_initialized = false;
export function RnS() {
if (__wakaru_RnS_initialized) return;
__wakaru_RnS_initialized = true;
E(), __e(), jv(), WIr(), _A(), Om(), InS(), Cz(), caa(), VS(), Zb(), uaa = Ykh.forwardRef(function(e, n) {
    const { className: i, defaultPressed: r = !1, disabled: s = !1, form: o, onPressedChange: a, pressed: l, render: c, type: u, value: d, nativeButton: h = !0, style: p, ...g } = e, f = $I(d || void 0), _ = EnS(), b = _?.value ?? [], y = _ ? void 0 : r, S = (s || _?.disabled) ?? !1;
    process.env.NODE_ENV !== "production" && su(()=>{
        _ && d === void 0 && _.isValueInitialized && r8t("A `<Toggle>` component rendered in a `<ToggleGroup>` has no explicit `value` prop.", "This will cause issues between the Toggle Group and Toggle values.", "Provide the `<Toggle>` with a `value` prop matching the `<ToggleGroup>` values prop type.");
    }, [
        _,
        d,
        _?.isValueInitialized
    ]);
    const [k, C] = yne({
        controlled: _ ? f !== void 0 && b.indexOf(f) > -1 : l,
        default: y,
        name: "Toggle",
        state: "pressed"
    }), { getButtonProps: T, buttonRef: I } = wz({
        disabled: S,
        native: h
    }), A = {
        disabled: S,
        pressed: k
    }, P = [
        I,
        n
    ], M = [
        {
            "aria-pressed": k,
            onClick (U) {
                const j = !k, $ = zd(kO, U.nativeEvent);
                a?.(j, $), !$.isCanceled && (f && _?.setGroupValue?.(f, j, $), !$.isCanceled && C(j));
            }
        },
        g,
        T
    ], O = Lm("button", e, {
        enabled: !_,
        state: A,
        ref: P,
        props: M
    }), N = Ykh.useMemo(()=>({
            disabled: S,
            focusableWhenDisabled: !1
        }), [
        S
    ]);
    return _ ? AnS(laa, {
        tag: "button",
        render: c,
        className: i,
        style: p,
        metadata: N,
        state: A,
        refs: P,
        props: M
    }) : O;
}), process.env.NODE_ENV !== "production" && (uaa.displayName = "Toggle");

}
