import { h } from "./tslib.es6.js";
var Xf, ec, vi, tc, qn, rc, Jf, R5, Rt, nc, jn, Zf, Qf, ep, tp;
export { Jf, Qf, R5, Rt, Xf, Zf, ec, ep, jn, nc, qn, rc, tc, tp, vi };
var __wakaru_T5_initialized = false;
export function T5() {
if (__wakaru_T5_initialized) return;
__wakaru_T5_initialized = true;
"use strict";
if (h(), Xf = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, ec = new Set, vi = typeof process == "object" && process ? process : {}, tc = (e, t, r, n)=>{
    typeof vi.emitWarning == "function" ? vi.emitWarning(e, t, r, n) : console.error(`[${r}] ${t}: ${e}`);
}, qn = globalThis.AbortController, rc = globalThis.AbortSignal, typeof qn > "u") {
    rc = class {
        constructor(){
            this._onabort = [], this.aborted = !1;
        }
        addEventListener(n, s) {
            this._onabort.push(s);
        }
    }, qn = class {
        constructor(){
            this.signal = new rc, t();
        }
        abort(n) {
            if (!this.signal.aborted) {
                this.signal.reason = n, this.signal.aborted = !0;
                for (const s of this.signal._onabort)s(n);
                this.signal.onabort?.(n);
            }
        }
    };
    let e = vi.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1";
    const t = ()=>{
        e && (e = !1, tc("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t));
    };
}
Jf = (e)=>!ec.has(e), R5 = Symbol("type"), Rt = (e)=>e && e === Math.floor(e) && e > 0 && Number.isFinite(e), nc = (e)=>Rt(e) ? e <= 2 ** 8 ? Uint8Array : e <= 2 ** 16 ? Uint16Array : e <= 2 ** 32 ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? jn : null : null, jn = class extends Array {
    constructor(e){
        super(e), this.fill(0);
    }
}, Zf = class Qs {
    static #c = !1;
    static create(t) {
        const r = nc(t);
        if (!r) return [];
        Qs.#c = !0;
        const n = new Qs(t, r);
        return Qs.#c = !1, n;
    }
    constructor(t, r){
        if (!Qs.#c) throw new TypeError("instantiate Stack using Stack.create(n)");
        this.heap = new r(t), this.length = 0;
    }
    push(t) {
        this.heap[this.length++] = t;
    }
    pop() {
        return this.heap[--this.length];
    }
}, tp = class i2 {
    constructor(t){
        this.#I = ()=>{}, this.#E = ()=>{}, this.#N = ()=>{}, this.#d = ()=>!1, this.#P = (H)=>{}, this.#C = (H, ee, Y)=>{}, this.#U = (H, ee, Y, B)=>{
            if (Y || B) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
            return 0;
        }, this[Qf] = "LRUCache";
        const { max: r = 0, ttl: n, ttlResolution: s = 1, ttlAutopurge: i, updateAgeOnGet: o, updateAgeOnHas: a, allowStale: c, dispose: l, onInsert: u, disposeAfter: d, noDisposeOnSet: f, noUpdateTTL: p, maxSize: g = 0, maxEntrySize: _ = 0, sizeCalculation: y, fetchMethod: m, memoMethod: A, noDeleteOnFetchRejection: S, noDeleteOnStaleGet: v, allowStaleOnFetchRejection: b, allowStaleOnFetchAbort: I, ignoreFetchAbort: O, perf: M } = t;
        if (M !== void 0 && typeof M?.now != "function") throw new TypeError("perf option must have a now() method if specified");
        if (this.#m = M ?? Xf, r !== 0 && !Rt(r)) throw new TypeError("max option must be a nonnegative integer");
        const F = r ? nc(r) : Array;
        if (!F) throw new Error(`invalid max value: ${r}`);
        if (this.#c = r, this.#h = g, this.maxEntrySize = _ || this.#h, this.sizeCalculation = y, this.sizeCalculation) {
            if (!this.#h && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if (typeof this.sizeCalculation != "function") throw new TypeError("sizeCalculation set to non-function");
        }
        if (A !== void 0 && typeof A != "function") throw new TypeError("memoMethod must be a function if defined");
        if (this.#M = A, m !== void 0 && typeof m != "function") throw new TypeError("fetchMethod must be a function if specified");
        if (this.#x = m, this.#k = !!m, this.#n = new Map, this.#r = new Array(r).fill(void 0), this.#e = new Array(r).fill(void 0), this.#l = new F(r), this.#f = new F(r), this.#a = 0, this.#i = 0, this.#y = Zf.create(r), this.#s = 0, this.#v = 0, typeof l == "function" && (this.#g = l), typeof u == "function" && (this.#O = u), typeof d == "function" ? (this.#_ = d, this.#o = []) : (this.#_ = void 0, this.#o = void 0), this.#w = !!this.#g, this.#D = !!this.#O, this.#u = !!this.#_, this.noDisposeOnSet = !!f, this.noUpdateTTL = !!p, this.noDeleteOnFetchRejection = !!S, this.allowStaleOnFetchRejection = !!b, this.allowStaleOnFetchAbort = !!I, this.ignoreFetchAbort = !!O, this.maxEntrySize !== 0) {
            if (this.#h !== 0 && !Rt(this.#h)) throw new TypeError("maxSize must be a positive integer if specified");
            if (!Rt(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            this.#G();
        }
        if (this.allowStale = !!c, this.noDeleteOnStaleGet = !!v, this.updateAgeOnGet = !!o, this.updateAgeOnHas = !!a, this.ttlResolution = Rt(s) || s === 0 ? s : 1, this.ttlAutopurge = !!i, this.ttl = n || 0, this.ttl) {
            if (!Rt(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            this.#H();
        }
        if (this.#c === 0 && this.ttl === 0 && this.#h === 0) throw new TypeError("At least one of max, maxSize, or ttl is required");
        if (!this.ttlAutopurge && !this.#c && !this.#h) {
            const H = "LRU_CACHE_UNBOUNDED";
            Jf(H) && (ec.add(H), tc("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", H, i2));
        }
    }
    #c;
    #h;
    #g;
    #O;
    #_;
    #x;
    #M;
    #m;
    get perf() {
        return this.#m;
    }
    #s;
    #v;
    #n;
    #r;
    #e;
    #l;
    #f;
    #a;
    #i;
    #y;
    #o;
    #S;
    #b;
    #p;
    #w;
    #k;
    #u;
    #D;
    static unsafeExposeInternals(t) {
        return {
            starts: t.#b,
            ttls: t.#p,
            sizes: t.#S,
            keyMap: t.#n,
            keyList: t.#r,
            valList: t.#e,
            next: t.#l,
            prev: t.#f,
            get head () {
                return t.#a;
            },
            get tail () {
                return t.#i;
            },
            free: t.#y,
            isBackgroundFetch: (r)=>t.#t(r),
            backgroundFetch: (r, n, s, i)=>t.#F(r, n, s, i),
            moveToTail: (r)=>t.#L(r),
            indexes: (r)=>t.#A(r),
            rindexes: (r)=>t.#R(r),
            isStale: (r)=>t.#d(r)
        };
    }
    get max() {
        return this.#c;
    }
    get maxSize() {
        return this.#h;
    }
    get calculatedSize() {
        return this.#v;
    }
    get size() {
        return this.#s;
    }
    get fetchMethod() {
        return this.#x;
    }
    get memoMethod() {
        return this.#M;
    }
    get dispose() {
        return this.#g;
    }
    get onInsert() {
        return this.#O;
    }
    get disposeAfter() {
        return this.#_;
    }
    getRemainingTTL(t) {
        return this.#n.has(t) ? 1 / 0 : 0;
    }
    #H() {
        const t = new jn(this.#c), r = new jn(this.#c);
        this.#p = t, this.#b = r, this.#N = (i, o, a = this.#m.now())=>{
            if (r[i] = o !== 0 ? a : 0, t[i] = o, o !== 0 && this.ttlAutopurge) {
                const c = setTimeout(()=>{
                    this.#d(i) && this.#T(this.#r[i], "expire");
                }, o + 1);
                c.unref && c.unref();
            }
        }, this.#I = (i)=>{
            r[i] = t[i] !== 0 ? this.#m.now() : 0;
        }, this.#E = (i, o)=>{
            if (t[o]) {
                const a = t[o], c = r[o];
                if (!a || !c) return;
                i.ttl = a, i.start = c, i.now = n || s();
                const l = i.now - c;
                i.remainingTTL = a - l;
            }
        };
        let n = 0;
        const s = ()=>{
            const i = this.#m.now();
            if (this.ttlResolution > 0) {
                n = i;
                const o = setTimeout(()=>{
                    n = 0;
                }, this.ttlResolution);
                o.unref && o.unref();
            }
            return i;
        };
        this.getRemainingTTL = (i)=>{
            const o = this.#n.get(i);
            if (o === void 0) return 0;
            const a = t[o], c = r[o];
            if (!a || !c) return 1 / 0;
            const l = (n || s()) - c;
            return a - l;
        }, this.#d = (i)=>{
            const o = r[i], a = t[i];
            return !!a && !!o && (n || s()) - o > a;
        };
    }
    #I;
    #E;
    #N;
    #d;
    #G() {
        const t = new jn(this.#c);
        this.#v = 0, this.#S = t, this.#P = (r)=>{
            this.#v -= t[r], t[r] = 0;
        }, this.#U = (r, n, s, i)=>{
            if (this.#t(n)) return 0;
            if (!Rt(s)) if (i) {
                if (typeof i != "function") throw new TypeError("sizeCalculation must be a function");
                if (s = i(n, r), !Rt(s)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
            } else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
            return s;
        }, this.#C = (r, n, s)=>{
            if (t[r] = n, this.#h) {
                const i = this.#h - t[r];
                for(; this.#v > i;)this.#$(!0);
            }
            this.#v += t[r], s && (s.entrySize = n, s.totalCalculatedSize = this.#v);
        };
    }
    #P;
    #C;
    #U;
    *#A({ allowStale: t = this.allowStale } = {}) {
        if (this.#s) for(let r = this.#i; !(!this.#B(r) || ((t || !this.#d(r)) && (yield r), r === this.#a));)r = this.#f[r];
    }
    *#R({ allowStale: t = this.allowStale } = {}) {
        if (this.#s) for(let r = this.#a; !(!this.#B(r) || ((t || !this.#d(r)) && (yield r), r === this.#i));)r = this.#l[r];
    }
    #B(t) {
        return t !== void 0 && this.#n.get(this.#r[t]) === t;
    }
    *entries() {
        for (const t of this.#A())this.#e[t] !== void 0 && this.#r[t] !== void 0 && !this.#t(this.#e[t]) && (yield [
            this.#r[t],
            this.#e[t]
        ]);
    }
    *rentries() {
        for (const t of this.#R())this.#e[t] !== void 0 && this.#r[t] !== void 0 && !this.#t(this.#e[t]) && (yield [
            this.#r[t],
            this.#e[t]
        ]);
    }
    *keys() {
        for (const t of this.#A()){
            const r = this.#r[t];
            r !== void 0 && !this.#t(this.#e[t]) && (yield r);
        }
    }
    *rkeys() {
        for (const t of this.#R()){
            const r = this.#r[t];
            r !== void 0 && !this.#t(this.#e[t]) && (yield r);
        }
    }
    *values() {
        for (const t of this.#A())this.#e[t] !== void 0 && !this.#t(this.#e[t]) && (yield this.#e[t]);
    }
    *rvalues() {
        for (const t of this.#R())this.#e[t] !== void 0 && !this.#t(this.#e[t]) && (yield this.#e[t]);
    }
    [(ep = Symbol.iterator, Qf = Symbol.toStringTag, ep)]() {
        return this.entries();
    }
    find(t, r = {}) {
        for (const n of this.#A()){
            const s = this.#e[n], i = this.#t(s) ? s.__staleWhileFetching : s;
            if (i !== void 0 && t(i, this.#r[n], this)) return this.get(this.#r[n], r);
        }
    }
    forEach(t, r = this) {
        for (const n of this.#A()){
            const s = this.#e[n], i = this.#t(s) ? s.__staleWhileFetching : s;
            i !== void 0 && t.call(r, i, this.#r[n], this);
        }
    }
    rforEach(t, r = this) {
        for (const n of this.#R()){
            const s = this.#e[n], i = this.#t(s) ? s.__staleWhileFetching : s;
            i !== void 0 && t.call(r, i, this.#r[n], this);
        }
    }
    purgeStale() {
        let t = !1;
        for (const r of this.#R({
            allowStale: !0
        }))this.#d(r) && (this.#T(this.#r[r], "expire"), t = !0);
        return t;
    }
    info(t) {
        const r = this.#n.get(t);
        if (r === void 0) return;
        const n = this.#e[r], s = this.#t(n) ? n.__staleWhileFetching : n;
        if (s === void 0) return;
        const i = {
            value: s
        };
        if (this.#p && this.#b) {
            const o = this.#p[r], a = this.#b[r];
            if (o && a) {
                const c = o - (this.#m.now() - a);
                i.ttl = c, i.start = Date.now();
            }
        }
        return this.#S && (i.size = this.#S[r]), i;
    }
    dump() {
        const t = [];
        for (const r of this.#A({
            allowStale: !0
        })){
            const n = this.#r[r], s = this.#e[r], i = this.#t(s) ? s.__staleWhileFetching : s;
            if (i === void 0 || n === void 0) continue;
            const o = {
                value: i
            };
            if (this.#p && this.#b) {
                o.ttl = this.#p[r];
                const a = this.#m.now() - this.#b[r];
                o.start = Math.floor(Date.now() - a);
            }
            this.#S && (o.size = this.#S[r]), t.unshift([
                n,
                o
            ]);
        }
        return t;
    }
    load(t) {
        this.clear();
        for (const [r, n] of t){
            if (n.start) {
                const s = Date.now() - n.start;
                n.start = this.#m.now() - s;
            }
            this.set(r, n.value, n);
        }
    }
    set(t, r, n = {}) {
        if (r === void 0) return this.delete(t), this;
        const { ttl: s = this.ttl, start: i, noDisposeOnSet: o = this.noDisposeOnSet, sizeCalculation: a = this.sizeCalculation, status: c } = n;
        let { noUpdateTTL: l = this.noUpdateTTL } = n;
        const u = this.#U(t, r, n.size || 0, a);
        if (this.maxEntrySize && u > this.maxEntrySize) return c && (c.set = "miss", c.maxEntrySizeExceeded = !0), this.#T(t, "set"), this;
        let d = this.#s === 0 ? void 0 : this.#n.get(t);
        if (d === void 0) d = this.#s === 0 ? this.#i : this.#y.length !== 0 ? this.#y.pop() : this.#s === this.#c ? this.#$(!1) : this.#s, this.#r[d] = t, this.#e[d] = r, this.#n.set(t, d), this.#l[this.#i] = d, this.#f[d] = this.#i, this.#i = d, this.#s++, this.#C(d, u, c), c && (c.set = "add"), l = !1, this.#D && this.#O?.(r, t, "add");
        else {
            this.#L(d);
            const f = this.#e[d];
            if (r !== f) {
                if (this.#k && this.#t(f)) {
                    f.__abortController.abort(new Error("replaced"));
                    const { __staleWhileFetching: p } = f;
                    p !== void 0 && !o && (this.#w && this.#g?.(p, t, "set"), this.#u && this.#o?.push([
                        p,
                        t,
                        "set"
                    ]));
                } else o || (this.#w && this.#g?.(f, t, "set"), this.#u && this.#o?.push([
                    f,
                    t,
                    "set"
                ]));
                if (this.#P(d), this.#C(d, u, c), this.#e[d] = r, c) {
                    c.set = "replace";
                    const p = f && this.#t(f) ? f.__staleWhileFetching : f;
                    p !== void 0 && (c.oldValue = p);
                }
            } else c && (c.set = "update");
            this.#D && this.onInsert?.(r, t, r === f ? "update" : "replace");
        }
        if (s !== 0 && !this.#p && this.#H(), this.#p && (l || this.#N(d, s, i), c && this.#E(c, d)), !o && this.#u && this.#o) {
            const f = this.#o;
            let p;
            for(; p = f?.shift();)this.#_?.(...p);
        }
        return this;
    }
    pop() {
        try {
            for(; this.#s;){
                const t = this.#e[this.#a];
                if (this.#$(!0), this.#t(t)) {
                    if (t.__staleWhileFetching) return t.__staleWhileFetching;
                } else if (t !== void 0) return t;
            }
            return;
        } finally{
            if (this.#u && this.#o) {
                const t = this.#o;
                let r;
                for(; r = t?.shift();)this.#_?.(...r);
            }
        }
    }
    #$(t) {
        const r = this.#a, n = this.#r[r], s = this.#e[r];
        return this.#k && this.#t(s) ? s.__abortController.abort(new Error("evicted")) : (this.#w || this.#u) && (this.#w && this.#g?.(s, n, "evict"), this.#u && this.#o?.push([
            s,
            n,
            "evict"
        ])), this.#P(r), t && (this.#r[r] = void 0, this.#e[r] = void 0, this.#y.push(r)), this.#s === 1 ? (this.#a = this.#i = 0, this.#y.length = 0) : this.#a = this.#l[r], this.#n.delete(n), this.#s--, r;
    }
    has(t, r = {}) {
        const { updateAgeOnHas: n = this.updateAgeOnHas, status: s } = r, i = this.#n.get(t);
        if (i !== void 0) {
            const o = this.#e[i];
            if (this.#t(o) && o.__staleWhileFetching === void 0) return !1;
            if (this.#d(i)) s && (s.has = "stale", this.#E(s, i));
            else return n && this.#I(i), s && (s.has = "hit", this.#E(s, i)), !0;
        } else s && (s.has = "miss");
        return !1;
    }
    peek(t, r = {}) {
        const { allowStale: n = this.allowStale } = r, s = this.#n.get(t);
        if (s === void 0 || !n && this.#d(s)) return;
        const i = this.#e[s];
        return this.#t(i) ? i.__staleWhileFetching : i;
    }
    #F(t, r, n, s) {
        const i = r === void 0 ? void 0 : this.#e[r];
        if (this.#t(i)) return i;
        const o = new qn, { signal: a } = n;
        a?.addEventListener("abort", ()=>o.abort(a.reason), {
            signal: o.signal
        });
        const c = {
            signal: o.signal,
            options: n,
            context: s
        }, l = (_, y = !1)=>{
            const { aborted: m } = o.signal, A = n.ignoreFetchAbort && _ !== void 0;
            if (n.status && (m && !y ? (n.status.fetchAborted = !0, n.status.fetchError = o.signal.reason, A && (n.status.fetchAbortIgnored = !0)) : n.status.fetchResolved = !0), m && !A && !y) return d(o.signal.reason);
            const S = p, v = this.#e[r];
            return (v === p || A && y && v === void 0) && (_ === void 0 ? S.__staleWhileFetching !== void 0 ? this.#e[r] = S.__staleWhileFetching : this.#T(t, "fetch") : (n.status && (n.status.fetchUpdated = !0), this.set(t, _, c.options))), _;
        }, u = (_)=>(n.status && (n.status.fetchRejected = !0, n.status.fetchError = _), d(_)), d = (_)=>{
            const { aborted: y } = o.signal, m = y && n.allowStaleOnFetchAbort, A = m || n.allowStaleOnFetchRejection, S = A || n.noDeleteOnFetchRejection, v = p;
            if (this.#e[r] === p && (!S || v.__staleWhileFetching === void 0 ? this.#T(t, "fetch") : m || (this.#e[r] = v.__staleWhileFetching)), A) return n.status && v.__staleWhileFetching !== void 0 && (n.status.returnedStale = !0), v.__staleWhileFetching;
            if (v.__returned === v) throw _;
        }, f = (_, y)=>{
            const m = this.#x?.(t, i, c);
            m && m instanceof Promise && m.then((A)=>_(A === void 0 ? void 0 : A), y), o.signal.addEventListener("abort", ()=>{
                (!n.ignoreFetchAbort || n.allowStaleOnFetchAbort) && (_(void 0), n.allowStaleOnFetchAbort && (_ = (A)=>l(A, !0)));
            });
        };
        n.status && (n.status.fetchDispatched = !0);
        const p = new Promise(f).then(l, u), g = Object.assign(p, {
            __abortController: o,
            __staleWhileFetching: i,
            __returned: void 0
        });
        return r === void 0 ? (this.set(t, g, {
            ...c.options,
            status: void 0
        }), r = this.#n.get(t)) : this.#e[r] = g, g;
    }
    #t(t) {
        if (!this.#k) return !1;
        const r = t;
        return !!r && r instanceof Promise && r.hasOwnProperty("__staleWhileFetching") && r.__abortController instanceof qn;
    }
    async fetch(t, r = {}) {
        const { allowStale: n = this.allowStale, updateAgeOnGet: s = this.updateAgeOnGet, noDeleteOnStaleGet: i = this.noDeleteOnStaleGet, ttl: o = this.ttl, noDisposeOnSet: a = this.noDisposeOnSet, size: c = 0, sizeCalculation: l = this.sizeCalculation, noUpdateTTL: u = this.noUpdateTTL, noDeleteOnFetchRejection: d = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: f = this.allowStaleOnFetchRejection, ignoreFetchAbort: p = this.ignoreFetchAbort, allowStaleOnFetchAbort: g = this.allowStaleOnFetchAbort, context: _, forceRefresh: y = !1, status: m, signal: A } = r;
        if (!this.#k) return m && (m.fetch = "get"), this.get(t, {
            allowStale: n,
            updateAgeOnGet: s,
            noDeleteOnStaleGet: i,
            status: m
        });
        const S = {
            allowStale: n,
            updateAgeOnGet: s,
            noDeleteOnStaleGet: i,
            ttl: o,
            noDisposeOnSet: a,
            size: c,
            sizeCalculation: l,
            noUpdateTTL: u,
            noDeleteOnFetchRejection: d,
            allowStaleOnFetchRejection: f,
            allowStaleOnFetchAbort: g,
            ignoreFetchAbort: p,
            status: m,
            signal: A
        }, v = this.#n.get(t);
        if (v === void 0) {
            m && (m.fetch = "miss");
            const b = this.#F(t, v, S, _);
            return b.__returned = b;
        } else {
            const b = this.#e[v];
            if (this.#t(b)) {
                const H = n && b.__staleWhileFetching !== void 0;
                return m && (m.fetch = "inflight", H && (m.returnedStale = !0)), H ? b.__staleWhileFetching : b.__returned = b;
            }
            const I = this.#d(v);
            if (!y && !I) return m && (m.fetch = "hit"), this.#L(v), s && this.#I(v), m && this.#E(m, v), b;
            const O = this.#F(t, v, S, _), F = O.__staleWhileFetching !== void 0 && n;
            return m && (m.fetch = I ? "stale" : "refresh", F && I && (m.returnedStale = !0)), F ? O.__staleWhileFetching : O.__returned = O;
        }
    }
    async forceFetch(t, r = {}) {
        const n = await this.fetch(t, r);
        if (n === void 0) throw new Error("fetch() returned undefined");
        return n;
    }
    memo(t, r = {}) {
        const n = this.#M;
        if (!n) throw new Error("no memoMethod provided to constructor");
        const { context: s, forceRefresh: i, ...o } = r, a = this.get(t, o);
        if (!i && a !== void 0) return a;
        const c = n(t, a, {
            options: o,
            context: s
        });
        return this.set(t, c, o), c;
    }
    get(t, r = {}) {
        const { allowStale: n = this.allowStale, updateAgeOnGet: s = this.updateAgeOnGet, noDeleteOnStaleGet: i = this.noDeleteOnStaleGet, status: o } = r, a = this.#n.get(t);
        if (a !== void 0) {
            const c = this.#e[a], l = this.#t(c);
            return o && this.#E(o, a), this.#d(a) ? (o && (o.get = "stale"), l ? (o && n && c.__staleWhileFetching !== void 0 && (o.returnedStale = !0), n ? c.__staleWhileFetching : void 0) : (i || this.#T(t, "expire"), o && n && (o.returnedStale = !0), n ? c : void 0)) : (o && (o.get = "hit"), l ? c.__staleWhileFetching : (this.#L(a), s && this.#I(a), c));
        } else o && (o.get = "miss");
    }
    #z(t, r) {
        this.#f[r] = t, this.#l[t] = r;
    }
    #L(t) {
        t !== this.#i && (t === this.#a ? this.#a = this.#l[t] : this.#z(this.#f[t], this.#l[t]), this.#z(this.#i, t), this.#i = t);
    }
    delete(t) {
        return this.#T(t, "delete");
    }
    #T(t, r) {
        let n = !1;
        if (this.#s !== 0) {
            const s = this.#n.get(t);
            if (s !== void 0) if (n = !0, this.#s === 1) this.#W(r);
            else {
                this.#P(s);
                const i = this.#e[s];
                if (this.#t(i) ? i.__abortController.abort(new Error("deleted")) : (this.#w || this.#u) && (this.#w && this.#g?.(i, t, r), this.#u && this.#o?.push([
                    i,
                    t,
                    r
                ])), this.#n.delete(t), this.#r[s] = void 0, this.#e[s] = void 0, s === this.#i) this.#i = this.#f[s];
                else if (s === this.#a) this.#a = this.#l[s];
                else {
                    const o = this.#f[s];
                    this.#l[o] = this.#l[s];
                    const a = this.#l[s];
                    this.#f[a] = this.#f[s];
                }
                this.#s--, this.#y.push(s);
            }
        }
        if (this.#u && this.#o?.length) {
            const s = this.#o;
            let i;
            for(; i = s?.shift();)this.#_?.(...i);
        }
        return n;
    }
    clear() {
        this.#W("delete");
    }
    #W(t) {
        for (const r of this.#R({
            allowStale: !0
        })){
            const n = this.#e[r];
            if (this.#t(n)) n.__abortController.abort(new Error("deleted"));
            else {
                const s = this.#r[r];
                this.#w && this.#g?.(n, s, t), this.#u && this.#o?.push([
                    n,
                    s,
                    t
                ]);
            }
        }
        if (this.#n.clear(), this.#e.fill(void 0), this.#r.fill(void 0), this.#p && this.#b && (this.#p.fill(0), this.#b.fill(0)), this.#S && this.#S.fill(0), this.#a = 0, this.#i = 0, this.#y.length = 0, this.#v = 0, this.#s = 0, this.#u && this.#o) {
            const r = this.#o;
            let n;
            for(; n = r?.shift();)this.#_?.(...n);
        }
    }
};

}
