import { BOs, kFi } from "./DialogPortalContext.js";
import { iMe } from "./DialogRootContext.js";
import { Fgt, Ogt } from "./FloatingPortal.js";
import { Jgt, KSn } from "./InternalBackdrop.js";
import { M6e } from "./f0s.js";
import { HSn } from "./inertValue.js";
import { $Sn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { jsxs as CJf } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as Wcu } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as wJf from "./react-runtime/react/esm-index-production.js";
var $Os;
export { $Os };
var __wakaru_TJf_initialized = false;
export function TJf() {
if (__wakaru_TJf_initialized) return;
__wakaru_TJf_initialized = true;
x(), HSn(), iMe(), BOs(), KSn(), Fgt(), $Os = wJf.forwardRef(function(t, n) {
    const { keepMounted: i = !1, ...r } = t, { store: s } = M6e(), o = s.useState("mounted"), a = s.useState("modal"), c = s.useState("open");
    return o || i ? Wcu(kFi.Provider, {
        value: i,
        children: CJf(Ogt, {
            ref: n,
            ...r,
            children: [
                o && a === !0 && Wcu(Jgt, {
                    ref: s.context.internalBackdropRef,
                    inert: $Sn(!c)
                }),
                t.children
            ]
        })
    }) : null;
}), process.env.NODE_ENV !== "production" && ($Os.displayName = "DialogPortal");

}
