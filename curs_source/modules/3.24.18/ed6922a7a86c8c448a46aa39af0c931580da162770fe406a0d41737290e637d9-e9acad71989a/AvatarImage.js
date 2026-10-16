import { COs } from "./AvatarRootContext.js";
import { Rcu, sJf } from "./f0s.js";
import { dCe, hj, kp, su } from "./qIc.js";
import { $O, T5 } from "./stateAttributesMapping.js";
import { TOs, bFi } from "./stateAttributesMapping_9.js";
import { x } from "./tslib.es6.js";
import { oJf } from "./useImageLoadingStatus.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { pj } from "./useOpenChangeComplete.js";
import { wp } from "./useRenderElement.js";
import { Cy } from "./useStableCallback.js";
import { hCe } from "./useTransitionStatus.js";
import * as Dcu from "./react-runtime/react/esm-index-production.js";
var Mcu, IOs;
export { IOs, Mcu };
var __wakaru_aJf_initialized = false;
export function aJf() {
if (__wakaru_aJf_initialized) return;
__wakaru_aJf_initialized = true;
x(), Cy(), af(), wp(), COs(), TOs(), pj(), $O(), hCe(), oJf(), Mcu = {
    ...bFi,
    ...T5
}, IOs = Dcu.forwardRef(function(t, n) {
    const { className: i, render: r, onLoadingStatusChange: s, style: o, ...a } = t, { setImageLoadingStatus: c } = Rcu(), l = sJf(a.src, a), u = l === "loaded", { mounted: h, transitionStatus: p, setMounted: g } = dCe(u), f = Dcu.useRef(null), v = su((T)=>{
        s?.(T), c(T);
    });
    gl(()=>{
        l !== "idle" && v(l);
    }, [
        l,
        v
    ]), gl(()=>()=>c("idle"), [
        c
    ]), hj({
        open: u,
        ref: f,
        onComplete () {
            u || g(!1);
        }
    });
    const y = kp("img", t, {
        state: {
            imageLoadingStatus: l,
            transitionStatus: p
        },
        ref: [
            n,
            f
        ],
        props: a,
        stateAttributesMapping: Mcu,
        enabled: h
    });
    return h ? y : null;
}), process.env.NODE_ENV !== "production" && (IOs.displayName = "AvatarImage");

}
