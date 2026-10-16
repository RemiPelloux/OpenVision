import { NMn, wYt } from "./subscribable.js";
import { E } from "./tslib.es6.js";
import { GIt, ZMe } from "./utils_33.js";
var Qhf, $Pi;
export { $Pi, Qhf };
var __wakaru_Jhf_initialized = false;
export function Jhf() {
if (__wakaru_Jhf_initialized) return;
__wakaru_Jhf_initialized = true;
E(), NMn(), ZMe(), Qhf = class extends wYt {
    #e = !0;
    #t;
    #i;
    constructor(){
        super(), this.#i = (t)=>{
            if (!GIt && window.addEventListener) {
                const e = ()=>t(!0), n = ()=>t(!1);
                return window.addEventListener("online", e, !1), window.addEventListener("offline", n, !1), ()=>{
                    window.removeEventListener("online", e), window.removeEventListener("offline", n);
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
        this.#i = t, this.#t?.(), this.#t = t(this.setOnline.bind(this));
    }
    setOnline(t) {
        this.#e !== t && (this.#e = t, this.listeners.forEach((n)=>{
            n(t);
        }));
    }
    isOnline() {
        return this.#e;
    }
}, $Pi = new Qhf;

}
