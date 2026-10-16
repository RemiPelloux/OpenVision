import { HQt } from "./Feature.mjs";
import { r8 } from "./index_18.mjs";
import { Cb0 } from "./observers.mjs";
import { Tb0, wb0 } from "./ofv.js";
import { E } from "./tslib.es6.js";
var ckv, ukv;
export { ckv, ukv };
var __wakaru_Eb0_initialized = false;
export function Eb0() {
if (__wakaru_Eb0_initialized) return;
__wakaru_Eb0_initialized = true;
E(), r8(), Cb0(), ckv = {
    some: 0,
    all: 1
}, ukv = class extends HQt {
    constructor(){
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
    }
    startObserver() {
        this.stopObserver?.();
        const { viewport: t = {} } = this.node.getProps(), { root: e, margin: n, amount: i = "some", once: r } = t, s = {
            root: e ? e.current : void 0,
            rootMargin: n,
            threshold: typeof i == "number" ? i : ckv[i]
        }, o = (a)=>{
            const { isIntersecting: l } = a;
            if (this.isInView === l || (this.isInView = l, r && !l && this.hasEnteredView)) return;
            l && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", l);
            const { onViewportEnter: c, onViewportLeave: u } = this.node.getProps(), d = l ? c : u;
            d && d(a);
        };
        this.stopObserver = wb0(this.node.current, s, o);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const { props: t, prevProps: e } = this.node;
        [
            "amount",
            "margin",
            "root"
        ].some(Tb0(t, e)) && this.startObserver();
    }
    unmount() {
        this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
    }
};

}
