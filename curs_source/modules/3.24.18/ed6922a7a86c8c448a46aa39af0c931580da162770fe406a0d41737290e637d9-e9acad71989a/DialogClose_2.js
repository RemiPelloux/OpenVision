import { iMe } from "./DialogRootContext.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { M6e } from "./f0s.js";
import { Qu, e$, kp } from "./qIc.js";
import { g_, uSn } from "./reason-parts.js";
import { x } from "./tslib.es6.js";
import { t$ } from "./useButton.js";
import { wp } from "./useRenderElement.js";
import * as mJf from "./react-runtime/react/esm-index-production.js";
var OOs;
export { OOs };
var __wakaru_gJf_initialized = false;
export function gJf() {
if (__wakaru_gJf_initialized) return;
__wakaru_gJf_initialized = true;
x(), iMe(), wp(), Ty(), t$(), g_(), OOs = mJf.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, disabled: o = !1, nativeButton: a = !0, ...c } = t, { store: l } = M6e(), u = l.useState("open"), { getButtonProps: h, buttonRef: p } = e$({
        disabled: o,
        native: a
    }), g = {
        disabled: o
    };
    function f(v) {
        u && l.setOpen(!1, Qu(uSn, v.nativeEvent));
    }
    return kp("button", t, {
        state: g,
        ref: [
            n,
            p
        ],
        props: [
            {
                onClick: f
            },
            c,
            h
        ]
    });
}), process.env.NODE_ENV !== "production" && (OOs.displayName = "DialogClose");

}
