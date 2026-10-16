import { G5e, Rgt } from "./engine.js";
import { LDg, cil } from "./screen-reader.js";
import { x } from "./tslib.es6.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { oYe, sYe } from "./visuallyHidden.js";
import * as _il from "./react-runtime/react/esm-index-production.js";
import { jsx as qDg } from "./react-runtime/react/esm-jsx-runtime-production.js";
var URe;
export { URe };
var __wakaru_f0i_initialized = false;
export function f0i() {
if (__wakaru_f0i_initialized) return;
__wakaru_f0i_initialized = true;
x(), af(), oYe(), LDg(), Rgt(), URe = _il.forwardRef(function(t, n) {
    const [i, r] = _il.useState();
    return gl(()=>{
        cil && G5e && r("button");
    }, []), qDg("span", {
        ...t,
        ref: n,
        style: sYe,
        "aria-hidden": i ? void 0 : !0,
        ...{
            tabIndex: 0,
            role: i
        },
        "data-base-ui-focus-guard": ""
    });
}), process.env.NODE_ENV !== "production" && (URe.displayName = "FocusGuard");

}
