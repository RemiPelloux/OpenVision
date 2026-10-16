import { NMn, wYt } from "./subscribable.js";
import { E } from "./tslib.es6.js";
import { GIt, ZMe } from "./utils_33.js";
var Zhf, Fvs;
export { Fvs, Zhf };
var __wakaru_Mxl_initialized = false;
export function Mxl() {
if (__wakaru_Mxl_initialized) return;
__wakaru_Mxl_initialized = true;
E(), NMn(), ZMe(), Zhf = class extends wYt {
    #e;
    #t;
    #i;
    constructor(){
        super(), this.#i = (t)=>{
            if (!GIt && window.addEventListener) {
                const e = ()=>t();
                return window.addEventListener("visibilitychange", e, !1), ()=>{
                    window.removeEventListener("visibilitychange", e);
                };
            }
        };
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#i);
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(), this.#t = void 0);
    }
    setEventListener(t) {
        this.#i = t, this.#t?.(), this.#t = t((e)=>{
            typeof e == "boolean" ? this.setFocused(e) : this.onFocus();
        });
    }
    setFocused(t) {
        this.#e !== t && (this.#e = t, this.onFocus());
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((e)=>{
            e(t);
        });
    }
    isFocused() {
        return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden";
    }
}, Fvs = new Zhf;

}
