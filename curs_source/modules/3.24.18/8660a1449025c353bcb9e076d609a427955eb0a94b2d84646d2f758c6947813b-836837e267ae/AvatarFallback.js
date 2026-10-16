import { fRa } from "./AvatarRootContext.js";
import { Lm, a6 } from "./LYd.js";
import { kwp } from "./ipa.js";
import { Wjr, vRa } from "./stateAttributesMapping_9.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import { M7 } from "./useTimeout.js";
import * as SRa from "./react-runtime/react/esm-index-production.js";
var kRa;
export { kRa };
var __wakaru_l_1_initialized = false;
export function l_1() {
if (__wakaru_l_1_initialized) return;
__wakaru_l_1_initialized = true;
E(), M7(), Om(), fRa(), vRa(), kRa = SRa.forwardRef(function(e, n) {
    const { className: i, render: r, delay: s, style: o, ...a } = e, { imageLoadingStatus: l } = kwp(), [c, u] = SRa.useState(s === void 0), d = a6();
    return SRa.useEffect(()=>(s !== void 0 ? d.start(s, ()=>u(!0)) : u(!0), d.clear), [
        d,
        s
    ]), Lm("span", e, {
        state: {
            imageLoadingStatus: l
        },
        ref: n,
        props: a,
        stateAttributesMapping: Wjr,
        enabled: l !== "loaded" && (s === void 0 || c)
    });
}), process.env.NODE_ENV !== "production" && (kRa.displayName = "AvatarFallback");

}
