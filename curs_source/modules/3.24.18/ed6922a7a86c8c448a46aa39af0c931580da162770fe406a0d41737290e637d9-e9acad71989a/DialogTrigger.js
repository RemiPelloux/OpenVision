import { iMe } from "./DialogRootContext.js";
import { D0i, Nre } from "./constants_10.js";
import { M6e } from "./f0s.js";
import { Eb, p_ } from "./formatErrorMessage.js";
import { ZBt, g2 } from "./popupStateMapping.js";
import { s$ } from "./popupStoreUtils.js";
import { Bgt, Rhs, SR, e$, kSn, kp } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { t$ } from "./useButton.js";
import { Ugt } from "./useClick.js";
import { FSn } from "./useOpenInteractionType.js";
import { wp } from "./useRenderElement.js";
import * as Xcu from "./react-runtime/react/esm-index-production.js";
var qOs;
export { qOs };
var __wakaru_WJf_initialized = false;
export function WJf() {
if (__wakaru_WJf_initialized) return;
__wakaru_WJf_initialized = true;
x(), Eb(), iMe(), t$(), wp(), g2(), Nre(), TD(), FSn(), s$(), Ugt(), qOs = Xcu.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, disabled: o = !1, nativeButton: a = !0, id: c, payload: l, handle: u, ...h } = t, p = M6e(!0), g = u?.store ?? p?.store;
    if (!g) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Dialog.Trigger> must be used within <Dialog.Root> or provided with a handle." : p_(79));
    const f = SR(c), v = g.useState("floatingRootContext"), b = g.useState("isOpenedByTrigger", f), y = g.useState("triggerPopupId", f), T = Xcu.useRef(null), { registerTrigger: E, isMountedByThisTrigger: A } = kSn(f, T, g, {
        payload: l
    }), { getButtonProps: R, buttonRef: D } = e$({
        disabled: o,
        native: a
    }), P = Bgt(v, {
        enabled: v != null
    }), N = Rhs(()=>g.select("open"), (H)=>{
        g.set("openMethod", H);
    }), O = {
        disabled: o,
        open: b
    }, F = g.useState("triggerProps", A);
    return kp("button", t, {
        state: O,
        ref: [
            D,
            n,
            E,
            T
        ],
        props: [
            P.reference,
            F,
            N,
            {
                [D0i]: "",
                id: f,
                "aria-haspopup": "dialog",
                "aria-expanded": b,
                "aria-controls": y
            },
            h,
            R
        ],
        stateAttributesMapping: ZBt
    });
}), process.env.NODE_ENV !== "production" && (qOs.displayName = "DialogTrigger");

}
