import { H7y, Noh } from "./LYd.js";
import { B8t, z_n } from "./ReactStore.js";
import { Loh } from "./createEventEmitter.js";
import { $nt, vc } from "./createSelector.js";
import { Sne } from "./event_3.js";
import { E } from "./tslib.es6.js";
var xah, Aah, YRr, Rah, Uli;
export { Aah, Rah, Uli, YRr, xah };
var __wakaru_XRr_initialized = false;
export function XRr() {
if (__wakaru_XRr_initialized) return;
__wakaru_XRr_initialized = true;
E(), Loh(), $nt(), z_n(), Sne(), xah = Object.defineProperty, Aah = (t, e, n)=>e in t ? xah(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, YRr = (t, e, n)=>Aah(t, typeof e != "symbol" ? e + "" : e, n), Rah = {
    open: vc((t)=>t.open),
    transitionStatus: vc((t)=>t.transitionStatus),
    domReferenceElement: vc((t)=>t.domReferenceElement),
    referenceElement: vc((t)=>t.positionReference ?? t.referenceElement),
    floatingElement: vc((t)=>t.floatingElement),
    floatingId: vc((t)=>t.floatingId)
}, Uli = class extends B8t {
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
            events: Noh(),
            nested: n,
            triggerElements: r
        }, Rah), YRr(this, "syncOpenEvent", (o, a)=>{
            (!o || !this.state.open || a != null && H7y(a)) && (this.context.dataRef.current.openEvent = o ? a : void 0);
        }), YRr(this, "dispatchOpenChange", (o, a)=>{
            this.syncOpenEvent(o, a.event);
            const l = {
                open: o,
                reason: a.reason,
                nativeEvent: a.event,
                nested: this.context.nested,
                triggerElement: a.trigger
            };
            this.context.events.emit("openchange", l);
        }), YRr(this, "setOpen", (o, a)=>{
            if (this.syncOnly) {
                this.context.onOpenChange?.(o, a);
                return;
            }
            this.dispatchOpenChange(o, a), this.context.onOpenChange?.(o, a);
        }), this.syncOnly = e;
    }
};

}
