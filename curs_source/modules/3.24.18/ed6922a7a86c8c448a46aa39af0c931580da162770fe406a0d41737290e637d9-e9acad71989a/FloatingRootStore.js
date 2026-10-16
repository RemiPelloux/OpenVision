import { MBt, xgt } from "./ReactStore.js";
import { Xil } from "./createEventEmitter.js";
import { H5e, ic } from "./createSelector.js";
import { lj } from "./event_3.js";
import { ODg, Yil } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Grl, Vrl, Q0i, jrl, SSn;
export { Grl, Q0i, SSn, Vrl, jrl };
var __wakaru_J0i_initialized = false;
export function J0i() {
if (__wakaru_J0i_initialized) return;
__wakaru_J0i_initialized = true;
x(), Xil(), H5e(), MBt(), lj(), Grl = Object.defineProperty, Vrl = (e, t, n)=>t in e ? Grl(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, Q0i = (e, t, n)=>Vrl(e, typeof t != "symbol" ? t + "" : t, n), jrl = {
    open: ic((e)=>e.open),
    transitionStatus: ic((e)=>e.transitionStatus),
    domReferenceElement: ic((e)=>e.domReferenceElement),
    referenceElement: ic((e)=>e.positionReference ?? e.referenceElement),
    floatingElement: ic((e)=>e.floatingElement),
    floatingId: ic((e)=>e.floatingId)
}, SSn = class extends xgt {
    constructor(e){
        const { syncOnly: t, nested: n, onOpenChange: i, triggerElements: r, ...s } = e;
        super({
            ...s,
            positionReference: s.referenceElement,
            domReferenceElement: s.referenceElement
        }, {
            onOpenChange: i,
            dataRef: {
                current: {}
            },
            events: Yil(),
            nested: n,
            triggerElements: r
        }, jrl), Q0i(this, "syncOpenEvent", (o, a)=>{
            (!o || !this.state.open || a != null && ODg(a)) && (this.context.dataRef.current.openEvent = o ? a : void 0);
        }), Q0i(this, "dispatchOpenChange", (o, a)=>{
            this.syncOpenEvent(o, a.event);
            const c = {
                open: o,
                reason: a.reason,
                nativeEvent: a.event,
                nested: this.context.nested,
                triggerElement: a.trigger
            };
            this.context.events.emit("openchange", c);
        }), Q0i(this, "setOpen", (o, a)=>{
            if (this.syncOnly) {
                this.context.onOpenChange?.(o, a);
                return;
            }
            this.dispatchOpenChange(o, a), this.context.onOpenChange?.(o, a);
        }), this.syncOnly = t;
    }
};

}
