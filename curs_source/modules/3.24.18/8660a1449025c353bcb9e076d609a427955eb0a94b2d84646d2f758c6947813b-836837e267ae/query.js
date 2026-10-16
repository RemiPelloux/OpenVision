import { Cme, Ghf, Nxl, Pxl, WIt, XMe, Yhf, npf, opf, vqk } from "./Ycg.js";
import { L$, qIt } from "./notifyManager.js";
import { Oxl, spf } from "./removable.js";
import { ipf } from "./retryer.js";
import { E } from "./tslib.es6.js";
import { LMn, ZMe } from "./utils_33.js";
var apf;
export { apf };
var __wakaru_lpf_initialized = false;
export function lpf() {
if (__wakaru_lpf_initialized) return;
__wakaru_lpf_initialized = true;
E(), ZMe(), qIt(), ipf(), spf(), apf = class extends Oxl {
    #e;
    #t;
    #i;
    #n;
    #r;
    #s;
    #o;
    constructor(t){
        super(), this.#o = !1, this.#s = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.#n = t.client, this.#i = this.#n.getQueryCache(), this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.#e = vqk(this.options), this.state = t.state ?? this.#e, this.scheduleGc();
    }
    get meta() {
        return this.options.meta;
    }
    get promise() {
        return this.#r?.promise;
    }
    setOptions(t) {
        this.options = {
            ...this.#s,
            ...t
        }, this.updateGcTime(this.options.gcTime);
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.#i.remove(this);
    }
    setData(t, e) {
        const n = Pxl(this.state.data, t, this.options);
        return this.#a({
            data: n,
            type: "success",
            dataUpdatedAt: e?.updatedAt,
            manual: e?.manual
        }), n;
    }
    setState(t, e) {
        this.#a({
            type: "setState",
            state: t,
            setStateOptions: e
        });
    }
    cancel(t) {
        const e = this.#r?.promise;
        return this.#r?.cancel(t), e ? e.then(Cme).catch(Cme) : Promise.resolve();
    }
    destroy() {
        super.destroy(), this.cancel({
            silent: !0
        });
    }
    reset() {
        this.destroy(), this.setState(this.#e);
    }
    isActive() {
        return this.observers.some((t)=>XMe(t.options.enabled, this) !== !1);
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === LMn || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some((t)=>WIt(t.options.staleTime, this) === "static") : !1;
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some((t)=>t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(t = 0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !Ghf(this.state.dataUpdatedAt, t);
    }
    onFocus() {
        this.observers.find((e)=>e.shouldFetchOnWindowFocus())?.refetch({
            cancelRefetch: !1
        }), this.#r?.continue();
    }
    onOnline() {
        this.observers.find((e)=>e.shouldFetchOnReconnect())?.refetch({
            cancelRefetch: !1
        }), this.#r?.continue();
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.#i.notify({
            type: "observerAdded",
            query: this,
            observer: t
        }));
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter((e)=>e !== t), this.observers.length || (this.#r && (this.#o ? this.#r.cancel({
            revert: !0
        }) : this.#r.cancelRetry()), this.scheduleGc()), this.#i.notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }));
    }
    getObserversCount() {
        return this.observers.length;
    }
    invalidate() {
        this.state.isInvalidated || this.#a({
            type: "invalidate"
        });
    }
    fetch(t, e) {
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && e?.cancelRefetch) this.cancel({
                silent: !0
            });
            else if (this.#r) return this.#r.continueRetry(), this.#r.promise;
        }
        if (t && this.setOptions(t), !this.options.queryFn) {
            const l = this.observers.find((c)=>c.options.queryFn);
            l && this.setOptions(l.options);
        }
        const n = new AbortController, i = (l)=>{
            Object.defineProperty(l, "signal", {
                enumerable: !0,
                get: ()=>(this.#o = !0, n.signal)
            });
        }, r = ()=>{
            const l = Yhf(this.options, e), u = (()=>{
                const d = {
                    client: this.#n,
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return i(d), d;
            })();
            return this.#o = !1, this.options.persister ? this.options.persister(l, u, this) : l(u);
        }, o = (()=>{
            const l = {
                fetchOptions: e,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#n,
                state: this.state,
                fetchFn: r
            };
            return i(l), l;
        })();
        this.options.behavior?.onFetch(o, this), this.#t = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== o.fetchOptions?.meta) && this.#a({
            type: "fetch",
            meta: o.fetchOptions?.meta
        });
        const a = (l)=>{
            Nxl(l) && l.silent || this.#a({
                type: "error",
                error: l
            }), Nxl(l) || (this.#i.config.onError?.(l, this), this.#i.config.onSettled?.(this.state.data, l, this)), this.scheduleGc();
        };
        return this.#r = npf({
            initialPromise: e?.initialPromise,
            fn: o.fetchFn,
            abort: n.abort.bind(n),
            onSuccess: (l)=>{
                if (l === void 0) {
                    process.env.NODE_ENV !== "production" && console.error(`Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`), a(new Error(`${this.queryHash} data is undefined`));
                    return;
                }
                try {
                    this.setData(l);
                } catch (c) {
                    a(c);
                    return;
                }
                this.#i.config.onSuccess?.(l, this), this.#i.config.onSettled?.(l, this.state.error, this), this.scheduleGc();
            },
            onError: a,
            onFail: (l, c)=>{
                this.#a({
                    type: "failed",
                    failureCount: l,
                    error: c
                });
            },
            onPause: ()=>{
                this.#a({
                    type: "pause"
                });
            },
            onContinue: ()=>{
                this.#a({
                    type: "continue"
                });
            },
            retry: o.options.retry,
            retryDelay: o.options.retryDelay,
            networkMode: o.options.networkMode,
            canRun: ()=>!0
        }), this.#r.start();
    }
    #a(t) {
        const e = (n)=>{
            switch(t.type){
                case "failed":
                    return {
                        ...n,
                        fetchFailureCount: t.failureCount,
                        fetchFailureReason: t.error
                    };
                case "pause":
                    return {
                        ...n,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return {
                        ...n,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return {
                        ...n,
                        ...opf(n.data, this.options),
                        fetchMeta: t.meta ?? null
                    };
                case "success":
                    return this.#t = void 0, {
                        ...n,
                        data: t.data,
                        dataUpdateCount: n.dataUpdateCount + 1,
                        dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success",
                        ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    const i = t.error;
                    return Nxl(i) && i.revert && this.#t ? {
                        ...this.#t,
                        fetchStatus: "idle"
                    } : {
                        ...n,
                        error: i,
                        errorUpdateCount: n.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: n.fetchFailureCount + 1,
                        fetchFailureReason: i,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return {
                        ...n,
                        isInvalidated: !0
                    };
                case "setState":
                    return {
                        ...n,
                        ...t.state
                    };
            }
        };
        this.state = e(this.state), L$.batch(()=>{
            this.observers.forEach((n)=>{
                n.onQueryUpdate();
            }), this.#i.notify({
                query: this,
                type: "updated",
                action: t
            });
        });
    }
};

}
