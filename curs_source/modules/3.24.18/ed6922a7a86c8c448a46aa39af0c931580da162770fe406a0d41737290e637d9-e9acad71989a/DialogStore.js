import { MBt, xgt } from "./ReactStore.js";
import { H5e, ic } from "./createSelector.js";
import { AJf } from "./f0s.js";
import { s$ } from "./popupStoreUtils.js";
import { Vgt, gYe } from "./popupTriggerMap.js";
import { i1i, o1i, r1i } from "./qIc.js";
import { xSn, zBt } from "./store_3.js";
import { x } from "./tslib.es6.js";
import * as HOs from "./react-runtime/react/esm-index-production.js";
var Gcu, Vcu, jcu, qcu, WOs;
export { Gcu, Vcu, WOs, jcu, qcu };
var __wakaru_zcu_initialized = false;
export function zcu() {
if (__wakaru_zcu_initialized) return;
__wakaru_zcu_initialized = true;
x(), H5e(), xSn(), MBt(), Vgt(), s$(), Gcu = Object.defineProperty, Vcu = (e, t, n)=>t in e ? Gcu(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, jcu = (e, t, n)=>Vcu(e, typeof t != "symbol" ? t + "" : t, n), qcu = {
    ...zBt,
    modal: ic((e)=>e.modal),
    nested: ic((e)=>e.nested),
    nestedOpenDialogCount: ic((e)=>e.nestedOpenDialogCount),
    nestedOpenDrawerCount: ic((e)=>e.nestedOpenDrawerCount),
    disablePointerDismissal: ic((e)=>e.disablePointerDismissal),
    openMethod: ic((e)=>e.openMethod),
    descriptionElementId: ic((e)=>e.descriptionElementId),
    titleElementId: ic((e)=>e.titleElementId),
    viewportElement: ic((e)=>e.viewportElement),
    role: ic((e)=>e.role)
}, WOs = class qwm extends xgt {
    constructor(t, n, i = !1){
        const r = new gYe, s = AJf(t);
        s.floatingRootContext = o1i(r, n, i), super(s, {
            popupRef: HOs.createRef(),
            backdropRef: HOs.createRef(),
            internalBackdropRef: HOs.createRef(),
            outsidePressEnabledRef: {
                current: !0
            },
            triggerElements: r,
            onOpenChange: void 0,
            onOpenChangeComplete: void 0
        }, qcu), jcu(this, "setOpen", (o, a)=>{
            if (a.preventUnmountOnClose = ()=>{
                this.set("preventUnmountingOnClose", !0);
            }, !o && a.trigger == null && this.state.activeTriggerId != null && (a.trigger = this.state.activeTriggerElement ?? void 0), this.context.onOpenChange?.(o, a), a.isCanceled) return;
            this.state.floatingRootContext.dispatchOpenChange(o, a);
            const c = {
                open: o
            };
            r1i(c, o, a.trigger), this.update(c);
        });
    }
    static useStore(t, n) {
        return i1i(t, (r, s)=>new qwm(n, r, s), !0).store;
    }
};

}
