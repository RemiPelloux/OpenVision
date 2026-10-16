import { npf, upf } from "./Ycg.js";
import { L$, qIt } from "./notifyManager.js";
import { Oxl, spf } from "./removable.js";
import { ipf } from "./retryer.js";
import { E } from "./tslib.es6.js";
var dpf;
export { dpf };
var __wakaru_hpf_initialized = false;
export function hpf() {
if (__wakaru_hpf_initialized) return;
__wakaru_hpf_initialized = true;
E(), qIt(), spf(), ipf(), dpf = class extends Oxl {
    #e;
    #t;
    #i;
    constructor(t){
        super(), this.mutationId = t.mutationId, this.#t = t.mutationCache, this.#e = [], this.state = t.state || upf(), this.setOptions(t.options), this.scheduleGc();
    }
    setOptions(t) {
        this.options = t, this.updateGcTime(this.options.gcTime);
    }
    get meta() {
        return this.options.meta;
    }
    addObserver(t) {
        this.#e.includes(t) || (this.#e.push(t), this.clearGcTimeout(), this.#t.notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }));
    }
    removeObserver(t) {
        this.#e = this.#e.filter((e)=>e !== t), this.scheduleGc(), this.#t.notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        });
    }
    optionalRemove() {
        this.#e.length || (this.state.status === "pending" ? this.scheduleGc() : this.#t.remove(this));
    }
    continue() {
        return this.#i?.continue() ?? this.execute(this.state.variables);
    }
    async execute(t) {
        const e = ()=>{
            this.#n({
                type: "continue"
            });
        };
        this.#i = npf({
            fn: ()=>this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (r, s)=>{
                this.#n({
                    type: "failed",
                    failureCount: r,
                    error: s
                });
            },
            onPause: ()=>{
                this.#n({
                    type: "pause"
                });
            },
            onContinue: e,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: ()=>this.#t.canRun(this)
        });
        const n = this.state.status === "pending", i = !this.#i.canStart();
        try {
            if (n) e();
            else {
                this.#n({
                    type: "pending",
                    variables: t,
                    isPaused: i
                }), await this.#t.config.onMutate?.(t, this);
                const s = await this.options.onMutate?.(t);
                s !== this.state.context && this.#n({
                    type: "pending",
                    context: s,
                    variables: t,
                    isPaused: i
                });
            }
            const r = await this.#i.start();
            return await this.#t.config.onSuccess?.(r, t, this.state.context, this), await this.options.onSuccess?.(r, t, this.state.context), await this.#t.config.onSettled?.(r, null, this.state.variables, this.state.context, this), await this.options.onSettled?.(r, null, t, this.state.context), this.#n({
                type: "success",
                data: r
            }), r;
        } catch (r) {
            try {
                throw await this.#t.config.onError?.(r, t, this.state.context, this), await this.options.onError?.(r, t, this.state.context), await this.#t.config.onSettled?.(void 0, r, this.state.variables, this.state.context, this), await this.options.onSettled?.(void 0, r, t, this.state.context), r;
            } finally{
                this.#n({
                    type: "error",
                    error: r
                });
            }
        } finally{
            this.#t.runNext(this);
        }
    }
    #n(t) {
        const e = (n)=>{
            switch(t.type){
                case "failed":
                    return {
                        ...n,
                        failureCount: t.failureCount,
                        failureReason: t.error
                    };
                case "pause":
                    return {
                        ...n,
                        isPaused: !0
                    };
                case "continue":
                    return {
                        ...n,
                        isPaused: !1
                    };
                case "pending":
                    return {
                        ...n,
                        context: t.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: t.isPaused,
                        status: "pending",
                        variables: t.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return {
                        ...n,
                        data: t.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return {
                        ...n,
                        data: void 0,
                        error: t.error,
                        failureCount: n.failureCount + 1,
                        failureReason: t.error,
                        isPaused: !1,
                        status: "error"
                    };
            }
        };
        this.state = e(this.state), L$.batch(()=>{
            this.#e.forEach((n)=>{
                n.onMutationUpdate(t);
            }), this.#t.notify({
                mutation: this,
                type: "updated",
                action: t
            });
        });
    }
};

}
