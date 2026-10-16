import { Nyv, cf0 } from "./AsyncMotionValueAnimation.mjs";
import { XYl, dFi } from "./JSAnimation.mjs";
import { Gyv, hf0 } from "./default-transitions.mjs";
import { bRt, oEe } from "./frame.mjs";
import { QAs } from "./get-final.mjs";
import { zyv } from "./get-value-transition.mjs";
import { Fut } from "./global-config.mjs";
import { xR } from "./index_10.mjs";
import { mf0 } from "./is-transition-defined.mjs";
import { xyv } from "./make-animation-instant.mjs";
import { ZAs, cXl, pf0, qyv } from "./ofv.js";
import { sEe } from "./time-conversion.mjs";
import { E } from "./tslib.es6.js";
var Kyv;
export { Kyv };
var __wakaru_gf0_initialized = false;
export function gf0() {
if (__wakaru_gf0_initialized) return;
__wakaru_gf0_initialized = true;
E(), xR(), cf0(), XYl(), zyv(), xyv(), hf0(), QAs(), mf0(), bRt(), Kyv = (t, e, n, i = {}, r, s)=>(o)=>{
        const a = qyv(i, t) || {}, l = a.delay || i.delay || 0;
        let { elapsed: c = 0 } = i;
        c = c - sEe(l);
        const u = {
            keyframes: Array.isArray(n) ? n : [
                null,
                n
            ],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...a,
            delay: -c,
            onUpdate: (h)=>{
                e.set(h), a.onUpdate && a.onUpdate(h);
            },
            onComplete: ()=>{
                o(), a.onComplete && a.onComplete();
            },
            name: t,
            motionValue: e,
            element: s ? void 0 : r
        };
        pf0(a) || Object.assign(u, Gyv(t, u)), u.duration && (u.duration = sEe(u.duration)), u.repeatDelay && (u.repeatDelay = sEe(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
        let d = !1;
        if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (cXl(u), u.delay === 0 && (d = !0)), (Fut.instantAnimations || Fut.skipAnimations || r?.shouldSkipAnimations) && (d = !0, cXl(u), u.delay = 0), u.allowFlatten = !a.type && !a.ease, d && !s && e.get() !== void 0) {
            const h = ZAs(u.keyframes, a);
            if (h !== void 0) {
                oEe.update(()=>{
                    u.onUpdate(h), u.onComplete();
                });
                return;
            }
        }
        return a.isSync ? new dFi(u) : new Nyv(u);
    };

}
