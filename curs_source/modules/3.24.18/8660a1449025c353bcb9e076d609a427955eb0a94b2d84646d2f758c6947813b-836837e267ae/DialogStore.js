import { e2r, i2r, t2r } from "./LYd.js";
import { B8t, z_n } from "./ReactStore.js";
import { $nt, vc } from "./createSelector.js";
import { P_1 } from "./ipa.js";
import { FY } from "./popupStoreUtils.js";
import { USt, n7t } from "./popupTriggerMap.js";
import { obn, qli } from "./store_3.js";
import { E } from "./tslib.es6.js";
import * as LRa from "./react-runtime/react/esm-index-production.js";
var Fwp, Bwp, Uwp, jwp, ORa;
export { Bwp, Fwp, ORa, Uwp, jwp };
var __wakaru_$wp_initialized = false;
export function $wp() {
if (__wakaru_$wp_initialized) return;
__wakaru_$wp_initialized = true;
E(), $nt(), qli(), z_n(), n7t(), FY(), Fwp = Object.defineProperty, Bwp = (t, e, n)=>e in t ? Fwp(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, Uwp = (t, e, n)=>Bwp(t, typeof e != "symbol" ? e + "" : e, n), jwp = {
    ...obn,
    modal: vc((t)=>t.modal),
    nested: vc((t)=>t.nested),
    nestedOpenDialogCount: vc((t)=>t.nestedOpenDialogCount),
    nestedOpenDrawerCount: vc((t)=>t.nestedOpenDrawerCount),
    disablePointerDismissal: vc((t)=>t.disablePointerDismissal),
    openMethod: vc((t)=>t.openMethod),
    descriptionElementId: vc((t)=>t.descriptionElementId),
    titleElementId: vc((t)=>t.titleElementId),
    viewportElement: vc((t)=>t.viewportElement),
    role: vc((t)=>t.role)
}, ORa = class x2b extends B8t {
    constructor(e, n, i = !1){
        const r = new USt, s = P_1(e);
        s.floatingRootContext = i2r(r, n, i), super(s, {
            popupRef: LRa.createRef(),
            backdropRef: LRa.createRef(),
            internalBackdropRef: LRa.createRef(),
            outsidePressEnabledRef: {
                current: !0
            },
            triggerElements: r,
            onOpenChange: void 0,
            onOpenChangeComplete: void 0
        }, jwp), Uwp(this, "setOpen", (o, a)=>{
            if (a.preventUnmountOnClose = ()=>{
                this.set("preventUnmountingOnClose", !0);
            }, !o && a.trigger == null && this.state.activeTriggerId != null && (a.trigger = this.state.activeTriggerElement ?? void 0), this.context.onOpenChange?.(o, a), a.isCanceled) return;
            this.state.floatingRootContext.dispatchOpenChange(o, a);
            const l = {
                open: o
            };
            t2r(l, o, a.trigger), this.update(l);
        });
    }
    static useStore(e, n) {
        return e2r(e, (r, s)=>new x2b(n, r, s), !0).store;
    }
};

}
