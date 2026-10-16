import { COs } from "./AvatarRootContext.js";
import { Rcu } from "./f0s.js";
import { aN, kp } from "./qIc.js";
import { TOs, bFi } from "./stateAttributesMapping_9.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import { A3 } from "./useTimeout.js";
import * as AOs from "./react-runtime/react/esm-index-production.js";
var ROs;
export { ROs };
var __wakaru_cJf_initialized = false;
export function cJf() {
if (__wakaru_cJf_initialized) return;
__wakaru_cJf_initialized = true;
x(), A3(), wp(), COs(), TOs(), ROs = AOs.forwardRef(function(t, n) {
    const { className: i, render: r, delay: s, style: o, ...a } = t, { imageLoadingStatus: c } = Rcu(), [l, u] = AOs.useState(s === void 0), h = aN();
    return AOs.useEffect(()=>(s !== void 0 ? h.start(s, ()=>u(!0)) : u(!0), h.clear), [
        h,
        s
    ]), kp("span", t, {
        state: {
            imageLoadingStatus: c
        },
        ref: n,
        props: a,
        stateAttributesMapping: bFi,
        enabled: c !== "loaded" && (s === void 0 || l)
    });
}), process.env.NODE_ENV !== "production" && (ROs.displayName = "AvatarFallback");

}
