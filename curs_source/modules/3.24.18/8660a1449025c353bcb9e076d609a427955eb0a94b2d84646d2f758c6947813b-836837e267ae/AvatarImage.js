import { fRa } from "./AvatarRootContext.js";
import { GQ, Lm, NRe, pu } from "./LYd.js";
import { kwp, s_1 } from "./ipa.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { Wjr, vRa } from "./stateAttributesMapping_9.js";
import { E } from "./tslib.es6.js";
import { o_1 } from "./useImageLoadingStatus.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { qQ } from "./useOpenChangeComplete.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import { LRe } from "./useTransitionStatus.js";
import * as wwp from "./react-runtime/react/esm-index-production.js";
var Cwp, yRa;
export { Cwp, yRa };
var __wakaru_a_1_initialized = false;
export function a_1() {
if (__wakaru_a_1_initialized) return;
__wakaru_a_1_initialized = true;
E(), Jy(), jv(), Om(), fRa(), vRa(), qQ(), l6(), LRe(), o_1(), Cwp = {
    ...Wjr,
    ...D7
}, yRa = wwp.forwardRef(function(e, n) {
    const { className: i, render: r, onLoadingStatusChange: s, style: o, ...a } = e, { setImageLoadingStatus: l } = kwp(), c = s_1(a.src, a), u = c === "loaded", { mounted: d, transitionStatus: h, setMounted: p } = NRe(u), g = wwp.useRef(null), f = pu((y)=>{
        s?.(y), l(y);
    });
    su(()=>{
        c !== "idle" && f(c);
    }, [
        c,
        f
    ]), su(()=>()=>l("idle"), [
        l
    ]), GQ({
        open: u,
        ref: g,
        onComplete () {
            u || p(!1);
        }
    });
    const b = Lm("img", e, {
        state: {
            imageLoadingStatus: c,
            transitionStatus: h
        },
        ref: [
            n,
            g
        ],
        props: a,
        stateAttributesMapping: Cwp,
        enabled: d
    });
    return d ? b : null;
}), process.env.NODE_ENV !== "production" && (yRa.displayName = "AvatarImage");

}
