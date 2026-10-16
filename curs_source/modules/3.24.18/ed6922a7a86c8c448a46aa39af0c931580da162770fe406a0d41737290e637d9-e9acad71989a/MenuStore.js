import { jds } from "./FloatingTreeStore.js";
import { MBt, xgt } from "./ReactStore.js";
import { H5e, ic } from "./createSelector.js";
import { LE } from "./empty.js";
import { yaf } from "./f0s.js";
import { Vgt, gYe } from "./popupTriggerMap.js";
import { l6 } from "./qIc.js";
import { xSn, zBt } from "./store_3.js";
import { x } from "./tslib.es6.js";
import { xW } from "./useRefWithInit.js";
import * as uDi from "./react-runtime/react/esm-index-production.js";
var OFl, FFl, BFl, UFl, u1s;
export { BFl, FFl, OFl, UFl, u1s };
var __wakaru_$Fl_initialized = false;
export function $Fl() {
if (__wakaru_$Fl_initialized) return;
__wakaru_$Fl_initialized = true;
x(), LE(), xW(), jds(), H5e(), xSn(), MBt(), Vgt(), OFl = Object.defineProperty, FFl = (e, t, n)=>t in e ? OFl(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, BFl = (e, t, n)=>FFl(e, typeof t != "symbol" ? t + "" : t, n), UFl = {
    ...zBt,
    disabled: ic((e)=>e.parent.type === "menubar" && e.parent.context.disabled || e.disabled),
    modal: ic((e)=>(e.parent.type === void 0 || e.parent.type === "context-menu") && (e.modal ?? !0)),
    openMethod: ic((e)=>e.openMethod),
    allowMouseEnter: ic((e)=>e.allowMouseEnter),
    highlightItemOnHover: ic((e)=>e.highlightItemOnHover),
    stickIfOpen: ic((e)=>e.stickIfOpen),
    parent: ic((e)=>e.parent),
    rootId: ic((e)=>e.parent.type === "menu" ? e.parent.store.select("rootId") : e.parent.type !== void 0 ? e.parent.context.rootId : e.rootId),
    activeIndex: ic((e)=>e.activeIndex),
    isActive: ic((e, t)=>e.activeIndex === t),
    hoverEnabled: ic((e)=>e.hoverEnabled),
    instantType: ic((e)=>e.instantType),
    lastOpenChangeReason: ic((e)=>e.openChangeReason),
    floatingTreeRoot: ic((e)=>e.parent.type === "menu" ? e.parent.store.select("floatingTreeRoot") : e.floatingTreeRoot),
    floatingNodeId: ic((e)=>e.floatingNodeId),
    floatingParentNodeId: ic((e)=>e.floatingParentNodeId),
    itemProps: ic((e)=>e.itemProps),
    closeDelay: ic((e)=>e.closeDelay),
    hasViewport: ic((e)=>e.hasViewport),
    keyboardEventRelay: ic((e)=>{
        if (e.keyboardEventRelay) return e.keyboardEventRelay;
        if (e.parent.type === "menu") return e.parent.store.select("keyboardEventRelay");
    })
}, u1s = class Hwm extends xgt {
    constructor(t){
        super({
            ...yaf(),
            ...t
        }, {
            positionerRef: uDi.createRef(),
            popupRef: uDi.createRef(),
            typingRef: {
                current: !1
            },
            itemDomElements: {
                current: []
            },
            itemLabels: {
                current: []
            },
            allowMouseUpTriggerRef: {
                current: !1
            },
            triggerFocusTargetRef: uDi.createRef(),
            beforeContentFocusGuardRef: uDi.createRef(),
            onOpenChangeComplete: void 0,
            triggerElements: new gYe
        }, UFl), BFl(this, "unsubscribeParentListener", null), this.unsubscribeParentListener = this.observe("parent", (n)=>{
            if (this.unsubscribeParentListener?.(), n.type === "menu") {
                let i = n.store.select("rootId"), r = n.store.select("floatingTreeRoot"), s = n.store.select("keyboardEventRelay");
                this.unsubscribeParentListener = n.store.subscribe(()=>{
                    const o = n.store.select("rootId"), a = n.store.select("floatingTreeRoot"), c = n.store.select("keyboardEventRelay");
                    i === o && r === a && s === c || (i = o, r = a, s = c, this.notifyAll());
                }), this.context.allowMouseUpTriggerRef = n.store.context.allowMouseUpTriggerRef;
                return;
            }
            n.type !== void 0 && (this.context.allowMouseUpTriggerRef = n.context.allowMouseUpTriggerRef), this.unsubscribeParentListener = null;
        });
    }
    setOpen(t, n) {
        this.state.floatingRootContext.context.events.emit("setOpen", {
            open: t,
            eventDetails: n
        });
    }
    static useStore(t, n) {
        const i = l6(()=>new Hwm(n)).current;
        return t ?? i;
    }
};

}
