import { i } from "./plugin-brand-icon.js";
import { Lme, S0 } from "./useButton.mjs";
import { Ki, ea } from "./useRenderElement.mjs";
import * as Tui from "./react-runtime/react/esm-index-production.js";
var Dme;
export { Dme };
var __wakaru_bki_initialized = false;
export function bki() {
if (__wakaru_bki_initialized) return;
__wakaru_bki_initialized = true;
"use client";
Lme(), ea(), Dme = Tui.forwardRef(i(function(e, a) {
    const { render: s, className: l, disabled: u = !1, focusableWhenDisabled: p = !1, nativeButton: m = !0, style: b, ...g } = e, { getButtonProps: _, buttonRef: v } = S0({
        disabled: u,
        focusableWhenDisabled: p,
        native: m
    });
    return Ki("button", e, {
        state: {
            disabled: u
        },
        ref: [
            a,
            v
        ],
        props: [
            g,
            _
        ]
    });
}, "Button")), Dme.displayName = "Button";

}
