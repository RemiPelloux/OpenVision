import { Bxl, Cme, Cqk, Dxl, Ghf, Ixl, Ovs, Pxl, Uxl, WIt, XMe, fpf, opf, vpf } from "./Ycg.js";
import { Fvs, Mxl } from "./focusManager.js";
import { L$, qIt } from "./notifyManager.js";
import { lpf } from "./query.js";
import { NMn, wYt } from "./subscribable.js";
import { epf } from "./thenable.js";
import { E } from "./tslib.es6.js";
import { GIt, ZMe } from "./utils_33.js";
var jxl;
export { jxl };
var __wakaru__pf_initialized = false;
export function _pf() {
if (__wakaru__pf_initialized) return;
__wakaru__pf_initialized = true;
E(), Mxl(), qIt(), lpf(), NMn(), epf(), ZMe(), jxl = class extends wYt {
    constructor(t, e){
        super(), this.options = e, this.#e = t, this.#a = null, this.#o = Dxl(), this.options.experimental_prefetchInRender || this.#o.reject(new Error("experimental_prefetchInRender feature flag is not enabled")), this.bindMethods(), this.setOptions(e);
    }
    #e;
    #t = void 0;
    #i = void 0;
    #n = void 0;
    #r;
    #s;
    #o;
    #a;
    #c;
    #l;
    #h;
    #d;
    #p;
    #f;
    #m = new Set;
    bindMethods() {
        this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
        this.listeners.size === 1 && (this.#t.addObserver(this), fpf(this.#t, this.options) ? this.#u() : this.updateResult(), this.#_());
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy();
    }
    shouldFetchOnReconnect() {
        return Bxl(this.#t, this.options, this.options.refetchOnReconnect);
    }
    shouldFetchOnWindowFocus() {
        return Bxl(this.#t, this.options, this.options.refetchOnWindowFocus);
    }
    destroy() {
        this.listeners = new Set, this.#C(), this.#k(), this.#t.removeObserver(this);
    }
    setOptions(t) {
        const e = this.options, n = this.#t;
        if (this.options = this.#e.defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof XMe(this.options.enabled, this.#t) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        this.#y(), this.#t.setOptions(this.options), e._defaulted && !Ovs(this.options, e) && this.#e.getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: this.#t,
            observer: this
        });
        const i = this.hasListeners();
        i && vpf(this.#t, n, this.options, e) && this.#u(), this.updateResult(), i && (this.#t !== n || XMe(this.options.enabled, this.#t) !== XMe(e.enabled, this.#t) || WIt(this.options.staleTime, this.#t) !== WIt(e.staleTime, this.#t)) && this.#g();
        const r = this.#v();
        i && (this.#t !== n || XMe(this.options.enabled, this.#t) !== XMe(e.enabled, this.#t) || r !== this.#f) && this.#b(r);
    }
    getOptimisticResult(t) {
        const e = this.#e.getQueryCache().build(this.#e, t), n = this.createResult(e, t);
        return Cqk(this, n) && (this.#n = n, this.#s = this.options, this.#r = this.#t.state), n;
    }
    getCurrentResult() {
        return this.#n;
    }
    trackResult(t, e) {
        return new Proxy(t, {
            get: (n, i)=>(this.trackProp(i), e?.(i), Reflect.get(n, i))
        });
    }
    trackProp(t) {
        this.#m.add(t);
    }
    getCurrentQuery() {
        return this.#t;
    }
    refetch({ ...t } = {}) {
        return this.fetch({
            ...t
        });
    }
    fetchOptimistic(t) {
        const e = this.#e.defaultQueryOptions(t), n = this.#e.getQueryCache().build(this.#e, e);
        return n.fetch().then(()=>this.createResult(n, e));
    }
    fetch(t) {
        return this.#u({
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }).then(()=>(this.updateResult(), this.#n));
    }
    #u(t) {
        this.#y();
        let e = this.#t.fetch(this.options, t);
        return t?.throwOnError || (e = e.catch(Cme)), e;
    }
    #g() {
        this.#C();
        const t = WIt(this.options.staleTime, this.#t);
        if (GIt || this.#n.isStale || !Ixl(t)) return;
        const n = Ghf(this.#n.dataUpdatedAt, t) + 1;
        this.#d = setTimeout(()=>{
            this.#n.isStale || this.updateResult();
        }, n);
    }
    #v() {
        return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ?? !1;
    }
    #b(t) {
        this.#k(), this.#f = t, !(GIt || XMe(this.options.enabled, this.#t) === !1 || !Ixl(this.#f) || this.#f === 0) && (this.#p = setInterval(()=>{
            (this.options.refetchIntervalInBackground || Fvs.isFocused()) && this.#u();
        }, this.#f));
    }
    #_() {
        this.#g(), this.#b(this.#v());
    }
    #C() {
        this.#d && (clearTimeout(this.#d), this.#d = void 0);
    }
    #k() {
        this.#p && (clearInterval(this.#p), this.#p = void 0);
    }
    createResult(t, e) {
        const n = this.#t, i = this.options, r = this.#n, s = this.#r, o = this.#s, l = t !== n ? t.state : this.#i, { state: c } = t;
        let u = {
            ...c
        }, d = !1, h;
        if (e._optimisticResults) {
            const A = this.hasListeners(), P = !A && fpf(t, e), M = A && vpf(t, n, e, i);
            (P || M) && (u = {
                ...u,
                ...opf(c.data, t.options)
            }), e._optimisticResults === "isRestoring" && (u.fetchStatus = "idle");
        }
        let { error: p, errorUpdatedAt: g, status: f } = u;
        h = u.data;
        let _ = !1;
        if (e.placeholderData !== void 0 && h === void 0 && f === "pending") {
            let A;
            r?.isPlaceholderData && e.placeholderData === o?.placeholderData ? (A = r.data, _ = !0) : A = typeof e.placeholderData == "function" ? e.placeholderData(this.#h?.state.data, this.#h) : e.placeholderData, A !== void 0 && (f = "success", h = Pxl(r?.data, A, e), d = !0);
        }
        if (e.select && h !== void 0 && !_) if (r && h === s?.data && e.select === this.#c) h = this.#l;
        else try {
            this.#c = e.select, h = e.select(h), h = Pxl(r?.data, h, e), this.#l = h, this.#a = null;
        } catch (A) {
            this.#a = A;
        }
        this.#a && (p = this.#a, h = this.#l, g = Date.now(), f = "error");
        const b = u.fetchStatus === "fetching", y = f === "pending", S = f === "error", k = y && b, C = h !== void 0, I = {
            status: f,
            fetchStatus: u.fetchStatus,
            isPending: y,
            isSuccess: f === "success",
            isError: S,
            isInitialLoading: k,
            isLoading: k,
            data: h,
            dataUpdatedAt: u.dataUpdatedAt,
            error: p,
            errorUpdatedAt: g,
            failureCount: u.fetchFailureCount,
            failureReason: u.fetchFailureReason,
            errorUpdateCount: u.errorUpdateCount,
            isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
            isFetchedAfterMount: u.dataUpdateCount > l.dataUpdateCount || u.errorUpdateCount > l.errorUpdateCount,
            isFetching: b,
            isRefetching: b && !y,
            isLoadingError: S && !C,
            isPaused: u.fetchStatus === "paused",
            isPlaceholderData: d,
            isRefetchError: S && C,
            isStale: Uxl(t, e),
            refetch: this.refetch,
            promise: this.#o,
            isEnabled: XMe(e.enabled, t) !== !1
        };
        if (this.options.experimental_prefetchInRender) {
            const A = (O)=>{
                I.status === "error" ? O.reject(I.error) : I.data !== void 0 && O.resolve(I.data);
            }, P = ()=>{
                const O = this.#o = I.promise = Dxl();
                A(O);
            }, M = this.#o;
            switch(M.status){
                case "pending":
                    t.queryHash === n.queryHash && A(M);
                    break;
                case "fulfilled":
                    (I.status === "error" || I.data !== M.value) && P();
                    break;
                case "rejected":
                    (I.status !== "error" || I.error !== M.reason) && P();
                    break;
            }
        }
        return I;
    }
    updateResult() {
        const t = this.#n, e = this.createResult(this.#t, this.options);
        if (this.#r = this.#t.state, this.#s = this.options, this.#r.data !== void 0 && (this.#h = this.#t), Ovs(e, t)) return;
        this.#n = e;
        const n = ()=>{
            if (!t) return !0;
            const { notifyOnChangeProps: i } = this.options, r = typeof i == "function" ? i() : i;
            if (r === "all" || !r && !this.#m.size) return !0;
            const s = new Set(r ?? this.#m);
            return this.options.throwOnError && s.add("error"), Object.keys(this.#n).some((o)=>{
                const a = o;
                return this.#n[a] !== t[a] && s.has(a);
            });
        };
        this.#E({
            listeners: n()
        });
    }
    #y() {
        const t = this.#e.getQueryCache().build(this.#e, this.options);
        if (t === this.#t) return;
        const e = this.#t;
        this.#t = t, this.#i = t.state, this.hasListeners() && (e?.removeObserver(this), t.addObserver(this));
    }
    onQueryUpdate() {
        this.updateResult(), this.hasListeners() && this.#_();
    }
    #E(t) {
        L$.batch(()=>{
            t.listeners && this.listeners.forEach((e)=>{
                e(this.#n);
            }), this.#e.getQueryCache().notify({
                query: this.#t,
                type: "observerResultsUpdated"
            });
        });
    }
};

}
