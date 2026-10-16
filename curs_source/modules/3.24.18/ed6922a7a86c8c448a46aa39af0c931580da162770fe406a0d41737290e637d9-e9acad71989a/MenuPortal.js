import { Fgt, Ogt } from "./FloatingPortal.js";
import { TFl, sDi } from "./MenuPortalContext.js";
import { Xre } from "./MenuRootContext.js";
import { Yre } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { jsx as EFl } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as haf from "./react-runtime/react/esm-index-production.js";
var oDi;
export { oDi };
var __wakaru_xFl_initialized = false;
export function xFl() {
if (__wakaru_xFl_initialized) return;
__wakaru_xFl_initialized = true;
x(), Xre(), TFl(), Fgt(), oDi = haf.forwardRef(function(t, n) {
    const { keepMounted: i = !1, ...r } = t, { store: s } = Yre();
    return s.useState("mounted") || i ? EFl(sDi.Provider, {
        value: i,
        children: EFl(Ogt, {
            ref: n,
            ...r
        })
    }) : null;
}), process.env.NODE_ENV !== "production" && (oDi.displayName = "MenuPortal");

}
