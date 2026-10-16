import { ESl } from "./CompositeItem.js";
import { YHg } from "./ToggleGroupContext.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { Zki } from "./error_2.js";
import { KHg, Mre, Qu, SR, TSl, e$, jmt, kp } from "./qIc.js";
import { g_, lN } from "./reason-parts.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { t$ } from "./useButton.js";
import { sCe } from "./useControlled.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { wp } from "./useRenderElement.js";
import { jsx as ZHg } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as xSl from "./react-runtime/react/esm-index-production.js";
var Kbs;
export { Kbs };
var __wakaru_QHg_initialized = false;
export function QHg() {
if (__wakaru_QHg_initialized) return;
__wakaru_QHg_initialized = true;
x(), sCe(), af(), Zki(), TD(), wp(), YHg(), t$(), ESl(), Ty(), g_(), Kbs = xSl.forwardRef(function(t, n) {
    const { className: i, defaultPressed: r = !1, disabled: s = !1, form: o, onPressedChange: a, pressed: c, render: l, type: u, value: h, nativeButton: p = !0, style: g, ...f } = t, v = SR(h || void 0), b = KHg(), y = b?.value ?? [], T = b ? void 0 : r, E = (s || b?.disabled) ?? !1;
    process.env.NODE_ENV !== "production" && gl(()=>{
        b && h === void 0 && b.isValueInitialized && jmt("A `<Toggle>` component rendered in a `<ToggleGroup>` has no explicit `value` prop.", "This will cause issues between the Toggle Group and Toggle values.", "Provide the `<Toggle>` with a `value` prop matching the `<ToggleGroup>` values prop type.");
    }, [
        b,
        h,
        b?.isValueInitialized
    ]);
    const [A, R] = Mre({
        controlled: b ? v !== void 0 && y.indexOf(v) > -1 : c,
        default: T,
        name: "Toggle",
        state: "pressed"
    }), { getButtonProps: D, buttonRef: P } = e$({
        disabled: E,
        native: p
    }), N = {
        disabled: E,
        pressed: A
    }, O = [
        P,
        n
    ], F = [
        {
            "aria-pressed": A,
            onClick (W) {
                const G = !A, q = Qu(lN, W.nativeEvent);
                a?.(G, q), !q.isCanceled && (v && b?.setGroupValue?.(v, G, q), !q.isCanceled && R(G));
            }
        },
        f,
        D
    ], H = kp("button", t, {
        enabled: !b,
        state: N,
        ref: O,
        props: F
    }), $ = xSl.useMemo(()=>({
            disabled: E,
            focusableWhenDisabled: !1
        }), [
        E
    ]);
    return b ? ZHg(TSl, {
        tag: "button",
        render: l,
        className: i,
        style: g,
        metadata: $,
        state: N,
        refs: O,
        props: F
    }) : H;
}), process.env.NODE_ENV !== "production" && (Kbs.displayName = "Toggle");

}
