import { CYt, Ovs, upf } from "./Ycg.js";
import { hpf } from "./mutation.js";
import { L$, qIt } from "./notifyManager.js";
import { NMn, wYt } from "./subscribable.js";
import { E } from "./tslib.es6.js";
import { ZMe } from "./utils_33.js";
var ypf;
export { ypf };
var __wakaru_Eqk_initialized = false;
export function Eqk() {
if (__wakaru_Eqk_initialized) return;
__wakaru_Eqk_initialized = true;
E(), hpf(), qIt(), NMn(), ZMe(), ypf = class extends wYt {
    #e;
    #t = void 0;
    #i;
    #n;
    constructor(t, e){
        super(), this.#e = t, this.setOptions(e), this.bindMethods(), this.#r();
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
    }
    setOptions(t) {
        const e = this.options;
        this.options = this.#e.defaultMutationOptions(t), Ovs(this.options, e) || this.#e.getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: this.#i,
            observer: this
        }), e?.mutationKey && this.options.mutationKey && CYt(e.mutationKey) !== CYt(this.options.mutationKey) ? this.reset() : this.#i?.state.status === "pending" && this.#i.setOptions(this.options);
    }
    onUnsubscribe() {
        this.hasListeners() || this.#i?.removeObserver(this);
    }
    onMutationUpdate(t) {
        this.#r(), this.#s(t);
    }
    getCurrentResult() {
        return this.#t;
    }
    reset() {
        this.#i?.removeObserver(this), this.#i = void 0, this.#r(), this.#s();
    }
    mutate(t, e) {
        return this.#n = e, this.#i?.removeObserver(this), this.#i = this.#e.getMutationCache().build(this.#e, this.options), this.#i.addObserver(this), this.#i.execute(t);
    }
    #r() {
        const t = this.#i?.state ?? upf();
        this.#t = {
            ...t,
            isPending: t.status === "pending",
            isSuccess: t.status === "success",
            isError: t.status === "error",
            isIdle: t.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        };
    }
    #s(t) {
        L$.batch(()=>{
            if (this.#n && this.hasListeners()) {
                const e = this.#t.variables, n = this.#t.context;
                t?.type === "success" ? (this.#n.onSuccess?.(t.data, e, n), this.#n.onSettled?.(t.data, null, e, n)) : t?.type === "error" && (this.#n.onError?.(t.error, e, n), this.#n.onSettled?.(void 0, t.error, e, n));
            }
            this.listeners.forEach((e)=>{
                e(this.#t);
            });
        });
    }
};

}
