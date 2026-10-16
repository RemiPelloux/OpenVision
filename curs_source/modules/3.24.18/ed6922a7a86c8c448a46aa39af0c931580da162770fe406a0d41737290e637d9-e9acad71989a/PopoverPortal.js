import { Fgt, Ogt } from "./FloatingPortal.js";
import { SLi, fVl } from "./PopoverPortalContext.js";
import { ZXe } from "./PopoverRootContext.js";
import { XXe } from "./f0s.js";
import { x } from "./tslib.es6.js";
import * as RAf from "./react-runtime/react/esm-index-production.js";
import { jsx as vVl } from "./react-runtime/react/esm-jsx-runtime-production.js";
var GAs;
export { GAs };
var __wakaru_DAf_initialized = false;
export function DAf() {
if (__wakaru_DAf_initialized) return;
__wakaru_DAf_initialized = true;
x(), ZXe(), fVl(), Fgt(), GAs = RAf.forwardRef(function(t, n) {
    const { keepMounted: i = !1, ...r } = t, { store: s } = XXe();
    return s.useState("mounted") || i ? vVl(SLi.Provider, {
        value: i,
        children: vVl(Ogt, {
            ref: n,
            ...r
        })
    }) : null;
}), process.env.NODE_ENV !== "production" && (GAs.displayName = "PopoverPortal");

}
