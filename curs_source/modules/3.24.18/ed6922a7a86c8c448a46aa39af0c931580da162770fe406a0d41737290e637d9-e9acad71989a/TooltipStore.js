import { MBt, xgt } from "./ReactStore.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { H5e, ic } from "./createSelector.js";
import { s$ } from "./popupStoreUtils.js";
import { Vgt, gYe } from "./popupTriggerMap.js";
import { Jrl, Qu, i1i, o1i, tOg } from "./qIc.js";
import { Dfe, g_ } from "./reason-parts.js";
import { xSn, zBt } from "./store_3.js";
import { x } from "./tslib.es6.js";
import * as eOg from "./react-runtime/react/esm-index-production.js";
var Cul, Tul, Eul, xul, Iul;
export { Cul, Eul, Iul, Tul, xul };
var __wakaru_nOg_initialized = false;
export function nOg() {
if (__wakaru_nOg_initialized) return;
__wakaru_nOg_initialized = true;
x(), Ty(), H5e(), xSn(), MBt(), Vgt(), s$(), g_(), Cul = Object.defineProperty, Tul = (e, t, n)=>t in e ? Cul(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, Eul = (e, t, n)=>Tul(e, typeof t != "symbol" ? t + "" : t, n), xul = {
    ...zBt,
    disabled: ic((e)=>e.disabled),
    instantType: ic((e)=>e.instantType),
    isInstantPhase: ic((e)=>e.isInstantPhase),
    trackCursorAxis: ic((e)=>e.trackCursorAxis),
    disableHoverablePopup: ic((e)=>e.disableHoverablePopup),
    lastOpenChangeReason: ic((e)=>e.openChangeReason),
    closeOnClick: ic((e)=>e.closeOnClick),
    closeDelay: ic((e)=>e.closeDelay),
    hasViewport: ic((e)=>e.hasViewport)
}, Iul = class Mwm extends xgt {
    constructor(t, n, i = !1){
        const r = new gYe, s = {
            ...tOg(),
            ...t
        };
        s.floatingRootContext = o1i(r, n, i), super(s, {
            popupRef: eOg.createRef(),
            onOpenChange: void 0,
            onOpenChangeComplete: void 0,
            triggerElements: r
        }, xul), Eul(this, "setOpen", (o, a)=>{
            Jrl(this, o, a, {
                extraState: {
                    openChangeReason: a.reason
                }
            });
        });
    }
    cancelPendingOpen(t) {
        this.state.floatingRootContext.dispatchOpenChange(!1, Qu(Dfe, t));
    }
    static useStore(t, n) {
        return i1i(t, (r, s)=>new Mwm(n, r, s)).store;
    }
};

}
