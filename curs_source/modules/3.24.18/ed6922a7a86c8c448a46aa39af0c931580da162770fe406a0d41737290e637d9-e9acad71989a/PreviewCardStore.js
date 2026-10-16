import { MBt, xgt } from "./ReactStore.js";
import { Wll, egs } from "./constants_12.js";
import { H5e, ic } from "./createSelector.js";
import { shs } from "./inlineRect.js";
import { s$ } from "./popupStoreUtils.js";
import { Vgt, gYe } from "./popupTriggerMap.js";
import { Jrl, Wrl, g2g, i1i, o1i } from "./qIc.js";
import { g_, m2 } from "./reason-parts.js";
import { xSn, zBt } from "./store_3.js";
import { x } from "./tslib.es6.js";
import * as m2g from "./react-runtime/react/esm-index-production.js";
var Gll, Vll, jll, qll, tgs;
export { Gll, Vll, jll, qll, tgs };
var __wakaru_zll_initialized = false;
export function zll() {
if (__wakaru_zll_initialized) return;
__wakaru_zll_initialized = true;
x(), Wll(), H5e(), xSn(), MBt(), Vgt(), s$(), g_(), shs(), Gll = Object.defineProperty, Vll = (e, t, n)=>t in e ? Gll(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, jll = (e, t, n)=>Vll(e, typeof t != "symbol" ? t + "" : t, n), qll = {
    ...zBt,
    instantType: ic((e)=>e.instantType),
    hasViewport: ic((e)=>e.hasViewport)
}, tgs = class Dwm extends xgt {
    constructor(t, n, i = !1){
        const r = new gYe, s = {
            ...g2g(),
            ...t
        };
        s.floatingRootContext = o1i(r, n, i), super(s, {
            popupRef: m2g.createRef(),
            onOpenChange: void 0,
            onOpenChangeComplete: void 0,
            triggerElements: r,
            closeDelayRef: {
                current: egs
            },
            inlineRectCoordsRef: {
                current: void 0
            }
        }, qll), jll(this, "setOpen", (o, a)=>{
            const { inlineRectCoordsRef: c } = this.context;
            Jrl(this, o, a, {
                onBeforeDispatch () {
                    const l = a.event;
                    o && a.reason === m2 && a.trigger && "clientX" in l && "clientY" in l && c.current?.element !== a.trigger && Wrl(c, a.trigger, l.clientX, l.clientY);
                }
            });
        });
    }
    static useStore(t, n) {
        return i1i(t, (r, s)=>new Dwm(n, r, s)).store;
    }
};

}
