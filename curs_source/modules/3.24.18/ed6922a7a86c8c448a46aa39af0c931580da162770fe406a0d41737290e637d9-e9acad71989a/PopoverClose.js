import { ZXe } from "./PopoverRootContext.js";
import { SVl } from "./closePart.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { BAf, XXe } from "./f0s.js";
import { Qu, e$, kp } from "./qIc.js";
import { g_, uSn } from "./reason-parts.js";
import { x } from "./tslib.es6.js";
import { t$ } from "./useButton.js";
import { wp } from "./useRenderElement.js";
import * as VAf from "./react-runtime/react/esm-index-production.js";
var YAs;
export { YAs };
var __wakaru_jAf_initialized = false;
export function jAf() {
if (__wakaru_jAf_initialized) return;
__wakaru_jAf_initialized = true;
x(), ZXe(), wp(), Ty(), SVl(), t$(), g_(), YAs = VAf.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, disabled: o = !1, nativeButton: a = !0, ...c } = t, { buttonRef: l, getButtonProps: u } = e$({
        disabled: o,
        focusableWhenDisabled: !1,
        native: a
    }), { store: h } = XXe();
    return BAf(), kp("button", t, {
        ref: [
            n,
            l
        ],
        props: [
            {
                onClick (g) {
                    h.setOpen(!1, Qu(uSn, g.nativeEvent));
                }
            },
            c,
            u
        ]
    });
}), process.env.NODE_ENV !== "production" && (YAs.displayName = "PopoverClose");

}
