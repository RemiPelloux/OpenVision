import { Bah, e2r, i2r, tGy, zd } from "./LYd.js";
import { B8t, z_n } from "./ReactStore.js";
import { VS } from "./createBaseUIEventDetails.js";
import { $nt, vc } from "./createSelector.js";
import { FY } from "./popupStoreUtils.js";
import { USt, n7t } from "./popupTriggerMap.js";
import { PRe, Zb } from "./reason-parts.js";
import { obn, qli } from "./store_3.js";
import { E } from "./tslib.es6.js";
import * as eGy from "./react-runtime/react/esm-index-production.js";
var Ohh, Fhh, Bhh, Uhh, Ina;
export { Bhh, Fhh, Ina, Ohh, Uhh };
var __wakaru_jhh_initialized = false;
export function jhh() {
if (__wakaru_jhh_initialized) return;
__wakaru_jhh_initialized = true;
E(), VS(), $nt(), qli(), z_n(), n7t(), FY(), Zb(), Ohh = Object.defineProperty, Fhh = (t, e, n)=>e in t ? Ohh(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, Bhh = (t, e, n)=>Fhh(t, typeof e != "symbol" ? e + "" : e, n), Uhh = {
    ...obn,
    disabled: vc((t)=>t.disabled),
    instantType: vc((t)=>t.instantType),
    isInstantPhase: vc((t)=>t.isInstantPhase),
    trackCursorAxis: vc((t)=>t.trackCursorAxis),
    disableHoverablePopup: vc((t)=>t.disableHoverablePopup),
    lastOpenChangeReason: vc((t)=>t.openChangeReason),
    closeOnClick: vc((t)=>t.closeOnClick),
    closeDelay: vc((t)=>t.closeDelay),
    hasViewport: vc((t)=>t.hasViewport)
}, Ina = class p2b extends B8t {
    constructor(e, n, i = !1){
        const r = new USt, s = {
            ...tGy(),
            ...e
        };
        s.floatingRootContext = i2r(r, n, i), super(s, {
            popupRef: eGy.createRef(),
            onOpenChange: void 0,
            onOpenChangeComplete: void 0,
            triggerElements: r
        }, Uhh), Bhh(this, "setOpen", (o, a)=>{
            Bah(this, o, a, {
                extraState: {
                    openChangeReason: a.reason
                }
            });
        });
    }
    cancelPendingOpen(e) {
        this.state.floatingRootContext.dispatchOpenChange(!1, zd(PRe, e));
    }
    static useStore(e, n) {
        return e2r(e, (r, s)=>new p2b(n, r, s)).store;
    }
};

}
