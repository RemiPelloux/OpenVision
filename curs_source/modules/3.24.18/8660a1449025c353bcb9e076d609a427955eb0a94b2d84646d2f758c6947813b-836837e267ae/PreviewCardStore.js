import { Bah, Iah, e2r, gWy, i2r } from "./LYd.js";
import { B8t, z_n } from "./ReactStore.js";
import { dna, shh } from "./constants_12.js";
import { $nt, vc } from "./createSelector.js";
import { sJo } from "./inlineRect.js";
import { FY } from "./popupStoreUtils.js";
import { USt, n7t } from "./popupTriggerMap.js";
import { E4, Zb } from "./reason-parts.js";
import { obn, qli } from "./store_3.js";
import { E } from "./tslib.es6.js";
import * as mWy from "./react-runtime/react/esm-index-production.js";
var ohh, ahh, lhh, chh, hna;
export { ahh, chh, hna, lhh, ohh };
var __wakaru_uhh_initialized = false;
export function uhh() {
if (__wakaru_uhh_initialized) return;
__wakaru_uhh_initialized = true;
E(), shh(), $nt(), qli(), z_n(), n7t(), FY(), Zb(), sJo(), ohh = Object.defineProperty, ahh = (t, e, n)=>e in t ? ohh(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, lhh = (t, e, n)=>ahh(t, typeof e != "symbol" ? e + "" : e, n), chh = {
    ...obn,
    instantType: vc((t)=>t.instantType),
    hasViewport: vc((t)=>t.hasViewport)
}, hna = class h2b extends B8t {
    constructor(e, n, i = !1){
        const r = new USt, s = {
            ...gWy(),
            ...e
        };
        s.floatingRootContext = i2r(r, n, i), super(s, {
            popupRef: mWy.createRef(),
            onOpenChange: void 0,
            onOpenChangeComplete: void 0,
            triggerElements: r,
            closeDelayRef: {
                current: dna
            },
            inlineRectCoordsRef: {
                current: void 0
            }
        }, chh), lhh(this, "setOpen", (o, a)=>{
            const { inlineRectCoordsRef: l } = this.context;
            Bah(this, o, a, {
                onBeforeDispatch () {
                    const c = a.event;
                    o && a.reason === E4 && a.trigger && "clientX" in c && "clientY" in c && l.current?.element !== a.trigger && Iah(l, a.trigger, c.clientX, c.clientY);
                }
            });
        });
    }
    static useStore(e, n) {
        return e2r(e, (r, s)=>new h2b(n, r, s)).store;
    }
};

}
