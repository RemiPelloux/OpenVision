import { qQo } from "./FloatingTreeStore.js";
import { CW } from "./LYd.js";
import { B8t, z_n } from "./ReactStore.js";
import { $nt, vc } from "./createSelector.js";
import { vA } from "./empty.js";
import { iSS } from "./ipa.js";
import { USt, n7t } from "./popupTriggerMap.js";
import { obn, qli } from "./store_3.js";
import { E } from "./tslib.es6.js";
import { jQ } from "./useRefWithInit.js";
import * as MOr from "./react-runtime/react/esm-index-production.js";
var p6h, m6h, g6h, f6h, nma;
export { f6h, g6h, m6h, nma, p6h };
var __wakaru_v6h_initialized = false;
export function v6h() {
if (__wakaru_v6h_initialized) return;
__wakaru_v6h_initialized = true;
E(), vA(), jQ(), qQo(), $nt(), qli(), z_n(), n7t(), p6h = Object.defineProperty, m6h = (t, e, n)=>e in t ? p6h(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, g6h = (t, e, n)=>m6h(t, typeof e != "symbol" ? e + "" : e, n), f6h = {
    ...obn,
    disabled: vc((t)=>t.parent.type === "menubar" && t.parent.context.disabled || t.disabled),
    modal: vc((t)=>(t.parent.type === void 0 || t.parent.type === "context-menu") && (t.modal ?? !0)),
    openMethod: vc((t)=>t.openMethod),
    allowMouseEnter: vc((t)=>t.allowMouseEnter),
    highlightItemOnHover: vc((t)=>t.highlightItemOnHover),
    stickIfOpen: vc((t)=>t.stickIfOpen),
    parent: vc((t)=>t.parent),
    rootId: vc((t)=>t.parent.type === "menu" ? t.parent.store.select("rootId") : t.parent.type !== void 0 ? t.parent.context.rootId : t.rootId),
    activeIndex: vc((t)=>t.activeIndex),
    isActive: vc((t, e)=>t.activeIndex === e),
    hoverEnabled: vc((t)=>t.hoverEnabled),
    instantType: vc((t)=>t.instantType),
    lastOpenChangeReason: vc((t)=>t.openChangeReason),
    floatingTreeRoot: vc((t)=>t.parent.type === "menu" ? t.parent.store.select("floatingTreeRoot") : t.floatingTreeRoot),
    floatingNodeId: vc((t)=>t.floatingNodeId),
    floatingParentNodeId: vc((t)=>t.floatingParentNodeId),
    itemProps: vc((t)=>t.itemProps),
    closeDelay: vc((t)=>t.closeDelay),
    hasViewport: vc((t)=>t.hasViewport),
    keyboardEventRelay: vc((t)=>{
        if (t.keyboardEventRelay) return t.keyboardEventRelay;
        if (t.parent.type === "menu") return t.parent.store.select("keyboardEventRelay");
    })
}, nma = class k2b extends B8t {
    constructor(e){
        super({
            ...iSS(),
            ...e
        }, {
            positionerRef: MOr.createRef(),
            popupRef: MOr.createRef(),
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
            triggerFocusTargetRef: MOr.createRef(),
            beforeContentFocusGuardRef: MOr.createRef(),
            onOpenChangeComplete: void 0,
            triggerElements: new USt
        }, f6h), g6h(this, "unsubscribeParentListener", null), this.unsubscribeParentListener = this.observe("parent", (n)=>{
            if (this.unsubscribeParentListener?.(), n.type === "menu") {
                let i = n.store.select("rootId"), r = n.store.select("floatingTreeRoot"), s = n.store.select("keyboardEventRelay");
                this.unsubscribeParentListener = n.store.subscribe(()=>{
                    const o = n.store.select("rootId"), a = n.store.select("floatingTreeRoot"), l = n.store.select("keyboardEventRelay");
                    i === o && r === a && s === l || (i = o, r = a, s = l, this.notifyAll());
                }), this.context.allowMouseUpTriggerRef = n.store.context.allowMouseUpTriggerRef;
                return;
            }
            n.type !== void 0 && (this.context.allowMouseUpTriggerRef = n.context.allowMouseUpTriggerRef), this.unsubscribeParentListener = null;
        });
    }
    setOpen(e, n) {
        this.state.floatingRootContext.context.events.emit("setOpen", {
            open: e,
            eventDetails: n
        });
    }
    static useStore(e, n) {
        const i = CW(()=>new k2b(n)).current;
        return e ?? i;
    }
};

}
