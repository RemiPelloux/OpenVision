import { MBt, xgt } from "./ReactStore.js";
import { Hds, Nre } from "./constants_10.js";
import { H5e, ic } from "./createSelector.js";
import { yAf } from "./f0s.js";
import { s$ } from "./popupStoreUtils.js";
import { Vgt, gYe } from "./popupTriggerMap.js";
import { i1i, o1i, ohs, r1i } from "./qIc.js";
import { BRe, Dfe, Pgt, g_, m2, uSn } from "./reason-parts.js";
import { xSn, zBt } from "./store_3.js";
import { x } from "./tslib.es6.js";
import { A3, Rfe } from "./useTimeout.js";
import * as J6t from "./react-runtime/react/esm-index-production.js";
import * as bAf from "./react-runtime/react-dom/esm-index-production.js";
var lVl, uVl, HAs, dVl, hVl;
export { HAs, dVl, hVl, lVl, uVl };
var __wakaru_SAf_initialized = false;
export function SAf() {
if (__wakaru_SAf_initialized) return;
__wakaru_SAf_initialized = true;
x(), A3(), Nre(), xSn(), H5e(), MBt(), Vgt(), g_(), s$(), lVl = Object.defineProperty, uVl = (e, t, n)=>t in e ? lVl(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, HAs = (e, t, n)=>uVl(e, typeof t != "symbol" ? t + "" : t, n), dVl = {
    ...zBt,
    disabled: ic((e)=>e.disabled),
    instantType: ic((e)=>e.instantType),
    openMethod: ic((e)=>e.openMethod),
    openChangeReason: ic((e)=>e.openChangeReason),
    modal: ic((e)=>e.modal),
    focusManagerModal: ic((e)=>e.focusManagerModal),
    stickIfOpen: ic((e)=>e.stickIfOpen),
    titleElementId: ic((e)=>e.titleElementId),
    descriptionElementId: ic((e)=>e.descriptionElementId),
    openOnHover: ic((e)=>e.openOnHover),
    closeDelay: ic((e)=>e.closeDelay),
    hasViewport: ic((e)=>e.hasViewport)
}, hVl = class Wwm extends xgt {
    constructor(t, n, i = !1){
        const r = {
            ...yAf(),
            ...t
        }, s = new gYe;
        r.open && t?.mounted === void 0 && (r.mounted = !0), r.floatingRootContext = o1i(s, n, i), super(r, {
            popupRef: J6t.createRef(),
            backdropRef: J6t.createRef(),
            internalBackdropRef: J6t.createRef(),
            onOpenChange: void 0,
            onOpenChangeComplete: void 0,
            triggerFocusTargetRef: J6t.createRef(),
            beforeContentFocusGuardRef: J6t.createRef(),
            stickIfOpenTimeout: new Rfe,
            triggerElements: s
        }, dVl), HAs(this, "setOpen", (o, a)=>{
            const c = a.reason === m2, l = a.reason === Dfe && a.event.detail === 0, u = !o && (a.reason === Pgt || a.reason == null), h = ohs(a), p = this.select("activeTriggerId");
            if (!o && a.reason === uSn && a.trigger == null && p != null && (a.trigger = this.context.triggerElements.getById(p) ?? this.select("activeTriggerElement") ?? void 0), this.context.onOpenChange?.(o, a), a.isCanceled) return;
            this.state.floatingRootContext.dispatchOpenChange(o, a);
            const g = ()=>{
                const f = {
                    open: o,
                    openChangeReason: a.reason
                };
                r1i(f, o, a.trigger, h()), this.update(f);
            };
            c ? (this.set("stickIfOpen", !0), this.context.stickIfOpenTimeout.start(Hds, ()=>{
                this.set("stickIfOpen", !1);
            }), bAf.flushSync(g)) : g(), l || u ? this.set("instantType", l ? "click" : "dismiss") : a.reason === BRe ? this.set("instantType", "focus") : this.set("instantType", void 0);
        }), HAs(this, "disposeEffect", ()=>this.context.stickIfOpenTimeout.disposeEffect());
    }
    static useStore(t, n) {
        const { store: i, internalStore: r } = i1i(t, (s, o)=>new Wwm(n, s, o));
        return J6t.useEffect(()=>r?.disposeEffect(), [
            r
        ]), i;
    }
};

}
