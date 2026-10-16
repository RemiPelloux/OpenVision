import { CYt, Cme, Uvs, WIt, dqk, jPi, xxl } from "./Ycg.js";
import { Fvs, Mxl } from "./focusManager.js";
import { gpf } from "./infiniteQueryBehavior.js";
import { bqk, ppf } from "./mutationCache.js";
import { L$, qIt } from "./notifyManager.js";
import { $Pi, Jhf } from "./onlineManager.js";
import { _qk, cpf } from "./queryCache.js";
import { E } from "./tslib.es6.js";
import { LMn, ZMe } from "./utils_33.js";
var Fie;
export { Fie };
var __wakaru_kqk_initialized = false;
export function kqk() {
if (__wakaru_kqk_initialized) return;
__wakaru_kqk_initialized = true;
E(), ZMe(), _qk(), bqk(), Mxl(), Jhf(), qIt(), gpf(), Fie = class {
    #e;
    #t;
    #i;
    #n;
    #r;
    #s;
    #o;
    #a;
    constructor(t = {}){
        this.#e = t.queryCache || new cpf, this.#t = t.mutationCache || new ppf, this.#i = t.defaultOptions || {}, this.#n = new Map, this.#r = new Map, this.#s = 0;
    }
    mount() {
        this.#s++, this.#s === 1 && (this.#o = Fvs.subscribe(async (t)=>{
            t && (await this.resumePausedMutations(), this.#e.onFocus());
        }), this.#a = $Pi.subscribe(async (t)=>{
            t && (await this.resumePausedMutations(), this.#e.onOnline());
        }));
    }
    unmount() {
        this.#s--, this.#s === 0 && (this.#o?.(), this.#o = void 0, this.#a?.(), this.#a = void 0);
    }
    isFetching(t) {
        return this.#e.findAll({
            ...t,
            fetchStatus: "fetching"
        }).length;
    }
    isMutating(t) {
        return this.#t.findAll({
            ...t,
            status: "pending"
        }).length;
    }
    getQueryData(t) {
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return this.#e.get(e.queryHash)?.state.data;
    }
    ensureQueryData(t) {
        const e = this.defaultQueryOptions(t), n = this.#e.build(this, e), i = n.state.data;
        return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && n.isStaleByTime(WIt(e.staleTime, n)) && this.prefetchQuery(e), Promise.resolve(i));
    }
    getQueriesData(t) {
        return this.#e.findAll(t).map(({ queryKey: e, state: n })=>{
            const i = n.data;
            return [
                e,
                i
            ];
        });
    }
    setQueryData(t, e, n) {
        const i = this.defaultQueryOptions({
            queryKey: t
        }), s = this.#e.get(i.queryHash)?.state.data, o = dqk(e, s);
        if (o !== void 0) return this.#e.build(this, i).setData(o, {
            ...n,
            manual: !0
        });
    }
    setQueriesData(t, e, n) {
        return L$.batch(()=>this.#e.findAll(t).map(({ queryKey: i })=>[
                    i,
                    this.setQueryData(i, e, n)
                ]));
    }
    getQueryState(t) {
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return this.#e.get(e.queryHash)?.state;
    }
    removeQueries(t) {
        const e = this.#e;
        L$.batch(()=>{
            e.findAll(t).forEach((n)=>{
                e.remove(n);
            });
        });
    }
    resetQueries(t, e) {
        const n = this.#e;
        return L$.batch(()=>(n.findAll(t).forEach((i)=>{
                i.reset();
            }), this.refetchQueries({
                type: "active",
                ...t
            }, e)));
    }
    cancelQueries(t, e = {}) {
        const n = {
            revert: !0,
            ...e
        }, i = L$.batch(()=>this.#e.findAll(t).map((r)=>r.cancel(n)));
        return Promise.all(i).then(Cme).catch(Cme);
    }
    invalidateQueries(t, e = {}) {
        return L$.batch(()=>(this.#e.findAll(t).forEach((n)=>{
                n.invalidate();
            }), t?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
                ...t,
                type: t?.refetchType ?? t?.type ?? "active"
            }, e)));
    }
    refetchQueries(t, e = {}) {
        const n = {
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }, i = L$.batch(()=>this.#e.findAll(t).filter((r)=>!r.isDisabled() && !r.isStatic()).map((r)=>{
                let s = r.fetch(void 0, n);
                return n.throwOnError || (s = s.catch(Cme)), r.state.fetchStatus === "paused" ? Promise.resolve() : s;
            }));
        return Promise.all(i).then(Cme);
    }
    fetchQuery(t) {
        const e = this.defaultQueryOptions(t);
        e.retry === void 0 && (e.retry = !1);
        const n = this.#e.build(this, e);
        return n.isStaleByTime(WIt(e.staleTime, n)) ? n.fetch(e) : Promise.resolve(n.state.data);
    }
    prefetchQuery(t) {
        return this.fetchQuery(t).then(Cme).catch(Cme);
    }
    fetchInfiniteQuery(t) {
        return t.behavior = Uvs(t.pages), this.fetchQuery(t);
    }
    prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(Cme).catch(Cme);
    }
    ensureInfiniteQueryData(t) {
        return t.behavior = Uvs(t.pages), this.ensureQueryData(t);
    }
    resumePausedMutations() {
        return $Pi.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
        return this.#e;
    }
    getMutationCache() {
        return this.#t;
    }
    getDefaultOptions() {
        return this.#i;
    }
    setDefaultOptions(t) {
        this.#i = t;
    }
    setQueryDefaults(t, e) {
        this.#n.set(CYt(t), {
            queryKey: t,
            defaultOptions: e
        });
    }
    getQueryDefaults(t) {
        const e = [
            ...this.#n.values()
        ], n = {};
        return e.forEach((i)=>{
            jPi(t, i.queryKey) && Object.assign(n, i.defaultOptions);
        }), n;
    }
    setMutationDefaults(t, e) {
        this.#r.set(CYt(t), {
            mutationKey: t,
            defaultOptions: e
        });
    }
    getMutationDefaults(t) {
        const e = [
            ...this.#r.values()
        ], n = {};
        return e.forEach((i)=>{
            jPi(t, i.mutationKey) && Object.assign(n, i.defaultOptions);
        }), n;
    }
    defaultQueryOptions(t) {
        if (t._defaulted) return t;
        const e = {
            ...this.#i.queries,
            ...this.getQueryDefaults(t.queryKey),
            ...t,
            _defaulted: !0
        };
        return e.queryHash || (e.queryHash = xxl(e.queryKey, e)), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.queryFn === LMn && (e.enabled = !1), e;
    }
    defaultMutationOptions(t) {
        return t?._defaulted ? t : {
            ...this.#i.mutations,
            ...t?.mutationKey && this.getMutationDefaults(t.mutationKey),
            ...t,
            _defaulted: !0
        };
    }
    clear() {
        this.#e.clear(), this.#t.clear();
    }
};

}
