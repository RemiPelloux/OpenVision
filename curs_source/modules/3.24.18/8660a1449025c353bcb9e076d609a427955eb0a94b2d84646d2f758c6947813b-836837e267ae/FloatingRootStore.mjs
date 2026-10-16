import { CRf } from "./BA.js";
import { mOl } from "./ReactStore.mjs";
import { Ldw } from "./Ycg.js";
import { TRf } from "./createEventEmitter.mjs";
import { Gx } from "./createSelector.mjs";
import { gOl } from "./index_3.mjs";
import { E } from "./tslib.es6.js";
import { fOl } from "./utils.mjs";
var H2f, S3i;
export { H2f, S3i };
var __wakaru_WSs_initialized = false;
export function WSs() {
if (__wakaru_WSs_initialized) return;
__wakaru_WSs_initialized = true;
E(), gOl(), TRf(), fOl(), H2f = {
    open: Gx((t)=>t.open),
    transitionStatus: Gx((t)=>t.transitionStatus),
    domReferenceElement: Gx((t)=>t.domReferenceElement),
    referenceElement: Gx((t)=>t.positionReference ?? t.referenceElement),
    floatingElement: Gx((t)=>t.floatingElement),
    floatingId: Gx((t)=>t.floatingId)
}, S3i = class extends mOl {
    constructor(t){
        const { syncOnly: e, nested: n, onOpenChange: i, triggerElements: r, ...s } = t;
        super({
            ...s,
            positionReference: s.referenceElement,
            domReferenceElement: s.referenceElement
        }, {
            onOpenChange: i,
            dataRef: {
                current: {}
            },
            events: CRf(),
            nested: n,
            triggerElements: r
        }, H2f), this.syncOnly = e;
    }
    syncOpenEvent = (t, e)=>{
        (!t || !this.state.open || e != null && Ldw(e)) && (this.context.dataRef.current.openEvent = t ? e : void 0);
    };
    dispatchOpenChange = (t, e)=>{
        this.syncOpenEvent(t, e.event);
        const n = {
            open: t,
            reason: e.reason,
            nativeEvent: e.event,
            nested: this.context.nested,
            triggerElement: e.trigger
        };
        this.context.events.emit("openchange", n);
    };
    setOpen = (t, e)=>{
        if (this.syncOnly) {
            this.context.onOpenChange?.(t, e);
            return;
        }
        this.dispatchOpenChange(t, e), this.context.onOpenChange?.(t, e);
    };
};

}
