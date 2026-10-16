import { K8t, Y8t } from "./FloatingPortal.js";
import { IOr, n6h } from "./MenuPortalContext.js";
import { F_e } from "./MenuRootContext.js";
import { O_e } from "./ipa.js";
import { E } from "./tslib.es6.js";
import * as YyS from "./react-runtime/react/esm-index-production.js";
import { jsx as i6h } from "./react-runtime/react/esm-jsx-runtime-production.js";
var xOr;
export { xOr };
var __wakaru_r6h_initialized = false;
export function r6h() {
if (__wakaru_r6h_initialized) return;
__wakaru_r6h_initialized = true;
E(), F_e(), n6h(), Y8t(), xOr = YyS.forwardRef(function(e, n) {
    const { keepMounted: i = !1, ...r } = e, { store: s } = O_e();
    return s.useState("mounted") || i ? i6h(IOr.Provider, {
        value: i,
        children: i6h(K8t, {
            ref: n,
            ...r
        })
    }) : null;
}), process.env.NODE_ENV !== "production" && (xOr.displayName = "MenuPortal");

}
