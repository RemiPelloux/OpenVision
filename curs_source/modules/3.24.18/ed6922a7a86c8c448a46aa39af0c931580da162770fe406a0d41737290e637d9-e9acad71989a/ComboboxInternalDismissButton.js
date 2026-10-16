import { Nue } from "./ComboboxRootContext.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { wve } from "./f0s.js";
import { Ire, Qu, e$ } from "./qIc.js";
import { g_, uSn } from "./reason-parts.js";
import { x } from "./tslib.es6.js";
import { t$ } from "./useButton.js";
import { _fe } from "./useMergedRefs.js";
import { Cgt, oYe } from "./visuallyHidden.js";
import * as K4f from "./react-runtime/react/esm-index-production.js";
import { jsx as Y4f } from "./react-runtime/react/esm-jsx-runtime-production.js";
var L2i;
export { L2i };
var __wakaru_$Ql_initialized = false;
export function $Ql() {
if (__wakaru_$Ql_initialized) return;
__wakaru_$Ql_initialized = true;
x(), _fe(), oYe(), Ty(), Nue(), t$(), g_(), L2i = K4f.forwardRef(function(t, n) {
    const i = wve(), { buttonRef: r, getButtonProps: s } = e$({
        native: !1
    }), o = Ire(n, r);
    function a(l) {
        i.state.setOpen(!1, Qu(uSn, l.nativeEvent, l.currentTarget));
    }
    const c = s({
        onClick: a
    });
    return Y4f("span", {
        ref: o,
        ...c,
        "aria-label": "Dismiss",
        tabIndex: void 0,
        style: Cgt
    });
}), process.env.NODE_ENV !== "production" && (L2i.displayName = "ComboboxInternalDismissButton");

}
