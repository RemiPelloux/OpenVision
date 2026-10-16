import { BA, Umw, dmw, lmw, umw, wmw } from "./BA.js";
import { mOl } from "./ReactStore.mjs";
import { g3n, mRf } from "./constants_2.mjs";
import { Gx } from "./createSelector.mjs";
import { gOl } from "./index_3.mjs";
import { b3n } from "./index_4.mjs";
import { KSs } from "./popupTriggerMap.mjs";
import { rce } from "./reasons.mjs";
import { Y2f } from "./store_2.mjs";
import { E } from "./tslib.es6.js";
import { pKe, xct } from "./useTimeout.mjs";
import * as Bmw from "./react-runtime/react-dom/esm-index-production.js";
import * as S3n from "./react-runtime/react/esm-index-production.js";
var rPf, SOl;
export { SOl, rPf };
var __wakaru_sPf_initialized = false;
export function sPf() {
if (__wakaru_sPf_initialized) return;
__wakaru_sPf_initialized = true;
"use client";
E(), gOl(), xct(), rce(), b3n(), g3n(), rPf = {
    ...Y2f,
    disabled: Gx((t)=>t.disabled),
    instantType: Gx((t)=>t.instantType),
    openMethod: Gx((t)=>t.openMethod),
    openChangeReason: Gx((t)=>t.openChangeReason),
    modal: Gx((t)=>t.modal),
    focusManagerModal: Gx((t)=>t.focusManagerModal),
    stickIfOpen: Gx((t)=>t.stickIfOpen),
    titleElementId: Gx((t)=>t.titleElementId),
    descriptionElementId: Gx((t)=>t.descriptionElementId),
    openOnHover: Gx((t)=>t.openOnHover),
    closeDelay: Gx((t)=>t.closeDelay),
    hasViewport: Gx((t)=>t.hasViewport)
}, SOl = class _Mb extends mOl {
    constructor(e, n, i = !1){
        const r = {
            ...Umw(),
            ...e
        }, s = new KSs;
        r.open && e?.mounted === void 0 && (r.mounted = !0), r.floatingRootContext = wmw(s, n, i), super(r, {
            popupRef: S3n.createRef(),
            backdropRef: S3n.createRef(),
            internalBackdropRef: S3n.createRef(),
            onOpenChange: void 0,
            onOpenChangeComplete: void 0,
            triggerFocusTargetRef: S3n.createRef(),
            beforeContentFocusGuardRef: S3n.createRef(),
            stickIfOpenTimeout: new pKe,
            triggerElements: s
        }, rPf);
    }
    setOpen = (e, n)=>{
        const i = n.reason === BA.triggerHover, r = n.reason === BA.triggerPress && n.event.detail === 0, s = !e && (n.reason === BA.escapeKey || n.reason == null), o = dmw(n), a = this.select("activeTriggerId");
        if (!e && n.reason === BA.closePress && n.trigger == null && a != null && (n.trigger = this.context.triggerElements.getById(a) ?? this.select("activeTriggerElement") ?? void 0), this.context.onOpenChange?.(e, n), n.isCanceled) return;
        this.state.floatingRootContext.dispatchOpenChange(e, n);
        const l = ()=>{
            const c = {
                open: e,
                openChangeReason: n.reason
            };
            umw(c, e, n.trigger, o()), this.update(c);
        };
        i ? (this.set("stickIfOpen", !0), this.context.stickIfOpenTimeout.start(mRf, ()=>{
            this.set("stickIfOpen", !1);
        }), Bmw.flushSync(l)) : l(), r || s ? this.set("instantType", r ? "click" : "dismiss") : n.reason === BA.focusOut ? this.set("instantType", "focus") : this.set("instantType", void 0);
    };
    static useStore(e, n) {
        const { store: i, internalStore: r } = lmw(e, (s, o)=>new _Mb(n, s, o));
        return S3n.useEffect(()=>r?.disposeEffect(), [
            r
        ]), i;
    }
    disposeEffect = ()=>this.context.stickIfOpenTimeout.disposeEffect();
};

}
