import { e2r, i2r, oJo, t2r } from "./LYd.js";
import { B8t, z_n } from "./ReactStore.js";
import { $Qo, k_e } from "./constants_10.js";
import { $nt, vc } from "./createSelector.js";
import { U6S } from "./ipa.js";
import { FY } from "./popupStoreUtils.js";
import { USt, n7t } from "./popupTriggerMap.js";
import { E4, KHe, PRe, Tli, Zb, q8t } from "./reason-parts.js";
import { obn, qli } from "./store_3.js";
import { E } from "./tslib.es6.js";
import { M7, RRe } from "./useTimeout.js";
import * as B6S from "./react-runtime/react-dom/esm-index-production.js";
import * as D1n from "./react-runtime/react/esm-index-production.js";
var RZh, PZh, OSa, MZh, DZh;
export { DZh, MZh, OSa, PZh, RZh };
var __wakaru_j6S_initialized = false;
export function j6S() {
if (__wakaru_j6S_initialized) return;
__wakaru_j6S_initialized = true;
E(), M7(), k_e(), qli(), $nt(), z_n(), n7t(), Zb(), FY(), RZh = Object.defineProperty, PZh = (t, e, n)=>e in t ? RZh(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, OSa = (t, e, n)=>PZh(t, typeof e != "symbol" ? e + "" : e, n), MZh = {
    ...obn,
    disabled: vc((t)=>t.disabled),
    instantType: vc((t)=>t.instantType),
    openMethod: vc((t)=>t.openMethod),
    openChangeReason: vc((t)=>t.openChangeReason),
    modal: vc((t)=>t.modal),
    focusManagerModal: vc((t)=>t.focusManagerModal),
    stickIfOpen: vc((t)=>t.stickIfOpen),
    titleElementId: vc((t)=>t.titleElementId),
    descriptionElementId: vc((t)=>t.descriptionElementId),
    openOnHover: vc((t)=>t.openOnHover),
    closeDelay: vc((t)=>t.closeDelay),
    hasViewport: vc((t)=>t.hasViewport)
}, DZh = class w2b extends B8t {
    constructor(e, n, i = !1){
        const r = {
            ...U6S(),
            ...e
        }, s = new USt;
        r.open && e?.mounted === void 0 && (r.mounted = !0), r.floatingRootContext = i2r(s, n, i), super(r, {
            popupRef: D1n.createRef(),
            backdropRef: D1n.createRef(),
            internalBackdropRef: D1n.createRef(),
            onOpenChange: void 0,
            onOpenChangeComplete: void 0,
            triggerFocusTargetRef: D1n.createRef(),
            beforeContentFocusGuardRef: D1n.createRef(),
            stickIfOpenTimeout: new RRe,
            triggerElements: s
        }, MZh), OSa(this, "setOpen", (o, a)=>{
            const l = a.reason === E4, c = a.reason === PRe && a.event.detail === 0, u = !o && (a.reason === q8t || a.reason == null), d = oJo(a), h = this.select("activeTriggerId");
            if (!o && a.reason === Tli && a.trigger == null && h != null && (a.trigger = this.context.triggerElements.getById(h) ?? this.select("activeTriggerElement") ?? void 0), this.context.onOpenChange?.(o, a), a.isCanceled) return;
            this.state.floatingRootContext.dispatchOpenChange(o, a);
            const p = ()=>{
                const g = {
                    open: o,
                    openChangeReason: a.reason
                };
                t2r(g, o, a.trigger, d()), this.update(g);
            };
            l ? (this.set("stickIfOpen", !0), this.context.stickIfOpenTimeout.start($Qo, ()=>{
                this.set("stickIfOpen", !1);
            }), B6S.flushSync(p)) : p(), c || u ? this.set("instantType", c ? "click" : "dismiss") : a.reason === KHe ? this.set("instantType", "focus") : this.set("instantType", void 0);
        }), OSa(this, "disposeEffect", ()=>this.context.stickIfOpenTimeout.disposeEffect());
    }
    static useStore(e, n) {
        const { store: i, internalStore: r } = e2r(e, (s, o)=>new w2b(n, s, o));
        return D1n.useEffect(()=>r?.disposeEffect(), [
            r
        ]), i;
    }
};

}
