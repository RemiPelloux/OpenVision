import { Y_e } from "./ComboboxRootContext.js";
import { Ioe, wz, zd } from "./LYd.js";
import { VS } from "./createBaseUIEventDetails.js";
import { x0e } from "./ipa.js";
import { Tli, Zb } from "./reason-parts.js";
import { E } from "./tslib.es6.js";
import { Cz } from "./useButton.js";
import { m_e } from "./useMergedRefs.js";
import { MSt, WHe } from "./visuallyHidden.js";
import { jsx as mZS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as pZS from "./react-runtime/react/esm-index-production.js";
var Y8r;
export { Y8r };
var __wakaru_ycp_initialized = false;
export function ycp() {
if (__wakaru_ycp_initialized) return;
__wakaru_ycp_initialized = true;
E(), m_e(), WHe(), VS(), Y_e(), Cz(), Zb(), Y8r = pZS.forwardRef(function(e, n) {
    const i = x0e(), { buttonRef: r, getButtonProps: s } = wz({
        native: !1
    }), o = Ioe(n, r);
    function a(c) {
        i.state.setOpen(!1, zd(Tli, c.nativeEvent, c.currentTarget));
    }
    const l = s({
        onClick: a
    });
    return mZS("span", {
        ref: o,
        ...l,
        "aria-label": "Dismiss",
        tabIndex: void 0,
        style: MSt
    });
}), process.env.NODE_ENV !== "production" && (Y8r.displayName = "ComboboxInternalDismissButton");

}
